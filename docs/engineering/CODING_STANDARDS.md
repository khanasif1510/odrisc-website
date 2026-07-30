# ODRISC Public Website Coding Standards

## Document Status

**Document:** Coding Standards
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical source-code quality, implementation, naming, validation, error-handling, and review standard
**System:** ODRISC public website
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Technical owner:** CTO
**Engineering owner:** To be assigned
**Approval authority:** Founder and CTO with designated engineering, security, accessibility, localization, product, design, clinical, analytics, QA, and DevOps reviewers

## Related Documents

* `PROJECT_CONTEXT.md`
* `README.md`
* `AGENTS.md`
* `CLAUDE.md`
* `docs/project/SOURCE_OF_TRUTH.md`
* `docs/project/ASSUMPTIONS.md`
* `docs/project/OPEN_QUESTIONS.md`
* `docs/project/GLOSSARY.md`
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
* `docs/engineering/ARCHITECTURE.md`
* `docs/engineering/COMPONENT_LIBRARY.md`
* `docs/engineering/COMPONENT_REGISTRY.md`
* `docs/engineering/DEPENDENCY_POLICY.md`
* `docs/engineering/ENVIRONMENT_VARIABLES.md`
* `docs/engineering/PERFORMANCE_BUDGET.md`
* `docs/engineering/DATA_CLASSIFICATION.md`
* `docs/engineering/ERROR_CATALOG.md`
* `docs/engineering/INTEGRATION_REGISTRY.md`
* `docs/engineering/TESTING_STRATEGY.md`
* `docs/engineering/SECURITY_ARCHITECTURE.md`
* `docs/engineering/DEPLOYMENT_RUNBOOK.md`
* `ai/rules/NON_NEGOTIABLES.md`
* `ai/rules/AI_BEHAVIOR.md`

The complete test-level definitions, coverage thresholds, browser matrix,
flaky-test policy, release gates, and test-data rules are defined in:

`docs/engineering/TESTING_STRATEGY.md`

---

# 1. Purpose

This document defines how source code for the ODRISC public website must be written, organized, validated, reviewed, and maintained.

It establishes standards for:

* TypeScript
* React
* Next.js App Router
* Server and Client Components
* File and directory naming
* Imports and exports
* Functions and modules
* Component implementation
* Hooks
* State and effects
* Styling
* Accessibility
* Localization and RTL
* Content
* Validation
* Forms
* Server Actions
* Route Handlers
* External integrations
* Errors
* Logging
* Analytics
* Security
* Performance
* Testing
* Comments and documentation
* Generated code
* Dependencies
* Git commits
* Pull requests
* AI-generated code
* Exceptions and governance

This document answers:

> What coding practices must every human and AI contributor follow when implementing the ODRISC public website?

---

# 2. Scope

These standards apply to:

* Files under `src/`
* Files under `tests/`
* Storybook stories
* Build and validation scripts
* Next.js configuration
* ESLint configuration
* TypeScript configuration
* Tailwind and CSS configuration
* Docker and deployment scripts
* Nginx configuration stored in the repository
* GitHub Actions
* Content-processing utilities
* Generated API contracts
* Infrastructure automation
* Test fixtures

They do not directly govern:

* Existing `.NET 6` application code
* Existing SQL Server systems
* Patient application source
* Provider-platform source
* Native mobile code
* Clinical algorithm code

Those systems require their own coding standards.

---

# 3. Coding Objectives

ODRISC code must be:

1. Correct
2. Readable
3. Typed
4. Secure
5. Accessible
6. Localization-ready
7. RTL-ready
8. Testable
9. Observable
10. Performant
11. Server-first
12. Product-status accurate
13. Clinically responsible
14. Easy to review
15. Easy to change
16. Reproducible
17. Understandable by human and AI contributors
18. Free from unnecessary dependencies
19. Consistent across Patient and Provider journeys
20. Aligned with the approved architecture

---

# 4. Core Coding Principles

## 4.1 Correctness Before Cleverness

Prefer explicit and predictable code over compressed or clever code.

Code should be understandable without reconstructing hidden assumptions.

## 4.2 Readability Before Brevity

Short code is not automatically better code.

Prefer clear naming, early returns, explicit types at boundaries, and small focused modules.

## 4.3 Server Before Client

Code belongs on the server unless browser execution is required.

## 4.4 Validation Before Trust

Values from users, environment variables, content files, APIs, cookies, URL parameters, and external services are untrusted until validated.

## 4.5 Composition Before Configuration

Prefer small composable functions and components over large universal abstractions.

## 4.6 Semantic HTML Before Custom Interaction

Use the platform before rebuilding controls with JavaScript.

## 4.7 Existing Contract Before New Pattern

Search the approved architecture, Component Registry, source, and tests before creating a new pattern.

## 4.8 Explicit Failure Before Silent Fallback

A system should fail clearly when correctness, safety, Product Status, content, or configuration is compromised.

## 4.9 Privacy Before Convenience

Do not log, measure, or transmit data merely because it is technically available.

## 4.10 One Source of Truth

Do not duplicate:

* Product Status
* Routes
* Pricing
* Navigation
* Environment schemas
* Analytics events
* Error codes
* Content metadata
* Design tokens
* Component IDs

---

# 5. Code-Quality Hierarchy

When standards appear to conflict, use this priority:

1. Safety
2. Security
3. Clinical responsibility
4. Privacy
5. Accessibility
6. Correctness
7. Product and content accuracy
8. Architecture
9. Type safety
10. Testability
11. Performance
12. Readability
13. Consistency
14. Developer convenience

Developer convenience must not override higher priorities.

---

# 6. Formatting Standard

All supported source and configuration files must be formatted automatically.

The canonical formatter is:

```text
Prettier
```

Approved formatting:

```text
Indentation: 2 spaces
Tabs: prohibited for indentation
Line endings: LF
Final newline: required
Trailing whitespace: prohibited
Semicolons: required
Strings: double quotes
Trailing commas: enabled where supported
Print width: 100 characters
Arrow parentheses: always
```

Formatting discussions should not consume code-review time.

The formatter decides formatting.

---

# 7. Editor Configuration

The repository must contain:

```text
.editorconfig
```

Required principles:

* UTF-8
* LF line endings
* Final newline
* Trim trailing whitespace
* Two-space indentation
* Four-space indentation only where file formats conventionally require it

Markdown may preserve deliberate trailing spaces only where required.

---

# 8. File Naming

Use lowercase kebab case for source filenames.

Preferred:

```text
product-status-badge.tsx
provider-demo-request-form.tsx
create-page-metadata.ts
form-delivery-adapter.ts
```

Avoid:

```text
ProductStatusBadge.tsx
providerDemoRequestForm.tsx
product_status_badge.tsx
Utils.ts
helpers.ts
common.ts
misc.ts
```

Framework-required filenames retain their prescribed names:

```text
page.tsx
layout.tsx
loading.tsx
error.tsx
global-error.tsx
not-found.tsx
route.ts
template.tsx
default.tsx
proxy.ts
```

---

# 9. Directory Naming

Use lowercase kebab case for directories.

Preferred:

