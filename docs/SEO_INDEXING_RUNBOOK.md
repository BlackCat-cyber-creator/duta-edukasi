# SEO & Search Engine Indexing Runbook (`dutaedukasi.vercel.app`)

Panduan operasional lengkap untuk memastikan setiap rilis konten, paket soal, bab materi, atau perbaikan SEO di **Duta e-dukasi** (`https://dutaedukasi.vercel.app`) langsung terverifikasi, terindeks, dan mendapat eksposur maksimal di **Google**, **Bing**, **IndexNow (Yandex/Naver/Seznam)**, dan **AI/LLM crawlers**.

Aturan wajib ringkas berada di [`AGENTS.md`](../AGENTS.md).

---

## 1. Aset Verifikasi & Endpoint SEO Utama

| Sistem / Layanan | File / Tag Verifikasi | URL Dashboard / Endpoint |
| --- | --- | --- |
| **Google Search Console** | `public/googlebd291c9eb4b652d2.html` | https://search.google.com/search-console (properti `https://dutaedukasi.vercel.app/`) |
| **Bing Webmaster Tools** | `public/BingSiteAuth.xml` + `<meta name="msvalidate.01" ...>` di `index.html` | https://www.bing.com/webmasters (properti `https://dutaedukasi.vercel.app/`) |
| **IndexNow** (Bing, Yandex, Naver, Seznam, Yep) | `public/dutaedukasi-indexnow-key.txt` | `https://api.indexnow.org/indexnow` (lewat `npm run indexnow`) |
| **Google Analytics 4 (GA4)** | `G-G2BZYXCEFM` di `index.html` & `src/utils/analytics.js` | https://analytics.google.com/ (aktif hanya di host `dutaedukasi.vercel.app`) |
| **Sitemap XML (URL + Image + Hreflang)** | Dibangkitkan oleh `scripts/prerender.mjs` → `dist/sitemap.xml` | https://dutaedukasi.vercel.app/sitemap.xml |
| **RSS Feed (50 Paket Terbaru)** | `scripts/prerender.mjs` → `dist/rss.xml` | https://dutaedukasi.vercel.app/rss.xml |
| **Robots & AI Crawler Policy** | `public/robots.txt` | https://dutaedukasi.vercel.app/robots.txt |
| **OpenSearch** | `public/opensearch.xml` | https://dutaedukasi.vercel.app/opensearch.xml |
| **GEO / AI Index & Datasets** | `dist/llms*.txt`, `dist/datasets/*.json(l)`, `**/*.md` | https://dutaedukasi.vercel.app/llms.txt |

---

## 2. Checklist Rilis Wajib (Setiap Menambah Konten / Rute / SEO)

### Tahap A — Build & Audit Lokal (Sebelum Commit)
1. *(Opsional jika jumlah paket soal bertambah signifikan)* Perbarui kartu OG & ikon:
   ```bash
   python scripts/generate-og-images.py
   ```
2. Jalankan build, linter, dan seluruh tes (termasuk audit HTML `dist/` dan konfigurasi Vercel):
   ```powershell
   npm run build; if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
   npm run lint; if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
   npm test
   ```
3. Pastikan `git status` bersih dari berkas lokal/rahasia (`.claude/`, `.env`, `dist/`, `scratch/`, `content-inbox/` tidak boleh ikut ter-commit).
4. Commit dan push ke `origin main` untuk memicu deploy otomatis di Vercel.

---

### Tahap B — Verifikasi Deploy Live di Vercel (Sebelum Ping Search Engine)
Tunggu ~45–90 detik setelah `git push`, lalu pastikan build terbaru sudah aktif di produksi sebelum mengirim sinyal ke mesin pencari:

```powershell
@'
const BASE = 'https://dutaedukasi.vercel.app';
const sm = await fetch(`${BASE}/sitemap.xml?t=${Date.now()}`);
const smTxt = await sm.text();
const locs = (smTxt.match(/<loc>/g) || []).length;
const [home, mat, ipa10, robots, rss, llms] = await Promise.all([
  fetch(`${BASE}/`),
  fetch(`${BASE}/matematika`),
  fetch(`${BASE}/ipa/kelas-10`, { redirect: 'manual' }),
  fetch(`${BASE}/robots.txt`),
  fetch(`${BASE}/rss.xml`),
  fetch(`${BASE}/llms.txt`)
]);
console.log({
  sitemapStatus: sm.status,
  sitemapLocs: locs,
  homeStatus: home.status,
  hasGA4: (await home.text()).includes('G-G2BZYXCEFM'),
  matematikaStatus: mat.status,
  ipa10Redirect: [ipa10.status, ipa10.headers.get('location')],
  robotsStatus: robots.status,
  rssStatus: rss.status,
  llmsStatus: llms.status
});
'@ | node --input-type=module
```

