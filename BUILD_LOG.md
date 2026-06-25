# Autonomous language build — live log

**Branch:** `claude/allora-status-wq7ffz` (review branch — **nothing deploys to prod or users** until you review & merge)
**Goal:** add German → Arabic → Japanese → Chinese, each to full A0–B1 parity (35 units × 3 lessons + 8 reads), web + mobile.

## Status (updated 2026-06-25)

### 🇩🇪 German — ✅ DONE (web + mobile, validated)
35 units / 105 lessons / 74 translate drills / 8 reads. web `tsc`+`next build` ✅, mobile `tsc` ✅, integrity ✅. Committed.

### 🇸🇦 Arabic — 🔄 IN PROGRESS
- [x] Curriculum (8 stages, 35 units; MSA, Cairo-themed; script/al-/iḍāfa/root-system/dual woven in) — `stages.ts`
- [x] units/reads index scaffolds
- [ ] **Content authoring** — 9 agents running (35 units + 8 reads, Arabic script)
- [ ] **RTL ENGINEERING** (the app is LTR-only today) — see plan below
- [ ] Arabic plumbing (lang.ts, anthropic.ts, dispatcher, theme, screens) web + mobile
- [ ] Mirror to mobile, validate, commit

**RTL plan (from a full codebase scan):**
1. Add `LANG_DIR: Record<Lang,"ltr"|"rtl">` to web+mobile `lang.ts` (arabic="rtl", all others "ltr").
2. Web: add `useIsRTL()` to `lib/lang-context.tsx`; set `dir={isRTL?'rtl':'ltr'}` on containers — `LessonPlayer`, `TappableSentence`, `Reader`, `DailyRead`, `WordPopover`, `CheckpointRunner`, and page roots. Unicode bidi then renders Arabic correctly; English `en` glosses stay LTR.
3. Finicky spots: WordPopover flex rows + left/right anchor; ConjugationPage table `text-right`; OrderWordsPage — do NOT flex-reverse (keep token order), just set `dir`.
4. Mobile: `writingDirection:'rtl'` on the `l1` Text elements via an isRTL signal from the lang param (avoid global `I18nManager.forceRTL`, which would flip all 6 LTR languages).
5. Tokenizer (`\p{L}+`) already handles Arabic; TTS `ar-SA` works via existing speech-code lookup.

### 🇯🇵 Japanese — QUEUED (tokenizer + romaji first)
### 🇨🇳 Chinese — QUEUED (tokenizer + pinyin first)

_Everything stays on the review branch — no deploy, no OTA — until you review. Hourly cron `2253fcef` resumes if budget caps out._
