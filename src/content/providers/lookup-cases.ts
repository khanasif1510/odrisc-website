/** Synthetic educational fixtures. Never a patient calculator or a clinical source registry. */
export type GrowthScan = {
  id: string;
  date: string;
  ga: string;
  bpd: number;
  hc: number;
  ac: number;
  fl: number;
  reportedEfw: number;
  selectedEfw: number;
  band: string;
};
export type DopplerVisit = {
  id: string;
  date: string;
  ua: number;
  mca: number;
  edf: "Forward" | "Absent";
  dvp: number;
  dv: number | null;
  stv: number | null;
};
export type MaternalVisit = { date: string; weight: number; bp: string };
export type ClinicalCase = {
  key: "meera" | "anaya";
  name: string;
  id: string;
  pregnancyId: string;
  fetusId: "F1";
  title: string;
  summary: string;
  edd: string;
  anchorId: string;
  defaultDate: string;
  dating: { date: string; crl: number; ga: string; reportId: string; reportedEdd: string };
  age: number;
  height: number;
  preWeight: number;
  bmi: number;
  history: string[];
  growth: GrowthScan[];
  maternal: MaternalVisit[];
  doppler: DopplerVisit[];
  assessments: { date: string; text: string }[];
  labs: {
    date: string;
    platelets: number;
    creatinine: number;
    ast: number;
    alt: number;
    pcr: number;
  }[];
  outcome: { date: string; weight: number; text: string };
};
type GrowthTuple = [string, string, number, number, number, number, number, string];
function scans(prefix: string, rows: GrowthTuple[]): GrowthScan[] {
  return rows.map(([date, ga, bpd, hc, ac, fl, selectedEfw, band]) => ({
    id: `${prefix}-US-${ga.split("+")[0]}W`,
    date,
    ga,
    bpd,
    hc,
    ac,
    fl,
    reportedEfw: selectedEfw,
    selectedEfw,
    band,
  }));
}
function mothers(rows: [string, number, string][]): MaternalVisit[] {
  return rows.map(([date, weight, bp]) => ({ date, weight, bp }));
}
function dopplers(
  prefix: string,
  rows: [string, number, number, "Forward" | "Absent", number, number | null, number | null][],
): DopplerVisit[] {
  return rows.map(([date, ua, mca, edf, dvp, dv, stv]) => ({
    id: `${prefix}-DOP-${date}`,
    date,
    ua,
    mca,
    edf,
    dvp,
    dv,
    stv,
  }));
}
export const clinicalCases: ClinicalCase[] = [
  {
    key: "meera",
    name: "Meera",
    id: "ODRISC-DEMO-01",
    pregnancyId: "DEMO-PREG-01",
    fetusId: "F1",
    title: "A smaller fetus, a fuller evidence picture",
    summary:
      "Persistent small size, ongoing estimated growth and no documented Doppler deterioration in the selected record.",
    edd: "2026-09-07",
    anchorId: "GA-MEERA-v1",
    defaultDate: "2026-07-27",
    dating: {
      date: "2026-02-09",
      crl: 33,
      ga: "10+0",
      reportId: "DEMO01-DATING-01",
      reportedEdd: "2026-09-07",
    },
    age: 29,
    height: 153,
    preWeight: 46,
    bmi: 19.65,
    history: [
      "G2P1 · spontaneous singleton pregnancy",
      "Previous vaginal birth at 39+0; birthweight 2,380 g. Previous SGA recorded; original reports unavailable.",
      "No recorded chronic hypertension, diabetes, renal disease or smoking.",
      "Indian origin, self-reported; no authorised GROW mapping supplied.",
    ],
    growth: scans("DEMO01", [
      ["2026-04-20", "20+0", 46, 167, 140.5, 30.5, 290, "P10–P25"],
      ["2026-06-15", "28+0", 67, 252, 220.3, 51, 1000, "P5–P10"],
      ["2026-07-06", "31+0", 74, 281, 250.6, 56.5, 1430, "P5–P10"],
      ["2026-07-27", "34+0", 80, 304, 276.1, 62.5, 1930, "P5–P10"],
      ["2026-08-17", "37+0", 85, 322, 297.8, 68, 2450, "P5–P10"],
    ]),
    maternal: mothers([
      ["2026-02-09", 47, "108/68"],
      ["2026-04-20", 50.3, "110/70"],
      ["2026-05-18", 51.9, "110/70"],
      ["2026-06-15", 53.5, "112/70"],
      ["2026-07-06", 54.7, "114/72"],
      ["2026-07-27", 55.9, "116/74"],
      ["2026-08-17", 57.1, "118/74"],
      ["2026-08-24", 57.5, "118/76"],
    ]),
    doppler: dopplers("DEMO01", [
      ["2026-06-15", 1.05, 1.9, "Forward", 4.8, null, null],
      ["2026-07-06", 1, 1.95, "Forward", 4.6, null, null],
      ["2026-07-27", 0.95, 1.85, "Forward", 4.4, null, null],
      ["2026-08-17", 0.9, 1.7, "Forward", 4.1, null, null],
    ]),
    assessments: [
      {
        date: "2026-07-27",
        text: "Persistent small fetal size with ongoing interval increase in estimated fetal weight and no documented Doppler deterioration in the selected record. Review as SGA under the selected ISUOG terminology; continue specialist surveillance according to the treating team's clinical assessment.",
      },
    ],
    labs: [],
    outcome: {
      date: "2026-08-24",
      weight: 2620,
      text: "Induction and vaginal birth at 38+0. Fictional treating-team decision; not an ODRISC recommendation.",
    },
  },
  {
    key: "anaya",
    name: "Anaya",
    id: "ODRISC-DEMO-02",
    pregnancyId: "DEMO-PREG-02",
    fetusId: "F1",
    title: "Severe early growth restriction with evolving Doppler findings",
    summary:
      "Severe early smallness, persistent UA absent end-diastolic flow and a clinician-recorded framework assessment.",
    edd: "2026-08-17",
    anchorId: "GA-ANAYA-v1",
    defaultDate: "2026-07-06",
    dating: {
      date: "2026-01-12",
      crl: 23.8,
      ga: "9+0",
      reportId: "DEMO02-DATING-01",
      reportedEdd: "2026-08-17",
    },
    age: 30,
    height: 160,
    preWeight: 68,
    bmi: 26.56,
    history: [
      "G2P1 · spontaneous singleton pregnancy",
      "Previous birth at 35+0 with FGR; birthweight 1,750 g.",
      "Chronic hypertension recorded; no recorded diabetes, renal disease or smoking.",
      "Labetalol and aspirin from 12 weeks recorded; no dose information supplied.",
      "Indian origin, self-reported; no authorised GROW mapping supplied.",
    ],
    growth: scans("DEMO02", [
      ["2026-03-30", "20+0", 47, 174, 148.1, 32, 325, "P25–P50"],
      ["2026-04-27", "24+0", 58, 215, 188.7, 41, 600, "P10–P25"],
      ["2026-05-25", "28+0", 67, 253, 202.8, 50, 880, "<P2.5"],
      ["2026-06-15", "31+0", 74, 278, 218, 55.5, 1150, "<P2.5"],
      ["2026-07-06", "34+0", 80, 300, 223.9, 61, 1400, "<P2.5"],
    ]),
    maternal: mothers([
      ["2026-01-12", 68.5, "132/82"],
      ["2026-03-30", 71.2, "130/80"],
      ["2026-04-27", 72.4, "134/84"],
      ["2026-05-25", 73.6, "138/86"],
      ["2026-06-15", 74.5, "136/84"],
      ["2026-06-22", 74.8, "138/88"],
      ["2026-06-29", 75.1, "136/86"],
      ["2026-07-06", 75.4, "138/86"],
    ]),
    doppler: dopplers("DEMO02", [
      ["2026-05-25", 1.55, 1.9, "Forward", 4.1, 0.52, 6],
      ["2026-06-15", 1.65, 1.45, "Forward", 3.7, 0.56, 5.8],
      ["2026-06-22", 1.9, 1.25, "Absent", 3.5, 0.62, 5.5],
      ["2026-06-23", 1.92, 1.27, "Absent", 3.5, 0.63, 5.2],
      ["2026-06-29", 1.92, 1.22, "Absent", 3.2, 0.63, 5.1],
      ["2026-07-06", 1.95, 1.2, "Absent", 3, 0.64, 4.8],
    ]),
    assessments: [
      {
        date: "2026-05-25",
        text: "Early fetal growth restriction / severe fetal smallness under the clinician's selected diagnostic framework.",
      },
      {
        date: "2026-06-23",
        text: "Barcelona Stage II FGR — clinician-recorded assessment after review of persistent UA AEDF and the complete surveillance record.",
      },
    ],
    labs: [
      { date: "2026-01-12", platelets: 245, creatinine: 58, ast: 20, alt: 18, pcr: 8 },
      { date: "2026-05-25", platelets: 228, creatinine: 60, ast: 22, alt: 20, pcr: 10 },
      { date: "2026-06-22", platelets: 210, creatinine: 62, ast: 24, alt: 22, pcr: 12 },
      { date: "2026-07-06", platelets: 205, creatinine: 63, ast: 25, alt: 23, pcr: 14 },
    ],
    outcome: {
      date: "2026-07-06",
      weight: 1450,
      text: "Planned caesarean birth at 34+0. Fictional treating-team decision following surveillance; not an ODRISC delivery recommendation.",
    },
  },
];
export const formula = {
  id: "HADLOCK-HC-AC-FL",
  version: "fixture-v1",
  name: "Hadlock HC/AC/FL",
  expression: "log₁₀(EFW) = 1.326 − 0.00326 × AC × FL + 0.0107 × HC + 0.0438 × AC + 0.158 × FL",
  units: "HC, AC and FL in cm; EFW in grams",
};
export function daysBetween(start: string, end: string) {
  return (Date.parse(`${end}T00:00:00Z`) - Date.parse(`${start}T00:00:00Z`)) / 86400000;
}
export function gestationalDays(edd: string, date: string) {
  return 280 - daysBetween(date, edd);
}
export function gestationalAge(edd: string, date: string) {
  const days = gestationalDays(edd, date);
  return `${Math.floor(days / 7)}+${days % 7}`;
}
export function displayDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
export function calculateEfw(scan: Pick<GrowthScan, "hc" | "ac" | "fl">) {
  const hc = scan.hc / 10,
    ac = scan.ac / 10,
    fl = scan.fl / 10;
  return 10 ** (1.326 - 0.00326 * ac * fl + 0.0107 * hc + 0.0438 * ac + 0.158 * fl);
}
export function intervalGrowth(previous: GrowthScan, current: GrowthScan) {
  const days = daysBetween(previous.date, current.date);
  if (days <= 0) {
    return null;
  }
  const delta = current.selectedEfw - previous.selectedEfw;
  return {
    days,
    delta,
    gramsPerDay: delta / days,
    gramsPerWeek: (delta / days) * 7,
    comparisonAvailable: days >= 14,
  };
}
const whoMedian: Record<string, number> = { "28+0": 1189, "31+0": 1707, "34+0": 2312 };
export function medianComparison(previous: GrowthScan, current: GrowthScan) {
  const interval = intervalGrowth(previous, current),
    start = whoMedian[previous.ga],
    end = whoMedian[current.ga];
  if (!interval || !interval.comparisonAvailable || start === undefined || end === undefined) {
    return null;
  }
  const referenceGramsPerWeek = ((end - start) / interval.days) * 7;
  return {
    start,
    end,
    referenceGramsPerWeek,
    difference: interval.gramsPerWeek - referenceGramsPerWeek,
  };
}
export function reviewDates(record: ClinicalCase) {
  return [
    ...new Set(
      [
        ...record.growth,
        ...record.maternal,
        ...record.doppler,
        ...record.assessments,
        record.outcome,
      ].map((row) => row.date),
    ),
  ].sort();
}
export function snapshot(record: ClinicalCase, date: string, previousId?: string) {
  const growth = record.growth.filter((row) => row.date <= date);
  const current = growth.at(-1);
  const previous =
    growth.find((row) => row.id === previousId && row.date < (current?.date ?? "")) ??
    growth.at(-2);
  const doppler = record.doppler.filter((row) => row.date <= date);
  const maternal = record.maternal.filter((row) => row.date <= date);
  const assessment = record.assessments.filter((row) => row.date <= date).at(-1);
  const interval = current && previous ? intervalGrowth(previous, current) : null;
  const comparison = current && previous ? medianComparison(previous, current) : null;
  const maternalStart = previous ? maternal.find((row) => row.date === previous.date) : undefined;
  const maternalEnd = current ? maternal.find((row) => row.date === current.date) : undefined;
  const maternalVelocity =
    maternalStart && maternalEnd && interval
      ? ((maternalEnd.weight - maternalStart.weight) / interval.days) * 7
      : null;
  const latestVerifiedDate = [record.dating, ...growth, ...doppler, ...maternal]
    .filter((row) => row.date <= date)
    .map((row) => row.date)
    .sort()
    .at(-1);
  return {
    date,
    ga: gestationalAge(record.edd, date),
    growth,
    current,
    previous,
    doppler,
    latestDoppler: doppler.at(-1),
    maternal,
    assessment,
    interval,
    comparison,
    maternalVelocity,
    latestVerifiedDate,
    labs: record.labs.filter((row) => row.date <= date),
    outcome: record.outcome.date <= date ? record.outcome : null,
  };
}
export function provenance(record: ClinicalCase, scan: GrowthScan) {
  return {
    case_id: record.id,
    pregnancy_id: record.pregnancyId,
    fetus_id: record.fetusId,
    report_id: scan.id,
    page_field_locator: "Simulated report / biometry fields; original page not supplied",
    acquisition_date: scan.date,
    acquisition_time: null,
    source_reported_ga: scan.ga,
    accepted_ga: gestationalAge(record.edd, scan.date),
    anchor_id: record.anchorId,
    concept_id: "estimated_fetal_weight",
    raw_source_text: `EFW ${scan.reportedEfw} g`,
    raw_value: scan.reportedEfw,
    normalized_value: scan.reportedEfw,
    unit: "g",
    ocr_confidence: null,
    verification_state: "Source verified (synthetic fixture)",
    confirmed_value: scan.reportedEfw,
    value_origin: "source-reported result in a simulated report",
    formula_id: formula.id,
    formula_version: formula.version,
    reference_id: "WHO-2017",
    reference_version: "2017; corrections 2017/2021 — clinical review pending",
    source_id: "USER-SUPPLIED-TWO-CASE-DEMO",
    source_version: "2026-09-21",
    review_history: [
      "Source verification represented by the supplied synthetic case fixture; no real clinician review is implied.",
    ],
    selected_efw: {
      observation_id: `${scan.id}-EFW`,
      observation_revision: "fixture-v1",
      value: scan.selectedEfw,
      basis: "recalculated_fixture_matching_simulated_source_report",
      selection_reason:
        "Supplied rounded fixture value, kept separate from the unrounded utility calculation.",
    },
  };
}
