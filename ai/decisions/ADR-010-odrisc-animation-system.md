# ADR-010 — ODRISC Animation System

## Status

Approved

## Date

2026-07-24

## Context

The ODRISC Brand Foundation and Design System establish a calm, clinical, human, and longitudinal visual language.

Motion is important for explaining progression, connection, timelines, data relationships, and Patient-Provider collaboration. Without governed animation rules, contributors may add excessive motion, scroll hijacking, inaccessible effects, generic technology animation, or movement that distorts clinical meaning.

## Decision

`docs/design/ANIMATION_GUIDELINES.md` will define the canonical ODRISC motion system.

The V1 public website will use:

- Native scrolling
- No scroll hijacking
- One controlled fragmentation-to-connection hero sequence
- Short interface transitions
- Restrained narrative animation
- Motion based primarily on transform and opacity
- Lower motion density for Patient experiences
- Controlled higher density for Provider experiences
- Static clinical-risk and Product Status indicators
- No count-up animation for clinical values
- Minimal route transitions
- Mandatory reduced-motion alternatives
- Mobile-simplified animation
- RTL-aware motion
- Motion IDs for major sequences
- Motion governance and QA

## Consequences

- Major animations require documented Motion Specifications.
- The Component Library should expose reusable motion primitives.
- Animation must not deliver essential content.
- Concept animations must identify their Product Status.
- Motion must not imply real-time monitoring or autonomous diagnosis.
- Every animated page requires reduced-motion and performance review.
- A Motion QA Checklist and token changelog must be maintained.
- The Technical Stack must identify the approved motion implementation.

## Alternatives Considered

### Fully Static Website

Rejected because controlled motion can materially improve explanation of progression and longitudinal relationships.

### Highly Animated Storytelling Website

Rejected because excessive motion would impair accessibility, performance, clinical credibility, and content access.

### Scroll-Controlled Cinematic Experience

Rejected because scroll hijacking conflicts with usability, accessibility, and mobile performance.

### Animation Defined Per Page

Rejected because it would create inconsistent timing, interaction, accessibility, and engineering behavior.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/WEBSITE_STORY.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `docs/design/BRAND_FOUNDATION.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/design/ANIMATION_GUIDELINES.md`
- `docs/design/MOTION_QA_CHECKLIST.md`
- `docs/design/MOTION_SPEC_TEMPLATE.md`
- `docs/product/REQUIREMENTS_TRACEABILITY.md`
- `ai/rules/NON_NEGOTIABLES.md`