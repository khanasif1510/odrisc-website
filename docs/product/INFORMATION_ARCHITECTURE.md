# ODRISC Website Information Architecture

## Document Status

**Document:** Website Information Architecture
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical website structure and navigation model
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Approval authority:** Founder with designated product, clinical, content, design, SEO, and engineering reviewers

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/project/SOURCE_OF_TRUTH.md`
- `docs/project/ASSUMPTIONS.md`
- `docs/project/OPEN_QUESTIONS.md`
- `docs/project/GLOSSARY.md`
- `docs/product/PRODUCT_VISION.md`
- `docs/product/AUDIENCE.md`
- `docs/product/WEBSITE_OBJECTIVES.md`
- `docs/product/WEBSITE_STORY.md`
- `docs/product/PRD.md`
- `docs/product/PRODUCT_STATUS.md`
- `docs/product/INFORMATION_ARCHITECTURE.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/product/REQUIREMENTS_TRACEABILITY.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/content/STORY_TO_PAGE_MATRIX.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

The Patient and Provider route families may differ in language, content depth, navigation, and visual emphasis, but they must remain part of one ODRISC brand as defined in `docs/design/BRAND_FOUNDATION.md`.

---

# 1. Purpose

This document defines the canonical information architecture for the public ODRISC website at:

`odrisc.com`

It translates the approved Product Vision, Audience framework, Website Objectives, Website Story, Product Requirements Document, and Product Status model into a structured website system.

It defines:

- The website hierarchy
- The sitemap
- The URL model
- The shared audience gateway
- Patient navigation
- Provider navigation
- Shared pages
- Institutional pathways
- Resource taxonomy
- Audience-switching behavior
- Cross-audience relationships
- Breadcrumbs
- Footer architecture
- Search behavior
- Localization readiness
- Page hierarchy
- Content discoverability
- Redirect and canonicalization principles
- Route governance
- Information-architecture acceptance criteria

This document defines where website information belongs and how visitors move through it.

It does not define:

- Final page copy
- Final page layouts
- Final component design
- Final visual design
- Detailed clinical-platform application navigation
- Patient application navigation
- Provider-dashboard navigation
- Hospital-administration navigation
- Internal software architecture

The canonical sitemap, URL model, audience-routing rules, navigation hierarchy, shared-page structure, resource taxonomy, and localization-ready route architecture are defined in:

`docs/product/INFORMATION_ARCHITECTURE.md`

Detailed page requirements are defined in:

`docs/product/PAGE_REQUIREMENTS.md`

Every canonical route must map to a stable Page ID in `docs/product/PAGE_REQUIREMENTS.md`. A route may not progress to design or implementation until its page specification is approved.

---

# 2. Information Architecture Objective

The ODRISC information architecture must help each visitor answer five questions:

1. Is ODRISC relevant to me?
2. Which ODRISC experience should I enter?
3. What problem does ODRISC address?
4. How does ODRISC support someone like me?
5. What is the next appropriate action?

The architecture must support two primary journeys without creating two unrelated websites.

The intended structure is:

```text
One domain
↓
One ODRISC brand
↓
One shared pregnancy-care story
↓
Two audience-specific journeys
↓
Patient-specific and Provider-specific information
↓
Shared company, resource, legal, and trust content
↓
Audience-appropriate conversion
```

---

# 3. Core Architecture Principles

## 3.1 One Domain

All primary public experiences must remain within:

`odrisc.com`

Separate Patient and Provider domains must not be created without an approved architecture decision.

## 3.2 One Brand

The Patient and Provider journeys must remain visibly connected through:

- One ODRISC identity
- One design system
- One product vision
- One company story
- One shared clinical philosophy
- One common source of truth

## 3.3 Two Complete Journeys

Patients and healthcare providers are equal primary audiences.

Each must receive:

- A dedicated homepage
- Audience-specific navigation
- Audience-specific terminology
- Audience-specific proof
- Audience-specific calls to action
- Appropriate content depth
- Relevant trust information

## 3.4 Shared Entry, Not a Permanent Barrier

The shared audience gateway should help visitors select the appropriate experience.

It must not prevent:

- Direct search-engine access
- Deep linking
- Sharing specific pages
- Access to shared pages
- Switching audiences
- Returning to the shared entry

## 3.5 Story-Led Hierarchy

Page hierarchy must follow the Website Story.

The structure should move visitors from:

```text
Recognition
→
Problem understanding
→
ODRISC relevance
→
Capability understanding
→
Trust
→
Action
```

The website must not be organized only around internal product features.

## 3.6 User Language Before Internal Language

Navigation labels must reflect what visitors understand.

Internal terminology may appear within appropriate page content, but navigation should not rely on unexplained clinical or engineering terms.

## 3.7 Product-Status Awareness

A page may only be published when:

- Its purpose is approved
- Its product claims are approved
- Its product-status dependencies are confirmed
- Its CTA destination exists
- Its content owner is identified

## 3.8 One Canonical Location Per Topic

Every major topic should have one canonical page.

The website must avoid creating multiple indexable pages that answer the same search intent with substantially duplicated content.

## 3.9 Progressive Disclosure

Visitors should receive:

1. Essential meaning
2. Relevant explanation
3. Supporting evidence
4. Optional technical or clinical depth

## 3.10 Localization Readiness

The logical page hierarchy must support future:

- English
- Arabic
- Additional GCC languages
- India-specific content
- Qatar-specific content
- Market-specific pricing
- Market-specific legal content
- Right-to-left presentation

Localization must not require rebuilding the website hierarchy.

---

# 4. Architectural Model

The ODRISC public website will use five architectural zones.

```text
Zone 1 — Shared Entry
Zone 2 — Patient Experience
Zone 3 — Provider Experience
Zone 4 — Shared Company and Resource Experience
Zone 5 — Legal, Privacy, Accessibility, and Utility Experience
```

## 4.1 Zone One — Shared Entry

The shared entry introduces ODRISC and routes visitors toward:

- Patient
- Healthcare Provider

## 4.2 Zone Two — Patient Experience

The Patient experience helps women:

- Understand ODRISC
- Explore relevance
- Understand available support
- Learn about risk, weight, nutrition, physical activity, and monitoring
- Access Patient resources
- Take the approved Patient action

## 4.3 Zone Three — Provider Experience

The Provider experience helps healthcare professionals:

- Understand the clinical problem
- Explore monitoring and intelligence capabilities
- Review workflow
- Review methodology and validation
- Explore hospital or institutional use
- Take the approved Provider action

## 4.4 Zone Four — Shared Company and Resources

Shared pages explain:

- ODRISC
- Mission
- Founder and team
- Resources
- Partnerships
- Contact pathways
- Company information

## 4.5 Zone Five — Legal and Utility

This zone includes:

- Privacy
- Terms
- Cookies
- Accessibility
- Error pages
- Search
- Sitemap
- Consent-management interfaces
- Platform login routes where approved

---

# 5. Canonical Top-Level Sitemap

The logical top-level sitemap is:

