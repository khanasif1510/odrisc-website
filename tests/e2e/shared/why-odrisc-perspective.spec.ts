import { expect, test } from "@playwright/test";

test("Perspective family frame selects the correct responsive image", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/about/");
  const frame = page.getByRole("region", { name: "ODRISC connected pregnancy journey visual" });
  const image = frame.locator("img");
  await frame.scrollIntoViewIfNeeded();
  const mobile = (page.viewportSize()?.width ?? 1280) <= 760;
  const expectedImage = mobile
    ? "why-odrisc-perspective-family-mobile-853x1844-v1.png"
    : "why-odrisc-perspective-family-desktop-1672x941-v1.png";
  await expect
    .poll(() => image.evaluate((element: HTMLImageElement) => element.currentSrc))
    .toContain(expectedImage);
  await expect
    .poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth))
    .toBeGreaterThan(0);
  await expect(image).toHaveCSS("object-fit", "cover");
  await expect(image).toHaveCSS("object-position", "50% 100%");
  await expect(page.locator(".why-odrisc-perspective-frame img")).toHaveAttribute(
    "src",
    /why-odrisc-perspective-couple-1243x1265-v1/,
  );
  const quote = frame.locator(".why-odrisc-perspective-visual-quote");
  await expect(quote).toHaveCSS("color", "rgb(255, 118, 128)");
  await expect(quote.locator("span")).toHaveCount(3);
  await expect(quote.locator("span")).toHaveText([
    "“When conception has taken place,",
    "one must beware of every excess",
    "and change”",
  ]);
  const placement = await quote.evaluate((element) => {
    const box = element.getBoundingClientRect();
    const parent = element.parentElement!.getBoundingClientRect();
    return {
      left: box.left,
      midpoint: window.innerWidth / 2,
      mobileInset: box.left - parent.left,
      verticalOffset: Math.abs(box.top + box.height / 2 - parent.top - parent.height / 2),
    };
  });
  if (mobile) {
    expect(Math.abs(placement.mobileInset - 24)).toBeLessThan(1);
  } else {
    expect(Math.abs(placement.left - placement.midpoint)).toBeLessThan(1);
  }
  expect(placement.verticalOffset).toBeLessThan(1);
  const quoteSize = parseFloat(
    await quote.locator("p").evaluate((element) => getComputedStyle(element).fontSize),
  );
  const referenceSize = parseFloat(
    await page
      .locator(".why-odrisc-numbers-closing p")
      .last()
      .evaluate((element) => getComputedStyle(element).fontSize),
  );
  expect(Math.abs(quoteSize - referenceSize - 25)).toBeLessThan(0.1);
  const attribution = quote.locator("cite");
  await expect(attribution).toHaveText("– Soranus of Ephesus");
  expect(
    parseFloat(await attribution.evaluate((element) => getComputedStyle(element).fontSize)),
  ).toBe(referenceSize);
  const attributionGap = await attribution.evaluate((element) => {
    const quoteText = element.previousElementSibling!.getBoundingClientRect();
    return element.getBoundingClientRect().top - quoteText.bottom;
  });
  expect(Math.abs(attributionGap - (page.viewportSize()?.height ?? 720) * 0.03)).toBeLessThan(1);
});
