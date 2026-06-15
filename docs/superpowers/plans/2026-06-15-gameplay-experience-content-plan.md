# Gameplay Experience Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two long-form gameplay experience guide pages covering city exploration and combat growth.

**Architecture:** Use the existing Astro MDX `guides` collection. Add two guide files, expose them through the guide listing metadata, grouped cards and homepage, map them to existing images, and add English-mode fallback content through the existing `guideEnglish` data object.

**Tech Stack:** Astro 4, MDX content collections, TypeScript data modules, existing Tailwind-based templates.

---

### Task 1: Add Chinese MDX Guide Content

**Files:**
- Create: `src/content/guides/city-exploration-play-experience.mdx`
- Create: `src/content/guides/combat-growth-play-experience.mdx`

- [ ] Create `city-exploration-play-experience.mdx` with frontmatter:

```md
---
title: 城市探索游玩体验：跑图、载具、异象与短时上线节奏
description: 从电话亭、载具、屋顶桥下分层、异象委托和日常路线整理异环城市探索的实际游玩体验。
updatedAt: "2026-06-15"
---
```

- [ ] Write original Chinese sections covering: session rhythm, teleports and phone booths, vehicles, vertical route layers, anomaly atmosphere, short-session priorities, and common pacing mistakes.

- [ ] Create `combat-growth-play-experience.mdx` with frontmatter:

```md
---
title: 战斗与养成游玩体验：角色手感、配队循环与资源投入反馈
description: 从角色职责、技能循环、BOSS压力、弧盘词条和养成停手线分析异环战斗体验如何变顺。
updatedAt: "2026-06-15"
---
```

- [ ] Write original Chinese sections covering: role clarity, rotation feel, survival comfort, boss and anomaly pressure, Arc Plate/module investment, upgrade feedback checks, and resource stop lines.

### Task 2: Wire Guides Into Listing Metadata

**Files:**
- Modify: `src/pages/guides.astro`

- [ ] Add both slugs to `guideOrder`, placing `combat-growth-play-experience` near character growth guides and `city-exploration-play-experience` near exploration combat guides.

- [ ] Add guide metadata:

```ts
"combat-growth-play-experience": { category: "角色养成", tag: "体验", time: "8 分钟" },
"city-exploration-play-experience": { category: "探索战斗", tag: "体验", time: "8 分钟" },
```

- [ ] Add `combat-growth-play-experience` to the "角色养成" group.

- [ ] Add `city-exploration-play-experience` to the "探索战斗" group.

### Task 3: Add Visual Mappings

**Files:**
- Modify: `src/data/guideVisuals.ts`

- [ ] Add mapping for `combat-growth-play-experience`:

```ts
"combat-growth-play-experience": {
  image: "/images/news/city-gameplay.jpg",
  alt: "异环城市战斗与角色养成体验参考画面",
  source: "站内素材"
},
```

- [ ] Add mapping for `city-exploration-play-experience`:

```ts
"city-exploration-play-experience": {
  image: "/images/news/area-illusion-town.jpg",
  alt: "异环城市探索、异象与街区游玩体验参考画面",
  source: "站内素材"
},
```

### Task 4: Add English-Mode Content

**Files:**
- Modify: `src/data/contentEnglish.ts`

- [ ] Add `combat-growth-play-experience` to `guideEnglish` with English `title`, `description`, `category`, `tag`, `time`, and `body` HTML.

- [ ] Add `city-exploration-play-experience` to `guideEnglish` with English `title`, `description`, `category`, `tag`, `time`, and `body` HTML.

- [ ] Keep the English body free of visible Chinese text so `npm run verify:english-i18n` continues to pass.

### Task 5: Add Homepage Placement

**Files:**
- Modify: `src/pages/index.astro`

- [ ] Add a bilingual homepage section linking to both new guides.

- [ ] Keep Chinese text inside `.lang-zh` and English text inside `.lang-en` so language switching remains clean.

- [ ] Use existing card and grid styling patterns from the homepage.

### Task 6: Verify Build and Routes

**Files:**
- Generated: `dist`

- [ ] Run `npm run build`.

Expected: build completes successfully and generates:

```text
dist/guides/city-exploration-play-experience/index.html
dist/guides/combat-growth-play-experience/index.html
```

- [ ] Run `npm run verify:english-i18n`.

Expected:

```text
No visible Chinese text detected in English mode
```

- [ ] If either command fails, fix the reported file and rerun the same command.

## Self-Review

- Spec coverage: both planned articles, guide listing metadata, visual mappings, homepage placement, English-mode content and verification are covered.
- Placeholder scan: no TODO, TBD or "fill later" steps remain.
- Type consistency: slugs are identical across MDX filenames, `guideOrder`, `guideMeta`, guide groups, `guideVisuals`, and `guideEnglish`.
