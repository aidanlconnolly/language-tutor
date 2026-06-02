# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A combined Italian + French language-learning web app (A0–B1). **Multi-user with email/password auth.** Three learning loops per language: **Roadmap** (35 units × 8 stages with lessons and checkpoint quizzes), **Daily Read** (8 graded stories with comprehension questions), **Review** (FSRS spaced-repetition flashcard deck). Spanish is a planned third language (4-step extension — see below).

Live at **https://language-tutor-silk.vercel.app** (auto-deploys from `main` on `aidanlconnolly/language-tutor`).

## Stack

**Next.js 16.2** (App Router), React 19, TypeScript strict, Tailwind v4 (config in `app/globals.css` via `@theme` — no `tailwind.config.ts`), **Turso (libSQL) + Drizzle ORM**, `ts-fsrs`, Anthropic SDK (`claude-haiku-4-5`), `jose` HS256 JWT + `bcryptjs`. No NextAuth.

## Common commands

```bash
# node is at /opt/homebrew/bin/node — prefix all npm/npx commands
PATH=/opt/homebrew/bin:$PATH npm run dev     # Turbopack dev server, port 5620
PATH=/opt/homebrew/bin:$PATH npm run build   # catches TS errors
PATH=/opt/homebrew/bin:$PATH npm run lint

# DB (source env first)
set -a && source .env.local && set +a
PATH=/opt/homebrew/bin:$PATH npx drizzle-kit push    # apply schema to Turso
PATH=/opt/homebrew/bin:$PATH npx drizzle-kit studio  # GUI browser

# Turso CLI
export PATH="$HOME/.turso:$PATH"
turso db shell language-tutor

# One-time Italian data migration
set -a && source .env.local && source .env.migrate && set +a
PATH=/opt/homebrew/bin:$PATH npx tsx scripts/migrate-italian.ts
```

There are no tests.

## Architecture

### Auth

- `proxy.ts` (Next 16's `middleware` — **export must be named `proxy`**) redirects unauthenticated requests to `/login`, allowing only `/login` and `/register` through.
- `lib/auth.ts` — `createSession` / `getSession` / `deleteSession` / `requireAuth()`. JWT stored in `__session` httpOnly cookie, 30-day expiry.
- `lib/actions/auth.ts` — `registerAction` / `loginAction` / `logoutAction` / `changePasswordAction` (all `useActionState`-driven).
- **Every per-user Server Action calls `await requireAuth()` first.** The middleware is defense-in-depth, not the sole gate.

### Language routing

All language-specific pages live under `app/[lang]/`. `lib/lang.ts` defines `Lang = 'italian' | 'french'`, `SUPPORTED_LANGS`, flag/label/speech-code maps, and `isValidLang()`. Each `[lang]` page calls `isValidLang(langParam)` and returns `notFound()` for invalid values.

### Content

All curriculum is hand-authored TypeScript under `lib/content/` — no CMS.

```
lib/content/
  types.ts        ← discriminated-union LessonPage types; target-language fields use l1: (not it:/fr:)
  index.ts        ← language dispatcher: getUnits/getReads/getStages/getUnitOutline/findUnit/findLesson/findRead/pickTodaysRead(lang, ...)
  italian/        ← units/ (35 files), reads/ (8 files), stages.ts
  french/         ← units/ (35 files), reads/ (8 files), stages.ts
```

### Database schema

All per-user tables have a `language TEXT NOT NULL` column scoping rows to a specific language. Key constraints:
- `words` — UNIQUE `(language, lemma)`; **global cost-control cache** — one Claude call per new lemma per language, ever, across all users. Never scope `words` per user.
- `cards` — UNIQUE `(user_id, word_id)`; `word_id` FK already implies language.
- `lesson_progress` — UNIQUE `(user_id, lesson_slug, language)`
- `read_progress` — UNIQUE `(user_id, read_slug, language)`
- `streaks` — PK `(user_id, language, kind)`

### Server Actions

All backend logic lives in `lib/actions/*.ts` (`"use server"`). No `app/api/` routes. Every action that touches per-user data takes a `lang: Lang` argument and passes it to DB queries. The split:

| File | Responsibility |
|------|---------------|
| `auth.ts` | register / login / logout / change-password |
| `lookup.ts` | word lookup with 2-tier cache (surface hit → lemma hit → cold Claude call) |
| `save.ts` | save card to FSRS deck |
| `progress.ts` | lesson/checkpoint/read progress, streaks, `getRoadmapSummary(lang)` |
| `review.ts` | FSRS due cards, `rateCard`, daily stats |
| `deck.ts` | saved surfaces, all cards, delete card |
| `grade.ts` | Claude-graded translation exercises |

### Word lookup cost control

`lookupWord({ surface, sentence, lang })` runs a **two-tier cache** before hitting Claude:
1. Surface hit — scan `words` for `lemma === surface` or surface in `surfaceSeen` JSON array → return immediately.
2. Lemma hit — Claude returns the canonical lemma; if a `words` row already exists for that lemma, append the new surface to `surfaceSeen` and return.
3. Cold miss — insert a new `words` row.

### React lang context

`lib/lang-context.tsx` exports `LangProvider` / `useLang()` / `useLangSpeechCode()`. `LessonPlayer` wraps its entire subtree in `<LangProvider lang={lang}>` so page components (`TranslatePage`, `VocabPage`, `ListenPage`, `PronouncePage`, `TipPage`, `DialoguePage`) can call `useLang()` without prop drilling.

### Tokenizer

`lib/tokenize.ts` exports `tokenize(lang, rawText)` — shared for both Italian and French. The regex `\p{L}+'(?=\p{L})|\p{L}+'?` elides `l'ami`/`l'amico`/`j'ai`/`c'est` into two tokens while keeping `po'` attached. All text is NFC-normalized before tokenization and storage.

### FSRS serialization

`ts-fsrs` uses `Date` objects; SQLite stores text. `lib/srs.ts` is the only file that knows about the `Card` (Dates) ↔ `FsrsCardState` (ISO-string JSON) conversion. `cards.fsrs_due` is denormalized to an integer column for cheap `WHERE fsrs_due <= now` queries.

### Lazy DB client

`lib/db/client.ts` uses a `Proxy` to defer `TURSO_DATABASE_URL` validation until first use — Next.js build-time route discovery imports server files even with `dynamic = "force-dynamic"`, and a throw at module load would break `next build` on Vercel before env vars resolve.

### Adding Spanish (4 steps)

1. Add `'spanish'` to `Lang` in `lib/lang.ts` with label, flag, and speech code (`es-ES`)
2. Create `lib/content/spanish/units/` (35 unit files), `reads/` (8 reads), `stages.ts` — use `l1:` field names throughout
3. Register all three in `lib/content/index.ts` dispatchers
4. Spanish card appears on the home dashboard automatically (`app/page.tsx` maps over `SUPPORTED_LANGS`)

## Environment variables

Required in `.env.local` and Vercel project settings:

```
ANTHROPIC_API_KEY
TURSO_DATABASE_URL=libsql://language-tutor-aidanlconnolly.aws-us-east-2.turso.io
TURSO_AUTH_TOKEN
AUTH_SECRET    # node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Migration only (`.env.migrate`, not committed):
```
OLD_TURSO_DATABASE_URL=libsql://italian-tutor-aidanlconnolly.aws-us-east-2.turso.io
OLD_TURSO_AUTH_TOKEN=...
```
