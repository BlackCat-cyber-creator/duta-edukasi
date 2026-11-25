/**
 * Paket Soal Terstruktur: AMC 10B (2024) — 21 of 25 multiple-choice problems included.
 * Source: scraped_raw/amc-10b-2024.md (MAA AMC 10B 2024).
 * Skipped 4 diagram/table-dependent problems whose figures are missing from the archive: Q11, Q19, Q21, and Q25.
 */
const OK = [{ code: 'A1', text: 'Correct option selected with valid supporting reasoning.' }];

export default {
  id: 'amc-10b-2024',
  slug: 'amc-10b-2024',
  subject: 'olimpiade-mat',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 10B (2024)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab7-statistika',
    'sma10-bab8-peluang',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 10',
  title: 'AMC 10B — 2024',
  totalMarks: 21,
  instructions:
    'This set contains 21 multiple-choice problems from the 25-problem 2024 AMC 10B paper (included: Q1-Q10, Q12-Q18, Q20, Q22-Q24; skipped: 4 problems requiring missing diagrams or tables, namely Q11, Q19, Q21, and Q25). Original problem numbers are preserved. In the official AMC 10 contest, a correct answer scores 6 points, an unanswered problem scores 1.5 points, and an incorrect answer scores 0 points; in this practice set, each included problem is worth 1 point (21 points total). Calculators are not allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 10B',
    file: 'scraped_raw/amc-10b-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 21,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 21 included problems (original AMC 10B numbering; 1 point each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'In a long line of people arranged left to right, the $1013$th person from the left is also the $1010$th person from the right. How many people are in the line?\n\nA. $2021$\nB. $2022$\nC. $2023$\nD. $2024$\nE. $2025$',
          answer: 'B. $2022$',
          principle: 'Inclusion-exclusion on a linear arrangement: total people equals left rank plus right rank minus $1$ (to avoid double-counting the reference person).',
          solution:
            'Because the target person is the $1013$th person from the left, there are $1013 - 1 = 1012$ people standing to their left.\nBecause the same person is the $1010$th person from the right, there are $1010 - 1 = 1009$ people standing to their right.\nIncluding the person themself, the total number of people in the line is\n$$1012 + 1 + 1009 = 2022.$$',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'What is $10! - 7! \\cdot 6!$?\n\nA. $-120$\nB. $0$\nC. $120$\nD. $600$\nE. $720$',
          answer: 'B. $0$',
          principle: 'Factor out $7!$ from $10!$ and compare the remaining factor with $6!$.',
          solution:
            'Expand $10!$ down to $7!$:\n$$10! = 10 \\cdot 9 \\cdot 8 \\cdot 7! = 720 \\cdot 7!.$$\nMeanwhile, compute $6!$:\n$$6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720.$$\nSubstituting $720 = 6!$ gives $10! = 6! \\cdot 7! = 7! \\cdot 6!$, so\n$$10! - 7! \\cdot 6! = 0.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'For how many integer values of $x$ is $|2x| \\le 7\\pi$?\n\nA. $16$\nB. $17$\nC. $19$\nD. $20$\nE. $21$',
          answer: 'E. $21$',
          principle: 'Use exact rational bounds on $\\pi$ ($3 < \\pi < \\frac{22}{7}$) to determine the integer bounds of $|x|$.',
          solution:
            'Dividing both sides of $|2x| \\le 7\\pi$ by $2$ gives\n$$|x| \\le \\frac{7}{2}\\pi.$$\nUsing the standard strict bounds $3 < \\pi < \\frac{22}{7}$, multiply through by $\\frac{7}{2}$:\n$$\\frac{21}{2} < \\frac{7}{2}\\pi < \\frac{7}{2} \\cdot \\frac{22}{7} = 11.$$\nSince $10 < \\frac{21}{2} < \\frac{7}{2}\\pi < 11$, the greatest integer less than or equal to $\\frac{7}{2}\\pi$ is $10$.\nTherefore, the integer solutions are $x \\in \\{-10, -9, \\ldots, 0, \\ldots, 9, 10\\}$, which gives $10 - (-10) + 1 = 21$ integer values.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Balls numbered $1$, $2$, $3$, $\\ldots$ are deposited in $5$ bins, labeled $A$, $B$, $C$, $D$, and $E$, using the following procedure. Ball $1$ is deposited in bin $A$, and balls $2$ and $3$ are deposited in bin $B$. The next $3$ balls are deposited in bin $C$, the next $4$ in bin $D$, and so on, cycling back to bin $A$ after balls are deposited in bin $E$. (For example, balls numbered $22$, $23$, $\\ldots$, $28$ are deposited in bin $B$ at step $7$ of this process.) In which bin is ball $2024$ deposited?\n\nA. $A$\nB. $B$\nC. $C$\nD. $D$\nE. $E$',
          answer: 'D. $D$',
          principle: 'Sum triangular numbers $\\frac{k(k+1)}{2}$ to locate the step $k$ containing ball $2024$, then reduce $k$ modulo $5$.',
          solution:
            'Step $k$ deposits $k$ balls, so after $k$ steps the total number of balls deposited is the $k$-th triangular number\n$$T_k = 1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}.$$\nChecking values near $2024$:\n$$T_{63} = \\frac{63 \\cdot 64}{2} = 63 \\cdot 32 = 2016, \\qquad T_{64} = 2016 + 64 = 2080.$$\nSince $2016 < 2024 \\le 2080$, ball $2024$ is deposited during step $64$.\nThe steps cycle through the $5$ bins in order ($1 \\mapsto A$, $2 \\mapsto B$, $3 \\mapsto C$, $4 \\mapsto D$, $5 \\mapsto E$, and so on), so the bin at step $k$ depends only on $k \\bmod 5$. Since\n$$64 = 5 \\cdot 12 + 4 \\equiv 4 \\pmod{5},$$\nstep $64$ places ball $2024$ in the fourth bin, which is $D$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'In the following expression, Melanie changed some of the plus signs to minus signs:\n\n$$1 + 3 + 5 + 7 + \\cdots + 97 + 99$$\n\nWhen the new expression was evaluated, it was negative. What is the least number of plus signs that Melanie could have changed to minus signs?\n\nA. $14$\nB. $15$\nC. $16$\nD. $17$\nE. $18$',
          answer: 'B. $15$',
          principle: 'Changing $+v$ to $-v$ decreases the total sum by $2v$, so greedy choice of the largest terms minimizes the number of sign changes.',
          solution:
            'There are $50$ odd integers from $1$ to $99$ (since $99 = 2 \\cdot 50 - 1$), and the sum of the first $50$ positive odd integers is\n$$1 + 3 + 5 + \\cdots + 99 = 50^2 = 2500.$$\nChanging a term $+v$ to $-v$ reduces the total value by $2v$. Let $S$ be the sum of the terms whose preceding $+$ signs are changed to $-$ signs. For the new expression to be negative, we need\n$$2500 - 2S < 0 \\iff S > 1250.$$\nTo exceed $1250$ using as few terms as possible, Melanie should flip the signs of the $k$ largest terms: $99, 97, \\ldots, 101 - 2k$. Their sum is\n$$S_k = \\frac{k\\bigl(99 + (101 - 2k)\\bigr)}{2} = k(100 - k).$$\nTesting $k = 14$ and $k = 15$:\n- For $k = 14$: $S_{14} = 14 \\cdot 86 = 1204 \\le 1250$, so $14$ changes cannot make the expression negative.\n- For $k = 15$: $S_{15} = 15 \\cdot 85 = 1275 > 1250$, yielding $2500 - 2(1275) = -50 < 0$.\n\nHence the least number of plus signs Melanie could have changed is $15$.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'A rectangle has integer side lengths and an area of $2024$. What is the least possible perimeter of the rectangle?\n\nA. $160$\nB. $180$\nC. $222$\nD. $228$\nE. $390$',
          answer: 'B. $180$',
          principle: 'For a fixed product $ab$, the sum $a + b$ is minimized when the positive divisors $a$ and $b$ are as close together as possible.',
          solution:
            'Let the integer side lengths be $a \\le b$ with $ab = 2024$. Since $(b - a)^2 = (a + b)^2 - 4ab$, we have\n$$(a + b)^2 = (b - a)^2 + 8096,$$\nso the perimeter $2(a + b)$ is minimized when $b - a$ is as small as possible.\nPrime factorize $2024$:\n$$2024 = 8 \\cdot 253 = 2^3 \\cdot 11 \\cdot 23.$$\nObserve that $44^2 = 1936 < 2024 < 2025 = 45^2$, so the smaller factor $a$ satisfies $a \\le 44$. Checking $a = 44 = 2^2 \\cdot 11$ shows that $44$ divides $2024$, with corresponding factor $b = \\frac{2024}{44} = 2 \\cdot 23 = 46$.\nBecause $a = 44$ is the largest possible divisor not exceeding $\\sqrt{2024}$, $(44, 46)$ minimizes $b - a$ (and hence $a + b$). Thus the least possible perimeter is\n$$2(44 + 46) = 180.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'What is the remainder when $7^{2024} + 7^{2025} + 7^{2026}$ is divided by $19$?\n\nA. $0$\nB. $1$\nC. $7$\nD. $11$\nE. $18$',
          answer: 'A. $0$',
          principle: 'Factor out the lowest power of $7$ to expose a factor divisible by $19$.',
          solution:
            'Factor $7^{2024}$ out of all three terms:\n$$7^{2024} + 7^{2025} + 7^{2026} = 7^{2024}(1 + 7 + 7^2) = 7^{2024}(1 + 7 + 49) = 7^{2024} \\cdot 57.$$\nSince $57 = 3 \\cdot 19$ is a multiple of $19$, the entire sum is divisible by $19$, so the remainder is $0$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Let $N$ be the product of all the positive integer divisors of $42$. What is the units digit of $N$?\n\nA. $0$\nB. $2$\nC. $4$\nD. $6$\nE. $8$',
          answer: 'D. $6$',
          principle: 'Pair complementary divisors $d$ and $n/d$ to express the product of all divisors of $n$ as $n^{d(n)/2}$, then reduce modulo $10$.',
          solution:
            'Prime factorize $42 = 2^1 \\cdot 3^1 \\cdot 7^1$. The number of positive integer divisors of $42$ is\n$$(1 + 1)(1 + 1)(1 + 1) = 8.$$\nEach divisor $d$ pairs with its complement $\\frac{42}{d}$ (which is distinct from $d$ since $42$ is not a square) to give a product of $42$. With $4$ such pairs, the product of all divisors is\n$$N = 42^4.$$\nWorking modulo $10$ to find the units digit:\n$$N = 42^4 \\equiv 2^4 = 16 \\equiv 6 \\pmod{10}.$$\nTherefore, the units digit of $N$ is $6$.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'Real numbers $a$, $b$, and $c$ have arithmetic mean $0$. The arithmetic mean of $a^2$, $b^2$, and $c^2$ is $10$. What is the arithmetic mean of $ab$, $ac$, and $bc$?\n\nA. $-5$\nB. $-\\dfrac{10}{3}$\nC. $-\\dfrac{10}{9}$\nD. $0$\nE. $\\dfrac{10}{9}$',
          answer: 'A. $-5$',
          principle: 'Use the algebraic identity $(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + ac + bc)$.',
          solution:
            'From the given arithmetic means, we have\n$$a + b + c = 3 \\cdot 0 = 0 \\qquad \\text{and} \\qquad a^2 + b^2 + c^2 = 3 \\cdot 10 = 30.$$\nExpanding $(a + b + c)^2$ gives\n$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + ac + bc).$$\nSubstituting the known sums yields\n$$0^2 = 30 + 2(ab + ac + bc) \\implies ab + ac + bc = -15.$$\nTherefore, the arithmetic mean of $ab$, $ac$, and $bc$ is\n$$\\frac{ab + ac + bc}{3} = \\frac{-15}{3} = -5.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Quadrilateral $ABCD$ is a parallelogram, and $E$ is the midpoint of the side $\\overline{AD}$. Let $F$ be the intersection of lines $EB$ and $AC$. What is the ratio of the area of quadrilateral $CDEF$ to the area of triangle $CFB$? Give your answer as a ratio of two relatively prime positive integers separated by a colon.\n\nA. $5 : 4$\nB. $4 : 3$\nC. $3 : 2$\nD. $5 : 3$\nE. $2 : 1$',
          answer: 'A. $5 : 4$',
          principle: 'Use similar triangles formed by parallel sides of the parallelogram to find segment and area ratios along diagonal $AC$.',
          solution:
            'Let $S = [ABCD]$ denote the area of parallelogram $ABCD$. Diagonal $\\overline{AC}$ divides the parallelogram into two congruent triangles of equal area:\n$$[ABC] = [ADC] = \\frac{1}{2}S.$$\nBecause $\\overline{AD} \\parallel \\overline{BC}$ and $E$ is the midpoint of $\\overline{AD}$, we have $\\overline{AE} \\parallel \\overline{BC}$ with $AE = \\frac{1}{2}AD = \\frac{1}{2}BC$.\nBy alternate interior angles, $\\triangle AEF \\sim \\triangle CBF$ with similarity ratio $\\frac{AE}{CB} = \\frac{1}{2}$. Consequently,\n$$\\frac{AF}{FC} = \\frac{1}{2} \\implies FC = \\frac{2}{3}AC.$$\nSince $\\triangle CFB$ and $\\triangle CAB$ share the same altitude from $B$ to line $AC$,\n$$[CFB] = \\frac{FC}{AC}[ABC] = \\frac{2}{3} \\cdot \\frac{1}{2}S = \\frac{1}{3}S.$$\nFurthermore, because $\\triangle AEF \\sim \\triangle CBF$ with linear ratio $1 : 2$, the area ratio is $(1/2)^2 = 1/4$, giving\n$$[AEF] = \\frac{1}{4}[CFB] = \\frac{1}{4} \\cdot \\frac{1}{3}S = \\frac{1}{12}S.$$\nSince $E$ lies on $\\overline{AD}$ and $F$ lies on $\\overline{AC}$, quadrilateral $CDEF$ is obtained by removing $\\triangle AEF$ from $\\triangle ADC$:\n$$[CDEF] = [ADC] - [AEF] = \\frac{1}{2}S - \\frac{1}{12}S = \\frac{5}{12}S.$$\nHence the ratio of the two areas is\n$$[CDEF] : [CFB] = \\frac{5}{12}S : \\frac{1}{3}S = \\frac{5}{12} : \\frac{4}{12} = 5 : 4.$$',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'A group of $100$ students from different countries meet at a mathematics competition. Each student speaks the same number of languages, and, for every pair of students $A$ and $B$, student $A$ speaks some language that student $B$ does not speak, and student $B$ speaks some language that student $A$ does not speak. What is the least possible total number of languages spoken by all the students?\n\nA. $9$\nB. $10$\nC. $12$\nD. $51$\nE. $100$',
          answer: 'A. $9$',
          principle: 'Two distinct sets of equal size $k$ never contain one another, so the problem reduces to finding the smallest $n$ such that $\\binom{n}{k} \\ge 100$ for some $k$.',
          solution:
            'Suppose there are $n$ total languages spoken across the group, and each student speaks a subset of $k$ languages ($0 \\le k \\le n$).\nFor any two students $A$ and $B$ with language sets $S_A$ and $S_B$ of the same size $k$:\n- If $S_A = S_B$, neither speaks a language the other does not.\n- If $S_A \\neq S_B$, since $|S_A| = |S_B| = k$, neither set can be a subset of the other, so $S_A$ contains an element not in $S_B$ and $S_B$ contains an element not in $S_A$.\n\nThus the condition is satisfied if and only if the $100$ students are assigned $100$ distinct $k$-element subsets of the $n$ languages, which requires $\\binom{n}{k} \\ge 100$.\nFor a fixed $n$, $\\binom{n}{k}$ is maximized at $k = \\lfloor n/2 \\rfloor$.\n- If $n = 8$, the maximum possible number of subsets is $\\binom{8}{4} = \\frac{8 \\cdot 7 \\cdot 6 \\cdot 5}{24} = 70 < 100$, so $8$ (or fewer) languages cannot suffice.\n- If $n = 9$, taking $k = 4$ gives $\\binom{9}{4} = \\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{24} = 126 \\ge 100$, so we can assign $100$ distinct $4$-language subsets.\n\nTherefore, the least possible total number of languages is $9$.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Positive integers $x$ and $y$ satisfy the equation $\\sqrt{x} + \\sqrt{y} = \\sqrt{1183}$. What is the minimum possible value of $x + y$?\n\nA. $585$\nB. $595$\nC. $623$\nD. $700$\nE. $791$',
          answer: 'B. $595$',
          principle: 'Factor out the square part of $1183$, show $x$ and $y$ share the same squarefree part, and minimize $a^2 + b^2$ for fixed $a + b$.',
          solution:
            'Prime factorize $1183$:\n$$1183 = 7 \\cdot 169 = 7 \\cdot 13^2 \\implies \\sqrt{1183} = 13\\sqrt{7}.$$\nSquaring $\\sqrt{x} + \\sqrt{y} = \\sqrt{1183}$ yields $x + y + 2\\sqrt{xy} = 1183$, so $\\sqrt{xy} = \\frac{1183 - x - y}{2}$ is rational. Because $xy$ is a positive integer, $xy$ must be a perfect square.\nWrite $x = d_1 a^2$ and $y = d_2 b^2$ where $d_1, d_2$ are squarefree positive integers and $a, b \\ge 1$. For $xy = d_1 d_2 (ab)^2$ to be a square, $d_1 d_2$ must be a square, which forces $d_1 = d_2 = d$. Then\n$$(a + b)\\sqrt{d} = 13\\sqrt{7} \\implies (a + b)^2 d = 13^2 \\cdot 7.$$\nSince $d$ is squarefree, $d = 7$ and $a + b = 13$, so $x = 7a^2$ and $y = 7b^2$ with positive integers $a, b$ satisfying $a + b = 13$.\nNow express $x + y$ using $2(a^2 + b^2) = (a + b)^2 + (a - b)^2$:\n$$x + y = 7(a^2 + b^2) = \\frac{7}{2}\\bigl(13^2 + (a - b)^2\\bigr).$$\nSince $a + b = 13$ is odd, $|a - b| \\ge 1$, with minimum $|a - b| = 1$ attained at $\\{a, b\\} = \\{6, 7\\}$. Thus the minimum value of $x + y$ is\n$$7(6^2 + 7^2) = 7(36 + 49) = 7 \\cdot 85 = 595.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'A dartboard is the region $B$ in the coordinate plane consisting of points $(x, y)$ such that $|x| + |y| \\le 8$. A target $T$ is the region where $(x^2 + y^2 - 25)^2 \\le 49$. A dart is thrown and lands at a random point in $B$. The probability that the dart lands in $T$ can be expressed as $\\dfrac{m}{n} \\cdot \\pi$, where $m$ and $n$ are relatively prime positive integers. What is $m + n$?\n\nA. $39$\nB. $71$\nC. $73$\nD. $75$\nE. $135$',
          answer: 'B. $71$',
          principle: 'Compute the area of the diamond $B$ and the annulus $T$, verifying that $T \\subseteq B$ via the distance from the origin to the boundary of $B$.',
          solution:
            'The region $B = \\{(x, y) : |x| + |y| \\le 8\\}$ is a square rotated by $45^\\circ$ with vertices $(\\pm 8, 0)$ and $(0, \\pm 8)$. Its two diagonals each have length $16$, so\n$$\\text{Area}(B) = \\frac{1}{2} \\cdot 16 \\cdot 16 = 128.$$\nFor the target $T$, the inequality $(x^2 + y^2 - 25)^2 \\le 49$ is equivalent to\n$$-7 \\le x^2 + y^2 - 25 \\le 7 \\iff 18 \\le x^2 + y^2 \\le 32.$$\nThis describes an annulus centered at the origin with inner radius $\\sqrt{18}$ and outer radius $\\sqrt{32}$.\nBy the Cauchy-Schwarz inequality (or since the perpendicular distance from $(0,0)$ to each boundary line $\\pm x \\pm y = 8$ is $\\frac{8}{\\sqrt{2}} = \\sqrt{32}$), any point satisfying $x^2 + y^2 \\le 32$ also satisfies\n$$(|x| + |y|)^2 \\le (1^2 + 1^2)(x^2 + y^2) \\le 2 \\cdot 32 = 64 \\implies |x| + |y| \\le 8.$$\nHence the entire annulus $T$ lies inside $B$. Its area is\n$$\\text{Area}(T) = \\pi(32 - 18) = 14\\pi.$$\nTherefore, the probability that the dart lands in $T$ is\n$$\\frac{\\text{Area}(T)}{\\text{Area}(B)} = \\frac{14\\pi}{128} = \\frac{7}{64}\\pi.$$\nSince $\\gcd(7, 64) = 1$, we have $m = 7$ and $n = 64$, giving $m + n = 7 + 64 = 71$.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'A list of $9$ real numbers consists of $1$, $2.2$, $3.2$, $5.2$, $6.2$, $7$, as well as $x$, $y$, $z$ with $x \\le y \\le z$. The range of the list is $7$, and the mean and median are both positive integers. How many ordered triples $(x, y, z)$ are possible?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. infinitely many',
          answer: 'C. $3$',
          principle: 'Perform casework on whether the list\'s minimum is $0$, $1$, or strictly between $0$ and $1$, then constrain the $5$th element (median) and sum (mean).',
          solution:
            'The six fixed numbers span $[1, 7]$ and sum to\n$$1 + 2.2 + 3.2 + 5.2 + 6.2 + 7 = 24.8.$$\nLet $M \\in \\mathbb{Z}^+$ be the mean of the $9$ numbers, so $x + y + z = 9M - 24.8$. Let $m = \\min(1, x)$ and $L = \\max(7, z)$ be the minimum and maximum of the full list. Since $L - m = 7$, we have $L = m + 7$. Because $m \\le 1$ and $L \\ge 7$, we must have $0 \\le m \\le 1$. Consider three cases:\n\n- **Case 1: $m = 0$ and $L = 7$.** Then $x = 0$ and $0 \\le y \\le z \\le 7$, so $0 \\le y + z \\le 14$. Since $y + z = 9M - 24.8$, we get $24.8 \\le 9M \\le 38.8$, allowing $M \\in \\{3, 4\\}$.\n  - If $M = 3$, then $y + z = 2.2$. Because $y \\le z$, we have $z \\le 2.2$, so the five smallest elements of the list are $\\{0, y, 1, z, 2.2\\}$ in some order, forcing the median ($5$th element) to be $2.2 \\notin \\mathbb{Z}$.\n  - If $M = 4$, then $y + z = 11.2$. Since $z \\le 7$ and $y \\le z$, we have $4.2 \\le y \\le 5.6$. The four elements smaller than $y$ are $0, 1, 2.2, 3.2$. If $y > 5.2$, the $5$th element is $5.2 \\notin \\mathbb{Z}$; thus $4.2 \\le y \\le 5.2$ and $y$ is the median. The only integer in $[4.2, 5.2]$ is $y = 5$, which gives $z = 6.2$. Check: $(x, y, z) = (0, 5, 6.2)$ satisfies $0 \\le 5 \\le 6.2 \\le 7$ and has median $5$, mean $4$, range $7$.\n\n- **Case 2: $m = 1$ and $L = 8$.** Then $z = 8$ and $1 \\le x \\le y \\le 8$, so $2 \\le x + y \\le 16$. Since $x + y + 8 = 9M - 24.8$, we have $x + y = 9M - 32.8$, giving $34.8 \\le 9M \\le 48.8$ and $M \\in \\{4, 5\\}$.\n  - If $M = 4$, then $x + y = 3.2$, so $1 \\le x \\le y \\le 2.2$. The five smallest elements are $\\{1, x, y, 2.2, 3.2\\}$, forcing the median to be $3.2 \\notin \\mathbb{Z}$.\n  - If $M = 5$, then $x + y = 12.2$. Since $y \\le 8$ and $x \\le y$, we have $4.2 \\le x \\le 6.1$ and $y \\ge 6.1$. Thus $1, 2.2, 3.2$ lie below $x$, while $y, 6.2, 7, 8$ lie above $6.1$. If $x < 5.2$, the $5$th element is $5.2 \\notin \\mathbb{Z}$; hence $5.2 \\le x \\le 6.1$ and $x$ is the median. The only integer in $[5.2, 6.1]$ is $x = 6$, giving $y = 6.2$. Check: $(x, y, z) = (6, 6.2, 8)$ has median $6$, mean $5$, range $7$.\n\n- **Case 3: $0 < m < 1$ and $7 < L < 8$.** Then $x = m \\in (0, 1)$ and $z = x + 7 \\in (7, 8)$. Here $x + y + z = 2x + y + 7 = 9M - 24.8$, so $2x + y = 9M - 31.8$. Since $0 < 3x \\le 2x + y \\le 3x + 7 < 10$, we get $31.8 < 9M < 41.8$, so $M = 4$ is the only possibility. Then $2x + y = 4.2$, so $y = 4.2 - 2x \\in (2.2, 4.2)$. The three elements $x, 1, 2.2$ are strictly less than $y$, and $5.2, 6.2, 7, z$ are strictly greater than $y$, leaving $y$ and $3.2$ as the $4$th and $5$th elements. For the median to be an integer, we must have $y \\ge 3.2$ and $y \\in \\mathbb{Z}$, forcing $y = 4$. Then $2x = 0.2 \\implies x = 0.1$ and $z = 7.1$. Check: $(0.1, 4, 7.1)$ has median $4$, mean $4$, range $7$.\n\nAltogether, there are exactly $3$ possible ordered triples: $(0, 5, 6.2)$, $(6, 6.2, 8)$, and $(0.1, 4, 7.1)$.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Jerry likes to play with numbers. One day, he wrote all the integers from $1$ to $2024$ on the whiteboard. Then he repeatedly chose four numbers on the whiteboard, erased them, and replaced them by either their sum or their product. (For example, Jerry\'s first step might have been to erase $1$, $2$, $3$, and $5$, and then write either $11$, their sum, or $30$, their product, on the whiteboard.) After repeatedly performing this operation, Jerry noticed that all the remaining numbers on the whiteboard were odd. What is the maximum possible number of integers on the whiteboard at that time?\n\nA. $1010$\nB. $1011$\nC. $1012$\nD. $1013$\nE. $1014$',
          answer: 'A. $1010$',
          principle: 'Track the number of even integers on the board: each move decreases the even count by at most $3$ while decreasing the total count by $3$.',
          solution:
            'Initially, the list $1, 2, \\ldots, 2024$ contains $1012$ even integers and $1012$ odd integers.\nEach operation replaces $4$ integers by $1$ integer, reducing the total count of integers on the board by $3$. Suppose an operation erases $e$ even integers and $4 - e$ odd integers ($0 \\le e \\le 4$):\n- If $e = 4$, both the sum and product of four even numbers are even, so $4$ even numbers are erased and $1$ even number is written, reducing the even count by $3$.\n- If $e \\le 3$, at most $e \\le 3$ even numbers are erased, so the even count decreases by at most $3$.\n\nIn every case, the number of even integers decreases by at most $3$ per operation. To eliminate all $1012$ even integers requires at least\n$$\\left\\lceil \\frac{1012}{3} \\right\\rceil = 338$$\noperations (since $3 \\cdot 337 = 1011 < 1012$). Thus at most\n$$2024 - 3 \\cdot 338 = 2024 - 1014 = 1010$$\nintegers can remain.\nThis bound is achievable in $338$ moves:\n1. Perform $337$ moves, each erasing $3$ even integers and $1$ odd integer and writing their sum ($\\text{even} + \\text{even} + \\text{even} + \\text{odd} = \\text{odd}$). After $337$ moves, $1$ even integer and $1012$ odd integers remain.\n2. Perform $1$ final move erasing the last $1$ even integer and $3$ odd integers and writing their sum ($\\text{even} + \\text{odd} + \\text{odd} + \\text{odd} = \\text{odd}$).\n\nAll $1010$ remaining integers are odd, so the maximum possible count is $1010$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'In a race among $5$ snails, there is at most one tie, but that tie can involve any number of snails. For example, the result of the race might be that Dazzler is first; Abby, Cyrus, and Elroy are tied for second; and Bruna is fifth. How many different results of the race are possible?\n\nA. $180$\nB. $361$\nC. $420$\nD. $431$\nE. $720$',
          answer: 'D. $431$',
          principle: 'Partition into disjoint cases by the size $k$ of the tied group ($k = 0$ for no tie, or $2 \\le k \\le 5$).',
          solution:
            'We count the possible race outcomes according to whether there is a tie and how many snails participate in it:\n- **No tie:** All $5$ snails finish in distinct positions, giving $5! = 120$ results.\n- **A single tie of $k$ snails ($2 \\le k \\le 5$):** Choose the $k$ tied snails in $\\binom{5}{k}$ ways. Treating the tied group as one block alongside the $5 - k$ remaining snails gives $1 + (5 - k) = 6 - k$ distinct finishing blocks, which can be ordered in $(6 - k)!$ ways.\n  - $k = 2$: $\\binom{5}{2} \\cdot 4! = 10 \\cdot 24 = 240$\n  - $k = 3$: $\\binom{5}{3} \\cdot 3! = 10 \\cdot 6 = 60$\n  - $k = 4$: $\\binom{5}{4} \\cdot 2! = 5 \\cdot 2 = 10$\n  - $k = 5$: $\\binom{5}{5} \\cdot 1! = 1 \\cdot 1 = 1$\n\nSumming all cases gives\n$$120 + 240 + 60 + 10 + 1 = 431.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'How many different remainders can result when the $100$th power of an integer is divided by $125$?\n\nA. $1$\nB. $2$\nC. $5$\nD. $25$\nE. $125$',
          answer: 'B. $2$',
          principle: 'Split by divisibility by $5$ and apply Euler\'s totient theorem with $\\varphi(125) = 100$.',
          solution:
            'Let $n$ be an arbitrary integer, and consider two cases modulo $5$:\n- **Case 1: $5 \\mid n$.** Writing $n = 5k$, we have $n^{100} = 5^{100}k^{100} = 125 \\cdot 5^{97}k^{100}$, so\n  $$n^{100} \\equiv 0 \\pmod{125}.$$\n- **Case 2: $5 \\nmid n$.** Then $\\gcd(n, 125) = 1$. Since $\\varphi(125) = \\varphi(5^3) = 5^3 - 5^2 = 100$, Euler\'s totient theorem gives\n  $$n^{100} = n^{\\varphi(125)} \\equiv 1 \\pmod{125}.$$\n\nBoth remainders $0$ and $1$ occur (for instance, $0^{100} \\equiv 0$ and $1^{100} \\equiv 1 \\pmod{125}$). Thus there are $2$ different remainders.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Three different pairs of shoes are placed in a row so that no left shoe is next to a right shoe from a different pair. In how many ways can these six shoes be lined up?\n\nA. $60$\nB. $72$\nC. $90$\nD. $108$\nE. $120$',
          answer: 'A. $60$',
          principle: 'Classify valid $L$/$R$ side patterns by forbidding interior runs of length $1$, then assign pairs to switches.',
          solution:
            'Let $L$ and $R$ denote left and right shoes. Whenever an $L$ is adjacent to an $R$, those two shoes must belong to the same pair. Consequently, no interior run of identical letters can have length $1$, because a lone shoe flanked by two shoes of the opposite side would have to match both neighbors, which is impossible.\nListing all arrangements of three $L$\'s and three $R$\'s with no interior run of length $1$ by number of $L$-$R$ switches:\n- **$1$ switch ($2$ patterns):** `LLLRRR` and `RRRLLL`.\n  In `LLLRRR`, the two shoes at the switch (positions $3$ and $4$) must come from the same pair ($3$ choices). The remaining two $L$\'s can be ordered in $2! = 2$ ways and the remaining two $R$\'s in $2! = 2$ ways, giving $3 \\cdot 2 \\cdot 2 = 12$ arrangements. By symmetry, `RRRLLL` also gives $12$ arrangements ($2 \\cdot 12 = 24$ total).\n- **$2$ switches ($4$ patterns):** `LLRRRL`, `LRRRLL`, `RLLLRR`, and `RRLLLR`.\n  In each of these patterns, the interior block of length $3$ has two switches at its ends. Those two switches must involve two distinct pairs (since the two shoes at each switch are mates, and no pair has more than two shoes), while the remaining shoe at the other end belongs to the third pair. For instance, in `LRRRLL`, positions $1$-$2$ form one pair, positions $4$-$5$ form a second pair, and positions $3$ and $6$ form the third pair. Thus the three pairs are uniquely determined up to a permutation of the $3$ pairs, giving $3! = 6$ ways per pattern ($4 \\cdot 6 = 24$ total).\n- **$3$ switches ($2$ patterns):** `LRRLLR` and `RLLRRL` (the two interior blocks must both have length $2$, forcing the outer blocks to have length $1$).\n  In `LRRLLR`, positions $1$-$2$, $3$-$4$, and $5$-$6$ each straddle a switch, so each consecutive pair of positions must be a matching pair of shoes. Assigning the $3$ shoe pairs to these $3$ slots gives $3! = 6$ ways per pattern ($2 \\cdot 6 = 12$ total).\n- **$4$ or more switches:** impossible, as at least $3$ interior blocks each of length $\\ge 2$ would require at least $6$ interior positions.\n\nSumming over all valid patterns yields\n$$24 + 24 + 12 = 60.$$',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'A group of $16$ people will be partitioned into $4$ indistinguishable $4$-person committees. Each committee will have one chairperson and one secretary. The number of different ways to make these assignments can be written as $3^r M$, where $r$ and $M$ are positive integers and $M$ is not divisible by $3$. What is $r$?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'A. $5$',
          principle: 'Count unordered partitions into $4$-person committees with $2$ officers each, then apply Legendre\'s formula to find the $3$-adic valuation.',
          solution:
            'First, the number of ways to partition $16$ distinct people into $4$ indistinguishable committees of $4$ people is\n$$\\frac{1}{4!}\\binom{16}{4}\\binom{12}{4}\\binom{8}{4}\\binom{4}{4} = \\frac{16!}{(4!)^4 \\cdot 4!} = \\frac{16!}{(4!)^5}.$$\nWithin each of the $4$ committees, there are $4$ choices for chairperson and $3$ remaining choices for secretary, giving $4 \\cdot 3 = 12$ officer assignments per committee, or $12^4$ across all $4$ committees. Hence the total number of assignments is\n$$N = \\frac{16!}{(4!)^5} \\cdot 12^4.$$\nLet $v_3(n)$ denote the exponent of $3$ in the prime factorization of $n$. By Legendre\'s formula:\n- $v_3(16!) = \\left\\lfloor \\frac{16}{3} \\right\\rfloor + \\left\\lfloor \\frac{16}{9} \\right\\rfloor = 5 + 1 = 6$,\n- $v_3(4!) = \\left\\lfloor \\frac{4}{3} \\right\\rfloor = 1$, so $v_3\\bigl((4!)^5\\bigr) = 5 \\cdot 1 = 5$,\n- $v_3(12^4) = 4 \\cdot v_3(12) = 4 \\cdot 1 = 4$.\n\nTherefore, the exponent of $3$ in $N$ is\n$$r = v_3(N) = 6 - 5 + 4 = 5.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'The Fibonacci numbers are defined by $F_1 = 1$, $F_2 = 1$, and $F_n = F_{n-1} + F_{n-2}$ for $n \\ge 3$. What is\n\n$$\\frac{F_2}{F_1} + \\frac{F_4}{F_2} + \\frac{F_6}{F_3} + \\cdots + \\frac{F_{20}}{F_{10}}?$$\n\nA. $318$\nB. $319$\nC. $320$\nD. $321$\nE. $322$',
          answer: 'B. $319$',
          principle: 'Use the Fibonacci addition identity $F_{k+j} = F_{k-1}F_j + F_k F_{j+1}$ with $j = k$ to reduce $\\frac{F_{2k}}{F_k} = F_{k-1} + F_{k+1}$, then telescope using $F_i = F_{i+2} - F_{i+1}$.',
          solution:
            'Extend the sequence with $F_0 = 0$ (so $F_2 = F_1 + F_0$). For any fixed $k \\ge 1$ and all $j \\ge 0$, we claim\n$$F_{k+j} = F_{k-1}F_j + F_k F_{j+1}.$$\nAt $j = 0$, the right-hand side is $F_{k-1}\\cdot 0 + F_k \\cdot 1 = F_k$; at $j = 1$, it is $F_{k-1} \\cdot 1 + F_k \\cdot 1 = F_{k+1}$. Since both sides satisfy the recurrence $a_{j+1} = a_j + a_{j-1}$, equality holds for all $j \\ge 0$ by induction.\nSetting $j = k$ gives $F_{2k} = F_k(F_{k-1} + F_{k+1})$, so\n$$\\frac{F_{2k}}{F_k} = F_{k-1} + F_{k+1}.$$\nUsing $F_i = F_{i+2} - F_{i+1}$, the partial sum of Fibonacci numbers telescopes as $\\sum_{i=1}^n F_i = F_{n+2} - F_2 = F_{n+2} - 1$. Therefore,\n$$\\sum_{k=1}^{10} \\frac{F_{2k}}{F_k} = \\sum_{k=1}^{10} F_{k-1} + \\sum_{k=1}^{10} F_{k+1} = \\bigl(0 + (F_{11} - 1)\\bigr) + \\bigl((F_{13} - 1) - F_1\\bigr) = F_{11} + F_{13} - 3.$$\nComputing the Fibonacci terms $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233$ gives $F_{11} = 89$ and $F_{13} = 233$, so\n$$89 + 233 - 3 = 319.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Let\n\n$$P(m) = \\frac{m}{2} + \\frac{m^2}{4} + \\frac{m^4}{8} + \\frac{m^8}{8}.$$\n\nHow many of the values of $P(2022)$, $P(2023)$, $P(2024)$, and $P(2025)$ are integers?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'E. $4$',
          principle: 'Combine over denominator $8$ and analyze the numerator modulo $8$ by parity of $m$.',
          solution:
            'Combine the terms over a common denominator of $8$:\n$$P(m) = \\frac{4m + 2m^2 + m^4 + m^8}{8}.$$\nWe check divisibility of the numerator by $8$ for any integer $m$:\n- **If $m$ is even**, write $m = 2k$. Then $4m = 8k$, $2m^2 = 8k^2$, $m^4 = 16k^4$, and $m^8 = 256k^8$ are all divisible by $8$, so the numerator is $0 \\pmod{8}$.\n- **If $m$ is odd**, write $m = 2k + 1$. Then $m^2 = 4k(k + 1) + 1 \\equiv 1 \\pmod{8}$ because $k(k + 1)$ is even. Consequently, $m^4 \\equiv 1 \\pmod{8}$, $m^8 \\equiv 1 \\pmod{8}$, $2m^2 \\equiv 2 \\pmod{8}$, and $4m = 8k + 4 \\equiv 4 \\pmod{8}$. Summing gives\n  $$4m + 2m^2 + m^4 + m^8 \\equiv 4 + 2 + 1 + 1 = 8 \\equiv 0 \\pmod{8}.$$\n\nHence $P(m)$ is an integer for **every** integer $m$, so all $4$ values $P(2022)$, $P(2023)$, $P(2024)$, and $P(2025)$ are integers.',
          rubric: OK
        }
      ]
    }
  ]
};
