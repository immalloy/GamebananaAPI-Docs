---
title: Servers And Versions
description: Host and version notes for the observed GameBanana API surface.
---

# Servers And Versions

The spec currently tracks multiple servers:

- `https://gamebanana.com`
- `https://api.gamebanana.com`
- `https://dev.gamebanana.com`
- `https://api.dev.gamebanana.com`

## Why this matters

The same path may not behave the same way on every host. Some operations are reachable on the main site host but not on the API subdomain, and some development hosts differ again.

## Versioned routing

Many routes in this repo are grouped under versioned path prefixes like `apiv11`. Those prefixes are meaningful for navigation and compatibility, but they do not guarantee a perfectly stable vendor-maintained versioning policy.

The current spec is weighted heavily toward `apiv11`, with smaller historical clusters for `apiv10`, `apiv3`, `apiv8`, `Core`, and older generations.

## How to read the spec metadata

Many operations include custom metadata such as:

- `x-server-availability`
- `x-server-matrix-tested-at`
- `x-last-test`

These fields help explain whether an endpoint was reachable during the most recent checks and on which host.

## Practical advice

When integrating with GameBanana:

- decide which hostname you will use first
- test the exact route on that hostname
- confirm the response content type before writing a parser
- treat dev hosts as separate behavior surfaces, not guaranteed mirrors
- prefer newer version groups when an equivalent route exists
