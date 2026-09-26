# ODRISC Interactive Lookup Assistant
## Two Illustrative Clinical Cases for the Fetal Growth Homepage and Five Module Families

**Document ID:** ODRISC-ILA-CASE-DEMO-008  
**Version:** 2.0  
**Date:** 21 September 2026  
**Status:** Codex build specification + clinician-facing educational fixture  
**Parent product:** ODRISC Interactive Lookup Assistant  
**Homepage:** `Fetal Growth`  
**Case IDs:** `ODRISC-DEMO-01` and `ODRISC-DEMO-02`  
**Primary purpose:** Demonstrate how one clinician-facing dashboard can reduce repetitive record reconstruction and evidence-navigation work while keeping diagnosis, staging, surveillance and management decisions with the clinician.

---

# 0. Important status statement

All patients, reports, examinations, laboratory values, dialogue, clinician assessments and delivery events in this specification are **fictional synthetic teaching data**.

The cases are designed to demonstrate:

- report ingestion and verification;
- longitudinal record reconstruction;
- source-linked reference lookup;
- source-specific framework comparison;
- deterministic arithmetic;
- provenance;
- missing-data handling;
- clinician-authored interpretation;
- historical review.

The cases do **not** demonstrate:

- validated diagnostic performance;
- improved clinical outcomes;
- autonomous diagnosis;
- autonomous FGR staging;
- autonomous surveillance;
- autonomous delivery timing;
- replacement of specialist interpretation.

A qualified maternal-fetal medicine clinician should review the final rendered cases before they are presented publicly as a clinician educational demonstration.

---

# 1. Product update represented by this document

The earlier case document described six feature areas as if they were peer-level modules.

The current Interactive Lookup Assistant uses **one persistent clinician dashboard shell** with:

```text
Fetal Growth                       ← homepage
│
├── 1. Golden GA Anchor
│
├── 2. TOW Correction Model
│
├── 3. Maternal-Fetal Matrix
│
├── 4. Growth Analysis
│   ├── Longitudinal EFW Growth Curve
│   └── Growth Velocity Analysis
│
└── 5. Doppler Guideline Lookup
    └── Doppler Guideline & Framework Lookup
```

This is the structure Codex SHALL build for the demonstration.

The two Growth Analysis workspaces are linked but remain statistically distinct:

```text
fetal size at each examination
≠
longitudinal interval-growth distribution
```

The Doppler module remains an evidence-navigation workspace.

It does not become an automatic staging engine in the launch Interactive Lookup Assistant.

---

# 2. What the homepage should communicate

The clinician should understand the product in one interaction:

> **ODRISC turns verified pregnancy records into a traceable longitudinal view, then brings the relevant reference methods and published clinical frameworks to the clinician without hiding the source, version, missing data or method assumptions.**

The tool is designed to reduce repetitive work involved in:

```text
finding the dating basis
re-entering report values
reconstructing a serial growth table
checking which scan belongs to which date
calculating simple interval changes
distinguishing growth scans from Doppler-only visits
finding the relevant guideline/framework
checking the applicable source version
comparing terminology across frameworks
documenting the clinician's interpretation
reconstructing what was known at a prior review
```

Do **not** claim a quantified time saving until a prospective usability study measures it.

Preferred website language:

> **Less time rebuilding the record. More time reviewing what matters.**

Supporting line:

> ODRISC brings verified observations, longitudinal growth, reference methods and source-linked clinical guidance into one clinician workspace.

---

# 3. Single-dashboard navigation contract

The left navigation or persistent menu SHALL contain exactly:

```text
Fetal Growth

Golden GA Anchor

TOW Correction Model

Maternal-Fetal Matrix

Growth Analysis
    Longitudinal EFW Growth Curve
    Growth Velocity Analysis

Doppler Guideline Lookup
    Doppler Guideline & Framework Lookup
```

The product is one application shell.

Changing modules must preserve:

```text
case / patient context
pregnancy ID
fetus ID
selected assessment date
active dating anchor
source-verification state
selected EFW basis
reference identity
clinical-review snapshot
```

A module change must not create a new interpretation of the same input behind the scenes.

---

# 4. Fetal Growth homepage layout

The `Fetal Growth` homepage should have four vertical regions.

## 4.1 Persistent case header

Display:

```text
case name / patient display name
case ID
fetus ID
singleton / multiple status
accepted EDD
GA on selected review date
latest verified report date
selected growth scan
latest Doppler observation
clinical review status
```

For the public demonstration, show:

```text
Illustrative case
Synthetic data
Not a real patient
```

prominently.

## 4.2 Case selector

Two cards:

### Case 1

**Meera — A smaller fetus, a fuller evidence picture**

Short descriptor:

> Persistent small size, ongoing estimated growth and no documented Doppler deterioration in the selected record.

CTA:

```text
Study Case 1
```

### Case 2

**Anaya — Severe early growth restriction with evolving Doppler findings**

Short descriptor:

> Severe early fetal smallness followed by persistent umbilical artery absent end-diastolic flow and a clinician-recorded framework assessment.

CTA:

```text
Study Case 2
```

## 4.3 Module highlights

The homepage retains the 24-card architecture grouped under the five module families:

```text
Golden GA Anchor                         3 cards
TOW Correction Model                    5 cards
Maternal-Fetal Matrix                   4 cards
Growth Analysis                         8 cards
    Longitudinal EFW Growth Curve       4
    Growth Velocity Analysis            4
Doppler Guideline Lookup                4 cards
                                        ──
Total                                  24
```

## 4.4 Source and review panel

Always show:

```text
observations used
source reports used
reference/method identity
source-framework identity
missing or unresolved information
clinician-recorded assessment
historical snapshot
```

---

# 5. Global authority labels

Every displayed item SHALL be tagged with one of these authorities:

```text
Reported in source
OCR extracted — unverified
Source verified
Corrected and confirmed
Calculated by ODRISC utility
Published source information
Clinician-recorded assessment
Historical result
Recalculated result
Not assessed
Not available
```

Never collapse these labels into a generic `ODRISC result`.

---

# 6. Interactive Lookup Assistant behavior

The workflow demonstrated by both cases is:

```text
ultrasound / clinical report
        ↓
OCR extraction
        ↓
field mapping
        ↓
verification window
        ↓
clinician confirmation
        ↓
accepted observations
        ↓
longitudinal record
        ↓
module-specific reference context
        ↓
source-linked lookup
        ↓
framework comparison
        ↓
clinician interpretation
        ↓
review snapshot
```

Unverified OCR data MUST NOT become an accepted growth point or lookup trigger.

The lookup layer may retrieve source-specific:

```text
definitions
criteria
methodology
surveillance guidance
delivery guidance
technical measurement guidance
trial context
limitations
corrections
```

It MUST NOT create a hidden universal ODRISC diagnosis/stage/pathway.

---

# 7. Numerical conventions used by the two fixtures

## 7.1 Gestational age

For these fixtures:

```text
GA_days = 280 - (EDD - assessment_date in calendar days)
```

Display as:

```text
weeks+days
```

The accepted EDD is not changed to fit later fetal size.

## 7.2 EFW formula used in the synthetic source reports

The fixture uses the HC/AC/FL Hadlock expression with measurements in centimetres:

```text
log10(EFW_g)
=
1.326
- 0.00326 × AC_cm × FL_cm
+ 0.0107 × HC_cm
+ 0.0438 × AC_cm
+ 0.158 × FL_cm

EFW_g = 10 ^ log10(EFW_g)
```

Important:

```text
HC_mm / 10 → HC_cm
AC_mm / 10 → AC_cm
FL_mm / 10 → FL_cm
```

There is **no final ×1,000 multiplication** after `10^L`.

BPD is retained as a biometric observation but is not an input to this particular fixture equation.

## 7.3 WHO fetal-size fixture

For the demonstration only, WHO 2017 sex-combined exact-week tables are used as a named population reference fixture.

Important:

```text
WHO population reference
≠
GROW customised reference
≠
Barcelona method
≠
NICHD
≠
INTERGROWTH-21st
```

WHO results in this fixture SHALL remain explicitly labelled `WHO 2017`.

The fixture uses published table bands rather than inventing an exact continuous centile where only band placement is established.

## 7.4 Interval EFW arithmetic

For scans 1 and 2:

```text
D = acquisition_date_2 - acquisition_date_1

delta_EFW_g = EFW2 - EFW1

g/day = delta_EFW_g / D

g/week = 7 × delta_EFW_g / D
```

This is a descriptive change between two ultrasound estimates.

It is not direct tissue-growth measurement and not a model-based velocity centile.

