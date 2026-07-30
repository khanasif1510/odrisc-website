# ODRISC Website Product Requirements Document

## Document Status

**Document:** Website Product Requirements Document
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical public-website requirements
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Approval authority:** Founder and designated clinical, product, legal, and technical reviewers

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
- `docs/product/PRODUCT_STATUS.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/CODING_STANDARDS.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

---

# 1. Purpose

This document defines the product requirements for the public ODRISC website at:

`odrisc.com`

It translates the approved product vision, audience strategy, website objectives, and website story into implementable requirements.

The PRD defines:

- What the public website must do
- Which audience experiences must exist
- Which website capabilities are required
- Which requirements are mandatory at launch
- Which requirements may be delivered later
- How Patient and Provider journeys must remain connected
- How clinical claims and product capabilities must be governed
- How website success must be measured
- How design and engineering work will be accepted

This PRD is the primary requirements bridge between strategy and implementation.

---

# 2. Scope Boundary

This PRD defines the requirements for the public ODRISC website.

It does not define the complete requirements of:

- The ODRISC Patient application
- The Provider platform
- Clinical intelligence engines
- Gestational diabetes risk algorithms
- Weight-monitoring algorithms
- Maternal intelligence algorithms
- Fetal-growth intelligence algorithms
- Ultrasound optical character recognition
- Hospital integrations
- Electronic-health-record integrations
- Clinical alert systems
- Subscription billing systems
- Professional care-delivery workflows
- Internal administration systems

Those systems require separate product requirements documents.

The public website may describe, introduce, demonstrate, or route visitors toward these systems only when the relevant capability status and public communication rules have been approved in:

`docs/product/PRODUCT_STATUS.md`

---

# 3. Product Summary

ODRISC is being developed as a maternal and fetal intelligence platform.

The public website must explain how ODRISC helps patients and healthcare professionals understand how pregnancy is evolving over time.

The website must communicate that:

- Pregnancy information is often fragmented
- Isolated measurements may not explain progression
- Maternal and fetal information becomes more useful when reviewed longitudinally
- ODRISC connects relevant information across the pregnancy journey
- ODRISC supports earlier recognition and better monitoring
- ODRISC strengthens Patient-Provider collaboration
- ODRISC supports and does not replace healthcare professionals

The website must serve two primary audiences through one brand and one domain:

1. Patients
2. Healthcare Providers

The website must provide a complete and differentiated journey for each audience.

---

# 4. Product Vision Alignment

The website must support the following product vision:

> ODRISC will become the intelligence layer that connects maternal health, fetal growth, patient-reported information, and clinical monitoring across the pregnancy journey.

The website must preserve the following formal value chain:

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

The value chain represents the intended product logic.

It must not be presented as proof that use of ODRISC automatically produces improved outcomes.

---

# 5. Website Vision

The website should become the primary public source for understanding:

- Why ODRISC exists
- Which problem it addresses
- Who it serves
- How the Patient and Provider experiences connect
- Which capabilities are currently available
- Which capabilities are being piloted or developed
- Which clinical and technological principles guide the platform
- How patients can access relevant support
- How healthcare professionals can evaluate or engage with ODRISC
- How hospitals and institutional partners can begin a conversation
- How ODRISC is preparing for Qatar and GCC markets

The website must build trust before asking for conversion.

---

# 6. Primary Website Goals

## 6.1 Shared Goals

The website must:

- Establish ODRISC as a credible maternal and fetal intelligence platform
- Explain the longitudinal pregnancy-care problem
- Communicate the connection between Patient and Provider experiences
- Route visitors to the appropriate audience journey
- Build clinical, product, and organizational trust
- Communicate product status transparently
- Support search visibility
- Support international market readiness
- Generate measurable Patient and Provider actions

## 6.2 Patient Goals

The Patient experience must:

- Help women understand whether ODRISC is relevant to them
- Explain Patient-facing capabilities in accessible language
- Support risk awareness without implying diagnosis
- Explain weight, nutrition, physical activity, and pregnancy monitoring appropriately
- Reinforce the role of healthcare professionals
- Reduce confusion without creating false reassurance
- Guide visitors toward the approved Patient conversion

## 6.3 Provider Goals

The Provider experience must:

- Establish clinical relevance quickly
- Explain the fragmentation problem
- Explain longitudinal maternal and fetal intelligence
- Demonstrate how ODRISC may support monitoring and workflow
- Explain clinical boundaries
- Present methodology, validation, privacy, and implementation information
- Guide visitors toward the approved Provider conversion

## 6.4 Institutional Goals

The website should:

- Support hospital, clinic, insurer, employer, government, and strategic-partner evaluation
- Explain implementation and enterprise direction without overstating readiness
- Provide an appropriate contact or briefing pathway
- Support Qatar commercialization and future GCC expansion

---

# 7. Non-Goals

The public website is not intended to:

- Diagnose a pregnancy complication
- Replace antenatal care
- Replace a healthcare professional
- Provide emergency medical care
- Deliver individualized medical treatment through static website content
- Operate as the full Patient application
- Operate as the full Provider dashboard
- Publish unapproved clinical algorithms
- Present all roadmap concepts as available
- Function as a general pregnancy-content portal
- Function as a social network
- Function as a marketplace
- Lead with generic artificial-intelligence messaging
- Present ODRISC as a guaranteed prevention system
- Publish unsupported regulatory or validation claims

---

# 8. Product Principles

All website decisions must follow these principles.

## 8.1 One Brand, Two Complete Journeys

Patients and Providers must receive distinct experiences within one unified ODRISC website.

## 8.2 Story Before Features

Pages must explain the visitor problem and relevance before presenting features.

## 8.3 Longitudinal Understanding

The website must emphasize progression, change, trajectory, and relationships across time.

## 8.4 Explainability

Clinical or intelligence-related outputs must be described as explainable and reviewable.

## 8.5 Clinician Support

The website must reinforce that ODRISC supports professional judgment and does not replace it.

## 8.6 Patient Dignity

Patient content must avoid shame, blame, fear, weight stigma, or appearance-focused messaging.

## 8.7 Product-Status Transparency

Every public capability statement must match the approved status register.

## 8.8 Evidence-Conscious Communication

Clinical claims must be proportionate to available evidence and validation.

## 8.9 Accessibility

The website must be usable by people with different devices, abilities, languages, and levels of clinical knowledge.

## 8.10 Performance

Visual quality and animation must not compromise website speed, usability, or discoverability.

---

# 9. Primary Users

Detailed audience definitions are maintained in:

`docs/product/AUDIENCE.md`

This PRD uses the following primary user groups.

## 9.1 Patient Users

Patient users may include:

- Women planning pregnancy
- Women preparing for IVF or assisted reproduction
- Pregnant women
- Women with increased metabolic risk
- Women with PCOS
- Women monitoring weight before or during pregnancy
- Women receiving high-risk pregnancy care
- Partners or family supporters

## 9.2 Provider Users

Provider users may include:

- Obstetricians and gynecologists
- Maternal-fetal medicine specialists
- Fertility and IVF specialists
- Maternity clinics
- Hospitals
- Nutrition professionals
- Women's health physiotherapists
- Nurses
- Midwives
- Diabetes educators
- Care coordinators
- Healthcare administrators
- Clinical and institutional decision-makers

## 9.3 Shared Secondary Users

Shared secondary users may include:

- Investors
- Startup programs
- Government stakeholders
- Insurers
- Employers
- Researchers
- Technology partners
- Media
- Job candidates

These users must not be added to the primary audience gateway.

---

# 10. Website Architecture Requirements

The final sitemap will be defined in:

`docs/product/INFORMATION_ARCHITECTURE.md`

The website must support the following conceptual structure:

```text
odrisc.com
│
├── Shared Entry Experience
│
├── Patient Experience
│
├── Provider Experience
│
├── Shared Company Pages
│
├── Shared Resource Pages
├── Legal and Privacy Pages
└── Platform Access or Conversion Routes
```

## 10.1 Shared Entry Experience

The shared entry experience must:

- Introduce the ODRISC premise
- Communicate one unified brand
- Allow visitors to select Patient or Healthcare Provider
- Explain that users may switch later
- Avoid adding unnecessary audience choices
- Work without authentication
- Work on mobile and desktop
- Support analytics tracking

## 10.2 Patient Experience

The Patient experience must include a complete navigation and content journey appropriate to Patient needs.

## 10.3 Provider Experience

The Provider experience must include a complete navigation and content journey appropriate to clinical and institutional evaluation.

## 10.4 Shared Pages

Shared pages may include:

- About
- Company
- Founder story
- Team
- Resources
- Contact
- Partnerships
- Careers
- Privacy
- Terms
- Cookie information
- Accessibility information

## 10.5 Audience Switching

Users must be able to switch between Patient and Provider experiences from audience-specific pages.

---

# 11. Requirement Classification

Requirements use the following priority labels:

| Priority | Definition                                                                         |
| -------- | ---------------------------------------------------------------------------------- |
| P0       | Mandatory for initial public launch                                                |
| P1       | High priority; required shortly after launch or before major commercial activation |
| P2       | Important enhancement                                                              |
| P3       | Future consideration                                                               |

Requirements use the following identifiers:

- `SHR` — Shared experience
- `PAT` — Patient experience
- `PRO` — Provider experience
- `CON` — Content
- `UX` — User experience
- `SEO` — Search
- `ANL` — Analytics
- `ACC` — Accessibility
- `PER` — Performance
- `SEC` — Security
- `PRV` — Privacy
- `LOC` — Localization
- `INT` — Integration
- `OPS` — Operations and governance

---

# 12. Shared Functional Requirements

## SHR-001 — Unified Domain

**Priority:** P0

All primary public experiences must remain within:

`odrisc.com`

The website must not present Patient and Provider experiences as separate brands.

### Acceptance Criteria

- Patient pages use the ODRISC brand
- Provider pages use the ODRISC brand
- Audience switching remains within the same domain
- Core design tokens are shared
- Shared company and legal pages are accessible from both journeys

---

## SHR-002 — Audience Selection

**Priority:** P0

The website must provide a clear entry choice between:

- Patient
- Healthcare Provider

Final user-facing labels remain subject to approval.

### Acceptance Criteria

- The two choices are visually distinct
- Both choices are accessible by keyboard
- Both choices work on mobile
- Both choices have descriptive accessible labels
- The interaction is tracked
- The selector does not imply separate companies
- Users may continue even if audience persistence is unavailable

---

## SHR-003 — Audience Switching

**Priority:** P0

Users must be able to switch between Patient and Provider journeys.

### Acceptance Criteria

- The switch is available in persistent navigation or an equally discoverable location
- The switch does not require authentication
- The switch works on mobile and desktop
- The switch updates audience-specific navigation
- The switch updates the primary audience context
- The switch is tracked through analytics
- The visitor is not sent to a separate brand or domain

---

## SHR-004 — Shared Brand System

**Priority:** P0

Both journeys must use one design foundation.

### Acceptance Criteria

- Shared typography
- Shared color system
- Shared spacing system
- Shared interaction principles
- Shared icon principles
- Audience differentiation does not create inconsistent brands
- The approved gradient and text colors are used according to the design system

---

## SHR-005 — Responsive Website

**Priority:** P0

The website must support:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

### Acceptance Criteria

- No essential information is hidden on smaller screens
- Navigation remains usable
- Forms remain usable
- Data visuals remain legible
- CTAs remain available
- No horizontal scrolling occurs for normal page content
- Audience switching remains available

---

## SHR-006 — Clear Navigation

**Priority:** P0

The website must provide audience-relevant navigation.

### Acceptance Criteria

- Patient navigation does not expose unnecessary clinical complexity
- Provider navigation provides direct access to clinical, methodology, validation, and workflow content
- Shared pages remain accessible
- Current-page state is visible
- Navigation is usable with keyboard and assistive technology
- Mobile navigation has clear hierarchy

---

## SHR-007 — Contact Pathway

**Priority:** P0

The website must provide a general contact pathway.

### Acceptance Criteria

- A visible Contact page or contact route exists
- Submitted information is delivered to an approved recipient or system
- Users receive a clear success or failure state
- Required consent language is shown
- Form fields are minimized
- Spam prevention is implemented without creating unnecessary friction
- Sensitive medical information is not requested through general forms

---

## SHR-008 — Product-Status Governance

**Priority:** P0

All capability descriptions must be checked against:

`docs/product/PRODUCT_STATUS.md`

### Acceptance Criteria

- No planned feature is presented as available
- Pilot capabilities are labeled appropriately
- In-development capabilities use approved wording
- Restricted internal capabilities are not published
- Product-status review is included in the content approval process
- Status changes can be updated without restructuring the entire website

---

## SHR-009 — Clinical Boundary Messaging

**Priority:** P0

The website must communicate that ODRISC supports and does not replace healthcare professionals.

### Acceptance Criteria

- Appropriate boundary language appears on relevant Patient and Provider pages
- Risk assessment is not described as diagnosis
- Urgent symptoms are not routed through marketing or sales forms
- Patient content encourages appropriate professional care
- Provider content preserves clinical judgment
- No automated outcome guarantee is made

---

## SHR-010 — Search

**Priority:** P1

The website should provide search when the volume of resources makes navigation insufficient.

### Acceptance Criteria

- Search is added only when content volume justifies it
- Results identify Patient, Provider, and shared content
- Search does not surface restricted or draft content
- No-result states guide users appropriately
- Search terms may be analyzed in a privacy-conscious way

---

# 13. Patient Functional Requirements

## PAT-001 — Patient Homepage

**Priority:** P0

A dedicated Patient homepage must exist.

It must explain:

- Who ODRISC is for
- Which Patient problem it addresses
- How ODRISC supports pregnancy understanding
- Which Patient capabilities are available
- The role of healthcare professionals
- The approved next action

### Acceptance Criteria

- Patient language is understandable without clinical training
- The page follows the approved Patient story
- The primary CTA is clear
- Product-status wording is accurate
- Weight content is non-stigmatizing
- Medical boundaries are visible
- The page works on mobile

---

## PAT-002 — Patient Relevance Paths

**Priority:** P1

The Patient experience should support relevant pathways for:

- Preconception
- Pregnancy
- Increased metabolic risk
- PCOS
- IVF or assisted reproduction
- Weight monitoring
- Nutrition
- Physical activity
- Maternal and fetal progress

Not every pathway requires an independent page at launch.

The final information architecture will determine which pathways receive dedicated pages.

---

## PAT-003 — Risk-Assessment Route

**Priority:** P0 if the capability is approved for public use; otherwise P1

The website must provide an approved route toward the gestational diabetes risk assessment when its public status allows.

### Acceptance Criteria

- The route uses approved terminology
- The assessment is not described as diagnostic
- Users understand what the result represents
- Users understand that clinical testing may still be required
- Users receive appropriate privacy information
- The CTA does not appear if the capability is not publicly available
- Tracking distinguishes CTA clicks from completed assessments where technically possible

---

## PAT-004 — Weight-Monitoring Explanation

**Priority:** P0 if publicly available

The website must explain weight monitoring as health-focused longitudinal support.

### Acceptance Criteria

- No appearance-based messaging
- No shame or blame
- No universal target presented without context
- Preconception and pregnancy monitoring are distinguished
- The role of professional guidance is stated
- Product-status wording is accurate

---

## PAT-005 — Nutrition Explanation

**Priority:** P0 if publicly available

The website must explain Medical Nutrition Therapy and nutrition support accurately.

### Acceptance Criteria

- Qualified professional involvement is described accurately
- Personalized plans are not implied if they are not available
- Generic content and professional care are distinguished
- Pregnancy-stage relevance is explained
- No guaranteed treatment outcome is claimed
- Dietary restrictions or medical conditions are not managed through generic website text

---

## PAT-006 — Physical Activity Explanation

**Priority:** P0 if publicly available

The website must explain pregnancy-appropriate physical activity support.

### Acceptance Criteria

- Safety and contraindication boundaries are acknowledged
- The website does not prescribe individualized exercise for medically complex situations
- Qualified professional involvement is accurately described
- Product-status wording is correct
- Users are encouraged to follow healthcare guidance where necessary

---

## PAT-007 — Patient Safety Guidance

**Priority:** P0

Relevant Patient pages must provide appropriate safety direction.

### Acceptance Criteria

- ODRISC is not presented as an emergency service
- Users are directed to local emergency or professional care for urgent concerns
- The website does not attempt to triage emergencies through a marketing form
- Safety language is reviewed before publication
- Country-specific emergency wording is added only when legally and operationally approved

---

## PAT-008 — Patient Conversion

**Priority:** P0

The Patient journey must have one approved primary conversion.

Possible actions include:

- Begin risk assessment
- Create an account
- Start monitoring
- View membership
- Access the Patient application

The final conversion remains subject to approval.

### Acceptance Criteria

- The action is available
- The CTA accurately describes what happens next
- The destination works
- The action is tracked
- No conflicting primary CTA dominates the same page
- Failure states are handled
- Product and commercial terms are visible where relevant

---

## PAT-009 — Patient Pricing or Membership

**Priority:** P1 or P0 if direct Patient purchase is active at launch

When public purchase is available, the website must explain:

- Plan name
- Included services
- Duration
- Price
- Taxes
- Payment terms
- Refund terms
- Professional-support boundaries
- Market availability

### Acceptance Criteria

- Pricing is current
- Currency matches market context
- Taxes are communicated appropriately
- Features match actual delivery
- Roadmap features are not included in current plans
- Purchase terms are accessible before payment
- Pricing content can be updated centrally

---

## PAT-010 — Patient Privacy Explanation

**Priority:** P0

The Patient journey must explain relevant privacy practices in understandable language.

### Acceptance Criteria

- Users can access the Privacy Policy
- Data collection purpose is explained
- Sharing with Providers is not implied without consent
- General contact forms do not request unnecessary medical information
- Tracking consent is handled according to applicable requirements
- Sensitive data practices are not hidden only in legal text

---

# 14. Provider Functional Requirements

## PRO-001 — Provider Homepage

**Priority:** P0

A dedicated Provider homepage must exist.

It must explain:

- The clinical fragmentation problem
- The value of longitudinal review
- The ODRISC platform identity
- The relationship between maternal and fetal intelligence
- The role of clinical decision support
- Current product status
- The approved professional next action

### Acceptance Criteria

- Clinical relevance is established early
- Provider terminology is used accurately
- Clinical judgment remains central
- The page follows the approved Provider story
- Methodology and validation routes are visible
- The primary Provider CTA is clear
- No unsupported regulatory claim is made

---

## PRO-002 — Clinical Platform Overview

**Priority:** P0

The Provider journey must include a structured overview of the clinical platform.

The overview may include:

- Maternal monitoring
- Fetal-growth intelligence
- Longitudinal timelines
- Risk information
- Weight trajectory
- Patient-reported information
- Clinical summaries
- Collaboration
- Workflow
- Future integrations

### Acceptance Criteria

- Capability statuses are visible where required
- The page does not present a disconnected feature catalogue
- Each capability is related to a clinical need
- Patient and Provider roles are distinguished
- Roadmap capabilities are clearly labeled

---

## PRO-003 — Maternal Intelligence Explanation

**Priority:** P1 unless approved for launch

The website should explain the intended maternal-intelligence layer.

### Acceptance Criteria

- Inputs are described accurately
- Outputs are not described as autonomous diagnosis
- Available and planned elements are distinguished
- The relationship to monitoring is clear
- The explanation is reviewable by clinical stakeholders

---

## PRO-004 — Fetal-Growth Intelligence Explanation

**Priority:** P1 unless approved for launch

The website should explain the intended fetal-growth intelligence layer.

Potential topics include:

- Gestational-age anchoring
- Longitudinal scan review
- Fetal biometry
- Estimated fetal weight
- Percentiles
- Z-scores
- Growth velocity
- Centile movement
- Customized growth
- Doppler context

### Acceptance Criteria

- No calculation or methodology is presented inaccurately
- Clinical standards are cited appropriately
- Product status is visible
- Decision support is distinguished from diagnosis
- Professional interpretation remains central
- Specialist terminology is defined where required

---

## PRO-005 — Workflow Explanation

**Priority:** P0

The Provider journey must explain how ODRISC may fit into clinical workflow.

### Acceptance Criteria

- The workflow identifies Patient and Provider actions
- Data entry or collection sources are represented accurately
- The workflow identifies where professional review occurs
- The workflow avoids implying real-time monitoring unless implemented
- Responsibility for alerts or escalation is not left ambiguous
- Current workflow and future workflow are distinguished

---

## PRO-006 — Validation Page

**Priority:** P0

A validation or evidence route must exist before strong clinical adoption claims are made.

### Acceptance Criteria

- Validation types are distinguished
- Panel participation is not described as clinical validation
- Pilot use is not described as proven effectiveness
- Methodology is summarized
- Limitations are visible
- Evidence sources are cited
- Product status and regulatory status are accurate
- Unsupported claims are excluded

---

## PRO-007 — Methodology Page

**Priority:** P1

The Provider journey should provide methodology information appropriate to the public website.

### Acceptance Criteria

- It explains relevant logic without exposing restricted intellectual property
- Clinical standards are referenced accurately
- Versions and dates are included where material
- Limitations are acknowledged
- Conflicting standards are not combined without explanation
- The content is reviewed by the appropriate clinical owner

---

## PRO-008 — Provider Demonstration Route

**Priority:** P0

The website must provide a route for qualified Providers to request a demonstration or equivalent professional conversation.

### Acceptance Criteria

- The form identifies the visitor's professional role
- The form collects only necessary information
- The visitor understands what will happen after submission
- Consent language is visible
- Submissions are routed to an approved owner
- The action is tracked
- A success message is shown
- The form does not request patient medical information

---

## PRO-009 — Pilot Enquiry

**Priority:** P1

When pilots are available, the Provider journey should support pilot enquiries.

### Acceptance Criteria

- Pilot availability is accurate
- Suitable organization types are explained
- Expected commitment is described at an appropriate level
- The enquiry does not imply automatic acceptance
- Product status and validation status remain clear
- The action is tracked separately from demonstration requests

---

## PRO-010 — Hospitals and Institutions

**Priority:** P1

The website should provide an institutional pathway for hospitals, healthcare systems, fertility centers, insurers, employers, government stakeholders, and strategic partners.

### Acceptance Criteria

- Institutional value is explained separately from individual Provider value
- Implementation, governance, security, and integration topics are addressed
- Enterprise readiness is not overstated
- A relevant contact route is provided
- Qatar and GCC context may be included where approved
- Institutional visitors are not added to the primary audience gateway

---

## PRO-011 — Security and Privacy Information

**Priority:** P0 for clinical trust; depth may be P1

The Provider journey must provide appropriate security and privacy information.

### Acceptance Criteria

- Claims match actual implementation
- Compliance is not implied without confirmation
- Role-based access is only described if implemented or clearly marked as planned
- Data-hosting claims are accurate
- Privacy and security contacts are available where required
- The page does not reveal sensitive infrastructure details

---

## PRO-012 — Product Demonstration Media

**Priority:** P1

Provider pages may include screenshots, prototypes, diagrams, or videos.

### Acceptance Criteria

- Visuals are labeled as current, prototype, concept, or future where required
- No fabricated operational data is presented as real patient data
- Patient information is de-identified
- Product status matches the visual
- Interfaces are readable
- Visuals support the story rather than act as decoration

---

# 15. Shared Company and Trust Requirements

## CON-001 — About ODRISC

**Priority:** P0

The website must include an About page explaining:

- Why ODRISC exists
- The product mission
- The Patient and Provider connection
- The company direction
- The founder motivation
- The team's relevant expertise

### Acceptance Criteria

- Founder story is accurate
- Personal history is not presented as clinical evidence
- Team roles are current
- Unsupported credentials are excluded
- The mission aligns with Product Vision
- The page does not replace product explanation with biography

---

## CON-002 — Team Information

**Priority:** P1

The website should present relevant team members and roles.

### Acceptance Criteria

- Names and titles are approved
- Employment or advisory status is accurate
- Professional qualifications are represented correctly
- Former or unconfirmed roles are not presented as current
- Contact details are not exposed without consent

---

## CON-003 — Partnerships

**Priority:** P1

The website may include partnership information.

### Acceptance Criteria

- Partnerships are verified
- Discussions are not presented as signed partnerships
- Pilot interest is not presented as implementation
- Logos are used only with permission
- Strategic programs are described accurately

---

## CON-004 — Resources

**Priority:** P1

The website should support Patient and Provider resources.

### Acceptance Criteria

- Resources identify the intended audience
- Clinical content is reviewed
- Publication and review dates are shown where appropriate
- References are included
- Outdated content can be archived
- Resource pages link back to relevant product journeys
- Patient and Provider content are not duplicated unnecessarily

---

## CON-005 — Frequently Asked Questions

**Priority:** P0

Patient and Provider journeys must address common questions.

### Acceptance Criteria

- Patient and Provider FAQs are separated or clearly labeled
- Clinical boundaries are included
- Product availability is accurate
- Privacy concerns are addressed
- Pricing questions are current where relevant
- FAQs are searchable and accessible

---

# 16. Content Requirements

## 16.1 Audience-Specific Language

Patient and Provider content must use different levels of terminology and depth.

## 16.2 Claim Governance

Every clinical, product, validation, market, regulatory, or outcome claim must be traceable to an approved source.

## 16.3 Product Status

Content must use the approved status labels:

- Available
- Limited availability
- Pilot
- In validation
- In development
- Planned
- Future roadmap
- Not publicly announced

## 16.4 Source and Review Dates

Clinical and market content should include:

- Source
- Publication date
- Review date
- Reviewer where required
- Geographic or population context

## 16.5 Terminology

Terminology must follow:

`docs/project/GLOSSARY.md`

## 16.6 Founder Story

Founder-story content must follow the boundaries defined in:

`docs/product/WEBSITE_STORY.md`

## 16.7 Market Language

Qatar, India, GCC, and global claims must not be used interchangeably.

## 16.8 Content Maintainability

Repeated content such as:

- Contact information
- Product status
- Pricing
- Team roles
- Legal entity information
- Market availability
- Common disclaimers

should be maintained from a controlled source wherever technically practical.

---

# 17. Information Architecture Requirements

The future `INFORMATION_ARCHITECTURE.md` must define:

- Full sitemap
- URL structure
- Audience-routing rules
- Navigation labels
- Shared and audience-specific pages
- Parent-child page relationships
- Breadcrumb behavior
- Footer architecture
- Resource taxonomy
- Content ownership
- Redirect strategy
- Localization structure

The information architecture must preserve:

- One domain
- Two primary journeys
- Shared company pages
- Shared legal pages
- Clear audience switching
- Search-intent separation
- Product-status transparency

---

# 18. User Experience Requirements

## UX-001 — Story Progression

**Priority:** P0

Major pages must follow a narrative progression rather than an unordered feature list.

## UX-002 — Progressive Disclosure

**Priority:** P0

Clinical and technical depth must be disclosed progressively.

## UX-003 — Clear Primary Action

**Priority:** P0

Each major page must have one primary CTA.

## UX-004 — Predictable Interaction

**Priority:** P0

Buttons, links, accordions, forms, and navigation must behave consistently.

## UX-005 — Error Recovery

**Priority:** P0

Users must receive understandable error messages and recovery options.

## UX-006 — Reduced Cognitive Load

**Priority:** P0

Pages must not overwhelm Patients with clinical complexity or Providers with unnecessary marketing language.

## UX-007 — Mobile Story Integrity

**Priority:** P0

The narrative sequence must remain coherent on mobile.

## UX-008 — Animation Restraint

**Priority:** P0

Animation must support:

- Progression
- Connection
- Hierarchy
- Data transformation

Animation must not block reading or interaction.

## UX-009 — User Control

**Priority:** P0

Users must be able to:

- Pause or reduce non-essential motion where required
- Navigate without scroll hijacking
- Access content without waiting for decorative animation
- Use the website with keyboard interaction

## UX-010 — Form Clarity

**Priority:** P0

Forms must clearly explain:

- Why information is collected
- Which fields are required
- What happens after submission
- How information will be used

---

# 19. Design Requirements

Detailed decisions belong in:

- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`

