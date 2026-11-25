/**
 * Structured Practice Set: Biology Grade 9 – Genetics & Inheritance (IGCSE Practice)
 * Source: edexcel_bio_genetics.pdf (Duta e-dukasi).
 * Original English wording is preserved throughout.
 * Section B Essays 18 and 19 (originally referencing Figure 5.1 Pedigree Charts)
 * are omitted because the pedigree diagram graphics are unavailable in the extracted source.
 */
export default {
  id: 'ipa9-edexcel-bio-genetics',
  slug: 'edexcel-biology-genetics-inheritance',
  subject: 'ipa',
  grade: 9,
  track: 'cambridge-style',
  topic: 'Unit 18: Genetics & Inheritance (Heredity, Crosses & Pedigrees)',
  relatedChapterIds: ['ipa9-bab6-pewarisan-sifat-bioteknologi'],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'IGCSE Biology',
  title: 'Biology Grade 9 – Genetics & Inheritance (IGCSE Practice)',
  totalMarks: 92,
  instructions:
    'Answer all 28 questions: Section A (Short Answer Questions 1–10, 2 marks each) and Section B (Essay & Structured Questions 1–17 and 20, 4 marks each). Show complete genetic working, Punnett squares, gamete separation, and clear biological reasoning where required. Note: Section B Essays 18 and 19 are omitted because they depend on Figure 5.1 (Pedigree Charts: Family Tree I & Family Tree II), whose visual pedigree diagrams are missing from the extracted source.',
  source: {
    org: 'Duta e-dukasi',
    file: 'edexcel_bio_genetics.pdf',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Section A – Q1: Chromosome Structure (Centromere & Telomere)',
      marks: 2,
      stem: 'Figure 1.1 summarizes the structural organization of genetic material in a cell nucleus: a replicated chromosome consists of a short arm and a long arm joined at Structure X, with protective end tips labelled Region Y.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Refer to Figure 1.1 above. Identify the specific biological terms for Structure X (which joins sister chromatids) and Region Y (the protective terminal end of a chromosome).',
          answer: 'Structure X: Centromere; Region Y: Telomere',
          principle:
            'A replicated chromosome consists of two sister chromatids joined at the centromere and capped at each terminal tip by protective repetitive DNA sequences called telomeres.',
          solution:
            '1. **Structure X (Centromere):** The constricted region of a chromosome that joins sister chromatids together and serves as the attachment site for spindle fibres during nuclear division.\n2. **Region Y (Telomere):** The protective cap at each terminal end of a linear chromosome that prevents chromosome degradation or fusion with neighbouring chromosomes.',
          rubric: [
            { code: 'B1', text: 'Identifies Structure X correctly as Centromere' },
            { code: 'B1', text: 'Identifies Region Y correctly as Telomere' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section A – Q2: Gene Locus & Zygosity',
      marks: 2,
      stem: 'Figure 1.1 also shows a homologous pair of chromosomes (one paternal and one maternal) carrying alleles $A/A$, $b/b$, and $C/c$ at a marked location called Position Z.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Refer to the homologous chromosomes in Figure 1.1. State the exact genetic term for Position Z (the specific location of a particular gene on a chromosome) and identify the zygosity term describing the allele pair $Cc$.',
          answer: 'Position Z: Genetic locus (or locus); Zygosity of pair $Cc$: Heterozygous',
          principle:
            'Each gene occupies a fixed position (locus) on homologous chromosomes; possessing two different alleles at a locus is termed heterozygous.',
          solution:
            '1. **Position Z (Genetic locus / locus):** The fixed physical position on a chromosome where a particular gene is located.\n2. **Zygosity of pair $Cc$ (Heterozygous):** Because the paternal chromosome carries the dominant allele $C$ and the maternal chromosome carries the recessive allele $c$ at the same locus, the two alleles are different, so the condition is heterozygous.',
          rubric: [
            { code: 'B1', text: 'Identifies Position Z correctly as genetic locus (or locus)' },
            { code: 'B1', text: 'Identifies the zygosity of allele pair $Cc$ as heterozygous' }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Section A – Q3: Meiosis & Homologous Chromosome Separation',
      marks: 2,
      stem: 'Gametes are produced in human reproductive organs by reductive nuclear division so that chromosome number is halved from diploid ($2n$) to haploid ($n$).',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'During cellular division in human reproductive organs, homologous pairs of chromosomes separate so that each gamete receives only one chromosome from each pair. Name the specific type and stage (phase) of cell division shown when homologous pairs separate.',
          answer: 'Meiosis, specifically Anaphase I',
          principle:
            'Reduction division in gamete formation occurs via meiosis; homologous chromosome pairs are pulled apart to opposite poles during Anaphase I.',
          solution:
            '1. **Type of cell division:** **Meiosis** (reductive cell division producing haploid gametes in reproductive organs).\n2. **Specific stage (phase):** **Anaphase I**, during which homologous chromosome pairs separate and move toward opposite poles of the cell (whereas sister chromatids separate later in Anaphase II).',
          rubric: [
            { code: 'B1', text: 'Names the type of cell division as Meiosis' },
            { code: 'B1', text: 'Names the specific stage as Anaphase I' }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Section A – Q4: Mendel\'s Law of Segregation',
      marks: 2,
      stem: 'Gregor Mendel formulated fundamental laws of inheritance based on his breeding experiments with pea plants (*Pisum sativum*).',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'State the formal name of Mendel\'s Law which states that the members of each pair of alleles separate during the formation of gametes so that only one allele is carried in a single gamete.',
          answer: 'The Law of Segregation (Mendel\'s First Law)',
          principle:
            'Mendel\'s First Law (Law of Segregation) describes how the two alleles of a gene pair separate equally into gametes during meiosis.',
          solution:
            'The formal name is **The Law of Segregation** (also known as **Mendel\'s First Law**). It states that the two alleles for each trait segregate (separate) during gamete formation so that each gamete carries only one allele for that gene.',
          rubric: [
            { code: 'B1', text: 'Recognizes the principle as Mendel\'s First Law' },
            { code: 'A1', text: 'States the formal name accurately as The Law of Segregation' }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Section A – Q5: Mendel\'s Pea Plant Recessive Traits',
      marks: 2,
      stem: 'In his classic genetics experiments, Gregor Mendel studied seven contrasting characters in garden pea plants (*Pisum sativum*), each having a dominant and a recessive phenotype.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'In Gregor Mendel\'s pea plant experiments, he studied seven contrasting characteristics. State the recessive trait for pod shape (where inflated/full is dominant) and the recessive trait for flower position (where axial is dominant).',
          answer: 'Recessive pod shape: Constricted (or flat); Recessive flower position: Terminal',
          principle:
            'In *Pisum sativum*, inflated pod shape is dominant over constricted pod shape, and axial flower position is dominant over terminal flower position.',
          solution:
            '1. **Recessive Pod Shape:** **Constricted** (also described as pinched or flat, contrasting with the dominant inflated/full pod).\n2. **Recessive Flower Position:** **Terminal** (flowers located at the tip of the stem, contrasting with the dominant axial position along the stem).',
          rubric: [
            { code: 'B1', text: 'States constricted (or flat) as the recessive pod shape' },
            { code: 'B1', text: 'States terminal as the recessive flower position' }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Section A – Q6: Diagnostic Test Cross',
      marks: 2,
      stem: 'In pea plants, the allele for tall stem ($T$) is dominant over the allele for dwarf stem ($t$).',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'A tall pea plant of unknown genotype is crossed with a homozygous recessive dwarf pea plant ($tt$) in a breeding experiment. State the name of this diagnostic cross and deduce the genotype of the tall parent if $100\\%$ of the offspring are tall.',
          answer: 'Cross type: Test cross; Tall parent genotype: Homozygous dominant ($TT$)',
          principle:
            'A test cross pairs an individual of unknown dominant phenotype with a homozygous recessive ($tt$) tester; if all offspring show the dominant phenotype, the unknown parent must be homozygous dominant ($TT$).',
          solution:
            '1. **Cross type:** **Test cross** (crossing an organism showing the dominant phenotype with a homozygous recessive organism to reveal its genotype).\n2. **Tall parent genotype:** Because the dwarf parent ($tt$) contributes only recessive $t$ alleles, obtaining $100\\%$ tall offspring ($Tt$) means the tall parent contributed only dominant $T$ alleles. Therefore, the tall parent\'s genotype is **homozygous dominant ($TT$)**.',
          rubric: [
            { code: 'B1', text: 'Identifies the diagnostic procedure as a test cross' },
            { code: 'A1', text: 'Deduces the tall parent genotype as homozygous dominant ($TT$)' }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Section A – Q7: Codominance in Snapdragons',
      marks: 2,
      stem: 'In snapdragon plants (*Antirrhinum*), flower colour is governed by two codominant alleles: $R$ (red) and $W$ (white). Heterozygotes ($RW$) have pink flowers.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'If two pink-flowered snapdragon plants ($RW$) are crossed, state the expected phenotypic ratio (with colours) and the percentage of white-flowered offspring.',
          answer: 'Phenotypic ratio: $1\\text{ Red} : 2\\text{ Pink} : 1\\text{ White}$; White offspring: $25\\%$',
          principle:
            'In codominance, crossing two heterozygotes ($RW \\times RW$) yields genotypes $1\\,RR : 2\\,RW : 1\\,WW$, corresponding directly to three distinct phenotypes.',
          solution:
            'Crossing $RW \\times RW$ produces gametes $R$ and $W$ from each parent:\n- Offspring genotypes: $1\\,RR : 2\\,RW : 1\\,WW$\n- Offspring phenotypes: **$1\\text{ Red} : 2\\text{ Pink} : 1\\text{ White}$**\n- Percentage of white-flowered offspring ($WW$): $\\frac{1}{4} \\times 100\\% = 25\\%$.',
          rubric: [
            { code: 'A1', text: 'States exact phenotypic ratio with colours as $1\\text{ Red} : 2\\text{ Pink} : 1\\text{ White}$' },
            { code: 'A1', text: 'Calculates white-flowered offspring as $25\\%$ (or $1/4$)' }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Section A – Q8: Human Karyotype Notation',
      marks: 2,
      stem: 'A normal diploid human somatic cell contains $46$ chromosomes arranged in $23$ homologous pairs.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'A normal human karyotype consists of autosomes and gonosomes (sex chromosomes). Write the complete chromosomal notation (showing the exact number of autosomes plus sex chromosomes) for a normal human somatic female cell and a normal human somatic male cell.',
          answer:
            'Female karyotype notation: $44 + \\text{XX}$ (or $22$ pairs autosomes $+\\ \\text{XX}$); Male karyotype notation: $44 + \\text{XY}$ (or $22$ pairs autosomes $+\\ \\text{XY}$)',
          principle:
            'Human somatic cells contain $44$ autosomes ($22$ pairs) plus $2$ sex chromosomes ($\\text{XX}$ in females, $\\text{XY}$ in males).',
          solution:
            'Out of $46$ chromosomes in a normal human somatic cell, $44$ ($22$ pairs) are autosomes and $2$ ($1$ pair) are gonosomes (sex chromosomes):\n- **Female somatic cell:** **$44 + \\text{XX}$** (or $22\\text{ pairs of autosomes} + \\text{XX}$)\n- **Male somatic cell:** **$44 + \\text{XY}$** (or $22\\text{ pairs of autosomes} + \\text{XY}$)',
          rubric: [
            { code: 'A1', text: 'Writes female karyotype notation accurately as $44 + \\text{XX}$' },
            { code: 'A1', text: 'Writes male karyotype notation accurately as $44 + \\text{XY}$' }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Section A – Q9: Polygenic Inheritance & Skin Pigment',
      marks: 2,
      stem: 'Unlike discontinuous traits controlled by a single gene, traits such as human skin colour and stature exhibit continuous variation across a population.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'Human skin colour and height are controlled by the cumulative effects of two or more genes working together. State the specific term for this pattern of inheritance and name the dark colour pigment whose quantity determines skin darkness.',
          answer: 'Inheritance pattern: Polygenic inheritance; Skin pigment: Melanin',
          principle:
            'Polygenic inheritance occurs when multiple genes contribute additively to a single quantitative phenotype; melanin concentration determines skin pigmentation.',
          solution:
            '1. **Inheritance pattern:** **Polygenic inheritance** (multiple genes at different loci exerting cumulative additive effects on a single trait).\n2. **Skin pigment:** **Melanin** (a dark brown/black pigment produced by melanocytes; greater amounts of melanin produce darker skin).',
          rubric: [
            { code: 'B1', text: 'Identifies the inheritance pattern as polygenic inheritance' },
            { code: 'B1', text: 'Identifies the skin pigment correctly as melanin' }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Section A – Q10: X-Linked Colourblindness Genotypes',
      marks: 2,
      stem: 'Red-green colourblindness is an X-linked recessive condition, where $X^B$ denotes the dominant allele for normal colour vision and $X^b$ denotes the recessive allele for colourblindness.',
      parts: [
        {
          label: 'a',
          marks: 2,
          prompt:
            'In a family pedigree chart investigating X-linked recessive colourblindness (where $X^B$ is normal vision and $X^b$ is colourblindness), state the exact genotype of a carrier female who has normal vision and the genotype of an affected male.',
          answer: 'Carrier female genotype: $X^B X^b$; Affected male genotype: $X^b Y$',
          principle:
            'A carrier female is heterozygous ($X^B X^b$) with normal vision because $X^B$ masks $X^b$, whereas a male is hemizygous ($XY$) and is affected whenever his single X chromosome carries $X^b$.',
          solution:
            '1. **Carrier female (normal vision):** **$X^B X^b$** — she possesses two X chromosomes, one carrying the normal dominant allele $X^B$ (so her vision is normal) and one carrying the recessive allele $X^b$.\n2. **Affected male:** **$X^b Y$** — he has only one X chromosome paired with a Y chromosome (which lacks the colour vision locus), so a single $X^b$ allele expresses colourblindness.',
          rubric: [
            { code: 'A1', text: 'States carrier female genotype as $X^B X^b$' },
            { code: 'A1', text: 'States affected male genotype as $X^b Y$' }
          ]
        }
      ]
    },
    {
      no: 11,
      title: 'Section B – Essay 1: Genetic Terminology & Pea Flower Colour',
      marks: 4,
      stem: 'Accurate use of genetic vocabulary is essential when describing Mendelian inheritance.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Distinguish clearly between the following pairs of genetic terms: (a) Gene and Allele, (b) Dominant allele and Recessive allele, and (c) Genotype and Phenotype. Illustrate your explanation using the flower colour of pea plants (where $B$ = purple allele and $b$ = white allele).',
          answer:
            'A gene is a heritable unit of DNA at a specific locus controlling a trait, while alleles are alternative forms of that gene ($B$ or $b$). A dominant allele ($B$) masks the recessive allele ($b$) in heterozygotes, whereas $b$ is expressed only when homozygous ($bb$). Genotype is the allele combination ($BB$, $Bb$, $bb$), while phenotype is the observable trait (purple for $BB$/$Bb$, white for $bb$).',
          principle:
            'Genes are units of heredity occupying fixed loci; alleles are alternative versions of a gene whose dominance relationship determines how a genotype translates into an observable phenotype.',
          solution:
            '**1. Gene vs. Allele:**\n- A **gene** is a heritable unit of DNA located at a specific locus on a chromosome that codes for a particular characteristic (such as flower colour in pea plants).\n- **Alleles** are alternative forms of the same gene occupying the same locus on homologous chromosomes (e.g., allele $B$ for purple flowers and allele $b$ for white flowers).\n\n**2. Dominant Allele vs. Recessive Allele:**\n- A **dominant allele** ($B$) expresses its trait whenever at least one copy is present, masking the expression of the alternative allele in a heterozygote ($Bb$).\n- A **recessive allele** ($b$) is masked in the presence of a dominant allele and is expressed in the phenotype only in the homozygous recessive condition ($bb$).\n\n**3. Genotype vs. Phenotype (Illustrated with Pea Flower Colour):**\n- **Genotype** refers to the exact set of alleles an organism carries in its cells (e.g., $BB$, $Bb$, or $bb$).\n- **Phenotype** refers to the observable physical characteristic produced by the genotype. Here, genotypes $BB$ (homozygous dominant) and $Bb$ (heterozygous) produce the **purple flower** phenotype, whereas genotype $bb$ (homozygous recessive) produces the **white flower** phenotype.',
          rubric: [
            { code: 'B1', text: 'Distinguishes accurately between gene (heritable DNA unit at a locus) and allele (alternative forms of a gene)' },
            { code: 'B1', text: 'Distinguishes between dominant allele (masks alternative allele) and recessive allele (expressed only when homozygous)' },
            { code: 'B1', text: 'Contrasts genotype (genetic constitution) with phenotype (observable physical feature)' },
            { code: 'A1', text: 'Correctly applies the pea flower example ($BB$ and $Bb$ = purple flowers; $bb$ = white flowers)' }
          ]
        }
      ]
    },
    {
      no: 12,
      title: 'Section B – Essay 2: Human Karyotype & Meiotic Chromosome Separation',
      marks: 4,
      stem: 'Human somatic cells are diploid, whereas gametes produced by meiosis are haploid.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Describe the structure of a human karyotype by explaining the difference between autosomes and sex chromosomes (gonosomes). Explain how the separation of homologous chromosomes during meiosis ensures that each gamete carries only one allele for any given trait.',
          answer:
            'A human karyotype contains $46$ chromosomes ($23$ pairs): $22$ pairs of autosomes (non-sex chromosomes identical in both sexes) and $1$ pair of gonosomes ($\\text{XX}$ in females, $\\text{XY}$ in males). During Anaphase I of meiosis, maternal and paternal homologous chromosomes (carrying corresponding gene loci) separate into different daughter cells, ensuring each haploid gamete receives only one allele per gene.',
          principle:
            'Diploid somatic cells carry paired homologous chromosomes ($22$ autosomal pairs $+\\ 1$ sex-chromosome pair); meiotic segregation separates homologous pairs into haploid gametes containing one allele per locus.',
          solution:
            '1. **Human Karyotype Structure:** A karyotype is the complete set of chromosomes in an individual\'s cell. A normal human somatic cell contains **$46$ chromosomes ($23$ pairs)**.\n2. **Autosomes vs. Gonosomes:**\n   - **Autosomes ($22$ pairs, numbered $1$–$22$):** Non-sex chromosomes that govern general body characteristics and are structurally matched in both males and females.\n   - **Sex chromosomes / Gonosomes ($1$ pair):** Chromosomes that determine biological sex—females have two homologous X chromosomes (**$\\text{XX}$**), while males have one X and one smaller Y chromosome (**$\\text{XY}$**).\n3. **Homologous Chromosomes & Meiosis:** Homologous chromosomes are pairs (one inherited from the mother and one from the father) that share the same length, centromere position, and gene loci. During **Meiosis (Anaphase I)**, each homologous pair separates and moves into different daughter cells. Because the two alleles of a gene sit on opposite chromosomes of a homologous pair, separating the pair guarantees that each resulting haploid gamete carries **only one chromosome from each pair**, and therefore **only one allele** for any given trait.',
          rubric: [
            { code: 'B1', text: 'Defines karyotype as an organism\'s complete chromosome set ($46$ chromosomes / $23$ pairs in humans)' },
            { code: 'B1', text: 'Distinguishes $22$ pairs of autosomes from $1$ pair of sex chromosomes / gonosomes ($\\text{XX}$ / $\\text{XY}$)' },
            { code: 'B1', text: 'Describes homologous chromosomes (maternal + paternal pair sharing the same gene loci)' },
            { code: 'M1', text: 'Explains how separation of homologous pairs during meiosis (Anaphase I) leaves $1$ allele per gamete' }
          ]
        }
      ]
    },
    {
      no: 13,
      title: 'Section B – Essay 3: Mendel\'s Five Conclusions & Laws of Heredity',
      marks: 4,
      stem: 'Table 2.1: Quantitative Results from Gregor Mendel\'s Monohybrid Crosses in Pea Plants (*Pisum sativum*)\n\n| Character Investigated | Parental Cross ($P_1$) | $F_1$ Phenotype | $F_2$ Offspring Counts (Self-Pollination of $F_1$) | Calculated $F_2$ Ratio |\n| :--- | :--- | :--- | :--- | :---: |\n| Seed Shape | Pure Round $\\times$ Pure Wrinkled | All Round | $5{,}474$ Round seeds : $1{,}850$ Wrinkled seeds | $2.96 : 1$ |\n| Seed Colour | Pure Yellow $\\times$ Pure Green | All Yellow | $6{,}022$ Yellow seeds : $2{,}001$ Green seeds | $3.01 : 1$ |\n| Stem Height | Pure Tall $\\times$ Pure Dwarf | All Tall | $787$ Tall plants : $277$ Dwarf plants | $2.84 : 1$ |\n| Pod Colour | Pure Green $\\times$ Pure Yellow | All Green | $428$ Green pods : $152$ Yellow pods | $2.82 : 1$ |',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Refer to Table 2.1 above. Summarize the five fundamental conclusions Gregor Mendel deduced about heritable units from these experiments, and state both his Law of Segregation and Law of Independent Assortment.',
          answer:
            'Mendel concluded: (1) heritable units (genes) pass between generations; (2) each unit has alternative forms (alleles); (3) organisms possess two alleles per trait; (4) gametes carry one allele per trait; (5) one allele is dominant over the recessive allele. Law of Segregation: allele pairs separate during gamete formation. Law of Independent Assortment: alleles of different genes assort independently during gamete formation.',
          principle:
            'Consistent $F_1$ uniformity and $\\approx 3:1$ $F_2$ ratios demonstrated particulate inheritance via paired alleles that segregate during gametogenesis and assort independently across unlinked genes.',
          solution:
            '**Five Fundamental Conclusions from Mendel\'s Experiments:**\n1. A discrete **heritable unit** (now called a gene) is passed intact from parent to offspring across generations.\n2. Each heritable unit exists in **alternative forms** (now called alleles), such as round vs. wrinkled seed.\n3. Every diploid organism possesses **two alleles** for each characteristic (one inherited from each parent).\n4. During gamete formation, each **gamete receives only one allele** for each characteristic.\n5. One allele can be **dominant** over the alternative **recessive** allele, explaining why the recessive trait disappears in $F_1$ and reappears in $F_2$ at an approximate $3:1$ ratio.\n\n**Mendel\'s Two Laws of Heredity:**\n- **Law of Segregation (First Law):** The two alleles of a gene pair separate (segregate) during gamete formation so that each gamete carries only one allele from each pair.\n- **Law of Independent Assortment (Second Law):** Allele pairs of different genes segregate independently of one another during gamete formation (for genes on different chromosomes), so the inheritance of one trait does not influence the inheritance of another.',
          rubric: [
            { code: 'B1', text: 'Summarizes heritable units (genes), alternative forms (alleles), and two alleles per organism' },
            { code: 'B1', text: 'States that gametes carry one allele per feature and one allele is dominant over the other' },
            { code: 'B1', text: 'States the Law of Segregation accurately' },
            { code: 'B1', text: 'States the Law of Independent Assortment accurately' }
          ]
        }
      ]
    },
    {
      no: 14,
      title: 'Section B – Essay 4: Six-Step Monohybrid Cross (Seed Shape)',
      marks: 4,
      stem: 'From Table 2.1, crossing pure round-seeded pea plants with pure wrinkled-seeded pea plants yields all round-seeded $F_1$ hybrids. Self-pollinating the $F_1$ plants produces $5{,}474$ round seeds and $1{,}850$ wrinkled seeds ($2.96 : 1$) in the $F_2$ generation.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Using the Seed Shape row in Table 2.1 (let $R$ represent the allele for round seed and $r$ represent the allele for wrinkled seed), follow all six standard steps of a monohybrid cross to show how two $F_1$ heterozygous plants produce the $F_2$ generation. Include parental genotypes, gametes, a Punnett square, the genotypic ratio, the phenotypic ratio, and the expected percentage of wrinkled seeds.',
          answer:
            '$F_1$ cross $Rr \\times Rr$ with gametes $R, r$ gives $F_2$ genotypes $1\\,RR : 2\\,Rr : 1\\,rr$, phenotypic ratio $3\\text{ Round} : 1\\text{ Wrinkled}$, and $25\\%$ expected wrinkled seeds.',
          principle:
            'A monohybrid cross between two heterozygotes ($Rr \\times Rr$) follows random fusion of $R$ and $r$ gametes in equal $1:1$ proportions, yielding a $1:2:1$ genotypic ratio and $3:1$ phenotypic ratio.',
          solution:
            '**Six Standard Steps of the Monohybrid Cross ($F_1 \\times F_1 \\longrightarrow F_2$):**\n\n1. **Parental ($F_1$) Phenotypes:** Heterozygous Round seed $\\times$ Heterozygous Round seed\n2. **Parental ($F_1$) Genotypes:** $Rr \\times Rr$\n3. **Gametes Produced (via Meiosis):** Each parent produces $R$ and $r$ gametes in equal ($50\\% : 50\\%$) proportions.\n4. **Punnett Square (Random Fertilisation):**\n\n| Gametes | $R$ | $r$ |\n| :---: | :---: | :---: |\n| **$R$** | $RR$ (Round) | $Rr$ (Round) |\n| **$r$** | $Rr$ (Round) | $rr$ (Wrinkled) |\n\n5. **Offspring ($F_2$) Genotypic Ratio:** $1\\,RR : 2\\,Rr : 1\\,rr$\n6. **Offspring ($F_2$) Phenotypic Ratio & Percentage:**\n   - Phenotypic ratio: **$3\\text{ Round} : 1\\text{ Wrinkled}$**\n   - Expected percentage of wrinkled seeds ($rr$): $\\frac{1}{4} \\times 100\\% = \\mathbf{25\\%}$ (closely matching Mendel\'s observed $\\frac{1{,}850}{5{,}474 + 1{,}850} = 25.26\\%$).',
          rubric: [
            { code: 'M1', text: 'States $F_1$ parental genotypes ($Rr \\times Rr$) and gametes ($R, r$ from each parent)' },
            { code: 'M1', text: 'Constructs a correct Punnett square showing $RR, Rr, Rr, rr$' },
            { code: 'A1', text: 'States $F_2$ genotypic ratio ($1\\,RR : 2\\,Rr : 1\\,rr$) and phenotypic ratio ($3\\text{ Round} : 1\\text{ Wrinkled}$)' },
            { code: 'A1', text: 'Calculates expected percentage of wrinkled seeds correctly as $25\\%$' }
          ]
        }
      ]
    },
    {
      no: 15,
      title: 'Section B – Essay 5: Predicted vs. Observed F2 Ratios',
      marks: 4,
      stem: 'In Table 2.1, Mendel\'s observed $F_2$ ratios were $2.96 : 1$ (seed shape), $3.01 : 1$ (seed colour), $2.84 : 1$ (stem height), and $2.82 : 1$ (pod colour), rather than an exact $3.00 : 1$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Examine the $F_2$ ratios in Table 2.1 (e.g., $2.84 : 1$ for stem height and $2.82 : 1$ for pod colour). Explain biologically why actual breeding experiments rarely produce an exact $3.00 : 1$ ratio, referring to random fertilisation and biological chance events.',
          answer:
            'The $3:1$ ratio is a theoretical probability prediction. Actual counts deviate slightly because fertilisation between male and female gametes is random by chance, and biological survival factors (unfertilised ova, failed seed germination, seedling death from pests or weather) alter observed numbers. Larger sample sizes reduce relative deviation and approach $3:1$.',
          principle:
            'Theoretical Mendelian ratios represent expected probabilities; real populations exhibit sampling variance due to stochastic fertilisation and differential survival, converging toward the expectation as sample size increases.',
          solution:
            '1. **Theoretical vs. Observed Ratios:** The $3:1$ Mendelian ratio is a **theoretical predicted probability**, not a rigid guarantee for finite biological counts.\n2. **Random Fertilisation:** Which specific pollen grain (carrying $T$ or $t$) fuses with which specific ovum (carrying $T$ or $t$) is a **random chance event**, just like flipping a coin—small deviations from the exact expected fraction occur naturally.\n3. **Biological Survival Factors:** Not every gamete or zygote reaches maturity: some pollen grains fail to fertilise ova, some seeds fail to germinate, and some seedlings die before maturity due to pests, disease, or environmental stress.\n4. **Effect of Sample Size:** When sample sizes are larger (e.g., $8{,}023$ seeds for seed colour giving $3.01 : 1$ vs. $580$ pods for pod colour giving $2.82 : 1$), random fluctuations average out and the observed ratio converges closer to $3.00 : 1$.',
          rubric: [
            { code: 'B1', text: 'Distinguishes theoretical predicted probability ($3:1$) from actual observed counts' },
            { code: 'B1', text: 'Explains that fertilisation between gametes is a random chance event' },
            { code: 'B1', text: 'Provides biological survival factors (e.g., failed fertilisation, non-germination, seedling death)' },
            { code: 'B1', text: 'Notes that larger sample sizes bring observed ratios statistically closer to $3:1$' }
          ]
        }
      ]
    },
    {
      no: 16,
      title: 'Section B – Essay 6: Recessive Offspring from Dominant Parents (Adenium)',
      marks: 4,
      stem: 'In desert rose (*Adenium*), pink-purple flower colour is controlled by a dominant allele ($B$) and white flower colour by a recessive allele ($b$).',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'A plant breeder grows a pink-purple desert rose (*Adenium*) plant from seed, and the resulting offspring produces pure white flowers. Explain how two parent plants exhibiting a dominant phenotype can produce offspring exhibiting a recessive phenotype. Support your explanation with a complete genetic cross diagram.',
          answer:
            'Both pink-purple parents must be heterozygous ($Bb$), where dominant $B$ masks recessive $b$. Each parent produces $B$ and $b$ gametes ($50\\%$ each); random fusion of two $b$ gametes produces a homozygous recessive ($bb$) white-flowered offspring ($25\\%$ probability).',
          principle:
            'Two dominant-phenotype parents can produce recessive-phenotype offspring only if both parents are heterozygous carriers ($Bb$) of the masked recessive allele.',
          solution:
            '**Biological Explanation:**\nTwo parent *Adenium* plants showing the dominant pink-purple phenotype can produce pure white-flowered ($bb$) offspring if **both parents are heterozygous ($Bb$)**. In each parent, the dominant allele $B$ masks the recessive allele $b$. During meiosis, alleles segregate so each parent produces $50\\%$ $B$ gametes and $50\\%$ $b$ gametes. When a pollen gamete carrying $b$ randomly fertilises an ovum carrying $b$, the offspring inherits genotype $bb$ and expresses white flowers.\n\n**Genetic Cross Diagram:**\n- **Parental Phenotypes:** Pink-purple ($Bb$) $\\times$ Pink-purple ($Bb$)\n- **Parental Gametes:** $B, b \\times B, b$\n\n| Gametes | $B$ | $b$ |\n| :---: | :---: | :---: |\n| **$B$** | $BB$ (Pink-purple) | $Bb$ (Pink-purple) |\n| **$b$** | $Bb$ (Pink-purple) | $bb$ (White) |\n\n- **Genotypic Ratio:** $1\\,BB : 2\\,Bb : 1\\,bb$\n- **Phenotypic Ratio:** $3\\text{ Pink-purple} : 1\\text{ White}$ ($25\\%$ probability of white flowers).',
          rubric: [
            { code: 'B1', text: 'Identifies that both dominant-phenotype parents must be heterozygous ($Bb$)' },
            { code: 'B1', text: 'Explains masking of the recessive allele $b$ by the dominant allele $B$ in the parents' },
            { code: 'M1', text: 'Shows gamete segregation ($B$ and $b$) and constructs the Punnett square for $Bb \\times Bb$' },
            { code: 'A1', text: 'Shows homozygous recessive offspring ($bb$) giving $25\\%$ white-flowered phenotype' }
          ]
        }
      ]
    },
    {
      no: 17,
      title: 'Section B – Essay 7: Guinea Pig Fur Colour Cross',
      marks: 4,
      stem: 'In guinea pigs, the allele for black fur ($B$) is completely dominant over the allele for white fur ($b$).',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'A heterozygous black guinea pig is crossed with a white guinea pig. Determine the parental genotypes, gamete types, Punnett square, offspring genotypic and phenotypic ratios, and calculate how many offspring would be expected to have white fur in a litter of $8$ pups.',
          answer:
            'Cross $Bb \\times bb$ gives genotypic ratio $1\\,Bb : 1\\,bb$, phenotypic ratio $1\\text{ Black} : 1\\text{ White}$ ($50\\%$ each), and $4$ expected white pups in a litter of $8$.',
          principle:
            'Crossing a heterozygote ($Bb$) with a homozygous recessive ($bb$) yields a $1:1$ genotypic and phenotypic ratio.',
          solution:
            '1. **Parental Genotypes:**\n   - Heterozygous black guinea pig: **$Bb$**\n   - White guinea pig (homozygous recessive): **$bb$**\n2. **Gamete Types:**\n   - Black parent ($Bb$) produces **$B$** and **$b$** gametes.\n   - White parent ($bb$) produces only **$b$** gametes.\n3. **Punnett Square:**\n\n| Gametes | $B$ | $b$ |\n| :---: | :---: | :---: |\n| **$b$** | $Bb$ (Black) | $bb$ (White) |\n| **$b$** | $Bb$ (Black) | $bb$ (White) |\n\n4. **Ratios:**\n   - **Genotypic ratio:** $2\\,Bb : 2\\,bb = \\mathbf{1\\,Bb : 1\\,bb}$\n   - **Phenotypic ratio:** **$1\\text{ Black} : 1\\text{ White}$** ($50\\%$ Black fur : $50\\%$ White fur)\n5. **Expected White Pups in a Litter of $8$:**\n$$\\text{Expected white pups} = 50\\% \\times 8 = \\frac{1}{2} \\times 8 = \\mathbf{4\\text{ white pups}}$$',
          rubric: [
            { code: 'M1', text: 'States parental genotypes ($Bb \\times bb$) and gamete types ($B, b$ and $b$)' },
            { code: 'M1', text: 'Constructs a correct Punnett square for $Bb \\times bb$' },
            { code: 'A1', text: 'States genotypic ratio ($1\\,Bb : 1\\,bb$) and phenotypic ratio ($1\\text{ Black} : 1\\text{ White}$ or $50\\% : 50\\%$)' },
            { code: 'A1', text: 'Calculates $50\\% \\times 8 = 4$ expected white pups' }
          ]
        }
      ]
    },
    {
      no: 18,
      title: 'Section B – Essay 8: Purpose & Design of a Test Cross',
      marks: 4,
      stem: 'In pea plants, tall stem ($T$) is dominant over dwarf stem ($t$). A breeder needs to verify whether a tall plant is pure-breeding.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Explain why it is impossible to determine by visual inspection alone whether a tall pea plant is homozygous ($TT$) or heterozygous ($Tt$). Describe the exact experimental procedure of a test cross and explain why the test cross partner must be homozygous recessive rather than homozygous dominant.',
          answer:
            '$TT$ and $Tt$ look identical because $T$ completely masks $t$. A test cross breeds the unknown tall plant with a homozygous recessive dwarf plant ($tt$). The partner must be $tt$ because it contributes only $t$ gametes, allowing any hidden $t$ allele from the unknown parent to appear as dwarf ($tt$) offspring; crossing with $TT$ would yield $100\\%$ tall plants regardless.',
          principle:
            'Because dominant phenotypes mask heterozygosity, a test cross uses a homozygous recessive ($tt$) tester whose $t$ gametes reveal the allelic composition of the unknown parent\'s gametes.',
          solution:
            '1. **Why Visual Inspection Fails:** Both homozygous dominant ($TT$) and heterozygous ($Tt$) plants express the exact same tall phenotype because the dominant allele $T$ completely masks the recessive allele $t$.\n2. **Test Cross Procedure:** Cross the tall pea plant of unknown genotype with a **homozygous recessive dwarf pea plant ($tt$)** and observe the phenotypes of the offspring.\n3. **Why the Partner Must Be Homozygous Recessive ($tt$):** A $tt$ plant produces **only recessive $t$ gametes**, which do not mask any allele contributed by the unknown parent. Thus, the offspring phenotypes directly reflect the unknown parent\'s gametes (all tall $\\implies TT$; $\\approx 50\\%$ dwarf $\\implies Tt$).\n4. **Why Homozygous Dominant ($TT$) Fails:** If the unknown parent were crossed with a $TT$ plant, the $TT$ partner would supply a dominant $T$ allele to every zygote, producing $100\\%$ tall offspring ($TT$ or $Tt$) regardless of whether the unknown parent carried a hidden $t$ allele.',
          rubric: [
            { code: 'B1', text: 'Explains that $TT$ and $Tt$ look identical due to complete dominance masking $t$' },
            { code: 'B1', text: 'Describes the test cross as breeding the unknown organism with a homozygous recessive ($tt$) partner' },
            { code: 'B1', text: 'Explains that the $tt$ partner contributes only recessive $t$ gametes, which do not mask hidden alleles' },
            { code: 'B1', text: 'Explains why crossing with $TT$ fails (produces $100\\%$ tall offspring regardless of unknown genotype)' }
          ]
        }
      ]
    },
    {
      no: 19,
      title: 'Section B – Essay 9: Interpreting Diagnostic Test Crosses (Cases A & B)',
      marks: 4,
      stem: 'Figure 3.1: Comparative Outcomes of Two Diagnostic Test Crosses in Pea Plants (Tall vs. Dwarf)\n\n**Test Cross Case A:** Tall Parent (Genotype ?) $\\times$ Dwarf ($tt$)\n\n| Gametes | ? | ? |\n| :---: | :---: | :---: |\n| **$t$** | $Tt$ | $Tt$ |\n| **$t$** | $Tt$ | $Tt$ |\n\nObserved Outcome: **$100\\%$ Tall Offspring ($0\\%$ Dwarf)**\n\n**Test Cross Case B:** Tall Parent (Genotype ?) $\\times$ Dwarf ($tt$)\n\n| Gametes | ? | ? |\n| :---: | :---: | :---: |\n| **$t$** | $Tt$ | $tt$ |\n| **$t$** | $Tt$ | $tt$ |\n\nObserved Outcome: **$50\\%$ Tall Offspring : $50\\%$ Dwarf Offspring**',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Refer to Figure 3.1 above. After performing a test cross on an unknown tall pea plant, Mendel observed that almost half of the offspring were dwarf (as shown in Case B). Deduce the unknown parental genotypes and gamete alleles in both Case A and Case B, and explain how the appearance of dwarf offspring proves the parent\'s genotype in Case B.',
          answer:
            'Case A: unknown tall parent is $TT$ (gametes $T, T$), giving $100\\%$ $Tt$ tall. Case B: unknown tall parent is $Tt$ (gametes $T, t$), giving $1\\,Tt : 1\\,tt$ ($50\\%$ tall : $50\\%$ dwarf). Dwarf offspring ($tt$) must receive one $t$ allele from each parent, proving the tall parent carries a hidden $t$ allele.',
          principle:
            'In a test cross against $tt$, each offspring receives one $t$ allele from the tester; the presence of any $tt$ offspring proves the unknown parent produced $t$ gametes and is therefore heterozygous ($Tt$).',
          solution:
            '1. **Case A Deduction:**\n   - Observed offspring are $100\\%$ $Tt$ (all tall).\n   - Therefore, the unknown tall parent\'s genotype is **homozygous dominant ($TT$)** and its gametes are **$T$ and $T$**.\n2. **Case B Deduction:**\n   - Observed offspring are $50\\%$ $Tt$ (tall) and $50\\%$ $tt$ (dwarf), a $1:1$ ratio.\n   - Therefore, the unknown tall parent\'s genotype is **heterozygous ($Tt$)** and its gametes are **$T$ and $t$**.\n3. **Proof from Dwarf Offspring in Case B:**\n   - Dwarf offspring have the homozygous recessive genotype **$tt$**.\n   - Because an offspring inherits one allele from each parent, every $tt$ dwarf plant must have received one $t$ allele from the dwarf tester ($tt$) and **the other $t$ allele from the tall parent**. Since the tall parent shows the dominant tall phenotype (requiring at least one $T$) yet also passed on a $t$ allele, its genotype is proven to be **$Tt$**.',
          rubric: [
            { code: 'A1', text: 'Deduces Case A tall parent genotype as $TT$ with gametes $T, T$' },
            { code: 'A1', text: 'Deduces Case B tall parent genotype as $Tt$ with gametes $T, t$' },
            { code: 'M1', text: 'States Case B offspring ratio as $1\\,Tt$ ($50\\%$ tall) $: 1\\,tt$ ($50\\%$ dwarf)' },
            { code: 'B1', text: 'Explains that $tt$ dwarf offspring must inherit one $t$ allele from each parent, proving the tall parent is $Tt$' }
          ]
        }
      ]
    },
    {
      no: 20,
      title: 'Section B – Essay 10: Codominance in Snapdragon Flowers',
      marks: 4,
      stem: 'Not all traits follow strict Mendelian dominant-recessive masking; in some genes, both alleles contribute equally to the heterozygote\'s phenotype.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Define codominance and explain how it differs from complete Mendelian dominance. Using snapdragon flower colour (alleles $R$ for red and $W$ for white), show the genetic cross between a pure-breeding red snapdragon and a pure-breeding white snapdragon, and explain why the $F_1$ phenotype proves codominance.',
          answer:
            'Codominance occurs when both alleles are expressed equally in the heterozygote rather than one masking the other. Crossing $RR$ (red) $\\times$ $WW$ (white) yields $100\\%$ $RW$ pink-flowered $F_1$ plants; this third intermediate phenotype proves neither $R$ nor $W$ is completely dominant.',
          principle:
            'In codominance, heterozygotes express a distinct phenotype reflecting both alleles simultaneously, contrasting with complete dominance where heterozygotes resemble the homozygous dominant parent.',
          solution:
            '1. **Definition & Contrast with Complete Dominance:**\n   - **Codominance** is a pattern of inheritance in which two different alleles of a gene are expressed equally in the phenotype of a heterozygote.\n   - By contrast, in **complete Mendelian dominance**, the dominant allele completely masks the recessive allele, so heterozygotes have the exact same phenotype as homozygous dominant individuals.\n2. **Genetic Cross ($RR \\times WW$):**\n   - **Parental Genotypes:** Pure-breeding red ($RR$) $\\times$ Pure-breeding white ($WW$)\n   - **Gametes:** $R$ (from red parent) and $W$ (from white parent)\n\n| Gametes | $R$ | $R$ |\n| :---: | :---: | :---: |\n| **$W$** | $RW$ (Pink) | $RW$ (Pink) |\n| **$W$** | $RW$ (Pink) | $RW$ (Pink) |\n\n   - **$F_1$ Result:** $100\\%$ $RW$, all producing **pink flowers**.\n3. **Why the $F_1$ Phenotype Proves Codominance:** Instead of all $F_1$ plants being red or all white (as complete dominance would predict), $100\\%$ of the $F_1$ offspring display a **third distinct pink phenotype** because both $R$ and $W$ alleles are expressed together.',
          rubric: [
            { code: 'B1', text: 'Defines codominance as equal phenotypic expression of both alleles in a heterozygote' },
            { code: 'B1', text: 'Contrasts codominance with complete dominance (where one allele masks the other)' },
            { code: 'M1', text: 'Shows the genetic cross $RR \\times WW$ yielding $100\\%$ $RW$ offspring' },
            { code: 'A1', text: 'Explains that the third distinct intermediate (pink) $F_1$ phenotype proves codominance' }
          ]
        }
      ]
    },
    {
      no: 21,
      title: 'Section B – Essay 11: Pink × Red Snapdragon Cross',
      marks: 4,
      stem: 'Snapdragon flower colour is controlled by codominant alleles $R$ (red) and $W$ (white), where $RR$ is red, $RW$ is pink, and $WW$ is white.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'A horticulturalist crosses a pink-flowered snapdragon plant ($RW$) with a red-flowered snapdragon plant ($RR$). Construct a Punnett square for this cross and state the expected genotypic and phenotypic ratios and percentages. Explain why no white-flowered offspring can be produced from this cross.',
          answer:
            'Cross $RW \\times RR$ gives genotypic ratio $1\\,RR : 1\\,RW$ ($50\\%$ $RR$, $50\\%$ $RW$) and phenotypic ratio $1\\text{ Red} : 1\\text{ Pink}$ ($50\\%$ Red, $50\\%$ Pink). No white offspring ($WW$) can form because the red parent ($RR$) carries no $W$ allele to contribute.',
          principle:
            'A homozygous recessive/alternative phenotype ($WW$) requires inheriting one $W$ allele from each parent; if one parent is $RR$, every offspring receives at least one $R$ allele.',
          solution:
            '1. **Parental Cross & Gametes:**\n   - Pink plant ($RW$) produces gametes **$R$** and **$W$**.\n   - Red plant ($RR$) produces only **$R$** gametes.\n2. **Punnett Square:**\n\n| Gametes | $R$ | $W$ |\n| :---: | :---: | :---: |\n| **$R$** | $RR$ (Red) | $RW$ (Pink) |\n| **$R$** | $RR$ (Red) | $RW$ (Pink) |\n\n3. **Genotypic & Phenotypic Ratios and Percentages:**\n   - **Genotypic ratio:** $2\\,RR : 2\\,RW = \\mathbf{1\\,RR : 1\\,RW}$ ($50\\%$ $RR$, $50\\%$ $RW$)\n   - **Phenotypic ratio:** **$1\\text{ Red} : 1\\text{ Pink}$** ($50\\%$ Red-flowered, $50\\%$ Pink-flowered)\n4. **Why No White Offspring ($WW$) Can Be Produced:**\n   - White-flowered snapdragons require genotype **$WW$**, meaning the offspring must inherit one $W$ allele from each parent.\n   - Since the red parent has genotype $RR$ and produces **only $R$ gametes** (no $W$ allele), every offspring must inherit at least one $R$ allele and can only be red ($RR$) or pink ($RW$), so $0\\%$ white ($WW$) offspring are possible.',
          rubric: [
            { code: 'M1', text: 'Constructs a correct Punnett square for $RW \\times RR$ (gametes $R, W$ and $R, R$)' },
            { code: 'A1', text: 'States genotypic ratio $1\\,RR : 1\\,RW$ ($50\\%$ $RR$, $50\\%$ $RW$)' },
            { code: 'A1', text: 'States phenotypic ratio $1\\text{ Red} : 1\\text{ Pink}$ ($50\\%$ Red, $50\\%$ Pink)' },
            { code: 'B1', text: 'Explains that $WW$ is impossible because the $RR$ parent cannot contribute a $W$ allele' }
          ]
        }
      ]
    },
    {
      no: 22,
      title: 'Section B – Essay 12: Human Sex Determination & 1 : 1 Ratio',
      marks: 4,
      stem: 'Biological sex in humans is determined at fertilisation by the sex chromosomes (gonosomes): females are $\\text{XX}$ and males are $\\text{XY}$.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'According to United Nations demographic data, the global human population is approximately $50.4\\%$ male and $49.6\\%$ female. Construct a genetic diagram (including parental genotypes, gametes, Punnett square, and offspring ratio) to explain why the theoretical birth ratio of males to females is $1 : 1$, and explain why the father\'s gamete determines the biological sex of the child.',
          answer:
            'Crossing $\\text{XX}$ (mother, gametes $X, X$) $\\times$ $\\text{XY}$ (father, gametes $X, Y$) yields $2\\,\\text{XX} : 2\\,\\text{XY} = 1\\text{ Female} : 1\\text{ Male}$ ($50\\% : 50\\%$). The father\'s sperm determines sex because the mother\'s ova always carry $X$, whereas sperm carry either $X$ ($50\\%$, producing female $\\text{XX}$) or $Y$ ($50\\%$, producing male $\\text{XY}$).',
          principle:
            'Human females are homogametic ($\\text{XX}$) while males are heterogametic ($\\text{XY}$), making paternal gamete chromosome type ($X$ vs. $Y$) the decisive factor in offspring sex at an expected $1:1$ ratio.',
          solution:
            '**1. Genetic Diagram for Sex Determination:**\n- **Parental Genotypes:** Mother ($\\text{XX}$) $\\times$ Father ($\\text{XY}$)\n- **Gametes:** Mother produces only **$X$** ova ($100\\%$ $X$); Father produces **$X$** sperm ($50\\%$) and **$Y$** sperm ($50\\%$).\n\n| Gametes | $X$ (Ovum) | $X$ (Ovum) |\n| :---: | :---: | :---: |\n| **$X$ (Sperm)** | $\\text{XX}$ (Female) | $\\text{XX}$ (Female) |\n| **$Y$ (Sperm)** | $\\text{XY}$ (Male) | $\\text{XY}$ (Male) |\n\n- **Offspring Ratio:** $2\\,\\text{XX} : 2\\,\\text{XY} = \\mathbf{1\\text{ Female} : 1\\text{ Male}}$ ($50\\%$ female : $50\\%$ male), explaining why global birth demographics stay close to $50\\% : 50\\%$.\n\n**2. Why the Father\'s Gamete Determines Biological Sex:**\nAll ova produced by the mother carry an $X$ chromosome. Because the father is heterogametic ($\\text{XY}$), half of his sperm carry an $X$ chromosome and half carry a $Y$ chromosome. If an $X$-bearing sperm fertilises the ovum, the zygote is $\\text{XX}$ (female); if a $Y$-bearing sperm fertilises the ovum, the zygote is $\\text{XY}$ (male).',
          rubric: [
            { code: 'M1', text: 'States parental genotypes ($\\text{XX} \\times \\text{XY}$) and gametes (mother: $X$; father: $X$ and $Y$)' },
            { code: 'M1', text: 'Constructs a correct Punnett square showing $\\text{XX}$ and $\\text{XY}$ outcomes' },
            { code: 'A1', text: 'States the theoretical offspring sex ratio as $1 : 1$ ($50\\%$ male : $50\\%$ female)' },
            { code: 'B1', text: 'Explains that the father\'s sperm ($X$ vs. $Y$) determines sex because maternal ova always carry $X$' }
          ]
        }
      ]
    },
    {
      no: 23,
      title: 'Section B – Essay 13: Polygenic Inheritance & Continuous Variation',
      marks: 4,
      stem: 'Figure 4.1 compares two phenotypic frequency distributions:\n- **Graph A (Monohybrid Trait – Pea Plant Height):** Two discrete, non-overlapping bars showing $75\\%$ Tall ($TT, Tt$) and $25\\%$ Dwarf ($tt$).\n- **Graph B (Polygenic Trait – Human Skin Colour / Height):** A smooth, continuous bell-shaped normal distribution ranging from Very Light / Short through abundant Intermediate Phenotypes to Very Dark / Tall.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Refer to Figure 4.1 above. Define polygenic inheritance and explain the genetic mechanism that produces the continuous bell-shaped distribution of phenotypes seen in Graph B (such as human skin colour and height), contrasting it with the discrete categories in Graph A.',
          answer:
            'Polygenic inheritance is the control of a single trait by the cumulative (additive) effects of two or more genes. Multiple genes with many possible allele combinations (e.g., melanin-producing genes for skin colour) yield numerous intermediate phenotypes forming a smooth bell-shaped curve (Graph B), whereas single-gene Mendelian traits produce discrete, non-overlapping classes (Graph A).',
          principle:
            'Single-gene traits produce discontinuous variation (distinct categories), whereas polygenic traits produce continuous variation (a bell-shaped spectrum) due to additive alleles across multiple loci.',
          solution:
            '1. **Definition of Polygenic Inheritance:** Polygenic inheritance occurs when **two or more independent genes** at different loci act together to control a single phenotypic characteristic through **cumulative (additive) effects**.\n2. **Mechanism Producing the Bell-Shaped Curve (Graph B):** Because multiple genes contribute small additive increments (for example, multiple genes regulating melanin synthesis in skin colour or growth in height), individuals can inherit many combinations of dominant and recessive alleles. Extreme combinations (all dominant/pigment-producing alleles or all recessive alleles) are rare, whereas intermediate combinations are far more common—producing a **continuous bell-shaped distribution**.\n3. **Contrast with Graph A (Monohybrid Trait):** In Graph A, pea stem height is governed by a **single gene** ($T/t$) with complete dominance, producing **discontinuous variation**—only two distinct, non-overlapping categories ($75\\%$ tall and $25\\%$ dwarf) with no intermediate heights.',
          rubric: [
            { code: 'B1', text: 'Defines polygenic inheritance as two or more genes controlling one trait' },
            { code: 'B1', text: 'Explains the additive/cumulative allele mechanism across multiple loci' },
            { code: 'B1', text: 'Explains why intermediate combinations are most frequent and extremes are rare (bell-shaped curve in Graph B)' },
            { code: 'B1', text: 'Contrasts Graph B\'s continuous spectrum with Graph A\'s discrete single-gene categories' }
          ]
        }
      ]
    },
    {
      no: 24,
      title: 'Section B – Essay 14: Family Pedigree Charts & Standardized Symbols',
      marks: 4,
      stem: 'Geneticists use standardized pedigree diagrams to analyse inherited disorders in human families.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Explain the purpose and advantages of using a family pedigree chart over a single Punnett square when investigating human genetic conditions. Describe the standardized pedigree symbols used for males, females, affected individuals, unaffected individuals, marriage/mating lines, and offspring descent lines.',
          answer:
            'A pedigree chart tracks an inherited trait across multiple generations of an entire family, helping deduce inheritance patterns and identify carriers (unlike a Punnett square, which models only one cross). Standard symbols: square = male, circle = female, shaded = affected, unshaded = unaffected, horizontal line between shapes = mating/marriage, vertical/branching lines = offspring descent.',
          principle:
            'Pedigree charts visualize multi-generational family inheritance using standardized geometric and connecting symbols so genotypes and transmission modes can be deduced.',
          solution:
            '**1. Purpose & Advantages Over a Single Punnett Square:**\nA Punnett square only models predicted probabilities for **one generation** from a single pair of parents. In contrast, a **family pedigree chart** organizes an entire family lineage across **multiple generations** in a structured visual format, enabling geneticists to trace how traits appear or skip generations, identify unaffected carriers, and determine whether an allele is dominant, recessive, autosomal, or sex-linked.\n\n**2. Standardized Pedigree Symbols:**\n- **Male:** Square ($\\square$)\n- **Female:** Circle ($\\bigcirc$)\n- **Affected individual (shows the condition):** Shaded / filled symbol\n- **Unaffected individual:** Unshaded / open symbol\n- **Marriage / Mating line:** Horizontal line connecting a male square and a female circle\n- **Offspring descent lines:** Vertical line descending from the mating line to a horizontal sibship line with vertical branches to each child in order of birth',
          rubric: [
            { code: 'B1', text: 'Explains advantage over a Punnett square (tracks multi-generational family history, carriers, and inheritance mode)' },
            { code: 'B1', text: 'States square = male and circle = female' },
            { code: 'B1', text: 'States shaded = affected and unshaded = unaffected' },
            { code: 'B1', text: 'Describes horizontal marriage/mating lines and vertical/branching offspring descent lines' }
          ]
        }
      ]
    },
    {
      no: 25,
      title: 'Section B – Essay 15: Comparing Autosomal Dominant, Autosomal Recessive & X-Linked Pedigrees',
      marks: 4,
      stem: 'Human inherited disorders follow distinct transmission patterns depending on whether the mutated allele is dominant or recessive and whether it sits on an autosome or sex chromosome.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Compare the three major inheritance models analysed in family pedigrees: Autosomal Dominant (e.g., Polydactyly), Autosomal Recessive (e.g., Albinism or Cystic Fibrosis), and X-linked Recessive (e.g., Colourblindness). Include how many mutated allele copies are required for an individual to be affected and whether unaffected carriers can exist in each pattern.',
          answer:
            'Autosomal Dominant (Polydactyly): $1$ mutated allele ($DD$ or $Dd$) causes the condition; no unaffected carriers exist. Autosomal Recessive (Albinism/Cystic Fibrosis): $2$ mutated alleles ($aa$) needed; heterozygotes ($Aa$) are unaffected carriers. X-linked Recessive (Colourblindness): females need $2$ copies ($X^b X^b$) and can be carriers ($X^B X^b$), whereas hemizygous males need only $1$ copy ($X^b Y$) and cannot be unaffected carriers.',
          principle:
            'Inheritance patterns differ in allele dosage required for expression ($1$ vs. $2$ copies) and sex-specific carrier possibilities.',
          solution:
            '| Inheritance Model | Example Disorder | Mutated Allele Copies Needed to Be Affected | Can Unaffected Carriers Exist? |\n| :--- | :--- | :--- | :--- |\n| **Autosomal Dominant** | Polydactyly ($D$) | **1 copy** ($DD$ or $Dd$ are affected; only $dd$ is unaffected) | **No.** Anyone carrying $D$ expresses the trait. |\n| **Autosomal Recessive** | Albinism ($a$) or Cystic Fibrosis ($f$) | **2 copies** (only homozygous recessive $aa$ / $ff$ is affected) | **Yes.** Heterozygotes ($Aa$ / $Ff$) are unaffected carriers (two carriers have a $25\\%$ chance of an affected child). |\n| **X-linked Recessive** | Red-green Colourblindness ($X^b$) | **Females: 2 copies** ($X^b X^b$); **Males: 1 copy** ($X^b Y$, hemizygous) | **Yes, in females only** ($X^B X^b$); males with $X^b$ are always affected. |',
          rubric: [
            { code: 'B1', text: 'Autosomal dominant: $1$ mutated allele needed ($DD$/$Dd$), no unaffected carriers' },
            { code: 'B1', text: 'Autosomal recessive: $2$ mutated alleles needed ($aa$/$ff$), heterozygotes ($Aa$/$Ff$) are unaffected carriers' },
            { code: 'B1', text: 'X-linked recessive: females need $2$ copies ($X^b X^b$) and can be carriers ($X^B X^b$), whereas males need $1$ copy ($X^b Y$)' },
            { code: 'B1', text: 'Includes correct disorder examples for all three inheritance models' }
          ]
        }
      ]
    },
    {
      no: 26,
      title: 'Section B – Essay 16: Polydactyly Cross Between Heterozygous Parents',
      marks: 4,
      stem: 'Polydactyly is an autosomal dominant condition characterized by extra digits on the hands or feet.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Polydactyly is an inherited condition in which a person develops extra digits on the hands or feet, caused by a dominant allele ($D$), while the recessive allele ($d$) results in a normal number of digits. If two parents who are both heterozygous for polydactyly ($Dd$) have children, construct a Punnett square and determine the probability that a child will have a normal number of digits, and the probability that an affected child is homozygous dominant.',
          answer:
            'Punnett square for $Dd \\times Dd$ gives $1\\,DD : 2\\,Dd : 1\\,dd$. Probability of normal digits ($dd$) = $1/4$ ($25\\%$). Probability that an affected child ($DD$ or $Dd$) is homozygous dominant ($DD$) = $1/3$ ($\\approx 33.3\\%$; or $1/4 = 25\\%$ of all children).',
          principle:
            'In $Dd \\times Dd$, $1/4$ of all offspring are $dd$ (unaffected) and $3/4$ are affected ($1\\,DD + 2\\,Dd$), so the conditional probability of $DD$ given the child is affected is $1/3$.',
          solution:
            '1. **Parental Cross & Gametes:** $Dd \\times Dd$, each parent producing gametes $D$ and $d$.\n2. **Punnett Square:**\n\n| Gametes | $D$ | $d$ |\n| :---: | :---: | :---: |\n| **$D$** | $DD$ (Polydactyly) | $Dd$ (Polydactyly) |\n| **$d$** | $Dd$ (Polydactyly) | $dd$ (Normal digits) |\n\n3. **Genotypic & Phenotypic Ratios:**\n   - Genotypic ratio: $1\\,DD : 2\\,Dd : 1\\,dd$\n   - Phenotypic ratio: $3\\text{ Polydactyly} : 1\\text{ Normal digits}$\n4. **Probabilities:**\n   - **Probability of normal number of digits ($dd$):** $\\frac{1}{4} = \\mathbf{25\\%}$.\n   - **Probability that an affected child is homozygous dominant ($DD$):** Among the $3$ affected outcomes ($DD, Dd, Dd$), $1$ is $DD$, so the conditional probability is **$\\frac{1}{3}$ ($\\approx 33.3\\%$)** (note: overall across all offspring, $DD$ accounts for $\\frac{1}{4} = 25\\%$).',
          rubric: [
            { code: 'M1', text: 'Constructs a correct Punnett square for $Dd \\times Dd$' },
            { code: 'A1', text: 'States genotypic ratio $1\\,DD : 2\\,Dd : 1\\,dd$' },
            { code: 'A1', text: 'Determines probability of normal digits ($dd$) as $1/4$ ($25\\%$)' },
            { code: 'A1', text: 'Determines probability that an affected child is $DD$ as $1/3$ ($\\approx 33.3\\%$)' }
          ]
        }
      ]
    },
    {
      no: 27,
      title: 'Section B – Essay 17: X-Linked Recessive Colourblindness & Hemizygosity',
      marks: 4,
      stem: 'Red-green colourblindness is inherited on the X chromosome: $X^B$ gives normal colour vision and $X^b$ is the recessive allele for colourblindness.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Explain why X-linked recessive conditions such as red-green colourblindness ($X^b$) are expressed differently in males and females, referring to the term hemizygous. Show via a genetic cross why an affected father ($X^b Y$) and a homozygous normal mother ($X^B X^B$) cannot have colourblind sons, but all of their daughters will be carriers.',
          answer:
            'Males are hemizygous ($XY$)—having only one X chromosome and no homologous allele on the Y chromosome—so a single $X^b$ causes colourblindness, whereas females need $X^b X^b$. Crossing $X^b Y \\times X^B X^B$ produces $100\\%$ $X^B Y$ normal sons (inheriting $Y$ from father and $X^B$ from mother) and $100\\%$ $X^B X^b$ carrier daughters (inheriting $X^b$ from father and $X^B$ from mother).',
          principle:
            'Because fathers pass their $Y$ chromosome to sons and their single $X$ chromosome to daughters, an X-linked trait cannot pass from father to son, whereas all daughters inherit the father\'s X-linked allele.',
          solution:
            '1. **Hemizygosity & Sex Differences:** Males are **hemizygous** ($XY$) for X-linked genes because they have only **one X chromosome**, and the shorter Y chromosome lacks homologous loci for those genes. Consequently, a single recessive allele ($X^b Y$) is never masked and causes colourblindness in males, whereas females ($XX$) must inherit two copies ($X^b X^b$) to be affected and are unaffected carriers when heterozygous ($X^B X^b$).\n2. **Genetic Cross ($X^b Y \\times X^B X^B$):**\n   - Father ($X^b Y$) produces gametes **$X^b$** and **$Y$**.\n   - Mother ($X^B X^B$) produces only **$X^B$** gametes.\n\n| Gametes | $X^B$ (Mother) | $X^B$ (Mother) |\n| :---: | :---: | :---: |\n| **$X^b$ (Father)** | $X^B X^b$ (Carrier daughter) | $X^B X^b$ (Carrier daughter) |\n| **$Y$ (Father)** | $X^B Y$ (Normal son) | $X^B Y$ (Normal son) |\n\n3. **Explanation of Offspring:**\n   - **Sons ($0\\%$ colourblind):** Every son inherits the $Y$ chromosome from his father and an $X^B$ chromosome from his mother, so all sons are **$X^B Y$** (normal vision).\n   - **Daughters ($100\\%$ carriers):** Every daughter inherits $X^b$ from her father and $X^B$ from her mother, so all daughters are **$X^B X^b$** (unaffected carriers).',
          rubric: [
            { code: 'B1', text: 'Explains hemizygosity in males (only $1$ X chromosome, no masking homologous allele on Y)' },
            { code: 'M1', text: 'Shows parental genotypes ($X^b Y \\times X^B X^B$), gametes, and Punnett square' },
            { code: 'A1', text: 'Explains why $0\\%$ of sons are affected (sons receive $Y$ from father and $X^B$ from mother)' },
            { code: 'A1', text: 'Explains why $100\\%$ of daughters are unaffected carriers ($X^B X^b$)' }
          ]
        }
      ]
    },
    {
      no: 28,
      title: 'Section B – Essay 20: Real-World Applications of Genetics & Inheritance',
      marks: 4,
      stem: 'Note: Essays 18 and 19 (Figure 5.1 Pedigree Charts) are omitted because the pedigree figures are unavailable in the extracted source. This final question addresses Essay 20.',
      parts: [
        {
          label: 'a',
          marks: 4,
          prompt:
            'Reflect on the real-world importance of studying genetics and inheritance. Discuss how knowledge of monohybrid crosses, test crosses, and pedigree analysis contributes to human medical advancements (such as genetic counselling, gene therapy, and personalized medicine) and agricultural breeding. Conclude by explaining the meaning of Gregor Mendel\'s reflection: "Genes may determine our physical appearance, but it is our choices that define our character."',
          answer:
            'Genetics enables genetic counselling (using pedigrees and crosses to assess inherited disease risks), gene therapy and personalized medicine (targeting therapies to genetic profiles), and selective agricultural breeding (using test crosses to identify pure-breeding high-yield/disease-resistant lines). The closing reflection emphasizes that biological heredity shapes physical traits, not moral character or personal responsibility.',
          principle:
            'Mendelian inheritance principles underpin modern clinical risk prediction, targeted therapeutics, and crop/livestock improvement while distinguishing biological heredity from human moral agency.',
          solution:
            '1. **Human Medical Advancements:**\n   - **Genetic Counselling:** Pedigree analysis and monohybrid probability calculations allow clinicians to identify carriers of recessive or X-linked conditions (e.g., cystic fibrosis, colourblindness) and advise families on inheritance risks.\n   - **Gene Therapy & Personalized Medicine:** Understanding specific gene loci and alleles enables targeted treatments (tailoring drug choices to an individual\'s genotype and developing therapies to correct defective alleles).\n2. **Agricultural Breeding:** Farmers and agronomists apply monohybrid crosses and **test crosses** to distinguish homozygous dominant ($TT$) pure-breeding crops and livestock from heterozygotes ($Tt$), preserving desirable traits such as high yield, drought tolerance, and disease resistance.\n3. **Meaning of the Closing Reflection:** While DNA and inherited alleles govern biological and physical characteristics (such as eye colour, height, or predisposition to certain traits), they do not dictate ethics, empathy, effort, or moral conduct—individuals remain responsible for their choices and character.',
          rubric: [
            { code: 'B1', text: 'Explains medical applications via genetic counselling (pedigrees/crosses to evaluate inherited disease risk)' },
            { code: 'B1', text: 'Discusses gene therapy and/or personalized medicine grounded in genetic knowledge' },
            { code: 'B1', text: 'Explains agricultural breeding applications (selective crosses and test crosses for pure-breeding traits)' },
            { code: 'B1', text: 'Interprets the reflection clearly (genetics determines physical traits, whereas personal choices define character)' }
          ]
        }
      ]
    }
  ]
};
