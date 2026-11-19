/**
 * Paket Soal: SIMOC 2017 Grade 4 (AMO KRIS Contest).
 * Sumber: simoc_2017_g4.pdf. Soal 2 (butuh gambar bangun berarsir) dan soal 7 (data anggaran tidak konsisten) tidak dimuat.
 * Soal bergambar (10, 13, 15, 21, 23, 25) dituliskan ulang secara tekstual dari gambar asli.
 */
export default {
  id: 'simoc-2017-g4',
  slug: 'simoc-2017-grade-4',
  subject: 'olimpiade-mat',
  grade: 4,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'SIMOC 2017 Grade 4: Aritmetika, Logika, Pola, dan Geometri',
  relatedChapterIds: ['sd4-bab1-bilangan-cacah', 'sd4-bab3-pola-gambar-bilangan', 'sd4-bab5-bangun-datar'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SIMOC',
  title: 'SIMOC 2017 Grade 4',
  totalMarks: 66,
  instructions:
    'Section A contains multiple-choice questions with five options (A to E); each correct answer scores 2 points. Section B contains short-answer questions; each correct answer scores 4 points. Questions that depended on a printed figure have been restated in words with all measurements given.',
  source: {
    org: 'SIMOC',
    file: 'simoc_2017_g4.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 26,
      stem: 'Choose the correct answer for each question. Each correct answer scores 2 points (13 questions).',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Find the value of the following.\n$$234 \\times 7 + 7 \\times 342 + 423 \\times 7$$\n\nA. $7000$\nB. $6939$\nC. $6993$\nD. $6393$\nE. None of the above',
          answer: 'C. $6993$',
          principle: 'Distributive property: $a\\times c + b\\times c + d\\times c = (a+b+d)\\times c$.',
          solution:
            'Every term contains the factor $7$, so factor it out:\n$$234 \\times 7 + 7 \\times 342 + 423 \\times 7 = 7 \\times (234 + 342 + 423)$$\nNow $234 + 342 + 423 = 999$, so the value is\n$$7 \\times 999 = 7 \\times 1000 - 7 = 6993.$$',
          rubric: [{ code: 'A2', text: 'Correct answer C with valid working.' }]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Joel, Kathy and Lauren have 29 sweets altogether. Joel has 3 times as many sweets as Kathy. Lauren has 4 more sweets than Kathy. How many sweets does Lauren have?\n\nA. $15$\nB. $9$\nC. $5$\nD. $10$\nE. None of the above',
          answer: 'B. $9$',
          principle: 'Express every quantity in terms of one unknown (Kathy sweets) and form a linear equation.',
          solution:
            'Let Kathy have $k$ sweets. Then Joel has $3k$ and Lauren has $k+4$.\n$$3k + k + (k+4) = 29 \\implies 5k = 25 \\implies k = 5.$$\nLauren has $5 + 4 = 9$ sweets. Check: $15 + 5 + 9 = 29$.',
          rubric: [{ code: 'A2', text: 'Correct answer B with valid working.' }]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'The difference between two 3-digit numbers is 328. What is the greatest possible sum of these two numbers?\n\nA. $1\\,999$\nB. $2326$\nC. $328$\nD. $1000$\nE. None of the above',
          answer: 'E. None of the above',
          principle: 'If the difference is fixed, the sum is largest when the larger number is as large as possible.',
          solution:
            'Let the larger number be $N$ and the smaller $N - 328$. Their sum is $N + (N-328) = 2N - 328$, which increases with $N$.\nThe largest 3-digit number is $N = 999$, and then the smaller number is $999 - 328 = 671$, which is still a 3-digit number.\nGreatest sum $= 999 + 671 = 1670$. This is not among A to D, so the answer is E.',
          rubric: [{ code: 'A2', text: 'Correct answer E with valid working.' }]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'There are 4 different pairs of whole numbers with a sum of 8:\n$1+7=8$, $2+6=8$, $3+5=8$, $4+4=8$.\nHow many different pairs of whole numbers with a sum of 500 are there?\n\nA. $250$\nB. $249$\nC. $500$\nD. $1000$\nE. None of the above',
          answer: 'A. $250$',
          principle: 'Counting unordered pairs: the smaller number ranges from 1 up to half of the sum.',
          solution:
            'Following the example for 8 (where the smaller number runs over $1,2,3,4$), a pair is determined by its smaller number $a$ with $1 \\le a \\le 500 - a$, that is $1 \\le a \\le 250$. Each such $a$ gives exactly one pair $(a, 500-a)$, from $1+499$ up to $250+250$.\nSo there are $250$ pairs.',
          rubric: [{ code: 'A2', text: 'Correct answer A with valid working.' }]
        },
        {
          label: '6',
          marks: 2,
          prompt:
            'A stack has 9 different number cards. The numbers are from 1 to 9. Alex, Benjamin, Carol and Danish each draw 2 cards. It is given that\n- the sum of the cards drawn by Alex equals 10;\n- the difference of the cards drawn by Benjamin equals 1;\n- the product of the cards drawn by Carol equals 24;\n- the quotient of the cards drawn by Danish is equal to 3.\nWhich number card is still left in the stack?\n\nA. $3$\nB. $2$\nC. $5$\nD. $7$\nE. None of the above',
          answer: 'D. $7$',
          principle: 'Case analysis on the most restrictive clue (the product 24), keeping all drawn cards distinct.',
          solution:
            'Possible pairs: Alex $\\{1,9\\},\\{2,8\\},\\{3,7\\},\\{4,6\\}$; Carol (product $24$) $\\{3,8\\}$ or $\\{4,6\\}$; Danish (quotient $3$) $\\{1,3\\},\\{2,6\\},\\{3,9\\}$.\n**Carol $=\\{3,8\\}$:** Danish cannot use $3$, so Danish $=\\{2,6\\}$. Alex cannot use $3,8,2,6$, so Alex $=\\{1,9\\}$. The cards left are $4,5,7$, and Benjamin needs consecutive cards: $\\{4,5\\}$. The card left is $7$.\n**Carol $=\\{4,6\\}$:** Danish $=\\{1,3\\}$ or $\\{3,9\\}$. In both cases Alex must be $\\{2,8\\}$ (the pairs $\\{1,9\\}$, $\\{3,7\\}$ clash with Danish). Then the remaining cards are $\\{5,7,9\\}$ or $\\{1,5,7\\}$, which contain no two consecutive numbers, so Benjamin cannot draw. This case is impossible.\nHence the only possibility leaves card $7$.',
          rubric: [{ code: 'A2', text: 'Correct answer D with valid working.' }]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'A tree is planted every 12 metres along one side of a road. Including the trees at two ends of the road, there are 40 trees in total. 27 lamp posts are also installed along another side of the same road. The distance between any two neighbouring lamp posts is the same and there are lamp posts at the two ends of the road. What is the distance between two neighbouring lamp posts?\n\nA. $18$ metres\nB. $20$ metres\nC. $17$ metres\nD. $16$ metres\nE. None of the above',
          answer: 'A. $18$ metres',
          principle: 'Planting-in-a-line problems: with objects at both ends, the number of gaps is one less than the number of objects.',
          solution:
            '40 trees give $39$ gaps, so the road is $39 \\times 12 = 468$ metres long.\n27 lamp posts give $26$ gaps, so the distance between neighbouring posts is $468 \\div 26 = 18$ metres.',
          rubric: [{ code: 'A2', text: 'Correct answer A with valid working.' }]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'Josh lives on the 8th floor. He needs to climb 24 steps to move from the 2nd floor to the 5th floor. How many steps does he need to climb to move from the 1st floor to the 8th floor?\n\nA. $96$\nB. $64$\nC. $56$\nD. $48$\nE. None of the above',
          answer: 'C. $56$',
          principle: 'Count the flights between floors (one fewer than the number of floors), not the floors themselves.',
          solution:
            'From the 2nd to the 5th floor is $5 - 2 = 3$ flights, so each flight has $24 \\div 3 = 8$ steps.\nFrom the 1st to the 8th floor is $8 - 1 = 7$ flights, so he climbs $7 \\times 8 = 56$ steps.',
          rubric: [{ code: 'A2', text: 'Correct answer C with valid working.' }]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            'A rectilinear shape (all corners are right angles) is obtained as follows. Start with a rectangle 16 units wide and 10 units tall, and cut out three white rectangles; the remaining part is the shaded region.\n- A cut-out 4 units wide and 2 units deep, touching the top edge, whose left side is 4 units from the top-left corner.\n- A cut-out in the top-right corner, 2 units wide and 6 units tall.\n- A cut-out 6 units wide and 4 units tall, touching the bottom edge, whose left side is 4 units from the bottom-left corner.\nGiven that the area of the shaded region is $A$ and the perimeter of the shaded region is $P$, find $A + P$.\n\nA. $168$\nB. $176$\nC. $180$\nD. $190$\nE. None of the above',
          answer: 'C. $180$',
          principle: 'Area by subtraction of cut-outs; perimeter of a rectilinear shape: a notch adds twice its depth, a corner cut-out leaves it unchanged.',
          solution:
            'Area: $A = 16 \\times 10 - 4 \\times 2 - 2 \\times 6 - 6 \\times 4 = 160 - 8 - 12 - 24 = 116$.\nPerimeter: the full rectangle has perimeter $2(16+10) = 52$. Cutting out a corner rectangle does not change the perimeter. The top notch of depth $2$ adds $2 \\times 2 = 4$, and the bottom notch of depth $4$ adds $2 \\times 4 = 8$. So $P = 52 + 4 + 8 = 64$.\nTherefore $A + P = 116 + 64 = 180$.',
          rubric: [{ code: 'A2', text: 'Correct answer C with valid working.' }]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'In a certain year, there are more Sundays than Tuesdays, and there are more Saturdays than Thursdays. What day of the week is 7 January in that year?\n\nA. Monday\nB. Wednesday\nC. Thursday\nD. Friday\nE. Sunday',
          answer: 'D. Friday',
          principle: 'A year has 52 full weeks plus 1 or 2 extra days; only the extra days occur 53 times.',
          solution:
            'A common year has $365 = 52 \\times 7 + 1$ days, so only one weekday occurs 53 times; it cannot make both Sunday exceed Tuesday and Saturday exceed Thursday.\nSo the year is a leap year, $366 = 52 \\times 7 + 2$, and exactly two consecutive weekdays (the days of 1 January and 2 January) occur 53 times. Sunday and Saturday must both be among them, so 1 January is Saturday and 2 January is Sunday.\nThen 7 January is $6$ days after Saturday, which is Friday.',
          rubric: [{ code: 'A2', text: 'Correct answer D with valid working.' }]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'How many different ways are there to get 10 dollars using 1-dollar, 2-dollar or 5-dollar notes?\n\nA. $3$\nB. $5$\nC. $8$\nD. $10$\nE. None of the above',
          answer: 'D. $10$',
          principle: 'Systematic listing by the number of the largest notes.',
          solution:
            'Let $c$ be the number of 5-dollar notes. The remaining amount is made from 2-dollar and 1-dollar notes.\n- $c = 0$: 10 dollars with 2-dollar notes $b = 0,1,\\dots,5$ and the rest in 1-dollar notes: $6$ ways.\n- $c = 1$: 5 dollars left, $b = 0,1,2$: $3$ ways.\n- $c = 2$: nothing left: $1$ way.\nTotal $6 + 3 + 1 = 10$ ways.',
          rubric: [{ code: 'A2', text: 'Correct answer D with valid working.' }]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Each 2 x 2 grid represents a digit and each row of three 2 x 2 grids represents a 3-digit number. Rows A, B, C and D give the numbers 913, 895, 628 and 238 in some order. In each grid, the cells are listed as (top-left, top-right, bottom-left, bottom-right) with S = shaded and W = white; the same digit always has the same pattern.\n- Row A: (S,S,W,S), (W,S,S,W), (S,W,S,W)\n- Row B: (S,W,W,S), (S,W,S,S), (S,S,W,S)\n- Row C: (W,S,S,W), (W,S,W,S), (S,W,S,S)\n- Row D: (W,W,S,S), (S,W,W,S), (S,S,W,S)\nFind the number represented by row B.\n\nA. $913$\nB. $895$\nC. $628$\nD. $238$\nE. None of the above',
          answer: 'D. $238$',
          principle: 'Match repeated patterns to repeated digits and eliminate step by step (a digit code puzzle).',
          solution:
            'The pattern (S,S,W,S) occurs three times (first grid of A, last grid of B, last grid of D). Among the digits of $913, 895, 628, 238$, only the digit $8$ appears three times, so this pattern is $8$.\nRow A starts with an $8$, and only $895$ starts with $8$, so row A $= 895$: pattern (W,S,S,W) is $9$ and (S,W,S,W) is $5$.\nRow C starts with the pattern of $9$, so row C $= 913$: (W,S,W,S) is $1$ and (S,W,S,S) is $3$.\nRow B is (S,W,W,S), (S,W,S,S) $= 3$, then $8$. A number ending in $8$ with middle digit $3$ is $238$. (Then row D $= 628$, which is consistent.)\nSo row B is $238$.',
          rubric: [{ code: 'A2', text: 'Correct answer D with valid working.' }]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'How many 2-digit numbers contain the digit 5 and are divisible by 5?\n\nA. $9$\nB. $10$\nC. $13$\nD. $17$\nE. None of the above',
          answer: 'B. $10$',
          principle: 'A number is divisible by 5 exactly when its ones digit is 0 or 5; then count by cases.',
          solution:
            'Ones digit $5$: the numbers $15, 25, 35, 45, 55, 65, 75, 85, 95$ all contain a $5$: $9$ numbers.\nOnes digit $0$: the number must have a $5$ in the tens place: only $50$: $1$ number.\nTotal $9 + 1 = 10$.',
          rubric: [{ code: 'A2', text: 'Correct answer B with valid working.' }]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'A toy has three upright rods standing on a base. The left rod carries one bead, the middle rod carries two beads stacked one above the other, and the right rod carries one bead (four beads in total). Betty takes one bead at a time off the top of a rod until all beads are removed, so on the middle rod the upper bead must be removed before the lower one. How many different ways can Betty use to remove the beads?\n\nA. $9$\nB. $10$\nC. $11$\nD. $12$\nE. None of the above',
          answer: 'D. $12$',
          principle: 'Counting orderings with one precedence constraint: divide the total number of orders by the number of orders of the constrained pair.',
          solution:
            'Without any restriction the four different beads could be removed in $4! = 24$ orders. The only restriction is that, on the middle rod, the upper bead comes out before the lower bead. For every order, swapping the positions of these two beads gives a different order with the opposite relation, so exactly half of the $24$ orders obey the restriction.\nNumber of ways $= 24 \\div 2 = 12$.',
          rubric: [{ code: 'A2', text: 'Correct answer D with valid working.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 40,
      stem: 'Write down the answer to each question. Each correct answer scores 4 points (10 questions).',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt: 'What is the last digit of the product of all the even numbers from 2 to 50?',
          answer: '$0$',
          principle: 'A product that contains the factors 2 and 5 (or 10) ends in 0.',
          solution:
            'The product $2 \\times 4 \\times 6 \\times \\cdots \\times 50$ contains the factor $10$ (and also $20$, $30$, $40$, $50$). A product with a factor $10$ is a multiple of $10$, so its last digit is $0$.',
          rubric: [
            { code: 'M2', text: 'Observes that the product has a factor of 10 (or factors 2 and 5).' },
            { code: 'A2', text: 'Concludes the last digit is 0.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'Carol wrote a 4-digit number on a paper and asked Dylan to guess it.\nDylan asked, "Is the number 9876?" Carol replied, "One of the digits is correct and the position of that digit is also correct."\nDylan asked again, "Is the number 5943?" Carol replied, "Two digits are correct, but the positions of these two digits are wrong."\nDylan asked again, "Is the number 2419?" Carol said, "All four digits are correct, but the digits are all in the wrong places."\nWhat is the number written by Carol?',
          answer: '$9124$',
          principle: 'Logical deduction: use the strongest clue (all digits correct) to fix the digit set, then place the digits using the position clues.',
          solution:
            'From the third clue the number uses exactly the digits $2, 4, 1, 9$ in some order, with none in its place in $2419$ (so $2$ is not first, $4$ not second, $1$ not third, $9$ not fourth).\nIn $9876$ only the digit $9$ belongs to this set, so the one correct digit in the correct place is $9$: it is in the first position.\nThe second clue (digits $9$ and $4$ correct, wrong places) says $4$ is not in the third position. Also $4$ is not second (third clue) and not first (taken by $9$), so $4$ is in the fourth position.\nThe remaining digits $1$ and $2$ go in positions two and three. Since $1$ is not third, $1$ is second and $2$ is third.\nThe number is $9124$. Check: it differs from $2419$ in every position; it matches $9876$ only in the digit $9$ in place; of $5943$ only $9$ and $4$ occur and both are in different positions.',
          rubric: [
            { code: 'M2', text: 'Deduces the digit set {2, 4, 1, 9} and that 9 is first.' },
            { code: 'A2', text: 'Places the remaining digits correctly to get 9124.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt: 'The sum of several whole numbers is equal to 16. What is the greatest product of these whole numbers?',
          answer: '$324$',
          principle: 'For a fixed sum, the product is maximised by using as many 3s as possible (with a 2 or 4 to fix the remainder).',
          solution:
            'Any part $\\ge 5$ can be split into smaller parts with a bigger product ($5 \\to 2+3$, $2\\times 3 > 5$, and similarly for larger numbers), so use parts of size at most $4$. A part $1$ is wasteful (merge it with another part), and $4$ can be replaced by $2+2$ with the same product, so use only $2$s and $3$s. Three $2$s can be replaced by two $3$s ($2+2+2 = 3+3$ but $8 < 9$), so at most two $2$s are used.\nIf $k$ is the number of $2$s ($k = 0, 1, 2$), then $16 - 2k$ must be divisible by $3$, which only happens for $k = 2$. So the parts are four $3$s and two $2$s: $3+3+3+3+2+2 = 16$.\nProduct $= 3^4 \\times 2^2 = 81 \\times 4 = 324$.',
          rubric: [
            { code: 'M2', text: 'Uses parts of 3 (and 2) to maximise the product.' },
            { code: 'A2', text: 'Obtains 324.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Tony is playing a number game in which he will do the mathematical operation indicated on a card. There are 6 different cards, and the 6 operations are "- 2", "+ 2", "x 2", "\u00f7 2", "+ 3", "x 3". If Tony starts with number 10, what is the largest number he can obtain using each of the 6 operations on the cards exactly once?',
          answer: '$58$',
          principle: 'Additions should be applied before multiplications so that they get multiplied; subtraction should be applied as late as possible.',
          solution:
            'Take the three multiplying operations $\\times 2$, $\\times 3$, $\\div 2$. Together they multiply the starting number $10$ by $3$ whatever the order, giving $30$. An addition or subtraction placed in some gap is multiplied by the product $m$ of the multiplying operations that come after it, so the final value is $30 + 3m_1 + 2m_2 - 2m_3$.\nThe largest possible $m$ is $6$ (both $\\times 2$ and $\\times 3$ after the gap, so $\\div 2$ must come first). Otherwise every $m \\le 3$ and the value is at most $30 + 9 + 6 - 2 \\cdot \\tfrac12 = 44$.\nWith $\\div 2$ first, $m_3 \\ge 1$, so the value is at most $30 + 3\\cdot 6 + 2\\cdot 6 - 2 \\cdot 1 = 58$.\nThis is reached by $10 \\xrightarrow{\\div 2} 5 \\xrightarrow{+3} 8 \\xrightarrow{+2} 10 \\xrightarrow{\\times 2} 20 \\xrightarrow{\\times 3} 60 \\xrightarrow{-2} 58$.\nThe largest number is $58$.',
          rubric: [
            { code: 'M2', text: 'Realises the order (divide first, add before multiplying, subtract last).' },
            { code: 'A2', text: 'Obtains 58.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt:
            'Paul has 20 blocks of different weights. All the weights are whole numbers. The lightest block is 1 kg and the heaviest block is 20 kg. Paul is trying to stack up the blocks vertically (i.e. one block on top of another). It is given that the sum of the weights of the blocks on top of each block cannot be greater than the weight of the block itself. What is the largest number of blocks Paul can stack?',
          answer: '$5$',
          principle: 'Each block must weigh at least as much as the total above it, so the running total at least doubles at every step.',
          solution:
            'List the stacked weights from top to bottom as $w_1, w_2, \\dots$ and let $s_k = w_1 + \\cdots + w_k$. The rule says $w_{k+1} \\ge s_k$, hence $s_{k+1} = s_k + w_{k+1} \\ge 2 s_k$.\nThe weights are different whole numbers, and $w_{k+1} \\ge s_k \\ge w_k$ forces $w_{k+1} > w_k$. So $w_1 \\ge 1$, $w_2 \\ge 2$, giving $s_2 \\ge 3$, then $w_3 \\ge 3$, $s_3 \\ge 6$, $w_4 \\ge 6$, $s_4 \\ge 12$, $w_5 \\ge 12$, $s_5 \\ge 24$, and a sixth block would need $w_6 \\ge 24 > 20$. So at most $5$ blocks can be stacked.\nFive blocks are possible: $1, 2, 3, 6, 12$ kg from top to bottom (each is at least the sum above it).\nAnswer: $5$.',
          rubric: [
            { code: 'M2', text: 'Shows the running total at least doubles (or lists 1, 2, 3, 6, 12) and that a sixth block would need at least 24 kg.' },
            { code: 'A2', text: 'Answer 5.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'In triangle $ABC$, let $D$ be a point on side $AB$, $E$ a point on side $AC$ and $F$ a point on side $BC$. The segments $AF$, $BE$ and $DE$ are drawn inside the triangle, and $AF$ crosses both $BE$ and $DE$ (the segments $BE$ and $DE$ meet at $E$). How many triangles are there in the figure?',
          answer: '$13$',
          principle: 'Count triangles systematically by choosing three lines that meet pairwise in three distinct points.',
          solution:
            'Let $X$ be the point where $AF$ meets $DE$ and $Y$ the point where $AF$ meets $BE$. Count the triangles by whether $A$ is a vertex.\nTriangles with vertex $A$: $ABC$, $ABE$, $ADE$, $ABF$, $AFC$, $ABY$, $ADX$, $AEY$, $AEX$ (9 triangles).\nTriangles without vertex $A$: $DBE$, $BEC$, $BFY$, $XYE$ (4 triangles).\nTotal $9 + 4 = 13$.\nA check by choosing three of the six lines $AB, AC, BC, AF, BE, DE$ gives exactly $13$ triples that form a triangle.',
          rubric: [
            { code: 'M2', text: 'Introduces the intersection points X, Y and counts systematically.' },
            { code: 'A2', text: 'Obtains 13.' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt:
            'In the following multiplication, all the different letters stand for different digits.\n$$\\overline{HE} \\times \\overline{HE} = \\overline{SHE}$$\nFind the value of the 3-digit number $\\overline{SHE}$.',
          answer: '$625$',
          principle: 'If $n^2$ ends in the digits of $n$, then $n(n-1)$ is a multiple of 100.',
          solution:
            'Let $n = \\overline{HE}$. Then $n^2 = 100S + n$, so $n(n-1) = 100S$. Since $n^2$ has three digits, $10 \\le n \\le 31$.\nThe numbers $n$ and $n-1$ have no common factor, so one of them is a multiple of $25$ and the other of $4$. In the range $10$ to $31$: $n = 25$ gives $25 \\times 24 = 600 = 100 \\times 6$; $n - 1 = 25$ gives $26 \\times 25 = 650$, not a multiple of $100$. So $n = 25$, $S = 6$.\n$25^2 = 625$, so $S = 6$, $H = 2$, $E = 5$ are different digits, and $\\overline{SHE} = 625$.',
          rubric: [
            { code: 'M2', text: 'Sets up n(n-1) = 100S (or tests candidates ending in 5/6/0/1) with n at most 31.' },
            { code: 'A2', text: 'Finds 625.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt:
            'Observe the pattern in the three diagrams below. Each diagram is a triangle divided into four small triangles (top, bottom-left, bottom-right and middle) and a number is written in each small triangle.\n- Diagram 1: top $6$, bottom-left $1$, bottom-right $4$, middle $22$.\n- Diagram 2: top $7$, bottom-left $5$, bottom-right $2$, middle $28$.\n- Diagram 3: top $9$, bottom-left $3$, bottom-right $8$, middle $X$.\nFind the value of $X$.',
          answer: '$40$',
          principle: 'Pattern recognition: test a simple rule on the complete diagrams, then apply it to the incomplete one.',
          solution:
            'In Diagram 1, $6 + 1 + 4 = 11$ and $11 \\times 2 = 22$, the middle number. In Diagram 2, $7 + 5 + 2 = 14$ and $14 \\times 2 = 28$, the middle number. So the middle number is twice the sum of the other three numbers.\nIn Diagram 3: $X = 2 \\times (9 + 3 + 8) = 2 \\times 20 = 40$.',
          rubric: [
            { code: 'M2', text: 'Finds the rule: middle = 2 x (sum of the other three).' },
            { code: 'A2', text: 'Applies it to get 40.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Gary adds two 2-digit numbers. In one of the numbers, he accidentally reads digit 7 as 1 in the ones place and the digit 4 as 9 in the tens place. He gets 144 as the result. If Gary reads the digits correctly, what is the correct sum?',
          answer: '$100$',
          principle: 'Correct the error by replacing the misread number with the true number in the sum.',
          solution:
            'The number is $47$ (tens digit $4$, ones digit $7$), which Gary read as $91$ (tens digit $9$, ones digit $1$). So $91$ plus the other number is $144$, and the other number is $144 - 91 = 53$.\nThe correct sum is $47 + 53 = 100$. (Equivalently $144 - 91 + 47 = 100$.)',
          rubric: [
            { code: 'M2', text: 'Identifies 47 misread as 91 and the other number 53.' },
            { code: 'A2', text: 'Obtains 100.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt: 'The area of square $ABCD$ is $128 \\text{ cm}^2$. What is the length of the diagonal $AC$ (in cm)?',
          answer: '$16 \\text{ cm}$',
          principle: 'A square with diagonal $d$ has area $\\tfrac12 d^2$ (it is made of two right triangles with legs equal to the side).',
          solution:
            'The diagonal $AC$ splits the square into two congruent triangles $ABC$ and $ACD$, so the area of triangle $ABC$ is $64$. By the Pythagorean theorem $AC^2 = AB^2 + BC^2 = 2 \\times AB^2 = 2 \\times 128 = 256$.\nTherefore $AC = \\sqrt{256} = 16 \\text{ cm}$.',
          rubric: [
            { code: 'M2', text: 'Uses AC squared equals 2 times the area (Pythagoras).' },
            { code: 'A2', text: 'Obtains 16 cm.' }
          ]
        }
      ]
    }
  ]
};