```text
product-status/
data-visualization/
form-delivery/
runtime-config/
```

Avoid catch-all directories such as:

```text
common/
misc/
stuff/
shared-utils/
new-components/
temp/
```

A directory name must communicate a stable responsibility.

---

# 10. Test and Story Filenames

Use:

```text
<subject>.test.ts
<subject>.test.tsx
<subject>.stories.tsx
<subject>.fixture.ts
<subject>.schema.ts
<subject>.types.ts
```

Examples:

```text
product-status.test.ts
audience-switcher.test.tsx
button.stories.tsx
demo-request.fixture.ts
general-enquiry.schema.ts
```

End-to-end tests use:

```text
<journey>.spec.ts
```

Example:

```text
provider-demo-request.spec.ts
```

---

# 11. Export Standards

Use named exports by default.

Preferred:

```ts
export function ProductStatusBadge() {
  // ...
}
```

Default exports are permitted when required or conventional for:

* `page.tsx`
* `layout.tsx`
* `error.tsx`
* `global-error.tsx`
* `not-found.tsx`
* Next.js configuration
* Storybook metadata
* Tool configuration

Avoid default exports in ordinary application modules.

Named exports improve:

* Searchability
* Refactoring
* Import consistency
* Error messages
* AI-agent reliability

---

# 12. One Primary Responsibility Per File

A source file should normally contain:

* One primary component
* One primary service
* One primary schema
* One primary adapter
* One cohesive utility group

Small private helpers may remain in the same file when they are not reusable outside it.

Move helpers only when:

* They are reused
* They obscure the main implementation
* They require separate tests
* They represent another architectural responsibility

Do not create a separate file for every three-line helper.

---

# 13. Barrel Exports

Category-level barrel exports are permitted.

Preferred:

```ts
import { Button, IconButton } from "@/components/primitives";
```

Avoid one application-wide barrel:

```ts
import {
  Button,
  ProviderHero,
  submitDemoRequest,
  ProductStatus,
} from "@/index";
```

Barrels must not:

* Hide server/client boundaries
* Create circular dependencies
* Export private modules
* Export vendor-specific implementation
* Export all components indiscriminately

---

# 14. Import Ordering

Use the following order:

1. Node.js built-ins
2. React and Next.js
3. Third-party packages
4. Internal absolute aliases
5. Relative imports
6. Type-only imports where separate grouping improves clarity
7. Styles

Example:

```ts
import "server-only";

import { cache } from "react";
import { notFound } from "next/navigation";

import { z } from "zod";

import { getProductStatus } from "@/features/product-status";
import { logger } from "@/server/observability/logger";

import { mapStatusRecord } from "./map-status-record";

import type { ProductStatusRecord } from "./types";
```

Do not manually reorder imports differently from the configured linting or formatting policy.

---

# 15. Import Paths

Use the approved alias:

```text
@/
```

for cross-module imports.

Preferred:

```ts
import { Button } from "@/components/primitives/button";
```

Relative imports are appropriate within the same local module:

```ts
import { normalizeInput } from "./normalize-input";
```

Avoid long traversal paths:

```ts
import { Button } from "../../../../components/primitives/button";
```

---

# 16. Import Boundaries

The following boundaries are mandatory:

* Client Components must not import from `src/server`
* Components must not import from `src/app`
* Components must not import vendor integration adapters
* Content modules must not import page components
* Integration adapters must not import UI components
* Shared primitives must not import audience-specific features
* Patient components must not import Provider feature components
* Provider components must not import Patient feature components
* Page routes must not import another page route
* External SDKs must remain inside approved adapters

Use:

```text
server-only
```

in modules that must never enter client bundles.

---

# 17. TypeScript Baseline

TypeScript strict mode is mandatory.

Required compiler intent:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "useUnknownInCatchVariables": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true
  }
}
```

The final configuration must remain compatible with Next.js and generated Next.js types.

Type errors must not be ignored during production builds.

---

# 18. Type Design

Use `type` by default for:

* Component props
* Unions
* Intersections
* Function signatures
* Branded values
* Mapped types
* Derived schema types

Example:

```ts
type Audience = "shared" | "patient" | "provider" | "institutional";
```

Use `interface` when defining:

* Replaceable ports
* Adapter contracts
* Intentionally extensible object contracts
* Class implementations

Example:

```ts
interface LeadDeliveryPort {
  deliver(request: LeadDeliveryRequest): Promise<LeadDeliveryResult>;
}
```

Do not alternate between `type` and `interface` without reason.

---

# 19. Runtime Schemas and Static Types

At external boundaries, the runtime schema is authoritative.

Preferred:

```ts
import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  workEmail: z.string().trim().email().max(254),
  organization: z.string().trim().min(1).max(160),
});

export type DemoRequest = z.infer<typeof demoRequestSchema>;
```

Avoid manually duplicating the schema:

```ts
type DemoRequest = {
  name: string;
  workEmail: string;
  organization: string;
};
```

when the type can be inferred safely.

---

# 20. `any`

The use of `any` is prohibited by default.

Do not use `any` to:

* Silence compiler errors
* Bypass an external API contract
* Avoid defining component props
* Handle errors
* Accept arbitrary content
* Expedite AI-generated code

A rare justified `any` must include:

* The narrowest possible scope
* An inline explanation
* An issue or migration path where temporary

Preferred alternatives:

* `unknown`
* Generics
* Discriminated unions
* Schema inference
* A precise library type

---

# 21. `unknown`

Use `unknown` for values whose type has not been established.

Examples:

* Caught errors
* Parsed JSON
* Webhook payloads
* External API responses before validation
* Untrusted configuration
* Unknown query parameters

Narrow or validate before use.

```ts
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
}
```

Do not cast `unknown` directly to the desired type without validation.

---

# 22. Type Assertions

Use type assertions only when TypeScript cannot represent a fact that has already been established.

Avoid:

```ts
const response = payload as ApiResponse;
```

Prefer:

```ts
const result = apiResponseSchema.safeParse(payload);

if (!result.success) {
  throw createIntegrationError("OD-WEB-API-002");
}

const response = result.data;
```

Assertions must not replace runtime validation.

---

# 23. Non-Null Assertions

Avoid:

```ts
value!
```

Use narrowing, explicit failure, or validation instead.

Permitted only when:

* The invariant is guaranteed by a framework or preceding check
* The assertion is local
* A brief explanation is present when not obvious
* Tests cover the invariant

---

# 24. Null and Undefined

Use:

* `undefined` for omitted optional values
* `null` only when the domain or external API explicitly distinguishes it

Do not use `null` and `undefined` interchangeably.

With exact optional-property semantics:

```ts
type ProductPreview = {
  caption?: string;
};
```

means the property may be absent.

It does not automatically mean:

```ts
caption: undefined
```

should be assigned.

---

# 25. Enums

Do not use TypeScript `enum` by default.

Prefer:

```ts
export const productStatuses = [
  "available",
  "limited-availability",
  "pilot",
  "in-validation",
  "in-development",
  "planned",
  "future-roadmap",
] as const;

