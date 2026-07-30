# ODRISC Website — Source of Truth

## Purpose

This document defines the hierarchy of authority for all product, design, content, clinical, and engineering decisions made within the ODRISC website repository.

AI agents and human contributors must follow this hierarchy when two documents, prompts, comments, or implementation details conflict.

## Source-of-Truth Hierarchy

For product identity, audience definition, website purpose, product status, and public communication, use the following authority order:

1. Founder-approved and formally recorded decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_OBJECTIVES.md`
6. `docs/product/PRODUCT_STATUS.md`
7. Approved Product Requirements Documents
8. Approved Architecture Decision Records
9. Approved design, content, SEO, and engineering documents
10. Current implementation
11. Temporary prompts, prototypes, mockups, and suggestions

A prototype, mockup, prompt, or existing feature does not redefine the product vision. Material changes to product identity or scope require explicit approval and documentation.

## Website Conflict Rules

When website content or implementation conflicts with approved documentation:

- `PROJECT_CONTEXT.md` governs the overall repository and website direction.
- `PRODUCT_VISION.md` governs product identity and long-term product boundaries.
- `AUDIENCE.md` governs audience needs, audience journeys, and audience-specific communication.
- `WEBSITE_OBJECTIVES.md` governs what the public website must accomplish.
- `PRODUCT_STATUS.md` governs whether a capability may be presented as available, limited, pilot, in development, planned, or future roadmap.
- `GLOSSARY.md` governs approved terminology.

An existing page, prototype, mockup, screenshot, application feature, or temporary prompt does not automatically redefine an approved website objective.

Material changes to audience structure, product identity, website objectives, clinical claims, primary conversions, market availability, or product status require explicit approval and documentation.

## Website Publication Rule

No website claim may be published without confirming:

1. Audience relevance
2. Product-status accuracy
3. Clinical accuracy
4. Market availability
5. Approved terminology
6. Privacy implications
7. Required review ownership

## Locked Information

Information described as approved, final, locked, non-negotiable, or founder-approved must not be revised unless the founder explicitly requests the change.

## Chat History

Chat history may provide useful context, but it is not the permanent source of truth.

Any important decision from a conversation must be transferred into the repository documentation before it can be treated as a durable project decision.

## External References

External websites, articles, competitor examples, screenshots, and research material may inform decisions but do not override ODRISC-approved documentation.

## Implementation Rule

Before generating or modifying code, contributors must identify the relevant approved documentation and ensure the implementation is consistent with it.

## Website Narrative Authority

For website narrative, messaging progression, and audience storytelling:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_OBJECTIVES.md`
6. `docs/product/WEBSITE_STORY.md`
7. Approved content guidelines and messaging documents
8. Approved page specifications
9. Current implementation
10. Temporary prompts, generated copy, mockups, and experiments

A mockup, generated headline, presentation slide, prototype, or existing webpage does not redefine the canonical website story. Material narrative changes require explicit approval and an update to `docs/product/WEBSITE_STORY.md`.

## Website Requirements Authority

For website scope, functionality, acceptance criteria, launch requirements, and implementation obligations:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_OBJECTIVES.md`
6. `docs/product/WEBSITE_STORY.md`
7. `docs/product/PRD.md`
8. `docs/product/PRODUCT_STATUS.md`
9. Approved Information Architecture
10. Approved page specifications
11. Approved design and engineering specifications
12. Current implementation
13. Temporary prompts, prototypes, mockups, and generated suggestions

The current implementation does not override the approved PRD. When implementation and requirements conflict, the conflict must be documented and resolved rather than silently treating existing code as the requirement.

## Website Structure Authority

For sitemap, URLs, navigation, audience routing, breadcrumbs, resource taxonomy, and localization-ready page hierarchy:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_OBJECTIVES.md`
6. `docs/product/WEBSITE_STORY.md`
7. `docs/product/PRD.md`
8. `docs/product/PRODUCT_STATUS.md`
9. `docs/product/INFORMATION_ARCHITECTURE.md`
10. Approved page requirements
11. Approved design and engineering specifications
12. Current implementation
13. Existing Canva website structure
14. Temporary prompts, mockups, and suggestions