## 7.5 CPR arithmetic

Where UA PI and MCA PI come from the same assessment:

```text
CPR = MCA_PI / UA_PI
```

The arithmetic can be reproduced.

Whether a CPR value is below a reference threshold depends on the selected, approved CPR reference.

The application must not invent a universal threshold.

---

# 8. Source-registry integration

The case specification uses the following registry identities.

## Dating

```text
SRC-ACOG-2017-CO700-DATING
```

Current external verification notes:

- ACOG Committee Opinion No. 700 was issued in May 2017.
- The ACOG page currently identifies it as reaffirmed in 2025.
- It states that first-trimester ultrasound is the most accurate ultrasound method to establish/confirm GA and that subsequent EDD changes should be rare and documented.

## Fetal biometry / growth

```text
SRC-ISUOG-2019-BIOMETRY-GROWTH

SRC-WHO-2017-FETAL-GROWTH
SRC-WHO-2017-FETAL-GROWTH-CORRECTION
SRC-WHO-2021-FETAL-GROWTH-CORRECTION

SRC-GROW-2-OFFICIAL
```

## FGR / Doppler frameworks

```text
SRC-ISUOG-2020-SGA-FGR
SRC-SMFM-2020-CONSULT-52
SRC-DELPHI-2016-FGR-DEFINITION
SRC-BARCELONA-2014-STAGE-FGR
SRC-TRUFFLE-2015-RCT
SRC-RCOG-2024-GTG31
SRC-RCOG-2026-GTG31-CORRECTION
SRC-RCOG-2026-GTG31-UPDATE
SRC-ISUOG-2021-DOPPLER
```

External verification notes current to 21 September 2026:

- ISUOG SGA/FGR guideline: 2020.
- SMFM Consult Series #52: 2020, reaffirmed 2024.
- Figueras–Gratacós stage-based paper: 2014.
- TRUFFLE randomized trial: 2015.
- RCOG Green-top Guideline No. 31: third edition 2024, with a July 2026 update on the official RCOG page.
- WHO fetal-growth publication: 2017 with published corrections.

## Production status rule

The fixture may refer to a registered source ID during development.

The production application may show source-derived clinical content only when Registry v3.1 permits it through:

```text
promotion.lookup.status =
    lookup_enabled
or
    restricted_lookup
```

If a source remains `clinical_review_pending`, production UI should show:

> Source registered — clinical content review pending.

Demo mode may use clearly marked source fixtures.

---

# 9. Case 1 — Meera

# 9.1 Clinical teaching purpose

Case 1 demonstrates the workload created when a fetus remains small across serial scans but the available record does not show a documented Doppler deterioration.

The key educational problem is not:

> Can ODRISC decide whether this fetus is constitutionally small?

The key problem is:

> Can the clinician rapidly reconstruct the dating, serial size, maternal context, Doppler observations and the different definitions used by major sources without manually rebuilding the case from multiple reports?

This case should make the answer visible.

---

# 9.2 Case 1 patient/pregnancy fixture

| Field | Synthetic record |
|---|---|
| Display name | Meera |
| Case / fetus ID | `ODRISC-DEMO-01 / F1` |
| Age | 29 years |
| Obstetric history | G2P1 |
| Previous pregnancy | Vaginal birth at 39+0; birthweight 2,380 g; previous summary records SGA; original growth/Doppler records unavailable |
| Current pregnancy | Spontaneous singleton |
| Maternal history | No known chronic hypertension, diabetes or renal disease; no smoking |
| Height | 153.0 cm |
| Pre-pregnancy weight | 46.0 kg |
| Pre-pregnancy BMI | 19.65 kg/m² |
| Early-pregnancy weight | 47.0 kg at 10+0 |
| Dating scan | 09 February 2026 |
| CRL | 33.0 mm |
| Report-assigned GA | 10+0 |
| Accepted EDD | 07 September 2026 |
| Anchor ID | `GA-MEERA-v1` |
| Pregnancy type | Singleton |
| WHO fixture profile | Global, sex-combined |
| Ethnic origin record | Self-reported Indian; do not invent GROW vendor mapping |

---

# 9.3 Case 1 growth observations

All listed EFW values reproduce from the displayed HC/AC/FL values using the stated fixture equation after one mm→cm conversion.

| Scan ID | Date | GA | BPD mm | HC mm | AC mm | FL mm | Selected EFW g | WHO EFW position | WHO AC position |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| `DEMO01-US-20W` | 20 Apr 2026 | 20+0 | 46.0 | 167.0 | 140.5 | 30.5 | 290 | P10–P25 | P10–P25 |
| `DEMO01-US-28W` | 15 Jun 2026 | 28+0 | 67.0 | 252.0 | 220.3 | 51.0 | 1,000 | P5–P10 | P5–P10 |
| `DEMO01-US-31W` | 06 Jul 2026 | 31+0 | 74.0 | 281.0 | 250.6 | 56.5 | 1,430 | P5–P10 | P5–P10 |
| `DEMO01-US-34W` | 27 Jul 2026 | 34+0 | 80.0 | 304.0 | 276.1 | 62.5 | 1,930 | P5–P10 | P5–P10 |
| `DEMO01-US-37W` | 17 Aug 2026 | 37+0 | 85.0 | 322.0 | 297.8 | 68.0 | 2,450 | P5–P10 | P5–P10 |

Important teaching point:

> Remaining in the same displayed WHO band does not prove normal placental function and does not create an exact centile trajectory.

---

# 9.4 Case 1 maternal observations

| Date | GA | Maternal weight kg | Gain from pre-pregnancy kg | BP mmHg |
|---|---:|---:|---:|---|
| 09 Feb 2026 | 10+0 | 47.0 | +1.0 | 108/68 |
| 20 Apr 2026 | 20+0 | 50.3 | +4.3 | 110/70 |
| 18 May 2026 | 24+0 | 51.9 | +5.9 | 110/70 |
| 15 Jun 2026 | 28+0 | 53.5 | +7.5 | 112/70 |
| 06 Jul 2026 | 31+0 | 54.7 | +8.7 | 114/72 |
| 27 Jul 2026 | 34+0 | 55.9 | +9.9 | 116/74 |
| 17 Aug 2026 | 37+0 | 57.1 | +11.1 | 118/74 |
| 24 Aug 2026 | 38+0 | 57.5 | +11.5 | 118/76 |

These values are descriptive fixture observations.

The application must not infer nutritional adequacy, placental function or fetal wellbeing from maternal weight trajectory.

---

# 9.5 Case 1 Doppler observations

| Date | GA | UA PI | MCA PI | Calculated CPR | UA end-diastolic flow | DVP cm | DV |
|---|---:|---:|---:|---:|---|---:|---|
| 15 Jun 2026 | 28+0 | 1.05 | 1.90 | 1.810 | Forward | 4.8 | Not assessed |
| 06 Jul 2026 | 31+0 | 1.00 | 1.95 | 1.950 | Forward | 4.6 | Not assessed |
| 27 Jul 2026 | 34+0 | 0.95 | 1.85 | 1.947 | Forward | 4.4 | Not assessed |
| 17 Aug 2026 | 37+0 | 0.90 | 1.70 | 1.889 | Forward | 4.1 | Not assessed |

The fixture specialist report states that no Doppler deterioration is documented in the selected observations.

`DV not assessed` must remain `not assessed`.

Never convert it to:

```text
DV normal
```

---

# 9.6 Case 1 clinician-recorded assessment

At 34+0, the fixture clinician records:

> **Persistent small fetal size with ongoing interval increase in estimated fetal weight and no documented Doppler deterioration in the selected record. Review as SGA under the selected ISUOG terminology; continue specialist surveillance according to the treating team's clinical assessment.**

Authority:

```text
Clinician-recorded assessment
```

ODRISC did not generate this assessment.

The Interactive Lookup Assistant should immediately make visible that terminology may differ across sources.

For example:

- ISUOG separates SGA from FGR using size plus additional evidence.
- SMFM Consult #52 defines FGR as EFW or AC below the 10th percentile.

The product should show both source-specific positions.

It should not announce one framework as universally correct.

---

# 10. Case 1 — Fetal Growth homepage snapshot at 34+0

Selected review:

```text
Assessment date: 27 July 2026
GA: 34+0
Anchor: GA-MEERA-v1
Selected growth scan: DEMO01-US-34W
Previous growth scan: DEMO01-US-31W
Interval: 21 days
```

## 10.1 Golden GA Anchor — 3 cards

### Card 1 — Accepted pregnancy dating

```text
EDD: 07 Sep 2026
GA on selected date: 34+0
Anchor: GA-MEERA-v1
```