```text
/
│
├── patients/
│   ├── how-odrisc-helps/
│   ├── preparing-for-pregnancy/
│   ├── during-pregnancy/
│   ├── risk-awareness/
│   ├── weight-monitoring/
│   ├── nutrition/
│   ├── physical-activity/
│   ├── maternal-and-fetal-progress/
│   ├── membership/
│   ├── frequently-asked-questions/
│   └── start/
│
├── providers/
│   ├── clinical-platform/
│   ├── monitoring/
│   ├── intelligence/
│   │   ├── maternal-intelligence/
│   │   └── fetal-growth-intelligence/
│   ├── workflow/
│   ├── validation/
│   ├── methodology/
│   ├── insights/
│   ├── hospitals-and-health-systems/
│   ├── fertility-and-ivf-centers/
│   ├── multidisciplinary-care/
│   ├── security-and-privacy/
│   ├── frequently-asked-questions/
│   ├── request-demonstration/
│   └── discuss-pilot/
│
├── resources/
│   ├── patients/
│   ├── providers/
│   ├── topics/
│   ├── glossary/
│   └── [resource-slug]/
│
├── about/
│   ├── our-story/
│   ├── team/
│   ├── clinical-and-professional-contributors/
│   ├── partnerships/
│   └── careers/
│
├── contact/
│
├── privacy/
├── terms/
├── cookies/
├── accessibility/
│
├── search/
├── login/
│
├── sitemap.xml
├── robots.txt
├── 404
└── 500
```

This sitemap represents the intended logical hierarchy.

Not every route must be published at initial launch.

Publication depends on:

- Launch scope
- Product Status
- Approved content
- Available CTA destination
- Market readiness
- Clinical review
- Legal review

---

# 6. URL Architecture

## 6.1 URL Principles

URLs must be:

- Descriptive
- Human-readable
- Lowercase
- Hyphen-separated
- Stable
- Audience-aware
- Free of implementation-specific file extensions
- Free of unnecessary query parameters
- Suitable for search engines
- Suitable for localization

## 6.2 Audience Prefixes

Patient content must use:

```text
/patients/
```

Provider content must use:

```text
/providers/
```

These audience prefixes create:

- Clear ownership
- Clear navigation context
- Search-intent separation
- Analytics segmentation
- Easier localization
- Easier content governance

## 6.3 Shared Content

Shared company, resource, legal, and utility pages should not be placed under Patient or Provider prefixes unless the page is genuinely audience-specific.

Examples:

```text
/about/
/resources/
/contact/
/privacy/
```

## 6.4 Singular Versus Plural

The canonical audience route labels are:

```text
/patients/
/providers/
```

The plural form represents an audience environment rather than one individual user.

Navigation labels may still display:

- Patient
- Healthcare Provider

## 6.5 URL Depth

Most public pages should remain within three meaningful URL levels.

Preferred:

```text
/providers/intelligence/fetal-growth-intelligence/
```

Avoid unnecessary depth such as:

```text
/providers/platform/intelligence/modules/fetal/growth/overview/
```

## 6.6 URL Stability

Published URLs must not change because:

- A navigation label changes
- A visual design changes
- A section moves within a page
- A team preference changes
- A temporary campaign ends

A route should change only when its meaning or canonical ownership changes.

## 6.7 Trailing Slash Policy

The engineering implementation must use one consistent trailing-slash policy.

The preferred documentation format is:

```text
/patients/weight-monitoring/
```

The final technical behavior must be documented in Engineering Architecture and enforced through redirects.

## 6.8 Query Parameters

Query parameters may be used for:

- Campaign attribution
- Non-indexable filtering
- Search
- Temporary interface state

Query parameters must not create competing canonical page versions.

## 6.9 Fragment Identifiers

Section links may use stable fragment identifiers:

```text
/providers/validation/#clinical-review
```

Fragment identifiers should be meaningful and should not depend on visual layout order.

---

# 7. Shared Entry Experience

## 7.1 Canonical Route

```text
/
```

## 7.2 Primary Purpose

The shared entry must:

- Establish the ODRISC premise
- Communicate one unified product identity
- Introduce the shared pregnancy story
- Route visitors to the appropriate audience journey
- Allow audience switching
- Preserve access to shared company and legal content

## 7.3 Required Content

The entry should contain:

1. ODRISC identity
2. Foundational story statement
3. Brief explanation
4. Patient selection
5. Healthcare Provider selection
6. Audience-switch reassurance
7. Access to shared navigation or footer
8. Appropriate legal and privacy access

## 7.4 Recommended Narrative

The shared entry may communicate:

> Every Pregnancy Has a Story.

> ODRISC helps patients and healthcare professionals understand how that story is evolving over time.

## 7.5 Gateway Behavior

The gateway must not:

- Require registration
- Require a health questionnaire
- Prevent direct access to deep links
- Force visitors to accept marketing tracking
- Treat institutional visitors as a third primary audience
- Create separate Patient and Provider brands

## 7.6 Search-Engine Behavior

The root page may be indexable as the primary ODRISC brand page.

Patient and Provider homepages must also be independently indexable.

## 7.7 Returning Visitors

When an audience preference has previously been selected, the website may:

- Highlight the previous selection
- Offer a “Continue as Patient” or “Continue as Healthcare Provider” action
- Preserve audience context in navigation

The website should not automatically redirect visitors away from the root without an approved decision.

---

# 8. Patient Information Architecture

## 8.1 Patient Homepage

### Canonical Route

```text
/patients/
```

### Purpose

The Patient homepage must help a woman understand:

- Whether ODRISC is relevant to her
- What problem it addresses
- How it may support her
- Which capabilities are available
- The role of her healthcare professional
- The next approved action

### Story Position

```text
Uncertainty
→
Recognition
→
Understanding
→
Trust
→
Participation
→
Appropriate action
```

### Primary Child Routes

- How ODRISC Helps
- Preparing for Pregnancy
- During Pregnancy
- Risk Awareness
- Weight Monitoring
- Nutrition
- Physical Activity
- Maternal and Fetal Progress
- Membership
- Patient FAQs
- Start

---

## 8.2 How ODRISC Helps

### Canonical Route

```text
/patients/how-odrisc-helps/
```

### Purpose

Provide a simple Patient-level explanation of:

- Fragmented pregnancy information
- Longitudinal monitoring
- Patient participation
- Patient-Provider collaboration
- ODRISC boundaries

This page should act as the Patient product overview.

---

## 8.3 Preparing for Pregnancy

### Canonical Route

```text
/patients/preparing-for-pregnancy/
```

### Purpose

Support women who are:

- Planning pregnancy
- Preparing before conception
- Managing PCOS
- Preparing for IVF
- Reviewing metabolic risk
- Working toward a healthier starting point

### Potential Child Pathways

These should be created only when sufficient approved content exists:

```text
/patients/preparing-for-pregnancy/pcos/
/patients/preparing-for-pregnancy/ivf-readiness/
/patients/preparing-for-pregnancy/weight-and-metabolic-health/
```

Future readiness tools must not be represented as available unless approved in Product Status.

---

## 8.4 During Pregnancy

### Canonical Route

```text
/patients/during-pregnancy/
```

### Purpose

Provide a Patient-oriented pregnancy overview connecting:

- Trimester progression
- Weight
- Nutrition
- Physical activity
- Maternal progress
- Fetal progress
- Appointments
- Professional monitoring

This page should route visitors toward relevant Patient capabilities without becoming a generic pregnancy-content hub.

