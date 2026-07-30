# ODRISC Animation Guidelines

## Document Status

**Document:** Animation Guidelines
**Status:** Foundational
**Version:** 1.0
**Authority:** Canonical motion, transition, feedback, and animation specification
**Website:** `odrisc.com`
**Product identity:** Maternal and fetal intelligence platform
**Primary audiences:** Patients and healthcare providers
**Commercial priority market:** Qatar
**Validation and development context:** India
**Document owner:** Founder and CEO
**Motion-design owner:** To be assigned
**Approval authority:** Founder with designated product, design, accessibility, clinical, localization, content, and engineering reviewers

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
- `docs/product/REQUIREMENTS_TRACEABILITY.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/BRAND_ASSET_REGISTER.md`
- `docs/design/BRAND_REVIEW_CHECKLIST.md`
- `docs/design/DESIGN_QA_CHECKLIST.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/engineering/COMPONENT_LIBRARY.md`
- `ai/rules/NON_NEGOTIABLES.md`
- `ai/rules/AI_BEHAVIOR.md`

---

# 1. Purpose

This document defines how motion must be used across the ODRISC public website.

It governs:

- Motion principles
- Animation tokens
- Duration
- Delay
- Easing
- Scroll-triggered animation
- Page-entry animation
- Narrative animation
- Audience-selection motion
- Timeline animation
- Data-visualization motion
- Component transitions
- Navigation motion
- Form feedback
- Loading states
- Success and error feedback
- Patient and Provider motion density
- Mobile behavior
- Performance
- Reduced-motion alternatives
- Arabic and right-to-left behavior
- Motion testing
- Motion governance
- AI-generated animation

Motion must help visitors understand:

- Progression
- Connection
- Transformation
- Hierarchy
- State
- Cause and effect

Motion must not exist merely to make ODRISC appear technologically advanced.

---

# 2. Scope

These guidelines apply to:

- The shared audience-entry experience
- Patient pages
- Provider pages
- Institutional pages
- Resource pages
- Company pages
- Navigation
- Forms
- Product previews
- Charts
- Timelines
- Illustrations
- Diagrams
- Loading and feedback states
- Responsive website components

These guidelines do not fully define:

- Patient-application motion
- Provider-dashboard motion
- Clinical-alert escalation behavior
- Native mobile application animation
- Operating-system notifications
- Video-production standards
- Presentation-slide animation
- Medical-device alarm behavior

Those systems require separate specifications.

---

# 3. Motion Objective

The ODRISC motion system should make the website feel:

- Calm
- Precise
- Continuous
- Connected
- Responsive
- Human
- Clinically responsible
- Premium without being theatrical

The central motion idea is:

> Fragmented information gradually becoming a connected longitudinal story.

The primary motion progression is:

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

---

# 4. Motion Principles

## 4.1 Motion Must Explain

Every meaningful animation must answer at least one question:

- What changed?
- Where did this element come from?
- What is connected?
- What should I notice?
- What action succeeded?
- What state is now active?
- How is information progressing over time?

Motion without explanatory value should be removed.

## 4.2 Content Must Exist Before Motion

Essential content must not depend on animation completing.

Visitors must be able to:

- Read the content immediately
- Navigate without waiting
- Access CTAs without animation
- Understand the page with motion disabled
- use the website with reduced motion

## 4.3 Calm Before Spectacle

ODRISC motion must remain restrained.

Motion should not feel:

- Cinematic for its own sake
- Playful
- Gamified
- Futuristic
- Aggressive
- Alarmist
- Constant
- Distracting

## 4.4 Progression Before Decoration

Motion should favor:

- Lines extending
- Data points becoming connected
- Timelines progressing
- Relationships being revealed
- Layers becoming organized
- State changes being confirmed

Avoid arbitrary floating, bouncing, spinning, or pulsing.

## 4.5 One Motion Idea Per Section

A section should normally contain one dominant motion concept.

Avoid combining:

- Parallax
- Text reveal
- Card stagger
- Line drawing
- Number counting
- Background movement

within the same viewport unless each element is necessary.

## 4.6 Motion Must Preserve Clinical Meaning

Animation must not:

- Change the apparent clinical value
- Suggest a trend that the data does not support
- Conceal uncertainty
- Smooth clinically relevant variation without explanation
- Make a risk state appear more or less serious
- Imply real-time monitoring when data is static
- Suggest automatic diagnosis

## 4.7 Motion Must Remain Reversible and Predictable

Interactive motion should follow the user's action.

Examples:

- A drawer opens from the edge where it is anchored
- An accordion expands beneath its heading
- A selected tab indicator moves toward the selected tab
- A modal emerges from the interface layer

Motion must not cause unexpected repositioning.

---

# 5. Motion Categories

The ODRISC motion system uses six categories.

## 5.1 Orientation Motion

Helps users understand:

- Page entry
- Navigation
- Audience context
- Component opening
- Layer hierarchy

Examples:

- Mobile menu opening
- Audience switch
- Modal appearance
- Breadcrumb-context transition

## 5.2 Narrative Motion

Explains the ODRISC website story.

Examples:

- Fragmented information connecting
- Pregnancy timeline progressing
- Maternal and fetal streams aligning
- Data becoming longitudinal intelligence

