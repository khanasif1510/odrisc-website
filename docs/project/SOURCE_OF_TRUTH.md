# ODRISC Website — Source of Truth

## Purpose

This document defines the hierarchy of authority for all product, design, content, clinical, and engineering decisions made within the ODRISC website repository.

AI agents and human contributors must follow this hierarchy when two documents, prompts, comments, or implementation details conflict.

## Source-of-Truth Hierarchy

From highest authority to lowest authority:

1. Explicit decisions approved by the founder
2. PROJECT_CONTEXT.md
3. ai/rules/NON_NEGOTIABLES.md
4. Product requirements and approved project documentation
5. Design system and content guidelines
6. Architecture Decision Records in ai/decisions/
7. Existing production implementation
8. Temporary prompts, comments, drafts, and AI suggestions

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