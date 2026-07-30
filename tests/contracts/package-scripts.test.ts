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
  "test:e2e": "playwright test",
  storybook: "storybook dev",
  "build:storybook": "storybook build",
  check: "pnpm format:check && pnpm lint && pnpm typecheck && pnpm test",
} as const;

describe("INF-CFG-001 stable package-script contract", () => {
  it("preserves every approved local command", () => {
    expect(packageManifest.scripts).toMatchObject(approvedScripts);
  });

  it("does not use the removed Next.js lint command", () => {
    expect(Object.values(packageManifest.scripts ?? {})).not.toContain("next lint");
  });
});
