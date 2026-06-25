# Autonomous language build — live log

**Branch:** `claude/allora-status-wq7ffz` (review branch — **nothing deploys to prod or users** until you review & merge)
**Goal:** add German → Arabic → Japanese → Chinese, each to full A0–B1 parity (35 units × 3 lessons + 8 reads), web + mobile.

## Status (updated 2026-06-25)

### 🇩🇪 German — ✅ DONE (web + mobile, validated)
35 units / 105 lessons / 74 drills / 8 reads. Full builds green.

### 🇪🇬 Arabic — ✅ BUILT (web + mobile, validated) — v1
35 units / 105 lessons / 77 drills / 8 reads (MSA, Cairo). RTL engineering on web (LANG_DIR + useIsRTL + dir on LessonPlayer/TappableSentence/CheckpointRunner). Full builds green. Caveats: RTL polish (popover anchor, table align, mobile per-Text writingDirection) + native proofread — in commit notes.

### 🇯🇵 Japanese — ✅ BUILT (web + mobile, validated) — v1
- [x] Curriculum (Tokyo-themed; hiragana→katakana→particles→て-form→counters→keigo)
- [x] All 35 units + 8 reads authored (kana-forward, rōmaji in vocab notes)
- [x] **Tokenizer engineering:** `tokenize.ts` (web+mobile) now segments no-space CJK text — `Intl.Segmenter` word-level on web, script-run fallback on Hermes/mobile; recognises 。！？ sentence enders. Verified: a JP sentence → 11 word tokens (was 1).
- [x] Plumbing both platforms (lang.ts, anthropic.ts, dispatchers, theme tint, screens)
- [x] Mirrored to mobile
- [x] **Validated:** web `tsc` ✅ + `next build` ✅, mobile `tsc` ✅; integrity 35/105/83 drills/8 reads ✅; tokenizer sanity ✅
- [x] Committed + pushed

**Caveats / follow-ups (deferred — flagged for review):**
- **Furigana/readings**: rōmaji is in vocab `note`s, but the content schema has no per-sentence reading field, so kanji in lessons/reads show without furigana (content is kana-forward to compensate). Adding a `reading?` field + rendering is the main JP enhancement.
- **Mobile tokenizer**: Hermes lacks `Intl.Segmenter`, so mobile uses the script-run fallback (taps group kana runs / single kanji) rather than full-word segmentation. Web is word-level.
- AI-authored — needs a native-speaker proofread.

### 🇨🇳 Chinese — NEXT (tokenizer already CJK-ready; needs pinyin + tones + content)

_Everything stays on the review branch — no deploy, no OTA — until you review. Hourly cron `2253fcef` resumes if budget caps out._
