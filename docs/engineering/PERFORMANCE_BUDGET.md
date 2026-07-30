# ODRISC Public Website Performance Budget

## Purpose

This document records measurable performance limits for pages, components, media, motion, and third-party scripts.

## Core Budgets

| Area | Budget |
|---|---:|
| LCP at the 75th percentile | ≤ 2.5 seconds |
| INP at the 75th percentile | ≤ 200 milliseconds |
| CLS at the 75th percentile | ≤ 0.1 |
| Ordinary page initial JavaScript | ≤ 170 KB compressed |
| Animated or chart page initial JavaScript | ≤ 230 KB compressed |
| Preferred hero image | ≤ 250 KB |
| Preferred content image | ≤ 150 KB |
| Third-party scripts before consent | Essential only |
| Major narrative sequences per page | 1 preferred, 3 maximum |

## Page Registry

| Page ID | Route | JS budget | Image budget | Animation budget | Third-party scripts | Status |
|---|---|---:|---:|---:|---|---|
| SH-PG-001 | `/` | 210 KB | 400 KB total | One major sequence | Consent system only before consent | Proposed |
| PAT-PG-001 | `/patients/` | 170 KB | 500 KB total | One minor sequence | Consent controlled | Proposed |
| PRO-PG-001 | `/providers/` | 230 KB | 600 KB total | Two sequences maximum | Consent controlled | Proposed |