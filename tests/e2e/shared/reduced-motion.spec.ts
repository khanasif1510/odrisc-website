import { expect, test } from "@playwright/test";

test("@reduced-motion reduced-motion preference reaches the page", async ({ page }) => {
  await page.goto("/");

  const prefersReducedMotion = await page.evaluate(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  expect(prefersReducedMotion).toBe(true);
  await expect(page.getByRole("heading", { name: "Every pregnancy has a story." })).toBeVisible();
});

test("@reduced-motion connected pregnancy journey renders its completed state", async ({
  page,
}) => {
  await page.goto("/patients/#connected-pregnancy-journey");

  await expect(
    page.getByRole("heading", {
      name: "Pregnancy is connected. Your information usually isn't.",
    }),
  ).toBeVisible();
  await expect(page.locator(".journey-story-static-card")).toHaveCount(4);
  await expect(
    page.getByRole("img", {
      name: "A pregnant woman speaking with a healthcare professional",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "A pregnant woman preparing a fresh meal" }),
  ).toBeVisible();
  await expect(page.getByRole("img", { name: "A pregnant woman walking outdoors" })).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "A pregnant woman reviewing an ultrasound with a healthcare professional",
    }),
  ).toBeVisible();
});

test("@reduced-motion personal pregnancy journey renders its completed state", async ({ page }) => {
  await page.goto("/patients/#personal-journey");

  await expect(
    page.getByRole("heading", { name: "Every pregnancy begins with a different you." }),
  ).toBeVisible();
  await expect(page.locator(".personal-data-card")).toHaveCount(4);
  await expect(page.locator(".personal-pregnancy-stage")).toHaveCount(4);
  await expect(page.getByText("Your Personalised Journey", { exact: true })).toBeVisible();

  const cardSurface = page.locator(".personal-data-card-surface").first();
  const initialTransform = await cardSurface.evaluate(
    (element) => getComputedStyle(element).transform,
  );
  await page.waitForTimeout(250);
  await expect(cardSurface).toHaveCSS("transform", initialTransform);
});

test("@reduced-motion maternal trajectory renders its completed state", async ({ page }) => {
  await page.goto("/patients/#maternal-trajectory");

  await expect(
    page.getByRole("heading", {
      name: "What matters is where your pregnancy is progressing.",
    }),
  ).toBeVisible();
  await expect(page.locator(".maternal-measurement-card")).toHaveCount(4);
  await expect(page.getByText("Your maternal trajectory", { exact: true })).toBeVisible();
  await expect(page.getByText("Baby's growth", { exact: true })).toBeVisible();

  const firstCard = page.locator(".maternal-measurement-card").first();
  const initialTransform = await firstCard.evaluate(
    (element) => getComputedStyle(element).transform,
  );
  await page.waitForTimeout(250);
  await expect(firstCard).toHaveCSS("transform", initialTransform);
});

test("@reduced-motion fetal growth journey renders its completed state", async ({ page }) => {
  await page.goto("/patients/#fetal-growth-journey");

  await expect(
    page.getByRole("heading", {
      name: "See more than a measurement. Understand a growth journey.",
    }),
  ).toBeVisible();
  await expect(page.locator(".fetal-scan-card")).toHaveCount(4);
  await expect(page.getByText("Your baby's growth journey", { exact: true })).toBeVisible();
  await expect(
    page.locator(".fetal-parallel-journeys").getByText("You", { exact: true }),
  ).toBeVisible();
  await expect(
    page.locator(".fetal-parallel-journeys").getByText("Your baby", { exact: true }),
  ).toBeVisible();

  const firstCard = page.locator(".fetal-scan-card").first();
  const initialTransform = await firstCard.evaluate(
    (element) => getComputedStyle(element).transform,
  );
  await page.waitForTimeout(250);
  await expect(firstCard).toHaveCSS("transform", initialTransform);
});
