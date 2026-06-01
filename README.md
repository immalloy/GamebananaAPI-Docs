# GameBanana API Docs

<p align="center">
  <img src="assets/icons/gaybanana-100.png" alt="GameBanana icon" width="84" height="84" />
</p>

Unofficial, browser readable API documentation for GameBanana.

This repository now uses curated, version-first source fragments under `spec/src/` and generates `spec/openapi.yaml` deterministically.

## Live site

- https://immalloy.github.io/GamebananaAPI-Docs/

## What's inside

- `index.html` - static Swagger UI page (theme, plugins, filtering, Try It Out)
- `spec/src/` - source-of-truth OpenAPI fragments organized by API version then domain
- `spec/openapi.yaml` - generated OpenAPI document
- `scripts/migrate_openapi_to_src.py` - one-time migration/normalization from a legacy monolith
- `scripts/build_openapi.py` - deterministic build + lint/consistency checks + coverage report
- `assets/icons/` - favicon and pixel-art icon assets used by the docs site

## Build workflow

```bash
python scripts/migrate_openapi_to_src.py   # when re-importing from a legacy monolithic spec
python scripts/build_openapi.py            # always run to regenerate spec/openapi.yaml
```

Build outputs:

- `spec/openapi.yaml`
- `spec/build-report.yaml` (coverage + stability + counts)
- `spec/migration-report.yaml` (migration/exclusion summary)

## Contributing

Contributions are welcome through pull requests.

- Keep updates focused (endpoint docs, schema cleanup, UI tweaks)
- Edit source fragments in `spec/src/**`; do not hand-edit generated `spec/openapi.yaml`
- Run `python scripts/build_openapi.py` and include any relevant report changes
