# ADR-003 — Public Website Objectives and Governance

## Status

Approved

## Date

2026-07-23

## Context

ODRISC is developing one public website for two primary audiences:

- Patients
- Healthcare providers

The website must communicate a connected maternal and fetal intelligence platform while providing different levels of language, clinical depth, trust, navigation, and conversion for each audience.

Without documented website objectives, individual pages could become disconnected marketing surfaces, Patient and Provider messaging could be mixed, roadmap capabilities could be presented as available, and website implementation could proceed without consistent clinical, privacy, accessibility, or conversion requirements.

## Decision

The ODRISC public website will be governed by the objectives defined in:

`docs/product/WEBSITE_OBJECTIVES.md`

The website will function as a structured product-communication system that supports:

- Immediate understanding
- Audience relevance
- Trust- Education
- Product evaluation
- Responsible conversion
- Clinical safety
- Accessibility
- Localization
- Privacy
- Performance
- Market readiness
- Controlled website governance

Every significant public page must define:

1. Primary audience
2. Primary objective
3. Primary call to action
4. Product capability dependency
5. Product-status dependency
6. Clinical boundary
7. Market and language context
8. Content owner
9. Review owner
10. Measurement requirement

## Audience Structure

The public website will provide two primary audience pathways:

- Patient
- Healthcare Provider

The website will remain within one domain:

`odrisc.com`

Visitors must be able to switch between the Patient and Provider journeys.

Investors, media, careers, employers, insurers, researchers, and general partners will not be added as primary gateway choices.

## Product Communication

The website will position ODRISC as:

> A maternal and fetal intelligence platform that transforms fragmented pregnancy information into longitudinal understanding.

The website will explain the platform before presenting individual product capabilities.

Product capabilities will be represented as connected parts of one ODRISC ecosystem.

All capability claims must align with:

`docs/product/PRODUCT_STATUS.md`

## Clinical Boundaries

The website will communicate that ODRISC:

- Supports Patients
- Supports healthcare providers
- Supports monitoring
- Supports longitudinal review
- Supports clinical conversations
- May provide explainable clinical decision support

The website will not imply that ODRISC:

- Replaces healthcare professionals
- Provides autonomous diagnosis
- Provides autonomous treatment
- Replaces clinical testing
- Replaces ultrasound interpretation
- Replaces emergency services
- Guarantees prevention, detection, or improved outcomes

## Patient Experience

The Patient journey will prioritize:

- Understanding
- Preparation
- Risk awareness
- Weight monitoring
- Nutrition
- Physical activity
- Maternal and fetal progress
- Informed participation
- Communication with healthcare professionals

Patient communication must remain:

- Clear- Supportive
- Non-judgmental
- Non-alarmist
- Free from weight stigma
- Clinically bounded

## Provider Experience

The Provider journey will prioritize:

- Clinical relevance
- Longitudinal monitoring
- Maternal intelligence
- Fetal growth intelligence
- Explainable clinical logic
- Workflow fit
- Validation
- Implementation
- Professional adoption

Provider communication must remain:

- Precise
- Transparent
- Evidence-conscious
- Clinically credible
- Workflow-oriented
- Respectful of professional judgment

## Conversion

Each significant page will have:

- One primary call to action
- No more than two meaningful secondary calls to action

Conversion must not use:

- Fear
- False urgency
- Artificial scarcity
- Unsupported health warnings
- Deceptive interface patterns
- Unnecessary data collection

## Accessibility

The website will be designed and implemented toward:

`WCAG 2.2 Level AA`

Accessibility will be included during:

- Content development
- Design
- Component development
- Animation
- Forms
- Testing
- Launch review

## Privacy and Data Collection

Public website data collection will follow data-minimization principles.

Marketing forms will remain separate from sensitive clinical workflows.

Public website analytics must not record individual clinical values, pregnancy details, risk answers, or other sensitive health information unless explicitly approved through a secure product workflow.

## Localization and Markets

English is the foundational website language.

The architecture must support future Arabic localization for Qatar, including:

- Right-to-left layouts
- Arabic typography
- Localized forms
- Localized metadata
- Human-reviewed clinical language

Market-specific pages may be published only when product availability, legal context, privacy context, language, pricing, and support pathways are approved.

## Governance

Website decisions will follow this authority order:

1. `PROJECT_CONTEXT.md`
2. `docs/project/SOURCE_OF_TRUTH.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_OBJECTIVES.md`
6. `docs/product/PRODUCT_STATUS.md`
7. Approved Architecture Decision Records
8. Approved design, content, SEO, and engineering documents
9. Current implementation
10. Temporary prompts and prototypes

Material changes to website objectives require explicit approval and an updated decision record.

## Rationale

This decision:

- Creates one consistent purpose for the website
- Protects the distinction between Patient and Provider journeys
- Preserves one ODRISC product identity
- Prevents unsupported public product claims
- Establishes clinical communication boundaries
- Provides measurable website outcomes
- Includes accessibility and privacy from the beginning
- Supports Qatar and future GCC market readiness
- Enables consistent implementation by developers and AI coding agents
- Prevents website development from depending on chat history

## Consequences

- Website pages cannot be created without a defined audience and objective.
- Calls to action must be deliberately assigned.
- Product status must be checked before publication.
- Clinical claims require appropriate review.
- Patient and Provider content must be developed separately where their needs differ.
- Public forms and analytics require privacy review.
- Accessibility must be tested before launch.
- Market-specific pages require formal readiness approval.
- Website content and implementation must remain aligned with documentation.
- A page registry, analytics specification, and information architecture will be required before full implementation.

## Alternatives Considered

### Single Generic Homepage for All Audiences

Rejected because Patients and healthcare providers have different knowledge, trust, language, and conversion requirements.

### Separate Patient and Provider Websites

Rejected because both audiences belong to one connected ODRISC platform and should remain under one brand and domain.

### Feature-Led Website

Rejected because feature lists do not adequately explain the clinical problem, longitudinal value, or Patient-Provider relationship.

### AI-Led Website Positioning

Rejected because artificial intelligence is an enabling capability and must not replace the maternal and fetal intelligence product identity.

### Immediate Development Without Website Objectives

Rejected because implementation without objectives would produce inconsistent pages, unclear conversion, unsupported claims, and avoidable rebuilding.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/project/SOURCE_OF_TRUTH.md`
- `docs/product/PRODUCT_VISION.md`
- `docs/product/AUDIENCE.md`
- `docs/product/WEBSITE_OBJECTIVES.md`
- `docs/product/PRODUCT_STATUS.md`
- `docs/project/GLOSSARY.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/decisions/ADR-001-unified-patient-provider-website.md`- `ai/decisions/ADR-002-product-vision-and-platform-identity.md`
