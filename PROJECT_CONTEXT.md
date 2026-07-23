# ODRISC Website — Project Context

## Document Status

**Status:** Foundational
**Authority:** Canonical project context
**Website domain:** `odrisc.com`
**Primary audiences:** Patients and healthcare providers
**Project stage:** Documentation and knowledge-base development
**Application development:** Not yet initialized

---

## 1. Purpose of This Document

This document provides the canonical context for the design, content, development, review, and continued evolution of the ODRISC website.

It must be read before:

* Defining the website architecture
* Writing website content
* Creating page layouts
* Designing components
* Generating visual assets
* Implementing frontend code
* Adding animations
* Configuring analytics
* Planning search engine optimization
* Integrating forms, dashboards, portals, or clinical workflows
* Using an AI coding or design assistant within this repository

This document exists to ensure that every human contributor and AI agent understands:

* What ODRISC is
* Why ODRISC exists
* Who the website serves
* How the website must be structured
* How the Patient and Provider experiences differ
* What the website must communicate
* What the website must never claim
* Which product, clinical, design, and engineering principles must remain consistent

This file is not a temporary brief. It is the durable context layer for the ODRISC website repository.

---

# 2. Project Identity

## 2.1 Project Name

**ODRISC Website**

## 2.2 Domain

The official website will operate through one primary domain:

`odrisc.com`

ODRISC must not be presented as separate unrelated websites for patients and providers.

The website must function as one connected digital platform with two clearly differentiated audience journeys:

1. **Patient journey**
2. **Provider journey**

Both journeys belong to the same ODRISC brand, platform, product ecosystem, and domain.

## 2.3 Organization

**ODRISC Technologies**

## 2.4 Platform Positioning

ODRISC is a maternal and fetal intelligence platform designed to transform fragmented pregnancy-related information into longitudinal, clinically meaningful understanding.

The platform is intended to support:

* Earlier recognition of emerging concerns
* Better monitoring across pregnancy
* Greater visibility into maternal and fetal changes over time
* More informed collaboration between patients and healthcare providers
* Improved maternal and fetal outcomes

ODRISC must not be positioned as replacing healthcare professionals.

It should be presented as a platform that supports clinical judgment, longitudinal monitoring, patient engagement, and informed decision-making.

---

# 3. Why ODRISC Exists

Pregnancy generates a continuous stream of information, including:

* Maternal health information
* Weight and metabolic changes
* Medical history
* Laboratory findings
* Ultrasound measurements
* Fetal growth data
* Doppler findings
* Nutrition and activity information
* Symptoms and patient-reported observations

This information is often fragmented across:

* Different appointments
* Separate reports
* Paper records
* Hospital systems
* Diagnostic centers
* Patient recollection
* Independent monitoring tools

Individual data points may be reviewed at a particular moment, but their development across time may not always be presented as one synchronized longitudinal story.

ODRISC exists to help make that story more visible.

The platform seeks to organize maternal and fetal information across pregnancy so that patients and providers can better understand:

* What has changed
* How quickly it has changed
* Whether patterns are emerging
* Whether closer monitoring may be required
* How maternal and fetal developments relate to one another
* What should receive attention during the next stage of care

The central ODRISC idea is:

> Every pregnancy has a story. ODRISC helps patients and providers understand how that story is evolving.

---

# 4. Founder Context

ODRISC is founded by Dr. Asif Khan, a dental surgeon and maternal health-technology founder.

The founder's motivation is connected to a personal maternal-health experience. His mother experienced gestational diabetes during pregnancy with him, he was born macrosomic, and his mother later developed type 2 diabetes.

This history informs the long-term purpose of ODRISC:

* To improve awareness before complications become more difficult to manage
* To make maternal risk and pregnancy progression easier to understand
* To support more proactive monitoring
* To improve communication between patients and healthcare professionals
* To contribute to healthier outcomes for mothers and babies

The founder story may be used selectively where it strengthens authenticity and trust.

It must not dominate the clinical platform narrative or be used to make unsupported medical claims.

---

# 5. Website Vision

The ODRISC website must operate as the primary public digital entry point into the ODRISC ecosystem.

It must serve both patients and providers without forcing both audiences through the same information architecture or messaging structure.

The website should immediately recognize that patients and healthcare professionals have different:

