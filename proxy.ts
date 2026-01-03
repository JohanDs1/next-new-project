import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const headerNext = new Headers(request.headers);

  headerNext.set("test-header", "Hola-como-ta-muchacho");

  const response = NextResponse.next({
    request: {
      headers: headerNext,
    },
  });

  if (request.nextUrl.pathname.startsWith("/information")) {
    const user = {
      name: "Mario",
      role: "admin",
      authenticated: process.env.NEXT_PUBLIC_AUTENTICATION,
    };

    if (user.authenticated !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}
