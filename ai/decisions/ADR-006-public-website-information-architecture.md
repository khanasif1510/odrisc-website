# ADR-006 — Public Website Information Architecture

## Status

Approved

## Date

2026-07-24

## Context

ODRISC serves Patients and healthcare providers through one public website and one product identity.

The approved Product Vision, Audience framework, Website Objectives, Website Story, and PRD require a stable structure for audience routing, URLs, navigation, shared pages, resource organization, localization, and future migration.

Without a canonical Information Architecture, contributors may create duplicate pages, mix Patient and Provider intent, expose roadmap capabilities, mirror source-code folders in public URLs, or reproduce limitations of the existing Canva website.

## Decision

The public website will use:

- One canonical domain: `odrisc.com`
- A shared entry experience at `/`
- A Patient route family under `/patients/`
- A Provider route family under `/providers/`
- Shared company, resource, legal, and utility pages outside audience prefixes
- Audience-specific navigation
- An audience switch available throughout the website
- Canonical ownership for each major topic
- Controlled resource taxonomy
- Localization-ready logical routes
- Route and redirect registries
- Separate detailed page requirements

Institutional visitors will primarily be served through the Provider experience.

Direct deep links will not be blocked by the audience gateway.

## Rationale

This architecture:

- Preserves one brand
- Supports two complete audience journeys
- Separates Patient and Provider search intent
- Supports measurable navigation
- Supports Qatar and future GCC localization
- Reduces duplicate content
- Improves route stability
- Supports migration from the current Canva website
- Prevents public website routes from mirroring temporary code structures
- Creates a foundation for page requirements, design, and engineering

## Consequences

- All public routes must be recorded in the Route Registry.
- Public pages must map to PRD requirements.
- Published route changes require redirects.
- New routes require audience, purpose, Product Status, ownership, and CTA review.
- Existing Canva URLs must be inventoried before migration.
- The exact locale URL strategy requires a later decision.
- Page requirements must follow the approved architecture.

## Alternatives Considered

### Single Mixed Homepage and Navigation

Rejected because Patient and Provider needs, language, trust signals, and conversions differ substantially.

### Separate Patient and Provider Domains

Rejected because it would weaken the unified ODRISC product identity and increase operational complexity.

### Application-Led Navigation

Rejected because the public website must explain, build trust, and convert rather than reproduce dashboard navigation.

### Feature-Only Sitemap

Rejected because it would organize the website around internal capabilities instead of visitor needs and narrative progression.

### Preserve the Existing Canva Structure

Rejected because the existing website structure does not provide the required analytics, scalability, audience separation, localization, or governance.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PRODUCT_VISION.md`
- `docs/product/AUDIENCE.md`
- `docs/product/WEBSITE_OBJECTIVES.md`
- `docs/product/WEBSITE_STORY.md`
- `docs/product/PRD.md`
- `docs/product/PRODUCT_STATUS.md`
- `docs/product/INFORMATION_ARCHITECTURE.md`
- `docs/product/ROUTE_REGISTRY.md`
- `ai/rules/NON_NEGOTIABLES.md`