The website must follow these approved high-level requirements:

## 19.1 Brand Character

The website must feel:

- Premium
- Minimalist
- Clinical
- Calm
- Trustworthy
- Modern
- Human
- Precise

## 19.2 Core Visual Foundation

- White background
- High negative space
- Primary text color `#4d4d4d`
- Linear gradient using `#ff7680` and `#80ffcc`
- Restrained use of icons
- Clear typography
- Minimalist components
- Accessible contrast

## 19.3 Visual Storytelling

The design should visually move from:

```text
Fragmentation
→
Connection
→
Progression
→
Intelligence
→
Collaboration
```

## 19.4 Patient Design

Patient design should prioritize:

- Clarity
- Reassurance
- Progress
- Guided actions
- Understandable visualizations
- Non-stigmatizing presentation

## 19.5 Provider Design

Provider design should prioritize:

- Clinical hierarchy
- Data progression
- Efficient review
- Explainability
- Detail on demand
- Workflow context

## 19.6 Visual Restrictions

Avoid:

- Excessive decorative gradients
- Generic AI imagery
- Robots or neural-network imagery
- Alarmist medical graphics
- Excessive stock photography
- Dense dashboards without explanation
- Pregnancy stereotypes
- Weight-shaming imagery

---

# 20. Accessibility Requirements

