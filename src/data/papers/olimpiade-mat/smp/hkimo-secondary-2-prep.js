/**
 * Paket Soal Terstruktur: HKIMO Secondary 2 Preparation, Practice 1-5
 * Sumber: HKIMO Secondary 2 preparation material (hkimo_sec2_prep.pdf), Practice 1 to 5.
 * Bahasa dipertahankan sesuai naskah sumber untuk tiap butir soal.
 */
export default {
  id: 'hkimo-sec2-prep',
  slug: 'hkimo-secondary-2-prep',
  subject: 'olimpiade-mat',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'HKIMO Secondary 2 preparation: logical thinking (digit puzzles, displacement, clocks, pigeonhole), algebra (absolute values, factorisation, inequalities, linear Diophantine equations, quadratics), number theory (remainders, divisors, last digits, factor theorem), geometry (coordinates, polygons, Menelaus) and combinatorics (arrangements, probability, counting triangles)',
  relatedChapterIds: ['smp7-bab4-bentuk-aljabar', 'smp8-bab2-teorema-pythagoras', 'smp8-bab3-persamaan-pertidaksamaan-linear'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'HKIMO',
  title: 'HKIMO Secondary 2 Preparation: Practice 1 to 5',
  totalMarks: 141,
  instructions:
    'Work through the five practice sets (Logical Thinking, Algebra, Number Theory, Geometry, Combinatorics in each). Every item is worth 1 mark and has a single final answer. Items that depended on an unstated diagram or were ambiguous as printed were omitted, so item numbers within a section may skip. One item is kept in Indonesian as in the source.',
  source: {
    org: 'HKIMO',
    file: 'hkimo_sec2_prep.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Practice 1: Logical Thinking',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 1, Logical Thinking. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Given $A$ and $C$ are two non-zero digits and the 3-digit numbers formed by these two digits have the following properties:\n- $\\overline{CAC}$ is divisible by 9.\n- $\\overline{CCA}$ is divisible by 7.\n- $\\overline{ACC}$ has an odd number of factors.\n\nFind the 3-digit number $\\overline{ACA}$.',
          answer: '$141$',
          principle:
            'A positive integer has an odd number of positive factors if and only if it is a perfect square.',
          solution:
            '$\\overline{ACC}$ is a perfect square. A square ends in $0,1,4,5,6$ or $9$, so $CC\\in\\{11,44,55,66,99\\}$. Squares are $\\equiv 0$ or $1 \\pmod 4$, while $11\\equiv 3$, $55\\equiv 3$, $66\\equiv 2$, $99\\equiv 3 \\pmod 4$. Hence $CC=44$, $C=4$.\nA square $n^2$ ending in $44$ with $100\\le n^2\\le 999$: $12^2=144$ is the only one ($38^2=1444>999$). So $A=1$.\nCheck: $\\overline{CAC}=414=9\\times 46$ and $\\overline{CCA}=441=7\\times 63$. Therefore $\\overline{ACA}=141$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Andy goes northwest for 36 km, goes northeast for 48 km, then goes southwest for 21 km. How far is he now from the original position?',
          answer: '$45\\text{ km}$',
          principle:
            'Northwest and northeast are perpendicular directions; southwest is opposite to northeast. Then use Pythagoras.',
          solution:
            'Southwest cancels part of the northeast movement, so the net displacement is $48-21=27$ km northeast and $36$ km northwest. These are perpendicular, so the distance is $$\\sqrt{36^2+27^2}=\\sqrt{1296+729}=\\sqrt{2025}=45\\text{ km}.$$',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many time(s) does hour hand and minute hand of a clock overlap in 12 hour?',
          answer: '$11$',
          principle:
            'Relative motion: the minute hand gains $11$ full turns on the hour hand in $12$ hours.',
          solution:
            'In 12 hours the minute hand makes 12 turns and the hour hand 1 turn, so the minute hand gains $12-1=11$ turns on the hour hand. The hands coincide once each time the minute hand gains one full turn, so they overlap $11$ times (the overlap at the end of the 12 hours is the same as the one at the start, so it is counted once).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'If $\\overline{abcd}+\\overline{dcba}=16445$, calculate $a+b+c+d$.',
          answer: '$28$',
          principle:
            'Write the sum in place values: $1001(a+d)+110(b+c)$, then use divisibility by $11$ and the units digit.',
          solution:
            '$$\\overline{abcd}+\\overline{dcba}=1001(a+d)+110(b+c)=11\\big(91(a+d)+10(b+c)\\big)=16445.$$\nDividing by $11$: $91(a+d)+10(b+c)=1495$. Taking this modulo $10$ gives $a+d\\equiv 5\\pmod{10}$, so $a+d=5$ or $15$ (as $a+d\\le 18$).\nIf $a+d=5$: $10(b+c)=1495-455=1040$, $b+c=104$, impossible. If $a+d=15$: $10(b+c)=1495-1365=130$, $b+c=13$.\nSo $a+b+c+d=15+13=28$. (Such digits exist: $6499+9946=16445$.)',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'There are 30 problems in a mathematics competition. The scores of each problem are allocated in the following ways, 4 marks will be given for a correct answer, 0 marks will be given for a blank answer or wrong answer. Find the minimum number of candidate(s) to ensure that 3 candidate will have the same scores in the competition.',
          answer: '$63$',
          principle:
            'Pigeonhole principle: count the possible scores.',
          solution:
            'A candidate\'s score is $4k$ where $k=0,1,\\dots,30$ is the number of correct answers, so there are $31$ possible scores. With $2\\times 31=62$ candidates it is possible that every score occurs exactly twice, so no three candidates need share a score. With $63$ candidates, by the pigeonhole principle some score occurs at least $\\lceil 63/31\\rceil=3$ times. The minimum is $63$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'There are 7 pairs of white chopsticks, 3 pairs of yellow chopsticks and 2 pairs of brown chopsticks mixed together. Close your eyes. If you want to get each 2 pairs of chopsticks with different colours, at least how many piece(s) of chopstick(s) is / are needed to be taken? (A pair means two chopsticks of the same colour.)',
          answer: '$17$',
          principle:
            'Worst-case (pigeonhole) argument on the number of chopsticks of each colour.',
          solution:
            'There are $14$ white, $6$ yellow and $4$ brown chopsticks. We need complete pairs in two different colours, i.e. at least two colours must each have at least $2$ chopsticks among those taken.\nA failing selection has at most one colour with $\\ge 2$ chopsticks, so it has at most $14+1+1=16$ chopsticks (all white and one each of the others). Indeed $16$ chopsticks can fail.\nWith $17$ chopsticks a failure is impossible (it would need $\\le 16$), so at least two colours have $\\ge 2$ chopsticks. The answer is $17$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Practice 1: Algebra',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 1, Algebra. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the value of $y$ if $|2x+3y-8|+|3x+5y-13|=0$.',
          answer: '$y=2$',
          principle:
            'A sum of absolute values is zero only if each absolute value is zero.',
          solution:
            'Both terms are non-negative, so $2x+3y=8$ and $3x+5y=13$. Computing $2\\times(\\text{second})-3\\times(\\text{first})$: $(6x+10y)-(6x+9y)=26-24$, so $y=2$ (and $x=1$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Factorize $x^2-y^2+6y-9$.',
          answer: '$(x-y+3)(x+y-3)$',
          principle:
            'Group into a perfect square and use the difference of squares.',
          solution:
            '$$x^2-(y^2-6y+9)=x^2-(y-3)^2=(x-(y-3))(x+(y-3))=(x-y+3)(x+y-3).$$',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many integer solution(s) is/are there for $x$ if $-35\\le 7x+4\\le 36$?',
          answer: '$10$',
          principle:
            'Solve the linear inequality and count the integers in the interval.',
          solution:
            '$-39\\le 7x\\le 32$, so $-\\tfrac{39}{7}\\le x\\le \\tfrac{32}{7}$, i.e. $-5.57\\ldots\\le x\\le 4.57\\ldots$. The integers are $-5,-4,\\dots,4$, which is $10$ integers.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Given that $a$ is a real number and $a\\neq -1$. If $a+2+\\dfrac{1}{a+1}=-1$, find the value of $a$.',
          answer: '$a=-2$',
          principle:
            'Substitute $t=a+1$ and use $t+\\frac1t=-2\\iff (t+1)^2=0$.',
          solution:
            'Let $t=a+1\\neq 0$. Then $t+1+\\frac1t=-1$, so $t+\\frac1t=-2$, i.e. $t^2+2t+1=0$, $(t+1)^2=0$, $t=-1$ and $a=-2$. Check: $-2+2+\\frac{1}{-1}=-1$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many negative integral solution(s) is/are there for $(x,y)$ if $4x+9y=-305$?',
          answer: '$9$',
          principle:
            'Linear Diophantine equation: find the congruence class of $y$, then bound it by the sign conditions.',
          solution:
            '$4x=-305-9y$ requires $9y\\equiv-305\\pmod 4$, i.e. $y\\equiv 3\\pmod 4$ (since $-305\\equiv 3$ and $9\\equiv 1$). Also $x<0$ gives $-305-9y<0$, i.e. $y>-33.9$, and $y<0$. So $y\\in\\{-1,-5,-9,\\dots,-33\\}$, which is $9$ values, each giving a negative integer $x$ (e.g. $y=-33\\Rightarrow x=-2$, $y=-1\\Rightarrow x=-74$). The next value $y=-37$ gives $x=7>0$. There are $9$ solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $a$ is an integer, find the greatest value of $a$ such that $ax^2+3x+2=0$ has real root(s).',
          answer: '$1$',
          principle:
            'Discriminant condition $\\Delta\\ge 0$ for a quadratic to have real roots.',
          solution:
            'For $a\\ne 0$, real roots need $\\Delta=9-8a\\ge 0$, i.e. $a\\le \\frac98$, so $a\\le 1$. For $a=1$: $x^2+3x+2=0$ has roots $-1,-2$. Every integer $a\\ge 2$ gives $\\Delta<0$ (and $a=0$ gives the root $x=-\\frac23$). The greatest value is $a=1$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 3,
      title: 'Practice 1: Number Theory',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 1, Number Theory. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the remainder when $20199102$ is divided by $7$.',
          answer: '$0$',
          principle:
            'Since $1001=7\\times 11\\times 13$, we have $10^3\\equiv -1\\pmod 7$; use alternating sums of 3-digit blocks.',
          solution:
            '$20199102=20\\cdot10^6+199\\cdot10^3+102\\equiv 20-199+102=-77\\pmod 7$ (using $10^3\\equiv-1$, $10^6\\equiv 1$). Since $-77=-11\\times 7$, the remainder is $0$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            '$x$ is a positive integer such that the remainder of $x^2$ divided by $9$ is $7$. If $x>45$, what is the minimal value of $x$?',
          answer: '$49$',
          principle:
            'Tabulate squares modulo $9$ over one period of residues.',
          solution:
            'Squares of $x\\equiv 0,1,\\dots,8\\pmod 9$ are $0,1,4,0,7,7,0,4,1$. So $x^2\\equiv 7$ iff $x\\equiv 4$ or $5\\pmod 9$. Numbers above $45$: $46\\equiv1,\\ 47\\equiv2,\\ 48\\equiv3,\\ 49\\equiv4$. So $x=49$ (check: $49^2=2401=9\\times266+7$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Find the last digit of $A$ if $A=1+4+4^2+4^3+\\cdots+4^{2019}$.',
          answer: '$5$',
          principle:
            'Powers of $4$ end alternately in $4$ and $6$ (period $2$).',
          solution:
            '$4^0=1$; for $k\\ge 1$, $4^k$ ends in $4$ if $k$ is odd and in $6$ if $k$ is even. Among $k=1,\\dots,2019$ there are $1010$ odd and $1009$ even exponents. The last digit of $A$ is that of $1+1010\\cdot4+1009\\cdot 6=1+4040+6054=10095$, i.e. $5$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Find the sum of all positive factors of $868$.',
          answer: '$1792$',
          principle:
            'If $n=p_1^{e_1}\\cdots p_k^{e_k}$, then $\\sigma(n)=\\prod \\frac{p_i^{e_i+1}-1}{p_i-1}$.',
          solution:
            '$868=4\\times 217=2^2\\times 7\\times 31$. So $\\sigma(868)=(1+2+4)(1+7)(1+31)=7\\times 8\\times 32=1792$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'If $(x-2)$ is a factor of polynomial $(3x^2-79x+c)$. Find the value of $c$.',
          answer: '$146$',
          principle:
            'Factor theorem: $(x-a)$ divides $P(x)$ iff $P(a)=0$.',
          solution:
            'Put $x=2$: $3\\cdot4-79\\cdot 2+c=0\\Rightarrow 12-158+c=0\\Rightarrow c=146$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $k^3=250047$, find the value of $k$.',
          answer: '$63$',
          principle:
            'Bound the cube root and use the last digit of a cube.',
          solution:
            '$60^3=216000<250047<343000=70^3$, so $60<k<70$. The cube ends in $7$, and $n^3$ ends in $7$ only when $n$ ends in $3$. So $k=63$; indeed $63^3=3969\\times63=250047$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 4,
      title: 'Practice 1: Geometry',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 1, Geometry. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'In triangle $ABC$, $D$ is a point on $AB$ and $E$ is on the extension of $AC$ (beyond $C$). $DE$ intersects $BC$ at $F$. If $\\dfrac{DE}{EF}=\\dfrac94$ and $\\dfrac{AD}{DB}=\\dfrac23$, find the value of $\\dfrac{AC}{AE}$.',
          answer: '$\\dfrac{25}{37}$',
          principle:
            'Menelaus\' theorem on triangle $ADE$ with the line $BFC$.',
          solution:
            'Take $DE=9$, $EF=4$, so $DF=5$ and $DF:FE=5:4$. Take $AD=2$, $DB=3$, so $AB=5$ and $AB:BD=5:3$ ($B$ lies on $AD$ extended beyond $D$).\nThe line $B$–$F$–$C$ cuts the sides $DE$ at $F$, $EA$ at $C$ and $AD$ (extended) at $B$ of triangle $ADE$, so by Menelaus\n$$\\frac{AB}{BD}\\cdot\\frac{DF}{FE}\\cdot\\frac{EC}{CA}=1\\ \\Rightarrow\\ \\frac53\\cdot\\frac54\\cdot\\frac{EC}{CA}=1\\ \\Rightarrow\\ \\frac{EC}{CA}=\\frac{12}{25}.$$\nSince $AE=AC+CE$, $\\dfrac{AC}{AE}=\\dfrac{25}{25+12}=\\dfrac{25}{37}$. (If $E$ were beyond $A$, $F$ would lie beyond $D$ and $EF>DE$, contradicting $DE/EF>1$; so $E$ is indeed beyond $C$.)',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'For three points on a coordinate plane $A(8,8)$, $B(2,4)$ and $C(3,1)$, find the area of the triangle formed by using those three points as vertices.',
          answer: '$11$',
          principle:
            'Shoelace formula for the area of a triangle from coordinates.',
          solution:
            '$$\\text{Area}=\\tfrac12\\big|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\big|=\\tfrac12\\big|8(3)+2(-7)+3(4)\\big|=\\tfrac12\\cdot 22=11.$$',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'An iron wire is bent into a circle which radius is $21$. If the wire is now bent into a rectangle, what is the maximum value of area of it? (Take $\\pi=\\frac{22}{7}$)',
          answer: '$1089$',
          principle:
            'For a fixed perimeter the rectangle of greatest area is a square (AM-GM).',
          solution:
            'The wire length is $2\\pi r=2\\cdot\\frac{22}{7}\\cdot 21=132$, so the rectangle has semi-perimeter $66$. With sides $x$ and $66-x$, area $=x(66-x)=1089-(x-33)^2\\le 1089$, with equality for the square of side $33$. Maximum area $=33^2=1089$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'An interior angle of a regular $n$-sided polygon is $(12n+6)^\\circ$. Find $n$. (The polygon is understood to be regular, as otherwise $n$ is not determined.)',
          answer: '$n=12$',
          principle:
            'Interior angle of a regular $n$-gon is $180^\\circ-\\frac{360^\\circ}{n}$.',
          solution:
            '$180-\\frac{360}{n}=12n+6\\Rightarrow 174n-360=12n^2\\Rightarrow 2n^2-29n+60=0\\Rightarrow (2n-5)(n-12)=0$. Since $n$ is an integer, $n=12$ (check: interior angle of a regular dodecagon is $150^\\circ=12\\cdot12+6$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many diagonal(s) does a convex decagon (10-sided polygon) have?',
          answer: '$35$',
          principle:
            'A convex $n$-gon has $\\frac{n(n-3)}{2}$ diagonals.',
          solution:
            'Each vertex gives $n-3=7$ diagonals, and each diagonal is counted twice: $\\frac{10\\times 7}{2}=35$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The area of a square is $1376\\text{ cm}^2$ larger than its inscribed circle. Find side length of the square. (Take $\\pi=3.14$)',
          answer: '$80\\text{ cm}$',
          principle:
            'The inscribed circle of a square of side $s$ has radius $s/2$.',
          solution:
            'Area difference: $s^2-\\pi\\left(\\frac s2\\right)^2=s^2\\left(1-\\frac{3.14}{4}\\right)=0.215\\,s^2=1376$. So $s^2=\\frac{1376}{0.215}=6400$ and $s=80$ cm.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 5,
      title: 'Practice 1: Combinatorics',
      marks: 5,
      stem: 'HKIMO Secondary 2 Preparation, Practice 1, Combinatorics. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '2',
          marks: 1,
          prompt:
            '4 identical Mathematics books and 5 identical English books are put on the bookshelf. How many way(s) of arrangement is/are there?',
          answer: '$126$',
          principle:
            'Arrangements of a multiset: choose which positions hold one type, $\\binom{n}{k}$.',
          solution:
            'There are $9$ positions in a row; choosing the $4$ positions for the Mathematics books determines the arrangement: $\\binom94=126$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'A fair 6-face die is thrown 2 times. Find the probability that the product of numbers obtained is 18.',
          answer: '$\\dfrac1{18}$',
          principle:
            'Count favourable ordered outcomes among $36$ equally likely ones.',
          solution:
            'Product $18$ with both numbers in $1..6$: $(3,6)$ and $(6,3)$ only ($18=2\\cdot 9$ and $1\\cdot 18$ are not possible). Probability $=\\frac{2}{36}=\\frac1{18}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Amy draws all triangles which perimeter is 26cm and length of sides are integers. How many different types of triangle(s) does she draw? (triangles with sides (4,5,6) and (4,6,5) are regarded as the same type of triangle)',
          answer: '$14$',
          principle:
            'Triangle inequality: the longest side $c$ must satisfy $c<\\frac{\\text{perimeter}}2$.',
          solution:
            'Let $a\\le b\\le c$, $a+b+c=26$. The triangle inequality $a+b>c$ gives $c\\le12$, and $c\\ge 9$ since $3c\\ge 26$. For each $c$ count $(a,b)$ with $a\\le b\\le c$, $a+b=26-c$:\n- $c=12$: $(2,12),(3,11),(4,10),(5,9),(6,8),(7,7)$: $6$\n- $c=11$: $(4,11),(5,10),(6,9),(7,8)$: $4$\n- $c=10$: $(6,10),(7,9),(8,8)$: $3$\n- $c=9$: $(8,9)$: $1$\nTotal $6+4+3+1=14$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            '45 cards are marked from 1 to 45 and 2 are drawn at random. Find the probability that the sum of two cards drawn is multiple of 20.',
          answer: '$\\dfrac{8}{165}$',
          principle:
            'Count unordered pairs with sum in $\\{20,40,60,80\\}$ among $\\binom{45}{2}$.',
          solution:
            'Total pairs $\\binom{45}{2}=990$. The sum lies between $3$ and $89$, so it is $20,40,60$ or $80$. For a pair $a<b$ with $a+b=S$ we need $a<S/2$ and $b=S-a\\le 45$:\n- $S=20$: $1\\le a\\le 9$: $9$ pairs\n- $S=40$: $1\\le a\\le 19$: $19$ pairs\n- $S=60$: $15\\le a\\le 29$: $15$ pairs\n- $S=80$: $35\\le a\\le 39$: $5$ pairs\nTotal $48$. Probability $=\\frac{48}{990}=\\frac{8}{165}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The thousands digit is the largest. The hundreds digit is larger than the tens digit and the units digit is the smallest. If a 4-digit number can be divisible by 5 and 9, then we call it miracle number. How many miracle number(s) do we have in total? (Read strictly: the four digits satisfy $a>b>c>d$ for the number $\\overline{abcd}$.)',
          answer: '$11$',
          principle:
            'Divisibility by $5$ (last digit $0$ or $5$) and by $9$ (digit sum a multiple of $9$), then enumerate digit sets.',
          solution:
            'Let the number be $\\overline{abcd}$ with $a>b>c>d$. Divisible by $5$: $d\\in\\{0,5\\}$. Divisible by $9$: $a+b+c+d\\in\\{9,18,27\\}$.\n- $d=5$: $a,b,c\\in\\{6,7,8,9\\}$ distinct; the sums $a+b+c+5$ are $29,28,27,26$ for $\\{9,8,7\\},\\{9,8,6\\},\\{9,7,6\\},\\{8,7,6\\}$. Only $\\{9,7,6\\}$ gives $27$: the number $9765$.\n- $d=0$: $a+b+c\\in\\{9,18\\}$ ($27$ would need $9,9,9$). Sum $9$: $\\{6,2,1\\},\\{5,3,1\\},\\{4,3,2\\}$ giving $6210,5310,4320$. Sum $18$: $\\{9,8,1\\},\\{9,7,2\\},\\{9,6,3\\},\\{9,5,4\\},\\{8,7,3\\},\\{8,6,4\\},\\{7,6,5\\}$ giving $9810,9720,9630,9540,8730,8640,7650$.\nTotal $1+3+7=11$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 6,
      title: 'Practice 2: Logical Thinking',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 2, Logical Thinking. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Given $A$, $B$ and $C$ are three non-zero digits and the 3-digit numbers formed by these three digits have the following properties:\n- $\\overline{BAC}$ is divisible by 37.\n- $\\overline{BCA}$ is divisible by 5.\n- $\\overline{ABC}$ has an odd number of factors.\n\nFind the 3-digit number $\\overline{CBA}$.',
          answer: '$925$',
          principle:
            'A number has an odd number of factors iff it is a perfect square; a number divisible by $5$ ends in $0$ or $5$.',
          solution:
            '$\\overline{BCA}$ is divisible by $5$ and $A\\ne0$, so $A=5$. Then $\\overline{ABC}=\\overline{5BC}$ is a perfect square between $500$ and $599$: $23^2=529$ and $24^2=576$ (as $22^2=484$, $25^2=625$). So $(B,C)=(2,9)$ or $(7,6)$.\nThen $\\overline{BAC}=259$ or $756$. $259=37\\times 7$ works, while $756=37\\times 20+16$ does not. Hence $A=5,B=2,C=9$ and $\\overline{CBA}=925$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Andy goes west for 15 km, goes north for 31 km, then goes south for 11 km. How far is he now from the original position?',
          answer: '$25\\text{ km}$',
          principle:
            'Combine opposite movements, then apply the Pythagorean theorem.',
          solution:
            'Net movement: $15$ km west and $31-11=20$ km north (perpendicular). Distance $=\\sqrt{15^2+20^2}=\\sqrt{625}=25$ km.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many time(s) does hour hand and minute hand of a clock form $180^\\circ$ angle in 1 day?',
          answer: '$22$',
          principle:
            'In one day the minute hand gains $22$ full turns on the hour hand.',
          solution:
            'In $24$ hours the minute hand makes $24$ turns and the hour hand $2$ turns, so the minute hand gains $22$ full turns on the hour hand. During each full turn of the relative angle, the hands are exactly opposite ($180^\\circ$) once. So the answer is $22$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'If $\\overline{abcd}+\\overline{dcba}=17446$, calculate $a+b+c+d$.',
          answer: '$29$',
          principle:
            'Place values: the sum is $1001(a+d)+110(b+c)$.',
          solution:
            '$1001(a+d)+110(b+c)=11\\big(91(a+d)+10(b+c)\\big)=17446$, so $91(a+d)+10(b+c)=1586$. Modulo $10$: $a+d\\equiv 6$, so $a+d=6$ or $16$. If $a+d=6$ then $10(b+c)=1040$, impossible ($b+c\\le18$). If $a+d=16$ then $10(b+c)=130$, $b+c=13$. Therefore $a+b+c+d=16+13=29$ (e.g. $7499+9947=17446$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'There are 22 problems in a mathematics competition. The scores of each problem are allocated in the following ways, 4 marks will be given for a correct answer, 2 marks will be deducted from a wrong answer and 0 marks will be given for a blank answer. Find the minimum number of candidate(s) to ensure that 3 candidate will have the same scores in the competition.',
          answer: '$133$',
          principle:
            'Count the distinct possible scores, then apply the pigeonhole principle.',
          solution:
            'A candidate with $c$ correct and $w$ wrong answers ($c,w\\ge0$, $c+w\\le22$) scores $4c-2w$. Two pairs give the same score iff $2(c-c\')=w-w\'$, i.e. $(c\',w\')=(c,w)-j(1,2)$. So every score has a representative with $c=0$ or $w\\le1$ (reduce $j$ until one of these holds), and different such representatives give different scores. Count them:\n- $c=0$: $w=0,\\dots,22$: $23$\n- $w=0$, $c\\ge1$: $c=1,\\dots,22$: $22$\n- $w=1$, $c\\ge1$: $c=1,\\dots,21$: $21$\nSo there are $23+22+21=66$ distinct scores. With $2\\times66=132$ candidates each score could occur only twice; with $133$ some score occurs $3$ times. Answer $133$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'There are 8 pairs of white chopsticks, 4 pairs of yellow chopsticks and 2 pairs of brown chopsticks mixed together. Close your eyes. If you want to get each 2 pairs of chopsticks with different colours, at least how many piece(s) of chopstick(s) is / are needed to be taken? (A pair means two chopsticks of the same colour.)',
          answer: '$19$',
          principle:
            'Worst-case (pigeonhole) argument on the number of chopsticks of each colour.',
          solution:
            'There are $16$ white, $8$ yellow, $4$ brown chopsticks. We need two colours each with at least $2$ chopsticks taken. A failing selection has at most one colour with $\\ge2$ chopsticks, so at most $16+1+1=18$ chopsticks (all white, one yellow, one brown), and $18$ can indeed fail. With $19$, failure is impossible. The answer is $19$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 7,
      title: 'Practice 2: Algebra',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 2, Algebra. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the value of $y$ if $|2x+3y-26|+|x-y+7|=0$.',
          answer: '$y=8$',
          principle:
            'A sum of non-negative terms is zero only when each term is zero.',
          solution:
            '$2x+3y=26$ and $x=y-7$. Substituting: $2y-14+3y=26$, $5y=40$, $y=8$ (and $x=1$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Factorize $x^2-y^2+4x+2y+3$.',
          answer: '$(x+y+1)(x-y+3)$',
          principle:
            'Complete the square in both variables and use $p^2-q^2=(p-q)(p+q)$.',
          solution:
            '$x^2+4x+4-(y^2-2y+1)=(x+2)^2-(y-1)^2=(x+2-y+1)(x+2+y-1)=(x-y+3)(x+y+1)$. Constant check: $4-1=3$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many integer solution(s) is/are there for $x$ if $-45\\le 6x+4\\le 26$?',
          answer: '$12$',
          principle:
            'Solve the inequality and count integers.',
          solution:
            '$-49\\le 6x\\le 22$ gives $-8.17\\ldots\\le x\\le 3.67\\ldots$, so $x=-8,-7,\\dots,3$, which is $12$ integers.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Given that $a$ is a negative real number and $a\\neq -1$. If $a+\\dfrac{1}{a+1}=-3$, find the value of $a$.',
          answer: '$a=-2$',
          principle:
            'Clear the denominator and factor the resulting quadratic.',
          solution:
            'Multiply by $a+1\\ne 0$: $a(a+1)+1=-3(a+1)$, so $a^2+4a+4=0$, i.e. $(a+2)^2=0$ and $a=-2$ (which is negative and $\\ne -1$). Check: $-2+\\frac1{-1}=-3$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many negative integral solution(s) is/are there for $(x,y)$ if $5x+8y=-405$?',
          answer: '$10$',
          principle:
            'Linear Diophantine equation with sign restrictions.',
          solution:
            '$5x=-405-8y$ forces $5\\mid 8y$, so $5\\mid y$; write $y=-5k$ with $k\\ge1$. Then $x=-81+8k$, which is negative iff $k\\le10$. So $k=1,\\dots,10$, giving $(x,y)=(-73,-5),\\dots,(-1,-50)$: $10$ solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $a$ is an integer, find the greatest value of $a$ such that $ax^2+7x+5=0$ has real root(s).',
          answer: '$2$',
          principle:
            'Discriminant $\\Delta\\ge0$.',
          solution:
            'For $a\\ne0$: $\\Delta=49-20a\\ge0\\Rightarrow a\\le2.45$. So the integer $a\\le 2$; $a=2$ gives $2x^2+7x+5=(2x+5)(x+1)$ with roots $-\\frac52,-1$, while $a\\ge3$ gives $\\Delta<0$. Greatest $a=2$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 8,
      title: 'Practice 2: Number Theory',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 2, Number Theory. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the remainder when $20209108$ is divided by $13$.',
          answer: '$10$',
          principle:
            '$1001=7\\times11\\times13$, so $10^3\\equiv-1\\pmod{13}$; use an alternating sum of 3-digit blocks.',
          solution:
            '$20209108=20\\cdot10^6+209\\cdot10^3+108\\equiv 20-209+108=-81\\pmod{13}$. Since $-81+91=10$, the remainder is $10$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            '$x$ is a positive integer such that the remainder of $x^2$ divided by $7$ is $4$. If $x>41$, what is the minimal value of $x$?',
          answer: '$44$',
          principle:
            'Squares modulo $7$.',
          solution:
            'For $x\\equiv0,1,\\dots,6\\pmod7$, $x^2\\equiv0,1,4,2,2,4,1$. So $x^2\\equiv4$ iff $x\\equiv2$ or $5\\pmod 7$. After $41$: $42\\equiv0$, $43\\equiv1$, $44\\equiv2$. So $x=44$ ($44^2=1936=7\\times276+4$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Find the last digit of $A$ if $A=1+3+3^2+3^3+\\cdots+3^{2019}$.',
          answer: '$0$',
          principle:
            'The last digits of powers of $3$ repeat with period $4$: $1,3,9,7$.',
          solution:
            'There are $2020$ terms ($k=0,\\dots,2019$), i.e. $505$ complete periods, each with last digits summing to $1+3+9+7=20$. The total of last digits is $505\\times20=10100$, so the last digit of $A$ is $0$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Find the sum of all positive factors of $1955$.',
          answer: '$2592$',
          principle:
            'Sum of divisors is multiplicative: $\\sigma(pqr)=(1+p)(1+q)(1+r)$ for distinct primes.',
          solution:
            '$1955=5\\times391=5\\times17\\times23$. So $\\sigma=(1+5)(1+17)(1+23)=6\\times18\\times24=2592$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'If $(x-7)$ is a factor of polynomial $(5x^2-63x+c)$. Find the value of $c$.',
          answer: '$196$',
          principle:
            'Factor theorem.',
          solution:
            'Put $x=7$: $5\\cdot49-63\\cdot7+c=0\\Rightarrow245-441+c=0\\Rightarrow c=196$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $k^3=357{,}911$, find the value of $k$.',
          answer: '$71$',
          principle:
            'Bound the cube root and use the last digit of a cube.',
          solution:
            '$70^3=343000<357911<512000=80^3$, so $70<k<80$. The cube ends in $1$, which happens only when $k$ ends in $1$. So $k=71$, and $71^3=5041\\times71=357911$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 9,
      title: 'Practice 2: Geometry',
      marks: 5,
      stem: 'HKIMO Secondary 2 Preparation, Practice 2, Geometry. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'In triangle $ABC$, $D$ is a point on $AB$ and $E$ is on the extension of $AC$ (beyond $C$). $DE$ intersects $BC$ at $F$. If $\\dfrac{DE}{EF}=\\dfrac85$ and $\\dfrac{AD}{DB}=\\dfrac34$, find the value of $\\dfrac{AC}{AE}$.',
          answer: '$\\dfrac{21}{41}$',
          principle:
            'Menelaus\' theorem on triangle $ADE$ with the line $BFC$.',
          solution:
            'Take $DE=8$, $EF=5$, so $DF:FE=3:5$. Take $AD=3$, $DB=4$, so $AB:BD=7:4$. Menelaus on triangle $ADE$ with transversal $B,F,C$:\n$$\\frac{AB}{BD}\\cdot\\frac{DF}{FE}\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac74\\cdot\\frac35\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac{EC}{CA}=\\frac{20}{21}.$$\nHence $\\dfrac{AC}{AE}=\\dfrac{21}{21+20}=\\dfrac{21}{41}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'For three points on a coordinate plane $A(-1,8)$, $B(2,5)$ and $C(3,1)$, find the area of the triangle formed by using those three points as vertices.',
          answer: '$\\dfrac92$',
          principle:
            'Shoelace formula.',
          solution:
            '$$\\text{Area}=\\tfrac12\\big|-1(5-1)+2(1-8)+3(8-5)\\big|=\\tfrac12|-4-14+9|=\\tfrac92.$$',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'An interior angle of a regular $n$-sided polygon is $(15n+5)^\\circ$. Find $n$. (The polygon is understood to be regular, as otherwise $n$ is not determined.)',
          answer: '$n=9$',
          principle:
            'Interior angle of a regular $n$-gon is $180^\\circ-\\frac{360^\\circ}n$.',
          solution:
            '$180-\\frac{360}{n}=15n+5\\Rightarrow 15n^2-175n+360=0\\Rightarrow 3n^2-35n+72=0\\Rightarrow(3n-8)(n-9)=0$. The integer root is $n=9$ (a regular nonagon has interior angle $140^\\circ=15\\cdot9+5$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many diagonal(s) does a convex 11-sided polygon have?',
          answer: '$44$',
          principle:
            'A convex $n$-gon has $\\frac{n(n-3)}2$ diagonals.',
          solution:
            '$\\frac{11\\times 8}{2}=44$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The area of a square is $672\\text{ cm}^2$ larger than its inscribed circle. Find side length of the square. (Take $\\pi=\\frac{22}{7}$)',
          answer: '$56\\text{ cm}$',
          principle:
            'The inscribed circle of a square of side $s$ has radius $\\frac s2$.',
          solution:
            '$s^2-\\frac{22}{7}\\cdot\\frac{s^2}{4}=s^2\\left(1-\\frac{11}{14}\\right)=\\frac{3s^2}{14}=672$, so $s^2=3136$ and $s=56$ cm.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 10,
      title: 'Practice 2: Combinatorics',
      marks: 5,
      stem: 'HKIMO Secondary 2 Preparation, Practice 2, Combinatorics. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '2',
          marks: 1,
          prompt:
            '3 identical Mathematics books and 7 identical English books are put on the bookshelf. How many way(s) of arrangement is/are there?',
          answer: '$120$',
          principle:
            'Choose the positions of one kind of book: $\\binom nk$.',
          solution:
            'There are $10$ positions; choosing the $3$ positions of the Mathematics books fixes the arrangement: $\\binom{10}{3}=120$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'A fair 6-face die is thrown 2 times. Find the probability that the product of numbers obtained is 14.',
          answer: '$0$',
          principle:
            'Check which factorisations of $14$ use only numbers from $1$ to $6$.',
          solution:
            '$14=1\\times14=2\\times7$. Neither factorisation uses two numbers between $1$ and $6$ (the factor $7$ or $14$ is not on a die). So there is no favourable outcome and the probability is $0$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Amy draws all triangles which perimeter is 30cm and length of sides are integers. How many different types of triangle(s) does she draw? (triangles with sides (4,5,6) and (4,6,5) are regarded as the same type of triangle)',
          answer: '$19$',
          principle:
            'Triangle inequality: the longest side $c<15$; count by $c$.',
          solution:
            'Let $a\\le b\\le c$, $a+b+c=30$. Then $10\\le c\\le14$ (from $3c\\ge30$ and $a+b>c\\Rightarrow c<15$). For each $c$, count $(a,b)$ with $a\\le b\\le c$, $a+b=30-c$:\n- $c=14$: $a+b=16$ with $b\\le14$: $(2,14),(3,13),(4,12),(5,11),(6,10),(7,9),(8,8)$: $7$\n- $c=13$: $a+b=17$: $(4,13),(5,12),(6,11),(7,10),(8,9)$: $5$\n- $c=12$: $a+b=18$: $(6,12),(7,11),(8,10),(9,9)$: $4$\n- $c=11$: $a+b=19$: $(8,11),(9,10)$: $2$\n- $c=10$: $a+b=20$: $(10,10)$: $1$\nTotal $7+5+4+2+1=19$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            '45 cards are marked from 1 to 45 and 2 are drawn at random. Find the probability that the sum of two cards drawn is multiple of 24.',
          answer: '$\\dfrac{41}{990}$',
          principle:
            'Count unordered pairs with sum in $\\{24,48,72\\}$ among $\\binom{45}2$.',
          solution:
            'Total pairs $\\binom{45}{2}=990$. The sum is between $3$ and $89$, so it is $24,48$ or $72$. For $a<b$, $a+b=S$ needs $a<S/2$ and $S-a\\le45$:\n- $S=24$: $1\\le a\\le11$: $11$ pairs\n- $S=48$: $3\\le a\\le23$: $21$ pairs\n- $S=72$: $27\\le a\\le35$: $9$ pairs\nTotal $41$. Probability $=\\frac{41}{990}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Given $(a,b,c)$ is a set of integers and all of them are greater than 1. Find the number of solution set(s) of $a+b+c=16$. (Ordered triples $(a,b,c)$ are counted.)',
          answer: '$66$',
          principle:
            'Stars and bars after shifting each variable by its lower bound.',
          solution:
            'Put $a\'=a-2$, $b\'=b-2$, $c\'=c-2\\ge0$. Then $a\'+b\'+c\'=10$, which has $\\binom{10+2}{2}=\\binom{12}{2}=66$ non-negative integer solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 11,
      title: 'Practice 3: Logical Thinking',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 3, Logical Thinking. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Given $A$, $B$ and $C$ are three non-zero digits and the 3-digit numbers formed by these three digits have the following properties:\n- $\\overline{ABC}$ is divisible by 5.\n- $\\overline{BCA}$ is divisible by 4.\n- $C<A$.\n\nFind the sum of all possible 3-digit numbers $\\overline{ACB}$. (The digits are not required to be distinct.)',
          answer: '$5895$',
          principle:
            'Divisibility by $5$ depends on the last digit and by $4$ on the last two digits.',
          solution:
            '$\\overline{ABC}$ divisible by $5$ with $C\\ne0$ gives $C=5$. $\\overline{BCA}$ divisible by $4$ means $\\overline{CA}=50+A$ is divisible by $4$, so $50+A\\in\\{52,56\\}$ and $A\\in\\{2,6\\}$. Since $C<A$, $5<A$, so $A=6$. The digit $B$ is unrestricted ($1,\\dots,9$).\nThe numbers $\\overline{ACB}=650+B$ for $B=1,\\dots,9$ sum to $9\\times650+45=5850+45=5895$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Andy goes northwest for 48 km, goes northeast for 48 km, then goes southwest for 28 km. How far is he now from the original position?',
          answer: '$52\\text{ km}$',
          principle:
            'Northwest and northeast are perpendicular; southwest cancels northeast movement.',
          solution:
            'Net: $48-28=20$ km northeast and $48$ km northwest (perpendicular). Distance $=\\sqrt{48^2+20^2}=\\sqrt{2304+400}=\\sqrt{2704}=52$ km.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many time(s) does hour hand and minute hand of a clock form $60^\\circ$ angle in 1 day?',
          answer: '$44$',
          principle:
            'In one day the minute hand gains $22$ full turns on the hour hand; each turn the relative angle passes through $60^\\circ$ and $300^\\circ$ once each.',
          solution:
            'The (signed) angle from the hour hand to the minute hand increases uniformly and completes $24-2=22$ full turns in a day. The hands form a $60^\\circ$ angle when this relative angle equals $60^\\circ$ or $300^\\circ$ (mod $360^\\circ$), which each happen once per turn. So the number of times is $22\\times2=44$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'If $\\overline{abcd}+\\overline{badc}=16643$, calculate $a+b-c-d$.',
          answer: '$2$',
          principle:
            'Place values: the sum is $1100(a+b)+11(c+d)$.',
          solution:
            '$\\overline{abcd}+\\overline{badc}=1100(a+b)+11(c+d)=11\\big(100(a+b)+(c+d)\\big)=16643$, so $100(a+b)+(c+d)=1513$. As $0\\le c+d\\le18$, we need $a+b=15$ and $c+d=13$ (if $a+b=14$ then $c+d=113$, impossible). Hence $a+b-c-d=15-13=2$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'There are 25 problems in a mathematics competition. The scores of each problem are allocated in the following ways, 3 marks will be given for a correct answer, 1 marks will be deducted from a wrong answer and 0 marks will be given for a blank answer. Find the minimum number of candidate(s) to ensure that 3 candidate will have the same scores in the competition.',
          answer: '$197$',
          principle:
            'Count the distinct possible scores, then apply the pigeonhole principle.',
          solution:
            'A candidate with $c$ correct and $w$ wrong answers ($c+w\\le25$) scores $3c-w$. Two pairs $(c,w),(c\',w\')$ give the same score iff $w-w\'=3(c-c\')$, i.e. $(c\',w\')=(c,w)-j(1,3)$. Hence every score has a representative with $c=0$ or $w\\le2$, and distinct such representatives give distinct scores. Count them:\n- $c=0$: $w=0,\\dots,25$: $26$\n- $w=0$, $c\\ge1$: $c=1,\\dots,25$: $25$\n- $w=1$, $c\\ge1$: $c=1,\\dots,24$: $24$\n- $w=2$, $c\\ge1$: $c=1,\\dots,23$: $23$\nThere are $26+25+24+23=98$ distinct scores. With $2\\times98=196$ candidates every score might occur only twice; with $197$ some score occurs at least $3$ times. Answer $197$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'There are 9 pairs of white chopsticks, 4 pairs of yellow chopsticks and 3 pairs of brown chopsticks mixed together. Close your eyes. If you want to get each 3 pairs of chopsticks with different colours, at least how many piece(s) of chopstick(s) is / are needed to be taken? (A pair means two chopsticks of the same colour.)',
          answer: '$28$',
          principle:
            'Worst-case (pigeonhole) argument: a pair of every colour needs at least $2$ chopsticks of each colour.',
          solution:
            'There are $18$ white, $8$ yellow and $6$ brown chopsticks. We need at least $2$ chopsticks of each of the three colours. A failing selection has some colour with at most $1$ chopstick, so it has at most $\\max(8+6,\\ 18+6,\\ 18+8)+1=27$ chopsticks (all white and yellow, plus $1$ brown), and $27$ can fail. With $28$ chopsticks failure is impossible. The answer is $28$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 12,
      title: 'Practice 3: Algebra',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 3, Algebra. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the value of $y$ if $|x+2y-17|+|2x-y-9|=0$.',
          answer: '$y=5$',
          principle:
            'A sum of non-negative terms is zero only when each term is zero.',
          solution:
            '$x+2y=17$ and $2x-y=9$. From the second, $y=2x-9$; then $x+4x-18=17$, $x=7$, $y=5$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Factorize $x^2-y^2-6y-2x-8$.',
          answer: '$(x+y+2)(x-y-4)$',
          principle:
            'Complete squares in $x$ and in $y$, then use the difference of squares.',
          solution:
            '$(x^2-2x+1)-(y^2+6y+9)=(x-1)^2-(y+3)^2=(x-1-y-3)(x-1+y+3)=(x-y-4)(x+y+2)$. Constant check: $1-9=-8$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many integer solution(s) is/are there for $x$ if $-44\\le 3x+4\\le 42$?',
          answer: '$29$',
          principle:
            'Solve the inequality and count integers.',
          solution:
            '$-48\\le3x\\le38$, so $-16\\le x\\le 12.67\\ldots$. The integers are $-16,\\dots,12$: $12-(-16)+1=29$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            '$x^2-8x+1=0$, find the value of $x^4+\\dfrac1{x^4}$.',
          answer: '$3842$',
          principle:
            'Divide by $x$ and repeatedly use $\\left(u+\\frac1u\\right)^2=u^2+\\frac1{u^2}+2$.',
          solution:
            '$x\\ne0$, so $x+\\frac1x=8$. Then $x^2+\\frac1{x^2}=8^2-2=62$ and $x^4+\\frac1{x^4}=62^2-2=3844-2=3842$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many negative integral solution(s) is/are there for $(x,y)$ if $3x+7y=-298$?',
          answer: '$14$',
          principle:
            'Linear Diophantine equation with sign restrictions.',
          solution:
            '$3x=-298-7y$ requires $7y\\equiv-298\\pmod3$, i.e. $y\\equiv2\\pmod 3$ (as $-298\\equiv2$, $7\\equiv1$). Also $x<0$ gives $-298-7y<0$, i.e. $y>-42.6$, and $y<0$. So $y\\in\\{-1,-4,-7,\\dots,-40\\}$, which has $\\frac{40-1}{3}+1=14$ values (e.g. $y=-1\\Rightarrow x=-97$; $y=-40\\Rightarrow x=-6$; $y=-43$ would give $x=1>0$). There are $14$ solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $a$ is an integer, find the number of $a$ such that equation $ax^2+(a+2)x+a+4=0$ has a real root.',
          answer: '$5$',
          principle:
            'Discriminant condition for $a\\ne0$, and check $a=0$ separately (the equation is then linear).',
          solution:
            'If $a=0$: $2x+4=0$ has the real root $x=-2$, so $a=0$ counts. If $a\\ne0$: $\\Delta=(a+2)^2-4a(a+4)=-3a^2-12a+4\\ge0$, i.e. $3a^2+12a-4\\le0$, i.e. $-2-\\frac{4\\sqrt3}{3}\\le a\\le-2+\\frac{4\\sqrt3}{3}$, approximately $-4.31\\le a\\le0.31$. The non-zero integers are $-4,-3,-2,-1$. In total $a\\in\\{-4,-3,-2,-1,0\\}$: $5$ values.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 13,
      title: 'Practice 3: Number Theory',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 3, Number Theory. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the remainder when $20177102$ is divided by $17$.',
          answer: '$6$',
          principle:
            'Long division / subtracting multiples of $17$.',
          solution:
            '$20177102-17\\times1000000=3177102$; $3177102-17\\times186000=15102$; $15102-17\\times888=15102-15096=6$. Since $0\\le6<17$, the remainder is $6$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            '$x$ is a positive integer such that the remainder of $x^2$ divided by $9$ is $4$. If $x>51$, what is the minimal value of $x$?',
          answer: '$52$',
          principle:
            'Squares modulo $9$.',
          solution:
            'Squares of $x\\equiv0,\\dots,8\\pmod9$ are $0,1,4,0,7,7,0,4,1$, so $x^2\\equiv4$ iff $x\\equiv2$ or $7\\pmod9$. The smallest $x>51$: $52=45+7\\equiv7$. So $x=52$ ($52^2=2704=9\\times300+4$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Find the last digit of $A$ if $A=1+7+7^2+7^3+\\cdots+7^{2019}$.',
          answer: '$0$',
          principle:
            'Last digits of powers of $7$ repeat with period $4$: $1,7,9,3$.',
          solution:
            'There are $2020$ terms, i.e. $505$ full periods, each with last digits summing to $1+7+9+3=20$. The total is $505\\times20=10100$, so the last digit is $0$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Find the sum of all positive factors of $6851$.',
          answer: '$8064$',
          principle:
            'Sum of divisors is multiplicative over distinct prime factors.',
          solution:
            '$6851=13\\times527=13\\times17\\times31$. So $\\sigma=(1+13)(1+17)(1+31)=14\\times18\\times32=8064$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'If $(x-4)$ is a factor of polynomial $(7x^2-17x+c)$. Find the value of $c$.',
          answer: '$-44$',
          principle:
            'Factor theorem.',
          solution:
            'Put $x=4$: $7\\cdot16-17\\cdot4+c=0\\Rightarrow112-68+c=0\\Rightarrow c=-44$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $k^3=185{,}193$, find the value of $k$.',
          answer: '$57$',
          principle:
            'Bound the cube root and use the last digit of a cube.',
          solution:
            '$50^3=125000<185193<216000=60^3$, so $50<k<60$. The cube ends in $3$, which happens only when $k$ ends in $7$. So $k=57$; indeed $57^3=3249\\times57=185193$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 14,
      title: 'Practice 3: Geometry',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 3, Geometry. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'In triangle $ABC$, $D$ is a point on $AB$ and $E$ is on the extension of $AC$ (beyond $C$). $DE$ intersects $BC$ at $F$. If $\\dfrac{DE}{EF}=\\dfrac{11}{5}$ and $\\dfrac{AD}{DB}=\\dfrac35$, find the value of $\\dfrac{AC}{AE}$.',
          answer: '$\\dfrac{48}{73}$',
          principle:
            'Menelaus\' theorem on triangle $ADE$ with the line $BFC$.',
          solution:
            'Take $DE=11$, $EF=5$, so $DF:FE=6:5$. Take $AD=3$, $DB=5$, so $AB:BD=8:5$. Menelaus on triangle $ADE$ with transversal $B,F,C$:\n$$\\frac{AB}{BD}\\cdot\\frac{DF}{FE}\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac85\\cdot\\frac65\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac{EC}{CA}=\\frac{25}{48}.$$\nHence $\\dfrac{AC}{AE}=\\dfrac{48}{48+25}=\\dfrac{48}{73}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'For three points on a coordinate plane $A(-2,5)$, $B(1,7)$ and $C(3,-1)$, find the area of the triangle formed by using those three points as vertices.',
          answer: '$14$',
          principle:
            'Shoelace formula.',
          solution:
            '$$\\text{Area}=\\tfrac12\\big|-2(7-(-1))+1(-1-5)+3(5-7)\\big|=\\tfrac12|-16-6-6|=14.$$',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'An iron wire is bent into a circle which radius is $42$. If the wire is now bent into a rectangle, what is the maximum value of area of it? (Take $\\pi=\\frac{22}{7}$)',
          answer: '$4356$',
          principle:
            'For a fixed perimeter the rectangle of greatest area is a square.',
          solution:
            'Wire length $=2\\pi r=2\\cdot\\frac{22}{7}\\cdot42=264$, so the semi-perimeter of the rectangle is $132$. Sides $x$ and $132-x$ give area $x(132-x)=4356-(x-66)^2\\le4356$, with equality for the square of side $66$. Maximum area $=66^2=4356$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'An interior angle of a regular $n$-sided polygon is $(14n+4)^\\circ$. Find $n$. (The polygon is understood to be regular, as otherwise $n$ is not determined.)',
          answer: '$n=10$',
          principle:
            'Interior angle of a regular $n$-gon is $180^\\circ-\\frac{360^\\circ}n$.',
          solution:
            '$180-\\frac{360}n=14n+4\\Rightarrow14n^2-176n+360=0\\Rightarrow7n^2-88n+180=0\\Rightarrow(7n-18)(n-10)=0$. The integer root is $n=10$ (a regular decagon has interior angle $144^\\circ=14\\cdot10+4$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many diagonal(s) does a convex 12-sided polygon have?',
          answer: '$54$',
          principle:
            'A convex $n$-gon has $\\frac{n(n-3)}2$ diagonals.',
          solution:
            '$\\frac{12\\times9}{2}=54$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The area of a square is $344\\text{ cm}^2$ larger than its inscribed circle. Find side length of the square. (Take $\\pi=3.14$)',
          answer: '$40\\text{ cm}$',
          principle:
            'The inscribed circle of a square of side $s$ has radius $\\frac s2$.',
          solution:
            '$s^2-3.14\\cdot\\frac{s^2}{4}=0.215\\,s^2=344$, so $s^2=1600$ and $s=40$ cm.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 15,
      title: 'Practice 3: Combinatorics',
      marks: 5,
      stem: 'HKIMO Secondary 2 Preparation, Practice 3, Combinatorics. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '2',
          marks: 1,
          prompt:
            '6 identical Mathematics books and 4 identical English books are put on the bookshelf. How many way(s) of arrangement is/are there?',
          answer: '$210$',
          principle:
            'Choose the positions of one kind of book: $\\binom nk$.',
          solution:
            'There are $10$ positions; choosing the $4$ positions of the English books fixes the arrangement: $\\binom{10}{4}=210$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'A fair 6-face die is thrown 2 times. Find the probability that the product of numbers obtained is 8.',
          answer: '$\\dfrac1{18}$',
          principle:
            'Count favourable ordered outcomes among $36$.',
          solution:
            '$8=2\\times4$ (also $1\\times8$, not possible). The favourable outcomes are $(2,4)$ and $(4,2)$, so the probability is $\\frac2{36}=\\frac1{18}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Amy draws all triangles which perimeter is 32cm and length of sides are integers. How many different types of triangle(s) does she draw? (triangles with sides (4,5,6) and (4,6,5) are regarded as the same type of triangle)',
          answer: '$21$',
          principle:
            'Triangle inequality: the longest side $c<16$; count by $c$.',
          solution:
            'Let $a\\le b\\le c$, $a+b+c=32$. Then $11\\le c\\le15$. For each $c$ count $(a,b)$ with $a\\le b\\le c$, $a+b=32-c$:\n- $c=15$: $a+b=17$: $(2,15),(3,14),(4,13),(5,12),(6,11),(7,10),(8,9)$: $7$\n- $c=14$: $a+b=18$: $(4,14),(5,13),(6,12),(7,11),(8,10),(9,9)$: $6$\n- $c=13$: $a+b=19$: $(6,13),(7,12),(8,11),(9,10)$: $4$\n- $c=12$: $a+b=20$: $(8,12),(9,11),(10,10)$: $3$\n- $c=11$: $a+b=21$: $(10,11)$: $1$\nTotal $7+6+4+3+1=21$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            '45 cards are marked from 1 to 45 and 2 are drawn at random. Find the probability that the sum of two cards drawn is multiple of 28.',
          answer: '$\\dfrac1{30}$',
          principle:
            'Count unordered pairs with sum in $\\{28,56,84\\}$ among $\\binom{45}2$.',
          solution:
            'Total pairs $990$. The sum is between $3$ and $89$, so it is $28,56$ or $84$. For $a<b$, $a+b=S$ needs $a<S/2$ and $S-a\\le45$:\n- $S=28$: $1\\le a\\le13$: $13$ pairs\n- $S=56$: $11\\le a\\le27$: $17$ pairs\n- $S=84$: $39\\le a\\le41$: $3$ pairs\nTotal $33$. Probability $=\\frac{33}{990}=\\frac1{30}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Given $(a,b,c)$ is a set of integers and all of them are greater than 1. Find the number of solution set(s) of $a+b+c=18$. (Ordered triples $(a,b,c)$ are counted.)',
          answer: '$91$',
          principle:
            'Stars and bars after shifting each variable by its lower bound.',
          solution:
            'Put $a\'=a-2$, $b\'=b-2$, $c\'=c-2\\ge0$. Then $a\'+b\'+c\'=12$, which has $\\binom{14}{2}=91$ non-negative integer solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 16,
      title: 'Practice 4: Logical Thinking',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 4, Logical Thinking. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Diberikan $A$, $B$ dan $C$ tiga digit taknol dan bilangan tiga digit yang dibentuk dengan digit-digit tersebut mempunyai sifat berikut:\n- $\\overline{ABC}$ hanya mempunyai satu faktor prima, yaitu bilangan satu digit.\n- $\\overline{BAC}$ adalah hasil kali $2$ dan bilangan prima tiga digit.\n- $\\overline{BCA}$ adalah bilangan prima.\n\nTentukan bilangan tiga digit $\\overline{CBA}$.',
          answer: '$821$',
          principle:
            'Bilangan dengan satu faktor prima $p$ berbentuk $p^k$; bilangan prima lebih dari $5$ berakhir pada digit $1,3,7,9$.',
          solution:
            'Karena $\\overline{ABC}=p^k$ dengan $p\\in\\{2,3,5,7\\}$ dan tidak memuat digit nol, kemungkinannya: $128,256,512$ (pangkat $2$), $243,729$ (pangkat $3$), $125,625$ (pangkat $5$), $343$ (pangkat $7$).\n$\\overline{BCA}$ prima (lebih dari $5$) sehingga digit satuannya $A\\in\\{1,3,7,9\\}$. Ini menggugurkan $256,512,243,625$ (nilai $A$ berturut-turut $2,5,2,6$, bukan $1,3,7,9$) dan menyisakan $128$ ($A=1$), $125$ ($A=1$), $343$ ($A=3$), $729$ ($A=7$).\n$\\overline{BAC}=2\\times$ prima, jadi genap, sehingga $C$ genap. Ini menggugurkan $125$ ($C=5$), $343$ ($C=3$), $729$ ($C=9$). Tersisa $128$: $A=1$, $B=2$, $C=8$.\nPemeriksaan: $\\overline{BAC}=218=2\\times109$ ($109$ prima), $\\overline{BCA}=281$ prima (tidak habis dibagi $2,3,5,7,11,13$ dan $17^2>281$). Jadi $\\overline{CBA}=821$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Andy goes northwest for 72 km, then goes northeast for 60 km and goes southeast for 27 km. How far is he now from the original position?',
          answer: '$75\\text{ km}$',
          principle:
            'Southeast is opposite to northwest; northwest and northeast are perpendicular.',
          solution:
            'Southeast cancels part of the northwest movement: net $72-27=45$ km northwest and $60$ km northeast (perpendicular). Distance $=\\sqrt{45^2+60^2}=\\sqrt{2025+3600}=\\sqrt{5625}=75$ km.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many time(s) does hour hand and minute hand of a clock form $45^\\circ$ angle in 1 day?',
          answer: '$44$',
          principle:
            'In one day the relative angle makes $22$ full turns; each turn passes through $45^\\circ$ and $315^\\circ$ once each.',
          solution:
            'The signed angle between the hands completes $24-2=22$ full turns per day. The hands form a $45^\\circ$ angle when this angle is $45^\\circ$ or $315^\\circ$ (mod $360^\\circ$), each occurring once per turn. Total $22\\times2=44$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'If $\\overline{abcd}+\\overline{badc}=18887$, calculate $a+b-c-d$.',
          answer: '$0$',
          principle:
            'Place values: the sum is $1100(a+b)+11(c+d)$.',
          solution:
            '$\\overline{abcd}+\\overline{badc}=11\\big(100(a+b)+(c+d)\\big)=18887$, so $100(a+b)+(c+d)=1717$. Since $0\\le c+d\\le18$, $a+b=17$ and $c+d=17$ (otherwise $c+d\\ge117$). So $a+b-c-d=0$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'There are 28 problems in a mathematics competition. The scores of each problem are allocated in the following ways, 4 marks will be given for a correct answer, 3 marks will be deducted from a wrong answer and 0 marks will be given for a blank answer. Find the minimum number of candidate(s) to ensure that 3 candidate will have the same scores in the competition.',
          answer: '$365$',
          principle:
            'Count the distinct possible scores, then apply the pigeonhole principle.',
          solution:
            'A candidate with $c$ correct and $w$ wrong answers ($c+w\\le28$) scores $4c-3w$. Two pairs give the same score iff $4(c-c\')=3(w-w\')$, and as $\\gcd(3,4)=1$ this means $(c\',w\')=(c,w)-j(3,4)$. So every score has a representative with $c\\le2$ or $w\\le3$, and distinct such representatives give distinct scores. Count them:\n- $c=0,1,2$ (any $w\\le28-c$): $29+28+27=84$\n- $w=0,1,2,3$ with $c\\ge3$: $c=3,\\dots,28-w$: $26+25+24+23=98$\nSo there are $84+98=182$ distinct scores. With $2\\times182=364$ candidates each score might occur only twice; with $365$ some score occurs at least $3$ times. Answer $365$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'There are 10 pairs of white chopsticks, 3 pairs of yellow chopsticks and 5 pairs of brown chopsticks mixed together. Close your eyes. If you want to get each 3 pairs of chopsticks with 2 different colours, at least how many piece(s) of chopstick(s) is / are needed to be taken? (A pair means two chopsticks of the same colour.)',
          answer: '$23$',
          principle:
            'Worst-case (pigeonhole) argument on the number of chopsticks of each colour.',
          solution:
            'There are $20$ white, $6$ yellow and $10$ brown chopsticks. We need $3$ complete pairs that use two different colours, so pairs of at least two colours must be available.\n$22$ is not enough: $20$ white, $1$ yellow and $1$ brown contains pairs of white only.\nWith $23$ chopsticks: at most one colour with $\\ge2$ chopsticks would give at most $20+1+1=22$ chopsticks, so at least two colours have a complete pair. The number of complete pairs is at least $\\frac{23-3}{2}=10$, so some colour has $\\ge2$ pairs. Take two pairs of that colour and one pair of another colour that has a pair: $3$ pairs in exactly $2$ colours. The answer is $23$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 17,
      title: 'Practice 4: Algebra',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 4, Algebra. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the value of $y$ if $|3x-y-2|+|2x+3y-27|=0$.',
          answer: '$y=7$',
          principle:
            'A sum of non-negative terms is zero only when each term is zero.',
          solution:
            '$3x-y=2$ and $2x+3y=27$. Then $y=3x-2$, so $2x+9x-6=27$, $x=3$, $y=7$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Factorize $x^2-y^2-8y-6x-7$.',
          answer: '$(x+y+1)(x-y-7)$',
          principle:
            'Complete squares and use the difference of squares.',
          solution:
            '$(x^2-6x+9)-(y^2+8y+16)=(x-3)^2-(y+4)^2=(x-3-y-4)(x-3+y+4)=(x-y-7)(x+y+1)$. Constant check: $9-16=-7$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many integer solution(s) is/are there for $x$ if $-51\\le4x+7\\le63$?',
          answer: '$29$',
          principle:
            'Solve the inequality and count integers.',
          solution:
            '$-58\\le4x\\le56$ gives $-14.5\\le x\\le14$. The integers are $-14,\\dots,14$: $29$ integers.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            '$x^2-3x+1=0$, find the value of $x^3+\\dfrac1{x^3}$.',
          answer: '$18$',
          principle:
            '$u^3+\\frac1{u^3}=\\left(u+\\frac1u\\right)^3-3\\left(u+\\frac1u\\right)$.',
          solution:
            '$x\\ne0$, so $x+\\frac1x=3$. Then $x^3+\\frac1{x^3}=3^3-3\\cdot3=27-9=18$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many negative integral solution(s) is/are there for $(x,y)$ if $4x+7y=-399$?',
          answer: '$14$',
          principle:
            'Linear Diophantine equation with sign restrictions.',
          solution:
            '$4x=-399-7y$ requires $7y\\equiv-399\\pmod4$, i.e. $3y\\equiv1\\pmod 4$, so $y\\equiv3\\pmod4$. Also $x<0$ gives $-399-7y<0$, i.e. $y>-57$, and $y<0$. So $y\\in\\{-1,-5,-9,\\dots,-53\\}$: $\\frac{53-1}{4}+1=14$ values (for $y=-57$ we would get $x=0$, not negative). There are $14$ solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $a$ is an integer, find the number of $a$ such that equation $(a-1)x^2+(a-2)x+a-2=0$ has a real root.',
          answer: '$2$',
          principle:
            'Discriminant condition for $a\\ne1$, and check $a=1$ (linear equation) separately.',
          solution:
            'If $a=1$: $-x-1=0$ has the real root $x=-1$, so $a=1$ counts. If $a\\ne1$: $\\Delta=(a-2)^2-4(a-1)(a-2)=(a-2)(2-3a)\\ge0\\iff\\frac23\\le a\\le2$, so the integer $a=2$ (equation $x^2=0$, root $0$). Total: $a\\in\\{1,2\\}$, i.e. $2$ values.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 18,
      title: 'Practice 4: Number Theory',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 4, Number Theory. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the remainder when $20166102$ is divided by $19$.',
          answer: '$15$',
          principle:
            'Long division / subtracting multiples of $19$.',
          solution:
            '$20166102-19\\times1000000=1166102$; $1166102-19\\times61000=7102$; $7102-19\\times373=7102-7087=15$. Since $0\\le15<19$, the remainder is $15$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            '$x$ is a positive integer such that the remainder of $x^2$ divided by $11$ is $9$. If $x>62$, what is the minimal value of $x$?',
          answer: '$63$',
          principle:
            'Squares modulo $11$.',
          solution:
            'For $x\\equiv0,\\dots,10\\pmod{11}$, $x^2\\equiv0,1,4,9,5,3,3,5,9,4,1$. So $x^2\\equiv9$ iff $x\\equiv3$ or $8\\pmod{11}$. The smallest $x>62$: $63=55+8\\equiv8$. So $x=63$ ($63^2=3969=11\\times360+9$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Find the last digit of $A$ if $A=1+9+9^2+9^3+\\cdots+9^{2019}$.',
          answer: '$0$',
          principle:
            'Powers of $9$ end alternately in $1$ and $9$.',
          solution:
            'The $2020$ terms $9^0,\\dots,9^{2019}$ end alternately in $1,9,1,9,\\dots$, i.e. $1010$ pairs each contributing $1+9=10$ to the sum of last digits. The total is $10100$, so the last digit is $0$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Find the sum of all positive factors of $4{,}123$.',
          answer: '$5120$',
          principle:
            'Sum of divisors is multiplicative over distinct prime factors.',
          solution:
            '$4123=7\\times589=7\\times19\\times31$. So $\\sigma=(1+7)(1+19)(1+31)=8\\times20\\times32=5120$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'If $(x-5)$ is a factor of polynomial $(11x^2-179x+c)$. Find the value of $c$.',
          answer: '$620$',
          principle:
            'Factor theorem.',
          solution:
            'Put $x=5$: $11\\cdot25-179\\cdot5+c=0\\Rightarrow275-895+c=0\\Rightarrow c=620$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $k^3=117{,}649$, find the value of $k$.',
          answer: '$49$',
          principle:
            'Bound the cube root and use the last digit of a cube.',
          solution:
            '$40^3=64000<117649<125000=50^3$, so $40<k<50$. The cube ends in $9$, which happens only when $k$ ends in $9$. So $k=49$; indeed $49^3=2401\\times49=117649$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 19,
      title: 'Practice 4: Geometry',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 4, Geometry. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'In triangle $ABC$, $D$ is a point on $AB$ and $E$ is on the extension of $AC$ (beyond $C$). $DE$ intersects $BC$ at $F$. If $\\dfrac{DE}{EF}=\\dfrac83$ and $\\dfrac{AD}{DB}=\\dfrac23$, find the value of $\\dfrac{AC}{AE}$.',
          answer: '$\\dfrac{25}{34}$',
          principle:
            'Menelaus\' theorem on triangle $ADE$ with the line $BFC$.',
          solution:
            'Take $DE=8$, $EF=3$, so $DF:FE=5:3$. Take $AD=2$, $DB=3$, so $AB:BD=5:3$. Menelaus on triangle $ADE$ with transversal $B,F,C$:\n$$\\frac{AB}{BD}\\cdot\\frac{DF}{FE}\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac53\\cdot\\frac53\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac{EC}{CA}=\\frac{9}{25}.$$\nHence $\\dfrac{AC}{AE}=\\dfrac{25}{25+9}=\\dfrac{25}{34}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'For three points on a coordinate plane $A(-3,1)$, $B(0,4)$ and $C(3,-3)$, find the area of the triangle formed by using those three points as vertices.',
          answer: '$15$',
          principle:
            'Shoelace formula.',
          solution:
            '$$\\text{Area}=\\tfrac12\\big|-3(4-(-3))+0(-3-1)+3(1-4)\\big|=\\tfrac12|-21+0-9|=15.$$',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'An iron wire is bent into a circle which radius is $21$. If the wire is now bent into a equilateral triangle, what is the maximum value of area of it? (Take $\\pi=\\frac{22}{7}$)',
          answer: '$484\\sqrt3$',
          principle:
            'Area of an equilateral triangle of side $s$ is $\\frac{\\sqrt3}{4}s^2$ (the triangle is determined by the wire length).',
          solution:
            'Wire length $=2\\pi r=2\\cdot\\frac{22}{7}\\cdot21=132$, so the equilateral triangle has side $\\frac{132}{3}=44$. Its area is $\\frac{\\sqrt3}{4}\\cdot44^2=\\frac{\\sqrt3}{4}\\cdot1936=484\\sqrt3$. (Using the whole wire gives the only, hence the maximum, area.)',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'An interior angle of a regular $n$-sided polygon is $(10n+6)^\\circ$. Find $n$. (The polygon is understood to be regular, as otherwise $n$ is not determined.)',
          answer: '$n=15$',
          principle:
            'Interior angle of a regular $n$-gon is $180^\\circ-\\frac{360^\\circ}n$.',
          solution:
            '$180-\\frac{360}n=10n+6\\Rightarrow10n^2-174n+360=0\\Rightarrow5n^2-87n+180=0\\Rightarrow(5n-12)(n-15)=0$. The integer root is $n=15$ (interior angle of a regular $15$-gon is $156^\\circ=10\\cdot15+6$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many diagonal(s) does a convex 13-sided polygon have?',
          answer: '$65$',
          principle:
            'A convex $n$-gon has $\\frac{n(n-3)}2$ diagonals.',
          solution:
            '$\\frac{13\\times10}{2}=65$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'The area of a circle is $224\\text{ cm}^2$ larger than its inscribed square. Find side length of the square. (Take $\\pi=\\frac{22}{7}$)',
          answer: '$14\\sqrt2\\text{ cm}$',
          principle:
            'If the circle has radius $r$, the inscribed square has diagonal $2r$, so side $r\\sqrt2$ and area $2r^2$.',
          solution:
            '$\\pi r^2-2r^2=\\left(\\frac{22}{7}-2\\right)r^2=\\frac87r^2=224\\Rightarrow r^2=196\\Rightarrow r=14$. The square\'s diagonal is $2r=28$, so its side is $\\frac{28}{\\sqrt2}=14\\sqrt2$ cm.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 20,
      title: 'Practice 4: Combinatorics',
      marks: 5,
      stem: 'HKIMO Secondary 2 Preparation, Practice 4, Combinatorics. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '2',
          marks: 1,
          prompt:
            '3 identical Mathematics books and 5 identical English books are put on the bookshelf. How many way(s) of arrangement is/are there?',
          answer: '$56$',
          principle:
            'Choose the positions of one kind of book: $\\binom nk$.',
          solution:
            'There are $8$ positions; choosing the $3$ positions of the Mathematics books fixes the arrangement: $\\binom83=56$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'A fair 6-face die is thrown 3 times. Find the probability that the product of numbers obtained is 18.',
          answer: '$\\dfrac1{24}$',
          principle:
            'Count favourable ordered outcomes among $6^3=216$.',
          solution:
            'Multisets of three numbers from $1$ to $6$ with product $18$: $\\{1,3,6\\}$ and $\\{2,3,3\\}$ (others such as $\\{1,2,9\\}$ or $\\{1,1,18\\}$ use numbers above $6$). $\\{1,3,6\\}$ has $3!=6$ orderings and $\\{2,3,3\\}$ has $3$. Favourable outcomes $=9$, probability $=\\frac{9}{216}=\\frac1{24}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Amy draws all triangles which perimeter is 34cm and length of sides are integers. How many different types of triangle(s) does she draw? (triangles with sides (4,5,6) and (4,6,5) are regarded as the same type of triangle)',
          answer: '$24$',
          principle:
            'Triangle inequality: the longest side $c<17$; count by $c$.',
          solution:
            'Let $a\\le b\\le c$, $a+b+c=34$. Then $12\\le c\\le16$. For each $c$ count $(a,b)$ with $a\\le b\\le c$, $a+b=34-c$:\n- $c=16$: $a+b=18$: $(2,16),(3,15),(4,14),(5,13),(6,12),(7,11),(8,10),(9,9)$: $8$\n- $c=15$: $a+b=19$: $(4,15),(5,14),(6,13),(7,12),(8,11),(9,10)$: $6$\n- $c=14$: $a+b=20$: $(6,14),(7,13),(8,12),(9,11),(10,10)$: $5$\n- $c=13$: $a+b=21$: $(8,13),(9,12),(10,11)$: $3$\n- $c=12$: $a+b=22$: $(10,12),(11,11)$: $2$\nTotal $8+6+5+3+2=24$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            '45 cards are marked from 1 to 45 and 2 are drawn at random. Find the probability that the sum of two cards drawn is multiple of 29.',
          answer: '$\\dfrac{16}{495}$',
          principle:
            'Count unordered pairs with sum in $\\{29,58,87\\}$ among $\\binom{45}2$.',
          solution:
            'Total pairs $990$. The sum is between $3$ and $89$, so it is $29,58$ or $87$. For $a<b$, $a+b=S$ needs $a<S/2$ and $S-a\\le45$:\n- $S=29$: $1\\le a\\le14$: $14$ pairs\n- $S=58$: $13\\le a\\le28$: $16$ pairs\n- $S=87$: $42\\le a\\le43$: $2$ pairs\nTotal $32$. Probability $=\\frac{32}{990}=\\frac{16}{495}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Given $(a,b,c)$ is a set of integers and all of them are greater than 1. Find the number of solution set(s) of $a+b+c=20$. (Ordered triples $(a,b,c)$ are counted.)',
          answer: '$120$',
          principle:
            'Stars and bars after shifting each variable by its lower bound.',
          solution:
            'Put $a\'=a-2$, $b\'=b-2$, $c\'=c-2\\ge0$. Then $a\'+b\'+c\'=14$, which has $\\binom{16}{2}=120$ non-negative integer solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 21,
      title: 'Practice 5: Logical Thinking',
      marks: 4,
      stem: 'HKIMO Secondary 2 Preparation, Practice 5, Logical Thinking. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '2',
          marks: 1,
          prompt:
            'Andy goes west for 31 km, then goes north for 18 km and goes east for 7 km. How far is he now from the original position?',
          answer: '$30\\text{ km}$',
          principle:
            'Combine opposite movements, then apply the Pythagorean theorem.',
          solution:
            'Net: $31-7=24$ km west and $18$ km north (perpendicular). Distance $=\\sqrt{24^2+18^2}=\\sqrt{576+324}=\\sqrt{900}=30$ km.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'There are $n$ lines that are not parallel with each other on a plane. There are no 3 lines intersecting at a point. If they intersect 66 times, find $n$.',
          answer: '$n=12$',
          principle:
            'Every pair of lines gives exactly one intersection point, and no point is shared by three lines.',
          solution:
            'Each pair of lines meets in a distinct point, so the number of intersections is $\\binom n2=\\frac{n(n-1)}2=66$. Then $n(n-1)=132=12\\times11$, so $n=12$ (the other root $n=-11$ is rejected).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'There are 20 problems in a mathematics competition. The scores of each problem are allocated in the following ways, 5 marks will be given for a correct answer, 2 marks will be deducted from a wrong answer and 0 marks will be given for a blank answer. Find the minimum number of candidate(s) to ensure that 3 candidate will have the same scores in the competition.',
          answer: '$253$',
          principle:
            'Count the distinct possible scores, then apply the pigeonhole principle.',
          solution:
            'A candidate with $c$ correct and $w$ wrong answers ($c+w\\le20$) scores $5c-2w$. Two pairs give the same score iff $5(c-c\')=2(w-w\')$; as $\\gcd(2,5)=1$ this means $(c\',w\')=(c,w)-j(2,5)$. So every score has a representative with $c\\le1$ or $w\\le4$, and distinct such representatives give distinct scores. Count them:\n- $c=0,1$ (any $w\\le20-c$): $21+20=41$\n- $w=0,1,2,3,4$ with $c\\ge2$: $c=2,\\dots,20-w$: $19+18+17+16+15=85$\nSo there are $41+85=126$ distinct scores. With $2\\times126=252$ candidates each score might occur only twice; with $253$ some score occurs at least $3$ times. Answer $253$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'There are 7 pairs of white chopsticks, 3 pairs of yellow chopsticks and 2 pairs of brown chopsticks mixed together. Close your eyes. If you want to get each 3 pairs of chopsticks with 1 pair is not white, 1 pair is not yellow, and 1 pair is not brown, at least how many piece(s) of chopstick(s) is / are needed to be taken? (A pair means two chopsticks of the same colour.)',
          answer: '$17$',
          principle:
            'Reduce the condition to "the three pairs are not all of one colour", then use a worst-case argument.',
          solution:
            'We need three pairs $p_1,p_2,p_3$ (one of them not white, one not yellow, one not brown, using different pairs).\nIf all three pairs have the same colour $X$, no pair is "not $X$": impossible. If the pairs are not all of the same colour, the condition can be met: with three different colours assign yellow $\\to$ "not white", brown $\\to$ "not yellow", white $\\to$ "not brown"; with colours $X,X,Z$ (third colour $T$) assign $Z\\to$ "not $X$", one $X\\to$ "not $Z$", the other $X\\to$ "not $T$".\nSo we need complete pairs in at least two colours (and at least three pairs in total). There are $14$ white, $6$ yellow, $4$ brown chopsticks. A selection with at most one colour having $\\ge2$ chopsticks has at most $14+1+1=16$ chopsticks, and $16$ can fail. With $17$ chopsticks at least two colours have a complete pair, and there are at least $\\frac{17-3}2=7$ pairs in total, so the condition is satisfied. The answer is $17$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 22,
      title: 'Practice 5: Algebra',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 5, Algebra. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the value of $y$ if $|4x-3y-7|+|x+2y-10|=0$.',
          answer: '$y=3$',
          principle:
            'A sum of non-negative terms is zero only when each term is zero.',
          solution:
            '$4x-3y=7$ and $x+2y=10$. Then $x=10-2y$, so $40-8y-3y=7$, $11y=33$, $y=3$ (and $x=4$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Factorize $4x^2-y^2-8x+4$.',
          answer: '$(2x-y-2)(2x+y-2)$',
          principle:
            'Group $4x^2-8x+4=4(x-1)^2$, then use the difference of squares.',
          solution:
            '$4(x-1)^2-y^2=(2x-2)^2-y^2=(2x-2-y)(2x-2+y)=(2x-y-2)(2x+y-2)$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'How many integer solution(s) is/are there for $x$ if $-63\\le8x+13\\le57$?',
          answer: '$15$',
          principle:
            'Solve the inequality and count integers.',
          solution:
            '$-76\\le8x\\le44$ gives $-9.5\\le x\\le5.5$. The integers are $-9,\\dots,5$: $15$ integers.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Given that $a$ is a negative real number and $a\\neq -2$. If $a+3+\\dfrac{1}{a+2}=-1$, find the value of $a$.',
          answer: '$a=-3$',
          principle:
            'Substitute $t=a+2$ and use $t+\\frac1t=-2\\iff(t+1)^2=0$.',
          solution:
            'Let $t=a+2\\ne0$. Then $t+1+\\frac1t=-1$, so $t+\\frac1t=-2$, $(t+1)^2=0$, $t=-1$ and $a=-3$ (negative, $\\ne-2$). Check: $-3+3+\\frac1{-1}=-1$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many negative integral solution(s) is/are there for $(x,y)$ if $7x+13y=-456$?',
          answer: '$5$',
          principle:
            'Linear Diophantine equation with sign restrictions.',
          solution:
            '$7x=-456-13y$ requires $13y\\equiv-456\\pmod7$. Since $-456\\equiv6$ and $13\\equiv6\\pmod 7$, $6y\\equiv6$, so $y\\equiv1\\pmod7$. Also $x<0$ gives $y>-\\frac{456}{13}=-35.08\\ldots$ and $y<0$. So $y\\in\\{-6,-13,-20,-27,-34\\}$, each giving a negative integer $x$ (e.g. $y=-34\\Rightarrow x=-2$, $y=-6\\Rightarrow x=-54$). There are $5$ solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $x^4+6x^3+bx^2+cx+18$ is divisible by $x^2+5x+6$, find $\\dfrac bc$.',
          answer: '$\\dfrac23$',
          principle:
            'Factor theorem: a polynomial divisible by $(x+2)(x+3)$ vanishes at $x=-2$ and $x=-3$.',
          solution:
            '$x^2+5x+6=(x+2)(x+3)$. Let $P(x)=x^4+6x^3+bx^2+cx+18$.\n$P(-2)=16-48+4b-2c+18=0\\Rightarrow4b-2c=14\\Rightarrow2b-c=7$.\n$P(-3)=81-162+9b-3c+18=0\\Rightarrow9b-3c=63\\Rightarrow3b-c=21$.\nSubtracting: $b=14$, then $c=21$. So $\\frac bc=\\frac{14}{21}=\\frac23$. (Check: $(x^2+5x+6)(x^2+x+3)=x^4+6x^3+14x^2+21x+18$.)',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 23,
      title: 'Practice 5: Number Theory',
      marks: 6,
      stem: 'HKIMO Secondary 2 Preparation, Practice 5, Number Theory. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'Find the remainder when $20155102$ is divided by $23$.',
          answer: '$18$',
          principle:
            'Long division / subtracting multiples of $23$.',
          solution:
            '$20155102-23\\times800000=1755102$; $1755102-23\\times76000=7102$; $7102-23\\times308=7102-7084=18$. Since $0\\le18<23$, the remainder is $18$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            '$x$ is a positive integer such that the remainder of $x^2$ divided by $13$ is $12$. If $x>100$, what is the minimal value of $x$?',
          answer: '$109$',
          principle:
            'Squares modulo $13$.',
          solution:
            '$5^2=25\\equiv12$ and $8^2=64\\equiv12\\pmod{13}$; checking $x\\equiv0,\\dots,12$ shows these are the only residues with $x^2\\equiv12$ (the squares mod $13$ are $0,1,4,9,3,12,10,10,12,3,9,4,1$). So $x\\equiv5$ or $8\\pmod{13}$. Numbers just above $100$: $100\\equiv9$, $101\\equiv10$, $102\\equiv11$, $103\\equiv12$, $104\\equiv0$, $105\\equiv1,\\dots,109\\equiv5$. So $x=109$ ($109^2=11881=13\\times913+12$).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'Find the last digit of $A$ if $A=1+8+8^2+8^3+\\cdots+8^{2019}$.',
          answer: '$5$',
          principle:
            'Last digits of powers of $8$ repeat with period $4$: $1,8,4,2$.',
          solution:
            'There are $2020$ terms, i.e. $505$ full periods, each with last digits summing to $1+8+4+2=15$. The total is $505\\times15=7575$, so the last digit is $5$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Find the sum of all positive factors of $5{,}681$.',
          answer: '$6720$',
          principle:
            'Sum of divisors is multiplicative over distinct prime factors.',
          solution:
            '$5681=13\\times437=13\\times19\\times23$. So $\\sigma=(1+13)(1+19)(1+23)=14\\times20\\times24=6720$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'If $(x-9)$ is a factor of polynomial $(9x^2+69x+c)$. Find the value of $c$.',
          answer: '$-1350$',
          principle:
            'Factor theorem.',
          solution:
            'Put $x=9$: $9\\cdot81+69\\cdot9+c=0\\Rightarrow729+621+c=0\\Rightarrow c=-1350$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'If $k^3=314{,}432$, find the value of $k$.',
          answer: '$68$',
          principle:
            'Bound the cube root and use the last digit of a cube.',
          solution:
            '$60^3=216000<314432<343000=70^3$, so $60<k<70$. The cube ends in $2$, which happens only when $k$ ends in $8$. So $k=68$; indeed $68^3=4624\\times68=314432$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 24,
      title: 'Practice 5: Geometry',
      marks: 5,
      stem: 'HKIMO Secondary 2 Preparation, Practice 5, Geometry. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'In triangle $ABC$, $D$ is a point on $AB$ and $E$ is on the extension of $AC$ (beyond $C$). $DE$ intersects $BC$ at $F$. If $\\dfrac{DE}{EF}=\\dfrac{10}{3}$ and $\\dfrac{AD}{DB}=\\dfrac13$, find the value of $\\dfrac{AC}{AE}$.',
          answer: '$\\dfrac{28}{37}$',
          principle:
            'Menelaus\' theorem on triangle $ADE$ with the line $BFC$.',
          solution:
            'Take $DE=10$, $EF=3$, so $DF:FE=7:3$. Take $AD=1$, $DB=3$, so $AB:BD=4:3$. Menelaus on triangle $ADE$ with transversal $B,F,C$:\n$$\\frac{AB}{BD}\\cdot\\frac{DF}{FE}\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac43\\cdot\\frac73\\cdot\\frac{EC}{CA}=1\\Rightarrow\\frac{EC}{CA}=\\frac{9}{28}.$$\nHence $\\dfrac{AC}{AE}=\\dfrac{28}{28+9}=\\dfrac{28}{37}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'For three points on a coordinate plane $A(1,8)$, $B(2,5)$ and $C(4,-2)$, find the area of the triangle formed by using those three points as vertices.',
          answer: '$\\dfrac12$',
          principle:
            'Shoelace formula.',
          solution:
            '$$\\text{Area}=\\tfrac12\\big|1(5-(-2))+2(-2-8)+4(8-5)\\big|=\\tfrac12|7-20+12|=\\tfrac12.$$',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'An iron wire is bent into a circle which radius is $150$. If the wire is now bent into a equilateral triangle, what is the maximum value of area of it? (Take $\\pi=3.14$)',
          answer: '$24649\\sqrt3$',
          principle:
            'Area of an equilateral triangle of side $s$ is $\\frac{\\sqrt3}4s^2$ (the triangle is determined by the wire length).',
          solution:
            'Wire length $=2\\pi r=2\\times3.14\\times150=942$, so the equilateral triangle has side $\\frac{942}{3}=314$. Its area is $\\frac{\\sqrt3}{4}\\cdot314^2=\\frac{\\sqrt3}{4}\\cdot98596=24649\\sqrt3$. (Using the whole wire gives the only, hence the maximum, area.)',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'An exterior angle of a regular $n$-sided polygon is $(10n)^\\circ$. Find $n$. (The polygon is understood to be regular, as otherwise $n$ is not determined.)',
          answer: '$n=6$',
          principle:
            'Each exterior angle of a regular $n$-gon is $\\frac{360^\\circ}n$.',
          solution:
            '$\\frac{360}{n}=10n\\Rightarrow n^2=36\\Rightarrow n=6$ (positive).',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'How many diagonal(s) does a convex 14-sided polygon have?',
          answer: '$77$',
          principle:
            'A convex $n$-gon has $\\frac{n(n-3)}2$ diagonals.',
          solution:
            '$\\frac{14\\times11}{2}=77$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    },
    {
      no: 25,
      title: 'Practice 5: Combinatorics',
      marks: 5,
      stem: 'HKIMO Secondary 2 Preparation, Practice 5, Combinatorics. Answer each item; every item is worth 1 mark. Item numbers follow the original paper (items that could not be stated unambiguously in text are omitted).',
      parts: [
        {
          label: '2',
          marks: 1,
          prompt:
            '7 identical Mathematics books and 2 identical English books are put on the bookshelf. How many way(s) of arrangement is/are there?',
          answer: '$36$',
          principle:
            'Choose the positions of one kind of book: $\\binom nk$.',
          solution:
            'There are $9$ positions; choosing the $2$ positions of the English books fixes the arrangement: $\\binom92=36$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'A fair 6-face die is thrown 3 times. Find the probability that the product of numbers obtained is 12.',
          answer: '$\\dfrac5{72}$',
          principle:
            'Count favourable ordered outcomes among $6^3=216$.',
          solution:
            'Multisets of three numbers from $1$ to $6$ with product $12$: $\\{1,2,6\\}$, $\\{1,3,4\\}$, $\\{2,2,3\\}$ ($\\{1,1,12\\}$ is impossible). Orderings: $6+6+3=15$. Probability $=\\frac{15}{216}=\\frac5{72}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'Amy draws all triangles which perimeter is 35cm and length of sides are integers. How many different types of triangle(s) does she draw? (triangles with sides (4,5,6) and (4,6,5) are regarded as the same type of triangle)',
          answer: '$30$',
          principle:
            'Triangle inequality: the longest side $c<17.5$; count by $c$.',
          solution:
            'Let $a\\le b\\le c$, $a+b+c=35$. Then $12\\le c\\le17$. For each $c$ count $(a,b)$ with $a\\le b\\le c$, $a+b=35-c$:\n- $c=17$: $a+b=18$: $(1,17),(2,16),\\dots,(9,9)$: $9$\n- $c=16$: $a+b=19$: $(3,16),(4,15),\\dots,(9,10)$: $7$\n- $c=15$: $a+b=20$: $(5,15),(6,14),\\dots,(10,10)$: $6$\n- $c=14$: $a+b=21$: $(7,14),(8,13),(9,12),(10,11)$: $4$\n- $c=13$: $a+b=22$: $(9,13),(10,12),(11,11)$: $3$\n- $c=12$: $a+b=23$: $(11,12)$: $1$\nTotal $9+7+6+4+3+1=30$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            '45 cards are marked from 1 to 45 and 2 are drawn at random. Find the probability that the sum of two cards drawn is multiple of 30.',
          answer: '$\\dfrac{29}{990}$',
          principle:
            'Count unordered pairs with sum in $\\{30,60\\}$ among $\\binom{45}2$.',
          solution:
            'Total pairs $990$. The sum is between $3$ and $89$, so it is $30$ or $60$ ($90$ would need two cards summing to $90$, but the maximum is $44+45=89$). For $a<b$, $a+b=S$ needs $a<S/2$ and $S-a\\le45$:\n- $S=30$: $1\\le a\\le14$: $14$ pairs\n- $S=60$: $15\\le a\\le29$: $15$ pairs\nTotal $29$. Probability $=\\frac{29}{990}$.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        },
        {
          label: '6',
          marks: 1,
          prompt:
            'Given $(a,b,c)$ is a set of integers and all of them are greater than 2. Find the number of solution set(s) of $a+b+c=25$. (Ordered triples $(a,b,c)$ are counted.)',
          answer: '$153$',
          principle:
            'Stars and bars after shifting each variable by its lower bound.',
          solution:
            'Put $a\'=a-3$, $b\'=b-3$, $c\'=c-3\\ge0$. Then $a\'+b\'+c\'=16$, which has $\\binom{18}{2}=153$ non-negative integer solutions.',
          rubric: [{ code: 'A1', text: 'Correct final answer supported by valid working.' }]
        }
      ]
    }
  ]
};
