# Start local development server
serve PORT="8000":
    @echo "Serving on http://localhost:{{PORT}}"
    @echo "Press Ctrl+C to stop"
    python3 -m http.server {{PORT}}

# Serve with live reload (requires python-livereload: pip install livereload)
live PORT="8000":
    @echo "Serving with live reload on http://localhost:{{PORT}}"
    python3 -c "from livereload import Server; s = Server(); s.watch('.'); s.serve(port={{PORT}})"