## 5.3 Interaction Motion

Responds directly to user action.

Examples:

- Button press
- Tab change
- Accordion expansion
- Form-control selection
- Tooltip appearance

## 5.4 Feedback Motion

Confirms system state.

Examples:

- Form submission
- Loading
- Success
- Error
- Saved preference
- Failed handoff

## 5.5 Data Motion

Explains change in data or visualization.

Examples:

- Chart line reveal
- Data-point comparison
- Timeline progression
- Selected-series emphasis
- Filter transition

## 5.6 Ambient Motion

Low-priority decorative motion.

Ambient motion is generally discouraged.

It may be used only when:

- It is extremely subtle
- It does not repeat aggressively
- It has no accessibility cost
- It does not impair performance
- It reinforces progression or connection

---

# 6. Motion Token Architecture

Motion values must use named tokens.

Recommended token groups:

```text
od.motion.duration.*
od.motion.delay.*
od.motion.ease.*
od.motion.distance.*
od.motion.opacity.*
od.motion.stagger.*
od.motion.spring.*
```

Recommended CSS-token examples:

```text
--od-motion-duration-instant
--od-motion-duration-fast
--od-motion-duration-standard
--od-motion-ease-standard
--od-motion-distance-sm
```

Components must not introduce arbitrary motion values when an approved token exists.

---

# 7. Duration Tokens

| Token       | Duration | Use                                           |
| ----------- | -------: | --------------------------------------------- |
| `instant`   |      0ms | Reduced-motion replacement or immediate state |
| `micro`     |    100ms | Press, hover, focus reinforcement             |
| `fast`      |    160ms | Tooltip, small icon, compact control          |
| `standard`  |    240ms | Button, input, tab, accordion                 |
| `moderate`  |    360ms | Card entry, drawer, modal                     |
| `narrative` |    600ms | Section-level explanation                     |
| `extended`  |    900ms | Controlled timeline or diagram sequence       |
| `maximum`   |   1200ms | Rare hero-level story animation               |

## 7.1 Duration Rules

- Most interface transitions should use `160–240ms`
- Most component openings should use `240–360ms`
- Narrative animation should normally use `600–900ms`
- Individual animations should rarely exceed `1200ms`
- A user should never need to wait for an animation before acting
- Repeated UI interactions should become faster than first-entry narrative motion

---

# 8. Easing Tokens

## 8.1 Standard Ease

```css
cubic-bezier(0.2, 0, 0, 1)
```

Token:

```text
od.motion.ease.standard
```

Use for:

- General component transitions
- Accordion expansion
- Section reveals
- Card movement

## 8.2 Enter Ease

```css
cubic-bezier(0, 0, 0.2, 1)
```

Token:

```text
od.motion.ease.enter
```

Use for:

- Modal entry
- Drawer entry
- Tooltip entry
- Element appearance

## 8.3 Exit Ease

```css
cubic-bezier(0.4, 0, 1, 1)
```

Token:

```text
od.motion.ease.exit
```

Use for:

- Modal exit
- Drawer exit
- Dismissal
- Removal

Exit motion should normally be faster than entry motion.

## 8.4 Emphasis Ease

```css
cubic-bezier(0.16, 1, 0.3, 1)
```

Token:

```text
od.motion.ease.emphasis
```

Use sparingly for:

- Hero connection
- Major narrative resolution
- Final timeline alignment

## 8.5 Linear Motion

Linear easing may be used for:

- Determinate progress
- Continuous data playback
- Mechanical progression where constant speed is meaningful

Linear easing must not be used for general UI entry.

---

# 9. Spring Motion

Spring animation may be used only for direct interaction feedback.

Recommended controlled spring:

```text
stiffness: 320
damping: 30
mass: 0.8
```

Appropriate uses:

- Small audience-card emphasis
- Toggle thumb
- Drag release where dragging is approved
- Button press recovery

Avoid:

- Visible bouncing
- Overshoot in clinical content
- Spring motion in alerts
- Spring motion for page sections
- Spring motion in Patient safety content

---

# 10. Distance Tokens

| Token         | Distance |
| ------------- | -------: |
| `distance-xs` |      4px |
| `distance-sm` |      8px |
| `distance-md` |     16px |
| `distance-lg` |     24px |
| `distance-xl` |     40px |

General reveal motion should normally use:

```text
8–24px
```

Avoid large 80–200px entrance movements.

Large movement can:

- Disrupt reading
- Create visual instability
- Increase motion sensitivity
- Make the interface feel theatrical

---

# 11. Opacity Rules

Entry opacity should normally begin at:

```text
0.88–0.96
```

for ordinary content reveals.

Full fade from `0` should be reserved for:

- Overlay layers
- Modals
- Illustrative elements
- Non-essential supporting visuals

Body text should not remain invisible while waiting for scroll activation.

---

# 12. Stagger Tokens

| Token               | Delay |
| ------------------- | ----: |
| `stagger-tight`     |  30ms |
| `stagger-standard`  |  60ms |
| `stagger-relaxed`   | 100ms |
| `stagger-narrative` | 140ms |

Rules:

- Use a maximum of five staggered items per sequence
- Large lists must not animate item by item
- Navigation menus should use little or no stagger
- Patient capability cards may use a short, calm stagger
- Provider tables and lists should normally appear immediately

