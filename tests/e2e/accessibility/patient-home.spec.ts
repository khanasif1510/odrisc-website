import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("@p0 @a11y connected pregnancy story has no automated accessibility violations", async ({
  page,
}) => {
  await page.goto("/patients/#connected-pregnancy-journey");

  await expect(
    page.getByRole("heading", {
      name: "Pregnancy is connected. Your information usually isn't.",
    }),
  ).toBeVisible();

  const results = await new AxeBuilder({ page }).include("#journey").analyze();

  expect(results.violations).toEqual([]);
});

test("@p0 @a11y personal pregnancy journey has no automated accessibility violations", async ({
  page,
}) => {
  await page.goto("/patients/#personal-journey");

  await expect(
    page.getByRole("heading", { name: "Every pregnancy begins with a different you." }),
  ).toBeVisible();

  const results = await new AxeBuilder({ page }).include("#personal-journey").analyze();

  expect(results.violations).toEqual([]);
});

test("@p0 @a11y maternal trajectory has no automated accessibility violations", async ({
  page,
}) => {
  await page.goto("/patients/#maternal-trajectory");

  await expect(
    page.getByRole("heading", {
      name: "What matters is where your pregnancy is progressing.",
    }),
  ).toBeVisible();

  const results = await new AxeBuilder({ page }).include("#maternal-trajectory").analyze();

  expect(results.violations).toEqual([]);
});

test("@p0 @a11y fetal growth journey has no automated accessibility violations", async ({
  page,
}) => {
  await page.goto("/patients/#fetal-growth-journey");

  await expect(
    page.getByRole("heading", {
      name: "See more than a measurement. Understand a growth journey.",
    }),
  ).toBeVisible();

  const results = await new AxeBuilder({ page }).include("#fetal-growth-journey").analyze();

  expect(results.violations).toEqual([]);
});
