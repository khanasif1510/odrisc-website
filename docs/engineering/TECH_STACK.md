# ODRISC Public Website Technology Stack

## Document Status

**Document:** Technology Stack
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical technology-selection and dependency-policy document
**System:** ODRISC public website
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Technical owner:** CTO
**Approval authority:** Founder and CTO with designated product, security, privacy, design, accessibility, localization, DevOps, and engineering reviewers

## Related Documents

- `PROJECT_CONTEXT.md`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/project/SOURCE_OF_TRUTH.md`
- `docs/project/ASSUMPTIONS.md`
- `docs/project/OPEN_QUESTIONS.md`
- `docs/project/GLOSSARY.md`
- `docs/product/PRODUCT_VISION.md`
- `docs/product/AUDIENCE.md`
- `docs/product/WEBSITE_OBJECTIVES.md`
- `docs/product/WEBSITE_STORY.md`
- `docs/product/PRD.md`
- `docs/product/PRODUCT_STATUS.md`
- `docs/product/INFORMATION_ARCHITECTURE.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/product/ROUTE_REGISTRY.md`
- `docs/product/REQUIREMENTS_TRACEABILITY.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/CODING_STANDARDS.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `docs/engineering/DEPENDENCY_POLICY.md`
- `docs/engineering/ENVIRONMENT_VARIABLES.md`
- `docs/engineering/PERFORMANCE_BUDGET.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

The canonical repository, rendering, module, content, integration, security-boundary, deployment, and rollback architecture is defined in:

`docs/engineering/ARCHITECTURE.md`

---

# 1. Purpose

This document defines the approved technology stack for the ODRISC public website at:

`odrisc.com`

It establishes:

- Runtime
- Package manager
- Web framework
- Rendering model
- Programming language
- Styling system
- Design-token implementation
- Component primitives
- Motion library
- Content system
- Localization
- Forms
- API integration
- Analytics
- Consent
- SEO
- Image and media handling
- Testing
- Accessibility tooling
- Security tooling
- Logging and observability
- Hosting
- Containerization
- Continuous integration
- Deployment
- Dependency governance
- Versioning
- Technology-selection rules
- Prohibited and deferred technologies

This document exists so that human contributors and AI coding agents implement one coherent website rather than introducing different frameworks, libraries, deployment patterns, or overlapping tools.

---

# 2. Scope Boundary

This Technology Stack applies to the public ODRISC website.

It does not define the complete technology stack of:

- The ODRISC Patient application
- The ODRISC Provider platform
- Existing `.NET 6` REST APIs
- Existing SQL Server databases
- Clinical intelligence engines
- Maternal-intelligence algorithms
- Fetal-growth intelligence algorithms
- OCR processing
- FHIR integrations
- Hospital integrations
- Internal administration systems
- Native Android or iOS applications
- Capacitor or Flutter applications

The public website may integrate with approved ODRISC application services through controlled APIs and handoff links.

It must not directly duplicate clinical logic or directly connect to the production clinical database.

---

# 3. Technology Objectives

The stack must support:

- One public website
- One ODRISC brand
- Patient and Provider journeys
- Search-engine discoverability
- Static-first rendering
- Excellent mobile performance
- English and Arabic
- Right-to-left layouts
- Accessible components
- Purposeful animation
- Typed design tokens
- Git-based content governance
- Product-status transparency
- Secure forms
- Analytics with consent
- Self-hosted deployment
- Existing ODRISC `.NET` services
- Future headless-CMS integration
- Future GCC market expansion
- Multiple AI coding agents
- Maintainable automated testing

---

# 4. Stack Principles

## 4.1 Static Before Dynamic

Most public pages should be generated as static content.

Dynamic server execution should be used only when required for:

- Forms
- Market or locale resolution
- Approved external integrations
- Preview workflows
- Controlled content revalidation
- Authentication handoff
- Time-sensitive content

## 4.2 Server Before Client

React Server Components should be the default.

Client Components should be introduced only for:

- User interaction
- Browser-only APIs
- Motion
- Forms requiring client state
- Local preferences
- Interactive charts
- Audience controls
- Consent management

## 4.3 Native Platform Before Dependency

Prefer:

- Semantic HTML
- CSS
- Browser APIs
- React
- Next.js
- `Intl`
- Native `fetch`
- Native form behavior

before introducing an external package.

## 4.4 Accessibility Before Convenience

A library must not be selected solely because it produces components quickly.

It must support:

- Keyboard interaction
- Focus management
- Screen-reader semantics
- Touch interaction
- Reduced motion
- RTL
- Accessible states

## 4.5 Privacy Before Measurement

Analytics and monitoring must not collect:

- Health-assessment answers
- Symptoms
- Patient history
- Risk category linked to identity
- Clinical report content
- Form-message content
- Identifiable maternal or fetal information

## 4.6 Portability Before Platform Lock-In

The website must be deployable to:

- ODRISC-managed infrastructure
- A standard Linux server
- Docker
- A compatible managed container platform

Core functionality must not depend exclusively on one commercial hosting vendor.

## 4.7 Fewer Dependencies Before More Features

Every new dependency increases:

- Security exposure
- Bundle size
- Upgrade cost
- AI-agent confusion
- Maintenance burden
- Licensing obligations

A package should be introduced only when it solves a documented need better than the existing stack.

---

# 5. Approved Stack Summary

| Layer                     | Approved technology                                         | Major version or policy   |
| ------------------------- | ----------------------------------------------------------- | ------------------------- |
| Runtime                   | Node.js                                                     | 24 LTS                    |
| Package manager           | pnpm                                                        | 11                        |
| Framework                 | Next.js                                                     | 16                        |
| Routing                   | Next.js App Router                                          | Required                  |
| UI runtime                | React                                                       | 19.2                      |
| Language                  | TypeScript                                                  | 6.x                       |
| Styling                   | Tailwind CSS                                                | 4                         |
| Design tokens             | CSS custom properties plus typed token exports              | Required                  |
| Component primitives      | Radix Primitives                                            | Compatible stable release |
| Component scaffolding     | shadcn-style source components                              | Controlled use only       |
| Icons                     | Lucide React                                                | Compatible stable release |
| Motion                    | Motion for React                                            | 12                        |
| Localization              | next-intl                                                   | 4                         |
| Content                   | Repository-controlled MDX and typed data                    | V1                        |
| Schema validation         | Zod                                                         | 4                         |
| Forms                     | Native HTML, React where needed, server-side processing     | Required                  |
| API transport             | Native Fetch API                                            | Required                  |
| API typing                | OpenAPI-generated or manually governed TypeScript contracts | Required                  |
| Analytics                 | Google Analytics 4 through Google Tag Manager               | Consent controlled        |
| Consent                   | CMP-compatible consent layer and Google Consent Mode        | Required                  |
| Search monitoring         | Google Search Console                                       | Required                  |
| Unit testing              | Vitest                                                      | Current compatible stable |
| Component testing         | React Testing Library                                       | Current compatible stable |
| End-to-end testing        | Playwright                                                  | Current compatible stable |
| Accessibility automation  | Axe through Playwright                                      | Required                  |
| Component documentation   | Storybook                                                   | Current compatible stable |
| Linting                   | ESLint flat configuration                                   | Required                  |
| Formatting                | Prettier                                                    | Required                  |
| Containerization          | Docker                                                      | Required                  |
| Production output         | Next.js standalone output                                   | Required                  |
| Reverse proxy             | Nginx                                                       | V1 production default     |
| CI/CD                     | GitHub Actions                                              | Required                  |
| Container registry        | GitHub Container Registry                                   | Preferred                 |
| Error logging             | Structured server logs                                      | Required                  |
| External error monitoring | Provider adapter; final vendor pending                      | Conditional               |
| Database                  | None inside public website                                  | V1                        |
| Authentication            | None inside public website                                  | V1                        |
| CMS                       | No external CMS                                             | V1                        |
| Dark mode                 | Not included                                                | V1                        |

---

# 6. Runtime

## 6.1 Approved Runtime

```text
Node.js 24 LTS
```

Production, development, CI, and Docker must use the same Node major version.

## 6.2 Version Files

The repository should contain:

```text
.node-version
```

with:

```text
24
```

It may also contain:

```text
.nvmrc
```

with:

```text
24
```

## 6.3 Version Consistency

The Node version must be declared in:

- `.node-version`
- `.nvmrc`, when retained
- `package.json`
- Dockerfile
- GitHub Actions
- Deployment documentation

Example:

```json
{
  "engines": {
    "node": ">=24 <25"
  }
}
```

## 6.4 Runtime Restrictions

Do not:

- Use an end-of-life Node version
- Use different Node majors between CI and production
- Depend on globally installed packages
- Use experimental Node features without approval
- Install runtime dependencies outside the lockfile

---

# 7. Package Manager

## 7.1 Approved Package Manager

```text
pnpm 11
```

## 7.2 Package-Manager Declaration

`package.json` must contain an exact package-manager version:

```json
{
  "packageManager": "pnpm@11.x.x"
}
```

The exact approved patch must be pinned when the repository is initialized or upgraded.

## 7.3 Lockfile

The canonical dependency lockfile is:

```text
pnpm-lock.yaml
```

It must be committed.

CI and production builds must use:

```bash
pnpm install --frozen-lockfile
```

## 7.4 Prohibited Package Managers

Do not commit:

- `package-lock.json`
- `yarn.lock`
- `bun.lock`
- `bun.lockb`

unless the technology decision is formally changed.

The repository must not mix package managers.

---

# 8. Web Framework

## 8.1 Approved Framework

```text
Next.js 16
```

## 8.2 Approved Router

```text
App Router
```

The Pages Router must not be introduced for new public website work.

## 8.3 Framework Responsibilities

Next.js will provide:

- Routing
- Layouts
- Metadata
- Server Components
- Client Components
- Static generation
- Server rendering where required
- Route Handlers
- Server Actions where approved
- Image optimization
- Font optimization
- Sitemap generation
- Robots configuration
- Open Graph image generation
- Error boundaries
- Not-found behavior
- Standalone production output

## 8.4 Framework Restrictions

Do not introduce:

- A second React framework
- A second routing system
- A custom Express server
- A custom Next.js server
- Create React App
- Vite as the application framework
- Gatsby
- Remix
- Astro
- Nuxt
- Angular

without an approved architecture decision.

Vite remains permissible indirectly through Vitest and Storybook tooling.

---

# 9. React

## 9.1 Approved Version

```text
React 19.2
```

## 9.2 Component Policy

React Server Components are the default.

Add:

```text
"use client"
```

only when the component genuinely requires:

- State
- Effects
- Event handlers
- Browser APIs
- Motion
- Interactive Radix primitives
- Client-side validation
- Consent state

## 9.3 Client-Boundary Policy

Client boundaries should remain as small as practical.

Avoid turning an entire page into a Client Component because one child requires interaction.

## 9.4 React Restrictions

Do not introduce:

- Class components
- Legacy context
- Deprecated lifecycle methods
- Direct DOM manipulation when React or browser semantics suffice
- Client-side data fetching for content available during server rendering
- Global React state without documented need

---

# 10. TypeScript

## 10.1 Approved Language

All application code must use TypeScript.

JavaScript files are permitted only for:

- Tooling that does not support TypeScript
- Generated files
- Controlled third-party configuration
- Migration scripts with documented justification

## 10.2 Version

```text
TypeScript 6.x
```

The exact patch must be pinned.

If a critical framework or tool incompatibility is discovered, temporary use of TypeScript 5.9 requires a documented exception and migration issue.

## 10.3 Strictness

The project must use strict TypeScript settings.

Required intent:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "useUnknownInCatchVariables": true
  }
}
```