---

# 13. Delay Rules

Intentional delays should be limited.

Maximum recommended delay before visible motion:

```text
200ms
```

Avoid delays that:

- Hold back essential content
- Make the website feel unresponsive
- Depend on users watching a full sequence
- Accumulate across many elements

---

# 14. Initial Page Load

## 14.1 Default Behavior

Pages should render their essential content immediately.

Permitted initial-load motion:

- Header opacity transition
- Hero illustration assembly
- Short headline supporting-line reveal
- Audience-selection-card emphasis

## 14.2 Prohibited Initial-Load Behavior

Do not use:

- Loading screens for ordinary pages
- Logo intro sequences
- Full-screen brand animation
- Scroll lock during entry
- Delayed navigation
- Delayed CTA appearance
- Long typewriter effects
- Video autoplay with sound

---

# 15. Route Transitions

The public website should not use elaborate route transitions by default.

Recommended behavior:

- Immediate route change
- Browser-native scroll restoration
- Short content opacity transition only when technically reliable
- Clear focus movement to the new page heading

Route transitions must not:

- Intercept browser navigation
- delay page rendering
- interfere with deep links
- conceal loading failures
- create scroll-position confusion
- prevent screen-reader announcements

Shared-element transitions may be evaluated later but are not required for V1.

---

# 16. Scroll Behavior

## 16.1 Native Scrolling

The website must use native scrolling.

## 16.2 Scroll Hijacking

Scroll hijacking is prohibited.

Do not:

- Force one viewport per wheel event
- lock scrolling to an animation timeline
- convert vertical scroll into horizontal movement
- require visitors to complete animation sequences
- change scroll speed
- trap visitors in pinned sections

## 16.3 Sticky Sections

Sticky sections may be used for:

- Short narrative comparison
- Timeline explanation
- Provider methodology diagram
- Patient-Provider relationship

Requirements:

- The section must remain short
- Mobile must receive a non-sticky alternative
- Keyboard navigation must remain predictable
- Reduced-motion users must receive a static layout
- The pinned area must not prevent normal scrolling

---

# 17. Scroll-Triggered Reveals

Scroll-triggered reveals may use:

```text
Opacity: 0.92 → 1
Translate Y: 16px → 0
Duration: 360–600ms
Ease: standard
```

Requirements:

- Trigger once by default
- Content remains available without JavaScript
- Trigger before the element reaches the center of the viewport
- Avoid repeatedly animating when scrolling up and down
- Avoid animating every paragraph
- Do not apply reveals to long clinical tables

Recommended trigger threshold:

```text
10–20% of the element entering the viewport
```

---

# 18. Foundational Hero Animation

## 18.1 Purpose

The hero animation should introduce ODRISC's central story:

> Separate pregnancy information becoming connected across time.

## 18.2 Recommended Sequence

1. A small number of independent maternal and fetal information points appear
2. A restrained longitudinal line connects them
3. The connected line progresses across the pregnancy journey
4. Patient and Provider perspectives become visible
5. The final state resolves into one connected ODRISC intelligence layer

## 18.3 Duration

Total hero sequence:

```text
900–1200ms
```

The CTA and headline must remain available immediately.

## 18.4 Visual Restraint

Use:

- Thin lines
- Small data nodes
- Controlled coral-to-mint transition
- Subtle opacity
- Limited depth

Avoid:

- Glowing effects
- Neural networks
- Futuristic particles
- Simulated medical alarms
- Floating dashboards
- Constant looping

## 18.5 Looping

The full hero sequence should normally play once.

After completion, the illustration should remain static.

A very subtle non-essential pulse may be used only if:

- It does not resemble a clinical alert
- It stops under reduced motion
- It does not impair battery or performance

---

# 19. Fragmentation-to-Connection Animation

This is the primary ODRISC narrative animation.

## 19.1 Starting State

Display a small number of separated information elements, such as:

- Weight record
- Ultrasound measurement
- Risk factor
- Nutrition observation
- Patient-reported information
- Clinical review

## 19.2 Transition

The elements should:

- Align gradually
- Connect to a shared timeline
- Maintain their identity
- Avoid appearing to merge into an unexplained black box

## 19.3 Final State

The final state should communicate:

- Organization
- Longitudinal relationship
- Patient and Provider visibility
- Explainable intelligence

## 19.4 Prohibited Meaning

The sequence must not imply:

- Automatic diagnosis
- Guaranteed recognition
- Real-time integration
- Complete data capture
- All features currently being available

Product-status wording should accompany conceptual animation where relevant.

---

# 20. Formal Value-Chain Animation

The approved value chain is:

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

## 20.1 Animation Behavior

- Reveal one stage at a time
- Draw connectors in reading order
- Keep all previous stages visible
- Do not animate the outcome as guaranteed completion
- Add supporting language that the chain represents intended product value

## 20.2 Duration

Recommended:

```text
Stage reveal: 240–360ms
Connector reveal: 160–240ms
Stagger: 100–140ms
```

## 20.3 Reduced Motion

Display the complete chain immediately.

---

# 21. Shared Audience-Gateway Motion

The Patient and Healthcare Provider choices must have equal visual importance.

## 21.1 Default State

