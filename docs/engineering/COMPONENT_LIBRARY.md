# ODRISC Public Website Component Library

## Document Status

**Document:** Component Library
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical reusable-component architecture, contracts, composition, accessibility, and implementation-governance specification
**System:** ODRISC public website
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Technical owner:** CTO
**Design-system owner:** To be assigned
**Approval authority:** Founder and CTO with designated product, design, accessibility, clinical, localization, content, analytics, QA, and engineering reviewers

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
- `docs/product/PAGE_IMPLEMENTATION_TRACKER.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/design/COMPONENT_SPEC_TEMPLATE.md`
- `docs/design/BRAND_REVIEW_CHECKLIST.md`
- `docs/design/DESIGN_QA_CHECKLIST.md`
- `docs/design/MOTION_QA_CHECKLIST.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/DEPENDENCY_POLICY.md`
- `docs/engineering/PERFORMANCE_BUDGET.md`
- `docs/engineering/DATA_CLASSIFICATION.md`
- `docs/engineering/ERROR_CATALOG.md`
- `docs/engineering/CODING_STANDARDS.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

---

# 1. Purpose

This document defines the reusable component system for the ODRISC public website.

It establishes:

- Component taxonomy
- Stable Component IDs
- Component hierarchy
- Implementation locations
- Server and Client Component boundaries
- Component anatomy
- Props and variant rules
- Content contracts
- Accessibility contracts
- Responsive behavior
- RTL behavior
- Motion integration
- Analytics ownership
- Product Status integration
- Storybook requirements
- Unit and component tests
- End-to-end coverage
- Visual-regression expectations
- Component approval
- Component lifecycle
- Deprecation
- AI-agent rules

This document answers:

> Which reusable components exist, what responsibilities do they own, how may they be composed, and what requirements must each implementation satisfy?

---

# 2. Scope

This Component Library applies to reusable public-website components used across:

- Shared audience entry
- Patient pages
- Provider pages
- Institutional pages
- Resource pages
- Company pages
- Legal pages
- Public forms
- Application handoffs
- Public charts
- Product previews
- Navigation
- Consent
- Feedback and errors

It does not define the internal component systems of:

- The Patient application
- The Provider platform
- Clinical dashboards
- Native mobile applications
- Internal administration systems
- Regulated medical-device interfaces

Public product previews may visually represent those systems, but the preview components remain part of the public website.

---

# 3. Component-Library Objectives

The Component Library must support:

1. One ODRISC brand
2. Patient and Provider audience variants
3. Stable visual and interaction behavior
4. React Server Components by default
5. Small justified Client Component boundaries
6. WCAG 2.2 Level AA
7. English and Arabic
8. Right-to-left layouts
9. Reduced motion
10. Product Status transparency
11. Clinical boundaries
12. Typed analytics
13. Repository-controlled content
14. Static-first rendering
15. Low client-side JavaScript
16. Storybook documentation
17. Automated testing
18. Consistent AI-generated implementation
19. Future design-system evolution
20. Vendor and framework isolation

---

# 4. Component Principles

## 4.1 Purpose Before Reuse

A component must solve a clear recurring problem.

Do not create a reusable component only because two sections look visually similar.

## 4.2 Composition Before Configuration

Prefer composing small clear components over creating one component with many unrelated props.

Prefer:

```tsx
<Card>
  <CardHeader />
  <CardBody />
  <CardFooter />
</Card>
```

Avoid:

```tsx
<UniversalCard patient provider evidence metric horizontal vertical animated compact featured />
```

## 4.3 Server Before Client

A component remains a Server Component unless it requires:

- Browser interaction
- State
- Effects
- Motion
- Consent state
- Browser APIs
- Interactive chart behavior

## 4.4 Accessibility Is Part of the Contract

A component is incomplete until its:

- Keyboard behavior
- Focus behavior
- Accessible name
- Semantic structure
- Error behavior
- Reduced-motion behavior
- RTL behavior

are defined.

## 4.5 Content Is Not Styling

Components must not assume that content can be shortened to fit a visual layout.

They must support:

- Longer clinical terms
- Arabic expansion
- Multi-line labels
- Product Status explanations
- Accessible helper text

## 4.6 Variants Represent Meaning

A variant may represent:

- Audience
- Semantic state
- Size
- Density
- Product Status
- Clinical context
- Interaction state

A variant must not exist only to match one mockup.

## 4.7 Components Must Be Product-Status Aware

Components displaying a capability must not imply availability unless the approved Product Status permits it.

## 4.8 Components Must Fail Clearly

Reusable components must define:

- Empty state
- Loading state where applicable
- Error state
- Disabled state
- Unavailable state
- Restricted state

## 4.9 Shared Foundation, Audience-Aware Expression

Patient and Provider experiences may use different density and emphasis.

They must share:

- Core anatomy
- Tokens
- Accessibility
- Component contracts
- Interaction rules

---

# 5. Component Taxonomy

The library is divided into nine categories.

| Prefix    | Category               | Purpose                                                            |
| --------- | ---------------------- | ------------------------------------------------------------------ |
| `CMP-PRM` | Primitive              | Foundational controls and semantic building blocks                 |
| `CMP-LYT` | Layout                 | Spacing, grid, container, and page-structure components            |
| `CMP-NAV` | Navigation             | Header, footer, navigation, locale, and audience controls          |
| `CMP-UI`  | Shared UI              | Cards, badges, feedback, overlays, and reusable interface patterns |
| `CMP-CNT` | Content                | Long-form content, resources, figures, references, and people      |
| `CMP-FRM` | Forms                  | Fields, forms, validation, privacy, submission, and feedback       |
| `CMP-TRS` | Trust and Status       | Product Status, validation, clinical boundaries, and trust signals |
| `CMP-DAT` | Data and Visualization | Charts, timelines, diagrams, metrics, and data summaries           |
| `CMP-FTR` | Feature Patterns       | Patient, Provider, institutional, and shared page-level patterns   |

---

# 6. Stable Component IDs

Every governed reusable component receives a stable Component ID.

Format:

```text
CMP-<CATEGORY>-<NUMBER>
```

Examples:

```text
CMP-PRM-001
CMP-NAV-004
CMP-FTR-021
```

Component IDs are used in:

- Component Registry
- Storybook
- Component specifications
- Tests
- Requirements traceability
- Page implementation tracking
- Design review
- Accessibility review
- Deprecation notices
- AI-agent instructions

The ID remains stable when:

- Visible label changes
- File location changes
- Internal implementation changes
- Styling changes within the approved contract

A new ID is required when the component’s purpose or contract materially changes.

---

# 7. Component Maturity

| Status         | Meaning                                               |
| -------------- | ----------------------------------------------------- |
| Proposed       | Need identified; contract not approved                |
| Specified      | Contract and requirements documented                  |
| In design      | Visual and interaction work in progress               |
| In development | Implementation in progress                            |
| In review      | Design, engineering, accessibility, or content review |
| Approved       | Contract approved and implementation accepted         |
| Published      | Used in the production website                        |
| Restricted     | Approved for limited contexts                         |
| Deprecated     | Existing use allowed temporarily; no new use          |
| Retired        | Removed from active use                               |

A component is not `Approved` merely because source code exists.

---

# 8. Component Hierarchy

```text
Design tokens
↓
Primitives
↓
Shared UI and layout components
↓
Content, form, navigation, trust, and data components
↓
Audience-aware feature patterns
↓
Page sections
↓
Routes and pages
```

Higher-level components may depend on lower-level components.

Lower-level components must not import higher-level page or feature modules.

---

# 9. Source Locations

Recommended structure:

```text
src/components/
├── primitives/
├── layout/
├── navigation/
├── ui/
├── content/
├── forms/
├── trust/
├── charts/
├── motion/
├── patient/
├── provider/
├── institutional/
└── shared/
```

Feature-specific composition may also live under:

```text
src/features/
```

Use `src/features/` when a component coordinates:

- Application services
- Form actions
- Consent
- Analytics
- Product Status
- Route state
- Multiple reusable UI components

---

# 10. Barrel Export Policy

Each component category may provide a controlled `index.ts`.

Do not create one global export file containing the entire component library.

Preferred:

```ts
import { Button } from "@/components/primitives";
import { ProductStatusBadge } from "@/components/trust";
```

Avoid:

```ts
import { Button, ProviderHero, ContactForm, ChartFrame, SiteHeader } from "@/components";
```

Category exports should expose only public component contracts.

Private subcomponents should not be exported.

---

# 11. Server and Client Classification

Every Component Registry entry must declare one of:

| Classification      | Meaning                                                            |
| ------------------- | ------------------------------------------------------------------ |
| Server              | Server Component with no client boundary                           |
| Client              | Entire component requires client execution                         |
| Server composition  | Server Component composing one or more small Client Components     |
| Client primitive    | Low-level interactive Client Component used by Server compositions |
| Isomorphic utility  | Non-component code safe in server and client contexts              |
| Server-only service | Not a UI component; must never enter client bundles                |

---

# 12. Server-Component Rules

Server Components should own:

- Content loading
- Structured-data lookup
- Product Status lookup
- Locale messages for static content
- Page section composition
- Static figures
- Static cards
- Metadata-adjacent content
- Server-safe formatting

Server Components may render Client Components with minimal serializable props.

Server Components must not pass:

- Secrets
- Vendor clients
- Full environment configuration
- Server-only error causes
- Unvalidated external responses

---

# 13. Client-Component Rules

Client Components must be limited to components requiring:

- User event handlers
- Local state
- Browser APIs
- Motion
- Focus management
- Dialogs and drawers
- Interactive tabs
- Consent state
- Interactive charts
- Form submission state

Every non-obvious Client Component should include a short boundary comment.

Example:

```tsx
"use client";