Final configuration must remain compatible with Next.js.

## 10.4 Type Rules

Do not:

- Use `any` without an inline justification
- Cast untrusted data without validation
- Duplicate API types manually when a canonical contract exists
- Use enums when string unions or `as const` objects are clearer
- Suppress type errors to complete an implementation quickly

## 10.5 Type Checking

CI must run:

```bash
pnpm typecheck
```

separately from the production build.

---

# 11. Rendering Strategy

## 11.1 Static-First Pages

The following should normally be statically generated:

- Shared entry
- Patient pages
- Provider pages
- About
- Validation
- Methodology
- Resources
- FAQs
- Legal pages
- Accessibility statement

## 11.2 Dynamic Rendering

Dynamic rendering should be used only when a page requires:

- Request-specific locale or market behavior
- Secure form processing
- Draft preview
- Approved integration data
- Authentication-aware handoff
- Current external information

## 11.3 Revalidation

Content should normally change through:

- Git commit
- CI build
- Deployment

On-demand or time-based revalidation may be introduced when:

- A CMS is approved
- Product Status must update without full deployment
- Resources require editorial publishing
- Pricing requires controlled rapid updates

## 11.4 Client-Side Rendering

Client-side rendering must not be the default for public content.

Important Patient, Provider, SEO, and trust content must be present in the initial server response.

---

# 12. Project Structure

