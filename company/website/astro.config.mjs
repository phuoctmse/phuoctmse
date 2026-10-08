import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Custom domain on GitHub Pages: set `site`, leave `base` unset.
export default defineConfig({
  site: 'https://truongminhphuoc.id.vn',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