* Questions
* Needs
* Levels of clinical knowledge
* Product expectations
* Trust requirements
* Calls to action
* Decision-making processes

The website must therefore begin by helping the visitor select the journey that is relevant to them.

The detailed audience framework, including patient segments, provider segments, motivations, concerns, content depth, and conversion goals, is maintained in:

`docs/product/AUDIENCE.md`

---

# 6. Primary Website Entry Experience

## 6.1 Entry Principle

When a visitor enters `odrisc.com`, the website should provide a clear and accessible audience choice:

* **I am a Patient**
* **I am a Healthcare Provider**

The language may later be refined through usability testing, but the distinction must remain direct and immediately understandable.

## 6.2 Purpose of the Selection

The audience selection must:

* Reduce confusion
* Personalize the website experience
* Present audience-appropriate language
* Direct users to relevant information
* Improve conversion
* Avoid mixing patient wellness messaging with clinician-focused clinical intelligence
* Preserve one unified ODRISC brand

## 6.3 Selection Behavior

Selecting **Patient** should open the Patient-oriented website journey.

Selecting **Provider** should open the Provider-oriented website journey.

The selected journey should have:

* Its own navigation
* Its own homepage
* Its own content hierarchy
* Its own primary calls to action
* Audience-appropriate terminology
* Audience-appropriate trust signals
* Relevant products and features

## 6.4 Returning Visitors

The website may remember the visitor's previous selection through an appropriate local preference mechanism.

Returning visitors may be directed back to their previously selected journey while retaining a clearly visible option to switch audiences.

Audience preference must not prevent access to the alternative journey.

## 6.5 Audience Switching

Both the Patient and Provider experiences must include a persistent and understandable method for switching journeys.

Examples may include:

* “For Patients”
* “For Providers”
* An audience switcher in the navigation
* An audience option in the menu or footer

The switch must not require the visitor to return to a separate external website.

---

# 7. Unified Website Architecture

The website will be one platform under:

`odrisc.com`

The preferred conceptual structure is:

```text
odrisc.com
│
├── Audience Selection
│
├── Patient Experience
│   ├── Patient Homepage
│   ├── Understand Your Pregnancy
│   ├── Risk Awareness
│   ├── Weight Monitoring
│   ├── Nutrition
│   ├── Physical Activity
│   ├── Maternal and Fetal Progress
│   ├── How ODRISC Works
│   ├── Membership or Access
│   ├── Resources
│   └── Patient CTA
│
└── Provider Experience
    ├── Provider Homepage
    ├── Clinical Monitoring
    ├── Longitudinal Intelligence
    ├── Maternal Intelligence
    ├── Fetal Growth Intelligence
    ├── Clinical Validation
    ├── Clinical Insights
    ├── Platform and Workflow
    ├── Hospitals and Institutions
    ├── Resources
    └── Provider CTA
```

The final page names and URL paths will be defined in the Information Architecture phase.

---

# 8. Patient Website Experience

## 8.1 Patient Audience

The Patient experience is intended primarily for:

* Women planning pregnancy
* Pregnant women
* Women with risk factors for gestational diabetes
* Women with polycystic ovary syndrome
* Women preparing for IVF or assisted reproduction
* Women entering pregnancy while overweight or underweight
* Women who require closer weight or metabolic monitoring
* Women seeking structured nutrition and physical-activity support
* Family members supporting someone through pregnancy

## 8.2 Patient Website Purpose

The Patient experience must help users:

* Understand why pregnancy should be monitored longitudinally
* Recognize that maternal health can influence fetal development
* Understand the value of early awareness
* Track relevant maternal changes
* Understand weight progression
* Access structured nutrition support
* Access appropriate pregnancy physical-activity guidance
* View pregnancy progress in a clear and reassuring manner
* Prepare for more informed conversations with healthcare providers
* Understand how ODRISC supports, but does not replace, clinical care

## 8.3 Patient Experience Principles

The Patient experience must feel:

* Reassuring
* Supportive
* Clear
* Respectful
* Non-judgmental
* Clinically responsible
* Easy to understand
* Personally relevant
* Calm rather than fear-based

The experience must not:

* Diagnose the patient
* Replace medical consultation
* Create unnecessary anxiety
* Shame users about weight, diet, health status, or pregnancy risk
* Guarantee prevention or outcomes
* Use clinical terminology without explanation
* Make the user feel reduced to a score or risk category

