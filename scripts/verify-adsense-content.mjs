import { readFile, access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const siteRoot = "https://nte.sts2hub.com";

const expectedPages = [
  {
    slug: "guides/beginner",
    url: `${siteRoot}/guides/beginner/`,
    text: "beginner"
  },
  {
    slug: "explore/skytower-route",
    url: `${siteRoot}/explore/skytower-route/`,
    text: "skytower-route"
  },
  {
    slug: "explore/new-herland",
    url: `${siteRoot}/explore/new-herland/`,
    text: "new-herland"
  },
  {
    slug: "explore/district-a",
    url: `${siteRoot}/explore/district-a/`,
    text: "district-a"
  },
  {
    slug: "explore/ekorai-town",
    url: `${siteRoot}/explore/ekorai-town/`,
    text: "ekorai-town"
  },
  {
    slug: "explore/bridge-crossings",
    url: `${siteRoot}/explore/bridge-crossings/`,
    text: "bridge-crossings"
  }
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
  if (!html.includes(page.text)) {
    failures.push(`Generated page is missing required text "${page.text}": ${path.posix.join(page.slug, "index.html")}`);
  }
}

const sitemapPath = path.join(distDir, "sitemap.xml");
if (!(await fileExists(sitemapPath))) {
  failures.push("Missing generated sitemap: sitemap.xml");
} else {
  const sitemap = await readFile(sitemapPath, "utf8");
  for (const page of expectedPages) {
    if (!sitemap.includes(`<loc>${page.url}</loc>`)) {
      failures.push(`Sitemap is missing URL: ${page.url}`);
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
