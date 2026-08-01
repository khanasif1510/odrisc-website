import { expect, test } from "@playwright/test";

import { analyzeAccessibility } from "../../helpers/accessibility";

test("@p0 @a11y shared entry has no automated accessibility violations", async ({ page }) => {
  await page.goto("/");

  const results = await analyzeAccessibility(page);

  expect(results.violations).toEqual([]);
});
