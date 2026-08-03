import { readFile } from "node:fs/promises";

import { extractMarkdownTable } from "./lib/markdown-table.mjs";

const registryUrl = new URL("../docs/engineering/COMPONENT_REGISTRY.md", import.meta.url);

const componentHeaders = [
  "Component ID",
  "Component",
  "Category",
  "Runtime",
  "Owner",
  "Specification",
  "Storybook",
  "Tests",
  "Accessibility",
  "RTL",
  "Status",
];

const allowedStatuses = new Set([
  "Proposed",
  "Specified",
  "Implemented",
  "Approved",
  "Published",
  "Deprecated",
  "Retired",
]);

const allowedRuntimes = new Set([
  "Server",
  "Client",
  "Server-safe / Client interaction",
  "Server composition",
  "Server composition with Client interaction",
  "Server composition with Client state",
]);

const fixedFamilyCategories = new Map([
  ["PRM", "Primitive"],
  ["LYT", "Layout"],
  ["NAV", "Navigation"],
  ["FRM", "Form"],
  ["TRS", "Trust"],
  ["DAT", "Data"],
]);

const featureCategories = new Map([
  ["0", "Shared feature"],
  ["1", "Patient feature"],
  ["2", "Provider feature"],
  ["3", "Institutional feature"],
]);

function assertUnique(value, label, seen, lineNumber) {
  const normalizedValue = value.toLocaleLowerCase("en");

  if (seen.has(normalizedValue)) {
    throw new Error(`Duplicate ${label} "${value}" at line ${lineNumber}.`);
  }

  seen.add(normalizedValue);
}

function expectedCategoryFor(family, sequence, lineNumber) {
  if (family !== "FTR") {
    const category = fixedFamilyCategories.get(family);

    if (!category) {
      throw new Error(`Unsupported component family "${family}" at line ${lineNumber}.`);
    }

    return category;
  }

  const featureRange = sequence[0];
  const category = featureCategories.get(featureRange);

  if (!category) {
    throw new Error(
      `Feature component sequence "${sequence}" at line ${lineNumber} does not map to an approved audience category.`,
    );
  }

  return category;
}

async function main() {
  const source = await readFile(registryUrl, "utf8");

  const componentRows = extractMarkdownTable(source, {
    heading: "## Registry",
    expectedHeaders: componentHeaders,
  });

  const seenIds = new Set();
  const seenNames = new Set();

  for (const { lineNumber, values } of componentRows) {
    const componentId = values["Component ID"];
    const componentName = values.Component;
    const category = values.Category;
    const runtime = values.Runtime;
    const status = values.Status;

    const idMatch = /^CMP-(PRM|LYT|NAV|FRM|TRS|DAT|FTR)-(\d{3})$/.exec(componentId);

    if (!idMatch) {
      throw new Error(`Invalid Component ID "${componentId}" at line ${lineNumber}.`);
    }

    const [, family, sequence] = idMatch;

    assertUnique(componentId, "Component ID", seenIds, lineNumber);

    assertUnique(componentName, "component name", seenNames, lineNumber);

    const expectedCategory = expectedCategoryFor(family, sequence, lineNumber);

    if (category !== expectedCategory) {
      throw new Error(
        `Component "${componentId}" at line ${lineNumber} uses category "${category}"; expected "${expectedCategory}".`,
      );
    }

    if (!allowedRuntimes.has(runtime)) {
      throw new Error(`Unsupported runtime "${runtime}" at line ${lineNumber}.`);
    }

    if (!allowedStatuses.has(status)) {
      throw new Error(`Unsupported component status "${status}" at line ${lineNumber}.`);
    }
  }

  console.log(
    `PASS: ${componentRows.length} components have unique IDs and names, valid family-category mappings, approved runtimes and lifecycle statuses.`,
  );
}

main().catch((error) => {
  console.error(`FAIL: component validation failed.\n${error.message}`);
  process.exitCode = 1;
});
