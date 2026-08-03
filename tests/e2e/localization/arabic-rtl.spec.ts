import { expect, test } from "@playwright/test";

test("@rtl Arabic entry uses the approved locale and direction", async ({ page }) => {
  await page.goto("/ar/");

  const documentElement = page.locator("html");

  await expect(documentElement).toHaveAttribute("lang", "ar");
  await expect(documentElement).toHaveAttribute("dir", "rtl");
  await expect(page.getByRole("heading", { name: "ODRISC" })).toBeVisible();
});
