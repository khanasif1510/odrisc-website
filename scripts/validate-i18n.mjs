import { readdir, readFile } from "node:fs/promises";

const messagesDirectory = new URL("../messages/", import.meta.url);

const requiredLocales = ["en", "ar"];
const defaultLocale = "en";

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function flattenMessages(value, prefix = "") {
  if (!isPlainObject(value)) {
    throw new TypeError(
      `Expected an object${prefix ? ` at "${prefix}"` : " at the catalog root"}.`,
    );
  }

  const entries = Object.entries(value);

  if (entries.length === 0) {
    throw new Error(`Empty message object${prefix ? ` at "${prefix}"` : " at the catalog root"}.`);
  }

  return entries.flatMap(([key, child]) => {
    if (key.trim() !== key || key.length === 0) {
      throw new Error(`Invalid message key "${key}"${prefix ? ` under "${prefix}"` : ""}.`);
    }

    const path = prefix ? `${prefix}.${key}` : key;

    if (isPlainObject(child)) {
      return flattenMessages(child, path);
    }

    if (typeof child !== "string") {
      throw new TypeError(
        `Message "${path}" must be a string; received ${Array.isArray(child) ? "an array" : typeof child}.`,
      );
    }

    if (child.trim().length === 0) {
      throw new Error(`Message "${path}" must not be empty.`);
    }

    return [[path, child]];
  });
}

async function loadCatalog(locale) {
  const catalogUrl = new URL(`${locale}.json`, messagesDirectory);
  const source = await readFile(catalogUrl, "utf8");

  let catalog;

  try {
    catalog = JSON.parse(source);
  } catch (error) {
    throw new Error(`messages/${locale}.json is not valid JSON: ${error.message}`);
  }

  return new Map(flattenMessages(catalog));
}

function difference(left, right) {
  return [...left].filter((key) => !right.has(key));
}

async function validateCatalogFiles() {
  const files = await readdir(messagesDirectory);
  const catalogLocales = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.slice(0, -".json".length))
    .sort();

  const expectedLocales = [...requiredLocales].sort();

  const missingCatalogs = difference(new Set(expectedLocales), new Set(catalogLocales));
  const unexpectedCatalogs = difference(new Set(catalogLocales), new Set(expectedLocales));

  if (missingCatalogs.length > 0) {
    throw new Error(`Missing required message catalogs: ${missingCatalogs.join(", ")}.`);
  }

  if (unexpectedCatalogs.length > 0) {
    throw new Error(
      `Unexpected message catalogs not registered in the locale contract: ${unexpectedCatalogs.join(", ")}.`,
    );
  }
}

async function main() {
  await validateCatalogFiles();

  const catalogs = new Map();

  for (const locale of requiredLocales) {
    catalogs.set(locale, await loadCatalog(locale));
  }

  const referenceCatalog = catalogs.get(defaultLocale);
  const referenceKeys = new Set(referenceCatalog.keys());

  for (const locale of requiredLocales) {
    if (locale === defaultLocale) {
      continue;
    }

    const localeCatalog = catalogs.get(locale);
    const localeKeys = new Set(localeCatalog.keys());

    const missingKeys = difference(referenceKeys, localeKeys);
    const unexpectedKeys = difference(localeKeys, referenceKeys);

    if (missingKeys.length > 0 || unexpectedKeys.length > 0) {
      const problems = [];

      if (missingKeys.length > 0) {
        problems.push(`missing: ${missingKeys.join(", ")}`);
      }

      if (unexpectedKeys.length > 0) {
        problems.push(`unexpected: ${unexpectedKeys.join(", ")}`);
      }

      throw new Error(
        `messages/${locale}.json does not match messages/${defaultLocale}.json (${problems.join("; ")}).`,
      );
    }
  }

  console.log(
    `PASS: ${requiredLocales.length} locale catalogs contain ${referenceKeys.size} matching non-empty message keys.`,
  );
}

main().catch((error) => {
  console.error(`FAIL: i18n validation failed.\n${error.message}`);
  process.exitCode = 1;
});
