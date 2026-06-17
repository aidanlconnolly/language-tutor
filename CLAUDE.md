# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A combined Italian + French + Spanish + Portuguese language-learning app (A0–B1). **Multi-user with email/password auth.** (Portuguese is a single **Brazilian-primary** course — pt-BR audio — that teaches the major European-Portuguese differences inline via `tip` pages and vocab `note`s.) Three learning loops per language: **Roadmap** (35 units × 8 stages with lessons and checkpoint quizzes), **Daily Read** (8 graded stories with comprehension questions), **Review** (FSRS spaced-repetition flashcard deck).

**Two platforms sharing one Turso cloud DB:**
- `web/` — Next.js 16.2 web app, live at **https://learnallora.com** (auto-deploys from `main`)
- `mobile/` — Expo SDK 56 iOS app (Expo Router v6), built with EAS

## Folder structure

```
language-tutor/
  web/          ← Next.js web app (source of truth for all curriculum + DB)
  mobile/       ← Expo React Native iOS app (calls web's REST API)
  CLAUDE.md     ← this file
```

---

## web/ — Next.js app

### Stack
**Next.js 16.2** (App Router), React 19, TypeScript strict, Tailwind v4 (config in `app/globals.css` via `@theme` — no `tailwind.config.ts`), **Turso (libSQL) + Drizzle ORM**, `ts-fsrs`, Anthropic SDK (`claude-haiku-4-5`), `jose` HS256 JWT + `bcryptjs`. No NextAuth.

### Common commands (run from `web/`)

```bash
# node is at /opt/homebrew/bin/node — prefix all npm/npx commands
cd web
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
```

There are no tests.

### Auth

