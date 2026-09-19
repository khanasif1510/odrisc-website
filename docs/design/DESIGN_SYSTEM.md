# ODRISC Design System

## Document Status

**Document:** Design System
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical visual, interaction, responsive, and component-design specification
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Design owner:** To be assigned
**Approval authority:** Founder with designated product, clinical, design, accessibility, localization, content, and engineering reviewers

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
- `docs/product/PAGE_IMPLEMENTATION_TRACKER.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/BRAND_ASSET_REGISTER.md`
- `docs/design/BRAND_REVIEW_CHECKLIST.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

---

# 1. Purpose

This document translates the ODRISC Brand Foundation into an implementation-ready design system.

It defines:

- Design principles
- Design tokens
- Color palettes
- Semantic colors
- Typography
- Spacing
- Grids
- Responsive breakpoints
- Layouts
- Borders
- Radii
- Shadows
- Iconography
- Images
- Illustrations
- Data visualizations
- Navigation
- Buttons
- Forms
- Cards
- Status indicators
- Alerts
- Tables
- Timelines
- Modals
- Drawers
- Tabs
- Accordions
- Tooltips
- Page templates
- Patient and Provider variants
- Accessibility
- Arabic and right-to-left behavior
- Design governance
- Design acceptance criteria

This document governs the visual and interaction design of the public website.

It does not fully define:

- Motion choreography
- Application-screen design
- Patient application components
- Provider-dashboard components
- Clinical algorithm interfaces
- Source-code architecture
- Framework-specific implementation
- Final logo artwork

Detailed motion behavior belongs in:

`docs/design/ANIMATION_GUIDELINES.md`

Detailed engineering implementation belongs in:

- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `docs/engineering/CODING_STANDARDS.md`

---

# 2. Design-System Objective

The ODRISC Design System must make complex pregnancy information feel:

- Clear
- Calm
- Connected
- Clinically responsible
- Human
- Explainable
- Accessible
- Trustworthy

The system must support one master brand through two audience experiences:

```text
One ODRISC design language
↓
Patient-appropriate expression
+
Provider-appropriate expression
↓
One connected maternal and fetal intelligence platform
```

Patient and Provider experiences may differ in content density and visual emphasis.

They must not appear to belong to separate brands.

---

# 3. Design Principles

## 3.1 Clarity Before Decoration

Every visual element must improve:

- Meaning
- Hierarchy
- Navigation
- Comprehension
- Trust
- Action

Decorative elements must not compete with essential information.

## 3.2 Story Before Interface

The public website must explain the pregnancy-care story before presenting complex product interfaces.

## 3.3 Progression Before Isolation

Design should prioritize:

- Timelines
- Sequences
- Relationships
- Change across time
- Connected maternal and fetal information

## 3.4 Explainability Before Density

Information should be understandable before it becomes comprehensive.

## 3.5 Calm Before Urgency

Urgency must only be introduced when clinically or operationally appropriate.

Brand coral must not be used automatically as an alarm color.

## 3.6 Accessibility Before Aesthetic Preference

No visual preference may override:

- Contrast
- Keyboard access
- Text readability
- Reduced motion
- Screen-reader structure
- Touch-target size
- Meaning beyond color

## 3.7 Reuse Before Variation

New components should be created only when existing components cannot satisfy the approved requirement.

## 3.8 One Brand, Audience-Aware Density

Patient design should prioritize guided understanding.

Provider design should support greater clinical and technical depth.

---

# 4. Token Architecture

All design values must use named tokens.

Hard-coded visual values should be avoided in components unless an approved exception is documented.

Token groups:

```text
od.color.*
od.gradient.*
od.type.*
od.space.*
od.size.*
od.radius.*
od.border.*
od.shadow.*
od.grid.*
od.breakpoint.*
od.motion.*
od.z.*
```

Recommended implementation naming:

```text
--od-color-brand-coral
--od-color-brand-mint
--od-color-text-primary
--od-space-4
--od-radius-md
--od-shadow-sm
```

The engineering implementation may convert these into:

- CSS custom properties
- TypeScript objects
- JSON tokens
- Framework theme configuration

There must be one canonical generated token source in the codebase.

---

# 5. Core Brand Colors

## 5.1 Brand Coral

```text
#FF7680
```

Token:

```text
od.color.brand.coral
```

Purpose:

- Primary human warmth
- Brand recognition
- Selected highlights
- Patient-oriented emphasis
- Narrative beginnings
- Controlled visual attention

## 5.2 Brand Mint

```text
#80FFCC
```

Token:

```text
od.color.brand.mint
```

Purpose:

- Progression
- Connection
- Resolution
- Fetal and growth context
- Provider-oriented emphasis
- Narrative transitions

## 5.3 Primary Text

```text
#4D4D4D
```

Token:

```text
od.color.text.primary
```

## 5.4 Primary Background

```text
#FFFFFF
```

Token:

```text
od.color.surface.base
```

---

# 6. Brand Color Scales

The original brand colors remain the canonical identity colors.

Supporting scales allow accessible interfaces and controlled surfaces.

## 6.1 Coral Scale

| Token       | Value     | Intended use                |
| ----------- | --------- | --------------------------- |
| `coral-50`  | `#FFF5F6` | Very light Patient surfaces |
| `coral-100` | `#FFE8EA` | Soft callouts               |
| `coral-200` | `#FFD0D4` | Borders and highlights      |
| `coral-300` | `#FFAAB1` | Decorative illustration     |
| `coral-400` | `#FF7680` | Canonical brand coral       |
| `coral-500` | `#E95A66` | Strong accent               |
| `coral-600` | `#C8414E` | Accessible coral text       |
| `coral-700` | `#9F303B` | Strong label or outline     |
| `coral-800` | `#72232C` | Dark coral                  |
| `coral-900` | `#46171D` | Deep coral                  |