Recommended source structure:

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── patients/
│   │   ├── providers/
│   │   ├── resources/
│   │   ├── about/
│   │   └── ...
│   ├── api/
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   ├── opengraph-image.tsx
│   └── layout.tsx
│
├── components/
│   ├── primitives/
│   ├── ui/
│   ├── navigation/
│   ├── content/
│   ├── patient/
│   ├── provider/
│   ├── data-visualization/
│   ├── motion/
│   └── forms/
│
├── content/
│   ├── pages/
│   ├── resources/
│   ├── translations/
│   └── data/
│
├── design-system/
│   ├── tokens/
│   ├── styles/
│   └── utilities/
│
├── i18n/
├── lib/
│   ├── analytics/
│   ├── api/
│   ├── consent/
│   ├── content/
│   ├── forms/
│   ├── logging/
│   ├── seo/
│   ├── security/
│   └── validation/
│
├── server/
│   ├── actions/
│   ├── integrations/
│   └── repositories/
│
├── tests/
└── types/
```

The final folder structure will be governed by:

`docs/engineering/ARCHITECTURE.md`

Public URLs must not be inferred directly from folders without checking Information Architecture.

---

# 13. Styling System

## 13.1 Approved Styling Technology

```text
Tailwind CSS 4
```

## 13.2 Tailwind Responsibility

Tailwind will provide:

- Utility classes
- Responsive variants
- State variants
- Layout
- Typography utilities
- Spacing
- Borders
- Surfaces
- Controlled design-token consumption

## 13.3 Design Tokens

The Design System remains the source of truth.

Tokens must be represented through CSS custom properties, for example:

```css
:root {
  --od-color-brand-coral: #ff7680;
  --od-color-brand-mint: #80ffcc;
  --od-color-text-primary: #4d4d4d;
  --od-space-4: 1rem;
  --od-radius-lg: 1rem;
}
```

Tailwind theme values must reference the same variables.

## 13.4 CSS Policy

Use:

- Tailwind utilities
- CSS custom properties
- CSS Modules only where component-specific complex styles justify them
- Global CSS for tokens, reset, typography, and foundational utilities

Avoid:

- Styled Components
- Emotion
- Runtime CSS-in-JS
- Sass unless an approved requirement appears
- Inline style objects for static design values
- Arbitrary Tailwind values when a token exists

## 13.5 Class Composition

Approved utilities:

- `clsx`
- `tailwind-merge`
- `class-variance-authority`

Use variants only for documented component differences.

---

# 14. Typography and Fonts

Use Next.js font optimization.

Approved font families:

- Inter
- Noto Sans Arabic

Font loading must:

- Be self-hosted through the build output
- Avoid runtime requests to third-party font services
- Include only approved weights
- Provide fallback metrics
- Avoid layout shift
- Apply the correct font by locale

Do not commit separate font files without confirming licensing and repository policy.

---

# 15. Component Primitives

## 15.1 Approved Primitive Library

```text
Radix Primitives
```

Radix should be used where it materially improves:

- Keyboard navigation
- Focus management
- Dialogs
- Menus
- Tabs
- Accordions
- Popovers
- Tooltips
- Select controls
- Accessible overlays

## 15.2 Custom ODRISC Components

ODRISC visual styling must be applied through custom components and design tokens.

Radix default styling must not define the ODRISC brand.

## 15.3 shadcn-Style Components

shadcn-style source components may be used as implementation scaffolding.

Rules:

- Components become repository-owned source code
- They must be adapted to ODRISC tokens
- Unused variants must be removed
- Accessibility behavior must be verified
- The source must not override the Design System
- Registry components must not be installed blindly

## 15.4 Component Duplication

Before adding a component:

1. Search the Component Library
2. Search existing source
3. Check whether a primitive already exists
4. Document why a new component is required

---

# 16. Icon System

Approved package:

```text
lucide-react
```

Rules:

- Import icons individually
- Do not import the complete icon set
- Use approved sizes and stroke treatment
- Important icons require text labels
- Directional icons must support RTL
- Custom clinical concepts may require controlled original icons
- Do not add a second general icon library

---

# 17. Motion

## 17.1 Approved Motion Library

```text
Motion for React 12
```

Import from:

```ts
import { motion } from "motion/react";
```

CSS transitions should handle simple self-contained effects. Motion for React should handle narrative sequences, SVG animation, viewport-triggered behavior, and complex state transitions.

No second general-purpose animation library may be introduced without approval.

## 17.2 Motion Responsibilities

Use Motion for:

- Narrative sequences
- SVG line drawing
- Controlled layout transitions
- Scroll-triggered reveals
- Audience interactions
- Timeline progression
- Complex component transitions

Use CSS transitions for:

- Color changes
- Border changes
- Simple hover states
- Focus-adjacent visual feedback
- Small opacity transitions

## 17.3 Motion Restrictions

Do not add:

- GSAP
- Anime.js
- AOS
- React Spring
- Multiple overlapping motion libraries

Lottie remains unapproved for V1 unless a Motion Specification and dependency review justify it.

## 17.4 Bundle Control

Use:

- `LazyMotion` where beneficial
- Small client boundaries
- Reduced-motion checks
- Shared motion primitives
- No continuous offscreen animation

All motion must comply with:

`docs/design/ANIMATION_GUIDELINES.md`

---

# 18. Localization

## 18.1 Approved Library

```text
next-intl 4
```

## 18.2 Supported Initial Locales

The technical system must support:

```text
en
ar
```

Additional locales may later include:

- `hi`
- Other approved GCC or India languages

## 18.3 Locale Routing

The exact public locale-prefix strategy remains governed by:

- Information Architecture
- SEO requirements
- Market strategy
- The final localization ADR

The implementation must support a top-level locale segment without embedding English strings in route components.

## 18.4 Translation Storage

V1 translations should be stored in the repository:

```text
src/content/translations/en/
src/content/translations/ar/
```

or:

```text
messages/en.json
messages/ar.json
```

The final structure will be defined in Engineering Architecture.

## 18.5 Formatting

Use `next-intl` and standard `Intl` APIs for:

- Dates
- Numbers
- Percentages
- Currency
- Units
- Pluralization
- List formatting
- Relative time where approved

## 18.6 RTL

RTL behavior must be driven by locale.

Do not create a separate Arabic component tree unless an approved component genuinely requires it.

---

# 19. Content System

## 19.1 V1 Content Model

The V1 website will use repository-controlled content.

Content sources:

- MDX for long-form page and resource content
- TypeScript or JSON for structured site data
- Translation files for localized interface copy
- Approved static assets for images and diagrams

## 19.2 Approved MDX Integration

Use:

```text
@next/mdx
```

MDX may be used for:

- Resources
- Clinical briefs
- Evidence summaries
- Methodology notes
- Founder perspectives
- Long-form content sections

## 19.3 MDX Restrictions

MDX content must be treated as trusted repository content.

Do not allow arbitrary public users to submit MDX.

Do not permit unrestricted JavaScript execution from an external CMS.

## 19.4 Structured Content

The following should use typed structured data rather than repeated prose:

- Product Status
- Team members
- Contributors
- Routes
- Navigation
- FAQs
- Pricing
- Market availability
- Contact categories
- Evidence metadata
- Resource metadata
- Validation categories

## 19.5 No External CMS in V1

No external CMS is required for the initial website release.

Reasons:

- Repository documentation is the current source of truth
- Content requires controlled review
- Clinical claims need traceability
- Product Status must remain governed
- The initial content team is limited
- The website must remain portable

## 19.6 CMS Adoption Threshold

A headless CMS may be evaluated when:

- Non-technical editors publish regularly
- Content volume materially increases
- Arabic publication needs independent workflows
- Draft previews become operationally necessary
- Multiple approvers require role-based publishing
- Deployment-based content updates become a bottleneck

CMS selection requires a separate ADR.

---

# 20. Content Validation

All structured content must be validated through Zod.

Approved validation library:

```text
Zod 4
```

Validate:

- Environment variables
- Form submissions
- Content metadata
- Product Status entries
- Navigation data
- Pricing
- Team data
- API responses at trust boundaries
- Analytics event payloads

Untrusted external data must never be cast directly to a TypeScript type.

---

# 21. State Management

## 21.1 Default State Strategy

Use:

- Server Components for server data
- URL parameters for shareable filters and navigation state
- React state for local interaction
- Context only for stable cross-tree UI concerns
- Cookies only for approved preferences
- Server-side session state only when later required

## 21.2 No Global State Library in V1

Do not introduce:

- Redux
- MobX
- Zustand
- Recoil
- Jotai
- XState

for the initial public website.

A global-state library requires a demonstrated cross-page or complex workflow need.

## 21.3 Appropriate Context Uses

React Context may be used for:

- Locale
- Consent
- Audience preference
- Motion preference
- Theme foundations, despite V1 having no dark mode

Context must not become a general application-data store.

---

# 22. API Integration

## 22.1 Existing ODRISC Services

The public website may integrate with existing ODRISC `.NET 6` REST APIs.

Approved examples:

- Patient application handoff
- Provider access handoff
- Risk-assessment initiation
- Product availability
- Approved registration workflows
- Contact or lead delivery
- Market availability

## 22.2 Integration Boundary

The Next.js website must not directly access:

- SQL Server
- Clinical tables
- Patient records
- Fetal records
- Internal administrative tables
- Private application secrets

All operational data access must pass through an approved API or integration adapter.

## 22.3 HTTP Client

Use the native Fetch API.

Do not add Axios by default.

## 22.4 API Contracts

Preferred contract approaches:

1. OpenAPI-generated TypeScript types
2. Approved shared schema package
3. Manually maintained typed contract with Zod validation

The website must not silently infer unstable backend response shapes.

## 22.5 API Client Architecture

API access should be centralized:

```text
src/lib/api/
├── client.ts
├── contracts/
├── errors.ts
├── patient.ts
├── provider.ts
└── public.ts
```

## 22.6 Timeouts and Errors

External requests must define:

- Timeout
- Retry policy
- Error mapping
- Logging
- User-safe fallback
- Sensitive-data handling

Retries must not duplicate non-idempotent actions.

---

# 23. Public Forms

## 23.1 Form Technologies

Use:

- Semantic HTML forms
- Native browser behavior
- React-enhanced interactions where needed
- Zod validation
- Next.js Server Actions or Route Handlers
- Server-side delivery adapters

## 23.2 React Form Library

A dedicated form-state library is not mandatory for simple forms.

`react-hook-form` may be introduced for:

- Complex conditional forms
- Multi-step forms
- Many validation states
- Controlled dynamic fields

It must not be added merely for a basic contact form.

## 23.3 Form Destinations

Form processing must use an adapter so the destination may be:

- Approved email service
- Existing ODRISC API
- CRM
- Ticketing system
- Secure database service, if later approved

UI components must not depend directly on one vendor.

## 23.4 Anti-Abuse

Initial anti-abuse measures:

- Honeypot field
- Server-side rate limiting
- Request-size limits
- Origin validation
- Input normalization
- Logging of abuse without sensitive content

Cloudflare Turnstile or another challenge may be introduced if abuse requires it.

## 23.5 Form Restrictions

Public forms must not request:

- Patient reports
- Symptoms
- Medical histories
- Ultrasound data
- Clinical risk answers
- Identifiable maternal or fetal information

## 23.6 Submission Requirements

Every form must provide:

- Loading state
- Success state
- Error state
- Duplicate-submission protection
- Accessible error summary
- Privacy explanation
- Operational owner
- Delivery monitoring

---

# 24. Analytics

## 24.1 Approved Analytics Stack

- Google Tag Manager
- Google Analytics 4
- Google Search Console

## 24.2 Analytics Abstraction

All website events must be sent through an internal analytics wrapper.

Example:

```text
src/lib/analytics/
├── events.ts
├── provider.ts
├── consent.ts
└── types.ts
```

Components must not call `dataLayer.push` directly.

## 24.3 Consent

Analytics must not run beyond legally permitted defaults until the relevant consent state is known.

The implementation must support:

- Default consent state
- Consent update
- Analytics storage
- Advertising storage, normally denied unless explicitly needed
- Preference storage
- Consent withdrawal

## 24.4 Prohibited Analytics Data

Do not send:

- Names
- Emails
- Phone numbers
- Form messages
- Medical information
- Risk answers
- Risk categories linked to identity
- Patient IDs
- Provider-entered Patient information
- Ultrasound values
- Pregnancy week linked to identity

## 24.5 Event Registry

Every analytics event must be documented in an Analytics Specification.

Event names must remain stable when visible CTA wording changes.

---

# 25. Consent Management

## 25.1 Consent Layer

The application must expose a provider-neutral consent interface.

The final CMP vendor remains subject to legal and operational approval.

## 25.2 Consent Categories

Initial categories:

- Essential
- Preferences
- Analytics
- Marketing, only when actually used

## 25.3 Requirements

Consent must:

- Be accessible
- Be localized
- Support Arabic
- Be withdrawable
- Be stored with an approved duration
- Block non-essential scripts where required
- Integrate with Google Consent Mode
- Avoid dark patterns

---

# 26. SEO Technology

Use Next.js Metadata APIs for:

- Page titles
- Meta descriptions
- Canonical URLs
- Alternates
- Hreflang
- Robots directives
- Open Graph
- Social metadata
- App icons
- Verification metadata

Generate:

- `sitemap.xml`
- `robots.txt`
- Structured data
- Breadcrumb structured data
- Organization structured data
- Article structured data
- FAQ structured data where eligible

Structured data must be produced through typed helpers rather than scattered string templates.

---

# 27. Open Graph Images

Use Next.js image-generation capabilities for controlled Open Graph assets.

Templates may vary by:

- Shared page
- Patient page
- Provider page
- Resource
- Validation or methodology content

Open Graph generation must use:

- Approved fonts
- Approved colors
- Approved logo assets
- Page title
- Audience label where useful
- No unsupported claims

---

# 28. Images

## 28.1 Approved Image Component

Use:

```text
next/image
```

for responsive content images where appropriate.

## 28.2 Image Formats

Preferred:

- AVIF
- WebP
- SVG for approved vectors
- PNG only where transparency or source quality requires it
- JPEG for suitable photography when modern alternatives are unavailable

## 28.3 Remote Images

Remote image hosts must be explicitly allow-listed.

Do not permit unrestricted remote image domains.

## 28.4 SVG

SVG is appropriate for:

- Icons
- Diagrams
- Illustrations
- Logos
- Timelines
- Accessible data visualization

Untrusted SVG content must not be rendered directly.

## 28.5 Product Data

No public image may contain identifiable patient or clinical data.

---

# 29. Video

V1 should use video sparingly.

Requirements:

- No autoplay sound
- Captions
- Transcript
- Poster image
- Pause control
- Reduced-motion consideration
- Optimized delivery
- No essential information available only in video

Large videos should not be stored in the Git repository unless specifically approved.

---

# 30. Data Visualization

## 30.1 V1 Approach

Public website charts should use:

- Accessible SVG
- ODRISC chart tokens
- Typed chart data
- Text summaries
- Stable scales
- Explicit units
- Clinical-reviewable rendering

## 30.2 Chart Library

The initial approved charting implementation is:

```text
Recharts
```

It may be used for public explanatory charts and product previews.

Every chart must be wrapped in ODRISC components that provide:

- Accessible summary
- Semantic title
- Unit
- Legend
- Product-status label where needed
- Reduced-motion behavior
- RTL review
- Data-source explanation

## 30.3 Clinical Product Boundary

The charting choice for the public website does not automatically govern clinical charts inside the Provider application.

## 30.4 Chart Restrictions

Do not:

- Use 3D charts
- Hide axes when clinically relevant
- Animate exact clinical numbers through count-up effects
- Apply unexplained smoothing
- Use brand gradients as clinical scales
- Depend on tooltip-only values
- present fictional data as real patient data

---

# 31. Component Documentation

Use Storybook for:

- Design-system components
- Variants
- States
- Patient and Provider density
- Responsive examples
- RTL examples
- Accessibility testing
- Motion examples
- Product Status examples
- Error and loading states

Storybook is an engineering and QA tool.

It is not the canonical source of design decisions.

The canonical sources remain:

- Brand Foundation
- Design System
- Animation Guidelines
- Component Library

---

# 32. Unit, Integration, and Component Testing

## 32.1 Approved Unit and Integration Test Runner

```text
Vitest
```

Vitest is the canonical runner for unit and integration tests.

## 32.2 Approved Component-Test Utilities

- React Testing Library
- `@testing-library/user-event`
- `@testing-library/jest-dom`

React Testing Library and User Event are the approved tools for testing React component behavior through accessible queries and user-oriented interactions. Jest DOM provides DOM-specific assertions.

## 32.3 Unit, Integration, and Component-Test Scope

Unit, integration, and component tests should cover:

- Content schemas
- Form schemas
- API error mapping
- Collaboration between first-party modules
- Analytics event construction
- Locale helpers
- SEO helpers
- Product-status rules
- Component behavior
- Formatting
- Route helpers

## 32.4 Testing Principle

Test behavior and contracts rather than internal implementation details.

## 32.5 Coverage Provider

Vitest uses the V8 coverage provider through:

```text
@vitest/coverage-v8
```

Coverage scope, exclusions, thresholds and enforcement requirements are defined in:

`docs/engineering/TESTING_STRATEGY.md`

---

# 33. Browser and End-to-End Testing

## 33.1 Approved Browser and E2E Framework

```text
Playwright
```

Playwright is the canonical runner for browser-dependent behavior, complete application journeys and end-to-end testing.

## 33.2 Required Browser Projects

At minimum:

- Chromium
- WebKit
- Firefox

Mobile emulation should include:

- Representative iPhone viewport
- Representative Android viewport

## 33.3 Required E2E Journeys

- Shared audience selection
- Audience switching
- Patient navigation
- Provider navigation
- Language switching
- Mobile navigation
- Contact submission
- Demo request
- Error recovery
- Consent selection
- Reduced-motion behavior
- 404 behavior
- CTA handoff
- Arabic RTL navigation

---

# 34. Accessibility Testing

Use:

- `@storybook/addon-a11y` for component and story accessibility checks
- `@axe-core/playwright` for page-level and journey-level accessibility checks

Both integrations use Axe for automated accessibility analysis.

Automated accessibility checks must run against:

- Shared entry
- Patient homepage
- Provider homepage
- Navigation open state
- Forms
- Dialogs
- Accordions
- Tabs
- Validation page
- Resource detail
- Arabic pages

Automated checks do not replace manual testing.

Manual review must include:

- Keyboard-only use
- Screen-reader basics
- Focus order
- Zoom and text scaling
- Touch targets
- Reduced motion
- Chart interpretation
- RTL

---

# 35. Visual Regression Testing

Use Playwright screenshot comparisons for selected stable pages and components.

Reference screenshots must be generated and compared in a controlled, consistent environment.

Initial visual-regression coverage:

- Shared entry
- Patient homepage
- Provider homepage
- Header
- Mobile menu
- Audience selector
- Buttons
- Forms
- Status badges
- Timelines
- RTL layouts

Visual tests must avoid unstable dynamic content.

---

# 36. Code Quality

## 36.1 Linting

The public website uses ESLint with flat configuration.

The canonical ESLint configuration file is:

```text
eslint.config.mjs
```

Linting must run through the ESLint command-line interface using the repository script:

```bash
pnpm lint
```

The `package.json` script must resolve to:

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings=0",
    "lint:fix": "eslint . --fix"
  }
}
```

