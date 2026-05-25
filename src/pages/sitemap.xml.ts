import { getCollection } from "astro:content";
import { siteConfig } from "../site.config";
import { newsItems } from "../data/news";

const site = siteConfig.url;

export async function GET() {
  const characters = await getCollection("characters");
  const staticPages = ["", "characters/", "news/", "explore/", "guides/", "tools/gacha-calculator/", "search/", "about/", "contact/", "editorial-policy/", "privacy/", "disclaimer/"];
  const characterPages = characters.map((entry) => `characters/${entry.slug}/`);
  const newsPages = newsItems.map((item) => `news/${item.id}/`);
  const urls = [...staticPages, ...newsPages, ...characterPages].map((path) => {
    const loc = new URL(path, site).toString();
    return `<url><loc>${loc}</loc></url>`;
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
