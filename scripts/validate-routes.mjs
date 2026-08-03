import { readFile } from "node:fs/promises";

import { extractMarkdownTable } from "./lib/markdown-table.mjs";

const registryUrl = new URL("../docs/product/ROUTE_REGISTRY.md", import.meta.url);

const statusHeaders = ["Status", "Meaning"];

const routeHeaders = [
  "Page ID",
  "Route",
  "Zone",
  "Audience",
  "Page type",
  "Priority",
  "Product-status dependency",
  "Indexation",
  "CTA",
  "Owner",
  "Status",
];

const expectedStatuses = [
  "Proposed",
  "Approved",
  "In development",
  "Published",
  "Restricted",
  "Redirected",
  "Retired",
];

const allowedPriorities = new Set(["P0", "P1", "P2"]);

function assertUnique(value, label, seen, lineNumber) {
  if (seen.has(value)) {
    throw new Error(`Duplicate ${label} "${value}" at line ${lineNumber}.`);
  }

  seen.add(value);
}

function parseRouteCell(value, lineNumber) {
  const match = /^`([^`]+)`$/.exec(value);

  if (!match) {
    throw new Error(`Route at line ${lineNumber} must be wrapped in Markdown code ticks.`);
  }

  return match[1];
}

function validateCanonicalRoute(route, lineNumber) {
  if (!route.startsWith("/")) {
    throw new Error(`Route "${route}" at line ${lineNumber} must start with "/".`);
  }

  if (route !== "/" && !route.endsWith("/")) {
    throw new Error(
      `Route "${route}" at line ${lineNumber} must use the approved trailing-slash convention.`,
    );
  }

  if (route.includes("//") || route.includes("?") || route.includes("#") || /\s/.test(route)) {
    throw new Error(
      `Route "${route}" at line ${lineNumber} is not a normalized canonical pathname.`,
    );
  }

  if (/^\/(?:en|ar)(?:\/|$)/.test(route)) {
    throw new Error(
      `Logical route "${route}" at line ${lineNumber} must not contain a locale prefix.`,
    );
  }
}

async function main() {
  const source = await readFile(registryUrl, "utf8");

  const statusRows = extractMarkdownTable(source, {
    heading: "## Route Status Definitions",
    expectedHeaders: statusHeaders,
  });

  const registeredStatuses = statusRows.map(({ values }) => values.Status);

  if (JSON.stringify(registeredStatuses) !== JSON.stringify(expectedStatuses)) {
    throw new Error(
      `Route lifecycle definitions do not match the approved contract.\nExpected: ${expectedStatuses.join(", ")}\nReceived: ${registeredStatuses.join(", ")}`,
    );
  }

  const routeRows = extractMarkdownTable(source, {
    heading: "## Route Registry",
    expectedHeaders: routeHeaders,
  });

  const seenPageIds = new Set();
  const seenRoutes = new Set();
  const validStatuses = new Set(registeredStatuses);

  let rootPageId;

  for (const { lineNumber, values } of routeRows) {
    const pageId = values["Page ID"];
    const route = parseRouteCell(values.Route, lineNumber);
    const priority = values.Priority;
    const status = values.Status;

    if (!/^[A-Z]{2,3}-PG-\d{3}$/.test(pageId)) {
      throw new Error(`Invalid Page ID "${pageId}" at line ${lineNumber}.`);
    }

    assertUnique(pageId, "Page ID", seenPageIds, lineNumber);

    assertUnique(route, "canonical route", seenRoutes, lineNumber);

    validateCanonicalRoute(route, lineNumber);

    if (!allowedPriorities.has(priority)) {
      throw new Error(`Unsupported priority "${priority}" at line ${lineNumber}.`);
    }

    if (!validStatuses.has(status)) {
      throw new Error(`Undefined route status "${status}" at line ${lineNumber}.`);
    }

    if (route === "/") {
      rootPageId = pageId;
    }
  }

  if (rootPageId !== "SH-PG-001") {
    throw new Error(
      `The canonical root route must belong to SH-PG-001; received ${rootPageId ?? "no root route"}.`,
    );
  }

  console.log(
    `PASS: ${routeRows.length} routes have unique Page IDs, normalized canonical paths, approved priorities and registered lifecycle statuses.`,
  );
}

main().catch((error) => {
  console.error(`FAIL: route validation failed.\n${error.message}`);
  process.exitCode = 1;
});