Continuous integration must execute:

```bash
pnpm lint
```

Lint warnings are treated as failures. The website must maintain zero unresolved ESLint warnings in CI.

The following command is not used:

```bash
next lint
```

Linting is an explicit repository and CI responsibility rather than a Next.js build command.

## 36.2 Formatting

Prettier is the canonical formatter for the public website repository.

The canonical configuration file is:

```text
prettier.config.mjs
```

The repository must expose:

```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

Contributors use:

```bash
pnpm format
```

to apply formatting and:

```bash
pnpm format:check
```

to verify formatting without modifying files.

Continuous integration must run:

```bash
pnpm format:check
```

Prettier owns formatting decisions. ESLint owns code correctness, framework rules, accessibility, React Hooks, TypeScript quality, and architecture restrictions.

ESLint rules must not be used to enforce formatting rules that conflict with Prettier.

## 36.3 Import Policy

Use:

- Path aliases
- Clear module boundaries
- Type-only imports where appropriate
- No deep imports into another feature's private files

## 36.4 Pre-Commit Checks

Pre-commit hooks may use:

- `lint-staged`
- A lightweight Git-hook runner

Pre-commit checks must remain fast.

Full test suites belong in CI.

---

# 37. Security

## 37.1 Security Headers

The application must configure:

- Content Security Policy
- `X-Content-Type-Options`
- Referrer Policy
- Permissions Policy
- Frame restrictions
- HSTS at the production proxy
- Secure cookie attributes where relevant

## 37.2 Content Security Policy

CSP must be designed around the approved third-party services.

Do not weaken CSP broadly to support one script.

Avoid:

- `unsafe-eval`
- Unrestricted wildcard origins
- Unrestricted frame sources
- Unrestricted image sources

## 37.3 Secrets

Secrets must:

- Remain server-side
- Be excluded from Git
- Use environment variables or approved secret storage
- Never use a `NEXT_PUBLIC_` prefix unless exposure is intentional
- Be rotated after suspected exposure

## 37.4 Dependency Security

Use:

- Dependabot or equivalent update automation
- GitHub security advisories
- `pnpm audit` as a supporting signal
- Lockfile review
- Manual review for critical dependencies
- CodeQL where practical

Audit output must be assessed rather than ignored or blindly fixed.

## 37.5 Input Security

All server inputs require:

- Size limits
- Schema validation
- Normalization
- Safe error handling
- Rate limiting where appropriate
- Logging without sensitive payloads

---

# 38. Environment Variables

Environment variables must be validated at startup through Zod.

Categories:

- Public
- Server-only
- Build-time
- Runtime
- Optional
- Required

Example naming:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_GA_MEASUREMENT_ID
ODRISC_PUBLIC_API_BASE_URL
FORM_DELIVERY_PROVIDER
FORM_DELIVERY_SECRET
LOG_LEVEL
```

