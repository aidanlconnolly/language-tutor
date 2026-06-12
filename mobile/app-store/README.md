# App Store screenshots — Allora

Everything needed to get screenshots ready for App Store review. Allora is
**iPhone-only** (`supportsTablet: false`), so you only need iPhone screenshots —
no iPad set required.

## Quick steps

1. **Get your screenshots onto the Mac.** AirDrop them from your iPhone, or save
   them anywhere, then move them into [`raw/`](raw/). Name them in display order:

   ```
   raw/01-home.png      ← language picker ("Welcome back")
   raw/02-roadmap.png   ← Italian home ("Buonasera" + roadmap)
   raw/03-lesson.png    ← a lesson page (grammar tip / vowels)
   raw/04-read.png      ← Daily Read ("Arrivo a Roma")
   raw/05-review.png    ← Review or Deck
   ```

2. **Format them:**

   ```bash
   cd mobile/app-store
   ./format-screenshots.sh
   ```

   This writes App-Store-sized copies to [`formatted/`](formatted/).

3. **Upload** the `formatted/` images to App Store Connect →
   **Allora → (your version) → Previews and Screenshots → iPhone 6.9" Display**,
   dragged in the order you named them.

## Sizes

App Store Connect's required iPhone slot is the **6.9" display**. The script
outputs **1290 × 2796 px** portrait, which Apple accepts for that slot (the
6.9"/6.7" sizes share this). You need **3–10** screenshots.

- Screenshots taken on a 6.7"/6.9" iPhone (Pro Max-class) are already this size
  and pass through essentially untouched.
- Screenshots from a smaller iPhone are scaled up to cover the canvas and
  center-cropped (a few pixels off the top/bottom) so there are no white bars.

## Notes / gotchas

- **No alpha channel.** App Store rejects screenshots with transparency. iPhone
  screenshots are normally opaque PNGs, so this is usually fine. If a file is
  rejected for an alpha channel, re-export it as JPEG and re-run.
- **No status bar edits needed.** Apple allows the real iOS status bar.
- **Order matters** — the first screenshot is the one shown in search results,
  so lead with your strongest (the roadmap or a lesson page reads well).
- The script needs no installs — it uses macOS's built-in `sips`.

## Heads-up: the screenshots you have now are pre-redesign

The screenshots shared earlier were taken on **build #11** (or the live build),
which is *before* these changes:

- the lesson "tricky letters" fix (raw `<strong>` tags are now bold text), and
- the new top-right profile button + top-left back button on language pages.

If you want the App Store images to reflect the shipped app, retake them on the
**next build** once it's on TestFlight, then run this script. Otherwise the
current ones are fine to submit — the differences are minor.
