#!/usr/bin/env bash
set -e

MSG="${1:-update blog}"

git add content/blog public/blog app/blog lib package.json package-lock.json 2>/dev/null || true

if git diff --cached --quiet; then
  echo "No changes staged."
  exit 0
fi

git commit -m "$MSG"
git push
echo "Pushed. Vercel will deploy automatically."