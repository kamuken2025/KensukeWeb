#!/usr/bin/env bash
set -e

# Usage: ./scripts/newpost.sh "title words"
# Example: ./scripts/newpost.sh "Trip note in Tokyo"

TITLE="${1:-日記}"
DATE="$(date +%Y-%m-%d)"

# slug化（英数字以外は-に寄せる。日本語タイトルなら diary になる）
SLUG="$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g')"
if [ -z "$SLUG" ]; then SLUG="diary"; fi

FILE="content/blog/${DATE}-${SLUG}.md"
mkdir -p content/blog

if [ -f "$FILE" ]; then
  echo "Already exists: $FILE"
  exit 1
fi

cat > "$FILE" <<EOF
---
title: "$TITLE"
date: "$DATE"
tags: ["diary"]
---

EOF

echo "Created: $FILE"
# VS Codeで開く
code "$FILE"