export type ProductStatus = (typeof productStatuses)[number];
```

This produces clearer runtime and type behavior.

An enum requires documented justification.

---

# 26. Constants

Use descriptive constant names.

Primitive module-level constants may use uppercase snake case:

```ts
const MAX_MESSAGE_LENGTH = 2_000;
```

Structured configuration should use camel case:

```ts
const formLimits = {
  message: 2_000,
  organization: 160,
} as const;
```

Do not hard-code the same status, route, limit, event, or label across multiple modules.

---

# 27. The `satisfies` Operator

Use `satisfies` when validating object shape while preserving useful literal types.

```ts
const routeDefinition = {
  id: "PRO-PG-001",
  audience: "provider",
  routeKey: "providers.home",
} satisfies PageDefinition;
```

Prefer this over broad assertions.

---

# 28. Discriminated Unions

Use discriminated unions for state and result models.

Preferred:

```ts
type SubmissionResult =
  | { status: "idle" }
  | { status: "pending" }
  | { status: "success"; reference: string }
  | { status: "validation-error"; fields: FieldError[] }
  | { status: "delivery-error"; errorCode: string }
  | { status: "rate-limited"; retryAfterSeconds: number };
```

Avoid combinations of unrelated booleans:

```ts
type SubmissionState = {
  loading: boolean;
  success: boolean;
  error: boolean;
};
```

---

# 29. Exhaustive Branching

Branches over controlled unions must be exhaustive.

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${String(value)}`);
}
```

Use exhaustive checks for:

* Product Status
* Error categories
* Consent states
* Audience values
* Market availability
* Component variants

This prevents silent behavior when a new value is introduced.

---

# 30. Function Design

Functions should:

* Have one clear responsibility
* Use descriptive names
* Return predictable types
* Avoid hidden side effects
* Fail explicitly
* Be easy to test

Prefer early returns over deep nesting.

Avoid more than three positional parameters.

Use an options object when inputs form a coherent request.

Preferred:

```ts
function createCanonicalUrl({
  locale,
  routeKey,
  siteUrl,
}: CreateCanonicalUrlOptions): URL {
  // ...
}
```

---

# 31. Function Naming

Functions should start with an action or transformation verb.

Examples:

```text
createPageMetadata
validateProductStatus
normalizeFormInput
mapIntegrationError
submitDemoRequest
getPublishedResources
isSupportedLocale
```

Avoid vague names:

```text
process
handleData
doThing
run
helper
manage
```

Event handlers may use:

```text
handleSubmit
handleAudienceSelect
handleDialogClose
```

within a component.

Public callback props should describe intent:

```text
onAudienceSelect
onConsentChange
onSubmissionComplete
```

---

# 32. Boolean Naming

Boolean variables and props should read as questions or states.

Preferred:

```text
isPublished
hasConsent
canRetry
shouldAnimate
isExternal
```

Avoid:

```text
published
consent
retry
animate
external
```

when the value is boolean and the meaning is unclear.

---

# 33. React Component Naming

React component identifiers use Pascal case.

```ts
export function ProductStatusPanel() {
  // ...
}
```

Component filenames remain kebab case:

```text
product-status-panel.tsx
```

Props types use:

```text
<ComponentName>Props
```

Example:

```ts
type ProductStatusPanelProps = {
  record: PublicProductStatusRecord;
};
```

---

# 34. React Component Declaration

Use function declarations for exported components by default.

Preferred:

```tsx
export function ProductStatusBadge({
  status,
}: ProductStatusBadgeProps) {
  return <span>{status}</span>;
}
```

Avoid unnecessary `React.FC`.

Props should be typed directly.

Do not call component functions directly.

Use them through JSX.

---

# 35. React Purity

Component render logic must remain pure.

Do not perform during render:

* Network requests from Client Components
* Logging side effects
* Analytics transmission
* Storage writes
* DOM mutation
* Random ID generation
* Mutable global updates
* Current-time decisions that affect hydration
* External-service calls

Do not mutate:

* Props
* State
* Context values
* Imported data objects

Create new values instead.

---

# 36. Hooks

Hooks must:

* Be called at the top level
* Be called only from React components or custom Hooks
* Use the `use` prefix
* Have stable, clear responsibilities

Do not call Hooks:

* Inside conditions
* Inside loops
* Inside event handlers
* After conditional returns
* Inside nested functions
* Inside `try`, `catch`, or `finally`
* Dynamically through props

Custom Hooks belong only to client-side behavior.

Server-side reusable logic belongs in ordinary functions or services.

---

# 37. Effects

Use `useEffect` only to synchronize with an external client-side system.

Appropriate examples:

* Browser event subscription
* Media-query listener
* Third-party client widget
* Focus restoration not handled by a primitive
* Approved analytics lifecycle
* Storage synchronization

Do not use effects for:

* Deriving values from props
* Formatting data
* Filtering arrays
* Loading server-available public content
* Responding to a button click when the event handler can do it
* Copying props into state without a clear lifecycle requirement

---

# 38. State

Keep state as local as practical.

Use:

* Server-rendered data for public content
* URL state for shareable filters
* Local component state for temporary interaction
* Context for stable cross-tree UI concerns
* Server Actions for mutations

Do not introduce global state for:

* Mobile navigation
* One form
* One accordion
* One chart
* Page-local filters

Do not store derived values when they can be calculated safely.

---

# 39. Memoization

Do not use:

* `useMemo`
* `useCallback`
* `memo`

by default.

Use them when:

* Measurement shows a meaningful performance issue
* Referential stability is required by an external API
* Expensive computation is repeated
* A documented component contract requires stability

Premature memoization adds complexity and can hide design problems.

---

# 40. Server Components

Layouts, pages, and content components remain Server Components by default.

Do not add:

```ts
"use client";
```

unless the module requires client capabilities.

Server Components should own:

* Content loading
* Product Status lookup
* Route definitions
* Metadata-related data
* Structured content
* Static page sections
* Server API reads
* Configuration resolution

A Server Component may compose small Client Components.

---

# 41. Client Components

A Client Component is permitted for:

* State
* Event handlers
* Effects
* Browser APIs
* Motion
* Radix interactive primitives
* Consent controls
* Interactive charts
* Interactive form state
* Dialogs and drawers

Client Components must:

* Receive minimal serializable props
* Avoid server-only imports
* Avoid large static-content payloads
* Avoid direct external API access
* Avoid direct environment access
* Avoid direct vendor analytics access

---

# 42. Client Boundary Comments

Add a concise explanation when the reason for a client boundary is not obvious.

```tsx
"use client";

// Client boundary required for keyboard-driven tabs and animated selection.
```

Do not add repetitive comments to obviously interactive primitives.

---

# 43. Next.js Route Files

Route files must remain thin.

A page should normally:

1. Resolve locale
2. Resolve Page ID
3. Load approved content
4. Load approved structured data
5. Create metadata
6. Compose page sections

Avoid embedding:

* Vendor integrations
* Complex transformations
* Reusable schemas
* Form delivery
* Analytics-provider calls
* Product-status definitions
* Long static copy

---

# 44. Framework File Conventions

Use framework filenames only for their intended responsibility.

```text
page.tsx
    Page route

layout.tsx
    Shared route layout

