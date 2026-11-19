import { kelas } from './author.js';
import bab1 from './kelas12/bab1-pertumbuhan-perkembangan-dan-metabolisme.js';
import bab2 from './kelas12/bab2-substansi-genetik-dan-pembelahan-sel.js';
import bab3 from './kelas12/bab3-hukum-mendel-dan-hereditas-manusia.js';
import bab4 from './kelas12/bab4-evolusi-dan-bioteknologi.js';

/** Biologi Kelas 12 SMA (Fase F), selaras dengan Kurikulum Merdeka CP 046/2025. */
export const biologiGrade12Data = kelas({
  grade: 12,
  description: 'Pertumbuhan & Metabolisme Sel, Substansi Genetik & Pembelahan Sel, Hukum Mendel & Hereditas Manusia, serta Evolusi & Bioteknologi Modern',
  chapters: [bab1, bab2, bab3, bab4]
});
