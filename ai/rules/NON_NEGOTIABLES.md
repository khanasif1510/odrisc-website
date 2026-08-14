# ODRISC Website — Non-Negotiable Rules

## Product Positioning

- ODRISC must be presented as a maternal and fetal intelligence platform.
- The website must communicate longitudinal understanding rather than isolated data display.
- The primary website narrative must support earlier recognition, better monitoring, and improved maternal and fetal outcomes.
- The website must not position ODRISC as replacing clinicians.
- ODRISC must be presented as clinical decision support and monitoring intelligence, not autonomous diagnosis.

## Product Identity

- ODRISC is a maternal and fetal intelligence platform.
- ODRISC must not be reduced to a pregnancy-content, diet, weight-tracking, or fetal-growth application.
- Patient and Provider experiences are connected parts of one product ecosystem.
- Longitudinal intelligence is the central product foundation.
- Artificial intelligence is an enabling capability, not the primary product identity.

## Clinical Boundaries

- ODRISC supports but does not replace healthcare professionals.
- Risk assessment must not be presented as diagnosis.
- Product outputs must remain explainable and reviewable.
- Future or unvalidated capabilities must not be presented as available.
- Patient safety takes priority over engagement or conversion.

## Product Development

- New capabilities must strengthen maternal or fetal understanding, monitoring, or collaboration.
- Do not introduce unrelated health categories without explicit approval.
- Do not build disconnected tools that create new data silos.
- Clinical, product, and availability status must be documented before public release.

## Audience Priority

- Patients and healthcare providers are both primary audiences of the website.
- Each must receive a complete audience-specific journey.
- Healthcare institutions are served primarily through the Provider journey.
- Investors, media, partners, and other corporate visitors are shared secondary audiences and must not be added to the primary entry gateway.

## Clinical Integrity

- Do not fabricate evidence, study results, validation outcomes, regulatory status, partnerships, hospital adoption, or clinical performance.
- Do not introduce diagnostic or treatment claims without explicit approval and evidence.
- Do not imply that the platform guarantees outcomes.
- Do not alter approved clinical terminology merely to make copy sound more promotional.
- Claims requiring references must be traceable to an approved source.

## Brand Direction

- Use a premium, minimalist, clinically credible visual direction.
- Maintain generous white space.
- Use the established linear gradient based on `#ff7680` and `#80ffcc`.
- Use `#4d4d4d` as the principal text color unless the design system defines an approved exception.
- Avoid visual clutter, excessive decoration, generic healthcare imagery, and exaggerated futuristic effects.
- Do not use fear-based maternal health imagery or messaging.

## Content

- Prefer clarity over slogans.
- Avoid unsupported superlatives such as “revolutionary,” “best,” “guaranteed,” or “world-leading.”
- Do not use vague AI language without explaining the clinical value.
- Keep headlines concise and meaningful.
- Ensure each page has a clear narrative purpose and CTA.

## Engineering

- Use reusable components.
- Avoid unnecessary dependencies.
- Maintain responsive behavior.
- Meet accessibility expectations.
- Keep animation purposeful and restrained.
- Do not sacrifice performance for decorative effects.
- Do not place secrets, credentials, or private data in the repository.

## Change Control

- Approved or locked decisions must not be changed without explicit authorization.
- Material deviations must be documented.
- Conflicting instructions must be resolved using `docs/project/SOURCE_OF_TRUTH.md`.

## Website Objectives

- The website must serve Patients and healthcare providers through two audience-specific journeys within one ODRISC website.
- The audience gateway must contain Patient and Healthcare Provider as the two primary choices.
- Investors, media, careers, employers, insurers, and partners must not be added as primary gateway choices.
- Visitors must be able to switch between Patient and Provider journeys.
- Every significant page must define one primary audience, one primary objective, and one primary call to action.
- The public website must communicate ODRISC as a maternal and fetal intelligence platform.
- Longitudinal maternal and fetal understanding must remain the central website story.
- Patient and Provider messaging must remain appropriately differentiated.

## Website Product Communication