No real secrets may appear in:

- Documentation examples
- `.env.example`
- Tests
- Client bundles
- CI logs

The canonical variable registry belongs in:

`docs/engineering/ENVIRONMENT_VARIABLES.md`

---

# 39. Logging

## 39.1 Server Logging

Use structured JSON-compatible server logs.

Approved logger:

```text
Pino
```

## 39.2 Log Fields

Recommended fields:

- Timestamp
- Level
- Environment
- Request ID
- Route
- Operation
- Status
- Duration
- Error code
- Deployment version

## 39.3 Prohibited Log Content

Do not log:

- Form contents
- Medical information
- Risk answers
- Authentication tokens
- Cookies
- Passwords
- Email addresses by default
- Phone numbers
- Patient or clinical record identifiers

## 39.4 Client Logging

Client errors should be normalized and scrubbed before transmission to any monitoring provider.

---

# 40. Error Monitoring

The stack must expose a provider adapter for external error monitoring.

The final provider may be:

- Sentry
- An approved OpenTelemetry-compatible platform
- A self-hosted monitoring solution

The provider decision remains open pending:

- Privacy review
- Data-processing agreement
- Regional requirements
- Cost
- Server compatibility
- PII-scrubbing capability

The website must not couple application logic directly to one monitoring vendor.

