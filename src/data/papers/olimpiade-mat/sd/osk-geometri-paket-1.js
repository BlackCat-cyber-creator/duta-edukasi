/**
 * Paket Soal Terstruktur: OSN-K Matematika SD — Geometri Paket 1 (15 Soal / 16 Bagian)
 * Sumber: 3 GEOMETRI PAKET 1.pdf (Modul Olimpiade SD PrimaNesa, Paket 1 Geometri).
 * Seluruh 15 nomor soal dimuat lengkap: soal bergambar (nomor 3–15) dilengkapi diagram SVG vektor
 * yang direkonstruksi persis dari naskah PDF. Soal nomor 11 dan 13 dipertahankan dalam bahasa Inggris
 * sesuai teks asli pada PDF.
 */
export default {
  id: 'osk-mat-sd-geometri-p1',
  slug: 'osk-geometri-paket-1',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'OSN-K Matematika SD — Geometri Paket 1: sifat bangun datar, luas daerah arsiran (segitiga, persegi, trapesium, layang-layang, lingkaran), jaring-jaring kubus, dan lintasan rangka kubus',
  relatedChapterIds: [
    'sd4-bab4-luas-volume',
    'sd4-bab5-bangun-datar',
    'sd5-bab4-keliling-bangun-datar',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd5-bab6-sudut',
    'sd5-bab7-membandingkan-bangun-datar',
    'sd6-bab3-kubus-balok'
  ],
  lang: 'id',
  langDisplay: 'ID',
  competition: 'OSN-K',
  title: 'OSN-K Matematika SD — Geometri Paket 1',
  totalMarks: 32,
  instructions:
    'Kerjakan seluruh 15 soal geometri berikut (Bagian A nomor 1–14 masing-masing bernilai 2 poin, dan Bagian B nomor 15a–15b masing-masing bernilai 2 poin; total 32 poin: 1 poin langkah dan 1 poin jawaban akhir). Seluruh 15 soal pada naskah sumber dimuat lengkap beserta diagram SVG rekonstruksi untuk nomor 3–15. Soal nomor 11 dan 13 dipertahankan dalam bahasa Inggris sesuai naskah aslinya.',
  source: {
    org: 'OSN-K',
    file: '3 GEOMETRI PAKET 1.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Bagian A: Pilihan Ganda dan Isian Singkat (Nomor 1–14)',
      marks: 28,
      stem: 'Selesaikan soal nomor 1–14 berikut dengan cermat (pilihan ganda pada nomor 1–5 dan 13–14; isian singkat pada nomor 6–12). Setiap nomor bernilai 2 poin.',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Perhatikan data berikut:\n(i) memiliki $4$ sisi sama panjang\n(ii) diagonalnya merupakan sumbu simetri\n(iii) memiliki simetri putar tingkat $4$\n(iv) memiliki $4$ simetri lipat\n\nBangun datar yang memiliki sifat-sifat di atas adalah ....\n\nA. persegi\nB. persegi panjang\nC. belah ketupat\nD. layang-layang',
          answer: 'A. persegi',
          principle:
            'Bandingkan jumlah simetri lipat dan tingkat simetri putar pada segi empat: hanya persegi yang memiliki $4$ sumbu simetri dan simetri putar tingkat $4$.',
          solution:
            'Periksa keempat pilihan terhadap seluruh sifat pada soal:\n1. **Persegi**: memiliki $4$ sisi sama panjang, kedua diagonalnya membagi persegi menjadi dua segitiga kongruen yang saling simetris (sumbu simetri), memiliki $4$ simetri lipat (dua garis tengah sisi dan dua diagonal), serta simetri putar tingkat $4$ (setiap putaran $90^\\circ$ menempati bingkainya kembali).\n2. **Persegi panjang**: sisi tidak semua sama panjang, memiliki $2$ simetri lipat (diagonal bukan sumbu simetri) dan simetri putar tingkat $2$.\n3. **Belah ketupat**: memiliki $4$ sisi sama panjang dan diagonal sebagai sumbu simetri, tetapi hanya memiliki $2$ simetri lipat dan simetri putar tingkat $2$.\n4. **Layang-layang**: tidak memiliki $4$ sisi sama panjang, hanya memiliki $1$ simetri lipat dan simetri putar tingkat $1$.\n\nJadi bangun datar yang memenuhi semua sifat tersebut adalah **persegi** (A).',
          rubric: [
            { code: 'M1', text: 'Menguji sifat simetri lipat tingkat $4$ dan simetri putar tingkat $4$ untuk membedakan persegi dari belah ketupat.' },
            { code: 'A1', text: 'Memilih A. persegi.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Bangun datar yang mempunyai sifat-sifat:\n- mempunyai dua pasang sisi sama panjang\n- mempunyai dua pasang sudut sama besar\n- diagonal-diagonalnya bertemu dan membentuk sudut siku-siku\n\nadalah bangun ....\n\nA. belah ketupat\nB. jajargenjang\nC. layang-layang\nD. trapesium',
          answer: 'A. belah ketupat',
          principle:
            'Belah ketupat memiliki dua pasang sisi berhadapan sama panjang (keempat sisinya sama panjang), dua pasang sudut berhadapan sama besar, dan kedua diagonal saling berpotongan tegak lurus.',
          solution:
            'Periksa setiap bangun datar terhadap ketiga syarat:\n1. **Belah ketupat**:\n   - Keempat sisinya sama panjang, sehingga otomatis mempunyai dua pasang sisi berhadapan yang sama panjang.\n   - Sudut-sudut yang berhadapan sama besar, sehingga terdapat tepat dua pasang sudut sama besar ($\\angle A = \\angle C$ dan $\\angle B = \\angle D$).\n   - Kedua diagonalnya berpotongan saling tegak lurus membentuk sudut siku-siku ($90^\\circ$).\n2. **Jajargenjang**: memiliki dua pasang sisi sama panjang dan dua pasang sudut sama besar, tetapi diagonal-diagonalnya secara umum tidak berpotongan siku-siku.\n3. **Layang-layang**: memiliki dua pasang sisi berdekatan sama panjang dan diagonal berpotongan siku-siku, tetapi secara umum hanya memiliki **satu** pasang sudut berhadapan yang sama besar.\n4. **Trapesium**: secara umum tidak memiliki dua pasang sisi sama panjang maupun diagonal yang saling tegak lurus.\n\nJadi bangun yang memenuhi ketiga sifat tersebut adalah **belah ketupat** (A).',
          rubric: [
            { code: 'M1', text: 'Memeriksa ketiga syarat terutama syarat dua pasang sudut sama besar dan diagonal tegak lurus.' },
            { code: 'A1', text: 'Memilih A. belah ketupat.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Perhatikan gambar di samping! $ABCD$ dan $AFCE$ adalah layang-layang dengan sumbu sama. Jika panjang $AC$ adalah $15\\text{ cm}$ dan panjang $DE$ adalah $3\\text{ cm}$, maka luas daerah yang diarsir adalah ....\n\nA. $22{,}5\\text{ cm}^2$\nB. $45\\text{ cm}^2$\nC. $50\\text{ cm}^2$\nD. $75\\text{ cm}^2$',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-3.svg',
              alt: 'Layang-layang besar ABCD dan layang-layang kecil AFCE yang berbagi sumbu simetri mendatar AC serta diagonal tegak BD, dengan daerah antara kedua layang-layang diarsir.',
              caption: 'Layang-layang ABCD dan AFCE dengan sumbu simetri AC.'
            }
          ],
          answer: 'B. $45\\text{ cm}^2$',
          principle:
            'Karena kedua layang-layang memiliki sumbu simetri yang sama ($AC$), selisih panjang diagonal tegaknya sama dengan $2 \\times DE$, sehingga luas arsiran dapat langsung dihitung dari $\\frac{1}{2} \\times AC \\times (BD - EF)$.',
          solution:
            'Misalkan titik $O$ adalah perpotongan diagonal $AC$ dan $BD$.\nKarena $AC$ merupakan sumbu simetri bagi layang-layang $ABCD$ maupun $AFCE$, maka:\n- $AC \\perp BD$ dan $O$ membagi $BD$ serta $EF$ menjadi dua bagian sama panjang:\n  $$DO = BO \\quad \\text{dan} \\quad EO = FO.$$\n- Akibatnya, $BF = BO - FO = DO - EO = DE = 3\\text{ cm}$.\n- Selisih panjang kedua diagonal tegak adalah:\n  $$BD - EF = DE + BF = 3 + 3 = 6\\text{ cm}.$$\n\nLuas daerah yang diarsir adalah selisih luas layang-layang $ABCD$ dan layang-layang $AFCE$:\n$$\\begin{aligned}\nL_{\\text{arsir}} &= L_{ABCD} - L_{AFCE} \\\\\n&= \\frac{1}{2} \\times AC \\times BD - \\frac{1}{2} \\times AC \\times EF \\\\\n&= \\frac{1}{2} \\times AC \\times (BD - EF) \\\\\n&= \\frac{1}{2} \\times 15 \\times 6 = 45\\text{ cm}^2.\n\\end{aligned}$$\n\nJadi luas daerah yang diarsir adalah $45\\text{ cm}^2$ (B).',
          rubric: [
            { code: 'M1', text: 'Menemukan $BF = DE = 3\\text{ cm}$ dari sifat simetri sumbu $AC$ sehingga $BD - EF = 6\\text{ cm}$.' },
            { code: 'A1', text: 'Menghitung luas arsiran $45\\text{ cm}^2$, pilihan B.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Perhatikan gambar! Luas daerah yang diarsir adalah ....\n\nA. $297\\text{ cm}^2$\nB. $279\\text{ cm}^2$\nC. $243\\text{ cm}^2$\nD. $234\\text{ cm}^2$',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-4.svg',
              alt: 'Garis alas mendatar F-A-H-E-G dengan AE sepanjang 18 cm, garis tinggi tegak BF = 15 cm, CH = 6 cm, dan DG = 24 cm, membentuk dua segitiga arsir ABC dan CDE serta segitiga putih ACE.',
              caption: 'Segitiga ABC dan CDE yang diarsir di atas garis alas F-A-H-E-G.'
            }
          ],
          answer: 'C. $243\\text{ cm}^2$',
          principle:
            'Masing-masing segitiga yang diarsir ($\\triangle ABC$ dan $\\triangle CDE$) diperoleh dengan mengurangkan segitiga putih $\\triangle ACE$ dari $\\triangle ABE$ dan $\\triangle ADE$ yang sama-sama beralas $AE$.',
          solution:
            'Perhatikan bahwa ketiga segitiga $\\triangle ABE$, $\\triangle ADE$, dan $\\triangle ACE$ mempunyai alas yang sama, yaitu $AE = 18\\text{ cm}$, dengan tinggi masing-masing tegak lurus terhadap garis $FG$:\n1. Luas $\\triangle ABE$ (alas $AE = 18\\text{ cm}$, tinggi $BF = 15\\text{ cm}$):\n   $$L_{\\triangle ABE} = \\frac{1}{2} \\times 18 \\times 15 = 135\\text{ cm}^2.$$\n2. Luas $\\triangle ADE$ (alas $AE = 18\\text{ cm}$, tinggi $DG = 24\\text{ cm}$):\n   $$L_{\\triangle ADE} = \\frac{1}{2} \\times 18 \\times 24 = 216\\text{ cm}^2.$$\n3. Luas $\\triangle ACE$ yang tidak diarsir (alas $AE = 18\\text{ cm}$, tinggi $CH = 6\\text{ cm}$):\n   $$L_{\\triangle ACE} = \\frac{1}{2} \\times 18 \\times 6 = 54\\text{ cm}^2.$$\n\nDaerah yang diarsir terdiri atas $\\triangle ABC$ dan $\\triangle CDE$, sehingga $\\triangle ACE$ harus dikurangkan dari **masing-masing** segitiga besar:\n$$\\begin{aligned}\nL_{\\text{arsir}} &= L_{\\triangle ABC} + L_{\\triangle CDE} \\\\\n&= (L_{\\triangle ABE} - L_{\\triangle ACE}) + (L_{\\triangle ADE} - L_{\\triangle ACE}) \\\\\n&= (135 - 54) + (216 - 54) \\\\\n&= 81 + 162 = 243\\text{ cm}^2.\n\\end{aligned}$$\n\nJadi luas daerah yang diarsir adalah $243\\text{ cm}^2$ (C).',
          rubric: [
            { code: 'M1', text: 'Menghitung luas $\\triangle ABE = 135$, $\\triangle ADE = 216$, dan $\\triangle ACE = 54\\text{ cm}^2$, lalu mengurangkan $L_{\\triangle ACE}$ dua kali.' },
            { code: 'A1', text: 'Memperoleh luas arsiran $243\\text{ cm}^2$, pilihan C.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Perhatikan gambar di bawah ini. Persegi $ABCD$ dengan panjang sisi $8\\text{ cm}$ dan persegi $EFGH$ dengan panjang sisi $10\\text{ cm}$ saling berpotongan. Titik $E$ adalah perpotongan diagonal $AC$ dan $BD$, luas daerah yang diarsir adalah ....\n\nA. $72\\text{ cm}^2$\nB. $36\\text{ cm}^2$\nC. $18\\text{ cm}^2$\nD. $16\\text{ cm}^2$',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-5.svg',
              alt: 'Persegi ABCD bersisi 8 cm berpotongan dengan persegi EFGH bersisi 10 cm yang titik sudut E-nya berada di pusat persegi ABCD dan sisi EF, EH memotong sisi BC dan CD.',
              caption: 'Perpotongan persegi ABCD dan persegi EFGH dengan titik E di pusat ABCD.'
            }
          ],
          answer: 'D. $16\\text{ cm}^2$',
          principle:
            'Berdasarkan simetri putar $90^\\circ$ persegi terhadap pusatnya $E$, daerah irisan sudut siku-siku $FEH$ di dalam persegi $ABCD$ selalu tepat seperempat luas persegi $ABCD$.',
          solution:
            'Titik $E$ adalah pusat simetri persegi $ABCD$, sehingga jarak dari $E$ ke sudut persegi $ABCD$ hanyalah setengah diagonalnya ($4\\sqrt{2} \\approx 5{,}66\\text{ cm}$), jauh lebih kecil daripada sisi $EF = EH = 10\\text{ cm}$. Karena itu sisi-sisi $EF$ dan $EH$ memotong sisi $BC$ dan $CD$ dengan sudut siku-siku $\\angle FEH = 90^\\circ$ di titik $E$.\n\nPerhatikan segitiga di sebelah kanan sudut $B$ dan segitiga di sebelah bawah-kiri sudut $C$:\n- Misalkan $EF$ memotong $BC$ di $P$ dan $EH$ memotong $CD$ di $Q$.\n- Karena $\\angle BEC = 90^\\circ$ dan $\\angle PEQ = 90^\\circ$, maka $\\angle BEP = \\angle CEQ$.\n- Selain itu, $EB = EC$ dan $\\angle EBP = \\angle ECQ = 45^\\circ$.\n- Jadi $\\triangle EBP \\cong \\triangle ECQ$ (sudut–sisi–sudut), sehingga luas keduanya sama!\n\nDengan mengganti $\\triangle ECQ$ oleh $\\triangle EBP$, daerah arsir $EPCQ$ mempunyai luas yang sama persis dengan $\\triangle EBC$, yaitu $\\frac{1}{4}$ luas persegi $ABCD$:\n$$L_{\\text{arsir}} = \\frac{1}{4} \\times (8\\text{ cm})^2 = \\frac{1}{4} \\times 64 = 16\\text{ cm}^2.$$\n\nJadi luas daerah yang diarsir adalah $16\\text{ cm}^2$ (D).',
          rubric: [
            { code: 'M1', text: 'Menunjukkan kekongruenan $\\triangle EBP \\cong \\triangle ECQ$ (atau menggunakan simetri putar $90^\\circ$ terhadap pusat $E$) sehingga luas irisan $= \\frac{1}{4} L_{ABCD}$.' },
            { code: 'A1', text: 'Memperoleh luas $16\\text{ cm}^2$, pilihan D.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Perhatikan gambar berikut. Jika setiap persegi kecil memiliki luas $1$ satuan, luas daerah tertutup yang dibatasi oleh busur-busur lingkaran di bawah adalah ....',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-6.svg',
              alt: 'Kisi-kisi persegi putus-putus berukuran 9 kali 6 satuan yang memuat kurva tertutup dari dua puluh busur seperempat lingkaran berjari-jari 1 satuan.',
              caption: 'Kurva tertutup dari busur-busur seperempat lingkaran pada kisi 9 × 6.'
            }
          ],
          answer: '$24 + \\pi$ satuan luas',
          principle:
            'Pecah daerah tertutup menjadi petak-petak persegi satuan $1 \\times 1$: petak penuh bernilai $1$, petak seperempat lingkaran cembung bernilai $\\frac{\\pi}{4}$, dan petak sudut cekung bernilai $1 - \\frac{\\pi}{4}$.',
          solution:
            'Karena setiap persegi kecil berluas $1$ satuan, panjang sisi setiap petak kisi adalah $1$ satuan dan seluruh busur pada batas daerah adalah busur seperempat lingkaran berjari-jari $r = 1$ satuan (luas satu juring seperempat lingkaran $= \\frac{1}{4}\\pi(1)^2 = \\frac{\\pi}{4}$).\n\nKita kelompokkan seluruh petak $1 \\times 1$ pada kisi $9 \\times 6$ (baris $1$ sampai $6$ dari atas ke bawah, kolom $1$ sampai $9$ dari kiri ke kanan) menjadi tiga jenis bagian di dalam daerah tertutup:\n1. **Petak utuh** (luas $1$ satuan per petak):\n   - Baris 2: kolom 2, 7, 8 ($3$ petak)\n   - Baris 3: kolom 2, 3, 6, 7, 8 ($5$ petak)\n   - Baris 4: kolom 2, 3, 4, 5, 6, 7 ($6$ petak)\n   - Baris 5: kolom 3, 4 ($2$ petak)\n   Total petak utuh $= 3 + 5 + 6 + 2 = 16$ petak.\n2. **Petak seperempat lingkaran cembung** (luas $\\frac{\\pi}{4}$ per petak):\n   - Baris 1: kolom 1, 2, 7, 8 ($4$ petak)\n   - Baris 2: kolom 1 ($1$ petak)\n   - Baris 3: kolom 1, 4, 5 ($3$ petak)\n   - Baris 4: kolom 1, 8 ($2$ petak)\n   - Baris 6: kolom 3, 4 ($2$ petak)\n   Total petak cembung $= 4 + 1 + 3 + 2 + 2 = 12$ petak.\n3. **Petak sudut cekung** (persegi satuan dikurangi seperempat lingkaran, luas $1 - \\frac{\\pi}{4}$ per petak):\n   - Baris 2: kolom 3, 6, 9 ($3$ petak)\n   - Baris 3: kolom 9 ($1$ petak)\n   - Baris 5: kolom 2, 5, 6, 7 ($4$ petak)\n   Total petak cekung $= 3 + 1 + 4 = 8$ petak.\n\nJumlahkan seluruh luas bagiannya:\n$$\\begin{aligned}\n\\text{Luas} &= 16(1) + 12\\left(\\frac{\\pi}{4}\\right) + 8\\left(1 - \\frac{\\pi}{4}\\right) \\\\\n&= 16 + 8 + (12 - 8)\\frac{\\pi}{4} \\\\\n&= 24 + \\pi\\ \\text{satuan luas}.\n\\end{aligned}$$',
          rubric: [
            { code: 'M1', text: 'Mengelompokkan daerah menjadi $16$ persegi penuh, $12$ juring cembung ($\\frac{\\pi}{4}$), dan $8$ sisa cekung ($1 - \\frac{\\pi}{4}$), atau memindahkan pasangan komplemen yang saling melengkapi menjadi persegi satuan.' },
            { code: 'A1', text: 'Menyederhanakan hingga memperoleh $24 + \\pi$ satuan luas.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Perhatikan gambar, yaitu $4$ buah layang-layang kongruen yang termuat pada persegi dan ternyata masih tersisa daerah persegi yang diarsir. Jika panjang $p = 3\\sqrt{2}\\text{ cm}$ dan $q = 5\\sqrt{2}\\text{ cm}$, maka luas daerah yang diarsir adalah ....',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-7.svg',
              alt: 'Persegi besar dengan panjang sisi p tambah q yang diisi oleh 4 layang-layang siku-siku kongruen mengelilingi sebuah persegi kecil di tengah yang diarsir.',
              caption: 'Empat layang-layang kongruen dan sisa persegi arsir di tengah.'
            }
          ],
          answer: '$8\\text{ cm}^2$',
          principle:
            'Setiap layang-layang tersusun dari dua segitiga siku-siku kongruen dengan kaki $p$ dan $q$, sehingga luas persegi tengah adalah selisih luas persegi besar $(p + q)^2$ dengan $4$ kali luas layang-layang.',
          solution:
            'Perhatikan bahwa persegi besar memiliki panjang sisi $S = p + q$.\nPada setiap sudut persegi besar terdapat satu layang-layang yang memiliki sepasang sisi sejajar tepi berukuran $p$ dan $q$ (saling tegak lurus di sudut persegi besar), serta dua sisi di bagian dalam yang juga berukuran $p$ dan $q$ serta saling tegak lurus (ditunjukkan oleh tanda siku-siku pada gambar).\n\nDengan membelah satu layang-layang menurut diagonal penghubung kedua ujung sisi $p$ dan $q$, layang-layang tersebut terbagi menjadi dua segitiga siku-siku kongruen dengan alas $p$ dan tinggi $q$. Jadi luas satu layang-layang adalah:\n$$L_{\\text{layang}} = 2 \\times \\left(\\frac{1}{2} \\times p \\times q\\right) = pq.$$\n\nLuas daerah persegi yang diarsir di tengah adalah luas persegi besar dikurangi luas keempat layang-layang:\n$$\\begin{aligned}\nL_{\\text{arsir}} &= (p + q)^2 - 4pq \\\\\n&= p^2 + 2pq + q^2 - 4pq \\\\\n&= p^2 - 2pq + q^2 = (q - p)^2.\n\\end{aligned}$$\n\nSubstitusikan $p = 3\\sqrt{2}\\text{ cm}$ dan $q = 5\\sqrt{2}\\text{ cm}$:\n$$q - p = 5\\sqrt{2} - 3\\sqrt{2} = 2\\sqrt{2}\\text{ cm},$$\n$$L_{\\text{arsir}} = (2\\sqrt{2})^2 = 4 \\times 2 = 8\\text{ cm}^2.$$\n\nPemeriksaan numerik: $S = 8\\sqrt{2}$, $S^2 = 128$, dan $4pq = 4(3\\sqrt{2})(5\\sqrt{2}) = 120$, sehingga $128 - 120 = 8\\text{ cm}^2$.',
          rubric: [
            { code: 'M1', text: 'Menemukan luas satu layang-layang $= pq$ dan menyusun $L_{\\text{arsir}} = (p + q)^2 - 4pq = (q - p)^2$.' },
            { code: 'A1', text: 'Menghitung $(5\\sqrt{2} - 3\\sqrt{2})^2 = 8\\text{ cm}^2$.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Pada gambar yang ditunjukkan di bawah, $ABC$ dan $AEB$ merupakan setengah lingkaran. $F$ merupakan titik tengah dari $AC$ dan $AF = 4$. Berapakah luas daerah yang diarsir...?',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-8.svg',
              alt: 'Setengah lingkaran besar ABC berdiameter AC dengan titik tengah F dan tinggi tegak BF, serta setengah lingkaran AEB berdiameter AB yang membentuk daerah bulan sabit arsir.',
              caption: 'Bulan sabit antara setengah lingkaran AEB dan busur AB dari setengah lingkaran ABC.'
            }
          ],
          answer: '$8$',
          principle:
            'Bulan sabit Hippokrates: kurangkan luas tembereng $AB$ (seperempat lingkaran $AFB$ dikurangi $\\triangle ABF$) dari luas setengah lingkaran $AEB$.',
          solution:
            'Karena $F$ adalah titik tengah diameter $AC$, maka $F$ adalah pusat setengah lingkaran $ABC$ dengan jari-jari $R = AF = 4$.\nKarena $BF \\perp AC$ dan $B$ terletak pada setengah lingkaran $ABC$, maka $BF = R = 4$ dan $\\triangle ABF$ adalah segitiga siku-siku sama kaki di $F$.\n\n1. Hitung panjang diameter $AB$ dengan Teorema Pythagoras pada $\\triangle ABF$:\n   $$AB = \\sqrt{AF^2 + BF^2} = \\sqrt{4^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}.$$\n   Jadi jari-jari setengah lingkaran $AEB$ adalah $r = \\frac{AB}{2} = 2\\sqrt{2}$.\n2. Hitung luas setengah lingkaran $AEB$:\n   $$L_{\\text{set. lingkaran } AEB} = \\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi (2\\sqrt{2})^2 = \\frac{1}{2}\\pi (8) = 4\\pi.$$\n3. Hitung luas tembereng putih di antara tali busur $AB$ dan busur $AB$ (pada lingkaran besar):\n   - Luas juring seperempat lingkaran $AFB = \\frac{1}{4}\\pi R^2 = \\frac{1}{4}\\pi (4^2) = 4\\pi$.\n   - Luas $\\triangle ABF = \\frac{1}{2} \\times AF \\times BF = \\frac{1}{2} \\times 4 \\times 4 = 8$.\n   - Luas tembereng $AB = 4\\pi - 8$.\n4. Luas daerah yang diarsir adalah:\n   $$L_{\\text{arsir}} = L_{\\text{set. lingkaran } AEB} - L_{\\text{tembereng } AB} = 4\\pi - (4\\pi - 8) = 8.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung $AB = 4\\sqrt{2}$, luas setengah lingkaran $AEB = 4\\pi$, serta luas tembereng $AB = 4\\pi - 8$.' },
            { code: 'A1', text: 'Menyederhanakan hingga memperoleh luas arsiran $8$.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Pada gambar di bawah ini, luas daerah yang diarsir adalah...?',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-9.svg',
              alt: 'Trapesium siku-siku dengan sisi tegak kiri 4 cm, sisi atas 4 cm, dan sisi bawah 6 cm yang berpotongan dengan lingkaran berjari-jari 2 cm berpusat di titik tengah sisi miring.',
              caption: 'Trapesium siku-siku yang berpotongan dengan lingkaran berjari-jari 2 cm.'
            }
          ],
          answer: '$20 - 2\\pi\\text{ cm}^2$',
          principle:
            'Diameter lingkaran ($4\\text{ cm}$) sama dengan tinggi trapesium ($4\\text{ cm}$) dan pusatnya tepat berada pada sisi miring, sehingga bagian lingkaran yang berada di dalam trapesium tepat berupa setengah lingkaran.',
          solution:
            'Perhatikan ukuran-ukuran pada gambar:\n1. Trapesium siku-siku memiliki sisi sejajar atas $a = 4\\text{ cm}$, sisi sejajar bawah $b = 6\\text{ cm}$, dan tinggi $t = 4\\text{ cm}$.\n   $$L_{\\text{trapesium}} = \\frac{a + b}{2} \\times t = \\frac{4 + 6}{2} \\times 4 = 5 \\times 4 = 20\\text{ cm}^2.$$\n2. Lingkaran berpusat pada garis sisi miring trapesium (ditunjukkan oleh titik pusat dan garis putus-putus berdiameter $2\\text{ cm} + 2\\text{ cm} = 4\\text{ cm}$) dengan jari-jari $r = 2\\text{ cm}$.\n   - Karena tinggi trapesium juga $4\\text{ cm}$ dan pusat lingkaran berjarak $2\\text{ cm}$ dari alas maupun tutup, lingkaran tepat menyinggung garis atas dan garis bawah sehingga tidak keluar dari jalur tinggi trapesium.\n   - Garis sisi miring melewati pusat lingkaran, sehingga garis tersebut membagi lingkaran menjadi dua bagian yang sama persis: tepat setengah lingkaran berada di dalam trapesium (tidak diarsir) dan setengah lingkaran lainnya di luar trapesium.\n3. Luas setengah lingkaran di dalam trapesium adalah:\n   $$L_{\\text{set. lingkaran}} = \\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi (2^2) = 2\\pi\\text{ cm}^2.$$\n\nJadi luas daerah yang diarsir adalah:\n$$L_{\\text{arsir}} = 20 - 2\\pi\\text{ cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Menghitung luas trapesium $20\\text{ cm}^2$ dan menyimpulkan bagian putih di dalamnya tepat berupa setengah lingkaran berjari-jari $2\\text{ cm}$ ($2\\pi\\text{ cm}^2$).' },
            { code: 'A1', text: 'Memperoleh $20 - 2\\pi\\text{ cm}^2$.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Perhatikan gambar berikut. Panjang sisi persegi yang besar adalah $4\\text{ cm}$ dan yang kecil adalah $3\\text{ cm}$. Tentukan luas daerah yang diarsir dalam $\\text{cm}^2$.',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-10.svg',
              alt: 'Dua persegi berdampingan pada alas B-C-E, yaitu persegi besar ABCD di kiri dan persegi kecil CEFH di kanan, dengan segitiga ACF diarsir gelap dan G perpotongan AF dengan CD.',
              caption: 'Dua persegi bersisian 4 cm dan 3 cm dengan segitiga arsir ACF.'
            }
          ],
          answer: '$12\\text{ cm}^2$',
          principle:
            'Diagonal $AC$ dan $CF$ membentuk sudut $90^\\circ$ ($45^\\circ + 45^\\circ$ dari sudut lurus $BCE$), atau lengkapi bangun menjadi persegi panjang besar berukuran $7 \\times 4$ lalu kurangi tiga segitiga siku-siku putih.',
          solution:
            '**Cara 1 (Menggunakan sudut diagonal persegi):**\n- Pada persegi besar $ABCD$ bersisi $4\\text{ cm}$, $AC$ adalah diagonal sehingga $\\angle ACB = 45^\\circ$ dan panjang $AC = 4\\sqrt{2}\\text{ cm}$.\n- Pada persegi kecil bersisi $3\\text{ cm}$ dengan titik sudut bawah $C, E$ dan atas $F$, $CF$ adalah diagonal sehingga $\\angle FCE = 45^\\circ$ dan panjang $CF = 3\\sqrt{2}\\text{ cm}$.\n- Karena $B, C, E$ segaris ($\\angle BCE = 180^\\circ$), maka:\n  $$\\angle ACF = 180^\\circ - 45^\\circ - 45^\\circ = 90^\\circ.$$\n- Jadi $\\triangle ACF$ adalah segitiga siku-siku di $C$, sehingga luasnya adalah:\n  $$L_{\\triangle ACF} = \\frac{1}{2} \\times AC \\times CF = \\frac{1}{2} \\times 4\\sqrt{2} \\times 3\\sqrt{2} = \\frac{1}{2} \\times 24 = 12\\text{ cm}^2.$$\n\n**Cara 2 (Tanpa akar, melengkapi persegi panjang):**\nPerpanjang $AD$ ke kanan dan $EF$ ke atas hingga berpotongan di $P$, membentuk persegi panjang $ABEP$ berukuran $(4 + 3) \\times 4 = 7 \\times 4\\text{ cm}$ (luas $= 28\\text{ cm}^2$). Luas $\\triangle ACF$ sama dengan luas $ABEP$ dikurangi tiga segitiga siku-siku di luarnya:\n- $L_{\\triangle ABC} = \\frac{1}{2} \\times 4 \\times 4 = 8\\text{ cm}^2$,\n- $L_{\\triangle CEF} = \\frac{1}{2} \\times 3 \\times 3 = 4{,}5\\text{ cm}^2$,\n- $L_{\\triangle APF} = \\frac{1}{2} \\times 7 \\times (4 - 3) = 3{,}5\\text{ cm}^2$.\n$$L_{\\triangle ACF} = 28 - (8 + 4{,}5 + 3{,}5) = 28 - 16 = 12\\text{ cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Membuktikan $\\angle ACF = 90^\\circ$ (atau melengkapi menjadi persegi panjang $7 \\times 4$ dan mengurangkan tiga segitiga putih).' },
            { code: 'A1', text: 'Memperoleh luas daerah arsir $12\\text{ cm}^2$.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'In the figure, $ABCD$ is a rectangle with $AB = 5$ such that the semicircle on $AB$ as diameter cuts $CD$ at two points. If the distance from one of them to $A$ is $4$, find the area of $ABCD$.',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-11.svg',
              alt: 'Persegi panjang ABCD dengan setengah lingkaran berdiameter AB yang memotong sisi CD di titik Q dan P, disertai ruas garis PA dan PB.',
              caption: 'Persegi panjang ABCD dengan setengah lingkaran berdiameter AB.'
            }
          ],
          answer: '$12$',
          principle:
            'Sudut keliling yang menghadap diameter setengah lingkaran adalah siku-siku ($\\angle APB = 90^\\circ$), lalu samakan dua cara menghitung luas $\\triangle APB$ untuk mencari tinggi persegi panjang.',
          solution:
            'Misalkan titik potong setengah lingkaran dengan sisi $CD$ yang berjarak $4$ dari $A$ adalah $P$ (jika yang berjarak $4$ adalah $Q$, simetri setengah lingkaran tetap menghasilkan tinggi yang sama persis).\n\n1. Karena $P$ terletak pada setengah lingkaran berdiameter $AB$, sudut keliling yang menghadap diameter $AB$ adalah sudut siku-siku:\n   $$\\angle APB = 90^\\circ.$$\n2. Pada segitiga siku-siku $\\triangle APB$ dengan sisi miring $AB = 5$ dan $AP = 4$, panjang $PB$ diperoleh melalui Teorema Pythagoras:\n   $$PB = \\sqrt{AB^2 - AP^2} = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = \\sqrt{9} = 3.$$\n3. Hitung luas $\\triangle APB$ dengan dua cara:\n   - Menggunakan sisi-sisi siku-siku $AP$ dan $PB$:\n     $$L_{\\triangle APB} = \\frac{1}{2} \\times AP \\times PB = \\frac{1}{2} \\times 4 \\times 3 = 6.$$\n   - Menggunakan alas $AB = 5$ dan tinggi yang sama dengan lebar persegi panjang $AD = t$:\n     $$L_{\\triangle APB} = \\frac{1}{2} \\times AB \\times t = \\frac{1}{2} \\times 5 \\times t.$$\n4. Samakan keduanya:\n   $$\\frac{5}{2}t = 6 \\implies t = \\frac{12}{5} = 2{,}4.$$\n   (Perhatikan pula bahwa $L_{ABCD} = AB \\times t = 2 \\times L_{\\triangle APB} = 2 \\times 6 = 12$.)\n\nJadi luas persegi panjang $ABCD$ adalah $12$.',
          rubric: [
            { code: 'M1', text: 'Menggunakan $\\angle APB = 90^\\circ$ untuk memperoleh sisi siku-siku $3, 4, 5$ dan luas $\\triangle APB = 6$.' },
            { code: 'A1', text: 'Menyimpulkan luas $ABCD = 2 \\times 6 = 12$.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Perhatikan gambar di bawah ini. Jika lingkaran besar berjari-jari $4$ dan lingkaran kecil berjari-jari $2$, serta luas daerah yang diarsir adalah $\\frac{5}{12}$ dari luas lingkaran besar, maka besar sudut $RPQ$ adalah ....',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-12.svg',
              alt: 'Dua lingkaran sepusat berpusat di P dengan jari-jari PR dan PQ membentuk sudut RPQ; cincin luar pada juring RPQ diarsir dan lingkaran kecil di luar juring RPQ juga diarsir.',
              caption: 'Dua lingkaran sepusat di P dengan dua bagian daerah arsir.'
            }
          ],
          answer: '$120^\\circ$',
          principle:
            'Nyatakan porsi sudut $\\alpha = \\frac{\\angle RPQ}{360^\\circ}$, lalu jumlahkan luas arsir pada cincin luar ($\\alpha \\times L_{\\text{cincin}}$) dan pada lingkaran kecil ($(1 - \\alpha) \\times L_{\\text{kecil}}$).',
          solution:
            'Hitung terlebih dahulu luas masing-masing lingkaran:\n- Luas lingkaran besar ($R = 4$): $L_{\\text{besar}} = \\pi (4^2) = 16\\pi$.\n- Luas lingkaran kecil ($r = 2$): $L_{\\text{kecil}} = \\pi (2^2) = 4\\pi$.\n- Luas cincin (daerah antara kedua lingkaran): $L_{\\text{cincin}} = 16\\pi - 4\\pi = 12\\pi$.\n\nMisalkan pecahan sudut pusatnya terhadap satu putaran penuh adalah $\\alpha = \\frac{\\angle RPQ}{360^\\circ}$.\nDaerah yang diarsir terdiri atas dua bagian:\n1. Bagian cincin pada juring $RPQ$ (seluas $\\alpha \\times L_{\\text{cincin}} = 12\\pi\\alpha$).\n2. Bagian lingkaran kecil di luar juring $RPQ$ (seluas $(1 - \\alpha) \\times L_{\\text{kecil}} = 4\\pi(1 - \\alpha)$).\n\nDiketahui total luas arsir adalah $\\frac{5}{12}$ dari luas lingkaran besar:\n$$L_{\\text{arsir}} = \\frac{5}{12} \\times 16\\pi = \\frac{20}{3}\\pi.$$\n\nSusun persamaannya lalu bagi kedua ruas dengan $\\pi$:\n$$\\begin{aligned}\n12\\pi\\alpha + 4\\pi(1 - \\alpha) &= \\frac{20}{3}\\pi \\\\\n12\\alpha + 4 - 4\\alpha &= \\frac{20}{3} \\\\\n8\\alpha &= \\frac{20}{3} - 4 = \\frac{8}{3} \\\\\n\\alpha &= \\frac{1}{3}.\n\\end{aligned}$$\n\nDengan demikian, besar sudut $RPQ$ adalah:\n$$\\angle RPQ = \\frac{1}{3} \\times 360^\\circ = 120^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Menyusun persamaan $12\\pi\\alpha + 4\\pi(1 - \\alpha) = \\frac{20}{3}\\pi$ (atau mencari luas setara dalam satuan $\\pi$) hingga memperoleh $\\alpha = \\frac{1}{3}$.' },
            { code: 'A1', text: 'Menentukan $\\angle RPQ = 120^\\circ$.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Look at the cube beside! If the length of its side is $2\\text{ cm}$, then the length of $AB$ is ....\n\nA. $2\\sqrt{3}\\text{ cm}$\nB. $2\\sqrt{2}\\text{ cm}$\nC. $2\\text{ cm}$\nD. $\\dfrac{1}{2}\\text{ cm}$',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-13.svg',
              alt: 'Kubus transparan dengan rusuk belakang putus-putus dan ruas garis AB menghubungkan titik sudut atas-belakang-kiri B dengan sudut bawah-depan-kanan A.',
              caption: 'Kubus dengan diagonal ruang AB.'
            }
          ],
          answer: 'A. $2\\sqrt{3}\\text{ cm}$',
          principle:
            'Ruas garis $AB$ menghubungkan dua titik sudut kubus yang berseberangan secara ruang (diagonal ruang), sehingga panjangnya adalah $s\\sqrt{3}$ untuk rusuk $s$.',
          solution:
            'Pada kubus bersisi $s = 2\\text{ cm}$, titik $B$ berada di sudut atas-belakang-kiri dan titik $A$ berada di sudut bawah-depan-kanan, sehingga $AB$ merupakan **diagonal ruang** kubus.\n\n1. Pertama, hitung panjang diagonal bidang alas (dari proyeksi titik $B$ di sudut bawah-belakang-kiri menuju titik $A$ di sudut bawah-depan-kanan) menggunakan Teorema Pythagoras:\n   $$d_{\\text{bidang}} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\text{ cm}.$$\n2. Selanjutnya, bentuk segitiga siku-siku tegak yang memuat tinggi rusuk tegak ($2\\text{ cm}$), diagonal alas ($2\\sqrt{2}\\text{ cm}$), dan diagonal ruang $AB$ sebagai sisi miring:\n   $$AB = \\sqrt{(2\\sqrt{2})^2 + 2^2} = \\sqrt{8 + 4} = \\sqrt{12} = 2\\sqrt{3}\\text{ cm}.$$\n\nJadi panjang $AB$ adalah $2\\sqrt{3}\\text{ cm}$ (A).',
          rubric: [
            { code: 'M1', text: 'Mengenali $AB$ sebagai diagonal ruang kubus dan menghitung $d_{\\text{bidang}} = 2\\sqrt{2}$ lalu $\\sqrt{(2\\sqrt{2})^2 + 2^2}$.' },
            { code: 'A1', text: 'Memperoleh $2\\sqrt{3}\\text{ cm}$, pilihan A.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Perhatikan gambar di samping! Sebuah jaring-jaring kubus digambar pada kertas gambar, diberi arsiran pada salah satu muka, kemudian dipotong. Kubus yang terbentuk berdasarkan jaring-jaring kubus tersebut adalah ....',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-14.svg',
              alt: 'Di sebelah kiri terdapat jaring-jaring kubus 6 sisi bermotif papan catur 2 kali 2 hitam-putih, dan di sebelah kanan terdapat empat gambar kubus pilihan A, B, C, dan D.',
              caption: 'Jaring-jaring kubus (kiri) dan empat pilihan kubus A, B, C, D (kanan).'
            }
          ],
          answer: 'D',
          principle:
            'Kelompokkan keenam sisi jaring-jaring berdasarkan posisi motif papan catur $2 \\times 2$-nya, lalu periksa sisi-sisi yang saling bertetangga dan kecocokan warna di titik temu sudut.',
          solution:
            'Pada jaring-jaring di sebelah kiri, setiap muka memiliki pola papan catur $2 \\times 2$ (terdiri atas $2$ petak hitam dan $2$ petak putih secara diagonal). Mari kita lihat arah diagonal hitam pada masing-masing dari $6$ muka:\n- **Muka atas** dan **muka baris tengah kolom ke-2**: petak hitam berada di **kanan-atas** dan **kiri-bawah** (kita sebut tipe $P$).\n- **Empat muka lainnya** (kolom ke-1, kolom ke-3, kolom ke-4 pada baris tengah, serta muka paling bawah): petak hitam berada di **kiri-atas** dan **kanan-bawah** (kita sebut tipe $Q$).\n\nSekarang periksa keempat pilihan kubus (A, B, C, D) yang tampak sisi depan, atas, dan kanannya:\n1. **Pilihan A**: sisi kanan memiliki dua petak hitam bersebelahan secara vertikal (bukan papan catur), padahal seluruh muka jaring-jaring berbentuk papan catur. **Salah.**\n2. **Pilihan B**: sisi depan hanya memiliki satu petak hitam dan sisi kanan juga bukan papan catur. **Salah.**\n3. **Pilihan C**: menampilkan sisi depan bertipe $P$, sedangkan sisi atas dan sisi kanan keduanya bertipe $Q$. Jika sisi depan adalah muka tengah kolom ke-2 (tipe $P$) dengan orientasi $0^\\circ$, maka sisi di atasnya harus muka atas jaring-jaring yang juga bertipe $P$, bukan tipe $Q$. Jika muka kolom ke-2 diputar $180^\\circ$ agar muka bawah menjadi sisi atas (tipe $Q$), maka sisi kanannya berasal dari muka kolom ke-1, yang ketika dilipat memunculkan petak **putih** di sudut temu depan–atas–kanan pada sisi kanan (berbeda dari pilihan C yang hitam di sudut kanan atas-depan). Hal serupa terjadi untuk muka atas jaring-jaring sebagai sisi depan. **Salah.**\n4. **Pilihan D**: ketiga sisi yang tampak (depan, atas, dan kanan) semuanya bertipe $Q$ (hitam di kiri-atas dan kanan-bawah). Pada jaring-jaring, tiga muka tipe $Q$ yaitu kolom ke-1, kolom ke-4, dan muka paling bawah saling bertemu di satu titik sudut kubus saat pita mendatar dilipat melingkar ke belakang: kolom ke-1 menjadi sisi depan, muka paling bawah menjadi sisi atas (berputar $180^\\circ$ sehingga tetap bertipe $Q$), dan kolom ke-4 menjadi sisi kanan (terhadap orientasi tegaknya tetap bertipe $Q$). Ketiga muka tersebut tepat membentuk pola seperti pada pilihan D.\n\nJadi kubus yang terbentuk adalah **D**.',
          rubric: [
            { code: 'M1', text: 'Mengeliminasi A dan B karena bukan pola papan catur $2 \\times 2$, serta menguji orientasi sisi bertipe $P$ dan $Q$ saat dilipat untuk mengeliminasi C.' },
            { code: 'A1', text: 'Menyimpulkan kubus yang terbentuk adalah D.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Bagian B: Lintasan pada Rangka Kubus (Nomor 15)',
      marks: 4,
      stem: 'Perhatikan gambar rangka suatu kubus yang berukuran rusuk $1\\text{ m}$ berikut untuk menjawab pertanyaan 15a dan 15b.',
      parts: [
        {
          label: '15a',
          marks: 2,
          prompt:
            'Tentukan ukuran panjang lintasan terpendek dari titik $A$ ke titik $G$ melalui rangka kubus tersebut!',
          figures: [
            {
              src: '/papers/osk-mat-sd-geometri-p1/fig-15.svg',
              alt: 'Rangka kubus dengan alas ABCD (A depan-kiri, B depan-kanan, C belakang-kanan, D belakang-kiri) dan tutup EFGH (E di atas A, F di atas B, G di atas C, H di atas D).',
              caption: 'Rangka kubus ABCDEFGH dengan panjang rusuk 1 m.'
            }
          ],
          answer: '$3\\text{ m}$',
          principle:
            'Pada rangka kubus (lintasan menyusuri rusuk-rusuk), perpindahan dari sudut $A$ ke sudut berseberangan $G$ memerlukan minimal $1$ langkah ke kanan, $1$ langkah ke belakang, dan $1$ langkah ke atas.',
          solution:
            'Karena bangun pada soal berupa **rangka kubus**, lintasan hanya dapat berjalan menyusuri ke-$12$ rusuk kubus.\n\nDari titik $A$ (sudut bawah-depan-kiri) menuju titik $G$ (sudut atas-belakang-kanan), lintasan harus bergerak dalam $3$ arah sumbu yang saling tegak lurus:\n1. ke kanan sejauh $1\\text{ m}$,\n2. ke belakang sejauh $1\\text{ m}$,\n3. ke atas sejauh $1\\text{ m}$.\n\nSetiap langkah di sepanjang satu rusuk menempuh panjang $1\\text{ m}$, sehingga paling sedikit diperlukan $3$ rusuk yang dilalui.\nPanjang lintasan terpendek dari titik $A$ ke titik $G$ adalah:\n$$1\\text{ m} + 1\\text{ m} + 1\\text{ m} = 3\\text{ m}.$$',
          rubric: [
            { code: 'M1', text: 'Mengidentifikasi bahwa perjalanan menyusuri rangka kubus dari $A$ ke $G$ minimal melewati $3$ rusuk.' },
            { code: 'A1', text: 'Menentukan panjang lintasan terpendek $3\\text{ m}$.' }
          ]
        },
        {
          label: '15b',
          marks: 2,
          prompt:
            'Ada berapa lintasan terpendek dari titik $A$ ke titik $G$ melalui rangka kubus tersebut?',
          answer: '$6$ lintasan',
          principle:
            'Setiap lintasan terpendek panjangnya $3$ rusuk (urutan dari arah kanan, belakang, dan atas), sehingga banyaknya sama dengan banyak permutasi $3$ arah berbeda ($3! = 6$).',
          solution:
            'Dari titik $A$ menuju titik $G$ dengan panjang $3\\text{ m}$ (tepat $3$ rusuk), kita dapat mendaftar seluruh urutan langkah yang mungkin:\n- Dari $A$, ada **$3$ pilihan** rusuk awal: ke $B$ (kanan), ke $D$ (belakang), atau ke $E$ (atas).\n- Dari masing-masing titik kedua tersebut, ada **$2$ pilihan** arah tersisa untuk mendekati $G$:\n  1. Melalui $B$: $A \\to B \\to C \\to G$ dan $A \\to B \\to F \\to G$.\n  2. Melalui $D$: $A \\to D \\to C \\to G$ dan $A \\to D \\to H \\to G$.\n  3. Melalui $E$: $A \\to E \\to F \\to G$ dan $A \\to E \\to H \\to G$.\n- Setelah langkah kedua, hanya ada **$1$ pilihan** rusuk terakhir menuju $G$.\n\nDengan aturan perkalian, banyak seluruh lintasan terpendek adalah:\n$$3 \\times 2 \\times 1 = 6\\ \\text{lintasan}.$$',
          rubric: [
            { code: 'M1', text: 'Mendaftar seluruh $6$ jalur $3$-rusuk atau menggunakan aturan pencacahan $3 \\times 2 \\times 1$.' },
            { code: 'A1', text: 'Menyimpulkan ada $6$ lintasan terpendek.' }
          ]
        }
      ]
    }
  ]
};
