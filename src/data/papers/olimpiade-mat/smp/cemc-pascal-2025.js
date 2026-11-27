/**
 * Paket Soal: CEMC Pascal Contest (Grade 9) — 2025
 * Source: CEMC University of Waterloo — 2025PascalContest.pdf & 2025PascalSolution.pdf
 * All 25 questions transcribed in English with cropped official diagrams for Q2, Q5, Q10, Q11, Q13, Q18, Q19, Q23, and Q24.
 */
export default {
  id: 'cemc-pascal-2025',
  slug: 'cemc-pascal-2025',
  subject: 'olimpiade-mat',
  grade: 9,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'CEMC Pascal Grade 9 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'smp9-bab1-spldv',
    'smp9-bab2-bangun-ruang',
    'smp9-bab3-transformasi-geometri',
    'smp9-bab4-peluang-sampel'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Pascal',
  title: 'CEMC Pascal Grade 9 — 2025',
  totalMarks: 150,
  instructions:
    'Attempt all 25 questions (original time allowed: 60 minutes; basic scientific calculators without internet access, communication features, stored programs/notes, CAS, or dynamic geometry software are permitted). Part A has 10 multiple-choice questions worth 5 marks each (50 marks). Part B has 10 multiple-choice questions worth 6 marks each (60 marks). Part C has 5 integer-answer questions (from 0 to 99, inclusive) worth 8 marks each (40 marks). In the official contest, unanswered questions earn 2 marks each up to a maximum of 10 unanswered questions and there is no penalty for incorrect answers; marks shown here count correct answers only (maximum 150 marks). Diagrams are not drawn to scale.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025PascalContest.pdf',
    license: 'Hak cipta pada penyelenggara (CEMC University of Waterloo); dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part A: Multiple Choice',
      marks: 50,
      stem: 'Choose the best answer (A, B, C, D, or E) for each question (Questions 1–10, 5 marks each).',
      parts: [
        {
          label: '1',
          marks: 5,
          prompt:
            'The value of $(2 \\times 0) + (2 \\times 5)$ is\n\nA. $0$\nB. $7$\nC. $10$\nD. $12$\nE. $20$',
          answer: 'C. $10$',
          principle: 'Evaluate each parenthesized product first, then add the results.',
          solution:
            'Compute each product inside parentheses:\n$$(2 \\times 0) + (2 \\times 5) = 0 + 10 = 10.$$',
          rubric: [
            { code: 'M2', text: 'Computes $2 \\times 0 = 0$ and $2 \\times 5 = 10$.' },
            { code: 'A3', text: 'Adds to obtain $10$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 5,
          prompt:
            'How many of the numbers $-4, -2, -3.5, -2.5,$ and $6$ are to the left of $-3$ when placed on the number line?\n\nA. $3$\nB. $2$\nC. $1$\nD. $5$\nE. $4$',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-2.webp',
              alt: 'A horizontal number line with tick marks showing -3 and 0.',
              caption: 'Number line showing the positions of -3 and 0.'
            }
          ],
          answer: 'B. $2$',
          principle: 'Numbers to the left of $-3$ on a standard number line are strictly less than $-3$.',
          solution:
            'On a number line increasing from left to right, a number lies to the left of $-3$ if and only if it is less than $-3$.\nComparing each given value with $-3$:\n- $-4 < -3$ (to the left)\n- $-3.5 < -3$ (to the left)\n- $-2.5 > -3$, $-2 > -3$, and $6 > -3$ (all to the right)\n\nExactly $2$ of the numbers ($-4$ and $-3.5$) lie to the left of $-3$.',
          rubric: [
            { code: 'M2', text: 'Identifies that numbers to the left of $-3$ are those strictly less than $-3$.' },
            { code: 'A3', text: 'Counts $-4$ and $-3.5$, giving $2$, option B.' }
          ]
        },
        {
          label: '3',
          marks: 5,
          prompt:
            'If $18 + 18 + 18 = 3x$, then $x$ is equal to\n\nA. $3$\nB. $6$\nC. $12$\nD. $18$\nE. $36$',
          answer: 'D. $18$',
          principle: 'Repeated addition $a + a + a$ equals $3a$, allowing direct cancellation of the factor $3$.',
          solution:
            'Since $18 + 18 + 18 = 3 \\times 18$, the equation becomes\n$$3 \\times 18 = 3x.$$\nDividing both sides by $3$ gives $x = 18$.\n(Alternatively, $18 + 18 + 18 = 54$, so $3x = 54$ and $x = \\frac{54}{3} = 18$.)',
          rubric: [
            { code: 'M2', text: 'Rewrites $18 + 18 + 18$ as $3 \\times 18$ (or computes $54 = 3x$).' },
            { code: 'A3', text: 'Solves for $x = 18$, option D.' }
          ]
        },
        {
          label: '4',
          marks: 5,
          prompt:
            'How many multiples of $5$ are between $8$ and $58$?\n\nA. $12$\nB. $6$\nC. $11$\nD. $8$\nE. $10$',
          answer: 'E. $10$',
          principle: 'Find the smallest and largest multiples of $5$ in the open interval $(8, 58)$ and count the inclusive integer range.',
          solution:
            'The smallest multiple of $5$ greater than $8$ is $10 = 5 \\times 2$.\nThe largest multiple of $5$ less than $58$ is $55 = 5 \\times 11$.\nThus the multiples of $5$ between $8$ and $58$ are $5 \\times k$ for $k = 2, 3, \\ldots, 11$.\nThe total number of such multiples is\n$$11 - 2 + 1 = 10.$$',
          rubric: [
            { code: 'M2', text: 'Identifies the range of multiples from $10 = 5 \\times 2$ to $55 = 5 \\times 11$.' },
            { code: 'A3', text: 'Counts $11 - 2 + 1 = 10$ multiples, option E.' }
          ]
        },
        {
          label: '5',
          marks: 5,
          prompt:
            'Cynthia graphs a sequence of points. The first point has coordinates $(-3, 0)$, the second point has coordinates $(-2, 2)$, and the third point has coordinates $(-1, 4)$. Each point after the first is $1$ unit to the right and $2$ units above the previous point. What is the fourth point that Cynthia graphs?\n\nA. $(1, 5)$\nB. $(-4, -2)$\nC. $(2, 6)$\nD. $(0, 5)$\nE. $(0, 6)$',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-5.webp',
              alt: 'Cartesian plane showing points (-3, 0), (-2, 2), and (-1, 4) in the second quadrant and on the x-axis.',
              caption: 'First three points graphed on the coordinate plane.'
            }
          ],
          answer: 'E. $(0, 6)$',
          principle: 'Moving $1$ unit right adds $1$ to the $x$-coordinate, and moving $2$ units up adds $2$ to the $y$-coordinate.',
          solution:
            'Starting from the third point $(-1, 4)$, shift $1$ unit to the right and $2$ units up:\n$$x = -1 + 1 = 0, \\qquad y = 4 + 2 = 6.$$\nTherefore, the fourth point is $(0, 6)$.',
          rubric: [
            { code: 'M2', text: 'Applies the translation $(+1, +2)$ to the third point $(-1, 4)$.' },
            { code: 'A3', text: 'Obtains $(0, 6)$, option E.' }
          ]
        },
        {
          label: '6',
          marks: 5,
          prompt:
            'If $4^3 = 8^a$, the value of $a$ is\n\nA. $\\sqrt{3}$\nB. $2$\nC. $3$\nD. $4$\nE. $6$',
          answer: 'B. $2$',
          principle: 'Express both powers with the common base $2$ and equate exponents (or evaluate $4^3 = 64$).',
          solution:
            'Write both sides as powers of $2$ (since $4 = 2^2$ and $8 = 2^3$):\n$$(2^2)^3 = (2^3)^a \\implies 2^6 = 2^{3a}.$$\nEquating exponents gives $3a = 6$, so $a = 2$.\n(Alternatively, $4^3 = 64 = 8^2$, so $a = 2$.)',
          rubric: [
            { code: 'M2', text: 'Evaluates $4^3 = 64$ or converts both sides to base $2$ ($2^6 = 2^{3a}$).' },
            { code: 'A3', text: 'Concludes $a = 2$, option B.' }
          ]
        },
        {
          label: '7',
          marks: 5,
          prompt:
            'The Grade 8 and Grade 9 students at Pascal S.S. were surveyed about puzzles. Their responses are summarized in the chart shown, but two of the entries in the chart were erased. In total, how many Grade 9 students were surveyed?\n\n$$\\begin{array}{l|c|c} & \\text{Like} & \\text{Don’t Like} \\\\ \\hline \\text{Grade 8} & & 92 \\\\ \\text{Grade 9} & 68 & \\\\ \\hline \\hline \\text{TOTAL} & 125 & 140 \\end{array}$$\n\nA. $140$\nB. $125$\nC. $116$\nD. $160$\nE. $149$',
          answer: 'C. $116$',
          principle: 'Use the column total for "Don’t Like" to recover the missing Grade 9 entry, then sum the Grade 9 row.',
          solution:
            'A total of $140$ students do not like puzzles, and $92$ of them are in Grade 8. Therefore, the number of Grade 9 students who do not like puzzles is\n$$140 - 92 = 48.$$\nSince $68$ Grade 9 students like puzzles and $48$ do not, the total number of Grade 9 students surveyed is\n$$68 + 48 = 116.$$',
          rubric: [
            { code: 'M2', text: 'Finds Grade 9 students who do not like puzzles: $140 - 92 = 48$.' },
            { code: 'A3', text: 'Sums the Grade 9 row: $68 + 48 = 116$, option C.' }
          ]
        },
        {
          label: '8',
          marks: 5,
          prompt:
            'Rachel, Christophe and Alfonzo are paid to organize some books. In total, they are paid $50$ dollars. Alfonzo is paid $14$ dollars. Rachel is paid twice what Christophe is paid. How much is Christophe paid?\n\nA. $10$ dollars\nB. $12$ dollars\nC. $14$ dollars\nD. $16$ dollars\nE. $18$ dollars',
          answer: 'B. $12$ dollars',
          principle: 'Subtract the known share from the total and divide the remainder in the $2 : 1$ ratio.',
          solution:
            'After subtracting Alfonzo’s $14$ dollars from the $50$ dollars total, Rachel and Christophe together are paid\n$$50 - 14 = 36\\text{ dollars}.$$\nLet Christophe be paid $c$ dollars; then Rachel is paid $2c$ dollars. Thus\n$$c + 2c = 36 \\implies 3c = 36 \\implies c = 12.$$\nChristophe is paid $12$ dollars.',
          rubric: [
            { code: 'M2', text: 'Finds the combined pay of Rachel and Christophe ($50 - 14 = 36$) and sets $c + 2c = 36$.' },
            { code: 'A3', text: 'Solves $c = 12$ dollars, option B.' }
          ]
        },
        {
          label: '9',
          marks: 5,
          prompt:
            'Suppose that $6x + 3 = y$, where $x$ is a positive integer. A possible value of $y$ is\n\nA. $18$\nB. $32$\nC. $38$\nD. $45$\nE. $55$',
          answer: 'D. $45$',
          principle: 'A number $y = 6x + 3$ leaves remainder $3$ upon division by $6$ (so $y - 3$ is a positive multiple of $6$).',
          solution:
            'Since $x$ is a positive integer, $y = 6x + 3$ is $3$ more than a positive multiple of $6$ (equivalently, $y$ must be an odd multiple of $3$). Testing each option:\n- $18 - 3 = 15$ (not divisible by $6$)\n- $32 - 3 = 29$ (not divisible by $6$)\n- $38 - 3 = 35$ (not divisible by $6$)\n- $45 - 3 = 42 = 6 \\times 7$ (valid, $x = 7$)\n- $55 - 3 = 52$ (not divisible by $6$)\n\nHence $y = 45$ is the only possible value.',
          rubric: [
            { code: 'M2', text: 'Recognizes that $y - 3$ must be a positive multiple of $6$.' },
            { code: 'A3', text: 'Identifies $45 = 6(7) + 3$, option D.' }
          ]
        },
        {
          label: '10',
          marks: 5,
          prompt:
            'A small square is drawn inside a larger square, as shown. The area of the shaded region and the area of the unshaded region are each $18\\text{ cm}^2$. What is the side length of the larger square?\n\nA. $3\\text{ cm}$\nB. $4\\text{ cm}$\nC. $6\\text{ cm}$\nD. $9\\text{ cm}$\nE. $12\\text{ cm}$',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-10.webp',
              alt: 'A smaller white unshaded square enclosed inside a larger gray shaded square.',
              caption: 'Small unshaded square inside a larger shaded square.'
            }
          ],
          answer: 'C. $6\\text{ cm}$',
          principle: 'The area of the larger square equals the sum of the shaded and unshaded areas.',
          solution:
            'The larger square is partitioned into the shaded region and the unshaded region, each of area $18\\text{ cm}^2$. Therefore, the total area of the larger square is\n$$18 + 18 = 36\\text{ cm}^2.$$\nTaking the positive square root gives the side length of the larger square:\n$$\\sqrt{36} = 6\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Adds the shaded and unshaded areas to get $36\\text{ cm}^2$.' },
            { code: 'A3', text: 'Computes side length $\\sqrt{36} = 6\\text{ cm}$, option C.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part B: Multiple Choice',
      marks: 60,
      stem: 'Choose the best answer (A, B, C, D, or E) for each question (Questions 11–20, 6 marks each).',
      parts: [
        {
          label: '11',
          marks: 6,
          prompt:
            'In the diagram, point $D$ lies on side $BC$ of $\\triangle ABC$ so that $AB = AD = CD$. If $\\angle ABC = 80^\\circ$, the measure of $\\angle ACD$ is\n\nA. $20^\\circ$\nB. $60^\\circ$\nC. $80^\\circ$\nD. $100^\\circ$\nE. $40^\\circ$',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-11.webp',
              alt: 'Triangle ABC with point D on BC, equal-length tick marks on AB, AD, and CD, and angle ABC marked 80 degrees.',
              caption: 'Triangle ABC with AB = AD = CD and angle ABC = 80°.'
            }
          ],
          answer: 'E. $40^\\circ$',
          principle: 'Chase angles using the equal base angles of isosceles triangles $\\triangle ABD$ and $\\triangle ADC$ and supplementary angles along $BC$.',
          solution:
            'In isosceles $\\triangle ABD$, $AB = AD$, so the base angles opposite those sides are equal:\n$$\\angle ADB = \\angle ABD = 80^\\circ.$$\nSince $B$, $D$, and $C$ are collinear, $\\angle ADB + \\angle ADC = 180^\\circ$, giving\n$$\\angle ADC = 180^\\circ - 80^\\circ = 100^\\circ.$$\nIn isosceles $\\triangle ADC$, $AD = CD$, so $\\angle ACD = \\angle CAD$. Using the angle sum of $\\triangle ADC$:\n$$2\\angle ACD + 100^\\circ = 180^\\circ \\implies \\angle ACD = \\frac{80^\\circ}{2} = 40^\\circ.$$',
          rubric: [
            { code: 'M3', text: 'Finds $\\angle ADB = 80^\\circ$ and supplementary angle $\\angle ADC = 100^\\circ$.' },
            { code: 'A3', text: 'Uses $AD = CD$ to get $\\angle ACD = 40^\\circ$, option E.' }
          ]
        },
        {
          label: '12',
          marks: 6,
          prompt:
            'The sum of $10$ positive integers is $30$. What is the largest number that can be used in this sum?\n\nA. $17$\nB. $19$\nC. $21$\nD. $23$\nE. $25$',
          answer: 'C. $21$',
          principle: 'To maximize one term in a fixed sum of positive integers, minimize all remaining terms by setting each equal to $1$.',
          solution:
            'The smallest positive integer is $1$. To make one of the $10$ positive integers as large as possible, set each of the other $9$ integers equal to $1$. Then the largest possible integer in the sum is\n$$30 - 9 \\times 1 = 21.$$',
          rubric: [
            { code: 'M3', text: 'Minimizes the other $9$ positive integers by setting each to $1$.' },
            { code: 'A3', text: 'Computes $30 - 9 = 21$, option C.' }
          ]
        },
        {
          label: '13',
          marks: 6,
          prompt:
            'In the diagram, $\\triangle ABC$ is right-angled at $B$ and $BCDE$ is a square. If $AB = 8$ and $AC = 17$, the area of square $BCDE$ is\n\nA. $60$\nB. $81$\nC. $225$\nD. $289$\nE. $353$',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-13.webp',
              alt: 'Right triangle ABC with right angle at B, vertical leg AB labeled 8, hypotenuse AC labeled 17, and square BCDE attached to horizontal leg BC.',
              caption: 'Right triangle ABC with attached square BCDE.'
            }
          ],
          answer: 'C. $225$',
          principle: 'By the Pythagorean Theorem, $BC^2 = AC^2 - AB^2$, and the area of square $BCDE$ equals $BC^2$.',
          solution:
            'In right-angled $\\triangle ABC$ (with right angle at $B$), the Pythagorean Theorem gives\n$$AB^2 + BC^2 = AC^2 \\implies 8^2 + BC^2 = 17^2.$$\nSolving for $BC^2$:\n$$BC^2 = 289 - 64 = 225.$$\nSince $BCDE$ is a square of side $BC$, its area is $BC^2 = 225$.',
          rubric: [
            { code: 'M3', text: 'Applies the Pythagorean Theorem: $BC^2 = 17^2 - 8^2$.' },
            { code: 'A3', text: 'Evaluates area $BC^2 = 225$, option C.' }
          ]
        },
        {
          label: '14',
          marks: 6,
          prompt:
            'The Edmonston Eulers hockey team played $5$ games with an average of $3$ goals per game. How many goals do they need to score in their $6$th game to increase their average to $4$ goals per game?\n\nA. $3$\nB. $5$\nC. $7$\nD. $9$\nE. $11$',
          answer: 'D. $9$',
          principle: 'Use $\\text{total} = \\text{average} \\times \\text{count}$ before and after the $6$th game.',
          solution:
            'Across the first $5$ games at an average of $3$ goals per game, the team scored\n$$5 \\times 3 = 15\\text{ goals}.$$\nTo average $4$ goals per game over $6$ games, they need a total of\n$$6 \\times 4 = 24\\text{ goals}.$$\nThus, in the $6$th game they must score\n$$24 - 15 = 9\\text{ goals}.$$',
          rubric: [
            { code: 'M3', text: 'Computes current total $5 \\times 3 = 15$ and target total $6 \\times 4 = 24$.' },
            { code: 'A3', text: 'Finds $24 - 15 = 9$ goals, option D.' }
          ]
        },
        {
          label: '15',
          marks: 6,
          prompt:
            'Three students took a $3$-question quiz. Their teacher recorded their answers in a chart:\n\n$$\\begin{array}{l|c|c|c} & \\text{Question \\#1} & \\text{Question \\#2} & \\text{Question \\#3} \\\\ \\hline \\text{Student A} & 15 & 36 & 24 \\\\ \\text{Student B} & 20 & 38 & 24 \\\\ \\text{Student C} & 15 & 54 & 24 \\end{array}$$\n\nEach student answered exactly $2$ questions correctly. What is the sum of the correct answers to the $3$ questions?\n\nA. $75$\nB. $77$\nC. $80$\nD. $82$\nE. $93$',
          answer: 'B. $77$',
          principle: 'Since each student got exactly one wrong answer, whenever two students agree on a question while disagreeing on another, their shared answer must be right (or else they would both be right on the question where they disagree).',
          solution:
            'Every student answered exactly $2$ questions correctly and $1$ incorrectly.\n1. **Question #3:** All three students answered $24$. If $24$ were incorrect, every student would have had to answer Question #2 correctly; however, their answers to Question #2 ($36, 38, 54$) are all distinct, so at most one student is right on Question #2. Therefore, the correct answer to Question #3 is $24$.\n2. **Question #1:** Students A and C both answered $15$. If $15$ were incorrect, both A and C would have had to answer Question #2 correctly, which is impossible because $36 \\ne 54$. Hence the correct answer to Question #1 is $15$.\n3. **Question #2:** Student B answered Question #1 incorrectly ($20 \\ne 15$), so Student B’s other two answers must both be correct. Thus the correct answer to Question #2 is $38$.\n\nChecking: A gets $15$ and $24$ right ($2$ correct); B gets $38$ and $24$ right ($2$ correct); C gets $15$ and $24$ right ($2$ correct). The sum of the three correct answers is\n$$15 + 38 + 24 = 77.$$',
          rubric: [
            { code: 'M4', text: 'Deduces Question #3 is $24$ and Question #1 is $15$, forcing Student B’s answer $38$ for Question #2.' },
            { code: 'A2', text: 'Sums $15 + 38 + 24 = 77$, option B.' }
          ]
        },
        {
          label: '16',
          marks: 6,
          prompt:
            'A total of $34$ students, including Pedro and Hwie-Lie, are sitting side-by-side in a row of chairs. Pedro counted $23$ students, including Hwie-Lie, to his left. Hwie-Lie counted $15$ students, including Pedro, to her right. How many students are seated between Pedro and Hwie-Lie?\n\nA. $4$\nB. $2$\nC. $8$\nD. $11$\nE. $15$',
          answer: 'A. $4$',
          principle: 'Count how many students are double-counted by inclusion–exclusion: the $23$ left of Pedro plus the $15$ right of Hwie-Lie cover the whole row once except those strictly between them, who are counted twice.',
          solution:
            'Since Hwie-Lie is to Pedro’s left and Pedro is to Hwie-Lie’s right, the row runs from left to right with Hwie-Lie before Pedro.\nIn the sum $23 + 15 = 38$:\n- Students to Hwie-Lie’s left are counted once (by Pedro).\n- Hwie-Lie is counted once (by Pedro).\n- Students strictly between Hwie-Lie and Pedro are counted twice (once by Pedro and once by Hwie-Lie).\n- Pedro is counted once (by Hwie-Lie).\n- Students to Pedro’s right are counted once (by Hwie-Lie).\n\nSince every student in the $34$-student row is counted at least once and only those strictly between Pedro and Hwie-Lie are counted twice, the number of students seated between them is\n$$38 - 34 = 4.$$',
          rubric: [
            { code: 'M3', text: 'Recognizes that $23 + 15 = 38$ counts all $34$ students once plus the between-students a second time.' },
            { code: 'A3', text: 'Computes $38 - 34 = 4$, option A.' }
          ]
        },
        {
          label: '17',
          marks: 6,
          prompt:
            'If $n$ is a positive integer, the notation $n!$ (read “$n$ factorial”) is used to represent the product of the integers from $1$ to $n$. That is, $n! = n \\times (n - 1) \\times (n - 2) \\times \\cdots \\times 3 \\times 2 \\times 1$. For example, $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. If $n! = 3! \\times 5! \\times 7!$, the value of $n$ is\n\nA. $7$\nB. $8$\nC. $9$\nD. $10$\nE. $11$',
          answer: 'D. $10$',
          principle: 'Expand $3!$ and $5!$ and regroup their factors into consecutive integers above $7$ to extend $7!$ into $n!$.',
          solution:
            'Expand $3!$ and $5!$ while keeping $7!$ intact, then regroup factors:\n$$\\begin{aligned} n! &= 3! \\times 5! \\times 7! \\\\ &= (3 \\times 2 \\times 1) \\times (5 \\times 4 \\times 3 \\times 2 \\times 1) \\times 7! \\\\ &= (5 \\times 2) \\times (3 \\times 3) \\times (4 \\times 2) \\times 7! \\\\ &= 10 \\times 9 \\times 8 \\times 7! \\\\ &= 10!. \\end{aligned}$$\nTherefore, $n = 10$.',
          rubric: [
            { code: 'M3', text: 'Expands $3! \\times 5! = 720$ and factors it as $10 \\times 9 \\times 8$.' },
            { code: 'A3', text: 'Identifies $10 \\times 9 \\times 8 \\times 7! = 10!$, so $n = 10$, option D.' }
          ]
        },
        {
          label: '18',
          marks: 6,
          prompt:
            'Two circular dials are positioned next to each other, and an arrow is drawn on each dial, as shown. The left dial rotates counterclockwise at $20^\\circ$ per second and the right dial rotates clockwise at $8^\\circ$ per second. What is the minimum number of seconds that must pass before the arrows are pointing directly towards each other again?\n\nA. $90$\nB. $45$\nC. $180$\nD. $810$\nE. $18$',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-18.webp',
              alt: 'Two circular dials placed side by side with horizontal arrows pointing directly toward each other.',
              caption: 'Initial positions of the arrows on the two circular dials.'
            }
          ],
          answer: 'A. $90$',
          principle: 'The arrows point directly toward each other again only when each dial has completed a whole number of full $360^\\circ$ turns; take the least common multiple of the two rotation periods.',
          solution:
            'Each arrow returns to its horizontal inward-pointing direction once every full $360^\\circ$ rotation:\n- The left dial takes $\\frac{360^\\circ}{20^\\circ/\\text{s}} = 18\\text{ s}$ per full rotation.\n- The right dial takes $\\frac{360^\\circ}{8^\\circ/\\text{s}} = 45\\text{ s}$ per full rotation.\n\nBoth dials are simultaneously back in their starting positions at multiples of $\\operatorname{lcm}(18, 45)$. Since $18 = 2 \\times 3^2$ and $45 = 3^2 \\times 5$,\n$$\\operatorname{lcm}(18, 45) = 2 \\times 3^2 \\times 5 = 90\\text{ seconds}.$$',
          rubric: [
            { code: 'M3', text: 'Finds rotation periods $360/20 = 18\\text{ s}$ and $360/8 = 45\\text{ s}$.' },
            { code: 'A3', text: 'Computes $\\operatorname{lcm}(18, 45) = 90$, option A.' }
          ]
        },
        {
          label: '19',
          marks: 6,
          prompt:
            'Two cylinders are standing on a flat table. Cylinder A has radius $2$ and height $8$. Cylinder B has radius $8$ and height $2$. Cylinder A is $\\frac{3}{4}$ full of water and Cylinder B is empty. If all of the water from Cylinder A is then poured into Cylinder B, what fraction of Cylinder B is full of water?\n\n(The volume of a cylinder with radius $r$ and height $h$ is $\\pi r^2 h$.)\n\nA. $\\frac{3}{16}$\nB. $\\frac{1}{4}$\nC. $\\frac{1}{2}$\nD. $\\frac{3}{4}$\nE. $\\frac{5}{16}$',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-19.webp',
              alt: 'Tall narrow Cylinder A partially filled with shaded liquid next to short wide empty Cylinder B.',
              caption: 'Cylinder A (tall, partially full) and Cylinder B (wide, empty).'
            }
          ],
          answer: 'A. $\\frac{3}{16}$',
          principle: 'Compute the volume of water in Cylinder A and divide by the full capacity of Cylinder B.',
          solution:
            'The full volume of Cylinder A is\n$$V_A = \\pi (2^2)(8) = 32\\pi,$$\nso the volume of water initially in Cylinder A is\n$$V_{\\text{water}} = \\frac{3}{4} \\times 32\\pi = 24\\pi.$$\nThe full volume of Cylinder B is\n$$V_B = \\pi (8^2)(2) = 128\\pi.$$\nWhen all the water is poured into Cylinder B, the fraction of Cylinder B filled is\n$$\\frac{V_{\\text{water}}}{V_B} = \\frac{24\\pi}{128\\pi} = \\frac{3}{16}.$$',
          rubric: [
            { code: 'M3', text: 'Computes water volume $\\frac{3}{4} \\pi (2^2)(8) = 24\\pi$ and Cylinder B capacity $\\pi(8^2)(2) = 128\\pi$.' },
            { code: 'A3', text: 'Takes the ratio $\\frac{24\\pi}{128\\pi} = \\frac{3}{16}$, option A.' }
          ]
        },
        {
          label: '20',
          marks: 6,
          prompt:
            'A drawer contains $5$ black socks, $3$ gold socks, $2$ white socks, and no other socks. Jack randomly removes $3$ socks from the drawer. What is the probability that these $3$ socks are not all the same colour?\n\nA. $\\frac{7}{8}$\nB. $\\frac{9}{10}$\nC. $\\frac{11}{12}$\nD. $\\frac{37}{40}$\nE. $\\frac{109}{120}$',
          answer: 'E. $\\frac{109}{120}$',
          principle: 'Use the complementary probability: $P(\\text{not all same}) = 1 - P(\\text{all 3 same colour})$.',
          solution:
            'There are $5 + 3 + 2 = 10$ socks in total, giving $\\binom{10}{3} = \\frac{10 \\times 9 \\times 8}{6} = 120$ equally likely sets of $3$ socks.\nFor all $3$ socks to be the same colour, they must either all be black or all be gold (all white is impossible since only $2$ white socks exist):\n- Ways to pick $3$ black socks: $\\binom{5}{3} = 10$.\n- Ways to pick $3$ gold socks: $\\binom{3}{3} = 1$.\n\nThus the probability that all $3$ socks have the same colour is\n$$\\frac{10 + 1}{120} = \\frac{11}{120}.$$\nBy complement, the probability that the $3$ socks are not all the same colour is\n$$1 - \\frac{11}{120} = \\frac{109}{120}.$$',
          rubric: [
            { code: 'M3', text: 'Computes $P(\\text{all same}) = \\frac{\\binom{5}{3} + \\binom{3}{3}}{\\binom{10}{3}} = \\frac{11}{120}$.' },
            { code: 'A3', text: 'Subtracts from $1$ to get $\\frac{109}{120}$, option E.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part C: Numerical Response',
      marks: 40,
      stem: 'Determine the integer answer (from 0 to 99, inclusive) for each question (Questions 21–25, 8 marks each).',
      parts: [
        {
          label: '21',
          marks: 8,
          prompt:
            'The side lengths of a rectangle are positive integers. The perimeter is a multiple of $7$ and the area is a multiple of $9$. What is the smallest possible perimeter?',
          answer: '$28$',
          answerNumeric: [{ name: 'perimeter', value: 28, unit: '' }],
          principle: 'Since perimeter $2(w + \\ell)$ is even and a multiple of $7$, it must be a multiple of $14$; test $P = 14$, then $P = 28$.',
          solution:
            'Let the rectangle have positive integer side lengths $w \\le \\ell$. Its perimeter $P = 2(w + \\ell)$ is an even integer and a multiple of $7$, so $P$ must be a positive multiple of $14$.\n- **Case $P = 14$:** Then $w + \\ell = 7$, so $(w, \\ell) \\in \\{(1, 6), (2, 5), (3, 4)\\}$. The corresponding areas are $6, 10, 12$, none of which is divisible by $9$.\n- **Case $P = 28$:** Then $w + \\ell = 14$. Choosing $(w, \\ell) = (5, 9)$ gives area $5 \\times 9 = 45$, which is a multiple of $9$.\n\nHence, the smallest possible perimeter is $28$.',
          rubric: [
            { code: 'M4', text: 'Shows the perimeter must be a multiple of $14$ and rules out $P = 14$.' },
            { code: 'A4', text: 'Finds $(w, \\ell) = (5, 9)$ with area $45$ and concludes smallest perimeter $28$.' }
          ]
        },
        {
          label: '22',
          marks: 8,
          prompt:
            'A robot is programmed to complete the following sequence of steps:\n- Step 1: Move $2\\text{ m}$ in the direction it is facing.\n- Step 2: Turn $90^\\circ$ to the left.\n- Step 3: Move $4\\text{ m}$ in the direction it is facing.\n\nThe robot starts facing north and completes this sequence of $3$ steps a total of $26$ times. When it has completed these steps, the robot is $x\\text{ m}$ from its starting point. What is the value of $x^2$?',
          answer: '$40$',
          answerNumeric: [{ name: 'xSquared', value: 40, unit: '' }],
          principle: 'Track coordinates and heading over one $4$-cycle of the $3$-step routine; each $4$ repetitions return the robot to $(0, 0)$ facing north.',
          solution:
            'Place the robot at $O(0, 0)$ facing north ($+y$), with east as $+x$. Trace the first four repetitions of the $3$-step routine:\n1. **1st time:** Move $2\\text{ m}$ north to $(0, 2)$, turn left (west), move $4\\text{ m}$ west to $(-4, 2)$.\n2. **2nd time:** Move $2\\text{ m}$ west to $(-6, 2)$, turn left (south), move $4\\text{ m}$ south to $(-6, -2)$.\n3. **3rd time:** Move $2\\text{ m}$ south to $(-6, -4)$, turn left (east), move $4\\text{ m}$ east to $(-2, -4)$.\n4. **4th time:** Move $2\\text{ m}$ east to $(0, -4)$, turn left (north), move $4\\text{ m}$ north to $(0, 0)$.\n\nAfter $4$ repetitions, the robot is back at $(0, 0)$ facing north. Because $26 = 4 \\times 6 + 2$, after $24$ repetitions it is at $(0, 0)$ facing north, and after $2$ more repetitions (the 25th and 26th) it ends at $(-6, -2)$.\nTherefore, the squared distance from the origin is\n$$x^2 = (-6)^2 + (-2)^2 = 36 + 4 = 40.$$',
          rubric: [
            { code: 'M4', text: 'Proves the robot returns to $(0, 0)$ facing north every $4$ repetitions and locates it at $(-6, -2)$ after $26$ repetitions.' },
            { code: 'A4', text: 'Computes $x^2 = (-6)^2 + (-2)^2 = 40$.' }
          ]
        },
        {
          label: '23',
          marks: 8,
          prompt:
            'The three-dimensional figure represented below on the left has $8$ triangular faces and is called an octahedron. A number is written on each face. The number on each face is equal to the sum of the numbers on the faces that share an edge with that face. Irina unfolded the octahedron and erased the numbers on five of its faces, giving the net shown below on the right.\n\nWhat number did Irina erase from the face labelled $x$?',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-23.webp',
              alt: 'Three-dimensional octahedron on the left and its unfolded eight-triangle net on the right showing three numerical faces and unknown face x.',
              caption: 'Octahedron (left) and its unfolded triangular net (right).'
            }
          ],
          answer: '$56$',
          answerNumeric: [{ name: 'x', value: 56, unit: '' }],
          principle: 'Identify the three edge-adjacent faces of each triangular face when the net is folded into an octahedron, then solve the linear system symmetrically.',
          solution:
            'Label the remaining five erased faces in the net:\n- $v$: the upward triangle between $-20$ and the central downward triangle.\n- $w$: the central downward triangle directly below $x$.\n- $y$: the upward triangle directly above $-56$.\n- $z$: the bottom-right upward triangle next to $-56$.\n\nWhen the net is folded into a regular octahedron, every triangular face shares an edge with exactly $3$ other faces:\n1. Face $z$ folds to share edges with the three given faces $-20$, $-56$, and $0$. Thus\n   $$z = -20 + (-56) + 0 = -76.$$\n2. Face $-56$ shares edges with $v$, $y$, and $z$, so $-56 = v + y + z = v + y - 76$, giving\n   $$v + y = 20.$$\n3. Face $0$ shares edges with $x$, $y$, and $z$, so $0 = x + y + z = x + y - 76$, giving\n   $$x + y = 76.$$\n4. Face $-20$ shares edges with $v$, $x$, and $z$, so $-20 = v + x + z = v + x - 76$, giving\n   $$v + x = 56.$$\n\nAdding the three equations $(v + y) + (x + y) + (v + x) = 20 + 76 + 56$ gives $2(v + x + y) = 152$, so\n$$v + x + y = 76.$$\nSubtracting $v + y = 20$ yields\n$$x = 76 - 20 = 56.$$\n(Check: $v = 0$, $y = 20$, $w = 76$, $z = -76$, and $x = 56$ satisfy every face-sum condition.)',
          rubric: [
            { code: 'M4', text: 'Finds $z = -76$ and sets up the three equations $v + y = 20$, $x + y = 76$, and $v + x = 56$.' },
            { code: 'A4', text: 'Solves the system to obtain $x = 56$.' }
          ]
        },
        {
          label: '24',
          marks: 8,
          prompt:
            'In the diagram, a figure is drawn on a $6 \\times 8$ grid using eight semi-circles whose diameters are $AB$, $BC$, $CD$, $DE$, $EF$, $FG$, $GH$, and $HA$. Suppose that the area of the figure is $x$ and that $y$ is the closest integer to $100x$. What is the sum of the digits of $y$?',
          figures: [
            {
              src: '/papers/cemc-pascal-2025/fig-24.webp',
              alt: 'A 6 by 8 rectangular grid containing a symmetric closed curve formed by eight semicircles between points A through H.',
              caption: 'Closed figure drawn on a 6 × 8 grid using eight semicircles.'
            }
          ],
          answer: '$23$',
          answerNumeric: [{ name: 'digitSum', value: 23, unit: '' }],
          principle: 'Decompose the curved figure into the central polygon $ABCDEFGH$ plus outward semicircles minus inward semicircles.',
          solution:
            'Draw the eight chord diameters $AB, BC, CD, DE, EF, FG, GH,$ and $HA$ to form the octagon $ABCDEFGH$ (with collinear vertices $D, E$ and $H, A$ along vertical grid lines, so its outer hull is the $3 \\times 6$ rectangle on columns $1$–$7$ and rows $1$–$4$ minus two corner right triangles with legs $1$ and $2$).\n\n1. **Polygon area:** The $3 \\times 6$ rectangle has area $3 \\times 6 = 18$. Each of the two corner triangles (with hypotenuses $AB$ and $CD$) has legs $1$ and $2$, hence area $\\frac{1}{2}(1)(2) = 1$. Thus the polygon $ABCDEFGH$ has area\n   $$18 - 2(1) = 16.$$\n2. **Semicircle areas:**\n   - The six diameters $BC, DE, EF, FG, GH,$ and $HA$ each have length $2$ (radius $1$), so each semicircle has area $\\frac{1}{2}\\pi(1)^2 = \\frac{\\pi}{2}$. Among these, two ($EF$ and $GH$) bulge outward and four ($BC, DE, FG, HA$) indent inward.\n   - The two slanted diameters $AB$ and $CD$ each have length $\\sqrt{1^2 + 2^2} = \\sqrt{5}$ (radius $\\frac{\\sqrt{5}}{2}$), and both bulge outward, each contributing area $\\frac{1}{2}\\pi\\left(\\frac{\\sqrt{5}}{2}\\right)^2 = \\frac{5\\pi}{8}$.\n\nCombining the polygon with the outward semicircles minus the inward semicircles:\n$$x = 16 + 2\\left(\\frac{5\\pi}{8}\\right) + 2\\left(\\frac{\\pi}{2}\\right) - 4\\left(\\frac{\\pi}{2}\\right) = 16 + \\frac{5\\pi}{4} - \\pi = 16 + \\frac{\\pi}{4}.$$\nEvaluating numerically:\n$$x \\approx 16 + 0.785398 = 16.785398 \\implies 100x \\approx 1678.54.$$\nThe closest integer to $100x$ is $y = 1679$, and the sum of its digits is\n$$1 + 6 + 7 + 9 = 23.$$',
          rubric: [
            { code: 'M5', text: 'Finds the polygon area $16$ and combines the semicircle areas to get $x = 16 + \\frac{\\pi}{4}$.' },
            { code: 'A3', text: 'Approximates $100x \\approx 1678.54$, rounds to $y = 1679$, and computes digit sum $23$.' }
          ]
        },
        {
          label: '25',
          marks: 8,
          prompt:
            'For how many ordered triples $(A, B, C)$ of integers with $0 \\le A \\le 9$ and $0 \\le B \\le 9$ and $0 \\le C \\le 9$ is the sum of three six-digit positive integers\n$$7A6\\,B5C + 2B9\\,C5A + 7C1\\,A6B$$\ndivisible by $36$?',
          answer: '$81$',
          answerNumeric: [{ name: 'triples', value: 81, unit: '' }],
          principle: 'Factor out the place-value expansion $(10101)(160 + A + B + C)$, then enforce divisibility by $4$ and $9$ separately.',
          solution:
            'Expand each six-digit integer in base $10$ and collect the constant part and the digit terms:\n$$\\begin{aligned} n &= (706050 + 10000A + 100B + C) \\\\ &\\quad + (209050 + 10000B + 100C + A) \\\\ &\\quad + (701060 + 10000C + 100A + B) \\\\ &= 1616160 + 10101(A + B + C) \\\\ &= 10101(160 + A + B + C). \\end{aligned}$$\nSince $36 = 4 \\times 9$ and $\\gcd(4, 9) = 1$, $n$ is divisible by $36$ if and only if $n$ is divisible by both $4$ and $9$:\n- **Divisibility by $4$:** Since $10101$ is odd, $4 \\mid n \\iff 4 \\mid (160 + A + B + C)$.\n- **Divisibility by $9$:** Since $10101 = 3 \\times 3367$ and $3 \\nmid 3367$, we have $v_3(10101) = 1$, so $9 \\mid n \\iff 3 \\mid (160 + A + B + C)$.\n\nTogether, $36 \\mid n$ if and only if $12 \\mid (160 + A + B + C)$. Because $160 = 12 \\times 13 + 4$, this condition simplifies to\n$$12 \\mid (4 + A + B + C).$$\nSince $0 \\le A, B, C \\le 9$, we have $4 \\le 4 + A + B + C \\le 31$, so the only possible multiples of $12$ are $12$ and $24$, giving\n$$A + B + C = 8 \\qquad \\text{or} \\qquad A + B + C = 20.$$\n- **Case $A + B + C = 8$:** Any non-negative integer triple $(A, B, C)$ summing to $8$ automatically has $A, B, C \\le 8 \\le 9$. By stars and bars, there are\n  $$\\binom{8 + 2}{2} = \\binom{10}{2} = 45\\text{ triples}.$$\n- **Case $A + B + C = 20$:** Substituting $A’ = 9 - A$, $B’ = 9 - B$, $C’ = 9 - C$ gives $0 \\le A’, B’, C’ \\le 9$ with $A’ + B’ + C’ = 27 - 20 = 7$. Again, all non-negative solutions automatically satisfy $\\le 7 \\le 9$, so there are\n  $$\\binom{7 + 2}{2} = \\binom{9}{2} = 36\\text{ triples}.$$\n\nIn total, there are $45 + 36 = 81$ ordered triples $(A, B, C)$.',
          rubric: [
            { code: 'M5', text: 'Factors $n = 10101(160 + A + B + C)$ and reduces $36 \\mid n$ to $A + B + C \\in \\{8, 20\\}$.' },
            { code: 'A3', text: 'Counts $45 + 36 = 81$ ordered triples $(A, B, C)$.' }
          ]
        }
      ]
    }
  ]
};
