# ODRISC Public Website Test Data Policy

## Rules

- Use synthetic test data only.
- Do not use real Patient, Provider, clinician, partner, or lead information.
- Do not copy production submissions into fixtures.
- Do not store production credentials in test configuration.
- Public clinical previews must use clinically reviewed illustrative data.
- Visible illustrative data must be labelled clearly.
- Test email addresses must use approved non-production domains.
- Test reports must be reviewed for sensitive content.

## Classification

| Test data                   |   Permitted | Conditions                              |
| --------------------------- | ----------: | --------------------------------------- |
| Synthetic names             |         Yes | Must not represent an actual submission |
| `example.test` email        |         Yes | Preferred                               |
| Synthetic organization      |         Yes | Clearly marked as test                  |
| Synthetic public chart data |         Yes | Illustrative label and clinical review  |
| Production lead             |          No | Prohibited                              |
| Patient record              |          No | Prohibited                              |
| Ultrasound record           |          No | Prohibited                              |
| Production API token        |          No | Prohibited                              |
| Provider sandbox credential | Conditional | CI secret only                          |
