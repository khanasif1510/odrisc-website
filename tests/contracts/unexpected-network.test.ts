import http from "node:http";
import https from "node:https";

import { describe, expect, it } from "vitest";

describe("unexpected outbound network guard", () => {
  it("blocks global fetch with actionable request context", async () => {
    await expect(
      fetch("https://unexpected.example/api", {
        method: "POST",
      }),
    ).rejects.toThrow(
      "Unexpected outbound request blocked during unit or component testing: POST https://unexpected.example/api",
    );
  });

  it.each([
    {
      name: "http.get",
      request: () => http.get("http://unexpected.example/path"),
    },
    {
      name: "http.request",
      request: () =>
        http.request("http://unexpected.example/path", {
          method: "PUT",
        }),
    },
    {
      name: "https.get",
      request: () => https.get("https://unexpected.example/path"),
    },
    {
      name: "https.request",
      request: () =>
        https.request("https://unexpected.example/path", {
          method: "DELETE",
        }),
    },
  ])("blocks $name before an outbound connection starts", ({ request }) => {
    expect(request).toThrow("Unexpected outbound request blocked");
  });
});