---

## 8.5 Risk Awareness

### Canonical Route

```text
/patients/risk-awareness/
```

### Purpose

Explain:

- What pregnancy risk means
- Why early awareness may matter
- The difference between risk and diagnosis
- Relevant risk factors
- How ODRISC risk assessment may support discussion
- Why clinical testing remains important

### Conditional Conversion

A risk-assessment CTA may appear only when public use is approved.

---

## 8.6 Weight Monitoring

### Canonical Route

```text
/patients/weight-monitoring/
```

### Purpose

Explain:

- Preconception weight monitoring
- Gestational weight progression
- Longitudinal change
- Appropriate targets
- Professional context
- Non-stigmatizing support

The page must not be positioned as a general weight-loss page.

---

## 8.7 Nutrition

### Canonical Route

```text
/patients/nutrition/
```

### Purpose

Explain:

- Medical Nutrition Therapy
- Pregnancy-stage considerations
- Personalized or structured plans where available
- Professional involvement
- Regional and dietary adaptation
- Clinical boundaries

---

## 8.8 Physical Activity

### Canonical Route

```text
/patients/physical-activity/
```

### Purpose

Explain:

- Trimester-appropriate movement
- Physical Activity Training
- Safety
- Professional involvement
- Contraindications
- Patient participation

---

## 8.9 Maternal and Fetal Progress

### Canonical Route

```text
/patients/maternal-and-fetal-progress/
```

### Purpose

Explain in accessible language:

- The pregnancy timeline
- Maternal progression
- Fetal growth progression
- Why multiple measurements matter
- How summaries may support appointments
- Why clinical interpretation remains necessary

Advanced clinical terminology should be hidden behind progressive disclosure.

---

## 8.10 Membership

### Canonical Route

```text
/patients/membership/
```

### Purpose

Explain approved Patient plans when public commercial access is active.

The page may include:

- Plans
- Services
- Duration
- Market
- Price
- Taxes
- Professional support
- Limitations
- Terms

The page must not be published with outdated or unapproved pricing.

---

## 8.11 Patient FAQs

### Canonical Route

```text
/patients/frequently-asked-questions/
```

### Purpose

Answer Patient questions concerning:

- Clinical boundaries
- Safety
- Privacy
- Availability
- Risk assessment
- Monitoring
- Professional involvement
- Pricing
- Application access
- Market availability

---

## 8.12 Patient Start Route

### Canonical Route

```text
/patients/start/
```

### Purpose

Act as a controlled conversion handoff.

The route may direct toward:

- Risk assessment
- Patient application
- Registration
- Membership
- Monitoring
- Approved waiting list

This route must not exist as an empty CTA destination.

Its behavior must be defined in Page Requirements and Product Status.

---

# 9. Provider Information Architecture

## 9.1 Provider Homepage

### Canonical Route

```text
/providers/
```

### Purpose

The Provider homepage must establish:

- The clinical fragmentation problem
- The need for longitudinal review
- ODRISC platform relevance
- Maternal and fetal intelligence
- Workflow support
- Validation and methodology pathways
- The approved professional next action

### Story Position

```text
Clinical relevance
→
Platform understanding
→
Methodology
→
Workflow fit
→
Evidence
→
Trust
→
Adoption action
```

---

## 9.2 Clinical Platform

### Canonical Route

```text
/providers/clinical-platform/
```

### Purpose

Provide the main Provider-level platform overview.

It should connect:

- Clinical data
- Patient-reported information
- Maternal monitoring
- Fetal growth
- Longitudinal intelligence
- Collaboration
- Workflow
- Implementation direction

The page must not be an unordered feature list.

---

## 9.3 Monitoring

### Canonical Route

```text
/providers/monitoring/
```

### Purpose

Explain how ODRISC may support:

- Longitudinal review
- Selected Patient monitoring
- Maternal progression
- Fetal progression
- Patient-entered information
- Alerts where approved
- Review between consultations
- Prioritization

Real-time monitoring must not be implied unless operationally implemented.

---

## 9.4 Intelligence Hub

### Canonical Route

```text
/providers/intelligence/
```

### Purpose

Explain the overall intelligence model connecting:

- Maternal context
- Fetal growth
- Trends
- Velocity
- Variation
- Emerging deviation
- Explainable summaries
- Clinical decision support

This page serves as the parent of:

- Maternal Intelligence
- Fetal Growth Intelligence

---

## 9.5 Maternal Intelligence

### Canonical Route

```text
/providers/intelligence/maternal-intelligence/
```

### Purpose

Explain the intended connection among:

- Maternal history
- Risk
- Weight
- Symptoms
- Laboratory information
- Metabolic context
- Pregnancy stage
- Patient-reported information

The page must distinguish:

- Available functionality
- Pilot functionality
- In-development functionality
- Future roadmap

---

## 9.6 Fetal Growth Intelligence

### Canonical Route

```text
/providers/intelligence/fetal-growth-intelligence/
```

### Purpose

Explain:

- Gestational-age anchoring
- Longitudinal scan comparison
- Fetal biometry
- Estimated fetal weight
- Percentiles and z-scores
- Growth velocity
- Centile movement
- Customized growth context
- Doppler context
- Fetal-growth-restriction monitoring support

The page must preserve clinical interpretation and avoid autonomous-diagnosis language.

---

## 9.7 Workflow

### Canonical Route

```text
/providers/workflow/
```

### Purpose

Show how ODRISC may fit into care delivery.

The page should identify:

- Patient onboarding
- Data entry or import
- Provider review
- Summary generation
- Clinical interpretation
- Follow-up
- Escalation responsibilities
- Multidisciplinary collaboration

Current and future workflows must be distinguished.

---

## 9.8 Validation

### Canonical Route

```text
/providers/validation/
```

### Purpose

Provide transparent information concerning:

- Clinical input
- Expert review
- Pilot activity
- Technical evaluation
- Usability testing
- Clinical validation
- Regulatory status
- Limitations
- Future validation plans

The page must not combine all forms of validation into one unsupported claim.

---

## 9.9 Methodology

### Canonical Route

```text
/providers/methodology/
```

### Purpose

Explain publicly approved methodology concerning:

- Clinical frameworks
- Data processing
- Calculation categories
- Explainability
- Human review
- Standards
- Versioning
- Limitations

The page must not expose restricted intellectual property.

---

## 9.10 Insights

### Canonical Route

```text
/providers/insights/
```

### Purpose

Provide an entry point to Provider-oriented:

- Clinical articles
- Methodology notes
- Evidence summaries
- Research updates
- Product insights
- Implementation insights
- Maternal-health analysis
- Fetal-growth analysis

This page should primarily organize Provider resources rather than duplicate the main Resources library.

---

## 9.11 Hospitals and Health Systems

### Canonical Route

```text
/providers/hospitals-and-health-systems/
```

### Purpose

Explain institutional value concerning:

- Implementation
- Governance
- Security
- Role-based access
- Cohort visibility
- Training
- Support
- Integration direction
- Scalability
- Commercial conversation

The page must not imply enterprise readiness beyond approved status.

---

## 9.12 Fertility and IVF Centers

### Canonical Route

```text
/providers/fertility-and-ivf-centers/
```

