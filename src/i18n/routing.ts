import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

// Internal Next.js paths always contain the locale, even when its public URL
// omits the default locale. Keep that mapping at the routing boundary.
export function getInternalLocalePath(locale: Locale, pathname = "/") {
  return `/${locale}${pathname === "/" ? "" : pathname}`;
}
