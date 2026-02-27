# Design Judgment Kit - Website Content

This document captures the current website copy and structured content from the local Astro project.

## Shared Content (Used Across Layout Variants)

### Kit Modules

1. **Responsibilities Matrix**  
   Clarifies what designers own, protect, and monitor while AI output accelerates.
2. **Decision Rights Snapshot**  
   Defines who is accountable before polished drafts harden into default decisions.
3. **Weekly Operating Cadence**  
   Turns judgment quality into a repeatable ritual instead of rescue work.

### How to Use This Kit

1. Pick one active initiative where AI drafts are moving fast.
2. Agree on decision rights for that slice using the RACI snapshot.
3. Use the matrix to spot drift and correct it before commitments lock in.

### Common Failure Modes

- Design review happens only after tickets are scoped.
- "Looks complete" is treated as consensus.
- AI speed increases output without clear ownership.

### Workflow Stages (Flow Variant)

1. **Frame** - Name user impact, constraints, and non-negotiables before generation starts.
2. **Generate** - Use AI to expand options quickly while preserving traceable tradeoffs.
3. **Pressure-test** - Validate state coverage, accessibility, and implementation constraints early.
4. **Commit** - Confirm accountable decision owners and capture rationale for chosen direction.
5. **Audit** - Review shipped outcomes and tighten guardrails for the next cycle.

### Responsibilities Matrix

| Area | What you own | Week to week | Guardrails | Warning signs |
|---|---|---|---|---|
| Decision quality early | Make tradeoffs visible before the team commits | You're in the first working session, not the final review. You name risks, user impact, and constraints while options are still flexible. | "Looks finished" != "agreed." AI drafts trigger a tradeoff check, not an auto-approval. | You're asked to review after tickets are written or after UI is already in PR. |
| Intent + rationale | Keep the why legible | You write 3-5 bullets that explain intent, constraints, and what good means for this slice. | AI output must be paired with intent: what are we optimizing for? | People circulate screenshots without context and treat reactions as decisions. |
| Interaction quality | States, edge cases, and user trust | You cover empty/error/loading states, recovery flows, permissions, confirmations, and clear feedback. | AI often skips states. You insist on state coverage before done. | You're only asked to polish the happy path. UX debt appears after launch. |
| System coherence | Prevent drift across surfaces | You align patterns, tokens, components, and behavior rules across the product. | AI creates plausible but inconsistent patterns. You standardize before duplication spreads. | Every feature invents a new pattern because the AI suggested it. |
| Draft discipline | Keep work reversible | You label what's draft vs committed and keep batches small enough to revise without drama. | AI increases speed; you protect reversibility so fast output doesn't become the default. | Too late to change shows up early. |
| Quality bar (craft) | Define what good means beyond polish | You define a lightweight bar: clarity, consistency, accessibility, state coverage, and rationale. | AI makes polish cheap; you keep the bar anchored in usability and coherence. | Craft becomes a style debate instead of a product-quality discussion. |
| Collaboration model | Stay embedded where decisions happen | You set working agreements: when you're needed, which decisions require you, and how async reviews work. | Pairing helps but isn't required; decision timing matters more than perfect ratios. | You're treated like a service desk instead of a partner shaping direction. |
| Outcome ownership | Tie design to measurable impact | You help define success metrics and run post-ship checks (support signals, drop-offs, usability issues). | AI can inflate output volume; keep accountability anchored in outcomes. | You're accountable for polish but absent from outcome review. |
| User validation | Bring reality checks into the loop | You run lightweight tests and prototype checks before build locks in. | AI can create confidence without evidence; bring evidence back into the room. | Research is treated as optional because the AI already designed it. |
| AI literacy (practical) | Use AI as acceleration, not authority | You use AI for drafts, variants, and synthesis, then apply judgment and system constraints. | AI generates, humans validate. | You're expected to just prompt it to solve product ambiguity. |

### Decision-Rights Snapshot (RACI-Style)

| Decision type | Designer | PM | Engineering |
|---|---|---|---|
| Primary user flow + key states | A/R | C | C |
| Success criteria + tradeoff call | C | A/R | C |
| Interaction patterns / system behavior | A/R | C | C |
| Component system changes | A/R | I | C |
| AI-generated UI allowed into build | A/R (quality gate) | C | R (implementation gate) |
| Accessibility sign-off | A/R | I | R (technical compliance) |
| Post-ship UX debt prioritization | R | A | C |

## Route Content

## `/` - Review Hub

### Meta

- **Title:** Design Judgment Kit - Local Layout Review Hub
- **Description:** Local-only review hub for kit-first layout concepts. No deployment changes included.

### Navigation

- Review pack
- Local URLs
- Comparison

### Review Pack Section

- Chip: `Local review only`
- H1: `Kit-first layout exploration pack`
- Subhead: `This route is your local review hub. It links to one cleaned baseline and three additional layout concepts, all built around practical kit usage and explicitly excluding any style-guide section.`
- CTA: `Open local URLs`
- CTA: `Jump to comparison table`

### Local URLs Section

Intro: `Each concept has a dedicated route for isolated local review.`

Cards:

