# ODRISC Public Website Architecture

## Document Status

**Document:** Engineering Architecture
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical public-website system, module, data-flow, security-boundary, and deployment architecture
**System:** ODRISC public website
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Technical owner:** CTO
**Approval authority:** Founder and CTO with designated product, engineering, security, privacy, accessibility, localization, DevOps, analytics, and design reviewers

## Related Documents

* `PROJECT_CONTEXT.md`
* `README.md`
* `AGENTS.md`
* `CLAUDE.md`
* `docs/project/SOURCE_OF_TRUTH.md`
* `docs/project/ASSUMPTIONS.md`
* `docs/project/OPEN_QUESTIONS.md`
* `docs/project/GLOSSARY.md`
* `docs/product/PRODUCT_VISION.md`
* `docs/product/AUDIENCE.md`
* `docs/product/WEBSITE_OBJECTIVES.md`
* `docs/product/WEBSITE_STORY.md`
* `docs/product/PRD.md`
* `docs/product/PRODUCT_STATUS.md`
* `docs/product/INFORMATION_ARCHITECTURE.md`
* `docs/product/PAGE_REQUIREMENTS.md`
* `docs/product/ROUTE_REGISTRY.md`
* `docs/product/REQUIREMENTS_TRACEABILITY.md`
* `docs/product/PAGE_IMPLEMENTATION_TRACKER.md`
* `docs/design/BRAND_FOUNDATION.md`
* `docs/design/DESIGN_SYSTEM.md`
* `docs/design/ANIMATION_GUIDELINES.md`
* `docs/engineering/TECH_STACK.md`
* `docs/engineering/DEPENDENCY_POLICY.md`
* `docs/engineering/ENVIRONMENT_VARIABLES.md`
* `docs/engineering/PERFORMANCE_BUDGET.md`
* `docs/engineering/COMPONENT_LIBRARY.md`
* `docs/engineering/CODING_STANDARDS.md`
* `docs/engineering/TESTING_STRATEGY.md`
* `docs/engineering/SECURITY_ARCHITECTURE.md`
* `docs/engineering/DEPLOYMENT_RUNBOOK.md`
* `ai/rules/NON_NEGOTIABLES.md`
* `ai/rules/AI_BEHAVIOR.md`

The reusable presentation architecture, component hierarchy, Server and Client classifications, Component IDs, composition rules, and component-level contracts are defined in:

`docs/engineering/COMPONENT_LIBRARY.md`

---

# 1. Purpose

This document defines how the approved ODRISC public-website technologies are organized into one coherent system.

It establishes:

* System context
* System boundaries
* Trust boundaries
* Repository architecture
* Application layers
* Module boundaries
* Dependency direction
* Routing
* Localization
* Rendering
* Server and Client Component boundaries
* Content architecture
* Product Status architecture
* Design-system implementation
* Motion implementation
* API integration
* Form processing
* Consent and analytics
* SEO
* Caching
* Runtime configuration
* Security controls
* Error handling
* Logging
* Observability
* Testing
* Continuous integration
* Docker topology
* Nginx routing
* Deployment
* Health checks
* Rollback
* Architecture governance

This document answers:

> How must the ODRISC public website be structured so that it remains fast, accessible, secure, localization-ready, clinically responsible, maintainable, and portable?

---

# 2. Scope

This architecture applies to the public ODRISC website at:

`odrisc.com`

It includes:

* Shared audience entry
* Patient public pages
* Provider public pages
* Institutional pages
* Resource content
* Company pages
* Legal pages
* Public forms
* Public product previews
* Analytics and consent
* Application handoffs
* Approved public API integrations
* Self-hosted deployment

It does not define the internal architecture of:

* The Patient application
* The Provider platform
* Existing `.NET 6` APIs
* SQL Server databases
* Clinical intelligence engines
* OCR processing
* FHIR integrations
* Hospital systems
* Native mobile applications
* Internal administrative systems

The website must remain separated from clinical systems by approved API boundaries.

---

# 3. Architecture Objectives

The architecture must support:

1. Static-first public content
2. Server-first rendering
3. Small Client Component boundaries
4. One ODRISC brand
5. Separate Patient and Provider journeys
6. English and Arabic
7. Right-to-left presentation
8. Search-engine visibility
9. Accessible interaction
10. Controlled motion
11. Repository-controlled content
12. Product Status transparency
13. Secure public forms
14. Consent-controlled analytics
15. Existing ODRISC service integration
16. No direct clinical-database access
17. Self-hosted Docker deployment
18. Immutable releases
19. Low-downtime deployment
20. Reliable rollback
21. Multiple AI coding agents
22. Clear module ownership
23. Automated quality gates
24. Future CMS and search adoption without rebuilding the application

---

# 4. Architecture Principles

## 4.1 Public Website, Not Clinical Application

The public website is responsible for:

* Explanation
* Trust
* Education
* Search discovery
* Public resources
* Conversion
* Demonstration requests
* Application handoff

It is not responsible for:

* Storing clinical records
* Calculating clinical risk
* Interpreting fetal growth
* Managing care
* Authenticating application users
* Operating clinical alerts
* Accessing SQL Server directly

## 4.2 Static Before Dynamic

A page should be static unless a documented requirement needs request-time execution.

## 4.3 Server Before Client

A component should remain server-rendered unless it needs:

* Browser state
* Interaction
* Motion
* Consent state
* Client analytics
* Browser APIs
* Interactive charts

## 4.4 Composition Before Duplication

Pages should be composed from:

* Shared primitives
* Shared UI components
* Audience-aware patterns
* Page sections
* Typed content

Patient and Provider pages must not create separate component systems.

## 4.5 Explicit Boundaries

The architecture must make clear which code belongs to:

* Presentation
* Content
* Application logic
* Integrations
* Server-only operations
* Client-only behavior
* Configuration

## 4.6 Dependencies Point Inward

External services and frameworks may depend on internal application contracts.

Internal application rules must not depend directly on vendor-specific SDKs.

## 4.7 Content Is Data

Navigation, Product Status, team data, pricing, evidence metadata, FAQs, and resources should be structured and validated.

## 4.8 Secure by Default

Sensitive information must not cross into the public system unless an approved requirement explicitly permits it.

## 4.9 Progressive Enhancement

Core content, navigation, and form semantics should remain understandable when client JavaScript or animation is delayed.

## 4.10 Operational Simplicity

V1 should avoid unnecessary distributed infrastructure.

The initial architecture should remain deployable on one controlled server while preserving a future scaling path.

---

# 5. Architecture Style

The public website uses a:

> Modular monolith with layered server integrations and static-first rendering.

This means:

* One deployable Next.js application
* One source repository
* One build artifact
* Clearly separated internal modules
* External integrations behind adapters
* No independent website microservices
* No website-owned database
* No distributed event system
* No separate Patient and Provider frontends

The modular monolith may be decomposed later only when an operational requirement justifies it.

---

# 6. Repository Decision

## 6.1 V1 Repository Model

The public website will use a dedicated single-application repository.

The repository contains:

* Public website application
* Public website documentation
* Design tokens
* Tests
* Storybook
* Infrastructure configuration
* Deployment scripts

It does not contain:

* Clinical backend source
* SQL Server credentials
* Patient application source
* Provider-platform source
* Production clinical data
* Native mobile application source

## 6.2 Monorepo Position

A monorepo is not required for V1.

A future monorepo requires a separate decision when shared packages genuinely exist across multiple ODRISC applications.

---

# 7. System Context

```text
Public visitor
    │
    ├── Patient
    ├── Healthcare Provider
    ├── Institution
    ├── Search engine
    └── Authorized content reviewer
    │
    ▼
DNS / optional approved CDN or WAF
    │
    ▼
Nginx reverse proxy
    │
    ▼
ODRISC Next.js standalone container
    │
    ├── Static pages and assets
    ├── Server Components
    ├── Server Actions
    ├── Route Handlers
    ├── Content pipeline
    ├── Localization
    ├── Consent and analytics adapter
    ├── Form application services
    └── Public API adapters
    │
    ├──────────────► Approved form-delivery service
    ├──────────────► Approved ODRISC public `.NET` API
    ├──────────────► Google Tag Manager / GA4 after consent
    ├──────────────► Approved error-monitoring provider
    └──────────────► Patient and Provider application handoffs
```

