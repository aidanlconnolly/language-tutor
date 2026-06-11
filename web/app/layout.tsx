import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { getSession } from "@/lib/auth";
import { logoutAction } from "@/lib/actions/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Allora",
  description: "Italian, French & Spanish — A0 to B1, ten minutes a day.",
  appleWebApp: {
    title: "Allora",
    capable: true,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {session && (
          <div className="border-b border-slate-800 bg-slate-900">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2 sm:px-6">
              <span className="text-xs text-slate-400">{session.email}</span>
              <div className="flex items-center gap-4">
                <Link
                  href="/account"
                  className="text-xs text-slate-400 hover:text-sky-400"
                >
                  Account
                </Link>
                <form action={logoutAction}>
                  <button
                    type="submit"
                    className="text-xs text-slate-400 hover:text-sky-400"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
