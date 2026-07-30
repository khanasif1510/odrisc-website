# ODRISC Public Website Test Case Registry

## Purpose

This registry tracks material automated and manual tests supporting public-
website requirements and release decisions.

## Status Definitions

| Status | Meaning |
|---|---|
| Proposed | Test need identified |
| Specified | Test contract documented |
| Implemented | Test code or manual procedure exists |
| Passing | Latest required execution passed |
| Failing | Latest required execution failed |
| Flaky | Test produced inconsistent results |
| Quarantined | Temporarily isolated with approval |
| Retired | Requirement or test removed |

## Registry

| Test ID | Requirement | Page or Component | Risk | Level | Browser or environment | Locale | Owner | Release blocking | Status |
|---|---|---|---|---|---|---|---|---:|---|
| TST-E2E-001 | SHR-020 | Shared audience entry | P0 | E2E | Chromium, Firefox, WebKit, mobile | en, ar | QA owner | Yes | Proposed |
| TST-E2E-002 | SHR-020 | Patient journey | P0 | E2E | Cross-browser and mobile | en, ar | QA owner | Yes | Proposed |
| TST-E2E-003 | SHR-020 | Provider journey | P0 | E2E | Cross-browser and mobile | en, ar | QA owner | Yes | Proposed |
| TST-A11Y-001 | SHR-020 | Site Header | P0 | Accessibility | Storybook and browser | en, ar | Accessibility owner | Yes | Proposed |
| TST-INT-001 | SHR-020 | General Contact Form | P0 | Integration | Node.js | en | Engineering | Yes | Proposed |
| TST-INT-002 | SHR-020 | Provider Demo Form | P0 | Integration | Node.js | en | Engineering | Yes | Proposed |
| TST-SEC-001 | SHR-020 | Application handoff | P0 | Security | Node.js and browser | en, ar | Security owner | Yes | Proposed |
| TST-RTL-001 | SHR-020 | Arabic navigation | P0 | E2E | Arabic RTL project | ar | Localization owner | Yes | Proposed |
| TST-MOT-001 | SHR-020 | Shared hero | P0 | E2E | Reduced-motion project | en, ar | Design engineering | Yes | Proposed |
| TST-SMK-001 | SHR-020 | Production critical routes | P0 | Smoke | Production | en, ar | DevOps | Yes | Proposed |