import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const sourceRoot = path.join(repositoryRoot, "src");

const requiredFiles = [
  "src/app/[locale]/layout.tsx",
  "src/app/[locale]/page.tsx",
  "src/i18n/navigation.ts",
  "src/i18n/request.ts",
  "src/i18n/routing.ts",
  "src/proxy.ts",
];

const prohibitedLegacyFiles = ["src/app/layout.tsx", "src/app/page.tsx", "src/middleware.ts"];

const sourceExtensions = new Set([".js", ".jsx", ".ts", ".tsx"]);

const analyticsProviderFile = "src/lib/analytics/providers/gtm.ts";

const environmentConfigurationFile = "src/config/environment.ts";

async function exists(relativePath) {
  try {
    await access(path.join(repositoryRoot, relativePath));
    return true;
  } catch {
    return false;
  }
}

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(entryPath)));
      continue;
    }

    if (entry.isFile() && sourceExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }

  return files;
}

function toRepositoryPath(absolutePath) {
  return path.relative(repositoryRoot, absolutePath).split(path.sep).join("/");
}

function extractImportSpecifiers(source) {
  const specifiers = [];

  const patterns = [
    /\b(?:import|export)\s+(?:[\s\S]*?\s+from\s+)?["']([^"']+)["']/g,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      specifiers.push(match[1]);
    }
  }

  return specifiers;
}

function resolveSourceImport(importerPath, specifier) {
  if (specifier.startsWith("@/")) {
    return path.join(sourceRoot, specifier.slice(2));
  }

  if (specifier.startsWith(".")) {
    return path.resolve(path.dirname(importerPath), specifier);
  }

  return undefined;
}

function isInside(candidatePath, boundaryDirectory) {
  const relativePath = path.relative(boundaryDirectory, candidatePath);

  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

function isClientComponent(source) {
  return /^\s*["']use client["'];/m.test(source);
}

function validateClientImports({ file, repositoryPath, source }) {
  if (!isClientComponent(source)) {
    return;
  }

  const serverDirectory = path.join(sourceRoot, "server");

  for (const specifier of extractImportSpecifiers(source)) {
    if (specifier === "server-only") {
      throw new Error(`${repositoryPath}: Client Components must not import "server-only".`);
    }

    const resolvedImport = resolveSourceImport(file, specifier);

    if (resolvedImport && isInside(resolvedImport, serverDirectory)) {
      throw new Error(
        `${repositoryPath}: Client Components must not import server modules through "${specifier}".`,
      );
    }
  }
}

function validateDirectSourcePatterns({ repositoryPath, source }) {
  if (/\bdataLayer\s*\.\s*push\s*\(/.test(source) && repositoryPath !== analyticsProviderFile) {
    throw new Error(
      `${repositoryPath}: direct dataLayer.push calls are permitted only in ${analyticsProviderFile}.`,
    );
  }

  if (/\bgtag\s*\(/.test(source) && repositoryPath !== analyticsProviderFile) {
    throw new Error(
      `${repositoryPath}: direct gtag calls are permitted only in ${analyticsProviderFile}.`,
    );
  }

  if (/\bprocess\s*\.\s*env\b/.test(source) && repositoryPath !== environmentConfigurationFile) {
    throw new Error(
      `${repositoryPath}: process.env access must be centralized in ${environmentConfigurationFile}.`,
    );
  }

  if (/\bNEXT_PUBLIC_[A-Z0-9_]+\b/.test(source)) {
    throw new Error(
      `${repositoryPath}: NEXT_PUBLIC_* values are prohibited; use the approved public runtime-config boundary.`,
    );
  }

  if (
    /(?:from\s*|import\s*\(\s*)["']recharts(?:\/[^"']*)?["']/.test(source) &&
    !repositoryPath.startsWith("src/components/charts/")
  ) {
    throw new Error(`${repositoryPath}: Recharts must be wrapped within src/components/charts/.`);
  }

  if (/(?:from\s*|import\s*\(\s*)["']next\/link["']/.test(source)) {
    throw new Error(
      `${repositoryPath}: localized navigation must use wrappers from src/i18n/navigation.ts instead of next/link.`,
    );
  }

  if (/["'`]\/(?:en|ar)(?:\/|["'`])/.test(source) && repositoryPath !== "src/i18n/routing.ts") {
    throw new Error(
      `${repositoryPath}: locale prefixes must not be manually concatenated or hard-coded.`,
    );
  }
}

async function validateStructure() {
  for (const requiredFile of requiredFiles) {
    if (!(await exists(requiredFile))) {
      throw new Error(`Required architecture file is missing: ${requiredFile}.`);
    }
  }

  for (const prohibitedFile of prohibitedLegacyFiles) {
    if (await exists(prohibitedFile)) {
      throw new Error(`Legacy architecture file must not exist: ${prohibitedFile}.`);
    }
  }
}

async function validateTypeScriptAlias() {
  const tsconfigSource = await readFile(path.join(repositoryRoot, "tsconfig.json"), "utf8");
  const tsconfig = JSON.parse(tsconfigSource);

  const alias = tsconfig.compilerOptions?.paths?.["@/*"];

  if (!Array.isArray(alias) || alias.length !== 1 || alias[0] !== "./src/*") {
    throw new Error('tsconfig.json must map "@/*" exactly to "./src/*".');
  }
}

async function validateLocalizationContract() {
  const routingSource = await readFile(path.join(repositoryRoot, "src/i18n/routing.ts"), "utf8");

  const requiredRoutingFragments = [
    'locales: ["en", "ar"]',
    'defaultLocale: "en"',
    'localePrefix: "as-needed"',
    "localeDetection: false",
  ];

  for (const fragment of requiredRoutingFragments) {
    if (!routingSource.includes(fragment)) {
      throw new Error(
        `src/i18n/routing.ts is missing approved routing configuration: ${fragment}.`,
      );
    }
  }

  const layoutSource = await readFile(
    path.join(repositoryRoot, "src/app/[locale]/layout.tsx"),
    "utf8",
  );

  if (!layoutSource.includes("lang={locale}")) {
    throw new Error(
      "The locale layout must set the HTML lang attribute from the validated locale.",
    );
  }

  if (!layoutSource.includes('dir={locale === "ar" ? "rtl" : "ltr"}')) {
    throw new Error("The locale layout must set RTL for Arabic and LTR for English.");
  }
}

async function main() {
  await validateStructure();
  await validateTypeScriptAlias();
  await validateLocalizationContract();

  const sourceFiles = await collectSourceFiles(sourceRoot);

  for (const file of sourceFiles) {
    const repositoryPath = toRepositoryPath(file);
    const source = await readFile(file, "utf8");

    validateClientImports({
      file,
      repositoryPath,
      source,
    });

    validateDirectSourcePatterns({
      repositoryPath,
      source,
    });
  }

  console.log(
    `PASS: architecture validation checked ${requiredFiles.length} required files and ${sourceFiles.length} source files for localization, boundary and prohibited-pattern rules.`,
  );
}

main().catch((error) => {
  console.error(`FAIL: architecture validation failed.\n${error.message}`);
  process.exitCode = 1;
});