Both audience cards should be:

- Visible
- Fully readable
- Equally sized
- Keyboard accessible

## 21.2 Hover and Focus

Permitted response:

- Border emphasis
- 2–4px upward movement
- Slight surface shift
- Arrow movement of 4px
- Illustration emphasis

Duration:

```text
160–240ms
```

## 21.3 Selection

On selection:

- Confirm the selected audience
- Begin navigation immediately
- Avoid a long card-expansion transition
- Preserve accessibility announcements

## 21.4 Prohibited Behavior

- One card auto-animating more strongly
- Automatic audience selection
- Continuous floating
- Cards moving away from the pointer
- Selection based only on hover
- Different motion quality that suggests one audience is secondary

---

# 22. Patient Motion Variant

Patient motion should be:

- Slower
- Simpler
- More guided
- Less dense
- Calm
- Reassuring

Recommended characteristics:

- Fewer simultaneous moving elements
- Clear sequential reveals
- Larger pauses between narrative steps
- Minimal chart animation
- Strong text explanation
- Reduced use of hover-dependent behavior

Patient motion should not:

- Simulate clinical urgency
- Flash risk colors
- Use celebratory confetti
- Gamify weight progress
- Animate failure states aggressively
- Create anxiety through constant monitoring cues

---

# 23. Provider Motion Variant

Provider motion may be:

- More compact
- More information-dense
- Faster
- More interaction-led
- Focused on comparison and relationships

Appropriate Provider motion:

- Data-series emphasis
- Layer filtering
- Methodology-step transitions
- Timeline comparison
- Product-workflow reveal
- Detail-on-demand

Provider motion must not:

- Make evidence appear stronger
- exaggerate trends
- hide missing data
- imply live monitoring
- create dashboard spectacle
- animate every metric

---

# 24. Timeline Animation

Timelines are core ODRISC motion components.

## 24.1 Narrative Timeline

Use for:

- Pregnancy journey
- Product journey
- Data-to-intelligence story
- Patient-Provider collaboration

Recommended animation:

- Progress line extends
- Milestones become active in sequence
- Supporting content appears near the active milestone

## 24.2 Clinical Timeline Preview

Use for Provider product previews.

Requirements:

- Dates and gestational ages remain visible
- Data points do not move from their true position
- Missing data remains visually missing
- Hover or focus may reveal detail
- Animation must not imply newly arriving real-time data

## 24.3 Mobile

Timelines should normally become vertical on mobile.

Horizontal timeline scrolling should be used only when:

- Labels remain readable
- Swipe is not the only control
- Keyboard controls exist
- The chronology remains clear

---

# 25. Data-Visualization Animation

## 25.1 Chart Entry

Permitted:

- Line draws from earliest to latest point
- Bars grow from the true baseline
- Data points fade in
- Reference range appears before patient series
- Selected series becomes emphasized

## 25.2 Chart Duration

Recommended:

```text
400–800ms
```

## 25.3 Chart Integrity

Chart animation must:

- Preserve scale
- Preserve baseline
- Preserve chronology
- Avoid overshoot
- Avoid bouncing data points
- Avoid smoothing not present in the data
- Avoid hiding negative or adverse values
- Avoid auto-playing repeatedly

## 25.4 Numeric Counting

Animated counting may be used for:

- Non-clinical company metrics
- Rounded market summaries
- High-level platform quantities

Do not use counting animation for:

- Clinical measurements
- Risk percentages
- Patient values
- Validation results
- Pricing
- Exact medical statistics

Exact values should appear immediately.

## 25.5 Filter Transitions

When chart filters change:

- Preserve axes when comparison matters
- Animate opacity rather than repositioning aggressively
- Announce updated content to assistive technology
- Provide a non-animated reduced-motion state

---

# 26. Product-Preview Motion

Product previews may animate:

- Timeline progression
- Tab changes
- Information-layer selection
- Report-to-structured-data concept
- Patient-to-Provider handoff
- Summary generation

Each preview must state whether it is:

- Current
- Prototype
- Concept
- In development

Animations must not make concept functionality appear operational.

---

# 27. OCR and Report-Extraction Animation

Where report extraction is discussed, a conceptual sequence may show:

```text
Report
→
Field recognition
→
Structured values
→
Human confirmation
→
Longitudinal timeline
```

The sequence must explicitly preserve:

- Human verification
- Data-validation step
- Error possibility
- Product-status label

Avoid:

- Instant flawless scanning
- Automated clinical interpretation
- Report values entering the clinical record without review
- Artificial scanning lasers

---

# 28. Navigation Motion

## 28.1 Desktop Navigation

Permitted:

- Active underline transition
- Dropdown fade and short vertical shift
- CTA hover response

Recommended dropdown:

```text
Opacity: 0 → 1
Translate Y: 8px → 0
Duration: 160–240ms
```

## 28.2 Mobile Navigation

Recommended:

```text
Drawer translation: 100% → 0
Duration: 280–360ms
Ease: enter
```

Requirements:

- Focus enters the drawer
- Background becomes inert
- Motion reverses on close
- reduced-motion mode uses immediate appearance
- opening does not move underlying page content

## 28.3 Sticky Header

Header size changes should be minimal.

Avoid dramatic header compression.

---

