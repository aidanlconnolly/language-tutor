#!/usr/bin/env bash
#
# Format raw iPhone screenshots into App Store Connect-ready images.
#
# Usage:
#   1. Drop your screenshots (PNG/JPG) into  app-store/raw/
#      Name them in the order you want them shown, e.g.
#        01-home.png  02-roadmap.png  03-lesson.png  04-read.png  05-review.png
#   2. Run:  ./format-screenshots.sh
#   3. Upload everything in  app-store/formatted/  to App Store Connect.
#
# Output size is 1290 x 2796 — the iPhone 6.9"/6.7" display slot that App Store
# Connect requires. Images are scaled to *cover* and center-cropped (no white
# bars). Uses macOS's built-in `sips`, so no extra tools to install.

set -euo pipefail
cd "$(dirname "$0")"

W=1290
H=2796

mkdir -p formatted
shopt -s nullglob nocaseglob

count=0
for src in raw/*.png raw/*.jpg raw/*.jpeg; do
  count=$((count + 1))
  base=$(printf "%02d" "$count")
  out="formatted/${base}-$(basename "${src%.*}").png"

  cp "$src" "$out"
  sips -s format png "$out" --out "$out" >/dev/null

  sw=$(sips -g pixelWidth  "$out" | awk '/pixelWidth/{print $2}')
  sh=$(sips -g pixelHeight "$out" | awk '/pixelHeight/{print $2}')

  # Cover: scale on whichever axis leaves the other axis >= target, then crop.
  if [ $((sh * W)) -ge $((H * sw)) ]; then
    sips --resampleWidth  "$W" "$out" >/dev/null   # width fills, height overflows
  else
    sips --resampleHeight "$H" "$out" >/dev/null   # height fills, width overflows
  fi
  sips -c "$H" "$W" "$out" >/dev/null               # center-crop to exact canvas

  echo "  $(basename "$src")  ->  $out   (${W}x${H}, was ${sw}x${sh})"
done

if [ "$count" -eq 0 ]; then
  echo "No screenshots found in raw/. Drop your PNG/JPG files there first."
  exit 1
fi

echo ""
echo "Done — $count image(s) in formatted/. Upload these to App Store Connect:"
echo "  App Store Connect -> Allora -> (version) -> Previews and Screenshots"
echo "  -> iPhone 6.9\" Display -> drag in the formatted/ files in order."
