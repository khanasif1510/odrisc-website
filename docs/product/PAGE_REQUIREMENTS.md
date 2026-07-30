# ODRISC Website Page Requirements

## Document Status

**Document:** Website Page Requirements
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical page-level requirements
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Approval authority:** Founder with designated product, clinical, content, design, SEO, privacy, legal, and engineering reviewers

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
- `docs/product/ROUTE_REGISTRY.md`
- `docs/product/REQUIREMENTS_TRACEABILITY.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/CODING_STANDARDS.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `docs/content/STORY_TO_PAGE_MATRIX.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

---

# 1. Purpose

This document defines the requirements of every approved public page within the ODRISC website architecture.

It determines:

- Why each page exists
- Which audience it serves
- Which visitor question it must answer
- Which part of the ODRISC website story it communicates
- Which sections must appear
- Which content is required
- Which content is conditional
- Which claims are prohibited
- Which product-status dependencies apply
- Which primary action the page supports
- Which search intent it targets
- Which analytics events must be captured
- Which accessibility and performance requirements apply
- Which acceptance criteria must be satisfied

This document is the primary page-level bridge between:

```text
Product Requirements
↓
Information Architecture
↓
Content Briefs
↓
Page Design
↓
Components
↓
Implementation
↓
Testing
```

---

# 2. Scope

This document governs the public website at:

`odrisc.com`

It covers:

- Shared entry pages
- Patient pages
- Provider pages
- Institutional pages
- Resource pages
- Company pages
- Conversion pages
- Legal pages
- Search and utility pages
- Error pages

It does not define the detailed screens of:

- The Patient application
- The Provider platform
- Clinical intelligence dashboards
- Hospital administration interfaces
- Internal operational systems
- Authentication systems
- Clinical algorithm interfaces

Public pages may link to these systems only when the destination, market availability, and public communication status are approved.

---

# 3. Page Requirement Hierarchy

Page implementation must follow this hierarchy:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/project/SOURCE_OF_TRUTH.md`
4. `docs/product/PRODUCT_VISION.md`
5. `docs/product/AUDIENCE.md`
6. `docs/product/WEBSITE_OBJECTIVES.md`
7. `docs/product/WEBSITE_STORY.md`
8. `docs/product/PRD.md`
9. `docs/product/PRODUCT_STATUS.md`
10. `docs/product/INFORMATION_ARCHITECTURE.md`
11. `docs/product/PAGE_REQUIREMENTS.md`
12. Approved content, design, and engineering specifications
13. Current implementation
14. Temporary prompts, mockups, and generated suggestions

A mockup or existing page does not override these page requirements.

---

# 4. Page Requirement Identifiers

Each page uses a stable identifier.

| Prefix   | Page group                     |
| -------- | ------------------------------ |
| `SH-PG`  | Shared and utility pages       |
| `PAT-PG` | Patient pages                  |
| `PRO-PG` | Provider pages                 |
| `RES-PG` | Resource pages                 |
| `COM-PG` | Company pages                  |
| `LEG-PG` | Legal and trust pages          |
| `UTL-PG` | Search, login, and error pages |

Examples:

```text
SH-PG-001
PAT-PG-001
PRO-PG-001
```

Page identifiers must not change when:

- The visible page title changes
- The route label is refined
- The visual layout changes
- A page is localized
- The implementation framework changes

---

# 5. Page Priority

| Priority | Meaning                                                             |
| -------- | ------------------------------------------------------------------- |
| P0       | Required for the initial approved public launch                     |
| P1       | Required before major commercial activation or shortly after launch |
| P2       | Important enhancement                                               |
| P3       | Future consideration                                                |

A conditional page may be designated P0 but remain unpublished until its product-status dependency is satisfied.

---

# 6. Page Status

Every page must use one status:

| Status            | Meaning                                                      |
| ----------------- | ------------------------------------------------------------ |
| Proposed          | Included in architecture but not approved for implementation |
| Approved          | Approved for content and design work                         |
| In content        | Content is being prepared                                    |
| In review         | Under product, clinical, legal, or design review             |
| In design         | Approved content structure is being designed                 |
| In development    | Being implemented                                            |
| Quality assurance | Under testing                                                |
| Published         | Publicly available                                           |
| Restricted        | Available only through controlled access or noindex          |
| Update required   | Published but requires revision                              |
| Retired           | Removed with lifecycle and redirect completed                |

---

# 7. Global Page Requirements

The following apply to every public page unless an explicit exception is documented.

## Motion Compliance

Any page using motion must comply with `docs/design/ANIMATION_GUIDELINES.md`.

Page motion must:

- Support the approved narrative
- Preserve immediate content access
- Use approved tokens
- Include a reduced-motion state
- Preserve clinical meaning
- Avoid implying unavailable functionality
- Remain performant on mobile
- Support RTL where applicable

## 7.1 Audience

Every page must identify one primary audience:

- Shared
- Patient
- Provider
- Institutional

Secondary audiences may be documented but must not dilute the primary purpose.

## 7.2 Purpose

Every page must have one primary purpose.

A page must not be published merely because:

- A competitor has one
- A keyword exists
- A mockup was created
- A capability is planned
- A navigation gap needs filling
- A presentation slide exists

## 7.3 Primary Visitor Question

Every page must answer one primary visitor question.

Additional questions may be answered through progressive disclosure.

## 7.4 Primary Call to Action

Every major page must have one primary CTA.

Secondary CTAs may be included only when they do not compete with the primary action.

## 7.5 Product Status

All capability claims must be verified against:

`docs/product/PRODUCT_STATUS.md`

## 7.6 Clinical Boundaries

Relevant pages must make clear that:

- ODRISC supports healthcare professionals
- ODRISC does not replace professional care
- Risk assessment is not diagnosis
- Website content is not individualized medical advice
- ODRISC is not an emergency service
- Professional interpretation remains necessary

## 7.7 Claim Traceability

Clinical, market, validation, regulatory, product, and outcome claims must be traceable to an approved source.

## 7.8 Mobile Integrity

The section sequence and narrative must remain understandable on mobile.

Essential content must not disappear at smaller breakpoints.

## 7.9 Accessibility

Pages must support:

- Semantic heading structure
- Keyboard access
- Visible focus
- Accessible controls
- Alternative text
- Sufficient contrast
- Reduced-motion preferences
- Non-color-dependent meaning
- Understandable forms and errors

## 7.10 SEO

Every indexable page must contain:

- Unique title
- Unique meta description
- Canonical URL
- One clear primary heading
- Search-intent-aligned content
- Internal links
- Appropriate structured data where applicable
- Indexation status

## 7.11 Analytics

Analytics must not collect:

- Health assessment responses
- Medical history
- Symptoms
- Patient names linked with health data
- Clinical report data
- Identifiable patient information
- Sensitive form content

## 7.12 Performance

Pages must avoid:

- Unnecessary blocking scripts
- Oversized media
- Decorative video that impairs loading
- Excessive scroll animation
- Layout shifts
- Unoptimized third-party embeds

## 7.13 Publication Readiness

A page may be published only after:

- Page requirement approval
- Content approval
- Product-status review
- Clinical review where required
- Legal and privacy review where required
- CTA destination verification
- Design review
- Accessibility review
- SEO review
- Analytics verification
- Technical QA

---

# 8. Standard Page Narrative

Unless another sequence is explicitly approved, major pages should follow:

```text
Audience recognition
↓
Problem or need
↓
Why the need matters
↓
ODRISC response
↓
How it works
↓
Relevant capability or evidence
↓
Trust and limitations
↓
Primary action
```

Pages must not open with an unstructured feature catalogue.

---

# 9. Standard Page Specification Fields

Every page specification includes:

- Page ID
- Route
- Priority
- Status
- Audience
- Page type
- PRD requirements
- Primary purpose
- Primary visitor question
- Narrative role
- Primary CTA
- Secondary CTA
- Product-status dependency
- Required section sequence
- Required content
- Conditional content
- Prohibited content
- SEO intent
- Analytics
- Accessibility considerations
- Acceptance criteria
- Test requirements

---

# 10. Shared Entry Page

## SH-PG-001 — Shared Audience Entry

**Route:** `/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Shared
**Page type:** Audience gateway and shared brand entry
**PRD requirements:** SHR-001, SHR-002, SHR-003, SHR-004, SHR-005, SHR-006, SHR-009, SHR-011, UX-001, ACC-001, SEO-003, ANL-001

### Primary Purpose

Introduce the ODRISC premise and route visitors toward the Patient or Healthcare Provider experience.

### Primary Visitor Question

> Which ODRISC experience is relevant to me?

### Narrative Role

Introduce:

> Every Pregnancy Has a Story.

Establish one connected brand before audience selection.

### Primary CTA

- Patient
- Healthcare Provider

These are two equal audience choices rather than a primary and secondary CTA.

### Secondary CTA

- Learn about ODRISC

Optional and subordinate to audience selection.

### Product-Status Dependency

None for the gateway itself.

The wording must not imply that all platform capabilities are available.

### Required Section Sequence

1. Brand header
2. Foundational headline
3. Short shared explanation
4. Patient audience option
5. Healthcare Provider audience option
6. Switching reassurance
7. Shared trust cue
8. Minimal shared footer

### Required Content

- ODRISC name and identity
- Foundational narrative
- Patient option
- Provider option
- Explanation that users may switch later
- Access to About, Resources, Contact, Privacy, and Terms
- Appropriate login route only when available

### Conditional Content

- Short product animation
- Brief Patient and Provider summaries
- Returning-audience preference
- Language or market selector
- Founder or team trust cue

### Prohibited Content

- Full Patient and Provider navigation simultaneously
- A third primary option for investors or institutions
- Product feature overload
- Forced registration
- Forced questionnaire
- Automatic redirection without approval
- Unsupported product-status language
- Clinical burden statistics presented without narrative context

### SEO Intent

Primary intent:

- ODRISC
- ODRISC maternal and fetal intelligence
- ODRISC pregnancy care

The root page is the primary brand page.

### Analytics

Track:

- Gateway viewed
- Patient selected
- Provider selected
- About selected
- Language selected
- Login selected
- Audience preference used

### Accessibility Considerations

- Audience cards must be keyboard-operable
- Audience choices must use descriptive labels
- Selection must not depend on hover
- Motion must respect reduced-motion preferences
- The two options must have equal semantic importance

### Acceptance Criteria

- ODRISC is clearly presented as one platform
- Patient and Provider choices are immediately understandable
- Direct audience selection works on mobile and desktop
- No authentication is required
- Shared footer links work
- Analytics events fire once per valid interaction
- The gateway does not block deep links
- The gateway passes keyboard and focus testing

### Test Requirements

- **Requirement IDs:** SHR-001, SHR-002, SHR-003, SHR-004, SHR-005, SHR-006, SHR-009, SHR-011, SHR-020, UX-001, ACC-001, SEO-003, ANL-001
- **Page ID:** SH-PG-001
- **Risk priority:** P0 and release blocking
- **Static validations:** Validate the `/` route, Page ID, requirement traceability, indexation, content and claim rules, analytics-event registration, architecture boundaries, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover audience-route mapping, optional audience-preference behavior, consent-aware analytics construction, and prevention of duplicate audience-selection events.
- **Required Component IDs and component tests:** `CMP-FTR-001` Audience Gateway; verify equal Patient and Provider semantics, keyboard operation, accessible names, routing, focus behavior, reduced motion, and one valid analytics event per selection.
- **E2E journeys:** `TST-E2E-001`; load the shared root, understand both audience choices, enter the Patient journey, return, enter the Provider journey, and verify that direct deep links remain available.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify responsive audience choices, touch targets, focus visibility, and navigation.
- **Accessibility automation:** Run Storybook Axe checks against `CMP-FTR-001` and Playwright Axe checks against `/`.
- **Manual accessibility review:** Verify keyboard-only operation, visible focus, reading order, accessible audience labels, 200% zoom, narrow-viewport reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run the `arabic-rtl` project; verify translated content, reading order, logical layout, audience-choice parity, and qualified Arabic review.
- **Reduced-motion coverage:** Run the `reduced-motion` project and verify that audience selection and content access remain complete without non-essential motion.
- **Visual-regression coverage:** Capture approved stable screenshots for desktop, mobile, and Arabic RTL gateway layouts in the controlled Playwright baseline environment.
- **Product Status tests:** Verify that the gateway does not imply that every platform capability, login destination, language, or market pathway is currently available.
- **Clinical-review requirement:** Required when clinical statistics, outcomes, risk statements, or clinical claims appear; otherwise record as not applicable with reviewer evidence.
- **Form or integration tests:** No form submission applies. Test Patient and Provider route handoffs, optional preference behavior, consent-aware analytics, and valid footer destinations.
- **Performance-budget tests:** Test `/` against the approved page, Core Web Vitals, JavaScript, image, font, and motion budgets defined in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe internal and external navigation, absence of secrets and Patient data, consent-controlled analytics, and no unauthorized redirect behavior.
- **Staging smoke:** Load `/`, verify both audience routes, shared footer links, approved language behavior, analytics consent behavior, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify root availability, Patient and Provider navigation, essential footer links, approved public content, and health without submitting data.

---

# 11. Patient Pages

## PAT-PG-001 — Patient Homepage

**Route:** `/patients/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Patient
**Page type:** Audience homepage
**PRD requirements:** PAT-001, PAT-007, PAT-008, PAT-010, UX-001, UX-002, UX-003, SEO-001, ANL-002

### Primary Purpose

Help women understand how ODRISC may support preparation, pregnancy monitoring, understanding, and communication with healthcare professionals.

### Primary Visitor Question

> How can ODRISC support me before or during pregnancy?

### Narrative Role

Move the visitor from uncertainty toward understanding and informed participation.

### Primary CTA

`To confirm through approved Patient conversion`

Potential approved actions:

- Assess My Risk
- Start My Journey
- Begin Monitoring
- Access ODRISC

Only one may be primary at launch.

### Secondary CTA

- Learn How ODRISC Helps

### Product-Status Dependency

All Patient-facing capability descriptions must reflect the Product Status register.

### Required Section Sequence

1. Patient-oriented hero
2. Recognition of Patient needs
3. Fragmentation and uncertainty problem
4. How ODRISC helps connect the pregnancy journey
5. Patient capability overview
6. Pregnancy-stage or relevance pathways
7. Patient-Provider collaboration
8. Safety and clinical boundaries
9. Trust and professional involvement
10. FAQs preview
11. Final Patient CTA

### Required Content

- Plain-language product explanation
- Preconception and pregnancy relevance
- Risk-awareness explanation
- Weight, nutrition, and physical-activity overview where approved
- Maternal and fetal progress explanation
- Professional-care boundary
- Privacy reassurance
- Approved availability statement
- Clear next action

### Conditional Content

- Membership
- Patient application screenshots
- Testimonials
- Professional-support plans
- IVF pathway
- PCOS pathway
- Arabic availability
- Market-specific pricing

### Prohibited Content

- Autonomous medical advice
- Guaranteed prevention
- Diagnostic claims
- Weight-shaming language
- Appearance-focused language
- Excessive clinical terminology
- Generic pregnancy-content positioning
- Roadmap features presented as active

### SEO Intent

Primary themes:

- Pregnancy monitoring support
- Pregnancy wellness and monitoring
- Preconception and pregnancy support
- Maternal and fetal progress

The title must not imply medical-device approval unless confirmed.

### Analytics

Track:

- Patient homepage viewed
- Primary CTA clicked
- Capability card selected
- Preconception pathway selected
- Pregnancy pathway selected
- FAQ opened
- Provider switch selected
- Application handoff selected

### Accessibility Considerations

- Plain-language headings
- Accessible diagrams
- No reliance on gradient text for essential meaning
- Patient progress visuals must have text alternatives
- CTA sequence must remain clear on mobile

### Acceptance Criteria

- A Patient can explain ODRISC in simple language after reviewing the page
- The healthcare professional remains central
- The primary CTA has a working destination
- Capability wording matches Product Status
- Patient content remains non-stigmatizing
- Mobile narrative order remains coherent
- Audience switch is visible
- Patient and Provider language are not mixed

### Test Requirements

- **Requirement IDs:** PAT-001, PAT-007, PAT-008, PAT-010, SHR-020, UX-001, UX-002, UX-003, SEO-001, ANL-002
- **Page ID:** PAT-PG-001
- **Risk priority:** P0 and release blocking
- **Static validations:** Validate the `/patients/` route, Page ID, requirement traceability, indexation, Product Status vocabulary, clinical-boundary content, analytics events, internal links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Product Status mapping, Patient CTA destination selection, unavailable-destination behavior, consent-aware analytics filtering, route generation, and safe public capability models.
- **Required Component IDs and component tests:** `CMP-FTR-101` Patient Hero, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, `CMP-NAV-005` Audience Switcher, and `CMP-TRS-001` Product Status Badge. Test accessible rendering, navigation, focus, mobile state, Patient/Provider switching, Product Status variants, RTL, and reduced motion.
- **E2E journeys:** `TST-E2E-002`; open the Patient homepage, navigate through primary Patient sections, view Product Status and the clinical boundary, reach the approved Patient Start destination, and recover safely when that destination is unavailable.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify the Patient hero, navigation drawer, CTA visibility, touch targets, content reflow, and approved handoff behavior.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/patients/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, skip-link behavior, heading hierarchy, landmark structure, link purpose, Product Status comprehension, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent Patient meaning, clinical-boundary visibility, Product Status meaning, logical layout, navigation direction, CTA equivalence, and qualified Arabic review.
- **Reduced-motion coverage:** Run `reduced-motion`; verify that hero, navigation, transitions, and capability presentation remain understandable and operable without non-essential motion.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, and reduced-motion baselines for the Patient homepage and material navigation states.
- **Product Status tests:** Verify current and future capabilities use approved status values, unavailable capabilities do not present operational CTAs, and Patient-facing wording matches the Product Status register.
- **Clinical-review requirement:** Required for Patient-facing clinical context, risk or outcome wording, clinical boundaries, and illustrative clinical information.
- **Form or integration tests:** No embedded form is required. Test the approved Patient Start handoff, unavailable-destination recovery, analytics events, consent behavior, and absence of sensitive query parameters.
- **Performance-budget tests:** Test `/patients/` against approved Core Web Vitals, JavaScript, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe Patient handoff configuration, no Patient or clinical data collection, consent-controlled analytics, safe external links, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Verify page availability, Patient navigation, Product Status display, clinical boundary, primary CTA, unavailable-destination recovery, Arabic route behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/patients/`, essential navigation, approved Product Status wording, clinical boundary, and operational CTA or approved unavailable state without submitting data.

---

## PAT-PG-002 — How ODRISC Helps

**Route:** `/patients/how-odrisc-helps/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Patient
**Page type:** Patient product overview
**PRD requirements:** PAT-001, PAT-002, PAT-007, UX-001, UX-002

### Primary Purpose

Explain the ODRISC Patient experience without requiring clinical or technical knowledge.

### Primary Visitor Question

> What does ODRISC actually help me understand or do?

### Narrative Role

Translate fragmented pregnancy information into a clear Patient-level longitudinal story.

### Primary CTA

- Start My Journey, subject to approval

### Secondary CTA

- Explore Patient Support

### Product-Status Dependency

High.

Every described capability must use approved availability wording.

### Required Section Sequence

1. Patient problem statement
2. Pregnancy as an evolving journey
3. What ODRISC connects
4. How ODRISC organizes progress over time
5. How the Patient participates
6. How healthcare professionals remain involved
7. Available support areas
8. Limitations and safety
9. Primary CTA

### Required Content

- Plain-language explanation of longitudinal monitoring
- Patient role
- Provider role
- Overview of available Patient capabilities
- Privacy and consent principles
- Explanation that ODRISC is not an emergency service

### Conditional Content

- Shared timeline demonstration
- Patient application preview
- Provider-sharing workflow
- Professional-support tiers

### Prohibited Content

- Technical architecture
- FHIR explanations
- Specialist fetal-growth terminology as primary content
- “AI manages your pregnancy”
- “Never miss a complication”

### SEO Intent

- How pregnancy monitoring works
- Pregnancy tracking with professional support
- Understanding pregnancy progress

### Analytics

- Page viewed
- Capability selected
- Safety section viewed
- Start CTA clicked
- Relevant Patient page selected

### Acceptance Criteria

- The page explains the Patient product without becoming a feature grid
- Longitudinal understanding is clearly communicated
- Product limitations are visible
- The page routes to relevant Patient capabilities
- No unavailable feature is presented as active

### Test Requirements

- **Requirement IDs:** PAT-001, PAT-002, PAT-007, SHR-020, UX-001, UX-002
- **Page ID:** PAT-PG-002
- **Risk priority:** P0 and release blocking
- **Static validations:** Validate the `/patients/how-odrisc-helps/` route, Page ID, requirement traceability, indexation, Product Status vocabulary, clinical-boundary content, internal links, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Product Status mapping, capability-card data, canonical Patient-route generation, approved CTA destination selection, unavailable-capability handling, and consent-aware analytics events.
- **Required Component IDs and component tests:** No page-specific feature component ID is currently registered. Test the applicable shared `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, `CMP-NAV-005` Audience Switcher, and `CMP-TRS-001` Product Status Badge. Register any reusable Patient product-overview component before implementation.
- **E2E journeys:** Include the page in `TST-E2E-002`; navigate from the Patient homepage, understand the longitudinal Patient proposition, verify limitations and Product Status, follow links to relevant Patient capabilities, and test the approved Patient Start CTA or unavailable state.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify narrative order, capability navigation, CTA visibility, touch targets, content reflow, and Product Status presentation.
- **Accessibility automation:** Run Storybook Axe checks for applicable registered components and Playwright Axe checks against `/patients/how-odrisc-helps/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, heading hierarchy, landmark structure, link purpose, capability and limitation comprehension, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent longitudinal meaning, logical order, capability links, limitations, Product Status meaning, CTA equivalence, and qualified Arabic review.
- **Reduced-motion coverage:** Run `reduced-motion`; verify that narrative progression, capability explanation, and CTA access remain complete without non-essential motion.
- **Visual-regression coverage:** Capture controlled desktop, mobile, and Arabic RTL baselines for stable page structure, capability presentation, Product Status, and CTA states.
- **Product Status tests:** Verify every described capability uses approved availability wording, future functionality is not presented as active, and the CTA appears only with an approved working destination.
- **Clinical-review requirement:** Required for descriptions of Patient support, longitudinal monitoring, clinical boundaries, outcomes, risk statements, and professional involvement.
- **Form or integration tests:** No embedded form applies. Test Patient capability routes, the approved Patient Start handoff, unavailable-destination recovery, analytics events, consent behavior, and absence of sensitive query parameters.
- **Performance-budget tests:** Test `/patients/how-odrisc-helps/` against approved Core Web Vitals, JavaScript, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe route and handoff behavior, no Patient or clinical-data collection, consent-controlled analytics, safe external links, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Verify page availability, Patient navigation, capability links, Product Status and limitations, primary CTA or approved unavailable state, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify the published route, essential navigation, approved capability wording, visible limitations, and operational CTA or approved unavailable state without submitting data.

---

## PAT-PG-003 — Preparing for Pregnancy

**Route:** `/patients/preparing-for-pregnancy/`
**Priority:** P1
**Initial status:** Approved
**Audience:** Patient
**Page type:** Journey page
**PRD requirements:** PAT-002, PAT-003, PAT-004, PAT-005, PAT-006

### Primary Purpose

Support women preparing for conception, including those with PCOS, metabolic risk, or planned assisted reproduction.

### Primary Visitor Question

> What should I understand or prepare before pregnancy?

### Narrative Role

Move from preparation uncertainty toward structured readiness and professional discussion.

### Primary CTA

- Explore Preconception Support

### Secondary CTA

- Understand My Risk

Only when risk assessment is publicly available.

### Product-Status Dependency

- Risk assessment
- Preconception weight monitoring
- Nutrition
- Physical activity
- IVF readiness tools

### Required Section Sequence

1. Why preparation may matter
2. Who this page is for
3. Areas of preconception readiness
4. Risk awareness
5. Weight and metabolic health
6. Nutrition and physical activity
7. PCOS and assisted-reproduction context
8. Professional discussion
9. Available ODRISC support
10. CTA

### Required Content

- Non-alarmist preparation message
- Recognition of individual differences
- Professional-care guidance
- Clear distinction between available capabilities and future readiness tools
- Links to Risk Awareness, Weight Monitoring, Nutrition, and Physical Activity

### Conditional Content

- PCOS child page
- IVF readiness child page
- Preconception assessment
- Market-specific professional programs

### Prohibited Content

- Guaranteed conception
- Universal weight-loss requirements
- Fertility-treatment claims
- Prevention guarantees
- Implication that all women require the same preparation plan

### SEO Intent

- Preconception health
- Preparing for pregnancy
- PCOS pregnancy preparation
- IVF pregnancy preparation
- Pregnancy metabolic health preparation

### Analytics

- Page viewed
- Risk pathway selected
- PCOS pathway selected
- IVF pathway selected
- Weight support selected
- CTA clicked

### Acceptance Criteria

- Preconception support is distinct from pregnancy support
- PCOS and IVF language remains responsible
- No future readiness score is presented as available without approval
- Links route to canonical Patient pages
- Professional involvement is visible

### Test Requirements

- **Requirement IDs:** PAT-002, PAT-003, PAT-004, PAT-005, PAT-006, SHR-020
- **Page ID:** PAT-PG-003
- **Risk priority:** P1, with elevated clinical-content risk
- **Static validations:** Validate the `/patients/preparing-for-pregnancy/` route, Page ID, requirement traceability, indexation, Product Status vocabulary, clinical-claim references, internal links, content metadata, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Product Status mappings for risk assessment, preconception weight monitoring, nutrition, physical activity, and IVF-readiness content; canonical Patient links; CTA destination selection; and consent-aware analytics.
- **Required Component IDs and component tests:** No page-specific feature component ID is currently registered. Test applicable shared navigation and `CMP-TRS-001` Product Status Badge behavior. Register reusable preconception or journey components before implementation.
- **E2E journeys:** Include the route in the changed-feature Patient journey associated with `TST-E2E-002`; navigate from Patient pages, distinguish preconception from pregnancy support, verify professional involvement, follow canonical capability links, and test the approved CTA or unavailable state.
- **Browser projects:** `chromium-desktop` for changed-feature verification; include `firefox-desktop` and `webkit-desktop` when the page enters a release scope; use `arabic-rtl` and `reduced-motion` where applicable.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify journey order, clinical-content readability, touch targets, capability links, CTA visibility, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for applicable registered components and Playwright Axe checks against `/patients/preparing-for-pregnancy/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, link purpose, clinical-content comprehension, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic publication is in scope; verify equivalent preconception, PCOS, IVF, Product Status, professional-support, and CTA meaning with qualified Arabic review.
- **Reduced-motion coverage:** Run `reduced-motion` for any material journey or capability animation and verify complete content access without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable journey structure, clinical-boundary presentation, Product Status, and CTA states when the page enters visual-regression scope.
- **Product Status tests:** Verify that risk assessment, preconception monitoring, nutrition, physical activity, and IVF-readiness capabilities use approved status language and that future tools are not presented as currently available.
- **Clinical-review requirement:** Required for preconception, PCOS, IVF, weight, nutrition, physical-activity, risk, outcome, and professional-support statements.
- **Form or integration tests:** No embedded form applies. Test canonical Patient capability routes, approved CTA handoff, unavailable-destination recovery, analytics consent, and absence of sensitive query parameters.
- **Performance-budget tests:** Test the route against approved page, Core Web Vitals, JavaScript, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation and handoffs, no collection of Patient or fertility information, consent-controlled analytics, safe external links, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** When included in staging scope, verify route availability, Patient navigation, preconception/pregnancy distinction, Product Status, clinical boundaries, CTA behavior, Arabic behavior where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when published; use a non-destructive check of route availability, essential links, approved clinical and Product Status wording, and CTA or unavailable state without submitting data.

---

## PAT-PG-004 — During Pregnancy

**Route:** `/patients/during-pregnancy/`
**Priority:** P1
**Initial status:** Approved
**Audience:** Patient
**Page type:** Journey page
**PRD requirements:** PAT-002, PAT-004, PAT-005, PAT-006, PAT-007

### Primary Purpose

Provide one Patient-oriented overview of how ODRISC may support the pregnancy journey across trimesters.

### Primary Visitor Question

> How can I follow and understand my progress during pregnancy?

### Primary CTA

- Explore Pregnancy Monitoring

### Secondary CTA

- View Patient Support Areas

### Product-Status Dependency

All Patient monitoring and support capabilities.

### Required Section Sequence

1. Pregnancy changes over time
2. Why continuity matters
3. Trimester progression
4. Weight monitoring
5. Nutrition
6. Physical activity
7. Maternal and fetal progress
8. Preparing for appointments
9. Safety and professional care
10. CTA

### Required Content

- Trimester-aware but not week-by-week generic content
- Longitudinal progress explanation
- Links to canonical capability pages
- Clear safety language
- Provider collaboration message

### Conditional Content

- Patient timeline preview
- Weekly or monthly monitoring demonstrations
- App screenshots
- Professional-support plans

### Prohibited Content

- Generic pregnancy encyclopedia structure
- Emergency triage
- Diagnosis
- Unapproved symptom-alert functionality
- Universal dietary or activity instructions

### SEO Intent

- Pregnancy progress monitoring
- Pregnancy weight and nutrition support
- Understanding pregnancy changes

### Analytics

- Page viewed
- Trimester content selected
- Weight page selected
- Nutrition page selected
- Physical-activity page selected
- Progress page selected
- CTA clicked

### Acceptance Criteria

- The page connects support areas into one pregnancy journey
- It does not duplicate detailed capability pages
- It avoids generic pregnancy-content positioning
- Professional care remains central
- Patient safety language is present

### Test Requirements

