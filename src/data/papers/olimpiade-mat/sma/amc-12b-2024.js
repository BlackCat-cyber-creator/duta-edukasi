/**
 * Paket Soal Terstruktur: AMC 12B (2024) — 23 of 25 multiple-choice problems included.
 * Source: scraped_raw/amc-12b-2024.md (MAA AMC 12B 2024).
 * Skipped 2 diagram-dependent problems whose figures are omitted from the archive: Q7 and Q19.
 */
const OK = [{ code: 'A1', text: 'Correct option selected with valid supporting reasoning.' }];

export default {
  id: 'amc-12b-2024',
  slug: 'amc-12b-2024',
  subject: 'olimpiade-mat',
  grade: 12,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 12B (2024)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab6-fungsi-kuadrat',
    'sma10-bab7-statistika',
    'sma10-bab8-peluang',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 12',
  title: 'AMC 12B — 2024',
  totalMarks: 23,
  instructions:
    'This set contains 23 multiple-choice problems from the 25-problem 2024 AMC 12B paper (included: Q1-Q6, Q8-Q18, Q20-Q25; skipped: 2 problems requiring missing diagrams, namely Q7 and Q19). Original problem numbers are preserved. In the official AMC 12 contest, a correct answer scores 6 points, an unanswered problem scores 1.5 points, and an incorrect answer scores 0 points; in this practice set, each included problem is worth 1 point (23 points total). Calculators are not allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 12B',
    file: 'scraped_raw/amc-12b-2024.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 23,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 23 included problems (original AMC 12B numbering; 1 point each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'In a long line of people arranged left to right, the $1013$th person from the left is also the $1010$th person from the right. How many people are in the line?\n\nA. $2021$\nB. $2022$\nC. $2023$\nD. $2024$\nE. $2025$',
          answer: 'B. $2022$',
          principle: 'Count the people strictly to the left and strictly to the right of the given person, or use inclusion-exclusion to avoid double-counting that person.',
          solution:
            'Being the $1013$th person from the left means there are $1013 - 1 = 1012$ people strictly to their left. Being the $1010$th person from the right means there are $1010 - 1 = 1009$ people strictly to their right.\nIncluding the person themself, the total number of people in the line is\n$$1012 + 1 + 1009 = 2022.$$\n(Equivalently, $1013 + 1010 - 1 = 2022$, subtracting $1$ so the shared person is not counted twice.)',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'What is $10! - 7! \\cdot 6!$?\n\nA. $-120$\nB. $0$\nC. $120$\nD. $600$\nE. $720$',
          answer: 'B. $0$',
          principle: 'Factor out $7!$ using $10! = 10 \\cdot 9 \\cdot 8 \\cdot 7!$ and compare $10 \\cdot 9 \\cdot 8$ with $6!$.',
          solution:
            'Rewrite $10!$ in terms of $7!$:\n$$10! = 10 \\cdot 9 \\cdot 8 \\cdot 7! = 720 \\cdot 7!.$$\nNotice also that\n$$6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720.$$\nHence $10! = 7! \\cdot 6!$, so\n$$10! - 7! \\cdot 6! = 720 \\cdot 7! - 7! \\cdot 720 = 0.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'For how many integer values of $x$ is $|2x| \\le 7\\pi$?\n\nA. $16$\nB. $17$\nC. $19$\nD. $20$\nE. $21$',
          answer: 'E. $21$',
          principle: 'Isolate $|x|$ and bound $\\frac{7}{2}\\pi$ between consecutive integers using exact rational bounds $3 < \\pi < \\frac{22}{7}$.',
          solution:
            'Dividing both sides of $|2x| \\le 7\\pi$ by $2$ gives\n$$|x| \\le \\frac{7}{2}\\pi.$$\nUsing the standard exact inequality $3 < \\pi < \\frac{22}{7}$ and multiplying by $\\frac{7}{2}$ yields\n$$10 + \\frac{1}{2} = \\frac{21}{2} < \\frac{7}{2}\\pi < \\frac{7}{2} \\cdot \\frac{22}{7} = 11.$$\nTherefore $\\left\\lfloor \\frac{7}{2}\\pi \\right\\rfloor = 10$, so the integer solutions to $|x| \\le \\frac{7}{2}\\pi$ are precisely $x \\in \\{-10, -9, \\dots, 0, \\dots, 9, 10\\}$.\nThe count of these integers is $10 - (-10) + 1 = 21$.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Balls numbered $1$, $2$, $3$, $\\ldots$ are deposited in $5$ bins, labeled $A$, $B$, $C$, $D$, and $E$, using the following procedure. Ball $1$ is deposited in bin $A$, and balls $2$ and $3$ are deposited in bin $B$. The next $3$ balls are deposited in bin $C$, the next $4$ in bin $D$, and so on, cycling back to bin $A$ after balls are deposited in bin $E$. (For example, balls numbered $22$, $23$, $\\ldots$, $28$ are deposited in bin $B$ at step $7$ of this process.) In which bin is ball $2024$ deposited?\n\nA. $A$\nB. $B$\nC. $C$\nD. $D$\nE. $E$',
          answer: 'D. $D$',
          principle: 'Use triangular numbers $T_k = \\frac{k(k+1)}{2}$ to locate the step $k$ containing ball $2024$, then reduce $k$ modulo $5$.',
          solution:
            'At step $k$ ($k \\ge 1$), $k$ balls are deposited, so after $k$ steps the cumulative number of balls deposited is the $k$th triangular number\n$$T_k = 1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}.$$\nCheck values near $2024$:\n$$T_{63} = \\frac{63 \\cdot 64}{2} = 63 \\cdot 32 = 2016, \\qquad T_{64} = 2016 + 64 = 2080.$$\nSince $2016 < 2024 \\le 2080$, ball $2024$ is deposited during step $64$.\nThe steps cycle every $5$ bins ($A, B, C, D, E$ for $k \\equiv 1, 2, 3, 4, 0 \\pmod{5}$ respectively). Because\n$$64 \\equiv 4 \\pmod{5},$$\nstep $64$ deposits its balls in bin $D$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'In the following expression, Melanie changed some of the plus signs to minus signs:\n$$1 + 3 + 5 + 7 + \\cdots + 97 + 99$$\nWhen the new expression was evaluated, it was negative. What is the least number of plus signs that Melanie could have changed to minus signs?\n\nA. $14$\nB. $15$\nC. $16$\nD. $17$\nE. $18$',
          answer: 'B. $15$',
          principle: 'Flipping $+v$ to $-v$ reduces the total by $2v$, so the flipped terms must sum to more than half the original sum; maximize their sum greedily.',
          solution:
            'The original sum has $50$ consecutive odd integers starting from $1$, so its value is\n$$S = 1 + 3 + 5 + \\cdots + 99 = 50^2 = 2500.$$\nChanging the plus sign before a term $v \\in \\{3, 5, \\dots, 99\\}$ to a minus sign decreases the sum by $2v$. If the flipped terms sum to $T$, the new value is $S - 2T$, which is negative if and only if\n$$2T > S = 2500 \\iff T > 1250.$$\nTo achieve $T > 1250$ with the fewest sign changes $k$, we greedily flip the $k$ largest terms: $99, 97, \\dots, 101 - 2k$. Their sum is\n$$T_{\\max}(k) = \\frac{k\\bigl(99 + (101 - 2k)\\bigr)}{2} = k(100 - k).$$\nTesting values of $k$:\n- For $k = 14$: $T_{\\max}(14) = 14 \\cdot 86 = 1204 \\le 1250$, so $14$ sign changes cannot make the expression negative.\n- For $k = 15$: $T_{\\max}(15) = 15 \\cdot 85 = 1275 > 1250$, giving $2500 - 2(1275) = -50 < 0$.\nHence the least number of plus signs Melanie could have changed is $15$.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The national debt of the United States is on track to reach $5 \\cdot 10^{13}$ dollars by $2033$. How many digits does this number of dollars have when written as a numeral in base $5$? (The approximation of $\\log_{10} 5$ as $0.7$ is sufficient for this problem.)\n\nA. $18$\nB. $20$\nC. $22$\nD. $24$\nE. $26$',
          answer: 'B. $20$',
          principle: 'A positive integer $N$ has $d$ digits in base $5$ if and only if $5^{d-1} \\le N < 5^d$; factor out powers of $5$ and bound the remaining power of $2$.',
          solution:
            'Factor $N = 5 \\cdot 10^{13}$ into powers of $5$ and $2$:\n$$N = 5 \\cdot (5 \\cdot 2)^{13} = 5^{14} \\cdot 2^{13}.$$\nCompare $2^{13} = 8192$ with consecutive powers of $5$:\n$$5^5 = 3125 < 8192 = 2^{13} < 15625 = 5^6.$$\nMultiplying all parts of the inequality by $5^{14}$ gives\n$$5^{19} < 5^{14} \\cdot 2^{13} < 5^{20}.$$\nBecause any integer $N$ satisfying $5^{d-1} \\le N < 5^d$ requires $d$ digits in base $5$, the number $5 \\cdot 10^{13}$ has $20$ digits in base $5$.',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'What value of $x$ satisfies\n$$\\frac{\\log_2 x \\cdot \\log_3 x}{\\log_2 x + \\log_3 x} = 2?$$\n\nA. $25$\nB. $32$\nC. $36$\nD. $42$\nE. $48$',
          answer: 'C. $36$',
          principle: 'Take reciprocals and apply the change-of-base identity $\\frac{1}{\\log_b x} = \\log_x b$.',
          solution:
            'The equation requires $x > 0$ and $\\log_2 x + \\log_3 x \\ne 0$, so $x \\ne 1$. Taking the reciprocal of both sides gives\n$$\\frac{\\log_2 x + \\log_3 x}{\\log_2 x \\cdot \\log_3 x} = \\frac{1}{2} \\implies \\frac{1}{\\log_3 x} + \\frac{1}{\\log_2 x} = \\frac{1}{2}.$$\nUsing $\\frac{1}{\\log_b x} = \\log_x b$, this simplifies to\n$$\\log_x 3 + \\log_x 2 = \\frac{1}{2} \\implies \\log_x 6 = \\frac{1}{2}.$$\nTherefore $x^{1/2} = 6$, which yields $x = 36$.',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'A dartboard is the region $B$ in the coordinate plane consisting of points $(x, y)$ such that $|x| + |y| \\le 8$. A target $T$ is the region where $(x^2 + y^2 - 25)^2 \\le 49$. A dart is thrown and lands at a random point in $B$. The probability that the dart lands in $T$ can be expressed as $\\frac{m}{n} \\cdot \\pi$, where $m$ and $n$ are relatively prime positive integers. What is $m + n$?\n\nA. $39$\nB. $71$\nC. $73$\nD. $75$\nE. $135$',
          answer: 'B. $71$',
          principle: 'Find the area of the diamond $B$ and the annulus $T$, and verify that $T$ lies completely inside $B$ via the distance from the origin to the boundary lines.',
          solution:
            'The dartboard $B$ defined by $|x| + |y| \\le 8$ is a square with vertices $(\\pm 8, 0)$ and $(0, \\pm 8)$. Its perpendicular diagonals both have length $16$, so\n$$\\operatorname{Area}(B) = \\frac{1}{2} \\cdot 16 \\cdot 16 = 128.$$\nFor the target $T$, taking square roots in $(x^2 + y^2 - 25)^2 \\le 49$ gives\n$$-7 \\le x^2 + y^2 - 25 \\le 7 \\iff 18 \\le x^2 + y^2 \\le 32.$$\nThis is an annulus centered at the origin with inner radius $\\sqrt{18}$ and outer radius $\\sqrt{32}$.\nCheck that $T \\subseteq B$: the four sides of $B$ lie on the lines $\\pm x \\pm y = 8$, each at perpendicular distance\n$$\\frac{|8|}{\\sqrt{1^2 + 1^2}} = \\frac{8}{\\sqrt{2}} = \\sqrt{32}$$\nfrom the origin. Hence the outer boundary $x^2 + y^2 = 32$ of $T$ is tangent to all four sides of $B$, so the entire annulus $T$ lies inside $B$.\nIts area is $\\operatorname{Area}(T) = \\pi(32 - 18) = 14\\pi$, giving probability\n$$\\frac{14\\pi}{128} = \\frac{7}{64}\\pi.$$\nSince $\\gcd(7, 64) = 1$, we have $m = 7$, $n = 64$, and $m + n = 7 + 64 = 71$.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'A list of $9$ real numbers consists of $1$, $2.2$, $3.2$, $5.2$, $6.2$, $7$, as well as $x$, $y$, $z$ with $x \\le y \\le z$. The range of the list is $7$, and the mean and median are both positive integers. How many ordered triples $(x, y, z)$ are possible?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. infinitely many',
          answer: 'C. $3$',
          principle: 'Do casework on whether the minimum $0$ or maximum $8$ endpoints are achieved by the known numbers $1$ and $7$ or by $x$ and $z$, then enforce integer mean and median.',
          solution:
            'The six fixed numbers sum to $1 + 2.2 + 3.2 + 5.2 + 6.2 + 7 = 24.8$ and span $[1, 7]$. Let $m_{\\min}$ and $m_{\\max}$ be the minimum and maximum of all $9$ numbers. Since $m_{\\min} \\le 1$, $m_{\\max} \\ge 7$, and $m_{\\max} - m_{\\min} = 7$, we must have $0 \\le m_{\\min} \\le 1$ and $7 \\le m_{\\max} \\le 8$. Let $\\mu \\in \\mathbb{Z}^+$ be the mean, so $9\\mu = 24.8 + x + y + z$.\n\n- **Case 1 ($m_{\\min} = 0, m_{\\max} = 7$):** Since $0 < 1$, we have $x = 0$ and $0 \\le y \\le z \\le 7$, so $y + z \\le 14$ and $9\\mu = 24.8 + y + z \\in [24.8, 38.8]$. Thus $\\mu \\in \\{3, 4\\}$.\n  - If $\\mu = 3$, then $y + z = 2.2$, forcing $y \\le z \\le 2.2$; the $5$th smallest element of the $9$-number list is $2.2$, not an integer.\n  - If $\\mu = 4$, then $y + z = 11.2$. Since $z \\le 7$, we have $y \\ge 4.2 > 3.2$, so the $4$ smallest numbers are $0, 1, 2.2, 3.2$, and the median is $\\min(y, 5.2)$. For this to be an integer with $4.2 \\le y \\le 5.2$, we must have $y = 5$, giving $z = 6.2 \\le 7$. This yields $(0, 5, 6.2)$.\n\n- **Case 2 ($m_{\\min} = 1, m_{\\max} = 8$):** Since $8 > 7$, we have $z = 8$ and $1 \\le x \\le y \\le 8$, so $x + y \\in [2, 16]$ and $9\\mu = 32.8 + x + y \\in [34.8, 48.8]$. Thus $\\mu \\in \\{4, 5\\}$.\n  - If $\\mu = 4$, then $x + y = 3.2$, so $x \\le y \\le 2.2$ and the median is $3.2$, not an integer.\n  - If $\\mu = 5$, then $x + y = 12.2$. Since $y \\le 8$, we have $x \\ge 4.2$ and $y \\ge 6.1 > 5.2$. If $x < 5.2$, the median is $5.2$ (not an integer). Thus $5.2 \\le x \\le 6.1$, so the median is $x$, forcing $x = 6$ and $y = 6.2 \\le 8$. This yields $(6, 6.2, 8)$.\n\n- **Case 3 ($0 < m_{\\min} < 1$ and $7 < m_{\\max} < 8$):** Here $x = m_{\\min} \\in (0, 1)$ and $z = x + 7 \\in (7, 8)$, with $x < y < z$. Then $9\\mu = 24.8 + x + y + (x + 7) = 31.8 + 2x + y$. Because $0 < 2x + y < 2 + 8 = 10$, we have $31.8 < 9\\mu < 41.8$, forcing $\\mu = 4$ and $y = 4.2 - 2x$. Since $0 < x < 1$, we get $2.2 < y < 4.2$. The $5$ numbers below $5.2$ are $x, 1, 2.2, 3.2, y$, so the median is $\\max(y, 3.2)$. For this to be an integer, we need $y = 4$, giving $x = 0.1$ and $z = 7.1$. This yields $(0.1, 4, 7.1)$.\n\nIn total, there are $3$ valid ordered triples: $(0, 5, 6.2)$, $(6, 6.2, 8)$, and $(0.1, 4, 7.1)$.',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'Let $x_n = \\sin^2(n^\\circ)$. What is the mean of $x_1, x_2, x_3, \\ldots, x_{90}$? Express your answer as a common fraction.\n\nA. $\\frac{11}{45}$\nB. $\\frac{22}{45}$\nC. $\\frac{89}{180}$\nD. $\\frac{1}{2}$\nE. $\\frac{91}{180}$',
          answer: 'E. $\\frac{91}{180}$',
          principle: 'Pair complementary angles $n^\\circ$ and $(90 - n)^\\circ$ using $\\sin(90^\\circ - n^\\circ) = \\cos(n^\\circ)$ and $\\sin^2\\theta + \\cos^2\\theta = 1$.',
          solution:
            'For each $n \\in \\{1, 2, \\dots, 44\\}$, the cofunction identity $\\sin(90^\\circ - n^\\circ) = \\cos(n^\\circ)$ gives\n$$x_n + x_{90 - n} = \\sin^2(n^\\circ) + \\cos^2(n^\\circ) = 1.$$\nThis forms $44$ pairs summing to $44$. The remaining two terms are\n$$x_{45} = \\sin^2(45^\\circ) = \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{1}{2}, \\qquad x_{90} = \\sin^2(90^\\circ) = 1^2 = 1.$$\nHence the total sum is\n$$\\sum_{n=1}^{90} x_n = 44 + \\frac{1}{2} + 1 = \\frac{91}{2},$$\nand dividing by $90$ gives a mean of $\\frac{91}{180}$.',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Suppose $z$ is a complex number with positive imaginary part, with real part greater than $1$, and with $|z| = 2$. In the complex plane, the four points $0$, $z$, $z^2$, and $z^3$ are the vertices of a quadrilateral with area $15$. What is the imaginary part of $z$? Express your answer as a common fraction.\n\nA. $\\frac{3}{4}$\nB. $1$\nC. $\\frac{4}{3}$\nD. $\\frac{3}{2}$\nE. $\\frac{5}{3}$',
          answer: 'D. $\\frac{3}{2}$',
          principle: 'Write $z$ in polar form $2(\\cos\\theta + i\\sin\\theta)$, verify the arguments increase monotonically in $(0, \\pi)$, and sum the areas of $\\triangle(0, z, z^2)$ and $\\triangle(0, z^2, z^3)$.',
          solution:
            'Write $z = 2(\\cos\\theta + i\\sin\\theta)$ with $\\theta \\in (0, \\pi)$ since $\\operatorname{Im}(z) > 0$. Because $\\operatorname{Re}(z) = 2\\cos\\theta > 1$, we have $\\cos\\theta > \\frac{1}{2}$, so $0 < \\theta < \\frac{\\pi}{3}$.\nThus the arguments of $z$, $z^2$, and $z^3$ are $\\theta$, $2\\theta$, and $3\\theta$, which satisfy $0 < \\theta < 2\\theta < 3\\theta < \\pi$. Hence the points $0, z, z^2, z^3$ form a simple (non-self-intersecting) quadrilateral split by diagonal $0z^2$ into $\\triangle(0, z, z^2)$ and $\\triangle(0, z^2, z^3)$.\nUsing $|z| = 2$, $|z^2| = 4$, $|z^3| = 8$, and the included angle $\\theta$ at $0$ in both triangles:\n$$\\operatorname{Area} = \\frac{1}{2}(2)(4)\\sin\\theta + \\frac{1}{2}(4)(8)\\sin\\theta = 4\\sin\\theta + 16\\sin\\theta = 20\\sin\\theta.$$\nSetting $20\\sin\\theta = 15$ gives $\\sin\\theta = \\frac{3}{4}$, so\n$$\\operatorname{Im}(z) = 2\\sin\\theta = 2 \\cdot \\frac{3}{4} = \\frac{3}{2}.$$\n(As a check, $\\operatorname{Re}(z) = \\sqrt{|z|^2 - \\operatorname{Im}(z)^2} = \\sqrt{4 - \\frac{9}{4}} = \\frac{\\sqrt{7}}{2} > 1$, satisfying all conditions.)',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'There are real numbers $x$, $y$, $h$, and $k$ that satisfy the system of equations\n$$x^2 + y^2 - 6x - 8y = h$$\n$$x^2 + y^2 - 10x + 4y = k.$$\nWhat is the minimum possible value of $h + k$?\n\nA. $-54$\nB. $-46$\nC. $-34$\nD. $-16$\nE. $16$',
          answer: 'C. $-34$',
          principle: 'Add the two equations and complete the square in $x$ and $y$.',
          solution:
            'Adding the two equations eliminates nothing and expresses $h + k$ directly as a quadratic in $x$ and $y$:\n$$h + k = 2x^2 + 2y^2 - 16x - 4y = 2(x^2 - 8x) + 2(y^2 - 2y).$$\nCompleting the square in both variables gives\n$$h + k = 2(x - 4)^2 - 32 + 2(y - 1)^2 - 2 = 2(x - 4)^2 + 2(y - 1)^2 - 34.$$\nSince $(x - 4)^2 \\ge 0$ and $(y - 1)^2 \\ge 0$ for all real $x, y$, we have $h + k \\ge -34$, with equality attained at $x = 4, y = 1$ (giving $h = -15, k = -19$).',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'How many different remainders can result when the $100$th power of an integer is divided by $125$?\n\nA. $1$\nB. $2$\nC. $5$\nD. $25$\nE. $125$',
          answer: 'B. $2$',
          principle: 'Split into integers divisible by $5$ and integers coprime to $5$, applying Euler\'s Totient Theorem with $\\varphi(125) = 100$.',
          solution:
            'Let $n$ be any integer and consider the two cases modulo $5$:\n- **Case 1 ($5 \\mid n$):** Writing $n = 5m$, we get $n^{100} = 5^{100}m^{100}$, which is divisible by $5^3 = 125$, so $n^{100} \\equiv 0 \\pmod{125}$.\n- **Case 2 ($5 \\nmid n$):** Then $\\gcd(n, 125) = 1$. Since $\\varphi(125) = 125\\left(1 - \\frac{1}{5}\\right) = 100$, Euler\'s Totient Theorem gives\n$$n^{100} = n^{\\varphi(125)} \\equiv 1 \\pmod{125}.$$\nBoth remainders $0$ and $1$ occur (for instance, with $n = 0$ and $n = 1$), so there are $2$ possible remainders.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'A triangle in the coordinate plane has vertices $A(\\log_2 1, \\log_2 2)$, $B(\\log_2 3, \\log_2 4)$, and $C(\\log_2 7, \\log_2 8)$. What is the area of $\\triangle ABC$?\n\nA. $\\log_2 \\frac{\\sqrt{3}}{7}$\nB. $\\log_2 \\frac{3}{\\sqrt{7}}$\nC. $\\log_2 \\frac{7}{\\sqrt{3}}$\nD. $\\log_2 \\frac{11}{\\sqrt{7}}$\nE. $\\log_2 \\frac{11}{\\sqrt{3}}$',
          answer: 'B. $\\log_2 \\frac{3}{\\sqrt{7}}$',
          principle: 'Simplify the exact coordinates, translate $A$ to the origin, and apply the $2 \\times 2$ determinant (shoelace) area formula together with logarithm laws.',
          solution:
            'Evaluate the powers-of-$2$ logarithms: $\\log_2 1 = 0$, $\\log_2 2 = 1$, $\\log_2 4 = 2$, and $\\log_2 8 = 3$. Thus\n$$A = (0, 1), \\qquad B = (\\log_2 3, 2), \\qquad C = (\\log_2 7, 3).$$\nTranslating every vertex down by $1$ unit puts $A$ at the origin, yielding vectors $\\overrightarrow{AB} = (\\log_2 3, 1)$ and $\\overrightarrow{AC} = (\\log_2 7, 2)$. The area of $\\triangle ABC$ is half the absolute value of their $2 \\times 2$ determinant:\n$$\\operatorname{Area}(\\triangle ABC) = \\frac{1}{2}\\bigl|2\\log_2 3 - \\log_2 7\\bigr| = \\frac{1}{2}\\bigl|\\log_2 9 - \\log_2 7\\bigr| = \\frac{1}{2}\\log_2\\frac{9}{7} = \\log_2\\sqrt{\\frac{9}{7}} = \\log_2\\frac{3}{\\sqrt{7}}.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'A group of $16$ people will be partitioned into $4$ indistinguishable $4$-person committees. Each committee will have one chairperson and one secretary. The number of different ways to make these assignments can be written as $3^r M$, where $r$ and $M$ are positive integers and $M$ is not divisible by $3$. What is $r$?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'A. $5$',
          principle: 'Write the exact combinatorial count using multinomial coefficients and division by $4!$, then compute the $3$-adic valuation via Legendre\'s Formula.',
          solution:
            'First, partition $16$ people into $4$ unlabeled (indistinguishable) committees of $4$ people each:\n$$\\frac{16!}{(4!)^4 \\cdot 4!} = \\frac{16!}{(4!)^5}.$$\nNext, within each of the $4$ committees, select a chairperson ($4$ choices) and a different secretary ($3$ choices), giving $4 \\cdot 3 = 12$ ways per committee, or $12^4$ ways across all $4$ committees. The total number of assignments is\n$$N = \\frac{16! \\cdot 12^4}{(4!)^5}.$$\nCompute the exponent $v_3$ of $3$ in each factor using Legendre\'s Formula $v_3(n!) = \\sum_{k \\ge 1} \\left\\lfloor \\frac{n}{3^k} \\right\\rfloor$:\n- $v_3(16!) = \\left\\lfloor \\frac{16}{3} \\right\\rfloor + \\left\\lfloor \\frac{16}{9} \\right\\rfloor = 5 + 1 = 6$,\n- $v_3(12^4) = 4 \\cdot v_3(12) = 4 \\cdot 1 = 4$,\n- $v_3\\bigl((4!)^5\\bigr) = 5 \\cdot v_3(4!) = 5 \\cdot \\left\\lfloor \\frac{4}{3} \\right\\rfloor = 5$.\nHence $r = v_3(N) = 6 + 4 - 5 = 5$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Integers $a$ and $b$ are randomly chosen without replacement from the set of integers with absolute value not exceeding $10$. What is the probability that the polynomial $x^3 + ax^2 + bx + 6$ has $3$ distinct integer roots? Express your answer as a common fraction.\n\nA. $\\frac{1}{240}$\nB. $\\frac{1}{221}$\nC. $\\frac{1}{105}$\nD. $\\frac{1}{84}$\nE. $\\frac{1}{63}$',
          answer: 'C. $\\frac{1}{105}$',
          principle: 'Use Vieta\'s formulas to find all triples of distinct integers whose product is $-6$, then check that the resulting $(a, b)$ satisfy $|a|, |b| \\le 10$ and $a \\ne b$.',
          solution:
            'The set $S = \\{-10, -9, \\dots, 10\\}$ contains $21$ integers, so choosing ordered pairs $(a, b)$ without replacement yields $21 \\cdot 20 = 420$ equally likely pairs.\nIf $x^3 + ax^2 + bx + 6$ has three distinct integer roots $p, q, r$, Vieta\'s formulas give\n$$pqr = -6, \\qquad a = -(p + q + r), \\qquad b = pq + qr + rp.$$\nSince $|p||q||r| = 6$, the unordered triple of absolute values $\\{|p|, |q|, |r|\\}$ must be either $\\{1, 2, 3\\}$ or $\\{1, 1, 6\\}$:\n1. From $\\{1, 2, 3\\}$ with an odd number of minus signs ($pqr = -6$):\n   - $\\{1, 2, -3\\} \\implies (a, b) = (0, -7)$ (valid: $a, b \\in S$, $a \\ne b$),\n   - $\\{1, -2, 3\\} \\implies (a, b) = (-2, -5)$ (valid),\n   - $\\{-1, 2, 3\\} \\implies (a, b) = (-4, 1)$ (valid),\n   - $\\{-1, -2, -3\\} \\implies (a, b) = (6, 11)$ (invalid since $11 > 10$).\n2. From $\\{1, 1, 6\\}$ with distinct roots, the two $1$\'s must have opposite signs, forcing $\\{1, -1, 6\\}$ so that $pqr = -6$:\n   - $\\{1, -1, 6\\} \\implies (a, b) = (-6, -1)$ (valid).\n\nAll $4$ valid pairs $(a, b)$ are distinct, so the probability is\n$$\\frac{4}{420} = \\frac{1}{105}.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'The Fibonacci numbers are defined by $F_1 = 1$, $F_2 = 1$, and $F_n = F_{n-1} + F_{n-2}$ for $n \\ge 3$. What is\n$$\\frac{F_2}{F_1} + \\frac{F_4}{F_2} + \\frac{F_6}{F_3} + \\cdots + \\frac{F_{20}}{F_{10}}?$$\n\nA. $318$\nB. $319$\nC. $320$\nD. $321$\nE. $322$',
          answer: 'B. $319$',
          principle: 'Use the addition identity $F_{2k} = F_k(F_{k-1} + F_{k+1})$ to remove denominators, then telescope the resulting sum via $F_i = F_{i+2} - F_{i+1}$.',
          solution:
            'Extend the sequence by setting $F_0 = 0$ so that $F_2 = F_1 + F_0$ holds. For any fixed $k \\ge 1$, the identity\n$$F_{k+j} = F_{k-1}F_j + F_k F_{j+1}$$\nholds at $j = 0$ ($F_k = F_k$) and $j = 1$ ($F_{k+1} = F_{k-1} + F_k$); since both sides satisfy the Fibonacci recurrence in $j$, it holds for all $j \\ge 0$ by induction.\nSetting $j = k$ gives $F_{2k} = F_k(F_{k-1} + F_{k+1})$, so $\\frac{F_{2k}}{F_k} = F_{k-1} + F_{k+1}$. Summing from $k = 1$ to $10$ and telescoping with $F_i = F_{i+2} - F_{i+1}$:\n$$\\sum_{k=1}^{10} \\frac{F_{2k}}{F_k} = \\sum_{i=0}^{9} F_i + \\sum_{i=2}^{11} F_i = (F_{11} - F_1) + (F_{13} - F_3).$$\nComputing the Fibonacci numbers up to $F_{13}$ ($1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233$) gives\n$$(89 - 1) + (233 - 2) = 88 + 231 = 319.$$',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Suppose $A$, $B$, and $C$ are points in the plane with $AB = 40$ and $AC = 42$, and let $x$ be the length of the line segment from $A$ to the midpoint of $\\overline{BC}$. Define a function $f$ by letting $f(x)$ be the area of $\\triangle ABC$. Then the domain of $f$ is an open interval $(p, q)$, and the maximum value $r$ of $f(x)$ occurs at $x = s$. What is $p + q + r + s$?\n\nA. $909$\nB. $910$\nC. $911$\nD. $912$\nE. $913$',
          answer: 'C. $911$',
          principle: 'Complete $\\triangle ABC$ to parallelogram $ABDC$ so the median doubles to side $AD = 2x$ of $\\triangle ABD$, which has sides $40$, $42$, and $2x$ and the same area as $\\triangle ABC$.',
          solution:
            'Complete $\\triangle ABC$ to parallelogram $ABDC$, whose diagonals $\\overline{BC}$ and $\\overline{AD}$ bisect each other at $M$. Thus $AD = 2x$, $BD = AC = 42$, and $\\operatorname{Area}(\\triangle ABC) = \\frac{1}{2}\\operatorname{Area}(ABDC) = \\operatorname{Area}(\\triangle ABD)$.\n1. **Domain $(p, q)$:** A non-degenerate triangle $\\triangle ABC$ corresponds to a non-degenerate triangle $\\triangle ABD$ with side lengths $40, 42$, and $2x$. By the triangle inequality,\n$$42 - 40 < 2x < 42 + 40 \\iff 2 < 2x < 82 \\iff 1 < x < 41,$$\nso $(p, q) = (1, 41)$.\n2. **Maximum area $r$ and location $s$:** In $\\triangle ABD$, the sides $AB = 40$ and $BD = 42$ are fixed, so\n$$f(x) = \\operatorname{Area}(\\triangle ABD) = \\frac{1}{2} \\cdot 40 \\cdot 42 \\sin(\\angle ABD) = 840\\sin(\\angle ABD).$$\nThe maximum occurs when $\\angle ABD = 90^\\circ$, giving $r = 840$. At that configuration, the Pythagorean Theorem in $\\triangle ABD$ gives\n$$(2s)^2 = 40^2 + 42^2 \\implies s^2 = 20^2 + 21^2 = 400 + 441 = 841 = 29^2 \\implies s = 29.$$\nHence $p + q + r + s = 1 + 41 + 840 + 29 = 911$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'The measures of the smallest angles of three different right triangles sum to $90^\\circ$. All three triangles have side lengths that are primitive Pythagorean triples. Two of them are $3$-$4$-$5$ and $5$-$12$-$13$. What is the perimeter of the third triangle?\n\nA. $40$\nB. $126$\nC. $154$\nD. $176$\nE. $208$',
          answer: 'C. $154$',
          principle: 'Use the tangent addition formula $\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$ and $\\tan(90^\\circ - \\theta) = \\cot\\theta$.',
          solution:
            'Let $\\alpha, \\beta, \\gamma$ be the smallest acute angles of the three triangles, opposite their shortest legs. Then $\\tan\\alpha = \\frac{3}{4}$ and $\\tan\\beta = \\frac{5}{12}$. Since $\\alpha, \\beta < 45^\\circ$, we have $\\alpha + \\beta < 90^\\circ$ and $\\gamma = 90^\\circ - (\\alpha + \\beta)$.\nApplying the tangent addition formula:\n$$\\tan(\\alpha + \\beta) = \\frac{\\frac{3}{4} + \\frac{5}{12}}{1 - \\frac{3}{4} \\cdot \\frac{5}{12}} = \\frac{\\frac{14}{12}}{1 - \\frac{5}{16}} = \\frac{\\frac{7}{6}}{\\frac{11}{16}} = \\frac{56}{33}.$$\nTherefore,\n$$\\tan\\gamma = \\tan\\bigl(90^\\circ - (\\alpha + \\beta)\\bigr) = \\cot(\\alpha + \\beta) = \\frac{33}{56}.$$\nSince $\\gcd(33, 56) = 1$, a primitive Pythagorean right triangle with smallest angle $\\gamma$ has legs $33$ and $56$, and hypotenuse\n$$\\sqrt{33^2 + 56^2} = \\sqrt{1089 + 3136} = \\sqrt{4225} = 65.$$\nIts perimeter is $33 + 56 + 65 = 154$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Let $\\triangle ABC$ be a triangle with integer side lengths and the property that $\\angle B = 2\\angle A$. What is the least possible perimeter of such a triangle?\n\nA. $13$\nB. $14$\nC. $15$\nD. $16$\nE. $17$',
          answer: 'C. $15$',
          principle: 'Draw the angle bisector of $\\angle B$ to derive $b^2 = a(a + c)$ via similarity and the Angle Bisector Theorem, then bound $a$ in terms of $b$ and test small integers.',
          solution:
            'Let $a = BC$, $b = CA$, and $c = AB$ be positive integers. Draw the angle bisector of $\\angle B$, meeting $\\overline{AC}$ at $D$. Then $\\angle DBC = \\angle DBA = \\angle A$, so $\\triangle BDC \\sim \\triangle ABC$ (by AA similarity). Thus\n$$\\frac{DC}{a} = \\frac{a}{b} \\implies DC = \\frac{a^2}{b}.$$\nBy the Angle Bisector Theorem, $\\frac{AD}{DC} = \\frac{c}{a}$, so $AD = \\frac{ac}{b}$. Since $AD + DC = b$,\n$$\\frac{ac + a^2}{b} = b \\implies b^2 = a(a + c).$$\nBecause $\\angle B = 2\\angle A > \\angle A$, we have $b > a$. Applying the triangle inequality $c < a + b$ gives\n$$b^2 = a(a + c) < a(2a + b) \\implies (b - 2a)(b + a) < 0 \\implies b < 2a,$$\nso $\\frac{b}{2} < a < b$ and $a \\mid b^2$. The perimeter is $P = a + b + c = b + \\frac{b^2}{a} > 2b$.\nCheck small values of $b \\ge 2$:\n- If $b$ is prime, $b^2$ has only divisors $1, b, b^2$, none in $\\left(\\frac{b}{2}, b\\right)$.\n- If $b = 4$, the divisors of $16$ are $1, 2, 4, 8, 16$, none in $(2, 4)$.\n- If $b = 6$, the divisor $a = 4$ of $36$ satisfies $3 < 4 < 6$, giving $c = \\frac{36}{4} - 4 = 5$ and perimeter $4 + 6 + 5 = 15$. (For $b \\ge 7$, $b = 7$ is prime and $b \\ge 8$ gives $P > 16$.)\nConfirm $(a, b, c) = (4, 6, 5)$ via the Law of Cosines: $\\cos A = \\frac{6^2 + 5^2 - 4^2}{60} = \\frac{3}{4}$ and $\\cos B = \\frac{4^2 + 5^2 - 6^2}{40} = \\frac{1}{8} = 2\\left(\\frac{3}{4}\\right)^2 - 1 = \\cos(2A)$, so $\\angle B = 2\\angle A$. Thus the least perimeter is $15$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'A right pyramid has regular octagon $ABCDEFGH$ with side length $1$ as its base and apex $V$. Segments $\\overline{AV}$ and $\\overline{DV}$ are perpendicular. What is the square of the height of the pyramid?\n\nA. $1$\nB. $\\frac{1 + \\sqrt{2}}{2}$\nC. $\\sqrt{2}$\nD. $\\frac{3}{2}$\nE. $\\frac{2 + \\sqrt{2}}{3}$',
          answer: 'B. $\\frac{1 + \\sqrt{2}}{2}$',
          principle: 'Relate $AD^2 = 2(h^2 + R^2)$ via right triangle $AVD$, and find $AD$ and the circumradius $R$ from the $45^\\circ$-$45^\\circ$-$90^\\circ$ geometry of the regular octagon.',
          solution:
            'Let $O$ be the center of regular octagon $ABCDEFGH$, $R = OA = OB$ its circumradius, and $h = VO$ the pyramid\'s height. Since the pyramid is right, every lateral edge has length $L$ with $L^2 = h^2 + R^2$. Because $\\angle AVD = 90^\\circ$, $\\triangle AVD$ is an isosceles right triangle, so\n$$AD^2 = AV^2 + DV^2 = 2L^2 = 2(h^2 + R^2).$$\nNow compute $AD$ and $R^2$ directly from the regular octagon of side length $1$:\n- Each interior angle of a regular octagon is $135^\\circ$, so $ABCD$ is an isosceles trapezoid with $AB = BC = CD = 1$ and $\\angle BAD = \\angle CDA = 45^\\circ$. Dropping perpendiculars from $B$ and $C$ to $\\overline{AD}$ creates two $45^\\circ$-$45^\\circ$-$90^\\circ$ triangles of leg $\\frac{\\sqrt{2}}{2}$ and a rectangle of width $1$, giving\n$$AD = 1 + 2 \\cdot \\frac{\\sqrt{2}}{2} = 1 + \\sqrt{2}.$$\n- The apothem (distance from $O$ to midpoint $M$ of $\\overline{BC}$) is half the distance between opposite parallel sides $\\overline{BC}$ and $\\overline{FG}$, which equals $\\frac{AD}{2} = \\frac{1 + \\sqrt{2}}{2}$. By the Pythagorean Theorem in right triangle $OMB$,\n$$R^2 = OM^2 + MB^2 = \\left(\\frac{1 + \\sqrt{2}}{2}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 = \\frac{3 + 2\\sqrt{2} + 1}{4} = \\frac{2 + \\sqrt{2}}{2}.$$\nSubstituting $AD^2 = (1 + \\sqrt{2})^2 = 3 + 2\\sqrt{2}$ and $R^2$ into $2h^2 = AD^2 - 2R^2$ gives\n$$h^2 = \\frac{3 + 2\\sqrt{2}}{2} - \\frac{2 + \\sqrt{2}}{2} = \\frac{1 + \\sqrt{2}}{2}.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'What is the number of ordered triples $(a, b, c)$ of positive integers, with $a \\le b \\le c \\le 9$, such that there exists a (non-degenerate) triangle $\\triangle ABC$ with an integer inradius for which $a$, $b$, and $c$ are the lengths of the altitudes from $A$ to $\\overline{BC}$, $B$ to $\\overline{AC}$, and $C$ to $\\overline{AB}$, respectively? (Recall that the inradius of a triangle is the radius of the largest possible circle that can be inscribed in the triangle.)\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. $6$',
          answer: 'B. $3$',
          principle: 'Express $\\frac{1}{r} = \\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c}$ by writing the side lengths in terms of area and altitudes, then combine with the triangle inequality $\\frac{1}{a} < \\frac{1}{b} + \\frac{1}{c}$ to bound $r$ and $a$.',
          solution:
            'Let $K$ be the area, $s$ the semiperimeter, and $r \\in \\mathbb{Z}^+$ the inradius of $\\triangle ABC$. Its three sides have lengths $\\frac{2K}{a}$, $\\frac{2K}{b}$, and $\\frac{2K}{c}$. Using $2K = 2rs = r\\left(\\frac{2K}{a} + \\frac{2K}{b} + \\frac{2K}{c}\\right)$ and dividing by $2K$ gives\n$$\\frac{1}{r} = \\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c}.$$\nSince $a \\le b \\le c \\le 9$, we have $\\frac{1}{r} \\ge \\frac{3}{9} = \\frac{1}{3}$, so $r \\in \\{1, 2, 3\\}$.\nMoreover, $\\frac{1}{r} \\le \\frac{3}{a}$ implies $a \\le 3r$, while the triangle inequality on the longest side $\\frac{2K}{a}$ requires $\\frac{1}{a} < \\frac{1}{b} + \\frac{1}{c} = \\frac{1}{r} - \\frac{1}{a}$, so $a > 2r$. Thus $2r < a \\le 3r$:\n- **Case $r = 1$:** $2 < a \\le 3 \\implies a = 3$, forcing $\\frac{1}{b} + \\frac{1}{c} = \\frac{2}{3}$. Since $b, c \\ge 3$, equality holds only for $(a, b, c) = (3, 3, 3)$.\n- **Case $r = 2$:** $4 < a \\le 6 \\implies a \\in \\{5, 6\\}$.\n  - If $a = 6$, then $\\frac{1}{b} + \\frac{1}{c} = \\frac{1}{3}$ with $b, c \\ge 6$ forces $(a, b, c) = (6, 6, 6)$.\n  - If $a = 5$, then $\\frac{1}{b} + \\frac{1}{c} = \\frac{3}{10}$ with $5 \\le b \\le c$ implies $\\frac{2}{b} \\ge \\frac{3}{10}$, so $b \\in \\{5, 6\\}$. Here $b = 5 \\implies c = 10 > 9$ and $b = 6 \\implies c = \\frac{15}{2} \\notin \\mathbb{Z}$, yielding no valid triple.\n- **Case $r = 3$:** Since $a \\le b \\le c \\le 9$ and $\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} = \\frac{1}{3} = \\frac{1}{9} + \\frac{1}{9} + \\frac{1}{9}$, every term equals $\\frac{1}{9}$, forcing $(a, b, c) = (9, 9, 9)$.\n\nEach of $(3, 3, 3)$, $(6, 6, 6)$, and $(9, 9, 9)$ is realized by an equilateral triangle, so there are $3$ such triples.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Pablo will decorate each of $6$ identical white balls with either a striped or a dotted pattern, using either red or blue paint. He will decide on the color and pattern for each ball by flipping a fair coin for each of the $12$ decisions he must make. After the paint dries, he will place the $6$ balls in an urn. Frida will randomly select one ball from the urn and note its color and pattern. The events “the ball Frida selects is red” and “the ball Frida selects is striped” may or may not be independent, depending on the outcome of Pablo’s coin flips. The probability that these two events are independent can be written as $\\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. What is $m$? (Recall that two events $A$ and $B$ are independent if $P(A \\text{ and } B) = P(A)\\cdot P(B)$.)\n\nA. $243$\nB. $245$\nC. $247$\nD. $249$\nE. $251$',
          answer: 'A. $243$',
          principle: 'Model the $12$ coin flips as $4^6 = 4096$ equally likely sequences of the four ball types, translate independence into $6k = RS$, and count boundary ($R$ or $S \\in \\{0, 6\\}$) and interior ($1 \\le R, S \\le 5$) cases.',
          solution:
            'Pablo\'s $12$ fair coin flips yield $2^{12} = 4^6 = 4096$ equally likely outcomes, where each of the $6$ balls independently receives one of four equally likely types: red-striped, red-dotted, blue-striped, or blue-dotted.\nLet $k$ be the number of red-striped balls, $R$ the total number of red balls, and $S$ the total number of striped balls. When Frida picks one ball uniformly at random,\n$$P(\\text{red}) = \\frac{R}{6}, \\qquad P(\\text{striped}) = \\frac{S}{6}, \\qquad P(\\text{red and striped}) = \\frac{k}{6}.$$\nThese events are independent if and only if\n$$\\frac{k}{6} = \\frac{R}{6} \\cdot \\frac{S}{6} \\iff 6k = RS.$$\nNotice that whenever $0 \\le R, S \\le 6$ and $6 \\mid RS$, setting $k = \\frac{RS}{6}$ automatically makes all four type counts $(k, R-k, S-k, 6-R-S+k)$ nonnegative, because $6 - R - S + \\frac{RS}{6} = \\frac{(6-R)(6-S)}{6} \\ge 0$ and $k \\le \\min(R, S)$.\nCount the favorable coin-flip outcomes:\n- **Boundary cases ($R \\in \\{0, 6\\}$ or $S \\in \\{0, 6\\}$):** Each of the $4$ conditions $R=0$, $R=6$, $S=0$, $S=6$ fixes one attribute on all $6$ balls and leaves $2^6 = 64$ choices for the other attribute. The $4$ pairwise intersections $(R, S) \\in \\{(0,0), (0,6), (6,0), (6,6)\\}$ are each counted twice, giving\n$$4 \\cdot 64 - 4 = 252$$\noutcomes.\n- **Interior cases ($1 \\le R, S \\le 5$ with $6 \\mid RS$):** One of $R, S$ must be $3$ and the other must be $2$ or $4$, giving the $4$ pairs $(R, S) \\in \\{(3, 2), (2, 3), (3, 4), (4, 3)\\}$. In each case $k = \\frac{RS}{6}$ produces four type counts that are a permutation of $(1, 1, 2, 2)$, so each pair corresponds to\n$$\\frac{6!}{1!\\,1!\\,2!\\,2!} = 180$$\noutcomes, contributing $4 \\cdot 180 = 720$ outcomes.\n\nIn total, $252 + 720 = 972$ outcomes make the events independent, so the probability is\n$$\\frac{972}{4096} = \\frac{243}{1024}.$$\nSince $\\gcd(243, 1024) = 1$, we have $m = 243$.',
          rubric: OK
        }
      ]
    }
  ]
};
