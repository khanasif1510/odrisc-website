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

## PRD Compliance

Before implementing or modifying a website feature, the AI agent must:

1. Identify the relevant requirement identifiers in `docs/product/PRD.md`.
2. Confirm the intended audience.
3. Confirm the relevant website-story stage.
4. Check `docs/product/PRODUCT_STATUS.md`.
5. Check related open questions.
6. Review relevant design and engineering standards.
7. State any material assumption in the appropriate documentation.

Implementation output should reference the requirement identifiers it addresses.

The AI agent must not invent a missing requirement solely to proceed. Material missing requirements must be documented through the approved decision and change-control process.

## Route and Navigation Changes

Before creating, renaming, moving, or deleting a public website page, the AI agent must:

1. Check `docs/product/INFORMATION_ARCHITECTURE.md`.
2. Check whether a canonical route already exists.
3. Identify the intended audience and page type.
4. Identify the relevant PRD requirement identifiers.
5. Check `docs/product/PRODUCT_STATUS.md`.
6. Check related open questions.
7. Check whether a redirect is required.
8. Update the route registry and traceability documentation.

The AI agent must not derive public URLs directly from source-code folders or component names.

## Page Creation and Modification

Before creating or modifying a page, the AI agent must:

1. Identify the Page ID in `docs/product/PAGE_REQUIREMENTS.md`.
2. Confirm the canonical route in `docs/product/INFORMATION_ARCHITECTURE.md`.
3. Confirm the route status in `docs/product/ROUTE_REGISTRY.md`.
4. Identify the primary audience and visitor question.
5. Identify the applicable PRD requirements.
6. Check `docs/product/PRODUCT_STATUS.md`.
7. Check related open questions.
8. Identify the primary CTA and verify that the destination exists.
9. Identify required clinical, legal, privacy, and product reviewers.
10. Preserve the required section sequence unless a documented change is approved.

The AI agent must not design or implement a public page from a visual reference alone.

## Brand Generation

Before generating website design, brand copy, diagrams, icons, illustrations, imagery, presentations, or visual concepts, the AI agent must:

1. Read `docs/design/BRAND_FOUNDATION.md`.
2. Identify the intended audience.
3. Identify the relevant Website Story stage.
4. Check Product Status.
5. Use the approved color foundation.
6. Preserve Patient dignity and Provider authority.
7. Avoid generic AI imagery and unsupported claims.
8. Identify concept assets as concept assets.
9. Check accessibility and Arabic-readiness requirements.
10. Check the Design System and Animation Guidelines when available.

The AI agent must not invent a new ODRISC logo, typeface, primary color, tagline, or sub-brand without explicit approval.

## Design-System Compliance

Before producing page layouts, components, CSS, diagrams, interface visuals, or frontend styling, the AI agent must:

1. Read `docs/design/BRAND_FOUNDATION.md`.
2. Read `docs/design/DESIGN_SYSTEM.md`.
3. Identify the Page ID and audience.
4. Use documented design tokens.
5. Check whether an approved component already exists.
6. Preserve accessibility and RTL behavior.
7. Check Product Status and visual-label requirements.
8. Check `docs/design/ANIMATION_GUIDELINES.md` before adding motion.
9. Document any proposed new component or token.
10. Avoid hard-coded values when a token exists.

The AI agent must not infer design tokens from screenshots or presentation images.

## Motion Generation

Before adding or modifying motion, the AI agent must:

1. Read `docs/design/ANIMATION_GUIDELINES.md`.
2. Identify the Page ID and intended audience.
3. State what the motion explains.
4. Use approved motion tokens.
5. Provide a reduced-motion alternative.
6. Check mobile and RTL behavior.
7. Check Product Status and clinical meaning.
8. Reuse an approved motion primitive where possible.
9. Assign a Motion ID to major sequences.
10. Document performance and accessibility considerations.

The AI agent must not add motion merely because a library makes it easy to implement.

## Technology and Dependency Changes

Before installing, removing, replacing, or upgrading a package, the AI agent must:

1. Read `docs/engineering/TECH_STACK.md`.
2. Confirm that the capability is not already provided by the stack.
3. Identify whether the package runs on the server or client.
4. Evaluate bundle impact.
5. Evaluate accessibility.
6. Evaluate RTL and localization.
7. Evaluate security and licensing.
8. Check server-rendering compatibility.
9. Check overlap with current dependencies.
10. Add or update tests.
11. Update dependency and architecture documentation where material.

The AI agent must not install a dependency merely because it appears in a tutorial, generated component, or copied example.

## Architecture Compliance

Before adding a route, module, service, integration, Server Action, Route Handler, runtime variable, or infrastructure component, the AI agent must:

1. Read `docs/engineering/ARCHITECTURE.md`.
2. Identify the applicable architectural layer.
3. Identify the data classification.
4. Determine whether the implementation is server or client.
5. Search for an existing service, adapter, component, or route.
6. Preserve module dependency direction.
7. Check Product Status.
8. Check consent and analytics implications.
9. Check localization and RTL.
10. Define failure and recovery behavior.
11. Add architecture-appropriate tests.
12. Update documentation when a boundary changes.

The AI agent must not place vendor integration logic directly in routes or UI components.

## Component Creation and Modification

Before creating or changing a component, the AI agent must:

1. Read `docs/engineering/COMPONENT_LIBRARY.md`.
2. Search `docs/engineering/COMPONENT_REGISTRY.md`.
3. Search existing source and Storybook.
4. Identify the Component ID.
5. Identify Server or Client classification.
6. Identify audience variants.
7. Identify Product Status requirements.
8. Identify accessibility and RTL behavior.
9. Identify motion and reduced-motion behavior.
10. Identify analytics ownership.
11. Add or update tests.
12. Add or update Storybook.
13. Update the Component Registry.
14. Update the individual specification when the contract changes.

The AI agent must not create a duplicate component or bypass an approved contract to match one screenshot.

## Code Generation and Modification

Before writing or changing implementation code, the AI agent must:

1. Read `docs/engineering/CODING_STANDARDS.md`.
2. Identify the requirement, Page ID, and Component ID.
3. Search for existing code and contracts.
4. Identify the correct architectural layer.
5. Identify server or client placement.
6. Identify validation and error boundaries.
7. Preserve accessibility, localization, RTL, and reduced motion.
8. Preserve Product Status and clinical boundaries.
9. Add or update tests.
10. Run formatting, linting, type checking, and relevant tests.
11. Review the final diff for unrelated changes.

The AI agent must not weaken standards, suppress errors, install dependencies,
or claim successful verification without running the relevant commands.

## Test Generation and Verification

Before creating or modifying tests, the AI agent must:

1. Read `docs/engineering/TESTING_STRATEGY.md`.
2. Identify the requirement, risk, Page ID, Component ID, and integration boundary.
3. Select the lowest sufficient test level.
4. Search for existing coverage.
5. Use safe synthetic fixtures.
6. Preserve accessibility, Arabic, RTL, and reduced-motion coverage.
7. Avoid real production services.
8. Avoid arbitrary timeout sleeps.
9. Run the new or changed tests.
10. Run formatting, linting, and type checking.
11. Report commands actually executed and their results.
12. Update traceability and registries where required.

The AI agent must not weaken assertions, skip failing tests, update all visual
baselines, or claim release readiness without the required evidence.
