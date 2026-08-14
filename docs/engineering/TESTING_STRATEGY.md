# ODRISC Public Website Testing Strategy

## Document Status

**Document:** Testing Strategy
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical public-website test architecture, quality-gate, release-verification, and defect-governance specification
**System:** ODRISC public website
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Technical owner:** CTO
**Quality owner:** To be assigned
**Approval authority:** Founder and CTO with designated engineering, QA, accessibility, clinical, privacy, security, localization, design, analytics, content, and DevOps reviewers
**Effective date:** 2026-07-26

## Related Documents

- `PROJECT_CONTEXT.md`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/project/SOURCE_OF_TRUTH.md`
- `docs/project/ASSUMPTIONS.md`
- `docs/project/OPEN_QUESTIONS.md`
- `docs/project/GLOSSARY.md`
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
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/COMPONENT_REGISTRY.md`
- `docs/engineering/CODING_STANDARDS.md`
- `docs/engineering/CODE_REVIEW_CHECKLIST.md`
- `docs/engineering/DEPENDENCY_POLICY.md`
- `docs/engineering/ENVIRONMENT_VARIABLES.md`
- `docs/engineering/PERFORMANCE_BUDGET.md`
- `docs/engineering/DATA_CLASSIFICATION.md`
- `docs/engineering/ERROR_CATALOG.md`
- `docs/engineering/INTEGRATION_REGISTRY.md`
- `docs/engineering/SECURITY_ARCHITECTURE.md`
- `docs/engineering/DEPLOYMENT_RUNBOOK.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

---

# 1. Purpose

This document defines how the ODRISC public website is verified before, during, and after implementation and deployment.

It establishes:

- Test objectives
- Test levels
- Static verification
- Unit testing
- Component testing
- Integration testing
- Contract testing
- End-to-end testing
- Browser and mobile coverage
- Accessibility testing
- Arabic and RTL testing
- Reduced-motion testing
- Visual-regression testing
- Content and Product Status validation
- Form and integration testing
- Analytics and consent testing
- Security verification
- Performance verification
- Test-data rules
- Mocking and isolation
- Coverage expectations
- Continuous-integration gates
- Staging verification
- Production smoke testing
- Manual quality assurance
- Defect severity
- Flaky-test governance
- Release criteria
- Traceability
- AI-agent responsibilities

This document answers:

> What evidence is required before an ODRISC public-website change may be considered safe, accurate, accessible, and ready for release?

---

# 2. Scope

This strategy applies to:

- Public routes
- Shared entry experience
- Patient pages
- Provider pages
- Institutional pages
- Resource pages
- Company pages
- Legal pages
- Public forms
- Consent controls
- Analytics
- Application handoffs
- Public product previews
- Public diagrams and charts
- Localization
- Arabic and RTL behavior
- Error states
- Loading states
- Server Actions
- Route Handlers
- External integration adapters
- Runtime configuration
- SEO outputs
- Security headers
- Local production builds
- Static sample-data validation
- Manual pre-publication verification

It does not validate the correctness of:

- Internal clinical algorithms
- Patient-application calculations
- Provider-platform calculations
- OCR extraction
- FHIR workflows
- SQL Server behavior
- Clinical alerts
- Regulated medical-device functions
- Native mobile application behavior

Those systems require separate test strategies.

Public product-preview tests confirm representation and website behavior.

They do not constitute clinical validation.

---

# 3. Quality Mission

The testing system must give ODRISC confidence that:

1. Visitors can reach the correct audience journey.
2. Patients can understand the public information without being misled.
3. Providers can understand the platform without unsupported claims.
4. Product Status is accurate.
5. Clinical boundaries remain visible.
6. Forms work without collecting prohibited clinical data.
7. Consent controls analytics.
8. English and Arabic experiences are equivalent in meaning.
9. RTL layouts remain usable.
10. Keyboard and assistive-technology users can complete essential journeys.
11. Reduced-motion users receive the same information.
12. Public content is present in the initial rendered output.
13. Application handoffs are safe and operational.
14. External-service failures produce safe recovery.
15. Sensitive data does not enter logs, analytics, fixtures, or reports.
16. Performance budgets are respected.
17. Staging cannot be indexed accidentally.
18. Releases can be verified and rolled back safely.

---

# 4. Testing Principles

## 4.1 Test Risk, Not Implementation Volume

Test depth must reflect the consequence of failure.

A public CTA, Product Status statement, consent choice, form submission, or clinical boundary requires stronger evidence than a decorative separator.

## 4.2 Test Observable Contracts

Tests should verify:

- What the user perceives
- What an integration receives
- What an application service returns
- What the system publishes
- What a route exposes

Tests should not be coupled unnecessarily to private implementation.

## 4.3 Prevent Before Detect

Static validation should prevent invalid:

- Routes
- Component IDs
- Product Status values
- Analytics events
- Content metadata
- Environment variables
- Translation omissions

before browser tests are required.

## 4.4 Test at the Lowest Sufficient Level

Use the smallest test level that proves the requirement reliably.

Do not use a full browser test for a pure formatter.

Do not use a unit test when the requirement concerns real browser focus or layout.

## 4.5 Browser Tests Cover Browser Reality

Use Playwright for:

- Navigation
- Focus
- Forms
- Browser APIs
- Responsive behavior
- RTL
- Reduced motion
- Cross-browser behavior
- Full application flows

## 4.6 Accessibility Is Not a Separate Final Phase

Accessibility verification begins at:

- Component specification
- Storybook
- Component tests
- Page tests
- Manual QA
- Release review

## 4.7 Clinical and Product Accuracy Require Human Review

Automation can confirm that approved wording is present.

Automation cannot independently determine whether a clinical statement, evidence description, or Product Status decision is appropriate.

## 4.8 No Test May Create a Privacy Risk

Test systems must not use:

- Real Patient data
- Production form submissions
- Production credentials
- Real clinical records
- Identifiable ultrasound information
- Sensitive analytics payloads

## 4.9 A Passing Retry Is Still a Quality Signal

A test that fails and passes on retry is flaky until investigated.

Retries assist diagnosis.

They do not redefine the first failure as acceptable.

## 4.10 Production Verification Must Be Non-Destructive

Production smoke tests must not:

- Submit real leads
- Trigger real marketing events
- Create application accounts
- Send messages to clinicians
- Alter production state

---

# 5. Test Portfolio

The ODRISC test portfolio is layered:

```text
Requirements and specifications
↓
Static validation
↓
Unit tests
↓
Component tests
↓
Integration and contract tests
↓
Accessibility and visual tests
↓
End-to-end browser tests
↓
Staging verification
↓
Manual release QA
↓
Production smoke and monitoring
```

This is not a rigid numerical test pyramid.

The distribution should favour fast deterministic checks while preserving enough browser and manual testing for the actual public experience.

---

# 6. Test Levels

| Level              | Primary purpose                                                  | Environment                    | Main tooling                                |
| ------------------ | ---------------------------------------------------------------- | ------------------------------ | ------------------------------------------- |
| Static validation  | Prevent invalid configuration, content, routes, and architecture | Node.js and CI                 | TypeScript, ESLint, repository scripts, Zod |
| Unit               | Verify isolated pure logic and domain contracts                  | Node.js                        | Vitest                                      |
| Component          | Verify one component’s behavior and accessibility                | JSDOM and Storybook            | Vitest, React Testing Library, User Event   |
| Integration        | Verify collaboration between first-party modules                 | Node.js or JSDOM               | Vitest                                      |
| Contract           | Verify internal and external boundary schemas                    | Node.js                        | Vitest, Zod, controlled fixtures            |
| Accessibility      | Detect automated and manual accessibility failures               | Storybook and browser          | Axe, Playwright, manual review              |
| Visual regression  | Detect unintended visual changes                                 | Consistent browser environment | Playwright screenshots                      |
| End-to-end         | Verify complete public journeys                                  | Real Next.js application       | Playwright                                  |
| Smoke              | Verify critical deployment availability                          | Staging and production         | Playwright or controlled scripts            |
| Manual exploratory | Discover usability, content, and cross-system issues             | Real browsers and devices      | Human review                                |
| Usability review   | Assess comprehension and interaction                             | Controlled participants        | Human research protocol                     |

---

# 7. Approved Testing Toolchain

The approved testing toolchain is:

| Purpose                       | Tool                                 |
| ----------------------------- | ------------------------------------ |
| Static type verification      | TypeScript                           |
| Source and architecture rules | ESLint flat configuration            |
| Formatting verification       | Prettier                             |
| Runtime schema validation     | Zod                                  |
| Unit and integration testing  | Vitest                               |
| Component rendering           | React Testing Library                |
| User interaction              | `@testing-library/user-event`        |
| Component-state documentation | Storybook                            |
| Browser automation            | Playwright                           |
| Automated accessibility       | Axe through Storybook and Playwright |
| Visual comparison             | Playwright screenshot assertions     |
| Coverage                      | Vitest V8 coverage                   |
| Production build verification | Next.js production build             |
| Publication verification      | Local smoke and accessibility checks |

A second unit-test runner, E2E runner, accessibility engine, or visual-testing platform must not be introduced without approval.

---

# 8. Current Tooling Constraints

Vitest and React Testing Library are approved for synchronous Server Components, Client Components, functions, schemas, and services. The current Next.js guidance states that async Server Components are not directly supported by Vitest and recommends browser-level testing for those components. Therefore, async Server Component behavior must be covered through extracted logic tests, route-level integration, build verification, and Playwright.

Playwright projects are used to run the same journeys across browsers, devices, locales, and other controlled settings. Playwright also supports locale and reduced-motion emulation.

Testing Library queries should prefer accessible roles, labels, and visible text so tests resemble user interaction rather than internal markup.

Automated Axe tests identify many accessibility issues but do not replace manual accessibility verification. Playwright provides an official Axe integration pattern, and Storybook accessibility checks may be configured to fail component testing when violations occur.

Playwright supports deterministic screenshot comparisons. Baselines must therefore be produced in a controlled environment rather than across inconsistent developer operating systems.

---

# 9. Canonical Test Structure

The repository uses a hybrid test layout.

## 9.1 Colocated Tests

Colocate tests when they verify one source module or component.

```text
src/
├── components/
│   └── trust/
│       ├── product-status-badge.tsx
│       ├── product-status-badge.test.tsx
│       └── product-status-badge.stories.tsx
│
├── lib/
│   └── metadata/
│       ├── create-page-metadata.ts
│       └── create-page-metadata.test.ts
│
└── server/
    └── application/
        └── forms/
            ├── submit-demo-request.ts
            └── submit-demo-request.test.ts
