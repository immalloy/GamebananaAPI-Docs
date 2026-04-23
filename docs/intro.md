---
slug: /
title: GameBanana API Docs
description: Unofficial public API documentation for GameBanana with guides and an embedded explorer.
---

# GameBanana API Docs

Unofficial, browsable documentation for the public GameBanana API surface.

This site replaces the old Swagger UI shell with a full docs portal:

- a searchable API explorer powered by the repo OpenAPI spec
- hand-written guides for how the API behaves in practice
- GitHub Pages deployment support
- local development with a normal Docusaurus workflow

## Current snapshot

- `411` documented paths in the current OpenAPI source
- `389` observed `GET` operations, plus mutation endpoints where they were discoverable
- `4` hosts tracked in the spec for production and development behavior
- `apiv11` as the largest documented cluster, with older route families still preserved for reference

## What this project documents

The spec in this repo tracks publicly reachable GameBanana endpoints, observed parameters, and response behavior across multiple hosts. Some routes return JSON consistently, while others may still return HTML or vary by host.

## How to use this site

Start with the guides if you want context:

- [Overview](./guides/overview)
- [Authentication notes](./guides/authentication)
- [Servers and versions](./guides/servers-and-versions)
- [Response notes](./guides/response-notes)

Then open the [API Explorer](/api) to search endpoints, inspect parameters, and browse schemas directly from the repo spec.

## Source of truth

The OpenAPI file remains the source of truth:

- `spec/openapi.yaml`

If you update the spec and run the local site, the explorer will load the updated spec automatically.
