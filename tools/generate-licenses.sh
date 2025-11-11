#!/usr/bin/env bash
# SPDX-License-Identifier: MIT
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/third_party_licenses"

mkdir -p "$OUT"

# JSON inventory
npx license-checker --json --relativeLicensePath > "$OUT/dependencies.json"

# Pretty table + NOTICE via Node script
node "$ROOT/tools/generate-licenses.cjs" all
echo "Done."
