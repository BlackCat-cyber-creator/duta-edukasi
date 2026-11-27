/**
 * Paket Soal: ASMOPSS 2025 Mathematics Secondary (Theoretical Round)
 * Sumber: Asian Science & Mathematics Olympiad for Primary and Secondary Schools 2025 (ASMOPSS 2025, Math Secondary.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Diagram pada soal 9 dipotong bersih sebagai WebP.
 */
export default {
  id: 'asmopss-2025-secondary',
  slug: 'asmopss-2025-secondary',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'ASMOPSS 2025 Mathematics Secondary: Theoretical Round (Short Answer & Essay)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab2-teorema-pythagoras',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'ASMOPSS',
  title: 'ASMOPSS 2025 \u2014 Mathematics Secondary',
  totalMarks: 100,
  instructions:
    'Attempt all 17 questions (original time allowed: 180 minutes; no calculators). Part 1 has 5 multiple-choice questions worth 2 points each (10 points). Part 2 has 5 short-answer problems worth 4 points each (20 points). Part 3 has 7 essay problems worth 10 points each (70 points). There is no deduction for incorrect answers. Diagrams are not drawn to scale.',
  source: {
    org: 'ASMOPSS',
    file: 'ASMOPSS 2025, Math Secondary.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part 1: Multiple Choices',
      marks: 10,
      stem: 'Choose the correct answer from options A, B, C, D, or E for each question (5 questions, 2 points each).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Given right triangle $PQR$. The radius of its incircle (circle that is tangent to all its three sides) is equal to $2$. The radius of its circumcircle (circle that passes through its three vertices) is equal to $4.5$.\nWhat is the perimeter of this triangle?\n\nA. $18$\nB. $22$\nC. $24$\nD. $30$\nE. $32$',
          answer: 'B. $22$',
          principle:
            'In a right triangle with legs $a, b$ and hypotenuse $c$, the circumradius is $R = \\frac{c}{2}$ and the inradius is $r = \\frac{a + b - c}{2}$, so the perimeter is $a + b + c = 2r + 4R$.',
          solution:
            'Let the legs of right triangle $PQR$ be $a$ and $b$, and let the hypotenuse be $c$.\nSince the circumcenter of a right triangle is the midpoint of its hypotenuse, the hypotenuse equals the diameter of the circumcircle:\n$$c = 2R = 2 \\times 4.5 = 9.$$\nThe inradius $r$ of a right triangle satisfies $r = \\frac{a + b - c}{2}$, so\n$$a + b - c = 2r = 2 \\times 2 = 4 \\implies a + b = c + 4 = 9 + 4 = 13.$$\nTherefore, the perimeter is\n$$a + b + c = 13 + 9 = 22.$$\n*(Note: In a real Euclidean right triangle with $c = 9$, the maximum possible inradius is $(\\sqrt{2} - 1)R \\approx 1.864 < 2$, so the problem parameters reflect the contest formula $P = 2r + 4R = 22$.)*',
          rubric: [
            { code: 'M1', text: 'Uses $c = 2R = 9$ and $a + b - c = 2r = 4$ to obtain $a + b = 13$.' },
            { code: 'A1', text: 'Computes perimeter $a + b + c = 22$, option B.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Given that $x_n = \\sqrt{1 + \\left(1 - \\frac{1}{n}\\right)^2} + \\sqrt{1 + \\left(1 + \\frac{1}{n}\\right)^2}$, $n \\ge 1$.\nWhat is the value of $\\frac{1}{x_1} + \\frac{1}{x_2} + \\cdots + \\frac{1}{x_{20}}$?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'C. $7$',
          principle:
            'Factor $\\frac{1}{n}$ out of the radicals, rationalize the denominator of $\\frac{1}{x_n}$, and collapse the resulting telescoping sum.',
          solution:
            'Rewrite $x_n$ over a common denominator $n$:\n$$x_n = \\frac{\\sqrt{n^2 + (n - 1)^2} + \\sqrt{n^2 + (n + 1)^2}}{n}.$$\nTaking the reciprocal and multiplying numerator and denominator by the conjugate $\\sqrt{n^2 + (n + 1)^2} - \\sqrt{n^2 + (n - 1)^2}$ gives\n$$\\frac{1}{x_n} = \\frac{n\\left(\\sqrt{n^2 + (n + 1)^2} - \\sqrt{n^2 + (n - 1)^2}\\right)}{\\left(n^2 + (n + 1)^2\\right) - \\left(n^2 + (n - 1)^2\\right)}.$$\nSince $(n + 1)^2 - (n - 1)^2 = 4n$, this simplifies cleanly to\n$$\\frac{1}{x_n} = \\frac{\\sqrt{n^2 + (n + 1)^2} - \\sqrt{n^2 + (n - 1)^2}}{4}.$$\nLet $f(n) = \\sqrt{n^2 + (n - 1)^2}$. Then $\\frac{1}{x_n} = \\frac{f(n + 1) - f(n)}{4}$, so the sum telescopes:\n$$\\sum_{n=1}^{20} \\frac{1}{x_n} = \\frac{f(21) - f(1)}{4} = \\frac{\\sqrt{21^2 + 20^2} - \\sqrt{1^2 + 0^2}}{4} = \\frac{\\sqrt{841} - 1}{4} = \\frac{29 - 1}{4} = 7.$$',
          rubric: [
            { code: 'M1', text: 'Rewrites $\\frac{1}{x_n}$ by rationalizing to obtain $\\frac{\\sqrt{n^2+(n+1)^2} - \\sqrt{n^2+(n-1)^2}}{4}$.' },
            { code: 'A1', text: 'Telescopes to $\\frac{\\sqrt{841}-1}{4} = 7$, option C.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Given triangle $PQR$ with $\\angle PQR = 90^\\circ$. Altitude $QS$ is drawn, where $S$ is on $PR$.\nGiven $\\frac{QS}{PR} = \\frac{6}{13}$, find $\\frac{PS}{SR}$.\n\nA. $\\frac{13}{7}$\nB. $\\frac{11}{5}$\nC. $\\frac{9}{4}$\nD. $\\frac{7}{3}$\nE. $\\frac{3}{2}$',
          answer: 'C. $\\frac{9}{4}$',
          principle:
            'By similarity of the right triangles formed by the altitude to the hypotenuse, $QS^2 = PS \\cdot SR$.',
          solution:
            'Because $\\triangle PQS \\sim \\triangle QSR$, the altitude satisfies $QS^2 = PS \\cdot SR$. Let $t = \\frac{PS}{SR} > 0$, or write $PS = tx$ and $SR = x$ so $PR = (t + 1)x$ and $QS = x\\sqrt{t}$.\nFrom $\\frac{QS}{PR} = \\frac{6}{13}$, squaring both sides gives\n$$\\frac{QS^2}{PR^2} = \\frac{PS \\cdot SR}{(PS + SR)^2} = \\frac{t}{(t + 1)^2} = \\frac{36}{169}.$$\nCross-multiplying yields\n$$36(t^2 + 2t + 1) = 169t \\implies 36t^2 - 97t + 36 = 0 \\implies (4t - 9)(9t - 4) = 0.$$\nHence $\\frac{PS}{SR} = \\frac{9}{4}$ or $\\frac{4}{9}$ (depending on whether $P$ or $R$ is closer to $S$). Among the given options, $\\frac{9}{4}$ is option C.',
          rubric: [
            { code: 'M1', text: 'Uses $QS^2 = PS \\cdot SR$ to form $\\frac{t}{(t+1)^2} = \\frac{36}{169}$.' },
            { code: 'A1', text: 'Factors $36t^2 - 97t + 36 = 0$ to obtain $\\frac{9}{4}$, option C.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'What is the sum of all positive integers that are divisors of either $96$ or $160$?\n\nA. $252$\nB. $378$\nC. $567$\nD. $630$\nE. $720$',
          answer: 'C. $567$',
          principle:
            'Use the sum-of-divisors function $\\sigma(n)$ together with the Principle of Inclusion–Exclusion on common divisors $\\gcd(96, 160)$.',
          solution:
            'Prime-factorize both numbers:\n$$96 = 2^5 \\cdot 3, \\qquad 160 = 2^5 \\cdot 5, \\qquad \\gcd(96, 160) = 2^5 = 32.$$\nUsing the multiplicative sum-of-divisors formula $\\sigma(p^k) = 1 + p + \\cdots + p^k$:\n- $\\sigma(96) = (1 + 2 + 4 + 8 + 16 + 32)(1 + 3) = 63 \\times 4 = 252$.\n- $\\sigma(160) = (1 + 2 + 4 + 8 + 16 + 32)(1 + 5) = 63 \\times 6 = 378$.\n- $\\sigma(32) = 63$.\n\nBy Inclusion–Exclusion, the sum of all positive divisors of either $96$ or $160$ is\n$$\\sigma(96) + \\sigma(160) - \\sigma(32) = 252 + 378 - 63 = 567.$$',
          rubric: [
            { code: 'M1', text: 'Computes $\\sigma(96) = 252$, $\\sigma(160) = 378$, and $\\sigma(\\gcd(96,160)) = \\sigma(32) = 63$.' },
            { code: 'A1', text: 'Applies Inclusion–Exclusion to get $252 + 378 - 63 = 567$, option C.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Given a regular hexagon $ABCDEF$ inscribed in a circle of radius $1$. Let $P$ be any point on the circle.\nWhat is the value of $PA^2 + PB^2 + PC^2 + PD^2 + PE^2 + PF^2$?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'E. $12$',
          principle:
            'Pair diametrically opposite vertices of the inscribed regular hexagon and apply Thales’s theorem with the Pythagorean theorem.',
          solution:
            'Since $ABCDEF$ is a regular hexagon inscribed in a circle of radius $1$, the main diagonals $AD$, $BE$, and $CF$ are diameters of length $2$.\nBy Thales’s theorem, $\\angle APD = \\angle BPE = \\angle CPF = 90^\\circ$ (including the degenerate case where $P$ coincides with a vertex).\nApplying the Pythagorean theorem to each right triangle gives\n$$PA^2 + PD^2 = AD^2 = 2^2 = 4,$$\n$$PB^2 + PE^2 = BE^2 = 2^2 = 4,$$\n$$PC^2 + PF^2 = CF^2 = 2^2 = 4.$$\nSumming all three pairs yields\n$$PA^2 + PB^2 + PC^2 + PD^2 + PE^2 + PF^2 = 4 + 4 + 4 = 12.$$',
          rubric: [
            { code: 'M1', text: 'Pairs opposite vertices $(A,D), (B,E), (C,F)$ as diameters and uses $PA^2 + PD^2 = 4$.' },
            { code: 'A1', text: 'Sums the three pairs to obtain $12$, option E.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part 2: Short Answer Problems',
      marks: 20,
      stem: 'Write down only the final answer for each question (5 questions, 4 points each).',
      parts: [
        {
          label: '6',
          marks: 4,
          prompt:
            'How many pairs of positive integers $(x, y)$ are there such that $\\gcd(x, y) = 1$ and $\\frac{2x}{y} + \\frac{15}{8x}$ is an integer?',
          answer: '$4$',
          principle:
            'Combine the fractions over $8xy$ and use $\\gcd(x, y) = 1$ to restrict $x$ to divisors of $15$ and $y$ to divisors of $16$.',
          solution:
            'Suppose $\\frac{2x}{y} + \\frac{15}{8x} = \\frac{16x^2 + 15y}{8xy} = k$ for some integer $k$, i.e.\n$$16x^2 + 15y = 8kxy.$$\nSince $x \\mid 16x^2$ and $x \\mid 8kxy$, we must have $x \\mid 15y$. Because $\\gcd(x, y) = 1$, this implies $x \\mid 15$, so $x \\in \\{1, 3, 5, 15\\}$. In particular, $x$ is odd.\nSimilarly, $y \\mid 16x^2$ and $\\gcd(x, y) = 1$ imply $y \\mid 16$, so $y \\in \\{1, 2, 4, 8, 16\\}$.\nAlso $8 \\mid 16x^2 + 15y$ gives $8 \\mid 15y$, hence $8 \\mid y$, narrowing $y$ to $\\{8, 16\\}$.\n- If $y = 8$: the expression becomes $\\frac{16x^2 + 120}{64x} = \\frac{2x^2 + 15}{8x}$. Since $x$ is odd, $2x^2 + 15$ is odd and cannot be divisible by $8x$. No solutions.\n- If $y = 16$: the expression becomes $\\frac{16x^2 + 240}{128x} = \\frac{x^2 + 15}{8x}$. For every odd $x$, $x^2 \\equiv 1 \\pmod 8$, so $x^2 + 15 \\equiv 16 \\equiv 0 \\pmod 8$. Moreover, $x \\mid 15$ ensures $x \\mid (x^2 + 15)$, and $\\gcd(x, 16) = 1$.\n\nThus all four values $x \\in \\{1, 3, 5, 15\\}$ with $y = 16$ work, giving $4$ pairs: $(1, 16), (3, 16), (5, 16), (15, 16)$.',
          rubric: [
            { code: 'M2', text: 'Uses $\\gcd(x,y) = 1$ to deduce $x \\mid 15$ and $8 \\mid y \\mid 16$.' },
            { code: 'A2', text: 'Eliminates $y = 8$ by parity and verifies all $4$ pairs with $y = 16$.' }
          ]
        },
        {
          label: '7',
          marks: 4,
          prompt: 'Find a natural number $n$ such that $n^n + (n + 1)^n$ is divisible by $2025$.',
          answer: '$3037$ (smallest; more generally $n = 3037 + 4050k$ for any integer $k \\ge 0$)',
          principle:
            'Make $n + 1 \\equiv -n \\pmod{2025}$ with $n$ odd so that $n^n + (n + 1)^n \\equiv n^n - n^n = 0 \\pmod{2025}$.',
          solution:
            'If we choose an odd natural number $n$ such that $n + 1 \\equiv -n \\pmod{2025}$, then\n$$n^n + (n + 1)^n \\equiv n^n + (-n)^n = n^n - n^n = 0 \\pmod{2025}.$$\nThe condition $n + 1 \\equiv -n \\pmod{2025}$ is equivalent to $2025 \\mid (2n + 1)$.\nSet $2n + 1 = 2025m$. Since $2n + 1$ is odd, $m$ must be odd:\n- $m = 1$: $2n + 1 = 2025 \\implies n = 1012$, which is even (giving $n^n + (-n)^n = 2n^n \\not\\equiv 0 \\pmod{2025}$).\n- $m = 3$: $2n + 1 = 3 \\times 2025 = 6075 \\implies n = 3037$, which is odd.\n\nChecking $n = 3037$: $3038 = 6075 - 3037 \\equiv -3037 \\pmod{2025}$, and because $3037$ is odd,\n$$3037^{3037} + 3038^{3037} \\equiv 3037^{3037} - 3037^{3037} = 0 \\pmod{2025}.$$\nHence $n = 3037$ is the smallest natural number satisfying the condition (and any $n = 3037 + 4050k$ with $k \\ge 0$ also works).',
          rubric: [
            { code: 'M2', text: 'Sets $n + 1 \\equiv -n \\pmod{2025}$ (i.e., $2025 \\mid 2n + 1$) with $n$ odd.' },
            { code: 'A2', text: 'Finds $n = 3037$ (from $2n + 1 = 6075$) and verifies $n$ is odd.' }
          ]
        },
        {
          label: '8',
          marks: 4,
          prompt:
            'Manda creates a sequence of numbers using the following procedure:\nFirst, she chooses a positive integer $n$. At each step, she forms the next term by subtracting from the current term the largest perfect square less than or equal to it. She repeats this process until the sequence reaches $0$.\nFor example, if she starts with $n = 78$, her sequence is\n1) $78$,\n2) $78 - 64 = 14$,\n3) $14 - 9 = 5$,\n4) $5 - 4 = 1$,\n5) $1 - 1 = 0$.\nSo, her sequence has $5$ terms. Let $N$ be the smallest positive integer for which Manda’s sequence contains $7$ numbers.\nWhat is $N$?',
          answer: '$167$',
          principle:
            'Work backwards greedily: at each step from $a$ to $b$, we need $a - k^2 = b$ with $k^2 \\le a < (k + 1)^2$, i.e. $b \\le 2k$.',
          solution:
            'Suppose a term $a > 0$ transitions to $b = a - k^2$, where $k^2$ is the largest square $\\le a$. This holds if and only if\n$$k^2 \\le k^2 + b < (k + 1)^2 \\iff 0 \\le b \\le 2k \\iff k \\ge \\left\\lceil \\frac{b}{2} \\right\\rceil.$$\nTo minimize $a = k^2 + b$ at each reverse step given the smallest valid next term $b$, we choose the smallest integer $k \\ge \\max(1, \\lceil b/2 \\rceil)$:\n- Term 7: $a_7 = 0$.\n- Term 6: $b = 0 \\implies k = 1 \\implies a_6 = 1^2 + 0 = 1$.\n- Term 5: $b = 1 \\implies k \\ge \\lceil 1/2 \\rceil = 1 \\implies a_5 = 1^2 + 1 = 2$.\n- Term 4: $b = 2 \\implies k \\ge \\lceil 2/2 \\rceil = 1 \\implies a_4 = 1^2 + 2 = 3$.\n- Term 3: $b = 3 \\implies k \\ge \\lceil 3/2 \\rceil = 2 \\implies a_3 = 2^2 + 3 = 7$.\n- Term 2: $b = 7 \\implies k \\ge \\lceil 7/2 \\rceil = 4 \\implies a_2 = 4^2 + 7 = 23$.\n- Term 1: $b = 23 \\implies k \\ge \\lceil 23/2 \\rceil = 12 \\implies a_1 = 12^2 + 23 = 144 + 23 = 167$.\n\nCheck forward from $N = 167$: $167 \\to 23 \\to 7 \\to 3 \\to 2 \\to 1 \\to 0$ (7 terms). Because the minimum predecessor function is strictly increasing in $b$, $167$ is the smallest starting value with $7$ terms.',
          rubric: [
            { code: 'M2', text: 'Establishes the backward transition condition $k \\ge \\lceil b/2 \\rceil$ for $a = k^2 + b$.' },
            { code: 'A2', text: 'Computes the minimal chain $0 \\leftarrow 1 \\leftarrow 2 \\leftarrow 3 \\leftarrow 7 \\leftarrow 23 \\leftarrow 167$ to get $N = 167$.' }
          ]
        },
        {
          label: '9',
          marks: 4,
          prompt:
            'Given equilateral triangle $ABC$, $\\angle ADE = \\angle CEB = 90^\\circ$, $\\overline{AD} = 3$, $\\overline{CE} = 4$ (with $B$ on segment $DE$).\n(Diagram is not drawn to scale)\nWhat is the side length of triangle $ABC$?',
          answer: '$\\frac{2\\sqrt{39}}{3}$ (or $\\sqrt{\\frac{52}{3}}$)',
          principle:
            'Apply the Pythagorean theorem to the two right triangles $\\triangle ADB$, $\\triangle CEB$ and to the right trapezoid $ADEC$ along side $AC$.',
          figures: [
            {
              src: '/papers/asmopss-2025-secondary/fig-9.webp',
              alt: 'Grid diagram showing vertical segments AD and CE perpendicular to horizontal base DE, point B on segment DE, and triangle ABC.',
              caption: 'Diagram for Question 9 showing equilateral triangle ABC with right angles at D and E (not drawn to scale).'
            }
          ],
          solution:
            'Let $s$ be the side length of equilateral triangle $ABC$, and let $DB = x > 0$ and $BE = y > 0$.\nBy the Pythagorean theorem in right triangles $\\triangle ADB$ and $\\triangle CEB$:\n$$x^2 + 3^2 = s^2 \\implies x = \\sqrt{s^2 - 9}, \\qquad y^2 + 4^2 = s^2 \\implies y = \\sqrt{s^2 - 16}.$$\nSince $AD \\perp DE$ and $CE \\perp DE$, dropping a perpendicular from $A$ to $CE$ forms a right triangle with legs $DE = x + y$ and $CE - AD = 4 - 3 = 1$, and hypotenuse $AC = s$. Thus\n$$(x + y)^2 + 1^2 = s^2.$$\nSubstituting $x^2 = s^2 - 9$ and $y^2 = s^2 - 16$ gives\n$$(s^2 - 9) + (s^2 - 16) + 2\\sqrt{(s^2 - 9)(s^2 - 16)} + 1 = s^2 \\implies 2\\sqrt{(s^2 - 9)(s^2 - 16)} = 24 - s^2.$$\nSquaring both sides (requiring $16 \\le s^2 \\le 24$):\n$$4(s^4 - 25s^2 + 144) = 576 - 48s^2 + s^4 \\implies 3s^4 - 52s^2 = 0 \\implies s^2 = \\frac{52}{3}.$$\nNotice $\\frac{52}{3} \\approx 17.33 \\in [16, 24]$, so the solution is valid. Therefore,\n$$s = \\sqrt{\\frac{52}{3}} = \\frac{2\\sqrt{39}}{3}.$$',
          rubric: [
            { code: 'M2', text: 'Writes $x = \\sqrt{s^2-9}$, $y = \\sqrt{s^2-16}$, and $(x+y)^2 + 1 = s^2$.' },
            { code: 'A2', text: 'Solves $3s^4 - 52s^2 = 0$ to obtain $s = \\frac{2\\sqrt{39}}{3}$ (or $\\sqrt{\\frac{52}{3}}$).' }
          ]
        },
        {
          label: '10',
          marks: 4,
          prompt:
            'There is a regular hexagon of side length $1$ on a plane. Consider the set of all points whose distance from at least one vertex of the hexagon is less than or equal to $1$. Let $s$ be the area of the part of this set lying outside the hexagon, and let $t$ be the area of the regular hexagon.\nWhat is the value of $s - t$? (Take the value of $\\pi = 3$)',
          answer: '$6$',
          principle:
            'Partition the plane into $12$ congruent $30^\\circ$ wedges from the hexagon’s center $O$; inside each wedge the union of the six unit disks reduces to a single disk.',
          solution:
            'Let $O$ be the center of the regular hexagon $ABCDEF$ of side length $1$, so each vertex lies at distance $1$ from $O$. Notice that the entire hexagon lies inside the union $U$ of the $6$ unit disks centered at $A, B, C, D, E, F$, so $s = \\text{Area}(U) - t$.\nDivide the plane around $O$ into $12$ congruent $30^\\circ$ angular wedges by drawing the $6$ rays from $O$ through the vertices and the $6$ rays from $O$ through the midpoints of the sides. Consider the wedge between ray $OA$ and the perpendicular bisector of $AB$ (an angle of $\\frac{\\pi}{6}$).\nEvery point in this wedge is closer to $A$ than to any other vertex, so within this wedge $U$ coincides with the unit disk centered at $A$.\nLet $C\'$ be the outer intersection of the unit circles centered at $A$ and $B$. Then $\\triangle OAC\'$ is an isosceles triangle with $OA = AC\' = 1$ and $\\angle OAC\' = 120^\\circ$, and the remainder of disk $A$ in the wedge is a circular sector of radius $1$ and central angle $60^\\circ$:\n- $\\text{Area}(\\triangle OAC\') = \\frac{1}{2}(1)(1)\\sin 120^\\circ = \\frac{\\sqrt{3}}{4}$.\n- $\\text{Area}(\\text{sector}) = \\frac{60^\\circ}{360^\\circ}\\pi(1)^2 = \\frac{\\pi}{6}$.\n\nMultiplying by $12$ wedges gives the total area of $U$:\n$$\\text{Area}(U) = 12\\left(\\frac{\\pi}{6} + \\frac{\\sqrt{3}}{4}\\right) = 2\\pi + 3\\sqrt{3}.$$\nMeanwhile, the regular hexagon consists of $6$ equilateral triangles of side $1$, so $t = 6 \\cdot \\frac{\\sqrt{3}}{4} = \\frac{3\\sqrt{3}}{2}$.\nHence $s = \\text{Area}(U) - t = 2\\pi + \\frac{3\\sqrt{3}}{2}$, and therefore\n$$s - t = \\left(2\\pi + \\frac{3\\sqrt{3}}{2}\\right) - \\frac{3\\sqrt{3}}{2} = 2\\pi.$$\nTaking $\\pi = 3$, we get $s - t = 2(3) = 6$.',
          rubric: [
            { code: 'M2', text: 'Finds the total area of the union of the six unit disks as $2\\pi + 3\\sqrt{3}$ (or cancels the equilateral triangles directly).' },
            { code: 'A2', text: 'Evaluates $s - t = 2\\pi = 6$ using $\\pi = 3$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part 3: Essay',
      marks: 70,
      stem: 'Write complete, rigorous solutions for each problem (7 problems, 10 points each).',
      parts: [
        {
          label: '11',
          marks: 10,
          prompt:
            'Given acute triangle $ABC$. Points $P$ and $Q$ are located inside the triangle such that $\\angle BAP = \\angle PAQ = \\angle QAC$ and $\\angle BCP = \\angle PCQ = \\angle QCA$.\nShow that $PQ$ is an angle bisector of $\\angle APC$.',
          answer: 'Proof: $Q$ is the incenter of $\\triangle APC$, so $PQ$ bisects $\\angle APC$.',
          principle:
            'Show that $Q$ lies at the intersection of two internal angle bisectors of $\\triangle APC$, making $Q$ its incenter.',
          solution:
            'Let $\\angle BAP = \\angle PAQ = \\angle QAC = \\alpha$ and $\\angle BCP = \\angle PCQ = \\angle QCA = \\gamma$. Since $\\triangle ABC$ is acute, $\\alpha, \\gamma > 0$ and $3\\alpha + 3\\gamma < 180^\\circ$, so the rays $AP$ and $CP$ meet at $P$ inside $\\triangle ABC$, and the rays $AQ$ and $CQ$ meet at $Q$ inside $\\triangle ABC$.\nBecause $\\angle QAC = \\alpha < 2\\alpha = \\angle PAC$ and $\\angle QCA = \\gamma < 2\\gamma = \\angle PCA$, point $Q$ lies strictly inside $\\triangle APC$.\nNow consider $\\triangle APC$:\n1. $\\angle PAQ = \\angle QAC = \\alpha$, so ray $AQ$ is the internal angle bisector of $\\angle PAC$.\n2. $\\angle PCQ = \\angle QCA = \\gamma$, so ray $CQ$ is the internal angle bisector of $\\angle PCA$.\n\nIn any triangle, the three internal angle bisectors concur at the incenter. Since $Q$ is the intersection of the internal angle bisectors of $\\angle PAC$ and $\\angle PCA$ in $\\triangle APC$, $Q$ is the incenter of $\\triangle APC$.\nTherefore, the segment $PQ$ lies on the third internal angle bisector of $\\triangle APC$, meaning $PQ$ bisects $\\angle APC$ (i.e. $\\angle APQ = \\angle QPC$).',
          rubric: [
            { code: 'M3', text: 'Identifies $\\triangle APC$ and shows $Q$ lies inside $\\triangle APC$.' },
            { code: 'M4', text: 'Proves $AQ$ bisects $\\angle PAC$ and $CQ$ bisects $\\angle PCA$, so $Q$ is the incenter of $\\triangle APC$.' },
            { code: 'A3', text: 'Concludes by concurrency of angle bisectors that $PQ$ bisects $\\angle APC$.' }
          ]
        },
        {
          label: '12',
          marks: 10,
          prompt:
            'Six persons, numbered $1, 2, 3, 4, 5, 6$, stand on a line in that order. After that, they sit in a circle in random order.\nWhat is the probability that no two persons with consecutive numbers sit next to each other in the circle?',
          answer: '$\\frac{1}{12}$',
          principle:
            'Fix person $1$ to remove rotational symmetry ($5! = 120$ circular arrangements) and count valid seating orders by casework on the neighbors of $1$.',
          solution:
            'Fix person $1$ at the top of the circle; the remaining $5$ persons can be seated in $5! = 120$ equally likely circular orders.\nWrite the clockwise order starting from $1$ as $(1, a, b, c, d, e)$, where no two consecutive numbers from $\\{1,2\\}, \\{2,3\\}, \\{3,4\\}, \\{4,5\\}, \\{5,6\\}$ are adjacent. Since reversing $(1, a, b, c, d, e)$ gives $(1, e, d, c, b, a)$ which is also valid, we count cases with $a < e$ and multiply by $2$.\nBecause $a, e \\notin \\{2\\}$, we examine the $\\binom{4}{2} = 6$ pairs $\\{a, e\\} \\subseteq \\{3, 4, 5, 6\\}$ with $a < e$:\n1. $(a, e) = (3, 4)$: remaining $\\{2, 5, 6\\}$ occupy $(b, c, d)$. Since $5$ and $6$ cannot be adjacent, $c = 2$; since $5$ cannot sit next to $4$, $b = 5$ and $d = 6$, giving $(1, 3, 5, 2, 6, 4)$ ($2$ orders with its reverse).\n2. $(a, e) = (3, 5)$: remaining $\\{2, 4, 6\\}$. Person $4$ cannot sit next to $3$ or $5$, so $c = 4$; person $2$ cannot sit next to $3$, so $b = 6, d = 2$, giving $(1, 3, 6, 4, 2, 5)$ ($2$ orders with its reverse).\n3. $(a, e) = (3, 6)$: remaining $\\{2, 4, 5\\}$. Since $4$ and $5$ cannot be adjacent, $c = 2$; since $5$ cannot sit next to $6$, $b = 5, d = 4$, giving $(1, 3, 5, 2, 4, 6)$ ($2$ orders with its reverse).\n4. $(a, e) = (4, 5)$: remaining $\\{2, 3, 6\\}$. Since $2$ and $3$ cannot be adjacent, $c = 6$; since $3$ cannot sit next to $4$, $b = 2, d = 3$, giving $(1, 4, 2, 6, 3, 5)$ ($2$ orders with its reverse).\n5. $(a, e) = (4, 6)$: remaining $\\{2, 3, 5\\}$. Person $5$ cannot sit next to $4$ or $6$, so $c = 5$; person $3$ cannot sit next to $4$, so $b = 2, d = 3$, giving $(1, 4, 2, 5, 3, 6)$ ($2$ orders with its reverse).\n6. $(a, e) = (5, 6)$: remaining $\\{2, 3, 4\\}$ must occupy the three consecutive seats $(b, c, d)$, so $3$ is forced next to $2$ or $4$ ($0$ orders).\n\nSumming all valid circular orders gives $2 + 2 + 2 + 2 + 2 + 0 = 10$ favorable arrangements out of $5! = 120$.\nTherefore, the probability is\n$$\\frac{10}{120} = \\frac{1}{12}.$$',
          rubric: [
            { code: 'M3', text: 'Fixes person $1$ to get $5! = 120$ total circular seating arrangements.' },
            { code: 'M4', text: 'Performs complete casework on the neighbors of $1$ (or Inclusion–Exclusion) to count the $10$ valid arrangements.' },
            { code: 'A3', text: 'Computes the probability $\\frac{10}{120} = \\frac{1}{12}$.' }
          ]
        },
        {
          label: '13',
          marks: 10,
          prompt:
            'Given any $2025$ segments.\nCan we always choose three segments that can be used to form a triangle?',
          answer: 'No (counterexample: lengths $1, 2, 4, \\ldots, 2^{2024}$, or Fibonacci numbers $F_1, F_2, \\ldots, F_{2025}$)',
          principle:
            'Three segments of lengths $a \\le b \\le c$ form a non-degenerate triangle if and only if $a + b > c$; construct a sequence where every term is at least the sum of the two preceding terms.',
          solution:
            '**No**, we cannot always choose three segments that form a triangle.\n\n**Counterexample:** Choose $2025$ segments whose lengths are powers of $2$:\n$$1,\\ 2,\\ 4,\\ 8,\\ \\ldots,\\ 2^{2024}.$$\n(Alternatively, one may use the first $2025$ Fibonacci numbers $1, 1, 2, 3, 5, \\ldots, F_{2025}$.)\n\nTake any three distinct segments from this collection, and denote their lengths by $2^i < 2^j < 2^k$, so $i \\le k - 2$ and $j \\le k - 1$. Then the sum of the two shorter lengths satisfies\n$$2^i + 2^j \\le 2^{k - 2} + 2^{k - 1} = \\frac{3}{4} \\cdot 2^k < 2^k.$$\nBecause the sum of the two shorter segments is strictly less than the longest segment, the triangle inequality fails for every triple of segments. Hence no three segments from this set can form a triangle.',
          rubric: [
            { code: 'M3', text: 'States the answer is No and recalls the triangle inequality $a + b > c$ for $a \\le b \\le c$.' },
            { code: 'M4', text: 'Provides an explicit $2025$-segment counterexample such as $1, 2, 4, \\ldots, 2^{2024}$ (or $F_1, \\ldots, F_{2025}$).' },
            { code: 'A3', text: 'Proves that no triple in the counterexample satisfies the triangle inequality.' }
          ]
        },
        {
          label: '14',
          marks: 10,
          prompt:
            'Let $a, b, c$ be integers greater than or equal to $2$.\nShow that: $a(a - 1) + b(b - 1) + c(c - 1) \\le (a + b + c - 4)(a + b + c - 5) + 4$.',
          answer: 'Proof by shifting $x = a - 2, y = b - 2, z = c - 2 \\ge 0$, reducing $\\text{RHS} - \\text{LHS}$ to $2(xy + yz + zx) \\ge 0$.',
          principle:
            'Shift each variable by its lower bound $2$ so that non-negativity makes cross-terms obviously non-negative.',
          solution:
            'Let $x = a - 2$, $y = b - 2$, and $z = c - 2$. Since $a, b, c \\ge 2$, we have $x, y, z \\ge 0$.\nSubstitute $a = x + 2$, $b = y + 2$, $c = z + 2$ into both sides:\n\n**Left-hand side:**\n$$a(a - 1) = (x + 2)(x + 1) = x^2 + 3x + 2,$$\nand similarly for $b$ and $c$, so\n$$\\text{LHS} = (x^2 + y^2 + z^2) + 3(x + y + z) + 6.$$\n\n**Right-hand side:**\nNote that $a + b + c - 4 = x + y + z + 2$ and $a + b + c - 5 = x + y + z + 1$. Letting $S = x + y + z$, we obtain\n$$\\text{RHS} = (S + 2)(S + 1) + 4 = S^2 + 3S + 2 + 4 = (x + y + z)^2 + 3(x + y + z) + 6.$$\n\nSubtracting $\\text{LHS}$ from $\\text{RHS}$ gives\n$$\\text{RHS} - \\text{LHS} = (x + y + z)^2 - (x^2 + y^2 + z^2) = 2(xy + yz + zx).$$\nSince $x, y, z \\ge 0$, we have $2(xy + yz + zx) \\ge 0$, so $\\text{LHS} \\le \\text{RHS}$, as required. Equality holds if and only if at least two of $a, b, c$ equal $2$.',
          rubric: [
            { code: 'M3', text: 'Introduces the shift $x = a - 2, y = b - 2, z = c - 2 \\ge 0$.' },
            { code: 'M4', text: 'Expands both sides in terms of $x, y, z$ and computes $\\text{RHS} - \\text{LHS} = 2(xy + yz + zx)$.' },
            { code: 'A3', text: 'Concludes $\\text{RHS} - \\text{LHS} \\ge 0$ from $x, y, z \\ge 0$.' }
          ]
        },
        {
          label: '15',
          marks: 10,
          prompt:
            'Given positive integers $a, b, c, d$ such that the quadratic equation\n$$x^2 - (a^2 + b^2 + c^2 + d^2 + 1)x + ab + bc + cd + da = 0$$\nhas an integer solution.\nProve that the other solution is also an integer, and that the two solutions are perfect squares.',
          answer: 'Proof: $x_1 + x_2 \\in \\mathbb{Z}$ gives $x_2 \\in \\mathbb{Z}$, and $f(0) > 0, f(1) \\le 0$ forces $1$ to be a root, yielding $a = b = c = d$ and roots $1^2$ and $(2a)^2$.',
          principle:
            'Use Vieta’s sum-of-roots formula for integrality, then evaluate the quadratic at $x = 0$ and $x = 1$ to trap one root in $(0, 1]$.',
          solution:
            'Let $f(x) = x^2 - (a^2 + b^2 + c^2 + d^2 + 1)x + (ab + bc + cd + da)$, and let its two roots be $x_1$ and $x_2$, where $x_1 \\in \\mathbb{Z}$.\n\n**1. The other root is also an integer.**\nBy Vieta’s formulas,\n$$x_1 + x_2 = a^2 + b^2 + c^2 + d^2 + 1.$$\nSince $a, b, c, d$ and $x_1$ are integers, $x_2 = (a^2 + b^2 + c^2 + d^2 + 1) - x_1$ is also an integer.\n\n**2. Both roots are perfect squares.**\nEvaluate $f(x)$ at $x = 0$ and $x = 1$:\n- $f(0) = ab + bc + cd + da > 0$, because $a, b, c, d \\ge 1$.\n- $f(1) = 1 - (a^2 + b^2 + c^2 + d^2 + 1) + ab + bc + cd + da = -\\frac{1}{2}\\left[(a - b)^2 + (b - c)^2 + (c - d)^2 + (d - a)^2\\right] \\le 0$.\n\nNotice also that $f(x) > 0$ for all $x \\le 0$ (since $x^2 \\ge 0$, $-(a^2+b^2+c^2+d^2+1)x \\ge 0$, and $ab+bc+cd+da > 0$). Thus both roots are positive integers, so $x_1, x_2 \\ge 1$.\nBecause $f(x)$ is a monic parabola with $f(0) > 0$ and $f(1) \\le 0$, its smaller root lies in the interval $(0, 1]$. The only integer in $(0, 1]$ is $1$, so the smaller root must be $1$, forcing $f(1) = 0$.\nFrom $f(1) = 0$, we get\n$$(a - b)^2 + (b - c)^2 + (c - d)^2 + (d - a)^2 = 0 \\implies a = b = c = d.$$\nSubstituting $b = c = d = a$ into $x_1 + x_2$ with $x_1 = 1$ gives\n$$x_2 = (4a^2 + 1) - 1 = 4a^2 = (2a)^2.$$\nHence the two solutions are $1 = 1^2$ and $4a^2 = (2a)^2$, both of which are perfect squares.',
          rubric: [
            { code: 'M3', text: 'Uses Vieta’s formula $x_1 + x_2 = a^2 + b^2 + c^2 + d^2 + 1 \\in \\mathbb{Z}$ to prove $x_2 \\in \\mathbb{Z}$.' },
            { code: 'M4', text: 'Computes $f(0) > 0$ and $f(1) = -\\frac{1}{2}[(a-b)^2+(b-c)^2+(c-d)^2+(d-a)^2] \\le 0$ to force $x_1 = 1$.' },
            { code: 'A3', text: 'Deduces $a = b = c = d$ and shows the roots are $1^2$ and $(2a)^2$.' }
          ]
        },
        {
          label: '16',
          marks: 10,
          prompt:
            'Two disjoint subsets $A$ and $B$ of the set $\\{1, 2, \\ldots, 2025\\}$ satisfy the following properties:\n- They have the same number of elements\n- When we divide every element of $B$ by each element of $A$, we obtain quotient equal to $1$.\nWhat is the size of subset $A$?',
          answer: 'Maximum possible size is $506$ (any size $1 \\le k \\le 506$ satisfies the stated conditions)',
          principle:
            'The integer-division quotient $\\lfloor b/a \\rfloor = 1$ with $a \\ne b$ is equivalent to $a < b < 2a$, which tightly bounds $|A| = |B| = k$ via extremal elements.',
          solution:
            'Let $|A| = |B| = k$. For every $a \\in A$ and $b \\in B$, obtaining integer-division quotient $1$ when dividing $b$ by $a$ means $a \\le b < 2a$. Since $A$ and $B$ are disjoint, $a \\ne b$, so\n$$a < b < 2a \\quad \\text{for all } a \\in A,\\ b \\in B.$$\nLet $a_{\\min} = \\min A$, $a_{\\max} = \\max A$, $b_{\\min} = \\min B$, and $b_{\\max} = \\max B$.\nSince $A$ and $B$ each contain $k$ distinct integers:\n1. $a_{\\max} \\ge a_{\\min} + k - 1$.\n2. Because every $b \\in B$ exceeds every $a \\in A$, we have $b_{\\min} \\ge a_{\\max} + 1 \\ge a_{\\min} + k$.\n3. Thus $b_{\\max} \\ge b_{\\min} + k - 1 \\ge a_{\\min} + 2k - 1$.\n4. On the other hand, $b_{\\max} < 2a_{\\min}$ implies $b_{\\max} \\le 2a_{\\min} - 1$.\n\nCombining (3) and (4) gives\n$$a_{\\min} + 2k - 1 \\le 2a_{\\min} - 1 \\implies a_{\\min} \\ge 2k.$$\nSubstituting $a_{\\min} \\ge 2k$ into $b_{\\max} \\le 2025$ yields\n$$4k - 1 \\le a_{\\min} + 2k - 1 \\le b_{\\max} \\le 2025 \\implies 4k \\le 2026 \\implies k \\le 506.$$\n\n**Achievability:** For $k = 506$, choose\n$$A = \\{1012, 1013, \\ldots, 1517\\}, \\qquad B = \\{1518, 1519, \\ldots, 2023\\}.$$\nEach set has $506$ elements, $A \\cap B = \\emptyset$, and for any $a \\in A, b \\in B$ we have $a < 1518 \\le b \\le 2023 < 2024 \\le 2a$, so $\\lfloor b/a \\rfloor = 1$.\n*(Note: As phrased without the word “maximum”, any subset size $1 \\le k \\le 506$ satisfies the two bulleted properties by taking the first $k$ elements of $A$ and $B$ above; the intended maximal size is $506$.)*',
          rubric: [
            { code: 'M3', text: 'Translates the quotient condition and disjointness into $a < b < 2a$ for all $a \\in A, b \\in B$.' },
            { code: 'M4', text: 'Bounds $b_{\\max} \\ge a_{\\min} + 2k - 1$ and $a_{\\min} \\ge 2k$ to prove $4k - 1 \\le 2025$, i.e. $k \\le 506$.' },
            { code: 'A3', text: 'Gives an explicit construction for $k = 506$ (and notes any $1 \\le k \\le 506$ works).' }
          ]
        },
        {
          label: '17',
          marks: 10,
          prompt:
            'A net is made of strings which make a grid consisting of small congruent squares. The size of the net is $100 \\times 10$ small squares.\nWhat is the maximum number of edges of small squares which can be cut without separating the net into two pieces?\nNote: The cut is always made in the middle of a small square side, not at the ends.',
          answer: '$1000$',
          principle:
            'Model the net as a connected planar graph on $V$ vertices with $E$ edges; keeping it in one piece requires preserving at least a spanning tree of $V - 1$ edges.',
          solution:
            'View the net as a connected graph whose vertices are the grid intersection points (junctions of strings) and whose edges are the sides of the small squares. Because cuts are made strictly in the middle of edges and not at the endpoints, cutting an edge removes that edge while keeping all vertices intact.\n- Number of vertices (junctions) in a $100 \\times 10$ grid of squares:\n$$V = (100 + 1)(10 + 1) = 101 \\times 11 = 1111.$$\n- Number of edges (strings): there are $100 \\times 11 = 1100$ horizontal edges and $101 \\times 10 = 1010$ vertical edges, so\n$$E = 1100 + 1010 = 2110.$$\n\nTo keep the net in a single connected piece, the remaining uncut edges must form a connected graph on all $V = 1111$ vertices (note that an isolated vertex would already be a separate piece, or at minimum a cycle-free spanning tree connects every vertex). Any connected graph on $V$ vertices has at least $V - 1 = 1110$ edges.\nTherefore, the maximum number of edges that can be cut is at most\n$$E - (V - 1) = 2110 - 1110 = 1000.$$\n(Equivalently, each cut along a cycle opens one of the $100 \\times 10 = 1000$ bounded unit-square faces without disconnecting the graph, until no cycles remain.)\n\n**Construction achieving $1000$ cuts:** Leave intact the entire top horizontal border ($100$ edges) and all $101$ vertical columns of $10$ edges each ($101 \\times 10 = 1010$ edges), which forms a comb-shaped spanning tree of $100 + 1010 = 1110$ edges connecting all $1111$ vertices. Cut all remaining $100 \\times 10 = 1000$ horizontal edges.\nHence, the maximum number of edges that can be cut is $1000$.',
          rubric: [
            { code: 'M3', text: 'Counts the grid vertices $V = 101 \\times 11 = 1111$ and edges $E = 1100 + 1010 = 2110$.' },
            { code: 'M4', text: 'Uses spanning-tree connectivity (or Euler/cycle elimination) to bound cuts by $E - (V - 1) = 1000$.' },
            { code: 'A3', text: 'Gives an explicit spanning-tree construction achieving $1000$ cuts.' }
          ]
        }
      ]
    }
  ]
};
