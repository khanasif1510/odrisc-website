# ODRISC Public Website Error Catalog

## Purpose

This document records stable internal error codes, safe public messages, retry behavior, and operational ownership.

## Catalog

| Code                | Category      | Internal condition                      | Safe public message                                                                        | Retryable | Log level | Owner       |
| ------------------- | ------------- | --------------------------------------- | ------------------------------------------------------------------------------------------ | --------: | --------- | ----------- |
| `OD-WEB-FORM-001`   | Validation    | Form payload failed validation          | Please review the highlighted information and try again.                                   |       Yes | Info      | Engineering |
| `OD-WEB-FORM-002`   | Rate limit    | Submission threshold exceeded           | Too many requests were received. Please wait before trying again.                          |       Yes | Warn      | Engineering |
| `OD-WEB-FORM-003`   | Delivery      | Form provider did not accept submission | We could not send your request. Please try again or use the alternate contact option.      |       Yes | Error     | Operations  |
| `OD-WEB-CONFIG-001` | Configuration | Required runtime configuration missing  | This service is temporarily unavailable.                                                   |        No | Fatal     | CTO         |
| `OD-WEB-API-001`    | Integration   | ODRISC public API unavailable           | The requested service is temporarily unavailable.                                          |       Yes | Error     | CTO         |
| `OD-WEB-RENDER-001` | Rendering     | Unexpected page-rendering error         | We could not display this page correctly. Please return to the previous page or try again. |       Yes | Error     | Engineering |
