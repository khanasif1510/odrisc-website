# Start Here — AI and Developer Workflow

## Before Starting Any Task

1. Read `AGENTS.md`.

2. Read `PROJECT_CONTEXT.md`.

3. Read the relevant source-of-truth documents for the task.

   Typical reading order:

   **Foundation**
   - `docs/project/SOURCE_OF_TRUTH.md`
   - `ai/rules/NON_NEGOTIABLES.md`

   **Product**
   - `docs/product/PRODUCT_VISION.md`
   - `docs/product/AUDIENCE.md`
   - `docs/product/WEBSITE_OBJECTIVES.md`
   - `docs/product/WEBSITE_STORY.md`
   - `docs/product/PRD.md`
   - `docs/product/PRODUCT_STATUS.md`
   - `docs/product/INFORMATION_ARCHITECTURE.md`
   - `docs/product/PAGE_REQUIREMENTS.md`
   - `docs/product/ROUTE_REGISTRY.md`
   
   **Project**
   - `docs/project/GLOSSARY.md`

   **Design**
   - `docs/design/BRAND_FOUNDATION.md`
   - `docs/design/DESIGN_SYSTEM.md`
   - `docs/design/ANIMATION_GUIDELINES.md`

   **Content**
   - `docs/content/CONTENT_GUIDELINES.md`

   **Engineering**
   - `docs/engineering/TECH_STACK.md`
   - `docs/engineering/ARCHITECTURE.md`
   - `docs/engineering/COMPONENT_LIBRARY.md`
   - `docs/engineering/CODING_STANDARDS.md`
   - `docs/engineering/TESTING_STRATEGY.md`

   Read only the documents that are relevant to the current task. Do not read the entire repository unless necessary.

4. Inspect the existing repository implementation.

5. Confirm the scope of the requested change.

6. Identify assumptions and unresolved questions.

7. Define acceptance criteria.

## Website Task Workflow

For every public website task:

### Step 1 — Identify the Task Type

Determine whether the task concerns:

- Information architecture
- Patient content
- Provider content
- Shared content
- Institutional content
- Design
- Components
- Forms
- SEO
- Analytics
- Accessibility
- Localization
- Engineering
- Website-to-application integration

### Step 2 — Identify the Audience

Record the primary audience as:

- Patient
- Healthcare Provider
- Hospital or Institution
- Shared audience

Do not begin audience-specific work without identifying the audience.

### Step 3 — Identify the Objective

Identify the approved website objective supported by the task.

Every page must have one primary objective.

### Step 4 — Identify the Primary Action

Define one primary call to action.

Do not create multiple competing primary actions.

### Step 5 — Check Product Status

Review:

`docs/product/PRODUCT_STATUS.md`

Do not present a capability as available unless its status permits public availability language.

### Step 6 — Check Clinical Boundaries

Confirm:

- What ODRISC supports
- What ODRISC does not replace
- Whether clinical review is required
- Whether a disclaimer is required
- Whether escalation language is required

### Step 7 — Check Market and Language

Confirm:

- Market
- Product availability
- Language
- Localization
- Pricing
- Contact pathway
- Legal and privacy context

### Step 8 — Check Existing Decisions

Review relevant files in:

`ai/decisions/`

Do not reopen an approved decision without a documented reason.

### Step 9 — Create or Modify the Work

Implementation must remain consistent with:

- Product identity
- Audience definition
- Website objectives
- Product status
- Glossary
- Design system
- Engineering standards

### Step 10 — Validate

Before completion, verify:

- Audience alignment
- Objective alignment
- CTA clarity
- Product-status accuracy
- Clinical safety
- Terminology
- Accessibility
- Responsive behavior
- Privacy
- Performance
- Analytics
- Ownership
- Documentation consistency

## Unresolved Information

When required information is missing:

1. Check `docs/project/OPEN_QUESTIONS.md`.
2. Check `docs/product/PRODUCT_STATUS.md`.
3. Do not invent a public claim.
4. Use an explicit internal placeholder where necessary.
5. Add a new open question only when the issue is material and not already recorded.
6. Continue with all work that can be completed safely without resolving the missing item.

## Website Task Completion Criteria

A public website task is complete only when:

- The audience is defined
- The objective is defined
- The primary CTA is defined
- Product status has been verified
- Clinical boundaries have been respected
- Approved terminology has been used
- Accessibility has been considered
- Privacy has been considered
- Market and language context has been considered
- Relevant analytics have been identified
- Documentation and implementation remain aligned
