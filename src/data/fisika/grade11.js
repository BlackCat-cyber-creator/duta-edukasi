import { kelas } from './author.js';
import bab1 from './kelas11/bab1-dinamika-gerak-dan-hukum-newton.js';
import bab2 from './kelas11/bab2-momentum-impuls-dan-tumbukan.js';
import bab3 from './kelas11/bab3-dinamika-rotasi-dan-kesetimbangan.js';
import bab4 from './kelas11/bab4-fluida-statis-dan-dinamis.js';
import bab5 from './kelas11/bab5-getaran-gelombang-dan-bunyi.js';
import bab6 from './kelas11/bab6-kalor-dan-termodinamika.js';

/** Fisika Kelas 11 SMA (Fase F), Kurikulum Merdeka CP 046/2025. */
export const fisikaGrade11Data = kelas({
  grade: 11,
  description: 'Dinamika Partikel dan Hukum Newton, Momentum dan Tumbukan, Dinamika Rotasi dan Kesetimbangan Benda Tegar, Mekanika Fluida, Getaran Harmonik dan Gelombang Bunyi, serta Kalor dan Termodinamika',
  chapters: [bab1, bab2, bab3, bab4, bab5, bab6]
});