## 8.4 Patient Narrative

The Patient journey should communicate a story similar to:

```text
Every pregnancy develops over time

↓

Your health, weight, nutrition, activity, symptoms, and baby's growth are connected

↓

Individual appointments may show only one moment

↓

Understanding changes over time provides greater clarity

↓

ODRISC helps organize and explain your pregnancy journey

↓

You become more informed and better prepared

↓

You and your healthcare provider can have more meaningful conversations

↓

Better awareness supports better monitoring
```

## 8.5 Patient Calls to Action

Potential Patient calls to action include:

* Assess My Risk
* Understand My Pregnancy
* Start Monitoring
* Explore ODRISC
* View Membership Options
* Join ODRISC
* Speak With My Healthcare Provider
* Access Patient Resources

Final calls to action must be defined within the approved Patient journey and PRD.

The complete Patient audience specification, including audience segments, trust requirements, motivations, objections, content rules, and conversion principles, is defined in:

`docs/product/AUDIENCE.md`

---

# 9. Provider Website Experience

## 9.1 Provider Audience

The Provider experience is intended primarily for:

* Obstetricians and gynecologists
* Maternal-fetal medicine specialists
* Fertility and IVF specialists
* Maternity hospitals
* Healthcare systems
* Antenatal clinics
* Maternal-health teams
* Nutrition professionals
* Women's health physiotherapists
* Clinical administrators
* Institutional healthcare partners

## 9.2 Provider Website Purpose

The Provider experience must explain how ODRISC can support:

* Longitudinal maternal monitoring
* Fetal growth assessment
* Recognition of changing patterns
* Interpretation of pregnancy data across time
* Synchronization of maternal and fetal information
* Clinical review between appointments
* Patient engagement
* Multidisciplinary collaboration
* Risk-informed monitoring
* Cohort visibility
* Structured clinical workflows
* Explainable clinical intelligence

## 9.3 Provider Experience Principles

The Provider experience must feel:

* Clinically credible
* Evidence-conscious
* Precise
* Intelligent
* Professional
* Calm
* Modern
* Explainable
* Workflow-aware

The Provider experience must avoid:

* Consumer wellness language
* Inflated artificial-intelligence claims
* Unsupported clinical claims
* Suggesting autonomous diagnosis
* Suggesting that ODRISC replaces clinician judgment
* Generic statements without explaining clinical relevance
* Excessive marketing terminology
* Overly decorative interfaces that weaken credibility

## 9.4 Provider Narrative

The Provider journey should communicate a story similar to:

```text
Pregnancy care generates fragmented maternal and fetal information

↓

Individual values provide limited context when viewed in isolation

↓

Clinical meaning develops through change, velocity, relationship, and time

↓

ODRISC structures maternal, fetal, laboratory, ultrasound, and Doppler information longitudinally

↓

The platform helps surface meaningful patterns and emerging deviations

↓

Clinicians gain greater clarity for monitoring and review

↓

Patients become more informed and engaged

↓

Better clinical collaboration supports improved maternal and fetal outcomes
```

## 9.5 Provider Calls to Action

Potential Provider calls to action include:

* Explore the Clinical Platform
* Request a Demonstration
* Join the Clinical Panel
* Discuss a Pilot
* Partner With ODRISC
* View Clinical Workflows
* Explore Fetal Growth Intelligence
* Contact the ODRISC Team

Final calls to action must be defined in the Provider journey and PRD.

The complete Provider audience specification, including provider segments, workflow expectations, adoption concerns, trust requirements, and conversion goals, is defined in:

`docs/product/AUDIENCE.md`

---

# 10. Relationship Between Patient and Provider Experiences

The Patient and Provider experiences must not be developed as isolated products.

They represent two perspectives on one connected pregnancy-care ecosystem.

The Patient experience helps individuals:

* Understand
* Monitor
* Engage
* Prepare
* Participate

The Provider experience helps healthcare professionals:

* Review
* Interpret
* Recognize
* Monitor
* Collaborate
* Escalate where clinically appropriate

The shared bridge between both experiences is longitudinal maternal and fetal understanding.

The website should communicate that ODRISC is most valuable when it strengthens the relationship between the patient and the healthcare professional.

The Patient experience must never imply that patients should interpret complex clinical data independently.

