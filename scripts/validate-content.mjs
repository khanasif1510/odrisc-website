import { readFile } from "node:fs/promises";

import { extractMarkdownTable } from "./lib/markdown-table.mjs";

const pageRequirementsUrl = new URL("../docs/product/PAGE_REQUIREMENTS.md", import.meta.url);

const routeRegistryUrl = new URL("../docs/product/ROUTE_REGISTRY.md", import.meta.url);

const activeContentDocuments = [
  new URL("../docs/content/PAGE_CONTENT_BRIEF_TEMPLATE.md", import.meta.url),
  new URL("../docs/content/STORY_TO_PAGE_MATRIX.md", import.meta.url),
];

const reservedContentDocuments = [
  new URL("../docs/content/CONTENT_GUIDELINES.md", import.meta.url),
  new URL("../docs/content/MESSAGING_ARCHITECTURE.md", import.meta.url),
];

const reservedDocumentMarker =
  "<!-- RESERVED: This document is not an active source of truth. Complete and approve it before use. -->";

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

const requiredPageMetadata = ["Priority", "Audience", "Page type", "PRD requirements"];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readMetadata(section, label) {
  const pattern = new RegExp(`^\\*\\*${escapeRegExp(label)}:\\*\\*\\s+(.+)$`, "m");

  return pattern.exec(section)?.[1];
}

function readRouteMetadata(section) {
  const route = readMetadata(section, "Route");

  if (route) {
    return {
      label: "Route",
      value: route,
    };
  }

  const routePattern = readMetadata(section, "Route pattern");

  if (routePattern) {
    return {
      label: "Route pattern",
      value: routePattern,
    };
  }

  return undefined;
}

