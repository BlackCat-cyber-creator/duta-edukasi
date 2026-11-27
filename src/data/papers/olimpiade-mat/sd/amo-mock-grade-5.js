/**
 * Paket Soal: AMO Mock Test — Grade 5 (Primary 5 Mock Test Paper Set 1)
 * Sumber: American Mathematics Olympiad / SIMCC (AMO-MOCK-UP-Grade-5.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris).
 * Seluruh 25 soal asli (Section A 1–15, Section B 16–20, dan Section C 21–25) dimuat lengkap.
 * Soal 8, 11, 18, 19, 21, dan 23 dilengkapi gambar potongan asli (.webp).
 */
export default {
  id: 'amo-mock-g5',
  slug: 'amo-mock-grade-5',
  subject: 'olimpiade-mat',
  grade: 5,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic:
    'AMO Mock Test — Grade 5: arithmetic, algebra, geometry, combinatorics, and logical reasoning',
  relatedChapterIds: [
    'sd5-bab1-bilangan-cacah-100k',
    'sd5-bab2-kpk-fpb',
    'sd5-bab3-bilangan-pecahan',
    'sd5-bab5-luas-daerah-bangun-datar'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMO',
  title: 'AMO Mock Test — Grade 5',
  totalMarks: 100,
  instructions:
    'Attempt all 25 questions (time allowed: 1 hour 30 minutes; no calculators). Section A has 15 multiple-choice questions worth 3 marks each (45 marks). Section B has 5 open-ended questions worth 5 marks each (25 marks). Section C has 5 open-ended questions worth 6 marks each (30 marks). No points are deducted for unanswered or wrong answers. Diagrams for Questions 8, 11, 18, 19, 21, and 23 are provided as figures.',
  source: {
    org: 'AMO',
    file: 'AMO-MOCK-UP-Grade-5.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 45,
      stem: 'Choose the one correct answer for each question (15 questions, 3 marks each).',
      parts: [
        {
          label: '1',
          marks: 3,
          prompt:
            'Brenda multiplies a number by $3$, adds $3$, divides by $3$, adds $6$, and subtracts $3$ from the result to get $9$. What is six times of the original number?\n\nA. $5$\nB. $3$\nC. $30$\nD. $54$\nE. $126$',
          answer: 'C. $30$',
          principle:
            'Work backwards from the final result by reversing each arithmetic operation in reverse order.',
          solution:
            'Let the original number be $x$. Tracking the operations forward gives:\n$$\\frac{3x + 3}{3} + 6 - 3 = 9.$$\nSimplifying $\\frac{3x + 3}{3} = x + 1$ and $6 - 3 = 3$:\n$$(x + 1) + 3 = 9 \\implies x + 4 = 9 \\implies x = 5.$$\nTherefore, six times the original number is:\n$$6 \\times 5 = 30.$$',
          rubric: [
            { code: 'M1', text: 'Sets up the equation or reverses the sequence of operations from $9$.' },
            { code: 'M1', text: 'Finds the original number $x = 5$.' },
            { code: 'A1', text: 'Computes $6 \\times 5 = 30$, option C.' }
          ]
        },
        {
          label: '2',
          marks: 3,
          prompt:
            '$2021$ is the sum of at least how many positive two-digit numbers?\n\nA. $20$\nB. $21$\nC. $202$\nD. $203$\nE. $1011$',
          answer: 'B. $21$',
          principle:
            'To minimize the count of positive two-digit numbers needed to reach a fixed sum, make each addend as large as possible ($99$).',
          solution:
            'The largest positive two-digit number is $99$. Dividing $2021$ by $99$ gives:\n$$2021 = 20 \\times 99 + 41 = 1980 + 41.$$\nThus $20$ two-digit numbers can sum to at most $20 \\times 99 = 1980 < 2021$, whereas $21$ two-digit numbers suffice (for example, twenty copies of $99$ and one $41$). Hence at least $21$ positive two-digit numbers are required.',
          rubric: [
            { code: 'M2', text: 'Divides $2021$ by the maximum two-digit number $99$ to show $20$ numbers reach at most $1980$.' },
            { code: 'A1', text: 'Concludes at least $21$ numbers, option B.' }
          ]
        },
        {
          label: '3',
          marks: 3,
          prompt:
            'Which of the following is true?\n\nA. If a circle and a regular octagon have the same area, the length of the radius of the circle will be equal to the distance between the centre of any vertex of the octagon.\nB. The difference between the number of sides of an octagon and a trapezium is a prime number.\nC. All regular quadrilaterals have sides of equal length.\nD. Four more than the sides of a decagon is the same value as the total number of sides of two heptagons stuck to each other.\nE. The area of only right triangles is given by $(b \\times h) \\div 2$.',
          answer: 'C. All regular quadrilaterals have sides of equal length.',
          principle:
            'Check each geometric statement against standard definitions of regular polygons, side counts, and triangle area.',
          solution:
            'Evaluate each statement:\n- **A (False):** A regular octagon inscribed in a circle of radius $R$ has strictly smaller area than that circle, so equal area requires a smaller circle radius than $R$.\n- **B (False):** An octagon has $8$ sides and a trapezium has $4$ sides; their difference is $8 - 4 = 4$, which is composite, not prime.\n- **C (True):** A regular polygon has all sides equal in length and all interior angles equal; a regular quadrilateral is a square, so all four sides have equal length.\n- **D (False):** Four more than a decagon gives $10 + 4 = 14$, whereas two heptagons joined along one shared edge have $7 + 7 - 2 = 12$ outer sides.\n- **E (False):** The formula $(b \\times h) \\div 2$ holds for all triangles, not only right triangles.',
          rubric: [
            { code: 'M2', text: 'Applies the definition of a regular polygon and verifies the counterexamples for the other options.' },
            { code: 'A1', text: 'Selects option C.' }
          ]
        },
        {
          label: '4',
          marks: 3,
          prompt:
            'Natural numbers are also called counting numbers and they are positive integers starting from $1$. For example, $1, 2, 3, 4, \\ldots$ are natural numbers. The average of the sum of the first $4$ natural numbers and the first $5$ even numbers is:\n\nA. $10$\nB. $20$\nC. $30$\nD. $40$\nE. $4.5$',
          answer: 'B. $20$',
          principle:
            'Compute each of the two sums separately, then take the arithmetic mean of the two totals.',
          solution:
            'The sum of the first $4$ natural numbers is:\n$$1 + 2 + 3 + 4 = 10.$$\nThe sum of the first $5$ positive even numbers is:\n$$2 + 4 + 6 + 8 + 10 = 30.$$\nTaking the average of these two sums gives:\n$$\\frac{10 + 30}{2} = \\frac{40}{2} = 20.$$',
          rubric: [
            { code: 'M1', text: 'Finds the sum of the first $4$ natural numbers ($10$) and the first $5$ even numbers ($30$).' },
            { code: 'M1', text: 'Divides the combined total $40$ by $2$.' },
            { code: 'A1', text: 'Obtains $20$, option B.' }
          ]
        },
        {
          label: '5',
          marks: 3,
          prompt:
            'One-fifth of all apples in a crate is rotten. Three-fourths are ordinary. The remaining are considered excellent. If there were $200$ apples in a crate, how many excellent apples did it have?\n\nA. $10$\nB. $40$\nC. $160$\nD. $190$',
          answer: 'A. $10$',
          principle:
            'Subtract the fractions of rotten and ordinary apples from $1$ to find the fraction of excellent apples, then multiply by the total.',
          solution:
            'The fraction of excellent apples in the crate is:\n$$1 - \\frac{1}{5} - \\frac{3}{4} = \\frac{20 - 4 - 15}{20} = \\frac{1}{20}.$$\nMultiplying by $200$ apples gives:\n$$200 \\times \\frac{1}{20} = 10.$$',
          rubric: [
            { code: 'M2', text: 'Finds the remaining fraction $1 - \\frac{1}{5} - \\frac{3}{4} = \\frac{1}{20}$ (or $40$ rotten and $150$ ordinary).' },
            { code: 'A1', text: 'Computes $10$ excellent apples, option A.' }
          ]
        },
        {
          label: '6',
          marks: 3,
          prompt:
            "Amanda's score was twice Brian's score. Cassie scored $5$ points less than Brian. Dora scored $10$ points more than Amanda. Dora's score was $6$ times as much as Cassie's. Whose score was $10$?\n\nA. Amanda\nB. Brian\nC. Cassie\nD. Dora",
          answer: 'B. Brian',
          principle:
            "Express all four scores in terms of Brian's score and equate the two expressions for Dora's score.",
          solution:
            "Let Brian's score be $B$. Then:\n- Amanda's score: $A = 2B$\n- Cassie's score: $C = B - 5$\n- Dora's score: $D = A + 10 = 2B + 10$\n\nSince Dora's score is also $6$ times Cassie's score:\n$$2B + 10 = 6(B - 5) = 6B - 30$$\n$$40 = 4B \\implies B = 10.$$\nHence $A = 20$, $B = 10$, $C = 5$, and $D = 30$, so Brian's score was $10$.",
          rubric: [
            { code: 'M2', text: 'Expresses all scores in terms of $B$ and solves $2B + 10 = 6(B - 5)$.' },
            { code: 'A1', text: 'Finds $B = 10$ (Brian), option B.' }
          ]
        },
        {
          label: '7',
          marks: 3,
          prompt:
            'The largest natural number formed by the digits $4, 5, 0, 3$ and the smallest number formed by using all of those digits exactly once, are subtracted. Assume that a valid number does not start with $0$ unless it is $0$ itself (which we shall consider to be a $1$-digit number). What is the number formed by the first two digits of the result?\n\nA. $23$\nB. $85$\nC. $50$\nD. $57$',
          answer: 'A. $23$',
          principle:
            'Arrange the digits in descending order for the largest number and in ascending order (with the smallest nonzero digit first) for the smallest $4$-digit number.',
          solution:
            'Using the digits $4, 5, 0, 3$ once each:\n- The largest $4$-digit number is $5430$.\n- Since a $4$-digit number cannot begin with $0$, the smallest valid number puts $3$ first, followed by $0, 4, 5$, giving $3045$.\n\nSubtracting gives:\n$$5430 - 3045 = 2385.$$\nThe first two digits of $2385$ form the number $23$.',
          rubric: [
            { code: 'M1', text: 'Identifies the largest number $5430$ and smallest valid number $3045$.' },
            { code: 'M1', text: 'Computes the difference $5430 - 3045 = 2385$.' },
            { code: 'A1', text: 'Reads the first two digits as $23$, option A.' }
          ]
        },
        {
          label: '8',
          marks: 3,
          prompt:
            'Observe the two shapes. Find the total volume of the shapes, if all have equal unit sides of $3\\text{ cm}$. Assume it is a packed figure where the invisible areas also are packed with cubes of similar sizes and that the figures fit flush into the corner of the rectangular walls of a room.\n\nA. $12\\text{ cm}^3$\nB. $27\\text{ cm}^3$\nC. $567\\text{ cm}^3$\nD. $81\\text{ cm}^3$\nE. $48\\text{ cm}^3$',
          figures: [
            {
              src: '/papers/amo-mock-g5/fig-8.webp',
              alt: 'Two 3D unit-cube solids: on the left, a stepped rectangular block four cubes wide and two cubes deep with two layers at the back; on the right, a corner-fitting stepped stack three cubes high at the corner.',
              caption: 'Two 3D unit-cube solids for Question 8.'
            }
          ],
          answer: 'C. $567\\text{ cm}^3$',
          principle:
            'Count the total number of unit cubes by layers or columns in both solids, then multiply by the volume of one cube ($3^3\\text{ cm}^3$).',
          solution:
            'Count the unit cubes in each solid:\n- **Left shape:** The base layer has $4 \\times 2 = 8$ cubes and the upper back row has $4$ cubes, giving $8 + 4 = 12$ cubes.\n- **Right shape:** Fitting flush into the room corner, the five visible vertical columns along the walls have heights $1, 2, 3, 2, 1$, giving $1 + 2 + 3 + 2 + 1 = 9$ cubes.\n\nIn total there are $12 + 9 = 21$ unit cubes. Each cube has side $3\\text{ cm}$ and volume:\n$$3 \\times 3 \\times 3 = 27\\text{ cm}^3.$$\nTherefore, the total volume is:\n$$21 \\times 27 = 567\\text{ cm}^3.$$',
          rubric: [
            { code: 'M1', text: 'Counts $12$ unit cubes in the left solid and $9$ unit cubes in the right solid ($21$ cubes total).' },
            { code: 'M1', text: 'Computes the volume of one cube as $3^3 = 27\\text{ cm}^3$.' },
            { code: 'A1', text: 'Multiplies $21 \\times 27 = 567\\text{ cm}^3$, option C.' }
          ]
        },
        {
          label: '9',
          marks: 3,
          prompt:
            'What is the size of the problem space (i.e. if you count all the possible values, how many such values are there) of the following experiment: "Guessing a $4$ digit ATM pin". (Assume that each digit of the pin can have values from $0$–$9$)\n\nA. $10{,}000$\nB. $256$\nC. $40$\nD. $6561$\nE. $10$',
          answer: 'A. $10{,}000$',
          principle:
            'By the multiplication principle, multiply the number of independent choices for each of the four digit positions.',
          solution:
            'Each of the $4$ digit positions can take any of the $10$ digits from $0$ to $9$ independently (from $0000$ to $9999$). Therefore, the total number of possible $4$-digit PINs is:\n$$10 \\times 10 \\times 10 \\times 10 = 10^4 = 10{,}000.$$',
          rubric: [
            { code: 'M2', text: 'Applies the multiplication principle with $10$ choices for each of the $4$ positions ($10^4$).' },
            { code: 'A1', text: 'Evaluates $10{,}000$, option A.' }
          ]
        },
        {
          label: '10',
          marks: 3,
          prompt:
            "Dr. Hazma, Dr. Tan and Dr. Gupta created vaccines in their labs. Dr. Hazma's vaccine showed $98\\%$ effectiveness. Dr. Tan's was $92\\%$ effective. Dr. Gupta's was $93\\%$ effective. What was the probability that all three were simultaneously effective? Assume they are independent trials.\n\nA. Not possible\nB. $83.85\\%$\nC. $16.15\\%$\nD. $12\\%$\nE. Not possible to determine",
          answer: 'B. $83.85\\%$',
          principle:
            'For independent events, the probability that all three occur simultaneously is the product of their individual probabilities.',
          solution:
            'Converting the percentages to decimals and multiplying for independent trials:\n$$P(\\text{all three effective}) = 0.98 \\times 0.92 \\times 0.93.$$\nFirst, $0.98 \\times 0.92 = 0.9016$. Next:\n$$0.9016 \\times 0.93 = 0.838488 = 83.8488\\% \\approx 83.85\\%.$$',
          rubric: [
            { code: 'M2', text: 'Multiplies the three independent probabilities $0.98 \\times 0.92 \\times 0.93$.' },
            { code: 'A1', text: 'Rounds $83.8488\\%$ to $83.85\\%$, option B.' }
          ]
        },
        {
          label: '11',
          marks: 3,
          prompt:
            'Three pentagons are stuck together as shown below. All sides are equal and measure $3\\text{ cm}$. What is the difference between the total perimeter of the three individual pentagons and the final figure?\n\nA. $12\\text{ cm}$\nB. $6\\text{ cm}$\nC. $45\\text{ cm}$\nD. $33\\text{ cm}$',
          figures: [
            {
              src: '/papers/amo-mock-g5/fig-11.webp',
              alt: 'Three regular pentagons joined edge to edge along two shared sides, colored pink, red, and cyan.',
              caption: 'Three regular pentagons joined along two shared edges for Question 11.'
            }
          ],
          answer: 'A. $12\\text{ cm}$',
          principle:
            'Each shared edge where two polygons meet removes two side lengths (one from each polygon) from the outer perimeter.',
          solution:
            'Three separate regular pentagons have $3 \\times 5 = 15$ sides in total, giving a combined perimeter of $15 \\times 3 = 45\\text{ cm}$.\nWhen they are joined at $2$ shared edges, each shared edge hides $2$ sides ($1$ from each adjacent pentagon), so $2 \\times 2 = 4$ side lengths are lost from the boundary (leaving $15 - 4 = 11$ outer sides, or $33\\text{ cm}$).\nTherefore, the difference between the two perimeters is:\n$$4 \\times 3\\text{ cm} = 12\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Identifies that $2$ shared edges remove $4$ side lengths from the combined perimeter (or computes $45 - 33$).' },
            { code: 'A1', text: 'Finds the difference $12\\text{ cm}$, option A.' }
          ]
        },
        {
          label: '12',
          marks: 3,
          prompt:
            'What is the $2021\\text{st}$ number in the sequence below?\n$$7, 9, 11, 13, \\ldots$$\n\nA. $2028$\nB. $4041$\nC. $4047$\nD. $4050$\nE. $4042$',
          answer: 'C. $4047$',
          principle:
            'Use the arithmetic sequence formula $a_n = a_1 + (n - 1)d$ with first term $a_1 = 7$ and common difference $d = 2$.',
          solution:
            'The sequence increases by $2$ at each step, with first term $a_1 = 7$ and common difference $d = 2$.\nThe $2021\\text{st}$ term is:\n$$a_{2021} = 7 + (2021 - 1) \\times 2 = 7 + 2020 \\times 2 = 7 + 4040 = 4047.$$',
          rubric: [
            { code: 'M2', text: 'Applies the arithmetic sequence formula $7 + 2020 \\times 2$.' },
            { code: 'A1', text: 'Computes $4047$, option C.' }
          ]
        },
        {
          label: '13',
          marks: 3,
          prompt:
            'Which of the following numbers has an odd number of even prime factors?\n\nA. $182$\nB. $442$\nC. $128$\nD. $100$\nE. $400$',
          answer: 'C. $128$',
          principle:
            'Factor each option into primes and examine the exponent (multiplicity) of the only even prime, $2$.',
          solution:
            'Since $2$ is the only even prime number, examine the prime factorization of each option:\n- $182 = 2 \\times 7 \\times 13$\n- $442 = 2 \\times 13 \\times 17$\n- $128 = 2^7$ (consists solely of $7$ prime factors of $2$, an odd number of repeated even prime factors)\n- $100 = 2^2 \\times 5^2$ ($2$ factors of $2$, even)\n- $400 = 2^4 \\times 5^2$ ($4$ factors of $2$, even)\n\nMatching the pure power of $2$ with an odd exponent gives $128 = 2^7$.',
          rubric: [
            { code: 'M2', text: 'Factorizes the options and identifies $128 = 2^7$ as having an odd power ($7$) of the even prime $2$.' },
            { code: 'A1', text: 'Selects $128$, option C.' }
          ]
        },
        {
          label: '14',
          marks: 3,
          prompt:
            'Azma took part in a gymnastics competition where many people participated. When the rank list arrived, it turned out that no one was disqualified. She was the $3\\text{rd}$ place ahead of the first of the lower half of the contestants. She was $3\\text{rd}$ place behind the bronze medalist. The first prize is a gold medal, the second prize is a silver medal and the third prize is a bronze medal. How many people competed in all?\n\nA. $12$\nB. $13$\nC. $15$\nD. $16$\nE. $17$',
          answer: 'D. $16$',
          principle:
            "Determine Azma's exact rank from the bronze medalist (rank $3$), then locate the first contestant of the lower half to find the size of each half.",
          solution:
            'The bronze medalist is ranked $3\\text{rd}$. Being $3$ places behind $3\\text{rd}$ place puts Azma at rank:\n$$3 + 3 = 6\\text{th}.$$\nAzma is also $3$ places ahead of the first contestant in the lower half, so the lower half begins at rank:\n$$6 + 3 = 9\\text{th}.$$\nThus the upper half consists of ranks $1$ through $8$ ($8$ contestants), so the lower half also has $8$ contestants (ranks $9$ through $16$). In total:\n$$8 + 8 = 16\\text{ people competed.}$$',
          rubric: [
            { code: 'M1', text: "Finds Azma's rank as $3 + 3 = 6\\text{th}$." },
            { code: 'M1', text: 'Finds that the lower half starts at rank $6 + 3 = 9\\text{th}$, meaning the upper half has $8$ contestants.' },
            { code: 'A1', text: 'Concludes $2 \\times 8 = 16$ contestants, option D.' }
          ]
        },
        {
          label: '15',
          marks: 3,
          prompt:
            'A number $p$ is $1.5$ times another number $q$. If $p$ is $18$ bigger than $q$, then what is $p + q$?\n\nA. $18$\nB. $36$\nC. $54$\nD. $108$\nE. None of the above',
          answer: 'E. None of the above',
          principle:
            'Translate the two statements into linear equations in $p$ and $q$, solve for both variables, and add them.',
          solution:
            'From the given conditions, $p = 1.5q$ (or $2p = 3q$) and $p = q + 18$. Substituting $p = q + 18$ into $p = 1.5q$:\n$$q + 18 = 1.5q \\implies 0.5q = 18 \\implies q = 36.$$\nThen $p = 36 + 18 = 54$, so:\n$$p + q = 54 + 36 = 90.$$\nSince $90$ is not among options A–D, the answer is E (None of the above).',
          rubric: [
            { code: 'M2', text: 'Solves the system $p = 1.5q$ and $p = q + 18$ to obtain $q = 36$ and $p = 54$.' },
            { code: 'A1', text: 'Computes $p + q = 90$ and selects option E (None of the above).' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Open-Ended Questions',
      marks: 25,
      stem: 'Write the final answer for each open-ended question (5 questions, 5 marks each).',
      parts: [
        {
          label: '16',
          marks: 5,
          prompt:
            'A dancer is allowed to step only on one of the following tiles. One is coloured blue, $1$ is coloured green, $2$ are coloured red, $2$ are coloured orange, and $3$ are coloured grey. The grey ones are sticky and they cause the dancer to stop dancing. If the chance that the dancer will get stuck on the first step itself is $\\frac{m}{n}$ (in simplest form), find $m + n$.',
          answer: '$4$',
          principle:
            'Compute the probability as the ratio of sticky (grey) tiles to total tiles, simplify to lowest terms $\\frac{m}{n}$, and sum $m + n$.',
          solution:
            'The total number of tiles is:\n$$1 + 1 + 2 + 2 + 3 = 9.$$\nSince $3$ of the $9$ tiles are grey (sticky), the probability of getting stuck on the first step is:\n$$\\frac{3}{9} = \\frac{1}{3}.$$\nIn simplest form, $m = 1$ and $n = 3$, so:\n$$m + n = 1 + 3 = 4.$$',
          rubric: [
            { code: 'M2', text: 'Counts $9$ total tiles and forms the probability $\\frac{3}{9}$.' },
            { code: 'M2', text: 'Simplifies $\\frac{3}{9}$ to $\\frac{1}{3}$ to identify $m = 1$ and $n = 3$.' },
            { code: 'A1', text: 'Computes $m + n = 4$.' }
          ]
        },
        {
          label: '17',
          marks: 5,
          prompt:
            "Five distinct natural numbers are chosen from $1$ to $45$. These add up to $45$. If we call the biggest of these five numbers '$B$', what is the largest possible value of $B$ across all such sets of five numbers?",
          answer: '$35$',
          principle:
            'To maximize the largest number $B$ among five distinct natural numbers with a fixed sum, choose the other four numbers to be as small as possible ($1, 2, 3, 4$).',
          solution:
            'To make $B$ as large as possible while keeping all five numbers distinct natural numbers (at least $1$), minimize the four smaller numbers by choosing $1, 2, 3,$ and $4$. Their sum is:\n$$1 + 2 + 3 + 4 = 10.$$\nSubtracting from the total sum $45$ gives the maximum possible value of $B$:\n$$B = 45 - 10 = 35.$$',
          rubric: [
            { code: 'M3', text: 'Minimizes the four smaller distinct natural numbers as $1, 2, 3, 4$ with sum $10$.' },
            { code: 'A2', text: 'Computes $B = 45 - 10 = 35$.' }
          ]
        },
        {
          label: '18',
          marks: 5,
          prompt:
            'Raziya started with the following structure. It is a fully packed box all the way to the back of the top stairs. She added similar unit cubes to build it up to a packed staircase. She has unit cubes that fill a box $3 \\times 11 \\times 10\\text{ cm}^3$ in dimensions (a unit cube is $1\\text{ cm} \\times 1\\text{ cm} \\times 1\\text{ cm}$ in size). The final staircase she made was $10$ steps high. What was the length (width) of each step in her structure?',
          figures: [
            {
              src: '/papers/amo-mock-g5/fig-18.webp',
              alt: 'Isometric diagram of a packed staircase made of unit cubes that is four steps high and six cubes wide along each step.',
              caption: 'Starting packed unit-cube staircase structure for Question 18.'
            }
          ],
          answer: '$6$',
          principle:
            'Count the total unit cubes available from the box dimensions and divide by the triangular number $1 + 2 + \\dots + 10 = 55$ for a $10$-step packed staircase.',
          solution:
            'A packed staircase that is $10$ steps high and $w\\text{ cm}$ wide has step heights $1, 2, 3, \\ldots, 10$, so it contains:\n$$w \\times (1 + 2 + 3 + \\dots + 10) = w \\times \\frac{10 \\times 11}{2} = 55w\\text{ unit cubes}.$$\nThe number of unit cubes filling the $3 \\times 11 \\times 10\\text{ cm}^3$ box is:\n$$3 \\times 11 \\times 10 = 330.$$\nEquating the $10$-step staircase capacity to $330$ unit cubes gives:\n$$55w = 330 \\implies w = \\frac{330}{55} = 6,$$\nwhich matches the $6$-cube width of each step shown in the starting structure. Thus the width of each step is $6\\text{ cm}$.',
          rubric: [
            { code: 'M2', text: 'Computes the number of cubes per unit width for $10$ steps as $1 + 2 + \\dots + 10 = 55$ and box volume $3 \\times 11 \\times 10 = 330$.' },
            { code: 'A3', text: 'Divides $330 \\div 55 = 6$ (matching the $6$-cube step width in the figure).' }
          ]
        },
        {
          label: '19',
          marks: 5,
          prompt:
            'In the weighing scale below, the rectangle weighs $2\\text{ kg}$ more than the triangle. The oval weighs $3\\text{ kg}$ less than the triangle. What is the weight of the rectangle, in $\\text{kg}$?',
          figures: [
            {
              src: '/papers/amo-mock-g5/fig-19.webp',
              alt: 'Weighing scale holding a green rectangle, an orange triangle, and a blue oval, with the total weight labeled 20kg.',
              caption: 'Weighing scale diagram for Question 19.'
            }
          ],
          answer: '$9$',
          principle:
            'Express the weights of the rectangle and oval in terms of the triangle weight $T$, set their sum equal to $20\\text{ kg}$, and solve for $T$.',
          solution:
            'From the scale, the three shapes together weigh $20\\text{ kg}$. Let the weight of the triangle be $T\\text{ kg}$. Then:\n- Rectangle weight $= T + 2$\n- Oval weight $= T - 3$\n\nSumming the three weights:\n$$(T + 2) + T + (T - 3) = 20$$\n$$3T - 1 = 20 \\implies 3T = 21 \\implies T = 7\\text{ kg}.$$\nTherefore, the weight of the rectangle is:\n$$7 + 2 = 9\\text{ kg}.$$',
          rubric: [
            { code: 'M2', text: 'Sets up $(T + 2) + T + (T - 3) = 20$ from the scale reading $20\\text{ kg}$.' },
            { code: 'M2', text: 'Solves for the triangle weight $T = 7\\text{ kg}$.' },
            { code: 'A1', text: 'Finds the rectangle weight $7 + 2 = 9\\text{ kg}$.' }
          ]
        },
        {
          label: '20',
          marks: 5,
          prompt:
            'A five-digit number is formed such that it satisfies the following conditions:\n- It is a multiple of $3$ and $5$.\n- The third digit is half of the first digit and one less than the second digit.\n- The sum of the first three digits is $13$ and the sum of the last three digits is $8$.\n- The fourth digit is the second-largest digit of that number.\n\nFind the sum of digits of that number.',
          answer: '$18$',
          principle:
            'Express the first three digits in terms of the third digit $c$, use the last-three-digit sum and divisibility by $5$ to narrow down $d$ and $e$, and verify divisibility by $3$ and the rank of $d$.',
          solution:
            'Let the five-digit number be $\\overline{abcde}$.\nFrom the second condition, $c = \\frac{a}{2}$ and $c = b - 1$, so $a = 2c$ and $b = c + 1$. Using $a + b + c = 13$:\n$$2c + (c + 1) + c = 13 \\implies 4c = 12 \\implies c = 3.$$\nThus $a = 6$ and $b = 4$.\n\nNext, $c + d + e = 8$ gives $3 + d + e = 8$, so $d + e = 5$. Since the number is a multiple of $5$, $e$ is either $0$ or $5$:\n- If $e = 5$, then $d = 0$, giving $64305$. Here the second-largest digit is $5$, not $d = 0$.\n- If $e = 0$, then $d = 5$, giving $64350$. Its digits are $6, 5, 4, 3, 0$, so $d = 5$ is indeed the second-largest digit, and the digit sum is $6 + 4 + 3 + 5 + 0 = 18$, which is divisible by $3$.\n\nTherefore, the number is $64350$ and the sum of its digits is $18$.',
          rubric: [
            { code: 'M2', text: 'Finds the first three digits $a = 6$, $b = 4$, $c = 3$ from $2c + (c+1) + c = 13$.' },
            { code: 'M2', text: 'Uses $d + e = 5$, divisibility by $5$, and the second-largest digit condition to deduce $d = 5, e = 0$.' },
            { code: 'A1', text: 'Computes the digit sum $6 + 4 + 3 + 5 + 0 = 18$.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Section C: Open-Ended Questions',
      marks: 30,
      stem: 'Write the final answer for each open-ended question (5 questions, 6 marks each).',
      parts: [
        {
          label: '21',
          marks: 6,
          prompt:
            'Find the perimeter of each small rectangle within (assume they are all the same dimensions), given that the total area of the shape shown is $60\\text{ cm}^2$.',
          figures: [
            {
              src: '/papers/amo-mock-g5/fig-21.webp',
              alt: 'A large rectangle partitioned into five congruent small rectangles: one vertical on the left, one vertical on the right, and three horizontal stacked in the center.',
              caption: 'Composite rectangle made of five congruent small rectangles for Question 21.'
            }
          ],
          answer: '$16$',
          principle:
            'Divide the total area equally among the $5$ congruent rectangles, and use the tiling alignment to relate the length $L$ and width $W$ of each small rectangle.',
          solution:
            'The figure consists of $5$ congruent small rectangles, so the area of each small rectangle is:\n$$\\frac{60}{5} = 12\\text{ cm}^2.$$\nAlong the vertical side, one vertical rectangle spans the full height of $3$ stacked horizontal rectangles, so the length $L$ and width $W$ of each small rectangle satisfy $L = 3W$. Substituting into the area equation $L \\times W = 12$:\n$$3W \\times W = 12 \\implies W^2 = 4 \\implies W = 2\\text{ cm}.$$\nHence $L = 3 \\times 2 = 6\\text{ cm}$, and the perimeter of each small rectangle is:\n$$2(L + W) = 2(6 + 2) = 16\\text{ cm}.$$',
          rubric: [
            { code: 'M2', text: 'Finds the area of one small rectangle as $60 \\div 5 = 12\\text{ cm}^2$ and deduces $L = 3W$.' },
            { code: 'M2', text: 'Solves $3W^2 = 12$ to get $W = 2\\text{ cm}$ and $L = 6\\text{ cm}$.' },
            { code: 'A2', text: 'Computes perimeter $2(6 + 2) = 16\\text{ cm}$.' }
          ]
        },
        {
          label: '22',
          marks: 6,
          prompt:
            'A train travelling at $54\\text{ km/h}$ passes a platform. A man is standing on the platform, and he sees the train pass him in $20\\text{ seconds}$. Find the length of the train, in meters.',
          answer: '$300$',
          principle:
            'Convert the train speed from $\\text{km/h}$ to $\\text{m/s}$, then multiply by the time taken to pass a stationary point (the standing man).',
          solution:
            'Convert $54\\text{ km/h}$ to meters per second:\n$$54\\text{ km/h} = \\frac{54 \\times 1000\\text{ m}}{3600\\text{ s}} = 15\\text{ m/s}.$$\nSince the train takes $20\\text{ seconds}$ to pass a stationary man, the distance travelled by the train in $20\\text{ seconds}$ equals its own length:\n$$\\text{Length} = 15\\text{ m/s} \\times 20\\text{ s} = 300\\text{ m}.$$',
          rubric: [
            { code: 'M3', text: 'Converts $54\\text{ km/h}$ to $15\\text{ m/s}$.' },
            { code: 'A3', text: 'Multiplies $15 \\times 20 = 300\\text{ m}$.' }
          ]
        },
        {
          label: '23',
          marks: 6,
          prompt:
            'How many ways can we go from the dark square at the top to the dark square at the bottom of the grid moving only right or down and only along the grid lines? No backtracking is allowed. No moving through the same section more than once.',
          figures: [
            {
              src: '/papers/amo-mock-g5/fig-23.webp',
              alt: 'A 3 by 3 blue square grid with the top-left cell and bottom-right cell shaded dark.',
              caption: 'A 3 by 3 grid with shaded corner squares for Question 23.'
            }
          ],
          answer: '$6$',
          principle:
            'Every shortest grid-line path connecting the inner corner of the top-left square to the inner corner of the bottom-right square consists of $2$ right steps and $2$ down steps.',
          solution:
            'Along the grid lines, moving from the top-left dark square (starting at its bottom-right corner) to the bottom-right dark square (ending at its top-left corner) spans $2$ horizontal grid steps right and $2$ vertical grid steps down across the middle $2 \\times 2$ block of grid lines, for a total of $4$ steps.\nChoosing which $2$ of the $4$ steps are moves to the right (with the remaining $2$ down) gives:\n$$\\binom{4}{2} = \\frac{4 \\times 3}{2 \\times 1} = 6\\text{ ways}.$$\n(Equivalently, labeling intersection counts along this $2 \\times 2$ grid gives $1, 1, 1$ along the top and left edges, $2$ at the center, $3$ at the adjacent edges, and $3 + 3 = 6$ at the target corner.)',
          rubric: [
            { code: 'M3', text: 'Models the grid-line routes between the two dark squares as $2$ right steps and $2$ down steps.' },
            { code: 'A3', text: 'Computes $\\binom{4}{2} = 6$ ways.' }
          ]
        },
        {
          label: '24',
          marks: 6,
          prompt:
            'A $4$-digit number in the form $\\overline{aabb}$ is a perfect square. What is the square root of $\\overline{aabb}$?',
          answer: '$88$',
          principle:
            'Factor $\\overline{aabb}$ as $11(100a + b)$ and use the fact that any perfect square divisible by the prime $11$ must be divisible by $11^2 = 121$.',
          solution:
            'Write the $4$-digit number in expanded form:\n$$\\overline{aabb} = 1100a + 11b = 11(100a + b) = 11(99a + a + b).$$\nSince $\\overline{aabb}$ is a perfect square and $11$ is prime, $100a + b$ must also be divisible by $11$. Because $99a$ is divisible by $11$, $a + b$ must be a multiple of $11$.\nAs $1 \\le a \\le 9$ and $0 \\le b \\le 9$, the only possible sum is $a + b = 11$. Moreover, a perfect square can only end in $b \\in \\{0, 1, 4, 5, 6, 9\\}$, which narrows $(a, b)$ to:\n- $(2, 9) \\to 2299$ ($11^2 \\times 19$, not a square)\n- $(5, 6) \\to 5566$ ($11^2 \\times 46$, not a square)\n- $(6, 5) \\to 6655$ ($11^2 \\times 55$, not a square)\n- $(7, 4) \\to 7744 = 11^2 \\times 64 = (11 \\times 8)^2 = 88^2$\n\nTherefore, $\\overline{aabb} = 7744$ and its square root is $88$.',
          rubric: [
            { code: 'M2', text: 'Factors $\\overline{aabb} = 11(99a + a + b)$ and deduces $a + b = 11$.' },
            { code: 'M2', text: 'Tests valid pairs with square last digits $b \\in \\{0, 1, 4, 5, 6, 9\\}$ to identify $7744 = 121 \\times 64$.' },
            { code: 'A2', text: 'Finds the square root $88$.' }
          ]
        },
        {
          label: '25',
          marks: 6,
          prompt:
            'Read this sentence carefully: "If you take the GCD (or HCF) of two numbers, you are left with numbers that are co-prime." For example, if the numbers are $50$ and $70$, their underlying co-primes are $5$ and $7$. You get that by dividing both the numbers by their GCD, which is $10$.\n\nNow read the following problem and use the above sentence to solve it. Two numbers add to $1085$. Their GCD is $35$. What is the average of the underlying co-prime numbers, rounded off to the nearest whole number?',
          answer: '$16$',
          principle:
            'Write the two numbers as $35a$ and $35b$ where $\\gcd(a, b) = 1$, divide their sum by $35$ to find $a + b$, and compute $\\frac{a + b}{2}$.',
          solution:
            'Let the two numbers be $35a$ and $35b$, where $a$ and $b$ are the underlying co-prime numbers. Since their sum is $1085$:\n$$35a + 35b = 1085 \\implies 35(a + b) = 1085.$$\nDividing both sides by $35$:\n$$a + b = \\frac{1085}{35} = 31.$$\nThe average of the two underlying co-prime numbers is:\n$$\\frac{a + b}{2} = \\frac{31}{2} = 15.5,$$\nwhich rounds off to $16$ to the nearest whole number.',
          rubric: [
            { code: 'M2', text: 'Writes the two numbers as $35a$ and $35b$ and sets up $35(a + b) = 1085$.' },
            { code: 'M2', text: 'Divides $1085 \\div 35 = 31$ to find the sum of the co-prime pair.' },
            { code: 'A2', text: 'Computes the average $\\frac{31}{2} = 15.5$ and rounds to $16$.' }
          ]
        }
      ]
    }
  ]
};