The Provider experience must never portray patients as passive data sources.

---

# 11. Core Platform Capabilities

The website may communicate the following ODRISC capabilities where relevant to the selected audience.

## 11.1 Risk Assessment

ODRISC includes a gestational diabetes risk-assessment capability designed to support early awareness.

Potential inputs include:

* Age
* Pregnancy history
* Anthropometric information
* Ethnicity
* Family history
* Personal medical history
* Relevant risk factors

Outputs may include structured risk categories and explanations of contributing risk factors.

This capability must be described as risk awareness or assessment support, not diagnosis.

## 11.2 Weight Monitoring

ODRISC supports structured weight monitoring before and during pregnancy.

Potential capabilities include:

* Preconception weight goals
* Body mass index context
* Pregnancy-stage monitoring
* Trimester-specific progression
* Gestational weight-gain ranges
* Daily or periodic weight logging
* Progress visualization
* Trend recognition
* Alerts based on approved monitoring logic

Weight-related content must remain supportive and non-stigmatizing.

## 11.3 Medical Nutrition Therapy

ODRISC supports personalized nutrition guidance through structured plans designed for pregnancy-related needs.

Potential capabilities include:

* Trimester-specific nutrition
* Vegetarian and non-vegetarian options
* Portion guidance
* Macronutrient planning
* Glycemic-awareness considerations
* Dietitian-supported planning
* Indian and regionally relevant meal patterns
* One-to-one professional support where included in the selected plan

Nutrition content must not make therapeutic guarantees.

## 11.4 Physical Activity Training

ODRISC supports trimester-appropriate physical-activity guidance designed with women's health considerations.

Potential capabilities include:

* Trimester-specific activity plans
* Upper-body and lower-body routines
* Back and mobility exercises
* Pelvic-floor activity
* Safety guidance
* Structured frequency, intensity, time, and type principles
* Motivational and adherence support

Activity content must clearly acknowledge contraindications and the importance of professional medical advice where appropriate.

## 11.5 Maternal Intelligence

The developing maternal-intelligence layer may include:

* Maternal weight trajectory
* Weight-change velocity
* Risk-factor context
* Metabolic information
* Laboratory information
* Symptom-related context
* Longitudinal maternal timeline
* Monitoring alerts
* Relationship between maternal patterns and pregnancy progression

## 11.6 Fetal Growth Intelligence

The developing fetal growth-intelligence layer may include:

* Gestational-age anchoring
* Estimated due date consistency
* Ultrasound biometric measurements
* Estimated fetal weight
* Growth percentiles
* Growth velocity
* Centile crossing
* Customized growth expectations
* Fetal growth timeline
* Doppler context
* Fetal growth restriction-related monitoring support
* Explainable alerts and clinical review

## 11.7 Data Capture and Integration

Potential platform capabilities include:

* Manual data entry
* Ultrasound report extraction
* Optical character recognition
* Structured report review
* Longitudinal timelines
* PDF reporting
* Clinician notes
* Patient summaries
* Future interoperability using healthcare data standards
* Hospital system integrations where approved and implemented

The website must clearly distinguish among:

* Available capabilities
* Capabilities under development
* Future roadmap capabilities

No future capability may be presented as currently available unless its status has been approved.

---

# 12. Core Website Message

The central website message is:

> ODRISC transforms fragmented maternal and fetal information into longitudinal intelligence that supports earlier recognition, better monitoring, and more informed pregnancy care.

Audience-specific versions may be created, but they must preserve the same underlying meaning.

## 12.1 Patient Interpretation

For patients, this means helping them understand how their pregnancy is progressing over time and supporting better-informed conversations with their healthcare professionals.

## 12.2 Provider Interpretation

For providers, this means organizing maternal and fetal information across pregnancy to support more informed clinical monitoring, pattern recognition, and patient collaboration.

---

# 13. Primary Website Objectives

The website must serve both Patient and Provider audiences.

Its primary objectives are:

## 13.1 Shared Objectives

* Establish ODRISC as a credible maternal and fetal intelligence platform
* Explain the problem of fragmented pregnancy information
* Communicate the value of longitudinal monitoring
* Build trust
* Explain how ODRISC connects patients and providers
* Present capabilities accurately
* Generate relevant patient and provider actions
* Support future market expansion
* Provide a scalable digital foundation for the ODRISC platform

