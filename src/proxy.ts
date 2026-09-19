import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getInternalLocalePath, routing } from "./i18n/routing";

const handleInternationalizedRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const defaultPrefix = getInternalLocalePath(routing.defaultLocale);
  const headers = new Headers(request.headers);

  if (pathname === defaultPrefix || pathname.startsWith(`${defaultPrefix}/`)) {
    if (headers.get("x-next-intl-locale") !== routing.defaultLocale) {
      const publicUrl = request.nextUrl.clone();
      publicUrl.pathname = pathname.slice(defaultPrefix.length) || "/";
      return NextResponse.redirect(publicUrl);
    }
    headers.set("x-next-intl-locale", routing.defaultLocale);
    return NextResponse.next({ request: { headers } });
  }

  if (
    routing.locales.some((locale) => {
      const prefix = getInternalLocalePath(locale);
      return (
        locale !== routing.defaultLocale &&
        (pathname === prefix || pathname.startsWith(`${prefix}/`))
      );
    })
  ) {
    return handleInternationalizedRouting(request);
  }

  // Keep the incoming origin when rewriting. Re-entering the default-locale
  // redirect through a different internal origin causes a production loop.
  const internalUrl = request.nextUrl.clone();
  internalUrl.pathname = getInternalLocalePath(routing.defaultLocale, pathname);
  headers.set("x-next-intl-locale", routing.defaultLocale);
  return NextResponse.rewrite(internalUrl, { request: { headers } });
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
