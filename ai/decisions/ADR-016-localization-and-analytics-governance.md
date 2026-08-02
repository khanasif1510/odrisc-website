# ADR-016 — Public Website Localization and Analytics Governance

## Status

Approved

## Date

2026-08-02

## Context

The ODRISC public website requires deterministic locale routing, Arabic and
right-to-left readiness, and a controlled analytics-event contract before
localization, analytics validation, and the complete continuous-integration
workflow can be enforced.

The approved Information Architecture defines `/` as the Shared Audience Entry
and uses unprefixed English routes. The website must preserve those canonical
routes while introducing Arabic without creating an unrelated Arabic component
tree or an ungoverned parallel information architecture.

The Testing Strategy also requires an authoritative Analytics Event Registry.
Analytics governance must separate technical registry maintenance, business
purpose approval, and privacy approval for production payloads and consent
behavior.

The exact Qatar V1 P0 Page-ID inventory remains unresolved. Localization policy
can be approved now, while the final Arabic page inventory remains dependent on
that launch-scope decision.

## Decision

### Analytics Event Registry Governance

The Analytics Event Registry will use the following ownership model:

- The CTO owns technical maintenance of the registry.
- The Founder approves the business purpose of each event.
- The Privacy owner approves production payload fields, consent behavior, and
  data-classification compliance.
- Every implemented analytics event must be registered before transmission.
- Event names and property names must remain stable and typed.
- Event payloads must exclude form contents, email addresses, phone numbers,
  clinical values, health-assessment results, patient identifiers, and other
  prohibited sensitive data.
- No event becomes approved solely because it appears in source code, a page
  requirement, a component specification, or this decision record.

### English Canonical Routes

English remains the default language and uses unprefixed canonical routes.

Examples include:

```text
/
/patients/
/providers/
/contact/
```

````

The root route remains the Shared Audience Entry identified by `SH-PG-001`.

### Arabic Route Prefix

Arabic routes use the `/ar/` prefix.

Examples include:

```text
/ar/
/ar/patients/
/ar/providers/
/ar/contact/
````

Page components, navigation components, and application code must use approved
locale-aware route helpers rather than manually concatenating locale prefixes.

### Arabic Pathnames

Arabic routes initially retain the approved English path segments beneath the
`/ar/` prefix.

Translated Arabic pathnames are deferred. Introducing them requires a separate
SEO and architecture decision covering canonical URLs, redirects, sitemap
changes, analytics continuity, and migration testing.

### Initial Arabic Scope

Arabic and right-to-left support are required for:

- `SH-PG-001` Shared Audience Entry
- Every release-blocking P0 page subsequently included in the approved Qatar V1
  journey set
- Shared navigation and audience-switching components used by those pages
- Required consent, error, and application-handoff states used by those pages

The exact additional Arabic Page-ID inventory remains dependent on the approved
Qatar V1 P0 journey set.

A page without complete, approved, meaning-equivalent Arabic content must remain
unpublished in Arabic. Missing translations must not silently fall back to
English on a publicly presented Arabic page.

## Consequences

- Existing unprefixed English canonical routes are preserved.
- Arabic route equivalence is deterministic and testable.
- The `/` Shared Audience Entry does not require migration to `/en/`.
- Arabic implementation can use one component architecture with direction-aware
  layout rather than a duplicated component tree.
- Locale-aware route helpers become required infrastructure.
- Translation-completeness validation becomes release blocking for published
  Arabic pages.
- Arabic and RTL browser tests can target an approved `/ar/` route structure.
- The Analytics Event Registry becomes a required source of truth.
- Analytics events cannot be introduced only through implementation.
- Technical, business, and privacy approvals remain distinct.
- The final Qatar V1 Arabic inventory cannot be closed until the Qatar V1 P0
  journey set is approved.

## Alternatives Considered

### Prefix Both English and Arabic Routes

Not selected because it would migrate the approved unprefixed English routes and
conflict with the current Route Registry without a demonstrated product or SEO
benefit.

### Use Unprefixed Routes for Both Languages

Rejected because canonical routing, indexing, language switching, analytics,
and testing would become ambiguous.

### Use Translated Arabic Pathnames Immediately

Deferred because the translated pathname inventory, redirect policy, and Arabic
SEO review have not been approved.

### Allow English Fallback on Published Arabic Pages

Rejected because it would present incomplete localization as an approved Arabic
experience.

### Let Implementation Define Analytics Events

Rejected because source code cannot replace an approved registry, business
purpose review, consent rules, or privacy review.

### Assign All Analytics Governance to One Owner

Rejected because technical maintenance, business-purpose approval, and privacy
approval are separate responsibilities.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/project/SOURCE_OF_TRUTH.md`
- `docs/project/OPEN_QUESTIONS.md`
- `docs/product/PRD.md`
- `docs/product/INFORMATION_ARCHITECTURE.md`
- `docs/product/ROUTE_REGISTRY.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `ai/decisions/ADR-006-public-website-information-architecture.md`
- `ai/decisions/ADR-012-public-website-architecture.md`
- `ai/decisions/ADR-015-public-website-testing-strategy.md`
- `docs/engineering/ANALYTICS_EVENT_REGISTRY.md`
