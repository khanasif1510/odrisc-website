export const providerRoutes = {
  home: "/providers/",
  platform: "/providers/clinical-platform/",
  growth: "/providers/intelligence/fetal-growth-intelligence/",
  maternal: "/providers/intelligence/maternal-intelligence/",
  approach: "/providers/methodology/",
  access: "/providers/request-demonstration/",
  about: "/about/",
  patients: "/patients/",
  contact: "/contact/",
} as const;

export const providerStatus = {
  intelligence: "In development",
  extraction: "Planned",
  preview: "Fictional demonstration case",
  access: "Account connection pending",
} as const;

export const clinicalSources = [
  {
    title: "Pregnancy dating",
    organization: "ACOG · Committee Opinion 700",
    description:
      "Establishing and documenting the best obstetric estimate, including later revisions.",
    href: "https://pubmed.ncbi.nlm.nih.gov/28426621/",
  },
  {
    title: "Fetal biometry and growth",
    organization: "ISUOG · Practice Guidelines, 2019",
    description: "Measurement methods, estimated fetal weight, serial assessment and uncertainty.",
    href: "https://www.isuog.org/asset/D0D105B5-65B1-47F1-B4AA8B5E99AFA1A6/",
  },
  {
    title: "Small-for-gestational-age and fetal growth restriction",
    organization: "ISUOG · Practice Guidelines, 2020",
    description:
      "A clinical assessment framework that considers fetal growth and Doppler findings.",
    href: "https://www.isuog.org/static/b2aa3fb4-031e-4d84-b7246d613a466884/ISUOG-Practice-Guidelines-diagnosis-and-management-of-small-for-gestational-age-fetus-and-fetal-growth-restriction.pdf",
  },
  {
    title: "Diagnosis and management of fetal growth restriction",
    organization: "SMFM · Consult Series 52",
    description:
      "A distinct clinical guideline whose definitions and recommendations must retain their context.",
    href: "https://publications.smfm.org/publications/289-society-for-maternal-fetal-medicine-consult-series-52/",
  },
  {
    title: "Unified estimated fetal weight reference",
    organization: "NICHD · Unified calculator",
    description:
      "A named reference model. The unified calculator does not use maternal race or ethnicity.",
    href: "https://www.nichd.nih.gov/unifiedfetalgrowthcalculator",
  },
] as const;