---

# 41. Performance Monitoring

Measure:

- Largest Contentful Paint
- Interaction to Next Paint
- Cumulative Layout Shift
- Time to First Byte
- JavaScript bundle size
- Image weight
- Route response time
- Form-submission latency
- Third-party script impact

Performance data must not include health information.

---

# 42. Performance Budgets

Initial targets:

| Metric                                         |                                    Target |
| ---------------------------------------------- | ----------------------------------------: |
| Largest Contentful Paint                       |      ≤ 2.5 seconds at the 75th percentile |
| Interaction to Next Paint                      | ≤ 200 milliseconds at the 75th percentile |
| Cumulative Layout Shift                        |              ≤ 0.1 at the 75th percentile |
| Initial JavaScript for ordinary content pages  |                       ≤ 170 KB compressed |
| Initial JavaScript for animated or chart pages |                       ≤ 230 KB compressed |
| Individual optimized hero image                |                        ≤ 250 KB preferred |
| Individual non-hero content image              |                        ≤ 150 KB preferred |
| Third-party scripts before consent             |                            Essential only |
| Major narrative animations per page            |                    1 preferred, 3 maximum |

Final budgets are governed by:

`docs/engineering/PERFORMANCE_BUDGET.md`

---

# 43. Hosting Model

## 43.1 V1 Hosting Decision

The public website will be capable of self-hosted production deployment.

Approved production model:

```text
Internet
↓
DNS or approved CDN
↓
Nginx reverse proxy
↓
Next.js standalone Docker container
↓
Approved external services and ODRISC APIs
```

## 43.2 Next.js Output

Use:

```js
const nextConfig = {
  output: "standalone",
};
```

## 43.3 Reverse Proxy

Nginx responsibilities:

- TLS termination
- HTTP-to-HTTPS redirect
- Security headers where appropriate
- Compression
- Request-size limits
- Rate limiting where approved
- Proxying
- Health-check routing
- Static asset caching
- Access logging with privacy controls

## 43.4 Container Runtime

Use Docker.

Production must not rely on a globally installed Node process outside the container.

## 43.5 Managed Hosting

Vercel or another managed Next.js platform may be evaluated later.

Moving to a managed platform requires:

- Cost comparison
- Data and privacy review
- Deployment analysis
- Feature compatibility
- Rollback plan
- ADR approval

---

# 44. Docker

Use a multi-stage Docker build.

Recommended stages:

1. Base
2. Dependencies
3. Build
4. Production runner

Preferred base:

```text
node:24-bookworm-slim
```

The production image should contain:

- Standalone server output
- Required static files
- Required public assets
- Non-root runtime user
- No development dependencies
- No source-control metadata
- No secrets

Avoid Alpine unless compatibility and native-dependency behavior are verified.

---

# 45. Continuous Integration

## 45.1 Approved CI Platform

```text
GitHub Actions
```

## 45.2 Pull-Request Pipeline

Required checks:

1. Dependency installation with frozen lockfile
2. Format check
3. Lint
4. Type check
5. Unit tests
6. Component tests
7. Production build
8. Accessibility tests
9. Selected E2E tests
10. Dependency-security checks
11. Docker build validation where relevant

## 45.3 Main-Branch Pipeline

Required:

1. All pull-request checks
2. Full E2E suite
3. Container build
4. Container scan
5. Publish image
6. Deploy to staging
7. Smoke tests
8. Manual or approved production gate
9. Production deployment
10. Production smoke tests

## 45.4 Deployment Artifact

Build one immutable container image.

Promote the same image from staging to production.

Do not rebuild separately for production unless environment-independent reproducibility is guaranteed.

---

# 46. Deployment

## 46.1 Container Registry

Preferred:

```text
GitHub Container Registry
```

## 46.2 Deployment Version

Every deployment must expose:

- Git commit SHA
- Build timestamp
- Application version
- Environment

## 46.3 Health Checks

Required routes:

```text
/api/health/live
/api/health/ready
```

Health responses must not expose sensitive configuration.

## 46.4 Rollback

Production deployment must support rollback to the previous known-good image.

## 46.5 Zero- or Low-Downtime Deployment

Use:

- Health checks
- New-container readiness
- Proxy switch
- Previous-container retention
- Post-deployment smoke tests

The exact deployment orchestration will be defined in Engineering Architecture.

---

# 47. Environments

Required environments:

## 47.1 Local

Developer machine.

Uses:

- Local environment variables
- Mock or approved non-production integrations
- No production secrets
- No production health data

## 47.2 Preview

Optional per-pull-request deployment.

Must not expose confidential content publicly without access control.

## 47.3 Staging

Production-like environment for:

- QA
- Accessibility
- Localization
- Content review
- Integration validation
- Performance checks

## 47.4 Production

Public website.

Production data and credentials must never be used in local or preview environments unless explicitly approved and protected.

---

# 48. Browser Support

The website will support current stable and recent versions of:

- Chrome
- Safari
- Firefox
- Edge
- Chrome on Android
- Safari on iOS

The exact browser matrix will be documented separately.

Progressive enhancement must preserve core content and actions when an optional browser feature is unavailable.

Internet Explorer is not supported.

---

# 49. Search

Internal website search is not part of the required V1 stack.

When resource volume justifies search, preferred options are:

1. Build-time static search index
2. Pagefind or equivalent static search
3. Managed or self-hosted search only when scale requires it

