# ODRISC Product Capability Status

**Related documents:**

- `docs/product/INFORMATION_ARCHITECTURE.md`

Website storytelling and public capability descriptions must be checked against this register before being implemented.

## Purpose

This document records the approved maturity and public communication status of ODRISC product capabilities.

No capability may be presented publicly without checking this register.

## Approved Company Narrative Claims

The following company-level claims are approved for public use on the About ODRISC page. They
describe company history and product direction; they do not change the availability status of any
capability in the register below.

| Claim                                                                                                                                                                | Public scope                                                                             | Owner   | Last reviewed |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------- | ------------- |
| ODRISC has been building a new approach to pregnancy care since 2019.                                                                                                | About ODRISC company narrative                                                           | Founder | 2026-08-25    |
| The approach brings together proprietary intelligence, connected health data and a maternal-fetal model designed around the evolving health of both mother and baby. | About ODRISC product-direction narrative; must not imply general capability availability | Founder | 2026-08-25    |

## Status Definitions

| Status                 | Meaning                                                             |
| ---------------------- | ------------------------------------------------------------------- |
| Available              | Implemented and approved for normal use                             |
| Limited availability   | Implemented but restricted to selected users, markets, or workflows |
| Pilot                  | Used in a controlled pilot                                          |
| In validation          | Implemented or partially implemented and undergoing validation      |
| In development         | Actively being built and not approved for general use               |
| Planned                | Approved for future development but not currently being built       |
| Future roadmap         | Conceptual long-term direction                                      |
| Not publicly announced | Internal capability or plan that must not be communicated publicly  |

## Capability Register

| Capability                       | Patient status | Provider status | Public communication        | Market         | Owner   | Last reviewed |
| -------------------------------- | -------------- | --------------- | --------------------------- | -------------- | ------- | ------------- |
| GDM Risk Assessment              | Available      | Not applicable  | Public                      | India / Qatar  | Founder | 2026-08-23    |
| Weight Monitoring Tool           | Available      | Not applicable  | Public                      | India / Qatar  | Founder | 2026-08-23    |
| Medical Nutrition Therapy        | Available      | Not applicable  | Public                      | India / Qatar  | Founder | 2026-08-23    |
| Physical Activity Training       | Available      | Not applicable  | Public                      | India / Qatar  | Founder | 2026-08-23    |
| Gold Membership Plan             | Available      | Not applicable  | Public                      | India / Qatar  | Founder | 2026-08-22    |
| Platinum Membership Plan         | Available      | Not applicable  | Public                      | India / Qatar  | Founder | 2026-08-23    |
| Expert Coaching and Text Support | Available      | Not applicable  | Public                      | India / Qatar  | Founder | 2026-08-23    |
| Maternal Intelligence            | In development | In development  | Restricted                  | Future markets | Founder | 2026-07-23    |
| Fetal Growth Intelligence        | In development | In development  | Restricted                  | Future markets | Founder | 2026-07-23    |
| Ultrasound OCR                   | Planned        | Planned         | Do not present as available | Future markets | CTO     | 2026-07-23    |
| Provider Dashboard               | To confirm     | In development  | Restricted                  | Qatar          | Founder | 2026-07-23    |
| Hospital FHIR Integration        | Not applicable | Future roadmap  | Roadmap only                | GCC            | CTO     | 2026-07-23    |

## Provider review build clarification — 14 September 2026

The founder authorized a fictional fetal-growth demonstration and Doppler/staging context within the fetal-growth website page. This records demonstration scope, not general availability or validation. The existing maturity register remains unchanged. Report extraction remains Planned. Clinician authentication will use the existing application; repository/API and clinician destinations will be provided later. See [Provider review build](../project/PROVIDER_REVIEW_BUILD.md) for source verification gaps and publication dependencies.

## Two-case review demonstration — 23 September 2026

The founder authorized the supplied synthetic Meera/Anaya homepage demonstration and moving the existing homepage to Platform. Registry v3.1 records zero production-enabled clinical lookups and zero enabled numerical utilities. Demo calculations, simulated report verification and fictional clinician assessments do not change the capability register. The page remains English-only and noindex. Source explanations remain non-authoritative demonstration fixtures; real OCR, authentication and clinical methods are not activated. See [implementation contract](../project/CLINICAL_LOOKUP_HOMEPAGE.md).
