/**
 * Paket Soal Terstruktur: SMO 2012 Open Section (First Round) — 21 of 25 short-answer problems included.
 * Source: scraped_raw/smo-open-2012.md (Singapore Mathematical Society — SMO 2012 Open Section, First Round).
 * Skipped 4 items: Q6 (recurrence relation missing in OCR), Q11 (missing diagram), Q14 (target expression missing in OCR), and Q23 (division by zero at x_4 when x_1 = 1).
 */
const OK = [{ code: 'A1', text: 'Correct exact answer with valid supporting derivation.' }];

export default {
  id: 'smo-open-2012',
  slug: 'smo-open-2012',
  subject: 'olimpiade-mat',
  grade: 12,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'SMO 2012 Open Section (First Round)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma11-bab1-fungsi-invers',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SMO',
  title: 'SMO Open — 2012 (First Round)',
  totalMarks: 21,
  instructions:
    'This set contains 21 short-answer problems from the 25-problem 2012 Singapore Mathematical Olympiad (SMO) Open Section, First Round (included: Q1-Q5, Q7-Q10, Q12-Q13, Q15-Q22, Q24-Q25; skipped: 4 items, namely Q6 and Q14 due to missing/ambiguous OCR formulas in the source archive, Q11 due to a missing diagram, and Q23 because $x_1 = 1$ yields $x_3 = 2 + \\sqrt{3}$ and causes division by zero in $x_4$). Original problem numbering is preserved, and each included problem is worth 1 mark (21 marks total). Calculators are not allowed.',
  source: {
    org: 'Singapore Mathematical Society — SMO Open',
    file: 'scraped_raw/smo-open-2012.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Short Answer',
      marks: 21,
      stem: 'Write the exact answer for each of the 21 included problems (original SMO 2012 Open First Round numbering; 1 mark each). Throughout this paper, $\\lfloor x \\rfloor$ denotes the greatest integer less than or equal to $x$.',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'The sum of the squares of $50$ consecutive odd integers is $300850$. Find the largest odd integer whose square is the last term of this sum.',
          answer: '$121$',
          principle: 'Center the $50$ consecutive odd integers symmetrically around their even mean $y$ so odd cross-terms cancel.',
          solution:
            'Let $y$ be the mean of the $50$ consecutive odd integers. Since $50$ is even, $y$ is an even integer and the $50$ consecutive odd integers are\n$$y - 49,\\; y - 47,\\; \\dots,\\; y - 1,\\; y + 1,\\; \\dots,\\; y + 47,\\; y + 49.$$\nPairing symmetric terms $(y - (2k - 1))^2 + (y + (2k - 1))^2 = 2y^2 + 2(2k - 1)^2$ for $k = 1, 2, \\dots, 25$ gives\n$$50y^2 + 2\\sum_{k=1}^{25} (2k - 1)^2 = 300850.$$\nUsing the identity $\\sum_{k=1}^{n} (2k - 1)^2 = \\frac{n(4n^2 - 1)}{3}$ with $n = 25$:\n$$\\sum_{k=1}^{25} (2k - 1)^2 = \\frac{25(4 \\cdot 25^2 - 1)}{3} = \\frac{25 \\cdot 2499}{3} = 25 \\cdot 833 = 20825.$$\nHence\n$$50y^2 + 2(20825) = 300850 \\implies 50y^2 = 300850 - 41650 = 259200 \\implies y^2 = 5184 = 72^2,$$\nso $y = 72$ or $y = -72$. When $y = 72$, the integers are $23, 25, \\dots, 121$ with largest term $121$; when $y = -72$, they are $-121, -119, \\dots, -23$ with largest term $-23$. Therefore, the largest such odd integer is $121$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Find the value of $\\displaystyle \\sum_{k=3}^{1000} \\lfloor \\log_2 k \\rfloor$.',
          answer: '$7986$',
          principle: 'Group integers $k$ by intervals $[2^m, 2^{m+1} - 1]$ on which $\\lfloor \\log_2 k \\rfloor = m$ is constant.',
          solution:
            'For every integer $m \\ge 1$, $\\lfloor \\log_2 k \\rfloor = m$ if and only if $2^m \\le k < 2^{m+1}$, which comprises $2^m$ integers. Note that $2^9 = 512$ and $2^{10} = 1024$.\n\nSplitting the sum by powers of $2$ (and subtracting the missing terms $k = 1001, \\dots, 1023$ in the $m = 9$ block, which are $23$ terms each equal to $9$):\n$$S = \\lfloor \\log_2 3 \\rfloor + \\sum_{m=2}^{9} m \\cdot 2^m - 23 \\cdot 9.$$\nTo evaluate $T = \\sum_{m=1}^{9} m \\cdot 2^m$, subtract $T$ from $2T$:\n$$T = 2T - T = \\sum_{m=1}^{9} m \\cdot 2^{m+1} - \\sum_{m=1}^{9} m \\cdot 2^m = 9 \\cdot 2^{10} - \\sum_{m=1}^{9} 2^m = 9 \\cdot 1024 - (1024 - 2) = 8 \\cdot 1024 + 2 = 8194.$$\nThus $\\sum_{m=2}^{9} m \\cdot 2^m = 8194 - 1 \\cdot 2^1 = 8192$. Since $\\lfloor \\log_2 3 \\rfloor = 1$, we obtain\n$$S = 1 + 8192 - 207 = 7986.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Given that $f(x)$ is a polynomial of degree $2012$, and that $f(k) = \\frac{2}{k}$ for $k = 1, 2, 3, \\dots, 2013$, find the value of $2014 \\times f(2014)$.',
          answer: '$4$',
          principle: 'Clear denominators to form the polynomial $g(x) = x f(x) - 2$, whose roots are $1, 2, \\dots, 2013$.',
          solution:
            'Define $g(x) = x f(x) - 2$. Since $\\deg f = 2012$, $g(x)$ is a polynomial of degree $2013$. From $f(k) = \\frac{2}{k}$ for $k = 1, 2, \\dots, 2013$, we have $g(k) = k f(k) - 2 = 0$ for all $k = 1, 2, \\dots, 2013$. Therefore,\n$$g(x) = \\lambda (x - 1)(x - 2)\\cdots(x - 2013)$$\nfor some constant $\\lambda$. Evaluating at $x = 0$ gives\n$$g(0) = 0 \\cdot f(0) - 2 = -2 = \\lambda (-1)^{2013} \\cdot 2013! = -\\lambda \\cdot 2013!,$$\nso $\\lambda = \\frac{2}{2013!}$. Substituting $x = 2014$ yields\n$$g(2014) = \\frac{2}{2013!} \\cdot (2013 \\cdot 2012 \\cdots 1) = 2.$$\nSince $g(2014) = 2014 f(2014) - 2$, it follows that $2014 f(2014) = 2 + 2 = 4$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Find the total number of sets of positive integers $(x, y, z)$, where $x, y$ and $z$ are positive integers, with $x < y < z$ such that\n$$x + y + z = 203.$$',
          answer: '$3333$',
          principle: 'Count all positive integer triples by stars and bars, subtract triples with repeated entries, and divide by $3!$.',
          solution:
            'By stars and bars, the number of positive integer triples $(x, y, z)$ satisfying $x + y + z = 203$ is\n$$\\binom{203 - 1}{3 - 1} = \\binom{202}{2} = \\frac{202 \\times 201}{2} = 20301.$$\nSince $203$ is not divisible by $3$, there are no solutions with $x = y = z$.\n\nIf $x = y$, then $2x + z = 203$, which gives $z = 203 - 2x \\ge 1$ for $x = 1, 2, \\dots, 101$, yielding $101$ solutions. By symmetry, there are $101$ solutions with $x = z$ and $101$ solutions with $y = z$ (all pairwise disjoint because $x = y = z$ is impossible).\n\nThus, the number of solutions with $x, y, z$ all distinct is $20301 - 3(101) = 19998$. Every set of three distinct positive integers corresponds to $3! = 6$ ordered triples, exactly one of which satisfies $x < y < z$. Hence the required count is\n$$\\frac{19998}{6} = 3333.$$',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'There are a few integers $n$ such that $n^2 + n + 1$ divides $n^{2013} + 61$. Find the sum of the squares of these integers.',
          answer: '$62$',
          principle: 'Use $(n^2 + n + 1) \\mid (n^3 - 1) \\mid (n^{2013} - 1)$ to reduce the divisibility condition to divisors of $62$.',
          solution:
            'Since $n^3 - 1 = (n - 1)(n^2 + n + 1)$ and $2013 = 3 \\times 671$, we have\n$$(n^2 + n + 1) \\mid (n^3 - 1) \\mid \\left((n^3)^{671} - 1\\right) = n^{2013} - 1.$$\nWriting $n^{2013} + 61 = (n^{2013} - 1) + 62$, it follows that $(n^2 + n + 1) \\mid (n^{2013} + 61)$ if and only if $(n^2 + n + 1) \\mid 62$.\n\nBecause $n^2 + n + 1 = \\left(n + \\frac{1}{2}\\right)^2 + \\frac{3}{4} > 0$, $n^2 + n + 1$ must be a positive divisor of $62$, namely $1, 2, 31$, or $62$:\n- $n^2 + n + 1 = 1 \\implies n(n + 1) = 0 \\implies n = 0, -1$.\n- $n^2 + n + 1 = 2 \\implies n^2 + n - 1 = 0$, whose discriminant $1 + 4 = 5$ is not a square (no integer solutions).\n- $n^2 + n + 1 = 31 \\implies n^2 + n - 30 = (n + 6)(n - 5) = 0 \\implies n = 5, -6$.\n- $n^2 + n + 1 = 62 \\implies n^2 + n - 61 = 0$, whose discriminant $1 + 244 = 245$ is not a square (no integer solutions).\n\nThus the valid integers are $n \\in \\{0, -1, 5, -6\\}$, and the sum of their squares is\n$$0^2 + (-1)^2 + 5^2 + (-6)^2 = 0 + 1 + 25 + 36 = 62.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Determine the largest even positive integer which cannot be expressed as the sum of two composite odd positive integers.',
          answer: '$38$',
          principle: 'Partition even integers $n \\ge 40$ by residue modulo $3$ using the composite odd numbers $15, 25, 35$.',
          solution:
            'Observe that $15 \\equiv 0 \\pmod 3$, $25 \\equiv 1 \\pmod 3$, and $35 \\equiv 2 \\pmod 3$ are all composite odd positive integers.\n\nLet $n$ be any even integer with $n > 38$, so $n \\ge 40$. Consider the three odd integers $n - 15$, $n - 25$, and $n - 35$. Since $n \\ge 40$, each of these three integers is at least $5$. Moreover, because $15, 25, 35$ cover all three residue classes modulo $3$, at least one of $n - 15$, $n - 25$, $n - 35$ is divisible by $3$. Since it is strictly greater than $3$, that number is an odd multiple of $3$ at least $9$, hence composite. Thus every even integer $n \\ge 40$ is a sum of two composite odd positive integers.\n\nFinally, check $n = 38$. The composite odd positive integers less than $38$ are $9, 15, 21, 25, 27, 33, 35$, and subtracting each from $38$ gives\n$$38 - 9 = 29,\\; 38 - 15 = 23,\\; 38 - 21 = 17,\\; 38 - 25 = 13,\\; 38 - 27 = 11,\\; 38 - 33 = 5,\\; 38 - 35 = 3,$$\nall of which are prime. Hence $38$ is the largest such even integer.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'The lengths of the sides of a triangle are successive terms of a geometric progression. Let $A$ and $C$ be the smallest and largest interior angles of the triangle respectively. If the shortest side has length $16\\text{ cm}$ and\n$$\\frac{\\sin A - 2\\sin B + 3\\sin C}{\\sin C - 2\\sin B + 3\\sin A} = \\frac{19}{9},$$\nfind the perimeter of the triangle in centimetres.',
          answer: '$76$',
          principle: 'Apply the Law of Sines to replace $\\sin A : \\sin B : \\sin C$ by the geometric side ratio $1 : r : r^2$.',
          solution:
            'Let the sides opposite angles $A, B, C$ be $16, 16r, 16r^2$ in centimetres, where $r \\ge 1$. If $r = 1$, the given ratio equals $\\frac{2}{2} = 1 \\ne \\frac{19}{9}$, so $r > 1$.\n\nBy the Law of Sines, $\\sin A : \\sin B : \\sin C = 16 : 16r : 16r^2 = 1 : r : r^2$. Substituting into the given equation gives\n$$\\frac{1 - 2r + 3r^2}{r^2 - 2r + 3} = \\frac{19}{9}.$$\nCross-multiplying:\n$$9(3r^2 - 2r + 1) = 19(r^2 - 2r + 3) \\implies 27r^2 - 18r + 9 = 19r^2 - 38r + 57 \\implies 8r^2 + 20r - 48 = 0.$$\nDividing by $4$ gives $2r^2 + 5r - 12 = (2r - 3)(r + 4) = 0$. Since $r > 1$, we obtain $r = \\frac{3}{2}$ (note that $1 + \\frac{3}{2} = \\frac{5}{2} > \\frac{9}{4}$, so the triangle inequality holds). Thus the perimeter is\n$$16\\left(1 + \\frac{3}{2} + \\frac{9}{4}\\right) = 16 \\cdot \\frac{19}{4} = 76\\text{ cm}.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Find the least positive integral value of $n$ for which the equation\n$$x_1^3 + x_2^3 + \\cdots + x_n^3 = 2002^{2002}$$\nhas integer solutions $(x_1, x_2, x_3, \\dots, x_n)$.',
          answer: '$4$',
          principle: 'Test cubic residues modulo $9$ to establish a lower bound $n \\ge 4$, then construct an explicit $4$-cube representation.',
          solution:
            'First reduce $2002^{2002}$ modulo $9$. Since $2002 \\equiv 2 + 0 + 0 + 2 = 4 \\pmod 9$, $4^3 = 64 \\equiv 1 \\pmod 9$, and $2002 = 3 \\times 667 + 1$, we have\n$$2002^{2002} \\equiv 4^{3 \\cdot 667 + 1} = (4^3)^{667} \\cdot 4 \\equiv 4 \\pmod 9.$$\nFor any integer $x$, $x^3 \\equiv -1, 0$, or $1 \\pmod 9$. Thus a sum of $n$ cubes can only yield residues in $\\{-n, \\dots, n\\} \\pmod 9$. For $n = 1, 2, 3$, the reachable residues modulo $9$ lie in $\\{-3, -2, -1, 0, 1, 2, 3\\} \\pmod 9$, none of which is congruent to $4 \\pmod 9$. Hence $n \\ge 4$.\n\nTo show $n = 4$ is attainable, note that $2002 = 10^3 + 10^3 + 1^3 + 1^3$. Multiplying by $2002^{2001} = (2002^{667})^3$ yields\n$$2002^{2002} = \\left(10 \\cdot 2002^{667}\\right)^3 + \\left(10 \\cdot 2002^{667}\\right)^3 + \\left(2002^{667}\\right)^3 + \\left(2002^{667}\\right)^3.$$\nTherefore, the least positive integer $n$ is $4$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Let $\\alpha_n$ be a real root of the cubic equation $nx^3 + 2x - n = 0$, where $n$ is a positive integer. If $\\beta_n = \\lfloor (n + 1)\\alpha_n \\rfloor$ for $n = 2, 3, 4, \\dots$, find the value of\n$$\\frac{1}{1006} \\sum_{k=2}^{2013} \\beta_k.$$',
          answer: '$2015$',
          principle: 'Use monotonicity of $f_n(x) = nx^3 + 2x - n$ to trap $\\alpha_n$ in the open interval $\\left(\\frac{n}{n+1}, 1\\right)$.',
          solution:
            'Let $f_n(x) = nx^3 + 2x - n$. For each integer $n \\ge 2$, $f_n\'(x) = 3nx^2 + 2 > 0$ for all $x \\in \\mathbb{R}$, so $f_n$ is strictly increasing and $\\alpha_n$ is its unique real root.\n\nEvaluating $f_n$ at $x = \\frac{n}{n+1}$ and $x = 1$ gives\n$$f_n\\!\\left(\\frac{n}{n+1}\\right) = \\frac{n^4}{(n+1)^3} + \\frac{2n}{n+1} - n = \\frac{n\\left(n^3 + 2(n+1)^2 - (n+1)^3\\right)}{(n+1)^3} = \\frac{n(-n^2 + n + 1)}{(n+1)^3}.$$\nFor all $n \\ge 2$, $-n^2 + n + 1 = 1 - n(n - 1) \\le -1 < 0$, so $f_n\\!\\left(\\frac{n}{n+1}\\right) < 0$. Meanwhile, $f_n(1) = n + 2 - n = 2 > 0$. By strict monotonicity,\n$$\\frac{n}{n+1} < \\alpha_n < 1 \\implies n < (n+1)\\alpha_n < n + 1,$$\nso $\\beta_n = \\lfloor (n+1)\\alpha_n \\rfloor = n$ for all $n \\ge 2$. Consequently,\n$$\\frac{1}{1006} \\sum_{k=2}^{2013} \\beta_k = \\frac{1}{1006} \\sum_{k=2}^{2013} k = \\frac{1}{1006} \\cdot \\frac{2012(2 + 2013)}{2} = 2015.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Suppose the real numbers $x$ and $y$ satisfy the equations\n$$x^3 - 3x^2 + 5x = 1 \\quad \\text{and} \\quad y^3 - 3y^2 + 5y = 5.$$\nFind $x + y$.',
          answer: '$2$',
          principle: 'Depress the cubics by substituting $u = x - 1$ and $v = y - 1$ to expose odd symmetry around $1$.',
          solution:
            'Notice that $(t - 1)^3 + 2(t - 1) + 3 = t^3 - 3t^2 + 3t - 1 + 2t - 2 + 3 = t^3 - 3t^2 + 5t$. Thus the two equations become\n$$(x - 1)^3 + 2(x - 1) = -2 \\quad \\text{and} \\quad (y - 1)^3 + 2(y - 1) = 2.$$\nLet $u = x - 1$ and $v = y - 1$. Adding the two equations gives\n$$u^3 + v^3 + 2(u + v) = 0 \\implies (u + v)\\left(u^2 - uv + v^2 + 2\\right) = 0.$$\nSince\n$$u^2 - uv + v^2 + 2 = \\left(u - \\frac{v}{2}\\right)^2 + \\frac{3}{4}v^2 + 2 \\ge 2 > 0$$\nfor all real $u, v$, we must have $u + v = 0$. Therefore $(x - 1) + (y - 1) = 0$, which gives $x + y = 2$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'The product of two of the four roots of the quartic equation $x^4 - 18x^3 + kx^2 + 200x - 1984 = 0$ is $-32$. Determine the value of $k$.',
          answer: '$86$',
          principle: 'Group the four roots into pairs $(a, b)$ and $(c, d)$ using Vieta\'s formulas.',
          solution:
            'Let the four roots be $a, b, c, d$ with $ab = -32$. By Vieta\'s formulas:\n$$a + b + c + d = 18, \\qquad ab + ac + ad + bc + bd + cd = k,$$\n$$abc + abd + acd + bcd = -200, \\qquad abcd = -1984.$$\nFrom $ab = -32$ and $abcd = -1984$, we find $cd = \\frac{-1984}{-32} = 62$. Rewriting the degree-$3$ symmetric sum gives\n$$ab(c + d) + cd(a + b) = -200 \\implies -32(c + d) + 62(a + b) = -200.$$\nSubstituting $c + d = 18 - (a + b)$ yields\n$$-32(18 - (a + b)) + 62(a + b) = -200 \\implies -576 + 94(a + b) = -200 \\implies 94(a + b) = 376,$$\nso $a + b = 4$ and $c + d = 14$. Therefore,\n$$k = ab + cd + (a + b)(c + d) = -32 + 62 + 4 \\cdot 14 = 30 + 56 = 86.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Given that $f$ is a real-valued function on the set of all real numbers such that for any real numbers $a$ and $b$,\n$$f(a f(b)) = ab.$$\nFind the value of $f(2011)$.',
          answer: '$2011$ or $-2011$ (official contest key: $2011$)',
          principle: 'Substitute $a = f(1)$ and swap roles with $b$ to prove $f(x) = f(1)x$, then evaluate at $a = b = 1$.',
          solution:
            'Setting $a = f(1)$ in $f(a f(b)) = ab$ gives $f(f(1)f(b)) = f(1)b$. On the other hand, replacing $(a, b)$ with $(f(b), 1)$ gives $f(f(b)f(1)) = f(b) \\cdot 1 = f(b)$. Comparing the two expressions yields\n$$f(b) = f(1)b \\quad \\text{for all } b \\in \\mathbb{R}.$$\nSetting $a = b = 1$ in the original equation gives $f(f(1)) = 1$, while setting $b = f(1)$ in $f(b) = f(1)b$ gives $f(f(1)) = (f(1))^2$. Hence $(f(1))^2 = 1$, so $f(1) = 1$ or $f(1) = -1$.\n\nChecking both cases shows that $f(x) = x$ gives $f(a f(b)) = ab$ and $f(x) = -x$ also gives $f(a f(b)) = f(-ab) = ab$ for all $a, b \\in \\mathbb{R}$. Thus $f(2011) = 2011$ or $f(2011) = -2011$ (the official SMO 2012 solution selects $f(1) = 1$ and lists $2011$).',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'The solutions to the equation $x^3 - 4\\lfloor x \\rfloor = 5$, where $x$ is a real number, are denoted by $x_1, x_2, x_3, \\dots, x_k$ for some positive integer $k$. Find $\\displaystyle \\sum_{i=1}^{k} x_i^3$.',
          answer: '$10$',
          principle: 'Let $n = \\lfloor x \\rfloor \\in \\mathbb{Z}$ and test the interval condition $n^3 \\le 4n + 5 < (n+1)^3$.',
          solution:
            'Let $n = \\lfloor x \\rfloor \\in \\mathbb{Z}$, so $n \\le x < n + 1$ and $x^3 = 4n + 5$. A real solution exists in $[n, n+1)$ if and only if $n^3 \\le 4n + 5 < (n+1)^3$:\n- For $n \\ge 3$: $n^3 - (4n + 5) = (n - 3)(n^2 + 3n + 5) + 10 > 0$, so $4n + 5 < n^3$, giving no solution.\n- For $n = 2$: $x^3 = 13$, and since $2^3 = 8 \\le 13 < 27 = 3^3$, $x = \\sqrt[3]{13} \\in [2, 3)$ is a valid solution.\n- For $n = 1$: $x^3 = 9 > 8 = 2^3$, contradiction.\n- For $n = 0$: $x^3 = 5 > 1 = 1^3$, contradiction.\n- For $n = -1$: $x^3 = 1 \\implies x = 1$, contradicting $\\lfloor x \\rfloor = -1$.\n- For $n = -2$: $x^3 = -3$, and since $(-2)^3 = -8 \\le -3 < -1 = (-1)^3$, $x = -\\sqrt[3]{3} \\in [-2, -1)$ is a valid solution.\n- For $n \\le -3$: write $m = -n \\ge 3$; then $(m - 1)^3 - (4m - 5) = (m - 3)(m^2 + 3) + 6 > 0$, so $4n + 5 = 5 - 4m > -(m - 1)^3 = (n + 1)^3$, giving no solution.\n\nHence the only solutions are $x_1 = -\\sqrt[3]{3}$ and $x_2 = \\sqrt[3]{13}$, and\n$$\\sum_{i=1}^{2} x_i^3 = -3 + 13 = 10.$$\n(Note: the raw archive header misprints `19`, while the official solution itself computes $-3 + 13 = 10$.)',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Determine the maximum integer solution of the equation\n$$\\left\\lfloor \\frac{x}{1!} \\right\\rfloor + \\left\\lfloor \\frac{x}{2!} \\right\\rfloor + \\left\\lfloor \\frac{x}{3!} \\right\\rfloor + \\cdots + \\left\\lfloor \\frac{x}{10!} \\right\\rfloor = 1001.$$',
          answer: '$584$',
          principle: 'Bound $0 < x < 6!$ by monotonicity and expand $x$ in the factorial base.',
          solution:
            'Let $S(x) = \\sum_{k=1}^{10} \\lfloor \\frac{x}{k!} \\rfloor$. Clearly $S(x)$ is non-decreasing in $x$, $S(x) \\le 0$ for $x \\le 0$, and $S(6!) > \\frac{720}{1!} + \\frac{720}{2!} = 1080 > 1001$. Thus any integer solution satisfies $0 < x < 6!$, so $\\lfloor \\frac{x}{k!} \\rfloor = 0$ for $k \\ge 6$.\n\nWrite $x$ in factorial base:\n$$x = a \\cdot 5! + b \\cdot 4! + c \\cdot 3! + d \\cdot 2! + e \\cdot 1!,$$\nwhere $a, b, c, d, e$ are integers with $0 \\le a \\le 5$, $0 \\le b \\le 4$, $0 \\le c \\le 3$, $0 \\le d \\le 2$, and $0 \\le e \\le 1$. Because $b \\cdot 4! + c \\cdot 3! + d \\cdot 2! + e < 5!$ (and similarly for lower factorials), the floor sum evaluates to\n$$S(x) = (1 + 5 + 20 + 60 + 120)a + (1 + 4 + 12 + 24)b + (1 + 3 + 6)c + (1 + 2)d + e = 206a + 41b + 10c + 3d + e.$$\nSince $41b + 10c + 3d + e \\le 41(4) + 10(3) + 3(2) + 1 = 201$, we must have $1001 - 201 \\le 206a \\le 1001$, so $a = 4$ and $41b + 10c + 3d + e = 1001 - 824 = 177$.\n\nNext, $10c + 3d + e \\le 37$ implies $140 \\le 41b \\le 177$, so $b = 4$ and $10c + 3d + e = 177 - 164 = 13$. Continuing, $3d + e \\le 7$ forces $c = 1$ and $3d + e = 3$, and $e \\in \\{0, 1\\}$ forces $d = 1, e = 0$. Therefore,\n$$x = 4 \\cdot 120 + 4 \\cdot 24 + 1 \\cdot 6 + 1 \\cdot 2 + 0 = 584,$$\nwhich is the unique (and hence maximum) integer solution.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Let $A, B, C$ be the three angles of a triangle. Let $L$ be the maximum value of\n$$\\sin 3A + \\sin 3B + \\sin 3C.$$\nDetermine $\\lfloor 10L \\rfloor$.',
          answer: '$25$',
          principle: 'Split by whether the largest angle $C$ exceeds $120^\\circ$, use concavity of $\\sin$ on $[0, 180^\\circ]$, and bound $10L$ via consecutive squares.',
          solution:
            'Without loss of generality, assume $A \\le B \\le C$, so $C \\ge 60^\\circ$ and $A + B + C = 180^\\circ$.\n- Case 1 ($60^\\circ \\le C \\le 120^\\circ$): Then $180^\\circ \\le 3C \\le 360^\\circ$, so $\\sin 3C \\le 0$, giving\n$$\\sin 3A + \\sin 3B + \\sin 3C \\le 1 + 1 + 0 = 2.$$\n- Case 2 ($120^\\circ < C < 180^\\circ$): Set $X = 3A$, $Y = 3B$, and $Z = 3C - 360^\\circ$. Since $A + B = 180^\\circ - C < 60^\\circ$, we have $X, Y, Z \\in (0^\\circ, 180^\\circ)$ with $X + Y + Z = 3(A + B + C) - 360^\\circ = 180^\\circ$ and $\\sin 3C = \\sin Z$. Because $\\sin t$ is strictly concave on $[0^\\circ, 180^\\circ]$, Jensen\'s inequality yields\n$$\\sin X + \\sin Y + \\sin Z \\le 3\\sin\\left(\\frac{X + Y + Z}{3}\\right) = 3\\sin 60^\\circ = \\frac{3\\sqrt{3}}{2},$$\nwith equality when $X = Y = Z = 60^\\circ$, i.e., $A = B = 20^\\circ$ and $C = 140^\\circ$.\n\nSince $\\left(\\frac{3\\sqrt{3}}{2}\\right)^2 = \\frac{27}{4} > 4 = 2^2$, we have $\\frac{3\\sqrt{3}}{2} > 2$, so $L = \\frac{3\\sqrt{3}}{2}$ and $10L = 15\\sqrt{3}$. Squaring gives $(15\\sqrt{3})^2 = 225 \\times 3 = 675$. Comparing with consecutive perfect squares,\n$$25^2 = 625 < 675 < 676 = 26^2 \\implies 25 < 15\\sqrt{3} < 26,$$\nand therefore $\\lfloor 10L \\rfloor = 25$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Determine the number of sets of solutions $(x, y, z)$, where $x, y$ and $z$ are integers, of the equation\n$$x^2 + y^2 + z^2 = x^2 y^2.$$',
          answer: '$1$',
          principle: 'Apply infinite descent modulo $4$ on the squares of $x, y, z$.',
          solution:
            'Clearly $(x, y, z) = (0, 0, 0)$ is a solution. Suppose there were a nonzero integer solution $(x, y, z)$, and let $2^k$ ($k \\ge 0$) be the highest power of $2$ dividing $\\gcd(x, y, z)$. Write $x = 2^k x\'$, $y = 2^k y\'$, $z = 2^k z\'$, where at least one of $x\', y\', z\'$ is odd. Substituting into $x^2 + y^2 + z^2 = x^2 y^2$ and dividing by $2^{2k}$ gives\n$$x\'^2 + y\'^2 + z\'^2 = 2^{2k} x\'^2 y\'^2.$$\nRecall that any integer square is congruent to $0$ or $1 \\pmod 4$.\n- If $k \\ge 1$, the right-hand side is divisible by $4$, so $x\'^2 + y\'^2 + z\'^2 \\equiv 0 \\pmod 4$. This forces $x\'^2 \\equiv y\'^2 \\equiv z\'^2 \\equiv 0 \\pmod 4$, meaning $x\', y\', z\'$ are all even, a contradiction.\n- If $k = 0$, we have $x\'^2 + y\'^2 + z\'^2 = x\'^2 y\'^2$. If $x\'$ and $y\'$ are both odd, then $x\'^2 y\'^2 \\equiv 1 \\pmod 4$, forcing $z\'^2 \\equiv 1 - 1 - 1 \\equiv 3 \\pmod 4$, impossible. If exactly one of $x\', y\'$ is odd, then $x\'^2 y\'^2 \\equiv 0 \\pmod 4$, forcing $z\'^2 \\equiv 3 \\pmod 4$, again impossible. Thus $x\'$ and $y\'$ must both be even, which forces $z\'^2 \\equiv 0 \\pmod 4$ so $z\'$ is also even, contradicting $k = 0$.\n\nHence $(0, 0, 0)$ is the unique integer solution, so there is $1$ solution.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'We can find sets of $13$ distinct positive integers that add up to $2142$. Find the largest possible greatest common divisor of these $13$ distinct positive integers.',
          answer: '$21$',
          principle: 'Factor out $d = \\gcd$ so $d S = 2142$ and minimize the sum $S \\ge 1 + 2 + \\cdots + 13 = 91$ among divisors of $2142$.',
          solution:
            'Let $d$ be the greatest common divisor of the $13$ distinct positive integers, and write the integers as $da_1, da_2, \\dots, da_{13}$, where $a_1 < a_2 < \\cdots < a_{13}$ are distinct positive integers with $\\gcd(a_1, \\dots, a_{13}) = 1$. Let $S = a_1 + a_2 + \\cdots + a_{13}$. Then $dS = 2142$, so maximizing $d$ is equivalent to minimizing $S$ among divisors of $2142$.\n\nSince $a_1, \\dots, a_{13}$ are distinct positive integers,\n$$S \\ge 1 + 2 + \\cdots + 13 = \\frac{13 \\times 14}{2} = 91.$$\nFactorizing $2142 = 2 \\times 3^2 \\times 7 \\times 17$: divisors of $2142$ not divisible by $17$ divide $126$ (whose divisors around $91$ are $63$ and $126$), while multiples of $17$ dividing $2142$ include $17, 34, 51, 102$. Thus the smallest divisor of $2142$ that is at least $91$ is $S = 102$, which gives $d = \\frac{2142}{102} = 21$.\n\nThis is achievable with $(a_1, \\dots, a_{12}, a_{13}) = (1, 2, \\dots, 12, 24)$, whose sum is $78 + 24 = 102$ and $\\gcd$ is $1$. Hence the largest possible $\\gcd$ is $21$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Determine the maximum number of different sets consisting of three terms which form an arithmetic progression that can be chosen from a sequence of real numbers $a_1, a_2, \\dots, a_{101}$, where $a_1 < a_2 < \\cdots < a_{101}$.',
          answer: '$2500$',
          principle: 'Fix the middle term $a_i$ of each $3$-term arithmetic progression and count choices of the shorter side, then exhibit $a_k = k$.',
          solution:
            'Let $\\{a_s, a_i, a_t\\}$ with $1 \\le s < i < t \\le 101$ be a $3$-term arithmetic progression, so $a_s + a_t = 2a_i$ and $2 \\le i \\le 100$. Because the sequence is strictly increasing, specifying $i$ and either $s$ or $t$ uniquely determines the remaining term.\n- If $2 \\le i \\le 51$, there are at most $i - 1$ choices for $s \\in \\{1, 2, \\dots, i - 1\\}$.\n- If $52 \\le i \\le 100$, there are at most $101 - i$ choices for $t \\in \\{i + 1, i + 2, \\dots, 101\\}$.\n\nSumming over all $i$ gives an upper bound of\n$$\\sum_{i=2}^{51} (i - 1) + \\sum_{i=52}^{100} (101 - i) = (1 + 2 + \\cdots + 50) + (49 + 48 + \\cdots + 1) = \\frac{50 \\cdot 51}{2} + \\frac{49 \\cdot 50}{2} = 1275 + 1225 = 2500.$$\nEquality is attained by the sequence $a_k = k$ ($1 \\le k \\le 101$): for $1 \\le s < i \\le 51$, $2i - s \\in [i + 1, 101]$ is in the sequence, and for $52 \\le i < t \\le 101$, $2i - t \\in [1, i - 1]$ is in the sequence. Thus the maximum is $2500$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Find the value of the series\n$$\\sum_{k=0}^{\\infty} \\left\\lfloor \\frac{20121 + 2^k}{2^{k+1}} \\right\\rfloor.$$',
          answer: '$20121$',
          principle: 'Apply Hermite\'s identity $\\lfloor x + \\frac{1}{2} \\rfloor = \\lfloor 2x \\rfloor - \\lfloor x \\rfloor$ to turn the series into a telescoping sum.',
          solution:
            'For any real number $x$, write $x = \\lfloor x \\rfloor + \\{x\\}$ with $0 \\le \\{x\\} < 1$. If $0 \\le \\{x\\} < \\frac{1}{2}$, then $\\lfloor x + \\frac{1}{2} \\rfloor = \\lfloor x \\rfloor$ and $\\lfloor 2x \\rfloor = 2\\lfloor x \\rfloor$; if $\\frac{1}{2} \\le \\{x\\} < 1$, then $\\lfloor x + \\frac{1}{2} \\rfloor = \\lfloor x \\rfloor + 1$ and $\\lfloor 2x \\rfloor = 2\\lfloor x \\rfloor + 1$. In both cases,\n$$\\left\\lfloor x + \\frac{1}{2} \\right\\rfloor = \\lfloor 2x \\rfloor - \\lfloor x \\rfloor.$$\nSetting $x = \\frac{20121}{2^{k+1}}$ gives\n$$\\left\\lfloor \\frac{20121 + 2^k}{2^{k+1}} \\right\\rfloor = \\left\\lfloor \\frac{20121}{2^{k+1}} + \\frac{1}{2} \\right\\rfloor = \\left\\lfloor \\frac{20121}{2^k} \\right\\rfloor - \\left\\lfloor \\frac{20121}{2^{k+1}} \\right\\rfloor.$$\nSumming from $k = 0$ to $N$ telescopes to\n$$\\sum_{k=0}^{N} \\left\\lfloor \\frac{20121 + 2^k}{2^{k+1}} \\right\\rfloor = \\left\\lfloor \\frac{20121}{2^0} \\right\\rfloor - \\left\\lfloor \\frac{20121}{2^{N+1}} \\right\\rfloor = 20121 - \\left\\lfloor \\frac{20121}{2^{N+1}} \\right\\rfloor.$$\nFor $N \\ge 14$ ($2^{N+1} \\ge 32768 > 20121$), all remaining terms are $0$, so the infinite series converges to $20121$.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Determine the maximum value of the following expression\n$$\\left| \\cdots \\left|\\left| x_1 - x_2 \\right| - x_3\\right| - x_4 \\cdots - x_{2014} \\right|,$$\nwhere $x_1, x_2, \\dots, x_{2014}$ are distinct numbers in the set $\\{1, 2, 3, 4, \\dots, 2014\\}$.',
          answer: '$2013$',
          principle: 'Show the result lies in $[0, 2014]$ with the same odd parity as $\\sum_{i=1}^{2014} i$, then construct an ordering achieving $2013$.',
          solution:
            'Define $S_1 = x_1$ and $S_k = |S_{k-1} - x_k|$ for $k = 2, 3, \\dots, 2014$. By induction, $0 \\le S_k \\le 2014$ for all $k$: indeed $0 \\le S_1 \\le 2014$, and if $0 \\le S_{k-1} \\le 2014$ and $1 \\le x_k \\le 2014$, then $-2014 \\le S_{k-1} - x_k \\le 2014$, so $0 \\le S_k \\le 2014$.\n\nMoreover, $|a - b| \\equiv a + b \\pmod 2$ for all integers $a, b$, so by induction\n$$S_{2014} \\equiv x_1 + x_2 + \\cdots + x_{2014} = \\frac{2014 \\times 2015}{2} = 1007 \\times 2015 \\equiv 1 \\pmod 2.$$\nBecause $S_{2014}$ is odd and at most $2014$, we must have $S_{2014} \\le 2013$.\n\nTo achieve $2013$, note that starting from $S = 0$ and processing the four numbers $4k + 2, 4k + 4, 4k + 5, 4k + 3$ in that order yields\n$$|0 - (4k + 2)| = 4k + 2,\\; |(4k + 2) - (4k + 4)| = 2,\\; |2 - (4k + 5)| = 4k + 3,\\; |(4k + 3) - (4k + 3)| = 0.$$\nApplying this block for $k = 0, 1, \\dots, 502$ consumes all integers in $\\{2, 3, \\dots, 2013\\}$ and returns to $0$. Finally, using $x_{2013} = 2014$ and $x_{2014} = 1$ gives $|0 - 2014| = 2014$ and $|2014 - 1| = 2013$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Evaluate\n$$-\\frac{1}{2^{2011}} \\sum_{k=0}^{1006} (-1)^k 3^k \\binom{2012}{2k}.$$',
          answer: '$1$',
          principle: 'Extract the sum as the real part of $(1 + i\\sqrt{3})^{2012}$ and evaluate it using De Moivre\'s theorem.',
          solution:
            'Consider $z = 1 + i\\sqrt{3} = 2\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$. By the Binomial Theorem,\n$$(1 + i\\sqrt{3})^{2012} = \\sum_{j=0}^{2012} \\binom{2012}{j} (i\\sqrt{3})^j.$$\nBecause $(i\\sqrt{3})^{2k} = (-3)^k = (-1)^k 3^k$ is real while $(i\\sqrt{3})^{2k+1}$ is purely imaginary, taking the real part gives\n$$\\operatorname{Re}\\!\\left((1 + i\\sqrt{3})^{2012}\\right) = \\sum_{k=0}^{1006} (-1)^k 3^k \\binom{2012}{2k}.$$\nOn the other hand, by De Moivre\'s Theorem,\n$$\\operatorname{Re}\\!\\left((1 + i\\sqrt{3})^{2012}\\right) = 2^{2012} \\cos\\frac{2012\\pi}{3}.$$\nSince $2012 = 6 \\times 335 + 2$, we have $\\frac{2012\\pi}{3} = 670\\pi + \\frac{2\\pi}{3}$, so $\\cos\\frac{2012\\pi}{3} = \\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$. Therefore,\n$$-\\frac{1}{2^{2011}} \\sum_{k=0}^{1006} (-1)^k 3^k \\binom{2012}{2k} = -\\frac{1}{2^{2011}} \\cdot 2^{2012}\\left(-\\frac{1}{2}\\right) = 1.$$',
          rubric: OK
        }
      ]
    }
  ]
};
