/**
 * Paket Soal Terstruktur: HKIMO Final Round 2022 — Primary 6
 * Sumber: Hong Kong International Mathematical Olympiad Final Round 2022, Primary 6 (hkimo_2022_final_p6.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Halaman sampul PDF memuat teks tersembunyi sampel 2018 Heat Round
 * yang bukan bagian dari naskah ujian 2022; soal yang dimuat berasal dari naskah lengkap 2022 (halaman 1–15 ujian).
 * Soal 7 (mempertahankan penulisan asli yang menghilangkan + 20^2, dengan pembahasan nilai yang dimaksud maupun literal) dan
 * Soal 15 (mengikuti definisi operasi cetak asli yang menghasilkan B = 2072/20555) kini turut dimuat; seluruh 30 soal lengkap (1–30).
 * Soal 1, 20, dan 23 dilengkapi diagram SVG vektor berdasarkan gambar asli pada PDF.
 */
export default {
  id: 'hkimo-final-p6',
  slug: 'hkimo-final-primary-6',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'HKIMO Final Round 2022 Primary 6: Logical Thinking, Arithmetic, Number Theory, Geometry, and Combinatorics',
  relatedChapterIds: [
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab4-keliling-bangun-datar',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd6-bab1-pecahan-desimal',
    'sd6-bab2-rasio',
    'sd6-bab3-kubus-balok',
    'sd6-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'HKIMO',
  title: 'HKIMO Final Round 2022 — Primary 6',
  totalMarks: 120,
  instructions:
    'Attempt all 30 short-answer questions from the HKIMO Final Round 2022 Primary 6 paper across five sections (no calculators). Each question carries 4 marks (120 marks total). Diagrams for Questions 1, 20, and 23 are provided as vector SVG figures.',
  source: {
    org: 'HKIMO',
    file: 'hkimo_2022_final_p6.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section 1: Logical Thinking',
      marks: 24,
      stem: 'Short-answer questions 1 to 6. Each correct answer scores 4 marks.',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'According to the pattern shown in the $4 \\times 4$ table below, what number does "?" represent?',
          figures: [
            {
              src: '/papers/hkimo-final-p6/fig-1.svg',
              alt: 'A 4 by 4 number grid with four columns and a question mark in the third row of the second column.',
              caption: 'Number pattern table for Question 1.'
            }
          ],
          answer: '$42$',
          principle:
            'Look for a consistent arithmetic relationship across each row connecting the four columns.',
          solution:
            'Examine the relationship among the four entries $(c_1, c_2, c_3, c_4)$ in each complete row:\n- Row 1: $4 \\times (20 - 5) = 4 \\times 15 = 60$\n- Row 2: $5 \\times (17 - 6) = 5 \\times 11 = 55$\n- Row 4: $7 \\times (11 - 8) = 7 \\times 3 = 21$\n\nThus, in every row, $c_2 = c_1 \\times (c_4 - c_3)$. Applying this rule to Row 3 gives:\n$$? = 6 \\times (14 - 7) = 6 \\times 7 = 42.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the row rule $c_2 = c_1 \\times (c_4 - c_3)$ and verifies it on the three complete rows.' },
            { code: 'A2', text: 'Correct value $42$.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            "If we subtract $7$ from Jenny's brother's age this year, the result is then multiplied by $12$, $6$ is then added to the result, and it is divided by $9$. The final result will be $22$ years old. How old is Jenny's brother this year?",
          answer: '$23$',
          principle:
            'Work backwards by reversing each arithmetic operation in the opposite order.',
          solution:
            'Let Jenny\'s brother\'s age this year be $x$. Translating the steps gives:\n$$\\frac{(x - 7) \\times 12 + 6}{9} = 22.$$\nUndo each operation step by step:\n1. Multiply by $9$: $(x - 7) \\times 12 + 6 = 22 \\times 9 = 198$.\n2. Subtract $6$: $(x - 7) \\times 12 = 198 - 6 = 192$.\n3. Divide by $12$: $x - 7 = \\dfrac{192}{12} = 16$.\n4. Add $7$: $x = 16 + 7 = 23$.\n\nCheck: $\\dfrac{(23 - 7) \\times 12 + 6}{9} = \\dfrac{16 \\times 12 + 6}{9} = \\dfrac{198}{9} = 22$.',
          rubric: [
            { code: 'M2', text: 'Reverses the sequence of operations (or sets up and solves the linear equation).' },
            { code: 'A2', text: 'Correct age $23$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'Karlos walks $8\\text{ km}$ east, then walks $15\\text{ km}$ south. How far is he now from the original position in km?',
          answer: '$17\\text{ km}$',
          principle:
            'East and south are perpendicular directions, so the straight-line distance is the hypotenuse of a right-angled triangle (Pythagorean theorem).',
          solution:
            'The eastward displacement ($8\\text{ km}$) and southward displacement ($15\\text{ km}$) meet at a right angle ($90^\\circ$). By the Pythagorean theorem, the distance $d$ from the starting point is:\n$$d = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17\\text{ km}.$$',
          rubric: [
            { code: 'M2', text: 'Applies the Pythagorean theorem to legs $8\\text{ km}$ and $15\\text{ km}$.' },
            { code: 'A2', text: 'Correct distance $17\\text{ km}$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'There are some chickens and pigs in a cage and the number of chickens is $8$ times and $3$ fewer the number of pigs. They have $534$ legs in total. How many pig(s) is / are there?',
          answer: '$27$',
          principle:
            'Express the number of chickens in terms of the number of pigs and form a total-legs equation ($2$ legs per chicken, $4$ legs per pig).',
          solution:
            'Let the number of pigs be $p$. Since the number of chickens is $3$ fewer than $8$ times the number of pigs, there are $8p - 3$ chickens.\nEach chicken has $2$ legs and each pig has $4$ legs, so:\n$$2(8p - 3) + 4p = 534.$$\nExpand and simplify:\n$$16p - 6 + 4p = 534 \\implies 20p = 540 \\implies p = 27.$$\nCheck: $27$ pigs and $8(27) - 3 = 213$ chickens have $4(27) + 2(213) = 108 + 426 = 534$ legs.',
          rubric: [
            { code: 'M2', text: 'Sets up $2(8p - 3) + 4p = 534$ and simplifies to $20p = 540$.' },
            { code: 'A2', text: 'Correct count $27$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            'If the average of the following arithmetic sequence is $527$, find the last term of the sequence.\n$$118, 120, 122, 124, \\ldots, \\underline{\\hspace{1.2cm}}$$',
          answer: '$936$',
          principle:
            'The average (arithmetic mean) of any finite arithmetic sequence equals the average of its first and last terms.',
          solution:
            'In an arithmetic sequence, pairing terms symmetrically from both ends gives the same average as the first and last terms:\n$$\\text{Average} = \\frac{\\text{first term} + \\text{last term}}{2}.$$\nLet the last term be $L$. Substituting the first term $118$ and average $527$:\n$$\\frac{118 + L}{2} = 527 \\implies 118 + L = 1054 \\implies L = 1054 - 118 = 936.$$\nCheck: $936$ is even (matching the common difference $2$), and $\\frac{118 + 936}{2} = 527$.',
          rubric: [
            { code: 'M2', text: 'Uses $\\frac{\\text{first} + \\text{last}}{2} = 527$.' },
            { code: 'A2', text: 'Correct last term $936$.' }
          ]
        },
        {
          label: '6',
          marks: 4,
          prompt:
            'A ferry travels from $A$ to $B$. It takes $6$ hours to travel downstream and $9$ hours to travel back. It is known that the water flows at the rate of $4\\text{ km/hr}$. Find the distance between $A$ and $B$ in km.',
          answer: '$144\\text{ km}$',
          principle:
            'Downstream speed is $v + c$ and upstream speed is $v - c$, where $v$ is the still-water speed and $c$ is the current speed; both journeys cover the same distance.',
          solution:
            'Let the speed of the ferry in still water be $v\\text{ km/hr}$ and the distance between $A$ and $B$ be $d\\text{ km}$.\n- Downstream speed $= v + 4\\text{ km/hr}$, taking $6$ hours, so $d = 6(v + 4)$.\n- Upstream speed $= v - 4\\text{ km/hr}$, taking $9$ hours, so $d = 9(v - 4)$.\n\nEquating the two expressions for $d$:\n$$6(v + 4) = 9(v - 4) \\implies 6v + 24 = 9v - 36 \\implies 3v = 60 \\implies v = 20\\text{ km/hr}.$$\nTherefore, the distance between $A$ and $B$ is:\n$$d = 6 \\times (20 + 4) = 6 \\times 24 = 144\\text{ km}.$$\nCheck: upstream time $= \\dfrac{144}{20 - 4} = \\dfrac{144}{16} = 9$ hours.',
          rubric: [
            { code: 'M2', text: 'Forms $6(v + 4) = 9(v - 4)$ to find $v = 20\\text{ km/hr}$.' },
            { code: 'A2', text: 'Correct distance $144\\text{ km}$.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section 2: Arithmetic',
      marks: 24,
      stem: 'Short-answer questions 7 to 12. Each correct answer scores 4 marks.',
      parts: [
        {
          label: '7',
          marks: 4,
          prompt:
            'Find the value of $(5^2 + 10^2 + 15^2 + 25^2 + \\cdots + 45^2 + 50^2) \\div 7$.',
          answer: '$1375$ (or $\\dfrac{9225}{7} = 1317\\dfrac{6}{7}$ if $20^2$ is omitted as printed)',
          principle:
            'Factor out $5^2 = 25$ from each square and apply the sum-of-squares formula $\\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}$.',
          solution:
            'Note that the source PDF accidentally omits $+ 20^2$ between $15^2$ and $25^2$.\n\n1. **Intended full sequence of multiples of $5$ ($5^2$ to $50^2$)**:\nFactor out $5^2 = 25$:\n$$5^2 + 10^2 + 15^2 + 20^2 + \\cdots + 50^2 = 25(1^2 + 2^2 + 3^2 + \\cdots + 10^2).$$\nUsing $\\sum_{k=1}^{10} k^2 = \\dfrac{10 \\times 11 \\times 21}{6} = 385$:\n$$\\frac{25 \\times 385}{7} = 25 \\times 55 = 1375.$$\n\n2. **Literal printed expression (omitting $20^2 = 400$)**:\nSubtracting $400$ from the full sum $25 \\times 385 = 9625$ gives $9625 - 400 = 9225$, so:\n$$\\frac{9225}{7} = 1317\\frac{6}{7}.$$',
          rubric: [
            { code: 'M2', text: 'Factors out $5^2 = 25$ and applies $\\sum_{k=1}^{10} k^2 = 385$ before dividing by $7$.' },
            { code: 'A2', text: 'Correct value $1375$ (or $\\frac{9225}{7}$ if $20^2$ is omitted).' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Find the value of $1560 \\times 6432 - 1559 \\times 6433$.',
          answer: '$4873$',
          principle:
            'Rewrite nearby numbers in terms of a common pair so large products cancel cleanly.',
          solution:
            'Write $1559 = 1560 - 1$ and $6433 = 6432 + 1$:\n$$\\begin{aligned}1560 \\times 6432 - 1559 \\times 6433 &= 1560 \\times 6432 - (1560 - 1)(6432 + 1) \\\\ &= 1560 \\times 6432 - (1560 \\times 6432 + 1560 - 6432 - 1) \\\\ &= 6432 - 1560 + 1 \\\\ &= 4872 + 1 = 4873.\\end{aligned}$$',
          rubric: [
            { code: 'M2', text: 'Rewrites the second product in terms of $1560$ and $6432$ (or groups $1560 \\times 6432 - 1559 \\times 6432 - 1559$) to cancel large products.' },
            { code: 'A2', text: 'Correct value $4873$.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Find the value of $\\dfrac{1}{6} + \\dfrac{1}{10} + \\dfrac{1}{15} + \\cdots + \\dfrac{1}{153} + \\dfrac{1}{171}$.',
          answer: '$\\dfrac{32}{57}$',
          principle:
            'Recognise the denominators as triangular numbers $\\frac{n(n+1)}{2}$ and use telescoping partial fractions.',
          solution:
            'Notice that the denominators are consecutive triangular numbers starting from $\\frac{3 \\times 4}{2} = 6$ up to $\\frac{18 \\times 19}{2} = 171$:\n$$6 = \\frac{3 \\times 4}{2},\\quad 10 = \\frac{4 \\times 5}{2},\\quad 15 = \\frac{5 \\times 6}{2},\\quad \\ldots,\\quad 153 = \\frac{17 \\times 18}{2},\\quad 171 = \\frac{18 \\times 19}{2}.$$\nEach term splits as a telescoping difference:\n$$\\frac{1}{\\frac{n(n+1)}{2}} = \\frac{2}{n(n+1)} = 2\\left(\\frac{1}{n} - \\frac{1}{n+1}\\right).$$\nSumming from $n = 3$ to $n = 18$, all middle terms cancel:\n$$\\begin{aligned}\\frac{1}{6} + \\frac{1}{10} + \\cdots + \\frac{1}{171} &= 2\\left[\\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{18} - \\frac{1}{19}\\right)\\right] \\\\ &= 2\\left(\\frac{1}{3} - \\frac{1}{19}\\right) = 2 \\times \\frac{16}{57} = \\frac{32}{57}.\\end{aligned}$$',
          rubric: [
            { code: 'M2', text: 'Rewrites $\\frac{1}{T_n} = 2\\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$ for $n = 3$ to $18$ and telescopes the sum.' },
            { code: 'A2', text: 'Correct fraction $\\frac{32}{57}$.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Find the value of $4\\dfrac{1}{3} \\times 16 + 7\\dfrac{1}{6} \\times 17 + 10\\dfrac{1}{9} \\times 18$.',
          answer: '$373\\dfrac{1}{6}$ (or $\\dfrac{2239}{6}$)',
          principle:
            'Split each mixed number into its integer part and fractional part using the distributive law.',
          solution:
            'Expand each product into integer and fractional parts:\n$$\\begin{aligned}\\left(4 + \\frac{1}{3}\\right)\\times 16 + \\left(7 + \\frac{1}{6}\\right)\\times 17 + \\left(10 + \\frac{1}{9}\\right)\\times 18 &= (4 \\times 16 + 7 \\times 17 + 10 \\times 18) + \\left(\\frac{16}{3} + \\frac{17}{6} + \\frac{18}{9}\\right) \\\\ &= (64 + 119 + 180) + \\left(\\frac{32}{6} + \\frac{17}{6} + 2\\right) \\\\ &= 363 + \\frac{49}{6} + 2 \\\\ &= 365 + 8\\frac{1}{6} = 373\\frac{1}{6} = \\frac{2239}{6}.\\end{aligned}$$',
          rubric: [
            { code: 'M2', text: 'Separates integer and fractional parts (or converts to improper fractions) and combines over a common denominator.' },
            { code: 'A2', text: 'Correct value $373\\frac{1}{6}$ (or $\\frac{2239}{6}$).' }
          ]
        },
        {
          label: '11',
          marks: 4,
          prompt: 'Find the value of $36^2 - 32 \\times 8$.',
          answer: '$1040$',
          principle:
            'Rewrite $32 \\times 8$ as a square ($16^2$) and apply the difference of squares $a^2 - b^2 = (a - b)(a + b)$.',
          solution:
            'Note that $32 \\times 8 = (2 \\times 16) \\times 8 = 16 \\times 16 = 16^2$. Using the difference of squares:\n$$36^2 - 16^2 = (36 - 16)(36 + 16) = 20 \\times 52 = 1040.$$\nCheck directly: $36^2 = 1296$ and $32 \\times 8 = 256$, giving $1296 - 256 = 1040$.',
          rubric: [
            { code: 'M2', text: 'Uses $32 \\times 8 = 16^2$ with difference of squares (or computes $1296 - 256$).' },
            { code: 'A2', text: 'Correct value $1040$.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'Find the value of\n$$\\dfrac{9}{4 - \\dfrac{8}{2 + \\dfrac{7}{6 - \\dfrac{1}{3}}}}.$$',
          answer: '$\\dfrac{165}{28}$ (or $5\\dfrac{25}{28}$)',
          principle:
            'Evaluate a continued fraction from the innermost denominator outward.',
          solution:
            'Simplify step by step from the bottom up:\n1. Innermost denominator: $6 - \\dfrac{1}{3} = \\dfrac{17}{3}$.\n2. Next fraction: $\\dfrac{7}{17/3} = \\dfrac{21}{17}$.\n3. Middle denominator: $2 + \\dfrac{21}{17} = \\dfrac{34 + 21}{17} = \\dfrac{55}{17}$.\n4. Next fraction: $\\dfrac{8}{55/17} = \\dfrac{136}{55}$.\n5. Outer denominator: $4 - \\dfrac{136}{55} = \\dfrac{220 - 136}{55} = \\dfrac{84}{55}$.\n6. Final division:\n$$\\frac{9}{84/55} = \\frac{9 \\times 55}{84} = \\frac{3 \\times 55}{28} = \\frac{165}{28} = 5\\frac{25}{28}.$$',
          rubric: [
            { code: 'M2', text: 'Simplifies the continued fraction accurately from bottom to top ($\\frac{17}{3}$, $\\frac{55}{17}$, $\\frac{84}{55}$).' },
            { code: 'A2', text: 'Correct simplified fraction $\\frac{165}{28}$ (or $5\\frac{25}{28}$).' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Section 3: Number Theory',
      marks: 24,
      stem: 'Short-answer questions 13 to 18. Each correct answer scores 4 marks.',
      parts: [
        {
          label: '13',
          marks: 4,
          prompt:
            'How many simplified positive proper fraction(s) with denominator $252$ is / are there?',
          answer: '$72$',
          principle:
            'A proper fraction $\\frac{k}{252}$ ($1 \\le k < 252$) is in simplest form if and only if $\\gcd(k, 252) = 1$, counted by Euler\'s totient function $\\varphi(252)$.',
          solution:
            'First prime-factorise $252$:\n$$252 = 4 \\times 63 = 2^2 \\times 3^2 \\times 7.$$\nWe need the number of integers $k$ with $1 \\le k \\le 251$ that share no common prime factor ($2$, $3$, or $7$) with $252$. Using Euler\'s totient formula:\n$$\\varphi(252) = 252 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{7}\\right) = 252 \\times \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{6}{7} = 72.$$',
          rubric: [
            { code: 'M2', text: 'Factorises $252 = 2^2 \\times 3^2 \\times 7$ and sets up Euler\'s totient (or inclusion-exclusion).' },
            { code: 'A2', text: 'Correct count $72$.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt:
            'Find the unit digit of $2^1 + 4^3 + 6^5 + \\cdots + 18^{17} + 20^{19}$.',
          answer: '$0$',
          principle:
            'Determine the units digit of each term modulo $10$ using the cyclic pattern of powers of the base\'s units digit.',
          solution:
            'There are $10$ terms: $(2k)^{2k-1}$ for $k = 1, 2, \\dots, 10$. Notice that every exponent $2k - 1$ is odd.\nCompute the units digit of each term:\n- $2^1 \\equiv 2 \\pmod{10}$\n- $4^3 = 64 \\equiv 4 \\pmod{10}$\n- $6^5 \\equiv 6 \\pmod{10}$ (any positive power of $6$ ends in $6$)\n- $8^7 \\equiv 8^3 = 512 \\equiv 2 \\pmod{10}$ (since powers of $8$ repeat in cycle $8, 4, 2, 6$ and $7 \\equiv 3 \\pmod 4$)\n- $10^9 \\equiv 0 \\pmod{10}$\n- $12^{11} \\equiv 2^{11} \\equiv 2^3 = 8 \\pmod{10}$ (cycle $2, 4, 8, 6$ and $11 \\equiv 3 \\pmod 4$)\n- $14^{13} \\equiv 4^{13} \\equiv 4 \\pmod{10}$ (odd power of $4$ ends in $4$)\n- $16^{15} \\equiv 6 \\pmod{10}$\n- $18^{17} \\equiv 8^{17} \\equiv 8^1 = 8 \\pmod{10}$ (since $17 \\equiv 1 \\pmod 4$)\n- $20^{19} \\equiv 0 \\pmod{10}$\n\nSum the units digits:\n$$2 + 4 + 6 + 2 + 0 + 8 + 4 + 6 + 8 + 0 = 40 \\equiv 0 \\pmod{10}.$$\nHence, the unit digit is $0$.',
          rubric: [
            { code: 'M2', text: 'Finds the units digits of all $10$ terms using power cycles modulo $10$.' },
            { code: 'A2', text: 'Correct unit digit $0$.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'Define the operation symbol $a \\otimes b = \\dfrac{4 \\times (b - 2) + b}{ab}$. If $(1 \\otimes B) \\otimes (10 \\otimes 9) = \\dfrac{7}{36}$, find the value of $B$.',
          answer: '$\\dfrac{2072}{20555}$',
          principle:
            'Evaluate the known operation $10 \\otimes 9$ first, let $X = 1 \\otimes B$, solve the outer operation equation for $X$, and then solve for $B$.',
          solution:
            'First simplify the operation definition:\n$$a \\otimes b = \\frac{4(b - 2) + b}{ab} = \\frac{5b - 8}{ab}.$$\n\n1. **Evaluate $10 \\otimes 9$**:\n$$10 \\otimes 9 = \\frac{4 \\times (9 - 2) + 9}{10 \\times 9} = \\frac{28 + 9}{90} = \\frac{37}{90}.$$\n\n2. **Let $X = 1 \\otimes B$ and solve $X \\otimes \\frac{37}{90} = \\frac{7}{36}$**:\nUsing $c = \\frac{37}{90}$:\n$$X \\otimes \\frac{37}{90} = \\frac{5 \\times \\frac{37}{90} - 8}{X \\times \\frac{37}{90}} = \\frac{\\frac{37}{18} - 8}{\\frac{37}{90} X} = \\frac{-\\frac{107}{18}}{\\frac{37}{90} X} = -\\frac{107}{18} \\times \\frac{90}{37 X} = -\\frac{535}{37 X}.$$\nSetting this equal to $\\frac{7}{36}$:\n$$-\\frac{535}{37 X} = \\frac{7}{36} \\implies X = -\\frac{535 \\times 36}{37 \\times 7} = -\\frac{19260}{259}.$$\n\n3. **Solve for $B$ from $1 \\otimes B = X$**:\n$$1 \\otimes B = \\frac{5B - 8}{B} = 5 - \\frac{8}{B} = -\\frac{19260}{259}$$\n$$\\implies \\frac{8}{B} = 5 + \\frac{19260}{259} = \\frac{1295 + 19260}{259} = \\frac{20555}{259}.$$\nTherefore:\n$$B = \\frac{8 \\times 259}{20555} = \\frac{2072}{20555}.$$\n(Note: $\\gcd(2072, 20555) = 1$, so $\\frac{2072}{20555}$ is in lowest terms; this unusual fraction follows directly from the printed definition of $\\otimes$.)',
          rubric: [
            { code: 'M2', text: 'Evaluates $10 \\otimes 9 = \\frac{37}{90}$ and solves for $X = 1 \\otimes B = -\\frac{19260}{259}$.' },
            { code: 'A2', text: 'Correct simplified fraction $\\frac{2072}{20555}$.' }
          ]
        },
        {
          label: '16',
          marks: 4,
          prompt: 'Find the sum of all positive factor(s) of $833$.',
          answer: '$1026$',
          principle:
            'If $n = p^a q^b$, the sum of its positive factors is $(1 + p + \\cdots + p^a)(1 + q + \\cdots + q^b)$.',
          solution:
            'Prime-factorise $833$:\n$$833 = 7 \\times 119 = 7 \\times 7 \\times 17 = 7^2 \\times 17.$$\nThe sum of all positive factors of $833$ is:\n$$(1 + 7 + 7^2)(1 + 17) = (1 + 7 + 49) \\times 18 = 57 \\times 18 = 1026.$$\nCheck by listing all $6$ factors: $1 + 7 + 17 + 49 + 119 + 833 = 1026$.',
          rubric: [
            { code: 'M2', text: 'Factorises $833 = 7^2 \\times 17$ and applies the sum-of-divisors product formula.' },
            { code: 'A2', text: 'Correct sum $1026$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'If a $9$-digit number $\\overline{2062A72B1}$ is divisible by $63$, find the sum of all possible value(s) of $2B$.',
          answer: '$8$',
          principle:
            'Since $63 = 7 \\times 9$ with $\\gcd(7, 9) = 1$, a number is divisible by $63$ if and only if it is divisible by both $9$ and $7$.',
          solution:
            'Let $N = \\overline{2062A72B1}$, where $A, B \\in \\{0, 1, \\dots, 9\\}$.\n1. **Divisibility by $9$**: The digit sum must be a multiple of $9$:\n$$2 + 0 + 6 + 2 + A + 7 + 2 + B + 1 = 20 + A + B.$$\nSince $0 \\le A + B \\le 18$, we must have $20 + A + B \\in \\{27, 36\\}$, so $A + B = 7$ or $A + B = 16$.\n\n2. **Divisibility by $7$**: Split $N$ into groups of three digits from the right ($206$, $2A7$, $2B1$) and take the alternating sum:\n$$206 - (200 + 10A + 7) + (200 + 10B + 1) = 200 - 10A + 10B.$$\nSince $200 \\equiv 4 \\pmod 7$ and $10 \\equiv 3 \\pmod 7$, divisibility by $7$ requires:\n$$4 - 3A + 3B \\equiv 0 \\pmod 7.$$ \n\n3. **Test both cases**:\n- If $A + B = 7$, then $A = 7 - B$, giving:\n$$4 - 3(7 - B) + 3B = 6B - 17 \\equiv 6B - 3 \\equiv 0 \\pmod 7 \\implies 6B \\equiv 3 \\pmod 7 \\implies B = 4,$$ which gives $A = 3$. (Check: $206237241 = 63 \\times 3273607$.)\n- If $A + B = 16$, then $A = 16 - B$, giving:\n$$4 - 3(16 - B) + 3B = 6B - 44 \\equiv 6B - 2 \\equiv 0 \\pmod 7 \\implies 6B \\equiv 2 \\pmod 7 \\implies B = 5,$$ which forces $A = 11$, impossible for a single digit.\n\nThus the only solution is $A = 3, B = 4$, giving only one possible value $2B = 8$. The sum of all possible values of $2B$ is $8$.',
          rubric: [
            { code: 'M2', text: 'Uses divisibility by $9$ and $7$ to isolate the unique digit pair $A = 3, B = 4$.' },
            { code: 'A2', text: 'Correct value $8$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'A $4$-digit number has a remainder $1$ when divided by $2$, the same number has a remainder $3$ when divided by $4$ and it has a remainder $1$ when divided by $6$. What is the smallest possible value of this number?',
          answer: '$1003$',
          principle:
            'Combine the congruences modulo $4$ and $6$ using the Chinese Remainder Theorem / least common multiple $\\operatorname{lcm}(4, 6) = 12$.',
          solution:
            'Let the number be $N$.\n- $N \\equiv 3 \\pmod 4$ automatically implies $N \\equiv 1 \\pmod 2$.\n- $N \\equiv 1 \\pmod 6$ means $N \\in \\{1, 7, 13, 19, \\ldots\\} \\pmod{12}$.\nTesting both residue classes modulo $12$ against $N \\equiv 3 \\pmod 4$:\n- $1 \\equiv 1 \\pmod 4$ (fails)\n- $7 \\equiv 3 \\pmod 4$ (works!)\n\nSo $N \\equiv 7 \\pmod{12}$, meaning $N = 12k + 7$.\nTo find the smallest $4$-digit number ($N \\ge 1000$):\n$$12k + 7 \\ge 1000 \\implies 12k \\ge 993 \\implies k \\ge \\frac{993}{12} = 82.75.$$\nThe smallest integer is $k = 83$, giving:\n$$N = 12 \\times 83 + 7 = 996 + 7 = 1003.$$\nCheck: $1003 = 2(501)+1$, $1003 = 4(250)+3$, and $1003 = 6(167)+1$.',
          rubric: [
            { code: 'M2', text: 'Combines the remainder conditions into $N \\equiv 7 \\pmod{12}$.' },
            { code: 'A2', text: 'Correct smallest $4$-digit number $1003$.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Section 4: Geometry',
      marks: 24,
      stem: 'Short-answer questions 19 to 24. Each correct answer scores 4 marks.',
      parts: [
        {
          label: '19',
          marks: 4,
          prompt:
            'It is known that the lengths of $2$ sides of a right-angled triangle are $21$ and $35$ and the lengths of all sides are integers. Find the area of this triangle.',
          answer: '$294$',
          principle:
            'Check whether $35$ is the hypotenuse or a leg using the Pythagorean theorem, then compute $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$.',
          solution:
            'There are two cases for the unknown integer side $x$:\n- **Case 1 ($35$ is the hypotenuse)**:\n$$x^2 = 35^2 - 21^2 = (35 - 21)(35 + 21) = 14 \\times 56 = 784 = 28^2,$$\nso $x = 28$ (a scaled $3\\text{-}4\\text{-}5$ triple: $7 \\times 3, 7 \\times 4, 7 \\times 5$). This is a valid integer right triangle with legs $21$ and $28$.\n- **Case 2 ($21$ and $35$ are the two legs)**:\n$$x^2 = 21^2 + 35^2 = 441 + 1225 = 1666,$$ which is not a perfect square ($40^2 = 1600 < 1666 < 1681 = 41^2$).\n\nTherefore the legs are $21$ and $28$, and the area is:\n$$\\text{Area} = \\frac{1}{2} \\times 21 \\times 28 = 21 \\times 14 = 294.$$',
          rubric: [
            { code: 'M2', text: 'Identifies $35$ as the hypotenuse and finds the second leg $28$ (while ruling out $21^2 + 35^2$).' },
            { code: 'A2', text: 'Correct area $294$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'How many rectangle(s) containing at least one "*" is / are there in the $6 \\times 6$ grid below?',
          figures: [
            {
              src: '/papers/hkimo-final-p6/fig-20.svg',
              alt: 'A 6 by 6 grid of squares with one asterisk in row 3 column 3 and another asterisk in row 4 column 4.',
              caption: '6 by 6 grid for Question 20.'
            }
          ],
          answer: '$207$',
          principle:
            'Count grid rectangles containing a target cell by choosing top/bottom and left/right boundary lines, then apply inclusion-exclusion for two stars.',
          solution:
            'Index rows $1$ to $6$ from top to bottom and columns $1$ to $6$ from left to right. The two "*" cells are at $(3, 3)$ and $(4, 4)$.\nA grid rectangle spanning rows $r_1$ to $r_2$ and columns $c_1$ to $c_2$ contains cell $(r, c)$ if and only if $r_1 \\le r \\le r_2$ and $c_1 \\le c \\le c_2$.\n\n1. **Rectangles containing $(3, 3)$**:\n   - $r_1 \\in \\{1, 2, 3\\}$ ($3$ choices) and $r_2 \\in \\{3, 4, 5, 6\\}$ ($4$ choices) $\\implies 3 \\times 4 = 12$ row spans.\n   - $c_1 \\in \\{1, 2, 3\\}$ ($3$ choices) and $c_2 \\in \\{3, 4, 5, 6\\}$ ($4$ choices) $\\implies 3 \\times 4 = 12$ column spans.\n   - Total $= 12 \\times 12 = 144$.\n\n2. **Rectangles containing $(4, 4)$**:\n   - $r_1 \\in \\{1, 2, 3, 4\\}$ ($4$ choices) and $r_2 \\in \\{4, 5, 6\\}$ ($3$ choices) $\\implies 12$ row spans.\n   - $c_1 \\in \\{1, 2, 3, 4\\}$ ($4$ choices) and $c_2 \\in \\{4, 5, 6\\}$ ($3$ choices) $\\implies 12$ column spans.\n   - Total $= 12 \\times 12 = 144$.\n\n3. **Rectangles containing both $(3, 3)$ and $(4, 4)$**:\n   - $r_1 \\in \\{1, 2, 3\\}$ ($3$ choices) and $r_2 \\in \\{4, 5, 6\\}$ ($3$ choices) $\\implies 9$ row spans.\n   - $c_1 \\in \\{1, 2, 3\\}$ ($3$ choices) and $c_2 \\in \\{4, 5, 6\\}$ ($3$ choices) $\\implies 9$ column spans.\n   - Total $= 9 \\times 9 = 81$.\n\nBy inclusion-exclusion, the number of rectangles containing at least one "*" is:\n$$144 + 144 - 81 = 207.$$',
          rubric: [
            { code: 'M2', text: 'Computes rectangles containing each star ($144$ each) and both stars ($81$) using boundary choices.' },
            { code: 'A2', text: 'Correct count $207$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'There is a cuboid. When its length increases $3\\text{ cm}$, its volume will be increased by $486\\text{ cm}^3$. When its width increases $2\\text{ cm}$, its volume will be increased by $144\\text{ cm}^3$. When its height increases $4\\text{ cm}$, its volume will be increased by $324\\text{ cm}^3$. How many cubic centimeter is the volume of this cuboid?',
          answer: '$972\\text{ cm}^3$',
          principle:
            'Each volume increase equals the cross-sectional area times the side increase, yielding $wh$, $lh$, and $lw$; then $V = \\sqrt{(wh)(lh)(lw)}$.',
          solution:
            'Let the length, width, and height of the cuboid be $l$, $w$, and $h$ (in cm).\n- Increasing $l$ by $3\\text{ cm}$ increases the volume by $3wh = 486 \\implies wh = \\dfrac{486}{3} = 162$.\n- Increasing $w$ by $2\\text{ cm}$ increases the volume by $2lh = 144 \\implies lh = \\dfrac{144}{2} = 72$.\n- Increasing $h$ by $4\\text{ cm}$ increases the volume by $4lw = 324 \\implies lw = \\dfrac{324}{4} = 81$.\n\nMultiplying the three pairwise products gives the square of the volume $V = lwh$:\n$$V^2 = (wh)(lh)(lw) = 162 \\times 72 \\times 81.$$\nFactor into squares to take the square root cleanly:\n$$162 \\times 72 \\times 81 = (2 \\times 81) \\times (2 \\times 36) \\times 81 = 2^2 \\times 6^2 \\times 9^2 \\times 9^2 = (2 \\times 6 \\times 9 \\times 9)^2 = 972^2.$$\nHence the volume of the cuboid is $V = 972\\text{ cm}^3$. (Indeed, $l = 6, w = 13.5, h = 12$ gives $V = 972$.)',
          rubric: [
            { code: 'M2', text: 'Finds $wh = 162$, $lh = 72$, $lw = 81$ and sets $V = \\sqrt{wh \\cdot lh \\cdot lw}$.' },
            { code: 'A2', text: 'Correct volume $972\\text{ cm}^3$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'The sum of interior angles of a regular polygon is $4$ times larger than the sum of its exterior angles. How many side(s) does the regular polygon have?',
          answer: '$10$',
          principle:
            'The sum of the interior angles of an $n$-sided convex polygon is $(n - 2) \\times 180^\\circ$, while the sum of its exterior angles is always $360^\\circ$.',
          solution:
            'For any convex $n$-sided polygon, the sum of its exterior angles is $360^\\circ$, and the sum of its interior angles is $(n - 2) \\times 180^\\circ$.\nFollowing standard HKIMO phrasing ("$4$ times larger than" meaning $4$ times as large as):\n$$(n - 2) \\times 180^\\circ = 4 \\times 360^\\circ = 1440^\\circ.$$\nDivide both sides by $180^\\circ$:\n$$n - 2 = \\frac{1440}{180} = 8 \\implies n = 10.$$\n(Note: if read strictly in English as "$1 + 4 = 5$ times as large as", the equation $(n - 2) \\times 180^\\circ = 5 \\times 360^\\circ$ would give $n = 12$.)',
          rubric: [
            { code: 'M2', text: 'Equates $(n - 2) \\times 180^\\circ$ to $4 \\times 360^\\circ$ using the exterior angle sum $360^\\circ$.' },
            { code: 'A2', text: 'Correct number of sides $10$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt: 'How many rectangle(s) is / are there in the figure below?',
          figures: [
            {
              src: '/papers/hkimo-final-p6/fig-23.svg',
              alt: 'An irregular grid of 17 unit squares spanning 6 columns and 4 rows with rows 2 and 3 full.',
              caption: 'Composite grid figure for Question 23.'
            }
          ],
          answer: '$84$',
          principle:
            'Count rectangles systematically by the range of rows $[r_1, r_2]$ they span; for each row range, find the contiguous column segments present in every row of that range.',
          solution:
            'Label rows $1$ to $4$ from top to bottom and columns $1$ to $6$ from left to right. The figure contains:\n- Row 1: columns $3$–$4$ (length $2$)\n- Row 2: columns $1$–$6$ (length $6$)\n- Row 3: columns $1$–$6$ (length $6$)\n- Row 4: columns $1$–$2$ (length $2$) and column $6$ (length $1$)\n\nA contiguous strip of $m$ cells contributes $\\frac{m(m+1)}{2}$ rectangles. Count by row span $[r_1, r_2]$:\n- **Height 1**:\n  - Row 1 only (cols $3$–$4$): $\\frac{2 \\times 3}{2} = 3$\n  - Row 2 only (cols $1$–$6$): $\\frac{6 \\times 7}{2} = 21$\n  - Row 3 only (cols $1$–$6$): $\\frac{6 \\times 7}{2} = 21$\n  - Row 4 only (cols $1$–$2$ and col $6$): $\\frac{2 \\times 3}{2} + 1 = 4$\n- **Height 2**:\n  - Rows 1–2 (common cols $3$–$4$): $3$\n  - Rows 2–3 (common cols $1$–$6$): $21$\n  - Rows 3–4 (common cols $1$–$2$ and col $6$): $3 + 1 = 4$\n- **Height 3**:\n  - Rows 1–3 (common cols $3$–$4$): $3$\n  - Rows 2–4 (common cols $1$–$2$ and col $6$): $3 + 1 = 4$\n- **Height 4**:\n  - Rows 1–4: no column spans all $4$ rows ($0$).\n\nAdding every case gives:\n$$(3 + 21 + 21 + 4) + (3 + 21 + 4) + (3 + 4) = 49 + 28 + 7 = 84.$$',
          rubric: [
            { code: 'M2', text: 'Systematically counts rectangles by row span (or maximal sub-rectangles with inclusion-exclusion) without double counting.' },
            { code: 'A2', text: 'Correct total $84$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'A square is formed by combining $256$ rectangles that are $1\\text{ cm} \\times 4\\text{ cm}$. Find the difference between the perimeter of new square and the total perimeter of original $256$ rectangles in cm.',
          answer: '$2432\\text{ cm}$',
          principle:
            'Area is conserved when rearranging tiles without overlap, which fixes the side length of the new square.',
          solution:
            '1. **Perimeter of the new square**:\nEach small rectangle has area $1 \\times 4 = 4\\text{ cm}^2$, so the total area of $256$ rectangles is:\n$$256 \\times 4 = 1024\\text{ cm}^2.$$\nSince $1024 = 32^2$, the new square has side length $32\\text{ cm}$ (and indeed a $32 \\times 32$ square can be tiled by $32 \\times 8 = 256$ rectangles of size $1 \\times 4$). Its perimeter is:\n$$4 \\times 32 = 128\\text{ cm}.$$\n\n2. **Total perimeter of the $256$ rectangles**:\nEach $1\\text{ cm} \\times 4\\text{ cm}$ rectangle has perimeter $2 \\times (1 + 4) = 10\\text{ cm}$, so the $256$ rectangles have total perimeter:\n$$256 \\times 10 = 2560\\text{ cm}.$$\n\n3. **Difference**:\n$$2560 - 128 = 2432\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Finds the square side $32\\text{ cm}$ from area $1024\\text{ cm}^2$, square perimeter $128\\text{ cm}$, and total original perimeter $2560\\text{ cm}$.' },
            { code: 'A2', text: 'Correct difference $2432\\text{ cm}$.' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Section 5: Combinatorics',
      marks: 24,
      stem: 'Short-answer questions 25 to 30. Each correct answer scores 4 marks.',
      parts: [
        {
          label: '25',
          marks: 4,
          prompt:
            'Numbers are drawn from $93$ integers among $24$ to $116$. At least how many number(s) is / are needed to be drawn to ensure that there are two numbers drawn whose sum is $98$?',
          answer: '$69$',
          principle:
            'Pigeonhole principle (worst-case analysis): group numbers into complementary pairs summing to $98$ and take all unpaired numbers plus one from each pair.',
          solution:
            'Consider the $93$ integers from $24$ to $116$ inclusive ($116 - 24 + 1 = 93$). Group those that can form a sum of $98$:\n- Pairs summing to $98$: $(24, 74), (25, 73), \\ldots, (48, 50)$ — that is $48 - 24 + 1 = 25$ pairs (covering $50$ integers).\n- Unpaired integers: $49$ (since $49 + 49 = 98$ requires two copies, not two distinct numbers) and all integers from $75$ to $116$ ($116 - 75 + 1 = 42$ integers, since $98 - 75 = 23 < 24$). Together, there are $1 + 42 = 43$ unpaired integers.\n\nIn the worst case without any pair summing to $98$, we can draw all $43$ unpaired integers and at most $1$ number from each of the $25$ pairs:\n$$43 + 25 = 68\\text{ numbers}.$$\nDrawing $1$ more number guarantees completing at least one of the $25$ pairs, so at least $68 + 1 = 69$ numbers must be drawn.',
          rubric: [
            { code: 'M2', text: 'Finds the $25$ pairs summing to $98$ and the $43$ unpaired integers ($49$ and $75$–$116$) for worst case $68$.' },
            { code: 'A2', text: 'Correct minimum $69$.' }
          ]
        },
        {
          label: '26',
          marks: 4,
          prompt:
            'How many different way(s) is / are there to line up $3$ identical red cups, $4$ identical blue cups, $5$ identical black cups and $2$ identical yellow cups in a row from left to right?',
          answer: '$2{,}522{,}520$',
          principle:
            'Permutations of a multiset with repeated identical items: $\\dfrac{n!}{n_1!\\, n_2!\\, \\cdots\\, n_k!}$.',
          solution:
            'There are $3 + 4 + 5 + 2 = 14$ cups in total. Dividing $14!$ by the factorials of the identical group sizes gives:\n$$\\frac{14!}{3!\\, 4!\\, 5!\\, 2!} = \\frac{14 \\times 13 \\times 12 \\times 11 \\times 10 \\times 9 \\times 8 \\times 7 \\times 6}{6 \\times 24 \\times 2}.$$\nCancel $6$ with $6$, and $24 \\times 2 = 48$ with $12 \\times 8 = 96$ (leaving $2$):\n$$14 \\times 13 \\times 11 \\times 10 \\times 9 \\times 2 \\times 7 = 182 \\times 110 \\times 126 = 20020 \\times 126 = 2{,}522{,}520.$$',
          rubric: [
            { code: 'M2', text: 'Sets up the multinomial coefficient $\\frac{14!}{3!\\,4!\\,5!\\,2!}$ and simplifies accurately.' },
            { code: 'A2', text: 'Correct count $2{,}522{,}520$.' }
          ]
        },
        {
          label: '27',
          marks: 4,
          prompt:
            '$12$ teams join a competition. Only the top $5$ teams can be promoted to Semi-Final. How many different combination(s) of team promotion to next round is / are there?',
          answer: '$792$',
          principle:
            'Selecting a subset of $5$ teams out of $12$ where order does not matter is counted by $\\binom{12}{5}$.',
          solution:
            'We choose $5$ promoted teams out of $12$ without regard to order:\n$$\\binom{12}{5} = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1}.$$\nNotice $5 \\times 2 = 10$ cancels $10$, and $4 \\times 3 = 12$ cancels $12$, leaving:\n$$11 \\times 9 \\times 8 = 792.$$',
          rubric: [
            { code: 'M2', text: 'Uses the combination $\\binom{12}{5} = \\frac{12!}{5!\\,7!}$.' },
            { code: 'A2', text: 'Correct number of combinations $792$.' }
          ]
        },
        {
          label: '28',
          marks: 4,
          prompt:
            'If we separate numbers $0, 1, 2, 3, 4, 4, 5, 9$ into two groups of equal size and combine the numbers in each group to form two $4$-digit numbers, find the maximum value of the difference between these two $4$-digit numbers if they are both larger than $3000$.',
          answer: '$6532$',
          principle:
            'To maximise $A - B$ with $A, B > 3000$, make $A$ as large as possible while making $B$ as small as possible with leading digit at least $3$.',
          solution:
            'Each $4$-digit number uses $4$ of the digits $\\{0, 1, 2, 3, 4, 4, 5, 9\\}$.\nSince the smaller number $B$ must be larger than $3000$, its thousands digit must be at least $3$. To minimise $B$, give it the smallest valid thousands digit ($3$) followed by the three smallest remaining digits ($0, 1, 2$):\n$$B = 3012.$$\nThis leaves the four largest digits $\\{4, 4, 5, 9\\}$ for the larger number $A$. Ordering them from largest to smallest maximises $A$:\n$$A = 9544.$$\nSince using any digit larger than $3$ as the thousands digit of $B$ increases $B$ by at least $1000$ while increasing $A$ by at most $100$ (e.g. $9543 - 4012 = 5531$), the maximum difference is:\n$$9544 - 3012 = 6532.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the largest number $9544$ and smallest number greater than $3000$ as $3012$.' },
            { code: 'A2', text: 'Correct maximum difference $6532$.' }
          ]
        },
        {
          label: '29',
          marks: 4,
          prompt:
            'Choose $3$ numbers from $0$ to $9$ to form $3$-digit numbers. How many even number(s) greater than $722$ is / are there? (The repetition of digits is not allowed)',
          answer: '$102$',
          principle:
            'Split into cases by the hundreds digit ($7$, $8$, $9$) and count valid even units digits before choosing the remaining tens digit.',
          solution:
            'Let the $3$-digit even number with distinct digits be $\\overline{HTU} > 722$, so $H \\in \\{7, 8, 9\\}$ and $U \\in \\{0, 2, 4, 6, 8\\}$.\n- **Case 1 ($H = 7$)**:\n  - If $T = 2$: $\\overline{72U} > 722$ with $U \\ne 2$ allows $U \\in \\{4, 6, 8\\}$, giving $3$ numbers ($724, 726, 728$).\n  - If $T \\ge 3$ ($T \\ne 7$):\n    - $T \\in \\{4, 6, 8\\}$ ($3$ even choices): $U$ can be any of the remaining $4$ even digits $\\implies 3 \\times 4 = 12$ numbers.\n    - $T \\in \\{3, 5, 9\\}$ ($3$ odd choices): $U$ can be any of the $5$ even digits $\\implies 3 \\times 5 = 15$ numbers.\n  - Subtotal for $H = 7$: $3 + 12 + 15 = 30$.\n\n- **Case 2 ($H = 8$)**:\n  - $U$ cannot be $8$, leaving $4$ choices $\\{0, 2, 4, 6\\}$ for $U$.\n  - $T$ can be any of the remaining $8$ digits (excluding $8$ and $U$).\n  - Subtotal for $H = 8$: $4 \\times 8 = 32$.\n\n- **Case 3 ($H = 9$)**:\n  - $U$ can be any of the $5$ even digits $\\{0, 2, 4, 6, 8\\}$.\n  - $T$ can be any of the remaining $8$ digits (excluding $9$ and $U$).\n  - Subtotal for $H = 9$: $5 \\times 8 = 40$.\n\nTotal $= 30 + 32 + 40 = 102$.',
          rubric: [
            { code: 'M2', text: 'Counts cases $H = 7$ ($30$), $H = 8$ ($32$), and $H = 9$ ($40$) without digit repetition.' },
            { code: 'A2', text: 'Correct count $102$.' }
          ]
        },
        {
          label: '30',
          marks: 4,
          prompt:
            'A flight of stairs has $12$ steps. Yuki can go up $1$ step, $2$ steps or $3$ steps at a time. The $4$th and $7$th step of the stairs cannot be stepped on as they are broken. How many different way(s) is / are there for Yuki to go up the stairs?',
          answer: '$152$',
          principle:
            'Dynamic programming (step-by-step recurrence): $w(n) = w(n - 1) + w(n - 2) + w(n - 3)$, setting $w(4) = 0$ and $w(7) = 0$ for the broken steps.',
          solution:
            'Let $w(n)$ be the number of ways to reach step $n$ starting from ground level ($w(0) = 1$). Since Yuki can take $1$, $2$, or $3$ steps at a time, $w(n) = w(n-1) + w(n-2) + w(n-3)$ for unbroken steps, and $w(4) = w(7) = 0$:\n- $w(0) = 1$\n- $w(1) = w(0) = 1$\n- $w(2) = w(1) + w(0) = 1 + 1 = 2$\n- $w(3) = w(2) + w(1) + w(0) = 2 + 1 + 1 = 4$\n- $w(4) = 0$ (broken)\n- $w(5) = w(4) + w(3) + w(2) = 0 + 4 + 2 = 6$\n- $w(6) = w(5) + w(4) + w(3) = 6 + 0 + 4 = 10$\n- $w(7) = 0$ (broken)\n- $w(8) = w(7) + w(6) + w(5) = 0 + 10 + 6 = 16$\n- $w(9) = w(8) + w(7) + w(6) = 16 + 0 + 10 = 26$\n- $w(10) = w(9) + w(8) + w(7) = 26 + 16 + 0 = 42$\n- $w(11) = w(10) + w(9) + w(8) = 42 + 26 + 16 = 84$\n- $w(12) = w(11) + w(10) + w(9) = 84 + 42 + 26 = 152$\n\nTherefore, there are $152$ ways for Yuki to go up the stairs.',
          rubric: [
            { code: 'M2', text: 'Uses the recurrence $w(n) = w(n-1)+w(n-2)+w(n-3)$ with $w(4)=w(7)=0$ up to $n=12$.' },
            { code: 'A2', text: 'Correct number of ways $152$.' }
          ]
        }
      ]
    }
  ]
};
