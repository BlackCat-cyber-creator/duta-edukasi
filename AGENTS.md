# Duta e-dukasi — Mandatory SEO, Exposure & Post-Deploy Indexing Rules

> **Core Principle:** Exposure and search indexing are mission-critical. Any change that adds, renames, or updates public pages, Paket Soal, curriculum chapters, hubs, metadata, JSON-LD, or routing on `https://dutaedukasi.vercel.app` is **NOT complete** at `git push`. A release is complete **only after** live production verification AND search engine indexing submissions (IndexNow, Google Search Console, Bing Webmaster Tools) are completed or explicitly handed off if login is required.

Full step-by-step commands, URLs, and hygiene checklists live in [`docs/SEO_INDEXING_RUNBOOK.md`](docs/SEO_INDEXING_RUNBOOK.md).

---

## 1. Pre-Deploy Gate (MANDATORY)

Before committing or pushing any change:
1. **Run full verification:**
   - `npm run build` (regenerates manifest, AI catalog, Vite bundle, 432+ prerendered HTML pages, `.md` twins, datasets, `llms*.txt`, `rss.xml`, and `sitemap.xml`)
   - `npm run lint` (must exit `0` with `0` warnings and `0` errors)
   - `npm test` (must pass 100%, including `tests/seoAudit.test.js` and `tests/deployConfig.test.js`)
2. **Keep OG cards accurate:** If published paper count changes significantly, regenerate `public/brand/og/*.png` via `python scripts/generate-og-images.py` before building.
3. **Protect SEO invariants:**
   - Never break existing public URLs, chapter IDs, `/solution/...` QR routes, or `vercel.json` redirects (`/ipa/kelas-10..12` → `/fisika/kelas-10..12`, `/prestasi` → `/tentang#prestasi`).
   - Never delete or break verification & discovery files:
     - `public/googlebd291c9eb4b652d2.html` (Google Search Console)
     - `public/BingSiteAuth.xml` + `msvalidate.01` in `index.html` (Bing Webmaster Tools)
     - `public/dutaedukasi-indexnow-key.txt` (IndexNow)
     - `public/robots.txt`, `public/opensearch.xml`
   - Keep `vercel.cleanUrls` unset/false so verification `.html` files are never redirected.
   - Keep `G-G2BZYXCEFM` GA4 tracking intact in `index.html` and `src/utils/analytics.js` (active on production host `dutaedukasi.vercel.app` only).
   - Never commit `.claude/`, `.env`, `dist/`, `scratch/`, or `content-inbox/`.

---

## 2. Live Deploy Verification Gate (MANDATORY BEFORE INDEXING)

Wait for Vercel to finish deploying the new commit to `https://dutaedukasi.vercel.app`, and **verify live production endpoints BEFORE pinging any search engine**:
1. Confirm `https://dutaedukasi.vercel.app/sitemap.xml` returns HTTP `200` with the updated `<loc>` count, `xmlns:image`, and new URLs.
2. Confirm representative new/updated pages return HTTP `200` (and legacy redirects return HTTP `308`).
3. Confirm `/robots.txt` returns `200` (including `Disallow: /app.html` for all bots) and `/` serves `G-G2BZYXCEFM`.

> **Never** run `npm run indexnow` or resubmit sitemaps in GSC/Bing before confirming the new build is live—otherwise crawlers re-fetch the stale deployment.

---

## 3. Mandatory Post-Deploy Indexing Protocol

After every content, route, or SEO release is confirmed live on `https://dutaedukasi.vercel.app`, execute **all** of the following:

### A. IndexNow (Bing, Yandex, Naver, Seznam, Yep)
- Run `npm run indexnow` (executes `scripts/ping-indexnow.mjs` against `dist/sitemap.xml`).
- Verify `IndexNow status: 200 OK` (or `202 Accepted`) for all sitemap URLs.

### B. Google Search Console (`https://search.google.com/search-console`)
- Select property **`https://dutaedukasi.vercel.app/`**.
- **Sitemaps (`Peta Situs`):** Resubmit `sitemap.xml` and confirm status **`Sukses`** with the updated discovered page count (`Halaman yang ditemukan`).
- **URL Inspection (`Inspeksi URL`):** For high-priority new hubs, landing pages, or newly published papers, run **Request Indexing (`Minta Pengindeksan`)**.
- **Issues & Enhancements (`Halaman` & `Penyempurnaan`):** Whenever an indexing reason or structured-data error (e.g., `Soal Latihan` / `Quiz`, `Breadcrumb`, `FAQ`) is fixed, click **Validate Fix (`Validasi Perbaikan`)**.

### C. Bing Webmaster Tools (`https://www.bing.com/webmasters`)
- Select property **`https://dutaedukasi.vercel.app/`**.
- **Sitemaps:** Ensure `https://dutaedukasi.vercel.app/sitemap.xml` is submitted and shows status **Success** with the current URL count.
- **URL Submission / IndexNow:** Verify IndexNow submissions are received under **IndexNow** and optionally submit priority new URLs under **URL Submission**.
- **Site Scan / SEO Reports:** Check for any newly reported crawl, canonical, or metadata issues.

### D. AI/GEO & Feed Endpoints
- Confirm HTTP `200` on `/llms.txt`, `/llms-full.txt`, `/rss.xml`, `/datasets/paket-soal-index.json`, `/datasets/kurikulum-index.json`, `/opensearch.xml`, and sample `.md` page twins.

### E. Authentication / Login Handling
- If Google Search Console or Bing Webmaster Tools requires login or 2FA during an agent browser session, **stop and ask the user** to sign in in the browser pane, then resume and complete the submission. Never silently skip indexing.
