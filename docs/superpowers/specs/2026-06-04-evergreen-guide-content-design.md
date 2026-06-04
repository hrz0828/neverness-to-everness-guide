# Evergreen Guide Content Design

## Goal

Add a complete set of long-lived guide pages that answer common player decisions without relying on unverified current-version numbers.

## Scope

Create ten MDX guide pages:

- Character priority and tier-list guidance.
- Team template library.
- Growth material and stamina route.
- Banner analysis framework.
- Boss and high-pressure combat guide.
- Exploration completion checklist.
- Core systems overview.
- First 30 days route.
- FAQ.
- Version review checklist.

## Content Rules

Pages should be useful as evergreen strategy content. They may reference existing site character names and current site concepts, but should avoid exact live values, hidden point coordinates, or current banner claims unless already represented in local content. When a topic depends on patches or official announcements, the page should explicitly tell the reader to verify in game.

## Site Integration

Use the existing `guides` content collection and the current `src/pages/guides/[slug].astro` renderer. Update the guide listing order in `src/pages/guides.astro` so the new pages are discoverable. Do not change deployment, AdSense, sitemap, or build scripts.

## Verification

Run `npm run build` after editing. The expected result is a successful Astro build with the new guide routes generated.