```

## 9.2 Centralized Tests

Use centralized directories for cross-module, environment, and journey tests.

```text
tests/
├── setup/
│   ├── vitest.setup.ts
│   └── test-environment.ts
│
├── integration/
│   ├── forms/
│   ├── content/
│   ├── analytics/
│   ├── routing/
│   └── runtime-config/
│
├── contracts/
│   ├── odrisc-api/
│   ├── form-delivery/
│   └── public-config/
│
├── e2e/
│   ├── shared/
│   ├── patient/
│   ├── provider/
│   ├── forms/
│   ├── consent/
│   ├── localization/
│   ├── accessibility/
│   ├── security/
│   └── smoke/
│
├── visual/
│   ├── components/
│   └── pages/
│
├── fixtures/
│   ├── content/
│   ├── integrations/
│   ├── charts/
│   ├── forms/
│   └── localization/
│
├── helpers/
│   ├── accessibility.ts
│   ├── consent.ts
│   ├── locale.ts
│   └── test-data.ts
│
└── reports/
```

Generated reports must not be committed.

---

# 10. Test Naming

Unit and component tests use:

```text
<subject>.test.ts
<subject>.test.tsx
```

End-to-end tests use:

```text
<journey>.spec.ts
```

Stories use:

```text
<component>.stories.tsx
```

Examples:

```text
product-status.test.ts
audience-switcher.test.tsx
provider-demo-request.spec.ts
arabic-navigation.spec.ts
product-status-badge.stories.tsx
```

Test descriptions must state observable behavior.

Preferred:

```ts
it("shows the approved Pilot status without implying general availability", () => {
  // ...
});
```

Avoid:

```ts
it("works", () => {
  // ...
});
```

---

# 11. Test Tags

Playwright tests may use tags through the approved project convention.

Required tag vocabulary:

```text
@p0
@p1
@smoke
@patient
@provider
@shared
@institutional
@form
@consent
@analytics
@handoff
@a11y
@rtl
@reduced-motion
@visual
@security
@seo
@integration
```

Rules:

- `@p0` identifies a release-critical requirement.
- `@smoke` identifies a non-destructive deployment check.
- Tags describe risk or test purpose.
- Tags must not replace meaningful test names.
- New tag categories require test-owner approval.

---

# 12. Requirement Traceability

Every material test must map to at least one of:

- Requirement ID
- Page ID
- Component ID
- Integration ID
- Error code
- Motion ID
- Product Status capability ID

Recommended test metadata:

```ts
test.describe("PRO-PG-016 Provider demonstration request", () => {
  // Requirement: SHR-020
  // Components: CMP-FRM-007, CMP-FRM-009
  // Integration: INT-WEB-003
});
```

The repository must not embed extensive requirement prose in tests.

Stable identifiers are sufficient.

---

# 13. Test Ownership

## Test Author

The author of a behavior change owns:

- Initial tests
- Fixture changes
- Expected-output updates
- Failure investigation during review

## Module Owner

The module owner owns:

- Long-term test maintenance
- Flaky-test resolution
- Coverage health
- Contract updates

## QA Owner

The QA owner owns:

- Test strategy
- Release-gate execution
- Test registries
- Defect classification
- Manual QA coordination
- Flaky-test governance

## Clinical Reviewer

The clinical reviewer owns:

- Clinical-language approval
- Clinical-boundary review
- Accuracy of public clinical context
- Review of illustrative clinical data

The clinical reviewer does not own test-framework implementation.

## Accessibility Reviewer

The accessibility reviewer owns:

- Manual interaction review
- Screen-reader review
- Exception approval for accessibility-test limitations

---

# 14. Static Validation

Static validation is the fastest quality layer and must run before browser tests.

Required validations include:

- Formatting
- ESLint
- Strict TypeScript
- Route Registry
- Page ID uniqueness
- Component ID uniqueness
- Product Status vocabulary
- Content metadata
- Resource slugs
- Translation completeness
- Internal links
- Analytics event registry
- Error Catalog references
- Integration Registry references
- Environment schema
- Runtime public-config allowlist
- Architecture import boundaries
- Prohibited source patterns
- Staging indexation configuration
- Performance budgets
- Generated-file consistency

Suggested commands:

```text
pnpm format:check
pnpm lint
pnpm typecheck
pnpm validate:content
pnpm validate:routes
pnpm validate:components
pnpm validate:i18n
pnpm validate:analytics
pnpm validate:architecture
pnpm validate:security
pnpm validate:performance
```

Placeholder validators that always pass are prohibited.

---

# 15. Unit Testing

Unit tests verify isolated:

- Schemas
- Normalizers
- Formatters
- Metadata helpers
- Route helpers
- Product Status mappings
- Consent rules
- Analytics filtering
- Error mapping
- Feature configuration
- Content transformations
- Retry decisions
- URL allowlisting
- Data-classification guards
- Public runtime-config allowlisting

Unit tests should be:

- Fast
- Deterministic
- Isolated
- Free from network access
- Free from production configuration
- Focused on one contract

---

# 16. Unit-Test Boundaries

Good unit-test subjects:

```text
normalizeFormInput
createCanonicalUrl
mapProductStatus
validateAnalyticsPayload
isApprovedHandoffDestination
mapIntegrationError
createPublicRuntimeConfig
```

Poor unit-test subjects:

- Complete page journeys
- Real browser focus
- Responsive layouts
- Hosting behavior, which is outside repository test scope
- External provider uptime
- Actual analytics transmission

Those require other test levels.

---

# 17. Component Testing

Component tests verify:

- Semantic output
- Accessible name
- Keyboard behavior
- Focus movement
- State transitions
- Validation messages
- Loading state
- Error state
- Product Status display
- Patient and Provider variants
- RTL behavior where DOM-based verification is sufficient
- Reduced-motion state where component behavior changes

Component tests use:

- React Testing Library
- User Event
- Accessible role and label queries
- JSDOM
- Approved providers and test wrappers

Do not query primarily through:

- CSS classes
- Internal component state
- Implementation-only IDs
- DOM structure that users do not perceive

---

# 18. Component Query Priority

Preferred query order:

1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText` only when meaningful
4. `getByText`
5. `getByDisplayValue`
6. Semantic test ID only when no user-facing query is practical