---

# 8. Trust Boundaries

The system uses five trust zones.

## Zone 1 — Public Browser

Untrusted.

May provide:

* Navigation requests
* Locale preference
* Audience preference
* Consent preference
* Public form data
* Search-engine requests

All browser-supplied information must be treated as untrusted.

## Zone 2 — Edge and Reverse Proxy

Controlled infrastructure.

Responsible for:

* TLS
* Request limits
* Proxying
* Security headers
* Rate limiting
* Request IDs
* Static-asset caching
* Environment-level noindex controls

## Zone 3 — Website Application Container

Trusted application runtime.

Responsible for:

* Rendering
* Content
* Validation
* Forms
* Approved external requests
* Analytics configuration
* Logging
* Error mapping

## Zone 4 — Approved External Services

Partially trusted.

Includes:

* Form delivery
* Analytics
* Error monitoring
* Email
* CRM
* Public ODRISC APIs

All external responses require validation and controlled error handling.

## Zone 5 — ODRISC Clinical and Operational Systems

Highly restricted.

The public website must not directly access:

* Clinical database
* Patient records
* Ultrasound records
* Internal clinical algorithms
* Internal Provider notes
* SQL Server credentials

Access may occur only through an approved public API designed for that specific purpose.

---

# 9. High-Level Application Layers

```text
Routes and page composition
↓
Page sections and feature modules
↓
Reusable components
↓
Application services
↓
Domain contracts and validation
↓
Integration adapters
↓
External systems
```

The layers are:

1. Route layer
2. Presentation layer
3. Feature layer
4. Content layer
5. Application-service layer
6. Integration layer
7. Infrastructure layer

---

# 10. Canonical Source Structure

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── (site)/
│   │   │   ├── page.tsx
│   │   │   ├── patients/
│   │   │   ├── providers/
│   │   │   ├── resources/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── privacy/
│   │   │   ├── terms/
│   │   │   ├── cookies/
│   │   │   ├── accessibility/
│   │   │   └── login/
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   │
│   ├── api/
│   │   ├── health/
│   │   │   ├── live/route.ts
│   │   │   └── ready/route.ts
│   │   ├── config/
│   │   │   └── public/route.ts
│   │   └── webhooks/
│   │       └── [approved-webhook]/route.ts
│   │
│   ├── global-error.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   └── opengraph-image.tsx
│
├── components/
│   ├── primitives/
│   ├── ui/
│   ├── navigation/
│   ├── content/
│   ├── forms/
│   ├── charts/
│   ├── motion/
│   ├── patient/
│   └── provider/
│
├── features/
│   ├── audience/
│   ├── consent/
│   ├── contact/
│   ├── demonstrations/
│   ├── navigation/
│   ├── product-status/
│   ├── resources/
│   └── application-handoff/
│
├── content/
│   ├── pages/
│   │   ├── en/
│   │   └── ar/
│   ├── resources/
│   │   ├── en/
│   │   └── ar/
│   ├── translations/
│   │   ├── en/
│   │   └── ar/
│   ├── data/
│   └── schemas/
│
├── design-system/
│   ├── tokens/
│   ├── styles/
│   ├── utilities/
│   └── variants/
│
├── i18n/
│   ├── routing.ts
│   ├── navigation.ts
│   ├── request.ts
│   ├── formats.ts
│   └── locales.ts
│
├── server/
│   ├── actions/
│   ├── application/
│   ├── integrations/
│   ├── security/
│   ├── observability/
│   ├── rate-limit/
│   └── runtime-config/
│
├── config/
│   ├── environment.ts
│   ├── routes.ts
│   ├── site.ts
│   ├── analytics.ts
│   └── features.ts
│
├── lib/
│   ├── analytics/
│   ├── content/
│   ├── errors/
│   ├── formatting/
│   ├── metadata/
│   ├── routing/
│   ├── structured-data/
│   └── validation/
│
├── types/
└── proxy.ts

tests/
├── unit/
├── integration/
├── component/
├── e2e/
├── accessibility/
├── visual/
└── fixtures/

infra/
├── docker/
├── nginx/
├── compose/
├── scripts/
└── deployment/
```

The exact folder structure may evolve without changing the architectural boundaries.

---

# 11. Route Layer

The route layer is responsible for:

* URL ownership
* Layout composition
* Metadata connection
* Content loading
* Page-section composition
* Error and loading boundaries
* Static-parameter generation

Route files should remain thin.

A route file should generally:

1. Resolve locale
2. Resolve Page ID
3. Load approved content
4. Load approved structured data
5. Generate metadata
6. Compose page sections
7. Avoid embedded business or integration logic

Route files must not:

* Call vendor SDKs directly
* Define reusable design rules
* Contain complex form-delivery logic
* Send analytics directly
* Duplicate content schemas
* Implement clinical calculations

---

# 12. Page ID Architecture

Every route must map to a stable Page ID.

Example:

```ts
export const pageDefinition = {
  id: "PAT-PG-001",
  routeKey: "patients.home",
  audience: "patient",
  pageType: "audience-homepage"
} as const;
```

The Page ID is used for:

* Content lookup
* Metadata
* Analytics
* Testing
* Implementation tracking
* Requirements traceability
* Product Status checks
* Brand and accessibility review

Visible page titles may change without changing the Page ID.

---

# 13. Route Registry Representation

The documentation Route Registry remains authoritative.

The application should maintain a typed implementation registry:

```text
src/config/routes.ts
```

It should contain:

* Route key
* Page ID
* Audience
* Page type
* Indexation
* Locale support
* Canonical path definition
* Audience-switch equivalent
* Primary CTA identifier

The registry must not become a second Information Architecture.

It is the typed implementation of approved architecture.

CI should detect:

* Duplicate Page IDs
* Duplicate canonical paths
* Missing route definitions
* Unsupported status values
* Broken audience-switch mappings

---

# 14. Localization Architecture

## 14.1 Internal Locale Segment

Localized public pages are implemented beneath:

```text
src/app/[locale]/
```

The supported initial locale set is:

```ts
export const locales = ["en", "ar"] as const;
```

## 14.2 Locale Routing Configuration

The external URL-prefix policy must be centralized in:

```text
src/i18n/routing.ts
```

This allows the approved policy to be changed without rewriting page components.

The policy may later support:

* Always-prefixed locale routes
* Default-locale optional prefix
* Market-language combinations
* Localized public pathnames

## 14.3 Locale Resolution

`src/proxy.ts` is responsible for:

* Locale negotiation
* Approved locale redirects
* Locale cookie handling
* Excluding API and static-asset routes
* Preserving direct deep links

## 14.4 Navigation

All localized navigation must use wrappers from:

```text
src/i18n/navigation.ts
```

Page components should not manually concatenate locale prefixes.

## 14.5 Page Direction

The locale layout must set:

```html
<html lang="ar" dir="rtl">
```

or:

```html
<html lang="en" dir="ltr">
```

according to the active locale.

## 14.6 Translation Fallback

The application must not silently hide missing translations.

Missing translations should:

* Fail validation in CI for required P0 content
* Produce a visible controlled fallback only where approved
* Never expose raw translation keys publicly

## 14.7 Content Equivalence

Legal, clinical, Product Status, CTA, and safety content must preserve equivalent meaning across locales.

---

# 15. Rendering Architecture

## 15.1 Static Routes

The following should be statically rendered:

* Shared entry
* Patient public pages
* Provider public pages
* About pages
* Resources
* Validation
* Methodology
* FAQs
* Legal pages
* Accessibility
* Login handoff page

## 15.2 Static Resource Generation

Resource detail routes should use approved resource metadata and static parameter generation.

The build should fail for:

* Duplicate slugs
* Unsupported locales
* Missing required metadata
* Invalid references
* Missing required review dates

## 15.3 Dynamic Endpoints

The following remain request-time endpoints:

* Health checks
* Public runtime configuration
* Approved webhooks
* Future external API endpoints

## 15.4 Static Shell With Server Mutation

A public form page may remain statically rendered while its submission uses a Server Action.

## 15.5 No V1 Request-Time Content Fetching

Public page copy should not depend on a request-time CMS or external content API in V1.

---

# 16. Rendering Matrix

| Page or feature   | Rendering                            |                    Client JavaScript | Data source                         |
| ----------------- | ------------------------------------ | -----------------------------------: | ----------------------------------- |
| Shared entry      | Static                               | Audience interaction and motion only | Repository content                  |
| Patient homepage  | Static                               |            Approved interaction only | Repository content                  |
| Provider homepage | Static                               |      Charts or motion where approved | Repository content                  |
| Capability page   | Static                               |  Optional tabs, accordions, previews | Repository content and typed status |
| Resource hub      | Static                               |           Filters only when required | Build-time resource index           |
| Resource detail   | Static                               |                              Minimal | MDX                                 |
| Contact page      | Static shell                         |                           Form state | Server Action                       |
| Demo request      | Static shell                         |                           Form state | Server Action                       |
| Patient Start     | Static or controlled runtime handoff |                        Routing state | Typed availability config           |
| Search            | Deferred                             |                          Interactive | Future search index                 |
| Health checks     | Dynamic Route Handler                |                                 None | Runtime                             |
| Public config     | Dynamic Route Handler                |            Client fetch where needed | Allowlisted runtime config          |
| Sitemap           | Build generated                      |                                 None | Route and content registry          |
| Robots            | Build or environment controlled      |                                 None | Site configuration                  |
| 404               | Static and localized                 |                              Minimal | Repository content                  |
| 500/global error  | Runtime boundary                     |                    Recovery controls | Application error state             |

---

# 17. Server Component Boundary

Server Components are the default for:

* Page layouts
* Page sections
* Content rendering
* Metadata
* Resource indexes
* Team data
* Product Status
* Pricing
* Validation data
* Structured data
* Application-handoff configuration
* Server-side API reads

Benefits sought by this architecture include:

* Reduced client JavaScript
* Controlled server-only access
* Direct content loading
* Clear separation of interaction

Server Components must not pass:

* Secrets
* Full environment objects
* Vendor clients
* Server-only error details
* Sensitive API responses

to Client Components.

---

# 18. Client Component Boundary

A component may become a Client Component only when it needs:

* Event handlers
* State
* Effects
* Browser APIs
* Motion
* Consent
* Interactive form feedback
* Interactive chart behavior
* Audience preference
* Locale-switch interaction
* Modal, drawer, tabs, or accordion behavior

## 18.1 Small Boundary Rule

Prefer:

```text
Server page
└── Server section
    └── Small Client interaction