# 29. Audience-Switch Motion

The audience switch should:

- Confirm the alternate audience
- Navigate promptly
- Avoid morphing the entire website before route change
- Preserve orientation through consistent header structure

Where equivalent pages exist, a short crossfade may be used.

Maximum duration:

```text
240ms
```

---

# 30. Button Motion

## 30.1 Hover

Permitted:

- Background shift
- Border shift
- Arrow translation of 4px
- Elevation change using `shadow-xs`
- Scale up to a maximum of `1.01`

## 30.2 Active

Permitted:

```text
Scale: 0.98–0.99
Duration: 100ms
```

## 30.3 Loading

Loading state must:

- Preserve button dimensions
- Show a visible progress indicator
- Retain or replace the label clearly
- Prevent duplicate submission
- Announce loading state

Avoid indefinite spinners without explanation.

## 30.4 Success

For form submission, the button may briefly transition to a success state before the confirmation message appears.

Do not use celebratory animation.

---

# 31. Link Motion

Inline links may animate:

- Underline thickness
- Underline offset
- Arrow movement

Avoid:

- Text jumping
- Large horizontal shifts
- color-only hover
- underline animations that reduce readability

---

# 32. Card Motion

Cards may use:

```text
Translate Y: 0 → -4px
Border: subtle → emphasized
Shadow: none → shadow-xs
Duration: 160–240ms
```

Cards should not:

- Tilt
- rotate
- use 3D perspective
- continuously float
- scale beyond `1.01`
- shift surrounding layout

Clinical evidence and validation cards should remain particularly stable.

---

# 33. Accordion Motion

Recommended:

- Height or grid-row expansion
- Content opacity transition
- Chevron rotation

Duration:

```text
200–280ms
```

Requirements:

- State changes immediately for assistive technology
- Essential content remains accessible
- Motion does not delay keyboard interaction
- Reduced-motion mode opens instantly

---

# 34. Tab Motion

Permitted:

- Selected indicator movement
- Short content fade
- Minimal horizontal transition where direction is meaningful

Duration:

```text
160–240ms
```

Avoid large content slides that may be mistaken for route changes.

---

# 35. Modal Motion

Entry:

```text
Overlay opacity: 0 → 1
Panel opacity: 0 → 1
Panel scale: 0.98 → 1
Duration: 240–320ms
```

Exit:

```text
Duration: 160–240ms
```

Requirements:

- Focus management is immediate
- Content is not delayed
- reduced-motion mode removes scaling
- modal motion must not resemble zooming into clinical imagery

---

# 36. Tooltip Motion

Recommended:

```text
Opacity: 0 → 1
Translate: 4px → 0
Duration: 100–160ms
```

Tooltips must not contain essential safety or clinical information.

---

# 37. Form Motion

## 37.1 Validation

Use:

- Border change
- Error-icon appearance
- Short message reveal
- Focus movement to error summary on submission

Avoid:

- Shaking fields
- Flashing
- bouncing
- red pulsing

## 37.2 Success

Use:

- Calm confirmation icon
- Short opacity transition
- Clear next step

## 37.3 Multi-Step Forms

Step transitions should:

- Preserve progress context
- Keep completed information accessible
- Use a maximum of 240ms
- move in a direction consistent with progression
- work without animation

---

# 38. Loading Motion

## 38.1 Preferred Loading Strategy

Use:

- Immediate page structure
- Skeletons for known content shapes
- Determinate progress when progress is measurable
- Static fallback after a reasonable period

## 38.2 Skeletons

Skeletons must:

- Match the expected layout
- Avoid strong shimmer
- stop under reduced motion
- not continue indefinitely
- avoid suggesting real patient data

A subtle opacity pulse may be used.

## 38.3 Spinners

Use for:

- Short unknown waits
- Button submission
- Small component loading

Do not use spinners as the only explanation for long processes.

---

# 39. Success Feedback

Success motion should communicate completion without gamification.

Appropriate:

- Check icon drawing once
- Message fade-in
- Progress step becoming complete
- Calm color transition

Avoid:

- Confetti
- fireworks
- bouncing icons
- loud sound
- gamified health rewards
- celebratory motion for clinical risk results

---

# 40. Error Feedback

Error motion must be:

- Direct
- Stable
- Specific
- recovery-oriented

Use:

- Error message appearance
- focus movement
- semantic color
- clear icon

Avoid:

- Shake animation
- repeated pulsing
- dramatic red expansion
- alarm sound
- animated warning borders

---

# 41. Clinical-Risk Motion

Clinical-risk states should normally be static.

Permitted motion:

- One-time state reveal
- Expanding explanation
- Focus transition
- clear escalation pathway

Prohibited:

- Blinking
- pulsing red
- heartbeat animation
- siren-like motion
- countdown
- repeated vibration
- urgent animation without clinical necessity

The website must not simulate a regulated medical alarm system.

---

# 42. Product-Status Motion

Product-status badges should be static.

Status changes during filtering may use a short fade.

Do not animate:

- Pilot
- In validation
- In development
- Planned

in ways that suggest progress toward availability unless actual progress data is being shown.

---

# 43. Motion and Sound

The public website must not use automatic sound.

Sound may only be considered for:

- User-initiated video
- User-controlled educational media
- Future accessibility-supported functionality

