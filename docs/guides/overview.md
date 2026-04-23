---
title: Overview
description: What this repo covers and how the GameBanana API docs are structured.
---

# Overview

This repo documents the public GameBanana API surface as it is observed in the wild, not as an official vendor-published contract.

## What makes this API unusual

- Multiple hostnames appear to serve overlapping API routes.
- Endpoint behavior is not always uniform across hosts.
- Some endpoints return JSON, while others still return HTML or mixed content types.
- Versioned routes such as `apiv11` coexist with older or differently routed behavior.

## What the spec captures

For each documented operation, the spec may include:

- observed query parameters
- observed response status codes
- test metadata such as `x-last-test`
- server availability metadata such as `x-server-availability`
- review timestamps for manual verification

## What the generated reference is good for

The generated API pages are best used for:

- finding endpoint paths quickly
- checking known parameters
- reviewing summary descriptions and tags
- comparing host compatibility notes

## What still requires caution

Because this is unofficial documentation, treat any endpoint contract as observed behavior, not a guaranteed vendor promise. If you rely on a route in production, test it against the host you actually intend to call.
