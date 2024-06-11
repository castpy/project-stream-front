import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const current_customer = request.cookies.get(
    process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string
  )?.value;

  if (!current_customer && request.nextUrl.pathname.startsWith("/user/me")) {
    return Response.redirect(new URL("/login", request.url));
  }

  if (current_customer && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/user/me", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