Label:

```text
Accepted dating
```

### Card 2 — Dating evidence

```text
09 Feb 2026
CRL 33.0 mm
source report GA 10+0
```

Display:

> Early ultrasound dating source retained.

Do not independently reconstruct CRL dating without the approved dating algorithm.

### Card 3 — Anchor integrity

Display:

```text
No later redating recorded
Later small size does not replace the accepted anchor
```

CTA:

```text
Open Golden GA Anchor
```

---

# 10.2 TOW Correction Model — 5 cards

This case demonstrates the **workflow**, not an invented GROW result.

The verified fixture provides:

```text
height = 153 cm
early weight = 47.0 kg at 10+0
parity = 1
singleton = yes
reported ethnic origin = Indian
```

The application must not guess the vendor mapping for ethnic-origin categories.

### Card 1 — Term Optimal Weight

Display in current fixture:

```text
GROW method registered
Patient-specific authorised TOW result: unavailable
```

Reason:

```text
numerical method package not production-enabled
```

### Card 2 — Current GA Growth Proportionality

Display:

```text
Selected EFW at 34+0: 1,930 g
GROW expected reference: unavailable
WHO 2017 population reference is available as a separately labelled fixture
```

Never place WHO values inside a GROW-labelled output.

### Card 3 — Centile & Z-Score Analytics

Display:

```text
WHO 2017 EFW position: P5–P10 band
Exact WHO centile: not supplied by the table-band fixture
GROW customised centile: unavailable
GROW Z-score: unavailable
```

### Card 4 — Longitudinal Reference Tracking

Display:

```text
31+0: 1,430 g → WHO P5–P10
34+0: 1,930 g → WHO P5–P10

Exact centile-point change: unavailable
```

Two identical bands do not mean a zero-point change.

### Card 5 — Distance to Selected Third-Centile Reference

For GROW:

```text
unavailable until authorised GROW Q3 value is returned
```

For WHO, if the product offers a separate population-reference utility:

```text
WHO P2.5 / P5 / P10 boundaries remain WHO outputs
```

Do not label any difference:

```text
safety margin
days remaining
time before FGR
```

---

# 10.3 Maternal-Fetal Matrix — 4 cards

Selected matched interval:

```text
31+0 → 34+0
06 Jul → 27 Jul
21 days
```

### Card 1 — Maternal Weight Velocity

```text
54.7 → 55.9 kg

+1.2 kg / 21 days
= +0.40 kg/week
```

### Card 2 — Fetal Growth Velocity

```text
1,430 → 1,930 g

+500 g / 21 days
= +166.7 g/week
```

This card is descriptive arithmetic.

### Card 3 — Reference Position Shift

```text
WHO P5–P10
→
WHO P5–P10
```

Display:

> Exact centile-point shift unavailable from banded results.

### Card 4 — Difference from WHO Median-Size-Curve Interval

WHO 2017 sex-combined Table 11:

```text
31+0 median = 1,707 g
34+0 median = 2,312 g

median-size-curve interval:
+605 g / 21 days
= 201.7 g/week

observed interval:
166.7 g/week

difference:
166.7 - 201.7
= -35.0 g/week
```

Label exactly:

> **Difference from selected median-size-curve interval**

Do not label it:

```text
growth variance
velocity Z-score
growth deficit
placental insufficiency
```

unless a separately validated method explicitly defines such an output.

---

# 10.4 Growth Analysis — Longitudinal EFW Growth Curve

## Card 1 — Latest EFW & Reference Position

```text
1,930 g at 34+0
WHO 2017: P5–P10
```

Authority:

```text
Calculated/verified fixture + published reference fixture
```

## Card 2 — Biometry at This Scan

```text
BPD 80.0 mm
HC 304.0 mm
AC 276.1 mm
FL 62.5 mm
```

AC remains independently visible.

## Card 3 — Reference Comparison

Initial demo:

```text
WHO 2017                   available as fixture
GROW                        numerical result unavailable
INTERGROWTH-21st            unavailable unless its adapter is enabled
NICHD                       unavailable unless its adapter is enabled
```

Never manufacture comparison rows.

## Card 4 — Data & Dating Review

```text
source verification: confirmed fixture
anchor: GA-MEERA-v1
selected EFW basis: recalculated fixture matching simulated source EFW
formula: HC/AC/FL Hadlock expression
newest correction affecting this value: none in fixture
```

---

# 10.5 Growth Analysis — Growth Velocity Analysis

Selected pair:

```text
DEMO01-US-31W
→
DEMO01-US-34W
```

### Card 1 — Estimated Interval Growth

```text
21 days
+500 g
+23.8 g/day
+166.7 g/week
```

### Card 2 — Reference Interval Comparison

```text
WHO median-size-curve interval:
201.7 g/week

observed minus median-size-curve:
-35.0 g/week
```

Display:

> Descriptive comparison. Not a velocity percentile.

### Card 3 — Comparison & Review Status

```text
Arithmetic: available
Observation comparability: supported in fixture
WHO median-size-curve comparison: available
Model-based velocity centile: unavailable
Source verification: confirmed fixture
Clinical interpretation: clinician-authored
```

### Card 4 — Scan Interval

```text
31+0 → 34+0
21 days
```

Show both dates.

---

# 10.6 Doppler Guideline Lookup — 4 cards

This module should demonstrate evidence navigation, not automated staging.

### Card 1 — Selected Doppler Finding

```text
UA end-diastolic flow: forward
UA PI: 0.95
MCA PI: 1.85
CPR: 1.947
DV: not assessed
```

Do not infer a DV state.

### Card 2 — Relevant Framework Definitions

Lookup targets may include:

```text
ISUOG SGA/FGR terminology
SMFM FGR definition
Delphi FGR criteria
Barcelona stage definitions
```

Case-specific lesson:

> The same small fetus may be described differently under different published definitions.

### Card 3 — Framework Comparison

Example development-fixture output:

| Framework/source | Relevant case issue | ODRISC behavior |
|---|---|---|
| ISUOG 2020 | Distinguish SGA from FGR | Retrieve source-specific criteria |
| SMFM #52 | EFW or AC <10th definition | Display as SMFM terminology |
| Delphi 2016 | Early/late FGR consensus definition | Retrieve relevant criteria, do not auto-evaluate |
| Barcelona 2014 | Stage definitions | Do not assign Stage I–IV from WHO band |

### Card 4 — Missing Information & Clinician Review

```text
DV: not assessed
exact source-specific vessel centiles: not calculated in this fixture
GROW customised result: unavailable
```

Clinician assessment remains visible separately.

---

# 11. Case 1 — What the tool demonstrates to clinicians

Without one longitudinal workspace, the clinician might need to:

```text
open the dating report
open five growth reports
copy five EFW values
reconstruct the dates
check whether GA changed
open a growth reference
calculate the 31–34 week interval
open Doppler reports
work out which observations were actually assessed
search ISUOG
search SMFM
search Delphi / Barcelona if relevant
document why terminology differs
```

ODRISC demonstrates a different workflow:

```text
verified record
    ↓
Fetal Growth homepage
    ↓
one click into the relevant module
    ↓
source-specific evidence
    ↓
clinician interpretation
```

No claim is made yet about the number of minutes saved.

That must be measured in a pilot.

---

# 12. Case 1 fictional outcome

At 37+0:

```text
EFW = 2,450 g
WHO = P5–P10
UA EDF = forward
```

The fictional treating team subsequently records induction and vaginal birth at 38+0 on 24 August 2026.

Birthweight:

```text
2,620 g
```

Birthweight must be stored as a postnatal outcome.

Do not plot it as another antenatal EFW point.

The delivery plan is a fictional clinician decision, not an ODRISC recommendation.

---

# 13. Case 2 — Anaya

# 13.1 Clinical teaching purpose

Case 2 demonstrates the workload created when:

```text
severe early smallness
+
serial growth
+
maternal risk
+
changing UA Doppler
+
DV/cCTG observations
+
multiple published frameworks
```

must be reviewed together.

This case should show how the Interactive Lookup Assistant can rapidly answer questions such as:

```text
What was the accepted dating basis?
Which was the latest true growth scan?
Did a Doppler-only visit contain a new EFW?
When was AEDF first recorded?
Was it confirmed?
What was the last known EFW at that time?
Which frameworks discuss this finding?
How does Barcelona differ from TRUFFLE?
What does SMFM say about AEDV?
What is still missing?
What assessment did the clinician actually record?
```

---

# 13.2 Case 2 patient/pregnancy fixture