A test ID must identify stable meaning.

Preferred:

```text
data-testid="product-status-description"
```

Avoid:

```text
data-testid="gray-box-2"
```

---

# 19. Component Interaction

Use User Event for realistic interactions.

Preferred:

```ts
await user.click(screen.getByRole("button", { name: "Open menu" }));
```

Avoid:

```ts
fireEvent.click(element);
```

unless a lower-level event is specifically under test.

Tests should verify the result of interaction, not merely that a callback was invoked, unless callback invocation is the component contract.

---

# 20. Storybook Testing

Storybook is required for approved reusable components.

Stories must include applicable states:

- Default
- Patient
- Provider
- Institutional
- Long English
- Arabic
- RTL
- Keyboard focus
- Disabled
- Loading
- Error
- Empty
- Reduced motion
- Product Status variants
- Mobile viewport

Storybook must not contain:

- Production secrets
- Real lead data
- Real Patient information
- Live production integrations
- Unsupported Product Status claims

---

# 21. Async Server Component Testing

Async Server Components are not directly treated as ordinary React Testing Library subjects.

Required coverage pattern:

1. Extract pure data mapping into unit-tested functions.
2. Test content and service contracts separately.
3. Verify production build success.
4. Verify route rendering through Playwright.
5. Verify error and not-found behavior through browser tests.
6. Verify metadata through build or route-level checks.

Do not force an async Server Component into a Client Component merely to make it easier to unit test.

---

# 22. Integration Testing

Integration tests verify collaboration between first-party modules.

Examples:

- Server Action → validation → application service → fake delivery adapter
- Consent state → analytics guard → analytics transport
- Product Status source → capability component model
- Route Registry → navigation → sitemap
- Content metadata → resource index → metadata output
- Runtime environment → public-config allowlist
- Error mapping → safe form result
- ODRISC API adapter → response schema → internal model

Integration tests should avoid real external providers by default.

---

# 23. Integration Test Example

```text
Submitted Provider demo data
↓
Normalization
↓
Zod validation
↓
Rate-limit decision
↓
Demo-request application service
↓
Fake LeadDeliveryPort
↓
Typed success result
```

The test should verify:

- Normalized values
- No prohibited fields
- Correct adapter request
- No raw form contents in logs
- Stable returned result
- Correct analytics category without personal data

---

# 24. Contract Testing

Contract tests verify trust boundaries.

Required contract targets:

- Public ODRISC API responses
- Form-delivery adapter requests
- Form-delivery responses
- Public runtime configuration
- Product Status records
- Pricing records
- Resource metadata
- Analytics event payloads
- Consent cookie shape
- Application-handoff configuration
- Error payloads
- Webhooks when introduced

A TypeScript type alone is not a contract test.

Fixtures must be parsed through the runtime schema.

---

# 25. External Provider Contract Tests

A provider contract test may use:

- Recorded approved fixture
- Provider sandbox
- Local fake server
- Schema-level request assertion

It must not:

- Contact production
- Send a real lead
- Include real personal data
- Depend on unstable provider content
- expose provider credentials in artifacts

Sandbox contract tests may run on a controlled schedule rather than every pull request.

---

# 26. End-to-End Testing

Playwright verifies complete public journeys against a running production build.

Required E2E characteristics:

- Real Next.js application
- Real routing
- Real localization
- Real browser interaction
- Controlled test adapters
- No production provider dependencies
- Deterministic test content
- Isolated browser contexts
- Accessible selectors
- Stable assertions
- No arbitrary sleeps

---

# 27. P0 End-to-End Journeys

The following are release-critical.

## Shared Entry

- Load shared root
- Understand Patient and Provider choices
- Enter Patient journey
- Return and enter Provider journey
- Preserve direct deep links
- Switch audience safely

## Patient Journey

- Open Patient homepage
- Navigate through primary Patient sections
- View Product Status
- View clinical boundary
- Reach operational Patient Start destination
- Recover from unavailable destination

## Provider Journey

- Open Provider homepage
- Navigate Provider sections
- View current versus future capability
- View evidence and validation context
- Start demonstration request
- Complete demonstration request on staging
- Recover from simulated delivery failure

## Localization

- Change English to Arabic
- Preserve equivalent route where available
- Verify `lang` and `dir`
- Navigate in RTL
- Return to English
- Handle unavailable translation safely

## Consent

- Load page with non-essential analytics disabled
- Accept analytics
- Verify approved analytics initialization
- Withdraw analytics
- Verify future events are blocked
- Preserve access to essential site functions

## Forms

- Required-field validation
- Invalid email handling
- Long-input handling
- Honeypot behavior
- Duplicate submission prevention
- Success state
- Delivery failure
- Rate limit
- Privacy notice
- Keyboard and screen-reader behavior

## Handoffs

- Approved destination only
- External-origin notice
- No sensitive query parameters
- Product Status displayed
- Unavailable destination recovery

## Errors

- 404
- Route error
- Integration unavailable
- Runtime config failure
- Accessible recovery
- Safe public error reference

---

# 28. Browser Project Matrix

Playwright projects are configured for these initial environments:

| Project            | Browser or mode                  | Purpose                                       | Required scope                   |
| ------------------ | -------------------------------- | --------------------------------------------- | -------------------------------- |
| `chromium-desktop` | Chromium desktop                 | Primary development and full functional suite | All P0 and changed-feature tests |
| `firefox-desktop`  | Firefox desktop                  | Cross-browser verification                    | P0 journeys                      |
| `webkit-desktop`   | WebKit desktop                   | Safari-engine verification                    | P0 journeys                      |
| `mobile-chrome`    | Android-style Chromium emulation | Mobile navigation and forms                   | P0 mobile journeys               |
| `mobile-safari`    | iPhone-style WebKit emulation    | Mobile Safari behavior                        | P0 mobile journeys               |
| `arabic-rtl`       | Chromium with `ar-QA` locale     | Arabic and RTL                                | All P0 Arabic routes             |
| `reduced-motion`   | Chromium with reduced motion     | Motion-equivalent experience                  | All material motion features     |
| `staging-smoke`    | Approved staging browser         | Post-deployment verification                  | Smoke suite                      |
| `production-smoke` | Approved production browser      | Non-destructive verification                  | Production smoke suite           |

Device descriptors must be confirmed against the installed Playwright version.

---

# 29. Pull-Request Browser Scope

Every pull request must run:

- Full relevant Vitest suite
- Chromium P0 suite
- Changed-feature Chromium E2E tests
- Arabic and RTL tests for affected components or pages
- Reduced-motion tests for affected motion
- Accessibility tests for affected pages
- Selected visual tests
- Cross-browser smoke for changed critical journeys

A documentation-only change may use a reduced test path when no executable or publishable content changes.

---

# 30. Main-Branch Browser Scope

Main-branch validation must run:

- Complete P0 Chromium suite
- Complete P0 Firefox suite
- Complete P0 WebKit suite
- Mobile Chrome P0
- Mobile Safari P0
- Arabic RTL P0
- Reduced-motion suite
- Accessibility suite
- Selected visual regression
- Local production build

---

# 31. Release Browser Scope

Before production promotion:

- All P0 tests pass against staging.
- All release-target locale tests pass.
- Cross-browser P0 tests pass.
- Mobile P0 tests pass.
- Accessibility automation passes.
- Manual accessibility review is complete for changed critical areas.
- Visual changes are approved.
- Form-delivery staging integration is verified.
- Analytics consent behavior is verified.
- Security and performance gates pass.
- Manual release checklist is approved.

---

# 32. Test Isolation

Each test must be independent.

A test must not depend on:

- Previous test order
- Browser state from another test
- A prior form submission
- Shared mutable fixture state
- Production provider state
- Current real date unless controlled
- Random generated data without a seed

Playwright browser contexts should remain isolated by default.

---

# 33. Network Isolation

Unit and component tests must fail unexpected network requests.

Integration tests should use:

- Fake ports
- Stubbed fetch
- Local controlled responders
- Approved fixtures

E2E tests should use:

- The actual website server
- Test-mode integration adapters
- Controlled external-route interception only where necessary

Do not intercept so much of the application that the end-to-end test no longer tests the real flow.

---

# 34. Mocking Rules

Mock architectural boundaries, not every internal function.

Preferred mocks:

- Lead delivery port
- Analytics transport
- Error-monitoring transport
- Clock
- Random identifier generator
- Public API adapter
- Runtime environment
- Browser capability

Avoid mocking:

- The function under test
- All child components
- Every formatter
- Every internal helper
- React behavior
- Next.js behavior already exercised by browser tests

---

# 35. Fakes, Stubs, and Spies

Use terminology consistently:

- **Fake:** working controlled implementation
- **Stub:** predefined response
- **Spy:** observes calls
- **Mock:** configured interaction expectation

Prefer a fake adapter when multiple tests require realistic application-service behavior.

Prefer a stub for one deterministic external response.

Use spies sparingly.

---

# 36. Time and Date Control

Tests depending on dates must use a controlled clock.

Use:

- Fixed ISO timestamps
- Vitest fake time
- Injected clock interfaces
- Playwright clock controls where justified

Do not rely on:

- Current local time
- CI timezone
- Developer timezone
- Relative dates that become stale

Qatar-specific scenarios should set:

```text
Asia/Qatar
```

India-specific validation scenarios should set:

```text
Asia/Kolkata
```

---

# 37. Randomness

Randomness must be:

- Seeded
- Injected
- Replaced with deterministic fixtures
- Captured in failure output

Do not create random React keys.

Do not use random personal information that might resemble a real submission.

---

# 38. Test Data Policy

All test data must be:

- Synthetic
- Clearly non-production
- Safe to commit
- Free from identifiable health information
- Free from real partner credentials
- Free from production email addresses
- Appropriate for the test purpose

Approved email domains include:

```text
example.test
example.invalid
```

Product-preview data must be marked:

```text
Illustrative data
```

when visible.

---

# 39. Clinical Test Fixtures

Illustrative maternal or fetal data may be used only for public-preview verification.

Requirements:

- Synthetic
- Not linked to a real person
- Approved by the clinical reviewer
- Clearly labelled as illustrative
- Not presented as a validated clinical case
- Not reused as evidence
- Not used to validate clinical algorithm correctness

The test suite may verify that:

- Units are shown
- Labels are present
- Product-preview status is visible
- Trends render consistently
- Missing data is represented

It must not claim that the clinical interpretation is medically correct unless a separate approved clinical test protocol exists.

---

# 40. Form Test Data

Public form tests may use:

```text
Name: Test User
Email: provider@example.test
Organization: ODRISC Test Hospital
Role: Obstetrician — Test Fixture
Message: Synthetic test enquiry. No clinical information.
```

Form fixtures must never include:

- Symptoms
- Medical history
- Patient records
- Pregnancy details
- Ultrasound values
- Risk results
- Real phone numbers
- Real personal email addresses

---

# 41. Fixture Governance

Every shared fixture must define:

- Purpose
- Owner
- Data classification
- Expected schema
- Whether it represents success or failure
- Whether clinical review is required
- Last review date

Large opaque JSON fixtures are discouraged.

Fixtures should contain only fields needed for the test.

---

# 42. Accessibility Testing

Accessibility testing has four layers:

1. Static linting
2. Component-level Axe
3. Page-level Axe
4. Manual accessibility review

Automated accessibility tests do not prove full WCAG conformance.

They identify detectable failures.

---

# 43. Component Accessibility Tests

Every approved interactive component must test:

- Accessible name
- Semantic role
- Keyboard operation
- Focus behavior
- Disabled state
- Error relationship
- Expanded and collapsed state
- Dialog or drawer focus management
- Touch-target implementation where measurable
- Axe violations

Applicable components include:

- Buttons
- Links
- Audience switcher
- Locale switcher
- Mobile navigation
- Dialogs
- Drawers
- Accordions
- Tabs
- Forms
- Consent controls
- Chart interactions

---

# 44. Page Accessibility Tests

P0 pages must be scanned for:

- Detectable WCAG A and AA failures
- Heading structure
- Landmark presence
- Form labels
- Duplicate IDs
- Link names
- Color contrast where detectable
- ARIA validity
- Document language
- Dialog state
- Hidden-content errors

Approved Axe exclusions must be:

- Narrow
- Documented
- Linked to an issue
- Reviewed by accessibility ownership
- Time bounded

Broad rule disabling is prohibited.

---

# 45. Manual Accessibility Matrix

Before a major release, manual review must include:

- Keyboard-only navigation
- Visible focus
- Skip link
- Mobile navigation
- Dialog and drawer focus
- Form errors
- Error summary
- Consent withdrawal
- Zoom and text enlargement
- Narrow viewport reflow
- Reduced motion
- VoiceOver with Safari
- At least one additional screen-reader and browser combination
- Arabic reading and navigation review
- Chart text alternatives
- Video captions and transcripts where applicable

---

# 46. Accessibility Tree Assertions

Targeted ARIA-tree assertions may be used for:

- Navigation structure
- Dialog structure
- Error summary
- Form grouping
- Major heading hierarchy

Do not use broad accessibility-tree snapshots as the only accessibility test.

Targeted assertions are easier to review and maintain.

---

# 47. Arabic Testing

Arabic testing must verify:

- Correct translation loaded
- `lang="ar"`
- `dir="rtl"`
- Navigation order
- Text alignment
- Logical spacing
- Directional icons
- Form labels and errors
- CTA meaning
- Product Status meaning
- Clinical-boundary equivalence
- Long-content resilience
- Number and date formatting
- External handoff behavior
- Missing-translation behavior

Automated tests cannot approve translation quality.

A qualified Arabic reviewer must approve P0 public content.

---

# 48. RTL Testing

RTL testing must include:

- Header
- Mobile drawer
- Breadcrumbs
- Audience switcher
- Locale switcher
- Forms
- Accordions
- Tabs
- Cards
- CTA groups
- Timelines
- Process flows
- Charts
- Dialogs
- Footer

Each component must follow its documented classification:

- Mirrored
- Direction-neutral
- Chronology-preserving
- Locale-customized

---

# 49. Chronology in Arabic

Charts and timelines may preserve chronological left-to-right direction when clinically or conventionally meaningful.

Tests must verify:

- Reading order remains understandable
- Labels remain Arabic
- Direction is explained where needed
- Navigation controls match visual progression
- Screen-reader order remains logical

Chronology must not change accidentally through global RTL styling.

---

# 50. Reduced-Motion Testing

The reduced-motion project must verify:

- Essential content remains present
- Hero reaches a complete static state
- Formal value chain remains readable
- No large translation is required
- No parallax remains
- No essential feedback disappears
- Dialog and drawer state remains understandable
- Chart values do not depend on animation
- Loading indicators remain perceivable
- No continuous non-essential loop remains

