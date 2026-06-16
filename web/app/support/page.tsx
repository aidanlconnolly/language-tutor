import Link from "next/link";

export const metadata = {
  title: "Support — Allora",
  description: "Get help with Allora — contact, FAQ, and account support.",
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 font-sans text-zinc-800 dark:text-zinc-200">
      <Link
        href="/"
        className="mb-6 inline-block text-xs text-zinc-400 hover:text-amber-700"
      >
        ← Allora
      </Link>

      <h1 className="text-3xl font-bold tracking-tight">Support</h1>
      <p className="mt-2 text-sm text-zinc-500">
        We&rsquo;re happy to help with anything Allora.
      </p>

      <div className="mt-8 space-y-6 text-[15px] leading-relaxed">
        <section>
          <h2 className="mb-2 text-lg font-semibold">Contact us</h2>
          <p>
            The fastest way to reach us is by email. We typically reply within a
            couple of days.
          </p>
          <p className="mt-2">
            <a
              href="mailto:aidanlconnolly@gmail.com?subject=Allora%20Support"
              className="text-amber-700 underline"
            >
              aidanlconnolly@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Frequently asked</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong>I forgot my password.</strong>{" "}
              Email us at the address above from your account email and
              we&rsquo;ll help you reset it.
            </li>
            <li>
              <strong>Does my progress sync across devices?</strong> Yes. Sign in
              with the same account on the web app and the iOS app and your
              lessons, streaks, saved words, and reviews stay in sync.
            </li>
            <li>
              <strong>Which languages are supported?</strong> Italian, French, and
              Spanish, from beginner (A0) through intermediate (B1).
            </li>
            <li>
              <strong>How do I delete my account?</strong> Go to{" "}
              <strong>Account → Delete account</strong> in the app. This
              permanently erases your account and all progress across every
              language. You can also email us to request deletion.
            </li>
            <li>
              <strong>How is my data handled?</strong> See our{" "}
              <Link href="/privacy" className="text-amber-700 underline">
                Privacy Policy
              </Link>
              . We don&rsquo;t sell data, show ads, or use advertising trackers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Get the app</h2>
          <p>
            Allora is available on the{" "}
            <a
              href="https://apps.apple.com/us/app/allora-learn-languages/id6779423192"
              className="text-amber-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>{" "}
            and on the web at{" "}
            <a
              href="https://learnallora.com"
              className="text-amber-700 underline"
            >
              learnallora.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
