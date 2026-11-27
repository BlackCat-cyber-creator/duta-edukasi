/**
 * Paket Soal: IMSO 17th — Science Theory I (Primary / SD)
 * Sumber: IMSO 17th Science Theory 1.pdf (IMSO 2021, Indonesia, 21 January 2021).
 * Seluruh 22 soal (20 pilihan ganda dan 2 isian singkat) ditranskripsikan lengkap dalam bahasa Inggris.
 */
export default {
  id: 'imso-17-science-theory-1',
  slug: 'imso-17-science-theory-1',
  subject: 'olimpiade-sains',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'IMSO 17th Science Theory I: biology, physics, chemistry, earth & space science (Primary)',
  relatedChapterIds: [
    'ipa5-bab4-ekosistem-dan-siklus-air',
    'ipa6-bab1-rangka-dan-mekanika-gerak-tubuh',
    'ipa5-bab1-cahaya-dan-sifatnya',
    'ipa6-bab3-sistem-tata-surya'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'IMSO',
  title: 'IMSO 17th \u2014 Science Theory I',
  totalMarks: 50,
  instructions:
    'Attempt all 22 questions (20 multiple-choice questions and 2 short-answer questions; original time allowed: 60 minutes). The original paper totals 25 marks (sixteen 1-mark questions and six 1.5-mark questions); marks are scaled by $\\times 2$ here (2 marks and 3 marks respectively, total 50 marks) to preserve exact relative weights with integer scoring.',
  source: {
    org: 'IMSO',
    file: 'IMSO 17th Science Theory 1.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Multiple-Choice Questions',
      marks: 45,
      stem: 'Choose the single best answer for each of the 20 multiple-choice questions below.',
      parts: [
        {
          label: '1',
          marks: 3,
          prompt:
            'A boy wanted to find the optimum conditions for his chickens to lay eggs. He divided his $20$ chickens into $2$ groups, X and Y, and recorded their daily care and egg production for $2$ weeks.\n\n| Group | Number of chickens | Chicken feed for group (daily) | Calcium for group (daily) | Number of eggs laid by group (after 2 weeks) |\n| :--- | :---: | :---: | :---: | :---: |\n| Group X | $10$ | $1{,}000\\text{ grams}$ | $5\\text{ grams}$ | $82$ |\n| Group Y | $10$ | $1{,}300\\text{ grams}$ | $10\\text{ grams}$ | $104$ |\n\nThe boy DID NOT do a good job designing this investigation. He should have \\_\\_\\_\\_\\_. *(3 marks; original: 1.5 marks)*\n\nA. used more chickens in each group\nB. weighed the chickens each day rather than counting eggs\nC. recorded how much water he gave the chickens\nD. controlled the amount of feed or the amount of calcium',
          answer: 'D. controlled the amount of feed or the amount of calcium',
          principle:
            'In a fair scientific test, only one independent variable should be changed at a time while all other relevant variables are kept constant.',
          solution:
            'Between Group X and Group Y, the boy changed **two** variables simultaneously: the amount of chicken feed ($1{,}000\\text{ g}$ vs. $1{,}300\\text{ g}$) and the amount of calcium ($5\\text{ g}$ vs. $10\\text{ g}$).\nBecause both variables changed at once, it is impossible to tell whether the higher egg production in Group Y ($104$ vs. $82$ eggs) was caused by the extra feed, the extra calcium, or a combination of both. To make it a fair test, he should have kept either the amount of feed or the amount of calcium constant.',
          rubric: [
            {
              code: 'M2',
              text: 'Identifies that both chicken feed and calcium were varied simultaneously, violating the single-variable fair-test rule.'
            },
            {
              code: 'A1',
              text: 'Selects option D (controlled the amount of feed or the amount of calcium).'
            }
          ]
        },
        {
          label: '2',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-2.webp',
              alt: 'Horizontal bar graph showing relative biomass of Population A, Population B, Population C, and Population D.',
              caption: 'Relative biomass of four populations in the same food chain.'
            }
          ],
          prompt:
            'Refer to the bar graph showing $4$ populations, A–D, involved in the same food chain.\n\nWhich population is most likely to have the largest amount of energy available to it? *(2 marks; original: 1 mark)*\n\nA. Population A\nB. Population B\nC. Population C\nD. Population D',
          answer: 'B. Population B',
          principle:
            'Energy decreases at each successive trophic level along a food chain; the producer trophic level supports the largest biomass and holds the greatest total energy.',
          solution:
            'In a food chain, energy enters through producers (first trophic level) and only a small fraction (typically around $10\\%$) is transferred to each higher consumer level. Consequently, both available energy and biomass generally decrease along the food chain from producers to top consumers.\nFrom the bar graph, **Population B** has the greatest relative biomass, so it represents the producer level and has the largest amount of energy available to it.',
          rubric: [
            {
              code: 'M1',
              text: 'Links the largest relative biomass in the food chain to the producer trophic level holding the most available energy.'
            },
            {
              code: 'A1',
              text: 'Selects option B (Population B).'
            }
          ]
        },
        {
          label: '3',
          marks: 3,
          prompt:
            'A student conducted an experiment using four ($4$) different set-ups: P, Q, R and S. All set-ups contain water in containers made of the same materials. The table below shows the different conditions when she started each experiment.\n\n| Conditions | Set-up P | Set-up Q | Set-up R | Set-up S |\n| :--- | :---: | :---: | :---: | :---: |\n| Room temperature ($^{\\circ}\\text{C}$) | $22$ | $24$ | $22$ | $22$ |\n| Exposed surface area of water ($\\text{cm}^2$) | $100$ | $100$ | $50$ | $100$ |\n| Volume of water ($\\text{mL}$) | $150$ | $150$ | $150$ | $150$ |\n| Temperature of water ($^{\\circ}\\text{C}$) | $50$ | $50$ | $50$ | $40$ |\n\nWhich of the following set-ups are the best for the student to use to ensure a fair test to investigate how the rate of evaporation of water was affected by: *(3 marks; original: 1.5 marks)*\n\n| Option | Room temperature | Exposed surface area of water | Temperature of water |\n| :---: | :---: | :---: | :---: |\n| A | P and Q | P and R | P and S |\n| B | Q and R | R and S | P and Q |\n| C | Q and S | P and S | Q and R |\n| D | R and S | Q and R | P and R |',
          answer: 'A. P and Q | P and R | P and S',
          principle:
            'To test one factor fairly, choose two set-ups that differ only in that specific factor while keeping all other conditions identical.',
          solution:
            'Compare pairs of set-ups where only the tested variable differs:\n- **Room temperature**: **P and Q** differ only in room temperature ($22^{\\circ}\\text{C}$ vs. $24^{\\circ}\\text{C}$), while exposed surface area ($100\\text{ cm}^2$), volume ($150\\text{ mL}$), and water temperature ($50^{\\circ}\\text{C}$) remain identical.\n- **Exposed surface area of water**: **P and R** differ only in exposed surface area ($100\\text{ cm}^2$ vs. $50\\text{ cm}^2$), while room temperature ($22^{\\circ}\\text{C}$), volume ($150\\text{ mL}$), and water temperature ($50^{\\circ}\\text{C}$) remain identical.\n- **Temperature of water**: **P and S** differ only in water temperature ($50^{\\circ}\\text{C}$ vs. $40^{\\circ}\\text{C}$), while room temperature ($22^{\\circ}\\text{C}$), exposed surface area ($100\\text{ cm}^2$), and volume ($150\\text{ mL}$) remain identical.\nThus, the correct matching is option **A**.',
          rubric: [
            {
              code: 'M2',
              text: 'Correctly isolates the single changed variable for each of the three investigations (P–Q, P–R, and P–S).'
            },
            {
              code: 'A1',
              text: 'Selects option A.'
            }
          ]
        },
        {
          label: '4',
          marks: 2,
          prompt:
            'A child is suffering from a disease caused by a certain nutrient deficiency. The child narrated that he shows the following symptoms: inability to gain weight, edema or swelling of the hand and feet, and stomach bulging. The doctor diagnosed the child of kwashiorkor.\n\nWhich groups of nutrient-rich foods (P–S) and their corresponding sources will the doctor recommend the child to consume more in order to recover from the said nutrient deficiency? *(2 marks; original: 1 mark)*\n\n- **P**: Meat, Fish, Egg\n- **Q**: Butter, Lard, Margarine\n- **R**: Bread, Biscuit, Potato\n- **S**: Lemon, Tomato, Orange\n\nA. Nutrient P\nB. Nutrient Q\nC. Nutrient R\nD. Nutrient S',
          answer: 'A. Nutrient P',
          principle:
            'Kwashiorkor is a form of severe malnutrition caused by protein deficiency; recovery requires protein-rich foods.',
          solution:
            'Kwashiorkor (characterized by poor weight gain, peripheral edema, and a swollen abdomen) results from a severe deficiency of **protein**.\nClassifying the food groups:\n- **P (Meat, Fish, Egg)**: rich in protein.\n- **Q (Butter, Lard, Margarine)**: rich in fats/lipids.\n- **R (Bread, Biscuit, Potato)**: rich in carbohydrates.\n- **S (Lemon, Tomato, Orange)**: rich in vitamins (especially vitamin C).\nTherefore, the doctor will recommend **Nutrient P**.',
          rubric: [
            {
              code: 'M1',
              text: 'Identifies kwashiorkor as a protein-deficiency disease and recognizes meat, fish, and egg as protein sources.'
            },
            {
              code: 'A1',
              text: 'Selects option A (Nutrient P).'
            }
          ]
        },
        {
          label: '5',
          marks: 3,
          prompt:
            '*Chromobacterium violaceum* is a species of bacteria that is used in different biological tests. *C. violaceum* is able to sense the presence of other cells by releasing and detecting some signaling molecules. When *C. violaceum* multiplies and reaches a certain population called the quorum population, it begins to release a purple-colored compound called violacein. This mechanism is called quorum-sensing.\n\nA scientist is investigating whether a seaweed extract inhibits the quorum sensing of *C. violaceum*. She grows *C. violaceum* together with the seaweed extract in a liquid broth for $24$ hours, and then measured the concentration of violacein and the number of cells. In the experiment, methanol is used as negative control, while cinnamaldehyde is used as a positive control. Below is the result that she obtained.\n\n| Measurement | Methanol | Cinnamaldehyde | Seaweed extract |\n| :--- | :---: | :---: | :---: |\n| Concentration of violacein ($\\text{mg/L}$) | $80$ | $40$ | $20$ |\n| Number of cells ($\\times 1{,}000$) | $110$ | $110$ | $110$ |\n\nBased on the results, what is the possible effect of the seaweed extract on *C. violaceum*? *(3 marks; original: 1.5 marks)*\n\nA. The seaweed extract is an antibiotic as it does not allow the number of cells to exceed $110{,}000$.\nB. The seaweed extract is an antibiotic as it reduces the number of cells producing violacein.\nC. The seaweed extract is a quorum-sensing inhibitor as it stops the cells from producing violacein, preventing them to multiply.\nD. The seaweed extract is a quorum-sensing inhibitor as it prevents cells to communicate with each other without killing them.',
          answer:
            'D. The seaweed extract is a quorum-sensing inhibitor as it prevents cells to communicate with each other without killing them.',
          principle:
            'A quorum-sensing inhibitor suppresses signal-regulated behavior (violacein production) while leaving bacterial cell growth and viability unaffected.',
          solution:
            'Compare the bacterial cell count and violacein concentration across the three treatments:\n1. The number of cells is identical in all three setups ($110 \\times 1{,}000 = 110{,}000$), including the negative control (methanol). Hence, the seaweed extract neither kills the bacteria nor stops them from multiplying, ruling out options A, B, and C.\n2. Despite having the same cell density, the violacein concentration drops from $80\\text{ mg/L}$ (methanol) to $20\\text{ mg/L}$ (seaweed extract)—even lower than the positive quorum-sensing inhibitor control (cinnamaldehyde, $40\\text{ mg/L}$).\nThis shows that the seaweed extract inhibits **quorum-sensing** communication without killing the cells (option **D**).',
          rubric: [
            {
              code: 'M2',
              text: 'Notes that cell count stays constant at $110{,}000$ (no bactericidal or growth-stopping effect) while violacein production drops sharply.'
            },
            {
              code: 'A1',
              text: 'Selects option D.'
            }
          ]
        },
        {
          label: '6',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-6.webp',
              alt: 'Illustration of an athlete flexing his elbows to lift a barbell upward with upper arm muscles visible.',
              caption: 'Athlete lifting weights by flexing the forearm at the elbow.'
            }
          ],
          prompt:
            'The upper arm has two types of muscles namely triceps and biceps. These muscles work against each other to produce movement. When an athlete lifts weights as illustrated in the picture, what happens to his upper arm muscles? *(2 marks; original: 1 mark)*\n\n| Option | Biceps | Triceps |\n| :---: | :---: | :---: |\n| A | Contract | Contract |\n| B | Relax | Relax |\n| C | Contract | Relax |\n| D | Relax | Contract |',
          answer: 'C. Biceps: Contract, Triceps: Relax',
          principle:
            'The biceps and triceps form an antagonistic muscle pair: bending (flexing) the elbow requires the biceps to contract while the triceps relax.',
          solution:
            'To curl and lift the barbell upward, the forearm flexes (bends) toward the upper arm at the elbow joint. Because muscles can only pull (shorten when contracting), the **biceps** on the front of the upper arm **contract** to pull the forearm up, while the opposing **triceps** on the back **relax**.',
          rubric: [
            {
              code: 'M1',
              text: 'Identifies elbow flexion as requiring contraction of the biceps and relaxation of the antagonistic triceps.'
            },
            {
              code: 'A1',
              text: 'Selects option C.'
            }
          ]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'A block of ice with an iron nail embedded inside is floating on water in a beaker. The initial water level is marked on the side of the beaker. When the ice completely melts, the water level will be \\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_ the original mark. *(2 marks; original: 1 mark)*\n\nA. below\nB. at\nC. above\nD. cannot be determined',
          answer: 'A. below',
          principle:
            'By Archimedes’ principle, a floating object displaces water equal to its weight, whereas a sunken object displaces water equal only to its own volume.',
          solution:
            'Let $m_{\\text{ice}}$ and $m_{\\text{nail}}$ be the masses of the ice and the iron nail, $\\rho_w = 1.0\\text{ g/cm}^3$ the density of water, and $\\rho_{\\text{Fe}} \\approx 7.87\\text{ g/cm}^3$ the density of iron.\n- **Initially (floating)**: The total weight $(m_{\\text{ice}} + m_{\\text{nail}})g$ is supported by buoyancy, so the volume of water displaced is\n$$V_1 = \\frac{m_{\\text{ice}} + m_{\\text{nail}}}{\\rho_w} = \\frac{m_{\\text{ice}}}{\\rho_w} + \\frac{m_{\\text{nail}}}{\\rho_w}.$$\n- **After melting**: The ice becomes liquid water of volume $\\frac{m_{\\text{ice}}}{\\rho_w}$, while the dense iron nail sinks to the bottom and displaces only its own volume $\\frac{m_{\\text{nail}}}{\\rho_{\\text{Fe}}}$. The new volume below the surface is\n$$V_2 = \\frac{m_{\\text{ice}}}{\\rho_w} + \\frac{m_{\\text{nail}}}{\\rho_{\\text{Fe}}}.$$\nSince $\\rho_{\\text{Fe}} > \\rho_w$, we have $\\frac{m_{\\text{nail}}}{\\rho_{\\text{Fe}}} < \\frac{m_{\\text{nail}}}{\\rho_w}$, so $V_2 < V_1$. Therefore, the water level falls **below** the original mark.',
          rubric: [
            {
              code: 'M1',
              text: 'Applies Archimedes’ principle to compare the displaced volume of the floating nail ($m_{\\text{nail}}/\\rho_w$) with that of the sunken nail ($m_{\\text{nail}}/\\rho_{\\text{Fe}}$).'
            },
            {
              code: 'A1',
              text: 'Concludes $V_2 < V_1$ and selects option A (below).'
            }
          ]
        },
        {
          label: '8',
          marks: 3,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-8.webp',
              alt: 'Line graph showing enzyme activity versus pH for three enzymes labeled A, B, and C peaking from acidic to alkaline pH.',
              caption: 'Activity profiles of three human digestive enzymes A, B, and C across different pH values.'
            }
          ],
          prompt:
            'The graph shows the activity of three human enzymes from different regions of the digestive tract with different pH.\n\nWhich of the following shows the correct grouping of enzyme and substrate being broken down? *(3 marks; original: 1.5 marks)*\n\n| Option | Enzyme A | Enzyme B | Enzyme C |\n| :---: | :---: | :---: | :---: |\n| A | Protein | Lipid | Starch |\n| B | Starch | Lipid | Starch |\n| C | Protein | Starch | Lipid |\n| D | Starch | Protein | Lipid |',
          answer: 'C. Enzyme A: Protein, Enzyme B: Starch, Enzyme C: Lipid',
          principle:
            'Human digestive enzymes have distinct optimum pH values matching their site of action: acidic in the stomach, near-neutral in the mouth, and alkaline in the small intestine.',
          solution:
            'Read the relative optimum pH of the three curves from left (acidic) to right (alkaline):\n- **Enzyme A** works only in a strongly acidic range (around $\\text{pH } 2$), matching **pepsin** in the stomach, which digests **Protein**.\n- **Enzyme B** peaks near neutral $\\text{pH}$ (around $\\text{pH } 7$), matching **salivary amylase** in the mouth, which digests **Starch**.\n- **Enzyme C** peaks in an alkaline range, matching intestinal/pancreatic **lipase** in the small intestine, which digests **Lipid**.\nHence, the correct grouping is **C**.',
          rubric: [
            {
              code: 'M2',
              text: 'Matches acidic optimum (A) to gastric protease/protein, neutral optimum (B) to salivary amylase/starch, and alkaline optimum (C) to intestinal lipase/lipid.'
            },
            {
              code: 'A1',
              text: 'Selects option C.'
            }
          ]
        },
        {
          label: '9',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-9.webp',
              alt: 'Sagittal cross-section of the human mouth, pharynx, larynx, and oesophagus with Structure P and Structure Q labeled.',
              caption: 'Structures between the mouth and the oesophagus during swallowing.'
            }
          ],
          prompt:
            'The diagram shows the structures present between the mouth and the oesophagus.\n\nWhich of the following options CORRECTLY describes how Structures P and Q work together to prevent choking during the process of swallowing? *(2 marks; original: 1 mark)*\n\n| Option | Structure P | Structure Q |\n| :---: | :---: | :---: |\n| A | Moves up | Moves up |\n| B | Moves down | Moves down |\n| C | Moves up | Moves down |\n| D | Moves down | Moves up |',
          answer: 'D. Structure P: Moves down, Structure Q: Moves up',
          principle:
            'During swallowing, the larynx rises upward while the epiglottis folds downward over the glottis to seal the airway and direct food into the oesophagus.',
          solution:
            'In the sagittal diagram, **Structure P** is the **epiglottis** (the flap at the entrance to the windpipe) and **Structure Q** is the **larynx** (voice box, housing the vocal folds).\nDuring swallowing, **Structure P (epiglottis) moves down** (folds downward/backward) while **Structure Q (larynx) moves up** to meet it, closing the opening to the trachea so that food passes safely down the oesophagus without entering the airway.',
          rubric: [
            {
              code: 'M1',
              text: 'Identifies Structure P as the epiglottis (moves down) and Structure Q as the larynx (moves up) during swallowing.'
            },
            {
              code: 'A1',
              text: 'Selects option D.'
            }
          ]
        },
        {
          label: '10',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-10.webp',
              alt: 'Photograph of a Komodo dragon walking on sandy ground.',
              caption: 'Komodo dragon (Varanus komodoensis).'
            }
          ],
          prompt:
            'Komodo dragon (*Varanus komodoensis*), also known as Komodo monitor, is the national animal of Indonesia. It is a species of lizard found in the Indonesian islands of Komodo, East Nusa Tenggara. Komodo dragons, the world’s largest lizard, are able to reproduce both sexually and asexually. They are parthenogenetic.\n\nWhich of the following statements correctly describe parthenogenetic animals? *(2 marks; original: 1 mark)*\n\nA. They are animals that can produce both sperm cell and egg cell.\nB. They are animals that do not produce egg cells and sperm cells.\nC. They are animals that reproduce from a single sperm cell without fertilizing an egg.\nD. They are animals that reproduce from an egg cell that can develop into an embryo without being fertilized by a sperm.',
          answer:
            'D. They are animals that reproduce from an egg cell that can develop into an embryo without being fertilized by a sperm.',
          principle:
            'Parthenogenesis is a form of asexual reproduction in which an unfertilized female gamete (egg cell) develops directly into an embryo.',
          solution:
            'Parthenogenesis occurs when a female produces an **egg cell** that develops into a complete embryo **without fertilization by a sperm cell**. Option A describes hermaphroditism, option B describes purely non-gametic asexual reproduction (such as budding or fragmentation), and option C is biologically incorrect. Therefore, option **D** is correct.',
          rubric: [
            {
              code: 'M1',
              text: 'Defines parthenogenesis as embryonic development from an unfertilized egg cell.'
            },
            {
              code: 'A1',
              text: 'Selects option D.'
            }
          ]
        },
        {
          label: '11',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-11.webp',
              alt: 'Four animal images arranged side by side: Goose, Whale, Deer, and Seahorse.',
              caption: 'Four animals to classify by reproduction mode and habitat.'
            }
          ],
          prompt:
            'A student was given four pictures of animals as shown: Goose, Whale, Deer, and Seahorse. He was told to group the animals correctly into the classification table below.\n\n| Reproduction mode | Live on land | Live in water |\n| :--- | :---: | :---: |\n| **Lay eggs** | **W** | **X** |\n| **Give birth to young alive** | **Y** | **Z** |\n\nWhich one of the following rows shows the correct answers for W, X, Y and Z? *(2 marks; original: 1 mark)*\n\n| Option | W | X | Y | Z |\n| :---: | :---: | :---: | :---: | :---: |\n| A | Goose | seahorse | Whale | Deer |\n| B | Goose | Whale | seahorse | Deer |\n| C | Deer | seahorse | Goose | whale |\n| D | Goose | seahorse | Deer | whale |',
          answer: 'D. W: Goose, X: seahorse, Y: Deer, Z: whale',
          principle:
            'Classify animals by reproductive mode (oviparous egg-laying vs. viviparous live birth) and primary habitat (land vs. water).',
          solution:
            'Classify each of the four animals:\n- **Goose** (bird): lays eggs and lives on land $\\rightarrow$ **W**.\n- **Seahorse** (fish): lays eggs and lives in water $\\rightarrow$ **X**.\n- **Deer** (terrestrial mammal): gives birth to live young and lives on land $\\rightarrow$ **Y**.\n- **Whale** (aquatic mammal): gives birth to live young and lives in water $\\rightarrow$ **Z**.\nMatching $(W, X, Y, Z) = (\\text{Goose}, \\text{seahorse}, \\text{Deer}, \\text{whale})$ gives option **D**.',
          rubric: [
            {
              code: 'M1',
              text: 'Correctly classifies all four animals by egg-laying vs. live birth and terrestrial vs. aquatic habitat.'
            },
            {
              code: 'A1',
              text: 'Selects option D.'
            }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'The table shows features of some blood vessels. Which set of features describes the pulmonary artery? *(2 marks; original: 1 mark)*\n\n| Option | Muscle layer | Lumen | Direction of blood flow | Blood |\n| :---: | :---: | :---: | :---: | :---: |\n| A | thick | narrow | away from the heart | deoxygenated |\n| B | thick | wide | away from the heart | oxygenated |\n| C | thin | narrow | towards the heart | oxygenated |\n| D | thin | wide | towards the heart | deoxygenated |',
          answer:
            'A. Muscle layer: thick, Lumen: narrow, Direction of blood flow: away from the heart, Blood: deoxygenated',
          principle:
            'Arteries have thick muscular walls, narrow lumens, and carry blood away from the heart; uniquely, the pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.',
          solution:
            'Like all arteries, the pulmonary artery carries blood **away from the heart** under high pressure, so it has a **thick** muscular/elastic wall and a **narrow** lumen. Unlike systemic arteries, the pulmonary artery transports **deoxygenated** blood from the right ventricle of the heart to the lungs for gas exchange. Hence, option **A** is correct.',
          rubric: [
            {
              code: 'M1',
              text: 'Identifies arterial wall/lumen structure and flow away from the heart, plus the exception that the pulmonary artery carries deoxygenated blood.'
            },
            {
              code: 'A1',
              text: 'Selects option A.'
            }
          ]
        },
        {
          label: '13',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-13.webp',
              alt: 'Four graphs labeled A, B, C, and D plotting relative enzyme activity against temperature in degrees Celsius.',
              caption: 'Four candidate graphs of relative enzyme activity versus temperature.'
            }
          ],
          prompt:
            'Enzymes are protein substances that digest food completely in the human digestive system. They are produced in various parts of the body such as the salivary glands, gastric glands and pancreas. Enzymes work differently at various temperatures. Which of the graphs (A, B, C or D) best represents how enzyme activity varies with temperature? *(2 marks; original: 1 mark)*\n\nA. Graph A\nB. Graph B\nC. Graph C\nD. Graph D',
          answer: 'A. Graph A',
          principle:
            'Human enzyme activity rises with temperature up to an optimum around body temperature ($37\\text{--}40^{\\circ}\\text{C}$), then drops sharply at higher temperatures due to protein denaturation.',
          solution:
            'As temperature rises from low values toward human body temperature ($\\approx 37\\text{--}40^{\\circ}\\text{C}$), molecules gain kinetic energy and collide more frequently, increasing enzyme activity to a peak.\nAbove the optimum temperature, excessive thermal vibration disrupts the enzyme’s 3D active-site shape (**denaturation**), causing activity to drop rapidly to zero around $60^{\\circ}\\text{C}$. Only **Graph A** shows this characteristic peak near $40^{\\circ}\\text{C}$ and drop to zero by $60^{\\circ}\\text{C}$.',
          rubric: [
            {
              code: 'M1',
              text: 'Explains the rise in activity up to the $\\approx 37\\text{--}40^{\\circ}\\text{C}$ optimum and the subsequent drop due to denaturation.'
            },
            {
              code: 'A1',
              text: 'Selects option A (Graph A).'
            }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'When cyan and yellow paints are mixed together, the result is green. The reason for this is that \\_\\_\\_\\_\\_\\_. *(2 marks; original: 1 mark)*\n\nA. cyan light and yellow light make green light.\nB. yellow pigments absorb green light and reflect all the others.\nC. between cyan and yellow pigments, all colors are absorbed except green.\nD. cyan absorbs yellow light and yellow absorbs cyan light.',
          answer: 'C. between cyan and yellow pigments, all colors are absorbed except green.',
          principle:
            'Paint mixing follows subtractive color mixing: a mixture reflects only the wavelengths that neither pigment absorbs.',
          solution:
            'In white light (composed of red, green, and blue primary light components):\n- **Cyan pigment** absorbs red light and reflects green and blue light.\n- **Yellow pigment** absorbs blue light and reflects red and green light.\nWhen cyan and yellow paints are mixed, red is absorbed by cyan and blue is absorbed by yellow, so all colors are absorbed **except green**, which both pigments reflect. Therefore, option **C** is correct.',
          rubric: [
            {
              code: 'M1',
              text: 'Applies subtractive pigment mixing (cyan absorbs red, yellow absorbs blue, leaving green reflected).'
            },
            {
              code: 'A1',
              text: 'Selects option C.'
            }
          ]
        },
        {
          label: '15',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-15.webp',
              alt: 'Agarose gel electrophoresis banding pattern showing DNA lanes for Mother, Father, and Child.',
              caption: 'Section of agarose gel electrophoresis results for Mother, Father, and Child.'
            }
          ],
          prompt:
            'Agarose gel electrophoresis is a laboratory method used to separate DNA by size. In a gel electrophoresis, DNA molecules migrate from one end of the gel to the other end, where lighter molecules migrate faster than the heavier ones.\n\nThe parents of a new baby believe they brought the wrong child home from the hospital. Gel electrophoresis was performed using DNA samples from the parents and the child. A section of the gel electrophoresis results is shown.\n\nWhich conclusion is valid based on the results? *(2 marks; original: 1 mark)*\n\nA. They have the correct child, because her genetic information is identical to that of the father.\nB. They have the wrong child, because her genetic information does not match that of either parent.\nC. They have the correct child, because her genetic information came from both parents.\nD. They have the wrong child, because her genetic information matches only that of the mother.',
          answer: 'C. They have the correct child, because her genetic information came from both parents.',
          principle:
            'In biological parentage, every DNA band in a child’s profile must match a corresponding band inherited from either the mother or the father.',
          solution:
            'Compare the horizontal positions of the $6$ DNA bands in the **Child** lane (from top to bottom) against the parents’ lanes:\n- Child band 1 matches **Father** band 1.\n- Child band 2 matches **Mother** band 2.\n- Child band 3 matches **Father** band 3.\n- Child band 4 matches **Mother** band 3.\n- Child band 5 matches **Father** band 4.\n- Child band 6 matches **Mother** band 6.\nEvery single DNA band in the child comes from either the mother or the father, with no unexplained bands. Therefore, they have the correct child (option **C**).',
          rubric: [
            {
              code: 'M1',
              text: 'Matches each of the child’s six DNA bands to either the mother’s lane or the father’s lane.'
            },
            {
              code: 'A1',
              text: 'Selects option C.'
            }
          ]
        },
        {
          label: '16',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-16.webp',
              alt: 'Diagram of a U-shaped glass tube with a marble at the left starting position and four dashed positions labeled (1), (2), (3), and (4).',
              caption: 'Marble released from its starting position inside a U-shaped glass tube.'
            }
          ],
          prompt:
            'A student placed a marble in a glass tube. She observed that when she released the marble it rolled to the other end of the tube before rolling back downwards.\n\nAt which position will the marble reach before it rolls back downwards? *(2 marks; original: 1 mark)*\n\nA. (1)\nB. (2)\nC. (3)\nD. (4)',
          answer: 'C. (3)',
          principle:
            'Due to friction and air resistance in a real experiment, part of the initial gravitational potential energy is converted into heat and sound energy, so the marble cannot climb back to its starting height.',
          solution:
            'At the starting position on the left arm, the marble possesses gravitational potential energy. As it rolls down through (1) and (2) and up the right arm, friction between the marble and the glass tube (along with air resistance) converts some mechanical energy into **heat and sound energy**.\nBecause total mechanical energy decreases, the marble cannot reach position **(4)** (which is at the same vertical height as the starting position); instead, it reaches a slightly lower maximum height at position **(3)** before rolling back downwards.',
          rubric: [
            {
              code: 'M1',
              text: 'Identifies energy dissipation to heat and sound via friction, preventing the marble from reaching its original height (4).'
            },
            {
              code: 'A1',
              text: 'Selects option C ((3)).'
            }
          ]
        },
        {
          label: '17',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-17.webp',
              alt: 'Line drawing of a balancing toy bird perched on a branch with four labeled positions A, B, C, and D.',
              caption: 'Toy bird pivoted on a support branch with four candidate center-of-gravity positions.'
            }
          ],
          prompt:
            'The diagram shows a toy bird pivoted on a support and in stable equilibrium. When designing the toy bird, the manufacturer needs to plan the position of its center of gravity. Which position, A, B, C or D, should the center of gravity be? *(2 marks; original: 1 mark)*\n\nA. Position A\nB. Position B\nC. Position C\nD. Position D',
          answer: 'D. Position D',
          principle:
            'A pivoted object is in stable equilibrium when its center of gravity lies vertically below its pivot point so that any small tilt produces a restoring torque.',
          solution:
            'The toy bird is pivoted where its feet rest on the branch. For **stable equilibrium**, the center of gravity must lie **below** the pivot point; when disturbed slightly, gravity pulls the center of gravity back directly beneath the pivot.\nPositions A and B are above the pivot (unstable equilibrium), C is near the pivot level, and **D** lies well below the pivot at the weighted tip of the long tail. Hence, the center of gravity should be at **D**.',
          rubric: [
            {
              code: 'M1',
              text: 'States that stable equilibrium requires the center of gravity to lie below the support pivot.'
            },
            {
              code: 'A1',
              text: 'Selects option D (Position D).'
            }
          ]
        },
        {
          label: '18',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-18.webp',
              alt: 'Four graphs labeled A, B, C, and D showing frequency f versus ambulance position X.',
              caption: 'Four candidate graphs of observed siren frequency f versus ambulance position X.'
            }
          ],
          prompt:
            'An ambulance moves through a street along the positive $X$ direction and a person who stands beside the street hears the sound of the ambulance siren. Which option (A, B, C or D) represents the frequency ($f$) received by the person? $X$ is the position of the ambulance; the person stands at the origin. *(2 marks; original: 1 mark)*\n\nA. Graph A\nB. Graph B\nC. Graph C\nD. Graph D',
          answer: 'D. Graph D',
          principle:
            'By the Doppler effect, a sound source approaching an observer produces a higher observed frequency, while a receding source produces a lower observed frequency.',
          solution:
            'The ambulance moves in the $+X$ direction past the stationary observer beside the street at $X = 0$:\n- For $X < 0$, the ambulance is **approaching** the observer, compressing wavefronts in front of it, so the received frequency is **higher** than the emitted frequency $f_0$ ($f_{\\text{approach}} > f_0$).\n- As the ambulance passes $X = 0$, the radial velocity component toward the observer drops smoothly through zero ($f = f_0$).\n- For $X > 0$, the ambulance is **receding**, stretching wavefronts behind it, so the received frequency is **lower** than $f_0$ ($f_{\\text{recede}} < f_0$).\nOnly **Graph D** starts high for $X < 0$ and decreases smoothly to a lower value for $X > 0$.',
          rubric: [
            {
              code: 'M1',
              text: 'Applies the Doppler effect: higher frequency while approaching ($X < 0$) and lower frequency while receding ($X > 0$).'
            },
            {
              code: 'A1',
              text: 'Selects option D (Graph D).'
            }
          ]
        },
        {
          label: '19',
          marks: 2,
          prompt:
            'The table below shows what happens in the chemical equation, $\\text{A} + \\text{B} \\rightarrow \\text{C} + \\text{D}$, and the time it takes for the reaction to take place.\n\n| Reaction | Reactant A ($\\text{g}$) | Reactant B ($\\text{g}$) | Product C ($\\text{g}$) | Product D ($\\text{g}$) | X ($\\text{g}$) | Time ($\\text{minute}$) |\n| :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n| $1$ | $10$ | $15$ | $18$ | $7$ | $-$ | $20$ |\n| $2$ | $10$ | $15$ | $18$ | $7$ | $1$ | $12$ |\n\nWhat is substance X? *(2 marks; original: 1 mark)*\n\nA. catalyst\nB. inhibitor\nC. enzyme\nD. conductor',
          answer: 'A. catalyst',
          principle:
            'A catalyst speeds up a chemical reaction (shortening the reaction time) without altering the final masses or identities of the reactants and products.',
          solution:
            'In both Reaction 1 and Reaction 2, $10\\text{ g}$ of A and $15\\text{ g}$ of B react completely to form $18\\text{ g}$ of C and $7\\text{ g}$ of D ($10 + 15 = 25\\text{ g} = 18 + 7$).\nAdding $1\\text{ g}$ of substance X does not change the yield of products, yet reduces the reaction time from $20\\text{ minutes}$ to $12\\text{ minutes}$ (a $40\\%$ reduction in time, i.e., a faster reaction rate). Since this is a general chemical reaction rather than a specifically biological one, X is a **catalyst** (option **A**).',
          rubric: [
            {
              code: 'M1',
              text: 'Recognizes that X speeds up the reaction ($20\\text{ min} \\to 12\\text{ min}$) without changing the reactant or product masses.'
            },
            {
              code: 'A1',
              text: 'Selects option A (catalyst).'
            }
          ]
        },
        {
          label: '20',
          marks: 3,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-20.webp',
              alt: 'Laboratory apparatus diagram for steam distillation showing a steam flask, flask with orange peelings, condenser, and receiving flask.',
              caption: 'Steam distillation setup used to extract limonene from orange peelings.'
            }
          ],
          prompt:
            'Steam distillation is used to extract limonene, a volatile essential oil, from oranges. In steam distillation, a flask containing water is heated to form steam. The steam then enters another flask with the orange peelings. Finally, limonene and water are collected at the receiving flask. Steam allows the limonene to boil at a lower temperature and carries its vapor with it.\n\nWhich of the following statements is the main reason why steam distillation is used to extract limonene? *(3 marks; original: 1.5 marks)*\n\nA. Because steam has greater kinetic energy than water, steam distillation can extract limonene faster than in simple distillation.\nB. Because the initial amount of water is greater in the first flask, steam distillation can extract more limonene than in simple distillation.\nC. Because limonene and water is immiscible, the distillate can be separated easily.\nD. Because the peelings contain both volatile and non-volatile compounds, steam distillation only extracts limonene without extracting the rest of the non-volatile materials.',
          answer:
            'D. Because the peelings contain both volatile and non-volatile compounds, steam distillation only extracts limonene without extracting the rest of the non-volatile materials.',
          principle:
            'Steam distillation selectively vaporizes volatile, heat-sensitive essential oils at reduced temperature while leaving non-volatile plant components behind in the peelings.',
          solution:
            'Orange peelings contain a mixture of volatile essential oil (limonene) and non-volatile plant substances (such as cellulose, sugars, waxes, and pigments). Passing steam through the peelings vaporizes the **volatile** limonene at a temperature below $100^{\\circ}\\text{C}$ (preventing thermal decomposition) and carries it to the condenser without extracting the **non-volatile** materials.\nIn contrast, options A and B give incorrect physical reasons, and option C describes how the already-condensed distillate separates into two layers rather than why steam distillation is used to extract limonene from the peelings. Thus, option **D** is correct.',
          rubric: [
            {
              code: 'M2',
              text: 'Explains that steam distillation selectively vaporizes volatile limonene while leaving non-volatile plant compounds behind.'
            },
            {
              code: 'A1',
              text: 'Selects option D.'
            }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Short-Answer Questions',
      marks: 5,
      stem: 'Write a clear, concise answer for each of the following 2 short-answer questions.',
      parts: [
        {
          label: '21',
          marks: 2,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-21.webp',
              alt: 'Night sky chart above the southwestern horizon showing Saturn and Jupiter moving closer together from Nov 26 to Dec 21.',
              caption: 'Apparent positions of Saturn and Jupiter above the southwestern horizon in November–December 2020.'
            }
          ],
          prompt:
            'Last December 21, 2020, a very rare phenomenon was observed in the sky just above the southwestern or western horizon after sunset. It was the moment when planets Jupiter and Saturn appear at their closest. It was also the first time the planets became so close since 1623. The event has been dubbed the “Christmas star,” because some astronomers have theorized the “Star of Bethlehem” could have been a product of a close approach of Saturn and Jupiter.\n\nWhat is this rare phenomenon called? *(2 marks; original: 1 mark)*',
          answer: 'Great conjunction (also accept: conjunction or planetary conjunction)',
          principle:
            'An apparent close alignment of two celestial bodies in the sky as seen from Earth is called a conjunction; specifically, an alignment of Jupiter and Saturn is termed a Great Conjunction.',
          solution:
            'In astronomy, when two planets appear very close together along nearly the same line of sight from Earth, the event is called a **conjunction** (or **planetary conjunction**). Because Jupiter and Saturn are the two largest planets in the Solar System and align closely only about once every $20$ years—and as closely as on $21$ December $2020$ only once in centuries—their alignment is specifically known as the **Great Conjunction**.',
          rubric: [
            {
              code: 'M1',
              text: 'Identifies the event as an apparent alignment of Jupiter and Saturn along Earth’s line of sight.'
            },
            {
              code: 'A1',
              text: 'States Great conjunction (or conjunction / planetary conjunction).'
            }
          ]
        },
        {
          label: '22',
          marks: 3,
          figures: [
            {
              src: '/papers/imso-17-science-theory-1/fig-22.webp',
              alt: 'Botanical line drawing of a flowering herbaceous plant with basal rosette of broad leaves and radially symmetric five-petaled flowers.',
              caption: 'Holotype botanical illustration of the plant sample.'
            }
          ],
          prompt:
            'A scientist takes a sample of plant from the forest. Use the dichotomous key below to identify the species of the plant. *(3 marks; original: 1.5 marks)*\n\n1. a. narrow leaf $\\rightarrow$ go to 2\n   b. broad leaf $\\rightarrow$ go to 3\n2. a. bell-like flower $\\rightarrow$ bluebell\n   b. trumpet-like flower $\\rightarrow$ wild daffodil\n3. a. top petal overhangs lower petal $\\rightarrow$ dead nettle\n   b. top petal does not overhang lower petal $\\rightarrow$ go to 4\n4. a. heart-shaped leaf $\\rightarrow$ lesser celandine\n   b. ovate leaf $\\rightarrow$ primrose',
          answer: 'primrose',
          principle:
            'A dichotomous key identifies an organism step by step by choosing between pairs of contrasting observable traits.',
          solution:
            'Follow the dichotomous key using the features shown in the botanical drawing:\n1. **Leaf width (Step 1)**: The basal leaves are wide and rounded rather than grass-like, so it has a **broad leaf** (**1b $\\rightarrow$ go to 3**).\n2. **Flower symmetry (Step 3)**: The flowers (A, B, C) are radially symmetric with five equal notched petals rather than hooded two-lipped flowers, so the **top petal does not overhang the lower petal** (**3b $\\rightarrow$ go to 4**).\n3. **Leaf shape (Step 4)**: Each leaf blade is **ovate** (egg-shaped/oblong tapering toward the petiole) rather than heart-shaped (**4b $\\rightarrow$ primrose**).\nTherefore, the plant species is **primrose**.',
          rubric: [
            {
              code: 'M2',
              text: 'Follows the dichotomous key correctly through 1b (broad leaf $\\to$ 3) and 3b (top petal does not overhang $\\to$ 4).'
            },
            {
              code: 'A1',
              text: 'Selects 4b (ovate leaf) and identifies the species as primrose.'
            }
          ]
        }
      ]
    }
  ]
};
