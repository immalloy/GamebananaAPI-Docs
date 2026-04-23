# GameBanana API Docs

<p align="center">
  <img src="assets/icons/gaybanana-100.png" alt="GameBanana icon" width="84" height="84" />
</p>

Unofficial GameBanana API documentation built with Docusaurus and a searchable OpenAPI explorer.

## Live site

- https://immalloy.github.io/GamebananaAPI-Docs/

## Stack

- Docusaurus for the docs site shell, navigation, and static deployment
- RapiDoc for the searchable endpoint explorer
- `spec/openapi.yaml` as the source of truth for the explorer

## Local usage

Install dependencies and start the local site:

```powershell
npm.cmd install
npm.cmd run start
```

Or use the Windows helpers:

- `start-docs.bat` to install and launch the development server
- `serve-build.bat` to build and serve the production output

The local site runs on:

- `http://localhost:3000/GamebananaAPI-Docs/`

## Main files

- `spec/openapi.yaml` - main OpenAPI document with endpoints, schemas, and observation metadata
- `docs/` - hand-written guide pages
- `src/pages/api.jsx` - interactive API explorer page
- `docusaurus.config.js` - site config, routing, and branding
- `sidebars.js` - docs and API navigation structure
- `src/css/custom.css` - GameBanana site theme overrides
- `.github/workflows/deploy-docs.yml` - GitHub Pages build and deploy workflow

## Updating the API docs

When you change `spec/openapi.yaml`, regenerate and build:

```powershell
npm.cmd run build
```

The install step copies the local RapiDoc bundle into `static/vendor/`, and the build command compiles the static site.

## GitHub Pages

This repo is configured as a project site with:

- `url: https://immalloy.github.io`
- `baseUrl: /GamebananaAPI-Docs/`

If the repo name changes, update `baseUrl` in `docusaurus.config.js`.

## Contributing

Contributions are welcome through pull requests.

- Keep updates focused: endpoint docs, schema cleanup, validation notes, or site improvements.
- If you change endpoints or schemas, update `spec/openapi.yaml` and confirm the site still builds.