1. **Baseline (kit-refined)**
   - Chip: `Balanced narrative`
   - Summary: `Keeps current structure, removes style-guide content, and adds explicit kit modules.`
   - Optimizes: `Continuity with minimal IA change`
   - URL: `/layouts/baseline`
2. **Kit Workbench**
   - Chip: `Dashboard posture`
   - Summary: `Front-loads module cards and operational checklists for fast decision-oriented scanning.`
   - Optimizes: `Weekly operating usability`
   - URL: `/layouts/kit-workbench`
3. **Kit Flow**
   - Chip: `Stage-driven`
   - Summary: `Maps judgment checkpoints directly to delivery phases from frame to audit.`
   - Optimizes: `When-to-use clarity`
   - URL: `/layouts/kit-flow`
4. **Kit Ops Deck**
   - Chip: `Cadence-first`
   - Summary: `Uses a side rail and cadence deck to emphasize ongoing rituals and role accountability.`
   - Optimizes: `Operations discipline`
   - URL: `/layouts/kit-ops-deck`

### Quick Comparison Table

| Route | IA emphasis | Scanning style | Review posture |
|---|---|---|---|
| /layouts/baseline | Balanced narrative + modules | Linear | Low-change continuity check |
| /layouts/kit-workbench | Module-first dashboard | Fast scan and action | Operational usability check |
| /layouts/kit-flow | Stage-based workflow rail | Top-down by delivery phase | Timing and sequence check |
| /layouts/kit-ops-deck | Cadence + side-rail modules | Ritual-oriented | Governance and role clarity check |

Review note items:

- No route includes an irrelevant visual-guidelines section.
- All concept routes retain search, carousel, mobile nav, and responsive table/card behavior.
- No deployment workflow was changed; this is local review only.

Footer: `Generated for local concept review. Deploy decision intentionally deferred.`

## `/layouts/baseline` - Baseline (Kit-Refined)

### Meta

- **Title:** Design Judgment Kit - Baseline Layout
- **Description:** Baseline kit-first layout with shared interactions and no style-guide section.

### Navigation

- Review Hub
- Overview
- Kit Modules
- Matrix
- Decision Rights
- How to Use
- Downloads

### Overview

- Chip: `Baseline concept`
- H1: `Design Judgment Kit`
- Subhead: `Two practical tools for AI-accelerated product teams: a responsibilities matrix and a decision-rights snapshot.`
- CTA: `Open the matrix`
- CTA: `Open downloads`
- Small note: `Local review route. No deployment changes.`
- Supporting paragraph: `AI output can look "finished" before teams align on tradeoffs.`
- Supporting paragraph: `This baseline keeps the original structure but reframes the site around operational kit usage instead of visual style guidance.`

### Kit Modules

- Heading: `Kit modules`
- Intro: `Use these modules together to move from draft speed to durable decision quality.`
- Content: uses Shared Content -> Kit Modules.

### Divider Illustration

- Image: `/assets/support_draft_vs_default_header_1536x804.png`
- Alt: `Soft fog separates early drafts from committed decisions.`

### Matrix

- Heading: `Responsibilities matrix`
- Intro: `A practical view of what the designer owns, protects, and checks week to week.`
- Search placeholder: `Search responsibilities by keyword`
- Helper: `Use this as a diagnostic, not a policy document.`
- Content: uses Shared Content -> Responsibilities Matrix.

### Decision Rights

- Heading: `Decision-rights snapshot (RACI-style)`
- Context: `This reduces ambiguity when drafts move fast and look complete before tradeoffs are named.`
- Content: uses Shared Content -> Decision-Rights Snapshot (RACI-Style).

### How to Use

- Heading: `How to use this kit`
- Content: uses Shared Content -> How to Use This Kit.
- Callout heading: `Common failure modes`
- Content: uses Shared Content -> Common Failure Modes.

### Downloads

- `Matrix + RACI (PDF)` (disabled; "PDF coming soon")
- `Matrix (CSV)`
- `RACI (CSV)`

### Footer

- `Written by Mike Long.`
- `Illustrations generated with ChatGPT (OpenAI), art direction: Foggy Bloom Editorial.`
- `This baseline preserves the original narrative while centering operational kit usage.`

## `/layouts/kit-workbench` - Concept 1: Workbench

### Meta

- **Title:** Design Judgment Kit - Workbench Layout
- **Description:** A dashboard-style layout focused on kit modules and fast operating decisions.

### Navigation

- Review Hub
- Overview
- Kit at a glance
- Matrix
- Decision Rights
- Runbook
- Downloads

### Overview

- Chip: `Concept 1: Workbench`
- H1: `Kit-first operating console`
- Subhead: `This layout treats the page like a weekly operating board: module cards on top, working tables in the center, and quick rituals to keep decisions from drifting.`
- CTA: `See kit modules`
- CTA: `Open runbook`

Quick checklist:

- Start with one active initiative and assign owners.
- Run matrix checks before engineering scope locks in.
- Close the week with explicit decision callouts.

Workbench panels:

- **What this optimizes:** `Fast scanning and direct action. Teams can jump from module context to matrix rows and decision-rights without scrolling through design philosophy.`
- **Review posture:** `Best when you want to evaluate "can we run this next week?" rather than storytelling tone.`

