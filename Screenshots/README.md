# App Store screenshots — Allora

Screenshots for Allora's App Store listing. Allora is **iPhone-only**, so only
iPhone screenshots are required.

## What's here

- **`app-store-ready/`** — formatted PNGs in two sizes, since App Store Connect
  has a slot per device size. Same five shots in each, numbered in display order
  (`01-languages`, `02-roadmap`, `03-lesson`, `04-listen`, `05-daily-read`):
  - **`iphone-6.9/`** — **1290 × 2796** → iPhone 6.9" slot (preferred; Apple
    auto-scales this down to the smaller sizes, so this set alone usually suffices)
  - **`iphone-6.5/`** — **1284 × 2778** → iPhone 6.5" slot
- **`originals/`** — the raw phone screenshots from build 13.
  (`IMG_4860` is an older build-11 shot — kept for reference, not used.)
- **`format-screenshots.sh`** — re-runs the formatter on `originals/`.

## Upload to App Store Connect

App Store Connect → **Allora** → (your version) → **Previews and Screenshots**.
Match the folder to the slot's device size:
- **iPhone 6.9" Display** slot → drag the five `app-store-ready/iphone-6.9/` files.
- **iPhone 6.5" Display** slot → drag the five `app-store-ready/iphone-6.5/` files.

You need 3–10 per slot; you have 5. Filling the 6.9" slot is usually enough —
Apple scales it down for the others.

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
