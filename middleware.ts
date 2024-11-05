import {
  createRouteMatcher,
  isAuthenticatedNextjs,
} from "@convex-dev/auth/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPublicPage = createRouteMatcher(["/auth"]);

export async function middleware(request: NextRequest) {
  const authenticated = await isAuthenticatedNextjs();
  const isPublic = isPublicPage(request);

  if (!authenticated && !isPublic) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (authenticated && isPublic) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
