#!/usr/bin/env bash
# SPDX-License-Identifier: MIT
set -euo pipefail

# Files to check (text-ish). Extend patterns as needed.
INCLUDE_PATTERNS=(
  "*.ts" "*.tsx" "*.js" "*.jsx" "*.astro" "*.css" "*.scss" "*.md" "*.sh" "Dockerfile"
)

EXCLUDE_DIRS=("node_modules" ".git" "dist" "build" ".yarn" "third_party_licenses")

fail=0

check_file() {
  local f="$1"
  if grep -Iq . "$f"; then
    if ! grep -Eq "SPDX-License-Identifier:\s*MIT" "$f"; then
      echo "Missing SPDX in: $f"
      fail=1
    fi
  fi
}

# Use tracked files to avoid vendor noise
while IFS= read -r -d '' file; do
  check_file "$file"
done < <(
  git ls-files -z | while IFS= read -r -d '' f; do
    skip=0
    for d in "${EXCLUDE_DIRS[@]}"; do
      [[ "$f" == "$d"* || "$f" == *"/$d/"* ]] && skip=1 && break
    done
    if [[ $skip -eq 0 ]]; then
      for pat in "${INCLUDE_PATTERNS[@]}"; do
        [[ "$f" == $pat ]] && printf '%s\0' "$f"
      done
    fi
  done
)

if [[ $fail -ne 0 ]]; then
  echo "❌ SPDX check failed."
  exit 1
else
  echo "✅ SPDX check passed."
fi