```

Avoid:

```text
Client page
└── Entire page content
```

## 18.2 Serializable Props

Props crossing the server-to-client boundary must be:

* Minimal
* Serializable
* Validated where externally sourced
* Free from secrets
* Free from unnecessary content duplication

---

# 19. Client-Boundary Review

Every Client Component must document why it is client-side.

Recommended comment for non-obvious boundaries:

```ts
"use client";

// Client boundary required for keyboard-driven tabs and animated selection.
```

CI or code review should detect pages unnecessarily marked with:

```text
"use client"
```

The Component Library should identify which components are:

* Server-safe
* Client-only
* Server-composed with Client internals

---

# 20. Module Dependency Rules

## 20.1 Allowed Direction

```text
app
├── features
├── components
├── content
├── config
├── i18n
├── lib
└── server, from server contexts only

features
├── components
├── content
├── config
├── i18n
└── lib

components
├── design-system
├── lib
├── types
└── other lower-level components

server
├── config
├── lib
├── types
└── integrations

content
├── schemas
├── types
└── controlled formatting helpers
```

Routes and page sections should compose approved feature patterns and shared components rather than repeatedly assembling low-level primitives.

UI components must not import:

- External-service adapters
- Runtime environment configuration
- Route files
- Server-only modules
- Vendor analytics providers

## 20.2 Prohibited Direction

* `components` must not import from `app`
* Client Components must not import from `server`
* `server` must not import UI components
* `content` must not import page components
* `lib` must not depend on feature-specific UI
* Vendor SDKs must not be imported directly by page components
* Integration adapters must not import route files

## 20.3 Enforcement

Use:

* TypeScript path aliases
* ESLint `no-restricted-imports`
* `server-only` markers
* Code review
* Architecture tests

---

# 21. Presentation Architecture

Presentation code is divided into four levels.

## Level 1 — Primitives

Examples:

* Button
* Link
* Input
* Label
* Dialog
* Tabs
* Accordion
* Badge

## Level 2 — UI Components

Examples:

* Product Status Badge
* Evidence Card
* Clinical Boundary Callout
* Audience Card
* Metric Card
* Form Field
* Breadcrumbs

## Level 3 — Patterns

Examples:

* Audience Selector
* Patient Capability Grid
* Provider Intelligence Flow
* Resource Metadata
* Demo Request Form
* Narrative Timeline

## Level 4 — Page Sections

Examples:

* Patient Hero
* Provider Platform Overview
* Validation Evidence Section
* Shared Final CTA
* Hospital Implementation Section

Page sections may compose lower-level components but should not become globally reusable without evidence.

---

# 22. Design-Token Architecture

The canonical token implementation lives in:

```text
src/design-system/tokens/
```

Recommended structure:

```text
tokens/
├── color.css
├── typography.css
├── spacing.css
├── radius.css
├── shadow.css
├── motion.css
├── z-index.css
├── breakpoints.ts
├── tokens.ts
└── index.ts
```

CSS variables are the runtime styling source.

Typed exports support:

* Charts
* JavaScript calculations
* Storybook controls
* Tests
* Motion
* Metadata images

Token values must not be copied manually across multiple files.

---

# 23. Component Variant Architecture

Component variants may represent:

* Size
* Semantic state
* Audience density
* Product Status
* Clinical context
* Surface context

Variants must not represent arbitrary page-specific preferences.

Example:

```ts
type CapabilityCardVariant =
  | "patient"
  | "provider"
  | "institutional";
```

Patient and Provider variants must share:

* Anatomy
* Accessibility
* Token system
* Core interaction
* Responsive rules

---

# 24. Motion Architecture

Reusable motion primitives belong in:

```text
src/components/motion/
```

Potential primitives:

* `MotionReveal`
* `MotionStagger`
* `MotionLineDraw`
* `MotionTimeline`
* `MotionDrawer`
* `MotionDialog`
* `ReducedMotionBoundary`

Motion configuration belongs in design tokens and Motion Specifications.

Page components must not define unrelated arbitrary animation values.

Major motion sequences must map to Motion IDs.

---

# 25. Content Architecture

## 25.1 Requirements Documents Are Not Runtime Content

The application must not parse files under:

```text
docs/
```

at runtime.

The documentation defines requirements and approval.

Published website content belongs in:

```text
src/content/
```

## 25.2 Content Categories

### Long-Form Content

Use MDX for:

* Resources
* Clinical briefs
* Evidence summaries
* Methodology notes
* Long explanatory sections

### Structured Data

Use TypeScript or JSON for:

* Navigation
* Product Status
* Team
* Contributors
* FAQs
* Pricing
* Market availability
* Validation records
* Contact categories
* Audience-switch mappings

### Interface Copy

Use localization messages for:

* Buttons
* Labels
* Navigation
* Form errors
* Consent
* Utility states

## 25.3 Content Separation

Content should be separated from component logic.

Avoid:

* Long page copy embedded in TSX
* Pricing duplicated across pages
* Product Status strings defined in components
* Market availability encoded in conditional JSX
* Translation strings constructed through concatenation

---

# 26. Proposed Content Structure

```text
src/content/
├── pages/
│   ├── en/
│   │   ├── SH-PG-001.mdx
│   │   ├── PAT-PG-001.mdx
│   │   └── PRO-PG-001.mdx
│   └── ar/
│       ├── SH-PG-001.mdx
│       ├── PAT-PG-001.mdx
│       └── PRO-PG-001.mdx
│
├── resources/
│   ├── en/
│   └── ar/
│
├── translations/
│   ├── en/
│   └── ar/
│
├── data/
│   ├── product-status.ts
│   ├── navigation.ts
│   ├── team.ts
│   ├── contributors.ts
│   ├── pricing.ts
│   ├── availability.ts
│   ├── validation.ts
│   └── faq.ts
│
└── schemas/
    ├── page.ts
    ├── resource.ts
    ├── product-status.ts
    ├── pricing.ts
    └── validation.ts