- **Requirement IDs:** PAT-002, PAT-004, PAT-005, PAT-006, PAT-007, SHR-020
- **Page ID:** PAT-PG-004
- **Risk priority:** P1, with elevated Patient-safety and clinical-content risk
- **Static validations:** Validate the `/patients/during-pregnancy/` route, Page ID, requirement traceability, indexation, Product Status vocabulary, safety and clinical-boundary content, claim references, internal links, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Product Status mappings for monitoring, weight, nutrition, physical activity, and progress capabilities; canonical Patient-route generation; CTA destination selection; unavailable-capability handling; and consent-aware analytics.
- **Required Component IDs and component tests:** No page-specific journey component ID is currently registered. Test applicable shared navigation and `CMP-TRS-001` Product Status Badge behavior. Register reusable pregnancy-journey components before implementation.
- **E2E journeys:** Include the route in the changed-feature Patient journey associated with `TST-E2E-002`; navigate from Patient pages, understand the connected pregnancy-support journey, verify professional-care and safety boundaries, follow canonical capability links, and test the approved CTA or unavailable state.
- **Browser projects:** `chromium-desktop` for changed-feature verification; include `firefox-desktop` and `webkit-desktop` when the page enters a release scope; use `arabic-rtl` and `reduced-motion` where applicable.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify journey order, safety-content prominence, touch targets, capability links, CTA visibility, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for applicable registered components and Playwright Axe checks against `/patients/during-pregnancy/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, link purpose, safety and clinical-boundary comprehension, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic publication is in scope; verify equivalent pregnancy-support, safety, professional-care, Product Status, and CTA meaning with qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion` for material journey or capability animation and verify complete content and CTA access without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable journey structure, safety and clinical-boundary presentation, Product Status, and CTA states when the page enters visual-regression scope.
- **Product Status tests:** Verify that every Patient monitoring and support capability uses approved availability wording and that unavailable or future functionality is not presented as operational.
- **Clinical-review requirement:** Required for pregnancy monitoring, weight, nutrition, physical activity, maternal or fetal progress, safety, outcome, and professional-care statements.
- **Form or integration tests:** No embedded form applies. Test canonical Patient capability routes, the approved CTA handoff, unavailable-destination recovery, analytics consent, and absence of sensitive query parameters.
- **Performance-budget tests:** Test the route against approved page, Core Web Vitals, JavaScript, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation and handoffs, no collection of pregnancy or clinical information, consent-controlled analytics, safe external links, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** When included in staging scope, verify route availability, Patient navigation, connected support areas, safety and clinical boundaries, Product Status, CTA behavior, Arabic behavior where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when published; use a non-destructive check of route availability, essential links, approved safety, clinical and Product Status wording, and CTA or unavailable state without submitting data.

---

## PAT-PG-005 — Risk Awareness

**Route:** `/patients/risk-awareness/`
**Priority:** P0 when public risk assessment is approved; otherwise P1
**Initial status:** Conditional approval
**Audience:** Patient
**Page type:** Capability and educational page
**PRD requirements:** PAT-003, PAT-007, PAT-010

### Primary Purpose

Help women understand pregnancy-related risk factors and the difference between awareness, assessment, testing, and diagnosis.

### Primary Visitor Question

> What does pregnancy risk mean, and how can I understand factors relevant to me?

### Primary CTA

- Assess My Risk

Only when the risk assessment is publicly available.

### Secondary CTA

- Discuss Risk With My Healthcare Professional

### Product-Status Dependency

Gestational Diabetes Risk Assessment.

### Required Section Sequence

1. Risk is not diagnosis
2. Why earlier awareness may matter
3. Examples of relevant risk factors
4. How ODRISC risk assessment works
5. What the result means
6. What the result does not mean
7. Role of clinical testing
8. Privacy and data handling
9. CTA
10. Safety and FAQ

### Required Content

- Risk categories only when approved
- Contributing-factor explanation
- Clear clinical-testing boundary
- Population and evidence context
- Appropriate self-blame prevention
- Privacy explanation

### Conditional Content

- Assessment embed
- Assessment handoff
- Sample result
- Downloadable summary
- Provider-sharing option

### Prohibited Content

- Diagnosis
- Certainty language
- “Prevent gestational diabetes”
- Replacement of OGTT or other approved testing
- Unsupported risk accuracy
- Fear-based complication imagery

### SEO Intent

- Gestational diabetes risk assessment
- Pregnancy diabetes risk factors
- GDM risk awareness
- Pregnancy metabolic risk

### Analytics

Permitted:

- Assessment CTA clicked
- Assessment started
- Assessment completed
- General result-screen reached

Not permitted in general analytics:

- Individual risk answers
- Risk category linked to identity
- Medical-history responses

### Acceptance Criteria

- Risk and diagnosis are clearly distinguished
- Clinical testing remains necessary
- The CTA appears only when the assessment is available
- Product-status wording is current
- Analytics does not collect sensitive answers
- Sources and review dates are available

### Test Requirements

- **Requirement IDs:** PAT-003, PAT-007, PAT-010, SHR-020
- **Page ID:** PAT-PG-005
- **Risk priority:** P0 and release blocking when the public risk assessment is approved; otherwise P1 with high clinical, privacy, and Product Status risk
- **Static validations:** Validate the `/patients/risk-awareness/` route, Page ID, requirement traceability, conditional indexation, Product Status vocabulary, risk-versus-diagnosis language, clinical references and review dates, CTA availability, analytics-event definitions, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Gestational Diabetes Risk Assessment Product Status mapping, approved CTA destination selection, unavailable-assessment behavior, risk-versus-diagnosis content contracts, source and review-date metadata, consent-aware analytics, and exclusion of assessment answers from events.
- **Required Component IDs and component tests:** No risk-assessment page component ID is currently registered. Test applicable shared navigation and `CMP-TRS-001` Product Status Badge behavior. Register any reusable risk-awareness, evidence, or assessment-handoff component before implementation.
- **E2E journeys:** Include the route in `TST-E2E-002` when it is part of the published Patient journey; verify risk and diagnosis distinction, clinical-testing guidance, Product Status, source visibility, CTA presence only when approved, safe handoff, and recovery from an unavailable destination.
- **Browser projects:** When P0 and public, run `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`; otherwise run changed-feature `chromium-desktop` with applicable locale and motion projects.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari` when published; verify risk-language readability, clinical-testing guidance, source access, CTA state, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for applicable registered components and Playwright Axe checks against `/patients/risk-awareness/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, risk and diagnosis comprehension, source and review-date access, CTA state, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic publication is in scope; verify equivalent risk, diagnosis, clinical-testing, Product Status, source, and CTA meaning with qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion` for any material risk, evidence, or CTA animation and verify complete access without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable risk-versus-diagnosis messaging, clinical boundary, evidence metadata, Product Status, and available/unavailable CTA states when the page enters visual-regression scope.
- **Product Status tests:** Verify the Gestational Diabetes Risk Assessment uses its approved status, the assessment CTA appears only when publicly available, and planned or unavailable assessment behavior is communicated accurately.
- **Clinical-review requirement:** Mandatory for risk-factor, prevalence, screening, diagnosis, outcome, clinical-testing, evidence, and limitation statements, including source and review-date approval.
- **Form or integration tests:** If the assessment is an external or application handoff, test the approved destination, unavailable state, return path, and absence of sensitive query parameters. Verify that analytics never captures assessment answers or health information.
- **Performance-budget tests:** Test the route against approved page, Core Web Vitals, JavaScript, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe assessment handoff, no collection or logging of risk answers or Patient data by the public page, consent-controlled analytics, safe external links, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** When included in staging scope, verify route availability, risk-versus-diagnosis wording, clinical-testing guidance, Product Status, source metadata, CTA or unavailable state, analytics privacy, Arabic behavior where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when published; use a non-destructive check of route availability, approved risk and clinical wording, current Product Status, source visibility, and CTA or unavailable state without entering or submitting health information.

---

## PAT-PG-006 — Weight Monitoring

**Route:** `/patients/weight-monitoring/`
**Priority:** P0 when publicly available
**Initial status:** Conditional approval
**Audience:** Patient
**Page type:** Capability page
**PRD requirements:** PAT-004, PAT-007

### Primary Purpose

Explain health-focused, longitudinal weight monitoring before and during pregnancy.

### Primary Visitor Question

> How can I understand whether my weight is changing appropriately over time?

### Primary CTA

- Start Weight Monitoring

Only when available.

### Secondary CTA

- Learn About Pregnancy Support

### Product-Status Dependency

Weight Monitoring Tool.

### Required Section Sequence

1. Why weight trajectory matters
2. Preconception and pregnancy distinction
3. Why one measurement is not the full story
4. How longitudinal monitoring works
5. Progress and visualization
6. Professional context
7. Safety and limitations
8. Available access or CTA

### Required Content

- Starting context
- Trend and progression
- Pregnancy-stage relevance
- Non-stigmatizing language
- Individual variation
- Appropriate professional review
- Approved alerts only if publicly supported

### Conditional Content

- Tool screenshots
- Daily logging
- Weekly trends
- Pregnancy timeline
- Goal views
- Membership inclusion

### Prohibited Content

- Appearance-focused imagery
- Shame or blame
- Guaranteed healthy weight gain
- Universal targets without context
- General weight-loss marketing
- Unapproved medical-alert claims

### SEO Intent

- Pregnancy weight monitoring
- Gestational weight gain tracking
- Preconception weight monitoring
- Healthy pregnancy weight progression

### Analytics

- Page viewed
- Preconception tab selected
- Pregnancy tab selected
- Tool preview viewed
- Start CTA clicked
- Membership selected

### Acceptance Criteria

- Preconception and gestational monitoring are clearly separated
- Language is non-stigmatizing
- Clinical context is visible
- CTA and feature descriptions match Product Status
- Visualizations include accessible explanations

### Test Requirements

- **Requirement IDs:** PAT-004, PAT-007, SHR-020
- **Page ID:** PAT-PG-006
- **Risk priority:** P0 and release blocking when Weight Monitoring is publicly available; otherwise conditional P1 with elevated clinical and Product Status risk
- **Static validations:** Validate the `/patients/weight-monitoring/` route, Page ID, requirement traceability, conditional indexation, Product Status vocabulary, preconception-versus-pregnancy terminology, clinical references, CTA availability, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Weight Monitoring Tool Product Status mapping, preconception and gestational content models, approved CTA destination selection, unavailable-tool behavior, accessible visualization data, route generation, and consent-aware analytics.
- **Required Component IDs and component tests:** `CMP-DAT-001` Chart Frame and `CMP-TRS-001` Product Status Badge, plus applicable shared navigation. Test accessible chart titles, summaries and alternatives; empty and unavailable states; Product Status variants; RTL behavior; reduced motion; and CTA state. Register any reusable weight-monitoring feature component before implementation.
- **E2E journeys:** Include the route in `TST-E2E-002` when it is part of the published Patient journey; distinguish preconception from gestational monitoring, verify non-stigmatizing clinical context, inspect accessible visualization explanations, confirm Product Status, and test the approved CTA or unavailable state.
- **Browser projects:** When P0 and public, run `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`; otherwise run changed-feature `chromium-desktop` with applicable locale and motion projects.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari` when published; verify content order, chart reflow, text alternatives, touch targets, CTA state, and narrow-viewport readability.
- **Accessibility automation:** Run Storybook Axe checks for `CMP-DAT-001`, `CMP-TRS-001`, and other applicable registered components, plus Playwright Axe checks against `/patients/weight-monitoring/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, non-stigmatizing comprehension, chart text alternatives, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic publication is in scope; verify equivalent preconception and pregnancy meaning, non-stigmatizing language, Product Status, chart labels and reading order, CTA state, and qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion` for chart, progress, or CTA animation and verify equivalent values, explanations, and controls without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable desktop, mobile, Arabic RTL, chart, Product Status, and available/unavailable CTA states when the page enters visual-regression scope.
- **Product Status tests:** Verify the Weight Monitoring Tool uses its approved availability status, its CTA appears only when operationally available, and future or restricted functionality is not represented as active.
- **Clinical-review requirement:** Mandatory for preconception weight, gestational weight gain, BMI, monitoring, target, safety, outcome, and professional-care statements, including chart interpretation language.
- **Form or integration tests:** No public weight-entry form applies unless separately approved. Test the application handoff, unavailable state, return path, analytics events, consent behavior, and absence of weight or health information in URLs and analytics.
- **Performance-budget tests:** Test the route and `CMP-DAT-001` against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe application handoff, no public-page collection or logging of weight, BMI, pregnancy, or Patient data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** When included in staging scope, verify route availability, preconception/pregnancy distinction, non-stigmatizing clinical context, Product Status, accessible chart explanation, CTA or unavailable state, analytics privacy, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when published; use a non-destructive check of route availability, approved clinical wording, current Product Status, accessible visualization, and CTA or unavailable state without entering or submitting weight or health information.

---

## PAT-PG-007 — Nutrition

**Route:** `/patients/nutrition/`
**Priority:** P0 when publicly available
**Initial status:** Conditional approval
**Audience:** Patient
**Page type:** Capability page
**PRD requirements:** PAT-005, PAT-007

### Primary Purpose

Explain ODRISC Medical Nutrition Therapy and structured pregnancy nutrition support.

### Primary Visitor Question

> How can ODRISC help me follow appropriate nutrition before or during pregnancy?

### Primary CTA

- Explore Nutrition Support

### Secondary CTA

- View Membership

When commercial access is active.

### Product-Status Dependency

Medical Nutrition Therapy and professional-support availability.

### Required Section Sequence

1. Nutrition needs change across the pregnancy journey
2. Generic advice versus structured support
3. How ODRISC nutrition support is developed
4. Personalization dimensions
5. Portion and meal-plan format
6. Professional involvement
7. Safety and limitations
8. Access or membership CTA

### Required Content

- Qualified professional involvement
- Pregnancy-stage relevance
- Vegetarian and non-vegetarian support where available
- Regionally appropriate meal planning where available
- Portion formats where available
- Medical-condition boundary
- Availability and plan status

### Conditional Content

- Sample plan
- Professional profile
- One-to-one support
- Market-specific foods
- Arabic nutrition content
- Glycemic-awareness guidance

### Prohibited Content

- Treatment guarantees
- Generic plan presented as personalized care
- Unqualified dietary prescriptions
- Disease-management claims without professional review
- Weight-loss framing

### SEO Intent

- Pregnancy nutrition support
- Medical nutrition therapy pregnancy
- Preconception nutrition
- Gestational diabetes nutrition support

### Analytics

- Page viewed
- Plan preview viewed
- Professional-support selected
- Membership selected
- CTA clicked

### Acceptance Criteria

- Generic content and professional support are distinguished
- Personalization claims match real delivery
- The page does not provide unsafe individualized advice
- Product availability is accurate
- Professional involvement is represented correctly

### Test Requirements

- **Requirement IDs:** PAT-005, PAT-007, SHR-020
- **Page ID:** PAT-PG-007
- **Risk priority:** P0 and release blocking when Nutrition support is publicly available; otherwise conditional P1 with elevated clinical and Product Status risk
- **Static validations:** Validate the `/patients/nutrition/` route, Page ID, requirement traceability, conditional indexation, Product Status vocabulary, personalization and professional-support claims, clinical references, CTA availability, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Medical Nutrition Therapy Product Status mapping, generic-versus-personalized content models, professional-support availability, approved CTA destination selection, unavailable-service behavior, canonical route generation, and consent-aware analytics.
- **Required Component IDs and component tests:** No Nutrition-specific feature component ID is currently registered. Test applicable shared navigation and `CMP-TRS-001` Product Status Badge behavior. Register reusable Nutrition or professional-support components before implementation.
- **E2E journeys:** Include the route in `TST-E2E-002` when part of the published Patient journey; distinguish general information from personalized support, verify professional involvement and safety boundaries, confirm Product Status, and test the approved CTA or unavailable state.
- **Browser projects:** When P0 and public, run `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`; otherwise run changed-feature `chromium-desktop` with applicable locale and motion projects.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari` when published; verify content order, nutrition and safety guidance, professional-support presentation, CTA state, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for applicable registered components and Playwright Axe checks against `/patients/nutrition/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, generic-versus-personalized content comprehension, safety boundaries, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic publication is in scope; verify equivalent nutrition, personalization, professional-support, Product Status, safety, and CTA meaning with qualified Arabic, nutrition, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion` for any material content, meal, process, or CTA animation and verify complete access without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable nutrition-content hierarchy, professional-support presentation, Product Status, and available/unavailable CTA states when the page enters visual-regression scope.
- **Product Status tests:** Verify Medical Nutrition Therapy and professional-support availability use approved status language, personalization is not overstated, and unavailable services are not presented as operational.
- **Clinical-review requirement:** Mandatory for nutrition, dietary, trimester, personalization, safety, outcome, professional-support, and limitation statements. Nutrition-owner review is also required for detailed nutrition content.
- **Form or integration tests:** No public dietary-input form applies unless separately approved. Test the approved application or support handoff, unavailable state, return path, analytics consent, and absence of dietary or health information in URLs and analytics.
- **Performance-budget tests:** Test the route against approved page, Core Web Vitals, JavaScript, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe support handoff, no public-page collection or logging of dietary, pregnancy, or Patient data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** When included in staging scope, verify route availability, generic-versus-personalized distinction, professional involvement, safety boundaries, Product Status, CTA or unavailable state, analytics privacy, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when published; use a non-destructive check of route availability, approved nutrition and professional-support wording, current Product Status, and CTA or unavailable state without entering or submitting dietary or health information.

---

## PAT-PG-008 — Physical Activity

**Route:** `/patients/physical-activity/`
**Priority:** P0 when publicly available
**Initial status:** Conditional approval
**Audience:** Patient
**Page type:** Capability page
**PRD requirements:** PAT-006, PAT-007

### Primary Purpose

Explain structured and pregnancy-appropriate physical-activity support.

### Primary Visitor Question

> How can I stay active appropriately before or during pregnancy?

### Primary CTA

- Explore Physical Activity Support

### Secondary CTA

- View Membership

### Product-Status Dependency

Physical Activity Training.

### Required Section Sequence

1. Why movement may matter
2. Pregnancy stage and individual variation
3. How ODRISC plans are structured
4. Activity categories
5. Safety and contraindications
6. Women's health professional involvement
7. Access and CTA

### Required Content

- Trimester-specific positioning where available
- F.I.T.T. framework where approved
- Mobility, strength, back, and pelvic-floor categories where available
- Safety cautions
- Professional-guidance boundary
- Availability status

### Conditional Content

- Exercise demonstrations
- Checklists
- One-to-one physiotherapy
- Adherence tracking
- Sample weekly plan

### Prohibited Content

- Universal exercise prescriptions
- Claims that activity is safe for every pregnancy
- Exercise demonstrations without safety context
- Treatment claims
- Replacement of medical clearance

### SEO Intent

- Pregnancy physical activity
- Pregnancy exercise support
- Prenatal movement guidance
- Women's health physiotherapy pregnancy

### Analytics

- Page viewed
- Safety section viewed
- Activity category selected
- Professional-support selected
- CTA clicked

### Acceptance Criteria

- Safety information is prominent
- Contraindications are acknowledged
- Professional involvement is accurate
- Product Status is current
- Demonstrations are accessible and appropriately qualified

### Test Requirements

- **Requirement IDs:** PAT-006, PAT-007, SHR-020
- **Page ID:** PAT-PG-008
- **Risk priority:** P0 and release blocking when Physical Activity support is publicly available; otherwise conditional P1 with high Patient-safety, clinical, and Product Status risk
- **Static validations:** Validate the `/patients/physical-activity/` route, Page ID, requirement traceability, conditional indexation, Product Status vocabulary, safety and contraindication wording, professional-support claims, clinical references, media metadata, CTA availability, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Physical Activity Training Product Status mapping, safety and contraindication content models, professional-support availability, approved CTA destination selection, unavailable-service behavior, media metadata, canonical route generation, and consent-aware analytics.
- **Required Component IDs and component tests:** No Physical Activity feature component ID is currently registered. Test applicable shared navigation and `CMP-TRS-001` Product Status Badge behavior. Register reusable activity, safety, demonstration, or media components before implementation.
- **E2E journeys:** Include the route in `TST-E2E-002` when part of the published Patient journey; verify safety prominence, contraindication acknowledgement, professional involvement, accessible demonstrations, Product Status, and the approved CTA or unavailable state.
- **Browser projects:** When P0 and public, run `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`; otherwise run changed-feature `chromium-desktop` with applicable locale and motion projects.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari` when published; verify safety-content priority, demonstration controls, captions or transcripts, CTA state, touch targets, orientation resilience, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for applicable registered components and Playwright Axe checks against `/patients/physical-activity/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, safety and contraindication comprehension, media controls, captions or transcripts, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic publication is in scope; verify equivalent safety, contraindication, professional-support, Product Status, demonstration, and CTA meaning with qualified Arabic, physiotherapy, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; demonstrations, transitions, and instructional presentation must remain safe and understandable without autoplay or non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable safety-content hierarchy, demonstration states, professional-support presentation, Product Status, and available/unavailable CTA states when the page enters visual-regression scope.
- **Product Status tests:** Verify Physical Activity Training uses approved availability wording, demonstrations and professional support match actual delivery, and unavailable functionality is not presented as operational.
- **Clinical-review requirement:** Mandatory for exercise, pregnancy safety, contraindication, trimester, symptom, outcome, professional-support, and limitation statements. Women’s-health physiotherapy review is required for detailed activity guidance.
- **Form or integration tests:** No public activity-input form applies unless separately approved. Test the approved application or support handoff, unavailable state, media delivery, return path, analytics consent, and absence of activity or health information in URLs and analytics.
- **Performance-budget tests:** Test the route against approved page, Core Web Vitals, JavaScript, image, video or media, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe media and support handoffs, no public-page collection or logging of activity, symptom, pregnancy, or Patient data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** When included in staging scope, verify route availability, safety and contraindication content, professional involvement, accessible demonstrations, Product Status, CTA or unavailable state, media behavior, analytics privacy, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when published; use a non-destructive check of route availability, approved safety and professional-support wording, current Product Status, accessible media, and CTA or unavailable state without entering or submitting activity or health information.

---

## PAT-PG-009 — Maternal and Fetal Progress

**Route:** `/patients/maternal-and-fetal-progress/`
**Priority:** P1
**Initial status:** Approved with Product Status restrictions
**Audience:** Patient
**Page type:** Product explanation page
**PRD requirements:** PAT-001, PAT-002, PAT-007

### Primary Purpose

Explain maternal and fetal progression in accessible language without transferring clinical interpretation to the Patient.

### Primary Visitor Question

> How can separate measurements and reports become a clearer pregnancy timeline?

### Primary CTA

- See How ODRISC Connects Progress

### Secondary CTA

- Explore Patient Support

### Product-Status Dependency

Maternal Intelligence, Fetal Growth Intelligence, Patient summaries, and timeline features.

### Required Section Sequence

1. Pregnancy changes continuously
2. Separate appointments and reports
3. Maternal progression
4. Fetal progression
5. How a timeline adds context
6. What Patients may see
7. What healthcare professionals interpret
8. Limitations
9. CTA

### Required Content

- Plain-language trend explanation
- Distinction between Patient summary and Provider interpretation
- Explanation of multiple measurements over time
- Clear professional-care boundary
- Honest capability status

### Conditional Content

- Patient timeline prototype
- Scan sequence visualization
- Maternal weight and fetal-growth relationship
- Share-with-provider workflow

### Prohibited Content

- Patient self-diagnosis
- Raw specialist staging systems
- Independent fetal-growth interpretation
- Guaranteed earlier detection
- Roadmap screens presented as operational

### SEO Intent

- Understanding fetal growth reports
- Pregnancy progress timeline
- Maternal and fetal monitoring
- Understanding pregnancy measurements over time

### Analytics

- Page viewed
- Maternal section viewed
- Fetal section viewed
- Timeline interaction
- Provider-information link selected
- CTA clicked

### Acceptance Criteria

- The page remains understandable to non-clinicians
- Clinical responsibility remains with healthcare professionals
- Prototype or roadmap visuals are labeled
- Advanced terms are progressively disclosed
- The page does not imply diagnostic functionality

### Test Requirements

- **Requirement IDs:** PAT-001, PAT-002, PAT-007, SHR-020
- **Page ID:** PAT-PG-009
- **Risk priority:** P1 with high clinical-interpretation, Product Status, and misleading-claim risk
- **Static validations:** Validate the `/patients/maternal-and-fetal-progress/` route, Page ID, requirement traceability, indexation, Product Status vocabulary, clinical-boundary and non-diagnostic wording, illustrative-data labels, claim references, internal links, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Product Status mappings for Maternal Intelligence, Fetal Growth Intelligence, Patient summaries, and timeline features; public-preview models; illustrative-data metadata; progressive-disclosure content; canonical route generation; and consent-aware analytics.
- **Required Component IDs and component tests:** `CMP-DAT-001` Chart Frame and `CMP-TRS-001` Product Status Badge, plus applicable shared navigation. Test accessible chart summaries and alternatives, illustrative labels, empty and unavailable states, progressive disclosure, Product Status variants, RTL, and reduced motion. Register any reusable progress or timeline feature component before implementation.
- **E2E journeys:** Include the route in the changed-feature Patient journey associated with `TST-E2E-002`; verify understandable Patient language, visible clinical responsibility and non-diagnostic boundaries, labelled prototype or roadmap visuals, progressive disclosure, Product Status, and canonical next actions.
- **Browser projects:** Run `chromium-desktop` for changed-feature verification; include `firefox-desktop` and `webkit-desktop` when the page enters a release scope; use `arabic-rtl` and `reduced-motion` where applicable.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari` when published; verify content order, chart and timeline reflow, accessible alternatives, progressive disclosure, touch targets, and narrow-viewport readability.
- **Accessibility automation:** Run Storybook Axe checks for `CMP-DAT-001`, `CMP-TRS-001`, and applicable registered components, plus Playwright Axe checks against `/patients/maternal-and-fetal-progress/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, advanced-term disclosure, chart and timeline alternatives, illustrative labels, non-diagnostic comprehension, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic publication is in scope; verify equivalent maternal, fetal, clinical-boundary, Product Status, illustrative-label, chart, timeline, and CTA meaning with qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion` for chart, timeline, disclosure, or progress animation and verify equivalent values, explanations, sequencing, and controls without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable desktop, mobile, Arabic RTL, chart, timeline, progressive-disclosure, Product Status, and illustrative or unavailable states when the page enters visual-regression scope.
- **Product Status tests:** Verify Maternal Intelligence, Fetal Growth Intelligence, Patient summaries, timelines, and related capabilities use approved availability wording and that prototypes, roadmap items, and unavailable functionality are visibly identified.
- **Clinical-review requirement:** Mandatory for maternal and fetal monitoring, growth, progress, clinical interpretation, risk, outcome, standards, illustrative clinical data, and non-diagnostic limitation statements.
- **Form or integration tests:** No embedded form applies. Test canonical Patient routes, approved application or information handoffs, unavailable states, illustrative-data isolation, analytics consent, and absence of sensitive query parameters.
- **Performance-budget tests:** Test the route and `CMP-DAT-001` against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe handoffs, synthetic illustrative data only, no public-page collection or logging of maternal, fetal, pregnancy, or Patient data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** When included in staging scope, verify route availability, Patient-language comprehension, clinical boundaries, Product Status, labelled illustrative visuals, accessible charts or timelines, progressive disclosure, analytics privacy, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when published; use a non-destructive check of route availability, approved clinical and Product Status wording, visible non-diagnostic limitations, labelled illustrative visuals, and essential links without entering or submitting data.

---

## PAT-PG-010 — Membership

**Route:** `/patients/membership/`
**Priority:** P0 only when direct commercial access is active; otherwise P1
**Initial status:** Conditional
**Audience:** Patient
**Page type:** Commercial page
**PRD requirements:** PAT-008, PAT-009, PAT-010

### Primary Purpose

Explain available Patient plans, services, pricing, duration, and terms.

### Primary Visitor Question

> Which ODRISC plan is available to me, and what does it include?

### Primary CTA

- Select Plan
- Join ODRISC

Final wording depends on payment flow.

### Secondary CTA

- Compare Support

### Product-Status Dependency

All included capabilities and professional services.

### Required Section Sequence

1. Availability and market
2. Plan overview
3. Comparison
4. Included capabilities
5. Professional-support boundaries
6. Price, tax, and duration
7. Payment and refund terms
8. FAQs
9. CTA

### Required Content

- Current plan names
- Current currency
- Tax treatment
- Included and excluded services
- Duration
- Support format
- Payment terms
- Refund terms
- Market availability
- Contact or support route

### Conditional Content

- Weekly, monthly, annual, or pregnancy-period plans
- Gold and Platinum plans
- Provider referral arrangement
- Promotional discounts
- EMI or payment options

### Prohibited Content

- Outdated pricing
- Hidden fees
- Roadmap capabilities included as active services
- Guaranteed clinical outcomes
- Unclear non-refundable terms
- Unavailable market offers

### SEO Intent

- ODRISC pricing
- Pregnancy support membership
- ODRISC Patient plans

Pricing pages must not create conflicting market versions.

### Analytics

- Page viewed
- Plan compared
- Plan selected
- Payment initiated
- Payment completed
- Terms opened
- Purchase failure

### Acceptance Criteria

- Price and included services match operational delivery
- Market and currency are clear
- Terms are visible before payment
- Each CTA reaches a working purchase or registration destination
- Product-status changes can be updated centrally

### Test Requirements

