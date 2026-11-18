/**
 * Latihan TKA (Tes Kemampuan Akademik) Matematika SD/MI dan SMP/MTs.
 * Muatan dan matriks asesmen dikutip dari kerangka TKA Pusmendik
 * (pusmendik.kemendikdasmen.go.id/tka), sebagaimana dimuat ulang di defantri.com,
 * karena situs Pusmendik tidak dapat diakses dari server pembuat (Oktober 2026).
 *
 * Soal paket diambil dari bank soal bab (tingkat Sedang & Tantangan), dikelompokkan per
 * elemen TKA. Paket A dan B tidak berbagi soal. Penyusunnya: src/utils/tkaBuilder.js.
 */

export const TKA_TESTS = [
  {
    id: 'matematika-smp',
    title: 'TKA Matematika SMP/MTs',
    audience: 'Murid Kelas 9 SMP/MTs',
    grades: [7, 8, 9],
    intro: 'TKA Matematika SMP/MTs mengukur kemampuan memahami fakta, konsep, prinsip, dan prosedur matematika, serta menerapkannya untuk menyelesaikan masalah. Soal dapat berupa konteks matematika atau konteks keseharian (personal, keluarga, dan lingkungan sekitar).',
    elements: [
      {
        name: 'Bilangan',
        scope: 'Perbandingan dan sifat bilangan, operasi aritmetika, estimasi, faktorisasi prima, rasio (skala, proporsi, laju perubahan), perbandingan senilai dan berbalik nilai.',
        quota: 8,
        chapters: ['smp7-bab1-bilangan-bulat', 'smp7-bab2-bilangan-rasional', 'smp7-bab3-rasio', 'smp8-bab1-bilangan-berpangkat']
      },
      {
        name: 'Aljabar',
        scope: 'Persamaan dan pertidaksamaan linear satu variabel, sistem persamaan linear dua variabel, bentuk aljabar dan sifat operasinya, relasi dan fungsi.',
        quota: 8,
        chapters: ['smp7-bab4-bentuk-aljabar', 'smp8-bab3-persamaan-pertidaksamaan-linear', 'smp8-bab4-relasi-fungsi', 'smp8-bab5-persamaan-garis-lurus', 'smp9-bab1-spldv']
      },
      {
        name: 'Geometri dan Pengukuran',
        scope: 'Hubungan antarsudut, teorema Pythagoras, kekongruenan dan kesebangunan, jaring-jaring bangun ruang, transformasi tunggal, keliling dan luas bangun datar, volume bangun ruang.',
        quota: 8,
        chapters: ['smp7-bab5-kesebangunan', 'smp8-bab2-teorema-pythagoras', 'smp9-bab2-bangun-ruang', 'smp9-bab3-transformasi-geometri']
      },
      {
        name: 'Data dan Peluang',
        scope: 'Penyajian dan interpretasi data; rerata, median, modus, dan jangkauan; perbandingan kelompok data; peluang.',
        quota: 6,
        chapters: ['smp7-bab6-data-diagram', 'smp8-bab6-statistika', 'smp9-bab4-peluang-sampel']
      }
    ]
  },
  {
    id: 'matematika-sd',
    title: 'TKA Matematika SD/MI',
    audience: 'Murid Kelas 6 SD/MI',
    grades: [4, 5, 6],
    intro: 'TKA Matematika SD/MI mengukur pemahaman dan penerapan matematika pada tiga elemen: bilangan, geometri dan pengukuran, serta data. Soal disajikan dalam konteks matematika maupun kehidupan sehari-hari.',
    elements: [
      {
        name: 'Bilangan',
        scope: 'Pecahan senilai, membandingkan dan mengurutkan pecahan, pecahan–desimal–persen, operasi bilangan cacah dan pecahan, kelipatan, faktor, KPK, dan FPB.',
        quota: 12,
        chapters: [
          'sd4-bab1-bilangan-cacah', 'sd4-bab2-pecahan', 'sd5-bab1-bilangan-cacah-100k', 'sd5-bab2-kpk-fpb',
          'sd5-bab3-bilangan-pecahan', 'sd5-bab9-cacah-satu-juta', 'sd6-bab1-pecahan-desimal'
        ]
      },
      {
        name: 'Geometri dan Pengukuran',
        scope: 'Bentuk bangun datar, bangun ruang dan visualisasi spasial, satuan baku panjang–volume–berat–waktu, kecepatan, keliling dan luas bangun datar, volume kubus dan balok, besar sudut.',
        quota: 12,
        chapters: [
          'sd4-bab4-luas-volume', 'sd4-bab5-bangun-datar', 'sd5-bab4-keliling-bangun-datar', 'sd5-bab5-luas-daerah-bangun-datar',
          'sd5-bab6-sudut', 'sd5-bab7-membandingkan-bangun-datar', 'sd6-bab3-kubus-balok'
        ]
      },
      {
        name: 'Data',
        scope: 'Penyajian data (gambar, piktogram, diagram batang, tabel frekuensi), pengambilan informasi, dan penggunaan data.',
        quota: 6,
        chapters: ['sd4-bab6-piktogram-diagram-batang', 'sd5-bab8-data']
      }
    ]
  },
  {
    id: 'ipa-smp',
    subject: 'ipa',
    title: 'TKA IPA & Fisika SMP/MTs',
    audience: 'Murid Kelas 9 SMP/MTs',
    grades: [7, 8, 9],
    intro: 'Latihan TKA IPA SMP/MTs mengukur pemahaman konsep fisika, kimia, biologi, serta bumi dan antariksa beserta penerapannya dalam kehidupan sehari-hari sesuai CP Fase D.',
    elements: [
      {
        name: 'Energi, Gerak, dan Kelistrikan',
        scope: 'Suhu dan kalor, gerak dan gaya, usaha–energi dan pesawat sederhana, getaran–gelombang–cahaya, tekanan, serta listrik dan magnet.',
        quota: 10,
        chapters: [
          'ipa7-bab3-suhu-kalor-pemuaian', 'ipa7-bab4-gerak-dan-gaya', 'ipa8-bab3-usaha-energi-pesawat-sederhana',
          'ipa8-bab4-getaran-gelombang-cahaya', 'ipa9-bab3-tekanan', 'ipa9-bab4-listrik-magnet-energi-alternatif'
        ]
      },
      {
        name: 'Zat, Pengukuran, dan Reaksi Kimia',
        scope: 'Metode ilmiah dan pengukuran, wujud dan massa jenis zat, unsur–senyawa–campuran, asam–basa, dan reaksi kimia.',
        quota: 6,
        chapters: ['ipa7-bab1-hakikat-ilmu-sains', 'ipa7-bab2-zat-dan-perubahannya', 'ipa8-bab5-unsur-senyawa-campuran', 'ipa9-bab5-reaksi-kimia']
      },
      {
        name: 'Makhluk Hidup dan Lingkungannya',
        scope: 'Klasifikasi, ekologi, sel, sistem organ, pertumbuhan, koordinasi–reproduksi, pewarisan sifat, bioteknologi, dan isu lingkungan.',
        quota: 8,
        chapters: [
          'ipa7-bab5-klasifikasi-makhluk-hidup', 'ipa7-bab6-ekologi-keanekaragaman-hayati', 'ipa8-bab1-sel',
          'ipa8-bab2-struktur-fungsi-tubuh', 'ipa9-bab1-pertumbuhan-perkembangan', 'ipa9-bab2-koordinasi-reproduksi-homeostasis',
          'ipa9-bab6-pewarisan-sifat-bioteknologi', 'ipa9-bab7-isu-lingkungan'
        ]
      },
      {
        name: 'Bumi dan Antariksa',
        scope: 'Sistem tata surya, rotasi–revolusi, struktur bumi, gempa bumi, dan gunung berapi.',
        quota: 6,
        chapters: ['ipa7-bab7-bumi-dan-tata-surya', 'ipa8-bab6-struktur-bumi']
      }
    ]
  },
  {
    id: 'fisika-sma',
    subject: 'ipa',
    title: 'TKA Fisika SMA/MA',
    audience: 'Murid Kelas 12 SMA/MA',
    grades: [10, 11, 12],
    intro: 'Latihan TKA Fisika SMA/MA menguji penguasaan konsep, penalaran kuantitatif, dan analisis fenomena mekanika, fluida, gelombang–optika, termodinamika, listrik–magnet, hingga fisika modern sesuai CP Fase E dan F.',
    elements: [
      {
        name: 'Pengukuran, Mekanika, dan Fluida',
        scope: 'Pengukuran dan angka penting, vektor, kinematika 1D/2D, dinamika Newton, usaha–energi, momentum–tumbukan, dinamika rotasi, dan fluida statis–dinamis.',
        quota: 12,
        chapters: [
          'ipa10-bab1-hakikat-fisika-dan-pengukuran', 'ipa10-bab2-vektor-dan-gerak-lurus', 'ipa10-bab3-gerak-parabola-dan-melingkar',
          'ipa10-bab4-usaha-energi-dan-energi-terbarukan', 'ipa11-bab1-dinamika-gerak-dan-hukum-newton',
          'ipa11-bab2-momentum-impuls-dan-tumbukan', 'ipa11-bab3-dinamika-rotasi-dan-kesetimbangan', 'ipa11-bab4-fluida-statis-dan-dinamis'
        ]
      },
      {
        name: 'Gelombang, Optika, dan Termodinamika',
        scope: 'Getaran harmonik, gelombang mekanik dan bunyi, kalor dan radiasi iklim, teori kinetik gas, termodinamika, serta gelombang elektromagnetik dan optika.',
        quota: 8,
        chapters: [
          'ipa10-bab5-pemanasan-global-dan-fisika-iklim', 'ipa11-bab5-getaran-gelombang-dan-bunyi',
          'ipa11-bab6-kalor-dan-termodinamika', 'ipa12-bab5-gelombang-elektromagnetik-dan-optika'
        ]
      },
      {
        name: 'Listrik, Magnet, dan Fisika Modern',
        scope: 'Listrik statis dan kapasitor, arus searah (Kirchhoff), medan magnet dan induksi elektromagnetik, rangkaian AC, serta fisika modern dan teknologi digital.',
        quota: 10,
        chapters: [
          'ipa12-bab1-listrik-statis-dan-kapasitor', 'ipa12-bab2-listrik-arus-searah',
          'ipa12-bab3-medan-magnet-dan-induksi-elektromagnetik', 'ipa12-bab4-rangkaian-arus-bolak-balik',
          'ipa12-bab6-fisika-modern-radioaktivitas-dan-digital'
        ]
      }
    ]
  }
];

export const TKA_PACKETS = ['a', 'b'];

/** "matematika-smp-a" → { test, packet } */
export function parseTkaSlug(slug) {
  const m = String(slug || '').match(/^(.+)-([ab])$/);
  if (!m) return null;
  const test = TKA_TESTS.find((t) => t.id === m[1]);
  return test ? { test, packet: m[2] } : null;
}

export const tkaPath = (testId, packet) => (testId ? `/tka/${testId}-${packet}` : '/tka');