Reduced motion is not merely a slower version of the standard animation.

---

# 51. Motion Testing

Material motion tests should verify:

- Correct trigger
- Plays once where specified
- No delayed primary CTA
- No hidden essential content
- No repeated clinical-risk animation
- No count-up clinical value
- Stable final state
- Mobile simplification
- RTL direction
- Reduced-motion outcome

Timing assertions should allow reasonable browser tolerance.

Avoid testing exact animation frames unless a specific contract requires it.

---

# 52. Visual-Regression Testing

Visual regression is used for stable:

- Primitives
- Navigation
- Product Status
- Forms
- Consent
- Patient and Provider heroes
- Major diagrams
- Selected charts
- Arabic layouts
- P0 page sections

It is not required for every page and every state.

---

# 53. Visual Baseline Environment

Visual baselines must be generated using:

- Approved CI operating system
- Pinned Playwright version
- Pinned browser binaries
- Installed approved fonts
- Fixed viewport
- Fixed locale
- Fixed timezone
- Fixed test data
- Reduced or disabled non-essential animation
- Stable network responses

Do not approve baselines generated from inconsistent local operating systems.

---

# 54. Visual Snapshot Rules

A visual test must:

- Wait for approved fonts
- Wait for stable content
- Avoid arbitrary timeout sleeps
- Mask only genuinely dynamic approved regions
- Use the smallest meaningful screenshot region
- Document intentional thresholds
- Fail on unexpected layout shifts

Do not mask:

- Product Status
- CTA text
- Clinical boundaries
- Errors
- Navigation
- Arabic content
- Form labels

---

# 55. Visual Baseline Updates

A baseline update requires:

- Explanation
- Screenshot-diff review
- Design approval for material changes
- Accessibility consideration
- Arabic and RTL review where affected
- Confirmation that content was not truncated
- Confirmation that Product Status remains accurate

Do not accept all changed snapshots automatically.

---

# 56. Content Validation

Build-time content tests must verify:

- Required fields
- Page ID
- Locale
- Approved status
- Publication state
- Review date
- Clinical reviewer where required
- Source metadata
- Unique slug
- Canonical route
- Internal links
- External-link structure
- Structured-data eligibility
- Market applicability
- Translation completeness

The build must fail for material invalid content.

---

# 57. Product Status Testing

Tests must verify:

- Only approved status values are used
- Capability IDs are unique
- Status is displayed where required
- `Pilot` is not presented as `Available`
- Future capability is visibly separated
- Market availability is accurate
- Product previews display implementation status
- Status changes update all dependent pages
- Unsupported status strings fail validation

Product Status approval remains a human product-governance decision.

---

# 58. Clinical-Claim Testing

Automated tests may verify:

- Approved text is present
- Required disclaimer is present
- Source metadata is present
- Clinical boundary is visible
- Restricted wording is absent
- Claim status is current

Automation does not approve the claim itself.

Clinical review must confirm:

- Accuracy
- Appropriate uncertainty
- Intended audience
- Market applicability
- Evidence category
- Limitation
- No guarantee of outcome

---

# 59. Formal Value Chain Testing

The formal value chain must preserve exactly:

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

Tests must detect:

- Wording changes
- Reordered stages
- Missing stages
- Added stages
- Missing outcome-boundary statement
- Incorrect Arabic equivalence after human approval

The chain represents intended value.

It must not be rendered as a guaranteed clinical outcome.

---

# 60. Form Testing

Each public form requires tests for:

- Schema success
- Required fields
- Maximum lengths
- Email normalization
- Optional fields
- Honeypot
- Origin validation
- Request-size limit
- Rate limiting
- Duplicate submission
- Pending state
- Success state
- Validation failure
- Provider failure
- Timeout
- Safe error code
- Alternate contact route
- Privacy notice
- Analytics without personal data
- No sensitive logging

---

# 61. Server Action Testing

Server Action tests must verify:

1. Input is normalized.
2. Honeypot is checked.
3. Rate limit is applied.
4. Schema validation occurs.
5. Application service is called only for valid input.
6. Vendor adapter is not imported into the UI layer.
7. Error is mapped safely.
8. Returned value is serializable.
9. Form content is not logged.
10. No raw exception reaches the browser.

---

# 62. Form Delivery Testing

Staging form tests must use an approved non-production destination.

A staging submission must be identifiable as:

```text
ODRISC WEBSITE TEST — NON-PRODUCTION
```

Production smoke tests must not submit forms.

Form-delivery success in production is monitored operationally through safe delivery metrics and controlled manual verification when approved.

---

# 63. Consent Testing

Consent tests must verify:

- Essential site operation before selection
- Non-essential analytics disabled by default where required
- Consent choices saved
- Consent version recorded
- Analytics initialized only after permission
- Withdrawal works
- Future events are blocked after withdrawal
- Consent UI is available again
- Arabic content is equivalent
- No dark pattern
- Marketing remains disabled when unused

---

# 64. Analytics Testing

Analytics tests must verify:

- Event is in approved registry
- Event name is stable
- Consent is checked
- Page ID is added
- Audience and locale are added where approved
- Free-form fields are rejected
- Email-like values are rejected
- Phone-like values are rejected
- Clinical values are rejected
- Form message is never transmitted
- Direct provider calls are absent outside the adapter

Tests should inspect the internal analytics transport.

They should not send events to production GA4.

---

# 65. Navigation Testing

Navigation tests must verify:

- Internal links resolve
- Localized paths resolve
- Deep links work
- Audience switch mapping works
- Missing equivalent falls back safely
- Locale switch preserves route where available
- Current-page state is announced
- Mobile drawer works by keyboard
- Focus returns to trigger
- External links are identified
- Footer legal routes work

---

# 66. Application-Handoff Testing

Handoff tests must verify:

- Destination is approved
- Scheme is HTTPS where required
- Host is allowlisted
- Market availability is respected
- Product Status is visible
- External-origin notice is visible
- No sensitive query parameter is present
- Locale is preserved where supported
- Unavailable destination has recovery
- Analytics payload contains no sensitive data

Open-redirect attempts must fail.

---

# 67. Chart Testing

Chart tests must verify:

- Title
- Unit
- Source
- Text summary
- Legend
- Scale
- Baseline
- Missing-data representation
- Product-preview status
- Reduced-motion state
- RTL classification
- Keyboard access where interactive
- Tooltip accessibility where used

Do not rely only on SVG-path snapshots.

The accessible summary is a first-class output.

---

# 68. Error-State Testing

Every material failure path must test:

- Safe message
- Error reference
- Retryability
- Recovery action
- Focus behavior
- Screen-reader announcement
- No stack trace
- No vendor message
- No sensitive data
- No false success state

Applicable errors include:

- Validation
- Rate limit
- Integration timeout
- Delivery failure
- Configuration failure
- Content failure
- Rendering failure
- Handoff unavailable

---

# 69. Loading-State Testing

Loading tests must verify:

- Accessible busy state
- Stable layout
- No indefinite spinner
- No delayed essential content without reason
- No synthetic Patient data shown
- Completion announcement where meaningful
- Reduced-motion behavior
- Retry or error transition

Static pages should not add loading states unnecessarily.

---

# 70. Route Handler Testing

Route Handler tests must verify:

- Supported method
- Unsupported method response
- Content type
- Schema validation
- Request-size handling
- Status code
- Cache headers
- Safe response
- No secrets
- Error mapping

Required initial endpoints:

```text
/api/health/live
/api/health/ready
/api/config/public
```

---

# 71. Health-Check Testing

Liveness tests must verify:

- Process responds
- No external dependency is called
- Response contains no secrets

Readiness tests must verify:

- Required configuration loaded
- Content manifest available
- Application ready
- Non-critical analytics outage does not mark the application unavailable
- Response remains safe

---

# 72. Public Runtime-Config Testing