The target standard should be defined in Engineering and Design documentation.

At minimum, the website must aim to meet WCAG 2.2 Level AA requirements where applicable.

## ACC-001 — Keyboard Access

**Priority:** P0

All essential functionality must be keyboard accessible.

## ACC-002 — Semantic Structure

**Priority:** P0

Pages must use meaningful heading, landmark, list, form, and navigation structures.

## ACC-003 — Text Contrast

**Priority:** P0

Text and essential controls must meet required contrast levels.

Gradient text must not reduce readability.

## ACC-004 — Alternative Text

**Priority:** P0

Meaningful images, charts, and diagrams must have appropriate alternatives.

## ACC-005 — Motion

**Priority:** P0

Reduced-motion preferences must be respected.

## ACC-006 — Forms

**Priority:** P0

Form labels, errors, instructions, and status messages must be accessible.

## ACC-007 — Focus Visibility

**Priority:** P0

Keyboard focus must remain visible.

## ACC-008 — Data Visualization

**Priority:** P0

Meaning must not depend on color alone.

## ACC-009 — Readability

**Priority:** P0

Patient content must use clear language and readable spacing.

## ACC-010 — Testing

**Priority:** P0

Accessibility testing must include automated and manual review.

---

# 21. SEO Requirements

## SEO-001 — Search-Intent Separation

