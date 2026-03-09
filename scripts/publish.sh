#!/usr/bin/env bash
set -euo pipefail

# Always run from repo root (even if executed from another directory)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

MSG="${1:-update blog}"

# Stage all changes (works reliably across Windows Git Bash / macOS)
git add -A

if git diff --cached --quiet; then
  echo "No changes staged."
  exit 0
fi

git commit -m "$MSG"
git push
echo "Pushed. Vercel will deploy automatically."