import { describe, expect, it } from "vitest";
import {
  calculateEfw,
  clinicalCases,
  gestationalAge,
  intervalGrowth,
  medianComparison,
  provenance,
  snapshot,
} from "./lookup-cases";
import { highlights } from "./lookup-cards";
import { clinicalRegistry, lookupSources } from "./lookup-sources";
const [meera, anaya] = clinicalCases;
describe("two-case educational lookup fixtures", () => {
  it.each([
    [meera, 1930, 166.6666667, -35, 0.4],
    [anaya, 1400, 83.3333333, -118.3333333, 0.3],
  ] as const)(
    "calculates the supplied 34-week fixture for $name",
    (record, efw, velocity, difference, maternalVelocity) => {
      const view = snapshot(record, record.defaultDate);
      expect(view.ga).toBe("34+0");
      expect(view.current?.selectedEfw).toBe(efw);
      expect(view.interval?.days).toBe(21);
      expect(view.interval?.gramsPerWeek).toBeCloseTo(velocity, 4);
      expect(view.comparison?.difference).toBeCloseTo(difference, 4);
      expect(view.maternalVelocity).toBeCloseTo(maternalVelocity, 4);
      expect(highlights(record, view)).toHaveLength(24);
    },
  );
  it("keeps EDD and fixture dates independent of the current clock", () => {
    expect(gestationalAge(meera.edd, "2026-02-09")).toBe("10+0");
    expect(gestationalAge(anaya.edd, "2026-01-12")).toBe("9+0");
    expect(gestationalAge(anaya.edd, "2026-06-23")).toBe("32+1");
    expect(gestationalAge(anaya.edd, anaya.edd)).toBe("40+0");
    expect(snapshot(anaya, "2026-06-23").current?.ga).toBe("31+0");
  });
  it("converts millimetres once and never multiplies Hadlock grams by 1000", () => {
    for (const record of clinicalCases) {
      for (const scan of record.growth) {
        expect(Math.abs(calculateEfw(scan) - scan.reportedEfw)).toBeLessThan(3);
        expect(calculateEfw(scan)).toBeGreaterThan(200);
        expect(calculateEfw(scan)).toBeLessThan(3000);
      }
    }
  });
  it("does not leak later AEDF, assessment or outcome into earlier snapshots", () => {
    const early = snapshot(anaya, "2026-06-15");
    expect(early.latestDoppler?.edf).toBe("Forward");
    expect(early.assessment?.text).not.toContain("Stage II");
    expect(early.outcome).toBeNull();
    const firstAbsent = snapshot(anaya, "2026-06-22");
    expect(firstAbsent.latestDoppler?.edf).toBe("Absent");
    expect(firstAbsent.assessment?.text).not.toContain("Stage II");
    const confirmed = snapshot(anaya, "2026-06-23");
    expect(confirmed.assessment?.text).toContain("clinician-recorded");
    expect(confirmed.current?.selectedEfw).toBe(1150);
    expect(confirmed.growth).toHaveLength(4);
    expect(confirmed.interval?.days).toBe(21);
    expect(confirmed.latestDoppler?.date).toBe("2026-06-23");
  });
  it("keeps birthweight separate and never inserts Doppler-only EFW points", () => {
    const final = snapshot(anaya, anaya.defaultDate);
    expect(final.growth).toHaveLength(5);
    expect(final.outcome?.weight).toBe(1450);
    expect(final.growth.some((s) => s.selectedEfw === 1450)).toBe(false);
    expect(final.growth.some((s) => s.date === "2026-06-22")).toBe(false);
    expect(snapshot(meera, "2026-07-27").outcome).toBeNull();
  });
  it("preserves missing DV, table bands and unavailable GROW outputs", () => {
    expect(snapshot(meera, meera.defaultDate).latestDoppler?.dv).toBeNull();
    const cards = highlights(anaya, snapshot(anaya, anaya.defaultDate));
    expect(cards.find((c) => c.id === "centile")?.value).toBe("<P2.5");
    expect(cards.find((c) => c.id === "term-weight")?.value).toBe("Not available");
    expect(cards.find((c) => c.id === "third-centile")?.value).toBe("Not available");
    expect(cards.find((c) => c.id === "position-shift")?.detail).toContain("no exact");
  });
  it("uses the chosen real scan pair and rejects absent or invalid reference intervals", () => {
    const view = snapshot(anaya, anaya.defaultDate, anaya.growth[2].id);
    expect(view.interval?.days).toBe(42);
    expect(view.interval?.delta).toBe(520);
    expect(view.comparison?.referenceGramsPerWeek).toBeCloseTo((2312 - 1189) / 6, 5);
    expect(medianComparison(anaya.growth[0], anaya.growth[1])).toBeNull();
    expect(intervalGrowth(anaya.growth[0], anaya.growth[0])).toBeNull();
    expect(snapshot(anaya, "2026-01-12").current).toBeUndefined();
    expect(snapshot(anaya, "2026-01-12").assessment).toBeUndefined();
  });
  it("retains observation identity and separate selected EFW provenance", () => {
    const origin = provenance(meera, meera.growth[3]);
    expect(origin.source_reported_ga).toBe(origin.accepted_ga);
    expect(origin.ocr_confidence).toBeNull();
    expect(origin.selected_efw.observation_revision).toBe("fixture-v1");
    expect(origin.anchor_id).toBe("GA-MEERA-v1");
    expect(origin.report_id).toBe("DEMO01-US-34W");
  });
  it("resolves every fixture to a real supplied registry identity without promoting it", () => {
    expect(clinicalRegistry.sources).toHaveLength(38);
    expect(clinicalRegistry.summary.lookup_enabled_count).toBe(0);
    expect(clinicalRegistry.summary.utility_enabled_count).toBe(0);
    for (const fixture of lookupSources) {
      const registered = clinicalRegistry.sources.find((s) => s.id === fixture.registryId);
      expect(registered).toBeDefined();
      expect(fixture.authoritative).toBe(false);
      expect(fixture.fixture_only).toBe(true);
      expect(registered?.lookupEnabled).toBe(false);
      expect(registered?.lookupStatus).toBe("clinical_review_pending");
      expect(fixture.title).toBe(registered?.title);
      expect(fixture.url).toBe(registered?.url);
    }
  });
});