```

Page content may later use a more granular section model if direct MDX page composition becomes difficult to govern.

---

# 27. Content Build Pipeline

```text
Approved content change
↓
Repository commit
↓
Schema validation
↓
Translation completeness validation
↓
Route and Page ID validation
↓
Product Status validation
↓
MDX compilation
↓
Resource-index generation
↓
Metadata and structured-data generation
↓
Static page generation
↓
Automated tests
↓
Deployment
```

The build must fail for material content errors.

Warnings alone are insufficient for:

* Invalid Product Status
* Duplicate resource slug
* Missing P0 translation
* Missing required clinical reviewer
* Invalid route
* Missing canonical metadata
* Invalid pricing structure

---

# 28. Product Status Architecture

The code representation of Product Status belongs in:

```text
src/content/data/product-status.ts
```

It must use the approved status vocabulary:

* Available
* Limited availability
* Pilot
* In validation
* In development
* Planned
* Future roadmap
* Not publicly announced

Each public capability record should include:

```ts
type ProductStatusRecord = {
  capabilityId: string;
  publicName: string;
  status: ProductStatus;
  markets: readonly MarketCode[];
  audiences: readonly Audience[];
  approvedPublicSummary: string;
  lastReviewedAt: string;
  owner: string;
};
```

Components must consume Product Status from this source.

They must not invent or infer status.

---

# 29. Product Status Governance

`docs/product/PRODUCT_STATUS.md` remains the approval authority.

The code representation is the publishable implementation.

A Product Status change requires:

1. Product approval
2. Clinical review where relevant
3. Documentation update
4. Structured-data update
5. Relevant page review
6. Test update
7. Deployment

CI should check that only approved status labels are used.

---

# 30. Navigation Architecture

Navigation data belongs in one typed source.

It should define:

* Shared navigation
* Patient navigation
* Provider navigation
* Footer navigation
* Audience switching
* Locale switching
* Conditional login links
* Conditional market routes

Navigation components should not hard-code route strings.

The route registry and navigation data must be validated against one another.

---

# 31. Audience-Switch Architecture

Audience-switch mappings belong in:

```text
src/features/audience/equivalent-routes.ts
```

Example:

```ts
const equivalentRoutes = {
  "patients.home": "providers.home",
  "patients.progress": "providers.intelligence",
  "patients.faq": "providers.faq"
} as const;
```

When no equivalent route exists, the alternate audience homepage is used.

Audience preference may be stored in a first-party cookie.

The preference must not:

* Override direct deep links
* Become a health profile
* Be used for advertising
* Block audience switching

---

# 32. Market Architecture

Market and locale are separate concepts.

Examples:

* English in Qatar
* Arabic in Qatar
* English in India

Market configuration may control:

* Availability
* Pricing
* CTA destination
* Contact route
* Legal applicability
* Login handoff

V1 must not infer market solely from language.

A general market selector should not be introduced until market differences materially affect the experience.

---

# 33. Feature Configuration

The V1 application may use typed feature configuration for:

* Page publication
* CTA availability
* Login handoff
* Public risk-assessment access
* Demonstration availability
* Pilot availability
* Analytics activation
* Locale availability

Feature configuration must not become an uncontrolled feature-flag platform.

## 33.1 No Health Experimentation

A/B testing involving:

* Clinical wording
* Risk communication
* Patient safety
* Product Status
* Medical claims

requires explicit product, clinical, privacy, and ethics review.

---

# 34. Runtime Configuration Architecture

Environment-specific public values must not be compiled throughout the client bundle.

## 34.1 Server Configuration

Server-only environment configuration is validated in:

```text
src/config/environment.ts
```

## 34.2 Public Runtime Configuration

An allowlisted endpoint may expose non-sensitive runtime values:

```text
/api/config/public
```

Possible fields:

```ts
type PublicRuntimeConfig = {
  environment: "staging" | "production";
  release: string;
  analyticsEnabled: boolean;
  gtmContainerId?: string;
  supportedLocales: readonly string[];
};
```

The endpoint must:

* Return only allowlisted fields
* Use `no-store`
* Never expose secrets
* Be schema validated
* Avoid health or user information

## 34.3 `NEXT_PUBLIC_*` Policy

Use `NEXT_PUBLIC_*` only for values that are intentionally public and stable across promoted environments.

Environment-varying values should remain server-side and be exposed only through approved runtime configuration.

---

# 35. Immutable Build Configuration

The same immutable application image should be promotable from staging to production.

To support this:

* Secrets remain runtime variables
* External service endpoints remain runtime variables
* Analytics identifiers remain runtime configuration
* Deployment version is injected by CI
* Staging receives noindex controls at the edge
* Production canonical metadata remains stable
* Environment-specific logic remains outside compiled client constants

A value that materially changes the static content may still require a new build.

---

# 36. API Integration Architecture

All external API access belongs behind integration adapters.

```text
Page or Server Action
↓
Application service
↓
Internal contract
↓
Integration adapter
↓
External API
```

Page components must not call external APIs directly.

---

# 37. ODRISC Public API Adapter

Recommended structure:

```text
src/server/integrations/odrisc-api/
├── client.ts
├── contracts.ts
├── schemas.ts
├── errors.ts
├── availability.ts
├── handoff.ts
└── index.ts
```

Responsibilities:

* Base URL
* Authentication where approved
* Timeout
* Request headers
* Response validation
* Error normalization
* Request ID propagation
* Safe logging

The adapter must not expose backend response structures directly to UI components.

---

# 38. API Contract Strategy

Preferred order:

1. Approved OpenAPI-generated contracts
2. Approved shared contract package
3. Manually governed TypeScript and Zod contracts

Generated contracts should live in a clearly marked generated directory.

Generated files must not be edited manually.

At runtime, external responses must still be validated at important trust boundaries.

---

# 39. External Request Policy

Every external request must define:

* Purpose
* Method
* Timeout
* Idempotency
* Retry behavior
* Request-size limit
* Response schema
* Error mapping
* Logging policy
* Privacy classification

## 39.1 Retry Policy

Automatic retries are permitted only for safe, idempotent requests.

Form submissions and other mutations must not retry automatically unless an idempotency mechanism exists.

---

# 40. Server Actions

Server Actions are used for same-origin website mutations such as:

* Contact form
* Demonstration request
* Pilot enquiry
* Future controlled preference updates

A Server Action must:

1. Receive `FormData` or a controlled serializable payload
2. Verify origin or expected invocation context
3. Normalize input
4. Check honeypot
5. Apply rate limiting
6. Validate with Zod
7. Call an application service
8. Map errors to a serializable safe result
9. Avoid logging message content
10. Return a clear success or recovery state

Server Actions must be treated as publicly reachable server endpoints.

---

# 41. Route Handlers

Route Handlers are reserved for:

* Health checks
* Public runtime configuration
* Approved webhooks
* Machine-oriented integration endpoints
* Future API routes not tied to a React form

Route Handlers should not duplicate Server Actions.

Do not maintain both:

```text
/api/contact
```

and a contact Server Action unless there are separate documented clients.

---

# 42. Public Form Processing Flow

```text
Visitor submits form
↓
Browser prevents duplicate submission
↓
Server Action receives request
↓
Origin and request-size validation
↓
Honeypot and abuse checks
↓
Rate-limit check
↓
Input normalization
↓
Zod validation
↓
Consent and privacy validation
↓
Application service
↓
Form-delivery adapter
↓
External provider or approved ODRISC API
↓
Provider response validation
↓
Safe success or failure result
↓
Accessible UI feedback
↓
Analytics event without form contents
```

---

# 43. Form Application Services

Form business logic belongs in:

```text
src/server/application/forms/
```

Suggested services:

* `submitGeneralEnquiry`
* `submitDemoRequest`
* `submitPilotEnquiry`
* `submitPrivacyRequest`

These services depend on interfaces such as:

```ts
interface LeadDeliveryPort {
  deliver(request: LeadDeliveryRequest): Promise<LeadDeliveryResult>;
}
```

Vendor-specific adapters implement the interface.

---

# 44. Form Reliability

V1 form delivery is synchronous.

A submission is considered successful only when the approved delivery service acknowledges it.

If delivery fails:

* Do not falsely show success
* Preserve non-sensitive form state where practical
* Provide a retry option
* Provide an alternate contact route
* Log a safe operational error
* Do not automatically retry non-idempotent delivery

A persistent queue requires a future architecture decision.

---

# 45. Anti-Abuse Architecture

Public forms use layered controls.

## Edge Controls

* Request-size limits
* Request-rate limits
* Connection limits
* Known malicious-request blocking

## Application Controls

* Honeypot
* Time-to-submit heuristics where appropriate
* Input normalization
* Schema validation
* Per-action rate limits
* Duplicate-submission protection
* Approved origin checking

## Optional Future Controls

* Cloudflare Turnstile
* WAF-managed challenge
* External abuse scoring

Challenge systems must remain accessible and privacy reviewed.

---

# 46. Rate Limiting

V1 rate limiting may use:

* Nginx request limits
* Small application-level in-memory limits for defense in depth

Application memory must not be treated as a durable global limit.

When the application scales to multiple instances, use an approved shared rate-limit service.

Rate-limit responses must:

* Use appropriate HTTP status
* Avoid revealing abuse-detection logic
* Provide accessible recovery guidance
* Avoid collecting unnecessary identifiers

---

# 47. Consent Architecture

```text
Page loads
↓
Essential content renders
↓
Consent state is read
↓
Consent interface appears when required
↓
Visitor selects or retains preferences
↓
Consent state is stored
↓
Approved runtime analytics config is loaded
↓
Permitted providers initialize
↓
Analytics wrapper permits allowed events
```

Consent must not block:

* Reading content
* Navigation
* Contact access
* Safety information
* Legal pages

---

# 48. Consent State

Consent state should use a typed first-party cookie.

Example categories:

```ts
type ConsentState = {
  essential: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  policyVersion: string;
};
```

Requirements:

* Essential is always active
* Marketing defaults to disabled unless genuinely used
* Withdrawal is possible
* Policy version is recorded
* Consent UI is localized
* No dark patterns
* Consent values are not treated as health information

---

# 49. Analytics Architecture

```text
Component or page event
↓
Internal analytics function
↓
Typed event schema
↓
Consent check
↓
PII and sensitive-data guard
↓
Provider adapter
↓
GTM data layer
↓
GA4 or approved provider
```

Components must call internal functions such as:

```ts
trackEvent({
  name: "provider_demo_requested",
  pageId: "PRO-PG-016"
});
```

They must not call:

```text
dataLayer.push
gtag
```

directly.

---

# 50. Analytics Event Validation

Analytics events must be validated before transmission.

The validation layer should:

* Restrict event names
* Restrict property names
* Reject email-like values
* Reject phone-like values
* Reject free-form message content
* Reject clinical values
* Reject health-assessment results
* Add Page ID, audience, locale, and release automatically

The event registry remains the authority for permitted events.

---

# 51. SEO Architecture

SEO is generated through:

* Route registry
* Page definitions
* Page content metadata
* Resource metadata
* Locale configuration
* Structured-data helpers

Recommended structure:

```text
src/lib/metadata/
├── create-page-metadata.ts
├── create-resource-metadata.ts
├── canonical.ts
└── alternates.ts

