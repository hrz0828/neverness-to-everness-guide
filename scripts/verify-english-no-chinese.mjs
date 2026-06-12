import { createReadStream, readdirSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, relative } from "node:path";
import { chromium } from "playwright";

const distDir = new URL("../dist", import.meta.url).pathname;
const hanPattern = /[\u3400-\u9fff]/u;
const contentTypes = {
  ".css": "text/css",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".xml": "application/xml"
};

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function routeFor(file) {
  const rel = relative(distDir, file).replaceAll("\\", "/");
  if (rel === "index.html") return "/";
  return `/${rel.replace(/\/index\.html$/, "/")}`;
}

function startServer() {
  const server = createServer((req, res) => {
    const url = new URL(req.url || "/", "http://127.0.0.1");
    const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const filePath = join(distDir, cleanPath === "" || cleanPath.endsWith("/") ? `${cleanPath}index.html` : cleanPath);
    const type = contentTypes[extname(filePath)] || "application/octet-stream";
    res.setHeader("content-type", type);
    createReadStream(filePath)
      .on("error", () => {
        res.statusCode = 404;
        res.end("Not found");
      })
      .pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({ server, origin: `http://127.0.0.1:${address.port}` });
    });
  });
}

const routes = walk(distDir)
  .filter((file) => file.endsWith(".html"))
  .map(routeFor)
  .sort();

const { server, origin } = await startServer();
const browser = await chromium.launch({
  chromiumSandbox: false,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
});

const failures = [];

try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await context.addInitScript(() => {
    localStorage.setItem("nte-lang", "en");
  });
  await context.route("**/*", (route) => {
    const requestUrl = new URL(route.request().url());
    if (requestUrl.hostname === "127.0.0.1") {
      route.continue();
      return;
    }
    route.abort();
  });

  for (const route of routes) {
    const page = await context.newPage();
    await page.goto(`${origin}${route}`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(50);
    const text = await page.locator("body").innerText();
    const match = text.match(/.{0,40}[\u3400-\u9fff].{0,120}/u);
    if (match || hanPattern.test(text)) {
      failures.push(`${route}: ${(match?.[0] || "").replace(/\s+/g, " ")}`);
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}

if (failures.length) {
  console.error(`Found visible Chinese text in English mode (${failures.length} pages):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`No visible Chinese text detected in English mode across ${routes.length} pages.`);
