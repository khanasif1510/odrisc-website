# ODRISC — Product Vision

## Document Status

**Status:** Foundational
**Authority:** Canonical product vision
**Website:** `odrisc.com`
**Primary audiences:** Patients and healthcare providers
**Product category:** Maternal and fetal intelligence platform
**Related audience framework:** `docs/product/AUDIENCE.md`
**Related architecture decision:** `ADR-001 — Unified Patient and Provider Website`

---

Capability availability is governed by:

`docs/product/PRODUCT_STATUS.md`

This document defines the intended long-term direction of the platform. It does not determine whether a capability is currently available for public use.

---

Related Documents:

- `docs/product/WEBSITE_STORY.md`

---

# 1. Purpose of This Document

This document defines the long-term product vision for ODRISC.

It explains:

* What ODRISC is becoming
* Which problem the platform exists to solve
* How the Patient and Provider experiences connect
* Which capabilities belong within the ODRISC product ecosystem
* How the platform should evolve over time
* Which principles must guide product decisions
* Which boundaries must remain intact
* How the public website should represent the product vision

This document must guide:

* Product strategy
* Website strategy
* Product requirements
* Information architecture
* Messaging
* Design
* Engineering
* Clinical logic
* Partnerships
* Commercial planning
* Roadmap decisions
* Future integrations
* AI-assisted product work

This document describes the intended direction of ODRISC. It does not imply that every capability described is currently available.

Every public product claim must be checked against the approved capability status before publication.

---

# 2. Product Vision Statement

> ODRISC will become the intelligence layer that connects maternal health, fetal growth, patient-reported information, and clinical monitoring across the full pregnancy journey.

The long-term vision is to help patients and healthcare providers understand how a pregnancy is evolving over time rather than relying only on isolated appointments, reports, measurements, and disconnected observations.

ODRISC aims to transform fragmented pregnancy information into structured, longitudinal, and explainable intelligence that supports:

* Earlier recognition of emerging concerns
* More informed monitoring
* Better patient understanding
* Stronger patient-provider collaboration
* More coordinated multidisciplinary care
* Improved maternal and fetal outcomes

---

# 3. The Product Problem

Pregnancy care produces a large amount of information.

This may include:

* Maternal medical history
* Preconception risk factors
* Weight and body composition
* Metabolic risk
* Blood pressure
* Symptoms
* Laboratory investigations
* Ultrasound measurements
* Estimated fetal weight
* Fetal biometry
* Doppler findings
* Nutrition
* Physical activity
* Medications
* Clinical observations
* Patient-reported information
* Specialist assessments

This information is often distributed across:

* Multiple clinicians
* Different hospitals or clinics
* Diagnostic centers
* Paper reports
* Electronic records
* Patient-held documents
* Separate mobile applications
* Independent care pathways
* Different stages of pregnancy

The problem is not simply the absence of data.

The deeper problem is that the data may not be:

* Connected
* Synchronized
* Interpreted longitudinally
* Presented with appropriate context
* Compared consistently over time
* Shared clearly between patients and providers
* Converted into understandable monitoring signals

A single value may appear normal or abnormal at one moment, but its meaning may depend on:

* The previous value
* The rate of change
* The gestational age
* The maternal context
* The fetal context
* The relevant clinical standard
* The relationship between multiple measurements
* Whether the change is temporary or sustained

ODRISC is intended to make these relationships more visible.

---

# 4. Core Product Belief

ODRISC is built on the following belief:

> Pregnancy should be understood as a longitudinal clinical story, not as a collection of isolated data points.

The platform should help reveal:

* Change over time
* Direction of change
* Velocity
* Variation
* Emerging deviation
* Maternal and fetal relationships
* Relevant clinical context
* Monitoring priorities
* The next meaningful question

The product must not reduce pregnancy care to a single score, alert, or automated conclusion.

It must support a deeper and more explainable understanding of progression.

---

# 5. Product Identity

ODRISC is not intended to be only:

* A pregnancy-content application
* A diet-plan application
* A weight tracker
* A fetal growth calculator
* A risk-assessment form
* A patient portal
* A provider dashboard
* An artificial-intelligence chatbot
* A collection of independent wellness tools

ODRISC is intended to become an integrated maternal and fetal intelligence platform.

Its capabilities should work together as a connected system.

The platform should progressively connect:

```text
Preconception information
+
Maternal risk
+
Weight trajectory
+
Nutrition
+
Physical activity
+
Symptoms
+
Laboratory findings
+
Ultrasound measurements
+
Fetal growth
+
Doppler findings
+
Clinical observations
+
Patient engagement
```

into:

```text
Longitudinal maternal and fetal intelligence
```