## 13.2 Patient Objectives

* Help patients understand the value of early awareness
* Explain the Patient offering
* Encourage appropriate risk assessment and monitoring
* Present nutrition, activity, and weight-support capabilities
* Support informed participation in pregnancy care
* Convert relevant visitors into registered users or members

## 13.3 Provider Objectives

* Establish clinical credibility
* Explain the Provider platform
* Demonstrate longitudinal maternal and fetal intelligence
* Communicate workflow value
* Generate demonstration, pilot, panel, and partnership enquiries
* Support conversations with clinics, hospitals, and healthcare systems

---

# 14. Geographic Context

ODRISC is being developed with an international maternal-health vision.

Current and planned market context includes:

* India as a validation and development market
* Qatar as a primary planned commercial market
* Future Gulf Cooperation Council expansion
* Potential expansion into the United Arab Emirates, Saudi Arabia, Kuwait, Bahrain, and Oman

The website architecture should therefore be designed to support future:

* Country-specific content
* Regional pricing
* Language localization
* Arabic support
* English support
* Hindi or other relevant language support
* Regional clinical and regulatory information
* Market-specific calls to action
* Country-specific legal and privacy requirements

The initial architecture must not unnecessarily restrict future internationalization.

---

# 15. Brand Direction

## 15.1 Brand Character

The ODRISC website should feel:

* Premium
* Minimal
* Clinically credible
* Calm
* Intelligent
* Human
* Modern
* Trustworthy
* Precise
* Supportive

## 15.2 Visual Foundation

The established visual direction includes:

* Predominantly white backgrounds
* High negative space
* Clean visual hierarchy
* Minimalist interface design
* Subtle clinical and data visualizations
* Restrained use of illustration
* Thin borders
* Carefully controlled rounded corners
* Purposeful animation
* Clear typography
* Accessible contrast

## 15.3 Established Colors

Primary gradient direction:

* `#ff7680`
* `#80ffcc`

The preferred gradient balance is approximately:

* 90% visual influence from `#ff7680`
* Transition toward `#80ffcc`

Principal text color:

* `#4d4d4d`

Exact tokens, contrast rules, states, backgrounds, and accessible alternatives must be defined in the Design System.

## 15.4 Visual Restrictions

Avoid:

* Generic stock images of pregnant women
* Fear-based pregnancy imagery
* Overly futuristic artificial-intelligence visuals
* Excessive glowing effects
* Dense dashboard visuals without explanation
* Generic blue healthcare branding
* Decorative gradients without functional purpose
* Clinical imagery that may feel alarming or dehumanizing
* Visual clutter
* Excessive animation
* Cartoon-like medical graphics unless specifically appropriate for patient education

---

# 16. Content Direction

## 16.1 Shared Voice

ODRISC content must be:

* Clear
* Responsible
* Evidence-conscious
* Human
* Specific
* Calm
* Credible
* Purposeful

## 16.2 Patient Voice

Patient content should:

* Explain rather than overwhelm
* Reassure without minimizing risk
* Encourage participation
* Avoid blame
* Avoid unnecessary technical language
* Define clinical terms when they are necessary
* Promote collaboration with healthcare providers

## 16.3 Provider Voice

Provider content should:

* Respect clinical expertise
* Be specific about workflow and monitoring value
* Explain what the platform does
* Avoid inflated promotional language
* Use appropriate clinical terminology
* Distinguish available features from future capabilities
* Support claims with approved references where necessary

## 16.4 Prohibited Language

Do not use unsupported claims such as:

* Guaranteed outcomes
* Prevents all complications
* Replaces your doctor
* Diagnoses complications automatically
* Eliminates clinical risk
* The world's best platform
* Revolutionary without explanation
* Fully validated unless formally established
* Clinically proven unless supported by approved evidence
* Regulatory approved unless accurate for the relevant jurisdiction and capability

---

# 17. Clinical and Ethical Boundaries

The ODRISC website must maintain clear clinical boundaries.

## 17.1 ODRISC Does Not Replace Clinical Care

The website must communicate that ODRISC:

* Supports monitoring
* Supports awareness
* Supports communication
* Supports clinical review
* Does not replace healthcare professionals
* Does not independently diagnose
* Does not independently prescribe treatment
* Does not guarantee maternal or fetal outcomes

