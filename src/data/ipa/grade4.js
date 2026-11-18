import { kelas } from './author.js';
import bab1 from './kelas4/bab1-wujud-zat-dan-perubahannya.js';
import bab2 from './kelas4/bab2-gaya-di-sekitar-kita.js';
import bab3 from './kelas4/bab3-energi-dan-perubahannya.js';
import bab4 from './kelas4/bab4-pancaindra-dan-pengamatan-ilmiah.js';

/** IPA Kelas 4 SD (Fase B), selaras dengan CP 046/2025 IPAS Fase B. */
export const ipaGrade4Data = kelas({
  grade: 4,
  description: 'Wujud Zat dan Perubahannya, Gaya di Sekitar Kita, Sumber dan Perubahan Bentuk Energi, serta Pancaindra dan Pengamatan Ilmiah',
  chapters: [bab1, bab2, bab3, bab4]
});
