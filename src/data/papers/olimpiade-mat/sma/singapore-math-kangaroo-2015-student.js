/**
 * Paket Soal Terstruktur: Singapore Math Kangaroo Contest 2015 (Student / Grades 11-12) — 21 of 30 problems included.
 * Source: scraped_raw/singapore-math-kangaroo-2015-student.md (SMKC 2015 Student).
 * Skipped 9 diagram-dependent problems whose figures are missing from the archive: Q4, Q6, Q7, Q8, Q9, Q13, Q16, Q20, and Q22.
 */
const OK3 = [{ code: 'A3', text: 'Correct option selected with valid supporting reasoning (3 points).' }];
const OK4 = [{ code: 'A4', text: 'Correct option selected with valid supporting reasoning (4 points).' }];
const OK5 = [{ code: 'A5', text: 'Correct option selected with valid supporting reasoning (5 points).' }];

export default {
  id: 'kangaroo-sg-2015-student',
  slug: 'singapore-math-kangaroo-2015-student',
  subject: 'olimpiade-mat',
  grade: 11,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'Singapore Math Kangaroo Contest 2015 (Student / Grade 11-12)',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab2-barisan-deret',
    'sma10-bab5-spltv-sptldv',
    'sma10-bab6-fungsi-kuadrat',
    'sma10-bab8-peluang',
    'sma12-bab3-kaidah-pencacahan',
    'sma12-bab4-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Kangaroo',
  title: 'Singapore Math Kangaroo 2015 — Student (Grades 11-12)',
  totalMarks: 88,
  instructions:
    'This set contains 21 multiple-choice problems from the 30-problem 2015 Singapore Math Kangaroo Contest (Student / Grades 11-12) paper (included: Q1-Q3, Q5, Q10-Q12, Q14-Q15, Q17-Q19, Q21, Q23-Q30; skipped: 9 problems requiring missing diagrams, namely Q4, Q6, Q7, Q8, Q9, Q13, Q16, Q20, and Q22). Original problem numbers and point tiers (3, 4, and 5 points) are preserved, giving 88 points total across the 21 included items. Calculators are not allowed.',
  source: {
    org: 'SMKC (Singapore Math Kangaroo Contest / AKSF)',
    file: 'scraped_raw/singapore-math-kangaroo-2015-student.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: '3 Point Problems',
      marks: 15,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 5 included 3-point problems (original numbering preserved; 3 points each).',
      parts: [
        {
          label: '1',
          marks: 3,
          prompt:
            'Andrea was born in $1997,$ her younger sister Charlotte in $2001.$ The age difference of the two sisters is therefore $\\cdots$ in any case.\n\nA. less than $4$ years\nB. at least $4$ years\nC. exactly $4$ years\nD. more than $4$ years\nE. not less than $3$ years',
          answer: 'E. not less than $3$ years',
          principle: 'Determine the strict minimum and maximum possible age differences over all valid birth dates in the two given years.',
          solution:
            'Because the exact birth dates (month and day) are unknown, we find the extreme cases:\n- Minimum difference: Andrea is born on December 31, $1997$ and Charlotte is born on January 1, $2001$. Their age difference is $3$ years and $1$ day, which is strictly greater than $3$ years.\n- Maximum difference: Andrea is born on January 1, $1997$ and Charlotte is born on December 31, $2001$. Their age difference is $4$ years and $364$ days, which is strictly less than $5$ years.\nSince the age difference can be slightly above $3$ years, exactly $4$ years (same month and day), or nearly $5$ years, options A, B, C, and D do not hold in every case. However, the difference is always strictly greater than $3$ years, so it is not less than $3$ years in any case.',
          rubric: OK3
        },
        {
          label: '2',
          marks: 3,
          prompt:
            'Find the simplest form of $(a-b)^5 + (b-a)^5.$\n\nA. $0$\nB. $2(a-b)^5$\nC. $2(a+b)^5$\nD. $2a^5-2b^5$\nE. $2a^5+2b^5$',
          answer: 'A. $0$',
          principle: 'Use the odd-power sign identity $(-u)^n = -u^n$ for odd integers $n$.',
          solution:
            'Observe that $b - a = -(a - b)$. Since the exponent $5$ is odd,\n$$(b-a)^5 = (-(a-b))^5 = (-1)^5 (a-b)^5 = -(a-b)^5.$$\nSubstituting this into the given expression yields\n$$(a-b)^5 + (b-a)^5 = (a-b)^5 - (a-b)^5 = 0.$$',
          rubric: OK3
        },
        {
          label: '3',
          marks: 3,
          prompt:
            'How many solutions does the equation $2^{2x}=4^{x+1}$ have?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. Infinitely many',
          answer: 'A. $0$',
          principle: 'Rewrite both sides with the same positive base $2$ and equate exponents.',
          solution:
            'Using $4 = 2^2$, rewrite the right-hand side as\n$$4^{x+1} = (2^2)^{x+1} = 2^{2(x+1)} = 2^{2x+2}.$$\nThe equation becomes\n$$2^{2x} = 2^{2x+2}.$$\nSince the exponential function $t \\mapsto 2^t$ is strictly increasing (hence one-to-one), this implies\n$$2x = 2x + 2 \\implies 0 = 2,$$\na contradiction. Therefore, the equation has $0$ solutions.',
          rubric: OK3
        },
        {
          label: '5',
          marks: 3,
          prompt:
            'We add the $31$ integers from $2001$ to $2031$ and divide the sum by $31.$ What result do we get?\n\nA. $2012$\nB. $2013$\nC. $2015$\nD. $2016$\nE. $2496$',
          answer: 'D. $2016$',
          principle: 'The arithmetic mean of an arithmetic progression equals the average of its first and last terms.',
          solution:
            'The integers $2001, 2002, \\ldots, 2031$ form an arithmetic progression of $31$ terms. Using the arithmetic series sum formula $S_n = \\frac{n}{2}(a_1 + a_n)$,\n$$\\frac{2001 + 2002 + \\cdots + 2031}{31} = \\frac{\\frac{31}{2}(2001 + 2031)}{31} = \\frac{2001 + 2031}{2} = \\frac{4032}{2} = 2016.$$',
          rubric: OK3
        },
        {
          label: '10',
          marks: 3,
          prompt:
            'Which of the following is the complete list of the number of acute angles a convex quadrilateral can have?\n\nA. $0, 1, 2$\nB. $0, 1, 2, 3$\nC. $0, 1, 2, 3, 4$\nD. $0, 1, 3$\nE. $1, 2, 3$',
          answer: 'B. $0, 1, 2, 3$',
          principle: 'The four interior angles of a convex quadrilateral lie in $(0^\\circ, 180^\\circ)$ and sum to $360^\\circ$.',
          solution:
            'Let the four interior angles of a convex quadrilateral be $\\alpha, \\beta, \\gamma, \\delta \\in (0^\\circ, 180^\\circ)$ with $\\alpha + \\beta + \\gamma + \\delta = 360^\\circ$.\n- $4$ acute angles is impossible: if $\\alpha, \\beta, \\gamma, \\delta < 90^\\circ$, then $\\alpha + \\beta + \\gamma + \\delta < 4 \\cdot 90^\\circ = 360^\\circ$, a contradiction.\n- $0$ acute angles: achievable by a rectangle with angles $90^\\circ, 90^\\circ, 90^\\circ, 90^\\circ$.\n- $1$ acute angle: achievable by a right trapezoid with angles $80^\\circ, 90^\\circ, 90^\\circ, 100^\\circ$.\n- $2$ acute angles: achievable by an isosceles trapezoid with angles $60^\\circ, 60^\\circ, 120^\\circ, 120^\\circ$.\n- $3$ acute angles: achievable by a convex kite formed from two congruent $40^\\circ\\text{-}80^\\circ\\text{-}60^\\circ$ triangles joined along the side opposite the $80^\\circ$ angle, giving interior angles $80^\\circ, 80^\\circ, 80^\\circ, 120^\\circ$.\nHence the complete list is $0, 1, 2, 3$.',
          rubric: OK3
        }
      ]
    },
    {
      no: 2,
      title: '4 Point Problems',
      marks: 28,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 7 included 4-point problems (original numbering preserved; 4 points each).',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt:
            'Find the value of\n$$\\sqrt{(2015+2015)+(2015-2015)+(2015\\cdot 2015)+(2015:2015)}.$$\n\nA. $\\sqrt{2015}$\nB. $2015$\nC. $2016$\nD. $2017$\nE. $4030$',
          answer: 'C. $2016$',
          principle: 'Let $n = 2015$ and recognize the perfect square identity $n^2 + 2n + 1 = (n+1)^2$.',
          solution:
            'Let $n = 2015$, where $:$ denotes division. Evaluating each parenthetical term gives\n$$(n+n) + (n-n) + (n \\cdot n) + (n \\div n) = 2n + 0 + n^2 + 1 = n^2 + 2n + 1 = (n + 1)^2.$$\nSince $n + 1 = 2016 > 0$, taking the principal square root yields\n$$\\sqrt{(2015+1)^2} = 2016.$$',
          rubric: OK4
        },
        {
          label: '12',
          marks: 4,
          prompt:
            'The $X$-axis and the graphs of the functions $f(x)=2x-2$ and $g(x)=x^2-1$ split the Cartesian plane into $\\cdots$\n\nA. $7$ regions\nB. $8$ regions\nC. $9$ regions\nD. $10$ regions\nE. $11$ regions',
          answer: 'A. $7$ regions',
          principle: 'Find all pairwise intersections (including tangency) and track how each curve subdivides the regions formed by the previous curves.',
          solution:
            'First consider the $X$-axis ($y = 0$) and the parabola $g(x) = x^2 - 1$. They intersect at $(-1, 0)$ and $(1, 0)$, dividing the plane into $5$ regions:\n1. Above both curves: $y > \\max(0, x^2 - 1)$.\n2. Bounded region inside the parabola below the $X$-axis: $-1 < x < 1$ and $x^2 - 1 < y < 0$.\n3. Left upper wedge: $x < -1$ and $0 < y < x^2 - 1$.\n4. Right upper wedge: $x > 1$ and $0 < y < x^2 - 1$.\n5. Below both curves: $y < \\min(0, x^2 - 1)$.\n\nNow add the line $f(x) = 2x - 2$. Comparing $g(x)$ and $f(x)$ gives\n$$g(x) - f(x) = (x^2 - 1) - (2x - 2) = (x - 1)^2 \\ge 0,$$\nwith equality if and only if $x = 1$. Thus the line is tangent to the parabola at $(1, 0)$ (where it also crosses the $X$-axis) and satisfies $f(x) < g(x)$ for all $x \\ne 1$:\n- For $x < 1$, we have $f(x) < \\min(0, x^2 - 1)$, so the ray of the line with $x < 1$ lies entirely inside region 5 and splits it into $2$ regions.\n- For $x > 1$, we have $0 < f(x) < x^2 - 1$, so the ray of the line with $x > 1$ lies entirely inside region 4 and splits it into $2$ regions.\nThe line does not enter regions 1, 2, or 3. Hence the total number of regions is $5 + 1 + 1 = 7$.',
          rubric: OK4
        },
        {
          label: '14',
          marks: 4,
          prompt:
            'Given five different positive integers $a$, $b$, $c$, $d$, $e$, we know that $c:e=b$, $a+b=d$ and $e-d=a.$ Which of the numbers $a$, $b$, $c$, $d$, $e$ is the largest?\n\nA. $a$\nB. $b$\nC. $c$\nD. $d$\nE. $e$',
          answer: 'C. $c$',
          principle: 'Chain strict inequalities from the positivity and distinctness of the integers.',
          solution:
            'Because $a, b, c, d, e$ are distinct positive integers, each is at least $1$.\n1. From $a + b = d$ with $a \\ge 1$ and $b \\ge 1$, we have $d > a$ and $d > b$.\n2. From $e - d = a$, we have $e = a + d$. Since $a \\ge 1$, it follows that $e > d$, so $e$ is strictly greater than $a, b,$ and $d$.\n3. From $c : e = b$, we have $c = b \\cdot e$. Could $b = 1$? If $b = 1$, then $c = e$, contradicting that the five integers are different. Thus $b \\ge 2$, which implies $c = b \\cdot e \\ge 2e > e$.\nCombining these gives $c > e > d > a$ and $e > b$, so $c$ is the largest. (For example, $a = 1, b = 2, d = 3, e = 4, c = 8$.)',
          rubric: OK4
        },
        {
          label: '15',
          marks: 4,
          prompt:
            'The geometric mean of a set of $n$ positive numbers is defined as the $n$-th root of the product of those numbers. The geometric mean of a set of three numbers is $3$ and the geometric mean of another set of three numbers is $12$. What is the geometric mean of the combined set of six numbers?\n\nA. $4$\nB. $6$\nC. $\\frac{15}{2}$\nD. $\\frac{15}{6}$\nE. $36$',
          answer: 'B. $6$',
          principle: 'Express the product of each subset using its geometric mean, then take the $6$-th root of the total product.',
          solution:
            'Let $a, b, c$ be the first three numbers and $d, e, f$ be the second three numbers. By definition,\n$$\\sqrt[3]{abc} = 3 \\implies abc = 3^3, \\qquad \\sqrt[3]{def} = 12 \\implies def = 12^3.$$\nThe geometric mean of the combined set of six numbers is\n$$\\sqrt[6]{abcdef} = \\sqrt[6]{3^3 \\cdot 12^3} = \\sqrt[6]{(3 \\cdot 12)^3} = \\sqrt[6]{36^3} = \\sqrt{36} = 6.$$',
          rubric: OK4
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'An automobile dealer bought two cars. He sold the first one for $40\\%$ more than he paid for it and the second one for $60\\%$ more than he paid for it. The money he received for the two cars was $54\\%$ more than what he paid for both. The ratio of the prices the dealer paid for the first and second car was $\\cdots$\n\nA. $10 : 13$\nB. $20 : 27$\nC. $3 : 7$\nD. $7 : 12$\nE. $2 : 3$',
          answer: 'C. $3 : 7$',
          principle: 'Set up a linear equation equating total selling revenue in terms of the two purchase prices.',
          solution:
            'Let $x$ and $y$ be the purchase prices of the first and second cars, respectively. Selling the first car for $40\\%$ more yields $1.4x$, and selling the second for $60\\%$ more yields $1.6y$. Since total revenue is $54\\%$ more than total cost $x + y$,\n$$1.4x + 1.6y = 1.54(x + y).$$\nMultiplying both sides by $100$ gives\n$$140x + 160y = 154x + 154y \\implies 6y = 14x \\implies \\frac{x}{y} = \\frac{6}{14} = \\frac{3}{7}.$$\nThus the ratio of the purchase prices is $3 : 7$.',
          rubric: OK4
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Bibi has a die with the numbers $1$, $2$, $3$, $4$, $5$ and $6$ on its six faces. Tina has a die which is special: it has the numbers $2$, $2$, $2$, $5$, $5$ and $5$ on its six faces. When Bibi and Tina roll their dice, the one with the highest number wins. If the two numbers are equal, it is a draw. What is the probability that Tina wins?\n\nA. $\\frac{1}{3}$\nB. $\\frac{7}{18}$\nC. $\\frac{5}{12}$\nD. $\\frac{1}{2}$\nE. $\\frac{11}{18}$',
          answer: 'C. $\\frac{5}{12}$',
          principle: 'Condition on Tina\'s two equally likely outcomes ($2$ and $5$) using independence of the two dice.',
          solution:
            'Tina\'s die shows $2$ on $3$ faces and $5$ on $3$ faces, so $P(\\text{Tina rolls } 2) = \\frac{1}{2}$ and $P(\\text{Tina rolls } 5) = \\frac{1}{2}$.\n- If Tina rolls $2$, she wins if and only if Bibi rolls $1$, which happens with probability $\\frac{1}{6}$.\n- If Tina rolls $5$, she wins if and only if Bibi rolls $1, 2, 3,$ or $4$, which happens with probability $\\frac{4}{6} = \\frac{2}{3}$.\nBy the law of total probability,\n$$P(\\text{Tina wins}) = \\frac{1}{2} \\cdot \\frac{1}{6} + \\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{1}{12} + \\frac{1}{3} = \\frac{5}{12}.$$',
          rubric: OK4
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'There are $2015$ marbles in a cane. The marbles are numbered from $1$ to $2015$. Marbles with equal digit sums have the same color and marbles with different digit sums have different colors. How many different colors of marbles are there in the cane?\n\nA. $10$\nB. $27$\nC. $28$\nD. $29$\nE. $2015$',
          answer: 'C. $28$',
          principle: 'Find the minimum and maximum possible digit sums on $[1, 2015]$ and verify that every intermediate integer sum occurs.',
          solution:
            'Let $S(n)$ denote the sum of the digits of $n$ for $1 \\le n \\le 2015$.\n- Minimum value: $S(1) = 1$, and every positive integer has $S(n) \\ge 1$.\n- Maximum value: If $2000 \\le n \\le 2015$, the largest digit sum is $S(2009) = 2 + 0 + 0 + 9 = 11$. If $1 \\le n \\le 1999$, the thousands digit is at most $1$ and the remaining three digits are at most $9$, giving $S(n) \\le 1 + 9 + 9 + 9 = 28$, achieved at $n = 1999$.\nEvery integer from $1$ to $28$ is achieved, for instance by:\n$$1, 2, \\ldots, 9 \\;(1\\text{-}9), \\quad 19, 29, \\ldots, 99 \\;(10\\text{-}18), \\quad 199, 299, \\ldots, 999 \\;(19\\text{-}27), \\quad 1999 \\;(28).$$\nHence there are $28$ distinct digit sums and therefore $28$ different colors.',
          rubric: OK4
        }
      ]
    },
    {
      no: 3,
      title: '5 Point Problems',
      marks: 45,
      stem: 'Choose the best answer (A, B, C, D, or E) for each of the 9 included 5-point problems (original numbering preserved; 5 points each).',
      parts: [
        {
          label: '21',
          marks: 5,
          prompt:
            'The following is the multiplication table of the numbers $1$ to $10$.\n$$\\begin{array}{c|ccccc} \\times & 1 & 2 & 3 & \\cdots & 10 \\\\ \\hline 1 & 1 & 2 & 3 & \\cdots & 10 \\\\ 2 & 2 & 4 & 6 & \\cdots & 20 \\\\ \\vdots & \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 10 & 10 & 20 & 30 & \\cdots & 100 \\\\ \\end{array}$$\nWhat is the sum of all $100$ products in the complete table?\n\nA. $1000$\nB. $2025$\nC. $2500$\nD. $3025$\nE. $5500$',
          answer: 'D. $3025$',
          principle: 'Factor the double sum $\\sum_{i=1}^{10}\\sum_{j=1}^{10} ij = (\\sum_{i=1}^{10} i)^2$.',
          solution:
            'The $i$-th row of the table has sum $i(1 + 2 + \\cdots + 10)$. Let $S = 1 + 2 + \\cdots + 10 = \\frac{10 \\cdot 11}{2} = 55$. Summing over all $10$ rows and factoring out $S$ gives\n$$\\sum_{i=1}^{10} \\sum_{j=1}^{10} ij = \\sum_{i=1}^{10} iS = (1 + 2 + \\cdots + 10) S = S^2 = 55^2 = 3025.$$',
          rubric: OK5
        },
        {
          label: '23',
          marks: 5,
          prompt:
            'When reading the following statements from option A to E, what is the first statement which is true?\n\nA. C is true\nB. A is true\nC. E is false\nD. B is false\nE. $1 + 1 = 2$',
          answer: 'D. B is false',
          principle: 'Anchor the logical chain on the unconditionally true arithmetic statement E and propagate truth values backward.',
          solution:
            'Statement E asserts $1 + 1 = 2$, which is true.\n- Since E is true, statement C ("E is false") is false.\n- Since C is false, statement A ("C is true") is false.\n- Since A is false, statement B ("A is true") is false.\n- Since B is false, statement D ("B is false") is true.\nReading from A to E, the truth values are F, F, F, T, T, so the first true statement is D.',
          rubric: OK5
        },
        {
          label: '24',
          marks: 5,
          prompt:
            'How many regular polygons exist such that their angles (in degrees) are integers?\n\nA. $17$\nB. $18$\nC. $22$\nD. $25$\nE. $60$',
          answer: 'C. $22$',
          principle: 'The interior angle $180^\\circ - \\frac{360^\\circ}{n}$ is an integer if and only if $n \\mid 360$ with $n \\ge 3$.',
          solution:
            'A regular $n$-gon ($n \\ge 3$) has interior angle\n$$\\frac{(n - 2) \\cdot 180^\\circ}{n} = 180^\\circ - \\frac{360^\\circ}{n}.$$\nThis measure (in degrees) is an integer if and only if $n$ is a positive divisor of $360$ satisfying $n \\ge 3$. Factoring $360 = 2^3 \\cdot 3^2 \\cdot 5^1$, the total number of positive divisors of $360$ is\n$$(3 + 1)(2 + 1)(1 + 1) = 4 \\cdot 3 \\cdot 2 = 24.$$\nExcluding $n = 1$ and $n = 2$ (which do not form polygons) leaves $24 - 2 = 22$ regular polygons.',
          rubric: OK5
        },
        {
          label: '25',
          marks: 5,
          prompt:
            'How many $3$-digit positive integers can be represented as the sum of exactly nine different powers of $2$?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $5$',
          answer: 'E. $5$',
          principle: 'Represent the integer in base $2$ with binary weight $9$ and bound the highest bit to stay in $[100, 999]$.',
          solution:
            'Any integer equal to the sum of $9$ distinct powers of $2$ has non-negative integer exponents $a_1 > a_2 > \\cdots > a_9 \\ge 0$ (since distinct negative powers of $2$ sum to strictly between $0$ and $1$ and cannot contribute to an integer). Thus its binary representation has exactly nine $1$-bits.\nFor the integer $N$ to be a $3$-digit number ($100 \\le N \\le 999$), the largest exponent $a_1$ must satisfy $a_1 \\ge 8$ (to fit nine distinct exponents $\\ge 0$) and $2^{a_1} \\le 999 < 1024 = 2^{10}$, so $a_1 \\in \\{8, 9\\}$.\n- Case $a_1 = 8$: All $9$ exponents from $0$ to $8$ must be used, giving $1$ number:\n$$N = 2^8 + 2^7 + \\cdots + 2^0 = 2^9 - 1 = 511.$$\n- Case $a_1 = 9$: We choose $8$ exponents from $\\{0, 1, \\ldots, 8\\}$, which amounts to omitting one exponent $k \\in \\{0, 1, \\ldots, 8\\}$ from $2^{10} - 1 = 1023$. Thus $N = 1023 - 2^k$. For $N \\le 999$, we need\n$$1023 - 2^k \\le 999 \\iff 2^k \\ge 24 \\iff k \\in \\{5, 6, 7, 8\\},$$\nyielding $4$ numbers: $1023 - 32 = 991$, $1023 - 64 = 959$, $1023 - 128 = 895$, and $1023 - 256 = 767$.\nIn total there are $1 + 4 = 5$ such $3$-digit integers.',
          rubric: OK5
        },
        {
          label: '26',
          marks: 5,
          prompt:
            'How many triangles $ABC$ with $\\angle ABC=90^\\circ$ and $AB=20$ exist such that all sides have integer lengths?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $6$',
          answer: 'D. $4$',
          principle: 'Factor $c^2 - b^2 = (c - b)(c + b) = 400$ into same-parity positive divisor pairs with $c - b < c + b$.',
          solution:
            'Since $\\angle ABC = 90^\\circ$, $AB = 20$ and $BC = b$ are the legs and $AC = c$ is the hypotenuse. By the Pythagorean theorem,\n$$20^2 + b^2 = c^2 \\implies (c - b)(c + b) = 400.$$\nBecause $b, c \\in \\mathbb{Z}^+$, the factors $c - b$ and $c + b$ are positive integers of the same parity satisfying $c - b < c + b$. Since their product $400$ is even, both must be even. Writing $c - b = 2u$ and $c + b = 2v$ gives $uv = 100$ with $1 \\le u < v$, and then $b = v - u$, $c = v + u$.\nThe divisors of $100 = 2^2 \\cdot 5^2$ yield $4$ valid pairs $(u, v)$ with $u < v$:\n- $(1, 100) \\implies (b, c) = (99, 101)$\n- $(2, 50) \\implies (b, c) = (48, 52)$\n- $(4, 25) \\implies (b, c) = (21, 29)$\n- $(5, 20) \\implies (b, c) = (15, 25)$\n(Note $u = v = 10$ gives $b = 0$, which is degenerate.) Thus $4$ such right triangles exist.',
          rubric: OK5
        },
        {
          label: '27',
          marks: 5,
          prompt:
            'In rectangle $ABCD$, $M_1$ is the midpoint of $CD$, $M_2$ is the midpoint of $AM_1$, $M_3$ is the midpoint of $BM_2$, and $M_4$ is the midpoint of $CM_3$. Find the ratio between the areas of quadrilateral $M_1M_2M_3M_4$ and rectangle $ABCD$.\n\nA. $\\frac{7}{16}$\nB. $\\frac{3}{16}$\nC. $\\frac{7}{32}$\nD. $\\frac{9}{32}$\nE. $\\frac{1}{5}$',
          answer: 'C. $\\frac{7}{32}$',
          principle: 'Assign coordinates $A(0,0), B(x,0), C(x,y), D(0,y)$ (or dissect by midpoints) and subtract the four surrounding triangles from $[ABCD]$.',
          solution:
            'Place the rectangle in the coordinate plane with $A(0, 0)$, $B(x, 0)$, $C(x, y)$, and $D(0, y)$, so $[ABCD] = xy$. Computing each midpoint successively:\n$$M_1 = \\left(\\frac{x}{2}, y\\right), \\quad M_2 = \\left(\\frac{x}{4}, \\frac{y}{2}\\right), \\quad M_3 = \\left(\\frac{5x}{8}, \\frac{y}{4}\\right), \\quad M_4 = \\left(\\frac{13x}{16}, \\frac{5y}{8}\\right).$$\nBecause $M_2$ lies on $AM_1$, $M_3$ lies on $BM_2$, and $M_4$ lies on $CM_3$, quadrilateral $M_1M_2M_3M_4$ is obtained by removing four non-overlapping triangles from rectangle $ABCD$:\n- $[ADM_1] = \\frac{1}{2} \\cdot AD \\cdot DM_1 = \\frac{1}{2} \\cdot y \\cdot \\frac{x}{2} = \\frac{1}{4}xy$.\n- $[ABM_2] = \\frac{1}{2} \\cdot AB \\cdot y_{M_2} = \\frac{1}{2} \\cdot x \\cdot \\frac{y}{2} = \\frac{1}{4}xy$.\n- $[BCM_3] = \\frac{1}{2} \\cdot BC \\cdot (x - x_{M_3}) = \\frac{1}{2} \\cdot y \\cdot \\frac{3x}{8} = \\frac{3}{16}xy$.\n- $[CM_1M_4] = \\frac{1}{2} \\cdot CM_1 \\cdot (y - y_{M_4}) = \\frac{1}{2} \\cdot \\frac{x}{2} \\cdot \\frac{3y}{8} = \\frac{3}{32}xy$.\nSubtracting from $[ABCD]$ gives\n$$[M_1M_2M_3M_4] = xy\\left(1 - \\frac{1}{4} - \\frac{1}{4} - \\frac{3}{16} - \\frac{3}{32}\\right) = \\frac{7}{32}xy,$$\nso the required ratio is $\\frac{7}{32}$.',
          rubric: OK5
        },
        {
          label: '28',
          marks: 5,
          prompt:
            'Blue and red rectangles are drawn on a blackboard. Exactly $7$ of the rectangles are squares. There are $3$ red rectangles more than blue squares. There are $2$ red squares more than blue rectangles. How many blue rectangles are there on the blackboard?\n\nA. $1$\nB. $3$\nC. $5$\nD. $6$\nE. $10$',
          answer: 'B. $3$',
          principle: 'Remember that every square is also a rectangle; translate the counts into integer equations and inequalities.',
          solution:
            'Every square is a rectangle. Let $a$ be the number of blue squares, $b$ the number of blue non-square rectangles, $c$ the number of red squares, and $d$ the number of red non-square rectangles (all non-negative integers). The three conditions give:\n1. $a + c = 7$,\n2. $c + d = a + 3$,\n3. $c = (a + b) + 2$.\nSubstituting $c = 7 - a$ from (1) into (3) gives\n$$7 - a = a + b + 2 \\implies 2a + b = 5.$$\nSubstituting $c = 7 - a$ into (2) gives\n$$7 - a + d = a + 3 \\implies 2a = 4 + d.$$\nSince $d \\ge 0$, we have $2a \\ge 4 \\implies a \\ge 2$. Since $b \\ge 0$ and $2a + b = 5$, we have $2a \\le 5 \\implies a \\le 2$. Hence $a = 2$, which forces $b = 1$ (and $c = 5, d = 0$). Therefore, the total number of blue rectangles is $a + b = 2 + 1 = 3$.',
          rubric: OK5
        },
        {
          label: '29',
          marks: 5,
          prompt:
            'A total of $96$ members of a counting club are standing in a large circle. They start saying numbers $1$, $2$, $3$, etc. in turn, going around the circle. Every member that says an even number steps out of the circle and the rest continue, starting the second round with $97$. They continue in this way until only one member is left. Which number did this member say in the first round?\n\nA. $1$\nB. $17$\nC. $33$\nD. $65$\nE. $95$',
          answer: 'D. $65$',
          principle: 'Track the remaining labels round by round; whenever a round has an even number of members and starts on an odd count, the second half of each pair steps out.',
          solution:
            'Label each member by the number $k \\in \\{1, 2, \\ldots, 96\\}$ they say in Round $1$:\n- Round $1$ ($96$ members, counts $1$ to $96$): All even-numbered members leave. The remaining $48$ members have labels $1, 3, 5, \\ldots, 95$ ($k \\equiv 1 \\pmod 2$), and the last count was $96$ (even).\n- Round $2$ ($48$ members, counts $97$ to $144$): Starting with an odd count ($97$), every second remaining member says an even number and leaves. The $24$ survivors have labels $1, 5, 9, \\ldots, 93$ ($k \\equiv 1 \\pmod 4$), and the last count was $144$ (even).\n- Round $3$ ($24$ members, counts $145$ to $168$): The $12$ survivors have labels $1, 9, 17, \\ldots, 89$ ($k \\equiv 1 \\pmod 8$), ending at $168$ (even).\n- Round $4$ ($12$ members, counts $169$ to $180$): The $6$ survivors have labels $1, 17, 33, 49, 65, 81$, ending at $180$ (even).\n- Round $5$ ($6$ members, counts $181$ to $186$): Members $17, 49, 81$ say even numbers and leave, leaving $3$ members: $1, 33, 65$.\n- Round $6$ ($3$ members, counts $187$ to $189$): Member $1$ says $187$ (stays), member $33$ says $188$ (leaves), member $65$ says $189$ (stays).\n- Round $7$ ($2$ members, starting at $190$): Member $1$ says $190$ (even) and steps out, leaving member $65$ as the sole survivor.\nThus the last remaining member said $65$ in the first round.',
          rubric: OK5
        },
        {
          label: '30',
          marks: 5,
          prompt:
            'In the word KANGAROO Bill and Bob replace the letters by digits, so that the resulting numbers are multiples of $11$. They each replace different letters by different digits and the same letters by the same digits ($K\\neq 0$). Bill obtains the largest possible such number and Bob the smallest. In both cases one of the letters is replaced by the same digit. Which digit is this?\n\nA. $0$\nB. $3$\nC. $4$\nD. $5$\nE. $6$',
          answer: 'D. $5$',
          principle: 'Apply the alternating-sum divisibility test for $11$ to KANGAROO, noticing that $A$ and $O$ cancel.',
          solution:
            'In the $8$-digit number $\\text{KANGAROO}$, the alternating sum of digits from left to right is\n$$(K + N + A + O) - (A + G + R + O) = (K + N) - (G + R),$$\nso the number is divisible by $11$ if and only if $(K + N) - (G + R) \\equiv 0 \\pmod{11}$. Since $K, N, G, R$ are distinct digits in $\\{0, \\ldots, 9\\}$, we have $-16 \\le (K + N) - (G + R) \\le 16$, so $(K + N) - (G + R) \\in \\{-11, 0, 11\\}$.\n\n**Largest number (Bill):** Maximize from left to right by choosing $K = 9$, $A = 8$, $N = 7$. Then $K + N = 16$, and the remaining digits are from $\\{0, 1, 2, 3, 4, 5, 6\\}$, so $G + R \\le 6 + 5 = 11 < 16$; hence we must have $G + R = 5$. To maximize $G$, we cannot take $G = 6$ (since $R = -1$ is invalid), so $G = 5$ and $R = 0$. Taking the largest remaining digit $O = 6$ yields $98758066$ (check: $9-8+7-5+8-0+6-6 = 11$).\n\n**Smallest number (Bob):** Minimize from left to right with $K \\ne 0$ by choosing $K = 1$, $A = 0$, $N = 2$. Then $K + N = 3$, and the remaining digits are from $\\{3, 4, 5, 6, 7, 8, 9\\}$, so $G + R \\ge 3 + 4 = 7 > 3$; hence we must have $G + R = 14$. To minimize $G$, note $G = 3$ or $4$ requires $R \\ge 10$, whereas $G = 5$ gives $R = 9$. Taking the smallest remaining digit $O = 3$ yields $10250933$ (check: $1-0+2-5+0-9+3-3 = -11$).\n\nComparing Bill\'s assignment $(K,A,N,G,R,O) = (9,8,7,5,0,6)$ and Bob\'s $(1,0,2,5,9,3)$, the shared letter-digit pair is $G = 5$, so the common digit is $5$.',
          rubric: OK5
        }
      ]
    }
  ]
};