Tests must verify that `/api/config/public`:

- Returns only allowlisted keys
- Rejects accidental secret inclusion
- Uses the approved schema
- Uses `no-store`
- Includes release identity where approved
- Does not expose internal hostnames
- Does not expose server environment values broadly

A snapshot of the approved key set may be used.

---

# 73. SEO Testing

SEO validation must verify:

- Unique title
- Meta description
- Canonical URL
- Locale alternate links
- Indexation state
- Sitemap inclusion or exclusion
- Robots behavior
- Structured-data validity
- Open Graph metadata
- Missing translations excluded from alternates
- Staging noindex

Search-engine behavior should be tested through generated outputs, not brittle inspection of internal framework code.

---

# 74. Internal-Link Testing

The build or CI must detect:

- Broken internal routes
- Missing localized routes
- Invalid hash targets
- Broken resource links
- Missing legal links
- Invalid application handoffs
- Duplicate canonical paths

External-link availability checks may run on a schedule because external sites can be unstable.

External failures must not create random pull-request failures without review.

---

# 75. Security Testing

Security verification must cover:

- Secret scanning
- Dependency advisory review
- Container scanning
- CSP
- Security headers
- HSTS at production edge
- Frame restrictions
- Referrer policy
- Permissions policy
- Input validation
- Form abuse controls
- Open redirects
- Unsafe URL schemes
- Runtime-config leakage
- Sensitive logs
- Analytics leakage
- Untrusted HTML
- Untrusted SVG
- Request-size limits
- Origin checking
- Error-detail leakage

Security testing complements code review and security architecture.

---

# 76. Security Header Tests

Staging and production smoke tests should verify approved headers, including:

- Content Security Policy
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy
- Frame restrictions
- HSTS in production
- Staging `X-Robots-Tag`

Exact application-level values belong in the Security Architecture.

---

# 77. Performance Verification

Performance verification must cover:

- Production build
- Initial JavaScript budgets
- Page-specific JavaScript budgets
- Image-size budgets
- Font loading
- Layout stability
- Major motion cost
- Chart lazy loading
- Third-party script loading
- Consent-controlled script behavior
- Core Web Vitals monitoring after release

CI should enforce deterministic asset and bundle budgets from:

`docs/engineering/PERFORMANCE_BUDGET.md`

Lab measurements do not replace production field monitoring.

---

# 78. Performance Regression Tests

A pull request should fail when it materially exceeds a locked budget without an approved budget change.

Tests may verify:

- Compressed JavaScript output
- Route bundle size
- Hero image size
- Content image size
- Number of early third-party scripts
- Static-rendering preservation
- Client Component expansion
- Major layout shift in browser tests

Performance thresholds must not be relaxed merely to pass CI.

---

# 79. Build Testing

Every material pull request must run:

```text
pnpm build
```

Build validation confirms:

- Next.js compilation
- Type integration
- Content compilation
- Static route generation
- Metadata generation
- Server/client boundary viability
- Standalone output
- Environment requirements

A successful build does not replace behavioral tests.

---

# 80. Container Testing

Container verification must confirm:

- Image builds
- Application starts
- Non-root user
- Expected port
- Health check
- Standalone output
- No development dependency requirement
- No secret baked into layers
- Reasonable image size
- Runtime variables work
- Liveness and readiness respond

The production image must be tested before publication.

---

# 81. Local Build and Manual Publication Testing

Pre-publication verification must cover the local production build, representative routes, static sample-data labels, localization, accessibility, security-sensitive output, and critical navigation. Hosting infrastructure is outside this testing strategy.

---

# 82. Manual Exploratory Testing

Manual exploratory testing focuses on issues automation may miss:

- Comprehension
- Clinical tone
- Confusing Product Status
- Navigation clarity
- Visual hierarchy
- Responsive edge cases
- Keyboard friction
- Screen-reader usability
- Arabic quality
- Cultural appropriateness
- Form confidence
- Trust perception
- Motion comfort
- Real-device behavior

Exploratory findings must be recorded as defects, questions, or approved observations.

---

# 83. Patient Usability Review

Patient-facing critical flows should be reviewed for:

- Plain-language comprehension
- Emotional safety
- Non-stigmatizing weight communication
- Understanding of risk versus diagnosis
- Understanding of Product Status
- Confidence in next action
- Ability to find professional-care boundaries
- Mobile usability
- Arabic comprehension where applicable

Usability research is separate from automated QA.

---

# 84. Provider Usability Review

Provider-facing critical flows should be reviewed for:

- Clinical relevance
- Explainability
- Information density
- Current versus future capability
- Evidence interpretation
- Product Status
- Demonstration-request clarity
- Patient and Provider role separation
- Diagram comprehension
- Arabic professional terminology where applicable

---

# 85. Defect Severity

## Severity 0 — Release Stop

Examples:

- Sensitive data exposure
- Production secret exposure
- Public collection of prohibited clinical data
- Critical security vulnerability
- Incorrect high-impact clinical claim
- Broken production deployment
- Unrecoverable data or infrastructure risk

## Severity 1 — Critical

Examples:

- P0 journey blocked
- Patient or Provider audience entry unavailable
- Form submissions falsely report success
- Product Status materially inaccurate
- Consent fails to control analytics
- Keyboard users cannot complete critical journey
- Arabic P0 route unusable
- Unsafe application handoff

## Severity 2 — Major

Examples:

- Significant browser incompatibility
- Important content missing
- Major visual regression
- Recovery path broken
- Non-critical accessibility barrier
- Provider or Patient subjourney blocked

## Severity 3 — Moderate

Examples:

- Secondary layout defect
- Non-critical content inconsistency
- Minor responsive issue
- Secondary browser defect with workaround

## Severity 4 — Minor

Examples:

- Cosmetic issue
- Non-blocking spacing inconsistency
- Minor copy issue without safety implications

---

# 86. Release Defect Rules

Production release is prohibited when:

- Any Severity 0 defect is open.
- Any Severity 1 defect is open.
- A release-critical test is skipped.
- A P0 test is quarantined.
- A security, privacy, clinical-safety, or accessibility release gate is unresolved.
- Product Status is unapproved.
- Arabic P0 content is unapproved for an Arabic release.
- Production rollback has not been verified.

Severity 2 defects require explicit release-owner disposition.

---

# 87. Flaky-Test Definition

A test is flaky when identical code and environment can produce both pass and fail results without an intended change.

Signals include:

- Pass on retry
- Intermittent timeout
- Order dependency
- Locale or timezone dependency
- Uncontrolled network dependency
- Visual instability
- Shared mutable state
- Random-data failure

Flaky tests are defects in the test system or product behavior.

---

# 88. Retry Policy

Recommended Playwright policy:

```text
Local development: 0 retries
Pull-request CI: 1 retry
Main and release CI: 1 retry
Production smoke: 0 automatic mutation retries
```

Traces may be captured on the first retry to diagnose failures. Playwright explicitly supports retries and first-retry tracing.

A test that passes on retry must be reported as flaky.

---

# 89. Flaky-Test Response

When a test is flaky:

1. Record it in the Flaky Test Register.
2. Assign an owner.
3. Preserve failure artifacts.
4. Determine product versus test cause.
5. Fix the root cause.
6. Add deterministic protection.
7. Remove any temporary quarantine.
8. Confirm stability through repeated controlled execution.

Target resolution:

```text
Within 5 business days
```

for non-P0 tests.

P0, security, privacy, accessibility, and clinical-safety tests may not be quarantined to permit release.

---

# 90. Skipped-Test Policy

`test.skip`, `describe.skip`, and equivalent mechanisms require:

- Issue reference
- Reason
- Owner
- Expiry date
- Risk assessment

`test.only` must fail CI.

Playwright provides a `forbidOnly` setting and command-line option for this purpose.

Skipped tests count as missing evidence.

They do not count as passing tests.

---

# 91. Quarantine Policy

Quarantine is a temporary isolation mechanism.

