# ODRISC Website Page Implementation Tracker

## Purpose

This document tracks each approved page from requirements through publication.

It does not redefine page requirements.

## Status Definitions

| Status                | Meaning                                                   |
| --------------------- | --------------------------------------------------------- |
| Requirements approved | Page specification is approved                            |
| Content drafting      | Copy and supporting evidence are being prepared           |
| Content review        | Product, clinical, legal, or market review is in progress |
| Design                | Page is being designed                                    |
| Development           | Page is being implemented                                 |
| Quality assurance     | Page is being tested                                      |
| Ready for publication | All approval gates are complete                           |
| Published             | Page is publicly available                                |
| Update required       | Published page requires revision                          |
| Retired               | Page has been removed and redirected where appropriate    |

## Tracking Dimensions

The tracker may record the following review and implementation dimensions as the project progresses.

| Dimension             | Tracking fields                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand                 | Brand brief, brand review, accessibility review                                                                                                |
| Design system         | Design-system review, responsive review, RTL review, accessibility review                                                                      |
| Motion                | Motion required, motion specification, reduced-motion review, motion-performance review                                                        |
| Technical stack       | Rendering strategy, Client boundary review, API integration, analytics implementation, performance review, technical-stack review              |
| Architecture          | Page ID mapping, content source, Server rendering review, Client boundary review, integration adapter, cache policy, error-state review        |
| Components            | Component mapping, component specifications complete, Storybook complete, component tests complete, component accessibility review, RTL review |
| Coding standards      | Coding-standards review, typecheck, lint, formatting, security review, code-review status                                                      |
| Testing and release   | Unit tests, component tests, integration tests, E2E tests, accessibility, Arabic and RTL, reduced motion, visual regression, staging QA        |
| Release authorization | Release gate                                                                                                                                   |

## Testing Status Definitions

| Status         | Meaning                                                              |
| -------------- | -------------------------------------------------------------------- |
| Not required   | The test level is not required for the page                          |
| Not started    | Required executable test work has not started                        |
| In progress    | Required implementation or execution is underway                     |
| Pending        | Required review or evidence has not been completed                   |
| Passed         | The applicable test or review has passed                             |
| Failed         | The applicable test or review has failed                             |
| Not applicable | The concern does not apply to the page                               |
| Blocked        | The page cannot pass its release gate because evidence is incomplete |
| Ready          | All applicable release evidence has passed and approval is complete  |

## Tracker

| Page ID    | Route                               | Priority | Product Status confirmed | Content owner    | Clinical review | Legal/privacy review | Design      | Development | QA          | Publication status    | Last updated | Unit tests  | Component tests | Integration tests | E2E tests   | Accessibility | Arabic and RTL | Reduced motion | Visual regression | Staging QA  | Release gate |
| ---------- | ----------------------------------- | -------: | ------------------------ | ---------------- | --------------- | -------------------- | ----------- | ----------- | ----------- | --------------------- | ------------ | ----------- | --------------- | ----------------- | ----------- | ------------- | -------------- | -------------- | ----------------- | ----------- | ------------ |
| SH-PG-001  | `/`                                 |       P0 | Not applicable           | Founder          | Not required    | Pending              | Not started | Not started | Not started | Requirements approved | 2026-07-31   | Not started | Not started     | Not started       | Not started | Pending       | Pending        | Pending        | Pending           | Not started | Blocked      |
| PAT-PG-001 | `/patients/`                        |       P0 | Pending                  | Founder          | Pending         | Pending              | Not started | Not started | Not started | Requirements approved | 2026-07-31   | Not started | Not started     | Not started       | Not started | Pending       | Pending        | Pending        | Pending           | Not started | Blocked      |
| PRO-PG-001 | `/providers/`                       |       P0 | Pending                  | Founder          | Pending         | Pending              | Not started | Not started | Not started | Requirements approved | 2026-07-31   | Not started | Not started     | Not started       | Not started | Pending       | Pending        | Pending        | Pending           | Not started | Blocked      |
| PRO-PG-016 | `/providers/request-demonstration/` |       P0 | Demo workflow pending    | Commercial owner | Not required    | Pending              | Not started | Not started | Not started | Requirements approved | 2026-07-31   | Not started | Not started     | Not started       | Not started | Pending       | Pending        | Pending        | Pending           | Not started | Blocked      |
