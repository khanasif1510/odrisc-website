# ODRISC Clinical Source Registry
## Source Governance, Production Promotion, Method-Package Provenance, Module Dependencies, Corrections and Machine-Readable Registry Specification

**Document ID:** ODRISC-ILA-SOURCE-REGISTRY-001  
**Version:** 3.1  
**Date:** 18 September 2026  
**Status:** Active shared specification  
**Parent specification:** `00_ODRISC_Interactive_Lookup_Assistant_Master_Specification.md` Version 3.0  
**Machine-readable companion:** `clinical-sources.json`  
**Product layer:** ODRISC Interactive Lookup Assistant  
**Registered seed source records:** 38  
**Unresolved source candidates:** 10  
**Numerical/method-package source records:** 10

---

# 0. Master specification inheritance

This registry is governed by Master v3 and is rebuilt against all five Future-regulated specifications:

```text
ODRISC_GA_Anchor_Review_and_Iteration_Brief.md
ODRISC_TOW_Correction_Review_and_Dashboard_Specification.md
ODRISC_Maternal_Fetal_Matrix_Review_and_Dashboard_Specification.md
ODRISC_Doppler_Staging_Review_and_Dashboard_Specification.md
ODRISC_Longitudinal_EFW_and_Growth_Velocity_Review_and_Dashboard_Specification.md
```

It supports the final architecture:

```text
Golden GA Anchor
Fetal Growth Reference & Methods
Longitudinal Growth & Velocity
    ├── Longitudinal EFW Growth Curve
    └── Growth Velocity Analysis
Maternal–fetal Matrix
Doppler Guideline & Framework Lookup
```

The registry MAY register a source before approval.

The registry MUST NOT treat source presence as permission to display authoritative clinical content or execute patient-specific numerical methods.

---

# 1. Version 3.0 design decision

Master v3 adds the fifth and final module family with two linked workspaces. Registry v3 therefore separates:

```text
clinical guideline
EFW formula source
fetal-size reference
Doppler measurement reference
longitudinal velocity reference
official calculator
software/source-code package
supplementary equation package
gestational-age/domain policy
research source
```

The defining rule is:

> **A fetal-size reference and a longitudinal velocity model are different source objects even when they share an issuing organization or method-family name.**

---

# 2. Candidate / metadata-only starting posture

All current registered records intentionally remain:

```text
registry_status = seed
adoption_status = candidate
retrieval_status = metadata_only
content_package_status = metadata_only
```

This allows source administration, development fixtures and review queues without making any source production-authoritative.

Current production-enabled source count remains **0 at migration time**, but Version 3.1 no longer treats that as the intended launch end state. Sources are now promoted individually through explicit lookup and, where applicable, numerical-method release tracks.

---

# 3. Registered sources versus source candidates

## 3.1 `sources[]`

A stable `SRC-*` record means the source identity is sufficiently resolved to track.

It does not mean the source is clinically adopted.

## 3.2 `source_candidates[]`

A `CAND-*` record means a known source/package dependency remains unresolved or incomplete.

Candidates may drive acquisition and review work but may not answer an authoritative production lookup.

---

# 4. Machine-readable structure

```json
{
  "registry": {},
  "controlled_vocabularies": {},
  "promotion_architecture": {},
  "promotion_queues": {},
  "promotion_summary": {},
  "module_dependency_map": {},
  "sources": [],
  "source_candidates": []
}
```

Version 3.1 extends the registry with a dual-track production-promotion architecture in addition to method-package governance.

---

# 5. Source record contract

Each source retains identity, publication/version, scope, governance, relationships, licensing, provenance and module-target fields.

Master v3.1 adds:

```text
method_package
module_use_constraints[]
evidence_level
promotion
```

`promotion` is the release-workflow authority. The older source/adoption/retrieval fields remain compatibility projections.

The method-package object supports:

```text
applicable
method_classes[]
package_status
package_identity
formula_ids[]
supported_variables[]
supported_outputs[]
gestational_age_domain
pregnancy_types[]
reference_population_or_profile
required_covariates[]
units[]
transformation_or_model_scale
interpolation_policy
tail_policy
source_package_integrity_required
source_package_checksum
numerical_test_version
independent_benchmark_status
clinical_adoption_state
allowed_uses[]
prohibited_uses[]
notes[]
```

---

# 6. Three production gates

## 6.1 Source gate

```text
registry_status = registered
clinical_review_status = clinically_verified
adoption_status = approved_for_lookup | approved_with_restrictions
retrieval_status = enabled | restricted
```

## 6.2 Content-package gate

```text
content_package_status = release_ready | restricted_release
```

and each displayed statement resolves to reviewed source content.

## 6.3 Numerical-method gate

For formulas, reference calculations or velocity-model outputs:

```text
method_package.applicable = true
method_package.package_status = utility_release_ready | restricted_release
```

plus exact package identity, method domain, source integrity, numerical testing, benchmark evidence and clinical adoption.

