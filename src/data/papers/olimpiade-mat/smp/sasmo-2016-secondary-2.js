/**
 * Paket Soal: SASMO 2016 Secondary 2 (Singapore and Asian Schools Math Olympiad).
 * Source: sasmo_2016_sec2.pdf. Original English wording and original question numbers are kept.
 * Items that depend on a diagram that cannot be restated in text (Q6, Q12, Q13) are omitted.
 */
export default {
  id: 'sasmo-2016-sec2',
  slug: 'sasmo-2016-secondary-2',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'Number theory, divisors and primes, algebra, counting, geometry and cryptarithms (SASMO 2016 Secondary 2)',
  relatedChapterIds: ['smp7-bab1-bilangan-bulat', 'smp7-bab4-bentuk-aljabar', 'smp8-bab1-bilangan-berpangkat'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'SASMO',
  title: 'SASMO 2016 Secondary 2',
  totalMarks: 64,
  instructions:
    'Section A has 12 multiple-choice questions (2 points each) and Section B has 10 open-ended questions (4 points each). Original question numbers are kept; Questions 6, 12 and 13 of the original paper depend on diagrams and are omitted. Calculators are not allowed.',
  source: {
    org: 'SASMO',
    file: 'sasmo_2016_sec2.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 24,
      stem: 'Choose the correct option for each question (2 points each in the original contest). Question numbers follow the original paper.',
      parts: [
        {
          label: '1',
          marks: 2,
          prompt:
            'Find the following sum\n$$9\\times 1+99\\times 2+999\\times 3+9999\\times 4$$\n\nA. $11010$\nB. $10110$\nC. $11001$\nD. $10011$\nE. None of the above',
          answer: 'E. None of the above (the sum is $43200$)',
          principle: 'Write each number of the form $99\\ldots9$ as a power of ten minus one, then split the sum.',
          solution:
            'Write each factor as a power of ten minus one:\n$$9\\times1+99\\times2+999\\times3+9999\\times4=(10-1)\\cdot1+(100-1)\\cdot2+(1000-1)\\cdot3+(10000-1)\\cdot4.$$\nSeparating the two kinds of terms:\n$$=(10+200+3000+40000)-(1+2+3+4)=43210-10=43200.$$\nCheck: $9+198+2997+39996=43200$. None of $11010$, $10110$, $11001$, $10011$ equals $43200$, so the answer is E.',
          rubric: [
            { code: 'M1', text: 'Evaluates the four products or rewrites them using powers of ten.' },
            { code: 'A1', text: 'Obtains $43200$ and chooses E.' }
          ]
        },
        {
          label: '2',
          marks: 2,
          prompt:
            'Given that $x$ is an integer such that $-4\\le x\\le 3$ and $y$ is a prime number. Find the greatest possible value of $x^2-y^2$.\n\nA. $0$\nB. $5$\nC. $7$\nD. $12$\nE. $20$',
          answer: 'D. $12$',
          principle: 'To maximise $x^2-y^2$, maximise $x^2$ and minimise $y^2$ independently, since $x$ and $y$ are unrelated.',
          solution:
            'Because $-4\\le x\\le 3$, we have $|x|\\le 4$, so $x^2\\le 16$, with equality at $x=-4$.\nThe smallest prime is $2$, so $y^2\\ge 4$, with equality at $y=2$.\nHence $x^2-y^2\\le 16-4=12$, and this value is attained at $x=-4$, $y=2$. The greatest possible value is $12$.',
          rubric: [
            { code: 'M1', text: 'Maximises $x^2$ (at $x=-4$) and minimises $y^2$ (at $y=2$).' },
            { code: 'A1', text: 'Obtains $16-4=12$ and chooses D.' }
          ]
        },
        {
          label: '3',
          marks: 2,
          prompt:
            'Find the missing number $X$. Three $2\\times 2$ grids are given (each listed as top row, then bottom row):\n- Grid 1: top row $169$, $3$; bottom row $12$, $16$.\n- Grid 2: top row $576$, $4$; bottom row $23$, $25$.\n- Grid 3: top row $64$, $5$; bottom row $X$, $36$.\n\nA. $7$\nB. $9$\nC. $34$\nD. $35$\nE. None of the above',
          answer: 'A. $7$',
          principle: 'Find the rule that is common to the completed grids and apply it to the third grid.',
          solution:
            'In Grid 1: $169=(12+1)^2$ (top-left is the square of bottom-left plus one) and $16=(3+1)^2$ (bottom-right is the square of top-right plus one).\nIn Grid 2: $576=(23+1)^2$ and $25=(4+1)^2$. The same rule holds.\nIn Grid 3 the bottom-right entry fits the rule: $36=(5+1)^2$. For the top-left entry, $64=(X+1)^2$, so $X+1=8$ and $X=7$.',
          rubric: [
            { code: 'M1', text: 'Identifies the rule top-left $=(\\text{bottom-left}+1)^2$ and bottom-right $=(\\text{top-right}+1)^2$.' },
            { code: 'A1', text: 'Solves $(X+1)^2=64$ to get $X=7$ and chooses A.' }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'The year 2016 is an interesting number because it is divisible by 1, 2, 3, 4, 6, 7, 8 and 9. When is the next year that is divisible by 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10?\n\nA. $2070$\nB. $2080$\nC. $2480$\nD. $2520$\nE. None of the above',
          answer: 'D. $2520$',
          principle: 'A number is divisible by all of $1,2,\\ldots,10$ exactly when it is a multiple of their least common multiple.',
          solution:
            'The least common multiple of $1,2,\\ldots,10$ takes the highest power of each prime: $2^3$ (from $8$), $3^2$ (from $9$), $5$ and $7$:\n$$\\operatorname{lcm}=2^3\\times3^2\\times5\\times7=2520.$$\nThe years divisible by all of $1,\\ldots,10$ are the multiples of $2520$. The first multiple after $2016$ is $2520$ (the multiple before it is $0$), so the next such year is $2520$.',
          rubric: [
            { code: 'M1', text: 'Finds $\\operatorname{lcm}(1,\\ldots,10)=2520$.' },
            { code: 'A1', text: 'Notes that $2520$ is the first multiple after $2016$ and chooses D.' }
          ]
        },
        {
          label: '5',
          marks: 2,
          prompt:
            'Eisenstein prime is a prime number which is one less than a multiple of 3. For example, 11 is an Eisenstein prime, since it is one less than 12. How many Eisenstein primes less than 60 are there?\n\nA. $13$\nB. $12$\nC. $11$\nD. $10$\nE. None of the above',
          answer: 'D. $10$',
          principle: 'A prime $p$ is one less than a multiple of $3$ exactly when $p\\equiv 2\\pmod 3$, i.e. when $3\\mid p+1$.',
          solution:
            'The primes below $60$ are $2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59$.\nKeep those for which $p+1$ is divisible by $3$:\n$$2,\\ 5,\\ 11,\\ 17,\\ 23,\\ 29,\\ 41,\\ 47,\\ 53,\\ 59.$$\nThe rest fail: $3\\equiv0$ and $7,13,19,31,37,43\\equiv1\\pmod 3$. There are $10$ Eisenstein primes below $60$.',
          rubric: [
            { code: 'M1', text: 'Lists the primes below $60$ and tests $3\\mid p+1$ (or $p\\equiv2\\pmod 3$).' },
            { code: 'A1', text: 'Counts $10$ and chooses D.' }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'Two 10-sided dice with numbers from 1 to 10 on their faces are rolled and their face values were multiplied. How many ways are there such that the product is a prime or ends in 6? (The two dice are distinguishable, so the outcomes $(a,b)$ and $(b,a)$ are counted as different ways.)\n\nA. $8$\nB. $11$\nC. $18$\nD. $20$\nE. None of the above',
          answer: 'D. $20$',
          principle: 'Count the two disjoint cases (prime product, product ending in 6) over ordered outcomes.',
          solution:
            '**Prime product.** A product $ab$ is prime only if one factor is $1$ and the other is a prime at most $10$, i.e. $2,3,5$ or $7$. This gives the outcomes $(1,p)$ and $(p,1)$: $4\\times2=8$ ways.\n**Product ending in 6.** Since $ab\\le100$, the product is one of $6,16,26,\\ldots,96$. With both factors in $\\{1,\\ldots,10\\}$ the possibilities (unordered) are $1\\times6=6$, $2\\times3=6$, $2\\times8=16$, $4\\times4=16$, $4\\times9=36$, $6\\times6=36$, $7\\times8=56$ (the other numbers $26,46,66,76,86,96$ need a factor larger than $10$). That is $5$ unordered pairs with different numbers, each giving $2$ outcomes, plus the two equal pairs $(4,4)$ and $(6,6)$: $5\\times2+2=12$ ways.\nA prime product cannot end in $6$ (it would be even and larger than $2$), so the cases do not overlap. Total: $8+12=20$.',
          rubric: [
            { code: 'M1', text: 'Counts the $8$ ordered outcomes with prime product.' },
            { code: 'A1', text: 'Counts the $12$ ordered outcomes ending in $6$, totals $20$ and chooses D.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt: 'How many factors of 9800 are perfect squares?\n\nA. $3$\nB. $5$\nC. $7$\nD. $8$\nE. $9$',
          answer: 'D. $8$',
          principle: 'A divisor is a perfect square exactly when every prime exponent in its factorisation is even.',
          solution:
            'Prime factorisation: $9800=2^3\\times5^2\\times7^2$ (since $9800=8\\times1225$ and $1225=35^2$).\nA square divisor has the form $2^a5^b7^c$ with $a,b,c$ even, $a\\le3$, $b\\le2$, $c\\le2$:\n- $a\\in\\{0,2\\}$ ($2$ choices),\n- $b\\in\\{0,2\\}$ ($2$ choices),\n- $c\\in\\{0,2\\}$ ($2$ choices).\nThe number of square divisors is $2\\times2\\times2=8$.',
          rubric: [
            { code: 'M1', text: 'Obtains $9800=2^3\\times5^2\\times7^2$ and the even-exponent condition.' },
            { code: 'A1', text: 'Counts $2\\times2\\times2=8$ and chooses D.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'The Menger Sponge is constructed as follows:\n1. Begin with a cube.\n2. Sub-divide the cube into 27 smaller cubes of equal size ($3\\times3\\times3$).\n3. Remove the smaller cube in the middle of each face, and remove the smaller cube in the very center of the larger cube, leaving 20 smaller cubes.\nIf the surface area of the cube in Step 1 is $216\\text{ cm}^2$, what is the surface area (in $\\text{cm}^2$) of the resulting solid after Step 3, counting all of its exposed faces including the insides of the removed tunnels?\n\nA. $192$\nB. $216$\nC. $224$\nD. $256$\nE. $288$',
          answer: 'E. $288$',
          principle: 'Count the exposed unit faces of the small cubes and multiply by the area of one small face.',
          solution:
            'The big cube has $6$ faces of area $216\\div6=36\\text{ cm}^2$, so its side is $6\\text{ cm}$ and each small cube has side $2\\text{ cm}$; one small face has area $4\\text{ cm}^2$.\n**Outside faces.** Each face of the big cube had $9$ small squares, and the middle one is removed, leaving $8$. So $6\\times8=48$ small faces remain on the outside.\n**Inside faces.** Each removed face-centre cube exposes the $4$ side faces of its neighbouring edge cubes: $6\\times4=24$ small faces. Its inner neighbour is the removed centre cube, so the centre cube exposes no further face.\nTotal: $48+24=72$ small faces, so the surface area is $72\\times4=288\\text{ cm}^2$.',
          rubric: [
            { code: 'M1', text: 'Finds one small face has area $4\\text{ cm}^2$ and counts $48$ outside faces.' },
            { code: 'A1', text: 'Adds the $24$ inside faces, gets $72\\times4=288$ and chooses E.' }
          ]
        },
        {
          label: '10',
          marks: 2,
          prompt:
            '$ABCD$ is a square (with vertices $A,B,C,D$ in order). The point $E$ lies outside the square, on the opposite side of line $CD$ from $A$ and $B$, with $\\angle CDE=84^\\circ$ and $\\angle DCE=48^\\circ$. Find the angle $\\angle EAD$.\n\nA. $2^\\circ$\nB. $3^\\circ$\nC. $4^\\circ$\nD. $5^\\circ$\nE. $6^\\circ$',
          answer: 'B. $3^\\circ$',
          principle: 'Equal base angles make triangle $CDE$ isosceles, so $DE=DC=DA$ and triangle $ADE$ is isosceles.',
          solution:
            'In triangle $CDE$: $\\angle DEC=180^\\circ-84^\\circ-48^\\circ=48^\\circ=\\angle DCE$, so $DE=DC$.\nSince $ABCD$ is a square, $DC=DA$, hence $DE=DA$ and triangle $ADE$ is isosceles with apex $D$.\nBecause $E$ is on the opposite side of $CD$ from $A$, the ray $DC$ lies between $DA$ and $DE$, so $\\angle ADE=\\angle ADC+\\angle CDE=90^\\circ+84^\\circ=174^\\circ$.\nThe base angles are equal: $\\angle EAD=\\dfrac{180^\\circ-174^\\circ}{2}=3^\\circ$.',
          rubric: [
            { code: 'M1', text: 'Shows $DE=DC=DA$ and that $\\angle ADE=174^\\circ$.' },
            { code: 'A1', text: 'Uses the isosceles triangle to get $3^\\circ$ and chooses B.' }
          ]
        },
        {
          label: '11',
          marks: 2,
          prompt:
            'Which of the statements below is true?\n\nA. The number of false statements here is one.\nB. The number of false statements here is two.\nC. The number of false statements here is three.\nD. The number of false statements here is four.\nE. The number of false statements here is five.',
          answer: 'D. The number of false statements here is four.',
          principle: 'The statements give different values for the same count, so they cannot be true together; then use a consistency argument.',
          solution:
            'The five statements claim five different values for the same quantity (the number of false statements), so at most one of them can be true.\nIf none were true, there would be $5$ false statements, which makes statement E true, a contradiction.\nSo exactly one statement is true and the other four are false: the number of false statements is $4$. The statement that says so is D, and it is consistent (D is the one true statement).',
          rubric: [
            { code: 'M1', text: 'Argues at most one statement can be true and that zero true statements is impossible.' },
            { code: 'A1', text: 'Concludes the count of false statements is $4$ and chooses D.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'Five circles are drawn on a flat surface. What is the greatest number of regions that can be formed on the surface?\n\nA. $17$\nB. $21$\nC. $22$\nD. $24$\nE. None of the above',
          answer: 'C. $22$',
          principle: 'Each new circle meets the earlier ones in at most $2$ points each, and every arc it is cut into splits one region into two.',
          solution:
            'One circle divides the surface into $2$ regions (inside and outside, the outside counted as one region).\nThe $k$-th circle ($k\\ge2$) meets each of the $k-1$ earlier circles in at most $2$ points, so it is cut into at most $2(k-1)$ arcs, and each arc divides one existing region into two. So it adds at most $2(k-1)$ regions:\n$$2\\to4\\to8\\to14\\to22.$$\nThe bound is reached when every two circles cross at $2$ points and no three circles pass through one point. So the greatest number of regions is $22$ (in general $n^2-n+2$ for $n$ circles).',
          rubric: [
            { code: 'M1', text: 'Shows each new circle adds at most $2(k-1)$ regions.' },
            { code: 'A1', text: 'Sums to $22$ (attained in general position) and chooses C.' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'How many fractions are there in the sequence below?\n$$\\frac{1}{3},\\ \\frac{4}{7},\\ \\frac{11}{18},\\ \\frac{29}{47},\\ \\ldots,\\ \\frac{1364}{2207}$$\n\nA. $8$\nB. $16$\nC. $18$\nD. $36$\nE. None of the above',
          answer: 'A. $8$',
          principle: 'Spot the Fibonacci-type (Lucas) recurrence: the numerators and denominators together form one sequence where each term is the sum of the previous two.',
          solution:
            'Write the numerators and denominators one after the other: $1,3,4,7,11,18,29,47,\\ldots$ Each term from the third on is the sum of the previous two ($1+3=4$, $3+4=7$, $4+7=11$, $7+11=18$, $\\ldots$), and each fraction is a consecutive pair (numerator, denominator).\nContinuing the sequence until the last denominator:\n$$1,3,4,7,11,18,29,47,76,123,199,322,521,843,1364,2207.$$\nThis has $16$ terms, and they are grouped in pairs: $\\frac13,\\frac47,\\frac{11}{18},\\frac{29}{47},\\frac{76}{123},\\frac{199}{322},\\frac{521}{843},\\frac{1364}{2207}$. So there are $16\\div2=8$ fractions.',
          rubric: [
            { code: 'M1', text: 'Identifies the rule (each term is the sum of the previous two) across numerators and denominators.' },
            { code: 'A1', text: 'Generates the $16$ terms, pairs them into $8$ fractions and chooses A.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Open-ended Questions',
      marks: 40,
      stem: 'Give the final answer to each question (4 points each in the original contest). Question numbers follow the original paper.',
      parts: [
        {
          label: '16',
          marks: 4,
          prompt:
            'In Town A, 7300 cars were sold in January of 2015 and $X$ thousand cars were sold in February. The percentage increase in the number of cars sold from February to June is $40\\%$. The number of cars sold in May is $2800$ cars less than twice the number of cars sold in June. The product of the number of cars sold in May and June is equal to $117\\,600\\,000$.\n\nHow many cars were sold in February?',
          answer: '$6000$ cars (that is, $X=6$)',
          principle: 'Express the sales of May and June in terms of $X$, then solve the resulting quadratic equation.',
          solution:
            'February sales are $1000X$ cars. A $40\\%$ increase to June gives June $=1.4\\times1000X=1400X$.\nMay is $2800$ less than twice June: May $=2\\times1400X-2800=2800X-2800=2800(X-1)$.\nTheir product is $117\\,600\\,000$:\n$$1400X\\times2800(X-1)=117\\,600\\,000\\implies 3\\,920\\,000\\,X(X-1)=117\\,600\\,000\\implies X(X-1)=30.$$\nSo $X^2-X-30=0$, i.e. $(X-6)(X+5)=0$, and since $X>0$, $X=6$.\nCheck: February $6000$, June $8400$, May $2\\times8400-2800=14000$, and $8400\\times14000=117\\,600\\,000$. So $6000$ cars were sold in February.',
          rubric: [
            { code: 'M1', text: 'Expresses June as $1.4X$ and May as $2(1.4X)-2800$ (consistent units).' },
            { code: 'M1', text: 'Forms the equation $X(X-1)=30$.' },
            { code: 'A1', text: 'Solves the quadratic and rejects the negative root.' },
            { code: 'A1', text: 'States $6000$ cars.' }
          ]
        },
        {
          label: '17',
          marks: 4,
          prompt:
            'There are 27 students in the classroom. 14 of them wear glasses. 11 of the 27 are girls. Only 5 boys do not wear glasses. How many girls wear glasses?',
          answer: '$3$',
          principle: 'Organise the information in a two-way table (boys/girls against glasses/no glasses).',
          solution:
            'Number of boys: $27-11=16$.\nBoys who wear glasses: $16-5=11$ (only $5$ boys do not).\nStudents wearing glasses in total: $14$, so girls wearing glasses: $14-11=3$.\nCheck: girls without glasses $=11-3=8$, and without glasses overall $=5+8=13=27-14$.',
          rubric: [
            { code: 'M1', text: 'Finds the number of boys ($16$).' },
            { code: 'M1', text: 'Finds boys with glasses ($11$).' },
            { code: 'A1', text: 'Subtracts from the total with glasses.' },
            { code: 'A1', text: 'States $3$ girls.' }
          ]
        },
        {
          label: '18',
          marks: 4,
          prompt:
            'A rectangular grid is made of unit squares in 4 columns and 5 rows ($20$ unit squares; it is $4$ units wide and $5$ units tall). A diagonal is drawn from the top-left corner $A$ of the grid to the bottom-right corner of the grid. The shaded region is the triangle bounded by the left side of the grid, the diagonal and the horizontal grid line $2$ units below $A$ (so its vertical side along the left side of the grid has length $2$).\n\nWhat percentage of the grid is shaded?',
          answer: '$8\\%$',
          principle: 'The shaded triangle is similar to the large right triangle cut off by the diagonal, and areas of similar figures scale with the square of the ratio of sides.',
          solution:
            'Let $B$ be the bottom-left corner of the grid and $C$ the bottom-right corner, so $AB=5$, $BC=4$ and $\\triangle ABC$ is a right triangle (the diagonal is $AC$) of area $\\frac12\\times4\\times5=10$.\nLet $D$ be the point on $AB$ with $AD=2$ and $E$ the point where the horizontal line through $D$ meets $AC$. Since $DE\\parallel BC$, $\\triangle ADE\\sim\\triangle ABC$ with ratio $AD:AB=2:5$.\nSo $\\dfrac{\\text{area of }\\triangle ADE}{\\text{area of }\\triangle ABC}=\\left(\\dfrac25\\right)^2=\\dfrac4{25}$, giving $\\text{area of }\\triangle ADE=\\dfrac4{25}\\times10=\\dfrac85$.\nThe fraction of the grid shaded is $\\dfrac{8/5}{20}=\\dfrac{8}{100}=8\\%$.',
          rubric: [
            { code: 'M1', text: 'Identifies the similar triangles $ADE$ and $ABC$ with ratio $2:5$.' },
            { code: 'M1', text: 'Uses the area ratio $4/25$ and area of $\\triangle ABC=10$.' },
            { code: 'A1', text: 'Finds shaded area $8/5$.' },
            { code: 'A1', text: 'Divides by $20$ to obtain $8\\%$.' }
          ]
        },
        {
          label: '19',
          marks: 4,
          prompt:
            'Find the value of the expression below.\n$$(2+1)\\left(2+\\frac{2}{3}\\right)\\left(2+\\frac{1}{2}\\right)\\left(2+\\frac{2}{5}\\right)\\left(2+\\frac{1}{3}\\right)\\cdots\\left(2+\\frac{2}{9}\\right)$$',
          answer: '$1280$',
          principle: 'Rewrite every term as $2+\\frac2k$ so the product becomes a telescoping product.',
          solution:
            'The terms are $1=\\frac22$, $\\frac23$, $\\frac12=\\frac24$, $\\frac25$, $\\frac13=\\frac26$, $\\frac27$, $\\frac28$, $\\frac29$, so the product is\n$$\\prod_{k=2}^{9}\\left(2+\\frac2k\\right)=\\prod_{k=2}^{9}\\frac{2(k+1)}{k}=2^8\\times\\frac{3}{2}\\cdot\\frac{4}{3}\\cdots\\frac{10}{9}.$$\nThe fractions telescope to $\\frac{10}{2}=5$, so the value is $2^8\\times5=256\\times5=1280$.\nCheck against the direct form: $\\frac62\\cdot\\frac83\\cdot\\frac{10}4\\cdot\\frac{12}5\\cdot\\frac{14}6\\cdot\\frac{16}7\\cdot\\frac{18}8\\cdot\\frac{20}9=\\frac{6\\cdot8\\cdot10\\cdot12\\cdot14\\cdot16\\cdot18\\cdot20}{2\\cdot3\\cdot4\\cdot5\\cdot6\\cdot7\\cdot8\\cdot9}=1280$.',
          rubric: [
            { code: 'M1', text: 'Rewrites the terms as $2+\\frac2k$ for $k=2,\\ldots,9$.' },
            { code: 'M1', text: 'Writes each factor as $\\frac{2(k+1)}{k}$.' },
            { code: 'A1', text: 'Telescopes the product to $2^8\\times5$.' },
            { code: 'A1', text: 'States $1280$.' }
          ]
        },
        {
          label: '20',
          marks: 4,
          prompt: 'Find all possible values of $\\dfrac{x}{y}$ where $21x^2-10xy+y^2=0$ and $y\\neq0$.',
          answer: '$\\dfrac17$ or $\\dfrac13$',
          principle: 'Divide the homogeneous equation by $y^2$ to get a quadratic in $t=\\frac xy$, then factorise.',
          solution:
            'Since $y\\ne0$, divide by $y^2$ and set $t=\\dfrac xy$:\n$$21t^2-10t+1=0.$$\nFactorise: $21t^2-10t+1=(7t-1)(3t-1)$, because $7t\\cdot3t=21t^2$, $(-1)(-1)=1$ and $-7t-3t=-10t$.\nSo $t=\\dfrac17$ or $t=\\dfrac13$. Both occur, e.g. $(x,y)=(1,7)$ and $(1,3)$: $21-70+49=0$ and $21-30+9=0$.',
          rubric: [
            { code: 'M1', text: 'Divides by $y^2$ to obtain $21t^2-10t+1=0$.' },
            { code: 'M1', text: 'Factorises as $(7t-1)(3t-1)=0$.' },
            { code: 'A1', text: 'Gets $t=\\frac17$.' },
            { code: 'A1', text: 'Gets $t=\\frac13$.' }
          ]
        },
        {
          label: '21',
          marks: 4,
          prompt:
            'What is the greatest amount of numbers which must be selected (not randomly) from 72 numbers $1,2,3,\\ldots,72$ to ensure that there are no two numbers (among selected) with the product of 72? (That is, find the largest possible size of a selection in which no two chosen numbers have product $72$.)',
          answer: '$66$',
          principle: 'Pair up the numbers whose product is $72$; at most one number from each pair may be chosen, and all other numbers are free.',
          solution:
            'Since $72=2^3\\times3^2$ has $(3+1)(2+1)=12$ divisors, the numbers that are in some pair with product $72$ are exactly these $12$ divisors, forming the $6$ pairs\n$$(1,72),\\ (2,36),\\ (3,24),\\ (4,18),\\ (6,12),\\ (8,9).$$\n($72$ is not a perfect square, so no number is paired with itself.)\nFrom each pair at most one number can be chosen, while the other $72-12=60$ numbers are in no such pair and can all be chosen. So at most $60+6=66$ numbers can be chosen, and choosing, for example, the smaller number of each pair together with the $60$ free numbers achieves $66$.',
          rubric: [
            { code: 'M1', text: 'Lists the divisors of $72$ and groups them into $6$ pairs with product $72$.' },
            { code: 'M1', text: 'Notes at most one number per pair, and the other $60$ numbers are unrestricted.' },
            { code: 'A1', text: 'Computes $60+6=66$.' },
            { code: 'A1', text: 'Shows $66$ is attainable (choose one per pair plus the $60$ others).' }
          ]
        },
        {
          label: '22',
          marks: 4,
          prompt: 'How many three-digit numbers, with three different digits, are divisible by eleven?',
          answer: '$64$',
          principle: 'A number $\\overline{abc}$ is divisible by $11$ if and only if $a-b+c$ is divisible by $11$.',
          solution:
            'Let the number be $\\overline{abc}$ with $a\\ne0$ and $a,b,c$ distinct. It is divisible by $11$ iff $11\\mid a-b+c$. Here $a+c-b$ lies between $1+0-9=-8$ and $9+9-0=18$, so $a+c-b\\in\\{0,11\\}$.\n**Case $b=a+c$.** Then $a+c\\le9$. If $c=0$ then $b=a$, not allowed, so $a,c\\ge1$; also $a\\ne c$. The ordered pairs $(a,c)$ with $a,c\\ge1$ and $a+c=s$ number $s-1$, so for $s=2,\\ldots,9$ there are $1+2+\\cdots+8=36$ pairs; removing the $4$ with $a=c$ ($a=1,2,3,4$) leaves $32$. Then $b=a+c$ is automatically different from $a$ and $c$.\n**Case $b=a+c-11$.** Then $a+c\\ge11$. For $s=a+c=11,\\ldots,18$ there are $19-s$ ordered pairs with $a,c\\in\\{1,\\ldots,9\\}$, in total $8+7+\\cdots+1=36$; removing those with $a=c$ ($a=6,7,8,9$) leaves $32$. Here $b=a+c-11\\le7$ differs from $a$ (as $c\\ne11$) and from $c$ (as $a\\ne11$).\nTotal: $32+32=64$.',
          rubric: [
            { code: 'M1', text: 'Applies the divisibility rule and reduces to $a+c-b\\in\\{0,11\\}$.' },
            { code: 'M1', text: 'Counts the case $b=a+c$ correctly ($32$).' },
            { code: 'A1', text: 'Counts the case $b=a+c-11$ correctly ($32$).' },
            { code: 'A1', text: 'States the total $64$.' }
          ]
        },
        {
          label: '23',
          marks: 4,
          prompt: 'Find the last two digits of $2016^{2016}$.',
          answer: '$16$',
          principle: 'The last two digits depend only on the base modulo $100$; the powers of $16$ modulo $100$ repeat with period $5$.',
          solution:
            'Since $2016\\equiv16\\pmod{100}$, we need $16^{2016}\\bmod100$. Compute the powers of $16$ modulo $100$:\n$$16^1=16,\\quad 16^2=256\\equiv56,\\quad 16^3\\equiv56\\cdot16=896\\equiv96,\\quad 16^4\\equiv96\\cdot16=1536\\equiv36,\\quad 16^5\\equiv36\\cdot16=576\\equiv76,\\quad 16^6\\equiv76\\cdot16=1216\\equiv16.$$\nThe last two digits cycle $16,56,96,36,76$ with period $5$. Since $2016=5\\times403+1$, the exponent $2016$ is in the same position as exponent $1$, so the last two digits are $16$.\n(Check: modulo $4$ it is $0$, and modulo $25$, $16^{2016}\\equiv16^{16}\\equiv16$ because $16^{20}\\equiv1$; the number $16$ satisfies both.)',
          rubric: [
            { code: 'M1', text: 'Reduces the base to $16$ modulo $100$.' },
            { code: 'M1', text: 'Computes the cycle $16,56,96,36,76$ of powers of $16$.' },
            { code: 'A1', text: 'Finds $2016\\equiv1\\pmod5$.' },
            { code: 'A1', text: 'States the last two digits $16$.' }
          ]
        },
        {
          label: '24',
          marks: 4,
          prompt:
            'Find the following product (the factors have $1,3,7,\\ldots,2^7-1$ zeros between the two ones):\n$$101\\times10001\\times100000001\\times\\cdots\\times1\\underbrace{00\\ldots00}_{2^7-1\\text{ zeros}}1$$',
          answer: '$\\dfrac{10^{256}-1}{10^2-1}=\\dfrac{10^{256}-1}{99}$',
          principle: 'Multiply by $10^2-1$ and telescope using $(a-1)(a+1)=a^2-1$.',
          solution:
            'The factors are $10^{2^k}+1$ for $k=1,2,\\ldots,7$ (for example $101=10^2+1$, $10001=10^4+1$, $100000001=10^8+1$, and the last one is $10^{128}+1$). Let\n$$x=(10^2+1)(10^4+1)(10^8+1)\\cdots(10^{128}+1).$$\nMultiply by $10^2-1$ and repeatedly apply $(a-1)(a+1)=a^2-1$:\n$$(10^2-1)x=(10^4-1)(10^4+1)(10^8+1)\\cdots=(10^8-1)(10^8+1)\\cdots=(10^{128}-1)(10^{128}+1)=10^{256}-1.$$\nHence $x=\\dfrac{10^{256}-1}{10^2-1}=\\dfrac{10^{256}-1}{99}$ (equivalently $x=1+10^2+10^4+\\cdots+10^{254}$).',
          rubric: [
            { code: 'M1', text: 'Writes the factors as $10^{2^k}+1$, $k=1,\\ldots,7$.' },
            { code: 'M1', text: 'Multiplies by $10^2-1$ to start the telescoping.' },
            { code: 'A1', text: 'Telescopes correctly to $10^{256}-1$.' },
            { code: 'A1', text: 'States $x=\\frac{10^{256}-1}{99}$.' }
          ]
        },
        {
          label: '25',
          marks: 4,
          prompt:
            'In the following cryptarithm, all the different letters stand for different digits. Find the 5-digit number MATHS.\n$$\\overline{SASMO}\\times3=\\overline{MATHS}$$',
          answer: '$60792$',
          principle: 'Work column by column from the units, tracking the carries, and use the condition that different letters are different digits.',
          solution:
            'Let the carries from the units, tens, hundreds, thousands columns be $c_1,c_2,c_3,c_4$.\n**Units:** $3O\\equiv S\\pmod{10}$. If $S=0$ then $O=0=S$, impossible; so $S\\ge1$.\n**Ten-thousands:** $M=3S+c_4\\ge3S$ and $M\\le9$, so $S\\in\\{1,2,3\\}$. The units column then gives $(S,O,c_1)=(1,7,2),(2,4,1),(3,1,0)$.\n**Thousands:** $3A+c_3$ ends in $A$, so $2A+c_3\\equiv0\\pmod{10}$. The hundreds column gives $c_3\\in\\{0,1\\}$ (as $3S+c_2\\le11$), and $2A+c_3$ cannot be odd, so $c_3=0$ and $A\\in\\{0,5\\}$, giving $c_4=\\lfloor3A/10\\rfloor=0$ or $1$ respectively.\nNow test each case, using $H\\equiv3M+c_1\\pmod{10}$ and $T\\equiv3S+c_2$:\n- $S=1$ ($O=7$, $c_1=2$): $A=0\\Rightarrow M=3$, $H=1=S$; $A=5\\Rightarrow M=4$, $H=14\\to4=M$. Both fail.\n- $S=3$ ($O=1$, $c_1=0$): $A=0\\Rightarrow M=9$, $3\\cdot9=27$ gives $H=7$, $c_2=2$, so $T=9+2=11\\to1=O$ and $c_3=1\\ne0$; $A=5\\Rightarrow M=10$ impossible. Both fail.\n- $S=2$ ($O=4$, $c_1=1$): $A=5\\Rightarrow M=7$, $H=22\\to2=S$, fails. $A=0\\Rightarrow M=6$, $3\\cdot6+1=19$ gives $H=9$, $c_2=1$, $T=6+1=7$, $c_3=0$ as required. The digits $S=2,A=0,M=6,O=4,H=9,T=7$ are all different.\nThus $\\overline{SASMO}=20264$ and $20264\\times3=60792=\\overline{MATHS}$, so MATHS $=60792$.',
          rubric: [
            { code: 'M1', text: 'Uses the units column and leading digit to restrict $S\\in\\{1,2,3\\}$ with the matching $O$.' },
            { code: 'M1', text: 'Uses the thousands column to get $A\\in\\{0,5\\}$.' },
            { code: 'A1', text: 'Eliminates the cases $S=1$ and $S=3$ (and $A=5$ for $S=2$).' },
            { code: 'A1', text: 'Finds $S=2,A=0,M=6,O=4,H=9,T=7$ and states $60792$.' }
          ]
        }
      ]
    }
  ]
};
