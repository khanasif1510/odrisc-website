import { expect, test } from "@playwright/test";

test("Why ODRISC hero aligns copy and reveals the app action after shrinking", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/about/");

  const action = page.locator(".why-odrisc-hero-app-action");
  await expect(action).toHaveCSS("visibility", "hidden");
  await expect(action).toHaveAttribute("href", "https://app.odrisc.com");
  await expect(page.locator(".site-header-centre-link")).toHaveCSS("color", "rgb(77, 77, 77)");
  await expect(page.locator(".why-odrisc-hero-copy > .eyebrow")).toHaveCSS(
    "color",
    "rgb(91, 194, 163)",
  );
  const leftEdges = await page
    .locator(".why-odrisc-hero-copy > *")
    .evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().left));
  expect(Math.max(...leftEdges) - Math.min(...leftEdges)).toBeLessThan(1);

  const scrollToProgress = async (progress: number) => {
    await page.locator(".why-odrisc-hero-stage").evaluate((stage, value) => {
      const top = stage.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top + (stage.clientHeight - window.innerHeight) * value);
    }, progress);
  };

  await scrollToProgress(0.3);
  await expect(action).toHaveCSS("visibility", "visible");
  // The action now reveals before the spring finishes; measure final insets after settling.
  await expect(page.locator(".why-odrisc-hero")).toHaveCSS(
    "transform",
    "matrix(0.82, 0, 0, 0.82, 0, 0)",
  );
  const centreOffset = await action.evaluate((element) => {
    const box = element.getBoundingClientRect();
    const frame = document.querySelector(".why-odrisc-hero")!.getBoundingClientRect();
    return {
      leftGap: box.left - frame.left,
      bottomGap: frame.bottom - box.bottom,
    };
  });
  expect(Math.abs(centreOffset.leftGap - 70)).toBeLessThan(1);
  expect(Math.abs(centreOffset.bottomGap - 70)).toBeLessThan(1);
  // Keep the action attached while the compact frame leaves and returns to view.
  await scrollToProgress(1.3);
  await expect(action).toHaveCSS("visibility", "visible");
  await scrollToProgress(1.1);
  await expect(action).toHaveCSS("visibility", "visible");
  await scrollToProgress(0.9);
  await expect(action).toHaveCSS("visibility", "visible");
  await scrollToProgress(0.19);
  await expect(action).toHaveCSS("visibility", "hidden");
  await scrollToProgress(0.3);
  await expect(action).toHaveCSS("visibility", "visible");
});

test("Why ODRISC app action remains available with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/about/");
  const action = page.locator(".why-odrisc-hero-app-action");
  await expect(action).toBeVisible();
  await expect(action).toHaveCSS("visibility", "visible");
  await expect(action).toHaveAttribute("href", "https://app.odrisc.com");
  const bottomGap = await action.evaluate((element) => {
    const frame = document.querySelector(".why-odrisc-hero")!.getBoundingClientRect();
    return frame.bottom - element.getBoundingClientRect().bottom;
  });
  expect(Math.abs(bottomGap - 70)).toBeLessThan(1);
});
