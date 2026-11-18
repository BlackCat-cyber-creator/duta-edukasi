/**
 * Identitas organisasi, pendiri, pembuat situs, program bimbel, dan prestasi siswa.
 * Dipakai bersama oleh UI React dan skrip prerender (`scripts/prerender.mjs`)
 * agar HTML statis, meta tags, JSON-LD, dan UI selalu seragam.
 *
 * Catatan fakta: seluruh data di `FOUNDER` dan `PRESTASI_DATA` bersumber terverifikasi
 * dan disinkronkan dengan `docs/research/prestasi.md`.
 */

export const ORGANIZATION = {
  name: 'Duta e-dukasi',
  legalName: 'Bimbingan Belajar Duta Edukasi',
  alternateName: 'Bimbingan Belajar Duta Edukasi Pontianak',
  tagline: 'Materi, Kuis & Paket Soal Matematika & Fisika — Reguler, Privat & Olimpiade',
  address: {
    streetAddress: 'Jl. Siam No. 37, Benua Melayu Darat',
    addressLocality: 'Pontianak Selatan, Kota Pontianak',
    addressRegion: 'Kalimantan Barat',
    postalCode: '78122',
    addressCountry: 'ID'
  },
  fullAddress: 'Jl. Siam No. 37, Benua Melayu Darat, Kec. Pontianak Selatan, Kota Pontianak, Kalimantan Barat 78122',
  shortAddress: 'Jl. Siam No. 37, Pontianak',
  telephone: '+62-821-5555-7900',
  whatsappDisplay: '082155557900',
  whatsappUrl:
    'https://wa.me/6282155557900?text=Halo%20Duta%20e-dukasi%2C%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan%20belajar%20atau%20privat.',
  mapsUrl: 'https://maps.app.goo.gl/usZPR3tVRJciKsPJ7',
  placeId: '0x2e1d595e7950a9e1:0xed8e2f8a7003020e',
  mapsEmbedQuery: 'Bimbingan+Belajar+Duta+Edukasi+Jl+Siam+No+37+Pontianak',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  licenseName: 'CC BY 4.0',
  sameAs: [
    'https://www.instagram.com/jonoyang78/',
    'https://www.instagram.com/jenovervy/',
    'https://www.instagram.com/jevon.n.shield/',
    'https://maps.app.goo.gl/usZPR3tVRJciKsPJ7'
  ]
};

export const AUTHOR = {
  name: 'Jevon Naldo Yoshield',
  jobTitle: 'Lead Developer Platform Duta e-dukasi, Pengajar Matematika & Fisika, serta Pembina Olimpiade',
  instagramHandle: '@jevon.n.shield',
  instagramUrl: 'https://www.instagram.com/jevon.n.shield/',
  githubUrl: 'https://github.com/BlackCat-cyber-creator',
  websiteUrl: 'https://jevon-one.vercel.app',
  sameAs: [
    'https://www.instagram.com/jevon.n.shield/',
    'https://github.com/BlackCat-cyber-creator',
    'https://jevon-one.vercel.app'
  ],
  bioHighlights: [
    'Lead Developer & Arsitek Platform Digital Duta e-dukasi — merancang portal buku saku interaktif, mesin kuis diagnostik, Studio Guru, lembar kerja cetak ber-QR, dan arsip Paket Soal Terstruktur.',
    'Berlatar belakang kompetisi matematika tingkat sekolah menengah hingga perguruan tinggi (termasuk Finalis Nasional ONMIPA-PT Bidang Matematika dan juara kompetisi matematika tingkat provinsi di Kalimantan Barat).',
    'Fokus mengembangkan teknologi edukasi modern dan sumber belajar terbuka Matematika & Fisika yang terstruktur bagi pelajar, pengajar, serta referensi AI.'
  ]
};

