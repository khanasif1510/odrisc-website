# ODRISC Public Website Dependency Policy

## Purpose

This document governs the introduction, upgrade, replacement, and removal of public-website dependencies.

## Required Proposal Fields

- Package:
- Requested version:
- Problem being solved:
- Existing stack capability:
- Alternatives considered:
- Server or client dependency:
- Production or development dependency:
- Bundle-size impact:
- Accessibility impact:
- RTL impact:
- Security considerations:
- License:
- Maintenance activity:
- Test plan:
- Exit strategy:
- Approver:

## Approval Levels

| Change | Approval |
|---|---|
| Patch update | Engineering review |
| Minor update | Engineering review and CI |
| New development-only dependency | CTO or delegated owner |
| New production server dependency | CTO |
| New production client dependency | CTO plus performance review |
| Framework or major-version change | Founder, CTO, and ADR |
| New third-party data processor | Privacy and security approval |

## Rules

- Do not duplicate existing functionality.
- Do not install dependencies directly from unreviewed Git repositories.
- Do not use abandoned or unmaintained packages.
- Do not bypass the lockfile.
- Do not accept a dependency only because generated code requires it.
- Remove unused packages promptly.