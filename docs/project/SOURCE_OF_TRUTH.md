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