All applicable gates are cumulative.

---

# 6A. Production-promotion architecture

Version 3.1 replaces a single global `production enabled` concept with two independent release tracks:

```text
TRACK A — CLINICAL / METHODOLOGY LOOKUP
source metadata
    ↓
structured source content
    ↓
clinical review
    ↓
lookup QA
    ↓
lookup_release_ready
    ↓
lookup_enabled

TRACK B — NUMERICAL METHOD
exact package
    ↓
implementation
    ↓
numerical validation
    ↓
clinical method review
    ↓
utility_release_ready
    ↓
utility_enabled
```

A source may therefore be `lookup_enabled` while its numerical method remains disabled. This is a normal and expected production state.

---

# 6B. Lookup promotion states

```text
metadata_only
source_acquisition_pending
content_extraction_pending
clinical_review_pending
lookup_qa_pending
lookup_release_candidate
lookup_release_ready
lookup_enabled
restricted_lookup
suspended
retired
```

| State | Meaning |
|---|---|
| `metadata_only` | Source is known but not yet in the clinical release workflow |
| `source_acquisition_pending` | Exact source/version must still be acquired or archived |
| `content_extraction_pending` | Structured source content is incomplete |
| `clinical_review_pending` | Content requires primary/secondary clinical review |
| `lookup_qa_pending` | Clinical review is complete; citation/taxonomy/rendering QA remains |
| `lookup_release_candidate` | Evidence is substantially complete and queued for release decision |
| `lookup_release_ready` | All required gates complete; runtime enablement has not occurred |
| `lookup_enabled` | Approved content may be served in production |
| `restricted_lookup` | Production lookup is enabled only within recorded restrictions |
| `suspended` | New production retrieval is blocked pending review |
| `retired` | No new use; historical provenance remains resolvable |

---

# 6C. Lookup release gates

A source becomes `lookup_release_ready` only after every applicable gate is `passed` or formally `waived`:

```text
source_identity_verified
source_access_or_archived_copy_confirmed
rights_and_licensing_review
correction_and_supersession_review
structured_content_extracted
source_locators_verified
primary_clinical_review
secondary_clinical_review
taxonomy_mapping_qa
response_rendering_qa
release_approval
```

Metadata verification satisfies only the source-identity layer.

---

# 6D. Numerical promotion states

```text
not_applicable
package_required
implementation_pending
numerical_validation_pending
clinical_method_review_pending
utility_release_candidate
utility_release_ready
utility_enabled
restricted_utility
suspended
retired
```

The numerical track is independent from lookup. A reviewed guideline or methodology source may be live in production even while its patient-specific calculator remains disabled.

---

# 6E. Numerical release gates

```text
exact_method_package_acquired
package_integrity_checksum_recorded
implementation_complete
source_fixture_tests
unit_and_conversion_tests
domain_boundary_tests
interpolation_and_tail_tests
independent_benchmark
regression_tests
clinical_method_review
secondary_method_review
rights_and_licensing_review
release_approval
```

A public calculator, publication or source-code PDF does not bypass these gates.

---

# 6F. Source-level promotion object

Every source now includes:

```text
promotion
├── tracks[]
├── priority
├── release_mode
├── lookup
│   ├── status
│   ├── eligible_for_promotion
│   ├── release_scope
│   ├── restrictions[]
│   ├── gates{}
│   ├── blockers[]
│   ├── approvals[]
│   └── release{}
├── numerical
│   ├── status
│   ├── potentially_applicable
│   ├── method_classes[]
│   ├── restrictions[]
│   ├── gates{}
│   ├── blockers[]
│   ├── approvals[]
│   └── release{}
├── promotion_history[]
└── last_promotion_review_at
```

---

# 6G. Promotion tracks

```text
clinical_lookup
methodology_lookup
numerical_method
research_watch
governance_linked_source
```

Examples:

```text
ISUOG guideline
→ clinical_lookup

INTERGROWTH EFW equation package
→ methodology_lookup + numerical_method

RCOG correction
→ clinical_lookup + governance_linked_source

TRUFFLE-2 update
→ research_watch
```

---

# 6H. Restricted production states

`restricted_lookup` may limit modules, topics, content types, jurisdictions, populations, pregnancy types, gestational-age scope or source sections.

`restricted_utility` may limit method IDs, variables, pregnancy types, GA domain, reference profile or output type.

Restrictions are machine-readable and must be enforced by the retrieval/calculation layer.

---

# 6I. Approval roles and separation of duties

```text
source_governance_reviewer
primary_clinical_reviewer
secondary_clinical_reviewer
method_owner
numerical_validator
quality_reviewer
licensing_or_rights_reviewer
release_approver
```

Recommended principle:

> The person implementing a numerical method should not be the only person validating and releasing it.

---

# 6J. Approval and promotion-event records

Approval record:

```text
approval_id
track
gate
reviewer_role
reviewer_id
decision
decided_at
evidence_refs[]
restrictions[]
notes
```

