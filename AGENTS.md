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
9. `docs/design/BRAND_FOUNDATION.md`
10. `docs/design/DESIGN_SYSTEM.md`
11. `docs/content/CONTENT_GUIDELINES.md`
12. `docs/engineering/TECH_STACK.md`
13. `docs/engineering/ARCHITECTURE.md`
14. The specific page, component, or workflow document relevant to the task

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