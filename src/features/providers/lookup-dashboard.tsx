"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { providerRoutes } from "@/content/providers/site";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  FileSearch,
  History,
  Layers,
  ScanLine,
} from "lucide-react";
import {
  clinicalCases,
  displayDate,
  gestationalAge,
  gestationalDays,
  intervalGrowth,
  reviewDates,
  snapshot,
  type GrowthScan,
} from "@/content/providers/lookup-cases";
import { highlights, modules, type ModuleId } from "@/content/providers/lookup-cards";
import { frameworkIds, lookupSources } from "@/content/providers/lookup-sources";
import {
  DefinitionList,
  MethodDetail,
  ObservationDetail,
  ReviewDialog,
  SourceDetail,
  SourceRegistryPanel,
  VerificationDemo,
  type DopplerRevision,
} from "./lookup-panels";
import styles from "@/components/provider/lookup-dashboard.module.css";

type Drawer =
  | "sources"
  | "method"
  | "observation"
  | "history"
  | "missing"
  | "interpretation"
  | "verify"
  | "context"
  | `source:${string}`
  | null;
type Selection = { date: string; previousId?: string; revisions: boolean; reference: string };
const initialSelections = Object.fromEntries(
  clinicalCases.map((c) => [c.key, { date: c.defaultDate, revisions: false, reference: "WHO" }]),
) as Record<string, Selection>;
const formatWeight = (value: number) => `${value.toLocaleString("en-GB")} g`;

