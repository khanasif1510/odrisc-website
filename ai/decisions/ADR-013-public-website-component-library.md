# ADR-013 — ODRISC Public Website Component Library

## Status

Approved

## Date

2026-07-24

## Context

The ODRISC Design System defines visual and interaction rules, and the Engineering Architecture defines system and module boundaries.

Implementation requires one governed reusable component system. Without a canonical Component Library, human and AI contributors may create duplicate components, excessive Client Components, inconsistent accessibility, separate Patient and Provider foundations, direct vendor integrations, and undocumented visual variants.

## Decision

The ODRISC public website will use:

- Stable Component IDs using `CMP-<CATEGORY>-<NUMBER>`
- Component categories for primitives, layout, navigation, shared UI, content, forms, trust, data, and feature patterns
- React Server Components by default
- Small explicit Client Component boundaries
- Shared Patient and Provider foundations
- Meaningful controlled variants
- One Product Status source
- Low-level primitives with no analytics ownership
- Feature-level analytics ownership
- Vendor integrations outside UI components
- Recharts isolated behind ODRISC chart components
- Storybook documentation
- Individual specifications for material components
- Component, accessibility, RTL, visual, and performance testing
- A Component Registry and governed maturity lifecycle
- Controlled deprecation and migration

## Consequences

- Existing components must be searched before new ones are created.
- Generated components require adaptation and approval.
- Component contracts must be documented before material implementation.
- Entire pages should not become Client Components for isolated interaction.
- Patient and Provider variants must share semantics and accessibility.
- Product Status cannot be inferred by components.
- Every P0 component requires Arabic and RTL review.
- Material contract changes require documentation and migration planning.

## Alternatives Considered

### Build Every Page Independently

Rejected because it would create duplicated design, accessibility, and engineering behavior.

### Use a Large Third-Party Component Suite

Rejected because it would constrain ODRISC branding, increase bundle size, and introduce components not aligned with the approved Design System.

### Separate Patient and Provider Libraries

Rejected because both journeys belong to one ODRISC brand and architecture.

### Allow Unrestricted Component Variants

Rejected because variants should communicate meaning rather than provide arbitrary page styling.

### Let Storybook Define the System

Rejected because Storybook documents implementation but does not replace canonical requirements.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/COMPONENT_REGISTRY.md`
- `docs/engineering/COMPONENT_QA_CHECKLIST.md`
- `docs/design/COMPONENT_SPEC_TEMPLATE.md`
- `ai/rules/NON_NEGOTIABLES.md`