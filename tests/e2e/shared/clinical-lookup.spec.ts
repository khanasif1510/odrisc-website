import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("two cases retain context across 24 highlights and historical review @p0", async ({
  page,
}) => {
  await page.goto("/providers/");
  const app = page.getByTestId("clinical-lookup-dashboard");
  await expect(app.locator('[data-testid^="highlight-"]')).toHaveCount(24);
  await expect(page.getByTestId("highlight-latest-efw")).toContainText("1,930 g");
  await expect(page.getByTestId("highlight-fetal-velocity")).toContainText("166.7 g/week");
  await expect(page.getByTestId("highlight-median-difference")).toContainText("-35.0 g/week");
  await page.getByRole("button", { name: /Anaya · Illustrative case/ }).click();
  await expect(page.getByTestId("highlight-latest-efw")).toContainText("1,400 g");
  await expect(page.getByTestId("highlight-fetal-velocity")).toContainText("83.3 g/week");
  await expect(page.getByTestId("highlight-median-difference")).toContainText("-118.3 g/week");
  await page.getByLabel("Review date", { exact: true }).selectOption("2026-06-15");
  await expect(page.getByTestId("highlight-latest-efw")).toContainText("1,150 g");
  await expect(page.getByTestId("highlight-doppler-finding")).toContainText("forward");
  await expect(app).not.toContainText("Stage II");
  await page.getByLabel("Review date", { exact: true }).selectOption("2026-06-22");
  await expect(page.getByTestId("highlight-latest-efw")).toContainText("1,150 g");
  await expect(page.getByTestId("highlight-doppler-finding")).toContainText("absent");
  await expect(app).not.toContainText("Stage II");
  await page.getByLabel("Review date", { exact: true }).selectOption("2026-06-23");
  await expect(app).toContainText("Barcelona Stage II FGR — clinician-recorded");
  await page
    .getByRole("navigation", { name: "Clinical workspace modules" })
    .getByRole("button", { name: "Longitudinal EFW Growth Curve", exact: true })
    .click();
  await expect(page.getByLabel("Review date", { exact: true })).toHaveValue("2026-06-23");
  await expect(page.getByRole("table")).toHaveCount(1);
  await expect(page.getByRole("table").getByRole("row")).toHaveCount(5);
  await page.getByLabel("Reference", { exact: true }).selectOption("GROW");
  await expect(app).toContainText("GROW: numeric results unavailable");
  await expect(page.getByTestId("highlight-latest-efw")).toContainText("1,150 g");
});

test("report verification gates corrections, retains history and restores keyboard focus @p0", async ({
  page,
}) => {
  await page.goto("/providers/");
  await page.getByRole("button", { name: /Anaya · Illustrative case/ }).click();
  const trigger = page.getByRole("button", { name: "Try report verification" });
  await trigger.click();
  await page.getByRole("button", { name: "Load simulated report" }).click();
  await page.getByLabel("Confirmed UA PI", { exact: true }).fill("2");
  await expect(page.getByTestId("highlight-doppler-finding")).toContainText("CPR 0.615");
  await expect(page.getByRole("dialog")).toContainText("OCR extracted — unverified");
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.getByRole("button", { name: "Confirm demo observations" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(page.getByTestId("highlight-doppler-finding")).toContainText("CPR 0.600");
  await expect(page.getByTestId("highlight-doppler-finding")).toContainText(
    "Corrected and confirmed",
  );
  await page.getByRole("button", { name: "Review history", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText("revision 1");
  await page.getByRole("button", { name: "Original snapshot", exact: true }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByTestId("highlight-doppler-finding")).toContainText("CPR 0.615");
  await page.getByLabel("Review date", { exact: true }).selectOption("2026-06-15");
  await expect(page.getByTestId("highlight-doppler-finding")).toContainText("CPR 0.879");
  await expect(page.getByTestId("clinical-lookup-dashboard")).not.toContainText("Stage II");
});

test("source registry, module navigation and small-screen layout are accessible @p0 @reduced-motion", async ({
  page,
}, testInfo) => {
  await page.goto("/providers/");
  const app = page.getByTestId("clinical-lookup-dashboard");
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.getByRole("button", { name: "Open source registry" }).click();
  await expect(page.getByRole("dialog")).toContainText("38 source identities · 0 lookup-enabled");
  await page.getByRole("dialog").getByRole("button", { name: /SMFM/ }).click();
  await expect(page.getByRole("dialog")).toContainText("SRC-SMFM-2020-CONSULT-52");
  await expect(page.getByRole("dialog")).toContainText("clinical_review_pending");
  await page.keyboard.press("Escape");
  for (const label of [
    "Golden GA Anchor",
    "TOW Correction Model",
    "Maternal-Fetal Matrix",
    "Longitudinal EFW Growth Curve",
    "Growth Velocity Analysis",
    "Doppler Guideline & Framework Lookup",
  ]) {
    const button = page
      .getByRole("navigation", { name: "Clinical workspace modules" })
      .getByRole("button", { name: label, exact: true });
    await button.focus();
    await page.keyboard.press("Enter");
    await expect(button).toHaveAttribute("aria-current", "page");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
  }
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page
    .getByRole("navigation", { name: "Clinical workspace modules" })
    .getByRole("button", { name: "Fetal Growth", exact: true })
    .click();
  await page.locator("h1").scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath("clinical-homepage.png"), fullPage: true });
  await page.setViewportSize({ width: 320, height: 780 });
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
    .toBe(true);
  await expect(app.locator('[data-testid^="highlight-"]')).toHaveCount(24);
});

test("Platform retains the former homepage and existing platform sections @p0", async ({
  page,
}) => {
  await page.goto("/providers/clinical-platform/");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toContainText("Maternal health.");
  await expect(page.getByTestId("fetal-growth-demo")).toHaveCount(1);
  await expect(page.locator("#pregnancy-dating")).toHaveCount(1);
  await expect(page.locator("#report-review")).toHaveCount(1);
  await expect(
    page.getByRole("heading", { name: "One clinical view. From context to conversation." }),
  ).toHaveCount(1);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});