// Client boundary required for keyboard-driven tabs and animated selection.
```

Entire page sections must not become Client Components merely because one child is interactive.

---

# 14. Component Props Principles

Component props must be:

- Typed
- Minimal
- Purpose-oriented
- Serializable across Server and Client boundaries where required
- Stable
- Accessible by default
- Free from vendor-specific types

Prefer:

```ts
type ProductStatusBadgeProps = {
  status: PublicProductStatus;
  explanation?: string;
};
```

Avoid:

```ts
type BadgeProps = {
  data: any;
  style?: object;
  statusColor?: string;
  customClass?: string;
};
```

---

# 15. Common Prop Conventions

## 15.1 `className`

Low-level primitives may accept `className` for controlled composition.

High-level feature components should avoid exposing unrestricted `className` unless a clear extension requirement exists.

`className` must not be used to bypass:

- Tokens
- Approved variants
- Spacing rules
- Accessibility states

## 15.2 `style`

Reusable components should not expose a general `style` prop for static visual customization.

Inline style may be used internally for:

- Dynamic chart dimensions
- Calculated motion values
- CSS custom-property assignment
- User-controlled positioning where approved

## 15.3 `children`

Use `children` when the component is genuinely compositional.

Do not use `children` when a defined content contract is safer and clearer.

## 15.4 Event Props

Public event props should describe meaning.

Prefer:

```ts
onAudienceSelect;
onConsentChange;
onSubmissionComplete;
```

Avoid:

```ts
onClickThing;
handleAction;
callback;
```

## 15.5 IDs

Components requiring DOM relationships should generate stable IDs through React APIs or accept an explicit ID.

Do not generate random IDs during render.

---

# 16. Variant Architecture

Variants should use controlled unions or `class-variance-authority`.

Example:

```ts
type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

type ButtonSize = "small" | "medium" | "large";
```

Do not accept arbitrary visual values such as:

```ts
backgroundColor: string;
borderRadius: number;
```

unless the component is a controlled design-system utility.

---

# 17. Audience Variants

Approved audience values:

```ts
type AudienceVariant = "shared" | "patient" | "provider" | "institutional";
```

Audience variants may affect:

- Density
- Accent use
- Supporting metadata
- Diagram complexity
- Content length
- CTA wording

Audience variants must not alter:

- Core semantics
- Accessibility
- Brand identity
- Product Status
- Clinical boundaries

---

# 18. Content Contracts

Components must define:

- Maximum recommended title length
- Whether descriptions are required
- Whether rich text is permitted
- Whether links are permitted
- Whether Product Status is required
- Whether evidence metadata is required
- Whether market applicability is required
- Whether clinical review is required

Components must not truncate clinically material content silently.

Where truncation is used for optional preview content:

- Full content must be available
- Accessible names must remain complete
- A clear expansion path must exist

---

# 19. Accessibility Contract

Every governed component must document:

- Semantic role
- Accessible name
- Keyboard interaction
- Focus behavior
- Error behavior
- Disabled behavior
- Touch-target requirements
- Screen-reader behavior
- Color-independent meaning
- Reduced-motion behavior
- RTL behavior

Interactive components must meet the minimum target:

```text
44px × 44px
```

Automated accessibility tests are required, but do not replace manual review.

---

# 20. RTL Contract

Each reusable component must be classified as:

| RTL behavior          | Meaning                                                                |
| --------------------- | ---------------------------------------------------------------------- |
| Mirrored              | Layout and direction reverse                                           |
| Direction-neutral     | No directional change                                                  |
| Chronology-preserving | Reading layout changes, but timeline or chart chronology remains fixed |
| Locale-customized     | Requires specific Arabic implementation or content                     |

Directional icons must mirror when direction indicates navigation.

Medical, media, and universal status icons must not be mirrored automatically.

---

# 21. Motion Contract

Every animated component must define:

- Motion ID, where material
- Trigger
- Duration token
- Easing token
- Distance token
- Reduced-motion behavior
- Mobile behavior
- RTL direction
- Performance implications

Simple visual state changes should use CSS transitions.

Narrative, SVG, timeline, or complex state animation may use Motion for React.

Components must not define arbitrary animation values where approved tokens exist.

---

# 22. Product Status Contract

Components presenting product capabilities must receive Product Status from the controlled Product Status source.

They must not:

- Infer status
- Hide status to simplify design
- Convert `Pilot` into `Available`
- Display roadmap capability as active
- Use visual animation to imply progress toward release

Product-status styling is owned by the trust component layer.

---

# 23. Analytics Contract

Analytics belongs to:

- Feature patterns
- Conversion controls
- Navigation controls
- Form completion
- Audience selection
- Approved application handoffs

Low-level primitives must not emit analytics automatically.

Example:

```text
Button
    No analytics ownership

DemoRequestForm
    Owns form-start, validation-failure category, and submission-result events

AudienceGateway
    Owns audience-selection event
