import { kelas } from './author.js';
import bab1 from './kelas5/bab1-cahaya-dan-sifatnya.js';
import bab2 from './kelas5/bab2-bunyi-dan-pendengaran.js';
import bab3 from './kelas5/bab3-listrik-dan-magnet-sederhana.js';
import bab4 from './kelas5/bab4-ekosistem-dan-siklus-air.js';

/** IPA Kelas 5 (Fase C), selaras dengan CP 046/2025 IPAS SD. */
export const ipaGrade5Data = kelas({
  grade: 5,
  description: 'Cahaya dan Alat Optik Sederhana, Bunyi dan Indra Pendengaran, Listrik dan Magnet dalam Kehidupan, serta Ekosistem, Aliran Energi, dan Siklus Air',
  chapters: [bab1, bab2, bab3, bab4]
});
