/**
 * Paket Soal Terstruktur: AMC 8 — 2023
 * Sumber: scraped_raw/amc-8-2023.md (15 soal pilihan ganda dimuat; 10 soal bergambar dilewati).
 */
const OK = [{ code: 'A1', text: 'Correct answer matching the solution.' }];

export default {
  id: 'amc-8-2023',
  slug: 'amc-8-2023',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'AMC 8 (2023)',
  relatedChapterIds: [
    'smp7-bab1-bilangan-bulat',
    'smp7-bab2-bilangan-rasional',
    'smp7-bab3-rasio',
    'smp7-bab5-kesebangunan',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab5-persamaan-garis-lurus',
    'smp8-bab6-statistika'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'AMC 8',
  title: 'AMC 8 — 2023',
  totalMarks: 15,
  instructions:
    'Attempt all 15 included multiple-choice questions (1 mark each, total 15 marks; no calculators). From the original 25-problem AMC 8 (2023) paper, 15 self-contained problems are included (Q1, Q3, Q5, Q7, Q10, Q11, Q13, Q14, Q15, Q18, Q19, Q20, Q21, Q22, and Q25) and 10 problems that require missing diagrams, grids, graphs, or visual figures are skipped (Q2, Q4, Q6, Q8, Q9, Q12, Q16, Q17, Q23, and Q24).',
  source: {
    org: 'MAA (Mathematical Association of America) — AMC 8',
    file: 'scraped_raw/amc-8-2023.md',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple-Choice Questions',
      marks: 15,
      stem: 'Choose the single best answer (A, B, C, D, or E) for each of the 15 included problems (1 mark each). Original AMC 8 problem numbers are preserved.',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'What is the value of the following expression?\n$$(8 \\times 4 + 2) - (8 + 4 \\times 2)$$\n\nA. $0$\nB. $6$\nC. $10$\nD. $18$\nE. $24$',
          answer: 'D. $18$',
          principle: 'Apply the standard order of operations: evaluate parentheses first, performing multiplication before addition.',
          solution:
            'Inside the first pair of parentheses, multiply before adding:\n$$8 \\times 4 + 2 = 32 + 2 = 34.$$\nInside the second pair of parentheses, multiply before adding:\n$$8 + 4 \\times 2 = 8 + 8 = 16.$$\nSubtract the two results:\n$$34 - 16 = 18.$$',
          rubric: OK
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Wind chill is a measure of how cold people feel when exposed to wind outside. A good estimate for wind chill can be found using this calculation:\n$$W = T - 0.7 \\cdot S$$\nHere $W$ represents the wind chill, $T$ represents air temperature measured in degrees Fahrenheit ($^{\\circ}\\text{F}$), and $S$ represents wind speed measured in miles per hour (mph).\n\nSuppose the air temperature is $36^{\\circ}\\text{F}$ and the wind speed is $18$ mph. Which of the following is closest to the approximate wind chill?\n\nA. $18$\nB. $23$\nC. $28$\nD. $32$\nE. $35$',
          answer: 'B. $23$',
          principle: 'Substitute the given values into the linear formula and compare distances to the answer choices.',
          solution:
            'Substitute $T = 36$ and $S = 18$ into $W = T - 0.7 \\cdot S$:\n$$W = 36 - 0.7 \\cdot 18 = 36 - 12.6 = 23.4.$$\nSince $|23.4 - 23| = 0.4$ is smaller than the distance to every other option, the closest choice is $23$.',
          rubric: OK
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'A lake contains $250$ trout, along with a variety of other fish. When a marine biologist catches and releases a sample of $180$ fish from the lake, $30$ are identified as trout. Assume that the ratio of trout to the total number of fish is the same in both the sample and the lake. How many fish are there in the lake?\n\nA. $1250$\nB. $1500$\nC. $1750$\nD. $1800$\nE. $2000$',
          answer: 'B. $1500$',
          principle: 'Set up a proportion equating the ratio of trout to total fish in the sample and in the lake.',
          solution:
            'Let $N$ be the total number of fish in the lake. Equating the trout-to-total ratios gives\n$$\\frac{250}{N} = \\frac{30}{180} = \\frac{1}{6}.$$\nSolving for $N$ yields\n$$N = 6 \\times 250 = 1500.$$',
          rubric: OK
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'A rectangle, with sides parallel to the $x$-axis and $y$-axis, has opposite vertices located at $(15, 3)$ and $(16, 5)$. A line is drawn through points $A(0, 0)$ and $B(3, 1)$. Another line is drawn through points $C(0, 10)$ and $D(2, 9)$. How many points on the rectangle lie on at least one of the two lines?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'B. $1$',
          principle: 'Find the linear equations of both lines and test their $y$-values over the $x$-interval $[15, 16]$ against $3 \\le y \\le 5$.',
          solution:
            'The rectangle satisfies $15 \\le x \\le 16$ and $3 \\le y \\le 5$.\n\n1. Line $AB$ passes through $(0, 0)$ and $(3, 1)$, so its slope is $\\frac{1 - 0}{3 - 0} = \\frac{1}{3}$ and its equation is $y = \\frac{x}{3}$. Over $15 \\le x \\le 16$, we have $5 \\le \\frac{x}{3} \\le \\frac{16}{3}$. Because the rectangle has $y \\le 5$, the only point in common is where $y = 5$, namely $(15, 5)$ (a vertex of the rectangle).\n\n2. Line $CD$ passes through $(0, 10)$ and $(2, 9)$, so its slope is $\\frac{9 - 10}{2 - 0} = -\\frac{1}{2}$ and its equation is $y = 10 - \\frac{x}{2}$. Over $15 \\le x \\le 16$, we have $2 \\le y \\le 2.5$. Since every point on the rectangle has $y \\ge 3$, line $CD$ misses the rectangle completely.\n\nHence, only $1$ point on the rectangle lies on at least one of the two lines.',
          rubric: OK
        },
        {
          label: '10',
          marks: 1,
          prompt:
            'Harold made a plum pie to take on a picnic. He was able to eat only $\\frac{1}{4}$ of the pie, and he left the rest for his friends. A moose came by and ate $\\frac{1}{3}$ of what Harold left behind. After that, a porcupine ate $\\frac{1}{3}$ of what the moose left behind. How much of the original pie still remained after the porcupine left? Express your answer as a common fraction.\n\nA. $\\frac{1}{12}$\nB. $\\frac{1}{6}$\nC. $\\frac{1}{4}$\nD. $\\frac{1}{3}$\nE. $\\frac{5}{12}$',
          answer: 'D. $\\frac{1}{3}$',
          principle: 'Track the remaining fraction sequentially by multiplying by $(1 - \\text{fraction eaten})$ at each step.',
          solution:
            'After Harold eats $\\frac{1}{4}$ of the pie, the remaining fraction is\n$$1 - \\frac{1}{4} = \\frac{3}{4}.$$\nThe moose eats $\\frac{1}{3}$ of this remainder, leaving $\\frac{2}{3}$ of it:\n$$\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{1}{2}.$$\nFinally, the porcupine eats $\\frac{1}{3}$ of what the moose left, leaving $\\frac{2}{3}$ of it:\n$$\\frac{2}{3} \\cdot \\frac{1}{2} = \\frac{1}{3}.$$',
          rubric: OK
        },
        {
          label: '11',
          marks: 1,
          prompt:
            'NASA\'s Perseverance Rover was launched on July $30, 2020$. After traveling $292{,}526{,}838$ miles, it landed on Mars in Jezero Crater about $6.5$ months later. Which of the following is closest to the Rover\'s average interplanetary speed in miles per hour?\n\nA. $6{,}000$\nB. $12{,}000$\nC. $60{,}000$\nD. $120{,}000$\nE. $600{,}000$',
          answer: 'C. $60{,}000$',
          principle: 'Convert the travel time into hours and bound the quotient distance divided by time.',
          solution:
            'Take $1$ month to be $30$ to $31$ days. Then $6.5$ months is between $6.5 \\times 30 = 195$ days and $6.5 \\times 31 = 201.5$ days (counting from July $30, 2020$ to mid-February $2021$ gives about $200$ days). Converting days to hours gives $T$ between $195 \\times 24 = 4{,}680$ hours and $202 \\times 24 = 4{,}848$ hours, so $4{,}500 < T < 5{,}000$.\n\nUsing $288{,}000{,}000 < D < 300{,}000{,}000$ miles for $D = 292{,}526{,}838$, the average speed $v = \\frac{D}{T}$ satisfies\n$$\\frac{288{,}000{,}000}{5{,}000} < v < \\frac{300{,}000{,}000}{4{,}500},$$\nwhich simplifies to\n$$57{,}600 < v < 66{,}666\\frac{2}{3} \\text{ mph}.$$\nAmong the widely spaced answer choices, this is unmistakably closest to $60{,}000$ mph.',
          rubric: OK
        },
        {
          label: '13',
          marks: 1,
          prompt:
            'Along the route of a bicycle race, $7$ water stations are evenly spaced between the start and finish lines. There are also $2$ repair stations evenly spaced between the start and finish lines. The $3$rd water station is located $2$ miles after the $1$st repair station. How long is the race in miles?\n\nA. $8$\nB. $16$\nC. $24$\nD. $48$\nE. $96$',
          answer: 'D. $48$',
          principle: '$n$ evenly spaced interior points divide a segment into $n + 1$ equal intervals.',
          solution:
            'Let $L$ be the total length of the race in miles.\n- The $7$ water stations lie strictly between the start and finish lines, dividing the route into $7 + 1 = 8$ equal parts. Thus, the $3$rd water station is at $\\frac{3}{8}L$.\n- The $2$ repair stations divide the route into $2 + 1 = 3$ equal parts. Thus, the $1$st repair station is at $\\frac{1}{3}L$.\n\nThe distance between them is $2$ miles, so\n$$\\left(\\frac{3}{8} - \\frac{1}{3}\\right)L = 2 \\implies \\frac{9 - 8}{24}L = 2 \\implies \\frac{1}{24}L = 2.$$\nTherefore, $L = 24 \\times 2 = 48$ miles.',
          rubric: OK
        },
        {
          label: '14',
          marks: 1,
          prompt:
            'Nicolas is planning to send a package to his friend Anton, who is a stamp collector. To pay for the postage, Nicolas would like to cover the package with a large number of stamps. Suppose he has a collection of $5$-cent, $10$-cent, and $25$-cent stamps, with exactly $20$ of each type. What is the greatest number of stamps Nicolas can use to make exactly $7.10$ dollars in postage?\n\n(Note: The amount $7.10$ dollars corresponds to $7$ dollars and $10$ cents. One dollar is worth $100$ cents.)\n\nA. $45$\nB. $46$\nC. $51$\nD. $54$\nE. $55$',
          answer: 'E. $55$',
          principle: 'Complementary optimization: maximizing the number of stamps used is equivalent to minimizing the number of stamps omitted.',
          solution:
            'Using all $60$ stamps gives a total value of\n$$20(5 + 10 + 25) = 20 \\times 40 = 800 \\text{ cents}.$$\nTo obtain $710$ cents, Nicolas must omit stamps worth $800 - 710 = 90$ cents. Maximizing the number of stamps used means minimizing the number of omitted stamps, say $k$ stamps summing to $90$ cents.\n- If $k \\le 3$, the maximum possible omitted value is $3 \\times 25 = 75 < 90$ cents.\n- If $k = 4$, four $25$-cent stamps total $100$ cents, while any four stamps containing at least one smaller denomination total at most $3 \\times 25 + 10 = 85 < 90$ cents.\n- If $k = 5$, we can omit three $25$-cent stamps, one $10$-cent stamp, and one $5$-cent stamp, since $25 + 25 + 25 + 10 + 5 = 90$ cents.\n\nHence the fewest omitted stamps is $5$, and the greatest number of stamps Nicolas can use is $60 - 5 = 55$.',
          rubric: OK
        },
        {
          label: '15',
          marks: 1,
          prompt:
            'Viswam walks half a mile to get to school each day. His route consists of $10$ city blocks of equal length and he takes one minute to walk each block. Today, after walking $5$ blocks, Viswam discovers that he has to make a detour, walking $3$ blocks of equal length instead of $1$ block to reach the next corner. From the time he starts his detour, at what speed, in miles per hour, must Viswam walk in order to arrive at school at his usual time? Give your answer as a decimal.\n\nA. $4$\nB. $4.2$\nC. $4.5$\nD. $4.8$\nE. $5$',
          answer: 'B. $4.2$',
          principle: 'Average speed equals remaining distance divided by remaining time (converted to hours).',
          solution:
            'Since $10$ blocks equal $\\frac{1}{2}$ mile, each block has length\n$$\\frac{1}{2} \\div 10 = \\frac{1}{20} \\text{ mile}.$$\nViswam has already walked $5$ blocks in $5$ minutes, so he has $5$ minutes left to arrive at his usual time of $10$ minutes. With the detour replacing $1$ block by $3$ blocks, the remaining distance is $3 + 4 = 7$ blocks, which equals\n$$7 \\times \\frac{1}{20} = \\frac{7}{20} \\text{ miles}.$$\nSince $5$ minutes is $\\frac{5}{60} = \\frac{1}{12}$ hour, his required speed is\n$$\\frac{7/20}{1/12} = \\frac{7}{20} \\times 12 = \\frac{21}{5} = 4.2 \\text{ mph}.$$',
          rubric: OK
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Greta Grasshopper sits on a long line of lily pads in a pond. From any lily pad, Greta can jump $5$ pads to the right or $3$ pads to the left. What is the fewest number of jumps Greta must make to reach the lily pad located $2023$ pads to the right of her starting position?\n\nA. $405$\nB. $407$\nC. $409$\nD. $411$\nE. $413$',
          answer: 'D. $411$',
          principle: 'Model the net displacement as a linear Diophantine equation and minimize the smaller variable using modular arithmetic.',
          solution:
            'Let $r \\ge 0$ be the number of right jumps and $l \\ge 0$ be the number of left jumps. The net displacement condition is\n$$5r - 3l = 2023.$$\nSince $r = \\frac{2023 + 3l}{5}$, the total number of jumps is\n$$r + l = \\frac{2023 + 8l}{5},$$\nwhich increases strictly with $l$. Thus, minimizing $r + l$ is equivalent to finding the smallest non-negative integer $l$ that satisfies the equation.\n\nReducing $5r - 3l = 2023$ modulo $5$ gives\n$$-3l \\equiv 3 \\pmod{5} \\implies 3(l + 1) \\equiv 0 \\pmod{5} \\implies l \\equiv 4 \\pmod{5}.$$\nThe smallest non-negative solution is $l = 4$, giving $5r = 2023 + 12 = 2035$, so $r = 407$.\n\nTherefore, the fewest number of jumps is $407 + 4 = 411$.',
          rubric: OK
        },
        {
          label: '19',
          marks: 1,
          prompt:
            'An equilateral triangle is placed inside a larger equilateral triangle so that the region between them can be divided into three congruent trapezoids. The side length of the inner triangle is $\\frac{2}{3}$ the side length of the larger triangle. What is the ratio of the area of one trapezoid to the area of the inner triangle? Give the ratio in the form $a:b$, where $a$ and $b$ are relatively prime positive integers.\n\nA. $1 : 3$\nB. $3 : 8$\nC. $5 : 12$\nD. $7 : 16$\nE. $4 : 9$',
          answer: 'C. $5 : 12$',
          principle: 'For similar figures with linear scale factor $k$, the area scale factor is $k^2$.',
          solution:
            'Let $A$ be the area of the larger equilateral triangle. Because all equilateral triangles are similar and the side-length ratio is $\\frac{2}{3}$, the area of the inner triangle is\n$$A_{\\text{inner}} = \\left(\\frac{2}{3}\\right)^2 A = \\frac{4}{9}A.$$\nThe remaining region between the two triangles has area $A - \\frac{4}{9}A = \\frac{5}{9}A$, and it is divided into three congruent trapezoids, so one trapezoid has area\n$$A_{\\text{trap}} = \\frac{1}{3} \\cdot \\frac{5}{9}A = \\frac{5}{27}A.$$\nThus, the ratio of the area of one trapezoid to the area of the inner triangle is\n$$\\frac{A_{\\text{trap}}}{A_{\\text{inner}}} = \\frac{\\frac{5}{27}A}{\\frac{4}{9}A} = \\frac{5}{27} \\cdot \\frac{9}{4} = \\frac{5}{12},$$\nwhich is $5 : 12$.',
          rubric: OK
        },
        {
          label: '20',
          marks: 1,
          prompt:
            'Two integers are inserted into the list $3, 3, 8, 11, 28$ to double its range. The mode and median remain unchanged. What is the maximum possible sum of the two additional numbers?\n\nA. $56$\nB. $57$\nC. $58$\nD. $60$\nE. $61$',
          answer: 'D. $60$',
          principle: 'Bound the two inserted numbers using the range, the position of the median in a $7$-element list, and uniqueness of the mode.',
          solution:
            'Let the two inserted integers be $a \\le b$.\n1. **Range:** The original range is $28 - 3 = 25$, so the new range must be $2 \\times 25 = 50$. Since $3$ remains in the list, the new minimum is at most $3$, so the new maximum is at most $3 + 50 = 53$. In particular, $b \\le 53$.\n2. **Median:** In a sorted list of $7$ numbers, the median is the $4$th entry. Currently $3, 3$ are below $8$ and $11, 28$ are above $8$. If $a > 8$, then $3, 3, 8$ would be the first three entries and the $4$th entry would be greater than $8$, changing the median. Thus $a \\le 8$.\n3. **Mode:** The original unique mode is $3$ (appearing twice). If $a = 8$, then $8$ would appear at least twice, so $3$ would no longer be the unique mode. Hence $a \\le 7$.\n\nTaking $a = 7$ and $b = 53$ gives the sorted list $3, 3, 7, 8, 11, 28, 53$, which has range $53 - 3 = 50$, unique mode $3$, and median $8$. Thus the maximum possible sum is $7 + 53 = 60$.',
          rubric: OK
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'Alina writes the numbers $1, 2, \\ldots, 9$ on separate cards, one number per card. She wishes to divide the cards into $3$ groups of $3$ cards so that the sum of the numbers in each group will be the same. In how many ways can this be done?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$\nE. $4$',
          answer: 'C. $2$',
          principle: 'Compute the required sum per group and perform systematic casework starting from the largest numbers.',
          solution:
            'The sum of all nine numbers is $\\frac{9 \\times 10}{2} = 45$, so each of the $3$ groups must sum to $\\frac{45}{3} = 15$.\n\nConsider the group containing $9$. The other two cards in this group must sum to $15 - 9 = 6$, which leaves only two choices: $\\{1, 5\\}$ or $\\{2, 4\\}$.\n\n- **Case 1:** One group is $\\{1, 5, 9\\}$. From the remaining cards $\\{2, 3, 4, 6, 7, 8\\}$, the group containing $8$ needs two cards summing to $15 - 8 = 7$. The only available pair is $\\{3, 4\\}$, leaving $\\{2, 6, 7\\}$ (sum $15$). This gives $1$ partition.\n- **Case 2:** One group is $\\{2, 4, 9\\}$. From the remaining cards $\\{1, 3, 5, 6, 7, 8\\}$, the group containing $8$ needs two cards summing to $7$. The only available pair is $\\{1, 6\\}$, leaving $\\{3, 5, 7\\}$ (sum $15$). This gives $1$ partition.\n\nIn total, there are $1 + 1 = 2$ ways.',
          rubric: OK
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'In a sequence of positive integers, each term after the second is the product of the previous two terms. The sixth term in the sequence is $4000$. What is the first term?\n\nA. $1$\nB. $2$\nC. $4$\nD. $5$\nE. $10$',
          answer: 'D. $5$',
          principle: 'Express the $n$-th term symbolically in terms of the first two terms and match prime factorizations.',
          solution:
            'Let the first two positive integer terms be $x$ and $y$. Generating the sequence by multiplying the previous two terms gives\n$$x,\\; y,\\; xy,\\; xy^2,\\; x^2y^3,\\; x^3y^5, \\ldots$$\nThus the sixth term is $x^3y^5 = 4000$. Factoring $4000$ into primes yields\n$$4000 = 2^5 \\cdot 5^3.$$\nSince $x$ and $y$ are positive integers, $y^5$ must divide $2^5 \\cdot 5^3$, so $y \\in \\{1, 2\\}$.\n- If $y = 1$, then $x^3 = 2^5 \\cdot 5^3$, which has no integer solution because $5$ is not divisible by $3$.\n- Therefore $y = 2$, which gives $y^5 = 2^5$ and $x^3 = 5^3$, so $x = 5$.\n\nCheck: the sequence $5, 2, 10, 20, 200, 4000$ has sixth term $4000$.',
          rubric: OK
        },
        {
          label: '25',
          marks: 1,
          prompt:
            'Fifteen integers $a_1, a_2, a_3, \\ldots, a_{15}$ are arranged in order on a number line. The integers are equally spaced and have the property that\n$$1 \\le a_1 \\le 10, \\qquad 13 \\le a_2 \\le 20, \\qquad \\text{and} \\qquad 241 \\le a_{15} \\le 250.$$\nWhat is the sum of the digits of $a_{14}$?\n\nA. $8$\nB. $9$\nC. $10$\nD. $11$\nE. $12$',
          answer: 'A. $8$',
          principle: 'Bound the integer common difference $d$ using the extreme endpoints $a_{15} - a_1 = 14d$, then pin down $a_1$.',
          solution:
            'Let $d$ be the common difference, so $a_k = a_1 + (k - 1)d$ for each $k$ and $a_{15} - a_1 = 14d$. Since $1 \\le a_1 \\le 10$ and $241 \\le a_{15} \\le 250$, we can bound $14d$ from both sides:\n$$241 - 10 \\le a_{15} - a_1 \\le 250 - 1 \\implies 231 \\le 14d \\le 249.$$\nNotice that $14 \\times 16 = 224 < 231$ and $14 \\times 18 = 252 > 249$. Because $d$ is an integer, the only possibility is $d = 17$.\n\nNow determine $a_1$:\n- From $a_{15} = a_1 + 14(17) = a_1 + 238 \\ge 241$, we get $a_1 \\ge 3$.\n- From $a_2 = a_1 + 17 \\le 20$, we get $a_1 \\le 3$.\n\nHence $a_1 = 3$ (which satisfies $1 \\le 3 \\le 10$). Therefore,\n$$a_{14} = a_1 + 13d = 3 + 13 \\times 17 = 3 + 221 = 224,$$\nand the sum of the digits of $a_{14}$ is $2 + 2 + 4 = 8$.',
          rubric: OK
        }
      ]
    }
  ]
};
