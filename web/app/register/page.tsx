"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerAction } from "@/lib/actions/auth";
import { SUPPORTED_LANGS, LANG_FLAGS } from "@/lib/lang";

export default function RegisterPage() {
  const [state, action, isPending] = useActionState(registerAction, null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-slate-950 font-sans">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="text-3xl mb-2">{SUPPORTED_LANGS.map((l) => LANG_FLAGS[l]).join(" ")}</div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Allora
          </h1>
          <p className="mt-1 text-sm text-slate-400">Create an account to start learning.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <form action={action} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Password{" "}
                <span className="font-normal text-slate-500">(min 8 chars)</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {state?.error && (
              <p className="rounded-lg border border-red-800 bg-red-950/40 px-3 py-2 text-sm text-red-300">
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-sky-400 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