| Field | Synthetic record |
|---|---|
| Display name | Anaya |
| Case / fetus ID | `ODRISC-DEMO-02 / F1` |
| Age | 30 years |
| Obstetric history | G2P1 |
| Previous pregnancy | Delivery at 35+0 for documented FGR; birthweight 1,750 g |
| Current pregnancy | Spontaneous singleton |
| Maternal history | Chronic hypertension; no known diabetes or renal disease; no smoking |
| Recorded treatment | Labetalol under treating team; low-dose aspirin recorded from 12 weeks; dosing is outside this demo |
| Height | 160.0 cm |
| Pre-pregnancy weight | 68.0 kg |
| Pre-pregnancy BMI | 26.56 kg/m² |
| Early-pregnancy weight | 68.5 kg at 9+0 |
| Dating scan | 12 January 2026 |
| CRL | 23.8 mm |
| Report-assigned GA | 9+0 |
| Accepted EDD | 17 August 2026 |
| Anchor | `GA-ANAYA-v1` |
| WHO fixture profile | Global, sex-combined |
| Ethnic origin record | Self-reported Indian; no inferred GROW vendor category |

---

# 13.3 Case 2 growth observations

| Scan ID | Date | GA | BPD mm | HC mm | AC mm | FL mm | Selected EFW g | WHO EFW position | WHO AC position |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| `DEMO02-US-20W` | 30 Mar 2026 | 20+0 | 47.0 | 174.0 | 148.1 | 32.0 | 325 | P25–P50 | P25–P50 |
| `DEMO02-US-24W` | 27 Apr 2026 | 24+0 | 58.0 | 215.0 | 188.7 | 41.0 | 600 | P10–P25 | P10–P25 |
| `DEMO02-US-28W` | 25 May 2026 | 28+0 | 67.0 | 253.0 | 202.8 | 50.0 | 880 | <P2.5 | <P2.5 |
| `DEMO02-US-31W` | 15 Jun 2026 | 31+0 | 74.0 | 278.0 | 218.0 | 55.5 | 1,150 | <P2.5 | <P2.5 |
| `DEMO02-US-34W` | 06 Jul 2026 | 34+0 | 80.0 | 300.0 | 223.9 | 61.0 | 1,400 | <P2.5 | <P2.5 |

Important:

```text
<P2.5
```

is a bounded statement.

Do not invent:

```text
P1.8
P1.2
P0.5
```

from this exact-week table fixture.

---

# 13.4 Case 2 maternal observations

| Date | GA | Maternal weight kg | Gain from pre-pregnancy kg | BP mmHg |
|---|---:|---:|---:|---|
| 12 Jan 2026 | 9+0 | 68.5 | +0.5 | 132/82 |
| 30 Mar 2026 | 20+0 | 71.2 | +3.2 | 130/80 |
| 27 Apr 2026 | 24+0 | 72.4 | +4.4 | 134/84 |
| 25 May 2026 | 28+0 | 73.6 | +5.6 | 138/86 |
| 15 Jun 2026 | 31+0 | 74.5 | +6.5 | 136/84 |
| 22 Jun 2026 | 32+0 | 74.8 | +6.8 | 138/88 |
| 29 Jun 2026 | 33+0 | 75.1 | +7.1 | 136/86 |
| 06 Jul 2026 | 34+0 | 75.4 | +7.4 | 138/86 |

Selected fictional laboratory values:

| Assessment | Platelets ×10⁹/L | Creatinine µmol/L | AST U/L | ALT U/L | Urine protein:creatinine mg/mmol |
|---|---:|---:|---:|---:|---:|
| 9+0 | 245 | 58 | 20 | 18 | 8 |
| 28+0 | 228 | 60 | 22 | 20 | 10 |
| 32+0 | 210 | 62 | 24 | 22 | 12 |
| 34+0 | 205 | 63 | 25 | 23 | 14 |

These are fixture observations.

Do not convert them into an automated pre-eclampsia diagnosis or rule-out.

---

# 13.5 Case 2 Doppler observations

| Report ID | Date | GA | UA PI | MCA PI | Calculated CPR | UA EDF | DVP cm |
|---|---:|---:|---:|---:|---:|---|---:|
| `DEMO02-DOP-28W0D` | 25 May 2026 | 28+0 | 1.55 | 1.90 | 1.226 | Forward | 4.1 |
| `DEMO02-DOP-31W0D` | 15 Jun 2026 | 31+0 | 1.65 | 1.45 | 0.879 | Forward | 3.7 |
| `DEMO02-DOP-32W0D` | 22 Jun 2026 | 32+0 | 1.90 | 1.25 | 0.658 | Absent | 3.5 |
| `DEMO02-DOP-32W1D` | 23 Jun 2026 | 32+1 | 1.92 | 1.27 | 0.661 | Absent | 3.5 |
| `DEMO02-DOP-33W0D` | 29 Jun 2026 | 33+0 | 1.92 | 1.22 | 0.635 | Absent | 3.2 |
| `DEMO02-DOP-34W0D` | 06 Jul 2026 | 34+0 | 1.95 | 1.20 | 0.615 | Absent | 3.0 |

The fixture intentionally contains a 32+0 and 32+1 Doppler-only sequence.

Important:

```text
latest EFW at 32+0 / 32+1 remains 1,150 g from the 31+0 growth scan
```

Do not create:

```text
a synthetic 32-week EFW
a new 32-week growth interval
```

from the Doppler-only visit.

---

# 13.6 Case 2 DV and cCTG fixture

| GA | DV PI | DV a-wave | cCTG STV ms | Duration | Recurrent spontaneous decelerations |
|---|---:|---|---:|---|---|
| 28+0 | 0.52 | Forward | 6.0 | 60 min | Not recorded |
| 31+0 | 0.56 | Forward | 5.8 | 60 min | Not recorded |
| 32+0 | 0.62 | Forward | 5.5 | 60 min | Not recorded |
| 32+1 | 0.63 | Forward | 5.2 | 60 min | Not recorded |
| 33+0 | 0.63 | Forward | 5.1 | 60 min | Not recorded |
| 34+0 | 0.64 | Forward | 4.8 | 60 min | Not recorded |

The fixture clinician report states that DV a-wave remains forward.

The application must not conclude:

```text
normal DV
```

solely from a forward a-wave because DV PI is a separate observation.

The application must not interpret cCTG STV using a universal cutoff unless the selected source/framework supplies the relevant rule and the source is enabled.

---

# 13.7 Case 2 clinician-recorded assessment

At 28+0 the synthetic specialist record contains:

> **Early fetal growth restriction / severe fetal smallness under the clinician's selected diagnostic framework.**

At 32+1, after repeat documentation of UA absent end-diastolic flow, the synthetic specialist records:

> **Barcelona Stage II FGR — clinician-recorded assessment after review of persistent UA AEDF and the complete surveillance record.**

Authority:

```text
Clinician-recorded assessment
```

Critical product rule:

ODRISC must **not** derive the Stage II label from the raw record in the launch Interactive Lookup Assistant.

Instead it should:

```text
recognize UA AEDF
retrieve Barcelona Stage II definition
retrieve relevant ISUOG / SMFM / RCOG / TRUFFLE context
show the clinician-recorded stage
show missing information
```

The repeat next-day Doppler is part of this synthetic verification history.

Do not claim that a >12-hour repeat is a universal Barcelona stage criterion unless the selected adopted source explicitly requires it.

---

# 14. Case 2 — Fetal Growth homepage snapshot at 34+0

Selected review:

```text
Assessment date: 06 July 2026
GA: 34+0
Anchor: GA-ANAYA-v1
Selected growth scan: DEMO02-US-34W
Previous growth scan: DEMO02-US-31W
Interval: 21 days

Key Doppler transition:
32+0 first fixture AEDF record
32+1 repeat fixture AEDF record
persistent AEDF through 34+0
```

---

# 14.1 Golden GA Anchor — 3 cards

### Card 1 — Accepted pregnancy dating

```text
EDD: 17 Aug 2026
GA at selected review: 34+0
Anchor: GA-ANAYA-v1
```

### Card 2 — Dating evidence

```text
12 Jan 2026
CRL 23.8 mm
source report GA 9+0
```

### Card 3 — Anchor integrity

Display:

```text
No redating recorded
Severe later smallness does not silently change EDD
```

This directly demonstrates why the Golden GA Anchor matters in a growth-restricted fetus.

---

# 14.2 TOW Correction Model — 5 cards

Verified inputs:

```text
height = 160 cm
early weight = 68.5 kg at 9+0
parity = 1
singleton = yes
reported ethnic origin = Indian
```

### Card 1 — Term Optimal Weight

