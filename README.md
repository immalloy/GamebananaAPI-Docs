# GamebananaAPI Docs

Static Swagger UI setup for browsing API docs locally and on GitHub Pages.

## Files

- `index.html` - Swagger UI page
- `openapi.yaml` - HAR-derived OpenAPI document loaded by Swagger UI
- `har-api-analysis.md` - Endpoint inventory extracted from HAR files

## Local preview

Serve this folder with any static server, then open the served URL:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

Set GitHub Pages to deploy from this repo (root). The docs will load from the same folder automatically.