---

### Tahap C — Pengiriman Indexing Wajib (Pasca-Deploy Live)

1. **IndexNow (Wajib — Instan ke Bing, Yandex, Naver, Seznam, Yep):**
   ```bash
   npm run indexnow
   ```
   Pastikan output menunjukkan `IndexNow status: 200 OK` (atau `202 Accepted`).

2. **Google Search Console (`https://search.google.com/search-console`):**
   - Pastikan properti aktif adalah **`https://dutaedukasi.vercel.app/`**.
   - **Peta Situs (Sitemaps):** Kirim ulang `sitemap.xml` dan pastikan status **`Sukses`** serta jumlah **`Halaman yang ditemukan`** sudah bertambah sesuai `dist/sitemap.xml`.
   - **Inspeksi URL (URL Inspection):** Untuk halaman baru berprioritas tinggi (hub baru, paket soal terbaru, atau halaman yang baru diperbaiki), jalankan **Minta Pengindeksan (Request Indexing)** *(kuota harian Google ~10–12 URL/hari, prioritaskan halaman baru/terpenting)*.
   - **Validasi Perbaikan (Validate Fix):** Jika ada laporan error/warning di **Halaman (Pages)** atau **Penyempurnaan (Enhancements)** yang baru diperbaiki, buka detail error-nya dan klik **Validasi Perbaikan**.

3. **Bing Webmaster Tools (`https://www.bing.com/webmasters`):**
   - Pastikan properti aktif adalah **`https://dutaedukasi.vercel.app/`** (sudah terverifikasi lewat `BingSiteAuth.xml` dan `msvalidate.01`).
   - **Sitemaps:** Pastikan `https://dutaedukasi.vercel.app/sitemap.xml` terdaftar dan berstatus **Success**; klik **Submit sitemap** / **Resubmit** bila jumlah URL baru belum terbaca.
   - **IndexNow:** Pastikan ping dari `npm run indexnow` tercatat pada tab **IndexNow**.
   - **URL Submission:** Gunakan **Submit URLs** untuk URL baru berprioritas tinggi bila perlu percepatan ekstra.
   - **Site Scan / SEO Reports:** Tinjau apakah ada error metadata, heading, tautan rusak, atau ukuran halaman yang muncul.

4. **Yandex Webmaster *(Opsional — Tambahan Eksposur Global)*:**
   - Yandex sudah menerima URL lewat **IndexNow**, namun mendaftarkan `https://dutaedukasi.vercel.app/` di https://webmaster.yandex.com/ dengan `sitemap.xml` memberikan laporan crawl & status indeks tambahan.

---

## 3. Rutinitas Pemantauan Berkala (Mingguan / Bulanan)

- **Google Search Console:**
  - Pantau grafik **Terindeks** vs **Tidak diindeks** (`Ditemukan - saat ini tidak diindeks` & `Di-crawl - saat ini tidak diindeks`).
  - Pantau **Performa Penelusuran** (kueri dengan impresi tinggi tetapi CTR rendah → pertajam `<title>` / `<meta description>` di `src/utils/seoMeta.js`).
  - Pantau **Data Web Inti (Core Web Vitals)** dan status **Validasi Perbaikan** pada `Soal Latihan` / `Breadcrumb`.
- **Bing Webmaster Tools:**
  - Cek laporan **Site Scan**, **Search Performance**, dan **Backlinks**.
- **Google Analytics 4 (`G-G2BZYXCEFM`):**
  - Pantau `page_view` organik dan halaman paling populer untuk menentukan topik paket soal/materi prioritas berikutnya.
- **Tautan Sosial / WhatsApp:**
  - Uji pratinjau kartu Open Graph secara berkala saat membagikan tautan `/`, `/matematika`, `/olimpiade`, dan `/paket-soal/...`.
