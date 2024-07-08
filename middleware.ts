import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const {
    nextUrl: { pathname, origin },
  } = request;

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