The current website, Canva page structure, codebase folders, or a generated sitemap do not override the approved Information Architecture. Structural differences must be documented and resolved before implementation.

## Page Requirements Authority

For individual page purpose, audience, section hierarchy, required content, CTA, Product Status dependency, SEO intent, analytics, accessibility, and acceptance criteria:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_OBJECTIVES.md`
6. `docs/product/WEBSITE_STORY.md`
7. `docs/product/PRD.md`
8. `docs/product/PRODUCT_STATUS.md`
9. `docs/product/INFORMATION_ARCHITECTURE.md`
10. `docs/product/PAGE_REQUIREMENTS.md`
11. Approved page content briefs
12. Approved design specifications
13. Approved engineering specifications
14. Current implementation
15. Existing Canva pages, mockups, prompts, and generated suggestions

A page mockup, generated design, current implementation, or legacy Canva page does not redefine the approved page purpose or requirements. Conflicts must be resolved through the documented change-control process.

## Brand Authority

For brand identity, positioning, purpose, personality, voice, visual character, color roles, imagery principles, brand architecture, and prohibited expression:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_OBJECTIVES.md`
6. `docs/product/WEBSITE_STORY.md`
7. `docs/design/BRAND_FOUNDATION.md`
8. Approved Design System
9. Approved Animation Guidelines
10. Approved content guidelines and templates
11. Approved brand assets
12. Current implementation
13. Presentations, mockups, generated designs, and temporary placeholders

A presentation style, generated design, mockup, concept image, or current implementation does not redefine the ODRISC brand. Material changes to positioning, colors, typography, logo, voice, or brand architecture require explicit approval and documentation.

## Design-System Authority

For design tokens, typography, colors, semantic states, spacing, layout, breakpoints, radii, shadows, component styling, responsive behavior, accessibility, and RTL behavior:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. `docs/product/WEBSITE_STORY.md`
6. `docs/design/BRAND_FOUNDATION.md`
7. `docs/design/DESIGN_SYSTEM.md`
8. Approved Animation Guidelines
9. Approved Component Library
10. Approved design files
11. Current implementation
12. Mockups, presentation slides, screenshots, and generated concepts

A mockup, screenshot, presentation slide, or isolated component implementation does not redefine a Design-System token or component rule. Differences must be resolved through design-system change control.

## Animation and Motion Authority

For duration, easing, scroll behavior, narrative animation, component transitions, data animation, reduced-motion behavior, motion accessibility, performance, and RTL motion:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/WEBSITE_STORY.md`
4. `docs/product/PAGE_REQUIREMENTS.md`
5. `docs/design/BRAND_FOUNDATION.md`
6. `docs/design/DESIGN_SYSTEM.md`
7. `docs/design/ANIMATION_GUIDELINES.md`
8. Approved component specifications
9. Approved engineering architecture
10. Current implementation
11. Mockups, prototypes, videos, presentation animations, and generated concepts

A prototype, visual reference, presentation animation, or generated motion concept does not redefine approved animation behavior. Motion differences must be resolved through the documented motion-governance process.

## Technology-Stack Authority

For runtime, package manager, framework, rendering model, language, styling, components, motion implementation, content technology, localization, analytics, testing, security tooling, hosting, and deployment:

1. Founder- and CTO-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRD.md`
4. `docs/design/BRAND_FOUNDATION.md`
5. `docs/design/DESIGN_SYSTEM.md`
6. `docs/design/ANIMATION_GUIDELINES.md`
7. `docs/engineering/TECH_STACK.md`
8. Approved Engineering Architecture
9. Approved Component Library
10. Approved Coding Standards
11. Dependency Policy
12. Current implementation
13. Tutorials, templates, generated code, AI suggestions, and temporary prototypes

An installed dependency, generated component, tutorial, starter template, or existing prototype does not redefine the approved Technology Stack. Conflicting technologies must be removed or approved through the documented change process.