- The website must explain the platform before presenting individual features.
- Product capabilities must be grouped as connected parts of one ecosystem.
- Product availability must always align with `docs/product/PRODUCT_STATUS.md`.
- Available, limited, pilot, in-validation, in-development, planned, and roadmap capabilities must not be presented as equivalent.
- Roadmap capabilities must not be written in present-tense operational language.
- Artificial intelligence must be described only through approved and specific uses.
- The website must not position ODRISC as an autonomous AI diagnosis or treatment platform

## Website Clinical Boundaries

- ODRISC supports but does not replace healthcare professionals.
- Risk assessment must not be presented as diagnosis.
- The website must not claim guaranteed prevention, detection, treatment, or improved outcomes.
- A lack of an alert must not be presented as confirmation that no clinical concern exists.
- Patient content must not transfer clinical responsibility to the Patient.
- Urgent or emergency concerns must direct visitors to qualified healthcare professionals or emergency services.
- Clinical disclaimers must be visible, relevant, understandable, and approved.

## Website Experience Rules

- Patient content must remain supportive, understandable, non-judgmental, and free from weight stigma.
- Provider content must remain clinically credible, precise, transparent, and workflow-oriented.
- Fear, false urgency, artificial scarcity, and deceptive interface patterns are prohibited.
- Accessibility must be considered from the beginning of design and implementation.
- Website content must remain usable without animation.
- Privacy and data minimization must be included in every form, analytics event, and integration.
- Public marketing forms must not collect unnecessary clinical or pregnancy data.

## Website Governance

- Website implementation must follow approved documentation.
- Temporary prompts, mockups, and prototypes do not override canonical documentation.
- Every public capability claim must be checked against product status.
- Every clinical claim must use an approved source and review process.
- Every page must have an identified owner and reviewer.
- Material changes to product identity, audience structure, clinical claims, conversion, market availability, or product status require documented approval.

## Website Story

- “Every Pregnancy Has a Story” is the foundational human narrative.
- Pregnancy information fragmentation is the central problem communicated by the website.
- Longitudinal maternal and fetal intelligence is the central ODRISC response.
- Patient and Provider journeys must tell two perspectives of one connected story.
- The Patient journey must move from uncertainty toward understanding and informed participation.
- The Provider journey must move from fragmentation toward longitudinal visibility and adoption confidence.
- ODRISC must be positioned as supporting, not replacing, healthcare professionals.
- The website must not be led by generic artificial-intelligence messaging.
- The story must progress from fragmentation to connection, intelligence, monitoring, collaboration, and outcomes.
- Feature lists must not replace narrative structure.
- Capability claims must be checked against `docs/product/PRODUCT_STATUS.md`.
- Evidence, validation, and clinical claims must not be overstated.
- Fear, shame, and alarm must not be used as primary conversion mechanisms.

## Website Requirements

- The website must remain separate from the complete Patient application and Provider platform.
- The website must serve Patients and healthcare providers through two complete journeys within one domain.
- Every major page must support an approved website objective and PRD requirement.
- Public capability claims must match `docs/product/PRODUCT_STATUS.md`.
- The website must not expose roadmap capabilities as available.
- The website must not provide diagnosis, emergency care, or autonomous clinical management.
- Patient and Provider conversion actions must lead to real and approved destinations.
- Accessibility, privacy, security, performance, analytics, and SEO are launch requirements rather than optional polish.
- Mobile implementation must preserve the complete narrative and conversion journey.
- Requirements must not be changed solely to match an existing mockup or implementation shortcut.

## Information Architecture

- The public website must remain on `odrisc.com`.
- The root route must serve as the shared Patient and Provider entry experience.
- Patient content must use the `/patients/` route family.
- Provider content must use the `/providers/` route family.
- Shared company, resource, legal, and utility pages must remain outside audience prefixes.
- Direct deep links must not be blocked by the audience gateway.
- Users must be able to switch between Patient and Provider journeys.
- Institutional visitors must primarily be served through the Provider experience.
- Investors, media, partners, and candidates must not be added as primary gateway options.
- Each major topic must have one canonical page.
- Public pages must not be created for unapproved roadmap capabilities.
- URLs must remain stable and must not mirror temporary visual or code structures.
- Published route changes require redirects.
- The website hierarchy must remain localization-ready and support Arabic right-to-left requirements.
- Existing Canva URLs must be inventoried before migration.

## Page Requirements

