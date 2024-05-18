import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getCookie, setCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";

export const createSupabaseServerClient = function (isServerComponent = false) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          // get cookie by name
          const cookieStore = cookies();
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          if (isServerComponent) return;
          // set cookie
          const cookieStore = cookies();
          cookieStore.set(name, value, options);
        },
        remove(name, options) {
          if (isServerComponent) return;
          // remove cookie
          const cookieStore = cookies();
          cookieStore.set(name, "", options);
        },
      },
    }
  );
};

export const createSupabaseServerComponentClient = function () {
  return createSupabaseServerClient(true);
};

export const createSupabaseMiddlewareClient = function (
  req,
  res
) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          // get cookie by name
          return getCookie(name, { req, res });
        },
        set(name, value, options) {
          setCookie(name, value, { req, res, ...options });
        },
        remove(name, options) {
          setCookie(name, "", { req, res, ...options });
        },
      },
    }
  );
};