## 6.2 Mint Scale

| Token      | Value     | Intended use                     |
| ---------- | --------- | -------------------------------- |
| `mint-50`  | `#F1FFF9` | Very light Provider surfaces     |
| `mint-100` | `#DDFFF1` | Soft callouts                    |
| `mint-200` | `#BEFFE3` | Borders and highlights           |
| `mint-300` | `#9CFFD5` | Decorative illustration          |
| `mint-400` | `#80FFCC` | Canonical brand mint             |
| `mint-500` | `#4BDEA6` | Strong accent                    |
| `mint-600` | `#25B580` | Accessible mint-derived emphasis |
| `mint-700` | `#198661` | Strong label or outline          |
| `mint-800` | `#135E47` | Dark mint                        |
| `mint-900` | `#0E3B2E` | Deep mint                        |

Original brand colors should not be replaced by darker variants in brand lockups.

Darker variants exist primarily for accessible interface text, borders, and data presentation.

---

# 7. Neutral Palette

| Token         | Value     | Intended use            |
| ------------- | --------- | ----------------------- |
| `neutral-0`   | `#FFFFFF` | Base background         |
| `neutral-25`  | `#FCFCFC` | Subtle surface          |
| `neutral-50`  | `#FAFAFA` | Secondary surface       |
| `neutral-100` | `#F5F5F5` | Muted surface           |
| `neutral-200` | `#EAEAEA` | Borders                 |
| `neutral-300` | `#D6D6D6` | Strong borders          |
| `neutral-400` | `#A8A8A8` | Disabled text and icons |
| `neutral-500` | `#777777` | Secondary text          |
| `neutral-600` | `#5F5F5F` | Strong secondary text   |
| `neutral-700` | `#4D4D4D` | Primary brand text      |
| `neutral-800` | `#333333` | Strong headings         |
| `neutral-900` | `#1F1F1F` | Dark actions            |
| `neutral-950` | `#121212` | Maximum contrast        |

## 7.1 Text Tokens

```text
od.color.text.primary       = neutral-700
od.color.text.strong        = neutral-900
od.color.text.secondary     = neutral-600
od.color.text.muted         = neutral-500
od.color.text.disabled      = neutral-400
od.color.text.inverse       = neutral-0
```

## 7.2 Surface Tokens

```text
od.color.surface.base       = neutral-0
od.color.surface.subtle     = neutral-25
od.color.surface.muted      = neutral-50
od.color.surface.disabled   = neutral-100
od.color.surface.inverse    = neutral-900
```

## 7.3 Border Tokens

```text
od.color.border.subtle      = neutral-200
od.color.border.default     = neutral-300
od.color.border.strong      = neutral-500
```

---

# 8. Signature Gradient

## 8.1 Canonical Gradient

```css
linear-gradient(
  90deg,
  #FF7680 0%,
  #FF7680 72%,
  #80FFCC 100%
)
```

Token:

```text
od.gradient.signature
```

This creates a coral-dominant transition that resolves into mint.

## 8.2 Balanced Narrative Gradient

For diagrams and illustrations where equal transition is required:

```css
linear-gradient(
  90deg,
  #FF7680 0%,
  #80FFCC 100%
)
```

Token:

```text
od.gradient.progression
```

## 8.3 Approved Gradient Uses

- Thin header dividers
- Narrative timelines
- Select display headlines
- Controlled borders
- Progress lines
- Hero illustration elements
- Section transitions
- Brand diagrams

## 8.4 Prohibited Gradient Uses

- Long body text
- Essential small text
- Clinical risk states
- Every button
- Every icon
- Large backgrounds by default
- Form fields
- Data-series differentiation
- Error, warning, or success meaning

---

# 9. Semantic Colors

Semantic colors are separate from brand colors.

## 9.1 Success

```text
success-50  = #ECFDF3
success-100 = #D1FADF
success-600 = #1F7A55
success-700 = #176B49
success-900 = #073D2A
```

## 9.2 Warning

```text
warning-50  = #FFFAEB
warning-100 = #FEF0C7
warning-600 = #9A6500
warning-700 = #805200
warning-900 = #4E3100
```

## 9.3 Error

```text
error-50  = #FEF3F2
error-100 = #FEE4E2
error-600 = #B42318
error-700 = #912018
error-900 = #55160C
```

## 9.4 Information

```text
info-50  = #EFF8FF
info-100 = #D1E9FF
info-600 = #175CD3
info-700 = #1849A9
info-900 = #102A56
```

## 9.5 Focus

```text
od.color.focus = #175CD3
```

Focus must remain visually distinct from brand coral and semantic error.

---

# 10. Clinical Risk States

Clinical risk colors may only be used when the associated clinical logic and wording are approved.

| State          | Color         | Supporting indicator         |
| -------------- | ------------- | ---------------------------- |
| Low            | `success-600` | Label and low-risk icon      |
| Moderate       | `warning-600` | Label and caution icon       |
| High           | `#B54708`     | Label and elevated-risk icon |
| Extremely High | `error-600`   | Label and high-priority icon |

Requirements:

- Always show the written state
- Never rely on color alone
- Include an explanation
- Distinguish risk from diagnosis
- Provide professional-care guidance
- Avoid animated alarm behavior

---

# 11. Product-Status Colors

Product maturity must not use clinical-risk styling.

