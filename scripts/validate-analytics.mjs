import { readFile } from "node:fs/promises";

import { extractMarkdownTable } from "./lib/markdown-table.mjs";

const registryUrl = new URL("../docs/engineering/ANALYTICS_EVENT_REGISTRY.md", import.meta.url);

const expectedStatuses = [
  "Proposed",
  "Approved",
  "Implemented",
  "Active",
  "Deprecated",
  "Rejected",
  "Retired",
];

const expectedApprovalValues = ["Pending", "Approved", "Rejected"];

const expectedConsentCategories = ["Essential", "Analytics", "Marketing"];

const eventHeaders = [
  "Event ID",
  "Event name",
  "Purpose",
  "Controlled event properties",
  "Consent",
  "Technical owner",
  "Business approval",
  "Privacy approval",
  "Status",
];

const protectedContextFields = new Set([
  "page_id",
  "page_type",
  "audience",
  "route",
  "locale",
  "market",
  "product_status_dependency",
  "release",
]);

const prohibitedProperties = new Set([
  "name",
  "email",
  "email_address",
  "phone",
  "phone_number",
  "message",
  "form_message",
  "medical_information",
  "clinical_value",
  "clinical_values",
  "risk_answer",
  "risk_answers",
  "risk_category",
  "patient_id",
  "provider_patient_information",
  "ultrasound_value",
  "pregnancy_week",
  "authentication_credential",
  "session_token",
  "external_url",
]);

function assertExactValues(received, expected, label) {
  if (JSON.stringify(received) !== JSON.stringify(expected)) {
    throw new Error(
      `${label} do not match the approved contract.\nExpected: ${expected.join(", ")}\nReceived: ${received.join(", ")}`,
    );
  }
}

function assertUnique(value, label, seen, lineNumber) {
  if (seen.has(value)) {
    throw new Error(`Duplicate ${label} "${value}" at line ${lineNumber}.`);
  }

  seen.add(value);
}