Sound must never be required to understand a state.

---

# 44. Video and Animated Media

## 44.1 Autoplay

Autoplay video should generally be avoided.

When used:

- Muted
- No essential spoken information
- Pausable
- No rapid movement
- Optimized
- reduced-motion alternative provided

## 44.2 Animated GIFs

Avoid animated GIFs.

Prefer:

- HTML/CSS
- SVG
- Canvas where justified
- Optimized video
- Lottie only when approved

GIFs often create:

- Large files
- poor controls
- inaccessible loops
- reduced-motion problems

## 44.3 Lottie

Lottie may be used only when:

- File size is justified
- Motion is not essential
- Reduced-motion alternative exists
- Animation does not contain inaccessible embedded text
- Source and license are approved

---

# 45. Performance Requirements

## 45.1 Preferred Animation Properties

Prefer:

- `transform`
- `opacity`

Avoid animating:

- `width`
- `height`, where a performant alternative exists
- `top`
- `left`
- `box-shadow` at high frequency
- large filters
- background blur
- layout-heavy properties

## 45.2 Frame Rate

Motion should target smooth rendering without requiring high-end hardware.

## 45.3 Mobile Priority

Motion must be tested on:

- Mid-range mobile devices
- Mobile networks
- Lower-power modes
- Safari on iOS
- Chrome on Android

## 45.4 Animation Budget

Recommended page limits:

- One major narrative animation above the fold
- No more than two additional section-level sequences per page
- Microinteractions as needed
- No continuous full-page ambient animation

## 45.5 Bundle Impact

The motion library and animated assets must not create unjustified bundle growth.

Animation must not require loading large libraries for a single effect.

---

# 46. JavaScript Resilience

Essential content and actions must remain available when:

- JavaScript is delayed
- Motion library fails
- Intersection Observer is unavailable
- Browser performance is constrained
- Reduced motion is enabled

Animation is an enhancement.

It is not the content delivery mechanism.

---

# 47. Reduced Motion

The website must support:

```css
@media (prefers-reduced-motion: reduce);
```

## 47.1 Reduced-Motion Default

When reduced motion is requested:

- Set non-essential durations to `0–100ms`
- Remove parallax
- Remove stagger
- Remove line-drawing sequences
- Remove scale and large translation
- Stop looping animation
- Display final illustration state
- Preserve opacity only where necessary for state clarity

## 47.2 Content Equivalence

Reduced-motion users must receive:

- The same content
- The same hierarchy
- The same data
- The same CTA
- The same validation information
- The same success and error feedback

## 47.3 Manual Motion Control

Long or user-initiated animations should provide:

- Pause
- Replay where meaningful
- Static alternative where needed

---

# 48. Vestibular-Safety Rules

Avoid:

- Full-screen zooming
- large background movement
- rotational motion
- rapid parallax
- perspective shifts
- moving patterns
- repeated diagonal movement
- fast scale changes
- simultaneous motion across the viewport

Movement over 40px should be rare and carefully reviewed.

---

# 49. Mobile Motion

Mobile motion should be simpler than desktop motion.

Requirements:

- Reduce simultaneous animated elements
- Avoid hover-dependent meaning
- Avoid pinned narrative sections
- Use vertical timeline movement
- Reduce distance
- Reduce duration where interaction speed matters
- Preserve battery and data usage
- Avoid videos as essential content

---

# 50. Arabic and RTL Motion

Motion direction must follow meaning, not mechanical mirroring.

## 50.1 Interface Direction

Mirror where appropriate:

- Drawer direction
- Navigation chevrons
- Next and previous controls
- Inline directional arrows
- Audience-menu expansion

## 50.2 Chronological Direction

Clinical and pregnancy timelines may remain left-to-right when:

- Chronology is conventionally represented that way
- Mixed numerical data requires it
- clinical review confirms clarity

The surrounding labels and reading order must still support RTL.

## 50.3 Gradient Direction

The signature gradient may be mirrored in Arabic narrative contexts where it represents reading progression.

It should not be mirrored when coral and mint have a fixed semantic role within a specific diagram.

## 50.4 Testing

Every animated component must be reviewed for:

- RTL entry and exit direction
- Arabic label length
- Mixed Arabic and English content
- Number and unit orientation
- Chart progression
- reduced motion

---

# 51. Motion Accessibility

Every animated interaction must support:

- Keyboard use
- Screen-reader state announcements
- Focus continuity
- Pause where necessary
- Reduced motion
- No flashing
- No color-only state
- No motion-only meaning

Content revealed by animation must exist in the accessibility tree at the appropriate time.

---

# 52. Implementation Guidance

These guidelines are implementation-neutral.

Where the website uses React, a component motion library such as Motion may be used, subject to the approved Technical Stack.

Implementation must:

- Centralize motion tokens
- Avoid inline arbitrary values
- Use shared motion utilities
- respect reduced motion globally
- avoid duplicate viewport observers
- clean up listeners
- avoid layout thrashing
- support server rendering
- preserve semantic HTML

---

# 53. Suggested Motion Primitives

The engineering Component Library may define reusable primitives such as:

```text
MotionFade
MotionReveal
MotionStagger
MotionDrawer
MotionDialog
MotionAccordion
MotionTimeline
MotionLineDraw
MotionDataSeries
ReducedMotionBoundary
```

