/**
 * Paket Soal: SASMO 2020 Grade 7 (Secondary 1)
 * Sumber: Singapore and Asian Schools Math Olympiad 2020, Secondary 1 (Grade 7) Contest (2020-SASMO-G7.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 3, 6, 13, 16, dan 19 dilengkapi ilustrasi crop .webp.
 */
export default {
  id: 'sasmo-2020-g7',
  slug: 'sasmo-2020-grade-7',
  subject: 'olimpiade-mat',
  grade: 7,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2020 Grade 7 (Secondary 1): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab3-rasio',
    'smp7-bab4-bentuk-aljabar',
    'smp7-bab6-data-diagram'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2020 Grade 7 (Secondary 1)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Figures are provided for Questions 3, 6, 13, 16, and 19.',
  source: {
    org: 'SASMO',
    file: '2020-SASMO-G7.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 30,
      stem: 'Choose the one correct answer for each question (15 questions, 2 marks each).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Find the value of the following.\n$$2020 \\times 2020 - 2019 \\times 2021$$\n\nA. $2020$\nB. $4040$\nC. $1$\nD. $2$\nE. None of the above',
          answer: 'C. $1$',
          principle:
            'Substitute $x = 2020$ and apply the difference-of-squares identity $(x - 1)(x + 1) = x^2 - 1$.',
          solution:
            'Let $x = 2020$. Then:\n$$2020 \\times 2020 - 2019 \\times 2021 = x^2 - (x - 1)(x + 1) = x^2 - (x^2 - 1) = 1.$$',
          rubric: [
            { code: 'M1', text: 'Rewrites the expression as $x^2 - (x - 1)(x + 1)$ with $x = 2020$.' },
            { code: 'A1', text: 'Evaluates to $1$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Three apples and four oranges cost $10.90$ dollars, while five apples and seven oranges cost $18.90$ dollars. How much do nine apples and $13$ oranges cost?\n\nA. $20.60$ dollars\nB. $33.10$ dollars\nC. $34.20$ dollars\nD. $34.90$ dollars\nE. None of the above',
          answer: 'D. $34.90$ dollars',
          principle:
            'Form a linear combination of the two given equations directly to obtain $9a + 13o$ without needing to solve for individual unit prices (or solve for each unit price).',
          solution:
            'Let the cost of one apple be $a$ dollars and one orange be $o$ dollars. Then:\n$$3a + 4o = 10.90 \\quad (1)$$\n$$5a + 7o = 18.90 \\quad (2)$$\nSubtract $(1)$ from $(2)$:\n$$2a + 3o = 18.90 - 10.90 = 8.00 \\quad (3)$$\nAdd $(2)$ to twice $(3)$:\n$$9a + 13o = (5a + 7o) + 2(2a + 3o) = 18.90 + 2(8.00) = 34.90\\text{ dollars}.$$\n(Alternatively, solving $(1)$ and $(2)$ gives $a = 0.70$ and $o = 2.20$, so $9(0.70) + 13(2.20) = 6.30 + 28.60 = 34.90$ dollars.)',
          rubric: [
            { code: 'M1', text: 'Sets up $3a + 4o = 10.90$ and $5a + 7o = 18.90$ and forms $9a + 13o = (5a + 7o) + 2(2a + 3o)$ (or solves for $a$ and $o$).' },
            { code: 'A1', text: 'Obtains $34.90$ dollars, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'In the following diagram, $d_1$ is parallel to $d_2$ and $a + b + c + d = 460^\\circ$. What is angle $e$ in degrees?\n\nA. $100^\\circ$\nB. $80^\\circ$\nC. $70^\\circ$\nD. $60^\\circ$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g7/fig-3.webp',
              alt: 'Two horizontal parallel lines d1 and d2 intersected by a transversal and a zig-zag path forming labeled angles a, b, c, d, and e.',
              caption: 'Parallel lines and transversal diagram for Question 3.'
            }
          ],
          answer: 'A. $100^\\circ$',
          principle:
            'Use supplementary corresponding/co-interior angles between parallel lines $d_1 \\parallel d_2$ to find $a + d = 180^\\circ$, then apply the angle sum of the triangle containing $e$.',
          solution:
            'Since $d_1 \\parallel d_2$, the acute angle corresponding to $d$ on line $d_1$ is supplementary to $a$, so:\n$$a + d = 180^\\circ.$$\nSubtracting from the given sum gives:\n$$b + c = 460^\\circ - 180^\\circ = 280^\\circ.$$\nIn the triangle formed by the transversal and the two bent segments, the interior angles are $e$, $180^\\circ - b$, and $180^\\circ - c$. Since the angle sum of a triangle is $180^\\circ$:\n$$e + (180^\\circ - b) + (180^\\circ - c) = 180^\\circ$$\n$$e = b + c - 180^\\circ = 280^\\circ - 180^\\circ = 100^\\circ.$$',
          rubric: [
            { code: 'M1', text: 'Uses $d_1 \\parallel d_2$ to deduce $a + d = 180^\\circ$ and $b + c = 280^\\circ$, then applies triangle angle sum.' },
            { code: 'A1', text: 'Finds $e = 100^\\circ$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Find the next term of the following sequence.\n$$1935, 1940, 1948, 1962, 1985, 2020, \\ldots$$\n\nA. $2070$\nB. $2055$\nC. $2060$\nD. $2067$\nE. None of the above',
          answer: 'A. $2070$',
          principle:
            'Take first differences and then second differences to reveal an arithmetic progression of multiples of $3$.',
          solution:
            'Compute the first differences between consecutive terms:\n$$1940 - 1935 = 5, \\quad 1948 - 1940 = 8, \\quad 1962 - 1948 = 14, \\quad 1985 - 1962 = 23, \\quad 2020 - 1985 = 35.$$\nNow compute the second differences of $5, 8, 14, 23, 35$:\n$$8 - 5 = 3, \\quad 14 - 8 = 6, \\quad 23 - 14 = 9, \\quad 35 - 23 = 12.$$\nThe second differences increase by $3$ each step, so the next second difference is $15$. Thus the next first difference is $35 + 15 = 50$, and the next term is:\n$$2020 + 50 = 2070.$$',
          rubric: [
            { code: 'M1', text: 'Finds first differences $5, 8, 14, 23, 35$ and second differences $3, 6, 9, 12$.' },
            { code: 'A1', text: 'Obtains $2020 + 50 = 2070$, option A.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Find the last digit of the following product.\n$$2^{2020} \\times 3^{2022}$$\n\nA. $6$\nB. $9$\nC. $3$\nD. $4$\nE. None of the above',
          answer: 'D. $4$',
          principle:
            'Pair equal powers of $2$ and $3$ into $6^{2020}$; any positive integer power of $6$ ends in $6$.',
          solution:
            'Regroup the factors as powers of $6$:\n$$2^{2020} \\times 3^{2022} = (2 \\times 3)^{2020} \\times 3^2 = 6^{2020} \\times 9.$$\nSince every positive integer power of $6$ has units digit $6$, the units digit of $6^{2020} \\times 9$ equals the units digit of $6 \\times 9 = 54$, which is $4$.',
          rubric: [
            { code: 'M1', text: 'Rewrites as $6^{2020} \\times 3^2$ and notes that $6^{2020} \\equiv 6 \\pmod{10}$.' },
            { code: 'A1', text: 'Finds last digit $4$, option D.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'In the rectangle $ABCD$, point $E$ is on the side $AB$ while point $F$ is on the side $AD$ such that $BE = \\frac{1}{4}AE$ and $DF = \\frac{2}{3}AD$. What is the ratio of areas of the rectangle $ABCD$ to triangle $FEC$?\n\nA. $30 : 13$\nB. $40 : 17$\nC. $48 : 23$\nD. $24 : 11$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g7/fig-6.webp',
              alt: 'Rectangle ABCD with point E on side AB, point F on side AD, and inscribed triangle FEC formed by segments FE, EC, and FC.',
              caption: 'Rectangle ABCD and triangle FEC for Question 6.'
            }
          ],
          answer: 'A. $30 : 13$',
          principle:
            'Assign convenient lengths $AB = 5x$ and $AD = 3y$, then subtract the three surrounding right triangles from the rectangle.',
          solution:
            'Since $BE = \\frac{1}{4}AE$, we have $AE : EB = 4 : 1$, so let $AE = 4x$, $EB = x$, and $AB = DC = 5x$.\nSince $DF = \\frac{2}{3}AD$, let $AF = y$, $FD = 2y$, and $AD = BC = 3y$.\nThen:\n$$\\text{Area}(ABCD) = 5x \\times 3y = 15xy.$$\nThe three right triangles surrounding $\\triangle FEC$ have areas:\n$$\\text{Area}(\\triangle AEF) = \\frac{1}{2} \\times 4x \\times y = 2xy,$$\n$$\\text{Area}(\\triangle FDC) = \\frac{1}{2} \\times 2y \\times 5x = 5xy,$$\n$$\\text{Area}(\\triangle EBC) = \\frac{1}{2} \\times x \\times 3y = \\frac{3}{2}xy.$$\nSubtracting these from the rectangle gives:\n$$\\text{Area}(\\triangle FEC) = 15xy - 2xy - 5xy - \\frac{3}{2}xy = \\frac{13}{2}xy.$$\nTherefore:\n$$\\text{Area}(ABCD) : \\text{Area}(\\triangle FEC) = 15xy : \\frac{13}{2}xy = 30 : 13.$$',
          rubric: [
            { code: 'M1', text: 'Sets $AB = 5x$, $AD = 3y$ and subtracts $\\triangle AEF$, $\\triangle FDC$, and $\\triangle EBC$ to get $\\frac{13}{2}xy$.' },
            { code: 'A1', text: 'Obtains ratio $30 : 13$, option A.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'The six-digit number $\\overline{2X475Y}$ is divisible by $36$. How many possible values of $X$ are there?\n\nA. $1$\nB. $2$\nC. $3$\nD. $4$\nE. None of the above',
          answer: 'B. $2$',
          principle:
            'A number is divisible by $36 = 4 \\times 9$ if and only if it is divisible by both $4$ (last two digits) and $9$ (sum of digits).',
          solution:
            'For $\\overline{2X475Y}$ to be divisible by $36$, it must be divisible by both $4$ and $9$.\n- **Divisibility by $4$:** The last two digits $\\overline{5Y}$ must be divisible by $4$, which gives $Y = 2$ or $Y = 6$.\n- **Divisibility by $9$:** The digit sum $2 + X + 4 + 7 + 5 + Y = 18 + X + Y$ must be a multiple of $9$, so $X + Y$ must be a multiple of $9$ with $0 \\le X \\le 9$.\n  - If $Y = 2$: $9 \\mid (X + 2) \\implies X = 7$ (giving $274752$).\n  - If $Y = 6$: $9 \\mid (X + 6) \\implies X = 3$ (giving $234756$).\n\nHence there are $2$ possible values of $X$ ($3$ and $7$).',
          rubric: [
            { code: 'M1', text: 'Uses $4 \\mid \\overline{5Y}$ to find $Y \\in \\{2, 6\\}$ and applies $9 \\mid (18 + X + Y)$.' },
            { code: 'A1', text: 'Finds $X = 7$ and $X = 3$, giving $2$ possible values, option B.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'There are roses and lilies at a flower shop. Four roses cost $7$ dollars while three lilies cost $8$ dollars. Billy bought some roses and lilies and paid $86$ dollars. Which of the following can be the number of roses he bought?\n\nA. $16$\nB. $24$\nC. $44$\nD. $36$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Set up the linear Diophantine equation $7a + 8b = 86$ where Billy bought $4a$ roses and $3b$ lilies, then solve for all positive integer pairs $(a, b)$.',
          solution:
            'Let the number of roses be $4a$ and the number of lilies be $3b$, where $a$ and $b$ are positive integers. Then:\n$$7a + 8b = 86.$$\nNote that $8b \\equiv 86 \\equiv 2 \\pmod 7$, so $b \\equiv 2 \\pmod 7$.\n- If $b = 2$: $7a = 86 - 16 = 70 \\implies a = 10$, giving $4a = 40$ roses and $3b = 6$ lilies.\n- If $b = 9$: $7a = 86 - 72 = 14 \\implies a = 2$, giving $4a = 8$ roses and $3b = 27$ lilies.\n- If $b \\ge 16$: $8b \\ge 128 > 86$, impossible.\n\nThus the only possible numbers of roses are $8$ and $40$, neither of which appears among options A to D.',
          rubric: [
            { code: 'M1', text: 'Models the purchase as $7a + 8b = 86$ and finds the valid integer solutions $(a, b) = (10, 2)$ and $(2, 9)$.' },
            { code: 'A1', text: 'Concludes only $8$ or $40$ roses are possible, so option E.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'How many triples $(x, y, z)$ of positive integers are there such that $x + y + z = 14$? Take note that $(x, y, z)$, $(x, z, y)$, $(y, z, x)$, $(y, x, z)$, $(z, x, y)$, and $(z, y, x)$ are the same triple.\n\nA. $12$\nB. $11$\nC. $13$\nD. $16$\nE. None of the above',
          answer: 'D. $16$',
          principle:
            'Count unordered triples uniquely by ordering them as $x \\ge y \\ge z \\ge 1$ and listing systematically by the largest part $x$.',
          solution:
            'Since the order of $(x, y, z)$ does not matter, assume $x \\ge y \\ge z \\ge 1$ with $x + y + z = 14$. List all valid triples by the largest number $x$ (from $12$ down to $\\lceil 14/3 \\rceil = 5$):\n- $x = 12$: $(12, 1, 1)$ — $1$ triple\n- $x = 11$: $(11, 2, 1)$ — $1$ triple\n- $x = 10$: $(10, 3, 1), (10, 2, 2)$ — $2$ triples\n- $x = 9$: $(9, 4, 1), (9, 3, 2)$ — $2$ triples\n- $x = 8$: $(8, 5, 1), (8, 4, 2), (8, 3, 3)$ — $3$ triples\n- $x = 7$: $(7, 6, 1), (7, 5, 2), (7, 4, 3)$ — $3$ triples\n- $x = 6$: $(6, 6, 2), (6, 5, 3), (6, 4, 4)$ — $3$ triples\n- $x = 5$: $(5, 5, 4)$ — $1$ triple\n\nTotal number of triples:\n$$1 + 1 + 2 + 2 + 3 + 3 + 3 + 1 = 16.$$',
          rubric: [
            { code: 'M1', text: 'Orders the triples as $x \\ge y \\ge z \\ge 1$ and enumerates cases for $x = 12$ down to $5$.' },
            { code: 'A1', text: 'Counts $16$ triples, option D.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'What is the least number of weights required to weigh any object of an integer number of grams from $1$ to $35$ grams? The weights must be put on one plate while the object is put on the other plate. Also, the weights must be in an integer number of grams.\n\nA. $35$\nB. $10$\nC. $7$\nD. $6$\nE. None of the above',
          answer: 'D. $6$',
          principle:
            'With $k$ weights placed on one pan only, at most $2^k - 1$ positive totals can be formed; compare $2^5 - 1 = 31 < 35$ against an explicit $6$-weight construction.',
          solution:
            'With $k$ weights placed only on one pan, each weight can either be used or left out, giving at most $2^k - 1$ non-empty combinations.\n- For $k = 5$, at most $2^5 - 1 = 31 < 35$ distinct weights can be measured, so $5$ weights are not enough.\n- For $k = 6$, the weights $\\{1\\text{ g}, 1\\text{ g}, 2\\text{ g}, 4\\text{ g}, 9\\text{ g}, 18\\text{ g}\\}$ (or $\\{1\\text{ g}, 2\\text{ g}, 4\\text{ g}, 8\\text{ g}, 10\\text{ g}, 10\\text{ g}\\}$) suffice: the subset $\\{1, 2, 4, 8\\}$ (or $\\{1, 1, 2, 4\\}$) forms every integer from $1$ to $8$, adding $9$ extends the range to $17$, and adding $18$ extends it to $17 + 18 = 35$.\n\nHence the minimum number of weights required is $6$.',
          rubric: [
            { code: 'M1', text: 'Shows $k = 5$ gives at most $2^5 - 1 = 31 < 35$ sums and constructs a valid $6$-weight set.' },
            { code: 'A1', text: 'Minimum number of weights is $6$, option D.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Each face of a soccer ball is either a pentagon or a hexagon. Each pentagonal face is adjacent to five hexagonal faces and each hexagonal face is adjacent to three pentagonal and three hexagonal faces. If the ball has $12$ pentagonal faces, how many hexagonal faces are there?\n\nA. $12$\nB. $20$\nC. $24$\nD. $8$\nE. None of the above',
          answer: 'B. $20$',
          principle:
            'Double-count the shared edges between pentagonal and hexagonal faces.',
          solution:
            'Count the edges where a pentagon meets a hexagon in two ways:\n- Each of the $12$ pentagonal faces borders $5$ hexagonal faces, giving $12 \\times 5 = 60$ pentagon–hexagon edges.\n- Each hexagonal face borders $3$ pentagonal faces, so if there are $H$ hexagonal faces, there are $3H$ pentagon–hexagon edges.\n\nEquating the two counts:\n$$3H = 60 \\implies H = \\frac{60}{3} = 20.$$',
          rubric: [
            { code: 'M1', text: 'Equates $12 \\times 5 = 3H$ by double-counting pentagon–hexagon edges.' },
            { code: 'A1', text: 'Finds $20$ hexagonal faces, option B.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Alice, Jane, Philip, and Victor were born in $1982, 1983, 1984, 1985$ in the cities of Athens, Moscow, Paris, and Singapore, though not in that order. It is given that:\n- The person born in Paris is one year older than the one born in Singapore.\n- Victor was born one year later than the person born in Paris.\n- Philip was born in Moscow.\n- Alice was born two years later than Victor was.\n\nWhich year was Jane born in?\n\nA. $1982$\nB. $1983$\nC. $1984$\nD. $1985$\nE. Impossible to determine',
          answer: 'A. $1982$',
          principle:
            'Relate the birth years of Paris, Singapore, Victor, and Alice chronologically; remember that being $1$ year older means having a birth year $1$ smaller.',
          solution:
            'Let $P$ be the birth year of the person born in Paris.\n- From the first clue, the person born in Singapore was born in $P + 1$.\n- From the second clue, Victor was born in $P + 1$, so Victor was born in Singapore.\n- From the fourth clue, Alice was born two years later than Victor, so Alice was born in $(P + 1) + 2 = P + 3$.\n\nSince the available birth years are $1982, 1983, 1984, 1985$, having both $P$ and $P + 3$ in this set forces $P = 1982$ and $P + 3 = 1985$. Thus:\n- Alice was born in $1985$ (in Athens, since Philip is in Moscow and $1982$ is Paris).\n- Victor was born in $1983$ (in Singapore).\n- Philip was born in $1984$ (in Moscow).\n- Jane was born in $1982$ (in Paris).',
          rubric: [
            { code: 'M1', text: 'Deduces Victor was born in Singapore in $P + 1$ and Alice in $P + 3$, forcing $P = 1982$.' },
            { code: 'A1', text: 'Concludes Jane was born in $1982$, option A.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'In the diagram below, an ant can move only upwards or rightwards. How many ways are there for the ant to get from point $A$ to point $B$ along the existing lines?\n\nA. $7$\nB. $12$\nC. $8$\nD. $2$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g7/fig-13.webp',
              alt: 'A rectangular grid of line segments from bottom-left corner A to top-right corner B with some interior segments omitted.',
              caption: 'Path-counting grid from A to B for Question 13.'
            }
          ],
          answer: 'A. $7$',
          principle:
            'Label each intersection with the sum of path counts entering from directly below and directly to the left.',
          solution:
            'Label the grid columns from left to right as $0, 1, 2, 3, 4, 5$ (with $A$ at the bottom of column $0$ and $B$ at the top of column $5$):\n- **Bottom row:** Only rightward moves reach the bottom vertices, so columns $1, 3, 5$ on the bottom edge each have $1$ way.\n- **Middle horizontal level:** Column $3$ (middle) receives $1$ way from directly below (the L-shaped corner at column $2$ has no edge entering from the left or below, so it receives $0$ ways). Column $4$ (middle) receives $1$ way from column $3$. Column $5$ (middle) receives $1$ from below and $1$ from the left, giving $1 + 1 = 2$ ways.\n- **Upper-middle horizontal segment (columns $4$ to $5$):** Column $4$ passes $1$ way upwards (and branches right), so column $5$ at that junction receives $2 + 1 = 3$ ways.\n- **Top row:** Column $0$ has $1$ way (up from $A$). Column $1$ has $1 + 1 = 2$ ways. Column $2$ has $2$ ways (nothing enters from below). Column $3$ has $2 + 1 = 3$ ways. Column $4$ has $3 + 1 = 4$ ways.\n\nFinally, reaching $B$ at the top of column $5$ gives:\n$$4 + 3 = 7\\text{ ways}.$$',
          rubric: [
            { code: 'M1', text: 'Computes vertex path counts along the grid from $A$ using upward and rightward additions.' },
            { code: 'A1', text: 'Obtains $4 + 3 = 7$ ways to $B$, option A.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Henry has a bag with $13$ yellow, $7$ brown, $25$ red, and $10$ green balls. All the balls are of the same size and shape. What is the least number of balls Henry needs to take out without looking to make sure that he gets three different coloured balls?\n\nA. $3$\nB. $20$\nC. $39$\nD. $48$\nE. None of the above',
          answer: 'C. $39$',
          principle:
            'Apply the Pigeonhole Principle by finding the worst-case draw that exhausts the two largest color groups before hitting a third color.',
          solution:
            'In the worst-case scenario, Henry draws all balls of the two most numerous colors first—namely all $25$ red balls and all $13$ yellow balls—yielding $25 + 13 = 38$ balls with only $2$ colors.\nThe very next ball ($39\\text{th}$) must be either brown or green, guaranteeing $3$ different colors:\n$$25 + 13 + 1 = 39.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the worst case of drawing all $25$ red and $13$ yellow balls ($38$ balls) first.' },
            { code: 'A1', text: 'Adds $1$ to get $39$ balls, option C.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'How many four-digit numbers are there between $3700$ and $9600$ that can be formed using only the digits $3, 7, 5, 6, 0$, or $9$ without repetition of any digits?\n\nA. $300$\nB. $100$\nC. $264$\nD. $240$\nE. None of the above',
          answer: 'D. $240$',
          principle:
            'Split into cases by the thousands digit ($3$, $\\{5, 6, 7\\}$, and $9$) so the bounds $3700$ and $9600$ are respected.',
          solution:
            'We count $4$-digit numbers with distinct digits from $\\{0, 3, 5, 6, 7, 9\\}$ strictly between $3700$ and $9600$:\n- **Case 1 (thousands digit is $3$):** To exceed $3700$, the hundreds digit must be $7$ or $9$ ($2$ choices). The remaining two places can be filled from the $4$ remaining digits in $4 \\times 3 = 12$ ways, giving $2 \\times 4 \\times 3 = 24$ numbers.\n- **Case 2 (thousands digit is $5, 6$, or $7$):** There are $3$ choices for the thousands digit, and any arrangement of the remaining $5$ digits for the last three places works: $3 \\times 5 \\times 4 \\times 3 = 180$ numbers.\n- **Case 3 (thousands digit is $9$):** To be less than $9600$, the hundreds digit must be $0, 3$, or $5$ ($3$ choices). The remaining two places have $4 \\times 3$ choices, giving $3 \\times 4 \\times 3 = 36$ numbers.\n\nTotal number of valid $4$-digit numbers:\n$$24 + 180 + 36 = 240.$$',
          rubric: [
            { code: 'M1', text: 'Partitions into cases by thousands digit $3$ ($24$), $\\{5, 6, 7\\}$ ($180$), and $9$ ($36$).' },
            { code: 'A1', text: 'Sums to $240$, option D.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write down the numerical answer to each question (10 questions, 4 marks each).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'The following bar chart shows the responses made by all Secondary 1 students from Integrity Secondary School in a multiple-choice question. All the horizontal lines are equally spaced. A correct answer scores $2$ points, $0$ points for no response, and $-1$ point for a wrong answer. The total points scored by all the students is $-120$. If the correct answer is B, how many students solved the question correctly?',
          figures: [
            {
              src: '/papers/sasmo-2020-g7/fig-16.webp',
              alt: 'Bar chart titled Secondary 1 students responses with six categories A, B, C, D, E, and No response over equally spaced horizontal gridlines.',
              caption: 'Bar chart of Secondary 1 student responses for Question 16.'
            }
          ],
          answer: '$140$',
          principle:
            'Express each bar height as a multiple of one grid spacing $x$, equate total score to $-120$, and solve for $x$.',
          solution:
            'Let one vertical grid spacing represent $x$ students. Reading the bar heights in grid units:\n- Correct (B): $7x$ students, scoring $2 \\times 7x = 14x$ points.\n- Wrong (A, C, D, E): $3x + 5x + 8x + 4x = 20x$ students, scoring $(-1) \\times 20x = -20x$ points.\n- No response: $4x$ students, scoring $0$ points.\n\nEquating the total score to $-120$:\n$$14x - 20x = -120 \\implies -6x = -120 \\implies x = 20.$$\nTherefore, the number of students who solved the question correctly is:\n$$7x = 7 \\times 20 = 140.$$',
          rubric: [
            { code: 'M2', text: 'Reads bar heights ($B = 7x$, wrong $= 20x$) and solves $14x - 20x = -120$ to get $x = 20$.' },
            { code: 'A2', text: 'Computes $7 \\times 20 = 140$ students.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Andrea and Claire left from Woodlands and HarbourFront respectively and travelled towards each other at the same time. When Andrea arrived at HarbourFront, Claire needed to travel for another $5\\text{ km}$ more to reach Woodlands. If Andrea travelled $20\\%$ faster than Claire, find the distance, in km, between Woodlands and HarbourFront.',
          answer: '$30$',
          principle:
            'Over the same elapsed time, distance covered is directly proportional to speed, so Claire covers $\\frac{5}{6}$ of the distance Andrea covers.',
          solution:
            'Since Andrea travelled $20\\%$ faster than Claire, the ratio of Andrea’s speed to Claire’s speed is $120 : 100 = 6 : 5$.\nLet the distance between Woodlands and HarbourFront be $D\\text{ km}$. In the time it takes Andrea to travel $D\\text{ km}$, Claire travels $\\frac{5}{6}D\\text{ km}$, leaving $5\\text{ km}$ remaining:\n$$D - \\frac{5}{6}D = 5$$\n$$\\frac{1}{6}D = 5 \\implies D = 30\\text{ km}.$$',
          rubric: [
            { code: 'M2', text: 'Uses the speed ratio $6 : 5$ to set up $D - \\frac{5}{6}D = 5$.' },
            { code: 'A2', text: 'Finds distance $30$ (km).' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Find the smallest positive integer $n$ for which $3993n$ is a multiple of $2475$.',
          answer: '$75$',
          principle:
            'Compute the prime factorizations of $3993$ and $2475$, simplify $\\frac{3993n}{2475}$, and match the remaining denominator.',
          solution:
            'Find the prime factorizations of both numbers:\n$$3993 = 3 \\times 1331 = 3 \\times 11^3,$$\n$$2475 = 25 \\times 99 = 3^2 \\times 5^2 \\times 11.$$\nFor $\\frac{3993n}{2475}$ to be an integer:\n$$\\frac{3993n}{2475} = \\frac{3 \\times 11^3 \\times n}{3^2 \\times 5^2 \\times 11} = \\frac{11^2 \\times n}{3 \\times 5^2} = \\frac{121n}{75}.$$\nSince $\\gcd(121, 75) = 1$, $n$ must be a multiple of $75$. Thus the smallest positive integer is $n = 75$.',
          rubric: [
            { code: 'M2', text: 'Factorizes $3993 = 3 \\times 11^3$ and $2475 = 3^2 \\times 5^2 \\times 11$, simplifying to $\\frac{121n}{75}$.' },
            { code: 'A2', text: 'Finds smallest positive integer $n = 75$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'In the diagram, four identical circles touch the large circle and pass through the centre of the large circle. If the diameter of the large circle is $28\\text{ cm}$, find the area (in $\\text{cm}^2$) of the shaded region. (Use $\\pi = \\frac{22}{7}$.)',
          figures: [
            {
              src: '/papers/sasmo-2020-g7/fig-19.webp',
              alt: 'A large circle containing four identical smaller circles arranged symmetrically, each touching the large circle and passing through its center, with one symmetric quarter-slice shaded.',
              caption: 'Four identical inner circles inside a large circle for Question 19.'
            }
          ],
          answer: '$154$',
          principle:
            'Exploit rotational symmetry of order $4$: four rotated copies of the shaded region tile the entire large circle without overlap.',
          solution:
            'The four small circles divide the interior of the large circle symmetrically into $4$ congruent quadrants (one centered on each of the four small circles, rotated by $90^\\circ$).\nThe shaded region consists of one full copy of each distinct region type (central petal, side lobe, and outer crescent), so rotating the shaded region by $90^\\circ$, $180^\\circ$, and $270^\\circ$ around the center exactly covers the entire large circle.\nWith diameter $28\\text{ cm}$, the radius of the large circle is $r = 14\\text{ cm}$, and its area is:\n$$\\text{Area}_{\\text{large}} = \\pi r^2 = \\frac{22}{7} \\times 14^2 = 22 \\times 2 \\times 14 = 616\\text{ cm}^2.$$\nHence the area of the shaded region is:\n$$\\frac{616}{4} = 154\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Uses $4$-fold symmetry to show the shaded area is $\\frac{1}{4}$ of the large circle of radius $14\\text{ cm}$.' },
            { code: 'A2', text: 'Computes $\\frac{1}{4} \\times \\frac{22}{7} \\times 14^2 = 154$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Denote $\\{n\\} = 1 + 3 + 5 + \\cdots + (2n - 1)$. For example, $\\{5\\} = 1 + 3 + 5 + 7 + (2 \\times 5 - 1)$. Given that $\\frac{\\{m\\}}{m} + m = 2020$, what is the value of $m$?',
          answer: '$1010$',
          principle:
            'The sum of the first $n$ positive odd integers equals $n^2$.',
          solution:
            'Notice that the sum of the first $n$ odd positive integers is a perfect square:\n$$\\{1\\} = 1 = 1^2, \\quad \\{2\\} = 1 + 3 = 4 = 2^2, \\quad \\{3\\} = 1 + 3 + 5 = 9 = 3^2,$$\nand in general $\\{n\\} = \\frac{n(1 + (2n - 1))}{2} = n^2$.\nSubstituting $\\{m\\} = m^2$ (with $m \\neq 0$) into the equation gives:\n$$\\frac{m^2}{m} + m = 2020 \\implies m + m = 2020 \\implies 2m = 2020 \\implies m = 1010.$$',
          rubric: [
            { code: 'M2', text: 'Identifies $\\{n\\} = n^2$ and reduces the equation to $2m = 2020$.' },
            { code: 'A2', text: 'Finds $m = 1010$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'What is the smallest positive integer that has exactly $3$ odd divisors and $3$ even divisors?',
          answer: '$18$',
          principle:
            'Write $n = 2^a \\cdot m$ with $m$ odd; then $n$ has $d(m)$ odd divisors and $a \\cdot d(m)$ even divisors.',
          solution:
            'Write the positive integer as $n = 2^a \\cdot m$, where $a \\ge 0$ and $m$ is an odd positive integer.\n- Every odd divisor of $n$ is a divisor of $m$, so $m$ must have $d(m) = 3$ divisors.\n- Every even divisor of $n$ is of the form $2^k \\cdot d$ with $1 \\le k \\le a$ and $d \\mid m$, giving $a \\cdot d(m) = 3a$ even divisors.\n\nSince $3a = 3$, we get $a = 1$. Since $d(m) = 3$ (a prime), $m$ must be the square of an odd prime: $m = p^2$.\nTo minimize $n = 2p^2$, choose the smallest odd prime $p = 3$:\n$$n = 2 \\times 3^2 = 18.$$\nCheck: the divisors of $18$ are odd $\\{1, 3, 9\\}$ ($3$ divisors) and even $\\{2, 6, 18\\}$ ($3$ divisors).',
          rubric: [
            { code: 'M2', text: 'Deduces $n = 2^1 p^2$ for an odd prime $p$ from $d(m) = 3$ and $a \\cdot d(m) = 3$.' },
            { code: 'A2', text: 'Minimizes with $p = 3$ to obtain $18$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'The operator $\\wedge$ acts on two integers to give the following outcomes:\n$$4 \\wedge 8 = 2412$$\n$$5 \\wedge 9 = 2812$$\n$$1 \\wedge 7 = 1618$$\n$$2 \\wedge 3 = 103$$\nWhat is the value of $6 \\wedge 7$?',
          answer: '$263$',
          principle:
            'Split each outcome into two concatenated parts derived from the sum $a + b$ and the difference $b - a$.',
          solution:
            'Observe that $a \\wedge b$ concatenates $2(a + b)$ followed by $3(b - a)$:\n- $4 \\wedge 8$: $2(4 + 8) = 24$ and $3(8 - 4) = 12 \\implies 2412$.\n- $5 \\wedge 9$: $2(5 + 9) = 28$ and $3(9 - 5) = 12 \\implies 2812$.\n- $1 \\wedge 7$: $2(1 + 7) = 16$ and $3(7 - 1) = 18 \\implies 1618$.\n- $2 \\wedge 3$: $2(2 + 3) = 10$ and $3(3 - 2) = 3 \\implies 103$.\n\nApplying the same rule to $6 \\wedge 7$ gives $2(6 + 7) = 26$ followed by $3(7 - 6) = 3$, which yields $263$.',
          rubric: [
            { code: 'M2', text: 'Identifies the concatenation rule $2(a + b) \\, \\Vert \\, 3(b - a)$.' },
            { code: 'A2', text: 'Evaluates $6 \\wedge 7 = 263$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Peter has five different books of different subjects to be placed on a single-decked shelf. He does not want to place the Physics book next to the Biology one. In how many ways can he place all his books?',
          answer: '$72$',
          principle:
            'Use complementary counting: subtract the arrangements where Physics and Biology are adjacent from all $5!$ permutations.',
          solution:
            'The total number of arrangements of $5$ distinct books without restriction is:\n$$5! = 120.$$\nTo count the arrangements where Physics and Biology are adjacent, treat them as a single combined block. There are $4! = 24$ ways to arrange the combined block with the other $3$ books, and $2$ ways to order Physics and Biology inside the block, giving:\n$$2 \\times 4! = 2 \\times 24 = 48\\text{ restricted arrangements}.$$\nSubtracting gives the valid arrangements:\n$$120 - 48 = 72.$$',
          rubric: [
            { code: 'M2', text: 'Computes $5! = 120$ total ways and $2 \\times 4! = 48$ adjacent ways.' },
            { code: 'A2', text: 'Subtracts to get $72$ ways.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Peter and Frank together can build a house in $12$ days. Frank and George together can build the same house in $6$ days. It is given that each of them works exactly $9$ hours per day. If Peter and George together can build the house in $6.5$ days, how long (in hours) will Peter, Frank, and George work together to build the house? Round your answer to the nearest hour.',
          answer: '$45$',
          principle:
            'Add the three pairwise daily work rates and divide by $2$ to get the combined daily rate, then convert days to hours.',
          solution:
            'Let $P, F, G$ be the fractions of the house Peter, Frank, and George each build in one $9$-hour day. Then:\n$$P + F = \\frac{1}{12}, \\quad F + G = \\frac{1}{6}, \\quad P + G = \\frac{1}{6.5} = \\frac{2}{13}.$$\nAdding all three equations gives:\n$$2(P + F + G) = \\frac{1}{12} + \\frac{1}{6} + \\frac{2}{13} = \\frac{1}{4} + \\frac{2}{13} = \\frac{21}{52},$$\nso their combined daily rate is:\n$$P + F + G = \\frac{21}{104}\\text{ of the house per }9\\text{-hour day}.$$\nThus the time in hours required for all three working together is:\n$$\\frac{9}{\\frac{21}{104}} = \\frac{9 \\times 104}{21} = \\frac{312}{7} \\approx 44.57\\text{ hours},$$\nwhich rounds to $45$ hours.',
          rubric: [
            { code: 'M2', text: 'Finds combined rate $P + F + G = \\frac{21}{104}$ per day and computes $\\frac{9 \\times 104}{21} = \\frac{312}{7}$ hours.' },
            { code: 'A2', text: 'Rounds $44.57\\ldots$ to $45$ hours.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits.\n$$\\begin{array}{rrrrrr} & & & W & I & N \\\\ + & S & A & S & M & O \\\\ \\hline & M & E & D & A & L \\end{array}$$\nIf $N = 7$ and $M = 6$, find the value of the sum $S + A + S + M + O$.',
          answer: '$29$',
          principle:
            'Analyze carries from left to right starting with $S + 1 = M = 6$, then solve the remaining distinct digits from $\\{1, 2, 3, 4, 8\\}$.',
          solution:
            'Since $M = 6$ and $S \\neq M$, there must be a carry of $1$ into the ten-thousands column, so:\n$$S + 1 = 6 \\implies S = 5.$$\nBecause the thousands column $A$ produces a carry of $1$ into the ten-thousands column (while receiving at most a carry of $1$), we must have $A = 9$, which forces $E = 0$ (as $9 + 1 = 10$).\nSubstituting $N = 7, M = 6, S = 5, A = 9, E = 0$, the remaining unused digits for $\\{W, I, O, D, L\\}$ are $\\{1, 2, 3, 4, 8\\}$.\nIn the ones column, $7 + O \\equiv L \\pmod{10}$:\n- **Case 1 ($O = 1, L = 8$, no ones carry):** Then the tens column gives $I + 6 = 9 \\implies I = 3$. This leaves $\\{2, 4\\}$ for $(W, D)$, but the hundreds column requires $W + 5 = 10 + D$ (to carry $1$ into $A$), which cannot be satisfied by $(2, 4)$ or $(4, 2)$.\n- **Case 2 ($O = 4, L = 1$, ones carry $1$):** Then the tens column gives $1 + I + 6 = 9 \\implies I = 2$. This leaves $\\{3, 8\\}$ for $(W, D)$, and $W = 8, D = 3$ satisfies $8 + 5 = 13$ (giving $D = 3$ and carrying $1$ into $A$).\n\nCheck: $827 + 59564 = 60391$, using distinct digits.\nTherefore:\n$$S + A + S + M + O = 5 + 9 + 5 + 6 + 4 = 29.$$',
          rubric: [
            { code: 'M2', text: 'Deduces $S = 5$, $A = 9$, $E = 0$, and rules out $(O, L) = (1, 8)$ to obtain $O = 4$.' },
            { code: 'A2', text: 'Computes $S + A + S + M + O = 5 + 9 + 5 + 6 + 4 = 29$.' }
          ]
        }
      ]
    }
  ]
};
