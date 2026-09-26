import { expect, test } from "@playwright/test";

test("@p0 section two presents eight centered image capability cards", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/patients/#journey");

  const grid = page.locator(".journey-capability-grid");
  const columns = grid.locator(".journey-capability-column");
  const cards = grid.locator(".journey-capability-card");
  const expectedTitles = [
    "RAS Test",
    "Nutrition",
    "Fitness",
    "Monitor",
    "Gestational Age",
    "Biometry",
    "Growth Analysis",
    "Doppler & Staging",
  ];

  await expect(grid).toBeVisible();
  await expect(columns).toHaveCount(2);
  await expect(cards).toHaveCount(8);
  await expect(grid.locator(".journey-capability-status")).toHaveCount(0);
  await expect(cards.locator("h3")).toHaveText(expectedTitles);
  await expect(cards.first()).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(cards.first()).toHaveCSS("border-top-width", "0px");
  await expect(cards.first()).toHaveCSS("border-radius", "28px");
  await expect(cards.first().locator(".journey-capability-copy")).toHaveCSS("text-align", "left");
  await expect(cards.first().locator("h3")).toHaveCSS("text-transform", "uppercase");
  expect(
    await cards
      .first()
      .locator("p")
      .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBeLessThanOrEqual(13);

  await expect
    .poll(() =>
      grid.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length),
    )
    .toBe(2);
  const desktopGeometry = await grid.evaluate((element) => {
    const gridRect = element.getBoundingClientRect();
    const cardElements = Array.from(element.querySelectorAll(".journey-capability-card"));
    const firstCard = cardElements[0].getBoundingClientRect();
    const secondColumnCard = cardElements[4].getBoundingClientRect();
    const firstImage = cardElements[0]
      .querySelector(".journey-capability-image")!
      .getBoundingClientRect();

    return {
      firstCard: {
        height: firstCard.height,
        x: firstCard.x,
        y: firstCard.y,
      },
      firstImage: {
        height: firstImage.height,
        x: firstImage.x,
      },
      gridWidth: gridRect.width,
      secondColumnCard: {
        x: secondColumnCard.x,
        y: secondColumnCard.y,
      },
    };
  });
  expect(Math.round(desktopGeometry.firstCard.y)).toBe(
    Math.round(desktopGeometry.secondColumnCard.y),
  );
  expect(desktopGeometry.gridWidth).toBeGreaterThan(1050);
  expect(Math.round(desktopGeometry.firstCard.height)).toBe(116);
  expect(desktopGeometry.secondColumnCard.x - desktopGeometry.firstCard.x).toBeGreaterThan(300);
  expect(Math.abs(desktopGeometry.firstImage.x - desktopGeometry.firstCard.x)).toBeLessThanOrEqual(
    1,
  );
  expect(
    Math.abs(desktopGeometry.firstImage.height - desktopGeometry.firstCard.height),
  ).toBeLessThanOrEqual(1);
  expect(
    await cards
      .locator(".journey-capability-copy")
      .evaluateAll((elements) =>
        elements.every((element) => element.scrollHeight <= element.clientHeight),
      ),
  ).toBe(true);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect
    .poll(() =>
      grid.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length),
    )
    .toBe(1);
  const mobileGeometry = await cards.evaluateAll((elements) =>
    [elements[0], elements[3], elements[4]].map((element) => {
      const rect = element.getBoundingClientRect();
      return { height: rect.height, x: rect.x, y: rect.y };
    }),
  );
  expect(Math.abs(mobileGeometry[2].x - mobileGeometry[0].x)).toBeLessThanOrEqual(1);
  expect(mobileGeometry[2].y).toBeGreaterThan(mobileGeometry[1].y + mobileGeometry[1].height);
  expect(
    await cards
      .locator(".journey-capability-copy")
      .evaluateAll((elements) =>
        elements.every((element) => element.scrollHeight <= element.clientHeight),
      ),
  ).toBe(true);
});

