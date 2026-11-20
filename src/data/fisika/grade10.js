import { kelas } from './author.js';
import bab1 from './kelas10/bab1-hakikat-fisika-dan-pengukuran.js';
import bab2 from './kelas10/bab2-vektor-dan-gerak-lurus.js';
import bab3 from './kelas10/bab3-gerak-parabola-dan-melingkar.js';
import bab4 from './kelas10/bab4-usaha-energi-dan-energi-terbarukan.js';
import bab5 from './kelas10/bab5-pemanasan-global-dan-fisika-iklim.js';

/** Fisika / IPA Kelas 10 SMA (Fase E), selaras dengan Kurikulum Merdeka CP 046/2025. */
export const fisikaGrade10Data = kelas({
  grade: 10,
  description: 'Hakikat Fisika dan Pengukuran, Vektor dan Kinematika Gerak Lurus, Gerak Parabola dan Melingkar, Usaha Energi dan Energi Terbarukan, serta Kalor Radiasi dan Perubahan Iklim',
  chapters: [bab1, bab2, bab3, bab4, bab5]
});
