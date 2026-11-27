/**
 * Paket Soal: SASMO 2019 Grade 9 (Secondary 3)
 * Sumber: Singapore and Asian Schools Math Olympiad 2019, Secondary 3 (Grade 9) Contest (2019-SASMO-G9.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 13, 15, dan 22 dilengkapi diagram hasil crop .webp.
 */
export default {
  id: 'sasmo-2019-g9',
  slug: 'sasmo-2019-grade-9',
  subject: 'olimpiade-mat',
  grade: 9,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic:
    'SASMO 2019 Grade 9 (Secondary 3): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'smp9-bab1-spldv',
    'smp9-bab2-bangun-ruang',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2019 Grade 9 (Secondary 3)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (original time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 13, 15, and 22 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2019-SASMO-G9.pdf',
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
            'Evaluate\n$$-\\frac{1}{4} \\times 2019.625 - 0.625 + 0.75 \\times 2019.625 + \\frac{1}{2} \\times 2019.625$$\n\nA. $2019$\nB. $2019.625$\nC. $2020$\nD. $-2019$\nE. None of the above',
          answer: 'A. $2019$',
          principle:
            'Factor out the common multiplier $2019.625$ across the terms before subtracting $0.625$.',
          solution:
            'Group the terms containing $2019.625$ and factor it out:\n$$-\\frac{1}{4} \\times 2019.625 - 0.625 + 0.75 \\times 2019.625 + \\frac{1}{2} \\times 2019.625$$\n$$= 2019.625 \\times \\left(-\\frac{1}{4} + 0.75 + \\frac{1}{2}\\right) - 0.625$$\nSince $-0.25 + 0.75 + 0.5 = 1$, this simplifies to:\n$$2019.625 \\times 1 - 0.625 = 2019.$$',
          rubric: [
            { code: 'M1', text: 'Factors out $2019.625$ and sums the coefficients $-\\frac{1}{4} + 0.75 + \\frac{1}{2} = 1$.' },
            { code: 'A1', text: 'Computes $2019.625 - 0.625 = 2019$, option A.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Let $x$ be a positive integer whose prime factors are $5$ and $11$ only. If $x$ has exactly $6$ different positive integer factors, what is the smallest value of $x$?\n\nA. $110$\nB. $605$\nC. $165$\nD. $275$\nE. None of the above',
          answer: 'D. $275$',
          principle:
            'For $x = p^a q^b$ with distinct primes $p, q$, the total number of positive factors is $(a + 1)(b + 1)$.',
          solution:
            'Write $x = 5^a \\times 11^b$ with integers $a, b \\ge 1$. The number of positive integer factors is:\n$$(a + 1)(b + 1) = 6.$$\nSince $a + 1 \\ge 2$ and $b + 1 \\ge 2$, the factor pairs of $6$ give $(a, b) = (2, 1)$ or $(1, 2)$.\nThus the possible values of $x$ are:\n$$5^2 \\times 11 = 275 \\quad \\text{and} \\quad 5 \\times 11^2 = 605.$$\nThe smallest value of $x$ is $275$.',
          rubric: [
            { code: 'M1', text: 'Uses $(a + 1)(b + 1) = 6$ to identify the two candidates $5^2 \\times 11$ and $5 \\times 11^2$.' },
            { code: 'A1', text: 'Finds the smaller value $275$, option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Suppose $-11 \\le y + 3 \\le 3$ and $0 < x < 8$. What is the greatest possible value of $xy$?\n\nA. $112$\nB. $24$\nC. $0$\nD. $98$\nE. None of the above',
          answer: 'C. $0$',
          principle:
            'Determine the sign of each variable from its inequality bounds before maximizing the product.',
          solution:
            'Subtract $3$ from all parts of $-11 \\le y + 3 \\le 3$:\n$$-14 \\le y \\le 0.$$\nSince $x > 0$ and $y \\le 0$, their product satisfies $xy \\le 0$ for all valid $x$ and $y$.\nThe maximum value $xy = 0$ is achieved by taking $y = 0$ (with any $x \\in (0, 8)$).',
          rubric: [
            { code: 'M1', text: 'Solves the inequality for $y$ to get $-14 \\le y \\le 0$ and notes $x > 0$.' },
            { code: 'A1', text: 'Concludes the greatest value of $xy$ is $0$, option C.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Which of the following is true?\n\nA. $\\sqrt{81} = \\pm 9$\nB. $(x^{12})^{18} = x^{30}$\nC. $5x^{-1} = \\frac{1}{5x}$\nD. $-\\frac{2(-x+1)(x+1)}{32} = \\frac{1-x^2}{-2^4}$\nE. None of the above',
          answer: 'D. $-\\frac{2(-x+1)(x+1)}{32} = \\frac{1-x^2}{-2^4}$',
          principle:
            'Check the principal square root convention, exponent laws, and difference-of-squares algebraic simplification.',
          solution:
            'Evaluate each option:\n- **A is false:** $\\sqrt{81}$ denotes the principal (non-negative) square root, so $\\sqrt{81} = 9$.\n- **B is false:** $(x^{12})^{18} = x^{12 \\times 18} = x^{216} \\neq x^{30}$.\n- **C is false:** $5x^{-1} = \\frac{5}{x} \\neq \\frac{1}{5x}$.\n- **D is true:** Since $(-x + 1)(x + 1) = (1 - x)(1 + x) = 1 - x^2$ and $32 = 2 \\times 16 = 2 \\times 2^4$, we have:\n$$-\\frac{2(-x+1)(x+1)}{32} = -\\frac{2(1 - x^2)}{32} = -\\frac{1 - x^2}{16} = \\frac{1 - x^2}{-2^4}.$$',
          rubric: [
            { code: 'M1', text: 'Eliminates A, B, and C using radical and exponent rules, and expands $(-x+1)(x+1) = 1 - x^2$.' },
            { code: 'A1', text: 'Verifies identity D, option D.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Let $A, M, N, P, S$ and $W$ be real numbers such that:\n$$M = S^1 \\times W^2 \\times A^3 \\times P^4$$\n$$N = P^1 \\times A^2 \\times W^3 \\times S^4$$\nSuppose $W \\times A \\times S \\times P = (1331)^{\\frac{1}{15}}$, what is the value of $M \\times N$?\n\nA. $11$\nB. $21$\nC. $1331$\nD. Insufficient data\nE. None of the above',
          answer: 'A. $11$',
          principle:
            'Multiply $M$ and $N$ to combine matching bases, revealing a uniform fifth power of $W \\times A \\times S \\times P$.',
          solution:
            'Multiply the two given expressions:\n$$M \\times N = (S^1 \\times W^2 \\times A^3 \\times P^4)(P^1 \\times A^2 \\times W^3 \\times S^4)$$\nCombine the exponents of each variable:\n$$M \\times N = W^{2+3} \\times A^{3+2} \\times S^{1+4} \\times P^{4+1} = (W \\times A \\times S \\times P)^5.$$\nSubstituting $W \\times A \\times S \\times P = 1331^{\\frac{1}{15}}$ gives:\n$$M \\times N = \\left(1331^{\\frac{1}{15}}\\right)^5 = 1331^{\\frac{1}{3}} = \\sqrt[3]{1331} = 11.$$',
          rubric: [
            { code: 'M1', text: 'Combines exponents to express $M \\times N = (W \\times A \\times S \\times P)^5$.' },
            { code: 'A1', text: 'Evaluates $(1331^{\\frac{1}{15}})^5 = 1331^{\\frac{1}{3}} = 11$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'Which of the following is NOT true about a gradient (or slope)?\n\nA. If a line is horizontal, then its gradient is zero.\nB. If a line has a negative gradient and the other line has a positive gradient, then these $2$ lines intersect at exactly one point.\nC. A line with gradient $1$ forms a $45^\\circ$ angle together with the $x$-axis.\nD. If $m_1$ and $m_2$ are gradients of lines such that $m_1 = -m_2$, then the lines are parallel.\nE. None of the above',
          answer: 'D. If $m_1$ and $m_2$ are gradients of lines such that $m_1 = -m_2$, then the lines are parallel.',
          principle:
            'Two non-vertical lines in the plane are parallel if and only if their gradients are equal ($m_1 = m_2$).',
          solution:
            'Examine each statement:\n- **A is true:** A horizontal line has zero vertical change ($\\Delta y = 0$), so its gradient is $0$.\n- **B is true:** Lines with unequal gradients (one negative, one positive) are not parallel, so they intersect at exactly one point.\n- **C is true:** Gradient $1 = \\tan 45^\\circ$, so the line makes a $45^\\circ$ angle with the $x$-axis.\n- **D is NOT true:** Parallel lines must have equal gradients ($m_1 = m_2$). When $m_1 = -m_2 \\neq 0$, one line slopes upward and the other slopes downward, so they intersect rather than being parallel.',
          rubric: [
            { code: 'M1', text: 'Recalls that parallel lines require equal gradients $m_1 = m_2$, not $m_1 = -m_2$.' },
            { code: 'A1', text: 'Identifies statement D as false, option D.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Assuming the list below has a mode, what is the greatest difference between the median and mode?\n$$\\{19, X, 13, 11, 23, 17\\}$$\n\nA. $4$\nB. $5$\nC. $6$\nD. $12$\nE. None of the above',
          answer: 'B. $5$',
          principle:
            'For the list to have a mode, $X$ must duplicate one of the five existing values; test all five possibilities.',
          solution:
            'For the $6$-element list $\\{11, 13, 17, 19, 23, X\\}$ to have a mode, $X$ must equal one of $11, 13, 17, 19,$ or $23$ (and then $X$ is the mode).\nCompute the median (average of the $3$rd and $4$th ordered values) and $|\\text{median} - \\text{mode}|$ for each case:\n- $X = 11$: ordered list $11, 11, 13, 17, 19, 23 \\implies \\text{median} = \\frac{13+17}{2} = 15$, difference $= |15 - 11| = 4$.\n- $X = 13$: ordered list $11, 13, 13, 17, 19, 23 \\implies \\text{median} = \\frac{13+17}{2} = 15$, difference $= |15 - 13| = 2$.\n- $X = 17$: ordered list $11, 13, 17, 17, 19, 23 \\implies \\text{median} = \\frac{17+17}{2} = 17$, difference $= |17 - 17| = 0$.\n- $X = 19$: ordered list $11, 13, 17, 19, 19, 23 \\implies \\text{median} = \\frac{17+19}{2} = 18$, difference $= |18 - 19| = 1$.\n- $X = 23$: ordered list $11, 13, 17, 19, 23, 23 \\implies \\text{median} = \\frac{17+19}{2} = 18$, difference $= |18 - 23| = 5$.\n\nThus the greatest difference between the median and mode is $5$.',
          rubric: [
            { code: 'M1', text: 'Evaluates the median and $|\\text{median} - \\text{mode}|$ for the candidate values of $X \\in \\{11, 13, 17, 19, 23\\}$.' },
            { code: 'A1', text: 'Finds the maximum difference $5$ when $X = 23$, option B.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Which of the following fractions is the largest?\n\nA. $\\frac{654321}{654322}$\nB. $\\frac{65432}{65433}$\nC. $\\frac{6543}{6544}$\nD. $\\frac{654}{655}$\nE. $\\frac{65}{66}$',
          answer: 'A. $\\frac{654321}{654322}$',
          principle:
            'Rewrite each fraction of the form $\\frac{n}{n+1}$ as $1 - \\frac{1}{n+1}$; the largest fraction has the smallest complement $\\frac{1}{n+1}$.',
          solution:
            'Express each fraction as $1$ minus a unit fraction:\n$$\\frac{654321}{654322} = 1 - \\frac{1}{654322}, \\quad \\frac{65432}{65433} = 1 - \\frac{1}{65433}, \\quad \\frac{6543}{6544} = 1 - \\frac{1}{6544},$$\n$$\\frac{654}{655} = 1 - \\frac{1}{655}, \\quad \\frac{65}{66} = 1 - \\frac{1}{66}.$$\nBecause $\\frac{1}{654322}$ is the smallest subtracted fraction, $1 - \\frac{1}{654322} = \\frac{654321}{654322}$ is the largest.',
          rubric: [
            { code: 'M1', text: 'Rewrites each option as $1 - \\frac{1}{n+1}$ to compare complements.' },
            { code: 'A1', text: 'Identifies $\\frac{654321}{654322}$ as largest, option A.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'A $6$-digit positive integer which contains digit $8$ is divisible by $9$. Given all its digits are different, what is the sum of the digits of the least possible value of this integer?\n\nA. $9$\nB. $19$\nC. $27$\nD. $36$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'To minimize the $6$-digit integer, place the smallest possible distinct digits in the leftmost places and adjust the remaining digits to make the sum a multiple of $9$.',
          solution:
            'To minimize a $6$-digit integer with all distinct digits that includes $8$:\n- Place the smallest available digits in the highest place values: $1, 0, 2, 3$ for the first four digits.\n- Put $8$ in the ones place (or tens place—putting $8$ in the ones place makes the number smaller when the tens digit is smaller than $8$).\n\nSo consider $1023A8$ where $A$ is a distinct digit from $\\{4, 5, 6, 7, 9\\}$. For divisibility by $9$, the digit sum:\n$$1 + 0 + 2 + 3 + A + 8 = 14 + A$$\nmust be divisible by $9$, which gives $A = 4$ (so the least integer is $102348$).\nThe sum of its digits is $14 + 4 = 18$, which is not listed among A–D.',
          rubric: [
            { code: 'M1', text: 'Constructs the minimal $6$-digit template $1023A8$ and applies the divisibility rule for $9$ ($14 + A \\equiv 0 \\pmod 9$).' },
            { code: 'A1', text: 'Obtains $102348$ with digit sum $18$, so option E (None of the above).' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'If $A = 10^{2019} - 2019$, how many digits of $A$ are odd numbers?\n\nA. $2015$\nB. $2016$\nC. $2017$\nD. $2018$\nE. None of the above',
          answer: 'D. $2018$',
          principle:
            'Write $10^{2019} - 2019$ as $(10^{2019} - 10^4) + (10^4 - 2019)$ to see its leading string of $9$s and last four digits.',
          solution:
            'Notice that $10^{2019}$ has $1$ followed by $2019$ zeros, and $10^4 - 2019 = 10000 - 2019 = 7981$.\nSubtracting $2019$ from $10^{2019}$ borrows through $2019 - 4 = 2015$ leading places, producing $2015$ digits of $9$ followed by $7981$:\n$$A = \\underbrace{999\\ldots 9}_{2015\\text{ nines}}7981.$$\nAmong the last four digits $7, 9, 8, 1$, three are odd ($7, 9, 1$) and one is even ($8$). All $2015$ leading digits are $9$ (odd).\nHence the total number of odd digits in $A$ is:\n$$2015 + 3 = 2018.$$',
          rubric: [
            { code: 'M1', text: 'Determines the digit expansion of $10^{2019} - 2019$ as $2015$ nines followed by $7981$.' },
            { code: 'A1', text: 'Counts $2015 + 3 = 2018$ odd digits, option D.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Gryffindor Secondary School has $170$ students. A survey of their hobbies shows that:\n- $79$ like alchemy, $75$ like origami and $34$ like stage illusion;\n- $32$ like both alchemy and origami;\n- $24$ like both alchemy and stage illusion;\n- $13$ like all the three hobbies;\n- $45$ have hobbies which are not listed above.\n\nHow many Gryffindor students have hobbies which are both stage illusion and origami but not alchemy?\n\nA. $20$\nB. $7$\nC. $46$\nD. $96$\nE. None of the above',
          answer: 'B. $7$',
          principle:
            'Use the three-set Inclusion–Exclusion Principle on the students who like at least one of the three hobbies.',
          solution:
            'Let $A, O, S$ be the sets of students who like alchemy, origami, and stage illusion, respectively.\nThe number of students who like at least one of these three hobbies is:\n$$|A \\cup O \\cup S| = 170 - 45 = 125.$$\nBy the Inclusion–Exclusion Principle:\n$$|A \\cup O \\cup S| = |A| + |O| + |S| - |A \\cap O| - |A \\cap S| - |O \\cap S| + |A \\cap O \\cap S|.$$\nSubstitute the given counts:\n$$125 = 79 + 75 + 34 - 32 - 24 - |O \\cap S| + 13 = 145 - |O \\cap S|.$$\nThus $|O \\cap S| = 145 - 125 = 20$.\nSubtracting the $13$ students who like all three hobbies gives the number who like stage illusion and origami but not alchemy:\n$$20 - 13 = 7.$$',
          rubric: [
            { code: 'M1', text: 'Uses Inclusion–Exclusion on $170 - 45 = 125$ students to find $|O \\cap S| = 20$.' },
            { code: 'A1', text: 'Subtracts $|A \\cap O \\cap S| = 13$ to get $7$, option B.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'In an event, twelve people got $12$ different positive integers. The host of the event asked each of them to give a clue about their numbers.\n- $1$st person: "My number is bigger than $1$."\n- $2$nd person: "My number is bigger than $2$."\n- $3$rd person: "My number is bigger than $3$."\n- $\\dots$\n- $12$th person: "My number is bigger than $12$."\n\nThen the host asked them again, and their responses in random order were as follows:\n- "My number is less than $1$."\n- "My number is less than $2$."\n- "My number is less than $3$."\n- $\\dots$\n- "My number is less than $12$."\n\nEach person in this event is either a truth-teller (who always tells the truth) or a liar (who always lies). Excluding the host, what is the largest possible number of truth-tellers among these $12$ people?\n\nA. $11$\nB. $10$\nC. $8$\nD. $6$\nE. None of the above',
          answer: 'B. $10$',
          principle:
            'Check which statements cannot be true for any positive integer, and identify who must be a liar in both rounds.',
          solution:
            'Since every person received a positive integer ($\\ge 1$):\n- In the second round, the statement "My number is less than $1$" is impossible for any positive integer, so its speaker is a **liar**.\n- Also in the second round, the statement "My number is less than $2$" can only be true if the speaker holds $1$. However, every first-round statement claims the speaker\'s number is bigger than $k$ (for some $k \\ge 1$), which is false for $1$. Thus, whether this speaker holds $1$ or a larger integer, one of their two statements is false, so this speaker is also a **liar**.\n\nNotice that these two second-round statements were made by two **different** people, giving at least $2$ distinct liars and therefore at most $12 - 2 = 10$ truth-tellers. (Note also that the $12$th person, who claimed "$> 12$" in the first round, must be a liar as well, so the $12$th person is necessarily one of the liars.)\n\nThis upper bound of $10$ truth-tellers is achievable:\n- Assign persons $1, 2, \\dots, 10$ the numbers $2, 3, \\dots, 11$ respectively, with second-round responses "$<3, <4, \\dots, <12$" (both statements true for each of the $10$).\n- Assign person $11$ the number $1$ with second-round response "$<1$" (both "$>11$" and "$<1$" are false).\n- Assign person $12$ the number $12$ with second-round response "$<2$" (both "$>12$" and "$<2$" are false).\n\nThus the largest possible number of truth-tellers is $10$.',
          rubric: [
            { code: 'M1', text: 'Proves the speakers of "$<1$" and "$<2$" in the second round must both be liars, bounding truth-tellers at $\\le 10$.' },
            { code: 'A1', text: 'Constructs a valid assignment with $10$ truth-tellers and $2$ liars, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'In the diagram, $ABCD$ is a quadrilateral with $\\angle ABC = \\angle BAD = 60^\\circ$ and $\\angle DAC = \\angle DBA$. Given $AD = 13$ and $BC = 7$, find the length of $AB$.\n\nA. $20$\nB. $18$\nC. $18\\sqrt{3}$\nD. Insufficient data\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g9/fig-13.webp',
              alt: 'Quadrilateral ABCD with vertices A at top left, D at top right, C at bottom right, and B at bottom left.',
              caption: 'Quadrilateral ABCD for Question 13.'
            }
          ],
          answer: 'A. $20$',
          principle:
            'Extend $AD$ and $BC$ to meet at $E$ to form an equilateral triangle $\\triangle ABE$, then use triangle similarity.',
          solution:
            'Extend rays $AD$ and $BC$ past $D$ and $C$ until they intersect at point $E$.\nIn $\\triangle ABE$, since $\\angle EAB = \\angle EBA = 60^\\circ$, the third angle is $\\angle AEB = 60^\\circ$, so $\\triangle ABE$ is equilateral and $AB = BE = EA$.\nNow compare $\\triangle ACE$ and $\\triangle BDA$:\n- $\\angle CEA = 60^\\circ = \\angle DAB$,\n- $\\angle CAE = \\angle DAC = \\angle DBA$ (given).\n\nBy AA similarity, $\\triangle ACE \\sim \\triangle BDA$, so:\n$$\\frac{AE}{CE} = \\frac{BA}{DA}.$$\nSince $AE = BA$, it follows that $CE = DA = 13$.\nTherefore:\n$$AB = BE = BC + CE = 7 + 13 = 20.$$',
          rubric: [
            { code: 'M1', text: 'Extends $AD$ and $BC$ to $E$ forming equilateral $\\triangle ABE$ and establishes $\\triangle ACE \\sim \\triangle BDA$.' },
            { code: 'A1', text: 'Deduces $CE = AD = 13$ and computes $AB = 7 + 13 = 20$, option A.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Two calendars are the same if all their dates correspond to the same days. The calendar for the year $2019$ is the same for the year $\\underline{\\qquad}$.\n(Years $2020, 2024, 2028$ and $2032$ are the leap years)\n\nA. $2026$\nB. $2030$\nC. $2033$\nD. $2024$\nE. $2028$',
          answer: 'B. $2030$',
          principle:
            'Two years share the exact same calendar if and only if they have the same leap-year status and their January $1$ dates fall on the same day of the week.',
          solution:
            'Since $2019$ is a common (non-leap) year, any matching year must also be a common year whose January $1$ falls on the same weekday (i.e., total weekday shift from January $1, 2019$ is a multiple of $7$).\nEach common year has $365 = 52 \\times 7 + 1$ days ($+1$ weekday shift) and each leap year has $366 = 52 \\times 7 + 2$ days ($+2$ weekday shift).\nTrack the cumulative shift from $2019$ to the start of each subsequent year:\n- $2020$ (leap): $+1$\n- $2021$: $+1 + 2 = 3$\n- $2022$: $3 + 1 = 4$\n- $2023$: $4 + 1 = 5$\n- $2024$ (leap): $5 + 1 = 6$\n- $2025$: $6 + 2 = 8 \\equiv 1 \\pmod 7$\n- $2026$: $8 + 1 = 9 \\equiv 2 \\pmod 7$\n- $2027$: $9 + 1 = 10 \\equiv 3 \\pmod 7$\n- $2028$ (leap): $10 + 1 = 11 \\equiv 4 \\pmod 7$\n- $2029$: $11 + 2 = 13 \\equiv 6 \\pmod 7$\n- $2030$ (common): $13 + 1 = 14 \\equiv 0 \\pmod 7$.\n\nBoth $2019$ and $2030$ are common years with the same starting weekday, so $2030$ has the same calendar as $2019$.',
          rubric: [
            { code: 'M1', text: 'Accumulates $+1$ for common years and $+2$ for leap years until reaching a common year with shift divisible by $7$.' },
            { code: 'A1', text: 'Finds shift $+14$ at common year $2030$, option B.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Which of the nets below can be folded to form the figure on the right?\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. Option E (see figure)',
          figures: [
            {
              src: '/papers/sasmo-2019-g9/fig-15.webp',
              alt: 'A 3D L-shaped block with a bottom corner cutout on top and five unfolded net options labeled A through E below.',
              caption: '3D block and net options A–E for Question 15.'
            }
          ],
          answer: 'A. Option A',
          principle:
            'Compare the face shapes of the 3D solid against the polygons appearing in each net.',
          solution:
            'Inspect the faces of the given 3D solid:\n- The top is an L-shaped hexagon, and the outer vertical walls are L-shaped or notched faces around the cutout—**none of the faces is a large $2 \\times 2$ square** (there are no full square faces of size $2 \\times 2$, only smaller $1 \\times 1$ unit faces and L-shaped/rectangular faces).\n- Nets **B**, **C**, **D**, and **E** each contain a large $2 \\times 2$ square face in the center, which cannot appear on the solid.\n\nTherefore, options B, C, D, and E are impossible, and only **Option A** can fold to form the given figure.',
          rubric: [
            { code: 'M1', text: 'Observes that the 3D solid has no large square face (unlike nets B, C, D, and E).' },
            { code: 'A1', text: 'Eliminates B–E and selects option A.' }
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
            'In Mathematics, the product of the first $n$ positive integers is written as $n! = n \\times (n - 1) \\times \\dots \\times 1$. For example, $2! = 2 \\times 1$ and $7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$. What is the remainder when $2018! + 2018$ is divided by $2019$?',
          answer: '$2018$',
          principle:
            'Factor the composite divisor $2019$ into smaller distinct factors present inside $2018!$.',
          solution:
            'Factor $2019 = 3 \\times 673$.\nBoth $3$ and $673$ are distinct integers between $1$ and $2018$, so both appear as factors in the product:\n$$2018! = 1 \\times 2 \\times 3 \\times \\dots \\times 673 \\times \\dots \\times 2018.$$\nHence $2018!$ is divisible by $3 \\times 673 = 2019$, meaning $2018! \\equiv 0 \\pmod{2019}$.\nTherefore:\n$$2018! + 2018 \\equiv 0 + 2018 \\equiv 2018 \\pmod{2019},$$\nso the remainder is $2018$.',
          rubric: [
            { code: 'M2', text: 'Factors $2019 = 3 \\times 673$ and shows $2019 \\mid 2018!$.' },
            { code: 'A2', text: 'Determines the remainder is $2018$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'How many $2$-digit positive integers are there such that the product of the tens and ones digits is an odd number?',
          answer: '$25$',
          principle:
            'A product of two integers is odd if and only if both factors are odd.',
          solution:
            'For the product of the tens digit and ones digit to be odd, both digits must be odd.\nThe odd digits available are $\\{1, 3, 5, 7, 9\\}$:\n- $5$ choices for the tens digit,\n- $5$ choices for the ones digit.\n\nBy the multiplication principle, the total number of such $2$-digit integers is:\n$$5 \\times 5 = 25.$$',
          rubric: [
            { code: 'M2', text: 'Identifies that both digits must belong to $\\{1, 3, 5, 7, 9\\}$.' },
            { code: 'A2', text: 'Computes $5 \\times 5 = 25$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'The product of $3$ consecutive integers is a four-digit number that starts with $4$ and ends with $6$. What is the sum of these $3$ consecutive integers?',
          answer: '$51$',
          principle:
            'Bound the middle integer $a$ using $a(a-1)(a+1) = a^3 - a \\approx a^3$ between $4000$ and $4999$.',
          solution:
            'Let the three consecutive integers be $a - 1, a, a + 1$. Their product is:\n$$(a - 1)a(a + 1) = a^3 - a.$$\nSince the product is a $4$-digit number starting with $4$, it lies between $4000$ and $4999$. Check nearby cubes:\n$$15^3 = 3375, \\quad 16^3 = 4096, \\quad 17^3 = 4913, \\quad 18^3 = 5832.$$\nOnly $a = 16$ and $a = 17$ can produce a product in $[4000, 4999]$:\n- For $a = 16$: $15 \\times 16 \\times 17 = 4080$ (ends in $0$, not $6$).\n- For $a = 17$: $16 \\times 17 \\times 18 = 4896$ (starts with $4$ and ends with $6$).\n\nTherefore, the three consecutive integers are $16, 17, 18$, and their sum is:\n$$16 + 17 + 18 = 51.$$',
          rubric: [
            { code: 'M2', text: 'Uses $a^3 - a \\in [4000, 4999]$ to isolate $a = 16, 17$ and verifies $16 \\times 17 \\times 18 = 4896$.' },
            { code: 'A2', text: 'Computes the sum $16 + 17 + 18 = 51$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'In the expression below, $b$ is a digit, $\\overline{bbbbb}$ is a $5$-digit number, and $\\overline{bb}$ is $2$-digit number. Find the numerical value of the expression in its simplest form.\n$$\\frac{(b + b) \\times (\\overline{bbbbb} - b) - b \\times \\overline{bb}}{b \\times \\overline{bb}}$$',
          answer: '$2019$',
          principle:
            'Expand the repdigit numbers in base $10$ as $\\overline{bbbbb} = 11111b$ and $\\overline{bb} = 11b$, then cancel the common factor $b^2$.',
          solution:
            'Since $\\overline{bbbbb}$ and $\\overline{bb}$ are $5$-digit and $2$-digit numbers, $b \\neq 0$, and in base $10$:\n$$\\overline{bbbbb} = 11111b, \\qquad \\overline{bb} = 11b.$$\nSubstitute these into the given expression:\n$$\\frac{(b + b) \\times (\\overline{bbbbb} - b) - b \\times \\overline{bb}}{b \\times \\overline{bb}} = \\frac{2b \\times (11111b - b) - b \\times 11b}{b \\times 11b}$$\n$$= \\frac{2b \\times 11110b - 11b^2}{11b^2} = \\frac{22220b^2 - 11b^2}{11b^2} = \\frac{22209b^2}{11b^2} = 2019.$$',
          rubric: [
            { code: 'M2', text: 'Writes $\\overline{bbbbb} = 11111b$ and $\\overline{bb} = 11b$ to obtain $\\frac{22209b^2}{11b^2}$.' },
            { code: 'A2', text: 'Simplifies to $2019$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Find the value of\n$$\\frac{1 - \\left(\\frac{1}{2019}\\right)^2}{1 + \\left(\\frac{1}{2019}\\right)^2} + \\frac{1 - \\left(\\frac{1}{2018}\\right)^2}{1 + \\left(\\frac{1}{2018}\\right)^2} + \\dots + \\frac{1 - \\left(\\frac{1}{2}\\right)^2}{1 + \\left(\\frac{1}{2}\\right)^2} + \\frac{1 - 1^2}{1 + 1^2} + \\frac{1 - 2^2}{1 + 2^2} + \\dots + \\frac{1 - 2019^2}{1 + 2019^2}$$',
          answer: '$0$',
          principle:
            'Pair each reciprocal term with $k$ against the matching integer term with $k$ using $\\frac{1 - (1/k)^2}{1 + (1/k)^2} = \\frac{k^2 - 1}{k^2 + 1}$.',
          solution:
            'For any nonzero integer $k$, multiply numerator and denominator of the reciprocal term by $k^2$:\n$$\\frac{1 - \\left(\\frac{1}{k}\\right)^2}{1 + \\left(\\frac{1}{k}\\right)^2} = \\frac{k^2 - 1}{k^2 + 1} = -\\frac{1 - k^2}{1 + k^2}.$$\nHence every pair with matching $k \\in \\{2, 3, \\dots, 2019\\}$ cancels to zero:\n$$\\frac{1 - \\left(\\frac{1}{k}\\right)^2}{1 + \\left(\\frac{1}{k}\\right)^2} + \\frac{1 - k^2}{1 + k^2} = \\frac{k^2 - 1}{k^2 + 1} + \\frac{1 - k^2}{1 + k^2} = 0.$$\nThe remaining middle term is $\\frac{1 - 1^2}{1 + 1^2} = \\frac{0}{2} = 0$.\nTherefore, the entire sum is $0$.',
          rubric: [
            { code: 'M2', text: 'Shows $\\frac{1 - (1/k)^2}{1 + (1/k)^2} + \\frac{1 - k^2}{1 + k^2} = 0$ for each $k = 2, \\dots, 2019$.' },
            { code: 'A2', text: 'Adds the middle term $\\frac{1 - 1^2}{1 + 1^2} = 0$ to obtain total $0$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The number $X$ is a positive integer with all different digits, and the product of its digits is $504$. What is the greatest possible value of $\\frac{X}{10}$?\n(Round off your answer to the nearest integer.)',
          answer: '$9742$',
          principle:
            'Maximize the number of distinct nonzero digits whose product is $504$, then arrange those digits in descending order.',
          solution:
            'Factor $504 = 2^3 \\times 3^2 \\times 7$. Since the digit product is nonzero, $X$ cannot contain the digit $0$.\nFirst check whether $X$ can have $6$ or more distinct digits: the smallest product of $6$ distinct nonzero digits is:\n$$1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 = 720 > 504.$$\nThus $X$ has at most $5$ digits. To maximize $X$ among $5$-digit numbers with distinct digits, choose the largest possible leading digits:\n- Pick $9$ ($3^2$) and $7$ first: $504 \\div (9 \\times 7) = 8 = 2^3$.\n- Split the remaining factor $8$ into as many distinct digits as possible ($4, 2, 1$), giving the $5$ digits $\\{9, 7, 4, 2, 1\\}$ with product $9 \\times 7 \\times 4 \\times 2 \\times 1 = 504$.\n\nArranging them in descending order maximizes $X$ at $X = 97421$.\nDividing by $10$ gives $\\frac{97421}{10} = 9742.1$, which rounds to $9742$.',
          rubric: [
            { code: 'M2', text: 'Proves $X$ has at most $5$ digits and finds the optimal digit set $\\{9, 7, 4, 2, 1\\}$ giving $X = 97421$.' },
            { code: 'A2', text: 'Rounds $9742.1$ to the nearest integer $9742$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'In the diagram below, $ABCD$ is a rectangle with $AB = 25$ and $AD = 104$. Point $E$ is inside the rectangle such that $DE = 30$ and $CE = 25$. Find the length of $AE$.',
          figures: [
            {
              src: '/papers/sasmo-2019-g9/fig-22.webp',
              alt: 'Rectangle ABCD with vertex D at top left, A at top right, B at bottom right, C at bottom left, and interior point E connected to D and C.',
              caption: 'Rectangle ABCD with interior point E for Question 22.'
            }
          ],
          answer: '$82$',
          principle:
            'Drop perpendiculars from $E$ to sides $CD$ and $AD$ (or use coordinates with $C$ at the origin) to find the horizontal and vertical offsets of $E$ from $D$ and $A$.',
          solution:
            'Since $ABCD$ is a rectangle, $CD = AB = 25$. Let $F$ be the foot of the perpendicular from $E$ to $AD$, and $G$ be the foot of the perpendicular from $E$ to $CD$.\nIn $\\triangle DEC$, we have $DC = 25$, $CE = 25$, and $DE = 30$, so $\\triangle DEC$ is isosceles with $DC = CE$.\nBy the Law of Cosines in $\\triangle DEC$:\n$$CE^2 = DC^2 + DE^2 - 2 \\cdot DC \\cdot DE \\cos\\angle CDE$$\n$$25^2 = 25^2 + 30^2 - 2(25)(30)\\cos\\angle CDE \\implies \\cos\\angle CDE = \\frac{30^2}{2 \\times 25 \\times 30} = \\frac{3}{5}.$$\nIn right triangle $\\triangle DGE$:\n$$DG = DE \\cos\\angle CDE = 30 \\times \\frac{3}{5} = 18.$$\nSince $DFEG$ is a rectangle, $EF = DG = 18$. Applying the Pythagorean Theorem in $\\triangle DFE$:\n$$DF = \\sqrt{DE^2 - EF^2} = \\sqrt{30^2 - 18^2} = \\sqrt{576} = 24.$$\nThus $AF = AD - DF = 104 - 24 = 80$. Finally, applying the Pythagorean Theorem in $\\triangle AFE$:\n$$AE = \\sqrt{AF^2 + EF^2} = \\sqrt{80^2 + 18^2} = \\sqrt{6400 + 324} = \\sqrt{6724} = 82.$$',
          rubric: [
            { code: 'M2', text: 'Determines the distances from $E$ to $CD$ ($DF = 24$) and to $AD$ ($EF = 18$).' },
            { code: 'A2', text: 'Computes $AE = \\sqrt{80^2 + 18^2} = 82$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'In how many ways can the integers $1$ through $15$ be arranged in a row such that the sum of any two adjacent numbers is a perfect square?',
          answer: '$2$',
          principle:
            'List the valid square-sum neighbors for each number from $1$ to $15$, starting with numbers that have only one possible neighbor.',
          solution:
            'The sum of any two distinct numbers in $\\{1, 2, \\dots, 15\\}$ lies between $3$ and $29$, so the only possible perfect square sums are $4, 9, 16,$ and $25$.\nCheck the valid neighbors for the most constrained numbers:\n- **$9$** can only pair with $7$ ($9+7=16$), because $4-9 < 0$, $9-9=0$, and $25-9=16 > 15$. Thus $9$ has degree $1$ and must be an endpoint of the row.\n- **$8$** can only pair with $1$ ($8+1=9$), because $16-8=8$ and $25-8=17 > 15$. Thus $8$ must be the other endpoint.\n- **$1$** pairs only with $8, 3, 15$; since $1$ connects to $8$, its other neighbor is either $3$ or $15$.\n- **$15$** pairs only with $1$ ($16$) and $10$ ($25$); **$14$** pairs only with $2$ ($16$) and $11$ ($25$); **$13$** pairs only with $3$ ($16$) and $12$ ($25$); **$12$** pairs only with $4$ ($16$) and $13$ ($25$); **$11$** pairs only with $5$ ($16$) and $14$ ($25$); **$10$** pairs only with $6$ ($16$) and $15$ ($25$).\n\nStarting from endpoint $9$, every subsequent step is forced:\n- $9 - 7$: $7$ can pair with $2$ or $9$, so next is $2$.\n- $2$ pairs with $7$ or $14$, so next is $14$.\n- $14 - 11 - 5$: $11$ goes to $5$, and $5$ pairs with $4$ or $11$, forcing $4$.\n- $4 - 12 - 13 - 3$: since $5$ is already used before $4$, $4$ must go to $12$, then $12$ to $13$, then $13$ to $3$.\n- From $3$, its possible neighbors are $1, 6, 13$. If $3$ went to $1$, then $1$ could only continue to $15$ and $8$—leaving $6$ and $10$ unvisited. Hence $3$ must go to $6$, then $6$ to $10$, then $10$ to $15$, then $15$ to $1$, and finally $1$ to $8$.\n\nThis gives the unique path from $9$ to $8$:\n$$9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8$$\nand its exact reverse:\n$$8, 1, 15, 10, 6, 3, 13, 12, 4, 5, 11, 14, 2, 7, 9.$$\nTherefore, there are $2$ valid arrangements.',
          rubric: [
            { code: 'M2', text: 'Identifies $8$ and $9$ as forced endpoints of degree $1$ and traces the unique chain connecting all $15$ numbers.' },
            { code: 'A2', text: 'Concludes there are $2$ arrangements (the sequence and its reverse).' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'In the equation below, $x$ and $y$ are positive integers. What is the greatest possible value of $x + y$?\n$$(x^2 + y)(x + y^2) = (x + y)^3$$',
          answer: '$15$',
          principle:
            'Expand both sides, cancel $x^3 + y^3$ and divide by $xy$, then rearrange as a rectangular hyperbola $(x - 3)(y - 3) = 8$.',
          solution:
            'Expand both sides of the equation:\n$$x^3 + x^2 y^2 + xy + y^3 = x^3 + 3x^2 y + 3xy^2 + y^3.$$\nSubtract $x^3 + y^3$ from both sides:\n$$x^2 y^2 + xy = 3x^2 y + 3xy^2.$$\nSince $x, y > 0$, divide both sides by $xy$:\n$$xy + 1 = 3x + 3y.$$\nRearrange using Simon\'s Favorite Factoring Trick by adding $8$ to both sides:\n$$xy - 3x - 3y + 9 = 8 \\implies (x - 3)(y - 3) = 8.$$\nSince $x$ and $y$ are positive integers, $x - 3 \\ge -2$ and $y - 3 \\ge -2$ are integer factors of $8$. Negative factor pairs of $8$ must include at most $-2$ or $-1$, so the only negative product $( -2)(-4)$ is invalid ($y - 3 = -4 \\implies y = -1 \\le 0$). Thus both factors are positive:\n$$\\{x - 3, y - 3\\} \\in \\{\\{1, 8\\}, \\{2, 4\\}\\}.$$\nThis gives $(x, y) \\in \\{(4, 11), (11, 4), (5, 7), (7, 5)\\}$.\nThe greatest possible value of $x + y$ is $11 + 4 = 15$.',
          rubric: [
            { code: 'M2', text: 'Expands and divides by $xy$ to obtain $xy + 1 = 3x + 3y$, or $(x - 3)(y - 3) = 8$.' },
            { code: 'A2', text: 'Finds the positive integer solutions $(11, 4)$ and $(4, 11)$ giving maximum $x + y = 15$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits.\n$$\\begin{array}{rrrrr} & C & O & O & L \\\\ + & M & A & T & H \\\\ \\hline S & A & S & M & O \\end{array}$$\nGiven that $M = 7$, find the value of $S + A + S + M + O$.',
          answer: '$19$',
          principle:
            'Determine the leading digit $S = 1$ from the carry into the ten-thousands place, then test carries in the hundreds and tens columns.',
          solution:
            'Because two $4$-digit numbers sum to a $5$-digit number, the leading carry into the ten-thousands place forces $S = 1$. With $M = 7$, the thousands column $C + 7 + c_3 = 10 + A$ (where $c_3 \\in \\{0, 1\\}$ is the carry from the hundreds column) gives $A \\in \\{0, 1, 2, 3, 4, 5, 6\\}$ (actually $C \\le 9 \\implies A \\le 7$, and $A \\neq M=7, S=1$).\n\nAnalyze the hundreds column $O + A + c_2 = 10c_3 + S = 10c_3 + 1$ (where $c_2 \\in \\{0, 1\\}$ is the carry from the tens column), which means $O + A \\in \\{0, 1, 10, 11\\}$. Since $O$ and $A$ are distinct and cannot both be $0$ (also $O + A = 1$ would force $\\{O, A\\} = \\{0, 1\\}$, impossible since $S = 1$), we have $O + A \\in \\{10, 11\\}$ and therefore $c_3 = 1$.\nThus the thousands column is:\n$$C + 7 + 1 = 10 + A \\implies C = A + 2.$$\n\nNow inspect the tens column $O + T + c_1 = 10c_2 + M = 10c_2 + 7$ (where $c_1 \\in \\{0, 1\\}$ is the carry from the ones column):\n- **If $c_2 = 0$:** Then $O + A = 11$ and $O + T + c_1 = 7$. Since $O + A = 11$ and $A \\le 7$ (with $C = A + 2 \\le 9$ and $A \\neq 7$), we need $O \\ge 5$ (if $O = 5$, $A = 6, C = 8$, leaving $T + c_1 = 2$, so $L + H = 5$ or $15$; but $L+H=5$ requires $\\{L, H\\} \\subset \\{0,1,2,3,4,5\\}$ without $1, 5$, leaving $2+3=5$ which gives $c_1 = 0, T = 2$, colliding with $L$ or $H$; and $L+H=15$ gives $c_1=1, T=1=S$, impossible). For $O \\ge 6$, $O + T + c_1 = 7$ leaves $T + c_1 \\le 1$, forcing $T \\in \\{0, 1\\}$ and $O = 6, A = 5, C = 7 = M$ (impossible) or $O = 8, A = 3$ (then $O > 7$, impossible) or $O = 9, A = 2$ (impossible).\n- **If $c_2 = 1$:** Then $O + A = 10$ and $O + T + c_1 = 17$. Since $O, T \\le 9$ and $O \\neq T$, we must have $\\{O, T\\} = \\{8, 9\\}$ with $c_1 = 0$, or $O + T = 16$ with $c_1 = 1$.\n  - If $O + T = 16$, then $\\{O, T\\} = \\{7, 9\\}$, impossible because $M = 7$.\n  - If $\\{O, T\\} = \\{8, 9\\}$ and $c_1 = 0$: if $O = 9$, then $A = 10 - 9 = 1 = S$ (impossible). Thus $O = 8$, $T = 9$, $A = 10 - 8 = 2$, and $C = 2 + 2 = 4$.\n  - Finally, in the ones column, $L + H = O = 8$ with $c_1 = 0$, which is satisfied by $\\{L, H\\} = \\{3, 5\\}$ (both unused).\n\nBoth $4883 + 7295 = 12178$ and $4885 + 7293 = 12178$ use $8$ distinct digits and satisfy all conditions.\nTherefore:\n$$S + A + S + M + O = 1 + 2 + 1 + 7 + 8 = 19.$$',
          rubric: [
            { code: 'M2', text: 'Deduces $S = 1$, $c_3 = 1$, $O + A \\in \\{10, 11\\}$, and eliminates $c_2 = 0$ to find $O = 8, T = 9, A = 2, C = 4$.' },
            { code: 'A2', text: 'Computes $S + A + S + M + O = 1 + 2 + 1 + 7 + 8 = 19$.' }
          ]
        }
      ]
    }
  ]
};