| Product status       | Background    | Text          |
| -------------------- | ------------- | ------------- |
| Available            | `success-50`  | `success-700` |
| Limited availability | `info-50`     | `info-700`    |
| Pilot                | `#F4F3FF`     | `#5925DC`     |
| In validation        | `warning-50`  | `warning-700` |
| In development       | `neutral-100` | `neutral-700` |
| Planned              | `neutral-50`  | `neutral-600` |
| Future roadmap       | `neutral-50`  | `neutral-500` |
| Restricted           | `error-50`    | `error-700`   |

Every badge must include visible text.

---

# 12. Typography

## 12.1 Approved V1 Latin Typeface

```text
Manrope
```

Fallback stack:

```css
Manrope,
"Noto Sans Arabic",
"Helvetica Neue",
Tahoma,
Arial,
sans-serif
```

## 12.2 Approved V1 Arabic Typeface

```text
Noto Sans Arabic
```

Fallback stack:

```css
"Noto Sans Arabic",
Tahoma,
Arial,
sans-serif
```

## 12.3 Font-Weight Range

Approved weights:

- 400 — Regular
- 500 — Medium
- 600 — Semibold
- 700 — Bold

Avoid weights below 400 for essential text.

## 12.4 Font Delivery

Font delivery must:

- Avoid layout shifts
- Use only required weights
- Use approved licensing
- Provide system fallbacks
- Avoid committing unlicensed font files
- Support English and Arabic consistently

---

# 13. Typography Scale

## 13.1 Display

| Token        | Desktop | Mobile | Weight | Line height |
| ------------ | ------: | -----: | -----: | ----------: |
| `display-xl` |    72px |   48px |    500 |        1.05 |
| `display-lg` |    64px |   44px |    500 |        1.08 |
| `display-md` |    56px |   40px |    500 |        1.10 |

## 13.2 Headings

| Token       | Desktop | Mobile | Weight | Line height |
| ----------- | ------: | -----: | -----: | ----------: |
| `heading-1` |    48px |   36px |    500 |        1.15 |
| `heading-2` |    40px |   32px |    500 |        1.20 |
| `heading-3` |    32px |   26px |    600 |        1.25 |
| `heading-4` |    24px |   22px |    600 |        1.30 |
| `heading-5` |    20px |   18px |    600 |        1.35 |
| `heading-6` |    18px |   16px |    600 |        1.40 |

## 13.3 Body and Supporting Text

| Token      | Size | Weight | Line height |
| ---------- | ---: | -----: | ----------: |
| `body-xl`  | 20px |    400 |        1.60 |
| `body-lg`  | 18px |    400 |        1.65 |
| `body-md`  | 16px |    400 |        1.60 |
| `body-sm`  | 14px |    400 |        1.55 |
| `label-lg` | 16px |    600 |        1.40 |
| `label-md` | 14px |    600 |        1.40 |
| `label-sm` | 12px |    600 |        1.40 |
| `caption`  | 12px |    400 |        1.50 |

## 13.4 Text Width

Recommended readable line lengths:

- Patient body content: 55–72 characters
- Provider body content: 60–80 characters
- Legal content: maximum 85 characters
- Hero text: maximum 18 words per line where practical

---

# 14. Heading Rules

- One visible H1 per page
- Heading levels must follow semantic hierarchy
- Do not choose heading levels for visual size
- Avoid all-uppercase headings
- Avoid gradient treatment on long headings
- Do not use more than two font weights in one heading
- Keep Patient headings plain and direct
- Provider headings may be more technical but must remain concise

---

# 15. Spacing System

The spacing system uses a 4px base unit.

| Token      | Value |
| ---------- | ----: |
| `space-0`  |     0 |
| `space-1`  |   4px |
| `space-2`  |   8px |
| `space-3`  |  12px |
| `space-4`  |  16px |
| `space-5`  |  20px |
| `space-6`  |  24px |
| `space-8`  |  32px |
| `space-10` |  40px |
| `space-12` |  48px |
| `space-16` |  64px |
| `space-20` |  80px |
| `space-24` |  96px |
| `space-28` | 112px |
| `space-32` | 128px |
| `space-40` | 160px |

## 15.1 Section Spacing

Desktop:

```text
Standard section padding: 96px vertical
Major narrative section: 128px vertical
Compact section: 64px vertical
```

Mobile:

```text
Standard section padding: 64px vertical
Major narrative section: 80px vertical
Compact section: 48px vertical
```

Large empty space must still preserve clear relationships between sections.

---

# 16. Responsive Breakpoints

| Token |  Width | Purpose       |
| ----- | -----: | ------------- |
| `xs`  |    0px | Small mobile  |
| `sm`  |  480px | Large mobile  |
| `md`  |  768px | Tablet        |
| `lg`  | 1024px | Small desktop |
| `xl`  | 1280px | Desktop       |
| `2xl` | 1440px | Large desktop |

Breakpoints are design thresholds, not device labels.

Components should respond to available space rather than assume a specific device.

---

# 17. Container System

## 17.1 Maximum Widths

```text
Text container       = 720px
Standard container   = 1200px
Wide container       = 1360px
Full-bleed maximum   = 1600px
```

## 17.2 Horizontal Gutters

| Viewport         |                 Gutter |
| ---------------- | ---------------------: |
| Below 480px      |                   20px |
| 480–767px        |                   24px |
| 768–1023px       |                   32px |
| 1024–1279px      |                   40px |
| 1280px and above |                   48px |
| 1440px and above | 64px where appropriate |

---

# 18. Grid System

## 18.1 Desktop

- 12 columns
- 24px minimum gutter
- 32px preferred gutter on wide layouts

## 18.2 Tablet

- 8 columns
- 24px gutter

## 18.3 Mobile

- 4 columns
- 16px gutter

## 18.4 Grid Rules

- Text should not span more columns than required
- Clinical tables may use wider containers
- Patient narratives should favor narrower reading widths
- Provider dashboards shown as website previews may use the wide container
- Asymmetry may be used only when hierarchy remains clear