Names may vary, but behavior must map to documented motion purposes.

Do not create a separate animation implementation for each page.

---

# 54. Motion Specification Requirements

Every major animated feature must document:

- Motion ID
- Page ID
- Purpose
- Trigger
- Starting state
- Ending state
- Duration
- Easing
- Delay
- Responsive behavior
- Reduced-motion alternative
- Accessibility behavior
- Performance considerations
- Product-status implications
- Test cases
- Owner

---

# 55. Motion IDs

Recommended identifier pattern:

```text
MOT-SHR-001
MOT-PAT-001
MOT-PRO-001
MOT-CMP-001
```

Prefixes:

| Prefix    | Meaning                            |
| --------- | ---------------------------------- |
| `MOT-SHR` | Shared narrative or gateway motion |
| `MOT-PAT` | Patient-specific motion            |
| `MOT-PRO` | Provider-specific motion           |
| `MOT-CMP` | Reusable component motion          |
| `MOT-DAT` | Data-visualization motion          |
| `MOT-FDB` | Feedback motion                    |

Motion IDs should remain stable if visual implementation changes.

---

# 56. Recommended Initial Motion Inventory

## MOT-SHR-001 — Shared Hero Connection

Purpose:

- Introduce fragmented information becoming connected

Status:

- Approved in principle

Reduced-motion state:

- Final connected illustration displayed immediately

## MOT-SHR-002 — Audience Card Interaction

Purpose:

- Reinforce equal Patient and Provider selections

Status:

- Approved

## MOT-PAT-001 — Patient Journey Timeline

Purpose:

- Explain pregnancy progression in a calm sequence

Status:

- Conditional by page design

## MOT-PRO-001 — Clinical Data-to-Intelligence Flow

Purpose:

- Explain Provider platform logic

Status:

- Approved in principle

## MOT-PRO-002 — Provider Workflow Sequence

Purpose:

- Explain Patient onboarding, data capture, review, and action

Status:

- Approved in principle

## MOT-DAT-001 — Longitudinal Line Reveal

Purpose:

- Explain trajectory across time

Status:

- Approved with clinical-integrity review

## MOT-CMP-001 — Accordion Transition

Purpose:

- Reveal optional information

Status:

- Approved

## MOT-CMP-002 — Mobile Navigation Drawer

Purpose:

- Preserve orientation on mobile

Status:

- Approved

## MOT-FDB-001 — Form Submission Feedback

Purpose:

- Communicate loading, success, and failure

Status:

- Approved

---

# 57. Motion QA

Every animation must be tested for:

## 57.1 Purpose

- Does the motion explain something?
- Is the purpose still clear when motion is disabled?
- Does it support the page story?

## 57.2 Accessibility

- Is reduced motion supported?
- Does focus remain correct?
- Is state announced?
- Is meaning available without motion?
- Is flashing absent?

## 57.3 Performance

- Does it use transform and opacity where possible?
- Does it remain smooth on mobile?
- Does it avoid layout shift?
- Is bundle impact justified?
- Does it stop when offscreen?

## 57.4 Product Accuracy

- Does motion imply a capability that does not exist?
- Is the product-preview status clear?
- Is clinical meaning preserved?
- Is uncertainty represented honestly?

## 57.5 Audience

- Is Patient motion calm enough?
- Is Provider motion efficient enough?
- Does the experience remain one ODRISC brand?

## 57.6 Localization

- Does RTL direction make sense?
- Do Arabic labels fit?
- Does chronology remain understandable?
- Does the reduced-motion version remain equivalent?

---

# 58. Prohibited Motion Patterns

ODRISC must not use:

- Scroll hijacking
- Full-screen intro loaders
- Mandatory logo animation
- Constant floating cards
- Aggressive parallax
- Rapid zoom
- Repeated pulsing
- Blinking clinical states
- Shaking error fields
- Confetti
- Fireworks
- Gamified health progress
- Hover-only content
- Typewriter animation for important text
- Long card staggers
- Count-up animation for clinical values
- Autoplay video with sound
- Looping animated dashboards
- Artificial heartbeat animation
- Neural-network particle effects
- Robot or AI-brain animation
- Animation that delays CTAs
- Animation that blocks scrolling
- Animation that implies real-time monitoring
- Motion that hides Product Status
- Motion that makes concept screens appear operational

---

# 59. Motion Decision Test

Before approving an animation, ask:

1. What does this motion explain?
2. Is the same meaning available without motion?
3. Does it support the Website Story?
4. Is it appropriate for the audience?
5. Does it preserve clinical meaning?
6. Does it imply an unavailable capability?
7. Is it accessible with reduced motion?
8. Does it perform well on mobile?
9. Is it consistent with ODRISC tokens?
10. Does it stop when no longer useful?
11. Is it more restrained than the first proposal?
12. Would removing it reduce understanding?

When removal does not reduce understanding, the animation should normally be removed.

---

# 60. Motion Governance

## 60.1 Motion Owner

A designated design or frontend owner must maintain:

- Motion tokens
- Motion primitives
- Motion QA
- Reduced-motion behavior
- Motion documentation
- Performance review

## 60.2 Change Categories

