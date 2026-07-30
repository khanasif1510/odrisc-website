# ADR-012 — ODRISC Public Website Architecture

## Status

Approved

## Date

2026-07-24

## Context

The ODRISC Technology Stack defines the approved technologies for the public website.

Implementation requires a canonical architecture that determines how routes, content, components, integrations, security boundaries, runtime configuration, forms, analytics, deployment, and rollback fit together.

Without this architecture, human and AI contributors may create excessive Client Components, place vendor logic in pages, duplicate Product Status, access external systems inconsistently, expose runtime values, or deploy through incompatible infrastructure patterns.

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
- Application services and replaceable integration adapters
- Server Actions for same-origin public-form mutations
- Route Handlers for health, runtime configuration, webhooks, and machine endpoints
- No website-owned database
- No website-owned authentication
- No direct SQL Server access
- Consent-aware analytics abstraction
- Runtime allowlisting of environment-varying public configuration
- Structured logging and request IDs
- Deployment-based content invalidation in V1
- Docker Compose-managed application containers
- Host-managed Nginx
- Blue-green deployment slots
- Immutable-image promotion and rollback

## Consequences

- Routes and page components must remain thin.
- Vendor SDKs remain behind adapters.
- Client Components require justification.
- Product Status has one code representation.
- Public forms cannot collect clinical information.
- The public website remains separated from ODRISC clinical systems.
- The same image can be promoted between environments.
- Architecture validation must run in CI.
- Material architecture changes require a new ADR.

## Alternatives Considered

### Client-Rendered Single-Page Application

Rejected because it would increase JavaScript, weaken static content delivery, and blur server boundaries.

### Separate Patient and Provider Applications

Rejected because both journeys belong to one public brand and website.

### Direct API Calls From Components

Rejected because it would couple presentation code to external systems.

### Website-Owned Database

Deferred because V1 does not require persistent website state.

### Microservices

Rejected because they would add operational complexity without a justified independent scaling need.

### Runtime Parsing of Documentation

Rejected because requirements documentation and published website content have different governance and runtime concerns.

### Request-Time CMS Rendering

Deferred because V1 content remains repository controlled.

### In-Place Container Replacement

Rejected as the preferred release model because blue-green slots provide safer rollback and lower downtime.

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