---

# 19. Layer and Elevation System

## 19.1 Border Widths

```text
border-0 = 0
border-1 = 1px
border-2 = 2px
```

Use `1px` for most controls and cards.

## 19.2 Radii

| Token         | Value | Use                         |
| ------------- | ----: | --------------------------- |
| `radius-none` |     0 | Dividers and data grids     |
| `radius-xs`   |   4px | Small status elements       |
| `radius-sm`   |   8px | Inputs and compact controls |
| `radius-md`   |  12px | Buttons and small cards     |
| `radius-lg`   |  16px | Standard cards              |
| `radius-xl`   |  24px | Hero cards and major panels |
| `radius-full` | 999px | Pills and circular controls |

The default card radius is `16px`.

## 19.3 Shadows

```css
shadow-xs:
0 1px 2px rgba(18, 18, 18, 0.05)

shadow-sm:
0 4px 12px rgba(18, 18, 18, 0.06)

shadow-md:
0 12px 32px rgba(18, 18, 18, 0.08)

shadow-lg:
0 24px 64px rgba(18, 18, 18, 0.10)
```

Shadows should remain subtle.

Borders and spacing should create hierarchy before shadows.

---

# 20. Z-Index Scale

```text
z-base       = 0
z-raised     = 10
z-sticky     = 100
z-dropdown   = 200
z-overlay    = 300
z-modal      = 400
z-toast      = 500
z-critical   = 600
```

Avoid arbitrary z-index values.

---

# 21. Icon System

## 21.1 Approved V1 Icon System

```text
Lucide
```

Use one consistent icon family for standard interface icons.

Custom icons may be created for:

- Maternal intelligence
- Fetal growth intelligence
- Longitudinal timelines
- Patient-Provider collaboration
- ODRISC-specific clinical concepts

## 21.2 Icon Sizes

```text
icon-xs = 14px
icon-sm = 16px
icon-md = 20px
icon-lg = 24px
icon-xl = 32px
icon-2xl = 48px
```

## 21.3 Icon Rules

- Important icons require text labels
- Use consistent stroke widths
- Do not mix filled and outline families casually
- Avoid decorative icons inside every heading
- Mirror directional icons in RTL
- Do not mirror universal medical or media symbols without reason
- Clinical status icons must not rely on color alone

---

# 22. Image System

## 22.1 Photography Ratios

Preferred ratios:

- Hero landscape: `16:9`
- Editorial landscape: `3:2`
- Portrait: `4:5`
- Profile: `1:1`
- Wide narrative: `21:9`

## 22.2 Image Treatment

- Natural lighting
- Neutral or white environments
- Low visual clutter
- Controlled coral or mint accents only when authentic
- Respectful cropping
- Avoid overly warm lifestyle filters
- Do not apply heavy gradient overlays by default

## 22.3 Product Screens

Every product image must be labeled where necessary as:

- Current interface
- Prototype
- Concept
- In development

No real patient information may appear.

---

# 23. Illustration System

Illustrations should use:

- White or neutral backgrounds
- Fine neutral lines
- Controlled coral beginnings
- Mint progression or resolution
- Minimal fills
- Clear labels
- Limited visual depth

Illustration complexity levels:

1. **Simple icon illustration** — one concept
2. **Narrative diagram** — ordered progression
3. **System diagram** — multiple connected layers
4. **Clinical visualization** — data or methodology

Patient illustrations should favor levels 1 and 2.

Provider pages may use levels 2, 3, and 4.

---

# 24. Data-Visualization Palette

Brand colors should not carry clinical meaning without context.

## 24.1 Categorical Palette

| Series   | Color     |
| -------- | --------- |
| Series 1 | `#C8414E` |
| Series 2 | `#198661` |
| Series 3 | `#175CD3` |
| Series 4 | `#6941C6` |
| Series 5 | `#9A6500` |
| Series 6 | `#667085` |

## 24.2 Neutral Comparison

Use neutral gray for:

- Reference ranges
- Previous periods
- Inactive comparison
- Population context
- Missing or unavailable information

## 24.3 Brand Data Roles

Coral may represent:

- Maternal series
- Starting state
- Patient-entered progression

Mint-derived dark green may represent:

- Fetal or growth series
- Resolution
- Connected outcome

These associations are defaults, not universal clinical rules.

## 24.4 Chart Requirements

Every chart must include:

- Title
- Unit
- Time period
- Data source where relevant
- Legend or direct labels
- Accessible summary
- Missing-data state
- Appropriate uncertainty
- Standard or reference where applicable

---

# 25. Buttons

## 25.1 Primary Button

Default:

```text
Background: neutral-900
Text: neutral-0
Border: neutral-900
Radius: radius-md
```

Purpose:

- One primary action per page or section

## 25.2 Brand-Accent Button

Default:

```text
Background: neutral-0
Text: neutral-900
Border: gradient treatment or coral-300
```

Use for:

- Selected brand moments
- Audience selection
- Secondary Patient or Provider actions

Do not use gradient-filled buttons with low-contrast text.

## 25.3 Secondary Button

```text
Background: neutral-0
Text: neutral-800
Border: neutral-300
```

## 25.4 Tertiary Button

Text or icon-text action without a container.

## 25.5 Destructive Button

Uses semantic error colors.

It must not use brand coral as the sole destructive signal.

## 25.6 Button Sizes

| Size   | Height | Horizontal padding |
| ------ | -----: | -----------------: |
| Small  |   40px |               16px |
| Medium |   48px |               20px |
| Large  |   56px |               24px |

Minimum interactive target:

```text
44px × 44px
```

## 25.7 Button States

Required states:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success where appropriate