loading.tsx
    Route loading boundary

error.tsx
    Route error boundary

not-found.tsx
    Route not-found content

route.ts
    HTTP endpoint

proxy.ts
    Approved request proxy and locale handling
```

Do not use framework files as general utility modules.

---

# 45. Internal Navigation

Use approved localized navigation wrappers and Next.js links.

Do not use:

```ts
window.location.href = "/providers";
```

for ordinary internal navigation.

Do not use `useRouter` when a link is semantically correct.

Buttons perform actions.

Links navigate.

---

# 46. Images, Fonts, and Scripts

Use:

* `next/image`
* Approved Next.js font integration
* `next/script` only for approved third-party scripts
* Metadata APIs for head content

Do not:

* Use raw `<img>` for ordinary responsive content
* Load external fonts at runtime without approval
* Add synchronous third-party scripts
* Insert arbitrary `<head>` content
* Add scripts outside consent or security review

---

# 47. Static Rendering

Do not accidentally make static routes dynamic.

Request-bound APIs such as cookies or headers must not be used in static pages unless the requirement explicitly depends on them.

Do not add:

```text
force-dynamic
no-store
```

to a route merely to resolve a development issue.

Dynamic rendering requires a documented need.

---

# 48. Data Fetching

Server-side data access must occur through:

* Repository content services
* Application services
* Approved integration adapters
* Native Fetch clients

Do not fetch server-available content from a Client Component.

Do not create a `useEffect` fetch for content that can be rendered on the server.

Every external request must define:

* Timeout
* Response validation
* Error mapping
* Logging policy
* Cache policy
* Privacy classification
* Retry policy

---

# 49. Server Actions

Server Actions are public mutation boundaries.

Every Server Action must:

1. Use `"use server"`
2. Accept a controlled payload
3. Normalize input
4. Perform anti-abuse checks
5. Apply rate limiting
6. Validate through Zod
7. Call an application service
8. Return a typed serializable result
9. Map errors safely
10. Avoid logging form content
11. Avoid exposing exception details
12. Avoid importing vendor implementation into UI code

Server Actions must not contain all workflow logic in one function.

---

# 50. Route Handlers

Use Route Handlers for:

* Health checks
* Public runtime configuration
* Approved webhooks
* Machine-oriented endpoints

Route Handlers must:

* Validate request method
* Validate content type
* Limit request size
* Validate parameters and body
* Return explicit status codes
* Use safe response schemas
* Use no-store where required
* Avoid leaking configuration

Do not duplicate a Server Action through an unnecessary API route.

---

# 51. Validation Boundaries

Validation is mandatory for:

* Environment variables
* Form inputs
* Search parameters
* Route parameters
* Cookies
* Content metadata
* Product Status
* Pricing
* Analytics events
* External API responses
* Webhooks
* Public runtime configuration

Static TypeScript types do not validate runtime data.

---

# 52. Zod Usage

Use `safeParse` when invalid data is an expected outcome.

Examples:

* Form input
* Query parameters
* External response
* Optional content entry

Use `parse` when invalid data represents a programming or build configuration failure that should throw.

Examples:

* Required environment configuration
* Approved build-time content manifest
* Internal constants loaded at startup

Do not expose raw Zod messages directly to public users.

Map issues to:

* Stable field codes
* Localized messages
* Accessible error summaries

---

# 53. Input Normalization

Normalize before domain use.

Permitted normalization includes:

* Trimming outer whitespace
* Normalizing line endings
* Lowercasing email domains where appropriate
* Removing zero-width formatting characters where safe
* Converting empty optional fields to absence
* Restricting excessive whitespace

Do not silently alter:

* Names
* Clinical terminology
* Organization names
* User meaning
* Arabic characters
* Numeric values

Validation and normalization must remain separate from clinical interpretation.

---

# 54. Forms

Forms must use semantic HTML.

Requirements:

* Visible labels
* Correct autocomplete
* Accessible descriptions
* Field-level errors
* Error summary
* Pending state
* Duplicate-submission prevention
* Success state
* Delivery-failure state
* Privacy notice
* Character and size limits
* No unnecessary clinical data

Do not rely on placeholder text as the label.

Do not validate only in the browser.

---

# 55. Form Results

Use a discriminated result type.

```ts
type FormActionResult =
  | { status: "success"; reference: string }
  | { status: "validation-error"; fields: FieldError[] }
  | { status: "rate-limited"; retryAfterSeconds: number }
  | { status: "delivery-error"; errorCode: string };