---

# 6. Unified Product Ecosystem

ODRISC will serve patients and healthcare providers through one connected ecosystem.

The ecosystem will contain two primary product perspectives:

1. Patient experience
2. Provider experience

These are not separate products with unrelated data and objectives.

They are two views of the same pregnancy journey.

## 6.1 Patient Perspective

The Patient experience should help women:

* Understand relevant risk factors
* Prepare before pregnancy
* Monitor changes during pregnancy
* Follow structured weight guidance
* Access nutrition support
* Access physical-activity support
* Understand maternal and fetal progress
* Record relevant information
* Prepare for clinical appointments
* Participate more meaningfully in care
* Know when professional review may be important

## 6.2 Provider Perspective

The Provider experience should help healthcare professionals:

* Review longitudinal maternal information
* Review fetal growth across multiple scans
* Identify changes in velocity and trajectory
* Understand relationships among measurements
* Monitor selected patients between appointments
* Review patient-entered information
* Access explainable summaries
* Collaborate across disciplines
* Prioritize attention
* Support clinical decision-making
* Implement ODRISC within care workflows

## 6.3 Shared Product Value

The shared product value is:

> A clearer, continuously evolving view of the pregnancy for both the patient and the healthcare professional.

---

# 7. Product Mission

The mission of ODRISC is:

> To improve maternal and fetal outcomes by helping patients and healthcare providers recognize meaningful changes earlier, monitor pregnancy more effectively, and collaborate through clearer longitudinal intelligence.

This mission should guide all product decisions.

A feature should not be added solely because it is technically possible or commercially fashionable.

It should contribute to one or more of the following:

* Better understanding
* Earlier recognition
* More effective monitoring
* Safer patient participation
* Better clinical collaboration
* More coordinated care
* Improved accessibility
* Greater continuity
* More explainable information

---

# 8. Product Principles

## 8.1 Longitudinal Before Isolated

ODRISC should prioritize trends, timelines, progression, and change over isolated values.

## 8.2 Explainable Before Opaque

The platform should explain why a pattern, alert, or observation matters.

Users should not receive unexplained outputs.

## 8.3 Clinician-Supportive, Not Clinician-Replacing

ODRISC must support professional judgment.

It must not present itself as an autonomous diagnostic or treatment system.

## 8.4 Patient-Inclusive, Not Patient-Burdening

Patients should be able to participate meaningfully without being expected to independently interpret complex clinical information.

## 8.5 Connected Before Fragmented

Product capabilities should be designed to work together.

New tools should strengthen the central longitudinal record rather than create separate silos.

## 8.6 Safety Before Engagement

Clinical safety, responsible communication, and clear boundaries must take priority over engagement metrics or conversion.

## 8.7 Evidence-Conscious Before Promotional

Product claims should remain proportionate to the available evidence, validation, and regulatory status.

## 8.8 Human-Centered Before Technology-Centered

Technology must serve the pregnancy-care relationship.

Artificial intelligence, automation, analytics, and data visualization should never become the product story by themselves.

## 8.9 Regionally Adaptable Before Regionally Locked

The product should be built to support differences in:

* Language
* Population characteristics
* Clinical guidance
* Care pathways
* Pricing
* Regulation
* Healthcare systems
* Cultural context

## 8.10 Reusable Before Duplicated

The Patient and Provider experiences should share data structures, platform logic, terminology governance, and design foundations wherever appropriate.

---

# 9. Product Journey

The ODRISC product should support the pregnancy journey across multiple stages.

## 9.1 Preconception

The product should help women and providers understand readiness before pregnancy.

Potential areas include:

* Health assessment
* Risk awareness
* Weight optimization
* Nutrition
* Physical activity
* Metabolic risk
* Previous pregnancy history
* PCOS context
* IVF preparation
* Lifestyle planning
* Professional referral

## 9.2 Early Pregnancy

The product should help establish a reliable foundation for monitoring.

Potential areas include:

* Pregnancy confirmation context
* Gestational-age anchoring
* Estimated due date
* IVF dating
* Early risk assessment
* Baseline maternal information
* Starting weight
* Relevant symptoms
* Early laboratory information
* Care-plan initiation

## 9.3 Ongoing Pregnancy

The product should help build the longitudinal maternal and fetal record.

Potential areas include:

* Maternal weight trajectory
* Symptoms
* Nutrition adherence
* Physical activity
* Laboratory trends
* Ultrasound measurements
* Fetal growth
* Doppler findings
* Clinical appointments
* Monitoring alerts
* Provider notes
* Patient summaries

## 9.4 Late Pregnancy and Delivery Preparation

The product may support:

* Continued growth monitoring
* Maternal change monitoring
* Care-team communication
* Delivery preparation
* Risk-informed review
* Patient education
* Transition planning

## 9.5 Postpartum and Future Pregnancy Readiness

Future ODRISC development may include:

* Postpartum metabolic follow-up
* Weight and nutrition support
* Diabetes-risk follow-up
* Recovery and physical activity
* Long-term maternal health
* Future pregnancy planning
* Interpregnancy health

Postpartum capabilities are part of the broader vision but must not be represented as available unless formally implemented and approved.

---

# 10. Core Product Layers

The long-term ODRISC platform should be understood through connected product layers.

---

## 10.1 Layer One — Patient Health and Context

This layer may include:

* Demographic information
* Pregnancy history
* Medical history
* Family history
* Metabolic risk
* Relevant ethnicity context
* Previous gestational diabetes
* Previous macrosomia
* PCOS
* IVF or assisted reproduction
* Lifestyle context
* Patient goals
* Relevant symptoms

Its purpose is to establish the context within which later information is interpreted.

---

## 10.2 Layer Two — Maternal Monitoring

This layer may include:

* Preconception weight
* Pregnancy starting weight
* Body mass index
* Gestational weight gain
* Weight-change velocity
* Blood pressure where available
* Symptoms
* Laboratory values
* Glucose-related information
* Maternal timeline
* Trend interpretation
* Approved alerts

Its purpose is to show how maternal health is evolving.

---

## 10.3 Layer Three — Nutrition and Physical Activity

This layer may include:

* Medical nutrition therapy
* Trimester-specific nutrition
* Regionally appropriate meal planning
* Portion guidance
* Macronutrient planning
* Glycemic-awareness support
* Physical-activity plans
* Pelvic-floor guidance
* Mobility
* Strengthening
* Safety guidance
* Adherence support
* Professional review

Its purpose is to support structured and individualized health behavior within appropriate clinical boundaries.

---

## 10.4 Layer Four — Fetal Growth Intelligence

This layer may include:

* Gestational-age anchoring
* Estimated due date consistency
* Ultrasound measurements
* Biparietal diameter
* Head circumference
* Abdominal circumference
* Femur length
* Estimated fetal weight
* Growth standards
* Percentiles
* Z-scores
* Growth velocity
* Centile crossing
* Customized growth expectations
* Longitudinal scan comparison
* Fetal growth timeline

Its purpose is to help providers understand fetal development across time rather than scan by scan.

---

## 10.5 Layer Five — Doppler and Hemodynamic Context

This layer may include:

* Umbilical artery information
* Middle cerebral artery information
* Cerebroplacental ratio
* Relevant percentile or threshold context
* Longitudinal Doppler review
* Guideline-informed staging support
* Relationship with fetal-growth patterns

Its purpose is to add hemodynamic context where appropriate.

This layer must remain clinically precise and must not independently determine diagnosis or management.

---

## 10.6 Layer Six — Clinical Intelligence

This layer may include:

* Change detection
* Velocity analysis
* Pattern recognition
* Correlation across maternal and fetal information
* Deviation from expected trajectory
* Monitoring prompts
* Explainable alerts
* Prioritization support
* Guideline-informed logic
* Clinical summaries
* Suggested areas for review

Its purpose is to convert structured longitudinal data into useful, explainable decision support.

---

## 10.7 Layer Seven — Collaboration and Workflow

This layer may include:

* Patient-provider data sharing
* Provider notes
* Patient summaries
* Clinical reports
* Referral workflows
* Multidisciplinary access
* Patient enrolment
* Provider dashboards
* Cohort review
* Follow-up workflows
* Escalation pathways
* Audit history

Its purpose is to strengthen continuity and coordination.

---

## 10.8 Layer Eight — Integration and Infrastructure

This layer may include:

* Manual entry
* Optical character recognition
* Ultrasound report extraction
* Structured data capture
* PDF reports
* FHIR-based interoperability
* Electronic-health-record integration
* Hospital-system integration
* Role-based access
* Audit logs
* Localization
* Analytics
* Secure cloud infrastructure

Its purpose is to make the platform usable across real care environments.

---

# 11. Current and Planned Product Capabilities

The product vision includes several capabilities at different stages of maturity.

Every capability must be assigned an approved product status before it is publicly described.

Recommended status labels are:

* Available
* Limited availability
* Pilot
* In validation
* In development
* Planned
* Future roadmap
* Not publicly announced

---

## 11.1 Gestational Diabetes Risk Assessment

ODRISC includes a risk-assessment capability intended to support early awareness of gestational diabetes risk.

Potential inputs include:

* Age
* Pregnancy history
* Anthropometric information
* Ethnicity
* Family history
* Personal history
* Relevant medical history

Potential outputs include:

* Risk category
* Contributing risk factors
* Plain-language explanation
* Suggested discussion with a healthcare provider

The tool must be positioned as risk assessment, not diagnosis.

It must not replace established clinical testing.

---

## 11.2 Weight Monitoring Tool

ODRISC includes structured weight monitoring for preconception and pregnancy.

Potential capabilities include:

* Starting weight
* Body mass index
* Goal weight
* Target date
* Preconception weight change
* Trimester-specific gestational weight monitoring
* Daily or periodic logging
* Progress visualization
* Weekly trends
* Monthly comparison
* Remaining pregnancy timeline
* Approved alerts
* Patient and Provider views

The tool should support health-focused monitoring without stigma.

---

## 11.3 Medical Nutrition Therapy

ODRISC includes or plans structured nutrition support developed with qualified nutrition professionals.

Potential capabilities include:

* Personalized diet plans
* Trimester-specific planning
* Vegetarian and non-vegetarian options
* Portion guidance
* Gram and household-measure formats
* Macronutrient planning
* Glycemic-awareness considerations
* Regionally appropriate foods
* Dietitian review
* One-to-one professional support

The product must distinguish structured professional support from generic nutrition content.

---

## 11.4 Physical Activity Training

ODRISC includes or plans structured physical-activity guidance developed with women's health professionals.

Potential capabilities include:

* Trimester-specific plans
* Upper-body activity
* Lower-body activity
* Back and mobility routines
* Pelvic-floor training
* Frequency, intensity, time, and type guidance
* Safety cautions
* Adherence tracking
* Professional support

Contraindications and medical guidance must be respected.

---

## 11.5 Maternal Intelligence

The maternal-intelligence layer is intended to connect:

* Risk factors
* Maternal history
* Weight trajectory
* Symptoms
* Laboratory information
* Metabolic context
* Pregnancy stage
* Patient-reported information

The long-term goal is to support more meaningful recognition of maternal change over time.

---

## 11.6 Fetal Growth Intelligence

The fetal growth-intelligence layer is intended to support:

* Reliable pregnancy dating
* Consistent estimated due date
* Longitudinal scan review
* Growth-standard comparison
* Estimated fetal weight
* Biometric trends
* Growth velocity
* Centile crossing
* Customized growth expectations
* Small-for-gestational-age context
* Fetal-growth-restriction monitoring support
* Doppler context
* Explainable reporting

The platform must remain decision-supportive rather than autonomously diagnostic.

---

## 11.7 Ultrasound Report Extraction

The product may use optical character recognition and structured extraction to help convert paper or image-based ultrasound reports into reviewable data.

Potential capabilities include extraction of:

* Gestational age
* Estimated fetal weight
* Head circumference
* Abdominal circumference
* Femur length
* Biparietal diameter
* Doppler values

Extracted data must be reviewable and confirmable.

OCR output must not be treated as automatically accurate without validation.

---

## 11.8 Provider Dashboard

The Provider platform may include:

* Patient list
* Risk stratification
* Monitoring status
* Maternal timeline
* Fetal growth timeline
* Alerts
* Clinical summaries
* Notes
* Reports
* Patient engagement status
* Cohort-level information
* Filtering and prioritization

The dashboard should reduce fragmentation rather than add unnecessary administrative burden.

---

## 11.9 Patient Application

The Patient application may include:

* Registration
* Risk assessment
* Pregnancy setup
* Weight logging
* Nutrition plans
* Physical-activity plans
* Pregnancy timeline
* Maternal progress
* Fetal growth summaries
* Alerts
* Educational content
* Professional support
* Appointment preparation
* Clinician-sharing features

Patient-facing outputs must remain understandable and clinically bounded.

---

# 12. Long-Term Intelligence Model

The future ODRISC intelligence model should move progressively from data collection to explainable clinical value.

```text
Data capture
↓
Data validation
↓
Longitudinal organization
↓
Trend and velocity analysis
↓
Relationship analysis
↓
Deviation recognition
↓
Explainable insight
↓
Clinical or patient review
↓
Appropriate action
```

The platform must not skip the validation and review stages.

Automation should enhance attention and understanding, not bypass professional responsibility.

---

# 13. Patient Product Vision

The long-term Patient experience should help a woman understand:

* Where she is in the pregnancy journey
* Which information matters
* How her health is changing
* How her baby's growth is progressing
* Which actions support her care plan
* Which information should be shared
* When she may need to contact her healthcare provider
* How separate reports and observations connect

The Patient product should feel like:

* A structured guide
* A monitoring companion
* A communication aid
* A trusted source of approved information
* A bridge to the healthcare team

It must not feel like:

* A diagnostic authority
* A substitute clinician
* A fear-based alert system
* A generic content library
* A weight-loss application
* A pregnancy social network
* An opaque artificial-intelligence tool

---

# 14. Provider Product Vision

The long-term Provider experience should help clinicians:

* Review pregnancy progression efficiently
* Compare information across time
* Recognize emerging deviations
* Understand growth velocity
* Review maternal and fetal relationships
* Prioritize patients requiring attention
* Receive explainable summaries
* Collaborate with patients and colleagues
* Reduce fragmentation
* Integrate ODRISC into existing workflows

The Provider product should feel like:

* A longitudinal review system
* A maternal and fetal intelligence layer
* A structured decision-support environment
* A patient-monitoring platform
* A collaboration tool

It must not feel like:

* A black-box diagnostic engine
* A replacement for specialist interpretation
* An alert generator without context
* An administrative burden
* A generic electronic-health-record clone
* A collection of disconnected calculators

---

# 15. Patient-Provider Connection

The long-term product must create a responsible connection between Patient and Provider experiences.

Potential interactions include:

* Provider invitation of a patient
* Patient consent to share information
* Shared pregnancy timeline
* Provider review of patient-entered data
* Patient receipt of approved summaries
* Structured questions for appointments
* Monitoring instructions
* Professional escalation
* Multidisciplinary collaboration
* Follow-up tasks

The Patient and Provider interfaces should not display identical levels of clinical information.

Provider views may contain advanced detail.

Patient views should present approved explanations appropriate to non-specialist users.

---

# 16. Clinical Decision-Support Positioning

ODRISC may provide clinical decision support.

This means the platform may help:

* Organize information
* Compare values
* Calculate trends
* Apply approved rules
* Surface patterns
* Generate prompts
* Support prioritization
* Present guideline-informed context

Clinical decision support does not mean:

* Independent diagnosis
* Autonomous treatment
* Replacement of clinical judgment
* Guaranteed identification of every complication
* Automated clinical management
* Removal of professional responsibility

All decision-support functionality must remain explainable, reviewable, and appropriately governed.

---

# 17. Artificial Intelligence Positioning

Artificial intelligence may support parts of the ODRISC platform.

Potential uses include:

* Data extraction
* Pattern recognition
* Trend analysis
* Clinical summarization
* Natural-language explanation
* Workflow support
* Personalization
* Document processing
* Cohort analysis

Artificial intelligence must not become an unsupported marketing claim.

The product should communicate:

* What the system does
* Which data it uses
* How outputs are generated
* Where human review is required
* Which limitations exist
* Whether the capability is validated
* Whether the capability is available

The preferred product message is not “AI for pregnancy.”

The preferred message is:

> Longitudinal maternal and fetal intelligence supported by responsible technology.

---

# 18. Clinical Standards and Methodology

ODRISC may use or reference recognized clinical standards, growth references, or professional guidance.

Potential areas include:

* Gestational weight-gain guidance
* Pregnancy dating
* Fetal biometric standards
* Estimated fetal-weight standards
* Customized growth standards
* Doppler interpretation
* Fetal growth restriction frameworks
* Gestational diabetes risk
* Maternal risk assessment

Any use of a standard must document:

* The source
* The version
* The population
* The intended use
* The calculation
* The limitations
* The implementation status

The platform must not combine clinical frameworks without documenting how conflicts are resolved.

---

# 19. Geographic Product Vision

## 19.1 India

India serves as an important environment for:

* Product development
* Validation
* Clinical engagement
* User feedback
* Initial patient use
* Professional-panel involvement
* Operational learning

## 19.2 Qatar

Qatar is the primary planned commercial market.

The product should support:

* English and Arabic
* Local healthcare workflows
* Private provider adoption
* Hospital partnerships
* Self-pay patients
* Provider subscriptions
* Enterprise deployment
* Regional data and privacy requirements
* Localized pricing
* Qatar-specific implementation

## 19.3 GCC Expansion

The long-term GCC roadmap may include:

* United Arab Emirates
* Saudi Arabia
* Kuwait
* Bahrain
* Oman

The product should be designed so that new markets can be added without rebuilding the entire platform.

## 19.4 Global Vision

The global vision is a platform that can adapt to:

* Different pregnancy populations
* Different healthcare systems
* Different clinical guidance
* Different languages
* Different data-governance requirements
* Different provider workflows
* Different commercial models

Global expansion must not result in careless reuse of clinical assumptions across populations.

---

# 20. Commercial Product Vision