Loading states must preserve button width where practical.

---

# 26. Links

## 26.1 Inline Links

- Underline by default in long-form content
- Use descriptive text
- Provide visible focus
- Do not rely on color alone

## 26.2 Navigation Links

- Underline not required
- Active state must be visible
- Audience context must remain clear

## 26.3 External Links

External links may use an external-link icon when useful.

Screen-reader text should indicate when a new context opens.

---

# 27. Form Controls

## 27.1 Input Dimensions

```text
Default input height = 48px
Large input height   = 56px
Textarea minimum     = 120px
```

## 27.2 Input Styling

```text
Background: neutral-0
Border: neutral-300
Text: neutral-800
Radius: radius-sm
```

## 27.3 Labels

- Always visible
- Positioned above controls
- `14px` semibold
- Required state communicated in text
- Placeholder is not a label

## 27.4 Help Text

- `14px`
- Neutral secondary
- Explains format or purpose
- Must not contain critical information unavailable elsewhere

## 27.5 Error State

- Semantic error border
- Error icon
- Written explanation
- Programmatically associated with the field
- Error summary for multi-field forms

## 27.6 Success State

Use only when confirmation improves understanding.

Do not turn every valid field green.

## 27.7 Sensitive Information

Public forms must not encourage entry of:

- Medical history
- Symptoms
- Patient reports
- Identifiable clinical details
- Risk-assessment answers

---

# 28. Selection Controls

## 28.1 Checkboxes

Use for multiple selections.

## 28.2 Radio Buttons

Use for one selection from a visible set.

## 28.3 Switches

Use only for immediate binary settings.

Do not use switches for form submissions or irreversible decisions.

## 28.4 Select Menus

Use native or accessible custom selects.

Avoid select menus when fewer than five visible options would be clearer.

## 28.5 Audience Selection

The Patient and Provider gateway should use large selection cards rather than radio controls.

---

# 29. Cards

## 29.1 Standard Card

```text
Background: neutral-0
Border: neutral-200
Radius: radius-lg
Padding: 24–32px
Shadow: none or shadow-xs
```

## 29.2 Patient Card

May use:

- Coral-50 surface
- Coral-200 border
- Clear plain-language heading
- One simple illustration
- One next action

## 29.3 Provider Card

May use:

- Neutral or mint-50 surface
- More structured metadata
- Methodology or Product Status label
- Higher information density

## 29.4 Evidence Card

Must include:

- Evidence type
- Source
- Date
- What was evaluated
- Limitation

## 29.5 Capability Card

Must include:

- Capability name
- User need
- One-sentence explanation
- Product Status where material
- Relevant route

## 29.6 Metric Card

Must include:

- Metric label
- Value
- Unit
- Period
- Context
- Source where required

Avoid isolated large numbers with no explanation.

---

# 30. Navigation

## 30.1 Desktop Header

Recommended height:

```text
72px standard
80px for high-emphasis shared entry
```

Header includes:

- Logo
- Audience context
- Primary navigation
- Audience switch
- Login where available
- Primary CTA
- Language or market control where active

## 30.2 Sticky Behavior

The header may become sticky after scrolling.

Requirements:

- Must not obscure headings
- Must not consume excessive mobile space
- Must remain keyboard accessible
- Must not use heavy blur or glass effects
- Must respect reduced transparency where applicable

## 30.3 Mobile Navigation

- Full-height or near-full-height drawer
- Visible audience context
- Visible audience switch
- Primary CTA remains prominent
- Nested groups clearly labeled
- Escape and close controls supported
- Focus trapped while open
- Background scrolling disabled

## 30.4 Active State

Active navigation must use:

- Text weight
- Underline or indicator
- Accessible contrast

Do not rely on color alone.

---

# 31. Audience Switcher

The audience switcher must:

- Clearly identify the current experience
- Offer the alternate experience
- Remain available without authentication
- Work on mobile and desktop
- Route to an equivalent page where defined
- Avoid implying two separate products

Recommended labels:

```text
Patient
Healthcare Provider
```

Final visible wording remains subject to approved content decisions.

---

# 32. Breadcrumbs

Breadcrumbs should use:

- `14px` text
- Neutral secondary text
- Clear current-page state
- Accessible separators
- Horizontal scrolling only as a last resort on mobile

Do not truncate the current page label when it is essential for orientation.

---

# 33. Tabs

Use tabs when:

- Content belongs to one context
- Users benefit from comparing related views
- All tab labels are visible

Do not use tabs to hide essential narrative content.

Examples:

- Preconception / Pregnancy
- Patient / Provider explanation within a shared comparison
- Methodology categories

Requirements:

- Keyboard arrow navigation
- Visible selected state
- Programmatic relationships
- URL state only when deep linking adds value

---

# 34. Accordions

Use accordions for:

- FAQs
- Secondary methodology detail
- Optional evidence
- Legal or technical explanations

Do not place primary page arguments entirely inside accordions.

Accordion requirements:

- Button-based heading
- Visible expanded state
- Keyboard accessible
- Multiple-open behavior preferred for long FAQs
- Search engines and assistive technology must access the content

---

# 35. Badges and Labels

Approved badge categories:

- Product Status
- Audience
- Content type
- Market
- Language
- Validation type

Badges must:

- Remain short
- Use visible text
- Avoid excessive color
- Avoid pill overuse
- Never replace explanatory content

---

# 36. Alerts and Callouts

## 36.1 Informational Callout

Use `info` colors.

## 36.2 Success Callout

Use `success` colors.

## 36.3 Warning Callout

Use `warning` colors.

## 36.4 Error Callout

Use `error` colors.

## 36.5 Clinical Boundary Callout

Use a neutral or information style, not an alarm style, unless urgency is genuinely required.

