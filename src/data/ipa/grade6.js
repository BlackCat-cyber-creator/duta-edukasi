import { kelas } from './author.js';
import bab1 from './kelas6/bab1-rangka-dan-mekanika-gerak-tubuh.js';
import bab2 from './kelas6/bab2-penghematan-dan-energi-alternatif.js';
import bab3 from './kelas6/bab3-sistem-tata-surya.js';
import bab4 from './kelas6/bab4-rotasi-revolusi-bumi-dan-gerhana.js';

/** IPA Kelas 6 SD (Fase C), penekanan fisika, mekanika, energi, dan astronomi sesuai CP 046/2025. */
export const ipaGrade6Data = kelas({
  grade: 6,
  description: 'Rangka, Otot, dan Mekanika Gerak Tubuh, Efisiensi Energi dan Energi Terbarukan, Sistem Tata Surya dan Karakteristik Planet, serta Rotasi, Revolusi Bumi, dan Gerhana',
  chapters: [bab1, bab2, bab3, bab4]
});