**Priority:** P0

Patient and Provider pages must target distinct search intent.

## SEO-002 — Indexable Content

**Priority:** P0

Public content intended for discovery must be indexable.

## SEO-003 — Metadata

**Priority:** P0

Every public page must have:

- Unique title
- Unique meta description
- Canonical URL
- Appropriate social metadata
- Audience-appropriate wording

## SEO-004 — Structured Data

**Priority:** P1

Applicable structured data may include:

- Organization
- Website
- Article
- FAQ
- Breadcrumb
- Person
- Software or application information where appropriate

Structured data must not make unsupported claims.

## SEO-005 — Technical SEO

**Priority:** P0

The website must support:

- XML sitemap
- Robots directives
- Canonical tags
- Redirect management
- Error-page handling
- Clean URL structure
- Mobile usability
- Performance monitoring

## SEO-006 — Medical Content Quality

**Priority:** P0

Clinical content must demonstrate:

- Relevant authorship or review
- Source references
- Review dates
- Responsible language
- Clear limitations

## SEO-007 — International SEO

**Priority:** P1

When multiple languages or regional versions are launched, the website must support an approved international SEO structure.

---

# 22. Analytics Requirements

Analytics must be implemented in a privacy-conscious manner.

## ANL-001 — Audience Selection Events