Common boundary message:

> ODRISC supports healthcare professionals and does not replace clinical care.

## 36.6 Patient Safety Callout

Must be:

- Direct
- Visible
- Non-alarmist
- Market-appropriate
- Reviewed clinically

---

# 37. Tables

Tables are appropriate for:

- Provider comparison
- Product-status registers
- Methodology
- Evidence
- Pricing
- Clinical definitions
- Implementation details

Requirements:

- Header cells identified
- Caption or title provided
- Responsive strategy defined
- Units included
- Sorting only when useful
- No essential meaning conveyed only through cell color
- Sticky headers permitted for long tables
- Horizontal scrolling clearly indicated on small screens

Patient pages should use tables sparingly.

---

# 38. Timelines and Steppers

Timelines are core ODRISC components.

## 38.1 Narrative Timeline

Used for:

- Pregnancy story
- Product journey
- Fragmentation-to-intelligence transformation

## 38.2 Pregnancy Timeline

May show:

- Trimester
- Gestational age
- Maternal milestones
- Fetal milestones
- Appointments
- Data points

## 38.3 Workflow Stepper

Used for:

- Patient enrolment
- Provider review
- Demo process
- Pilot process

Requirements:

- Current step written explicitly
- Completed and upcoming states distinguished
- Vertical mobile layout
- Meaning beyond color
- No unsupported implication of clinical completion

---

# 39. Data Cards and Clinical Preview Components

Public Provider pages may preview clinical interfaces.

Approved preview component types:

- Patient list preview
- Maternal timeline preview
- Fetal growth chart preview
- Clinical summary preview
- Alert explanation preview
- Workflow preview

Every preview must state whether it is:

- Current
- Prototype
- Concept
- In development

No preview may contain identifiable patient data.

---

# 40. Modals and Dialogs

Use dialogs only when the task requires focused interruption.

Appropriate uses:

- Consent confirmation
- Short form confirmation
- Language or market clarification
- Video or product-preview expansion

Avoid using modals for:

- Long content
- Essential clinical explanations
- Full-page forms
- Repeated promotional messages

Requirements:

- Focus trap
- Escape support
- Visible close button
- Descriptive title
- Background inert
- Return focus after closing

---

# 41. Drawers

Drawers are appropriate for:

- Mobile navigation
- Filters
- Optional detail
- Contextual information

Drawers must not conceal critical safety information.

---

# 42. Tooltips

Use tooltips for short supplementary definitions.

Do not use tooltips for:

- Essential instructions
- Long clinical explanations
- Mobile-only content
- Safety information

Tooltips must work with:

- Keyboard
- Pointer
- Touch where practical
- Screen readers

---

# 43. Toasts and Notifications

Toasts may confirm:

- Form submission
- Copy action
- Saved preference
- Non-critical system state

Toasts must not communicate:

- Critical clinical warnings
- Important legal terms
- Form errors requiring action
- Product availability limitations

---

# 44. Empty, Loading, Error, and Success States

Every interactive feature must define:

- Loading
- Empty
- Partial data
- Error
- Success
- Offline or unavailable state where relevant

Tone must remain:

- Calm
- Specific
- Recovery-oriented
- Non-blaming

Avoid:

> Something went wrong.

Prefer:

> We could not submit your request. Your information has not been sent. Please try again or use the contact details below.

---

# 45. Patient Design Variant

The Patient experience should use:

- More open space
- Larger body text
- Simpler diagrams
- Fewer simultaneous metrics
- Coral-led accents
- Supportive illustrations
- Clear next actions
- More explanatory labels
- Lower information density
- Strong safety context

Patient pages should generally avoid:

- Dense tables
- Multiple data visualizations in one viewport
- Specialist terminology as primary labels
- Dashboard-style layouts
- Aggressive alert colors

---

# 46. Provider Design Variant

The Provider experience may use:

- Higher information density
- More structured grids
- Methodology labels
- Product Status badges
- Evidence cards
- Tables
- Charts
- Data-source labels
- Mint-led accents
- Neutral clinical surfaces
- Detail on demand

Provider density must not reduce:

- Readability
- Accessibility
- Trust
- Explanation
- Mobile usability

---

# 47. Shared Brand Connection

Patient and Provider experiences must share:

- Logo
- Typography
- Core colors
- Signature gradient
- Spacing system
- Radius system
- Button system
- Navigation logic
- Icon family
- Accessibility rules
- Motion principles
- Component foundations

They may differ in:

- Accent balance
- Density
- Diagram complexity
- Content hierarchy
- Page templates
- CTA language
- Evidence depth

---

# 48. Page Templates

## 48.1 Shared Entry Template

1. Minimal header
2. Foundational narrative
3. Audience-selection cards
4. Shared trust cue
5. Minimal footer

## 48.2 Patient Homepage Template

1. Patient hero
2. Recognition of need
3. Longitudinal problem
4. How ODRISC helps
5. Patient capability pathways
6. Collaboration
7. Safety and trust
8. FAQs
9. Final CTA

## 48.3 Provider Homepage Template

1. Clinical hero
2. Fragmentation problem
3. Longitudinal value
4. Platform layers
5. Monitoring and intelligence
6. Workflow
7. Validation and methodology
8. Security and trust
9. Final CTA

## 48.4 Capability Page Template

1. User or clinical need
2. Why it matters
3. ODRISC capability
4. How it works
5. Product Status
6. Evidence or professional context
7. Limitations
8. CTA

## 48.5 Trust Page Template

1. Trust question
2. Current status
3. Evidence categories
4. Method
5. Limitations
6. References
7. CTA

## 48.6 Conversion Page Template

1. Conversion purpose
2. Suitable visitor
3. What happens next
4. Form or action
5. Privacy and terms
6. Success and recovery states

