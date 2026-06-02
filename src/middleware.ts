import type { MiddlewareHandler } from "astro";
import { readFile } from "node:fs/promises";

const pagefindRoot = new URL("../dist/pagefind/", import.meta.url);

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".wasm": "application/wasm",
};

const getContentType = (pathname: string) => {
  if (pathname.endsWith(".pf_fragment") || pathname.endsWith(".pf_index") || pathname.endsWith(".pf_meta")) {
    return "application/octet-stream";
  }

  const match = pathname.match(/\.[^.]+$/);
  return match ? contentTypes[match[0]] || "application/octet-stream" : "application/octet-stream";
};

export const onRequest: MiddlewareHandler = async (context, next) => {
  if (!import.meta.env.DEV || !context.url.pathname.startsWith("/pagefind/")) {
    return next();
  }

  const relativePath = context.url.pathname.slice("/pagefind/".length);
  if (!relativePath) {
    return next();
  }

  try {
    const asset = await readFile(new URL(relativePath, pagefindRoot));
    return new Response(asset, {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": getContentType(relativePath)
      }
    });
  } catch {
    return next();
  }
};
