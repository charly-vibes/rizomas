# Build all locale versions detected from src/locales/*.meta.sh
build:
    #!/bin/sh
    for meta in src/locales/*.meta.sh; do
      lang="${meta#src/locales/}"
      lang="${lang%.meta.sh}"
      [ -f "src/locales/${lang}.js" ] || continue
      ./build.sh "$lang"
    done

# Start local development server
serve PORT="8000": build
    @echo "Serving on http://localhost:{{PORT}}"
    @echo "Press Ctrl+C to stop"
    python3 -m http.server {{PORT}}

# Serve with live reload (requires python-livereload: pip install livereload)
live PORT="8000": build
    @echo "Serving with live reload on http://localhost:{{PORT}}"
    python3 -c "from livereload import Server; s = Server(); s.watch('src/'); s.serve(port={{PORT}})"
