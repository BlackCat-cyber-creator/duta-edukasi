import { kelas } from './author.js';
import bab1 from './kelas12/bab1-sifat-koligatif-larutan.js';
import bab2 from './kelas12/bab2-redoks-dan-elektrokimia.js';
import bab3 from './kelas12/bab3-kimia-unsur.js';
import bab4 from './kelas12/bab4-senyawa-karbon-dan-makromolekul.js';

/** Kimia Kelas 12 SMA (Fase F), selaras dengan Kurikulum Merdeka CP 046/2025. */
export const kimiaGrade12Data = kelas({
  grade: 12,
  description: 'Sifat Koligatif Larutan, Reaksi Redoks & Sel Elektrokimia, Kimia Unsur, serta Senyawa Karbon Gugus Fungsi & Makromolekul',
  chapters: [bab1, bab2, bab3, bab4]
});
