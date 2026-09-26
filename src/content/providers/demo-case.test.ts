import { describe, expect, it } from "vitest";
import { demoCase, displayDate, gestationalLabel, intervalSummary } from "./demo-case";

describe("the clinician demonstration case", () => {
  it("keeps every visit consistent with one 40-week EDD", () => {
    const edd = Date.parse(`${demoCase.edd}T00:00:00Z`);
    for (const visit of demoCase.visits) {
      const remaining = (edd - Date.parse(`${visit.date}T00:00:00Z`)) / 86_400_000;
      expect(visit.gestationalDays + remaining).toBe(280);
      expect(visit.dv).toBeNull();
    }
    expect(demoCase.visits.map((visit) => gestationalLabel(visit.gestationalDays))).toEqual([
      "20w 0d",
      "24w 1d",
      "28w 3d",
    ]);
    expect(displayDate(demoCase.edd)).toBe("12 Jul 2026");
  });

  it("uses calendar intervals rather than rounded gestational weeks", () => {
    const [first, second, third] = demoCase.visits;
    expect(intervalSummary(first, second)).toEqual({ days: 29, change: 364, gramsPerWeek: 88 });
    expect(intervalSummary(second, third)).toEqual({ days: 30, change: 542, gramsPerWeek: 126 });
  });

  it("does not show an interval result without two chronological visits", () => {
    const [first, second] = demoCase.visits;
    expect(intervalSummary(undefined, first)).toBeNull();
    expect(intervalSummary(first, first)).toBeNull();
    expect(intervalSummary(second, first)).toBeNull();
  });
});