## Engineering-Architecture Authority

For repository structure, application layers, module boundaries, Server and Client Component boundaries, rendering, content pipelines, integrations, security zones, runtime configuration, caching, errors, observability, deployment topology, and rollback:

1. Founder- and CTO-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRD.md`
4. `docs/product/INFORMATION_ARCHITECTURE.md`
5. `docs/product/PAGE_REQUIREMENTS.md`
6. `docs/design/DESIGN_SYSTEM.md`
7. `docs/design/ANIMATION_GUIDELINES.md`
8. `docs/engineering/TECH_STACK.md`
9. `docs/engineering/ARCHITECTURE.md`
10. Approved Component Library
11. Approved Coding Standards
12. Approved Testing Strategy
13. Approved security and deployment documentation
14. Current implementation
15. Templates, generated code, tutorials, and temporary prototypes

An existing folder structure, generated starter, copied component, tutorial, or temporary deployment script does not redefine approved architecture. Conflicts must be resolved through architecture review.

## Component-Library Authority

For reusable component purpose, Component IDs, anatomy, props, variants, Server or Client classification, accessibility, RTL behavior, motion integration, Product Status behavior, analytics ownership, Storybook coverage, and component testing:

1. Founder- and CTO-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PAGE_REQUIREMENTS.md`
4. `docs/design/BRAND_FOUNDATION.md`
5. `docs/design/DESIGN_SYSTEM.md`
6. `docs/design/ANIMATION_GUIDELINES.md`
7. `docs/engineering/TECH_STACK.md`
8. `docs/engineering/ARCHITECTURE.md`
9. `docs/engineering/COMPONENT_LIBRARY.md`
10. Approved individual component specifications
11. Approved Storybook implementation
12. Current production implementation
13. Generated components, copied libraries, starter templates, screenshots, and prototypes

An installed primitive, generated shadcn-style component, copied code sample, existing Storybook story, or page-specific implementation does not redefine the approved Component Library.

## Coding-Standards Authority

For formatting, naming, TypeScript, React, Next.js conventions, imports, exports,
validation, forms, errors, logging, analytics, accessibility, localization,
testing expectations, comments, generated code, dependencies, commits, reviews,
and AI-generated source code:

1. Founder- and CTO-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRD.md`
4. `docs/design/DESIGN_SYSTEM.md`
5. `docs/design/ANIMATION_GUIDELINES.md`
6. `docs/engineering/TECH_STACK.md`
7. `docs/engineering/ARCHITECTURE.md`
8. `docs/engineering/COMPONENT_LIBRARY.md`
9. `docs/engineering/CODING_STANDARDS.md`
10. Approved Testing Strategy
11. Approved Security Architecture
12. Approved exceptions
13. Current implementation
14. Generated code, tutorials, copied examples, and AI suggestions

Existing source code, generated code, copied examples, or passing compilation do
not redefine the approved Coding Standards.

## Testing-Strategy Authority

For test levels, test ownership, test data, fixtures, coverage, browser projects,
accessibility, Arabic and RTL verification, reduced motion, visual regression,
flaky tests, release gates, staging verification, production smoke, and rollback
verification:

1. Founder- and CTO-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRD.md`
4. `docs/product/PAGE_REQUIREMENTS.md`
5. `docs/design/DESIGN_SYSTEM.md`
6. `docs/design/ANIMATION_GUIDELINES.md`
7. `docs/engineering/TECH_STACK.md`
8. `docs/engineering/ARCHITECTURE.md`
9. `docs/engineering/COMPONENT_LIBRARY.md`
10. `docs/engineering/CODING_STANDARDS.md`
11. `docs/engineering/TESTING_STRATEGY.md`
12. Approved Security Architecture and Deployment Runbook
13. Approved test exceptions
14. Current automated test implementation
15. Generated tests, copied examples, and AI suggestions

Passing tests do not override an approved requirement, Product Status decision,
clinical review, privacy rule, or accessibility requirement.
