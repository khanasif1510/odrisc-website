# ADR-018 — Provider review demonstration and account handoff

Date: 2026-09-14
Status: Implemented for review; publication pending

## Context

The founder authorized a provider website build based on the clinician story,
Canva exports and the Fetal Growth view of the supplied HTML prototype.
Doppler and staging context belong in the fetal-growth page. Other prototype
views are excluded. Application authentication details will be supplied later.

## Decision

Use the existing provider routes and shared header, brand assets and Motion
provider. Isolate provider presentation in a CSS module. Keep the homepage
composition separate from its route and the interactive demonstration in the
feature layer. The finite, fictional case is controlled content with UTC dates.
Its only calculations are elapsed days, interval EFW change and the MCA/UA ratio.
Do not import the prototype clinical engine or derive named reference curves,
normal classifications or staging results from unverified assumptions.

Keep publication noindex and English-only until approved translation and release
facts are available. Noindex is an indexing instruction, not access control;
this branch is for local review and is not deployed by this task.

The existing request-demonstration route explains account availability during
review. Add no parallel authentication, credential collection or direct database
connection. The later integration must use the existing application's approved
clinician entry point or API contract. No analytics transmission is introduced.

## Consequences

The website can be reviewed and tested now. Clinical validation, availability,
production authentication and translated publication remain explicit launch
dependencies. Details and acceptance criteria are recorded in
`docs/project/PROVIDER_REVIEW_BUILD.md`. Canonical routes are preserved.