Promotion event:

```text
event_id
track
from_status
to_status
reason
actor_role
occurred_at
evidence_refs[]
```

Status history is append-only.

---

# 6K. Compatibility fields

Existing fields remain for backward compatibility:

```text
registry_status
clinical_review_status
adoption_status
retrieval_status
content_package_status
method_package.package_status
```

Version 3.1 makes `promotion.*` the release-workflow authority.

When lookup becomes enabled, compatibility fields project to:

```text
registry_status = registered
clinical_review_status = clinically_verified
adoption_status = approved_for_lookup
retrieval_status = enabled
content_package_status = release_ready
```

For restricted lookup:

```text
adoption_status = approved_with_restrictions
retrieval_status = restricted
content_package_status = restricted_release
```

---

# 6L. Promotion queues

Version 3.1 defines:

```text
Wave 1 — Launch-core lookup
Wave 2 — Module-support lookup
Wave 3 — Methodology lookup
Wave 4 — Numerical method enablement
Research watch
```

Wave 1 is specifically intended to make the Interactive Lookup Assistant clinically useful before every numerical engine is validated.

Machine-readable queue membership is stored under `promotion_queues`.

---

# 6M. Update, suspension and rollback

A correction, erratum, source update, failed QA, package-integrity issue or clinically material method defect may move:

```text
lookup_enabled → restricted_lookup | suspended
utility_enabled → restricted_utility | suspended
```

Only affected content/methods should be restricted when the impact scope is known.

Historical signed reviews remain reconstructable with the source/method version used at the time.

Use `retired` only when a source/method should no longer be used for new results.

---

# 6N. Intended rollout

The intended end state is neither:

```text
38 sources → enable all 38 at once
```

nor:

```text
38 sources → leave all 38 metadata-only forever
```

It is:

```text
registered inventory
    ↓
prioritized promotion queues
    ↓
source-by-source lookup release
    ↓
method-by-method numerical release
```

This allows clinical lookup to become useful earlier while numerical methods remain separately controlled.

---

# 7. Why a published method is not automatically executable

A publication or online calculator may establish a source or scientific method.

An ODRISC implementation still requires:

```text
exact package
version
formula / coefficients
variables
units
supported GA domain
transformation / model scale
interpolation
tail policy
checksum / integrity
test fixtures
independent benchmark
clinical adoption
```

A public calculator is a potential reference/benchmark source, not automatic software validation.

---

# 8. Stable IDs and backward compatibility

Every Version 2 `SRC-*` ID is preserved.

The pre-existing:

```text
SRC-NICHD-FETAL-VELOCITY-CALCULATOR
```

is retained and clarified as the legacy NICHD velocity family.

Unified NICHD methods receive new IDs rather than changing the meaning of the old ID.

---

# 9. Module dependency map

## 9.1 Golden GA Anchor

Retains ACOG/ISUOG dating and terminology dependencies and remains the authority for GA-at-acquisition.

## 9.2 Fetal Growth Reference & Methods

Now includes metadata for:

```text
WHO
GROW
INTERGROWTH-21st official resources
INTERGROWTH 2020 EFW equations
INTERGROWTH 2025 GA limits policy
NICHD unified size
NICHD unified EFW code
NICHD legacy size
```

## 9.3 Longitudinal EFW Growth Curve

Uses fetal-size references and explicit EFW-formula provenance.

It keeps reported, recalculated and selected EFW conceptually separate.

## 9.4 Growth Velocity Analysis

Uses:

```text
date-based descriptive interval arithmetic
size-reference medians for descriptive interval comparison
separate published longitudinal velocity models
```

A size median-curve comparison is not a velocity percentile.

## 9.5 Maternal–fetal Matrix

Reuses the same selected fetal pair/result identity when showing the same interval.

## 9.6 Doppler Guideline Lookup

Keeps Doppler measurement references and clinical frameworks separate from EFW references.

---

# 10. New Master v3 source families

## 10.1 INTERGROWTH-21st

```text
SRC-INTERGROWTH-OFFICIAL-FETAL-GROWTH-RESOURCES
SRC-INTERGROWTH-2020-EFW-SUPPLEMENT
SRC-INTERGROWTH-2025-GA-LIMITS-POLICY-V2
```

These are intentionally separate source objects:

```text
resource portal
numerical EFW equation package
GA/domain policy
```

The existing INTERGROWTH UA Doppler reference remains a Doppler source, not an EFW source.

## 10.2 NICHD unified size

```text
SRC-NICHD-UNIFIED-FETAL-GROWTH-CALCULATOR
SRC-NICHD-2026-UNIFIED-EFW-CODE
```

The code record preserves formula/package provenance and the reviewed HC/AC/FL unit boundary.

## 10.3 NICHD unified velocity

```text
SRC-NICHD-UNIFIED-FETAL-VELOCITY-CALCULATOR
SRC-NICHD-2026-UNIFIED-VELOCITY-CODE
```

