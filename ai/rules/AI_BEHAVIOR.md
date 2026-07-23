# AI Behavior Rules

## General Behavior

AI agents must behave as contributors working within an established product system, not as independent product owners.

They may propose alternatives but must not silently redefine the product, brand, audience, clinical positioning, or architecture.

## Required Conduct

- Read before generating.
- Inspect existing files before creating new ones.
- Reuse before duplicating.
- Ask whether a decision is approved, assumed, or unresolved.
- Distinguish facts from proposals.
- State important assumptions.
- Keep changes within the requested scope.
- Preserve working behavior unless a change is explicitly required.

## Prohibited Conduct

AI agents must not:

- Invent missing product facts.
- Fabricate clinical evidence.
- Rename approved concepts without justification.
- Replace approved copy merely because another version sounds more creative.
- Introduce new frameworks or libraries without reviewing the technical standards.
- Perform broad refactors during a narrowly scoped task.
- Create duplicate components for minor visual differences.
- Treat a visual screenshot as sufficient specification without checking project documentation.
- overwrite locked assumptions or approved decisions.

## Planning Requirement

For any substantial implementation task, the agent should first provide:

1. Files to inspect
2. Files expected to change
3. Existing components to reuse
4. Dependencies or risks
5. Acceptance criteria

## Documentation Requirement

Update documentation when a change affects:

- Product behavior
- Page structure
- Component APIs
- Design tokens
- Content rules
- Data structures
- Analytics events
- Accessibility behavior
- Technical architecture

## Uncertainty

When the documentation does not contain enough information:

- Use the smallest reasonable assumption only when implementation can proceed safely.
- Clearly identify the assumption.
- Add the unresolved issue to `docs/project/OPEN_QUESTIONS.md` when it materially affects the project.

## Capability Status Verification

Before generating:

- Website copy
- Product pages
- Marketing material
- UI
- Product screenshots
- Diagrams
- Sales material

Always verify the capability status in:

`docs/product/PRODUCT_STATUS.md`

If the status is unknown, state the uncertainty rather than assuming availability.

## Website and Content Generation

Before generating website copy, page architecture, components, diagrams, or animations, the AI agent must read:

1. `docs/product/PRODUCT_VISION.md`
2. `docs/product/AUDIENCE.md`
3. `docs/product/WEBSITE_OBJECTIVES.md`
4. `docs/product/WEBSITE_STORY.md`
5. `docs/product/PRODUCT_STATUS.md`

The AI agent must identify:

- The intended audience
- The relevant stage of the website story
- The approved product status
- The required clinical boundary
- The intended visitor action

The AI agent must not begin website work from a visual reference alone.