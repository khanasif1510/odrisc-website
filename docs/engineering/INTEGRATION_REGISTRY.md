# ODRISC Public Website Integration Registry

## Purpose

This document records every approved or proposed external integration used by the public website.

## Status Definitions

| Status         | Meaning                                           |
| -------------- | ------------------------------------------------- |
| Proposed       | Integration requires approval                     |
| Approved       | Architecture and provider are approved            |
| In development | Adapter is being implemented                      |
| In QA          | Integration is being tested                       |
| Active         | Integration is used in production                 |
| Restricted     | Integration is limited to controlled environments |
| Deprecated     | Integration must not be used for new work         |
| Retired        | Integration has been removed                      |

## Registry

| Integration ID | Integration               | Purpose                                       | Data classification         | Direction        | Adapter location                            | Authentication    | Timeout        | Owner            | Status   |
| -------------- | ------------------------- | --------------------------------------------- | --------------------------- | ---------------- | ------------------------------------------- | ----------------- | -------------- | ---------------- | -------- |
| INT-WEB-001    | ODRISC public API         | Approved availability and application handoff | Public                      | Outbound         | `src/server/integrations/odrisc-api/`       | To define         | To define      | CTO              | Proposed |
| INT-WEB-002    | General-enquiry delivery  | Deliver public contact requests               | Operational contact data    | Outbound         | `src/server/integrations/form-delivery/`    | To define         | To define      | Operations       | Proposed |
| INT-WEB-003    | Provider-demo delivery    | Deliver Provider demonstration requests       | Operational contact data    | Outbound         | `src/server/integrations/form-delivery/`    | To define         | To define      | Commercial owner | Proposed |
| INT-WEB-004    | Google Tag Manager        | Consent-controlled analytics loading          | Public interaction metadata | Browser outbound | `src/lib/analytics/providers/gtm.ts`        | Public identifier | Not applicable | Analytics owner  | Proposed |
| INT-WEB-005    | External error monitoring | Scrubbed application-error reporting          | Operational technical data  | Outbound         | `src/server/integrations/error-monitoring/` | Secret            | To define      | CTO              | Proposed |
