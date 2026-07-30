# ADR-005 — Public Website Product Requirements

## Status

Approved

## Date

2026-07-23

## Context

ODRISC has approved foundational documentation for Product Vision, audiences, website objectives, and website story.

Implementation requires one canonical requirements document that defines the public website scope, functional requirements, non-functional requirements, launch obligations, and acceptance conditions.

Without a PRD, AI coding assistants and human contributors may interpret strategy differently, build unavailable capabilities, omit essential requirements, or confuse the public website with the Patient and Provider applications.

## Decision

`docs/product/PRD.md` will be the canonical Product Requirements Document for the public website at `odrisc.com`.

It will:

- Define the requirements of the public website
- Preserve separate Patient and Provider journeys
- Keep the public website distinct from the complete applications
- Use requirement identifiers for traceability
- Define launch priorities
- Require product-status validation
- Include accessibility, privacy, security, performance, analytics, and SEO requirements
- Define launch-readiness conditions
- Serve as the bridge between strategy, information architecture, design, and engineering

## Consequences

- Website implementation must reference PRD requirement identifiers.
- Information Architecture and page specifications must map to the PRD.
- Public product claims must be checked against Product Status.
- Existing implementation does not override the PRD.
- Material requirement changes require documented approval.
- Patient application, Provider platform, and clinical engines require separate future PRDs.

## Alternatives Considered

### Implement Directly From Website Objectives

Rejected because objectives do not define detailed functionality or acceptance criteria.

### Place Requirements Inside Website Story

Rejected because narrative and product requirements have different responsibilities.

### Use Implementation as the Requirement

Rejected because existing code may be incomplete, outdated, or inconsistent with approved strategy.

### Combine Website and Clinical Platform Requirements

Rejected because it would create an unmanageable document and blur product boundaries.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PRODUCT_VISION.md`
- `docs/product/AUDIENCE.md`
- `docs/product/WEBSITE_OBJECTIVES.md`
- `docs/product/WEBSITE_STORY.md`
- `docs/product/PRD.md`
- `docs/product/PRODUCT_STATUS.md`
- `ai/rules/NON_NEGOTIABLES.md`