---

# 49. Content-to-Design Rules

Design must not:

- Shorten content until clinical meaning changes
- Hide Product Status to improve visual simplicity
- Move limitations into inaccessible fine print
- Replace labels with icons
- Turn evidence into decorative statistics
- Present prototype interfaces as live
- Introduce a second CTA that competes with the approved primary CTA

Content and design must be reviewed together.

---

# 50. Accessibility Standard

The public website must target:

```text
WCAG 2.2 Level AA
```

This includes:

- Keyboard access
- Focus visibility
- Contrast
- Touch targets
- Semantic structure
- Form labeling
- Error identification
- Reduced motion
- Text scaling
- Non-color-dependent meaning
- Accessible names
- Screen-reader announcements

Automated testing alone is insufficient.

Manual review is required.

---

# 51. Focus System

Default focus ring:

```css
outline: 3px solid #175cd3;
outline-offset: 3px;
```

Requirements:

- Never remove focus without replacement
- Focus must remain visible against white and tinted surfaces
- Focus must not depend on shadow alone
- Focus order must follow reading order
- Skip links must be provided

---

# 52. Touch and Pointer Requirements

- Minimum interactive target: `44px × 44px`
- Minimum space between adjacent small targets: `8px`
- Hover must not be required for access
- Dragging must have an alternative
- Small chart points must have accessible selection alternatives
- Tooltips must not require precise pointer movement

---

# 53. Reduced Motion

The design system must support:

```css
@media (prefers-reduced-motion: reduce);
```

When reduced motion is active:

- Remove non-essential transitions
- Avoid parallax
- Avoid continuous motion
- Replace animated sequences with static progression
- Preserve content and state changes
- Keep focus and error feedback clear

Detailed rules belong in `ANIMATION_GUIDELINES.md`.

---

# 54. Arabic and RTL Design

## 54.1 Direction

Arabic pages must use:

```html
dir="rtl" lang="ar"
```

## 54.2 Layout

RTL implementation must:

- Mirror layout flow where appropriate
- Mirror directional navigation icons
- Preserve clinical chart direction when chronology requires left-to-right
- Keep numbers and units readable
- Support mixed-language clinical terminology
- Reassess alignment rather than mechanically flipping every element

## 54.3 Components

Every reusable component must be tested for:

- RTL text
- Long Arabic labels
- Arabic forms
- Arabic navigation
- Mixed Latin and Arabic data
- Tables
- Charts
- Accordions
- Modals
- Breadcrumbs

## 54.4 Typography

Arabic line height may require additional vertical spacing.

Do not force Arabic text into Latin line-height assumptions.

---

# 55. Localization and Content Expansion

Components must support:

- Labels 30–50% longer than English
- Multi-line button text only when unavoidable
- Longer navigation items
- Different date and number formats
- Currency differences
- Market-specific disclaimers
- Market-specific Product Status

Fixed-width text containers should be avoided.

---

# 56. Dark Mode

Dark mode is not part of the public website V1 design system.

Reasons:

- White is a foundational ODRISC brand surface
- Clinical and brand color validation is not yet complete for dark environments
- Arabic and data-visualization testing would require separate review

Dark mode may be evaluated later through a formal decision.

---

# 57. Component Naming

Component names should describe purpose.

Preferred:

```text
AudienceSelector
ProductStatusBadge
ClinicalBoundaryCallout
NarrativeTimeline
CapabilityCard
EvidenceCard
ProviderWorkflow
PatientJourney
```

Avoid:

```text
FancyCard
CoolSection
GradientThing
AIWidget
MagicPanel
```

Engineering naming must map back to documented design purpose.

---

# 58. Component Variants

Every component should minimize variants.

A variant is justified only when it changes:

- Audience need
- Semantic meaning
- Interaction
- Density
- Product Status
- Clinical context

Do not create variants only to match one mockup.

---

# 59. Component Documentation Requirements

Every reusable component must document:

- Purpose
- Supported contexts
- Anatomy
- Variants
- Sizes
- States
- Content rules
- Accessibility
- Responsive behavior
- RTL behavior
- Analytics where relevant
- Examples
- Prohibited use

Detailed component documentation belongs in:

`docs/engineering/COMPONENT_LIBRARY.md`

---

# 60. Design QA

Every page and component must be reviewed for:

## 60.1 Brand

- ODRISC identity
- Audience voice
- Color use
- Gradient restraint
- Negative space
- Visual consistency

## 60.2 Accessibility

- Contrast
- Keyboard
- Focus
- Touch targets
- Reduced motion
- Screen-reader meaning
- Chart alternatives

## 60.3 Responsive Behavior

- Mobile reading order
- Tablet layout
- Desktop hierarchy
- Long content
- Long labels
- Arabic expansion

## 60.4 Product Accuracy

- Product Status
- Validation status
- Current versus concept interfaces
- CTA availability
- Clinical boundaries

## 60.5 Technical Quality

- No layout shift
- Optimized media
- Consistent tokens
- No arbitrary values
- No inaccessible custom controls

---

# 61. Design-System Governance

## 61.1 Change Categories

### Patch

Examples:

- Minor token correction
- Documentation clarification
- Non-breaking accessibility improvement

### Minor

Examples:

- New component
- New approved variant
- New semantic token

### Major

Examples:

- New color system
- Typography replacement
- Breakpoint changes
- Major component API changes
- Separate audience brand expression

## 61.2 Change Requirements

Every material change requires:

1. Problem statement
2. Existing-system limitation
3. Proposed change
4. Audience impact
5. Accessibility impact
6. RTL impact
7. Engineering impact
8. Migration plan
9. Approval
10. Documentation update

