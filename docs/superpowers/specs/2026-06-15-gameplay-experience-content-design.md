# Gameplay Experience Content Design

## Goal

Add two high-quality gameplay experience guides to the existing Astro guide collection:

- A city exploration and open-world play experience guide.
- A combat and progression play experience guide.

The content should help players understand how the game feels in repeated play, not only what checklist to follow. It should stay useful across patches by avoiding unverifiable exact numbers and encouraging readers to confirm live game values where needed.

## Content Scope

### City Exploration Play Experience

Create `src/content/guides/city-exploration-play-experience.mdx`.

The guide will cover:

- How to structure a city play session around teleports, phone booths, vehicles and route layers.
- What makes exploration smoother in multi-level city spaces such as rooftops, underpasses and bridge areas.
- How anomaly commissions, weather, time of day and post-task cleanup affect the feeling of exploration.
- Short-session and long-session play patterns.
- Practical mistakes that make exploration feel scattered or slow.

### Combat Growth Play Experience

Create `src/content/guides/combat-growth-play-experience.mdx`.

The guide will cover:

- How combat feel changes as characters, teams, Arc Plates, modules and skills improve.
- Why role clarity, rotation rhythm and survival comfort matter more than raw rarity for everyday play.
- How boss fights and anomaly commissions expose team weaknesses.
- How to judge whether new investment actually improves the account's play experience.
- When to stop farming temporary pieces and move resources to a more meaningful upgrade.

## Integration

Use the existing guide collection and page templates:

- Add both slugs to `guideOrder` in `src/pages/guides.astro`.
- Add category, tag and reading-time metadata in `guideMeta`.
- Add the exploration guide to the "探索战斗" group.
- Add the combat guide to the "角色养成" group.
- Add visual mappings in `src/data/guideVisuals.ts` using existing site images.
- Add English metadata and body content in `src/data/contentEnglish.ts` so English mode remains free of visible Chinese text.
- Add a bilingual homepage section that links to both new guides.

## Quality Bar

- Original long-form Chinese content, written as player-facing guidance.
- No fabricated exact drop rates, damage numbers, unreleased mechanics or unsupported patch claims.
- Practical structure with clear headings, lists and decision checks.
- Reuse existing image assets and layout conventions.
- Keep implementation limited to content, metadata and homepage placement files.
- Keep Chinese and English versions aligned in purpose, structure and practical advice.

## Verification

Run:

- `npm run build`
- `npm run verify:english-i18n`

Confirm both generated routes exist:

- `/guides/city-exploration-play-experience/`
- `/guides/combat-growth-play-experience/`

Confirm the homepage includes links to both guides in Chinese and English mode.

## Self-Review

- No TBD or TODO placeholders.
- Scope is limited to two guide pages, their listing/translation metadata and homepage placement.
- The two articles cover distinct experience areas: city exploration and combat growth.
- Patch-sensitive facts are avoided or framed as in-game verification points.
