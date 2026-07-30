# ODRISC Public Website Data Classification

## Classification Levels

| Class | Name | Public website policy |
|---|---|---|
| Class 1 | Public | May be stored and published after approval |
| Class 2 | Operational contact data | May be processed only through approved form workflows |
| Class 3 | Sensitive health or clinical data | Must not be collected by the public website |
| Class 4 | Secrets and credentials | Must remain server-side and access controlled |

## Data Registry

| Data | Class | Source | Destination | Retention owner | Logging permitted | Analytics permitted |
|---|---|---|---|---|---|---|
| Public page content | Class 1 | Repository | Website visitor | Content owner | Yes | Page metadata only |
| Product Status | Class 1 | Approved product register | Website visitor | Product owner | Yes | Status label only |
| Contact name | Class 2 | Public form | Approved delivery service | Operations | No | No |
| Work email | Class 2 | Public form | Approved delivery service | Operations | No | No |
| Organization | Class 2 | Public form | Approved delivery service | Operations | No by default | Category only when non-identifying |
| Form message | Class 2 | Public form | Approved delivery service | Operations | No | No |
| Medical history | Class 3 | Prohibited | None | Not applicable | No | No |
| Risk answers | Class 3 | Prohibited | None | Not applicable | No | No |
| Ultrasound measurements | Class 3 | Prohibited | None | Not applicable | No | No |
| Provider API secret | Class 4 | Secret store | Server integration | CTO | No | No |