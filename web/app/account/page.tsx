"use client";

import { useActionState } from "react";
import Link from "next/link";
import { changePasswordAction } from "@/lib/actions/auth";

export default function AccountPage() {
  const [state, action, isPending] = useActionState(changePasswordAction, null);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 font-sans sm:px-6 sm:py-10">
      <header className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-block text-xs text-zinc-400 hover:text-amber-700"
        >
          ← Home
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Account</h1>
      </header>

      <section className="max-w-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Change password
        </h2>

        <form action={action} className="space-y-4">
          <div>
            <label
              htmlFor="current"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Current password
            </label>
            <input
              id="current"
              name="current"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>

          <div>
            <label
              htmlFor="new"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              New password
              <span className="ml-1 font-normal text-zinc-400">(min 8 chars)</span>
            </label>
            <input
              id="new"
              name="new"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>

          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Confirm new password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>

          {state && "error" in state && (
            <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300">
              {state.error}
            </p>
          )}

          {state && "ok" in state && (
            <p className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 disabled:opacity-50"
          >
            {isPending ? "Updating…" : "Update password"}
          </button>
        </form>
      </section>
    </main>
  );
}