Track:

- Audience selector viewed
- Patient selected
- Provider selected
- Audience switched

## ANL-002 — Patient Conversion Events

Track as applicable:

- Risk assessment CTA clicked
- Risk assessment started
- Risk assessment completed
- Patient account CTA clicked
- Registration started
- Registration completed
- Membership viewed
- Purchase initiated
- Purchase completed
- Application access clicked

## ANL-003 — Provider Conversion Events

Track:

- Demonstration CTA clicked
- Demonstration form started
- Demonstration form submitted
- Pilot enquiry started
- Pilot enquiry submitted
- Clinical resource viewed
- Validation page viewed
- Hospital page viewed

## ANL-004 — Content Engagement

Track:

- Resource views
- Scroll milestones where meaningful
- Video engagement
- FAQ interaction
- Downloads
- Outbound platform links

## ANL-005 — Error Events

Track:

- Form failure
- Broken route
- Missing destination
- Failed conversion handoff
- Technical errors that affect user experience

## ANL-006 — Audience Segmentation

Reporting should distinguish:

- Shared journey
- Patient journey
- Provider journey
- Institutional journey
- Market or language where legally appropriate

## ANL-007 — Consent

Analytics must respect applicable consent requirements.

## ANL-008 — Data Minimization

Do not send sensitive health information, form content, risk answers, or identifiable medical data into general analytics systems.

---

# 23. Performance Requirements

Detailed technical thresholds should be finalized in Engineering documentation.

## PER-001 — Core Web Performance

**Priority:** P0

The website should meet strong Core Web Vitals targets under realistic conditions.

## PER-002 — Mobile Priority

**Priority:** P0

Performance must be tested on mobile networks and mid-range devices.

## PER-003 — Image Optimization

**Priority:** P0

Images must use responsive sizing, modern formats, and appropriate compression.

## PER-004 — Animation Performance

**Priority:** P0

Animation must not cause persistent layout instability or excessive processing.

## PER-005 — Font Loading

**Priority:** P0

Font loading must not block access to essential content.

## PER-006 — JavaScript Restraint

**Priority:** P0

Essential content must not depend on unnecessary client-side JavaScript.

## PER-007 — Third-Party Scripts

**Priority:** P0

Third-party scripts must be reviewed for:

- Performance
- Privacy
- Security
- Necessity

## PER-008 — Monitoring

**Priority:** P1

Production performance should be monitored after launch.

---

# 24. Security Requirements

## SEC-001 — Secure Transport

**Priority:** P0

All production traffic must use secure HTTPS.

## SEC-002 — Form Protection

**Priority:** P0

Forms must be protected from common abuse and injection risks.

## SEC-003 — Dependency Management

**Priority:** P0

Dependencies must be reviewed and updated responsibly.

## SEC-004 — Secret Management

**Priority:** P0

Secrets must not be committed to the repository or exposed to the browser.

## SEC-005 — Administrative Access

**Priority:** P0

Any content-management or administrative access must require appropriate authentication.

## SEC-006 — Security Headers

**Priority:** P0

Appropriate security headers should be configured.

## SEC-007 — Error Exposure

**Priority:** P0

Production errors must not expose internal system details.

## SEC-008 — Vulnerability Response

**Priority:** P1

A process must exist for identifying and responding to security issues.

---

# 25. Privacy Requirements

## PRV-001 — Privacy Policy

**Priority:** P0

A current Privacy Policy must be publicly accessible.

## PRV-002 — Consent

**Priority:** P0

Consent must be obtained where required for:

- Analytics
- Marketing communication
- Contact submission
- Account or application handoff

## PRV-003 — Data Minimization

**Priority:** P0

Public website forms must collect only necessary information.

## PRV-004 — Medical Information

**Priority:** P0

General website forms must not encourage submission of detailed patient medical information.

