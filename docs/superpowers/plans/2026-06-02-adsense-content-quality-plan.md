# AdSense Content Quality Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the Astro guide site with deeper guide/map content, indexable detail pages, stronger internal navigation, clearer policy pages, and sitemap coverage for AdSense readiness.

**Architecture:** Add Astro dynamic routes for guide and explore collection entries, expand existing MDX bodies, and update hub pages to link into those detail pages. Add a small Node verification script that builds the site and asserts generated HTML/sitemap content exists.

**Tech Stack:** Astro 4, MDX content collections, TypeScript, Node.js, npm build, Pagefind.

---

## File Structure

- Create `scripts/verify-adsense-content.mjs`: post-build verification for generated pages, sitemap URLs, and required compliance text.
- Create `src/pages/guides/[slug].astro`: renders individual guide collection entries such as `/guides/beginner/`.
- Create `src/pages/explore/[slug].astro`: renders individual map collection entries such as `/explore/skytower-route/`.
- Modify `src/content/guides/beginner.mdx`: expand thin beginner content into a full guide.
- Modify `src/content/maps/*.mdx`: expand each map route article with original practical content.
- Modify `src/pages/guides.astro`: link to guide details and add richer guide hub context.
- Modify `src/pages/explore.astro`: link map cards to detail pages and show updated metadata.
- Modify `src/pages/sitemap.xml.ts`: include guide and map detail pages.
- Modify `src/pages/privacy.astro`, `src/pages/editorial-policy.astro`, `src/pages/disclaimer.astro`, `src/pages/about.astro`, `src/pages/contact.astro`: strengthen trust and compliance disclosures.
- Modify `src/pages/index.astro` where needed to add stronger internal links to guide/explore hubs.

## Task 1: Add Failing Verification Script

**Files:**
- Create: `scripts/verify-adsense-content.mjs`
- Modify: `package.json`

- [ ] **Step 1: Create the verification script**

Create `scripts/verify-adsense-content.mjs`:

```js
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const requiredFiles = [
  "dist/guides/beginner/index.html",
  "dist/explore/skytower-route/index.html",
  "dist/explore/new-herland/index.html",
  "dist/explore/district-a/index.html",
  "dist/explore/ekorai-town/index.html",
  "dist/explore/bridge-crossings/index.html",
  "dist/sitemap.xml"
];

const requiredText = [
  ["dist/guides/beginner/index.html", "开荒资源规划"],
  ["dist/guides/beginner/index.html", "每日优先级"],
  ["dist/explore/skytower-route/index.html", "最后更新"],
  ["dist/explore/new-herland/index.html", "路线重点"],
  ["dist/privacy/index.html", "Google AdSense"],
  ["dist/editorial-policy/index.html", "修订记录"],
  ["dist/disclaimer/index.html", "非官方网站"],
  ["dist/sitemap.xml", "/guides/beginner/"],
  ["dist/sitemap.xml", "/explore/skytower-route/"],
  ["dist/sitemap.xml", "/explore/bridge-crossings/"]
];

let failures = 0;

for (const file of requiredFiles) {
  const path = join(root, file);
  if (!existsSync(path)) {
    console.error(`Missing generated file: ${file}`);
    failures += 1;
  }
}

for (const [file, text] of requiredText) {
  const path = join(root, file);
  if (!existsSync(path)) {
    continue;
  }
  const content = readFileSync(path, "utf8");
  if (!content.includes(text)) {
    console.error(`Missing text in ${file}: ${text}`);
    failures += 1;
  }
}

if (failures > 0) {
  console.error(`AdSense content verification failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log("AdSense content verification passed.");
