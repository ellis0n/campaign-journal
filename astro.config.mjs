import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), markdoc(), keystatic()],
  // site: 'https://campaign-journal.vercel.app/',
  output: "hybrid",
  adapter: vercel()
});