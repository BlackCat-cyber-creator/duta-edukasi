import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { isMateriPath, shouldScrollToTop } from '../src/utils/navigation.js';
import {
  AUTHOR,
  FOUNDER,
  PRESTASI_DATA,
  PRIVATE_INSTAGRAM_ACCOUNTS,
  isPublicInstagramUrl,
  parseInstagramPost
} from '../src/data/siteInfo.js';

describe('Menu utama', () => {
  it('"Materi" aktif di beranda, semua mata pelajaran, dan daftar isi', () => {
    for (const p of ['/', '/matematika/kelas-8', '/ipa/kelas-7/bab1-x', '/fisika/kelas-10', '/kimia/kelas-11', '/biologi/kelas-12', '/daftar-isi']) {
      expect(isMateriPath(p)).toBe(true);
    }
  });

  it('"Materi" tidak aktif di halaman lain', () => {
    for (const p of ['/olimpiade', '/olimpiade/amc-8', '/paket-soal', '/tka', '/rumus', '/tentang', '/ipaku']) {
      expect(isMateriPath(p)).toBe(false);
    }
  });
});

describe('Gulir ke atas saat pindah halaman', () => {
  it('pindah ke halaman lain (mis. dari footer) dimulai dari atas', () => {
    expect(shouldScrollToTop('/', '/tentang')).toBe(true);
    expect(shouldScrollToTop('/matematika/kelas-8', '/rumus')).toBe(true);
    expect(shouldScrollToTop('/paket-soal', '/paket-soal/fisika/kinematika-1')).toBe(true);
    expect(shouldScrollToTop('/olimpiade', '/olimpiade/amc-8')).toBe(true);
  });

  it('ganti bab/kelas/mapel di buku saku dan filter paket soal tidak memaksa ke atas', () => {
    expect(shouldScrollToTop('/matematika/kelas-8', '/matematika/kelas-8/bab2-teorema-pythagoras')).toBe(false);
    expect(shouldScrollToTop('/ipa/kelas-9', '/fisika/kelas-10')).toBe(false);
    expect(shouldScrollToTop('/olimpiade/amc-8', '/olimpiade/amc-10')).toBe(false);
    expect(shouldScrollToTop('/paket-soal', '/paket-soal/kimia')).toBe(false);
    expect(shouldScrollToTop('/tentang', '/tentang')).toBe(false);
  });
});

describe('Tautan Instagram prestasi', () => {
  it('membaca akun dan kode unggahan', () => {
    expect(parseInstagramPost('https://www.instagram.com/jenovervy/p/DdijuQmn7o2/')).toEqual({ account: 'jenovervy', shortcode: 'DdijuQmn7o2' });
    expect(parseInstagramPost('https://www.instagram.com/p/ABC_-1/')).toEqual({ account: null, shortcode: 'ABC_-1' });
    expect(parseInstagramPost('https://example.com/')).toBeNull();
  });

  it('akun privat tidak dianggap tautan publik', () => {
    expect(PRIVATE_INSTAGRAM_ACCOUNTS).toContain('jonoyang78');
    expect(isPublicInstagramUrl('https://www.instagram.com/jonoyang78/p/X/')).toBe(false);
    expect(isPublicInstagramUrl('https://www.instagram.com/jenovervy/p/X/')).toBe(true);
    expect(isPublicInstagramUrl('https://www.youtube.com/watch?v=1')).toBe(true);
  });

  it('setiap prestasi punya sumber, dan minimal satu foto publik tersedia', () => {
    for (const item of PRESTASI_DATA) {
      expect(item.sourceUrl, item.id).toMatch(/^https:\/\//);
    }
    const withPublicPhoto = PRESTASI_DATA.filter((i) => i.photo || (parseInstagramPost(i.sourceUrl) && isPublicInstagramUrl(i.sourceUrl)));
    expect(withPublicPhoto.length).toBeGreaterThan(0);
  });

  it('setiap foto prestasi yang dirujuk ada di public/prestasi', () => {
    const withPhoto = PRESTASI_DATA.filter((i) => i.photo);
    expect(withPhoto.length).toBeGreaterThanOrEqual(11);
    for (const item of withPhoto) {
      expect(item.photo, item.id).toBe(`/prestasi/${item.id}.jpg`);
      expect(fs.existsSync(path.resolve(__dirname, '../public', item.photo.slice(1))), item.id).toBe(true);
    }
  });
});

describe('Profil pendiri dan tim', () => {
  it('foto pendiri tersedia di folder public', () => {
    expect(FOUNDER.photo).toBe('/people/jono-yang.jpg');
    expect(fs.existsSync(path.resolve(__dirname, '../public', FOUNDER.photo.slice(1)))).toBe(true);
  });

  it('WhatsApp Lead Developer tercatat di kartunya sendiri', () => {
    expect(AUTHOR.whatsappUrl).toBe('https://wa.me/6285691620000');
  });

  it('tidak ada label hubungan keluarga di profil maupun kartu prestasi', () => {
    expect(FOUNDER.family).toBeUndefined();
    expect(AUTHOR.family).toBeUndefined();
    expect(PRESTASI_DATA.every((i) => !('relation' in i))).toBe(true);
  });
});
