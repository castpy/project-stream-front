import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUserStore = request.cookies.get(
    process.env.NEXT_PUBLIC_COOKIE_NAME_CUSTOMER as string
  )?.value;

  // if (!currentUserStore && request.nextUrl.pathname.startsWith("/painel")) {
  //   return Response.redirect(new URL("/auth", request.url));
  // }

  // if (currentUserStore && request.nextUrl.pathname.startsWith("/auth")) {
  //   return Response.redirect(new URL("/painel", request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