### Purpose

Explain relevance to:

- Preconception support
- IVF preparation
- Metabolic risk
- Gestational-age anchoring
- Continuity into pregnancy
- Patient engagement
- Center collaboration

This page should only be launched when its commercial and product pathway is approved.

---

## 9.13 Multidisciplinary Care

### Canonical Route

```text
/providers/multidisciplinary-care/
```

### Purpose

Explain collaboration among:

- Obstetricians
- Maternal-fetal medicine specialists
- Nutrition professionals
- Women's health physiotherapists
- Nurses
- Midwives
- Diabetes educators
- Care coordinators

The page should show role relationships without implying that all roles use identical interfaces.

---

## 9.14 Security and Privacy

### Canonical Route

```text
/providers/security-and-privacy/
```

### Purpose

Explain approved security and privacy information relevant to professional and institutional evaluation.

The page may address:

- Data handling
- Access controls
- Consent
- Hosting
- Auditability
- Privacy principles
- Security governance
- Future compliance direction

Only implemented or explicitly planned controls may be described.

---

## 9.15 Provider FAQs

### Canonical Route

```text
/providers/frequently-asked-questions/
```

### Purpose

Answer professional questions concerning:

- Product role
- Clinical judgment
- Validation
- Methodology
- Workflow
- Privacy
- Security
- Integration
- Pilot availability
- Demonstrations
- Pricing
- Market availability

---

## 9.16 Request Demonstration

### Canonical Route

```text
/providers/request-demonstration/
```

### Purpose

Provide a high-intent professional conversion route.

The page must:

- Explain what will be demonstrated
- Identify suitable visitors
- Collect only necessary information
- Explain what happens next
- Avoid collecting patient medical data
- Route the enquiry to an approved owner

---

## 9.17 Discuss Pilot

### Canonical Route

```text
/providers/discuss-pilot/
```

### Purpose

Support controlled pilot enquiries where pilots are available.

The page must not imply:

- Automatic acceptance
- General availability
- Completed validation
- Guaranteed implementation

---

# 10. Shared Resources Architecture

## 10.1 Resources Homepage

### Canonical Route

```text
/resources/
```

### Purpose

Provide one shared content library with clear Patient and Provider filtering.

The page must not present all resources as appropriate for all visitors.

## 10.2 Patient Resources

### Canonical Route

```text
/resources/patients/
```

Potential content:

- Patient guides
- Pregnancy preparation
- Risk awareness
- Weight
- Nutrition
- Physical activity
- Understanding reports
- Appointment preparation
- FAQs

## 10.3 Provider Resources

### Canonical Route

```text
/resources/providers/
```

Potential content:

- Clinical insights
- Methodology notes
- Evidence summaries
- Workflow guidance
- Validation updates
- Implementation materials
- Clinical briefs

## 10.4 Glossary

### Canonical Route

```text
/resources/glossary/
```

The public glossary should contain visitor-appropriate definitions.

It is separate from the internal repository glossary:

`docs/project/GLOSSARY.md`

The internal glossary governs terminology.

The public glossary explains selected terms to visitors.

## 10.5 Topic Hubs

### Canonical Pattern

```text
/resources/topics/[topic-slug]/
```

Potential approved topics include:

- Gestational diabetes
- Gestational weight gain
- Preconception health
- PCOS
- IVF and assisted reproduction
- Pregnancy nutrition
- Pregnancy physical activity
- Maternal monitoring
- Fetal growth
- Doppler
- Patient-Provider collaboration

Topic hubs should only be created when sufficient unique content exists.

## 10.6 Individual Resource URLs

Preferred pattern:

```text
/resources/[resource-slug]/
```

Avoid date-based URLs unless publication date is essential to the content identity.

Preferred:

```text
/resources/understanding-fetal-growth-percentiles/
```

Avoid:

```text
/resources/2026/07/understanding-fetal-growth-percentiles/
```

---

# 11. Resource Taxonomy

Every resource should contain structured metadata.

## 11.1 Required Metadata

- Title
- Slug
- Summary
- Intended audience
- Content type
- Topic
- Author
- Clinical reviewer where required
- Publication date
- Last reviewed date
- Market applicability
- Language
- Status
- References
- Related product pages
- Related resources

## 11.2 Audience Taxonomy

Allowed values:

- Patient
- Provider
- Shared
- Institutional

A resource may have more than one audience only when its content is genuinely appropriate to each.

## 11.3 Content Types

Allowed content types may include:

- Article
- Guide
- Clinical brief
- Methodology note
- Evidence summary
- FAQ
- Glossary entry
- Product update
- Validation update
- Implementation guide
- Founder perspective
- Case study
- Downloadable overview

## 11.4 Journey-Stage Taxonomy

Patient resources may be categorized by:

- Preconception
- IVF preparation
- First trimester
- Second trimester
- Third trimester
- Postpartum roadmap

Provider resources may be categorized by:

- Evaluation
- Monitoring
- Maternal intelligence
- Fetal growth
- Validation
- Implementation
- Enterprise
- Research

## 11.5 Market Taxonomy

Allowed market labels may include:

- Global
- India
- Qatar
- GCC
- UAE
- Saudi Arabia
- Kuwait
- Bahrain
- Oman

A market label must reflect the actual applicability of the content.

## 11.6 Content Status

Allowed resource statuses:

- Draft
- In review
- Approved
- Published
- Update required
- Archived

Draft or restricted content must not be publicly indexable.

---

# 12. Shared Company Architecture

## 12.1 About

### Canonical Route

```text
/about/
```

### Purpose

Explain:

- Why ODRISC exists
- Mission
- Product direction
- Patient and Provider connection
- Company identity

## 12.2 Our Story

### Canonical Route

```text
/about/our-story/
```

### Purpose

Present the founder motivation and company origin within approved boundaries.

The founder story must not serve as clinical evidence.

## 12.3 Team

### Canonical Route

```text
/about/team/
```

### Purpose

Present approved current team members, roles, and relevant expertise.

## 12.4 Clinical and Professional Contributors

### Canonical Route

```text
/about/clinical-and-professional-contributors/
```

### Purpose

Present approved:

- Clinical advisers
- Panel members
- Professional contributors
- Reviewers
- Collaborators

Interest, informal discussion, and unconfirmed involvement must not be presented as formal participation.

## 12.5 Partnerships

### Canonical Route

```text
/about/partnerships/
```

### Purpose

Present verified partnerships, programs, or collaboration pathways.

## 12.6 Careers

### Canonical Route

```text
/about/careers/
```

### Purpose

Provide employment information when active opportunities exist.

If no roles are open, the page may explain the company and invite appropriate expressions of interest only when operationally manageable.

---

# 13. Contact Architecture

## 13.1 General Contact

### Canonical Route

```text
/contact/
```

### Purpose

Route visitors toward appropriate contact categories without requesting sensitive health information.

Potential contact categories:

- General enquiry
- Patient support
- Healthcare Provider enquiry
- Hospital or institutional enquiry
- Partnership
- Media
- Careers
- Privacy
- Security

## 13.2 Contact Routing

The contact experience should route:

