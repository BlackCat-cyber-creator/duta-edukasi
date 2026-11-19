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
    expect(map['/matematika/:kelas/:bab']).toBe('/matematika/:kelas/:bab.html');
    expect(map['/matematika/:kelas']).toBe('/matematika/:kelas.html');
    expect(map['/ipa/:kelas/:bab']).toBe('/ipa/:kelas/:bab.html');
    expect(map['/ipa/:kelas']).toBe('/ipa/:kelas.html');
    expect(map['/fisika/:kelas/:bab']).toBe('/fisika/:kelas/:bab.html');
    expect(map['/fisika/:kelas']).toBe('/fisika/:kelas.html');
    expect(map['/olimpiade/:level/:bab']).toBe('/olimpiade/:level/:bab.html');
    expect(map['/olimpiade/:level']).toBe('/olimpiade/:level.html');
    expect(map['/paket-soal/:subject/:slug']).toBe('/paket-soal/:subject/:slug.html');
    expect(map['/paket-soal/:subject']).toBe('/paket-soal/:subject.html');
    expect(map['/paket-soal']).toBe('/paket-soal.html');
    expect(map['/tentang']).toBe('/tentang.html');
    expect(map['/program']).toBe('/program.html');
    expect(map['/pendiri']).toBe('/pendiri.html');
    expect(map['/prestasi']).toBe('/prestasi.html');
    expect(map['/kontak']).toBe('/kontak.html');
    expect(map['/daftar-isi']).toBe('/daftar-isi.html');
    expect(map['/rumus']).toBe('/rumus.html');
    expect(map['/tka']).toBe('/tka.html');
    expect(map['/tka/:paket']).toBe('/tka/:paket.html');
    // Fallback SPA harus aturan terakhir
    expect(vercel.rewrites[vercel.rewrites.length - 1]).toEqual({ source: '/(.*)', destination: '/app.html' });
  });
});