```

- [ ] **Step 2: Add npm script**

Modify `package.json` scripts:

```json
"verify:adsense-content": "node scripts/verify-adsense-content.mjs"
```

- [ ] **Step 3: Verify RED**

Run:

```bash
npm run build
npm run verify:adsense-content
```

Expected: `npm run verify:adsense-content` fails because `/guides/beginner/` and `/explore/*/` detail pages are not generated yet.

- [ ] **Step 4: Commit**

```bash
git add package.json scripts/verify-adsense-content.mjs
git commit -m "test: add AdSense content verification"
```

## Task 2: Add Guide Detail Route And Expand Beginner Guide

**Files:**
- Create: `src/pages/guides/[slug].astro`
- Modify: `src/content/guides/beginner.mdx`
- Modify: `src/pages/guides.astro`

- [ ] **Step 1: Create guide detail route**

Create `src/pages/guides/[slug].astro` to render `getCollection("guides")`, with title, description, updated date, MDX body, and links back to `/guides/`, `/explore/`, and `/tools/gacha-calculator/`.

- [ ] **Step 2: Expand beginner guide**

Replace the short body in `src/content/guides/beginner.mdx` with sections containing these exact headings:

```md
## 开荒资源规划
## 每日优先级
## 体力使用顺序
## 抽卡与养成取舍
## 常见误区
## 版本更新后如何复查
```

Each section should contain practical, original Chinese guide text, not copied policy text.

- [ ] **Step 3: Update guides hub**

Update `src/pages/guides.astro` so the guide card links to `/guides/beginner/`, displays `updatedAt`, and adds visible context around resource planning, daily route, and progression.

- [ ] **Step 4: Run GREEN check for guide route**

Run:

```bash
npm run build
npm run verify:adsense-content
```

Expected: verification still fails because explore detail pages and policy text are not complete, but `dist/guides/beginner/index.html` exists and contains `开荒资源规划` and `每日优先级`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/guides/[slug].astro src/content/guides/beginner.mdx src/pages/guides.astro
git commit -m "feat: add expanded beginner guide page"
```

## Task 3: Add Explore Detail Route And Expand Map Content

**Files:**
- Create: `src/pages/explore/[slug].astro`
- Modify: `src/content/maps/skytower-route.mdx`
- Modify: `src/content/maps/new-herland.mdx`
- Modify: `src/content/maps/district-a.mdx`
- Modify: `src/content/maps/ekorai-town.mdx`
- Modify: `src/content/maps/bridge-crossings.mdx`
- Modify: `src/pages/explore.astro`

- [ ] **Step 1: Create explore detail route**

Create `src/pages/explore/[slug].astro` to render each map entry with cover image, region, priority, route list, checklist, events, warnings, updated date, MDX body, and related links.

- [ ] **Step 2: Expand each map MDX**

For every file in `src/content/maps/*.mdx`, keep existing frontmatter and expand the body with these headings:

```md
## 路线重点
## 推荐清理顺序
## 容易遗漏的位置
## 异象与战斗准备
## 补漏检查
```

Tailor the text to the specific region named in the frontmatter.

- [ ] **Step 3: Update explore hub links**

Update `src/pages/explore.astro` so every map card links to `/explore/${m.slug}/`, shows the entry `updatedAt`, and keeps the existing route/checklist preview.

- [ ] **Step 4: Run GREEN check for explore route**

Run:

```bash
npm run build
npm run verify:adsense-content
```

Expected: verification still fails if sitemap or policy text is incomplete, but all `dist/explore/*/index.html` files exist and contain `最后更新` plus region article content.

- [ ] **Step 5: Commit**

```bash
git add src/pages/explore/[slug].astro src/content/maps src/pages/explore.astro
git commit -m "feat: add expanded explore route pages"
```

## Task 4: Strengthen Policy And Trust Pages

**Files:**
- Modify: `src/pages/privacy.astro`
- Modify: `src/pages/editorial-policy.astro`
- Modify: `src/pages/disclaimer.astro`
- Modify: `src/pages/about.astro`
- Modify: `src/pages/contact.astro`

- [ ] **Step 1: Update privacy page**

Add clearer Chinese sections covering Google AdSense, advertising cookies, local storage, approximate technical data, opt-out choices, and contact path.

- [ ] **Step 2: Update editorial policy**

Add sections named `修订记录`, `来源处理`, `人工复核`, and `广告独立性`.

- [ ] **Step 3: Update disclaimer/about/contact**

Make the fan-site status, game asset ownership, accuracy limits, correction request process, and copyright handling clearer. Keep links to `/contact/`, `/privacy/`, and `/editorial-policy/`.

- [ ] **Step 4: Run GREEN check for policy text**

Run:

```bash
npm run build
npm run verify:adsense-content
```

Expected: verification still fails only if sitemap is incomplete.

- [ ] **Step 5: Commit**

```bash
git add src/pages/privacy.astro src/pages/editorial-policy.astro src/pages/disclaimer.astro src/pages/about.astro src/pages/contact.astro
git commit -m "docs: strengthen publisher policy pages"
```

## Task 5: Update Sitemap And Internal Discovery

**Files:**
- Modify: `src/pages/sitemap.xml.ts`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Include guide and map pages in sitemap**

Update `src/pages/sitemap.xml.ts` to collect `guides` and `maps`, then include `guides/${entry.slug}/` and `explore/${entry.slug}/`.

- [ ] **Step 2: Improve homepage internal links**

Add a concise guide/explore discovery section to `src/pages/index.astro` that links to `/guides/beginner/`, `/explore/`, and `/tools/gacha-calculator/`.

- [ ] **Step 3: Run final GREEN check**

Run:

```bash
npm run build
npm run verify:adsense-content
```

Expected: both commands pass, and the verification script prints `AdSense content verification passed.`

- [ ] **Step 4: Commit**

```bash
git add src/pages/sitemap.xml.ts src/pages/index.astro
git commit -m "feat: improve content discovery and sitemap"
```

## Task 6: Final Review

**Files:**
- Review all changed files.

- [ ] **Step 1: Inspect git status**

Run:

```bash
git status --short
```

Expected: no unexpected untracked or modified files except intentional final artifacts.

- [ ] **Step 2: Inspect generated sitemap**

Run:

```bash
node -e "const fs=require('fs'); const xml=fs.readFileSync('dist/sitemap.xml','utf8'); for (const p of ['/guides/beginner/','/explore/skytower-route/','/explore/bridge-crossings/']) console.log(p, xml.includes(p));"
```

Expected: all lines print `true`.

- [ ] **Step 3: Final verification**

Run:

```bash
npm run build
npm run verify:adsense-content
```

Expected: both commands pass.

- [ ] **Step 4: Summarize changed files and residual risk**

Report that the work improves Google publisher readiness but cannot guarantee AdSense approval.

## Self-Review

- Spec coverage: Tasks cover new pages, expanded content, hub improvements, compliance pages, metadata/sitemap, and build verification.
- Placeholder scan: No `TBD`, `TODO`, `implement later`, or omitted test commands are used.
- Type consistency: Routes use existing Astro content collection names: `guides` and `maps`.