## 17.2 Clinical Claims

Every clinical claim must be:

* Accurate
* Proportionate
* Traceable
* Appropriate to the intended audience
* Supported by an approved reference when necessary

## 17.3 Safety Messaging

Patient-facing areas must include appropriate guidance about:

* Contacting healthcare professionals
* Seeking urgent medical care when necessary
* Not relying exclusively on digital monitoring
* Following individualized medical advice
* Recognizing that clinical recommendations may differ by individual circumstances

Exact safety wording will be defined through the Content Guidelines and legal review.

## 17.4 Patient Dignity

The website must avoid:

* Weight stigma
* Maternal blame
* Fear-based conversion
* Judgmental language
* Oversimplification of pregnancy complications
* Implying that adverse outcomes result from personal failure

---

# 18. Website Experience Principles

The website must be designed around the following principles.

## 18.1 Audience Clarity

Visitors must quickly understand whether they are in the Patient or Provider experience.

## 18.2 One Brand, Two Journeys

The two audience journeys must remain visually and conceptually connected.

## 18.3 Progressive Disclosure

The website should introduce information in layers rather than presenting all clinical and product detail at once.

## 18.4 Story Before Features

Pages should explain the underlying problem and clinical relevance before presenting a catalogue of capabilities.

## 18.5 Longitudinal Thinking

Where appropriate, layouts and visuals should communicate:

* Change over time
* Relationships between data
* Progression
* Trends
* Timelines
* Earlier recognition
* Connected maternal and fetal development

## 18.6 Explainability

Clinical intelligence must be presented as explainable rather than as an unexplained automated output.

## 18.7 Purposeful Motion

Animation should help users understand:

* Progression
* Data connection
* Timeline development
* Navigation hierarchy
* Cause and effect

Animation must not distract from clinical credibility or accessibility.

## 18.8 Accessibility

The website must be usable across:

* Desktop
* Tablet
* Mobile
* Keyboard navigation
* Assistive technologies
* Reduced-motion preferences
* Appropriate contrast requirements

## 18.9 Performance

The website must remain fast and responsive.

Decorative media, animation, and third-party scripts must not compromise the primary experience.

---

# 19. Initial Technical Direction

The final technical architecture will be defined in the engineering documentation and approved through an Architecture Decision Record.

The expected initial direction includes:

* A modern React-based web framework
* TypeScript
* Responsive component architecture
* Reusable design-system components
* Structured metadata
* Search-engine optimization
* Accessible semantic markup
* Analytics support
* Internationalization readiness
* Content scalability
* Privacy-conscious form handling
* Performance monitoring
* Secure environment-variable management

No framework or dependency should be treated as permanently approved until it is recorded in the appropriate technical documentation or decision record.

---

# 20. Content and Product Status Control

Every capability described on the website must have a documented status.

Recommended status categories:

* Available
* Limited availability
* Pilot
* In validation
* In development
* Planned
* Future roadmap
* Not publicly announced

Content writers, designers, and developers must verify status before presenting a capability.

AI agents must not infer availability from product discussions, mockups, concepts, or future specifications.

---

# 21. Source-of-Truth Rules

When project information conflicts, contributors must follow:

`docs/project/SOURCE_OF_TRUTH.md`

The general hierarchy is:

1. Explicit founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `ai/rules/NON_NEGOTIABLES.md`
4. Approved project documentation
5. Approved design and content systems
6. Architecture Decision Records
7. Existing implementation
8. Temporary prompts and suggestions

Chat history is supporting context, not permanent project memory.

Important decisions made through conversations must be transferred into repository documentation.

---

# 22. Product Capability Status

The implementation and public communication status of every ODRISC capability is governed by:

`docs/product/PRODUCT_STATUS.md`

No feature, workflow, screenshot, marketing copy, or website page may present a capability as available without verifying its approved status in this register.

# 23. Rules for AI Agents

Before performing work, AI agents must:

1. Read `AGENTS.md`
2. Read this `PROJECT_CONTEXT.md`
3. Read `docs/project/SOURCE_OF_TRUTH.md`
4. Read `ai/rules/NON_NEGOTIABLES.md`
5. Read the relevant product, design, content, or engineering documents
6. Identify whether the task concerns the Patient journey, Provider journey, or shared website system
7. Confirm which claims and capabilities are approved
8. Inspect existing components before generating new ones
9. State material assumptions
10. Avoid changing unrelated files