```text
Authorised patient-specific GROW TOW: unavailable in fixture
```

### Card 2 — Current GA Growth Proportionality

```text
EFW 1,400 g at 34+0
WHO 2017 population position: <P2.5

GROW expected reference:
unavailable until authorised method is enabled
```

### Card 3 — Centile & Z-Score Analytics

```text
WHO position: <P2.5 bound
Exact tail centile: unavailable
GROW customised position: unavailable
```

### Card 4 — Longitudinal Reference Tracking

```text
31+0: 1,150 g → WHO <P2.5
34+0: 1,400 g → WHO <P2.5

Exact centile-point shift:
unavailable
```

### Card 5 — Distance to Third-Centile Reference

Do not manufacture a GROW Q3 value.

If a separately approved WHO threshold utility is shown, it must stay labelled WHO.

Being above or below a size threshold must not suppress the confirmed UA AEDF finding.

---

# 14.3 Maternal-Fetal Matrix — 4 cards

Selected interval:

```text
31+0 → 34+0
21 days
```

### Card 1 — Maternal Weight Velocity

```text
74.5 → 75.4 kg

+0.9 kg / 21 days
= +0.30 kg/week
```

### Card 2 — Fetal Growth Velocity

```text
1,150 → 1,400 g

+250 g / 21 days
= +83.3 g/week
```

### Card 3 — Reference Position Shift

```text
WHO <P2.5
→
WHO <P2.5
```

Display:

> Exact shift unavailable below the table boundary.

### Card 4 — Difference from WHO Median-Size-Curve Interval

```text
31+0 WHO median: 1,707 g
34+0 WHO median: 2,312 g

median-size-curve interval:
605 g / 21 days
= 201.7 g/week

observed:
83.3 g/week

difference:
83.3 - 201.7
= -118.3 g/week
```

Display:

> Descriptive difference. Not a velocity percentile and not proof of biological deterioration.

The confirmed Doppler change is a separate clinical observation.

---

# 14.4 Growth Analysis — Longitudinal EFW Growth Curve

## Card 1 — Latest EFW & Reference Position

```text
1,400 g at 34+0
WHO 2017: <P2.5
```

## Card 2 — Biometry at This Scan

```text
BPD 80.0 mm
HC 300.0 mm
AC 223.9 mm
FL 61.0 mm
```

## Card 3 — Reference Comparison

Initial demo:

```text
WHO 2017                   available fixture
GROW                        unavailable
INTERGROWTH-21st            unavailable unless adapter enabled
NICHD                       unavailable unless adapter enabled
```

RCOG July 2026 source policy context, when enabled, should be displayed as jurisdiction-specific guidance rather than used to silently change the user's selected reference.

## Card 4 — Data & Dating Review

```text
anchor: GA-ANAYA-v1
latest growth scan: 34+0
32+0 / 32+1 visits: Doppler-only, not new EFW scans
selected EFW formula: HC/AC/FL fixture equation
```

This card should visibly prevent the common error of turning every surveillance visit into a new growth point.

---

# 14.5 Growth Analysis — Growth Velocity Analysis

Selected pair:

```text
DEMO02-US-31W
→
DEMO02-US-34W
```

### Card 1 — Estimated Interval Growth

```text
21 days
+250 g
+11.9 g/day
+83.3 g/week
```

### Card 2 — Reference Interval Comparison

```text
WHO median-size-curve:
201.7 g/week

observed minus median:
-118.3 g/week
```

This does not become:

```text
a WHO velocity centile
a WHO velocity Z-score
a placental insufficiency score
```

### Card 3 — Comparison & Review Status

```text
Arithmetic: available
Pair comparability: supported in fixture
WHO median-size-curve comparison: available
Published model-based velocity centile: unavailable
Persistent UA AEDF: separately recorded
Clinician assessment: recorded
```

### Card 4 — Scan Interval

```text
31+0 → 34+0
21 days
```

The Doppler-only 32+0 and 32+1 visits must not appear in the growth-pair selector unless they contain a new accepted EFW.

---

# 14.6 Doppler Guideline Lookup — 4 cards

This is the case that most clearly demonstrates the Interactive Lookup Assistant.

## Card 1 — Selected Finding

At 34+0:

```text
UA EDF: absent
UA PI: 1.95
MCA PI: 1.20
CPR: 0.615

DV PI: 0.64
DV a-wave: forward
cCTG STV: 4.8 ms
```

Also show:

```text
first fixture AEDF: 32+0
repeat fixture AEDF: 32+1
persistent through selected review
```

## Card 2 — Relevant Published Criteria

Lookup targets:

```text
Barcelona Stage II definition
ISUOG early-FGR / surveillance context
SMFM AEDV guidance
RCOG FGR / Doppler guidance
TRUFFLE trial context
Delphi early-FGR definition
ISUOG Doppler technical guidance
```

Do not combine these into one universal ODRISC rule.

## Card 3 — Framework Comparison

The comparison should look like this conceptually:

| Framework/source | Why it appears | What the tool may show | What it must not do |
|---|---|---|---|
| Barcelona | UA AEDF maps to a published Stage II criterion | Stage definition + source | Auto-assign patient stage |
| Delphi | Severe early size finding | Early-FGR criteria | Auto-declare criteria met |
| ISUOG | Early FGR / Doppler surveillance context | Definitions and guidance | Replace clinician assessment |
| SMFM #52 | FGR + AEDV | Source-specific surveillance/delivery guidance | Turn source guidance into an ODRISC order |
| TRUFFLE | Very preterm FGR context with UA, DV, cCTG | Trial eligibility/monitoring context | Display a “TRUFFLE stage” |
| RCOG GTG31 | UK source pathway | Current source guidance + correction/update | Apply UK policy universally |

## Card 4 — Clinician Review

Display separately:

```text
Clinician-recorded:
Barcelona Stage II

Recorded at:
32+1 fixture review

Supporting observation:
persistent UA AEDF

Higher-stage finding:
not documented in the selected clinician record
```

Do not display:

```text
ODRISC Stage II
ODRISC recommends delivery
ODRISC recommends caesarean
```

---

# 15. Case 2 framework study view

The expanded case-study page should let a clinician study the **same observation** across multiple sources.

## 15.1 Barcelona

Relevant fixture question:

> How does the Barcelona stage-based approach describe FGR with UA absent end-diastolic flow?

The source definition may be retrieved when approved.

The case has a **clinician-recorded** Stage II label.

The product does not calculate it.

## 15.2 Delphi / ISUOG

Relevant fixture question:

> Which published diagnostic criteria are relevant to severe fetal smallness before 32 weeks?

The lookup should retrieve early-FGR definitions and show the recorded case context.

## 15.3 SMFM

Relevant fixture question:

> What does SMFM Consult Series #52 state for FGR with UA AEDV?

The source is particularly useful here because the published SMFM page states:

- FGR is defined as EFW or AC below the 10th percentile;
- AEDV changes surveillance intensity;
- SMFM recommends delivery at 33–34 weeks for FGR with AEDV.

The UI must present this as:

```text
Published SMFM guidance
```

not:

```text
ODRISC recommendation
```

## 15.4 TRUFFLE

Relevant fixture question:

> Is the TRUFFLE evidence context relevant to this very-preterm case, and what did the trial actually study?

The 2015 TRUFFLE RCT enrolled selected singleton very-preterm FGR cases at 26–32 weeks with low AC and elevated UA PI and compared delivery-trigger strategies involving cCTG STV and DV changes.

The tool should show the trial context and eligibility criteria.

It must not create:

```text
TRUFFLE stage
automatic TRUFFLE eligibility
automatic delivery trigger
```

## 15.5 RCOG

Relevant fixture question:

> What does the current UK source say, and has the source been corrected or updated?

The source drawer must show:

```text
Green-top Guideline No. 31
third edition 2024
2026 correction/update chain
jurisdiction context
```

The July 2026 RCOG page update includes England-specific context concerning INTERGROWTH EFW charts.

That should remain explicitly jurisdiction-specific.

---

# 16. Case 2 fictional management and outcome

The synthetic case records:

```text
closer specialist surveillance after AEDF
neonatal counselling
antenatal corticosteroids when preterm birth anticipated
continued UA/DV/fetal-heart-rate review
```

At 34+0 on 06 July 2026:

```text
EFW = 1,400 g
UA AEDF remains recorded
```

The fictional treating team records planned caesarean birth at 34+0 after reviewing the complete clinical picture.

Birthweight:

```text
1,450 g
```

This event can coexist with source-linked SMFM guidance in the study page.

The page must make clear:

