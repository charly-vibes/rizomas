#!/bin/sh
set -eu

OUT="index.html"
TMP="$(mktemp "${OUT}.XXXXXX")"

# HTML head (doctype through <style>)
cat src/html/00_head.html > "$TMP"

# Inline CSS
cat src/css/style.css >> "$TMP"

# Close style, open body + script
cat src/html/10_body_open.html >> "$TMP"

# JS partials in lexical order
for f in src/js/*.js; do
  cat "$f" >> "$TMP"
done

# Close script, body, html
cat src/html/99_tail.html >> "$TMP"

mv "$TMP" "$OUT"
echo "Built $OUT ($(wc -l < "$OUT") lines)"
