import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const vercel = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../vercel.json'), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'));

describe('Konfigurasi deploy Vercel', () => {
  it('build menjalankan prerender SEO', () => {
    expect(pkg.scripts.build).toContain('scripts/prerender.mjs');
    expect(vercel.buildCommand).toBe('npm run build');
  });

  it('cleanUrls tidak dipakai agar file verifikasi Google (*.html) tidak dialihkan', () => {
    expect(vercel.cleanUrls).not.toBe(true);
    expect(fs.existsSync(path.resolve(__dirname, '../public/googlebd291c9eb4b652d2.html'))).toBe(true);
  });

  it('alamat rapi diarahkan ke HTML hasil prerender, sisanya ke kerangka aplikasi', () => {
    const map = Object.fromEntries(vercel.rewrites.map((r) => [r.source, r.destination]));
    expect(map['/matematika']).toBe('/matematika.html');
    expect(map['/matematika/:kelas/:bab']).toBe('/matematika/:kelas/:bab.html');
    expect(map['/matematika/:kelas']).toBe('/matematika/:kelas.html');
    expect(map['/ipa']).toBe('/ipa.html');
    expect(map['/ipa/:kelas/:bab']).toBe('/ipa/:kelas/:bab.html');
    expect(map['/ipa/:kelas']).toBe('/ipa/:kelas.html');
    expect(map['/fisika']).toBe('/fisika.html');
    expect(map['/fisika/:kelas/:bab']).toBe('/fisika/:kelas/:bab.html');
    expect(map['/fisika/:kelas']).toBe('/fisika/:kelas.html');
    expect(map['/kimia']).toBe('/kimia.html');
    expect(map['/kimia/:kelas/:bab']).toBe('/kimia/:kelas/:bab.html');
    expect(map['/kimia/:kelas']).toBe('/kimia/:kelas.html');
    expect(map['/biologi']).toBe('/biologi.html');
    expect(map['/biologi/:kelas/:bab']).toBe('/biologi/:kelas/:bab.html');
    expect(map['/biologi/:kelas']).toBe('/biologi/:kelas.html');
    expect(map['/olimpiade/:level/:bab']).toBe('/olimpiade/:level/:bab.html');
    expect(map['/olimpiade/:level']).toBe('/olimpiade/:level.html');
    expect(map['/olimpiade']).toBe('/olimpiade.html');
    expect(map['/paket-soal/:subject/:slug']).toBe('/paket-soal/:subject/:slug.html');
    expect(map['/paket-soal/:subject']).toBe('/paket-soal/:subject.html');
    expect(map['/paket-soal']).toBe('/paket-soal.html');
    expect(map['/tentang']).toBe('/tentang.html');
    expect(map['/program']).toBe('/program.html');
    expect(map['/pendiri']).toBe('/pendiri.html');
    expect(map['/prestasi']).toBeUndefined();
    expect(map['/kontak']).toBe('/kontak.html');
    expect(map['/daftar-isi']).toBe('/daftar-isi.html');
    expect(map['/rumus']).toBe('/rumus.html');
    expect(map['/tka']).toBe('/tka.html');
    expect(map['/tka/:paket']).toBe('/tka/:paket.html');
    // Fallback SPA harus aturan terakhir
    expect(vercel.rewrites[vercel.rewrites.length - 1]).toEqual({ source: '/(.*)', destination: '/app.html' });
  });

  it('alamat lama /prestasi dan /ipa/kelas-10..12 dialihkan permanen (301/308)', () => {
    const redirects = vercel.redirects || [];
    expect(redirects.find((r) => r.source === '/prestasi')).toEqual({
      source: '/prestasi',
      destination: '/tentang#prestasi',
      permanent: true
    });
    for (const g of [10, 11, 12]) {
      expect(redirects.find((r) => r.source === `/ipa/kelas-${g}`)).toEqual({
        source: `/ipa/kelas-${g}`,
        destination: `/fisika/kelas-${g}`,
        permanent: true
      });
      expect(redirects.find((r) => r.source === `/ipa/kelas-${g}/:bab`)).toEqual({
        source: `/ipa/kelas-${g}/:bab`,
        destination: `/fisika/kelas-${g}/:bab`,
        permanent: true
      });
    }
  });

  it('robots.txt dan vercel headers membuka akses publik, memblokir /app.html, dan memasang noindex + cache headers', () => {
    const robots = fs.readFileSync(path.resolve(__dirname, '../public/robots.txt'), 'utf8');
    for (const bot of ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
      expect(robots).toContain(`User-agent: ${bot}`);
    }
    const groups = robots.split(/^User-agent:\s+/m).slice(1);
    expect(groups.length).toBeGreaterThan(15);
    for (const g of groups) {
      expect(g, `Missing Disallow: /app.html in ${g.split('\n')[0]}`).toContain('Disallow: /app.html');
    }
    expect(robots).toContain('Sitemap: https://dutaedukasi.vercel.app/sitemap.xml');

    const headerMap = Object.fromEntries((vercel.headers || []).map((h) => [h.source, h.headers]));
    expect(headerMap['/paket-soal/(.*)\\.md']).toBeDefined();
    expect(headerMap['/(matematika|ipa|fisika|kimia|biologi|olimpiade)/(.*)\\.md']).toBeDefined();
    expect(headerMap['/llms(.*)\\.txt']).toBeDefined();
    expect(headerMap['/datasets/(.*)\\.json']).toBeDefined();
    expect(headerMap['/(app\\.html|akun|teacher|worksheet)']?.some((h) => h.key === 'X-Robots-Tag' && h.value === 'noindex, nofollow')).toBe(true);
    expect(headerMap['/assets/(.*)']?.some((h) => h.key === 'Cache-Control' && h.value.includes('immutable'))).toBe(true);
    expect(headerMap['/(.*)']?.some((h) => h.key === 'X-Content-Type-Options' && h.value === 'nosniff')).toBe(true);
  });
});
