# Judgment Kit Platform

**Judgment Kit** is a platform of practical operating kits that help AI-accelerated product teams preserve **decision quality, accountability, and product coherence** when output becomes cheap and finished-looking.

- **Canonical platform:** https://judgmentkit.design
- **Primary audience:** design leaders, with cross-functional relevance for PM and engineering
- **Core thesis:** *AI accelerates drafts; judgment prevents drafts becoming defaults.*

## Vision

AI changes the pace of production work. The common failure pattern is no longer that teams cannot generate enough options. It is that:

- polished drafts get treated as consensus,
- output volume increases without clear ownership,
- teams ship polish faster than they ship judgment.

Judgment Kit turns judgment into a repeatable operating system:

- responsibilities are explicit,
- decision rights are explicit,
- cadence is explicit.

### Non-goals

Judgment Kit is not:

- a tool directory or prompt library,
- vendor-specific guidance,
- an essay on design philosophy.

It is a kit library meant to be used in live delivery work.

## What ships in a kit

Every kit follows the **Kit Contract**:

1. **Responsibilities Matrix**
   Clarifies what the role owns, protects, and monitors while AI output accelerates.
2. **Decision Rights Snapshot (RACI-style)**
   Defines who is accountable before polished drafts harden into default decisions.
3. **Weekly Operating Cadence**
   Turns judgment quality into a repeatable ritual instead of rescue work.

Each kit also includes:

- a short 3-step “How to use this kit” runbook,
- explicit common failure modes,
- an optional stage-driven flow variant.

## Current kits

### Design Judgment Kit

**Subtitle:** Product design responsibilities + decision rights for AI-accelerated teams.

**Module deep links**

- `/kits/design-judgment/responsibilities-matrix`
- `/kits/design-judgment/decision-rights`
- `/kits/design-judgment/weekly-cadence`

## Information architecture

- `/` platform homepage
- `/kits` kit library
- `/kits/<kit-slug>` kit landing page
- `/kits/<kit-slug>/<module-slug>` module deep link

Canonical module slugs:

- `responsibilities-matrix`
- `decision-rights`
- `weekly-cadence`

## Domain strategy

We run one canonical, indexable domain and treat the `.com` domains as redirect-only catchers.

### Domains

- `judgmentkit.design` canonical platform
- `judgmentkit.com` redirect-only catcher
- `judgementkit.com` redirect-only catcher

### Rules

- Only `judgmentkit.design` serves content.
- `.com` domains permanently redirect to canonical in one hop.
- Redirects preserve path and query.
- `www.judgmentkit.design` redirects to apex.
- Canonical tags, sitemap entries, and OG metadata reference only `judgmentkit.design`.

### Verification

```bash
curl -I https://judgmentkit.com/kits/design-judgment
curl -I https://judgementkit.com/kits/design-judgment/decision-rights
curl -I https://www.judgmentkit.design/
```

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

## Review routes

The repo still includes non-canonical layout exploration routes for internal review:

- `/review`
- `/layouts/baseline`
- `/layouts/kit-workbench`
- `/layouts/kit-flow`
- `/layouts/kit-ops-deck`

These routes are intentionally marked `noindex` and are excluded from canonical platform navigation and the sitemap.

## Content model

Kits are defined in a shared typed content source and generate static routes. Adding a new kit should be a content operation, not a routing rewrite.

Each kit definition includes:

- `slug`
- `title`
- `subtitle`
- `summary`
- `audience`
- `coreThesis`
- `modules`
- `howToUse`
- `failureModes`
- optional `flowStages`
- optional `credits`
- optional art-direction metadata

## Downloads

Current downloadable assets:

- `/downloads/matrix.csv`
- `/downloads/raci.csv`

PDF export remains optional and is not implemented yet.

## Content guidelines

- Use **judgment** spelling in user-facing copy.
- Keep tone operational: responsibilities, decision rights, quality gates, cadence.
- Avoid vendor/tool framing. The platform is about judgment, not tooling.
- Treat AI output as draft until decision rights are explicit, state coverage is pressure-tested, and rationale is captured for the committed direction.

## Credits

- Written by Mike Long.
- Illustrations generated with ChatGPT (OpenAI), art direction: Foggy Bloom Editorial.
