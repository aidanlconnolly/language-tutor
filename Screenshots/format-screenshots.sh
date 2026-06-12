#!/usr/bin/env bash
#
# Format raw iPhone screenshots into App Store Connect-ready images.
#
# Usage:
#   1. Put screenshots (PNG/JPG) into  originals/  named in display order,
#      e.g.  01-languages.png  02-roadmap.png  03-lesson.png  04-read.png
#   2. Run:  ./format-screenshots.sh
#   3. Upload everything in  app-store-ready/  to App Store Connect.
#
# Output is 1290 x 2796 (the iPhone 6.9"/6.7" App Store slot). Images are scaled
# to *cover* and center-cropped — no white bars. Uses macOS's built-in `sips`.

set -euo pipefail
cd "$(dirname "$0")"

W=1290
H=2796

mkdir -p app-store-ready
shopt -s nullglob nocaseglob

count=0
for src in originals/*.png originals/*.jpg originals/*.jpeg; do
  count=$((count + 1))
  out="app-store-ready/$(printf "%02d" "$count")-$(basename "${src%.*}").png"

  cp "$src" "$out"
  sips -s format png "$out" --out "$out" >/dev/null

  sw=$(sips -g pixelWidth  "$out" | awk '/pixelWidth/{print $2}')
  sh=$(sips -g pixelHeight "$out" | awk '/pixelHeight/{print $2}')

  # Cover: scale on whichever axis leaves the other >= target, then crop.
  if [ $((sh * W)) -ge $((H * sw)) ]; then
    sips --resampleWidth  "$W" "$out" >/dev/null
  else
    sips --resampleHeight "$H" "$out" >/dev/null
  fi
  sips -c "$H" "$W" "$out" >/dev/null

  echo "  $(basename "$src")  ->  $out"
done

if [ "$count" -eq 0 ]; then
  echo "No screenshots found in originals/. Put your PNG/JPG files there first."
  exit 1
fi

echo ""
echo "Done — $count image(s) in app-store-ready/. Upload these to App Store Connect."
