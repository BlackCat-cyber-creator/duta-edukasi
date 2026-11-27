/**
 * Paket Soal: Beaver Computing Challenge (BCC) Grades 7–8 — 2025
 * Sumber: Centre for Education in Mathematics and Computing (CEMC), University of Waterloo
 * (2025BCCContest7_8.pdf & 2025BCCContestSolutions7_8.pdf).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Semua 15 soal (Part A Q1–5 @ 8 poin,
 * Part B Q6–10 @ 6 poin, Part C Q11–15 @ 4 poin; total 90 poin) dimuat lengkap beserta 23 gambar resmi ke WebP.
 */
export default {
  id: 'cemc-bcc78-2025',
  slug: 'cemc-bcc-7-8-2025',
  subject: 'olimpiade-inf',
  grade: 8,
  track: 'olimpiade-smp',
  accessTier: 'free',
  topic: 'Beaver Computing Challenge (BCC) Grades 7–8 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'smp8-bab1-bilangan-berpangkat',
    'smp8-bab3-persamaan-pertidaksamaan-linear',
    'smp8-bab4-relasi-fungsi'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'BCC',
  title: 'Beaver Computing Challenge (BCC) Grades 7–8 — 2025',
  totalMarks: 90,
  instructions:
    'Attempt all 15 multiple-choice questions (original time allowed: 45 minutes). Part A (Questions 1–5) is worth 8 marks each (40 marks), Part B (Questions 6–10) is worth 6 marks each (30 marks), and Part C (Questions 11–15) is worth 4 marks each (20 marks), for a total of 90 marks. In the official contest, incorrect answers earn 0 marks, and each unanswered question earns 2 marks up to a maximum of 6 unanswered questions.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025BCCContest7_8.pdf',
    license: 'Hak cipta pada penyelenggara (CEMC University of Waterloo); dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part A',
      marks: 40,
      stem: 'Each correct answer is worth 8 marks (Questions 1–5).',
      parts: [
        {
          label: '1',
          marks: 8,
          prompt:
            '**Merging Cars**\n\nCars waiting to enter Main Street are shown. The cars take turns coming from Spruce Street and Oak Street.\n\nIf the first car comes from Spruce Street, which car will enter Main Street immediately after the purple car (with concentric circles)?\n\nA. Red car (solid black circle)\nB. Cyan car (half-shaded circle)\nC. Blue car (grid square)\nD. Tan car (small black square)',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-1a.webp',
              alt: 'Cars lined up on Spruce Street and Oak Street waiting to merge alternately into Main Street.',
              caption: 'Waiting queues of cars on Spruce St. (top) and Oak St. (bottom) merging into Main St.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-1b.webp',
              alt: 'Target purple car and four multiple-choice car icons labelled A, B, C, and D.',
              caption: 'Target car and answer options (A)–(D).'
            }
          ],
          answer: 'D. Tan car (small black square)',
          principle: 'Alternate turns strictly between the two queues (Spruce, then Oak, repeating) from the front of each lane.',
          solution:
            'List the cars in order from the front of each street (closest to Main Street) to the back:\n- **Spruce Street**: Green (circle), Orange (striped circle), Cyan (half-shaded circle), Purple (concentric circle), Red (solid black circle).\n- **Oak Street**: Grey (half-black square), White (white square), Blue (grid square), Tan (small black square), Yellow (large white square), Pink (solid black square).\n\nTaking turns starting with Spruce Street gives the entry sequence:\n1. Green (Spruce)\n2. Grey (Oak)\n3. Orange (Spruce)\n4. White (Oak)\n5. Cyan (Spruce)\n6. Blue (Oak)\n7. Purple (Spruce)\n8. Tan (Oak)\n\nTherefore, the tan car with the small black square (Option D) enters Main Street immediately after the purple car.',
          rubric: [
            { code: 'M4', text: 'Alternates cars from Spruce St. and Oak St. from front to back starting with Spruce St.' },
            { code: 'A4', text: 'Identifies the tan car immediately after the purple car, option D.' }
          ]
        },
        {
          label: '2',
          marks: 8,
          prompt:
            '**Robot Assembly**\n\nSix animals work on a robot assembly line in order to make toy robots. Each animal has a job attaching certain pieces to certain locations of the robot.\n\nThe diagram shows what a robot is supposed to look like after each animal does its job, what the finished toy robots are supposed to look like, and what they actually look like (with three coloured dots vertically down the left leg instead of across the torso).\n\nWhich animal is not doing their job correctly?\n\nA. Bear (1st animal)\nB. Boar (6th animal)\nC. Monkey (4th animal)\nD. Opossum (5th animal)',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-2a.webp',
              alt: 'Six-animal robot assembly line steps alongside the expected finished robot and the actual defective robot.',
              caption: 'Step-by-step robot assembly sequence, expected robot, and actual robot.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-2b.webp',
              alt: 'Four candidate animal portraits labelled A, B, C, and D.',
              caption: 'Answer options (A)–(D).'
            }
          ],
          answer: 'C. Monkey (4th animal)',
          principle: 'Compare the defective feature on the finished product against each stage of the assembly pipeline to isolate the faulty step.',
          solution:
            'Inspecting the six assembly steps:\n1. **Bear**: attaches the legs.\n2. **Ox**: attaches the torso and arms.\n3. **Kangaroo**: attaches the neck and head.\n4. **Monkey**: attaches the three coloured buttons (orange, blue, green) horizontally across the torso.\n5. **Opossum**: attaches the eyes.\n6. **Boar**: attaches the mouth.\n\nIn the actual finished robot, the legs, torso, arms, neck, head, eyes, and mouth are all in the right places, whereas the three coloured buttons are placed vertically down a leg instead of horizontally across the chest. Attaching the three buttons is the Monkey\'s job (Option C).',
          rubric: [
            { code: 'M4', text: 'Matches the misplaced three coloured buttons to the fourth assembly stage.' },
            { code: 'A4', text: 'Selects the Monkey, option C.' }
          ]
        },
        {
          label: '3',
          marks: 8,
          prompt:
            '**Scoreboard**\n\nTwo teams are playing baseball. To keep track of their score, each team uses helmets and a row of hooks. The rightmost hook represents a score of $1$ and each other hook represents twice the value of the hook to its right, as shown ($32, 16, 8, 4, 2, 1$).\n\nEach hook can have at most one helmet, and the total score for a team is the sum of all the scores on the hooks with helmets. For example, helmets on the $16$ and $4$ hooks represent a score of $16 + 4 = 20$.\n\nThe final scores for the two teams are shown. What is the difference between the two scores?\n\nA. $11$\nB. $9$\nC. $13$\nD. $7$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-3a.webp',
              alt: 'Row of six hooks labelled with powers of two from 32 down to 1, plus an example row showing two helmets.',
              caption: 'Hook place values and an example scoreboard.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-3b.webp',
              alt: 'Two rows of six hooks representing the final scores of the blue-helmet team and the orange-helmet team.',
              caption: 'Final scoreboards for the two teams.'
            }
          ],
          answer: 'A. $11$',
          principle: 'Convert each binary hook pattern using place values $32, 16, 8, 4, 2, 1$ from left to right and subtract.',
          solution:
            'From left to right, the six hooks have values $32, 16, 8, 4, 2, 1$.\n- **First team (blue helmets)**: helmets are on the hooks for $8$, $4$, and $2$, giving a score of\n$$8 + 4 + 2 = 14.$$\n- **Second team (orange helmets)**: helmets are on the hooks for $2$ and $1$, giving a score of\n$$2 + 1 = 3.$$\n\nThe difference between the two scores is\n$$14 - 3 = 11.$$\n(Alternatively, both teams have a helmet on the $2$-hook, which cancels in the difference: $(8 + 4) - 1 = 11$.)',
          rubric: [
            { code: 'M4', text: 'Evaluates both binary helmet rows as $8+4+2=14$ and $2+1=3$.' },
            { code: 'A4', text: 'Computes the difference $14 - 3 = 11$, option A.' }
          ]
        },
        {
          label: '4',
          marks: 8,
          prompt:
            '**Snack Time**\n\nEvery afternoon, Lala eats one of four snacks: apple, pear, cookie, or cheese. She follows two nutritional guidelines:\n1. She never eats cookies two days in a row.\n2. If she eats cheese one day, then the next day she eats either an apple or a pear.\n\nLala is planning the snacks that she will eat on five consecutive days. Which of the following plans matches Lala\'s guidelines?\n\nA. Day 1: Cheese, Day 2: Cheese, Day 3: Apple, Day 4: Pear, Day 5: Cookie\nB. Day 1: Cheese, Day 2: Cookie, Day 3: Apple, Day 4: Cheese, Day 5: Pear\nC. Day 1: Cookie, Day 2: Cheese, Day 3: Apple, Day 4: Cookie, Day 5: Cheese\nD. Day 1: Cheese, Day 2: Apple, Day 3: Cookie, Day 4: Cookie, Day 5: Cheese',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-4.webp',
              alt: 'Four 5-day snack tables labelled A, B, C, and D showing icons for apple, pear, cookie, and cheese.',
              caption: 'Four candidate 5-day snack plans (A)–(D).'
            }
          ],
          answer: 'C. Day 1: Cookie, Day 2: Cheese, Day 3: Apple, Day 4: Cookie, Day 5: Cheese',
          principle: 'Check every consecutive pair of days against both state-transition rules to eliminate invalid plans.',
          solution:
            'Check each plan against the two guidelines:\n- **Plan A**: Day 1 is cheese, so Day 2 must be apple or pear, yet Day 2 is cheese. Violates Guideline 2.\n- **Plan B**: Day 1 is cheese, so Day 2 must be apple or pear, yet Day 2 is cookie. Violates Guideline 2.\n- **Plan C**: Cookies appear on Days 1 and 4 (never two days in a row, satisfying Guideline 1). Cheese on Day 2 is followed by apple on Day 3, and cheese on Day 5 is the final day (satisfying Guideline 2). Valid!\n- **Plan D**: Cookies appear on Days 3 and 4 consecutively. Violates Guideline 1.\n\nThus, only Plan C matches both guidelines.',
          rubric: [
            { code: 'M4', text: 'Tests Plans A, B, and D against the consecutive-cookie and post-cheese rules.' },
            { code: 'A4', text: 'Identifies Plan C as the only valid schedule, option C.' }
          ]
        },
        {
          label: '5',
          marks: 8,
          prompt:
            '**Sewing Buttons**\n\nA programmable machine is used to sew decorative buttons on a blanket. Each hole in the button is assigned a number, and when the machine is sent a sequence of numbers, it sews thread along the holes in the order given in the sequence.\n\nFor example, if the machine receives the sequence `2 1 4 3`, the thread will start at hole $2$, then move to $1$, then $4$, and finish at $3$, as shown.\n\nWhich of the following sequences of numbers can be sent to the machine so that it sews thread as shown in the $6$-hole button?\n\nA. `3 4 2 1 6 5 3`\nB. `5 4 1 2 3 6 5`\nC. `2 3 6 5 1 4 2`\nD. `4 1 2 4 3 6 5`',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-5a.webp',
              alt: 'A 4-hole button with holes 1 to 4 connected by red thread in the order 2-1-4-3.',
              caption: 'Example 4-hole button sewn with sequence 2 1 4 3.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-5b.webp',
              alt: 'A 6-hole button with holes numbered 1 to 6 and red thread segments connecting pairs of holes.',
              caption: 'Target 6-hole button pattern.'
            }
          ],
          answer: 'B. `5 4 1 2 3 6 5`',
          principle: 'Model the sewn segments as edges of a graph and check which sequence forms a valid walk covering exactly those edges.',
          solution:
            'In the $6$-hole button, the red thread segments connect the pairs $(1,2)$, $(1,4)$, $(2,3)$, $(3,6)$, $(4,5)$, and $(5,6)$.\n- **Option A (`3 4 2 1 6 5 3`)**: requires a segment from $3$ to $4$, which is absent.\n- **Option B (`5 4 1 2 3 6 5`)**: traces $5 \\rightarrow 4 \\rightarrow 1 \\rightarrow 2 \\rightarrow 3 \\rightarrow 6 \\rightarrow 5$, covering every shown segment and no others.\n- **Option C (`2 3 6 5 1 4 2`)**: requires a segment from $5$ to $1$, which is absent.\n- **Option D (`4 1 2 4 3 6 5`)**: requires a segment from $2$ to $4$ (absent) and leaves hole $5$ as an endpoint with degree $1$, whereas hole $5$ has two incident segments.\n\nHence, only Option B produces the shown stitching.',
          rubric: [
            { code: 'M4', text: 'Lists the thread edges on the 6-hole button and eliminates sequences using missing edges.' },
            { code: 'A4', text: 'Verifies `5 4 1 2 3 6 5`, option B.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part B',
      marks: 30,
      stem: 'Each correct answer is worth 6 marks (Questions 6–10).',
      parts: [
        {
          label: '6',
          marks: 6,
          prompt:
            '**Elevator**\n\nBiwako and Kai live on different floors of the same apartment building. They each have several boxes being delivered. Biwako\'s boxes are labeled $B$, and Kai\'s boxes are labeled $K$. However the boxes were mixed up and stacked in the elevator as shown.\n\nBiwako and Kai each stay on their own floor. When the elevator arrives on their floor, they take all of their boxes that are on the top of the stack. Then the elevator moves directly to the other person\'s floor. The elevator continues to move back and forth between Biwako and Kai\'s floors until all the boxes have been taken.\n\nThe elevator first stops on Kai\'s floor. In total, how many times does the elevator stop before all the boxes have been taken?\n\nA. $2$\nB. $3$\nC. $5$\nD. $6$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-6.webp',
              alt: 'Elevator cab containing a vertical stack of eight boxes labelled K and B.',
              caption: 'Initial stack of boxes in the elevator.'
            }
          ],
          answer: 'D. $6$',
          principle: 'Simulate popping consecutive matching elements from the top of a LIFO stack, counting each alternating turn.',
          solution:
            'Reading from the top of the stack to the bottom, the initial stack is $[K, B, B, K, B, K, K, B]$.\nTracing each stop:\n1. **Stop 1 (Kai)**: takes $1$ box ($K$). Remaining: $[B, B, K, B, K, K, B]$.\n2. **Stop 2 (Biwako)**: takes $2$ boxes ($B, B$). Remaining: $[K, B, K, K, B]$.\n3. **Stop 3 (Kai)**: takes $1$ box ($K$). Remaining: $[B, K, K, B]$.\n4. **Stop 4 (Biwako)**: takes $1$ box ($B$). Remaining: $[K, K, B]$.\n5. **Stop 5 (Kai)**: takes $2$ boxes ($K, K$). Remaining: $[B]$.\n6. **Stop 6 (Biwako)**: takes $1$ box ($B$). Remaining: empty.\n\nTherefore, the elevator makes $6$ stops in total.',
          rubric: [
            { code: 'M3', text: 'Simulates removing maximal top runs of $K$ and $B$ boxes in alternating turns.' },
            { code: 'A3', text: 'Finds $6$ stops in total, option D.' }
          ]
        },
        {
          label: '7',
          marks: 6,
          prompt:
            '**Beaver Timber**\n\nEmil\'s friends have each recorded different data about all the tree species in a forest. When Emil has a question while hiking in the forest, he knows he can call these friends to find the answer to his question.\n- **Severin** records the shape of the leaf for each tree species.\n- **Quirina** records the fruit as well as whether or not the tree has cones for each tree species.\n- **Ladina** records each tree species along with the colour of its bark and whether or not its wood is suitable for building a beaver lodge.\n\nEmil has found a leaf. He wants to know if it belongs to a tree species whose wood is suitable for building a beaver lodge. Which of his friends must he call?\n\nA. Only Ladina\nB. Only Severin and Quirina\nC. Only Severin and Ladina\nD. Severin, Quirina and Ladina',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-7.webp',
              alt: 'Three illustrated data tables representing the attributes recorded by Severin, Quirina, and Ladina.',
              caption: 'Tree-species tables kept by Severin, Quirina, and Ladina.'
            }
          ],
          answer: 'C. Only Severin and Ladina',
          principle: 'Perform a relational join across tables using the common key (tree species) to connect the given input (leaf shape) to the desired output (wood suitability).',
          solution:
            'Emil starts with a **leaf** (leaf shape) and needs to determine **wood suitability** for building a beaver lodge:\n1. Only **Severin** maps leaf shape $\\rightarrow$ tree species, so Emil must call Severin first to identify the species.\n2. Only **Ladina** maps tree species $\\rightarrow$ wood suitability, so Emil must call Ladina next using the identified species.\n3. **Quirina** only records fruit and cones, which are not needed.\n\nThus, Emil must call only Severin and Ladina (Option C).',
          rubric: [
            { code: 'M3', text: 'Links leaf shape to tree species via Severin and species to wood suitability via Ladina.' },
            { code: 'A3', text: 'Selects Only Severin and Ladina, option C.' }
          ]
        },
        {
          label: '8',
          marks: 6,
          prompt:
            '**T-shirt Sorting**\n\nBaasu works at a t-shirt factory. The t-shirts come in three different patterns: plain, dotted, or striped. For each pattern, there are three different colours: blue, yellow, or green. In total, there are nine different t-shirt choices, as shown.\n\nBaasu has a machine that sorts t-shirts into three different boxes based on his daily instructions. On Tuesday, Baasu wanted the t-shirts to be sorted into Box 1 (dotted yellow, striped yellow), Box 2 (dotted blue, dotted green, striped blue, striped green), and Box 3 (plain blue, plain yellow, plain green), as shown.\n\nWhich of the following instructions would give Baasu the desired result?\n\nA. If the colour is yellow, put it in Box 1. Otherwise, if the pattern is plain, put it in Box 3. Put any other t-shirts in Box 2.\nB. If the pattern is plain, put it in Box 3. Otherwise, if the colour is yellow, put it in Box 1. Put any other t-shirts in Box 2.\nC. If the colour is blue or green, put it in Box 2. Otherwise, if the pattern is plain, put it in Box 3. Put any other t-shirts in Box 1.\nD. If the pattern is not plain and the colour is yellow, put it in Box 1. Otherwise, if the colour is not yellow, put it in Box 2. Put any other t-shirts in Box 3.',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-8a.webp',
              alt: 'Nine t-shirt varieties across three patterns and three colours, with Monday sorting instructions and result.',
              caption: 'The nine t-shirt types and Monday\'s sorting example.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-8b.webp',
              alt: 'Target Tuesday sorting across Box 1, Box 2, and Box 3.',
              caption: 'Tuesday\'s desired t-shirt sorting.'
            }
          ],
          answer: 'B. If the pattern is plain, put it in Box 3. Otherwise, if the colour is yellow, put it in Box 1. Put any other t-shirts in Box 2.',
          principle: 'Evaluate ordered `if / else if / else` branches carefully: earlier conditions take precedence over later ones.',
          solution:
            'Test Tuesday\'s desired partition:\n- **Box 3**: all three **plain** t-shirts (B, Y, G).\n- **Box 1**: the remaining **yellow** t-shirts (dotted Y, striped Y).\n- **Box 2**: all remaining t-shirts (dotted B, dotted G, striped B, striped G).\n\nCheck each option:\n- **Option A**: sends all yellow t-shirts to Box 1 first, putting plain yellow in Box 1 instead of Box 3. Fails.\n- **Option B**: puts all plain t-shirts in Box 3 first; then puts remaining yellow t-shirts (dotted Y, striped Y) in Box 1; and puts the remaining four (dotted/striped blue/green) in Box 2. Matches exactly!\n- **Option C**: sends all blue and green t-shirts to Box 2 first, putting plain blue and plain green in Box 2 instead of Box 3. Fails.\n- **Option D**: sends dotted/striped yellow to Box 1, then sends all non-yellow t-shirts (including plain blue and plain green) to Box 2 instead of Box 3. Fails.',
          rubric: [
            { code: 'M3', text: 'Checks branch order for the plain yellow, plain blue, and plain green edge cases.' },
            { code: 'A3', text: 'Identifies Option B as the exact sorting rule.' }
          ]
        },
        {
          label: '9',
          marks: 6,
          prompt:
            '**Beaver Gates**\n\nGates are placed on two types of platforms:\n- A gate on a **circle platform** (blue) will only open if there are **at least two** beavers standing on the circle platform.\n- A gate on a **square platform** (orange) will only open if there is **at least one** beaver standing on the square platform.\n\nBeavers walk along marked paths until they reach a platform. If the gate doesn\'t open, they wait on the platform. If the gate opens, then all beavers standing on the platform go through the gate and continue walking along the marked paths.\n\nIn which situation will the gate labelled $G$ stay closed?\n\nA. Situation (A): top beaver at a circle gate, bottom beaver at a square gate, merging into square gate $G$\nB. Situation (B): top beaver at a circle gate, bottom beaver at a square gate, merging into circle gate $G$\nC. Situation (C): two beavers at a bottom circle gate and square gate above, merging into circle gate $G$\nD. Situation (D): top beaver at a square gate, bottom beaver at a square gate, merging into circle gate $G$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-9.webp',
              alt: 'Four gate-network situations labelled A, B, C, and D showing beavers, blue circle gates, orange square gates, and final gate G.',
              caption: 'Four gate-network configurations (A)–(D).'
            }
          ],
          answer: 'B. Situation (B): top beaver at a circle gate, bottom beaver at a square gate, merging into circle gate $G$',
          principle: 'Propagate token counts through threshold gates (AND-like threshold $2$ on circles, OR/pass-through threshold $1$ on squares).',
          solution:
            'Trace how many beavers reach gate $G$ in each situation:\n- **Situation (A)**: The top beaver waits on the circle platform (only $1 < 2$). The bottom beaver passes through the square platform ($1 \\ge 1$) and reaches $G$, which is a square platform requiring $\\ge 1$ beaver, so $G$ **opens**.\n- **Situation (B)**: The top beaver waits on the circle platform (only $1 < 2$). The bottom beaver passes through the square platform ($1 \\ge 1$) and reaches $G$. Because $G$ is a circle platform requiring $\\ge 2$ beavers and only $1$ beaver arrives, gate $G$ **stays closed**.\n- **Situation (C)**: Both beavers stand on the bottom circle platform ($2 \\ge 2$), so both pass through and reach circle gate $G$, opening $G$.\n- **Situation (D)**: Each beaver passes through its own square platform ($1 \\ge 1$), so $2$ beavers reach circle gate $G$, opening $G$.\n\nTherefore, gate $G$ stays closed only in Situation (B).',
          rubric: [
            { code: 'M3', text: 'Determines which beavers pass the first layer of circle/square gates in each diagram.' },
            { code: 'A3', text: 'Finds that only 1 beaver reaches circle gate $G$ in Situation (B), option B.' }
          ]
        },
        {
          label: '10',
          marks: 6,
          prompt:
            '**Inner Tubes**\n\nAfter being used on a water slide, inner tubes float in a lazy river and gather in a line as shown (from the downstream end $A, B, C, D, E, F, G, H$ toward the slide).\n\nWhen an inner tube is pulled out of the water for someone\'s next ride, each inner tube behind it floats one position downstream (farther from the slide) to fill the gap. For example, if someone pulls out inner tube $F$, the two inner tubes $G$ and $H$ float one position downstream. If someone pulls out inner tube $A$ after this, then all six remaining inner tubes will float one position downstream, giving $2 + 6 = 8$ total shifts.\n\nEight inner tubes gather as shown. Then five inner tubes are pulled out of the water in the order $B, G, E, D, H$. What is the total number of times that an inner tube floats one position downstream?\n\nA. $10$\nB. $11$\nC. $12$\nD. $13$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-10.webp',
              alt: 'Water slide emptying into a lazy river with eight floating inner tubes labelled H through A in order.',
              caption: 'Initial order of the eight inner tubes in the lazy river.'
            }
          ],
          answer: 'B. $11$',
          principle: 'Track an ordered list after each deletion: removing an item shifts every element behind it forward by one slot.',
          solution:
            'From downstream (front) to upstream (back), the initial line is $A, B, C, D, E, F, G, H$. Track each removal:\n1. Pull out **$B$**: tubes behind $B$ are $C, D, E, F, G, H$ ($6$ tubes shift). New line: $A, C, D, E, F, G, H$.\n2. Pull out **$G$**: tube behind $G$ is $H$ ($1$ tube shifts). New line: $A, C, D, E, F, H$.\n3. Pull out **$E$**: tubes behind $E$ are $F, H$ ($2$ tubes shift). New line: $A, C, D, F, H$.\n4. Pull out **$D$**: tubes behind $D$ are $F, H$ ($2$ tubes shift). New line: $A, C, F, H$.\n5. Pull out **$H$**: no tubes are behind $H$ ($0$ tubes shift). New line: $A, C, F$.\n\nTotal number of single-position shifts:\n$$6 + 1 + 2 + 2 + 0 = 11.$$',
          rubric: [
            { code: 'M3', text: 'Tracks the remaining line after each of the five removals $B, G, E, D, H$.' },
            { code: 'A3', text: 'Sums $6 + 1 + 2 + 2 + 0 = 11$, option B.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part C',
      marks: 20,
      stem: 'Each correct answer is worth 4 marks (Questions 11–15).',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt:
            '**Flower Pots**\n\nA beaver places a row of flower pots by their front door. They hide a key for their friend under one of the pots and then plant one flower in some of the pots so that their friend can find the key using the following instructions:\n\n*"If the total number of flowers is even, the key is hidden in the left half of the pots; otherwise, it is hidden in the right half of the pots. Now consider only the half of the pots where the key is hidden. Repeat these steps until you look at only one pot. That\'s where the key is hidden."*\n\nFor example, with four pots $A, B, C, D$ having flowers in $A$ and $D$, all four pots have $2$ flowers (even $\\rightarrow$ left half $A, B$), and pots $A, B$ have $1$ flower (odd $\\rightarrow$ right half $B$).\n\nIf there are eight pots labelled $A$ to $H$ and the beaver hides the key under pot $C$, which of the following rows of pots would guide their friend to find the key?\n\nA. Row (A): flowers in pots $A, C, D, E, F, H$\nB. Row (B): flowers in pots $A, B, D, E, F, H$\nC. Row (C): flowers in pots $C, F$\nD. Row (D): flowers in pots $D, G$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-11a.webp',
              alt: 'Four-pot binary search example showing flowers in pots A and D narrowing down to pot B.',
              caption: 'Four-pot example locating the key under pot B.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-11b.webp',
              alt: 'Four candidate rows of eight flower pots labelled A through H, each with the key under pot C.',
              caption: 'Candidate 8-pot flower arrangements (A)–(D).'
            }
          ],
          answer: 'A. Row (A): flowers in pots $A, C, D, E, F, H$',
          principle: 'Use parity-encoded binary search: each halving requires a specific even/odd parity in the current subarray.',
          solution:
            'To reach pot $C$ from $A\\text{–}H$ in three halvings, the parities must be:\n1. $A\\text{–}H$ must have an **even** number of flowers (to choose left half $A\\text{–}D$).\n2. $A\\text{–}D$ must have an **odd** number of flowers (to choose right half $C\\text{–}D$).\n3. $C\\text{–}D$ must have an **even** number of flowers (to choose left half $C$).\n\nChecking the four rows:\n- **Row (A)**: $A\\text{–}H$ has $6$ flowers (even $\\rightarrow A\\text{–}D$); $A\\text{–}D$ has $3$ flowers ($A, C, D$: odd $\\rightarrow C\\text{–}D$); $C\\text{–}D$ has $2$ flowers ($C, D$: even $\\rightarrow C$). Guides directly to pot $C$!\n- **Rows (B), (C), (D)**: each has an even total in $A\\text{–}H$ ($6, 2, 2$) and an odd count in $A\\text{–}D$ ($3, 1, 1$), but only $1$ flower in $C\\text{–}D$ (odd $\\rightarrow D$), which wrongly selects pot $D$.',
          rubric: [
            { code: 'M2', text: 'Determines the required parities (even in $A\\text{–}H$, odd in $A\\text{–}D$, even in $C\\text{–}D$) for pot $C$.' },
            { code: 'A2', text: 'Identifies Row (A) as the only arrangement yielding $C$, option A.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            '**Foggy Day**\n\nIt is a very foggy day on Bebrasland and the fog coverage is expanding. The map of Bebrasland is divided into a grid of squares. Some squares contain mountains or houses. The fog starts in certain squares and each hour the fog expands to cover the four neighbouring squares (to the left, right, above, and below), except for any neighbouring squares that contain mountains. When the fog covers a house it can no longer be seen.\n\nFor example, the first diagram shows how the fog expands over $2$ hours.\n\nThe second grid shows the starting positions of the fog in another area of Bebrasland. How many hours will it take for the fog to cover all of the houses in the area?\n\nA. $6$\nB. $7$\nC. $8$\nD. $9$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-12a.webp',
              alt: 'Example 5 by 5 grid showing fog spreading around mountains over Start, After 1 hour, and After 2 hours.',
              caption: 'Example of 2-hour fog expansion.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-12b.webp',
              alt: 'A 7 by 8 grid showing starting fog clouds, impassable mountain squares, and five houses.',
              caption: 'Bebrasland map with starting fog positions.'
            }
          ],
          answer: 'B. $7$',
          principle: 'Run multi-source Breadth-First Search (BFS) from all starting fog squares, treating mountain squares as obstacles.',
          solution:
            'Label each reachable non-mountain square with its shortest distance (in hours) from the nearest starting fog square (rows $1\\text{–}7$ from top, columns $1\\text{–}8$ from left):\n- Starting fog squares (hour $0$): $(1,1)$, $(2,1)$, $(1,8)$, $(7,1)$, $(7,2)$, $(7,3)$.\n- House at $(2,4)$: reached from $(2,1)$ via $(2,2)\\to(2,3)\\to(2,4)$ in $3$ hours.\n- House at $(4,3)$: reached from $(7,3)$ via $(6,3)\\to(5,3)\\to(4,3)$ in $3$ hours.\n- House at $(5,1)$: reached from $(7,2)\\to(6,2)\\to(5,2)\\to(5,1)$ in $3$ hours (blocked below by the mountain at $(6,1)$ and above by the mountain at $(4,1)$).\n- House at $(6,8)$: reached straight down column $8$ from $(1,8)$ in $5$ hours.\n- House at $(4,6)$: blocked above by $(3,6)$, right by $(4,7)$, and further left at $(4,4)$, so the shortest open path from $(1,8)$ runs $(1,8)\\to(1,7)\\to(1,6)\\to(1,5)\\to(2,5)\\to(3,5)\\to(4,5)\\to(4,6)$ in $7$ hours.\n\nSince the cover times of the five houses are $3, 3, 3, 5,$ and $7$ hours, all houses are covered after $7$ hours.',
          rubric: [
            { code: 'M2', text: 'Applies BFS layer by layer around mountain obstacles from the initial fog cells.' },
            { code: 'A2', text: 'Finds that the last house at $(4,6)$ is covered at hour $7$, option B.' }
          ]
        },
        {
          label: '13',
          marks: 4,
          prompt:
            '**Apple Classification**\n\nAt Beaver Orchard, a machine sorts apples into eight weight-based grades, with apples of the same grade sent to the same packaging area. Apples are fed into the top of the machine, move through different chutes, and land in one of eight bins at the bottom. As each apple moves through the machine, it passes weight sensors that determine its path through the chutes: if the weight of an apple is **greater than or equal to** the sensor\'s value, then the apple drops through the **right** chute; otherwise, it drops through the **left** chute.\n\nThe machine has already sorted some apples as shown, and the displays on weight sensors $X$, $Y$, and $Z$ are broken.\n\nWhich of the following are possible values for the weight sensors labelled $X$, $Y$, and $Z$?\n\nA. $X = 10,\\; Y = 5,\\; Z = 18$\nB. $X = 11,\\; Y = 6,\\; Z = 17$\nC. $X = 12,\\; Y = 7,\\; Z = 20$\nD. $X = 13,\\; Y = 8,\\; Z = 19$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-13a.webp',
              alt: 'Binary decision-tree apple sorter with sensors X, Y, 16, 4, 9, 14, Z and eight labelled apple bins.',
              caption: 'Apple-sorting chute tree with unknown sensors X, Y, and Z.'
            }
          ],
          answer: 'C. $X = 12,\\; Y = 7,\\; Z = 20$',
          principle: 'Bound each internal threshold node in a Binary Search Tree by the maximum key in its left subtree and the minimum key in its right subtree.',
          solution:
            'Using the rule (left if $\\text{weight} < \\text{sensor}$, right if $\\text{weight} \\ge \\text{sensor}$):\n- **Sensor $X$**: The heaviest apple going left is $9$, and the lightest apple going right is $12$. Thus $9 < X \\le 12$, so $X \\in \\{10, 11, 12\\}$. This eliminates Option D ($X = 13$).\n- **Sensor $Y$**: The heaviest apple going left is $5$, and the lightest apple going right is $8$. Thus $5 < Y \\le 8$, so $Y \\in \\{6, 7, 8\\}$. This eliminates Option A ($Y = 5$).\n- **Sensor $Z$**: The heaviest apple going left is $18$, and the only apple going right is $20$. Thus $18 < Z \\le 20$, so $Z \\in \\{19, 20\\}$. This eliminates Option B ($Z = 17$).\n\nOnly Option C ($X = 12, Y = 7, Z = 20$) satisfies all three inequalities.',
          rubric: [
            { code: 'M2', text: 'Establishes the valid integer intervals $10 \\le X \\le 12$, $6 \\le Y \\le 8$, and $19 \\le Z \\le 20$.' },
            { code: 'A2', text: 'Eliminates A, B, D and selects Option C.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt:
            '**Masked Coordinates**\n\nGemma draws each of the digits $0$ through $9$ on separate $5 \\times 3$ grids as shown. Gemma then invents a way to represent two-digit numbers. She combines the grids for each of the digits in a two-digit number into one new $5 \\times 3$ grid following this rule:\n\n*A square in the new grid is black when exactly one of the two corresponding squares in the original grids is black. Otherwise the square is white.*\n\nFor example, Gemma\'s representation of her favourite two-digit number, $42$, is shown.\n\nGemma represented a different two-digit number in the same way and produced the $5 \\times 3$ grid shown below. Which of the following two-digit numbers could Gemma have represented?\n\nA. $20$\nB. $35$\nC. $59$\nD. $62$',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-14a.webp',
              alt: 'Five-by-three pixel templates for digits 0 through 9 and an example combining 4 and 2.',
              caption: 'Digit templates 0–9 and the XOR combination rule illustrated for 42.'
            },
            {
              src: '/papers/cemc-bcc78-2025/fig-14b.webp',
              alt: 'Target 5 by 3 black-and-white grid produced by combining two unknown digits.',
              caption: 'Target 5 by 3 combined grid.'
            }
          ],
          answer: 'D. $62$',
          principle: 'Apply bitwise XOR cell-by-cell (`black` iff the two input cells differ) and filter candidates using invariant columns.',
          solution:
            'In the target $5 \\times 3$ grid, **every square in the rightmost column is black**. Under the exclusive-OR (XOR) rule, this requires the two digits to differ in all five cells of their rightmost column:\n- **For $20$**: both $2$ and $0$ have a **white** top-right square, so the combined top-right square would be white. Eliminates A.\n- **For $35$ and $59$**: digits $3$, $5$, and $9$ all have a **white** bottom-right square, so the combined bottom-right square would be white. Eliminates B and C.\n- **For $62$**: digit $6$ has rightmost column `(B, W, W, B, W)` while digit $2$ has `(W, B, B, W, B)`, which differ in every row, and combining all $15$ cells of $6$ and $2$ reproduces the exact target grid.\n\nThus, Gemma could have represented $62$ (Option D).',
          rubric: [
            { code: 'M2', text: 'Uses the all-black rightmost column under XOR to rule out $20$, $35$, and $59$.' },
            { code: 'A2', text: 'Verifies $62$ matches the full $5 \\times 3$ grid, option D.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            '**Sand Painting**\n\nBeavers Andy, Bora, Ciel, and Dona are each making a sand painting. They share eleven numbered jars, each containing a different colour of sand. In the picture, each beaver is holding one of the jars they need for their sand painting, and the clouds above their heads show the other jars they need.\n\nTwo beavers cannot use the same jar at the same time. Also a beaver cannot start their sand painting until they have all the jars they need. Each beaver waits until all the jars they need are available, then they take them all and do their sand painting. When they are finished they return all their jars so others can use them.\n\nWhich beaver does their sand painting last?\n\nA. Andy\nB. Bora\nC. Ciel\nD. Dona',
          figures: [
            {
              src: '/papers/cemc-bcc78-2025/fig-15.webp',
              alt: 'A shelf holding jars 1, 3, 4, 6, 7, 9, 10 above four beavers Andy, Bora, Ciel, and Dona holding jars 2, 8, 5, and 11 with thought bubbles of additional needed jars.',
              caption: 'Available jars on the shelf and each beaver\'s held and needed jars.'
            }
          ],
          answer: 'D. Dona',
          principle: 'Resolve resource-allocation dependencies (topological order without deadlock) by releasing held resources once a task completes.',
          solution:
            'Initially, the shelf holds available jars $\\{1, 3, 4, 6, 7, 9, 10\\}$, while the four beavers hold:\n- **Andy** holds jar $2$ and still needs $\\{1, 9\\}$.\n- **Bora** holds jar $8$ and still needs $\\{4, 5, 7\\}$.\n- **Ciel** holds jar $5$ and still needs $\\{2, 4\\}$.\n- **Dona** holds jar $11$ and still needs $\\{8, 9, 10\\}$.\n\nTracing the completion order:\n1. **Andy** needs $\\{1, 9\\}$, both on the shelf, so Andy goes **1st** and returns $\\{1, 2, 9\\}$.\n2. **Ciel** needs $\\{2, 4\\}$; jar $4$ is on the shelf and jar $2$ is now free, so Ciel goes **2nd** and returns $\\{2, 4, 5\\}$.\n3. **Bora** needs $\\{4, 5, 7\\}$; jars $4, 7$ are on the shelf and jar $5$ is now free, so Bora goes **3rd** and returns $\\{4, 5, 7, 8\\}$.\n4. **Dona** needs $\\{8, 9, 10\\}$; jars $9, 10$ are on the shelf and jar $8$ is finally free, so Dona goes **4th (last)**.\n\nTherefore, Dona does her sand painting last (Option D).',
          rubric: [
            { code: 'M2', text: 'Finds the dependency chain Andy $\\rightarrow$ Ciel $\\rightarrow$ Bora $\\rightarrow$ Dona.' },
            { code: 'A2', text: 'Concludes Dona finishes last, option D.' }
          ]
        }
      ]
    }
  ]
};