```

All events must use the internal analytics wrapper and approved event registry.

---

# 24. Storybook Contract

Every approved reusable component must have Storybook coverage.

Required stories where applicable:

- Default
- Patient
- Provider
- Institutional
- Small, medium, and large
- Hover
- Focus
- Disabled
- Loading
- Error
- Empty
- Long English content
- Arabic
- RTL
- Reduced motion
- High zoom
- Product Status variants
- Mobile viewport

Storybook is implementation documentation.

It does not override the canonical Design System or component specification.

---

# 25. Testing Contract

Each reusable component must define required test levels.

## Unit Tests

Use for:

- Variant mapping
- Formatting
- Status mapping
- Schema handling
- Content transformation

## Component Tests

Use for:

- Interaction
- Keyboard behavior
- Focus
- Validation
- Accessible names
- State transitions
- RTL behavior

## Accessibility Tests

Use Axe and manual checks.

## Visual Regression

Use for stable visual components and key audience variants.

## End-to-End Tests

Use for:

- Navigation
- Forms
- Consent
- Application handoffs
- Cross-component workflows

---

# 26. Primitive Component Registry

## CMP-PRM-001 — Button

**Runtime:** Server-safe implementation with interactive Client use where required
**Location:** `src/components/primitives/button.tsx`

Purpose:

- Trigger an action
- Submit a form
- Open a controlled interaction

Variants:

- Primary
- Secondary
- Tertiary
- Destructive

Sizes:

- Small
- Medium
- Large

Required states:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading

Rules:

- Must use a native `<button>`
- Must declare `type`
- Must not navigate to another route
- Loading must preserve width
- Icon-only use belongs to `IconButton`

---

## CMP-PRM-002 — Text Link

**Runtime:** Server
**Location:** `src/components/primitives/text-link.tsx`

Purpose:

- Navigate between pages or external resources

Rules:

- Uses the localized navigation wrapper for internal routes
- Uses descriptive link text
- Supports external-link indication
- Inline links remain underlined in long-form content
- Must not visually imitate a button unless the approved Button Link variant is used

---

## CMP-PRM-003 — Button Link

**Runtime:** Server
**Location:** `src/components/primitives/button-link.tsx`

Purpose:

- Present route navigation using button visual treatment

Rules:

- Uses an anchor or framework link
- Must not use a button with client-side navigation
- Supports primary, secondary, and tertiary visual variants
- Must preserve external-link semantics

---

## CMP-PRM-004 — Icon Button

**Runtime:** Client when interactive
**Location:** `src/components/primitives/icon-button.tsx`

Purpose:

- Compact labeled action such as close, menu, previous, or next

Rules:

- Requires accessible name
- Minimum target 44px
- Tooltip is optional, not a substitute for accessible name
- Directional icons support RTL

---

## CMP-PRM-005 — Text Input

**Runtime:** Server-renderable control
**Location:** `src/components/primitives/text-input.tsx`

Rules:

- Visible label required through form composition
- Supports error and described-by relationships
- Placeholder is not a label
- Disabled and read-only are distinct
- Autocomplete must be set appropriately

---

## CMP-PRM-006 — Textarea

**Runtime:** Server-renderable control
**Location:** `src/components/primitives/textarea.tsx`

Rules:

- Supports character guidance where required
- Must not autosize in a way that causes disruptive layout shifts
- Must not request clinical or health information on public forms

---

## CMP-PRM-007 — Select

**Runtime:** Client for custom Radix implementation; native preferred where appropriate
**Location:** `src/components/primitives/select.tsx`

Rules:

- Use native select when it provides the clearest accessible behavior
- Custom select requires complete keyboard and screen-reader support
- Avoid for fewer than five simple options

---

## CMP-PRM-008 — Checkbox

**Runtime:** Client primitive
**Location:** `src/components/primitives/checkbox.tsx`

Purpose:

- Multiple selection
- Consent acknowledgement
- Optional preference

Consent use must not preselect non-essential consent.

---

## CMP-PRM-009 — Radio Group

**Runtime:** Client primitive
**Location:** `src/components/primitives/radio-group.tsx`

Purpose:

- One choice from a visible group

Rules:

- Group label required
- Arrow-key navigation required
- Error association required when used in forms

---

## CMP-PRM-010 — Switch

**Runtime:** Client primitive
**Location:** `src/components/primitives/switch.tsx`

Purpose:

- Immediate binary preference

Do not use for:

- Form submission
- Consent where an explicit checkbox is clearer
- Irreversible actions

---

## CMP-PRM-011 — Field Label

**Runtime:** Server
**Location:** `src/components/primitives/field-label.tsx`

Rules:

- Programmatically associated with control
- Required and optional state written clearly
- Does not rely only on an asterisk

---

## CMP-PRM-012 — Field Message

**Runtime:** Server
**Location:** `src/components/primitives/field-message.tsx`

Variants:

- Help
- Error
- Success

Error messages must explain how to recover.

---

## CMP-PRM-013 — Separator

**Runtime:** Server
**Location:** `src/components/primitives/separator.tsx`

Rules:

- Decorative separators use appropriate hidden semantics
- Semantic separators use the correct role
- Gradient use follows the Design System

---

## CMP-PRM-014 — Visually Hidden

**Runtime:** Server
**Location:** `src/components/primitives/visually-hidden.tsx`

Purpose:

- Screen-reader-only labels and context

Must not be used to hide visible information that sighted users also require.

---

# 27. Layout Component Registry

## CMP-LYT-001 — Container

**Runtime:** Server
**Location:** `src/components/layout/container.tsx`

Variants:

- Text
- Standard
- Wide
- Full bleed

Owns:

- Maximum width
- Horizontal gutters
- Responsive padding

Must not own vertical section spacing.

---

## CMP-LYT-002 — Section

**Runtime:** Server
**Location:** `src/components/layout/section.tsx`

Variants:

- Standard
- Major
- Compact

Owns:

- Semantic `<section>`
- Vertical spacing
- Optional labelled-by relationship
- Surface context

---

## CMP-LYT-003 — Stack

**Runtime:** Server
**Location:** `src/components/layout/stack.tsx`

Purpose:

- Vertical flow using approved spacing tokens

Must not accept arbitrary pixel gaps.

---

## CMP-LYT-004 — Cluster

**Runtime:** Server
**Location:** `src/components/layout/cluster.tsx`

Purpose:

- Horizontal wrapping group for buttons, badges, or metadata

Supports RTL automatically through logical properties.

---

## CMP-LYT-005 — Responsive Grid

**Runtime:** Server
**Location:** `src/components/layout/responsive-grid.tsx`

Variants:

- Two-column
- Three-column
- Four-column
- Auto-fit

Must use approved grid and breakpoint tokens.

---

## CMP-LYT-006 — Split Layout

**Runtime:** Server
**Location:** `src/components/layout/split-layout.tsx`

Purpose:

- Text and media
- Narrative and diagram
- Form and explanation

Supports:

- Content-first
- Media-first
- Patient density
- Provider density
- RTL order review

---

## CMP-LYT-007 — Page Shell

**Runtime:** Server
**Location:** `src/components/layout/page-shell.tsx`

Owns:

- Site header
- Main content landmark
- Footer
- Skip-link target
- Audience context

Does not own page-specific content.

---

## CMP-LYT-008 — Prose

**Runtime:** Server
**Location:** `src/components/layout/prose.tsx`

Purpose:

- Readable long-form typography

Variants:

- Patient
- Provider
- Legal
- Resource

Must enforce readable line length.

---

## CMP-LYT-009 — Surface

**Runtime:** Server
**Location:** `src/components/layout/surface.tsx`

Variants:

- Base
- Subtle
- Muted
- Patient tint
- Provider tint
- Inverse

Must not accept arbitrary background colors.

---

## CMP-LYT-010 — Sticky Aside

**Runtime:** Server composition
**Location:** `src/components/layout/sticky-aside.tsx`

Use for:

- Resource contents
- Methodology navigation
- Provider secondary context

Must degrade to normal flow on mobile and reduced-motion-sensitive layouts.

---

# 28. Navigation Component Registry

## CMP-NAV-001 — Skip Link

**Runtime:** Server
**Location:** `src/components/navigation/skip-link.tsx`

Must be the first focusable element.

---

## CMP-NAV-002 — Site Header

**Runtime:** Server composition
**Location:** `src/components/navigation/site-header.tsx`

Composes:

- Logo
- Main navigation
- Audience switcher
- Locale switcher
- Login handoff
- Primary CTA
- Mobile-navigation trigger

The header remains one shared brand component.

---

## CMP-NAV-003 — Main Navigation

**Runtime:** Server composition
**Location:** `src/components/navigation/main-navigation.tsx`

Uses typed navigation data.

Must not hard-code route strings.

---

## CMP-NAV-004 — Mobile Navigation Drawer

**Runtime:** Client
**Motion ID:** `MOT-CMP-002`
**Location:** `src/components/navigation/mobile-navigation-drawer.tsx`

Requires:

- Focus trap
- Escape close
- Visible close button
- Background inert behavior
- RTL drawer direction
- Reduced-motion state

---

## CMP-NAV-005 — Audience Switcher

**Runtime:** Server composition with Client interaction
**Location:** `src/components/navigation/audience-switcher.tsx`

Owns:

- Equivalent-route lookup
- Audience-selection analytics
- Fallback to alternate audience homepage

Must not infer health characteristics.

---

## CMP-NAV-006 — Locale Switcher

**Runtime:** Server composition with Client enhancement
**Location:** `src/components/navigation/locale-switcher.tsx`

Owns:

- Locale navigation
- Current locale announcement
- Equivalent localized route
- Fallback behavior when translation is unavailable

Must not manually concatenate locale routes.

---

## CMP-NAV-007 — Breadcrumb Navigation

**Runtime:** Server
**Location:** `src/components/navigation/breadcrumb-navigation.tsx`

Uses:

- Approved route hierarchy
- Structured-data support
- Accessible separators
- Localized labels

---

## CMP-NAV-008 — Secondary Navigation

**Runtime:** Server
**Location:** `src/components/navigation/secondary-navigation.tsx`

Use for:

- Provider sub-navigation
- Resource category navigation
- About section navigation

Must not duplicate the main navigation.

---

## CMP-NAV-009 — Site Footer

**Runtime:** Server
**Location:** `src/components/navigation/site-footer.tsx`

Owns:

- Footer routes
- Legal routes
- Contact information
- Market and company identity
- Language access where approved
- Approved positioning line

---

## CMP-NAV-010 — Application Handoff Link

**Runtime:** Server
**Location:** `src/components/navigation/application-handoff-link.tsx`

Owns:

- Approved destination
- Product Status
- External-origin notice
- Safe URL behavior
- Handoff analytics

Must not pass sensitive values in query parameters.

---

# 29. Shared UI Component Registry

## CMP-UI-001 — Card

**Runtime:** Server
**Location:** `src/components/ui/card.tsx`

Anatomy:

- Card
- Card header
- Card body
- Card footer

Variants:

- Standard
- Patient
- Provider
- Institutional
- Interactive

Interactive cards must use an actual link or button.

---

## CMP-UI-002 — Capability Card

**Runtime:** Server
**Location:** `src/components/ui/capability-card.tsx`

Required content:

- Capability name
- User or clinical need
- Short explanation
- Product Status where material
- Destination

Must not imply unavailable functionality.

---

## CMP-UI-003 — Evidence Card

**Runtime:** Server
**Location:** `src/components/ui/evidence-card.tsx`

Required content:

- Evidence type
- What was evaluated
- Source
- Date
- Limitation
- Reviewer where applicable

Must distinguish professional review from clinical validation.

---

## CMP-UI-004 — Metric Card

**Runtime:** Server
**Location:** `src/components/ui/metric-card.tsx`

Required content:

- Value
- Unit
- Label
- Period or population
- Source
- Context

Must not present unsupported large statistics.

---

## CMP-UI-005 — Section Header

**Runtime:** Server
**Location:** `src/components/ui/section-header.tsx`

Supports:

- Eyebrow
- Heading
- Description
- Alignment
- Audience density

Only one primary message should lead the section.

---

## CMP-UI-006 — CTA Group

**Runtime:** Server
**Location:** `src/components/ui/cta-group.tsx`

Rules:

- One primary CTA
- One optional secondary CTA
- No competing equal-priority actions
- Stacks cleanly on mobile

---

## CMP-UI-007 — Badge

**Runtime:** Server
**Location:** `src/components/ui/badge.tsx`

Use for:

- Audience
- Content type
- Market
- Language
- Metadata

Product Status uses a separate governed component.

---

## CMP-UI-008 — Tooltip

**Runtime:** Client primitive
**Location:** `src/components/ui/tooltip.tsx`

Use only for short supplementary information.

Essential clinical or safety information must remain visible without the tooltip.

---

## CMP-UI-009 — Accordion

**Runtime:** Client primitive
**Motion ID:** `MOT-CMP-001`
**Location:** `src/components/ui/accordion.tsx`

Use for:

- FAQs
- Secondary methodology
- Optional technical detail

Primary page arguments must not be hidden entirely inside accordions.

---

## CMP-UI-010 — Tabs

**Runtime:** Client primitive
**Location:** `src/components/ui/tabs.tsx`

Use for:

- Related content in one context
- Preconception and pregnancy comparison
- Methodology categories

All tab content must remain accessible.

---

## CMP-UI-011 — Dialog

**Runtime:** Client primitive
**Location:** `src/components/ui/dialog.tsx`

Requires:

- Focus trap
- Escape
- Accessible title
- Return focus
- Reduced-motion behavior

---

## CMP-UI-012 — Drawer

**Runtime:** Client primitive
**Location:** `src/components/ui/drawer.tsx`

Use for:

- Mobile navigation
- Filters
- Optional contextual detail

Must not conceal critical safety content.

---

## CMP-UI-013 — Skeleton

**Runtime:** Server or Client
**Location:** `src/components/ui/skeleton.tsx`

Rules:

- Matches expected content shape
- No strong shimmer
- No infinite animation under reduced motion
- Does not imitate real patient data

---

## CMP-UI-014 — Spinner

**Runtime:** Client
**Location:** `src/components/ui/spinner.tsx`

Use for short unknown waits.

Requires accessible loading text.

---

## CMP-UI-015 — Empty State

**Runtime:** Server
**Location:** `src/components/ui/empty-state.tsx`

Required:

- Clear explanation
- Reason where known
- One recovery action where relevant

---

## CMP-UI-016 — Error State

**Runtime:** Server or Client
**Location:** `src/components/ui/error-state.tsx`

Required:

- Safe message
- Error reference when available
- Retry or recovery route
- No stack trace
- No blame

---

## CMP-UI-017 — Success State

**Runtime:** Server or Client
**Location:** `src/components/ui/success-state.tsx`

Must communicate completion without confetti or gamification.

---

## CMP-UI-018 — Pagination

**Runtime:** Server composition
**Location:** `src/components/ui/pagination.tsx`

Use for resource collections only when required.

Must provide:

- Previous and next labels
- Current-page context
- Keyboard access
- Search-engine-friendly links

---

# 30. Content Component Registry

## CMP-CNT-001 — Rich Text Renderer

**Runtime:** Server
**Location:** `src/components/content/rich-text.tsx`

Owns approved MDX component mapping.

Must not permit arbitrary runtime component imports.

---

## CMP-CNT-002 — Resource Card

**Runtime:** Server
**Location:** `src/components/content/resource-card.tsx`

Required:

- Title
- Audience
- Resource type
- Summary
- Publication or review date
- Destination

---

## CMP-CNT-003 — Resource Metadata

**Runtime:** Server
**Location:** `src/components/content/resource-metadata.tsx`

May include:

- Author
- Clinical reviewer
- Publication date
- Review date
- Market applicability
- References
- Content type

---

## CMP-CNT-004 — Reference List

**Runtime:** Server
**Location:** `src/components/content/reference-list.tsx`

Requirements:

- Consistent reference format
- External-link indication
- Stable numbering
- Accessible link text

---

## CMP-CNT-005 — FAQ List

**Runtime:** Server composition
**Location:** `src/components/content/faq-list.tsx`

Composes the Accordion component with structured FAQ data.

---

## CMP-CNT-006 — Definition Term

**Runtime:** Server
**Location:** `src/components/content/definition-term.tsx`

Use for:

- Clinical terminology
- Product terminology
- Glossary content

Must avoid tooltip-only definitions for essential terms.

---

## CMP-CNT-007 — Figure

**Runtime:** Server
**Location:** `src/components/content/figure.tsx`

Supports:

- Image
- Illustration
- Diagram
- Caption
- Long description
- Source
- Product-preview status

---

## CMP-CNT-008 — Media Frame

**Runtime:** Server
**Location:** `src/components/content/media-frame.tsx`

Supports:

- Image ratio
- Video poster
- Product preview
- Status label
- Accessible caption

---

## CMP-CNT-009 — Video Player

**Runtime:** Client
**Location:** `src/components/content/video-player.tsx`

Requires:

- User-initiated playback
- Captions
- Transcript link
- Pause
- No autoplay sound
- Reduced-motion consideration

---

## CMP-CNT-010 — Quote Block

**Runtime:** Server
**Location:** `src/components/content/quote-block.tsx`

Use for verified quotes or founder narrative.

Must not present unverified endorsements.

---

## CMP-CNT-011 — Team Member Card

**Runtime:** Server
**Location:** `src/components/content/team-member-card.tsx`

Required:

- Name
- Approved role
- Approved biography
- Approved image
- Current status

---

## CMP-CNT-012 — Contributor Card

**Runtime:** Server
**Location:** `src/components/content/contributor-card.tsx`

Must distinguish:

- Team member
- Clinical contributor
- Advisor
- Reviewer
- Panel participant

Panel participation must not be presented as validation.

---

## CMP-CNT-013 — Founder Story Block

**Runtime:** Server
**Location:** `src/components/content/founder-story-block.tsx`

Must preserve:

- Personal context
- Purpose
- Restraint
- Separation between experience and evidence

---

## CMP-CNT-014 — Download Card

**Runtime:** Server
**Location:** `src/components/content/download-card.tsx`

Required:

- File type
- File size
- Audience
- Date
- Accessible file description

Downloads must not contain sensitive data.

---

# 31. Form Component Registry

## CMP-FRM-001 — Form Field

**Runtime:** Server composition
**Location:** `src/components/forms/form-field.tsx`

Composes:

- Label
- Control
- Help text
- Error text

Owns stable accessible relationships.

---

## CMP-FRM-002 — Form Error Summary

**Runtime:** Client
**Location:** `src/components/forms/form-error-summary.tsx`

Requirements:

- Receives focus after failed submission
- Links to invalid fields
- Announces error count
- Uses safe plain language

---

## CMP-FRM-003 — Submit Button

**Runtime:** Client
**Location:** `src/components/forms/submit-button.tsx`

Owns:

- Pending state
- Duplicate-submission prevention
- Loading label
- Accessible busy state

---

## CMP-FRM-004 — Privacy Notice

**Runtime:** Server
**Location:** `src/components/forms/privacy-notice.tsx`

Required for public forms.

Explains:

- Purpose
- Data destination
- Privacy policy
- Prohibited clinical information
- Consent where applicable

---

## CMP-FRM-005 — Consent Checkbox

**Runtime:** Client primitive
**Location:** `src/components/forms/consent-checkbox.tsx`

Use only where legal or operational consent is required.

Must not combine unrelated permissions.

---

## CMP-FRM-006 — General Contact Form

**Runtime:** Server composition with Client form state
**Location:** `src/components/forms/general-contact-form.tsx`

Owns:

- General enquiry schema
- Server Action integration
- Analytics
- Privacy notice
- Success and error state

Must not request medical information.

---

## CMP-FRM-007 — Provider Demo Request Form

**Runtime:** Server composition with Client form state
**Location:** `src/components/forms/provider-demo-request-form.tsx`

May request:

- Name
- Work email
- Organization
- Professional role
- Country
- General implementation interest

Must not request Patient data.

---

## CMP-FRM-008 — Pilot Enquiry Form

**Runtime:** Server composition with Client form state
**Location:** `src/components/forms/pilot-enquiry-form.tsx`

Published only when pilot intake is operational.

Must state:

- Who the pilot is for
- Current Product Status
- What happens next
- No guaranteed participation

---

## CMP-FRM-009 — Form Submission Result

**Runtime:** Client
**Location:** `src/components/forms/form-submission-result.tsx`

Variants:

- Success
- Validation failure
- Delivery failure
- Rate limited

Uses the Error Catalog.

---

## CMP-FRM-010 — Consent Preferences Panel

**Runtime:** Client
**Location:** `src/components/forms/consent-preferences-panel.tsx`

Owns:

- Consent categories
- Save
- Withdrawal
- Policy version
- Localized descriptions

Must not use dark patterns.

---

# 32. Trust and Status Component Registry

## CMP-TRS-001 — Product Status Badge

**Runtime:** Server
**Location:** `src/components/trust/product-status-badge.tsx`

Allowed statuses:

- Available
- Limited availability
- Pilot
- In validation
- In development
- Planned
- Future roadmap
- Restricted where publicly approved

Status is passed from the controlled Product Status source.

---

## CMP-TRS-002 — Product Status Panel

**Runtime:** Server
**Location:** `src/components/trust/product-status-panel.tsx`

Required:

- Status
- Plain-language explanation
- Market applicability
- Last review date where appropriate
- Current versus future boundary

---

## CMP-TRS-003 — Clinical Boundary Callout

**Runtime:** Server
**Location:** `src/components/trust/clinical-boundary-callout.tsx`

Common message:

> ODRISC supports healthcare professionals and does not replace clinical care.

Must remain visible and not depend on hover or accordion expansion where material.

---

## CMP-TRS-004 — Evidence Type Badge

**Runtime:** Server
**Location:** `src/components/trust/evidence-type-badge.tsx`

Allowed categories may include:

- Professional review
- Technical testing
- Usability testing
- Pilot activity
- Algorithm validation
- Clinical validation
- Regulatory review
- Published evidence

---

## CMP-TRS-005 — Validation Record

**Runtime:** Server
**Location:** `src/components/trust/validation-record.tsx`

Required:

- Validation type
- What was reviewed
- Who reviewed
- Method
- Date
- Result
- Limitation
- Current status

---

## CMP-TRS-006 — Trust Signal Group

**Runtime:** Server
**Location:** `src/components/trust/trust-signal-group.tsx`

May include:

- Clinical review
- Accessibility
- Privacy
- Security
- Product Status
- References

Must not use decorative seals or unverified certifications.

---

## CMP-TRS-007 — Market Availability Label

**Runtime:** Server
**Location:** `src/components/trust/market-availability-label.tsx`

Shows:

- Market
- Language
- Availability
- Relevant limitation

Must not infer availability from locale.

---

## CMP-TRS-008 — Product Preview Status Label

**Runtime:** Server
**Location:** `src/components/trust/product-preview-status-label.tsx`

Allowed labels:

- Current interface
- Prototype
- Concept
- In development

Required on public product previews where implementation status could be misunderstood.

---

## CMP-TRS-009 — Security Summary

**Runtime:** Server
**Location:** `src/components/trust/security-summary.tsx`

Must include only verified statements.

Avoid:

- Fully secure
- Unhackable
- Completely compliant

---

## CMP-TRS-010 — Clinical Safety Notice

**Runtime:** Server
**Location:** `src/components/trust/clinical-safety-notice.tsx`

Use for:

- Risk-assessment boundaries
- Emergency-care boundaries
- Patient safety guidance
- Market-approved escalation information

Requires clinical and legal review.

---

# 33. Data and Visualization Component Registry

## CMP-DAT-001 — Chart Frame

**Runtime:** Server composition
**Location:** `src/components/charts/chart-frame.tsx`

Owns:

- Chart title
- Description
- Unit
- Legend
- Source
- Text summary
- Product-preview status

Recharts must remain behind this boundary.

---

## CMP-DAT-002 — Accessible Chart Summary

**Runtime:** Server
**Location:** `src/components/charts/accessible-chart-summary.tsx`

Provides:

- Main trend
- Important comparison
- Time range
- Limitations
- Missing-data note

---

## CMP-DAT-003 — Longitudinal Line Chart

**Runtime:** Client
**Motion ID:** `MOT-DAT-001`
**Location:** `src/components/charts/longitudinal-line-chart.tsx`

Use for:

- Public explanatory trajectory
- Provider product preview
- Patient simplified progress where approved

Must preserve:

- Scale
- Chronology
- Baseline
- Units
- Missing data
- Reduced-motion state

---

## CMP-DAT-004 — Comparison Bar Chart

**Runtime:** Client
**Location:** `src/components/charts/comparison-bar-chart.tsx`

Use for:

- Goal versus achieved
- Category comparison
- Public market or platform metrics

Must start from the true baseline unless a clearly explained alternative is necessary.

---

## CMP-DAT-005 — Progress Donut

**Runtime:** Client
**Location:** `src/components/charts/progress-donut.tsx`

Use sparingly for:

- Completed versus remaining
- Non-clinical simple progress

Must provide visible written values.

Must not imply success or failure without context.

---

## CMP-DAT-006 — Narrative Timeline

**Runtime:** Server composition with optional Client motion
**Location:** `src/components/charts/narrative-timeline.tsx`

Use for:

- Pregnancy journey
- Product story
- Patient-Provider collaboration
- Clinical workflow

Mobile becomes vertical.

---

## CMP-DAT-007 — Process Flow

**Runtime:** Server composition
**Location:** `src/components/charts/process-flow.tsx`

Use for:

- Data to intelligence
- OCR workflow
- Provider workflow
- Validation process

Must preserve logical reading order in English and Arabic.

---

## CMP-DAT-008 — Formal Value Chain

**Runtime:** Server composition with optional motion
**Location:** `src/components/charts/formal-value-chain.tsx`

Canonical sequence:

```text
Clinical data
→
Longitudinal intelligence
→
Earlier recognition
→
Better monitoring
→
Improved maternal and fetal outcomes
```

Wording must not be altered within the formal chain.

Must state that the chain represents intended product value, not guaranteed outcomes.

---

## CMP-DAT-009 — Stat Block

**Runtime:** Server
**Location:** `src/components/charts/stat-block.tsx`

Required:

- Statistic
- Definition
- Population or market
- Date
- Source
- Context

---

## CMP-DAT-010 — Product Architecture Diagram

**Runtime:** Server composition
**Location:** `src/components/charts/product-architecture-diagram.tsx`

Use for:

- Maternal data
- Fetal growth
- Labs
- Doppler
- Longitudinal intelligence
- Patient and Provider outputs

Must label current, future, and conceptual layers.

---

# 34. Shared Feature Component Registry

## CMP-FTR-001 — Audience Gateway

**Runtime:** Server composition with Client interactions
**Motion ID:** `MOT-SHR-001`, `MOT-SHR-002`
**Location:** `src/components/shared/audience-gateway.tsx`

Owns:

- Shared narrative
- Patient entry
- Provider entry
- Equal visual importance
- Audience-selection analytics
- Motion and reduced-motion state

---

## CMP-FTR-002 — Shared Hero

**Runtime:** Server composition
**Location:** `src/components/shared/shared-hero.tsx`

Use only where the page speaks equally to Patient and Provider audiences.

---

## CMP-FTR-003 — Final CTA Section

**Runtime:** Server
**Location:** `src/components/shared/final-cta-section.tsx`

Required:

- One primary action
- One optional secondary action
- Product Status awareness
- Market-appropriate destination
- No non-working CTA

---

## CMP-FTR-004 — Application Handoff Card

**Runtime:** Server
**Location:** `src/components/shared/application-handoff-card.tsx`

Required:

- Destination
- Audience
- Product Status
- External-origin notice
- Availability
- Recovery route

---

## CMP-FTR-005 — Patient-Provider Collaboration Block

**Runtime:** Server composition
**Location:** `src/components/shared/patient-provider-collaboration-block.tsx`

Must present:

- Patient participation
- Provider authority
- Shared understanding
- Appropriate boundaries

---

## CMP-FTR-006 — Contact Channel Group

**Runtime:** Server
**Location:** `src/components/shared/contact-channel-group.tsx`

May include:

- General enquiry
- Provider demo
- Partnership
- Support
- Media

Only operational channels may be shown.

---

# 35. Patient Feature Component Registry

## CMP-FTR-101 — Patient Hero

**Runtime:** Server composition
**Location:** `src/components/patient/patient-hero.tsx`

Owns:

- Patient recognition
- Plain-language value
- Primary Patient CTA
- Optional Patient illustration
- Product Status where necessary

---

## CMP-FTR-102 — Patient Journey Timeline

**Runtime:** Server composition with optional Client motion
**Motion ID:** `MOT-PAT-001`
**Location:** `src/components/patient/patient-journey-timeline.tsx`

Must remain:

- Calm
- Simple
- Non-diagnostic
- Mobile readable

---

## CMP-FTR-103 — Patient Capability Grid

**Runtime:** Server
**Location:** `src/components/patient/patient-capability-grid.tsx`

May include:

- Risk awareness
- Weight monitoring
- Nutrition
- Physical activity
- Maternal and fetal progress

Every item must use approved Product Status.

---

## CMP-FTR-104 — Risk Awareness Panel

**Runtime:** Server
**Location:** `src/components/patient/risk-awareness-panel.tsx`

Must state:

- Risk is not diagnosis
- Assessment does not replace OGTT
- Relevant Product Status
- Appropriate professional discussion

---

## CMP-FTR-105 — Weight Progress Preview

**Runtime:** Server composition with optional chart Client boundary
**Location:** `src/components/patient/weight-progress-preview.tsx`

Must use:

- Non-stigmatizing language
- Clear units
- Professional context
- Product-preview status

Must not gamify weight gain or loss.

---

## CMP-FTR-106 — Nutrition Support Panel

**Runtime:** Server
**Location:** `src/components/patient/nutrition-support-panel.tsx`

Must distinguish:

- General educational support
- Personalized plans
- Professional review
- Current availability

---

## CMP-FTR-107 — Physical Activity Support Panel

**Runtime:** Server
**Location:** `src/components/patient/physical-activity-support-panel.tsx`

Must include:

- Safety context
- Professional guidance
- Product Status
- No universal exercise prescription

---

## CMP-FTR-108 — Maternal and Fetal Progress Panel

**Runtime:** Server composition
**Location:** `src/components/patient/maternal-fetal-progress-panel.tsx`

Must not transfer specialist interpretation responsibility to Patients.

---

## CMP-FTR-109 — Membership Plan Card

**Runtime:** Server
**Location:** `src/components/patient/membership-plan-card.tsx`

Required:

- Market
- Price
- Billing period
- Included services
- Current availability
- Terms
- Primary action

Pricing must come from the controlled pricing source.

---

## CMP-FTR-110 — Patient Start Panel

**Runtime:** Server composition
**Location:** `src/components/patient/patient-start-panel.tsx`

Shows only operational Patient routes.

Must not display placeholder registration or payment actions.

---

# 36. Provider Feature Component Registry

## CMP-FTR-201 — Provider Hero

**Runtime:** Server composition
**Location:** `src/components/provider/provider-hero.tsx`

Owns:

- Clinical problem
- Longitudinal value
- Primary Provider CTA
- Clinical boundary
- Product Status

---

## CMP-FTR-202 — Clinical Data-to-Intelligence Flow

**Runtime:** Server composition with optional motion
**Motion ID:** `MOT-PRO-001`
**Location:** `src/components/provider/clinical-data-to-intelligence-flow.tsx`

Must remain:

- Explainable
- Non-autonomous
- Product-status accurate
- Free from generic AI imagery

---

## CMP-FTR-203 — Platform Layer Diagram

**Runtime:** Server composition
**Location:** `src/components/provider/platform-layer-diagram.tsx`

May show:

- Maternal data
- Fetal growth
- Labs
- Doppler
- Longitudinal engines
- Monitoring
- Intelligence
- Validation
- Insights

Future layers must be clearly labeled.

---

## CMP-FTR-204 — Monitoring Overview

**Runtime:** Server
**Location:** `src/components/provider/monitoring-overview.tsx`

Must define:

- What is monitored
- Frequency
- Source
- Responsibility
- Limitations
- Current availability

---

## CMP-FTR-205 — Maternal Intelligence Preview

**Runtime:** Server composition with optional Client chart
**Location:** `src/components/provider/maternal-intelligence-preview.tsx`

May include:

- Maternal weight trajectory
- Velocity
- Risk context
- Longitudinal review

Must not imply autonomous clinical decisions.

---

## CMP-FTR-206 — Fetal Growth Intelligence Preview

**Runtime:** Server composition with optional Client chart
**Location:** `src/components/provider/fetal-growth-intelligence-preview.tsx`

May include:

- EFW timeline
- Percentiles
- Velocity
- Centile movement
- Doppler context

Must identify:

- Standard
- Data status
- Product Status
- Concept or current interface

---

## CMP-FTR-207 — Provider Workflow

**Runtime:** Server composition with optional Client motion
**Motion ID:** `MOT-PRO-002`
**Location:** `src/components/provider/provider-workflow.tsx`

May show:

1. Patient onboarding
2. Data capture
3. Longitudinal organization
4. Clinical review
5. Monitoring action

Must preserve clinical authority.

---

## CMP-FTR-208 — Validation Overview

**Runtime:** Server
**Location:** `src/components/provider/validation-overview.tsx`

Must separate:

- Professional input
- Technical testing
- Usability
- Pilot
- Clinical validation
- Regulatory status

---

## CMP-FTR-209 — Methodology Summary

**Runtime:** Server composition
**Location:** `src/components/provider/methodology-summary.tsx`

May disclose:

- Public methodology
- Standards
- Explainability
- Limitations

Must not expose restricted intellectual property.

---

## CMP-FTR-210 — Hospital Solution Card

**Runtime:** Server
**Location:** `src/components/provider/hospital-solution-card.tsx`

Must distinguish:

- Current capability
- Integration direction
- Implementation requirements
- Enterprise readiness
- Product Status

---

## CMP-FTR-211 — Fertility and IVF Solution Card

**Runtime:** Server
**Location:** `src/components/provider/fertility-ivf-solution-card.tsx`

Must not imply improved IVF success rates without evidence.

---

## CMP-FTR-212 — Multidisciplinary Care Block

**Runtime:** Server
**Location:** `src/components/provider/multidisciplinary-care-block.tsx`

May include:

- Obstetrician
- MFM specialist
- Dietitian
- Physiotherapist
- Fertility professional
- Patient

Must preserve clear professional roles.

---

## CMP-FTR-213 — Security and Privacy Overview

**Runtime:** Server
**Location:** `src/components/provider/security-privacy-overview.tsx`

Uses only verified technical and legal statements.

---

## CMP-FTR-214 — Provider Demonstration CTA

**Runtime:** Server composition
**Location:** `src/components/provider/provider-demonstration-cta.tsx`

Must route only to an operational demonstration workflow.

---

## CMP-FTR-215 — Pilot Discussion CTA

**Runtime:** Server composition
**Location:** `src/components/provider/pilot-discussion-cta.tsx`

Published only when pilot intake is approved and operational.

---

# 37. Institutional Feature Component Registry

## CMP-FTR-301 — Institutional Hero

**Runtime:** Server
**Location:** `src/components/institutional/institutional-hero.tsx`

Use for hospitals, health systems, employers, insurers, or government contexts where approved.

---

## CMP-FTR-302 — Implementation Pathway

**Runtime:** Server composition
**Location:** `src/components/institutional/implementation-pathway.tsx`

May include:

- Discovery
- Governance
- Configuration
- Training
- Pilot
- Review
- Expansion

Must not promise instant deployment.

---

## CMP-FTR-303 — Governance Summary

**Runtime:** Server
**Location:** `src/components/institutional/governance-summary.tsx`

May include:

- Clinical governance
- Privacy
- Security
- Implementation ownership
- Product Status

---

## CMP-FTR-304 — Enterprise Capability Matrix

**Runtime:** Server
**Location:** `src/components/institutional/enterprise-capability-matrix.tsx`

Must distinguish:

- Available
- Configurable
- Integration dependent
- Planned
- Not available

---

# 38. Page Sections Versus Reusable Components

A page section should remain local when:

- It appears on one page
- It has page-specific narrative
- It has no stable reusable contract
- Reuse would require many page-specific props

A page section should be promoted to the Component Library when:

- It appears across multiple pages
- Its purpose is stable
- Accessibility behavior repeats
- Its content contract is clear
- Its variants represent approved meaning

Do not prematurely extract every page section.

---

# 39. Component Composition Rules

## 39.1 Routes Compose Sections

Routes should compose page sections.

They should not directly assemble low-level primitives repeatedly.

## 39.2 Feature Patterns Compose Shared Components

Example:

```text
ProviderWorkflow
├── SectionHeader
├── NarrativeTimeline
├── ProductStatusBadge
├── ClinicalBoundaryCallout
└── CTAGroup
```

## 39.3 Shared Components Do Not Know Routes

Shared components may receive approved route keys or links.

They should not contain page-specific navigation logic unless navigation is their purpose.

## 39.4 Components Do Not Read Environment Variables

Reusable UI components must not read:

```ts
process.env;
```

Configuration is resolved by server configuration or feature modules and passed through controlled props.

## 39.5 Components Do Not Call External APIs

UI components must not:

- Call CRM
- Call email services
- Call ODRISC APIs
- Initialize analytics providers
- Access monitoring vendors

Feature or application-service layers own those responsibilities.

---

# 40. Form Composition Rules

Form UI components are separate from:

- Zod schemas
- Server Actions
- Application services
- Delivery adapters

Recommended structure:

```text
GeneralContactForm
├── FormField
├── TextInput
├── Textarea
├── PrivacyNotice
├── SubmitButton
└── FormSubmissionResult

