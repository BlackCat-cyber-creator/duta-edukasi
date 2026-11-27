/**
 * Paket Soal Terstruktur: AMC 10B 2025 (25 soal pilihan ganda lengkap)
 * Sumber: 2025 AMC 10B Problems - AoPS Wiki.pdf (MAA AMC 10B 2025).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Gambar pada soal 12, 16, 19, dan 20
 * diekstrak dari halaman render PDF sumber ke public/papers/amc-10b-2025/fig-<n>.webp.
 */
export default {
  id: 'amc-10b-2025',
  slug: 'amc-10b-2025',
  subject: 'olimpiade-mat',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic:
    'AMC 10B 2025: 25 complete competition problems in algebra, geometry, combinatorics, and number theory',
  relatedChapterIds: [
    'sma10-bab2-barisan-deret',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma10-bab8-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 10',
  title: 'AMC 10B \u2014 2025',
  totalMarks: 150,
  instructions:
    'This is a 25-question, multiple-choice test (75 minutes working time; no calculators permitted). In the official AMC 10B contest, each correct answer scores 6 points, each unanswered problem scores 1.5 points, and each incorrect answer scores 0 points (maximum 150 points). In this practice set, each of the 25 problems is worth 6 marks (150 marks total). Figures are not necessarily drawn to scale.',
  source: {
    org: 'AMC 10',
    file: '2025 AMC 10B Problems - AoPS Wiki.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 150,
      stem: 'Choose the one correct answer (A, B, C, D, or E) for each of the 25 questions (6 marks each).',
      parts: [
        {
          label: '1',
          marks: 6,
          prompt:
            'The instructions on a $350$-gram bag of coffee beans say that proper brewing of a large mug of pour-over coffee requires $20$ grams of coffee beans. What is the greatest number of properly brewed large mugs of coffee that can be made from the coffee beans in that bag?\n\nA. $16$\nB. $17$\nC. $18$\nD. $19$\nE. $20$',
          answer: 'B. $17$',
          principle: 'Divide the total mass of coffee beans by the mass required per mug and take the floor.',
          solution:
            'Each properly brewed large mug uses $20$ grams of beans. Dividing $350$ grams by $20$ grams per mug gives\n$$\\frac{350}{20} = 17.5.$$\nBecause a partial mug is not a properly brewed large mug, the greatest number of full mugs is $\\lfloor 17.5 \\rfloor = 17$ (using $17 \\times 20 = 340$ grams, with $10$ grams remaining).',
          rubric: [
            { code: 'M4', text: 'Divides $350$ by $20$ to obtain $17.5$.' },
            { code: 'A2', text: 'Takes the floor to get $17$ mugs, option B.' }
          ]
        },
        {
          label: '2',
          marks: 6,
          prompt:
            'Jerry wrote down the ones digit of each of the first $2025$ positive squares: $1, 4, 9, 6, 5, 6, \\dots$. What is the sum of all the numbers Jerry wrote down?\n\nA. $9025$\nB. $9070$\nC. $9090$\nD. $9115$\nE. $9160$',
          answer: 'D. $9115$',
          principle: 'Use the $10$-term periodicity of $k^2 \\bmod 10$ to sum complete blocks of $10$ and the remaining terms.',
          solution:
            'Since the ones digit of $k^2$ depends only on $k \\bmod 10$, the sequence of ones digits repeats with period $10$. Over one full cycle $k = 1, 2, \\dots, 10$, the ones digits of $k^2$ are\n$$1, 4, 9, 6, 5, 6, 9, 4, 1, 0,$$\nwhose sum is\n$$1 + 4 + 9 + 6 + 5 + 6 + 9 + 4 + 1 + 0 = 45.$$\nWriting $2025 = 202 \\times 10 + 5$, there are $202$ complete cycles of $10$ terms followed by the first $5$ terms ($1, 4, 9, 6, 5$, summing to $25$). Thus the total sum is\n$$202 \\times 45 + 25 = 9090 + 25 = 9115.$$',
          rubric: [
            { code: 'M4', text: 'Finds the $10$-term cycle sum $45$ and splits $2025 = 202 \\times 10 + 5$.' },
            { code: 'A2', text: 'Computes $202 \\times 45 + 25 = 9115$, option D.' }
          ]
        },
        {
          label: '3',
          marks: 6,
          prompt:
            'A Pascal-like triangle has $10$ as the top row and $10$ followed by $1$ as the second row. In each subsequent row the first number is $10$, the last number is $1$, and, as in the standard Pascal\'s Triangle, each other number in the row is the sum of the two numbers directly above it. The first four rows are shown below:\n$$\\begin{array}{ccccccc} & & & 10 & & & \\\\ & & 10 & & 1 & & \\\\ & 10 & & 11 & & 1 & \\\\ 10 & & 21 & & 12 & & 1 \\end{array}$$\nWhat is the sum of the digits of the sum of the numbers in the $11$th row?\n\nA. $11$\nB. $13$\nC. $14$\nD. $16$\nE. $17$',
          answer: 'D. $16$',
          principle: 'Find the recurrence for the row sum $S_n$: each entry in row $n-1$ contributes twice to row $n$, plus the fixed boundary entries.',
          solution:
            'Let $S_n$ be the sum of the numbers in the $n$th row. From row $n - 1$ to row $n$ ($n \\ge 3$), every number in row $n - 1$ is added once into the entry below-left and once into the entry below-right, except that the leftmost $10$ is not carried further left and the rightmost $1$ is not carried further right. Those two omitted boundary copies are precisely replaced by the new leftmost $10$ and rightmost $1$ of row $n$. Consequently, every entry in row $n - 1$ contributes exactly twice to row $n$, so\n$$S_n = 2S_{n-1} \\quad \\text{for all } n \\ge 3.$$\nSince $S_2 = 10 + 1 = 11$, it follows by induction that $S_n = 11 \\cdot 2^{n-2}$ for all $n \\ge 2$. Therefore,\n$$S_{11} = 11 \\cdot 2^{9} = 11 \\times 512 = 5632.$$\nThe sum of the digits of $5632$ is $5 + 6 + 3 + 2 = 16$.',
          rubric: [
            { code: 'M4', text: 'Establishes $S_n = 2S_{n-1}$ for $n \\ge 3$, giving $S_{11} = 11 \\cdot 2^9 = 5632$.' },
            { code: 'A2', text: 'Sums the digits $5 + 6 + 3 + 2 = 16$, option D.' }
          ]
        },
        {
          label: '4',
          marks: 6,
          prompt:
            'The value of the two-digit number $\\underline{a}\\,\\underline{b}$ in base seven equals the value of the two-digit number $\\underline{b}\\,\\underline{a}$ in base nine. What is $a + b$?\n\nA. $7$\nB. $9$\nC. $10$\nD. $11$\nE. $14$',
          answer: 'A. $7$',
          principle: 'Convert both positional representations to base ten and solve the resulting linear Diophantine equation within the valid digit bounds.',
          solution:
            'Because $\\underline{a}\\,\\underline{b}_7$ is a two-digit number in base $7$ and $\\underline{b}\\,\\underline{a}_9$ is a two-digit number in base $9$, the digits $a$ and $b$ satisfy $1 \\le a \\le 6$ and $1 \\le b \\le 6$.\nEquating their base-$10$ values:\n$$7a + b = 9b + a \\implies 6a = 8b \\implies 3a = 4b.$$\nSince $\\gcd(3, 4) = 1$, $a$ must be a multiple of $4$ and $b$ a multiple of $3$. Within $1 \\le a, b \\le 6$, the unique solution is $a = 4$ and $b = 3$ (check: $43_7 = 31 = 34_9$). Hence\n$$a + b = 4 + 3 = 7.$$',
          rubric: [
            { code: 'M4', text: 'Sets up $7a + b = 9b + a$, simplifying to $3a = 4b$ with $1 \\le a, b \\le 6$.' },
            { code: 'A2', text: 'Finds $(a, b) = (4, 3)$ and $a + b = 7$, option A.' }
          ]
        },
        {
          label: '5',
          marks: 6,
          prompt:
            'In $\\triangle ABC$, $AB = 10$, $AC = 18$, and $\\angle B = 130^\\circ$. Let $O$ be the center of the circle containing $A$, $B$, and $C$. What is the degree measure of $\\angle CAO$?\n\nA. $20$\nB. $30$\nC. $40$\nD. $50$\nE. $60$',
          answer: 'C. $40$',
          principle: 'Use the inscribed angle theorem on the circumcircle to find central angle $\\angle AOC$, then use isosceles triangle $\\triangle OAC$.',
          solution:
            'Since $\\angle B = 130^\\circ$ is obtuse, vertices $B$ and $O$ lie on opposite sides of chord $\\overline{AC}$.\nInscribed angle $\\angle ABC = 130^\\circ$ subtends the major arc $\\widehat{AC}$, so the minor arc $\\widehat{AC}$ has measure\n$$360^\\circ - 2(130^\\circ) = 100^\\circ.$$\nTherefore the central angle $\\angle AOC = 100^\\circ$. Because $OA = OC$ (both are radii of the circumcircle), $\\triangle OAC$ is isosceles, giving\n$$\\angle CAO = \\frac{180^\\circ - 100^\\circ}{2} = 40^\\circ.$$\n(The side lengths $AB = 10$ and $AC = 18$ are consistent with a triangle having $\\angle B = 130^\\circ$, and are not needed for the angle calculation.)',
          rubric: [
            { code: 'M4', text: 'Finds minor central angle $\\angle AOC = 360^\\circ - 2(130^\\circ) = 100^\\circ$.' },
            { code: 'A2', text: 'Uses isosceles $\\triangle OAC$ to obtain $\\angle CAO = 40^\\circ$, option C.' }
          ]
        },
        {
          label: '6',
          marks: 6,
          prompt:
            'The line $y = \\frac{1}{3}x + 1$ divides the square region defined by $0 \\le x \\le 2$ and $0 \\le y \\le 2$ into an upper and lower region. The line $x = a$ divides the lower region into two regions of equal area. Then $a$ can be written as $\\sqrt{s} - t$, where $s$ and $t$ are positive integers. What is $s + t$?\n\nA. $18$\nB. $19$\nC. $20$\nD. $21$\nE. $22$',
          answer: 'C. $20$',
          principle: 'Compute the area of the trapezoidal lower region and solve the area-halving quadratic equation for $a$.',
          solution:
            'For $0 \\le x \\le 2$, the line $y = \\frac{1}{3}x + 1$ rises from $y(0) = 1$ to $y(2) = \\frac{5}{3} < 2$, so the lower region is a trapezoid bounded by $x = 0$, $x = 2$, $y = 0$, and $y = \\frac{1}{3}x + 1$.\nThe area of the entire lower region is\n$$\\text{Area}_{\\text{lower}} = \\frac{1 + \\frac{5}{3}}{2} \\times 2 = \\frac{8}{3}.$$\nFor $0 \\le a \\le 2$, the region to the left of $x = a$ is a trapezoid with bases $y(0) = 1$ and $y(a) = \\frac{a}{3} + 1$ and width $a$. Setting its area equal to half of $\\frac{8}{3}$, namely $\\frac{4}{3}$:\n$$\\frac{1 + \\left(\\frac{a}{3} + 1\\right)}{2} \\cdot a = \\frac{4}{3} \\implies \\frac{a^2}{6} + a = \\frac{4}{3} \\implies a^2 + 6a - 8 = 0.$$\nBy the quadratic formula, since $a > 0$,\n$$a = \\frac{-6 + \\sqrt{36 + 32}}{2} = -3 + \\sqrt{17} = \\sqrt{17} - 3.$$\nThus $s = 17$ and $t = 3$, giving $s + t = 17 + 3 = 20$.',
          rubric: [
            { code: 'M4', text: 'Finds total lower area $\\frac{8}{3}$ and sets up $a^2 + 6a - 8 = 0$.' },
            { code: 'A2', text: 'Solves $a = \\sqrt{17} - 3$ and sums $17 + 3 = 20$, option C.' }
          ]
        },
        {
          label: '7',
          marks: 6,
          prompt:
            'Frances stands $15$ meters directly south of a locked gate in a fence that runs east-west. Immediately behind the fence is a box of chocolates, located $x$ meters east of the locked gate. An unlocked gate lies $9$ meters east of the box, and another unlocked gate lies $8$ meters west of the locked gate. Frances can reach the box by walking toward an unlocked gate, passing through it, and walking toward the box. It happens that the total distance Frances would travel is the same via either unlocked gate. What is the value of $x$?\n\nA. $3\\frac{2}{7}$\nB. $3\\frac{3}{7}$\nC. $3\\frac{4}{7}$\nD. $3\\frac{5}{7}$\nE. $3\\frac{6}{7}$',
          answer: 'C. $3\\frac{4}{7}$',
          principle: 'Place the fence on the $x$-axis, express each two-segment path length with the Pythagorean theorem, and equate them.',
          solution:
            'Place a coordinate system with the locked gate at $(0, 0)$ and the east-west fence along the $x$-axis. Then:\n- Frances stands at $F = (0, -15)$.\n- The box of chocolates is at $B = (x, 0)$ with $x > 0$.\n- The eastern unlocked gate is at $G_1 = (x + 9, 0)$, and the western unlocked gate is at $G_2 = (-8, 0)$.\n\nCompute the total walking distance via each unlocked gate:\n- Via $G_1$: the straight-line distance from $F$ to $G_1$ plus $9$ meters back west to $B$ is\n  $$\\sqrt{(x + 9)^2 + 15^2} + 9.$$\n- Via $G_2$: the straight-line distance from $F$ to $G_2$ is $\\sqrt{8^2 + 15^2} = \\sqrt{289} = 17$, plus $x + 8$ meters east along the fence to $B$, giving\n  $$17 + (x + 8) = x + 25.$$\n\nEquating the two distances:\n$$\\sqrt{(x + 9)^2 + 225} + 9 = x + 25 \\implies \\sqrt{(x + 9)^2 + 225} = x + 16.$$\nSquaring both sides:\n$$(x + 9)^2 + 225 = (x + 16)^2 \\implies x^2 + 18x + 306 = x^2 + 32x + 256 \\implies 14x = 50 \\implies x = \\frac{25}{7} = 3\\frac{4}{7}.$$',
          rubric: [
            { code: 'M4', text: 'Equates $\\sqrt{(x+9)^2 + 15^2} + 9 = 17 + x + 8$ and squares to get $14x = 50$.' },
            { code: 'A2', text: 'Finds $x = \\frac{25}{7} = 3\\frac{4}{7}$, option C.' }
          ]
        },
        {
          label: '8',
          marks: 6,
          prompt:
            'Emmy says to Max, "I ordered $36$ math club sweatshirts today." Max asks, "How much did each shirt cost?" Emmy responds, "I\'ll give you a hint. The total cost was $\\underline{A}\\,\\underline{B}\\,\\underline{B}.\\underline{B}\\,\\underline{A}$ dollars, where $A$ and $B$ are digits and $A \\neq 0$." After a pause, Max says, "That was a good price." What is $A + B$?\n\nA. $7$\nB. $8$\nC. $11$\nD. $14$\nE. $15$',
          answer: 'C. $11$',
          principle: 'Convert the total cost to cents and apply divisibility by $36 = 4 \\times 9$ to determine the digits $A$ and $B$.',
          solution:
            'In cents, the total cost is the $5$-digit integer $\\underline{A}\\,\\underline{B}\\,\\underline{B}\\,\\underline{B}\\,\\underline{A}$, which must be divisible by $36$ (assuming each shirt costs an integer number of cents). Since $36 = 4 \\times 9$ with $\\gcd(4, 9) = 1$, the number must be divisible by both $4$ and $9$.\n- Divisibility by $4$: the last two digits $\\underline{B}\\,\\underline{A}$ must be divisible by $4$, so $A$ is even. Since $A \\neq 0$, $A \\in \\{2, 4, 6, 8\\}$.\n- Divisibility by $9$: the sum of digits $2A + 3B$ must be a multiple of $9$.\n\nTest each even $A \\in \\{2, 4, 6, 8\\}$:\n- $A = 2$: $4 + 3B \\equiv 0 \\pmod 9$ has no solution because $3 \\nmid 4$.\n- $A = 4$: $8 + 3B \\equiv 0 \\pmod 9$ has no solution because $3 \\nmid 8$.\n- $A = 6$: $12 + 3B \\equiv 0 \\pmod 9 \\implies 3(4 + B) \\equiv 0 \\pmod 9 \\implies B \\equiv 2 \\pmod 3$, so $B \\in \\{2, 5, 8\\}$. Checking $4 \\mid \\underline{B}\\,6$: $26$ and $86$ are not divisible by $4$, while $56 = 4 \\times 14$ works!\n- $A = 8$: $16 + 3B \\equiv 0 \\pmod 9$ has no solution because $3 \\nmid 16$.\n\nThus $(A, B) = (6, 5)$ is the unique solution (total cost $655.56$ dollars, or $18.21$ dollars per shirt). Therefore,\n$$A + B = 6 + 5 = 11.$$',
          rubric: [
            { code: 'M4', text: 'Uses $4 \\mid \\underline{B}\\,\\underline{A}$ and $9 \\mid (2A + 3B)$ to deduce $A = 6$ and $B = 5$.' },
            { code: 'A2', text: 'Computes $A + B = 11$, option C.' }
          ]
        },
        {
          label: '9',
          marks: 6,
          prompt:
            'How many ordered triples of integers $(x, y, z)$ satisfy the following system of inequalities?\n$$\\begin{aligned} -x - y - z &\\le -2 \\\\ -x + y + z &\\le 2 \\\\ x - y + z &\\le 2 \\\\ x + y - z &\\le 2 \\end{aligned}$$\n\nA. $4$\nB. $8$\nC. $11$\nD. $15$\nE. $17$',
          answer: 'C. $11$',
          principle: 'Add pairs of inequalities to bound each individual variable and pairwise sum, then count all valid integer triples.',
          solution:
            'Rewrite the first inequality as $x + y + z \\ge 2$, and keep the remaining three:\n$$-x + y + z \\le 2, \\qquad x - y + z \\le 2, \\qquad x + y - z \\le 2.$$\nAdding pairs of the last three inequalities gives:\n- $(-x + y + z) + (x - y + z) \\le 4 \\implies 2z \\le 4 \\implies z \\le 2$,\n- similarly $x \\le 2$ and $y \\le 2$.\n\nAdding the first inequality $(-x - y - z \\le -2)$ to each of the other three gives:\n- $(-x - y - z) + (-x + y + z) \\le 0 \\implies -2x \\le 0 \\implies x \\ge 0$,\n- similarly $y \\ge 0$ and $z \\ge 0$.\n\nThus every solution satisfies $0 \\le x, y, z \\le 2$. Let $S = x + y + z$, so $2 \\le S \\le 6$, and rewrite the remaining three inequalities as $S - 2x \\le 2$, $S - 2y \\le 2$, and $S - 2z \\le 2$:\n1. If $S = 2$: the inequalities $2 - 2x \\le 2$, $2 - 2y \\le 2$, $2 - 2z \\le 2$ hold for all $x, y, z \\ge 0$. The number of nonnegative integer solutions to $x + y + z = 2$ is $\\binom{2 + 3 - 1}{2} = \\binom{4}{2} = 6$.\n2. If $S = 3$: each of $3 - 2x \\le 2$, $3 - 2y \\le 2$, $3 - 2z \\le 2$ requires $x, y, z \\ge 1$, giving only $(1, 1, 1)$ ($1$ solution).\n3. If $S = 4$: $4 - 2x \\le 2 \\implies x \\ge 1$, and similarly $y, z \\ge 1$. Since $x, y, z \\le 2$, the triples summing to $4$ with entries in $\\{1, 2\\}$ are permutations of $(2, 1, 1)$, giving $3$ solutions.\n4. If $S = 5$: $5 - 2x \\le 2$ requires $x \\ge 2$, and similarly $y, z \\ge 2$, which forces $S \\ge 6$—impossible ($0$ solutions).\n5. If $S = 6$: $6 - 2x \\le 2$ requires $x \\ge 2$, and since $x, y, z \\le 2$, only $(2, 2, 2)$ works ($1$ solution).\n\nTotal ordered triples: $6 + 1 + 3 + 0 + 1 = 11$.',
          rubric: [
            { code: 'M2', text: 'Derives the bounds $0 \\le x, y, z \\le 2$ by adding pairs of inequalities.' },
            { code: 'M2', text: 'Rewrites the system in terms of $S = x + y + z$ ($2 \\le S \\le 6$) and counts each case ($6 + 1 + 3 + 0 + 1$).' },
            { code: 'A2', text: 'Finds $11$ ordered triples, option C.' }
          ]
        },
        {
          label: '10',
          marks: 6,
          prompt:
            'Let $f(n) = n^3 - 5n^2 + 2n + 8$ and $g(n) = n^3 - 6n^2 + 5n + 12$. What is the sum of all integers $n$ such that $\\frac{f(n)}{g(n)}$ is an integer?\n\nA. $2$\nB. $3$\nC. $4$\nD. $5$\nE. $6$',
          answer: 'A. $2$',
          principle: 'Factor both cubics completely, cancel common factors while excluding values where $g(n) = 0$, and solve the remaining divisibility condition.',
          solution:
            'Factor $f(n)$ and $g(n)$ by checking small integer roots:\n- $f(-1) = -1 - 5 - 2 + 8 = 0$, and dividing by $n + 1$ gives $f(n) = (n + 1)(n^2 - 6n + 8) = (n + 1)(n - 2)(n - 4)$.\n- $g(-1) = -1 - 6 - 5 + 12 = 0$, and dividing by $n + 1$ gives $g(n) = (n + 1)(n^2 - 7n + 12) = (n + 1)(n - 3)(n - 4)$.\n\nFor $\\frac{f(n)}{g(n)}$ to be defined, we must have $g(n) \\neq 0$, so $n \\notin \\{-1, 3, 4\\}$. For all other integers $n$,\n$$\\frac{f(n)}{g(n)} = \\frac{n - 2}{n - 3} = 1 + \\frac{1}{n - 3}.$$\nFor this to be an integer, $n - 3$ must divide $1$, so $n - 3 = \\pm 1$, giving $n = 4$ or $n = 2$. Since $g(4) = 0$ makes $\\frac{f(4)}{g(4)}$ undefined, the only valid integer is $n = 2$ (where $\\frac{f(2)}{g(2)} = \\frac{0}{-6} = 0$). Hence the sum is $2$.',
          rubric: [
            { code: 'M4', text: 'Factors $f(n) = (n+1)(n-2)(n-4)$ and $g(n) = (n+1)(n-3)(n-4)$, reducing to $1 + \\frac{1}{n-3}$ for $n \\neq -1, 3, 4$.' },
            { code: 'A2', text: 'Excludes $n = 4$ (denominator zero) to obtain $n = 2$ only, sum $2$, option A.' }
          ]
        },
        {
          label: '11',
          marks: 6,
          prompt:
            'On Monday, $6$ students went to the tutoring center at the same time, and each one was randomly assigned to one of the $6$ tutors on duty. On Tuesday, the same $6$ students showed up, the same $6$ tutors were on duty, and the students were again randomly assigned to the tutors. What is the probability that exactly $2$ students met with the same tutor both Monday and Tuesday?\n\nA. $\\frac{1}{16}$\nB. $\\frac{3}{16}$\nC. $\\frac{1}{4}$\nD. $\\frac{3}{8}$\nE. $\\frac{1}{2}$',
          answer: 'B. $\\frac{3}{16}$',
          principle: 'Model Tuesday\'s assignment relative to Monday\'s as a uniformly random permutation of $6$ tutors and count permutations with exactly $2$ fixed points using derangements.',
          solution:
            'Each of the $6$ students who arrived at the same time is paired one-to-one with one of the $6$ tutors on duty. Without loss of generality, label the tutors $1, 2, 3, 4, 5, 6$ according to the student they tutored on Monday.\nOn Tuesday, there are $6! = 720$ equally likely permutations of the $6$ tutors assigned to the $6$ students. A student meets the same tutor on both days precisely when their position is a fixed point of Tuesday\'s permutation.\nTo have exactly $2$ fixed points:\n- Choose which $2$ of the $6$ students get the same tutor in $\\binom{6}{2} = 15$ ways.\n- The remaining $4$ students must all receive a different tutor from Monday, which is a derangement of $4$ items. The number of derangements of $4$ elements is\n  $$D_4 = 4!\\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!}\\right) = 24 - 24 + 12 - 4 + 1 = 9.$$\n\nTherefore, the desired probability is\n$$\\frac{\\binom{6}{2} D_4}{6!} = \\frac{15 \\times 9}{720} = \\frac{135}{720} = \\frac{3}{16}.$$',
          rubric: [
            { code: 'M4', text: 'Counts $\\binom{6}{2} D_4 = 15 \\times 9 = 135$ permutations with exactly $2$ fixed points out of $6! = 720$.' },
            { code: 'A2', text: 'Simplifies $\\frac{135}{720} = \\frac{3}{16}$, option B.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'The figure below shows an equilateral triangle, a rhombus with a $60^\\circ$ angle, and a regular hexagon, each of them containing some mutually tangent congruent disks. Let $T$, $R$, and $H$, respectively, denote the ratio in each case of the total area of the disks to the area of the enclosing polygon. Which of the following is true?\n\nA. $T = H = R$\nB. $H < R = T$\nC. $H = R < T$\nD. $H < R < T$\nE. $H < T < R$',
          figures: [
            {
              src: '/papers/amc-10b-2025/fig-12.webp',
              alt: 'Three polygons containing tangent congruent gray disks: an equilateral triangle with 3 disks, a 60-degree rhombus with 2 disks, and a regular hexagon with 6 disks along its sides.',
              caption: 'Disk packings inside an equilateral triangle, a 60-degree rhombus, and a regular hexagon.'
            }
          ],
          answer: 'C. $H = R < T$',
          principle: 'Normalize the disk radius to $r = 1$ in each figure, compute the enclosing polygon\'s area in terms of $r$, and compare the area ratios.',
          solution:
            'In each polygon, scale so that every disk has radius $r = 1$ (area $\\pi$ per disk):\n1. **Equilateral triangle ($3$ disks):** The centers of the $3$ disks form an equilateral triangle of side $2$. At each corner, the angle is $60^\\circ$, so the distance from a disk center to the nearest vertex along the side direction is $\\cot 30^\\circ = \\sqrt{3}$. Hence the triangle\'s side length is $s_T = 2 + 2\\sqrt{3}$, and its area is\n   $$\\text{Area}_T = \\frac{\\sqrt{3}}{4}(2 + 2\\sqrt{3})^2 = \\sqrt{3}(4 + 2\\sqrt{3}) = 6 + 4\\sqrt{3}.$$\n   Thus\n   $$T = \\frac{3\\pi}{6 + 4\\sqrt{3}} \\approx 0.729.$$\n2. **Rhombus with a $60^\\circ$ angle ($2$ disks):** The two disk centers lie along the longer diagonal at distance $2$ from each other, and each is at distance $\\frac{1}{\\sin 30^\\circ} = 2$ from its nearest acute vertex. Thus the longer diagonal has length $2 + 2 + 2 = 6$, and the shorter diagonal has length $\\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$. The rhombus area is\n   $$\\text{Area}_R = \\frac{1}{2} \\cdot 6 \\cdot 2\\sqrt{3} = 6\\sqrt{3} \\implies R = \\frac{2\\pi}{6\\sqrt{3}} = \\frac{\\pi}{3\\sqrt{3}} \\approx 0.605.$$\n3. **Regular hexagon ($6$ disks):** Each of the $6$ disks is tangent to one side at its midpoint and to its two neighboring disks. The $6$ disk centers form a regular hexagon of side $2$, so each disk center is at distance $2$ from the center of the outer hexagon and extends $1$ unit further radially to the midpoint of its tangent side. Thus the outer regular hexagon has apothem $a_H = 2 + 1 = 3$ and side length $s_H = \\frac{2a_H}{\\sqrt{3}} = 2\\sqrt{3}$. Its area is\n   $$\\text{Area}_H = 6 \\cdot \\frac{1}{2} \\cdot s_H \\cdot a_H = 3(2\\sqrt{3})(3) = 18\\sqrt{3} \\implies H = \\frac{6\\pi}{18\\sqrt{3}} = \\frac{\\pi}{3\\sqrt{3}}.$$\n\nNotice that $H = R = \\frac{\\pi}{3\\sqrt{3}}$, and comparing $T$ with $R$:\n$$6 + 4\\sqrt{3} < 9\\sqrt{3} \\iff 6 < 5\\sqrt{3} \\iff 36 < 75,$$\nso $\\frac{3\\pi}{6 + 4\\sqrt{3}} > \\frac{3\\pi}{9\\sqrt{3}} = \\frac{\\pi}{3\\sqrt{3}}$. Hence $H = R < T$.',
          rubric: [
            { code: 'M2', text: 'Computes $T = \\frac{3\\pi}{6 + 4\\sqrt{3}}$ and $R = \\frac{\\pi}{3\\sqrt{3}}$.' },
            { code: 'M2', text: 'Finds hexagon apothem $3r$ to obtain $H = \\frac{6\\pi}{18\\sqrt{3}} = \\frac{\\pi}{3\\sqrt{3}}$.' },
            { code: 'A2', text: 'Concludes $H = R < T$, option C.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'The altitude to the hypotenuse of a $30\\text{--}60\\text{--}90^\\circ$ right triangle is divided into two segments of lengths $x < y$ by the median to the shortest side of the triangle. What is the ratio $\\frac{x}{x + y}$?\n\nA. $\\frac{3}{7}$\nB. $\\frac{\\sqrt{3}}{4}$\nC. $\\frac{4}{9}$\nD. $\\frac{5}{11}$\nE. $\\frac{4\\sqrt{3}}{15}$',
          answer: 'A. $\\frac{3}{7}$',
          principle: 'Place the $30\\text{--}60\\text{--}90^\\circ$ triangle on coordinate axes and intersect the altitude to the hypotenuse with the median to the shortest leg.',
          solution:
            'Set up coordinates for the $30\\text{--}60\\text{--}90^\\circ$ triangle with right angle at $A = (0, 0)$, shortest leg $AC = 1$ along the $y$-axis so $C = (0, 1)$, and longer leg $AB = \\sqrt{3}$ along the $x$-axis so $B = (\\sqrt{3}, 0)$ (hypotenuse $BC = 2$).\n- The altitude from $A$ to $\\overline{BC}$ lies along the line $y = \\sqrt{3}\\,x$ (since $\\overline{BC}$ has slope $-\\frac{1}{\\sqrt{3}}$). Intersecting $y = \\sqrt{3}\\,x$ with $\\overline{BC}$ ($\\frac{x}{\\sqrt{3}} + y = 1$) gives\n  $$\\frac{x}{\\sqrt{3}} + \\sqrt{3}\\,x = 1 \\implies \\frac{4x}{\\sqrt{3}} = 1 \\implies x_H = \\frac{\\sqrt{3}}{4},$$\n  so the foot of the altitude is $H = \\left(\\frac{\\sqrt{3}}{4}, \\frac{3}{4}\\right)$.\n- The median to the shortest side $\\overline{AC}$ joins $B(\\sqrt{3}, 0)$ to the midpoint $M\\left(0, \\frac{1}{2}\\right)$ of $\\overline{AC}$, so its equation is\n  $$\\frac{x}{\\sqrt{3}} + 2y = 1.$$\n\nLet $P$ be the intersection of altitude $\\overline{AH}$ and median $\\overline{BM}$. Substituting $y = \\sqrt{3}\\,x$ into the median equation:\n$$\\frac{x}{\\sqrt{3}} + 2\\sqrt{3}\\,x = 1 \\implies \\frac{7x}{\\sqrt{3}} = 1 \\implies x_P = \\frac{\\sqrt{3}}{7}.$$\nSince $A$, $P$, and $H$ are collinear along $y = \\sqrt{3}\\,x$, the ratio of lengths matches the ratio of $x$-coordinates:\n$$\\frac{AP}{AH} = \\frac{\\sqrt{3}/7}{\\sqrt{3}/4} = \\frac{4}{7}, \\qquad \\frac{PH}{AH} = 1 - \\frac{4}{7} = \\frac{3}{7}.$$\nBecause $x < y$, the shorter segment has length $x = PH$ and $x + y = AH$, so\n$$\\frac{x}{x + y} = \\frac{3}{7}.$$',
          rubric: [
            { code: 'M4', text: 'Finds the altitude foot $H$ ($x_H = \\frac{\\sqrt{3}}{4}$) and intersection $P$ with the median ($x_P = \\frac{\\sqrt{3}}{7}$).' },
            { code: 'A2', text: 'Identifies $x = PH < y = AP$ to get $\\frac{x}{x + y} = \\frac{3}{7}$, option A.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'Nine athletes, no two of whom are the same height, try out for the basketball team. One at a time, they draw a wristband at random, without replacement, from a bag containing $3$ blue bands, $3$ red bands, and $3$ green bands. They are divided into a blue group, a red group, and a green group. The tallest member of each group is named the group captain. What is the probability that the group captains are the three tallest athletes?\n\nA. $\\frac{2}{9}$\nB. $\\frac{2}{7}$\nC. $\\frac{9}{28}$\nD. $\\frac{1}{3}$\nE. $\\frac{3}{8}$',
          answer: 'C. $\\frac{9}{28}$',
          principle: 'The three tallest athletes are the three group captains if and only if they belong to three different color groups.',
          solution:
            'The three tallest athletes are the tallest members of their respective groups (and hence the three group captains) if and only if no two of them land in the same group—that is, they receive one blue, one red, and one green wristband.\nFocus only on which $3$ of the $9$ wristbands are drawn by the three tallest athletes (in order, say, from tallest to third-tallest). Equivalently, out of the $\\binom{9}{3} = 84$ equally likely subsets of $3$ positions (or wristbands) assigned to the three tallest athletes, the favorable assignments place one of the three in each of the $3$ color groups of size $3$, which happens in\n$$3 \\times 3 \\times 3 = 27\\text{ ways}.$$\nTherefore, the probability is\n$$\\frac{27}{84} = \\frac{9}{28}.$$',
          rubric: [
            { code: 'M4', text: 'Recognizes the event occurs iff the top $3$ athletes are in distinct groups, giving $\\frac{3^3}{\\binom{9}{3}}$.' },
            { code: 'A2', text: 'Simplifies $\\frac{27}{84} = \\frac{9}{28}$, option C.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'The sum\n$$\\sum_{k=1}^{\\infty} \\frac{1}{k^3 + 6k^2 + 8k}$$\ncan be expressed as $\\frac{a}{b}$, where $a$ and $b$ are relatively prime positive integers. What is $a + b$?\n\nA. $89$\nB. $97$\nC. $102$\nD. $107$\nE. $129$',
          answer: 'D. $107$',
          principle: 'Factor the denominator as $k(k+2)(k+4)$ and decompose into telescoping differences.',
          solution:
            'Factor the denominator:\n$$k^3 + 6k^2 + 8k = k(k + 2)(k + 4).$$\nUse partial fractions to write the general term as a difference of two consecutive-index expressions:\n$$\\frac{1}{k(k + 2)(k + 4)} = \\frac{1}{4}\\left(\\frac{1}{k(k + 2)} - \\frac{1}{(k + 2)(k + 4)}\\right).$$\nSumming from $k = 1$ to $\\infty$, the series telescopes with step $2$, leaving only the $k = 1$ and $k = 2$ initial terms (while the tail vanishes as $k \\to \\infty$):\n$$\\sum_{k=1}^{\\infty} \\frac{1}{k(k + 2)(k + 4)} = \\frac{1}{4}\\left(\\frac{1}{1 \\cdot 3} + \\frac{1}{2 \\cdot 4}\\right) = \\frac{1}{4}\\left(\\frac{1}{3} + \\frac{1}{8}\\right) = \\frac{1}{4} \\cdot \\frac{11}{24} = \\frac{11}{96}.$$\nSince $\\gcd(11, 96) = 1$, we have $a = 11$ and $b = 96$, so\n$$a + b = 11 + 96 = 107.$$',
          rubric: [
            { code: 'M4', text: 'Factors $k(k+2)(k+4)$ and telescopes $\\frac{1}{4}\\sum\\left(\\frac{1}{k(k+2)} - \\frac{1}{(k+2)(k+4)}\\right)$ to $\\frac{11}{96}$.' },
            { code: 'A2', text: 'Computes $a + b = 11 + 96 = 107$, option D.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'A circle has been divided into $6$ sectors of different sizes. Then $2$ of the sectors are painted red, $2$ painted green, and $2$ painted blue so that no two neighboring sectors are painted the same color. One such coloring is shown below.\n\nHow many different colorings are possible?\n\nA. $12$\nB. $16$\nC. $18$\nD. $24$\nE. $28$',
          figures: [
            {
              src: '/papers/amc-10b-2025/fig-16.webp',
              alt: 'A circle divided into six unequal sectors colored around the circle as red, green, blue, green, red, and blue so no two adjacent sectors share a color.',
              caption: 'Sample valid 6-sector coloring using two red, two green, and two blue sectors.'
            }
          ],
          answer: 'D. $24$',
          principle: 'Treat the $6$ unequal sectors as distinct labeled positions around a cycle and count valid colorings by symmetry of the alternating or block pattern.',
          solution:
            'Because the $6$ sectors have different sizes, all $6$ positions are distinguishable (rotations and reflections produce distinct colorings).\nLabel the sectors $1, 2, 3, 4, 5, 6$ in cyclic order, and first count colorings with sector $1$ painted red (then multiply by $3$ for the choice of color of sector $1$, or count directly via the other red sector):\n- The second red sector cannot be adjacent to sector $1$ (so not $2$ or $6$), leaving $3$ choices: sector $3$, $4$, or $5$.\n  - **Case 1: The two red sectors are opposite ($1$ and $4$).**\n    The remaining two arcs of length $2$ are $(2, 3)$ and $(5, 6)$. Each arc must contain one green and one blue sector, which can be ordered in $2$ ways for $(2, 3)$ and $2$ ways for $(5, 6)$, giving $2 \\times 2 = 4$ colorings.\n  - **Case 2: The two red sectors are separated by one sector ($1$ and $3$, or $1$ and $5$).**\n    By symmetry, consider red at $1$ and $3$. Sector $2$ (between them) can be green or blue ($2$ choices). Suppose sector $2$ is green; then the remaining three consecutive sectors $(4, 5, 6)$ must be colored with $1$ green and $2$ blues without adjacent repeats, forcing $(4, 5, 6) = (\\text{blue}, \\text{green}, \\text{blue})$ ($1$ choice). Thus each of $3$ and $5$ gives $2 \\times 1 = 2$ colorings, for $2 + 2 = 4$ colorings in Case 2.\n\nSo there are $4 + 4 = 8$ valid colorings where sector $1$ is red. Multiplying by $3$ choices for the color of sector $1$ gives\n$$3 \\times 8 = 24\\text{ different colorings}.$$',
          rubric: [
            { code: 'M4', text: 'Fixes sector $1$\'s color ($3$ ways) and counts valid placements of the second matching sector ($4 + 4 = 8$).' },
            { code: 'A2', text: 'Multiplies $3 \\times 8 = 24$, option D.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'Consider a decreasing sequence of $n$ positive integers $x_1 > x_2 > \\cdots > x_n$ that satisfies the following conditions: The average of the first $3$ terms in the sequence is $2025$. For all $4 \\le k \\le n$, the average of the first $k$ terms is $1$ less than the average of the first $k - 1$ terms. What is the greatest possible value of $n$?\n\nA. $1013$\nB. $1014$\nC. $1016$\nD. $2016$\nE. $2025$',
          answer: 'B. $1014$',
          principle: 'Express the partial sums $S_k$ from the decreasing averages to recover $x_k = S_k - S_{k-1}$ for $k \\ge 4$, then enforce $x_n \\ge 1$.',
          solution:
            'Let $A_k = \\frac{x_1 + \\cdots + x_k}{k}$ be the average of the first $k$ terms, and $S_k = k A_k$ their sum. We are given $A_3 = 2025$ and $A_k = A_{k-1} - 1$ for $4 \\le k \\le n$, so\n$$A_k = 2025 - (k - 3) = 2028 - k \\quad \\text{for } 3 \\le k \\le n.$$\nHence $S_k = k(2028 - k)$ for $3 \\le k \\le n$. For every $k \\ge 4$, the $k$-th term is uniquely determined:\n$$x_k = S_k - S_{k-1} = k(2028 - k) - (k - 1)(2029 - k) = 2029 - 2k.$$\nThis sequence $x_4 = 2021, x_5 = 2019, \\dots$ is strictly decreasing by $2$ at each step. To make $x_1 > x_2 > x_3 > x_4 = 2021$ with average $2025$, we can choose $(x_1, x_2, x_3) = (2026, 2025, 2024)$, which satisfies $2026 > 2025 > 2024 > 2021$ and $\\frac{2026+2025+2024}{3} = 2025$.\nFinally, $x_n$ must be a positive integer:\n$$x_n = 2029 - 2n \\ge 1 \\implies 2n \\le 2028 \\implies n \\le 1014.$$\nFor $n = 1014$, $x_{1014} = 2029 - 2028 = 1$, so the greatest possible value of $n$ is $1014$.',
          rubric: [
            { code: 'M4', text: 'Derives $S_k = k(2028 - k)$ and $x_k = 2029 - 2k$ for $k \\ge 4$, and verifies valid $x_1 > x_2 > x_3 > 2021$.' },
            { code: 'A2', text: 'Solves $2029 - 2n \\ge 1$ to obtain $n = 1014$, option B.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'What is the ones digit of the sum\n$$\\lfloor \\sqrt{1} \\rfloor + \\lfloor \\sqrt{2} \\rfloor + \\lfloor \\sqrt{3} \\rfloor + \\cdots + \\lfloor \\sqrt{2025} \\rfloor?$$\n(Recall that $\\lfloor x \\rfloor$ represents the greatest integer less than or equal to $x$.)\n\nA. $1$\nB. $2$\nC. $3$\nD. $5$\nE. $8$',
          answer: 'D. $5$',
          principle: 'Group terms with the same floor value $m = \\lfloor \\sqrt{k} \\rfloor$ and reduce the resulting sum modulo $10$.',
          solution:
            'Note that $45^2 = 2025$. For each integer $m$ with $1 \\le m \\le 44$, we have $\\lfloor \\sqrt{k} \\rfloor = m$ precisely when $m^2 \\le k \\le (m+1)^2 - 1$, which covers $(m+1)^2 - m^2 = 2m + 1$ consecutive integers. The final term $k = 2025$ gives $\\lfloor \\sqrt{2025} \\rfloor = 45$. Therefore, the sum equals\n$$S = 45 + \\sum_{m=1}^{44} m(2m + 1) = 45 + 2\\sum_{m=1}^{44} m^2 + \\sum_{m=1}^{44} m.$$\nUsing $\\sum_{m=1}^{n} m^2 = \\frac{n(n+1)(2n+1)}{6}$ and $\\sum_{m=1}^{n} m = \\frac{n(n+1)}{2}$ with $n = 44$:\n$$2\\sum_{m=1}^{44} m^2 = \\frac{44 \\cdot 45 \\cdot 89}{3} = 44 \\cdot 15 \\cdot 89 = 58740, \\qquad \\sum_{m=1}^{44} m = \\frac{44 \\cdot 45}{2} = 990.$$\nHence\n$$S = 45 + 58740 + 990 = 59775,$$\nwhose ones digit is $5$.',
          rubric: [
            { code: 'M4', text: 'Groups terms into $45 + \\sum_{m=1}^{44} m(2m + 1)$ and evaluates the power sums.' },
            { code: 'A2', text: 'Finds $S = 59775$, giving ones digit $5$, option D.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'A container has a $1 \\times 1$ square bottom, a $3 \\times 3$ open square top, and four congruent trapezoidal sides, as shown. Starting when the container is empty, a hose that runs water at a constant rate takes $35$ minutes to fill the container up to the midline of the trapezoids.\n\nHow many more minutes will it take to fill the remainder of the container?\n\nA. $70$\nB. $85$\nC. $90$\nD. $95$\nE. $105$',
          figures: [
            {
              src: '/papers/amc-10b-2025/fig-19.webp',
              alt: 'Perspective view of an open-top square frustum container with a small square base, larger square top, and a horizontal midline marked halfway up its four trapezoidal faces.',
              caption: 'Square frustum container filled up to the midline of its trapezoidal sides.'
            }
          ],
          answer: 'D. $95$',
          principle: 'Compare the volumes of the bottom and top half-frustums using the square frustum volume formula $V = \\frac{h}{3}(s_1^2 + s_1 s_2 + s_2^2)$.',
          solution:
            'Because the side faces are congruent trapezoids, the horizontal cross-section at the midline is a square of side length\n$$s_{\\text{mid}} = \\frac{1 + 3}{2} = 2.$$\nBoth the lower half (from the $1 \\times 1$ base to the $2 \\times 2$ midline) and the upper half (from the $2 \\times 2$ midline to the $3 \\times 3$ top) are square frustums of the same vertical height $h$. Using the frustum volume formula $V = \\frac{h}{3}(a^2 + ab + b^2)$:\n$$V_{\\text{lower}} = \\frac{h}{3}(1^2 + 1 \\cdot 2 + 2^2) = \\frac{7h}{3}, \\qquad V_{\\text{upper}} = \\frac{h}{3}(2^2 + 2 \\cdot 3 + 3^2) = \\frac{19h}{3}.$$\nSince the hose supplies water at a constant rate, the filling time is proportional to volume. Given that the lower half takes $35$ minutes, the upper half takes\n$$35 \\times \\frac{19}{7} = 5 \\times 19 = 95\\text{ minutes}.$$',
          rubric: [
            { code: 'M4', text: 'Finds midline side $2$ and the volume ratio $V_{\\text{upper}} : V_{\\text{lower}} = (4 + 6 + 9) : (1 + 2 + 4) = 19 : 7$.' },
            { code: 'A2', text: 'Computes $35 \\times \\frac{19}{7} = 95$ minutes, option D.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'Four congruent semicircles are inscribed in a square of side length $1$ so that their diameters are on the sides of the square, one endpoint of each diameter is at a vertex of the square, and adjacent semicircles are tangent to each other. A small circle centered at the center of the square is tangent to each of the four semicircles, as shown below. The diameter of the small circle can be written as $(\\sqrt{a} + b)(\\sqrt{c} + d)$, where $a$, $b$, $c$, and $d$ are integers. What is $a + b + c + d$?\n\nA. $3$\nB. $5$\nC. $8$\nD. $9$\nE. $11$',
          figures: [
            {
              src: '/papers/amc-10b-2025/fig-20.webp',
              alt: 'A unit square containing four congruent semicircles on its four sides touching cyclically, and a small circle at the square center tangent to all four semicircles.',
              caption: 'Four congruent inscribed semicircles and central tangent circle inside a unit square.'
            }
          ],
          answer: 'A. $3$',
          principle: 'Use coordinate geometry to find the semicircle radius $r$ from tangency between adjacent semicircles, then find the central circle radius $R$ from the distance to the square\'s center.',
          solution:
            'Place the unit square at $[0, 1]^2$ with center $O = \\left(\\frac{1}{2}, \\frac{1}{2}\\right)$. Let each semicircle have radius $r$. By $90^\\circ$ rotational symmetry, we can take the centers of two adjacent semicircles to be $C_1 = (r, 0)$ (on the bottom side, with diameter endpoint at $(0, 0)$) and $C_2 = (1, r)$ (on the right side, with diameter endpoint at $(1, 0)$).\nBecause these two semicircles are externally tangent, the distance between their centers is $2r$:\n$$(1 - r)^2 + r^2 = (2r)^2 \\implies 1 - 2r + 2r^2 = 4r^2 \\implies 2r^2 + 2r - 1 = 0.$$\nSolving for $r > 0$ gives\n$$r = \\frac{-2 + \\sqrt{4 + 8}}{4} = \\frac{\\sqrt{3} - 1}{2}.$$\nLet $R$ be the radius of the small central circle. Since it is centered at $O\\left(\\frac{1}{2}, \\frac{1}{2}\\right)$ and externally tangent to the semicircle centered at $C_1(r, 0)$, the distance $OC_1$ equals $R + r$. Computing $OC_1^2$:\n$$OC_1^2 = \\left(\\frac{1}{2} - r\\right)^2 + \\left(\\frac{1}{2}\\right)^2 = \\left(\\frac{2 - \\sqrt{3}}{2}\\right)^2 + \\frac{1}{4} = \\frac{7 - 4\\sqrt{3} + 1}{4} = 2 - \\sqrt{3}.$$\nNotice that $\\left(\\frac{\\sqrt{6} - \\sqrt{2}}{2}\\right)^2 = \\frac{8 - 4\\sqrt{3}}{4} = 2 - \\sqrt{3}$, so $OC_1 = \\frac{\\sqrt{6} - \\sqrt{2}}{2}$. Therefore,\n$$2R = 2(OC_1 - r) = (\\sqrt{6} - \\sqrt{2}) - (\\sqrt{3} - 1) = (\\sqrt{3} - 1)(\\sqrt{2} - 1).$$\nMatching $(\\sqrt{a} + b)(\\sqrt{c} + d)$ gives $\\{a, c\\} = \\{3, 2\\}$ and $b = d = -1$, so\n$$a + b + c + d = 3 - 1 + 2 - 1 = 3.$$',
          rubric: [
            { code: 'M2', text: 'Finds the semicircle radius $r = \\frac{\\sqrt{3} - 1}{2}$ from $(1 - r)^2 + r^2 = 4r^2$.' },
            { code: 'M2', text: 'Computes $OC_1 = \\sqrt{2 - \\sqrt{3}} = \\frac{\\sqrt{6} - \\sqrt{2}}{2}$ and small diameter $2R = \\sqrt{6} - \\sqrt{2} - \\sqrt{3} + 1$.' },
            { code: 'A2', text: 'Factors $(\\sqrt{3} - 1)(\\sqrt{2} - 1)$ and obtains $a + b + c + d = 3$, option A.' }
          ]
        },
        {
          label: '21',
          marks: 6,
          prompt:
            'Each of the $9$ squares in a $3 \\times 3$ grid is to be colored red, blue, or yellow in such a way that each red square shares an edge with at least one blue square, each blue square shares an edge with at least one yellow square, and each yellow square shares an edge with at least one red square. Colorings that can be obtained from one another by rotations and/or reflections are to be considered the same. How many different colorings are possible?\n\nA. $3$\nB. $9$\nC. $12$\nD. $18$\nE. $27$',
          answer: 'C. $12$',
          principle: 'Analyze the directed requirement $R \\to B \\to Y \\to R$ around the center square and the $4$-cycle of edge/corner adjacency up to dihedral symmetry $D_4$.',
          solution:
            'Write the requirement as a directed rule: every red ($R$) square must share an edge with a blue ($B$) square, every $B$ with a yellow ($Y$), and every $Y$ with an $R$. Since rotations and reflections fix the center square, orbits with different center colors are disjoint; by cyclic symmetry of $(R, B, Y)$, the total number of distinct colorings is $3$ times the number of $D_4$-distinct valid colorings with center $B$.\n\nAssume the center square is $B$. Since the center requires a $Y$ neighbor, at least one of the four edge-midpoints ($N, E, S, W$) is $Y$. Also, each corner shares edges only with two adjacent edge-midpoints, so a corner $R$ requires a $B$ edge-midpoint neighbor, a corner $B$ requires a $Y$ edge-midpoint neighbor, and a corner $Y$ requires an $R$ edge-midpoint neighbor.\n\nFirst show that no valid coloring can have $2$ or more $Y$ edge-midpoints:\n- **Four $Y$ edge-midpoints:** No edge-midpoint is $B$, so no corner can be $R$, leaving every $Y$ edge-midpoint without an $R$ neighbor.\n- **Three $Y$ edge-midpoints (say $N, E, S = Y$):** Corners $NE$ and $SE$ touch only $Y$s, forcing $NE = SE = B$. Then $N(Y)$ forces $NW = R$ (which forces $W = B$), and $S(Y)$ forces $SW = R$. Now $W(B)$ touches only $R, R, B$, so it has no $Y$ neighbor.\n- **Two opposite $Y$ edge-midpoints (say $N, S = Y$):** Because $N(Y)$ requires an $R$ corner and a corner $R$ requires a $B$ edge-midpoint, at least one of $E, W$ is $B$ (say $W = B$). Then $W(B)$ needs a $Y$ corner ($NW$ or $SW$), which in turn needs an $R$ edge-midpoint—impossible since its neighbors are $W = B$ and $N = S = Y$.\n- **Two adjacent $Y$ edge-midpoints (say $N, E = Y$):** Corner $NE$ touches only $Y$s, so $NE = B$. Since $N(Y)$ needs an $R$ corner, $NW = R$, forcing $W = B$; similarly $E(Y)$ needs $SE = R$, forcing $S = B$. Then $SW$ touches only $W(B)$ and $S(B)$, so $SW = R$, leaving $W(B)$ and $S(B)$ with no $Y$ neighbor.\n\nTherefore, **exactly one** edge-midpoint is $Y$. Up to rotation, place $W = Y$. Since $W(Y)$ needs an $R$ corner and an $R$ corner needs a $B$ edge-midpoint, up to vertical reflection we may take $NW = R$ and $N = B$. Now $N(B)$ only touches $NW(R)$, center $B$, and $NE$, so $NE = Y$; in turn $NE(Y)$ forces $E = R$.\n\nWith $NW = R$, $N = B$, $NE = Y$, $W = Y$, center $B$, and $E = R$ all fixed, $S$ must be $B$ or $R$ (since $W$ is the sole $Y$ edge-midpoint):\n- **If $S = B$:** $S(B)$ needs a $Y$ corner; $SW$ cannot be $Y$ (its neighbors $W = Y$ and $S = B$ include no $R$), so $SE = Y$ (which touches $E = R$). Then $SW$ touches $W = Y$ and $S = B$, allowing $SW \\in \\{R, B\\}$ ($2$ colorings).\n- **If $S = R$:** $SE$ touches $E = R$ and $S = R$, forcing $SE = Y$. Meanwhile $SW$ touches $W = Y$ and $S = R$, allowing $SW \\in \\{B, Y\\}$ ($2$ colorings).\n\nAll $4$ resulting colorings with center $B$ are distinct under $D_4$ (they have distinct color counts and edge-midpoint patterns: $(3R,3B,3Y)$ with one $R$ edge, $(2R,4B,3Y)$, $(3R,3B,3Y)$ with two $R$ edges, and $(3R,2B,4Y)$). Multiplying by $3$ choices for the center color yields $3 \\times 4 = 12$ distinct colorings.',
          rubric: [
            { code: 'M4', text: 'Analyzes valid colorings by center color and edge-midpoint constraints.' },
            { code: 'A2', text: 'Finds $12$ distinct colorings up to rotation and reflection, option C.' }
          ]
        },
        {
          label: '22',
          marks: 6,
          prompt:
            'A seven-digit positive integer is chosen at random. What is the probability that the number is divisible by $11$, given that the sum of its digits is $61$?\n\nA. $\\frac{3}{14}$\nB. $\\frac{3}{11}$\nC. $\\frac{2}{7}$\nD. $\\frac{4}{11}$\nE. $\\frac{3}{7}$',
          answer: 'A. $\\frac{3}{14}$',
          principle: 'Represent each digit by its deficit $9 - d_i$ from $9$, then apply the alternating-sum test for divisibility by $11$.',
          solution:
            'Let the seven-digit integer be $d_1 d_2 d_3 d_4 d_5 d_6 d_7$. The maximum possible digit sum is $7 \\times 9 = 63$, so the deficits $a_i = 9 - d_i \\ge 0$ satisfy\n$$a_1 + a_2 + \\cdots + a_7 = 63 - 61 = 2.$$\nSince $a_i \\le 2$, every digit $d_i \\ge 7 \\ge 1$, so the leading-digit restriction $d_1 \\neq 0$ is automatically satisfied for all solutions. The number of nonnegative integer solutions to $a_1 + \\cdots + a_7 = 2$ is\n$$\\binom{2 + 7 - 1}{2} = \\binom{8}{2} = 28$$\n($7$ integers with one $7$ and six $9$s, plus $\\binom{7}{2} = 21$ integers with two $8$s and five $9$s).\n\nFor divisibility by $11$, the alternating sum must satisfy\n$$(d_1 + d_3 + d_5 + d_7) - (d_2 + d_4 + d_6) \\equiv 0 \\pmod{11}.$$\nSubstituting $d_i = 9 - a_i$ gives\n$$9 - (a_1 + a_3 + a_5 + a_7) + (a_2 + a_4 + a_6) \\equiv 0 \\pmod{11}.$$\nLet $E = a_2 + a_4 + a_6$ and $O = a_1 + a_3 + a_5 + a_7$, so $O + E = 2$ and $O - E = 2 - 2E$. The congruence becomes\n$$9 - (2 - 2E) \\equiv 0 \\pmod{11} \\implies 2E + 7 \\equiv 0 \\pmod{11} \\implies 2E \\equiv 4 \\pmod{11} \\implies E \\equiv 2 \\pmod{11}.$$\nSince $0 \\le E \\le 2$, we must have $E = 2$ (and $O = 0$). Thus both deficit units must lie in the $3$ even-indexed positions $\\{a_2, a_4, a_6\\}$, which occurs in\n$$\\binom{2 + 3 - 1}{2} = \\binom{4}{2} = 6\\text{ ways}.$$\nHence the probability is $\\frac{6}{28} = \\frac{3}{14}$.',
          rubric: [
            { code: 'M4', text: 'Counts $\\binom{8}{2} = 28$ valid $7$-digit integers and shows $11 \\mid N \\iff a_2 + a_4 + a_6 = 2$ ($\\binom{4}{2} = 6$ ways).' },
            { code: 'A2', text: 'Divides $\\frac{6}{28} = \\frac{3}{14}$, option A.' }
          ]
        },
        {
          label: '23',
          marks: 6,
          prompt:
            'A rectangular grid of squares has $141$ rows and $91$ columns. Each square has room for two numbers. Horace and Vera each fill in the grid by putting the numbers from $1$ through $141 \\cdot 91 = 12,831$ into the squares. Horace fills the grid horizontally: he puts $1$ through $91$ in order from left to right into row $1$, puts $92$ through $182$ into row $2$ in order from left to right, and continues similarly through row $141$. Vera fills the grid vertically: she puts $1$ through $141$ in order from top to bottom into column $1$, then $142$ through $282$ into column $2$ in order from top to bottom, and continues similarly through column $91$. How many squares get two copies of the same number?\n\nA. $7$\nB. $10$\nC. $11$\nD. $12$\nE. $19$',
          answer: 'C. $11$',
          principle: 'Index the rows and columns from $0$, equate Horace\'s and Vera\'s formulas for the entry in $(r, c)$, and solve the resulting linear Diophantine equation.',
          solution:
            'Label the rows $r = 0, 1, \\dots, 140$ from top to bottom and the columns $c = 0, 1, \\dots, 90$ from left to right.\n- In square $(r, c)$, Horace writes $91r + c + 1$.\n- In square $(r, c)$, Vera writes $141c + r + 1$.\n\nSetting these two numbers equal:\n$$91r + c + 1 = 141c + r + 1 \\implies 90r = 140c \\implies 9r = 14c.$$\nBecause $\\gcd(9, 14) = 1$, every integer solution has the form\n$$r = 14k, \\qquad c = 9k$$\nfor some integer $k$. Requiring $0 \\le r \\le 140$ and $0 \\le c \\le 90$ gives\n$$0 \\le 14k \\le 140 \\quad \\text{and} \\quad 0 \\le 9k \\le 90 \\implies 0 \\le k \\le 10.$$\nThere are $10 - 0 + 1 = 11$ integer values of $k$, so $11$ squares receive two copies of the same number.',
          rubric: [
            { code: 'M4', text: 'Equates $91r + c + 1 = 141c + r + 1$ to obtain $9r = 14c$, so $(r, c) = (14k, 9k)$.' },
            { code: 'A2', text: 'Counts $0 \\le k \\le 10$, giving $11$ squares, option C.' }
          ]
        },
        {
          label: '24',
          marks: 6,
          prompt:
            'A frog hops along the number line according to the following rules.\n- It starts at $0$.\n- If it is at $0$, then it moves to $1$ with probability $\\frac{1}{2}$ and it disappears with probability $\\frac{1}{2}$.\n- For $n = 1, 2,$ or $3$, if it is at $n$, then it moves to $n + 1$ with probability $\\frac{1}{4}$, it moves to $n - 1$ with probability $\\frac{1}{4}$, and it disappears with probability $\\frac{1}{2}$.\nWhat is the probability that the frog reaches $4$?\n\nA. $\\frac{1}{101}$\nB. $\\frac{1}{100}$\nC. $\\frac{1}{99}$\nD. $\\frac{1}{98}$\nE. $\\frac{1}{97}$',
          answer: 'E. $\\frac{1}{97}$',
          principle: 'Condition on the first step from each state $n \\in \\{0, 1, 2, 3\\}$ to set up and solve a linear system for the hitting probabilities $p_n$.',
          solution:
            'For $n \\in \\{0, 1, 2, 3, 4\\}$, let $p_n$ be the probability that the frog eventually reaches $4$ starting from $n$. Then $p_4 = 1$, and conditioning on one hop gives:\n$$p_0 = \\frac{1}{2}p_1, \\qquad p_n = \\frac{1}{4}p_{n-1} + \\frac{1}{4}p_{n+1} \\quad (n = 1, 2, 3).$$\nSolve bottom-up by expressing $p_1, p_2, p_3$ in terms of $p_0$ (using $p_1 = 2p_0$):\n- From $n = 1$: $2p_0 = \\frac{1}{4}p_0 + \\frac{1}{4}p_2 \\implies p_2 = 7p_0$.\n- From $n = 2$: $7p_0 = \\frac{1}{4}(2p_0) + \\frac{1}{4}p_3 \\implies p_3 = 26p_0$.\n- From $n = 3$: $26p_0 = \\frac{1}{4}(7p_0) + \\frac{1}{4}(1) \\implies 104p_0 = 7p_0 + 1 \\implies 97p_0 = 1$.\n\nTherefore, the probability that the frog reaches $4$ from $0$ is\n$$p_0 = \\frac{1}{97}.$$',
          rubric: [
            { code: 'M4', text: 'Sets up the Markov equations and expresses $p_1 = 2p_0$, $p_2 = 7p_0$, $p_3 = 26p_0$.' },
            { code: 'A2', text: 'Solves $97p_0 = 1$ to obtain $\\frac{1}{97}$, option E.' }
          ]
        },
        {
          label: '25',
          marks: 6,
          prompt:
            'Square $ABCD$ has sides of length $4$. Points $P$ and $Q$ lie on $\\overline{AD}$ and $\\overline{CD}$, respectively, with $AP = \\frac{8}{5}$ and $DQ = \\frac{10}{3}$. A path begins along the segment from $P$ to $Q$ and continues by reflecting against the sides of $ABCD$ (with congruent incoming and outgoing angles). If the path hits a vertex of the square, it terminates there; otherwise it continues forever. At which vertex does the path terminate?\n\nA. $A$\nB. $B$\nC. $C$\nD. $D$\nE. The path continues forever',
          answer: 'B. $B$',
          principle: 'Unfold the square across its sides into a $4 \\times 4$ coordinate grid so the reflecting path becomes a straight ray, then find the first grid vertex it hits.',
          solution:
            'Place square $ABCD$ in the coordinate plane with $D = (0, 0)$, $C = (4, 0)$, $B = (4, 4)$, and $A = (0, 4)$. Then:\n- $P$ lies on $\\overline{AD}$ with $AP = \\frac{8}{5}$, so $DP = 4 - \\frac{8}{5} = \\frac{12}{5}$, giving $P = \\left(0, \\frac{12}{5}\\right)$.\n- $Q$ lies on $\\overline{CD}$ with $DQ = \\frac{10}{3}$, giving $Q = \\left(\\frac{10}{3}, 0\\right)$.\n\nInstead of reflecting the path inside $[0, 4]^2$, reflect the square across its sides to tile the plane with $4 \\times 4$ squares. In this unfolded grid, every grid point $(4m, 4n)$ ($m, n \\in \\mathbb{Z}$) corresponds to a vertex of $ABCD$ determined by the parities of $m$ and $n$:\n- $m$ even, $n$ even $\\to D$;\n- $m$ odd, $n$ even $\\to C$;\n- $m$ odd, $n$ odd $\\to B$;\n- $m$ even, $n$ odd $\\to A$.\n\nThe straight ray starting at $P\\left(0, \\frac{12}{5}\\right)$ and passing through $Q\\left(\\frac{10}{3}, 0\\right)$ has the parametric form\n$$x(t) = \\frac{10}{3}t, \\qquad y(t) = \\frac{12}{5}(1 - t) \\qquad (t > 0).$$\nThis ray passes through $(4m, 4n)$ with $m \\ge 1$ and $n \\le 0$ precisely when $t = \\frac{6m}{5}$ and\n$$\\frac{12}{5}\\left(1 - \\frac{6m}{5}\\right) = 4n \\implies 3(5 - 6m) = 25n \\implies 18m + 25n = 15.$$\nBecause $25n \\equiv 0 \\pmod 5$ and $15 \\equiv 0 \\pmod 5$, $m$ must be a multiple of $5$. Writing $m = 5j$ ($j \\ge 1$) gives\n$$90j + 25n = 15 \\implies 18j + 5n = 3.$$\nThe smallest positive integer $j$ that makes $3 - 18j$ divisible by $5$ is $j = 1$, which gives $5n = 3 - 18 = -15 \\implies n = -3$ and $m = 5$. Thus the ray first hits a grid vertex at $(20, -12) = (4 \\cdot 5, 4 \\cdot (-3))$. Since both $m = 5$ and $n = -3$ are odd, this grid vertex corresponds to vertex $B$.',
          rubric: [
            { code: 'M4', text: 'Unfolds the square into a $4 \\times 4$ grid and derives $18m + 25n = 15$ for grid vertex hits $(4m, 4n)$.' },
            { code: 'A2', text: 'Finds the first hit $(m, n) = (5, -3)$ (both odd) and identifies vertex $B$, option B.' }
          ]
        }
      ]
    }
  ]
};