src/lib/structured-data/
├── organization.ts
├── website.ts
├── breadcrumb.ts
├── article.ts
└── faq.ts
```

---

# 52. Canonical and Alternate URLs

Canonical URL generation must use:

* Approved site origin
* Approved locale strategy
* Approved route registry
* Page availability
* Market applicability

Hreflang entries should appear only for published equivalent pages.

Do not generate alternates for:

* Missing translations
* Unpublished pages
* Restricted routes
* Market-inapplicable content

---

# 53. Sitemap Architecture

The sitemap is generated from:

1. Approved route registry
2. Published Page IDs
3. Resource index
4. Locale availability
5. Indexation status

The sitemap must exclude:

* Drafts
* Restricted pages
* Noindex pages
* Conversion endpoints marked noindex
* Internal APIs
* Application dashboards
* Preview routes

---

# 54. Staging Indexation Control

Staging must be protected from search indexation through multiple layers:

* `X-Robots-Tag: noindex, nofollow`
* Staging-specific robots behavior
* No production sitemap submission
* Optional access control where required

Staging must not rely only on a `robots.txt` rule.

---

# 55. Image Architecture

Public images use:

* Approved local assets
* Explicitly approved remote hosts
* Responsive image sizing
* Width and height reservation
* Accessible alternative text
* Controlled priority loading

Image metadata should define:

```ts
type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  decorative: boolean;
  status?: "current" | "prototype" | "concept";
};
```

Product screenshots and previews must show their implementation status.

---

# 56. Chart Architecture

Public chart components live under:

```text
src/components/charts/
```

Recharts is wrapped behind ODRISC-owned components.

Chart pages and sections must not import Recharts directly outside the chart module.

A chart wrapper provides:

* Accessible heading
* Text summary
* Unit
* Legend
* Color tokens
* RTL behavior
* Reduced-motion behavior
* Product Status
* Data-source context

This boundary allows the charting library to change without rewriting pages.

---

# 57. Caching Architecture

## 57.1 V1 Content Caching

Public content is built into the deployment artifact.

Content invalidation occurs through a new deployment.

V1 does not depend on request-time ISR.

## 57.2 Browser and Proxy Caching

Recommended cache behavior:

| Resource                      | Cache behavior                          |
| ----------------------------- | --------------------------------------- |
| `/_next/static/*`             | Long-lived immutable                    |
| Versioned fonts               | Long-lived immutable                    |
| Versioned local images        | Long-lived                              |
| HTML                          | Revalidate or no long-lived proxy cache |
| Health endpoints              | No-store                                |
| Public runtime config         | No-store                                |
| Form responses                | No-store                                |
| Legal documents               | Normal page caching                     |
| Remote image optimizer output | Controlled cache                        |

## 57.3 Nginx Caching

Nginx may cache:

* Immutable Next.js static assets
* Approved image-optimization responses

Nginx should not cache:

* Form responses
* Health checks
* Runtime config
* Error responses
* Pages with request-specific state

---

# 58. Future Revalidation

On-demand revalidation may be introduced when:

* An external CMS is approved
* Product Status requires independent publishing
* Resource publication volume increases
* Pricing changes require faster controlled release

A future revalidation system must address:

* Authentication
* Shared cache
* Multiple application instances
* Audit logging
* Content versioning
* Rollback
* Webhook security

---

# 59. Error Architecture

Errors are divided into:

1. Validation errors
2. User-correctable form errors
3. Rate-limit errors
4. Integration errors
5. Configuration errors
6. Content errors
7. Rendering errors
8. Infrastructure errors

Each error category must define:

* Internal code
* Log level
* Public message
* Retry behavior
* Monitoring behavior
* Sensitive-data handling

---

# 60. Error Representation

Recommended internal shape:

```ts
type ApplicationError = {
  code: string;
  category:
    | "validation"
    | "rate_limit"
    | "integration"
    | "configuration"
    | "content"
    | "unexpected";
  safeMessage: string;
  retryable: boolean;
  cause?: unknown;
};
```

The `cause` must not cross into the browser.

---

# 61. Error Boundaries

Use:

* Route-level `error.tsx`
* Local component error boundaries where recovery is possible
* `global-error.tsx` for root failures
* Localized `not-found.tsx`
* Controlled form-result states

Error boundaries must:

* Preserve ODRISC branding
* Avoid technical details
* Offer recovery
* Report safe error context
* Avoid infinite retry loops
* Remain accessible

---

# 62. Public Error Codes

User-facing error references may use non-sensitive identifiers such as:

```text
OD-WEB-FORM-001
OD-WEB-INTEGRATION-002
OD-WEB-RENDER-001
```

These identifiers help support correlate reports without exposing stack traces.

---

# 63. Logging Architecture

Server logs use structured Pino output.

Recommended context:

* Request ID
* Release
* Environment
* Route
* Page ID
* Locale
* Operation
* Duration
* Status
* Error code

Logs must not contain:

* Form content
* Medical information
* Email addresses by default
* Phone numbers
* Risk results
* Cookies
* Tokens
* Secrets
* Clinical identifiers

---

# 64. Request ID Architecture

Nginx should accept or generate a request ID.

The request ID should be:

* Forwarded to the Next.js application
* Included in server logs
* Forwarded to approved external services where safe
* Returned in error responses where useful
* Free from user-supplied unsafe characters

The request ID must not encode personal information.

---

# 65. Observability Architecture

The V1 observability foundation includes:

* Structured application logs
* Nginx access and error logs
* Health checks
* Deployment version
* Form-delivery success and failure metrics
* External error-monitoring adapter
* Core Web Vitals
* CI and deployment status

OpenTelemetry may be introduced later without changing application-service contracts.

---

# 66. Health Checks

## 66.1 Liveness

Route:

```text
/api/health/live
```

Purpose:

* Confirm the process is running

It should not call external services.

## 66.2 Readiness

Route:

```text
/api/health/ready
```

Purpose:

* Confirm required configuration loaded
* Confirm content manifest loaded
* Confirm application is ready to serve requests

Readiness should not become unavailable because a non-critical analytics provider is down.

## 66.3 Response

Health responses may include:

* Status
* Release
* Timestamp
* Service name

They must not expose:

* Environment values
* Secrets
* Internal hostnames
* Dependency credentials
* Stack traces

---

# 67. Security Architecture

Security controls exist at multiple layers.

## Edge

* TLS
* HSTS
* Request limits
* Rate limiting
* Security headers
* Deny invalid methods where appropriate
* Staging noindex controls

## Application

* Schema validation
* Origin checking
* Server-only secrets
* Safe error mapping
* Controlled outbound hosts
* Sensitive-log filtering
* Consent controls
* Trusted MDX only

## Integration

* Timeout
* Authentication
* Response validation
* Request ID
* Least privilege
* Secret rotation
* Vendor privacy review

## CI/CD

* Dependency scanning
* Secret scanning
* Container scanning
* Code review
* Protected branches
* Controlled deployment credentials

---

# 68. Content Security Policy

The website must use an explicit Content Security Policy.

The policy should define approved sources for:

* Scripts
* Styles
* Images
* Fonts
* Connections
* Frames
* Media

Requirements:

* No unrestricted wildcard sources
* No `unsafe-eval`
* Narrowly documented exceptions
* GTM and analytics included only when approved
* Frame ancestors restricted
* External image sources explicitly allowed
* Report-only testing before enforcement changes

A nonce-based approach may be evaluated where third-party scripts require it.

CSP implementation must not silently force all routes into dynamic rendering without architectural review.

---

# 69. Cross-Origin Architecture

Default policy:

* Public website browser requests are same-origin
* External API calls occur server-side
* CORS is not broadly enabled
* Webhooks use dedicated authenticated endpoints
* Public APIs are introduced only for documented clients

Outbound integration hosts should be allowlisted through configuration.

---

# 70. Secret Boundary

Secrets may exist only in:

* Approved runtime environment variables
* CI secret storage
* Server-only modules
* Infrastructure secret configuration

Secrets must never appear in:

* `NEXT_PUBLIC_*`
* Client Component props
* Static content
* Storybook
* Tests
* Documentation examples
* Public runtime configuration
* Logs
* Browser error messages

---

# 71. Data Classification

## Class 1 — Public

Examples:

* Public page copy
* Product Status approved for publication
* Team profiles
* Public resources
* Public pricing
* Public routes

May be stored in the repository.

## Class 2 — Operational Contact Data

Examples:

* Name
* Work email
* Organization
* Professional role
* General enquiry message

May be processed only through approved form workflows.

Must not be stored in application logs.

## Class 3 — Sensitive Health or Clinical Data

Examples:

* Medical history
* Symptoms
* Risk answers
* Risk results linked to identity
* Pregnancy records
* Ultrasound values
* Fetal measurements

Must not be collected by the public website.

## Class 4 — Secrets and Credentials

Examples:

* API keys
* Provider secrets
* Deployment tokens
* Signing secrets

Must remain server-side and access controlled.

---

# 72. Privacy Architecture

Privacy must be designed into:

* Forms
* Analytics
* Consent
* Logs
* Error monitoring
* External services
* Runtime configuration
* Resource downloads
* Application handoffs

The website should minimize:

* Data collected
* Fields shown
* Retention
* Third-party transmission
* Persistent identifiers

A public form should ask only for information necessary to complete its purpose.

---

# 73. Application Handoff Architecture

The website may route users to:

* Patient application
* Provider application
* Risk assessment
* Approved registration
* Approved payment workflow

Handoff configuration belongs in typed availability data.

Each handoff defines:

```ts
type ApplicationHandoff = {
  id: string;
  audience: Audience;
  markets: readonly MarketCode[];
  destination: string;
  availability: ProductStatus;
  opensExternalOrigin: boolean;
};
```

Handoffs must:

* Use approved destinations
* Explain when users leave the website
* Avoid passing sensitive information through URL parameters
* Preserve locale where supported
* Provide recovery if the destination is unavailable

---

# 74. No Authentication in V1

The public website does not implement:

* User sessions
* Passwords
* OAuth
* Patient accounts
* Provider accounts
* Role-based authorization

Login routes are public handoff pages.

If website-owned authentication becomes necessary, it requires a separate security and architecture decision.

---

# 75. No Database in V1

The website does not own a database.

This means:

* Content is repository controlled
* Forms are delivered synchronously
* Consent is stored client-side where legally appropriate
* No account state is stored
* No clinical data is stored
* No lead queue is owned by the website

A database may be introduced only after data classification, retention, deletion, encryption, region, backup, and ownership are approved.

---

# 76. Testing Architecture

Testing is layered.

```text
Static validation
↓
Unit tests
↓
Component tests
↓
Integration tests
↓
Accessibility tests
↓
End-to-end tests
↓
Visual regression
↓
Production smoke tests
```

---

# 77. Static Validation

Build-time validation should cover:

* Environment schema
* Route registry
* Page ID uniqueness
* Navigation targets
* Audience-switch mappings
* Product Status
* Content metadata
* Translation completeness
* Resource slugs
* Structured data
* Analytics event registry
* Broken internal links

Recommended scripts:

```text
pnpm validate:content
pnpm validate:routes
pnpm validate:i18n
pnpm validate:analytics
pnpm validate:architecture
```

---

# 78. Unit Tests

Unit tests should cover:

* Schemas
* Formatting
* Metadata creation
* Route helpers
* Product Status rules
* Error mapping
* Consent rules
* Analytics payload filtering
* Integration-response parsing
* Feature configuration

---

# 79. Component Tests

Component tests should cover:

* Buttons and links
* Forms
* Dialogs
* Tabs
* Accordions
* Navigation
* Audience switch
* Product Status badges
* Error states
* Consent controls
* RTL behavior
* Reduced motion

Tests should focus on user-observable behavior.

---

# 80. Integration Tests

Integration tests should cover:

* Server Action to application service
* Application service to mocked delivery adapter
* Public API adapter response validation
* Runtime-config allowlist
* Content compilation
* Route and page registry consistency
* Consent to analytics adapter
* Error-monitoring scrubbing

External services must be mocked or replaced with approved test environments.

---

# 81. End-to-End Tests

Required journeys include:

* Shared entry to Patient journey
* Shared entry to Provider journey
* Audience switching
* English and Arabic navigation
* RTL mobile navigation
* Contact submission
* Demo request
* Form validation
* Form-provider failure
* Consent acceptance and withdrawal
* Analytics blocked before consent
* Application handoff
* 404
* Error recovery
* Reduced motion
* Staging noindex verification

---

# 82. Architecture Tests

Architecture tests should detect:

* Client import of server-only module
* Component import of route module
* Vendor SDK imported outside adapter
* Direct analytics-provider calls
* Direct Recharts import outside chart module
* Hard-coded canonical routes
* Unsupported Product Status
* Missing Page ID
* Undocumented public API endpoint

Enforcement may use:

* ESLint restrictions
* Static scripts
* TypeScript
* Repository search checks

---

# 83. Continuous-Integration Architecture

## Pull Request

```text
Checkout
↓
Pin Node and pnpm
↓
Frozen dependency install
↓
Documentation validation
↓
Format check
↓
Lint
↓
Type check
↓
Static architecture validation
↓
Unit and component tests
↓
Content and translation validation
↓
Production build
↓
Accessibility tests
↓
Selected E2E tests
↓
Storybook build
↓
Docker build
↓
Security checks
```

## Main Branch

```text
All pull-request checks
↓
Full E2E and visual regression
↓
Immutable container build
↓
Container scan
↓
Push versioned image to GHCR
↓
Deploy image to staging
↓
Staging smoke and accessibility checks
↓
Approval gate
↓
Promote same image to production
↓
Production health checks
↓
Production smoke tests
↓
Retain previous image for rollback
```

---

# 84. Deployment Topology

The V1 deployment uses:

* One production server
* Host-managed Nginx
* Docker Compose-managed Next.js container
* Versioned images from GHCR
* Loopback-only application port
* TLS at Nginx
* Health-based deployment checks

```text
Internet
↓
Host Nginx :443
↓
127.0.0.1:<active-slot-port>
↓
Next.js standalone container
```

The application container must not expose its port publicly.

---

# 85. Infrastructure Repository Structure

```text
infra/
├── docker/
│   └── Dockerfile
│
├── compose/
│   ├── compose.staging.yml
│   └── compose.production.yml
│
├── nginx/
│   ├── site.conf.template
│   ├── security-headers.conf
│   └── cache.conf
│
├── deployment/
│   ├── deploy.sh
│   ├── rollback.sh
│   ├── switch-slot.sh
│   └── smoke-test.sh
│
└── README.md
```

Infrastructure scripts must be reviewed with the same care as application code.

---

# 86. Docker Architecture

The Docker image uses a multi-stage build:

```text
Base
↓
Dependencies
↓
Application build
↓
Standalone production runner
```

The production container must:

* Run as non-root
* Contain no development dependencies
* Contain no Git metadata
* Contain no secrets
* Expose one internal port
* Use a read-only filesystem where practical
* Write temporary data only to approved locations
* Include a container health check where practical

---

# 87. Nginx Architecture

Nginx is responsible for:

* TLS termination
* HTTPS redirect
* Request ID
* Proxy headers
* Static asset caching
* Request-size limits
* Rate limiting
* Security headers
* Staging noindex
* Proxying to the active application slot
* Access and error logging

Nginx must forward:

* Host
* Scheme
* Client IP chain
* Request ID

Forwarded-header trust must be configured safely.

---

# 88. Deployment Slots

V1 should support two logical deployment slots:

* Blue
* Green

Only one slot receives public traffic at a time.

Deployment sequence:

1. Determine inactive slot
2. Pull the approved image
3. Start inactive slot
4. Wait for readiness
5. Run smoke tests
6. Update Nginx upstream
7. Reload Nginx safely
8. Run production smoke tests
9. Retain previous slot temporarily
10. Stop previous slot after stabilization

This supports low-downtime deployment and rapid rollback.

---

# 89. Rollback Architecture

Rollback should:

1. Identify previous known-good image
2. Verify the previous slot remains healthy or restart it
3. Switch Nginx upstream
4. Reload Nginx
5. Run smoke tests
6. Record rollback reason
7. Preserve failed-release logs
8. Create a follow-up issue

Rollback must not require rebuilding the previous release.

---

# 90. Release Identity

Every image and deployment should expose:

* Application version
* Git commit SHA
* Build timestamp
* Release identifier
* Environment

The release identifier should appear in:

* Logs
* Health responses
* Error-monitoring context
* Deployment records

It should not dominate the public interface.

---

# 91. Staging Architecture

Staging should match production in:

* Node version
* Container image
* Nginx behavior
* Locale support
* Content structure
* Security headers
* Form integration shape
* Analytics consent behavior

Staging may use:

* Non-production delivery adapters
* Test analytics identifiers
* Restricted access
* Noindex headers
* Sandbox API endpoints

Staging must not use production clinical data.

---

# 92. Scaling Path

The V1 architecture uses one active application instance.

Future horizontal scaling requires:

* Shared rate limiting
* Shared cache strategy
* Coordinated revalidation
* Central logging
* Load balancing
* Multi-instance health checks
* Session strategy if authentication is later added
* Queue strategy if forms become asynchronous

The current modular structure should support scaling without changing page and component architecture.

---

# 93. CMS Adoption Path

A future CMS would implement a content adapter behind:

```text
src/lib/content/
```

Page components should depend on internal content models rather than MDX-specific APIs.

A CMS must not be introduced until:

* Editorial roles are defined
* Clinical review workflow is defined
* Arabic workflow is defined
* Preview security is defined
* Product Status governance is preserved
* Content versioning and rollback are available

---

# 94. Search Adoption Path

A future search system should consume a generated public-content index.

Search must not index:

* Drafts
* Restricted pages
* Application data
* Form content
* Clinical records
* Internal documentation

The search interface should remain independent of the eventual search provider.

---

# 95. Dependency Isolation

Vendor-specific code belongs only in adapter modules.

Examples:

```text
src/server/integrations/form-provider/
src/server/integrations/error-monitoring/
src/lib/analytics/providers/gtm.ts
```

Changing a vendor should not require editing page components.

---

# 96. Architecture Documentation Requirements

Every material architecture feature must document:

* Purpose
* Owner
* Data classification
* Trust boundary
* Dependencies
* Failure behavior
* Security requirements
* Privacy requirements
* Tests
* Operational requirements
* Rollback or exit strategy

---

# 97. Architecture Change Process

A material change requires:

1. Problem statement
2. Current limitation
3. Proposed architecture
4. Alternatives
5. Security impact
6. Privacy impact
7. Accessibility impact
8. Performance impact
9. Localization impact
10. Operational impact
11. Migration
12. Rollback
13. Approval
14. ADR
15. Documentation update

---

# 98. Material Architecture Changes

Examples include:

* New database
* Website authentication
* External CMS
* New deployment platform
* Multi-region deployment
* Message queue
* Horizontal scaling
* New public API
* Direct browser-to-backend integration
* Changing locale URL strategy
* Adding a CDN or WAF
* Replacing Next.js
* Introducing a second application
* Introducing an experimentation platform
* Collecting health information

---

# 99. Architecture Acceptance Criteria

The architecture is correctly implemented when:

## Boundaries

* Public website and clinical systems remain separated
* No direct SQL Server connection exists
* No clinical logic is duplicated
* Vendor SDKs remain behind adapters

## Rendering

* Public pages are static-first
* Server Components are the default
* Client boundaries are small and justified
* Essential content appears in initial HTML

## Content

* Runtime does not parse internal documentation
* Website content is validated
* Product Status has one controlled implementation
* Translation completeness is checked

## Integrations

* Forms pass through application services
* External responses are validated
* Timeouts and errors are controlled
* Mutations are not retried unsafely

## Security

* Secrets remain server-side
* Inputs are validated
* CSP and security headers are present
* Logs exclude sensitive content
* Public forms do not collect clinical data

## Analytics

* Consent is checked before analytics
* Events use the internal registry
* Sensitive values are rejected
* Direct provider calls are absent

## Deployment

* Standalone container builds
* Application port is not public
* Health checks work
* Blue-green switching works
* Rollback works
* Release identity is traceable

## Quality

* Architecture tests pass
* Accessibility tests pass
* E2E tests pass
* Content validation passes
* Staging remains noindex
* Performance budgets are respected

---

# 100. Rules for AI Agents

Before creating or modifying implementation architecture, AI agents must:

1. Read `docs/engineering/TECH_STACK.md`.
2. Read `docs/engineering/ARCHITECTURE.md`.
3. Identify the Page ID or feature.
4. Identify whether the code belongs to server or client.
5. Identify the correct module layer.
6. Search for an existing component, service, or adapter.
7. Check Product Status.
8. Check data classification.
9. Check localization and RTL.
10. Check accessibility.
11. Check analytics and consent.
12. Check error and failure behavior.
13. Add or update tests.
14. Update architecture documentation when boundaries change.

AI agents must not:

* Place integration logic in page components
* Mark entire pages as Client Components without need
* Import server modules into Client Components
* Parse internal documentation at runtime
* Hard-code routes in arbitrary components
* Duplicate Product Status
* Call analytics providers directly
* Call external services directly from UI components
* connect to SQL Server
* create a public API without approval
* add a database
* add authentication
* add a CMS
* collect clinical data
* expose runtime secrets
* weaken validation to complete a task
* bypass the adapter layer
* introduce persistent infrastructure without an ADR
* change deployment topology without approval

---

# 101. Locked Architecture Decisions

The following decisions are locked unless formally changed:

1. The website uses a dedicated single-application repository.
2. The architecture is a modular monolith.
3. There is one Next.js deployable application.
4. Patient and Provider journeys share one application.
5. Public pages are static-first.
6. Server Components are the default.
7. Client boundaries must remain small.
8. Routes map to stable Page IDs.
9. The typed route registry implements approved Information Architecture.
10. Localized public pages use an internal top-level `[locale]` segment.
11. Locale behavior is centralized through `next-intl`.
12. `src/proxy.ts` handles locale negotiation.
13. Internal documentation is not parsed at runtime.
14. Published content lives under `src/content`.
15. Long-form content uses controlled MDX.
16. Structured content uses typed validated data.
17. Product Status has one controlled code representation.
18. External integrations use adapters.
19. Pages and components do not import vendor SDKs directly.
20. Native Fetch is used behind integration clients.
21. Server Actions handle same-origin public-form mutations.
22. Route Handlers handle health, runtime config, and machine endpoints.
23. The website does not connect directly to SQL Server.
24. The website does not own a database in V1.
25. The website does not own authentication in V1.
26. Public forms do not collect clinical information.
27. V1 form delivery is synchronous.
28. Consent controls analytics initialization.
29. Analytics uses an internal typed wrapper.
30. Analytics payloads are filtered for sensitive data.
31. Recharts is isolated behind ODRISC chart components.
32. V1 content invalidation occurs through deployment.
33. Request-time ISR is not required in V1.
34. Immutable static assets may be cached long term.
35. Health, runtime-config, and form responses use no-store behavior.
36. Server configuration is schema validated.
37. Environment-varying public configuration is exposed through an allowlisted runtime endpoint.
38. `NEXT_PUBLIC_*` use remains minimal.
39. Structured Pino logs are used.
40. Request IDs propagate through the system.
41. CSP and security headers are required.
42. Staging uses layered noindex controls.
43. The production application runs in a Docker container.
44. Nginx is host managed in V1.
45. Docker Compose manages application containers.
46. The application container is bound to loopback only.
47. Production supports blue and green deployment slots.
48. The same immutable image is promoted from staging to production.
49. Rollback uses a previously built image.
50. Architecture boundaries are enforced through tests and linting.
51. Vendor-specific code remains replaceable.
52. Material architecture changes require an ADR.

---

# 102. Remaining Architecture Questions

The following remain unresolved:

* What is the final public locale-prefix policy?
* Are public pathnames translated into Arabic or only locale prefixed?
* Which pages must be translated for the first Qatar release?
* Which service receives general enquiries?
* Which service receives Provider demonstration requests?
* Is form delivery email-based, CRM-based, or API-based?
* Is a persistent form queue required after launch?
* Is Cloudflare used at the edge?
* What production Linux distribution is used?
* What exact ports are allocated to blue and green slots?
* Does the server already use host-level Docker Compose conventions?
* Which error-monitoring provider is approved?
* Is OpenTelemetry included in V1?
* Which ODRISC public API endpoints are available?
* Is an OpenAPI document available?
* Which application-handoff domains are approved?
* Is the risk assessment embedded or externally linked?
* Which Product Status values are public at launch?
* Which runtime configuration values are needed by the browser?
* Is a nonce-based CSP required for GTM?
* Which analytics events are permitted before explicit analytics consent, if any?
* What retention applies to operational form submissions?
* Which rate-limit thresholds are approved?
* Is Turnstile required at launch or only after abuse appears?
* Which Storybook environment is used?
* Which architecture tests are release blocking?
* What is the exact blue-green Nginx-switch mechanism?
* How long is the previous deployment slot retained?
* Who owns production incident response?
* Who approves architecture changes?

These questions must remain in:

`docs/project/OPEN_QUESTIONS.md`

---

# 103. Foundational Architecture Summary

The ODRISC public website is a static-first, server-first modular monolith.

Its architecture is:

```text
Repository-controlled content
↓
Validated Page IDs, routes, Product Status, and translations
↓
Next.js App Router and Server Components
↓
Small accessible Client Component boundaries
↓
ODRISC design-system and motion components
↓
Application services
↓
Replaceable external-service adapters
↓
Approved ODRISC APIs and delivery services
↓
Standalone Docker deployment
↓
Host Nginx
↓
Blue-green low-downtime release and rollback
```

The architecture keeps the public website:

* Separate from clinical data
* Separate from application authentication
* Searchable
* Accessible
* Localization-ready
* Product-status accurate
* Secure
* Portable
* Testable
* Maintainable by human and AI contributors
* Capable of future growth without premature infrastructure complexity

---

# 104. Source-Code Enforcement

Architectural boundaries must be reinforced through:

- TypeScript path aliases
- `server-only`
- ESLint restricted imports
- Content and route validation scripts
- Component and integration tests
- Code review
- Coding Standards

Passing runtime behavior does not justify violating a module boundary.

---

# 105. Test Source Architecture

Unit and component tests may be colocated with the source modules they verify.

Cross-module integration, contract, end-to-end, visual, accessibility, fixture,
and smoke-test assets live under `tests/`.

This preserves local discoverability while keeping environment-level test
infrastructure centralized.

Async Server Components are verified through extracted unit-testable logic,
content and service contracts, production builds, and Playwright route tests.
They must not be converted into Client Components to simplify testing.