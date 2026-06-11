import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

function getSecret(): Uint8Array {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET env var is not set");
  return new TextEncoder().encode(s);
}

const PUBLIC_PATHS = ["/login", "/register", "/privacy"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // REST API routes (used by the mobile app) authenticate via an
  // Authorization: Bearer header inside each route, not the __session cookie.
  // The cookie middleware must not touch them, or every mobile call would be
  // redirected to /login.
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Let public auth pages through
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const token = req.cookies.get("__session")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await jwtVerify(token, getSecret());
    return NextResponse.next();
  } catch {
    // Expired or tampered token
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete("__session");
    return res;
  }
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
