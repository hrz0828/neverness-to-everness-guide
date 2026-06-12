import { access, readFile } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

const expectedPages = [
  {
    slug: "guides/beginner",
    text: ["开荒资源规划", "每日优先级", "一周复盘清单"]
  },
  {
    slug: "guides/team-building",
    text: ["先确定队伍职责", "实战循环怎么设计", "新手配队检查表"]
  },
  {
    slug: "guides/anomaly-commission-checklist",
    text: ["接取前先确认条件", "解谜卡住时怎么排查", "任务空间补漏"]
  },
  {
    slug: "guides/gacha-budget",
    text: ["先定义抽卡目标", "停手线怎么设置", "抽卡前检查清单"]
  },
  {
    slug: "guides/daily-weekly-priority",
    text: ["每天只有 15 分钟时", "活动优先级判断", "一周复盘模板"]
  },
  {
    slug: "explore/skytower-route",
    text: ["路线重点", "分阶段目标", "补漏检查"]
  },
  {
    slug: "explore/new-herland",
    text: ["路线重点", "经营与载具点位", "补漏检查"]
  },
  {
    slug: "explore/district-a",
    text: ["路线重点", "夜间巡查路线", "补漏检查"]
  },
  {
    slug: "explore/ekorai-town",
    text: ["路线重点", "影像幽宅前置检查", "补漏检查"]
  },
  {
    slug: "explore/bridge-crossings",
    text: ["路线重点", "载具与道路事件", "补漏检查"]
  }
];

const requiredTextChecks = [
  { file: "privacy/index.html", text: "Google AdSense" },
  { file: "editorial-policy/index.html", text: "修订记录" },
  { file: "disclaimer/index.html", text: "非官方网站" },
  { file: "index.html", text: "本站原创整理方法" },
  { file: "index.html", text: "适合先看的攻略路径" },
  { file: "characters/index.html", text: "角色页如何复核" },
  { file: "search/index.html", text: "搜索使用建议" },
  { file: "tools/gacha-calculator/index.html", text: "计算结果如何使用" },
  { file: "editorial-policy/index.html", text: "低价值内容处理" },
  { file: "index.html", text: "How We Create Original Guide Content" },
  { file: "characters/index.html", text: "How To Read Character Guides" },
  { file: "search/index.html", text: "Search Tips" },
  { file: "tools/gacha-calculator/index.html", text: "How To Use Calculator Results" },
  { file: "about/index.html", text: "Who Maintains This Site" },
  { file: "contact/index.html", text: "Feedback We Can Act On" },
  { file: "privacy/index.html", text: "Google AdSense and Third-Party Advertising" },
  { file: "disclaimer/index.html", text: "Unofficial Fan Site Notice" },
  { file: "editorial-policy/index.html", text: "Low-Value Content Handling" }
];

const minimumChineseCharacters = [
  { file: "index.html", count: 1100 },
  { file: "characters/index.html", count: 950 },
  { file: "search/index.html", count: 450 },
  { file: "tools/gacha-calculator/index.html", count: 1000 }
];

const sitemapUrls = [
  "/guides/beginner/",
  "/guides/team-building/",
  "/guides/anomaly-commission-checklist/",
  "/guides/gacha-budget/",
  "/guides/daily-weekly-priority/",
  "/explore/skytower-route/",
  "/explore/new-herland/",
  "/explore/district-a/",
  "/explore/ekorai-town/",
  "/explore/bridge-crossings/"
];

const failures = [];

async function fileExists(filePath) {
  try {
    await access(filePath, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

for (const page of expectedPages) {
  const filePath = path.join(distDir, page.slug, "index.html");
  if (!(await fileExists(filePath))) {
    failures.push(`Missing generated page: ${path.posix.join(page.slug, "index.html")}`);
    continue;
  }

  const html = await readFile(filePath, "utf8");
  for (const text of page.text) {
    if (!html.includes(text)) {
      failures.push(`Generated page is missing required text "${text}": ${path.posix.join(page.slug, "index.html")}`);
    }
  }
}

for (const check of requiredTextChecks) {
  const filePath = path.join(distDir, check.file);
  if (!(await fileExists(filePath))) {
    failures.push(`Missing generated page: ${check.file}`);
    continue;
  }

  const html = await readFile(filePath, "utf8");
  if (!html.includes(check.text)) {
    failures.push(`Generated page is missing required text "${check.text}": ${check.file}`);
  }
}

for (const check of minimumChineseCharacters) {
  const filePath = path.join(distDir, check.file);
  if (!(await fileExists(filePath))) {
    failures.push(`Missing generated page: ${check.file}`);
    continue;
  }

  const html = await readFile(filePath, "utf8");
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ");
  const chineseCharacters = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  if (chineseCharacters < check.count) {
    failures.push(
      `Generated page has only ${chineseCharacters} Chinese characters; expected at least ${check.count}: ${check.file}`
    );
  }
}

const sitemapPath = path.join(distDir, "sitemap.xml");
if (!(await fileExists(sitemapPath))) {
  failures.push("Missing generated sitemap: sitemap.xml");
} else {
  const sitemap = await readFile(sitemapPath, "utf8");
  for (const url of sitemapUrls) {
    if (!sitemap.includes(`<loc>https://nte.sts2hub.com${url}</loc>`)) {
      failures.push(`Sitemap is missing URL: https://nte.sts2hub.com${url}`);
    }
  }
}

if (failures.length > 0) {
  console.error("AdSense content verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("AdSense content verification passed.");