```

Do not return:

* Raw exceptions
* Vendor responses
* Stack traces
* Secrets
* Arbitrary strings that the UI must interpret

---

# 56. External Integrations

Page and component code must not call external providers directly.

Approved flow:

```text
Page or Server Action
↓
Application service
↓
Internal port
↓
Vendor adapter
↓
External service
```

Adapters must own:

* Authentication
* Request construction
* Timeout
* Response parsing
* Vendor-error mapping
* Safe logging

Application services must depend on internal contracts, not vendor SDK types.

---

# 57. Async Code

Always handle asynchronous work explicitly.

Use:

```ts
await
```

rather than unhandled promises.

Do not use floating promises.

Parallelize independent operations:

```ts
const [content, status] = await Promise.all([
  getPageContent(pageId),
  getProductStatus(capabilityId),
]);
```

Do not parallelize operations with ordering or mutation dependencies.

Every asynchronous call must have a defined failure path.

---

# 58. Retry Behavior

Automatic retries are allowed only when:

* The operation is idempotent
* The failure is likely temporary
* Retry count is bounded
* Backoff is controlled
* The user is not misled

Do not automatically retry:

* Lead submission
* Demo request
* Consent mutation
* Email delivery

unless an idempotency mechanism exists.

---

# 59. Error Handling

Expected errors should be represented as typed results.

Unexpected errors should be thrown and handled by the appropriate boundary.

Do not:

* Catch and ignore errors
* Return `null` for every failure
* Show raw exception text
* Convert all errors to HTTP 200
* Log the same error repeatedly at every layer

Catch errors at the layer that can:

* Add meaningful context
* Map them to a stable error
* Recover
* Decide whether to retry

---

# 60. Error Codes

Use approved Error Catalog codes.

Example:

```ts
throw new ApplicationError({
  code: "OD-WEB-FORM-003",
  category: "integration",
  safeMessage: "We could not send your request.",
  retryable: true,
  cause: error,
});
```

Do not invent ad hoc public error identifiers inside components.

---

# 61. Logging

Application code must use the approved structured logger.

Do not use `console.log` in production application code.

Permitted exceptions:

* Local scripts
* Build validation tools
* One-off controlled migration scripts
* Test diagnostics

Even in those cases, output must not contain sensitive information.

Structured logs should include:

* Operation
* Route
* Page ID
* Locale
* Request ID
* Release
* Duration
* Status
* Error code

---

# 62. Sensitive Logging

Never log:

* Form message
* Email address by default
* Phone number
* Medical information
* Risk answers
* Risk category linked to identity
* Pregnancy information
* Ultrasound measurements
* Cookies
* Tokens
* Secrets
* Complete external request or response payloads

When operational correlation is required, use:

* Request ID
* Generated submission reference
* Non-reversible approved identifiers

---

# 63. Analytics

Components must use the approved typed analytics wrapper.

Do not call:

```text
dataLayer.push
gtag
```

outside the analytics provider adapter.

Analytics code must:

* Check consent
* Use stable event names
* Validate properties
* Attach Page ID automatically
* Attach locale and audience where approved
* Exclude sensitive data
* Exclude free-form content
* Exclude names and contact information

Low-level primitives must not emit events automatically.

---

# 64. Analytics Event Naming

Use lowercase snake case.

Preferred:

```text
audience_selected
provider_demo_submitted
application_handoff_selected
consent_preferences_updated
```

Avoid events tied to changing visual text:

```text
clicked_book_a_demo_button
clicked_pink_card
```

Event names describe intent, not presentation.

---

# 65. Product Status

Product Status must come from the controlled source.

Do not:

* Hard-code status in a page
* Infer status from route presence
* Infer status from visual mockups
* Convert `Pilot` into `Available`
* Hide status because it complicates design
* Duplicate the status vocabulary

Code must use the approved Product Status union and exhaustive handling.

---

# 66. Content

Long public copy must not be embedded throughout TSX.

Use approved content sources for:

* Page copy
* Resources
* FAQs
* Clinical explanations
* Product Status summaries
* Team biographies
* References
* Pricing
* Availability

Short interface labels may come from localization messages.

Do not include unsupported clinical or commercial claims in source code.

---

# 67. Localization

Do not concatenate translated fragments.

Avoid:

```ts
`${t("hello")} ${name} ${t("welcome")}`
```

when sentence structure may differ by language.

Translate complete messages with variables.

Do not:

* Assume English word order
* Assume plural rules
* Hard-code date formats
* Hard-code number separators
* Hard-code currencies
* Hard-code left and right alignment
* Use uppercase transformation on Arabic copy
* Construct locale paths manually

Use approved localization and `Intl` utilities.

---

# 68. RTL

Use logical layout properties.

Preferred concepts:

```text
start
end
inline
block
margin-inline
padding-inline
```

Avoid assuming:

```text
left = beginning
right = end
```

Use directional classes only where physical direction is meaningful.

Components must document whether they are:

* Mirrored
* Direction-neutral
* Chronology-preserving
* Locale-customized

---

# 69. Styling

Use:

* Tailwind CSS
* Approved design tokens
* CSS custom properties
* Controlled component variants
* CSS Modules only for justified complex local styling

Do not introduce:

* Inline hard-coded brand colors
* Arbitrary spacing when a token exists
* Runtime CSS-in-JS
* Unapproved global CSS
* Repeated visual values
* Page-specific component overrides that bypass contracts

---

# 70. Tailwind Classes

Prefer token-backed utilities.

Avoid arbitrary values such as:

```text
mt-[37px]
text-[#ff7680]
rounded-[13px]
```

unless:

* No approved token can represent a legitimate requirement
* The value is documented
* Design review approves it
* A token addition is considered

Class strings that encode meaningful variants should use controlled variant utilities rather than repeated conditional concatenation.

---

# 71. `className`

Low-level components may expose `className` for controlled composition.

High-level feature components should not expose unrestricted visual overrides by default.

`className` must not be used to:

* Override Product Status colors
* Remove focus states
* Break spacing contracts
* Introduce arbitrary widths
* Hide clinical boundaries
* Change semantic state

---

# 72. Inline Styles

Inline styles are permitted only for dynamic values such as:

* Calculated chart dimensions
* CSS custom-property values
* Motion transforms
* Data-driven positions

Do not use inline styles for ordinary static design decisions.

---

# 73. Accessibility

Use native elements before ARIA.

Preferred:

```tsx
<button type="button">Open menu</button>
```

Avoid:

```tsx
<div role="button" tabIndex={0}>
  Open menu
</div>
```

unless a native element cannot meet the requirement.

ARIA does not repair incorrect semantics automatically.

---

# 74. Accessibility Rules

Code must not introduce:

* Positive `tabIndex`
* Clickable non-interactive elements
* Icon-only buttons without labels
* Form controls without labels
* Heading-level jumps for visual sizing
* Hidden focus outlines
* Color-only meaning
* Hover-only essential content
* Auto-playing sound
* Uncontrolled focus movement
* Unannounced asynchronous errors

Interactive behavior must be keyboard accessible.

---

# 75. Accessible Names

Every interactive element must have a clear accessible name.

Visible text is preferred.

Use `aria-label` only when visible text cannot provide the name.

Do not use:

```text
Click here
Learn more
Read more
```

without sufficient accessible context when repeated.

---

# 76. Live Regions

Use live regions only for meaningful asynchronous state changes.

Examples:

* Form submission success
* Validation result summary
* Loading completion
* Filter result count

Do not place large changing regions inside `aria-live`.

Avoid repeated announcements during animation.

---

# 77. Images and Alternative Text

Every image must be classified as:

* Informative
* Functional
* Decorative
* Complex

Decorative images use empty alternative text.

Informative images require concise meaningful text.

Complex diagrams require:

* Short alternative text
* Visible caption
* Longer accessible explanation where needed

Do not duplicate adjacent text unnecessarily.

---

# 78. Motion

Motion code must use approved tokens and shared primitives.

Do not:

* Add arbitrary durations
* Add continuous loops
* Add animation merely for polish
* Animate clinical risk repeatedly
* Animate clinical values through counting
* Add scroll hijacking
* Add another motion library

Every material animation requires a reduced-motion state.

---

# 79. Reduced Motion

Client code must respect the user’s reduced-motion preference.

Reduced-motion behavior must:

* Preserve content
* Preserve hierarchy
* Preserve state feedback
* Remove large translation
* Remove parallax
* Remove non-essential loops
* Display final narrative state

Do not simply slow all animation.

Some motion should be removed entirely.

---

# 80. Security

Do not use:

* `eval`
* `new Function`
* Arbitrary script injection
* Untrusted HTML
* Untrusted SVG
* Unvalidated redirect URLs
* User-controlled component names
* User-controlled import paths
* Secrets in client code

Avoid `dangerouslySetInnerHTML`.

When trusted structured content requires HTML rendering, the trust boundary and sanitization policy must be documented.

---

# 81. URLs

Use the URL API for URL construction and validation.

External destinations must be allowlisted where applicable.

Do not construct redirect targets directly from untrusted query values.

External links opening a new browsing context must use appropriate security attributes.

Do not pass:

* Email
* Name
* Medical information
* Risk result
* Patient identifier

through application-handoff query parameters.

---

# 82. Environment Variables

Only the environment module may read `process.env` directly.

Preferred:

```ts
import { environment } from "@/config/environment";
```

Avoid:

```ts
const apiUrl = process.env.ODRISC_PUBLIC_API_BASE_URL;
```

throughout application code.

The environment module must:

* Validate values
* Separate public and server-only configuration
* Fail clearly for missing required values
* Never expose secrets through object spreading

---

# 83. Client-Visible Configuration

Do not expose environment values to the browser merely because they are non-secret.

Public runtime configuration must be:

* Explicitly allowlisted
* Schema validated
* Minimal
* Documented
* Free from internal hostnames and operational details

Avoid broad patterns such as:

```ts
return Response.json(process.env);
```

---

# 84. Performance

Code should minimize:

* Client boundaries
* Hydration
* Re-renders
* Effects
* Large dependencies
* Duplicate data
* Unoptimized media
* Synchronous third-party scripts
* Layout shifts
* Repeated observers

Do not optimize based only on intuition.

Measure material performance decisions.

---

# 85. Dynamic Imports

Use dynamic imports when they materially reduce initial client cost for:

* Charts
* Video players
* Large interactive previews
* Non-essential dialogs
* Rare administrative tools

Do not dynamically import:

* Essential page content
* Primary CTA
* Navigation
* Safety notices
* Product Status
* Core accessibility behavior

Loading and error states must be defined.

---

# 86. Lists and Keys

Use stable domain identifiers as React keys.

Preferred:

```tsx
resources.map((resource) => (
  <ResourceCard key={resource.id} resource={resource} />
));
```

Avoid array indexes when ordering can change.

Do not generate random keys.

---

# 87. Charts

Only ODRISC chart components may import Recharts.

Chart code must:

* Use typed data
* Use approved tokens
* Preserve units and scale
* Provide accessible summaries
* Support reduced motion
* Support RTL rules
* Represent missing data accurately
* Label concept data clearly

Do not embed fictional patient information that could be mistaken for real data.

---

# 88. Dates, Numbers, Units, and Currency

Use approved formatting utilities.

Do not manually format:

* Dates
* Percentages
* Currency
* Units
* Relative time

Formatting must account for:

* Locale
* Market
* Currency
* Unit
* Precision
* Clinical meaning

Store dates in an unambiguous machine-readable format.

Do not parse ambiguous display-formatted dates.

---

# 89. Testing Standards

New behavior requires appropriate tests.

At minimum:

* Pure logic requires unit tests
* Interactive components require component tests
* Public journeys require end-to-end tests
* Accessibility-critical components require accessibility tests
* Stable visual components may require visual regression
* External adapters require integration-contract tests

A change is not complete merely because it compiles.

---

# 90. Test Structure

Tests should follow Arrange, Act, Assert conceptually.

Test names must describe observable behavior.

Preferred:

```ts
it("shows a delivery error without clearing the submitted fields", async () => {
  // ...
});
```

Avoid:

```ts
it("works", () => {
  // ...
});
```

Tests should not depend on internal implementation details.

---

# 91. Test Data

Use obviously fictional test data.

Do not use:

* Real Patient information
* Real form submissions
* Production emails
* Actual clinical records
* Real ultrasound values linked to identity
* Production secrets

Test fixtures must be safe to commit.

---

# 92. Mocking

Mock at architectural boundaries.

Preferred boundaries:

* Integration port
* Analytics adapter
* Clock
* Runtime configuration
* Browser capability

Avoid mocking every internal helper.

Do not mock the unit being tested.

Do not call real production services from automated tests.

---

# 93. Snapshots

Large textual component snapshots are discouraged.

Use snapshots only for stable serialized structures such as:

* Approved structured data
* Generated route manifests
* Small configuration outputs

Use Playwright visual comparisons for visual regression.

Snapshot updates require review.

---

# 94. Storybook

Stories must show realistic component states.

Do not use Storybook only as a visual gallery.

Stories should cover:

* Accessibility
* Long content
* Arabic
* RTL
* Reduced motion
* Error states
* Product Status
* Patient and Provider variants
* Mobile layouts

Story files must not contain production-only integration logic.

---

# 95. Comments

Comments should explain:

* Why a decision exists
* Why an apparent simplification is unsafe
* Why a workaround is required
* Which invariant must be preserved
* Which external limitation applies

Do not comment obvious syntax.

Avoid:

```ts
// Set loading to true
setIsLoading(true);
```

Prefer self-explanatory code.

---

# 96. Documentation Comments

Use TSDoc for exported contracts when meaning is not obvious.

Appropriate uses:

* Integration ports
* Shared services
* Security-sensitive helpers
* Complex chart data
* Product Status functions
* Public component contracts

Do not add verbose generated comments to every variable and function.

---

# 97. TODO Comments

TODO comments must include a traceable issue or decision reference.

Preferred:

```ts
// TODO(ODRISC-142): Replace the temporary delivery adapter after CRM approval.
```

Avoid:

```ts
// TODO: fix later
```

TODOs must not remain for:

* Security vulnerabilities
* Broken accessibility
* Missing validation
* Product Status uncertainty
* Clinical claim review

Those issues block release.

---

# 98. Commented-Out Code

Do not retain commented-out code.

Version control already preserves history.

Remove obsolete code.

Temporary code must be tracked through an issue, feature branch, or explicit feature configuration.

---

# 99. Generated Code

Generated code must:

* Live in a clearly identified directory
* Include a generated-file notice where supported
* Identify the generation command
* Identify the source contract
* Be reproducible
* Be excluded from manual formatting or lint rules where appropriate
* Be regenerated rather than edited manually

Examples:

* OpenAPI contracts
* Generated route manifests
* Generated sitemap data
* Generated design-token exports

Manual wrappers should isolate generated code from the rest of the application.

---

# 100. AI-Generated Code

AI-generated code is held to the same standard as human-written code.

Before acceptance, it must be:

* Read completely
* Checked against current architecture
* Checked against the approved package versions
* Checked for invented APIs
* Checked for unsupported claims
* Checked for unnecessary dependencies
* Checked for client-boundary expansion
* Checked for security and privacy issues
* Checked for accessibility
* Checked for localization and RTL
* Tested
* Formatted
* Linted
* Type checked

AI output must never be merged solely because it looks plausible.

---

# 101. AI Comments and Artifacts

Do not commit:

* AI chain-of-thought
* Prompt transcripts
* Model-generated explanations inside source files
* Placeholder claims that work is complete
* Unverified citations
* Chat export files
* Temporary model instructions
* Hidden prompt files outside approved agent documentation

Approved AI instructions belong only in governed files such as:

* `AGENTS.md`
* `CLAUDE.md`
* `ai/rules/`
* `ai/workflows/`

---

# 102. Dependency Use

Do not install a package before checking:

1. Native platform capability
2. React or Next.js capability
3. Existing approved dependency
4. Existing internal utility
5. Bundle impact
6. Security
7. Accessibility
8. RTL
9. Maintenance
10. License
11. Exit strategy

Every dependency must comply with:

`docs/engineering/DEPENDENCY_POLICY.md`

---

# 103. Package Imports

Import only the required package entry points.

Avoid whole-library imports that increase bundle size.

Preferred:

```ts
import { ArrowRight } from "lucide-react";
```

Avoid runtime package imports inside server-only code when a lighter native solution exists.

Do not import internal undocumented package paths unless the package explicitly supports them.

---

# 104. Dependency Updates

A dependency update must not be mixed with unrelated feature work unless required.

Update pull requests must include:

* Reason
* Version change
* Relevant release notes reviewed
* Breaking-change assessment
* Test results
* Bundle or performance impact where relevant
* Rollback approach for major changes

Lockfile changes must be reviewed.

---

# 105. Linting

Use ESLint flat configuration.

The canonical configuration file is:

```text
eslint.config.mjs
```

The project must use:

* Next.js Core Web Vitals rules
* Next.js TypeScript rules
* React rules
* React Hooks rules
* JSX accessibility rules
* Testing Library rules
* Playwright rules
* ODRISC architecture restrictions

Run ESLint through the ESLint CLI.

Do not use:

```text
next lint
```

---

# 106. Lint Warnings

Continuous integration must use:

```text
--max-warnings=0
```

Warnings must not accumulate indefinitely.

A lint rule should be:

* Enabled as an error
* Disabled with documented reason
* Introduced temporarily as a warning with a removal plan

Do not establish permanent warning debt.

---

# 107. ESLint Disables

Inline ESLint disables must:

* Use the smallest possible scope
* Name the exact rule
* Explain why the disable is safe
* Be removed when no longer required

Preferred:

```ts
// Safe because this generated identifier must match the external schema.
// eslint-disable-next-line @typescript-eslint/naming-convention
```

Avoid:

```ts
/* eslint-disable */
```

Unused disable directives must fail linting.

---

# 108. Required Restricted Patterns

Linting or architecture validation should prohibit:

* `process.env` outside configuration modules
* Direct `dataLayer` or `gtag` access
* Direct Recharts imports outside chart modules
* Vendor SDK imports inside components
* `src/server` imports from Client Components
* `src/app` imports from components
* Entire page modules marked `"use client"`
* Unsupported Product Status strings
* `console.log` in application source
* Unapproved `dangerouslySetInnerHTML`
* Direct internal route strings where route keys are required

---

# 109. Formatting and Linting Responsibilities

Prettier owns formatting.

ESLint owns:

* Correctness
* Framework practices
* Accessibility
* Hooks
* Architecture restrictions
* Type-aware code-quality rules

Do not configure ESLint formatting rules that conflict with Prettier.

Use an approved ESLint-Prettier compatibility configuration.

---

# 110. Package Scripts

The repository should expose stable scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "format": "prettier . --write",
    "format:check": "prettier . --check",
    "lint": "eslint . --max-warnings=0",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "storybook": "storybook dev",
    "build:storybook": "storybook build"
  }
}
```

Additional validation scripts are defined by Architecture and Testing Strategy.

Script names must remain stable for human and AI contributors.

---

# 111. Code Review

Reviewers must assess:

* Correctness
* Architecture
* Type safety
* Security
* Privacy
* Accessibility
* Product Status
* Clinical wording
* Localization
* RTL
* Testing
* Performance
* Dependency impact
* Error behavior
* Analytics
* Maintainability

Code review is not limited to style.

---

# 112. Pull-Request Scope

A pull request should contain one coherent change.

Avoid combining:

* Feature implementation
* Framework upgrade
* Large refactor
* Dependency replacement
* Content rewrite
* Design-system changes

unless they are inseparable.

Large changes should be decomposed into reviewable milestones.

---

# 113. Pull-Request Description

Every material pull request should include:

* Problem
* Scope
* Page IDs
* Component IDs
* Requirements
* Architecture impact
* Screenshots or recordings where useful
* Accessibility impact
* RTL impact
* Product Status impact
* Analytics impact
* Tests run
* Known limitations
* Rollback or reversion approach

---

# 114. Commit Messages

Use concise imperative commit messages.

Recommended prefixes:

```text
feat:
fix:
docs:
refactor:
test:
perf:
security:
build:
ci:
chore:
```

Examples:

```text
feat: add shared audience gateway
fix: preserve focus after mobile menu close
docs: define public website coding standards
test: cover Arabic provider navigation
security: validate external handoff destinations
```

Do not use vague messages:

```text
updates
changes
fix stuff
final
working version
```

---

# 115. Branch Naming

Recommended branch naming:

```text
feat/audience-gateway
fix/mobile-menu-focus
docs/coding-standards
refactor/product-status-source
security/form-origin-validation
```

Branch names should describe the change.

Do not include secrets, Patient details, or confidential partner names unless approved.

---

# 116. Review Triggers

The following require additional review:

## Clinical Review

* Risk communication
* Weight communication
* Nutrition
* Physical activity
* Maternal intelligence
* Fetal growth
* Validation claims
* Safety notices

## Security and Privacy Review

* Forms
* Cookies
* Consent
* Analytics
* External scripts
* Runtime configuration
* New integration
* Logging
* URL handoffs

## Accessibility Review

* New interactive primitive
* Navigation
* Dialog
* Drawer
* Form
* Chart
* Motion
* Custom control

## Architecture Review

* New dependency
* New public endpoint
* New client-side state pattern
* New adapter
* New persistence
* New deployment behavior
* New cross-module dependency

---

# 117. Code-Size Review Signals

The following are review signals, not automatic failures:

* Function above approximately 50 lines
* Component above approximately 200 lines
* Module above approximately 300 lines
* More than five component variants
* More than three nested conditional levels
* More than three boolean props
* More than three positional function parameters

When these appear, review whether responsibilities should be separated.

Do not split code mechanically to satisfy a number.

---

# 118. Complexity Rules

Avoid:

* Nested ternaries
* Deeply nested conditions
* Boolean-prop combinations with unclear meaning
* Functions with hidden mutation
* One module coordinating unrelated domains
* Abstractions created before a second real use case
* Generic utilities with weak contracts

Use:

* Early returns
* Named predicates
* Discriminated unions
* Small domain functions
* Explicit state models
* Clear application services

---

# 119. Standards Exceptions

An exception may be granted when:

* The approved framework requires it
* A verified third-party API requires it
* Accessibility is improved
* Security requires it
* A migration is in progress
* Performance evidence justifies it

Every exception must include:

* Standard being bypassed
* Reason
* Scope
* Risk
* Mitigation
* Owner
* Approval
* Expiry or review date

Exceptions must be recorded in:

`docs/engineering/CODING_STANDARDS_EXCEPTION_REGISTER.md`

---

# 120. Prohibited Coding Practices

Do not:

* Use `any` to bypass type design
* Disable strict TypeScript
* Ignore type errors during build
* Use global ESLint disables
* Add an entire-page Client Component without necessity
* Fetch public content from effects
* Read `process.env` across the application
* Log sensitive form or health data
* Emit analytics from primitives
* Call external vendors from UI components
* Connect directly to SQL Server
* Add clinical logic to the public website
* Hard-code Product Status
* Hard-code pricing across components
* Hard-code locale-specific formatting
* Use inaccessible custom controls
* Use untrusted HTML
* Use random React keys
* Swallow errors
* Return raw exceptions to the browser
* Commit secrets
* Commit production Patient data
* Merge generated code without review
* Add dependencies without approval
* Add temporary code without ownership
* Leave broken tests skipped without a tracked reason
* Mark work complete when acceptance criteria are not met

---

# 121. Coding Acceptance Criteria

A code change is acceptable when:

## Formatting and Types

* Formatting passes
* Linting passes with zero warnings
* Type checking passes
* No unjustified `any` or assertion exists

## Architecture

* Correct module layer is used
* Server and Client boundaries are preserved
* Vendor dependencies remain behind adapters
* No direct database access exists
* Existing components and utilities are reused appropriately

## Product

* Page IDs and Component IDs are correct
* Product Status uses the controlled source
* No unsupported capability is implied
* Clinical boundaries remain intact

## Accessibility and Localization

* Semantic HTML is used
* Keyboard behavior works
* Focus is correct
* Arabic and RTL are considered
* Reduced motion is implemented
* Content expansion is supported

## Security and Privacy

* Inputs are validated
* Secrets remain server-side
* Logs contain no sensitive data
* Analytics payloads are safe
* External URLs are controlled

## Quality

* Required tests pass
* Storybook is updated where applicable
* Failure states are covered
* Performance impact is acceptable
* Documentation is updated

---

# 122. Rules for AI Agents

Before writing or changing code, AI agents must:

1. Read `docs/engineering/TECH_STACK.md`.
2. Read `docs/engineering/ARCHITECTURE.md`.
3. Read `docs/engineering/COMPONENT_LIBRARY.md`.
4. Read `docs/engineering/CODING_STANDARDS.md`.
5. Identify the requirement, Page ID, and Component ID.
6. Search for an existing implementation.
7. Identify server or client placement.
8. Identify validation boundaries.
9. Identify Product Status requirements.
10. Identify accessibility and RTL behavior.
11. Identify analytics ownership.
12. Identify error and logging behavior.
13. Identify required tests.
14. Verify every external API against the installed version.
15. Run formatting, linting, type checking, and relevant tests.
16. Review the final diff for unrelated changes.

AI agents must not:

* Invent APIs
* Install packages automatically
* weaken compiler or linting rules
* add `any`
* add an unnecessary Client Component
* add unapproved design values
* add unsupported claims
* create duplicate code
* skip tests to make CI pass
* suppress errors without explanation
* expose secrets
* commit placeholder implementations as complete
* claim verification without running the relevant checks

---

# 123. Locked Coding Decisions

The following decisions are locked unless formally changed:

1. Prettier is the canonical formatter.
2. Source indentation uses two spaces.
3. Source strings use double quotes.
4. Semicolons are required.
5. Source files use LF endings.
6. Source filenames use lowercase kebab case.
7. React identifiers use Pascal case.
8. Named exports are the default.
9. Default exports are limited to framework and tooling conventions.
10. Category-level barrels are permitted.
11. One global application barrel is prohibited.
12. Cross-module imports use the `@/` alias.
13. Strict TypeScript is required.
14. `noUncheckedIndexedAccess` is enabled.
15. `exactOptionalPropertyTypes` is enabled.
16. `any` is prohibited by default.
17. Untrusted values begin as `unknown`.
18. Runtime schemas define external-boundary types.
19. TypeScript enums are avoided by default.
20. Controlled values use const data and union types.
21. Exhaustive handling is required for controlled unions.
22. React components and Hooks must remain pure.
23. Hooks follow the Rules of Hooks.
24. Effects are reserved for external client synchronization.
25. Server Components are the default.
26. Client boundaries must be small and justified.
27. Route files remain thin.
28. Links navigate and buttons perform actions.
29. Static rendering must not be disabled casually.
30. External requests use application services and adapters.
31. Server Actions are treated as public mutation boundaries.
32. Route Handlers are used for machine endpoints and health/config routes.
33. Zod validates runtime boundaries.
34. Public form errors are mapped to stable localized messages.
35. Product Status is not hard-coded in components.
36. Long public content is not distributed through TSX.
37. Localization uses complete messages rather than concatenated fragments.
38. RTL uses logical layout behavior.
39. Styling uses Tailwind and approved tokens.
40. Arbitrary visual values require justification.
41. Native HTML is preferred over custom controls.
42. Accessibility is part of code correctness.
43. Reduced-motion behavior is mandatory.
44. `process.env` is read only by the environment module.
45. Sensitive values are excluded from logs and analytics.
46. Analytics uses a consent-aware typed wrapper.
47. Recharts imports remain inside the chart module.
48. AI-generated code receives the same review as human code.
49. ESLint uses flat configuration.
50. ESLint runs through the ESLint CLI.
51. `next lint` is not used.
52. CI permits zero lint warnings.
53. Inline lint disables require narrow scope and explanation.
54. Tests verify behavior rather than implementation.
55. Real Patient and production data are prohibited in tests.
56. Generated code is isolated and reproducible.
57. Commit messages use approved descriptive prefixes.
58. Exceptions are documented and time bounded.
59. Material standards changes require approval.
60. Passing compilation alone does not make work complete.

---

# 124. Remaining Coding Questions

The following remain unresolved:

* Which exact ESLint plugins are installed beyond `eslint-config-next`?
* Are type-aware TypeScript ESLint rules enabled for all source files or selected directories?
* Is `noPropertyAccessFromIndexSignature` enabled?
* Is `noUnusedLocals` enforced through TypeScript or ESLint?
* Is import ordering automated through an additional plugin?
* Is the official Tailwind Prettier plugin included?
* Are component tests stored centrally or colocated in the final repository?
* Are Storybook stories colocated with source components?
* Which modules require TSDoc as a release requirement?
* Which code-size review signals become automated lint thresholds?
* Is a Git-hook runner approved?
* Is `lint-staged` approved?
* Which pre-commit checks are mandatory?
* Which checks run only in CI?
* Which architecture restrictions are implemented through ESLint versus validation scripts?
* Are server-only import restrictions implemented with ESLint, TypeScript, or both?
* Which generated directories are committed?
* Which generated directories are ignored?
* Which test files may use non-null assertions for fixture construction?
* What issue-key format is used in TODO comments?
* Which commit-message checks are automated?
* Are Conventional Commits enforced or only recommended?
* Who approves coding-standard exceptions?
* What is the default exception-review period?
* Who owns the ESLint configuration?
* Who owns the TypeScript configuration?
* Who owns formatting configuration?
* Which warnings or rule violations block the first implementation sprint?
* Which legacy source files require staged migration rather than immediate enforcement?
* What is the maximum approved client bundle contribution for a single feature?
* Which security rules require custom ESLint enforcement?
* Are AI-generated pull requests labeled automatically?
* Which validation commands must an AI agent run before requesting review?

These questions must remain in:

`docs/project/OPEN_QUESTIONS.md`

---

# 125. Foundational Coding Summary

ODRISC public-website code must follow this implementation path:

```text
Approved requirement
↓
Correct architectural layer
↓
Strict TypeScript contract
↓
Validated runtime boundaries
↓
Server-first React implementation
↓
Accessible and RTL-ready component behavior
↓
Safe errors, logs, and analytics
↓
Automated tests
↓
Formatting, linting, and type checking
↓
Human review
↓
Immutable deployment
```

Every implementation must remain:

* Clear
* Typed
* Secure
* Accessible
* Localization-ready
* Clinically responsible
* Product-status accurate
* Testable
* Reviewable
* Consistent with the approved ODRISC architecture