```text
Patient product or support issue
→ Approved Patient support destination

Provider evaluation
→ Request demonstration or professional enquiry

Hospital or institution
→ Institutional enquiry

Partnership
→ Partnership contact

Privacy or data request
→ Privacy contact

Security concern
→ Security contact
```

## 13.3 Medical Safety Boundary

The Contact page must state that it is not an emergency or clinical-consultation service.

---

# 14. Legal and Trust Architecture

## 14.1 Privacy

```text
/privacy/
```

## 14.2 Terms

```text
/terms/
```

## 14.3 Cookies

```text
/cookies/
```

## 14.4 Accessibility

```text
/accessibility/
```

## 14.5 Market-Specific Legal Pages

When legal requirements differ by market, localized pages may be created within the approved localization architecture.

The website must not expose multiple contradictory legal documents without clearly identifying their applicability.

---

# 15. Login and Platform Access

## 15.1 Shared Login Route

### Canonical Route

```text
/login/
```

The shared login route may route users toward:

- Patient access
- Provider access

It must not create the impression that both systems share identical authentication unless they do.

## 15.2 Direct Access Routes

Direct Patient or Provider access routes may be used when approved:

```text
/patients/login/
/providers/login/
```

The final authentication routing belongs to Product and Engineering decisions.

## 15.3 Availability Rule

A login link must not be displayed if:

- The destination is unavailable
- The platform is restricted
- The access process is not approved
- The market is unsupported

---

# 16. Navigation Architecture

# 16.1 Shared Entry Navigation

The root page should use minimal navigation.

Recommended shared navigation:

- About
- Resources
- Contact
- Login, where available

Primary audience actions:

- Patient
- Healthcare Provider

The shared entry should not display the full Patient and Provider navigation simultaneously.

---

## 16.2 Patient Primary Navigation

Recommended Patient navigation:

1. How ODRISC Helps
2. Preparing for Pregnancy
3. During Pregnancy
4. Support
5. Resources

Primary CTA:

- Start, with final wording determined by the approved conversion

Audience switch:

- Healthcare Provider

### Patient Support Menu

The Support item may contain:

- Risk Awareness
- Weight Monitoring
- Nutrition
- Physical Activity
- Maternal and Fetal Progress
- Membership

The final number of top-level items should remain limited.

---

## 16.3 Provider Primary Navigation

Recommended Provider navigation:

1. Clinical Platform
2. Monitoring
3. Intelligence
4. Validation
5. Insights
6. For Organizations

Primary CTA:

- Request Demonstration

Audience switch:

- Patient

### Intelligence Menu

- Maternal Intelligence
- Fetal Growth Intelligence
- Methodology

### For Organizations Menu

- Hospitals and Health Systems
- Fertility and IVF Centers
- Multidisciplinary Care
- Security and Privacy
- Discuss Pilot

---

## 16.4 Shared Header Elements

Audience-specific headers may include:

- ODRISC logo
- Audience context
- Primary navigation
- Audience switch
- Login
- Primary CTA
- Mobile-menu control

The selected audience should remain visible.

---

## 16.5 Mobile Navigation

Mobile navigation must:

- Preserve audience identity
- Preserve the audience switch
- Expose the primary CTA
- Group nested routes clearly
- Avoid showing all website routes at once
- Support keyboard and assistive technology
- Avoid hidden essential legal or support access

---

# 17. Footer Architecture

The footer should provide structured access across the complete website without recreating the entire sitemap.

Recommended footer groups:

## 17.1 Patients

- Patient Homepage
- How ODRISC Helps
- Preparing for Pregnancy
- During Pregnancy
- Risk Awareness
- Weight Monitoring
- Nutrition
- Physical Activity
- Patient FAQs

## 17.2 Healthcare Providers

- Provider Homepage
- Clinical Platform
- Monitoring
- Maternal Intelligence
- Fetal Growth Intelligence
- Workflow
- Validation
- Hospitals and Health Systems
- Request Demonstration

## 17.3 Resources

- Patient Resources
- Provider Resources
- Glossary
- Frequently Asked Questions

## 17.4 Company

- About
- Our Story
- Team
- Partnerships
- Careers
- Contact

## 17.5 Legal and Trust

- Privacy
- Terms
- Cookies
- Accessibility
- Security and Privacy

## 17.6 Footer Utility

- Audience switch
- Language switch, when active
- Market selection, when active
- Login, when available
- Copyright
- Legal entity name
- Social channels, when approved

---

# 18. Audience Switching

## 18.1 Required Behavior

Visitors must be able to switch between Patient and Provider experiences.

The audience switch must:

- Be visible
- Be available on mobile
- Work without authentication
- Remain within `odrisc.com`
- Preserve access to shared pages
- Be measured through analytics

## 18.2 Equivalent-Page Mapping

Where a meaningful equivalent page exists, the audience switch should route to it.

Examples:

```text
/patients/
↔
/providers/
```

```text
/patients/maternal-and-fetal-progress/
↔
/providers/intelligence/
```

```text
/patients/frequently-asked-questions/
↔
/providers/frequently-asked-questions/
```

## 18.3 No Equivalent Page

When no meaningful equivalent exists, the switch should route to the selected audience homepage.

Example:

```text
/patients/membership/
→
/providers/
```

The website must not create artificial equivalent pages solely to preserve URL symmetry.

## 18.4 Search-Engine Entry

A visitor entering through a Patient or Provider search result must not be forced through the audience gateway first.

## 18.5 Preference Storage

Audience preference may be stored using an approved first-party mechanism.

Preference storage must not:

- Override direct deep links
- Prevent audience switching
- create sensitive health profiling
- Be sent to general analytics as medical information

---

# 19. Breadcrumb Architecture

## 19.1 Breadcrumb Use

Breadcrumbs should appear on:

- Audience detail pages
- Nested intelligence pages
- Resource pages
- Topic pages
- Company subpages
- Institutional pages

Breadcrumbs are not required on:

- Shared entry
- Patient homepage
- Provider homepage
- Simple conversion pages where they create distraction

## 19.2 Patient Example

```text
Home
→
Patients
→
Weight Monitoring
```

## 19.3 Provider Example

```text
Home
→
Healthcare Providers
→
Intelligence
→
Fetal Growth Intelligence
```

## 19.4 Resource Example

```text
Home
→
Resources
→
Providers
→
Understanding Growth Velocity
```

## 19.5 Breadcrumb Requirements

Breadcrumbs must:

- Reflect the canonical hierarchy
- Use meaningful labels
- Use structured data where appropriate
- Avoid reflecting temporary campaign routes
- Remain consistent with URLs

---

# 20. Page Hierarchy

The website uses the following page levels.

## Level 0 — Shared Entry

```text
/
```

## Level 1 — Audience and Shared Hubs

Examples:

```text
/patients/
/providers/
/resources/
/about/
/contact/
```

## Level 2 — Pillar Pages

Examples:

```text
/patients/weight-monitoring/
/providers/clinical-platform/
/providers/validation/
/about/our-story/
```

## Level 3 — Specialized Pages

Examples:

```text
/providers/intelligence/fetal-growth-intelligence/
/patients/preparing-for-pregnancy/ivf-readiness/
/resources/topics/gestational-diabetes/
```

## Level 4 — Exceptional Deep Content

Level 4 should be used sparingly.

Examples may include:

