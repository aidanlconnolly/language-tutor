# App Store screenshots — Allora

Screenshots for Allora's App Store listing. Allora is **iPhone-only**, so only
iPhone screenshots are required.

## What's here

- **`app-store-ready/`** — formatted **1290 × 2796** PNGs, ready to upload to App
  Store Connect, numbered in display order:
  1. `01-languages.png` — home / language picker (Italian · French · Spanish)
  2. `02-roadmap.png` — Italian home: streak, today's read, roadmap
  3. `03-lesson.png` — a lesson page (the `c`/`g` pronunciation tip)
  4. `04-daily-read.png` — Daily Read with translations
- **`originals/`** — the raw phone screenshots from build 13.
  (`IMG_4860` is an older build-11 shot — kept for reference, not used.)
- **`format-screenshots.sh`** — re-runs the formatter on `originals/`.

## Upload to App Store Connect

App Store Connect → **Allora** → (your version) → **Previews and Screenshots** →
**iPhone 6.9" Display** → drag in the four `app-store-ready/` files in order.
You need 3–10 screenshots; you have 4.

## Re-formatting (e.g. after retaking on a newer build)

1. Replace the images in `originals/` (named in the order you want them shown).
2. Run:
   ```bash
   cd screenshots && ./format-screenshots.sh
   ```
   It rewrites `app-store-ready/` — scaling each to cover 1290×2796 and
   center-cropping (no white bars), using macOS's built-in `sips`.

## Notes

- The status bar shows **"◀ TestFlight"** — Apple accepts it, but for a cleaner
  listing, open Allora from its **home-screen icon** (not via TestFlight) before
  screenshotting, then re-run the formatter.
- Screenshots must have **no alpha channel** (App Store rejects transparency) —
  these are opaque PNGs, so you're fine.
