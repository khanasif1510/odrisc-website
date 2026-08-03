import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

type PackageManifest = {
  scripts?: Record<string, string>;
};

const packageManifest = JSON.parse(
  readFileSync(new URL("../../package.json", import.meta.url), "utf8"),
) as PackageManifest;

const approvedScripts = {
  dev: "next dev",
  build: "next build",
  start: "next start",
  format: "prettier . --write",
  "format:check": "prettier . --check",
  lint: "eslint . --max-warnings=0",
  "lint:fix": "eslint . --fix",
  typecheck: "tsc --noEmit",
  test: "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage",
  "test:e2e": "playwright test",
  "test:e2e:critical": "playwright test --grep @p0 --project=chromium-desktop",
  "test:e2e:cross-browser":
    "playwright test --grep @p0 --project=firefox-desktop --project=webkit-desktop",
  "test:e2e:mobile": "playwright test --grep @p0 --project=mobile-chrome --project=mobile-safari",
  "test:e2e:rtl": "playwright test --grep @rtl --project=arabic-rtl",
  "test:e2e:reduced-motion": "playwright test --grep @reduced-motion --project=reduced-motion",
  "test:e2e:smoke": "playwright test --grep @smoke",
  "test:e2e:ui": "playwright test --ui",
  "test:e2e:update-snapshots": "playwright test --update-snapshots",
  storybook: "storybook dev",
  "build:storybook": "storybook build",
  "validate:routes": "node scripts/validate-routes.mjs",
  "validate:components": "node scripts/validate-components.mjs",
  "validate:i18n": "node scripts/validate-i18n.mjs",
  "validate:analytics": "node scripts/validate-analytics.mjs",
  validate:
    "pnpm validate:content && pnpm validate:routes && pnpm validate:components && pnpm validate:i18n && pnpm validate:analytics && pnpm validate:architecture",
  check:
    "pnpm format:check && pnpm lint && pnpm typecheck && pnpm validate && pnpm test:coverage && pnpm build",
} as const;

describe("INF-CFG-001 stable package-script contract", () => {
  it("preserves every approved local command", () => {
    expect(packageManifest.scripts).toMatchObject(approvedScripts);
  });

  it("does not use the removed Next.js lint command", () => {
    expect(Object.values(packageManifest.scripts ?? {})).not.toContain("next lint");
  });
});
