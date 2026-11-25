/**
 * Paket Soal Terstruktur: SMO 2012 Senior Section (First Round) — 28 of 35 problems included.
 * Source: scraped_raw/smo-senior-2012.md (Singapore Mathematical Society — SMO 2012 Senior Section First Round).
 * Included: Multiple Choice Q1-Q4, Q6-Q8, Q10 (8 problems) and Short Questions Q11-Q18, Q20-Q25, Q27, Q29-Q33 (20 problems).
 * Skipped 7 problems due to missing diagrams or unreadable/missing OCR formulas: Q5, Q9, Q19, Q26, Q28, Q34, Q35.
 */
const OK = [{ code: 'A1', text: 'Correct final answer with valid supporting reasoning.' }];

export default {
  id: 'smo-senior-2012',
  slug: 'smo-senior-2012',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'SMO 2012 Senior Section (First Round)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SMO',
  title: 'SMO Senior — 2012 (First Round)',
  totalMarks: 28,
  instructions:
    'This practice set includes 28 of the 35 problems from the SMO 2012 Senior Section (First Round), preserving original problem numbers: 8 Multiple Choice Questions (Q1-Q4, Q6-Q8, Q10) and 20 Short Questions (Q11-Q18, Q20-Q25, Q27, Q29-Q33), each worth 1 mark (28 marks total). Seven problems from the archive are skipped due to missing diagrams or unreadable/missing OCR formulas: Q5 (unreadable OCR options), Q9 (missing option D and diagram fragment), Q19 (corrupted OCR equations), Q26 (missing diagram; point $E$ is undefined in text), Q28 (unreadable OCR magnitude and angle), Q34 (missing target expression in OCR), and Q35 (missing target series in OCR). Throughout this paper, $\\lfloor x \\rfloor$ denotes the greatest integer less than or equal to $x$, and calculators are not allowed.',
  source: {
    org: 'Singapore Mathematical Society — SMO Senior',
    file: 'scraped_raw/smo-senior-2012.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice Questions',
      marks: 8,
      stem: 'Choose the correct option (A, B, C, D, or E) for each of the 8 included multiple-choice questions (1 mark each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Suppose $\\alpha$ and $\\beta$ are real numbers that satisfy the equation\n$$x^2 + \\left(2\\sqrt{\\sqrt{2}+1}\\right)x + \\sqrt{\\sqrt{2}+1} = 0.$$\nFind the value of $\\frac{1}{\\alpha^3} + \\frac{1}{\\beta^3}$.\n\nA. $3\\sqrt{\\sqrt{2}+1}(\\sqrt{2}-1) - 8$\nB. $8 - 6\\sqrt{\\sqrt{2}+1}(\\sqrt{2}-1)$\nC. $3\\sqrt{\\sqrt{2}+1}(\\sqrt{2}-1) + 8$\nD. $6\\sqrt{\\sqrt{2}+1}(\\sqrt{2}-1) - 8$\nE. None of the above',
          answer: 'D. $6\\sqrt{\\sqrt{2}+1}(\\sqrt{2}-1) - 8$',
          principle: 'Vieta\'s formulas together with the symmetric sum identity $\\frac{1}{\\alpha^3} + \\frac{1}{\\beta^3} = \\frac{(\\alpha+\\beta)^3 - 3\\alpha\\beta(\\alpha+\\beta)}{(\\alpha\\beta)^3}$ and rationalization of $\\sqrt{2}+1$.',
          solution:
            'Let $u = \\sqrt{\\sqrt{2}+1} > 1$, so $u^2 = \\sqrt{2}+1$ and $\\frac{1}{u^2} = \\frac{1}{\\sqrt{2}+1} = \\sqrt{2}-1$. Notice the discriminant is $4u^2 - 4u = 4u(u-1) > 0$, so $\\alpha$ and $\\beta$ are indeed real and nonzero.\nBy Vieta\'s formulas,\n$$\\alpha + \\beta = -2u \\quad \\text{and} \\quad \\alpha\\beta = u.$$\nTherefore,\n$$\\frac{1}{\\alpha^3} + \\frac{1}{\\beta^3} = \\frac{\\alpha^3 + \\beta^3}{(\\alpha\\beta)^3} = \\frac{(\\alpha+\\beta)^3 - 3\\alpha\\beta(\\alpha+\\beta)}{(\\alpha\\beta)^3} = \\frac{(-2u)^3 - 3u(-2u)}{u^3} = \\frac{-8u^3 + 6u^2}{u^3} = \\frac{6}{u} - 8.$$\nSince $\\frac{1}{u} = \\frac{u}{u^2} = \\sqrt{\\sqrt{2}+1}(\\sqrt{2}-1)$, we obtain\n$$\\frac{1}{\\alpha^3} + \\frac{1}{\\beta^3} = 6\\sqrt{\\sqrt{2}+1}(\\sqrt{2}-1) - 8.$$',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Find the value of\n$$\\frac{2011^2 \\times 2012 - 2013}{2012!} + \\frac{2013^2 \\times 2014 - 2015}{2014!}.$$\n\nA. $\\frac{1}{2009!} + \\frac{1}{2010!} + \\frac{1}{2011!} + \\frac{1}{2012!}$\nB. $\\frac{1}{2009!} + \\frac{1}{2010!} - \\frac{1}{2011!} - \\frac{1}{2012!}$\nC. $\\frac{1}{2009!} + \\frac{1}{2010!} - \\frac{1}{2012!} - \\frac{1}{2013!}$\nD. $\\frac{1}{2009!} + \\frac{1}{2010!} + \\frac{1}{2013!} + \\frac{1}{2014!}$\nE. $\\frac{1}{2009!} + \\frac{1}{2010!} - \\frac{1}{2013!} - \\frac{1}{2014!}$',
          answer: 'E. $\\frac{1}{2009!} + \\frac{1}{2010!} - \\frac{1}{2013!} - \\frac{1}{2014!}$',
          principle: 'Decompose $(n-1)^2 n - (n+1)$ in terms of $n(n-1)(n-2)$, $n(n-1)$, $n$, and $1$ to telescope factorial fractions.',
          solution:
            'For any integer $n \\ge 3$, rewrite the numerator $(n-1)^2 n - (n+1)$ by writing one factor of $(n-1)$ as $(n-2) + 1$:\n$$\\begin{aligned}\n(n-1)^2 n - (n+1) &= n(n-1)((n-2)+1) - n - 1 \\\\\n&= n(n-1)(n-2) + n(n-1) - n - 1.\n\\end{aligned}$$\nDividing by $n!$ gives the identity\n$$\\frac{(n-1)^2 n - (n+1)}{n!} = \\frac{1}{(n-3)!} + \\frac{1}{(n-2)!} - \\frac{1}{(n-1)!} - \\frac{1}{n!}.$$\nApplying this with $n = 2012$ and $n = 2014$ and adding the two results,\n$$\\begin{aligned}\n\\frac{2011^2 \\times 2012 - 2013}{2012!} + \\frac{2013^2 \\times 2014 - 2015}{2014!} &= \\left(\\frac{1}{2009!} + \\frac{1}{2010!} - \\frac{1}{2011!} - \\frac{1}{2012!}\\right) \\\\\n&\\quad + \\left(\\frac{1}{2011!} + \\frac{1}{2012!} - \\frac{1}{2013!} - \\frac{1}{2014!}\\right) \\\\\n&= \\frac{1}{2009!} + \\frac{1}{2010!} - \\frac{1}{2013!} - \\frac{1}{2014!}.\n\\end{aligned}$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'The increasing sequence $T = 2, 3, 5, 6, 7, 8, 10, 11, \\dots$ consists of all positive integers which are not perfect squares. What is the $2012\\text{th}$ term of $T$?\n\nA. $2055$\nB. $2056$\nC. $2057$\nD. $2058$\nE. $2059$',
          answer: 'C. $2057$',
          principle: 'Count how many perfect squares lie at or below a candidate integer $N$: the position of a non-square $N$ in $T$ is $N - \\lfloor\\sqrt{N}\\rfloor$.',
          solution:
            'Notice that $44^2 = 1936$, $45^2 = 2025$, and $46^2 = 2116$. Among the integers $1, 2, \\dots, 2012$, there are $44$ perfect squares ($1^2, 2^2, \\dots, 44^2$), so $2012$ itself is the $(2012 - 44) = 1968\\text{th}$ term of $T$.\nTo reach the $2012\\text{th}$ term, we need $44$ more non-square integers beyond $2012$. However, the interval from $2013$ to $2012 + 44 = 2056$ contains one perfect square, namely $45^2 = 2025$. Including one extra integer gives $2057 < 46^2 = 2116$.\nChecking directly, the number of non-squares in $\\{1, 2, \\dots, 2057\\}$ is $2057 - 45 = 2012$, so the $2012\\text{th}$ term of $T$ is $2057$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Let $O$ be the center of the inscribed circle of triangle $\\triangle ABC$ and $D$ be the point on $AC$ with $OD \\perp AC$. If $AB = 10$, $AC = 9$, and $BC = 11$, find $CD$.\n\nA. $4$\nB. $4.5$\nC. $5$\nD. $5.5$\nE. $6$',
          answer: 'C. $5$',
          principle: 'Two tangents from a vertex to the incircle have equal length; the tangent segment from vertex $C$ has length $s - AB$, where $s$ is the semiperimeter.',
          solution:
            'Because $O$ is the incenter and $OD \\perp AC$ with $D \\in AC$, $D$ is the point of tangency of the incircle with side $AC$. Let $E$ and $F$ be the points of tangency of the incircle with $AB$ and $BC$, respectively.\nBy equal tangents from each vertex to the incircle,\n$$AD = AE, \\quad BE = BF, \\quad CD = CF.$$\nLet $s$ be the semiperimeter of $\\triangle ABC$:\n$$s = \\frac{AB + AC + BC}{2} = \\frac{10 + 9 + 11}{2} = 15.$$\nSince $AB + AC + BC = 2(AE + BE + CD) = 2(AB + CD)$, we have $AB + CD = s$, and hence\n$$CD = s - AB = 15 - 10 = 5.$$',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If the roots of the equation $x^2 + 3x - 1 = 0$ are also the roots of the equation $x^4 + ax^2 + bx + c = 0$, find the value of $a + b + 4c$.\n\nA. $-13$\nB. $-7$\nC. $5$\nD. $7$\nE. $11$',
          answer: 'B. $-7$',
          principle: 'Factor theorem for polynomials: if $x^2 + 3x - 1$ divides $x^4 + ax^2 + bx + c$, compare coefficients of the quotient polynomial.',
          solution:
            'Since $x^2 + 3x - 1 = 0$ has two distinct roots and both are roots of $x^4 + ax^2 + bx + c = 0$, the quadratic $x^2 + 3x - 1$ divides $x^4 + ax^2 + bx + c$. Write the factorization with a monic quadratic quotient whose constant term gives $+c$:\n$$(x^2 + 3x - 1)(x^2 + mx - c) = x^4 + ax^2 + bx + c.$$\nExpanding the left-hand side gives\n$$x^4 + (m + 3)x^3 + (-c + 3m - 1)x^2 + (-3c - m)x + c.$$\nComparing coefficients with $x^4 + ax^2 + bx + c$:\n- Coefficient of $x^3$: $m + 3 = 0 \\implies m = -3$.\n- Coefficient of $x^2$: $a = -c + 3(-3) - 1 = -10 - c$.\n- Coefficient of $x$: $b = -3c - (-3) = 3 - 3c$.\nTherefore,\n$$a + b + 4c = (-10 - c) + (3 - 3c) + 4c = -7.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Find the sum of the digits of all numbers in the sequence $1, 2, 3, 4, \\dots, 1000$.\n\nA. $4501$\nB. $12195$\nC. $13501$\nD. $499500$\nE. None of the above',
          answer: 'C. $13501$',
          principle: 'Pad numbers from $0$ to $999$ with leading zeros to $3$-digit strings so every digit $0$–$9$ appears with equal frequency in each place.',
          solution:
            'Pad all integers from $0$ to $999$ with leading zeros to form $1000$ three-digit strings ($000, 001, \\dots, 999$). Note that $000$ contributes $0$ to the digit sum.\nThere are $1000 \\times 3 = 3000$ total digit positions, and by symmetry each of the $10$ digits $0, 1, \\dots, 9$ appears $\\frac{3000}{10} = 300$ times.\nHence the sum of the digits of all integers from $1$ to $999$ is\n$$300(0 + 1 + 2 + \\dots + 9) = 300 \\times 45 = 13500.$$\nAdding the digit sum of $1000$, which is $1 + 0 + 0 + 0 = 1$, gives\n$$13500 + 1 = 13501.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Find the number of real solutions to the equation\n$$\\frac{x}{100} = \\sin x,$$\nwhere $x$ is measured in radians.\n\nA. $30$\nB. $32$\nC. $62$\nD. $63$\nE. $64$',
          answer: 'D. $63$',
          principle: 'Use $|\\sin x| \\le 1$, exact rational bounds for $\\pi$, concavity of $\\sin x$ on $[2(k-1)\\pi, (2k-1)\\pi]$, and odd symmetry.',
          solution:
            'Since $-1 \\le \\sin x \\le 1$, any solution must satisfy $-100 \\le x \\le 100$. Using the exact bounds $\\frac{25}{8} < \\pi < \\frac{22}{7}$, we have\n$$31\\pi < 31 \\cdot \\frac{22}{7} = \\frac{682}{7} = 97\\frac{3}{7} < 100 < 32 \\cdot \\frac{25}{8} < 32\\pi,$$\nso $31\\pi < 100 < 32\\pi$.\nFirst consider $x \\ge 0$:\n- On $[0, \\pi]$: $x = 0$ is a solution. At $x = 0$, $\\frac{d}{dx}(\\sin x)\\big|_{x=0} = 1 > \\frac{1}{100}$, so $\\sin x > \\frac{x}{100}$ just to the right of $0$, while at $x = \\pi$ we have $\\sin\\pi = 0 < \\frac{\\pi}{100}$. Because $\\sin x$ is strictly concave on $[0, \\pi]$ and $\\frac{x}{100}$ is linear, there is exactly $1$ positive solution in $(0, \\pi)$.\n- On $[2(k-1)\\pi, (2k-1)\\pi]$ for each integer $k$ with $2 \\le k \\le 16$: at both endpoints $\\sin x = 0 < \\frac{x}{100}$, while at the midpoint $x_k = 2(k-1)\\pi + \\frac{\\pi}{2} \\le 30\\pi + \\frac{\\pi}{2} < 31\\pi < 100$ we have $\\sin x_k = 1 > \\frac{x_k}{100}$. By strict concavity of $\\sin x$ on $[2(k-1)\\pi, (2k-1)\\pi]$, there are exactly $2$ solutions in each of these $15$ intervals, giving $30$ solutions.\n- On $((2k-1)\\pi, 2k\\pi)$ for $1 \\le k \\le 15$ and on $(31\\pi, 100]$, we have $\\sin x \\le 0 < \\frac{x}{100}$, so there are no solutions.\nThus there are $1 + 30 = 31$ positive solutions and $1$ zero solution ($x = 0$). Because both $\\sin x$ and $\\frac{x}{100}$ are odd functions, $x$ is a solution if and only if $-x$ is a solution, yielding $31$ negative solutions as well. The total number of real solutions is $31 + 1 + 31 = 63$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Let $m$ and $n$ be positive integers such that $m > n$. If the last three digits of $2012^m$ and $2012^n$ are identical, find the smallest possible value of $m + n$.\n\nA. $98$\nB. $100$\nC. $102$\nD. $104$\nE. None of the above',
          answer: 'D. $104$',
          principle: 'Work modulo $1000 = 8 \\times 125$ using the Chinese Remainder Theorem, Euler\'s theorem ($\\varphi(125) = 100$), and Lifting The Exponent (LTE).',
          solution:
            'The condition that the last three digits of $2012^m$ and $2012^n$ agree is\n$$2012^m \\equiv 2012^n \\pmod{1000} \\iff 12^n\\left(12^{m-n} - 1\\right) \\equiv 0 \\pmod{1000}.$$\nSince $1000 = 8 \\times 125$ with $\\gcd(8, 125) = 1$:\n1. Modulo $8$: Since $m > n$, $12^{m-n} - 1$ is odd, so $8 \\mid 12^n$. Because $12 = 4 \\times 3$, we need $2^n \\cdot 2^n \\ge 8$, which holds if and only if $n \\ge 2$.\n2. Modulo $125$: Since $\\gcd(12, 125) = 1$, we need $12^{m-n} \\equiv 1 \\pmod{125}$. Because $12 \\equiv 2 \\pmod{5}$ has order $4$ modulo $5$, we must have $4 \\mid (m-n)$; write $m - n = 4t$. Note that\n$$12^4 = 144^2 = 20736 = 1 + 5 \\cdot 4147,$$\nso $v_5(12^4 - 1) = 1$. By the Lifting The Exponent Lemma,\n$$v_5(12^{4t} - 1) = v_5(12^4 - 1) + v_5(t) = 1 + v_5(t).$$\nFor $125 = 5^3$ to divide $12^{4t} - 1$, we need $v_5(t) \\ge 2$, so the smallest positive $t$ is $t = 25$, giving $m - n \\ge 4 \\cdot 25 = 100$.\nWith $n \\ge 2$ and $m - n \\ge 100$, we get $m + n = (m - n) + 2n \\ge 100 + 4 = 104$, achieved at $n = 2$ and $m = 102$.',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Short Questions',
      marks: 20,
      stem: 'Write the exact final answer for each of the 20 included short questions (1 mark each).',
      parts: [
        {
          label: '11',
          marks: 1,
          prompt:
            'Let $a, b, c$ and $d$ be four distinct positive real numbers that satisfy the equations\n$$(a^{2012} - c^{2012})(a^{2012} - d^{2012}) = 2011 \\quad \\text{and} \\quad (b^{2012} - c^{2012})(b^{2012} - d^{2012}) = 2011.$$\nFind the value of $(cd)^{2012} - (ab)^{2012}$.',
          answer: '$2011$',
          principle: 'View $a^{2012}$ and $b^{2012}$ as distinct roots of the quadratic $(x - C)(x - D) = 2011$ and apply Vieta\'s product-of-roots formula.',
          solution:
            'Let $A = a^{2012}$, $B = b^{2012}$, $C = c^{2012}$, and $D = d^{2012}$. Since $a$ and $b$ are distinct positive real numbers, $A \\neq B$.\nThe given equations show that $A$ and $B$ are the two distinct roots of the quadratic equation\n$$(x - C)(x - D) = 2011 \\iff x^2 - (C + D)x + (CD - 2011) = 0.$$\nBy Vieta\'s formulas, the product of the roots is $AB = CD - 2011$. Rearranging gives\n$$(cd)^{2012} - (ab)^{2012} = CD - AB = 2011.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Determine the total number of pairs of integers $x$ and $y$ that satisfy the equation\n$$\\frac{1}{y} - \\frac{1}{y + 2} = \\frac{1}{3 \\cdot 2^x}.$$',
          answer: '$6$',
          principle: 'Clear denominators to obtain $y(y+2) = 3 \\cdot 2^{x+1}$ and analyze prime factorizations of consecutive integers or consecutive even integers.',
          solution:
            'Note that $y \\neq 0$ and $y \\neq -2$. Combining the fractions on the left-hand side gives\n$$\\frac{2}{y(y+2)} = \\frac{1}{3 \\cdot 2^x} \\iff y(y+2) = 3 \\cdot 2^{x+1}.$$\nCase 1: $x < 0$. Since $y(y+2)$ is an integer, $3 \\cdot 2^{x+1}$ must be an integer, forcing $x = -1$. Then $y(y+2) = 3$, so $(y+1)^2 = 4$, giving $y = 1$ or $y = -3$. This yields $2$ pairs: $(-1, 1)$ and $(-1, -3)$.\nCase 2: $x \\ge 0$. Then $y(y+2) = 3 \\cdot 2^{x+1}$ is even, so $y$ and $y+2$ are both even. Write $y = 2u$ for an integer $u \\notin \\{0, -1\\}$, which gives\n$$u(u+1) = 3 \\cdot 2^{x-1}.$$\nIf $x = 0$, the right-hand side is $\\frac{3}{2}$, which is impossible. Thus $x \\ge 1$, so one of the consecutive coprime integers $u, u+1$ is odd and the other is even. Since the only odd prime factor on the right-hand side is $3$, the odd factor among $u, u+1$ must belong to $\\{\\pm 1, \\pm 3\\}$:\n- If the odd factor is $1$: $u = 1 \\implies u(u+1) = 2$ (no $3$), or $u+1 = 1 \\implies u = 0$ (invalid).\n- If the odd factor is $-1$: $u = -1$ (invalid), or $u+1 = -1 \\implies u(u+1) = 2$ (no $3$).\n- If the odd factor is $3$: $(u, u+1) = (3, 4)$ gives $12 = 3 \\cdot 2^{x-1} \\implies x = 3, y = 6$; $(u, u+1) = (2, 3)$ gives $6 = 3 \\cdot 2^{x-1} \\implies x = 2, y = 4$.\n- If the odd factor is $-3$: $(u, u+1) = (-3, -2)$ gives $6 = 3 \\cdot 2^{x-1} \\implies x = 2, y = -6$; $(u, u+1) = (-4, -3)$ gives $12 = 3 \\cdot 2^{x-1} \\implies x = 3, y = -8$.\nIn total, there are $6$ integer pairs $(x, y)$: $(3, 6), (3, -8), (2, 4), (2, -6), (-1, 1), (-1, -3)$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Given a set $S = \\{1, 2, \\dots, 10\\}$, a collection $F$ of subsets of $S$ is said to be intersecting if for any two subsets $A$ and $B$ in $F$, we have $A \\cap B \\neq \\emptyset$. What is the maximum size of $F$?',
          answer: '$512$',
          principle: 'Pair each subset $A \\subseteq S$ with its complement $S \\setminus A$; at most one member of each complementary pair can lie in an intersecting family.',
          solution:
            'The set $S$ has $2^{10} = 1024$ subsets, which can be partitioned into $512$ complementary pairs $\\{A, S \\setminus A\\}$. Since $A \\cap (S \\setminus A) = \\emptyset$, at most one subset from each pair can belong to $F$. Hence\n$$|F| \\le \\frac{2^{10}}{2} = 512.$$\nEquality is achieved by taking $F$ to be the collection of all subsets of $S$ that contain the element $1$: there are $2^9 = 512$ such subsets, and any two of them share the element $1$. Thus the maximum size of $F$ is $512$.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'The set $M$ contains all the integral values of $m$ such that the polynomial\n$$2(m - 1)x^2 - (m^2 - m + 12)x + 6m$$\nhas either one repeated or two distinct integral roots. Find the number of elements of $M$.',
          answer: '$4$',
          principle: 'Factor the quadratic explicitly in terms of $x$ and $m$, then impose integrality on both roots.',
          solution:
            'If $m = 1$, the polynomial reduces to $-12x + 6$, whose only root is $x = \\frac{1}{2} \\notin \\mathbb{Z}$.\nFor $m \\neq 1$, the polynomial factors as\n$$2(m - 1)x^2 - (m^2 - m + 12)x + 6m = (2x - m)\\bigl((m - 1)x - 6\\bigr).$$\nThus its two roots (possibly equal) are\n$$x_1 = \\frac{m}{2} \\quad \\text{and} \\quad x_2 = \\frac{6}{m - 1}.$$\nFor both roots to be integers, $m$ must be even (from $x_1 \\in \\mathbb{Z}$) and $m - 1$ must be a divisor of $6$ (from $x_2 \\in \\mathbb{Z}$). Since $m$ is even, $m - 1$ is odd, so $m - 1$ must be an odd divisor of $6$, namely $m - 1 \\in \\{-3, -1, 1, 3\\}$.\nThis yields $m \\in \\{-2, 0, 2, 4\\}$:\n- $m = -2$: roots $-1, -2$ (distinct integers);\n- $m = 0$: roots $0, -6$ (distinct integers);\n- $m = 2$: roots $1, 6$ (distinct integers);\n- $m = 4$: roots $2, 2$ (one repeated integer root).\nHence $M = \\{-2, 0, 2, 4\\}$ has $4$ elements.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Find the minimum value of\n$$\\left|\\sin x + \\cos x + \\frac{\\cos x - \\sin x}{\\cos 2x}\\right|.$$',
          answer: '$2$',
          principle: 'Factor $\\cos 2x = (\\cos x - \\sin x)(\\cos x + \\sin x)$ to simplify the expression to $|w + \\frac{1}{w}|$ and apply AM-GM.',
          solution:
            'For the expression to be defined, $\\cos 2x = \\cos^2 x - \\sin^2 x \\neq 0$, so $\\cos x - \\sin x \\neq 0$ and $\\cos x + \\sin x \\neq 0$. Factoring $\\cos 2x = (\\cos x - \\sin x)(\\cos x + \\sin x)$ gives\n$$\\left|\\sin x + \\cos x + \\frac{\\cos x - \\sin x}{\\cos 2x}\\right| = \\left|\\sin x + \\cos x + \\frac{1}{\\sin x + \\cos x}\\right|.$$\nLet $w = \\sin x + \\cos x \\neq 0$. Then by the AM-GM inequality,\n$$\\left|w + \\frac{1}{w}\\right| = |w| + \\frac{1}{|w|} \\ge 2\\sqrt{|w| \\cdot \\frac{1}{|w|}} = 2.$$\nEquality holds when $|w| = 1$; for example, at $x = 0$, $\\cos 2(0) = 1 \\neq 0$ and $w = \\sin 0 + \\cos 0 = 1$, giving $|1 + 1| = 2$. Hence the minimum value is $2$.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Find the number of ways to arrange the letters $\\text{A}, \\text{A}, \\text{B}, \\text{B}, \\text{C}, \\text{C}, \\text{D}$ and $\\text{E}$ in a line, such that there are no consecutive identical letters.',
          answer: '$2220$',
          principle: 'Apply the Principle of Inclusion-Exclusion to the three events that pair $\\text{AA}$, $\\text{BB}$, or $\\text{CC}$ appears consecutively.',
          solution:
            'Without restrictions, the $8$ letters $\\text{A}, \\text{A}, \\text{B}, \\text{B}, \\text{C}, \\text{C}, \\text{D}, \\text{E}$ can be arranged in\n$$\\frac{8!}{2!\\,2!\\,2!} = \\frac{40320}{8} = 5040\\text{ ways}.$$\nLet $E_A$, $E_B$, and $E_C$ be the sets of arrangements in which the two $\\text{A}$\'s, two $\\text{B}$\'s, or two $\\text{C}$\'s appear consecutively, respectively.\n- Treating a consecutive pair (say $\\text{AA}$) as a single block leaves $7$ items with two other repeated pairs: $|E_A| = |E_B| = |E_C| = \\frac{7!}{2!\\,2!} = 1260$.\n- Treating two chosen pairs as single blocks leaves $6$ items with one remaining repeated pair: $|E_A \\cap E_B| = |E_B \\cap E_C| = |E_C \\cap E_A| = \\frac{6!}{2!} = 360$.\n- Treating all three pairs as single blocks leaves $5$ distinct items: $|E_A \\cap E_B \\cap E_C| = 5! = 120$.\nBy the Principle of Inclusion-Exclusion, the number of valid arrangements is\n$$5040 - \\binom{3}{1}\\cdot 1260 + \\binom{3}{2}\\cdot 360 - \\binom{3}{3}\\cdot 120 = 5040 - 3780 + 1080 - 120 = 2220.$$',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Suppose $x = 3^{\\sqrt{2 + \\log_3 x}}$ is an integer. Determine the value of $x$.',
          answer: '$9$',
          principle: 'Take base-$3$ logarithms to convert the exponential equation into a radical equation $y = \\sqrt{2 + y}$.',
          solution:
            'Taking the base-$3$ logarithm of both sides of $x = 3^{\\sqrt{2 + \\log_3 x}}$ (which requires $x > 0$ and $2 + \\log_3 x \\ge 0$) gives\n$$\\log_3 x = \\sqrt{2 + \\log_3 x}.$$\nLet $y = \\log_3 x$. Since $y = \\sqrt{2 + y} \\ge 0$, squaring both sides yields\n$$y^2 = 2 + y \\implies y^2 - y - 2 = 0 \\implies (y - 2)(y + 1) = 0.$$\nBecause $y \\ge 0$, we must have $y = 2$, and therefore\n$$x = 3^2 = 9.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Let $f(x)$ be the polynomial $(x - a_1)(x - a_2)(x - a_3)(x - a_4)(x - a_5)$ where $a_1, a_2, a_3, a_4$ and $a_5$ are distinct integers. Given that $f(104) = 2012$, evaluate $a_1 + a_2 + a_3 + a_4 + a_5$.',
          answer: '$17$',
          principle: 'Factor $2012 = 2^2 \\times 503$ into $5$ distinct integer factors.',
          solution:
            'Since $a_1, a_2, a_3, a_4, a_5$ are distinct integers, the five factors $d_i = 104 - a_i$ ($i = 1, 2, 3, 4, 5$) are distinct integers whose product is\n$$d_1 d_2 d_3 d_4 d_5 = 2012 = 2^2 \\times 503,$$\nwhere $503$ is prime. One of the factors must be divisible by $503$, while the remaining four distinct integers have a product dividing $4$.\nAmong any four distinct nonzero integers, the minimum possible product of their absolute values is $|-1| \\cdot |1| \\cdot |-2| \\cdot |2| = 4$. Thus the four factors not divisible by $503$ must be precisely $1, -1, 2, -2$ (whose product is $4$), forcing the fifth factor to be $+503$.\nSumming the five factors gives\n$$\\sum_{i=1}^5 (104 - a_i) = 1 + (-1) + 2 + (-2) + 503 = 503.$$\nHence\n$$a_1 + a_2 + a_3 + a_4 + a_5 = 5(104) - 503 = 520 - 503 = 17.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Find the least value of the expression $(x + y)(y + z)$, given that $x, y, z$ are positive real numbers satisfying the equation\n$$xyz(x + y + z) = 1.$$',
          answer: '$2$',
          principle: 'Expand $(x + y)(y + z)$ as $y(x + y + z) + xz$, substitute $y(x + y + z) = \\frac{1}{xz}$, and apply AM-GM.',
          solution:
            'Expanding $(x + y)(y + z)$ and grouping the terms containing $y$ gives\n$$(x + y)(y + z) = xy + y^2 + yz + xz = y(x + y + z) + xz.$$\nFrom $xyz(x + y + z) = 1$, we have $y(x + y + z) = \\frac{1}{xz}$. Since $x, z > 0$, the AM-GM inequality yields\n$$(x + y)(y + z) = \\frac{1}{xz} + xz \\ge 2\\sqrt{\\frac{1}{xz} \\cdot xz} = 2.$$\nEquality holds when $xz = 1$ and $y(x + y + z) = 1$; for example, choosing $x = z = 1$ gives $y(y + 2) = 1$, so $y = \\sqrt{2} - 1 > 0$. Thus the least value is $2$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'For each real number $x$, let $f(x)$ be the minimum of the numbers $4x + 1$, $x + 2$ and $-2x + 4$. Determine the maximum value of $6f(x) + 2012$.',
          answer: '$2028$',
          principle: 'Find the lower envelope of three linear functions by locating their pairwise intersection points.',
          solution:
            'Let $L_1(x) = 4x + 1$, $L_2(x) = x + 2$, and $L_3(x) = -2x + 4$. Their pairwise intersections are:\n- $L_1(x) = L_2(x) \\implies 4x + 1 = x + 2 \\implies x = \\frac{1}{3}$, with value $\\frac{7}{3}$;\n- $L_1(x) = L_3(x) \\implies 4x + 1 = -2x + 4 \\implies x = \\frac{1}{2}$, with value $3$;\n- $L_2(x) = L_3(x) \\implies x + 2 = -2x + 4 \\implies x = \\frac{2}{3}$, with value $\\frac{8}{3}$.\nComparing the three lines on each interval gives the piecewise formula for $f(x) = \\min(L_1(x), L_2(x), L_3(x))$:\n$$f(x) = \\begin{cases} 4x + 1, & x \\le \\frac{1}{3}, \\\\ x + 2, & \\frac{1}{3} \\le x \\le \\frac{2}{3}, \\\\ -2x + 4, & x \\ge \\frac{2}{3}. \\end{cases}$$\nThe function $f(x)$ increases on $\\left(-\\infty, \\frac{2}{3}\\right]$ and decreases on $\\left[\\frac{2}{3}, \\infty\\right)$, so its maximum value is $f\\left(\\frac{2}{3}\\right) = \\frac{8}{3}$. Therefore, the maximum value of $6f(x) + 2012$ is\n$$6\\left(\\frac{8}{3}\\right) + 2012 = 16 + 2012 = 2028.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Find the number of pairs $(A, B)$ of distinct subsets of $\\{1, 2, 3, 4, 5, 6\\}$ such that $A$ is a proper subset of $B$. Note that $A$ can be an empty set.',
          answer: '$665$',
          principle: 'Count pairs $(A, B)$ with $A \\subseteq B$ by assigning each element independently to $A$, $B \\setminus A$, or $S \\setminus B$, then subtract the $A = B$ cases.',
          solution:
            'Let $S = \\{1, 2, 3, 4, 5, 6\\}$. To form any pair $(A, B)$ with $A \\subseteq B \\subseteq S$, each of the $6$ elements of $S$ has $3$ independent choices: belong to $A$ (and hence $B$), belong to $B \\setminus A$, or belong to neither $A$ nor $B$. This gives $3^6$ pairs $(A, B)$ with $A \\subseteq B$.\nAmong these, the pairs with $A = B$ correspond to each element either belonging to $A = B$ or not, giving $2^6$ pairs. Subtracting these gives the number of pairs with $A \\subsetneq B$:\n$$3^6 - 2^6 = 729 - 64 = 665.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Find the sum of all the integral values of $x$ that satisfy\n$$\\sqrt{x + 3 - 4\\sqrt{x - 1}} + \\sqrt{x + 8 - 6\\sqrt{x - 1}} = 1.$$',
          answer: '$45$',
          principle: 'Complete the square inside each radical in terms of $t = \\sqrt{x - 1}$, reducing the equation to $|t - 2| + |t - 3| = 1$.',
          solution:
            'For $\\sqrt{x - 1}$ to be real, we require $x \\ge 1$. Let $t = \\sqrt{x - 1} \\ge 0$, so $x = t^2 + 1$. Then\n$$x + 3 - 4\\sqrt{x - 1} = t^2 - 4t + 4 = (t - 2)^2,$$\n$$x + 8 - 6\\sqrt{x - 1} = t^2 - 6t + 9 = (t - 3)^2.$$\nThe equation becomes\n$$|t - 2| + |t - 3| = 1.$$\nBy the triangle inequality, $|t - 2| + |t - 3| = |t - 2| + |3 - t| \\ge |(t - 2) + (3 - t)| = 1$, with equality if and only if $t - 2$ and $3 - t$ have the same sign (or one is zero), i.e., $2 \\le t \\le 3$.\nThus $2 \\le \\sqrt{x - 1} \\le 3 \\iff 4 \\le x - 1 \\le 9 \\iff 5 \\le x \\le 10$. The integral solutions are $5, 6, 7, 8, 9, 10$, whose sum is\n$$5 + 6 + 7 + 8 + 9 + 10 = 45.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Given that\n$$S = \\left|\\sqrt{x^2 + 4x + 5} - \\sqrt{x^2 + 2x + 5}\\right|,$$\nfor real values of $x$, find the maximum value of $S^4$.',
          answer: '$4$',
          principle: 'Interpret $\\sqrt{x^2 + 4x + 5}$ and $\\sqrt{x^2 + 2x + 5}$ as distances from $P(x, 0)$ to fixed points $A(-2, 1)$ and $B(-1, 2)$, then apply the triangle inequality $|PA - PB| \\le AB$.',
          solution:
            'Complete the square inside each radical:\n$$S = \\left|\\sqrt{(x + 2)^2 + (0 - 1)^2} - \\sqrt{(x + 1)^2 + (0 - 2)^2}\\right|.$$\nLet $P = (x, 0)$, $A = (-2, 1)$, and $B = (-1, 2)$ in the coordinate plane. Then $S = |PA - PB|$. By the triangle inequality,\n$$|PA - PB| \\le AB = \\sqrt{(-1 - (-2))^2 + (2 - 1)^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}.$$\nEquality is achieved when $P, A, B$ are collinear with $P$ not between $A$ and $B$. The line through $A(-2, 1)$ and $B(-1, 2)$ has equation $y = x + 3$, which meets the $x$-axis at $P = (-3, 0)$ (where $PA = \\sqrt{2}$, $PB = 2\\sqrt{2}$, and $|PA - PB| = \\sqrt{2}$). Therefore, the maximum value of $S$ is $\\sqrt{2}$, and the maximum value of $S^4$ is\n$$(\\sqrt{2})^4 = 4.$$',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Three integers are selected from the set $S = \\{1, 2, 3, \\dots, 19, 20\\}$. Find the number of selections where the sum of the three integers is divisible by $3$.',
          answer: '$384$',
          principle: 'Partition $S$ by residue modulo $3$; three integers sum to $0 \\pmod{3}$ iff they all share one residue class or take one from each residue class.',
          solution:
            'Partition $S$ according to remainder modulo $3$:\n- $S_0 = \\{3, 6, 9, 12, 15, 18\\}$ ($6$ elements);\n- $S_1 = \\{1, 4, 7, 10, 13, 16, 19\\}$ ($7$ elements);\n- $S_2 = \\{2, 5, 8, 11, 14, 17, 20\\}$ ($7$ elements).\nFor the sum of three distinct numbers in $S$ to be divisible by $3$, either all three come from the same $S_i$, or one comes from each of $S_0, S_1, S_2$. Counting both cases gives\n$$\\binom{6}{3} + \\binom{7}{3} + \\binom{7}{3} + 6 \\times 7 \\times 7 = 20 + 35 + 35 + 294 = 384.$$',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Two Wei Qi teams, $A$ and $B$, each comprising of $7$ members, take on each other in a competition. The players on each team are fielded in a fixed sequence. The first game is played by the first player of each team. The losing player is eliminated while the winning player stays on to play with the next player of the opposing team. This continues until one team is completely eliminated and the surviving team emerges as the final winner — thus, yielding a possible gaming outcome. Find the total number of possible gaming outcomes.',
          answer: '$3432$',
          principle: 'Establish a bijection between valid gaming outcomes and $14$-term binary sequences consisting of $7$ $A$\'s and $7$ $B$\'s.',
          solution:
            'Label the players of Team $A$ as $a_1, \\dots, a_7$ and of Team $B$ as $b_1, \\dots, b_7$ in their fixed fielding order. In every game, exactly one player is eliminated, and players are eliminated in order $a_1, a_2, \\dots$ from $A$ and $b_1, b_2, \\dots$ from $B$.\nIf we record the sequence of eliminated players as games occur until all $7$ players of one team are eliminated, and then append the remaining uneliminated players of the winning team in order at the end, every outcome produces a unique $14$-term sequence containing $7$ players from $A$ and $7$ players from $B$ (with the $a_i$ in increasing order and the $b_j$ in increasing order).\nConversely, given any choice of $7$ positions out of $14$ for Team $A$ (and the remaining $7$ for Team $B$), the prefix up to the last appearance of the earlier-finishing team uniquely describes the sequence of eliminations, and the trailing block of the other team consists of its surviving players. Thus the total number of outcomes is\n$$\\binom{14}{7} = \\frac{14 \\times 13 \\times 12 \\times 11 \\times 10 \\times 9 \\times 8}{7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = 3432.$$',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            'Given that the real numbers $x, y$ and $z$ satisfy the condition $x + y + z = 3$, find the maximum value of\n$$f(x, y, z) = \\sqrt{2x + 13} + \\sqrt[3]{3y + 5} + \\sqrt[4]{8z + 12}.$$',
          answer: '$8$',
          principle: 'Scale each radical with constants matched to the equality point so that AM-GM produces a linear upper bound proportional to $x + y + z$.',
          solution:
            'First note that for $f(x, y, z)$ to be real, $2x + 13 \\ge 0$ and $8z + 12 \\ge 0$. Applying AM-GM with scaled constants to align the coefficients of $x$, $y$, and $z$:\n1. $\\sqrt{2x + 13} = \\sqrt{\\frac{2x + 13}{4} \\cdot 4} \\le \\frac{\\frac{2x + 13}{4} + 4}{2} = \\frac{x}{4} + \\frac{29}{8}$, with equality when $\\frac{2x + 13}{4} = 4 \\iff x = \\frac{3}{2}$.\n2. $\\sqrt[3]{3y + 5} = \\sqrt[3]{\\frac{3y + 5}{4} \\cdot 2 \\cdot 2} \\le \\frac{\\frac{3y + 5}{4} + 2 + 2}{3} = \\frac{y}{4} + \\frac{7}{4}$, with equality when $\\frac{3y + 5}{4} = 2 \\iff y = 1$ (note that even if $3y + 5 < 0$, $\\sqrt[3]{3y+5} < 0 < \\frac{y}{4} + \\frac{7}{4}$ because $y < -\\frac{5}{3} \\implies \\frac{y}{4} + \\frac{7}{4} > \\frac{4}{3} > 0$).\n3. $\\sqrt[4]{8z + 12} = \\sqrt[4]{\\frac{8z + 12}{8} \\cdot 2 \\cdot 2 \\cdot 2} \\le \\frac{\\frac{8z + 12}{8} + 2 + 2 + 2}{4} = \\frac{z}{4} + \\frac{15}{8}$, with equality when $\\frac{8z + 12}{8} = 2 \\iff z = \\frac{1}{2}$.\nAdding these three inequalities gives\n$$f(x, y, z) \\le \\frac{1}{4}(x + y + z) + \\frac{29 + 14 + 15}{8} = \\frac{3}{4} + \\frac{58}{8} = \\frac{3}{4} + \\frac{29}{4} = 8.$$\nSince $x = \\frac{3}{2}, y = 1, z = \\frac{1}{2}$ satisfies $x + y + z = 3$ and achieves equality in all three bounds ($4 + 2 + 2 = 8$), the maximum value is $8$.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'Let $P(x)$ be a polynomial of degree $34$ such that $P(k) = \\frac{k}{k + 1}$ for all integers $k = 0, 1, 2, \\dots, 34$. Evaluate $42840 \\times P(35)$.',
          answer: '$40460$',
          principle: 'Define $Q(x) = (x + 1)P(x) - x$, which vanishes at $x = 0, 1, \\dots, 34$, and determine the leading constant by substituting $x = -1$.',
          solution:
            'Let $n = 34$ and define $Q(x) = (x + 1)P(x) - x$. Since $\\deg P = 34$, $Q(x)$ is a polynomial of degree $35$, and $Q(k) = (k + 1)P(k) - k = 0$ for all $k = 0, 1, \\dots, 34$. Hence there exists a constant $C$ such that\n$$Q(x) = (x + 1)P(x) - x = Cx(x - 1)(x - 2)\\cdots(x - 34).$$\nSetting $x = -1$ gives\n$$1 = C(-1)(-2)\\cdots(-35) = -35!\\,C \\implies C = -\\frac{1}{35!}.$$\nNow setting $x = 35$ yields\n$$36P(35) - 35 = Q(35) = -\\frac{1}{35!} \\cdot 35! = -1 \\implies 36P(35) = 34 \\implies P(35) = \\frac{34}{36}.$$\nNotice that $42840 = 34 \\times 35 \\times 36$, so\n$$42840 \\times P(35) = 34 \\times 35 \\times 36 \\times \\frac{34}{36} = 34^2 \\times 35 = 1156 \\times 35 = 40460.$$',
          rubric: OK
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'Given that $\\alpha$ is an acute angle satisfying\n$$\\sqrt{369 - 360\\cos\\alpha} + \\sqrt{544 - 480\\sin\\alpha} - 25 = 0,$$\nfind the value of $40\\tan\\alpha$.',
          answer: '$30$',
          principle: 'Interpret each radical via the Law of Cosines in a right triangle with legs $15$ and $20$ and hypotenuse $25$, then apply the triangle inequality.',
          solution:
            'Let $X = \\sqrt{369 - 360\\cos\\alpha}$ and $Y = \\sqrt{544 - 480\\sin\\alpha}$. Observe that\n$$X^2 = 12^2 + 15^2 - 2(12)(15)\\cos\\alpha,$$\n$$Y^2 = 12^2 + 20^2 - 2(12)(20)\\cos(90^\\circ - \\alpha),$$\nand $15^2 + 20^2 = 25^2$.\nConstruct a right-angled triangle $\\triangle ABD$ with $\\angle ABD = 90^\\circ$, $AB = 15$, $BD = 20$, and hypotenuse $AD = 25$. Since $\\alpha$ is acute, place a point $C$ inside $\\angle ABD$ with $BC = 12$, $\\angle ABC = \\alpha$, and $\\angle CBD = 90^\\circ - \\alpha$. By the Law of Cosines in $\\triangle ABC$ and $\\triangle CBD$, $AC = X$ and $CD = Y$.\nBy the triangle inequality, $X + Y = AC + CD \\ge AD = 25$, with equality if and only if $C$ lies on segment $AD$. Moreover, the altitude from $B$ to $AD$ has length $\\frac{15 \\times 20}{25} = 12 = BC$, so $BC$ must be perpendicular to $AD$.\nIn the right triangle $\\triangle ABC$ ($\\angle ACB = 90^\\circ$), we have $AB = 15$ and $BC = 12$, so $AC = \\sqrt{15^2 - 12^2} = 9$. Thus $\\tan\\alpha = \\frac{AC}{BC} = \\frac{9}{12} = \\frac{3}{4}$, and\n$$40\\tan\\alpha = 40 \\times \\frac{3}{4} = 30.$$',
          rubric: OK
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'Given that $a, b, c, d, e$ are real numbers such that\n$$a + b + c + d + e = 8 \\quad \\text{and} \\quad a^2 + b^2 + c^2 + d^2 + e^2 = 16,$$\ndetermine the maximum value of $\\lfloor e \\rfloor$.',
          answer: '$3$',
          principle: 'Apply the Cauchy-Schwarz inequality to $(a, b, c, d)$ to obtain a quadratic inequality in $e$ alone.',
          solution:
            'Isolating $a, b, c, d$ gives $a + b + c + d = 8 - e$ and $a^2 + b^2 + c^2 + d^2 = 16 - e^2$. By the Cauchy-Schwarz inequality,\n$$4(a^2 + b^2 + c^2 + d^2) \\ge (a + b + c + d)^2.$$\nSubstituting in terms of $e$ yields\n$$4(16 - e^2) \\ge (8 - e)^2 \\implies 64 - 4e^2 \\ge 64 - 16e + e^2 \\implies e(5e - 16) \\le 0.$$\nHence $0 \\le e \\le \\frac{16}{5}$. Equality $e = \\frac{16}{5}$ is achieved by setting $a = b = c = d = \\frac{8 - 16/5}{4} = \\frac{6}{5}$ (indeed, $4\\left(\\frac{6}{5}\\right) + \\frac{16}{5} = 8$ and $4\\left(\\frac{36}{25}\\right) + \\frac{256}{25} = \\frac{400}{25} = 16$). Since $3 < \\frac{16}{5} < 4$, the maximum value of $\\lfloor e \\rfloor$ is $3$.',
          rubric: OK
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Let $L$ denote the minimum value of the quotient of a $3$-digit number formed by three distinct digits divided by the sum of its digits. Determine $\\lfloor 10L \\rfloor$.',
          answer: '$105$',
          principle: 'Write $F(a, b, c) = \\frac{100a + 10b + c}{a + b + c} = 1 + \\frac{99a + 9b}{a + b + c}$ and minimize monotonically in $c$, then $b$, then $a$ over distinct digits.',
          solution:
            'Let the $3$-digit number be $100a + 10b + c$, where $a \\in \\{1, 2, \\dots, 9\\}$, $b, c \\in \\{0, 1, \\dots, 9\\}$, and $a, b, c$ are pairwise distinct. We wish to minimize\n$$F(a, b, c) = \\frac{100a + 10b + c}{a + b + c} = 1 + \\frac{99a + 9b}{a + b + c}.$$\nFirst, if $a = 9$, then $F(9, b, c) \\ge \\frac{900}{9 + 8 + 7} = \\frac{900}{24} = \\frac{75}{2} > 11$; if $b = 9$, then $a \\ge 1$ and $c \\le 8$, so $F(a, 9, c) = 1 + \\frac{99a + 81}{a + 9 + c} \\ge 1 + \\frac{99(1) + 81}{1 + 9 + 8} = 11$. Since $F(1, 8, 9) = \\frac{189}{18} = \\frac{21}{2} < 11$, the minimum must occur with $a, b \\le 8$. For fixed $a, b \\le 8$, $99a + 9b > 0$, so $F(a, b, c)$ is minimized when $c$ is as large as possible, namely $c = 9$.\nSubstituting $c = 9$,\n$$F(a, b, 9) = 1 + \\frac{99a + 9b}{a + b + 9} = 10 + \\frac{9(10a - 9)}{a + b + 9}.$$\nSince $a \\ge 1$, we have $10a - 9 > 0$, so for fixed $a$, $F(a, b, 9)$ decreases as $b$ increases. If $a = 8$, then $b \\le 7$ and $F(8, b, 9) > 10 + \\frac{9(71)}{8 + 7 + 9} = \\frac{293}{8} > 11$. Hence $a \\le 7$, and $F(a, b, 9)$ is minimized when $b = 8$:\n$$F(a, 8, 9) = 10 + \\frac{90a - 81}{a + 17} = 100 - \\frac{1611}{a + 17}.$$\nThis expression is strictly increasing in $a$, so its minimum occurs at $a = 1$, giving $L = F(1, 8, 9) = \\frac{189}{18} = \\frac{21}{2}$. Therefore, $\\lfloor 10L \\rfloor = \\lfloor 105 \\rfloor = 105$.',
          rubric: OK
        }
      ]
    }
  ]
};