- **Requirement IDs:** PAT-008, PAT-009, PAT-010, SHR-020
- **Page ID:** PAT-PG-010
- **Risk priority:** P0 and release blocking only when direct commercial access is active; otherwise conditional P1 with high commercial, legal, integration, and Product Status risk
- **Static validations:** Validate the `/patients/membership/` route, Page ID, requirement traceability, conditional indexation, pricing and currency data, Product Status vocabulary, included-service claims, legal and terms links, CTA availability, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover centrally controlled pricing and currency models, included-capability and professional-service Product Status mappings, market eligibility, approved CTA destination selection, unavailable-commercial-flow behavior, terms-link generation, and consent-aware analytics.
- **Required Component IDs and component tests:** No membership, pricing, or checkout component ID is currently registered. Test applicable shared navigation, `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, and `CMP-TRS-001` Product Status Badge behavior. Register reusable pricing, plan, or commercial-handoff components before implementation.
- **E2E journeys:** Include the route in `TST-E2E-002` when it is part of the published Patient journey; verify market and currency, included services, Product Status, terms visibility, operational purchase or registration destination, unavailable state, and safe recovery.
- **Browser projects:** When P0 and commercially active, run `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`; otherwise run changed-feature `chromium-desktop` with applicable locale and motion projects.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari` when published; verify plan comparison, price and currency readability, included-service presentation, terms access, CTA state, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for applicable pricing, action, status, and link components and Playwright Axe checks against `/patients/membership/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, plan and price comprehension, included-service associations, terms access, CTA state, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic commercial publication is in scope; verify equivalent plan, price, currency, included-service, Product Status, legal, and CTA meaning with qualified Arabic, commercial, and legal review.
- **Reduced-motion coverage:** Run `reduced-motion` for plan, comparison, disclosure, or CTA animation and verify complete commercial information and operation without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for stable desktop, mobile, Arabic RTL, plan, pricing, included-service, Product Status, and available/unavailable CTA states when the page enters visual-regression scope.
- **Product Status tests:** Verify every included capability and professional service matches operational delivery, unavailable services are not included as active benefits, and centrally controlled Product Status changes update the page consistently.
- **Clinical-review requirement:** Required for clinical-support, outcome, monitoring, nutrition, physical-activity, or professional-service descriptions. Commercial and legal review are mandatory for price, currency, plan, renewal, cancellation, refund, and terms wording.
- **Form or integration tests:** Test approved registration, purchase, payment-provider, waiting-list, or application handoffs using sandbox or fake adapters; verify success, cancellation, failure, unavailable state, return URLs, analytics consent, and exclusion of health information.
- **Performance-budget tests:** Test the route against approved page, Core Web Vitals, JavaScript, payment or commercial third-party, image, font, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, trusted commercial destinations, safe return URLs, no open redirects, no health or Patient data in payment metadata, URLs, logs, or analytics, consent control, secret isolation, and approved payment-security boundaries.
- **Staging smoke:** When commercial staging is active, verify route availability, market, currency, plans, included services, Product Status, terms, sandbox purchase or registration handoff, cancellation and failure recovery, analytics privacy, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when commercially published and non-destructive; verify route availability, price and currency, included services, terms, Product Status, and CTA destination without completing a real purchase, registration, or submission.

---

## PAT-PG-011 — Patient FAQs

**Route:** `/patients/frequently-asked-questions/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Patient
**Page type:** FAQ and trust page
**PRD requirements:** CON-005, PAT-007, PAT-010

### Primary Purpose

Resolve common Patient concerns before conversion.

### Primary Visitor Question

> Is ODRISC appropriate, safe, private, and available for me?

### Primary CTA

- Start My Journey, subject to approval

### Required FAQ Categories

- What ODRISC is
- Who it is for
- Clinical boundaries
- Risk assessment
- Weight monitoring
- Nutrition
- Physical activity
- Maternal and fetal progress
- Privacy
- Professional involvement
- Pricing
- Availability
- Application access
- Urgent concerns

### Prohibited Content

- Personalized clinical answers
- Emergency triage
- Unsupported product claims
- Market availability assumptions

### SEO Intent

Patient FAQ search intent and approved FAQ structured data.

### Analytics

- FAQ page viewed
- FAQ opened by category
- CTA clicked
- Contact selected
- Safety information selected

### Acceptance Criteria

- Questions use Patient language
- Answers are concise and accurate
- Clinical and emergency boundaries are clear
- Product availability is current
- FAQ structured data matches visible content

### Test Requirements

- **Requirement IDs:** CON-005, PAT-007, PAT-010, SHR-020
- **Page ID:** PAT-PG-011
- **Risk priority:** P0 and release blocking
- **Static validations:** Validate the `/patients/frequently-asked-questions/` route, Page ID, requirement traceability, indexation, FAQ content schema, visible-content-to-structured-data parity, Product Status vocabulary, clinical and emergency boundaries, internal links, CTA availability, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover FAQ content schemas, category and ordering rules, FAQ structured-data generation, visible-answer parity, Product Status mappings, canonical links, approved CTA destination selection, and consent-aware analytics.
- **Required Component IDs and component tests:** No FAQ or accordion component ID is currently registered. Test applicable shared navigation, link, action, and `CMP-TRS-001` Product Status behavior. Register the approved FAQ or accordion component before implementation and test keyboard operation, expanded and collapsed states, accessible names, focus, RTL, and reduced motion.
- **E2E journeys:** Include the route in `TST-E2E-002`; navigate from Patient pages, find and expand relevant questions, verify concise Patient-language answers, clinical and emergency boundaries, Product Status, structured-data parity, and the approved Patient Start CTA or unavailable state.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify FAQ navigation, accordion operation, answer readability, touch targets, focus visibility, CTA state, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the approved FAQ or accordion and applicable registered components, plus Playwright Axe checks against `/patients/frequently-asked-questions/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, heading hierarchy, accordion semantics and state announcements, answer comprehension, emergency boundaries, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent questions, answers, clinical and emergency boundaries, Product Status, accordion direction and operation, structured-data meaning, and qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; FAQ expansion, collapse, scrolling, and CTA access must remain complete without non-essential motion.
- **Visual-regression coverage:** Capture controlled desktop, mobile, and Arabic RTL baselines for stable FAQ categories, expanded and collapsed states, boundary content, Product Status, and CTA states.
- **Product Status tests:** Verify every answer describing capability availability matches the Product Status register and that unavailable or future capabilities are not described as active.
- **Clinical-review requirement:** Mandatory for clinical, risk, symptom, screening, diagnosis, treatment, safety, emergency, professional-care, and outcome answers. Review dates and ownership must remain current.
- **Form or integration tests:** No embedded form applies. Test FAQ structured-data output, canonical Patient links, the approved Patient Start handoff, unavailable state, analytics consent, and absence of sensitive query parameters.
- **Performance-budget tests:** Test the route against approved Core Web Vitals, JavaScript, structured-data, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe links and handoffs, no collection or logging of Patient questions or health information, consent-controlled analytics, safe structured data, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Verify route availability, FAQ categories, expand and collapse behavior, visible-answer and structured-data parity, clinical and emergency boundaries, Product Status, CTA or unavailable state, Arabic behavior, analytics privacy, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify the published FAQ route, representative questions and answers, clinical and emergency boundaries, Product Status, structured data, and CTA or unavailable state without submitting data.

---

## PAT-PG-012 — Patient Start

**Route:** `/patients/start/`
**Priority:** P0 only when a working Patient destination exists
**Initial status:** Conditional
**Audience:** Patient
**Page type:** Conversion-routing page
**PRD requirements:** PAT-008, INT-001

### Primary Purpose

Route Patients to the correct available action based on market and product availability.

### Primary Visitor Question

> What can I start using now?

### Primary CTA

One of:

- Begin Risk Assessment
- Create Patient Account
- Access ODRISC
- Choose Membership
- Join Waiting List

Only approved available options may appear.

### Required Section Sequence

1. Confirm audience
2. Confirm market or availability where required
3. Present available action
4. Explain what happens next
5. Privacy and terms
6. Support route

### Prohibited Content

- Empty handoff
- Unavailable account route
- Multiple competing primary actions
- Market promises without operational support

### SEO Intent

Normally noindex if it primarily routes authenticated or commercial traffic.

### Analytics

- Start page viewed
- Market selected
- Destination selected
- Handoff successful
- Handoff failed

### Acceptance Criteria

- Every displayed option works
- Market-specific availability is accurate
- The user understands whether they are leaving the website
- Tracking does not capture health data
- Failure states provide recovery

### Test Requirements

- **Requirement IDs:** PAT-008, INT-001, SHR-020
- **Page ID:** PAT-PG-012
- **Risk priority:** P0 and release blocking only when a working Patient destination exists; otherwise conditional with high integration, privacy, Product Status, and broken-journey risk
- **Static validations:** Validate the `/patients/start/` route, Page ID, requirement traceability, conditional indexation, approved destination allowlist, market availability, Product Status vocabulary, external-origin notices, CTA configuration, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover market-aware Patient destination selection, Product Status and availability rules, approved-destination allowlisting, unavailable and misconfigured destination behavior, external-origin notice generation, safe return behavior, analytics filtering, and rejection of sensitive query parameters.
- **Required Component IDs and component tests:** No Patient Start or handoff component ID is currently registered. Test applicable `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, shared navigation, and `CMP-TRS-001` Product Status Badge behavior. Register a reusable application-handoff component before implementation.
- **E2E journeys:** Complete the Patient handoff portion of `TST-E2E-002`; open Patient Start, display only approved available options, understand whether the destination leaves the website, reach the operational destination, preserve safe navigation, and recover from unavailable or misconfigured destinations.
- **Browser projects:** When the handoff is P0 and operational, run `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`; otherwise run changed-feature `chromium-desktop` against the approved unavailable state.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify option visibility, external-origin notice, touch targets, destination-opening behavior, back navigation, unavailable-state recovery, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the approved handoff and applicable action components and Playwright Axe checks against `/patients/start/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, destination and external-origin comprehension, option state, error recovery, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl` when Arabic handoff publication is in scope; verify equivalent destination, availability, external-origin, Product Status, error-recovery, and CTA meaning with qualified Arabic review.
- **Reduced-motion coverage:** Run `reduced-motion`; option selection, destination notices, loading, transition, and recovery behavior must remain complete without non-essential motion.
- **Visual-regression coverage:** Capture controlled baselines for desktop, mobile, Arabic RTL, available-option, unavailable-destination, loading, and recovery states when the page enters visual-regression scope.
- **Product Status tests:** Verify that only operational and market-approved Patient destinations are displayed, unavailable options are hidden or clearly disabled according to policy, and all capability and access wording matches the Product Status register.
- **Clinical-review requirement:** Required when destination descriptions contain clinical capability, risk, monitoring, treatment, outcome, or professional-care wording; otherwise record as not applicable with approved product-review evidence.
- **Form or integration tests:** Test every approved Patient destination through fake, sandbox, or controlled staging configuration; verify allowlisting, success, unavailable state, misconfiguration, timeout, external-origin notice, safe return, analytics consent, and absence of health data in URLs or events.
- **Performance-budget tests:** Test the route against approved Core Web Vitals, JavaScript, third-party handoff, image, font, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, destination allowlisting, safe external-link attributes, no open redirect, no authentication-detail exposure, no health or Patient data in query parameters, fragments, logs, or analytics, secret isolation, and consent control.
- **Staging smoke:** When an operational destination exists, verify route availability, market-appropriate options, Product Status, external-origin notice, successful controlled handoff, back navigation, unavailable and misconfigured recovery, analytics privacy, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable only when an approved production destination is active and strictly non-destructive; verify route availability, displayed options, destination origin and reachability, Product Status, and recovery without creating an account, selecting a plan, entering health data, or submitting information.

---

# 12. Provider Pages

## PRO-PG-001 — Provider Homepage

**Route:** `/providers/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Provider
**Page type:** Audience homepage
**PRD requirements:** PRO-001, PRO-002, PRO-005, PRO-006, PRO-008, SEO-001, ANL-003

### Primary Purpose

Establish ODRISC clinical relevance and guide healthcare professionals toward evaluation or engagement.

### Primary Visitor Question

> How can ODRISC support longitudinal pregnancy monitoring and clinical workflows?

### Narrative Role

Move from clinical fragmentation toward longitudinal visibility, trust, and adoption action.

### Primary CTA

- Request Demonstration

### Secondary CTA

- Explore the Clinical Platform

### Product-Status Dependency

All Provider platform claims.

### Required Section Sequence

1. Clinical hero
2. Fragmented pregnancy-information problem
3. Why longitudinal review matters
4. ODRISC clinical platform
5. Maternal and fetal information layers
6. Monitoring and explainable intelligence
7. Workflow and collaboration
8. Validation and methodology
9. Security and privacy
10. Product-status transparency
11. Final demonstration CTA

### Required Content

- Clinical problem
- Product role
- Decision-support boundary
- Patient-Provider connection
- Current versus planned capabilities
- Workflow relevance
- Validation route
- Security route
- Professional next action

### Conditional Content

- Current dashboard screenshots
- Prototype demonstrations
- Clinical-panel information
- Pilot availability
- Hospital implementation
- Integration roadmap

### Prohibited Content

- Autonomous diagnosis
- “Never miss a complication”
- Unqualified AI claims
- Medical-device approval implication
- Workflow claims not operationally supported
- Roadmap capabilities presented as deployed

### SEO Intent

- Maternal health monitoring platform
- Fetal growth monitoring software
- Pregnancy clinical decision support
- Longitudinal pregnancy monitoring
- Maternal and fetal intelligence

### Analytics

- Provider homepage viewed
- Clinical platform selected
- Monitoring selected
- Intelligence selected
- Validation selected
- Demo CTA clicked
- Pilot CTA clicked
- Patient switch selected

### Accessibility Considerations

- Complex diagrams require accessible summaries
- Data visuals must not rely on color
- Technical details should use progressive disclosure
- Tables must remain usable on mobile

### Acceptance Criteria

- A Provider can identify the clinical problem and ODRISC role quickly
- Clinical judgment remains central
- Product Status is transparent
- Validation and methodology routes are available
- Demo CTA works
- The page remains operationally realistic

### Test Requirements

- **Requirement IDs:** PRO-001, PRO-002, PRO-005, PRO-006, PRO-008, SHR-020, SEO-001, ANL-003
- **Page ID:** PRO-PG-001
- **Risk priority:** P0 and release blocking, with high clinical-claim, Product Status, adoption, and professional-trust risk
- **Static validations:** Validate the `/providers/` route, Page ID, requirement traceability, indexation, Provider Product Status vocabulary, clinical and decision-support boundaries, validation and methodology links, security routes, analytics events, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Provider Product Status mappings, current-versus-planned capability models, validation and methodology route generation, demonstration CTA destination selection, unavailable-demo behavior, consent-aware analytics, and safe public diagram or data models.
- **Required Component IDs and component tests:** `CMP-FTR-201` Provider Hero, `CMP-DAT-001` Chart Frame, `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible rendering, navigation, focus, progressive disclosure, data alternatives, Product Status variants, RTL, and reduced motion.
- **E2E journeys:** `TST-E2E-003`; open the Provider homepage, navigate Provider sections, distinguish current from future capabilities, view validation and methodology context, inspect security and privacy routes, start the demonstration journey, and recover safely when the demonstration destination is unavailable.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify Provider hero, navigation drawer, technical-content order, diagrams, tables, progressive disclosure, CTA visibility, touch targets, and reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, skip links, headings, landmarks, technical-content comprehension, progressive disclosure, diagram and chart alternatives, table behavior, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent clinical, decision-support, Product Status, validation, security, workflow, and CTA meaning; logical layout; diagram direction; table behavior; and qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; hero, diagrams, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential motion.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, technical-diagram, Product Status, and material navigation baselines for the Provider homepage.
- **Product Status tests:** Verify all Provider platform claims distinguish current, planned, prototype, pilot, and unavailable capabilities and that operational CTAs appear only when their destination is approved.
- **Clinical-review requirement:** Mandatory for monitoring, maternal and fetal intelligence, clinical workflow, decision support, validation, methodology, outcome, risk, standards, and professional-responsibility statements.
- **Form or integration tests:** No form is embedded on the homepage. Test the handoff to `PRO-PG-016`, unavailable-demo recovery, validation, methodology, security and privacy routes, analytics consent, and absence of sensitive query parameters. The complete form flow is covered by `TST-INT-002`.
- **Performance-budget tests:** Test `/providers/` and material charts or diagrams against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe demonstration and platform links, no Patient or clinical data collection, no restricted algorithm or architecture exposure, consent-controlled analytics, safe external links, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Verify page availability, Provider navigation, current-versus-future capability wording, clinical and decision-support boundaries, validation, methodology, security and privacy routes, demonstration handoff, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/providers/`, essential navigation, approved Product Status and clinical wording, validation and security routes, and demonstration destination without submitting a request or entering data.

---

## PRO-PG-002 — Clinical Platform

**Route:** `/providers/clinical-platform/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Provider
**Page type:** Product overview
**PRD requirements:** PRO-002, PRO-005, PRO-012

### Primary Purpose

Explain how ODRISC connects Patient, maternal, fetal, and clinical information into one longitudinal platform.

### Primary Visitor Question

> What is the ODRISC clinical platform, and which problems does it address?

### Primary CTA

- Request Demonstration

### Secondary CTA

- Explore Monitoring

### Product-Status Dependency

High.

### Required Section Sequence

1. Platform definition
2. Clinical fragmentation
3. Information inputs
4. Longitudinal organization
5. Maternal monitoring
6. Fetal growth
7. Patient participation
8. Explainable intelligence
9. Workflow and reports
10. Product status
11. CTA

### Required Content

- Connected product ecosystem
- Patient and Provider perspectives
- Information flow
- Clinical review points
- Available and roadmap distinction
- Decision-support boundary

### Conditional Content

- OCR
- Doppler
- Cohort analytics
- FHIR integration
- Hospital workflows
- Role-based access

### Prohibited Content

- Feature catalogue without clinical context
- Active integration claims when only planned
- AI black-box positioning
- Unsupported workflow-efficiency claims

### SEO Intent

- Pregnancy clinical platform
- Maternal fetal monitoring platform
- Longitudinal pregnancy data platform

### Analytics

- Page viewed
- Platform layer selected
- Workflow selected
- Validation selected
- Demo CTA clicked

### Acceptance Criteria

- Platform layers are understandable
- Patient and Provider roles are distinct
- Current and future capabilities are labeled
- Clinical review remains visible
- No restricted intellectual property is exposed

### Test Requirements

- **Requirement IDs:** PRO-002, PRO-005, PRO-012, SHR-020
- **Page ID:** PRO-PG-002
- **Risk priority:** P0 and release blocking, with high Product Status, clinical-claim, platform-representation, integration-claim, and intellectual-property risk
- **Static validations:** Validate the `/providers/clinical-platform/` route, Page ID, requirement traceability, indexation, Provider Product Status vocabulary, clinical and decision-support boundaries, platform-layer terminology, integration-status wording, analytics events, internal links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover platform-layer models, Patient and Provider role mappings, information-flow models, current-versus-roadmap capability classification, optional integration visibility, consent-aware analytics construction, and safe transformation of public platform content.
- **Required Component IDs and component tests:** `CMP-DAT-001` Chart Frame, `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible information-flow summaries, Patient and Provider role distinctions, Product Status variants, progressive disclosure, keyboard behavior, focus, RTL, reduced motion, and mobile reflow.
- **E2E journeys:** Include this page in `TST-E2E-003`; open the Clinical Platform page from the Provider journey, understand the platform layers, distinguish Patient and Provider roles, inspect current and planned capabilities, review the decision-support boundary, navigate to Monitoring, and reach the approved demonstration route.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify platform-layer order, information-flow diagrams, progressive disclosure, Product Status labels, navigation, CTA visibility, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/clinical-platform/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, Patient and Provider role comprehension, diagram and data alternatives, progressive disclosure, reading order, link purpose, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent platform, clinical-boundary, Patient-role, Provider-role, Product Status, integration-status, workflow, and CTA meaning; logical layout; information-flow direction; and qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; platform explanations, information flow, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, platform-layer, information-flow, Product Status, and material progressive-disclosure baselines.
- **Product Status tests:** Verify every maternal, fetal, Patient, workflow, OCR, Doppler, cohort-analytics, FHIR, hospital-workflow, and role-based-access capability is labeled according to its approved current, planned, prototype, pilot, or unavailable status.
- **Clinical-review requirement:** Mandatory for maternal and fetal monitoring, clinical information flow, explainable intelligence, clinical review points, decision-support boundaries, and any statement about professional workflow or outcomes.
- **Form or integration tests:** No form is embedded on this page. Test the handoff to the Monitoring page and demonstration route, unavailable-destination recovery, analytics consent, and integration-status presentation. No live OCR, Doppler, FHIR, hospital, or production clinical-system call may occur from page tests.
- **Performance-budget tests:** Test `/providers/clinical-platform/` and its material diagrams or visualizations against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation, absence of Patient and production operational data, no exposure of restricted algorithms, model logic, credentials, internal architecture, or integration details, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Verify page availability, platform-layer presentation, Patient and Provider role distinction, current-versus-roadmap labels, clinical and decision-support boundaries, Monitoring and demonstration links, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/providers/clinical-platform/`, essential navigation, approved platform and Product Status wording, decision-support boundary, Monitoring route, and demonstration destination without submitting data or calling clinical integrations.

---

## PRO-PG-003 — Monitoring

**Route:** `/providers/monitoring/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Provider
**Page type:** Clinical capability page
**PRD requirements:** PRO-002, PRO-005

### Primary Purpose

Explain how ODRISC may support longitudinal review and selected Patient monitoring.

### Primary Visitor Question

> How can ODRISC improve visibility between isolated visits and reports?

### Primary CTA

- Request Demonstration

### Secondary CTA

- Explore Intelligence

### Product-Status Dependency

Provider dashboard, Patient data sharing, monitoring summaries, alerts.

### Required Section Sequence

1. Monitoring gap
2. Information generated between visits
3. Longitudinal timeline
4. Maternal progression
5. Fetal progression
6. Patient-reported information
7. Review and prioritization
8. Alert responsibility and limitations
9. Workflow
10. CTA

### Required Content

- What is monitored
- Who enters information
- How Providers review it
- Whether monitoring is active, periodic, or retrospective
- Alert and escalation responsibility
- Current status

### Conditional Content

- Daily high-risk monitoring
- Cohort view
- Alert inbox
- Provider notes
- Patient adherence

### Prohibited Content

- Real-time monitoring unless implemented
- Guaranteed alerts
- Automatic escalation claims
- Ambiguous clinical responsibility

### SEO Intent

- Pregnancy monitoring platform for clinicians
- Maternal monitoring software
- Patient monitoring between antenatal visits

### Analytics

- Page viewed
- Monitoring workflow viewed
- Alert explanation viewed
- Demo CTA clicked

### Acceptance Criteria

- Monitoring frequency and responsibility are unambiguous
- Real-time capability is not implied without implementation
- Patient-entered and clinician-verified data are distinguished
- Alert limitations are stated

### Test Requirements

- **Requirement IDs:** Use every PRD requirement listed in the `PRO-PG-003` specification and add SHR-020.
- **Page ID:** PRO-PG-003
- **Risk priority:** Use the page’s documented priority; treat clinical-monitoring, alert, Product Status, and professional-responsibility failures as release blocking.
- **Static validations:** Validate the `/providers/monitoring/` route, Page ID, requirement traceability, indexation, monitoring terminology, Product Status vocabulary, clinical and decision-support boundaries, analytics events, internal links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover monitoring-frequency models, Patient-entered versus clinician-verified data distinctions, longitudinal timeline transformations, status and alert mappings, delayed or unavailable data behavior, consent-aware analytics, and safe public monitoring models.
- **Required Component IDs and component tests:** `CMP-DAT-001` Chart Frame, `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible chart summaries, monitoring states, data-source distinctions, status variants, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, delayed-data, and error states.
- **E2E journeys:** Include this page in `TST-E2E-003`; open Monitoring from the Provider journey, understand longitudinal monitoring, distinguish Patient-entered from clinician-verified information, inspect monitoring frequency and responsibility, review alert limitations and Product Status, and continue to the approved demonstration route.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify monitoring timelines, charts, summaries, status labels, progressive disclosure, navigation, CTA visibility, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/monitoring/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, chart and timeline alternatives, monitoring-state comprehension, data-source labels, alert limitations, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent monitoring, responsibility, data-source, alert-limitation, Product Status, clinical-boundary, and CTA meaning; logical layout; readable timelines; appropriate chart direction; and qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; monitoring timelines, state changes, charts, progressive disclosure, navigation, and CTA access must remain understandable and operable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, chart, timeline, Product Status, empty, delayed-data, and material error-state baselines.
- **Product Status tests:** Verify monitoring frequency, summaries, alerts, Patient data sharing, clinician verification, reports, and related capabilities are labelled according to their approved current, planned, prototype, pilot, or unavailable status.
- **Clinical-review requirement:** Mandatory for monitoring frequency, clinical responsibility, Patient-entered and clinician-verified data distinctions, longitudinal interpretation, alerts, limitations, escalation language, and any outcome or risk statement.
- **Form or integration tests:** No form is embedded on this page. Test monitoring-data fixtures, delayed, missing, invalid, and unavailable-data states, approved demonstration handoff, analytics consent, and integration-status presentation. Tests must not call live Patient, Provider, hospital, or clinical systems.
- **Performance-budget tests:** Test `/providers/monitoring/` and its charts or timelines against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation, synthetic data only, no Patient or production operational data, no exposure of restricted monitoring logic or internal integration details, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Verify page availability, monitoring explanation, data-source distinction, monitoring responsibility, alert limitations, Product Status, chart and timeline accessibility, demonstration handoff, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/providers/monitoring/`, approved monitoring and responsibility wording, Product Status, accessible public visualizations, essential navigation, and demonstration destination without entering Patient information or calling clinical integrations.

---

## PRO-PG-004 — Intelligence Hub

**Route:** `/providers/intelligence/`
**Priority:** P0 or P1 based on launch scope
**Initial status:** Approved
**Audience:** Provider
**Page type:** Product pillar page
**PRD requirements:** PRO-002, PRO-003, PRO-004

### Primary Purpose

Explain the ODRISC intelligence model and route Providers toward maternal and fetal intelligence.

### Primary Visitor Question

> How does connected pregnancy information become explainable longitudinal intelligence?

### Primary CTA

- Explore Fetal Growth Intelligence or Request Demonstration

Final hierarchy depends on launch status.

### Secondary CTA

- Explore Maternal Intelligence

### Required Section Sequence

1. Data is not the same as intelligence
2. Longitudinal organization
3. Trend and velocity
4. Maternal context
5. Fetal context
6. Relationship analysis
7. Explainability
8. Human review
9. Maternal and fetal pathways
10. CTA

### Required Content

- Data-to-insight sequence
- Explainability principles
- Decision-support boundary
- Product-status distinction
- Relationship to Provider workflow

### Conditional Content

- Pattern recognition
- Clinical summaries
- Cross-domain analysis
- AI-supported functions

### Prohibited Content

- Black-box AI
- Autonomous conclusions
- Predictive claims without validation
- Unsupported accuracy statements

### SEO Intent

- Maternal fetal intelligence
- Longitudinal pregnancy intelligence
- Pregnancy clinical intelligence platform

### Analytics

- Page viewed
- Maternal Intelligence selected
- Fetal Growth Intelligence selected
- Methodology selected
- Demo CTA clicked

### Acceptance Criteria

- Intelligence is explained without generic AI slogans
- Explainability and human review are central
- Maternal and fetal pathways are distinct
- Product status is transparent

### Test Requirements

- **Requirement IDs:** PRO-002, PRO-003, PRO-004, SHR-020
- **Page ID:** PRO-PG-004
- **Risk priority:** P0 or P1 according to the approved launch scope; release blocking when included in P0, with high explainability, clinical-claim, Product Status, and professional-responsibility risk
- **Static validations:** Validate the `/providers/intelligence/` route, Page ID, requirement traceability, launch-scope priority, indexation, intelligence terminology, Product Status vocabulary, decision-support boundaries, analytics-event registration, maternal and fetal pathway links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover data-to-insight transformations, longitudinal trend and velocity presentation models, maternal and fetal pathway mappings, current-versus-planned capability classification, CTA hierarchy by launch status, consent-aware analytics, and safe public intelligence summaries.
- **Required Component IDs and component tests:** `CMP-DAT-001` Chart Frame, `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible trend and velocity summaries, pathway distinctions, Product Status variants, progressive disclosure, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, and unavailable states.
- **E2E journeys:** Include this page in `TST-E2E-003`; open the Intelligence Hub from the Provider journey, understand the data-to-insight sequence, distinguish maternal and fetal pathways, verify explainability and human-review boundaries, inspect Product Status, follow the approved primary pathway, and reach the demonstration route when applicable.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion` when the page is in P0 scope; otherwise run `chromium-desktop` and all projects affected by the change.
- **Mobile coverage:** `mobile-chrome` and `mobile-safari`; verify intelligence narrative order, maternal and fetal pathway separation, trends, charts, progressive disclosure, CTA hierarchy, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/intelligence/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, trend and velocity alternatives, maternal and fetal pathway comprehension, explainability and human-review messaging, reading order, link purpose, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent intelligence, longitudinal trend, velocity, maternal-context, fetal-context, explainability, human-review, Product Status, decision-support, and CTA meaning; logical layout; appropriate chart direction; and qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; intelligence sequences, trends, charts, progressive disclosure, pathway selection, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, maternal-pathway, fetal-pathway, trend, Chart Frame, Product Status, and material progressive-disclosure baselines.
- **Product Status tests:** Verify pattern recognition, clinical summaries, cross-domain analysis, AI-supported functions, maternal intelligence, and fetal intelligence are labelled according to their approved current, planned, prototype, pilot, or unavailable status and that CTA hierarchy reflects launch availability.
- **Clinical-review requirement:** Mandatory for trend, velocity, maternal and fetal context, relationship analysis, pattern-recognition, clinical-summary, predictive, decision-support, explainability, accuracy, and human-review statements.
- **Form or integration tests:** No form is embedded on this page. Test maternal and fetal pathway navigation, methodology navigation, demonstration handoff, unavailable-destination recovery, analytics consent, and safe synthetic intelligence fixtures. Tests must not call live Patient, Provider, hospital, AI, or clinical systems.
- **Performance-budget tests:** Test `/providers/intelligence/` and its charts or visual explanations against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation, synthetic data only, no Patient or production operational data, no exposure of restricted algorithms, model parameters, confidence logic, intellectual property, credentials, or internal architecture, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** When included in the release scope, verify page availability, data-to-insight explanation, maternal and fetal pathway distinction, explainability and human-review boundaries, Product Status, CTA hierarchy, methodology and demonstration links, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive when published; verify `/providers/intelligence/`, approved intelligence and Product Status wording, maternal and fetal pathways, decision-support boundary, essential navigation, and approved CTA destinations without entering data or invoking clinical intelligence services.

---

## PRO-PG-005 — Maternal Intelligence

**Route:** `/providers/intelligence/maternal-intelligence/`
**Priority:** P1
**Initial status:** Conditional approval
**Audience:** Provider
**Page type:** Advanced capability page
**PRD requirements:** PRO-003

### Primary Purpose

Explain the intended maternal-intelligence layer and its clinical-monitoring role.

### Primary Visitor Question

> How can maternal risk, progression, symptoms, and measurements be understood together over time?

### Primary CTA

- Discuss the Clinical Platform

### Secondary CTA

- Explore Monitoring

### Product-Status Dependency

Maternal Intelligence development and validation status.

### Required Section Sequence

1. Maternal information fragmentation
2. Relevant information domains
3. Longitudinal maternal timeline
4. Weight and metabolic progression
5. Symptoms and laboratory context
6. Change detection
7. Explainable summaries
8. Professional interpretation
9. Product status and validation
10. CTA

### Required Content

- Input categories
- Trend and velocity concepts
- Data-quality limitations
- Decision-support boundary
- Current status

### Conditional Content

- Blood pressure
- Glucose information
- Laboratory trends
- Symptoms
- Risk stratification
- Clinical alerts

### Prohibited Content

- Autonomous maternal diagnosis
- Active alert claims if not implemented
- Outcome-prediction claims
- Unvalidated accuracy claims

### SEO Intent

- Maternal monitoring intelligence
- Pregnancy maternal health analytics
- Longitudinal maternal data

### Analytics

- Page viewed
- Methodology selected
- Validation selected
- Monitoring selected
- CTA clicked

### Acceptance Criteria

- Inputs and outputs are accurately represented
- Available and planned components are distinguished
- Professional interpretation remains central
- Validation status is visible

### Test Requirements

- **Requirement IDs:** PRO-003, SHR-020
- **Page ID:** PRO-PG-005
- **Risk priority:** P1, with high clinical-claim, maternal-safety, validation, Product Status, and professional-responsibility risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/intelligence/maternal-intelligence/` route, Page ID, requirement traceability, publication and indexation status, maternal-intelligence terminology, Product Status and validation vocabulary, clinical and decision-support boundaries, analytics-event registration, internal links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover maternal input-category models, longitudinal timeline transformations, trend and velocity presentation, missing and delayed data states, data-quality limitations, current-versus-planned capability classification, CTA availability, consent-aware analytics, and safe synthetic maternal summaries.
- **Required Component IDs and component tests:** `CMP-DAT-001` Chart Frame, `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible maternal timeline and trend summaries, input and output distinctions, validation-status variants, data-quality limitations, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, delayed-data, and unavailable states.
- **E2E journeys:** Include the page in the Provider intelligence journey when published; open Maternal Intelligence, understand its intended monitoring role, inspect input categories and longitudinal progression, distinguish current from planned functionality, verify data-quality and decision-support boundaries, review validation status, navigate to Monitoring, and reach the approved clinical-platform discussion route.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify maternal timeline order, charts, input categories, validation labels, limitations, progressive disclosure, CTA visibility, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/intelligence/maternal-intelligence/` whenever the route is publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, maternal timeline and chart alternatives, input and output comprehension, validation-status meaning, data-quality limitations, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent maternal-risk, progression, symptom, measurement, trend, validation, data-quality, professional-interpretation, Product Status, and CTA meaning; logical layout; appropriate timeline and chart direction; and qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; maternal timelines, trends, charts, change presentation, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, maternal-timeline, trend, validation-status, data-quality, empty, delayed-data, and unavailable-state baselines before publication.
- **Product Status tests:** Verify maternal intelligence, weight and metabolic progression, blood pressure, glucose information, laboratory trends, symptoms, risk stratification, change detection, summaries, and alerts are labelled according to their approved development and validation status. Planned capabilities must not appear operational.
- **Clinical-review requirement:** Mandatory for maternal risk, weight and metabolic progression, blood pressure, glucose, laboratory, symptom, risk-stratification, change-detection, alert, outcome, validation, accuracy, trend, velocity, and professional-interpretation statements.
- **Form or integration tests:** No form is embedded on this page. Test Monitoring and clinical-platform discussion handoffs, unavailable-destination recovery, analytics consent, and synthetic missing, invalid, delayed, and conflicting maternal-data fixtures. Tests must not call live Patient, Provider, laboratory, hospital, or clinical systems.
- **Performance-budget tests:** Before publication, test `/providers/intelligence/maternal-intelligence/` and its timelines or charts against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation, synthetic maternal data only, no Patient or production operational data, no exposure of restricted algorithms, risk logic, alert thresholds, credentials, or internal architecture, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, maternal-intelligence scope, input and output representation, longitudinal progression, data-quality limitations, professional-interpretation boundary, Product Status and validation wording, Monitoring and CTA destinations, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify route availability, approved maternal-intelligence and validation wording, Product Status, clinical boundary, essential navigation, and CTA destinations without entering maternal information or invoking clinical services.

