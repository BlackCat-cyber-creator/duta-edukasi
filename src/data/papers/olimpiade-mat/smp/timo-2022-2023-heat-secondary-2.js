/**
 * Paket Soal: TIMO 2022/2023 Heat Round Secondary 2 (Thailand International Mathematical Olympiad).
 * Sumber: timo_2022_2023_heat_s2.pdf. Naskah asli dwibahasa (Inggris dan terjemahan Indonesia otomatis yang rusak);
 * paket ini memakai teks Inggris. Seluruh 25 soal dimuat; pada Soal 16, naskah sumber salah cetak menulis
 * "heptagon" padahal memberikan 9 sudut dan menanyakan jumlah sudut ke-10 dan ke-11 (segi-11 / hendecagon).
 * Naskah tidak memuat kunci jawaban; seluruh jawaban dihitung dan diperiksa ulang secara mandiri.
 */
export default {
  id: 'timo-2022-2023-heat-sec2',
  slug: 'timo-2022-2023-heat-secondary-2',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'TIMO 2022/2023 Heat Round Secondary 2: Logika, Aljabar, Teori Bilangan, Geometri, dan Kombinatorika',
  relatedChapterIds: [
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab5-persamaan-garis-lurus',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'TIMO',
  title: 'TIMO 2022/2023 Heat Round Secondary 2',
  totalMarks: 100,
  instructions:
    'Open-ended questions (1 to 25): write down only the final answer in the simplest form (a fraction must be a proper fraction or mixed number, or a decimal). Each correct answer scores 4 points and there is no penalty for wrong answers (total 100 points). No calculators are allowed. Give units where the question asks for a measurement.',
  source: {
    org: 'TIMO',
    file: 'timo_2022_2023_heat_s2.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Logical Thinking',
      marks: 20,
      stem: 'Open-ended questions 1 to 5. Each correct answer scores 4 points.',
      parts: [
        {
          label: '1',
          marks: 4,
          prompt: '16th June, 2022 is Thursday. Which day of the week will 11th June, 2029 be?',
          answer: 'Monday',
          principle: 'Count the days between the dates and reduce modulo 7, remembering the leap days.',
          solution:
            'From 16 June 2022 to 16 June 2029 is $7$ years. The leap days (29 February) in that period are in 2024 and 2028, so there are $7 \\times 365 + 2 = 2557$ days.\n$2557 = 7 \\times 365 + 2$, so the remainder modulo $7$ is $2$: 16 June 2029 is two days after Thursday, a Saturday.\n11 June 2029 is $5$ days before 16 June 2029, and Saturday minus $5$ days is Monday.',
          rubric: [
            { code: 'M2', text: 'Counts 2557 days (including the two leap days) or equivalent day shift of 2.' },
            { code: 'A2', text: 'Monday.' }
          ]
        },
        {
          label: '2',
          marks: 4,
          prompt:
            'It is given that the ratio of ages of Arthur and Ben is $1:3$. The ratio of ages of Ben and Chris is $3:1$. The ratio of ages of Chris and David is $4:5$. Their grandma divides 1325 ml of apple juice between them in the ratio of their ages. What is the total amount of juice Ben and David get in ml?',
          answer: '$901 \\text{ ml}$',
          principle: 'Combine ratios into one continued ratio by matching the common term.',
          solution:
            'Arthur : Ben : Chris $= 1 : 3 : 1$. Chris : David $= 4 : 5$. Scale the first ratio by $4$ so that Chris matches: Arthur : Ben : Chris $= 4 : 12 : 4$, and then David $= 5$.\nSo Arthur : Ben : Chris : David $= 4 : 12 : 4 : 5$, with $25$ parts in total. One part is $1325 \\div 25 = 53$ ml.\nBen and David together get $(12 + 5) \\times 53 = 17 \\times 53 = 901$ ml.',
          rubric: [
            { code: 'M2', text: 'Combined ratio 4 : 12 : 4 : 5 and one part 53 ml.' },
            { code: 'A2', text: '901 ml.' }
          ]
        },
        {
          label: '3',
          marks: 4,
          prompt:
            'There are some giraffes and ants in a room. The number of ants is 9 more than 3 times the number of giraffes. The total number of legs of ants is 348 more than that of giraffes. How many ants are there? (An ant has six legs.)',
          answer: '$72$',
          principle: 'Translate the conditions into a linear equation in the number of giraffes (a giraffe has four legs).',
          solution:
            'Let there be $g$ giraffes. Then there are $3g + 9$ ants. Giraffes have $4$ legs each and ants have $6$ legs each, so\n$$6(3g + 9) = 4g + 348 \\implies 18g + 54 = 4g + 348 \\implies 14g = 294 \\implies g = 21.$$\nThe number of ants is $3 \\times 21 + 9 = 72$. Check: ant legs $= 432$, giraffe legs $= 84$, difference $348$.',
          rubric: [
            { code: 'M2', text: 'Sets up 6(3g + 9) = 4g + 348 with giraffe legs = 4.' },
            { code: 'A2', text: '72 ants.' }
          ]
        },
        {
          label: '4',
          marks: 4,
          prompt:
            'There are 39 coins in the hands of James. There are only 5 coins with tail sides facing up and 5 coins with head sides facing up on his left hand and there are 15 coins with head sides facing up on his right hand. Find the maximum total number of coins in his hands with tail sides facing up.',
          answer: '$19$',
          principle: 'Every coin shows either a head or a tail, so the remaining coins in a hand must be tails.',
          solution:
            'The left hand holds only $5 + 5 = 10$ coins, so the right hand holds $39 - 10 = 29$ coins. On the right hand, at least $15$ coins show heads, so at most $29 - 15 = 14$ coins show tails.\nThus the maximum total number of coins with tails up is $5 + 14 = 19$.',
          rubric: [
            { code: 'M2', text: 'Finds 10 coins on the left hand and 29 on the right.' },
            { code: 'A2', text: '19.' }
          ]
        },
        {
          label: '5',
          marks: 4,
          prompt: 'Find the average of the following sequence.\n$$160, 167, 174, 181, \\dots, 2008, 2015, 2022$$',
          answer: '$1091$',
          principle: 'For an arithmetic sequence, the average equals the average of the first and last terms.',
          solution:
            'The terms increase by $7$ and $2022 - 160 = 1862 = 7 \\times 266$, so $2022$ is a term of the sequence (there are $267$ terms). In an arithmetic sequence the terms are symmetric about the middle, so the average is\n$$\\frac{160 + 2022}{2} = \\frac{2182}{2} = 1091.$$',
          rubric: [
            { code: 'M2', text: 'Uses the arithmetic-sequence average (first + last) / 2 or sum divided by number of terms.' },
            { code: 'A2', text: '1091.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Algebra',
      marks: 20,
      stem: 'Open-ended questions 6 to 10. Each correct answer scores 4 points.',
      parts: [
        {
          label: '6',
          marks: 4,
          prompt:
            'Given $a$ and $b$ are the distinct roots of $4x^2 + 28x + 44 = 0$, find the value of $a^2 + b^2$.',
          answer: '$27$',
          principle: 'Vieta formulas: $a + b = -\\tfrac{B}{A}$ and $ab = \\tfrac{C}{A}$, and $a^2 + b^2 = (a+b)^2 - 2ab$.',
          solution:
            'Divide by $4$: $x^2 + 7x + 11 = 0$. Its discriminant is $49 - 44 = 5 > 0$, so there are two distinct real roots with $a + b = -7$ and $ab = 11$.\n$$a^2 + b^2 = (a+b)^2 - 2ab = 49 - 22 = 27.$$',
          rubric: [
            { code: 'M2', text: 'Finds a + b = -7 and ab = 11.' },
            { code: 'A2', text: '27.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt: 'Find the value of $2xy$ if\n$$\\begin{cases} x + 5y - 37 = 0 \\\\ 4x - 3y + 36 = 0 \\end{cases}$$',
          answer: '$-48$',
          principle: 'Solve the linear system by substitution or elimination, then evaluate the expression.',
          solution:
            'From the first equation $x = 37 - 5y$. Substitute in the second:\n$$4(37 - 5y) - 3y + 36 = 0 \\implies 148 - 23y + 36 = 0 \\implies 184 = 23y \\implies y = 8.$$\nThen $x = 37 - 40 = -3$. Check the second equation: $4(-3) - 24 + 36 = 0$.\n$$2xy = 2 \\times (-3) \\times 8 = -48.$$',
          rubric: [
            { code: 'M2', text: 'Solves the system: x = -3, y = 8.' },
            { code: 'A2', text: '-48.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt: 'Given that $x$ is a real number, find the minimum value of $9x^2 + 6x + 16$.',
          answer: '$15$',
          principle: 'Completing the square: a square is never negative.',
          solution:
            'Split $16 = 1 + 15$ to complete the square:\n$$9x^2 + 6x + 16 = (9x^2 + 6x + 1) + 15 = (3x + 1)^2 + 15.$$\nSince the square $(3x + 1)^2 \\ge 0$ for all real $x$, with equality when $x = -\\tfrac13$, the minimum value is $0 + 15 = 15$.',
          rubric: [
            { code: 'M2', text: 'Completes the square: (3x + 1)^2 + 15.' },
            { code: 'A2', text: '15.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt: 'How many non-negative integral solutions are there for $x$ if $-21 \\le 6x - 4 \\le 49$?',
          answer: '$9$',
          principle: 'Solve the compound linear inequality, then count the integers in the solution interval.',
          solution:
            'Add $4$ to each part of the inequality:\n$$-21 + 4 \\le 6x \\le 49 + 4 \\implies -17 \\le 6x \\le 53.$$\nDividing by $6$ gives exact mixed-number bounds $-2\\tfrac{5}{6} \\le x \\le 8\\tfrac{5}{6}$.\nSince $x$ must be a non-negative integer, $x \\ge 0$ and $x \\le 8$ (as $8 < 8\\tfrac{5}{6} < 9$). Thus the solutions are $0, 1, 2, \\dots, 8$, which is $9$ values.',
          rubric: [
            { code: 'M2', text: 'Solves the inequality to -17/6 <= x <= 53/6.' },
            { code: 'A2', text: '9.' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt: 'Factorize $x^2 - y^2 - 18x + 81$.',
          answer: '$(x - y - 9)(x + y - 9)$',
          principle: 'Group into a perfect-square trinomial and use the difference of two squares.',
          solution:
            '$$x^2 - y^2 - 18x + 81 = (x^2 - 18x + 81) - y^2 = (x - 9)^2 - y^2 = \\big((x-9) - y\\big)\\big((x-9) + y\\big).$$\nSo the factorization is $(x - y - 9)(x + y - 9)$.',
          rubric: [
            { code: 'M2', text: 'Groups as (x - 9)^2 - y^2.' },
            { code: 'A2', text: '(x - y - 9)(x + y - 9).' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Number Theory',
      marks: 20,
      stem: 'Open-ended questions 11 to 15. Each correct answer scores 4 points.',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt:
            'It is known that $x$ is rational, $x > 0$ and\n$$x = \\sqrt{-27 + 12\\sqrt{-27 + 12\\sqrt{-27 + 12\\sqrt{\\cdots}}}}.$$\nFind the maximum value of $x$.',
          answer: '$9$',
          principle: 'Self-similar nested radicals: the inner part equals $x$ itself, which gives an equation for $x$.',
          solution:
            'The expression under the outer radical, $-27 + 12\\sqrt{-27 + 12\\sqrt{\\cdots}}$, repeats the whole pattern, so\n$$x = \\sqrt{-27 + 12x} \\implies x^2 = 12x - 27 \\implies x^2 - 12x + 27 = 0 \\implies (x - 3)(x - 9) = 0.$$\nBoth $x = 3$ and $x = 9$ are positive rational numbers satisfying the equation ($\\sqrt{-27 + 36} = 3$ and $\\sqrt{-27 + 108} = 9$). The maximum value is $9$.',
          rubric: [
            { code: 'M2', text: 'Forms x = sqrt(-27 + 12x) and solves x^2 - 12x + 27 = 0.' },
            { code: 'A2', text: '9.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'A 4-digit number has a remainder 2 when divided by 3, has a remainder 5 when divided by 7 and has a remainder 15 when divided by 17. What is the smallest possible value of the 4-digit number?',
          answer: '$1307$',
          principle: 'Chinese Remainder Theorem: notice that each remainder is the divisor minus a small number, so add that number to the unknown.',
          solution:
            'Let the number be $N$. Then $N + 2$ leaves remainder $1$ when divided by $3$ (since $2 + 2 = 4$), and $N + 2$ is divisible by $7$ (since $5 + 2 = 7$) and by $17$ (since $15 + 2 = 17$). So $N + 2$ is a multiple of $7 \\times 17 = 119$, say $119k$, with $119k \\equiv 1 \\pmod{3}$. Because $119 \\equiv 2 \\pmod{3}$, we need $2k \\equiv 1$, i.e. $k \\equiv 2 \\pmod{3}$.\nSo $N + 2 = 119(3m + 2) = 357m + 238$ and $N = 357m + 236$.\nFor $N \\ge 1000$: $m = 2$ gives $950$ (too small), and $m = 3$ gives $1307$.\nCheck: $1307 = 3 \\times 435 + 2 = 7 \\times 186 + 5 = 17 \\times 76 + 15$.',
          rubric: [
            { code: 'M2', text: 'Reduces to N + 2 being a multiple of 119 with the mod-3 condition (or N = 357m + 236).' },
            { code: 'A2', text: '1307.' }
          ]
        },
        {
          label: '13',
          marks: 4,
          prompt: 'If $(x + 3)$ is a factor of the polynomial $59x^2 + 105x + c$, find the value of $c$.',
          answer: '$-216$',
          principle: 'Factor theorem: $(x - r)$ is a factor of $p(x)$ if and only if $p(r) = 0$.',
          solution:
            'Write the polynomial as $p(x) = 59x^2 + 105x + c$. Since $(x + 3)$ is a factor, $p(x) = (x + 3)q(x)$ for some polynomial $q(x)$, so setting $x = -3$ gives $p(-3) = 0$:\n$$59(-3)^2 + 105(-3) + c = 0 \\implies 59(9) - 315 + c = 0 \\implies 531 - 315 + c = 0.$$\nHence $216 + c = 0$, so $c = -216$.',
          rubric: [
            { code: 'M2', text: 'Substitutes x = -3 into the polynomial and sets it to zero.' },
            { code: 'A2', text: '-216.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt: 'Find the remainder when $55^{65}$ is divided by $7$.',
          answer: '$6$',
          principle: 'Modular arithmetic: replace the base by a congruent small number, here $55 \\equiv -1 \\pmod 7$.',
          solution:
            '$55 = 7 \\times 8 - 1$, so $55 \\equiv -1 \\pmod 7$. Therefore\n$$55^{65} \\equiv (-1)^{65} = -1 \\equiv 6 \\pmod 7.$$\nThe remainder is $6$.',
          rubric: [
            { code: 'M2', text: 'Uses 55 congruent to -1 (mod 7).' },
            { code: 'A2', text: 'Remainder 6.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt: 'Find the sum of positive factors of $952$.',
          answer: '$2160$',
          principle: 'If $n = p^a q^b r^c$, the sum of the positive divisors is $\\sigma(n) = \\frac{p^{a+1}-1}{p-1}\\cdot\\frac{q^{b+1}-1}{q-1}\\cdot\\frac{r^{c+1}-1}{r-1}$.',
          solution:
            'Factorise $952$ into primes: $952 = 8 \\times 119 = 2^3 \\times 7 \\times 17$. Every positive factor of $952$ has the form $2^a \\cdot 7^b \\cdot 17^c$ with $0 \\le a \\le 3$, $0 \\le b \\le 1$, and $0 \\le c \\le 1$.\nExpanding the product of the prime-power sums produces each factor $2^a \\cdot 7^b \\cdot 17^c$ exactly once, so the sum of positive factors is\n$$(1 + 2 + 4 + 8)(1 + 7)(1 + 17) = 15 \\times 8 \\times 18 = 2160.$$',
          rubric: [
            { code: 'M2', text: 'Prime factorisation 2^3 x 7 x 17 and the divisor-sum product.' },
            { code: 'A2', text: '2160.' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Geometry',
      marks: 20,
      stem: 'Open-ended questions 16 to 20. Each correct answer scores 4 points.',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'Nine of the interior angles of an irregular hendecagon (11-sided polygon; printed as "heptagon" in the original paper) are $192^\\circ$, $138^\\circ$, $127^\\circ$, $162^\\circ$, $257^\\circ$, $118^\\circ$, $111^\\circ$, $122^\\circ$ and $110^\\circ$. What is the sum of the tenth and eleventh interior angles?',
          answer: '$283^\\circ$',
          principle: 'The sum of the interior angles of an $n$-sided polygon is $(n - 2) \\times 180^\\circ$.',
          solution:
            'Since the question gives nine interior angles and asks for the sum of the tenth and eleventh interior angles, the polygon has $n = 11$ sides (a hendecagon; "heptagon" in the source paper is a misprint).\nThe sum of all $11$ interior angles is\n$$(11 - 2) \\times 180^\\circ = 9 \\times 180^\\circ = 1620^\\circ.$$\nThe sum of the nine given angles is\n$$192^\\circ + 138^\\circ + 127^\\circ + 162^\\circ + 257^\\circ + 118^\\circ + 111^\\circ + 122^\\circ + 110^\\circ = 1337^\\circ.$$\nTherefore, the sum of the tenth and eleventh interior angles is\n$$1620^\\circ - 1337^\\circ = 283^\\circ.$$',
          rubric: [
            { code: 'M2', text: 'Uses $n = 11$ for total angle sum $1620^\\circ$ and sums the 9 given angles to $1337^\\circ$.' },
            { code: 'A2', text: '$283^\\circ$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt: 'If a straight line $L$ passes through $B(-4, 13)$ and the slope of $L$ is $8$, find the $y$-intercept of $L$.',
          answer: '$45$',
          principle: 'Point-slope form of a line: $y - y_1 = m(x - x_1)$.',
          solution:
            'Using the point-slope form $y - y_1 = m(x - x_1)$ with slope $m = 8$ and point $B(-4, 13)$:\n$$y - 13 = 8\\big(x - (-4)\\big) = 8(x + 4) = 8x + 32 \\implies y = 8x + 45.$$\nThe $y$-intercept occurs where $L$ crosses the $y$-axis ($x = 0$), giving $y = 8(0) + 45 = 45$.',
          rubric: [
            { code: 'M2', text: 'Writes the line as y - 13 = 8(x + 4).' },
            { code: 'A2', text: '45.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt: 'If the lengths of the sides of a triangle are $9$, $12$ and $15$, find the area of the triangle.',
          answer: '$54$ square units',
          principle: 'Converse of the Pythagorean theorem: $9^2 + 12^2 = 15^2$ means a right-angled triangle.',
          solution:
            '$9^2 + 12^2 = 81 + 144 = 225 = 15^2$, so the triangle is right-angled with legs $9$ and $12$.\n$$\\text{Area} = \\tfrac12 \\times 9 \\times 12 = 54 \\text{ square units}.$$',
          rubric: [
            { code: 'M2', text: 'Recognises the right angle (9, 12, 15 is a Pythagorean triple).' },
            { code: 'A2', text: '54.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt: 'There are 15 points on a circle. How many different decagons can we draw with those points as its vertices?',
          answer: '$3003$',
          principle: 'Any 10 points on a circle are the vertices of exactly one convex decagon, so count combinations.',
          solution:
            'A decagon has $10$ vertices. Each choice of $10$ of the $15$ points gives exactly one decagon (the points lie on a circle, so joining them in order around the circle gives a convex polygon), and different choices give different decagons.\n$$\\binom{15}{10} = \\binom{15}{5} = \\frac{15 \\times 14 \\times 13 \\times 12 \\times 11}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 3003.$$',
          rubric: [
            { code: 'M2', text: 'Reduces the problem to choosing 10 of 15 points.' },
            { code: 'A2', text: '3003.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Four identical solid cuboids are formed by merging 1260 cubes with side length 1 cm. Find the minimum value of the total surface area of the four cuboids.',
          answer: '$1144 \\text{ cm}^2$',
          principle: 'For a fixed volume, the surface area of a cuboid is smallest when its dimensions are as close to equal as possible; with integer sides, check the factorisations.',
          solution:
            'The four cuboids are identical and use all $1260$ unit cubes, so each cuboid has volume $1260 \\div 4 = 315 = 3^2 \\times 5 \\times 7\\text{ cm}^3$. Let its integer side lengths be $a \\le b \\le c$ with $abc = 315$. Since $a^3 \\le abc = 315 < 7^3 = 343$, the smallest side $a$ can only be $1$, $3$, or $5$.\nFor each value of $a$, compare the surface area $S = 2(ab + bc + ca)$:\n- If $a = 1$, then $bc = 315$, so $S = 2(315 + b + c) = 630 + 2(b + c)$. This is smallest when $b$ and $c$ are as close as possible, namely $(1, 15, 21)$, giving $S \\ge 630 + 2(15 + 21) = 702$.\n- If $a = 3$, then $bc = 105$ with $b \\ge 3$: $(3, 3, 35)$ gives $2(9 + 105 + 105) = 438$; $(3, 5, 21)$ gives $2(15 + 105 + 63) = 366$; $(3, 7, 15)$ gives $2(21 + 105 + 45) = 342$.\n- If $a = 5$, then $bc = 63$ with $b \\ge 5$, leaving only $(5, 7, 9)$, which gives $2(35 + 63 + 45) = 286$.\nThus each cuboid has minimum surface area $286 \\text{ cm}^2$, and the minimum total surface area of the four cuboids is $4 \\times 286 = 1144 \\text{ cm}^2$.',
          rubric: [
            { code: 'M2', text: 'Each cuboid has 315 cubes and its best dimensions are 5 x 7 x 9.' },
            { code: 'A2', text: '1144 cm^2.' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Combinatorics',
      marks: 20,
      stem: 'Open-ended questions 21 to 25. Each correct answer scores 4 points.',
      parts: [
        {
          label: '21',
          marks: 4,
          prompt:
            'There are six bottles of tea and nine bottles of coffee. Four drinks are chosen from these drinks at random. Find the probability that more than one bottle of coffee is chosen from those drinks.',
          answer: '$\\dfrac{6}{7}$',
          principle: 'Complementary counting: P(more than one coffee) = 1 - P(zero or one coffee).',
          solution:
            'There are $\\binom{15}{4} = 1365$ equally likely ways to choose $4$ of the $15$ bottles.\nZero coffee: all four are tea, $\\binom{6}{4} = 15$ ways. Exactly one coffee: $9 \\times \\binom{6}{3} = 9 \\times 20 = 180$ ways.\nSo "at most one coffee" has $195$ ways and "more than one coffee" has $1365 - 195 = 1170$ ways.\n$$P = \\frac{1170}{1365} = \\frac{6}{7}.$$',
          rubric: [
            { code: 'M2', text: 'Counts 1365 total and 195 unfavourable outcomes (or equivalent direct count).' },
            { code: 'A2', text: '6/7.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'Two fair 6-face dice are thrown. Find the probability that the sum of the numbers obtained is a multiple of $2$ but not a multiple of $4$.',
          answer: '$\\dfrac{1}{4}$',
          principle: 'Count favourable outcomes among the $36$ equally likely pairs, by the value of the sum.',
          solution:
            'The sums that are even but not multiples of $4$ are $2, 6, 10$. The number of ways: sum $2$: $1$ way; sum $6$: $5$ ways; sum $10$: $3$ ways. That is $1 + 5 + 3 = 9$ favourable outcomes out of $36$.\n$$P = \\frac{9}{36} = \\frac14.$$\n(Check: the even sums $2, 4, 6, 8, 10, 12$ have $1 + 3 + 5 + 5 + 3 + 1 = 18$ outcomes and the multiples of $4$ ($4, 8, 12$) have $3 + 5 + 1 = 9$; $18 - 9 = 9$.)',
          rubric: [
            { code: 'M2', text: 'Identifies sums 2, 6, 10 and counts 9 outcomes out of 36.' },
            { code: 'A2', text: '1/4.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'One set of poker has 52 cards, which have four suits (spades, hearts, diamonds and clubs) and thirteen values (A, two to ten, jack, queen and king), of which 9 of the values (two to ten) are numbers. Find the probability of drawing three cards such that their values are consecutive numbers (in any order). (Assume that cards drawn will not be drawn again.)',
          answer: '$\\dfrac{112}{5525}$',
          principle: 'Count favourable hands as (number of consecutive value triples) times (choices of suit for each card), and divide by $\\binom{52}{3}$.',
          solution:
            'Only the number cards $2$ to $10$ count as numbers. The sets of three consecutive values are $\\{2,3,4\\}, \\{3,4,5\\}, \\dots, \\{8,9,10\\}$, which is $7$ sets. For each set, each of the three values can be any of the $4$ suits, so $4^3 = 64$ hands.\nFavourable hands: $7 \\times 64 = 448$. All hands of three cards: $\\binom{52}{3} = \\dfrac{52 \\times 51 \\times 50}{6} = 22100$.\n$$P = \\frac{448}{22100} = \\frac{112}{5525}.$$',
          rubric: [
            { code: 'M2', text: 'Counts 7 value triples times 4^3 suit choices = 448 and 22100 total hands.' },
            { code: 'A2', text: '112/5525.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt: 'If $x$, $y$ are integers and $12xy + 6x + 16y = 92$, how many possible values of $x$ are there?',
          answer: '$3$',
          principle: 'Factor the equation (Simon\'s Favourite Factoring Trick) and list the divisors of the constant.',
          solution:
            'Divide by $2$: $6xy + 3x + 8y = 46$. Write $3x(2y + 1) + 8y = 46$ and $8y = 4(2y + 1) - 4$, so\n$$3x(2y+1) + 4(2y+1) = 50 \\implies (3x + 4)(2y + 1) = 50.$$\nThe factor $2y + 1$ is odd, so it is one of $\\pm 1, \\pm 5, \\pm 25$, and then $3x + 4 = 50 / (2y+1)$ is $50, 10, 2, -50, -10, -2$ respectively. $3x + 4 = 50$ gives $x = \\tfrac{46}{3}$, $3x+4 = 2$ gives $x = -\\tfrac23$, $3x + 4 = -10$ gives $x = -\\tfrac{14}{3}$: not integers.\nThe integer cases: $3x + 4 = 10$: $x = 2$, $y = 2$; $3x + 4 = -50$: $x = -18$, $y = -1$; $3x + 4 = -2$: $x = -2$, $y = -13$.\nThe possible values of $x$ are $2, -2, -18$: $3$ values. (Check $x = -2, y = -13$: $312 - 12 - 208 = 92$.)',
          rubric: [
            { code: 'M2', text: 'Factorises to (3x + 4)(2y + 1) = 50.' },
            { code: 'A2', text: '3 values of x.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            '3 teachers and 5 students are lining up. How many different ways are there such that there are teachers at both ends of the line?',
          answer: '$4320$',
          principle: 'Multiplication principle: fill the restricted positions first, then arrange the rest.',
          solution:
            'The two ends are filled by two of the $3$ teachers: $3 \\times 2 = 6$ ways (the left end has $3$ choices and the right end $2$).\nThe remaining $6$ people (1 teacher and 5 students) stand in the middle in $6! = 720$ ways.\nTotal $= 6 \\times 720 = 4320$.',
          rubric: [
            { code: 'M2', text: 'Counts 3 x 2 = 6 ways for the ends and 6! for the middle.' },
            { code: 'A2', text: '4320.' }
          ]
        }
      ]
    }
  ]
};
