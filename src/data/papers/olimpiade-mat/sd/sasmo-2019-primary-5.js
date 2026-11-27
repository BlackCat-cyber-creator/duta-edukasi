/**
 * Paket Soal: SASMO 2019 Primary 5 (Grade 5)
 * Sumber: Singapore and Asian Schools Math Olympiad 2019, Primary 5 Contest (2019-SASMO-G5.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15 dan Section B 16–25) dimuat lengkap.
 * Soal 6, 8, 11, 13, 15, 16, 18, dan 21 dilengkapi ilustrasi crop .webp yang bersih.
 */
export default {
  id: 'sasmo-2019-g5',
  slug: 'sasmo-2019-primary-5',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'SASMO 2019 Primary 5 (Grade 5): arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd5-bab1-bilangan-cacah-100k',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab5-luas-daerah-bangun-datar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2019 Primary 5 (Grade 5)',
  totalMarks: 70,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 2 marks each (30 marks). Section B has 10 short-answer questions worth 4 marks each (40 marks). Diagrams for Questions 6, 8, 11, 13, 15, 16, 18, and 21 are provided as figures.',
  source: {
    org: 'SASMO',
    file: '2019-SASMO-G5.pdf',
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
            'Find the sum of all digits of the following product:\n$$369 \\times 333$$\n\nA. $122877$\nB. $121877$\nC. $27$\nD. $25$\nE. None of the above',
          answer: 'C. $27$',
          principle:
            'Factor out $3$ from $369$ to turn $333$ into $999 = 1000 - 1$, compute the product quickly, and then sum its digits.',
          solution:
            'Rewrite $369 = 123 \\times 3$ and regroup with $333$:\n$$369 \\times 333 = 123 \\times (3 \\times 333) = 123 \\times 999 = 123 \\times (1000 - 1)$$\n$$= 123000 - 123 = 122877.$$\nNow add all digits of $122877$:\n$$1 + 2 + 2 + 8 + 7 + 7 = 27.$$',
          rubric: [
            { code: 'M1', text: 'Computes $369 \\times 333 = 123 \\times 999 = 122877$.' },
            { code: 'A1', text: 'Sums the digits to obtain $27$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Which of the following results in an odd number?\n\nA. $6875 - 4213$\nB. $1648 + 6742$\nC. $54 \\times 357$\nD. $252 \\div 12$\nE. None of the above',
          answer: 'D. $252 \\div 12$',
          principle:
            'Use parity rules for addition, subtraction, and multiplication, and evaluate the division directly.',
          solution:
            'Check the parity of each expression:\n- **A:** $\\text{odd} - \\text{odd} = \\text{even}$ ($6875 - 4213 = 2662$).\n- **B:** $\\text{even} + \\text{even} = \\text{even}$ ($1648 + 6742 = 8390$).\n- **C:** $\\text{even} \\times \\text{odd} = \\text{even}$ ($54 \\times 357 = 19278$).\n- **D:** $252 \\div 12 = 21$, which is **odd**.\n\nTherefore, option D results in an odd number.',
          rubric: [
            { code: 'M1', text: 'Identifies options A, B, and C as even by parity rules and evaluates $252 \\div 12$.' },
            { code: 'A1', text: 'Obtains $21$ (odd), option D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'What is the value of $C$ so that the $4$-digit number $187C$ is divisible by $9$?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. None of the above',
          answer: 'C. $2$',
          principle:
            'A whole number is divisible by $9$ if and only if the sum of its digits is divisible by $9$.',
          solution:
            'Sum the digits of $187C$:\n$$1 + 8 + 7 + C = 16 + C.$$\nSince $C$ is a single digit ($0 \\le C \\le 9$), the sum lies in $16 \\le 16 + C \\le 25$. The only multiple of $9$ in this range is $18$, so:\n$$16 + C = 18 \\implies C = 2.$$\nCheck: $1872 \\div 9 = 208$.',
          rubric: [
            { code: 'M1', text: 'Applies the divisibility rule for $9$ to get $16 + C$ is a multiple of $9$.' },
            { code: 'A1', text: 'Finds $C = 2$, option C.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'Find the next number in the sequence below.\n$$7, 11, 22, 40, 65, \\underline{\\hspace{1cm}}$$\n\nA. $104$\nB. $129$\nC. $72$\nD. $97$\nE. None of the above',
          answer: 'D. $97$',
          principle:
            'Take first differences between consecutive terms and look for a constant second-difference pattern.',
          solution:
            'Compute the differences between consecutive terms:\n$$11 - 7 = 4, \\quad 22 - 11 = 11, \\quad 40 - 22 = 18, \\quad 65 - 40 = 25.$$\nThe first differences form an arithmetic sequence increasing by $7$ each step:\n$$4 \\xrightarrow{+7} 11 \\xrightarrow{+7} 18 \\xrightarrow{+7} 25 \\xrightarrow{+7} 32.$$\nAdding the next difference $32$ to $65$ gives:\n$$65 + 32 = 97.$$',
          rubric: [
            { code: 'M1', text: 'Finds the first differences $4, 11, 18, 25$ increasing by $7$ each term.' },
            { code: 'A1', text: 'Computes $65 + 32 = 97$, option D.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Andrew and Caden had some stamps in the ratio $6:8$. Andrew gave a quarter of his stamps to Caden. Caden then had $280$ stamps more than Andrew. How many stamps did they have altogether?\n\nA. $392$\nB. $784$\nC. $336$\nD. $448$\nE. None of the above',
          answer: 'B. $784$',
          principle:
            'Scale the initial ratio so Andrew\'s share is divisible by $4$, track the transfer in units, and equate the difference in units to $280$.',
          solution:
            'Scale the initial ratio $6:8$ by $2$ so that Andrew\'s units are divisible by $4$:\n$$\\text{Andrew} : \\text{Caden} = 12 : 16.$$\nAndrew gives $\\frac{1}{4} \\times 12 = 3$ units to Caden, so the new ratio becomes:\n$$(12 - 3) : (16 + 3) = 9 : 19.$$\nCaden now has $19 - 9 = 10$ units more than Andrew, which equals $280$ stamps:\n$$10\\text{ units} = 280 \\implies 1\\text{ unit} = 28\\text{ stamps}.$$\nAltogether, they have $9 + 19 = 28$ units:\n$$28 \\times 28 = 784\\text{ stamps}.$$',
          rubric: [
            { code: 'M1', text: 'Rewrites the ratio as $12:16$, updates it to $9:19$, and finds $1\\text{ unit} = 28$.' },
            { code: 'A1', text: 'Computes total $28 \\times 28 = 784$, option B.' }
          ]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'From which figure onwards will the number of black circles in the figure be more than the number of white circles in the same figure?\n\nA. Figure $7$\nB. Figure $8$\nC. Figure $9$\nD. Figure $10$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-6.webp',
              alt: 'Four triangular arrangements of circles labeled Figure 1 through Figure 4, showing an outer border of white circles enclosing a growing inner triangle of black circles.',
              caption: 'Triangular circle patterns for Question 6.'
            }
          ],
          answer: 'B. Figure $8$',
          principle:
            'Count the black circles (triangular numbers) and white border circles (growing by $3$ per figure) systematically in a table.',
          solution:
            'Track the counts of black and white circles in each figure:\n- **Figure 1:** $0$ black, $6$ white\n- **Figure 2:** $1$ black, $6 + 3 = 9$ white\n- **Figure 3:** $1 + 2 = 3$ black, $9 + 3 = 12$ white\n- **Figure 4:** $1 + 2 + 3 = 6$ black, $12 + 3 = 15$ white\n- **Figure 5:** $1 + 2 + 3 + 4 = 10$ black, $18$ white\n- **Figure 6:** $15$ black, $21$ white\n- **Figure 7:** $21$ black, $24$ white\n- **Figure 8:** $21 + 7 = 28$ black, $24 + 3 = 27$ white\n\nIn Figure $8$, the number of black circles ($28$) exceeds the number of white circles ($27$) for the first time, and black circles grow faster than white circles thereafter. Hence the answer is **Figure 8**.',
          rubric: [
            { code: 'M1', text: 'Identifies the black-circle pattern ($0, 1, 3, 6, \\ldots$) and white-circle pattern ($6, 9, 12, 15, \\ldots$).' },
            { code: 'A1', text: 'Finds Figure $8$ ($28 > 27$), option B.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Find the value of the following fraction in simplest form.\n$$2 - \\frac{1}{0 + \\frac{1}{1 - \\frac{1}{9}}}$$\n\nA. $1\\frac{1}{9}$\nB. $\\frac{8}{9}$\nC. $\\frac{26}{17}$\nD. $\\frac{7}{8}$\nE. None of the above',
          answer: 'A. $1\\frac{1}{9}$',
          principle:
            'Simplify a nested fraction from the innermost denominator outward, replacing division by a fraction with multiplication by its reciprocal.',
          solution:
            'Evaluate step by step from the bottom denominator upward:\n$$1 - \\frac{1}{9} = \\frac{8}{9}$$\n$$0 + \\frac{1}{\\frac{8}{9}} = \\frac{9}{8}$$\n$$2 - \\frac{1}{\\frac{9}{8}} = 2 - \\frac{8}{9} = \\frac{10}{9} = 1\\frac{1}{9}.$$',
          rubric: [
            { code: 'M1', text: 'Simplifies the nested reciprocal $1 \\div \\left(1 - \\frac{1}{9}\\right) = \\frac{9}{8}$ and $1 \\div \\frac{9}{8} = \\frac{8}{9}$.' },
            { code: 'A1', text: 'Computes $2 - \\frac{8}{9} = 1\\frac{1}{9}$, option A.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'Which of the following will form a knot when the two ends are pulled away from each other at the same time?\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. Option E (see figure)',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-8.webp',
              alt: 'Five diagrams of looped orange ropes labeled A through E with frayed ends pointing outward.',
              caption: 'Five looped rope configurations A–E for Question 8.'
            }
          ],
          answer: 'C. Option C',
          principle:
            'Trace each rope from one end to the other and record whether crossings alternate over-under-over (which locks into a trefoil knot) or allow a strand to slip free.',
          solution:
            'Trace each rope along its path from one frayed end to the other:\n- **Options A, B, D, and E:** Each contains a loop where the strand passes twice consecutively over (or twice consecutively under) another segment, allowing the loop to slide free and pull straight into an unknotted rope.\n- **Option C:** Tracing from the bottom-left end to the top-right end passes **under**, **over**, and **under** at its three crossings in strict alternation. This forms a trefoil knot that tightens when the two ends are pulled apart.\n\nTherefore, only **Option C** forms a knot.',
          rubric: [
            { code: 'M1', text: 'Identifies alternating over-under-over crossings (trefoil knot) versus unknotted slip loops.' },
            { code: 'A1', text: 'Selects option C.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Find the sum of all whole numbers $n$ such that when $60$ is divided by $n$ it gives a remainder of $4$.\n\nA. $120$\nB. $113$\nC. $57$\nD. $56$\nE. None of the above',
          answer: 'B. $113$',
          principle:
            'If $60$ divided by $n$ leaves remainder $4$, then $n$ must be a divisor of $60 - 4 = 56$ and strictly greater than the remainder $4$.',
          solution:
            'Since dividing $60$ by $n$ gives remainder $4$, we know $n > 4$ and $n$ divides $60 - 4 = 56$.\nList all factors of $56$:\n$$1, 2, 4, 7, 8, 14, 28, 56.$$\nDiscard $1, 2, 4$ (because $n$ must exceed the remainder $4$; indeed $60$ is divisible by $1, 2, 4$ with remainder $0$). The valid values of $n$ are $7, 8, 14, 28, 56$.\nTheir sum is:\n$$7 + 8 + 14 + 28 + 56 = 113.$$',
          rubric: [
            { code: 'M1', text: 'Finds all factors of $60 - 4 = 56$ that are strictly greater than $4$: $7, 8, 14, 28, 56$.' },
            { code: 'A1', text: 'Computes the sum $113$, option B.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'Edison left Town A at 2:30 pm and drove towards Town B at $60\\text{ km/h}$. At 3 pm, Jason also left Town A and drove in the same direction as Edison at $75\\text{ km/h}$. What time did Jason catch up with Edison?\n\nA. 4:30 pm\nB. 5:00 pm\nC. 3:45 pm\nD. 4:00 pm\nE. None of the above',
          answer: 'B. 5:00 pm',
          principle:
            'Find Edison\'s head-start distance at 3:00 pm and divide it by the difference in their speeds (relative catch-up speed).',
          solution:
            'Edison drives for $30\\text{ minutes} = \\frac{1}{2}\\text{ hour}$ before Jason starts at 3:00 pm, covering:\n$$60 \\times \\frac{1}{2} = 30\\text{ km}.$$\nJason closes this $30\\text{ km}$ gap at a relative speed of:\n$$75 - 60 = 15\\text{ km/h}.$$\nThe time needed for Jason to catch up is:\n$$\\frac{30}{15} = 2\\text{ hours}.$$\nAdding $2$ hours to 3:00 pm gives **5:00 pm**.',
          rubric: [
            { code: 'M1', text: 'Computes the $30\\text{ km}$ head start and divides by relative speed $75 - 60 = 15\\text{ km/h}$ to get $2$ hours.' },
            { code: 'A1', text: 'Determines the catch-up time 5:00 pm, option B.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'In how many different ways can the circles be coloured using $3$ colours: white, blue and green so that any $2$ circles connected by a line do not share the same colour?\n\nA. $6$\nB. $8$\nC. $16$\nD. $24$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-11.webp',
              alt: 'Four open circles connected by line segments: three circles form a triangle on the left, and a fourth circle on the right connects only to the bottom circle of the triangle.',
              caption: 'Four-circle colouring graph for Question 11.'
            }
          ],
          answer: 'E. None of the above',
          principle:
            'Multiply the number of valid colour choices vertex by vertex around the triangle first, then colour the outer leaf circle.',
          solution:
            'Label the three circles forming the triangle as $A$ (left), $B$ (top), and $C$ (bottom), and the fourth circle on the right (connected only to $C$) as $D$.\n- **Circle $A$:** $3$ colour choices.\n- **Circle $B$:** connected to $A$, so $2$ colour choices remain.\n- **Circle $C$:** connected to both $A$ and $B$ (which already have different colours), so $1$ colour choice remains.\n- **Circle $D$:** connected only to $C$, so it can take either of the $2$ colours different from $C$.\n\nBy the multiplication principle, the total number of valid colourings is:\n$$3 \\times 2 \\times 1 \\times 2 = 12.$$\nSince $12$ is not listed in options A–D, the answer is **None of the above**.',
          rubric: [
            { code: 'M1', text: 'Applies the multiplication principle across the $3$-cycle and leaf vertex ($3 \\times 2 \\times 1 \\times 2$).' },
            { code: 'A1', text: 'Obtains $12$ ways, selecting option E (None of the above).' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'The number of male viewers of a YouTube channel was twice as many as the number of its female viewers. The average watch time per video of its male viewers was $24$ seconds and the average watch time per video of female viewers of this channel was $36$ seconds. What was the average watch time per video of all the viewers of this YouTube channel?\n\nA. $24$ seconds\nB. $28$ seconds\nC. $32$ seconds\nD. $33$ seconds\nE. None of the above',
          answer: 'B. $28$ seconds',
          principle:
            'Represent the group sizes in ratio units ($2$ units male, $1$ unit female) and divide total watch time by total viewer units.',
          solution:
            'Let the number of female viewers be $1$ unit, so the number of male viewers is $2$ units (giving $1 + 2 = 3$ units of viewers in total).\n- Total male watch time: $2 \\times 24 = 48$ unit-seconds.\n- Total female watch time: $1 \\times 36 = 36$ unit-seconds.\n- Combined total watch time: $48 + 36 = 84$ unit-seconds.\n\nDividing by the $3$ units of viewers gives the overall average:\n$$\\frac{84}{3} = 28\\text{ seconds}.$$',
          rubric: [
            { code: 'M1', text: 'Weights male and female averages in the $2:1$ ratio: $(2 \\times 24 + 1 \\times 36) \\div 3$.' },
            { code: 'A1', text: 'Computes $28$ seconds, option B.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Two identical squares overlap each other as shown on the right. Given the vertical sides of the squares are parallel, and the area of the square is $676\\text{ cm}^2$, what is the area of the shaded triangle?\n\nA. $128\\text{ cm}^2$\nB. $165\\text{ cm}^2$\nC. $167\\text{ cm}^2$\nD. $284\\text{ cm}^2$\nE. None of the above',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-13.webp',
              alt: 'Two identical overlapping squares with parallel sides: the upper-right square extends 9 cm above and to the right of the lower-left square, leaving a 12 cm horizontal margin on the top-left; a triangle inside the lower-left square is shaded.',
              caption: 'Overlapping identical squares for Question 13.'
            }
          ],
          answer: 'D. $284\\text{ cm}^2$',
          principle:
            'Find the side length of the square from its area, then subtract the three unshaded right triangles inside the lower-left square from the square\'s total area.',
          solution:
            'Because each square has area $676\\text{ cm}^2$ and $26 \\times 26 = 676$, the side length of each square is $26\\text{ cm}$.\nInside the lower-left square, the shaded triangle is surrounded by three unshaded right triangles:\n1. **Left right triangle:** base $12\\text{ cm}$, height $26\\text{ cm}$, area $= \\frac{1}{2} \\times 12 \\times 26 = 156\\text{ cm}^2$.\n2. **Top-right right triangle:** horizontal leg $26 - 12 = 14\\text{ cm}$, vertical leg $26 - 9 = 17\\text{ cm}$, area $= \\frac{1}{2} \\times 14 \\times 17 = 119\\text{ cm}^2$.\n3. **Bottom right triangle:** horizontal leg $26\\text{ cm}$, vertical leg $26 - 17 = 9\\text{ cm}$, area $= \\frac{1}{2} \\times 26 \\times 9 = 117\\text{ cm}^2$.\n\nSubtracting these three areas from the square\'s area gives the shaded area:\n$$676 - (156 + 119 + 117) = 676 - 392 = 284\\text{ cm}^2.$$',
          rubric: [
            { code: 'M1', text: 'Finds side length $26\\text{ cm}$ and computes the three unshaded triangles ($156$, $119$, and $117\\text{ cm}^2$).' },
            { code: 'A1', text: 'Subtracts to get $284\\text{ cm}^2$, option D.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Four friends made the following statements:\n- Kieran: I\'m not the shortest.\n- Franklin: I\'m neither the tallest nor the shortest.\n- Mabel: I\'m the shortest.\n- Jeff: I\'m the tallest.\n\nIf only one of them lied, who is the tallest?\n\nA. Kieran\nB. Franklin\nC. Mabel\nD. Jeff\nE. Insufficient data',
          answer: 'A. Kieran',
          principle:
            'Test each of the four friends in turn as the sole liar and check whether the remaining three true statements allow a consistent height order.',
          solution:
            'Check which single person could be lying:\n- **If Kieran lied:** Kieran would be the shortest, contradicting Mabel ("I\'m the shortest"), which gives at least two liars.\n- **If Franklin lied:** Franklin would be either the tallest or the shortest, contradicting either Jeff or Mabel.\n- **If Mabel lied:** Mabel is not the shortest, while Kieran and Franklin both say they are not the shortest, and Jeff says he is the tallest (hence also not the shortest). Then no one could be the shortest, a contradiction.\n- **If Jeff lied:** Jeff is not the tallest, Mabel is the shortest, and Franklin is in the middle. Since neither Mabel, Franklin, nor Jeff can be the tallest, **Kieran** must be the tallest (with Jeff and Franklin as the two middle heights). All four conditions hold consistently.\n\nThus, **Kieran** is the tallest.',
          rubric: [
            { code: 'M1', text: 'Rules out Kieran, Franklin, and Mabel as the sole liar by contradiction, leaving Jeff as the liar.' },
            { code: 'A1', text: 'Deduces Kieran is the tallest, option A.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'Find the missing figure in the diagram below.\n\nA. Option A (see figure)\nB. Option B (see figure)\nC. Option C (see figure)\nD. Option D (see figure)\nE. Option E (see figure)',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-15.webp',
              alt: 'A 3 by 3 grid of squares containing small upward and downward triangles with a question mark in the bottom-right cell, followed by five option squares labeled A through E.',
              caption: 'Pattern matrix and options A–E for Question 15.'
            }
          ],
          answer: 'C. Option C',
          principle:
            'Compare the first and second squares in each column position by position to discover how they combine into the third square.',
          solution:
            'In every column, compare each of the $5$ positions (top-left, top-right, center, bottom-left, bottom-right) in the first and second squares to form the third square:\n1. **Same direction in both:** the triangle appears in the same position pointing in the **opposite** direction.\n2. **Opposite directions:** the triangles cancel out (**no triangle** in that position).\n3. **Only one triangle present:** the **same** triangle stays in that position.\n\nApply these rules to the third column:\n- **Top-left:** empty + empty $\\to$ empty.\n- **Top-right:** empty + $\\triangle$ $\\to$ $\\triangle$.\n- **Center:** $\\triangle$ + $\\triangle$ (same direction) $\\to$ $\\nabla$ (opposite direction).\n- **Bottom-left:** $\\nabla$ + $\\triangle$ (opposite directions) $\\to$ empty.\n- **Bottom-right:** $\\triangle$ + empty $\\to$ $\\triangle$.\n\nThis matches **Option C**.',
          rubric: [
            { code: 'M1', text: 'Identifies the three column-combination rules for same, opposite, and single triangles.' },
            { code: 'A1', text: 'Applies the rules to column $3$ to select option C.' }
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
          prompt: 'How many triangles are there in the figure on the right?',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-16.webp',
              alt: 'Composite geometric figure formed by four overlapping triangles intersecting inside and around a central region.',
              caption: 'Overlapping triangles diagram for Question 16.'
            }
          ],
          answer: '$14$',
          principle:
            'Group the triangles by the number of smallest ($1$-part) regions they contain so that every triangle is counted exactly once.',
          solution:
            'Count the triangles systematically by size (number of $1$-part regions enclosed):\n- **$1$-part triangles:** $7$ small single-region triangles.\n- **$2$-part triangles:** $3$ triangles formed by combining two adjacent regions.\n- **$3$-part triangles:** $1$ triangle (the upper triangle with two small peaks crossing its horizontal base).\n- **$5$-part triangles:** $3$ large lower overlapping triangles, each divided into $5$ internal parts.\n\nTotal number of triangles:\n$$7 + 3 + 1 + 3 = 14.$$',
          rubric: [
            { code: 'M2', text: 'Counts triangles systematically by component count: $1$-part ($7$), $2$-part ($3$), $3$-part ($1$), and $5$-part ($3$).' },
            { code: 'A2', text: 'Computes the total $14$.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'In a $24$-hour period on a digital clock, from $0:00$ to $23:59$, how many times does the digit "$5$" occur?\n[At the time $3:55$, the digit "$5$" occurs $2$ times]',
          answer: '$504$',
          principle:
            'Count occurrences of the digit $5$ separately in each digit position (hours, tens of minutes, ones of minutes) across all $24 \\times 60$ minutes.',
          solution:
            'Count the digit "$5$" separately by position over the full $24$-hour day:\n1. **Hours display ($5:00$–$5:59$ and $15:00$–$15:59$):** $2$ hours $\\times$ $60$ minutes $= 120$ occurrences.\n2. **Tens place of minutes ($x:50$–$x:59$):** $10$ times per hour $\\times$ $24$ hours $= 240$ occurrences.\n3. **Ones place of minutes ($x:05, x:15, x:25, x:35, x:45, x:55$):** $6$ times per hour $\\times$ $24$ hours $= 144$ occurrences.\n\nTotal number of occurrences:\n$$120 + 240 + 144 = 504.$$',
          rubric: [
            { code: 'M2', text: 'Separates the count by digit position: hours ($120$), minute-tens ($240$), and minute-ones ($144$).' },
            { code: 'A2', text: 'Adds them to get $504$.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'The following bar chart shows the number of students from Happy Primary School who received $4$ different awards in SASMO competition. All the horizontal lines are equally spaced. The difference between the number of students who received Silver Award and Perfect Score was $140$. Students who didn\'t win any award received Certificate of Participation and they weren\'t indicated on the graph. The ratio between the number of students who received Gold Award to the number of students who received Certificate of Participation was $4:9$. Find the number of students who received Certificate of Participation.',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-18.webp',
              alt: 'Bar chart of SASMO award recipients across nine equally spaced horizontal gridlines labeled Gold, Silver, Bronze, and Perfect Score.',
              caption: 'Bar chart of SASMO award winners for Question 18.'
            }
          ],
          answer: '$135$',
          principle:
            'Read each bar height in grid-line units, determine the value of $1$ grid unit from the given difference, and scale the $4:9$ ratio.',
          solution:
            'Let $1$ vertical grid spacing equal $1$ unit. Reading the bars from the grid:\n- **Gold:** $3$ units\n- **Silver:** $8$ units\n- **Bronze:** $5$ units\n- **Perfect Score:** $1$ unit\n\nThe difference between Silver and Perfect Score is $8 - 1 = 7$ units, which corresponds to $140$ students:\n$$7\\text{ units} = 140 \\implies 1\\text{ unit} = 20\\text{ students}.$$\nThus, the number of Gold Award recipients is:\n$$3 \\times 20 = 60\\text{ students}.$$\nSince $\\text{Gold} : \\text{Certificate of Participation} = 4 : 9$, scaling by $60 \\div 4 = 15$ gives:\n$$9 \\times 15 = 135\\text{ students}.$$',
          rubric: [
            { code: 'M2', text: 'Reads bar heights ($3, 8, 5, 1$ units), finds $1\\text{ unit} = 20$, and computes $60$ Gold recipients.' },
            { code: 'A2', text: 'Applies the $4:9$ ratio to obtain $135$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'A pipe can fill up an empty tank in $18$ hours. Full tank can be emptied by a pump in $20$ hours. How long (in hours) will it take to fill up an empty tank if both the pipe and the pump are turned on at the same time?',
          answer: '$180$',
          principle:
            'Subtract the pump\'s hourly emptying rate from the pipe\'s hourly filling rate to find the net fraction of the tank filled per hour.',
          solution:
            'In $1$ hour:\n- The pipe fills $\\frac{1}{18}$ of the tank.\n- The pump empties $\\frac{1}{20}$ of the tank.\n\nWith both turned on together, the net fraction filled in $1$ hour is:\n$$\\frac{1}{18} - \\frac{1}{20} = \\frac{10}{180} - \\frac{9}{180} = \\frac{1}{180}\\text{ of the tank}.$$\nTherefore, filling the whole tank takes:\n$$1 \\div \\frac{1}{180} = 180\\text{ hours}.$$',
          rubric: [
            { code: 'M2', text: 'Computes the net hourly rate $\\frac{1}{18} - \\frac{1}{20} = \\frac{1}{180}$ of the tank.' },
            { code: 'A2', text: 'Finds the total filling time $180$ hours.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Ren selected $20$ different whole numbers greater than $0$ such that the product of any $9$ numbers is always even. The sum of the $20$ numbers is an odd number. Find the least possible sum of these numbers.',
          answer: '$231$',
          principle:
            'Ensure fewer than $9$ odd numbers are chosen (so no $9$-number product can be odd), keep the count of odd numbers odd (so the total sum is odd), and pick the smallest positive integers of each parity.',
          solution:
            'If $9$ or more of the chosen numbers were odd, the product of $9$ odd numbers would be odd. Thus, there are at most $8$ odd numbers among the $20$ numbers.\nSince the sum of all $20$ numbers is odd (and even numbers do not change parity), there must be an **odd** number of odd numbers. The largest odd count at most $8$ is **$7$ odd numbers** (and $13$ even numbers).\nTo minimize the total sum, choose the $7$ smallest positive odd numbers and the $13$ smallest positive even numbers:\n- Sum of the $7$ smallest odd numbers: $1 + 3 + 5 + 7 + 9 + 11 + 13 = 49$.\n- Sum of the $13$ smallest even numbers: $2 + 4 + 6 + \\dots + 26 = 2 \\times \\frac{13 \\times 14}{2} = 182$.\n\nLeast possible sum:\n$$49 + 182 = 231.$$',
          rubric: [
            { code: 'M2', text: 'Deduces there are at most $7$ odd numbers ($\\le 8$ and odd count) and $13$ even numbers.' },
            { code: 'A2', text: 'Sums $1+3+\\dots+13$ and $2+4+\\dots+26$ to obtain $231$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'The big square on the right is made up of $4$ rectangles and $1$ small square. The lengths and the breadths of $2$ rectangles are given in the picture. Find the perimeter (in $\\text{cm}$) of the big square.',
          figures: [
            {
              src: '/papers/sasmo-2019-g5/fig-21.webp',
              alt: 'A large square divided into four outer rectangles surrounding one central square, with a left rectangle labeled 11 cm by 5 cm and a top-right rectangle labeled 3 cm by 7 cm.',
              caption: 'Partitioned large square for Question 21.'
            }
          ],
          answer: '$52\\text{ cm}$',
          principle:
            'Let the central small square have side length $u$, express both the top side and the right side of the big square in terms of $u$, and equate them.',
          solution:
            'Let the side length of the central small square be $u\\text{ cm}$.\n- **Top side of the big square:** equals the width of the left rectangle ($5\\text{ cm}$), plus the small square ($u\\text{ cm}$), plus the width of the top-right rectangle ($3\\text{ cm}$):\n$$5 + u + 3 = 8 + u\\text{ cm}.$$\n- **Right side of the big square:** the vertical height of the top-right rectangle is $7\\text{ cm}$. Since the left rectangle has height $11\\text{ cm}$ and overlaps the central square of side $u\\text{ cm}$ plus the top-left rectangle, the remaining height below the top-right rectangle equals $11 - u\\text{ cm}$. Thus the right side of the big square is:\n$$7 + (11 - u) = 18 - u\\text{ cm}.$$\n\nSince all sides of the big square are equal:\n$$8 + u = 18 - u \\implies 2u = 10 \\implies u = 5\\text{ cm}.$$\nThe side length of the big square is $8 + 5 = 13\\text{ cm}$, so its perimeter is:\n$$4 \\times 13 = 52\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Sets up $8 + u = 18 - u$ and solves for the small square side $u = 5\\text{ cm}$.' },
            { code: 'A2', text: 'Computes the perimeter $4 \\times 13 = 52\\text{ cm}$.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. What is the value of the $4$-digit number $\\text{AECA}$?\n$$\\begin{array}{rrrr} & A & C & A & E \\\\ + & A & E & C & A \\\\ \\hline & C & E & D & A \\end{array}$$',
          answer: '$4094$',
          principle:
            'Analyze the column-by-column addition from right to left, tracking carries to pin down $E$, $C$, $A$, and $D$ uniquely.',
          solution:
            'Examine the columns from right to left:\n1. **Ones column ($E + A$ ends in $A$):** Because $E$ and $A$ are single digits, $E = 0$ (with no carry into the tens column).\n2. **Hundreds column ($C + E + \\text{carry} = C + \\text{carry}$ ends in $E = 0$):** If there were no carry from the tens column, $C = 0 = E$, which is invalid since distinct letters represent distinct digits. Therefore, there must be a carry of $1$ from the tens column, forcing $C + 1 = 10$, so $C = 9$ and a carry of $1$ passes into the thousands column.\n3. **Thousands column ($A + A + 1 = C = 9$):** Solving gives $2A = 8 \\implies A = 4$.\n4. **Tens column ($A + C$):** $4 + 9 = 13$, which gives $D = 3$ and confirms the carry of $1$ into the hundreds column.\n\nCheck: $4940 + 4094 = 9034$, with all four digits $A=4, E=0, C=9, D=3$ distinct. Thus $\\text{AECA} = 4094$.',
          rubric: [
            { code: 'M2', text: 'Deduces $E = 0$, $C = 9$ (from tens-column carry), and $A = 4$.' },
            { code: 'A2', text: 'Verifies $4940 + 4094 = 9034$ and gives $\\text{AECA} = 4094$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Shells are being distributed into a fixed number of boxes. If the shells are distributed into groups of $14$, there will be $6$ extra shells. When shells are grouped into $16$, there will be a shortage of $84$ shells. What is the total number of shells?',
          answer: '$636$',
          principle:
            'Compare the two distributions: adding $2$ shells to every box turns a surplus of $6$ into a shortage of $84$, accounting for a total difference of $6 + 84 = 90$ shells.',
          solution:
            'Increasing each box from $14$ shells to $16$ shells adds $16 - 14 = 2$ shells per box.\nUsing the $6$ leftover shells still leaves a shortage of $84$ shells, so the total extra shells needed to raise every box by $2$ shells is:\n$$6 + 84 = 90\\text{ shells}.$$\nHence, the number of boxes is:\n$$\\frac{90}{2} = 45\\text{ boxes}.$$\nTherefore, the total number of shells is:\n$$45 \\times 14 + 6 = 630 + 6 = 636.$$\nCheck: $45 \\times 16 - 84 = 720 - 84 = 636$.',
          rubric: [
            { code: 'M2', text: 'Finds the number of boxes $(6 + 84) \\div (16 - 14) = 45$.' },
            { code: 'A2', text: 'Computes $45 \\times 14 + 6 = 636$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Four $2$-digit numbers are made up from the digits $2, 3, 4, \\ldots, 9$ with no repetition. The following are the hints about these numbers:\n- In the smallest number, the ones digit is twice of tens digit.\n- In the largest number, the sum of ones and tens digits is $11$.\n- In one of the numbers, tens digit is $5$ more than ones digit.\n- One of the numbers is divisible by $7$.\n\nFind the second smallest number.',
          answer: '$56$',
          principle:
            'List the narrow candidate sets for each clue and eliminate conflicts using digit uniqueness ($2$ through $9$ each used once) and ordering.',
          solution:
            'All eight digits $2, 3, 4, 5, 6, 7, 8, 9$ are used once across the four $2$-digit numbers:\n- **Smallest number** (ones digit $= 2 \\times$ tens digit): must be $24$, $36$, or $48$.\n- **Number with tens digit $5$ more than ones digit**: must be $72$, $83$, or $94$.\n- **Largest number** (digit sum $11$): among pairs summing to $11$ ($29, 38, 47, 56, 65, 74, 83, 92$), it must be larger than the clue above ($\\ge 72$), leaving $74$, $83$, or $92$.\n\nTest the candidates for the largest number:\n- If the largest number is $92$, then the tens$-$ones $= 5$ number cannot be $72$ or $94$ (digits $2$ and $9$ are taken), so it must be $83$. That uses $2, 3, 8, 9$, leaving no valid smallest number among $24, 36, 48$.\n- If the largest number is $74$, then the tens$-$ones $= 5$ number must be $83$ (which exceeds $74$, impossible) or $94$ ($4$ is taken).\n- Therefore, the largest number must be **$83$** (which also satisfies $8 - 3 = 5$).\n\nSince $3$ and $8$ are used in $83$, neither $36$ nor $48$ can be the smallest number, so the smallest number is **$24$**.\nThe remaining four digits are $5, 6, 7, 9$. The remaining two $2$-digit numbers must lie between $24$ and $83$, and one must be divisible by $7$. The only multiple of $7$ available from $\\{5, 6, 7, 9\\}$ is **$56$** (leaving **$79$**, since $97 > 83$).\nThus, the four numbers in order are $24, 56, 79, 83$, and the second smallest number is **$56$**.',
          rubric: [
            { code: 'M2', text: 'Deduces the largest number is $83$ and the smallest number is $24$, leaving digits $\\{5, 6, 7, 9\\}$.' },
            { code: 'A2', text: 'Identifies the remaining numbers as $56$ and $79$, giving second smallest $56$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'Stan got some notebooks and pens from a bookstore. The price of a notebook was $7$ dollars, and a pen\'s price was $3$ dollars. There was a promotion "Buy $4$ notebooks, get $5$ pens free". He spent exactly $82$ dollars in total and enjoyed the promotion to the fullest such that he got the largest combined number of notebooks and pens. What is the total number of pens (including the free ones) that he got from the bookstore?',
          answer: '$23$',
          principle:
            'List all non-negative integer solutions to $7n + 3p = 82$, add $5$ free pens for every $4$ notebooks bought, and choose the case maximizing total items.',
          solution:
            'Let Stan buy $n$ notebooks and $p$ paid pens, so:\n$$7n + 3p = 82.$$\nList all valid pairs $(n, p)$ and compute the free pens ($5$ for each full group of $4$ notebooks) and the combined item count:\n- $n = 10, p = 4$ ($10 \\times 7 + 4 \\times 3 = 82$): $2 \\times 5 = 10$ free pens $\\implies$ combined total $= 10 + 4 + 10 = 24$.\n- $n = 7, p = 11$ ($7 \\times 7 + 11 \\times 3 = 82$): $1 \\times 5 = 5$ free pens $\\implies$ combined total $= 7 + 11 + 5 = 23$.\n- $n = 4, p = 18$ ($4 \\times 7 + 18 \\times 3 = 82$): $1 \\times 5 = 5$ free pens $\\implies$ combined total $= 4 + 18 + 5 = 27$.\n- $n = 1, p = 25$ ($1 \\times 7 + 25 \\times 3 = 82$): $0$ free pens $\\implies$ combined total $= 1 + 25 + 0 = 26$.\n\nThe largest combined number of notebooks and pens is $27$, achieved when he buys $4$ notebooks and $18$ pens (receiving $5$ free pens).\nHence, the total number of pens he got is:\n$$18 + 5 = 23.$$',
          rubric: [
            { code: 'M2', text: 'Enumerates solutions to $7n + 3p = 82$ with free pens and identifies $(n, p) = (4, 18)$ as giving the maximum $27$ total items.' },
            { code: 'A2', text: 'Computes total pens $18 + 5 = 23$.' }
          ]
        }
      ]
    }
  ]
};
