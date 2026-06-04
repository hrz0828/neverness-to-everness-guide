# Evergreen Guide Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ten evergreen guide pages and expose them from the guides index.

**Architecture:** Use the existing Astro content collection. Each new page is a standalone MDX file under `src/content/guides`, rendered by the existing dynamic guide page. The guides index gets only an ordering update.

**Tech Stack:** Astro 4, MDX content collections, Tailwind-rendered existing layouts.

---

### Task 1: Add Evergreen Guide MDX Files

**Files:**
- Create: `src/content/guides/character-tier-list.mdx`
- Create: `src/content/guides/team-comps.mdx`
- Create: `src/content/guides/growth-material-route.mdx`
- Create: `src/content/guides/banner-analysis-framework.mdx`
- Create: `src/content/guides/boss-combat-guide.mdx`
- Create: `src/content/guides/exploration-checklist.mdx`
- Create: `src/content/guides/systems-overview.mdx`
- Create: `src/content/guides/first-30-days-route.mdx`
- Create: `src/content/guides/faq.mdx`
- Create: `src/content/guides/version-review-checklist.mdx`

- [ ] Write each MDX file with `title`, `description`, and `updatedAt`.
- [ ] Keep content evergreen and mark version-dependent advice clearly.
- [ ] Use `##` sections consistent with existing guide files.

### Task 2: Update Guide Listing Order

**Files:**
- Modify: `src/pages/guides.astro`

- [ ] Add the ten new slugs to `guideOrder`.
- [ ] Put decision-entry pages first: tier list, team comps, growth route, banner framework.
- [ ] Keep existing guides discoverable after the new high-level entries.

### Task 3: Verify

**Files:**
- Generated: `dist`

- [ ] Run `npm run build`.
- [ ] Confirm Astro generates the new `/guides/<slug>/` pages.
- [ ] If the build fails, fix content frontmatter or MDX syntax and rerun.
