/**
 * Paket Soal: SASMO 2020 Grade 9 (Secondary 3)
 * Sumber: Singapore and Asian Schools Math Olympiad 2020, Secondary 3 (Grade 9) Contest (2020-SASMO-G9.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 12, 15, 23, dan 25 dilengkapi diagram hasil crop .webp.
 */
export default {
  id: 'sasmo-2020-g9',
  slug: 'sasmo-2020-grade-9',
  subject: 'olimpiade-mat',
  grade: 9,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2020 Grade 9 (Secondary 3): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp9-bab1-spldv',
    'smp9-bab2-bangun-ruang',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2020 Grade 9 (Secondary 3)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (original time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 12, 15, 23, and 25 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2020-SASMO-G9.pdf',
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
            'Find the value of the following.\n$$2020 \\times 2020 - 2020 \\times 20 + 2020$$\n\nA. $2020$\nB. $4042020$\nC. $4040000$\nD. $4024020$\nE. None of the above',
          answer: 'B. $4042020$',
          principle:
            'Factor out the common term $2020$ across all three terms before multiplying.',
          solution:
            'Factor $2020$ from every term:\n$$2020 \\times 2020 - 2020 \\times 20 + 2020 = 2020 \\times (2020 - 20 + 1)$$\n$$= 2020 \\times 2001 = 2020 \\times (2000 + 1) = 4040000 + 2020 = 4042020.$$',
          rubric: [
            { code: 'M1', text: 'Factors out $2020$ to rewrite the expression as $2020 \\times (2020 - 20 + 1) = 2020 \\times 2001$.' },
            { code: 'A1', text: 'Computes $4042020$, option B.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Which of the following has the largest value?\n\nA. $2020$\nB. $\\frac{2020^{20}}{2020^{18}}$\nC. $4080400$\nD. $\\frac{2020^{20} - 2020}{2020^{18} - 2020}$\nE. Options B and C',
          answer: 'D. $\\frac{2020^{20} - 2020}{2020^{18} - 2020}$',
          principle:
            'Simplify each expression to powers of $2020$, and decompose fraction D by polynomial division to compare it against $2020^2$.',
          solution:
            'Evaluate each option:\n- **A:** $2020$.\n- **B:** $\\frac{2020^{20}}{2020^{18}} = 2020^2 = 4080400$.\n- **C:** $4080400$ (equal to B).\n- **D:** Cancel $2020$ from numerator and denominator, then split off $2020^2$:\n$$\\frac{2020^{20} - 2020}{2020^{18} - 2020} = \\frac{2020^{19} - 1}{2020^{17} - 1} = \\frac{2020^2(2020^{17} - 1) + (2020^2 - 1)}{2020^{17} - 1} = 2020^2 + \\frac{2020^2 - 1}{2020^{17} - 1}.$$\n\nSince $\\frac{2020^2 - 1}{2020^{17} - 1} > 0$, option D is strictly greater than $2020^2 = 4080400$. Hence D has the largest value.',
          rubric: [
            { code: 'M1', text: 'Evaluates B and C as $2020^2 = 4080400$ and rewrites D as $2020^2 + \\frac{2020^2 - 1}{2020^{17} - 1}$.' },
            { code: 'A1', text: 'Concludes D is strictly largest, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'In Mathematics, the product of the first $n$ positive integers is written as $n! = n \\times (n - 1) \\times \\dots \\times 1$. For example, $2! = 2 \\times 1$ and $7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$. Find the number of consecutive zeros at the end of $(11! - 10!)$.\n\nA. $1$\nB. $2$\nC. $24$\nD. $26$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Factor out $10!$ first, then count the total exponent of $5$ (paired with abundant factors of $2$) in the factored product.',
          solution:
            'Factor $10!$ from $11! - 10!$:\n$$11! - 10! = 10!(11 - 1) = 10 \\times 10!.$$\nIn $10!$, the number of factors of $5$ is $\\lfloor 10/5 \\rfloor = 2$ (from $5$ and $10$), and there are more than $2$ factors of $2$, so $10!$ ends in $2$ consecutive zeros.\nMultiplying by $10$ contributes one additional factor of $2 \\times 5$, giving $2 + 1 = 3$ consecutive zeros at the end of $11! - 10!$.\nSince $3$ is not among options A–D, the answer is E.',
          rubric: [
            { code: 'M1', text: 'Factors $11! - 10! = 10 \\times 10!$ and counts $2$ trailing zeros from $10!$ plus $1$ from $10$.' },
            { code: 'A1', text: 'Obtains $3$ consecutive zeros, option E.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Find the value of the following expression.\n$$\\frac{2025 \\times (19!)^2 - 5 \\times (19!)^2}{100 \\times 18! \\times 20! + 18! \\times 20!}$$\n\nA. $19$\nB. $2020$\nC. $2025$\nD. $2020 \\times 19!$\nE. None of the above',
          answer: 'A. $19$',
          principle:
            'Factor out $(19!)^2$ in the numerator and $18! \\times 20!$ in the denominator, then express all factorials in terms of $18! \\times 19!$.',
          solution:
            'Factor both the numerator and the denominator:\n$$\\frac{2025 \\times (19!)^2 - 5 \\times (19!)^2}{100 \\times 18! \\times 20! + 18! \\times 20!} = \\frac{(19!)^2 \\times (2025 - 5)}{18! \\times 20! \\times (100 + 1)} = \\frac{19! \\times 19! \\times 2020}{18! \\times 20! \\times 101}.$$\nUse $19! = 19 \\times 18!$ and $20! = 20 \\times 19!$:\n$$= \\frac{(19 \\times 18!) \\times 19! \\times 2020}{18! \\times (20 \\times 19!) \\times 101} = \\frac{19 \\times 2020}{20 \\times 101} = \\frac{19 \\times 2020}{2020} = 19.$$',
          rubric: [
            { code: 'M1', text: 'Factors the numerator and denominator and cancels $18! \\times 19!$ to get $\\frac{19 \\times 2020}{20 \\times 101}$.' },
            { code: 'A1', text: 'Simplifies to $19$, option A.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Which number below is a factor of $91^4 - 1$?\n\nA. $2019$\nB. $2020$\nC. $2021$\nD. $2022$\nE. None of the above',
          answer: 'B. $2020$',
          principle:
            'Apply the difference of squares identity repeatedly to factor $91^4 - 1$ completely into small integers.',
          solution:
            'Factor $91^4 - 1$ using difference of two squares:\n$$91^4 - 1 = (91^2 - 1)(91^2 + 1) = (91 - 1)(91 + 1)(91^2 + 1) = 90 \\times 92 \\times 8282.$$\nNotice that $8282 = 82 \\times 101$ and $90 = 45 \\times 2$ (or $90 \\times 92 = 20 \\times 414$), so:\n$$91^4 - 1 = (20 \\times 101) \\times 414 \\times 82 = 2020 \\times 414 \\times 82.$$\nTherefore, $2020$ is a factor of $91^4 - 1$.',
          rubric: [
            { code: 'M1', text: 'Factors $91^4 - 1 = (91^2 - 1)(91^2 + 1) = 8280 \\times 8282$ and extracts factors $20$ and $101$.' },
            { code: 'A1', text: 'Identifies $2020$ as a factor, option B.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'What is the smallest positive integer that can be expressed as a product of six positive integers such that any two of them are not coprime?\n\nA. $60$\nB. $64$\nC. $360$\nD. $5040$\nE. None of the above',
          answer: 'B. $64$',
          principle:
            'Two positive integers are not coprime if their greatest common divisor is greater than $1$; neither can equal $1$, so each factor is at least $2$.',
          solution:
            'Since $1$ is coprime to every positive integer ($\\gcd(1, k) = 1$ for all $k$), none of the six positive integers can be $1$.\nThus each of the six integers must be at least $2$, which makes their product at least:\n$$2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^6 = 64.$$\nTaking all six integers equal to $2$ satisfies the condition because $\\gcd(2, 2) = 2 > 1$ for any pair. Hence the smallest possible product is $64$.',
          rubric: [
            { code: 'M1', text: 'Notes that $1$ cannot be used since it is coprime to all integers, so each of the six factors is at least $2$.' },
            { code: 'A1', text: 'Obtains $2^6 = 64$, option B.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Four friends have accounts in some social networks. Any two of them use at least one common social network, and no social networks are used by more than two of them. At least how many social networks are used by the friends?\n\nA. $4$\nB. $5$\nC. $6$\nD. $8$\nE. None of the above',
          answer: 'C. $6$',
          principle:
            'Each network has at most $2$ users and therefore connects at most $1$ pair of friends, so the minimum number of networks equals the total number of friend pairs.',
          solution:
            'Among $4$ friends $A, B, C, D$, there are:\n$$\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6\\text{ distinct pairs of friends}.$$\nBecause no social network is used by more than $2$ of the friends, each social network can connect at most $\\binom{2}{2} = 1$ pair of friends.\nSince every pair shares at least one network, there must be at least $6$ social networks.\nThis lower bound of $6$ is achievable by assigning one dedicated network to each pair: $A:\\{1,2,3\\}$, $B:\\{1,4,5\\}$, $C:\\{2,4,6\\}$, $D:\\{3,5,6\\}$.',
          rubric: [
            { code: 'M1', text: 'Counts $\\binom{4}{2} = 6$ pairs of friends and observes each network covers at most $1$ pair.' },
            { code: 'A1', text: 'Verifies achievability and concludes $6$ networks, option C.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'The value of $f(x) = ax^2 + bx + c$ is $0$ when $x = -1$. Given that $f(2) - f(1) = 11$ and $f(3) - f(2) = 15$, what is the value of $a + b + c$?\n\nA. $-3$\nB. $-1$\nC. $1$\nD. $3$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Use the three conditions on $f(x)$ to form a linear system in $a, b, c$ and solve it step by step.',
          solution:
            'Substitute $x = -1, 1, 2, 3$ into $f(x) = ax^2 + bx + c$:\n$$f(-1) = a - b + c = 0 \\qquad (1)$$\n$$f(2) - f(1) = (4a + 2b + c) - (a + b + c) = 3a + b = 11 \\qquad (2)$$\n$$f(3) - f(2) = (9a + 3b + c) - (4a + 2b + c) = 5a + b = 15 \\qquad (3)$$\nSubtract $(2)$ from $(3)$:\n$$2a = 4 \\implies a = 2.$$\nSubstitute $a = 2$ into $(2)$ to get $3(2) + b = 11 \\implies b = 5$. Then $(1)$ gives $c = b - a = 5 - 2 = 3$.\nTherefore:\n$$a + b + c = 2 + 5 + 3 = 10.$$\nSince $10$ is not among options A–D, the answer is E.',
          rubric: [
            { code: 'M1', text: 'Sets up $a - b + c = 0$, $3a + b = 11$, and $5a + b = 15$ and solves $a = 2, b = 5, c = 3$.' },
            { code: 'A1', text: 'Computes $a + b + c = 10$, option E.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'What is the next number in the sequence below?\n$$16, 37, 58, 89, 145, 42, \\ldots$$\n\nA. $20$\nB. $31$\nC. $72$\nD. $96$\nE. None of the above',
          answer: 'A. $20$',
          principle:
            'Test a digit-based rule: each term equals the sum of the squares of the digits of the preceding term.',
          solution:
            'Each term is the sum of the squares of the digits of the previous term:\n$$1^2 + 6^2 = 1 + 36 = 37$$\n$$3^2 + 7^2 = 9 + 49 = 58$$\n$$5^2 + 8^2 = 25 + 64 = 89$$\n$$8^2 + 9^2 = 64 + 81 = 145$$\n$$1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42$$\nFollowing this rule, the next number is:\n$$4^2 + 2^2 = 16 + 4 = 20.$$',
          rubric: [
            { code: 'M1', text: 'Identifies the rule that each term is the sum of squares of the digits of the previous term.' },
            { code: 'A1', text: 'Computes $4^2 + 2^2 = 20$, option A.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'There is one counterfeit coin among $2019$ identical coins. The genuine coins have the same weight while the counterfeit coin is lighter. Andy wants to determine the counterfeit coin using a balance scale. There are no restrictions to the number of coins placed on the pans each time. What is the least number of weighings needed to find the counterfeit coin?\n\nA. $7$\nB. $10$\nC. $11$\nD. $1009$\nE. None of the above',
          answer: 'A. $7$',
          principle:
            'Each balance weighing has $3$ possible outcomes (left lighter, right lighter, or balanced), so $k$ weighings can distinguish at most $3^k$ coins.',
          solution:
            'In each weighing, placing an equal number of coins on the two pans produces one of $3$ outcomes: left pan lighter, right pan lighter, or pans balanced (meaning the counterfeit coin is among the unweighed coins).\nThus, $k$ weighings can distinguish at most $3^k$ coins.\nCompare powers of $3$ with $2019$:\n$$3^6 = 729 < 2019 \\le 2187 = 3^7.$$\nHence $6$ weighings are insufficient, while $7$ weighings suffice by dividing the remaining suspect coins into three groups as evenly as possible (at most $3^{7-i}$ per group after weighing $i$, starting with $673, 673, 673$).\nTherefore, the least number of weighings is $\\lceil \\log_3 2019 \\rceil = 7$.',
          rubric: [
            { code: 'M1', text: 'Uses the $3$-outcome balance bound $3^{k-1} < 2019 \\le 3^k$ with $3^6 = 729$ and $3^7 = 2187$.' },
            { code: 'A1', text: 'Concludes $7$ weighings, option A.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'How many four-digit numbers have digit $1$ but not digit $2$ among its digits?\n\nA. $2248$\nB. $2673$\nC. $2816$\nD. $3528$\nE. None of the above',
          answer: 'A. $2248$',
          principle:
            'Use complementary counting: count all $4$-digit numbers with no digit $2$, then subtract those with neither digit $1$ nor digit $2$.',
          solution:
            'First count all $4$-digit numbers (from $1000$ to $9999$) that do not contain digit $2$:\n- Thousands digit: $8$ choices ($1, 3, 4, 5, 6, 7, 8, 9$).\n- Hundreds, tens, and ones digits: $9$ choices each (all digits except $2$).\n$$\\text{Count without } 2 = 8 \\times 9 \\times 9 \\times 9 = 5832.$$\n\nNext count all $4$-digit numbers that contain neither digit $1$ nor digit $2$:\n- Thousands digit: $7$ choices ($3, 4, 5, 6, 7, 8, 9$).\n- Hundreds, tens, and ones digits: $8$ choices each (all digits except $1$ and $2$).\n$$\\text{Count without } 1 \\text{ or } 2 = 7 \\times 8 \\times 8 \\times 8 = 3584.$$\n\nSubtracting gives the number of $4$-digit numbers containing digit $1$ but not digit $2$:\n$$5832 - 3584 = 2248.$$',
          rubric: [
            { code: 'M1', text: 'Computes $8 \\times 9^3 = 5832$ (no $2$) and $7 \\times 8^3 = 3584$ (neither $1$ nor $2$).' },
            { code: 'A1', text: 'Subtracts $5832 - 3584 = 2248$, option A.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'In the diagram, $\\angle ABC = 90^\\circ$ and $DEFG$ is a square. If $AE = 4$ and $EF = 6$, find the area of quadrilateral $ACGD$.\n\nA. $84$\nB. $75$\nC. $63$\nD. $60$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g9/fig-12.webp',
              alt: 'Right-angled triangle ABC with right angle at bottom-left vertex B and square DEFG having D on side AB, E and F on hypotenuse AC, and G on side BC.',
              caption: 'Right-angled triangle ABC with square DEFG for Question 12.'
            }
          ],
          answer: 'B. $75$',
          principle:
            'Use angle chasing on the right triangles $\\triangle AED$ and $\\triangle GFC$ to show similarity, find $FC$, and compute the area of trapezium $ACGD$.',
          solution:
            'Since $DEFG$ is a square with $EF = 6$, all its sides have length $DE = EF = FG = GD = 6$, and $\\angle AED = \\angle GFC = 90^\\circ$ with $GD \\parallel AC$.\nIn right-angled $\\triangle ABC$, $\\angle EAD + \\angle GCF = 90^\\circ$. Since $\\angle ADE = 90^\\circ - \\angle EAD$, we have $\\angle ADE = \\angle GCF$ and $\\angle EAD = \\angle FGC$.\nThus $\\triangle AED \\sim \\triangle GFC$, giving:\n$$\\frac{AE}{DE} = \\frac{GF}{FC} \\implies \\frac{4}{6} = \\frac{6}{FC} \\implies FC = 9.$$\nHence the total hypotenuse length is:\n$$AC = AE + EF + FC = 4 + 6 + 9 = 19.$$\nSince $GD \\parallel AC$ with perpendicular distance $DE = 6$, quadrilateral $ACGD$ is a trapezium of area:\n$$\\text{Area}(ACGD) = \\frac{GD + AC}{2} \\times DE = \\frac{6 + 19}{2} \\times 6 = 25 \\times 3 = 75.$$',
          rubric: [
            { code: 'M1', text: 'Uses $\\triangle AED \\sim \\triangle GFC$ to find $FC = 9$ and $AC = 19$.' },
            { code: 'A1', text: 'Computes trapezium area $\\frac{6 + 19}{2} \\times 6 = 75$, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Anthony, Judith, Daniel and Edward were born in $1975$, $1976$, $1977$ and $1978$ in the cities of New York, Moscow, Barcelona and Singapore, though not in that order. It is given that:\n- The person born in Barcelona is one year older than the one born in Singapore.\n- Edward was born one year later than the person born in Barcelona.\n- Daniel was born in Moscow.\n- Anthony was born two years later than Edward was.\n\nWhich year was Judith born in?\n\nA. $1975$\nB. $1976$\nC. $1977$\nD. $1978$\nE. Impossible to determine',
          answer: 'A. $1975$',
          principle:
            'Translate "older" into a smaller birth year and chain the consecutive-year clues across the four available years $1975$–$1978$.',
          solution:
            'Let $y(\\text{person})$ or $y(\\text{city})$ denote the birth year (earlier year means older):\n1. From the first two clues, both the person born in Singapore and Edward were born $1$ year after the person born in Barcelona. Hence **Edward** was born in **Singapore**.\n2. From the fourth clue, Anthony was born $2$ years after Edward, who was born $1$ year after the person in Barcelona. Thus:\n$$y(\\text{Anthony}) = y(\\text{Edward}) + 2 = y(\\text{Barcelona}) + 3.$$\n3. Since the four years span only $1975$ to $1978$ (a $3$-year range), this forces:\n   - **Barcelona:** $1975$\n   - **Edward (Singapore):** $1976$\n   - **Anthony:** $1978$ (in **New York**, since Daniel was born in Moscow)\n4. The remaining year $1977$ belongs to **Daniel (Moscow)**, leaving **Judith** as the person born in **Barcelona** in **$1975$**.',
          rubric: [
            { code: 'M1', text: 'Deduces Edward was born in Singapore and spans $y(\\text{Anthony}) = y(\\text{Barcelona}) + 3$ across $1975$–$1978$.' },
            { code: 'A1', text: 'Determines Judith was born in Barcelona in $1975$, option A.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'A convex polyhedron has $48$ edges. Its faces are either quadrilaterals or hexagons. Each vertex is an endpoint of exactly three edges. How many faces does the polyhedron have?\n\nA. $16$\nB. $18$\nC. $20$\nD. $24$\nE. None of the above',
          answer: 'B. $18$',
          principle:
            'Use the handshaking lemma ($3V = 2E$) to find the number of vertices $V$, then apply Euler\'s polyhedron formula $V - E + F = 2$.',
          solution:
            'Every edge connects $2$ vertices, and every vertex meets exactly $3$ edges, so:\n$$3V = 2E = 2 \\times 48 = 96 \\implies V = 32.$$\nFor any convex polyhedron, Euler\'s formula states $V - E + F = 2$, where $F$ is the number of faces:\n$$F = E - V + 2 = 48 - 32 + 2 = 18.$$\n(As a consistency check, $q$ quadrilaterals and $h$ hexagons satisfy $q + h = 18$ and $4q + 6h = 2E = 96$, giving $q = 6$ and $h = 12$.)',
          rubric: [
            { code: 'M1', text: 'Computes $V = \\frac{2 \\times 48}{3} = 32$ and applies Euler\'s formula $F = E - V + 2$.' },
            { code: 'A1', text: 'Obtains $F = 18$ faces, option B.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'In the diagram below, $ABCD$ is a parallelogram and $\\angle ACB = 90^\\circ$. Points $M$ and $N$ are on sides $AB$ and $CD$ such that $AM : MB = CN : ND = 1 : 3$. Given that $AC = MN = 2$, find the area of $ABCD$.\n\nA. $2\\sqrt{3}$\nB. $6$\nC. $4\\sqrt{3}$\nD. $8$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2020-g9/fig-15.webp',
              alt: 'Parallelogram ABCD with diagonal AC and segment MN joining point M on top side AB to point N on bottom side CD.',
              caption: 'Parallelogram ABCD with segments AC and MN for Question 15.'
            }
          ],
          answer: 'C. $4\\sqrt{3}$',
          principle:
            'Translate $MN$ to $CP$ (where $P$ lies on $AB$) to form a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle inside right triangle $\\triangle ACB$.',
          solution:
            'Draw segment $CP$ parallel to $MN$ with $P$ on $AB$. Since $AB \\parallel DC$ and $CP \\parallel MN$, $MNCP$ is a parallelogram, so $MP = NC$ and $CP = MN = 2$.\nFrom $AM : MB = CN : ND = 1 : 3$ and $AB = CD$, we have $AM = CN = \\frac{1}{4}AB$, so:\n$$AP = AM + MP = \\frac{1}{4}AB + \\frac{1}{4}AB = \\frac{1}{2}AB.$$\nThus $P$ is the midpoint of hypotenuse $AB$ of right triangle $\\triangle ACB$ (or equivalently, $CP = AC = 2$ and $\\angle ACB = 90^\\circ$ means the median $CP$ to hypotenuse $AB$ equals half of $AB$, so $AB = 2 \\cdot CP = 4$).\nIn right triangle $\\triangle ACB$ with $AC = 2$ and $AB = 4$, the Pythagorean Theorem gives:\n$$BC = \\sqrt{AB^2 - AC^2} = \\sqrt{4^2 - 2^2} = \\sqrt{12} = 2\\sqrt{3}.$$\nTherefore, the area of parallelogram $ABCD$ is twice the area of $\\triangle ACB$:\n$$\\text{Area}(ABCD) = 2 \\times \\frac{1}{2} \\times AC \\times BC = 2 \\times 2\\sqrt{3} = 4\\sqrt{3}.$$',
          rubric: [
            { code: 'M1', text: 'Draws $CP \\parallel MN$ to show $P$ is the midpoint of $AB$ and finds $AB = 4$ and $BC = 2\\sqrt{3}$.' },
            { code: 'A1', text: 'Computes $\\text{Area}(ABCD) = 2 \\times \\frac{1}{2}(2)(2\\sqrt{3}) = 4\\sqrt{3}$, option C.' }
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
            'Find the value of the following expression.\n$$11^2 - 12^2 + 13^2 - 14^2 + 15^2 - 16^2 + \\cdots + 99^2 - 100^2 + 101^2$$',
          answer: '$5206$',
          principle:
            'Pair consecutive terms as differences of squares $(2k+1)^2 - (2k+2)^2 = -(4k+3)$ to reduce the sum to an arithmetic series.',
          solution:
            'Group the first $90$ terms into $45$ pairs of the form $a^2 - (a+1)^2 = (a - (a+1))(a + (a+1)) = -(a + (a+1))$:\n$$11^2 - 12^2 + 13^2 - 14^2 + \\cdots + 99^2 - 100^2 + 101^2$$\n$$= -(11 + 12) - (13 + 14) - \\cdots - (99 + 100) + 101^2$$\n$$= -(11 + 12 + \\cdots + 100) + 101^2.$$\nUse the arithmetic series formula for the $90$ terms from $11$ to $100$:\n$$11 + 12 + \\cdots + 100 = \\frac{90 \\times (11 + 100)}{2} = 45 \\times 111 = 4995.$$\nSubtracting from $101^2 = 10201$ gives:\n$$10201 - 4995 = 5206.$$',
          rubric: [
            { code: 'M2', text: 'Pairs differences of squares to rewrite the expression as $101^2 - (11 + 12 + \\cdots + 100)$.' },
            { code: 'A2', text: 'Computes $10201 - 4995 = 5206$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'How many digits are there in $5^{2020} \\times 4^{1010}$?',
          answer: '$2021$',
          principle:
            'Rewrite $4^{1010}$ as $2^{2020}$ and combine powers of $5$ and $2$ into a power of $10$.',
          solution:
            'Express $4 = 2^2$ and combine the exponents:\n$$5^{2020} \\times 4^{1010} = 5^{2020} \\times (2^2)^{1010} = 5^{2020} \\times 2^{2020} = (5 \\times 2)^{2020} = 10^{2020}.$$\nIn decimal form, $10^{2020}$ consists of the digit $1$ followed by $2020$ zeros.\nTherefore, it has $1 + 2020 = 2021$ digits.',
          rubric: [
            { code: 'M2', text: 'Simplifies $5^{2020} \\times 4^{1010} = 5^{2020} \\times 2^{2020} = 10^{2020}$.' },
            { code: 'A2', text: 'Determines $10^{2020}$ has $2021$ digits.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'The six-digit number $2X3Y72$ is divisible by $66$. Find the value of $X + Y$.',
          answer: '$10$',
          principle:
            'Since $66 = 2 \\times 3 \\times 11$ with pairwise coprime factors, apply the divisibility rules for $2$, $3$, and $11$.',
          solution:
            'For $\\overline{2X3Y72}$ to be divisible by $66 = 2 \\times 3 \\times 11$, it must be divisible by $2$, $3$, and $11$:\n1. **Divisibility by $2$:** Already satisfied because the last digit is $2$.\n2. **Divisibility by $11$:** The alternating sum of digits must be a multiple of $11$:\n$$(2 + 3 + 7) - (X + Y + 2) = 10 - (X + Y).$$\nSince $X$ and $Y$ are digits ($0 \\le X + Y \\le 18$), we have $-8 \\le 10 - (X + Y) \\le 10$. The only multiple of $11$ in $[-8, 10]$ is $0$, so:\n$$10 - (X + Y) = 0 \\implies X + Y = 10.$$\n3. **Divisibility by $3$:** Check the digit sum $2 + X + 3 + Y + 7 + 2 = 14 + (X + Y) = 14 + 10 = 24$, which is indeed divisible by $3$ (for example, $X = 1, Y = 9$ gives $213972 = 66 \\times 3242$).\n\nTherefore, $X + Y = 10$.',
          rubric: [
            { code: 'M2', text: 'Applies the divisibility rule for $11$ to obtain $10 - (X + Y) \\equiv 0 \\pmod{11}$ within $0 \\le X + Y \\le 18$.' },
            { code: 'A2', text: 'Verifies divisibility by $2$ and $3$ and obtains $X + Y = 10$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Take a $2$-digit number, multiply its digits, then multiply the digits of the obtained product and continue the process until you get a one-digit number. How many two-digit numbers will produce zero at the end of this process?',
          answer: '$24$',
          principle:
            'Work backwards in stages from $0$: first find $2$-digit numbers whose digit product is $0$, then $2$-digit numbers whose digit product reaches the previous stage.',
          solution:
            'Count the $2$-digit numbers by the number of multiplication steps needed to reach $0$:\n1. **Reach $0$ in $1$ step:** One of the digits must be $0$, so the tens digit is $1$–$9$ and the ones digit is $0$:\n$$10, 20, 30, 40, 50, 60, 70, 80, 90 \\quad (9\\text{ numbers}).$$\n2. **Reach Stage 1 in $1$ step:** The product of two nonzero digits $a \\times b$ must equal a multiple of $10$ ($10, 20, 30, 40$). Thus one digit is $5$ and the other is even ($2, 4, 6, 8$):\n$$25, 52, 45, 54, 56, 65, 58, 85 \\quad (8\\text{ numbers}).$$\n3. **Reach Stage 2 in $1$ step:** Factor each number from Stage 2 into two single-digit factors:\n   - $25 = 5 \\times 5 \\implies 55$\n   - $45 = 5 \\times 9 \\implies 59, 95$\n   - $54 = 6 \\times 9 \\implies 69, 96$\n   - $56 = 7 \\times 8 \\implies 78, 87$\n   - ($52 = 4 \\times 13$, $65 = 5 \\times 13$, $58 = 2 \\times 29$, $85 = 5 \\times 17$ have prime factors $> 9$, so no single-digit factorizations exist.)\n$$55, 59, 95, 69, 96, 78, 87 \\quad (7\\text{ numbers}).$$\n4. **Reach Stage 3:** Checking prime factorizations ($55 = 5 \\times 11$, $59$ prime, $95 = 5 \\times 19$, $69 = 3 \\times 23$, $96 = 2^5 \\times 3$, $78 = 2 \\times 3 \\times 13$, $87 = 3 \\times 29$), none can be written as a product of two single-digit integers.\n\nIn total, there are $9 + 8 + 7 = 24$ such two-digit numbers.',
          rubric: [
            { code: 'M2', text: 'Works backwards through the three stages ($9$ numbers with $0$, $8$ yielding multiples of $10$, and $7$ yielding Stage 2).' },
            { code: 'A2', text: 'Sums $9 + 8 + 7 = 24$ two-digit numbers.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Find the value of $(a + 2b)(2b + 3c)(a + 3c) + 6abc$ where $a + 2b + 3c = 0$.',
          answer: '$0$',
          principle:
            'Use the constraint $a + 2b + 3c = 0$ to express each binomial factor as a single monomial.',
          solution:
            'From $a + 2b + 3c = 0$, rewrite each two-term sum:\n$$a + 2b = -3c, \\qquad 2b + 3c = -a, \\qquad a + 3c = -2b.$$\nSubstitute these into the expression:\n$$(a + 2b)(2b + 3c)(a + 3c) + 6abc = (-3c)(-a)(-2b) + 6abc$$\n$$= -6abc + 6abc = 0.$$',
          rubric: [
            { code: 'M2', text: 'Substitutes $a + 2b = -3c$, $2b + 3c = -a$, and $a + 3c = -2b$.' },
            { code: 'A2', text: 'Simplifies $-6abc + 6abc = 0$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'Given that $P(x) = x^5 - 2021x^4 + 2021x^3 - 2021x^2 + 2021x - 1$, what is the value of $P(2020)$?',
          answer: '$2019$',
          principle:
            'Split each coefficient $2021 = 2020 + 1$ so that adjacent terms telescope when $x = 2020$.',
          solution:
            'Rewrite $2021 = 2020 + 1$ in every middle term and group factors of $(x - 2020)$:\n$$P(x) = x^5 - (2020 + 1)x^4 + (2020 + 1)x^3 - (2020 + 1)x^2 + (2020 + 1)x - 1$$\n$$= x^4(x - 2020) - x^3(x - 2020) + x^2(x - 2020) - x(x - 2020) + x - 1.$$\nEvaluate at $x = 2020$, where every $(x - 2020)$ factor vanishes:\n$$P(2020) = 0 - 0 + 0 - 0 + 2020 - 1 = 2019.$$',
          rubric: [
            { code: 'M2', text: 'Splits $2021 = 2020 + 1$ to rewrite $P(x)$ in terms of $(x - 2020)$ plus $(x - 1)$.' },
            { code: 'A2', text: 'Evaluates $P(2020) = 2020 - 1 = 2019$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits.\n$$\\begin{array}{crrrrrr} & C & I & R & C & L & E \\\\ & C & I & R & C & L & E \\\\ + & C & I & R & C & L & E \\\\ \\hline & S & P & H & E & R & E \\end{array}$$\nFind the value of the sum $S + P + H + E + R + E$.',
          answer: '$27$',
          principle:
            'Rewrite the repeated addition as $3 \\times \\overline{CIRCLE} = \\overline{SPHERE}$ and deduce digits from the ones column and carries.',
          solution:
            'Rewrite the sum as a multiplication:\n$$3 \\times \\overline{CIRCLE} = \\overline{SPHERE}.$$\n1. **Ones column ($3E \\equiv E \\pmod{10}$):** $E \\in \\{0, 5\\}$.\n   - If $E = 0$, there is no carry into the tens column, so $3L \\equiv R \\pmod{10}$ and $3C \\equiv 0 \\pmod{10}$ in the hundreds column (since $E = 0$), forcing $C = 0 = E$ or a carry of $1$ or $2$ from $3L$ giving $3C + 1 \\equiv 0$ or $3C + 2 \\equiv 0 \\pmod{10}$. Checking $C \\in \\{1, 2, 3\\}$: $3(3)+1 = 10$ ($L$ gives carry $1$, so $L \\in \\{4,5,6\\}$), $3(1)+2 = 5$ (not $0$), $3(2)+2 = 8$ (not $0$). Only $C = 3, L \\in \\{4, 5, 6\\}$ makes $3C + 1 = 10$, which forces $S = 9$ and leaves $3R + 1$ in the thousands column; however $C = 3$ and $I$ would require $3I + c_4 \\ge 10$ to carry $1$ into $3(3) = 9$, making $S = 10$ (7 digits, impossible). Thus $E = 5$ (carry $1$ to tens).\n2. **Leading digit $C$:** Since $3 \\times \\overline{CIRCLE}$ is a $6$-digit number, $C \\in \\{1, 2, 3\\}$.\n   - In the hundreds column, $3C + c_2 \\equiv E = 5 \\pmod{10}$, where the carry $c_2 \\in \\{0, 1, 2\\}$ from the tens column ($3L + 1$). None of $3(3) + c_2 = 9 + c_2$ or $3(2) + c_2 = 6 + c_2$ can end in $5$ for $c_2 \\in \\{0, 1, 2\\}$.\n   - Hence $C = 1$, and $3(1) + c_2 = 5$ forces $c_2 = 2$.\n3. **Tens column ($3L + 1 = 20 + R$):** Since $c_2 = 2$, $3L + 1 \\ge 20 \\implies L \\in \\{7, 8, 9\\}$.\n   - $L = 7$: $3(7) + 1 = 22 \\implies R = 2$, then thousands column gives $3(2) + 0 = 6 = H$, and $3 \\times \\overline{1I2175} = \\overline{SP6525}$, requiring $I$ from $\\{0,3,4,8,9\\}$ so $3I = \\overline{\\_P}$ has distinct digits: $I=0 \\implies P=0$, $I=3 \\implies P=9, S=3$, $I=4 \\implies P=2=R$, $I=8 \\implies P=4, S=5=E$, $I=9 \\implies P=7=L$. None works!\n   - $L = 8$: $3(8) + 1 = 25 \\implies R = 5 = E$ (invalid).\n   - $L = 9$: $3(9) + 1 = 28 \\implies R = 8$. Then the thousands column gives $3(8) + 0 = 24 \\implies H = 4$ with carry $2$ into the ten-thousands column.\n4. **Remaining digits ($I, S, P$):** Now $3I + 2 = 10c_5 + P$ and $3(1) + c_5 = S$. Since $C = 1, H = 4, E = 5, R = 8, L = 9$, the remaining digits for $\\{I, S, P\\}$ are $\\{0, 2, 3, 6, 7\\}$.\n   - Note $c_5 \\in \\{0, 1, 2\\}$, so $S \\in \\{3, 4, 5\\}$. Since $H = 4$ and $E = 5$, we must have $S = 3$ and $c_5 = 0$.\n   - With $c_5 = 0$, $3I + 2 < 10 \\implies I \\in \\{0, 2\\}$. Trying $I = 2$ gives $P = 8 = R$ (invalid); trying $I = 0$ gives $P = 2$.\n\nCheck: $3 \\times 108195 = 324585$, using $8$ distinct digits ($C=1, I=0, R=8, L=9, E=5, S=3, P=2, H=4$).\nTherefore:\n$$S + P + H + E + R + E = 3 + 2 + 4 + 5 + 8 + 5 = 27.$$',
          rubric: [
            { code: 'M2', text: 'Deduces $E = 5, C = 1, L = 9, R = 8, H = 4, S = 3, I = 0, P = 2$, verifying $3 \\times 108195 = 324585$.' },
            { code: 'A2', text: 'Computes $S + P + H + E + R + E = 27$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In how many ways can the vertices in the diagram below be coloured with $3$ colours such that any two neighbouring vertices are not coloured with the same colour?',
          figures: [
            {
              src: '/papers/sasmo-2020-g9/fig-23.webp',
              alt: 'Connected graph formed by a four-cycle on the left, a triangle at the bottom, and a branching tail on the right, all meeting at one central articulation vertex.',
              caption: 'Graph of vertices and edges to be 3-coloured for Question 23.'
            }
          ],
          answer: '$1152$',
          principle:
            'Decompose the graph at the shared central articulation vertex into three independent pieces (a $4$-cycle, a $3$-cycle, and a $5$-vertex tree tail) and multiply their conditional colouring counts.',
          solution:
            'Call the central vertex shared by the left $4$-cycle, the bottom triangle, and the right tree branch $A$. There are $3$ choices for the colour of $A$. Once the colour of $A$ is fixed (say, red), the three branches attached to $A$ can be coloured independently:\n1. **Left $4$-cycle ($A$–$B$–$D$–$C$–$A$):**\n   - Each of the two neighbours $B$ and $C$ of $A$ has $2$ choices (blue or green).\n   - If $B$ and $C$ have the **same** colour ($2$ ways: both blue or both green), then $D$ has $2$ choices (any colour except that of $B$ and $C$), giving $2 \\times 2 = 4$ ways.\n   - If $B$ and $C$ have **different** colours ($2$ ways: blue/green or green/blue), then $D$ is forced to be red ($1$ choice), giving $2 \\times 1 = 2$ ways.\n   - Total for the $4$-cycle: $4 + 2 = 6$ ways.\n2. **Bottom triangle ($A$–$E$–$F$–$A$):**\n   - Neighbour $E$ has $2$ choices (not red), and $F$ must differ from both $A$ and $E$, leaving $1$ choice.\n   - Total for the triangle: $2 \\times 1 = 2$ ways.\n3. **Right tree branch ($5$ vertices attached to $A$):**\n   - Moving outwards along the tree from $A$ (first to the vertex adjacent to $A$, then along each branch to the remaining $4$ vertices), each of the $5$ vertices has exactly $1$ already-coloured parent and thus $2$ valid colour choices.\n   - Total for the tree branch: $2^5 = 32$ ways.\n\nBy the multiplication principle, the total number of valid $3$-colourings is:\n$$3 \\times 6 \\times 2 \\times 32 = 1152.$$',
          rubric: [
            { code: 'M2', text: 'Fixes $3$ choices for the central vertex and finds $6$, $2$, and $2^5 = 32$ ways for the $4$-cycle, triangle, and tree tail.' },
            { code: 'A2', text: 'Computes $3 \\times 6 \\times 2 \\times 32 = 1152$ colourings.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Let $T_1 = 1$, $T_2 = 1 + \\frac{1}{1}$, $T_3 = 1 + \\frac{1}{1 + \\frac{1}{1}}$, $\\ldots$, $T_n = 1 + \\frac{1}{T_{n-1}}$. It is given that $T_n$ can be expressed as a fraction in its simplest form, $T_n = \\frac{P_n}{Q_n}$, where $P_n$ and $Q_n$ are positive coprime integers. How many numbers among $P_1, P_2, P_3, \\ldots, P_{2019}$ are odd?',
          answer: '$1346$',
          principle:
            'Compute the first few terms to identify $P_n$ and $Q_n$ as consecutive Fibonacci numbers, then determine the repeating parity cycle of $P_n$.',
          solution:
            'Compute the first several terms in simplest form:\n$$T_1 = \\frac{1}{1}, \\quad T_2 = 1 + \\frac{1}{1} = \\frac{2}{1}, \\quad T_3 = 1 + \\frac{1}{2/1} = \\frac{3}{2}, \\quad T_4 = 1 + \\frac{2}{3} = \\frac{5}{3}, \\quad T_5 = 1 + \\frac{3}{5} = \\frac{8}{5}.$$\nIn general, if $T_{n-1} = \\frac{P_{n-1}}{Q_{n-1}}$ in lowest terms, then:\n$$T_n = 1 + \\frac{Q_{n-1}}{P_{n-1}} = \\frac{P_{n-1} + Q_{n-1}}{P_{n-1}}.$$\nSince $\\gcd(P_{n-1}, Q_{n-1}) = 1$, we also have $\\gcd(P_{n-1} + Q_{n-1}, P_{n-1}) = \\gcd(Q_{n-1}, P_{n-1}) = 1$, so the fraction is already in simplest form. Thus $Q_n = P_{n-1}$ and $P_n = P_{n-1} + P_{n-2}$ for $n \\ge 3$ (with $P_1 = 1, P_2 = 2$).\n\nTrack the parity of $P_n$:\n- $P_1 = 1$ (odd), $P_2 = 2$ (even), $P_3 = 3$ (odd),\n- $P_4 = 5$ (odd), $P_5 = 8$ (even), $P_6 = 13$ (odd).\n\nBecause $\\text{odd} + \\text{even} = \\text{odd}$ and $\\text{odd} + \\text{odd} = \\text{even}$, the parity cycle $(\\text{odd}, \\text{even}, \\text{odd})$ of length $3$ repeats indefinitely, with $2$ odd numbers in every block of $3$ terms.\nSince $2019 = 3 \\times 673$ is divisible by $3$, the number of odd terms among $P_1, \\ldots, P_{2019}$ is:\n$$673 \\times 2 = 1346.$$',
          rubric: [
            { code: 'M2', text: 'Establishes $P_n = P_{n-1} + P_{n-2}$ with $\\gcd(P_n, Q_n) = 1$ and finds the period-$3$ parity cycle (odd, even, odd).' },
            { code: 'A2', text: 'Computes $2019 \\div 3 \\times 2 = 1346$ odd numerators.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the diagram below, there are $6$ touching circles with centres in $A$, $B$, $C$, $D$, $E$ and $F$. It is given that $ABCDEF$ is a regular hexagon and $AB = 4$. $PQR$ is a triangle such that each of its sides touches three of the circles. Find the square of the length of $PQ$.',
          figures: [
            {
              src: '/papers/sasmo-2020-g9/fig-25.webp',
              alt: 'Equilateral triangle PQR enclosing six touching circles whose centres form a regular hexagon ABCDEF, with each triangle side tangent to three circles.',
              caption: 'Regular hexagon ABCDEF of circle centres inside triangle PQR for Question 25.'
            }
          ],
          answer: '$300$',
          principle:
            'Use the $3$-fold symmetry of the regular hexagon to find the radii of the alternating small and large circles, then compute the side length of equilateral triangle $\\triangle PQR$.',
          solution:
            'By the $120^\\circ$ rotational symmetry of regular hexagon $ABCDEF$ and the $3$-fold tangency condition, $\\triangle PQR$ is an equilateral triangle, the three circles centred at $A, C, E$ share a smaller radius $r$, and the three circles centred at $B, D, F$ share a larger radius $R$.\nSince adjacent circles touch externally and the hexagon has side length $AB = 4$:\n$$R + r = ED = 4.$$\nDrop perpendiculars $EN$ and $DM$ from $E$ and $D$ to side $QR$ (with $N$ and $M$ on $QR$), so $EN = r$ and $DM = R$. Also drop perpendicular $EL$ from $E$ to $DM$ (so $EL \\parallel QR$ and $LM = EN = r$).\nBecause $ABCDEF$ is a regular hexagon with $CD \\perp QR$, we have $\\angle CDE = 120^\\circ$ and $\\angle EDL = 180^\\circ - 120^\\circ = 60^\\circ$. In right triangle $\\triangle ELD$:\n$$DL = ED \\cos 60^\\circ = \\frac{ED}{2} = 2, \\qquad NM = EL = ED \\sin 60^\\circ = 4 \\times \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}.$$\nExpress $DL$ in terms of $R$ and $r$:\n$$DL = DM - LM = R - r = 2.$$\nSolving $R + r = 4$ and $R - r = 2$ gives $R = 3$ and $r = 1$.\n\nNext, $D$ lies on the angle bisector of $\\angle PQR = 60^\\circ$ because circle $D$ touches both $QR$ and $PQ$. Thus $\\angle DQM = 30^\\circ$, and in right triangle $\\triangle DMQ$:\n$$MQ = \\frac{DM}{\\tan 30^\\circ} = \\sqrt{3}\\,R = 3\\sqrt{3}.$$\nBy symmetry, $N$ is the midpoint of $QR$, so:\n$$QR = 2(NM + MQ) = 2(2\\sqrt{3} + 3\\sqrt{3}) = 10\\sqrt{3}.$$\nSince $\\triangle PQR$ is equilateral, $PQ = QR = 10\\sqrt{3}$, and the square of its length is:\n$$PQ^2 = (10\\sqrt{3})^2 = 300.$$',
          rubric: [
            { code: 'M2', text: 'Finds the alternating circle radii $R = 3, r = 1$ using $R + r = 4$ and $R - r = 2$, plus $NM = 2\\sqrt{3}$ and $MQ = 3\\sqrt{3}$.' },
            { code: 'A2', text: 'Computes $PQ = 10\\sqrt{3}$ and $PQ^2 = 300$.' }
          ]
        }
      ]
    }
  ]
};