---

## PRO-PG-006 — Fetal Growth Intelligence

**Route:** `/providers/intelligence/fetal-growth-intelligence/`
**Priority:** P1
**Initial status:** Conditional approval
**Audience:** Provider
**Page type:** Advanced clinical capability page
**PRD requirements:** PRO-004

### Primary Purpose

Explain longitudinal fetal-growth review, growth velocity, gestational-age anchoring, and related clinical context.

### Primary Visitor Question

> How can fetal growth be understood across scans rather than one measurement at a time?

### Primary CTA

- Request a Clinical Demonstration

### Secondary CTA

- Review Methodology

### Product-Status Dependency

Fetal Growth Intelligence, standards, Doppler, OCR, and validation.

### Required Section Sequence

1. Scan-by-scan fragmentation problem
2. Gestational-age foundation
3. Longitudinal scan timeline
4. Biometry and estimated fetal weight
5. Percentiles and z-scores
6. Growth velocity and centile movement
7. Customized context
8. Doppler and hemodynamic context
9. Decision-support and professional review
10. Validation and status
11. CTA

### Required Content

- Golden gestational-age anchor concept
- Fixed EDD principles where approved
- Biometric measurements
- Growth-standard status
- Velocity concept
- Centile-crossing context
- Clinical interpretation boundary
- Status and validation

### Conditional Content

- Customized TOW
- GROW
- WHO
- NICHD
- Hadlock
- INTERGROWTH-21st
- Doppler staging
- SGA versus FGR support
- OCR

Only implemented or approved roadmap items may appear.

### Prohibited Content

- Independent FGR diagnosis
- Autonomous staging
- Management recommendations
- Unsupported standard combinations
- Unverified accuracy claims
- Roadmap capabilities displayed as live

### SEO Intent

- Fetal growth monitoring software
- Fetal growth velocity
- Longitudinal fetal biometry
- Fetal growth intelligence
- Pregnancy ultrasound growth monitoring

### Analytics

- Page viewed
- Growth concept selected
- Methodology selected
- Validation selected
- Demo CTA clicked
- Download selected

### Acceptance Criteria

- Clinical terminology is accurate
- Standards and versions are traceable
- Status and limitations are clear
- Professional interpretation remains central
- Specialist diagrams are accessible
- Restricted algorithms are not exposed

### Test Requirements

- **Requirement IDs:** PRO-004, SHR-020
- **Page ID:** PRO-PG-006
- **Risk priority:** P1, with critical clinical-accuracy, gestational-age, fetal-growth, standards, validation, Product Status, and intellectual-property risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/intelligence/fetal-growth-intelligence/` route, Page ID, requirement traceability, publication and indexation status, clinical terminology, cited growth-standard names and versions, Product Status and validation vocabulary, decision-support boundaries, analytics-event registration, methodology and demonstration links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover public gestational-age anchor representations, fixed-EDD presentation rules, biometric and estimated-fetal-weight display models, percentile and z-score formatting, longitudinal velocity and centile-movement presentation, growth-standard selection metadata, missing and conflicting scan states, current-versus-roadmap classification, consent-aware analytics, and safe synthetic fetal-growth summaries.
- **Required Component IDs and component tests:** `CMP-DAT-001` Chart Frame, `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible fetal-growth timelines, chart summaries, biometric labels, units, standards and versions, status variants, professional-interpretation boundaries, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, invalid, conflicting, and unavailable states.
- **E2E journeys:** Include the page in the Provider intelligence journey when published; open Fetal Growth Intelligence, understand longitudinal review across scans, inspect gestational-age and fixed-EDD principles, review biometry, percentiles, z-scores, velocity and centile movement, distinguish available from planned capabilities, verify clinical limitations, open Methodology, and reach the approved clinical-demonstration route.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify scan timelines, charts, biometric tables, units, standards, validation labels, progressive disclosure, CTA visibility, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/intelligence/fetal-growth-intelligence/` whenever the route is publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, fetal-growth timeline and chart alternatives, biometric-table navigation, abbreviations, units, standards and versions, clinical limitations, Product Status meaning, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent gestational-age, EDD, biometry, percentile, z-score, velocity, centile-movement, Doppler, validation, Product Status, clinical-boundary, and CTA meaning; preserve clinically appropriate numeric and chart direction; and obtain qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; scan timelines, growth curves, centile movement, diagrams, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, fetal-growth timeline, growth-chart, biometric-table, Product Status, validation, empty, invalid, conflicting-scan, and unavailable-state baselines before publication.
- **Product Status tests:** Verify Golden gestational-age anchoring, fixed EDD, customized TOW, GROW, WHO, NICHD, Hadlock, INTERGROWTH-21st, Doppler staging, SGA-versus-FGR support, OCR, validation, and clinical-demonstration capabilities are labelled according to their approved implemented, planned, prototype, pilot, validated, or unavailable status.
- **Clinical-review requirement:** Mandatory for gestational-age anchoring, redating and fixed-EDD principles, biometric measurements, estimated fetal weight, percentiles, z-scores, velocity, centile crossing, customized standards, Doppler, hemodynamic context, SGA-versus-FGR language, staging, validation, accuracy, limitations, and professional-interpretation statements.
- **Form or integration tests:** No form is embedded on this page. Test Methodology and clinical-demonstration handoffs, unavailable-destination recovery, analytics consent, download behavior where present, and synthetic missing, invalid, conflicting, and out-of-sequence scan fixtures. Tests must not call live ultrasound, OCR, Patient, Provider, hospital, or clinical systems.
- **Performance-budget tests:** Before publication, test `/providers/intelligence/fetal-growth-intelligence/` and its charts, timelines, tables, or specialist diagrams against approved Core Web Vitals, JavaScript, chart-library, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation and downloads, synthetic fetal data only, no Patient or production operational data, no exposure of restricted algorithms, coefficients, thresholds, standard-implementation logic, OCR internals, credentials, or clinical-system details, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, longitudinal growth explanation, gestational-age and EDD wording, standards and versions, biometric units, velocity and centile context, Product Status, validation and clinical limitations, accessible diagrams, Methodology and demonstration destinations, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify route availability, approved fetal-growth, standards, Product Status and validation wording, professional-interpretation boundary, accessible public visualizations, essential navigation, and CTA destinations without entering scan data or invoking clinical services.

---

## PRO-PG-007 — Workflow

**Route:** `/providers/workflow/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Provider
**Page type:** Workflow page
**PRD requirements:** PRO-005

### Primary Purpose

Show how ODRISC may fit into Patient enrolment, data capture, Provider review, collaboration, and follow-up.

### Primary Visitor Question

> What changes in my workflow if I use ODRISC?

### Primary CTA

- Request Demonstration

### Secondary CTA

- Discuss a Pilot

When available.

### Product-Status Dependency

Provider dashboard, Patient invitation, data sharing, reports, alerts, and integrations.

### Required Section Sequence

1. Current workflow problem
2. Patient entry or enrolment
3. Information capture
4. Data validation
5. Longitudinal organization
6. Provider review
7. Clinical interpretation
8. Patient communication
9. Follow-up and escalation
10. Current versus future integration
11. CTA

### Required Content

- Patient actions
- Provider actions
- Human-review points
- Data-source distinctions
- Current and future workflow
- Responsibility for follow-up
- Expected operational effort

### Conditional Content

- Provider invitation
- OCR
- FHIR
- Hospital integration
- Multidisciplinary roles
- Audit log
- Cohort review

### Prohibited Content

- Undefined alert ownership
- “Zero workflow burden”
- Integration claims without implementation
- Real-time monitoring assumptions

### SEO Intent

- Pregnancy monitoring clinical workflow
- Maternal health digital workflow
- Fetal growth software workflow

### Analytics

- Page viewed
- Workflow step interacted
- Integration section viewed
- Demo CTA clicked
- Pilot CTA clicked

### Acceptance Criteria

- Current and future workflow are distinguishable
- Human review is explicit
- Clinical responsibility is not ambiguous
- Operational requirements are realistic
- CTA destination works

### Test Requirements

- **Requirement IDs:** PRO-005, SHR-020
- **Page ID:** PRO-PG-007
- **Risk priority:** P0 and release blocking, with high workflow-representation, clinical-responsibility, integration-claim, alert-ownership, Product Status, and operational-feasibility risk
- **Static validations:** Validate the `/providers/workflow/` route, Page ID, requirement traceability, indexation, workflow-step terminology, Product Status vocabulary, clinical-responsibility and human-review boundaries, integration-status wording, analytics-event registration, demonstration and pilot links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover workflow-step ordering, Patient and Provider action mappings, data-source distinctions, human-review checkpoints, follow-up and escalation responsibility models, current-versus-future workflow classification, demonstration and pilot CTA availability, consent-aware analytics, and safe public workflow summaries.
- **Required Component IDs and component tests:** `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible workflow sequencing, Patient and Provider role distinctions, responsibility labels, current and future states, Product Status variants, progressive disclosure, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, unavailable, and error states.
- **E2E journeys:** Include this page in `TST-E2E-003`; open Workflow from the Provider journey, follow Patient enrolment through Provider review and follow-up, distinguish Patient from Provider actions, identify human-review and clinical-responsibility points, distinguish current from future integrations, and reach the approved demonstration or pilot destination.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari`; verify workflow-step order, Patient and Provider action separation, responsibility labels, progressive disclosure, integration states, CTA visibility, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/workflow/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, workflow sequence comprehension, Patient and Provider role distinctions, human-review checkpoints, responsibility and escalation language, current-versus-future integration meaning, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent workflow order, Patient and Provider roles, data-source distinctions, clinical responsibility, follow-up, escalation, integration status, Product Status, and CTA meaning; logical layout; appropriate workflow direction; and qualified Arabic, clinical, and operational review.
- **Reduced-motion coverage:** Run `reduced-motion`; workflow sequencing, step transitions, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, workflow-sequence, Patient-role, Provider-role, current-versus-future integration, Product Status, unavailable-pilot, and material progressive-disclosure baselines.
- **Product Status tests:** Verify Provider dashboard, Patient invitation, data sharing, reports, alerts, OCR, FHIR, hospital integration, multidisciplinary roles, audit logs, cohort review, demonstration, and pilot capabilities are labelled according to their approved current, planned, prototype, pilot, or unavailable status.
- **Clinical-review requirement:** Mandatory for clinical interpretation, human review, monitoring, alerts, escalation, follow-up responsibility, Patient communication, data validation, real-time implications, and any statement about clinical decision support or outcomes.
- **Form or integration tests:** No form is embedded on this page. Test demonstration and pilot handoffs, unavailable-pilot recovery, consent-aware analytics, workflow-event deduplication, and synthetic success, delayed-data, integration-unavailable, and follow-up states. Tests must not invite real Patients or call live Provider, hospital, OCR, FHIR, alert, or clinical systems.
- **Performance-budget tests:** Test `/providers/workflow/` and any workflow diagrams or interactive sequences against approved Core Web Vitals, JavaScript, image, font, third-party, integration, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe demonstration and pilot navigation, synthetic data only, no Patient or production operational data, no exposure of internal workflow, integration, alert, audit, access-control, or hospital-system details, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Verify page availability, workflow order, Patient and Provider action separation, human-review and clinical-responsibility boundaries, current-versus-future integrations, Product Status, demonstration and approved pilot destinations, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/providers/workflow/`, approved workflow and integration-status wording, human-review and responsibility boundaries, essential navigation, and demonstration or approved pilot destinations without enrolling a Patient, submitting a request, or invoking an integration.

---

## PRO-PG-008 — Validation

**Route:** `/providers/validation/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Provider
**Page type:** Evidence and trust page
**PRD requirements:** PRO-006, CON-004, SEO-006

### Primary Purpose

Present the current validation position transparently and distinguish different forms of evaluation.

### Primary Visitor Question

> What has ODRISC actually evaluated, tested, piloted, or validated?

### Primary CTA

- Discuss Validation or Request Demonstration

### Secondary CTA

- Review Methodology

### Product-Status Dependency

All validation, pilot, and regulatory claims.

### Required Section Sequence

1. Validation philosophy
2. Product maturity overview
3. Clinical input and expert review
4. Technical validation
5. Usability evaluation
6. Pilot activity
7. Algorithm or clinical validation
8. Regulatory status
9. Limitations
10. Planned validation
11. CTA

### Required Content

For every validation claim:

- What was evaluated
- Who evaluated it
- Method
- Sample or scale
- Date
- Result
- Limitation
- Status

### Conditional Content

- Eight-OB-GYN panel
- Pilot study
- Ten-user pilot
- TRL statement
- External institutional validation
- Research publications

Each must use precise approved wording.

### Prohibited Content

- Panel feedback described as clinical validation
- Pilot described as proven effectiveness
- TRL described as medical-device approval
- Interest described as adoption
- Unsupported clinical-outcome claims

### SEO Intent

- ODRISC validation
- Maternal health platform validation
- Fetal growth software validation
- Pregnancy monitoring clinical evidence

### Analytics

- Page viewed
- Validation category selected
- Evidence downloaded
- Methodology selected
- Demo CTA clicked

### Acceptance Criteria

- Validation types are clearly separated
- Every claim is traceable
- Limitations are visible
- Regulatory status is accurate
- Outdated validation statements are not published
- The page is reviewed by the designated clinical owner

### Test Requirements

- **Requirement IDs:** PRO-006, CON-004, SEO-006, SHR-020
- **Page ID:** PRO-PG-008
- **Risk priority:** P0 and release blocking, with critical evidence, clinical-claim, regulatory-status, validation-traceability, Product Status, and professional-trust risk
- **Static validations:** Validate the `/providers/validation/` route, Page ID, requirement traceability, indexation, validation-category vocabulary, claim-to-source mappings, evidence metadata, dates and review status, Product Status and regulatory terminology, analytics-event registration, download references, methodology links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover validation-record schemas, validation-category classification, required evidence metadata, date and review-state handling, current-versus-expired claim rules, Product Status and regulatory-status mappings, evidence-download metadata, consent-aware analytics, and safe public validation summaries.
- **Required Component IDs and component tests:** `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible validation-category presentation, evidence metadata, limitations, regulatory and Product Status variants, expired or withdrawn evidence states, download links, progressive disclosure, keyboard behavior, focus, mobile reflow, RTL, and reduced motion.
- **E2E journeys:** Include this page in `TST-E2E-003`; open Validation from the Provider journey, distinguish expert review, technical validation, usability evaluation, pilot activity, algorithm or clinical validation, and regulatory status; inspect evidence metadata and limitations; verify current status; review Methodology; test an approved evidence download; and reach the demonstration route.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari`; verify validation-category order, evidence metadata, limitations, regulatory status, Product Status, downloads, progressive disclosure, CTA visibility, touch targets, tables where used, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/validation/`.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, validation-category comprehension, evidence and limitation relationships, table accessibility, download purpose and format, regulatory-status meaning, Product Status meaning, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent validation-category, evidence, result, limitation, maturity, pilot, regulatory, Product Status, methodology, and CTA meaning; preserve dates, numbers, citations, identifiers, and document titles accurately; and obtain qualified Arabic, clinical, regulatory, and evidence-owner review.
- **Reduced-motion coverage:** Run `reduced-motion`; validation-category navigation, evidence expansion, status changes, downloads, progressive disclosure, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, validation-category, evidence-record, limitation, regulatory-status, Product Status, expired-evidence, download, and material progressive-disclosure baselines.
- **Product Status tests:** Verify every expert-review, technical-validation, usability, pilot, algorithm, clinical-validation, regulatory, publication, panel, TRL, and institutional claim uses its approved status and does not convert feedback, interest, testing, piloting, maturity, or planned work into proof, adoption, effectiveness, or approval.
- **Clinical-review requirement:** Mandatory for every clinical, algorithm, outcome, effectiveness, safety, accuracy, validation, pilot, evidence, limitation, and professional-review claim. Review evidence must identify the designated clinical owner and review date.
- **Form or integration tests:** No form is embedded on this page. Test Methodology, demonstration, and evidence-download handoffs; missing, expired, withdrawn, and unavailable evidence states; analytics consent; and safe synthetic validation fixtures. Tests must not call live research, regulatory, Patient, Provider, hospital, or clinical systems.
- **Performance-budget tests:** Test `/providers/validation/` and its evidence tables, downloads, diagrams, or interactive disclosures against approved Core Web Vitals, JavaScript, document, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe downloads and external links, approved file types, no executable or private evidence exposure, no Patient or production operational data, no restricted algorithms or unpublished research details, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Verify page availability, separation of validation categories, evidence traceability, visible limitations, current Product Status and regulatory wording, designated review information, Methodology and demonstration links, approved downloads, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/providers/validation/`, current evidence and review metadata, visible limitations, approved validation and regulatory wording, Product Status, essential navigation, Methodology and demonstration destinations, and safe evidence downloads without submitting data.

---

## PRO-PG-009 — Methodology

**Route:** `/providers/methodology/`
**Priority:** P1
**Initial status:** Approved in principle
**Audience:** Provider
**Page type:** Methodology and trust page
**PRD requirements:** PRO-007

### Primary Purpose

Explain publicly approved clinical and computational methodology without exposing restricted intellectual property.

### Primary Visitor Question

> Which standards, calculations, and review principles support ODRISC outputs?

### Primary CTA

- Request Methodology Discussion

### Secondary CTA

- Review Validation

### Product-Status Dependency

Implemented standards and approved public methodology.

### Required Section Sequence

1. Methodology principles
2. Data sources
3. Data validation
4. Gestational-age methodology
5. Maternal monitoring methodology
6. Fetal growth methodology
7. Doppler methodology where applicable
8. Explainability
9. Version control
10. Limitations
11. References
12. CTA

### Required Content

- Source and version
- Population applicability
- Calculation category
- Human-review role
- Conflict-resolution approach
- Implementation status
- Limitations

### Prohibited Content

- Unimplemented standards presented as active
- Proprietary source code
- Restricted algorithms
- Unsupported standard mixing
- Diagnostic or treatment recommendations

### SEO Intent

- ODRISC methodology
- Fetal growth monitoring methodology
- Pregnancy clinical decision support methodology

### Analytics

- Page viewed
- Methodology section selected
- Reference opened
- Validation selected
- Contact CTA clicked

### Acceptance Criteria

- Standards are accurately named and versioned
- Implementation status is visible
- Conflicting frameworks are not silently combined
- Restricted intellectual property is protected
- Clinical review is complete

### Test Requirements

