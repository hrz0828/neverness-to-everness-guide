# AdSense Content Quality Design

Date: 2026-06-02
Project: Neverness to Everness Chinese guide site

## Goal

Improve the site so it better satisfies Google publisher expectations for original, useful content and a clear user experience. The implementation should reduce the risk of rejection for insufficient content, thin pages, weak navigation, duplicate content, or unclear privacy and advertising disclosures.

This work does not guarantee AdSense approval. Google makes the final review decision.

## Policy Inputs

The design is based on the user-provided Google resources:

- AdSense minimum content and publisher policies.
- AdSense guidance for unique content and user experience.
- Google Search guidance about thin content with little or no added value.
- Google Publisher policy guidance requiring compliance with Google Search spam policies.

The practical site requirements are:

- Pages must provide enough original, useful text for Google and users to understand the site topic.
- Content should give users a reason to visit and return, not only repeat public summaries.
- Navigation should make important content easy to find.
- The site should avoid copied, scraped, doorway, keyword-stuffed, or repeated content.
- Privacy, ad, cookie, editorial, copyright, and contact information should be visible and specific.

## Current Findings

The site already has a solid Astro structure and several compliance pages:

- Main pages: home, characters, explore, guides, news, search, tool.
- Policy pages: about, contact, privacy, disclaimer, editorial policy.
- Content collections: characters, maps, guides, updates.
- News articles include structured guide sections.

The main risks are:

- `src/content/guides/beginner.mdx` is very short and can be seen as thin.
- Map MDX files are also short, and `/explore/` mainly renders frontmatter arrays rather than full article-style content.
- `/guides/` has useful sections but still reads more like a landing page than a deep guide hub.
- Some core pages lack visible "last updated", author, source, and revision context.
- Internal links from guide hubs to related character, map, news, and policy content can be stronger.
- Sitemap does not include individual guide or map article pages because those pages do not exist yet.

## Recommended Approach

Use a complete content-quality pass:

1. Add deep guide pages.
2. Expand thin MDX content.
3. Improve guide and explore hub pages.
4. Strengthen internal links and metadata.
5. Tighten privacy, editorial, copyright, and advertising disclosures.
6. Verify the static build and generated sitemap.

## Scope

### New Pages

Create individual guide detail pages:

- `/guides/beginner/` for beginner resource planning.

Create individual map detail pages:

- `/explore/skytower-route/`
- `/explore/new-herland/`
- `/explore/district-a/`
- `/explore/ekorai-town/`
- `/explore/bridge-crossings/`

These pages should render the MDX body, frontmatter metadata, route steps, checklists, event notes, warnings, update date, and related links.

### Expanded Content

Expand these content files with practical, original guide material:

- `src/content/guides/beginner.mdx`
- `src/content/maps/skytower-route.mdx`
- `src/content/maps/new-herland.mdx`
- `src/content/maps/district-a.mdx`
- `src/content/maps/ekorai-town.mdx`
- `src/content/maps/bridge-crossings.mdx`

Each expanded article should include:

- Clear purpose and audience.
- Step-by-step advice.
- Mistakes to avoid.
- Practical prioritization.
- Update-sensitive caveats.
- Internal links where useful.

### Hub Improvements

Update `/guides/` to:

- Link to `/guides/beginner/`.
- Explain the guide categories.
- Show last updated information.
- Add more context around daily route, resource planning, and progression.

Update `/explore/` to:

- Link each map card to its detail page.
- Add clearer route summaries and page-level update signals.
- Preserve the existing visual layout.

Update home and article pages only where needed for internal links and navigation clarity.

### Compliance Improvements

Update policy and trust pages:

- Privacy: make Google AdSense, cookies, ad personalization, local storage, analytics-like technical data, and opt-out choices clearer.
- Editorial policy: add review cadence, correction workflow, source handling, AI/automation disclosure if relevant, and ad independence.
- Disclaimer: clarify fan-site status, game asset ownership, accuracy limits, and no official affiliation.
- About/contact: reinforce who maintains the site, what content is provided, and how users can request corrections or copyright handling.

### Metadata And Sitemap

Update sitemap generation to include:

- Static pages.
- Character pages.
- News pages.
- New guide detail pages.
- New explore detail pages.

Where appropriate, include `dateModified`, `author`, `publisher`, and article schema data.

## Non-Goals

- Do not add deceptive keyword blocks.
- Do not create doorway pages or near-duplicate pages.
- Do not copy Google policy text into the site.
- Do not add fake reviews, fake credentials, or unverifiable claims.
- Do not guarantee Google AdSense approval.
- Do not change deployment configuration unless the build requires it.

## Testing And Verification

Run:

- `npm run build`

Check:

- The build exits with code 0.
- New guide and explore pages are generated.
- Sitemap includes new URLs.
- No obvious broken internal links in edited templates.
- Policy pages still render.

## Acceptance Criteria

- Thin guide/map content is expanded into useful article content.
- `/guides/` and `/explore/` provide clear links to deeper pages.
- New detail pages render content and metadata correctly.
- Privacy, editorial, disclaimer, about, and contact pages provide clearer trust and compliance information.
- Sitemap includes the new content pages.
- Static build completes successfully.
