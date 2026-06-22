# Autonomous language build — live log

**Branch:** `claude/allora-status-wq7ffz` (review branch — **nothing deploys to prod or users** until you review & merge)
**Goal:** add German → Arabic → Japanese → Chinese, each to full A0–B1 parity (35 units × 3 lessons + 8 reads), web + mobile.
**Mode:** building continuously in the background; committing + pushing at each milestone.

## Order & engineering notes
1. **German** 🇩🇪 — standard course (Latin script). Content + plumbing only.
2. **Arabic** 🇸🇦 — needs **RTL rendering** work across web + mobile components before content is usable.
3. **Japanese** 🇯🇵 — needs **tokenizer** changes (no word spaces) + romaji + kana/kanji lessons.
4. **Chinese** 🇨🇳 — needs tokenizer changes + pinyin + tones + characters.

## Status

### 🇩🇪 German — IN PROGRESS
- [x] Curriculum outline (8 stages, 35 units) — `stages.ts`
- [x] Web plumbing: lang.ts, anthropic.ts, content dispatcher, units/reads index
- [x] Mobile plumbing: lang.ts, theme.ts tint, dispatcher, greeting + stats maps
- [ ] Content authoring (35 units + 8 reads) — 9 agents running
- [ ] Mirror content to mobile
- [ ] Build/typecheck (web `next build` + `tsc`, mobile `tsc`) + integrity check
- [ ] Commit working state

### 🇸🇦 Arabic — QUEUED (RTL engineering first)
### 🇯🇵 Japanese — QUEUED (tokenizer + romaji first)
### 🇨🇳 Chinese — QUEUED (tokenizer + pinyin first)

_Last updated: German scaffold + plumbing committed; authoring agents launched._