function parseCodePath(value, context) {
  const match = /^`([^`]+)`$/.exec(value);

  if (!match) {
    throw new Error(`${context} must be wrapped in Markdown code ticks.`);
  }

  return match[1];
}

function validateCanonicalPath(pathname, context) {
  if (!pathname.startsWith("/")) {
    throw new Error(`${context} "${pathname}" must start with "/".`);
  }

  if (pathname !== "/" && !pathname.endsWith("/")) {
    throw new Error(`${context} "${pathname}" must use the approved trailing-slash convention.`);
  }

  if (
    pathname.includes("//") ||
    pathname.includes("?") ||
    pathname.includes("#") ||
    /\s/.test(pathname)
  ) {
    throw new Error(`${context} "${pathname}" is not normalized.`);
  }

  if (/^\/(?:en|ar)(?:\/|$)/.test(pathname)) {
    throw new Error(`${context} "${pathname}" must not contain a locale prefix.`);
  }
}

function assertUnique(value, label, seen, pageId) {
  if (seen.has(value)) {
    throw new Error(`Duplicate ${label} "${value}" in ${pageId}.`);
  }

  seen.add(value);
}

function parsePageSpecifications(source) {
  const headingPattern = /^## ([A-Z]{2,3}-PG-\d{3}) — (.+)$/gm;

  const matches = [...source.matchAll(headingPattern)];

  if (matches.length === 0) {
    throw new Error("No page-requirement specifications were found.");
  }

  return matches.map((match, index) => {
    const pageId = match[1];
    const title = match[2].trim();
    const start = match.index;
    const end = matches[index + 1]?.index ?? source.length;
    const section = source.slice(start, end);

    return {
      pageId,
      title,
      section,
    };
  });
}

async function validateContentDocuments() {
  for (const documentUrl of activeContentDocuments) {
    const source = await readFile(documentUrl, "utf8");

    if (source.trim().length === 0 || !/^\s*#\s+\S/m.test(source)) {
      throw new Error(
        `${documentUrl.pathname} must be a non-empty active Markdown document with a level-one heading.`,
      );
    }
  }

  for (const documentUrl of reservedContentDocuments) {
    const source = await readFile(documentUrl, "utf8");

    if (source.trim() !== reservedDocumentMarker) {
      throw new Error(
        `${documentUrl.pathname} is reserved and must contain exactly the approved reservation marker until completed.`,
      );
    }
  }
}

async function main() {
  await validateContentDocuments();

  const [pageRequirementsSource, routeRegistrySource] = await Promise.all([
    readFile(pageRequirementsUrl, "utf8"),
    readFile(routeRegistryUrl, "utf8"),
  ]);

  const specifications = parsePageSpecifications(pageRequirementsSource);

  const seenPageIds = new Set();
  const seenCanonicalPaths = new Set();
  const specificationsById = new Map();

  for (const specification of specifications) {
    const { pageId, title, section } = specification;

    assertUnique(pageId, "Page ID", seenPageIds, pageId);

    if (title.length === 0) {
      throw new Error(`${pageId} must have a non-empty specification title.`);
    }

    const routeMetadata = readRouteMetadata(section);

    if (!routeMetadata) {
      throw new Error(`${pageId} must declare Route or Route pattern metadata.`);
    }

    for (const label of requiredPageMetadata) {
      if (!readMetadata(section, label)) {
        throw new Error(`${pageId} is missing required "${label}" metadata.`);
      }
    }

    const testRequirementCount = [...section.matchAll(/^### Test Requirements$/gm)].length;

    if (testRequirementCount !== 1) {
      throw new Error(
        `${pageId} must contain exactly one "Test Requirements" subsection; received ${testRequirementCount}.`,
      );
    }

    let canonicalPath;

    if (/^Platform-defined (?:404|500)$/.test(routeMetadata.value)) {
      canonicalPath = undefined;
    } else {
      canonicalPath = parseCodePath(routeMetadata.value, `${pageId} ${routeMetadata.label}`);

      validateCanonicalPath(canonicalPath, `${pageId} ${routeMetadata.label}`);

      assertUnique(canonicalPath, "page-requirement route", seenCanonicalPaths, pageId);
    }

    specificationsById.set(pageId, {
      ...specification,
      canonicalPath,
      priority: readMetadata(section, "Priority"),
      initialStatus: readMetadata(section, "Initial status"),
      audience: readMetadata(section, "Audience"),
    });
  }

  const registeredRoutes = extractMarkdownTable(routeRegistrySource, {
    heading: "## Route Registry",
    expectedHeaders: routeHeaders,
  });

  for (const { lineNumber, values } of registeredRoutes) {
    const pageId = values["Page ID"];
    const specification = specificationsById.get(pageId);

    if (!specification) {
      throw new Error(
        `Registered ${pageId} at Route Registry line ${lineNumber} has no Page Requirements specification.`,
      );
    }

    const registeredPath = parseCodePath(values.Route, `Route Registry ${pageId}`);

    if (specification.canonicalPath !== registeredPath) {
      throw new Error(
        `${pageId} route mismatch.\nRoute Registry: ${registeredPath}\nPage Requirements: ${specification.canonicalPath ?? "none"}`,
      );
    }

    if (specification.priority !== values.Priority) {
      throw new Error(
        `${pageId} priority mismatch.\nRoute Registry: ${values.Priority}\nPage Requirements: ${specification.priority}`,
      );
    }

    if (specification.initialStatus !== values.Status) {
      throw new Error(
        `${pageId} status mismatch.\nRoute Registry: ${values.Status}\nPage Requirements: ${specification.initialStatus ?? "missing"}`,
      );
    }

    const registeredAudience = values.Audience.toLocaleLowerCase("en");
    const requirementAudience = specification.audience.toLocaleLowerCase("en");

    if (!requirementAudience.includes(registeredAudience)) {
      throw new Error(
        `${pageId} audience mismatch.\nRoute Registry: ${values.Audience}\nPage Requirements: ${specification.audience}`,
      );
    }
  }

  console.log(
    `PASS: ${specifications.length} page specifications have unique metadata and test contracts; ${registeredRoutes.length} registered routes match Page Requirements; ${activeContentDocuments.length} content documents are active and ${reservedContentDocuments.length} are explicitly reserved.`,
  );
}

main().catch((error) => {
  console.error(`FAIL: content validation failed.\n${error.message}`);
  process.exitCode = 1;
});