## PRV-005 — Provider Enquiries

**Priority:** P0

Provider forms must not request identifiable patient data.

## PRV-006 — Third-Party Services

**Priority:** P0

Third-party services must be documented and reviewed.

## PRV-007 — Market Compliance

**Priority:** P1

Privacy implementation must be reviewed for the launch market.

---

# 26. Localization Requirements

## LOC-001 — Localization-Ready Architecture

**Priority:** P0

The website must be structured so content can be localized without duplicating the application architecture.

## LOC-002 — Language Separation

**Priority:** P1

Localized content must be maintained separately from code where practical.

## LOC-003 — Arabic Readiness

**Priority:** P1

The Qatar launch architecture must prepare for Arabic.

This includes:

- Right-to-left layout
- Navigation
- Form alignment
- Typography
- Icons
- Charts
- Animation direction
- Mixed-language content
- Metadata
- Structured data

## LOC-004 — Translation Governance

**Priority:** P1

Clinical translation must be reviewed by qualified language and clinical reviewers.

## LOC-005 — Market-Specific Content

**Priority:** P1

Pricing, availability, legal language, contacts, and clinical references may differ by market.

## LOC-006 — URL Strategy

**Priority:** P1

The localization URL strategy must be defined in Information Architecture.

---

# 27. Integration Requirements

## INT-001 — Patient Application Handoff

**Priority:** P0 if the Patient application is available

The website must provide a clear transition to the approved Patient application or registration experience.

### Acceptance Criteria

- The destination is correct
- The user understands they are leaving the informational website if applicable
- Tracking is implemented
- Authentication status is handled appropriately
- Failure states are addressed
- Market availability is checked

---

## INT-002 — Provider Platform Handoff

**Priority:** P1

When Provider access is available, the website must provide an approved login or access route.

### Acceptance Criteria

- The login route is clearly distinguished from demo or pilot enquiry
- Unavailable access is not presented
- Security is appropriate
- Audience context is preserved
- The destination is tracked

---

## INT-003 — Form Delivery

**Priority:** P0

Contact and conversion forms must route submissions reliably.

### Acceptance Criteria

- Approved recipients are configured
- Duplicate submission handling is defined
- Failure notifications are available
- Submission records are retained according to policy
- No sensitive information is exposed in email subject lines or analytics

---

## INT-004 — Analytics

**Priority:** P0

The website must integrate an approved analytics system.

## INT-005 — Search Console and Webmaster Tools

**Priority:** P0

The website should support relevant search-engine verification and monitoring.

## INT-006 — Content Management

**Priority:** P1

Frequently updated content should be manageable without unsafe code changes where practical.

## INT-007 — Email and CRM

**Priority:** P1

Provider and institutional enquiries may integrate with an approved CRM or contact-management workflow.

## INT-008 — Scheduling

**Priority:** P2

Professional enquiries may later support calendar scheduling if operationally appropriate.

---

# 28. Content Management Requirements

The content-management approach must support:

- Draft
- Review
- Approval
- Publication
- Update
- Archive
- Product-status change
- Clinical review
- Legal review
- Localization
- Version history where practical

Content roles may include:

- Author
- Clinical reviewer
- Product reviewer
- Legal or privacy reviewer
- Localization reviewer
- Publisher

The final workflow will be documented in content-governance documentation.

---

# 29. Conversion Requirements

## 29.1 Patient Funnel

The Patient journey should support:

```text
Recognition
↓
Understanding
↓
Trust
↓
Capability relevance
↓
Primary Patient action
```

## 29.2 Provider Funnel

The Provider journey should support:

```text
Clinical relevance
↓
Platform understanding
↓
Methodology and validation
↓
Workflow confidence
↓
Primary Provider action
```

## 29.3 Conversion Integrity

Conversions must:

- Match visitor readiness
- Match product availability
- Explain what happens next
- Avoid deceptive urgency
- Avoid unsupported benefit claims
- Avoid inaccessible or unavailable destinations
- Be measurable

---

# 30. Website Release Scope

The final launch scope must be confirmed through:

`docs/product/PRODUCT_STATUS.md`

A recommended minimum public launch scope is listed below.

## 30.1 P0 Shared Launch Scope

- Shared audience entry
- Patient homepage
- Provider homepage
- Audience switching
- About page
- Contact page
- Privacy Policy
- Terms
- Core FAQs
- Product-status governance
- Analytics
- SEO foundations
- Accessibility foundations
- Responsive design
- Performance monitoring
- Error pages
- Sitemap and robots configuration

## 30.2 Conditional Patient Launch Scope

Include only when operationally available:

- Risk-assessment route
- Patient account route
- Weight-monitoring route
- Membership or pricing
- Nutrition route
- Physical-activity route
- Application access

## 30.3 Conditional Provider Launch Scope

Include only when approved:

- Clinical platform overview
- Maternal intelligence
- Fetal-growth intelligence
- Workflow
- Validation
- Methodology
- Demonstration request
- Pilot enquiry
- Hospital or enterprise pathway

---

# 31. Out-of-Scope Launch Items

Unless separately approved, the initial website launch should not require:

- Full Patient account management
- Full Provider dashboard
- Live clinical data
- Real patient records
- Real-time alerts
- Clinical chat
- Emergency triage
- FHIR integration
- Electronic-health-record integration
- Hospital administration
- Patient-provider messaging
- Automated report interpretation
- Full Arabic launch
- Complex content personalization
- Multi-market pricing engine
- Public clinical algorithm documentation
- Investor data room

---

# 32. Acceptance Requirements by Page

Every major page must pass the following review.

## 32.1 Strategic Acceptance

- Does the page support an approved website objective?
- Does it serve a defined audience?
- Does it fit the Website Story?
- Does it preserve Product Vision?

## 32.2 Content Acceptance

- Are claims approved?
- Is product status accurate?
- Is terminology correct?
- Is the audience clear?
- Is the CTA available?
- Are limitations included?

## 32.3 UX Acceptance

- Is the next action clear?
- Is the page understandable on mobile?
- Is the hierarchy clear?
- Can the page be used with keyboard?
- Are error states defined?

## 32.4 Design Acceptance

- Does the page follow the Design System?
- Is contrast sufficient?
- Is animation purposeful?
- Are visuals understandable?
- Does the page preserve the unified brand?

## 32.5 Engineering Acceptance

- Does the page meet performance expectations?
- Does tracking work?
- Does the page render correctly?
- Are metadata and canonical tags correct?
- Are security and privacy requirements met?
- Are broken links absent?

---

# 33. Quality Assurance Requirements

Testing must cover:

- Desktop browsers
- Mobile browsers
- Responsive breakpoints
- Keyboard navigation
- Screen-reader basics
- Form validation
- Form submission
- Error states
- Audience switching
- Analytics events
- Metadata
- Search-engine indexability
- Redirects
- Broken links
- Image loading
- Reduced motion
- Right-to-left readiness where applicable
- Performance
- Security headers
- Cookie and consent behavior

A separate testing specification may be created later.

---

# 34. Success Metrics

Final numerical targets must be defined through approved analytics and commercial planning.

## 34.1 Shared Metrics

- Audience selector completion rate
- Patient versus Provider selection
- Audience-switch rate
- Homepage engagement
- Navigation success
- Contact conversion
- Organic search traffic
- Returning visitors
- Mobile performance
- Accessibility issue rate

