# ADR-012 — ODRISC Public Website Architecture

## Status

Approved

## Date

2026-07-24

## Context

The ODRISC Technology Stack defines the approved technologies for the public website.

Implementation requires a canonical architecture that determines how routes, content, components, static sample data, security boundaries, runtime configuration, forms, analytics, and local builds fit together.

Without this architecture, human and AI contributors may create excessive Client Components, duplicate Product Status, introduce unapproved live data access, expose runtime values, or create incompatible build assumptions.

## Decision

The ODRISC public website will use:

- A dedicated single-application repository
- A modular-monolith architecture
- Static-first public pages
- Server Components by default
- Small explicit Client Component boundaries
- Stable Page IDs and a typed route registry
- An internal top-level locale segment
- Repository-controlled content under `src/content`
- Typed and validated Product Status
- Repository-controlled static sample-data modules
- Server Actions for same-origin public-form mutations
- Route Handlers for health, runtime configuration, webhooks, and machine endpoints
- No database connections
- No website-owned authentication
- No direct or indirect SQL Server access
- Consent-aware analytics abstraction
- Runtime allowlisting of environment-varying public configuration
- Structured logging and request IDs
- Local production builds followed by manual publication

## Consequences

- Routes and page components must remain thin.
- Live data and database SDKs are not introduced.
- Client Components require justification.
- Product Status has one code representation.
- Public forms cannot collect clinical information.
- The public website remains separated from ODRISC clinical systems.
- Static sample data remains synthetic, reviewable, and version controlled.
- Architecture validation must pass locally before publication.
- Material architecture changes require a new ADR.

## Alternatives Considered

### Client-Rendered Single-Page Application

Rejected because it would increase JavaScript, weaken static content delivery, and blur server boundaries.

### Separate Patient and Provider Applications

Rejected because both journeys belong to one public brand and website.

### Direct API Calls From Components

Rejected because it would couple presentation code to external systems.

### Website-Owned or External Database

Rejected because the approved website experience uses repository-controlled static sample data and requires no persistent website state.

### Microservices

Rejected because they would add operational complexity without a justified independent scaling need.

### Runtime Parsing of Documentation

Rejected because requirements documentation and published website content have different governance and runtime concerns.

### Request-Time CMS Rendering

Deferred because V1 content remains repository controlled.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PRD.md`
- `docs/product/INFORMATION_ARCHITECTURE.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/ARCHITECTURE_QA_CHECKLIST.md`
- `docs/engineering/INTEGRATION_REGISTRY.md`
- `docs/engineering/DATA_CLASSIFICATION.md`
- `docs/engineering/ERROR_CATALOG.md`
- `ai/rules/NON_NEGOTIABLES.md`
