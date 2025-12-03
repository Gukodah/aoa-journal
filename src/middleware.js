import { NextResponse } from "next/server";
import { clerkMiddleware  } from "@clerk/nextjs/server";

export default clerkMiddleware ({
  publicRoutes: ["/"],
  signInUrl: "/",
  afterAuth(auth, req) {
    const { userId, isPublicRoute } = auth;
    if (userId && isPublicRoute) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
