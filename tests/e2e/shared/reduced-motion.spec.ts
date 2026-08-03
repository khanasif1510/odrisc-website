import { expect, test } from "@playwright/test";

test("@reduced-motion reduced-motion preference reaches the page", async ({ page }) => {
  await page.goto("/");

  const prefersReducedMotion = await page.evaluate(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  expect(prefersReducedMotion).toBe(true);
  await expect(page.getByRole("heading", { name: "ODRISC" })).toBeVisible();
});
