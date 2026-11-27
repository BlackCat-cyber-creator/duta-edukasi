/**
 * Paket Soal Terstruktur: AMC 10A — 2015 (16th Annual American Mathematics Contest 10 A)
 * Sumber: 2015-AMC-10-A-Problems.pdf (Mathematical Association of America, February 3, 2015).
 * Seluruh 25 soal pilihan ganda disusun lengkap dalam bahasa Inggris sesuai naskah sumber.
 * Gambar soal 3 dan soal 14 dipotong bersih ke public/papers/amc-10a-2015/.
 */
export default {
  id: 'amc-10a-2015',
  slug: 'amc-10a-2015',
  subject: 'olimpiade-mat',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 10A 2015: 25 complete competition problems in algebra, geometry, counting, and number theory',
  relatedChapterIds: [
    'sma10-bab2-barisan-deret',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma12-bab3-kaidah-pencacahan'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 10',
  title: 'AMC 10A \u2014 2015',
  totalMarks: 150,
  instructions:
    'Attempt all 25 multiple-choice questions (original time allowed: 75 minutes; no calculators). Each problem has five choices (A, B, C, D, and E) with exactly one correct answer. In the official AMC 10 contest, a correct answer scores 6 points, an unanswered problem scores 1.5 points, and an incorrect answer scores 0 points; in this practice set, each problem is worth 6 marks (150 marks total). Figures are not necessarily drawn to scale.',
  source: {
    org: 'AMC 10',
    file: '2015-AMC-10-A-Problems.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 150,
      stem: 'Choose the single correct answer (A, B, C, D, or E) for each of the 25 problems (6 marks each).',
      parts: [
        {
          label: '1',
          marks: 6,
          prompt:
            'What is the value of $(2^0 - 1 + 5^2 + 0)^{-1} \\times 5$?\n\nA. $-125$\nB. $-120$\nC. $\\frac{1}{5}$\nD. $\\frac{5}{24}$\nE. $25$',
          answer: 'C. $\\frac{1}{5}$',
          principle: 'Apply order of operations and exponent rules ($a^0 = 1$ for $a \\neq 0$, and $x^{-1} = \\frac{1}{x}$).',
          solution:
            'Evaluate inside the parentheses first:\n$$2^0 - 1 + 5^2 + 0 = 1 - 1 + 25 + 0 = 25.$$\nTaking the reciprocal and multiplying by $5$ gives\n$$25^{-1} \\times 5 = \\frac{1}{25} \\times 5 = \\frac{1}{5}.$$',
          rubric: [
            { code: 'M2', text: 'Evaluates $2^0 = 1$ and $5^2 = 25$ to simplify the expression inside parentheses to $25$.' },
            { code: 'M2', text: 'Applies the negative exponent $25^{-1} = \\frac{1}{25}$ and multiplies by $5$.' },
            { code: 'A2', text: 'Obtains $\\frac{1}{5}$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 6,
          prompt:
            'A box contains a collection of triangular and square tiles. There are $25$ tiles in the box, containing $84$ edges total. How many square tiles are there in the box?\n\nA. $3$\nB. $5$\nC. $7$\nD. $9$\nE. $11$',
          answer: 'D. $9$',
          principle: 'Model the counts of tiles and total edges as a system of two linear equations.',
          solution:
            'Let $t$ be the number of triangular tiles ($3$ edges each) and $s$ be the number of square tiles ($4$ edges each). Then\n$$t + s = 25,$$\n$$3t + 4s = 84.$$\nMultiply the first equation by $3$ to get $3t + 3s = 75$, and subtract from the second equation:\n$$(3t + 4s) - (3t + 3s) = 84 - 75 \\implies s = 9.$$\nCheck: $9$ squares and $16$ triangles give $9 + 16 = 25$ tiles and $4(9) + 3(16) = 36 + 48 = 84$ edges.',
          rubric: [
            { code: 'M2', text: 'Sets up the linear system $t + s = 25$ and $3t + 4s = 84$.' },
            { code: 'M2', text: 'Eliminates $t$ by subtracting $3(t + s) = 75$ from $3t + 4s = 84$.' },
            { code: 'A2', text: 'Finds $s = 9$ square tiles, option D.' }
          ]
        },
        {
          label: '3',
          marks: 6,
          prompt:
            'Ann made a $3$-step staircase using $18$ toothpicks as shown in the figure. How many toothpicks does she need to add to complete a $5$-step staircase?\n\nA. $9$\nB. $18$\nC. $20$\nD. $22$\nE. $24$',
          figures: [
            {
              src: '/papers/amc-10a-2015/fig-3.webp',
              alt: 'Three-step staircase diagram formed by unit squares arranged with three squares on the bottom row, two in the middle, and one on top.',
              caption: 'Three-step toothpick staircase diagram for Problem 3.'
            }
          ],
          answer: 'D. $22$',
          principle: 'Count horizontal and vertical toothpicks separately by row/column, or count how many new unit squares and edges each additional step requires.',
          solution:
            'For an $n$-step staircase made of $1 + 2 + \\dots + n$ unit squares:\n- Horizontal toothpicks: the bottom edge has $n$, and the tops of the $n$ rows have $n, n-1, \\dots, 1$, giving $n + \\frac{n(n+1)}{2}$.\n- Vertical toothpicks: by symmetry, there are also $n + \\frac{n(n+1)}{2}$.\nSo the total number of toothpicks for an $n$-step staircase is\n$$T(n) = 2\\left(n + \\frac{n(n+1)}{2}\\right) = n(n + 3).$$\nCheck $n = 3$: $3(3 + 3) = 18$, matching the problem.\nFor $n = 5$: $T(5) = 5(5 + 3) = 40$.\nTherefore, Ann needs to add $40 - 18 = 22$ toothpicks.',
          rubric: [
            { code: 'M2', text: 'Counts horizontal and vertical toothpicks systematically for a $5$-step staircase.' },
            { code: 'M2', text: 'Computes the total toothpicks for $5$ steps as $2(5 + 15) = 40$.' },
            { code: 'A2', text: 'Subtracts $40 - 18 = 22$, option D.' }
          ]
        },
        {
          label: '4',
          marks: 6,
          prompt:
            'Pablo, Sofia, and Mia got some candy eggs at a party. Pablo had three times as many eggs as Sofia, and Sofia had twice as many eggs as Mia. Pablo decides to give some of his eggs to Sofia and Mia so that all three will have the same number of eggs. What fraction of his eggs should Pablo give to Sofia?\n\nA. $\\frac{1}{12}$\nB. $\\frac{1}{6}$\nC. $\\frac{1}{4}$\nD. $\\frac{1}{3}$\nE. $\\frac{1}{2}$',
          answer: 'B. $\\frac{1}{6}$',
          principle: 'Express all quantities in terms of a single unit (Mia\'s share) and find the equalized average.',
          solution:
            'Let Mia have $m$ eggs. Then Sofia has $2m$ eggs, and Pablo has $3(2m) = 6m$ eggs.\nThe total number of eggs is $m + 2m + 6m = 9m$, so when all three have the same number of eggs, each has $\\frac{9m}{3} = 3m$ eggs.\nTo reach $3m$ eggs, Sofia needs $3m - 2m = m$ additional eggs from Pablo.\nAs a fraction of Pablo\'s original $6m$ eggs, this is\n$$\\frac{m}{6m} = \\frac{1}{6}.$$',
          rubric: [
            { code: 'M2', text: 'Expresses the counts as $m$, $2m$, and $6m$ for Mia, Sofia, and Pablo.' },
            { code: 'M2', text: 'Finds the equal share $3m$ and determines Sofia needs $m$ eggs from Pablo.' },
            { code: 'A2', text: 'Computes $\\frac{m}{6m} = \\frac{1}{6}$, option B.' }
          ]
        },
        {
          label: '5',
          marks: 6,
          prompt:
            'Mr. Patrick teaches math to $15$ students. He was grading tests and found that when he graded everyone\'s test except Payton\'s, the average grade for the class was $80$. After he graded Payton\'s test, the class average became $81$. What was Payton\'s score on the test?\n\nA. $81$\nB. $85$\nC. $91$\nD. $94$\nE. $95$',
          answer: 'E. $95$',
          principle: 'Relate the arithmetic mean to the total sum of scores: $\\text{sum} = \\text{count} \\times \\text{mean}$.',
          solution:
            'Before Payton\'s test was graded, $14$ students had an average of $80$, so their total score was\n$$14 \\times 80 = 1120.$$\nAfter Payton\'s test was included, all $15$ students averaged $81$, so the new total score was\n$$15 \\times 81 = 1215.$$\nPayton\'s score is the difference between the two totals:\n$$1215 - 1120 = 95.$$\n(Alternatively, Payton brought the $14$ other scores up by $1$ point each while keeping her own at $81$, giving $81 + 14 = 95$.)',
          rubric: [
            { code: 'M2', text: 'Computes the sum of the first $14$ scores ($14 \\times 80 = 1120$) and all $15$ scores ($15 \\times 81 = 1215$).' },
            { code: 'M2', text: 'Subtracts the two sums to isolate Payton\'s score.' },
            { code: 'A2', text: 'Obtains $95$, option E.' }
          ]
        },
        {
          label: '6',
          marks: 6,
          prompt:
            'The sum of two positive numbers is $5$ times their difference. What is the ratio of the larger number to the smaller?\n\nA. $\\frac{5}{4}$\nB. $\\frac{3}{2}$\nC. $\\frac{9}{5}$\nD. $2$\nE. $\\frac{5}{2}$',
          answer: 'B. $\\frac{3}{2}$',
          principle: 'Translate the verbal relationship into a homogeneous linear equation and solve for the ratio.',
          solution:
            'Let the larger number be $a$ and the smaller number be $b$ ($a > b > 0$). The condition states\n$$a + b = 5(a - b).$$\nExpanding and collecting like terms gives\n$$a + b = 5a - 5b \\implies 6b = 4a \\implies \\frac{a}{b} = \\frac{6}{4} = \\frac{3}{2}.$$',
          rubric: [
            { code: 'M2', text: 'Writes the equation $a + b = 5(a - b)$ with $a > b > 0$.' },
            { code: 'M2', text: 'Rearranges to $4a = 6b$.' },
            { code: 'A2', text: 'Finds $\\frac{a}{b} = \\frac{3}{2}$, option B.' }
          ]
        },
        {
          label: '7',
          marks: 6,
          prompt:
            'How many terms are there in the arithmetic sequence $13, 16, 19, \\ldots, 70, 73$?\n\nA. $20$\nB. $21$\nC. $24$\nD. $60$\nE. $61$',
          answer: 'B. $21$',
          principle: 'Use the $n$-th term formula for an arithmetic sequence: $a_n = a_1 + (n - 1)d$.',
          solution:
            'The first term is $a_1 = 13$, the common difference is $d = 16 - 13 = 3$, and the last term is $a_n = 73$. Using $a_n = a_1 + (n - 1)d$:\n$$73 = 13 + 3(n - 1) \\implies 60 = 3(n - 1) \\implies n - 1 = 20 \\implies n = 21.$$',
          rubric: [
            { code: 'M2', text: 'Identifies $a_1 = 13$, common difference $d = 3$, and $a_n = 73$.' },
            { code: 'M2', text: 'Solves $13 + 3(n - 1) = 73$ for $n$.' },
            { code: 'A2', text: 'Obtains $21$ terms, option B.' }
          ]
        },
        {
          label: '8',
          marks: 6,
          prompt:
            'Two years ago Pete was three times as old as his cousin Claire. Two years before that, Pete was four times as old as Claire. In how many years will the ratio of their ages be $2 : 1$?\n\nA. $2$\nB. $4$\nC. $5$\nD. $6$\nE. $8$',
          answer: 'B. $4$',
          principle: 'Set up equations for current ages using constant age difference, then solve for the future time.',
          solution:
            'Let Pete\'s and Claire\'s current ages be $P$ and $C$.\nTwo years ago: $P - 2 = 3(C - 2) = 3C - 6$, so $P = 3C - 4$.\nFour years ago: $P - 4 = 4(C - 4) = 4C - 16$, so $P = 4C - 12$.\nEquating the two expressions for $P$:\n$$3C - 4 = 4C - 12 \\implies C = 8,$$\nand hence $P = 3(8) - 4 = 20$.\nLet $t$ be the number of years from now when Pete is twice as old as Claire:\n$$20 + t = 2(8 + t) = 16 + 2t \\implies t = 4.$$\nCheck: in $4$ years, Pete will be $24$ and Claire will be $12$, a $2:1$ ratio.',
          rubric: [
            { code: 'M2', text: 'Translates both past age conditions into $P - 2 = 3(C - 2)$ and $P - 4 = 4(C - 4)$.' },
            { code: 'M2', text: 'Solves for current ages $C = 8$ and $P = 20$, and sets up $20 + t = 2(8 + t)$.' },
            { code: 'A2', text: 'Finds $t = 4$ years, option B.' }
          ]
        },
        {
          label: '9',
          marks: 6,
          prompt:
            'Two right circular cylinders have the same volume. The radius of the second cylinder is $10\\%$ more than the radius of the first. What is the relationship between the heights of the two cylinders?\n\nA. The second height is $10\\%$ less than the first.\nB. The first height is $10\\%$ more than the second.\nC. The second height is $21\\%$ less than the first.\nD. The first height is $21\\%$ more than the second.\nE. The second height is $80\\%$ of the first.',
          answer: 'D. The first height is $21\\%$ more than the second.',
          principle: 'Use the cylinder volume formula $V = \\pi r^2 h$: equal volumes imply $h$ is inversely proportional to $r^2$.',
          solution:
            'Let the first cylinder have radius $r_1$ and height $h_1$, and the second have radius $r_2 = 1.1 r_1$ and height $h_2$. Since their volumes are equal:\n$$\\pi r_1^2 h_1 = \\pi r_2^2 h_2 = \\pi (1.1 r_1)^2 h_2 = 1.21 \\pi r_1^2 h_2.$$\nDividing by $\\pi r_1^2$ yields\n$$h_1 = 1.21 h_2.$$\nThis means $h_1$ is $21\\%$ more than $h_2$ (whereas $h_2 = \\frac{1}{1.21}h_1 \\approx 0.8264 h_1$, which is about $17.36\\%$ less than $h_1$, not $21\\%$ less).',
          rubric: [
            { code: 'M2', text: 'Sets up $\\pi r_1^2 h_1 = \\pi (1.1 r_1)^2 h_2$ from equal volumes.' },
            { code: 'M2', text: 'Simplifies to $h_1 = 1.21 h_2$.' },
            { code: 'A2', text: 'Interprets $h_1 = 1.21 h_2$ correctly as the first height being $21\\%$ more than the second, option D.' }
          ]
        },
        {
          label: '10',
          marks: 6,
          prompt:
            'How many rearrangements of $abcd$ are there in which no two adjacent letters are also adjacent letters in the alphabet? For example, no such rearrangements could include either $ab$ or $ba$.\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'C. $2$',
          principle: 'Use casework on the first letter, noting that $b$ and $c$ each have two forbidden neighbors while $a$ and $d$ each have only one.',
          solution:
            'Consider the possible first letters of a valid rearrangement of $a, b, c, d$:\n- If it starts with $a$: the second letter cannot be $b$, so it must be $c$ or $d$.\n  - $ac\\ldots$: the third letter cannot be $b$ or $d$ (both are adjacent to $c$), so no continuation exists.\n  - $ad\\ldots$: the third letter cannot be $c$, so it must be $b$, leaving $c$ last ($adbc$), which fails because $bc$ is forbidden.\n- If it starts with $b$: the second letter cannot be $a$ or $c$, so it must be $d$. From $bd\\ldots$, the third letter cannot be $c$, so it must be $a$, leaving $c$ last: $bdac$ (valid: $b$-$d$, $d$-$a$, $a$-$c$ are all non-adjacent).\n- If it starts with $c$: by symmetry with $b$ (swapping $a \\leftrightarrow d$ and $b \\leftrightarrow c$), the second letter must be $a$, third must be $d$, fourth is $b$: $cadb$ (valid).\n- If it starts with $d$: by symmetry with starting with $a$, no valid rearrangement exists.\n\nThus there are exactly $2$ valid rearrangements: $bdac$ and $cadb$.',
          rubric: [
            { code: 'M2', text: 'Analyzes valid neighbors for $a, b, c, d$ (noting $b$ can only neighbor $d$, and $c$ can only neighbor $a$).' },
            { code: 'M2', text: 'Constructs all candidate permutations by casework on the starting letter.' },
            { code: 'A2', text: 'Identifies the $2$ valid rearrangements ($bdac$ and $cadb$), option C.' }
          ]
        },
        {
          label: '11',
          marks: 6,
          prompt:
            'The ratio of the length to the width of a rectangle is $4 : 3$. If the rectangle has diagonal of length $d$, then the area may be expressed as $kd^2$ for some constant $k$. What is $k$?\n\nA. $\\frac{2}{7}$\nB. $\\frac{3}{7}$\nC. $\\frac{12}{25}$\nD. $\\frac{16}{25}$\nE. $\\frac{3}{4}$',
          answer: 'C. $\\frac{12}{25}$',
          principle: 'Parameterize the rectangle sides by $4x$ and $3x$ and apply the Pythagorean theorem to express the area in terms of $d^2$.',
          solution:
            'Let the length and width of the rectangle be $4x$ and $3x$ ($x > 0$). By the Pythagorean theorem, the diagonal has length\n$$d = \\sqrt{(4x)^2 + (3x)^2} = 5x \\implies x^2 = \\frac{d^2}{25}.$$\nThe area of the rectangle is\n$$\\text{Area} = (4x)(3x) = 12x^2 = 12 \\cdot \\frac{d^2}{25} = \\frac{12}{25} d^2.$$\nHence $k = \\frac{12}{25}$.',
          rubric: [
            { code: 'M2', text: 'Sets sides as $4x$ and $3x$ and finds $d = 5x$ via the Pythagorean theorem.' },
            { code: 'M2', text: 'Substitutes $x^2 = \\frac{d^2}{25}$ into $\\text{Area} = 12x^2$.' },
            { code: 'A2', text: 'Obtains $k = \\frac{12}{25}$, option C.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'Points $(\\sqrt{\\pi}, a)$ and $(\\sqrt{\\pi}, b)$ are distinct points on the graph of $y^2 + x^4 = 2x^2 y + 1$. What is $|a - b|$?\n\nA. $1$\nB. $\\frac{\\pi}{2}$\nC. $2$\nD. $\\sqrt{1 + \\pi}$\nE. $1 + \\sqrt{\\pi}$',
          answer: 'C. $2$',
          principle: 'Complete the square / recognize a perfect square trinomial by moving $2x^2 y$ to the left side.',
          solution:
            'Rearrange the equation:\n$$y^2 - 2x^2 y + x^4 = 1 \\iff (y - x^2)^2 = 1.$$\nTaking square roots gives\n$$y - x^2 = \\pm 1 \\implies y = x^2 \\pm 1.$$\nWhen $x = \\sqrt{\\pi}$, we have $x^2 = \\pi$, so the two distinct $y$-coordinates are $\\pi + 1$ and $\\pi - 1$. Therefore,\n$$|a - b| = |(\\pi + 1) - (\\pi - 1)| = 2.$$',
          rubric: [
            { code: 'M2', text: 'Rewrites the equation as $(y - x^2)^2 = 1$.' },
            { code: 'M2', text: 'Solves for $y = x^2 \\pm 1$ and evaluates at $x = \\sqrt{\\pi}$ to get $\\pi \\pm 1$.' },
            { code: 'A2', text: 'Finds $|a - b| = 2$, option C.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'Claudia has $12$ coins, each of which is a $5$-cent coin or a $10$-cent coin. There are exactly $17$ different values that can be obtained as combinations of one or more of her coins. How many $10$-cent coins does Claudia have?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$\nE. $7$',
          answer: 'C. $5$',
          principle: 'Determine the range of achievable multiples of $5$ cents from the counts of $5$-cent and $10$-cent coins.',
          solution:
            'Let $n$ be the number of $10$-cent coins, so Claudia has $12 - n$ $5$-cent coins.\n- If $n = 12$ (no $5$-cent coins), only multiples of $10$ from $10$ to $120$ can be made, giving $12$ values.\n- If $n < 12$, there is at least one $5$-cent coin. Any multiple of $10$ up to $10n$ can be formed using $10$-cent coins, and adding a single $5$-cent coin gives every odd multiple of $5$ up to $10n + 5$; using additional $5$-cent coins then reaches every multiple of $5$ up to the maximum total value:\n$$10n + 5(12 - n) = 60 + 5n.$$\nThus every multiple of $5$ from $5$ up to $60 + 5n$ is achievable, which is\n$$\\frac{60 + 5n}{5} = 12 + n$$ different values.\nSetting $12 + n = 17$ gives $n = 5$.',
          rubric: [
            { code: 'M2', text: 'Models the maximum total value as $60 + 5n$ where $n$ is the number of $10$-cent coins.' },
            { code: 'M2', text: 'Shows that for $n < 12$, all $12 + n$ multiples of $5$ from $5$ to $60 + 5n$ are achievable.' },
            { code: 'A2', text: 'Solves $12 + n = 17$ to get $n = 5$, option C.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'The diagram below shows the circular face of a clock with radius $20\\text{ cm}$ and a circular disk with radius $10\\text{ cm}$ externally tangent to the clock face at $12$ o\'clock. The disk has an arrow painted on it, initially pointing in the upward vertical direction. Let the disk roll clockwise around the clock face. At what point on the clock face will the disk be tangent when the arrow is next pointing in the upward vertical direction?\n\nA. $2$ o\'clock\nB. $3$ o\'clock\nC. $4$ o\'clock\nD. $6$ o\'clock\nE. $8$ o\'clock',
          figures: [
            {
              src: '/papers/amc-10a-2015/fig-14.webp',
              alt: 'Circular clock face numbered from one to twelve with an externally tangent smaller disk at twelve o clock bearing an upward arrow and a clockwise curved arrow.',
              caption: 'Clock face and externally rolling circular disk for Problem 14.'
            }
          ],
          answer: 'C. $4$ o\'clock',
          principle: 'Account for both the rotation of the rolling disk around its own center and the revolution of its center around the fixed circle: total rotation angle $\\Delta\\phi = \\theta\\left(1 + \\frac{R}{r}\\right)$.',
          solution:
            'Suppose the point of tangency moves clockwise around the clock face through a central angle $\\theta$ (measured in radians). The arc length rolled along the clock face of radius $R = 20\\text{ cm}$ is $R\\theta = 20\\theta$.\nBecause the disk of radius $r = 10\\text{ cm}$ rolls without slipping, it turns clockwise relative to the line of centers by an angle\n$$\\frac{R\\theta}{r} = \\frac{20\\theta}{10} = 2\\theta.$$\nMeanwhile, the line of centers itself has rotated clockwise by $\\theta$. Therefore, the total clockwise angle through which the arrow turns relative to the fixed vertical direction is\n$$\\theta + 2\\theta = 3\\theta.$$\nThe arrow next points straight upward when $3\\theta = 2\\pi$, i.e., when\n$$\\theta = \\frac{2\\pi}{3} = 120^\\circ,$$\nwhich is $\\frac{1}{3}$ of the way around the clock face clockwise from $12$ o\'clock: at $4$ o\'clock.',
          rubric: [
            { code: 'M2', text: 'Recognizes that rolling without slipping adds the revolution angle $\\theta$ to the spin angle $\\frac{R}{r}\\theta = 2\\theta$.' },
            { code: 'M2', text: 'Sets total arrow rotation $3\\theta = 2\\pi$ to obtain $\\theta = \\frac{2\\pi}{3}$ ($\\frac{1}{3}$ turn).' },
            { code: 'A2', text: 'Finds the tangency point at $4$ o\'clock, option C.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'Consider the set of all fractions $\\frac{x}{y}$, where $x$ and $y$ are relatively prime positive integers. How many of these fractions have the property that if both numerator and denominator are increased by $1$, the value of the fraction is increased by $10\\%$?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. infinitely many',
          answer: 'B. $1$',
          principle: 'Convert the percentage-increase equation into a bilinear Diophantine equation and solve via Simon\'s Favorite Factoring Trick, checking $\\gcd(x, y) = 1$.',
          solution:
            'The condition gives\n$$\\frac{x + 1}{y + 1} = 1.1\\frac{x}{y} = \\frac{11x}{10y}.$$\nCross-multiplying yields\n$$10y(x + 1) = 11x(y + 1) \\iff 10xy + 10y = 11xy + 11x \\iff xy + 11x - 10y = 0.$$\nSubtract $110$ from both sides (or rearrange as $(10 - x)(y + 11) = 110$):\n$$(x - 10)(y + 11) = -110 \\iff (10 - x)(y + 11) = 110.$$\nSince $x, y \\ge 1$, we have $y + 11 \\ge 12$, and $10 - x > 0$ (so $1 \\le x \\le 9$). The divisors of $110 = 2 \\cdot 5 \\cdot 11$ that are at least $12$ are $22, 55, 110$:\n1. $y + 11 = 22 \\implies y = 11$ and $10 - x = 5 \\implies x = 5$. Here $\\gcd(5, 11) = 1$, giving $\\frac{5}{11}$ (check: $\\frac{6}{12} = \\frac{1}{2} = \\frac{11}{10} \\cdot \\frac{5}{11}$).\n2. $y + 11 = 55 \\implies y = 44$ and $10 - x = 2 \\implies x = 8$, which fails since $\\gcd(8, 44) = 4 \\neq 1$.\n3. $y + 11 = 110 \\implies y = 99$ and $10 - x = 1 \\implies x = 9$, which fails since $\\gcd(9, 99) = 9 \\neq 1$.\n\nHence there is only $1$ such fraction.',
          rubric: [
            { code: 'M2', text: 'Sets up $\\frac{x+1}{y+1} = \\frac{11x}{10y}$ and factors it as $(10 - x)(y + 11) = 110$.' },
            { code: 'M2', text: 'Tests the valid divisors of $110$ with $y + 11 \\ge 12$ and checks $\\gcd(x, y) = 1$.' },
            { code: 'A2', text: 'Finds only $\\frac{5}{11}$ works, giving $1$ fraction, option B.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'If $y + 4 = (x - 2)^2$, $x + 4 = (y - 2)^2$, and $x \\neq y$, what is the value of $x^2 + y^2$?\n\nA. $10$\nB. $15$\nC. $20$\nD. $25$\nE. $30$',
          answer: 'B. $15$',
          principle: 'Exploit symmetry by subtracting the two equations to find $x + y$, then add the two equations to isolate $x^2 + y^2$.',
          solution:
            'Subtract the second equation from the first:\n$$y - x = (x - 2)^2 - (y - 2)^2 = (x - y)(x + y - 4).$$\nSince $x \\neq y$, we may divide both sides by $x - y$:\n$$-1 = x + y - 4 \\implies x + y = 3.$$\nNow add the two original equations:\n$$x + y + 8 = (x - 2)^2 + (y - 2)^2 = x^2 + y^2 - 4(x + y) + 8.$$\nSubtract $8$ from both sides and rearrange:\n$$x^2 + y^2 = 5(x + y) = 5(3) = 15.$$',
          rubric: [
            { code: 'M2', text: 'Subtracts the equations and divides by $x - y \\neq 0$ to obtain $x + y = 3$.' },
            { code: 'M2', text: 'Adds the equations to express $x^2 + y^2 = 5(x + y)$.' },
            { code: 'A2', text: 'Computes $x^2 + y^2 = 15$, option B.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'A line that passes through the origin intersects both the line $x = 1$ and the line $y = 1 + \\frac{\\sqrt{3}}{3}x$. The three lines create an equilateral triangle. What is the perimeter of the triangle?\n\nA. $2\\sqrt{6}$\nB. $2 + 2\\sqrt{3}$\nC. $6$\nD. $3 + 2\\sqrt{3}$\nE. $6 + \\frac{\\sqrt{3}}{3}$',
          answer: 'D. $3 + 2\\sqrt{3}$',
          principle: 'Use line slopes as tangents of inclination angles to determine the third side of the equilateral triangle.',
          solution:
            'The line $y = 1 + \\frac{\\sqrt{3}}{3}x$ has slope $\\frac{\\sqrt{3}}{3} = \\tan 30^\\circ$, so it makes a $30^\\circ$ angle with the positive $x$-axis and a $60^\\circ$ angle with the vertical line $x = 1$.\nFor a line through the origin $O(0,0)$ to form an equilateral triangle with $x = 1$ and $y = 1 + \\frac{\\sqrt{3}}{3}x$, it must also make a $60^\\circ$ angle with $x = 1$ (on the other side of the horizontal) and a $60^\\circ$ angle with $y = 1 + \\frac{\\sqrt{3}}{3}x$. Thus its inclination angle is $-30^\\circ$, giving the line $y = -\\frac{\\sqrt{3}}{3}x$.\nThe two vertices on the vertical side $x = 1$ are\n$$A = \\left(1, 1 + \\frac{\\sqrt{3}}{3}\\right) \\quad \\text{and} \\quad B = \\left(1, -\\frac{\\sqrt{3}}{3}\\right).$$\nHence the side length of the equilateral triangle is\n$$AB = \\left(1 + \\frac{\\sqrt{3}}{3}\\right) - \\left(-\\frac{\\sqrt{3}}{3}\\right) = 1 + \\frac{2\\sqrt{3}}{3},$$\nand its perimeter is\n$$3 \\left(1 + \\frac{2\\sqrt{3}}{3}\\right) = 3 + 2\\sqrt{3}.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the slope $\\frac{\\sqrt{3}}{3}$ as $30^\\circ$ from horizontal ($60^\\circ$ from $x = 1$) and finds the third line $y = -\\frac{\\sqrt{3}}{3}x$.' },
            { code: 'M2', text: 'Computes the side length along $x = 1$ as $1 + \\frac{2\\sqrt{3}}{3}$.' },
            { code: 'A2', text: 'Multiplies by $3$ to get perimeter $3 + 2\\sqrt{3}$, option D.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'Hexadecimal (base-$16$) numbers are written using the numeric digits $0$ through $9$ as well as the letters $A$ through $F$ to represent $10$ through $15$. Among the first $1000$ positive integers, there are $n$ whose hexadecimal representation contains only numeric digits. What is the sum of the digits of $n$?\n\nA. $17$\nB. $18$\nC. $19$\nD. $20$\nE. $21$',
          answer: 'E. $21$',
          principle: 'Convert the upper bound $1000$ to base $16$ and count the base-$16$ numbers in range using only digits $0$–$9$.',
          solution:
            'First write $1000$ in base $16$:\n$$1000 = 3 \\times 256 + 232 = 3 \\times 16^2 + 14 \\times 16 + 8 = \\text{3E8}_{16}.$$\nWe want to count positive integers from $1_{16}$ to $\\text{3E8}_{16}$ whose hexadecimal digits are all in $\\{0, 1, \\ldots, 9\\}$. Padding to $3$ hexadecimal digits, the leading digit can be $0, 1, 2,$ or $3$:\n- Note that $\\text{399}_{16} < \\text{3E8}_{16}$, so every $3$-digit combination from $001_{16}$ to $399_{16}$ using only digits $0$–$9$ lies in $[1, 1000]$.\n- There are $4$ choices ($0, 1, 2, 3$) for the $16^2$-digit, $10$ choices for the $16^1$-digit, and $10$ choices for the $16^0$-digit, giving $4 \\times 10 \\times 10 = 400$ strings.\nExcluding $000_{16} = 0$, there are $n = 400 - 1 = 399$ positive integers.\nThe sum of the digits of $n$ is $3 + 9 + 9 = 21$.',
          rubric: [
            { code: 'M2', text: 'Converts $1000_{10} = \\text{3E8}_{16}$.' },
            { code: 'M2', text: 'Counts numeric-digit hex representations from $001_{16}$ to $399_{16}$ as $4 \\times 10 \\times 10 - 1 = 399$.' },
            { code: 'A2', text: 'Computes the digit sum $3 + 9 + 9 = 21$, option E.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'The isosceles right triangle $ABC$ has right angle at $C$ and area $12.5$. The rays trisecting $\\angle ACB$ intersect $AB$ at $D$ and $E$. What is the area of $\\triangle CDE$?\n\nA. $\\frac{5\\sqrt{2}}{3}$\nB. $\\frac{50\\sqrt{3} - 75}{4}$\nC. $\\frac{15\\sqrt{3}}{8}$\nD. $\\frac{50 - 25\\sqrt{3}}{2}$\nE. $\\frac{25}{6}$',
          answer: 'D. $\\frac{50 - 25\\sqrt{3}}{2}$',
          principle: 'Use symmetry around the altitude to hypotenuse $AB$ and evaluate $\\tan 15^\\circ = 2 - \\sqrt{3}$.',
          solution:
            'Since $\\triangle ABC$ is an isosceles right triangle with right angle at $C$ and area $\\frac{1}{2}AC^2 = 12.5$, we have $AC = BC = 5$, and $AB = 5\\sqrt{2}$.\nLet $M$ be the midpoint of $AB$. Then $CM$ is the altitude to $AB$ of length $h = \\frac{5}{\\sqrt{2}}$ and bisects $\\angle ACB = 90^\\circ$.\nBecause the rays $CD$ and $CE$ trisect $\\angle ACB$, we have $\\angle DCE = 30^\\circ$, and by symmetry $CM$ bisects $\\angle DCE$, so $\\angle DCM = \\angle ECM = 15^\\circ$.\nTherefore,\n$$DE = 2 \\cdot CM \\cdot \\tan 15^\\circ = 2h \\tan 15^\\circ.$$\nRecall that $\\tan 15^\\circ = \\tan(45^\\circ - 30^\\circ) = \\frac{1 - \\frac{1}{\\sqrt{3}}}{1 + \\frac{1}{\\sqrt{3}}} = \\frac{\\sqrt{3} - 1}{\\sqrt{3} + 1} = 2 - \\sqrt{3}$.\nHence the area of $\\triangle CDE$ is\n$$\\frac{1}{2} \\cdot DE \\cdot h = h^2 \\tan 15^\\circ = \\left(\\frac{5}{\\sqrt{2}}\\right)^2 (2 - \\sqrt{3}) = \\frac{25}{2}(2 - \\sqrt{3}) = \\frac{50 - 25\\sqrt{3}}{2}.$$',
          rubric: [
            { code: 'M2', text: 'Finds $AC = BC = 5$ and altitude $h = \\frac{5}{\\sqrt{2}}$ from $\\text{Area}(\\triangle ABC) = 12.5$.' },
            { code: 'M2', text: 'Uses symmetry of the trisectors to write $\\text{Area}(\\triangle CDE) = h^2 \\tan 15^\\circ$ and evaluates $\\tan 15^\\circ = 2 - \\sqrt{3}$.' },
            { code: 'A2', text: 'Obtains $\\frac{50 - 25\\sqrt{3}}{2}$, option D.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'A rectangle has area $A\\text{ cm}^2$ and perimeter $P\\text{ cm}$, where $A$ and $P$ are positive integers. Which of the following numbers cannot equal $A + P$?\n\nA. $100$\nB. $102$\nC. $104$\nD. $106$\nE. $108$',
          answer: 'B. $102$',
          principle: 'Under the intended assumption of positive integer side lengths $x, y$, apply Simon\'s Favorite Factoring Trick: $A + P + 4 = (x + 2)(y + 2)$ requires two integer factors at least $3$.',
          solution:
            'In this competition problem, the rectangle is intended to have positive integer side lengths $x, y \\ge 1$ (see note below). Then $A = xy$ and $P = 2x + 2y$, so\n$$A + P + 4 = xy + 2x + 2y + 4 = (x + 2)(y + 2).$$\nBecause $x, y$ are positive integers, both $x + 2 \\ge 3$ and $y + 2 \\ge 3$. Thus $A + P + 4$ must factor as a product of two integers each at least $3$.\nTest each choice by adding $4$:\n- A. $100 + 4 = 104 = 4 \\times 26$ ($x = 2, y = 24$).\n- B. $102 + 4 = 106 = 2 \\times 53$. Since $53$ is prime, the only positive factorizations of $106$ are $1 \\times 106$ and $2 \\times 53$; neither has both factors $\\ge 3$.\n- C. $104 + 4 = 108 = 4 \\times 27$ ($x = 2, y = 25$).\n- D. $106 + 4 = 110 = 5 \\times 22$ ($x = 3, y = 20$).\n- E. $108 + 4 = 112 = 4 \\times 28$ ($x = 2, y = 26$).\n\nTherefore $102$ cannot equal $A + P$ for any rectangle with integer side lengths.\n\n*(Mathematical note: the printed wording omits "integer side lengths". If non-integer side lengths were allowed with $A, P \\in \\mathbb{Z}^+$, then $P = 40, A = 62$ would give $A + P = 102$ with side lengths $10 \\pm \\sqrt{38}\\text{ cm}$.)*',
          rubric: [
            { code: 'M2', text: 'Rewrites $A + P + 4 = (x + 2)(y + 2)$ for integer side lengths $x, y \\ge 1$.' },
            { code: 'M2', text: 'Identifies the constraint $x + 2 \\ge 3, y + 2 \\ge 3$ and tests $N + 4$ for each option.' },
            { code: 'A2', text: 'Shows $102 + 4 = 2 \\times 53$ cannot have both factors $\\ge 3$, selecting option B.' }
          ]
        },
        {
          label: '21',
          marks: 6,
          prompt:
            'Tetrahedron $ABCD$ has $AB = 5$, $AC = 3$, $BC = 4$, $BD = 4$, $AD = 3$, and $CD = \\frac{12}{5}\\sqrt{2}$. What is the volume of the tetrahedron?\n\nA. $3\\sqrt{2}$\nB. $2\\sqrt{5}$\nC. $\\frac{24}{5}$\nD. $3\\sqrt{3}$\nE. $\\frac{24}{5}\\sqrt{2}$',
          answer: 'C. $\\frac{24}{5}$',
          principle: 'Decompose the tetrahedron into two pyramids sharing a cross-sectional triangle perpendicular to edge $AB$.',
          solution:
            'Observe that $3^2 + 4^2 = 5^2$, so both $\\triangle ABC$ and $\\triangle ABD$ are $3$-$4$-$5$ right triangles with right angles at $C$ and $D$, respectively.\nLet $H$ be the foot of the altitude from $C$ to $AB$ in $\\triangle ABC$. Since $AC = AD = 3$ and $BC = BD = 4$, the two congruent triangles $\\triangle ABC$ and $\\triangle ABD$ have the same altitude foot $H$ on $AB$, with\n$$CH = DH = \\frac{3 \\cdot 4}{5} = \\frac{12}{5}.$$\nMoreover, both $CH \\perp AB$ and $DH \\perp AB$, so the plane of $\\triangle CHD$ is perpendicular to line $AB$.\nIn $\\triangle CHD$, we have $CH = DH = \\frac{12}{5}$ and $CD = \\frac{12}{5}\\sqrt{2}$. Since $CH^2 + DH^2 = CD^2$, $\\triangle CHD$ is a right isosceles triangle with $\\angle CHD = 90^\\circ$, so\n$$\\text{Area}(\\triangle CHD) = \\frac{1}{2} \\cdot \\frac{12}{5} \\cdot \\frac{12}{5} = \\frac{72}{25}.$$\nSplitting tetrahedron $ABCD$ along plane $CHD$ into tetrahedra $A\\text{-}CHD$ and $B\\text{-}CHD$ (whose heights sum to $AH + HB = AB = 5$):\n$$V = \\frac{1}{3} \\cdot \\text{Area}(\\triangle CHD) \\cdot AB = \\frac{1}{3} \\cdot \\frac{72}{25} \\cdot 5 = \\frac{24}{5}.$$',
          rubric: [
            { code: 'M2', text: 'Recognizes $\\triangle ABC$ and $\\triangle ABD$ are congruent $3$-$4$-$5$ right triangles sharing altitude foot $H$ with $CH = DH = \\frac{12}{5}$.' },
            { code: 'M2', text: 'Shows $\\triangle CHD$ is a right triangle perpendicular to $AB$ with area $\\frac{72}{25}$.' },
            { code: 'A2', text: 'Computes $V = \\frac{1}{3} \\cdot \\frac{72}{25} \\cdot 5 = \\frac{24}{5}$, option C.' }
          ]
        },
        {
          label: '22',
          marks: 6,
          prompt:
            'Eight people are sitting around a circular table, each holding a fair coin. All eight people flip their coins and those who flip heads stand while those who flip tails remain seated. What is the probability that no two adjacent people will stand?\n\nA. $\\frac{47}{256}$\nB. $\\frac{3}{16}$\nC. $\\frac{49}{256}$\nD. $\\frac{25}{128}$\nE. $\\frac{51}{256}$',
          answer: 'A. $\\frac{47}{256}$',
          principle: 'Count binary cyclic sequences of length $8$ with no two adjacent $1$s (Lucas numbers, or casework by the number of standing people).',
          solution:
            'There are $2^8 = 256$ equally likely outcomes for the $8$ coin flips. We count the outcomes in which no two adjacent people flip heads (i.e., stand).\nGroup by the number $k$ of people who stand ($0 \\le k \\le 4$, since $k \\ge 5$ forces two adjacent people to stand):\n- $k = 0$: $\\binom{8}{0} = 1$.\n- $k = 1$: $\\binom{8}{1} = 8$.\n- $k = 2$: $\\binom{8}{2} - 8 = 28 - 8 = 20$ (subtract the $8$ adjacent pairs).\n- $k = 3$: fix person $1$ or not, or use the circular stars-and-bars formula $\\frac{8}{8 - k}\\binom{8 - k}{k}$: for $k = 3$, $\\frac{8}{5}\\binom{5}{3} = 16$.\n- $k = 4$: only the two alternating configurations (all even seats or all odd seats), giving $2$.\n\nTotal valid outcomes: $1 + 8 + 20 + 16 + 2 = 47$ (the $8$-th Lucas number $L_8 = 47$).\nThus the required probability is $\\frac{47}{256}$.',
          rubric: [
            { code: 'M2', text: 'Identifies total outcomes $2^8 = 256$ and restricts the number of standing people to $0 \\le k \\le 4$.' },
            { code: 'M2', text: 'Counts valid circular arrangements for each $k$ ($1 + 8 + 20 + 16 + 2 = 47$).' },
            { code: 'A2', text: 'Computes probability $\\frac{47}{256}$, option A.' }
          ]
        },
        {
          label: '23',
          marks: 6,
          prompt:
            'The zeros of the function $f(x) = x^2 - ax + 2a$ are integers. What is the sum of the possible values of $a$?\n\nA. $7$\nB. $8$\nC. $16$\nD. $17$\nE. $18$',
          answer: 'C. $16$',
          principle: 'Apply Vieta\'s formulas to relate the integer roots $r, s$ via $rs = 2(r + s)$, then factor with Simon\'s Favorite Factoring Trick.',
          solution:
            'Let the integer zeros of $f(x) = x^2 - ax + 2a$ be $r$ and $s$. By Vieta\'s formulas,\n$$r + s = a \\quad \\text{and} \\quad rs = 2a.$$\nEliminating $a$ gives $rs = 2(r + s)$, so\n$$rs - 2r - 2s + 4 = 4 \\iff (r - 2)(s - 2) = 4.$$\nSince $r - 2$ and $s - 2$ are integers whose product is $4$, the unordered factor pairs for $\\{r - 2, s - 2\\}$ are:\n- $\\{1, 4\\} \\implies \\{r, s\\} = \\{3, 6\\} \\implies a = 3 + 6 = 9$,\n- $\\{2, 2\\} \\implies \\{r, s\\} = \\{4, 4\\} \\implies a = 4 + 4 = 8$,\n- $\\{-1, -4\\} \\implies \\{r, s\\} = \\{1, -2\\} \\implies a = 1 + (-2) = -1$,\n- $\\{-2, -2\\} \\implies \\{r, s\\} = \\{0, 0\\} \\implies a = 0 + 0 = 0$.\n\nAll four values of $a$ are distinct. Their sum is\n$$9 + 8 + (-1) + 0 = 16.$$',
          rubric: [
            { code: 'M2', text: 'Uses Vieta\'s formulas $r + s = a$ and $rs = 2a$ to obtain $(r - 2)(s - 2) = 4$.' },
            { code: 'M2', text: 'Lists all integer factor pairs of $4$ (including negative pairs) to find $a \\in \\{9, 8, -1, 0\\}$.' },
            { code: 'A2', text: 'Sums the possible values of $a$ to obtain $16$, option C.' }
          ]
        },
        {
          label: '24',
          marks: 6,
          prompt:
            'For some positive integers $p$, quadrilateral $ABCD$ with positive integer side lengths has perimeter $p$, right angles at $B$ and $C$, $AB = 2$, and $CD = AD$. How many different values of $p < 2015$ are possible?\n\nA. $30$\nB. $31$\nC. $61$\nD. $62$\nE. $63$',
          answer: 'B. $31$',
          principle: 'Drop a perpendicular from $A$ to $CD$ to form a right triangle, use the Pythagorean theorem to parameterize integer side lengths, and bound the perimeter.',
          solution:
            'Since $\\angle B = \\angle C = 90^\\circ$, $ABCD$ is a right trapezoid (or rectangle when $CD = 2$) with $AB \\parallel CD$. Let $BC = b$ and $CD = AD = c$, where $b, c$ are positive integers.\nDrop the perpendicular from $A$ to line $CD$ at $E$. Then $ABCE$ is a rectangle, so $AE = BC = b$, $CE = AB = 2$, and $DE = |c - 2|$.\nApplying the Pythagorean theorem to $\\triangle ADE$ (which also holds when $c = 2$ and $DE = 0$):\n$$b^2 + (c - 2)^2 = c^2 \\implies b^2 = 4c - 4 = 4(c - 1).$$\nSince $b$ is a positive integer and $b^2$ is divisible by $4$, $b$ must be an even positive integer: write $b = 2k$ for an integer $k \\ge 1$. Then\n$$4k^2 = 4(c - 1) \\implies c = k^2 + 1.$$\nEvery $k \\ge 1$ gives valid positive integer side lengths $(AB, BC, CD, AD) = (2, 2k, k^2 + 1, k^2 + 1)$ (for $k = 1$, $ABCD$ is a $2 \\times 2$ square). The perimeter is\n$$p = 2 + 2k + 2(k^2 + 1) = 2k^2 + 2k + 4,$$\nwhich is strictly increasing with $k$. We require\n$$2k^2 + 2k + 4 < 2015 \\iff 2k(k + 1) \\le 2010 \\iff k(k + 1) \\le 1005.$$\nTesting near $\\sqrt{1005} \\approx 31.7$: $31 \\times 32 = 992 \\le 1005$, while $32 \\times 33 = 1056 > 1005$.\nThus $k \\in \\{1, 2, \\ldots, 31\\}$, yielding $31$ distinct values of $p$.',
          rubric: [
            { code: 'M2', text: 'Forms right triangle $ADE$ to derive $b^2 = 4(c - 1)$ for $BC = b$ and $CD = AD = c$.' },
            { code: 'M2', text: 'Parameterizes $b = 2k$, $c = k^2 + 1$ ($k \\ge 1$) and writes $p = 2k^2 + 2k + 4$.' },
            { code: 'A2', text: 'Solves $k(k + 1) \\le 1005$ to find $31$ values ($1 \\le k \\le 31$), option B.' }
          ]
        },
        {
          label: '25',
          marks: 6,
          prompt:
            'Let $S$ be a square of side length $1$. Two points are chosen independently at random on the sides of $S$. The probability that the straight-line distance between the points is at least $\\frac{1}{2}$ is $\\frac{a - b\\pi}{c}$, where $a, b,$ and $c$ are positive integers and $\\gcd(a, b, c) = 1$. What is $a + b + c$?\n\nA. $59$\nB. $60$\nC. $61$\nD. $62$\nE. $63$',
          answer: 'A. $59$',
          principle: 'Use symmetry to fix the first point on one side, then apply geometric probability across the four equally likely sides for the second point.',
          solution:
            'By symmetry of the square $S = [0, 1]^2$, assume without loss of generality that the first point $P = (x, 0)$ is chosen uniformly on the bottom side ($x \\in [0, 1]$). The second point $Q$ is chosen uniformly on one of the four sides, each with probability $\\frac{1}{4}$:\n1. **$Q$ on the same (bottom) side**, $Q = (y, 0)$ with $y \\in [0, 1]$: we need $|x - y| \\ge \\frac{1}{2}$. In the unit square $[0, 1]^2$ of $(x, y)$-values, the region $|x - y| \\ge \\frac{1}{2}$ consists of two right triangles of leg $\\frac{1}{2}$, of total area $2 \\cdot \\frac{1}{2}\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\n2. **$Q$ on the opposite (top) side**, $Q = (y, 1)$: the distance is at least $1 > \\frac{1}{2}$, so the probability is $1$.\n3. **$Q$ on the left side**, $Q = (0, y)$ with $y \\in [0, 1]$: the distance is $\\sqrt{x^2 + y^2}$, which is less than $\\frac{1}{2}$ inside the quarter-disk $x^2 + y^2 < \\frac{1}{4}$ of area $\\frac{1}{4}\\pi\\left(\\frac{1}{2}\\right)^2 = \\frac{\\pi}{16}$. Thus the probability that $PQ \\ge \\frac{1}{2}$ is $1 - \\frac{\\pi}{16}$.\n4. **$Q$ on the right side**, $Q = (1, y)$: by symmetry with the left side, the probability is also $1 - \\frac{\\pi}{16}$.\n\nAveraging over the four sides gives\n$$\\frac{1}{4}\\left(\\frac{1}{4} + 1 + 2\\left(1 - \\frac{\\pi}{16}\\right)\\right) = \\frac{1}{4}\\left(\\frac{13}{4} - \\frac{\\pi}{8}\\right) = \\frac{26 - \\pi}{32}.$$\nHere $a = 26, b = 1, c = 32$ with $\\gcd(26, 1, 32) = 1$, so $a + b + c = 26 + 1 + 32 = 59$.',
          rubric: [
            { code: 'M2', text: 'Fixes $P$ on one side by symmetry and splits into same, opposite, and two adjacent side cases.' },
            { code: 'M2', text: 'Computes the case probabilities $\\frac{1}{4}$, $1$, and $1 - \\frac{\\pi}{16}$ (twice) via geometric area.' },
            { code: 'A2', text: 'Averages to $\\frac{26 - \\pi}{32}$ and finds $26 + 1 + 32 = 59$, option A.' }
          ]
        }
      ]
    }
  ]
};
