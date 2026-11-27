/**
 * Paket Soal: AMO Mock Test — Grade 4 (Primary 4 Mock Test Paper Set 1)
 * Sumber: American Mathematics Olympiad (SIMCC / SIU STEM Education Research Center), AMO-MOCK-UP-Grade-4.pdf.
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli dimuat lengkap sesuai bobot resmi AMO:
 * Section A (1–15 @ 3 poin = 45), Section B (16–20 @ 5 poin = 25), Section C (21–25 @ 6 poin = 30), totalMarks = 100.
 * Soal 4, 7, dan 11 dilengkapi gambar potongan (.webp).
 */
export default {
  id: 'amo-mock-g4',
  slug: 'amo-mock-grade-4',
  subject: 'olimpiade-mat',
  grade: 4,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'AMO Mock Test — Grade 4: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd4-bab1-bilangan-cacah',
    'sd4-bab2-pecahan',
    'sd4-bab3-pola-gambar-bilangan',
    'sd4-bab5-bangun-datar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMO',
  title: 'AMO Mock Test — Grade 4',
  totalMarks: 100,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 3 points each (45 points). Section B has 5 open-ended questions worth 5 points each (25 points). Section C has 5 open-ended questions worth 6 points each (30 points). No points are deducted for an unanswered or wrong answer. Diagrams for Questions 4, 7, and 11 are provided as figures.',
  source: {
    org: 'AMO',
    file: 'AMO-MOCK-UP-Grade-4.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 45,
      stem: 'Choose the one correct answer for each question (15 questions, 3 points each).',
      parts: [
        {
          label: '1',
          marks: 3,
          prompt:
            'Four kids can paint four balls in four minutes. If everyone works at the same speed, how many kids can paint $12$ balls in $12$ minutes?\n\nA. $4$\nB. $6$\nC. $8$\nD. $10$\nE. $12$',
          answer: 'A. $4$',
          principle:
            'Find the painting rate of one kid, then scale to the $12$-minute time window.',
          solution:
            'Since $4$ kids paint $4$ balls in $4$ minutes working at the same speed, $1$ kid paints $1$ ball in $4$ minutes.\nIn $12$ minutes (which is $12 \\div 4 = 3$ intervals of $4$ minutes), $1$ kid can paint:\n$$1 \\times 3 = 3\\text{ balls}.$$\nTo paint $12$ balls in $12$ minutes, the number of kids needed is:\n$$12 \\div 3 = 4.$$',
          rubric: [
            { code: 'M2', text: 'Finds that $1$ kid paints $1$ ball in $4$ minutes, or $3$ balls in $12$ minutes.' },
            { code: 'A1', text: 'Concludes $4$ kids are needed, option A.' }
          ]
        },
        {
          label: '2',
          marks: 3,
          prompt:
            'Find the value of\n$$25 \\times 48 + 32 \\times 25 + 25 \\times 20$$\n\nA. $1250$\nB. $25000$\nC. $2500$\nD. $2525$\nE. $2505$',
          answer: 'C. $2500$',
          principle:
            'Use the distributive property to factor out the common multiplier $25$.',
          solution:
            'Factor out $25$ from every term:\n$$25 \\times 48 + 32 \\times 25 + 25 \\times 20 = 25 \\times (48 + 32 + 20)$$\nSince $48 + 32 + 20 = 100$, the expression equals:\n$$25 \\times 100 = 2500.$$',
          rubric: [
            { code: 'M2', text: 'Factors out $25$ to get $25 \\times (48 + 32 + 20) = 25 \\times 100$.' },
            { code: 'A1', text: 'Computes $2500$, option C.' }
          ]
        },
        {
          label: '3',
          marks: 3,
          prompt:
            'How many natural numbers from $1$ to $100$ are not divisible by $5$ or $7$?\n\nA. $68$\nB. $66$\nC. $76$\nD. $78$\nE. $80$',
          answer: 'A. $68$',
          principle:
            'Apply the Principle of Inclusion-Exclusion to count multiples of $5$ or $7$, then subtract from $100$.',
          solution:
            'Count the multiples from $1$ to $100$:\n- Multiples of $5$: $\\lfloor 100 \\div 5 \\rfloor = 20$.\n- Multiples of $7$: $\\lfloor 100 \\div 7 \\rfloor = 14$ (from $7 \\times 1 = 7$ to $7 \\times 14 = 98$).\n- Multiples of both $5$ and $7$ (i.e., multiples of $35$): $\\lfloor 100 \\div 35 \\rfloor = 2$ ($35$ and $70$).\n\nThe number of integers from $1$ to $100$ divisible by $5$ or $7$ is:\n$$20 + 14 - 2 = 32.$$\nTherefore, the count of natural numbers from $1$ to $100$ not divisible by $5$ or $7$ is:\n$$100 - 32 = 68.$$',
          rubric: [
            { code: 'M2', text: 'Counts $20$ multiples of $5$, $14$ multiples of $7$, and $2$ multiples of $35$ to find $32$ multiples of $5$ or $7$.' },
            { code: 'A1', text: 'Subtracts $100 - 32 = 68$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 3,
          prompt:
            'The following $3 \\times 3$ grid is filled with numbers from $1$ to $9$. The numbers in all sides add up to $15$ horizontally and vertically. Find the value of $*$.\n\nA. $4$\nB. $5$\nC. $6$\nD. $7$\nE. $8$',
          figures: [
            {
              src: '/papers/amo-mock-g4/fig-4.webp',
              alt: 'A 3 by 3 number grid containing 9 in the top middle, 2 in the center, an asterisk in the middle right, and 3 in the bottom right.',
              caption: 'Partially filled 3 by 3 grid for Question 4.'
            }
          ],
          answer: 'D. $7$',
          principle:
            'Fill the lines that already have two known entries first, then match the remaining digits $\\{1, 5, 6, 7\\}$ to the $15$-sum constraints.',
          solution:
            'Notice that the middle column ($9$, $2$, and the bottom-middle cell) must sum to $15$ (or check via the outer sides and remaining digits):\n- Bottom-middle cell: $15 - 9 - 2 = 4$.\n- Bottom row (sum $15$): $\\text{bottom-left} + 4 + 3 = 15 \\implies \\text{bottom-left} = 8$.\n\nThe unused digits from $1$ to $9$ are now $\\{1, 5, 6, 7\\}$.\n- In the top row ($\\text{top-left} + 9 + \\text{top-right} = 15$), the two corners must sum to $6$, so they are $1$ and $5$ in some order.\n- In the left column ($\\text{top-left} + \\text{middle-left} + 8 = 15$), we need $\\text{top-left} + \\text{middle-left} = 7$.\n  - If $\\text{top-left} = 5$, then $\\text{middle-left} = 2$, which is already used in the center.\n  - Hence $\\text{top-left} = 1$, $\\text{middle-left} = 6$, and $\\text{top-right} = 5$.\n\nThis leaves $* = 7$ in the middle-right cell. Check: right column $5 + 7 + 3 = 15$ and middle row $6 + 2 + 7 = 15$.',
          rubric: [
            { code: 'M2', text: 'Finds bottom-middle $= 4$, bottom-left $= 8$, and assigns $\\{1, 5, 6\\}$ to the top row and left column.' },
            { code: 'A1', text: 'Concludes $* = 7$, option D.' }
          ]
        },
        {
          label: '5',
          marks: 3,
          prompt:
            '$$\\begin{array}{rrr} & A & 8 \\\\ \\times & & 8 \\\\ \\hline B & C & C \\end{array}$$\nFind the sum of $A + B + C$ if different letters stand for different digits.\n\nA. $15$\nB. $12$\nC. $10$\nD. $8$\nE. $7$',
          answer: 'A. $15$',
          principle:
            'Determine $C$ from the units digit of $8 \\times 8$, then test valid digits for $A$ keeping $A, B, C$ distinct.',
          solution:
            'Look at the ones column: $8 \\times 8 = 64$, so $C = 4$ with a carry of $6$ into the tens place.\nIn the tens and hundreds places:\n$$8 \\times A + 6 = 10B + C = 10B + 4.$$\nThus $8 \\times A + 2 = 10B$, meaning $8 \\times A$ must end in $8$, which limits $A$ to $1$ or $6$:\n- If $A = 1$: $18 \\times 8 = 144$, giving $B = 1 = A$ (invalid since different letters represent different digits).\n- If $A = 6$: $68 \\times 8 = 544$, giving $A = 6$, $B = 5$, $C = 4$ (all three digits are distinct).\n\nTherefore:\n$$A + B + C = 6 + 5 + 4 = 15.$$',
          rubric: [
            { code: 'M2', text: 'Finds $C = 4$ from $8 \\times 8 = 64$ and rules out $A = 1$ to obtain $68 \\times 8 = 544$.' },
            { code: 'A1', text: 'Computes $A + B + C = 15$, option A.' }
          ]
        },
        {
          label: '6',
          marks: 3,
          prompt:
            'What is the largest $3$-digit number which is divisible by $24$?\n\nA. $999$\nB. $996$\nC. $992$\nD. $984$\nE. $968$',
          answer: 'D. $984$',
          principle:
            'Divide the largest $3$-digit number ($999$) by $24$ and subtract the remainder.',
          solution:
            'Divide $999$ by $24$:\n$$999 = 24 \\times 41 + 15.$$\nSubtracting the remainder $15$ gives the largest $3$-digit multiple of $24$:\n$$999 - 15 = 984.$$\nCheck: $24 \\times 41 = 984$ and $24 \\times 42 = 1008$ (which is $4$ digits).',
          rubric: [
            { code: 'M2', text: 'Divides $999 \\div 24 = 41\\text{ R }15$ (or computes $24 \\times 41$).' },
            { code: 'A1', text: 'Obtains $984$, option D.' }
          ]
        },
        {
          label: '7',
          marks: 3,
          prompt:
            'The following picture shows a $4 \\times 4$ square. How many squares of any sizes are there comprised of the one marked with $\\mathbf{X}$?\n\nA. $1$\nB. $4$\nC. $5$\nD. $10$\nE. $16$',
          figures: [
            {
              src: '/papers/amo-mock-g4/fig-7.webp',
              alt: 'A 4 by 4 square grid of equal cells with the letter X marked inside the cell in the third row and second column.',
              caption: '4 by 4 grid with marked cell X for Question 7.'
            }
          ],
          answer: 'D. $10$',
          principle:
            'Count the squares containing cell $\\mathbf{X}$ separately by side length ($1 \\times 1$, $2 \\times 2$, $3 \\times 3$, and $4 \\times 4$).',
          solution:
            'Label the rows $1$ to $4$ from top to bottom and columns $1$ to $4$ from left to right. Cell $\\mathbf{X}$ is at row $3$, column $2$.\nCount every square containing $(3, 2)$ by its side length:\n- **$1 \\times 1$ squares:** only $(3, 2)$ itself $\\to 1$.\n- **$2 \\times 2$ squares:** the top-left corner can be in rows $\\{2, 3\\}$ and columns $\\{1, 2\\}$, giving $2 \\times 2 = 4$.\n- **$3 \\times 3$ squares:** the top-left corner can be in rows $\\{1, 2\\}$ and columns $\\{1, 2\\}$, giving $2 \\times 2 = 4$.\n- **$4 \\times 4$ squares:** only the entire $4 \\times 4$ grid $\\to 1$.\n\nTotal number of squares containing $\\mathbf{X}$:\n$$1 + 4 + 4 + 1 = 10.$$',
          rubric: [
            { code: 'M2', text: 'Counts squares containing $\\mathbf{X}$ by size: $1$ ($1\\times 1$), $4$ ($2\\times 2$), $4$ ($3\\times 3$), and $1$ ($4\\times 4$).' },
            { code: 'A1', text: 'Sums to $10$, option D.' }
          ]
        },
        {
          label: '8',
          marks: 3,
          prompt:
            '$$\\begin{array}{rrrr} & A & 5 & B \\\\ - & & C & 9 \\\\ \\hline & 2 & 9 & 9 \\end{array}$$\nFind the value of $A5B + C9$.\n\nA. $400$\nB. $417$\nC. $444$\nD. $527$\nE. $544$',
          answer: 'B. $417$',
          principle:
            'Rewrite the subtraction as the addition $299 + C9 = A5B$ and solve column by column from right to left.',
          solution:
            'Rewrite $A5B - C9 = 299$ as the addition:\n$$299 + C9 = A5B.$$\n- **Ones column:** $9 + 9 = 18$, so $B = 8$ with a carry of $1$ into the tens column.\n- **Tens column:** $9 + C + 1 = 10 + C$ has units digit $5$, so $C = 5$ with a carry of $1$ into the hundreds column.\n- **Hundreds column:** $2 + 1 = 3$, so $A = 3$.\n\nCheck: $358 - 59 = 299$. Therefore:\n$$A5B + C9 = 358 + 59 = 417.$$',
          rubric: [
            { code: 'M2', text: 'Solves $299 + C9 = A5B$ to find $A = 3$, $B = 8$, and $C = 5$.' },
            { code: 'A1', text: 'Computes $358 + 59 = 417$, option B.' }
          ]
        },
        {
          label: '9',
          marks: 3,
          prompt:
            "Sarah and Rose have few pencils. Two-fifths of Sarah's pencils and eight-ninths of Rose's pencils are both $40$ each. Who has more pencils and by how much?\n\nA. Sarah, $40$\nB. Rose, $40$\nC. Sarah, $50$\nD. Rose, $50$\nE. Sarah, $55$",
          answer: 'E. Sarah, $55$',
          principle:
            'Find each person’s total number of pencils from the given fraction of the whole, then subtract.',
          solution:
            'Use unit fractions to find each total:\n- $\\frac{2}{5}$ of Sarah’s pencils is $40$, so $\\frac{1}{5}$ is $40 \\div 2 = 20$. Thus Sarah has $20 \\times 5 = 100$ pencils.\n- $\\frac{8}{9}$ of Rose’s pencils is $40$, so $\\frac{1}{9}$ is $40 \\div 8 = 5$. Thus Rose has $5 \\times 9 = 45$ pencils.\n\nComparing the two totals:\n$$100 - 45 = 55.$$\nSo Sarah has $55$ more pencils than Rose.',
          rubric: [
            { code: 'M2', text: 'Finds Sarah has $100$ pencils and Rose has $45$ pencils.' },
            { code: 'A1', text: 'Concludes Sarah has $55$ more pencils, option E.' }
          ]
        },
        {
          label: '10',
          marks: 3,
          prompt:
            'There are $5$ green, $9$ orange, $6$ red, and $4$ blue candies in the bag. At least how many candies must Sam take to ensure he gets the first red candy?\n\nA. $19$\nB. $4$\nC. $10$\nD. $3$\nE. $15$',
          answer: 'A. $19$',
          principle:
            'Apply the worst-case (Pigeonhole) principle: assume every non-red candy is drawn before the first red candy.',
          solution:
            'In the worst case, Sam draws all the candies that are not red first:\n$$5\\text{ green} + 9\\text{ orange} + 4\\text{ blue} = 18\\text{ non-red candies}.$$\nThe very next candy drawn (the $19$-th candy) must be red.\nThus Sam must take at least $18 + 1 = 19$ candies.',
          rubric: [
            { code: 'M2', text: 'Sums all non-red candies ($5 + 9 + 4 = 18$) for the worst case and adds $1$.' },
            { code: 'A1', text: 'Obtains $19$, option A.' }
          ]
        },
        {
          label: '11',
          marks: 3,
          prompt:
            'The following $4 \\times 4 \\times 4$ cube is painted red on all its faces. Find the number of smaller cubes with at most two faces painted.\n\nA. $8$\nB. $16$\nC. $24$\nD. $36$\nE. $56$',
          figures: [
            {
              src: '/papers/amo-mock-g4/fig-11.webp',
              alt: 'Isometric drawing of a 4 by 4 by 4 cube composed of 64 smaller unit cubes.',
              caption: '4 by 4 by 4 cube for Question 11.'
            }
          ],
          answer: 'E. $56$',
          principle:
            'Every unit cube in a painted cube has $0, 1, 2,$ or $3$ faces painted, and only the $8$ corner cubes have $3$ faces painted.',
          solution:
            'The total number of smaller $1 \\times 1 \\times 1$ cubes is:\n$$4 \\times 4 \\times 4 = 64.$$\nEvery smaller cube has at most $3$ faces painted, and only the $8$ corner cubes have $3$ faces painted.\nTherefore, the number of smaller cubes with at most $2$ faces painted ($0$, $1$, or $2$ faces painted) is:\n$$64 - 8 = 56.$$\n(Check by layer: $8$ unpainted interior cubes $+ 24$ cubes with $1$ painted face $+ 24$ cubes with $2$ painted faces $= 56$.)',
          rubric: [
            { code: 'M2', text: 'Computes $4^3 = 64$ total cubes and subtracts the $8$ corner cubes with $3$ painted faces.' },
            { code: 'A1', text: 'Obtains $56$, option E.' }
          ]
        },
        {
          label: '12',
          marks: 3,
          prompt:
            'The combined age of Ram and Shyam five years from now will be $37$. Ram was twice as old as Shyam $3$ years ago. How old is Ram now?\n\nA. $7$\nB. $10$\nC. $14$\nD. $17$\nE. $20$',
          answer: 'D. $17$',
          principle:
            'Adjust the combined age across time (subtracting $2$ years per person per year shifted) and apply a ratio model $3$ years ago.',
          solution:
            'Five years from now, each boy will be $5$ years older, so their combined age will increase by $2 \\times 5 = 10$ years.\n- Combined age now: $37 - 10 = 27$.\n- Combined age $3$ years ago: $27 - 2 \\times 3 = 21$.\n\nThree years ago, Ram’s age was $2$ units and Shyam’s age was $1$ unit, making $3$ units $= 21$, so $1$ unit $= 7$.\nThus Ram was $2 \\times 7 = 14$ years old $3$ years ago, which means Ram’s age now is:\n$$14 + 3 = 17.$$',
          rubric: [
            { code: 'M2', text: 'Finds combined age $3$ years ago is $21$ and uses the $2:1$ ratio to get Ram was $14$.' },
            { code: 'A1', text: 'Adds $3$ to get Ram’s current age $17$, option D.' }
          ]
        },
        {
          label: '13',
          marks: 3,
          prompt:
            'Two regular $6$-sided dice were thrown on the ground. All the numbers visible on the dice were added. The sum of numbers on all the visible faces was $31$. What is the difference between the numbers facing the ground?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'B. $1$',
          principle:
            'Subtract the visible sum from the total of all faces on both dice ($42$) to find the sum of the two hidden bottom faces.',
          solution:
            'Each regular $6$-sided die has faces $1, 2, 3, 4, 5, 6$, whose sum is:\n$$1 + 2 + 3 + 4 + 5 + 6 = 21.$$\nSo all $12$ faces on two dice sum to $2 \\times 21 = 42$.\nOnly the two faces touching the ground are hidden, so the sum of the two numbers facing the ground is:\n$$42 - 31 = 11.$$\nSince each die face is at most $6$, the only pair of face values summing to $11$ is $5$ and $6$.\nTheir difference is:\n$$6 - 5 = 1.$$',
          rubric: [
            { code: 'M2', text: 'Computes $42 - 31 = 11$ for the sum of the two hidden faces and identifies them as $5$ and $6$.' },
            { code: 'A1', text: 'Finds difference $6 - 5 = 1$, option B.' }
          ]
        },
        {
          label: '14',
          marks: 3,
          prompt:
            'Ron and Vanda each thought of a two-digit number. The product of their digits was $24$ and $35$ respectively. The difference between their numbers was $37$. What is the sum of their numbers?\n\nA. $95$\nB. $100$\nC. $113$\nD. $121$\nE. $139$',
          answer: 'C. $113$',
          principle:
            'List all two-digit numbers with digit products $24$ and $35$, then match the pair whose difference is $37$.',
          solution:
            'Find all possible two-digit numbers for each person:\n- **Ron** (digit product $24 = 3 \\times 8 = 4 \\times 6$): $38, 46, 64, 83$.\n- **Vanda** (digit product $35 = 5 \\times 7$): $57, 75$.\n\nCheck which pair has difference $37$:\n- With Vanda $= 57$: $57 + 37 = 94$ and $57 - 37 = 20$ (neither is in Ron’s list).\n- With Vanda $= 75$: $75 - 37 = 38$, which is in Ron’s list.\n\nThus the two numbers are $38$ and $75$, and their sum is:\n$$38 + 75 = 113.$$',
          rubric: [
            { code: 'M2', text: 'Lists candidates $\\{38, 46, 64, 83\\}$ and $\\{57, 75\\}$ and identifies $75 - 38 = 37$.' },
            { code: 'A1', text: 'Computes $38 + 75 = 113$, option C.' }
          ]
        },
        {
          label: '15',
          marks: 3,
          prompt:
            'Ann read a book with $1000$ pages. How many digits were used to print the page numbers on the book?\n\nA. $3000$\nB. $2550$\nC. $2987$\nD. $3193$\nE. $2893$',
          answer: 'E. $2893$',
          principle:
            'Group the page numbers by their number of digits ($1$-digit, $2$-digit, $3$-digit, and $4$-digit) and sum the digit counts.',
          solution:
            'Count the digits used in each range of page numbers:\n- Pages $1$ to $9$ ($9$ pages, $1$ digit each): $9 \\times 1 = 9$ digits.\n- Pages $10$ to $99$ ($99 - 10 + 1 = 90$ pages, $2$ digits each): $90 \\times 2 = 180$ digits.\n- Pages $100$ to $999$ ($999 - 100 + 1 = 900$ pages, $3$ digits each): $900 \\times 3 = 2700$ digits.\n- Page $1000$ ($1$ page, $4$ digits): $1 \\times 4 = 4$ digits.\n\nTotal number of digits used:\n$$9 + 180 + 2700 + 4 = 2893.$$',
          rubric: [
            { code: 'M2', text: 'Splits into $1$-, $2$-, $3$-, and $4$-digit page ranges: $9 \\times 1 + 90 \\times 2 + 900 \\times 3 + 4$.' },
            { code: 'A1', text: 'Sums to $2893$, option E.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Open-Ended Questions',
      marks: 25,
      stem: 'Write the final answer for each open-ended question (5 questions, 5 points each).',
      parts: [
        {
          label: '16',
          marks: 5,
          prompt:
            'Sam filled up some boxes with sweets. If he put $5$ sweets in each box, he was left with $4$ extra sweets. If he put $6$ sweets in each box, the last box would have only $2$ sweets. Find the number of sweets Sam had.',
          answer: '$44$',
          principle:
            'Compare the excess in the first packing ($+4$) with the shortfall in the second packing ($-4$ from filling every box with $6$) to find the number of boxes.',
          solution:
            'Let $b$ be the number of boxes.\n- Putting $5$ sweets in each box leaves $4$ extra sweets, so Sam has $5b + 4$ sweets.\n- Putting $6$ sweets in each box leaves the last box with $2$ sweets instead of $6$, which is $6 - 2 = 4$ sweets short of filling all $b$ boxes with $6$ sweets each, so Sam has $6b - 4$ sweets.\n\nEquating the two expressions:\n$$5b + 4 = 6b - 4 \\implies b = 8\\text{ boxes}.$$\nTherefore, the number of sweets Sam had is:\n$$5 \\times 8 + 4 = 44.$$',
          rubric: [
            { code: 'M3', text: 'Sets up $5b + 4 = 6b - 4$ (or excess-shortfall difference $4 + 4 = 8$ divided by $6 - 5 = 1$) to get $8$ boxes.' },
            { code: 'A2', text: 'Computes $44$ sweets.' }
          ]
        },
        {
          label: '17',
          marks: 5,
          prompt:
            'When the product of $9$ and a number is divided by $4$ and then multiplied by $25$, the result is $19800$. Find the number.',
          answer: '$352$',
          principle:
            'Work backwards from the final result $19800$ by reversing each operation in opposite order.',
          solution:
            'Let the unknown number be $n$. The operations give:\n$$\\frac{9n}{4} \\times 25 = 19800.$$\nReverse the steps in order:\n1. Divide by $25$: $19800 \\div 25 = 792$.\n2. Multiply by $4$: $792 \\times 4 = 3168$.\n3. Divide by $9$: $3168 \\div 9 = 352$.\n\nCheck: $(9 \\times 352) \\div 4 \\times 25 = 3168 \\div 4 \\times 25 = 792 \\times 25 = 19800$.',
          rubric: [
            { code: 'M3', text: 'Reverses the operations: $19800 \\div 25 = 792$, then $792 \\times 4 = 3168$.' },
            { code: 'A2', text: 'Finds $3168 \\div 9 = 352$.' }
          ]
        },
        {
          label: '18',
          marks: 5,
          prompt:
            "What is the largest possible value of '$m$' in $653m2$ such that it is divisible by $3$?",
          answer: '$8$',
          principle:
            'A number is divisible by $3$ if and only if the sum of its digits is divisible by $3$.',
          solution:
            'Sum the digits of $653m2$:\n$$6 + 5 + 3 + m + 2 = 16 + m.$$\nFor $16 + m$ to be divisible by $3$ with $0 \\le m \\le 9$, the possible sums are $18$, $21$, and $24$, giving $m \\in \\{2, 5, 8\\}$.\nThe largest possible digit value is $m = 8$ (giving $65382$, whose digit sum is $24$).',
          rubric: [
            { code: 'M3', text: 'Uses the divisibility rule for $3$ to set $16 + m$ as a multiple of $3$ ($m \\in \\{2, 5, 8\\}$).' },
            { code: 'A2', text: 'Identifies the largest value $8$.' }
          ]
        },
        {
          label: '19',
          marks: 5,
          prompt:
            'A five-digit number is formed such that it satisfies the following conditions:\n- It is a multiple of $3$ and $5$.\n- The third digit is half of the first digit and one less than the second digit.\n- The sum of the first three digits is $13$ and the sum of the last three digits is $8$.\n- The fourth digit is the second-largest digit of that number.\n\nFind the sum of digits of that number.',
          answer: '$18$',
          principle:
            'Express the first three digits in terms of the third digit to solve for them directly, then use divisibility by $5$ and the ordering condition to determine the last two digits.',
          solution:
            'Let the five-digit number be $\\overline{abcde}$.\n1. From the second condition, $a = 2c$ and $b = c + 1$. Substituting into $a + b + c = 13$:\n$$2c + (c + 1) + c = 13 \\implies 4c = 12 \\implies c = 3.$$\nHence $a = 6$ and $b = 4$.\n2. From $c + d + e = 8$, we get $3 + d + e = 8 \\implies d + e = 5$.\n3. Since the number is a multiple of $5$, $e$ is either $0$ or $5$, giving two possibilities:\n   - $(d, e) = (5, 0) \\implies 64350$, whose digits from largest to smallest are $6, 5, 4, 3, 0$. Here $d = 5$ is indeed the second-largest digit.\n   - $(d, e) = (0, 5) \\implies 64305$, where $d = 0$ is the smallest digit (invalid).\n4. Check divisibility by $3$: the sum of the digits of $64350$ is:\n$$6 + 4 + 3 + 5 + 0 = 18,$$\nwhich is a multiple of $3$ (and $64350$ is divisible by both $3$ and $5$).\n\nTherefore, the sum of digits of the number is $18$.',
          rubric: [
            { code: 'M3', text: 'Finds $a=6, b=4, c=3$, deduces $d+e=5$, and selects $64350$ over $64305$ using the fourth-digit condition.' },
            { code: 'A2', text: 'Computes the digit sum $18$.' }
          ]
        },
        {
          label: '20',
          marks: 5,
          prompt:
            'Find the sum of the numbers in the $12^{\\text{th}}$ group of the following sequence:\n$$(1, 4, 6), (2, 6, 10), (3, 8, 14), \\ldots$$',
          answer: '$88$',
          principle:
            'Identify the arithmetic progression rule for each of the three positions (or for the group sums directly).',
          solution:
            'Examine the $n^{\\text{th}}$ group in the sequence:\n- **First number:** $1, 2, 3, \\ldots \\implies n$. For $n = 12$, this is $12$.\n- **Second number:** $4, 6, 8, \\ldots$ (starts at $4$, increases by $2$ each step) $\\implies 4 + 2(n - 1) = 2n + 2$. For $n = 12$, this is $2(12) + 2 = 26$.\n- **Third number:** $6, 10, 14, \\ldots$ (starts at $6$, increases by $4$ each step) $\\implies 6 + 4(n - 1) = 4n + 2$. For $n = 12$, this is $4(12) + 2 = 50$.\n\nSo the $12^{\\text{th}}$ group is $(12, 26, 50)$, and its sum is:\n$$12 + 26 + 50 = 88.$$\n(Alternatively, the group sums $11, 18, 25, \\ldots$ increase by $7$ each step, so the $12^{\\text{th}}$ sum is $11 + 11 \\times 7 = 88$.)',
          rubric: [
            { code: 'M3', text: 'Finds the $12^{\\text{th}}$ group $(12, 26, 50)$ (or the group-sum pattern $11 + 7(n-1)$).' },
            { code: 'A2', text: 'Obtains $88$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Section C: Open-Ended Questions',
      marks: 30,
      stem: 'Write the final answer for each open-ended question (5 questions, 6 points each).',
      parts: [
        {
          label: '21',
          marks: 6,
          prompt:
            '$16$ trees are planted on one side of the road. Two cars are parked between every two trees. How many cars are there?',
          answer: '$30$',
          principle:
            'Apply the interval (fencepost) rule: $n$ objects in a line create $n - 1$ gaps between adjacent objects.',
          solution:
            'Along one side of the road, $16$ trees form:\n$$16 - 1 = 15\\text{ intervals}$$between consecutive trees.\nSince $2$ cars are parked in each interval, the total number of cars is:\n$$15 \\times 2 = 30.$$',
          rubric: [
            { code: 'M4', text: 'Recognizes there are $16 - 1 = 15$ intervals between adjacent trees.' },
            { code: 'A2', text: 'Multiplies $15 \\times 2 = 30$ cars.' }
          ]
        },
        {
          label: '22',
          marks: 6,
          prompt:
            'Ten small ropes of the same length were knotted together to form a big rope of $81\\text{ cm}$. If the knotted area was $1\\text{ cm}$ for every rope, how long was each rope?',
          answer: '$9\\text{ cm}$',
          principle:
            'Joining $10$ ropes end-to-end creates $10 - 1 = 9$ knots; add the total knotted overlap back to the combined length before dividing by $10$.',
          solution:
            'When $10$ ropes of equal length $L$ are tied end-to-end in a single line, there are:\n$$10 - 1 = 9\\text{ knots}.$$\nEach knot accounts for $1\\text{ cm}$ of overlap, so $9 \\times 1 = 9\\text{ cm}$ of total length is used in the knots.\nAdding the knotted length back to the final $81\\text{ cm}$ rope gives the sum of the $10$ original ropes:\n$$10L = 81 + 9 = 90\\text{ cm}.$$\nTherefore, each small rope had length:\n$$L = 90 \\div 10 = 9\\text{ cm}.$$',
          rubric: [
            { code: 'M4', text: 'Finds $10 - 1 = 9$ knots and adds $9\\text{ cm}$ to $81\\text{ cm}$ to get $10L = 90\\text{ cm}$.' },
            { code: 'A2', text: 'Divides by $10$ to obtain $9\\text{ cm}$.' }
          ]
        },
        {
          label: '23',
          marks: 6,
          prompt:
            'Find the value of the digit at the ones place of the following expression:\n$$99 \\times 101 \\times 103 \\times 105 \\times 107 - 100 \\times 102 \\times 104 \\times 106 \\times 108$$',
          answer: '$5$',
          principle:
            'Determine the ones digit of each product using divisibility by $5$, $2$, and $10$, and note which product is larger.',
          solution:
            'Inspect the ones digit of each product separately:\n- **First product ($99 \\times 101 \\times 103 \\times 105 \\times 107$):** All five factors are odd, and $105$ is a multiple of $5$. Any product of odd numbers that includes a multiple of $5$ ends in $5$.\n- **Second product ($100 \\times 102 \\times 104 \\times 106 \\times 108$):** Because $100$ is a factor, this product is a multiple of $100$ and ends in $0$.\n\nNotice that every factor in the second product exceeds the corresponding factor in the first ($100 > 99$, $102 > 101$, $\\ldots$, $108 > 107$), so the second product is larger ($12{,}144{,}038{,}400 > 11{,}570{,}892{,}795$). Subtracting gives a negative value ($-573{,}145{,}605$) whose ones-place digit is $5$ (since a number ending in $0$ minus a number ending in $5$ ends in $10 - 5 = 5$).',
          rubric: [
            { code: 'M4', text: 'Determines the first product ends in $5$ (odd factors with $105$) and the second product ends in $0$ (multiple of $100$).' },
            { code: 'A2', text: 'Finds the ones-place digit is $5$.' }
          ]
        },
        {
          label: '24',
          marks: 6,
          prompt:
            'Among Jack, Jade and James, one of them is a painter, the other is a lawyer and the third is a firefighter. Jack is older than the firefighter while the lawyer is younger than James. Also, Jade and lawyer are not the same age. Find who the firefighter is.\n(Put Jack=$1$, Jade=$2$ and James=$3$ in your answer)',
          answer: '$2$ (Jade)',
          principle:
            'Use the clues to identify the lawyer first, then build the complete age inequality to separate the remaining two people.',
          solution:
            'Eliminate candidates for the **lawyer**:\n- The lawyer is younger than James, so James is not the lawyer.\n- Jade and the lawyer are not the same age, so Jade is not the lawyer.\n- Therefore, **Jack** must be the lawyer.\n\nNow order their ages using the clues:\n- Jack is older than the firefighter: $\\text{Firefighter} < \\text{Jack (Lawyer)}$.\n- The lawyer is younger than James: $\\text{Jack (Lawyer)} < \\text{James}$.\n\nCombining both inequalities gives:\n$$\\text{Firefighter} < \\text{Jack (Lawyer)} < \\text{James}.$$\nSince James is older than Jack while the firefighter is younger than Jack, James cannot be the firefighter (so James is the painter). Thus **Jade** is the firefighter, which corresponds to $2$.',
          rubric: [
            { code: 'M4', text: 'Deduces Jack is the lawyer and establishes $\\text{Firefighter} < \\text{Jack} < \\text{James}$ to eliminate James.' },
            { code: 'A2', text: 'Identifies Jade ($2$) as the firefighter.' }
          ]
        },
        {
          label: '25',
          marks: 6,
          prompt:
            'Patrick scored $82$ and $85$ marks respectively in English and Science. If the total marks of these papers are $100$, how many marks should he score in Mathematics so that his average marks in these three subjects becomes $87$?',
          answer: '$94$',
          principle:
            'Multiply the desired average by the number of subjects ($3$) to get the required total score, then subtract the two known scores.',
          solution:
            'To achieve an average of $87$ marks across $3$ subjects, Patrick needs a total score of:\n$$87 \\times 3 = 261\\text{ marks}.$$\nHis combined score in English and Science is:\n$$82 + 85 = 167\\text{ marks}.$$\nTherefore, the score he needs in Mathematics is:\n$$261 - 167 = 94.$$',
          rubric: [
            { code: 'M4', text: 'Computes required total $87 \\times 3 = 261$ and current sum $82 + 85 = 167$.' },
            { code: 'A2', text: 'Subtracts to find $94$.' }
          ]
        }
      ]
    }
  ]
};