The unified velocity package is distinct from NICHD size.

## 10.4 NICHD legacy size

```text
SRC-NICHD-FETAL-GROWTH-CALCULATOR
```

It remains separate from unified size.

---

# 11. EFW formula versus fetal-size reference

A biometric EFW formula calculates a weight estimate.

A fetal-size reference locates an estimate within a population/reference distribution.

They are different method classes.

Generic terminology such as `Hadlock` must not hide whether the implementation means:

```text
EFW formula
or
fetal-weight reference
```

---

# 12. Fetal-size reference versus velocity reference

A fetal-size reference answers:

> Where does this estimated size sit at a gestational age?

A longitudinal velocity model answers:

> Where does the change between two examinations sit within a longitudinal model?

Therefore:

```text
P10/P50/P90 size curves
```

must not be transformed into:

```text
P10/P50/P90 velocity curves
```

through subtraction, differentiation or hand-built ranges.

---

# 13. WHO governance

WHO 2017 and its corrections remain registered.

Version 3 adds:

```text
CAND-WHO-CONTINUOUS-EFW-COEFFICIENT-PACKAGE
```

because the fifth Future-regulated specification states that the primary study/table were reviewed but the original coefficient CSV/readme was not attached and the embedded v5 coefficients were not independently certified against that exact package.

Until that package is acquired and reviewed, native table bands/bounds must not be upgraded into fabricated continuous precision.

WHO size medians may support a descriptive median-size-curve interval comparison. They do not create a WHO velocity distribution.

---

# 14. INTERGROWTH governance

The 2020 EFW supplementary package is a fetal-size reference.

The 2025 policy governs gestational-age use/domain.

The portal identifies the resource family.

These roles must not be collapsed.

The registry also preserves the existing 2017 EFW candidate because it appears in other framework/reference-policy context and is not silently replaced by the 2020 package.

---

# 15. NICHD unified EFW code governance

The fifth Future-regulated specification identifies the official code PDF and describes it as dated **23 January 2026**.

The record preserves:

```text
HC / AC / FL formula provenance
units
formula identity
size-reference package identity
benchmark requirement
```

The code source does not become clinically active merely because arithmetic fixtures pass.

---

# 16. NICHD unified velocity governance

The reviewed specification describes a model based on longitudinal log-change and model-specific variance/covariance structure.

Accordingly:

```text
NICHD unified interval-growth centile
```

is a method-specific longitudinal result.

It must remain separate from:

```text
raw g/week
median-size-curve interval rate
NICHD size centile
```

---

# 17. NICHD legacy methods

Legacy size and legacy velocity remain separate from unified methods.

If a legacy method needs stratified covariates, an unknown value remains unknown.

Do not infer or default a group.

---

# 18. GROW governance

`SRC-GROW-2-OFFICIAL` remains metadata-only and separately authorized.

It may become an optional comparison in Longitudinal EFW only after its exact authorized method/version and licensing are established.

An unavailable GROW result must never be replaced by WHO, NICHD or INTERGROWTH and relabelled GROW.

---

# 19. POWR governance

Existing POWR records remain:

```text
SRC-PERINATAL-POWR-OFFICIAL
SRC-PERINATAL-POWR-DOCS-INDEX
```

The exact Technical Specification and Evidence documents remain unresolved candidates.

The documentation index is not an executable specification.

---

# 20. ISUOG serial-growth context

The ISUOG biometry/growth guideline is mapped to the new module as measurement/interval context.

It does not by itself provide a longitudinal velocity-centile distribution.

---

# 21. Correction chains

Corrections remain first-class and content-aware.

## WHO

```text
WHO fetal growth 2017
    ↓
2017 correction
    ↓
2021 correction
```

## RCOG

```text
RCOG GTG31 2024
    ↓
2026 correction
    ↔
21 July 2026 update/context
```

A correction is applied only to the content it actually changes.

---

# 22. Method-package lifecycle

```text
identify source
→ register metadata
→ acquire exact package
→ checksum / integrity record
→ transcribe / port
→ source fixtures
→ independent numerical benchmark
→ clinical / method review
→ explicit adoption
→ utility/reference release
```

This lifecycle is intentionally stricter than ordinary source registration.

---

# 23. Package integrity record

A releasable numerical method should identify:

```text
method ID
source URL / DOI
package version
dataset / coefficient checksum
formula ID
reference population
transformation / model scale
supported variables
units
GA domain
interpolation policy
tail policy
numerical test version
clinical adoption state
```

Missing package information remains explicit.

---

# 24. Precision and tails

Preserve the method's actual precision:

```text
exact
interpolated
band
lower tail
upper tail
native transformed Z
normal-equivalent Z
unavailable
```

A band remains a band.

A tail remains bounded.

The source layer must not imply precision the method cannot support.

---

# 25. Domain and unavailable behavior

An observation outside a reference domain remains visible.

