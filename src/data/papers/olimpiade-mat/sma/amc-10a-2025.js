/**
 * Paket Soal Terstruktur: AMC 10A 2025 (25 soal pilihan ganda lengkap)
 * Sumber: 2025 AMC 10A Problems - AoPS Wiki.pdf (MAA AMC 10A 2025).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Gambar pada soal 10, 13, 15, dan 22
 * diekstrak dari PDF sumber ke public/papers/amc-10a-2025/fig-<n>.webp.
 */
export default {
  id: 'amc-10a-2025',
  slug: 'amc-10a-2025',
  subject: 'olimpiade-mat',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic: 'AMC 10A 2025: 25 complete competition problems in algebra, geometry, combinatorics, and number theory',
  relatedChapterIds: [
    'sma10-bab2-barisan-deret',
    'sma11-bab2-lingkaran',
    'sma12-bab3-kaidah-pencacahan',
    'sma10-bab8-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 10',
  title: 'AMC 10A \u2014 2025',
  totalMarks: 150,
  instructions:
    'This is a 25-question, multiple-choice test (75 minutes working time; no calculators permitted). In the official AMC 10A contest, each correct answer scores 6 points, each unanswered problem scores 1.5 points, and each incorrect answer scores 0 points (maximum 150 points). In this practice set, each of the 25 problems is worth 6 marks (150 marks total). Figures are not necessarily drawn to scale.',
  source: {
    org: 'AMC 10',
    file: '2025 AMC 10A Problems - AoPS Wiki.pdf',
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
            'Andy and Betsy both live in Mathville. Andy leaves Mathville on his bicycle at $1{:}30$, traveling due north at a steady $8$ miles per hour. Betsy leaves on her bicycle from the same point at $2{:}30$, traveling due east at a steady $12$ miles per hour. At what time will they be exactly the same distance from their common starting point?\n\nA. $3{:}30$\nB. $3{:}45$\nC. $4{:}00$\nD. $4{:}15$\nE. $4{:}30$',
          answer: 'E. $4{:}30$',
          principle: 'Equate the distances traveled using $d = vt$, accounting for the $1$-hour head start.',
          solution:
            'Let $t$ be the number of hours after $1{:}30$ when Andy and Betsy are at the same distance from their common starting point (with $t \\ge 1$).\n- Andy travels for $t$ hours at $8\\text{ mph}$, so his distance is $8t$ miles.\n- Betsy leaves $1$ hour later at $2{:}30$, so she travels for $t - 1$ hours at $12\\text{ mph}$, giving a distance of $12(t - 1)$ miles.\n\nSetting their distances equal:\n$$8t = 12(t - 1) \\implies 8t = 12t - 12 \\implies 4t = 12 \\implies t = 3\\text{ hours}.$$\nThree hours after $1{:}30$ is $4{:}30$. (Check: Andy travels $8 \\cdot 3 = 24$ miles and Betsy travels $12 \\cdot 2 = 24$ miles.)',
          rubric: [
            { code: 'M4', text: 'Sets up $8t = 12(t - 1)$ and solves for $t = 3$ hours after $1{:}30$.' },
            { code: 'A2', text: 'Obtains $4{:}30$, option E.' }
          ]
        },
        {
          label: '2',
          marks: 6,
          prompt:
            'A box contains $10$ pounds of a nut mix that is $50$ percent peanuts, $20$ percent cashews, and $30$ percent almonds. A second nut mix containing $20$ percent peanuts, $40$ percent cashews, and $40$ percent almonds is added to the box resulting in a new nut mix that is $40$ percent peanuts. How many pounds of cashews are now in the box?\n\nA. $3.5$\nB. $4$\nC. $4.5$\nD. $5$\nE. $6$',
          answer: 'B. $4$',
          principle: 'Track the total weight of peanuts to find the weight of the added mix, then compute the total weight of cashews.',
          solution:
            'Initially, the $10$-pound mix contains $0.50 \\times 10 = 5$ pounds of peanuts and $0.20 \\times 10 = 2$ pounds of cashews.\nLet $x$ pounds be the weight of the second nut mix added. The added mix contributes $0.20x$ pounds of peanuts, and the final mix weighs $10 + x$ pounds with $40\\%$ peanuts:\n$$\\frac{5 + 0.2x}{10 + x} = 0.4 \\implies 5 + 0.2x = 4 + 0.4x \\implies 0.2x = 1 \\implies x = 5\\text{ pounds}.$$\nThe added $5$ pounds contain $40\\%$ cashews, which is $0.40 \\times 5 = 2$ pounds of cashews. Adding this to the initial $2$ pounds gives\n$$2 + 2 = 4\\text{ pounds of cashews}.$$',
          rubric: [
            { code: 'M4', text: 'Solves $\\frac{5 + 0.2x}{10 + x} = 0.4$ to find $x = 5$ pounds added.' },
            { code: 'A2', text: 'Computes $2 + 0.4(5) = 4$ pounds of cashews, option B.' }
          ]
        },
        {
          label: '3',
          marks: 6,
          prompt:
            'How many isosceles triangles are there with positive area whose side lengths are all positive integers and whose longest side has length $2025$?\n\nA. $2025$\nB. $2026$\nC. $3012$\nD. $3037$\nE. $4050$',
          answer: 'D. $3037$',
          principle: 'Split into cases based on whether the longest side $2025$ is the base or one of the two equal legs, and apply the triangle inequality.',
          solution:
            'Let the side lengths of the isosceles triangle be $a, a, b$ with positive integers $a, b \\ge 1$ and $\\max(a, b) = 2025$.\n- **Case 1: The unique longest side is $2025$ (so $b = 2025$ and $a \\le 2025$).**\n  For positive area, the triangle inequality requires $a + a > 2025 \\implies 2a > 2025 \\implies a \\ge 1013$. Since $a \\le 2025$, the valid values are $a \\in \\{1013, 1014, \\dots, 2025\\}$, which gives\n  $$2025 - 1013 + 1 = 1013\\text{ triangles}$$\n  (this includes the equilateral triangle $(2025, 2025, 2025)$).\n- **Case 2: The two equal legs have length $2025$ and the base is strictly shorter ($a = 2025$ and $1 \\le b \\le 2024$).**\n  The triangle inequality $2025 + b > 2025$ automatically holds for every positive integer $b$, so all $b \\in \\{1, 2, \\dots, 2024\\}$ are valid, giving $2024$ triangles.\n\nThe two cases are disjoint, so the total number of such isosceles triangles is\n$$1013 + 2024 = 3037.$$',
          rubric: [
            { code: 'M2', text: 'Counts Case 1 ($b = 2025$, $1013 \\le a \\le 2025$) to get $1013$ triangles.' },
            { code: 'M2', text: 'Counts Case 2 ($a = 2025$, $1 \\le b \\le 2024$) to get $2024$ triangles without double-counting equilateral.' },
            { code: 'A2', text: 'Sums $1013 + 2024 = 3037$, option D.' }
          ]
        },
        {
          label: '4',
          marks: 6,
          prompt:
            'A team of students is going to compete against a team of teachers in a trivia contest. The total number of students and teachers is $15$. Ash, a cousin of one of the students, wants to join the contest. If Ash plays with the students, the average age on that team will increase from $12$ to $14$. If Ash plays with the teachers, the average age on that team will decrease from $55$ to $52$. How old is Ash?\n\nA. $28$\nB. $29$\nC. $30$\nD. $32$\nE. $33$',
          answer: 'A. $28$',
          principle: 'Express Ash\'s age in terms of the size of each team using the change in total age, then combine with $S + T = 15$.',
          solution:
            'Let $S$ be the number of students, $T$ be the number of teachers, and $A$ be Ash\'s age. We are given $S + T = 15$.\n- If Ash joins the students, the total age increases from $12S$ to $14(S + 1)$, so\n  $$12S + A = 14(S + 1) \\implies A = 2S + 14.$$\n- If Ash joins the teachers, the total age changes from $55T$ to $52(T + 1)$, so\n  $$55T + A = 52(T + 1) \\implies A = 52 - 3T.$$\n\nEquating the two expressions for $A$ and substituting $T = 15 - S$:\n$$2S + 14 = 52 - 3(15 - S) = 7 + 3S \\implies S = 7.$$\nHence $T = 15 - 7 = 8$, and Ash\'s age is\n$$A = 2(7) + 14 = 28$$ (check: $52 - 3(8) = 28$).',
          rubric: [
            { code: 'M4', text: 'Derives $A = 2S + 14$ and $A = 52 - 3T$ with $S + T = 15$ to find $S = 7$, $T = 8$.' },
            { code: 'A2', text: 'Finds Ash\'s age $A = 28$, option A.' }
          ]
        },
        {
          label: '5',
          marks: 6,
          prompt:
            'Consider the sequence of positive integers\n$$1, 2, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, \\dots$$\nWhat is the $2025$th term in this sequence?\n\nA. $5$\nB. $15$\nC. $16$\nD. $44$\nE. $45$',
          answer: 'E. $45$',
          principle: 'Partition the sequence into blocks ending at each $1$, compute cumulative block lengths, and locate position $2025$.',
          solution:
            'Group the sequence into blocks starting right after each $1$ and ending at the next $1$:\n- Block $0$: $(1)$, length $1$.\n- Block $1$: $(2, 1)$, length $2$.\n- Block $2$: $(2, 3, 2, 1)$, length $4$.\n- Block $3$: $(2, 3, 4, 3, 2, 1)$, length $6$.\n- In general, Block $k$ ($k \\ge 1$) goes $2, 3, \\dots, k+1, k, \\dots, 2, 1$ and has length $2k$.\n\nThus the total number of terms through Block $n$ is\n$$1 + 2(1 + 2 + \\dots + n) = 1 + n(n + 1).$$\nTesting $n$ near $\\sqrt{2025} = 45$:\n- For $n = 44$: $1 + 44 \\times 45 = 1 + 1980 = 1981$. So the $1981$st term is the $1$ at the end of Block $44$.\n- Block $45$ begins at position $1982$ with $2, 3, \\dots$ rising to peak $46$ at position $1981 + 45 = 2026$.\n\nSince $2025$ is one step before $2026$ (or $2025 - 1981 = 44$ steps after $1$, reaching $1 + 44 = 45$), the $2025$th term is $45$.',
          rubric: [
            { code: 'M4', text: 'Establishes the position of the $1$ at the end of Block $n$ as $1 + n(n+1)$ and finds the $1981$st term is $1$.' },
            { code: 'A2', text: 'Computes the $2025$th term as $1 + (2025 - 1981) = 45$, option E.' }
          ]
        },
        {
          label: '6',
          marks: 6,
          prompt:
            'In an equilateral triangle each interior angle is trisected by a pair of rays. The intersection of the interiors of the middle $20^\\circ$-angle at each vertex is the interior of a convex hexagon. What is the degree measure of the smallest angle of this hexagon?\n\nA. $80$\nB. $90$\nC. $100$\nD. $110$\nE. $120$',
          answer: 'C. $100$',
          principle: 'Use the three-fold rotational symmetry of the equilateral triangle and triangle angle sums to find the hexagon\'s two distinct angle measures.',
          solution:
            'Let the equilateral triangle be $\\triangle ABC$, with each interior angle $60^\\circ$ divided into three $20^\\circ$ angles. At each vertex, the middle $20^\\circ$-angle is bounded by two rays making $20^\\circ$ angles with the two adjacent sides of $\\triangle ABC$.\nThe six bounding rays of the three middle cones form the sides of the convex hexagon. By $120^\\circ$ rotational symmetry, the six interior angles of the hexagon alternate between two measures $\\alpha$ and $\\beta$:\n1. **Three vertices facing each side of $\\triangle ABC$:** Formed where the $20^\\circ$-from-side rays from two adjacent vertices intersect (for instance, the ray $20^\\circ$ from $AB$ at $A$ meeting the ray $20^\\circ$ from $BA$ at $B$). In the triangle formed with side $AB$, the base angles are $20^\\circ$ and $20^\\circ$, so the apex angle is $180^\\circ - 20^\\circ - 20^\\circ = 140^\\circ$. By vertical angles, this interior angle of the hexagon is $\\alpha = 140^\\circ$.\n2. **The remaining three vertices:** Since the interior angles of any convex hexagon sum to $(6 - 2) \\times 180^\\circ = 720^\\circ$ and three alternating vertices have measure $140^\\circ$, the other three equal interior angles $\\beta$ satisfy\n$$3(140^\\circ) + 3\\beta = 720^\\circ \\implies 3\\beta = 300^\\circ \\implies \\beta = 100^\\circ.$$\n(Indeed, pairing the ray $20^\\circ$ from $BA$ at $B$ and the ray $20^\\circ$ from $CA$ at $C$ gives an angle of $100^\\circ$ into the intersection region.)\n\nTherefore, the smallest angle of the hexagon is $100^\\circ$.',
          rubric: [
            { code: 'M4', text: 'Uses $3$-fold symmetry to find the three $140^\\circ$ angles ($180^\\circ - 20^\\circ - 20^\\circ$) and applies the hexagon angle sum $720^\\circ$.' },
            { code: 'A2', text: 'Computes $(720^\\circ - 3 \\cdot 140^\\circ)/3 = 100^\\circ$, option C.' }
          ]
        },
        {
          label: '7',
          marks: 6,
          prompt:
            'Suppose $a$ and $b$ are real numbers. When the polynomial $x^3 + x^2 + ax + b$ is divided by $x - 1$, the remainder is $4$. When the polynomial is divided by $x - 2$, the remainder is $6$. What is $b - a$?\n\nA. $14$\nB. $15$\nC. $16$\nD. $17$\nE. $18$',
          answer: 'E. $18$',
          principle: 'Apply the Remainder Theorem to generate two linear equations in $a$ and $b$.',
          solution:
            'Let $P(x) = x^3 + x^2 + ax + b$. By the Remainder Theorem:\n- $P(1) = 4 \\implies 1 + 1 + a + b = 4 \\implies a + b = 2$.\n- $P(2) = 6 \\implies 8 + 4 + 2a + b = 6 \\implies 2a + b = -6$.\n\nSubtracting the first equation from the second gives\n$$(2a + b) - (a + b) = -6 - 2 \\implies a = -8.$$\nSubstituting $a = -8$ into $a + b = 2$ yields $b = 10$. Therefore,\n$$b - a = 10 - (-8) = 18.$$',
          rubric: [
            { code: 'M4', text: 'Uses the Remainder Theorem to get $a + b = 2$ and $2a + b = -6$, yielding $a = -8$ and $b = 10$.' },
            { code: 'A2', text: 'Evaluates $b - a = 18$, option E.' }
          ]
        },
        {
          label: '8',
          marks: 6,
          prompt:
            'Agnes writes the following four statements on a blank piece of paper.\n- At least one of these statements is true.\n- At least two of these statements are true.\n- At least two of these statements are false.\n- At least one of these statements is false.\n\nEach statement is either true or false. How many false statements did Agnes write on the paper?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'B. $1$',
          principle: 'Test each possible count $f \\in \\{0, 1, 2, 3, 4\\}$ of false statements for self-consistency.',
          solution:
            'Let $t$ be the number of true statements and $f = 4 - t$ be the number of false statements.\n- If $f = 0$ ($t = 4$): the third and fourth statements ("at least two are false", "at least one is false") would be false, contradiction.\n- If $f = 1$ ($t = 3$): "at least one is true" ($3 \\ge 1$, true), "at least two are true" ($3 \\ge 2$, true), "at least two are false" ($1 \\ge 2$, false), and "at least one is false" ($1 \\ge 1$, true). This gives $3$ true statements and $1$ false statement, which is completely consistent!\n- For completeness, $f = 2$ ($t = 2$) would make all four statements true ($f = 0$, contradiction); $f = 3$ ($t = 1$) would give $3$ true statements (contradiction); $f = 4$ ($t = 0$) would make the third and fourth statements true (contradiction).\n\nThus Agnes wrote exactly $1$ false statement.',
          rubric: [
            { code: 'M4', text: 'Tests consistency of the number of false statements $f \\in \\{0,1,2,3,4\\}$ against all four claims.' },
            { code: 'A2', text: 'Concludes $f = 1$ is the unique consistent count, option B.' }
          ]
        },
        {
          label: '9',
          marks: 6,
          prompt:
            'Let $f(x) = 100x^3 - 300x^2 + 200x$. For how many real numbers $a$ does the graph of $y = f(x - a)$ pass through the point $(1, 25)$?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. $\\text{more than } 4$',
          answer: 'C. $3$',
          principle: 'Substitute $(x, y) = (1, 25)$ and count real roots of the resulting cubic by analyzing its local extrema.',
          solution:
            'Factor $f(x)$:\n$$f(x) = 100x(x^2 - 3x + 2) = 100x(x - 1)(x - 2).$$\nThe graph of $y = f(x - a)$ passes through $(1, 25)$ if and only if $f(1 - a) = 25$. Let $u = 1 - a$ (there is a one-to-one correspondence between real $a$ and real $u$). Then\n$$100u(u - 1)(u - 2) = 25 \\implies 4u(u - 1)(u - 2) = 1.$$\nLet $g(u) = 4u(u - 1)(u - 2) = 4(u - 1)^3 - 4(u - 1)$. Using the substitution $v = u - 1$, we need the number of real roots of\n$$4v^3 - 4v = 1.$$\nFor $h(v) = 4v^3 - 4v$, we have $h\'(v) = 12v^2 - 4 = 0$ at $v = \\pm \\frac{1}{\\sqrt{3}}$.\n- At the local maximum $v = -\\frac{1}{\\sqrt{3}}$: $h\\left(-\\frac{1}{\\sqrt{3}}\\right) = \\frac{8}{3\\sqrt{3}} = \\frac{8\\sqrt{3}}{9} > 1$ (since $(8\\sqrt{3})^2 = 192 > 81 = 9^2$).\n- At the local minimum $v = \\frac{1}{\\sqrt{3}}$: $h\\left(\\frac{1}{\\sqrt{3}}\\right) = -\\frac{8\\sqrt{3}}{9} < 1$.\n\nSince $h(v) \\to -\\infty$ as $v \\to -\\infty$ and $h(v) \\to +\\infty$ as $v \\to +\\infty$, the horizontal line $y = 1$ lies strictly between the local minimum and local maximum values, intersecting $y = h(v)$ at $3$ distinct real values of $v$ (and hence $3$ real values of $a$).',
          rubric: [
            { code: 'M4', text: 'Reduces $f(1 - a) = 25$ to $4v^3 - 4v = 1$ ($v = -a$) and compares $1$ with the local maximum $\\frac{8\\sqrt{3}}{9} > 1$.' },
            { code: 'A2', text: 'Concludes there are $3$ real solutions, option C.' }
          ]
        },
        {
          label: '10',
          marks: 6,
          prompt:
            'A semicircle has diameter $\\overline{AB}$ and chord $\\overline{CD}$ of length $16$ parallel to $\\overline{AB}$. A smaller semicircle with diameter on $\\overline{AB}$ and tangent to $\\overline{CD}$ is cut from the larger semicircle, as shown below.\n\nWhat is the area of the resulting figure, shown shaded?\n\nA. $16\\pi$\nB. $24\\pi$\nC. $32\\pi$\nD. $48\\pi$\nE. $64\\pi$',
          figures: [
            {
              src: '/papers/amc-10a-2025/fig-10.webp',
              alt: 'Large semicircle with diameter AB, parallel chord CD of length 16 above AB, and a smaller unshaded semicircle with diameter on AB tangent to CD.',
              caption: 'Large semicircle with chord CD = 16 and removed tangent semicircle.'
            }
          ],
          answer: 'C. $32\\pi$',
          principle: 'Apply the Pythagorean theorem to the center of the large semicircle, the midpoint of $\\overline{CD}$, and point $D$ to find $R^2 - r^2$.',
          solution:
            'Let $O$ be the center of the larger semicircle and $R$ its radius, and let $r$ be the radius of the smaller semicircle. Because the smaller semicircle has its diameter on $\\overline{AB}$ and is tangent to the parallel chord $\\overline{CD}$, the perpendicular distance between $\\overline{AB}$ and $\\overline{CD}$ is $r$.\nLet $M$ be the midpoint of $\\overline{CD}$. Since $\\overline{OM} \\perp \\overline{CD}$, we have $OM = r$ and $MD = \\frac{16}{2} = 8$. By the Pythagorean theorem in right triangle $\\triangle OMD$:\n$$OD^2 = OM^2 + MD^2 \\implies R^2 = r^2 + 8^2 \\implies R^2 - r^2 = 64.$$\nThe shaded area is the area of the larger semicircle minus the area of the smaller semicircle:\n$$\\text{Area} = \\frac{1}{2}\\pi R^2 - \\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi(R^2 - r^2) = \\frac{1}{2}\\pi(64) = 32\\pi.$$',
          rubric: [
            { code: 'M4', text: 'Uses $\\triangle OMD$ to establish $R^2 - r^2 = 8^2 = 64$.' },
            { code: 'A2', text: 'Computes the shaded area $\\frac{1}{2}\\pi(R^2 - r^2) = 32\\pi$, option C.' }
          ]
        },
        {
          label: '11',
          marks: 6,
          prompt:
            'The sequence $1, x, y, z$ is arithmetic. The sequence $1, p, q, z$ is geometric. Both sequences are strictly increasing and contain only integers, and $z$ is as small as possible. What is the value of $x + y + z + p + q$?\n\nA. $66$\nB. $91$\nC. $103$\nD. $132$\nE. $149$',
          answer: 'E. $149$',
          principle: 'Express $z$ as $p^3$ from the geometric sequence and enforce $3 \\mid (z - 1)$ from the arithmetic sequence.',
          solution:
            'In the geometric sequence $1, p, q, z$, the common ratio is $r = \\frac{p}{1} = p$, which is an integer strictly greater than $1$ since the sequence is strictly increasing and contains only integers. Thus $q = p^2$ and $z = p^3$.\nIn the arithmetic sequence $1, x, y, z$ with integer common difference $d > 0$, we have $z = 1 + 3d$, so $z - 1 = p^3 - 1$ must be divisible by $3$.\nChecking small integers $p \\ge 2$:\n- $p = 2$: $p^3 - 1 = 7$ (not divisible by $3$).\n- $p = 3$: $p^3 - 1 = 26$ (not divisible by $3$).\n- $p = 4$: $p^3 - 1 = 63 = 3 \\times 21$ (divisible by $3$!).\n\nHence the smallest possible $z$ occurs at $p = 4$, giving $q = 16$, $z = 64$, and $d = 21$. Then $x = 1 + 21 = 22$ and $y = 1 + 42 = 43$. Finally,\n$$x + y + z + p + q = 22 + 43 + 64 + 4 + 16 = 149.$$',
          rubric: [
            { code: 'M4', text: 'Finds $z = p^3$ with $3 \\mid (p^3 - 1)$, giving minimal $p = 4$, $q = 16$, $z = 64$, $x = 22$, $y = 43$.' },
            { code: 'A2', text: 'Computes the sum $149$, option E.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'Carlos uses a $4$-digit passcode to unlock his computer. In his passcode, exactly one digit is even, exactly one (possibly different) digit is prime, and no digit is $0$. How many $4$-digit passcodes satisfy these conditions?\n\nA. $176$\nB. $192$\nC. $432$\nD. $464$\nE. $608$',
          answer: 'D. $464$',
          principle: 'Partition the nonzero digits into disjoint sets—noting that $2$ is both even and prime—and split into cases.',
          solution:
            'Partition the nonzero digits $\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$ into four disjoint categories:\n- Even and prime: $\\{2\\}$ ($1$ digit).\n- Even and not prime: $\\{4, 6, 8\\}$ ($3$ digits).\n- Odd and prime: $\\{3, 5, 7\\}$ ($3$ digits).\n- Odd and not prime: $\\{1, 9\\}$ ($2$ digits).\n\nSplit into two cases depending on whether $2$ is used:\n- **Case 1: The passcode contains the digit $2$ (which serves as both the unique even digit and the unique prime digit).**\n  Choose $1$ of the $4$ positions for $2$ ($4$ ways), and fill the remaining $3$ positions with digits from $\\{1, 9\\}$ ($2^3 = 8$ ways). This gives\n  $$4 \\times 8 = 32\\text{ passcodes}.$$\n- **Case 2: The even digit and the prime digit are distinct (so one is from $\\{4, 6, 8\\}$ and one is from $\\{3, 5, 7\\}$).**\n  Choose the position for the even non-prime digit ($4$ ways) and its value ($3$ choices), choose the position for the odd prime digit ($3$ ways) and its value ($3$ choices), and fill the remaining $2$ positions with digits from $\\{1, 9\\}$ ($2^2 = 4$ ways). This gives\n  $$4 \\times 3 \\times 3 \\times 3 \\times 4 = 432\\text{ passcodes}.$$\n\nAdding both cases gives $32 + 432 = 464$ valid passcodes.',
          rubric: [
            { code: 'M2', text: 'Handles Case 1 where $2$ is both the even and prime digit ($4 \\cdot 2^3 = 32$).' },
            { code: 'M2', text: 'Handles Case 2 where the even and prime digits are distinct ($4 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 2^2 = 432$).' },
            { code: 'A2', text: 'Sums $32 + 432 = 464$, option D.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'In the figure below, the outside square contains infinitely many squares, each of them with the same center and sides parallel to the outside square. The ratio of the side length of a square to the side length of the next inner square is $k$, where $0 < k < 1$. The spaces between squares are alternately shaded as shown in the figure (which is not necessarily drawn to scale).\n\nThe area of the shaded portion of the figure is $64\\%$ of the area of the original square. What is $k$?\n\nA. $\\frac{3}{5}$\nB. $\\frac{16}{25}$\nC. $\\frac{2}{3}$\nD. $\\frac{3}{4}$\nE. $\\frac{4}{5}$',
          figures: [
            {
              src: '/papers/amc-10a-2025/fig-13.webp',
              alt: 'Concentric nested squares with parallel sides whose annular regions are alternately shaded pink and white from the outermost frame inward.',
              caption: 'Infinitely many nested squares with alternating shaded bands.'
            }
          ],
          answer: 'D. $\\frac{3}{4}$',
          principle: 'Sum the infinite geometric series of shaded annular areas and solve for $k \\in (0, 1)$.',
          solution:
            'Since $0 < k < 1$, each inner square has side length $k$ times that of the square directly enclosing it. Without loss of generality, let the outermost square have side length $1$ and area $1$. Then the $n$-th square ($n = 0, 1, 2, \\dots$) has side length $k^n$ and area $k^{2n}$.\nThe shaded bands are the regions between the $0$-th and $1$-st squares, between the $2$-nd and $3$-rd squares, and so on:\n$$\\text{Shaded area} = (1 - k^2) + (k^4 - k^6) + (k^8 - k^{10}) + \\cdots = (1 - k^2)\\sum_{m=0}^{\\infty} k^{4m} = \\frac{1 - k^2}{1 - k^4} = \\frac{1}{1 + k^2}.$$\nSetting this equal to $64\\% = \\frac{16}{25}$:\n$$\\frac{1}{1 + k^2} = \\frac{16}{25} \\implies 1 + k^2 = \\frac{25}{16} \\implies k^2 = \\frac{9}{16}.$$\nSince $k > 0$, we obtain $k = \\frac{3}{4}$.',
          rubric: [
            { code: 'M4', text: 'Sums the infinite geometric series of shaded rings to obtain $\\frac{1}{1 + k^2} = \\frac{16}{25}$.' },
            { code: 'A2', text: 'Solves for $k = \\frac{3}{4}$, option D.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'Six chairs are arranged around a round table. Two students and two teachers randomly select four of the chairs to sit in. What is the probability that the two students will sit in two adjacent chairs and the two teachers will also sit in two adjacent chairs?\n\nA. $\\frac{1}{6}$\nB. $\\frac{1}{5}$\nC. $\\frac{2}{9}$\nD. $\\frac{3}{13}$\nE. $\\frac{1}{4}$',
          answer: 'B. $\\frac{1}{5}$',
          principle: 'Count equally likely selections of two chairs for the students and two disjoint chairs for the teachers.',
          solution:
            'Ignore which specific student sits in which student chair (and similarly for the teachers), as this multiplies both favorable and total outcomes by $2! \\cdot 2! = 4$.\nThe total number of ways to choose $2$ chairs for the students and $2$ of the remaining $4$ chairs for the teachers is\n$$\\binom{6}{2} \\binom{4}{2} = 15 \\times 6 = 90.$$\nFor a favorable seating:\n- There are $6$ pairs of adjacent chairs around the circle for the two students.\n- Once the two students occupy $2$ adjacent chairs, the remaining $4$ chairs form a contiguous arc of $4$ seats, which contains exactly $3$ pairs of adjacent chairs for the two teachers.\n\nThus there are $6 \\times 3 = 18$ favorable selections, and the probability is\n$$\\frac{18}{90} = \\frac{1}{5}.$$',
          rubric: [
            { code: 'M4', text: 'Counts total selections $\\binom{6}{2}\\binom{4}{2} = 90$ and favorable adjacent-pair selections $6 \\times 3 = 18$.' },
            { code: 'A2', text: 'Simplifies $\\frac{18}{90} = \\frac{1}{5}$, option B.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'In the figure below, $ABEF$ is a rectangle, $\\overline{AD} \\perp \\overline{DE}$, $AF = 7$, $AB = 1$, and $AD = 5$. What is the area of $\\triangle ABC$?\n\nA. $\\frac{3}{8}$\nB. $\\frac{4}{9}$\nC. $\\frac{1}{8}\\sqrt{13}$\nD. $\\frac{7}{15}$\nE. $\\frac{1}{8}\\sqrt{15}$',
          figures: [
            {
              src: '/papers/amc-10a-2025/fig-15.webp',
              alt: 'Rectangle ABEF overlapping right triangle ADE with right angle at D, where side BE intersects AD at C and triangle ABC is shaded pink.',
              caption: 'Rectangle ABEF and right triangle ADE intersecting to form shaded triangle ABC.'
            }
          ],
          answer: 'A. $\\frac{3}{8}$',
          principle: 'Use the Pythagorean theorem on rectangle $ABEF$ and right $\\triangle ADE$, then apply similar right triangles $\\triangle ABC \\sim \\triangle EDC$.',
          solution:
            'Since $ABEF$ is a rectangle with $AB = 1$ and $AF = 7$, we have $EF = 1$, $BE = 7$, and $\\angle AFE = \\angle ABE = 90^\\circ$. By the Pythagorean theorem in $\\triangle AFE$,\n$$AE^2 = AF^2 + FE^2 = 7^2 + 1^2 = 50.$$\nSince $\\overline{AD} \\perp \\overline{DE}$, $\\triangle ADE$ is a right triangle with hypotenuse $AE$. Given $AD = 5$,\n$$DE^2 = AE^2 - AD^2 = 50 - 5^2 = 25 \\implies DE = 5.$$\nNow $\\triangle ABC$ and $\\triangle EDC$ are both right triangles (at $B$ and $D$, respectively) with vertical angles $\\angle ACB = \\angle ECD$, so $\\triangle ABC \\sim \\triangle EDC$ by AA similarity.\nSince $DE = 5$ and $AB = 1$, letting $BC = x$ gives $CD = 5x$ and $AC = AD - CD = 5 - 5x$. Applying the Pythagorean theorem in $\\triangle ABC$ gives\n$$AC^2 = AB^2 + BC^2 \\implies (5 - 5x)^2 = 1^2 + x^2$$\n$$25(1 - 2x + x^2) = 1 + x^2 \\implies 24x^2 - 50x + 24 = 0 \\implies 12x^2 - 25x + 12 = 0.$$\nFactoring gives $(3x - 4)(4x - 3) = 0$. Since $CD = 5x < AD = 5$, we must have $x < 1$, so $x = \\frac{3}{4}$ (and $CE = 7 - \\frac{3}{4} = \\frac{25}{4} = \\sqrt{5^2 + (15/4)^2}$).\nTherefore, the area of right $\\triangle ABC$ is\n$$\\frac{1}{2} \\cdot AB \\cdot BC = \\frac{1}{2} \\cdot 1 \\cdot \\frac{3}{4} = \\frac{3}{8}.$$',
          rubric: [
            { code: 'M2', text: 'Computes $AE^2 = 50$ and $DE = 5$, establishing $\\triangle ABC \\sim \\triangle EDC$ with ratio $1 : 5$.' },
            { code: 'M2', text: 'Solves $(5 - 5x)^2 = 1 + x^2$ for $x = BC = \\frac{3}{4}$.' },
            { code: 'A2', text: 'Computes $[\\triangle ABC] = \\frac{1}{2}(1)\\left(\\frac{3}{4}\\right) = \\frac{3}{8}$, option A.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'There are three jars. Each of three coins is placed in one of the three jars, chosen at random and independently of the placements of the other coins. What is the expected number of coins in a jar with the most coins?\n\nA. $\\frac{4}{3}$\nB. $\\frac{13}{9}$\nC. $\\frac{5}{3}$\nD. $\\frac{17}{9}$\nE. $2$',
          answer: 'D. $\\frac{17}{9}$',
          principle: 'List all $3^3 = 27$ equally likely coin placements grouped by maximum occupancy and take the weighted average.',
          solution:
            'There are $3^3 = 27$ equally likely ways to place the $3$ distinct coins into the $3$ distinct jars. Let $M$ be the maximum number of coins in any jar.\n- **$M = 3$ (all $3$ coins in the same jar):** $3$ ways (choose which jar gets all $3$ coins).\n- **$M = 2$ (two coins in one jar, one in another):** Choose the jar with $2$ coins ($3$ ways), choose which $2$ of the $3$ coins go there ($\\binom{3}{2} = 3$ ways), and choose which of the other $2$ jars gets the remaining coin ($2$ ways), giving $3 \\times 3 \\times 2 = 18$ ways.\n- **$M = 1$ (one coin in each jar):** $3! = 6$ ways.\n\nNotice $3 + 18 + 6 = 27$. Thus the expected value of $M$ is\n$$E[M] = \\frac{3 \\cdot 3 + 18 \\cdot 2 + 6 \\cdot 1}{27} = \\frac{9 + 36 + 6}{27} = \\frac{51}{27} = \\frac{17}{9}.$$',
          rubric: [
            { code: 'M4', text: 'Counts outcomes by maximum occupancy: $3$ ways for $M=3$, $18$ ways for $M=2$, and $6$ ways for $M=1$.' },
            { code: 'A2', text: 'Computes $E[M] = \\frac{51}{27} = \\frac{17}{9}$, option D.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'Let $N$ be the unique positive integer such that dividing $273436$ by $N$ leaves a remainder of $16$ and dividing $272760$ by $N$ leaves a remainder of $15$. What is the tens digit of $N$?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'E. $4$',
          principle: 'Subtract the remainders so $N$ divides the difference of each dividend and its remainder, then take their greatest common divisor.',
          solution:
            'Since the remainder upon dividing by $N$ is $16$ in the first division, we must have $N > 16$. Moreover, $N$ divides both\n$$273436 - 16 = 273420 \\quad\\text{and}\\quad 272760 - 15 = 272745.$$\nThus $N$ must divide $\\gcd(273420, 272745)$. Using the Euclidean algorithm:\n$$273420 - 272745 = 675.$$\nNow divide $272745$ by $675$: $675 \\times 400 = 270000$, and $272745 - 270000 = 2745 = 675 \\times 4 + 45$. So\n$$\\gcd(273420, 272745) = \\gcd(675, 45) = 45$$\n(since $675 = 45 \\times 15$).\nThe divisors of $45$ greater than $16$ are only $N = 45$ itself. Its tens digit is $4$.',
          rubric: [
            { code: 'M4', text: 'Finds $N \\mid \\gcd(273420, 272745) = 45$ with $N > 16$, uniquely giving $N = 45$.' },
            { code: 'A2', text: 'Identifies the tens digit $4$, option E.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'The *harmonic mean* of a collection of numbers is the reciprocal of the arithmetic mean of the reciprocals of the numbers in the collection. For example, the harmonic mean of $4$, $4$, and $5$ is\n$$\\frac{1}{\\frac{1}{3}\\left(\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{5}\\right)} = \\frac{30}{7}.$$\nWhat is the harmonic mean of all the real roots of the $4050$th degree polynomial\n$$\\prod_{k=1}^{2025} (kx^2 - 4x - 3) = (x^2 - 4x - 3)(2x^2 - 4x - 3)(3x^2 - 4x - 3)\\cdots(2025x^2 - 4x - 3)?$$\n\nA. $-\\frac{5}{3}$\nB. $-\\frac{3}{2}$\nC. $-\\frac{6}{5}$\nD. $-\\frac{5}{6}$\nE. $-\\frac{2}{3}$',
          answer: 'B. $-\\frac{3}{2}$',
          principle: 'Apply Vieta\'s formulas to each quadratic factor to find the sum of reciprocals of its two roots, which is independent of $k$.',
          solution:
            'For every $k \\in \\{1, 2, \\dots, 2025\\}$, the quadratic $kx^2 - 4x - 3$ has discriminant\n$$\\Delta_k = (-4)^2 - 4(k)(-3) = 16 + 12k > 0,$$\nso both of its roots $r_k, s_k$ are real (and nonzero, since the constant term is $-3 \\ne 0$). Thus all $4050$ roots of the polynomial are real and nonzero.\nBy Vieta\'s formulas, $r_k + s_k = \\frac{4}{k}$ and $r_k s_k = -\\frac{3}{k}$, so the sum of the reciprocals of the two roots of the $k$-th factor is\n$$\\frac{1}{r_k} + \\frac{1}{s_k} = \\frac{r_k + s_k}{r_k s_k} = \\frac{4/k}{-3/k} = -\\frac{4}{3},$$\nwhich is independent of $k$. Summing over all $2025$ factors, the arithmetic mean of the reciprocals of all $4050$ roots is\n$$\\frac{1}{4050}\\sum_{k=1}^{2025}\\left(\\frac{1}{r_k} + \\frac{1}{s_k}\\right) = \\frac{2025 \\cdot (-4/3)}{4050} = \\frac{1}{2}\\left(-\\frac{4}{3}\\right) = -\\frac{2}{3}.$$\nTaking the reciprocal gives the harmonic mean:\n$$\\frac{1}{-2/3} = -\\frac{3}{2}.$$',
          rubric: [
            { code: 'M4', text: 'Shows all $4050$ roots are real and uses Vieta\'s formulas to get $\\frac{1}{r_k} + \\frac{1}{s_k} = -\\frac{4}{3}$ for every $k$.' },
            { code: 'A2', text: 'Computes the harmonic mean $-\\frac{3}{2}$, option B.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'An array of numbers is constructed beginning with the numbers $-1 \\quad 3 \\quad 1$ in the top row. Each adjacent pair of numbers is summed to produce a number in the next row. Each row begins and ends with $-1$ and $1$, respectively.\n$$\\begin{array}{ccccccccc} & & -1 & & 3 & & 1 & & \\\\ & -1 & & 2 & & 4 & & 1 & \\\\ -1 & & 1 & & 6 & & 5 & & 1 \\end{array}$$\nIf the process continues, one of the rows will sum to $12{,}288$. In that row, what is the third number from the left?\n\nA. $-29$\nB. $-21$\nC. $-14$\nD. $-8$\nE. $-3$',
          answer: 'A. $-29$',
          principle: 'Track the recurrence for the row sums and the first three entries from the left in each row.',
          solution:
            'Let $S_n$ be the sum of the numbers in Row $n$, starting with Row $1$ as $(-1, 3, 1)$, so $S_1 = -1 + 3 + 1 = 3$.\nWhen forming Row $n+1$ from Row $n$, each interior entry contributes twice (to two adjacent sums), and each boundary entry ($-1$ or $1$) contributes once to an adjacent sum plus once as the new boundary entry. Therefore, every entry in Row $n$ is counted twice in $S_{n+1}$, so\n$$S_{n+1} = 2S_n \\implies S_n = 3 \\cdot 2^{n-1}.$$\nCheck: $S_2 = -1 + 2 + 4 + 1 = 6$ and $S_3 = -1 + 1 + 6 + 5 + 1 = 12$.\nSetting $3 \\cdot 2^{n-1} = 12{,}288$ gives $2^{n-1} = 4096 = 2^{12}$, so $n = 13$.\n\nNow let $a_n, b_n, c_n$ be the first three entries from the left of Row $n$ ($n \\ge 1$). Clearly $a_n = -1$ for all $n$. By the construction rule:\n- $b_{n+1} = a_n + b_n = b_n - 1$. Since $b_1 = 3$, we have $b_n = 3 - (n - 1) = 4 - n$.\n- $c_{n+1} = b_n + c_n = (4 - n) + c_n$. Since $c_1 = 1$, summing from $k = 1$ to $12$ gives\n  $$c_{13} = c_1 + \\sum_{k=1}^{12} (4 - k) = 1 + (3 + 2 + 1 + 0 - 1 - 2 - \\cdots - 8).$$\n  In the sum, $3+2+1$ cancels $(-1)+(-2)+(-3)$, leaving\n  $$c_{13} = 1 - (4 + 5 + 6 + 7 + 8) = 1 - 30 = -29.$$',
          rubric: [
            { code: 'M2', text: 'Shows $S_n = 3 \\cdot 2^{n-1} = 12{,}288$ occurs at Row $n = 13$.' },
            { code: 'M2', text: 'Finds $b_n = 4 - n$ and sets up $c_{n+1} - c_n = 4 - n$.' },
            { code: 'A2', text: 'Computes $c_{13} = -29$, option A.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'A silo (right circular cylinder) with diameter $20$ meters stands in a field. MacDonald is located $20$ meters west and $15$ meters south of the center of the silo. McGregor is located $20$ meters east and $g > 0$ meters south of the center of the silo. The line of sight between MacDonald and McGregor is tangent to the silo. The value of $g$ can be written as $\\frac{a\\sqrt{b} - c}{d}$, where $a$, $b$, $c$, and $d$ are positive integers, $b$ is not divisible by the square of any prime, and $d$ is relatively prime to the greatest common divisor of $a$ and $c$. What is the value of $a + b + c + d$?\n\nA. $119$\nB. $120$\nC. $121$\nD. $122$\nE. $123$',
          answer: 'A. $119$',
          principle: 'Place the silo center at the origin in the coordinate plane and use the point-to-line distance formula for tangency.',
          solution:
            'Place the center of the silo at the origin $O(0, 0)$. Since the diameter is $20$ meters, the circular cross-section has radius $10$ meters ($x^2 + y^2 = 100$).\nMacDonald is at $A(-20, -15)$ and McGregor is at $B(20, -g)$ with $g > 0$. Let the line of sight through $A$ have slope $m$:\n$$y + 15 = m(x + 20) \\implies mx - y + (20m - 15) = 0.$$\nFor this line to be tangent to the circle of radius $10$ centered at $(0, 0)$, its perpendicular distance from $(0, 0)$ must equal $10$:\n$$\\frac{|20m - 15|}{\\sqrt{m^2 + 1}} = 10 \\implies (20m - 15)^2 = 100(m^2 + 1).$$\nExpanding and simplifying:\n$$400m^2 - 600m + 225 = 100m^2 + 100 \\implies 300m^2 - 600m + 125 = 0 \\implies 12m^2 - 24m + 5 = 0.$$\nBy the quadratic formula,\n$$m = \\frac{24 \\pm \\sqrt{576 - 240}}{24} = \\frac{24 \\pm \\sqrt{336}}{24} = \\frac{24 \\pm 4\\sqrt{21}}{24} = \\frac{6 \\pm \\sqrt{21}}{6}.$$\nSince $B(20, -g)$ lies on the line, substituting $x = 20$ gives\n$$-g = -15 + 40m = -15 + 40\\left(1 \\pm \\frac{\\sqrt{21}}{6}\\right) = 25 \\pm \\frac{20\\sqrt{21}}{3}.$$\nBecause $g > 0$, we need $-g < 0$, which forces the minus sign (and geometrically corresponds to the tangent line passing south of the silo, touching it between $x = -20$ and $x = 20$). Therefore,\n$$g = \\frac{20\\sqrt{21}}{3} - 25 = \\frac{20\\sqrt{21} - 75}{3}.$$\nHere $a = 20$, $b = 21$ (squarefree), $c = 75$, and $d = 3$ (with $\\gcd(20, 75) = 5$ coprime to $3$). Thus\n$$a + b + c + d = 20 + 21 + 75 + 3 = 119.$$',
          rubric: [
            { code: 'M2', text: 'Uses the distance-to-origin condition $\\frac{|20m-15|}{\\sqrt{m^2+1}} = 10$ to get $12m^2 - 24m + 5 = 0$.' },
            { code: 'M2', text: 'Selects $m = \\frac{6 - \\sqrt{21}}{6}$ so that $-g < 0$, giving $g = \\frac{20\\sqrt{21} - 75}{3}$.' },
            { code: 'A2', text: 'Computes $a + b + c + d = 20 + 21 + 75 + 3 = 119$, option A.' }
          ]
        },
        {
          label: '21',
          marks: 6,
          prompt:
            'A set of numbers is called *sum-free* if whenever $x$ and $y$ are (not necessarily distinct) elements of the set, $x + y$ is not an element of the set. For example, $\\{1, 4, 6\\}$ and the empty set are sum-free, but $\\{1, 4, 5\\}$ is not. What is the greatest possible number of elements in a sum-free subset of $\\{1, 2, 3, \\dots, 20\\}$?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'C. $10$',
          principle: 'Establish an upper bound by pairing elements that sum to the maximum element $M$ of the subset, and exhibit a $10$-element sum-free set.',
          solution:
            'First, note that $10$ elements are achievable: for example, the set of all odd integers $\\{1, 3, 5, 7, 9, 11, 13, 15, 17, 19\\}$ (since odd $+$ odd $=$ even) and the set $\\{11, 12, 13, \\dots, 20\\}$ (since any two elements sum to at least $22 > 20$) are both sum-free subsets of size $10$.\n\nNext, we prove no sum-free subset $S \\subseteq \\{1, 2, \\dots, 20\\}$ can have more than $10$ elements. Let $M = \\max(S)$, so $1 \\le M \\le 20$ and every element of $S$ lies in $\\{1, 2, \\dots, M\\}$.\nConsider the pairs $\\{x, M - x\\}$ for $1 \\le x < \\frac{M}{2}$:\n- No such pair can have both $x \\in S$ and $M - x \\in S$, because $x + (M - x) = M \\in S$.\n- If $M$ is even, then $\\frac{M}{2} \\notin S$ as well, because $\\frac{M}{2} + \\frac{M}{2} = M \\in S$.\n\nThus, out of the $M - 1$ numbers $\\{1, 2, \\dots, M - 1\\}$, at most $\\left\\lfloor \\frac{M - 1}{2} \\right\\rfloor$ can belong to $S$. Including $M$ itself,\n$$|S| \\le 1 + \\left\\lfloor \\frac{M - 1}{2} \\right\\rfloor = \\left\\lfloor \\frac{M + 1}{2} \\right\\rfloor \\le \\left\\lfloor \\frac{21}{2} \\right\\rfloor = 10.$$\nHence the greatest possible number of elements in $S$ is $10$.',
          rubric: [
            { code: 'M2', text: 'Constructs a $10$-element sum-free subset (e.g., all odd numbers or $\\{11, \\dots, 20\\}$).' },
            { code: 'M2', text: 'Proves $|S| \\le 1 + \\lfloor (M-1)/2 \\rfloor \\le 10$ by pairing $x$ with $M - x$.' },
            { code: 'A2', text: 'Concludes the maximum size is $10$, option C.' }
          ]
        },
        {
          label: '22',
          marks: 6,
          prompt:
            'A circle of radius $r$ is surrounded by three circles, whose radii are $1$, $2$, and $3$, all externally tangent to the inner circle and externally tangent to each other, as shown in the diagram below.\n\nWhat is $r$?\n\nA. $\\frac{1}{4}$\nB. $\\frac{6}{23}$\nC. $\\frac{3}{11}$\nD. $\\frac{5}{17}$\nE. $\\frac{3}{10}$',
          figures: [
            {
              src: '/papers/amc-10a-2025/fig-22.webp',
              alt: 'Three mutually externally tangent circles of different sizes surrounding a small inner circle tangent to all three.',
              caption: 'Inner circle of radius r externally tangent to circles of radii 1, 2, and 3.'
            }
          ],
          answer: 'B. $\\frac{6}{23}$',
          principle: 'Apply Descartes\' Circle Theorem to four mutually externally tangent circles.',
          solution:
            'For four mutually externally tangent circles with curvatures (signed inverse radii) $k_1, k_2, k_3, k_4$, Descartes\' Circle Theorem states:\n$$(k_1 + k_2 + k_3 + k_4)^2 = 2(k_1^2 + k_2^2 + k_3^2 + k_4^2),$$\nwhose solutions for $k_4$ are\n$$k_4 = k_1 + k_2 + k_3 \\pm 2\\sqrt{k_1 k_2 + k_2 k_3 + k_3 k_1}.$$\nHere $k_1 = 1$, $k_2 = \\frac{1}{2}$, $k_3 = \\frac{1}{3}$, and $k_4 = \\frac{1}{r} > 0$. Compute:\n$$k_1 + k_2 + k_3 = 1 + \\frac{1}{2} + \\frac{1}{3} = \\frac{11}{6},$$\n$$k_1 k_2 + k_2 k_3 + k_3 k_1 = \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{3} = 1.$$\nSince the inner circle is smaller than the three surrounding circles ($k_4 > 0$, corresponding to the $+$ sign, while the $-$ sign gives $-\\frac{1}{6}$ for the externally enclosing circle of radius $6$),\n$$\\frac{1}{r} = \\frac{11}{6} + 2\\sqrt{1} = \\frac{23}{6} \\implies r = \\frac{6}{23}.$$',
          rubric: [
            { code: 'M4', text: 'Applies Descartes\' Circle Theorem with $k_1=1, k_2=\\frac{1}{2}, k_3=\\frac{1}{3}$ to obtain $k_4 = \\frac{11}{6} + 2 = \\frac{23}{6}$.' },
            { code: 'A2', text: 'Inverts to find $r = \\frac{6}{23}$, option B.' }
          ]
        },
        {
          label: '23',
          marks: 6,
          prompt:
            'Triangle $\\triangle ABC$ has side lengths $AB = 80$, $BC = 45$, and $AC = 75$. The bisector of $\\angle B$ and the altitude to side $\\overline{AB}$ intersect at point $P$. What is $BP$?\n\nA. $18$\nB. $19$\nC. $20$\nD. $21$\nE. $22$',
          answer: 'D. $21$',
          principle: 'Find the projection $BH$ of $BC$ onto $AB$ via the Law of Cosines, then compute $\\cos(B/2)$ using the half-angle formula.',
          solution:
            'Let $H$ be the foot of the altitude from $C$ to $\\overline{AB}$. Since $P$ lies on this altitude, $\\triangle BHP$ is a right triangle with right angle at $H$, and since $\\overline{BP}$ bisects $\\angle B$, we have $\\angle HBP = \\frac{B}{2}$, so\n$$BP = \\frac{BH}{\\cos(B/2)}.$$\nBy the Law of Cosines in $\\triangle ABC$ (with sides $AB = 80$, $BC = 45$, $AC = 75$):\n$$\\cos B = \\frac{AB^2 + BC^2 - AC^2}{2 \\cdot AB \\cdot BC} = \\frac{80^2 + 45^2 - 75^2}{2 \\cdot 80 \\cdot 45} = \\frac{6400 + 2025 - 5625}{7200} = \\frac{2800}{7200} = \\frac{7}{18}.$$\nHence in right triangle $\\triangle BHC$,\n$$BH = BC \\cos B = 45 \\cdot \\frac{7}{18} = \\frac{35}{2}.$$\nUsing the half-angle formula for cosine (with $0 < \\frac{B}{2} < 90^\\circ$):\n$$\\cos\\left(\\frac{B}{2}\\right) = \\sqrt{\\frac{1 + \\cos B}{2}} = \\sqrt{\\frac{1 + 7/18}{2}} = \\sqrt{\\frac{25}{36}} = \\frac{5}{6}.$$\nTherefore,\n$$BP = \\frac{35/2}{5/6} = \\frac{35}{2} \\cdot \\frac{6}{5} = 21.$$',
          rubric: [
            { code: 'M2', text: 'Computes $\\cos B = \\frac{7}{18}$ and the projection $BH = 45 \\cdot \\frac{7}{18} = \\frac{35}{2}$.' },
            { code: 'M2', text: 'Uses the half-angle identity to get $\\cos(B/2) = \\frac{5}{6}$ and $BP = BH / \\cos(B/2)$.' },
            { code: 'A2', text: 'Evaluates $BP = 21$, option D.' }
          ]
        },
        {
          label: '24',
          marks: 6,
          prompt:
            'Call a positive integer *fair* if no digit is used more than once, it has no $0$s, and no digit is adjacent to two greater digits. For example, $196$, $23$, and $12463$ are fair, but $1546$, $320$, and $34321$ are not fair. How many fair positive integers are there?\n\nA. $511$\nB. $2584$\nC. $9841$\nD. $17711$\nE. $19682$',
          answer: 'C. $9841$',
          principle: 'Characterize fair integers as unimodal sequences of distinct nonzero digits, then sum $2^{k-1}$ over all nonempty subsets of $\\{1, \\dots, 9\\}$.',
          solution:
            'A sequence of distinct digits has no digit adjacent to two greater digits if and only if it has no local minimum—that is, it rises strictly to a single maximum digit $m$ and then falls strictly (a *unimodal* sequence).\nFix any nonempty subset $S \\subseteq \\{1, 2, \\dots, 9\\}$ of size $k$ ($1 \\le k \\le 9$). Let $m$ be the largest digit in $S$. To arrange the digits of $S$ into a fair number:\n- The digit $m$ must appear at the unique peak.\n- Each of the remaining $k - 1$ digits in $S \\setminus \\{m\\}$ can independently be placed either to the **left** of $m$ (where all left digits must appear in strictly increasing order toward $m$) or to the **right** of $m$ (where all right digits must appear in strictly decreasing order away from $m$).\n\nThus every $k$-element subset $S$ yields exactly $2^{k-1}$ fair integers. Summing over all nonempty subsets $S$ using the Binomial Theorem:\n$$\\sum_{k=1}^{9} \\binom{9}{k} 2^{k-1} = \\frac{1}{2}\\left(\\sum_{k=0}^{9} \\binom{9}{k} 2^k - 1\\right) = \\frac{(1 + 2)^9 - 1}{2} = \\frac{3^9 - 1}{2} = \\frac{19683 - 1}{2} = 9841.$$',
          rubric: [
            { code: 'M4', text: 'Shows each $k$-element subset of $\\{1,\\dots,9\\}$ forms $2^{k-1}$ unimodal fair integers.' },
            { code: 'A2', text: 'Evaluates $\\sum_{k=1}^9 \\binom{9}{k} 2^{k-1} = \\frac{3^9 - 1}{2} = 9841$, option C.' }
          ]
        },
        {
          label: '25',
          marks: 6,
          prompt:
            'A point $P$ is chosen at random inside square $ABCD$. The probability that $\\overline{AP}$ is neither the shortest nor the longest side of $\\triangle APB$ can be written as $\\frac{a + b\\pi - c\\sqrt{d}}{e}$, where $a$, $b$, $c$, $d$, and $e$ are positive integers, $\\gcd(a, b, c, e) = 1$, and $d$ is not divisible by the square of a prime. What is $a + b + c + d + e$?\n\nA. $25$\nB. $26$\nC. $27$\nD. $28$\nE. $29$',
          answer: 'A. $25$',
          principle: 'Use coordinate geometry in the unit square $[0, 1]^2$ to decompose the favorable region into circular sectors and right triangles.',
          solution:
            'Place the unit square $ABCD$ in the coordinate plane with $A = (0, 0)$, $B = (1, 0)$, $C = (1, 1)$, and $D = (0, 1)$, so $AB = 1$ and the total area is $1$. Let $P = (x, y) \\in (0, 1)^2$.\nThe side $AP$ is neither the shortest nor the longest side of $\\triangle APB$ (ignoring boundary lines/arcs of area $0$) in two mutually exclusive cases:\n1. **$BP < AP < AB$:** $P$ lies to the right of the perpendicular bisector $x = \\frac{1}{2}$ and strictly inside the unit circle $x^2 + y^2 < 1$ centered at $A$.\n2. **$AB < AP < BP$:** $P$ lies to the left of $x = \\frac{1}{2}$ and strictly outside the unit circle $x^2 + y^2 > 1$ centered at $A$.\n\nLet $R_1$ be the part of the quarter-disk $\\{x^2 + y^2 \\le 1,\\, x \\ge 0,\\, y \\ge 0\\}$ in $x \\le \\frac{1}{2}$. The vertical line $x = \\frac{1}{2}$ meets the circle $x^2 + y^2 = 1$ at $Q = \\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$, so $\\angle QAD = 30^\\circ$ (since $\\sin 30^\\circ = \\frac{1}{2}$) and $\\angle QAB = 60^\\circ$. Splitting $R_1$ along segment $AQ$ into a $30^\\circ$ sector and right triangle $\\triangle AQM$ (where $M = (\\frac{1}{2}, 0)$):\n$$\\text{Area}(R_1) = \\frac{30^\\circ}{360^\\circ}\\pi(1)^2 + \\frac{1}{2}\\left(\\frac{1}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{12} + \\frac{\\sqrt{3}}{8}.$$\nNow compute both cases:\n- **Case 1** is the quarter-disk minus $R_1$:\n  $$\\frac{\\pi}{4} - \\left(\\frac{\\pi}{12} + \\frac{\\sqrt{3}}{8}\\right) = \\frac{\\pi}{6} - \\frac{\\sqrt{3}}{8}.$$\n- **Case 2** is the left half-square $[0, \\frac{1}{2}] \\times [0, 1]$ minus $R_1$:\n  $$\\frac{1}{2} - \\left(\\frac{\\pi}{12} + \\frac{\\sqrt{3}}{8}\\right) = \\frac{1}{2} - \\frac{\\pi}{12} - \\frac{\\sqrt{3}}{8}.$$\n\nAdding the two areas gives the required probability:\n$$\\left(\\frac{\\pi}{6} - \\frac{\\sqrt{3}}{8}\\right) + \\left(\\frac{1}{2} - \\frac{\\pi}{12} - \\frac{\\sqrt{3}}{8}\\right) = \\frac{1}{2} + \\frac{\\pi}{12} - \\frac{\\sqrt{3}}{4} = \\frac{6 + \\pi - 3\\sqrt{3}}{12}.$$\nThus $a = 6$, $b = 1$, $c = 3$, $d = 3$, and $e = 12$, with $\\gcd(6, 1, 3, 12) = 1$ and $d = 3$ squarefree. Therefore,\n$$a + b + c + d + e = 6 + 1 + 3 + 3 + 12 = 25.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the two valid regions ($x > \\frac{1}{2}, x^2+y^2 < 1$ and $x < \\frac{1}{2}, x^2+y^2 > 1$).' },
            { code: 'M2', text: 'Computes the region areas using the $30^\\circ$ sector and $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle to obtain $\\frac{6 + \\pi - 3\\sqrt{3}}{12}$.' },
            { code: 'A2', text: 'Sums $a + b + c + d + e = 25$, option A.' }
          ]
        }
      ]
    }
  ]
};
