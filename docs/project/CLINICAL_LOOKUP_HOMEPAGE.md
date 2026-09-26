# Clinician homepage: two-case lookup demonstration

## Authorized scope

The founder requested replacing the clinician homepage with the supplied two-case specification and moving all previous homepage content into Platform. The founder subsequently supplied clinical registry v3.1 and its JSON companion. This implements PRO-PG-001 and PRO-PG-002 (PRO-001, PRO-002, PRO-005, PRO-006, PRO-008) as an English-only, non-indexed review build. It does not promote clinical capabilities to general availability.

Primary audience: clinicians reviewing the product. Objective: explore a traceable synthetic pregnancy record. Primary actions: Study Case 1 and Study Case 2. Market/language: existing English provider review scope. Product/content owner: Founder; clinical source and method promotion still require the registry's designated clinical and release reviewers. Accessibility: keyboard-operable controls, labelled inputs, native modal dialogs with focus restoration, text chart descriptions and tables, mobile layouts and no required motion. No analytics events or patient information are sent by the workspace; existing site-level analytics and consent behavior are unchanged.

## Canonical content and navigation

- `/providers/`: Fetal Growth introduction, two case selectors, persistent case/date context, five module families and 24 highlights, source and review controls, synthetic-case disclaimer and Platform link.
- `/providers/clinical-platform/`: entire former clinician homepage, followed by all existing Platform sections. One H1 and one closing CTA. Existing dating, report-review and pregnancy-in-view anchors retained.
- Existing Platform / Clinical Approach header, For Patients button and scroll behavior are preserved.
- Six dedicated module workspaces are stateful views inside the existing homepage route. No new public route is inferred from suggested URLs in the supplied specification.
- Supporting intelligence and methodology routes remain intact. Arabic provider routes continue to return 404 rather than display English as translated content.

## Reference files

The exact supplied specifications and registry are retained in `docs/clinical/reference/`. Registry metadata is projected to `src/content/providers/clinical-source-metadata.json` by:

```sh
node scripts/project-clinical-registry.mjs
```

The projection contains 38 source identities, versions, corrections, limitations, review and promotion states. It excludes the lengthy internal gate records from the browser bundle. The complete original JSON remains the governance source of truth. No registry approvals are changed. All currently mapped sources have lookup review pending. The registry reports zero enabled lookup sources and zero enabled numerical utilities.

Source drawers resolve the demo's source aliases to canonical SRC identities. They show jurisdiction, scope, locator, corrections/relationships, reasons for appearing, clinical review and numerical promotion. Clinical explanations are expressly labelled demonstration fixtures with `fixture_only=true` and `authoritative=false`. This page is not an authoritative production lookup engine.

## Fixture and calculation contract

- Meera and Anaya are fictional singleton pregnancies. No patient/API integration, file upload or live OCR service is implemented.
- Date selection filters all growth, Doppler, maternal, laboratory and clinician assessment records. Future observations are not passed into calculations. Review-date context and scan pair survive module changes; each case retains its selections.
- GA uses the accepted EDD and UTC calendar date differences, never today's wall clock. Source-reported EDD is separately retained and explicitly accepted in the fixtures.
- Hadlock HC/AC/FL converts mm to cm once, returning grams. Source-reported, recalculated and selected rounded fixture EFW values remain separate.
- Interval arithmetic uses actual growth scan dates. Doppler-only visits and postnatal weights never create EFW points.
- WHO positions are table bands only. Available 28-, 31- and 34-week median endpoints permit a median-size-curve interval comparison; no missing table interpolation or velocity centile is invented.
- GROW, INTERGROWTH-21st and NICHD numerical outputs are unavailable. Selecting an unavailable reference exposes the missing package, retaining explicitly labelled WHO fixture information separately.
- CPR uses same-visit MCA PI / UA PI. Missing DV is not assessed, never normal. Source lookup cannot automatically assign a stage or recommend delivery.
- Clinician assessments are dated fixture records. Anaya's 23 June Stage II assessment cannot appear at the 15 or 22 June historical review dates.
- A small verification demonstration loads the selected simulated Doppler report. Date and biometry context remain read-only; UA PI, MCA PI and EDF can be corrected. Pending values do not affect the dashboard. Confirmation creates an in-memory revision with a review history, updates the selected Doppler/CPR and marks recalculated results. Original snapshots remain selectable. Historical clinician interpretations are never silently rewritten after corrections. There is no persistence or transmission of corrections.

## Reused and added components

ProviderShell, SiteHeader, provider footer, Platform content and the original FetalGrowthDemo are reused. CMP-FTR-203 comprises LookupDashboard, accessible review panels, fixture content and a CSS module. Existing fonts, mint/blush palette and icon library are reused. No dependencies or decorative motion are added. The Figma workflow was inspected; no Figma MCP was callable, so implementation used the existing repository components directly.

## Verification

Meaningful unit tests check both 34-week arithmetic fixtures, date calculations, EFW units, historical cutoffs, Doppler-only visits, postnatal separation, missing results, alternate scan pairs, provenance and registry identities. Browser tests exercise both cases, module navigation, historical review, unavailable references, unverified/confirmed data separation, original snapshot restoration, source drawers, accessibility and the Platform migration. See `src/content/providers/lookup-cases.test.ts` and `tests/e2e/shared/clinical-lookup.spec.ts`.

## Publication dependencies

Clinical content/source review, numerical method release, brand/product sign-off and the existing provider authentication integration remain separate dependencies. The source registry's metadata-only records do not authorize production clinical output. No hosting deployment is performed by this change. Existing deployment archives must be rebuilt before publishing these changes.

## Verification result — 23 September 2026

- Production Next.js compilation, TypeScript and static page generation passed.
- All 46 unit/contract tests passed, including 10 added fixture/source tests.
- New case interactions passed on desktop Chrome, mobile Chrome, mobile Safari and reduced-motion profiles. Existing provider routes, header direction behavior, keyboard navigation, image loading, Arabic exclusion and credential-collection checks were exercised. Safari-specific keyboard timing and skip-link landmark findings were fixed; the affected checks passed on rerun.
- Automated Axe checks passed on the homepage, Doppler workspace, report verification dialog and existing provider pages. Responsive overflow checks include 320 px. Desktop and mobile screenshots were inspected.
- Targeted ESLint, formatting, route/content/component/architecture/test-policy validation and diff whitespace checks passed.

These checks verify the website demonstration, not clinical validation or hosting compatibility. No production hosting deployment or deployment archive refresh was performed.