- Detailed methodology subpages
- Market-specific implementation guides
- Specialized institutional resources

Excessive hierarchy should be avoided.

---

# 21. Page-Type Architecture

The website should use controlled page types.

## 21.1 Audience Homepage

Used for:

- Patient Homepage
- Provider Homepage

## 21.2 Product Overview Page

Used for:

- How ODRISC Helps
- Clinical Platform
- Intelligence

## 21.3 Capability Page

Used for:

- Risk Awareness
- Weight Monitoring
- Nutrition
- Physical Activity
- Maternal Intelligence
- Fetal Growth Intelligence

## 21.4 Journey Page

Used for:

- Preparing for Pregnancy
- During Pregnancy

## 21.5 Trust Page

Used for:

- Validation
- Methodology
- Security and Privacy
- About
- Team

## 21.6 Institutional Page

Used for:

- Hospitals and Health Systems
- Fertility and IVF Centers
- Multidisciplinary Care

## 21.7 Resource Hub

Used for:

- Resources
- Patient Resources
- Provider Resources
- Topic Hubs

## 21.8 Resource Detail

Used for:

- Articles
- Guides
- Clinical briefs
- Methodology notes
- Evidence summaries

## 21.9 Conversion Page

Used for:

- Patient Start
- Request Demonstration
- Discuss Pilot
- Contact

## 21.10 Legal Page

Used for:

- Privacy
- Terms
- Cookies
- Accessibility

Page templates must remain flexible enough to support content needs without creating uncontrolled one-off designs.

---

# 22. Cross-Linking Architecture

Cross-links should help visitors progress rather than merely increase link volume.

## 22.1 Patient Cross-Links

Examples:

```text
Risk Awareness
→ Weight Monitoring
→ Nutrition
→ Patient Start
```

```text
Preparing for Pregnancy
→ PCOS
→ IVF Preparation
→ Risk Awareness
```

## 22.2 Provider Cross-Links

Examples:

```text
Clinical Platform
→ Monitoring
→ Intelligence
→ Validation
→ Request Demonstration
```

```text
Fetal Growth Intelligence
→ Methodology
→ Validation
→ Discuss Pilot
```

## 22.3 Shared Cross-Links

Examples:

```text
About
→ Product Vision
→ Patient Homepage
→ Provider Homepage
```

```text
Patient Resource
→ Relevant Patient Capability
```

```text
Provider Resource
→ Relevant Methodology or Clinical Platform Page
```

## 22.4 Cross-Link Rules

Cross-links must:

- Be relevant
- Use descriptive anchor text
- Respect audience context
- Avoid routing Patients into unexplained specialist content
- Avoid routing Providers into consumer commercial content without context
- Support the primary page objective
- Avoid circular dead-end journeys

---

# 23. Search Architecture

## 23.1 Search Availability

Internal search should be introduced when the quantity of resources justifies it.

The route is reserved as:

```text
/search/
```

## 23.2 Search Scope

Search may include:

- Public Patient pages
- Public Provider pages
- Resources
- Company pages
- FAQs
- Glossary

Search must exclude:

- Drafts
- Internal documentation
- Restricted product information
- Unpublished validation content
- Private platform pages
- Personal data
- Application records

## 23.3 Search Filters

Potential filters:

- Audience
- Topic
- Content type
- Journey stage
- Market
- Language

## 23.4 Search Result Labels

Every result should display its audience context:

- Patient
- Healthcare Provider
- Shared
- Institutional

---

# 24. SEO Architecture

## 24.1 Search-Intent Separation

Patient and Provider pages must address different search intent.

Example:

Patient:

```text
/patients/weight-monitoring/
```

Provider:

```text
/providers/monitoring/
```

These pages may discuss related concepts but must have distinct:

- Audience
- Purpose
- Depth
- Terminology
- Metadata
- CTA
- Supporting evidence

## 24.2 Canonical URLs

Every indexable page must define one canonical URL.

## 24.3 Duplicate Content

The website must not create separate pages with substantially identical content merely to target minor keyword variations.

## 24.4 Pagination

Resource pagination must use an approved indexation strategy.

## 24.5 Filter Pages

Resource filters should not automatically create indexable pages unless they have:

- Unique value
- Sufficient content
- Approved metadata
- Search demand
- Stable taxonomy

## 24.6 Structured Data

Information Architecture should support:

- Organization
- Website
- Breadcrumb
- Article
- FAQ
- Person
- Software or application information where appropriate

Structured data must not contain unsupported medical or product claims.

---

# 25. Localization Architecture

## 25.1 Logical Versus Physical Routes

The logical hierarchy defined in this document remains constant across languages and markets.

Example logical route:

```text
/patients/weight-monitoring/
```

A future localized implementation may become:

```text
/[locale]/patients/weight-monitoring/
```

or another approved market-language pattern.

## 25.2 Locale Strategy Decision

The exact locale URL strategy remains subject to approval.

Potential implementation models include:

```text
/en/
/ar/
```

or:

```text
/en-qa/
/ar-qa/
```

or:

```text
/qa/en/
/qa/ar/
```

The final decision must account for:

- Qatar launch
- India validation
- Future GCC markets
- Search engines
- Legal content
- Market availability
- Pricing
- Analytics
- Operational maintainability

## 25.3 Arabic Readiness

The architecture must support:

- Right-to-left presentation
- Mirrored navigation where appropriate
- Arabic typography
- Localized route labels
- Localized metadata
- Localized structured data
- Localized forms
- Localized errors
- Direction-aware diagrams
- Charts that remain clinically understandable

## 25.4 Translation Equivalence

Translated pages must preserve:

- Meaning
- Clinical boundaries
- Product status
- CTA availability
- Evidence context
- Legal applicability

## 25.5 Incomplete Localization

The website must not silently route users to untranslated pages.

Fallback behavior must be explicit.

## 25.6 Hreflang

When multiple regional or language versions are published, each eligible page must support the approved international SEO annotations.

---

# 26. Market Architecture

## 26.1 Global Product Identity

The ODRISC identity should remain globally consistent.

## 26.2 Qatar

Qatar-specific content may include:

- Availability
- Pricing
- Contact pathways
- Provider implementation
- Hospital pathways
- English and Arabic
- Legal information
- Data and privacy information
- Local market evidence

## 26.3 India

India-specific content may include:

- Product validation context
- Current Patient access
- Clinical collaborators
- Applicable pricing
- Local support information
- India-specific evidence

## 26.4 GCC Expansion

Future market variants may include:

- UAE
- Saudi Arabia
- Kuwait
- Bahrain
- Oman

## 26.5 Market Selection

A market selector should be introduced only when visitors genuinely receive different:

- Availability
- Pricing
- Legal terms
- Language
- Contact pathways
- Product experiences

The website must not add a decorative market selector with no functional difference.

---

# 27. Error and Utility Architecture

## 27.1 404 Page

The 404 page must:

- Explain that the page was not found
- Preserve ODRISC branding
- Offer Patient and Provider destinations
- Offer search where available
- Offer shared navigation
- Avoid blaming the user

## 27.2 500 Page

The server-error page must:

- Communicate a temporary problem
- Avoid exposing technical details
- Provide a safe return route
- Provide an appropriate contact route

