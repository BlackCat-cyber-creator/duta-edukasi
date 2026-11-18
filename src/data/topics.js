/**
 * Pengelompokan bab per topik (seperti "Daftar Isi Blog" per topik di mathcyber1997),
 * dipakai halaman /daftar-isi, bagian "Materi terkait" di setiap bab, dan paket TKA.
 * Topik Matematika mengikuti elemen CP 046/2025; topik IPA mengikuti bidang ilmunya.
 * Bab baru WAJIB didaftarkan di sini (dijaga oleh tests/topics.test.js).
 */

export const MATH_TOPICS = [
  {
    id: 'bilangan',
    name: 'Bilangan',
    description: 'Bilangan cacah, pecahan, desimal, bilangan bulat dan rasional, KPK–FPB, rasio, pangkat, dan logaritma.',
    chapters: [
      'sd4-bab1-bilangan-cacah', 'sd5-bab1-bilangan-cacah-100k', 'sd5-bab9-cacah-satu-juta',
      'sd4-bab2-pecahan', 'sd5-bab3-bilangan-pecahan', 'sd6-bab1-pecahan-desimal',
      'sd5-bab2-kpk-fpb', 'sd6-bab2-rasio',
      'smp7-bab1-bilangan-bulat', 'smp7-bab2-bilangan-rasional', 'smp7-bab3-rasio',
      'smp8-bab1-bilangan-berpangkat', 'sma10-bab1-eksponen-logaritma', 'sma12-bab2-investasi-pinjaman'
    ]
  },
  {
    id: 'aljabar',
    name: 'Aljabar dan Fungsi',
    description: 'Pola bilangan, bentuk aljabar, persamaan dan pertidaksamaan, fungsi, persamaan garis, barisan dan deret.',
    chapters: [
      'sd4-bab3-pola-gambar-bilangan', 'smp7-bab4-bentuk-aljabar',
      'smp8-bab3-persamaan-pertidaksamaan-linear', 'smp9-bab1-spldv', 'sma10-bab5-spltv-sptldv',
      'smp8-bab4-relasi-fungsi', 'smp8-bab5-persamaan-garis-lurus', 'sma10-bab6-fungsi-kuadrat', 'sma11-bab1-fungsi-invers',
      'sma10-bab2-barisan-deret', 'sma12-bab1-barisan-deret'
    ]
  },
  {
    id: 'geometri',
    name: 'Geometri dan Pengukuran',
    description: 'Bangun datar dan ruang, keliling, luas, volume, sudut, Pythagoras, kesebangunan, transformasi, vektor, trigonometri, dan lingkaran.',
    chapters: [
      'sd4-bab4-luas-volume', 'sd4-bab5-bangun-datar', 'sd5-bab4-keliling-bangun-datar', 'sd5-bab5-luas-daerah-bangun-datar',
      'sd5-bab6-sudut', 'sd5-bab7-membandingkan-bangun-datar', 'sd6-bab3-kubus-balok',
      'smp7-bab5-kesebangunan', 'smp8-bab2-teorema-pythagoras', 'smp9-bab2-bangun-ruang', 'smp9-bab3-transformasi-geometri',
      'sma10-bab3-vektor', 'sma10-bab4-trigonometri', 'sma11-bab2-lingkaran', 'sma12-bab6-transformasi'
    ]
  },
  {
    id: 'data-peluang',
    name: 'Data dan Peluang',
    description: 'Piktogram, diagram, statistika, peluang, kaidah pencacahan, dan statistika inferensi.',
    chapters: [
      'sd4-bab6-piktogram-diagram-batang', 'sd5-bab8-data', 'smp7-bab6-data-diagram', 'smp8-bab6-statistika',
      'sma10-bab7-statistika', 'sma11-bab3-statistika-bivariat', 'sma12-bab5-statistika-inferensi',
      'sd6-bab4-peluang', 'smp9-bab4-peluang-sampel', 'sma10-bab8-peluang', 'sma12-bab3-kaidah-pencacahan', 'sma12-bab4-peluang'
    ]
  },
  {
    id: 'kalkulus',
    name: 'Kalkulus',
    description: 'Limit, turunan, dan integral fungsi aljabar (Matematika Tingkat Lanjut).',
    chapters: ['sma11-bab4-limit', 'sma11-bab5-turunan', 'sma11-bab6-integral']
  }
];