The reference/model result becomes unavailable.

Do not clamp GA, extrapolate silently or substitute another method merely to return a number.

---

# 26. Doppler-reference separation

Candidate Doppler reference sources such as UA, MCA/CPR, UtA or DV references are measurement-reference packages.

They must not be reused as:

```text
EFW references
AC references
longitudinal velocity models
```

unless a separately registered source explicitly supports that role.

---

# 27. Source disagreement

When sources or methods differ, preserve:

```text
identity
version
purpose
population
GA domain
formula/model
correction state
limitations
```

The registry does not average centiles or choose the most reassuring method.

---

# 28. Source candidates retained in Version 3

Important unresolved dependencies include:

```text
ACOG PB175
ACOG PB227
exact DV reference
Hadlock reference package
INTERGROWTH 2017 EFW package
FMF fetal-weight reference
POWR Technical Specification
POWR Evidence document
TRUFFLE-2 final results
WHO continuous EFW coefficient/readme package
```

A candidate is intentionally non-authoritative.

---

# 29. AI restrictions

AI may help discover, normalize and organize source metadata.

AI must not:

```text
invent coefficients
fill missing source text from model memory
invent publication dates
infer an unregistered formula version
promote a candidate
approve a source
approve a numerical method
silently substitute a reference
turn size quantiles into a velocity distribution
```

---

# 30. Update monitoring

Monitor:

```text
new editions
corrections
errata
reaffirmations
official methodology changes
calculator/code updates
coefficient/package updates
GA-domain policies
licensing/access changes
research-to-final-publication transitions
```

Updates create review tasks. They do not silently rewrite historical signed snapshots.

---

# 31. JSON validation rules

CI should verify:

```text
JSON parses
source IDs unique
candidate IDs unique
SRC-* relationship targets resolve
module dependency SRC/CAND references resolve
controlled states valid
method-package states valid
all current sources remain candidate
all current sources remain metadata_only
no content package is release_ready
longitudinal_efw_growth map exists
growth_velocity_analysis map exists
legacy NICHD velocity ID remains present
WHO continuous coefficient package remains candidate
```

---

# 32. Acceptance criteria

```text
[ ] Master v3 recorded as parent
[ ] all five Future-regulated files listed
[ ] every Version 2 source ID preserved
[ ] Longitudinal EFW dependency map present
[ ] Growth Velocity dependency map present
[ ] INTERGROWTH portal / 2020 EFW package / 2025 policy separated
[ ] NICHD unified size / unified velocity separated
[ ] NICHD legacy size / legacy velocity separated
[ ] unified code packages separately registered
[ ] WHO continuous coefficient gap explicit
[ ] GROW authorization boundary retained
[ ] POWR technical/evidence candidates retained
[ ] Doppler references blocked from acting as EFW references
[ ] size-reference sources blocked from silently acting as velocity references
[ ] method-package gate present
[ ] every registered source remains candidate + metadata-only
[ ] production-enabled source count remains zero
```

---

# 32A. Production-promotion acceptance criteria

```text
[ ] every source has a promotion object
[ ] every source has a lookup promotion status
[ ] every potential numerical source has a numerical promotion status
[ ] lookup and numerical status are independently represented
[ ] lookup_release_ready is distinct from lookup_enabled
[ ] utility_release_ready is distinct from utility_enabled
[ ] every release gate has a controlled status
[ ] release approval requires evidence records
[ ] restrictions are machine-readable
[ ] correction/update events can restrict or suspend affected sources
[ ] historical signed outputs remain reconstructable
[ ] no source was silently production-enabled during the v3.1 migration
[ ] launch-core lookup queue is populated
[ ] methodology lookup can be promoted without numerical activation
[ ] numerical methods require independent benchmark evidence
```

---

# 33. Non-negotiable registry rules

1. **Registered does not mean approved.**
2. **Candidate / metadata-only is a valid and useful state.**
3. **Source approval and content-package approval are separate gates.**
4. **Executable numerical methods require a third method-package gate.**
5. **A guideline is not software validation.**
6. **A public calculator is not automatically a validated ODRISC implementation.**
7. **Source-code availability still requires independent port and benchmark review.**
8. **An EFW formula is not a fetal-size reference.**
9. **A fetal-size reference is not a longitudinal velocity distribution.**
10. **A velocity model is not a universal g/week centile system.**
11. **WHO, GROW, INTERGROWTH and NICHD remain distinct.**
12. **NICHD unified and legacy methods remain distinct.**
13. **NICHD size and velocity packages remain distinct.**
14. **Doppler measurement references remain distinct from EFW references.**
15. **Unavailable methods are never silently substituted.**
16. **Corrections apply only to content they actually change.**
17. **URL path dates are not publication dates unless established by the source basis.**
18. **Missing coefficients/packages remain explicit gaps.**
19. **Historical versions remain reconstructable.**
20. **No source record silently authorizes diagnosis, staging, surveillance, treatment or delivery logic.**