## 27.3 Empty States

Resource, search, and filter empty states must guide visitors toward:

- Related topics
- Audience homepages
- Contact
- Clearing filters

## 27.4 Maintenance State

Maintenance messaging must clearly distinguish:

- Informational website availability
- Patient application availability
- Provider platform availability

---

# 28. Analytics Architecture

The architecture must support audience and journey measurement.

## 28.1 Required Page Dimensions

Analytics should identify:

- Audience zone
- Page type
- Content topic
- Product-status dependency
- Market
- Language
- Conversion stage

## 28.2 Navigation Events

Track:

- Patient selected
- Provider selected
- Audience switched
- Primary navigation selected
- Footer navigation selected
- Breadcrumb selected
- Resource filter used
- Search used

## 28.3 Route Governance

Route names used in analytics must remain stable even when visible navigation labels change.

## 28.4 Privacy Boundary

Audience selection may identify website context.

It must not be treated as a medical diagnosis or sensitive health classification.

---

# 29. Publication and Indexation Rules

A page may be published only when:

1. The route is approved
2. The page purpose is approved
3. The intended audience is identified
4. The primary CTA is approved
5. The CTA destination works
6. Product Status has been checked
7. Clinical claims have been reviewed
8. Legal and privacy requirements are satisfied
9. Metadata is complete
10. Analytics requirements are defined
11. Accessibility has been reviewed
12. Content ownership is assigned

A page may be indexable only when:

- It provides unique public value
- It is not a placeholder
- It is not a thin duplicate
- It is not restricted
- It is not an unfinished localization
- It has approved canonical metadata

---

# 30. Page Lifecycle

Every public page should move through:

```text
Proposed
→
Approved in Information Architecture
→
Requirements defined
→
Content drafted
→
Clinical or product review
→
Design
→
Implementation
→
Quality assurance
→
Published
→
Monitored
→
Updated
→
Archived or redirected
```

## 30.1 Archiving

When a page is retired:

- Its replacement must be identified
- A redirect should be added where appropriate
- Internal links must be updated
- Sitemap entries must be updated
- Analytics should record the change
- The redirect must be added to the redirect register

---

# 31. Redirect Architecture

## 31.1 Redirect Requirements

Permanent route changes should use permanent redirects.

Temporary campaign changes should use appropriate temporary behavior.

## 31.2 Redirect Register

Every redirect should record:

- Previous URL
- New URL
- Reason
- Redirect type
- Date
- Owner
- Review status

## 31.3 Redirect Chains

Redirect chains and loops must be avoided.

## 31.4 Canva Website Migration

When migrating from the existing Canva website:

- Existing public URLs must be inventoried
- Search-performing pages must be identified
- Equivalent new destinations must be mapped
- Unnecessary pages must not be recreated automatically
- Redirects must be tested
- Canonical metadata must be updated
- Analytics continuity must be planned

---

# 32. Content Ownership

Each page must have an owner.

Potential owners include:

- Founder
- Product
- Clinical
- Content
- Marketing
- Engineering
- Privacy
- Legal
- Commercial
- Localization

Ownership must include responsibility for:

- Accuracy
- Product status
- Review
- Updates
- CTA destination
- References
- Market applicability

Clinical content must also identify a clinical reviewer where required.

---

# 33. Initial Launch Page Inventory

The final P0 inventory must be approved separately.

The recommended minimum architecture for initial launch is:

## 33.1 Shared P0 Pages

- `/`
- `/about/`
- `/contact/`
- `/privacy/`
- `/terms/`
- `/cookies/`, when required
- `/accessibility/`
- 404
- 500

## 33.2 Patient P0 Pages

- `/patients/`
- `/patients/how-odrisc-helps/`
- `/patients/risk-awareness/`, if public risk assessment is approved
- `/patients/weight-monitoring/`, if public capability is approved
- `/patients/nutrition/`, if public support is approved
- `/patients/physical-activity/`, if public support is approved
- `/patients/frequently-asked-questions/`
- `/patients/start/`, only when a working destination exists

## 33.3 Provider P0 Pages

- `/providers/`
- `/providers/clinical-platform/`
- `/providers/monitoring/`
- `/providers/intelligence/`
- `/providers/workflow/`
- `/providers/validation/`
- `/providers/frequently-asked-questions/`
- `/providers/request-demonstration/`

## 33.4 Conditional P1 Pages

- Maternal Intelligence
- Fetal Growth Intelligence
- Methodology
- Insights
- Hospitals and Health Systems
- Fertility and IVF Centers
- Multidisciplinary Care
- Security and Privacy
- Discuss Pilot
- Patient Membership
- Patient Journey pages
- Resource library
- Team
- Partnerships
- Careers
- Login
- Search

Conditional pages may be promoted to P0 through approved launch-scope decisions.

---

# 34. Requirements Traceability

Information Architecture elements must map to the PRD.

Examples:

```text
Shared audience gateway
→ SHR-002
→ SHR-003
→ UX-001
→ ANL-001
```

```text
Patient homepage
→ PAT-001
→ PAT-007
→ PAT-008
→ UX-001
→ SEO-001
```

```text
Provider homepage
→ PRO-001
→ PRO-002
→ PRO-008
→ UX-001
→ SEO-001
```

```text
Validation page
→ PRO-006
→ CON-004
→ SEO-006
```

```text
Arabic route architecture
→ LOC-001
→ LOC-003
→ LOC-006
```

The complete mapping belongs in:

`docs/product/REQUIREMENTS_TRACEABILITY.md`

---

# 35. Information Architecture Acceptance Criteria

The Information Architecture is approved when:

## 35.1 Strategic

- It supports the Product Vision
- It supports the Website Objectives
- It follows the Website Story
- It supports both primary audiences
- It preserves one brand and one domain

## 35.2 Audience

- Patients receive a complete journey
- Providers receive a complete journey
- Shared secondary audiences are supported without complicating the gateway
- Audience switching is defined
- Audience terminology is appropriate

## 35.3 Structural

- Every proposed page has a clear purpose
- Each topic has one canonical owner
- URL hierarchy is logical
- Navigation is understandable
- Page depth is controlled
- Shared pages are not unnecessarily duplicated

## 35.4 Product

- Product Status dependencies are visible
- Future capabilities are not presented as launch commitments
- CTA destinations are governed
- Public website and product applications remain distinct

## 35.5 Content

- Patient and Provider search intent are separated
- Resource taxonomy is defined
- Clinical content review is supported
- Founder and company content have clear locations
- Legal content has clear locations

## 35.6 Technical

- Routes support responsive implementation
- Routes support analytics
- Routes support SEO
- Routes support localization
- Redirect requirements are defined
- Search and indexation rules are defined

## 35.7 Operational

- Page ownership can be assigned
- Pages can move through a defined lifecycle
- Content can be reviewed and archived
- Route changes are governed
- Migration from the current website can be planned

---

# 36. Information Architecture Risks

## 36.1 Overexpansion

Too many pages may be created before sufficient unique content exists.

**Mitigation:** Require purpose, Product Status, CTA, and content ownership before publication.

## 36.2 Thin Content

Dedicated pages may be created for topics that do not justify independent pages.

**Mitigation:** Begin with sections or resource articles and promote them only when necessary.