test("@p0 mobile patient hero uses the replacement portrait video", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/patients/");

  const menuLogo = page.getByRole("link", { name: "ODRISC patient home" });
  await expect(menuLogo.locator(".brand-logo-image")).toBeVisible();
  await expect(menuLogo.locator(".brand-logo-image")).toHaveAttribute(
    "src",
    /\/brand\/odrisc-logo\.png/,
  );
  await expect(menuLogo.locator(".brand-logo-image")).toHaveCSS("width", "95px");
  await expect(menuLogo.locator(".brand-mark")).toHaveCSS("height", "51px");
  const initialLogoBox = await menuLogo.boundingBox();
  const providersButton = page.getByRole("link", { name: "For providers" });
  await expect(providersButton).toHaveCSS("min-height", "48px");
  await expect(providersButton).toHaveCSS("border-radius", "16px");
  await expect(providersButton).toHaveCSS("background-color", "rgb(91, 194, 163)");
  await expect(providersButton).toHaveCSS("gap", "9px");
  const providersButtonIcon = providersButton.locator('.audience-switch-icon[alt=""]');
  await expect(providersButtonIcon).toHaveAttribute("src", /\/brand\/website-icon\.svg/);
  await expect(providersButtonIcon).toHaveCSS("width", "33.6px");
  await expect(providersButtonIcon).toHaveCSS("height", "36px");
  await expect(providersButtonIcon).toHaveCSS("filter", "brightness(0) invert(1)");
  await providersButton.hover();
  await expect(providersButton).toHaveCSS("transform", "none");
  await expect(providersButton).toHaveCSS("text-decoration-line", "none");
  await page.mouse.move(720, 450);
  await expect(providersButton).toHaveCSS("transform", "none");
  const initialProvidersButtonBox = await providersButton.boundingBox();
  const patientHeaderFrame = page.locator(".site-header.patient .site-header-frame");
  const initialHeaderFrameBox = await patientHeaderFrame.boundingBox();
  expect(initialLogoBox).not.toBeNull();
  expect(initialProvidersButtonBox).not.toBeNull();
  expect(initialHeaderFrameBox).not.toBeNull();
  await page.mouse.wheel(0, 500);
  await page.mouse.wheel(0, -100);
  const floatingHeader = page.locator(".site-header.patient.is-scroll-up .site-header-frame");
  await expect(floatingHeader).toBeVisible();
  await expect(floatingHeader).toHaveCSS("padding-left", "10px");
  await expect(floatingHeader).toHaveCSS("padding-right", "10px");
  const floatingHeaderBox = await floatingHeader.boundingBox();
  const floatingLogoBox = await menuLogo.boundingBox();
  const providersButtonBox = await providersButton.boundingBox();
  expect(floatingHeaderBox).not.toBeNull();
  expect(floatingLogoBox).not.toBeNull();
  expect(providersButtonBox).not.toBeNull();
  expect((floatingLogoBox?.x ?? 0) - (floatingHeaderBox?.x ?? 0)).toBeCloseTo(10, 0);
  expect(
    (floatingHeaderBox?.x ?? 0) +
      (floatingHeaderBox?.width ?? 0) -
      ((providersButtonBox?.x ?? 0) + (providersButtonBox?.width ?? 0)),
  ).toBeCloseTo(10, 0);
  expect(floatingLogoBox?.x ?? 0).toBeCloseTo(initialLogoBox?.x ?? 0, 0);
  expect((providersButtonBox?.x ?? 0) + (providersButtonBox?.width ?? 0)).toBeCloseTo(
    (initialProvidersButtonBox?.x ?? 0) + (initialProvidersButtonBox?.width ?? 0),
    0,
  );
  expect(floatingHeaderBox?.x ?? 0).toBeCloseTo(initialHeaderFrameBox?.x ?? 0, 0);
  expect(floatingHeaderBox?.width ?? 0).toBeCloseTo(initialHeaderFrameBox?.width ?? 0, 0);
  expect(floatingHeaderBox?.height ?? 0).toBeCloseTo(initialHeaderFrameBox?.height ?? 0, 0);

  const heroVideos = page.locator(".patient-hero-video");
  await expect(heroVideos).toHaveCount(2);
  await expect(heroVideos.first().locator("source").first()).toHaveAttribute(
    "src",
    "/media/patient-hero-mobile-20260818-v2.mp4",
  );
  await expect(heroVideos.first().locator("source").first()).toHaveAttribute(
    "media",
    "(max-width: 900px)",
  );
  await expect(heroVideos.first().locator("source").last()).toHaveAttribute(
    "src",
    "/media/patient-hero-desktop.mp4",
  );
  await expect
    .poll(() => heroVideos.first().evaluate((element) => (element as HTMLVideoElement).currentSrc))
    .toContain("/media/patient-hero-desktop.mp4");

  await page.setViewportSize({ width: 780, height: 1396 });
  await expect
    .poll(() => heroVideos.first().evaluate((element) => (element as HTMLVideoElement).currentSrc))
    .toContain("/media/patient-hero-mobile-20260818-v2.mp4");
});

test("@p0 mobile patient section copy aligns left while image labels stay centered", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/patients/");

  const leftAlignedCopy = [
    ".patient-hero .hero-copy",
    ".journey-section .journey-intro",
    ".journey-story-mobile .journey-story-copy .journey-copy",
    ".personal-journey-heading",
    ".maternal-trajectory-copy",
    ".fetal-growth-copy",
    ".safety-section",
    ".patient-closing",
  ];

  for (const selector of leftAlignedCopy) {
    await expect(page.locator(selector).first()).toHaveCSS("text-align", "left");
  }

  await expect(page.locator(".journey-mobile-stages li").first()).toHaveCSS("text-align", "center");
});