```text
delivery decision = clinician-recorded fictional care decision
SMFM timing = published source guidance
ODRISC = evidence-navigation and record-review tool
```

---

# 17. Why Case 2 demonstrates clinician workload reduction

Without an integrated workspace, the clinician may need to:

```text
open the early dating report
open five separate growth reports
identify the last true EFW
separate Doppler-only encounters
check serial UA waveforms
check DV
check cCTG
calculate CPR values
calculate the 31–34-week EFW interval
find Barcelona staging criteria
find Delphi/ISUOG diagnostic definitions
find SMFM AEDV guidance
review TRUFFLE context
check RCOG current version/corrections
document which framework was actually selected
```

ODRISC should turn that into:

```text
confirmed longitudinal record
        ↓
selected finding
        ↓
relevant source set
        ↓
framework comparison
        ↓
clinician-recorded conclusion
```

Again, do not publish a quantified workload reduction until measured prospectively.

---

# 18. Side-by-side case lesson for the homepage

| Question | Case 1 — Meera | Case 2 — Anaya |
|---|---|---|
| Dating | Stable early anchor | Stable early anchor despite severe later smallness |
| Size | Persistent WHO P5–P10 | WHO <P2.5 from 28 weeks |
| Growth interval | Positive descriptive interval change | Positive descriptive interval change but severe size persists |
| Maternal trajectory | +0.40 kg/week over selected interval | +0.30 kg/week over selected interval |
| Doppler | Forward UA EDF in selected record | Persistent UA AEDF from 32+0 |
| DV | Not assessed | Forward a-wave recorded |
| Framework issue | SGA/FGR terminology differs by source | Multiple early-FGR/AEDF frameworks are relevant |
| Clinician record | SGA under selected terminology | Early FGR; clinician-recorded Barcelona Stage II after AEDF review |
| Key ODRISC value | Compare terminology without losing source context | Bring source criteria to the changing observation without auto-staging |

---

# 19. Homepage copy

## Hero

**Fetal Growth**

> Review the pregnancy timeline, fetal growth, maternal context and the clinical sources behind each assessment in one connected workspace.

Supporting line:

> Verified observations stay linked to their date, source, method and review history.

Primary CTA:

```text
Study Case 1
```

Secondary CTA:

```text
Study Case 2
```

## Intro to the cases

> Two fictional pregnancies demonstrate two very different review problems: persistent small size without documented Doppler deterioration, and severe early growth restriction followed by absent umbilical artery end-diastolic flow. Explore how the same record moves through ODRISC without hiding the source or taking the clinical decision away from the clinician.

## Workload statement

> ODRISC is designed to reduce repeated report transcription, longitudinal reconstruction and guideline searching. Clinical interpretation remains with the treating professional.

---

# 20. Case-card website copy

## Case 1 card

**A smaller fetus. A fuller evidence picture.**

> Follow a persistently small fetus across verified dating, serial growth, maternal observations and Doppler findings. Compare how published sources use different SGA/FGR terminology without forcing them into one ODRISC label.

CTA:

```text
Study Meera's case
```

## Case 2 card

**Changing Doppler. A traceable review.**

> Follow severe early fetal smallness through serial growth and persistent UA absent end-diastolic flow. Review the relevant framework definitions, trial context and source-specific guidance while keeping the clinician-recorded assessment distinct.

CTA:

```text
Study Anaya's case
```

---

# 21. Module landing-page copy

## Golden GA Anchor

> Keep every later growth and Doppler observation tied to one reviewed dating basis.

Case lesson:

```text
Meera:
small later measurements do not cause silent redating

Anaya:
severe early FGR does not cause silent redating
```

## TOW Correction Model

> Review the maternal inputs, reference identity and method behind a customised fetal-growth benchmark.

Case lesson:

```text
GROW remains separately identified
WHO is not inserted into a GROW-labelled result
unavailable customised results remain unavailable
```

## Maternal-Fetal Matrix

> Align maternal and fetal observations across the same time window without implying that one trajectory caused the other.

## Growth Analysis

> Review dated fetal size and compare selected scan intervals without confusing size position with longitudinal velocity.

## Doppler Guideline Lookup

> Move from a Doppler finding to the published definitions, criteria and guidance that discuss it.

---

# 22. Source drawer requirements

Every source card should expose:

```text
source title
issuing body
source ID
publication / version
reaffirmation if applicable
correction / supersession status
jurisdiction
population / scope
why this source appeared
matched concept
source locator
review/promotion state
```

For a development fixture:

```text
Fixture source content — not production clinical content
```

For a source still in Registry review:

```text
Source registered — clinical content review pending
```

For a production source:

```text
Approved source content
```

---

# 23. “Why this appeared” examples

## Meera

Query:

```text
small fetus normal UA flow
```

Potential explanation:

```text
Matched:
small-for-gestational-age
fetal growth restriction
estimated fetal weight
umbilical artery

Relevant intents:
definition lookup
framework comparison
guidance lookup
```

## Anaya

Query:

```text
UA AEDF at 32 weeks
```

Potential explanation:

```text
Matched:
umbilical artery
absent end-diastolic flow
early FGR
32+0 gestational context

Relevant intents:
criterion lookup
framework comparison
surveillance guidance
delivery guidance
trial context
```

Do not add:

```text
patient stage = Stage II
```

to the normalization response.

---

# 24. Clinician interpretation component

Both case pages end with a clinician-authored section.

Recommended structure:

```text
Clinician-recorded interpretation

Selected framework:
[optional]

Assessment:
[free text]

Recorded stage:
[optional clinician entry]

Rationale / notes:
[free text]

Source(s) reviewed:
[source IDs]

Author:
[user]

Recorded at:
[timestamp]
```

The label must never be:

```text
ODRISC assessment
```

---

# 25. Historical review

A clinician should be able to reopen:

```text
Case 2 at 31+0
```

and see only what was known then.

Later AEDF must not rewrite the earlier review.

Example:

```text
snapshot 31+0
    EFW 1,150 g
    UA EDF forward
    no later 32+0 AEDF visible as if already known

snapshot 32+1
    same last EFW from 31+0
    AEDF now confirmed in the record
```

This distinction is essential for meaningful audit history.

---

# 26. OCR/report verification demo

The cases should include a small interactive report-ingestion demonstration.

Suggested sequence:

```text
Upload simulated ultrasound report
        ↓
OCR identifies:
date
GA
BPD
HC
AC
FL
EFW
UA PI
MCA PI
UA EDF
        ↓
verification panel
        ↓
clinician corrects / confirms
        ↓
accepted observation
```

Example field state:

```text
raw text:
"Umb A PI 1.95"

OCR extraction:
1.95

concept:
Umbilical artery PI

verification:
Confirmed
```

Example missing field:

```text
DV:
not found in report
```

Never convert to:

```text
DV normal
```

---

# 27. Data provenance fixture

Each accepted observation should retain:

```text
case_id
pregnancy_id
fetus_id

report_id
page / field locator

acquisition date
acquisition time where available

source-reported GA
accepted GA
anchor ID/version

concept ID
raw source text
raw value
normalized value
unit

OCR confidence
verification state
confirmed value

value origin:
    simulated measurement
    source-reported result
    ODRISC deterministic calculation
    published reference fixture
    fictional clinician interpretation

formula ID/version
reference ID/version
source ID/version

review history
```

---

# 28. Suggested demo object IDs

## Meera

```text
CASE:
ODRISC-DEMO-01

PREGNANCY:
DEMO-PREG-01

FETUS:
F1

ANCHOR:
GA-MEERA-v1

REPORTS:
DEMO01-DATING-01
DEMO01-US-20W
DEMO01-US-28W
DEMO01-US-31W
DEMO01-US-34W
DEMO01-US-37W
```

## Anaya

```text
CASE:
ODRISC-DEMO-02

PREGNANCY:
DEMO-PREG-02

FETUS:
F1

ANCHOR:
GA-ANAYA-v1

REPORTS:
DEMO02-DATING-01
DEMO02-US-20W
DEMO02-US-24W
DEMO02-US-28W
DEMO02-US-31W
DEMO02-DOP-32W0D
DEMO02-DOP-32W1D
DEMO02-DOP-33W0D
DEMO02-US-34W
DEMO02-DOP-34W0D
```

---

# 29. Growth Analysis result-object requirements

## Selected EFW

```text
SelectedEfw
- observation_id
- observation_revision
- value_g
- basis
- formula_id
- formula_version
- verification_state
- selection_reason
```

For the fixtures:

```text
basis = recalculated_fixture_matching_simulated_source_report
```

Do not overwrite a future real source-reported EFW with a recalculated EFW.

