/**
 * Paket Soal Terstruktur: OSN-P IPA SD 2024 (10 soal isian singkat lengkap)
 * Sumber: REVISI TYPE A - SOAL TES OSNP IPA SD 2024.pdf (10 soal lengkap nomor 1–10).
 * Penomoran butir soal mengikuti nomor asli (1–10), bahasa sumber dipertahankan (Indonesia),
 * dan soal bergambar dilengkapi ilustrasi asli yang dipotong rapi di public/papers/osnp-ipa-sd-2024/.
 */
export default {
  id: 'osnp-ipa-sd-2024',
  slug: 'osnp-ipa-sd-2024',
  subject: 'olimpiade-sains',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'OSN-P IPA SD 2024: anatomi, ekologi, mekanika, listrik, dan gelombang',
  relatedChapterIds: [
    'ipa4-bab4-pancaindra-dan-pengamatan-ilmiah',
    'ipa5-bab4-ekosistem-dan-siklus-air',
    'ipa6-bab1-rangka-dan-mekanika-gerak-tubuh',
    'ipa7-bab6-ekologi-keanekaragaman-hayati'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-P',
  title: 'OSN-P IPA SD 2024',
  totalMarks: 34,
  instructions:
    'Kerjakan seluruh 10 soal isian singkat berikut (nomor 1–10). Setiap isian rumpang (A, B, C, atau D) bernilai 1 poin sehingga setiap soal bernilai 2 atau 4 poin dengan total 34 poin. Soal yang disertai gambar (nomor 1, 6, dan 8) dilengkapi ilustrasi asli dari naskah.',
  source: {
    org: 'OSN-P',
    file: 'REVISI TYPE A - SOAL TES OSNP IPA SD 2024.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Soal Isian Singkat',
      marks: 34,
      stem: 'Lengkapilah bagian rumpang (A), (B), (C), dan/atau (D) pada setiap soal berikut dengan jawaban yang paling tepat (10 soal, total 34 poin).',
      parts: [
        {
          label: '1',
          marks: 4,
          figures: [
            {
              src: '/papers/osnp-ipa-sd-2024/fig-1.webp',
              alt: 'Diagram anatomi sistem pernapasan manusia dengan penunjuk huruf P, Q, R, S, T, U, V, X, dan Y',
              caption: 'Diagram sistem pernapasan manusia berlabel huruf untuk Soal No. 1.'
            }
          ],
          prompt:
            'Perhatikan gambar berikut.\n\nBagian yang berperan untuk memperbesar volume rongga dada pada saat inspirasi pernapasan perut diberi label dengan huruf ….(A)….. Bagian yang berperan melindungi dari risiko tersedak makanan ditunjukkan oleh huruf ….(B)…. Penderita asma sering kali mengalami kesulitan bernapas akibat kontraksi otot polos yang berlebihan pada saluran napas sehingga menyebabkan penyempitan terutama pada bagian *bronchus* yang berlabel huruf ….(C)….. dan bagian ….(D)…. yang berlabel huruf S.',
          answer: '(A) Y; (B) U; (C) R; (D) Bronkiolus (*bronchiolus*)',
          principle:
            'Pernapasan perut digerakkan oleh kontraksi diafragma, epiglotis mencegah makanan masuk ke saluran napas, serta asma menyempitkan saluran napas bagian bawah (bronkus dan bronkiolus).',
          solution:
            'Identifikasi label pada diagram sistem pernapasan manusia:\n- **(A) Y (diafragma)**: pada saat inspirasi pernapasan perut, otot diafragma berkontraksi dan mendatar ke bawah sehingga volume rongga dada membesar dan tekanan udara paru-paru turun.\n- **(B) U (epiglotis)**: katup tulang rawan elastis di pangkal laring yang menutup saluran napas (glotis) ketika menelan, sehingga melindungi tubuh dari risiko tersedak makanan.\n- **(C) R (bronkus / *bronchus*)**: percabangan utama trakea (V) yang menuju paru-paru kanan dan kiri; otot polos di dindingnya dapat mengalami konstriksi saat serangan asma.\n- **(D) Bronkiolus (*bronchiolus*)**: percabangan halus dari bronkus di dalam paru-paru yang ditunjukkan oleh huruf S; penyempitan otot polos bronkiolus merupakan penyebab utama sesak napas pada penderita asma.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) Y dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) U dengan benar.' },
            { code: 'A1', text: 'Menjawab (C) R dengan benar.' },
            { code: 'A1', text: 'Menjawab (D) bronkiolus / bronchiolus dengan benar.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'Diketahui beberapa hewan sebagai berikut.\n\n1. Kerang mutiara\n2. Laba-laba\n3. Cacing tanah\n4. Capung\n5. Katak\n\nBerdasarkan data di atas, jumlah hewan yang memiliki sistem peredaran darah terbuka adalah ….(A)…. dan jumlah hewan yang memiliki sistem peredaran darah tertutup adalah ….(B)….. Hewan yang memiliki jantung berupa lima lengkung aorta adalah ….(C)…. dan hewan yang memiliki rangka luar dari zat kapur adalah ….(D)….',
          answer: '(A) 3; (B) 2; (C) Cacing tanah (nomor 3); (D) Kerang mutiara (nomor 1)',
          principle:
            'Sistem peredaran darah terbuka dimiliki sebagian besar Mollusca (termasuk Bivalvia) dan Arthropoda, sedangkan Annelida dan Vertebrata memiliki sistem peredaran darah tertutup.',
          solution:
            'Klasifikasi sistem peredaran darah dan ciri struktur kelima hewan:\n1. **Kerang mutiara** (*Mollusca*, kelas Bivalvia): sistem peredaran darah **terbuka**, memiliki cangkang pelindung (rangka luar) dari zat kapur ($\\text{CaCO}_3$).\n2. **Laba-laba** (*Arthropoda*, kelas Arachnida): sistem peredaran darah **terbuka** dengan hemolimfa dan eksoskeleton kitin.\n3. **Cacing tanah** (*Annelida*, kelas Oligochaeta): sistem peredaran darah **tertutup** dengan pembuluh punggung, pembuluh perut, dan jantung pembuluh berupa **lima pasang lengkung aorta**.\n4. **Capung** (*Arthropoda*, kelas Insecta): sistem peredaran darah **terbuka** dengan jantung pembuluh dorsal.\n5. **Katak** (*Chordata*, kelas Amphibia): sistem peredaran darah **tertutup** ganda dengan jantung beruang tiga.\n\nJadi:\n- **(A)** Jumlah hewan dengan peredaran darah terbuka = $3$ (kerang mutiara, laba-laba, capung).\n- **(B)** Jumlah hewan dengan peredaran darah tertutup = $2$ (cacing tanah, katak).\n- **(C)** Hewan dengan jantung lima lengkung aorta = **cacing tanah (nomor 3)**.\n- **(D)** Hewan dengan rangka luar dari zat kapur = **kerang mutiara (nomor 1)**.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) $3$ hewan dengan peredaran darah terbuka.' },
            { code: 'A1', text: 'Menjawab (B) $2$ hewan dengan peredaran darah tertutup.' },
            { code: 'A1', text: 'Menjawab (C) cacing tanah / nomor 3 dengan benar.' },
            { code: 'A1', text: 'Menjawab (D) kerang mutiara / nomor 1 dengan benar.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Zat gizi yang dapat berfungsi sebagai cadangan makanan jangka panjang pada mamalia adalah ….(A)…., sedangkan zat gizi yang digunakan sebagai bahan utama penghasil energi untuk tubuh adalah ….(B)….. Organ pada sistem pencernaan yang memproduksi empedu adalah ….(C)…., sedangkan organ penghasil hormon insulin adalah ….(D)….',
          answer: '(A) Lemak / lipid; (B) Karbohidrat; (C) Hati / liver / hepar; (D) Pankreas',
          principle:
            'Karbohidrat merupakan sumber energi utama jangka pendek, lemak menjadi cadangan energi jangka panjang, hati memproduksi cairan empedu untuk mengemulsi lemak, dan pankreas menghasilkan hormon insulin.',
          solution:
            'Analisis masing-masing fungsi zat gizi dan organ pencernaan/endokrin pada mamalia:\n- **(A) Lemak (lipid)**: menyimpan energi paling padat per gram dan disimpan di jaringan adiposa sebagai cadangan makanan jangka panjang.\n- **(B) Karbohidrat**: dipecah menjadi glukosa yang menjadi substrat utama respirasi seluler untuk menghasilkan energi (ATP) bagi tubuh.\n- **(C) Hati (*liver* / *hepar*)**: memproduksi cairan empedu (yang kemudian ditampung di kantong empedu) untuk mengemulsikan lemak di usus halus.\n- **(D) Pankreas**: bagian endokrinnya (sel beta pulau Langerhans) menghasilkan hormon **insulin** untuk menurunkan dan mengatur kadar glukosa darah.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) lemak / lipid dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) karbohidrat dengan benar.' },
            { code: 'A1', text: 'Menjawab (C) hati / liver / hepar dengan benar.' },
            { code: 'A1', text: 'Menjawab (D) pankreas dengan benar.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'Bagian mata yang berfungsi untuk memfokuskan bayangan adalah ….(A)…., sedangkan bagian yang berfungsi seperti layar adalah ….(B)…. Sel fotoreseptor yang berperan pada penglihatan saat intensitas cahaya rendah adalah ….(C)…., sedangkan fotoreseptor yang berperan untuk ketajaman penglihatan adalah ….(D)….',
          answer: '(A) Lensa mata / lensa; (B) Retina; (C) Sel batang / sel basil / sel rod; (D) Sel kerucut / sel cone',
          principle:
            'Lensa mata memfokuskan cahaya melalui daya akomodasi ke retina (layar penangkap bayangan) yang memiliki sel batang (cahaya redup) dan sel kerucut (warna dan ketajaman).',
          solution:
            'Fungsi bagian-bagian utama mata manusia:\n- **(A) Lensa mata**: lensa cembung elastis yang dapat menebal dan menipis (berakomodasi) untuk memfokuskan berkas cahaya tepat jatuh di retina.\n- **(B) Retina (selaput jala)**: lapisan terdalam bola mata tempat bayangan nyata, terbalik, dan diperkecil terbentuk, berfungsi seperti layar kamera.\n- **(C) Sel batang (sel basil / *rod cell*)**: fotoreseptor yang sangat peka terhadap intensitas cahaya rendah (penglihatan malam/redup), namun tidak membedakan warna.\n- **(D) Sel kerucut (*cone cell*)**: fotoreseptor yang bekerja pada cahaya terang, terkonsentrasi di fovea (bintik kuning), serta berperan dalam penglihatan warna dan ketajaman penglihatan (resolusi detail).',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) lensa mata / lensa dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) retina dengan benar.' },
            { code: 'A1', text: 'Menjawab (C) sel batang / sel basil / sel rod dengan benar.' },
            { code: 'A1', text: 'Menjawab (D) sel kerucut / sel cone dengan benar.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Lapisan tanah yang menyediakan kebutuhan utama nutrien bagi tumbuhan adalah ….(A)…., nutrien tersebut diserap kemudian diangkut oleh pembuluh ….(B)…. untuk diedarkan ke seluruh bagian tanaman termasuk organ fotosintesis.',
          answer: '(A) Humus; (B) Xilem (*xylem* / pembuluh kayu)',
          principle:
            'Humus pada lapisan tanah atas (topsoil) kaya bahan organik dan unsur hara mineral yang diserap akar lalu diangkut ke daun melalui pembuluh xilem.',
          solution:
            'Alur penyediaan dan pengangkutan nutrien mineral pada tumbuhan:\n- **(A) Humus**: lapisan tanah bagian atas yang terbentuk dari pelapukan bahan organik sisa makhluk hidup, sangat subur dan menjadi sumber utama unsur hara/nutrien mineral bagi akar tumbuhan.\n- **(B) Xilem (pembuluh kayu)**: jaringan pembuluh angkut yang menyalurkan air dan garam mineral (nutrien terlarut) dari akar ke batang hingga daun sebagai organ fotosintesis.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) humus dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) xilem / xylem / pembuluh kayu dengan benar.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          figures: [
            {
              src: '/papers/osnp-ipa-sd-2024/fig-6.webp',
              alt: 'Gambar daun tumbuhan di sebelah kiri dan foto sayatan melintang organ tumbuhan di sebelah kanan',
              caption: 'Morfologi daun dan sayatan melintang organ tumbuhan untuk Soal No. 6.'
            }
          ],
          prompt:
            'Perhatikan gambar berikut.\n\nGambar sebelah kanan adalah sayatan melintang dari organ ….(A)…… Berdasarkan ciri yang tampak, pertulangan daunnya bertipe ….(B)…. dan susunan berkas pembuluhnya ….(C)…., sehingga tumbuhan tersebut termasuk dalam kelompok ….(D)….',
          answer: '(A) Batang; (B) Sejajar; (C) Tersebar / kolateral tertutup; (D) Monokotil (*Monocotyledonae*)',
          principle:
            'Tumbuhan monokotil dicirikan oleh pertulangan daun sejajar atau melengkung serta berkas pembuluh batang bertipe kolateral tertutup yang letaknya tersebar di jaringan dasar.',
          solution:
            'Pengamatan ciri anatomi dan morfologi pada gambar:\n- **(A) Batang**: sayatan melintang sebelah kanan memperlihatkan epidermis terluar dan jaringan dasar berisi banyak berkas pembuluh tanpa silinder pusat (stele) berambut akar seperti pada akar.\n- **(B) Sejajar**: gambar daun di sebelah kiri berbentuk pita memanjang dengan tulang-tulang daun berjalan sejajar dari pangkal hingga ujung daun.\n- **(C) Tersebar / kolateral tertutup**: pada sayatan melintang batang tersebut, berkas pengangkut (xilem dan floem) tidak tersusun membentuk lingkaran teratur, melainkan **tersebar** merata di seluruh jaringan dasar dan tidak memiliki kambium di antara xilem dan floem (kolateral tertutup).\n- **(D) Monokotil (*Monocotyledonae*)**: kombinasi pertulangan daun sejajar dan berkas pembuluh batang yang tersebar merupakan ciri khas tumbuhan berkeping biji tunggal (monokotil).',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) batang dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) sejajar dengan benar.' },
            { code: 'A1', text: 'Menjawab (C) tersebar / kolateral tertutup dengan benar.' },
            { code: 'A1', text: 'Menjawab (D) monokotil / Monocotyledonae dengan benar.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Penggunaan *hand sanitizer* secara berlebihan dan terus menerus dapat menimbulkan masalah baru bagi kesehatan di masa mendatang, yaitu dapat menyebabkan munculnya mikroorganisme patogen yang ….(A)…. terhadap senyawa aktif pada *hand sanitizer*. Fenomena tersebut juga menunjukkan bahwa makhluk hidup dapat merespon perubahan lingkungan yang terjadi dengan cara ….(B)….',
          answer: '(A) Resisten / kebal; (B) Adaptasi',
          principle:
            'Paparan zat antimikroba yang berlebihan menyeleksi varian mikroorganisme yang mampu bertahan hidup sehingga muncul galur yang resisten sebagai bentuk adaptasi terhadap tekanan lingkungan.',
          solution:
            'Analisis fenomena biologis penggunaan antimikroba berlebih:\n- **(A) Resisten / kebal**: paparan terus-menerus senyawa aktif pada *hand sanitizer* membunuh mikroorganisme yang sensitif, sementara varian yang mengalami mutasi atau memiliki ketahanan alami bertahan dan berkembang biak menjadi populasi patogen yang **resisten (kebal)**.\n- **(B) Adaptasi**: kemampuan makhluk hidup menyesuaikan diri terhadap perubahan kondisi lingkungan agar tetap dapat bertahan hidup disebut **adaptasi**.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) resisten / kebal dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) adaptasi dengan benar.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          figures: [
            {
              src: '/papers/osnp-ipa-sd-2024/fig-8.webp',
              alt: 'Peta wilayah kepulauan Indonesia dengan penunjuk arah utara U serta dua garis batas imajiner P dan Q',
              caption: 'Peta pembagian wilayah biogeografi Indonesia dengan garis P dan Q untuk Soal No. 8.'
            }
          ],
          prompt:
            'Perhatikan gambar berikut.\n\nSebaran keanekaragaman hayati di Indonesia mengikuti pembagian wilayah seperti pada gambar di atas. Hewan bertipe mamalia besar mendominasi wilayah sebelah ….(A)…. dari garis P. Hewan berkantung hanya ditemukan pada wilayah sebelah ….(B)…. dari garis Q. P dan Q adalah garis imajiner yang memetakan sebaran keanekaragaman hayati di Indonesia. P dikenal dengan nama garis ….(C)…. sedangkan Q adalah garis ….(D)….',
          answer: '(A) Kiri / barat; (B) Kanan / timur; (C) Wallace; (D) Weber',
          principle:
            'Garis Wallace memisahkan fauna Asiatis (barat) dari zona peralihan, sedangkan Garis Weber menandai batas keseimbangan antara fauna peralihan dan fauna Australis (timur) yang mencakup mamalia berkantung.',
          solution:
            'Berdasarkan peta biogeografi Indonesia dan arah mata angin utara (U) di kanan atas:\n- **(C) Garis Wallace** (garis P, membentang antara Kalimantan–Sulawesi dan Bali–Lombok) dan **(D) Garis Weber** (garis Q, membentang di sebelah timur Sulawesi dan Nusa Tenggara, di sebelah barat Maluku/Halmahera dan Papua).\n- **(A) Kiri / barat**: sebelah kiri (barat) garis P merupakan wilayah fauna **Asiatis** (Sumatra, Jawa, Kalimantan, Bali) yang didominasi mamalia berukuran besar seperti gajah, badak, harimau, dan orangutan.\n- **(B) Kanan / timur**: sebelah kanan (timur) garis Q merupakan wilayah fauna **Australis** (Maluku bagian timur dan Papua) yang khas dengan hewan berkantung (marsupialia) seperti kanguru pohon dan kuskus.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) kiri / barat dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) kanan / timur dengan benar.' },
            { code: 'A1', text: 'Menjawab (C) Wallace dengan benar.' },
            { code: 'A1', text: 'Menjawab (D) Weber dengan benar.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Teknik bioteknologi untuk mengatasi ketidaksuburan pada reproduksi manusia agar dapat memperoleh keturunan adalah ….(A)…., sedangkan teknik yang umumnya digunakan untuk memproduksi antibiotik adalah ….(B)….',
          answer: '(A) *In vitro fertilization* (IVF) / bayi tabung; (B) Fermentasi',
          principle:
            'Bioteknologi reproduksi menggunakan fertilisasi *in vitro* (bayi tabung) untuk mempertemukan gamet di luar tubuh, sedangkan produksi metabolit mikroba seperti antibiotik memanfaatkan proses fermentasi.',
          solution:
            'Penerapan bioteknologi di bidang kesehatan dan reproduksi:\n- **(A) *In vitro fertilization* (IVF) / bayi tabung**: teknik fertilisasi dengan mempertemukan sel sperma dan sel ovum di laboratorium (dalam cawan kultur/*in vitro*) untuk membentuk embrio yang kemudian ditanam kembali ke dalam rahim guna membantu pasangan dengan gangguan kesuburan.\n- **(B) Fermentasi**: proses bioteknologi konvensional maupun modern yang menumbuhkan mikroorganisme (misalnya jamur *Penicillium notatum* atau bakteri *Streptomyces*) dalam bioreaktor untuk menghasilkan antibiotik.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) in vitro fertilization (IVF) / bayi tabung dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) fermentasi dengan benar.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Ikan hiu tidak mempunyai operkulum (tutup insang), untuk dapat bernapas maka ikan hiu harus ….(A)…. Sirip dada pada hiu digunakan untuk ….(B)…. Fertilisasi pada hiu terjadi secara ….(C)…. sedangkan fertilisasi ikan cere, guppy, platis, dan molly terjadi secara ….(D)….',
          answer:
            '(A) Berenang dengan mulut terbuka; (B) Bermanuver / belok kanan–kiri; (C) Internal / di dalam tubuh induknya; (D) Internal / di dalam tubuh induknya',
          principle:
            'Ikan bertulang rawan (Chondrichthyes) tanpa operkulum memanfaatkan ventilasi ram saat berenang agar air terus melewati insang, serta melakukan fertilisasi internal; ikan Poeciliidae melahirkan anak sehingga juga melakukan fertilisasi internal.',
          solution:
            'Adaptasi fisiologi, gerak, dan reproduksi ikan:\n- **(A) Berenang dengan mulut terbuka**: karena tidak memiliki tutup insang (operkulum) untuk memompa air secara aktif saat diam, sebagian besar hiu harus terus berenang dengan mulut terbuka (*ram ventilation*) agar aliran air kaya oksigen mengalir melewati celah insang.\n- **(B) Bermanuver / belok kanan–kiri**: sirip dada hiu yang lebar dan kaku berfungsi mengendalikan arah belokan ke kanan–kiri (manuver) serta menghasilkan daya angkat saat berenang, sedangkan dorongan utama ke depan berasal dari sirip ekor.\n- **(C) Internal / di dalam tubuh induknya**: hiu jantan memiliki alat kopulasi bernama klasper untuk memindahkan sperma ke saluran reproduksi betina sehingga pembuahan berlangsung secara internal.\n- **(D) Internal / di dalam tubuh induknya**: ikan cere (*Gambusia*), guppy, platis, dan molly termasuk famili Poeciliidae yang bersifat ovovivipar (melahirkan anak); pejantannya memiliki modifikasi sirip anal (gonopodium) untuk melakukan fertilisasi secara internal.',
          rubric: [
            { code: 'A1', text: 'Menjawab (A) berenang dengan mulut terbuka dengan benar.' },
            { code: 'A1', text: 'Menjawab (B) bermanuver / belok kanan–kiri dengan benar.' },
            { code: 'A1', text: 'Menjawab (C) internal / di dalam tubuh induknya dengan benar.' },
            { code: 'A1', text: 'Menjawab (D) internal / di dalam tubuh induknya dengan benar.' }
          ]
        }
      ]
    }
  ]
};