export const FOUNDER = {
  name: 'Jono Yang',
  formalName: 'Jono, S.T.',
  role: 'Pendiri & Pembina Utama Olimpiade Matematika Duta e-dukasi',
  instagramHandle: '@jonoyang78',
  instagramUrl: 'https://www.instagram.com/jonoyang78/',
  youtubeUrl: 'https://www.youtube.com/watch?v=Idcuund-w0Y&t=620s',
  bioHighlights: [
    'Pendiri Bimbingan Belajar Duta Edukasi (Duta e-dukasi) di Pontianak, Kalimantan Barat (kini berlokasi di Jl. Siam No. 37, Pontianak Selatan).',
    'Tercatat dalam SK Penetapan Peserta Nasional Olimpiade Sains Nasional Guru (OSN Guru) 2013 Bidang Matematika SMP di Bandung sebagai guru matematika SMPK Santo Petrus Kota Pontianak, serta terekam dalam wawancara video OSN Guru 2013 Bandung mengenakan medali.',
    'Membina siswa reguler SD–SMA hingga peraih medali tingkat kota, provinsi, nasional (OSN/ONMIPA-PT/OMNAS), maupun internasional (IMSO, SIMOC, Tuymaada, APMO).'
  ],
  credentials: [
    {
      year: '2013',
      title: 'OSN-Guru Bidang Matematika SMP — Tingkat Nasional (Bandung)',
      detail: 'Tercatat sebagai Jono, S.T. (SMPK Santo Petrus Kota Pontianak) peserta tingkat nasional bidang Matematika SMP serta tercantum pada bio resmi @jonoyang78.',
      sourceUrl: 'https://www.instagram.com/jonoyang78/',
      verifiedStatus: 'verified'
    },
    {
      year: '2013',
      title: 'Dokumentasi Wawancara Bermedali OSN Guru 2013 Bandung',
      detail: 'Rekaman video acara resmi Kemendikbud di Bandung (menit 10:20–10:35) menampilkan Jono, S.T. (SMPK Santo Petrus Kota Pontianak) mengenakan medali OSN Guru 2013.',
      sourceUrl: 'https://www.youtube.com/watch?v=Idcuund-w0Y&t=620s',
      verifiedStatus: 'verified'
    }
  ]
};

export const ABOUT = {
  title: 'Tentang Duta e-dukasi',
  intro: `Duta e-dukasi (Bimbingan Belajar Duta Edukasi Pontianak) didirikan oleh ${FOUNDER.name} di Jl. Siam No. 37, Pontianak, dan menyediakan portal belajar terbuka Matematika & Fisika bersama ${AUTHOR.name}.`,
  paragraphs: [
    'Platform belajar digital Duta e-dukasi hadir untuk membantu siswa Indonesia — baik murid bimbel maupun pelajar umum di mana saja — mengakses materi terstruktur, rumus kunci, contoh soal, kuis diagnostik, serta Paket Soal berstandar kompetisi beserta kunci jawaban dan rubrik penilaiannya secara gratis tanpa login.',
    'Seluruh materi Kurikulum Merdeka (Matematika Kelas 4–12, IPA SD Kelas 4–6, IPA SMP Kelas 7–9, serta Fisika SMA Kelas 10–12) diselaraskan dengan Capaian Pembelajaran resmi (Keputusan Kepala BSKAP Nomor 046/H/KR/2025), dilengkapi jalur Cambridge-style, latihan TKA SD/SMP/SMA, dan modul persiapan Olimpiade AMC 8, 10, dan 12.',
    'Selain sumber belajar terbuka berlisensi CC BY 4.0, Bimbingan Belajar Duta Edukasi menyelenggarakan kelas tatap muka (reguler dan privat) untuk mata pelajaran sekolah dan pembinaan intensif Olimpiade Matematika & Fisika di Pontianak maupun daring.'
  ]
};