## Size result

```text
SizeResult
- observation_id
- anchor_id/version
- GA_days
- reference_id/version
- position.kind
- position.lower
- position.upper
- Z.kind
- Z.value
- eligibility
```

For the WHO band fixture:

```text
position.kind = band
```

or:

```text
position.kind = lower_tail
```

for `<P2.5`.

## Interval result

```text
IntervalGrowthResult
- scan_1_id
- scan_2_id
- selected_efw_1_id
- selected_efw_2_id
- calendar_days
- delta_g
- g_day
- g_week
- comparability_state
```

## Reference interval comparison

```text
ReferenceIntervalComparison
- reference_id/version
- median_1
- median_2
- median_interval_g_week
- observed_minus_median_g_week
```

---

# 30. No fabricated velocity centile

Neither case currently contains a validated model-based fetal velocity centile.

Therefore the UI must say:

```text
Model-based velocity centile:
Unavailable
```

Do not derive one from:

```text
WHO P10/P50/P90
WHO median
centile bands
g/week
```

If an approved NICHD velocity adapter or other longitudinal model is later enabled, display it as a separately identified model result.

---

# 31. Case-specific missing-data demonstrations

## Meera

Show:

```text
DV = not assessed
GROW personalised output = unavailable
exact WHO centile = unavailable from band fixture
model-based velocity centile = unavailable
```

## Anaya

Show:

```text
exact <P2.5 centile = unavailable
GROW personalised output = unavailable
model-based velocity centile = unavailable
full source waveforms = unavailable in fixture
interim unlisted surveillance encounters = not represented
```

Missing data are part of the product demonstration.

Do not hide them.

---

# 32. Safety / interpretation guardrails for Codex

Codex SHALL NOT implement text or logic that says:

```text
ODRISC diagnosed FGR
ODRISC diagnosed SGA
ODRISC assigned Barcelona Stage II
ODRISC determined TRUFFLE eligibility
ODRISC recommends hospital admission
ODRISC recommends surveillance frequency
ODRISC recommends delivery at 34 weeks
ODRISC recommends caesarean
ODRISC predicts deterioration
ODRISC determined placental insufficiency
```

Codex MAY show:

```text
Clinician-recorded diagnosis
Clinician-recorded stage

Published source definition
Published source criterion
Published source surveillance guidance
Published source delivery guidance
Trial eligibility context
Technical Doppler guidance

Relevant to the selected observation
```

---

# 33. Clinical wording rules

Prefer:

```text
relevant published criterion
source-specific guidance
clinician-recorded assessment
source-reported finding
verified observation
reference position
descriptive interval change
```

Avoid:

```text
ODRISC result
ODRISC diagnosis
ODRISC stage
safe
stable
normal overall
all clear
growth failure
placental failure
```

unless those words are part of an identified source quotation or clinician-authored note.

---

# 34. Workload-value demonstration

The product may demonstrate process consolidation.

Use:

> ODRISC brings the case chronology, calculations, reference context and relevant source material together so the clinician does not have to reconstruct them across multiple disconnected records.

Use:

> A new finding can be reviewed against the pregnancy history and the sources that discuss it without losing the original report context.

Do not use without evidence:

```text
cuts review time by X%
reduces errors by X%
improves outcomes
detects FGR earlier
prevents stillbirth
prevents unnecessary delivery
```

These require study data.

---

# 35. Suggested case-study interaction

For each case:

```text
1. Open case
2. Land on Fetal Growth
3. Review three-line clinical summary
4. See 24 module highlights
5. Click a surprising or clinically important card
6. Open the dedicated module workspace
7. Inspect source observation
8. Inspect method/reference
9. Open evidence drawer
10. Compare frameworks
11. Review missing data
12. Read clinician-recorded assessment
13. Return to timeline
14. Open prior historical snapshot
```

Case 1 should feel like:

```text
"Why is this fetus small, and how do definitions differ?"
```

Case 2 should feel like:

```text
"What changed, when did it change, and which published sources are relevant?"
```

---

# 36. Homepage case summary — exact recommended copy

## Meera

**Persistent small size, reviewed in context**

> Serial growth estimates remain within the lower WHO reference bands in this synthetic case, while the selected Doppler reports retain forward umbilical artery end-diastolic flow. ODRISC brings the dating basis, growth history, maternal observations and source-specific SGA/FGR definitions together for clinician review.

## Anaya

**A changing Doppler finding, traced back to the record**

> Severe fetal smallness is present before 32 weeks in this synthetic case. Umbilical artery absent end-diastolic flow is then recorded and confirmed on repeat assessment. ODRISC links that finding to the prior growth record and retrieves the relevant published frameworks while preserving the clinician-recorded assessment.

---

# 37. Educational comparison card

Title:

**Same platform. Different clinical question.**

| | Meera | Anaya |
|---|---|---|
| Core question | How should persistent smallness be described across different source definitions? | What published frameworks are relevant after a major Doppler change? |
| Golden GA | Prevent silent redating | Prevent severe smallness from altering established dates |
| TOW | Show reference identity and unavailable customised result | Keep customisation separate from confirmed Doppler evidence |
| Matrix | Align maternal + fetal trajectories | Show maternal trend without implying adequate fetal/placental status |
| EFW | Persistent lower-band trajectory | Marked decline in reference position |
| Velocity | Transparent 21-day change | Positive grams gained does not erase severe size |
| Doppler | Forward UA EDF | Persistent UA AEDF |
| Lookup | ISUOG vs SMFM terminology | Barcelona / Delphi / ISUOG / SMFM / TRUFFLE / RCOG |
| Final authority | Clinician | Clinician |

---

# 38. Evidence verification notes for the case fixture

The case fixture arithmetic has been rechecked.

## 38.1 EFW equation

The HC/AC/FL formula used in this file reproduces all displayed EFW values after one rounding step.

Example:

```text
Meera 34+0:
HC 304.0 mm
AC 276.1 mm
FL 62.5 mm
→ approximately 1,930 g

Anaya 34+0:
HC 300.0 mm
AC 223.9 mm
FL 61.0 mm
→ approximately 1,400 g
```

## 38.2 Dating

The accepted EDDs reproduce all displayed GA values on their listed dates.

## 38.3 WHO EFW table examples

WHO 2017 sex-combined Table 11 includes:

```text
28 weeks:
P2.5 929 g
P5   977 g
P10  1,026 g
P50  1,189 g

31 weeks:
P5   1,394 g
P10  1,470 g
P50  1,707 g

34 weeks:
P5   1,872 g
P10  1,985 g
P50  2,312 g
```

Therefore:

```text
Meera 28+0 / 1,000 g → P5–P10
Meera 31+0 / 1,430 g → P5–P10
Meera 34+0 / 1,930 g → P5–P10

Anaya 28+0 / 880 g → <P2.5
Anaya 31+0 / 1,150 g → <P2.5
Anaya 34+0 / 1,400 g → <P2.5
```

## 38.4 WHO AC examples

WHO 2017 Table 8 includes:

```text
28 weeks:
P2.5 215 mm
P5   220 mm
P10  225 mm

31 weeks:
P2.5 241 mm
P5   246 mm
P10  252 mm

34 weeks:
P2.5 265 mm
P5   270 mm
P10  277 mm
```

Therefore the displayed AC bands/bounds are consistent with the fixture.

## 38.5 Interval arithmetic

Meera:

```text
31+0 → 34+0
1,430 → 1,930 g
+500 g / 21 days
= 166.7 g/week
```

Anaya:

```text
31+0 → 34+0
1,150 → 1,400 g
+250 g / 21 days
= 83.3 g/week
```

WHO median:

```text
1,707 → 2,312 g
+605 g / 21 days
= 201.7 g/week
```

Differences:

```text
Meera:
166.7 - 201.7 = -35.0 g/week

Anaya:
83.3 - 201.7 = -118.3 g/week
```

## 38.6 CPR arithmetic

All displayed CPR values are direct:

```text
MCA PI / UA PI
```

No clinical threshold is inferred by arithmetic alone.

---

# 39. Evidence-source bibliography for internal review

Use Registry v3.1 as the runtime authority.

The following sources were used to verify the clinical framing of this fixture.

## ACOG dating

**Methods for Estimating the Due Date. Committee Opinion No. 700.**  
American College of Obstetricians and Gynecologists, May 2017; current ACOG page identifies reaffirmation in 2025.  
Registry: `SRC-ACOG-2017-CO700-DATING`.

## WHO fetal growth

