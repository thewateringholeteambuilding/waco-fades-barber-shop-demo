# Deploy — Waco Fades Barber Shop Demo

## Pre-deploy checklist
- [ ] Replace `__CUSTOM_DOMAIN__` in `index.html`, `public/sitemap.xml`, `public/robots.txt`
- [ ] Replace `__GOOGLE_SITE_VERIFICATION__` in `index.html` with real verification code
- [ ] Replace `G-XXXXXXXXXX` in `index.html` with real GA4 Measurement ID
- [ ] Verify all Unsplash images load correctly
- [ ] Run `npm run build` and confirm exit 0

## Deploy command
```bash
cd "Demos/Business-Commerce/Waco Fades Barber Shop/Demo 1"
npx wrangler deploy
```

## Post-deploy
- [ ] Verify live URL loads correctly
- [ ] Test mobile responsiveness
- [ ] Verify 404 page works
- [ ] Update `demo_url` in Supabase `no_website_leads`
