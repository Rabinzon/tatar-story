// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import { rehypeDialogue } from './src/plugins/rehype-dialogue.mjs';

// Домен и подпапка задаются окружением: локально — корень,
// на GitHub Pages — https://<user>.github.io/<repo>/ (см. .github/workflows/deploy.yml).
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [mdx()],
  markdown: {
    processor: unified({
      // Тексты набираются с «ёлочками» и длинным тире вручную —
      // англоязычная типографика smartypants здесь только мешает.
      smartypants: false,
      rehypePlugins: [rehypeDialogue],
    }),
  },
});