AI agents must not:

* Invent clinical claims
* Invent product availability
* Merge Patient and Provider messaging indiscriminately
* Create separate brands for the two audiences
* Change the domain
* Redefine the primary audience architecture
* Present ODRISC as replacing clinicians
* Introduce unsupported regulatory claims
* Use generic healthcare copy in place of approved positioning
* Change locked decisions without explicit authorization

- Read `docs/product/AUDIENCE.md` before generating audience-specific pages, copy, navigation, forms, illustrations, or user flows.

---

# 24. Current Locked Decisions

The following decisions are currently locked for the website foundation:

1. The official website domain is `odrisc.com`.
2. ODRISC will use one unified website.
3. The website will serve both patients and healthcare providers.
4. The entry experience will ask users to select whether they are a Patient or Provider.
5. Selecting Patient will open the Patient-oriented website journey.
6. Selecting Provider will open the Provider-oriented website journey.
7. Both journeys will remain within the same ODRISC domain and brand.
8. Users must be able to switch between journeys.
9. Patient and Provider content must use audience-appropriate language.
10. The platform must be positioned as supporting, not replacing, healthcare professionals.
11. The website must communicate longitudinal maternal and fetal intelligence.
12. The principal visual direction will remain premium, minimalist, clinically credible, and predominantly white.
13. The established gradient will use `#ff7680` and `#80ffcc`.
14. The principal text color will use `#4d4d4d`, subject to accessibility requirements.
15. Application code must not be developed before the foundational documentation is sufficiently defined and approved.

---

# 25. Matters Still to Be Defined

The following matters will be resolved in subsequent project documents:

* Exact Patient and Provider URL structure
* Entry-page design and behavior
* Whether the audience selector is a full landing screen or integrated hero
* Cookie or local-storage behavior for remembering audience selection
* Patient navigation
* Provider navigation
* Patient page inventory
* Provider page inventory
* Shared pages
* Footer architecture
* Login and registration pathways
* Patient membership structure
* Provider demonstration and pilot flows
* Forms and lead routing
* Country and language handling
* Content-management approach
* Analytics event structure
* Search-engine indexing strategy for the audience gateway
* Accessibility acceptance criteria
* Legal disclaimers
* Privacy policy
* Terms of use
* Clinical-reference governance
* Product capability status
* Final technical stack
* Hosting and deployment
* Integration with the existing ODRISC application
* Provider portal relationship
* Patient application relationship
* Whether the audience preference should persist across sessions

These items must be recorded in `docs/project/OPEN_QUESTIONS.md` and resolved through the relevant documentation phase.

---

# 26. Success Definition

The website will be successful when:

* Patients immediately understand where to begin
* Providers immediately find the clinical experience relevant
* Both audiences recognize ODRISC as one connected platform
* The website communicates why longitudinal pregnancy understanding matters
* The Patient journey feels supportive and understandable
* The Provider journey feels clinically credible and precise
* Visitors understand that ODRISC strengthens patient-provider collaboration
* Product capabilities are communicated accurately
* Unsupported claims are avoided
* Calls to action are relevant to each audience
* The architecture can scale across markets, languages, and future platform capabilities
* Human and AI contributors can continue development without relying on historical chat context

---

# 27. Foundational Summary

ODRISC.com will be a single, unified maternal and fetal intelligence website serving two distinct audiences.

The entry experience will ask visitors whether they are a Patient or a Healthcare Provider.

Patients will enter a supportive, understandable experience focused on awareness, monitoring, pregnancy progress, nutrition, physical activity, and informed participation in care.

Providers will enter a clinically credible experience focused on longitudinal maternal and fetal intelligence, monitoring, growth assessment, workflow support, patient collaboration, and institutional adoption.

Both experiences will remain connected through the same core belief:

> Pregnancy should not be understood only as a series of isolated appointments or reports. It should be understood as a longitudinal story shared between the patient and the healthcare professional.

ODRISC exists to help make that story clearer.

This document provides the high-level context for the project.

Detailed audience definitions, user segmentation, motivations, objections, trust requirements, and conversion pathways are defined in:

- `docs/product/AUDIENCE.md`

This document should be read before developing any Patient- or Provider-facing experience.
