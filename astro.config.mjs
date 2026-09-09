// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import { rehypeDialogue } from './src/plugins/rehype-dialogue.mjs';

// Адрес публикации: проектная страница GitHub Pages.
// Для своего домена достаточно поменять site и убрать base
// (или переопределить их переменными окружения на сборке).
const site = process.env.SITE_URL ?? 'https://rabinzon.github.io';
const base = process.env.BASE_PATH ?? '/tatar-story';

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
