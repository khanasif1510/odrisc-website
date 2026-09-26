import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const growth = "/providers/intelligence/fetal-growth-intelligence/";

test("provider header reveals labels and white surface on upward scroll @reduced-motion", async ({
  page,
}) => {
  await page.goto("/providers/");
  const header = page.locator("header.site-header.provider");
  const frame = header.locator(".site-header-frame");
  const links = header.locator(".provider-nav-links");
  const desktop = (page.viewportSize()?.width ?? 0) > 760;
  // Confirm client interactivity before testing scroll listeners on the SSR page.
  const caseButton = page.getByRole("button", { name: /Anaya · Illustrative case/ });
  await caseButton.click();
  await expect(caseButton).toHaveAttribute("aria-pressed", "true");
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(header).toHaveClass(/is-at-top/);
  await expect(header).toHaveCSS("position", "fixed");
  await expect(header.locator(".site-nav")).toHaveCSS("text-transform", "uppercase");
  await expect(frame).toHaveCSS(
    "background-color",
    desktop ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)",
  );

  await page.evaluate(() => window.scrollBy({ top: 850, behavior: "instant" }));
  await expect(header).toHaveClass(/is-scroll-down/);
  await expect(header).not.toHaveClass(/is-at-top/);
  expect(await header.evaluate((element) => element.getBoundingClientRect().top)).toBe(0);
  await expect(frame).toHaveCSS(
    "background-color",
    desktop ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)",
  );
  if (desktop) {
    await expect(links).toHaveCSS("opacity", "0");
  }

  await page.evaluate(() => window.scrollBy({ top: -300, behavior: "instant" }));
  await expect(header).toHaveClass(/is-scroll-up/);
  await expect(frame).toHaveCSS(
    "background-color",
    desktop ? "rgba(255, 255, 255, 0.94)" : "rgba(0, 0, 0, 0)",
  );
  if (desktop) {
    await expect(links).toHaveCSS("opacity", "1");
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(header).toHaveClass(/is-at-top/);
  await expect(frame).toHaveCSS(
    "background-color",
    desktop ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)",
  );
});

test("review stays usable at 320px and does not publish English as Arabic", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 780 });
  await page.goto(growth);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  await page.getByRole("button", { name: "Source record" }).click();
  await expect(page.getByRole("heading", { name: "Example report 03" })).toBeVisible();
  const response = await page.goto("/ar/providers/");
  expect(response?.status()).toBe(404);
  await expect(page.getByTestId("fetal-growth-demo")).toHaveCount(0);
});

test("provider review routes are available, non-indexable and do not collect credentials @p0", async ({
  page,
}, testInfo) => {
  for (const route of [
    "/providers/",
    "/providers/clinical-platform/",
    growth,
    "/providers/intelligence/maternal-intelligence/",
    "/providers/methodology/",
    "/providers/request-demonstration/",
  ]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator("form, input, textarea")).toHaveCount(0);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    const audit = await new AxeBuilder({ page }).analyze();
    expect(
      audit.violations.map(({ id, nodes }) => ({ id, elements: nodes.map((node) => node.target) })),
    ).toEqual([]);
    if (route === "/providers/" || route === growth) {
      for (const photo of await page.locator("main img").all()) {
        await photo.scrollIntoViewIfNeeded();
        await expect
          .poll(() => photo.evaluate((image) => (image as HTMLImageElement).naturalWidth))
          .toBeGreaterThan(0);
      }
      await page.locator("h1").scrollIntoViewIfNeeded();
      await page
        .locator("main section")
        .first()
        .screenshot({
          path: testInfo.outputPath(route === growth ? "growth-hero.png" : "home-hero.png"),
        });
      await page
        .getByTestId(route === "/providers/" ? "clinical-lookup-dashboard" : "fetal-growth-demo")
        .screenshot({ path: testInfo.outputPath("demo.png") });
      await page.screenshot({
        path: testInfo.outputPath(route === growth ? "fetal-growth.png" : "homepage.png"),
        fullPage: true,
      });
    }
  }
});

test("one selected visit drives growth, Doppler and source records @p0", async ({ page }) => {
  await page.goto(growth);
  const demo = page.getByTestId("fetal-growth-demo");
  await expect(demo.getByText("126 g/week", { exact: true })).toBeVisible();
  await demo.getByRole("button", { name: /24w 1d.*Second assessment/ }).click();
  await expect(demo.getByText("88 g/week", { exact: true })).toBeVisible();
  await demo.getByRole("button", { name: "Doppler context" }).click();
  await expect(demo.getByText("1.82", { exact: true }).first()).toBeVisible();
  await expect(demo.getByText("1.69", { exact: true })).toBeVisible();
  await expect(demo.getByText("Not recorded", { exact: true }).first()).toBeVisible();
  await demo.getByRole("button", { name: "Source record" }).click();
  await expect(demo.getByRole("heading", { name: "Example report 02" })).toBeVisible();
  await demo.getByRole("button", { name: /20w 0d.*First assessment/ }).click();
  await expect(demo.getByRole("heading", { name: "Example report 01" })).toBeVisible();
  await demo.getByRole("button", { name: "Growth timeline" }).click();
  await expect(demo.getByText("Two visits needed", { exact: true })).toBeVisible();
  await demo.getByText("View the demonstration data", { exact: true }).click();
  await expect(demo.getByRole("table")).toBeVisible();
  await expect(demo.getByRole("row")).toHaveCount(4);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});

test("navigation and demo work by keyboard @p0 @reduced-motion", async ({ page }) => {
  await page.goto("/providers/");
  const toggle = page.getByRole("button", { name: "Toggle navigation" });
  if (await toggle.isVisible()) {
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
  }
  await page
    .getByRole("navigation", { name: "provider navigation" })
    .getByRole("link", { name: "Platform", exact: true })
    .click();
  await expect(page).toHaveURL(/\/providers\/clinical-platform\/$/);
  await page.goto(growth);
  const visit = page.getByRole("button", { name: /20w 0d.*First assessment/ });
  await visit.focus();
  await page.keyboard.press("Enter");
  await expect(visit).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText("Two visits needed", { exact: true })).toBeVisible();
});
