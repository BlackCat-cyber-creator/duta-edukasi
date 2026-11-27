/**
 * Paket Soal: SASMO 2019 Grade 7 (Secondary 1)
 * Sumber: Singapore and Asian Schools Math Olympiad 2019, Secondary 1 (Grade 7) Contest (2019-SASMO-G7.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 7, 9, 12, 14, 16, 17, dan 21 dilengkapi ilustrasi crop .webp.
 */
export default {
  id: 'sasmo-2019-g7',
  slug: 'sasmo-2019-grade-7',
  subject: 'olimpiade-mat',
  grade: 7,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2019 Grade 7 (Secondary 1): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab4-bentuk-aljabar',
    'smp7-bab6-data-diagram'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2019 Grade 7 (Secondary 1)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; calculators are not permitted). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Figures are provided for Questions 7, 9, 12, 14, 16, 17, and 21.',
  source: {
    org: 'SASMO',
    file: '2019-SASMO-G7.pdf',
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
            'The number $2019$ is the smallest positive integer that can be written in $6$ ways as the sum of squares of $3$ prime numbers. One such way is:\n$$x^2 + x^2 + 41^2 = 2019$$\nWhat is the value of $x$?\n\nA. $19$\nB. $17$\nC. $13$\nD. $23$\nE. None of the above',
          answer: 'C. $13$',
          principle:
            'Isolate $2x^2$ by subtracting $41^2$ from $2019$, then divide by $2$ and take the positive square root.',
          solution:
            'Compute $41^2 = 1681$ and substitute into the equation:\n$$2x^2 + 1681 = 2019$$\n$$2x^2 = 2019 - 1681 = 338$$\n$$x^2 = \\frac{338}{2} = 169$$\nSince $x$ is a prime number (positive), $x = \\sqrt{169} = 13$.',
          rubric: [
            { code: 'M1', text: 'Computes $2x^2 = 2019 - 41^2 = 338$ and divides by $2$ to get $x^2 = 169$.' },
            { code: 'A1', text: 'Finds $x = 13$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'In physics, the kinetic energy ($E$) of a particle with mass ($m$) and momentum ($p$) is described by the relation:\n$$E = \\frac{p^2}{2m}$$\nWhat will happen to the kinetic energy of a particle if its mass is reduced to half of the original and its momentum is doubled?\n\nA. Unchanged\nB. Double\nC. Four times the original\nD. Eight times the original\nE. None of the above',
          answer: 'D. Eight times the original',
          principle:
            'Substitute $m_{\\text{new}} = \\frac{m}{2}$ and $p_{\\text{new}} = 2p$ into the kinetic energy formula and factor out $E = \\frac{p^2}{2m}$.',
          solution:
            'Let $m_{\\text{new}} = \\frac{m}{2}$ and $p_{\\text{new}} = 2p$. Substituting into the formula gives:\n$$E_{\\text{new}} = \\frac{p_{\\text{new}}^2}{2m_{\\text{new}}} = \\frac{(2p)^2}{2 \\times \\frac{m}{2}} = \\frac{4p^2}{m} = 8 \\times \\frac{p^2}{2m} = 8E.$$\nTherefore, the new kinetic energy is eight times the original.',
          rubric: [
            { code: 'M1', text: 'Substitutes $m_{\\text{new}} = \\frac{m}{2}$ and $p_{\\text{new}} = 2p$ into $\\frac{p^2}{2m}$.' },
            { code: 'A1', text: 'Simplifies to $8E$, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Find the sum of the prime factors of $2^8 - 1$.\n\nA. $25$\nB. $60$\nC. $17$\nD. $9$\nE. None of the above',
          answer: 'A. $25$',
          principle:
            'Factorize $2^8 - 1$ repeatedly using the difference-of-squares identity $a^2 - b^2 = (a - b)(a + b)$.',
          solution:
            'Apply the difference-of-squares identity repeatedly:\n$$2^8 - 1 = (2^4 - 1)(2^4 + 1) = (2^2 - 1)(2^2 + 1)(2^4 + 1) = 3 \\times 5 \\times 17.$$\nSince $3$, $5$, and $17$ are all prime, the prime factors of $2^8 - 1$ are $3$, $5$, and $17$.\nTheir sum is:\n$$3 + 5 + 17 = 25.$$',
          rubric: [
            { code: 'M1', text: 'Factorizes $2^8 - 1 = 255 = 3 \\times 5 \\times 17$.' },
            { code: 'A1', text: 'Sums the prime factors $3 + 5 + 17 = 25$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Consider all the integers from $1$ to $100$. Which of the following is NOT true about them?\n\nA. The number of even numbers is the same as the number of odd numbers.\nB. Writing all the digits, the digit "$0$" is the least occurring digit.\nC. There are more even numbers than prime numbers.\nD. The number of multiples of $8$ is the same as the number of multiples of $9$.\nE. The average of the $100$ numbers is not an integer.',
          answer: 'D. The number of multiples of $8$ is the same as the number of multiples of $9$.',
          principle:
            'Verify each statement directly for the integers $1, 2, \\ldots, 100$ using division and basic counting.',
          solution:
            'Check each statement for the integers from $1$ to $100$:\n- **A (True):** There are $50$ even integers and $50$ odd integers.\n- **B (True):** The digit $0$ appears $11$ times ($10, 20, \\ldots, 90, 100$), whereas each nonzero digit appears at least $20$ times ($1$ appears $21$ times, and $2$–$9$ appear $20$ times each).\n- **C (True):** There are $50$ even integers and $25$ prime numbers.\n- **D (Not true):** There are $\\lfloor 100 / 8 \\rfloor = 12$ multiples of $8$ ($8, 16, \\ldots, 96$), whereas there are $\\lfloor 100 / 9 \\rfloor = 11$ multiples of $9$ ($9, 18, \\ldots, 99$). Since $12 \\neq 11$, statement D is false.\n- **E (True):** The average is $\\frac{1 + 100}{2} = \\frac{101}{2} = 50.5$, which is not an integer.\n\nThus, the statement that is NOT true is D.',
          rubric: [
            { code: 'M1', text: 'Counts $\\lfloor 100/8 \\rfloor = 12$ multiples of $8$ and $\\lfloor 100/9 \\rfloor = 11$ multiples of $9$.' },
            { code: 'A1', text: 'Identifies statement D as false.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'What is the smallest four-digit number that is divisible by $1, 2, 3, 4, 5, 6, 7, 8, 9$ and $10$?\n\nA. $1260$\nB. $2520$\nC. $840$\nD. $5040$\nE. None of the above',
          answer: 'B. $2520$',
          principle:
            'A positive integer is divisible by every integer from $1$ to $10$ if and only if it is a multiple of $\\operatorname{lcm}(1, 2, \\ldots, 10)$.',
          solution:
            'Find the least common multiple of $1, 2, 3, 4, 5, 6, 7, 8, 9, 10$ by taking the highest power of each prime factor appearing among them:\n- Prime $2$: $2^3 = 8$\n- Prime $3$: $3^2 = 9$\n- Prime $5$: $5$\n- Prime $7$: $7$\n\nTherefore:\n$$\\operatorname{lcm}(1, 2, \\ldots, 10) = 8 \\times 9 \\times 5 \\times 7 = 2520.$$\nSince $2520$ itself is a four-digit number, it is the smallest four-digit common multiple.',
          rubric: [
            { code: 'M1', text: 'Computes $\\operatorname{lcm}(1, 2, \\ldots, 10) = 2^3 \\times 3^2 \\times 5 \\times 7$.' },
            { code: 'A1', text: 'Obtains $2520$, option B.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'The number of Instagram followers of Ariana rose $10\\%$ from September to October, then dropped $20\\%$ from October to November, then rose $50\\%$ from November to December. What was the percentage increase from September to December?\n\nA. $80\\%$\nB. $62\\%$\nC. $56\\%$\nD. $32\\%$\nE. None of the above',
          answer: 'D. $32\\%$',
          principle:
            'Multiply the successive percentage change factors ($1.1$, $0.8$, and $1.5$) relative to the starting quantity.',
          solution:
            'Let the number of followers in September be $x$.\n- **October** ($10\\%$ increase): $1.1x$\n- **November** ($20\\%$ decrease): $0.8 \\times 1.1x = 0.88x$\n- **December** ($50\\%$ increase): $1.5 \\times 0.88x = 1.32x$\n\nComparing December ($1.32x$) to September ($x$), the overall percentage increase is:\n$$(1.32 - 1) \\times 100\\% = 32\\%.$$',
          rubric: [
            { code: 'M1', text: 'Applies the three consecutive multipliers $1.1 \\times 0.8 \\times 1.5 = 1.32$.' },
            { code: 'A1', text: 'Finds the net percentage increase $32\\%$, option D.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'In network science, a "fully connected network" is represented by a graph in such a way that each pair of vertices (called nodes) is connected by exactly one line segment (called a connection). For instance, a fully connected network with $5$ nodes is illustrated on the right. This network has $10$ connections as shown. How many connections does a fully connected network with $10$ nodes have?\n\nA. $45$\nB. $55$\nC. $20$\nD. $66$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g7/fig-7.webp',
              alt: 'A regular pentagon with 5 blue vertex nodes and all sides and diagonals drawn between every pair of nodes.',
              caption: 'Fully connected network with 5 nodes for Question 7.'
            }
          ],
          answer: 'A. $45$',
          principle:
            'Each of the $n$ nodes connects to the remaining $n - 1$ nodes, and every connection is shared by $2$ nodes, giving $\\frac{n(n - 1)}{2}$ connections.',
          solution:
            'Label the $10$ nodes $a_1, a_2, \\ldots, a_{10}$ and count connections without repetition:\n- Connections from $a_1$ to $a_2, \\ldots, a_{10}$: $9$\n- New connections from $a_2$ to $a_3, \\ldots, a_{10}$: $8$\n- New connections from $a_3$ to $a_4, \\ldots, a_{10}$: $7$\n- $\\cdots$\n- New connection from $a_9$ to $a_{10}$: $1$\n\nTotal number of connections:\n$$9 + 8 + 7 + \\cdots + 1 = \\frac{10 \\times 9}{2} = 45.$$',
          rubric: [
            { code: 'M1', text: 'Sums $9 + 8 + \\cdots + 1$ or uses $\\frac{n(n - 1)}{2}$ for $n = 10$.' },
            { code: 'A1', text: 'Evaluates $45$ connections, option A.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'The product of $46$ integers is $1$. Which of the following cannot be the sum of these $46$ integers?\n\nA. $38$\nB. $6$\nC. $0$\nD. $-14$\nE. $-46$',
          answer: 'C. $0$',
          principle:
            'If a product of integers equals $1$, every factor must be $1$ or $-1$, and the number of $-1$ factors must be even.',
          solution:
            'Since the product of the $46$ integers is $1$, each integer must be either $1$ or $-1$. Moreover, for the product to be $+1$ rather than $-1$, there must be an even number of $-1$s.\nLet $2k$ be the number of $-1$s (so $46 - 2k$ integers are $+1$). Then their sum is:\n$$(46 - 2k) - 2k = 46 - 4k.$$\nNote that $46 - 4k$ is always $2 \\pmod{4}$ (never a multiple of $4$):\n- $38 = 46 - 4(2)$ (possible)\n- $6 = 46 - 4(10)$ (possible)\n- $0$: would require $23$ ones and $23$ negative ones, whose product is $(-1)^{23} = -1 \\neq 1$ (impossible)\n- $-14 = 46 - 4(15)$ (possible)\n- $-46 = 46 - 4(23)$ (possible)\n\nHence, $0$ cannot be the sum.',
          rubric: [
            { code: 'M1', text: 'Deduces all factors are $\\pm 1$ with an even number of $-1$s (so sum is $46 - 4k$, or $0$ requires $23$ negative ones).' },
            { code: 'A1', text: 'Concludes $0$ is impossible, option C.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'In the triangle below, $AB = BD = DE = EC$. Given $\\angle ABE = 120^\\circ$, what is the measure of $\\angle BDA$?\n\nA. $65^\\circ$\nB. $60^\\circ$\nC. $45^\\circ$\nD. $15^\\circ$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g7/fig-9.webp',
              alt: 'Triangle ABC with point D on side AC and point E on side BC, with segments BD and DE drawn.',
              caption: 'Triangle ABC with points D and E for Question 9.'
            }
          ],
          answer: 'C. $45^\\circ$',
          principle:
            'Chase angles through the three isosceles triangles $\\triangle ABD$, $\\triangle BDE$, and $\\triangle DEC$ in terms of $x = \\angle BDA$, then use the angle sum of $\\triangle ABC$.',
          solution:
            'Let $\\angle BDA = x$. Using the equal lengths $AB = BD = DE = EC$:\n1. In isosceles $\\triangle ABD$ ($AB = BD$): $\\angle BAD = \\angle BDA = x$, so $\\angle ABD = 180^\\circ - 2x$.\n2. Since $\\angle ABE = 120^\\circ$, we get:\n$$\\angle DBE = 120^\\circ - \\angle ABD = 120^\\circ - (180^\\circ - 2x) = 2x - 60^\\circ.$$\n3. In isosceles $\\triangle BDE$ ($BD = DE$): $\\angle DEB = \\angle DBE = 2x - 60^\\circ$. Since $B, E, C$ are collinear, $\\angle DEC = 180^\\circ - (2x - 60^\\circ) = 240^\\circ - 2x$.\n4. In isosceles $\\triangle DEC$ ($DE = EC$):\n$$\\angle ECD = \\frac{180^\\circ - \\angle DEC}{2} = \\frac{180^\\circ - (240^\\circ - 2x)}{2} = x - 30^\\circ.$$\n\nNow apply the interior angle sum of $\\triangle ABC$:\n$$\\angle BAD + \\angle ABE + \\angle ECD = 180^\\circ$$\n$$x + 120^\\circ + (x - 30^\\circ) = 180^\\circ \\implies 2x + 90^\\circ = 180^\\circ \\implies x = 45^\\circ.$$\nThus, $\\angle BDA = 45^\\circ$.',
          rubric: [
            { code: 'M1', text: 'Expresses $\\angle DBE = 2x - 60^\\circ$ and $\\angle ECD = x - 30^\\circ$ via the isosceles triangles.' },
            { code: 'A1', text: 'Solves $2x + 90^\\circ = 180^\\circ$ to get $\\angle BDA = 45^\\circ$, option C.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'The operator $\\otimes$ acts on two numbers to give the following outcomes:\n$$2 \\otimes 6 = 44$$\n$$4 \\otimes 10 = 87$$\n$$8 \\otimes 18 = 1613$$\n$$16 \\otimes 22 = 2019$$\nWhat is the value of $32 \\otimes 34$?\n\nA. $3266$\nB. $6440$\nC. $3225$\nD. $3233$\nE. None of the above',
          answer: 'D. $3233$',
          principle:
            'Split each outcome into two concatenated parts: the leading digits equal $b - 2$ and the trailing digits equal the average $\\frac{a + b}{2}$.',
          solution:
            'For $a \\otimes b$, the result is formed by concatenating $(b - 2)$ and $\\frac{a + b}{2}$:\n- $2 \\otimes 6$: $6 - 2 = 4$ and $\\frac{2 + 6}{2} = 4 \\implies 44$\n- $4 \\otimes 10$: $10 - 2 = 8$ and $\\frac{4 + 10}{2} = 7 \\implies 87$\n- $8 \\otimes 18$: $18 - 2 = 16$ and $\\frac{8 + 18}{2} = 13 \\implies 1613$\n- $16 \\otimes 22$: $22 - 2 = 20$ and $\\frac{16 + 22}{2} = 19 \\implies 2019$\n\nApplying the rule to $32 \\otimes 34$:\n- First part: $34 - 2 = 32$\n- Second part: $\\frac{32 + 34}{2} = 33$\n\nConcatenating these gives $3233$.',
          rubric: [
            { code: 'M1', text: 'Identifies the concatenation rule $(b - 2)$ followed by $\\frac{a + b}{2}$.' },
            { code: 'A1', text: 'Computes $32$ and $33$ to obtain $3233$, option D.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'In a camp, each student played at least $2$ games. The games were Scavenger Hunt, Animal Charades and Musical Chairs. Twelve students played all three games, $33$ played the Scavenger Hunt, $29$ played the Animal Charades and $36$ played the Musical Chairs. How many students were there in the camp?\n\nA. $62$\nB. $31$\nC. $43$\nD. $110$\nE. None of the above',
          answer: 'C. $43$',
          principle:
            'Because every student played at least $2$ games, zero students played only $1$ game; sum the three game counts to double-count those playing $2$ games and triple-count those playing all $3$.',
          solution:
            'Let $x$ be the number of students who played exactly $2$ games, and $y = 12$ be the number of students who played all $3$ games. Since every student played at least $2$ games, no student played only $1$ game.\nSumming the participants across all three games counts every $2$-game student twice and every $3$-game student three times:\n$$2x + 3y = 33 + 29 + 36 = 98.$$\nSubstitute $y = 12$:\n$$2x + 3(12) = 98 \\implies 2x = 62 \\implies x = 31.$$\nTherefore, the total number of students in the camp is:\n$$x + y = 31 + 12 = 43.$$',
          rubric: [
            { code: 'M1', text: 'Sets up $2x + 3(12) = 33 + 29 + 36 = 98$ using zero $1$-game students and solves $x = 31$.' },
            { code: 'A1', text: 'Computes total students $31 + 12 = 43$, option C.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'Which cube below will be formed when the net on the right is folded?\n\nA. Option A\nB. Option B\nC. Option C\nD. Option D\nE. Option E',
          figures: [
            {
              src: '/papers/sasmo-2019-g7/fig-12.webp',
              alt: 'A 6-square cube net with diagonal, grid, white-square, X, and grey-square face patterns above five isometric cube views labeled A through E.',
              caption: 'Cube net and five folded cube options A–E for Question 12.'
            }
          ],
          answer: 'C. Option C',
          principle:
            'Identify the three pairs of opposite faces in the net (which can never appear adjacent on a folded cube), then verify the relative orientation of adjacent faces.',
          solution:
            'From the net, fold the six faces to identify the three pairs of opposite faces:\n1. The single-diagonal face `/` (top of the vertical strip) is opposite the $2 \\times 2$ grid face `+` (bottom of the vertical strip).\n2. The single-diagonal face `\\` (middle of the vertical strip) is opposite the `X` face.\n3. The small white-square face is opposite the small grey-square face.\n\nEliminate the impossible options:\n- **A and B:** Both show the `X` face adjacent to a single-diagonal face `\\`, which are opposite in the net (and in B the three visible faces do not meet at a valid vertex orientation).\n- **D:** Shows the single-diagonal face `/` adjacent to the `+` grid face, which are opposite faces (and swapped relative to the grey square).\n- **E:** Shows the white-square face adjacent to the grey-square face, which must be opposite.\n- **C:** Shows the `X` face on top, the `+` grid face on the front-left, and the grey-square face on the front-right. Folding the net places `+` in front, grey square on the right, and `X` on top in this exact orientation.\n\nHence, Option C can be formed.',
          rubric: [
            { code: 'M1', text: 'Identifies opposite face pairs from the net to eliminate A, B, D, and E.' },
            { code: 'A1', text: 'Confirms the valid face orientation in Option C.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Find the numerator of the following sum in its simplest form.\n$$\\frac{1}{2} + \\frac{3}{4} + \\frac{7}{8} + \\cdots + \\frac{511}{512}$$\n\nA. $512$\nB. $522$\nC. $3586$\nD. $4097$\nE. None of the above',
          answer: 'D. $4097$',
          principle:
            'Rewrite each term $\\frac{2^k - 1}{2^k}$ as $1 - \\frac{1}{2^k}$ and sum the powers of $\\frac{1}{2}$ as a telescoping geometric sum.',
          solution:
            'There are $9$ terms in the sum, since $512 = 2^9$. Rewrite each term as $1 - \\frac{1}{2^k}$:\n$$S = \\left(1 - \\frac{1}{2}\\right) + \\left(1 - \\frac{1}{4}\\right) + \\left(1 - \\frac{1}{8}\\right) + \\cdots + \\left(1 - \\frac{1}{512}\\right)$$\n$$= 9 - \\left(\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots + \\frac{1}{512}\\right).$$\nLet $B = \\frac{1}{2} + \\frac{1}{4} + \\cdots + \\frac{1}{512}$. Adding $\\frac{1}{512}$ telescopes from right to left to give $1$, so $B = 1 - \\frac{1}{512} = \\frac{511}{512}$.\nTherefore:\n$$S = 9 - \\frac{511}{512} = \\frac{9 \\times 512 - 511}{512} = \\frac{4608 - 511}{512} = \\frac{4097}{512}.$$\nSince $4097$ is odd and $512 = 2^9$, $\\gcd(4097, 512) = 1$. The fraction is in simplest form with numerator $4097$.',
          rubric: [
            { code: 'M1', text: 'Rewrites $S = 9 - \\left(\\frac{1}{2} + \\frac{1}{4} + \\cdots + \\frac{1}{512}\\right) = 9 - \\frac{511}{512}$.' },
            { code: 'A1', text: 'Simplifies to $\\frac{4097}{512}$ and identifies numerator $4097$, option D.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'A leader asked his $6$ followers what is inside the gift box he saw. These $6$ followers are sitting around a table. Two of them are truth-tellers and they are sitting next to each other. Two followers are liars and they are sitting next to each other as well. Each of the remaining two followers is either a truth-teller or liar, and they are not sitting next to each other. The responses of the followers are shown in the picture below.\n\nWhat is inside the gift box?\n\nA. Mobile Phone\nB. Watch\nC. Wallet\nD. Bag\nE. Insufficient data',
          figures: [
            {
              src: '/papers/sasmo-2019-g7/fig-14.webp',
              alt: 'Six followers seated in a circle around a table with speech bubbles saying Watch, Wallet, Bag, Watch, and Mobile Phone, and one follower without a speech bubble.',
              caption: 'Seating arrangement and responses of the six followers for Question 14.'
            }
          ],
          answer: 'A. Mobile Phone',
          principle:
            'Only two adjacent seats can contain two truth-tellers who do not contradict each other; test those two candidate pairs against the seating condition on the remaining followers.',
          solution:
            'Label the $6$ followers clockwise starting from top-left: $P_1$ ("Watch"), $P_2$ ("Wallet"), $P_3$ ("Bag"), $P_4$ ("Watch"), $P_5$ (silent), $P_6$ ("Mobile Phone").\nTwo adjacent followers can both be truth-tellers only if their statements do not name two different objects. Checking all $6$ adjacent pairs leaves only two possibilities:\n- **Case 1 ($P_4$ and $P_5$ are the two adjacent truth-tellers):** Then "Watch" is inside the box, so $P_1$ ("Watch") is also a truth-teller, while $P_2, P_3, P_6$ are liars. Here $P_2$ and $P_3$ form the adjacent liar pair, leaving $P_1$ and $P_6$ as the remaining two followers. However, $P_1$ and $P_6$ sit next to each other, contradicting the condition that the remaining two followers are not adjacent.\n- **Case 2 ($P_5$ and $P_6$ are the two adjacent truth-tellers):** Then "Mobile Phone" is inside the box, so $P_1, P_2, P_3, P_4$ are all liars. Taking $P_2$ and $P_3$ as the adjacent liar pair leaves $P_1$ and $P_4$, who sit opposite each other (not adjacent), satisfying every condition.\n\nTherefore, a Mobile Phone is inside the gift box.',
          rubric: [
            { code: 'M1', text: 'Identifies the two non-contradicting adjacent pairs ($P_4, P_5$ and $P_5, P_6$) and rules out $P_4, P_5$ by the non-adjacency condition.' },
            { code: 'A1', text: 'Concludes Mobile Phone is inside the box, option A.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Two calendars are the same if all their dates correspond to the same days. The calendar for the year $2019$ is the same for the year \\_\\_\\_\\_.\n(Years $2016, 2012, 2008$ and $2004$ are the leap years)\n\nA. $2003$\nB. $2005$\nC. $2012$\nD. $2013$\nE. $2014$',
          answer: 'D. $2013$',
          principle:
            'Two ordinary (non-leap) years have identical calendars whenever their January $1$ dates fall on the same day of the week, i.e., when the cumulative weekday shift between them is a multiple of $7$.',
          solution:
            'Since $2019$ is an ordinary year ($365$ days), any matching year must also be an ordinary year (ruling out $2012$, which is a leap year). Moving backward by $1$ year shifts January $1$ back by $1$ weekday across an ordinary year ($365 \\equiv 1 \\pmod 7$) and by $2$ weekdays across a leap year ($366 \\equiv 2 \\pmod 7$):\n- $2019 \\to 2018$: $-1$\n- $2018 \\to 2017$: $-1$ (total $-2$)\n- $2017 \\to 2016$: $-2$ (total $-4$)\n- $2016 \\to 2015$: $-1$ (total $-5$)\n- $2015 \\to 2014$: $-1$ (total $-6$)\n- $2014 \\to 2013$: $-1$ (total $-7$)\n\nBecause the total shift from $2019$ back to $2013$ is $-7$ days (a multiple of $7$) and $2013$ is an ordinary year, $2013$ has the exact same calendar as $2019$.',
          rubric: [
            { code: 'M1', text: 'Tracks the backward day-of-week shifts ($-1$ per ordinary year, $-2$ per leap year) from $2019$.' },
            { code: 'A1', text: 'Finds a total shift of $-7$ days at ordinary year $2013$, option D.' }
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
          prompt: 'How many triangles are there in the figure below?',
          figures: [
            {
              src: '/papers/sasmo-2019-g7/fig-16.webp',
              alt: 'A symmetric geometric figure inside a square made of intersecting squares, rotated diamonds, and corner lines forming triangular regions.',
              caption: 'Geometric triangle-counting figure for Question 16.'
            }
          ],
          answer: '$36$',
          principle:
            'Classify every triangle in the symmetric figure by the number of smallest ($1$-part) triangular regions it contains.',
          solution:
            'By $4$-fold rotational symmetry around the center of the square, count the triangles in one quadrant and multiply by $4$:\n- **$1$-part triangles:** Each quadrant contains $8$ indivisible triangular regions ($1$ outer corner triangle, $1$ outer-edge middle triangle, $2$ small tip triangles, $1$ corner right triangle inside the inner box, $2$ flanking triangles, and $1$ inner-square corner triangle), giving:\n$$8 \\times 4 = 32.$$\n- **$9$-part triangles:** Along each of the $4$ corners of the outer square, the large right-isosceles triangle spanning $3/4$ of the two adjacent outer sides is subdivided into $9$ of the $1$-part regions, giving:\n$$1 \\times 4 = 4.$$\n(No other combination of regions forms a triangle, as the central diamond has $4$ sides and no internal diagonals.)\n\nTotal number of triangles:\n$$32 + 4 = 36.$$',
          rubric: [
            { code: 'M2', text: 'Counts $32$ single-part triangles and identifies the $4$ composite $9$-part corner triangles.' },
            { code: 'A2', text: 'Computes the total $32 + 4 = 36$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'The following bar chart shows the number of customers per day a shop had last week. The average number of customers in the first $4$ days was $65\\%$ of the average number of customers in the last $3$ days. How many customers did the shop have last Tuesday?',
          figures: [
            {
              src: '/papers/sasmo-2019-g7/fig-17.webp',
              alt: 'Bar chart of daily customer counts Monday through Sunday showing values above six bars and an unlabeled bar for Tuesday.',
              caption: 'Daily customer bar chart for Question 17.'
            }
          ],
          answer: '$101$',
          principle:
            'Find the average of the last $3$ days first, multiply by $0.65$ to obtain the average of the first $4$ days, and solve for Tuesday.',
          solution:
            'From the bar chart, the customer counts for the last $3$ days (Friday, Saturday, Sunday) are $134$, $242$, and $164$. Their average is:\n$$\\frac{134 + 242 + 164}{3} = \\frac{540}{3} = 180.$$\nThe average for the first $4$ days (Monday to Thursday) is $65\\%$ of $180$:\n$$0.65 \\times 180 = 117.$$\nHence the total number of customers in the first $4$ days is $4 \\times 117 = 468$. Letting $x$ be Tuesday’s count and reading Monday ($83$), Wednesday ($129$), and Thursday ($155$) from the chart:\n$$83 + x + 129 + 155 = 468$$\n$$367 + x = 468 \\implies x = 101.$$\nThe shop had $101$ customers last Tuesday.',
          rubric: [
            { code: 'M2', text: 'Finds the last-$3$-day average $180$, first-$4$-day average $0.65 \\times 180 = 117$, and sets up $83 + x + 129 + 155 = 468$.' },
            { code: 'A2', text: 'Solves $x = 101$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'Annabelle, Betty, Cynthia and Dora were playing a new video game. After the first round of the game:\n- Betty and Dora had the same number of gold coins.\n- Number of Cynthia’s gold coins was half the average number of gold coins of Annabelle and Betty had.\n- Cynthia had $10$ less gold coins than Dora.\n- Annabelle’s number of gold coins was half of Betty’s.\n\nWhat was their total number of gold coins after the first round?',
          answer: '$46$',
          principle:
            'Express Annabelle’s, Cynthia’s, and Dora’s coin counts in terms of Betty’s coin count $B$, then solve the linear equation from Cynthia having $10$ fewer coins than Dora.',
          solution:
            'Let $A, B, C, D$ be the number of gold coins held by Annabelle, Betty, Cynthia, and Dora respectively.\nFrom the four conditions:\n- $D = B$\n- $A = \\frac{B}{2}$\n- $C = \\frac{1}{2} \\times \\frac{A + B}{2} = \\frac{\\frac{B}{2} + B}{4} = \\frac{3B}{8}$\n- $C = D - 10 = B - 10$\n\nEquate the two expressions for $C$:\n$$\\frac{3B}{8} = B - 10 \\implies \\frac{5B}{8} = 10 \\implies B = 16.$$\nThen $D = 16$, $A = \\frac{16}{2} = 8$, and $C = 16 - 10 = 6$.\nTheir total number of gold coins is:\n$$A + B + C + D = 8 + 16 + 6 + 16 = 46.$$',
          rubric: [
            { code: 'M2', text: 'Translates all four statements into equations and solves $B = D = 16$, $A = 8$, $C = 6$.' },
            { code: 'A2', text: 'Computes the sum $8 + 16 + 6 + 16 = 46$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'What is the missing number in the sequence below?\n$$311,\\ 282,\\ 313,\\ 304,\\ 315,\\ 306,\\ 317,\\ ?,\\ 309$$',
          answer: '$318$',
          principle:
            'Split each $3$-digit term into its first two digits and last digit to spot the calendar encoding (days in month $m$ followed by month number $m$).',
          solution:
            'Each term represents the number of days in a month of an ordinary (non-leap) year followed by the month number:\n- $311$: $31$ days in month $1$ (January)\n- $282$: $28$ days in month $2$ (February)\n- $313$: $31$ days in month $3$ (March)\n- $304$: $30$ days in month $4$ (April)\n- $315$: $31$ days in month $5$ (May)\n- $306$: $30$ days in month $6$ (June)\n- $317$: $31$ days in month $7$ (July)\n- $309$: $30$ days in month $9$ (September)\n\nThe missing term corresponds to month $8$ (August), which has $31$ days, so the missing number is $318$.',
          rubric: [
            { code: 'M2', text: 'Recognizes each $3$-digit number encodes (days in month $m$) concatenated with month $m$.' },
            { code: 'A2', text: 'Determines August (month $8$) has $31$ days, giving $318$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Find the smallest positive integer $n$ for which $225n$ is a multiple of $4500$.',
          answer: '$20$',
          principle:
            'Prime-factorize both $225$ and $4500$, or notice $225n = \\operatorname{lcm}(225, 4500)$ since $n$ is the smallest positive integer.',
          solution:
            'Prime-factorize $225$ and $4500$:\n$$225 = 3^2 \\times 5^2$$\n$$4500 = 2^2 \\times 3^2 \\times 5^3$$\nFor $225n$ to be a multiple of $4500$, $n$ must supply the missing factors $2^2$ and $5^1$:\n$$n = 2^2 \\times 5 = 20.$$\n(Equivalently, $4500 \\div 225 = 20$, so the smallest positive integer $n$ is $20$.)',
          rubric: [
            { code: 'M2', text: 'Factorizes $225 = 3^2 \\times 5^2$ and $4500 = 2^2 \\times 3^2 \\times 5^3$ (or divides $4500 \\div 225$).' },
            { code: 'A2', text: 'Obtains $n = 20$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'In the diagram, $ABCD$ and $DEFG$ are squares with $AB = 15\\text{ cm}$ and $DE = 11\\text{ cm}$. If $\\angle CDG = 90^\\circ$, find the area (in $\\text{cm}^2$) of the shaded quadrilateral.',
          figures: [
            {
              src: '/papers/sasmo-2019-g7/fig-21.webp',
              alt: 'Two squares ABCD and DEFG meeting at vertex D with side C-D-E vertical and A-D-G horizontal, with the central overlapping quadrilateral shaded.',
              caption: 'Squares ABCD and DEFG with shaded quadrilateral for Question 21.'
            }
          ],
          answer: '$165$',
          principle:
            'Split the shaded quadrilateral along the vertical segment $CE$ into $\\triangle CHE$ and $\\triangle CIE$, or subtract the unshaded right triangles $\\triangle BCH$ and $\\triangle EFI$ from $\\triangle ECB + \\triangle ECF$.',
          solution:
            'Let $H$ be the intersection of $AD$ and $BE$, and let $I$ be the intersection of $CF$ and $DG$. Since $\\angle CDG = 90^\\circ$, $C, D, E$ are collinear with $CE = CD + DE = 15 + 11 = 26\\text{ cm}$, and $A, D, G$ are collinear.\nCompute the areas of the large triangles $\\triangle ECB$ and $\\triangle ECF$ on base $CE = 26\\text{ cm}$:\n$$\\text{Area}(\\triangle ECB) = \\frac{CE \\times BC}{2} = \\frac{26 \\times 15}{2} = 195\\text{ cm}^2$$\n$$\\text{Area}(\\triangle ECF) = \\frac{CE \\times EF}{2} = \\frac{26 \\times 11}{2} = 143\\text{ cm}^2$$\nThe unshaded right triangles $\\triangle BCH$ and $\\triangle EFI$ have heights $AB = 15\\text{ cm}$ and $GF = 11\\text{ cm}$ respectively:\n$$\\text{Area}(\\triangle BCH) = \\frac{AB \\times BC}{2} = \\frac{15 \\times 15}{2} = \\frac{225}{2}\\text{ cm}^2$$\n$$\\text{Area}(\\triangle EFI) = \\frac{GF \\times EF}{2} = \\frac{11 \\times 11}{2} = \\frac{121}{2}\\text{ cm}^2$$\nTherefore, the area of the shaded quadrilateral $CHEI$ is:\n$$\\text{Area}(CHEI) = \\text{Area}(\\triangle ECB) + \\text{Area}(\\triangle ECF) - \\text{Area}(\\triangle BCH) - \\text{Area}(\\triangle EFI)$$\n$$= 195 + 143 - \\frac{225}{2} - \\frac{121}{2} = 338 - 173 = 165\\text{ cm}^2.$$',
          rubric: [
            { code: 'M2', text: 'Computes $\\text{Area}(\\triangle ECB) = 195$, $\\text{Area}(\\triangle ECF) = 143$, and subtracts $\\text{Area}(\\triangle BCH) = \\frac{225}{2}$ and $\\text{Area}(\\triangle EFI) = \\frac{121}{2}$.' },
            { code: 'A2', text: 'Finds shaded area $165$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'How many $3$-digit numbers have the following properties?\n- The number is a multiple of $6$.\n- It remains a multiple of $6$ when its tens and ones digits are switched.',
          answer: '$75$',
          principle:
            'A number is a multiple of $6$ iff it is divisible by both $2$ and $3$; switching the tens and ones digits preserves the digit sum, so both digits must be even.',
          solution:
            'Let the $3$-digit number be $\\overline{htu}$ with $h \\in \\{1, 2, \\ldots, 9\\}$ and $t, u \\in \\{0, 1, \\ldots, 9\\}$.\n- Switching $t$ and $u$ does not change the digit sum $h + t + u$, so divisibility by $3$ is automatically preserved.\n- For both $\\overline{htu}$ and $\\overline{hut}$ to be divisible by $2$, both $t$ and $u$ must be even digits, i.e., $t, u \\in \\{0, 2, 4, 6, 8\\}$.\n\nAmong the $5$ even digits $\\{0, 2, 4, 6, 8\\}$, two are $\\equiv 0 \\pmod 3$ ($0, 6$), one is $\\equiv 1 \\pmod 3$ ($4$), and two are $\\equiv 2 \\pmod 3$ ($2, 8$). Count valid $(t, u)$ pairs for each case of $h \\bmod 3$:\n- **$h \\equiv 0 \\pmod 3$ ($h \\in \\{3, 6, 9\\}$, $3$ choices):** We need $t + u \\equiv 0 \\pmod 3$. Either $t, u \\in \\{0, 6\\}$ ($2 \\times 2 = 4$ pairs), or one is in $\\{4\\}$ and the other is in $\\{2, 8\\}$ ($1 \\times 2 + 2 \\times 1 = 4$ pairs), giving $8$ pairs per $h$.\n- **$h \\equiv 1 \\pmod 3$ ($h \\in \\{1, 4, 7\\}$, $3$ choices):** We need $t + u \\equiv 2 \\pmod 3$. Either $t, u \\in \\{4\\}$ ($1 \\times 1 = 1$ pair), or one is in $\\{0, 6\\}$ and the other is in $\\{2, 8\\}$ ($2 \\times 2 + 2 \\times 2 = 8$ pairs), giving $9$ pairs per $h$.\n- **$h \\equiv 2 \\pmod 3$ ($h \\in \\{2, 5, 8\\}$, $3$ choices):** We need $t + u \\equiv 1 \\pmod 3$. Either $t, u \\in \\{2, 8\\}$ ($2 \\times 2 = 4$ pairs), or one is in $\\{0, 6\\}$ and the other is in $\\{4\\}$ ($2 \\times 1 + 1 \\times 2 = 4$ pairs), giving $8$ pairs per $h$.\n\nTotal number of valid $3$-digit numbers:\n$$3 \\times (8 + 9 + 8) = 3 \\times 25 = 75.$$',
          rubric: [
            { code: 'M2', text: 'Shows both tens and ones digits must belong to $\\{0, 2, 4, 6, 8\\}$ with $3 \\mid (h + t + u)$.' },
            { code: 'A2', text: 'Counts all valid $(h, t, u)$ triples to get $75$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Find the sum of the digits of the following product.\n$$\\underbrace{333\\ldots3}_{100\\text{ 3s}} \\times 2019$$',
          answer: '$900$',
          principle:
            'Factor $3$ out of $2019 = 3 \\times 673$ and multiply it into $\\underbrace{333\\ldots3}_{100\\text{ 3s}}$ to obtain $10^{100} - 1$.',
          solution:
            'Write $2019 = 3 \\times 673$ and regroup the factor of $3$:\n$$\\underbrace{333\\ldots3}_{100\\text{ 3s}} \\times 2019 = \\left(\\underbrace{333\\ldots3}_{100\\text{ 3s}} \\times 3\\right) \\times 673 = \\underbrace{999\\ldots9}_{100\\text{ 9s}} \\times 673.$$\nSince $\\underbrace{999\\ldots9}_{100\\text{ 9s}} = 10^{100} - 1$:\n$$(10^{100} - 1) \\times 673 = 673\\underbrace{000\\ldots0}_{100\\text{ 0s}} - 673 = 672\\underbrace{999\\ldots9}_{97\\text{ 9s}}327.$$\nAdding all the digits gives:\n$$6 + 7 + 2 + 9 \\times 97 + 3 + 2 + 7 = 15 + 873 + 12 = 900.$$',
          rubric: [
            { code: 'M2', text: 'Rewrites the product as $(10^{100} - 1) \\times 673 = 672\\,999\\ldots9\\,327$ with $97$ nines.' },
            { code: 'A2', text: 'Sums the digits to obtain $900$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. What is the value of the sum $R + E + D + A$?\n$$\\begin{array}{rrrrr} & & R & E & D \\\\ + & D & E & E & R \\\\ \\hline & R & D & R & A \\end{array}$$',
          answer: '$24$',
          principle:
            'Analyze carries from left to right: the thousands place fixes $R = D + 1$, which narrows $E$ in the hundreds column to $8$ or $9$.',
          solution:
            'Observe each column of $RED + DEER = RDRA$ (with leading digits $D, R \\ge 1$):\n1. **Thousands column:** There must be a carryover of $1$ from the hundreds column into the thousands column (since $R \\neq D$), so:\n$$R = D + 1.$$\n2. **Hundreds column:** Either $R + E = 10 + D$ (no carry from tens) or $R + E + 1 = 10 + D$ (carry of $1$ from tens). Substituting $R - D = 1$ gives $E + 1 = 10$ or $E + 2 = 10$, so $E \\in \\{8, 9\\}$.\n3. **Tens column ($E + E$ + carry):**\n   - If $E = 9$: $E + E = 18$, and since $R \\neq E = 9$, there can be no carry from the ones column, forcing $R = 8$ and $D = R - 1 = 7$. However, in the ones column $D + R = 7 + 8 = 15 \\ge 10$, which produces a carry of $1$, a contradiction.\n   - Hence $E = 8$, so $E + E = 16$ (giving $R = 6$ if no ones carry, or $R = 7$ if ones carry is $1$). If $R = 6$, then $D = 5$, and $D + R = 11 \\ge 10$ contradicts having no ones carry. Thus there must be a carry of $1$ from the ones column, giving $R = 7$ and $D = 6$.\n4. **Ones column:** $D + R = 6 + 7 = 13$, so $A = 3$ with a carry of $1$.\n\nCheck: $786 + 6887 = 7673$, with distinct digits $R = 7, E = 8, D = 6, A = 3$.\nTherefore:\n$$R + E + D + A = 7 + 8 + 6 + 3 = 24.$$',
          rubric: [
            { code: 'M2', text: 'Uses $R = D + 1$ and carry analysis to deduce $E = 8$, $R = 7$, $D = 6$, and $A = 3$.' },
            { code: 'A2', text: 'Computes $7 + 8 + 6 + 3 = 24$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'It is given that $159n + 49$ is a four-digit perfect square, where $n$ is a positive integer. Find the value of $n$.',
          answer: '$13$',
          principle:
            'Set $159n + 49 = a^2$, rewrite $159n = (a - 7)(a + 7) = 3 \\times 53n$, and test multiples of the prime $53$ within the $4$-digit range $32 \\le a \\le 99$.',
          solution:
            'Let $159n + 49 = a^2$. Since $1000 \\le a^2 \\le 9999$ and $a > 0$, we have $32 \\le a \\le 99$.\nSubtract $49 = 7^2$ from both sides and factor:\n$$159n = a^2 - 7^2 = (a - 7)(a + 7).$$\nSince $159 = 3 \\times 53$ and $53$ is prime, $53$ must divide either $a - 7$ or $a + 7$. For $32 \\le a \\le 99$, the possible values of $a$ are:\n- $a - 7 = 53 \\implies a = 60$: then $(a - 7)(a + 7) = 53 \\times 67$, which is not divisible by $3$ ($67$ is not a multiple of $3$).\n- $a + 7 = 53 \\implies a = 46$: then $(a - 7)(a + 7) = 39 \\times 53 = 3 \\times 13 \\times 53 = 159 \\times 13$, giving integer $n = 13$.\n- $a + 7 = 106 \\implies a = 99$: then $(a - 7)(a + 7) = 92 \\times 106$, which is not divisible by $3$ ($92$ and $106$ are not multiples of $3$).\n\nCheck: $159(13) + 49 = 2067 + 49 = 2116 = 46^2$, a four-digit perfect square.\nHence, $n = 13$.',
          rubric: [
            { code: 'M2', text: 'Factors $53 \\times 3n = (a - 7)(a + 7)$ for $32 \\le a \\le 99$ and tests $53 \\mid (a \\pm 7)$.' },
            { code: 'A2', text: 'Finds $a = 46$ and $n = 13$.' }
          ]
        }
      ]
    }
  ]
};
