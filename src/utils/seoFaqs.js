/**
 * Sumber tunggal FAQ untuk UI React dan HTML hasil prerender (`scripts/prerender.mjs`).
 * Menjamin kepatuhan penuh terhadap pedoman Google: setiap pertanyaan & jawaban pada
 * JSON-LD `FAQPage` selalu tampil terlihat di DOM halaman yang sama.
 */
import { SITE_NAME } from './seoRoutes.js';

export const PAPERS_HUB_FAQS = [
  {
    question: 'Apa itu Paket Soal Terstruktur Duta e-dukasi?',
    answer:
      'Paket Soal Terstruktur adalah kumpulan soal pilihan ganda, isian, dan uraian bertahap lengkap dengan kunci jawaban, prinsip konsep utama, pembahasan langkah demi langkah, dan rubrik penilaian mandiri.'
  },
  {
    question: 'Apakah tersedia paket soal olimpiade dan soal berbahasa Inggris?',
    answer:
      'Ya, tersedia paket OSN-K/OSN-P (9 bidang), AMC 8/10/12 & AIME, SASMO, SMO Singapore, HKIMO, TIMO, SIMOC, IKMC, KSM, KMNR, UTBK-SNBT, serta Cambridge IGCSE 0580 dalam bahasa aslinya.'
  },
  {
    question: 'Apakah semua paket soal di Duta e-dukasi dapat diakses dan dicetak gratis?',
    answer:
      'Seluruh paket soal, kunci jawaban, pembahasan, dan fitur cetak LKPD ber-QR dapat diakses gratis tanpa login dan dibagikan di bawah lisensi terbuka CC BY 4.0.'
  }
];

export const ENGLISH_PAPERS_HUB_FAQS = [
  {
    question: 'Which international competitions and syllabi are included in the English Practice Hub?',
    answer:
      'The English Practice Hub features AMC 8/10/12, AIME, SASMO, SMO Singapore, HKIMO, TIMO, SIMOC, IKMC/Kangaroo, AMO, ASMOPSS, IMSO, CEMC Waterloo (Gauss, Pascal, Cayley, Fermat, Euclid, BCC), and Cambridge IGCSE / Edexcel-style math and science papers.'
  },
  {
    question: 'Do all English practice papers include step-by-step solutions and marking rubrics?',
    answer:
      'Yes. Every question includes the exact answer key, core mathematical or scientific principle, full step-by-step solution, and a self-scoring rubric (B1/M1/A1) accessible for free without registration.'
  }
];

export const OLIMPIADE_HUB_FAQS = [
  {
    question: 'Kompetisi olimpiade apa saja yang tersedia di Duta e-dukasi?',
    answer:
      'Tersedia latihan soal dan pembahasan OSN/OSK/OSN-P (9 bidang: Matematika, IPA, Fisika, Kimia, Biologi, Informatika, Astronomi, Kebumian, dan Ekonomi), AMC 8/10/12 & AIME (termasuk 36 bab modul konsep), SASMO, SMO Singapore, HKIMO, TIMO, SIMOC, IKMC/Kangaroo, AMO, ASMOPSS, IMSO, CEMC Waterloo, KSM, KMNR, OMVN, serta Seri Pembinaan OSN.'
  },
  {
    question: 'Apakah seluruh pembahasan soal olimpiade dapat diakses gratis?',
    answer:
      'Ya, seluruh paket soal dan pembahasan di halaman Olimpiade Duta e-dukasi terbuka gratis tanpa perlu login dan berlisensi CC BY 4.0.'
  }
];

export const TKA_HUB_FAQS = [
  {
    question: 'Apa itu Latihan TKA Duta e-dukasi?',
    answer:
      'Latihan TKA (Tes Kemampuan Akademik) berisi 30 soal pilihan ganda per paket (Paket A dan Paket B) yang disusun sesuai elemen asesmen Pusmendik untuk Matematika SD/SMP, IPA SMP, dan Fisika SMA.'
  },
  {
    question: 'Apakah paket latihan TKA disertai kunci jawaban dan pembahasan?',
    answer:
      'Ya, setiap soal pada Paket A dan Paket B memiliki kunci jawaban serta pembahasan langkah demi langkah yang dapat dibuka langsung atau dicetak ke lembar kerja A4.'
  }
];

export const FORMULA_INDEX_FAQS = [
  {
    question: 'Mata pelajaran apa saja yang tercakup dalam Kumpulan Rumus Duta e-dukasi?',
    answer:
      'Halaman Kumpulan Rumus menghimpun rumus kunci berformat KaTeX dari seluruh bab Matematika (Kelas 4–12), IPA Terpadu (Kelas 4–9), Fisika, Kimia, dan Biologi (Kelas 10–12), serta modul Olimpiade AMC 8/10/12.'
  },
  {
    question: 'Bagaimana cara melihat contoh soal dari rumus yang dicari?',
    answer:
      'Setiap kartu rumus menampilkan tautan langsung menuju bab materinya agar siswa dapat mempelajari penurunan konsep, contoh soal terbimbing, dan kuis latihan interaktif.'
  }
];

