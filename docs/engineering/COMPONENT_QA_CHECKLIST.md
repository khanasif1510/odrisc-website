# ODRISC Public Website Component QA Checklist

## Identity

- Component ID:
- Component name:
- Category:
- Runtime classification:
- Owner:
- Reviewer:
- Review date:

## Contract

- [ ] Purpose is documented
- [ ] Anatomy is documented
- [ ] Props are typed and minimal
- [ ] Variants represent approved meaning
- [ ] Required states are implemented
- [ ] Content contract is documented
- [ ] Prohibited uses are documented

## Architecture

- [ ] Server Component is used by default
- [ ] Client boundary is justified
- [ ] No server-only module enters the client bundle
- [ ] No external-service adapter is imported
- [ ] No environment variable is read directly
- [ ] No route string is hard-coded unnecessarily
- [ ] No duplicate component exists

## Design System

- [ ] Approved tokens are used
- [ ] No arbitrary visual values are introduced
- [ ] Patient and Provider variants remain connected
- [ ] Product Status styling is correct
- [ ] Clinical and semantic colors are not confused

## Accessibility

- [ ] Semantic HTML is correct
- [ ] Accessible name is present
- [ ] Keyboard interaction works
- [ ] Focus is visible and logical
- [ ] Touch targets meet the minimum size
- [ ] Meaning does not depend on color
- [ ] Error behavior is accessible
- [ ] Axe checks pass
- [ ] Manual accessibility review is complete

## Localization and RTL

- [ ] Long English content fits
- [ ] Arabic content fits
- [ ] RTL behavior is documented
- [ ] Directional icons behave correctly
- [ ] Chronological direction remains clear
- [ ] Localized labels do not break controls

## Motion

- [ ] Approved motion tokens are used
- [ ] Reduced-motion behavior exists
- [ ] Mobile motion is simplified
- [ ] Motion does not imply unavailable capability
- [ ] Motion performance is acceptable

## Product and Content

- [ ] Product Status comes from the controlled source
- [ ] Clinical boundaries are preserved
- [ ] Validation categories are precise
- [ ] Concept previews are labeled
- [ ] No unsupported claim is introduced

## Analytics

- [ ] Analytics ownership is documented
- [ ] Low-level primitives emit no analytics
- [ ] Events use the internal wrapper
- [ ] Sensitive data is absent

## Quality

- [ ] Storybook stories are complete
- [ ] Unit or component tests are complete
- [ ] Visual regression is complete where required
- [ ] Mobile testing is complete
- [ ] Performance impact is reviewed

## Result

- [ ] Approved
- [ ] Approved with revisions
- [ ] Requires accessibility revision
- [ ] Requires RTL revision
- [ ] Requires product review
- [ ] Requires clinical review
- [ ] Requires architecture revision
- [ ] Rejected