test("@p0 mobile sections four and five align with section three", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/patients/");

  const sectionThreeLabel = page.locator(
    "#personal-journey .journey-story-mobile .personal-journey-heading > .eyebrow",
  );
  const sectionFourLabel = page.locator(
    "#maternal-trajectory .journey-story-mobile .maternal-trajectory-copy > .eyebrow",
  );
  const sectionFiveLabel = page.locator(
    "#fetal-growth-journey .journey-story-mobile .fetal-growth-copy > .eyebrow",
  );

  const sectionThreeBox = await sectionThreeLabel.boundingBox();
  const sectionFourBox = await sectionFourLabel.boundingBox();
  const sectionFiveBox = await sectionFiveLabel.boundingBox();

  expect(sectionThreeBox).not.toBeNull();
  expect(sectionFourBox).not.toBeNull();
  expect(sectionFiveBox).not.toBeNull();
  expect(Math.abs((sectionFourBox?.x ?? 0) - (sectionThreeBox?.x ?? 0))).toBeLessThanOrEqual(1);
  expect(Math.abs((sectionFiveBox?.x ?? 0) - (sectionThreeBox?.x ?? 0))).toBeLessThanOrEqual(1);

  await expect(
    page.locator("#personal-journey .journey-story-mobile .journey-mobile-stages li"),
  ).toHaveText(["Assess", "Personalise", "Support"]);
});

test("@p0 @smoke connected story adapts its frame to the viewport", async ({ page }) => {
  await page.goto("/patients/#connected-pregnancy-journey", { waitUntil: "domcontentloaded" });
  const story = page.locator("#connected-pregnancy-journey");
  const mobile = (page.viewportSize()?.width ?? 0) <= 760;
  if (mobile) {
    await story.locator(".journey-story-mobile-track").scrollIntoViewIfNeeded();
    const frame = story.locator(".journey-story-mobile-frame");
    await expect(frame).toBeVisible();
    await expect(frame.locator(".journey-story-image-layer")).toHaveCount(4);
    const frameBox = await frame.boundingBox();
    expect(frameBox).not.toBeNull();
    expect(Math.round(frameBox?.width ?? 0)).toBe(page.viewportSize()?.width);
    const stages = story.locator(".journey-mobile-stages");
    await expect(stages.locator("li")).toHaveCount(4);
    await expect(stages.locator('li[aria-current="step"]')).toHaveText("Risk");
  } else {
    await expect(story.locator(".journey-story-sticky")).toBeVisible();
    await expect(story.locator(".journey-story-sticky .journey-story-image-layer")).toHaveCount(4);
  }
});

test("@p0 @smoke personal story uses three images in its responsive frame", async ({ page }) => {
  await page.goto("/patients/#personal-journey", { waitUntil: "domcontentloaded" });
  const story = page.locator("#personal-journey");
  const mobile = (page.viewportSize()?.width ?? 0) <= 760;
  if (mobile) {
    const frame = story.locator(".journey-story-mobile-frame");
    await frame.scrollIntoViewIfNeeded();
    await expect(frame).toBeVisible();
    await expect(frame.locator(".journey-story-image-layer")).toHaveCount(3);
    const frameBox = await frame.boundingBox();
    expect(frameBox).not.toBeNull();
    expect(Math.round(frameBox?.x ?? -1)).toBe(0);
    expect(Math.round(frameBox?.width ?? 0)).toBe(page.viewportSize()?.width);
  } else {
    await expect(story.locator(".journey-story-sticky")).toBeVisible();
    await expect(story.locator(".personal-story-frame .journey-story-image-layer")).toHaveCount(3);
    const frameBox = await story.locator(".personal-story-frame").boundingBox();
    const copyBox = await story.locator(".personal-story-copy").first().boundingBox();
    expect(frameBox).not.toBeNull();
    expect(copyBox).not.toBeNull();
    expect(frameBox?.x ?? 0).toBeLessThan(copyBox?.x ?? 0);
  }
});

test("@p0 section six uses responsive continuously looping video", async ({ page }) => {
  await page.goto("/patients/#tools");

  const section = page.locator("#tools");
  const frame = section.locator(".patient-tools-zoom-frame");
  const video = section.locator("video");
  const viewport = page.viewportSize();
  const usesMobileVideo = (viewport?.width ?? 0) <= 900;
  await expect(frame).toBeVisible();
  await expect(video).toBeVisible();
  await expect(video).toHaveAttribute(
    "poster",
    usesMobileVideo
      ? "/media/patient-section6-maternal-fetal-intelligence-mobile-poster-20260818-v4.jpg"
      : "/media/patient-section6-maternal-fetal-intelligence-poster-20260818-v2.jpg",
  );
  await expect(video.locator("source")).toHaveCount(2);
  await expect(video.locator("source").first()).toHaveAttribute(
    "src",
    "/media/patient-section6-maternal-fetal-intelligence-mobile-portrait-20260818-v5.mp4",
  );
  await expect(video.locator("source").first()).toHaveAttribute("media", "(max-width: 900px)");
  await expect(video.locator("source").last()).toHaveAttribute(
    "src",
    "/media/patient-section6-maternal-fetal-intelligence-desktop-20260818-v3.mp4",
  );
  const expectedVideoSource = usesMobileVideo
    ? "/media/patient-section6-maternal-fetal-intelligence-mobile-portrait-20260818-v5.mp4"
    : "/media/patient-section6-maternal-fetal-intelligence-desktop-20260818-v3.mp4";
  await expect
    .poll(() => video.evaluate((element) => (element as HTMLVideoElement).currentSrc))
    .toContain(expectedVideoSource);
  await expect(video).toHaveAttribute("loop", "");
  await expect(video).toHaveCSS("object-fit", "cover");
  await expect(video).toHaveCSS(
    "filter",
    "saturate(0.92) contrast(0.97) brightness(1.025) sepia(0.035)",
  );
  await expect(section.locator(".patient-section6-video-shell")).toHaveCSS(
    "background-color",
    "rgb(255, 236, 238)",
  );
  await expect
    .poll(() => frame.evaluate((element) => getComputedStyle(element, "::before").content))
    .toBe("none");
  await expect(section.getByRole("button")).toHaveCount(0);

  const frameBox = await frame.boundingBox();
  const videoBox = await video.boundingBox();
  expect(frameBox).not.toBeNull();
  expect(videoBox).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect(Math.abs((videoBox?.width ?? 0) - (frameBox?.width ?? 0))).toBeLessThanOrEqual(1);
  expect(Math.abs((videoBox?.height ?? 0) - (frameBox?.height ?? 0))).toBeLessThanOrEqual(1);
  if (usesMobileVideo) {
    expect(Math.round(frameBox?.width ?? 0)).toBe(viewport?.width);
  }
});

