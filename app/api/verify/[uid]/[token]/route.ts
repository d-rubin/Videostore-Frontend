import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { uid: string; token: string } },
) {
  const {
    nextUrl: { origin },
  } = request;
  const { uid, token } = params;

  const result = await fetch(
    `${process.env.API_URL}/auth/verify/${uid}/${token}/`,
  );
  if (result.status === 200) {
    return NextResponse.redirect(`${origin}/verify?success=true`);
  }
  return NextResponse.redirect(`${origin}/verify?success=false`);
}
