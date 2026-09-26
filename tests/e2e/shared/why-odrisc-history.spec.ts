import { expect, test } from "@playwright/test";

test("Founding paragraphs occupy two thirds of the image frame width", async ({ page }) => {
  await page.goto("/about/");
  const frameWidth = await page
    .locator(".why-odrisc-history-frame")
    .evaluate((element) => element.getBoundingClientRect().width);
  for (const selector of [".why-odrisc-since p", ".why-odrisc-history-description"]) {
    const paragraph = page.locator(selector);
    const width = await paragraph.evaluate((element) => element.getBoundingClientRect().width);
    expect(Math.abs(width - (frameWidth * 2) / 3)).toBeLessThan(1);
    await expect(paragraph).toHaveCSS(
      "text-align",
      selector === ".why-odrisc-history-description" ? "right" : "left",
    );
  }
});