A quarantined test:

- Remains visible in reporting
- Has an owner
- Has a resolution date
- Runs on a scheduled workflow where possible
- Cannot cover a P0 requirement alone
- Cannot hide a product defect

Quarantine approval belongs to the QA owner and CTO.

---

# 92. Coverage Strategy

Coverage measures exercised code.

It does not measure:

- Requirement completeness
- Assertion quality
- Accessibility
- Clinical accuracy
- Browser compatibility
- User comprehension

Coverage thresholds are a minimum safeguard, not a quality objective by themselves.

---

# 93. Initial Coverage Thresholds

Initial global Vitest thresholds:

| Metric     | Minimum |
| ---------- | ------: |
| Statements |     80% |
| Lines      |     80% |
| Functions  |     80% |
| Branches   |     75% |

Critical modules:

| Module category                          | Statements | Lines | Functions | Branches |
| ---------------------------------------- | ---------: | ----: | --------: | -------: |
| Form validation and application services |        90% |   90% |       90% |      85% |
| Consent and analytics guards             |        90% |   90% |       90% |      85% |
| URL and handoff security                 |        90% |   90% |       90% |      85% |
| Product Status rules                     |        90% |   90% |       90% |      85% |
| Error mapping and public config          |        90% |   90% |       90% |      85% |

Vitest supports global and path-specific coverage thresholds, so these requirements can be enforced rather than maintained only in documentation.

---

# 94. Coverage Scope

Include:

- `src/lib/`
- `src/features/`
- `src/server/application/`
- `src/server/integrations/`
- `src/config/`
- Reusable component behavior
- Analytics and consent logic
- Validation schemas
- Error mapping

Exclude where justified:

- Generated code
- Type-only files
- Story files
- Test fixtures
- Framework boilerplate
- Static content files
- Pure token declarations
- Route files whose behavior is covered through browser tests

Exclusions must not hide untested business or security logic.

---

# 95. Coverage Change Rules

Coverage thresholds may:

- Increase through approved changes
- Gain path-specific thresholds
- Be temporarily excepted through the exception process

Coverage thresholds must not be reduced merely because a new change is difficult to test.

A reduction requires:

- Reason
- Risk
- Alternative evidence
- Owner
- Expiry or review date

---

# 96. Test Reporting

CI must publish:

- Vitest result summary
- Coverage summary
- Playwright HTML report
- JUnit or machine-readable results
- Failure screenshots
- Failure traces
- Failure video where enabled
- Accessibility report
- Visual diff
- Build result
- Container result

Reports must not contain sensitive information.

---

# 97. Artifact Capture

Recommended Playwright artifact policy:

```text
Trace: on first retry
Screenshot: on failure
Video: retain on failure or first retry
HTML report: retained for failed jobs
```

Artifact retention must balance:

- Diagnostic value
- Storage
- Privacy
- Release audit needs

Release artifacts should be retained longer than routine pull-request artifacts.

---

# 98. Test Report Privacy

Before publishing artifacts, verify they do not contain:

- Form contents
- Contact information
- Real credentials
- Cookies
- Tokens
- Clinical data
- Production provider payloads
- Internal hostnames beyond approved operational use

Sensitive traces must not be exposed publicly.

---

# 99. Local Developer Workflow

Before requesting review, run:

```text
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm test:coverage
pnpm validate
pnpm build
pnpm test:e2e:critical
```

Run affected Storybook, accessibility, visual, Arabic, and reduced-motion tests where applicable.

A faster changed-file command may be provided, but it does not replace required pre-review verification.

---

# 100. Pull-Request Quality Gates

Required pull-request gates:

1. Documentation validation
2. Formatting
3. ESLint with zero warnings
4. Strict TypeScript
5. Static content and architecture validation
6. Unit tests
7. Component tests
8. Coverage thresholds
9. Storybook build
10. Storybook accessibility checks
11. Next.js production build
12. Chromium P0 and changed-feature E2E
13. Relevant cross-browser smoke
14. Relevant Arabic and RTL tests
15. Relevant reduced-motion tests
16. Selected visual regression
17. Dependency and secret checks
18. Final local production build

A required gate may not be marked optional solely to merge a failing change.

---

# 101. Main-Branch Quality Gates

Main branch additionally requires:

- Full P0 cross-browser suite
- Mobile P0 suite
- Full Arabic P0 suite
- Full reduced-motion suite
- Page-level accessibility suite
- Visual-regression suite
- Container scan
- Standalone image start and health checks
- Staging deployment readiness

---

# 102. Nightly Testing

A scheduled nightly workflow may run:

- Full cross-browser suite
- Full resource link verification
- External-link checks
- Extended accessibility scans
- Full visual suite
- Repeated flaky-test detection
- Dependency advisory review
- Sandbox integration contract tests
- Extended performance checks
- Production non-destructive smoke

Nightly failures must create visible ownership.

---

# 103. Sharding

Playwright sharding may be introduced when the complete suite becomes too slow for the approved CI target.

Sharding must:

- Preserve deterministic isolation
- Preserve report merging
- Preserve failure artifacts
- Avoid uneven test distribution
- Not hide serial dependencies

Playwright supports splitting tests across CI shards, including more balanced test-level distribution when full parallelism is enabled.

Sharding is an optimization.

It is not required before suite duration justifies it.

---

# 104. Parallelism

Tests may run in parallel when they:

- Have isolated state
- Use unique controlled data
- Do not depend on shared provider state
- Do not mutate global fixtures
- Do not share a rate-limit identity unintentionally

Tests requiring serial execution must explain why.

Broad serial suites are discouraged.

---

# 105. Manual Pre-Publication Verification

Before manual publication of the locally verified build:

1. Verify representative routes.
2. Verify static sample-data labels and provenance.
3. Verify security-sensitive output.
4. Run the local smoke suite.
5. Run the P0 browser suite.
6. Test forms without submitting real information.
7. Test analytics with test identifiers where configured.
8. Test consent.
9. Test English and Arabic.
10. Test mobile.
11. Review visual changes.
12. Complete manual release QA.
13. Record approval.

Staging must use the same image intended for production.

---

# 106. Production Smoke Testing

Production smoke tests must verify:

- Homepage responds
- Patient homepage responds
- Provider homepage responds
- English and Arabic routes respond
- Navigation works
- Product Status appears
- Legal pages respond
- Health endpoints respond
- Security headers appear
- Production is indexable as approved
- Static assets load
- Primary handoff host is correct
- Release identity matches deployment

Production smoke must not:

- Submit forms
- alter consent beyond isolated test context
- generate identifiable analytics
- create records
- trigger external operational workflows

---

# 107. Post-Deployment Monitoring

After production deployment, monitor:

- HTTP errors
- Readiness
- Form-delivery failure rate
- Safe analytics initialization
- Core Web Vitals
- JavaScript errors
- CSP violations
- Broken handoffs
- Unexpected 404s
- Published build identity where the owner records one

Monitoring thresholds and incident actions belong in the operational runbook.

---

# 108. Publication Recovery

Hosting recovery and rollback are manual owner responsibilities outside this repository. The repository must retain reproducible source history and a verified local build process.

Rollback must not require rebuilding the prior release.

---

# 109. Manual Release Checklist

A release reviewer must confirm:

- Locked requirements implemented
- Product Status approved
- Clinical wording approved
- English content approved
- Arabic content approved where released
- Navigation operational
- Forms operational on staging
- Consent operational
- Accessibility review complete
- Visual review complete
- Cross-browser tests pass
- Mobile review complete
- Performance budgets pass
- Security review complete
- No blocking defects
- Rollback ready
- Deployment owner assigned
- Incident owner assigned

---

# 110. Release Quality Gate

A release is approved only when all applicable evidence is present.

Required evidence:

- CI result
- Requirement traceability
- Test Case Registry
- Coverage report
- E2E report
- Accessibility report
- Visual approval
- Manual QA approval
- Product approval
- Clinical approval where applicable
- Arabic approval where applicable
- Security approval where applicable
- Staging smoke
- Rollback readiness