test("@p0 section six desktop page background is white outside the video frame", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/patients/#tools");

  const section = page.locator("#tools");
  await expect(section).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(section.locator(".patient-tools-zoom-sticky")).toHaveCSS(
    "background-color",
    "rgb(255, 255, 255)",
  );
  await expect(section.locator(".patient-section6-video-shell")).toHaveCSS(
    "background-color",
    "rgb(255, 236, 238)",
  );
  await expect
    .poll(() =>
      section.locator("video").evaluate((element) => (element as HTMLVideoElement).currentSrc),
    )
    .toContain("patient-section6-maternal-fetal-intelligence-desktop-20260818-v3.mp4");
});

test("@p0 section seven strengthens its statement only while scrolling down", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/patients/");

  for (const storySection of [
    ".patient-hero",
    ".journey-section",
    ".personal-journey-section",
    "#maternal-trajectory",
    "#fetal-growth-journey",
  ]) {
    await expect
      .poll(() =>
        page.locator(storySection).evaluate((element) => getComputedStyle(element).fontFamily),
      )
      .toContain("Iowan Old Style");
  }
  await expect(page.getByText(/Every ultrasound provides an important snapshot/)).toHaveCount(0);
  const sectionTwoContextSize = await page
    .locator("#connected-pregnancy-journey .journey-copy > p")
    .first()
    .evaluate((element) => getComputedStyle(element).fontSize);
  await expect(page.locator("#maternal-trajectory .maternal-trajectory-body p").first()).toHaveCSS(
    "font-size",
    sectionTwoContextSize,
  );
  await expect(page.locator("#fetal-growth-journey .fetal-growth-body p").first()).toHaveCSS(
    "font-size",
    sectionTwoContextSize,
  );
  for (const introCopy of [
    ".journey-intro-kicker",
    ".journey-intro-title",
    ".journey-intro-summary",
  ]) {
    await expect(page.locator(introCopy)).toHaveCSS("text-align", "center");
  }
  const journeyTitleBox = await page.locator(".journey-intro-title").boundingBox();
  expect(journeyTitleBox).not.toBeNull();
  expect((journeyTitleBox?.x ?? 0) + (journeyTitleBox?.width ?? 0) / 2).toBeCloseTo(720, 0);

  const section = page.locator("#about-odrisc");
  const sectionIntro = section.locator(".section-seven-intro");
  const safetySection = page.locator("#safety");
  const aboutCopy = section.locator(".section-seven-about-copy");
  const statement = aboutCopy.getByRole("heading", {
    name: "Helping mothers and babies stay healthier through intelligent connected care",
  });
  const statementReveal = aboutCopy.locator(".section-seven-about-reveal");
  const aboutAction = aboutCopy.locator(".section-seven-about-action");
  const aboutButton = aboutCopy.getByRole("link", { name: "About us" });
  const getStartedActions = section.getByRole("link", { name: "Get Started" });
  const getStartedAction = getStartedActions.first();
  const careMarker = section.getByLabel("Pregnancy Care", { exact: true });
  const careCapsule = careMarker.locator(".section-seven-care-capsule");
  const careLabel = careMarker.locator(".section-seven-care-label");
  const careLine = careMarker.locator(".section-seven-care-line");
  const communityMarker = section.getByLabel("Join our Community", { exact: true });
  const intelligenceFrames = section.locator(".section-seven-frame");
  const intelligenceFrameGrid = section.locator(".section-seven-frame-grid");
  const primaryFrame = section.locator(".section-seven-frame-primary");
  const secondaryFrame = section.locator(".section-seven-frame-secondary");
  const lowerFrame = section.locator(".section-seven-frame-wide");
  const intelligenceCopy = section.locator(".section-seven-intelligence-copy");
  const intelligenceHeading = section.getByRole("heading", {
    name: "Intelligence designed for every pregnancy journey",
  });
  const choiceHeading = section.getByRole("heading", { name: "Choose what works for you" });
  const choiceStage = section.locator(".section-seven-choice-stage");
  const choiceSticky = section.locator(".section-seven-choice-sticky");
  const tierPanels = section.locator(".section-seven-tier-panel");
  const tierFrames = section.locator(".section-seven-tier-frame");
  const membershipHeading = section.getByRole("heading", { name: "Gold membership Plan" });
  const membershipCopy = section.getByText(/Unlock your potential with a personalised plan/);
  const membershipCopyBlock = section.locator(".section-seven-membership-copy").first();
  const platinumHeading = section.getByRole("heading", { name: "Platinum Membership Plan" });
  const stepInside = section.locator(".section-seven-step-inside");
  const stepInsideHeading = stepInside.getByRole("heading", { name: "Step Inside" });
  const stepInsideDescription = stepInside.getByText(
    "The next generation of intelligence for pregnancy care.",
  );
  const stepInsideSticky = stepInside.locator(".section-seven-step-inside-sticky");
  const intelligenceImageFrame = stepInside.locator(".section-seven-intelligence-image-frame");
  const maternalLabel = stepInside.getByRole("heading", { name: "Maternal Intelligence" });
  const fetalLabel = stepInside.getByRole("heading", { name: "Fetal Growth Intelligence" });
  const maternalTopics = stepInside.locator(
    ".section-seven-maternal-intelligence-narrative .section-seven-intelligence-topic",
  );
  const fetalTopics = stepInside.locator(
    ".section-seven-fetal-intelligence-narrative .section-seven-intelligence-topic",
  );

  await expect(section).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect
    .poll(() => sectionIntro.evaluate((element) => getComputedStyle(element).backgroundImage))
    .toContain("25%");
  await expect(section.getByText("Technology should support care—not replace it.")).toHaveCount(0);
  await expect(
    safetySection.getByText("Technology should support care—not replace it."),
  ).toBeVisible();
  await expect(aboutCopy).toHaveCSS("text-align", "left");
  await expect(statementReveal).toHaveCSS("font-weight", "400");
  await expect
    .poll(() => statementReveal.evaluate((element) => getComputedStyle(element).fontFamily))
    .toContain("Iowan Old Style");
  await expect(statement).toContainText(
    "Helping mothers and babies stay healthier through intelligent connected care",
  );
  await expect(statementReveal).toHaveCSS("color", "rgb(77, 77, 77)");
  const statementBox = await statementReveal.boundingBox();
  expect(statementBox).not.toBeNull();
  expect(statementBox?.width ?? 0).toBeGreaterThan(400);
  expect(statementBox?.height ?? 0).toBeGreaterThan(100);
  await expect(statementReveal).toContainText(
    "Helping mothers and babies stay healthier through intelligent connected care",
  );
  await expect(statementReveal).toHaveCSS("opacity", "0.25");

  await sectionIntro.evaluate((intro) => {
    window.scrollTo({
      top: intro.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2,
    });
  });
  await expect
    .poll(() =>
      statementReveal.evaluate((element) => parseFloat(getComputedStyle(element).opacity)),
    )
    .toBeGreaterThan(0.25);
  const partialOpacity = await statementReveal.evaluate((element) =>
    parseFloat(getComputedStyle(element).opacity),
  );
  expect(partialOpacity).toBeLessThan(1);

  await sectionIntro.evaluate((intro) => {
    window.scrollTo({ top: intro.getBoundingClientRect().top + window.scrollY });
  });
  await expect(statementReveal).toHaveCSS("color", "rgb(77, 77, 77)");
  await expect(statementReveal).toHaveCSS("opacity", "1");

  const opacityAfterScrollingDown = await statementReveal.evaluate((element) =>
    parseFloat(getComputedStyle(element).opacity),
  );
  await page.mouse.wheel(0, -180);
  await expect
    .poll(() =>
      statementReveal.evaluate((element) => parseFloat(getComputedStyle(element).opacity)),
    )
    .toBe(opacityAfterScrollingDown);
  await expect(aboutButton).toHaveAttribute("href", "/about/");
  await expect(aboutButton).toHaveCSS("color", "rgb(77, 77, 77)");
  await expect(aboutButton).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await expect(aboutAction).toHaveCSS("gap", "12px");
  await expect(aboutButton.locator("svg")).toHaveCount(0);
  await expect(aboutAction.locator('.section-seven-about-icon img[alt=""]')).toHaveCount(1);
  await expect(aboutAction.locator(".section-seven-about-icon img")).toHaveAttribute(
    "src",
    /\/brand\/website-icon\.svg/,
  );
  await expect(aboutAction.locator(".section-seven-about-icon")).toHaveCSS(
    "border-color",
    "rgba(0, 0, 0, 0)",
  );
  await expect(aboutAction.locator(".section-seven-about-icon")).toHaveCSS(
    "background-color",
    "rgb(91, 194, 163)",
  );
  await expect(aboutAction.locator(".section-seven-about-icon-image")).toHaveCSS(
    "filter",
    "brightness(0) invert(1)",
  );
  await aboutAction.hover();
  await expect(aboutAction).not.toHaveCSS("transform", "none");
  await expect(aboutButton).toHaveCSS("text-decoration-line", "none");
  await expect(getStartedAction).toHaveAttribute("href", "/contact/");
  await expect(getStartedAction).toHaveCSS("gap", "12px");
  await expect(getStartedAction.locator(".section-seven-about-icon")).toHaveCSS(
    "background-color",
    "rgb(91, 194, 163)",
  );
  await getStartedAction.hover();
  await expect(getStartedAction).not.toHaveCSS("transform", "none");
  await expect(getStartedAction).toHaveCSS("text-decoration-line", "none");
  await expect(careMarker.getByText("Pregnancy Care")).toBeVisible();
  await expect(careCapsule).toHaveCSS("background-color", "rgb(77, 77, 77)");
  expect(
    await careCapsule.evaluate((element) => parseFloat(getComputedStyle(element).borderRadius)),
  ).toBe(3);
  await expect(careLine).toHaveCSS("background-color", "rgb(77, 77, 77)");
  await expect(communityMarker.getByText("Join our Community")).toBeVisible();
  await expect(communityMarker.locator(".section-seven-care-capsule")).toHaveCSS(
    "background-color",
    "rgb(77, 77, 77)",
  );
  await expect(communityMarker.locator(".section-seven-care-line")).toHaveCSS(
    "background-color",
    "rgb(77, 77, 77)",
  );
  await expect(choiceHeading).toBeVisible();
  await expect(choiceHeading).toHaveCSS("text-align", "left");
  await expect(tierFrames).toHaveCount(2);
  await expect(getStartedActions).toHaveCount(2);
  await expect(membershipHeading).toBeVisible();
  await expect(membershipHeading).toHaveCSS("color", "rgb(255, 118, 128)");
  await expect(membershipCopy).toBeVisible();
  await expect(membershipCopy).toHaveCSS("color", "rgb(77, 77, 77)");
  await expect(platinumHeading).toBeAttached();
  await expect(platinumHeading).toHaveCSS("color", "rgb(255, 118, 128)");
  const firstTierFrameBox = await tierFrames.first().boundingBox();
  const membershipCopyBlockBox = await membershipCopyBlock.boundingBox();
  expect(firstTierFrameBox).not.toBeNull();
  expect(membershipCopyBlockBox).not.toBeNull();
  expect((membershipCopyBlockBox?.y ?? 0) + (membershipCopyBlockBox?.height ?? 0) / 2).toBeCloseTo(
    (firstTierFrameBox?.y ?? 0) + (firstTierFrameBox?.height ?? 0) / 2,
    0,
  );

  await choiceStage.evaluate((element) => {
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY });
  });
  await expect
    .poll(() => choiceSticky.evaluate((element) => Math.abs(element.getBoundingClientRect().top)))
    .toBeLessThan(1);
  const platinumFrame = tierPanels.nth(1).locator(".section-seven-tier-frame");
  await expect
    .poll(async () => {
      const frameBox = await platinumFrame.boundingBox();
      return 1440 - (frameBox?.x ?? 0);
    })
    .toBeCloseTo(83.86, -1);
  const initialPlatinumFrameBox = await platinumFrame.boundingBox();
  expect(initialPlatinumFrameBox).not.toBeNull();
  expect(1440 - (initialPlatinumFrameBox?.x ?? 0)).toBeCloseTo(
    (initialPlatinumFrameBox?.width ?? 0) * 0.2,
    -1,
  );

  await choiceStage.evaluate((element) => {
    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.scrollY +
        (element.getBoundingClientRect().height - window.innerHeight) * 0.5,
    });
  });
  await expect
    .poll(() => choiceSticky.evaluate((element) => Math.abs(element.getBoundingClientRect().top)))
    .toBeLessThan(1);

  await choiceStage.evaluate((element) => {
    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.scrollY +
        element.getBoundingClientRect().height -
        window.innerHeight,
    });
  });
  await expect
    .poll(() =>
      tierPanels
        .nth(1)
        .locator(".section-seven-tier-frame")
        .evaluate((element) => element.getBoundingClientRect().x),
    )
    .toBeLessThan(60);
  await expect(platinumHeading).toBeVisible();
  await expect(stepInsideHeading).toHaveCSS("color", "rgb(77, 77, 77)");
  await expect(stepInsideHeading).toHaveCSS("text-align", "center");
  await expect(stepInsideDescription).toHaveCSS("color", "rgb(77, 77, 77)");
  await expect(stepInsideDescription).toHaveCSS("text-align", "center");
  await expect(stepInsideDescription).toHaveCSS(
    "font-size",
    await membershipCopy.evaluate((element) => getComputedStyle(element).fontSize),
  );
  const completedPlatinumFrameBox = await tierPanels
    .nth(1)
    .locator(".section-seven-tier-frame")
    .boundingBox();
  const stepInsideHeadingBox = await stepInsideHeading.boundingBox();
  expect(completedPlatinumFrameBox).not.toBeNull();
  expect(stepInsideHeadingBox).not.toBeNull();
  expect(
    Math.abs(
      (stepInsideHeadingBox?.y ?? 0) -
        ((completedPlatinumFrameBox?.y ?? 0) + (completedPlatinumFrameBox?.height ?? 0)) -
        225,
    ),
  ).toBeLessThanOrEqual(10);

  await expect(stepInside.locator(".section-seven-rotating-card")).toHaveCount(0);
  await expect(stepInside.locator(".section-seven-card-tier-label")).toHaveCount(0);
  await expect(intelligenceImageFrame).toHaveCount(1);
  await expect(intelligenceImageFrame.locator("img")).toHaveAttribute(
    "src",
    /patient-step-inside-intelligence-landscape-20260825-v3\.png/,
  );
  await expect(intelligenceImageFrame.locator("img")).toHaveCSS("object-fit", "cover");
  await expect(intelligenceImageFrame.locator("img")).toHaveCSS("object-position", "50% 100%");
  await expect(maternalLabel).toHaveCSS("color", "rgb(255, 255, 255)");
  await expect(maternalTopics).toHaveCount(4);
  for (const title of ["RAS Test", "Nutrition", "Fitness", "Monitor"]) {
    await expect(stepInside.getByRole("heading", { name: title, exact: true })).toHaveCSS(
      "color",
      "rgb(255, 255, 255)",
    );
  }
  await expect(fetalLabel).toHaveCSS("color", "rgb(255, 255, 255)");
  await expect(fetalTopics).toHaveCount(4);
  for (const title of [
    "Gestational Age",
    "Biometry",
    "Longitudinal Growth Analysis",
    "Doppler & Staging",
  ]) {
    await expect(stepInside.getByRole("heading", { name: title, exact: true })).toHaveCSS(
      "color",
      "rgb(255, 255, 255)",
    );
  }
  await expect(stepInside.getByRole("heading", { name: "What it is:", exact: true })).toHaveCount(
    8,
  );
  await stepInside.evaluate((element) => {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY + window.innerHeight * 2,
    });
  });
  await expect
    .poll(() =>
      stepInsideSticky.evaluate((element) => Math.abs(element.getBoundingClientRect().top)),
    )
    .toBeLessThan(1);
  const maternalLabelBox = await maternalLabel.boundingBox();
  expect(maternalLabelBox).not.toBeNull();
  expect(maternalLabelBox?.x ?? 1440).toBeLessThan(1440 / 2);
  expect(
    Math.abs((maternalLabelBox?.y ?? 0) + (maternalLabelBox?.height ?? 0) / 2 - 450),
  ).toBeLessThan(80);
  const completedPlatinumPanelBox = await tierPanels.nth(1).boundingBox();
  const choiceHeadingBox = await choiceHeading.boundingBox();
  expect(completedPlatinumPanelBox).not.toBeNull();
  expect(choiceHeadingBox).not.toBeNull();
  expect(completedPlatinumPanelBox?.x ?? 0).toBeCloseTo(choiceHeadingBox?.x ?? 0, 0);
  expect(
    (completedPlatinumPanelBox?.x ?? 0) + (completedPlatinumPanelBox?.width ?? 0),
  ).toBeLessThanOrEqual(1440);

  const sectionBox = await section.boundingBox();
  const safetyBox = await safetySection.boundingBox();
  const copyBox = await aboutCopy.boundingBox();
  expect(sectionBox).not.toBeNull();
  expect(safetyBox).not.toBeNull();
  expect(copyBox).not.toBeNull();
  const markerBox = await careMarker.boundingBox();
  const capsuleBox = await careCapsule.boundingBox();
  const careLabelBox = await careLabel.boundingBox();
  const lineBox = await careLine.boundingBox();
  expect(markerBox).not.toBeNull();
  expect(capsuleBox).not.toBeNull();
  expect(careLabelBox).not.toBeNull();
  expect(lineBox).not.toBeNull();
  const markerBottomInset = await careMarker.evaluate((marker) => {
    const htmlMarker = marker as HTMLElement;
    const markerSection = marker.parentElement;
    return markerSection
      ? markerSection.offsetHeight - htmlMarker.offsetTop - htmlMarker.offsetHeight
      : -1;
  });
  expect(markerBottomInset).toBeLessThanOrEqual(32);
  expect(capsuleBox?.x ?? 0).toBeGreaterThan(sectionBox?.x ?? 0);
  expect(Math.abs((capsuleBox?.width ?? 0) - (capsuleBox?.height ?? 0))).toBeLessThanOrEqual(1);
  expect(capsuleBox?.height ?? 0).toBeCloseTo(careLabelBox?.height ?? 0, 0);
  expect(markerBox?.x ?? 0).toBeCloseTo(
    (sectionBox?.x ?? 0) +
      ((sectionBox?.x ?? 0) +
        (sectionBox?.width ?? 0) -
        ((markerBox?.x ?? 0) + (markerBox?.width ?? 0))),
    0,
  );
  expect((lineBox?.x ?? 0) + (lineBox?.width ?? 0)).toBeLessThanOrEqual(
    (sectionBox?.x ?? 0) + (sectionBox?.width ?? 0),
  );
  expect(lineBox?.width ?? 0).toBeGreaterThan(500);
  await expect(intelligenceFrames).toHaveCount(3);
  await expect(intelligenceHeading).toBeVisible();
  await expect(
    section.getByText(/ODRISC is being developed to support informed pregnancy care/),
  ).toBeVisible();
  const primaryFrameBox = await primaryFrame.boundingBox();
  const secondaryFrameBox = await secondaryFrame.boundingBox();
  const lowerFrameBox = await lowerFrame.boundingBox();
  const intelligenceFrameGridBox = await intelligenceFrameGrid.boundingBox();
  const intelligenceCopyBox = await intelligenceCopy.boundingBox();
  expect(primaryFrameBox).not.toBeNull();
  expect(secondaryFrameBox).not.toBeNull();
  expect(lowerFrameBox).not.toBeNull();
  expect(intelligenceFrameGridBox).not.toBeNull();
  expect(intelligenceCopyBox).not.toBeNull();
  expect(firstTierFrameBox?.width ?? 0).toBeCloseTo((primaryFrameBox?.width ?? 0) * 0.8, -1);
  expect(firstTierFrameBox?.height ?? 0).toBeCloseTo((primaryFrameBox?.height ?? 0) * 0.8, 0);
  expect(primaryFrameBox?.height).toBeCloseTo(secondaryFrameBox?.height ?? 0, 0);
  expect((primaryFrameBox?.width ?? 0) / (secondaryFrameBox?.width ?? 1)).toBeCloseTo(1.5, 1);
  expect(lowerFrameBox?.height).toBeCloseTo((primaryFrameBox?.height ?? 0) * 0.5, 0);
  expect((lowerFrameBox?.x ?? 0) + (lowerFrameBox?.width ?? 0) / 2).toBeCloseTo(
    (intelligenceFrameGridBox?.x ?? 0) + (intelligenceFrameGridBox?.width ?? 0) / 2,
    0,
  );
  expect(Math.abs((intelligenceCopyBox?.y ?? 0) - (lowerFrameBox?.y ?? 0))).toBeLessThanOrEqual(10);
  expect(
    Math.abs(
      (intelligenceCopyBox?.y ?? 0) +
        (intelligenceCopyBox?.height ?? 0) -
        ((lowerFrameBox?.y ?? 0) + (lowerFrameBox?.height ?? 0)),
    ),
  ).toBeLessThanOrEqual(10);
  expect(safetyBox?.y ?? 0).toBeGreaterThanOrEqual(
    (sectionBox?.y ?? 0) + (sectionBox?.height ?? 0) - 12,
  );
  expect(copyBox?.x ?? 0).toBeGreaterThanOrEqual(
    (sectionBox?.x ?? 0) + (sectionBox?.width ?? 0) / 2,
  );
  expect(
    await statement.evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBeLessThanOrEqual(72);
  expect(
    (sectionBox?.x ?? 0) + (sectionBox?.width ?? 0) - ((copyBox?.x ?? 0) + (copyBox?.width ?? 0)),
  ).toBeGreaterThan(20);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect
    .poll(() =>
      section.evaluate(
        (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
      ),
    )
    .toBe(1);
  expect(await section.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(
    true,
  );
  const mobileButtonBox = await aboutButton.boundingBox();
  expect(mobileButtonBox).not.toBeNull();
  expect(mobileButtonBox?.height ?? 0).toBeGreaterThanOrEqual(44);
});

test("@p0 section six renders the mobile video without a full-page frame", async ({ page }) => {
  await page.setViewportSize({ width: 780, height: 1396 });
  await page.goto("/patients/#tools");

  const video = page.locator("#tools video");
  await expect
    .poll(() => video.evaluate((element) => (element as HTMLVideoElement).currentSrc))
    .toContain("patient-section6-maternal-fetal-intelligence-mobile-portrait-20260818-v5.mp4");
  await expect(video).toHaveAttribute(
    "poster",
    "/media/patient-section6-maternal-fetal-intelligence-mobile-poster-20260818-v4.jpg",
  );

  const frameBox = await page.locator("#tools .patient-tools-zoom-frame").boundingBox();
  const videoBox = await video.boundingBox();
  expect(frameBox).not.toBeNull();
  expect(videoBox).not.toBeNull();
  expect(Math.round(frameBox?.x ?? -1)).toBe(0);
  expect(Math.round(frameBox?.width ?? 0)).toBe(780);
  expect(Math.round(frameBox?.height ?? 0)).toBe(1387);
  expect(Math.round(videoBox?.width ?? 0)).toBe(780);
  expect(Math.round(videoBox?.height ?? 0)).toBe(1387);
  await expect(page.locator("#tools")).toHaveCSS("background-color", "rgb(255, 236, 238)");
  await expect(page.locator("#tools .patient-tools-zoom-frame")).toHaveCSS("box-shadow", "none");
});
