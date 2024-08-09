import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from '@astrojs/vercel/static';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://northsouth-astro.vercel.app',
  adapter: vercel(),
  integrations: [tailwind(), mdx(), sitemap(), icon(),]
});