export const PROGRAMS = [
  {
    id: 'reguler-sekolah',
    title: 'Kelas Reguler & Privat Mata Pelajaran (SD, SMP, SMA)',
    audience: 'Kelas 4 SD – 12 SMA (Kurikulum Merdeka, Sekolah Nasional / Bilingual / Cambridge)',
    summary:
      'Pendalaman konsep Matematika, IPA, dan Fisika terstruktur dengan kelompok belajar kecil (reguler) atau pendampingan intensif satu-lawan-satu (privat) sesuai kebutuhan siswa.',
    points: [
      'Pemahaman konsep fundamental, latihan terbimbing, dan persiapan ulangan harian, PAS/PAT, serta TKA.',
      'Tersedia untuk kurikulum nasional (Kurikulum Merdeka) maupun track bilingual/Cambridge.',
      'Dilengkapi lembar kerja cetak ber-QR dan akses digital portal belajar Duta e-dukasi.'
    ]
  },
  {
    id: 'olimpiade-mat-fis',
    title: 'Pembinaan Olimpiade Matematika & Fisika (OSN / KSN / AMC)',
    audience: 'Siswa SD, SMP & SMA Jalur Kompetisi',
    summary:
      'Program pembinaan berjenjang oleh tim pembina berpengalaman menuju OSN-K, OSN-P, OSN Nasional, AMC 8/10/12, dan kompetisi matematika tingkat regional/internasional.',
    points: [
      'Materi bertahap: Teori Bilangan, Kombinatorika, Aljabar, Geometri Olimpiade, serta Mekanika & Fisika Komputasi/Eksperimen.',
      'Simulasi soal terstruktur lengkap dengan pembahasan prinsip fisis/matematis serta rubrik penilaian (B1/M1/A1).',
      'Kelas kelompok kecil terarah maupun bimbingan privat persiapan intensif.'
    ]
  },
  {
    id: 'privat-daring-luring',
    title: 'Bimbingan Privat Tatap Muka Pontianak & Online',
    audience: 'Fleksibel per siswa atau kelompok kecil',
    summary:
      'Jadwal dan topik disesuaikan khusus dengan target siswa — baik penguatan dasar maupun akselerasi materi olimpiade dan persiapan masuk perguruan tinggi.',
    points: [
      'Lokasi tatap muka: Bimbingan Belajar Duta Edukasi, Jl. Siam No. 37, Pontianak Selatan.',
      'Kelas privat daring (online) juga tersedia untuk siswa di luar kota Pontianak.',
      'Konsultasi penentuan level awal dan jadwal langsung melalui WhatsApp 082155557900.'
    ]
  }
];

export const FAQS = [
  {
    question: 'Di mana lokasi Bimbingan Belajar Duta e-dukasi?',
    answer:
      'Duta e-dukasi berlokasi di Jl. Siam No. 37, Benua Melayu Darat, Kec. Pontianak Selatan, Kota Pontianak, Kalimantan Barat 78122. Kami melayani kelas tatap muka maupun bimbingan daring.'
  },
  {
    question: 'Mata pelajaran dan jenjang apa saja yang tersedia di Duta e-dukasi?',
    answer:
      'Fokus utama kami adalah Matematika, IPA, dan Fisika untuk jenjang SD (Kelas 4–6), SMP (Kelas 7–9), dan SMA (Kelas 10–12), termasuk persiapan ujian sekolah/TKA, jalur Cambridge-style, serta pembinaan Olimpiade Matematika dan Fisika (OSN dan AMC 8/10/12).'
  },
  {
    question: 'Apakah materi dan Paket Soal di website Duta e-dukasi gratis diakses?',
    answer:
      'Ya. Seluruh buku saku materi, latihan soal, kuis interaktif, dan Paket Soal beserta kunci jawaban dan rubrik di website ini dapat diakses gratis tanpa perlu mendaftar akun. Konten berlisensi CC BY 4.0 dengan atribusi kepada Duta e-dukasi.'
  },
  {
    question: 'Bagaimana cara mendaftar kelas reguler atau privat di Duta e-dukasi?',
    answer:
      'Orang tua atau siswa dapat menghubungi tim kami langsung melalui WhatsApp di 082155557900 untuk konsultasi kebutuhan belajar, penjadwalan, dan informasi biaya kelas reguler maupun privat.'
  }
];