## 34.2 Patient Metrics

- Patient CTA click rate
- Risk-assessment starts
- Risk-assessment completion
- Registration starts
- Registration completion
- Membership-page engagement
- Application handoff
- Patient-resource engagement

## 34.3 Provider Metrics

- Demonstration CTA click rate
- Demonstration submissions
- Pilot enquiries
- Validation-page engagement
- Methodology-page engagement
- Clinical-resource engagement
- Hospital-page engagement
- Qualified Provider conversion

## 34.4 Technical Metrics

- Core Web Vitals
- Error rate
- Form failure rate
- Broken-link rate
- Uptime
- Page-load performance
- Accessibility compliance
- Search indexing coverage

## 34.5 Content Metrics

- Resource engagement
- Search visibility
- Time to update changed product status
- Content review completion
- Outdated-content rate

---

# 35. Dependencies

Website delivery depends on:

- Approved Product Status
- Approved Patient conversion
- Approved Provider conversion
- Final Information Architecture
- Approved page inventory
- Brand Foundation
- Design System
- Animation Guidelines
- Technical stack
- Hosting and deployment decision
- Form-delivery system
- Analytics decision
- Privacy and legal documents
- Clinical claim review
- Validation wording
- Product screenshots or prototypes
- Qatar market requirements
- Arabic localization decision
- Current team information
- Current pricing and availability
- Application and platform destinations

---

# 36. Risks

## 36.1 Product-Status Risk

Roadmap capabilities may accidentally be presented as available.

**Mitigation:** Mandatory Product Status review.

## 36.2 Clinical-Claim Risk

Marketing language may overstate clinical value.

**Mitigation:** Clinical review and source traceability.

## 36.3 Audience-Mixing Risk

Patient and Provider messaging may become undifferentiated.

**Mitigation:** Separate journeys and audience-specific content review.

## 36.4 Regulatory Risk

Website wording may imply unapproved medical-device or diagnostic status.

**Mitigation:** Legal and regulatory review.

## 36.5 Trust Risk

Visual polish may exceed evidence or product maturity.

**Mitigation:** Transparent status, validation, and limitations.

## 36.6 Localization Risk

English-first structures may not support Arabic effectively.

**Mitigation:** Right-to-left readiness during architecture and design.

## 36.7 Performance Risk

Animation and rich media may reduce speed.

**Mitigation:** Performance budgets and motion restraint.

## 36.8 Content-Maintenance Risk

Repeated claims may become inconsistent.

**Mitigation:** Controlled content sources and ownership.

## 36.9 Form-Operations Risk

Leads may not receive timely follow-up.

**Mitigation:** Defined routing, ownership, and monitoring.

## 36.10 Privacy Risk

Visitors may submit sensitive medical information through general forms.

**Mitigation:** Clear instructions, minimal fields, and form design.

---

# 37. Assumptions

This PRD currently assumes:

1. `odrisc.com` remains the official public domain.
2. Patients and Providers remain equal primary audiences.
3. The website remains one brand and one platform.
4. The public website is separate from the complete Patient and Provider applications.
5. Qatar remains the planned primary commercial market.
6. India remains important for development, validation, and early implementation.
7. Arabic is required for Qatar commercialization, but its launch timing remains to be confirmed.
8. Product capabilities will be governed through `PRODUCT_STATUS.md`.
9. Clinical and regulatory claims require approval before publication.
10. The final implementation stack has not been defined by this PRD.
11. The website will be responsive and accessible.
12. Analytics will be implemented with privacy controls.
13. The website will support future expansion across GCC markets.
14. Information Architecture will be documented separately.
15. Detailed page specifications will be documented after Information Architecture.

---

# 38. Open Questions

All unresolved questions must be tracked in:

`docs/project/OPEN_QUESTIONS.md`

The PRD must not create a separate unmanaged question register.

Blocking questions include:

- Final Patient primary conversion
- Final Provider primary conversion
- Launch capability statuses
- Launch page inventory
- Shared gateway behavior
- Audience persistence
- Patient and Provider URL structures
- Pricing availability
- Validation claims
- Regulatory positioning
- Qatar-specific content
- Arabic launch timing
- Application handoff
- Provider platform access
- Form ownership
- Analytics and consent system
- Content-management approach
- Hosting and deployment
- Clinical review process

---

# 39. Change Control

Material PRD changes require:

1. Identification of the proposed change
2. Reason for the change
3. Impacted audiences
4. Impacted requirements
5. Product-status impact
6. Clinical or legal impact
7. Design and engineering impact
8. Approval
9. Documentation update
10. Decision record where material

A visual mockup, generated page, prototype, or existing implementation does not automatically change this PRD.

---

# 40. Requirements Traceability

Future specifications should reference requirement identifiers.

Examples:

```text
Patient homepage specification
→ PAT-001
→ PAT-007
→ PAT-008
→ UX-001
→ ACC-001
→ SEO-003
→ ANL-002
```

```text
Provider demonstration form
→ PRO-008
→ UX-010
→ SEC-002
→ PRV-003
→ ANL-003
→ INT-003
```

The Page Requirements document should map every page to:

- Audience
- Website objective
- Website-story stage
- PRD requirements
- Product-status dependencies
- Primary CTA
- Analytics events
- Acceptance criteria

---

# 41. Rules for AI Agents

Before generating website code, content, page layouts, or components, AI agents must read:

1. `PROJECT_CONTEXT.md`
2. `docs/project/SOURCE_OF_TRUTH.md`
3. `ai/rules/NON_NEGOTIABLES.md`
4. `docs/product/PRODUCT_VISION.md`
5. `docs/product/AUDIENCE.md`
6. `docs/product/WEBSITE_OBJECTIVES.md`
7. `docs/product/WEBSITE_STORY.md`
8. `docs/product/PRD.md`
9. `docs/product/PRODUCT_STATUS.md`
10. Relevant design and engineering documents

AI agents must:

- Identify the relevant PRD requirement IDs
- Identify the audience
- Identify the story stage
- Check product status
- Preserve clinical boundaries
- Use approved terminology
- Implement measurable interactions
- Record material assumptions
- Avoid creating requirements that conflict with this PRD

AI agents must not:

- Invent capabilities
- Invent availability
- Invent validation
- Invent regulatory approval
- Create a separate Patient or Provider brand
- Replace the website story with generic AI messaging
- Build application functionality inside the public website without approval
- Change conversion actions without approval
- Publish sensitive or restricted information
- Treat mockups as evidence of implementation
- Skip accessibility, analytics, performance, or privacy requirements

---

# 42. Definition of Website Launch Ready

The website is launch ready only when:

## Product

- Launch scope is approved
- Product Status is current
- Patient and Provider conversions are approved
- Page inventory is complete
- Required destinations work

## Content

- Patient and Provider copy is approved
- Clinical claims are reviewed
- Validation wording is approved
- Founder and team information is current
- Legal content is current
- Product-status language is accurate

## Design

- Design System is implemented
- Responsive behavior is approved
- Accessibility is reviewed
- Animation is purposeful
- Patient and Provider experiences remain connected

## Engineering

- Production deployment is stable
- Forms work
- Analytics works
- SEO foundations are complete
- Performance is acceptable
- Security controls are configured
- Error pages work
- Redirects work
- Monitoring is enabled