ODRISC may support multiple commercial models.

## 20.1 Patient Model

Potential Patient models include:

* Weekly membership
* Monthly membership
* Pregnancy-period membership
* Annual access
* Premium professional support
* Employer-sponsored access
* Insurer-sponsored access
* Hospital-sponsored access

## 20.2 Provider Model

Potential Provider models include:

* Individual provider subscription
* Clinic subscription
* Per-provider annual license
* Setup or onboarding fee
* Pilot agreement
* Referral-based collaboration
* Practice-level deployment

## 20.3 Enterprise Model

Potential Enterprise models include:

* Hospital license
* Healthcare-network deployment
* Implementation fee
* Training
* Support
* Customization
* Integration
* Analytics
* Multi-site access

Commercial decisions must not compromise:

* Clinical integrity
* Patient safety
* Data privacy
* Trust
* Product transparency

---

# 21. Product Differentiation

ODRISC should differentiate through the combination of:

* Patient participation
* Provider intelligence
* Maternal monitoring
* Fetal growth monitoring
* Longitudinal analysis
* Explainable clinical logic
* Weight, nutrition, and activity support
* Connected maternal and fetal context
* Multidisciplinary workflows
* Regional adaptability
* Patient-provider collaboration

The product should not differentiate primarily through:

* Generic artificial-intelligence claims
* Large numbers of disconnected features
* Decorative dashboards
* Unsupported predictions
* Broad promises of preventing complications
* Claims of replacing existing clinical systems

---

# 22. Product Outcomes

ODRISC should aim to contribute to outcomes such as:

* Better patient awareness
* More structured monitoring
* Earlier professional review
* Greater continuity
* Improved patient engagement
* More informed consultations
* Better visibility into growth progression
* Improved multidisciplinary communication
* More consistent data review
* Greater provider confidence in longitudinal information
* Improved maternal and fetal outcomes

The platform must not claim causation or outcome improvement unless supported by appropriate evidence.

During early product stages, outcomes should be presented as intended or supported outcomes rather than proven results.

---

# 23. Product Success Metrics

Product success should eventually be measured across multiple dimensions.

## 23.1 Patient Metrics

Potential metrics include:

* Risk assessments completed
* Patient registrations
* Monitoring activation
* Weight logs completed
* Nutrition-plan adherence
* Physical-activity engagement
* Patient retention
* Provider sharing
* Appointment-preparation use
* Patient-reported understanding
* Appropriate escalation
* Subscription conversion

## 23.2 Provider Metrics

Potential metrics include:

* Provider registrations
* Active providers
* Patients enrolled
* Dashboard use
* Longitudinal reviews completed
* Alerts reviewed
* Reports generated
* Pilot conversion
* Provider renewal
* Clinical-panel engagement
* Workflow time
* Provider satisfaction

## 23.3 Enterprise Metrics

Potential metrics include:

* Sites implemented
* Providers activated
* Patients enrolled
* Integration completion
* Training completion
* Cohort usage
* Renewal
* Expansion
* Support requirements
* Implementation time
* Data-quality indicators

## 23.4 Clinical and Research Metrics

Potential metrics may include:

* Data completeness
* Dating consistency
* Growth-trajectory detection
* Alert sensitivity and specificity
* Agreement with expert review
* Time to professional review
* Patient adherence
* Clinician usability
* Clinical workflow impact

Clinical performance metrics require formal methodology and appropriate governance.

---

# 24. Product Roadmap Horizons

The roadmap should be organized by product maturity rather than by speculative feature volume.

## 24.1 Horizon One — Foundation

Focus:

* Patient risk assessment
* Weight monitoring
* Nutrition
* Physical activity
* Patient onboarding
* Core data capture
* Basic Provider visibility
* Clinical-panel feedback
* Documentation
* Privacy and security foundations
* Product-status governance

## 24.2 Horizon Two — Connected Monitoring

Focus:

* Shared Patient and Provider workflows
* Maternal timeline
* Fetal growth timeline
* Ultrasound-data capture
* Report extraction
* Structured alerts
* Provider dashboard
* Clinical summaries
* Pilot programs
* Improved analytics

## 24.3 Horizon Three — Maternal-Fetal Intelligence

Focus:

* Advanced growth analysis
* Velocity
* Centile crossing
* Customized growth
* Doppler context
* Guideline-informed staging support
* Cross-domain maternal and fetal analysis
* Explainable intelligence
* Specialist workflows
* Validation

## 24.4 Horizon Four — Enterprise Integration

Focus:

* Hospital deployment
* FHIR integration
* Electronic-health-record connectivity
* Role-based access
* Audit logs
* Cohort analytics
* Multisite implementation
* Security maturity
* Enterprise reporting

