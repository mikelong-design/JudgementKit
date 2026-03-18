# Judgment Kit Platform

**Judgment Kit** is a platform of practical operating kits for AI-accelerated product teams that protect decision quality, accountability, and product coherence when output becomes cheap and finished-looking.

**Primary audience:** design leaders, with direct relevance for PM and engineering partners.  
**Core thesis:** *AI accelerates drafts; judgment prevents drafts becoming defaults.*

This repository contains the Astro site and structured kit content that powers [judgmentkit.design](https://judgmentkit.design). It is the source for the public platform, the current design-judgment kit, and the review-only layout routes used to refine the site.

## Purpose

Judgment Kit exists to make judgment operational when AI increases output faster than teams increase clarity.

The common failure pattern is no longer that teams cannot generate enough options. It is that polished drafts get treated as consensus, ownership stays implicit, and teams ship polish faster than they ship judgment.

Judgment Kit turns judgment into a repeatable operating system by making three things explicit:

- responsibilities,
- decision rights,
- weekly cadence.

## What ships in a kit

Every kit follows the same contract:

1. **Responsibilities Matrix**  
   Clarifies what a role owns, protects, and monitors while AI output accelerates.
2. **Decision Rights Snapshot**  
   Defines who is accountable before polished drafts harden into default decisions.
3. **Weekly Operating Cadence**  
   Turns judgment quality into a repeatable ritual instead of rescue work.

Each kit also includes a short runbook, explicit failure modes, and an optional stage-based flow variant.

## Current kit

### Design Judgment Kit

Product design responsibilities and decision rights for AI-accelerated teams.

- Audience: design leaders, with working relevance for PM and engineering
- Thesis: *AI accelerates drafts; judgment prevents drafts becoming defaults.*
- Core outcome: make responsibilities, decision rights, and weekly operating cadence explicit before polished drafts become default direction

Current module deep links:

- `/kits/design-judgment/responsibilities-matrix`
- `/kits/design-judgment/decision-rights`
- `/kits/design-judgment/weekly-cadence`

## About this repo

This repo is the website codebase for the Judgment Kit platform. It currently includes:

- the public platform homepage and `/kits` library routes,
- the typed kit content model in [`src/lib/kits.ts`](/Users/mike/JudgementKit/src/lib/kits.ts),
- static data sources for the matrix, decision-rights snapshot, and weekly cadence,
- downloadable CSV assets generated at build time,
- internal review routes for layout exploration.

The platform is intentionally not a prompt library, vendor directory, or design-philosophy essay. The site is meant to be useful in live delivery work.

## Local development

### Prereqs

- Node.js
- pnpm

### Install

```bash
pnpm install
```

### Run dev

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

### Type/content check

```bash
pnpm check
```

## Information architecture

The public site is organized as a small kit platform:

- `/` platform homepage
- `/kits` kit library
- `/kits/<kit-slug>` kit landing page
- `/kits/<kit-slug>/<module-slug>` module deep link

Canonical module slugs are:

- `responsibilities-matrix`
- `decision-rights`
- `weekly-cadence`

## Content model

Kits are defined in shared typed content so new kits can be added as content work instead of route rewrites. Each kit definition includes the core platform fields for title, audience, thesis, modules, runbook content, failure modes, and optional flow/credit metadata.

## Downloads

Current downloadable assets:

- `/downloads/matrix.csv`
- `/downloads/raci.csv`

PDF export is planned but not implemented yet.

## Domain and deployment notes

- Canonical platform: [judgmentkit.design](https://judgmentkit.design)
- Redirect-only catcher domains: `designjudgmentkit.com`, `judgmentkit.com`, and `judgementkit.com`
- `www.judgmentkit.design` redirects to the apex domain
- `www.designjudgmentkit.com` redirects to the apex canonical domain when attached
- Canonical tags, sitemap entries, and OG metadata should reference only `judgmentkit.design`

Verification examples:

```bash
curl -I https://judgmentkit.com/kits/design-judgment
curl -I https://judgementkit.com/kits/design-judgment/decision-rights
curl -I "https://designjudgmentkit.com/kits/design-judgment/decision-rights?ref=test"
curl -I https://www.judgmentkit.design/
```

## Review routes

The repo includes non-canonical layout exploration routes for internal review:

- `/review`
- `/layouts/baseline`
- `/layouts/kit-workbench`
- `/layouts/kit-flow`
- `/layouts/kit-ops-deck`

These routes are intentionally marked `noindex` and excluded from canonical platform navigation and the sitemap.

## Content guidelines

- Use **judgment** spelling in user-facing copy.
- Keep the tone operational: responsibilities, decision rights, quality gates, cadence.
- Avoid vendor/tool framing. The platform is about judgment, not tooling.
- Treat AI output as draft until decision rights are explicit, state coverage is pressure-tested, and rationale is captured for the committed direction.

## Credits

- Written by Mike Long.
- Illustrations generated with ChatGPT (OpenAI), art direction: Foggy Bloom Editorial.