## Operations

- Form recipients are defined
- Lead follow-up ownership is assigned
- Content ownership is assigned
- Product-status review ownership is assigned
- Security and privacy contacts are defined
- Update procedures are documented

---

# 43. Foundational Requirement Summary

The ODRISC website must be one unified public platform serving Patients and healthcare providers through two complete audience-specific journeys.

The website must:

- Explain pregnancy as a longitudinal story
- Present fragmentation as the central problem
- Present longitudinal maternal and fetal intelligence as the ODRISC response
- Support Patient understanding and informed participation
- Support Provider evaluation and adoption
- Strengthen Patient-Provider collaboration
- Preserve clinical judgment
- Distinguish current, pilot, developing, and future capabilities
- Build trust through evidence, transparency, privacy, and responsible language
- Remain accessible, responsive, performant, secure, measurable, and localization-ready

The public website must not attempt to become the full clinical platform.

Its role is to help the right visitor understand ODRISC, trust ODRISC, and take the next appropriate action.

---

# 44. Page Requirement Section

Detailed requirements for every approved public page are defined in:

`docs/product/PAGE_REQUIREMENTS.md`

Every implemented page must map to:

- A stable Page ID
- An approved canonical route
- Relevant PRD requirement identifiers
- Product Status
- Website Story stage
- Primary CTA
- Analytics events
- Acceptance criteria

## SHR-012 — Page Requirements Compliance

**Priority:** P0

Every public website page must comply with its approved specification in `docs/product/PAGE_REQUIREMENTS.md`.

### Acceptance Criteria

- The page has a stable Page ID.
- The canonical route matches Information Architecture.
- The primary audience and purpose are preserved.
- Required sections are present.
- The CTA destination works.
- Product Status is accurate.
- Required analytics events are implemented.
- Accessibility and SEO requirements are satisfied.
- The Route Registry and Requirements Traceability are updated.

---

# 45. Design Requirement Section

The canonical brand strategy, personality, voice, visual character, color roles, imagery, trust expression, accessibility principles, and localization direction are defined in:

`docs/design/BRAND_FOUNDATION.md`

Detailed design tokens, layout rules, component specifications, responsive behavior, states, and implementation guidance will be defined in:

`docs/design/DESIGN_SYSTEM.md`

Motion behavior will be defined in:

`docs/design/ANIMATION_GUIDELINES.md`

## SHR-013 — Brand Foundation Compliance

**Priority:** P0

All public website content, design, imagery, diagrams, motion, and interface presentation must comply with `docs/design/BRAND_FOUNDATION.md`.

### Acceptance Criteria

- ODRISC is presented as one master brand.
- Patient and Provider experiences remain visually connected.
- Approved colors and positioning are used correctly.
- Voice matches the intended audience.
- Prohibited claims and visual expressions are absent.
- Product Status and validation maturity are transparent.
- Accessibility and localization requirements are preserved.

## SHR-014 — Design-System Compliance

**Priority:** P0

All public pages and reusable interface components must comply with `docs/design/DESIGN_SYSTEM.md`.

### Acceptance Criteria

- Documented design tokens are used.
- Typography follows the approved scales.
- Responsive layouts use the approved grid and containers.
- Components support all required states.
- Patient and Provider experiences remain visually connected.
- Accessibility and RTL behavior are implemented.
- Product Status and clinical states use their approved systems.
- No undocumented design values are introduced without approval.

## SHR-015 — Animation-Guidelines Compliance

**Priority:** P0

All website motion and animation must comply with `docs/design/ANIMATION_GUIDELINES.md`.

### Acceptance Criteria

- Every significant animation has a defined purpose.
- Essential content remains available without animation.
- Reduced-motion alternatives are implemented.
- Native scrolling is preserved.
- Scroll hijacking is absent.
- Clinical meaning and Product Status remain accurate.
- Motion performs acceptably on mobile devices.
- RTL behavior is reviewed.
- No prohibited motion pattern is present.

## SHR-016 — Technology-Stack Compliance

**Priority:** P0

The public website must be implemented using the approved technologies and constraints defined in `docs/engineering/TECH_STACK.md`.

### Acceptance Criteria

- Approved runtime and package-manager versions are used.
- The Next.js App Router is used.
- Server Components are the default.
- Public pages use the approved rendering strategy.
- Styling consumes ODRISC design tokens.
- Localization supports English, Arabic, and RTL.
- External data is validated.
- Analytics respects consent.
- Automated testing and accessibility checks run in CI.
- Production uses the approved Docker and standalone-output model.
- No prohibited technology is introduced without approval.

## SHR-017 — Engineering-Architecture Compliance

**Priority:** P0

The public website must comply with the system boundaries, rendering model, module structure, integration architecture, security zones, runtime configuration, deployment topology, and rollback requirements defined in `docs/engineering/ARCHITECTURE.md`.

### Acceptance Criteria

- Public pages use the approved rendering strategy.
- Server and Client Component boundaries are justified.
- Routes map to approved Page IDs.
- External services are accessed through adapters.
- Product Status uses one controlled source.
- Public forms follow the approved processing flow.
- Analytics remains consent controlled.
- Clinical data remains outside the public website.
- Runtime configuration does not expose secrets.
- Deployment and rollback use immutable images.
- Architecture validation runs in CI.

## SHR-018 — Component-Library Compliance

**Priority:** P0

Public pages and features must use the approved reusable components and composition rules defined in `docs/engineering/COMPONENT_LIBRARY.md`.

### Acceptance Criteria

- Approved Component IDs are used.
- Existing components are reused before new ones are introduced.
- Server and Client classifications are respected.
- Patient and Provider variants share one foundation.
- Product Status comes from the controlled source.
- Accessibility, RTL, and reduced-motion contracts are implemented.
- External integrations remain outside UI components.
- Storybook and required tests are complete.
- No duplicate or undocumented component is introduced.

## SHR-019 — Coding-Standards Compliance

**Priority:** P0

All public-website source, configuration, tests, scripts, and infrastructure code
must comply with `docs/engineering/CODING_STANDARDS.md`.

### Acceptance Criteria

- Formatting passes.
- Linting passes with zero warnings.
- Strict TypeScript passes.
- Runtime boundaries are validated.
- Server and Client Component rules are followed.
- Accessibility, Arabic, RTL, and reduced-motion rules are implemented.
- Product Status and clinical boundaries remain accurate.
- Sensitive data is excluded from logs and analytics.
- Required tests pass.
- No unapproved dependency or exception is introduced.

## SHR-020 — Testing and Release-Quality Compliance

**Priority:** P0

Every public-website feature and release must provide the test and quality
evidence defined in `docs/engineering/TESTING_STRATEGY.md`.

### Acceptance Criteria

- Requirements are traceable to tests or approved manual evidence.
- Static validation passes.
- Unit, component, integration, and contract tests pass where applicable.
- P0 browser journeys pass.
- Accessibility automation and required manual review pass.
- Arabic, RTL, and reduced-motion tests pass where applicable.
- Visual changes are reviewed.
- Coverage thresholds pass.
- No blocking defect, unapproved skip, or P0 quarantine remains.
- Staging verification passes.
- Production smoke is non-destructive and passes.
- Rollback is verified.