Server Action
↓
Form application service
↓
LeadDeliveryPort
↓
Approved adapter
```

The form component must not import the vendor adapter.

---

# 41. Chart Composition Rules

Pages and feature components must use ODRISC chart components.

They must not import Recharts directly.

Approved dependency direction:

```text
Provider feature
↓
ODRISC chart component
↓
Chart Frame and accessibility layer
↓
Recharts
```

Chart data must be typed and validated.

---

# 42. Analytics Ownership Matrix

| Component level     | Analytics ownership                                        |
| ------------------- | ---------------------------------------------------------- |
| Primitive           | None                                                       |
| Layout              | None                                                       |
| Shared UI           | None by default                                            |
| Navigation          | Owns approved navigation events                            |
| Form feature        | Owns form workflow events                                  |
| Audience feature    | Owns audience-selection events                             |
| Application handoff | Owns handoff event                                         |
| Chart               | Owns only approved interaction events                      |
| Page                | Owns page-view metadata through page analytics integration |

Low-level components must not create duplicate events.

---

# 43. Required Analytics Events

Potential approved component events include:

```text
audience_selected
audience_switched
locale_changed
primary_cta_selected
patient_start_selected
provider_demo_started
provider_demo_submitted
provider_demo_failed
contact_submitted
contact_failed
application_handoff_selected
consent_preferences_updated
resource_selected
faq_expanded
```

Actual event approval belongs in the Analytics Specification.

No event may contain form contents or clinical data.

---

# 44. Responsive Requirements

Every component specification must define behavior at:

- Mobile
- Tablet
- Desktop
- Large desktop

Required considerations:

- Reading order
- Touch targets
- Long labels
- Card stacking
- Chart resizing
- Table overflow
- Drawer behavior
- Typography scaling
- Arabic expansion

A desktop-only component is not approved for a P0 public page.

---

# 45. Loading and Failure States

Interactive feature components must define:

- Initial state
- Pending state
- Success state
- Recoverable error
- Non-recoverable error
- Rate limit
- Integration unavailable
- Offline or network failure where relevant

Components must not display a spinner indefinitely.

---

# 46. Content-Length Resilience

Components must be tested with:

- Short English
- Long English
- Arabic
- Long organization names
- Multi-line professional roles
- Long Product Status explanations
- Long resource titles
- Long CTA labels where localization requires them

Do not fix content overflow by reducing font size below the Design System.

---

# 47. Empty-State Rules

Empty states must explain:

- What is unavailable
- Why, where known
- Whether the state is temporary
- What the visitor can do next

Avoid generic language such as:

> Nothing here.

---

# 48. Error-State Rules

Error components must use the Error Catalog.

They should receive:

- Safe message
- Error reference
- Retryability
- Recovery action

They must not receive raw exception objects.

---

# 49. Component Security Rules

Reusable components must not:

- Render untrusted HTML
- Render untrusted SVG directly
- Expose secrets
- Include hidden tracking
- Send form content to analytics
- Build URLs from unvalidated user input
- Use `dangerouslySetInnerHTML` without a documented trusted-content boundary
- Open external links without appropriate security attributes

---

# 50. Component Performance Rules

Components should minimize:

- Client JavaScript
- Large icon imports
- Large animation bundles
- Hydration
- Layout shift
- Repeated observers
- Unnecessary effects
- Re-rendering

Performance review is required for:

- Animated hero
- Charts
- Video
- Consent manager
- Mobile navigation
- Large resource collections

---

# 51. Storybook Naming

Storybook titles should include Component ID.

Example:

```text
Primitives/CMP-PRM-001 Button
Navigation/CMP-NAV-005 Audience Switcher
Provider/CMP-FTR-207 Provider Workflow
```

Story names should describe state:

```text
Default
Patient
Provider
Arabic RTL
Long Content
Reduced Motion
Delivery Failure
```

---

# 52. Component Specification Files

Material components should receive individual specifications using:

```text
docs/design/COMPONENT_SPEC_TEMPLATE.md
```

Recommended location:

```text
docs/engineering/components/
```

Example:

```text
docs/engineering/components/CMP-NAV-005-audience-switcher.md
```

Individual specifications are required for:

- Navigation
- Forms
- Consent
- Charts
- Product Status
- Major motion
- Patient and Provider feature patterns
- Components with clinical or legal implications

---

# 53. Component Registry

The canonical status registry belongs in:

```text
docs/engineering/COMPONENT_REGISTRY.md
```

The registry must include:

- Component ID
- Name
- Category
- Runtime classification
- Owner
- Specification
- Storybook status
- Test status
- Accessibility status
- RTL status
- Production status

This document defines the system.

The registry tracks implementation progress.

---

# 54. Component Review Gates

A component moves through:

1. Need confirmed
2. Contract specified
3. Design approved
4. Accessibility reviewed
5. Content contract reviewed
6. Engineering implemented
7. Storybook completed
8. Tests completed
9. RTL reviewed
10. Performance reviewed
11. Production approved

A component must not be marked `Approved` when material gates remain incomplete.

---

# 55. Component Approval Ownership

## Product Review

Required for:

- Product Status
- Capability components
- Pricing
- Handoffs
- Patient Start
- Demonstration and pilot workflows

## Clinical Review

Required for:

- Risk awareness
- Weight
- Nutrition
- Activity
- Maternal intelligence
- Fetal growth
- Validation
- Methodology
- Clinical safety notices

## Legal and Privacy Review

Required for:

- Consent
- Forms
- Privacy notices
- Security claims
- Legal content
- Data collection

## Accessibility Review

Required for all interactive components.

## Localization Review

Required for all P0 components shown in Arabic.

---

# 56. Deprecation Policy

A deprecated component must:

- Be marked in the Component Registry
- Include the replacement
- Reject new usage through linting or review
- Remain available only during migration
- Include a removal target

Example:

```ts
/**
 * @deprecated Use ProductStatusBadge instead.
 */
