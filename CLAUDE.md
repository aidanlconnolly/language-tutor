# Project Conventions

## Stack

- **Next.js 16.2** (App Router) — note: `create-next-app` shipped v16 even though the plan said "15". Same App Router model; consult `node_modules/next/dist/docs/` rather than memory for any version-sensitive API.
- TypeScript strict mode
- Tailwind v4 for all styling — no CSS modules. Config lives in `app/globals.css` via `@theme` directives; there is no `tailwind.config.ts`.
- Turso (libSQL) + Drizzle ORM for the database
- Server Actions over API routes where possible
- `ts-fsrs` for spaced repetition
- Anthropic SDK (`claude-haiku-4-5`) for word lookups, in JSON mode

## Code style

- Functional components only
- Prefer composition over prop drilling
- Co-locate types with the components that own them
- No `any` — use `unknown` and narrow
- Server Components by default; mark Client Components explicitly with `"use client"`
- Server Actions live in `lib/actions/*.ts`, each with `"use server"` at the top

## Token-conscious workflow

- When asked to change something, output ONLY the diff or changed section
- Don't rewrite untouched files
- Prefer editing files over creating new ones
- Ask before adding dependencies

## Italian app specifics

- **Diacritics**: all Italian text rendering must support `à è é ì ò ù`. Tokenizer must preserve them. Use NFC normalization on input before storing.
- **Lemma-only saves**: when the user taps any inflected form (`vado`, `andiamo`, `libri`), the saved deck card maps to the **lemma** (`andare`, `libro`) — one card per lemma. The `cards` table enforces this with a UNIQUE constraint on `word_id`. Re-saving an already-saved lemma is a no-op (keep the original `source_sentence`).
- **Definitions in English**: Claude returns English glosses + English grammar notes. Example sentences stay Italian (those are the practice material) but each example has an English translation.
- **Cache aggressively**: the `words` table is the lookup cache. Never call Claude for a lemma we've seen. The lookup flow is *always* `check cache → call Claude only on miss → insert → return`. Once "andare" is in the DB, it's there forever.
- FSRS scheduling parameters live in `lib/srs.ts`
- Anthropic API calls go through `lib/anthropic.ts` with structured output (JSON mode)
- Web Speech (`it-IT` voice) lives in `lib/speech.ts` — pick the best available Italian voice once on mount, fall back gracefully

## Environment variables

Required in `.env.local` (and Vercel project settings for prod):

- `ANTHROPIC_API_KEY` — Claude API key
- `TURSO_DATABASE_URL` — `libsql://<db-name>-<org>.turso.io` (or `file:./local.db` for local dev)
- `TURSO_AUTH_TOKEN` — JWT from `turso db tokens create <db>` (empty for local file DB)

## Common commands

```bash
PATH=/opt/homebrew/bin:$PATH npm run dev       # dev server (Turbopack)
PATH=/opt/homebrew/bin:$PATH npm run build     # production build
PATH=/opt/homebrew/bin:$PATH npm run lint      # ESLint

npx drizzle-kit push                            # sync schema → Turso
npx drizzle-kit studio                          # browse DB in browser
turso db shell italian-tutor                    # remote SQL shell
```
