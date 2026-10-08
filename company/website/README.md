# Minh Phuoc Solution — website

Stack: [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) + [daisyUI 5](https://daisyui.com). Fully static output, deployed to GitHub Pages by `.github/workflows/website.yml`.

```bash
cd company/website
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Custom domain: `public/CNAME` (truongminhphuoc.id.vn) and `site` in `astro.config.mjs`.
Deploy: Settings → Pages → Source = **GitHub Actions**, then point DNS (CNAME → `<user>.github.io`, or A records for an apex domain).