- **Requirement IDs:** PRO-007, SHR-020
- **Page ID:** PRO-PG-009
- **Risk priority:** P1, with critical methodology-accuracy, standards-versioning, clinical-interpretation, framework-conflict, Product Status, and intellectual-property risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/methodology/` route, Page ID, requirement traceability, publication and indexation status, standard names and versions, source and reference metadata, population-applicability statements, implementation status, limitation wording, Product Status vocabulary, analytics-event registration, reference and validation links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover public methodology-record schemas, source and version formatting, population-applicability mappings, calculation-category classification, implementation-status models, framework-conflict handling, reference metadata, limitation visibility, current-versus-planned methodology classification, consent-aware analytics, and safe public methodology summaries.
- **Required Component IDs and component tests:** `CMP-TRS-001` Product Status Badge, `CMP-DAT-001` Chart Frame where methodological diagrams are used, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible methodology sections, standards and versions, references, limitations, framework distinctions, Product Status variants, progressive disclosure, keyboard behavior, focus, mobile reflow, RTL, and reduced motion.
- **E2E journeys:** Include the page in the Provider trust journey when published; open Methodology, review data sources and validation principles, inspect gestational-age, maternal, fetal-growth, and applicable Doppler methodology, distinguish implemented from planned standards, verify explainability and human-review boundaries, open an approved reference, continue to Validation, and reach the methodology-discussion route.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify methodology-section order, standards and versions, references, tables, diagrams, limitations, progressive disclosure, CTA visibility, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/methodology/` whenever the route is publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, methodology-section navigation, standards and version comprehension, table and reference accessibility, diagram alternatives, abbreviation expansion, limitation relationships, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent methodology, source, standard, version, population-applicability, calculation-category, implementation-status, limitation, explainability, human-review, validation, and CTA meaning; preserve citations, identifiers, numbers, formulas, abbreviations, and standard names accurately; and obtain qualified Arabic and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; methodology navigation, diagrams, framework comparisons, reference disclosures, progressive disclosure, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, methodology-section, standards-table, framework-comparison, reference, limitation, Product Status, and material progressive-disclosure baselines before publication.
- **Product Status tests:** Verify each gestational-age, maternal-monitoring, fetal-growth, Doppler, validation, calculation, standard, framework, and explainability method is labelled according to its approved implemented, planned, prototype, under-validation, or unavailable status. Unimplemented standards must not appear active.
- **Clinical-review requirement:** Mandatory for data-validation principles, gestational-age methodology, maternal monitoring, fetal growth, Doppler, standards, population applicability, calculation categories, framework conflicts, explainability, limitations, and human-review statements. The approved reviewer and review date must be traceable.
- **Form or integration tests:** No form is embedded on this page. Test reference links, Validation navigation, methodology-discussion handoff, unavailable-destination recovery, analytics consent, and synthetic methodology records. Tests must not execute restricted clinical algorithms or call live Patient, Provider, hospital, standards-provider, or clinical systems.
- **Performance-budget tests:** Before publication, test `/providers/methodology/` and its tables, references, diagrams, or framework comparisons against approved Core Web Vitals, JavaScript, document, image, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe references and external links, approved download types, no Patient or production operational data, no proprietary source code, restricted algorithms, coefficients, thresholds, credentials, unpublished validation details, or internal architecture exposure, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, standards and versions, source and reference links, population applicability, implementation status, framework distinctions, explainability, limitations, Product Status, clinical-review evidence, Validation and discussion destinations, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/providers/methodology/`, approved standards and versions, implementation-status and limitation wording, clinical-review status, safe references, essential navigation, Validation route, and discussion destination without entering data or invoking methodology calculations.

---

## PRO-PG-010 — Provider Insights

**Route:** `/providers/insights/`
**Priority:** P1
**Initial status:** Proposed pending content decision
**Audience:** Provider
**Page type:** Provider resource hub
**PRD requirements:** CON-004

### Primary Purpose

Organize Provider-oriented clinical, methodology, evidence, and implementation content.

### Primary Visitor Question

> What clinical and implementation insights can I review before evaluating ODRISC?

### Primary CTA

- Explore Clinical Platform

### Secondary CTA

- Request Demonstration

### Required Content Categories

- Maternal intelligence
- Fetal growth
- Monitoring
- Methodology
- Validation
- Workflow
- Implementation
- Research

### Architecture Decision Dependency

Whether this remains a separate route or becomes a filtered Provider Resources view.

### Prohibited Content

- Duplicate content competing with `/resources/providers/`
- Unreviewed medical content
- Product news presented as evidence

### SEO Intent

Provider research and insight discovery.

### Analytics

- Hub viewed
- Filter used
- Resource selected
- CTA clicked

### Acceptance Criteria

- The page provides unique navigational value
- It does not duplicate the shared resource hub
- All clinical resources show authorship and review metadata

### Test Requirements

- **Requirement IDs:** CON-004, SHR-020
- **Page ID:** PRO-PG-010
- **Risk priority:** P1, with content-governance, clinical-review, evidence-classification, duplicate-content, SEO, and architecture-decision risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/insights/` route only if separately approved, Page ID, requirement traceability, architecture-decision status, canonical URL and indexation, resource metadata, authorship and review dates, content-category vocabulary, duplicate-content rules, internal links, analytics-event registration, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Provider-resource filtering, category mappings, metadata validation, authorship and clinical-review requirements, publication-state handling, canonical-link selection, duplicate-resource detection, empty and unavailable categories, consent-aware analytics, and routing between the proposed hub and the filtered Provider Resources alternative.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible resource navigation, filter behavior where implemented, category names, authorship and review metadata, link purpose, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, unavailable, and error states.
- **E2E journeys:** When the separate route is approved, include it in the Provider resource journey; open Provider Insights, navigate and filter approved categories, distinguish clinical evidence from methodology, implementation content, and product news, open a reviewed resource, return to the hub, continue to the Clinical Platform, and reach the demonstration route.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify category and filter controls, resource-card order, authorship and review metadata, navigation, CTA visibility, touch targets, empty states, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/insights/` whenever the separate route is approved and publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, filter names and states, resource-link purpose, metadata relationships, category comprehension, empty-state recovery, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent category, filter, title, authorship, review, evidence, methodology, implementation, research, Product Status, and CTA meaning; logical layout; accurate metadata; and qualified Arabic, content, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; filtering, resource-list updates, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, category, filtered-results, resource-card, empty, unavailable, metadata, and material navigation baselines before publication.
- **Product Status tests:** Verify product-related resources and CTAs reflect approved capability and publication status. Product news, proposed functionality, planned integrations, and unvalidated material must not be presented as clinical evidence or active capability.
- **Clinical-review requirement:** Mandatory for every clinical resource and for maternal, fetal-growth, monitoring, methodology, validation, outcome, risk, evidence, and implementation claim. Authorship, reviewer identity, review date, references, and review status must be traceable.
- **Form or integration tests:** No form is embedded on this page. Test resource-index generation, filters, canonical resource links, Clinical Platform and demonstration handoffs, unavailable-resource recovery, analytics consent, and safe synthetic metadata fixtures. Tests must not call live clinical, publishing, Patient, Provider, or production systems.
- **Performance-budget tests:** Before publication, test `/providers/insights/` or its approved filtered-resource replacement against Core Web Vitals, JavaScript, resource-list, image, font, third-party, search or filtering, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe resource and external links, approved download types, sanitized filter and search parameters, no Patient or production operational data, no unpublished resources or restricted evidence exposure, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify the approved route or filtered-resource implementation, unique navigational value, category and filter behavior, authorship and review metadata, canonical links, empty-state recovery, Clinical Platform and demonstration destinations, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when the architecture decision approves publication; verify the canonical route, approved categories, reviewed-resource links, authorship and review metadata, essential navigation, and CTA destinations without submitting data. If the separate route is rejected, verify its redirect or absence and the approved Provider Resources replacement.

---

## PRO-PG-011 — Hospitals and Health Systems

**Route:** `/providers/hospitals-and-health-systems/`
**Priority:** P1
**Initial status:** Approved in principle
**Audience:** Institutional
**Page type:** Institutional solution page
**PRD requirements:** PRO-010, PRO-011

### Primary Purpose

Support evaluation by hospitals, maternity systems, and healthcare networks.

### Primary Visitor Question

> How could ODRISC be implemented, governed, and scaled within an organization?

### Primary CTA

- Request Enterprise Briefing

### Secondary CTA

- Discuss Implementation

### Product-Status Dependency

Enterprise deployment, security, implementation, cohort analytics, integration, training, and support.

### Required Section Sequence

1. Institutional challenge
2. ODRISC enterprise value
3. Clinical and operational use cases
4. Governance
5. Security and privacy
6. Roles and access
7. Implementation
8. Integration direction
9. Training and support
10. Commercial model
11. Readiness and limitations
12. CTA

### Required Content

- Organizational use cases
- Current implementation readiness
- Market context
- Security claims
- Training and support
- Integration status
- Contact process

### Conditional Content

- Enterprise pricing
- FHIR
- Cohort analytics
- Multisite deployment
- Customization
- Hospital pilot

### Prohibited Content

- Enterprise readiness beyond actual status
- Named integrations not implemented
- Compliance certifications not obtained
- Outcome guarantees
- Unverified hospital partnerships

### SEO Intent

- Hospital maternal health platform
- Maternity hospital monitoring software
- Enterprise pregnancy monitoring
- Maternal fetal analytics for hospitals

### Analytics

- Page viewed
- Security section viewed
- Implementation section viewed
- Enterprise CTA clicked
- Briefing form submitted

### Acceptance Criteria

- Implementation maturity is transparent
- Security and compliance statements are accurate
- Enterprise CTA reaches an owned workflow
- No unverified customer or partner claim appears

### Test Requirements

- **Requirement IDs:** PRO-010, PRO-011, SHR-020
- **Page ID:** PRO-PG-011
- **Risk priority:** P1, with high enterprise-readiness, security, privacy, compliance, integration, commercial-claim, partnership, and institutional-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/hospitals-and-health-systems/` route, Page ID, requirement traceability, publication and indexation status, enterprise and implementation terminology, Product Status vocabulary, security and compliance claims, integration names and statuses, partnership references, analytics-event registration, enterprise CTA ownership, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover enterprise-capability and readiness models, organizational-use-case mappings, role and access descriptions, implementation-stage classification, integration and deployment status, market-specific content, optional pricing visibility, CTA destination configuration, consent-aware analytics, and safe public enterprise summaries.
- **Required Component IDs and component tests:** `CMP-TRS-001` Product Status Badge, `CMP-FRM-006` General Contact Form when used for enterprise enquiries, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible readiness and status presentation, security and privacy distinctions, role descriptions, enterprise CTA behavior, form states where applicable, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, success, error, and unavailable states.
- **E2E journeys:** When included in release scope, open the Hospitals and Health Systems page, understand institutional use cases, inspect readiness, governance, security, privacy, roles, implementation, integrations, training and support, distinguish available from planned enterprise capabilities, start an enterprise briefing or implementation discussion, and recover safely from unavailable or failed enquiry delivery.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify institutional narrative order, security and implementation sections, role and access content, tables where used, CTA or form behavior, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/hospitals-and-health-systems/` whenever the route is publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, security and privacy comprehension, implementation and readiness status, role and access descriptions, table accessibility, form labels and errors where applicable, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent enterprise, governance, security, privacy, implementation, integration, training, support, pricing, readiness, limitation, and CTA meaning; logical layout; accurate organization and compliance terminology; and qualified Arabic, security, legal, commercial, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; institutional diagrams, implementation sequences, progressive disclosure, form feedback, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, enterprise-readiness, governance, security, implementation, integration-status, pricing where approved, form, success, error, and unavailable-state baselines before publication.
- **Product Status tests:** Verify enterprise deployment, security controls, implementation services, cohort analytics, FHIR and named integrations, multisite deployment, customization, training, support, pricing, and hospital pilots are labelled according to their approved current, planned, prototype, pilot, contracted, or unavailable status.
- **Clinical-review requirement:** Required for institutional clinical use cases, cohort analytics, monitoring, decision support, clinical workflow, outcome, safety, effectiveness, and professional-responsibility claims. Security, privacy, compliance, commercial, and implementation claims additionally require their designated specialist reviewers.
- **Form or integration tests:** If the enterprise CTA uses `CMP-FRM-006`, cover it through `TST-INT-001` or an approved enterprise-enquiry extension: required fields, validation, consent, success, duplicate submission, delivery failure, spam protection, safe error mapping, and owned routing. Test integration and deployment claims using synthetic fixtures only; do not call live CRM, email, FHIR, hospital, Patient, Provider, or production systems.
- **Performance-budget tests:** Before publication, test `/providers/hospitals-and-health-systems/` and its diagrams, tables, pricing content, or enquiry flow against approved Core Web Vitals, JavaScript, image, font, third-party, form, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe enterprise enquiry handling, server-side validation, rate limiting and spam protection where applicable, no Patient, clinical, confidential customer, or production operational data, no exposure of credentials or sensitive architecture, consent-controlled analytics, safe external links, and absence of sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, implementation maturity, security and compliance wording, integration status, ownership of enterprise CTAs, approved form delivery where applicable, success and failure recovery, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify route availability, approved enterprise-readiness, security, compliance, integration and partnership wording, essential navigation, and enterprise CTA availability without submitting the form, contacting integrations, or entering institutional data.

---

## PRO-PG-012 — Fertility and IVF Centers

**Route:** `/providers/fertility-and-ivf-centers/`
**Priority:** P1
**Initial status:** Conditional
**Audience:** Provider and institutional
**Page type:** Segment solution page
**PRD requirements:** PRO-010

### Primary Purpose

Explain ODRISC relevance to preconception, IVF preparation, pregnancy dating, and continuity after conception.

### Primary Visitor Question

> How could ODRISC support fertility-center Patients before and after conception?

### Primary CTA

- Discuss a Fertility-Center Pilot

### Secondary CTA

- Explore Preconception Support

### Product-Status Dependency

Preconception tools, IVF readiness, IVF gestational-age anchoring, Patient monitoring, pilot availability.

### Required Section Sequence

1. Preconception and fertility-care gap
2. Metabolic and weight context
3. Patient preparation
4. IVF dating and continuity
5. Pregnancy monitoring after conception
6. Patient engagement
7. Center workflow
8. Product status
9. Pilot CTA

### Prohibited Content

- Improved IVF success claims
- Guaranteed conception
- IVF readiness score presented as available without approval
- Unsupported fertility outcomes

### SEO Intent

- IVF Patient preparation platform
- Fertility center pregnancy monitoring
- IVF gestational age monitoring

### Analytics

- Page viewed
- Preconception support selected
- Pilot CTA clicked
- Pilot form submitted

### Acceptance Criteria

- Fertility outcomes are not overstated
- Current and future capabilities are clearly separated
- Pilot availability is accurate
- IVF dating language is clinically reviewed

### Test Requirements

- **Requirement IDs:** PRO-010, SHR-020
- **Page ID:** PRO-PG-012
- **Risk priority:** P1, with critical fertility-outcome, IVF-dating, preconception, Product Status, pilot-availability, clinical-claim, and institutional-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/fertility-and-ivf-centers/` route, Page ID, requirement traceability, publication and indexation status, fertility and IVF terminology, gestational-age wording, Product Status vocabulary, pilot-availability status, clinical boundaries, analytics-event registration, preconception and pilot links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover preconception-capability mappings, IVF-dating public presentation models, post-conception continuity states, current-versus-planned capability classification, pilot-availability rules, market-specific CTA selection, unavailable-pilot recovery, consent-aware analytics, and safe synthetic fertility-center scenarios.
- **Required Component IDs and component tests:** `CMP-TRS-001` Product Status Badge, `CMP-FRM-006` General Contact Form when used for pilot enquiries, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible fertility and preconception content, IVF-dating explanations, capability-status variants, pilot CTA behavior, form states where applicable, keyboard behavior, focus, mobile reflow, RTL, reduced motion, success, error, and unavailable states.
- **E2E journeys:** When included in release scope, open the Fertility and IVF Centers page, understand preconception and fertility-center use cases, distinguish preparation from outcome claims, review IVF dating and post-conception continuity, inspect Product Status, navigate to Preconception Support, start an approved pilot enquiry, and recover safely when the pilot or enquiry destination is unavailable.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify narrative order, preconception and IVF-dating content, Product Status, pilot CTA or form, navigation, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/fertility-and-ivf-centers/` whenever the route is publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, fertility and preconception terminology, IVF-dating comprehension, Product Status and pilot availability, form labels and errors where applicable, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent fertility, preconception, metabolic, weight, Patient-preparation, IVF-dating, pregnancy-monitoring, outcome-limitation, Product Status, pilot, and CTA meaning; preserve dates and gestational-age notation accurately; and obtain qualified Arabic, fertility-clinical, and product review.
- **Reduced-motion coverage:** Run `reduced-motion`; timelines, continuity explanations, progressive disclosure, form feedback, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, preconception, IVF-continuity, Product Status, pilot-available, pilot-unavailable, form, success, and error-state baselines before publication.
- **Product Status tests:** Verify preconception tools, IVF-readiness functions, IVF gestational-age anchoring, Patient preparation, post-conception monitoring, center workflow, and pilot availability are labelled according to their approved current, planned, prototype, pilot, validated, or unavailable status.
- **Clinical-review requirement:** Mandatory for fertility, preconception metabolic and weight context, Patient preparation, IVF readiness, gestational-age anchoring, dating, pregnancy monitoring, conception, success, outcome, continuity, limitation, and professional-responsibility statements.
- **Form or integration tests:** If the pilot CTA uses `CMP-FRM-006`, cover it through `TST-INT-001` or an approved pilot-enquiry extension: required fields, validation, consent, success, duplicate submission, delivery failure, spam protection, safe error mapping, and owned routing. Use synthetic data only and do not request fertility treatment, reproductive history, pregnancy, embryo, Patient, or clinical information. Do not call live CRM, email, fertility-center, Patient, Provider, or clinical systems.
- **Performance-budget tests:** Before publication, test `/providers/fertility-and-ivf-centers/` and its diagrams, timelines, or pilot-enquiry flow against approved Core Web Vitals, JavaScript, image, font, third-party, form, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, server-side validation, rate limiting and spam protection where applicable, safe pilot routing, synthetic data only, no fertility, reproductive, pregnancy, Patient, embryo, or production operational data, no exposure of gestational-age algorithms or credentials, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, preconception and IVF scope, outcome limitations, dating wording, Product Status, pilot availability, Preconception Support navigation, approved pilot-enquiry delivery where applicable, success and failure recovery, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify route availability, approved fertility, IVF-dating, Product Status and pilot wording, essential navigation, Preconception Support, and pilot CTA availability without submitting an enquiry or entering fertility or Patient data.

---

## PRO-PG-013 — Multidisciplinary Care

**Route:** `/providers/multidisciplinary-care/`
**Priority:** P1
**Initial status:** Approved in principle
**Audience:** Provider
**Page type:** Workflow and collaboration page
**PRD requirements:** PRO-010

### Primary Purpose

Explain how ODRISC may support coordinated maternal care across clinical and allied-health roles.

### Primary Visitor Question

> How can different members of the pregnancy-care team work from a clearer shared view?

### Primary CTA

- Discuss Multidisciplinary Use

### Secondary CTA

- Explore Workflow

### Product-Status Dependency

Role-based access, shared timelines, nutrition, physical activity, Provider notes, and care coordination.

### Required Section Sequence

1. Fragmented multidisciplinary care
2. Shared Patient journey
3. Role definitions
4. Obstetric review
5. Nutrition support
6. Physical-activity support
7. Care coordination
8. Shared information and permissions
9. Current status
10. CTA

### Required Content

- Role boundaries
- Professional responsibility
- Patient consent
- Current collaboration capability
- Future role-based access status

### Prohibited Content

- Identical interfaces implied for all professionals
- Role substitution
- Unapproved shared-record access
- Patient consent assumptions

### SEO Intent

- Multidisciplinary pregnancy care platform
- Maternal health care coordination
- Pregnancy nutrition and physiotherapy collaboration

### Analytics

- Page viewed
- Role selected
- Workflow selected
- CTA clicked

### Acceptance Criteria

- Roles are accurately represented
- Consent and access boundaries are visible
- Collaboration status is transparent
- No profession is described outside its scope

### Test Requirements

- **Requirement IDs:** PRO-010, SHR-020
- **Page ID:** PRO-PG-013
- **Risk priority:** P1, with high professional-scope, Patient-consent, role-based-access, privacy, collaboration, Product Status, and clinical-responsibility risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/multidisciplinary-care/` route, Page ID, requirement traceability, publication and indexation status, professional-role vocabulary, scope-of-practice wording, consent and access boundaries, Product Status terminology, analytics-event registration, workflow and CTA links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover professional-role and permission mappings, role-boundary rules, consent-state presentation, shared-timeline visibility models, current-versus-future collaboration classification, CTA destination configuration, unavailable-collaboration states, consent-aware analytics, and safe synthetic multidisciplinary scenarios.
- **Required Component IDs and component tests:** `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible role selection and descriptions, professional-scope boundaries, consent and permission states, collaboration-status variants, progressive disclosure, keyboard behavior, focus, mobile reflow, RTL, reduced motion, unavailable, and error states.
- **E2E journeys:** When included in release scope, open Multidisciplinary Care, understand the shared Patient journey, distinguish obstetric, nutrition, physical-activity, and other approved roles, verify professional responsibilities and consent boundaries, distinguish current from future collaboration capabilities, navigate to Workflow, and reach the approved multidisciplinary-use discussion route.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify shared-journey order, role descriptions, consent and permission information, collaboration status, progressive disclosure, CTA visibility, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/multidisciplinary-care/` whenever the route is publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, role-selection semantics, professional-scope comprehension, consent and access boundaries, collaboration status, shared-timeline alternatives, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent role, professional-responsibility, consent, permission, obstetric, nutrition, physical-activity, care-coordination, Product Status, workflow, and CTA meaning; logical layout; accurate professional terminology; and qualified Arabic, clinical, privacy, and relevant professional review.
- **Reduced-motion coverage:** Run `reduced-motion`; shared-journey explanations, role selection, permission presentation, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, shared-journey, professional-role, consent, permission, Product Status, current-collaboration, future-collaboration, unavailable, and material progressive-disclosure baselines before publication.
- **Product Status tests:** Verify role-based access, shared timelines, nutrition support, physical-activity support, Provider notes, permissions, multidisciplinary collaboration, and care-coordination capabilities are labelled according to their approved current, planned, prototype, pilot, or unavailable status.
- **Clinical-review requirement:** Mandatory for professional roles, scope of practice, obstetric review, nutrition, physical activity, care coordination, clinical responsibility, shared information, Provider notes, escalation, and Patient communication statements. Relevant professional reviewers must approve descriptions of their respective roles.
- **Form or integration tests:** No form is embedded on this page. Test Workflow and multidisciplinary-discussion handoffs, unavailable-destination recovery, role and permission presentation, consent-aware analytics, and synthetic consent-granted, consent-withdrawn, restricted-access, and unavailable-collaboration fixtures. Tests must not access live Patient, Provider, hospital, identity, record, or clinical systems.
- **Performance-budget tests:** Before publication, test `/providers/multidisciplinary-care/` and its role, shared-journey, permission, or workflow presentations against approved Core Web Vitals, JavaScript, image, font, third-party, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe navigation, synthetic data only, least-privilege role presentation, explicit consent boundaries, no Patient or production operational data, no unauthorized shared-record access, no exposure of access-control logic or credentials, consent-controlled analytics, and absence of sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, role accuracy, professional-scope boundaries, consent and permissions, collaboration Product Status, shared-journey presentation, Workflow and discussion destinations, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify route availability, approved professional-role, consent, access, collaboration and Product Status wording, essential navigation, Workflow route, and discussion destination without entering Patient information or accessing shared records.

---

## PRO-PG-014 — Provider Security and Privacy

**Route:** `/providers/security-and-privacy/`
**Priority:** P1
**Initial status:** Approved in principle
**Audience:** Provider and institutional
**Page type:** Trust page
**PRD requirements:** PRO-011, SEC-001 to SEC-008, PRV-001 to PRV-007

### Primary Purpose

Explain implemented security, privacy, consent, and data-governance principles.

### Primary Visitor Question

> How does ODRISC protect sensitive maternal and fetal information?

### Primary CTA

- Contact the Security or Enterprise Team

### Secondary CTA

- Review Privacy Policy

### Product-Status Dependency

All security and privacy controls described.

### Required Section Sequence

1. Data sensitivity statement
2. Privacy principles
3. Consent and sharing
4. Access control
5. Storage and transmission
6. Auditability
7. Third-party services
8. Regional considerations
9. Incident or contact route
10. Current certifications and limitations

### Prohibited Content

- Compliance certifications not obtained
- Infrastructure details that create security risk
- “Fully secure” or absolute claims
- Unimplemented role-based access
- Unconfirmed data residency

### SEO Intent

- ODRISC security
- Maternal health platform privacy
- Pregnancy data security

### Analytics

- Page viewed
- Privacy Policy selected
- Security contact selected
- Enterprise CTA clicked

### Acceptance Criteria

- Every security claim is technically verified
- Privacy and security are distinguished
- Compliance language is accurate
- Contact pathways are owned
- Sensitive architecture is not exposed

### Test Requirements

- **Requirement IDs:** PRO-011, SEC-001, SEC-002, SEC-003, SEC-004, SEC-005, SEC-006, SEC-007, SEC-008, PRV-001, PRV-002, PRV-003, PRV-004, PRV-005, PRV-006, PRV-007, SHR-020
- **Page ID:** PRO-PG-014
- **Risk priority:** P1, with critical security, privacy, consent, compliance, data-governance, architecture-disclosure, and institutional-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/security-and-privacy/` route, Page ID, requirement traceability, publication and indexation status, approved security and privacy vocabulary, control and certification statuses, data-residency wording, consent and sharing claims, third-party service references, contact ownership, Privacy Policy link, analytics-event registration, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover public security-control and privacy-principle models, consent and sharing states, access-control status presentation, data-classification mappings, third-party service metadata, regional applicability, certification-status rules, safe public error mapping, contact-route configuration, consent-aware analytics, and removal of non-public architecture fields.
- **Required Component IDs and component tests:** `CMP-TRS-001` Product Status Badge, `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible security and privacy distinctions, consent explanations, control-status variants, limitations, contact actions, keyboard behavior, focus, mobile reflow, RTL, reduced motion, unavailable, and error states.
- **E2E journeys:** When included in release scope, open Provider Security and Privacy, understand data sensitivity, distinguish privacy from security, review consent and sharing, access control, storage and transmission, auditability, third-party and regional considerations, inspect current certifications and limitations, open the Privacy Policy, and reach the owned security or enterprise contact route.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify security and privacy content order, consent explanations, control and limitation states, policy and contact links, touch targets, tables where used, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/providers/security-and-privacy/` whenever the route is publishable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, security and privacy distinctions, consent and sharing comprehension, control-status and limitation relationships, table accessibility, policy and contact-link purpose, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent security, privacy, consent, sharing, access-control, storage, transmission, auditability, third-party, regional, certification, limitation, and contact meaning; preserve legal and technical terminology accurately; and obtain qualified Arabic, security, privacy, and legal review.
- **Reduced-motion coverage:** Run `reduced-motion`; control explanations, progressive disclosure, status presentation, navigation, policy access, and contact actions must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, security-versus-privacy, consent, control-status, certification-status, limitation, third-party, regional, policy-link, and contact-state baselines before publication.
- **Product Status tests:** Verify access control, sharing, encryption, storage, transmission, auditability, incident handling, third-party services, data residency, certifications, compliance, and regional controls are labelled according to their technically verified implemented, planned, under-review, certified, not-certified, or unavailable status.
- **Clinical-review requirement:** Required for descriptions of maternal and fetal information, clinical-data sensitivity, Patient sharing, Provider access, clinical responsibility, and any claim connecting security or privacy controls to clinical use. Security, privacy, legal, and compliance owners must review their respective claims.
- **Form or integration tests:** No form is necessarily embedded on this page. Test Privacy Policy, security-contact, and enterprise-contact handoffs, unavailable-destination recovery, consent behavior, analytics suppression before consent, and synthetic control-status fixtures. If a contact form is used, cover validation, safe error mapping, spam protection, rate limiting, owned delivery, and prohibition of Patient or clinical information. Do not call live security, identity, CRM, email, Patient, Provider, or production systems.
- **Performance-budget tests:** Before publication, test `/providers/security-and-privacy/` and any control tables, diagrams, policy links, or contact flow against approved Core Web Vitals, JavaScript, image, font, third-party, form, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify HTTPS behavior, approved security headers, Content Security Policy where configured, safe redirects and external links, absence of secrets and sensitive source maps, safe error responses, public-runtime configuration allowlisting, consent-controlled analytics, secure contact handling, no Patient or production operational data, and no exposure of infrastructure topology, credentials, access-control internals, vulnerabilities, or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, technical accuracy of security and privacy claims, consent and sharing wording, control and certification statuses, visible limitations, Privacy Policy and owned contact destinations, security headers, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify route availability, approved security, privacy, consent, compliance, certification and limitation wording, essential security headers, Privacy Policy, and owned contact destinations without submitting a form, testing an exploit, or entering sensitive data.

---

## PRO-PG-015 — Provider FAQs

**Route:** `/providers/frequently-asked-questions/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Provider
**Page type:** FAQ and trust page
**PRD requirements:** CON-005, PRO-001, PRO-006, PRO-008

### Required FAQ Categories

- Product role
- Clinical judgment
- Product status
- Data inputs
- Monitoring
- Maternal intelligence
- Fetal growth intelligence
- Validation
- Methodology
- Workflow
- Patient consent
- Security
- Integration
- Demonstrations
- Pilots
- Commercial terms
- Market availability
- Regulatory status

### Primary CTA

- Request Demonstration

### Prohibited Content

- Unreviewed technical commitments
- Legal advice
- Patient-specific clinical questions
- Unsupported validation claims

### SEO Intent

Provider FAQ intent with visible and accurate FAQ structured data.

### Analytics

- Page viewed
- Question opened
- Demo CTA clicked
- Validation selected
- Contact selected

### Acceptance Criteria

- Answers are concise, precise, and current
- Clinical and regulatory boundaries are visible
- Product Status is accurate
- FAQ schema matches visible answers

### Test Requirements

