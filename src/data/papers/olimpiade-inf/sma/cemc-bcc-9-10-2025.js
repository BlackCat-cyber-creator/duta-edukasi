/**
 * Paket Soal Terstruktur: Beaver Computing Challenge (BCC) Grades 9–10 — 2025 (15 official questions & solutions)
 * Sumber: 2025BCCContest9_10.pdf & 2025BCCContestSolutions9_10.pdf (CEMC — University of Waterloo).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Semua 15 ilustrasi/diagram soal diekstrak bersih ke
 * public/papers/cemc-bcc910-2025/fig-<n>.webp.
 */
export default {
  id: 'cemc-bcc910-2025',
  slug: 'cemc-bcc-9-10-2025',
  subject: 'olimpiade-inf',
  grade: 10,
  track: 'olimpiade-sma',
  accessTier: 'free',
  topic:
    'Beaver Computing Challenge (BCC) Grades 9–10 — 2025: official CEMC Waterloo contest questions & solutions',
  relatedChapterIds: [
    'sma10-bab1-eksponen-logaritma',
    'sma10-bab7-statistika',
    'sma10-bab8-peluang'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'BCC',
  title: 'Beaver Computing Challenge (BCC) Grades 9–10 — 2025',
  totalMarks: 90,
  instructions:
    'Attempt all 15 multiple-choice questions (official CEMC contest time: 45 minutes; basic calculators permitted). Under official BCC Grades 9–10 rules, Part A has 5 questions worth 8 marks each (40 marks), Part B has 5 questions worth 6 marks each (30 marks), and Part C has 5 questions worth 4 marks each (20 marks), for a total of 90 marks. Unanswered questions receive 2 marks each up to a maximum of 6 blank questions, and incorrect answers receive 0 marks; this practice set scores correct answers out of 90 marks.',
  source: {
    org: 'CEMC — University of Waterloo',
    file: '2025BCCContest9_10.pdf',
    license:
      'Hak cipta pada penyelenggara (CEMC University of Waterloo); dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Part A: Multiple Choice (8 marks each)',
      marks: 40,
      stem: 'Choose the one correct answer (A, B, C, or D) for each question (Questions 1–5, 8 marks each).',
      parts: [
        {
          label: '1',
          marks: 8,
          prompt:
            '**Scoreboard**\n\nTwo teams are playing baseball. To keep track of their score, each team uses helmets and a row of hooks. The rightmost hook represents a score of $1$ and each other hook represents twice the value of the hook to its right, as shown.\n\nEach hook can have at most one helmet, and the total score for a team is the sum of all the scores on the hooks with helmets. For example, helmets on the $16$ and $4$ hooks represent a score of $16 + 4 = 20$.\n\nThe final scores for the two teams are shown below. What is the difference between the two scores?\n\nA. $11$\nB. $9$\nC. $13$\nD. $7$',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-1.webp',
              alt: 'Top row shows six hooks labeled 32, 16, 8, 4, 2, 1 from left to right; bottom row shows two teams rows of six hooks with blue helmets on one row and orange helmets on the other.',
              caption: 'Hook values (top) and final team helmet placements (bottom).'
            }
          ],
          answer: 'A. $11$',
          principle:
            'Binary place-value representation: hooks from right to left correspond to $1, 2, 4, 8, 16, 32$.',
          solution:
            'From right to left, the six hooks represent $1, 2, 4, 8, 16,$ and $32$.\n- The left team (blue helmets) has helmets on the hooks worth $8, 4,$ and $2$, so its score is\n  $$8 + 4 + 2 = 14.$$\n- The right team (orange helmets) has helmets on the hooks worth $2$ and $1$, so its score is\n  $$2 + 1 = 3.$$\n\nTherefore, the difference between the two scores is\n$$14 - 3 = 11.$$',
          rubric: [
            { code: 'M5', text: 'Reads both binary helmet configurations accurately as $8+4+2=14$ and $2+1=3$.' },
            { code: 'A3', text: 'Subtracts to find $14 - 3 = 11$, option A.' }
          ]
        },
        {
          label: '2',
          marks: 8,
          prompt:
            '**Chung Cake**\n\nBanh Chung is a traditional rice cake dish eaten in Vietnam to celebrate the Lunar New Year. These rice cakes are cut using strings placed on the cake one at a time and in different directions.\n\nIn what order were the four strings placed on the rice cake shown below?\n\nA. $S, P, Q, R$\nB. $Q, S, P, R$\nC. $R, P, S, Q$\nD. $S, P, R, Q$',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-2.webp',
              alt: 'Square green rice cake wrapped with four overlapping strings labeled P, Q, R, and S.',
              caption: 'Four overlapping strings P, Q, R, and S placed across a Banh Chung rice cake.'
            }
          ],
          answer: 'D. $S, P, R, Q$',
          principle:
            'Topological ordering by over/under crossings: a string with no string crossing over it must have been placed last.',
          solution:
            'Inspect the over/under crossings between pairs of strings:\n1. String $Q$ has no other string crossing over it (it lies on top of $P$, $R$, and $S$), so $Q$ was placed **last** ($4$th).\n2. Ignoring $Q$, string $R$ has no remaining string crossing over it (it crosses over $P$ and $S$), so $R$ was placed **third**.\n3. Between $P$ and $S$, string $P$ crosses over $S$, so $P$ was placed **second** and $S$ was placed **first**.\n\nHence the strings were placed in the order $S, P, R, Q$.',
          rubric: [
            { code: 'M5', text: 'Determines the layering order from the crossings ($Q$ on top, then $R$, $P$, and $S$ at the bottom).' },
            { code: 'A3', text: 'Identifies the full placement order $S, P, R, Q$, option D.' }
          ]
        },
        {
          label: '3',
          marks: 8,
          prompt:
            '**A Wrong Step**\n\nAira is walking from her house ($A$) to her friend Bo\'s house ($B$) for the first time. A map of the streets between their houses is shown. All streets go either east/west or north/south.\n\nBo gave Aira the following instructions, where walking *one block* means walking straight until you reach the next street:\n- **Step 1:** Walk two blocks east (E).\n- **Step 2:** Walk three blocks south (S).\n- **Step 3:** Walk three blocks east (E).\n- **Step 4:** Walk one block north (N).\n\nHowever, Aira made a mistake with one of the steps and did not arrive at Bo\'s house. Her route is shown in the second map. Which step did Aira **not** follow correctly?\n\nA. Step 1\nB. Step 2\nC. Step 3\nD. Step 4',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-3.webp',
              alt: 'Top map shows street grid between house A at top left and house B at middle right with compass; bottom map traces Aira actual walking path.',
              caption: 'Street map between houses A and B (top) and Aira actual route (bottom).'
            }
          ],
          answer: 'B. Step 2',
          principle:
            'Trace each segment of the executed path against the specification of each step in the instruction sequence.',
          solution:
            'Trace Aira\'s route starting from house $A$ and counting intersections passed:\n- **Segment 1:** She walks $2$ blocks east (passing one street intersection and stopping at the second), which matches **Step 1**.\n- **Segment 2:** She turns south and walks only $1$ block instead of $3$ blocks south, which **disagrees with Step 2**.\n- **Segment 3:** She walks $3$ blocks east (passing two intermediate streets and stopping at the third), which matches **Step 3**.\n- **Segment 4:** She walks $1$ block north, which matches **Step 4**.\n\nThus, the only step Aira did not follow correctly is Step 2.',
          rubric: [
            { code: 'M5', text: 'Compares each of the four segments on Aira route against Steps 1–4 and spots $1$ block south instead of $3$.' },
            { code: 'A3', text: 'Concludes Step 2 was not followed correctly, option B.' }
          ]
        },
        {
          label: '4',
          marks: 8,
          prompt:
            '**Planes**\n\nSeven planes are lined up in three lanes for take-off using a single shared runway on the left. A plane cannot take off if there is a plane waiting directly in front of it.\n\nThe table shows the take-off schedule, with four planes missing from the schedule:\n- $10:52$: peach plane (`<<`)\n- $10:59$: blue plane (`~`)\n- $11:10$: purple plane (`|||`)\n\nIf all the planes take off as scheduled, which plane takes off at $11:03$?\n\nA. Yellow plane (`+`)\nB. Light-green plane (`#`)\nC. Dark-green plane (`*`)\nD. Light-blue plane (`u`)',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-4.webp',
              alt: 'Three waiting lanes leading to a shared runway on the left, a partial take-off timetable, and four plane options labeled A through D.',
              caption: 'Waiting lanes, partial take-off schedule, and candidate planes (A)–(D).'
            }
          ],
          answer: 'D. Light-blue plane (`u`)',
          principle:
            'Topological scheduling with precedence constraints: every item ahead in a queue must be scheduled strictly earlier than the items behind it.',
          solution:
            'Examine the precedence constraints in each waiting lane:\n1. In the top lane, the light-green plane (`#`) and yellow plane (`+`) are directly ahead of the blue plane (`~`), which takes off at $10:59$. Since only two open slots exist before $10:59$ (namely $10:45$ and $10:55$, because $10:52$ is already assigned to the peach plane `<<`), the light-green plane (`#`) must take off at $10:45$ and the yellow plane (`+`) at $10:55$.\n2. In the bottom lane, the light-blue plane (`u`) is directly ahead of the purple plane (`|||`), which takes off at $11:10$.\n3. The only remaining empty slot earlier than $11:10$ is $11:03$.\n\nTherefore, the light-blue plane (`u`, option D) must take off at $11:03$, leaving $11:16$ for the dark-green plane (`*`).',
          rubric: [
            { code: 'M5', text: 'Fills the pre-10:59 slots ($10:45$ and $10:55$) using the top-lane queue and identifies $11:03$ as the sole open slot before $11:10$.' },
            { code: 'A3', text: 'Deduces the light-blue plane (`u`) takes off at $11:03$, option D.' }
          ]
        },
        {
          label: '5',
          marks: 8,
          prompt:
            '**Favourite Fruit**\n\nApples, bananas, and pears are placed in five baskets so that each basket has eight pieces of fruit.\n\nGiven any two baskets, Blake always prefers the basket with more apples. If two baskets have the same number of apples, then Blake prefers the basket with more bananas.\n\nWhich of the following shows the five baskets ordered from Blake\'s most preferred to least preferred from left to right?\n\nA. Basket sequence A\nB. Basket sequence B\nC. Basket sequence C\nD. Basket sequence D',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-5.webp',
              alt: 'Four candidate rows labeled A through D, each showing five baskets containing apples, bananas, and pears.',
              caption: 'Four candidate orderings (A)–(D) of the five fruit baskets.'
            }
          ],
          answer: 'D. Basket sequence D',
          principle:
            'Lexicographic sorting by primary key (number of apples descending) and secondary key (number of bananas descending).',
          solution:
            'Count the apples and bananas in the five baskets from most preferred to least preferred:\n- **1st:** $5$ apples, $0$ bananas, $3$ pears.\n- **2nd:** $3$ apples, $4$ bananas, $1$ pear.\n- **3rd:** $3$ apples, $2$ bananas, $3$ pears.\n- **4th:** $2$ apples, $4$ bananas, $2$ pears.\n- **5th:** $1$ apple, $3$ bananas, $4$ pears.\n\nCheck each candidate ordering:\n- Options B and C do not place the $5$-apple basket first.\n- Option A swaps the two $3$-apple baskets, placing the $2$-banana basket ahead of the $4$-banana basket.\n- Option D orders the apple counts as $5, 3, 3, 2, 1$ and places $4$ bananas before $2$ bananas among the $3$-apple baskets.\n\nThus, option D is correct.',
          rubric: [
            { code: 'M5', text: 'Applies the two-key lexicographic rule (apples first, then bananas) to check the counts in each row.' },
            { code: 'A3', text: 'Identifies option D as the unique correctly sorted sequence.' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Part B: Multiple Choice (6 marks each)',
      marks: 30,
      stem: 'Choose the one correct answer (A, B, C, or D) for each question (Questions 6–10, 6 marks each).',
      parts: [
        {
          label: '6',
          marks: 6,
          prompt:
            '**Beaver Timber**\n\nEmil\'s friends have each recorded different data about all the tree species in a forest. When Emil has a question while hiking in the forest, he knows he can call these friends to find the answer to his question.\n- **Severin** records the shape of the leaf for each tree species.\n- **Quirina** records the fruit as well as whether or not the tree has cones for each tree species.\n- **Ladina** records each tree species along with the colour of its bark and whether or not its wood is suitable for building a beaver lodge.\n\nEmil has found a leaf. He wants to know if it belongs to a tree species whose wood is suitable for building a beaver lodge. Which of his friends must he call?\n\nA. Only Ladina\nB. Only Severin and Quirina\nC. Only Severin and Ladina\nD. Severin, Quirina and Ladina',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-6.webp',
              alt: 'Three illustrated lookup tables representing data recorded by Severin, Quirina, and Ladina on tree characteristics.',
              caption: 'Data tables recorded by Severin, Quirina, and Ladina.'
            }
          ],
          answer: 'C. Only Severin and Ladina',
          principle:
            'Relational database join: chain tables along a shared foreign key (tree species) to map an input attribute to a target attribute.',
          solution:
            'Emil starts with only the **leaf**, and needs to determine **wood suitability**.\n1. Only **Severin** maps leaf shapes to tree species, so Emil must first call Severin to identify the tree species from the leaf.\n2. Once he knows the tree species, only **Ladina** records whether each tree species\' wood is suitable for building a beaver lodge, so Emil must call Ladina next.\n3. **Quirina**\'s records (fruit and cones) are not needed to bridge leaf shape to wood suitability.\n\nTherefore, Emil must call only Severin and Ladina.',
          rubric: [
            { code: 'M4', text: 'Identifies the join path: leaf $\\to$ tree species (Severin) $\\to$ wood suitability (Ladina).' },
            { code: 'A2', text: 'Selects Only Severin and Ladina, option C.' }
          ]
        },
        {
          label: '7',
          marks: 6,
          prompt:
            '**Beaver Island Broadcast**\n\nThere are $13$ villages on Beaver Island connected by roads, as shown.\n\nMessages are delivered between villages regularly. After a message is sent from one village, it takes one day to reach its immediate neighbours.\n\nIf a village wants to broadcast a message to the entire island, they first send the message to all their immediate neighbours. Then each village who receives the message sends it on to their immediate neighbours the same day. This continues until all villages have received the message.\n\nFor example, if Village $B$ broadcasts a message, it takes $1$ day to reach Villages $A$ and $C$, and $2$ days to reach Villages $D$ and $E$.\n\nIf Village $H$ broadcasts a message, how many days will it take for the message to reach all the villages?\n\nA. $3$\nB. $4$\nC. $5$\nD. $6$',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-7.webp',
              alt: 'Undirected graph of 13 villages labeled A through M connected by black roads on Beaver Island.',
              caption: 'Road network connecting the 13 villages on Beaver Island.'
            }
          ],
          answer: 'B. $4$',
          principle:
            'Breadth-first search (BFS) levels from a source vertex give the minimum number of days needed to reach every vertex.',
          solution:
            'Perform a breadth-first search starting from Village $H$ (day $0$):\n- **Day $1$:** Immediate neighbours of $H$ receive the message: $E, G, I$.\n- **Day $2$:** Unvisited neighbours of $\\{E, G, I\\}$ receive the message: $C$ (from $E$), $F$ (from $G$), $K$ and $L$ (from $I$).\n- **Day $3$:** Unvisited neighbours of $\\{C, F, K, L\\}$ receive the message: $B$ (from $C$), $D$ (from $F$), $J$ (from $F$ and $K$), and $M$ (from $K$ and $L$).\n- **Day $4$:** The remaining village $A$ receives the message from $B$ and $D$.\n\nAll $13$ villages have now received the message, so it takes $4$ days.',
          rubric: [
            { code: 'M4', text: 'Computes the BFS layers from $H$: Day 1 $\\{E,G,I\\}$, Day 2 $\\{C,F,K,L\\}$, Day 3 $\\{B,D,J,M\\}$, Day 4 $\\{A\\}$.' },
            { code: 'A2', text: 'Finds the maximum distance $4$ days, option B.' }
          ]
        },
        {
          label: '8',
          marks: 6,
          prompt:
            '**Sand Painting**\n\nBeavers Andy, Bora, Ciel, and Dona are each making a sand painting. They share eleven numbered jars, each containing a different colour of sand. In the picture, each beaver is holding one of the jars they need for their sand painting, and the clouds above their heads show the other jars they need.\n\nTwo beavers cannot use the same jar at the same time. Also, a beaver cannot start their sand painting until they have all the jars they need. Each beaver waits until all the jars they need are available, then they take them all and do their sand painting. When they are finished they return all their jars so others can use them.\n\nWhich beaver does their sand painting last?\n\nA. Andy\nB. Bora\nC. Ciel\nD. Dona',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-8.webp',
              alt: 'Wooden shelf holding jars 1, 3, 4, 6, 7, 9, 10 above four beavers Andy, Bora, Ciel, and Dona holding jars 2, 8, 5, 11 with thought bubbles showing extra required jars.',
              caption: 'Available jars on the shelf and each beaver held and needed jars.'
            }
          ],
          answer: 'D. Dona',
          principle:
            'Resource-allocation dependency graph: trace which beaver can acquire all required resources first and release held resources for the next beaver.',
          solution:
            'List the jars held and needed by each beaver (jars $1, 3, 4, 6, 7, 9, 10$ are initially on the shelf):\n1. **Andy** holds jar $2$ and needs jars $1$ and $9$. Both $1$ and $9$ are on the shelf, so Andy paints **1st** and then returns jars $1, 2, 9$.\n2. **Ciel** holds jar $5$ and needs jars $2$ and $4$. Once Andy returns jar $2$, Ciel has all needed jars ($2, 4, 5$), so Ciel paints **2nd** and returns jars $2, 4, 5$.\n3. **Bora** holds jar $8$ and needs jars $4, 5,$ and $7$. Once Ciel returns jar $5$ (and $4$), Bora paints **3rd** and returns jars $4, 5, 7, 8$.\n4. **Dona** holds jar $11$ and needs jars $8, 9,$ and $10$. Only after Bora returns jar $8$ can Dona start, so Dona paints **4th (last)**.',
          rubric: [
            { code: 'M4', text: 'Traces the wait-for dependency chain Andy $\\to$ Ciel $\\to$ Bora $\\to$ Dona.' },
            { code: 'A2', text: 'Concludes Dona paints last, option D.' }
          ]
        },
        {
          label: '9',
          marks: 6,
          prompt:
            '**Parking at the Party**\n\nMia\'s friends drive to her house to attend parties. Her driveway can fit nine cars parked in three columns with three cars in each column, one behind the other.\n\nWhen a friend arrives, they park at the front of a column or directly behind another car. A friend cannot leave the party until all the cars behind them in their column have left. For example, in the six-car driveway shown at the top, Car $A$ must have arrived before both Cars $D$ and $F$, and Car $E$ must leave before Car $B$.\n\nFor another party, cars arrive in the order\n$$A, B, C, D, E, F, G, H, I$$\nand leave in the order\n$$G, D, F, I, H, C, B, A, E.$$\n\nWhich of the following could have been how these cars parked in Mia\'s driveway?\n\nA. Driveway layout A\nB. Driveway layout B\nC. Driveway layout C\nD. Driveway layout D',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-9.webp',
              alt: 'Top diagram shows example six-car driveway; bottom row shows four nine-car driveway arrangements labeled A through D.',
              caption: 'Example driveway (top) and four candidate layouts (A)–(D).'
            }
          ],
          answer: 'B. Driveway layout B',
          principle:
            'Stack (LIFO) discipline per column: arrival order increases top-to-bottom, and departure order must appear in reverse (bottom-to-top) within every column.',
          solution:
            'Each column acts as a stack: cars must arrive in top-to-bottom order (alphabetical order) and leave in bottom-to-top order.\n- **Option A** fails arrival order: in the middle column, $D$ is parked behind $F$, even though $D$ arrived before $F$.\n- **Option C** fails departure order: in the middle column, $I$ is behind $H$ behind $D$, which would require $H$ to leave before $D$, whereas $D$ leaves before $H$.\n- **Option D** fails departure order: in the right column, $H$ is behind $G$, which would require $H$ to leave before $G$, whereas $G$ leaves first.\n- **Option B** satisfies both rules:\n  - Left column $[A, B, D]$: alphabetical arrival, and leaves in order $D, B, A$ (valid in $G, D, F, I, H, C, B, A, E$).\n  - Middle column $[C, F, G]$: alphabetical arrival, and leaves in order $G, F, C$ (valid).\n  - Right column $[E, H, I]$: alphabetical arrival, and leaves in order $I, H, E$ (valid).\n\nTherefore, option B is correct.',
          rubric: [
            { code: 'M4', text: 'Checks both top-to-bottom alphabetical arrival and bottom-to-top departure subsequence in every column.' },
            { code: 'A2', text: 'Selects option B and rules out A, C, and D.' }
          ]
        },
        {
          label: '10',
          marks: 6,
          prompt:
            '**Dure**\n\nVillagers follow a Korean agricultural cooperative tradition called *dure*. The villagers need to choose three *dure* farming days per week, according to the following rules:\n1. Each *dure* farming day must have at least four villagers participating.\n2. Each villager must participate in at least one *dure* farming day per week.\n3. No villager can participate in all three *dure* farming days in a week.\n\nIn the table below, each villager has put a checkmark ($\\checkmark$) under the days they are available for *dure*:\n\n| Name | Mon | Tue | Wed | Thu | Fri | Sat | Sun |\n| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n| Ain | $\\checkmark$ | | $\\checkmark$ | | $\\checkmark$ | $\\checkmark$ | |\n| Boa | $\\checkmark$ | $\\checkmark$ | $\\checkmark$ | | | | |\n| Chaewon | | $\\checkmark$ | | | $\\checkmark$ | | |\n| Doyun | | | $\\checkmark$ | $\\checkmark$ | | $\\checkmark$ | |\n| Eunwoo | $\\checkmark$ | | | $\\checkmark$ | | | $\\checkmark$ |\n| Felix | | $\\checkmark$ | | $\\checkmark$ | | $\\checkmark$ | |\n| Gaon | $\\checkmark$ | | $\\checkmark$ | | | | $\\checkmark$ |\n| Hana | | $\\checkmark$ | | | $\\checkmark$ | $\\checkmark$ | |\n\nWhich days should the villagers choose for their *dure* farming days?\n\nA. Monday, Tuesday, Wednesday\nB. Monday, Tuesday, Saturday\nC. Tuesday, Wednesday, Thursday\nD. Tuesday, Wednesday, Saturday',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-10.webp',
              alt: 'Four beavers gardening together with watering cans, carrots, and a shovel on a green lawn.',
              caption: 'Villagers cooperating in a dure farming session.'
            }
          ],
          answer: 'B. Monday, Tuesday, Saturday',
          principle:
            'Constraint satisfaction via domain pruning: eliminate days with fewer than $4$ available villagers, then enforce coverage and upper-bound rules.',
          solution:
            'Count the available villagers for each day:\n- Monday: $4$ (Ain, Boa, Eunwoo, Gaon)\n- Tuesday: $4$ (Boa, Chaewon, Felix, Hana)\n- Wednesday: $4$ (Ain, Boa, Doyun, Gaon)\n- Thursday: $3$ (Doyun, Eunwoo, Felix)\n- Friday: $3$ (Ain, Chaewon, Hana)\n- Saturday: $4$ (Ain, Doyun, Felix, Hana)\n- Sunday: $2$ (Eunwoo, Gaon)\n\nApply the three rules step by step:\n1. By **Rule 1**, Thursday, Friday, and Sunday have fewer than $4$ villagers available, leaving only $\\{\\text{Mon}, \\text{Tue}, \\text{Wed}, \\text{Sat}\\}$.\n2. By **Rule 2**, among those four days, Chaewon is available only on Tuesday and Eunwoo is available only on Monday. Therefore, both **Monday** and **Tuesday** must be chosen.\n3. By **Rule 3**, if Wednesday were chosen as the third day, Boa (whose availability is Mon, Tue, Wed) would have to participate on all three days to keep each day at $4$ villagers, violating Rule 3.\n\nHence the third day must be **Saturday**. Checking $\\{\\text{Mon}, \\text{Tue}, \\text{Sat}\\}$: each day has $4$ villagers, every villager attends $1$ or $2$ days, and no villager attends all $3$.',
          rubric: [
            { code: 'M4', text: 'Eliminates Thu/Fri/Sun by Rule 1, forces Mon and Tue by Rule 2, and eliminates Wed via Boa under Rule 3.' },
            { code: 'A2', text: 'Identifies Monday, Tuesday, Saturday, option B.' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Part C: Multiple Choice (4 marks each)',
      marks: 20,
      stem: 'Choose the one correct answer (A, B, C, or D) for each question (Questions 11–15, 4 marks each).',
      parts: [
        {
          label: '11',
          marks: 4,
          prompt:
            '**Lights**\n\nSofia has $15$ programmable lights of three types (red circles, blue squares, and green pentagons). She numbers them from $1$ to $15$ and connects them in a star shape as shown.\n\nEach **red circle** light ($1$–$5$) is controlled with a switch, and Sofia programs the other lights as follows:\n- Each **blue square** light turns on if the two lower-numbered lights connected to it are **both** on (AND gate).\n- Each **green pentagon** light turns on if **exactly one** of the two lower-numbered lights connected to it is on (XOR gate).\n\nAll the lights are off, and then Sofia turns on lights $1$, $2$, and $4$ at the same time. Which of the five lights closest to the centre (lights $11, 12, 13, 14,$ and $15$) will turn on?\n\nA. Lights $11, 12, 13, 14,$ and $15$\nB. Only lights $12, 13,$ and $15$\nC. Only lights $11, 12, 13,$ and $14$\nD. Only lights $11, 13,$ and $14$',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-11.webp',
              alt: 'Star-shaped logic circuit of 15 numbered nodes: outer red circles 1 to 5, middle ring blue squares and green pentagons 6 to 10, and inner ring 11 to 15.',
              caption: 'Star-shaped circuit of 15 programmable lights.'
            }
          ],
          answer: 'D. Only lights $11, 13,$ and $14$',
          principle:
            'Evaluate a directed acyclic logic circuit (AND and XOR gates) in topological order from inputs $1\\text{–}5$ toward outputs $11\\text{–}15$.',
          solution:
            'Given initial switch states: lights $1, 2, 4$ are **ON**, and lights $3, 5$ are **OFF**.\n\nEvaluate the middle ring ($6$–$10$):\n- Light $6$ (blue square, inputs $1, 2$): both $1$ and $2$ are ON $\\implies$ **$6$ is ON**.\n- Light $7$ (green pentagon, inputs $2, 3$): $2$ is ON, $3$ is OFF $\\implies$ **$7$ is ON**.\n- Light $8$ (green pentagon, inputs $3, 4$): $3$ is OFF, $4$ is ON $\\implies$ **$8$ is ON**.\n- Light $9$ (blue square, inputs $4, 5$): $4$ is ON, $5$ is OFF $\\implies$ **$9$ is OFF**.\n- Light $10$ (green pentagon, inputs $1, 5$): $1$ is ON, $5$ is OFF $\\implies$ **$10$ is ON**.\n\nEvaluate the five inner lights ($11$–$15$):\n- Light $11$ (blue square, inputs $6, 10$): both $6$ and $10$ are ON $\\implies$ **$11$ is ON**.\n- Light $12$ (green pentagon, inputs $6, 7$): both $6$ and $7$ are ON $\\implies$ **$12$ is OFF**.\n- Light $13$ (blue square, inputs $7, 8$): both $7$ and $8$ are ON $\\implies$ **$13$ is ON**.\n- Light $14$ (green pentagon, inputs $8, 9$): $8$ is ON, $9$ is OFF $\\implies$ **$14$ is ON**.\n- Light $15$ (blue square, inputs $9, 10$): $9$ is OFF, $10$ is ON $\\implies$ **$15$ is OFF**.\n\nTherefore, only lights $11, 13,$ and $14$ turn on.',
          rubric: [
            { code: 'M3', text: 'Evaluates nodes $6\\text{–}10$ as $\\{\\text{ON}, \\text{ON}, \\text{ON}, \\text{OFF}, \\text{ON}\\}$ and propagates through nodes $11\\text{–}15$.' },
            { code: 'A1', text: 'Identifies only lights $11, 13,$ and $14$, option D.' }
          ]
        },
        {
          label: '12',
          marks: 4,
          prompt:
            '**Mosaic**\n\nThe $5 \\times 5$ arrangement below uses light purple and dark grey shapes. Each shape has $3$ (triangle), $4$ (square), $5$ (star), or $6$ (hexagon) outer points.\n\nA grumpy beaver did not like the arrangement. So, at two locations it removed the shape and replaced it with a different shape. After doing this, every row and every column had:\n- an odd number of light purple shapes, and\n- an odd number of total outer points.\n\nWhich of the following two new shapes might the beaver have used?\n\nA. Dark grey triangle and dark grey hexagon (option A)\nB. Light purple hexagon and dark grey hexagon (option B)\nC. Light purple star and light purple square (option C)\nD. Light purple star and dark grey triangle (option D)',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-12.webp',
              alt: 'A 5 by 5 grid of light purple and dark grey polygons and stars, followed by four candidate pairs of replacement shapes labeled A through D.',
              caption: 'Original 5x5 mosaic (top) and four candidate replacement pairs (A)–(D).'
            }
          ],
          answer: 'A. Dark grey triangle and dark grey hexagon (option A)',
          principle:
            'Two-dimensional parity error detection (like checksum bits): rows and columns with even counts pinpoint the exact intersection coordinates of the modified cells.',
          solution:
            'Number rows $1\\text{–}5$ from top to bottom and columns $1\\text{–}5$ from left to right, and check both counts (light purple shapes and total outer points) in each row and column:\n- **Row 1:** $2$ light purple shapes (even) and $5+3+6+4+6 = 24$ outer points (even).\n- **Row 5:** $2$ light purple shapes (even) and $3+5+6+5+3 = 22$ outer points (even).\n- **Column 3:** $2$ light purple shapes (even) and $6+3+3+4+6 = 22$ outer points (even).\n- **Column 4:** $2$ light purple shapes (even) and $4+6+5+6+5 = 26$ outer points (even).\n- All other rows ($2, 3, 4$) and columns ($1, 2, 5$) already have odd numbers of light purple shapes and odd total outer points.\n\nBecause two cells were replaced and exactly Rows $1, 5$ and Columns $3, 4$ have parity errors, the two replaced cells must occupy opposite corners of the subgrid $\\{(1,3),(1,4),(5,3),(5,4)\\}$:\n- **Case 1: $(1,4)$ and $(5,3)$.** Both originally hold dark grey shapes with an even number of points ($4$ and $6$). Fixing both parities requires two light purple shapes each with an odd number of points, which matches none of the options.\n- **Case 2: $(1,3)$ and $(5,4)$.** Originally $(1,3)$ is a light purple hexagon ($6$ points, even) and $(5,4)$ is a light purple star ($5$ points, odd). Replacing both with **dark grey** shapes flips the light-purple count in Rows $1, 5$ and Columns $3, 4$ from $2$ to $1$ (odd). To flip both point-sum parities from even to odd, the replacement for $(1,3)$ must have an **odd** number of points ($3$ or $5$) and the replacement for $(5,4)$ must have an **even** number of points ($4$ or $6$).\n\nOption A provides a dark grey triangle ($3$ points) and a dark grey hexagon ($6$ points), matching Case 2.',
          rubric: [
            { code: 'M3', text: 'Identifies parity errors in Rows $1, 5$ and Columns $3, 4$, narrowing the replaced cells to $(1,3),(5,4)$ or $(1,4),(5,3)$.' },
            { code: 'A1', text: 'Determines $(1,3)$ and $(5,4)$ require a dark grey odd-point shape and a dark grey even-point shape, option A.' }
          ]
        },
        {
          label: '13',
          marks: 4,
          prompt:
            '**Third Game**\n\nBeavers Anna and Bento are playing a two-player game called *Third* on a $3 \\times 3$ board using a total of eight pieces. Each piece has three attributes: shape (square or circle), colour (grey or white), and marking (diamond or plain).\n\nPlayers take turns placing a piece on any empty square, **chosen by their opponent** from the pieces not yet on the board. The winner is the first player to place the third piece in a row or column so that all three pieces share the same colour, shape, or marking.\n\nAfter each player has placed two pieces, the board is as shown in the third diagram, and it is now Bento\'s turn. How many of the four candidate pieces shown at the bottom (white diamond square, white plain square, grey diamond circle, grey diamond square) could Anna select for Bento to ensure that Bento **cannot** win the game on his turn?\n\nA. $0$\nB. $1$\nC. $2$\nD. $3$',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-13.webp',
              alt: 'Top shows all eight game pieces; second row shows an example winning move; third row shows the current 3x3 board with four pieces; bottom shows four candidate pieces.',
              caption: 'Game pieces, example win, current board state, and four candidate pieces.'
            }
          ],
          answer: 'B. $1$',
          principle:
            'Check every line with two existing pieces against each candidate piece across all three winning attributes (shape, colour, marking).',
          solution:
            'On this turn, Bento can only complete a line of three in the **top row** (currently holding a grey plain circle and a white plain circle) or the **leftmost column** (currently holding a grey plain circle and a grey plain square).\n- Note that the top row already has two **circles** and two **plain** pieces, while the leftmost column already has two **grey** pieces and two **plain** pieces.\n\nTest each of the four candidate pieces:\n1. **White diamond square:**\n   - Top row becomes $\\{\\text{circle}, \\text{circle}, \\text{square}\\}$, $\\{\\text{grey}, \\text{white}, \\text{white}\\}$, $\\{\\text{plain}, \\text{plain}, \\text{diamond}\\}$: no attribute matches across all three.\n   - Left column becomes $\\{\\text{circle}, \\text{square}, \\text{square}\\}$, $\\{\\text{grey}, \\text{grey}, \\text{white}\\}$, $\\{\\text{plain}, \\text{plain}, \\text{diamond}\\}$: no attribute matches across all three.\n   - So Bento **cannot win**.\n2. **White plain square:** Playing in either the top row or left column gives three **plain** pieces (win).\n3. **Grey diamond circle:** Playing in the top row gives three **circles**, and playing in the left column gives three **grey** pieces (win).\n4. **Grey diamond square:** Playing in the left column gives three **grey** pieces (win).\n\nThus, Anna can select only $1$ of the four pieces to prevent Bento from winning.',
          rubric: [
            { code: 'M3', text: 'Evaluates all four candidate pieces on the two near-complete lines (top row and leftmost column).' },
            { code: 'A1', text: 'Finds only $1$ safe piece (white diamond square), option B.' }
          ]
        },
        {
          label: '14',
          marks: 4,
          prompt:
            '**Describing Sequences**\n\nSarah has a recursive procedure for describing sequences of black and white squares:\n- If all the squares of a sequence are white, she writes `W`.\n- If all the squares of a sequence are black, she writes `B`.\n- Otherwise, she writes `X`, then describes the left half of the sequence, and after that is complete, describes the right half of the sequence.\n\nFour $8$-square examples are shown at the top (`W`, `XWB`, `XXBWB`, `XBXWXBW`). What does Sarah write when using her procedure to describe the sequence at the bottom (`W B W W B B B W`)?\n\nA. `XXXWBWXBXBW`\nB. `XXXWBXWWXXBBXBW`\nC. `XWBWXBBW`\nD. `XXXBWBXWXWB`',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-14.webp',
              alt: 'Four example 8-square black-and-white strips with their codes above a target 8-square strip.',
              caption: 'Four example encodings (top) and the target sequence (bottom).'
            }
          ],
          answer: 'A. `XXXWBWXBXBW`',
          principle:
            'Preorder traversal of a binary split (1D quadtree) compression tree: emit `X` for mixed intervals and recurse left then right.',
          solution:
            'Apply Sarah\'s recursive splitting procedure to the $8$-square sequence `WBWWBBBW`:\n1. Full sequence `WBWWBBBW` is mixed $\\to$ write `X`, then encode left half `WBWW` and right half `BBBW`.\n2. Left half `WBWW` is mixed $\\to$ write `X`, then encode `WB` and `WW`:\n   - `WB` is mixed $\\to$ write `X`, then `W`, then `B` $\\implies$ `XWB`.\n   - `WW` is all white $\\implies$ `W`.\n   - So `WBWW` encodes to `XXWBW`.\n3. Right half `BBBW` is mixed $\\to$ write `X`, then encode `BB` and `BW`:\n   - `BB` is all black $\\implies$ `B`.\n   - `BW` is mixed $\\to$ write `X`, then `B`, then `W` $\\implies$ `XBW`.\n   - So `BBBW` encodes to `XBXBW`.\n\nConcatenating the root `X` with both halves gives `X` + `XXWBW` + `XBXBW` = `XXXWBWXBXBW`.',
          rubric: [
            { code: 'M3', text: 'Correctly encodes the left half `WBWW` as `XXWBW` and the right half `BBBW` as `XBXBW`.' },
            { code: 'A1', text: 'Combines to `XXXWBWXBXBW`, option A.' }
          ]
        },
        {
          label: '15',
          marks: 4,
          prompt:
            '**Public Transport**\n\nMarcus wants to go from his home to the theatre by bus. The map shows Marcus\'s home, the theatre, and four bus lines (Orange, Green, Blue, Pink) with circles representing bus stops.\n\nEach bus departs from the top of the map. The first bus on each of the four lines departs at the same time ($t = 0$). After that, buses depart on each line at the time intervals shown in the squares (Orange every $3$ min, Green every $2$ min, Blue every $4$ min, Pink every $5$ min). Each segment is labeled with its travel time in minutes, and stopping takes $0$ minutes. At any intersection stop, Marcus may transfer to a bus arriving there at the same time or later.\n\nIf Marcus departs his home on the first bus on the orange line, what is the shortest time, in minutes, needed for him to reach the theatre?\n\nA. $18$\nB. $19$\nC. $20$\nD. $21$',
          figures: [
            {
              src: '/papers/cemc-bcc910-2025/fig-15.webp',
              alt: 'Transit map with four colour-coded bus lines between Home at top left and Theatre at bottom right, showing departure intervals and segment travel times.',
              caption: 'Bus network map showing departure intervals, travel times, and bus lines.'
            }
          ],
          answer: 'C. $20$',
          principle:
            'Time-dependent shortest path: compute the arrival times of the first few buses on each line at every stop and propagate the earliest reachable time.',
          solution:
            'Measure time $t$ in minutes from the simultaneous departure of the first buses ($t = 0$):\n- **Orange line** (departs Home every $3$ min; segment times $1, 4, 3$):\n  - 1st bus: Home at $0$, Orange–Green stop at $1$, Orange–Blue stop at $5$, Orange–Pink stop at $8$.\n- **Green line** (departs top stop every $2$ min; segment times $7, 3, 2, 1$):\n  - 1st bus: $0$ (top), $7$ (Green–Blue), $10$ (Green–Pink), $12$ (lower Green–Blue), $13$ (bottom-left).\n  - Subsequent Green buses arrive $2, 4, \\dots$ minutes later.\n- **Blue line** (departs top stop every $4$ min; segment times $2, 1, 8, 6$):\n  - 1st bus: $0$ (top), $2$ (Orange–Blue), $3$ (Green–Blue), $11$ (lower Green–Blue), $17$ (Theatre).\n  - 2nd bus: $4$ (top), $6$ (Orange–Blue), $7$ (Green–Blue), $15$ (lower Green–Blue), $21$ (Theatre).\n- **Pink line** (departs top stop every $5$ min; segment times $1, 5, 9$):\n  - 1st bus: $0$ (top), $1$ (Orange–Pink), $6$ (Green–Pink), $15$ (Theatre).\n  - 2nd bus: $5$ (top), $6$ (Orange–Pink), $11$ (Green–Pink), $20$ (Theatre).\n\nCheck whether Marcus can catch any bus reaching the Theatre earlier than $20$ minutes:\n- The 1st Pink bus (Theatre at $15$) visits Orange–Pink at $t = 1$ and Green–Pink at $t = 6$, but Marcus cannot reach either stop by those times (earliest Orange arrival at Orange–Pink is $8$, and earliest Green bus at Green–Pink is $10$).\n- The 1st Blue bus (Theatre at $17$) visits Orange–Blue at $t = 2$, Green–Blue at $t = 3$, and lower Green–Blue at $t = 11$, all earlier than Marcus can reach them (he reaches Orange–Blue at $5$, and the earliest Green bus reaches lower Green–Blue at $12$).\n\nMarcus **can** catch the 2nd Pink bus (Theatre at $20$):\n1. Take the 1st Orange bus from Home ($t = 0$) to the Orange–Blue stop ($t = 5$).\n2. Wait $1$ minute and board the 2nd Blue bus at $t = 6$, reaching the upper Green–Blue stop at $t = 7$.\n3. Transfer immediately to the 1st Green bus at $t = 7$, reaching the Green–Pink stop at $t = 10$.\n4. Wait $1$ minute and board the 2nd Pink bus at $t = 11$, arriving at the Theatre at $t = 20$ minutes.\n\nTherefore, the shortest possible travel time is $20$ minutes.',
          rubric: [
            { code: 'M3', text: 'Rules out catching the 1st Pink ($15$ min) and 1st Blue ($17$ min) buses and finds the valid $20$-minute multi-transfer path.' },
            { code: 'A1', text: 'Concludes the shortest time is $20$ minutes, option C.' }
          ]
        }
      ]
    }
  ]
};
