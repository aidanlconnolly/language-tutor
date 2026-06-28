# Autonomous language build — COMPLETE ✅

**Branch:** `claude/allora-status-wq7ffz` (review branch — **nothing deployed to prod or users**; awaiting review)
**Goal:** add German → Arabic → Japanese → Chinese, each to full A0–B1 parity (35 units × 3 lessons + 8 reads), web + mobile. **All four done.**

## Final status (2026-06-25)

| Language | Units | Lessons | Drills | Reads | Web build | Mobile tsc | Notes |
|---|---|---|---|---|---|---|---|
| 🇩🇪 German | 35 | 105 | 74 | 8 | ✅ | ✅ | Berlin-themed; cases |
| 🇪🇬 Arabic | 35 | 105 | 77 | 8 | ✅ | ✅ | MSA, Cairo; **RTL engineered** |
| 🇯🇵 Japanese | 35 | 105 | 83 | 8 | ✅ | ✅ | Tokyo; **CJK tokenizer** |
| 🇨🇳 Chinese | 35 | 105 | 82 | 8 | ✅ | ✅ | Beijing, Mandarin; pinyin/aspect/把-被 |

**Total added: 140 units, 420 lessons, 32 reads, ~316 translate drills** — web + mobile, all validated (web `tsc`+`next build`, mobile `tsc`, integrity + tokenizer sanity).

## Engineering done along the way
- **RTL support** (`LANG_DIR` + `useIsRTL()` + `dir` on LessonPlayer/TappableSentence/CheckpointRunner) — Arabic renders right-to-left; the other 8 stay LTR.
- **CJK tokenizer** (`tokenize.ts`, web + mobile): `Intl.Segmenter` word-segmentation for ja/zh (script-run fallback on Hermes) + 。！？ sentence enders — fixes the tappable reader/lookup for no-space scripts.

## ⚠️ Deferred / for review (intentional v1 cuts)
- **Native-speaker proofread** of the AI-authored Arabic / Japanese / Chinese (harakat & case endings; furigana; pinyin/tones).
- **Arabic RTL polish**: WordPopover anchor side, conjugation-table alignment, full **mobile** layout-mirroring (per-`Text` writingDirection).
- **Furigana/pinyin-on-sentences**: readings live in vocab `note`s; content is kana/hiragana- and common-character-forward to compensate. Adding a `reading?` schema field + rendering is the main JP/ZH enhancement.
- Japanese/Chinese **mobile** tokenizing uses the script-run fallback (Hermes lacks `Intl.Segmenter`); web is full word-level.

## Shipping
Everything is on `claude/allora-status-wq7ffz`. **Nothing has been deployed or OTA-pushed.** Review, then merge to `main` (web auto-deploys) and run the EAS update for mobile. Auto-resume cron `2253fcef` removed — build is complete.
