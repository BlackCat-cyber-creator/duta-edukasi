import { kelas } from './author.js';
import bab1 from './kelas10/bab1-hakikat-kimia-dan-struktur-atom.js';
import bab2 from './kelas10/bab2-sistem-periodik-unsur.js';
import bab3 from './kelas10/bab3-ikatan-kimia-dan-bentuk-molekul.js';
import bab4 from './kelas10/bab4-hukum-dasar-dan-stoikiometri.js';

/** Kimia Kelas 10 SMA (Fase E), fondasi Kurikulum Merdeka CP 046/2025. */
export const kimiaGrade10Data = kelas({
  grade: 10,
  description: 'Hakikat Kimia & Struktur Atom, Sistem Periodik Unsur, Ikatan Kimia & Bentuk Molekul, serta Hukum Dasar Kimia & Stoikiometri',
  chapters: [bab1, bab2, bab3, bab4]
});
