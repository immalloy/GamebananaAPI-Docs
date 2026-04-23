# GameBanana API Docs

<p align="center">
  <img src="assets/icons/gaybanana-100.png" alt="GameBanana icon" width="84" height="84" />
</p>

Unofficial, browser readable API documentation for GameBanana.

This repository packages a styled Swagger UI frontend with a large OpenAPI spec that covers multiple API versions and host compatibility metadata.

## Live site

- https://immalloy.github.io/GamebananaAPI-Docs/

## What's inside

- `index.html` - static Swagger UI page (theme, plugins, filtering, Try It Out)
- `spec/openapi.yaml` - main OpenAPI document with endpoints, schemas, and annotations (Important)
- `assets/icons/` - favicon and pixel-art icon assets used by the docs site

## Structure

```text
.
|- index.html
|- spec/
|  `- openapi.yaml
`- assets/
   `- icons/
      |- favicon.ico
      |- gaybanana-16.png
      |- gaybanana-35.png
      |- gaybanana-50.png
      `- gaybanana-100.png
```

## Contributing

Contributions are welcome through pull requests.

- Fork the repo and create a branch for your changes
- Keep updates focused (endpoint docs, schema cleanup, UI tweaks)
- Open a PR with a clear title and short summary of what changed
- If you add or adjust endpoints, update `spec/openapi.yaml` and include a quick validation note in the PR
