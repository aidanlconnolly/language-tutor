# Autonomous language build — live log

**Branch:** `claude/allora-status-wq7ffz` (review branch — **nothing deploys to prod or users** until you review & merge)
**Goal:** add German → Arabic → Japanese → Chinese, each to full A0–B1 parity (35 units × 3 lessons + 8 reads), web + mobile.

## Status (updated 2026-06-25)

⏸ **PAUSED — session usage limit hit, resets 9am UTC.** Hourly cron `2253fcef` auto-resumes when budget returns. All work below is committed/pushed.

### 🇩🇪 German — ✅ DONE (validated, web + mobile)
### 🇪🇬 Arabic — ✅ BUILT (validated, web + mobile) — v1 (RTL engineered; polish + proofread deferred)
### 🇯🇵 Japanese — ✅ BUILT (validated, web + mobile) — v1 (CJK tokenizer engineered; furigana + proofread deferred)

### 🇨🇳 Chinese — 🔄 ~85% — RESUME HERE
- [x] Curriculum (Beijing-themed Mandarin, simplified; pinyin/tones/measure-words/aspect/把-被 woven in)
- [x] Tokenizer: already handles `zh` (no change needed — done with Japanese)
- [x] Web plumbing COMPLETE: lang.ts (+chinese, LANG_DIR ltr), anthropic.ts maps, content dispatcher (all 8 branches), units/reads index scaffolds
- [x] Mobile plumbing PARTIAL: lang.ts, theme tint, greeting + stats maps DONE
- [ ] **Mobile dispatcher branches for `chinese` NOT yet added** — `mobile/lib/content/index.ts` needs the chinese import + 8 `if (lang === "chinese")` branches (mirror what web/lib/content/index.ts has)
- [ ] **5 unit files missing** (agents cut off by the cap): **19-chinese-food, 24-narrate-trip, 28-complaints, 32-comparatives, 35-opinions** — re-author these (briefs are in the git history / this session). 30/35 units + 8/8 reads already on disk.
- [ ] Mirror web/lib/content/chinese → mobile/lib/content/chinese
- [ ] Validate: web `tsc` + `next build`, mobile `tsc`, integrity check
- [ ] Commit + push, mark DONE

_When Chinese is done: all four complete — update this log and delete cron `2253fcef`. Everything stays on the review branch — no deploy, no OTA — until the user reviews._