export const IPA_TOPICS = [
  {
    id: 'kerja-ilmiah',
    name: 'Kerja Ilmiah dan Pengukuran',
    description: 'Pancaindra dan pengamatan ilmiah, metode ilmiah, variabel percobaan, keselamatan laboratorium, besaran, satuan, dimensi, angka penting, dan alat ukur.',
    chapters: [
      'ipa4-bab4-pancaindra-dan-pengamatan-ilmiah',
      'ipa7-bab1-hakikat-ilmu-sains',
      'ipa10-bab1-hakikat-fisika-dan-pengukuran'
    ]
  },
  {
    id: 'fisika',
    name: 'Fisika: Mekanika, Fluida, Kalor, Gelombang, Optika, Listrik–Magnet & Modern',
    description: 'Gaya, energi, cahaya, bunyi, pesawat sederhana, mekanika gerak dan rotasi, fluida, termodinamika, listrik-magnet, optika, serta fisika modern dan teknologi digital.',
    chapters: [
      'ipa4-bab2-gaya-di-sekitar-kita', 'ipa4-bab3-energi-dan-perubahannya',
      'ipa5-bab1-cahaya-dan-sifatnya', 'ipa5-bab2-bunyi-dan-pendengaran', 'ipa5-bab3-listrik-dan-magnet-sederhana',
      'ipa6-bab2-penghematan-dan-energi-alternatif',
      'ipa7-bab3-suhu-kalor-pemuaian', 'ipa7-bab4-gerak-dan-gaya',
      'ipa8-bab3-usaha-energi-pesawat-sederhana', 'ipa8-bab4-getaran-gelombang-cahaya',
      'ipa9-bab3-tekanan', 'ipa9-bab4-listrik-magnet-energi-alternatif',
      'ipa10-bab2-vektor-dan-gerak-lurus', 'ipa10-bab3-gerak-parabola-dan-melingkar',
      'ipa10-bab4-usaha-energi-dan-energi-terbarukan', 'ipa10-bab5-pemanasan-global-dan-fisika-iklim',
      'ipa11-bab1-dinamika-gerak-dan-hukum-newton', 'ipa11-bab2-momentum-impuls-dan-tumbukan',
      'ipa11-bab3-dinamika-rotasi-dan-kesetimbangan', 'ipa11-bab4-fluida-statis-dan-dinamis',
      'ipa11-bab5-getaran-gelombang-dan-bunyi', 'ipa11-bab6-kalor-dan-termodinamika',
      'ipa12-bab1-listrik-statis-dan-kapasitor', 'ipa12-bab2-listrik-arus-searah',
      'ipa12-bab3-medan-magnet-dan-induksi-elektromagnetik', 'ipa12-bab4-rangkaian-arus-bolak-balik',
      'ipa12-bab5-gelombang-elektromagnetik-dan-optika', 'ipa12-bab6-fisika-modern-radioaktivitas-dan-digital'
    ]
  },
  {
    id: 'kimia',
    name: 'Kimia: Zat dan Perubahannya',
    description: 'Wujud dan massa jenis zat, unsur–senyawa–campuran, asam–basa, dan reaksi kimia.',
    chapters: [
      'ipa4-bab1-wujud-zat-dan-perubahannya',
      'ipa7-bab2-zat-dan-perubahannya', 'ipa8-bab5-unsur-senyawa-campuran', 'ipa9-bab5-reaksi-kimia'
    ]
  },
  {
    id: 'biologi',
    name: 'Biologi: Makhluk Hidup dan Lingkungannya',
    description: 'Ekosistem, rangka dan gerak tubuh, klasifikasi, sel, sistem organ, pertumbuhan, reproduksi, pewarisan sifat, bioteknologi, dan isu lingkungan.',
    chapters: [
      'ipa5-bab4-ekosistem-dan-siklus-air', 'ipa6-bab1-rangka-dan-mekanika-gerak-tubuh',
      'ipa7-bab5-klasifikasi-makhluk-hidup', 'ipa7-bab6-ekologi-keanekaragaman-hayati', 'ipa8-bab1-sel',
      'ipa8-bab2-struktur-fungsi-tubuh', 'ipa9-bab1-pertumbuhan-perkembangan', 'ipa9-bab2-koordinasi-reproduksi-homeostasis',
      'ipa9-bab6-pewarisan-sifat-bioteknologi', 'ipa9-bab7-isu-lingkungan'
    ]
  },
  {
    id: 'bumi',
    name: 'Bumi dan Antariksa',
    description: 'Tata surya, rotasi–revolusi, gerhana, struktur bumi, gempa, gunung api, dan batuan.',
    chapters: [
      'ipa6-bab3-sistem-tata-surya', 'ipa6-bab4-rotasi-revolusi-bumi-dan-gerhana',
      'ipa7-bab7-bumi-dan-tata-surya', 'ipa8-bab6-struktur-bumi'
    ]
  }
];

export const TOPIC_GROUPS = [
  { subject: 'matematika', name: 'Matematika', topics: MATH_TOPICS },
  { subject: 'ipa', name: 'IPA', topics: IPA_TOPICS }
];

const TOPIC_OF = new Map(
  [...MATH_TOPICS, ...IPA_TOPICS].flatMap((t) => t.chapters.map((id) => [id, t]))
);

export function topicOfChapter(chapterId) {
  return TOPIC_OF.get(chapterId) || null;
}

/** Bab lain dalam topik yang sama (urut kelas), tanpa bab itu sendiri. */
export function relatedChapterIds(chapterId, limit = 6) {
  const topic = topicOfChapter(chapterId);
  if (!topic) return [];
  return topic.chapters.filter((id) => id !== chapterId).slice(0, limit);
}
