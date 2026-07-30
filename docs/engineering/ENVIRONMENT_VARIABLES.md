# ODRISC Public Website Environment Variables

## Purpose

This document records every approved environment variable without storing secret values.

## Classification

| Classification | Meaning |
|---|---|
| Public | Intentionally exposed to the browser |
| Server-only | Available only to server code |
| Build-time | Required during build |
| Runtime | Required when the container runs |
| Secret | Must use approved secret storage |
| Optional | Feature remains functional without it |

## Registry

| Variable | Classification | Required | Environments | Purpose | Owner | Sensitive | Status |
|---|---|---:|---|---|---|---:|---|
| `SITE_URL` | Server-only, build and runtime | Yes | All | Canonical production site origin | Engineering | No | Approved |
| `GTM_CONTAINER_ID` | Server-only, runtime | Conditional | Staging, production | GTM container exposed through approved runtime configuration | Analytics | No | Proposed |
| `GA_MEASUREMENT_ID` | Server-only, runtime | Conditional | Staging, production | GA4 identifier exposed only through analytics adapter | Analytics | No | Proposed |
| `APP_ENV` | Server-only, runtime | Yes | All | Local, preview, staging, or production environment | Engineering | No | Approved |
| `APP_RELEASE` | Server-only, runtime | Yes | Staging, production | Immutable release identifier | Engineering | No | Approved |
| `ODRISC_PUBLIC_API_BASE_URL` | Server-only, runtime | Conditional | All | Approved ODRISC public API | CTO | No | Proposed |
| `FORM_DELIVERY_PROVIDER` | Server-only, runtime | Yes when forms launch | Staging, production | Select form-delivery adapter | Engineering | No | Proposed |
| `FORM_DELIVERY_SECRET` | Secret, runtime | Conditional | Staging, production | Authenticate delivery provider | CTO | Yes | Proposed |
| `LOG_LEVEL` | Server-only, runtime | Yes | All | Structured logging level | Engineering | No | Proposed |

No real secret values belong in this file.

## Runtime Public Configuration

Environment-varying public values must be exposed only through the allowlisted `/api/config/public` response or server-rendered approved configuration.

`NEXT_PUBLIC_*` variables are reserved for intentionally public values that do not need to change when the same immutable image is promoted between environments.