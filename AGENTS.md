# ODRISC Website — AI Agent Instructions

## Purpose

This file is the primary entry point for every AI coding or design agent working in this repository.

Before planning, generating, editing, or reviewing code, the agent must read the required project documents listed below.

## Required Reading Order

1. `PROJECT_CONTEXT.md`
2. `docs/project/SOURCE_OF_TRUTH.md`
3. `ai/rules/NON_NEGOTIABLES.md`
4. `ai/rules/AI_BEHAVIOR.md`
5. `docs/product/PRODUCT_VISION.md`
6. `docs/product/AUDIENCE.md`
7. `docs/product/WEBSITE_OBJECTIVES.md`
8. `docs/product/WEBSITE_STORY.md`
9. `docs/product/PRD.md`
10. `docs/product/PRODUCT_STATUS.md`
11. `docs/product/INFORMATION_ARCHITECTURE.md`
12. `docs/product/PAGE_REQUIREMENTS.md`
13. `docs/product/ROUTE_REGISTRY.md`
14. `docs/design/BRAND_FOUNDATION.md`
15. `docs/design/DESIGN_SYSTEM.md`
16. `docs/design/ANIMATION_GUIDELINES.md`
17. `docs/content/CONTENT_GUIDELINES.md`
18. `docs/engineering/TECH_STACK.md`
19. `docs/engineering/ARCHITECTURE.md`
20. `docs/engineering/COMPONENT_LIBRARY.md`
21. `docs/engineering/CODING_STANDARDS.md`
22. `docs/engineering/TESTING_STRATEGY.md`
23. The specific page, component, or workflow document relevant to the task

## Core Working Rules

- Do not begin implementation before understanding the task context.
- Do not invent product capabilities, clinical claims, validation results, partnerships, integrations, or regulatory status.
- Do not revise locked assumptions without explicit approval.
- Do not change the established brand direction without explicit approval.
- Reuse documented components and patterns before introducing new ones.
- Keep the website maternal and fetal intelligence platform unless a page explicitly targets another audience.
- Maintain consistency across design, content, interaction, accessibility, and engineering.
- Prefer clear and explainable implementation over unnecessary complexity.
- Record material architectural decisions in `ai/decisions/`.
- Record unresolved matters in `docs/project/OPEN_QUESTIONS.md`.

## UI/UX and Motion Override

- For UI design or redesign work, use the installed `figma-generate-design` Codex skill as the primary professional design workflow when it is available in the session.
- Use Motion for React from `motion/react` as the primary framework for component, layout, SVG, gesture, presence, scroll, and narrative animation.
- The global Motion configuration lives in `src/components/motion-provider.tsx`; preserve user reduced-motion preferences.
- For UI-only redesign work, the established visual design system is advisory and may be bypassed when a stronger professional design solution is justified.
- This override does not authorize changes to business logic, approved content, routing, functionality, product status, clinical boundaries, analytics, or data behavior.

## Before Coding

The agent must establish:

1. What problem is being solved?
2. Who is the intended audience?
3. Which approved documents govern the task?
4. Which existing components can be reused?
5. What assumptions are being made?
6. What acceptance criteria define completion?

## After Coding

The agent must verify:

- The implementation follows the approved design system.
- The content follows the approved messaging and clinical language.
- Responsive behavior is covered.
- Accessibility has been considered.
- No unsupported claims were introduced.
- No unrelated files were changed.
- Documentation is updated when the implementation changes an approved behavior.

## Repository Principle

The repository documentation is the durable memory of the project.

Chat history is temporary context.

## Product Capability Verification

Before describing or implementing any product capability:

1. Read `docs/product/PRODUCT_STATUS.md`.
2. Verify whether the capability is:
   - Available
   - Limited availability
   - Pilot
   - In validation
   - In development
   - Planned
   - Future roadmap
3. Do not describe roadmap capabilities as available.

## Website Work Requirements

Before creating or modifying any public website page, section, component, form, navigation item, call to action, metadata, or diagram, establish:

1. Primary audience
2. Page objective
3. Primary call to action
4. Product capability dependency
5. Approved product status
6. Required clinical boundary
7. Market and language context
8. Accessibility requirement
9. Analytics requirement
10. Content and review owner

All website work must comply with:

- `docs/product/WEBSITE_OBJECTIVES.md`
- `docs/product/AUDIENCE.md`
- `docs/product/PRODUCT_STATUS.md`
- `ai/rules/NON_NEGOTIABLES.md`

## Website Restrictions

AI agents must not:

- Invent website objectives
- Invent product availability
- Invent clinical claims
- Invent evidence or validation
- Invent partnerships
- Invent regulatory status
- Merge Patient and Provider messaging indiscriminately
- Add new primary gateway audiences
- Present roadmap capabilities as available
- Create fear-based conversion
- Collect unnecessary health information
- Build pages without a defined audience and objective
- Override approved documentation through temporary prompts