## 24.5 Horizon Five — Regional and Population Scale

Focus:

* Qatar commercialization
* GCC expansion
* Arabic localization
* Market-specific standards
* Institutional partnerships
* Employer and insurer programs
* Population-level analytics
* Research collaboration

Roadmap horizons do not imply approved delivery dates.

Specific timing belongs in the roadmap and implementation documentation.

---

# 25. Product Boundaries

ODRISC must not become:

* A replacement for antenatal care
* An emergency service
* An autonomous diagnostic tool
* A general-purpose health application
* A social-media platform
* A marketplace for unverified services
* A source of unsupported treatment advice
* A substitute for laboratory testing
* A substitute for ultrasound interpretation
* A substitute for maternal-fetal medicine review
* A tool that places clinical responsibility on patients

These boundaries should be reinforced across product, content, design, legal, and support workflows.

---

# 26. Product Safety Principles

Product safety requires:

* Appropriate disclaimers
* Clear escalation language
* Human review
* Data validation
* Explainable alerts
* Conservative handling of uncertainty
* Auditability
* Version control for clinical logic
* Approval of clinical rules
* Transparent capability status
* Secure data handling
* Defined roles and responsibilities

Where data may be incomplete, incorrect, delayed, or conflicting, the product should clearly communicate uncertainty.

It must not create false reassurance.

---

# 27. Privacy and Data Vision

ODRISC will handle sensitive maternal and fetal information.

The platform must be designed around:

* Informed consent
* Data minimization
* Purpose limitation
* Role-based access
* Secure storage
* Secure transmission
* Auditability
* Access control
* Appropriate retention
* Deletion workflows
* Regional compliance
* Transparent privacy communication

Patients should understand:

* What information is collected
* Why it is collected
* Who can access it
* How it is used
* How sharing works
* How consent can be managed

Privacy must be treated as a product capability, not only a legal document.

---

# 28. Product Design Vision

The product experience should communicate intelligence without appearing cold, complex, or intimidating.

## 28.1 Shared Design Character

The Patient and Provider products should feel:

* Connected
* Calm
* Modern
* Precise
* Trustworthy
* Premium
* Human
* Clinically responsible

## 28.2 Patient Product Design

The Patient experience should emphasize:

* Clarity
* Progress
* Reassurance
* Guided actions
* Understandable language
* Simple visualizations
* Accessible monitoring
* Clear next steps

## 28.3 Provider Product Design

The Provider experience should emphasize:

* Information hierarchy
* Longitudinal comparison
* Clinical relevance
* Efficient review
* Explainability
* Prioritization
* Detail on demand
* Workflow continuity

## 28.4 Shared Visual Foundation

The established visual foundation includes:

* White backgrounds
* High negative space
* Text color `#4d4d4d`
* Gradient using `#ff7680` and `#80ffcc`
* Minimalist components
* Controlled use of motion
* Clear data visualizations
* Accessible contrast
* Restrained decorative elements

---

# 29. Website Representation of the Product Vision

The public website must communicate the product vision without presenting the entire internal roadmap as currently available.

The website should explain:

* The problem ODRISC solves
* Why longitudinal understanding matters
* How the Patient and Provider experiences connect
* Which capabilities are currently available
* Which capabilities are in development
* Which professional and institutional pathways exist
* Why ODRISC supports collaboration
* How visitors can take the next relevant action

The website should not:

* Present concepts as completed products
* Publish speculative interfaces as active features
* Conceal product limitations
* Use unsupported validation language
* Use future integrations as proof of current capability
* Imply regulatory status that has not been achieved

---

# 30. Product Decision Test

Before approving a significant product feature, ask:

1. Does this strengthen longitudinal maternal or fetal understanding?
2. Does this support the Patient, the Provider, or their collaboration?
3. Is the clinical purpose clear?
4. Is the capability explainable?
5. Can its safety boundaries be defined?
6. Does it reduce fragmentation?
7. Does it fit the intended workflow?
8. Is the product status clear?
9. Can it be validated?
10. Does it respect privacy?
11. Is it regionally adaptable?
12. Does it belong within the ODRISC product identity?

A feature that fails these questions should be reconsidered.

---

# 31. Product Rules for AI Agents

AI agents must use this document when:

* Defining product requirements
* Suggesting features
* Writing product copy
* Designing product interfaces
* Planning architecture
* Creating roadmaps
* Reviewing implementation
* Producing diagrams
* Generating Patient or Provider journeys

AI agents must not:

* Invent product capabilities
* Treat future roadmap items as available
* Add unrelated health categories
* Reposition ODRISC as a generic pregnancy application
* Reposition ODRISC as an autonomous AI diagnostic platform
* Separate Patient and Provider products into unrelated ecosystems
* Remove the longitudinal intelligence foundation
* Ignore clinical or privacy boundaries
* Create unsupported medical claims
* Assume regulatory approval
* Add technology solely for novelty
* Change locked product decisions without approval

When uncertainty exists, the AI agent must:

* State the uncertainty
* Check the relevant source-of-truth document
* Use the approved product-status register
* Record material unresolved issues in `docs/project/OPEN_QUESTIONS.md`

---

# 32. Current Locked Product Decisions

The following product decisions are currently locked:

1. ODRISC is a maternal and fetal intelligence platform.
2. The platform serves both Patients and healthcare providers.
3. Patient and Provider experiences belong to one connected ecosystem.
4. The platform must focus on longitudinal understanding.
5. ODRISC supports healthcare professionals and does not replace them.
6. Patient-facing information must remain understandable and clinically bounded.
7. Provider-facing information may contain greater clinical depth.
8. Risk assessment must not be presented as diagnosis.
9. Clinical intelligence must be explainable.
10. Product capabilities must be labeled by implementation status.
11. The platform may connect maternal, fetal, laboratory, ultrasound, Doppler, nutrition, activity, and patient-reported information.
12. Patient safety and clinical integrity take priority over engagement.
13. Future hospital integration should be considered in the architecture.
14. Qatar is the primary planned commercial market.
15. The platform should be designed for future GCC expansion.
16. Artificial intelligence is an enabling capability, not the primary product identity.
17. The public website must distinguish available capabilities from roadmap capabilities.
18. The product must preserve patient dignity and avoid weight stigma.
19. The platform must strengthen patient-provider collaboration.
20. The product must not become a general-purpose health or pregnancy-content platform.

---

# 33. Product Questions Still to Be Resolved

The following questions require later approval:

* Which capabilities are available at the first website launch?
* Which capabilities are available in the Patient application?
* Which capabilities are available in the Provider platform?
* Which features are pilot-only?
* Which features remain in development?
* What is the approved product-status register?
* What is the first Patient primary conversion?
* What is the first Provider primary conversion?
* What Patient data can be shared with Providers?
* How will Patient consent be managed?
* Can Providers invite Patients?
* Which Provider roles receive platform access?
* Which clinical alerts are active at launch?
* Which growth standards are implemented first?
* Which Doppler frameworks are implemented first?
* Which clinical rules require formal validation?
* Which OCR provider will be used?
* Which data require manual verification?
* Which hospital systems are prioritized for integration?
* What is the regulatory classification strategy?
* Which countries are included in the first commercial release?
* Which languages are included at launch?
* Which postpartum capabilities belong in the roadmap?
* Which employer and insurer capabilities are approved?
* Which clinical outcomes can be publicly discussed?

These questions must be tracked in:

`docs/project/OPEN_QUESTIONS.md`

---

# 34. Product Vision Success Criteria

The product vision is being achieved when:

## Patient Success

* Patients understand their pregnancy more clearly
* Monitoring feels structured rather than fragmented
* Patients know the limits of the platform
* Patients communicate more effectively with Providers
* Patient-facing information remains understandable
* Weight and risk information remain non-judgmental
* Appropriate professional review is encouraged

## Provider Success

* Providers gain clearer longitudinal visibility
* Maternal and fetal information can be reviewed together
* Clinical logic is explainable
* Workflow burden is minimized
* Alerts support prioritization
* Providers retain clinical authority
* The platform supports multidisciplinary collaboration

## Platform Success

* Patient and Provider experiences remain connected
* Product capabilities share one longitudinal foundation
* Data silos are reduced
* Available and future capabilities are clearly separated
* The platform can scale across markets
* Privacy and safety remain embedded
* Product development remains aligned to maternal and fetal outcomes

---

# 35. Foundational Product Vision Summary

ODRISC is being built as a connected maternal and fetal intelligence platform.

It will serve patients and healthcare providers through two audience-specific experiences that share one longitudinal pregnancy record and one clinical purpose.

The Patient experience will support understanding, preparation, monitoring, nutrition, physical activity, and informed participation.

The Provider experience will support clinical review, maternal monitoring, fetal growth intelligence, pattern recognition, prioritization, and collaboration.

The platform will progressively connect fragmented pregnancy information into explainable longitudinal intelligence.

The long-term product promise is:

> Clinical data becomes longitudinal intelligence. Longitudinal intelligence supports earlier recognition. Earlier recognition supports better monitoring. Better monitoring supports improved maternal and fetal outcomes.