21. **Lookup release and numerical-method release are independent tracks.**

22. **`lookup_release_ready` is not the same as `lookup_enabled`.**

23. **`utility_release_ready` is not the same as `utility_enabled`.**

24. **A source may be production-enabled for lookup while its numerical method remains disabled.**

25. **No release occurs without recorded gate evidence and release approval.**

26. **Restrictions must be machine-readable and enforced by retrieval/calculation services.**

27. **Corrections and method updates may suspend only affected content/methods while preserving history.**

28. **Research-watch sources are not authoritative clinical guidance unless separately adopted.**

---

# 34. Change record

## Version 3.1 — 18 September 2026

Revised Registry v3 into an explicit production-promotion architecture.

Version 3.1:

- preserves every Version 3.0 source and candidate ID;
- adds independent lookup and numerical release tracks;
- adds release-ready states distinct from runtime-enabled states;
- adds source-level gates, blockers, restrictions, approvals and promotion history;
- adds controlled reviewer roles and append-only promotion events;
- adds restricted, suspended and retired states;
- adds correction/update rollback behavior;
- adds prioritized production-promotion queues;
- keeps research-watch sources isolated from authoritative clinical guidance by default;
- keeps all current sources non-production until evidence is actually recorded;
- permits source-by-source lookup release without requiring numerical activation;
- permits methodology lookup while patient-specific calculation remains disabled.

## Version 3.0 — 18 September 2026

Recreated against Master v3 and all five Future-regulated specifications.

This version:

- preserves all Version 2 source IDs and candidates;
- adds the Longitudinal Growth & Velocity module family;
- adds separate Longitudinal EFW and Growth Velocity dependency maps;
- adds numerical method-package governance;
- adds INTERGROWTH official resources, 2020 EFW equations and 2025 GA policy;
- adds NICHD unified size portal/code;
- adds NICHD unified velocity portal/code;
- adds NICHD legacy size;
- retains and clarifies the old NICHD velocity ID as legacy;
- adds WHO continuous coefficients as an unresolved candidate;
- extends WHO, GROW, ISUOG and POWR mappings to the new module;
- enforces size-reference versus velocity-reference separation;
- keeps **zero** sources production-enabled.

---

# Appendix A — Registered source inventory

