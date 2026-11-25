/**
 * Paket Soal Terstruktur: AMC 12A (2024) — 24 of 25 multiple-choice problems included.
 * Source: scraped_raw/amc-12a-2024.md (MAA AMC 12A 2024).
 * Q18 is restored with a curated SVG diagram; Q22 is skipped because its source diagram is omitted.
 */
const OK = [{ code: 'A1', text: 'Correct option selected with valid supporting reasoning.' }];

export default {
  id: 'amc-12a-2024',
  slug: 'amc-12a-2024',
  subject: 'olimpiade-mat',
  grade: 12,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 12A (2024)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab3-vektor',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma11-bab1-fungsi-invers',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 12',
  title: 'AMC 12A — 2024',
  totalMarks: 24,
  instructions:
    'This set contains 24 multiple-choice problems from the 25-problem 2024 AMC 12A paper (included: Q1-Q21, Q23-Q25, with Q18 restored alongside a curated SVG diagram; skipped: Q22 requiring a missing grid figure). Original problem numbers are preserved. In the official AMC 12 contest, a correct answer scores 6 points, an unanswered problem scores 1.5 points, and an incorrect answer scores 0 points; in this practice set, each included problem is worth 1 point (24 points total). Calculators are not allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 12A',
    file: 'scraped_raw/amc-12a-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 24,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 24 included problems (original AMC 12A numbering; 1 point each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'What is the value of $9901 \\cdot 101 - 99 \\cdot 10101$?\n\nA. $2$\nB. $20$\nC. $200$\nD. $202$\nE. $2020$',
          answer: 'A. $2$',
          principle: 'Use the distributive property around multiples of $100$ to cancel the large cross-terms.',
          solution:
            'Rewrite $9901 = 9900 + 1$ and $10101 = 10100 + 1$:\n$$9901 \\cdot 101 - 99 \\cdot 10101 = (9900 + 1) \\cdot 101 - 99 \\cdot (10100 + 1).$$\nExpanding both products gives\n$$9900 \\cdot 101 + 101 - 99 \\cdot 10100 - 99.$$\nSince $9900 \\cdot 101 = 99 \\cdot 100 \\cdot 101 = 99 \\cdot 10100$, the two large terms cancel, leaving $101 - 99 = 2$.\n(Alternatively, $9901 \\cdot 101 = 990100 + 9901 = 1000001$ and $99 \\cdot 10101 = 1010100 - 10101 = 999999$, whose difference is $1000001 - 999999 = 2$.)',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'A model used to estimate the time it will take to hike to the top of the mountain on a trail is of the form $T = aL + bG$, where $a$ and $b$ are constants, $T$ is the time in minutes, $L$ is the length of the trail in miles, and $G$ is the altitude gain in feet. The model estimates that it will take $69$ minutes to hike to the top if a trail is $1.5$ miles long and ascends $800$ feet, as well as if a trail is $1.2$ miles long and ascends $1100$ feet. How many minutes does the model estimate it will take to hike to the top if the trail is $4.2$ miles long and ascends $4000$ feet?\n\nA. $240$\nB. $246$\nC. $252$\nD. $258$\nE. $264$',
          answer: 'B. $246$',
          principle: 'Set up a system of two linear equations in $a$ and $b$ and solve by elimination and substitution.',
          solution:
            'Substituting the two given trails into $T = aL + bG$ yields\n$$\\frac{3}{2}a + 800b = 69, \\qquad \\frac{6}{5}a + 1100b = 69.$$\nSubtracting the second equation from the first eliminates $69$:\n$$\\left(\\frac{3}{2} - \\frac{6}{5}\\right)a - 300b = 0 \\implies \\frac{3}{10}a = 300b \\implies a = 1000b.$$\nSubstitute $a = 1000b$ into the first equation:\n$$\\frac{3}{2}(1000b) + 800b = 2300b = 69 \\implies b = \\frac{69}{2300} = \\frac{3}{100}.$$\nHence $a = 1000 \\cdot \\frac{3}{100} = 30$. For $L = 4.2 = \\frac{21}{5}$ and $G = 4000$,\n$$T = 30 \\cdot \\frac{21}{5} + \\frac{3}{100} \\cdot 4000 = 126 + 120 = 246.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'The number $2024$ is written as the sum of not necessarily distinct two-digit numbers. What is the least number of two-digit numbers needed to write this sum?\n\nA. $20$\nB. $21$\nC. $22$\nD. $23$\nE. $24$',
          answer: 'B. $21$',
          principle: 'Bound the sum from above using the largest two-digit integer $99$, then give an explicit construction.',
          solution:
            'Every two-digit integer is at most $99$, so the sum of $k$ two-digit numbers is at most $99k$.\nFor $k = 20$, the maximum possible sum is $99 \\cdot 20 = 1980 < 2024$, so $20$ two-digit numbers cannot reach $2024$, forcing $k \\ge 21$.\nWe can achieve $k = 21$ by taking twenty copies of $99$ and one copy of $44$:\n$$20 \\cdot 99 + 44 = 1980 + 44 = 2024,$$\nand $44$ is a valid two-digit number ($10 \\le 44 \\le 99$). Thus the least number needed is $21$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'What is the least value of $n$ such that $n!$ is a multiple of $2024$?\n\nA. $11$\nB. $21$\nC. $22$\nD. $23$\nE. $253$',
          answer: 'D. $23$',
          principle: 'Factor $2024$ into primes; $n!$ is divisible by $2024$ iff every prime power in $2024$ divides $n!$.',
          solution:
            'Find the prime factorization of $2024$:\n$$2024 = 8 \\cdot 253 = 2^3 \\cdot 11 \\cdot 23.$$\nSince $23$ is prime and $23 \\mid n!$, we must have $n \\ge 23$. Conversely, at $n = 23$, the product $23!$ includes the factors $23$, $11$, and $2 \\cdot 4 = 8 = 2^3$, so $2^3 \\cdot 11 \\cdot 23 \\mid 23!$. Therefore, the least such integer is $n = 23$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'A data set containing $20$ numbers, some of which are $6$, has mean $45$. When all the $6$s are removed, the data set has mean $66$. How many $6$s were in the original data set?\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          answer: 'D. $7$',
          principle: 'Relate the arithmetic mean to the total sum of elements before and after removing the $6$s.',
          solution:
            'The sum of all $20$ numbers is $20 \\cdot 45 = 900$.\nLet $k$ be the number of $6$s in the data set. After removing all $k$ sixes, $20 - k$ numbers remain with sum $900 - 6k$ and mean $66$:\n$$\\frac{900 - 6k}{20 - k} = 66 \\implies 900 - 6k = 66(20 - k) = 1320 - 66k.$$\nRearranging gives $60k = 420$, so $k = 7$.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The product of three integers is $60$. What is the least possible positive sum of the three integers?\n\nA. $2$\nB. $3$\nC. $5$\nD. $6$\nE. $13$',
          answer: 'B. $3$',
          principle: 'Use sign analysis and AM-GM to narrow down factorizations $-p, -q, r$ of $60$ with $r > p + q$.',
          solution:
            'Since the product is $60 > 0$, either all three integers are positive, or two are negative and one is positive.\n- If all three are positive, they sum to at least $3$ (in fact, since $60 = 2^2 \\cdot 3 \\cdot 5$, the smallest sum among three positive factors is $3 + 4 + 5 = 12$).\n- If two are negative and one is positive, write the integers as $-p, -q, r$ with $p, q, r \\in \\mathbb{Z}^+$ and $pqr = 60$. Their sum is $r - p - q$. For this sum to be positive, we need $r > p + q$. By AM-GM,\n$$r > p + q \\ge 2\\sqrt{pq} = 2\\sqrt{\\frac{60}{r}} \\implies r^3 > 240.$$\nSince $6^3 = 216 < 240$, we must have $r \\ge 7$. The divisors $r \\mid 60$ with $r \\ge 7$ are $10, 12, 15, 20, 30, 60$:\n  - $r = 10$ ($pq = 6$): $(p, q) = (1, 6)$ gives $10 - 1 - 6 = 3$; $(p, q) = (2, 3)$ gives $10 - 2 - 3 = 5$.\n  - $r = 12$ ($pq = 5$): $(p, q) = (1, 5)$ gives $12 - 1 - 5 = 6$.\n  - $r \\ge 15$ ($pq \\le 4$): $p + q \\le 1 + 4 = 5$, so $r - p - q \\ge 15 - 5 = 10$.\nThus the least possible positive sum is $3$, achieved by $-1, -6, 10$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'In $\\triangle ABC$, $\\angle ABC = 90^\\circ$ and $BA = BC = \\sqrt{2}$. Points $P_1, P_2, \\ldots, P_{2024}$ lie on hypotenuse $AC$ so that $AP_1 = P_1 P_2 = P_2 P_3 = \\cdots = P_{2023} P_{2024} = P_{2024} C$. What is the length of the vector sum\n$$\\vec{BP_1} + \\vec{BP_2} + \\vec{BP_3} + \\cdots + \\vec{BP_{2024}}?$$\n\nA. $1011$\nB. $1012$\nC. $2023$\nD. $2024$\nE. $2025$',
          answer: 'D. $2024$',
          principle: 'Pair symmetric points about the midpoint $M$ of $AC$ so that $\\vec{BP_k} + \\vec{BP_{2025-k}} = 2\\vec{BM}$.',
          solution:
            'Let $M$ be the midpoint of hypotenuse $AC$. Because $P_1, P_2, \\ldots, P_{2024}$ divide $AC$ into $2025$ equal segments, $P_k$ and $P_{2025-k}$ are symmetric about $M$ for each $1 \\le k \\le 1012$.\nTherefore $\\vec{MP_k} + \\vec{MP_{2025-k}} = \\vec{0}$, which gives\n$$\\vec{BP_k} + \\vec{BP_{2025-k}} = (\\vec{BM} + \\vec{MP_k}) + (\\vec{BM} + \\vec{MP_{2025-k}}) = 2\\,\\vec{BM}.$$\nGrouping the $2024$ vectors into $1012$ symmetric pairs yields\n$$\\sum_{k=1}^{2024} \\vec{BP_k} = 1012 \\cdot (2\\,\\vec{BM}) = 2024\\,\\vec{BM}.$$\nIn right triangle $\\triangle ABC$ with $BA = BC = \\sqrt{2}$, the hypotenuse has length $AC = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{2})^2} = 2$. Since the median to the hypotenuse of a right triangle has length $\\frac{1}{2}AC$, we have $BM = 1$. Hence the length of the vector sum is $2024 \\cdot 1 = 2024$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'How many angles $\\theta$ with $0 \\le \\theta \\le 2\\pi$ satisfy $\\log(\\sin(3\\theta)) + \\log(\\cos(2\\theta)) = 0$?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'A. $0$',
          principle: 'Combine the logarithms and use the bounds $\\sin(3\\theta) \\le 1$ and $\\cos(2\\theta) \\le 1$ on the domain.',
          solution:
            'For the logarithms to be defined, we require $\\sin(3\\theta) > 0$ and $\\cos(2\\theta) > 0$. Under these conditions, the equation becomes\n$$\\log(\\sin(3\\theta)\\cos(2\\theta)) = 0 \\implies \\sin(3\\theta)\\cos(2\\theta) = 1.$$\nSince $0 < \\sin(3\\theta) \\le 1$ and $0 < \\cos(2\\theta) \\le 1$, their product equals $1$ if and only if\n$$\\sin(3\\theta) = 1 \\quad \\text{and} \\quad \\cos(2\\theta) = 1.$$\nOn $[0, 2\\pi]$, $\\cos(2\\theta) = 1$ holds only when $2\\theta \\in \\{0, 2\\pi, 4\\pi\\}$, i.e., $\\theta \\in \\{0, \\pi, 2\\pi\\}$. However, for each of these three angles, $3\\theta \\in \\{0, 3\\pi, 6\\pi\\}$, so $\\sin(3\\theta) = 0 \\ne 1$. Thus $0$ angles satisfy the equation.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Let $M$ be the greatest integer such that both $M + 1213$ and $M + 3773$ are perfect squares. What is the units digit of $M$?\n\nA. $1$\nB. $2$\nC. $3$\nD. $6$\nE. $8$',
          answer: 'E. $8$',
          principle: 'Factor the difference of two squares and minimize the positive factor difference to maximize $a$.',
          solution:
            'Write $M + 1213 = a^2$ and $M + 3773 = b^2$ with integers $a, b \\ge 0$. Subtracting gives\n$$b^2 - a^2 = 3773 - 1213 = 2560 \\implies (b - a)(b + a) = 2560.$$\nSince $b - a$ and $b + a$ have the same parity and their product is even, both factors are even. Writing $d = b - a > 0$, we have\n$$a = \\frac{(b + a) - (b - a)}{2} = \\frac{1}{2}\\left(\\frac{2560}{d} - d\\right),$$\nwhich is strictly decreasing in $d$. To maximize $M = a^2 - 1213$, we maximize $a$ by choosing the smallest positive even integer $d$ such that $\\frac{2560}{d}$ is also even. Taking $d = b - a = 2$ gives $b + a = 1280$, so $a = \\frac{1280 - 2}{2} = 639$ (and $b = 641$).\nModulo $10$, $M = 639^2 - 1213 \\equiv 9^2 - 3 = 81 - 3 = 78 \\equiv 8 \\pmod{10}$, so the units digit of $M$ is $8$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Let $\\alpha$ be the radian measure of the smallest angle in a $3\\text{-}4\\text{-}5$ right triangle. Let $\\beta$ be the radian measure of the smallest angle in a $7\\text{-}24\\text{-}25$ right triangle. In terms of $\\alpha$, what is $\\beta$?\n\nA. $\\dfrac{\\alpha}{3}$\nB. $\\alpha - \\dfrac{\\pi}{8}$\nC. $\\dfrac{\\pi}{2} - 2\\alpha$\nD. $\\dfrac{\\alpha}{2}$\nE. $\\pi - 4\\alpha$',
          answer: 'C. $\\dfrac{\\pi}{2} - 2\\alpha$',
          principle: 'Apply the double-angle tangent identity and the cofunction identity $\\cot x = \\tan(\\frac{\\pi}{2} - x)$.',
          solution:
            'In a $3\\text{-}4\\text{-}5$ right triangle, the smallest angle $\\alpha$ is opposite the shortest leg of length $3$, so $\\tan\\alpha = \\frac{3}{4}$ and $0 < \\alpha < \\frac{\\pi}{4}$. By the double-angle formula,\n$$\\tan(2\\alpha) = \\frac{2\\tan\\alpha}{1 - \\tan^2\\alpha} = \\frac{2 \\cdot \\frac{3}{4}}{1 - \\frac{9}{16}} = \\frac{\\frac{3}{2}}{\\frac{7}{16}} = \\frac{24}{7}.$$\nIn a $7\\text{-}24\\text{-}25$ right triangle, the smallest angle $\\beta$ satisfies $0 < \\beta < \\frac{\\pi}{4}$ and\n$$\\tan\\beta = \\frac{7}{24} = \\frac{1}{\\tan(2\\alpha)} = \\cot(2\\alpha) = \\tan\\!\\left(\\frac{\\pi}{2} - 2\\alpha\\right).$$\nSince both $\\beta$ and $\\frac{\\pi}{2} - 2\\alpha$ lie in $\\left(0, \\frac{\\pi}{2}\\right)$, where $\\tan$ is strictly increasing, it follows that $\\beta = \\frac{\\pi}{2} - 2\\alpha$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'There are exactly $K$ positive integers $b$ with $5 \\le b \\le 2024$ such that the base-$b$ integer $2024_b$ is divisible by $16$ (where $16$ is in base ten). What is the sum of the digits of $K$?\n\nA. $16$\nB. $17$\nC. $18$\nD. $20$\nE. $21$',
          answer: 'D. $20$',
          principle: 'Expand $2024_b$ as a polynomial in $b$ and test residues modulo $8$.',
          solution:
            'In base ten,\n$$2024_b = 2b^3 + 2b + 4 = 2(b^3 + b + 2).$$\nThus $16 \\mid 2024_b$ if and only if $8 \\mid (b^3 + b + 2)$. Testing $b \\bmod 8$:\n- $b \\equiv 0$: $0 + 0 + 2 \\equiv 2 \\pmod 8$\n- $b \\equiv 1$: $1 + 1 + 2 \\equiv 4 \\pmod 8$\n- $b \\equiv 2$: $8 + 2 + 2 \\equiv 4 \\pmod 8$\n- $b \\equiv 3$: $27 + 3 + 2 = 32 \\equiv 0 \\pmod 8$\n- $b \\equiv 4$: $64 + 4 + 2 \\equiv 6 \\pmod 8$\n- $b \\equiv 5$: $125 + 5 + 2 = 132 \\equiv 4 \\pmod 8$\n- $b \\equiv 6$: $216 + 6 + 2 = 224 \\equiv 0 \\pmod 8$\n- $b \\equiv 7$: $(-1)^3 + (-1) + 2 = 0 \\pmod 8$\nSo $8 \\mid (b^3 + b + 2)$ precisely when $b \\equiv 3, 6, \\text{ or } 7 \\pmod 8$.\nSince $2024 = 8 \\cdot 253$, the integers $1, 2, \\ldots, 2024$ form $253$ complete blocks of $8$, containing $3 \\cdot 253 = 759$ such integers. Among $1, 2, 3, 4$, only $b = 3$ qualifies, so in $[5, 2024]$ there are $K = 759 - 1 = 758$ values of $b$. The sum of the digits of $K$ is $7 + 5 + 8 = 20$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'The first three terms of a geometric sequence are the integers $a$, $720$, and $b$, where $a < 720 < b$. What is the sum of the digits of the least possible value of $b$?\n\nA. $9$\nB. $12$\nC. $16$\nD. $18$\nE. $21$',
          answer: 'E. $21$',
          principle: 'Use $ab = 720^2$ and prime factorization to locate the smallest divisor of $720^2$ greater than $720$.',
          solution:
            'Since $a, 720, b$ form a geometric sequence with $b > 720 > 0$, we have $ab = 720^2 > 0$ (so $a > 0$ as well). Factoring $720 = 2^4 \\cdot 3^2 \\cdot 5$ gives\n$$ab = 720^2 = 2^8 \\cdot 3^4 \\cdot 5^2.$$\nMinimizing the integer $b > 720$ means finding the smallest divisor $b = 2^i 3^j 5^k$ ($0 \\le i \\le 8$, $0 \\le j \\le 4$, $0 \\le k \\le 2$) strictly greater than $720$. Note that $2^8 \\cdot 3 = 768$ is one such divisor (paired with $a = 720^2/768 = 675$), so we check whether any divisor lies in $(720, 768)$:\n- If $k = 2$: $720 < 25 \\cdot 2^i 3^j < 768 \\iff 28 < 2^i 3^j \\le 30$, i.e., $2^i 3^j \\in \\{29, 30\\}$, impossible since $29$ is prime and $5 \\mid 30$.\n- If $k = 1$: $720 < 5 \\cdot 2^i 3^j < 768 \\iff 144 < 2^i 3^j \\le 153$. Checking $2^i 3^j$ near $144$ ($3^0\\!:\\,128, 256$; $3^1\\!:\\,96, 192$; $3^2\\!:\\,144, 288$; $3^3\\!:\\,108, 216$; $3^4\\!:\\,81, 162$) yields none in $[145, 153]$.\n- If $k = 0$: checking $2^i 3^j$ with $i \\le 8, j \\le 4$ near $720$ ($3^0\\!:\\,256$; $3^1\\!:\\,384, 768$; $3^2\\!:\\,576, 1152$; $3^3\\!:\\,432, 864$; $3^4\\!:\\,648, 1296$) yields none in $(720, 768)$.\nHence the least possible value is $b = 768$, and its digit sum is $7 + 6 + 8 = 21$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'The graph of $y = e^{x+1} + e^{-x} - 2$ has an axis of symmetry. What is the reflection of the point $\\left(-1, \\tfrac{1}{2}\\right)$ over this axis?\n\nA. $\\left(-1, -\\tfrac{3}{2}\\right)$\nB. $(-1, 0)$\nC. $\\left(-1, \\tfrac{1}{2}\\right)$\nD. $\\left(0, \\tfrac{1}{2}\\right)$\nE. $\\left(3, \\tfrac{1}{2}\\right)$',
          answer: 'D. $\\left(0, \\tfrac{1}{2}\\right)$',
          principle: 'Identify the vertical axis of symmetry $x = x_0$ where replacing $x$ by $2x_0 - x$ leaves the function invariant.',
          solution:
            'Substituting $x = t - \\frac{1}{2}$ centers the two exponents symmetrically:\n$$y = e^{t + 1/2} + e^{-(t - 1/2)} - 2 = e^{1/2}(e^t + e^{-t}) - 2.$$\nBecause $e^t + e^{-t}$ is an even function of $t$, the graph is symmetric about $t = 0$, that is, the vertical line $x = -\\frac{1}{2}$. (Equivalently, $x \\mapsto -1 - x$ swaps $e^{x+1}$ and $e^{-x}$.)\nReflecting $\\left(-1, \\frac{1}{2}\\right)$ across $x = -\\frac{1}{2}$ preserves the $y$-coordinate and sends $x = -1$ to $2\\left(-\\frac{1}{2}\\right) - (-1) = 0$. The reflected point is $\\left(0, \\frac{1}{2}\\right)$.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'The numbers, in order, of each row and the numbers, in order, of each column of a $5 \\times 5$ array of integers form an arithmetic progression of length $5$. The numbers in positions $(5, 5)$, $(2, 4)$, $(4, 3)$, and $(3, 1)$ are $0$, $48$, $16$, and $12$, respectively. What number is in position $(1, 2)$?\n$$\\begin{bmatrix} \\cdot & ? & \\cdot & \\cdot & \\cdot \\\\ \\cdot & \\cdot & \\cdot & 48 & \\cdot \\\\ 12 & \\cdot & \\cdot & \\cdot & \\cdot \\\\ \\cdot & \\cdot & 16 & \\cdot & \\cdot \\\\ \\cdot & \\cdot & \\cdot & \\cdot & 0 \\end{bmatrix}$$\n\nA. $19$\nB. $24$\nC. $29$\nD. $34$\nE. $39$',
          answer: 'C. $29$',
          principle: 'Represent doubly arithmetic grids by a bilinear formula $a(i, j) = \\alpha + \\beta i + \\gamma j + \\delta ij$.',
          solution:
            'Because every row $i$ is an arithmetic progression, we may write $a(i, j) = p_i + q_i j$. Since columns $1$ and $2$ are arithmetic progressions in $i$, both $a(i, 1) = p_i + q_i$ and $a(i, 2) = p_i + 2q_i$ are linear in $i$. Thus $q_i$ and $p_i$ are each linear in $i$, giving\n$$a(i, j) = \\alpha + \\beta i + \\gamma j + \\delta ij.$$\nThe four given entries produce the system:\n1. $\\alpha + 5\\beta + 5\\gamma + 25\\delta = 0$\n2. $\\alpha + 2\\beta + 4\\gamma + 8\\delta = 48$\n3. $\\alpha + 4\\beta + 3\\gamma + 12\\delta = 16$\n4. $\\alpha + 3\\beta + \\gamma + 3\\delta = 12$\n\nSubtracting (4) from (1), (2), and (3) eliminates $\\alpha$:\n$$2\\beta + 4\\gamma + 22\\delta = -12 \\implies \\beta + 2\\gamma + 11\\delta = -6,$$\n$$-\\beta + 3\\gamma + 5\\delta = 36,$$\n$$\\beta + 2\\gamma + 9\\delta = 4.$$\nSubtracting the third equation from the first gives $2\\delta = -10$, so $\\delta = -5$. Substituting $\\delta = -5$ into the third and second equations yields $\\beta + 2\\gamma = 49$ and $-\\beta + 3\\gamma = 61$. Adding these gives $5\\gamma = 110 \\implies \\gamma = 22$, and then $\\beta = 49 - 44 = 5$. From (4), $\\alpha = 12 - 15 - 22 + 15 = -10$.\nTherefore,\n$$a(1, 2) = -10 + 5(1) + 22(2) - 5(1)(2) = -10 + 5 + 44 - 10 = 29.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'The roots of $x^3 + 2x^2 - x + 3$ are $p$, $q$, and $r$. What is the value of\n$$(p^2 + 4)(q^2 + 4)(r^2 + 4)?$$\n\nA. $64$\nB. $75$\nC. $100$\nD. $125$\nE. $144$',
          answer: 'D. $125$',
          principle: 'Factor $x^2 + 4 = (x - 2i)(x + 2i)$ and evaluate the monic polynomial $P(x)$ at $\\pm 2i$.',
          solution:
            'Let $P(x) = x^3 + 2x^2 - x + 3 = (x - p)(x - q)(x - r)$. Using $z^2 + 4 = (z - 2i)(z + 2i)$ for $z \\in \\{p, q, r\\}$, we obtain\n$$(p^2 + 4)(q^2 + 4)(r^2 + 4) = (p - 2i)(q - 2i)(r - 2i)(p + 2i)(q + 2i)(r + 2i) = (-1)^3 P(2i) \\cdot (-1)^3 P(-2i) = P(2i)P(-2i).$$\nEvaluating at $x = 2i$ gives\n$$P(2i) = (2i)^3 + 2(2i)^2 - 2i + 3 = -8i - 8 - 2i + 3 = -5 - 10i.$$\nSince $P$ has real coefficients, $P(-2i) = \\overline{P(2i)} = -5 + 10i$. Hence\n$$P(2i)P(-2i) = (-5 - 10i)(-5 + 10i) = (-5)^2 + 10^2 = 25 + 100 = 125.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'A set of $12$ tokens — $3$ red, $2$ white, $1$ blue, and $6$ black — is to be distributed at random to $3$ game players, $4$ tokens per player. The probability that some player gets all the red tokens, another gets all the white tokens, and the remaining player gets the blue token can be written as $\\dfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. What is $m + n$?\n\nA. $387$\nB. $388$\nC. $389$\nD. $390$\nE. $391$',
          answer: 'C. $389$',
          principle: 'Treat all $12$ tokens as distinguishable and count favorable partitions of the black tokens.',
          solution:
            'Treat all $12$ tokens as distinct so that every deal of $4$ tokens to each labeled player is equally likely. The total number of deals is\n$$\\binom{12}{4, 4, 4} = \\frac{12!}{4!\\,4!\\,4!} = 495 \\cdot 70 = 34650.$$\nFor a favorable deal:\n1. Choose which player receives all $3$ red tokens, which receives both white tokens, and which receives the blue token in $3! = 6$ ways.\n2. To bring each player to $4$ tokens, the red-recipient needs $1$ black token, the white-recipient needs $2$ black tokens, and the blue-recipient needs $3$ black tokens. The $6$ black tokens can be distributed in sizes $1, 2, 3$ in $\\frac{6!}{1!\\,2!\\,3!} = 60$ ways.\nThus there are $6 \\cdot 60 = 360$ favorable deals, and the probability is\n$$\\frac{360}{34650} = \\frac{36}{3465} = \\frac{4}{385}.$$\nSince $\\gcd(4, 385) = 1$, we have $m + n = 4 + 385 = 389$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Integers $a$, $b$, and $c$ satisfy $ab + c = 100$, $bc + a = 87$, and $ca + b = 60$. What is $ab + bc + ca$?\n\nA. $212$\nB. $247$\nC. $258$\nD. $276$\nE. $284$',
          answer: 'D. $276$',
          principle: 'Subtract two equations to factor $(a - c)(b - 1) = 13$ and test the integer factor pairs of $13$.',
          solution:
            'Subtracting $bc + a = 87$ from $ab + c = 100$ gives\n$$ab - bc - (a - c) = 13 \\implies (a - c)(b - 1) = 13.$$\nSince $13$ is prime and $a, b, c \\in \\mathbb{Z}$, the pair $(a - c, b - 1)$ must be one of $(1, 13)$, $(13, 1)$, $(-1, -13)$, or $(-13, -1)$. Substitute each into $bc + a = 87$:\n- $(a - c, b - 1) = (1, 13)$: $b = 14$, $a = c + 1 \\implies 14c + c + 1 = 87 \\implies 15c = 86$ (no integer solution).\n- $(a - c, b - 1) = (13, 1)$: $b = 2$, $a = c + 13 \\implies 2c + c + 13 = 87 \\implies 3c = 74$ (no integer solution).\n- $(a - c, b - 1) = (-1, -13)$: $b = -12$, $a = c - 1 \\implies -12c + c - 1 = 87 \\implies -11c = 88 \\implies c = -8$, giving $(a, b, c) = (-9, -12, -8)$.\n- $(a - c, b - 1) = (-13, -1)$: $b = 0$, $a = c - 13 \\implies a = 87, c = 100$, which fails $ca + b = 60$.\nChecking $(-9, -12, -8)$ confirms all three equations ($108 - 8 = 100$, $96 - 9 = 87$, $72 - 12 = 60$). Therefore,\n$$ab + bc + ca = (-9)(-12) + (-12)(-8) + (-8)(-9) = 108 + 96 + 72 = 276.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'On top of a rectangular card with sides of length $1$ and $2 + \\sqrt{3}$, an identical card is placed so that two of their diagonals line up ($AC$ in this case). Continue in the same way: at each step, rotate a new card clockwise by the same angle as before and place it so that it shares the previous card\'s unused diagonal. In total, how many cards must be used until a vertex of a new card lands exactly on the vertex labeled $B$ in the figure?\n\nA. $6$\nB. $8$\nC. $10$\nD. $12$\nE. No new vertex will land on $B$.',
          figures: [
            {
              src: '/papers/amc-12a-2024/fig-18.svg',
              alt: 'Two congruent rectangular cards of dimensions 1 by 2 plus root 3 sharing diagonal AC, with the second card rotated clockwise relative to the first and vertex B labeled.',
              caption: 'Identical rectangular cards sharing diagonal AC with the second rotated clockwise.'
            }
          ],
          answer: 'A. $6$',
          principle: 'Find the angle between the diagonals via $\\tan 15^\\circ = 2 - \\sqrt{3}$ and track the rotation modulo $180^\\circ$ for the unoriented diagonal line.',
          solution:
            'In a $1 \\times (2 + \\sqrt{3})$ rectangle, let $\\theta$ be the angle a diagonal makes with a long side. Then\n$$\\tan\\theta = \\frac{1}{2 + \\sqrt{3}} = 2 - \\sqrt{3} = \\tan 15^\\circ \\implies \\theta = 15^\\circ.$$\n(Verify algebraically: $\\tan 15^\\circ = \\frac{1 - \\cos 30^\\circ}{\\sin 30^\\circ} = \\frac{1 - \\sqrt{3}/2}{1/2} = 2 - \\sqrt{3}$.) Thus the acute angle between the two diagonals of a rectangle is $2\\theta = 30^\\circ$.\n\nAll cards share the common center of their diagonals and have the same diagonal length, so every vertex lies on one circle. Starting from shared diagonal $AC$, the second card\'s unused diagonal is obtained by rotating $AC$ by $30^\\circ$ clockwise. Each additional card shares the previous card\'s unused diagonal and turns the next unused diagonal $30^\\circ$ further clockwise.\n\nNotice that the original card\'s unused diagonal (which contains vertex $B$) lies $30^\\circ$ counterclockwise from $AC$, which as an unoriented line through the center is $180^\\circ - 30^\\circ = 150^\\circ$ clockwise from $AC$. After placing the $2$nd card ($30^\\circ$ CW), $3$rd ($60^\\circ$), $4$th ($90^\\circ$), $5$th ($120^\\circ$), and **$6$th** card ($5 \\cdot 30^\\circ = 150^\\circ$ clockwise), the $6$th card\'s unused diagonal coincides with the diagonal through $B$, placing a vertex directly on $B$. Thus $6$ cards are needed in total.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Cyclic quadrilateral $ABCD$ has lengths $BC = CD = 3$ and $DA = 5$ with $\\angle CDA = 120^\\circ$. What is the length of the shorter diagonal of $ABCD$? Express your answer as a common fraction.\n\nA. $\\dfrac{31}{7}$\nB. $\\dfrac{33}{7}$\nC. $5$\nD. $\\dfrac{39}{7}$\nE. $\\dfrac{41}{7}$',
          answer: 'D. $\\dfrac{39}{7}$',
          principle: 'Use the Law of Cosines twice (with $\\angle ABC = 180^\\circ - \\angle CDA$) and then apply Ptolemy\'s Theorem.',
          solution:
            'In $\\triangle CDA$, the Law of Cosines gives\n$$AC^2 = CD^2 + DA^2 - 2 \\cdot CD \\cdot DA \\cos 120^\\circ = 3^2 + 5^2 - 2(3)(5)\\left(-\\frac{1}{2}\\right) = 9 + 25 + 15 = 49,$$\nso $AC = 7$.\nBecause $ABCD$ is cyclic, $\\angle ABC = 180^\\circ - \\angle CDA = 60^\\circ$. Applying the Law of Cosines to $\\triangle ABC$:\n$$49 = AB^2 + 3^2 - 2(AB)(3)\\cos 60^\\circ = AB^2 - 3\\,AB + 9 \\implies AB^2 - 3\\,AB - 40 = 0.$$\nFactoring $(AB - 8)(AB + 5) = 0$ gives $AB = 8$. By Ptolemy\'s Theorem,\n$$AC \\cdot BD = AB \\cdot CD + BC \\cdot DA = 8 \\cdot 3 + 3 \\cdot 5 = 39 \\implies BD = \\frac{39}{7}.$$\nSince $\\frac{39}{7} < 7 = AC$, the shorter diagonal has length $\\frac{39}{7}$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Points $P$ and $Q$ are chosen uniformly and independently at random on sides $\\overline{AB}$ and $\\overline{AC}$, respectively, of equilateral triangle $\\triangle ABC$. Which of the following intervals contains the probability that the area of $\\triangle APQ$ is less than half the area of $\\triangle ABC$?\n\nA. $\\left[\\tfrac{3}{8}, \\tfrac{1}{2}\\right]$\nB. $\\left(\\tfrac{1}{2}, \\tfrac{2}{3}\\right]$\nC. $\\left(\\tfrac{2}{3}, \\tfrac{3}{4}\\right]$\nD. $\\left(\\tfrac{3}{4}, \\tfrac{7}{8}\\right]$\nE. $\\left(\\tfrac{7}{8}, 1\\right]$',
          answer: 'D. $\\left(\\tfrac{3}{4}, \\tfrac{7}{8}\\right]$',
          principle: 'Translate the area condition to $xy < \\frac{1}{2}$ on $[0, 1]^2$ and bound the region algebraically.',
          solution:
            'Set $x = \\frac{AP}{AB}$ and $y = \\frac{AQ}{AC}$, so $(x, y)$ is uniformly distributed on the unit square $[0, 1]^2$. Since $\\triangle APQ$ and $\\triangle ABC$ share angle $\\angle A$,\n$$\\frac{[APQ]}{[ABC]} = \\frac{\\frac{1}{2}AP \\cdot AQ\\sin 60^\\circ}{\\frac{1}{2}AB \\cdot AC\\sin 60^\\circ} = xy.$$\nWe want the area of $R = \\{(x, y) \\in [0, 1]^2 : xy < \\frac{1}{2}\\}$.\n- **Lower bound:** Every point with $x < \\frac{1}{2}$ or $y < \\frac{1}{2}$ satisfies $xy < \\frac{1}{2} \\cdot 1 = \\frac{1}{2}$. This L-shaped region has area $1 - \\left(1 - \\frac{1}{2}\\right)^2 = \\frac{3}{4}$. Moreover, the disjoint square $\\left[\\frac{1}{2}, \\frac{2}{3}\\right] \\times \\left[\\frac{1}{2}, \\frac{2}{3}\\right]$ of area $\\frac{1}{36} > 0$ also satisfies $xy \\le \\frac{4}{9} < \\frac{1}{2}$, so $P\\left(xy < \\frac{1}{2}\\right) > \\frac{3}{4}$.\n- **Upper bound:** For all $x, y \\in [0, 1]$, $(1 - x)(1 - y) \\ge 0$ implies $xy \\ge x + y - 1$. Thus the right triangle $x + y \\ge \\frac{3}{2}$ inside $[0, 1]^2$ (with vertices $(1, 1)$, $(\\frac{1}{2}, 1)$, $(1, \\frac{1}{2})$ and area $\\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{8}$) is contained in $\\{xy \\ge \\frac{1}{2}\\}$. Hence $P\\left(xy < \\frac{1}{2}\\right) \\le 1 - \\frac{1}{8} = \\frac{7}{8}$.\nTherefore the probability lies in $\\left(\\frac{3}{4}, \\frac{7}{8}\\right]$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Suppose that $a_1 = 2$ and the sequence $(a_n)$ satisfies the recurrence relation\n$$\\frac{a_n - 1}{n - 1} = \\frac{a_{n-1} + 1}{(n - 1) + 1}$$\nfor all $n \\ge 2$. What is the greatest integer less than or equal to\n$$\\sum_{n=1}^{100} a_n^2?$$\n\nA. $338{,}550$\nB. $338{,}551$\nC. $338{,}552$\nD. $338{,}553$\nE. $338{,}554$',
          answer: 'B. $338{,}551$',
          principle: 'Rearrange the recurrence into a telescoping difference to find $a_n = n + \\frac{1}{n}$, then telescope $\\sum \\frac{1}{n^2}$ for exact bounds.',
          solution:
            'Multiplying the recurrence by $n(n - 1)$ for $n \\ge 2$ gives\n$$n(a_n - 1) = (n - 1)(a_{n-1} + 1) \\implies n a_n - (n - 1)a_{n-1} = 2n - 1.$$\nSumming from $k = 2$ to $n$ telescopes the left-hand side:\n$$n a_n - 1 \\cdot a_1 = \\sum_{k=2}^n (2k - 1) = n^2 - 1.$$\nSince $a_1 = 2$, we get $n a_n = n^2 + 1$, so $a_n = n + \\frac{1}{n}$ for all $n \\ge 1$.\nSquaring and summing from $n = 1$ to $100$ gives\n$$\\sum_{n=1}^{100} a_n^2 = \\sum_{n=1}^{100} \\left(n^2 + 2 + \\frac{1}{n^2}\\right) = \\frac{100 \\cdot 101 \\cdot 201}{6} + 200 + S = 338{,}350 + 200 + S = 338{,}550 + S,$$\nwhere $S = \\sum_{n=1}^{100} \\frac{1}{n^2}$. Clearly $S > 1 + \\frac{1}{4} > 1$. For an upper bound, using $\\frac{1}{n^2} < \\frac{1}{n(n - 1)} = \\frac{1}{n - 1} - \\frac{1}{n}$ for $n \\ge 2$,\n$$S < 1 + \\sum_{n=2}^{100} \\left(\\frac{1}{n - 1} - \\frac{1}{n}\\right) = 1 + \\left(1 - \\frac{1}{100}\\right) < 2.$$\nBecause $1 < S < 2$, the total sum lies strictly between $338{,}551$ and $338{,}552$, so its floor is $338{,}551$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'What is the value of\n$$\\tan^2\\frac{\\pi}{16} \\cdot \\tan^2\\frac{3\\pi}{16} + \\tan^2\\frac{\\pi}{16} \\cdot \\tan^2\\frac{5\\pi}{16} + \\tan^2\\frac{3\\pi}{16} \\cdot \\tan^2\\frac{7\\pi}{16} + \\tan^2\\frac{5\\pi}{16} \\cdot \\tan^2\\frac{7\\pi}{16}?$$\n\nA. $28$\nB. $68$\nC. $70$\nD. $72$\nE. $84$',
          answer: 'B. $68$',
          principle: 'Factor into $(a + d)(b + c)$ using complementary angles $\\tan(\\frac{\\pi}{2} - \\theta) = \\cot\\theta$ and express $\\tan^2\\theta + \\cot^2\\theta$ via $\\sin(2\\theta)$.',
          solution:
            'Let $a = \\tan^2\\frac{\\pi}{16}$, $b = \\tan^2\\frac{3\\pi}{16}$, $c = \\tan^2\\frac{5\\pi}{16}$, and $d = \\tan^2\\frac{7\\pi}{16}$. The given sum factors cleanly:\n$$ab + ac + bd + cd = (a + d)(b + c).$$\nSince $\\frac{7\\pi}{16} = \\frac{\\pi}{2} - \\frac{\\pi}{16}$ and $\\frac{5\\pi}{16} = \\frac{\\pi}{2} - \\frac{3\\pi}{16}$, we have $d = \\cot^2\\frac{\\pi}{16}$ and $c = \\cot^2\\frac{3\\pi}{16}$.\nFor any acute $\\theta$,\n$$\\tan\\theta + \\cot\\theta = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{2}{\\sin(2\\theta)} \\implies \\tan^2\\theta + \\cot^2\\theta = \\frac{4}{\\sin^2(2\\theta)} - 2.$$\nUsing $\\sin^2\\frac{\\pi}{8} = \\frac{1 - \\cos\\frac{\\pi}{4}}{2} = \\frac{2 - \\sqrt{2}}{4}$ and $\\sin^2\\frac{3\\pi}{8} = \\frac{1 - \\cos\\frac{3\\pi}{4}}{2} = \\frac{2 + \\sqrt{2}}{4}$:\n$$a + d = \\frac{16}{2 - \\sqrt{2}} - 2 = 8(2 + \\sqrt{2}) - 2 = 14 + 8\\sqrt{2},$$\n$$b + c = \\frac{16}{2 + \\sqrt{2}} - 2 = 8(2 - \\sqrt{2}) - 2 = 14 - 8\\sqrt{2}.$$\nMultiplying them gives $(14 + 8\\sqrt{2})(14 - 8\\sqrt{2}) = 14^2 - (8\\sqrt{2})^2 = 196 - 128 = 68$.',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'A *disphenoid* is a tetrahedron whose triangular faces are congruent to one another. What is the least total surface area of a disphenoid whose faces are scalene triangles with integer side lengths?\n\nA. $\\sqrt{3}$\nB. $3\\sqrt{15}$\nC. $15$\nD. $15\\sqrt{7}$\nE. $24\\sqrt{6}$',
          answer: 'D. $15\\sqrt{7}$',
          principle: 'Show that opposite edges of a scalene disphenoid are equal, placing its vertices on a rectangular box iff the face is acute.',
          solution:
            'Let the face have integer sides $u < v < w$. Suppose $AB = w$, $BC = u$, $CA = v$ in $\\triangle ABC$. Face $\\triangle ABD$ shares $AB = w$, so $\\{AD, BD\\} = \\{u, v\\}$. If $AD = v$ and $BD = u$, then $\\triangle ACD$ would have $AC = AD = v$, contradicting scalene faces. Thus $AD = u$ and $BD = v$, forcing $CD = w$ in $\\triangle ACD$. Hence opposite edges are equal.\nCentering the tetrahedron at its centroid, we can write the four vertices as $\\mathbf{x} + \\mathbf{y} + \\mathbf{z}$, $\\mathbf{x} - \\mathbf{y} - \\mathbf{z}$, $-\\mathbf{x} + \\mathbf{y} - \\mathbf{z}$, and $-\\mathbf{x} - \\mathbf{y} + \\mathbf{z}$. Equating opposite edge lengths gives $|\\mathbf{y} + \\mathbf{z}| = |\\mathbf{y} - \\mathbf{z}|$ and similarly for the other pairs, so $\\mathbf{x}, \\mathbf{y}, \\mathbf{z}$ are mutually orthogonal and the vertices are alternating corners of a rectangular box. Letting $X = 4|\\mathbf{x}|^2$, $Y = 4|\\mathbf{y}|^2$, $Z = 4|\\mathbf{z}|^2 > 0$, we have $u^2 = Y + Z$, $v^2 = Z + X$, $w^2 = X + Y$, so $Z = \\frac{u^2 + v^2 - w^2}{2}$. Thus a non-degenerate box exists if and only if $u^2 + v^2 > w^2$ (the face is acute).\nNow $w \\ge v + 1$. If $u \\le 3$ and $v \\ge u + 1$, then $u^2 \\le 9 \\le 2v + 1$, so $u^2 + v^2 \\le (v + 1)^2 \\le w^2$, violating acuteness. Thus $u \\ge 4$ and $v \\ge 5$.\nFor $(u, v, w) = (4, 5, 6)$, $4^2 + 5^2 = 41 > 36 = 6^2$ is acute; by Heron\'s formula with $s = \\frac{15}{2}$, each face has area $\\sqrt{\\frac{15}{2} \\cdot \\frac{7}{2} \\cdot \\frac{5}{2} \\cdot \\frac{3}{2}} = \\frac{15\\sqrt{7}}{4}$, giving total surface area $4 \\cdot \\frac{15\\sqrt{7}}{4} = 15\\sqrt{7}$.\nAny other scalene triple with $u \\ge 4$ has $v \\ge 6$, so $uv \\ge 24$. Since its largest angle $\\gamma$ satisfies $60^\\circ < \\gamma < 90^\\circ$, each face has area $\\frac{1}{2}uv\\sin\\gamma > \\frac{1}{2}(24)\\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$. Because $(6\\sqrt{3})^2 = 108 = \\frac{1728}{16} > \\frac{1575}{16} = \\left(\\frac{15\\sqrt{7}}{4}\\right)^2$, the minimum total surface area is $15\\sqrt{7}$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'A graph is *symmetric* about a line if the graph remains unchanged after reflection in that line. For how many quadruples of integers $(a, b, c, d)$, where $|a|, |b|, |c|, |d| \\le 5$ and $c$ and $d$ are not both $0$, is the graph of\n$$y = \\frac{ax + b}{cx + d}$$\nsymmetric about the line $y = x$?\n\nA. $1282$\nB. $1292$\nC. $1310$\nD. $1320$\nE. $1330$',
          answer: 'B. $1292$',
          principle: 'Equate the function $f(x) = \\frac{ax+b}{cx+d}$ to its inverse $f^{-1}(x) = \\frac{-dx+b}{cx-a}$ and count integer solutions by cases on $a + d$.',
          solution:
            'If $ad - bc = 0$, the graph is a horizontal line (possibly with one hole), whose reflection across $y = x$ is vertical and cannot match the original graph. Thus $ad - bc \\ne 0$.\nReflecting $y = \\frac{ax + b}{cx + d}$ over $y = x$ swaps $x$ and $y$: $x = \\frac{ay + b}{cy + d} \\implies y = \\frac{-dx + b}{cx - a}$. This matches the original function if and only if $(a, b, c, d)$ and $(-d, b, c, -a)$ are proportional, i.e., the matrix $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ satisfies $M^2 = \\lambda I$ for some $\\lambda \\ne 0$:\n$$\\begin{pmatrix} a^2 + bc & b(a + d) \\\\ c(a + d) & bc + d^2 \\end{pmatrix} = \\lambda \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}.$$\n- **Case 1 ($a + d = 0$):** Set $d = -a$. We need $ad - bc = -a^2 - bc \\ne 0$ (so $bc \\ne -a^2$) and $(c, d) \\ne (0, 0)$:\n  - If $a = 0$, then $d = 0$, so $c \\ne 0$ and $bc \\ne 0 \\implies b \\ne 0$. Both $b$ and $c$ have $10$ nonzero choices in $[-5, 5]$, giving $10^2 = 100$ quadruples.\n  - If $a \\ne 0$, then $d = -a \\ne 0$ automatically satisfies $(c, d) \\ne (0, 0)$. Out of $11^2 = 121$ pairs $(b, c)$ in $[-5, 5]^2$, we exclude those with $bc = -a^2$: for $|a| \\in \\{1, 3, 4, 5\\}$ there are $2$ excluded pairs ($\\pm(a, -a)$), and for $|a| = 2$ there are $6$ excluded pairs ($\\pm(1, -4), \\pm(2, -2), \\pm(4, -1)$). This gives $8(121 - 2) + 2(121 - 6) = 952 + 230 = 1182$ quadruples.\n- **Case 2 ($a + d \\ne 0$):** Off-diagonal entries force $b = c = 0$, and $a^2 = d^2$ with $a + d \\ne 0$ forces $a = d \\ne 0$ (yielding $y = x$). Since $d \\ne 0$, $(c, d) \\ne (0, 0)$ holds, giving $10$ choices $a = d \\in \\{\\pm 1, \\ldots, \\pm 5\\}$.\nIn total, there are $100 + 1182 + 10 = 1292$ quadruples.',
          rubric: OK
        }
      ]
    }
  ]
};
