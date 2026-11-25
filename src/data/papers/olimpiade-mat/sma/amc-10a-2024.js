/**
 * Paket Soal Terstruktur: AMC 10A (2024) — 21 of 25 multiple-choice problems included.
 * Source: scraped_raw/amc-10a-2024.md (MAA AMC 10A 2024).
 * Skipped 4 diagram-dependent problems whose figures are missing from the archive: Q12, Q16, Q22, and Q25.
 */
const OK = [{ code: 'A1', text: 'Correct option selected with valid supporting reasoning.' }];

export default {
  id: 'amc-10a-2024',
  slug: 'amc-10a-2024',
  subject: 'olimpiade-mat',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 10A (2024)',
  relatedChapterIds: [
    'sma10-bab2-barisan-deret',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma10-bab8-peluang',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab6-transformasi'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 10',
  title: 'AMC 10A — 2024',
  totalMarks: 21,
  instructions:
    'This set contains 21 multiple-choice problems from the 25-problem 2024 AMC 10A paper (included: Q1-Q11, Q13-Q15, Q17-Q21, Q23-Q24; skipped: 4 problems requiring missing diagrams, namely Q12, Q16, Q22, and Q25). Original problem numbers are preserved. In the official AMC 10 contest, a correct answer scores 6 points, an unanswered problem scores 1.5 points, and an incorrect answer scores 0 points; in this practice set, each included problem is worth 1 point (21 points total). Calculators are not allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 10A',
    file: 'scraped_raw/amc-10a-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 21,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 21 included problems (original AMC 10A numbering; 1 point each).',
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
            'Substituting the two given trails into $T = aL + bG$ yields\n$$1.5a + 800b = 69,$$\n$$1.2a + 1100b = 69.$$\nSubtracting the second equation from the first eliminates $69$:\n$$0.3a - 300b = 0 \\implies 0.3a = 300b \\implies a = 1000b.$$\nSubstitute $a = 1000b$ into the first equation:\n$$1.5(1000b) + 800b = 2300b = 69 \\implies b = \\frac{69}{2300} = \\frac{3}{100}.$$\nHence $a = 1000 \\cdot \\frac{3}{100} = 30$. For $L = 4.2$ and $G = 4000$,\n$$T = 30(4.2) + \\frac{3}{100}(4000) = 126 + 120 = 246.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'What is the sum of the digits of the smallest prime that can be written as a sum of $5$ distinct primes?\n\nA. $5$\nB. $7$\nC. $9$\nD. $10$\nE. $11$',
          answer: 'B. $7$',
          principle: 'Parity of primes: any sum of five odd primes is odd, whereas including $2$ makes the sum of five primes even.',
          solution:
            'If $2$ were one of the five distinct primes, the remaining four primes would all be odd, making the total\n$$\\text{even} + \\text{odd} + \\text{odd} + \\text{odd} + \\text{odd} = \\text{even}.$$\nSince the sum is greater than $2$, it could not be prime. Thus all five primes must be odd.\nThe five smallest odd primes sum to\n$$3 + 5 + 7 + 11 + 13 = 39 = 3 \\cdot 13,$$\nwhich is composite. To obtain the next smallest possible sum of five distinct odd primes, we increase the largest prime $13$ to the next prime $17$ (replacing any smaller prime by at least $17$ increases the sum by at least $17 - 11 = 6$, which is larger):\n$$3 + 5 + 7 + 11 + 17 = 43.$$\nSince $43$ is prime, it is the smallest such prime, and its digit sum is $4 + 3 = 7$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'The number $2024$ is written as the sum of not necessarily distinct two-digit numbers. What is the least number of two-digit numbers needed to write this sum?\n\nA. $20$\nB. $21$\nC. $22$\nD. $23$\nE. $24$',
          answer: 'B. $21$',
          principle: 'Bounding with the maximum possible summand ($99$) and verifying attainability by explicit construction.',
          solution:
            'Every two-digit positive integer is at most $99$, so the sum of $k$ two-digit numbers is at most $99k$.\nFor $k = 20$, the maximum possible sum is $99 \\times 20 = 1980 < 2024$, so $20$ two-digit numbers are not enough, forcing $k \\ge 21$.\nOn the other hand, $k = 21$ is achievable by taking twenty copies of $99$ and one copy of $44$ (a valid two-digit number):\n$$20 \\times 99 + 44 = 1980 + 44 = 2024.$$\nThus the least number of two-digit numbers needed is $21$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'What is the least value of $n$ such that $n!$ is a multiple of $2024$?\n\nA. $11$\nB. $21$\nC. $22$\nD. $23$\nE. $253$',
          answer: 'D. $23$',
          principle: 'Prime factorization of the divisor: $n!$ is divisible by $2024$ if and only if every prime power dividing $2024$ divides $n!$.',
          solution:
            'Factor $2024$ into primes:\n$$2024 = 8 \\cdot 253 = 2^3 \\cdot 11 \\cdot 23.$$\nFor $2024$ to divide $n! = 1 \\cdot 2 \\cdots n$, the prime $23$ must divide $n!$, which requires $n \\ge 23$ (since no integer less than $23$ is a multiple of $23$).\nConversely, when $n = 23$, the product $23!$ includes the factors $2, 4$ (providing $2^3$), $11$, and $23$, so $2024 \\mid 23!$.\nTherefore, the least such $n$ is $23$.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'What is the minimum number of successive swaps of adjacent letters in the string ABCDEF that are needed to change the string to FEDCBA?\n\n(For example, $3$ swaps are required to change ABC to CBA; one such sequence of swaps is ABC $\\to$ BAC $\\to$ BCA $\\to$ CBA.)\n\nA. $6$\nB. $10$\nC. $12$\nD. $15$\nE. $24$',
          answer: 'D. $15$',
          principle: 'Inversion counting: each adjacent swap changes the number of inverted pairs by at most $1$.',
          solution:
            'Call a pair of letters in a string an *inversion* if they appear in reverse alphabetical order. The initial string ABCDEF has $0$ inversions, while the target string FEDCBA has every pair of the $6$ letters inverted, giving $\\binom{6}{2} = 15$ inversions.\nSwapping two adjacent letters alters the relative order of only that single pair, so each adjacent swap can increase the number of inversions by at most $1$. Thus at least $15$ swaps are required.\nThis bound is attained by moving F to the front ($5$ swaps), then E to the second position ($4$ swaps), then D ($3$ swaps), C ($2$ swaps), and B ($1$ swap), for a total of $5 + 4 + 3 + 2 + 1 = 15$ swaps.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'The product of three integers is $60$. What is the least possible positive sum of the three integers?\n\nA. $2$\nB. $3$\nC. $5$\nD. $6$\nE. $13$',
          answer: 'B. $3$',
          principle: 'Analyze sign combinations and list positive factor triples of $60$.',
          solution:
            'Let the three integers be $x, y, z$ with $xyz = 60$. Since their product is positive, either all three integers are positive or two are negative and one is positive.\n- If all three are positive, any triple with a factor of $1$ has sum at least $1 + 6 + 10 = 17$, any triple with two factors $\\ge 2$ and one $\\ge 6$ has sum at least $2 + 5 + 6 = 13$, and the remaining triple $(3, 4, 5)$ has sum $3 + 4 + 5 = 12$.\n- If two are negative and one is positive, write them as $-p, -q, r$ with positive integers $pqr = 60$. The sum is $r - p - q$. For this sum to be positive ($r > p + q$), $r$ must be strictly the largest of the three factors $p, q, r$. Testing all unordered positive factor triples of $60$ with $r$ as the largest factor:\n  - $(1, 1, 60)$: $60 - 1 - 1 = 58$\n  - $(1, 2, 30)$: $30 - 1 - 2 = 27$\n  - $(1, 3, 20)$: $20 - 1 - 3 = 16$\n  - $(1, 4, 15)$: $15 - 1 - 4 = 10$\n  - $(1, 5, 12)$: $12 - 1 - 5 = 6$\n  - $(1, 6, 10)$: $10 - 1 - 6 = 3$\n  - $(2, 2, 15)$: $15 - 2 - 2 = 11$\n  - $(2, 3, 10)$: $10 - 2 - 3 = 5$\n  - $(2, 5, 6)$: $6 - 2 - 5 = -1 \\le 0$\n  - $(3, 4, 5)$: $5 - 3 - 4 = -2 \\le 0$\nComparing all positive sums, the smallest is $3$, attained by the triple $(-1, -6, 10)$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Amy, Bomani, Charlie, and Daria work in a chocolate factory. On Monday Amy, Bomani, and Charlie started working at $1{:}00$ PM and were able to pack $4$, $3$, and $3$ packages, respectively, every $3$ minutes. At some later time, Daria joined the group, and Daria was able to pack $5$ packages every $4$ minutes. Together, they finished packing $450$ packages at exactly $2{:}45$ PM. At what time did Daria join the group? Give the time in $h{:}mm$ format, without "PM."\n\nA. $1{:}25$ PM\nB. $1{:}35$ PM\nC. $1{:}45$ PM\nD. $1{:}55$ PM\nE. $2{:}05$ PM',
          answer: 'A. $1{:}25$ PM',
          principle: 'Compute the total work done by the initial group over the full interval, then find how long Daria worked to complete the remainder.',
          solution:
            'From $1{:}00$ PM to $2{:}45$ PM is $105$ minutes.\nTogether, Amy, Bomani, and Charlie pack $4 + 3 + 3 = 10$ packages every $3$ minutes, which is $\\frac{10}{3}$ packages per minute.\nOver the full $105$ minutes ($35$ cycles of $3$ minutes), they pack\n$$\\frac{10}{3} \\cdot 105 = 350\\text{ packages}.$$\nThe remaining $450 - 350 = 100$ packages were packed by Daria. Since Daria packs $5$ packages every $4$ minutes (a rate of $\\frac{5}{4}$ packages per minute), the time she worked is\n$$\\frac{100}{5/4} = 100 \\cdot \\frac{4}{5} = 80\\text{ minutes}$$\n(which is $20$ cycles of $4$ minutes). Because she worked the last $80$ minutes of the $105$-minute interval, she joined $105 - 80 = 25$ minutes after $1{:}00$ PM, namely at $1{:}25$ PM.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'In how many ways can $6$ juniors and $6$ seniors form $3$ disjoint teams of $4$ people so that each team has $2$ juniors and $2$ seniors?\n\nA. $720$\nB. $1350$\nC. $2700$\nD. $3280$\nE. $8100$',
          answer: 'B. $1350$',
          principle: 'Partition each group into unordered pairs and count bijections between the two sets of pairs (or form labeled teams and divide by $3!$).',
          solution:
            'First, partition the $6$ juniors into $3$ unordered pairs. Choosing $2$ for the first pair, $2$ from the remaining $4$ for the second, and dividing by $3!$ for the order of the three pairs gives\n$$\\frac{\\binom{6}{2}\\binom{4}{2}\\binom{2}{2}}{3!} = \\frac{15 \\cdot 6 \\cdot 1}{6} = 15\\text{ ways}.$$\nSimilarly, there are $15$ ways to partition the $6$ seniors into $3$ unordered pairs.\nEach of the $3$ teams consists of one junior pair matched with one senior pair. Since there are $3! = 6$ ways to match the $3$ junior pairs with the $3$ senior pairs, the total number of ways to form the $3$ disjoint teams is\n$$15 \\cdot 15 \\cdot 6 = 1350.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Consider the following operation. Given a positive integer $n$, if $n$ is a multiple of $3$, then you replace $n$ by $\\frac{n}{3}$. If $n$ is not a multiple of $3$, then you replace $n$ by $n + 10$. Then continue this process. For example, beginning with $n = 4$, this procedure gives $4 \\to 14 \\to 24 \\to 8 \\to 18 \\to 6 \\to 2 \\to 12 \\to \\cdots$.\n\nSuppose you start with $n = 100$. What value results if you perform this operation exactly $100$ times?\n\nA. $10$\nB. $20$\nC. $30$\nD. $40$\nE. $50$',
          answer: 'C. $30$',
          principle: 'Compute the first several terms of the iterative process until a repeating cycle is reached, then use modular arithmetic.',
          solution:
            'Let $a_k$ be the value after $k$ operations, starting with $a_0 = 100$:\n$$a_0 = 100 \\to a_1 = 110 \\to a_2 = 120 \\to a_3 = 40 \\to a_4 = 50 \\to a_5 = 60 \\to a_6 = 20 \\to a_7 = 30 \\to a_8 = 10 \\to a_9 = 20 \\to \\cdots$$\nStarting from $a_6 = 20$, the sequence repeats with period $3$: $20, 30, 10, 20, 30, 10, \\dots$\nSpecifically, for all $k \\ge 6$, $a_k$ depends only on $k \\bmod 3$:\n- $k \\equiv 0 \\pmod 3 \\implies a_k = 20$,\n- $k \\equiv 1 \\pmod 3 \\implies a_k = 30$,\n- $k \\equiv 2 \\pmod 3 \\implies a_k = 10$.\nSince $100 = 3 \\cdot 33 + 1 \\equiv 1 \\pmod 3$, we obtain $a_{100} = 30$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'How many ordered pairs of integers $(m, n)$ satisfy\n$$\\sqrt{n^2 - 49} = m?$$\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. Infinitely many',
          answer: 'D. $4$',
          principle: 'Square the radical equation (noting $m \\ge 0$) and factor the resulting difference of squares.',
          solution:
            'Because a principal square root is nonnegative, $m = \\sqrt{n^2 - 49} \\ge 0$. Squaring both sides gives $n^2 - 49 = m^2$, or\n$$(n - m)(n + m) = 49.$$\nSince $m \\ge 0$, we have $n - m \\le n + m$. Listing all integer factor pairs $(d_1, d_2)$ of $49$ with $d_1 \\le d_2$:\n- $n - m = 1, \\; n + m = 49 \\implies (m, n) = (24, 25)$,\n- $n - m = 7, \\; n + m = 7 \\implies (m, n) = (0, 7)$,\n- $n - m = -49, \\; n + m = -1 \\implies (m, n) = (24, -25)$,\n- $n - m = -7, \\; n + m = -7 \\implies (m, n) = (0, -7)$.\nChecking each in the original equation confirms all $4$ satisfy $m \\ge 0$ and $\\sqrt{n^2 - 49} = m$. Thus there are $4$ ordered pairs.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Two transformations are said to commute if applying the first followed by the second gives the same result as applying the second followed by the first. Consider these four transformations of the coordinate plane:\n- a translation $2$ units to the right,\n- a $90^\\circ$ rotation counterclockwise about the origin,\n- a reflection across the $x$-axis, and\n- a dilation centered at the origin with scale factor $2$.\n\nOf the $6$ pairs of distinct transformations from this list, how many commute?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $5$',
          answer: 'C. $3$',
          principle: 'Represent each coordinate transformation explicitly as a map $(x, y) \\mapsto (x\', y\')$ and test composition in both orders.',
          solution:
            'Write the four transformations in coordinates:\n- Translation $T(x, y) = (x + 2, y)$,\n- Rotation $R(x, y) = (-y, x)$,\n- Reflection $F(x, y) = (x, -y)$,\n- Dilation $D(x, y) = (2x, 2y)$.\nCheck all $\\binom{4}{2} = 6$ pairs:\n1. $T$ and $R$: $T(R(x, y)) = (-y + 2, x)$, while $R(T(x, y)) = (-y, x + 2)$. Not equal.\n2. $T$ and $F$: $T(F(x, y)) = (x + 2, -y) = F(T(x, y))$. **Commute.**\n3. $T$ and $D$: $T(D(x, y)) = (2x + 2, 2y)$, while $D(T(x, y)) = (2x + 4, 2y)$. Not equal.\n4. $R$ and $F$: $R(F(x, y)) = (y, x)$, while $F(R(x, y)) = (-y, -x)$. Not equal.\n5. $R$ and $D$: $R(D(x, y)) = (-2y, 2x) = D(R(x, y))$. **Commute.**\n6. $F$ and $D$: $F(D(x, y)) = (2x, -2y) = D(F(x, y))$. **Commute.**\nThus exactly $3$ pairs commute.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'One side of an equilateral triangle of height $24$ lies on line $\\ell$. A circle of radius $12$ is tangent to $\\ell$ and is externally tangent to the triangle. The area of the region exterior to the triangle and the circle and bounded by the triangle, the circle, and line $\\ell$ can be written as $a\\sqrt{b} - c\\pi$, where $a$, $b$, and $c$ are positive integers and $b$ is not divisible by the square of any prime. What is $a + b + c$?\n\nA. $72$\nB. $73$\nC. $74$\nD. $75$\nE. $76$',
          answer: 'D. $75$',
          principle: 'Decompose the bounded region by subtracting a circular sector from the right-angled kite formed by the two tangents and two radii.',
          solution:
            'An equilateral triangle of height $24$ has side length $s = \\frac{24}{\\sqrt{3}/2} = 16\\sqrt{3}$.\nLet $V$ be the vertex on $\\ell$ nearest the circle, let $T$ be the point of tangency of the circle on $\\ell$, let $P$ be the point of tangency on the slanted side of the triangle, and let $O$ be the circle\'s center (with radius $OT = OP = 12$).\nBecause the interior angle of the equilateral triangle at $V$ is $60^\\circ$, the exterior angle between $\\ell$ and the slanted side is $\\angle TVP = 180^\\circ - 60^\\circ = 120^\\circ$.\nThe center $O$ lies on the angle bisector of $\\angle TVP$, so $\\angle TVO = 60^\\circ$. In $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle $VTO$,\n$$VT = \\frac{OT}{\\tan 60^\\circ} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} < 16\\sqrt{3},$$\nconfirming that $P$ lies on the slanted side (since $VP = VT = 4\\sqrt{3}$).\nThe area of kite $VTOP$ is\n$$[VTOP] = 2 \\cdot [\\triangle VTO] = 2 \\cdot \\frac{1}{2} \\cdot VT \\cdot OT = 4\\sqrt{3} \\cdot 12 = 48\\sqrt{3}.$$\nIn quadrilateral $VTOP$, $\\angle VTO = \\angle VPO = 90^\\circ$ and $\\angle TVP = 120^\\circ$, so the central angle is $\\angle TOP = 360^\\circ - 90^\\circ - 90^\\circ - 120^\\circ = 60^\\circ$.\nThus sector $TOP$ has area\n$$\\frac{60^\\circ}{360^\\circ} \\pi (12)^2 = \\frac{1}{6} \\cdot 144\\pi = 24\\pi.$$\nThe bounded region has area $48\\sqrt{3} - 24\\pi$, giving $a = 48$, $b = 3$, $c = 24$, and $a + b + c = 48 + 3 + 24 = 75$.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Let $M$ be the greatest integer such that both $M + 1213$ and $M + 3773$ are perfect squares. What is the units digit of $M$?\n\nA. $1$\nB. $2$\nC. $3$\nD. $6$\nE. $8$',
          answer: 'E. $8$',
          principle: 'Eliminate $M$ to get a difference of squares, then maximize the square by minimizing the smaller factor.',
          solution:
            'Write $M + 1213 = a^2$ and $M + 3773 = b^2$ for nonnegative integers $a < b$. Subtracting the first equation from the second eliminates $M$:\n$$b^2 - a^2 = 3773 - 1213 = 2560 \\implies (b - a)(b + a) = 2560.$$\nNotice that $b - a$ and $b + a$ have the same parity; since their product $2560$ is even, both factors must be even.\nMoreover, $a = \\frac{(b + a) - (b - a)}{2}$. To maximize $M = a^2 - 1213$, we maximize $a$ by making $b - a$ as small as possible (and hence $b + a$ as large as possible). The smallest positive even factor of $2560$ is $b - a = 2$, which gives $b + a = 1280$, so\n$$a = \\frac{1280 - 2}{2} = 639, \\qquad b = 641.$$\nThen $M = 639^2 - 1213 > 0$. Modulo $10$, $639^2 \\equiv 9^2 = 81 \\equiv 1 \\pmod{10}$, so\n$$M \\equiv 1 - 3 \\equiv 8 \\pmod{10}.$$\nHence the units digit of $M$ is $8$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Two teams are in a best-two-out-of-three playoff: the teams will play at most $3$ games, and the winner of the playoff is the first team to win $2$ games. The first game is played on Team A\'s home field, and the remaining games are played on Team B\'s home field. Team A has a $\\frac{2}{3}$ chance of winning at home, and its probability of winning when playing away from home is $p$. Outcomes of the games are independent. The probability that Team A wins the playoff is $\\frac{1}{2}$. Then $p$ can be written in the form $\\frac{1}{2}\\left(m - \\sqrt{n}\\right)$, where $m$ and $n$ are positive integers. What is $m + n$?\n\nA. $10$\nB. $11$\nC. $12$\nD. $13$\nE. $14$',
          answer: 'E. $14$',
          principle: 'Partition the event that Team A wins into mutually exclusive game sequences and solve the resulting quadratic equation for $p \\in [0, 1]$.',
          solution:
            'Team A wins Game $1$ (at home) with probability $\\frac{2}{3}$, and wins each of Games $2$ and $3$ (away) independently with probability $p$. There are three mutually exclusive ways for Team A to win the playoff:\n1. Win Game $1$ and Game $2$: $\\frac{2}{3}p$.\n2. Win Game $1$, lose Game $2$, win Game $3$: $\\frac{2}{3}(1 - p)p$.\n3. Lose Game $1$, win Game $2$, win Game $3$: $\\frac{1}{3}p^2$.\nSetting the total probability equal to $\\frac{1}{2}$:\n$$\\frac{2}{3}p + \\frac{2}{3}p(1 - p) + \\frac{1}{3}p^2 = \\frac{1}{2} \\implies \\frac{4}{3}p - \\frac{1}{3}p^2 = \\frac{1}{2}.$$\nMultiplying by $6$ and rearranging gives $2p^2 - 8p + 3 = 0$. By the quadratic formula,\n$$p = \\frac{8 \\pm \\sqrt{64 - 24}}{4} = \\frac{8 \\pm 2\\sqrt{10}}{4} = \\frac{1}{2}(4 \\pm \\sqrt{10}).$$\nSince $3 < \\sqrt{10} < 4$, $\\frac{1}{2}(4 + \\sqrt{10}) > 1$, which cannot be a probability, whereas $0 < \\frac{1}{2}(4 - \\sqrt{10}) < \\frac{1}{2} < 1$. Thus $p = \\frac{1}{2}(4 - \\sqrt{10})$, so $m = 4$, $n = 10$, and $m + n = 14$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'There are exactly $K$ positive integers $b$ with $5 \\le b \\le 2024$ such that the base-$b$ integer $2024_b$ is divisible by $16$ (where $16$ is in base ten). What is the sum of the digits of $K$?\n\nA. $16$\nB. $17$\nC. $18$\nD. $20$\nE. $21$',
          answer: 'D. $20$',
          principle: 'Expand the base-$b$ representation into a polynomial in $b$ and classify solutions modulo $8$.',
          solution:
            'For $b \\ge 5$, all digits of $2024_b$ are valid, and its value is\n$$2024_b = 2b^3 + 2b + 4 = 2(b^3 + b + 2).$$\nThus $16 \\mid 2024_b$ if and only if $8 \\mid (b^3 + b + 2)$. Testing each residue $b \\bmod 8$:\n- $b \\equiv 0$: $0 + 0 + 2 = 2 \\not\\equiv 0 \\pmod 8$\n- $b \\equiv 1$: $1 + 1 + 2 = 4 \\not\\equiv 0 \\pmod 8$\n- $b \\equiv 2$: $8 + 2 + 2 = 12 \\equiv 4 \\not\\equiv 0 \\pmod 8$\n- $b \\equiv 3$: $27 + 3 + 2 = 32 \\equiv 0 \\pmod 8$\n- $b \\equiv 4$: $64 + 4 + 2 = 70 \\equiv 6 \\not\\equiv 0 \\pmod 8$\n- $b \\equiv 5$: $125 + 5 + 2 = 132 \\equiv 4 \\not\\equiv 0 \\pmod 8$\n- $b \\equiv 6$: $216 + 6 + 2 = 224 = 8 \\cdot 28 \\equiv 0 \\pmod 8$\n- $b \\equiv 7$: $(-1)^3 + (-1) + 2 = 0 \\equiv 0 \\pmod 8$\nSo $b^3 + b + 2 \\equiv 0 \\pmod 8$ if and only if $b \\equiv 3, 6, \\text{ or } 7 \\pmod 8$.\nSince $2024 = 8 \\cdot 253$, the interval $[1, 2024]$ consists of $253$ complete blocks of $8$ consecutive integers, so each residue modulo $8$ occurs $253$ times. That gives $3 \\cdot 253 = 759$ valid integers in $[1, 2024]$.\nExcluding $[1, 4]$, only $b = 3$ is removed, leaving $K = 759 - 1 = 758$.\nThe sum of the digits of $K$ is $7 + 5 + 8 = 20$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'The first three terms of a geometric sequence are the integers $a$, $720$, and $b$, where $a < 720 < b$. What is the sum of the digits of the least possible value of $b$?\n\nA. $9$\nB. $12$\nC. $16$\nD. $18$\nE. $21$',
          answer: 'E. $21$',
          principle: 'Use the geometric mean relation $ab = 720^2$ and prime factorization to find the smallest divisor of $720^2$ greater than $720$.',
          solution:
            'Because $a, 720, b$ form a geometric sequence of integers with $a < 720 < b$, we have $b > 0$ and\n$$ab = 720^2 = (2^4 \\cdot 3^2 \\cdot 5)^2 = 2^8 \\cdot 3^4 \\cdot 5^2.$$\nHence $b$ must be a divisor of $2^8 \\cdot 3^4 \\cdot 5^2$ strictly greater than $720$. Note that $768 = 2^8 \\cdot 3$ is a valid divisor greater than $720$ (pairing with $a = 3^3 \\cdot 5^2 = 675$). We verify that no divisor $b = 2^x 3^y 5^z$ ($0 \\le x \\le 8$, $0 \\le y \\le 4$, $0 \\le z \\le 2$) satisfies $720 < b < 768$:\n- If $z = 2$, writing $b = 25m$ requires $720 < 25m < 768$, so $m \\in \\{29, 30\\}$; neither $29$ nor $30$ is of the form $2^x 3^y$.\n- If $z = 1$, writing $b = 5m$ requires $720 < 5m < 768$, so $145 \\le m \\le 153$. Factoring each integer from $145$ to $153$ ($5\\cdot 29$, $2\\cdot 73$, $3\\cdot 49$, $4\\cdot 37$, $149$, $6\\cdot 25$, $151$, $8\\cdot 19$, $9\\cdot 17$) shows every one has a prime factor $\\ge 5$, so none is of the form $2^x 3^y$.\n- If $z = 0$, $b = 2^x 3^y$ with $0 \\le y \\le 4$:\n  - $y = 0$: $2^x \\le 2^8 = 256 < 720$.\n  - $y = 1$: $3 \\cdot 2^7 = 384 < 720$, and the next is $3 \\cdot 2^8 = 768$.\n  - $y = 2$: $9 \\cdot 2^6 = 576 < 720 < 1152 = 9 \\cdot 2^7$.\n  - $y = 3$: $27 \\cdot 2^4 = 432 < 720 < 864 = 27 \\cdot 2^5$.\n  - $y = 4$: $81 \\cdot 2^3 = 648 < 720 < 1296 = 81 \\cdot 2^4$.\nThus the least possible value of $b$ is $768$, and the sum of its digits is $7 + 6 + 8 = 21$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Let $S$ be a subset of $\\{1, 2, 3, \\ldots, 2024\\}$ such that the following two conditions hold:\n- If $x$ and $y$ are distinct elements of $S$, then $|x - y| > 2$.\n- If $x$ and $y$ are distinct odd elements of $S$, then $|x - y| > 6$.\n\nWhat is the maximum possible number of elements in $S$?\n\nA. $436$\nB. $506$\nC. $608$\nD. $654$\nE. $675$',
          answer: 'C. $608$',
          principle: 'Partition the set into blocks of $10$ consecutive integers to establish a sharp upper bound, then construct a subset achieving it.',
          solution:
            'The conditions state that distinct elements of $S$ differ by at least $3$, and distinct odd elements of $S$ differ by at least $8$.\nConsider any block of $10$ consecutive integers $\\{k, k+1, \\dots, k+9\\}$. If $S$ contained at least $4$ elements $x_1 < x_2 < x_3 < x_4$ from this block, then since $x_{i+1} - x_i \\ge 3$, we would have\n$$x_4 - x_1 = (x_4 - x_3) + (x_3 - x_2) + (x_2 - x_1) \\ge 3 + 3 + 3 = 9.$$\nBecause $x_4 - x_1 \\le (k+9) - k = 9$, equality must hold everywhere, forcing the four elements to be $k, k+3, k+6, k+9$. However, whether $k$ is odd (so $k$ and $k+6$ are both odd) or even (so $k+3$ and $k+9$ are both odd), two odd elements would differ by $6 \\not> 6$, a contradiction. Therefore, every block of $10$ consecutive integers contains at most $3$ elements of $S$.\nPartition $\\{1, 2, \\dots, 2024\\}$ into $202$ blocks of $10$ integers ($1$--$10, \\dots, 2011$--$2020$) and the remaining $4$ integers $\\{2021, 2022, 2023, 2024\\}$. Since consecutive elements differ by at least $3$, the last $4$ integers can contribute at most $2$ elements to $S$. Hence\n$$|S| \\le 202 \\cdot 3 + 2 = 608.$$\nThis bound is attained by choosing all elements in $\\{1, 2, \\dots, 2024\\}$ congruent to $1, 4, \\text{ or } 8 \\pmod{10}$: in each block of $10$ we take $10m+1, 10m+4, 10m+8$, plus $2021$ and $2024$ at the end. Consecutive elements differ by $3$ or $4$ (so $> 2$), and the only odd elements are those congruent to $1 \\pmod{10}$, which differ by at least $10 > 6$. Thus the maximum size of $S$ is $608$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'The numbers, in order, of each row and the numbers, in order, of each column of a $5 \\times 5$ array of integers form an arithmetic progression of length $5$. The numbers in positions $(5, 5)$, $(2, 4)$, $(4, 3)$, and $(3, 1)$ are $0$, $48$, $16$, and $12$, respectively. What number is in position $(1, 2)$?\n$$\\begin{bmatrix} \\cdot & ? & \\cdot & \\cdot & \\cdot \\\\ \\cdot & \\cdot & \\cdot & 48 & \\cdot \\\\ 12 & \\cdot & \\cdot & \\cdot & \\cdot \\\\ \\cdot & \\cdot & 16 & \\cdot & \\cdot \\\\ \\cdot & \\cdot & \\cdot & \\cdot & 0 \\end{bmatrix}$$\n\nA. $19$\nB. $24$\nC. $29$\nD. $34$\nE. $39$',
          answer: 'C. $29$',
          principle: 'Any grid whose rows and columns are arithmetic progressions is uniquely determined by a bilinear function $a(i, j) = \\alpha + \\beta i + \\gamma j + \\delta ij$.',
          solution:
            'Let $a(i, j)$ be the entry in row $i$ and column $j$. Since each row $i$ is an arithmetic progression, $a(i, j) = p_i + q_i j$ for some constants $p_i, q_i$ depending on $i$. Since each column $j$ is also an arithmetic progression, $a(i, 1)$ and $a(i, 2)$ are linear in $i$, so $q_i = a(i, 2) - a(i, 1)$ and $p_i = a(i, 1) - q_i$ are both linear in $i$. Therefore,\n$$a(i, j) = \\alpha + \\beta i + \\gamma j + \\delta ij$$\nfor constants $\\alpha, \\beta, \\gamma, \\delta$. Substituting the four given entries produces\n$$\\alpha + 5\\beta + 5\\gamma + 25\\delta = 0,$$\n$$\\alpha + 2\\beta + 4\\gamma + 8\\delta = 48,$$\n$$\\alpha + 4\\beta + 3\\gamma + 12\\delta = 16,$$\n$$\\alpha + 3\\beta + \\gamma + 3\\delta = 12.$$\nSubtracting the fourth equation from the first three eliminates $\\alpha$:\n$$2\\beta + 4\\gamma + 22\\delta = -12 \\implies \\beta + 2\\gamma + 11\\delta = -6,$$\n$$-\\beta + 3\\gamma + 5\\delta = 36,$$\n$$\\beta + 2\\gamma + 9\\delta = 4.$$\nSubtracting the third of these from the first gives $2\\delta = -10$, so $\\delta = -5$. Substituting $\\delta = -5$ into the last two equations yields\n$$\\beta + 2\\gamma = 49 \\quad\\text{and}\\quad -\\beta + 3\\gamma = 61.$$\nAdding these gives $5\\gamma = 110 \\implies \\gamma = 22$, whence $\\beta = 49 - 44 = 5$, and from $\\alpha + 3(5) + 22 + 3(-5) = 12$ we obtain $\\alpha = -10$.\nTherefore,\n$$a(1, 2) = -10 + 5(1) + 22(2) - 5(1)(2) = -10 + 5 + 44 - 10 = 29.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Integers $a$, $b$, and $c$ satisfy\n$$\\begin{aligned} ab + c &= 100, \\\\ bc + a &= 87, \\\\ ca + b &= 60. \\end{aligned}$$\nWhat is $ab + bc + ca$?\n\nA. $212$\nB. $247$\nC. $258$\nD. $276$\nE. $284$',
          answer: 'D. $276$',
          principle: 'Subtract two equations to factor out $(b - 1)$ and test the integer divisors of $13$.',
          solution:
            'Subtracting the second equation from the first gives\n$$(ab + c) - (bc + a) = 100 - 87 \\implies (a - c)(b - 1) = 13.$$\nSince $a, b, c$ are integers and $13$ is prime, the pair $(a - c, b - 1)$ must be one of $(1, 13)$, $(13, 1)$, $(-1, -13)$, or $(-13, -1)$:\n- $(1, 13)$: $b = 14$ and $a = c + 1$. Substituting into $bc + a = 87$ gives $15c + 1 = 87 \\implies 15c = 86$, not an integer.\n- $(13, 1)$: $b = 2$ and $a = c + 13$. Substituting into $bc + a = 87$ gives $3c + 13 = 87 \\implies 3c = 74$, not an integer.\n- $(-1, -13)$: $b = -12$ and $a = c - 1$. Substituting into $bc + a = 87$ gives $-11c - 1 = 87 \\implies c = -8$, so $(a, b, c) = (-9, -12, -8)$. Checking the third equation: $(-8)(-9) + (-12) = 72 - 12 = 60$, which holds.\n- $(-13, -1)$: $b = 0$ and $a = c - 13$, giving $a = 87$ and $c = 100$, which fails $ca + b = 60$.\nThus $(a, b, c) = (-9, -12, -8)$ is the unique integer solution. Adding the three original equations gives\n$$(ab + bc + ca) + (a + b + c) = 100 + 87 + 60 = 247.$$\nSince $a + b + c = -9 - 12 - 8 = -29$, we obtain\n$$ab + bc + ca = 247 - (-29) = 276.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'A bee is moving in three-dimensional space. A fair six-sided die with faces labeled $A^+$, $A^-$, $B^+$, $B^-$, $C^+$, and $C^-$ is rolled. Suppose the bee occupies the point $(a, b, c)$. If the die shows $A^+$, then the bee moves to the point $(a + 1, b, c)$, and if the die shows $A^-$, then the bee moves to the point $(a - 1, b, c)$. Analogous moves are made with the other four outcomes.\n\nSuppose the bee starts at the point $(0, 0, 0)$ and the die is rolled four times. What is the probability that the bee traverses four distinct edges of some unit cube? Express your answer as a common fraction.\n\nA. $\\frac{1}{54}$\nB. $\\frac{7}{54}$\nC. $\\frac{1}{6}$\nD. $\\frac{5}{18}$\nE. $\\frac{2}{5}$',
          answer: 'B. $\\frac{7}{54}$',
          principle: 'Classify $4$-step walks on a unit cube by the number of coordinate axes used, ensuring no coordinate changes by $2$ and no edge is immediately retraced.',
          solution:
            'There are $6^4 = 1296$ equally likely sequences of $4$ rolls. Each roll moves the bee $1$ unit along the $A$-, $B$-, or $C$-axis.\nFor all $4$ traversed edges to be distinct edges of a single unit cube, the bee cannot take two steps in the same direction along any axis (which would span length $2$) and cannot immediately reverse its previous step (which would traverse the same edge twice). We count valid sequences by the number of axes used:\n- **One axis:** Impossible, as four steps along one axis either span at least $2$ units or retrace an edge.\n- **Two axes:** To avoid spanning $2$ units or immediately reversing, the two axes must alternate ($X, Y, X, Y$), and the two steps on each axis must have opposite signs. There are $\\binom{3}{2} = 3$ ways to choose the two axes, $2$ ways to choose which goes first, and $2 \\cdot 2 = 4$ ways to choose the initial signs of the two axes, giving $3 \\cdot 2 \\cdot 4 = 24$ sequences (each forms a unit square face).\n- **Three axes:** One axis $X$ is used twice, and the other two axes $Y, Z$ are used once each. The two steps along $X$ must have opposite signs and cannot be adjacent in the sequence (otherwise the same edge is traversed twice); any nonadjacent placement separates them by a step along $Y$ or $Z$, ensuring all $4$ edges are distinct and lie on a unit cube. There are $3$ choices for $X$, $3$ choices for its two nonadjacent positions ($\\{1, 3\\}$, $\\{1, 4\\}$, or $\\{2, 4\\}$), $2! = 2$ ways to order $Y$ and $Z$ in the remaining positions, and $2^3 = 8$ ways to choose the signs of the first $X$ step, the $Y$ step, and the $Z$ step (the second $X$ step takes the opposite sign). This gives $3 \\cdot 3 \\cdot 2 \\cdot 8 = 144$ sequences.\nIn total, there are $24 + 144 = 168$ favorable sequences, so the desired probability is\n$$\\frac{168}{1296} = \\frac{7}{54}.$$',
          rubric: OK
        }
      ]
    }
  ]
};
