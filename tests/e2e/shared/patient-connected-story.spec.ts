import { expect, test } from "@playwright/test";

test("@p0 @smoke mobile connected story uses one edge-to-edge frame", async ({
  page,
}, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile layout validation");

  await page.goto("/patients/#connected-pregnancy-journey");

  const connectedStory = page.locator("#connected-pregnancy-journey");
  const track = connectedStory.locator(".journey-story-mobile-track");
  await track.scrollIntoViewIfNeeded();

  const frame = connectedStory.locator(".journey-story-mobile-frame");
  await expect(frame).toBeVisible();
  await expect(frame.locator(".journey-story-image-layer")).toHaveCount(4);

  const frameBox = await frame.boundingBox();
  const viewport = page.viewportSize();
  expect(frameBox).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect(Math.round(frameBox?.width ?? 0)).toBe(viewport?.width);

  const stages = connectedStory.locator(".journey-mobile-stages");
  await expect(stages.locator("li")).toHaveCount(4);
  await expect(stages.locator('li[aria-current="step"]')).toHaveText("Risk");
});

test("@p0 personal story mirrors the full-page frame with three images", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name.startsWith("mobile"), "Desktop layout validation");

  await page.goto("/patients/#personal-journey");

  const story = page.locator("#personal-journey");
  await expect(story.locator(".journey-story-sticky")).toBeVisible();
  await expect(story.locator(".personal-story-frame .journey-story-image-layer")).toHaveCount(3);

  const frameBox = await story.locator(".personal-story-frame").boundingBox();
  const copyBox = await story.locator(".personal-story-copy").first().boundingBox();
  expect(frameBox).not.toBeNull();
  expect(copyBox).not.toBeNull();
  expect(frameBox?.x ?? 0).toBeLessThan(copyBox?.x ?? 0);
});

test("@p0 @smoke mobile personal story uses one edge-to-edge frame", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "Mobile layout validation");

  await page.goto("/patients/#personal-journey");

  const story = page.locator("#personal-journey");
  const frame = story.locator(".journey-story-mobile-frame");
  await frame.scrollIntoViewIfNeeded();
  await expect(frame).toBeVisible();
  await expect(frame.locator(".journey-story-image-layer")).toHaveCount(3);

  const frameBox = await frame.boundingBox();
  const viewport = page.viewportSize();
  expect(frameBox).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect(Math.round(frameBox?.x ?? -1)).toBe(0);
  expect(Math.round(frameBox?.width ?? 0)).toBe(viewport?.width);
});