| Source ID | Framework/body | Role(s) | Module(s) | Seed state |
|---|---|---|---|---|
| `SRC-ACOG-2013-DEFINITION-TERM` | ACOG | terminology_reference | golden_ga_anchor | Candidate / metadata-only |
| `SRC-ACOG-2017-CO700-DATING` | ACOG | dating_guidance | golden_ga_anchor | Candidate / metadata-only |
| `SRC-BARCELONA-2014-STAGE-FGR` | Barcelona | clinical_framework, staging_methodology | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-BARCELONA-UNDATED-FGR-PROTOCOL` | Barcelona | clinical_framework, local_protocol | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-CIOBANU-2019-DOPPLER-REFERENCES` | Doppler reference | measurement_reference | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-DELPHI-2016-FGR-DEFINITION` | Delphi | consensus_definition | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-DRUKKER-2020-INTERGROWTH-UA` | INTERGROWTH-21st Doppler reference | measurement_reference | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-GOMEZ-2008-UTA-PI` | Doppler reference | measurement_reference | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-GROW-2-OFFICIAL` | GROW | reference_methodology, official_methodology_portal, size_reference, method_package | fetal_growth_reference, maternal_fetal_matrix, growth_velocity_methods, longitudinal_growth_velocity, longitudinal_efw_growth | Candidate / metadata-only |
| `SRC-HEALTHCANADA-GWG-GUIDANCE` | Health Canada | maternal_weight_guidance | maternal_fetal_matrix | Candidate / metadata-only |
| `SRC-INTERGROWTH-2020-EFW-SUPPLEMENT` | INTERGROWTH-21st | size_reference, method_package, statistical_model | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-INTERGROWTH-2025-GA-LIMITS-POLICY-V2` | INTERGROWTH-21st | ga_domain_policy, reference_policy_context | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth | Candidate / metadata-only |
| `SRC-INTERGROWTH-OFFICIAL-FETAL-GROWTH-RESOURCES` | INTERGROWTH-21st | official_methodology_portal, reference_methodology, size_reference, method_package | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth | Candidate / metadata-only |
| `SRC-IOM-NRC-2009-GWG` | IOM/NRC | maternal_weight_guidance, reference_standard | maternal_fetal_matrix | Candidate / metadata-only |
| `SRC-ISUOG-2019-BIOMETRY-GROWTH` | ISUOG | clinical_guidance, measurement_methodology | golden_ga_anchor, fetal_growth_reference, maternal_fetal_matrix, growth_velocity_methods, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-ISUOG-2020-SGA-FGR` | ISUOG | clinical_guidance, diagnostic_definition_source | doppler_guideline_lookup, fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-ISUOG-2021-DOPPLER` | ISUOG | technical_acquisition, measurement_methodology | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-ISUOG-2025-TWIN-ULTRASOUND` | ISUOG | clinical_guidance | golden_ga_anchor, doppler_guideline_lookup, fetal_growth_reference | Candidate / metadata-only |
| `SRC-NICE-2025-NG247` | NICE | maternal_weight_guidance | maternal_fetal_matrix | Candidate / metadata-only |
| `SRC-NICHD-2026-UNIFIED-EFW-CODE` | NICHD unified size | efw_formula_source, software_reference_implementation, size_reference, method_package | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth | Candidate / metadata-only |
| `SRC-NICHD-2026-UNIFIED-VELOCITY-CODE` | NICHD unified velocity | velocity_reference, software_reference_implementation, statistical_model, method_package | longitudinal_growth_velocity, growth_velocity_analysis, growth_velocity_methods, maternal_fetal_matrix | Candidate / metadata-only |
| `SRC-NICHD-FETAL-GROWTH-CALCULATOR` | NICHD legacy size | official_methodology_portal, size_reference, method_package | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth | Candidate / metadata-only |
| `SRC-NICHD-FETAL-VELOCITY-CALCULATOR` | NICHD legacy velocity | growth_velocity_method, official_methodology_portal, velocity_reference, method_package | growth_velocity_methods, maternal_fetal_matrix, fetal_growth_reference, longitudinal_growth_velocity, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-NICHD-UNIFIED-FETAL-GROWTH-CALCULATOR` | NICHD unified size | official_methodology_portal, size_reference, method_package | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth | Candidate / metadata-only |
| `SRC-NICHD-UNIFIED-FETAL-VELOCITY-CALCULATOR` | NICHD unified velocity | official_methodology_portal, velocity_reference, statistical_model, method_package | longitudinal_growth_velocity, growth_velocity_analysis, growth_velocity_methods, maternal_fetal_matrix | Candidate / metadata-only |
| `SRC-PERINATAL-POWR-DOCS-INDEX` | POWR | technical_documentation | growth_velocity_methods, fetal_growth_reference, longitudinal_growth_velocity, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-PERINATAL-POWR-OFFICIAL` | POWR | growth_velocity_method, official_methodology_portal, velocity_reference, method_package | growth_velocity_methods, fetal_growth_reference, maternal_fetal_matrix, longitudinal_growth_velocity, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-RCOG-2024-GTG31` | RCOG | clinical_guidance | doppler_guideline_lookup, fetal_growth_reference | Candidate / metadata-only |
| `SRC-RCOG-2026-GTG31-CORRECTION` | RCOG | correction | doppler_guideline_lookup, fetal_growth_reference | Candidate / metadata-only |
| `SRC-RCOG-2026-GTG31-UPDATE` | RCOG | official_update, reference_policy_context | fetal_growth_reference, doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-SMFM-2020-CONSULT-52` | SMFM | clinical_guidance, diagnostic_definition_source | doppler_guideline_lookup, fetal_growth_reference, maternal_fetal_matrix, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-TRUFFLE-2015-RCT` | TRUFFLE | trial_evidence | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-TRUFFLE-CLINICAL-INTERPRETATION` | TRUFFLE | trial_evidence | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-TRUFFLE2-2026-CORRESPONDENCE` | TRUFFLE-2 | research_watch | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-TRUFFLE2-STUDY-UPDATES` | TRUFFLE-2 | research_watch | doppler_guideline_lookup | Candidate / metadata-only |
| `SRC-WHO-2017-FETAL-GROWTH` | WHO Fetal Growth | reference_chart, reference_methodology, size_reference, method_package | fetal_growth_reference, maternal_fetal_matrix, growth_velocity_methods, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-WHO-2017-FETAL-GROWTH-CORRECTION` | WHO Fetal Growth | correction | fetal_growth_reference, maternal_fetal_matrix, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis | Candidate / metadata-only |
| `SRC-WHO-2021-FETAL-GROWTH-CORRECTION` | WHO Fetal Growth | correction | fetal_growth_reference, maternal_fetal_matrix, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis | Candidate / metadata-only |

---

# Appendix B — Unresolved source-candidate inventory

| Candidate ID | Label | Status | Module(s) |
|---|---|---|---|
| `CAND-ACOG-PB175-ULTRASOUND-IN-PREGNANCY` | ACOG Practice Bulletin 175 — historical ultrasound/dating source referenced in Golden GA review | `needs_primary_source_verification` | golden_ga_anchor |
| `CAND-ACOG-PB227-FGR` | ACOG Practice Bulletin 227 — Fetal Growth Restriction | `needs_full_text_review` | doppler_guideline_lookup |
| `CAND-DV-KISERUD-2000` | Kiserud 2000 ductus venosus reference lead | `identity_and_method_incomplete` | doppler_guideline_lookup |
| `CAND-FMF-FETAL-WEIGHT-REFERENCE` | FMF fetal-weight reference | `exact_source_package_required` | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth |
| `CAND-HADLOCK-REFERENCE-PACKAGE` | Hadlock EFW/reference package | `exact_source_package_required` | fetal_growth_reference, doppler_guideline_lookup, longitudinal_growth_velocity, longitudinal_efw_growth |
| `CAND-INTERGROWTH-2017-EFW` | INTERGROWTH-21st 2017 EFW chart/source package | `exact_source_package_required` | fetal_growth_reference, doppler_guideline_lookup, longitudinal_growth_velocity, longitudinal_efw_growth |
| `CAND-POWR-EVIDENCE-DOCUMENT-2026` | POWR Information/Evidence document listed as updated 16 March 2026 | `document_acquisition_required` | growth_velocity_methods, fetal_growth_reference, longitudinal_growth_velocity, growth_velocity_analysis |
| `CAND-POWR-TECHNICAL-SPECIFICATION-2026` | POWR Technical Specification document listed as updated 16 March 2026 | `document_acquisition_required` | growth_velocity_methods, fetal_growth_reference, longitudinal_growth_velocity, growth_velocity_analysis |
| `CAND-TRUFFLE2-FINAL-RESULTS` | TRUFFLE-2 final randomized results publication | `awaiting_verified_final_publication` | doppler_guideline_lookup |
| `CAND-WHO-CONTINUOUS-EFW-COEFFICIENT-PACKAGE` | WHO continuous EFW coefficient CSV/readme package referenced by the longitudinal review | `coefficient_package_required` | fetal_growth_reference, longitudinal_growth_velocity, longitudinal_efw_growth, growth_velocity_analysis |

---

# Appendix C — Longitudinal source map

## C.1 Fetal-size and EFW-formula sources

```text
WHO
    SRC-WHO-2017-FETAL-GROWTH
    SRC-WHO-2017-FETAL-GROWTH-CORRECTION
    SRC-WHO-2021-FETAL-GROWTH-CORRECTION
    CAND-WHO-CONTINUOUS-EFW-COEFFICIENT-PACKAGE

