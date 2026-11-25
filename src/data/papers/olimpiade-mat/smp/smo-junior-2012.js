/**
 * Paket Soal Terstruktur: SMO 2012 Junior Section (First Round)
 * Sumber: scraped_raw/smo-junior-2012.md (Singapore Mathematical Olympiad 2012 Junior Section).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Kept: 29 questions (MCQ: 1, 2, 3, 10; Short Questions: 11-35).
 * Skipped: 6 questions (4, 5, 6, 7, 8, 9) due to missing diagrams or unreadable OCR formulas/options.
 */
const OK = [{ code: 'A1', text: 'Correct answer matching the solution.' }];

export default {
  id: 'smo-junior-2012',
  slug: 'smo-junior-2012',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'SMO 2012 Junior Section (First Round)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab4-bentuk-aljabar',
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab2-teorema-pythagoras',
    'smp8-bab6-statistika',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SMO',
  title: 'SMO Junior — 2012 (First Round)',
  totalMarks: 29,
  instructions:
    'Attempt all 29 included questions (1 mark each; total 29 marks; no calculators allowed). Throughout this paper, $\\lfloor x \\rfloor$ denotes the greatest integer less than or equal to $x$. From the original 35-question paper (Q1–Q10 Multiple Choice, Q11–Q35 Short Questions), 29 questions are kept (Q1–Q3, Q10, and Q11–Q35) and 6 questions are skipped: Q5 and Q6 depend on missing diagrams, Q4 and Q7 have unreadable/missing MCQ options in the source scan, and Q8 and Q9 have missing or unreadable formulas even with the printed solution. For Q26, the inscribed rectangle configuration from the original figure is stated in words.',
  source: {
    org: 'Singapore Mathematical Society — SMO Junior',
    file: 'scraped_raw/smo-junior-2012.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple Choice Questions',
      marks: 4,
      stem: 'Choose the single correct option (A, B, C, D, or E) for each multiple-choice question (4 kept questions from Q1–Q10, 1 mark each).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Let $\\alpha$ and $\\beta$ be the roots of the quadratic equation $x^2 + 2bx + b = 1$. The smallest possible value of $(\\alpha - \\beta)^2$ is\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'D. $3$',
          principle: 'Use Vieta\'s formulas to express $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$, then complete the square.',
          solution:
            'Rewrite the quadratic equation in standard form:\n$$x^2 + 2bx + (b - 1) = 0.$$\nBy Vieta\'s formulas, $\\alpha + \\beta = -2b$ and $\\alpha\\beta = b - 1$. Therefore,\n$$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta = (-2b)^2 - 4(b - 1) = 4b^2 - 4b + 4.$$\nCompleting the square gives\n$$(\\alpha - \\beta)^2 = 4\\left(b^2 - b + 1\\right) = 4\\left[\\left(b - \\frac{1}{2}\\right)^2 + \\frac{3}{4}\\right] = 4\\left(b - \\frac{1}{2}\\right)^2 + 3 \\ge 3.$$\nEquality holds when $b = \\frac{1}{2}$ (note also that the discriminant $\\Delta = (\\alpha - \\beta)^2 \\ge 3 > 0$, so the roots $\\alpha$ and $\\beta$ are real for every real $b$). Hence the smallest possible value is $3$.',
          rubric: OK
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'It is known that $n^{2012} + n^{2010}$ is divisible by $10$ for some positive integer $n$. Which of the following numbers is not a possible value for $n$?\n\nA. $2$\nB. $13$\nC. $35$\nD. $47$\nE. $59$',
          answer: 'E. $59$',
          principle: 'Factor $n^{2012} + n^{2010} = n^{2010}(n^2 + 1)$ and check divisibility by $2$ and $5$ via units digits.',
          solution:
            'Factor the expression as\n$$n^{2012} + n^{2010} = n^{2010}(n^2 + 1).$$\nFor a positive integer to be divisible by $10$, it must be divisible by both $2$ and $5$. Test each option:\n- **$n = 2$:** $2^{2010}$ is divisible by $2$, and $2^2 + 1 = 5$ is divisible by $5$, so $10 \\mid n^{2010}(n^2 + 1)$.\n- **$n = 13$:** $13^2 + 1 = 170$ is divisible by $10$, so $10 \\mid n^{2010}(n^2 + 1)$.\n- **$n = 35$:** $35^{2010}$ is divisible by $5$, and $35^2 + 1$ is even, so $10 \\mid n^{2010}(n^2 + 1)$.\n- **$n = 47$:** $47^2 + 1 \\equiv 7^2 + 1 = 50 \\equiv 0 \\pmod{10}$, so $10 \\mid (n^2 + 1)$.\n- **$n = 59$:** $59^{2010}$ is odd and not divisible by $5$, while $59^2 + 1 \\equiv 9^2 + 1 = 82 \\equiv 2 \\pmod{10}$ is not divisible by $5$. Hence $5 \\nmid n^{2010}(n^2 + 1)$, so $10 \\nmid (59^{2012} + 59^{2010})$.\n\nThus $59$ is not a possible value for $n$.',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Using the vertices of a cube as vertices, how many triangular pyramids can you form?\n\nA. $54$\nB. $58$\nC. $60$\nD. $64$\nE. $70$',
          answer: 'B. $58$',
          principle: 'A triangular pyramid (tetrahedron) is formed by any $4$ non-coplanar vertices of the cube; subtract coplanar $4$-tuples from $\\binom{8}{4}$.',
          solution:
            'A cube has $8$ vertices, so there are\n$$\\binom{8}{4} = \\frac{8 \\times 7 \\times 6 \\times 5}{4 \\times 3 \\times 2 \\times 1} = 70$$\nways to choose $4$ vertices. Four chosen vertices form a non-degenerate triangular pyramid if and only if they do not all lie on the same plane.\n\nCount the coplanar $4$-tuples of vertices of the cube:\n1. The $6$ faces of the cube each contain $4$ coplanar vertices ($6$ sets).\n2. Each of the $6$ pairs of opposite parallel edges defines a diagonal rectangle passing through $4$ coplanar vertices ($6$ sets).\n\nNo other $4$ vertices of a cube are coplanar, so there are $6 + 6 = 12$ degenerate (coplanar) choices. Therefore, the number of triangular pyramids is\n$$70 - 12 = 58.$$',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Suppose that $A, B, C$ are three teachers working in three different schools $X, Y, Z$ and specializing in three different subjects: Mathematics, Latin and Music. It is known that\n(i) $A$ does not teach Mathematics and $B$ does not work in school $Z$;\n(ii) The teacher in school $Z$ teaches Music;\n(iii) The teacher in school $X$ does not teach Latin;\n(iv) $B$ does not teach Mathematics.\n\nWhich of the following statements is correct?\n\nA. $B$ works in school $X$ and $C$ works in school $Y$\nB. $A$ teaches Latin and works in school $Z$\nC. $B$ teaches Latin and works in school $Y$\nD. $A$ teaches Music and $C$ teaches Latin\nE. None of the above',
          answer: 'C. $B$ teaches Latin and works in school $Y$',
          principle: 'Use logical elimination on one-to-one assignments between teachers, schools, and subjects.',
          solution:
            'Determine each teacher\'s subject and school step by step:\n1. By (i) and (iv), neither $A$ nor $B$ teaches Mathematics, so **$C$ teaches Mathematics**.\n2. By (ii), the teacher in school $Z$ teaches Music. Since $C$ teaches Mathematics, $C$ does not work in $Z$. By (i), $B$ does not work in $Z$ either. Hence **$A$ works in school $Z$**, and by (ii) **$A$ teaches Music**.\n3. The only remaining subject for $B$ is Latin, so **$B$ teaches Latin**.\n4. By (iii), the teacher in school $X$ does not teach Latin, so $B$ cannot work in school $X$. Since $A$ works in $Z$, **$B$ works in school $Y$** and **$C$ works in school $X$**.\n\nChecking the options, only statement C ($B$ teaches Latin and works in school $Y$) is true.',
          rubric: OK
        }
      ]
    },
    {
      no: 2,
      title: 'Short Questions',
      marks: 25,
      stem: 'Write down the exact numerical answer for each short-answer question (25 questions, Q11–Q35, 1 mark each).',
      parts: [
        {
          label: '11',
          marks: 1,
          prompt:
            'Let $a$ and $b$ be real numbers such that $a > b$, $2^a + 2^b = 75$ and $2^{-a} + 2^{-b} = 12^{-1}$. Find the value of $2^{a-b}$.',
          answer: '$4$',
          principle: 'Multiply $(2^a + 2^b)(2^{-a} + 2^{-b})$ to form a symmetric equation in $t = 2^{a-b}$.',
          solution:
            'Multiply the two given equations:\n$$(2^a + 2^b)(2^{-a} + 2^{-b}) = 75 \\times \\frac{1}{12} = \\frac{25}{4}.$$\nExpanding the left-hand side gives\n$$1 + 2^{a-b} + 2^{b-a} + 1 = \\frac{25}{4} \\implies 2^{a-b} + 2^{-(a-b)} = \\frac{17}{4}.$$\nLet $t = 2^{a-b}$. Since $a > b$, we have $t > 1$, and\n$$t + \\frac{1}{t} = \\frac{17}{4} \\implies 4t^2 - 17t + 4 = 0 \\implies (4t - 1)(t - 4) = 0.$$\nBecause $t > 1$, we obtain $t = 2^{a-b} = 4$.\n(Check: $2^a = 4 \\cdot 2^b$ and $5 \\cdot 2^b = 75$ give $2^b = 15$ and $2^a = 60$, so $2^{-a} + 2^{-b} = \\frac{1}{60} + \\frac{1}{15} = \\frac{1}{12}$.)',
          rubric: OK
        },
        {
          label: '12',
          marks: 1,
          prompt:
            'Find the sum of all positive integers $x$ such that $\\dfrac{x^3 - x + 120}{(x - 1)(x + 1)}$ is an integer.',
          answer: '$25$',
          principle: 'Perform polynomial division to reduce the fraction to $x + \\frac{120}{x^2 - 1}$ and test divisors of $120$.',
          solution:
            'Note that $x \\neq 1$ so the denominator $(x - 1)(x + 1) = x^2 - 1$ is non-zero. Since $x^3 - x = x(x^2 - 1)$, we have\n$$\\frac{x^3 - x + 120}{(x - 1)(x + 1)} = x + \\frac{120}{x^2 - 1}.$$\nFor this to be an integer when $x$ is a positive integer, $x^2 - 1$ must divide $120$. Because $x \\ge 2$, we have $x^2 - 1 \\ge 3$, so $x^2 - 1$ must be a positive divisor of $120$ that is at least $3$:\n$$x^2 - 1 \\in \\{3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30, 40, 60, 120\\}.$$\nAdding $1$ gives the candidates for $x^2$:\n$$x^2 \\in \\{4, 5, 6, 7, 9, 11, 13, 16, 21, 25, 31, 41, 61, 121\\}.$$\nThe perfect squares in this list are $4, 9, 16, 25, 121$, which yield the positive integers $x = 2, 3, 4, 5, 11$. Their sum is\n$$2 + 3 + 4 + 5 + 11 = 25.$$',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Consider the equation\n$$\\sqrt{3x^2 - 8x + 1} + \\sqrt{9x^2 - 24x - 8} = 3.$$\nIt is known that the largest root of the equation is $-k$ times the smallest root. Find $k$.',
          answer: '$9$',
          principle: 'Substitute $y = \\sqrt{3x^2 - 8x + 1}$ to turn the radical equation into a single quadratic in $y$.',
          solution:
            'Observe that $9x^2 - 24x - 8 = 3(3x^2 - 8x + 1) - 11$. Let $y = \\sqrt{3x^2 - 8x + 1} \\ge 0$. The equation becomes\n$$y + \\sqrt{3y^2 - 11} = 3 \\implies \\sqrt{3y^2 - 11} = 3 - y.$$\nFor a real solution we need $3 - y \\ge 0$, so $0 \\le y \\le 3$. Squaring both sides gives\n$$3y^2 - 11 = 9 - 6y + y^2 \\implies 2y^2 + 6y - 20 = 0 \\implies (y + 5)(y - 2) = 0.$$\nSince $0 \\le y \\le 3$, the only valid value is $y = 2$ (which also satisfies $3y^2 - 11 = 1 \\ge 0$).\n\nNow solve $3x^2 - 8x + 1 = y^2 = 4$:\n$$3x^2 - 8x - 3 = 0 \\implies (3x + 1)(x - 3) = 0.$$\nThe roots are $x = 3$ and $x = -\\frac{1}{3}$. Thus the largest root is $3$ and the smallest root is $-\\frac{1}{3}$, giving\n$$3 = -k\\left(-\\frac{1}{3}\\right) \\implies k = 9.$$',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Find the four-digit number $\\overline{abcd}$ satisfying\n$$2(\\overline{abcd}) + 1000 = \\overline{dcba}.$$\n(For example, if $a = 1$, $b = 2$, $c = 3$ and $d = 4$, then $\\overline{abcd} = 1234$.)',
          answer: '$2996$',
          principle: 'Bound the leading and units digits using modular arithmetic and bounds on carries, then solve the remaining two-variable linear equation.',
          solution:
            'Since $\\overline{abcd}$ and $\\overline{dcba}$ are four-digit numbers, $1 \\le a, d \\le 9$ and $0 \\le b, c \\le 9$. From $2(\\overline{abcd}) + 1000 = \\overline{dcba} \\le 9999$, we have $2(\\overline{abcd}) \\le 8999$, so $a \\le 4$.\n\nComparing units digits gives $2d \\equiv a \\pmod{10}$, so $a$ must be even; hence $a \\in \\{2, 4\\}$. Comparing thousands digits (the carry from $2 \\cdot \\overline{bcd}$ is $0$ or $1$) gives $2a + 1 \\le d \\le 2a + 2$:\n- If $a = 4$, then $9 \\le d \\le 9$, forcing $d = 9$. However, $2d = 18 \\equiv 8 \\neq 4 \\pmod{10}$, a contradiction.\n- If $a = 2$, then $5 \\le d \\le 6$. Together with $2d \\equiv 2 \\pmod{10}$, this forces $d = 6$.\n\nSubstitute $a = 2$ and $d = 6$ into the place-value equation:\n$$2(2000 + 100b + 10c + 6) + 1000 = 6000 + 100c + 10b + 2$$\n$$5012 + 200b + 20c = 6002 + 100c + 10b \\implies 190b - 80c = 990 \\implies 19b - 8c = 99.$$\nReducing modulo $8$ yields $3b \\equiv 3 \\pmod{8}$, so $b \\equiv 1 \\pmod{8}$. Since $0 \\le b \\le 9$, either $b = 1$ or $b = 9$. If $b = 1$, then $8c = 19 - 99 = -80 < 0$, impossible. If $b = 9$, then $8c = 171 - 99 = 72$, giving $c = 9$.\n\nCheck: $2(2996) + 1000 = 5992 + 1000 = 6992$. Thus $\\overline{abcd} = 2996$.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Suppose $x$ and $y$ are real numbers satisfying $x^2 + y^2 - 22x - 20y + 221 = 0$. Find $xy$.',
          answer: '$110$',
          principle: 'Complete the square in $x$ and $y$ separately and use non-negativity of real squares.',
          solution:
            'Group the $x$-terms and $y$-terms and complete the square:\n$$(x^2 - 22x + 121) + (y^2 - 20y + 100) + 221 - 121 - 100 = 0$$\n$$(x - 11)^2 + (y - 10)^2 = 0.$$\nSince $x$ and $y$ are real, $(x - 11)^2 \\ge 0$ and $(y - 10)^2 \\ge 0$. Their sum is $0$ only if both squares vanish, so $x = 11$ and $y = 10$. Hence\n$$xy = 11 \\times 10 = 110.$$',
          rubric: OK
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Let $m$ and $n$ be positive integers satisfying\n$$mn^2 + 876 = 4mn + 217n.$$\nFind the sum of all possible values of $m$.',
          answer: '$93$',
          principle: 'Rearrange into a linear factor times $(mn - 217)$ to isolate a constant right-hand side and test divisors.',
          solution:
            'Rewrite the equation as\n$$n(mn - 217) = 4mn - 876 = 4(mn - 217) - 8,$$\nwhich factors as\n$$(4 - n)(mn - 217) = 8.$$\nHence $d = mn - 217$ must be an integer divisor of $8$, so $d \\in \\{\\pm 1, \\pm 2, \\pm 4, \\pm 8\\}$, with $n = 4 - \\frac{8}{d}$ and $m = \\frac{217 + d}{n}$. Check each divisor:\n- $d = 1$: $n = -4$ (not positive).\n- $d = -1$: $n = 12$, $mn = 216 \\implies m = \\frac{216}{12} = 18$ (valid).\n- $d = 2$: $n = 0$ (not positive).\n- $d = -2$: $n = 8$, $mn = 215 \\implies m = \\frac{215}{8} \\notin \\mathbb{Z}$.\n- $d = 4$: $n = 2$, $mn = 221 \\implies m = \\frac{221}{2} \\notin \\mathbb{Z}$.\n- $d = -4$: $n = 6$, $mn = 213 \\implies m = \\frac{213}{6} \\notin \\mathbb{Z}$.\n- $d = 8$: $n = 3$, $mn = 225 \\implies m = \\frac{225}{3} = 75$ (valid).\n- $d = -8$: $n = 5$, $mn = 209 \\implies m = \\frac{209}{5} \\notin \\mathbb{Z}$.\n\nThus the possible values of $m$ are $18$ and $75$, and their sum is $18 + 75 = 93$.',
          rubric: OK
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'For any real number $x$, let $\\lfloor x \\rfloor$ denote the largest integer less than or equal to $x$. Find the value of $\\lfloor x \\rfloor$ of the smallest $x$ satisfying $\\lfloor x^2 \\rfloor - \\lfloor x \\rfloor^2 = 100$.',
          answer: '$50$',
          principle: 'Write $x = k + r$ with $k = \\lfloor x \\rfloor \\in \\mathbb{Z}$ and $0 \\le r < 1$ to bound $\\lfloor x^2 \\rfloor - k^2$.',
          solution:
            'Let $k = \\lfloor x \\rfloor$ and write $x = k + r$ where $0 \\le r < 1$.\n- If $k < 0$, write $k = -m$ with $m \\ge 1$. Then $x^2 = m^2 - 2mr + r^2 = m^2 - r(2m - r) \\le m^2$ (since $2m - r > 0$), so $\\lfloor x^2 \\rfloor \\le m^2 = k^2$, giving $\\lfloor x^2 \\rfloor - k^2 \\le 0 < 100$.\n- Thus $k \\ge 0$. Since $x^2 = k^2 + 2kr + r^2$ and $r < 1$, we have\n$$100 = \\lfloor x^2 \\rfloor - k^2 \\le x^2 - k^2 = 2kr + r^2 < 2k + 1.$$\nBecause $k$ is an integer and $2k + 1 > 100$, we must have $2k \\ge 100$, so $k \\ge 50$.\n\nMoreover, $k = 50$ is achievable: any solution satisfies $x^2 \\ge \\lfloor x^2 \\rfloor \\ge 100 + 50^2 = 2600$, and at $x = \\sqrt{2600}$ we have $50^2 = 2500 < 2600 < 2601 = 51^2$, so $\\lfloor \\sqrt{2600} \\rfloor = 50$ and $\\lfloor 2600 \\rfloor - 50^2 = 100$. Therefore, the smallest such $x$ is $\\sqrt{2600}$, which has $\\lfloor x \\rfloor = 50$.',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Suppose $x_1, x_2, \\ldots, x_{49}$ are real numbers such that $x_1^2 + 2x_2^2 + \\cdots + 49x_{49}^2 = 1$. Find the maximum value of $x_1 + 2x_2 + \\cdots + 49x_{49}$.',
          answer: '$35$',
          principle: 'Apply the Cauchy–Schwarz inequality after splitting each term $k x_k = \\sqrt{k}\\cdot(\\sqrt{k}\\,x_k)$.',
          solution:
            'By the Cauchy–Schwarz inequality,\n$$\\begin{aligned}\n(x_1 + 2x_2 + \\cdots + 49x_{49})^2 &= \\left(1 \\cdot x_1 + \\sqrt{2} \\cdot \\sqrt{2}x_2 + \\cdots + \\sqrt{49} \\cdot \\sqrt{49}x_{49}\\right)^2 \\\\\n&\\le (1 + 2 + \\cdots + 49)\\left(x_1^2 + 2x_2^2 + \\cdots + 49x_{49}^2\\right) \\\\\n&= \\frac{49 \\times 50}{2} \\times 1 = 49 \\times 25 = 35^2.\n\\end{aligned}$$\nHence $x_1 + 2x_2 + \\cdots + 49x_{49} \\le 35$. Equality is attained when $x_1 = x_2 = \\cdots = x_{49} = \\frac{1}{35}$, since then $\\sum_{k=1}^{49} k x_k^2 = \\frac{1}{1225} \\cdot 1225 = 1$ and $\\sum_{k=1}^{49} k x_k = \\frac{1225}{35} = 35$. Therefore the maximum value is $35$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'Find the minimum value of\n$$\\sqrt{x^2 + (20 - y)^2} + \\sqrt{y^2 + (21 - z)^2} + \\sqrt{z^2 + (20 - w)^2} + \\sqrt{w^2 + (21 - x)^2}.$$',
          answer: '$58$',
          principle: 'Apply the triangle inequality for vectors (Minkowski\'s inequality) so that all variables cancel in the vector sum.',
          solution:
            'Consider the four vectors in $\\mathbb{R}^2$:\n$$\\mathbf{v}_1 = (x,\\, 20 - y), \\quad \\mathbf{v}_2 = (21 - z,\\, y), \\quad \\mathbf{v}_3 = (z,\\, 20 - w), \\quad \\mathbf{v}_4 = (21 - x,\\, w).$$\nTheir lengths are precisely the four square roots in the given sum. Adding the four vectors cancels $x, y, z, w$:\n$$\\mathbf{v}_1 + \\mathbf{v}_2 + \\mathbf{v}_3 + \\mathbf{v}_4 = (21 + 21,\\; 20 + 20) = (42, 40).$$\nBy the triangle inequality,\n$$\\|\\mathbf{v}_1\\| + \\|\\mathbf{v}_2\\| + \\|\\mathbf{v}_3\\| + \\|\\mathbf{v}_4\\| \\ge \\|\\mathbf{v}_1 + \\mathbf{v}_2 + \\mathbf{v}_3 + \\mathbf{v}_4\\| = \\sqrt{42^2 + 40^2} = \\sqrt{1764 + 1600} = \\sqrt{3364} = 58.$$\nEquality holds when all four vectors are equal to $(21/2, 10)$, which occurs at $x = z = \\frac{21}{2}$ and $y = w = 10$ (giving $4\\sqrt{(21/2)^2 + 10^2} = 4 \\cdot \\frac{29}{2} = 58$). Thus the minimum value is $58$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Let $A$ be a $4$-digit integer. When both the first digit (left-most) and the third digit are increased by $n$, and the second digit and the fourth digit are decreased by $n$, the new number is $n$ times $A$. Find the value of $A$.',
          answer: '$1818$',
          principle: 'Translate the digit shift into $A + 909n = nA$ and use $\\gcd(n - 1, n) = 1$ with digit bounds.',
          solution:
            'Let $A = \\overline{abcd} = 1000a + 100b + 10c + d$ with $1 \\le a \\le 9$ and $0 \\le b, c, d \\le 9$. Since the modified digits remain valid and $nA$ is a $4$-digit positive integer, $n$ is a positive integer satisfying $a + n \\le 9$, $c + n \\le 9$, $b - n \\ge 0$, and $d - n \\ge 0$ (in particular, $1 \\le n \\le 8$).\n\nThe new number is\n$$1000(a + n) + 100(b - n) + 10(c + n) + (d - n) = A + 909n.$$\nWe are given $A + 909n = nA$, which rearranges to\n$$(n - 1)A = 909n.$$\nClearly $n \\neq 1$. Since $\\gcd(n - 1, n) = 1$, we must have $(n - 1) \\mid 909 = 9 \\times 101$. Because $n \\le 8$, $n - 1$ cannot be divisible by $101$, so $(n - 1) \\mid 9$, giving $n - 1 \\in \\{1, 3, 9\\}$, i.e., $n \\in \\{2, 4, 10\\}$.\n- $n = 10$ is impossible since $n \\le 8$.\n- If $n = 4$, then $A = \\frac{909 \\times 4}{3} = 1212$, which violates $b \\ge n$ (here $b = 2 < 4$).\n- If $n = 2$, then $A = \\frac{909 \\times 2}{1} = 1818$.\n\nChecking $A = 1818$ with $n = 2$: increasing $a = 1, c = 1$ by $2$ and decreasing $b = 8, d = 8$ by $2$ produces $3636 = 2 \\times 1818$. Hence $A = 1818$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt: 'Find the remainder when $1021^{1022}$ is divided by $1023$.',
          answer: '$4$',
          principle: 'Reduce $1021 \\equiv -2 \\pmod{1023}$ and use $2^{10} = 1024 \\equiv 1 \\pmod{1023}$.',
          solution:
            'Observe that $1021 \\equiv -2 \\pmod{1023}$ and $2^{10} = 1024 \\equiv 1 \\pmod{1023}$. Therefore,\n$$1021^{1022} \\equiv (-2)^{1022} = 2^{1022} = (2^{10})^{102} \\cdot 2^2 \\equiv 1^{102} \\cdot 4 = 4 \\pmod{1023}.$$\nSince $0 \\le 4 < 1023$, the remainder is $4$.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Consider a list of six numbers. When the largest number is removed from the list, the average is decreased by $1$. When the smallest number is removed, the average is increased by $1$. When both the largest and the smallest numbers are removed, the average of the remaining four numbers is $20$. Find the product of the largest and the smallest numbers.',
          answer: '$375$',
          principle: 'Express the sums of $4$, $5$, and $6$ numbers in terms of $m$, $M$, and the original average.',
          solution:
            'Let $m$ and $M$ be the smallest and largest numbers in the list, respectively. Since the remaining four numbers have average $20$, their sum is $4 \\times 20 = 80$. Let $\\mu = \\frac{m + M + 80}{6}$ be the average of all six numbers.\n\nFrom the two removal conditions:\n$$\\frac{m + 80}{5} = \\mu - 1, \\qquad \\frac{M + 80}{5} = \\mu + 1.$$\nAdding these two equations gives\n$$\\frac{m + M + 160}{5} = 2\\mu = \\frac{m + M + 80}{3}.$$\nMultiplying by $15$ yields\n$$3(m + M) + 480 = 5(m + M) + 400 \\implies 2(m + M) = 80 \\implies m + M = 40.$$\nHence $\\mu = \\frac{40 + 80}{6} = 20$. Substituting $\\mu = 20$ back gives\n$$\\frac{m + 80}{5} = 19 \\implies m = 15, \\qquad \\frac{M + 80}{5} = 21 \\implies M = 25.$$\nTherefore, $mM = 15 \\times 25 = 375$.',
          rubric: OK
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'For each positive integer $n \\ge 1$, we define the recursive relation given by\n$$a_{n+1} = \\frac{1}{1 + a_n}.$$\nSuppose that $a_1 = a_{2012}$. Find the sum of the squares of all possible values of $a_1$.',
          answer: '$3$',
          principle: 'Express $a_n$ in terms of $a_1$ using Fibonacci numbers and apply Vieta\'s formulas to the resulting quadratic.',
          solution:
            'Let $F_0 = 0, F_1 = 1$, and $F_{k+1} = F_k + F_{k-1}$ for $k \\ge 1$ be the Fibonacci sequence, and let $a_1 = a$. Computing the first few terms:\n$$a_1 = \\frac{F_0 + F_1 a}{F_1 + F_0 a}, \\quad a_2 = \\frac{1}{1 + a} = \\frac{F_1 + F_0 a}{F_2 + F_1 a}, \\quad a_3 = \\frac{1 + a}{2 + a} = \\frac{F_2 + F_1 a}{F_3 + F_2 a}.$$\nBy induction, if $a_n = \\frac{F_{n-1} + F_{n-2} a}{F_n + F_{n-1} a}$, then\n$$a_{n+1} = \\frac{1}{1 + \\frac{F_{n-1} + F_{n-2} a}{F_n + F_{n-1} a}} = \\frac{F_n + F_{n-1} a}{(F_n + F_{n-1}) + (F_{n-1} + F_{n-2}) a} = \\frac{F_n + F_{n-1} a}{F_{n+1} + F_n a}.$$\nSetting $a_{2012} = a_1 = a$ gives\n$$\\frac{F_{2011} + F_{2010} a}{F_{2012} + F_{2011} a} = a \\implies F_{2011} a^2 + (F_{2012} - F_{2010}) a - F_{2011} = 0.$$\nSince $F_{2012} - F_{2010} = F_{2011} > 0$, this simplifies to\n$$F_{2011}(a^2 + a - 1) = 0 \\implies a^2 + a - 1 = 0.$$\n(Both roots $\\alpha, \\beta = \\frac{-1 \\pm \\sqrt{5}}{2}$ are irrational, so no denominator $F_k + F_{k-1}a$ is ever $0$; in fact, $a = \\frac{1}{1+a}$ makes the sequence constant.)\n\nBy Vieta\'s formulas, $\\alpha + \\beta = -1$ and $\\alpha\\beta = -1$, so the sum of the squares of all possible values of $a_1$ is\n$$\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = (-1)^2 - 2(-1) = 3.$$',
          rubric: OK
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'A positive integer is called friendly if it is divisible by the sum of its digits. For example, $111$ is friendly but $123$ is not. Find the number of all two-digit friendly numbers.',
          answer: '$23$',
          principle: 'Rewrite $(a + b) \\mid (10a + b)$ as $(a + b) \\mid 9a$ and classify by $\\gcd(a + b, 9)$.',
          solution:
            'Let the two-digit number be $10a + b$, where $a \\in \\{1, 2, \\ldots, 9\\}$ and $b \\in \\{0, 1, \\ldots, 9\\}$, and let $s = a + b$ ($1 \\le s \\le 18$). Since $10a + b = (a + b) + 9a$, the condition $s \\mid (10a + b)$ is equivalent to $s \\mid 9a$. Consider three cases according to divisibility of $s$ by $3$ and $9$:\n- **Case 1 ($3 \\nmid s$):** $\\gcd(s, 9) = 1$, so $s \\mid a$. Because $s = a + b \\ge a \\ge 1$, we must have $s = a$ and $b = 0$. Since $3 \\nmid a$, $a \\in \\{1, 2, 4, 5, 7, 8\\}$, giving **$6$** numbers: $10, 20, 40, 50, 70, 80$.\n- **Case 2 ($3 \\mid s$ and $9 \\nmid s$):** Then $\\gcd(s, 9) = 3$, so $s \\mid 3a$. As $s \\ge a$, the quotient $\\frac{3a}{s}$ can be $1, 2,$ or $3$:\n  - $\\frac{3a}{s} = 3 \\implies b = 0$ and $3 \\mid a$ with $9 \\nmid a$, giving **$2$** numbers: $30, 60$.\n  - $\\frac{3a}{s} = 2 \\implies 2(a + b) = 3a \\implies a = 2b$ with $3 \\nmid b$ (otherwise $9 \\mid 3b = s$) and $1 \\le a \\le 9$, giving $b \\in \\{1, 2, 4\\}$, i.e., **$3$** numbers: $21, 42, 84$.\n  - $\\frac{3a}{s} = 1 \\implies a + b = 3a \\implies b = 2a$ with $3 \\nmid a$ and $1 \\le b \\le 9$, giving $a \\in \\{1, 2, 4\\}$, i.e., **$3$** numbers: $12, 24, 48$.\n- **Case 3 ($9 \\mid s$):** Since $1 \\le s \\le 18$, either $s = 9$ or $s = 18$.\n  - $s = 9$: $9 \\mid 9a$ holds for every $a \\in \\{1, \\ldots, 9\\}$ with $b = 9 - a$, giving **$9$** numbers: $18, 27, 36, 45, 54, 63, 72, 81, 90$.\n  - $s = 18$: forces $a = b = 9$, i.e., $99$, which is not divisible by $18$.\n\nIn total, there are $6 + (2 + 3 + 3) + 9 = 23$ two-digit friendly numbers.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'In triangle $ABC$, points $D$ and $E$ lie on side $AB$, and point $F$ lies on side $AC$ such that $DA = DF = DE$, $BE = EF$ and $BF = BC$. It is given that $\\angle ABC = 2\\angle ACB$. Find $x$, where $\\angle BFD = x^\\circ$.',
          answer: '$108$',
          principle: 'Use Thales\'s theorem from $DA = DF = DE$ to obtain $\\angle AFE = 90^\\circ$, then chase angles in isosceles triangles.',
          solution:
            'Since $D$ and $E$ lie on segment $AB$ with $DA = DE$ and $E \\neq A$ (otherwise $DF = DA = 0$), point $D$ must lie between $A$ and $E$ and be the midpoint of $AE$. Because $DA = DF = DE$, point $F$ lies on the circle with diameter $AE$, so by Thales\'s theorem\n$$\\angle AFE = 90^\\circ.$$\nLet $\\angle EBF = \\alpha$. Since $BE = EF$, triangle $BEF$ is isosceles with $\\angle EFB = \\alpha$, so the exterior angle at $E$ is\n$$\\angle DEF = \\angle EBF + \\angle EFB = 2\\alpha.$$\nSince $DE = DF$, triangle $DEF$ is isosceles with $\\angle DFE = \\angle DEF = 2\\alpha$. Note that $E$ lies on segment $AB$ between $A$ and $B$, so ray $FB$ lies between rays $FE$ and $FC$. Together with $\\angle AFE = 90^\\circ$ (hence $\\angle CFE = 90^\\circ$), we obtain\n$$\\angle BFC = \\angle CFE - \\angle EFB = 90^\\circ - \\alpha.$$\nSince $BF = BC$, triangle $BFC$ is isosceles with $\\angle BCF = \\angle BFC = 90^\\circ - \\alpha$, and thus\n$$\\angle CBF = 180^\\circ - 2(90^\\circ - \\alpha) = 2\\alpha.$$\nTherefore $\\angle ABC = \\angle ABF + \\angle FBC = \\alpha + 2\\alpha = 3\\alpha$ and $\\angle ACB = 90^\\circ - \\alpha$. From $\\angle ABC = 2\\angle ACB$,\n$$3\\alpha = 2(90^\\circ - \\alpha) = 180^\\circ - 2\\alpha \\implies 5\\alpha = 180^\\circ \\implies \\alpha = 36^\\circ.$$\nFinally, $\\angle BFD = \\angle DFE + \\angle EFB = 2\\alpha + \\alpha = 3\\alpha = 108^\\circ$, so $x = 108$.',
          rubric: OK
        },
        {
          label: '26',
          marks: 1,
          prompt:
            'In the coordinate plane, $A$ and $B(20, 0)$ lie on the $x$-axis and $C(0, 30)$ lies on the $y$-axis such that $\\angle ACB = 90^\\circ$. A rectangle $DEFG$ is inscribed in triangle $ABC$ with $D$ and $E$ on side $AB$, $F$ on side $BC$, and $G$ on side $AC$. Given that the area of triangle $CGF$ is $351$, calculate the area of the rectangle $DEFG$.',
          answer: '$468$',
          principle: 'Find $AO$ using the right-triangle altitude theorem ($OC^2 = AO \\cdot OB$), then use similarity $\\triangle CGF \\sim \\triangle CAB$.',
          solution:
            'Since $\\angle ACB = 90^\\circ$ and $CO$ is the altitude to the hypotenuse $AB$ (with $O$ between $A$ and $B$, so $A$ lies on the negative $x$-axis), the right-triangle altitude theorem gives\n$$OC^2 = AO \\cdot OB \\implies 30^2 = AO \\cdot 20 \\implies AO = 45.$$\nThus $AB = AO + OB = 45 + 20 = 65$, and the area of $\\triangle ABC$ is\n$$\\text{Area}(\\triangle ABC) = \\frac{1}{2} \\times 65 \\times 30 = 975.$$\nBecause $GF \\parallel AB$, we have $\\triangle CGF \\sim \\triangle CAB$. Let $h$ be the altitude of $\\triangle CGF$ from $C$ to $GF$. The ratio of areas equals the square of the ratio of altitudes:\n$$\\left(\\frac{h}{30}\\right)^2 = \\frac{351}{975} = \\frac{27 \\times 13}{75 \\times 13} = \\frac{9}{25} \\implies \\frac{h}{30} = \\frac{3}{5} \\implies h = 18.$$\nThe height of rectangle $DEFG$ perpendicular to $AB$ is $30 - h = 30 - 18 = 12$. Moreover, $\\text{Area}(\\triangle CGF) = \\frac{1}{2} \\cdot GF \\cdot h = 351$, so $GF = \\frac{2 \\times 351}{18} = 39$. Therefore,\n$$\\text{Area}(DEFG) = GF \\times (30 - h) = 39 \\times 12 = 468.$$',
          rubric: OK
        },
        {
          label: '27',
          marks: 1,
          prompt:
            'Let $ABCDEF$ be a regular hexagon. Let $G$ be a point on $ED$ such that $EG = 3GD$. If the area of quadrilateral $AGEF$ is $100$, find the area of the hexagon $ABCDEF$.',
          answer: '$240$',
          principle: 'Decompose quadrilateral $AGEF$ along diagonal $AE$ into $\\triangle AFE$ and right triangle $\\triangle AGE$, comparing both to one-sixth of the hexagon.',
          solution:
            'Let the regular hexagon $ABCDEF$ have side length $s$, and let $T = \\frac{\\sqrt{3}}{4}s^2$ be the area of one of the six equilateral triangles forming the hexagon, so $\\text{Area}(ABCDEF) = 6T$.\n\nDivide quadrilateral $AGEF$ by diagonal $AE$ into $\\triangle AFE$ and $\\triangle AGE$:\n- In $\\triangle AFE$, $AF = FE = s$ and $\\angle AFE = 120^\\circ$, so $\\text{Area}(\\triangle AFE) = \\frac{1}{2}s^2 \\sin 120^\\circ = \\frac{\\sqrt{3}}{4}s^2 = T$.\n- Since $\\angle FEA = 30^\\circ$ and $\\angle FED = 120^\\circ$, we have $\\angle AED = 90^\\circ$, and by the Law of Cosines (or two $30^\\circ\\text{-}60^\\circ\\text{-}90^\\circ$ triangles) $AE = \\sqrt{3}\\,s$. Also, $EG = \\frac{3}{4}ED = \\frac{3}{4}s$. Hence $\\triangle AGE$ is right-angled at $E$ with area\n$$\\text{Area}(\\triangle AGE) = \\frac{1}{2} \\cdot AE \\cdot EG = \\frac{1}{2}(\\sqrt{3}\\,s)\\left(\\frac{3}{4}s\\right) = \\frac{3\\sqrt{3}}{8}s^2 = \\frac{3}{2}T.$$\n\nTherefore,\n$$\\text{Area}(AGEF) = T + \\frac{3}{2}T = \\frac{5}{2}T.$$\nGiven $\\text{Area}(AGEF) = 100$, we get $T = 40$, and hence\n$$\\text{Area}(ABCDEF) = 6T = 6 \\times 40 = 240.$$',
          rubric: OK
        },
        {
          label: '28',
          marks: 1,
          prompt:
            'Given a package containing $200$ red marbles, $300$ blue marbles and $400$ green marbles. At each occasion, you are allowed to withdraw at most one red marble, at most two blue marbles and a total of at most five marbles out of the package. Find the minimal number of withdrawals required to withdraw all the marbles from the package.',
          answer: '$200$',
          principle: 'Establish a lower bound from the red-marble constraint ($1$ per withdrawal) and construct an explicit schedule achieving it.',
          solution:
            'Since there are $200$ red marbles and at most $1$ red marble can be taken per withdrawal, at least $200$ withdrawals are required.\n\nWe show that $200$ withdrawals suffice by specifying $(r, b, g)$ for each withdrawal (where $r \\le 1$, $b \\le 2$, and $r + b + g \\le 5$):\n- Withdraw $(1, 2, 2)$ for $150$ times: removes $(150, 300, 300)$.\n- Withdraw $(1, 0, 4)$ for $25$ times: removes $(25, 0, 100)$.\n- Withdraw $(1, 0, 0)$ for $25$ times: removes $(25, 0, 0)$.\n\nTotal withdrawals $= 150 + 25 + 25 = 200$, and total marbles withdrawn $= (200, 300, 400)$. Thus the minimal number of withdrawals is $200$.',
          rubric: OK
        },
        {
          label: '29',
          marks: 1,
          prompt:
            '$3$ red marbles, $4$ blue marbles and $5$ green marbles are distributed to $12$ students. Each student gets one and only one marble. In how many ways can the marbles be distributed so that Jamy and Jaren get the same colour and Jason gets a green marble?',
          answer: '$3150$',
          principle: 'Fix Jason\'s green marble, split into three cases for the shared colour of Jamy and Jaren, and count multinomial permutations for the remaining $9$ students.',
          solution:
            'First give Jason a green marble; this leaves $3$ red, $4$ blue, and $4$ green marbles for the remaining $11$ students. Now split into three mutually exclusive cases according to the shared colour received by Jamy and Jaren, and distribute the remaining $9$ marbles to the other $9$ students:\n1. **Jamy and Jaren both get red:** $1$ red, $4$ blue, and $4$ green marbles remain for $9$ students:\n   $$\\frac{9!}{1!\\,4!\\,4!} = \\binom{9}{1}\\binom{8}{4} = 9 \\times 70 = 630.$$\n2. **Jamy and Jaren both get blue:** $3$ red, $2$ blue, and $4$ green marbles remain for $9$ students:\n   $$\\frac{9!}{3!\\,2!\\,4!} = \\binom{9}{3}\\binom{6}{2} = 84 \\times 15 = 1260.$$\n3. **Jamy and Jaren both get green:** $3$ red, $4$ blue, and $2$ green marbles remain for $9$ students:\n   $$\\frac{9!}{3!\\,4!\\,2!} = 1260.$$\n\nAdding the three cases gives $630 + 1260 + 1260 = 3150$ ways.',
          rubric: OK
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'A round cake is cut into $n$ pieces with $3$ cuts. Find the product of all possible values of $n$.',
          answer: '$840$',
          principle: 'Each straight cut across the cake increases the piece count by $1$ plus the number of previous cuts it crosses inside the cake.',
          solution:
            'Using $3$ straight cuts across the circular top without rearranging pieces, the $k$-th cut passes through $1 + m_k$ existing regions, adding $1 + m_k$ new pieces, where $m_k$ is the number of earlier cuts it intersects inside the cake:\n- **Minimum ($n = 4$):** $3$ parallel cuts have $m_1 = m_2 = m_3 = 0$, giving $1 + 1 + 1 + 1 = 4$ pieces.\n- **$n = 5$:** $2$ parallel cuts ($3$ pieces) and a $3$rd cut crossing only one of them inside the cake adds $2$ pieces, giving $5$ pieces.\n- **$n = 6$:** $3$ cuts meeting at a single interior point (or $2$ parallel cuts crossed by a $3$rd cut) give $6$ pieces.\n- **Maximum ($n = 7$):** $3$ cuts intersecting pairwise at $3$ distinct interior points give $1 + 1 + 2 + 3 = 7$ pieces.\n\nNo fewer than $4$ and no more than $7$ pieces can be formed with $3$ cuts, so the possible values of $n$ are $4, 5, 6, 7$. Their product is\n$$4 \\times 5 \\times 6 \\times 7 = 840.$$',
          rubric: OK
        },
        {
          label: '31',
          marks: 1,
          prompt:
            'How many triples of non-negative integers $(x, y, z)$ satisfy the equation\n$$xyz + xy + yz + zx + x + y + z = 2012?$$',
          answer: '$27$',
          principle: 'Add $1$ to both sides to factor $(x + 1)(y + 1)(z + 1) = 2013$, then distribute prime factors across the three factors.',
          solution:
            'Adding $1$ to both sides factors the left-hand side cleanly:\n$$(x + 1)(y + 1)(z + 1) = 2013.$$\nFactor $2013$ into primes:\n$$2013 = 3 \\times 671 = 3 \\times 11 \\times 61.$$\n(Note $61$ is prime since it has no prime factors $\\le 7$.) Since $x, y, z \\ge 0$ are integers, $a = x + 1$, $b = y + 1$, and $c = z + 1$ are positive integers satisfying $abc = 3 \\times 11 \\times 61$. Each of the three distinct prime factors $3, 11, 61$ can independently be assigned to any of the $3$ factors $a, b, c$, yielding\n$$3^3 = 27$$\nordered triples $(a, b, c)$ of positive integers, and hence $27$ triples $(x, y, z) = (a - 1, b - 1, c - 1)$ of non-negative integers.',
          rubric: OK
        },
        {
          label: '32',
          marks: 1,
          prompt:
            'There are $2012$ students in a secondary school. Every student writes a new year card. The cards are mixed up and randomly distributed to students. Suppose each student gets one and only one card. Find the expected number of students who get back their own cards.',
          answer: '$1$',
          principle: 'Use linearity of expectation over indicator random variables for each student.',
          solution:
            'Label the students $1, 2, \\ldots, 2012$, and let $X_i$ be the indicator random variable that equals $1$ if student $i$ receives their own card and $0$ otherwise. Under a uniformly random permutation of the $2012$ cards, each student is equally likely to receive any of the $2012$ cards, so\n$$E[X_i] = P(X_i = 1) = \\frac{1}{2012}.$$\nBy linearity of expectation, the expected number of students who get back their own card is\n$$E\\left[\\sum_{i=1}^{2012} X_i\\right] = \\sum_{i=1}^{2012} E[X_i] = 2012 \\times \\frac{1}{2012} = 1.$$',
          rubric: OK
        },
        {
          label: '33',
          marks: 1,
          prompt:
            'Two players $A$ and $B$ play rock-paper-scissors continuously until player $A$ wins $2$ consecutive games. Suppose each player is equally likely to use each hand-sign in every game. What is the expected number of games they will play?',
          answer: '$12$',
          principle: 'Set up linear equations for expected remaining games by conditioning on the outcome of the next game(s).',
          solution:
            'In each game, there are $3 \\times 3 = 9$ equally likely pairs of hand-signs, and $A$ wins in $3$ of them (rock over scissors, scissors over paper, paper over rock). Thus in every game independently, $P(A \\text{ wins}) = \\frac{1}{3}$ and $P(A \\text{ does not win}) = \\frac{2}{3}$.\n\nLet $E$ be the expected number of games from the start (win streak $0$), and $E_1$ be the expected number of additional games when $A$ has just won $1$ game (win streak $1$). Conditioning on the next game:\n$$E = 1 + \\frac{1}{3}E_1 + \\frac{2}{3}E, \\qquad E_1 = 1 + \\frac{1}{3}(0) + \\frac{2}{3}E.$$\nFrom the first equation, $\\frac{1}{3}E = 1 + \\frac{1}{3}E_1$, so $E = 3 + E_1$. Substituting $E_1 = 1 + \\frac{2}{3}E$ gives\n$$E = 3 + 1 + \\frac{2}{3}E \\implies \\frac{1}{3}E = 4 \\implies E = 12.$$',
          rubric: OK
        },
        {
          label: '34',
          marks: 1,
          prompt:
            'There are $2012$ students standing in a circle; they are numbered $1, 2, \\ldots, 2012$ clockwise. The counting starts from the first student (number $1$) and proceeds around the circle clockwise. Alternate students will be eliminated from the circle in the following way: The first student stays in the circle while the second student leaves the circle. The third student stays while the fourth student leaves and so on. When the counting reaches number $2012$, it goes back to number $1$ and the elimination continues until the last student remains. What is the number of the last student?',
          answer: '$1977$',
          principle: 'Josephus problem: for $N = 2^m + k$ ($0 \\le k < 2^m$) with alternate elimination starting by keeping $1$ and removing $2$, the survivor is $2k + 1$.',
          solution:
            'Write $2012 = 2^{10} + 988 = 1024 + 988$.\n\nIn the first pass, students $2, 4, 6, \\ldots, 2k$ leave while $1, 3, 5, \\ldots, 2k - 1$ stay. Immediately after the $k$-th elimination (student $2k = 2 \\times 988 = 1976$ leaves), exactly $1024 = 2^{10}$ students remain in the circle, and the counting resumes with student $2k + 1 = 1977$ staying.\n\nWhenever $2^m$ students remain and the next student in turn stays, each complete pass halves the number of students ($2^m \\to 2^{m-1} \\to \\cdots \\to 1$) while keeping that starting student every single time. Hence the student who is next to stay when $2^{10}$ students remain is the last student in the circle:\n$$2(988) + 1 = 1977.$$\n(Note: the printed archive answer key lists $1976$ due to an off-by-one error, but every even-numbered student—including $1976$—is eliminated in the very first round; direct round-by-round elimination confirms $1977$ survives.)',
          rubric: OK
        },
        {
          label: '35',
          marks: 1,
          prompt:
            'There are $k$ people and $n$ chairs in a row, where $2 \\le k < n$. There is a couple among the $k$ people. The number of ways in which all $k$ people can be seated such that the couple is seated together is equal to the number of ways in which the $(k - 2)$ people, without the couple present, can be seated. Find the smallest value of $n$.',
          answer: '$12$',
          principle: 'Equate the two seating counts, cancel factorials, and express $n$ in terms of $d = n - k \\ge 1$.',
          solution:
            'Count both seating arrangements:\n- **All $k$ people with the couple together:** There are $n - 1$ choices for the two adjacent chairs occupied by the couple, $2$ ways to order the couple in those two chairs, and $\\frac{(n - 2)!}{(n - k)!}$ ways to seat the remaining $k - 2$ people in the remaining $n - 2$ chairs. Total:\n  $$2(n - 1)\\frac{(n - 2)!}{(n - k)!}.$$\n- **The $k - 2$ people without the couple in $n$ chairs:** There are\n  $$\\frac{n!}{(n - (k - 2))!} = \\frac{n(n - 1)(n - 2)!}{(n - k + 2)(n - k + 1)(n - k)!}$$\n  ways.\n\nEquating the two expressions and dividing both sides by the positive quantity $\\frac{(n - 1)(n - 2)!}{(n - k)!}$ yields\n$$2 = \\frac{n}{(n - k + 2)(n - k + 1)}.$$\nLet $d = n - k$. Since $2 \\le k < n$, $d$ is a positive integer ($d \\ge 1$) and\n$$n = 2(d + 1)(d + 2).$$\nBecause $2(d + 1)(d + 2)$ increases strictly with $d$, the smallest possible value occurs at $d = 1$:\n$$n = 2(1 + 1)(1 + 2) = 12,$$\nwhich gives $k = n - d = 11 \\ge 2$, satisfying $2 \\le k < n$. Thus the smallest value of $n$ is $12$.',
          rubric: OK
        }
      ]
    }
  ]
};
