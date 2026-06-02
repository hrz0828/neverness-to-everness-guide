import { access, readFile } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

const expectedPages = [
  {
    slug: "guides/beginner",
    text: ["开荒资源规划", "每日优先级", "抽卡与养成取舍"]
  },
  {
    slug: "explore/skytower-route",
    text: ["路线重点", "推荐清理顺序", "补漏检查"]
  },
  {
    slug: "explore/new-herland",
    text: ["路线重点", "异象与战斗准备", "补漏检查"]
  },
  {
    slug: "explore/district-a",
    text: ["路线重点", "容易遗漏的位置", "补漏检查"]
  },
  {
    slug: "explore/ekorai-town",
    text: ["路线重点", "异象与战斗准备", "补漏检查"]
  },
  {
    slug: "explore/bridge-crossings",
    text: ["路线重点", "推荐清理顺序", "补漏检查"]
  }
];

const requiredTextChecks = [
  { file: "privacy/index.html", text: "Google AdSense" },
  { file: "editorial-policy/index.html", text: "修订记录" },
  { file: "disclaimer/index.html", text: "非官方网站" }
];

const sitemapUrls = [
  "/guides/beginner/",
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

const sitemapPath = path.join(distDir, "sitemap.xml");
if (!(await fileExists(sitemapPath))) {
  failures.push("Missing generated sitemap: sitemap.xml");
} else {
  const sitemap = await readFile(sitemapPath, "utf8");
  for (const url of sitemapUrls) {
    if (!sitemap.includes(url)) {
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