Kiserud T, Piaggio G, Carroli G, et al.  
**The World Health Organization Fetal Growth Charts: A Multinational Longitudinal Study of Ultrasound Biometric Measurements and Estimated Fetal Weight.**  
PLoS Medicine. 2017;14(1):e1002220.  
Registry: `SRC-WHO-2017-FETAL-GROWTH`, with correction records.

## ISUOG SGA/FGR

**ISUOG Practice Guidelines: diagnosis and management of small-for-gestational-age fetus and fetal growth restriction.**  
Ultrasound Obstet Gynecol. 2020;56:298–312.  
Registry: `SRC-ISUOG-2020-SGA-FGR`.

## SMFM

Martins JG, Biggio JR, Abuhamad A.  
**Society for Maternal-Fetal Medicine Consult Series #52: Diagnosis and management of fetal growth restriction.**  
2020; reaffirmed 2024.  
Registry: `SRC-SMFM-2020-CONSULT-52`.

## Barcelona stage-based framework

Figueras F, Gratacós E.  
**Stage-based approach to the management of fetal growth restriction.**  
Prenat Diagn. 2014;34:655–659. DOI 10.1002/pd.4412.  
Registry: `SRC-BARCELONA-2014-STAGE-FGR`.

## TRUFFLE

Lees CC, et al.  
**2 year neurodevelopmental and intermediate perinatal outcomes in infants with very preterm fetal growth restriction (TRUFFLE): a randomised trial.**  
Lancet. 2015;385:2162–2172. DOI 10.1016/S0140-6736(14)62049-3.  
Registry: `SRC-TRUFFLE-2015-RCT`.

## RCOG

**Small-for-Gestational-Age Fetus and a Growth Restricted Fetus, Investigation and Care. Green-top Guideline No. 31.**  
Third edition 2024; current RCOG page includes July 2026 update context.  
Registry:
`SRC-RCOG-2024-GTG31`,
`SRC-RCOG-2026-GTG31-CORRECTION`,
`SRC-RCOG-2026-GTG31-UPDATE`.

---

# 40. Codex route specification

Suggested route structure:

```text
/fetal-growth

/golden-ga-anchor

/tow-correction-model

/maternal-fetal-matrix

/growth-analysis
/growth-analysis/longitudinal-efw
/growth-analysis/growth-velocity

/doppler-guideline-lookup
/doppler-guideline-lookup/frameworks
```

The sidebar should show module families.

The child workspaces may appear as nested menu entries or tabs.

---

# 41. Codex component structure

```text
FetalGrowthDashboardShell

├── PersistentCaseHeader
├── SideNavigation
├── CaseSelector
├── ReviewDateSelector
├── SourceStateBadge
│
├── FetalGrowthHome
│   ├── CaseNarrative
│   ├── GoldenGAHighlightGroup
│   ├── TOWHighlightGroup
│   ├── MatrixHighlightGroup
│   ├── GrowthAnalysisHighlightGroup
│   └── DopplerLookupHighlightGroup
│
├── GoldenGAWorkspace
├── TOWWorkspace
├── MaternalFetalMatrixWorkspace
│
├── GrowthAnalysisWorkspace
│   ├── LongitudinalEFWWorkspace
│   └── GrowthVelocityWorkspace
│
└── DopplerGuidelineLookupWorkspace
```

Shared:

```text
ObservationDrawer
SourceDrawer
MethodDrawer
WhyThisAppeared
MissingDataPanel
ClinicianInterpretation
HistoricalSnapshotViewer
```

---

# 42. Codex fixture behavior

Create deterministic fixtures for both cases.

Do not call external clinical APIs from the demo fixture.

The data in this file should be represented as test fixture objects.

Recommended files:

```text
/fixtures/clinical-cases/meera.json
/fixtures/clinical-cases/anaya.json

/fixtures/source-content/
    demo-source-content.json
```

Source content used before production promotion must include:

```text
fixture_only = true
authoritative = false
```

---

# 43. Demonstration source-state logic

In demo/development mode:

```text
if fixture_only:
    show "Demonstration source fixture"
```

In production:

```text
if promotion.lookup.status == lookup_enabled:
    show approved content

elif promotion.lookup.status == restricted_lookup:
    enforce restriction and show approved content

else:
    do not expose source-derived clinical content as authoritative
    show source metadata / review-pending state
```

Numerical utilities follow the independent numerical promotion track.

---

# 44. Required interaction tests

## Case 1

```text
[ ] open Meera
[ ] select 34+0
[ ] EDD = 07 Sep 2026
[ ] GA = 34+0
[ ] EFW = 1,930 g
[ ] WHO position = P5–P10
[ ] 31→34 interval = 21 days
[ ] g/week = 166.7
[ ] median-size-curve comparison = -35.0 g/week
[ ] UA EDF = forward
[ ] DV = not assessed
[ ] no automatic Barcelona stage
[ ] ISUOG vs SMFM terminology comparison accessible
```

## Case 2

```text
[ ] open Anaya
[ ] select 34+0
[ ] EDD = 17 Aug 2026
[ ] GA = 34+0
[ ] EFW = 1,400 g
[ ] WHO position = <P2.5
[ ] 31→34 interval = 21 days
[ ] g/week = 83.3
[ ] median-size-curve comparison = -118.3 g/week
[ ] latest growth before 32+0 Doppler = 31+0 / 1,150 g
[ ] 32+0 Doppler-only visit does not create a growth point
[ ] UA AEDF visible from 32+0
[ ] repeat AEDF visible at 32+1
[ ] clinician-recorded Barcelona Stage II visible
[ ] no automatic ODRISC Stage II
[ ] framework comparison accessible
```

---

# 45. Regression tests

Must remain true:

```text
source-reported EDD != accepted EDD unless explicitly accepted

later fetal smallness != automatic redating

WHO != GROW

size band != exact centile

<P2.5 != invented exact tail centile

reported EFW != recalculated EFW != selected EFW

g/week != velocity centile

WHO median-size-curve difference != statistical variance

Doppler-only visit != growth scan

DV not assessed != DV normal

UA AEDF concept recognition != automatic patient stage

clinician-recorded Stage II != ODRISC Stage II

published delivery guidance != ODRISC delivery recommendation

birthweight != antenatal EFW point
```

---

# 46. Accessibility / clinician usability

Tables must be available for every chart.

Do not encode:

```text
confirmed
pending
unavailable
abnormal
```

by colour alone.

Every chart point needs:

```text
date
GA
measurement
method/reference
source state
```

The source drawer should be keyboard accessible.

The two demo cases should remain usable without animation.

---

# 47. Suggested final homepage closing copy

**One record. Multiple clinical questions. Traceable evidence.**

> ODRISC is designed to help clinicians move from a verified observation to its longitudinal context and the published sources that discuss it. The platform organises the evidence; the clinician remains responsible for interpretation and care.

CTA:

```text
Study the two cases
```

Secondary:

```text
Explore the five modules
```

---

# 48. Public demonstration disclaimer

Use a compact visible disclaimer:

> **Illustrative cases.** All people, reports and outcomes shown here are fictional. The cases demonstrate ODRISC workflow and evidence navigation and are not clinical advice, validated patient-specific ODRISC outputs or evidence of improved outcomes.

---

# 49. Internal clinical-review note

The two cases are intentionally different.

**Meera** should not be rewritten to look more pathological merely to make the product appear useful.

Her value is that she demonstrates:

```text
small size
+
ongoing serial change
+
no documented Doppler deterioration
+
terminology differences between sources
```

**Anaya** should not be turned into an automated staging demonstration.

Her value is that she demonstrates:

```text
severe early size finding
+
new clinically important Doppler observation
+
clear timeline
+
framework-specific evidence
+
clinician-recorded stage
```

Together, they demonstrate why the Interactive Lookup Assistant is useful without requiring ODRISC to make the final clinical decision.

---

# 50. Final Codex instruction

> Build these two synthetic cases inside the single ODRISC Interactive Lookup Assistant dashboard. Use `Fetal Growth` as the homepage and preserve the five module families exactly as defined in this specification. Treat the case data as deterministic fixtures. Preserve patient/pregnancy/fetus identity, exact dates, the accepted dating anchor, report provenance, verified observations, selected EFW provenance, reference identity, scan-pair identity and clinician review state across module navigation. Do not invent GROW/TOW results, exact centiles from bands, velocity centiles, missing Doppler observations, framework criteria or patient-specific management. The Doppler module retrieves and compares source-specific evidence; it does not automatically stage the patient. Where this specification records a stage or assessment, render it as **Clinician-recorded assessment**. In production mode, obey Clinical Source Registry v3.1 promotion states before exposing source-derived clinical content or enabling numerical methods.

