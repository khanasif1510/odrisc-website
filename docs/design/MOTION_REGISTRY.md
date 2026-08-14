# ODRISC Motion Registry

## Purpose

This document records every proposed, approved, implemented, restricted, and retired major ODRISC animation.

## Motion Status

| Status         | Meaning                                                       |
| -------------- | ------------------------------------------------------------- |
| Proposed       | Motion concept requires approval                              |
| Approved       | Motion purpose and behavior are approved                      |
| In design      | Motion specification is being designed                        |
| In development | Motion is being implemented                                   |
| In QA          | Motion is under accessibility, performance, and visual review |
| Published      | Motion is active publicly                                     |
| Restricted     | Motion is limited to controlled contexts                      |
| Retired        | Motion has been removed                                       |

## Registry

| Motion ID   | Motion name                | Page ID    | Audience | Purpose                                           | Trigger              | Reduced-motion state    | Product-status dependency | Owner             | Status   |
| ----------- | -------------------------- | ---------- | -------- | ------------------------------------------------- | -------------------- | ----------------------- | ------------------------- | ----------------- | -------- |
| MOT-SHR-001 | Shared Hero Connection     | SH-PG-001  | Shared   | Show fragmented information becoming connected    | Page entry           | Final connected state   | None                      | Motion owner      | Approved |
| MOT-SHR-002 | Audience Card Interaction  | SH-PG-001  | Shared   | Reinforce equal audience choices                  | Hover, focus, press  | Static emphasis         | None                      | Motion owner      | Approved |
| MOT-PAT-001 | Patient Journey Timeline   | PAT-PG-001 | Patient  | Explain pregnancy progression                     | Scroll entry         | Static timeline         | Patient Product Status    | Motion owner      | In QA    |
| MOT-PAT-002 | Personal Pregnancy Journey | PAT-PG-001 | Patient  | Explain assessment, personalisation and support   | Scroll entry         | Completed journey state | Patient Product Status    | Motion owner      | In QA    |
| MOT-PAT-003 | Maternal Trajectory Reveal | PAT-PG-001 | Patient  | Connect illustrative maternal moments over time   | View and scroll      | Complete trajectory     | Maternal Intelligence     | Motion owner      | In QA    |
| MOT-PAT-004 | Fetal Growth Journey       | PAT-PG-001 | Patient  | Connect illustrative ultrasound moments over time | View and scroll      | Complete growth journey | Fetal Growth Intelligence | Motion owner      | In QA    |
| MOT-PRO-001 | Data-to-Intelligence Flow  | PRO-PG-001 | Provider | Explain longitudinal intelligence                 | Scroll entry         | Complete flow displayed | Provider Product Status   | Motion owner      | Approved |
| MOT-PRO-002 | Provider Workflow Sequence | PRO-PG-007 | Provider | Explain workflow stages                           | User or scroll entry | Static stepper          | Workflow Product Status   | Motion owner      | Approved |
| MOT-DAT-001 | Longitudinal Line Reveal   | Multiple   | Shared   | Explain trajectory across time                    | View entry           | Complete chart          | Clinical review           | Motion owner      | Approved |
| MOT-FDB-001 | Form Submission Feedback   | Multiple   | Shared   | Confirm loading, success, or failure              | Form submission      | Immediate state         | Form workflow             | Engineering owner | Approved |
