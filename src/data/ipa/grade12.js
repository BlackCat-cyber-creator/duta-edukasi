import { kelas } from './author.js';
import bab1 from './kelas12/bab1-listrik-statis-dan-kapasitor.js';
import bab2 from './kelas12/bab2-listrik-arus-searah.js';
import bab3 from './kelas12/bab3-medan-magnet-dan-induksi-elektromagnetik.js';
import bab4 from './kelas12/bab4-rangkaian-arus-bolak-balik.js';
import bab5 from './kelas12/bab5-gelombang-elektromagnetik-dan-optika.js';
import bab6 from './kelas12/bab6-fisika-modern-radioaktivitas-dan-digital.js';

/** Fisika Kelas 12 SMA (Fase F) sesuai Kurikulum Merdeka CP 046/2025. */
export const ipaGrade12Data = kelas({
  grade: 12,
  description: 'Listrik Statis dan Kapasitor, Rangkaian Arus Searah dan Hukum Kirchhoff, Medan Magnet dan Induksi Elektromagnetik, Rangkaian Arus Bolak-Balik, Gelombang Elektromagnetik dan Optika, serta Fisika Modern, Radioaktivitas, dan Teknologi Digital',
  chapters: [bab1, bab2, bab3, bab4, bab5, bab6]
});
