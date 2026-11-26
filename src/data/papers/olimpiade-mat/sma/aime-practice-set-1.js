/**
 * Paket Soal Terstruktur: AIME Practice Set 1 (Questions 1–15)
 * 15 original progressive integer-answer problems (answers 000–999) strictly in English.
 */
const AIME_RUBRIC = [
  { code: 'A1', text: 'Exact three-digit integer answer (000–999) matching the verified derivation.' }
];

export default {
  id: 'aime-practice-set-1',
  slug: 'aime-practice-set-1',
  subject: 'olimpiade-mat',
  grade: 12,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AIME Practice Set 1: 15 progressive integer-answer problems (000–999) in algebra, counting, number theory, and geometry',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab4-trigonometri',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AIME',
  title: 'AIME Practice Set 1 (Questions 1–15)',
  totalMarks: 15,
  instructions:
    'Attempt all 15 questions (standard AIME time: 3 hours; no calculators). Every answer is an integer from 000 to 999 inclusive. Each correct answer is worth 1 point (maximum 15 points).',
  source: {
    org: 'Tim Akademik Duta e-dukasi',
    file: 'original-curated-batch-9',
    license: 'Hak cipta materi kurasi asli Duta e-dukasi'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'AIME Practice Problems (1–15)',
      marks: 15,
      stem: 'Solve each problem and give your answer as a three-digit integer from 000 to 999.',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt: 'Find the sum of all positive two-digit integers that are divisible by $7$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$728$',
          principle: 'Arithmetic series sum: $S_n = \\frac{n}{2}(a_1 + a_n)$.',
          solution:
            'The smallest positive two-digit multiple of $7$ is $14 = 7 \\times 2$, and the largest is $98 = 7 \\times 14$.\n\nThere are $14 - 2 + 1 = 13$ terms. Their sum is:\n$$S = \\frac{13}{2}(14 + 98) = \\frac{13 \\times 112}{2} = 13 \\times 56 = 728.$$',
          rubric: AIME_RUBRIC
        },
        {
          label: '2',
          marks: 1,
          prompt: 'Find the positive real number $x$ satisfying $\\log_2 x + \\log_4 x + \\log_8 x = 11$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$064$',
          principle: 'Change of base: $\\log_{2^k} x = \\frac{1}{k}\\log_2 x$.',
          solution:
            'Rewrite each term in base $2$:\n$$\\log_2 x + \\frac{1}{2}\\log_2 x + \\frac{1}{3}\\log_2 x = 11 \\implies \\frac{11}{6}\\log_2 x = 11.$$\n\nTherefore $\\log_2 x = 6$, which gives $x = 2^6 = 64$, written as $064$.',
          rubric: AIME_RUBRIC
        },
        {
          label: '3',
          marks: 1,
          prompt: 'A right triangle has legs of lengths $24$ and $32$. Let $R$ be its circumradius and $r$ be its inradius. Find $R^2 - r^2$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$336$',
          principle: 'For a right triangle with legs $a, b$ and hypotenuse $c$, $R = \\frac{c}{2}$ and $r = \\frac{a + b - c}{2}$.',
          solution:
            'The hypotenuse is $c = \\sqrt{24^2 + 32^2} = 8\\sqrt{3^2 + 4^2} = 40$.\n\nThus $R = \\frac{40}{2} = 20$ and $r = \\frac{24 + 32 - 40}{2} = 8$.\n\nHence:\n$$R^2 - r^2 = 20^2 - 8^2 = 400 - 64 = 336.$$',
          rubric: AIME_RUBRIC
        },
        {
          label: '4',
          marks: 1,
          prompt: 'In how many ways can $10$ identical balls be placed into $4$ distinct boxes so that every box contains at least $1$ ball? Give your answer as a three-digit integer from 000 to 999.',
          answer: '$084$',
          principle: 'Stars and bars for positive integer compositions: $\\binom{n-1}{k-1}$.',
          solution:
            'We count positive integer solutions to $x_1 + x_2 + x_3 + x_4 = 10$. By stars and bars, the number of solutions is:\n$$\\binom{10 - 1}{4 - 1} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{6} = 84,$$\nwritten as $084$.',
          rubric: AIME_RUBRIC
        },
        {
          label: '5',
          marks: 1,
          prompt: 'A quadratic polynomial $f(x) = ax^2 + bx + c$ satisfies $f(1) = 5$, $f(2) = 12$, and $f(3) = 23$. Find $f(10)$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$212$',
          principle: 'Second finite differences of $ax^2 + bx + c$ equal the constant $2a$.',
          solution:
            'The first differences are $12 - 5 = 7$ and $23 - 12 = 11$, so the constant second difference is $11 - 7 = 4 = 2a$, giving $a = 2$.\n\nThen $f(x) - 2x^2 = bx + c$ equals $3$ at $x = 1$ and $4$ at $x = 2$, so $b = 1$ and $c = 2$.\n\nTherefore $f(x) = 2x^2 + x + 2$, and:\n$$f(10) = 2(100) + 10 + 2 = 212.$$',
          rubric: AIME_RUBRIC
        },
        {
          label: '6',
          marks: 1,
          prompt: 'Find the smallest positive integer $n$ such that $2n$ is a perfect square and $3n$ is a perfect cube. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$072$',
          principle: 'Compare prime exponent divisibility conditions: exponents in $2n$ are even, and exponents in $3n$ are multiples of $3$.',
          solution:
            'Write $n = 2^a 3^b$ (no other primes are needed for minimality).\n- Since $2n = 2^{a+1} 3^b$ is a square, $a + 1 \\equiv 0 \\pmod 2$ and $b \\equiv 0 \\pmod 2$.\n- Since $3n = 2^a 3^{b+1}$ is a cube, $a \\equiv 0 \\pmod 3$ and $b + 1 \\equiv 0 \\pmod 3$.\n\nThe smallest nonnegative solutions are $a = 3$ and $b = 2$. Thus $n = 2^3 \\cdot 3^2 = 8 \\cdot 9 = 72$ (check: $2n = 144 = 12^2$, $3n = 216 = 6^3$), written as $072$.',
          rubric: AIME_RUBRIC
        },
        {
          label: '7',
          marks: 1,
          prompt: 'Find the last three digits of $7^{2026}$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$649$',
          principle: 'Work modulo $1000$ using Euler/Carmichael periodicity: $7^{20} \\equiv 1 \\pmod{1000}$.',
          solution:
            'Note that $7^4 = 2401 \\equiv 401 \\pmod{1000}$. By the binomial expansion:\n$$7^{20} = (1 + 400)^5 \\equiv 1 + 5(400) + 10(400)^2 \\equiv 1 + 2000 \\equiv 1 \\pmod{1000}.$$\n\nSince $2026 = 20 \\times 101 + 6$, we have:\n$$7^{2026} \\equiv 7^6 = 7^4 \\cdot 49 \\equiv 401 \\times 49 = 19649 \\equiv 649 \\pmod{1000}.$$',
          rubric: AIME_RUBRIC
        },
        {
          label: '8',
          marks: 1,
          prompt: 'A circle with center $O$ and radius $15$ has a chord $AB$ of length $24$. Point $P$ lies on chord $AB$ such that $AP = 4$ and $PB = 20$. Find $OP^2$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$145$',
          principle: 'Power of a point inside a circle: $R^2 - OP^2 = AP \\cdot PB$.',
          solution:
            'By Power of a Point for $P$ on chord $AB$ inside a circle of radius $R = 15$:\n$$R^2 - OP^2 = AP \\cdot PB \\implies OP^2 = 15^2 - 4 \\cdot 20 = 225 - 80 = 145.$$\n\n(Verification via midpoint $M$ of $AB$: $OM = \\sqrt{15^2 - 12^2} = 9$ and $MP = 12 - 4 = 8$, so $OP^2 = 9^2 + 8^2 = 81 + 64 = 145$.)',
          rubric: AIME_RUBRIC
        },
        {
          label: '9',
          marks: 1,
          prompt: 'Let $S = \\{1, 2, 3, 4, 5\\}$. Find the number of ordered pairs $(A, B)$ of subsets of $S$ such that $A \\subseteq B$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$243$',
          principle: 'Assign each element independently to one of $3$ disjoint regions: $A$, $B \\setminus A$, or $S \\setminus B$.',
          solution:
            'For each element $k \\in \\{1, 2, 3, 4, 5\\}$, the condition $A \\subseteq B$ allows exactly $3$ independent possibilities:\n1. $k \\in A$ and $k \\in B$,\n2. $k \\notin A$ and $k \\in B$,\n3. $k \\notin A$ and $k \\notin B$.\n\nTherefore the total number of ordered pairs $(A, B)$ is $3^5 = 243$.',
          rubric: AIME_RUBRIC
        },
        {
          label: '10',
          marks: 1,
          prompt: 'The sum $\\sum_{k=1}^{20} \\frac{1}{k(k+2)}$ can be written as a reduced fraction $\\frac{m}{n}$ with relatively prime positive integers $m$ and $n$. Find $m + n$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$787$',
          principle: 'Partial fractions and telescoping sum: $\\frac{1}{k(k+2)} = \\frac{1}{2}\\left(\\frac{1}{k} - \\frac{1}{k+2}\\right)$.',
          solution:
            'Using partial fractions:\n$$\\sum_{k=1}^{20} \\frac{1}{k(k+2)} = \\frac{1}{2}\\sum_{k=1}^{20}\\left(\\frac{1}{k} - \\frac{1}{k+2}\\right) = \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{21} - \\frac{1}{22}\\right).$$\n\nCompute over the common denominator $462 = 2 \\times 21 \\times 11$:\n$$1 + \\frac{1}{2} - \\frac{1}{21} - \\frac{1}{22} = \\frac{3}{2} - \\frac{43}{462} = \\frac{693 - 43}{462} = \\frac{650}{462}.$$\n\nDividing by $2$ yields $\\frac{325}{462}$. Since $\\gcd(325, 462) = \\gcd(5^2 \\cdot 13, 2 \\cdot 3 \\cdot 7 \\cdot 11) = 1$, we obtain $m + n = 325 + 462 = 787$.',
          rubric: AIME_RUBRIC
        },
        {
          label: '11',
          marks: 1,
          prompt: 'Find the number of trailing zeros in the decimal representation of $1000!$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$249$',
          principle: 'Legendre formula for the exponent of $5$ in $n!$: $v_5(n!) = \\sum_{k \\ge 1} \\lfloor n / 5^k \\rfloor$.',
          solution:
            'The number of trailing zeros equals $v_5(1000!)$ because $v_2(1000!) > v_5(1000!)$:\n$$v_5(1000!) = \\left\\lfloor\\frac{1000}{5}\\right\\rfloor + \\left\\lfloor\\frac{1000}{25}\\right\\rfloor + \\left\\lfloor\\frac{1000}{125}\\right\\rfloor + \\left\\lfloor\\frac{1000}{625}\\right\\rfloor = 200 + 40 + 8 + 1 = 249.$$',
          rubric: AIME_RUBRIC
        },
        {
          label: '12',
          marks: 1,
          prompt: 'In $\\triangle ABC$, $AB = 13$, $AC = 15$, and $BC = 14$. Point $D$ lies on $\\overline{BC}$ such that $\\overline{AD}$ bisects $\\angle BAC$. If $AD^2 = \\frac{m}{n}$ where $m$ and $n$ are relatively prime positive integers, find $m + n$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$589$',
          principle: 'Angle Bisector Theorem ($\\frac{BD}{CD} = \\frac{AB}{AC}$) and angle-bisector length formula $AD^2 = AB \\cdot AC - BD \\cdot CD$.',
          solution:
            'By the Angle Bisector Theorem:\n$$\\frac{BD}{CD} = \\frac{13}{15}, \\qquad BD + CD = 14.$$\n\nThus $BD = 14 \\cdot \\frac{13}{28} = \\frac{13}{2}$ and $CD = 14 \\cdot \\frac{15}{28} = \\frac{15}{2}$.\n\nBy the angle-bisector length formula:\n$$AD^2 = AB \\cdot AC - BD \\cdot CD = 13 \\cdot 15 - \\frac{13}{2} \\cdot \\frac{15}{2} = 195\\left(1 - \\frac{1}{4}\\right) = \\frac{585}{4}.$$\n\nSince $\\gcd(585, 4) = 1$, we have $m + n = 585 + 4 = 589$.',
          rubric: AIME_RUBRIC
        },
        {
          label: '13',
          marks: 1,
          prompt: 'How many positive integer divisors of $N = 2^6 \\cdot 3^5 \\cdot 5^4$ are divisible by $6$? Give your answer as a three-digit integer from 000 to 999.',
          answer: '$150$',
          principle: 'A divisor $2^a 3^b 5^c$ of $N$ is divisible by $6 = 2^1 \\cdot 3^1$ iff $a \\ge 1$ and $b \\ge 1$.',
          solution:
            'Every positive divisor of $N$ has the form $d = 2^a 3^b 5^c$ with $0 \\le a \\le 6$, $0 \\le b \\le 5$, and $0 \\le c \\le 4$.\n\nFor $6 \\mid d$, we need:\n- $a \\in \\{1, 2, 3, 4, 5, 6\\}$ ($6$ choices),\n- $b \\in \\{1, 2, 3, 4, 5\\}$ ($5$ choices),\n- $c \\in \\{0, 1, 2, 3, 4\\}$ ($5$ choices).\n\nHence there are $6 \\times 5 \\times 5 = 150$ such divisors.',
          rubric: AIME_RUBRIC
        },
        {
          label: '14',
          marks: 1,
          prompt: 'Evaluate $1000\\left(\\sin^6\\frac{\\pi}{8} + \\cos^6\\frac{\\pi}{8}\\right)$. Give your answer as a three-digit integer from 000 to 999.',
          answer: '$625$',
          principle: 'Algebraic-trigonometric identity: $\\sin^6\\theta + \\cos^6\\theta = 1 - \\frac{3}{4}\\sin^2(2\\theta)$.',
          solution:
            'Let $s = \\sin\\theta$ and $c = \\cos\\theta$, where $s^2 + c^2 = 1$. Then:\n$$s^6 + c^6 = (s^2 + c^2)^3 - 3s^2 c^2(s^2 + c^2) = 1 - 3s^2 c^2 = 1 - \\frac{3}{4}\\sin^2(2\\theta).$$\n\nFor $\\theta = \\frac{\\pi}{8}$, we have $2\\theta = \\frac{\\pi}{4}$ and $\\sin^2\\frac{\\pi}{4} = \\frac{1}{2}$, so:\n$$\\sin^6\\frac{\\pi}{8} + \\cos^6\\frac{\\pi}{8} = 1 - \\frac{3}{4} \\cdot \\frac{1}{2} = \\frac{5}{8}.$$\n\nMultiplying by $1000$ gives $1000 \\times \\frac{5}{8} = 625$.',
          rubric: AIME_RUBRIC
        },
        {
          label: '15',
          marks: 1,
          prompt: 'A lattice path moves from $(0,0)$ to $(6,6)$ taking only unit steps right $(+1, 0)$ or up $(0, +1)$. How many such paths do NOT pass through the point $(3,3)$? Give your answer as a three-digit integer from 000 to 999.',
          answer: '$524$',
          principle: 'Complementary counting on lattice grids: subtract paths forced through $(3,3)$ from all paths.',
          solution:
            'The total number of lattice paths from $(0,0)$ to $(6,6)$ is:\n$$\\binom{12}{6} = 924.$$\n\nA path passing through $(3,3)$ consists of a path from $(0,0)$ to $(3,3)$ followed by a path from $(3,3)$ to $(6,6)$, giving:\n$$\\binom{6}{3} \\times \\binom{6}{3} = 20 \\times 20 = 400.$$\n\nSubtracting gives $924 - 400 = 524$ paths avoiding $(3,3)$.',
          rubric: AIME_RUBRIC
        }
      ]
    }
  ]
};
