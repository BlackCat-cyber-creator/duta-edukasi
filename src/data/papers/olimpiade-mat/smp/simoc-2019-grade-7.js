/**
 * Paket Soal: SIMOC 2019 Grade 7 (Secondary 1)
 * Sumber: Singapore International Math Olympiad Challenge 2019, Secondary 1 (Grade 7) Contest (Grade-7-SIMOC-2019.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 8 (tercetak "Question 6" pada PDF asli), 13, 16, 21, dan 25 dilengkapi crop ilustrasi .webp.
 */
export default {
  id: 'simoc-2019-g7',
  slug: 'simoc-2019-grade-7',
  subject: 'olimpiade-mat',
  grade: 7,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SIMOC 2019 Grade 7: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SIMOC',
  title: 'SIMOC 2019 Grade 7',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Figures are provided for Questions 8, 13, 16, 21, and 25.',
  source: {
    org: 'SIMOC',
    file: 'Grade-7-SIMOC-2019.pdf',
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
            'Find the value of\n$$\\frac{1}{1} + \\frac{1}{1 + 2} + \\frac{1}{1 + 2 + 3} + \\frac{1}{1 + 2 + 3 + 4} + \\frac{1}{1 + 2 + 3 + 4 + 5}$$\n\nA. $\\frac{1}{15}$\nB. $\\frac{3}{15}$\nC. $\\frac{3}{5}$\nD. $\\frac{5}{3}$\nE. None of the Above',
          answer: 'D. $\\frac{5}{3}$',
          principle:
            'Use the triangular number formula $1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}$ and telescope via $\\frac{2}{k(k+1)} = 2\\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)$, or add directly with a common denominator.',
          solution:
            'Compute each denominator and rewrite the sum:\n$$1 + \\frac{1}{3} + \\frac{1}{6} + \\frac{1}{10} + \\frac{1}{15}$$\nNotice that $\\frac{1}{1+2+\\cdots+k} = \\frac{2}{k(k+1)} = 2\\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)$, so the sum telescopes:\n$$2\\left[\\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{6}\\right)\\right] = 2\\left(1 - \\frac{1}{6}\\right) = \\frac{5}{3}.$$\n(Equivalently, using the common denominator $30$: $\\frac{30 + 10 + 5 + 3 + 2}{30} = \\frac{50}{30} = \\frac{5}{3}$.)',
          rubric: [
            { code: 'M1', text: 'Evaluates the triangular denominators $1, 3, 6, 10, 15$ (or applies telescoping).' },
            { code: 'A1', text: 'Obtains $\\frac{5}{3}$, option D.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'The operator $\\bullet$ acts on two numbers to give the following outcomes:\n$$4 \\bullet 8 = 48$$\n$$8 \\bullet 9 = 172$$\n$$6 \\bullet 9 = 318$$\n$$15 \\bullet 20 = 560$$\nWhat is the value of $19 \\bullet 19$?\n\nA. $190$\nB. $1919$\nC. $2019$\nD. $3600$\nE. None of the Above',
          answer: 'E. None of the Above',
          principle:
            'Split each result into leading digit(s) and trailing digits: compare $|a - b|$ and $\\operatorname{lcm}(a, b)$.',
          solution:
            'Each outcome $a \\bullet b$ is formed by concatenating $|a - b|$ with $\\operatorname{lcm}(a, b)$:\n- $4 \\bullet 8$: $|4 - 8| = 4$ and $\\operatorname{lcm}(4, 8) = 8 \\implies 48$.\n- $8 \\bullet 9$: $|8 - 9| = 1$ and $\\operatorname{lcm}(8, 9) = 72 \\implies 172$.\n- $6 \\bullet 9$: $|6 - 9| = 3$ and $\\operatorname{lcm}(6, 9) = 18 \\implies 318$.\n- $15 \\bullet 20$: $|15 - 20| = 5$ and $\\operatorname{lcm}(15, 20) = 60 \\implies 560$.\n\nApplying the same rule to $19 \\bullet 19$:\n$$|19 - 19| = 0, \\qquad \\operatorname{lcm}(19, 19) = 19,$$\nso concatenating gives $019 = 19$, which is not among options A–D.',
          rubric: [
            { code: 'M1', text: 'Identifies the rule concatenating $|a - b|$ and $\\operatorname{lcm}(a, b)$.' },
            { code: 'A1', text: 'Computes $19 \\bullet 19 = 19$ and selects option E (None of the Above).' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'A circle is drawn on a rectangular (with different dimensions) piece of paper. What is the largest possible number of regions can be formed?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. None of the above',
          answer: 'C. $4$',
          principle:
            'Analyze how many parts a circle can cut off from a rectangular sheet when intersecting its boundary sides.',
          solution:
            'If a circle lies strictly inside the rectangle, it creates $2$ regions (inside and outside). If it intersects two opposite sides, it divides the rectangle into $3$ regions. When a circle intersects three sides of the rectangle (for example, the top, bottom, and left edges), the sheet is split into $4$ regions: the interior of the circle, the top-left corner, the bottom-left corner, and the remaining right portion. Following the official SIMOC 2019 answer key, the maximum is $4$ regions (Option C).\n\n(Geometric note: strictly speaking, for any rectangle of width $w < l$, a circle centered at the rectangle’s center with radius $\\frac{l}{2} < r < \\frac{1}{2}\\sqrt{w^2 + l^2}$ intersects all four edges, creating $4$ corner regions outside plus $1$ interior region, or $5$ regions.)',
          rubric: [
            { code: 'M1', text: 'Considers boundary intersections between the circle and the rectangle edges to count regions.' },
            { code: 'A1', text: 'Selects $4$, option C (per the official SIMOC answer key).' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'A number is written on the board. It starts with one digit "$1$", two digits "$2$", three digits "$3$", $\\ldots$, nine digits "$9$", ten digits "$0$", eleven digits "$1$", twelve digits "$2$", etc. In other words, the number is as follow:\n$$122333444455555\\ldots\\underbrace{999999999}_{9\\text{ digits}}\\underbrace{0000000000}_{10\\text{ digits}}\\underbrace{111\\ldots 111}_{11\\text{ digits}}\\underbrace{222\\ldots 222}_{12\\text{ digits}}\\ldots$$\nWhat is the $2019^{\\text{th}}$ digit of this number?\n\nA. $2$\nB. $4$\nC. $6$\nD. $8$\nE. None of the above',
          answer: 'B. $4$',
          principle:
            'Sum the block lengths $1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}$ to locate which block contains the $2019^{\\text{th}}$ position, then take that block index modulo $10$.',
          solution:
            'The $k^{\\text{th}}$ block consists of $k$ copies of the units digit of $k$. The total number of digits in the first $k$ blocks is $\\frac{k(k+1)}{2}$.\nTest $k = 63$:\n$$\\frac{63 \\times 64}{2} = 63 \\times 32 = 2016.$$\nThus the $2016^{\\text{th}}$ digit ends the $63^{\\text{rd}}$ block (of digit $3$). The next $64$ digits (positions $2017$ through $2080$) belong to the $64^{\\text{th}}$ block, whose repeated digit is the units digit of $64$, namely $4$.\nHence the $2019^{\\text{th}}$ digit is $4$.',
          rubric: [
            { code: 'M1', text: 'Computes the cumulative length up to block $63$ as $\\frac{63 \\times 64}{2} = 2016$.' },
            { code: 'A1', text: 'Places position $2019$ in block $64$ and finds digit $4$, option B.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'The letters "A", "C", "L" and "O" are rearranged to form all four-letter words. The list of words is then arranged in dictionary order. For example, the first word is ACLO and the last word is OLCA. What is the order of \'COLA\' in the list?\n\nA. $10$\nB. $11$\nC. $12$\nD. $13$\nE. None of the above',
          answer: 'C. $12$',
          principle:
            'Count how many permutations precede the target word letter by letter in alphabetical order ($A < C < L < O$).',
          solution:
            'In alphabetical order, the letters are $A, C, L, O$:\n- Words starting with $A$: $3! = 6$ words (positions $1$ to $6$).\n- Words starting with $CA$: $2! = 2$ words (positions $7$ to $8$).\n- Words starting with $CL$: $2! = 2$ words (positions $9$ to $10$).\n- Words starting with $CO$: there are $2$ words, $COAL$ (position $11$) and $COLA$ (position $12$).\n\nTherefore, `COLA` is the $12^{\\text{th}}$ word in the list.',
          rubric: [
            { code: 'M1', text: 'Counts $6$ words starting with $A$ and $4$ words starting with $CA$ or $CL$.' },
            { code: 'A1', text: 'Lists $COAL$ ($11^{\\text{th}}$) and $COLA$ ($12^{\\text{th}}$), option C.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            "A group of teachers attended a conference hosted by the Wonderland's Ministry of Education. Before the conference starts, every teacher shook hands with each other. After all the teachers shook hands with one another, the Minister and his secretary entered the conference room. They shook hands with some of the teachers, so that no teacher shook hands with both of them. Given that there were $2019$ handshakes made, how many teachers attended the conference?\n\nA. $62$\nB. $63$\nC. $64$\nD. $65$\nE. None of the above",
          answer: 'C. $64$',
          principle:
            'Bound the total handshakes using $\\frac{n(n-1)}{2} \\le 2019 \\le \\frac{n(n-1)}{2} + n$, because each of the $n$ teachers shakes hands with at most one of the two officials.',
          solution:
            'Let $n$ be the number of teachers. The handshakes among the teachers alone total $\\frac{n(n-1)}{2}$. Since no teacher shook hands with both the Minister and his secretary, the number of additional handshakes $k$ satisfies $0 \\le k \\le n$. Thus:\n$$\\frac{n(n-1)}{2} \\le 2019 \\le \\frac{n(n-1)}{2} + n = \\frac{n(n+1)}{2}.$$\nCheck values near $\\sqrt{2 \\times 2019} = \\sqrt{4038} \\approx 63.5$:\n- If $n = 63$: $\\frac{63 \\times 62}{2} = 1953$ and $1953 + 63 = 2016 < 2019$ (too small).\n- If $n = 64$: $\\frac{64 \\times 63}{2} = 2016$, leaving $k = 2019 - 2016 = 3 \\le 64$ handshakes with the officials.\n- If $n = 65$: $\\frac{65 \\times 64}{2} = 2080 > 2019$ (too large).\n\nHence there were $64$ teachers.',
          rubric: [
            { code: 'M1', text: 'Establishes $\\frac{n(n-1)}{2} \\le 2019 \\le \\frac{n(n+1)}{2}$ and tests $n = 63, 64, 65$.' },
            { code: 'A1', text: 'Finds $n = 64$, option C.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'The following calculations lead to $2019 = -2019$:\n- We write $2019$ as $\\sqrt{2019^2}$. $(1)$\n- Since $2019^2 = (-2019)^2$, we further rewrite $2019$ as $\\sqrt{(-2019)^2}$. $(2)$\n- The expression is simplified to $\\sqrt{(-2019)^2} = -2019$. $(3)$\n- Hence, $2019 = -2019$. $(4)$\n\nWhich step is the first one that contains errors?\n\nA. $(1)$\nB. $(2)$\nC. $(3)$\nD. $(4)$\nE. The proof is correct; $2019$ is equal to $-2019$.',
          answer: 'C. $(3)$',
          principle:
            'The principal square root symbol $\\sqrt{x}$ always returns the non-negative root, so $\\sqrt{a^2} = |a|$ rather than $a$.',
          solution:
            'Check each step:\n- Step $(1)$ is valid because $2019 > 0$, so $2019 = \\sqrt{2019^2}$.\n- Step $(2)$ is valid because $2019^2 = (-2019)^2$.\n- Step $(3)$ is false: the radical $\\sqrt{\\cdot}$ denotes the non-negative (principal) square root, so $\\sqrt{(-2019)^2} = |-2019| = 2019 \\neq -2019$.\n\nTherefore, step $(3)$ is the first step that contains an error.',
          rubric: [
            { code: 'M1', text: 'Verifies steps (1) and (2) are true and recalls $\\sqrt{a^2} = |a| \\ge 0$.' },
            { code: 'A1', text: 'Identifies step (3) as the first error, option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'In the following diagram, each number in a box is the least common multiple of the two numbers in the boxes that it touches above it. Given the configuration shown below, what is the smallest possible number that could be in the top rightmost box?\n\nA. $2$\nB. $4$\nC. $16$\nD. $32$\nE. None of the above',
          figures: [
            {
              src: '/papers/simoc-2019-g7/fig-8.webp',
              alt: 'Four-row inverted pyramid of boxes showing 63 in the top-left box, 126 below it, 504 in the third row left box, and 2016 in the single bottom box.',
              caption: 'Inverted LCM box pyramid for Question 8 (printed as Question 6 in the contest paper).'
            }
          ],
          answer: 'D. $32$',
          principle:
            'Track the highest power of $2$ in each box via prime factorization, since $\\operatorname{lcm}$ takes the maximum exponent of each prime.',
          solution:
            'Factorize the given numbers into primes:\n$$63 = 3^2 \\times 7, \\quad 126 = 2^1 \\times 3^2 \\times 7, \\quad 504 = 2^3 \\times 3^2 \\times 7, \\quad 2016 = 2^5 \\times 3^2 \\times 7.$$\nLabel the top row $(63, a, b, c)$, the second row $(126, u, v)$, the third row $(504, w)$, and the bottom row $(2016)$.\n- Since $2016 = \\operatorname{lcm}(504, w)$ and $504$ only contains $2^3$ while $2016$ contains $2^5$, $w$ must be divisible by $2^5$.\n- Because $504 = \\operatorname{lcm}(126, u)$, $u$ divides $504$, so $u$ contains at most $2^3$.\n- Since $w = \\operatorname{lcm}(u, v)$ must be divisible by $2^5$, $v$ must be divisible by $2^5$.\n- Likewise, $b$ divides $u$ (so $b$ contains at most $2^3$), and $v = \\operatorname{lcm}(b, c)$ is divisible by $2^5$; hence $c$ must be divisible by $2^5 = 32$.\n\nChoosing $a = 2$, $b = 8$, and $c = 32$ gives second row $(126, 8, 32)$, third row $(504, 32)$, and bottom box $2016$. Thus the smallest possible value of $c$ is $32$.',
          rubric: [
            { code: 'M1', text: 'Uses prime factorizations ($504 = 2^3 \\cdot 63$, $2016 = 2^5 \\cdot 63$) to force $2^5 \\mid c$.' },
            { code: 'A1', text: 'Verifies $32$ is achievable and selects option D.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'In the SIMOC Kingdom, only coins of value $19$ dollars and $20$ dollars are circulated. Which of the following amount of money cannot be paid exactly in this Kingdom?\n\nA. $40$\nB. $140$\nC. $727$\nD. $2019$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'By the Chicken McNugget theorem for coprime integers $19$ and $20$, every integer greater than $19 \\times 20 - 19 - 20 = 341$ can be formed, and multiples of $20$ can always be formed.',
          solution:
            'Check whether each amount can be written as $19x + 20y$ with non-negative integers $x, y$:\n- $40 = 0 \\times 19 + 2 \\times 20$.\n- $140 = 0 \\times 19 + 7 \\times 20$.\n- $727 = 13 \\times 19 + 24 \\times 20 = 247 + 480$.\n- $2019 = 1 \\times 19 + 100 \\times 20 = 19 + 2000$.\n\nAll four amounts A–D can be paid exactly, so the answer is None of the above.',
          rubric: [
            { code: 'M1', text: 'Decomposes all four amounts as $19x + 20y$ with $x, y \\ge 0$ (or invokes $19 \\cdot 20 - 19 - 20 = 341$).' },
            { code: 'A1', text: 'Concludes all four amounts are payable and selects option E.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Five empty bottles of lemonade can be exchanged for $1$ new bottle of coke. Four empty bottles of coke can be exchanged for $1$ new bottle of milk. If Sarah initially buys $5$ dozen of lemonade bottles, what is the greatest number of bottles of any beverages can she drink? ($1$ dozen is $12$ pieces)\n\nA. $25$\nB. $50$\nC. $75$\nD. $100$\nE. None of the above',
          answer: 'C. $75$',
          principle:
            'Track the number of bottles drunk and exchanged step by step across the three beverage types.',
          solution:
            'Sarah starts with $5 \\times 12 = 60$ bottles of lemonade.\n1. She drinks all $60$ bottles of lemonade and obtains $60$ empty lemonade bottles.\n2. Exchanging $5$ empty lemonade bottles for $1$ coke gives $60 \\div 5 = 12$ bottles of coke.\n3. After drinking those $12$ bottles of coke, she exchanges $4$ empty coke bottles for $1$ milk, obtaining $12 \\div 4 = 3$ bottles of milk.\n\nNo further exchanges are possible from empty milk bottles. Total bottles drunk:\n$$60 + 12 + 3 = 75.$$',
          rubric: [
            { code: 'M1', text: 'Computes $60$ lemonade, $60 \\div 5 = 12$ coke, and $12 \\div 4 = 3$ milk.' },
            { code: 'A1', text: 'Sums $60 + 12 + 3 = 75$, option C.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Which option below is an odd term in the following sequence?\n$$11, 13, 24, 37, 61, 98, 159, \\ldots$$\n\nA. $51^{\\text{th}}$\nB. $57^{\\text{th}}$\nC. $75^{\\text{th}}$\nD. $100^{\\text{th}}$\nE. $102^{\\text{th}}$',
          answer: 'D. $100^{\\text{th}}$',
          principle:
            'Identify the Fibonacci-like recurrence $a_{n} = a_{n-1} + a_{n-2}$ and determine the repeating parity pattern modulo $2$.',
          solution:
            'Each term from the third onward is the sum of the two preceding terms ($11 + 13 = 24$, $13 + 24 = 37$, $24 + 37 = 61$, etc.). Writing $O$ for odd and $E$ for even:\n$$O, O, E, O, O, E, O, O, E, \\ldots$$\nThe parity repeats with period $3$: a term is even if and only if its position is a multiple of $3$, and odd otherwise.\nChecking the five positions modulo $3$:\n- $51 = 3 \\times 17$ (even)\n- $57 = 3 \\times 19$ (even)\n- $75 = 3 \\times 25$ (even)\n- $100 = 3 \\times 33 + 1$ (odd)\n- $102 = 3 \\times 34$ (even)\n\nOnly the $100^{\\text{th}}$ term is odd.',
          rubric: [
            { code: 'M1', text: 'Finds the period-$3$ parity cycle (odd, odd, even) so terms at multiples of $3$ are even.' },
            { code: 'A1', text: 'Identifies $100$ as non-divisible by $3$, option D.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            "Abel and Amenadial start on opposite ends of a pool and start swimming towards each other. Abel's speed is $3\\text{ m/s}$ and Amenadial's speed is $1.8\\text{ m/s}$. Each time they reach the opposite end of the pool, they turn around and continue swimming. Swimming $1$ lap means swimming from one end of the pool to the opposite end. What is the smallest number of laps that Abel needs to swim before they meet each other at the middle of the pool?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. None of the above",
          answer: 'A. $2$',
          principle:
            'Express distances swum in units of pool lengths; reaching the middle means swimming an odd number of half-laps, while their distances stay in the ratio $3 : 1.8 = 5 : 3$.',
          solution:
            'The ratio of Abel’s speed to Amenadial’s speed is $3 : 1.8 = 5 : 3$.\nTo be at the middle of the pool, each swimmer must have covered a distance equal to $k + \\frac{1}{2} = \\frac{2k + 1}{2}$ pool lengths (for non-negative integers $k$ for Abel and $m$ for Amenadial, corresponding to $k$ and $m$ completed laps before the meeting).\nEquating the ratio of their distances to their speed ratio:\n$$\\frac{2k + 1}{2m + 1} = \\frac{5}{3}.$$\nThe smallest solution in non-negative integers is $2k + 1 = 5$ and $2m + 1 = 3$, giving $k = 2$ and $m = 1$.\nAt that moment, Abel has swum $2.5$ laps, meaning he completed $2$ full laps before they meet at the middle of the pool.',
          rubric: [
            { code: 'M1', text: 'Sets up $\\frac{2k + 1}{2m + 1} = \\frac{3}{1.8} = \\frac{5}{3}$ for half-lap crossings at the center.' },
            { code: 'A1', text: 'Finds $2k + 1 = 5 \\implies k = 2$ completed laps before meeting, option A.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Refer to the figure below. The bigger semicircle is centered at $D$ and has a radius of $9\\text{ cm}$. The smaller semicircle is centered at $E$ and has a radius of $6\\text{ cm}$. Also, $FD$ and $HE$ are perpendicular to $DB$ and $EB$ respectively. Find the area of the shaded region.\n\nA. $16\\pi + 2\\text{ cm}^2$\nB. $\\frac{9}{4}\\pi + \\frac{9}{2}\\text{ cm}^2$\nC. $\\frac{7}{2}\\pi + \\frac{1}{4}\\text{ cm}^2$\nD. $\\frac{11}{2}\\pi + \\frac{16}{3}\\text{ cm}^2$\nE. None of the above',
          figures: [
            {
              src: '/papers/simoc-2019-g7/fig-13.webp',
              alt: 'Large semicircle centered at D with vertical radius FD and smaller semicircle centered at E sharing endpoint B, with vertical radius HE and chord FB.',
              caption: 'Shaded semicircles diagram for Question 13.'
            }
          ],
          answer: 'E. None of the above',
          principle:
            'Verify that $F, H, B$ are collinear using coordinates, then subtract the unshaded quarter-circle and right triangle inside the smaller semicircle from the big quarter-circle and right triangle.',
          solution:
            'Place $D$ at the origin $(0, 0)$ along diameter $AB$, so $A = (-9, 0)$, $B = (9, 0)$, and $F = (0, 9)$. Since the smaller semicircle centered at $E$ has radius $6\\text{ cm}$ and passes through $B = (9, 0)$, we have $E = (3, 0)$, $C = (-3, 0)$, and $H = (3, 6)$.\nNotice that $F(0, 9)$, $H(3, 6)$, and $B(9, 0)$ all lie on the straight line $x + y = 9$.\n\nThus the shaded region equals:\n- Quarter-circle $ADF$ plus right triangle $\\triangle FDB$:\n$$\\frac{1}{4}\\pi(9)^2 + \\frac{1}{2}(9)(9) = \\frac{81}{4}\\pi + \\frac{81}{2}\\text{ cm}^2,$$\n- Minus the unshaded region inside the smaller semicircle (quarter-circle $CEH$ plus right triangle $\\triangle HEB$):\n$$\\frac{1}{4}\\pi(6)^2 + \\frac{1}{2}(6)(6) = 9\\pi + 18\\text{ cm}^2.$$\n\nSubtracting gives the shaded area:\n$$\\left(\\frac{81}{4}\\pi + \\frac{81}{2}\\right) - (9\\pi + 18) = \\frac{45}{4}\\pi + \\frac{45}{2}\\text{ cm}^2,$$\nwhich does not match options A–D.',
          rubric: [
            { code: 'M1', text: 'Computes the combined area $\\frac{81}{4}\\pi + \\frac{81}{2}$ and subtracts the unshaded $9\\pi + 18$.' },
            { code: 'A1', text: 'Finds $\\frac{45}{4}\\pi + \\frac{45}{2}\\text{ cm}^2$, option E.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Which of the following options below is divisible by $3$?\n\nA. $1^{11}$\nB. $2^{13} - 1$\nC. $3^{428} - 1$\nD. $4^{999} - 1$\nE. None of the above',
          answer: 'D. $4^{999} - 1$',
          principle:
            'Reduce each base modulo $3$ (or use $a^n - 1$ being divisible by $a - 1$).',
          solution:
            'Evaluate each option modulo $3$:\n- A: $1^{11} = 1 \\equiv 1 \\pmod{3}$.\n- B: $2 \\equiv -1 \\pmod{3}$, so $2^{13} - 1 \\equiv (-1)^{13} - 1 = -2 \\equiv 1 \\pmod{3}$.\n- C: $3^{428} - 1 \\equiv 0 - 1 \\equiv 2 \\pmod{3}$.\n- D: $4 \\equiv 1 \\pmod{3}$, so $4^{999} - 1 \\equiv 1^{999} - 1 = 0 \\pmod{3}$ (equivalently, $4 - 1 = 3$ divides $4^{999} - 1$).\n\nTherefore, $4^{999} - 1$ is divisible by $3$.',
          rubric: [
            { code: 'M1', text: 'Evaluates the candidates modulo $3$ (or factors $4 - 1 = 3$ out of $4^{999} - 1$).' },
            { code: 'A1', text: 'Identifies $4^{999} - 1$, option D.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Information about four students: Amy, Hannah, Rebecca and Yuki are as stated below.\n1. Each of the student has a different nationality and come from among Bulgaria, China, Japan or Philippines.\n2. Their ages are $17$, $18$, $19$ or $20$; each of them do not share the same age.\n3. Each of them plays a different musical instrument which could be a clarinet, guitar, piano or violin.\n4. Hannah is younger than Amy.\n5. The student playing the piano is not a Japanese, and is younger than Rebecca.\n6. The $20$-year-old student is not a Chinese, and does not play the piano.\n7. Yuki is older than Rebecca.\n8. The student playing the clarinet is not a Japanese, and is not $19$ years old.\n9. Rebecca is not $17$ years old, and does not play the guitar or violin.\n10. Amy is from Bulgaria, and she does not play the clarinet or guitar.\n\nWho plays the violin?\n\nA. Amy\nB. Hannah\nC. Rebecca\nD. Yuki\nE. Not enough information',
          answer: 'A. Amy',
          principle:
            'Eliminate instruments for Rebecca and Amy using clues 5, 9, and 10, then use the age ordering to separate piano from violin.',
          solution:
            'Analyze the instruments and ages:\n- By clue 9, Rebecca does not play the guitar or violin, so Rebecca plays either the clarinet or the piano.\n- By clue 5, the piano player is younger than Rebecca, so Rebecca cannot play the piano. Therefore, **Rebecca plays the clarinet**.\n- By clue 10, Amy does not play the clarinet or guitar, and Rebecca already plays the clarinet. Thus Amy plays either the piano or the violin.\n- By clues 4, 5, and 7, the piano player is younger than Rebecca, Rebecca is younger than Yuki, and Hannah is younger than Amy. Since there are only four ages ($17, 18, 19, 20$), let us check who can be the piano player: Rebecca is not $17$ (clue 9) and Yuki $>$ Rebecca, so Yuki is at least $19$ and Rebecca is at least $18$. If Amy played the piano, then Hannah $<$ Amy $<$ Rebecca $<$ Yuki would force ages $(17, 18, 19, 20)$ for (Hannah, Amy, Rebecca, Yuki); then Rebecca ($19$) would play the clarinet, contradicting clue 8 (the clarinet player is not $19$ years old).\n\nHence Amy cannot play the piano, so **Amy plays the violin** (and Hannah, aged $17$, plays the piano, while Yuki plays the guitar).',
          rubric: [
            { code: 'M1', text: 'Deduces Rebecca plays the clarinet and tests Amy playing the piano against clue 8.' },
            { code: 'A1', text: 'Concludes Amy plays the violin, option A.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write down the numerical answer to each question (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'Positive integers are written in the infinite table as follow.\n\nWhat number is written on the cell of row $2019$ and column $2019$?',
          figures: [
            {
              src: '/papers/simoc-2019-g7/fig-16.webp',
              alt: 'Infinite grid table centered at Row 0 and Column 0 with 1 at the center and numbers increasing outward by Manhattan distance.',
              caption: 'Infinite integer grid table for Question 16.'
            }
          ],
          answer: '$4039$',
          principle:
            'Express the entry in Row $r$ and Column $c$ in terms of its Manhattan distance $|r| + |c|$ from the center $(0, 0)$.',
          solution:
            'In the table, cell $(0, 0)$ contains $1$. Moving one step horizontally or vertically increases the value by $1$. In general, the number in Row $r$ and Column $c$ is:\n$$|r| + |c| + 1.$$\nCheck with the given cells: at $(0, 2)$ it is $|0| + |2| + 1 = 3$; at $(2, -1)$ it is $|2| + |-1| + 1 = 4$.\nFor Row $2019$ and Column $2019$:\n$$|2019| + |2019| + 1 = 2019 + 2019 + 1 = 4039.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the cell formula $|r| + |c| + 1$ from the grid pattern.' },
            { code: 'A2', text: 'Computes $2019 + 2019 + 1 = 4039$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'William writes on the board all integers from $1$ to $100$. He then erases all the numbers with digit(s) "$3$" or divisible by $3$. How many numbers are left on the board?',
          answer: '$55$',
          principle:
            'Use Inclusion–Exclusion: count integers in $1$–$100$ that are multiples of $3$ or contain digit $3$, taking care not to double-count those that satisfy both.',
          solution:
            'Count the erased numbers among $1, 2, \\ldots, 100$:\n- **Multiples of $3$:** $\\lfloor 100 / 3 \\rfloor = 33$ numbers.\n- **Numbers containing the digit $3$:** $10$ numbers in the $30$s ($30, 31, \\ldots, 39$) plus $9$ numbers ending in $3$ outside the $30$s ($3, 13, 23, 43, 53, 63, 73, 83, 93$), giving $19$ numbers.\n- **Both divisible by $3$ and containing digit $3$:** in the $30$s there are $4$ multiples of $3$ ($30, 33, 36, 39$), and outside the $30$s there are $3$ ($3, 33$ already counted, $63, 93$), so $4 + 3 = 7$ numbers ($3, 30, 33, 36, 39, 63, 93$).\n\nBy Inclusion–Exclusion, the number of erased integers is:\n$$33 + 19 - 7 = 45.$$\nTherefore, the number of integers left on the board is:\n$$100 - 45 = 55.$$',
          rubric: [
            { code: 'M2', text: 'Applies Inclusion–Exclusion: $33$ multiples of $3$, $19$ containing digit $3$, and $7$ in both sets.' },
            { code: 'A2', text: 'Finds $100 - 45 = 55$ numbers remaining.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. What is the sum of the digits in the $6$-digit number $\\text{DURIAN}$?\n$$\\begin{array}{rrrrrrr} & & A & P & P & L & E \\\\ + & B & A & N & A & N & A \\\\ \\hline & D & U & R & I & A & N \\end{array}$$',
          answer: '$27$',
          principle:
            'Notice that the ten letters $A, B, D, E, I, L, N, P, R, U$ use all ten digits $0$ through $9$, and use column-by-column addition and carries to determine each digit.',
          solution:
            'Count the distinct letters: $A, P, L, E, B, N, D, U, R, I$ — all $10$ digits $0$–$9$ appear.\n1. **Ten-thousands column ($A + A + \\text{carry}$):** Notice the units column has $E + A = N$ (or $10 + N$), the tens column has $L + N + c_1 = A$ (or $10 + A$), the hundreds column has $P + A + c_2 = I$ (or $10 + I$), and the thousands column has $P + N + c_3 = R$ (or $10 + R$).\n2. **Hundred-thousands and ten-thousands columns:** Since $A, P, L, E$ is a $5$-digit number added to $6$-digit $BANANA$, $D = B + 1$. Because $A + A + c_4$ produces a carry into $B$ (otherwise $D = B$, impossible), we have $A \\ge 5$ and $c_5 = 1$. Also $A + A + c_4 = 10 + U$, where $c_4 \\in \\{0, 1\\}$.\n3. **Finding $N$ and $A$:** From the units and tens columns:\n   - If $c_1 = 0$, then $E + A = N$ and $L + N = A + 10c_2$. Since $E \\ge 0$ and $A \\ge 5$, if $E + A < 10$ then $N > A$, so $L + N = A + 10 \\implies L + E = 10$. If $E + A = 10 + N$ ($c_1 = 1$), then $L + N + 1 = A + 10c_2$. Trying $N = 0$ gives $E + A = 10$ ($c_1 = 1$) and $L + 1 = A$ (since $L < 10$, $c_2 = 0$).\n4. **Unique assignment:** Testing $N = 0$ yields $L = A - 1$ and $E = 10 - A$. Checking $A = 7$ gives $L = 6$, $E = 3$. Then from $P + A = I$ or $10 + I$, and $P + 0 + c_3 = R$:\n   - Choosing $P = 8$ gives $8 + 7 = 15$ ($I = 5$, $c_3 = 1$) and $R = 8 + 0 + 1 = 9$.\n   - Then ten-thousands column: $7 + 7 + 0 = 14$ ($U = 4$, $c_5 = 1$).\n   - Remaining digits for $B$ and $D = B + 1$ are $1$ and $2$, so $B = 1$ and $D = 2$.\n\nVerify:\n$$78863 + 170707 = 249570.$$\nAll ten digits are distinct ($N=0, B=1, D=2, E=3, U=4, I=5, L=6, A=7, P=8, R=9$). The digit sum of $\\text{DURIAN} = 249570$ is:\n$$2 + 4 + 9 + 5 + 7 + 0 = 27.$$',
          rubric: [
            { code: 'M2', text: 'Uses carry analysis across the columns to find $78863 + 170707 = 249570$.' },
            { code: 'A2', text: 'Sums the digits $2 + 4 + 9 + 5 + 7 + 0 = 27$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'What is the largest positive integer $n$ such that $n^2 + 50$ is divisible by $n + 2$?',
          answer: '$52$',
          principle:
            'Perform polynomial division of $n^2 + 50$ by $n + 2$ to isolate the constant remainder.',
          solution:
            'Rewrite $n^2 + 50$ in terms of $n + 2$:\n$$n^2 + 50 = (n^2 - 4) + 54 = (n - 2)(n + 2) + 54.$$\nSince $(n - 2)(n + 2)$ is always divisible by $n + 2$, the expression $n^2 + 50$ is divisible by $n + 2$ if and only if $n + 2$ divides $54$.\nThe largest positive divisor of $54$ is $54$ itself, which gives:\n$$n + 2 = 54 \\implies n = 52.$$',
          rubric: [
            { code: 'M2', text: 'Writes $n^2 + 50 = (n - 2)(n + 2) + 54$ and concludes $(n + 2) \\mid 54$.' },
            { code: 'A2', text: 'Maximizes $n + 2 = 54$ to obtain $n = 52$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'In the Star Event, the Lucky Award is awarded to a couple of opposite gender with the same zodiac signs. It also awards a group of at least $5$ people with the same gender and zodiac signs. For instance, $2$ couples where each couple has opposite gender and same zodiac signs will get $1$ Prize each. Given that there are $12$ zodiac signs, at least how many people should the event organiser invite to ensure at least one Lucky Award will be given?',
          answer: '$49$',
          principle:
            'Apply the Pigeonhole Principle by finding the maximum number of people who can attend without triggering any Lucky Award, then add $1$.',
          solution:
            'To avoid awarding any Lucky Award:\n- Within each of the $12$ zodiac signs, all guests of that sign must share the same gender (otherwise an opposite-gender pair forms a winning couple).\n- Of that single gender in each zodiac sign, there can be at most $4$ people (otherwise $5$ people of the same gender and sign win a group award).\n\nTherefore, the maximum number of invitees without any Lucky Award is:\n$$12 \\times 4 = 48.$$\nInviting $48 + 1 = 49$ people guarantees that either some zodiac sign contains both genders or some zodiac sign has at least $5$ people of the same gender.',
          rubric: [
            { code: 'M2', text: 'Finds the worst-case bound of at most $4$ same-gender guests per zodiac sign ($12 \\times 4 = 48$).' },
            { code: 'A2', text: 'Adds $1$ by the Pigeonhole Principle to get $49$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The lines $BF$ and $GC$ bisect $\\angle GFD$ and $\\angle DCB$ respectively, and they meet at point $E$. Given that $\\angle GEB = 100^\\circ$ and $\\angle FDC = 140^\\circ$, find $\\angle FAC$.',
          figures: [
            {
              src: '/papers/simoc-2019-g7/fig-21.webp',
              alt: 'Triangle-like figure with apex A, points G on AF and B on AC, segments FB and GC intersecting at E, and segments FD and CD meeting at D.',
              caption: 'Angle-chasing diagram for Question 21.'
            }
          ],
          answer: '$60^\\circ$',
          principle:
            'Use vertical angles at $E$, the angle sums of $\\triangle EFC$ and $\\triangle DFC$, and the two angle bisectors to find $\\angle AFC + \\angle ACF$.',
          solution:
            'Let $\\angle GFB = \\angle BFD = x$ and $\\angle GCB = \\angle DCG = y$.\n- Since $\\angle FEC$ and $\\angle GEB$ are vertical angles, $\\angle FEC = \\angle GEB = 100^\\circ$.\n- In $\\triangle EFC$, the angle sum gives:\n$$\\angle EFC + \\angle ECF = 180^\\circ - 100^\\circ = 80^\\circ.$$\n- In $\\triangle DFC$, since $\\angle FDC = 140^\\circ$, we have:\n$$\\angle DFC + \\angle DCF = 180^\\circ - 140^\\circ = 40^\\circ.$$\nSubtracting the second equation from the first yields:\n$$x + y = (\\angle EFC - \\angle DFC) + (\\angle ECF - \\angle DCF) = 80^\\circ - 40^\\circ = 40^\\circ.$$\nNow in $\\triangle AFC$, the sum of the two base angles is:\n$$\\angle AFC + \\angle ACF = (2x + \\angle DFC) + (2y + \\angle DCF) = 2(x + y) + (\\angle DFC + \\angle DCF) = 2(40^\\circ) + 40^\\circ = 120^\\circ.$$\nTherefore:\n$$\\angle FAC = 180^\\circ - 120^\\circ = 60^\\circ.$$',
          rubric: [
            { code: 'M2', text: 'Uses $\\triangle EFC$ and $\\triangle DFC$ to find $x + y = 40^\\circ$ and $\\angle AFC + \\angle ACF = 120^\\circ$.' },
            { code: 'A2', text: 'Finds $\\angle FAC = 60^\\circ$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Yvonne and Zavier can complete painting a house in $12$ days. Whereas, Xander and Yvonne can complete painting the same house in $6$ days. When Xander and Zavier work together, they will take $10$ days to complete it. If all $3$ of them work together but Zavier only comes for $1$ day to help out, it will take them $\\frac{x}{y}$ days to complete painting the house. Suppose $\\frac{x}{y}$ is in simplest form, what is value of $x + y$?',
          answer: '$139$',
          principle:
            'Add the three pairwise daily rates to obtain the combined rate of all three painters, subtract day $1$’s work, and finish the remainder at Xander and Yvonne’s combined rate.',
          solution:
            'Let $X, Y, Z$ be the daily work rates (fraction of the house per day) of Xander, Yvonne, and Zavier:\n$$Y + Z = \\frac{1}{12}, \\qquad X + Y = \\frac{1}{6}, \\qquad X + Z = \\frac{1}{10}.$$\nAdding all three equations gives:\n$$2(X + Y + Z) = \\frac{1}{12} + \\frac{1}{6} + \\frac{1}{10} = \\frac{5 + 10 + 6}{60} = \\frac{21}{60} = \\frac{7}{20} \\implies X + Y + Z = \\frac{7}{40}.$$\nOn day $1$, all three work together and complete $\\frac{7}{40}$ of the house, leaving $1 - \\frac{7}{40} = \\frac{33}{40}$.\nAfter day $1$, Xander and Yvonne finish the rest at rate $X + Y = \\frac{1}{6}$ per day, which takes:\n$$\\frac{33}{40} \\div \\frac{1}{6} = \\frac{198}{40} = \\frac{99}{20}\\text{ days}.$$\nTotal time taken:\n$$1 + \\frac{99}{20} = \\frac{119}{20}\\text{ days}.$$\nSince $\\gcd(119, 20) = 1$, $x = 119$ and $y = 20$, so $x + y = 119 + 20 = 139$.',
          rubric: [
            { code: 'M2', text: 'Finds $X + Y + Z = \\frac{7}{40}$ and computes total time $1 + \\frac{33/40}{1/6} = \\frac{119}{20}$ days.' },
            { code: 'A2', text: 'Computes $x + y = 119 + 20 = 139$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'You are given an empty $5$ litre jug and $7$ litre jug. You can perform any of the following steps:\n1) Fill a jug completely with water.\n2) Completely empty a jug.\n3) Pour water from one jug to another until one of the jugs is either empty or full.\n\nWhat is the minimum number of steps required to obtain exactly $1$ litre of water in one of the jugs?',
          answer: '$8$',
          principle:
            'Track the water state $(a, b)$ in the $(5\\text{ L}, 7\\text{ L})$ jugs using repeated filling of the $5\\text{ L}$ jug and pouring into the $7\\text{ L}$ jug (since $3 \\times 5 - 2 \\times 7 = 1$).',
          solution:
            'Represent the volumes as $(a, b)$ for the $5\\text{ L}$ and $7\\text{ L}$ jugs starting from $(0, 0)$:\n1. Fill the $5\\text{ L}$ jug: $(5, 0)$.\n2. Pour $5\\text{ L} \\to 7\\text{ L}$: $(0, 5)$.\n3. Fill the $5\\text{ L}$ jug: $(5, 5)$.\n4. Pour $5\\text{ L} \\to 7\\text{ L}$ until full: $(3, 7)$.\n5. Empty the $7\\text{ L}$ jug: $(3, 0)$.\n6. Pour $5\\text{ L} \\to 7\\text{ L}$: $(0, 3)$.\n7. Fill the $5\\text{ L}$ jug: $(5, 3)$.\n8. Pour $5\\text{ L} \\to 7\\text{ L}$ until full: $(1, 7)$.\n\nThis achieves $1\\text{ L}$ in $8$ steps. Conversely, starting by filling the $7\\text{ L}$ jug first takes $12$ steps ($3$ fills of the $7\\text{ L}$ jug and $4$ empties of the $5\\text{ L}$ jug, since $3 \\times 7 - 4 \\times 5 = 1$). Hence the minimum number of steps is $8$.',
          rubric: [
            { code: 'M2', text: 'Finds the valid $8$-step pouring sequence reaching $(1, 7)$ and checks the $7\\text{ L}$-first route takes longer.' },
            { code: 'A2', text: 'Minimum number of steps is $8$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Given that $a_1 + a_2 + a_3 + \\cdots + a_{n-1} + a_n = n^2$ for any positive integer $n$. Find the value of $x + y$, where $\\frac{x}{y}$ is in simplest form and:\n$$\\frac{1}{a_1 + 1} + \\frac{1}{a_2 + 1} + \\frac{1}{a_3 + 1} + \\frac{1}{a_4 + 1} + \\frac{1}{a_5 + 1} = \\frac{x}{y}$$',
          answer: '$257$',
          principle:
            'Recover $a_n = S_n - S_{n-1} = n^2 - (n-1)^2 = 2n - 1$, then sum the resulting unit fractions.',
          solution:
            'Let $S_n = a_1 + a_2 + \\cdots + a_n = n^2$. For $n = 1$, $a_1 = 1^2 = 1$; for $n \\ge 2$:\n$$a_n = S_n - S_{n-1} = n^2 - (n - 1)^2 = 2n - 1.$$\nThus $a_1 = 1, a_2 = 3, a_3 = 5, a_4 = 7, a_5 = 9$, and $a_k + 1 = 2k$. Substituting into the sum:\n$$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{6} + \\frac{1}{8} + \\frac{1}{10} = \\frac{60 + 30 + 20 + 15 + 12}{120} = \\frac{137}{120}.$$\nSince $137$ is prime and does not divide $120$, $\\frac{137}{120}$ is in simplest form, giving $x + y = 137 + 120 = 257$.',
          rubric: [
            { code: 'M2', text: 'Determines $a_n = 2n - 1$ so $a_k + 1 = 2k$ and sums $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{6} + \\frac{1}{8} + \\frac{1}{10} = \\frac{137}{120}$.' },
            { code: 'A2', text: 'Computes $x + y = 137 + 120 = 257$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'Nineteen Figure $1$s are drawn side-by-side to form Figure $2$. How many triangles are there in Figure $2$?',
          figures: [
            {
              src: '/papers/simoc-2019-g7/fig-25.webp',
              alt: 'Figure 1 is a square with horizontal and vertical midlines and an inscribed diamond; Figure 2 places 19 copies of Figure 1 side by side.',
              caption: 'Figure 1 and Figure 2 (19 copies side-by-side) for Question 25.'
            }
          ],
          answer: '$370$',
          principle:
            'Count triangles by how many consecutive copies of Figure $1$ they span: within $1$ copy, across $2$ adjacent copies, and across $3$ consecutive copies.',
          solution:
            'Classify every triangle in Figure $2$ by the copies of Figure $1$ it spans:\n1. **Within a single copy of Figure $1$:** Each square contains $8$ small $1$-part triangles ($4$ corners outside the diamond and $4$ inner right triangles) plus $4$ two-part triangles forming the four halves of the diamond, giving $12$ triangles per copy. Across $19$ copies:\n$$19 \\times 12 = 228.$$\n2. **Spanning two adjacent copies:** At each of the $18$ shared vertical borders between consecutive copies, the slanted edges align across the border and combine with the vertical midlines and horizontal edges to form $6$ new triangles ($2$ small isosceles triangles using the top or bottom border edge and two slant segments meeting at the shared midpoint, plus $4$ larger right triangles spanning from one copy’s vertical midline to the next copy’s vertical midline):\n$$18 \\times 6 = 108.$$\n3. **Spanning three consecutive copies:** Because consecutive slanted edges have matching slopes $\\pm 1$, each block of $3$ consecutive copies contains $2$ large isosceles right triangles whose horizontal base of length $4$ half-squares lies along the top or bottom edge and whose right-angle vertex lies on the opposite edge at the middle copy’s vertical midline. Across $17$ triples of consecutive copies:\n$$17 \\times 2 = 34.$$\n\nNo triangle spans $4$ or more copies because each diagonal line terminates at height $0$ or $2$. Total number of triangles:\n$$228 + 108 + 34 = 370.$$',
          rubric: [
            { code: 'M2', text: 'Counts $12$ per single copy ($19 \\times 12 = 228$), $6$ per adjacent boundary ($18 \\times 6 = 108$), and $2$ per $3$-copy span ($17 \\times 2 = 34$).' },
            { code: 'A2', text: 'Sums $228 + 108 + 34 = 370$ triangles.' }
          ]
        }
      ]
    }
  ]
};
