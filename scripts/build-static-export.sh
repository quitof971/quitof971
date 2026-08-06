#!/usr/bin/env bash
# Builds a static export of the site (no Node.js server required) for
# upload to shared hosting such as Hostinger, and zips the result.
#
# The /api/contact route can't run on static hosting, so it's excluded
# from this build; the contact form falls back to a pre-filled mailto:
# link instead (see NEXT_PUBLIC_STATIC_EXPORT in ContactForm.tsx).
set -euo pipefail
cd "$(dirname "$0")/.."

API_DIR="src/app/api"
API_BACKUP=".api-backup-static-export"

cleanup() {
  if [ -d "$API_BACKUP" ]; then
    rm -rf "$API_DIR"
    mv "$API_BACKUP" "$API_DIR"
  fi
}
trap cleanup EXIT

rm -rf "$API_BACKUP" out
if [ -d "$API_DIR" ]; then
  mv "$API_DIR" "$API_BACKUP"
fi

STATIC_EXPORT=true NEXT_PUBLIC_STATIC_EXPORT=true npx next build

cd out
zip -r ../hostinger-export.zip . -x ".DS_Store" -x "*/.DS_Store"
cd ..

echo "Export ready: hostinger-export.zip"