```

Retired components should be removed after all usages and tests are migrated.

---

# 57. Breaking Changes

A component change is breaking when it changes:

- Required props
- Meaning of a variant
- Semantic HTML
- Keyboard behavior
- Analytics ownership
- Product Status interpretation
- Content contract
- Server or Client classification
- RTL behavior

Breaking changes require:

- Migration plan
- Usage inventory
- Test updates
- Documentation
- Approval

---

# 58. Prohibited Component Patterns

Do not create:

- `UniversalComponent`
- Page-specific duplicates of shared primitives
- Components with arbitrary color props
- Components with arbitrary spacing props
- Components that emit analytics automatically at primitive level
- Components that call external APIs directly
- Components that read environment variables directly
- Entire page Client Components
- Patient and Provider duplicates with separate foundations
- Components based solely on one screenshot
- Components that hide Product Status
- Clinical alert components that blink or pulse
- Custom controls with incomplete keyboard support
- Components that rely on hover for essential content
- Components with inaccessible gradient text
- Components that render real or identifiable Patient data
- Components that treat concept previews as current interfaces

---

# 59. Component Decision Test

Before creating a component, ask:

1. What recurring problem does it solve?
2. Is an approved component already available?
3. Is this a component, pattern, feature, or page section?
4. Does reuse improve consistency?
5. Is the content contract stable?
6. Does the variant represent meaning?
7. Can it remain a Server Component?
8. What accessibility behavior is required?
9. What is its RTL behavior?
10. Does it show Product Status?
11. Does it own analytics?
12. What failure states exist?
13. What tests are required?
14. Would composition be simpler than configuration?
15. Does this belong in the public website rather than the clinical product?

When the answers are unclear, the component should not yet be added to the governed library.

---

# 60. Rules for AI Agents

Before creating or modifying a component, AI agents must:

1. Read `docs/design/DESIGN_SYSTEM.md`.
2. Read `docs/design/ANIMATION_GUIDELINES.md`.
3. Read `docs/engineering/ARCHITECTURE.md`.
4. Read `docs/engineering/COMPONENT_LIBRARY.md`.
5. Search the Component Registry.
6. Search existing source and Storybook.
7. Identify the Component ID.
8. Identify the runtime classification.
9. Identify audience variants.
10. Identify Product Status requirements.
11. Identify accessibility and RTL behavior.
12. Identify motion requirements.
13. Identify analytics ownership.
14. Add or update tests.
15. Update Storybook.
16. Update the Component Registry.
17. Update the specification when the contract changes.

AI agents must not:

- Create a duplicate component
- Add arbitrary design values
- turn a Server Component into a Client Component without need
- place integration logic inside UI components
- emit analytics from primitives
- bypass Product Status
- bypass accessibility behavior
- introduce a second icon, chart, form, or motion library
- copy a third-party component without adapting it
- treat generated shadcn-style code as automatically approved
- create separate Patient and Provider primitive systems
- create a component solely to match one visual reference
- mark a component approved without tests and review

---

# 61. Locked Component-Library Decisions

The following decisions are locked unless formally changed:

1. Every governed reusable component receives a stable Component ID.
2. Component IDs use the `CMP-<CATEGORY>-<NUMBER>` format.
3. Components are organized into primitives, layout, navigation, shared UI, content, forms, trust, data, and feature patterns.
4. React Server Components are the default.
5. Client boundaries must be small and justified.
6. Low-level primitives do not own analytics.
7. Feature patterns own workflow analytics where approved.
8. Product Status comes from one controlled source.
9. Recharts remains isolated behind ODRISC chart components.
10. Vendor SDKs do not appear in UI components.
11. Components do not read environment variables directly.
12. Components must support English and Arabic.
13. Components must define RTL behavior.
14. Interactive components must meet WCAG 2.2 Level AA requirements.
15. Interactive targets must be at least 44px by 44px.
16. Reduced-motion behavior is required for animated components.
17. Patient and Provider experiences share the same primitive and UI foundations.
18. Patient variants use lower density.
19. Provider variants may use higher density.
20. Product Status and clinical-risk styling remain separate.
21. Clinical boundaries must remain visible.
22. Public forms must not request clinical information.
23. Form UI is separated from Server Actions, application services, and adapters.
24. Component states must include failure and recovery where relevant.
25. Storybook is required for approved reusable components.
26. Component tests and accessibility tests are required.
27. Major components receive individual specifications.
28. The Component Registry tracks implementation maturity.
29. Component deprecation requires a replacement and migration path.
30. Generated components do not become approved automatically.
31. Page-specific sections should not be promoted prematurely.
32. Material component-contract changes require review and documentation.

---

# 62. Remaining Component Questions

The following remain unresolved:

- Which component IDs are required for the first P0 implementation sprint?
- Which primitive components will use Radix and which will remain native?
- Is the custom Select required for V1?
- Which dialog and drawer use cases are approved for P0 pages?
- Does the shared audience gateway use one combined component or separate hero and selector components?
- Which Patient capability components appear on the first release?
- Which Provider intelligence previews appear on the first release?
- Which public charts require interactive tooltips?
- Which charts retain left-to-right chronology in Arabic?
- Which components require formal Patient usability testing?
- Which components require formal Provider usability testing?
- Which components require clinical review before Storybook publication?
- Which Product Status labels appear in cards versus dedicated panels?
- Which component owns the public market selector if one is introduced?
- Does the Patient membership interface launch in Qatar V1?
- Is the Pilot Enquiry Form active at launch?
- Does the Consent Preferences Panel use a custom implementation or approved CMP component?
- Which components require visual-regression checks on every pull request?
- Which components require mobile-device testing on physical devices?
- Is Storybook hosted privately, published internally, or retained as a CI artifact?
- Who owns the Component Registry?
- Who approves new primitives?
- Who approves new feature-pattern components?
- Who owns component deprecation and migration?
- Which components are release blocking for Arabic?
- What is the maximum permitted Client Component bundle contribution per major feature?
- Are public charts lazy loaded by default?
- Which component specifications must be completed before coding begins?

These questions must remain in:

`docs/project/OPEN_QUESTIONS.md`

---

# 63. Foundational Component Summary

The ODRISC Component Library creates one reusable public-website system across Patient and Provider journeys.

Its structure is:

```text
Design tokens
↓
Accessible primitives
↓
Shared layout and UI
↓
Navigation, forms, trust, content, and data
↓
Patient and Provider feature patterns
↓
Page sections
↓
Routes
```

Every component must remain:

- Purposeful
- Typed
- Accessible
- Localization-ready
- RTL-aware
- Product-status accurate
- Clinically responsible
- Server-first
- Testable
- Documented
- Reusable without becoming over-configurable
- Consistent with the ODRISC brand and Design System

---

# 64. Component Source Standards

All component implementations must follow
`docs/engineering/CODING_STANDARDS.md`.

In particular:

- Component files use kebab-case filenames.
- Component identifiers use Pascal case.
- Named exports are preferred.
- Server Components are the default.
- Client boundaries require justification.
- Props are typed and minimal.
- Runtime data is validated before reaching components.
- Components do not read environment variables or call vendor adapters.
- Stories and tests follow the approved naming conventions.

---

# 65. Component Test Evidence

Approved reusable components require applicable evidence for:

- Semantic output
- Keyboard behavior
- Focus
- Accessible name
- Product Status
- Arabic and RTL
- Reduced motion
- Error and loading states
- Storybook
- Axe
- Visual regression
- Cross-component journeys

The exact evidence and release gates are governed by
`docs/engineering/TESTING_STRATEGY.md`.