- Every public page must have an approved Page ID and canonical route.
- Every page must have one primary audience and one primary purpose.
- Every major page must have one working primary CTA.
- Pages must follow their approved narrative and section hierarchy.
- Patient and Provider content must not be treated as interchangeable.
- Public capability descriptions must match `docs/product/PRODUCT_STATUS.md`.
- Clinical, validation, regulatory, product, and market claims must be traceable.
- No page may request unnecessary sensitive medical information.
- No page may be published without accessibility, SEO, analytics, privacy, and technical review.
- Product mockups and concept screens must be labeled accurately.
- Forms require an approved owner and follow-up process.
- Page implementation must update the Route Registry and Requirements Traceability.

## Brand Foundation

- ODRISC is the master brand.
- Patient and Provider experiences must remain part of one brand.
- ODRISC must be positioned as a maternal and fetal intelligence platform.
- “Every Pregnancy Has a Story” is the foundational human narrative.
- “The Intelligence Layer for Pregnancy Care” is the primary positioning line.
- Longitudinal clarity is the central brand idea.
- The brand must feel calm, precise, human, clinical, modern, and premium.
- White is the dominant background.
- `#4d4d4d` is the primary text color.
- `#ff7680` and `#80ffcc` form the signature gradient.
- Gradient use must remain restrained and accessible.
- Patient communication must remain supportive, respectful, and non-stigmatizing.
- Provider communication must remain precise and respectful of clinical judgment.
- Generic AI imagery and AI-first positioning are prohibited.
- Clinical, validation, regulatory, and Product Status claims must remain transparent.
- Temporary visual placeholders do not become approved brand assets automatically.
- Do not create or replace the logo without explicit approval.
- The brand must support Arabic and right-to-left presentation.

## Design System

- All public website design must use the tokens and rules in `docs/design/DESIGN_SYSTEM.md`.
- Do not introduce undocumented colors, spacing values, radii, shadows, or typography.
- Inter is the approved V1 Latin typeface.
- Noto Sans Arabic is the approved V1 Arabic typeface.
- Lucide is the approved V1 standard interface icon system.
- Primary actions must use accessible contrast.
- Brand coral must not be used automatically as an error or clinical-warning color.
- Clinical risk, Product Status, validation status, and brand emphasis must remain separate visual systems.
- Patient and Provider pages must remain part of one component and token system.
- Components must support responsive behavior, accessibility, long content, and RTL.
- Minimum interactive targets are 44px by 44px.
- Dark mode is not part of the V1 public website.
- Hard-coded visual values must not replace documented tokens.
- New components and variants require documentation.

## Animation and Motion

- Motion must communicate progression, connection, hierarchy, state, or feedback.
- The website must use native scrolling.
- Scroll hijacking is prohibited.
- Essential content and CTAs must not wait for animation.
- Motion must respect reduced-motion preferences.
- Patient motion must remain calm and low density.
- Provider motion may be denser but must remain clinically disciplined.
- Clinical-risk states must not blink, pulse, shake, or simulate medical alarms.
- Clinical numbers must not use count-up animation.
- Animation must not imply real-time monitoring or unavailable capability.
- `transform` and `opacity` are the preferred animated properties.
- Mobile motion must be simpler than desktop motion.
- Motion must support Arabic and RTL.
- Concept animations must be labeled with their Product Status.
- New motion tokens or global behaviors require documentation and approval.

## Technology Stack

- The public website must use the approved technologies in `docs/engineering/TECH_STACK.md`.
- Use Node.js 24 LTS and pnpm 11 consistently for local development and local production builds.
- Use Next.js 16 with the App Router.
- React Server Components are the default.
- Use strict TypeScript.
- Use Tailwind CSS 4 and approved ODRISC design tokens.
- Do not introduce runtime CSS-in-JS.
- Use Radix only as an accessible primitive foundation.
- Use Motion for React as the only approved motion library.
- Use next-intl for localization foundations.
- Use repository-controlled content in V1.
- Do not introduce a CMS, website database, database connection, or website authentication.
- Use repository-controlled static sample data for all public demonstrations and visualizations.
- Use native Fetch for HTTP.
- Do not connect the public website directly to SQL Server.
- Validate external data with Zod.
- Analytics must pass through the approved wrapper and consent layer.
- Public forms must not collect unnecessary medical information.
- Use Vitest, Playwright, and Axe for automated quality checks.
- Build and verify the website locally before manual publication.
- New dependencies require documented justification.

