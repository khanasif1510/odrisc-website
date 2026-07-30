# ADR-015 — ODRISC Public Website Testing Strategy

## Status

Approved

## Date

2026-07-26

## Context

The ODRISC public website requires verifiable evidence that implementation is
functional, accessible, localization-ready, Product Status accurate, privacy
preserving, secure, performant, and operationally reversible.

The approved Technology Stack, Architecture, Component Library, and Coding
Standards require a single test strategy that governs human and AI contributors,
continuous integration, staging, and production verification.

## Decision

The public website will use:

- Static validation before browser testing
- Vitest for unit, integration, and contract tests
- React Testing Library and User Event for component behavior
- Playwright for E2E, cross-browser, mobile, Arabic, RTL, reduced-motion, smoke,
  and visual testing
- Axe for automated accessibility testing
- Storybook for component-state and component-accessibility verification
- Synthetic test data only
- A hybrid colocated and centralized test structure
- Risk-based P0 release gates
- Controlled coverage thresholds
- One diagnostic Playwright retry in CI
- Formal flaky-test governance
- Non-destructive production smoke tests
- Staging release verification
- Recorded manual QA
- Tested immutable-image rollback

Async Server Components will be verified through extracted logic, contracts,
production builds, and Playwright rather than being converted into Client
Components for easier unit testing.

## Consequences

- Test evidence becomes part of release approval.
- P0 tests cannot be skipped or quarantined.
- Arabic and reduced-motion behavior are first-class release concerns.
- Automated accessibility does not replace manual review.
- Visual baseline changes require approval.
- Production tests cannot create operational records.
- Test artifacts must follow privacy rules.
- Failed retries are recorded as flaky.
- Defect fixes require regression evidence.
- The same immutable image must pass staging before production promotion.

## Alternatives Considered

### Browser Tests Only

Rejected because pure logic and contracts can be verified faster and more
precisely at lower levels.

### Unit Tests Only

Rejected because navigation, focus, responsive behavior, browser compatibility,
RTL, and real application flows require browsers.

### Cypress

Not selected because Playwright is the approved E2E and cross-browser tool.

### Jest

Not selected because Vitest is the approved unit and integration runner.

### Managed Visual Platform at V1

Deferred because Playwright screenshot comparison provides the approved initial
visual-regression capability without an additional vendor.

### Real Production Integrations in Automated Tests

Rejected because they create privacy, reliability, and operational risks.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PRD.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/CODING_STANDARDS.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `docs/engineering/TEST_CASE_REGISTRY.md`
- `docs/engineering/RELEASE_QUALITY_GATE.md`
- `docs/engineering/TEST_DATA_POLICY.md`
- `docs/engineering/FLAKY_TEST_REGISTER.md`
- `ai/rules/NON_NEGOTIABLES.md`