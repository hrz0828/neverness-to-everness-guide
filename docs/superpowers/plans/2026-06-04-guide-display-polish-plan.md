# Guide Display Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the guide listing and guide detail reading experience with player-facing descriptions, grouped guide cards, and better text wrapping.

**Architecture:** Keep the existing Astro content collection and renderer. Add local guide metadata in `src/pages/guides.astro` for grouping and card labels, refine detail-page markup in `src/pages/guides/[slug].astro`, and tune shared article typography in `src/styles/global.css`.

**Tech Stack:** Astro 4, MDX content collections, Tailwind CSS utilities.

---

### Task 1: Rewrite guide descriptions

**Files:**
- Modify: `src/content/guides/*.mdx`

- [ ] Replace generic descriptions with player-facing summaries that describe the in-game problem each guide solves.
- [ ] Keep descriptions concise enough for guide cards and SEO snippets.

### Task 2: Rework guide listing layout

**Files:**
- Modify: `src/pages/guides.astro`

- [ ] Add category metadata for guide groups.
- [ ] Replace the long status list with grouped guide cards.
- [ ] Use line clamping and constrained widths for predictable wrapping.

### Task 3: Improve guide detail reading

**Files:**
- Modify: `src/pages/guides/[slug].astro`
- Modify: `src/styles/global.css`

- [ ] Tighten header copy width and line-height.
- [ ] Reduce heavy list-card styling in long MDX articles.
- [ ] Add wrapping controls for Chinese/English mixed text and long tokens.

### Task 4: Verify

**Files:**
- Generated: `dist`

- [ ] Run `npm run build`.
- [ ] Check `/guides/`, `/guides/character-tier-list/`, and `/guides/exploration-checklist/` in desktop and mobile viewports.