### Kit at a Glance

- Heading: `Kit at a glance`
- Intro: `Each module is concrete and operational, designed to be used in live delivery work.`
- Content: uses Shared Content -> Kit Modules.

### Matrix

- Heading: `Responsibilities matrix`
- Intro: `Filter by keywords during planning, grooming, or review conversations.`
- Search placeholder: `Search responsibilities by keyword`
- Helper: `Use this table live in planning sessions to catch drift early.`
- Content: uses Shared Content -> Responsibilities Matrix.

### Decision Rights

- Heading: `Decision-rights snapshot`
- Context: `Keep this visible in sprint planning and release readiness reviews.`
- Content: uses Shared Content -> Decision-Rights Snapshot (RACI-Style).

### Runbook

- Heading: `Runbook`
- Content: uses Shared Content -> How to Use This Kit.
- Callout heading: `Common failure modes`
- Content: uses Shared Content -> Common Failure Modes.

### Downloads

- `Matrix + RACI (PDF)` (disabled; "PDF coming soon")
- `Matrix (CSV)`
- `RACI (CSV)`

### Footer

- `Concept focus: dense operational scanning for weekly decision quality rituals.`

## `/layouts/kit-flow` - Concept 2: Flow Rail

### Meta

- **Title:** Design Judgment Kit - Flow Layout
- **Description:** A stage-driven layout that positions kit usage directly in delivery flow.

### Navigation

- Review Hub
- Overview
- Workflow
- Matrix
- Decision Rights
- Runbook
- Downloads

### Overview

- Chip: `Concept 2: Flow rail`
- H1: `Map judgment to delivery stages`
- Subhead: `This concept prioritizes when decisions happen. It highlights where each kit module should be invoked from framing through audit.`
- CTA: `View flow stages`
- CTA: `Open matrix`

### Workflow Rail

- Heading: `Workflow rail`
- Intro: `Frame -> Generate -> Pressure-test -> Commit -> Audit`
- Stage content: uses Shared Content -> Workflow Stages.
- Supporting labels:
  - Matrix guardrails
  - Decision-rights callouts
  - Weekly checkpoints
  - Risk notes
  - Outcome audit

### Matrix

- Heading: `Responsibilities matrix`
- Intro: `Filter rows by stage-specific concerns to support flow checkpoints.`
- Search placeholder: `Search responsibilities by keyword`
- Content: uses Shared Content -> Responsibilities Matrix.

### Decision Rights

- Heading: `Decision-rights snapshot`
- Context: `Tie role accountability directly to each stage transition in the flow rail.`
- Content: uses Shared Content -> Decision-Rights Snapshot (RACI-Style).

### Runbook

- Heading: `Runbook`
- Content: uses Shared Content -> How to Use This Kit.
- Callout heading: `Common failure modes`
- Content: uses Shared Content -> Common Failure Modes.

### Downloads

- `Matrix + RACI (PDF)` (disabled; "PDF coming soon")
- `Matrix (CSV)`
- `RACI (CSV)`

### Footer

- `Concept focus: stage-based orchestration of judgment signals through delivery flow.`

## `/layouts/kit-ops-deck` - Concept 3: Ops Deck (Final Variant)

### Meta

- **Title:** Design Judgment Kit - Ops Deck Layout
- **Description:** An operations-deck layout focused on cadence, checkpoints, and explicit decision calls.

### Navigation

- Review Hub
- Overview
- Kit at a glance
- Matrix
- Decision Rights
- Runbook
- Downloads

### Overview (Hero Overlay)

- Hero image: `/assets/ownership_visible_v4_header_tight_1536x804.png`
- Hero alt: `A small group shares a lantern in fog, lighting a clear path while other lanterns drift unattended.`
- Chip: `Concept 3: Ops deck`
- H1: `Operational cadence and decision control`
- Subhead: `This concept puts weekly cadence first: side rail for modules, center column for active checkpoints, and full matrix + RACI references below.`
- Actions removed in final variant: `Open cadence deck`, `Open matrix`

### Kit at a Glance

- Heading: `Kit at a glance`
- Intro: `Each module is concrete and operational, designed to be used in live delivery work.`
- Content: uses Shared Content -> Kit Modules.

### Matrix

- Heading: `Responsibilities matrix`
- Search placeholder: `Search responsibilities by keyword`
- Content: uses Shared Content -> Responsibilities Matrix.

### Decision Rights

- Heading: `Decision-rights snapshot`
- Context: `Use this table as the live accountability map for each weekly checkpoint.`
- Content: uses Shared Content -> Decision-Rights Snapshot (RACI-Style).

### Runbook

- Heading: `Runbook`
- Content: uses Shared Content -> How to Use This Kit.
- Callout heading: `Common failure modes`
- Content: uses Shared Content -> Common Failure Modes.

### Downloads

- `Matrix + RACI (PDF)` (disabled; "PDF coming soon")
- `Matrix (CSV)`
- `RACI (CSV)`

### Footer

- `Concept focus: operational rhythm, role clarity, and repeatable decision checkpoints.`
