#!/bin/sh
set -eu

LANG="${1:-en}"
. "src/locales/${LANG}.meta.sh"

# Build LANGS array from all available locales (only include langs with a .js file)
LANGS_JS="const LANGS=["
SEP=""
for meta in src/locales/*.meta.sh; do
  TLANG="${meta#src/locales/}"
  TLANG="${TLANG%.meta.sh}"
  [ -f "src/locales/${TLANG}.js" ] || continue
  TLABEL=$(. "$meta" && printf '%s' "$LOCALE_LABEL")
  if [ "$LANG" = "en" ]; then
    if [ "$TLANG" = "en" ]; then TURL="./"; else TURL="${TLANG}/"; fi
  else
    if [ "$TLANG" = "en" ]; then
      TURL="../"
    elif [ "$TLANG" = "$LANG" ]; then
      TURL="./"
    else
      TURL="../${TLANG}/"
    fi
  fi
  LANGS_JS="${LANGS_JS}${SEP}{\"lang\":\"${TLANG}\",\"label\":\"${TLABEL}\",\"url\":\"${TURL}\"}"
  SEP=","
done
LANGS_JS="${LANGS_JS}];"

if [ "$LANG" = "en" ]; then
  OUT="index.html"
else
  mkdir -p "$LANG"
  OUT="$LANG/index.html"
fi

TMP="$(mktemp "${OUT}.XXXXXX")"

# HTML head (doctype through <style>)
cat src/html/00_head.html > "$TMP"

# Inline CSS
cat src/css/style.css >> "$TMP"

# Close style, open body + script
cat src/html/10_body_open.html >> "$TMP"

# Inject LANGS array (computed at build time from available locales)
printf '%s\n' "$LANGS_JS" >> "$TMP"

# Locale JS (injected first so LOCALE is available to all other JS)
cat "src/locales/${LANG}.js" >> "$TMP"

# JS partials in lexical order
for f in src/js/*.js; do
  cat "$f" >> "$TMP"
done

# Close script, body, html
cat src/html/99_tail.html >> "$TMP"

# Substitute HTML placeholders — use env vars in perl to handle special chars safely
LOCALE_LANG="$LOCALE_LANG" \
LOCALE_DIR="$LOCALE_DIR" \
LOCALE_TITLE="$LOCALE_TITLE" \
LOCALE_NAV_LABEL="$LOCALE_NAV_LABEL" \
LOCALE_SUBTITLE="$LOCALE_SUBTITLE" \
LOCALE_JS_REQUIRED="$LOCALE_JS_REQUIRED" \
perl -pi -e '
  s|__LANG__|$ENV{LOCALE_LANG}|g;
  s|__DIR__|$ENV{LOCALE_DIR}|g;
  s|__TITLE__|$ENV{LOCALE_TITLE}|g;
  s|__NOSCRIPT_NAV_LABEL__|$ENV{LOCALE_NAV_LABEL}|g;
  s|__NOSCRIPT_SUBTITLE__|$ENV{LOCALE_SUBTITLE}|g;
  s|__NOSCRIPT_JS_REQUIRED__|$ENV{LOCALE_JS_REQUIRED}|g;
' "$TMP"

mv "$TMP" "$OUT"
echo "Built $OUT ($(wc -l < "$OUT") lines)"