export function LookupDashboard() {
  const [caseKey, setCaseKey] = useState("meera");
  const [selections, setSelections] = useState(initialSelections);
  const [moduleId, setModuleId] = useState<ModuleId>("home");
  const [drawer, setDrawer] = useState<Drawer>(null);
  const [revisions, setRevisions] = useState<DopplerRevision[]>([]);
  const [announcement, setAnnouncement] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const pendingModuleFocus = useRef(false);
  useLayoutEffect(() => {
    if (pendingModuleFocus.current) {
      pendingModuleFocus.current = false;
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, [moduleId]);
  const record = clinicalCases.find((c) => c.key === caseKey)!;
  const selection = selections[caseKey];
  const original = snapshot(record, selection.date, selection.previousId);
  const revision = selection.revisions
    ? revisions.filter((r) => r.reportId === original.latestDoppler?.id).at(-1)
    : undefined;
  const reviewedDoppler = original.doppler.map((row) => {
    const correction = selection.revisions
      ? revisions.filter((r) => r.reportId === row.id).at(-1)
      : undefined;
    return correction
      ? { ...row, ua: correction.ua, mca: correction.mca, edf: correction.edf }
      : row;
  });
  const view = { ...original, doppler: reviewedDoppler, latestDoppler: reviewedDoppler.at(-1) };
  const cards = highlights(record, view).map((c) =>
    revision && c.id === "doppler-finding" ? { ...c, authority: "Corrected and confirmed" } : c,
  );
  const activeModule = modules.find((m) => m.id === moduleId)!;
  const activeSource = drawer?.startsWith("source:")
    ? lookupSources.find((s) => s.id === drawer.slice(7))
    : undefined;
  const choose = (patch: Partial<Selection>) =>
    setSelections((s) => ({ ...s, [caseKey]: { ...s[caseKey], ...patch } }));
  const navigate = (id: ModuleId) => {
    if (id === moduleId) {
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      pendingModuleFocus.current = true;
      setModuleId(id);
    }
  };
  const study = (key: string) => {
    setCaseKey(key);
    setAnnouncement(
      `Opened ${clinicalCases.find((c) => c.key === key)!.name}'s illustrative case.`,
    );
  };
  const why = activeSource
    ? `${record.name} · review ${displayDate(selection.date)} · ${view.current ? `selected EFW ${formatWeight(view.current.selectedEfw)}, WHO ${view.current.band}` : "dating record only"}${view.latestDoppler ? `; UA EDF ${view.latestDoppler.edf.toLowerCase()}, acquired ${displayDate(view.latestDoppler.date)}` : "; Doppler not assessed"}. ${revision ? "Confirmed demo revision selected; the original clinician assessment has not been updated." : "Matched from verified synthetic observations."}`
    : "";
  const drawerTitle = activeSource
    ? "Source & framework"
    : (
        {
          sources: "Clinical source registry",
          method: "Methods & reference identity",
          observation: "Observation & report",
          history: "Historical review",
          missing: "Missing information",
          interpretation: "Clinician interpretation",
          verify: "Report verification demonstration",
          context: "Maternal & pregnancy context",
        } as Record<string, string>
      )[drawer ?? ""];
  const current = view.current;
  const d = view.latestDoppler;
  const dateOptions = reviewDates(record);
  const caseRevisions = revisions.filter(
    (r) => record.doppler.some((doppler) => doppler.id === r.reportId) && r.date <= selection.date,
  );
  return (
    <div
      className={styles.dashboard}
      data-testid="clinical-lookup-dashboard"
      onClickCapture={(event) => {
        if (event.target instanceof Element) {
          const button = event.target.closest("button");
          if (button && !button.closest("dialog")) {
            lastTrigger.current = button;
          }
        }
      }}
    >
      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>ODRISC for clinicians · Interactive case study</span>
          <h1>
            Fetal Growth
            <span>
              A connected view.
              <br />A traceable assessment.
            </span>
          </h1>
          <p>
            Review the pregnancy timeline, fetal growth, maternal context and the clinical sources
            behind each assessment in one connected workspace.
          </p>
          <p className={styles.heroNote}>
            Verified observations stay linked to their date, source, method and review history.
          </p>
          <div className={styles.actions}>
            <a
              href="#clinical-workspace"
              className={styles.primaryButton}
              onClick={() => study("meera")}
            >
              Study Case 1 <ArrowUpRight size={18} />
            </a>
            <a
              href="#clinical-workspace"
              className={styles.secondaryButton}
              onClick={() => study("anaya")}
            >
              Study Case 2 <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className={styles.heroVisual} aria-label="Five connected clinical module families">
          <span className={styles.eyebrow}>One pregnancy record</span>
          <div className={styles.visualAnchor}>
            <ScanLine size={30} strokeWidth={1.3} />
            <strong>
              From observation
              <br />
              to evidence.
            </strong>
            <span>DATE · SOURCE · METHOD · REVIEW</span>
          </div>
          {[
            "Golden GA Anchor",
            "TOW Correction Model",
            "Maternal-Fetal Matrix",
            "Growth Analysis",
            "Doppler Guideline Lookup",
          ].map((label, i) => (
            <div className={styles.visualRow} key={label}>
              <span>0{i + 1}</span>
              <strong>{label}</strong>
              <ChevronRight size={15} />
            </div>
          ))}
        </div>
      </section>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>Two records. Different clinical questions.</span>
        <h2>
          Less time rebuilding the record.
          <br />
          More time reviewing what matters.
        </h2>
        <p>
          Explore how verified observations, calculations and clinician-recorded assessments stay
          distinct across a connected pregnancy timeline.
        </p>
      </div>
      <section
        id="clinical-workspace"
        className={styles.workspace}
        aria-label="Interactive clinical case workspace"
      >
        <div className={styles.caseSelector}>
          {clinicalCases.map((c, i) => (
            <button
              className={styles.caseChoice}
              type="button"
              key={c.key}
              aria-pressed={caseKey === c.key}
              onClick={() => study(c.key)}
            >
              <span className={styles.caseNumber}>0{i + 1}</span>
              <div>
                <span className={styles.eyebrow}>{c.name} · Illustrative case</span>
                <strong>{c.title}</strong>
                <p>{c.summary}</p>
              </div>
              <span className={styles.caseTick} aria-hidden="true">
                {caseKey === c.key ? <Check size={18} /> : <ArrowUpRight size={18} />}
              </span>
            </button>
          ))}
        </div>
        <div className={styles.caseHeader}>
          <div className={styles.caseIdentity}>
            <div className={styles.avatar} aria-hidden="true">
              {record.name[0]}
            </div>
            <div>
              <h2>
                {record.name}
                <span>Singleton pregnancy</span>
              </h2>
              <p>
                {record.id} · {record.pregnancyId} · fetus {record.fetusId}
              </p>
              <div className={styles.badges}>
                <span>Illustrative case</span>
                <span>Synthetic data</span>
                <span>Not a real patient</span>
              </div>
            </div>
          </div>
          <div className={styles.dateControl}>
            <label htmlFor="clinical-review-date">Review date</label>
            <select
              id="clinical-review-date"
              value={selection.date}
              onChange={(e) => {
                choose({ date: e.target.value, previousId: undefined });
                setAnnouncement(
                  `Reviewing ${record.name} at ${gestationalAge(record.edd, e.target.value)}.`,
                );
              }}
            >
              {dateOptions.map((date) => (
                <option key={date} value={date}>
                  {displayDate(date)} · {gestationalAge(record.edd, date)}
                  {record.growth.some((s) => s.date === date)
                    ? " · growth scan"
                    : record.doppler.some((s) => s.date === date)
                      ? " · Doppler only"
                      : " · record"}
                </option>
              ))}
            </select>
            <button className={styles.textButton} onClick={() => setDrawer("history")}>
              <History size={14} /> Review history
            </button>
          </div>
          <div className={styles.contextGrid}>
            <div>
              <span>Accepted EDD</span>
              <strong>{displayDate(record.edd)}</strong>
            </div>
            <div>
              <span>GA on review date</span>
              <strong>{view.ga}</strong>
            </div>
            <div>
              <span>Latest verified report</span>
              <strong>
                {view.latestVerifiedDate ? displayDate(view.latestVerifiedDate) : "Not available"}
              </strong>
            </div>
            <div>
              <span>Selected growth scan</span>
              <strong>
                {current ? `${current.ga} · ${displayDate(current.date)}` : "Not available"}
              </strong>
            </div>
            <div>
              <span>Latest Doppler</span>
              <strong>{d ? displayDate(d.date) : "Not assessed"}</strong>
            </div>
            <div>
              <span>Clinical review status</span>
              <strong>{view.assessment ? "Assessment recorded" : "Not assessed"}</strong>
            </div>
          </div>
        </div>
        <div className={styles.workspaceBody}>
          <aside className={styles.sidebar}>
            <nav aria-label="Clinical workspace modules">
              {modules.map((m, i) => (
                <div key={m.id}>
                  {(i === 4 || i === 6) && <span className={styles.navGroup}>{m.family}</span>}
                  <button
                    className={i === 4 || i === 5 || i === 6 ? styles.subNav : undefined}
                    aria-current={moduleId === m.id ? "page" : undefined}
                    onClick={() => navigate(m.id)}
                  >
                    {i === 0 ? <Layers size={16} /> : <span className={styles.navDot} />}
                    <span>{m.label}</span>
                  </button>
                </div>
              ))}
            </nav>
            <div className={styles.sidebarEvidence}>
              <BookOpen size={20} />
              <strong>Source & review</strong>
              <p>Every assessment has a trail.</p>
              <button onClick={() => setDrawer("sources")}>
                Open source registry <ArrowUpRight size={14} />
              </button>
              <button onClick={() => setDrawer("method")}>Methods & references</button>
              <button onClick={() => setDrawer("missing")}>Missing information</button>
              <button onClick={() => setDrawer("verify")}>Try report verification</button>
            </div>
          </aside>
          <div className={styles.mainPanel}>
            <div className={styles.moduleTitle}>
              <span className={styles.eyebrow}>
                {moduleId === "home" ? "Five module families · 24 highlights" : activeModule.family}
              </span>
              <h2 ref={heading} tabIndex={-1}>
                {activeModule.label}
              </h2>
              <p>{activeModule.description}</p>
            </div>
            <div className={styles.reviewBar}>
              <span>
                <span className={styles.statusDot} />
                {revision
                  ? "Recalculated result · confirmed demo revision"
                  : "Historical result · original synthetic snapshot"}
              </span>
              <button onClick={() => setDrawer("observation")}>
                <FileSearch size={15} /> Source record
              </button>
            </div>
            {moduleId === "home" && (
              <div className={styles.overviewChart}>
                <GrowthPlot scans={view.growth} edd={record.edd} />
                <div className={styles.chartContext}>
                  <span className={styles.eyebrow}>Selected growth scan</span>
                  <strong>{current ? formatWeight(current.selectedEfw) : "Not available"}</strong>
                  <p>
                    {current
                      ? `${current.ga} · WHO ${current.band}`
                      : "Choose a date with a growth scan."}
                  </p>
                  <span className={styles.badge}>Source verified</span>
                  <button className={styles.textButton} onClick={() => navigate("size")}>
                    Explore the growth record <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}
            {(moduleId === "size" || moduleId === "velocity") && (
              <div className={styles.controls}>
                <label>
                  Reference
                  <select
                    aria-label="Reference"
                    value={selection.reference}
                    onChange={(e) => choose({ reference: e.target.value })}
                  >
                    <option value="WHO">WHO · supplied table fixture</option>
                    <option value="GROW">GROW · unavailable</option>
                    <option value="INTERGROWTH-21st">INTERGROWTH-21st · unavailable</option>
                    <option value="NICHD">NICHD · unavailable</option>
                  </select>
                </label>
                <label>
                  Previous growth scan
                  <select
                    aria-label="Previous growth scan"
                    value={view.previous?.id ?? ""}
                    onChange={(e) => choose({ previousId: e.target.value })}
                    disabled={view.growth.length < 2}
                  >
                    {view.growth.length < 2 && <option value="">Two scans required</option>}
                    {view.growth
                      .filter((s) => s.date < (current?.date ?? ""))
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.ga} · {displayDate(s.date)} · {formatWeight(s.selectedEfw)}
                        </option>
                      ))}
                  </select>
                </label>
                <p>
                  Selected EFW basis: supplied rounded recalculated fixture matching the simulated
                  source report.{" "}
                  <button className={styles.textButton} onClick={() => setDrawer("method")}>
                    View formula and source values
                  </button>
                </p>
              </div>
            )}
            {(moduleId === "size" || moduleId === "velocity") && selection.reference !== "WHO" && (
              <div className={styles.notice}>
                <strong>{selection.reference}: numeric results unavailable</strong>
                <p>
                  No authorised model package is included. Observations remain visible; cards
                  explicitly labelled WHO continue to describe the supplied WHO fixture, not{" "}
                  {selection.reference}.
                </p>
              </div>
            )}
            {moduleId === "size" && (
              <div className={styles.panel}>
                <GrowthPlot scans={view.growth} edd={record.edd} />
                <p className={styles.finePrint}>
                  Lines join recorded EFW observations; they are not a fitted model or forecast.
                  Table bands do not provide an exact centile.
                </p>
              </div>
            )}
            {moduleId === "velocity" && (
              <div className={styles.panel}>
                <h3>Estimated interval growth</h3>
                <div className={styles.velocityChart}>
                  {view.growth.slice(1).map((s, i) => {
                    const before = view.growth[i],
                      v = intervalGrowth(before, s)!;
                    return (
                      <div key={s.id}>
                        <span>
                          {before.ga} → {s.ga}
                        </span>
                        <div>
                          <span
                            style={{ width: `${Math.min(100, (v.gramsPerWeek / 300) * 100)}%` }}
                          />
                        </div>
                        <strong>{v.gramsPerWeek.toFixed(1)} g/week</strong>
                      </div>
                    );
                  })}
                </div>
                <p className={styles.finePrint}>
                  Calculated from consecutive scan dates and selected EFW. No validated velocity
                  percentile is available.
                </p>
              </div>
            )}
            {moduleId === "dating" && (
              <div className={styles.panel}>
                <CalendarDays size={23} />
                <h3>A fixed timeline, with its source intact.</h3>
                <DefinitionList
                  items={[
                    ["Accepted EDD", displayDate(record.edd)],
                    [
                      "Source-reported EDD",
                      `${displayDate(record.dating.reportedEdd)} · explicitly accepted in this fixture`,
                    ],
                    ["Dating source", record.dating.reportId],
                    [
                      "Dating evidence",
                      `CRL ${record.dating.crl} mm; report GA ${record.dating.ga} on ${displayDate(record.dating.date)}`,
                    ],
                    ["Anchor revision", `${record.anchorId} · no subsequent revision`],
                    [
                      "GA calculation",
                      "280 − days between assessment date and accepted EDD. Calendar dates, independent of today's clock.",
                    ],
                  ]}
                />
                <p>No independent CRL dating algorithm is executed in this demonstration.</p>
                <button className={styles.textButton} onClick={() => setDrawer("source:ACOG-700")}>
                  Review dating source <ArrowUpRight size={15} />
                </button>
              </div>
            )}
            {moduleId === "tow" && (
              <div className={styles.panel}>
                <span className={styles.badge}>Authorised GROW calculations unavailable</span>
                <h3>Reference identity stays explicit.</h3>
                <p>
                  The supplied record includes maternal height, pre-pregnancy weight, parity and
                  self-reported origin. It does not include authorised GROW coefficients or
                  population mapping. A customised term target, third-centile distance and
                  personalised growth proportion cannot be produced.
                </p>
                <DefinitionList
                  items={[
                    ["Height", `${record.height} cm`],
                    ["Pre-pregnancy weight / BMI", `${record.preWeight} kg / ${record.bmi} kg/m²`],
                    ["Parity", "1"],
                    [
                      "Population mapping",
                      "Indian origin, self-reported; authorised GROW mapping not supplied",
                    ],
                    [
                      "Available reference",
                      "WHO table bands for the supplied scans; no substitution as GROW",
                    ],
                  ]}
                />
                <button className={styles.textButton} onClick={() => setDrawer("source:GROW-2")}>
                  Review GROW dependency <ArrowUpRight size={15} />
                </button>
              </div>
            )}
            {modules
              .filter((m) => m.id !== "home" && (moduleId === "home" || moduleId === m.id))
              .map((m) => (
                <section
                  className={styles.cardSection}
                  key={m.id}
                  aria-label={`${m.label} highlights`}
                >
                  {moduleId === "home" && (
                    <div className={styles.groupTitle}>
                      <div>
                        <span>{m.family === m.label ? "Module highlights" : m.family}</span>
                        <h3>{m.label}</h3>
                      </div>
                      <button className={styles.textButton} onClick={() => navigate(m.id)}>
                        Open module <ArrowUpRight size={15} />
                      </button>
                    </div>
                  )}
                  <div className={styles.cards}>
                    {cards
                      .filter((c) => c.module === m.id)
                      .map((card) => (
                        <button
                          type="button"
                          className={styles.highlight}
                          key={card.id}
                          data-testid={`highlight-${card.id}`}
                          onClick={() =>
                            moduleId === "home"
                              ? navigate(card.module)
                              : setDrawer(`source:${card.source}`)
                          }
                        >
                          <span className={styles.cardLabel}>
                            {card.label}
                            <ArrowUpRight size={15} />
                          </span>
                          <strong>{card.value}</strong>
                          <p>{card.detail}</p>
                          <span className={styles.authority}>{card.authority}</span>
                        </button>
                      ))}
                  </div>
                </section>
              ))}
            {(moduleId === "size" || moduleId === "velocity") && (
              <section className={styles.panel}>
                <h3>Biometric record</h3>
                <div
                  className={styles.tableScroll}
                  tabIndex={0}
                  role="region"
                  aria-label="Verified growth observations"
                >
                  <table>
                    <caption>
                      Actual growth scans available by {displayDate(selection.date)}
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Acquired / GA</th>
                        <th scope="col">Selected EFW</th>
                        <th scope="col">WHO EFW / AC band</th>
                        <th scope="col">HC / AC / FL (mm)</th>
                        <th scope="col">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {view.growth.map((s) => (
                        <tr key={s.id}>
                          <th scope="row">
                            {displayDate(s.date)}
                            <small>{s.ga}</small>
                          </th>
                          <td>{formatWeight(s.selectedEfw)}</td>
                          <td>{s.band}</td>
                          <td>
                            {s.hc} / {s.ac} / {s.fl}
                          </td>
                          <td>
                            <button
                              className={styles.textButton}
                              onClick={() => {
                                choose({ date: s.date, previousId: undefined });
                                setDrawer("observation");
                              }}
                            >
                              Review {s.ga}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
            {moduleId === "matrix" && (
              <section className={styles.panel}>
                <h3>Maternal observations</h3>
                <p>
                  Recorded measurements alongside the fetal record. These observations do not
                  automatically establish preeclampsia or placental insufficiency.
                </p>
                <div
                  className={styles.tableScroll}
                  role="region"
                  aria-label="Maternal observations"
                  tabIndex={0}
                >
                  <table>
                    <caption>Source-reported maternal observations up to the selected date</caption>
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">GA</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Blood pressure</th>
                      </tr>
                    </thead>
                    <tbody>
                      {view.maternal.map((m) => (
                        <tr key={m.date}>
                          <th scope="row">{displayDate(m.date)}</th>
                          <td>{gestationalAge(record.edd, m.date)}</td>
                          <td>{m.weight} kg</td>
                          <td>{m.bp} mmHg</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button className={styles.textButton} onClick={() => setDrawer("context")}>
                  View history and recorded laboratory data <ArrowUpRight size={15} />
                </button>
              </section>
            )}
            {moduleId === "doppler" && (
              <>
                <section className={styles.panel}>
                  <h3>Doppler & surveillance record</h3>
                  {view.doppler.some((row) => row.edf === "Absent") && (
                    <p className={styles.notice}>
                      First fixture UA AEDF:{" "}
                      {gestationalAge(
                        record.edd,
                        view.doppler.find((row) => row.edf === "Absent")!.date,
                      )}
                      .{" "}
                      {view.doppler.filter((row) => row.edf === "Absent").length > 1
                        ? `Repeat fixture UA AEDF: ${gestationalAge(record.edd, view.doppler.filter((row) => row.edf === "Absent")[1].date)}.`
                        : "No repeat AEDF observation recorded by this date."}{" "}
                      Recorded findings do not generate an automatic stage.
                    </p>
                  )}
                  <p>
                    Only observations acquired by the review date are shown. A Doppler-only visit
                    retains the previous growth scan.
                  </p>
                  <div
                    className={styles.tableScroll}
                    role="region"
                    aria-label="Doppler observations"
                    tabIndex={0}
                  >
                    <table>
                      <caption>
                        Source-reported surveillance · CPR is calculated at the same visit
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">Date / GA</th>
                          <th scope="col">UA PI / EDF</th>
                          <th scope="col">MCA PI / CPR</th>
                          <th scope="col">DVP</th>
                          <th scope="col">DV</th>
                          <th scope="col">cCTG STV</th>
                        </tr>
                      </thead>
                      <tbody>
                        {view.doppler.map((row) => {
                          const value =
                            revision?.reportId === row.id ? { ...row, ...revision } : row;
                          return (
                            <tr key={row.id}>
                              <th scope="row">
                                {displayDate(row.date)}
                                <small>{gestationalAge(record.edd, row.date)}</small>
                              </th>
                              <td>
                                {value.ua.toFixed(2)} / {value.edf}
                                {revision?.reportId === row.id && (
                                  <small>Corrected and confirmed</small>
                                )}
                              </td>
                              <td>
                                {value.mca.toFixed(2)} / {(value.mca / value.ua).toFixed(3)}
                              </td>
                              <td>{value.dvp} cm</td>
                              <td>
                                {value.dv === null
                                  ? "Not assessed"
                                  : `PI ${value.dv}; a-wave forward`}
                              </td>
                              <td>
                                {value.stv === null
                                  ? "Not assessed"
                                  : `${value.stv.toFixed(1)} ms; 60 min`}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <p className={styles.finePrint}>
                    Recurrent spontaneous decelerations: not recorded. Complete Doppler waveforms
                    are not supplied. No automatic stage is generated.
                  </p>
                </section>
                <section className={styles.panel}>
                  <span className={styles.eyebrow}>
                    Published source information · demonstration fixtures
                  </span>
                  <h3>Framework comparison</h3>
                  <p>
                    Definitions, populations and jurisdictions remain distinct. Opening a framework
                    explains why it is relevant; it does not apply its criteria to a patient.
                  </p>
                  <div className={styles.frameworks}>
                    {frameworkIds.map((id) => {
                      const source = lookupSources.find((s) => s.id === id)!;
                      return (
                        <button key={id} onClick={() => setDrawer(`source:${id}`)}>
                          <span>{source.id}</span>
                          <strong>{source.title}</strong>
                          <p>{source.fixtureNote}</p>
                          <span className={styles.textButton}>
                            Why this appeared <ArrowUpRight size={15} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              </>
            )}
            <section className={styles.interpretation}>
              <div>
                <span className={styles.eyebrow}>Clinician-recorded assessment</span>
                <h3>
                  {view.assessment
                    ? `Review dated ${displayDate(view.assessment.date)}`
                    : "No assessment recorded by this date"}
                </h3>
                <p>
                  {view.assessment?.text ??
                    "The absence of an assessment does not establish normality. Continue reviewing the available observations and missing information."}
                </p>
                {revision && (
                  <p className={styles.revisionWarning}>
                    This recorded assessment belongs to the original fixture. It has not been
                    re-reviewed against your corrected demo observations.
                  </p>
                )}
              </div>
              <button
                className={styles.secondaryButton}
                onClick={() => setDrawer("interpretation")}
              >
                Review context <ArrowUpRight size={16} />
              </button>
            </section>
            <section className={styles.evidencePanel} aria-label="Source and review panel">
              <div>
                <BookOpen size={22} />
                <h3>Source & review</h3>
                <p>Keep the evidence behind this view within reach.</p>
              </div>
              <div className={styles.evidenceLinks}>
                <button onClick={() => setDrawer("observation")}>
                  Observations & reports used <ArrowUpRight size={15} />
                </button>
                <button onClick={() => setDrawer("method")}>
                  Method & reference identity <ArrowUpRight size={15} />
                </button>
                <button onClick={() => setDrawer("sources")}>
                  Framework identity & sources <ArrowUpRight size={15} />
                </button>
                <button onClick={() => setDrawer("missing")}>
                  Missing information <ArrowUpRight size={15} />
                </button>
                <button onClick={() => setDrawer("interpretation")}>
                  Clinician-recorded assessment <ArrowUpRight size={15} />
                </button>
                <button onClick={() => setDrawer("history")}>
                  Historical snapshot <ArrowUpRight size={15} />
                </button>
              </div>
            </section>
          </div>
        </div>
        <p className={styles.disclaimer}>
          All people, reports and outcomes shown here are fictional. The cases demonstrate ODRISC
          workflow and evidence navigation and are not clinical advice, validated patient-specific
          ODRISC outputs or evidence of improved outcomes.
        </p>
      </section>
      <section className={styles.closing}>
        <span className={styles.eyebrow}>Built around clinical review</span>
        <h2>
          One record. Multiple clinical questions.
          <br />
          Traceable evidence.
        </h2>
        <p>
          The calculation, the published source and the clinician’s interpretation each have a
          place. ODRISC brings them into one connected view.
        </p>
        <a className={styles.primaryButton} href={providerRoutes.platform}>
          Explore the Platform <ArrowUpRight size={18} />
        </a>
      </section>
      <span className={styles.srOnly} role="status">
        {announcement}
      </span>
      {drawer && (
        <ReviewDialog title={drawerTitle} triggerRef={lastTrigger} onClose={() => setDrawer(null)}>
          {activeSource && <SourceDetail source={activeSource} why={why} />}
          {drawer === "sources" && (
            <SourceRegistryPanel onSource={(id) => setDrawer(`source:${id}`)} />
          )}
          {drawer === "method" && <MethodDetail scan={current} />}
          {drawer === "observation" && (
            <>
              <ObservationDetail record={record} scan={current} />
              {d && (
                <section>
                  <h3>Latest Doppler source</h3>
                  <span className={styles.badge}>
                    {revision ? "Corrected and confirmed" : "Source verified"} · synthetic record
                  </span>
                  <DefinitionList
                    items={[
                      ["Report / acquisition", `${d.id} / ${displayDate(d.date)}`],
                      [
                        "Source-reported UA PI / MCA PI / EDF",
                        `${original.latestDoppler!.ua} / ${original.latestDoppler!.mca} / ${original.latestDoppler!.edf}`,
                      ],
                      ["Selected UA PI / MCA PI / EDF", `${d.ua} / ${d.mca} / ${d.edf}`],
                      ["Calculated CPR", (d.mca / d.ua).toFixed(3)],
                      [
                        "Field locator",
                        "Simulated report / UA PI, MCA PI and UA EDF fields; original page and acquisition time not supplied",
                      ],
                      ["Doppler reference", "SRC-ISUOG-2021-DOPPLER; clinical review pending"],
                      [
                        "Review history",
                        revision
                          ? `Local demo correction revision ${revision.revision}; original report values retained.`
                          : "Source verification represented by the supplied fixture; no real clinical review implied.",
                      ],
                    ]}
                  />
                </section>
              )}
            </>
          )}
          {drawer === "verify" && (
            <VerificationDemo
              record={record}
              scan={current}
              doppler={original.latestDoppler}
              onConfirm={(value) => {
                setRevisions((items) => [
                  ...items,
                  {
                    ...value,
                    revision: items.filter((r) => r.reportId === value.reportId).length + 1,
                  },
                ]);
                choose({ revisions: true });
                setDrawer(null);
                setAnnouncement(
                  "Demo observations confirmed. CPR and lookup concepts now use this local revision. The original snapshot is retained.",
                );
              }}
            />
          )}
          {drawer === "history" && (
            <>
              <span className={styles.badge}>Historical result</span>
              <p>
                The view is restricted to observations and clinician assessments recorded on or
                before {displayDate(selection.date)}. Future growth scans, Doppler changes and later
                assessments are excluded.
              </p>
              <DefinitionList
                items={[
                  ["Case / fetus", `${record.id} / ${record.fetusId}`],
                  ["Review date / GA", `${displayDate(selection.date)} / ${view.ga}`],
                  ["Accepted anchor", record.anchorId],
                  ["Selected growth scan", current?.id ?? "Not available"],
                  [
                    "Selected scan pair",
                    `${view.previous?.ga ?? "Not available"} → ${current?.ga ?? "Not available"}`,
                  ],
                  ["Reference", selection.reference],
                  [
                    "Review mode",
                    selection.revisions
                      ? "Confirmed demo revisions where available"
                      : "Original synthetic fixture",
                  ],
                ]}
              />
              <div className={styles.actions}>
                <button
                  className={styles.secondaryButton}
                  aria-pressed={!selection.revisions}
                  onClick={() => choose({ revisions: false })}
                >
                  Original snapshot
                </button>
                <button
                  className={styles.secondaryButton}
                  aria-pressed={selection.revisions}
                  disabled={caseRevisions.length === 0}
                  onClick={() => choose({ revisions: true })}
                >
                  Confirmed demo revisions
                </button>
              </div>
              <h3>Local review history</h3>
              {caseRevisions.length ? (
                <ul className={styles.list}>
                  {caseRevisions.map((r) => (
                    <li key={`${r.reportId}-${r.revision}`}>
                      {r.reportId} · revision {r.revision} · UA PI {r.ua}, MCA PI {r.mca}, EDF{" "}
                      {r.edf} · corrected and confirmed by demo user. The original reported values
                      are retained.
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No local corrections confirmed by this review date.</p>
              )}
              {view.outcome && (
                <div className={styles.notice}>
                  <strong>Fictional postnatal outcome · {displayDate(view.outcome.date)}</strong>
                  <p>{view.outcome.text}</p>
                  <p>
                    Birthweight {formatWeight(view.outcome.weight)}. Recorded separately; never
                    plotted as antenatal EFW.
                  </p>
                </div>
              )}
            </>
          )}
          {drawer === "missing" && (
            <>
              <h3>Visible limits of the selected record</h3>
              <ul className={styles.list}>
                <li>
                  Authorised GROW model, coefficients, population mapping and customised term
                  weight: not available.
                </li>
                <li>
                  Exact WHO centiles, exact tail positions, Z-scores and validated growth-velocity
                  centiles: not available.
                </li>
                <li>Complete Doppler waveforms and unlisted interim visits: not supplied.</li>
                <li>
                  DV:{" "}
                  {d?.dv === null || d?.dv === undefined
                    ? "not assessed in the selected record"
                    : "recorded PI and forward a-wave; full waveform not supplied"}
                  . Missing does not mean normal.
                </li>
                <li>Recurrent spontaneous decelerations: not recorded.</li>
                <li>
                  Clinical registry lookup and numerical releases: pending. Demonstration fixtures
                  are not approved clinical methods.
                </li>
                {record.key === "meera" && (
                  <li>
                    Original reports from the prior small-for-gestational-age birth: not supplied.
                  </li>
                )}
              </ul>
              <p>
                Missing information is retained as missing. No placeholder value, automated
                diagnosis or stage fills the gap.
              </p>
            </>
          )}
          {drawer === "interpretation" && (
            <>
              <span className={styles.badge}>Clinician-recorded assessment · fictional</span>
              <h3>{view.assessment ? displayDate(view.assessment.date) : "Not assessed"}</h3>
              <p>
                {view.assessment?.text ??
                  "No clinician assessment is recorded by the selected date."}
              </p>
              <DefinitionList
                items={[
                  [
                    "Assessment authority",
                    "Fictional clinician interpretation supplied with the case",
                  ],
                  [
                    "Framework",
                    record.key === "anaya" && view.assessment?.date === "2026-06-23"
                      ? "Barcelona stage-based framework, recorded by clinician"
                      : record.key === "meera" && view.assessment
                        ? "ISUOG SGA terminology, recorded by clinician"
                        : "Selected framework not recorded at this review date",
                  ],
                  ["Automatic ODRISC stage", "None"],
                  [
                    "Review against local corrections",
                    revision
                      ? "Not performed. Original assessment retained; re-review required."
                      : "Original fixture snapshot",
                  ],
                  [
                    "Missing information",
                    "Review source completeness, waveforms and unavailable numerical models before interpretation.",
                  ],
                ]}
              />
              <button className={styles.textButton} onClick={() => setDrawer("missing")}>
                Open missing-information review <ArrowRight size={16} />
              </button>
            </>
          )}
          {drawer === "context" && (
            <>
              <h3>{record.name} · maternal context</h3>
              <DefinitionList
                items={[
                  ["Age", `${record.age} years`],
                  ["Height", `${record.height} cm`],
                  ["Pre-pregnancy weight", `${record.preWeight} kg`],
                  ["BMI", `${record.bmi} kg/m²`],
                ]}
              />
              <ul className={styles.list}>
                {record.history.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              {view.labs.length > 0 && (
                <>
                  <h3>Source-reported laboratory observations</h3>
                  <div
                    className={styles.tableScroll}
                    role="region"
                    aria-label="Laboratory observations"
                    tabIndex={0}
                  >
                    <table>
                      <caption>Recorded synthetic values; no automated interpretation</caption>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Platelets ×10⁹/L</th>
                          <th>Creatinine µmol/L</th>
                          <th>AST / ALT U/L</th>
                          <th>Urine PCR mg/mmol</th>
                        </tr>
                      </thead>
                      <tbody>
                        {view.labs.map((l) => (
                          <tr key={l.date}>
                            <th scope="row">{displayDate(l.date)}</th>
                            <td>{l.platelets}</td>
                            <td>{l.creatinine}</td>
                            <td>
                              {l.ast} / {l.alt}
                            </td>
                            <td>{l.pcr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </>
          )}
        </ReviewDialog>
      )}
    </div>
  );
}
function GrowthPlot({ scans, edd }: { scans: GrowthScan[]; edd: string }) {
  const x = (date: string) => 48 + ((gestationalDays(edd, date) / 7 - 20) / 20) * 550;
  const y = (weight: number) => 224 - (weight / 3000) * 185;
  return (
    <figure className={styles.growthPlot}>
      <figcaption>
        <span>Longitudinal EFW</span>
        <span>Verified synthetic observations · grams</span>
      </figcaption>
      <svg
        viewBox="0 0 640 265"
        role="img"
        aria-label={`Estimated fetal weight at ${scans.length} recorded growth scans. ${scans.map((s) => `${s.ga}: ${s.selectedEfw} grams`).join("; ")}.`}
      >
        {[0, 1000, 2000, 3000].map((value) => (
          <g key={value}>
            <line x1="48" x2="605" y1={y(value)} y2={y(value)} stroke="#dfe8e3" />
            <text x="38" y={y(value) + 4} textAnchor="end" fill="#53645c" fontSize="11">
              {value}
            </text>
          </g>
        ))}
        {[20, 24, 28, 32, 36, 40].map((week) => (
          <text
            key={week}
            x={48 + ((week - 20) / 20) * 550}
            y="248"
            textAnchor="middle"
            fill="#53645c"
            fontSize="11"
          >
            {week}w
          </text>
        ))}
        {scans.length > 0 && (
          <>
            <polyline
              fill="none"
              stroke="#d95369"
              strokeWidth="2.5"
              points={scans.map((s) => `${x(s.date)},${y(s.selectedEfw)}`).join(" ")}
            />
            {scans.map((s) => (
              <g key={s.id}>
                <circle
                  cx={x(s.date)}
                  cy={y(s.selectedEfw)}
                  r="5"
                  stroke="white"
                  strokeWidth="2"
                  fill="#d95369"
                />
                <text
                  x={x(s.date)}
                  y={y(s.selectedEfw) - 12}
                  fill="#783447"
                  textAnchor="middle"
                  fontSize="11"
                >
                  {s.selectedEfw.toLocaleString("en-GB")}
                </text>
              </g>
            ))}
          </>
        )}
      </svg>
    </figure>
  );
}