## Engineering Architecture

- The public website is a modular monolith.
- The public website must not connect to clinical, operational, or website databases.
- Runtime content and demonstrations must use repository-controlled static sample data.
- Public pages must be static-first.
- React Server Components are the default.
- Client Component boundaries must remain small and justified.
- Every route must map to an approved Page ID.
- Public URLs must follow the approved Information Architecture.
- Internal documentation must not be parsed as runtime website content.
- Product Status must have one controlled code representation.
- External services may be introduced only for an explicitly approved non-data requirement and must be accessed through adapters.
- Page and UI components must not import vendor SDKs directly.
- Public forms must use approved application services and validation.
- Server Actions must be treated as public server endpoints.
- Route Handlers must not duplicate Server Actions.
- Analytics must pass through the consent-aware internal wrapper.
- The website must not collect sensitive clinical information.
- Environment-varying client configuration must not be compiled indiscriminately into `NEXT_PUBLIC_*` values.
- Publishing is a manual operation performed from a verified local build.
- Material architecture changes require an ADR.

## Component Library

- Every governed reusable component must have a stable Component ID.
- React Server Components are the default.
- Client Component boundaries must remain small and justified.
- Existing approved components must be reused before new components are created.
- Variants must represent semantic, audience, size, density, or Product Status differences.
- Do not introduce arbitrary color, spacing, radius, typography, or motion props.
- Patient and Provider experiences must share the same primitive and UI foundations.
- Product Status must come from the controlled Product Status source.
- Low-level primitives must not emit analytics.
- UI components must not call external services or read environment variables directly.
- Public forms must remain separated from Server Actions, application services, and integration adapters.
- Recharts must remain behind ODRISC chart components.
- Interactive components must meet WCAG 2.2 Level AA.
- All P0 components must support English, Arabic, and RTL.
- Animated components must provide reduced-motion behavior.
- Storybook, component tests, and accessibility tests are required for approved reusable components.
- Generated or copied components do not become approved automatically.

## Coding Standards

- All public-website code must comply with `docs/engineering/CODING_STANDARDS.md`.
- Strict TypeScript must remain enabled.
- Do not use `any` without an approved narrow exception.
- Validate runtime boundaries with Zod.
- React Server Components are the default.
- Client boundaries must remain small and justified.
- Route files must remain thin.
- UI components must not import external-service adapters.
- Do not read `process.env` outside the approved environment module.
- Do not log or measure form contents or clinical data.
- Do not hard-code Product Status, routes, pricing, or analytics events.
- Use semantic HTML and accessible controls.
- Support Arabic, RTL, and reduced motion.
- Use approved design tokens rather than arbitrary values.
- ESLint, Prettier, type checking, and required tests must pass before merge.
- CI must allow zero lint warnings.
- AI-generated code receives full human and automated review.
- Coding-standard exceptions must be documented and approved.

## Testing and Release Evidence

- All public-website changes must comply with `docs/engineering/TESTING_STRATEGY.md`.
- Tests must map to approved requirements or contracts.
- Static validation must run before release.
- New behavior requires appropriate automated or manual evidence.
- Vitest is the approved unit and integration runner.
- Playwright is the approved browser and E2E runner.
- Axe is the approved automated accessibility engine.
- Async Server Components must not be converted to Client Components merely for testing.
- Real Patient and clinical data are prohibited in tests and fixtures.
- Production smoke tests must be non-destructive.
- P0, security, privacy, accessibility, Product Status, and clinical-safety gates are release blocking.
- Arabic and RTL verification are mandatory for released Arabic P0 pages.
- Reduced-motion verification is mandatory for material animations.
- Visual baselines must be reviewed rather than updated automatically.
- Flaky tests must be recorded and resolved.
- P0 tests may not be quarantined.
- Skipped tests require an owner and expiry.
- `test.only` must fail CI.
- Coverage thresholds must not be reduced merely to pass a change.
- Rollback must be verified before production release.
- AI agents must not claim test success without running the relevant command.
