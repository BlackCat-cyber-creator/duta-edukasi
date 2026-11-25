/**
 * Kirim seluruh URL dari dist/sitemap.xml ke IndexNow (Bing, Yandex, Naver, Seznam)
 * setelah deploy produksi selesai: `npm run indexnow`
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE_URL } from '../src/utils/seoRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(ROOT, 'dist/sitemap.xml');
const KEY_PATH = path.join(ROOT, 'public/dutaedukasi-indexnow-key.txt');

if (!fs.existsSync(SITEMAP_PATH)) {
  console.error('dist/sitemap.xml belum tersedia. Jalankan `npm run build` terlebih dahulu.');
  process.exit(1);
}

const key = fs.readFileSync(KEY_PATH, 'utf8').trim();
const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf8');
const urlList = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
const host = new URL(SITE_URL).host;

const payload = {
  host,
  key,
  keyLocation: `${SITE_URL}/dutaedukasi-indexnow-key.txt`,
  urlList
};

console.log(`Mengirim ${urlList.length} URL ke IndexNow untuk ${host}...`);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload)
});

console.log(`IndexNow status: ${res.status} ${res.statusText}`);
if (!res.ok) {
  const txt = await res.text().catch(() => '');
  console.error(txt);
  process.exit(1);
}