- **Requirement IDs:** CON-005, PRO-001, PRO-006, PRO-008, SHR-020
- **Page ID:** PRO-PG-015
- **Risk priority:** P0 and release blocking, with high clinical-boundary, validation, regulatory, Product Status, structured-data, commercial-commitment, and professional-trust risk
- **Static validations:** Validate the `/providers/frequently-asked-questions/` route, Page ID, requirement traceability, indexation, required FAQ categories, FAQ metadata, visible-answer and structured-data equivalence, Product Status vocabulary, clinical and regulatory boundaries, analytics-event registration, internal links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover FAQ schema generation, visible-question and structured-data parity, category mappings, stable question identifiers, Product Status insertion, review and expiry metadata, internal-link generation, unavailable-answer handling, consent-aware analytics, and prevention of duplicate question-open events.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-TRS-001` Product Status Badge where status is displayed, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible question and answer relationships, expanded and collapsed states, keyboard operation, focus behavior, link purpose, Product Status variants, mobile reflow, RTL, reduced motion, and direct-link behavior. Any reusable FAQ or Accordion component must receive an approved Component ID before implementation.
- **E2E journeys:** Include this page in `TST-E2E-003`; open Provider FAQs, navigate required categories, expand and collapse representative questions, verify clinical, validation, regulatory and Product Status boundaries, follow Validation and Contact links, test a direct question link where supported, and reach the approved demonstration route.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari`; verify category navigation, question controls, expanded answers, long technical content, links, CTA visibility, touch targets, focus visibility, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all registered FAQ dependencies and Playwright Axe checks against `/providers/frequently-asked-questions/`, including representative expanded and collapsed states.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, question-control names, expanded-state communication, answer relationships, focus behavior, link purpose, technical-term comprehension, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent question, answer, clinical-boundary, validation, methodology, consent, security, integration, commercial, market, regulatory, Product Status, and CTA meaning; logical expansion behavior; accurate technical terminology; and qualified Arabic, clinical, regulatory, legal, security, and commercial review where applicable.
- **Reduced-motion coverage:** Run `reduced-motion`; question expansion, category navigation, focus movement, direct linking, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, collapsed, expanded, focused, long-answer, Product Status, direct-linked-question, and material error-state baselines.
- **Product Status tests:** Verify every answer concerning monitoring, maternal intelligence, fetal growth intelligence, validation, integrations, demonstrations, pilots, commercial terms, market availability, and regulatory status reflects the approved current, planned, prototype, pilot, validated, unavailable, or restricted status.
- **Clinical-review requirement:** Mandatory for answers concerning clinical judgment, monitoring, maternal intelligence, fetal growth, validation, methodology, Patient consent, risk, outcomes, accuracy, regulatory status, and professional responsibility. Other answers require their relevant product, legal, security, privacy, integration, commercial, or operational reviewers.
- **Form or integration tests:** No form is embedded on this page. Test Validation, Contact, demonstration, methodology, security, privacy, and integration-related links; unavailable-destination recovery; FAQ analytics; direct-question linking where supported; and structured-data output. Tests must not call live Patient, Provider, CRM, integration, or clinical systems.
- **Performance-budget tests:** Test `/providers/frequently-asked-questions/` and its structured data, long answers, question controls, filtering where used, and expansion behavior against approved Core Web Vitals, JavaScript, content, font, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe FAQ structured data, escaped and sanitized visible content, safe internal and external links, safe fragment and query handling, no Patient or production operational data, no restricted technical or architectural disclosure, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Verify page availability, required FAQ categories, representative expansion and collapse, answer currency, visible clinical and regulatory boundaries, Product Status, structured-data parity, Validation, Contact and demonstration destinations, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/providers/frequently-asked-questions/`, representative answers and structured data, approved Product Status and boundary wording, essential links, question interactions, and demonstration destination without submitting data.

---

## PRO-PG-016 — Request Demonstration

**Route:** `/providers/request-demonstration/`
**Priority:** P0
**Initial status:** Approved
**Audience:** Provider and institutional
**Page type:** Conversion page
**PRD requirements:** PRO-008, UX-010, SEC-002, PRV-003, ANL-003, INT-003

### Primary Purpose

Collect qualified Provider and institutional demonstration requests.

### Primary Visitor Question

> How can I see the ODRISC platform and discuss its relevance to my work?

### Primary CTA

- Request Demonstration

### Required Section Sequence

1. Demonstration purpose
2. Who it is for
3. What may be shown
4. Form
5. Consent and privacy
6. What happens next
7. Alternative contact

### Recommended Form Fields

- Name
- Professional role
- Organization
- Work email
- Country or market
- Organization type
- Area of interest
- Optional brief message
- Consent

Do not request patient information.

### Prohibited Content

- Guaranteed response time unless operationally supported
- Sensitive patient data
- Unavailable demonstration promises
- Automatic pilot acceptance

### SEO Intent

May be indexable for brand and conversion intent.

### Analytics

- Page viewed
- Form started
- Field error
- Form submitted
- Submission failed
- Alternative contact selected

### Acceptance Criteria

- Form routes to an approved owner
- Success and error states work
- Spam protection is present
- No patient data is requested
- Consent language is visible
- Analytics excludes message contents
- Follow-up process is documented

### Test Requirements

- **Requirement IDs:** PRO-008, UX-010, SEC-002, PRV-003, ANL-003, INT-003, SHR-020
- **Page ID:** PRO-PG-016
- **Risk priority:** P0 and release blocking, with critical form-delivery, privacy, consent, spam, security, analytics, operational-ownership, and conversion risk
- **Static validations:** Validate the `/providers/request-demonstration/` route, Page ID, requirement traceability, approved indexation, form-field schema, prohibited-field rules, consent and privacy content, analytics-event registration, error-code mappings, integration ownership, alternative-contact destination, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover form schemas, required and optional fields, professional-role and organization-type values, email normalization, country and market values, length limits, whitespace handling, consent rules, prohibited Patient-data detection where approved, safe error mapping, duplicate-submission prevention, delivery-adapter requests and responses, analytics payload filtering, and follow-up routing.
- **Required Component IDs and component tests:** `CMP-FRM-007` Provider Demo Request Form, `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test labels, descriptions, required indicators, field constraints, consent, accessible errors and error summary, focus movement, loading, success, failure, duplicate submission, spam challenge where used, keyboard behavior, mobile reflow, RTL, and reduced motion.
- **E2E journeys:** Cover the complete demonstration flow through `TST-E2E-003`; open the page, understand demonstration scope, complete the form with synthetic Provider data, correct validation errors, provide consent, submit once, verify staging delivery and success confirmation, test simulated delivery failure and recovery, and use the alternative contact route. Cover the integration boundary through `TST-INT-002`.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari`; verify form-field order, input modes, autofill behavior where approved, virtual-keyboard usability, validation messages, error summary, consent, submit state, success and failure recovery, alternative contact, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks against all `CMP-FRM-007` states and required dependencies and Playwright Axe checks against `/providers/request-demonstration/` in initial, validation-error, loading, success, and simulated-failure states.
- **Manual accessibility review:** Verify keyboard-only completion, visible focus, headings, landmarks, labels, descriptions, required-field communication, error identification, error-summary links, focus movement after failure and success, consent comprehension, status announcements, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent demonstration scope, field labels, descriptions, role and organization values, validation errors, consent, privacy, success, failure, follow-up, and alternative-contact meaning; logical field layout; appropriate email direction; and qualified Arabic, privacy, legal, commercial, and accessibility review.
- **Reduced-motion coverage:** Run `reduced-motion`; validation, loading, error-summary focus, success and failure feedback, spam protection, navigation, and alternative-contact access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, initial, focused-field, validation-error, error-summary, loading, success, delivery-failure, spam-protection, and alternative-contact baselines.
- **Product Status tests:** Verify the demonstration description, displayed platform capabilities, available markets, demonstration format, pilot references, response expectations, and follow-up process reflect approved operational status. Unavailable demonstrations or capabilities must provide an accurate recovery path.
- **Clinical-review requirement:** Required when the demonstration description mentions clinical capabilities, monitoring, maternal or fetal intelligence, validation, methodology, outcomes, risk, alerts, or clinical workflow. The form must never invite Patient-specific clinical questions or clinical data.
- **Form or integration tests:** Cover `CMP-FRM-007` through `TST-INT-002`: valid submission, every required field, invalid work email, unsupported values, boundary lengths, malicious input, consent missing, duplicate submission, spam protection, rate limiting, delivery success, timeout, adapter rejection, unavailable service, safe retry, safe public errors, owned recipient routing, and alternative contact. Use synthetic data only and never call production delivery systems during automated tests.
- **Performance-budget tests:** Test `/providers/request-demonstration/` and all material form states against approved Core Web Vitals, JavaScript, third-party, spam-protection, form-response, font, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify HTTPS and security headers, server-side validation, input normalization, output encoding, CSRF protections where applicable, rate limiting, spam protection, safe redirect handling, request-size limits, secure adapter authentication, secret isolation, safe logging and errors, no Patient or clinical data collection, no analytics capture of field or message contents, and absence of sensitive URL parameters.
- **Staging smoke:** Verify page availability, approved demonstration wording, form validation, consent, spam protection, owned staging delivery, one successful synthetic submission, success state, simulated failure and recovery, analytics event names without field contents, alternative contact, Arabic behavior, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable but strictly non-destructive; verify route availability, form rendering, field labels, consent and privacy content, submit control availability, alternative contact, and public delivery-service health where safely observable. Do not submit the production form or send a demonstration request during routine production smoke.

---

## PRO-PG-017 — Discuss Pilot

**Route:** `/providers/discuss-pilot/`
**Priority:** P1
**Initial status:** Conditional
**Audience:** Provider and institutional
**Page type:** Conversion page
**PRD requirements:** PRO-009, INT-003

### Primary Purpose

Collect controlled enquiries from organizations interested in a pilot.

### Primary Visitor Question

> Is my organization suitable for an ODRISC pilot discussion?

### Primary CTA

- Submit Pilot Enquiry

### Product-Status Dependency

Pilot availability and operational capacity.

### Required Content

- Pilot purpose
- Suitable organization types
- Current market
- Expected involvement
- Selection process
- Data and governance expectations
- What happens next
- Form

### Prohibited Content

- Automatic acceptance
- Free implementation promises
- Proven outcome claims
- Unapproved markets
- Patient data collection through the form

### SEO Intent

May be noindex when pilots are restricted.

### Analytics

- Page viewed
- Form started
- Form submitted
- Form failed
- Demo route selected

### Acceptance Criteria

- Pilot availability is current
- Eligibility wording is accurate
- Form ownership is defined
- Product and validation status remain transparent

### Test Requirements

- **Requirement IDs:** PRO-009, INT-003, SHR-020
- **Page ID:** PRO-PG-017
- **Risk priority:** P1, with high pilot-availability, eligibility, privacy, form-delivery, operational-capacity, market, validation, Product Status, and institutional-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/providers/discuss-pilot/` route, Page ID, requirement traceability, approved indexation or noindex status, pilot-availability and eligibility vocabulary, approved markets, Product Status and validation wording, form-field schema, prohibited-field rules, analytics-event registration, integration ownership, demonstration-route link, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover pilot-availability and operational-capacity rules, organization-type and market eligibility, form schemas, required and optional fields, consent rules, length limits, safe error mapping, duplicate-submission prevention, delivery-adapter requests and responses, CTA availability, analytics payload filtering, and unavailable-pilot recovery.
- **Required Component IDs and component tests:** `CMP-FRM-006` General Contact Form when adapted for pilot enquiries, `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-TRS-001` Product Status Badge, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test labels, required indicators, eligibility and availability messaging, consent, accessible errors and error summary, focus movement, loading, success, failure, duplicate submission, keyboard behavior, mobile reflow, RTL, reduced motion, and unavailable-pilot states.
- **E2E journeys:** When included in release scope, open Discuss Pilot, understand pilot purpose, organization suitability, current market, expected involvement, selection process, data and governance expectations, verify current availability and Product Status, complete the form with synthetic organizational data, recover from validation and simulated delivery failures, and use the demonstration route when a pilot is unavailable or unsuitable.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify eligibility content, form-field order, input modes, validation messages, error summary, consent, success and failure recovery, demonstration alternative, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks against all pilot-form states and required registered dependencies and Playwright Axe checks against `/providers/discuss-pilot/` in available, unavailable, validation-error, loading, success, and simulated-failure states.
- **Manual accessibility review:** Before publication, verify keyboard-only completion, visible focus, headings, landmarks, eligibility and selection-process comprehension, labels, descriptions, required-field communication, error identification, error-summary links, focus movement, consent, status announcements, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent pilot-purpose, eligibility, market, involvement, selection, governance, availability, Product Status, validation, consent, success, failure, and demonstration-route meaning; logical form layout; appropriate email direction; and qualified Arabic, privacy, legal, product, commercial, and operational review.
- **Reduced-motion coverage:** Run `reduced-motion`; eligibility presentation, validation, loading, error-summary focus, success and failure feedback, navigation, and demonstration-route access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, pilot-available, pilot-unavailable, eligibility, initial-form, validation-error, error-summary, loading, success, delivery-failure, and demonstration-alternative baselines before publication.
- **Product Status tests:** Verify pilot availability, operational capacity, eligible organization types, approved markets, implementation scope, Product Status, validation maturity, selection process, pricing or cost expectations, and expected involvement reflect current approved status. The page must not imply automatic acceptance, free implementation, or proven outcomes.
- **Clinical-review requirement:** Required for pilot descriptions involving clinical workflows, monitoring, maternal or fetal intelligence, validation, outcomes, risk, clinical data, professional responsibilities, or Patient participation. Product, operational, privacy, security, legal, and commercial owners must review their respective claims.
- **Form or integration tests:** Cover the pilot-enquiry adaptation of `CMP-FRM-006` through `TST-INT-001` or a separately approved pilot contract: valid submission, required fields, invalid work email, unsupported organization or market, boundary lengths, malicious input, missing consent, duplicate submission, spam protection, rate limiting, delivery success, timeout, adapter rejection, unavailable service, safe retry, safe public errors, and owned recipient routing. Use synthetic organizational data only, never request Patient information, and never call production delivery systems during automated tests.
- **Performance-budget tests:** Before publication, test `/providers/discuss-pilot/` and all material eligibility, availability, and form states against approved Core Web Vitals, JavaScript, third-party, spam-protection, form-response, font, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify HTTPS and security headers, server-side validation, input normalization, output encoding, CSRF protections where applicable, rate limiting, spam protection, safe redirects, request-size limits, secure adapter authentication, secret isolation, safe logging and errors, no Patient or clinical data collection, no analytics capture of field contents, and absence of sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability or approved restricted state, pilot availability and eligibility, Product Status and validation wording, form validation, consent, spam protection, owned staging delivery, one successful synthetic submission, simulated failure and recovery, demonstration alternative, analytics events without field contents, Arabic behavior, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable but strictly non-destructive only when published; verify route availability or approved noindex/restricted behavior, current pilot and eligibility wording, Product Status, form rendering, consent, submit-control availability, and demonstration alternative. Do not submit a production pilot enquiry or enter organizational data during routine smoke testing.

---

# 13. Resource Pages

## RES-PG-001 — Resources Homepage

**Route:** `/resources/`
**Priority:** P1
**Initial status:** Approved in principle
**Audience:** Shared
**Page type:** Resource hub
**PRD requirements:** CON-004, SHR-010

### Primary Purpose

Provide organized access to Patient, Provider, and shared educational content.

### Primary Visitor Question

> Which ODRISC information or educational resource is relevant to me?

### Primary CTA

- Choose Patient Resources
- Choose Provider Resources

### Required Section Sequence

1. Resource purpose
2. Audience selection
3. Featured resources
4. Topic navigation
5. Latest reviewed content
6. Glossary
7. Relevant product pathways

### Required Metadata Display

- Audience
- Content type
- Author
- Reviewer where relevant
- Publication or review date
- Market applicability

### Prohibited Content

- Unreviewed clinical articles
- Draft resources
- Mixed Patient and Provider content without labels
- An unmanaged chronological blog feed

### SEO Intent

ODRISC resources and topic discovery.

### Analytics

- Hub viewed
- Audience filter selected
- Topic selected
- Resource selected
- Search used

### Acceptance Criteria

- Patient and Provider resources are clearly distinguished
- Every clinical resource has review metadata
- Filtering is accessible
- Resource taxonomy is controlled

### Test Requirements

- **Requirement IDs:** CON-004, SHR-010, SHR-020
- **Page ID:** RES-PG-001
- **Risk priority:** P1, with high audience-separation, clinical-content governance, review-metadata, taxonomy, search, accessibility, and SEO risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/resources/` route, Page ID, requirement traceability, publication and indexation status, resource metadata schemas, controlled audience, content-type and topic values, author and reviewer requirements, publication and review dates, market applicability, canonical resource links, analytics-event registration, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover resource-index generation, Patient and Provider audience filtering, topic and content-type filtering, controlled taxonomy mappings, featured and latest-reviewed selection, metadata validation, search normalization where implemented, empty and unavailable states, canonical-link generation, consent-aware analytics, and duplicate-resource detection.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible audience selection, filters, topics, resource links, metadata relationships, search where implemented, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, no-result, unavailable, and error states. Any reusable resource-card, filter, or search component must receive an approved Component ID before implementation.
- **E2E journeys:** When included in release scope, open the Resources Homepage, distinguish Patient from Provider pathways, select each audience, filter by an approved topic, open a reviewed resource, verify its metadata, return to the hub, access the Glossary, use search where available, and recover from empty or no-result states.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify audience choices, filters, topic navigation, resource-card order, metadata display, search controls, CTA visibility, touch targets, no-result recovery, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/resources/`, including default, filtered, empty, and no-result states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, audience-selection semantics, filter labels and states, resource-link purpose, metadata relationships, search controls, result announcements, empty-state recovery, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent audience, topic, content-type, author, reviewer, publication, review, market, search, no-result, glossary, and product-pathway meaning; logical filter and result layout; accurate metadata; and qualified Arabic, content, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; audience selection, filtering, search-result updates, resource-list changes, progressive disclosure, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, shared, Patient-filtered, Provider-filtered, topic-filtered, search, resource-card, metadata, empty, no-result, loading, and error-state baselines before publication.
- **Product Status tests:** Verify resources and product pathways reflect approved capability, audience, market, publication, and availability status. Draft, archived, withdrawn, unavailable, planned, or unvalidated material must not appear as current reviewed guidance or active functionality.
- **Clinical-review requirement:** Mandatory for every clinical, maternal, fetal, pregnancy, risk, outcome, monitoring, nutrition, physical-activity, methodology, or validation resource. Author, reviewer, review date, references, market applicability, and review status must be traceable.
- **Form or integration tests:** No submission form is embedded on this page. Test resource-index generation, audience and topic filters, search where implemented, Glossary and product-pathway links, unavailable-resource recovery, analytics consent, and safe synthetic metadata fixtures. Tests must not call live publishing, Patient, Provider, search, or clinical systems.
- **Performance-budget tests:** Before publication, test `/resources/` and its resource lists, filters, search, images, metadata, and result updates against approved Core Web Vitals, JavaScript, image, font, third-party, search, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe resource and external links, approved download types, sanitized search and filter parameters, escaped resource metadata, no Patient or production operational data, no draft or restricted resource exposure, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, Patient and Provider separation, approved taxonomy, audience and topic filters, reviewed-resource metadata, search and no-result recovery where applicable, Glossary and product pathways, Arabic behavior, analytics consent, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/resources/`, Patient and Provider pathways, approved resource metadata, representative filtering, reviewed-resource and Glossary links, essential navigation, and no-result recovery without submitting data.

---

## RES-PG-002 — Patient Resources

**Route:** `/resources/patients/`
**Priority:** P1
**Audience:** Patient
**Page type:** Resource hub
**PRD requirements:** CON-004, SHR-010

### Primary Purpose

Organize Patient-appropriate education by pregnancy stage and topic.

### Required Categories

- Preparing for pregnancy
- Risk awareness
- Weight
- Nutrition
- Physical activity
- Understanding progress
- Appointment preparation

### Primary CTA

- Explore Patient Support

### Acceptance Criteria

- Content uses Patient language
- Clinical resources show review dates
- Resources link to canonical Patient pages
- No Provider-only content is surfaced without explanation

### Test Requirements

- **Requirement IDs:** CON-004, SHR-010, SHR-020
- **Page ID:** RES-PG-002
- **Risk priority:** P1, with high Patient-comprehension, clinical-content governance, review-metadata, audience-separation, canonical-link, accessibility, and SEO risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/resources/patients/` route, Page ID, requirement traceability, publication and indexation status, Patient-audience classification, controlled category values, resource metadata schemas, clinical-review dates, canonical Patient-page links, Provider-content labelling, analytics-event registration where applicable, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Patient-resource index generation, pregnancy-stage and topic filtering, category mappings, Patient-language and audience metadata, review-date validation, canonical Patient-link generation, Provider-content exclusion or explanation rules, empty and unavailable states, duplicate-resource detection, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible category navigation, resource links, review metadata, audience labels, Patient-support CTA, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, no-result, unavailable, and error states. Any reusable resource-card or filter component must receive an approved Component ID before implementation.
- **E2E journeys:** When included in release scope, open Patient Resources, navigate preparing-for-pregnancy, risk-awareness, weight, nutrition, physical-activity, progress, and appointment-preparation categories, open a reviewed resource, verify its review metadata, follow a canonical Patient-page link, use the Patient-support CTA, and recover from empty or unavailable categories.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify category navigation, resource-card order, review metadata, Patient-language content, CTA visibility, touch targets, empty-state recovery, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/resources/patients/`, including default, category-filtered, empty, and unavailable states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, category-control names and states, resource-link purpose, review-metadata relationships, Patient-language comprehension, Provider-content explanations where applicable, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent pregnancy-stage, risk, weight, nutrition, physical-activity, progress, appointment-preparation, review-metadata, audience-label, Patient-support, and unavailable-state meaning; logical layout; accurate clinical terminology; and qualified Arabic, Patient-content, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; category navigation, resource-list changes, progressive disclosure, navigation, and Patient-support CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, category, resource-card, review-metadata, Provider-content explanation, empty, unavailable, loading, and error-state baselines before publication.
- **Product Status tests:** Verify Patient resources and linked Patient pathways reflect approved capability, audience, market, publication, clinical-review, and availability status. Draft, archived, withdrawn, future, unavailable, or Provider-only content must not appear as currently available Patient guidance without an approved explanation.
- **Clinical-review requirement:** Mandatory for pregnancy preparation, risk awareness, weight, nutrition, physical activity, maternal or fetal progress, appointment preparation, symptoms, outcomes, monitoring, or other clinical guidance. Author, reviewer, review date, references, market applicability, and review status must be traceable.
- **Form or integration tests:** No submission form is embedded on this page. Test resource-index generation, category filters where implemented, canonical Patient-page and Patient-support links, unavailable-resource recovery, analytics consent where applicable, and safe synthetic metadata fixtures. Tests must not call live publishing, Patient, Provider, search, or clinical systems.
- **Performance-budget tests:** Before publication, test `/resources/patients/` and its resource lists, categories, images, metadata, and interactions against approved Core Web Vitals, JavaScript, image, font, third-party, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe resource and external links, approved download types, escaped resource metadata, sanitized category parameters, no Patient or production operational data, no draft or restricted resource exposure, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, approved Patient categories, Patient-language content, clinical-review metadata, canonical Patient links, exclusion or explanation of Provider-only content, Patient-support CTA, Arabic behavior, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/resources/patients/`, approved categories, representative reviewed resources, review dates, canonical Patient links, essential navigation, and Patient-support CTA without submitting data.

---

## RES-PG-003 — Provider Resources

**Route:** `/resources/providers/`
**Priority:** P1
**Audience:** Provider
**Page type:** Resource hub
**PRD requirements:** CON-004, SHR-010

### Required Categories

- Monitoring
- Maternal intelligence
- Fetal growth
- Methodology
- Validation
- Workflow
- Implementation
- Research

### Primary CTA

- Explore Clinical Platform

### Acceptance Criteria

- Professional content shows authorship and references
- Content is distinct from Patient resources
- Product material and independent evidence are clearly distinguished

### Test Requirements

- **Requirement IDs:** CON-004, SHR-010, SHR-020
- **Page ID:** RES-PG-003
- **Risk priority:** P1, with high professional-content, evidence-classification, authorship, reference, clinical-review, audience-separation, accessibility, and SEO risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/resources/providers/` route, Page ID, requirement traceability, publication and indexation status, Provider-audience classification, controlled category values, resource metadata schemas, authorship, references and review requirements, product-material and independent-evidence classification, canonical Provider links, analytics-event registration where applicable, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover Provider-resource index generation, category and content-type filtering, Provider-audience metadata, authorship and reference validation, product-material versus independent-evidence classification, review-state handling, canonical Provider-link generation, Patient-resource exclusion rules, empty and unavailable states, duplicate-resource detection, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-TRS-001` Product Status Badge where product material is displayed, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible category navigation, resource links, authorship, references, evidence-type labels, Product Status, Clinical Platform CTA, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, no-result, unavailable, and error states. Any reusable resource-card or filter component must receive an approved Component ID before implementation.
- **E2E journeys:** When included in release scope, open Provider Resources, navigate Monitoring, Maternal Intelligence, Fetal Growth, Methodology, Validation, Workflow, Implementation, and Research categories, distinguish product material from independent evidence, open a reviewed professional resource, verify authorship and references, follow a canonical Provider link, and continue to the Clinical Platform.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify category navigation, resource-card order, authorship, references, evidence-type labels, Product Status, Clinical Platform CTA, touch targets, empty-state recovery, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/resources/providers/`, including default, category-filtered, empty, and unavailable states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, category-control names and states, resource-link purpose, authorship and reference relationships, evidence-type and Product Status comprehension, technical terminology, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent monitoring, maternal-intelligence, fetal-growth, methodology, validation, workflow, implementation, research, authorship, reference, evidence-type, Product Status, and Clinical Platform meaning; logical layout; accurate technical terminology and citations; and qualified Arabic, clinical, evidence, and content review.
- **Reduced-motion coverage:** Run `reduced-motion`; category navigation, resource-list changes, progressive disclosure, navigation, and Clinical Platform CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, category, resource-card, authorship, reference, product-material, independent-evidence, Product Status, empty, unavailable, loading, and error-state baselines before publication.
- **Product Status tests:** Verify Provider resources, product material, linked capabilities, validation claims, integrations, implementation content, and Clinical Platform pathways reflect approved publication and capability status. Planned or unvalidated product material must not appear as active functionality or independent clinical evidence.
- **Clinical-review requirement:** Mandatory for monitoring, maternal intelligence, fetal growth, methodology, validation, workflow, implementation, research, outcome, risk, accuracy, or clinical evidence content. Author, clinical reviewer, review date, references, evidence classification, market applicability, and review status must be traceable.
- **Form or integration tests:** No submission form is embedded on this page. Test resource-index generation, category filters where implemented, evidence-type classification, canonical Provider and Clinical Platform links, unavailable-resource recovery, analytics consent where applicable, and safe synthetic metadata fixtures. Tests must not call live publishing, Patient, Provider, research, integration, or clinical systems.
- **Performance-budget tests:** Before publication, test `/resources/providers/` and its resource lists, categories, references, images, metadata, and interactions against approved Core Web Vitals, JavaScript, image, font, third-party, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe resource, reference and external links, approved download types, escaped resource metadata, sanitized category parameters, no Patient or production operational data, no draft, restricted, proprietary, or unpublished evidence exposure, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, approved Provider categories, audience separation, professional authorship and references, product-material and independent-evidence labels, Product Status, canonical Provider links, Clinical Platform CTA, Arabic behavior, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/resources/providers/`, approved categories, representative reviewed professional resources, authorship, references, evidence-type labels, essential navigation, and Clinical Platform CTA without submitting data.

---

## RES-PG-004 — Public Glossary

**Route:** `/resources/glossary/`
**Priority:** P1
**Audience:** Shared
**Page type:** Glossary
**PRD requirements:** CON-004, SHR-010

### Primary Purpose

Explain approved maternal, fetal, product, and monitoring terminology to public visitors.

### Requirements

- Definitions must derive from the internal glossary
- Patient and Provider depth may be layered
- Alphabetical navigation must be accessible
- Terms must link to relevant canonical pages
- Definitions must not provide diagnosis

### SEO Intent

Approved public terminology and definitions.

### Acceptance Criteria

- Definitions are current
- Internal-only terms are excluded
- Public wording is understandable
- Search and alphabetical navigation work

### Test Requirements

- **Requirement IDs:** CON-004, SHR-010, SHR-020
- **Page ID:** RES-PG-004
- **Risk priority:** P1, with high terminology-accuracy, clinical-boundary, internal-information exposure, search, accessibility, localization, and SEO risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/resources/glossary/` route, Page ID, requirement traceability, publication and indexation status, public-term schemas, unique term identifiers and slugs, alphabetical grouping, internal-glossary source mapping, canonical-page links, Patient and Provider depth labels, internal-only exclusions, analytics-event registration where applicable, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover public-glossary generation, term normalization, alphabetical grouping, search normalization, Patient and Provider definition layering, canonical-link generation, duplicate-term detection, internal-only term exclusion, missing-definition handling, no-result recovery, locale-aware sorting, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible alphabetical navigation, search controls, term links, layered definitions, keyboard behavior, focus, result announcements, mobile reflow, RTL, reduced motion, loading, empty, no-result, direct-linked-term, and error states. Any reusable glossary search, alphabet navigation, or term component must receive an approved Component ID before implementation.
- **E2E journeys:** When included in release scope, open the Public Glossary, navigate by alphabet, search for an approved maternal, fetal, product, or monitoring term, inspect Patient and Provider definition depth where available, follow a canonical-page link, open a direct term URL or fragment where supported, and recover from an unknown term or no-result search.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify alphabetical controls, search input and results, term-list order, layered definitions, direct links, touch targets, no-result recovery, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/resources/glossary/`, including default, search-result, no-result, layered-definition, and direct-linked-term states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, alphabetical-control names and current state, search labels and result announcements, term-definition relationships, layered-content semantics, link purpose, direct-link focus behavior, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; use an approved Arabic navigation and sorting model rather than assuming the English alphabet; verify equivalent term, definition, audience-depth, search, no-result, and canonical-link meaning; preserve abbreviations and clinical terminology accurately; and obtain qualified Arabic, content, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; alphabetical navigation, search-result updates, direct-term focus, layered-definition disclosure, navigation, and canonical-link access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, alphabetical navigation, search result, no-result, layered Patient and Provider definition, direct-linked term, long definition, loading, and error-state baselines before publication.
- **Product Status tests:** Verify definitions describing ODRISC capabilities, monitoring, intelligence, integrations, validation, markets, and clinical functions reflect approved terminology and current Product Status. Planned or unavailable capabilities must not be defined as active functionality.
- **Clinical-review requirement:** Mandatory for maternal, fetal, pregnancy, risk, diagnosis, monitoring, measurement, nutrition, physical-activity, gestational-age, growth, Doppler, outcome, validation, and clinical-decision terminology. Definitions must identify or trace to their approved reviewer and review date.
- **Form or integration tests:** No submission form is embedded on this page. Test glossary generation from the approved internal source, search, alphabetical navigation, direct-term links, canonical-page links, unknown-term and no-result recovery, analytics consent where applicable, and safe synthetic metadata fixtures. Tests must not expose the full internal glossary or call live Patient, Provider, search, or clinical systems.
- **Performance-budget tests:** Before publication, test `/resources/glossary/` and its term index, alphabetical navigation, search, result updates, and long definitions against approved Core Web Vitals, JavaScript, content, font, search, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, escaped terms and definitions, sanitized search and fragment parameters, safe canonical and external links, no internal-only terms, confidential terminology, Patient data, or production operational data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, approved terminology, alphabetical navigation, representative search and no-result behavior, Patient and Provider depth where applicable, internal-only exclusions, canonical links, Arabic behavior where released, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/resources/glossary/`, representative approved terms and definitions, alphabetical navigation, search, no-result recovery, direct-term and canonical links, and internal-only exclusion without submitting data.

---

## RES-PG-005 — Topic Hub Template

**Route pattern:** `/resources/topics/[topic-slug]/`
**Priority:** P2 unless justified
**Audience:** Patient, Provider, or Shared
**Page type:** Topic hub
**PRD requirements:** CON-004, SHR-010

### Publication Conditions

A topic hub may be created only when:

- At least several unique resources exist
- The topic has stable search intent
- The page provides unique value
- Audience applicability is defined
- A content owner is assigned
- Clinical review is available

### Required Structure

1. Topic definition
2. Why it matters
3. Patient or Provider relevance
4. Featured resources
5. Related ODRISC pages
6. References or review information

### Prohibited Content

- Thin keyword pages
- Duplicated capability content
- Unreviewed medical summaries

### Test Requirements

- **Requirement IDs:** CON-004, SHR-010, SHR-020
- **Page ID:** RES-PG-005
- **Risk priority:** P2 unless separately justified, with publication-blocking content-quality, clinical-review, audience-classification, duplicate-content, route-generation, accessibility, and SEO requirements for every published topic instance
- **Static validations:** Validate every `/resources/topics/[topic-slug]/` instance, template Page ID, unique and normalized topic slug, requirement traceability, publication and indexation status, minimum-resource condition, stable search intent, unique-value evidence, audience applicability, content ownership, clinical-review availability, metadata schemas, canonical URLs, internal links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover topic-page generation, slug normalization and collision detection, topic-to-resource mappings, Patient, Provider and Shared audience classification, publication-condition enforcement, minimum-resource rules, featured-resource selection, canonical-link generation, duplicate-content detection, empty and unpublished states, locale-aware metadata, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-TRS-001` Product Status Badge where product capabilities are referenced, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible topic headings, audience labels, featured-resource links, review information, Product Status, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, empty, unpublished, not-found, and error states. Any reusable topic or resource-card component must receive an approved Component ID before implementation.
- **E2E journeys:** For each published topic template variant, open a representative topic URL, understand the topic and its audience relevance, inspect featured reviewed resources, follow a related ODRISC page, verify references or review information, return to the relevant resource hub, and confirm that invalid, unpublished, and unknown topic slugs produce the approved not-found or unavailable behavior.
- **Browser projects:** Run `chromium-desktop` for every published or changed topic variant. When a topic enters release scope, also run the applicable `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion` projects according to its priority, audience, locale, and content.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` for published representative Patient, Provider, and Shared topic variants; verify topic narrative order, audience labels, featured resources, review information, related-page links, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against representative published Patient, Provider, and Shared topic instances, including normal, empty-prevention, unavailable, and not-found behavior.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, topic and audience comprehension, resource-link purpose, review and reference relationships, Product Status meaning where applicable, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination for representative variants.
- **Arabic and RTL coverage:** Before publishing an Arabic topic, run `arabic-rtl`; verify equivalent topic definition, importance, audience relevance, featured-resource, related-page, reference, review, Product Status, and unavailable-state meaning; logical layout; accurate terminology and metadata; and qualified Arabic, content, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion` for topic instances using motion; topic presentation, featured-resource transitions, progressive disclosure, navigation, and related-page access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled representative Patient, Provider, Shared, desktop, mobile, Arabic RTL where applicable, reduced-motion, long-title, featured-resource, review-information, unavailable, and not-found template baselines before publication.
- **Product Status tests:** Verify topic content, featured resources, and related ODRISC pages reflect approved capability, audience, market, publication, validation, and availability status. Planned or unavailable capabilities must not be represented as active through topic summaries or links.
- **Clinical-review requirement:** Mandatory whenever a topic contains maternal, fetal, pregnancy, risk, outcome, monitoring, nutrition, physical-activity, methodology, validation, or other clinical content. The content owner, clinical reviewer, review date, references, market applicability, and next-review status must be traceable.
- **Form or integration tests:** No submission form is defined by this template. Test topic-index generation, publication-condition enforcement, slug resolution, resource mappings, related-page links, invalid and unpublished topic behavior, analytics consent where applicable, and safe synthetic topic metadata. Tests must not call live publishing, Patient, Provider, search, or clinical systems.
- **Performance-budget tests:** Before publication, test representative topic instances and their resource lists, images, metadata, links, and interactions against approved Core Web Vitals, JavaScript, image, font, content, third-party, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, normalized and sanitized topic slugs, escaped topic and resource metadata, safe internal, external and reference links, approved download types, no draft, restricted, internal-only, Patient, or production operational data exposure, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required for every topic entering a release; verify its canonical route, publication conditions, unique value, audience classification, featured resources, clinical-review metadata, related ODRISC links, Product Status where applicable, invalid and unpublished slug handling, Arabic behavior where released, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive for every published topic; verify its canonical URL, approved title, audience, representative resources, review information, related links, and not-found behavior for one invalid slug without submitting data.

