import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from '@astrojs/vercel/static';
import partytown from '@astrojs/partytown'


import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://north-south.eu',
  adapter: vercel(),
  i18n: {
    defaultLocale: "it",
    locales: ["fr", "it"],
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),
    icon(),
    
  ]
});