function parseCodeValue(value, label, lineNumber) {
  const match = /^`([^`]+)`$/.exec(value);

  if (!match) {
    throw new Error(`${label} at line ${lineNumber} must be wrapped in Markdown code ticks.`);
  }

  return match[1];
}

function parseProperties(value, lineNumber) {
  if (value === "None beyond automatically added context") {
    return [];
  }

  return value.split(",").map((entry) => {
    const property = parseCodeValue(entry.trim(), "Controlled event property", lineNumber);

    if (!/^[a-z][a-z0-9_]*$/.test(property)) {
      throw new Error(`Invalid analytics property name "${property}" at line ${lineNumber}.`);
    }

    return property;
  });
}

function validateApprovalState({
  eventName,
  businessApproval,
  privacyApproval,
  status,
  lineNumber,
}) {
  const hasRejectedApproval = businessApproval === "Rejected" || privacyApproval === "Rejected";

  const hasCompleteApproval = businessApproval === "Approved" && privacyApproval === "Approved";

  if (hasRejectedApproval && status !== "Rejected") {
    throw new Error(
      `Event "${eventName}" at line ${lineNumber} has a rejected approval but status "${status}".`,
    );
  }

  if (status === "Rejected" && !hasRejectedApproval) {
    throw new Error(
      `Rejected event "${eventName}" at line ${lineNumber} must record at least one rejected approval.`,
    );
  }

  if (["Approved", "Implemented", "Active"].includes(status) && !hasCompleteApproval) {
    throw new Error(
      `Event "${eventName}" at line ${lineNumber} cannot use status "${status}" until business and privacy approvals are Approved.`,
    );
  }

  if (status === "Proposed" && hasCompleteApproval) {
    throw new Error(
      `Event "${eventName}" at line ${lineNumber} has complete approvals but remains Proposed.`,
    );
  }
}

async function main() {
  const source = await readFile(registryUrl, "utf8");

  const statusRows = extractMarkdownTable(source, {
    heading: "## Status Definitions",
    expectedHeaders: ["Status", "Meaning"],
  });

  const approvalRows = extractMarkdownTable(source, {
    heading: "## Approval Values",
    expectedHeaders: ["Value", "Meaning"],
  });

  const consentRows = extractMarkdownTable(source, {
    heading: "## Consent Categories",
    expectedHeaders: ["Category", "Rule"],
  });

  const statuses = statusRows.map(({ values }) => values.Status);
  const approvalValues = approvalRows.map(({ values }) => values.Value);
  const consentCategories = consentRows.map(({ values }) => values.Category);

  assertExactValues(statuses, expectedStatuses, "Analytics lifecycle statuses");
  assertExactValues(approvalValues, expectedApprovalValues, "Analytics approval values");
  assertExactValues(consentCategories, expectedConsentCategories, "Analytics consent categories");

  const eventRows = extractMarkdownTable(source, {
    heading: "## Event Registry",
    expectedHeaders: eventHeaders,
  });

  const validStatuses = new Set(statuses);
  const validApprovals = new Set(approvalValues);
  const validConsentCategories = new Set(consentCategories);

  const seenEventIds = new Set();
  const seenEventNames = new Set();

  for (const { lineNumber, values } of eventRows) {
    const eventId = values["Event ID"];
    const eventName = parseCodeValue(values["Event name"], "Event name", lineNumber);
    const consent = values.Consent;
    const technicalOwner = values["Technical owner"];
    const businessApproval = values["Business approval"];
    const privacyApproval = values["Privacy approval"];
    const status = values.Status;

    if (!/^ANA-EVT-\d{3}$/.test(eventId)) {
      throw new Error(`Invalid Event ID "${eventId}" at line ${lineNumber}.`);
    }

    if (!/^[a-z][a-z0-9_]*$/.test(eventName)) {
      throw new Error(`Invalid analytics event name "${eventName}" at line ${lineNumber}.`);
    }

    assertUnique(eventId, "Event ID", seenEventIds, lineNumber);
    assertUnique(eventName, "event name", seenEventNames, lineNumber);

    if (!validConsentCategories.has(consent)) {
      throw new Error(`Undefined consent category "${consent}" at line ${lineNumber}.`);
    }

    if (technicalOwner !== "CTO") {
      throw new Error(
        `Event "${eventName}" at line ${lineNumber} must identify the CTO as technical owner.`,
      );
    }

    if (!validApprovals.has(businessApproval)) {
      throw new Error(`Undefined business approval "${businessApproval}" at line ${lineNumber}.`);
    }

    if (!validApprovals.has(privacyApproval)) {
      throw new Error(`Undefined privacy approval "${privacyApproval}" at line ${lineNumber}.`);
    }

    if (!validStatuses.has(status)) {
      throw new Error(`Undefined analytics status "${status}" at line ${lineNumber}.`);
    }

    const properties = parseProperties(values["Controlled event properties"], lineNumber);
    const seenProperties = new Set();

    for (const property of properties) {
      assertUnique(property, "controlled property", seenProperties, lineNumber);

      if (protectedContextFields.has(property)) {
        throw new Error(
          `Event "${eventName}" at line ${lineNumber} redeclares protected context field "${property}".`,
        );
      }

      if (prohibitedProperties.has(property)) {
        throw new Error(
          `Event "${eventName}" at line ${lineNumber} declares prohibited property "${property}".`,
        );
      }
    }

    validateApprovalState({
      eventName,
      businessApproval,
      privacyApproval,
      status,
      lineNumber,
    });
  }

  console.log(
    `PASS: ${eventRows.length} analytics events have unique contracts, controlled properties, valid consent categories and governance-consistent approval states.`,
  );
}

main().catch((error) => {
  console.error(`FAIL: analytics validation failed.\n${error.message}`);
  process.exitCode = 1;
});