### Patch

- Minor duration correction
- Easing correction
- Accessibility fix
- Documentation clarification

### Minor

- New approved motion primitive
- New component transition
- New narrative sequence

### Major

- New route-transition system
- New global scroll behavior
- New ambient-motion system
- Major token changes
- Animation affecting clinical interpretation

## 60.3 Change Requirements

Material changes require:

1. Purpose
2. Audience
3. Current limitation
4. Proposed behavior
5. Reduced-motion alternative
6. Accessibility impact
7. Performance impact
8. RTL impact
9. Product-status impact
10. Approval
11. Documentation update

---

# 61. Rules for AI Agents

Before generating or implementing motion, AI agents must:

1. Read `docs/design/BRAND_FOUNDATION.md`.
2. Read `docs/design/DESIGN_SYSTEM.md`.
3. Read `docs/design/ANIMATION_GUIDELINES.md`.
4. Identify the Page ID.
5. Identify the audience.
6. Identify the story stage.
7. State the purpose of the motion.
8. Use approved duration, easing, distance, and stagger tokens.
9. Provide a reduced-motion alternative.
10. Check Product Status.
11. Preserve clinical meaning.
12. Consider mobile and RTL.
13. Reuse approved motion primitives.
14. Document a Motion ID for major sequences.

AI agents must not:

- Add motion merely for visual polish
- Create scroll hijacking
- Add arbitrary durations or easing
- Animate every section
- Use motion to conceal loading
- animate clinical values theatrically
- use pulsing clinical-warning states
- create a long intro sequence
- add autoplay sound
- add a new motion library without approval
- make unavailable features appear operational
- omit reduced-motion behavior
- rely on hover for essential content
- implement concept animation without labeling its status

---

# 62. Locked Animation Decisions

The following are approved V1 decisions:

1. Motion must communicate progression, connection, hierarchy, state, or feedback.
2. The website must use native scrolling.
3. Scroll hijacking is prohibited.
4. Essential content must not wait for animation.
5. The shared hero may use one fragmentation-to-connection sequence.
6. The complete hero sequence should normally play once.
7. Most interface motion will use 160–360ms durations.
8. Narrative sequences will normally use 600–900ms durations.
9. Individual animations should rarely exceed 1200ms.
10. Movement should normally remain within 4–24px.
11. `transform` and `opacity` are the preferred animated properties.
12. Exit motion should normally be faster than entry motion.
13. Patient motion will use lower density and simpler sequences.
14. Provider motion may use higher density but must remain restrained.
15. Clinical-risk states will normally remain static.
16. Product-status badges will remain static.
17. Numeric counting will not be used for clinical values.
18. Charts must preserve scale, baseline, chronology, and uncertainty.
19. Route transitions will remain minimal in V1.
20. No full-screen loading or logo-intro sequence will be used.
21. No autoplay sound will be used.
22. Reduced-motion behavior is required.
23. Mobile animation will be simpler than desktop animation.
24. RTL motion direction will follow meaning rather than automatic mirroring.
25. Concept product animations must be labeled.
26. Animation must not imply real-time monitoring.
27. Major motion sequences require Motion IDs.
28. Motion changes require governance.
29. Animation is an enhancement, not a content-delivery mechanism.
30. When motion does not improve understanding, it should be removed.

---

# 63. Remaining Motion Questions

The following remain unresolved:

- Which P0 pages receive section-level narrative animation?
- Is the shared hero animation implemented with SVG, CSS, Canvas, video, or another method?
- Which parts of the eight-part website story receive animation?
- Does the shared entry hero animate on every visit or only the first visit?
- Is animation replay available?
- Which Provider charts are animated in the public release?
- Which Patient progress visualizations are animated?
- Does the Provider workflow use a scroll-triggered sequence or static steps?
- Are product previews interactive or pre-rendered?
- Is Lottie permitted for selected illustrations?
- Which motion library is approved in the Technical Stack?
- What motion-performance budget is adopted?
- Which devices form the motion QA test matrix?
- Which animations require formal Patient usability testing?
- Which animations require Provider usability testing?
- Which diagrams retain left-to-right chronology on Arabic pages?
- Who owns final motion approval?
- Who owns reduced-motion QA?
- How are motion regressions tested automatically?
- Will route transitions be reconsidered after V1?

These questions must remain in:

`docs/project/OPEN_QUESTIONS.md`

---

# 64. Foundational Motion Summary

ODRISC motion must help visitors understand how pregnancy information becomes connected across time.

The motion system should communicate:

```text
Separate information
↓
Connected timeline
↓
Visible progression
↓
Explainable intelligence
↓
Patient-Provider collaboration
```

Patient motion should feel calm, guided, and supportive.

Provider motion should feel efficient, structured, and clinically disciplined.

All motion must remain:

- Purposeful
- Restrained
- Accessible
- Performant
- Mobile-ready
- RTL-aware
- Product-status accurate
- Clinically responsible

Motion should make ODRISC easier to understand, never harder to use.

---

# 65. Reusable animated components must map their motion to:

- A stable Component ID
- An approved Motion ID where material
- Approved motion tokens
- Reduced-motion behavior
- Mobile behavior
- RTL behavior

Page-specific animations must not duplicate an approved motion component.
