# ADR-009 — ODRISC Design System

## Status

Approved

## Date

2026-07-24

## Context

The ODRISC Brand Foundation defines the strategic brand identity, but implementation requires a precise reusable system of tokens, typography, colors, layouts, responsive rules, components, accessibility standards, and audience variants.

Without a canonical Design System, contributors and AI coding assistants may introduce inconsistent colors, typography, spacing, components, gradients, accessibility behavior, or separate Patient and Provider visual identities.

## Decision

`docs/design/DESIGN_SYSTEM.md` will define the canonical ODRISC public-website design system.

The V1 system will use:

- Inter for Latin typography
- Noto Sans Arabic for Arabic typography
- White as the dominant surface
- `#4D4D4D` as the primary text color
- `#FF7680` as the canonical coral
- `#80FFCC` as the canonical mint
- A coral-dominant signature gradient
- A separate semantic color system
- A 4px spacing base
- Responsive 12-, 8-, and 4-column grids
- Accessible dark-neutral primary buttons
- A 44px minimum interactive target
- Lucide as the standard interface icon family
- Shared components with Patient and Provider density variants
- WCAG 2.2 Level AA as the accessibility target
- Arabic and right-to-left support
- No public dark mode in V1

## Consequences

- Public website styling must use documented tokens.
- Patient and Provider experiences must share one component foundation.
- Clinical risk, Product Status, and brand colors must remain distinct.
- New components and tokens require documentation.
- Hard-coded visual values should be removed when equivalent tokens exist.
- A Design QA Checklist and token changelog must be maintained.
- Motion requires separate Animation Guidelines.
- Engineering must create a single code-level token source.

## Alternatives Considered

### Design Each Page Independently

Rejected because it would create inconsistency, duplication, and accessibility risk.

### Use Brand Colors Directly for Every UI State

Rejected because brand colors do not provide a complete semantic or clinical-status system.

### Separate Patient and Provider Design Systems

Rejected because both experiences belong to one ODRISC platform.

### Gradient-Filled Primary Buttons

Rejected as the default because accessible contrast is harder to maintain across the gradient.

### Dark Mode at Initial Launch

Deferred because it requires additional brand, chart, clinical-state, Arabic, and accessibility validation.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/BRAND_ASSET_REGISTER.md`
- `docs/design/DESIGN_QA_CHECKLIST.md`
- `docs/design/COMPONENT_SPEC_TEMPLATE.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/product/REQUIREMENTS_TRACEABILITY.md`
- `ai/rules/NON_NEGOTIABLES.md`