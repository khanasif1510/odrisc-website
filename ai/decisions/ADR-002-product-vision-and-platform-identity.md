# ADR-002 — Product Vision and Platform Identity

## Status

Approved

## Date

2026-07-23

## Context

ODRISC includes Patient-facing risk, weight, nutrition, and physical-activity capabilities together with developing Provider-facing maternal and fetal intelligence capabilities.

Without one documented product identity, these capabilities could be represented as separate products or as an unrelated collection of pregnancy tools.

## Decision

ODRISC will be developed and positioned as one connected maternal and fetal intelligence platform.

The Patient and Provider experiences will operate as two perspectives on the same longitudinal pregnancy ecosystem.

Longitudinal maternal and fetal understanding will remain the central product foundation.

Artificial intelligence will be treated as an enabling technology rather than the primary product identity.

ODRISC will support but will not replace healthcare professionals.

## Rationale

This identity:

- Connects the existing Patient capabilities with the developing Provider platform
- Creates a coherent long-term product direction
- Differentiates ODRISC from generic pregnancy and wellness applications
- Preserves clinical responsibility
- Supports future hospital and enterprise implementation
- Provides a scalable foundation for Qatar and GCC expansion
- Prevents product development from becoming a collection of disconnected tools

## Consequences

- Product capabilities must contribute to the shared longitudinal record.
- Patient and Provider experiences must remain connected.
- Public claims must distinguish available capabilities from roadmap capabilities.
- Product requirements must define clinical purpose and safety boundaries.
- Clinical intelligence must be explainable and reviewable.
- A product-status register must be maintained.
- Major scope changes require an updated decision record.

## Alternatives Considered

### Patient Wellness Application

Rejected because it would underrepresent the Provider, clinical intelligence, fetal-growth, and institutional direction.

### Provider-Only Clinical Platform

Rejected because Patient participation, monitoring, and engagement are core parts of the ODRISC ecosystem.

### Collection of Independent Tools

Rejected because it would create fragmented experiences and weaken the longitudinal product foundation.

### AI Pregnancy Platform

Rejected as the primary identity because it overemphasizes technology and may imply unsupported autonomy.

## Related Documents

- `PROJECT_CONTEXT.md`
- `docs/product/PRODUCT_VISION.md`
- `docs/product/AUDIENCE.md`
- `docs/product/PRODUCT_STATUS.md`
- `ai/rules/NON_NEGOTIABLES.md`