## 36.3 Audience Duplication

Patient and Provider pages may repeat the same content.

**Mitigation:** Separate search intent, terminology, depth, proof, and action.

## 36.4 Navigation Overload

Too many capabilities may appear in top-level navigation.

**Mitigation:** Use controlled menus and pillar pages.

## 36.5 Roadmap Exposure

Future clinical capabilities may appear as active routes.

**Mitigation:** Check Product Status before page approval.

## 36.6 Market Confusion

India validation and Qatar commercialization may be mixed.

**Mitigation:** Apply market metadata and localized content governance.

## 36.7 Arabic Retrofitting

The English architecture may fail under right-to-left requirements.

**Mitigation:** Validate navigation, diagrams, forms, and templates for RTL during design.

## 36.8 URL Instability

Routes may change during visual redesign.

**Mitigation:** Separate route meaning from presentation.

## 36.9 Resource Sprawl

The resource library may become an unmanaged content archive.

**Mitigation:** Use controlled taxonomy, ownership, review dates, and archival rules.

## 36.10 Platform Confusion

Website visitors may confuse public information pages with product dashboards.

**Mitigation:** Clearly label informational, demonstration, login, and application handoff routes.

---

# 37. Assumptions

This Information Architecture assumes:

1. `odrisc.com` remains the canonical public domain.
2. Patients and healthcare providers remain equal primary audiences.
3. The root route acts as the shared entry experience.
4. Patient routes use `/patients/`.
5. Provider routes use `/providers/`.
6. Shared pages remain outside audience prefixes.
7. Institutional visitors primarily enter through the Provider experience.
8. Investors, media, and candidates remain secondary shared audiences.
9. Product capabilities are governed through Product Status.
10. The website is separate from the complete Patient application and Provider platform.
11. Qatar remains the commercial priority.
12. India remains relevant for validation and current development.
13. Arabic support is required for Qatar commercialization.
14. The exact locale URL model remains unresolved.
15. The final P0 launch page inventory remains subject to approval.
16. Not every logical route will be published at initial launch.
17. Detailed page specifications will follow Information Architecture.
18. Existing Canva URLs must be reviewed before migration.

---

# 38. Open Questions

All unresolved questions must be tracked in:

`docs/project/OPEN_QUESTIONS.md`

Key Information Architecture questions include:

- Does the root page remain a full shared narrative page or a concise audience gateway?
- Does the website remember the selected audience?
- What is the exact visible Patient gateway label?
- What is the exact visible Provider gateway label?
- What is the final P0 page inventory?
- Which conditional capability pages are public at launch?
- Which Patient route receives the primary CTA?
- Which Provider route receives the primary CTA?
- Is the Resource library required at initial launch?
- Is internal search required at initial launch?
- What is the final locale and market URL strategy?
- Is Arabic part of the first commercial release?
- How are India and Qatar content variants represented?
- Is `/login/` shared or audience-specific?
- Which existing Canva URLs require redirects?
- Which pages require dedicated Arabic visual adaptation?
- Which institutional routes are P0?
- Which Provider pages may discuss roadmap capabilities?
- Which pages require clinical-review metadata?
- Which pages require market-specific legal wording?

---

# 39. Locked Information Architecture Decisions

The following decisions are locked unless formally changed:

1. The public website will use one canonical domain: `odrisc.com`.
2. The website will use one ODRISC brand.
3. The root route will serve as the shared audience-entry experience.
4. Patients and Providers will receive separate audience homepages.
5. Patient content will use the `/patients/` route prefix.
6. Provider content will use the `/providers/` route prefix.
7. Shared company, resource, legal, and utility pages will remain outside audience prefixes.
8. Institutional audiences will primarily be served through the Provider experience.
9. Investors and other secondary audiences will not be added to the primary gateway.
10. Direct deep links will not be blocked by the audience gateway.
11. Visitors will be able to switch between Patient and Provider journeys.
12. The audience switch will route to an equivalent page when a meaningful equivalent exists.
13. Otherwise, the switch will route to the selected audience homepage.
14. Patient and Provider search intent will be separated.
15. Each major topic will have one canonical page.
16. Future capabilities will not receive public pages unless Product Status and public wording are approved.
17. The logical hierarchy will support future localization.
18. The exact physical locale URL strategy requires a separate approval.
19. Breadcrumbs will reflect the canonical hierarchy.
20. Route changes will be managed through a redirect register.
21. Existing Canva URLs will be inventoried before migration.
22. Detailed page requirements will be documented separately.
23. Information Architecture defines where content belongs; it does not define final copy or layout.
24. The architecture must remain accessible, responsive, searchable, measurable, and localization-ready.

---

# 40. Rules for AI Agents

Before creating, moving, renaming, deleting, or implementing a public route, AI agents must read:

1. `PROJECT_CONTEXT.md`
2. `docs/project/SOURCE_OF_TRUTH.md`
3. `ai/rules/NON_NEGOTIABLES.md`
4. `docs/product/PRODUCT_VISION.md`
5. `docs/product/AUDIENCE.md`
6. `docs/product/WEBSITE_OBJECTIVES.md`
7. `docs/product/WEBSITE_STORY.md`
8. `docs/product/PRD.md`
9. `docs/product/PRODUCT_STATUS.md`
10. `docs/product/INFORMATION_ARCHITECTURE.md`

AI agents must:

- Identify the audience
- Identify the page purpose
- Identify the canonical route
- Identify the PRD requirements
- Check Product Status
- Check for an existing canonical page
- Check relevant open questions
- Preserve URL stability
- Preserve audience switching
- Preserve localization readiness
- Add redirects when changing published routes
- Update the route registry
- Update traceability documentation

AI agents must not:

- Invent a new top-level website zone
- Create a third primary audience gateway
- Create duplicate Patient and Provider content without audience justification
- Create a public page for an unapproved roadmap capability
- Rename canonical routes solely for visual preference
- Use implementation folder structure as public URL structure
- Add unnecessary URL depth
- Publish empty placeholder pages
- Force deep-link visitors through the audience gateway
- Mix private platform routes with public marketing routes
- Treat current Canva structure as the canonical future architecture
- Change the locale strategy without an approved decision
- Remove redirects without reviewing historical traffic

---

# 41. Foundational Information Architecture Summary

The ODRISC public website will use one domain, one brand, and one shared pregnancy-care story.

The root experience will introduce ODRISC and route visitors toward:

- Patient
- Healthcare Provider

The Patient journey will help women understand, prepare, monitor, participate, and take the next appropriate action.

The Provider journey will help healthcare professionals understand the clinical problem, evaluate longitudinal maternal and fetal intelligence, review methodology and validation, assess workflow fit, and take an appropriate professional action.

Shared company, resource, legal, and utility pages will support both audiences without weakening the primary gateway.

The architecture must remain:

- Clear
- Audience-specific
- Clinically responsible
- Searchable
- Accessible
- Measurable
- Localization-ready
- Stable
- Governed
- Scalable across Qatar, India, and future GCC markets

The governing structural model is:

```text
odrisc.com
↓
Shared audience entry
↓
Patient journey or Provider journey
↓
Audience-specific understanding
↓
Relevant trust and evidence
↓
Appropriate conversion
```