export const PRESTASI_DATA = [
  {
    id: 'bruce-mikhail-imso-2026',
    studentName: 'Bruce Abner Wiriyanto & Mikhail Godwin Yap',
    school: 'SD Plus Gembala Baik & SD Kinderfield Pontianak',
    year: 2026,
    competition: '23rd International Mathematics and Science Olympiad (IMSO), Depok',
    award: 'Bronze Medal (2 Medali Perunggu)',
    level: 'Internasional',
    notes: 'Lolos Tahap 3 seleksi Tim Indonesia dan meraih medali perunggu pada IMSO ke-23 (2–7 Oktober 2026).',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/DejLVZ7H8rb/'
  },
  {
    id: 'jenover-osn-2026',
    studentName: 'Jenover Viano Yoshield',
    school: 'SMA Pelita Cemerlang Pontianak',
    year: 2026,
    competition: 'Olimpiade Sains Nasional (OSN DIKMEN) Bidang Matematika SMA — Tingkat Nasional',
    award: 'Medali Emas (Gold Medal)',
    level: 'Nasional',
    notes: 'Medali OSN ke-6 (total 2 Emas, 2 Perak, 2 Perunggu). Diumumkan di Universitas Muhammadiyah Malang (UMM), September 2026.',
    sourceLabel: '@jonoyang78 / @jenovervy',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/DdehVp-n-7y/'
  },
  {
    id: 'jenover-tuymaada-apmo-2026',
    studentName: 'Jenover Viano Yoshield',
    school: 'SMA Pelita Cemerlang Pontianak',
    year: 2026,
    competition: 'International Tuymaada Olympiad 2026 & Asian Pacific Mathematical Olympiad (APMO) 2026',
    award: 'Bronze Medal (Tuymaada) & Honorable Mention (APMO)',
    level: 'Internasional',
    notes: 'Meraih Medali Perunggu (peringkat ke-3 / TDD) Matematika di Tuymaada 2026 dan Honorable Mention di APMO 2026.',
    sourceLabel: '@jonoyang78 / @jenovervy',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/Da5eFI2oHJs/'
  },
  {
    id: 'jenover-osn-2025',
    studentName: 'Jenover Viano Yoshield',
    school: 'SMA Pelita Cemerlang Pontianak',
    year: 2025,
    competition: 'OSN Matematika SMA 2025 (Malang) & KOMET ke-21 FMIPA UNTAN Kalbar',
    award: 'Medali Perak OSN 2025 & Juara 1 KOMET ke-21',
    level: 'Nasional',
    notes: 'Medali Perak Nasional di Malang (Oktober 2025) serta Juara 1 KOMET ke-21 FMIPA Universitas Tanjungpura (Februari 2025).',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/DPtr2RXiW2_/'
  },
  {
    id: 'jill-mc-limas-2025',
    studentName: 'Jill Anella Lawrence',
    school: 'SMP Katolik Santu Petrus / SD Karya Yosef Pontianak',
    year: 2025,
    competition: 'Mathematics Competition (MC) LIMAS ke-13 (2025) & ke-11 (2023) HIMMAT FKIP UNTAN',
    award: 'Juara 1 SMP se-Kalimantan Barat (2025) & Juara 1 SD (2023)',
    level: 'Provinsi',
    notes: 'Konsisten meraih juara pertama lintas jenjang dari SD (2023) hingga SMP se-Kalbar (November 2025).',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/DRFUB07j4pW/'
  },
  {
    id: 'tobias-omn-simoc-2025',
    studentName: 'Tobias Angelo Yuriel',
    school: 'Siswa Binaan Duta e-dukasi Pontianak',
    year: 2025,
    competition: 'Grand Final Nasional OMNAS 14 Level 1 (2025) & SIMOC Singapore (2024)',
    award: '1st Champion Mathematics OMNAS 14 & Overall Champion Grade 1 SIMOC',
    level: 'Internasional',
    notes: 'Juara 1 Nasional Matematika OMNAS 14 di Malang (Juni 2025) setelah meraih Overall Champion Grade 1 SIMOC di Singapura (Juli 2024).',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/DMk8ig1Tlxi/'
  },
  {
    id: 'bryan-osn-sd-2024',
    studentName: 'Bryan Destin Mulyadi',
    school: 'SD Pelita Cemerlang Pontianak',
    year: 2024,
    competition: 'Olimpiade Sains Nasional (OSN) Matematika SD Tingkat Nasional & MC FKIP UNTAN 2025',
    award: 'Medali Emas + Best Eksplorasi (OSN 2024) & Juara 2 MC UNTAN (2025)',
    level: 'Nasional',
    notes: 'Meraih Medali Emas sekaligus penghargaan Best Eksplorasi tingkat nasional pada OSN Matematika SD 2024.',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/C-fCFnXT_Ek/'
  },
  {
    id: 'jenover-osn-2024',
    studentName: 'Jenover Viano Yoshield',
    school: 'SMA Pelita Cemerlang Pontianak',
    year: 2024,
    competition: 'OSN Matematika SMA Tingkat Nasional 2024 & OMITS ke-17 ITS Surabaya',
    award: 'Medali Perak OSN 2024 & Bronze Medal OMITS ke-17',
    level: 'Nasional',
    notes: 'Menjadi perwakilan Kalimantan Barat di OSN Matematika SMA 2024 dan meraih perunggu OMITS tingkat SMA se-Indonesia di ITS Surabaya.',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/C_VLQbZTrDL/'
  },
  {
    id: 'enrique-mission-2024',
    studentName: 'Enrique Alexis Joskamianto',
    school: 'SMA Katolik Santu Petrus Pontianak / UGM',
    year: 2024,
    competition: 'MISSION 8.0 ITS Surabaya (2024) & MC LIMAS ke-10/11 FKIP UNTAN (2022–2023)',
    award: 'Bronze Medal Mahasiswa (MISSION 8.0) & Juara 1 SMA MC LIMAS (2022–2023)',
    level: 'Nasional',
    notes: 'Meraih Juara 1 MC LIMAS tingkat SMA berturut-turut saat di SMA Santu Petrus dan medali perunggu kategori Mahasiswa di ITS Surabaya.',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/DBoPSJxTpzq/'
  },
  {
    id: 'jevon-onmipa-2024',
    studentName: 'Jevon Naldo Yoshield',
    school: 'SMA Katolik Santu Petrus Pontianak / Mahasiswa Matematika',
    year: 2024,
    competition: 'ONMIPA-PT 2024 Bidang Matematika & MC LIMAS ke-10 FKIP UNTAN (2022)',
    award: 'Lolos Wilayah ke Tingkat Nasional ONMIPA-PT 2024 & Juara 3 SMA MC LIMAS',
    level: 'Nasional',
    notes: 'Mewakili wilayah ke babak nasional ONMIPA-PT Matematika di Universitas Hasanuddin Makassar (Mei 2024).',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/C6pf7O7P6N3/'
  },
  {
    id: 'jenover-osn-2023',
    studentName: 'Jenover Viano Yoshield',
    school: 'SMP Katolik Santu Petrus Pontianak',
    year: 2023,
    competition: 'OSN Matematika SMA Tingkat Nasional 2023 (Bogor) & OSP Kalbar 2023',
    award: 'Medali Perunggu OSN SMA & Juara 1 OSP Kalbar',
    level: 'Nasional',
    notes: 'Bertanding lintas jenjang di cabang Matematika SMA saat masih kelas SMP dan membawa pulang Medali Perunggu Nasional di Bogor.',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/CwpQ8kZrbJT/'
  },
  {
    id: 'stephanie-komet-2023',
    studentName: 'Stephanie Jesslyn',
    school: 'SMA Katolik Santu Petrus Pontianak',
    year: 2023,
    competition: 'KOMET ke-19 FMIPA UNTAN & MC LIMAS ke-11 FKIP UNTAN (2023)',
    award: 'Juara 1 KOMET ke-19 (SMA) & Juara 2 MC LIMAS ke-11 (SMA)',
    level: 'Provinsi',
    notes: 'Meraih juara pertama Kompetisi Matematika ke-19 tingkat SMA di Fakultas MIPA Universitas Tanjungpura (Maret 2023).',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/Cpq5iV8PxH1/'
  },
  {
    id: 'seraphine-imso-2022',
    studentName: 'Seraphine Peyton Zhang',
    school: 'SD / SMP Pelita Cemerlang Pontianak',
    year: 2022,
    competition: '19th International Mathematics and Science Olympiad (IMSO 2022) & OSN SMP 2025',
    award: 'Gold Medal & Best Theoretical Mathematics (IMSO 2022)',
    level: 'Internasional',
    notes: 'Meraih Medali Emas sekaligus penghargaan Best Theoretical Mathematics pada IMSO ke-19 tahun 2022 serta finalis nasional OSN SMP 2025.',
    sourceLabel: '@jonoyang78 (IG Post)',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/ClwDp5fvo6e/'
  },
  {
    id: 'jenover-osn-2022',
    studentName: 'Jenover Viano Yoshield',
    school: 'SMP Katolik Santu Petrus Pontianak',
    year: 2022,
    competition: 'OSN Matematika SMP Nasional 2022 & KSR Matematika 2022 / Academy of Champions S1',
    award: 'Medali Emas OSN SMP & Gold Medal / Absolute Winner KSR',
    level: 'Nasional',
    notes: 'Juga meraih Bronze Medal IMSO ke-17 (2021) dan mewakili Kalimantan (District 6) di Ruangguru Academy of Champions Season 1.',
    sourceLabel: '@jonoyang78 / @jenovervy',
    sourceUrl: 'https://www.instagram.com/jonoyang78/p/Cg6QLWFBpd4/'
  }
];
