import { NextRequest, NextResponse } from "next/server";
import { createSupabaseMiddlewareClient } from "./supabase";

export async function middleware(req) {
  const res = NextResponse.next();

  const isResetCode = req.nextUrl.href.includes("/auth/reset-password?code");
  if (isResetCode) {
    return res;
  }

  // Create a Supabase client using middleware
  const supabase = createSupabaseMiddlewareClient(req, res);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/my-account"],
};
