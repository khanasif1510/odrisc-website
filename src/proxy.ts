import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const handleInternationalizedRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    if (request.headers.get("x-next-intl-locale") !== "en") {
      const publicUrl = request.nextUrl.clone();
      publicUrl.pathname = pathname.slice(3) || "/";
      return NextResponse.redirect(publicUrl);
    }

    const headers = new Headers(request.headers);
    headers.set("x-next-intl-locale", "en");
    return NextResponse.next({ request: { headers } });
  }

  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    return handleInternationalizedRouting(request);
  }

  const internalUrl = request.nextUrl.clone();
  internalUrl.pathname = `/en${pathname === "/" ? "" : pathname}`;

  return NextResponse.rewrite(internalUrl, {
    request: {
      headers: new Headers({
        ...Object.fromEntries(request.headers),
        "x-next-intl-locale": "en",
      }),
    },
  });
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
