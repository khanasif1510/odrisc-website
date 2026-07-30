# Current Source Coding-Conflict Audit

- **Audit date:** 2026-07-30
- **Audited commit:** `69ca742`
- **Audit branch:** `audit/current-source-coding-conflicts`
- **Status:** Complete

## 1. Purpose

This audit inspects the current source for conflicts with the ODRISC coding standards and architecture before further implementation begins.

The audit classifies findings before any source modification. No blind global replacements were performed.

## 2. Classification Model

The permitted classifications are:

- Approved
- Legacy
- Generated
- Test-only
- Requires migration
- Requires exception
- Prohibited

## 3. Inspection Results

| Inspection                   | Scope          | Result                                | Classification     |
| ---------------------------- | -------------- | ------------------------------------- | ------------------ |
| JavaScript and JSX files     | `src`          | No files found                        | Not applicable     |
| Weak typing and suppressions | `src`, `tests` | No matches found                      | Not applicable     |
| Direct environment access    | `src`          | No `process.env` usage found          | Not applicable     |
| Console usage                | `src`          | No matching console calls found       | Not applicable     |
| Client Component boundaries  | `src`          | No `"use client"` boundaries found    | Not applicable     |
| Direct vendor calls          | `src`          | No matching direct vendor calls found | Not applicable     |
| Inline and arbitrary styling | `src`          | Six matches found                     | Requires migration |

## 4. Findings Requiring Migration

| ID      | Location                    | Finding                                       | Classification     | Required action                                                                             |
| ------- | --------------------------- | --------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------- |
| CCA-001 | `src/app/page.tsx:39`       | Arbitrary hover colours and `md:w-[158px]`    | Requires migration | Replace with approved ODRISC semantic colour, component and sizing tokens                   |
| CCA-002 | `src/app/page.tsx:54`       | Arbitrary opacity, colour and width utilities | Requires migration | Remove when replacing the starter homepage with the approved ODRISC implementation          |
| CCA-003 | `src/app/globals.css:4-5`   | Default starter light-theme colour values     | Requires migration | Retain the semantic-token mechanism but replace the values through the ODRISC design system |
| CCA-004 | `src/app/globals.css:17-18` | Default starter dark-theme colour values      | Requires migration | Remove or replace according to the approved ODRISC theme policy                             |

## 5. Finding Context

The matched styling originates from the initial Next.js starter implementation.

It is temporarily acceptable during repository bootstrap but is not approved as the final ODRISC interface. The findings are therefore classified as `Requires migration` rather than `Prohibited`.

Migration must occur through the approved design-system and homepage implementation work. It must not be performed through blind global replacement.

## 6. Source Modification Decision

No source code was modified during this audit.

The following files remain unchanged by this task:

- `src/app/page.tsx`
- `src/app/globals.css`

Their migration will be handled in a separately scoped implementation task.

## 7. Audit Conclusion

The current source has no detected JavaScript migration, weak-typing, direct environment-access, console-use, Client Component boundary or direct vendor-call conflicts.

Four grouped starter-style findings require migration to the approved ODRISC design system. No exception or prohibited-code finding was identified.