Verbal confirmation alone is insufficient for a material release.

---

# 111. Test Case Registry

The Test Case Registry tracks material tests rather than every low-level assertion.

It must include:

- Test ID
- Requirement ID
- Page or Component ID
- Risk
- Test level
- Automation status
- Browser scope
- Locale scope
- Owner
- Last result
- Release-blocking status

Example Test ID:

```text
TST-E2E-001
TST-A11Y-004
TST-INT-012
TST-MAN-006
```

---

# 112. Regression Selection

Every defect fix must add or update a test at the lowest sufficient level.

Regression coverage should verify:

- Original failure
- Correct recovery
- Adjacent high-risk behavior
- Cross-browser impact where relevant
- Locale and accessibility impact where relevant

Do not add a broad E2E test when a focused integration test is sufficient.

---

# 113. Test Maintenance

Tests must be reviewed when:

- Requirement changes
- Component contract changes
- Route changes
- Product Status changes
- Localization changes
- Provider changes
- Browser versions change
- Framework or library versions change
- Accessibility behavior changes
- Manual publication requirements change

Stale tests create false confidence.

---

# 114. Test Deletion

A test may be removed only when:

- Requirement is retired
- Component is retired
- Test is replaced by stronger evidence
- Duplicate coverage is removed deliberately
- Obsolete behavior is no longer supported

The pull request must state:

- Why the test is removed
- Which requirement changed
- What evidence replaces it

Do not delete a failing test only to restore CI.

---

# 115. Test Review

Test code receives the same review as production code.

Reviewers assess:

- Correct requirement
- Correct test level
- Useful assertion
- Determinism
- Privacy
- Readability
- Fixture safety
- Mocking appropriateness
- Failure-message quality
- Accessibility relevance
- Locale relevance
- Maintenance cost

---

# 116. Rules for AI Agents

Before creating or modifying tests, AI agents must:

1. Read `docs/engineering/TESTING_STRATEGY.md`.
2. Identify the requirement and risk.
3. Identify Page IDs, Component IDs, Integration IDs, or Error Codes.
4. Choose the lowest sufficient test level.
5. Search for existing coverage.
6. Use synthetic safe data.
7. Avoid real external services.
8. Preserve accessibility and locale coverage.
9. Use accessible selectors.
10. Avoid arbitrary sleeps.
11. Avoid over-mocking.
12. Run the relevant test.
13. Run formatting, linting, and type checking.
14. Review failure artifacts.
15. Update traceability and registries where required.

AI agents must not:

- Claim a test passed without running it
- Create tests that always pass
- weaken assertions to avoid failure
- add broad skips
- update all visual baselines automatically
- use real Patient data
- contact production providers
- treat Axe as complete accessibility proof
- treat coverage percentage as complete quality proof
- convert async Server Components into Client Components for easier tests
- remove tests merely because they fail
- quarantine P0 or safety-critical tests
- use fixed sleeps where observable conditions exist

---

# 117. Locked Testing Decisions

The following decisions are locked unless formally changed:

1. Testing is requirement and risk driven.
2. Static validation is the first test layer.
3. Vitest is the unit and integration test runner.
4. React Testing Library is used for component behavior.
5. User Event is preferred for user interactions.
6. Playwright is the browser and E2E test runner.
7. Axe is the automated accessibility engine.
8. Storybook is part of component quality verification.
9. Playwright screenshot assertions provide visual regression.
10. Unit and component tests may be colocated.
11. Cross-module, E2E, contract, and smoke tests are centralized under `tests/`.
12. Async Server Components are not forced into direct Vitest rendering.
13. Async Server Component behavior uses extracted logic, build, and E2E coverage.
14. Server Components remain the architectural default.
15. Tests use accessible selectors.
16. Arbitrary timeout sleeps are prohibited.
17. External services are replaced by approved fakes or sandboxes in automated tests.
18. Automated tests do not contact production providers.
19. Production smoke tests are non-destructive.
20. Real Patient and clinical records are prohibited in test data.
21. Public-preview clinical data must be synthetic and labelled illustrative.
22. P0 tests are release blocking.
23. Product Status tests are release blocking where applicable.
24. Consent and analytics-privacy tests are release blocking.
25. Arabic and RTL tests are required for Arabic P0 pages.
26. Reduced-motion tests are required for material motion.
27. Automated accessibility does not replace manual review.
28. Visual baselines are generated in a controlled environment.
29. Visual baseline updates require review.
30. Playwright projects cover desktop, cross-browser, mobile, Arabic, and reduced motion.
31. CI uses zero-retry locally and one retry in CI for diagnosis.
32. A passing retry is reported as flaky.
33. P0, security, privacy, accessibility, and clinical-safety tests cannot be quarantined.
34. `test.only` fails CI.
35. Skips require ownership and expiry.
36. Global coverage begins at 80% statements, lines, and functions, with 75% branches.
37. Critical modules use higher path-specific thresholds.
38. Coverage does not replace requirement verification.
39. Every defect fix requires regression evidence.
40. The final local build receives full P0 release verification.
41. The verified local build is selected for manual publication.
42. Published output receives non-destructive smoke verification where practical.
43. Test reports must exclude sensitive data.
44. AI-generated tests receive full review.
45. Passing compilation alone does not constitute release evidence.
46. Material test-strategy changes require approval and an ADR.

---

# 118. Remaining Testing Questions

The following remain unresolved:

- Which exact Vitest and Playwright patch versions are pinned?
- Which Playwright mobile-device descriptors are approved?
- Which additional screen-reader and browser combination is required?
- Which physical mobile devices are available for release QA?
- Who owns the Test Case Registry?
- Who is the formal QA owner?
- Which P0 pages are included in Qatar V1?
- Which Patient forms are operational at Qatar launch?
- Which Provider forms are operational at Qatar launch?
- Which form-delivery sandbox is used?
- Which analytics test container is used?
- Which Product Status capabilities are release blocking?
- Which Arabic P0 pages launch first?
- Who approves Arabic clinical terminology?
- Which visual snapshots run on every pull request?
- Which visual snapshots run only on main or release?
- What CI duration target triggers Playwright sharding?
- How many Playwright shards are initially approved?
- Which test artifacts are retained and for how long?
- Which external-link checks run on pull requests versus nightly?
- Is Storybook published privately or retained as a CI artifact?
- Is Storybook accessibility configured to fail every applicable story?
- Which Axe exclusions, if any, are initially approved?
- Which performance checks are fully automated?
- Which security scanners are release blocking?
- What form rate-limit values are used in test environments?
- What is the approved production form-delivery verification process?
- Which defects require Founder approval before release disposition?
- Who may approve quarantine of a non-P0 test?
- Who approves temporary coverage exceptions?
- Which test commands are mandatory before AI-authored review requests?
- Which tests are allowed to run against production?
- What is the release-artifact retention period?
- Which nightly workflow failures create automatic issues?
- Which manual QA evidence format is required?
- When is formal Patient usability testing scheduled?
- When is formal Provider usability testing scheduled?

These questions must remain in:

`docs/project/OPEN_QUESTIONS.md`

---

# 119. Foundational Testing Summary

The ODRISC public-website testing system follows this evidence path:

```text
Approved requirement
↓
Static and schema validation
↓
Unit and component evidence
↓
Integration and contract evidence
↓
Accessibility, Arabic, RTL, motion, and visual evidence
↓
Cross-browser end-to-end evidence
↓
Staging and manual release approval
↓
Immutable deployment
↓
Production smoke and monitoring
↓
Verified rollback
```

Every release must remain:

- Requirement traceable
- Product-status accurate
- Clinically responsible
- Accessible
- Arabic and RTL ready
- Privacy preserving
- Secure
- Cross-browser verified
- Mobile verified
- Performance governed
- Operationally reversible
- Supported by recorded evidence
