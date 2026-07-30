# ADR-014 — ODRISC Public Website Coding Standards

## Status

Approved

## Date

2026-07-26

## Context

The ODRISC Technology Stack, Architecture, and Component Library establish the
approved technologies, module boundaries, and reusable component contracts.

Implementation also requires one canonical set of source-code standards.
Without it, human and AI contributors may introduce inconsistent TypeScript,
unnecessary Client Components, weak validation, inaccessible controls, unsafe
logging, duplicate sources of truth, incompatible formatting, and unreviewed
dependencies.

## Decision

The ODRISC public website will use:

- Prettier for deterministic formatting
- ESLint flat configuration through the ESLint CLI
- Zero lint warnings in CI
- Strict TypeScript
- `noUncheckedIndexedAccess`
- `exactOptionalPropertyTypes`
- `unknown` and runtime validation at trust boundaries
- Zod-derived types where appropriate
- Named exports by default
- Lowercase kebab-case filenames
- React purity and Rules of Hooks
- Server Components by default
- Small justified Client boundaries
- Thin Next.js route files
- Semantic HTML and accessibility-first implementation
- Complete-message localization and logical RTL layouts
- Approved design tokens
- Safe structured errors and logs
- Consent-aware analytics
- Behaviour-focused tests
- Governed generated code
- Full review of AI-generated code
- Documented, time-bounded standards exceptions

## Consequences

- Formatting is automatic rather than debated in review.
- Type and lint failures block merging.
- Runtime inputs require schemas.
- Application and integration code must remain separated.
- Entire pages cannot become Client Components for isolated interaction.
- Sensitive data cannot enter logs or analytics.
- AI-generated source is not trusted without verification.
- Material deviations require a recorded exception or ADR.

## Alternatives Considered

### Allow Team-Preference Coding Styles

Rejected because multiple human and AI contributors require deterministic
standards.

### Use TypeScript Without Additional Strict Options

Rejected because indexed access and optional properties are important sources
of hidden runtime assumptions.

### Permit Warnings in CI

Rejected because warnings accumulate and become ignored.

### Let AI Agents Choose Patterns Per Task

Rejected because generated code must comply with one architecture and component
system.

### Enforce Every Rule Immediately on Legacy Code

Rejected where an approved staged migration is necessary; temporary exceptions
must be recorded and time bounded.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PRD.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/CODING_STANDARDS.md`
- `docs/engineering/CODE_REVIEW_CHECKLIST.md`
- `docs/engineering/CODING_STANDARDS_EXCEPTION_REGISTER.md`
- `ai/rules/NON_NEGOTIABLES.md`
