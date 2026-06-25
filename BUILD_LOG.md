# Autonomous language build — live log

**Branch:** `claude/allora-status-wq7ffz` (review branch — **nothing deploys to prod or users** until you review & merge)
**Goal:** add German → Arabic → Japanese → Chinese, each to full A0–B1 parity (35 units × 3 lessons + 8 reads), web + mobile.

## Status (updated 2026-06-25)

### 🇩🇪 German — ✅ DONE (web + mobile, validated)
35 units / 105 lessons / 74 drills / 8 reads. web `tsc`+`next build` ✅, mobile `tsc` ✅, integrity ✅.

### 🇪🇬 Arabic — ✅ BUILT (web + mobile, validated) — v1, see caveats
- [x] Curriculum (MSA, Cairo-themed; script/al-/iḍāfa/root-system/dual woven in)
- [x] All 35 units + 8 reads authored (Arabic script + harakat)
- [x] **RTL engineering (web):** `LANG_DIR` + `useIsRTL()`; `dir` applied on LessonPlayer (all lesson pages), TappableSentence (all tokenized target text incl. read paragraphs & dialogues), CheckpointRunner (quizzes). Unicode bidi renders Arabic RTL; English glosses stay LTR.
- [x] Plumbing both platforms (lang.ts + LANG_DIR, anthropic.ts, dispatchers, theme tint, screens)
- [x] Mirrored to mobile
- [x] **Validated:** web `tsc` ✅ + `next build` ✅, mobile `tsc` ✅; integrity 35/105/77 drills/8 reads ✅
- [x] Committed + pushed

**Caveats / follow-ups (intentionally deferred — flagged for review):**
- RTL polish not yet done: WordPopover left/right anchor, ConjugationPage table `text-right`, DailyRead/Reader container `dir` (read *paragraphs* already RTL via TappableSentence), OrderWords token order. Lessons/quizzes/reads render correctly; these are refinements.
- **Mobile RTL**: content + Arabic text render, but per-`Text` `writingDirection` layout-mirroring on the RN page components is a follow-up (mobile currently lays out LTR with correct Arabic text runs).
- **Content is AI-authored MSA** — needs a native/advanced-speaker proofread (harakat & case endings on iḍāfa/accusative especially).

### 🇯🇵 Japanese — NEXT (tokenizer for no-space text + romaji + kana/kanji, then content)
### 🇨🇳 Chinese — QUEUED (tokenizer + pinyin + tones, then content)

_Everything stays on the review branch — no deploy, no OTA — until you review. Hourly cron `2253fcef` resumes if budget caps out._