---

## RES-PG-006 — Resource Detail Template

**Route pattern:** `/resources/[resource-slug]/`
**Priority:** P1
**Audience:** Defined per resource
**Page type:** Article, guide, clinical brief, or evidence summary
**PRD requirements:** CON-004, SHR-010

### Required Metadata

- Title
- Summary
- Audience
- Author
- Reviewer
- Publication date
- Last reviewed date
- Market applicability
- References
- Related pages
- Content status

### Required Structure

1. Clear title
2. Summary
3. Audience and review information
4. Main content
5. Key takeaway
6. Relevant limitation or safety note
7. References
8. Related resources
9. Relevant product CTA

### Prohibited Content

- Hidden sponsorship
- Unsupported medical claims
- Missing references for clinical content
- Generic AI-generated content without review

### Acceptance Criteria

- Metadata is complete
- Clinical review is documented
- References are accurate
- CTA is relevant and not intrusive
- Archived content is no longer promoted

### Test Requirements

- **Requirement IDs:** CON-004, SHR-010, SHR-020
- **Page ID:** RES-PG-006
- **Risk priority:** P1, with high metadata, clinical-review, reference-accuracy, sponsorship-disclosure, content-status, Product Status, accessibility, and SEO risk; release blocking for every published resource instance
- **Static validations:** Validate every `/resources/[resource-slug]/` instance, template Page ID, unique and normalized resource slug, requirement traceability, publication and indexation status, required metadata, audience, author, reviewer, publication and review dates, market applicability, references, related pages, content status, sponsorship disclosure where applicable, canonical URL, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover resource-schema validation, slug normalization and collision detection, audience and content-type mappings, publication and review-date rules, author and reviewer metadata, market applicability, reference normalization, related-resource selection, archived and withdrawn states, CTA selection, structured metadata generation, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-TRS-001` Product Status Badge where capabilities are referenced, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible article structure, metadata relationships, references, safety notes, sponsorship disclosure, Product Status, related resources, CTA behavior, keyboard navigation, focus, mobile reflow, RTL, reduced motion, archived, unavailable, not-found, and error states.
- **E2E journeys:** For representative article, guide, clinical-brief, and evidence-summary instances, open the canonical resource URL, verify audience and review metadata, read the summary and safety or limitation note, open an approved reference, follow a related resource and canonical page, use the relevant product CTA, and verify archived, withdrawn, unknown, and invalid slugs use the approved unavailable or not-found behavior.
- **Browser projects:** Run `chromium-desktop` for every published or changed resource variant. For P0-linked or release-critical resources, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`; otherwise run the projects affected by the resource type or change.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` for representative published resource types; verify title and metadata order, long-form reading, tables and figures where used, references, safety notes, related resources, CTA placement, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against representative article, guide, clinical-brief, and evidence-summary instances, including long-content, archived, unavailable, and not-found states.
- **Manual accessibility review:** Before publication of a new template behavior, verify keyboard navigation, visible focus, headings, landmarks, metadata and content relationships, table and figure accessibility, reference-link purpose, abbreviation expansion, safety-note prominence, sponsorship disclosure, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before publishing an Arabic resource, run `arabic-rtl`; verify equivalent title, summary, audience, author, reviewer, dates, market, main content, key takeaway, limitation, safety note, references, sponsorship disclosure, Product Status, and CTA meaning; preserve citations, identifiers, numbers, units, and clinical terminology accurately; and obtain qualified Arabic, content, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion` for resources using motion; figures, progressive disclosure, related-resource transitions, navigation, and CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled representative article, guide, clinical brief, evidence summary, desktop, mobile, Arabic RTL where applicable, reduced-motion, long-title, table, figure, safety-note, sponsorship, Product Status, archived, unavailable, and not-found baselines.
- **Product Status tests:** Verify content, related pages, and product CTAs reflect approved capability, market, validation, publication, and availability status. Archived, withdrawn, planned, unavailable, or unvalidated material must not be promoted as current guidance, evidence, or active functionality.
- **Clinical-review requirement:** Mandatory for every maternal, fetal, pregnancy, risk, outcome, monitoring, nutrition, physical-activity, gestational-age, growth, Doppler, methodology, validation, or other clinical resource. Author, clinical reviewer, review date, references, limitations, market applicability, and next-review status must be traceable.
- **Form or integration tests:** No submission form is defined by this template. Test resource loading, metadata and structured-data generation, slug resolution, reference and related-page links, CTA selection, archived and withdrawn behavior, analytics consent where applicable, and safe synthetic resource fixtures. Tests must not call live publishing, Patient, Provider, research, reference, or clinical systems.
- **Performance-budget tests:** Before publication, test representative resource types and their long-form content, tables, figures, images, references, metadata, and related-resource lists against approved Core Web Vitals, JavaScript, image, font, content, third-party, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, normalized and sanitized resource slugs, escaped content and metadata, safe internal, external and reference links, approved download and embed types, visible sponsorship disclosure, no draft, restricted, internal-only, Patient, or production operational data exposure, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required for every resource entering a release; verify its canonical route, complete metadata, audience, review and market information, references, limitation or safety note, sponsorship disclosure where applicable, related links, Product Status, CTA, archived behavior, Arabic presentation where released, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive for every published resource; verify its canonical URL, title, summary, audience and review metadata, representative references, safety or limitation note, related links, relevant CTA, and approved behavior for one invalid slug without submitting data.

---

# 14. Company Pages

## COM-PG-001 — About ODRISC

**Route:** `/about/`
**Priority:** P0
**Audience:** Shared
**Page type:** Company overview
**PRD requirements:** CON-001

### Primary Purpose

Explain why ODRISC exists, what it is building, and whom it serves.

### Primary Visitor Question

> What is ODRISC, and why does the company exist?

### Primary CTA

- Explore Patient Experience
- Explore Provider Experience

Equal audience pathways.

### Required Section Sequence

1. Company purpose
2. Pregnancy-care problem
3. Product vision
4. Patient and Provider ecosystem
5. Mission
6. Founder motivation
7. Team and professional contributors
8. Market direction
9. Audience pathways

### Prohibited Content

- Founder story used as clinical proof
- Unsupported market leadership claims
- Unconfirmed regulatory status
- Outdated legal entity details

### SEO Intent

- About ODRISC
- ODRISC Technologies
- Maternal and fetal intelligence company

### Acceptance Criteria

- Company and product identity are coherent
- Patient and Provider audiences are equally represented
- Founder story remains proportionate
- Team and entity information are current

### Test Requirements

- **Requirement IDs:** CON-001, SHR-020
- **Page ID:** COM-PG-001
- **Risk priority:** P0 and release blocking, with high company-identity, legal-entity, founder-story, Product Status, clinical-claim, audience-balance, and institutional-trust risk
- **Static validations:** Validate the `/about/` route, Page ID, requirement traceability, indexation, approved company and product names, legal-entity metadata, mission and product-vision references, Patient and Provider audience parity, team and contributor records, market-direction wording, Product Status vocabulary, canonical audience links, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover company-profile and legal-entity schemas, team and contributor metadata, Patient and Provider pathway mappings, market and Product Status presentation, founder-story content selection, current-versus-planned capability classification, canonical-link generation, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-TRS-001` Product Status Badge where capabilities are referenced, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test equal Patient and Provider pathway semantics, company information, team and contributor presentation, Product Status variants, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, unavailable-image, and error states.
- **E2E journeys:** Open About ODRISC, understand the company purpose, pregnancy-care problem, product vision and mission, distinguish Patient from Provider experiences, review founder motivation without treating it as evidence, inspect current team and entity information, and follow both equal audience pathways.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari`; verify company-story order, equal audience pathways, team and contributor content, Product Status, CTA visibility, image alternatives, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for the required registered components and Playwright Axe checks against `/about/`, including representative team, image, Product Status, and audience-pathway states.
- **Manual accessibility review:** Verify keyboard navigation, visible focus, headings, landmarks, company and product identity comprehension, equal audience-pathway semantics, founder-story context, team and contributor relationships, image alternatives, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent company-purpose, product-vision, Patient and Provider, mission, founder-motivation, team, market-direction, Product Status, and audience-pathway meaning; logical layout; accurate company, legal, professional, and market terminology; and qualified Arabic, product, legal, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; company-story transitions, images, progressive disclosure, team presentation, navigation, and audience-pathway access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, company-purpose, Patient and Provider ecosystem, founder-story, team, contributor, Product Status, unavailable-image, and audience-pathway baselines.
- **Product Status tests:** Verify every product, platform, market, validation, regulatory, availability, and expansion statement reflects approved current, planned, prototype, pilot, or unavailable status. Founder motivation, team experience, or company ambition must not be presented as clinical proof.
- **Clinical-review requirement:** Required for the pregnancy-care problem, maternal or fetal intelligence, clinical workflow, risk, outcome, validation, healthcare-professional, and clinical-impact statements. Founder motivation must remain clearly personal context and not clinical evidence.
- **Form or integration tests:** No submission form is embedded on this page. Test Patient and Provider pathway links, team and contributor data loading, legal-entity and market metadata, unavailable-image handling, analytics consent where applicable, and safe synthetic fixtures. Tests must not call live Patient, Provider, company-directory, or clinical systems.
- **Performance-budget tests:** Test `/about/` and its images, team content, audience pathways, and motion against approved Core Web Vitals, JavaScript, image, font, third-party, content, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe internal and external links, approved image sources, escaped company and team metadata, no personal contact details beyond approved public information, no Patient or production operational data, no restricted company or clinical information, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Verify page availability, approved company and product identity, legal-entity information, Patient and Provider parity, founder-story context, current team and contributor content, Product Status, both audience pathways, Arabic behavior, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive; verify `/about/`, approved company, product, legal-entity, founder, team and market information, equal Patient and Provider pathways, essential navigation, and public images without submitting data.

---

## COM-PG-002 — Our Story

**Route:** `/about/our-story/`
**Priority:** P1
**Audience:** Shared
**Page type:** Founder and mission story
**PRD requirements:** CON-002

### Primary Purpose

Present the personal motivation behind ODRISC and connect it to the product mission.

### Primary Visitor Question

> What personal experience led to ODRISC?

### Required Content

- Mother's gestational diabetes
- Founder born macrosomic
- Later maternal type 2 diabetes
- Founder recognition of the longer pregnancy-health story
- Transition from personal experience to product mission
- Clear statement that one story is not clinical evidence

### Prohibited Content

- Emotional manipulation
- Claim that ODRISC would have prevented the outcome
- Generalization to every pregnancy
- Founder story replacing scientific justification

### Primary CTA

- Understand the ODRISC Vision

### Acceptance Criteria

- Personal facts are approved
- Tone is respectful
- The story supports rather than dominates the product narrative
- Clinical claims remain evidence-based elsewhere

### Test Requirements

- **Requirement IDs:** CON-002, SHR-020
- **Page ID:** COM-PG-002
- **Risk priority:** P1, with high personal-fact accuracy, privacy, consent, clinical-boundary, emotional-tone, accessibility, and company-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/about/our-story/` route, Page ID, requirement traceability, publication and indexation status, approved personal-fact records, consent and publication approval, company and product naming, founder-story and clinical-evidence separation, Product Status vocabulary where applicable, canonical vision link, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover approved story-content selection, personal-fact metadata, publication-consent status, chronology ordering, founder-story and clinical-evidence boundary markers, canonical vision-link generation, unavailable-image handling, locale-specific content selection, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible narrative structure, chronology, quotation and image semantics where used, personal-story disclaimer, Vision CTA, keyboard behavior, focus, mobile reflow, RTL, reduced motion, unavailable-image, and error states.
- **E2E journeys:** When included in release scope, open Our Story, understand the approved personal chronology, distinguish personal experience from clinical evidence, verify the transition to the ODRISC mission, confirm that no prevention or universal-outcome claim appears, and follow the ODRISC Vision CTA.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify narrative chronology, personal-story disclaimer, images and captions, CTA visibility, touch targets, long-content reading, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/about/our-story/`, including representative image, quotation, disclaimer, and CTA states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, chronology comprehension, quotation attribution, image alternatives, personal-story and clinical-evidence distinction, respectful language, link purpose, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent personal-history, gestational-diabetes, macrosomia, later type 2 diabetes, pregnancy-health-story, mission, disclaimer, and CTA meaning; preserve respectful medical and family terminology; and obtain qualified Arabic, founder, content, privacy, and clinical review.
- **Reduced-motion coverage:** Run `reduced-motion`; narrative transitions, chronology, images, progressive disclosure, navigation, and Vision CTA access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, chronology, quotation, personal-image, unavailable-image, disclaimer, mission-transition, and Vision CTA baselines before publication.
- **Product Status tests:** Verify any statement about ODRISC’s current product, validation, clinical capabilities, markets, or future mission reflects approved Product Status. The founder story must not imply that ODRISC is proven to prevent gestational diabetes, macrosomia, type 2 diabetes, or any other outcome.
- **Clinical-review requirement:** Mandatory for gestational diabetes, macrosomia, maternal type 2 diabetes, pregnancy-health, prevention, risk, outcome, and clinical-evidence wording. Personal facts require explicit founder and affected-person approval where applicable and must remain distinct from scientific evidence.
- **Form or integration tests:** No submission form or live integration is present. Test approved story-content loading, chronology, personal-fact publication status, Vision CTA, unavailable-image handling, analytics consent where applicable, and safe synthetic presentation fixtures. Tests must not retrieve private family, Patient, health-record, or clinical-system data.
- **Performance-budget tests:** Before publication, test `/about/our-story/` and its long-form content, images, typography, CTA, and motion against approved Core Web Vitals, JavaScript, image, font, content, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe internal and external links, approved image sources, escaped story metadata, publication of approved personal information only, no private contact, medical-record, Patient, or production operational data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, approved personal facts and chronology, respectful tone, explicit personal-story and clinical-evidence separation, mission transition, public images, Vision CTA, Arabic behavior where released, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/about/our-story/`, approved personal facts, clinical-evidence disclaimer, mission wording, public images, essential navigation, and Vision CTA without submitting data.

---

## COM-PG-003 — Team

**Route:** `/about/team/`
**Priority:** P1
**Audience:** Shared
**Page type:** Team page
**PRD requirements:** CON-002

### Required Content

For each listed member:

- Approved name
- Current role
- Employment or contribution status
- Relevant qualification
- Short approved biography
- Optional professional profile link

### Prohibited Content

- Unconfirmed roles
- Former members as current
- Inflated credentials
- Adviser status without agreement
- Personal contact details without consent

### Acceptance Criteria

- Team data is current
- Role terminology is consistent
- Professional qualifications are accurate
- Update ownership is defined

### Test Requirements

- **Requirement IDs:** CON-002, SHR-020
- **Page ID:** COM-PG-003
- **Risk priority:** P1, with high identity, role, qualification, employment-status, consent, privacy, professional-link, and company-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/about/team/` route, Page ID, requirement traceability, publication and indexation status, unique team-member identifiers, approved names, current roles, employment or contribution statuses, qualifications, biographies, professional-profile URLs, image metadata, consent and publication approval, update ownership, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover team-member schema validation, active and former status handling, role-vocabulary consistency, display ordering, qualification and biography metadata, optional profile-link validation, consent and publication states, missing or unavailable images, archived-member exclusion, locale-specific content selection, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible team-member presentation, role and qualification relationships, biographies, image alternatives, optional professional links, keyboard behavior, focus, mobile reflow, RTL, reduced motion, missing-image, unavailable-profile, empty, and error states. Any reusable team-card component must receive an approved Component ID before implementation.
- **E2E journeys:** When included in release scope, open Team, review representative team members, verify approved names, roles, statuses, qualifications and biographies, open an approved professional profile safely, confirm former or unapproved members are absent, and navigate back to the About experience.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify team-card order, names, roles, qualifications, biographies, images, professional links, touch targets, long-text handling, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/about/team/`, including representative complete, missing-image, unavailable-profile, and long-biography states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, team-member grouping, name, role and qualification relationships, image alternatives, biography reading order, external-profile link purpose, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify approved transliteration or translation of names, equivalent role, status, qualification, biography, and professional-link meaning; logical card layout; accurate professional terminology; and qualified Arabic, individual, HR or company, and relevant professional review.
- **Reduced-motion coverage:** Run `reduced-motion`; team-card presentation, biography disclosure, image loading, navigation, and professional-link access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, complete-member, long-biography, missing-image, unavailable-profile, multi-role, and material error-state baselines before publication.
- **Product Status tests:** Verify biographies and role descriptions do not overstate ODRISC capabilities, validation, partnerships, clinical status, regulatory status, or individual involvement. Employment, contributor, adviser, former-member, and availability statuses must match the approved team register.
- **Clinical-review requirement:** Required for biographies or qualifications that describe clinical roles, specialties, research, Patient care, clinical validation, or professional contributions. Professional titles, registrations, credentials, and scope statements must be verified by the designated owner.
- **Form or integration tests:** No submission form is embedded on this page. Test team-data loading, active-member filtering, approved ordering, optional profile and image handling, About navigation, analytics consent where applicable, and safe synthetic fixtures. Tests must not call live HR, professional-register, social-network, Patient, or clinical systems.
- **Performance-budget tests:** Before publication, test `/about/team/` and its member list, portraits, biographies, professional links, typography, and interactions against approved Core Web Vitals, JavaScript, image, font, content, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe professional-profile links, approved image sources, escaped team metadata, publication of approved public information only, no personal contact details, private employment data, Patient data, or production operational data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, current team membership, approved names, roles, statuses, qualifications and biographies, image and profile links, removal of former or unapproved entries, Arabic behavior where released, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/about/team/`, representative current members, approved roles and qualifications, public images, professional links, essential navigation, and exclusion of former or unapproved entries without submitting data.

---

## COM-PG-004 — Clinical and Professional Contributors

**Route:** `/about/clinical-and-professional-contributors/`
**Priority:** P1
**Audience:** Shared and Provider
**Page type:** Trust page
**PRD requirements:** CON-003

### Primary Purpose

Present formally confirmed clinical advisers, panel members, reviewers, and professional contributors.

### Required Content

- Contributor role
- Nature of contribution
- Current status
- Relevant qualification
- Disclosure where required

### Prohibited Content

- Informal interest described as advisory participation
- Panel membership described as product validation
- Institutional affiliation used without approval

### Acceptance Criteria

- Every listed contributor is confirmed
- Contribution type is precise
- Logos and affiliations have permission
- Clinical input is not equated with validation

### Test Requirements

- **Requirement IDs:** CON-003, SHR-020
- **Page ID:** COM-PG-004
- **Risk priority:** P1, with high contributor-confirmation, qualification, affiliation, permission, disclosure, clinical-validation, privacy, and institutional-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/about/clinical-and-professional-contributors/` route, Page ID, requirement traceability, publication and indexation status, unique contributor identifiers, approved names, contributor roles and types, current statuses, qualifications, required disclosures, affiliation and logo permissions, publication consent, review dates, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover contributor-schema validation, confirmed and unconfirmed status handling, contribution-type vocabulary, active and former status filtering, qualification metadata, disclosure requirements, affiliation and logo permission states, display ordering, unavailable images, optional professional links, locale-specific content, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible contributor presentation, role and contribution relationships, qualifications, disclosures, affiliations, logos and image alternatives, professional links, keyboard behavior, focus, mobile reflow, RTL, reduced motion, missing-image, unavailable-affiliation, empty, and error states. Any reusable contributor-card component must receive an approved Component ID before implementation.
- **E2E journeys:** When included in release scope, open Clinical and Professional Contributors, review representative confirmed contributors, verify contribution type, current status, qualification and required disclosure, inspect an approved affiliation or professional link, and confirm that informal, withdrawn, unconfirmed, or unapproved contributors and affiliations are absent.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify contributor-card order, names, roles, contribution types, qualifications, disclosures, affiliations, logos, professional links, touch targets, long-text handling, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/about/clinical-and-professional-contributors/`, including complete, disclosure, missing-image, unavailable-affiliation, and long-biography states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, contributor grouping, name, role, contribution, qualification and disclosure relationships, logo and image alternatives, affiliation and professional-link purpose, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify approved transliteration or translation of names, equivalent contributor-role, contribution-type, status, qualification, disclosure, affiliation, and professional-link meaning; logical layout; accurate clinical and professional terminology; and qualified Arabic, contributor, legal, clinical, and company review.
- **Reduced-motion coverage:** Run `reduced-motion`; contributor-card presentation, disclosure expansion, logo and image loading, navigation, and professional-link access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, contributor, adviser, panel-member, reviewer, disclosure, affiliation, missing-image, unavailable-affiliation, and material error-state baselines before publication.
- **Product Status tests:** Verify contributor descriptions do not overstate ODRISC capabilities, validation, adoption, partnerships, regulatory status, or contributor involvement. Informal interest, advice, panel participation, review, testing, and clinical validation must remain distinct.
- **Clinical-review requirement:** Mandatory for contributor roles, clinical qualifications, specialties, clinical-review activity, Patient-care experience, validation involvement, evidence statements, and professional-scope descriptions. Relevant credentials and contribution descriptions must be verified by the designated clinical or professional owner.
- **Form or integration tests:** No submission form is embedded on this page. Test contributor-data loading, confirmation and active-status filtering, disclosure and permission states, affiliation and professional links, unavailable-image handling, analytics consent where applicable, and safe synthetic fixtures. Tests must not call live HR, credential, professional-network, institution, Patient, or clinical systems.
- **Performance-budget tests:** Before publication, test `/about/clinical-and-professional-contributors/` and its contributor list, portraits, logos, disclosures, biographies, links, and interactions against approved Core Web Vitals, JavaScript, image, font, content, third-party, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe professional and institutional links, approved logo and image sources, escaped contributor metadata, publication of approved public information only, no personal contact details, private agreements, Patient data, or production operational data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, confirmed contributor records, precise contribution types, current statuses, qualifications, disclosures, approved affiliations and logos, removal of unconfirmed or withdrawn entries, Arabic behavior where released, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify the canonical route, representative confirmed contributors, contribution types, qualifications, disclosures, approved affiliations and links, essential navigation, and exclusion of unconfirmed entries without submitting data.

---

## COM-PG-005 — Partnerships

**Route:** `/about/partnerships/`
**Priority:** P1
**Audience:** Shared and institutional
**Page type:** Partnership page
**PRD requirements:** CON-003

### Required Content

- Confirmed partnerships
- Approved collaboration categories
- Partnership enquiry route
- Program participation where verified

### Prohibited Content

- Prospects presented as partners
- Applications presented as selection
- Discussions presented as agreements
- Logos without permission

### Acceptance Criteria

- Every published relationship is verified
- Partnership status is unambiguous
- Contact route works

### Test Requirements

- **Requirement IDs:** CON-003, SHR-020
- **Page ID:** COM-PG-005
- **Risk priority:** P1, with high relationship-verification, partnership-status, logo-permission, program-participation, legal, reputational, contact-routing, and institutional-trust risk; release blocking whenever included in an approved release
- **Static validations:** Validate the `/about/partnerships/` route, Page ID, requirement traceability, publication and indexation status, unique relationship identifiers, approved partner names, relationship and collaboration categories, current statuses, effective and review dates, program-participation evidence, logo and trademark permissions, external URLs, partnership-enquiry ownership, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover partnership-record schemas, confirmed, proposed, expired and withdrawn status handling, collaboration-category mappings, program-participation classification, publication and permission states, logo and external-link validation, display ordering, unavailable-logo handling, contact-route configuration, locale-specific content, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-FRM-006` General Contact Form when used for partnership enquiries, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible relationship and status presentation, collaboration categories, logo alternatives, external links, enquiry CTA or form states, keyboard behavior, focus, mobile reflow, RTL, reduced motion, unavailable-logo, empty, success, and error states.
- **E2E journeys:** When included in release scope, open Partnerships, review representative verified relationships and collaboration categories, distinguish partnerships from programs and other relationships, inspect approved logos and external links, start the owned partnership-enquiry route, and confirm that prospects, applications, discussions, expired relationships, and unapproved logos are absent or accurately labelled.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When the page enters a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when the page enters release scope; verify relationship-card order, names, statuses, categories, logos, external links, enquiry CTA or form, touch targets, long-name handling, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/about/partnerships/`, including verified-relationship, unavailable-logo, empty, enquiry, success, and error states where applicable.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, partner-name and relationship-status associations, category meaning, logo alternatives, external-link purpose and destination notice, enquiry labels and errors where applicable, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify approved transliteration or translation of organization names, equivalent relationship, collaboration-category, program-participation, status, external-link, and enquiry meaning; logical layout; accurate legal and institutional terminology; and qualified Arabic, partner, legal, commercial, and company review.
- **Reduced-motion coverage:** Run `reduced-motion`; relationship-card presentation, logo loading, progressive disclosure, enquiry feedback, navigation, and external-link access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, verified-partnership, program-participation, collaboration-category, unavailable-logo, empty, enquiry, success, and error-state baselines before publication.
- **Product Status tests:** Verify every partnership, collaboration, program, pilot, integration, customer, institutional, market, and Product Status statement reflects its approved current status. Prospects, applications, discussions, intentions, and expired relationships must not be presented as partnerships, selection, agreements, adoption, or active integrations.
- **Clinical-review requirement:** Required when a partnership description includes clinical collaboration, validation, research, Patient care, healthcare delivery, clinical outcomes, professional endorsement, or medical claims. The partner and designated legal, clinical, product, or commercial owners must approve their respective statements.
- **Form or integration tests:** If `CMP-FRM-006` is used for partnership enquiries, cover required fields, validation, consent, success, duplicate submission, delivery failure, spam protection, safe error mapping, and owned recipient routing through `TST-INT-001` or an approved extension. Test partnership data and links using synthetic fixtures; do not call live CRM, email, partner, program, Patient, Provider, or clinical systems.
- **Performance-budget tests:** Before publication, test `/about/partnerships/` and its relationship list, logos, external links, enquiry flow, images, fonts, and motion against approved Core Web Vitals, JavaScript, image, font, third-party, form, content, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe external and contact links, approved logo sources, escaped partnership metadata, secure enquiry validation and delivery where applicable, no confidential agreement, negotiation, personal-contact, Patient, or production operational data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever included in a release; verify page availability, current verified relationships, unambiguous statuses, approved categories, logos and external links, exclusion of prospects and unapproved claims, owned partnership-enquiry routing, success and failure recovery where applicable, Arabic behavior, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive only when published; verify `/about/partnerships/`, representative verified relationships, unambiguous statuses, approved logos and links, essential navigation, and enquiry-route availability without submitting a form or contacting a partner.

---

## COM-PG-006 — Careers

**Route:** `/about/careers/`
**Priority:** P2 unless hiring
**Audience:** Shared
**Page type:** Careers page
**PRD requirements:** CON-003

### Primary Purpose

Present current roles and company employment information.

### Requirements

- Publish only active approved roles
- Include location, employment type, responsibilities, requirements, and application process
- Archive closed roles
- Avoid collecting unnecessary sensitive information

### Acceptance Criteria

- Open roles are current
- Application destination works
- Closed roles are removed or marked
- Employment claims are accurate

### Test Requirements

