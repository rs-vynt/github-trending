#!/bin/bash
# verify_desc.sh - Verifies that description_vi.txt exists in all repos

REPOS_DIR="/home/vynt2/Projects/Flow/github-trending/data/repos"
MISSING=0
TOTAL=0

echo "Checking for description_vi.txt in all repos..."

for repo_path in "$REPOS_DIR"/*; do
  if [ -d "$repo_path" ]; then
    TOTAL=$((TOTAL+1))
    if [ ! -f "$repo_path/description_vi.txt" ]; then
      echo "❌ Missing in: $(basename "$repo_path")"
      MISSING=$((MISSING+1))
    else
      echo "✅ Found in: $(basename "$repo_path")"
    fi
  fi
done

echo "----------------------------------------"
if [ "$MISSING" -eq 0 ]; then
  echo "All $TOTAL repos have description_vi.txt!"
  exit 0
else
  echo "$MISSING out of $TOTAL repos are missing description_vi.txt."
  exit 1
fi
