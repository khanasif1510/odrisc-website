# ODRISC Public Website Analytics Event Registry

## Purpose

This document is the authoritative registry for analytics events permitted on
the ODRISC public website.

An event appearing in page requirements, a component specification, source code,
or a test does not make it approved. Implemented events must match an approved
entry in this registry.

## Governance

Analytics governance follows
`ai/decisions/ADR-016-localization-and-analytics-governance.md`.

- The CTO owns technical maintenance.
- The Founder approves each event's business purpose.
- The Privacy owner approves payload fields, consent behavior, and data
  classification before production activation.
- Event and property names must remain stable and typed.
- Material event changes require renewed review.

## Status Definitions

| Status      | Meaning                                                        |
| ----------- | -------------------------------------------------------------- |
| Proposed    | Candidate event awaiting required approval                     |
| Approved    | Business-purpose and privacy approvals are complete            |
| Implemented | Approved event is implemented but not yet active in production |
| Active      | Approved event is active in production                         |
| Deprecated  | Event must not be used for new implementation                  |
| Rejected    | Required approval was denied and the event must not be emitted |
| Retired     | Event must no longer be emitted                                |

## Approval Values

| Value    | Meaning                                |
| -------- | -------------------------------------- |
| Pending  | Approval has not been completed        |
| Approved | The responsible owner has approved it  |
| Rejected | The responsible owner rejected its use |

## Consent Categories

| Category  | Rule                                                               |
| --------- | ------------------------------------------------------------------ |
| Essential | Used only where necessary for consent or operational functionality |
| Analytics | Emitted only after valid analytics consent                         |
| Marketing | Emitted only after valid marketing consent and explicit approval   |

## Automatically Added Context

The approved analytics wrapper adds applicable controlled context:

- `page_id`
- `page_type`
- `audience`
- `route`
- `locale`
- `market`
- `product_status_dependency`
- `release`

Callers must not supply or override protected context fields unless the typed
analytics contract explicitly permits it.

## Prohibited Payload Data

No event may contain:

- Names
- Email addresses
- Phone numbers
- Free-form form messages
- Medical information
- Clinical values
- Risk-assessment answers
- Risk categories linked to identity
- Patient identifiers
- Provider-entered Patient information
- Ultrasound values
- Pregnancy week linked to identity
- Authentication credentials
- Session tokens
- Uncontrolled external URLs

## Event Registry

| Event ID    | Event name                     | Purpose                                        | Controlled event properties                                      | Consent   | Technical owner | Business approval | Privacy approval | Status   |
| ----------- | ------------------------------ | ---------------------------------------------- | ---------------------------------------------------------------- | --------- | --------------- | ----------------- | ---------------- | -------- |
| ANA-EVT-001 | `page_viewed`                  | Measure approved public-page viewing           | None beyond automatically added context                          | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-002 | `audience_selected`            | Measure initial audience selection             | `selected_audience`, `destination_route_id`                      | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-003 | `audience_switched`            | Measure switching between audiences            | `previous_audience`, `selected_audience`, `destination_route_id` | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-004 | `locale_changed`               | Measure explicit language changes              | `previous_locale`, `selected_locale`, `destination_route_id`     | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-005 | `primary_cta_selected`         | Measure approved primary CTA interaction       | `cta_id`, `destination_type`                                     | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-006 | `patient_start_selected`       | Measure Patient application-start selection    | `handoff_id`, `availability_status`                              | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-007 | `provider_demo_started`        | Measure Provider demonstration form starts     | `form_id`                                                        | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-008 | `provider_demo_submitted`      | Measure successful demonstration submissions   | `form_id`                                                        | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-009 | `provider_demo_failed`         | Measure safe demonstration submission failure  | `form_id`, `public_error_code`                                   | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-010 | `contact_submitted`            | Measure successful contact submissions         | `form_id`, `contact_category`                                    | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-011 | `contact_failed`               | Measure safe contact submission failure        | `form_id`, `contact_category`, `public_error_code`               | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-012 | `application_handoff_selected` | Measure approved external application handoffs | `handoff_id`, `destination_type`, `availability_status`          | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-013 | `consent_preferences_updated`  | Record controlled consent-preference changes   | `changed_categories`                                             | Essential | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-014 | `resource_selected`            | Measure approved resource selection            | `resource_id`, `resource_type`, `resource_audience`              | Analytics | CTO             | Pending           | Pending          | Proposed |
| ANA-EVT-015 | `faq_expanded`                 | Measure FAQ interaction                        | `faq_id`                                                         | Analytics | CTO             | Pending           | Pending          | Proposed |

## Property Rules

- `selected_audience` and `previous_audience` use controlled audience values.
- `previous_locale` and `selected_locale` use approved locale identifiers.
- Route destinations use internal route identifiers rather than arbitrary URLs.
- `cta_id`, `handoff_id`, `form_id`, `resource_id`, and `faq_id` use controlled
  repository identifiers.
- `contact_category`, `destination_type`, `resource_type`,
  `resource_audience`, and `availability_status` use approved enums.
- `public_error_code` must reference the approved Error Catalog.
- `changed_categories` may identify consent-category names only; it must not
  include identifiers, timestamps, free-form values, or user-entered data.

## Implementation Rules

- Only `Approved`, `Implemented`, or `Active` events may be emitted.
- `Proposed`, `Deprecated`, `Rejected`, and `Retired` events must not be emitted.
- Analytics-consent events must not fire before valid analytics consent.
- Marketing events require separate explicit approval.
- Form events must never contain field values or submission contents.
- Failure events may contain only approved public error codes.
- Event transmission must use the internal analytics wrapper.
- Direct `dataLayer.push` or `gtag` use outside the approved provider adapter is
  prohibited.
- Duplicate events must be prevented.
- Development and test environments must use controlled destinations.

## Review Requirements

Each event requires:

1. Technical contract review
2. Founder business-purpose approval
3. Privacy payload and consent review
4. Typed implementation
5. Unit or integration evidence
6. Staging verification before production activation

## Related Documents

- `ai/decisions/ADR-016-localization-and-analytics-governance.md`
- `docs/product/PRD.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/product/REQUIREMENTS_TRACEABILITY.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `docs/engineering/ERROR_CATALOG.md`
