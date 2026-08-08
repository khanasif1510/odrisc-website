import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

import { describe, expect, it } from "vitest";

const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
const validatorPath = path.join(repositoryRoot, "scripts/validate-test-policy.mjs");

function runValidator(source: string) {
  const fixtureDirectory = mkdtempSync(path.join(tmpdir(), "odrisc-test-policy-"));
  const fixturePath = path.join(fixtureDirectory, "fixture.test.ts");

  writeFileSync(fixturePath, source);

  try {
    return spawnSync(process.execPath, [validatorPath, fixturePath], {
      cwd: repositoryRoot,
      encoding: "utf8",
    });
  } finally {
    rmSync(fixtureDirectory, {
      recursive: true,
      force: true,
    });
  }
}

describe("test-policy repository validation", () => {
  it.each(["test.only", "describe.only", "it.only", "test.describe.only"])(
    "rejects focused call %s",
    (callName) => {
      const result = runValidator(`${callName}("focused test", () => {});`);

      expect(result.status).toBe(1);
      expect(result.stderr).toContain(`${callName} is prohibited`);
    },
  );

  it.each(["test.skip", "describe.skip", "it.skip", "test.fixme", "test.describe.skip"])(
    "rejects %s without an issue reference",
    (callName) => {
      const result = runValidator(`${callName}("temporary skip", () => {});`);

      expect(result.status).toBe(1);
      expect(result.stderr).toContain(`${callName} requires a GitHub issue reference`);
    },
  );

  it.each(["test.skip", "describe.skip", "it.skip", "test.fixme", "test.describe.skip"])(
    "accepts %s with a short issue reference",
    (callName) => {
      const result = runValidator(`${callName}("#123: temporary skip", () => {});`);

      expect(result.status).toBe(0);
      expect(result.stdout).toContain("PASS: test-policy validation");
    },
  );

  it("accepts the full repository issue URL", () => {
    const result = runValidator(
      'test.skip("https://github.com/khanasif1510/odrisc-website/issues/123", () => {});',
    );

    expect(result.status).toBe(0);
  });
});
