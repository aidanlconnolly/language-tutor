import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

function getSecret(): Uint8Array {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET env var is not set");
  return new TextEncoder().encode(s);
}

const PUBLIC_PATHS = ["/login", "/register", "/privacy", "/support"];

// The bare Vercel production alias. Browser traffic that lands here is sent to
// the canonical custom domain. Scoped to this exact host so preview deployments
// (hashed *.vercel.app subdomains) are unaffected.
const LEGACY_HOST = "language-tutor-silk.vercel.app";
const CANONICAL_HOST = "learnallora.com";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // REST API routes (used by the mobile app) authenticate via an
  // Authorization: Bearer header inside each route, not the __session cookie.
  // The cookie middleware must not touch them, or every mobile call would be
  // redirected to /login. Leaving /api reachable on the legacy host also keeps
  // not-yet-updated mobile installs working (some HTTP clients drop the
  // Authorization header across a cross-host redirect).
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Canonicalize the host for all non-API (browser) traffic.
  if (req.headers.get("host") === LEGACY_HOST) {
    const url = new URL(req.url);
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
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
