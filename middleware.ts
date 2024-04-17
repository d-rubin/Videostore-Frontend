import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("AuthToken")?.value;
  if (!authToken) {
    return NextResponse.redirect("/login");
  }
  // const response = NextResponse.next();
  // response.headers.set("Authorization", `Token ${authToken}`);
  // return response;
}

export const config = {
  matcher: [
    /* Match only request paths that start with home */
    "/home(/.*)?",
  ],
};
