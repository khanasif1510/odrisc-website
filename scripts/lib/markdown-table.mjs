function parseRow(line) {
  const normalizedLine = line.trim();

  if (!normalizedLine.startsWith("|") || !normalizedLine.endsWith("|")) {
    throw new Error(`Invalid Markdown table row: ${line}`);
  }

  return normalizedLine
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}

function isSeparatorRow(line) {
  return /^\|(?:\s*:?-{3,}:?\s*\|)+$/.test(line.trim());
}

export function extractMarkdownTable(source, { heading, expectedHeaders }) {
  const lines = source.split(/\r?\n/);

  const headingIndex = lines.findIndex((line) => line.trim() === heading);

  if (headingIndex === -1) {
    throw new Error(`Required heading "${heading}" was not found.`);
  }

  const tableStart = lines.findIndex(
    (line, index) => index > headingIndex && line.trim().startsWith("|"),
  );

  if (tableStart === -1) {
    throw new Error(`No Markdown table was found after "${heading}".`);
  }

  const tableLines = [];

  for (let index = tableStart; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line.trim().startsWith("|")) {
      break;
    }

    tableLines.push({
      line,
      lineNumber: index + 1,
    });
  }

  if (tableLines.length < 3) {
    throw new Error(
      `The table after "${heading}" must contain a header, separator and at least one data row.`,
    );
  }

  const headerEntry = tableLines[0];
  const separatorEntry = tableLines[1];

  if (!isSeparatorRow(separatorEntry.line)) {
    throw new Error(`Invalid Markdown table separator at line ${separatorEntry.lineNumber}.`);
  }

  const headers = parseRow(headerEntry.line);

  if (JSON.stringify(headers) !== JSON.stringify(expectedHeaders)) {
    throw new Error(
      `Unexpected headers after "${heading}".\nExpected: ${expectedHeaders.join(" | ")}\nReceived: ${headers.join(" | ")}`,
    );
  }

  return tableLines.slice(2).map(({ line, lineNumber }) => {
    const cells = parseRow(line);

    if (cells.length !== headers.length) {
      throw new Error(
        `Line ${lineNumber} contains ${cells.length} cells; expected ${headers.length}.`,
      );
    }

    const emptyColumnIndex = cells.findIndex((cell) => cell.length === 0);

    if (emptyColumnIndex !== -1) {
      throw new Error(`Line ${lineNumber} has an empty "${headers[emptyColumnIndex]}" cell.`);
    }

    return {
      lineNumber,
      values: Object.fromEntries(headers.map((header, index) => [header, cells[index]])),
    };
  });
}
