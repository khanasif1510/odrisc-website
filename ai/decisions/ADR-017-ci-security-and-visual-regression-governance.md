# ADR-017 — CI Security and Visual-Regression Governance

## Status

Approved

## Date

2026-08-08

## Context

The ODRISC public-website Testing Strategy requires dependency checks, secret
scanning, container scanning, and selected visual-regression testing.

The repository must define which findings block integration before those checks
are represented as required CI gates. A passing or skipped job must not imply
that an unimplemented security or visual control has been verified.

The current website contains foundational locale-routing and shared-entry
behavior, but the production Audience Gateway component and its approved visual
design have not yet been implemented. Capturing the current placeholder as a
visual baseline would incorrectly approve temporary presentation as intended
design.

The maximum production-container image size also remains unresolved. The current
local image size may be recorded as evidence, but it must not become an
unapproved release threshold.

## Decision

### Dependency Advisory Gate

Every pull request and protected-branch build must run the repository dependency
audit.

The dependency gate will:

- Use the committed pnpm lockfile.
- Fail for high or critical known vulnerabilities.
- Report moderate and low findings without making them release blocking.
- Prohibit automatic force-upgrades or unreviewed dependency changes.
- Require lockfile review when an override or dependency update is introduced.
- Treat an unavailable advisory service as a visible CI failure rather than a
  successful security result.

A vulnerability exception requires documented ownership, rationale, expiry, and
approval. This decision does not create an exception.

### Secret-Scanning Gate

Gitleaks is the approved initial repository secret scanner.

The secret-scanning gate will:

- Run on pull requests and protected-branch changes.
- Scan the repository history and proposed changes available to the workflow.
- Fail when a verified secret or credential finding is detected.
- Use a pinned scanner release in CI.
- Prohibit broad ignore rules that conceal unreviewed findings.
- Require any false-positive suppression to be narrow, documented, and reviewed.

Secret scanning complements GitHub-hosted secret-protection controls where those
controls are available.

### Container-Scanning Gate

Trivy is the approved initial production-container vulnerability scanner.

The container-scanning gate will:

- Scan the same standalone production image built by CI.
- Report discovered operating-system and application-package vulnerabilities.
- Fail for high or critical vulnerabilities when a published fix is available.
- Report vulnerabilities without an available fix for explicit risk review.
- Use a pinned scanner release in CI.
- Produce reviewable scan evidence without exposing secrets.

The container image must also start as a non-root user and reach its configured
healthy state before it is accepted as runtime evidence.

### Visual-Regression Scope

Playwright screenshot assertions remain the approved visual-regression tool.

Initial release-blocking baselines will cover the implemented and
design-approved Audience Gateway in these controlled views:

- English desktop
- Arabic right-to-left desktop
- One approved mobile viewport

Visual baselines must be generated in the approved Linux CI environment using
the pinned Playwright version and browser binaries. Baseline changes require
screenshot-diff review and design approval.

The placeholder implementation must not be captured as an approved baseline.
The visual-regression CI gate will be introduced when the Audience Gateway has
an approved implementation and baseline set. Until then, CI must not publish a
skipped or empty visual-regression job as successful visual evidence.

Additional page or component snapshots require explicit test ownership and
review before becoming release blocking.

### Container Image Size

The current locally observed production image size of approximately 372 MB is
recorded only as implementation evidence.

No release-blocking image-size threshold is established by this decision.
Container-size enforcement remains dependent on Q-179.

## Consequences

- High and critical dependency vulnerabilities block CI.
- Verified secret findings block CI.
- High and critical fixable container vulnerabilities block CI.
- Scanner versions must be pinned and reviewed.
- Security jobs cannot silently pass when their scanners did not run.
- The CI container image must be tested for startup, health, and non-root
  execution.
- Visual regression will begin with meaningful approved UI rather than a
  placeholder baseline.
- The absence of an approved visual baseline remains visible and cannot be
  represented as a passing visual test.
- Q-173, Q-174, Q-261, and Q-269 are resolved.
- Q-179 remains open.

## Alternatives Considered

### Block Every Dependency Advisory Severity

Not selected because moderate and low findings require review but do not all
carry equivalent release risk. High and critical findings are the initial
blocking threshold.

### Use Dependency Audit Without Secret or Container Scanning

Rejected because dependency advisories do not detect committed credentials or
vulnerabilities in the production operating-system image.

### Adopt Multiple Scanners for Each Security Category

Not selected initially because overlapping scanners increase maintenance and
triage burden without an approved need. Additional scanners require a separate
governance decision.

### Approve the Placeholder as a Visual Baseline

Rejected because it would convert temporary implementation into approved visual
design and create misleading release evidence.

### Add an Empty or Skipped Visual-Regression Job

Rejected because a green or skipped job would imply coverage that does not yet
exist.

### Enforce the Current Container Size as the Maximum

Rejected because one observed image size is not an approved performance budget.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/project/SOURCE_OF_TRUTH.md`
- `docs/project/OPEN_QUESTIONS.md`
- `docs/engineering/DEPENDENCY_POLICY.md`
- `docs/engineering/RELEASE_QUALITY_GATE.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `docs/engineering/TECH_STACK.md`
- `docs/engineering/ARCHITECTURE.md`
- `docs/design/DESIGN_QA_CHECKLIST.md`
- `docs/product/PAGE_REQUIREMENTS.md`
- `ai/decisions/ADR-015-public-website-testing-strategy.md`
