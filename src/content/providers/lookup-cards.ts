import type { snapshot } from "./lookup-cases";
import { displayDate, type ClinicalCase } from "./lookup-cases";
export type ModuleId = "home" | "dating" | "tow" | "matrix" | "size" | "velocity" | "doppler";
export const modules: { id: ModuleId; label: string; family: string; description: string }[] = [
  {
    id: "home",
    label: "Fetal Growth",
    family: "Overview",
    description: "One record. Multiple clinical questions. Traceable evidence.",
  },
  {
    id: "dating",
    label: "Golden GA Anchor",
    family: "Golden GA Anchor",
    description:
      "Keep the accepted pregnancy timeline and its supporting evidence visible at every assessment.",
  },
  {
    id: "tow",
    label: "TOW Correction Model",
    family: "TOW Correction Model",
    description:
      "Review customised-growth inputs, available reference information and the limits of this fixture.",
  },
  {
    id: "matrix",
    label: "Maternal-Fetal Matrix",
    family: "Maternal-Fetal Matrix",
    description:
      "Review maternal observations and fetal interval change together, with their dates and methods.",
  },
  {
    id: "size",
    label: "Longitudinal EFW Growth Curve",
    family: "Growth Analysis",
    description:
      "Follow recorded estimated fetal weight across actual growth scans. Keep the reference and source attached.",
  },
  {
    id: "velocity",
    label: "Growth Velocity Analysis",
    family: "Growth Analysis",
    description:
      "Separate interval arithmetic, reference comparisons and the clinician's interpretation.",
  },
  {
    id: "doppler",
    label: "Doppler Guideline & Framework Lookup",
    family: "Doppler Guideline Lookup",
    description:
      "Move from a verified finding to relevant published definitions, framework context and review requirements.",
  },
];
export type Highlight = {
  id: string;
  module: ModuleId;
  label: string;
  value: string;
  detail: string;
  authority: string;
  source: string;
};
export function highlights(record: ClinicalCase, view: ReturnType<typeof snapshot>): Highlight[] {
  const {
    current,
    previous,
    interval,
    comparison,
    latestDoppler: d,
    maternalVelocity,
    assessment,
  } = view;
  const unavailable = "Not available",
    calc = "Calculated by ODRISC utility",
    verified = "Source verified";
  const weight = current ? `${current.selectedEfw.toLocaleString("en-GB")} g` : unavailable;
  const rate = interval ? `${interval.gramsPerWeek.toFixed(1)} g/week` : unavailable;
  const band = current?.band ?? unavailable;
  return [
    {
      id: "accepted-dating",
      module: "dating",
      label: "Accepted pregnancy dating",
      value: view.ga,
      detail: `EDD ${displayDate(record.edd)} · ${record.anchorId}`,
      authority: verified,
      source: "ACOG-700",
    },
    {
      id: "dating-evidence",
      module: "dating",
      label: "Dating evidence",
      value: `CRL ${record.dating.crl} mm`,
      detail: `${displayDate(record.dating.date)} · reported GA ${record.dating.ga}`,
      authority: "Reported in source",
      source: "ACOG-700",
    },
    {
      id: "anchor-integrity",
      module: "dating",
      label: "Anchor integrity",
      value: "Baseline retained",
      detail: "Later fetal size has not redated this pregnancy.",
      authority: verified,
      source: "ACOG-700",
    },
    {
      id: "term-weight",
      module: "tow",
      label: "Term Optimal Weight",
      value: unavailable,
      detail: "Authorised GROW model and coefficients not supplied.",
      authority: unavailable,
      source: "GROW-2",
    },
    {
      id: "growth-proportion",
      module: "tow",
      label: "Current GA Growth Proportionality",
      value: weight,
      detail: "Selected EFW shown; GROW expected target and proportion unavailable.",
      authority: current ? verified : unavailable,
      source: "GROW-2",
    },
    {
      id: "centile",
      module: "tow",
      label: "Centile & Z-Score Analytics",
      value: band,
      detail: "WHO table band only. Exact centile and Z-score unavailable.",
      authority: current ? "Published source information" : unavailable,
      source: "WHO-2017",
    },
    {
      id: "reference-tracking",
      module: "tow",
      label: "Longitudinal Reference Tracking",
      value: previous && current ? `${previous.band} → ${current.band}` : unavailable,
      detail: "WHO bands; an exact centile shift cannot be calculated.",
      authority: previous ? "Published source information" : unavailable,
      source: "WHO-2017",
    },
    {
      id: "third-centile",
      module: "tow",
      label: "Distance to Selected Third-Centile Reference",
      value: unavailable,
      detail: "No authorised GROW third-centile weight is available.",
      authority: unavailable,
      source: "GROW-2",
    },
    {
      id: "maternal-velocity",
      module: "matrix",
      label: "Maternal Weight Velocity",
      value: maternalVelocity !== null ? `${maternalVelocity.toFixed(2)} kg/week` : unavailable,
      detail: "Change over the selected scan interval; not a diagnostic threshold.",
      authority: maternalVelocity !== null ? calc : unavailable,
      source: "ISUOG-2019",
    },
    {
      id: "fetal-velocity",
      module: "matrix",
      label: "Fetal Growth Velocity",
      value: rate,
      detail: "Difference in selected EFW divided by elapsed acquisition time.",
      authority: interval ? calc : unavailable,
      source: "ISUOG-2019",
    },
    {
      id: "position-shift",
      module: "matrix",
      label: "Reference Position Shift",
      value: previous && current ? `${previous.band} → ${current.band}` : unavailable,
      detail: "Band comparison; no exact percentile-point shift is available.",
      authority: previous ? "Published source information" : unavailable,
      source: "WHO-2017",
    },
    {
      id: "median-difference",
      module: "matrix",
      label: "Difference from selected median-size-curve interval",
      value: comparison ? `${comparison.difference.toFixed(1)} g/week` : unavailable,
      detail: "WHO median-size-curve comparison; not statistical variance or a velocity centile.",
      authority: comparison ? calc : unavailable,
      source: "WHO-2017",
    },
    {
      id: "latest-efw",
      module: "size",
      label: "Latest EFW & Reference Position",
      value: weight,
      detail: current
        ? `${current.ga} · WHO ${band} · ${displayDate(current.date)}`
        : "No growth scan at this review date.",
      authority: current ? verified : unavailable,
      source: "WHO-2017",
    },
    {
      id: "biometry",
      module: "size",
      label: "Biometry at This Scan",
      value: current ? `AC ${current.ac} mm` : unavailable,
      detail: current
        ? `BPD ${current.bpd} · HC ${current.hc} · FL ${current.fl} mm`
        : "No biometry at this review date.",
      authority: current ? verified : unavailable,
      source: "ISUOG-2019",
    },
    {
      id: "reference-comparison",
      module: "size",
      label: "Reference Comparison",
      value: "WHO table fixture",
      detail: "GROW, INTERGROWTH-21st and NICHD numeric references are not supplied.",
      authority: "Published source information",
      source: "WHO-2017",
    },
    {
      id: "data-review",
      module: "size",
      label: "Data & Dating Review",
      value: current ? "Source linked" : "Dating record only",
      detail: "Accepted anchor retained. Doppler-only visits do not create EFW points.",
      authority: verified,
      source: "ISUOG-2019",
    },
    {
      id: "interval-growth",
      module: "velocity",
      label: "Estimated Interval Growth",
      value: rate,
      detail: interval
        ? `${interval.delta} g over ${interval.days} days · ${interval.gramsPerDay.toFixed(1)} g/day`
        : "Two actual growth scans are required.",
      authority: interval ? calc : unavailable,
      source: "ISUOG-2019",
    },
    {
      id: "interval-reference",
      module: "velocity",
      label: "Reference Interval Comparison",
      value: comparison ? `${comparison.referenceGramsPerWeek.toFixed(1)} g/week` : unavailable,
      detail: comparison
        ? `WHO median ${comparison.start} → ${comparison.end} g; ${comparison.difference.toFixed(1)} g/week difference.`
        : "Matching WHO table medians are not supplied for this pair.",
      authority: comparison ? calc : unavailable,
      source: "WHO-2017",
    },
    {
      id: "comparison-status",
      module: "velocity",
      label: "Comparison & Review Status",
      value: interval?.comparisonAvailable ? "Interval review available" : "More data needed",
      detail: "No validated growth-velocity centile or automatic diagnosis is produced.",
      authority: interval ? calc : unavailable,
      source: "ISUOG-2019",
    },
    {
      id: "scan-interval",
      module: "velocity",
      label: "Scan Interval",
      value: interval ? `${interval.days} days` : unavailable,
      detail:
        previous && current
          ? `${previous.ga} → ${current.ga} · actual acquisition dates`
          : "Select a review date with two growth scans.",
      authority: interval ? calc : unavailable,
      source: "ISUOG-2019",
    },
    {
      id: "doppler-finding",
      module: "doppler",
      label: "Selected Doppler Finding",
      value: d ? `UA EDF: ${d.edf.toLowerCase()}` : "Not assessed",
      detail: d
        ? `UA PI ${d.ua.toFixed(2)} · MCA PI ${d.mca.toFixed(2)} · CPR ${(d.mca / d.ua).toFixed(3)} (calculated)`
        : "No Doppler observation in the selected record.",
      authority: d ? verified : "Not assessed",
      source: "ISUOG-2021",
    },
    {
      id: "published-criteria",
      module: "doppler",
      label: "Relevant Framework Definitions",
      value:
        d?.edf === "Absent" ? "UA absent EDF" : current ? "Fetal-size context" : "Dating context",
      detail:
        "Matched concepts retrieve published information; criteria are not automatically applied.",
      authority: "Published source information",
      source: d?.edf === "Absent" ? "BARCELONA-2014" : "ISUOG-2020",
    },
    {
      id: "framework-comparison",
      module: "doppler",
      label: "Framework Comparison",
      value: "6 source perspectives",
      detail: "ISUOG · SMFM · Delphi · Barcelona · TRUFFLE · RCOG",
      authority: "Published source information",
      source: "SMFM-52",
    },
    {
      id: "clinician-review",
      module: "doppler",
      label: "Missing Information & Clinician Review",
      value: assessment ? "Assessment recorded" : "Not assessed",
      detail: assessment
        ? `Dated ${displayDate(assessment.date)}. Open the complete record and missing-data context.`
        : "No clinician assessment recorded by this review date.",
      authority: assessment ? "Clinician-recorded assessment" : "Not assessed",
      source: "ISUOG-2020",
    },
  ];
}