Search adoption requires:

- Privacy review
- Arabic support
- Audience filtering
- Resource taxonomy
- Accessibility testing
- Search analytics governance

---

# 50. Authentication

The public website will not implement its own authentication in V1.

Login routes must hand off to:

- Existing Patient platform
- Existing Provider platform
- Approved authentication service

Do not add:

- Auth.js
- Clerk
- Firebase Authentication
- Custom credentials
- Social login

unless the website itself receives an approved authenticated requirement.

---

# 51. Database

The public website will not own a production database in V1.

Structured public content remains repository controlled.

Operational submissions should be delivered to an approved service through an integration adapter.

If a database becomes necessary, the requirement must define:

- Data classification
- Retention
- Encryption
- Region
- Access control
- Backup
- Deletion
- Auditability
- Relationship to existing SQL Server systems

A database technology must not be selected before those requirements exist.

---

# 52. Existing ODRISC Platform Relationship

The public website and current ODRISC platform remain separate systems.

```text
ODRISC public website
    Next.js and React
    Public content, trust, SEO, conversion, handoff

ODRISC application services
    Existing .NET APIs and application systems
    Patient workflows, Provider workflows, operational data

ODRISC clinical data
    Existing controlled backend and database systems
    Not directly accessible from the website
```

The website may share:

- Brand tokens
- Approved terminology
- API contracts
- Login destinations
- Product Status
- Public capability definitions

It must not share database credentials or clinical implementation details.

---

# 53. Repository Strategy

Dedicated single-application repository for V1.

The public website should live in a dedicated repository or a clearly isolated workspace.

If using a monorepo, recommended structure:

```text
apps/
└── website/

packages/
├── design-tokens/
├── eslint-config/
├── typescript-config/
└── shared-contracts/
```

A monorepo is justified only when multiple applications genuinely share packages.

Do not create a monorepo solely because modern tools support one.

---

# 54. AI Coding-Agent Support

The repository should support Codex, Claude Code, and other coding agents through:

- `AGENTS.md`
- `CLAUDE.md`
- `PROJECT_CONTEXT.md`
- Canonical reading order
- Stable scripts
- Strict TypeScript
- Small component boundaries
- Documented architecture
- Documented dependencies
- Testable requirements
- Clear environment setup
- Reproducible container builds

Framework documentation used by agents must match the installed major versions.

Agents must not assume older Next.js, React, Tailwind, or Motion APIs.

---

# 55. Dependency-Selection Criteria

A dependency may be approved only when it has:

- Clear documented need
- Active maintenance
- Compatible license
- TypeScript support
- Accessibility suitability
- RTL suitability
- Server-rendering compatibility
- Acceptable bundle impact
- Security history that can be managed
- Good documentation
- Testability
- No unnecessary overlap with the existing stack

## 55.1 Dependency Proposal

A new dependency proposal should include:

- Problem
- Existing alternatives
- Package
- Version
- License
- Bundle impact
- Server or client placement
- Accessibility impact
- RTL impact
- Security impact
- Maintenance activity
- Exit strategy

---

# 56. Dependency Pinning

## 56.1 Direct Dependencies

Direct dependencies should use controlled version ranges.

Critical infrastructure packages should be pinned conservatively.

## 56.2 Lockfile

The lockfile provides exact resolved versions and must be reviewed in dependency-update pull requests.

## 56.3 Framework Security

Security patches for:

- Next.js
- React
- Node.js
- Authentication, when introduced
- Form-processing dependencies
- Server libraries

receive priority.

## 56.4 Automated Updates

Dependabot may open grouped updates for:

- Development tools
- Minor UI packages
- Test tooling

Major updates must remain separate and require migration review.

---

# 57. Version Upgrade Policy

## 57.1 Patch Updates

May be accepted after:

- CI passes
- Security review where relevant
- Staging smoke tests

## 57.2 Minor Updates

Require:

- Release-note review
- CI
- Visual regression
- Accessibility smoke test
- Staging validation

## 57.3 Major Updates

Require:

- Migration analysis
- Architecture impact
- Dependency compatibility
- Design-system review
- Accessibility review
- Performance comparison
- Rollback plan
- ADR or major decision record

## 57.4 Upgrade Cadence

Review:

- Security advisories continuously
- Patch updates monthly
- Minor updates quarterly
- Major upgrades deliberately rather than automatically

---

# 58. Prohibited or Deferred Technologies

The following are not approved for V1:

- Pages Router
- Create React App
- Multiple frontend frameworks
- Multiple package managers
- Runtime CSS-in-JS
- Redux or other global-state framework
- GraphQL
- A website-owned database
- Website-owned authentication
- External CMS
- Dark mode
- Multiple animation libraries
- GSAP
- Unreviewed Lottie
- Axios
- Moment.js
- Direct SQL Server access
- Client-side clinical logic
- Automatic AI-generated public content
- Unrestricted third-party scripts
- Direct analytics calls from components
- Direct vendor coupling in forms
- User-submitted MDX or HTML
- Custom Next.js server
- Scroll-hijacking libraries
- Unapproved low-code page builders

A prohibited technology may only be introduced through documented approval.

---

# 59. Canva Migration Implications

The new stack will replace the Canva website as the canonical public implementation.

Migration must include:

- Legacy URL inventory
- Redirect mapping
- Content extraction
- Asset licensing review
- Image optimization
- Metadata reconstruction
- Analytics migration
- Search Console verification
- Form replacement
- Responsive reconstruction
- Accessibility review
- Removal of Canva-specific limitations

Canva-generated HTML or page exports should not be used as production source code.

Canva remains a possible visual-reference source, not an implementation framework.

---

# 60. Technology Acceptance Criteria

The Technology Stack is successfully implemented when:

## Runtime

- Node and pnpm versions are pinned
- Local, CI, Docker, and production versions match
- Lockfile installation is reproducible

## Framework

- Next.js App Router is used
- Server Components are the default
- Static generation is used for public content
- Standalone output builds successfully

## Design

- Tailwind consumes approved tokens
- No competing styling system exists
- Patient and Provider components share the same system
- Motion uses approved primitives

## Content

- MDX and typed data are validated
- Product Status has one controlled source
- Translations are repository controlled
- Draft content is not published accidentally

## Quality

- Lint passes
- Type checking passes
- Unit tests pass
- E2E tests pass
- Accessibility tests pass
- Production build passes
- Docker build passes

## Security

- Secrets remain server-side
- CSP is active
- Inputs are validated
- Forms are rate limited
- Dependency scanning runs
- Sensitive data is absent from logs and analytics

## Deployment

- Staging and production use immutable containers
- Health checks work
- Rollback works
- Production smoke tests run
- Deployment version is traceable

---

# 61. Rules for AI Agents

Before introducing or changing technology, AI agents must:

1. Read `docs/engineering/TECH_STACK.md`.
2. Check whether the required capability already exists.
3. Check `docs/engineering/ARCHITECTURE.md`.
4. Check `docs/engineering/COMPONENT_LIBRARY.md`.
5. Check `docs/engineering/DEPENDENCY_POLICY.md`.
6. Identify server or client placement.
7. Evaluate bundle impact.
8. Evaluate accessibility.
9. Evaluate RTL behavior.
10. Evaluate security and privacy.
11. Check framework-version documentation.
12. Use existing scripts and patterns.
13. Update documentation when a technology decision changes.
14. Add tests for new behavior.

AI agents must not:

- Install a dependency without documented need
- Change the package manager
- Introduce another framework
- Use outdated Pages Router patterns
- turn Server Components into Client Components unnecessarily
- Add Axios for ordinary requests
- Add a global-state library for local state
- Add a CMS without approval
- Add authentication without a requirement
- Add a database without a requirement
- Add a second motion library
- Add direct analytics calls inside components
- expose server secrets
- connect directly to SQL Server
- bypass Zod validation at external boundaries
- loosen TypeScript or ESLint to complete a task
- use `any` to silence contract problems
- add third-party scripts before consent review
- change deployment architecture without an ADR

---

# 62. Locked Technology Decisions

The following decisions are locked unless formally changed:

1. The public website will use Node.js 24 LTS.
2. The package manager will be pnpm 11.
3. The framework will be Next.js 16.
4. The App Router will be used.
5. React 19.2 will be used.
6. TypeScript will be used in strict mode.
7. TypeScript 6.x is the target baseline.
8. Server Components are the default.
9. Public content will be static-first.
10. Tailwind CSS 4 will be used.
11. Design tokens will use CSS custom properties and typed exports.
12. Runtime CSS-in-JS is prohibited.
13. Radix Primitives will support complex accessible controls.
14. Lucide React will be the standard interface-icon package.
15. Motion for React 12 will be the single approved motion library.
16. next-intl 4 will provide localization foundations.
17. English and Arabic must be supported technically.
18. Repository-controlled MDX and typed data will be used in V1.
19. No external CMS will be used in V1.
20. Zod 4 will validate external and structured data.
21. Native Fetch will be used for HTTP.
22. The public website will not directly access SQL Server.
23. The website will not own a database in V1.
24. The website will not own authentication in V1.
25. Google Tag Manager, Google Analytics 4, and Search Console will support measurement.
26. Analytics must remain consent controlled.
27. Components will not send analytics events directly to providers.
28. Vitest will provide unit and integration testing with the V8 coverage provider.
29. React Testing Library and User Event will provide component behavior testing.
30. Playwright will provide browser, end-to-end, and screenshot-comparison testing.
31. Axe through Storybook and Playwright will support automated accessibility checks.
32. Storybook will document reusable components.
33. ESLint flat configuration and Prettier will govern code quality.
34. Docker will be used for production packaging.
35. Next.js standalone output will be used.
36. Nginx will be the V1 reverse proxy.
37. GitHub Actions will provide CI/CD.
38. GitHub Container Registry is the preferred container registry.
39. Production deployments will use immutable images.
40. A rollback mechanism is required.
41. Structured logs are required.
42. Pino is the server-logging library.
43. Recharts will be the V1 public-chart library.
44. Dark mode is not part of V1.
45. Search is deferred until content volume justifies it.
46. Technology changes require documentation and governance.
47. ESLint flat configuration is the approved linting system.
48. ESLint runs through the repository script `pnpm lint`.
49. The lint script uses `eslint . --max-warnings=0`.
50. `next lint` is not used.
51. Prettier is the canonical formatter.
52. Formatting verification runs through `pnpm format:check`.
53. ESLint and Prettier have separate responsibilities and must not enforce conflicting formatting rules.

---

# 63. Remaining Technology Questions

The following remain unresolved:

- What exact patch versions will be pinned at repository initialization?
- Is the public website stored in a dedicated repository or monorepo?
- What is the final locale-prefix URL strategy?
- Which consent-management platform will be used?
- Which service receives general contact submissions?
- Which service receives Provider demonstration requests?
- Is an existing ODRISC API used for form delivery?
- Which transactional email provider will be used?
- Is Cloudflare used for DNS, CDN, WAF, or Turnstile?
- Which external error-monitoring provider will be approved?
- Will OpenTelemetry be included in V1?
- What is the final staging-server environment?
- Which production Linux distribution is used?
- Is Docker Compose sufficient for deployment?
- Is a managed container platform required later?
- Which Nginx configuration is already available on the server?
- Which domain serves Patient application access?
- Which domain serves Provider application access?
- Is the risk assessment embedded, routed, or linked?
- Is OpenAPI available for existing `.NET` public endpoints?
- Who owns generated API-contract updates?
- Is Recharts sufficient for all public Provider visualizations?
- Which content pages require MDX?
- Is Storybook deployed privately or used only in CI?
- Which browser versions form the formal support matrix?
- Which visual-regression screenshots are release blocking?
- Which dependency-security scanner is release blocking?
- Who approves major dependency upgrades?
- Who owns production deployment and rollback?
- Who owns analytics-event governance?
- Who owns consent configuration?
- What is the maximum acceptable production Docker image size?

These questions must remain in:

`docs/project/OPEN_QUESTIONS.md`

---

# 64. Foundational Technology Summary

The ODRISC public website will use a static-first, server-first, accessible React architecture.

The foundational stack is:

```text
Node.js 24 LTS
↓
pnpm 11
↓
Next.js 16 App Router
↓
React 19.2 and TypeScript 6
↓
Tailwind CSS 4 and ODRISC design tokens
↓
Radix Primitives and ODRISC components
↓
Motion for React
↓
next-intl for English, Arabic, and RTL
↓
Repository-controlled MDX and typed content
↓
Zod validation and native Fetch
↓
GA4, GTM, consent, and Search Console
↓
Vitest, Playwright, Axe, and Storybook
↓
Docker standalone output
↓
Nginx and self-hosted deployment
↓
GitHub Actions and immutable releases
```

The stack must keep the public website:

- Fast
- Searchable
- Accessible
- Localization-ready
- Secure
- Portable
- Testable
- Clinically responsible
- Easy for multiple AI coding agents to understand
- Separate from clinical data and application logic

---

# 65. Component Implementation Authority

The Technology Stack defines the approved implementation technologies:

- React
- Radix Primitives
- Tailwind CSS
- Lucide
- Motion
- Recharts
- Storybook

The canonical component purposes, Component IDs, variants, accessibility contracts, composition rules, and ownership are defined in:

`docs/engineering/COMPONENT_LIBRARY.md`

---

# 66. Implementation Standards

The Technology Stack defines the approved tools.

The required source-code conventions, TypeScript rules, React and Next.js
practices, formatting, linting, validation, security, and review expectations
are defined in:

`docs/engineering/CODING_STANDARDS.md`

---

# 67. Testing Implementation Authority

The Technology Stack selects:

- Vitest
- React Testing Library
- Playwright
- Axe
- Storybook
- GitHub Actions

The canonical test levels, browser matrix, coverage, accessibility, visual,
flaky-test, staging, production, and release-gate requirements are defined in:

`docs/engineering/TESTING_STRATEGY.md`