const SUBJECT_HUB_FAQS = {
  matematika: [
    {
      question: 'Jenjang apa saja yang tersedia di materi Matematika Duta e-dukasi?',
      answer:
        'Materi Matematika mencakup Kelas 4–6 SD, Kelas 7–9 SMP, dan Kelas 10–12 SMA (Matematika Wajib dan Matematika Tingkat Lanjut) selaras dengan Kurikulum Merdeka CP 046/2025.'
    },
    {
      question: 'Apa saja fitur belajar di setiap bab Matematika?',
      answer:
        'Setiap bab memuat ringkasan konsep terstruktur, rumus kunci KaTeX, contoh soal dan pembahasan, daftar kesalahan umum, kuis interaktif dengan skor otomatis, serta lembar kerja cetak A4.'
    }
  ],
  ipa: [
    {
      question: 'Apakah materi IPA mencakup jenjang SD dan SMP?',
      answer:
        'Ya. Halaman IPA Terpadu mencakup materi lengkap Kelas 4–6 SD dan Kelas 7–9 SMP (pengukuran, zat & kalor, gaya & gerak, gelombang, listrik-magnet, sel, ekologi, hingga tata surya).'
    },
    {
      question: 'Di mana materi IPA untuk jenjang SMA Kelas 10–12?',
      answer:
        'Untuk jenjang SMA Kelas 10–12, materi IPA dipisahkan per rumpun keilmuan menjadi halaman khusus Fisika SMA (/fisika), Kimia SMA (/kimia), dan Biologi SMA (/biologi).'
    }
  ],
  fisika: [
    {
      question: 'Apa cakupan materi Fisika SMA di Duta e-dukasi?',
      answer:
        'Materi Fisika SMA Kelas 10–12 meliputi pengukuran & vektor, kinematika, dinamika Newton, momentum, rotasi, fluida, termodinamika, getaran-gelombang, listrik-magnet, optika, hingga fisika modern.'
    },
    {
      question: 'Apakah tersedia paket soal Fisika ber-rubrik dan latihan TKA Fisika?',
      answer:
        'Ya, tersedia Paket Soal Fisika SMA bergaya Kurikulum Merdeka & Cambridge lengkap rubrik B1/M1/A1 di /paket-soal/fisika serta latihan TKA Fisika SMA di /tka.'
    }
  ],
  kimia: [
    {
      question: 'Topik apa saja yang dibahas dalam materi Kimia SMA?',
      answer:
        'Materi Kimia Kelas 10–12 membahas struktur atom, ikatan kimia, stoikiometri, termokimia, laju reaksi, kesetimbangan kimia, asam-basa, redoks & elektrokimia, serta kimia organik dan unsur.'
    },
    {
      question: 'Apakah tersedia latihan soal Kimia untuk persiapan ujian dan OSN?',
      answer:
        'Ya, selain kuis interaktif di tiap bab, tersedia paket soal latihan Kimia dan Cambridge Chemistry di /paket-soal/kimia serta arsip OSN Kimia di /paket-soal/olimpiade-kim.'
    }
  ],
  biologi: [
    {
      question: 'Apa cakupan materi Biologi SMA Kelas 10–12 di Duta e-dukasi?',
      answer:
        'Materi Biologi SMA meliputi keanekaragaman hayati, virus & mikroorganisme, struktur sel & transpor membran, jaringan, sistem organ manusia, metabolisme, genetika, evolusi, dan bioteknologi.'
    },
    {
      question: 'Bagaimana cara berlatih soal Biologi dan OSN Biologi?',
      answer:
        'Setiap bab dilengkapi kuis diagnostik beserta pembahasan. Paket soal tematik tersedia di /paket-soal/biologi dan paket OSN Biologi di /paket-soal/olimpiade-bio.'
    }
  ]
};

export function getSubjectHubFaqs(subject) {
  return SUBJECT_HUB_FAQS[subject] || [];
}

export function getPaperFaqs(paper, info) {
  if (!paper) return [];
  const items = info?.items ?? 0;
  if (paper.lang === 'en') {
    return [
      {
        question: `How many questions are included in ${paper.title}?`,
        answer: `${paper.title} contains ${items} structured problems covering ${paper.topic} for Grade ${paper.grade}.`
      },
      {
        question: 'Are answers, step-by-step solutions, and marking rubrics included for free?',
        answer: `Yes. Every question in ${paper.title} includes the final answer key, core mathematical or scientific principle, step-by-step solution, and grading rubric free on ${SITE_NAME}, plus a printable worksheet QR view.`
      }
    ];
  }
  return [
    {
      question: `Berapa jumlah soal dan materi pada ${paper.title}?`,
      answer: `${paper.title} berisi ${items} butir soal terstruktur untuk Kelas ${paper.grade} dengan cakupan: ${paper.topic}.`
    },
    {
      question: 'Apakah kunci jawaban, pembahasan bertahap, dan rubrik penilaiannya gratis?',
      answer: `Ya. Seluruh soal dilengkapi kunci jawaban, prinsip konsep utama, pembahasan langkah demi langkah, rubrik penilaian, serta versi cetak LKPD ber-QR secara gratis di ${SITE_NAME}.`
    }
  ];
}
