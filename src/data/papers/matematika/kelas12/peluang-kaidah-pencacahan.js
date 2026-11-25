/**
 * Paket Soal Terstruktur: Latihan Kaidah Pencacahan & Peluang SMA — Paket 1 & 2
 * Sumber: 10 LATIHAN SOAL 1 & 2 PELUANG.pdf (Duta e-dukasi).
 * Bahasa asli dipertahankan dalam Bahasa Indonesia sesuai dokumen sumber.
 * Catatan verifikasi visual: Seluruh rumus pecahan, faktorial, dan notasi permutasi
 * pada Paket 1 (Q1–Q10) dan Paket 2 (Q11–Q19) diverifikasi langsung dari
 * mat12-peluang-1_p1.png dan mat12-peluang-2_p1.png.
 */
export default {
  id: 'mat12-peluang-kaidah-pencacahan',
  slug: 'peluang-kaidah-pencacahan',
  subject: 'matematika',
  grade: 12,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  competition: 'Matematika SMA',
  lang: 'id',
  langDisplay: 'ID',
  title: 'Latihan Kaidah Pencacahan & Peluang SMA — Paket 1 & 2',
  topic: 'Kaidah Pencacahan, Faktorial, dan Permutasi',
  relatedChapterIds: ['sma12-bab3-kaidah-pencacahan', 'sma12-bab4-peluang'],
  totalMarks: 84,
  instructions:
    'Kerjakan seluruh 19 soal uraian terstruktur berikut yang menggabungkan Paket 1 (Soal 1–10: aturan penjumlahan, aturan perkalian, dan pengisian tempat) serta Paket 2 (Soal 11–19, bernomor asli 1–9 pada lembar kedua: faktorial dan permutasi), dengan total 84 poin. Tidak ada soal yang dilewati. Catatan redaksi sumber: pada Soal 1 tertulis "Salam" yang dimaksudkan sebagai "Salma", pada Soal 7 tertulis "percampuran" yang bermakna "perempuan", dan pada Soal 13a tertulis $n(n-1)(n-1)$ yang diselesaikan sesuai teks asli disertai catatan kemungkinan salah cetak dari $n(n-1)(n-2)$.',
  source: {
    org: 'Duta e-dukasi',
    file: '10 LATIHAN SOAL 1 & 2 PELUANG.pdf',
    license: 'CC BY 4.0'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Aturan Penjumlahan pada Pilihan Sabun Mandi',
      marks: 1,
      stem: 'Di supermarket Salma ingin membeli sabun mandi. Pada kotak A tersedia $3$ jenis, kotak B tersedia $5$ jenis, dan kotak C tersedia $2$ jenis.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Berapa banyaknya pilihan yang dimiliki Salma?',
          answer: '$10$ pilihan',
          principle:
            'Aturan penjumlahan: jika suatu kegiatan dapat dilakukan melalui beberapa pilihan yang saling lepas (hanya memilih satu di antara beberapa kotak), total banyaknya cara adalah jumlah pilihan dari masing-masing kategori.',
          solution:
            'Salma hanya membeli satu sabun mandi dari salah satu kotak (A, B, atau C), sehingga pilihan-pilihan tersebut saling lepas.\n\nTotal banyaknya pilihan:\n$$3 + 5 + 2 = 10\\text{ pilihan}.$$',
          rubric: [
            { code: 'A1', text: 'Menjumlahkan pilihan dari ketiga kotak ($3 + 5 + 2 = 10$ pilihan) dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Aturan Penjumlahan pada Pilihan Handphone',
      marks: 1,
      stem: 'Alya ingin membeli handphone di suatu counter HP. Di situ tersedia merek Nokia terdiri $6$ tipe, Samsung ada $3$ tipe, Siemens ada $4$ tipe, dan Sony Ericsson ada $2$ tipe.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Berapa banyak pilihannya?',
          answer: '$15$ pilihan',
          principle:
            'Aturan penjumlahan berlaku karena Alya memilih satu unit handphone dari empat merek yang berbeda dan saling lepas.',
          solution:
            'Karena Alya hanya memilih satu tipe handphone dari salah satu merek yang tersedia, banyaknya pilihan dijumlahkan:\n$$6 + 3 + 4 + 2 = 15\\text{ pilihan}.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung total pilihan handphone ($6 + 3 + 4 + 2 = 15$ pilihan) dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Ruang Sampel Pelemparan Tiga Uang Logam',
      marks: 2,
      stem: 'Tiga buah uang logam dilempar sekali bersama-sama.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan banyaknya dan sebutkan hasil yang mungkin terjadi!',
          answer: '$8$ hasil yang mungkin, yaitu $AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG$ (dengan $A = \\text{Angka}$ dan $G = \\text{Gambar}$).',
          principle:
            'Aturan perkalian untuk kejadian berurutan/bersamaan: setiap uang logam memiliki $2$ kemungkinan sisi ($A$ atau $G$), sehingga untuk $3$ uang logam banyaknya hasil adalah $2 \\times 2 \\times 2 = 2^3$.',
          solution:
            'Misalkan $A$ menyatakan munculnya sisi Angka dan $G$ menyatakan munculnya sisi Gambar.\n\n1. **Banyaknya hasil yang mungkin:**\n   Setiap uang logam memiliki $2$ kemungkinan hasil, maka untuk $3$ uang logam:\n   $$2 \\times 2 \\times 2 = 8\\text{ hasil}.$$\n2. **Daftar seluruh hasil yang mungkin (ruang sampel):**\n   $$S = \\{AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG\\}.$$',
          rubric: [
            { code: 'M1', text: 'Menentukan banyaknya hasil yang mungkin sebesar $2 \\times 2 \\times 2 = 8$.' },
            { code: 'A1', text: 'Menyebutkan seluruh $8$ anggota ruang sampel ($AAA$ hingga $GGG$) secara lengkap dan tepat.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Aturan Perkalian pada Rute Perjalanan Kota',
      marks: 1,
      stem: 'Dari kota A ke kota B dapat ditempuh dengan $2$ cara, sedangkan dari kota B ke kota C dapat ditempuh dengan $4$ cara.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Tentukan banyaknya cara yang dapat ditempuh dari kota A ke kota C melalui B!',
          answer: '$8$ cara',
          principle:
            'Aturan perkalian: jika perjalanan terdiri atas dua tahap berurutan (A ke B dengan $m$ cara, lalu B ke C dengan $n$ cara), total cara adalah $m \\times n$.',
          solution:
            'Perjalanan dari A ke C melalui B terdiri atas dua tahap yang harus dilalui berurutan:\n- Tahap A ke B: $2$ cara.\n- Tahap B ke C: $4$ cara.\n\nMaka banyaknya cara seluruhnya:\n$$2 \\times 4 = 8\\text{ cara}.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung banyaknya rute dari A ke C melalui B ($2 \\times 4 = 8$ cara) dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Pemilihan Susunan Pengurus RT',
      marks: 2,
      stem: 'Untuk membentuk pengurus RT di perumahan Sidomulyo terdapat $4$ calon ketua, $3$ calon sekretaris, dan $2$ calon bendahara.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Dalam berapa carakah susunan pengurus yang terdiri dari seorang ketua, seorang sekretaris, dan seorang bendahara dapat dipilih, dengan ketentuan tidak ada yang merangkap jabatan?',
          answer: '$24$ cara',
          principle:
            'Aturan perkalian pada pengisian tiga jabatan terpisah (ketua, sekretaris, bendahara) dari kelompok calon masing-masing tanpa perangkapan jabatan.',
          solution:
            'Karena setiap jabatan memiliki kelompok calon tersendiri dan tidak ada yang merangkap jabatan:\n- Memilih $1$ ketua dari $4$ calon: $4$ cara.\n- Memilih $1$ sekretaris dari $3$ calon: $3$ cara.\n- Memilih $1$ bendahara dari $2$ calon: $2$ cara.\n\nTotal susunan pengurus yang dapat dibentuk:\n$$4 \\times 3 \\times 2 = 24\\text{ cara}.$$',
          rubric: [
            { code: 'M1', text: 'Menerapkan aturan perkalian $4 \\times 3 \\times 2$ untuk ketiga posisi pengurus.' },
            { code: 'A1', text: 'Memperoleh hasil akhir $24$ cara dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Rute Masuk dan Keluar Pintu Gudang',
      marks: 2,
      stem: 'Sebuah gudang memiliki $6$ pintu. Seseorang akan masuk gudang tersebut kemudian keluar.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: 'Berapa macam rute yang mungkin dapat dilalui jika pintu keluar berbeda dengan pintu saat masuk?',
          answer: '$30$ rute',
          principle:
            'Aturan perkalian tanpa pengulangan: setelah $1$ pintu dipilih untuk masuk, tersisa $(6 - 1) = 5$ pilihan pintu untuk keluar.',
          solution:
            'Banyak cara memilih pintu masuk $= 6$ cara.\nKarena pintu keluar harus berbeda dari pintu masuk, tersisa $6 - 1 = 5$ cara memilih pintu keluar.\n\nTotal rute:\n$$6 \\times 5 = 30\\text{ rute}.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $6 \\times 5 = 30$ rute untuk pintu masuk dan keluar yang berbeda.' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Berapa macam rute yang mungkin dapat dilalui jika pintu keluar boleh sama dengan pintu saat masuk?',
          answer: '$36$ rute',
          principle:
            'Aturan perkalian dengan pengulangan diperbolehkan: banyaknya pilihan pintu keluar tetap sama dengan jumlah seluruh pintu.',
          solution:
            'Banyak cara memilih pintu masuk $= 6$ cara.\nKarena pintu keluar boleh sama dengan pintu masuk, banyak cara memilih pintu keluar tetap $6$ cara.\n\nTotal rute:\n$$6 \\times 6 = 36\\text{ rute}.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $6 \\times 6 = 36$ rute untuk pintu masuk dan keluar yang boleh sama.' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Pengaturan Posisi Duduk dalam Barisan Bersyarat',
      marks: 2,
      stem: '$5$ orang laki-laki dan $4$ orang perempuan duduk dalam sebuah barisan dengan aturan perempuan (tertulis *percampuran* pada naskah) mendapat tempat duduk bernomor genap.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Berapa banyak pengaturan posisi duduk yang mungkin dilakukan?',
          answer: '$2.880$ cara',
          principle:
            'Pengisian tempat bersyarat: kursi $1$ sampai $9$ terdiri atas $4$ kursi genap ($2, 4, 6, 8$) untuk $4$ perempuan dan $5$ kursi ganjil ($1, 3, 5, 7, 9$) untuk $5$ laki-laki. Total susunan adalah hasil kali permutasi masing-masing kelompok: $4! \\times 5!$.',
          solution:
            'Terdapat $5 + 4 = 9$ tempat duduk berurutan bernomor $1, 2, 3, 4, 5, 6, 7, 8, 9$.\n- Posisi genap ada $4$ kursi (nomor $2, 4, 6, 8$), ditempati oleh $4$ perempuan dalam $4! = 24$ cara.\n- Posisi ganjil ada $5$ kursi (nomor $1, 3, 5, 7, 9$), ditempati oleh $5$ laki-laki dalam $5! = 120$ cara.\n\nDengan aturan perkalian, banyaknya pengaturan posisi duduk:\n$$4! \\times 5! = 24 \\times 120 = 2.880\\text{ cara}.$$',
          rubric: [
            { code: 'M1', text: 'Menentukan susunan $4!$ untuk posisi kursi genap dan $5!$ untuk posisi kursi ganjil.' },
            { code: 'A1', text: 'Menghitung hasil akhir $4! \\times 5! = 2.880$ cara dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Penyusunan Bilangan Tiga Angka dari Digit 1 sampai 6',
      marks: 18,
      stem: 'Akan disusun bilangan yang terdiri dari tiga angka dari angka-angka $1, 2, 3, 4, 5$, dan $6$ (tanpa angka $0$). Untuk setiap syarat berikut, tentukan banyaknya bilangan yang dapat disusun jika **(i) angka boleh sama** dan **(ii) angka tidak boleh sama**.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Syarat: bernilai $> 300$',
          answer: 'Angka boleh sama: $144$; angka tidak boleh sama: $80$',
          principle:
            'Bilangan tiga angka dari $\\{1,2,3,4,5,6\\}$ bernilai $> 300$ jika angka ratusan $\\in \\{3,4,5,6\\}$ (karena tidak ada angka $0$, bilangan $300$ tidak mungkin terbentuk).',
          solution:
            'Angka ratusan harus $\\in \\{3, 4, 5, 6\\}$ ($4$ pilihan).\n\n1. **Angka boleh sama:**\n   - Ratusan: $4$ cara, puluhan: $6$ cara, satuan: $6$ cara.\n   - Total $= 4 \\times 6 \\times 6 = 144$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Ratusan: $4$ cara, puluhan: $5$ sisa angka, satuan: $4$ sisa angka.\n   - Total $= 4 \\times 5 \\times 4 = 80$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $> 300$ dengan angka boleh sama $= 144$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $> 300$ dengan angka tidak boleh sama $= 80$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Syarat: bernilai $< 300$',
          answer: 'Angka boleh sama: $72$; angka tidak boleh sama: $40$',
          principle:
            'Bilangan tiga angka dari $\\{1,2,3,4,5,6\\}$ bernilai $< 300$ jika angka ratusan $\\in \\{1, 2\\}$.',
          solution:
            'Angka ratusan harus $\\in \\{1, 2\\}$ ($2$ pilihan).\n\n1. **Angka boleh sama:**\n   $$2 \\times 6 \\times 6 = 72\\text{ bilangan}.$$\n2. **Angka tidak boleh sama:**\n   $$2 \\times 5 \\times 4 = 40\\text{ bilangan}.$$',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $< 300$ dengan angka boleh sama $= 72$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $< 300$ dengan angka tidak boleh sama $= 40$.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'Syarat: bernilai antara $200$–$400$',
          answer: 'Angka boleh sama: $72$; angka tidak boleh sama: $40$',
          principle:
            'Bilangan tiga angka dari $\\{1,2,3,4,5,6\\}$ yang berada di antara $200$ dan $400$ ($200 < x < 400$) memiliki angka ratusan $\\in \\{2, 3\\}$, sebab $200$ dan $400$ tidak mungkin terbentuk tanpa angka $0$.',
          solution:
            'Angka ratusan harus $\\in \\{2, 3\\}$ ($2$ pilihan).\n\n1. **Angka boleh sama:**\n   $$2 \\times 6 \\times 6 = 72\\text{ bilangan}.$$\n2. **Angka tidak boleh sama:**\n   $$2 \\times 5 \\times 4 = 40\\text{ bilangan}.$$',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan antara $200$–$400$ dengan angka boleh sama $= 72$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan antara $200$–$400$ dengan angka tidak boleh sama $= 40$.' }
          ]
        },
        {
          label: 'd',
          marks: 2,
          prompt: 'Syarat: bernilai $> 320$',
          answer: 'Angka boleh sama: $138$; angka tidak boleh sama: $76$',
          principle:
            'Pecah kasus berdasarkan angka ratusan: ratusan $\\in \\{4, 5, 6\\}$ selalu $> 320$, sedangkan untuk ratusan $= 3$, angka puluhan harus $\\ge 2$ (karena tidak ada angka $0$, $32x$ selalu $> 320$).',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{4, 5, 6\\}$: $3 \\times 6 \\times 6 = 108$.\n   - Ratusan $= 3$, puluhan $\\in \\{2, 3, 4, 5, 6\\}$ ($5$ pilihan), satuan ($6$ pilihan): $1 \\times 5 \\times 6 = 30$.\n   - Total $= 108 + 30 = 138$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Ratusan $\\in \\{4, 5, 6\\}$: $3 \\times 5 \\times 4 = 60$.\n   - Ratusan $= 3$, puluhan $\\in \\{2, 4, 5, 6\\}$ ($4$ pilihan selain $3$), satuan ($4$ sisa): $1 \\times 4 \\times 4 = 16$.\n   - Total $= 60 + 16 = 76$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $> 320$ dengan angka boleh sama $= 138$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $> 320$ dengan angka tidak boleh sama $= 76$.' }
          ]
        },
        {
          label: 'e',
          marks: 2,
          prompt: 'Syarat: bernilai $< 320$',
          answer: 'Angka boleh sama: $78$; angka tidak boleh sama: $44$',
          principle:
            'Pecah kasus berdasarkan angka ratusan: ratusan $\\in \\{1, 2\\}$ selalu $< 320$, sedangkan untuk ratusan $= 3$, angka puluhan harus $< 2$ (yaitu puluhan $= 1$).',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{1, 2\\}$: $2 \\times 6 \\times 6 = 72$.\n   - Ratusan $= 3$, puluhan $= 1$, satuan bebas ($6$ pilihan): $1 \\times 1 \\times 6 = 6$.\n   - Total $= 72 + 6 = 78$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Ratusan $\\in \\{1, 2\\}$: $2 \\times 5 \\times 4 = 40$.\n   - Ratusan $= 3$, puluhan $= 1$, satuan ($4$ sisa angka selain $1$ dan $3$): $1 \\times 1 \\times 4 = 4$.\n   - Total $= 40 + 4 = 44$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $< 320$ dengan angka boleh sama $= 78$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $< 320$ dengan angka tidak boleh sama $= 44$.' }
          ]
        },
        {
          label: 'f',
          marks: 2,
          prompt: 'Syarat: bilangan ganjil',
          answer: 'Angka boleh sama: $108$; angka tidak boleh sama: $60$',
          principle:
            'Suatu bilangan bernilai ganjil jika dan hanya jika angka satuannya ganjil ($\\in \\{1, 3, 5\\}$). Saat angka tidak boleh sama, isi posisi bersyarat (satuan) terlebih dahulu.',
          solution:
            'Angka satuan harus ganjil $\\in \\{1, 3, 5\\}$ ($3$ pilihan).\n\n1. **Angka boleh sama:**\n   - Ratusan: $6$, puluhan: $6$, satuan: $3$.\n   - Total $= 6 \\times 6 \\times 3 = 108$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Isi satuan terlebih dahulu: $3$ cara.\n   - Sisa untuk ratusan: $5$ cara; sisa untuk puluhan: $4$ cara.\n   - Total $= 5 \\times 4 \\times 3 = 60$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil dengan angka boleh sama $= 108$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil dengan angka tidak boleh sama $= 60$.' }
          ]
        },
        {
          label: 'g',
          marks: 2,
          prompt: 'Syarat: bilangan genap',
          answer: 'Angka boleh sama: $108$; angka tidak boleh sama: $60$',
          principle:
            'Suatu bilangan bernilai genap jika angka satuannya genap ($\\in \\{2, 4, 6\\}$).',
          solution:
            'Angka satuan harus genap $\\in \\{2, 4, 6\\}$ ($3$ pilihan).\n\n1. **Angka boleh sama:**\n   $$6 \\times 6 \\times 3 = 108\\text{ bilangan}.$$\n2. **Angka tidak boleh sama:**\n   - Pilih satuan ($3$ cara), lalu ratusan ($5$ cara) dan puluhan ($4$ cara):\n   $$5 \\times 4 \\times 3 = 60\\text{ bilangan}.$$',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan genap dengan angka boleh sama $= 108$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan genap dengan angka tidak boleh sama $= 60$.' }
          ]
        },
        {
          label: 'h',
          marks: 2,
          prompt: 'Syarat: bilangan ganjil $> 300$',
          answer: 'Angka boleh sama: $72$; angka tidak boleh sama: $40$',
          principle:
            'Syarat ganda: ratusan $\\in \\{3, 4, 5, 6\\}$ dan satuan $\\in \\{1, 3, 5\\}$. Untuk kasus tanpa pengulangan, pisahkan ratusan genap $\\{4, 6\\}$ dan ratusan ganjil $\\{3, 5\\}$ karena keduanya memengaruhi jumlah pilihan satuan.',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{3, 4, 5, 6\\}$ ($4$ cara), puluhan bebas ($6$ cara), satuan $\\in \\{1, 3, 5\\}$ ($3$ cara).\n   - Total $= 4 \\times 6 \\times 3 = 72$ bilangan.\n2. **Angka tidak boleh sama:**\n   - **Kasus 1 (ratusan $\\in \\{4, 6\\}$):** $2$ pilihan ratusan, $3$ pilihan satuan $\\{1, 3, 5\\}$, dan $4$ sisa untuk puluhan $\\implies 2 \\times 4 \\times 3 = 24$.\n   - **Kasus 2 (ratusan $\\in \\{3, 5\\}$):** $2$ pilihan ratusan, $2$ sisa satuan ganjil, dan $4$ sisa untuk puluhan $\\implies 2 \\times 4 \\times 2 = 16$.\n   - Total $= 24 + 16 = 40$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil $> 300$ dengan angka boleh sama $= 72$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil $> 300$ dengan angka tidak boleh sama $= 40$.' }
          ]
        },
        {
          label: 'i',
          marks: 2,
          prompt: 'Syarat: bilangan genap $< 500$',
          answer: 'Angka boleh sama: $72$; angka tidak boleh sama: $40$',
          principle:
            'Syarat ganda: ratusan $\\in \\{1, 2, 3, 4\\}$ dan satuan $\\in \\{2, 4, 6\\}$. Untuk kasus tanpa pengulangan, pisahkan ratusan ganjil $\\{1, 3\\}$ dan ratusan genap $\\{2, 4\\}$.',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{1, 2, 3, 4\\}$ ($4$ cara), puluhan bebas ($6$ cara), satuan $\\in \\{2, 4, 6\\}$ ($3$ cara).\n   - Total $= 4 \\times 6 \\times 3 = 72$ bilangan.\n2. **Angka tidak boleh sama:**\n   - **Kasus 1 (ratusan $\\in \\{1, 3\\}$):** $2$ pilihan ratusan, $3$ pilihan satuan $\\{2, 4, 6\\}$, dan $4$ sisa puluhan $\\implies 2 \\times 4 \\times 3 = 24$.\n   - **Kasus 2 (ratusan $\\in \\{2, 4\\}$):** $2$ pilihan ratusan, $2$ sisa satuan genap, dan $4$ sisa puluhan $\\implies 2 \\times 4 \\times 2 = 16$.\n   - Total $= 24 + 16 = 40$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan genap $< 500$ dengan angka boleh sama $= 72$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan genap $< 500$ dengan angka tidak boleh sama $= 40$.' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Penyusunan Bilangan Tiga Angka dari Digit 0 sampai 6',
      marks: 18,
      stem: 'Akan disusun bilangan yang terdiri dari tiga angka dari angka-angka $0, 1, 2, 3, 4, 5$, dan $6$ (angka $0$ tidak boleh menempati posisi ratusan). Untuk setiap syarat berikut, tentukan banyaknya bilangan yang dapat disusun jika **(i) angka boleh sama** dan **(ii) angka tidak boleh sama**.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Syarat: bernilai $> 300$',
          answer: 'Angka boleh sama: $195$; angka tidak boleh sama: $120$',
          principle:
            'Ratusan $\\in \\{3, 4, 5, 6\\}$, namun bila angka boleh sama, bilangan $300$ harus dikeluarkan karena syarat meminta $> 300$ secara ketat.',
          solution:
            '1. **Angka boleh sama:**\n   - Banyak susunan dengan ratusan $\\in \\{3, 4, 5, 6\\}$ adalah $4 \\times 7 \\times 7 = 196$.\n   - Karena $300$ tidak lebih besar dari $300$, kurangi $1$: $196 - 1 = 195$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Karena $300$ menggunakan dua angka $0$, $300$ tidak mungkin terbentuk.\n   - Ratusan $\\in \\{3, 4, 5, 6\\}$ ($4$ cara), puluhan ($6$ sisa), satuan ($5$ sisa):\n   $$4 \\times 6 \\times 5 = 120\\text{ bilangan}.$$',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $> 300$ dengan angka boleh sama $= 195$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $> 300$ dengan angka tidak boleh sama $= 120$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'Syarat: bernilai $< 300$',
          answer: 'Angka boleh sama: $98$; angka tidak boleh sama: $60$',
          principle:
            'Bilangan tiga angka bernilai $< 300$ memiliki ratusan $\\in \\{1, 2\\}$ (angka $0$ tidak boleh di posisi ratusan karena harus berupa bilangan tiga angka).',
          solution:
            'Ratusan $\\in \\{1, 2\\}$ ($2$ pilihan).\n\n1. **Angka boleh sama:**\n   $$2 \\times 7 \\times 7 = 98\\text{ bilangan}.$$\n2. **Angka tidak boleh sama:**\n   $$2 \\times 6 \\times 5 = 60\\text{ bilangan}.$$',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $< 300$ dengan angka boleh sama $= 98$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $< 300$ dengan angka tidak boleh sama $= 60$.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'Syarat: bernilai antara $200$–$400$',
          answer: 'Angka boleh sama: $97$; angka tidak boleh sama: $60$',
          principle:
            'Istilah "antara $200$–$400$" bermakna $200 < x < 400$, sehingga ratusan $\\in \\{2, 3\\}$ dan bilangan $200$ (jika angka boleh sama) tidak diikutsertakan.',
          solution:
            'Ratusan harus $\\in \\{2, 3\\}$ ($2$ pilihan), puluhan dan satuan dari $\\{0, 1, 2, 3, 4, 5, 6\\}$.\n\n1. **Angka boleh sama:**\n   - Susunan dengan ratusan $2$ atau $3$ berjumlah $2 \\times 7 \\times 7 = 98$.\n   - Keluarkan bilangan $200$ ($1$ bilangan): $98 - 1 = 97$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Bilangan $200$ tidak mungkin terbentuk, sehingga:\n   $$2 \\times 6 \\times 5 = 60\\text{ bilangan}.$$',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan antara $200$–$400$ dengan angka boleh sama $= 97$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan antara $200$–$400$ dengan angka tidak boleh sama $= 60$.' }
          ]
        },
        {
          label: 'd',
          marks: 2,
          prompt: 'Syarat: bernilai $> 320$',
          answer: 'Angka boleh sama: $181$; angka tidak boleh sama: $109$',
          principle:
            'Pecah kasus ratusan $\\in \\{4, 5, 6\\}$ dan ratusan $= 3$ dengan puluhan $\\ge 2$; keluarkan $320$ karena syarat meminta $> 320$ secara ketat.',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{4, 5, 6\\}$: $3 \\times 7 \\times 7 = 147$.\n   - Ratusan $= 3$, puluhan $\\in \\{2, 3, 4, 5, 6\\}$ ($5$ pilihan), satuan ($7$ pilihan), dikurangi $320$ ($1$ bilangan): $(1 \\times 5 \\times 7) - 1 = 34$.\n   - Total $= 147 + 34 = 181$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Ratusan $\\in \\{4, 5, 6\\}$: $3 \\times 6 \\times 5 = 90$.\n   - Ratusan $= 3$, puluhan $= 2$: satuan $\\in \\{1, 4, 5, 6\\}$ ($4$ pilihan, sebab $0$ menghasilkan $320$ yang tidak $> 320$) $\\implies 1 \\times 1 \\times 4 = 4$.\n   - Ratusan $= 3$, puluhan $\\in \\{4, 5, 6\\}$ ($3$ pilihan), satuan ($5$ sisa): $1 \\times 3 \\times 5 = 15$.\n   - Total $= 90 + 4 + 15 = 109$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $> 320$ dengan angka boleh sama $= 181$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $> 320$ dengan angka tidak boleh sama $= 109$.' }
          ]
        },
        {
          label: 'e',
          marks: 2,
          prompt: 'Syarat: bernilai $< 320$',
          answer: 'Angka boleh sama: $112$; angka tidak boleh sama: $70$',
          principle:
            'Bilangan tiga angka bernilai $< 320$ terbagi atas ratusan $\\in \\{1, 2\\}$ serta ratusan $= 3$ dengan puluhan $\\in \\{0, 1\\}$.',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{1, 2\\}$: $2 \\times 7 \\times 7 = 98$.\n   - Ratusan $= 3$, puluhan $\\in \\{0, 1\\}$ ($2$ cara), satuan bebas ($7$ cara): $1 \\times 2 \\times 7 = 14$.\n   - Total $= 98 + 14 = 112$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Ratusan $\\in \\{1, 2\\}$: $2 \\times 6 \\times 5 = 60$.\n   - Ratusan $= 3$, puluhan $\\in \\{0, 1\\}$ ($2$ cara), satuan ($5$ sisa): $1 \\times 2 \\times 5 = 10$.\n   - Total $= 60 + 10 = 70$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan $< 320$ dengan angka boleh sama $= 112$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan $< 320$ dengan angka tidak boleh sama $= 70$.' }
          ]
        },
        {
          label: 'f',
          marks: 2,
          prompt: 'Syarat: bilangan ganjil',
          answer: 'Angka boleh sama: $126$; angka tidak boleh sama: $75$',
          principle:
            'Satuan harus ganjil $\\in \\{1, 3, 5\\}$ dan ratusan $\\ne 0$. Untuk kasus tidak boleh sama, isi satuan dulu lalu ratusan (tidak boleh $0$ dan tidak sama dengan satuan).',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{1..6\\}$ ($6$ cara), puluhan ($7$ cara), satuan $\\in \\{1, 3, 5\\}$ ($3$ cara).\n   - Total $= 6 \\times 7 \\times 3 = 126$ bilangan.\n2. **Angka tidak boleh sama:**\n   - Satuan $\\in \\{1, 3, 5\\}$ ($3$ cara).\n   - Ratusan $\\ne 0$ dan bukan satuan ($5$ cara).\n   - Puluhan ($5$ sisa angka termasuk $0$).\n   - Total $= 5 \\times 5 \\times 3 = 75$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil dengan angka boleh sama $= 126$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil dengan angka tidak boleh sama $= 75$.' }
          ]
        },
        {
          label: 'g',
          marks: 2,
          prompt: 'Syarat: bilangan genap',
          answer: 'Angka boleh sama: $168$; angka tidak boleh sama: $105$',
          principle:
            'Satuan harus genap $\\in \\{0, 2, 4, 6\\}$ dan ratusan $\\ne 0$. Untuk kasus tidak boleh sama, pisahkan kasus satuan $= 0$ dan satuan $\\in \\{2, 4, 6\\}$.',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{1..6\\}$ ($6$ cara), puluhan ($7$ cara), satuan $\\in \\{0, 2, 4, 6\\}$ ($4$ cara).\n   - Total $= 6 \\times 7 \\times 4 = 168$ bilangan.\n2. **Angka tidak boleh sama:**\n   - **Kasus 1 (satuan $= 0$):** $1$ cara satuan, $6$ cara ratusan $\\{1..6\\}$, $5$ cara puluhan $\\implies 6 \\times 5 \\times 1 = 30$.\n   - **Kasus 2 (satuan $\\in \\{2, 4, 6\\}$):** $3$ cara satuan, $5$ cara ratusan ($\\ne 0$ dan $\\ne$ satuan), $5$ cara puluhan $\\implies 5 \\times 5 \\times 3 = 75$.\n   - Total $= 30 + 75 = 105$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan genap dengan angka boleh sama $= 168$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan genap dengan angka tidak boleh sama $= 105$.' }
          ]
        },
        {
          label: 'h',
          marks: 2,
          prompt: 'Syarat: bilangan ganjil $> 300$',
          answer: 'Angka boleh sama: $84$; angka tidak boleh sama: $50$',
          principle:
            'Ratusan $\\in \\{3, 4, 5, 6\\}$ dan satuan $\\in \\{1, 3, 5\\}$ (sehingga $300$ otomatis tidak masuk karena $300$ genap).',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{3, 4, 5, 6\\}$ ($4$ cara), puluhan ($7$ cara), satuan $\\in \\{1, 3, 5\\}$ ($3$ cara).\n   - Total $= 4 \\times 7 \\times 3 = 84$ bilangan.\n2. **Angka tidak boleh sama:**\n   - **Kasus 1 (ratusan $\\in \\{4, 6\\}$):** $2$ cara ratusan, $3$ cara satuan $\\{1, 3, 5\\}$, $5$ sisa puluhan $\\implies 2 \\times 5 \\times 3 = 30$.\n   - **Kasus 2 (ratusan $\\in \\{3, 5\\}$):** $2$ cara ratusan, $2$ sisa satuan ganjil, $5$ sisa puluhan $\\implies 2 \\times 5 \\times 2 = 20$.\n   - Total $= 30 + 20 = 50$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil $> 300$ dengan angka boleh sama $= 84$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan ganjil $> 300$ dengan angka tidak boleh sama $= 50$.' }
          ]
        },
        {
          label: 'i',
          marks: 2,
          prompt: 'Syarat: bilangan genap $< 500$',
          answer: 'Angka boleh sama: $112$; angka tidak boleh sama: $70$',
          principle:
            'Ratusan $\\in \\{1, 2, 3, 4\\}$ dan satuan $\\in \\{0, 2, 4, 6\\}$. Untuk kasus tidak boleh sama, pecah berdasarkan satuan $= 0$ vs satuan $\\in \\{2, 4, 6\\}$ serta paritas angka ratusan.',
          solution:
            '1. **Angka boleh sama:**\n   - Ratusan $\\in \\{1, 2, 3, 4\\}$ ($4$ cara), puluhan ($7$ cara), satuan $\\in \\{0, 2, 4, 6\\}$ ($4$ cara).\n   - Total $= 4 \\times 7 \\times 4 = 112$ bilangan.\n2. **Angka tidak boleh sama:**\n   - **Kasus 1 (satuan $= 0$):** ratusan $\\in \\{1, 2, 3, 4\\}$ ($4$ cara), puluhan ($5$ sisa) $\\implies 4 \\times 5 \\times 1 = 20$.\n   - **Kasus 2 (satuan $\\in \\{2, 4, 6\\}$, ratusan $\\in \\{1, 3\\}$):** ratusan ($2$ cara), satuan ($3$ cara), puluhan ($5$ sisa) $\\implies 2 \\times 5 \\times 3 = 30$.\n   - **Kasus 3 (satuan $\\in \\{2, 4, 6\\}$, ratusan $\\in \\{2, 4\\}$):** ratusan ($2$ cara), satuan ($2$ sisa), puluhan ($5$ sisa) $\\implies 2 \\times 5 \\times 2 = 20$.\n   - Total $= 20 + 30 + 20 = 70$ bilangan.',
          rubric: [
            { code: 'A1', text: 'Menentukan banyak bilangan genap $< 500$ dengan angka boleh sama $= 112$.' },
            { code: 'A1', text: 'Menentukan banyak bilangan genap $< 500$ dengan angka tidak boleh sama $= 70$.' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Bilangan Tiga Angka antara 450 dan 700 Tanpa Pengulangan',
      marks: 2,
      stem: 'Dari angka-angka $2, 3, 4, 5, 6$, dan $7$ akan disusun bilangan yang bernilai antara $450$ dan $700$, dengan syarat angka-angka tersebut tidak boleh berulang.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Berapa banyaknya bilangan yang dapat disusun?',
          answer: '$52$ bilangan',
          principle:
            'Pecah kasus berdasarkan angka ratusan untuk rentang $450 < x < 700$: kasus ratusan $= 4$ (puluhan $\\ge 5$) dan kasus ratusan $\\in \\{5, 6\\}$.',
          solution:
            'Tersedia $6$ angka berbeda: $\\{2, 3, 4, 5, 6, 7\\}$.\n\n1. **Kasus 1 (ratusan $= 4$):**\n   - Agar $> 450$, puluhan harus $\\in \\{5, 6, 7\\}$ ($3$ cara).\n   - Satuan dipilih dari $6 - 2 = 4$ angka tersisa.\n   - Banyak bilangan $= 1 \\times 3 \\times 4 = 12$.\n2. **Kasus 2 (ratusan $\\in \\{5, 6\\}$):**\n   - Ratusan ada $2$ pilihan, puluhan ada $5$ sisa angka, satuan ada $4$ sisa angka.\n   - Banyak bilangan $= 2 \\times 5 \\times 4 = 40$.\n\nTotal bilangan yang dapat disusun:\n$$12 + 40 = 52\\text{ bilangan}.$$',
          rubric: [
            { code: 'M1', text: 'Membagi kasus ratusan $= 4$ ($12$ bilangan) dan ratusan $\\in \\{5, 6\\}$ ($40$ bilangan).' },
            { code: 'A1', text: 'Menjumlahkan kedua kasus hingga diperoleh $52$ bilangan.' }
          ]
        }
      ]
    },
    {
      no: 11,
      title: 'Menghitung Nilai Ekspresi Faktorial (Paket 2 No. 1)',
      marks: 5,
      stem: 'Hitunglah nilai dari masing-masing bentuk faktorial berikut:',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: '$$\\frac{8!}{6!\\,3!}$$',
          answer: '$\\frac{28}{3}$ atau $9\\frac{1}{3}$',
          principle:
            'Sederhanakan pecahan faktorial dengan menguraikan faktorial terbesar hingga muncul faktorial penyebut: $n! = n(n-1)\\cdots(k+1)\\cdot k!$.',
          solution:
            'Uraikan $8! = 8 \\times 7 \\times 6!$ dan $3! = 3 \\times 2 \\times 1 = 6$:\n$$\\frac{8!}{6!\\,3!} = \\frac{8 \\times 7 \\times 6!}{6! \\times 6} = \\frac{56}{6} = \\frac{28}{3} = 9\\frac{1}{3}.$$',
          rubric: [
            { code: 'A1', text: 'Menyederhanakan $\\frac{8!}{6!\\,3!}$ menjadi $\\frac{28}{3}$ (atau $9\\frac{1}{3}$) dengan tepat.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: '$$40!$$',
          answer: '$815.915.283.247.897.734.345.611.269.596.115.894.272.000.000.000$ (atau $\\approx 8{,}159 \\times 10^{47}$)',
          principle:
            'Definisi faktorial bilangan bulat positif: $n! = n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1$.',
          solution:
            'Berdasarkan definisi faktorial:\n$$40! = 40 \\times 39 \\times 38 \\times \\cdots \\times 2 \\times 1$$\nNilai eksaknya adalah bilangan bulat $48$ digit:\n$$40! = 815.915.283.247.897.734.345.611.269.596.115.894.272.000.000.000 \\approx 8{,}159 \\times 10^{47}.$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan ekspansi definisi $40! = 40 \\times 39 \\times \\cdots \\times 1$.' },
            { code: 'A1', text: 'Menyatakan nilai eksak $40!$ (atau pendekatan baku $\\approx 8{,}159 \\times 10^{47}$) dengan tepat.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: '$$\\frac{6!}{4!\\,3!} \\times \\frac{8!}{5!}$$',
          answer: '$1.680$',
          principle:
            'Sederhanakan tiap pecahan faktorial terlebih dahulu sebelum mengalikan hasilnya.',
          solution:
            'Sederhanakan masing-masing pecahan:\n$$\\frac{6!}{4!\\,3!} = \\frac{6 \\times 5 \\times 4!}{4! \\times (3 \\times 2 \\times 1)} = \\frac{30}{6} = 5$$\n$$\\frac{8!}{5!} = \\frac{8 \\times 7 \\times 6 \\times 5!}{5!} = 8 \\times 7 \\times 6 = 336$$\nKalikan kedua hasil tersebut:\n$$5 \\times 336 = 1.680.$$',
          rubric: [
            { code: 'M1', text: 'Menyederhanakan $\\frac{6!}{4!\\,3!} = 5$ dan $\\frac{8!}{5!} = 336$.' },
            { code: 'A1', text: 'Menghitung hasil perkalian $5 \\times 336 = 1.680$ dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 12,
      title: 'Menyatakan Perkalian Bilangan dalam Notasi Faktorial (Paket 2 No. 2)',
      marks: 4,
      stem: 'Nyatakan bentuk perkalian berikut dalam notasi faktorial!',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: '$$17 \\times 16 \\times 15 \\times 14 \\times 13$$',
          answer: '$\\frac{17!}{12!}$',
          principle:
            'Perkalian berurutan menurun dari $a$ hingga $b$ dapat ditulis sebagai $\\frac{a!}{(b-1)!}$.',
          solution:
            'Kalikan pembilang dan penyebut dengan $12!$:\n$$17 \\times 16 \\times 15 \\times 14 \\times 13 = \\frac{17 \\times 16 \\times 15 \\times 14 \\times 13 \\times 12!}{12!} = \\frac{17!}{12!}.$$',
          rubric: [
            { code: 'A1', text: 'Menuliskan bentuk faktorial $\\frac{17!}{12!}$ dengan tepat.' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: '$$40 \\times 39 \\times 38$$',
          answer: '$\\frac{40!}{37!}$',
          principle:
            'Perkalian tiga bilangan berurutan menurun dari $40$ ke $38$ dilengkapi dengan mengalikan $\\frac{37!}{37!}$.',
          solution:
            'Kalikan pembilang dan penyebut dengan $37!$:\n$$40 \\times 39 \\times 38 = \\frac{40 \\times 39 \\times 38 \\times 37!}{37!} = \\frac{40!}{37!}.$$',
          rubric: [
            { code: 'A1', text: 'Menuliskan bentuk faktorial $\\frac{40!}{37!}$ dengan tepat.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: '$$\\frac{13 \\times 12 \\times 11 \\times 10}{5 \\times 4 \\times 3 \\times 2 \\times 1}$$',
          answer: '$\\frac{13!}{9!\\,5!}$',
          principle:
            'Ubah pembilang menjadi perbandingan dua faktorial ($\\frac{13!}{9!}$) dan kenali penyebutnya sebagai $5!$.',
          solution:
            'Pada pembilang, $13 \\times 12 \\times 11 \\times 10 = \\frac{13!}{9!}$.\nPada penyebut, $5 \\times 4 \\times 3 \\times 2 \\times 1 = 5!$.\n\nJadi:\n$$\\frac{13 \\times 12 \\times 11 \\times 10}{5 \\times 4 \\times 3 \\times 2 \\times 1} = \\frac{13!}{9!\\,5!}.$$',
          rubric: [
            { code: 'M1', text: 'Menyatakan pembilang sebagai $\\frac{13!}{9!}$ dan penyebut sebagai $5!$.' },
            { code: 'A1', text: 'Menggabungkannya menjadi $\\frac{13!}{9!\\,5!}$ dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 13,
      title: 'Menyatakan Bentuk Aljabar dalam Notasi Faktorial (Paket 2 No. 3)',
      marks: 4,
      stem: 'Nyatakan bentuk aljabar berikut dalam notasi faktorial.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: '$$n(n-1)(n-1)$$',
          answer: '$\\frac{n!\\,(n-1)!}{((n-2)!)^2}$ untuk $n \\ge 2$ (catatan: jika terdapat salah cetak dari $n(n-1)(n-2)$, hasilnya adalah $\\frac{n!}{(n-3)!}$ untuk $n \\ge 3$).',
          principle:
            'Setiap faktor atau pasangan faktor berurutan dapat diubah ke bentuk faktorial menggunakan identitas $k(k-1) = \\frac{k!}{(k-2)!}$ dan $(k-1) = \\frac{(k-1)!}{(k-2)!}$.',
          solution:
            'Sesuai teks asli pada lembar soal $n(n-1)(n-1)$ untuk $n \\ge 2$:\n$$n(n-1) = \\frac{n!}{(n-2)!} \\quad \\text{dan} \\quad (n-1) = \\frac{(n-1)!}{(n-2)!}$$\nMaka:\n$$n(n-1)(n-1) = \\frac{n!}{(n-2)!} \\cdot \\frac{(n-1)!}{(n-2)!} = \\frac{n!\\,(n-1)!}{((n-2)!)^2}.$$\n*(Catatan: apabila suku terakhir pada naskah merupakan salah cetak dari $n(n-1)(n-2)$, bentuk faktorialnya adalah $\\frac{n!}{(n-3)!}$ untuk $n \\ge 3$.)*',
          rubric: [
            { code: 'M1', text: 'Menguraikan $n(n-1) = \\frac{n!}{(n-2)!}$ dan $n-1 = \\frac{(n-1)!}{(n-2)!}$.' },
            { code: 'A1', text: 'Menyatakan hasil $\\frac{n!\\,(n-1)!}{((n-2)!)^2}$ (serta mencatat kasus $n(n-1)(n-2) = \\frac{n!}{(n-3)!}$).' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: '$$\\frac{(n+2)(n+1)}{3 \\times 2 \\times 1}$$',
          answer: '$\\frac{(n+2)!}{3!\\,n!}$',
          principle:
            'Perkalian $(n+2)(n+1)$ dapat dinyatakan sebagai $\\frac{(n+2)!}{n!}$, sedangkan $3 \\times 2 \\times 1 = 3!$.',
          solution:
            'Kalikan pembilang dan penyebut dengan $n!$ (untuk $n \\ge 0$):\n$$\\frac{(n+2)(n+1)}{3 \\times 2 \\times 1} = \\frac{(n+2)(n+1) \\cdot n!}{3! \\cdot n!} = \\frac{(n+2)!}{3!\\,n!}.$$',
          rubric: [
            { code: 'M1', text: 'Menyatakan $(n+2)(n+1) = \\frac{(n+2)!}{n!}$ dan $3 \\times 2 \\times 1 = 3!$.' },
            { code: 'A1', text: 'Memperoleh bentuk faktorial $\\frac{(n+2)!}{3!\\,n!}$ dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 14,
      title: 'Menentukan Nilai n dari Persamaan Faktorial (Paket 2 No. 4)',
      marks: 4,
      stem: 'Tentukan nilai $n$ yang memenuhi persamaan faktorial berikut:',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: '$$\\frac{(n+1)!}{(n-1)!} = 56$$',
          answer: '$n = 7$',
          principle:
            'Uraikan faktorial yang lebih besar hingga mencapai faktorial penyebut: $(n+1)! = (n+1)n(n-1)!$, dengan syarat $n - 1 \\ge 0 \\implies n \\ge 1$.',
          solution:
            'Sederhanakan ruas kiri:\n$$\\frac{(n+1)n(n-1)!}{(n-1)!} = 56$$\n$$n(n+1) = 56$$\n$$n^2 + n - 56 = 0 \\implies (n+8)(n-7) = 0$$\nDiperoleh $n = -8$ atau $n = 7$. Karena faktorial terdefinisi untuk $n - 1 \\ge 0$ ($n \\ge 1$), maka nilai yang memenuhi adalah:\n$$n = 7.$$',
          rubric: [
            { code: 'M1', text: 'Menyederhanakan persamaan menjadi $(n+1)n = 56$ atau $n^2 + n - 56 = 0$.' },
            { code: 'A1', text: 'Menentukan $n = 7$ dan menolak akar negatif $n = -8$.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: '$$4!\\,(n+2)! = 3!\\,(n+3)!$$',
          answer: '$n = 1$',
          principle:
            'Kelompokkan suku faktorial bilangan di satu ruas dan suku variabel di ruas lain, lalu sederhanakan: $\\frac{4!}{3!} = \\frac{(n+3)!}{(n+2)!}$.',
          solution:
            'Bagi kedua ruas dengan $3!\\,(n+2)!$:\n$$\\frac{4!}{3!} = \\frac{(n+3)!}{(n+2)!}$$\n$$\\frac{4 \\times 3!}{3!} = \\frac{(n+3)(n+2)!}{(n+2)!}$$\n$$4 = n + 3 \\implies n = 1.$$',
          rubric: [
            { code: 'M1', text: 'Menyederhanakan $\\frac{4!}{3!} = 4$ dan $\\frac{(n+3)!}{(n+2)!} = n + 3$.' },
            { code: 'A1', text: 'Memperoleh nilai $n = 1$ dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 15,
      title: 'Menghitung Nilai Permutasi (Paket 2 No. 5)',
      marks: 4,
      stem: 'Hitunglah nilai dari masing-masing permutasi berikut:',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt: '$$P_{(6,6)}$$',
          answer: '$720$',
          principle:
            'Rumus permutasi $r$ unsur dari $n$ unsur: $P(n, r) = \\frac{n!}{(n-r)!}$; khususnya $P(n, n) = n!$.',
          solution:
            '$$P_{(6,6)} = \\frac{6!}{(6-6)!} = \\frac{6!}{0!} = 6! = 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $P_{(6,6)} = 720$ dengan tepat.' }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: '$$P_{(7,5)}$$',
          answer: '$2.520$',
          principle:
            'Gunakan definisi $P(n, r) = \\frac{n!}{(n-r)!}$.',
          solution:
            '$$P_{(7,5)} = \\frac{7!}{(7-5)!} = \\frac{7!}{2!} = 7 \\times 6 \\times 5 \\times 4 \\times 3 = 2.520.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $P_{(7,5)} = 2.520$ dengan tepat.' }
          ]
        },
        {
          label: 'c',
          marks: 1,
          prompt: '$$P_{(30,2)}$$',
          answer: '$870$',
          principle:
            'Gunakan $P(30, 2) = \\frac{30!}{28!} = 30 \\times 29$.',
          solution:
            '$$P_{(30,2)} = \\frac{30!}{(30-2)!} = \\frac{30 \\times 29 \\times 28!}{28!} = 30 \\times 29 = 870.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $P_{(30,2)} = 870$ dengan tepat.' }
          ]
        },
        {
          label: 'd',
          marks: 1,
          prompt: '$$P_{(18,4)}$$',
          answer: '$73.440$',
          principle:
            'Gunakan $P(18, 4) = \\frac{18!}{14!} = 18 \\times 17 \\times 16 \\times 15$.',
          solution:
            '$$P_{(18,4)} = \\frac{18!}{(18-4)!} = \\frac{18!}{14!} = 18 \\times 17 \\times 16 \\times 15 = 73.440.$$',
          rubric: [
            { code: 'A1', text: 'Menghitung $P_{(18,4)} = 73.440$ dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 16,
      title: 'Menentukan Nilai n dari Persamaan Permutasi (Paket 2 No. 6)',
      marks: 4,
      stem: 'Carilah nilai $n$ dari masing-masing persamaan permutasi berikut:',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: '$${}_{(n+1)}P_2 = {}_4P_2$$',
          answer: '$n = 3$',
          principle:
            'Dengan sifat kesamaan permutasi untuk $r$ yang sama, jika ${}_aP_2 = {}_bP_2$ dengan $a, b \\ge 2$, maka $a = b$; dapat juga diuraikan menggunakan rumus $P(k, 2) = k(k-1)$.',
          solution:
            'Uraikan kedua ruas menggunakan $P(k, 2) = \\frac{k!}{(k-2)!} = k(k-1)$:\n$$(n+1)n = 4 \\times 3 = 12$$\n$$n^2 + n - 12 = 0 \\implies (n+4)(n-3) = 0$$\nKarena syarat permutasi menuntut $n + 1 \\ge 2 \\implies n \\ge 1$, maka nilai yang memenuhi adalah:\n$$n = 3.$$',
          rubric: [
            { code: 'M1', text: 'Menjabarkan persamaan menjadi $(n+1)n = 4 \\times 3 = 12$.' },
            { code: 'A1', text: 'Menentukan $n = 3$ dengan tepat.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: '$$\\frac{P_{(n+2)}}{P_{(n+1)}} = 10$$',
          answer: '$n = 8$',
          principle:
            'Notasi permutasi satu indeks $P_{(k)}$ menyatakan permutasi seluruh $k$ unsur, yaitu $P_{(k)} = P(k, k) = k!$.',
          solution:
            'Dengan $P_{(k)} = k!$, persamaan menjadi:\n$$\\frac{(n+2)!}{(n+1)!} = 10$$\nUraikan $(n+2)! = (n+2)(n+1)!$:\n$$\\frac{(n+2)(n+1)!}{(n+1)!} = 10 \\implies n + 2 = 10 \\implies n = 8.$$',
          rubric: [
            { code: 'M1', text: 'Menuliskan $\\frac{P_{(n+2)}}{P_{(n+1)}} = \\frac{(n+2)!}{(n+1)!} = n + 2$.' },
            { code: 'A1', text: 'Memperoleh nilai $n = 8$ dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 17,
      title: 'Permutasi Bilangan Tiga Angka Berbeda (Paket 2 No. 7)',
      marks: 2,
      stem: 'Dari angka-angka $2, 3, 4, 5, 6$, dan $7$ akan dibentuk bilangan asli yang terdiri dari tiga angka yang berbeda.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan banyaknya bilangan yang terbentuk!',
          answer: '$120$ bilangan',
          principle:
            'Menyusun $r = 3$ angka berbeda dari $n = 6$ angka tersedia (urutan posisi ratusan, puluhan, satuan diperhatikan) merupakan permutasi $P(6, 3)$.',
          solution:
            'Tersedia $6$ angka berbeda ($2, 3, 4, 5, 6, 7$) dan akan dipilih serta disusun $3$ angka berbeda:\n$$P(6, 3) = \\frac{6!}{(6-3)!} = \\frac{6!}{3!} = 6 \\times 5 \\times 4 = 120\\text{ bilangan}.$$',
          rubric: [
            { code: 'M1', text: 'Mengidentifikasi model permutasi $P(6, 3) = \\frac{6!}{3!}$.' },
            { code: 'A1', text: 'Menghitung hasil akhir $120$ bilangan dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 18,
      title: 'Permutasi dengan Unsur yang Sama pada Kata (Paket 2 No. 8)',
      marks: 6,
      stem: 'Tentukan banyaknya susunan huruf yang dapat disusun dari huruf-huruf pada kata berikut:',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'SRIWEDARI',
          answer: '$90.720$ susunan',
          principle:
            'Permutasi $n$ unsur dengan beberapa unsur yang sama berjumlah $k_1, k_2, \\dots$: $P = \\frac{n!}{k_1!\\,k_2!\\cdots}$.',
          solution:
            'Kata **SRIWEDARI** memiliki $n = 9$ huruf dengan rincian huruf kembar:\n- R: $2$ huruf\n- I: $2$ huruf\n- S, W, E, D, A: masing-masing $1$ huruf.\n\nBanyak susunan huruf:\n$$P = \\frac{9!}{2!\\,2!} = \\frac{362.880}{2 \\times 2} = \\frac{362.880}{4} = 90.720\\text{ susunan}.$$',
          rubric: [
            { code: 'M1', text: 'Mengidentifikasi $n = 9$ serta unsur sama $R = 2$ dan $I = 2$ dalam rumus $\\frac{9!}{2!\\,2!}$.' },
            { code: 'A1', text: 'Menghitung hasil akhir $90.720$ susunan dengan tepat.' }
          ]
        },
        {
          label: 'b',
          marks: 2,
          prompt: 'STATISTIK',
          answer: '$15.120$ susunan',
          principle:
            'Gunakan rumus permutasi unsur sama $\\frac{n!}{k_1!\\,k_2!\\,k_3!}$ sesuai frekuensi setiap huruf pada kata **STATISTIK**.',
          solution:
            'Kata **STATISTIK** memiliki $n = 9$ huruf dengan rincian:\n- S: $2$ huruf\n- T: $3$ huruf\n- I: $2$ huruf\n- A, K: masing-masing $1$ huruf.\n\nBanyak susunan huruf:\n$$P = \\frac{9!}{2!\\,3!\\,2!} = \\frac{362.880}{2 \\times 6 \\times 2} = \\frac{362.880}{24} = 15.120\\text{ susunan}.$$',
          rubric: [
            { code: 'M1', text: 'Mengidentifikasi $n = 9$ serta unsur sama $S = 2, T = 3, I = 2$ dalam rumus $\\frac{9!}{2!\\,3!\\,2!}$.' },
            { code: 'A1', text: 'Menghitung hasil akhir $15.120$ susunan dengan tepat.' }
          ]
        },
        {
          label: 'c',
          marks: 2,
          prompt: 'MISSISIPPI',
          answer: '$12.600$ susunan',
          principle:
            'Hitung tepat jumlah seluruh huruf dan frekuensi tiap huruf pada ejaan **MISSISIPPI** yang tercantum di lembar soal ($10$ huruf).',
          solution:
            'Sesuai ejaan pada naskah soal, kata **MISSISIPPI** memiliki $n = 10$ huruf dengan rincian:\n- M: $1$ huruf\n- I: $4$ huruf\n- S: $3$ huruf\n- P: $2$ huruf\n\nBanyak susunan huruf:\n$$P = \\frac{10!}{4!\\,3!\\,2!} = \\frac{3.628.800}{24 \\times 6 \\times 2} = \\frac{3.628.800}{288} = 12.600\\text{ susunan}.$$',
          rubric: [
            { code: 'M1', text: 'Mengidentifikasi $n = 10$ serta unsur sama $I = 4, S = 3, P = 2$ dalam rumus $\\frac{10!}{4!\\,3!\\,2!}$.' },
            { code: 'A1', text: 'Menghitung hasil akhir $12.600$ susunan dengan tepat.' }
          ]
        }
      ]
    },
    {
      no: 19,
      title: 'Permutasi Siklis Regu Pramuka Mengelilingi Api Unggun (Paket 2 No. 9)',
      marks: 2,
      stem: 'Satu regu pramuka yang terdiri $10$ orang melakukan acara api unggun, sehingga berdiri melingkar mengelilingi api.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt: 'Tentukan banyaknya posisi berdiri mereka!',
          answer: '$362.880$ posisi',
          principle:
            'Permutasi siklis (susunan melingkar) dari $n$ unsur berbeda memiliki rumus $P_{\\text{siklis}} = (n - 1)!$.',
          solution:
            'Karena $n = 10$ anggota pramuka berdiri membentuk lingkaran (tanpa posisi acuan tetap), banyaknya posisi berdiri dihitung dengan permutasi siklis:\n$$P_{\\text{siklis}} = (10 - 1)! = 9! = 362.880\\text{ posisi}.$$',
          rubric: [
            { code: 'M1', text: 'Menggunakan rumus permutasi siklis $(10 - 1)! = 9!$.' },
            { code: 'A1', text: 'Menghitung hasil akhir $9! = 362.880$ posisi dengan tepat.' }
          ]
        }
      ]
    }
  ]
};
