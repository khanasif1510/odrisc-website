# ADR-011 — ODRISC Public Website Technology Stack

## Status

Approved

## Date

2026-07-24

## Context

ODRISC has completed the strategic product, website, page, brand, design, and animation foundations for its public website.

Implementation now requires one canonical technology stack. Without it, human contributors and AI coding agents may introduce conflicting frameworks, styling systems, motion libraries, state-management tools, content platforms, deployment approaches, and testing systems.

The public website must remain separate from the existing ODRISC clinical platform while integrating with approved `.NET` APIs and application handoffs.

## Decision

The ODRISC public website will use:

- Node.js 24 LTS
- pnpm 11
- Next.js 16 App Router
- React 19.2
- TypeScript 6 in strict mode
- Static-first and server-first rendering
- Tailwind CSS 4
- CSS custom-property design tokens
- Radix Primitives
- Lucide React
- Motion for React 12
- next-intl 4
- Repository-controlled MDX and typed content
- Zod 4
- Native Fetch
- GA4, GTM, Consent Mode, and Search Console
- Vitest, React Testing Library, Playwright, and Axe
- Storybook
- ESLint flat configuration and Prettier
- Recharts for public explanatory charts
- Pino for structured server logs
- Docker
- Next.js standalone output
- Nginx
- GitHub Actions
- GitHub Container Registry

The public website will not own a database, authentication system, or external CMS in V1.

## Consequences

- All implementation must follow the approved stack.
- Client Components must remain limited.
- New dependencies require documented justification.
- Public content remains repository controlled.
- The website must not connect directly to SQL Server.
- Existing clinical logic remains in approved ODRISC services.
- Analytics and third-party scripts require consent governance.
- Deployment remains portable and self-hostable.
- Engineering Architecture must now define module boundaries, data flow, security boundaries, deployment topology, and repository structure.

## Alternatives Considered

### Continue Using Canva

Rejected because Canva does not provide the required analytics, SEO control, accessibility, routing, localization, source governance, or application integration.

### Static HTML Site

Rejected because the website requires localization, reusable content, controlled integrations, forms, previews, analytics, and future growth.

### Client-Only React Application

Rejected because it would reduce initial-content delivery, SEO, and performance.

### Separate Patient and Provider Frontends

Rejected because the website uses one brand, domain, Design System, and shared content foundation.

### Vercel-Only Deployment

Rejected as a requirement because ODRISC wants a portable website capable of deployment on its own server.

### External CMS at Initial Launch

Deferred because repository-controlled content provides stronger initial governance and fewer operational dependencies.

### Direct Database Access From Next.js

Rejected because the public website must remain separated from clinical and operational databases.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PRD.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/DEPENDENCY_POLICY.md`
- `docs/engineering/ENVIRONMENT_VARIABLES.md`
- `docs/engineering/PERFORMANCE_BUDGET.md`
- `ai/rules/NON_NEGOTIABLES.md`
