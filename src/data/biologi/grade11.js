import { kelas } from './author.js';
import bab1 from './kelas11/bab1-sel-dan-bioproses-membran.js';
import bab2 from './kelas11/bab2-jaringan-tumbuhan-dan-hewan.js';
import bab3 from './kelas11/bab3-sistem-gerak-sirkulasi-dan-pencernaan.js';
import bab4 from './kelas11/bab4-sistem-respirasi-ekskresi-dan-koordinasi.js';
import bab5 from './kelas11/bab5-sistem-imun-dan-reproduksi.js';

/** Biologi Kelas 11 SMA (Fase F), selaras dengan Kurikulum Merdeka CP 046/2025. */
export const biologiGrade11Data = kelas({
  grade: 11,
  description: 'Struktur Sel & Transpor Membran, Jaringan Tumbuhan & Hewan, Sistem Gerak–Sirkulasi–Pencernaan, Sistem Respirasi–Ekskresi–Koordinasi, serta Imunitas & Reproduksi',
  chapters: [bab1, bab2, bab3, bab4, bab5]
});
