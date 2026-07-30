# ADR-001 — Unified Patient and Provider Website

## Status

Approved

## Date

2026-07-23

## Context

ODRISC must serve both patients and healthcare providers while preserving audience-specific messaging, navigation, calls to action, and levels of clinical detail.

The project considered whether to create separate websites or one unified website.

## Decision

ODRISC will operate one unified website through `odrisc.com`.

The website entry experience will ask visitors whether they are a Patient or Healthcare Provider.

Selecting Patient will open the Patient-oriented website journey.

Selecting Provider will open the Provider-oriented website journey.

Both experiences will remain under the same domain and brand and will provide a visible method to switch audiences.

## Rationale

A unified website:

- Maintains one ODRISC brand
- Communicates the relationship between patients and providers
- Avoids duplicated infrastructure and content
- Supports shared design and engineering systems
- Enables audience-specific experiences
- Creates a scalable foundation for international expansion
- Prevents patients and providers from being forced through irrelevant content

## Alternatives Considered

### Separate Patient and Provider Domains

Rejected because it could fragment the brand, duplicate infrastructure, separate two connected sides of the care ecosystem, and increase maintenance complexity.

### One Homepage Without Audience Selection

Rejected because patient and provider needs, terminology, trust requirements, and conversion goals are materially different.

## Consequences

- The information architecture must support two journeys.
- The design system must remain shared.
- Each journey will require distinct navigation and messaging.
- Shared pages must be clearly identified.
- Audience preference and switching behavior must be defined.
- SEO must account for an audience gateway and audience-specific landing pages.
- Analytics must record audience selection and switching.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/AUDIENCE.md`
- `docs/product/WEBSITE_OBJECTIVES.md`
- `docs/product/WEBSITE_STORY.md`
- `docs/project/OPEN_QUESTIONS.md`
