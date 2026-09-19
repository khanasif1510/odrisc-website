import { describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

vi.mock("next-intl/server", () => ({
  getRequestConfig: (configuration: unknown) => configuration,
}));

import { getPathname, Link, redirect, usePathname, useRouter } from "../../src/i18n/navigation";
import requestConfig from "../../src/i18n/request";
import { routing } from "../../src/i18n/routing";
import proxy, { config as proxyConfig } from "../../src/proxy";

describe("INF-CFG-002 localization runtime contract", () => {
  it("preserves the approved deterministic locale policy", () => {
    expect(routing).toMatchObject({
      locales: ["en", "ar"],
      defaultLocale: "en",
      localePrefix: "as-needed",
      localeDetection: false,
    });
  });

  it("exposes locale-aware navigation wrappers", () => {
    expect(Link).toBeDefined();
    expect(redirect).toBeTypeOf("function");
    expect(usePathname).toBeTypeOf("function");
    expect(useRouter).toBeTypeOf("function");
    expect(getPathname).toBeTypeOf("function");
  });

  it("loads the requested supported locale", async () => {
    const configuration = await requestConfig({
      requestLocale: Promise.resolve("ar"),
    });

    expect(configuration).toMatchObject({
      locale: "ar",
      messages: {
        SharedEntry: {
          siteName: "ODRISC",
        },
      },
    });
  });

  it("falls back to English for an unsupported locale", async () => {
    const configuration = await requestConfig({
      requestLocale: Promise.resolve("fr"),
    });

    expect(configuration).toMatchObject({
      locale: "en",
      messages: {
        SharedEntry: {
          siteName: "ODRISC",
        },
      },
    });
  });

  it("exports the approved Next.js proxy contract", () => {
    expect(proxy).toBeTypeOf("function");

    expect(proxyConfig).toEqual({
      matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    });
  });

  it("rewrites unprefixed English routes without changing their public URL", () => {
    const response = proxy(new NextRequest("https://odrisc.com/patients/"));

    expect(response.status).toBe(200);
    expect(response.headers.get("x-middleware-rewrite")).toBe("https://odrisc.com/en/patients/");
  });

  it("canonicalizes directly requested English-prefixed routes", () => {
    const response = proxy(new NextRequest("https://odrisc.com/en/patients/"));

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://odrisc.com/patients/");
  });
});
