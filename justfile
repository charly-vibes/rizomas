# Build index.html from src/ partials
build:
    ./build.sh

# Start local development server
serve PORT="8000": build
    @echo "Serving on http://localhost:{{PORT}}"
    @echo "Press Ctrl+C to stop"
    python3 -m http.server {{PORT}}

# Serve with live reload (requires python-livereload: pip install livereload)
live PORT="8000": build
    @echo "Serving with live reload on http://localhost:{{PORT}}"
    python3 -c "from livereload import Server; s = Server(); s.watch('src/'); s.serve(port={{PORT}})"
