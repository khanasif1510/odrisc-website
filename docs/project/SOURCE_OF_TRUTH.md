# ODRISC Website — Source of Truth

## Purpose

This document defines the hierarchy of authority for all product, design, content, clinical, and engineering decisions made within the ODRISC website repository.

AI agents and human contributors must follow this hierarchy when two documents, prompts, comments, or implementation details conflict.

## Source-of-Truth Hierarchy

For product identity, purpose, direction, and long-term boundaries:

1. Founder-approved decisions
2. `PROJECT_CONTEXT.md`
3. `docs/product/PRODUCT_VISION.md`
4. `docs/product/AUDIENCE.md`
5. Approved Product Requirements Documents
6. Approved Architecture Decision Records
7. Current implementation
8. Temporary prompts, mockups, and suggestions

A prototype, mockup, prompt, or existing feature does not redefine the product vision. Material changes to product identity or scope require explicit approval and documentation.

## Conflict Resolution

When information conflicts:

- Do not silently choose one interpretation.
- Follow the highest-authority source.
- Record unresolved conflicts in `docs/project/OPEN_QUESTIONS.md`.
- Do not overwrite approved decisions without explicit authorization.
- Do not treat previous AI-generated output as approved unless it appears in a source-of-truth document.

## Locked Information

Information described as approved, final, locked, non-negotiable, or founder-approved must not be revised unless the founder explicitly requests the change.

## Chat History

Chat history may provide useful context, but it is not the permanent source of truth.

Any important decision from a conversation must be transferred into the repository documentation before it can be treated as a durable project decision.

## External References

External websites, articles, competitor examples, screenshots, and research material may inform decisions but do not override ODRISC-approved documentation.

## Implementation Rule

Before generating or modifying code, contributors must identify the relevant approved documentation and ensure the implementation is consistent with it.