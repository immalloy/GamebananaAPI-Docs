---
title: Response Notes
description: Notes on mixed response types and unofficial behavior in the GameBanana API.
---

# Response Notes

The GameBanana API surface is not uniformly JSON-first.

## Common patterns

- some routes return `application/json`
- some routes return `text/html`
- some routes expose object-like payloads with broad or partially known shapes

## Why the schemas are broad

A number of operations in the spec use permissive schemas such as:

```yaml
type: object
additionalProperties: true
```

That is intentional. It keeps the reference honest when the exact payload shape is not yet fully normalized.

## Suggested workflow for contributors

When improving an endpoint:

1. confirm the live response and content type
2. narrow the schema only when the shape is well understood
3. keep custom observation metadata up to date
4. note host-specific differences when they exist
