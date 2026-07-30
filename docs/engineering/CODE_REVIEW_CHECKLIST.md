# ODRISC Public Website Code Review Checklist

## Identity

- Pull request:
- Requirement IDs:
- Page IDs:
- Component IDs:
- Reviewer:
- Review date:

## Scope

- [ ] The change solves one coherent problem
- [ ] Unrelated refactoring is absent
- [ ] Documentation is updated
- [ ] Product Status implications are reviewed

## TypeScript

- [ ] Strict typing is preserved
- [ ] No unjustified `any` exists
- [ ] Untrusted values begin as `unknown`
- [ ] Runtime boundaries use schemas
- [ ] Controlled unions are handled exhaustively
- [ ] Assertions and non-null assertions are justified

## React and Next.js

- [ ] Server Components are used by default
- [ ] Client boundaries are justified
- [ ] Components and Hooks remain pure
- [ ] Effects synchronize only with external client systems
- [ ] Route files remain thin
- [ ] Links and buttons use correct semantics
- [ ] Static rendering is not disabled unnecessarily

## Architecture

- [ ] Correct module layer is used
- [ ] No forbidden import crosses a boundary
- [ ] Vendor SDKs remain behind adapters
- [ ] Existing components and services are reused
- [ ] No direct SQL Server or clinical-system access exists
- [ ] No source of truth is duplicated

## Accessibility and Localization

- [ ] Semantic HTML is used
- [ ] Keyboard and focus behavior work
- [ ] Accessible names are present
- [ ] Arabic content is supported
- [ ] RTL behavior is correct
- [ ] Reduced motion is supported
- [ ] Content expansion does not break the layout

## Security and Privacy

- [ ] Inputs are validated
- [ ] External URLs are controlled
- [ ] Secrets remain server-side
- [ ] Logs contain no sensitive data
- [ ] Analytics contain no PII or clinical data
- [ ] Public forms do not request clinical information

## Quality

- [ ] Error and recovery states are implemented
- [ ] Required tests are included
- [ ] Storybook is updated where applicable
- [ ] Performance impact is acceptable
- [ ] No unnecessary dependency is introduced
- [ ] Formatting, linting, and type checking pass

## Result

- [ ] Approved
- [ ] Approved with revisions
- [ ] Requires accessibility review
- [ ] Requires clinical review
- [ ] Requires security review
- [ ] Requires architecture review
- [ ] Rejected
