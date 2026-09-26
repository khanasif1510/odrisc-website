# ADR-020 — Two-case clinician homepage and Platform migration

Date: 23 September 2026
Status: Accepted for the founder-authorized review build

## Decision

Replace the clinician homepage with the supplied two-case educational lookup demonstration. Move its previous content to the canonical Platform route, preserving the existing Platform sections and anchors. Use local client state for dedicated module views without adding public routes or changing the global audience navigation.

Retain the supplied v3.1 clinical registry unchanged as a reference artifact and project only source metadata into the browser. Map fixture explanations to canonical source IDs, label them non-authoritative and expose actual registry review/promotion states. Numerical utilities run only against synthetic fixtures; no production clinical service or live OCR is implied.

## Consequences

Historical snapshots are date-filtered, and user-confirmed local Doppler corrections are revisioned independently of immutable fixtures and clinician assessments. No patient data, credentials or external clinical APIs are involved. All publication/clinical release gates remain in force. The existing route retains noindex and the English-only review boundary.

Details: [Clinical lookup homepage](../../docs/project/CLINICAL_LOOKUP_HOMEPAGE.md).
