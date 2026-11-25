/**
 * Paket Soal: SASMO 2023 Grade 9 (Singapore and Asian Schools Math Olympiad, Secondary 3)
 * Sumber: Singapore and Asian Schools Math Olympiad 2023, Grade 9 Contest (sasmo_2023_g9.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Diagram pada soal 10, 12, dan 23 digambar ulang sebagai SVG.
 */
export default {
  id: 'sasmo-2023-g9',
  slug: 'sasmo-2023-grade-9',
  subject: 'olimpiade-mat',
  grade: 9,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2023 Grade 9 (Secondary 3): arithmetic, exponents, divisibility, sequences, counting, geometry, algebra, and cryptarithm',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp9-bab3-transformasi-geometri'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2023 Grade 9',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (original time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (the official contest deducts 1 mark for a wrong answer and 0 for no answer). Section B has 10 short-answer questions worth 4 marks each (no deduction). Marks shown here count correct answers only (70 marks); the official paper adds 15 starting marks (maximum 85). Diagrams for Questions 10, 12, and 23 are redrawn as vector SVG figures.',
  source: {
    org: 'SASMO',
    file: 'sasmo_2023_g9.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 30,
      stem: 'Choose the one correct answer for each question (15 questions, 2 marks each).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Calculate:\n$$2952 + 2950 - 2948 - 2946 + 2944 + 2942 - 2940 - 2938 + \\cdots + 8 + 6 - 4 - 2$$\n\nA. $1476$\nB. $2952$\nC. $369$\nD. $2592$\nE. None of the above',
          answer: 'B. $2952$',
          principle: 'Group consecutive terms in blocks of four so the differences cancel into a constant value.',
          solution:
            'Every term is an even integer descending from $2952$ to $2$, so there are $\\frac{2952}{2} = 1476$ terms in total.\nGrouping them in blocks of $4$ gives $\\frac{1476}{4} = 369$ groups:\n$$(2952 + 2950 - 2948 - 2946) + (2944 + 2942 - 2940 - 2938) + \\cdots + (8 + 6 - 4 - 2).$$\nEach group evaluates to\n$$(4k + 4) + (4k + 2) - 4k - (4k - 2) = 8$$\n(for example, $2952 - 2948 = 4$ and $2950 - 2946 = 4$, sum $8$).\nTherefore, the total sum is\n$$369 \\times 8 = 2952.$$',
          rubric: [
            { code: 'M1', text: 'Groups the $1476$ terms into $369$ blocks of $4$, each summing to $8$.' },
            { code: 'A1', text: 'Evaluates $369 \\times 8 = 2952$, option B.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'If $4^m = 2^{21} \\times 2^{21} \\times 2^{18} + 2^{20} \\times 2^{20} \\times 2^{20} + 2^{22} \\times 2^{18} \\times 2^{20} + 2^{16} \\times 2^{26} \\times 2^{18}$, what is the value of $m$?\n\nA. $62$\nB. $32$\nC. $31$\nD. $30$\nE. None of the above',
          answer: 'C. $31$',
          principle: 'Add exponents when multiplying powers with the same base, then express the sum as a single power of $4$.',
          solution:
            'Simplify each of the four products on the right-hand side:\n- $2^{21} \\times 2^{21} \\times 2^{18} = 2^{21+21+18} = 2^{60}$\n- $2^{20} \\times 2^{20} \\times 2^{20} = 2^{20+20+20} = 2^{60}$\n- $2^{22} \\times 2^{18} \\times 2^{20} = 2^{22+18+20} = 2^{60}$\n- $2^{16} \\times 2^{26} \\times 2^{18} = 2^{16+26+18} = 2^{60}$\n\nAdding them gives\n$$4^m = 4 \\times 2^{60} = 2^2 \\times 2^{60} = 2^{62} = (2^2)^{31} = 4^{31}.$$\nHence $m = 31$.',
          rubric: [
            { code: 'M1', text: 'Simplifies each term to $2^{60}$ and obtains $4^m = 4 \\times 2^{60} = 2^{62}$.' },
            { code: 'A1', text: 'Converts $2^{62} = 4^{31}$ to get $m = 31$, option C.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'A rectangular floor of $720\\text{ cm}$ by $756\\text{ cm}$ is to be covered completely by identical square tiles. What is the greatest possible length (in $\\text{cm}$) of the square tiles?\n\nA. $18$\nB. $36$\nC. $54$\nD. $72$\nE. None of the above',
          answer: 'B. $36$',
          principle: 'The side length of the largest square tile that tiles an $a \\times b$ rectangle without cutting is $\\gcd(a, b)$.',
          solution:
            'The side length $s$ must divide both $720$ and $756$. Using the Euclidean algorithm:\n$$756 - 720 = 36.$$\nCheck whether $36$ divides $720$: $720 = 36 \\times 20$, and $756 = 36 \\times 21$.\nSince $\\gcd(20, 21) = 1$, we have $\\gcd(720, 756) = 36$.\nThus, the greatest possible side length of the square tiles is $36\\text{ cm}$.',
          rubric: [
            { code: 'M1', text: 'Identifies that the greatest tile side is $\\gcd(720, 756)$.' },
            { code: 'A1', text: 'Computes $\\gcd(720, 756) = 36$, option B.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Given that $0 \\le \\frac{a+8}{5} \\le 3$ and $-13 \\le b - 6 \\le 0$, what is the smallest possible value of $ab$?\n\nA. $-49$\nB. $-48$\nC. $0$\nD. $49$\nE. None of the above',
          answer: 'A. $-49$',
          principle: 'Find the closed intervals for $a$ and $b$, then check the products of their endpoints to minimize $ab$.',
          solution:
            'Solve the two inequalities:\n1. $0 \\le \\frac{a+8}{5} \\le 3 \\implies 0 \\le a + 8 \\le 15 \\implies -8 \\le a \\le 7$.\n2. $-13 \\le b - 6 \\le 0 \\implies -7 \\le b \\le 6$.\n\nTo minimize $ab$, we need $a$ and $b$ to have opposite signs with as large a magnitude as possible. Checking the opposite-sign endpoint pairs:\n- $a = -8, b = 6 \\implies ab = -48$\n- $a = 7, b = -7 \\implies ab = -49$\n\nTherefore, the smallest possible value of $ab$ is $-49$.',
          rubric: [
            { code: 'M1', text: 'Finds $-8 \\le a \\le 7$ and $-7 \\le b \\le 6$.' },
            { code: 'A1', text: 'Tests extreme products and gets $\\min(ab) = 7 \\times (-7) = -49$, option A.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'What is the smallest positive integer $n$ such that the sum below is a perfect square?\n$$(n + 1) + (n + 2) + (n + 3) + \\cdots + (n + 2023)$$\n\nA. $1011$\nB. $1012$\nC. $2023$\nD. $2024$\nE. None of the above',
          answer: 'E. None of the above',
          principle: 'Sum the arithmetic progression and factor out square prime powers to determine the smallest missing factor needed for a perfect square.',
          solution:
            'The sum has $2023$ terms:\n$$S = 2023n + (1 + 2 + \\cdots + 2023) = 2023n + \\frac{2023 \\times 2024}{2} = 2023(n + 1012).$$\nPrime-factorize $2023$:\n$$2023 = 7 \\times 289 = 7 \\times 17^2.$$\nSo $S = 7 \\times 17^2 \\times (n + 1012)$. For $S$ to be a perfect square, $n + 1012$ must supply an odd power of $7$ and a square for all other factors, i.e., $n + 1012 = 7k^2$ for some positive integer $k$.\nSince $n \\ge 1$, we need $7k^2 \\ge 1013$, so $k^2 \\ge \\frac{1013}{7} \\approx 144.71$, which gives $k \\ge 13$.\nFor $k = 13$:\n$$n + 1012 = 7 \\times 13^2 = 7 \\times 169 = 1183 \\implies n = 1183 - 1012 = 171.$$\n(Check: $2023 \\times 1183 = (7 \\times 17 \\times 13)^2 = 1547^2$.)\nSince $171$ is not listed in A–D, the answer is E. None of the above.',
          rubric: [
            { code: 'M1', text: 'Rewrites the sum as $2023(n + 1012) = 7 \\times 17^2(n + 1012)$ and sets $n + 1012 = 7k^2$.' },
            { code: 'A1', text: 'Finds $k = 13$ gives $n = 171$, so option E (None of the above).' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Which of the following has the largest value?\n\nA. $\\frac{25^4}{25^2}$\nB. $\\frac{25^4 - 1}{25^2 - 1}$\nC. $24 \\times 26$\nD. $625$\nE. $25 \\times 26$',
          answer: 'E. $25 \\times 26$',
          principle: 'Use algebraic identities such as difference of squares to evaluate each option cleanly around $25^2 = 625$.',
          solution:
            'Evaluate each option:\n- A: $\\frac{25^4}{25^2} = 25^2 = 625$\n- B: $\\frac{25^4 - 1}{25^2 - 1} = \\frac{(25^2 - 1)(25^2 + 1)}{25^2 - 1} = 25^2 + 1 = 626$\n- C: $24 \\times 26 = (25 - 1)(25 + 1) = 25^2 - 1 = 624$\n- D: $625$\n- E: $25 \\times 26 = 25(25 + 1) = 625 + 25 = 650$\n\nComparing $625, 626, 624, 625, 650$, the largest value is $650$, option E.',
          rubric: [
            { code: 'M1', text: 'Simplifies each expression (including $\\frac{25^4-1}{25^2-1} = 626$ and $24 \\times 26 = 624$).' },
            { code: 'A1', text: 'Identifies $25 \\times 26 = 650$ as largest, option E.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'How many digits are there in the number $125^{125} \\times 8^{128}$?\n\nA. $374$\nB. $377$\nC. $378$\nD. $387$\nE. None of the above',
          answer: 'C. $378$',
          principle: 'Rewrite factors of $5$ and $2$ to form powers of $10$, then count the digits of the remaining leading factor plus the trailing zeros.',
          solution:
            'Rewrite $125 = 5^3$ and $8 = 2^3$:\n$$125^{125} \\times 8^{128} = (5^3)^{125} \\times (2^3)^{128} = 5^{375} \\times 2^{384} = 2^9 \\times (5 \\times 2)^{375} = 512 \\times 10^{375}.$$\nThe integer $512$ has $3$ digits, followed by $375$ zeros, so the total number of digits is\n$$3 + 375 = 378.$$',
          rubric: [
            { code: 'M1', text: 'Converts the product to $5^{375} \\times 2^{384} = 512 \\times 10^{375}$.' },
            { code: 'A1', text: 'Counts $3 + 375 = 378$ digits, option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'If the five-digit number $6C9C0$ is divisible by $180$, find the value of the digit $C$.\n\nA. $0$\nB. $2$\nC. $4$\nD. $6$\nE. None of the above',
          answer: 'D. $6$',
          principle: 'Factor $180 = 4 \\times 5 \\times 9$ into pairwise coprime divisors and apply the divisibility rules for $4$, $5$, and $9$.',
          solution:
            'Since $180 = 4 \\times 5 \\times 9$ and these factors are pairwise coprime, $6C9C0$ must be divisible by $5$, $4$, and $9$.\n- Divisible by $5$: ends in $0$ (already satisfied).\n- Divisible by $4$: the last two digits $C0$ must be divisible by $4$, so $C$ must be even: $C \\in \\{0, 2, 4, 6, 8\\}$.\n- Divisible by $9$: the digit sum $6 + C + 9 + C + 0 = 15 + 2C$ must be a multiple of $9$.\n\nTesting the even digits:\n- $C = 0 \\implies 15$ (no)\n- $C = 2 \\implies 19$ (no)\n- $C = 4 \\implies 23$ (no)\n- $C = 6 \\implies 27$ (yes, multiple of $9$)\n- $C = 8 \\implies 31$ (no)\n\nCheck: $66960 = 180 \\times 372$. Hence $C = 6$.',
          rubric: [
            { code: 'M1', text: 'Applies divisibility by $4$ ($C$ even) and by $9$ ($9 \\mid 15 + 2C$).' },
            { code: 'A1', text: 'Determines $C = 6$, option D.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'If $a^2 = 11a + b$, $b^2 = 11b + a$ and $a \\neq b$, what is the value of $a^2 + b^2$?\n\nA. $120$\nB. $115$\nC. $110$\nD. $100$\nE. None of the above',
          answer: 'A. $120$',
          principle: 'Subtract symmetric equations to eliminate the common factor $(a - b)$ and find $a + b$, then add the two equations.',
          solution:
            'Subtract the second equation from the first:\n$$a^2 - b^2 = 11(a - b) + (b - a) = 10(a - b).$$\nFactor the left-hand side as $(a - b)(a + b) = 10(a - b)$. Since $a \\neq b$, we can divide both sides by $a - b \\neq 0$ to obtain\n$$a + b = 10.$$\nNow add the two given equations:\n$$a^2 + b^2 = 11(a + b) + (a + b) = 12(a + b) = 12 \\times 10 = 120.$$',
          rubric: [
            { code: 'M1', text: 'Subtracts the equations and divides by $a - b \\neq 0$ to get $a + b = 10$.' },
            { code: 'A1', text: 'Adds the equations to obtain $a^2 + b^2 = 12(10) = 120$, option A.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'When the figure below is rotated $180^\\circ$ about point $M$, which option will be the resulting figure?\n\nA. Option A\nB. Option B\nC. Option C\nD. Option D\nE. Option E',
          figures: [
            {
              src: '/papers/sasmo-2023-g9/fig-10.svg',
              alt: 'An L-shaped three-square tromino (white top-left, medium-grey bottom-left, dark bottom-right) with pivot point M at the bottom-right corner, and five answer options A through E.',
              caption: 'Original figure with pivot point M and options A–E.'
            }
          ],
          answer: 'E. Option E',
          principle: 'A $180^\\circ$ rotation about point $M$ reverses every displacement vector $(x, y) \\mapsto (-x, -y)$ relative to $M$.',
          solution:
            'In the original figure, point $M$ is at the bottom-right outer corner of the dark square:\n- Immediately above-left of $M$ is the dark square.\n- To the left of the dark square is the medium-grey square.\n- Directly above the medium-grey square is the white square.\n\nRotating $180^\\circ$ about $M$ reverses every direction (left $\\leftrightarrow$ right, up $\\leftrightarrow$ down):\n- The dark square moves to below-right of $M$ (so $M$ is at the top-left corner of the dark square).\n- The medium-grey square moves to the right of the dark square.\n- The white square moves directly below the medium-grey square.\n\nThis matches Option E.',
          rubric: [
            { code: 'M1', text: 'Tracks the $180^\\circ$ rotation about $M$: $M$ becomes the top-left corner of the dark square.' },
            { code: 'A1', text: 'Matches the rotated orientation and shading to Option E.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Let $k$ be an integer. Which of the following is always divisible by $5$?\n\nA. $k^2 - 5$\nB. $k^3 - k$\nC. $k^5 + 5k$\nD. $k^5 - k$\nE. None of the above',
          answer: 'D. $k^5 - k$',
          principle: 'By Fermat\'s Little Theorem (or factoring modulo $5$), $k^5 \\equiv k \\pmod 5$ for every integer $k$.',
          solution:
            'By Fermat\'s Little Theorem for prime $p = 5$, $k^5 - k$ is always divisible by $5$ for every integer $k$. Alternatively, testing remainders $k \\equiv 0, 1, 2, 3, 4 \\pmod 5$:\n- $k^5 - k = k(k^4 - 1) = k(k-1)(k+1)(k^2+1)$.\n  - If $k \\equiv 0, 1, 4 \\pmod 5$, one of $k, k-1, k+1$ is divisible by $5$.\n  - If $k \\equiv 2$ or $3 \\pmod 5$, then $k^2 + 1 \\equiv 5$ or $10 \\equiv 0 \\pmod 5$.\n\nCounterexamples for A–C: for $k = 1$, $1^2 - 5 = -4$; for $k = 2$, $2^3 - 2 = 6$; for $k = 1$, $1^5 + 5(1) = 6$, none divisible by $5$.\nHence D. $k^5 - k$ is always divisible by $5$.',
          rubric: [
            { code: 'M1', text: 'Rules out A–C with counterexamples or factors $k^5 - k = k(k-1)(k+1)(k^2+1)$.' },
            { code: 'A1', text: 'Concludes $k^5 - k$ is always divisible by $5$, option D.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Each quadrant of the large circle below is made up of two identical semicircles of radii $7\\text{ cm}$ and one larger semicircle of radius $14\\text{ cm}$ as shown. What is the area (in $\\text{cm}^2$) of the shaded region? (Use $\\pi = \\frac{22}{7}$)\n\nA. $308\\text{ cm}^2$\nB. $784\\text{ cm}^2$\nC. $1232\\text{ cm}^2$\nD. $2464\\text{ cm}^2$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2023-g9/fig-12.svg',
              alt: 'A large circle divided into four quadrants by horizontal and vertical diameters, each quadrant containing one large semicircle of radius 14 cm and two small semicircles of radius 7 cm forming a symmetric pinwheel pattern.',
              caption: 'Four-quadrant circle composed of semicircles of radii 7 cm and 14 cm.'
            }
          ],
          answer: 'C. $1232\\text{ cm}^2$',
          principle: 'Use cut-and-paste symmetry: the shaded small semicircle and unshaded small semicircle in each quadrant have equal areas and cancel out.',
          solution:
            'Since the larger semicircle in each quadrant has radius $14\\text{ cm}$, its diameter is $28\\text{ cm}$, which is the radius $R$ of the large circle.\nLook at one quadrant (area $\\frac{1}{4}\\pi \\cdot 28^2 = 196\\pi\\text{ cm}^2$):\n- Inside the quadrant, the region outside the large semicircle of radius $14\\text{ cm}$ is shaded, except for one unshaded small semicircle of radius $7\\text{ cm}$ along the adjacent radius.\n- Inside the large semicircle, one shaded small semicircle of radius $7\\text{ cm}$ is added along the other radius.\n\nMoving the shaded small semicircle of radius $7\\text{ cm}$ to fill the unshaded small semicircle of radius $7\\text{ cm}$ shows that the shaded area in one quadrant equals\n$$\\text{Area(quadrant)} - \\text{Area(large semicircle)} = 196\\pi - \\frac{1}{2}\\pi(14)^2 = 196\\pi - 98\\pi = 98\\pi\\text{ cm}^2.$$\nAcross all $4$ quadrants, the total shaded area is\n$$4 \\times 98\\pi = 392 \\times \\frac{22}{7} = 56 \\times 22 = 1232\\text{ cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Finds radius $R = 28\\text{ cm}$ and cancels the equal $7\\text{ cm}$ shaded and unshaded semicircles per quadrant.' },
            { code: 'A1', text: 'Computes $4(196\\pi - 98\\pi) = 392 \\times \\frac{22}{7} = 1232\\text{ cm}^2$, option C.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'What is the largest integer $m$ such that the fraction below is an integer?\n$$\\frac{67! + 68! + 69!}{6^m}$$\n\nA. $29$\nB. $30$\nC. $31$\nD. $32$\nE. None of the above',
          answer: 'E. None of the above',
          principle: 'Factor out $67!$ from the numerator, simplify the remaining sum, and use Legendre\'s formula to find the $p$-adic valuations for $p=2$ and $p=3$.',
          solution:
            'Factor $67!$ out of the numerator:\n$$67! + 68! + 69! = 67!(1 + 68 + 68 \\times 69) = 67!(69 + 68 \\times 69) = 67! \\times 69^2.$$\nNotice that $69^2 = (3 \\times 23)^2 = 3^2 \\times 23^2$.\nSince $6 = 2 \\times 3$, the largest $m$ such that $6^m$ divides the numerator is $\\min(v_2, v_3)$.\nBy Legendre\'s formula, the exponent of $3$ in $67!$ is\n$$\\left\\lfloor\\frac{67}{3}\\right\\rfloor + \\left\\lfloor\\frac{67}{9}\\right\\rfloor + \\left\\lfloor\\frac{67}{27}\\right\\rfloor = 22 + 7 + 2 = 31.$$\nIncluding $3^2$ from $69^2$ gives $v_3 = 31 + 2 = 33$.\nMeanwhile, the exponent of $2$ in $67!$ is $\\lfloor 67/2 \\rfloor + \\dots = 33 + 16 + 8 + 4 + 2 + 1 = 64 > 33$.\nTherefore $m = \\min(64, 33) = 33$, which is not among A–D, so the answer is E. None of the above.',
          rubric: [
            { code: 'M1', text: 'Factors numerator as $67! \\times 69^2$ and finds $v_3(67!) = 22 + 7 + 2 = 31$.' },
            { code: 'A1', text: 'Adds $2$ from $69^2$ to get $m = 33$, option E (None of the above).' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'What is the sum of all of the digits of the integers from $1$ to $2023$?\n\nA. $28155$\nB. $28160$\nC. $28162$\nD. $29162$\nE. None of the above',
          answer: 'C. $28162$',
          principle: 'Count digit occurrences by place value on $0000$–$1999$ by symmetry, then add the remaining numbers $2000$–$2023$.',
          solution:
            'Split the integers into $0000$–$1999$ and $2000$–$2023$ (leading zeros contribute $0$):\n1. **From $0000$ to $1999$ ($2000$ numbers):**\n   - In each of the last three places (hundreds, tens, units), every digit $0, 1, \\ldots, 9$ appears equally often, namely $\\frac{2000}{10} = 200$ times.\n     The sum of digits $0 + 1 + \\cdots + 9 = 45$, so these three places contribute\n     $$3 \\times 200 \\times 45 = 27000.$$\n   - In the thousands place, the digit $1$ appears $1000$ times (for $1000$–$1999$), contributing $1000$.\n   Subtotal for $1$–$1999$: $27000 + 1000 = 28000$.\n\n2. **From $2000$ to $2023$ ($24$ numbers):**\n   - Thousands digit $2$ appears $24$ times: $24 \\times 2 = 48$.\n   - Last two digits:\n     - $00$–$09$: $0 + 1 + \\cdots + 9 = 45$\n     - $10$–$19$: $10(1) + 45 = 55$\n     - $20$–$23$: $(2+0) + (2+1) + (2+2) + (2+3) = 14$\n   Subtotal for $2000$–$2023$: $48 + 45 + 55 + 14 = 162$.\n\nTotal digit sum $= 28000 + 162 = 28162$.',
          rubric: [
            { code: 'M1', text: 'Computes the digit sum for $1$–$1999$ as $3 \\times 200 \\times 45 + 1000 = 28000$.' },
            { code: 'A1', text: 'Adds $162$ for $2000$–$2023$ to get $28162$, option C.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Ariana, Brenda, Caleb and Derrick, whose last names are Lim, Lee, Wong and Goh, are ranked first, second, third and fourth in the Grade 9 division of the SASMO 2023 contest. The following clues are given:\n1. Ariana and Brenda are female and Caleb and Derrick are male.\n2. Lee said she could have ranked higher if she studied more.\n3. Derrick ranked higher than Goh but lower than Brenda.\n4. Wong\'s teacher said he was proud of her results.\n5. Ariana ranked lower than Lim.\n6. Caleb did not rank third.\n\nWhat is the last name of Brenda?\n\nA. Lim\nB. Lee\nC. Wong\nD. Goh\nE. Not enough information',
          answer: 'C. Wong',
          principle: 'Use gender pronouns to pair first names with last names, then pin down the exact ranking order from the inequalities.',
          solution:
            'From Clues 1, 2, and 4:\n- Lee ("she") and Wong ("her") are female, so $\\{\\text{Ariana}, \\text{Brenda}\\} = \\{\\text{Lee}, \\text{Wong}\\}$, and $\\{\\text{Caleb}, \\text{Derrick}\\} = \\{\\text{Lim}, \\text{Goh}\\}$.\n- From Clue 3, Derrick ranked higher than Goh, so Derrick is not Goh; hence **Derrick is Lim** and **Caleb is Goh**.\n- Clue 3 gives $\\text{Brenda} > \\text{Derrick (Lim)} > \\text{Caleb (Goh)}$, and Clue 5 gives $\\text{Lim (Derrick)} > \\text{Ariana}$.\n  Thus Brenda is ranked $1\\text{st}$ (above Derrick), Derrick is $2\\text{nd}$, and Ariana and Caleb are $3\\text{rd}$ and $4\\text{th}$ in some order. Since Caleb did not rank $3\\text{rd}$ (Clue 6), **Ariana is $3\\text{rd}$** and **Caleb is $4\\text{th}$**.\n- By Clue 2, Lee could have ranked higher, so Lee is not $1\\text{st}$. Since Brenda is $1\\text{st}$, **Brenda cannot be Lee**, so **Brenda is Wong** (and Ariana is Lee).\n\nSummary: $1\\text{st}$ Brenda Wong, $2\\text{nd}$ Derrick Lim, $3\\text{rd}$ Ariana Lee, $4\\text{th}$ Caleb Goh.',
          rubric: [
            { code: 'M1', text: 'Uses gender clues to pair $\\{\\text{Ariana}, \\text{Brenda}\\} = \\{\\text{Lee}, \\text{Wong}\\}$ and places Brenda $1\\text{st}$.' },
            { code: 'A1', text: 'Uses Clue 2 (Lee is not $1\\text{st}$) to conclude Brenda\'s last name is Wong, option C.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write the final answer for each question (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'How many different ordered pairs $(a, b)$ can be formed from the list below such that $a + b$ is an odd number?\n$$\\{1, 2, 3, \\ldots, 19, 20\\}$$',
          answer: '$200$',
          principle: 'The sum $a + b$ is odd if and only if $a$ and $b$ have opposite parities (one even and one odd).',
          solution:
            'Among $\\{1, 2, \\ldots, 20\\}$, there are $10$ odd integers and $10$ even integers.\nFor $a + b$ to be odd, $(a, b)$ must be either $(\\text{odd}, \\text{even})$ or $(\\text{even}, \\text{odd})$:\n- Case 1 ($a$ odd, $b$ even): $10 \\times 10 = 100$ ordered pairs.\n- Case 2 ($a$ even, $b$ odd): $10 \\times 10 = 100$ ordered pairs.\n\nTotal number of ordered pairs $= 100 + 100 = 200$.',
          rubric: [
            { code: 'M2', text: 'Splits into opposite-parity cases: (odd, even) and (even, odd), with $10$ choices each.' },
            { code: 'A2', text: 'Computes $10 \\times 10 + 10 \\times 10 = 200$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'The product of $3$ different positive integers is $2023$. What is the greatest possible sum of these three integers?',
          answer: '$297$',
          principle: 'Factor $2023$ into primes and make the factors as unbalanced as possible while keeping all three integers distinct.',
          solution:
            'Prime-factorize $2023$:\n$$2023 = 7 \\times 289 = 7 \\times 17^2.$$\nTo maximize the sum $a + b + c$ for distinct positive integers with $abc = 2023$, we make the largest factor as large as possible and the smaller two factors as small as possible ($1$ and the smallest prime factor $7$):\n$$1 \\times 7 \\times 289 = 2023.$$\nChecking the other distinct triples: $(1, 17, 119)$ gives $1 + 17 + 119 = 137$.\nThus the greatest possible sum is\n$$1 + 7 + 289 = 297.$$',
          rubric: [
            { code: 'M2', text: 'Prime-factorizes $2023 = 7 \\times 17^2$ and identifies the valid distinct triples $(1, 7, 289)$ and $(1, 17, 119)$.' },
            { code: 'A2', text: 'Finds the maximum sum $1 + 7 + 289 = 297$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'What is the greatest $4$-digit multiple of $180$ that has no odd digits?',
          answer: '$8820$',
          principle: 'Combine the divisibility conditions of $180 = 4 \\times 5 \\times 9$ with the constraint that every digit belongs to $\\{0, 2, 4, 6, 8\\}$.',
          solution:
            'Let the $4$-digit number be $\\overline{abcd}$ with $a \\in \\{2, 4, 6, 8\\}$ and $b, c, d \\in \\{0, 2, 4, 6, 8\\}$.\nSince $180 = 4 \\times 5 \\times 9$:\n- Divisible by $5$ and even $\\implies d = 0$.\n- Divisible by $4$ $\\implies \\overline{c0}$ is divisible by $4$, which holds for every even digit $c \\in \\{0, 2, 4, 6, 8\\}$.\n- Divisible by $9$ $\\implies a + b + c + 0$ is a multiple of $9$.\n\nTo maximize $\\overline{abc0}$, try $a = 8$ and $b = 8$:\n$$8 + 8 + c = 16 + c.$$\nThe only digit $c \\in \\{0, 2, 4, 6, 8\\}$ making $16 + c$ a multiple of $9$ is $c = 2$ (giving $18$).\nCheck: $8820 = 180 \\times 49$, and all digits $8, 8, 2, 0$ are even.\nHence the greatest such number is $8820$.',
          rubric: [
            { code: 'M2', text: 'Determines units digit $0$ and digit-sum divisibility by $9$ with all digits even.' },
            { code: 'A2', text: 'Maximizes leading digits $8, 8$ to find $8820$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'What is the next term in the sequence below?\n$$2, 3, 5, 11, 26, 57, 113, 205, \\ldots$$',
          answer: '$346$',
          principle: 'Compute successive differences until a clear closed-form pattern (here, consecutive perfect squares) appears.',
          solution:
            'Compute the first differences between consecutive terms:\n$$3-2=1,\\quad 5-3=2,\\quad 11-5=6,\\quad 26-11=15,\\quad 57-26=31,\\quad 113-57=56,\\quad 205-113=92.$$\nNow compute the second differences:\n$$2-1=1=1^2,\\quad 6-2=4=2^2,\\quad 15-6=9=3^2,\\quad 31-15=16=4^2,\\quad 56-31=25=5^2,\\quad 92-56=36=6^2.$$\nThe second differences are consecutive squares $1^2, 2^2, 3^2, 4^2, 5^2, 6^2$, so the next second difference is $7^2 = 49$.\nTherefore, the next first difference is $92 + 49 = 141$, and the next term in the sequence is\n$$205 + 141 = 346.$$',
          rubric: [
            { code: 'M2', text: 'Computes first differences $1, 2, 6, 15, 31, 56, 92$ and second differences $1^2, 2^2, \\ldots, 6^2$.' },
            { code: 'A2', text: 'Adds $7^2 = 49$ to $92$ to get $141$, then $205 + 141 = 346$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'How many factors of $7056$ are not perfect squares?',
          answer: '$33$',
          principle: 'Use the prime factorization of $7056$ to count all positive divisors and subtract the divisors whose prime exponents are all even.',
          solution:
            'Prime-factorize $7056$:\n$$7056 = 84^2 = (2^2 \\times 3 \\times 7)^2 = 2^4 \\times 3^2 \\times 7^2.$$\nTotal number of positive factors of $7056$:\n$$(4 + 1)(2 + 1)(2 + 1) = 5 \\times 3 \\times 3 = 45.$$\nA factor $2^a \\times 3^b \\times 7^c$ is a perfect square if and only if $a, b, c$ are all even:\n- $a \\in \\{0, 2, 4\\}$ ($3$ choices)\n- $b \\in \\{0, 2\\}$ ($2$ choices)\n- $c \\in \\{0, 2\\}$ ($2$ choices)\n\nSo there are $3 \\times 2 \\times 2 = 12$ perfect-square factors.\nTherefore, the number of factors that are not perfect squares is\n$$45 - 12 = 33.$$',
          rubric: [
            { code: 'M2', text: 'Factorizes $7056 = 2^4 \\times 3^2 \\times 7^2$ and counts $45$ total factors and $12$ square factors.' },
            { code: 'A2', text: 'Subtracts $45 - 12 = 33$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'How many integer pairs $(m, n)$ satisfy the equation below?\n$$mn = 5m + 4n - 12$$',
          answer: '$8$',
          principle: 'Apply Simon\'s Favorite Factoring Trick to rewrite the Diophantine equation as a product equal to a constant.',
          solution:
            'Rearrange the equation and factor:\n$$mn - 5m - 4n = -12$$\n$$(m - 4)(n - 5) = 20 - 12 = 8.$$\nSince $m$ and $n$ are integers, $m - 4$ and $n - 5$ must be integer factor pairs of $8$.\nThe integer divisors of $8$ are $\\pm 1, \\pm 2, \\pm 4, \\pm 8$, which gives $8$ distinct choices for $m - 4$ (each uniquely determining $n - 5 = \\frac{8}{m-4}$, and hence $(m, n)$):\n$(12, 6), (8, 7), (6, 9), (5, 13), (3, -3), (2, 1), (0, 3), (-4, 4)$.\nThus there are $8$ integer pairs.',
          rubric: [
            { code: 'M2', text: 'Rewrites the equation as $(m - 4)(n - 5) = 8$.' },
            { code: 'A2', text: 'Counts all $8$ positive and negative integer divisors of $8$ to get $8$ pairs.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'How many four-digit numbers have the digit $0$ but not digit $3$ among its digits?',
          answer: '$1736$',
          principle: 'Use complementary counting: subtract the count of valid numbers with no $0$ and no $3$ from the count of all four-digit numbers with no $3$.',
          solution:
            'Consider $4$-digit numbers (from $1000$ to $9999$) that contain no digit $3$:\n- **Total $4$-digit numbers without digit $3$:**\n  - Thousands digit can be any of $\\{1, 2, 4, 5, 6, 7, 8, 9\\}$ ($8$ choices).\n  - Each of the remaining $3$ digits can be any of $\\{0, 1, 2, 4, 5, 6, 7, 8, 9\\}$ ($9$ choices each).\n  - Total $= 8 \\times 9^3 = 8 \\times 729 = 5832$.\n\n- **$4$-digit numbers with neither digit $0$ nor digit $3$:**\n  - Each of the $4$ digits can be chosen from $\\{1, 2, 4, 5, 6, 7, 8, 9\\}$ ($8$ choices each).\n  - Total $= 8^4 = 4096$.\n\nSubtracting gives the number of $4$-digit numbers containing $0$ but not $3$:\n$$5832 - 4096 = 1736.$$',
          rubric: [
            { code: 'M2', text: 'Counts $8 \\times 9^3 = 5832$ four-digit numbers without $3$, and $8^4 = 4096$ without $0$ or $3$.' },
            { code: 'A2', text: 'Subtracts $5832 - 4096 = 1736$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In the diagram below, quadrilaterals $ABCD$ and $CEFG$ are a rectangle and a square, respectively. It is given that $AB = 21\\text{ cm}$, $BC = 35\\text{ cm}$ and the area of triangle $CED$ is $12\\text{ cm}^2$. What is the area (in $\\text{cm}^2$) of triangle $BCG$?',
          figures: [
            {
              src: '/papers/sasmo-2023-g9/fig-23.svg',
              alt: 'Rectangle ABCD with square CEFG sharing vertex C, and segments DE and BG forming triangles CED and BCG.',
              caption: 'Rectangle ABCD and square CEFG sharing vertex C.'
            }
          ],
          answer: '$20\\text{ cm}^2$',
          principle: 'Compare two triangles sharing equal sides from the square ($CE = CG$) and supplementary angles around vertex $C$ using $[\\triangle] = \\frac{1}{2}ab\\sin\\theta$.',
          solution:
            'Since $ABCD$ is a rectangle, $CD = AB = 21\\text{ cm}$ and $\\angle BCD = 90^\\circ$.\nSince $CEFG$ is a square, $CG = CE$ and $\\angle ECG = 90^\\circ$.\nAround point $C$, the four angles sum to $360^\\circ$, so\n$$\\angle BCG + \\angle DCE = 360^\\circ - 90^\\circ - 90^\\circ = 180^\\circ.$$\nBecause supplementary angles have equal sines ($\\sin \\angle BCG = \\sin \\angle DCE$), the ratio of the areas of $\\triangle BCG$ and $\\triangle CED$ is\n$$\\frac{\\text{Area}(\\triangle BCG)}{\\text{Area}(\\triangle CED)} = \\frac{\\frac{1}{2} \\cdot BC \\cdot CG \\sin \\angle BCG}{\\frac{1}{2} \\cdot CD \\cdot CE \\sin \\angle DCE} = \\frac{BC}{CD} = \\frac{35}{21} = \\frac{5}{3}.$$\nTherefore,\n$$\\text{Area}(\\triangle BCG) = \\frac{5}{3} \\times 12 = 20\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Establishes $\\angle BCG + \\angle DCE = 180^\\circ$ and $CG = CE$, so $\\frac{[\\triangle BCG]}{[\\triangle CED]} = \\frac{BC}{CD}$.' },
            { code: 'A2', text: 'Computes $\\frac{35}{21} \\times 12 = 20\\text{ cm}^2$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'What is the smallest positive integer $k$ that satisfies the inequality below?\n$$\\frac{1}{1^3 + 3 \\times 1^2 + 2} + \\frac{1}{2^3 + 3 \\times 2^2 + 4} + \\frac{1}{3^3 + 3 \\times 3^2 + 6} + \\cdots + \\frac{1}{k^3 + 3k^2 + 2k} > \\frac{249}{1000}$$',
          answer: '$21$',
          principle: 'Factor the cubic denominator into three consecutive integers and telescope the sum using partial fractions.',
          solution:
            'Notice that the $j$-th denominator is $j^3 + 3j^2 + 2j = j(j + 1)(j + 2)$.\nDecompose the general term into a telescoping difference:\n$$\\frac{1}{j(j + 1)(j + 2)} = \\frac{1}{2}\\left(\\frac{1}{j(j + 1)} - \\frac{1}{(j + 1)(j + 2)}\\right).$$\nSumming from $j = 1$ to $k$, all intermediate terms cancel:\n$$\\sum_{j=1}^k \\frac{1}{j(j+1)(j+2)} = \\frac{1}{2}\\left(\\frac{1}{1 \\times 2} - \\frac{1}{(k + 1)(k + 2)}\\right) = \\frac{1}{4} - \\frac{1}{2(k + 1)(k + 2)}.$$\nWe need this sum to exceed $\\frac{249}{1000}$:\n$$\\frac{1}{4} - \\frac{1}{2(k + 1)(k + 2)} > \\frac{249}{1000} \\iff \\frac{1}{2(k + 1)(k + 2)} < \\frac{1}{1000} \\iff (k + 1)(k + 2) > 500.$$\nTesting consecutive products: $21 \\times 22 = 462 \\le 500$, while $22 \\times 23 = 506 > 500$.\nHence $k + 1 = 22$, so the smallest positive integer is $k = 21$.',
          rubric: [
            { code: 'M2', text: 'Factors $j^3+3j^2+2j = j(j+1)(j+2)$ and telescopes the sum to $\\frac{1}{4} - \\frac{1}{2(k+1)(k+2)}$.' },
            { code: 'A2', text: 'Solves $(k+1)(k+2) > 500$ to obtain $k = 21$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. If $A = 9$, what is the value of the sum $S + I + M + C + C$?\n\n$$\\begin{array}{cccccc}\n & S & I & M & C & C \\\\\n+ & S & A & S & M & O \\\\\n\\hline\n & M & A & T & H & S\n\\end{array}$$',
          answer: '$13$',
          principle: 'Analyze column-by-column carries starting from the thousands column ($I + A = A$), then deduce remaining digits by parity and uniqueness.',
          solution:
            'In the thousands column, $I + A + c_3 = A + 10c_4$ where $c_3, c_4 \\in \\{0, 1\\}$ are carries and $A = 9$.\n- If $c_4 = 1$, then $I + 9 + c_3 = 19 \\implies I + c_3 = 10$, impossible since $I \\le 8$ (as $I \\neq A = 9$) and $c_3 \\le 1$.\n- Thus $c_4 = 0$, giving $I + c_3 = 0 \\implies I = 0$ and $c_3 = 0$.\n\nSince $c_4 = 0$, the ten-thousands column gives $S + S = M$, so $M = 2S$.\nIn the hundreds column ($c_3 = 0$), $M + S + c_2 = 3S + c_2 = T \\le 8$ (since $T \\neq 9$), so $S \\in \\{1, 2\\}$.\n- **Test $S = 2$:** $M = 4$, $T = 6 + c_2 \\in \\{6, 7\\}$. Ones column: $C + O = 10 + 2 = 12$ (since $C, O \\notin \\{0, 2, 4, 9\\}$, the only distinct pairs summing to $12$ are $(5, 7)$, so $c_1 = 1$). Then tens column: $C + 4 + 1 = H$ or $10 + H$. Checking $C = 5$ gives $O = 7, H = 0 = I$ (invalid); checking $C = 7$ gives $O = 5, T = 7 = C$ (invalid, and $H = 2 = S$).\n- **Test $S = 1$:** $M = 2$, and $T = 3 + c_2 \\in \\{3, 4\\}$.\n  Checking ones and tens columns with remaining digits $\\{3, 4, 5, 6, 7, 8\\}$:\n  If $c_2 = 0$, then $T = 3$, and tens column has $C + 2 + c_1 = H \\le 8$. If $C = 5$ and $O = 6$, then $5 + 6 = 11$ ($c_1 = 1$, $S = 1$), and $5 + 2 + 1 = 8 = H$.\n  Verify: $10255 + 19126 = 29381$, using distinct digits $I=0, S=1, M=2, T=3, C=5, O=6, H=8, A=9$.\n\nTherefore,\n$$S + I + M + C + C = 1 + 0 + 2 + 5 + 5 = 13.$$',
          rubric: [
            { code: 'M2', text: 'Deduces $I = 0$, $c_3 = c_4 = 0$, $M = 2S$, and narrows to $S = 1, M = 2$.' },
            { code: 'A2', text: 'Finds $10255 + 19126 = 29381$ and computes $S + I + M + C + C = 13$.' }
          ]
        }
      ]
    }
  ]
};
