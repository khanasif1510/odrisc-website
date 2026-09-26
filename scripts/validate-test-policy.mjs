import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import ts from "typescript";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const playwrightConfigPath = path.join(repositoryRoot, "playwright.config.ts");

const sourceExtensions = new Set([".cjs", ".cts", ".js", ".jsx", ".mjs", ".mts", ".ts", ".tsx"]);

const excludedDirectories = new Set([
  ".git",
  ".next",
  "dist",
  "build",
  "blob-report",
  "coverage",
  "node_modules",
  "playwright-report",
  "storybook-static",
  "test-results",
]);

const focusedCalls = new Set(["test.only", "describe.only", "it.only", "test.describe.only"]);

const skippedCalls = new Set([
  "test.skip",
  "describe.skip",
  "it.skip",
  "test.fixme",
  "test.describe.skip",
]);

const issueReferencePattern =
  /(?:#\d+\b|https:\/\/github\.com\/khanasif1510\/odrisc-website\/issues\/\d+\b)/;

function toRepositoryPath(absolutePath) {
  return path.relative(repositoryRoot, absolutePath).split(path.sep).join("/");
}

function scriptKind(file) {
  const extension = path.extname(file);

  if (extension === ".tsx") {
    return ts.ScriptKind.TSX;
  }

  if (extension === ".jsx") {
    return ts.ScriptKind.JSX;
  }

  if (extension === ".js" || extension === ".mjs" || extension === ".cjs") {
    return ts.ScriptKind.JS;
  }

  return ts.ScriptKind.TS;
}

function readCallName(expression) {
  if (ts.isIdentifier(expression)) {
    return expression.text;
  }

  if (ts.isPropertyAccessExpression(expression)) {
    const parent = readCallName(expression.expression);

    return parent ? `${parent}.${expression.name.text}` : undefined;
  }

  return undefined;
}

function hasIssueReference(callExpression, sourceFile) {
  const reviewableArguments = callExpression.arguments.filter(
    (argument) => !ts.isArrowFunction(argument) && !ts.isFunctionExpression(argument),
  );

  return reviewableArguments.some((argument) =>
    issueReferencePattern.test(argument.getText(sourceFile)),
  );
}

export function validateTestPolicySource(source, fileName = "fixture.ts") {
  const sourceFile = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    scriptKind(fileName),
  );

  const violations = [];

  function visit(node) {
    if (ts.isCallExpression(node)) {
      const callName = readCallName(node.expression);

      if (callName && focusedCalls.has(callName)) {
        const location = sourceFile.getLineAndCharacterOfPosition(node.expression.getStart());

        violations.push({
          column: location.character + 1,
          line: location.line + 1,
          message: `${callName} is prohibited; focused tests must never be committed.`,
        });
      }

      if (callName && skippedCalls.has(callName) && !hasIssueReference(node, sourceFile)) {
        const location = sourceFile.getLineAndCharacterOfPosition(node.expression.getStart());

        violations.push({
          column: location.character + 1,
          line: location.line + 1,
          message: `${callName} requires a GitHub issue reference such as #123 or the full repository issue URL.`,
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return violations;
}

async function collectCodeFiles(directory) {
  const entries = await readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectCodeFiles(entryPath)));
      continue;
    }

    if (entry.isFile() && sourceExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }

  return files;
}

async function validatePlaywrightConfiguration() {
  const source = await readFile(playwrightConfigPath, "utf8");

  if (!/forbidOnly\s*:\s*Boolean\s*\(\s*process\.env\.CI\s*\)/.test(source)) {
    throw new Error("playwright.config.ts must retain forbidOnly: Boolean(process.env.CI).");
  }
}

async function main() {
  await validatePlaywrightConfiguration();

  const requestedFiles = process.argv.slice(2);
  const files =
    requestedFiles.length > 0
      ? requestedFiles.map((file) => path.resolve(repositoryRoot, file))
      : await collectCodeFiles(repositoryRoot);

  const violations = [];

  for (const file of files.sort()) {
    const source = await readFile(file, "utf8");
    const repositoryPath = toRepositoryPath(file);

    for (const violation of validateTestPolicySource(source, file)) {
      violations.push(
        `${repositoryPath}:${violation.line}:${violation.column} ${violation.message}`,
      );
    }
  }

  if (violations.length > 0) {
    throw new Error(violations.join("\n"));
  }

  console.log(
    `PASS: test-policy validation checked ${files.length} code files; focused tests are absent, skips have issue references, and Playwright forbidOnly is enforced.`,
  );
}

const executedFile = process.argv[1] ? path.resolve(process.argv[1]) : undefined;

if (executedFile === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`FAIL: test-policy validation failed.\n${error.message}`);
    process.exitCode = 1;
  });
}
