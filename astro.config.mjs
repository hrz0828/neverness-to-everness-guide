import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://nte-guide.com",
  output: "static",
  integrations: [mdx(), tailwind({ applyBaseStyles: false })]
});
