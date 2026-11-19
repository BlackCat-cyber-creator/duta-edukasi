import { kelas } from './author.js';
import bab1 from './kelas11/bab1-hidrokarbon-dan-minyak-bumi.js';
import bab2 from './kelas11/bab2-termokimia.js';
import bab3 from './kelas11/bab3-laju-reaksi.js';
import bab4 from './kelas11/bab4-kesetimbangan-kimia.js';
import bab5 from './kelas11/bab5-asam-basa-buffer-dan-hidrolisis.js';

/** Kimia Kelas 11 SMA (Fase F), selaras dengan Kurikulum Merdeka CP 046/2025. */
export const kimiaGrade11Data = kelas({
  grade: 11,
  description: 'Senyawa Hidrokarbon & Minyak Bumi, Termokimia & Hukum Hess, Laju Reaksi, Kesetimbangan Kimia, serta Larutan Asam\u2013Basa, Penyangga & Hidrolisis',
  chapters: [bab1, bab2, bab3, bab4, bab5]
});
