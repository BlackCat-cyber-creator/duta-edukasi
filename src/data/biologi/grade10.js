import { kelas } from './author.js';
import bab1 from './kelas10/bab1-keanekaragaman-hayati-dan-klasifikasi.js';
import bab2 from './kelas10/bab2-virus-bakteri-dan-protista.js';
import bab3 from './kelas10/bab3-fungi-plantae-dan-animalia.js';
import bab4 from './kelas10/bab4-ekosistem-dan-perubahan-lingkungan.js';

/** Biologi Kelas 10 SMA (Fase E), selaras dengan Kurikulum Merdeka CP 046/2025. */
export const biologiGrade10Data = kelas({
  grade: 10,
  description: 'Keanekaragaman Hayati & Klasifikasi, Virus–Bakteri–Protista, Fungi–Plantae–Animalia, serta Ekosistem & Perubahan Lingkungan',
  chapters: [bab1, bab2, bab3, bab4]
});
