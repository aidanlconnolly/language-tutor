import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Allora",
  description: "How Allora handles your data.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 font-sans text-zinc-800 dark:text-zinc-200">
      <Link
        href="/"
        className="mb-6 inline-block text-xs text-zinc-400 hover:text-amber-700"
      >
        ← Allora
      </Link>

      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: June 11, 2026</p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed">
        <p>
          Allora (&ldquo;the app&rdquo;) is a language-learning app for Italian,
          French, and Spanish. This policy explains what we collect, why, and the
          control you have over it. We do not sell your data, show ads, or use
          third-party advertising or analytics trackers.
        </p>

        <section>
          <h2 className="mb-2 text-lg font-semibold">What we collect</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Account</strong> — your email address and a securely hashed
              password (we never store your password in plain text).
            </li>
            <li>
              <strong>Learning progress</strong> — the lessons, checkpoints, and
              readings you complete, your streaks, the words you save, and your
              flashcard review history.
            </li>
            <li>
              <strong>Word lookups &amp; translation practice</strong> — text you
              tap to look up or submit for grading is sent to our AI provider to
              generate the definition or feedback.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">How we use it</h2>
          <p>
            We use this data only to run the app: to authenticate you, save and
            sync your progress across devices, schedule your flashcard reviews,
            and generate word definitions and translation feedback. We do not use
            it for advertising or profiling.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Service providers</h2>
          <p>We share data only with the services that make the app work:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Anthropic (Claude API)</strong> — receives the words and
              sentences you look up or submit for grading, to generate the
              response. It is not used to train models.
            </li>
            <li>
              <strong>Turso</strong> — hosts the database that stores your account
              and progress.
            </li>
            <li>
              <strong>Vercel</strong> — hosts the application and its API.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Deleting your data</h2>
          <p>
            You can permanently delete your account at any time from{" "}
            <strong>Account → Delete account</strong> in the app. This immediately
            and irreversibly erases your account and all associated progress —
            lessons, streaks, saved words, and review history — across every
            language. You can also email us to request deletion.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Data retention</h2>
          <p>
            We keep your data for as long as your account exists. When you delete
            your account, it is removed from our database. Anonymous, non-personal
            dictionary entries (a shared cache of word definitions, not linked to
            any user) may be retained to keep the app fast.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Children</h2>
          <p>
            Allora is not directed at children under 13, and we do not knowingly
            collect personal information from them.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Contact</h2>
          <p>
            Questions or requests about your data? Email{" "}
            <a
              href="mailto:aidanlconnolly@gmail.com"
              className="text-amber-700 underline"
            >
              aidanlconnolly@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
