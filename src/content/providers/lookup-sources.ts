import registry from "./clinical-source-metadata.json";
export { registry as clinicalRegistry };
export type SourceFixture = {
  id: string;
  registryId: string;
  title: string;
  body: string;
  version: string;
  jurisdiction: string;
  population: string;
  locator: string;
  url: string;
  concept: string;
  fixtureNote: string;
  fixture_only: true;
  authoritative: false;
  promotion: { lookup: { status: string } };
};
function source(
  data: Omit<SourceFixture, "fixture_only" | "authoritative" | "promotion" | "registryId">,
): SourceFixture {
  const mapping: Record<string, string> = {
    "ACOG-700": "SRC-ACOG-2017-CO700-DATING",
    "ISUOG-2019": "SRC-ISUOG-2019-BIOMETRY-GROWTH",
    "WHO-2017": "SRC-WHO-2017-FETAL-GROWTH",
    "GROW-2": "SRC-GROW-2-OFFICIAL",
    "ISUOG-2020": "SRC-ISUOG-2020-SGA-FGR",
    "SMFM-52": "SRC-SMFM-2020-CONSULT-52",
    "DELPHI-2016": "SRC-DELPHI-2016-FGR-DEFINITION",
    "BARCELONA-2014": "SRC-BARCELONA-2014-STAGE-FGR",
    "TRUFFLE-2015": "SRC-TRUFFLE-2015-RCT",
    "RCOG-31": "SRC-RCOG-2024-GTG31",
    "ISUOG-2021": "SRC-ISUOG-2021-DOPPLER",
  };
  const registered = registry.sources.find((s) => s.id === mapping[data.id]);
  if (!registered || !registered.title || !registered.body) {
    throw new Error(`Missing registry mapping for ${data.id}`);
  }
  return {
    ...data,
    registryId: registered.id,
    title: registered.title,
    body: registered.body,
    version: registered.version ?? data.version,
    jurisdiction: registered.jurisdictions.join(", "),
    population: registered.population ?? data.population,
    locator: registered.locator ?? data.locator,
    url: registered.url,
    fixture_only: true,
    authoritative: false,
    promotion: { lookup: { status: registered.lookupStatus } },
  };
}
export const lookupSources: SourceFixture[] = [
  source({
    id: "ACOG-700",
    title: "Methods for Estimating the Due Date",
    body: "ACOG / AIUM / SMFM",
    version: "Committee Opinion 700 · 2017; current reaffirmation review pending",
    jurisdiction: "United States",
    population: "Pregnancy dating; apply the publication's eligibility and dating hierarchy",
    locator: "Dating and documentation recommendations; exact passage review pending",
    url: "https://pubmed.ncbi.nlm.nih.gov/28426621/",
    concept: "Accepted pregnancy dating",
    fixtureNote:
      "The accepted EDD is documented from the synthetic dating report. Later small size does not automatically replace it.",
  }),
  source({
    id: "ISUOG-2019",
    title: "Ultrasound assessment of fetal biometry and growth",
    body: "ISUOG",
    version: "Practice Guidelines · 2019",
    jurisdiction: "International",
    population: "Ultrasound fetal biometry and serial growth assessment",
    locator: "Biometry and growth assessment sections; exact passage review pending",
    url: "https://www.isuog.org/resource/isuog-practice-guidelines-ultrasound-assessment-of-fetal-biometry-and-growth-pdf.html",
    concept: "Serial fetal biometry",
    fixtureNote:
      "Measurement method, selected EFW formula and actual acquisition dates stay visible. An interval estimate is not a validated velocity centile.",
  }),
  source({
    id: "WHO-2017",
    title: "The World Health Organization Fetal Growth Charts",
    body: "WHO study authors / PLOS Medicine",
    version: "2017 · corrections 2017 and 2021; corrected table review pending",
    jurisdiction: "Multinational study",
    population:
      "Study-defined low-risk singleton pregnancies; table and population eligibility must be reviewed",
    locator:
      "EFW and abdominal circumference reference tables; supplied case bands and week 28, 31 and 34 medians only",
    url: "https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002220",
    concept: "WHO fetal-size table position",
    fixtureNote:
      "These fixtures use table bands, not exact centiles or Z-scores. The median-size-curve interval is a reference comparison, not a velocity distribution.",
  }),
  source({
    id: "GROW-2",
    title: "GROW 2 customised growth model",
    body: "Perinatal Institute",
    version: "Authorised model version not supplied",
    jurisdiction: "Model-specific implementation",
    population: "Requires authorised coefficients, population mapping and model eligibility",
    locator: "No licensed coefficient set or authorised calculator included",
    url: "https://www.gestation.net/",
    concept: "Customised term weight",
    fixtureNote: "GROW numeric outputs are unavailable. WHO values are never relabelled as GROW.",
  }),
  source({
    id: "ISUOG-2020",
    title:
      "Diagnosis and management of small-for-gestational-age fetus and fetal growth restriction",
    body: "ISUOG",
    version: "Practice Guidelines · 2020",
    jurisdiction: "International",
    population: "SGA and FGR assessment within the guideline's early/late gestation pathways",
    locator: "Definitions and early/late FGR pathways; exact clause review pending",
    url: "https://www.isuog.org/resource/isuog-practice-guidelines-diagnosis-and-management-of-sga-and-fgr.html",
    concept: "Small fetal size and Doppler context",
    fixtureNote:
      "Small size and growth restriction are not interchangeable labels. A clinician's selected terminology stays attached to the dated assessment; this lookup does not assign a diagnosis.",
  }),
  source({
    id: "SMFM-52",
    title: "Diagnosis and management of fetal growth restriction",
    body: "Society for Maternal-Fetal Medicine",
    version: "Consult Series #52 · 2020",
    jurisdiction: "United States",
    population:
      "Pregnancies assessed for FGR; source-specific gestational age and surveillance context",
    locator: "Recommendations 1, 12 and 15; clinical registry review pending",
    url: "https://publications.smfm.org/publications/289-society-for-maternal-fetal-medicine-consult-series-52/",
    concept: "EFW or AC below the 10th centile; UA absent end-diastolic flow",
    fixtureNote:
      "SMFM defines FGR using EFW or AC below the 10th centile. Its published 33–34-week delivery guidance for FGR with AEDV is source information, not a patient-specific recommendation from this demonstration.",
  }),
  source({
    id: "DELPHI-2016",
    title: "Consensus definition of fetal growth restriction",
    body: "International Delphi consensus authors",
    version: "2016 · Ultrasound in Obstetrics & Gynecology",
    jurisdiction: "International consensus",
    population: "Early and late FGR definitions with gestational age-specific criteria",
    locator: "Consensus definitions; exact criterion mapping review pending",
    url: "https://doi.org/10.1002/uog.15884",
    concept: "Early smallness with additional growth/Doppler criteria",
    fixtureNote:
      "The early/late definitions are distinct. A recognised concept only retrieves source information; it does not establish that every criterion is met.",
  }),
  source({
    id: "BARCELONA-2014",
    title: "An integrated approach to fetal growth restriction",
    body: "Figueras and Gratacós",
    version: "2014 · Prenatal Diagnosis",
    jurisdiction: "Barcelona stage-based framework",
    population: "FGR cases assessed against the complete framework",
    locator: "Stage-based management framework; exact criteria review pending",
    url: "https://doi.org/10.1002/pd.4412",
    concept: "Persistent UA absent end-diastolic flow",
    fixtureNote:
      "A stage requires clinician assessment against the complete framework. Recognising UA AEDF never generates a stage automatically; only assessments already recorded by the selected review date appear in the case view.",
  }),
  source({
    id: "TRUFFLE-2015",
    title:
      "Two-year neurodevelopmental and intermediate perinatal outcomes in infants with very preterm fetal growth restriction",
    body: "TRUFFLE trial investigators / The Lancet",
    version: "Randomised trial · 2015",
    jurisdiction: "European multicentre trial",
    population:
      "Selected singleton pregnancies at 26–32 weeks; trial eligibility and monitoring protocol apply",
    locator: "Trial eligibility and monitoring protocol; not a universal staging system",
    url: "https://doi.org/10.1016/S0140-6736(14)62049-3",
    concept: "Early FGR, ductus venosus and computerised CTG context",
    fixtureNote:
      "DV and cCTG findings must be reviewed in their acquisition and trial context. TRUFFLE is not a general-purpose staging tool and eligibility is not inferred here.",
  }),
  source({
    id: "RCOG-31",
    title: "Small-for-Gestational-Age Fetus and a Growth Restricted Fetus, Investigation and Care",
    body: "Royal College of Obstetricians and Gynaecologists",
    version:
      "Green-top Guideline 31 · third edition 2024; July 2026 update requires registry review",
    jurisdiction: "United Kingdom; England-specific update must retain its scope",
    population: "UK SGA/FGR care; local implementation and current update require review",
    locator: "Definitions and surveillance pathways; July 2026 update",
    url: "https://www.rcog.org.uk/gtg31",
    concept: "SGA/FGR terminology and surveillance context",
    fixtureNote:
      "UK guidance is presented with its jurisdiction. It is not silently substituted for an international or United States framework.",
  }),
  source({
    id: "ISUOG-2021",
    title: "Use of Doppler velocimetry in obstetrics",
    body: "ISUOG",
    version: "Updated Practice Guidelines · 2021",
    jurisdiction: "International",
    population: "Obstetric Doppler acquisition and interpretation",
    locator: "Acquisition and reporting methods; exact passage review pending",
    url: "https://doi.org/10.1002/uog.23698",
    concept: "UA PI, MCA PI, CPR and DV acquisition",
    fixtureNote:
      "CPR is calculated only from UA PI and MCA PI recorded at the same visit. No universal CPR threshold is applied.",
  }),
];
export const frameworkIds = [
  "ISUOG-2020",
  "SMFM-52",
  "DELPHI-2016",
  "BARCELONA-2014",
  "TRUFFLE-2015",
  "RCOG-31",
];