---

# 62. Design-Token Governance

Tokens must not be changed only to make one page easier to design.

Before changing a token, evaluate:

- Every component using it
- Patient and Provider impact
- Accessibility
- English and Arabic
- Charts
- Print and presentation use
- Existing implementation
- Migration cost

Token changes must be recorded in a token changelog.

---

# 63. Design Rules for AI Agents

Before generating a page, component, interface, diagram, or visual system, AI agents must:

1. Read `docs/design/BRAND_FOUNDATION.md`.
2. Read `docs/design/DESIGN_SYSTEM.md`.
3. Identify the Page ID.
4. Identify the audience.
5. Identify the approved page template.
6. Identify relevant Product Status.
7. Use documented tokens.
8. Use existing components before creating new ones.
9. Preserve accessibility.
10. Preserve RTL readiness.
11. Label concept product visuals.
12. Check Animation Guidelines when motion is involved.

AI agents must not:

- Invent new colors
- Invent new spacing values
- Invent new radii
- Invent new typefaces
- Create a separate Patient design system
- Create a separate Provider design system
- Use inaccessible gradient text
- Use coral as an automatic error color
- Remove focus states
- create one-off components without documenting why
- Use generic AI imagery
- Treat screenshots as component specifications
- Add dark mode without approval
- Use hard-coded visual values where tokens exist

---

# 64. Locked Design-System Decisions

The following are approved V1 decisions:

1. Manrope is the primary Latin typeface.
2. Noto Sans Arabic is the primary Arabic typeface.
3. White remains the dominant background.
4. `#4D4D4D` remains the primary text color.
5. `#FF7680` remains the canonical coral.
6. `#80FFCC` remains the canonical mint.
7. The signature gradient is coral-dominant and resolves to mint.
8. The standard gradient direction is left to right in LTR contexts.
9. Brand colors are separate from semantic status colors.
10. Primary buttons use a dark neutral background for accessibility.
11. The spacing system uses a 4px base.
12. The standard content container is 1200px.
13. The standard text container is 720px.
14. Desktop uses a 12-column grid.
15. Tablet uses an 8-column grid.
16. Mobile uses a 4-column grid.
17. Default card radius is 16px.
18. Default input radius is 8px.
19. Lucide is the V1 interface icon system.
20. WCAG 2.2 Level AA is the public website target.
21. Minimum interactive targets are 44px by 44px.
22. Product Status and clinical risk use separate visual systems.
23. Patient pages use lower information density.
24. Provider pages may use higher information density.
25. Patient and Provider pages remain part of one visual system.
26. Arabic and RTL support are required.
27. Dark mode is not included in V1.
28. Motion must respect reduced-motion preferences.
29. Clinical meaning must not depend on color alone.
30. Public product previews must identify their implementation status.
31. New components require documentation.
32. Token changes require governance.

---

# 65. Remaining Design Questions

The following remain unresolved:

- What is the final approved ODRISC logo?
- Does ODRISC require a standalone brand symbol?
- What are the final logo clear-space and minimum-size rules?
- Which custom ODRISC icons require original design?
- What is the final photography sourcing policy?
- Which pages require commissioned photography?
- Which illustrations require a custom system?
- Which clinical charts appear in the public Provider release?
- Which Product Status badges appear publicly at launch?
- Which risk states are approved for public Patient display?
- Which components require formal usability testing?
- Which third-party charting implementation will be selected?
- Does the public website require print styles?
- Which Qatar pages launch simultaneously in English and Arabic?
- What date, number, and currency formats are canonical by market?
- Which product screenshots are current enough for publication?
- Who owns final design-system approval?
- Who owns token implementation and maintenance?
- Which design application will hold the editable component library?
- How will design-to-code synchronization be governed?

These questions must remain in:

`docs/project/OPEN_QUESTIONS.md`

---

# 66. Foundational Design-System Summary

The ODRISC Design System turns the brand idea of longitudinal clarity into a consistent interface language.

The system uses:

- White space for calm
- `#4D4D4D` for readable hierarchy
- Coral for human and maternal emphasis
- Mint for progression and connection
- A coral-to-mint gradient for narrative transformation
- Accessible neutral actions
- Structured typography
- Responsive grids
- Controlled clinical data visualization
- Patient-friendly simplicity
- Provider-appropriate depth
- Transparent Product Status
- Strong accessibility
- Arabic and right-to-left readiness

The visual progression remains:

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

Every page and component must make ODRISC feel calm, precise, human, clinical, and trustworthy without obscuring product maturity or clinical boundaries.

---

# 67. Motion Token Reference

## Motion Token Authority

The duration, easing, delay, distance, stagger, spring, reduced-motion, and animation-purpose rules are defined in:

`docs/design/ANIMATION_GUIDELINES.md`

Components must consume shared motion tokens rather than defining arbitrary animation values.

## Motion-language with approved V1 Decisions

Native scrolling
No scroll hijacking
Minimal route transitions
Reduced-motion support required
Patient motion lower density
Provider motion controlled and efficient

---

# 68. Design-System Implementation Stack

The public website implements the Design System through:

- Tailwind CSS 4
- CSS custom properties
- Typed token exports
- Radix Primitives where accessible behavior is complex
- Lucide React for standard icons
- ODRISC-owned components
- Storybook for component documentation
- Playwright and Axe for design and accessibility QA

The Technology Stack determines implementation technology. The Design System remains the authority for visual meaning and component behavior.

---

# 69. Component Implementation Mapping

The Design System defines visual and interaction requirements.

`docs/engineering/COMPONENT_LIBRARY.md` defines how those requirements are implemented through stable reusable component contracts.

A component implementation must not introduce a visual variant that is absent from the Design System or an approved component specification.