- **Requirement IDs:** CON-003, SHR-020
- **Page ID:** COM-PG-006
- **Risk priority:** P2 unless active hiring is approved; release blocking whenever published with open roles, with high role-currency, employment-claim, application-routing, privacy, accessibility, and legal risk
- **Static validations:** Validate the `/about/careers/` route, Page ID, requirement traceability, publication and indexation status, unique role identifiers and slugs, active and closed status, role title, location, employment type, responsibilities, requirements, application process, owner and review dates, approved application destinations, privacy content, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover career-role schemas, active, scheduled, closed and archived status handling, publication dates, location and employment-type values, application-destination configuration, missing-field prevention, closed-role exclusion or labelling, empty-careers state, locale-specific content, and consent-aware analytics where applicable.
- **Required Component IDs and component tests:** `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test accessible role listings, employment metadata, responsibilities and requirements, application links, closed-role and no-open-role states, keyboard behavior, focus, mobile reflow, RTL, reduced motion, loading, unavailable-destination, and error states. Any reusable job-card component must receive an approved Component ID before implementation.
- **E2E journeys:** When active hiring is published, open Careers, review an active role, verify its location, employment type, responsibilities, requirements and application process, follow the approved application destination, and confirm closed or expired roles are removed or accurately marked. When no roles are open, verify the approved empty state without a misleading application CTA.
- **Browser projects:** Run `chromium-desktop` for every changed-feature test. When active roles enter a release scope, also run `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion` where those locales and experiences are published.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari` when active roles are published; verify role-list order, employment metadata, long responsibilities and requirements, application CTA, touch targets, external-destination notice, closed-role status, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks for all required registered components and Playwright Axe checks against `/about/careers/`, including active-role, closed-role, no-open-role, unavailable-application, and error states.
- **Manual accessibility review:** Before publication, verify keyboard navigation, visible focus, headings, landmarks, role and employment-metadata relationships, list structure, application-link purpose and destination notice, closed-role status, empty-state comprehension, reading order, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Before Arabic publication, run `arabic-rtl`; verify equivalent role title, location, employment type, responsibilities, requirements, application process, open or closed status, privacy, and application-destination meaning; logical layout; accurate employment terminology; and qualified Arabic, HR, privacy, and legal review.
- **Reduced-motion coverage:** Run `reduced-motion`; role-list updates, status changes, progressive disclosure, navigation, and application-destination access must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL where applicable, reduced-motion, active-role, multiple-role, long-description, closed-role, no-open-role, unavailable-application, loading, and error-state baselines before publication.
- **Product Status tests:** Verify hiring status, role availability, locations, employment types, company maturity, team descriptions, benefits, work arrangements, and expansion claims reflect current approved operational status. Planned or unapproved roles must not appear open.
- **Clinical-review requirement:** Not normally required for standard employment information. Clinical review becomes mandatory when a role description includes clinical responsibilities, Patient interaction, healthcare qualifications, research, validation, clinical algorithms, or regulated activities.
- **Form or integration tests:** No application form is defined on this public page unless separately approved. Test role-data loading, active and closed filtering, approved application links, unavailable-destination recovery, analytics consent where applicable, and safe synthetic vacancy fixtures. If a form is introduced, it requires a separately approved privacy, security, retention, accessibility, and integration contract. Tests must not call live HR, recruitment, email, or production systems.
- **Performance-budget tests:** Before publication, test `/about/careers/` and its role listings, long descriptions, application links, images, fonts, and interactions against approved Core Web Vitals, JavaScript, image, font, content, third-party, interaction, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify security headers, safe application and external links, normalized role slugs where used, escaped vacancy metadata, no collection or exposure of résumés, identity documents, sensitive applicant information, personal contact details, or production operational data, consent-controlled analytics, and absence of secrets or sensitive URL parameters.
- **Staging smoke:** Required whenever Careers or an active role enters a release; verify page availability, current open and closed statuses, complete role metadata, accurate employment claims, approved application destinations, no-open-role behavior, Arabic presentation where released, analytics consent where applicable, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable and non-destructive whenever published; verify `/about/careers/`, current role availability, representative employment metadata, closed-role handling, essential navigation, and application-destination availability without submitting an application or entering applicant data.

---

# 15. Contact Page

## SH-PG-002 — Contact

**Route:** `/contact/`
**Priority:** P0
**Audience:** Shared
**Page type:** Contact-routing page
**PRD requirements:** SHR-007, UX-010, SEC-002, PRV-003, INT-003

### Primary Purpose

Route visitors to the correct support, commercial, partnership, privacy, or company contact pathway.

### Primary Visitor Question

> Who should I contact about my question?

### Required Contact Categories

- General enquiry
- Patient support
- Healthcare Provider enquiry
- Hospital or institutional enquiry
- Partnership
- Media
- Careers
- Privacy
- Security

### Required Safety Statement

The Contact page is not an emergency or medical-consultation service.

### Prohibited Content

- Detailed medical-history fields
- Clinical advice form
- Patient report uploads through general contact
- Unowned contact categories

### Analytics

- Contact page viewed
- Category selected
- Form started
- Form submitted
- Form failed

### Acceptance Criteria

- Every category routes to an approved owner
- No sensitive health information is requested
- Success and error states work
- Safety wording is visible
- Response expectations are accurate

### Test Requirements

- **Requirement IDs:** SHR-007, UX-010, SEC-002, PRV-003, INT-003, SHR-020
- **Page ID:** SH-PG-002
- **Risk priority:** P0 and release blocking, with critical contact-routing, Patient-safety, privacy, sensitive-data, form-delivery, security, analytics, and operational-ownership risk
- **Static validations:** Validate the `/contact/` route, Page ID, requirement traceability, indexation, approved contact-category vocabulary, category-to-owner mappings, safety statement, prohibited-field rules, response-expectation wording, form schema, consent and privacy content, analytics-event registration, error-code mappings, integration ownership, translation completeness, architecture rules, linting, TypeScript, and production build.
- **Unit or integration coverage:** Cover contact-category routing, owner configuration, form schemas, required and optional fields, email normalization, length limits, safety-statement inclusion, prohibited Patient and clinical-data fields, consent rules, safe error mapping, duplicate-submission prevention, delivery-adapter requests and responses, analytics payload filtering, and unavailable-category recovery.
- **Required Component IDs and component tests:** `CMP-FRM-006` General Contact Form, `CMP-PRM-001` Button, `CMP-PRM-002` Text Link, `CMP-LYT-001` Container, `CMP-NAV-002` Site Header, `CMP-NAV-004` Mobile Navigation Drawer, and `CMP-NAV-005` Audience Switcher. Test category selection, labels, descriptions, required indicators, safety statement, consent, accessible errors and error summary, focus movement, loading, success, failure, duplicate submission, unavailable category, keyboard behavior, mobile reflow, RTL, and reduced motion.
- **E2E journeys:** Cover the Contact flow through `TST-INT-001`; open Contact, review the safety statement, select each approved category, verify owned routing, submit one synthetic general enquiry on staging, correct validation errors, verify success, simulate delivery failure and recovery, and confirm that Patient reports, detailed medical histories, emergency requests, and clinical-advice fields are not offered.
- **Browser projects:** `chromium-desktop`, `firefox-desktop`, `webkit-desktop`, `arabic-rtl`, and `reduced-motion`.
- **Mobile coverage:** Run `mobile-chrome` and `mobile-safari`; verify category selection, form-field order, input modes, virtual-keyboard usability, safety statement, validation messages, error summary, consent, success and failure recovery, touch targets, and narrow-viewport reflow.
- **Accessibility automation:** Run Storybook Axe checks against all `CMP-FRM-006` states and required dependencies and Playwright Axe checks against `/contact/` in initial, category-selected, validation-error, loading, success, simulated-failure, and unavailable-category states.
- **Manual accessibility review:** Verify keyboard-only category selection and form completion, visible focus, headings, landmarks, labels, descriptions, required-field communication, safety-statement prominence, error identification, error-summary links, focus movement after failure and success, consent comprehension, status announcements, zoom, reflow, touch targets, VoiceOver with Safari, and one additional approved screen-reader/browser combination.
- **Arabic and RTL coverage:** Run `arabic-rtl`; verify equivalent general, Patient-support, Provider, institutional, partnership, media, careers, privacy and security category meaning; safety statement; field labels; validation errors; consent; response expectations; success and failure messages; logical form layout; appropriate email direction; and qualified Arabic, privacy, legal, security, accessibility, clinical, and operational review.
- **Reduced-motion coverage:** Run `reduced-motion`; category changes, validation, loading, error-summary focus, success and failure feedback, navigation, and recovery must remain complete and understandable without non-essential animation.
- **Visual-regression coverage:** Capture controlled desktop, mobile, Arabic RTL, reduced-motion, initial, category-selected, safety-statement, focused-field, validation-error, error-summary, loading, success, delivery-failure, and unavailable-category baselines.
- **Product Status tests:** Verify every contact category, support pathway, response expectation, market route, form destination, and service description reflects approved operational availability. Unavailable or unowned categories must not accept submissions and must provide an accurate alternative.
- **Clinical-review requirement:** Mandatory for the emergency and medical-consultation boundary, Patient-support wording, clinical-advice prohibition, sensitive-health-information warnings, and any healthcare or Patient-service description.
- **Form or integration tests:** Cover `CMP-FRM-006` through `TST-INT-001`: all category-owner mappings, valid submission, required fields, invalid email, unsupported category, boundary lengths, malicious input, missing consent, duplicate submission, spam protection, rate limiting, delivery success, timeout, adapter rejection, unavailable service, safe retry, safe public errors, and owned recipient routing. Use synthetic data only and never call production delivery systems during automated tests.
- **Performance-budget tests:** Test `/contact/` and all material category and form states against approved Core Web Vitals, JavaScript, third-party, spam-protection, form-response, font, and motion budgets in `docs/engineering/PERFORMANCE_BUDGET.md`.
- **Security tests:** Verify HTTPS and security headers, server-side validation, input normalization, output encoding, CSRF protections where applicable, rate limiting, spam protection, request-size and file-upload restrictions, secure adapter authentication, secret isolation, safe logging and errors, no Patient or clinical data collection, no analytics capture of field or message contents, and absence of sensitive URL parameters.
- **Staging smoke:** Verify page availability, safety wording, every category-to-owner route, form validation, consent, spam protection, one successful synthetic general enquiry, success state, simulated delivery failure and recovery, analytics events without field contents, Arabic behavior, and absence of blocking console or network failures.
- **Production smoke applicability:** Applicable but strictly non-destructive; verify `/contact/`, approved categories, safety statement, form rendering, field labels, consent and privacy content, submit-control availability, and public delivery-service health where safely observable. Do not submit the production form or send a contact enquiry during routine smoke testing.

---

# 16. Legal and Trust Pages

## LEG-PG-001 — Privacy Policy

**Route:** `/privacy/`
**Priority:** P0
**Audience:** Shared
**Page type:** Legal page
**PRD requirements:** PRV-001 to PRV-007

### Required Content

- Legal entity
- Data collected
- Purpose
- Lawful basis where applicable
- Cookies and analytics
- Third-party services
- Data sharing
- Retention
- Security principles
- User rights
- Contact
- Market applicability
- Effective and updated dates

### Acceptance Criteria

- Legal review is complete
- Product and website data flows are accurately represented
- Market applicability is clear
- Contact details work
- Version date is visible

---

## LEG-PG-002 — Terms

**Route:** `/terms/`
**Priority:** P0
**Audience:** Shared
**Page type:** Legal page

### Required Content

- Website terms
- Intellectual property
- Informational-use boundary
- Medical boundary
- Availability
- Liability
- Third-party links
- Market applicability
- Governing law
- Contact
- Effective date

### Acceptance Criteria

- Legal review is complete
- Terms distinguish website and application use
- Medical boundaries are clear
- Market applicability is accurate

---

## LEG-PG-003 — Cookies

**Route:** `/cookies/`
**Priority:** P0 when cookies require a separate policy
**Audience:** Shared
**Page type:** Legal and consent page

### Required Content

- Cookie categories
- Purpose
- Duration
- Third parties
- Consent management
- Withdrawal
- Contact
- Update date

### Acceptance Criteria

- Cookie inventory matches implementation
- Consent choices work
- Non-essential scripts respect consent
- Policy is updated when services change

---

## LEG-PG-004 — Accessibility

**Route:** `/accessibility/`
**Priority:** P0
**Audience:** Shared
**Page type:** Trust and accessibility statement

### Required Content

- Accessibility commitment
- Target standard
- Known limitations
- Feedback route
- Contact
- Review date

### Acceptance Criteria

- Statement reflects actual implementation
- Feedback route works
- Known issues are not concealed
- Accessibility target matches approved standard

---

# 17. Utility Pages

## UTL-PG-001 — Search

**Route:** `/search/`
**Priority:** P2 unless resource volume requires it
**Audience:** Shared
**Page type:** Search utility

### Required Features

- Query input
- Audience label
- Topic and type filters where justified
- No-result state
- Accessible keyboard interaction
- Exclusion of drafts and restricted pages

### Analytics

- Search submitted
- Filter applied
- Result selected
- No-result query

Search terms must be reviewed for privacy implications.

### Acceptance Criteria

- Restricted content is excluded
- Results show audience context
- Search is accessible
- No-result state offers recovery

---

## UTL-PG-002 — Login Router

**Route:** `/login/`
**Priority:** P1 when platform access exists
**Audience:** Shared
**Page type:** Platform-access router

### Primary Purpose

Route users to approved Patient or Provider access.

### Requirements

- Patient access only when available
- Provider access only when available
- Clear distinction between login, demonstration, and registration
- Market restrictions where applicable
- Secure destinations

### Acceptance Criteria

- Every access route works
- Unsupported access is hidden
- Users understand which system they are entering
- Authentication details are not exposed

---

## UTL-PG-003 — 404 Not Found

**Route:** Platform-defined 404
**Priority:** P0
**Audience:** Shared
**Page type:** Error page

### Required Content

- Clear page-not-found message
- Patient homepage route
- Provider homepage route
- Shared entry route
- Search when available
- Contact route

### Acceptance Criteria

- Correct HTTP status
- No broken assets
- Audience routes work
- Page is not indexable as normal content

---

## UTL-PG-004 — 500 Server Error

**Route:** Platform-defined 500
**Priority:** P0
**Audience:** Shared
**Page type:** Error page

### Required Content

- Temporary-error message
- Safe return route
- Contact or support route
- No internal technical details

### Acceptance Criteria

- Correct HTTP status
- No sensitive details exposed
- Static fallback works during application failure

---

# 18. Page-Level SEO Requirements

Every page specification must later define:

- Primary search intent
- Secondary search themes
- Proposed title
- Proposed meta description
- Canonical URL
- Index or noindex
- Structured data
- Internal-link requirements
- Author and reviewer metadata
- Market and language applicability

Final titles and descriptions belong in the SEO specification or page content briefs.

This document defines intent rather than final metadata copy.

---

# 19. Page-Level Analytics Requirements

Every implemented page must identify:

- Page ID
- Route
- Audience
- Page type
- Market
- Language
- Product-status dependency
- Primary CTA
- Secondary CTA
- Relevant engagement events

Analytics must use stable internal names even when visible labels change.

Example:

```text
page_id: PAT-PG-006
page_type: capability
audience: patient
route: /patients/weight-monitoring/
```

---

# 20. Page-Level Accessibility Requirements

Each page design and implementation review must evaluate:

- Heading hierarchy
- Landmark structure
- Keyboard flow
- Focus order
- Link purpose
- Button naming
- Form labeling
- Error messaging
- Color contrast
- Reduced motion
- Alternative text
- Complex-image description
- Chart interpretation
- Mobile zoom and text scaling
- Language and direction attributes
- Right-to-left behavior where applicable

Advanced clinical diagrams should include:

- Short alternative text
- Longer visible or programmatic explanation
- Clear legend
- Non-color-dependent distinctions

---

# 21. Page-Level Content Approval

Each page must identify the required reviewers.

## 21.1 Product Review

Required when the page describes:

- Product capabilities
- Availability
- Pricing
- Workflow
- Roadmap
- Integrations
- Market access

## 21.2 Clinical Review

Required when the page includes:

- Clinical claims
- Risk factors
- Weight guidance
- Nutrition
- Physical activity
- Maternal intelligence
- Fetal growth
- Doppler
- Validation
- Methodology
- Patient safety

## 21.3 Legal or Privacy Review

Required when the page includes:

- Forms
- Consent
- Pricing terms
- Privacy
- Security
- Medical disclaimers
- Market-specific legal claims
- Regulatory status

## 21.4 Commercial Review

Required when the page includes:

- Pricing
- Membership
- Demonstrations
- Pilots
- Enterprise implementation
- Partnerships
- Market availability

---

# 22. Page Content Brief Requirements

Before copywriting begins, every page must receive a content brief containing:

- Page ID
- Route
- Primary audience
- Primary purpose
- Primary visitor question
- Story stage
- Primary CTA
- Secondary CTA
- Required sections
- Required proof
- Required disclaimers
- Product Status
- Clinical sources
- SEO intent
- Related pages
- Reviewer list

The brief must not redefine the Page Requirements.

---

# 23. Page Design Brief Requirements

Before design begins, every page must identify:

- Page ID
- Page type
- Narrative sequence
- Content hierarchy
- Required components
- Required diagrams
- Required product visuals
- Motion purpose
- Mobile behavior
- Accessibility considerations
- Product-status labels
- CTA behavior
- Empty, loading, error, or success states
- Motion ID
- Motion purpose
- Trigger
- Duration and easing
- Reduced-motion alternative
- Mobile behavior
- RTL behavior
- Performance impact

---

# 24. Page Implementation Requirements

Before development begins, every page must identify:

- Canonical route
- Page ID
- Data source
- Content ownership
- Required reusable components
- Analytics events
- Metadata
- Structured data
- Form integrations
- Consent dependencies
- Redirects
- Market and language behavior
- Test cases
- Launch status

---

# 25. Page Acceptance Process

Each page must pass five approval gates.

## Gate One — Strategic

- Supports an approved objective
- Serves a defined audience
- Fits the Website Story
- Fits the Information Architecture
- Has a clear CTA

## Gate Two — Content

- Required sections are complete
- Claims are sourced
- Product Status is accurate
- Clinical boundaries are present
- Terminology is approved

## Gate Three — Design

- Visual hierarchy is clear
- Brand system is followed
- Mobile design is complete
- Motion is purposeful
- Accessibility is considered

## Gate Four — Engineering

- Route is correct
- Metadata is complete
- Analytics works
- Performance is acceptable
- Security and privacy requirements are met
- Forms and errors work

## Gate Five — Launch

- Product owner approved
- Clinical reviewer approved where required
- Legal or privacy reviewer approved where required
- CTA destination verified
- Route Registry updated
- Traceability updated
- Page status changed to Published

---

# 26. Page Requirements Traceability

Each Page ID must map to:

- Website objective
- PRD requirements
- Information Architecture route
- Website Story stage
- Product Status
- Design template
- Components
- Analytics
- Tests
- Implementation status

Example:

```text
PAT-PG-005 — Risk Awareness
→ Patient risk-awareness objective
→ PAT-003
→ /patients/risk-awareness/
→ Understanding and appropriate action
→ GDM Risk Assessment status
→ Patient capability page template
→ Risk CTA, disclaimer, FAQ components
→ Assessment-start analytics
→ Risk-page test suite
```

---

# 27. Initial Page Release Tiers

## 27.1 Core Shared P0

- SH-PG-001 — Shared Audience Entry
- SH-PG-002 — Contact
- COM-PG-001 — About
- LEG-PG-001 — Privacy
- LEG-PG-002 — Terms
- LEG-PG-003 — Cookies where required
- LEG-PG-004 — Accessibility
- UTL-PG-003 — 404
- UTL-PG-004 — 500

## 27.2 Core Patient P0

- PAT-PG-001 — Patient Homepage
- PAT-PG-002 — How ODRISC Helps
- PAT-PG-011 — Patient FAQs

Conditional P0:

- PAT-PG-005 — Risk Awareness
- PAT-PG-006 — Weight Monitoring
- PAT-PG-007 — Nutrition
- PAT-PG-008 — Physical Activity
- PAT-PG-010 — Membership
- PAT-PG-012 — Patient Start

## 27.3 Core Provider P0

- PRO-PG-001 — Provider Homepage
- PRO-PG-002 — Clinical Platform
- PRO-PG-003 — Monitoring
- PRO-PG-007 — Workflow
- PRO-PG-008 — Validation
- PRO-PG-015 — Provider FAQs
- PRO-PG-016 — Request Demonstration

Conditional P0 or P1:

- PRO-PG-004 — Intelligence Hub
- PRO-PG-005 — Maternal Intelligence
- PRO-PG-006 — Fetal Growth Intelligence
- PRO-PG-009 — Methodology
- PRO-PG-011 — Hospitals and Health Systems
- PRO-PG-017 — Discuss Pilot

---

# 28. Page Requirement Risks

## 28.1 Capability Overstatement

A page may present a conceptual product layer as operational.

**Mitigation:** Product Status review before content and publication.

## 28.2 Excessive Page Count

The architecture may produce more pages than available content can support.

**Mitigation:** Publish only pages with clear purpose, unique value, ownership, and CTA.

## 28.3 Patient-Provider Duplication

Related pages may repeat identical text.

**Mitigation:** Separate audience question, depth, proof, terminology, and action.

## 28.4 Clinical Complexity

Provider detail may leak into Patient pages.

**Mitigation:** Progressive disclosure and audience review.

## 28.5 Weak Conversion

Pages may contain informative content without a working next action.

**Mitigation:** CTA verification as a publication requirement.

## 28.6 Validation Overreach

Interest, expert review, pilot activity, and clinical validation may be combined.

**Mitigation:** Separate validation categories and evidence.

## 28.7 Market Confusion

India and Qatar availability, pricing, or legal content may be mixed.

**Mitigation:** Market metadata and localization governance.

## 28.8 Outdated Team or Pricing Data

Frequently changing content may become inaccurate.

**Mitigation:** Central content ownership and review dates.

## 28.9 Design Before Content

Visual design may define or constrain the page before the content hierarchy is approved.

**Mitigation:** Page brief and content structure approval before high-fidelity design.

## 28.10 One-Off Components

Each page may introduce bespoke components.

**Mitigation:** Page-type templates and reusable Component Library.

---

# 29. Assumptions

This document assumes:

1. The approved Information Architecture remains current.
2. Patient routes use `/patients/`.
3. Provider routes use `/providers/`.
4. The root remains the shared entry.
5. Product capabilities remain governed by Product Status.
6. Patient and Provider primary CTAs remain partly unresolved.
7. Qatar remains the commercial priority.
8. India remains relevant for validation and current implementation.
9. Arabic and right-to-left support are required for Qatar commercialization.
10. Not every approved page will launch simultaneously.
11. Detailed final copy will be created through separate content briefs.
12. Detailed design belongs in the design documentation.
13. Technical implementation belongs in engineering documentation.
14. Route and page identifiers will be maintained separately.
15. The existing Canva website does not define future page requirements.

---

# 30. Open Questions

All unresolved decisions must remain in:

`docs/project/OPEN_QUESTIONS.md`

Page-level blocking questions include:

- Which pages form the final P0 launch inventory?
- What is the final Patient homepage CTA?
- What is the final Provider homepage CTA?
- Which Patient capabilities are publicly available?
- Which Provider capabilities may be described publicly?
- Which Patient pricing may be published?
- Which validation claims are approved?
- Which product screenshots are current?
- Which pages use concept visuals?
- Which pages require visible product-status labels?
- Which pages require clinical author or reviewer information?
- Which institutional pages launch in Qatar?
- Which pages are translated into Arabic at first launch?
- Which pages differ by market?
- Is Provider Insights separate from Provider Resources?
- Is Patient Start a page or routing layer?
- Is the Intelligence Hub P0 or P1?
- Which forms have operational owners?
- Which pages require noindex?
- Which page sections require animation?

---

# 31. Locked Page Requirement Decisions

The following are locked unless formally changed:

1. Every approved page must have a stable Page ID.
2. Every page must have one primary audience.
3. Every page must have one primary purpose.
4. Every major page must have one primary CTA.
5. Every page must map to the PRD and Information Architecture.
6. Patient and Provider pages must use audience-specific language.
7. Product claims must match Product Status.
8. Clinical claims must be traceable.
9. Pages must preserve the Website Story.
10. Pages must not begin with unstructured feature catalogues.
11. Patient pages must preserve dignity and avoid stigma.
12. Provider pages must preserve clinical judgment.
13. Validation types must remain distinct.
14. Public pages must not expose restricted intellectual property.
15. Forms must not request unnecessary medical information.
16. No page may publish with a non-working primary CTA.
17. Page structure must remain coherent on mobile.
18. Accessibility is a page acceptance requirement.
19. SEO and analytics are page requirements, not post-launch additions.
20. Published pages require ownership and review dates where relevant.
21. Market applicability must be explicit.
22. Routes must remain consistent with Information Architecture.
23. Page changes must update the Route Registry and traceability documents.
24. Existing code or mockups do not override approved Page Requirements.

---

# 32. Rules for AI Agents

Before writing, designing, or implementing a page, AI agents must:

1. Identify the Page ID.
2. Confirm the canonical route.
3. Confirm the primary audience.
4. Read the page specification.
5. Identify relevant PRD requirements.
6. Identify the Website Story stage.
7. Check Product Status.
8. Check open questions.
9. Check market and language requirements.
10. Check clinical, legal, and privacy review needs.
11. Use approved terminology.
12. Identify the working CTA destination.
13. Identify analytics events.
14. Identify accessibility requirements.
15. Update traceability documentation.

AI agents must not:

- Invent a public page outside the approved architecture
- Change a Page ID
- Create duplicate canonical pages
- Draft copy before checking Product Status
- Present future features as available
- Turn a Patient page into a clinical document
- Turn a Provider page into generic wellness marketing
- Invent evidence, validation, partnerships, or regulatory status
- Add a form without an operational owner
- Add a CTA without a working destination
- Remove safety or clinical-boundary language
- Use a visual mockup as the only page requirement
- Create bespoke components before checking the Component Library
- publish a page without updating the Route Registry

---

# 33. Foundational Page Requirements Summary

The ODRISC website will be implemented as a governed system of audience-specific pages rather than a collection of visually independent screens.

Every page must connect:

```text
Audience need
↓
Website objective
↓
Narrative stage
↓
Approved product capability
↓
Relevant evidence and trust
↓
Appropriate next action
```

Patient pages must help women understand, prepare, monitor, and participate without transferring clinical responsibility to them.

Provider pages must help healthcare professionals understand clinical relevance, longitudinal intelligence, methodology, workflow, validation, and implementation without overstating product maturity.

Shared pages must reinforce one ODRISC company, one product identity, and one connected maternal and fetal intelligence vision.

A page is complete only when its strategy, content, product status, design, accessibility, SEO, analytics, privacy, engineering, and operational requirements are all satisfied.

---

# 34. Global Page Review

## Brand Compliance

Every page must comply with `docs/design/BRAND_FOUNDATION.md`.

Page designs and copy must preserve:

- ODRISC product identity
- Audience-appropriate voice
- Approved brand narrative
- Approved color roles
- High negative space
- Calm and precise visual hierarchy
- Patient dignity
- Provider authority
- Product Status transparency
- Accessibility
- Arabic-readiness where applicable

## Brand Acceptance

- Does the page feel recognizably ODRISC?
- Does it preserve the longitudinal story?
- Is the audience-specific voice correct?
- Are visual and verbal prohibitions avoided?
- Is gradient use restrained and accessible?
- Is the page visually connected to the other audience journey?
- Are concept assets labeled accurately?

## Design-System Compliance

Every page must use the approved tokens, typography, grid, spacing, responsive rules, components, semantic states, and audience variants defined in `docs/design/DESIGN_SYSTEM.md`.

Page-specific mockups may arrange approved components differently, but they must not create new visual rules without documenting the change.

## Motion Compliance

Any page using motion must comply with `docs/design/ANIMATION_GUIDELINES.md`.

Page motion must:

- Support the approved narrative
- Preserve immediate content access
- Use approved tokens
- Include a reduced-motion state
- Preserve clinical meaning
- Avoid implying unavailable functionality
- Remain performant on mobile
- Support RTL where applicable

## Technical Implementation Compliance

Every page must be implemented through the approved Technology Stack.

Page specifications must identify:

- Static or dynamic rendering
- Server and Client Component boundaries
- Required content source
- Required API integration
- Analytics events
- Consent dependencies
- Localization behavior
- Image and media requirements
- Testing requirements
- Performance implications

---

# 35. Page-design Acceptance Review

- Approved tokens are used.
- Responsive container and grid rules are followed.
- Text uses the approved typography scale.
- Interactive elements meet minimum target sizes.
- Semantic colors are used correctly.
- Patient or Provider density is appropriate.
- RTL behavior has been considered.

- Motion ID
- Motion purpose
- Trigger
- Duration and easing
- Reduced-motion alternative
- Mobile behavior
- RTL behavior
- Performance impact

---

# 36. Architecture Requirements

Each page specification must identify:

- Page ID
- Canonical route key
- Rendering strategy
- Content source
- Server Component sections
- Required Client Components
- Product Status dependency
- API or integration dependency
- Form or mutation flow
- Runtime configuration dependency
- Analytics events
- Consent dependency
- Cache behavior
- Error behavior
- Accessibility tests
- Localization and RTL behavior
- Performance budget

---

# 37. Component Mapping

Every page specification must identify:

- Required Component IDs
- Page-local sections
- Patient, Provider, institutional, or shared variants
- Server and Client boundaries
- Required component states
- Product Status components
- Form components
- Chart or diagram components
- Motion components
- Analytics-owning components
- Accessibility-critical components
- Components requiring Arabic or RTL review

---

# 38. Code-Quality Requirements

- Approved file and naming conventions are used.
- Server and Client boundaries are justified.
- Runtime data is validated.
- Page code does not duplicate content, routes, Product Status, or analytics events.
- Accessibility and RTL behavior are implemented in code.
- Errors and loading states use approved contracts.
- Formatting, linting, type checking, and tests pass.

---

# 39. Test Requirements

- Requirement IDs
- Page ID
- Risk priority
- Static validations
- Unit or integration coverage
- Required Component IDs and component tests
- E2E journeys
- Browser projects
- Mobile coverage
- Accessibility automation
- Manual accessibility review
- Arabic and RTL coverage
- Reduced-motion coverage
- Visual-regression coverage
- Product Status tests
- Clinical-review requirement
- Form or integration tests
- Performance-budget tests
- Security tests
- Staging smoke
- Production smoke applicability
