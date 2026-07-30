# ODRISC Public Website Architecture QA Checklist

## Item

- Page ID, feature, or service:
- Owner:
- Reviewer:
- Review date:

## Boundaries

- [ ] Correct architectural layer is used
- [ ] Server and client boundaries are justified
- [ ] No Client Component imports server-only code
- [ ] No page imports a vendor SDK directly
- [ ] No direct SQL Server access exists
- [ ] No clinical logic is duplicated

## Routing and Content

- [ ] Route maps to an approved Page ID
- [ ] Canonical route comes from the approved registry
- [ ] Content comes from `src/content`
- [ ] Internal documentation is not parsed at runtime
- [ ] Product Status uses the controlled source
- [ ] Translation and RTL behavior are defined

## Integrations

- [ ] External service uses an adapter
- [ ] Request and response schemas are validated
- [ ] Timeout behavior is defined
- [ ] Retry behavior is safe
- [ ] Failure and recovery states are defined
- [ ] Sensitive values are absent from logs

## Forms and Analytics

- [ ] Form uses the approved Server Action flow
- [ ] Rate limiting and anti-abuse controls exist
- [ ] No clinical data is requested
- [ ] Analytics uses the internal wrapper
- [ ] Consent is checked
- [ ] Event payload is schema validated

## Security

- [ ] Secrets remain server-side
- [ ] Runtime public configuration is allowlisted
- [ ] CSP implications are reviewed
- [ ] Request-size limits are defined
- [ ] Origin validation is present where required
- [ ] Error responses expose no sensitive details

## Operations

- [ ] Health-check implications are defined
- [ ] Logs contain request and release identifiers
- [ ] Cache behavior is defined
- [ ] Deployment works with immutable images
- [ ] Rollback does not require rebuilding
- [ ] Staging noindex remains active

## Result

- [ ] Approved
- [ ] Approved with revisions
- [ ] Requires security review
- [ ] Requires privacy review
- [ ] Requires infrastructure review
- [ ] Rejected