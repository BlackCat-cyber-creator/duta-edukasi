/**
 * Paket Soal Terstruktur: AMC 10A (2023) — 23 of 25 multiple-choice problems included.
 * Source: scraped_raw/amc-10a-2023.md (MAA AMC 10A 2023).
 * Skipped 2 diagram-dependent problems whose figures are missing from the archive: Q11 and Q24.
 */
const OK = [{ code: 'A1', text: 'Correct option selected with valid supporting reasoning.' }];

export default {
  id: 'amc-10a-2023',
  slug: 'amc-10a-2023',
  subject: 'olimpiade-mat',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 10A (2023)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab4-trigonometri',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma10-bab7-statistika',
    'sma10-bab8-peluang',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 10',
  title: 'AMC 10A — 2023',
  totalMarks: 23,
  instructions:
    'This set contains 23 multiple-choice problems from the 25-problem 2023 AMC 10A paper (included: Q1-Q10, Q12-Q23, and Q25; skipped: 2 problems requiring missing diagrams, namely Q11 and Q24). Original problem numbers are preserved. In the official AMC 10 contest, a correct answer scores 6 points, an unanswered problem scores 1.5 points, and an incorrect answer scores 0 points; in this practice set, each included problem is worth 1 point (23 points total). Calculators are not allowed.',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 10A',
    file: 'scraped_raw/amc-10a-2023.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice',
      marks: 23,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 23 included problems (original AMC 10A numbering; 1 point each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Cities $A$ and $B$ are $45$ miles apart. Alicia lives in $A$ and Beth lives in $B$. Alicia bikes towards $B$ at $18$ miles per hour. Leaving at the same time, Beth bikes toward $A$ at $12$ miles per hour. How many miles from City $A$ will they be when they meet?\n\nA. $20$\nB. $24$\nC. $25$\nD. $26$\nE. $27$',
          answer: 'E. $27$',
          principle: 'For two travelers moving directly toward each other, the closing speed is the sum of their individual speeds.',
          solution:
            'Alicia and Beth start $45$ miles apart and move toward each other at $18$ mph and $12$ mph, so the distance between them decreases at a combined rate of\n$$18 + 12 = 30\\text{ miles per hour}.$$\nThe time until they meet is therefore\n$$t = \\frac{45}{30} = \\frac{3}{2}\\text{ hours}.$$\nDuring this time, Alicia travels from City $A$ a distance of\n$$18 \\cdot \\frac{3}{2} = 27\\text{ miles}.$$\n(As a check, Beth travels $12 \\cdot \\frac{3}{2} = 18$ miles from City $B$, and $27 + 18 = 45$ miles.)',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'The weight of $\\frac{1}{3}$ of a large pizza together with $3\\frac{1}{2}$ cups of orange slices is the same as the weight of $\\frac{3}{4}$ of a large pizza together with $\\frac{1}{2}$ cup of orange slices. A cup of orange slices weighs $\\frac{1}{4}$ of a pound. What is the weight, in pounds, of a large pizza? Express your answer as a common fraction.\n\nA. $1\\frac{4}{5}$\nB. $2$\nC. $2\\frac{2}{5}$\nD. $3$\nE. $3\\frac{3}{5}$',
          answer: 'A. $1\\frac{4}{5}$',
          principle: 'Translate the balance condition into a single linear equation for the weight $P$ of a pizza.',
          solution:
            'Let $P$ be the weight of one large pizza in pounds. Since one cup of orange slices weighs $\\frac{1}{4}$ pound:\n- $3\\frac{1}{2} = \\frac{7}{2}$ cups weigh $\\frac{7}{2} \\cdot \\frac{1}{4} = \\frac{7}{8}$ pound;\n- $\\frac{1}{2}$ cup weighs $\\frac{1}{2} \\cdot \\frac{1}{4} = \\frac{1}{8}$ pound.\nEquating the two total weights gives\n$$\\frac{1}{3}P + \\frac{7}{8} = \\frac{3}{4}P + \\frac{1}{8}.$$\nRearranging terms with $P$ on one side and constants on the other,\n$$\\frac{7}{8} - \\frac{1}{8} = \\left(\\frac{3}{4} - \\frac{1}{3}\\right)P \\implies \\frac{6}{8} = \\frac{9 - 4}{12}P \\implies \\frac{3}{4} = \\frac{5}{12}P.$$\nMultiplying both sides by $\\frac{12}{5}$ yields\n$$P = \\frac{3}{4} \\cdot \\frac{12}{5} = \\frac{9}{5} = 1\\frac{4}{5}.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many positive perfect squares less than $2023$ are divisible by $5$?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'A. $8$',
          principle: 'Because $5$ is prime, $5 \\mid n^2$ if and only if $5 \\mid n$.',
          solution:
            'Let $n^2$ be a positive perfect square with $n \\in \\mathbb{Z}^+$. Since $5$ is prime, $5$ divides $n^2$ if and only if $5$ divides $n$, so we may write $n = 5k$ for some positive integer $k$.\nWe require\n$$(5k)^2 < 2023.$$\nObserve that\n$$40^2 = 1600 < 2023 < 2025 = 45^2.$$\nSince $n = 5k$ is strictly increasing with $k$, the valid values of $n$ are the positive multiples of $5$ up to $40$, namely\n$$n \\in \\{5, 10, 15, 20, 25, 30, 35, 40\\},$$\ncorresponding to $k = 1, 2, \\dots, 8$. Hence there are $8$ such perfect squares.',
          rubric: OK
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'A quadrilateral has all integer side lengths, a perimeter of $26$, and one side of length $4$. What is the greatest possible length of one side of this quadrilateral?\n\nA. $9$\nB. $10$\nC. $11$\nD. $12$\nE. $13$',
          answer: 'D. $12$',
          principle: 'Polygon inequality: each side of a non-degenerate polygon must be strictly shorter than the sum of all other sides.',
          solution:
            'Let $s$ be the length of the longest side of the quadrilateral. The sum of the remaining three sides is $26 - s$. By the polygon (generalized triangle) inequality, the longest side must be strictly less than the sum of the other three sides:\n$$s < 26 - s \\implies 2s < 26 \\implies s < 13.$$\nSince $s$ is an integer, we have the upper bound $s \\le 12$.\nTo verify that $s = 12$ is achievable when one side is $4$, the remaining two sides must sum to $26 - 12 - 4 = 10$. Choosing side lengths $12, 4, 9, 1$ (or $12, 4, 5, 5$) gives positive integers summing to $26$ with $12 < 4 + 9 + 1 = 14$. Thus the greatest possible side length is $12$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many digits are in the base-ten representation of $8^5 \\cdot 5^{10} \\cdot 15^5$?\n\nA. $14$\nB. $15$\nC. $16$\nD. $17$\nE. $18$',
          answer: 'E. $18$',
          principle: 'Prime factorize and pair factors of $2$ and $5$ to extract the highest power of $10$.',
          solution:
            'Express each base in terms of its prime factors:\n$$8^5 \\cdot 5^{10} \\cdot 15^5 = (2^3)^5 \\cdot 5^{10} \\cdot (3 \\cdot 5)^5 = 2^{15} \\cdot 5^{10} \\cdot 3^5 \\cdot 5^5.$$\nCombine the powers of $5$ and then group $2^{15} \\cdot 5^{15} = 10^{15}$:\n$$3^5 \\cdot 2^{15} \\cdot 5^{15} = 3^5 \\cdot 10^{15} = 243 \\cdot 10^{15}.$$\nIn base ten, $243 \\cdot 10^{15}$ is the $3$-digit integer $243$ followed by $15$ zeros, giving $3 + 15 = 18$ digits.',
          rubric: OK
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'An integer is assigned to each vertex of a cube. The value of an edge is defined to be the sum of the values of the two vertices it touches, and the value of a face is defined to be the sum of the values of the four edges surrounding it. The value of the cube is defined as the sum of the values of its six faces. Suppose the sum of the integers assigned to the vertices is $21$. What is the value of the cube?\n\nA. $42$\nB. $63$\nC. $84$\nD. $126$\nE. $252$',
          answer: 'D. $126$',
          principle: 'Double counting via vertex-edge and edge-face incidences in a cube.',
          solution:
            'Let $S_V = 21$ be the sum of the integers at the $8$ vertices.\n1. In a cube, each vertex belongs to exactly $3$ edges. When we sum the values of all $12$ edges, each vertex value is added once for each edge touching it, so the sum of all edge values is\n$$S_E = 3S_V.$$\n2. Each edge of a cube borders exactly $2$ faces. When we sum the values of all $6$ faces, each edge value is added once for each face containing it, so the value of the cube is\n$$S_F = 2S_E = 2(3S_V) = 6S_V.$$\nSubstituting $S_V = 21$ gives $6 \\cdot 21 = 126$.',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Janet rolls a standard $6$-sided die $4$ times and keeps a running total of the numbers she rolls. What is the probability that at some point her running total will equal $3$? Express your answer as a common fraction.\n\nA. $\\dfrac{2}{9}$\nB. $\\dfrac{49}{216}$\nC. $\\dfrac{25}{108}$\nD. $\\dfrac{17}{72}$\nE. $\\dfrac{13}{54}$',
          answer: 'B. $\\dfrac{49}{216}$',
          principle: 'Partition the event by the roll number on which the strictly increasing running total hits $3$.',
          solution:
            'Because each die outcome is at least $1$, Janet\'s running total strictly increases on every roll. Thus it can equal $3$ at most once, and only on roll $1$, $2$, or $3$ (after $4$ rolls, the minimum possible sum is $4 > 3$).\nWe list the mutually exclusive opening sequences that reach $3$:\n- After $1$ roll: $(3)$, with probability $\\frac{1}{6} = \\frac{36}{216}$.\n- After $2$ rolls: $(1, 2)$ or $(2, 1)$, with probability $2 \\cdot \\frac{1}{6^2} = \\frac{2}{36} = \\frac{12}{216}$.\n- After $3$ rolls: $(1, 1, 1)$, with probability $\\frac{1}{6^3} = \\frac{1}{216}$.\nSumming these disjoint probabilities gives\n$$\\frac{36 + 12 + 1}{216} = \\frac{49}{216}.$$',
          rubric: OK
        },
        {
          label: '8',
          marks: 1,
          prompt:
            'Barb the baker creates a new temperature system for baking bread, Breadus, which is linearly based on Fahrenheit. Bread rises at $110\\text{ F}^{\\circ}$, which is $0$ on the Breadus scale. Bread bakes at $350\\text{ F}^{\\circ}$, which is $100$ on the Breadus scale. Bread is done when its internal temperature is $200\\text{ F}^{\\circ}$. What is this temperature on the Breadus scale? Express your answer as a decimal.\n\nA. $33$\nB. $34.5$\nC. $36$\nD. $37.5$\nE. $39$',
          answer: 'D. $37.5$',
          principle: 'Determine the linear conversion formula from two calibration points $(F_1, B_1)$ and $(F_2, B_2)$.',
          solution:
            'Since the Breadus temperature $B$ is a linear function of the Fahrenheit temperature $F$ passing through $(110, 0)$ and $(350, 100)$, its slope is\n$$m = \\frac{100 - 0}{350 - 110} = \\frac{100}{240} = \\frac{5}{12}.$$\nUsing point-slope form with $(110, 0)$ gives\n$$B = \\frac{5}{12}(F - 110).$$\nEvaluating at $F = 200$ yields\n$$B = \\frac{5}{12}(200 - 110) = \\frac{5}{12} \\cdot 90 = \\frac{450}{12} = \\frac{75}{2} = 37.5.$$',
          rubric: OK
        },
        {
          label: '9',
          marks: 1,
          prompt:
            'A digital display shows the current date as an $8$-digit integer consisting of a $4$-digit year, followed by a $2$-digit month, followed by a $2$-digit date within the month. For example, Arbor Day this year is displayed as $20230428$. For how many dates in $2023$ will each digit appear an even number of times in the $8$-digit display for that date?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'E. $9$',
          principle: 'Analyze digit-count parities of the fixed year $2023$, then perform systematic casework on valid month-day strings.',
          solution:
            'In the year $2023$, the digit $2$ appears twice (even), while $0$ and $3$ each appear once (odd), and all other digits appear $0$ times (even).\nFor every digit in the full $8$-digit display to appear an even number of times, the $4$-digit month-day string $M_1 M_2 D_1 D_2$ must contain:\n- an odd number of $0$s,\n- an odd number of $3$s, and\n- an even number of every other digit.\nSince only $4$ digits remain and both $0$ and $3$ appear at least once, the multiset of the four month-day digits must be $\\{0, 3, d, d\\}$ for some digit $d \\in \\{0, 1, \\dots, 9\\}$.\nCheck each valid $2$-digit month $M_1 M_2 \\in \\{01, 02, \\dots, 12\\}$:\n- Month $01$ ($d=1$): the remaining digits are $1$ and $3$, giving valid days $13$ and $31$ ($2$ dates: $01\\text{-}13$, $01\\text{-}31$).\n- Month $02$ ($d=2$): the remaining digits are $2$ and $3$, giving only valid day $23$, since $32$ is invalid ($1$ date: $02\\text{-}23$).\n- Month $03$: the remaining two digits must be $(d, d)$, giving valid days $11$ and $22$; $00$ and $33$ are invalid ($2$ dates: $03\\text{-}11$, $03\\text{-}22$).\n- Months $04$ through $09$ ($d \\ge 4$): the remaining digits are $3$ and $d$, forming $3d \\ge 34$ or $d3 \\ge 43$, neither of which is a valid day ($0$ dates).\n- Month $10$ ($d=1$): the remaining digits are $1$ and $3$, giving valid days $13$ and $31$ in October ($2$ dates: $10\\text{-}13$, $10\\text{-}31$).\n- Month $11$ ($d=1$): the remaining digits are $0$ and $3$, giving valid days $03$ and $30$ in November ($2$ dates: $11\\text{-}03$, $11\\text{-}30$).\n- Month $12$: requires $1$ and $2$, leaving no room for both $0$ and $3$ ($0$ dates).\nIn total, there are $2 + 1 + 2 + 2 + 2 = 9$ valid dates.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Maureen is keeping track of the mean of her quiz scores this semester. If Maureen scores an $11$ on the next quiz, her mean will increase by $1$. If she scores an $11$ on each of the next three quizzes, her mean will increase by $2$. What is the mean of her quiz scores currently?\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          answer: 'D. $7$',
          principle: 'Write the total score as $mn$ (current mean times number of quizzes) to form two linear equations.',
          solution:
            'Let $m$ be Maureen\'s current mean over $n$ quizzes, so her current total score is $mn$.\nFrom the first condition,\n$$\\frac{mn + 11}{n + 1} = m + 1 \\implies mn + 11 = mn + m + n + 1 \\implies m + n = 10.$$\nFrom the second condition,\n$$\\frac{mn + 33}{n + 3} = m + 2 \\implies mn + 33 = mn + 3m + 2n + 6 \\implies 3m + 2n = 27.$$\nSubtracting $2(m + n) = 20$ from $3m + 2n = 27$ eliminates $n$:\n$$(3m + 2n) - 2(m + n) = 27 - 20 \\implies m = 7.$$\n(Indeed, $n = 3$: three quizzes with mean $7$ sum to $21$; adding one $11$ gives $32/4 = 8$, and adding three $11$s gives $54/6 = 9$.)',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'How many three-digit positive integers $N$ satisfy the following properties?\n\n- The number $N$ is divisible by $7$.\n- The number formed by reversing the digits of $N$ and dropping any leading zeros is divisible by $5$.\n\nA. $13$\nB. $14$\nC. $15$\nD. $16$\nE. $17$',
          answer: 'B. $14$',
          principle: 'Divisibility by $5$ depends only on the units digit, which for the reversal is the hundreds digit of $N$.',
          solution:
            'Let $N = \\overline{abc}$ be a three-digit positive integer ($1 \\le a \\le 9$, $0 \\le b, c \\le 9$). Reversing the digits and dropping any leading zeros places $a$ in the units position.\nFor this reversed number to be divisible by $5$, its units digit $a$ must be $0$ or $5$. Since $N$ is a three-digit integer, $a \\neq 0$, so $a = 5$. Thus $N$ lies in the range\n$$500 \\le N \\le 599.$$\nNow count the multiples of $7$ in $[500, 599]$:\n- $7 \\cdot 71 = 497 < 500$, so the smallest multiple is $7 \\cdot 72 = 504$.\n- $7 \\cdot 85 = 595 \\le 599 < 602 = 7 \\cdot 86$, so the largest multiple is $7 \\cdot 85 = 595$.\nThe number of multiples of $7$ from $7 \\cdot 72$ through $7 \\cdot 85$ is\n$$85 - 72 + 1 = 14.$$',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Abdul and Chiang are standing $48$ feet apart in a field. Bharat is standing in the same field as far from Abdul as possible so that the angle formed by his lines of sight to Abdul and Chiang measures $60^\\circ$. What is the square of the distance (in feet) between Abdul and Bharat?\n\nA. $1728$\nB. $2601$\nC. $3072$\nD. $4608$\nE. $6912$',
          answer: 'C. $3072$',
          principle: 'By the Extended Law of Sines, fixing side $AC$ and opposite angle $\\angle B$ fixes the circumdiameter of $\\triangle ABC$, which bounds the chord $AB$.',
          solution:
            'Let $A$, $B$, and $C$ denote the positions of Abdul, Bharat, and Chiang, respectively, so $AC = 48$ and $\\angle ABC = 60^\\circ$.\nBy the Extended Law of Sines, the circumcircle of $\\triangle ABC$ has diameter\n$$D = \\frac{AC}{\\sin(\\angle ABC)} = \\frac{48}{\\sin 60^\\circ} = \\frac{48}{\\sqrt{3}/2} = \\frac{96}{\\sqrt{3}} = 32\\sqrt{3}.$$\nEvery chord of a circle has length at most its diameter, so $AB \\le 32\\sqrt{3}$.\nEquality is attained when $AB$ is a diameter of the circumcircle, which occurs when $\\angle ACB = 90^\\circ$ (a $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$ right triangle with $BC = 16\\sqrt{3}$ and $AB = 32\\sqrt{3}$).\nTherefore, the maximum square of the distance between Abdul and Bharat is\n$$AB^2 = (32\\sqrt{3})^2 = 1024 \\cdot 3 = 3072.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'A number is chosen at random from among the first $100$ positive integers, and a positive integer divisor of that number is then chosen at random. What is the probability that the chosen divisor is divisible by $11$? Express your answer as a common fraction.\n\nA. $\\dfrac{4}{100}$\nB. $\\dfrac{9}{200}$\nC. $\\dfrac{1}{20}$\nD. $\\dfrac{11}{200}$\nE. $\\dfrac{3}{50}$',
          answer: 'B. $\\dfrac{9}{200}$',
          principle: 'Condition on the chosen number $n$: only multiples of $11$ have divisors divisible by $11$, and when $n = 11m$ with $11 \\nmid m$, divisors pair up symmetrically.',
          solution:
            'Each integer $n \\in \\{1, 2, \\dots, 100\\}$ is selected with probability $\\frac{1}{100}$.\nIf $11 \\nmid n$, then $n$ has no divisors divisible by $11$, so the conditional probability is $0$.\nIf $11 \\mid n$, then $n = 11m$ for some $m \\in \\{1, 2, \\dots, 9\\}$. Since $11 \\nmid m$, every positive divisor of $n$ is uniquely of the form $d$ (not divisible by $11$) or $11d$ (divisible by $11$), where $d \\mid m$.\nThis bijection $d \\leftrightarrow 11d$ shows that for each of the $9$ multiples of $11$ in $\\{1, \\dots, 100\\}$, exactly $\\frac{1}{2}$ of its divisors are divisible by $11$.\nSumming over all $9$ valid choices of $n$, the total probability is\n$$\\frac{9}{100} \\cdot \\frac{1}{2} = \\frac{9}{200}.$$',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'An even number of circles are nested, starting with a radius of $1$ and increasing by $1$ each time, all sharing a common point. The region between every other circle is shaded, starting with the region inside the circle of radius $2$ but outside the circle of radius $1$. What is the least number of circles needed to make the total shaded area at least $2023\\pi$?\n\nA. $46$\nB. $48$\nC. $56$\nD. $60$\nE. $64$',
          answer: 'E. $64$',
          principle: 'Sum the areas of the shaded regions using difference of squares and the arithmetic series formula.',
          solution:
            'Suppose there are $2n$ circles ($n \\ge 1$). For each $k \\in \\{1, 2, \\dots, n\\}$, the $k$-th shaded region lies inside the circle of radius $2k$ and outside the circle of radius $2k - 1$, so its area is\n$$\\pi(2k)^2 - \\pi(2k - 1)^2 = \\pi\\big(4k^2 - (4k^2 - 4k + 1)\\big) = (4k - 1)\\pi.$$\nSumming over $k = 1, 2, \\dots, n$ gives a total shaded area of\n$$\\pi \\sum_{k=1}^{n} (4k - 1) = \\pi\\left(4 \\cdot \\frac{n(n + 1)}{2} - n\\right) = \\pi(2n^2 + n).$$\nWe need $2n^2 + n \\ge 2023$. Testing consecutive integers near $\\sqrt{2023/2}$:\n- At $n = 31$: $2(31)^2 + 31 = 2(961) + 31 = 1953 < 2023$.\n- At $n = 32$: $2(32)^2 + 32 = 2(1024) + 32 = 2080 \\ge 2023$.\nSince $2n^2 + n$ is strictly increasing for $n \\ge 1$, the least valid $n$ is $32$, which corresponds to $2n = 64$ circles.',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'In a table tennis tournament every participant played every other participant exactly once. Although there were twice as many right-handed players as left-handed players, the number of games won by left-handed players was $40\\%$ more than the number of games won by right-handed players. (There were no ties and no ambidextrous players.) What is the total number of games played?\n\nA. $15$\nB. $36$\nC. $45$\nD. $48$\nE. $66$',
          answer: 'B. $36$',
          principle: 'Combine integrality (divisibility of total games by $12$) with an upper bound on how many games left-handed players can possibly win.',
          solution:
            'Let $L \\ge 1$ be the number of left-handed players, so there are $2L$ right-handed players and $3L$ players in total. The total number of games played is\n$$T = \\binom{3L}{2} = \\frac{3L(3L - 1)}{2}.$$\nLet $W_R$ be the number of games won by right-handed players, so left-handed players win $W_L = 1.4W_R = \\frac{7}{5}W_R$ games. Since $W_R$ and $W_L$ are integers with ratio $5 : 7$, we can write $W_R = 5k$ and $W_L = 7k$ for a positive integer $k$. Thus $T = W_R + W_L = 12k$, meaning $12 \\mid T$, and $W_L = \\frac{7}{12}T$.\nOn the other hand, left-handed players can only win games in which at least one left-handed player participates. There are $\\binom{L}{2}$ games between two left-handed players and $L \\cdot 2L = 2L^2$ mixed games, so\n$$W_L \\le \\binom{L}{2} + 2L^2 = \\frac{L(L - 1)}{2} + 2L^2 = \\frac{5L^2 - L}{2}.$$\nSubstituting $W_L = \\frac{7}{12} \\cdot \\frac{3L(3L - 1)}{2} = \\frac{7L(3L - 1)}{8}$ gives\n$$\\frac{7L(3L - 1)}{8} \\le \\frac{5L^2 - L}{2}.$$\nMultiplying by $8/L > 0$ yields\n$$7(3L - 1) \\le 4(5L - 1) \\implies 21L - 7 \\le 20L - 4 \\implies L \\le 3.$$\nTesting $L \\in \\{1, 2, 3\\}$:\n- $L = 1$: $T = \\binom{3}{2} = 3$ (not a multiple of $12$).\n- $L = 2$: $T = \\binom{6}{2} = 15$ (not a multiple of $12$).\n- $L = 3$: $T = \\binom{9}{2} = 36$ (a multiple of $12$, giving $W_L = 21$ and $W_R = 15$).\nThis is achievable when the $3$ left-handed players win all $3$ games among themselves and all $18$ mixed games ($21$ wins), while the $6$ right-handed players win their $15$ internal games ($21 = 1.4 \\cdot 15$). Thus $T = 36$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'Let $ABCD$ be a rectangle with $AB = 30$ and $BC = 28$. Points $P$ and $Q$ lie on $BC$ and $CD$ respectively so that all sides of $\\triangle ABP$, $\\triangle PCQ$, and $\\triangle QDA$ have integer lengths. What is the perimeter of $\\triangle APQ$?\n\nA. $84$\nB. $86$\nC. $88$\nD. $90$\nE. $92$',
          answer: 'A. $84$',
          principle: 'Use difference of squares $c^2 - a^2 = (c - a)(c + a)$ to find all integer right triangles with a fixed leg and bounded second leg.',
          solution:
            'Let $BP = p$ ($0 < p < 28$) and $DQ = x$ ($0 < x < 30$), so $PC = 28 - p$ and $QC = 30 - x$ (endpoints give degenerate triangles, which we also verify fail).\nIn right $\\triangle ABP$, $AP^2 - p^2 = 30^2 = 900$, so $(AP - p)(AP + p) = 900$. Since $AP - p$ and $AP + p$ share the same parity and multiply to an even number, write $AP - p = 2a$ and $AP + p = 2b$ with $ab = 225 = 3^2 \\cdot 5^2$, $a < b$, and $p = b - a \\le 28$. Checking factor pairs $(a, b)$ of $225$:\n- $(1, 225)$, $(3, 75)$, and $(5, 45)$ give $b - a > 28$.\n- $(9, 25)$ gives $p = 25 - 9 = 16$ and $AP = 25 + 9 = 34$.\nIn right $\\triangle QDA$, $AQ^2 - x^2 = 28^2 = 784$, so write $AQ - x = 2c$ and $AQ + x = 2d$ with $cd = 196 = 2^2 \\cdot 7^2$, $c < d$, and $x = d - c \\le 30$. Checking factor pairs $(c, d)$ of $196$:\n- $(1, 196)$, $(2, 98)$, and $(4, 49)$ give $d - c > 30$.\n- $(7, 28)$ gives $x = 28 - 7 = 21$ and $AQ = 28 + 7 = 35$.\nThen in right $\\triangle PCQ$, the legs are $PC = 28 - 16 = 12$ and $QC = 30 - 21 = 9$, giving\n$$PQ = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15.$$\n(If $p = 0$ or $x = 0$, then $PQ^2 \\in \\{28^2 + 9^2, 12^2 + 30^2, 28^2 + 30^2\\} = \\{865, 1044, 1684\\}$, none of which is a perfect square.)\nTherefore, the perimeter of $\\triangle APQ$ is $34 + 15 + 35 = 84$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'A rhombic dodecahedron is a solid with $12$ congruent rhombus faces. At every vertex, $3$ or $4$ edges meet, depending on the vertex. How many vertices have exactly $3$ edges meeting?\n\nA. $5$\nB. $6$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'D. $8$',
          principle: 'Find the edge count from faces, apply Euler\'s Polyhedron Formula $V - E + F = 2$, and use the Handshaking Lemma.',
          solution:
            'There are $F = 12$ faces, and each rhombus face has $4$ edges. Since every edge is shared by $2$ faces, the number of edges is\n$$E = \\frac{12 \\cdot 4}{2} = 24.$$\nBy Euler\'s Polyhedron Formula, $V - E + F = 2$, so the total number of vertices is\n$$V = 2 + E - F = 2 + 24 - 12 = 14.$$\nLet $x$ be the number of vertices where $3$ edges meet, so $14 - x$ vertices have $4$ edges meeting. Summing the degrees of all vertices counts every edge twice:\n$$3x + 4(14 - x) = 2E = 48 \\implies 56 - x = 48 \\implies x = 8.$$',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'A rotation about $P(r, s)$ sends $A(1, 2)$ to $A\'(3, 1)$ and $B(3, 3)$ to $B\'(4, 3)$. What is $|r - s|$?\n\nA. $\\dfrac{1}{4}$\nB. $\\dfrac{1}{2}$\nC. $\\dfrac{3}{4}$\nD. $\\dfrac{2}{3}$\nE. $1$',
          answer: 'E. $1$',
          principle: 'The center of a rotation lies on the perpendicular bisector of every segment joining a point to its image.',
          solution:
            'Since a rotation preserves distances from its center $P(r, s)$, we have $PA = PA\'$ and $PB = PB\'$. Hence $P$ is the intersection of the perpendicular bisectors of $AA\'$ and $BB\'$.\n- For $B(3, 3)$ and $B\'(4, 3)$, the midpoint is $\\left(\\frac{7}{2}, 3\\right)$ and the segment is horizontal, so its perpendicular bisector is the vertical line\n$$x = \\frac{7}{2}.$$\nThus $r = \\frac{7}{2}$.\n- For $A(1, 2)$ and $A\'(3, 1)$, the midpoint is $\\left(\\frac{1 + 3}{2}, \\frac{2 + 1}{2}\\right) = \\left(2, \\frac{3}{2}\\right)$ and the slope of $AA\'$ is $\\frac{1 - 2}{3 - 1} = -\\frac{1}{2}$. The perpendicular bisector has slope $2$, giving the equation\n$$y - \\frac{3}{2} = 2(x - 2) \\implies y = 2x - \\frac{5}{2}.$$\nSubstituting $x = r = \\frac{7}{2}$ gives\n$$s = 2\\left(\\frac{7}{2}\\right) - \\frac{5}{2} = 7 - \\frac{5}{2} = \\frac{9}{2}.$$\nTherefore, $|r - s| = \\left|\\frac{7}{2} - \\frac{9}{2}\\right| = 1$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Each square in a $3 \\times 3$ grid of squares is colored red, white, blue, or green so that every $2 \\times 2$ square contains one square of each color. How many different colorings are possible?\n\nA. $24$\nB. $48$\nC. $60$\nD. $72$\nE. $96$',
          answer: 'D. $72$',
          principle: 'Fix the central $2 \\times 2$ overlap and count compatible extensions to the remaining cells by casework.',
          solution:
            'Label the cells in row-major order by $(i, j)$ for $1 \\le i, j \\le 3$:\n1. The top-left $2 \\times 2$ block $\\{(1,1), (1,2), (2,1), (2,2)\\}$ must contain all $4$ colors, so there are $4! = 24$ ways to color it. Let its colors be $c_3, c_1, c_2, c_0$, respectively.\n2. In the top-right $2 \\times 2$ block $\\{(1,2), (1,3), (2,2), (2,3)\\}$, cells $(1,2)$ and $(2,2)$ already have colors $c_1$ and $c_0$, so $(1,3)$ and $(2,3)$ must take the other two colors $\\{c_2, c_3\\}$ in either order ($2$ choices).\n3. In the bottom-left $2 \\times 2$ block $\\{(2,1), (2,2), (3,1), (3,2)\\}$, cells $(2,1)$ and $(2,2)$ already have colors $c_2$ and $c_0$, so $(3,1)$ and $(3,2)$ must take the other two colors $\\{c_1, c_3\\}$ in either order ($2$ choices).\n4. Now look at the bottom-right $2 \\times 2$ block $\\{(2,2), (2,3), (3,2), (3,3)\\}$. Since $(2,3)$ and $(3,2)$ already differ from $(2,2) = c_0$, the remaining cell $(3,3)$ can complete all $4$ colors if and only if $(2,3)$ and $(3,2)$ have different colors (in which case $(3,3)$ is uniquely forced).\nAmong the $2 \\times 2 = 4$ pairs of choices for $((2,3), (3,2))$ in steps 2 and 3, the only conflict occurs when both equal $c_3$, leaving $4 - 1 = 3$ valid extensions.\nThus the total number of valid colorings is $24 \\cdot 3 = 72$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'There is a unique polynomial $P(x)$ of least degree with leading coefficient $1$ satisfying all of the following:\n\n$1$ is a root of $P(x) - 1$, $2$ is a root of $P(x - 2)$, $3$ is a root of $P(3x)$, and $4$ is a root of $4P(x)$.\n\nAll the roots of $P(x)$ except one are integers. If the one non-integer root can be written as $\\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers, what is $m + n$?\n\nA. $41$\nB. $43$\nC. $45$\nD. $47$\nE. $49$',
          answer: 'D. $47$',
          principle: 'Translate each root condition into values of $P(x)$ and factor $P(x)$ over its known roots.',
          solution:
            'Evaluate each condition directly:\n- $1$ is a root of $P(x) - 1 \\implies P(1) - 1 = 0 \\implies P(1) = 1$.\n- $2$ is a root of $P(x - 2) \\implies P(2 - 2) = 0 \\implies P(0) = 0$.\n- $3$ is a root of $P(3x) \\implies P(3 \\cdot 3) = 0 \\implies P(9) = 0$.\n- $4$ is a root of $4P(x) \\implies 4P(4) = 0 \\implies P(4) = 0$.\nThus $0$, $4$, and $9$ are roots of $P(x)$, so $x(x - 4)(x - 9)$ divides $P(x)$.\nIf $P(x)$ had degree $3$, then being monic would force $P(x) = x(x - 4)(x - 9)$, which gives $P(1) = 1(-3)(-8) = 24 \\neq 1$, impossible.\nHence the least possible degree is $4$, so\n$$P(x) = x(x - 4)(x - 9)(x - c)$$\nfor some constant $c$. Applying $P(1) = 1$ gives\n$$1 \\cdot (-3)(-8)(1 - c) = 1 \\implies 24(1 - c) = 1 \\implies c = 1 - \\frac{1}{24} = \\frac{23}{24}.$$\nThe unique non-integer root is $\\frac{23}{24}$, with $\\gcd(23, 24) = 1$, so $m + n = 23 + 24 = 47$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Circles $C_1$ and $C_2$ each have radius $1$, and the distance between their centers is $\\frac{1}{2}$. Circle $C_3$ is the largest circle that lies inside both $C_1$ and $C_2$ and is tangent to both. Circle $C_4$ lies inside both $C_1$ and $C_2$, is tangent to both, and is externally tangent to $C_3$. What is the radius of $C_4$? Express your answer as a common fraction.\n\nA. $\\dfrac{1}{14}$\nB. $\\dfrac{1}{12}$\nC. $\\dfrac{1}{10}$\nD. $\\dfrac{3}{28}$\nE. $\\dfrac{1}{9}$',
          answer: 'D. $\\dfrac{3}{28}$',
          principle: 'Place the circles on coordinate axes using symmetry, then apply center-to-center distance formulas for internal and external tangency.',
          solution:
            'Place the centers of $C_1$ and $C_2$ at $O_1 = \\left(-\\frac{1}{4}, 0\\right)$ and $O_2 = \\left(\\frac{1}{4}, 0\\right)$, so $O_1 O_2 = \\frac{1}{2}$.\nAny circle $C$ of radius $\\rho$ inside and internally tangent to both $C_1$ and $C_2$ has center $O$ satisfying $O_1 O = O_2 O = 1 - \\rho$. Thus $O$ lies on the perpendicular bisector of $O_1 O_2$, namely the $y$-axis, so $O = (0, y)$.\nSince $O_1 O = \\sqrt{\\frac{1}{16} + y^2} \\ge \\frac{1}{4}$, we have $1 - \\rho \\ge \\frac{1}{4}$, i.e. $\\rho \\le \\frac{3}{4}$, with maximum radius $\\frac{3}{4}$ achieved uniquely at $O_3 = (0, 0)$. Hence $C_3$ is centered at $(0, 0)$ with radius $\\frac{3}{4}$.\nNow let $C_4$ have radius $r$ and center $O_4 = (0, k)$ with $k > 0$ (by symmetry across the $x$-axis).\n- External tangency between $C_3$ and $C_4$ gives $k = \\frac{3}{4} + r$.\n- Internal tangency between $C_1$ and $C_4$ gives $\\sqrt{\\frac{1}{16} + k^2} = 1 - r$, so $\\frac{1}{16} + k^2 = (1 - r)^2$.\nSubstituting $k = \\frac{3}{4} + r$ yields\n$$\\frac{1}{16} + \\left(\\frac{3}{4} + r\\right)^2 = (1 - r)^2 \\implies \\frac{1}{16} + \\frac{9}{16} + \\frac{3}{2}r + r^2 = 1 - 2r + r^2.$$\nCanceling $r^2$ and combining terms gives\n$$\\frac{5}{8} + \\frac{3}{2}r = 1 - 2r \\implies \\frac{7}{2}r = \\frac{3}{8} \\implies r = \\frac{3}{28}.$$',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'Positive integer divisors $a$ and $b$ of $N$ are called complementary if $ab = N$. Given that $N$ has a pair of complementary divisors that differ by $20$ and a pair of complementary divisors that differ by $23$, find the sum of the digits of $N$.\n\nA. $11$\nB. $13$\nC. $15$\nD. $17$\nE. $19$',
          answer: 'C. $15$',
          principle: 'Complete the square for both divisor pairs to reduce the problem to a difference-of-squares Diophantine equation.',
          solution:
            'Let the first pair of positive complementary divisors be $x$ and $x + 20$ ($x \\ge 1$). Then\n$$N = x(x + 20) = (x + 10)^2 - 100.$$\nSetting $k = x + 10 \\ge 11$ gives $N = k^2 - 100$.\nLet the second pair of positive complementary divisors be $y$ and $y + 23$ ($y \\ge 1$). Then $N = y(y + 23)$, so\n$$4N = 4y^2 + 92y = (2y + 23)^2 - 529.$$\nSetting $m = 2y + 23 \\ge 25$ gives $4N = m^2 - 529$.\nSubstituting $N = k^2 - 100$ into $4N = m^2 - 529$ yields\n$$4(k^2 - 100) = m^2 - 529 \\implies m^2 - 4k^2 = 129 \\implies (m - 2k)(m + 2k) = 129.$$\nSince $129 = 3 \\cdot 43$ and $0 < m - 2k < m + 2k$, the positive factorizations are:\n- $m - 2k = 3$, $m + 2k = 43 \\implies 4k = 40 \\implies k = 10$, which contradicts $k \\ge 11$ (it would give $N = 0$).\n- $m - 2k = 1$, $m + 2k = 129 \\implies 4k = 128 \\implies k = 32$ and $m = 65$.\nThus $N = 32^2 - 100 = 1024 - 100 = 924$ (indeed $924 = 22 \\cdot 42 = 21 \\cdot 44$). The sum of the digits of $N$ is $9 + 2 + 4 = 15$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'If $A$ and $B$ are vertices of a polyhedron, define the distance $d(A, B)$ to be the minimum number of edges of the polyhedron one must traverse in order to connect $A$ and $B$. For example, if $AB$ is an edge of the polyhedron, then $d(A, B) = 1$, but if $AC$ and $CB$ are edges and $AB$ is not an edge, then $d(A, B) = 2$. Let $Q$, $R$, and $S$ be randomly chosen distinct vertices of a regular icosahedron (a regular polyhedron made up of $20$ equilateral triangles). What is the probability that $d(Q, R) > d(R, S)$? Express your answer as a common fraction.\n\nA. $\\dfrac{7}{22}$\nB. $\\dfrac{1}{3}$\nC. $\\dfrac{3}{8}$\nD. $\\dfrac{5}{12}$\nE. $\\dfrac{1}{2}$',
          answer: 'A. $\\dfrac{7}{22}$',
          principle: 'Fix the reference vertex $R$, count the vertices at each graph distance from $R$, and use symmetry between $Q$ and $S$.',
          solution:
            'A regular icosahedron has $F = 20$ triangular faces, $E = \\frac{20 \\cdot 3}{2} = 30$ edges, and by Euler\'s formula $V = 2 + E - F = 12$ vertices, each of degree $5$.\nFix the vertex $R$. Among the remaining $11$ vertices:\n- $5$ vertices are adjacent to $R$ (distance $1$),\n- $5$ vertices form the opposite pentagon adjacent to those neighbors (distance $2$), and\n- $1$ vertex is the antipode of $R$ (distance $3$).\nChoosing distinct vertices $Q$ and $S$ uniformly from these $11$ vertices gives $11 \\cdot 10 = 110$ equally likely ordered pairs $(Q, S)$.\nThe tie event $d(Q, R) = d(R, S)$ occurs when both $Q$ and $S$ are at distance $1$ ($5 \\cdot 4 = 20$ pairs) or both are at distance $2$ ($5 \\cdot 4 = 20$ pairs), so\n$$\\Pr\\big(d(Q, R) = d(R, S)\\big) = \\frac{20 + 20}{110} = \\frac{4}{11}.$$\nBy symmetry between $Q$ and $S$, $\\Pr\\big(d(Q, R) > d(R, S)\\big) = \\Pr\\big(d(Q, R) < d(R, S)\\big)$. Therefore,\n$$\\Pr\\big(d(Q, R) > d(R, S)\\big) = \\frac{1 - \\frac{4}{11}}{2} = \\frac{7}{22}.$$',
          rubric: OK
        }
      ]
    }
  ]
};
