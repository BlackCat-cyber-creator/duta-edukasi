/**
 * Paket Soal Terstruktur: HKIMO 2022 Heat Round — Primary 6
 * Sumber: Hong Kong International Mathematical Olympiad Semi-Final / Heat Round 2022, Primary 6 (hkimo-2022-heat-round-p6.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Seluruh 25 soal dimuat dalam 5 bidang (masing-masing 5 soal, 4 poin per soal, total 100 poin).
 * Soal 16 dan 20 dilengkapi gambar kisi 4x4 (.webp) yang dipotong bersih ke public/papers/hkimo-2022-heat-p6/.
 */
export default {
  id: 'hkimo-2022-heat-p6',
  slug: 'hkimo-2022-heat-primary-6',
  subject: 'olimpiade-mat',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'HKIMO 2022 Heat Round Primary 6: Logical Thinking, Arithmetic, Number Theory, Geometry, Combinatorics',
  relatedChapterIds: [
    'sd5-bab2-kpk-fpb',
    'sd6-bab1-pecahan-desimal',
    'sd5-bab5-luas-daerah-bangun-datar',
    'sd6-bab3-kubus-balok'
  ],
  competition: 'HKIMO',
  lang: 'en',
  langDisplay: 'EN',
  title: 'HKIMO 2022 Heat Round \u2014 Primary 6',
  totalMarks: 100,
  instructions:
    'Attempt all 25 open-ended questions across five sections (Logical Thinking, Arithmetic, Number Theory, Geometry, and Combinatorics) in 90 minutes without a calculator. Each question carries 4 marks (100 marks total; no deduction for wrong answers). Write answers in simplest form (proper or mixed fraction, or decimal where applicable).',
  source: {
    org: 'HKIMO',
    file: 'hkimo-2022-heat-round-p6.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section 1: Logical Thinking',
      marks: 20,
      stem: 'Open-ended questions 1 to 5. Each correct answer carries 4 marks.',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt:
            'Find the average of the following sequence.\n$$2000, 2002, 2004, \\ldots, 2994, 2996, 2998$$',
          answer: '$2499$',
          principle:
            'In any arithmetic sequence (evenly spaced numbers), the average equals the mean of the first and last terms.',
          solution:
            'The sequence $2000, 2002, 2004, \\ldots, 2998$ is an arithmetic progression with constant difference $2$. Pairing terms symmetrically from the ends gives the same sum $2000 + 2998 = 4998$, so the average is:\n$$\\frac{2000 + 2998}{2} = \\frac{4998}{2} = 2499.$$',
          rubric: [
            { code: 'M2', text: 'Applies the midpoint property of an arithmetic sequence: $\\frac{\\text{first} + \\text{last}}{2}$.' },
            { code: 'A2', text: 'Correct average $2499$.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'How many time(s) will a straight line be made by hour hand and minute hand between 5am and 6am?',
          answer: '$1$',
          principle:
            'The hour and minute hands form a straight line when they coincide ($0^\\circ$ apart) or point in opposite directions ($180^\\circ$ apart). Check which of those events occur strictly between 5:00 am and 6:00 am.',
          solution:
            'At 5:00 am, the hour hand is at $5 \\times 30^\\circ = 150^\\circ$ and the minute hand is at $0^\\circ$. The minute hand moves at $6^\\circ/\\text{min}$ and the hour hand at $0.5^\\circ/\\text{min}$, giving a relative speed of $5.5^\\circ/\\text{min} = \\frac{11}{2}^\\circ/\\text{min}$.\n- **Coinciding ($0^\\circ$ apart):** The minute hand catches up after $\\frac{150}{5.5} = \\frac{300}{11} = 27\\frac{3}{11}$ minutes (at $5\\!:\\!27\\frac{3}{11}$ am), which is strictly between 5:00 am and 6:00 am.\n- **Opposite directions ($180^\\circ$ apart):** The minute hand must gain $150^\\circ + 180^\\circ = 330^\\circ$, taking $\\frac{330}{5.5} = 60$ minutes, which occurs exactly at $6\\!:\\!00$ am (not strictly between 5am and 6am).\n\nTherefore, the hands form a straight line $1$ time strictly between 5am and 6am.',
          rubric: [
            { code: 'M2', text: 'Computes the overlapping time $27\\frac{3}{11}$ minutes past 5 and notes that the $180^\\circ$ alignment falls at 6:00 am.' },
            { code: 'A2', text: 'Correct count $1$.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'There are $4$ pairs of white chopsticks, $5$ pairs of yellow chopsticks and $6$ pairs of brown chopsticks mixed together. Close your eyes. If you want to get $2$ pairs of chopsticks with different colour, at least how many piece(s) of chopstick(s) is / are needed to be taken?',
          answer: '$15$',
          principle:
            'Apply the Pigeonhole Principle by constructing the worst-case selection that avoids obtaining two matching pairs of different colours.',
          solution:
            'In total there are $4 \\times 2 = 8$ white, $5 \\times 2 = 10$ yellow, and $6 \\times 2 = 12$ brown chopsticks.\nTo avoid getting $2$ pairs of different colours for as long as possible, pick all pieces of the largest colour group first ($12$ brown chopsticks), and at most $1$ single chopstick from each of the remaining two colours ($1$ white and $1$ yellow):\n$$12 + 1 + 1 = 14\\text{ pieces}.$$\nWith these $14$ pieces, only brown has any pair. Taking $1$ more piece guarantees either a second white or a second yellow chopstick, completing a second pair of a different colour.\nThus, at least $14 + 1 = 15$ chopsticks are needed.',
          rubric: [
            { code: 'M2', text: 'Identifies the worst case: all $12$ brown chopsticks plus $1$ white and $1$ yellow ($14$ total).' },
            { code: 'A2', text: 'Correct minimum $15$.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'It requires $4$ people to take $45$ days to complete a task. How many day(s) is / are needed for $6$ people to finish the same task?',
          answer: '$30$',
          principle:
            'For a fixed amount of work at equal individual rates, total person-days remain constant (inverse proportion).',
          solution:
            'The total workload is:\n$$4 \\times 45 = 180\\text{ person-days}.$$\nDividing this workload equally among $6$ people gives:\n$$\\frac{180}{6} = 30\\text{ days}.$$',
          rubric: [
            { code: 'M2', text: 'Computes total work $4 \\times 45 = 180$ person-days and divides by $6$.' },
            { code: 'A2', text: 'Correct answer $30$.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt:
            "There are some chickens and rabbits in a cage. The number of chickens is $3$ times as the number of rabbits. The total number of legs of chicken's is $120$ fewer than that of rabbit's. How many chicken(s) is / are there?",
          answer: '$180$',
          principle:
            'Express both counts and leg totals in terms of the number of rabbits $r$, then equate the leg difference to $120$.',
          solution:
            'Let $r$ be the number of rabbits, so the number of chickens is $3r$.\n- Total chicken legs $= 2 \\times 3r = 6r$.\n- Total rabbit legs $= 4 \\times r = 4r$.\n\nNote on the printed wording: since $6r > 4r$ for all $r > 0$, chicken legs always exceed rabbit legs by $6r - 4r = 2r$ (the literal equation $4r - 6r = 120$ gives $r = -60$, reflecting a "fewer/more" reversal in the source paper). Under the intended leg difference of $120$:\n$$6r - 4r = 120 \\implies 2r = 120 \\implies r = 60.$$\nHence the number of chickens is $3 \\times 60 = 180$.\nCheck: $180$ chickens have $360$ legs and $60$ rabbits have $240$ legs, differing by $360 - 240 = 120$ legs.',
          rubric: [
            { code: 'M2', text: 'Sets up chicken legs $6r$ and rabbit legs $4r$ and solves the leg-difference equation $2r = 120$ (noting the source sign reversal).' },
            { code: 'A2', text: 'Correct intended count $180$.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section 2: Arithmetic',
      marks: 20,
      stem: 'Open-ended questions 6 to 10. Each correct answer carries 4 marks.',
      parts: [
        {
          label: '6',
          marks: 4,
          prompt:
            'Find the value of\n$$3^2 + 6^2 + 9^2 + \\ldots + 24^2 + 27^2 + 30^2.$$',
          answer: '$3465$',
          principle:
            'Factor out $3^2$ from every term and apply the sum-of-squares formula $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$.',
          solution:
            'Factor $3^2 = 9$ from each term:\n$$3^2 + 6^2 + 9^2 + \\cdots + 30^2 = 3^2(1^2 + 2^2 + 3^2 + \\cdots + 10^2).$$\nUsing $\\sum_{k=1}^{10} k^2 = \\frac{10 \\times 11 \\times 21}{6} = 385$, we obtain:\n$$9 \\times 385 = 3465.$$',
          rubric: [
            { code: 'M2', text: 'Factors out $3^2 = 9$ and computes $\\sum_{k=1}^{10} k^2 = 385$.' },
            { code: 'A2', text: 'Correct value $3465$.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt: 'Find the value of\n$$1020201 \\times 10101.$$',
          answer: '$10305050301$',
          principle:
            'Decompose $10101 = 10000 + 100 + 1$ (or $1020201 = 10101 \\times 101$) to multiply cleanly without carrying errors.',
          solution:
            'Split $10101 = 10^4 + 10^2 + 1$ and distribute:\n$$\\begin{aligned}1020201 \\times (10000 + 100 + 1) &= 10202010000 + 102020100 + 1020201 \\\\ &= 10305050301.\\end{aligned}$$',
          rubric: [
            { code: 'M2', text: 'Expands the product via place-value decomposition ($10000 + 100 + 1$).' },
            { code: 'A2', text: 'Correct product $10305050301$.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Find the value of\n$$\\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30} + \\ldots + \\frac{1}{306} + \\frac{1}{342} + \\frac{1}{380}.$$',
          answer: '$\\frac{17}{60}$',
          principle:
            'Rewrite each denominator as $n(n+1)$ and split $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ so intermediate terms telescope.',
          solution:
            'Notice that $12 = 3 \\times 4$, $20 = 4 \\times 5$, $\\ldots$, $380 = 19 \\times 20$. Using $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$:\n$$\\begin{aligned}\\frac{1}{3 \\times 4} + \\frac{1}{4 \\times 5} + \\cdots + \\frac{1}{19 \\times 20} &= \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\cdots + \\left(\\frac{1}{19} - \\frac{1}{20}\\right) \\\\ &= \\frac{1}{3} - \\frac{1}{20} = \\frac{20 - 3}{60} = \\frac{17}{60}.\\end{aligned}$$',
          rubric: [
            { code: 'M2', text: 'Expresses each fraction as $\\frac{1}{n} - \\frac{1}{n+1}$ from $n = 3$ to $n = 19$ and telescopes.' },
            { code: 'A2', text: 'Correct simplified fraction $\\frac{17}{60}$.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Find the value of\n$$\\frac{1}{243} + \\frac{1}{81} + \\frac{1}{27} + \\frac{1}{9} + \\frac{1}{3} + 1 + 4 + 7 + \\ldots + 61 + 64 + 67.$$',
          answer: '$782\\frac{121}{243}$',
          principle:
            'Separate the expression into a finite geometric sum of powers of $\\frac{1}{3}$ and a finite arithmetic series with common difference $3$.',
          solution:
            'Sum the fractional geometric part first over the common denominator $243$:\n$$\\frac{1}{243} + \\frac{1}{81} + \\frac{1}{27} + \\frac{1}{9} + \\frac{1}{3} = \\frac{1 + 3 + 9 + 27 + 81}{243} = \\frac{121}{243}.$$\nNext, sum the arithmetic progression $1 + 4 + 7 + \\cdots + 67$, which has common difference $3$ and number of terms:\n$$n = \\frac{67 - 1}{3} + 1 = 23.$$\nIts sum is:\n$$\\frac{23 \\times (1 + 67)}{2} = 23 \\times 34 = 782.$$\nCombining both parts gives $782\\frac{121}{243}$ (or $\\frac{190147}{243}$).',
          rubric: [
            { code: 'M2', text: 'Evaluates the geometric sum $\\frac{121}{243}$ and arithmetic sum $782$ separately.' },
            { code: 'A2', text: 'Correct value $782\\frac{121}{243}$ (accept $\\frac{190147}{243}$).' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'Find the value of\n$$\\frac{5}{5 + \\dfrac{4}{3 - \\dfrac{3}{1 + \\dfrac{2}{5}}}}.$$',
          answer: '$\\frac{15}{29}$',
          principle:
            'Evaluate a continued fraction step by step from the innermost denominator outward.',
          solution:
            'Compute from bottom to top:\n1. $1 + \\frac{2}{5} = \\frac{7}{5}$.\n2. $\\frac{3}{7/5} = \\frac{15}{7}$.\n3. $3 - \\frac{15}{7} = \\frac{21 - 15}{7} = \\frac{6}{7}$.\n4. $\\frac{4}{6/7} = \\frac{28}{6} = \\frac{14}{3}$.\n5. $5 + \\frac{14}{3} = \\frac{29}{3}$.\n6. $\\frac{5}{29/3} = \\frac{15}{29}$.',
          rubric: [
            { code: 'M2', text: 'Reduces each nested level accurately from bottom to top ($\\frac{7}{5} \\to \\frac{6}{7} \\to \\frac{29}{3}$).' },
            { code: 'A2', text: 'Correct fraction $\\frac{15}{29}$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Section 3: Number Theory',
      marks: 20,
      stem: 'Open-ended questions 11 to 15. Each correct answer carries 4 marks.',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt:
            'From $1$ to $306$, how many integer(s) is / are divisible by $4$ and $6$, but not divisible by $8$?',
          answer: '$13$',
          principle:
            'Divisibility by both $4$ and $6$ is equivalent to divisibility by $\\text{lcm}(4, 6) = 12$; subtract multiples of $\\text{lcm}(12, 8) = 24$.',
          solution:
            'An integer divisible by both $4$ and $6$ must be a multiple of $\\text{lcm}(4, 6) = 12$.\nAn integer divisible by $12$ and also by $8$ must be a multiple of $\\text{lcm}(12, 8) = 24$.\nIn $1, 2, \\ldots, 306$:\n- Multiples of $12$: $\\left\\lfloor \\frac{306}{12} \\right\\rfloor = 25$.\n- Multiples of $24$: $\\left\\lfloor \\frac{306}{24} \\right\\rfloor = 12$.\n\nTherefore, the count of integers divisible by $4$ and $6$ but not $8$ is $25 - 12 = 13$.',
          rubric: [
            { code: 'M2', text: 'Uses $\\text{lcm}(4,6)=12$ and $\\text{lcm}(12,8)=24$ to count $25 - 12$.' },
            { code: 'A2', text: 'Correct count $13$.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'A $3$-digit number has a remainder $7$ when divided by $9$, has a remainder $6$ when divided by $8$ and has a remainder $5$ when divided by $7$. What is such smallest $3$-digit number?',
          answer: '$502$',
          principle:
            'Observe that each remainder is $2$ less than its divisor, so adding $2$ to the number yields a common multiple of $9$, $8$, and $7$.',
          solution:
            'Let the number be $N$. The remainder conditions mean:\n$$N \\equiv 7 \\equiv -2 \\pmod 9, \\quad N \\equiv 6 \\equiv -2 \\pmod 8, \\quad N \\equiv 5 \\equiv -2 \\pmod 7.$$\nThus $N + 2$ is divisible by $9$, $8$, and $7$. Since $\\gcd(9, 8, 7) = 1$ pairwise, $\\text{lcm}(9, 8, 7) = 9 \\times 8 \\times 7 = 504$.\nHence $N = 504k - 2$ for a positive integer $k$. The smallest $3$-digit value occurs at $k = 1$:\n$$N = 504 - 2 = 502.$$',
          rubric: [
            { code: 'M2', text: 'Recognizes that $N + 2$ is a multiple of $\\text{lcm}(9, 8, 7) = 504$.' },
            { code: 'A2', text: 'Correct $3$-digit number $502$.' }
          ]
        },
        {
          label: '13',
          marks: 4,
          prompt: 'Find the sum of all positive factor(s) of $306$.',
          answer: '$702$',
          principle:
            'Prime-factorize $n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$ and use the divisor-sum formula $\\sigma(n) = \\prod (1 + p_i + \\cdots + p_i^{a_i})$.',
          solution:
            'Factorize $306$ into primes:\n$$306 = 2 \\times 153 = 2 \\times 9 \\times 17 = 2^1 \\times 3^2 \\times 17^1.$$\nThe sum of all positive factors is:\n$$\\sigma(306) = (1 + 2)(1 + 3 + 3^2)(1 + 17) = 3 \\times 13 \\times 18 = 702.$$',
          rubric: [
            { code: 'M2', text: 'Prime-factorizes $306 = 2 \\times 3^2 \\times 17$ and sets up $(1+2)(1+3+9)(1+17)$.' },
            { code: 'A2', text: 'Correct sum $702$.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt: 'Find the unit value of\n$$2^{306} + 4^{306} + 6^{306} + 8^{306}.$$',
          answer: '$0$',
          principle:
            'Determine the units digit of each power using the repeating cycle of last digits modulo $10$.',
          solution:
            'Since $306 = 4 \\times 76 + 2$, we have $306 \\equiv 2 \\pmod 4$:\n- $2^n$ ends in $2, 4, 8, 6$ cyclically $\\implies 2^{306}$ ends in $4$.\n- $4^n$ ends in $4$ (odd $n$) or $6$ (even $n$) $\\implies 4^{306}$ ends in $6$.\n- $6^n$ always ends in $6$ $\\implies 6^{306}$ ends in $6$.\n- $8^n$ ends in $8, 4, 2, 6$ cyclically $\\implies 8^{306}$ ends in $4$.\n\nAdding the units digits gives $4 + 6 + 6 + 4 = 20$, so the unit digit is $0$.',
          rubric: [
            { code: 'M2', text: 'Finds the individual units digits $4, 6, 6, 4$ using exponent cycles.' },
            { code: 'A2', text: 'Correct units digit $0$.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'How many simplified fraction(s) with denominator $306$ is / are there?',
          answer: '$96$',
          principle:
            'Proper simplified fractions with denominator $n$ correspond to integers $1 \\le k < n$ with $\\gcd(k, n) = 1$, counted by Euler\'s totient function $\\varphi(n)$.',
          solution:
            'A proper fraction $\\frac{k}{306}$ ($1 \\le k < 306$) is in simplest form if and only if $\\gcd(k, 306) = 1$. Since $306 = 2 \\times 3^2 \\times 17$, Euler\'s totient formula gives:\n$$\\varphi(306) = 306 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{17}\\right) = 306 \\times \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{16}{17} = 96.$$',
          rubric: [
            { code: 'M2', text: 'Applies $\\varphi(306) = 306 \\times \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{16}{17}$ (or Inclusion–Exclusion on primes $2, 3, 17$).' },
            { code: 'A2', text: 'Correct count $96$.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Section 4: Geometry',
      marks: 20,
      stem: 'Open-ended questions 16 to 20. Each correct answer carries 4 marks.',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'How many rectangle(s) without "$\\ast$" is / are there in the figure below?',
          figures: [
            {
              src: '/papers/hkimo-2022-heat-p6/fig-16.webp',
              alt: 'A 4 by 4 grid of squares with a single asterisk marked in the second row and third column.',
              caption: '4x4 grid figure for Question 16.'
            }
          ],
          answer: '$64$',
          principle:
            'Count all rectangles in the $4 \\times 4$ grid and subtract those that contain the marked square.',
          solution:
            'The $4 \\times 4$ grid has $5$ horizontal grid lines and $5$ vertical grid lines.\n- **Total rectangles:** Choosing $2$ horizontal lines and $2$ vertical lines gives $\\binom{5}{2} \\times \\binom{5}{2} = 10 \\times 10 = 100$.\n- **Rectangles containing "$\\ast$" (at row $2$, column $3$):**\n  - Top edge must be line $1$ or $2$ ($2$ choices); bottom edge must be line $3$, $4$, or $5$ ($3$ choices).\n  - Left edge must be line $1$, $2$, or $3$ ($3$ choices); right edge must be line $4$ or $5$ ($2$ choices).\n  - Thus $(2 \\times 3) \\times (3 \\times 2) = 6 \\times 6 = 36$ rectangles contain "$\\ast$".\n\nRectangles without "$\\ast$" $= 100 - 36 = 64$.',
          rubric: [
            { code: 'M2', text: 'Computes $100$ total rectangles and subtracts the $36$ rectangles containing the asterisk.' },
            { code: 'A2', text: 'Correct count $64$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'How many side(s) does a regular polygon have which has $90$ interior angles?',
          answer: '$90$',
          principle:
            'Every simple polygon has the same number of sides, vertices, and interior angles.',
          solution:
            'In any polygon, each vertex forms exactly one interior angle, and the number of vertices equals the number of sides. Therefore, a regular polygon with $90$ interior angles has $90$ sides.\n(Note: if the phrase were read with an omitted degree symbol as "each interior angle is $90^\\circ$", the polygon would be a square with $\\frac{360^\\circ}{180^\\circ - 90^\\circ} = 4$ sides.)',
          rubric: [
            { code: 'M2', text: 'Relates the number of interior angles directly to the number of sides ($n$ angles $\\implies n$ sides).' },
            { code: 'A2', text: 'Correct number of sides $90$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'The area of a rectangle is $306$. If sides of the rectangle are integers, find the minimum value of the perimeter of the rectangle.',
          answer: '$70$',
          principle:
            'For a fixed area $a \\times b = 306$, the perimeter $2(a + b)$ is minimized when the positive integer factors $a$ and $b$ are as close as possible.',
          solution:
            'Checking factor pairs $(a, b)$ of $306 = 2 \\times 3^2 \\times 17$ with $a \\le b$:\n- $(1, 306) \\implies 2(1 + 306) = 614$\n- $(2, 153) \\implies 2(2 + 153) = 310$\n- $(3, 102) \\implies 2(3 + 102) = 210$\n- $(6, 51) \\implies 2(6 + 51) = 114$\n- $(9, 34) \\implies 2(9 + 34) = 86$\n- $(17, 18) \\implies 2(17 + 18) = 70$\n\nThe closest factor pair is $(17, 18)$, giving the minimum perimeter $70$.',
          rubric: [
            { code: 'M2', text: 'Identifies the closest integer factor pair $306 = 17 \\times 18$.' },
            { code: 'A2', text: 'Correct minimum perimeter $70$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'A solid cuboid is formed by merging $306$ cubes with side length $1$. Find the minimum value of the total surface area of the cuboid.',
          answer: '$342$',
          principle:
            'For positive integer dimensions $abc = 306$, the total surface area $2(ab + bc + ca)$ is minimized when $a, b, c$ are as close to $\\sqrt[3]{306} \\approx 6.74$ as possible.',
          solution:
            'Factorize $306 = 2 \\times 3^2 \\times 17$. Since $17$ is prime, one dimension must be a multiple of $17$. To keep $a, b, c$ as close as possible, set $c = 17$ and factor the remaining $ab = 18$ as $3 \\times 6$ (closer than $2 \\times 9$ or $1 \\times 18$):\n- Dimensions $3 \\times 6 \\times 17$: surface area $= 2(3 \\times 6 + 6 \\times 17 + 17 \\times 3) = 2(18 + 102 + 51) = 2 \\times 171 = 342$.\n- Compare $2 \\times 9 \\times 17$: $2(18 + 153 + 34) = 410 > 342$.\n- Compare $1 \\times 17 \\times 18$: $2(17 + 306 + 18) = 682 > 342$.\n\nThus, the minimum total surface area is $342$.',
          rubric: [
            { code: 'M2', text: 'Finds the optimal integer dimensions $3 \\times 6 \\times 17$ and applies $2(ab + bc + ca)$.' },
            { code: 'A2', text: 'Correct minimum surface area $342$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'How many rectangle(s) with $2$ "$\\ast$" is / are there in the figure below?',
          figures: [
            {
              src: '/papers/hkimo-2022-heat-p6/fig-20.webp',
              alt: 'A 4 by 4 grid of squares with two asterisks marked in the second row second column and third row third column.',
              caption: '4x4 grid figure for Question 20.'
            }
          ],
          answer: '$16$',
          principle:
            'A grid rectangle contains both marked cells if and only if its horizontal and vertical boundaries enclose the bounding box spanning both cells.',
          solution:
            'In the $4 \\times 4$ grid (with grid lines $1$ to $5$ from top to bottom and left to right), the two "$\\ast$" cells lie at $(\\text{row } 2, \\text{col } 2)$ and $(\\text{row } 3, \\text{col } 3)$.\nFor a rectangle to enclose both cells:\n- Top boundary: line $1$ or $2$ ($2$ choices).\n- Bottom boundary: line $4$ or $5$ ($2$ choices).\n- Left boundary: line $1$ or $2$ ($2$ choices).\n- Right boundary: line $4$ or $5$ ($2$ choices).\n\nMultiplying the independent boundary choices gives:\n$$2 \\times 2 \\times 2 \\times 2 = 16.$$',
          rubric: [
            { code: 'M2', text: 'Determines the $2$ choices for each of the four bounding grid lines enclosing both asterisks.' },
            { code: 'A2', text: 'Correct count $16$.' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Section 5: Combinatorics',
      marks: 20,
      stem: 'Open-ended questions 21 to 25. Each correct answer carries 4 marks.',
      parts: [
        {
          label: '21',
          marks: 4,
          prompt:
            '$15$ students join a competition. Only top $3$ students can be promoted to next round. How many different way(s) of promotion advance is / are there?',
          answer: '$455$',
          principle:
            'Selecting $3$ promoted students out of $15$ without regard to rank order is a combination $\\binom{15}{3}$.',
          solution:
            'The number of ways to choose $3$ students from $15$ to advance to the next round is:\n$$\\binom{15}{3} = \\frac{15 \\times 14 \\times 13}{3 \\times 2 \\times 1} = 5 \\times 7 \\times 13 = 455.$$',
          rubric: [
            { code: 'M2', text: 'Sets up the combination $\\binom{15}{3} = \\frac{15 \\times 14 \\times 13}{3!}$.' },
            { code: 'A2', text: 'Correct count $455$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'A flight of stairs has $10$ steps. Mary can go up for $1$ step, $2$ steps or $3$ steps each time. The $6^{\\text{th}}$ and the $7^{\\text{th}}$ step cannot be stepped on as they are destroyed. How many way(s) is / are there for Mary to go up the stairs?',
          answer: '$26$',
          principle:
            'Use dynamic programming: the number of ways $w(n)$ to reach step $n$ is $w(n-1) + w(n-2) + w(n-3)$, with $w(6) = w(7) = 0$.',
          solution:
            'Let $w(n)$ be the number of ways to reach step $n$, starting from $w(0) = 1$:\n- $w(1) = 1$\n- $w(2) = 1 + 1 = 2$\n- $w(3) = 1 + 1 + 2 = 4$\n- $w(4) = w(1) + w(2) + w(3) = 1 + 2 + 4 = 7$\n- $w(5) = w(2) + w(3) + w(4) = 2 + 4 + 7 = 13$\n- $w(6) = 0$ and $w(7) = 0$ (destroyed steps)\n- $w(8) = w(5) + w(6) + w(7) = 13 + 0 + 0 = 13$\n- $w(9) = w(6) + w(7) + w(8) = 0 + 0 + 13 = 13$\n- $w(10) = w(7) + w(8) + w(9) = 0 + 13 + 13 = 26$.\n\nThus, there are $26$ ways to reach the $10^{\\text{th}}$ step.',
          rubric: [
            { code: 'M2', text: 'Applies the $3$-step recurrence up to step $5$ ($w(5) = 13$) and forces $w(6) = w(7) = 0$.' },
            { code: 'A2', text: 'Correct number of ways $26$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In a primary school, at least how many of $455$ students that are in the same grade?',
          answer: '$76$',
          principle:
            'By the Pigeonhole Principle, distributing $N$ students across $6$ primary grades guarantees at least $\\lceil N / 6 \\rceil$ students in one grade.',
          solution:
            'A standard primary school consists of $6$ grades (Primary $1$ to Primary $6$). Dividing $455$ students as evenly as possible across $6$ grades gives:\n$$455 = 6 \\times 75 + 5.$$\nBecause there are $5$ remaining students after placing $75$ in each grade, at least one grade must have $75 + 1 = 76$ students.',
          rubric: [
            { code: 'M2', text: 'Divides $455$ by $6$ primary grades ($455 = 6 \\times 75 + 5$) using the Pigeonhole Principle.' },
            { code: 'A2', text: 'Correct minimum $76$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Choose $3$ digits from $0$ to $9$ to form $3$-digit numbers. How many odd number(s) smaller than $300$ is / are there? (The repetition of digits is not allowed)',
          answer: '$72$',
          principle:
            'Count by cases on the hundreds digit ($1$ or $2$), choosing the constrained units digit before the tens digit.',
          solution:
            'A $3$-digit number smaller than $300$ must begin with $1$ or $2$, and an odd number must end in $1, 3, 5, 7,$ or $9$:\n- **Case 1 (hundreds digit $= 1$):** The units digit cannot be $1$, leaving $4$ choices ($3, 5, 7, 9$). The tens digit can be any of the remaining $10 - 2 = 8$ digits. Count: $4 \\times 8 = 32$.\n- **Case 2 (hundreds digit $= 2$):** All $5$ odd digits ($1, 3, 5, 7, 9$) are available for the units place, leaving $10 - 2 = 8$ choices for the tens place. Count: $5 \\times 8 = 40$.\n\nTotal odd $3$-digit numbers smaller than $300$ $= 32 + 40 = 72$.',
          rubric: [
            { code: 'M2', text: 'Splits into hundreds digit $1$ ($4 \\times 8 = 32$) and hundreds digit $2$ ($5 \\times 8 = 40$).' },
            { code: 'A2', text: 'Correct total $72$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'Numbers are drawn from $120$ integers $24$ to $143$. At least how many number(s) is / are drawn at random to ensure that there are two numbers whose sum is $156$?',
          answer: '$67$',
          principle:
            'Partition the set into complementary pairs summing to $156$ plus unpaired integers, then take one from each pair and all unpaired integers for the worst case.',
          solution:
            'Look at pairs $(a, 156 - a)$ within $\\{24, 25, \\ldots, 143\\}$:\n- Numbers from $133$ to $143$ ($143 - 133 + 1 = 11$ integers) require partners from $13$ to $23$, which are not in the set.\n- The number $78$ satisfies $78 + 78 = 156$ and has no distinct partner ($1$ integer).\n- The remaining integers from $24$ to $132$ form $54$ complementary pairs: $(24, 132), (25, 131), \\ldots, (77, 79)$.\n\nTo avoid drawing two numbers summing to $156$, we can draw all $11 + 1 = 12$ unpaired numbers plus $1$ number from each of the $54$ pairs, giving $12 + 54 = 66$ numbers. The next draw ($67^{\\text{th}}$) forces a complete pair summing to $156$.',
          rubric: [
            { code: 'M2', text: 'Identifies $54$ complementary pairs, $11$ numbers ($133$–$143$) without partners, and $78$, giving worst case $66$.' },
            { code: 'A2', text: 'Correct minimum draws $67$.' }
          ]
        }
      ]
    }
  ]
};
