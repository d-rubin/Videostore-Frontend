import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const {
    nextUrl: { pathname, origin },
  } = request;
  if (pathname.startsWith("/auth/verify")) {
    const result = await fetch(`${process.env.API_URL}${pathname}`);
    if (result.status === 200) {
      return NextResponse.redirect(`${origin}/verify?success=true`);
    }
    return NextResponse.redirect(`${origin}/verify?success=false`);
  }

  const authToken = request.cookies.get("AuthToken")?.value;
  if (!authToken) {
    return NextResponse.redirect(`${origin}/login`);
  }
}

export const config = {
  matcher: [
    /* Match only request paths that start with home or auth */
    "/auth(/.*)?",
    "/home(/.*)?",
  ],
};
