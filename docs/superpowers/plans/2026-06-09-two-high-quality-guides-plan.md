# Two High Quality Guides Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two long-form guide pages covering shop/resource exchange decisions and Arc Plate/Module sub-stat progression.

**Architecture:** Use the existing Astro MDX `guides` collection. Add two MDX files, then expose them through the guide ordering, category metadata, grouped guide cards, and shared guide visuals mapping.

**Tech Stack:** Astro 4, MDX content collections, Tailwind CSS, existing guide renderer.

---

### Task 1: Add MDX Guides

**Files:**
- Create: `src/content/guides/shop-exchange-priority.mdx`
- Create: `src/content/guides/arc-module-substats.mdx`

- [ ] Add complete frontmatter with `title`, `description`, and `updatedAt`.
- [ ] Write player-facing, original long-form Chinese guide content.
- [ ] Avoid unverifiable exact numbers and tell readers to confirm live patch values in game.

### Task 2: Add Guide Listing Metadata

**Files:**
- Modify: `src/pages/guides.astro`
- Modify: `src/data/guideVisuals.ts`

- [ ] Insert the new slugs into `guideOrder`.
- [ ] Add category, tag, and reading-time metadata.
- [ ] Add the two guides to the most relevant guide groups.
- [ ] Assign existing site images as guide card and detail-page visuals.

### Task 3: Verify

**Files:**
- Generated: `dist`

- [ ] Run `npm run build`.
- [ ] Confirm `/guides/shop-exchange-priority/` and `/guides/arc-module-substats/` are generated.
- [ ] Check local links and image references in generated HTML.
