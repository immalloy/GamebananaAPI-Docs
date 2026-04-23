---
title: Authentication Notes
description: Notes on auth-related behavior in the unofficial GameBanana API docs.
---

# Authentication Notes

Authentication behavior on GameBanana is not fully standardized in the same way that modern public APIs usually are.

## What to expect

- Some endpoints appear to be public and readable without credentials.
- Some POST routes may accept login-related or session-related fields.
- Browser cookies and site session behavior may matter for routes tied to account actions.
- Recent spec metadata shows at least `27` operations with observed `401` or `403` responses.

## Recommendation

If you are building a client:

- prefer public read-only endpoints first
- do not assume bearer-token style auth exists unless you have confirmed it
- test account-related calls in an isolated environment
- treat login or mutation endpoints as unstable until repeatedly verified

## In this repo

Auth-related routes are documented in the generated reference exactly as observed from the spec. If a route accepts parameters such as usernames, passwords, or site tokens, that will show up in the request schema for that operation.

The important distinction is that these notes are observational. An endpoint that was public during the last check is not guaranteed to stay public, and a route that returned `401` may depend on browser session state rather than a clean token flow.
