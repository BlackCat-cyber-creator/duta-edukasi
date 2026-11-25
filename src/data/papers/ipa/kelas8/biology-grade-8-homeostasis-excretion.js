/**
 * Structured Practice Set: Biology Grade 8 – Homeostasis & Excretion Practice
 * Source: Biology Grade 8 – Homeostasis & Excretion Practice.pdf (Duta e-dukasi).
 * Original English wording is preserved throughout; figure-dependent items without available diagrams are skipped.
 */
export default {
  id: 'ipa8-bio-homeostasis',
  slug: 'biology-grade-8-homeostasis-excretion',
  subject: 'ipa',
  grade: 8,
  track: 'cambridge-style',
  accessTier: 'free',
  topic: 'Homeostasis & Excretion',
  relatedChapterIds: [
    'ipa8-bab2-struktur-fungsi-tubuh',
    'ipa9-bab2-koordinasi-reproduksi-homeostasis'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'IPA SMP',
  title: 'Biology Grade 8 – Homeostasis & Excretion Practice',
  totalMarks: 24,
  instructions:
    'Answer all included questions (6 questions, 16 parts, total 24 marks out of 43 in the source paper). Show clear biological reasoning and working where required. Note: items that depend on unavailable diagrams or graphs are skipped—specifically Q2(a–c), Q3(a)(i–iv), Q3(b)(i–iii), Q4(a–b), Q5, and Q6(a–e).',
  source: {
    org: 'Duta e-dukasi',
    file: "Biology Grade 8 \u2013 Homeostasis & Excretion Practice.pdf",
    license: 'CC BY 4.0'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'True or False Statements on Homeostasis and Excretion',
      marks: 5,
      stem: 'Some of the following statements are true, and some are false.',
      parts: [
        {
          label: 'a',
          marks: 5,
          prompt:
            'Identify the FIVE TRUE statements from the list below:\n\n1. Kidney produces urea.\n2. During exercise, the body temperature increases.\n3. Sweat produced by the skin helps to cool the body.\n4. Urea and ammonia are nitrogenous wastes.\n5. The presence of sugar in the urine is a sign of diabetes.\n6. Homeostasis involves keeping the internal environment constant.\n7. In cold weather, more water is lost by the skin.\n8. Urine is produced by the bladder.\n9. Excretion is the process by which the body takes in waste products.',
          answer:
            'The five true statements are 2, 3, 4, 5, and 6:\n- Statement 2: During exercise, the body temperature increases.\n- Statement 3: Sweat produced by the skin helps to cool the body.\n- Statement 4: Urea and ammonia are nitrogenous wastes.\n- Statement 5: The presence of sugar in the urine is a sign of diabetes.\n- Statement 6: Homeostasis involves keeping the internal environment constant.',
          principle:
            'Homeostasis maintains a constant internal environment (such as body temperature and water balance), while excretion removes metabolic waste products—including nitrogenous wastes like urea and ammonia—from the body.',
          solution:
            'Evaluate each statement individually:\n1. **False** — Urea is produced in the **liver** (via deamination of excess amino acids), not in the kidney. The kidneys filter urea from the blood and excrete it in urine.\n2. **True** — Muscles carry out more cellular respiration during exercise, releasing extra thermal energy that raises body temperature.\n3. **True** — As sweat evaporates from the skin surface, it absorbs latent heat from the body, cooling it down.\n4. **True** — Both urea and ammonia contain nitrogen formed from the breakdown of proteins and amino acids.\n5. **True** — In diabetes, high blood glucose exceeds the reabsorption capacity of the kidney tubules, so glucose appears in the urine.\n6. **True** — Homeostasis is defined as the maintenance of a constant internal environment.\n7. **False** — In cold weather, sweating decreases to conserve body heat, so less water is lost through the skin.\n8. **False** — Urine is produced by the **kidneys**; the urinary bladder only stores urine temporarily before urination.\n9. **False** — Excretion is the process by which the body **removes** (eliminates) metabolic waste products, not takes them in.',
          rubric: [
            { code: 'A1', text: 'Selects statement 2 (body temperature increases during exercise)' },
            { code: 'A1', text: 'Selects statement 3 (sweat helps to cool the body)' },
            { code: 'A1', text: 'Selects statement 4 (urea and ammonia are nitrogenous wastes)' },
            { code: 'A1', text: 'Selects statement 5 (sugar in urine is a sign of diabetes)' },
            { code: 'A1', text: 'Selects statement 6 (homeostasis keeps the internal environment constant)' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Kidney Function, Urine Formation, and Osmoregulation',
      marks: 11,
      stem: 'Answer the following questions on ultrafiltration, selective reabsorption, and water regulation in the human kidney.',
      parts: [
        {
          label: 'c',
          marks: 2,
          prompt:
            'The first step in the formation of urine is ultrafiltration, which occurs in the glomerulus. What is meant by ultrafiltration?',
          answer:
            'Ultrafiltration is the filtration of blood under high pressure in the glomerulus into Bowman\'s capsule, separating small dissolved molecules (such as water, glucose, urea, and mineral ions) from large molecules (such as plasma proteins) and blood cells.',
          principle:
            'High hydrostatic blood pressure in the glomerulus forces small soluble plasma components across the capillary wall and basement membrane into Bowman\'s capsule, while larger structures are retained in the blood.',
          solution:
            'Step 1: In the glomerulus, the afferent arteriole is wider than the efferent arteriole, creating **high hydrostatic blood pressure**.\n\nStep 2: This high pressure forces **small soluble molecules**—such as water, glucose, amino acids, mineral ions, and urea—out of the blood through the filtration membrane into **Bowman\'s capsule** to form glomerular filtrate.\n\nStep 3: **Large molecules** (such as plasma proteins) and **blood cells** cannot pass through the tiny filtration pores and remain in the blood.',
          rubric: [
            {
              code: 'B1',
              text: 'States that blood is filtered under high pressure from the glomerulus into Bowman\'s capsule'
            },
            {
              code: 'A1',
              text: 'Explains that small molecules pass into the filtrate while large molecules (plasma proteins) and blood cells remain in the blood'
            }
          ]
        },
        {
          label: 'd(i)',
          marks: 2,
          prompt:
            'The table below shows the concentration of plasma proteins and glucose in the blood entering the kidney and in the urine (used for parts d(i) and d(ii)).\n\n| Name of substance | Blood entering the kidney ($\\text{mg per 100 mL}$) | Urine ($\\text{mg per 100 mL}$) |\n| :--- | :---: | :---: |\n| Plasma proteins | $740$ | $0$ |\n| Glucose | $90$ | $0$ |\n\nExplain why there are no plasma proteins in the urine.',
          answer:
            'Plasma protein molecules are too large to pass through the filtration pores of the glomerulus and Bowman\'s capsule during ultrafiltration, so they remain in the blood.',
          principle:
            'Ultrafiltration separates blood components by molecular size; macromolecules such as plasma proteins exceed the pore size of the glomerular filtration barrier.',
          solution:
            'Step 1: Blood entering the kidney contains $740\\ \\text{mg per 100 mL}$ of plasma proteins.\n\nStep 2: During ultrafiltration in the glomerulus, plasma protein molecules are **too large** to pass through the capillary wall and basement membrane into Bowman\'s capsule.\n\nStep 3: Because they never enter the glomerular filtrate, plasma proteins stay in the bloodstream and their concentration in urine is $0\\ \\text{mg per 100 mL}$.',
          rubric: [
            { code: 'B1', text: 'States that plasma protein molecules are too large' },
            {
              code: 'A1',
              text: 'Explains that they cannot pass through the glomerular filtration membrane into Bowman\'s capsule during ultrafiltration'
            }
          ]
        },
        {
          label: 'd(ii)',
          marks: 2,
          prompt:
            'Referring to the table above (where glucose is $90\\ \\text{mg per 100 mL}$ in blood entering the kidney and $0\\ \\text{mg per 100 mL}$ in urine), explain why there is no glucose in the urine.',
          answer:
            'Glucose is small enough to be filtered into Bowman\'s capsule, but all of the filtered glucose is completely reabsorbed back into the blood by selective reabsorption in the proximal convoluted tubule.',
          principle:
            'Useful small molecules filtered during ultrafiltration—especially all glucose in a healthy kidney—are returned to the bloodstream by selective reabsorption in the proximal convoluted tubule.',
          solution:
            'Step 1: Glucose molecules are small, so glucose ($90\\ \\text{mg per 100 mL}$) passes out of the glomerulus into Bowman\'s capsule during ultrafiltration.\n\nStep 2: As the filtrate flows along the **proximal convoluted tubule**, **all** of the filtered glucose is **selectively reabsorbed** (including via active transport) back into the surrounding blood capillaries.\n\nStep 3: Consequently, in a healthy person, no glucose remains in the urine ($0\\ \\text{mg per 100 mL}$).',
          rubric: [
            {
              code: 'M1',
              text: 'Notes that glucose is filtered into Bowman\'s capsule during ultrafiltration'
            },
            {
              code: 'A1',
              text: 'Explains that all glucose is selectively reabsorbed back into the blood in the proximal convoluted tubule'
            }
          ]
        },
        {
          label: 'd(iii)',
          marks: 2,
          prompt: 'Water is found in the urine. Name two other substances you would also find in the urine.',
          answer: 'Urea and mineral ions (excess salts).',
          principle:
            'Urine consists mainly of water together with dissolved nitrogenous waste (chiefly urea) and excess mineral ions/salts.',
          solution:
            'Besides water, normal human urine contains:\n1. **Urea** (the main nitrogenous waste produced from excess amino acids in the liver).\n2. **Mineral ions / excess salts** (such as sodium and chloride ions, regulated to maintain osmotic balance).',
          rubric: [
            { code: 'A1', text: 'Identifies urea as a component of urine' },
            {
              code: 'A1',
              text: 'Identifies mineral ions / excess salts as a second component of urine'
            }
          ]
        },
        {
          label: 'e(i)',
          marks: 1,
          prompt:
            'An X hormone in the collecting duct of a nephron controls the amount of water in the body. What is the X hormone?\nA. Adrenaline Hormone\nB. Progesterone Hormone\nC. Anti-Diuretic Hormone\nD. Insulin Hormone',
          answer: 'C. Anti-Diuretic Hormone',
          principle:
            'Anti-Diuretic Hormone (ADH), released by the pituitary gland, regulates blood water potential by altering the permeability of the collecting duct to water.',
          solution:
            '**Anti-Diuretic Hormone (ADH)** acts on the walls of the collecting duct in the nephron to increase their permeability to water, controlling how much water is reabsorbed into the blood.\n- Adrenaline prepares the body for fight-or-flight responses.\n- Progesterone regulates the female reproductive cycle and pregnancy.\n- Insulin lowers blood glucose concentration.\n\nTherefore, the correct option is **C. Anti-Diuretic Hormone**.',
          rubric: [{ code: 'A1', text: 'Selects C (Anti-Diuretic Hormone)' }]
        },
        {
          label: 'e(ii)',
          marks: 1,
          prompt:
            'On a hot day, there is less water in urine. How does the kidney reduce the water content of urine?\nA. Decreased X hormone causes less water reabsorption, producing a large volume of dilute urine.\nB. Increased X hormone causes less water reabsorption, producing a large volume of dilute urine.\nC. Increased X hormone causes more water reabsorption, producing a small volume of concentrated urine.\nD. Decreased X hormone causes more water reabsorption, producing a small volume of concentrated urine.',
          answer:
            'C. Increased X hormone causes more water reabsorption, producing a small volume of concentrated urine.',
          principle:
            'When the body loses water (such as through sweating on a hot day), higher ADH secretion increases collecting duct permeability so more water is reabsorbed into the blood.',
          solution:
            'On a hot day, more water is lost as sweat, so blood water content drops. To conserve water:\n1. The pituitary gland secretes **more X hormone (ADH)**.\n2. Increased ADH makes the collecting duct walls more permeable, causing **more water reabsorption** into the blood.\n3. Less water remains in the tubule, producing a **small volume of concentrated urine**.\n\nTherefore, the correct option is **C**.',
          rubric: [
            {
              code: 'A1',
              text: 'Selects C (Increased X hormone causes more water reabsorption, producing a small volume of concentrated urine)'
            }
          ]
        },
        {
          label: 'f',
          marks: 1,
          prompt:
            'The table shows the concentration of urea in parts A and C.\n\n| Structure | Concentration of urea ($\\text{g per 100 cm}^3$) |\n| :---: | :---: |\n| A | $0.03$ |\n| C | $2.00$ |\n\nHow many times greater is the concentration of urea in structure C than in structure A?\nA. $5$\nB. $20$\nC. $50$\nD. $67$',
          answer: 'D. 67',
          principle:
            'The factor by which one concentration exceeds another is the ratio $\\frac{\\text{Concentration in C}}{\\text{Concentration in A}}$.',
          solution:
            'Divide the concentration of urea in structure C by the concentration in structure A:\n$$\\frac{2.00}{0.03} = \\frac{200}{3} \\approx 66.7 \\approx 67$$\nThus, the urea concentration in structure C is about **$67$ times** greater than in structure A (option **D**).',
          rubric: [{ code: 'A1', text: 'Selects D (67) from the ratio $2.00 / 0.03 \\approx 67$' }]
        }
      ]
    },
    {
      no: 4,
      title: 'Water Loss from the Skin and Homeostasis',
      marks: 2,
      stem: 'The human body maintains water balance and constant internal temperature through homeostasis, including water loss from the skin.',
      parts: [
        {
          label: 'c',
          marks: 1,
          prompt: 'Name the process by which water is lost from the skin.',
          answer: 'Sweating (perspiration).',
          principle:
            'Sweat glands in the dermis secrete sweat onto the skin surface, where water is lost by evaporation.',
          solution:
            'Water is lost from the skin through **sweating** (also called **perspiration**), in which sweat secreted by sweat glands evaporates from the skin surface.',
          rubric: [{ code: 'A1', text: 'Names sweating (or perspiration)' }]
        },
        {
          label: 'd',
          marks: 1,
          prompt: 'Why does the body need to lose water from the skin?',
          answer:
            'To cool the body down and maintain a constant body temperature when sweat evaporates and removes heat energy from the skin.',
          principle:
            'Evaporation of water in sweat absorbs thermal energy (latent heat of vaporization) from the skin surface, lowering body temperature during thermoregulation.',
          solution:
            'When sweat evaporates from the skin surface, it absorbs **heat energy** from the body. This cooling effect prevents overheating and helps maintain a **constant internal body temperature** (thermoregulation).',
          rubric: [
            {
              code: 'A1',
              text: 'Explains that evaporation of sweat removes heat to cool the body / regulate body temperature'
            }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Role of Skin Hair in Temperature Regulation',
      marks: 1,
      stem: 'Human skin contains hair follicles and erector muscles that respond to changes in environmental temperature.',
      parts: [
        {
          label: 'f',
          marks: 1,
          prompt:
            'What is the advantage of hair standing upright?\nA. Increases heat loss from the skin surface\nB. Reduces blood flow near the skin surface\nC. Traps a layer of air for heat insulation\nD. Produces more sweat on the skin surface',
          answer: 'C. Traps a layer of air for heat insulation',
          principle:
            'Air is a poor conductor of heat; upright hairs trap a stationary insulating layer of air close to the skin to reduce heat loss in cold conditions.',
          solution:
            'When body temperature falls, erector muscles contract and pull skin hairs upright. Upright hairs **trap a thick layer of air** near the skin surface. Because air is a thermal insulator, this trapped layer reduces heat loss to the surroundings.\n\nTherefore, the correct option is **C. Traps a layer of air for heat insulation**.',
          rubric: [
            { code: 'A1', text: 'Selects C (Traps a layer of air for heat insulation)' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Skin Blood Flow and Thermoregulation During Exercise',
      marks: 3,
      stem: 'Blood flow in skin capillaries changes in response to changes in body temperature.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'What happens to the blood vessels in the skin when body temperature rises during exercise?',
          answer:
            'The arterioles (blood vessels) in the skin widen (dilate / undergo vasodilation), increasing blood flow near the skin surface.',
          principle:
            'Vasodilation widens skin arterioles when core temperature rises, routing more warm blood toward the skin capillaries.',
          solution:
            'When body temperature rises during exercise, the arterioles supplying the skin capillaries **dilate (widen)**—a process called **vasodilation**—allowing more blood to flow near the surface of the skin.',
          rubric: [
            {
              code: 'A1',
              text: 'States that the skin blood vessels / arterioles dilate (widen / undergo vasodilation)'
            }
          ]
        },
        {
          label: 'b',
          marks: 1,
          prompt: 'Explain why an athlete’s face becomes red during a long race.',
          answer:
            'Vasodilation increases the volume of warm blood flowing through capillaries near the surface of the facial skin, making the skin appear red or flushed.',
          principle:
            'Increased blood flow through superficial skin capillaries brings more red blood cells close to the skin surface, causing flushing.',
          solution:
            'During a long race, body temperature increases and triggers **vasodilation** in the skin arterioles. As a result, **more blood flows through the capillaries close to the skin surface** of the face, giving the skin a red appearance.',
          rubric: [
            {
              code: 'A1',
              text: 'Explains that more blood flows close to the skin surface due to vasodilation'
            }
          ]
        },
        {
          label: 'c',
          marks: 1,
          prompt: 'How does this change in blood flow help to control body temperature?',
          answer:
            'Having more warm blood close to the skin surface increases heat loss from the blood to the surroundings (by radiation, conduction, and convection), cooling the body back toward normal temperature.',
          principle:
            'Bringing warm blood closer to the body surface steepens the thermal gradient to the external environment, accelerating heat dissipation.',
          solution:
            'When more warm blood flows near the skin surface, **more heat energy can be transferred from the blood to the surrounding air** (by radiation, conduction, and convection). This lowers body temperature back toward its normal set point.',
          rubric: [
            {
              code: 'A1',
              text: 'Explains that increased blood flow near the surface increases heat loss to the surroundings to cool the body'
            }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Shivering Response to Falling Body Temperature',
      marks: 2,
      stem: 'When body temperature falls, shivering may occur.',
      parts: [
        {
          label: 'a',
          marks: 1,
          prompt:
            'What is shivering?\nA. Slow muscle contraction\nB. Rapid muscle contraction\nC. Widening of blood vessel\nD. Increased sweat production',
          answer: 'B. Rapid muscle contraction',
          principle:
            'Shivering consists of involuntary, rapid, repeated contractions of skeletal muscles triggered by the hypothalamus when body temperature drops.',
          solution:
            'Shivering is an involuntary response to cold involving **rapid contractions and relaxations of skeletal muscles**.\n- Widening of blood vessels (vasodilation) and increased sweat production are cooling responses to heat.\n\nTherefore, the correct option is **B. Rapid muscle contraction**.',
          rubric: [{ code: 'A1', text: 'Selects B (Rapid muscle contraction)' }]
        },
        {
          label: 'b',
          marks: 1,
          prompt:
            'How does shivering help to increase body temperature?\nA. Increases heat production in the body\nB. Increases heat loss from the skin\nC. Reduces metabolic activity\nD. Promotes cooling activity',
          answer: 'A. Increases heat production in the body',
          principle:
            'Rapid muscle contraction requires increased cellular respiration in muscle cells, which releases thermal energy as a by-product to warm the body.',
          solution:
            'During shivering, muscle cells carry out **more cellular respiration** to supply energy for rapid contractions. Respiration releases thermal energy, which **increases heat production in the body** and helps raise body temperature back to normal.\n\nTherefore, the correct option is **A. Increases heat production in the body**.',
          rubric: [{ code: 'A1', text: 'Selects A (Increases heat production in the body)' }]
        }
      ]
    }
  ]
};
