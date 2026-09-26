import { expect, test } from "@playwright/test";

test("Problem frame keeps larger copy readable without clipping", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/about/");
  const frame = page.locator(".why-odrisc-problem-frame");
  const body = frame.locator(
    ".why-odrisc-problem-copy p, .why-odrisc-stat p, .why-odrisc-numbers-closing p",
  );
  const measurements = await body.evaluateAll((elements) =>
    elements.map((element) => {
      const style = getComputedStyle(element);
      return {
        size: parseFloat(style.fontSize),
        weight: style.fontWeight,
        lineHeight: parseFloat(style.lineHeight) / parseFloat(style.fontSize),
        overflow: element.scrollWidth - element.clientWidth,
      };
    }),
  );
  for (const measurement of measurements) {
    expect(measurement.size).toBeGreaterThanOrEqual(16);
    expect(measurement.weight).toBe("600");
    expect(measurement.lineHeight).toBeGreaterThanOrEqual(1.7);
    expect(measurement.overflow).toBeLessThanOrEqual(1);
  }
  for (const line of await frame
    .locator(".why-odrisc-numbers-line, .why-odrisc-numbers-rule")
    .all()) {
    await expect(line).toHaveCSS("height", "2px");
    await expect(line).toHaveCSS("background-color", "rgb(77, 77, 77)");
  }
  expect(
    await frame.evaluate((element) => element.scrollHeight - element.clientHeight),
  ).toBeLessThanOrEqual(1);
  await expect(frame.locator("img")).toHaveCSS("filter", "none");
  await frame.screenshot({ path: test.info().outputPath("problem-frame.png") });
});
