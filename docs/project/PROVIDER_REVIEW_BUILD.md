# Provider website review build

Date: 2026-09-14
Owner: Founder; clinical review owner to be named before publication
Status: Internal review, not a production release

## Agreed scope

The founder supplied the clinician story document, 34 Canva exports and
`fetal-growth-intelligence-platform-v5.html`. Use only the Fetal Growth view of
that prototype as a demonstration source, with Doppler and staging context
included within the fetal growth page. Other prototype views are excluded.
The wider maternal and fetal narrative remains the website story.

Build the provider homepage and supporting Platform, Pregnancy dating,
Fetal growth, Maternal–fetal view and Clinical approach content. Reuse the
existing canonical clinical-platform, intelligence and methodology routes.
Dating lives within the platform page rather than introducing an unapproved URL.
The maternal–fetal view lives at the maternal-intelligence route as explanatory
content, without an interactive maternal product demonstration.

Clinician signup and login will use the existing application account system.
The founder will provide the repository/API/destinations later. No credentials,
account submissions, direct database connection or invented authentication
endpoint is introduced in this review build. The existing demonstration route
becomes a transparent clinician-access information page pending integration.

## Publication status

The founder confirms fetal growth is demonstrable and Doppler/staging is ready
for inclusion. This authorizes website demonstration and context; it does not
establish general availability, clinical validation or regulatory status.
Existing maturity labels remain unchanged until those release facts are supplied.
Provider pages carry noindex during review. English copy is prepared first;
Arabic publication awaits a reviewed translation. Unsupported locale requests
do not silently present English as approved Arabic content.

## Source review findings

- The prototype's `referenceMedianFactor`, `referenceSpreadFactor` and
  `getReferenceProfile` derive INTERGROWTH/NICHD curves from a WHO baseline.
  These are not sufficient evidence of implementing the named references.
- `expVel` uses piecewise constants; its bands do not establish published
  longitudinal velocity percentiles.
- `deriveDVState` infers ductus venosus flow from other parameters. Missing
  observations must remain missing in the website case.
- `updateStagingSelection` changes DV when UA is changed. The public preview
  must not fabricate a second observed parameter from the first.
- `clinicalStage` returns Stage 0 when Doppler is absent. Missing inputs must
  not be presented as a normal assessment.
- The source `hadlock` function multiplies its exponentiated result by 1000;
  this unit conversion requires verification before reuse. No source clinical
  calculation engine is imported into the public site.
- Source dates, GA, EDD, displayed centiles and audit entries are inconsistent.

These findings apply to the supplied demonstration file, not a claim about
the separate production application. Reference-guideline evidence, software
verification and clinical validation must remain distinguishable.

## Demonstration case

One fictional case, DEMO-001, with EDD 12 July 2026 and visits on 22 February,
23 March and 22 April 2026 (20w0d, 24w1d, 28w3d). Reported example EFW values
are 331, 695 and 1237 g. All dates and interval arithmetic use UTC day counts.
These are illustrative report values, not calculated clinical outputs.
No named reference centiles, velocity bands, clinical staging result or
management schedule is fabricated. The chart plots reported EFW only.
Doppler entries show UA PI, MCA PI, calculated CPR and absent DV observation.
The staging review communicates input completeness, method and clinical review.

## Design and acceptance

Audience: clinicians and maternal/fetal care teams. Objective: understand the
connected review process and evaluate fetal growth. Interim primary CTA:
Explore fetal growth. Final account CTA is dependent on the application handoff.
Market: market-neutral review; geographic availability is not claimed.
Manrope, #4D4D4D, #FFECEE and white link this experience to the patient site.
Use existing header, brand assets and Motion provider; isolate provider styles.
Figma skill was read; no connected Figma tools are available, so review is in code.

Verify consistent visits, source disclosure, keyboard operation, 44px targets,
mobile reflow, non-color chart alternatives, reduced motion, valid navigation,
no clinical uploads, no credentials and no fabricated success states. Analytics
transmission remains off until the approved wrapper/consent integration exists;
no demonstration measurements or user input may become analytics payloads.

Publication dependencies: confirmed method/version mappings and approved case;
clinical review; operational authentication; final availability/market; privacy
policy and account terms; consent-aware analytics; approved Arabic if released.

## Implementation and verification

Implemented six English review routes: provider homepage, clinical platform,
fetal growth, maternal–fetal view, clinical approach and clinician access.
The shared finite demonstration lives in `src/features/providers/`, with its
case in `src/content/providers/` and isolated styles in `src/components/provider/`.
The original HTML prototype and Canva exports were not modified.

- Production Next.js build passed.
- All 36 unit/contract tests passed, including three case-consistency tests.
- All 24 targeted Playwright checks passed across desktop Chrome, Firefox,
  Safari, mobile Chrome/Safari and reduced motion. Coverage includes a 320px
  viewport, source/Doppler/visit synchronization, keyboard navigation, absent
  credential collection and no English fallback at `/ar/providers/`.
- Automated Axe audits passed for all six pages and the expanded case table.
- Provider source lint, TypeScript, formatting and test-policy checks passed.
- Content, route and component registries passed their validation checks.
- Repository-wide architecture validation remains blocked by the pre-existing
  manual locale-prefix handling in `src/proxy.ts`; this task did not change it.

Visual review covered the rendered desktop homepage and mobile demonstration.
The build uses the established photography and brand assets. Secondary text
contrast was strengthened within the provider styles; missing clinical values
remain explicit. No deployment, account integration or clinical validation was
performed by this task.

## Header design update — 15 September 2026

The founder requested the patient header's design for the provider section.
The provider navigation now contains only Platform and Clinical Approach,
centred as a group on desktop. The audience switch uses the same green fill,
rounded shape, white icon and typography as the patient header, labelled
For Patients. The mobile menu presents those same destinations. Other routes
remain accessible through page content; the patient header is unchanged.
Desktop centring was measured at 720px in a 1440px viewport. Four targeted
desktop/mobile navigation and narrow-screen checks, lint and TypeScript passed.
The requested white-on-#5BC2A3 button matches the patient design but measures
2.16:1 text contrast. The header-only Axe audit flags this against the 4.5:1
requirement. The earlier all-page audit result predates this design change;
the contrast check has not been suppressed. A shared accessible button-colour
decision remains needed for both audience designs before publication.

The founder clarified the provider scroll direction: downward scroll hides the
centre labels and clears the surface; upward scroll reveals the centre labels
with the floating white background. At the top, labels are visible with a
transparent surface. The shared `ScrollAwareSiteHeader` keeps actual direction
separate from surface visibility; both audiences now reveal the surface on upward scroll.
Mobile retains its transparent header and explicit menu toggle. Provider labels
display in uppercase, except the audience button, which reads “For Patients” in
title case. Its 48px minimum height, 20px horizontal padding, font sizing, 16px
corner radius and icon dimensions match the patient-section button.
Three targeted desktop, mobile and reduced-motion direction
checks passed, together with source lint and TypeScript.
The patient header's direct scroll check also passed. Its broader portrait-video
regression test timed out waiting for page load, before reaching header assertions.