INTERGROWTH-21st
    SRC-INTERGROWTH-OFFICIAL-FETAL-GROWTH-RESOURCES
    SRC-INTERGROWTH-2020-EFW-SUPPLEMENT
    SRC-INTERGROWTH-2025-GA-LIMITS-POLICY-V2

NICHD unified size
    SRC-NICHD-UNIFIED-FETAL-GROWTH-CALCULATOR
    SRC-NICHD-2026-UNIFIED-EFW-CODE

NICHD legacy size
    SRC-NICHD-FETAL-GROWTH-CALCULATOR

GROW
    SRC-GROW-2-OFFICIAL
```

## C.2 Published velocity-model sources

```text
NICHD unified velocity
    SRC-NICHD-UNIFIED-FETAL-VELOCITY-CALCULATOR
    SRC-NICHD-2026-UNIFIED-VELOCITY-CODE

NICHD legacy velocity
    SRC-NICHD-FETAL-VELOCITY-CALCULATOR

Perinatal Institute / POWR
    SRC-PERINATAL-POWR-OFFICIAL
    SRC-PERINATAL-POWR-DOCS-INDEX
    CAND-POWR-TECHNICAL-SPECIFICATION-2026
    CAND-POWR-EVIDENCE-DOCUMENT-2026
```

---

# Appendix D — Production-promotion migration summary

```text
Registered sources: 38
Unresolved candidates: 10
Lookup enabled at migration: 0
Numerical utilities enabled at migration: 0
Wave 1 launch-core lookup queue: 14
Wave 4 numerical-method queue: 11
```

Lookup status distribution:

```json
{
  "clinical_review_pending": 36,
  "metadata_only": 2
}
```

Numerical status distribution:

```json
{
  "implementation_pending": 9,
  "not_applicable": 27,
  "package_required": 2
}
```

This migration intentionally creates the promotion mechanism without fabricating approval evidence. Actual promotion occurs source by source as review artifacts are completed.

---

# Appendix E — Codex implementation instruction

> Use `clinical-sources.json` as the canonical source-identity, production-promotion and method-package registry under Master v3. Preserve all stable Version 2 IDs. Do not infer release from source presence. Use `promotion.lookup.status` and `promotion.numerical.status` as the release-workflow authority; transition them only when corresponding gate evidence and approval records exist. For Longitudinal EFW, distinguish EFW formula packages from fetal-size reference packages. For Growth Velocity, distinguish descriptive acquisition-date g/week and median-size-curve comparisons from separately published longitudinal velocity models. Never derive velocity centiles by subtracting or differentiating fetal-size centile curves. Never substitute WHO, INTERGROWTH, NICHD, GROW or POWR when a selected method is unavailable. Require exact package identity, version, domain, variables, units, transformation, interpolation/tail policy, integrity record, numerical tests and clinical adoption before enabling patient-specific numerical output.