- `proxy.ts` (Next 16's `middleware` — **export must be named `proxy`**) redirects unauthenticated requests to `/login`, allowing only `/login` and `/register` through.
- `lib/auth.ts` — `createSession` / `getSession` / `deleteSession` / `requireAuth()`. JWT stored in `__session` httpOnly cookie, 30-day expiry.
- `lib/actions/auth.ts` — `registerAction` / `loginAction` / `logoutAction` / `changePasswordAction` (all `useActionState`-driven).
- **Every per-user Server Action calls `await requireAuth()` first.** The middleware is defense-in-depth, not the sole gate.
- `lib/api-auth.ts` — `getApiUserId(request)` reads `Authorization: Bearer <token>` header; used by all REST API routes called from the mobile app. Also exports `readJson(request)` + `BadRequestError`: wrap body parsing so malformed JSON returns **400**, not an unhandled **500**.

### Admin dashboard

`app/admin/page.tsx` — a `force-dynamic` server component (no API route/server action; it queries Drizzle directly) gated to an email allowlist via `ADMIN_EMAIL` (comma-separated env var, defaults to the owner). It computes **growth & retention** entirely from existing timestamps — there is no analytics table:
- **Activity** = any row in `lesson_progress`/`read_progress`/`checkpoint_attempts`/`cards`/`reviews` (joined to `cards` for `userId`). All `*At` columns are epoch-ms.
- Derives signups, activated/active-24h/7d, "returned" (active on ≥2 distinct days), **D1/D7 return** (activity ≥1/7 days after `users.createdAt`, among users old enough to qualify), a 14-day signups + active-users chart, per-language active learners, and a **roadmap drop-off funnel** (distinct lesson-completers per unit, ordered via `getUnitOutline(lang)`).

### Language routing

All language-specific pages live under `app/[lang]/`. `lib/lang.ts` defines `Lang = 'italian' | 'french' | 'spanish' | 'portuguese'`, `SUPPORTED_LANGS`, flag/label/speech-code maps, and `isValidLang()`. Each `[lang]` page calls `isValidLang(langParam)` and returns `notFound()` for invalid values.

### Content

All curriculum is hand-authored TypeScript under `lib/content/` — no CMS.

```
lib/content/
  types.ts        ← discriminated-union LessonPage types; target-language fields use l1: (not it:/fr:)
  index.ts        ← language dispatcher: getUnits/getReads/getStages/getUnitOutline/findUnit/findLesson/findRead/pickTodaysRead(lang, ...)
  italian/        ← units/ (35 files), reads/ (8 files), stages.ts
  french/         ← units/ (35 files), reads/ (8 files), stages.ts
  spanish/        ← units/ (35 files), reads/ (8 files), stages.ts
  portuguese/     ← units/ (35 files), reads/ (8 files), stages.ts  (Brazilian-primary)
```

All four languages are at content parity (≈35 units × 3 lessons, every unit carrying `translate` exercises — the productive en→l1 drill). When extending a language, author **original** content for that language/culture (Spanish wines, Brazilian feijoada, ser/estar — never a literal translation of the Italian unit) and keep the per-unit `translate` count in step with the others. Adding a language touches: `lib/lang.ts` + `lib/content/index.ts` (dispatcher) + a new `lib/content/<lang>/` tree + `lib/anthropic.ts` (the `Record<Lang,string>` maps) on web, plus the **mirror copies** in `mobile/lib/` (`lang.ts`, `content/index.ts`, `content/<lang>/`, and the per-language `LANG_TINT`/greeting maps in mobile screens + `lib/theme.ts`). The login/register flag row renders from `SUPPORTED_LANGS` dynamically.

### Database schema

All per-user tables have a `language TEXT NOT NULL` column scoping rows to a specific language. Key constraints:
- `words` — UNIQUE `(language, lemma)`; **global cost-control cache** — one Claude call per new lemma per language, ever, across all users. Never scope `words` per user.
- `cards` — UNIQUE `(user_id, word_id)`; `word_id` FK already implies language.
- `lesson_progress` — UNIQUE `(user_id, lesson_slug, language)`
- `read_progress` — UNIQUE `(user_id, read_slug, language)`
- `streaks` — PK `(user_id, language, kind)`

### Server Actions (web-only)

All backend logic lives in `lib/actions/*.ts` (`"use server"`). Every action that touches per-user data takes a `lang: Lang` argument and passes it to DB queries.

### REST API routes (for mobile app)

`app/api/` routes wrap the same server-action logic and accept `Authorization: Bearer <token>` headers instead of cookies:

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/auth/register` | POST | Register → returns `{ok, token, user}` |
| `/api/auth/login` | POST | Login → returns `{ok, token, user}` |
| `/api/auth/change-password` | POST | Change password (Bearer auth) |
| `/api/[lang]/progress` | GET | All lesson/read/streak progress |
| `/api/[lang]/progress/lesson` | POST | Mark lesson done |
| `/api/[lang]/progress/checkpoint` | POST | Record checkpoint attempt |
| `/api/[lang]/progress/read` | POST | Mark read done |
| `/api/[lang]/review` | GET | Due FSRS cards + daily stats |
| `/api/[lang]/review/rate` | POST | Rate a card |
| `/api/[lang]/deck` | GET/POST | List cards / save card |
| `/api/[lang]/deck/[cardId]` | DELETE | Delete card |
| `/api/[lang]/lookup` | POST | Word lookup (Claude + cache) |
| `/api/[lang]/grade` | POST | Grade translation (Claude) |

### Word lookup cost control

`lookupWord({ surface, sentence, lang })` runs a **two-tier cache** before hitting Claude:
1. Surface hit — scan `words` for `lemma === surface` or surface in `surfaceSeen` JSON array → return immediately.
2. Lemma hit — Claude returns the canonical lemma; if a `words` row already exists for that lemma, append the new surface to `surfaceSeen` and return.
3. Cold miss — insert a new `words` row.

### Tokenizer

`lib/tokenize.ts` exports `tokenize(lang, rawText)` — shared for all three languages. The regex `\p{L}+'(?=\p{L})|\p{L}+'?` elides `l'ami`/`l'amico`/`j'ai`/`c'est` into two tokens while keeping `po'` attached.

### FSRS serialization

`ts-fsrs` uses `Date` objects; SQLite stores text. `lib/srs.ts` is the only file that knows about the `Card` (Dates) ↔ `FsrsCardState` (ISO-string JSON) conversion. `cards.fsrs_due` is denormalized to an integer column for cheap `WHERE fsrs_due <= now` queries.

### Lazy DB client

`lib/db/client.ts` uses a `Proxy` to defer `TURSO_DATABASE_URL` validation until first use — Next.js build-time route discovery imports server files even with `dynamic = "force-dynamic"`, and a throw at module load would break `next build` on Vercel before env vars resolve.

### Environment variables

Required in `web/.env.local` and Vercel project settings:

```
ANTHROPIC_API_KEY
TURSO_DATABASE_URL=libsql://language-tutor-aidanlconnolly.aws-us-east-2.turso.io
TURSO_AUTH_TOKEN
AUTH_SECRET    # node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

> **Vercel root directory**: must be set to `web/` in Vercel Project Settings → Root Directory.

---

## mobile/ — Expo iOS app

### Stack
**Expo SDK 56**, React Native 0.85, Expo Router v6 (file-based routing), TypeScript strict, `expo-speech` (TTS), `expo-secure-store` (JWT storage), `@react-native-async-storage/async-storage`, `ts-fsrs`. All curriculum content files are copied from `web/lib/content/` — pure TS data with no Node.js deps.

> **iOS 26 SDK requirement**: Apple requires apps built with the iOS 26 SDK (Xcode 26). The production build profile in `eas.json` pins `ios.image` to `macos-tahoe-26.4-xcode-26.4`. SDK 53 (RN 0.79) could **not** compile on Xcode 26 (its bundled `fmt` hit a `consteval` error → ITMS-90725); SDK 56 (RN 0.85.3) fixes it. Reanimated 4 needs `react-native-worklets` and the `react-native-worklets/plugin` Babel plugin (see `babel.config.js`).

### Common commands (run from `mobile/`)

```bash
cd mobile
PATH=/opt/homebrew/bin:$PATH npm install          # install deps
PATH=/opt/homebrew/bin:$PATH npx expo start       # start Metro bundler + Expo Go
PATH=/opt/homebrew/bin:$PATH npx expo start --ios # open in iOS Simulator

# EAS builds (requires eas-cli login)
PATH=/opt/homebrew/bin:$PATH npx eas-cli login
PATH=/opt/homebrew/bin:$PATH npx eas-cli build --profile production --platform ios
```

### Shipping changes — OTA-first (READ BEFORE EVERY BUILD)

This account is on the EAS **Starter plan: 45 iOS cloud builds/month** (up from the
free plan's 15). That's more headroom, but **still a hard monthly cap — be careful and
don't burn credits on JS-only edits.** This app is set up for **EAS Update** (OTA):
`expo-updates` is installed, `app.json` has `runtimeVersion` (`appVersion` policy) +
`updates.url`, and every `eas.json` profile has a `channel`. **Default to shipping JS
over-the-air, not rebuilding.**

**Decision rule — one question per change: did the NATIVE layer change?**
EAS prints a **fingerprint** per build; same fingerprint = no native change. (Builds
#8–10 all shared fingerprint `47ab8d03…` — three cloud builds wasted on JS-only edits.)

| Change type | What to run | Cost |
|---|---|---|
| Iterating / testing | `npx expo start --ios` (simulator, Fast Refresh) | free |
| **JS / TS / `lib/content/` / UI / styling / logic** (no native change) | `npx eas-cli update --channel production --message "…"` | **free, no review** |
| Native module added/upgraded, `app.json` icon/splash/permissions, Expo SDK bump | `npx eas-cli build --profile production --platform ios --local` then `eas submit` | free (`--local` builds on this Mac, **skips cloud quota**) |

(Prefix every command with `PATH=/opt/homebrew/bin:$PATH` and run from `mobile/`.)

**Baseline build caveat:** `eas update` only reaches installs built **with** `expo-updates`
— i.e. builds from commit `b70c7ae` (2026-06-11) onward. Builds #1–10 can't receive OTA
updates; the first build after that commit is the OTA baseline. Install/submit that baseline
once, then JS changes flow to it via `eas update`.

**Reserve cloud builds (`eas build` without `--local`) for emergencies only** — prefer
`--local` for native changes so the 45/month quota is never the constraint.

### Architecture

- `app/` — Expo Router v5 file-based routing
  - `_layout.tsx` — root layout, `AuthContext`, checks SecureStore on mount
  - `(auth)/login.tsx`, `(auth)/register.tsx` — unauthenticated screens
  - `(app)/index.tsx` — home: 3 language cards
  - `(app)/[lang]/index.tsx` — language home: roadmap + tools
  - `(app)/[lang]/lesson/[unit]/[lesson].tsx` → `LessonPlayer`
  - `(app)/[lang]/checkpoint/[unit].tsx` — unit checkpoint quiz
  - `(app)/[lang]/read/index.tsx` + `[slug].tsx` — daily reads
  - `(app)/[lang]/tools/review.tsx` — FSRS flashcard review
  - `(app)/[lang]/tools/deck.tsx` — saved word deck
  - `(app)/[lang]/tools/reader.tsx` — tappable-text reader
- `lib/api.ts` — all REST API calls to the web backend (`EXPO_PUBLIC_API_BASE`)
- `lib/auth.ts` — SecureStore JWT management
- `lib/lang.ts` — `Lang` type, `SUPPORTED_LANGS`, flag/label/speech maps
- `lib/srs.ts` — FSRS rating helpers (no DB, just `applyRating` + `previewIntervals`)
- `lib/content/` — **copied from web** — all 140+ curriculum TS files
- `components/lesson/LessonPlayer.tsx` — progress bar + page dispatcher
- `components/lesson/pages/` — 12 page-type components
- `components/shared/SpeakButton.tsx` — `expo-speech` TTS button

### Auth bridge

Web uses httpOnly cookies; mobile can't. API routes (`/api/auth/login` etc.) return a JWT token in the response body. Mobile stores it in `expo-secure-store`. Both auth systems share the same `AUTH_SECRET` and Turso DB.

### Environment variables (mobile)

Create `mobile/.env.local` (gitignored):
```
EXPO_PUBLIC_API_BASE=https://learnallora.com
```
Defaults to the Vercel URL if unset. For local dev, set to `http://localhost:5620`.

### EAS setup

```bash
cd mobile
PATH=/opt/homebrew/bin:$PATH npx eas-cli login          # authenticate
PATH=/opt/homebrew/bin:$PATH npx eas-cli init           # link to EAS project (one-time)
# Set env vars in EAS dashboard: EXPO_PUBLIC_API_BASE
PATH=/opt/homebrew/bin:$PATH npx eas build --profile production --platform ios
```

Bundle identifier: `com.languagetutor.app`
