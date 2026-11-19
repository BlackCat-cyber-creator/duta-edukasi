/**
 * Structured Practice Set: Biology X Block Test Preparation 2026/2027 – Biodiversity, Classification & Viruses
 * Source: bio_10_block_test.pdf (Duta e-dukasi arsip latihan). Original English wording is preserved.
 * The source had no answer key: every answer was derived and checked independently from standard biology.
 * Dropped (see report): item 6 (blank has several equally valid answers), item 25a and items 42, 43 (depend on images
 * that cannot be restated in text). Item 25b is kept because its dichotomous key is fully given as text.
 */
export default {
  id: 'bio10-blok-test-keanekaragaman-virus',
  slug: 'blok-test-biologi-x-keanekaragaman-virus',
  subject: 'biologi',
  grade: 10,
  track: 'kurikulum-merdeka',
  accessTier: 'free',
  topic: 'Biodiversity, Classification & Viruses (Block Test Preparation)',
  relatedChapterIds: [
    'biologi10-bab1-keanekaragaman-hayati-dan-klasifikasi',
    'biologi10-bab2-virus-bakteri-dan-protista'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'Biologi SMA',
  title: 'Biology X Block Test Preparation 2026/2027 – Biodiversity, Classification & Viruses',
  totalMarks: 91,
  instructions:
    'Answer every item. Fill-in-the-blank items need the correct term only; explanation items should be answered in complete sentences that use biological reasoning.',
  source: {
    org: 'Duta e-dukasi arsip latihan',
    file: 'bio_10_block_test.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Biodiversity & Classification',
      marks: 41,
      stem: 'Complete the blanks or answer the questions on biodiversity, threats to biodiversity, and classification.',
      parts: [
        {
          label: '1',
          marks: 1,
          prompt:
            'A coral reef contains many different species of fish, corals, mollusks, and other marine organisms. The variety of different species in this community represents __________ diversity.',
          answer: 'species diversity',
          principle: 'Species diversity is the variety of different species within a community or area.',
          solution:
            'The reef holds many different species living together in one community, which is species diversity. Genetic diversity would be variation within one species, and ecosystem diversity would be the variety of habitats.',
          rubric: [{ code: 'A1', text: 'Correct term: species diversity.' }]
        },
        {
          label: '2',
          marks: 1,
          prompt:
            'Two populations of the same plant species have different levels of resistance to drought. This variation is an example of __________ diversity.',
          answer: 'genetic diversity',
          principle: 'Genetic diversity is the variation in genes and alleles within a species.',
          solution:
            'Both populations belong to the same species, so the difference in drought resistance is variation in genes within one species, which is genetic diversity.',
          rubric: [{ code: 'A1', text: 'Correct term: genetic diversity.' }]
        },
        {
          label: '3',
          marks: 1,
          prompt:
            'The conversion of a mangrove forest into shrimp ponds can reduce the variety of habitats available for organisms. This mainly results in a decrease in __________ diversity.',
          answer: 'ecosystem diversity',
          principle: 'Ecosystem diversity is the variety of habitats, communities and ecological processes in a region.',
          solution:
            'Replacing a mangrove forest with ponds removes a whole habitat type, so the variety of habitats and ecosystems falls: ecosystem diversity decreases.',
          rubric: [{ code: 'A1', text: 'Correct term: ecosystem diversity.' }]
        },
        {
          label: '4',
          marks: 1,
          prompt:
            'When a population becomes very small, individuals may have fewer opportunities to mate with genetically different individuals. As a result, the population may experience reduced __________ variation.',
          answer: 'genetic variation',
          principle: 'Small populations lose alleles through drift and inbreeding, lowering genetic variation.',
          solution:
            'With few unrelated mates available, matings are between related individuals (inbreeding) and alleles are lost by chance, so genetic variation within the population declines.',
          rubric: [{ code: 'A1', text: 'Correct term: genetic.' }]
        },
        {
          label: '5',
          marks: 1,
          prompt:
            'The uncontrolled hunting of wild animals can cause a rapid decline in population size and may eventually lead to __________ if the species disappears completely.',
          answer: 'extinction',
          principle: 'Extinction is the complete disappearance of a species.',
          solution:
            'Overhunting removes individuals faster than the population can replace them; if the last individuals are lost, the species is extinct.',
          rubric: [{ code: 'A1', text: 'Correct term: extinction.' }]
        },
        {
          label: '7',
          marks: 2,
          prompt:
            'A forest contains several species of birds. One species feeds mainly on fruits, another feeds on insects, and another feeds on seeds. Explain how differences in feeding habits can help maintain biodiversity within the forest ecosystem.',
          answer:
            'Different feeding habits give each species its own niche, which reduces competition so several species can coexist; each also plays a different ecological role (seed dispersal, insect control, seed predation) that keeps the food web balanced.',
          principle: 'Niche differentiation (resource partitioning) reduces competition and allows many species to coexist.',
          solution:
            'Because the birds use different food resources, they compete far less with one another, so none of them drives the others out and all can persist in the same forest. In addition, each feeding type has a different role: fruit eaters disperse seeds, insect eaters limit insect populations, and seed eaters influence plant regeneration. These varied roles keep the food web balanced and stable, which maintains species diversity.',
          rubric: [
            { code: 'B1', text: 'Different diets give different niches and reduce competition, allowing coexistence of species.' },
            { code: 'B1', text: 'Each species has a different ecological role (e.g. seed dispersal, pest control) that keeps the food web balanced and stable.' }
          ]
        },
        {
          label: '8',
          marks: 2,
          prompt:
            'A farmer grows only one variety of rice over a large agricultural area. A new disease then spreads rapidly through the rice fields. Explain why low genetic diversity may increase the risk of severe crop losses.',
          answer:
            'A single variety is genetically uniform, so all plants share the same susceptibility; a pathogen that can infect one can infect all, and no resistant plants remain to survive, so losses are severe.',
          principle: 'Genetic diversity provides variation, so some individuals may resist a new threat.',
          solution:
            'With one variety, all plants have nearly identical alleles, including those that make them susceptible to the disease. The pathogen therefore spreads freely from plant to plant across the whole area. A genetically diverse crop would contain some resistant varieties that survive and limit the spread; in a monoculture there are none, so most of the crop can be lost.',
          rubric: [
            { code: 'B1', text: 'Plants are genetically uniform, so all are equally susceptible to the pathogen.' },
            { code: 'B1', text: 'No resistant individuals exist to survive and limit spread, so the disease spreads rapidly and losses are severe.' }
          ]
        },
        {
          label: '9',
          marks: 2,
          prompt:
            'A coastal forest is cleared for the construction of buildings. Several species of birds, insects, and mammals subsequently disappear from the area. Explain the relationship between habitat destruction and the decline in species diversity.',
          answer:
            'Habitat destruction removes the food, shelter and breeding sites species depend on, so populations shrink or leave and specialised species die out locally; fewer species remain, so species diversity declines.',
          principle: 'Habitat loss is a leading cause of biodiversity loss because species depend on their habitat for survival.',
          solution:
            'The cleared forest provided food, shelter, nesting and breeding sites. When these are destroyed, individuals cannot survive or reproduce there; populations decline, move away, or die out, especially species with specialised needs. As species disappear locally, the number of species in the area (species richness) and so species diversity falls.',
          rubric: [
            { code: 'B1', text: 'Habitat destruction removes food, shelter and breeding sites that organisms depend on.' },
            { code: 'B1', text: 'Populations decline or disappear (local extinction), so the number of species and species diversity decreases.' }
          ]
        },
        {
          label: '10',
          marks: 3,
          prompt:
            'A population of fish in a lake is harvested continuously. The number of fish caught each year is greater than the number of fish naturally replacing the population. Explain the possible long-term effects of this activity on the fish population and the ecosystem.',
          answer:
            'The fish population declines (fewer breeding adults, loss of genetic variation) and may collapse or become locally extinct; the ecosystem is disturbed because predators lose prey and the species it feeds on may increase, destabilising the food web.',
          principle: 'Overexploitation (harvest above the replacement rate) reduces populations and disrupts food webs.',
          solution:
            'Because more fish are removed than are replaced by reproduction, the population shrinks each year. Fewer breeding adults and loss of genetic variation make recovery harder, and the population may collapse or disappear locally. For the ecosystem, predators of the fish lose a food source and may decline, while organisms the fish fed on (e.g. zooplankton or algae) may increase unchecked. These changes disturb the food web and lower the stability of the lake ecosystem.',
          rubric: [
            { code: 'B1', text: 'Population size declines continuously because harvest exceeds replacement, with possible collapse or local extinction.' },
            { code: 'B1', text: 'Fewer breeding adults and reduced genetic variation lower the population’s ability to recover.' },
            { code: 'B1', text: 'Food web disrupted: predators lose prey and/or prey of the fish increase, reducing ecosystem stability.' }
          ]
        },
        {
          label: '11',
          marks: 3,
          prompt:
            'A population of insects contains individuals with different levels of tolerance to a pesticide. After repeated pesticide application, most susceptible insects die, while tolerant insects survive and reproduce. Explain how natural selection may change the characteristics of the insect population over several generations.',
          answer:
            'The pesticide is a selective pressure: tolerant insects survive and reproduce, passing tolerance alleles to offspring, so the frequency of tolerance increases each generation and the population becomes mostly pesticide-resistant.',
          principle: 'Natural selection: heritable variation plus differential survival and reproduction changes allele frequencies over generations.',
          solution:
            'The population already shows heritable variation in tolerance. The pesticide acts as a selective pressure that kills most susceptible individuals, while tolerant ones survive and produce more offspring. Their offspring inherit the tolerance alleles, so each generation contains a larger proportion of tolerant insects. Over several generations the population consists mostly of pesticide-resistant individuals and the pesticide becomes less effective.',
          rubric: [
            { code: 'B1', text: 'Pesticide acts as a selective pressure on existing heritable variation in tolerance.' },
            { code: 'B1', text: 'Tolerant individuals survive and reproduce more, passing on tolerance alleles.' },
            { code: 'B1', text: 'Frequency of tolerance increases over generations, giving a mostly resistant population.' }
          ]
        },
        {
          label: '12',
          marks: 2,
          prompt:
            'A forest ecosystem contains plants, herbivores, carnivores, decomposers, soil organisms, and microorganisms. Explain why protecting only one species may not be sufficient to maintain the overall biodiversity of the ecosystem.',
          answer:
            'Species are interdependent through food webs, pollination, nutrient cycling and shared habitat; a protected species still declines if its food, habitat or partner species are lost, and biodiversity also includes other species and ecosystem processes.',
          principle: 'Ecosystem components are interdependent, so conserving biodiversity requires protecting whole communities and habitats.',
          solution:
            'Organisms in the forest depend on one another: herbivores need plants, carnivores need herbivores, and decomposers and soil microorganisms recycle nutrients that plants need. If only one species is protected while its food, habitat or supporting species are lost, it cannot survive. Biodiversity also covers the many other species and the ecosystem processes, so conservation must protect the whole ecosystem rather than a single species.',
          rubric: [
            { code: 'B1', text: 'Species are interdependent (food webs, nutrient cycling, habitat), so a protected species still depends on others.' },
            { code: 'B1', text: 'Biodiversity includes all species and ecosystem processes, so protecting the whole ecosystem/habitat is needed.' }
          ]
        },
        {
          label: '13',
          marks: 2,
          prompt:
            'Two forests have the same number of plant species. However, Forest A contains approximately equal numbers of individuals from each species, while Forest B is dominated by only one species. Which forest would be expected to have greater species evenness? Explain your reasoning.',
          answer: 'Forest A, because its individuals are spread about equally among the species, whereas in Forest B one species dominates.',
          principle: 'Species evenness measures how equally individuals are distributed among the species present.',
          solution:
            'Both forests have the same species richness, so the difference lies in how individuals are distributed. In Forest A the species have about equal numbers of individuals, which is high evenness. Forest B is dominated by one species and the others are rare, which is low evenness. Forest A therefore has greater species evenness.',
          rubric: [
            { code: 'B1', text: 'Identifies Forest A as having greater species evenness.' },
            { code: 'B1', text: 'Reason: evenness depends on equal distribution of individuals among species; Forest B is dominated by one species.' }
          ]
        },
        {
          label: '14',
          marks: 2,
          prompt:
            'A disease-resistant plant variety survives a severe outbreak, while most other varieties are severely affected. Explain how maintaining genetic diversity within crop populations can contribute to food security.',
          answer:
            'Genetic diversity keeps resistance genes available, so some varieties survive disease or stress and yields are not lost completely; the resistance genes can also be used in breeding, giving a more stable food supply.',
          principle: 'Genetic diversity provides raw material for resistance and adaptation, reducing the risk of total crop failure.',
          solution:
            'A genetically diverse crop contains varieties with different traits, including disease or drought resistance. When an outbreak or environmental stress occurs, resistant varieties survive and still produce food, so harvests are not lost completely. Breeders can also use the resistance genes to develop improved varieties. This gives a more stable and reliable food supply, which supports food security.',
          rubric: [
            { code: 'B1', text: 'Diverse varieties include resistant ones that survive outbreaks or stress, preventing total crop failure.' },
            { code: 'B1', text: 'Resistance genes can be used in breeding, so yields and food supply remain stable (food security).' }
          ]
        },
        {
          label: '15',
          marks: 2,
          prompt:
            'A new predator is introduced into an ecosystem where native prey species have no natural defense against it. Over several years, the populations of some native species decline significantly. Analyze two possible consequences of this change for the structure and stability of the ecosystem.',
          answer:
            'For example: (1) some native prey species decline or become extinct, reducing species diversity and simplifying the food web; (2) populations linked to the prey change (their other predators starve and their food organisms increase), a trophic cascade that lowers ecosystem stability. Any two well-reasoned consequences are accepted.',
          principle: 'An introduced predator alters food-web structure and can destabilise an ecosystem through direct and indirect effects.',
          solution:
            'Two possible consequences: (1) Loss of native prey species reduces species diversity and removes links from the food web, giving a simpler community structure. (2) Changes spread indirectly: other native predators that depended on the same prey decline, while organisms the prey used to eat may increase unchecked (a trophic cascade). With fewer species and altered interactions the ecosystem becomes less stable and less able to recover from disturbance. Other valid consequences (e.g. competition between the new and native predators) are acceptable if reasoned.',
          rubric: [
            { code: 'B1', text: 'First consequence correctly described and linked to ecosystem structure or stability (e.g. loss of prey species and reduced diversity).' },
            { code: 'B1', text: 'Second distinct consequence correctly described and linked to structure or stability (e.g. trophic cascade, effects on other predators).' }
          ]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'The Lionfish (Pterois volitans) is native to the Indo-Pacific region but has rapidly expanded its population in the Atlantic Ocean. Because local predators do not recognize it as prey and it aggressively feeds on small native fish species, the Lionfish is classified as an _______________ species in the Atlantic.',
          answer: 'invasive (an invasive alien species)',
          principle: 'An invasive species is a non-native species that spreads rapidly and harms native species and ecosystems.',
          solution:
            'The Lionfish is not native to the Atlantic, has no effective predators there, and reduces native fish populations, so it is an invasive (alien, non-native) species.',
          rubric: [{ code: 'A1', text: 'Correct term: invasive (alien) species.' }]
        },
        {
          label: '17',
          marks: 1,
          prompt:
            'According to the rules of binomial nomenclature established by Carl Linnaeus, the scientific name of the Sumatran Tiger is Panthera tigris. In this scientific name, the word Panthera represents the organism’s _______________, while tigris denotes the specific epithet.',
          answer: 'genus',
          principle: 'A binomial name consists of the genus name (capitalised) followed by the specific epithet.',
          solution: 'In Panthera tigris the first word, Panthera, is the genus; the second word, tigris, is the specific epithet.',
          rubric: [{ code: 'A1', text: 'Correct term: genus.' }]
        },
        {
          label: '18',
          marks: 1,
          prompt:
            'Water hyacinth (Eichhornia crassipes) forms thick mats on the surface of freshwater bodies, preventing sunlight from penetrating the water and decreasing dissolved oxygen levels. This phenomenon primarily causes biodiversity loss through ecosystem degradation led by an invasive _______________.',
          answer: 'species (an invasive plant species)',
          principle: 'Invasive species can degrade ecosystems and cause biodiversity loss.',
          solution:
            'Water hyacinth spreads aggressively, blocks light and lowers oxygen in the water, damaging the habitat of aquatic organisms. It is an invasive (plant) species.',
          rubric: [{ code: 'A1', text: 'Correct term: species (invasive plant/alien species).' }]
        },
        {
          label: '19',
          marks: 2,
          prompt:
            'Read the passage. “The Coral Triangle is renowned for hosting the highest diversity of marine life on Earth. However, intensive coastal land clearing and deforestation on nearby islands threaten this unique ecosystem. When land is cleared for agriculture or urban development, heavy rainfall washes large amounts of soil and sediment into rivers, which eventually empty into the ocean. Increased sedimentation turns coastal waters cloudy, blocking the sunlight required by zooxanthellae (photosynthetic algae living inside corals) to produce food. Furthermore, soil runoff carries excess nutrient fertilizers into the sea, promoting massive algal blooms that suffocate coral reefs. The degradation of coral reefs leaves hundreds of fish species without breeding grounds or shelter, triggering a rapid decline in local marine populations.”\n\nBased on the passage, explain two distinct mechanisms by which land-based deforestation negatively impacts coral reef ecosystems and marine life.',
          answer:
            '(1) Sedimentation: soil washed into the sea clouds the water and blocks sunlight, so zooxanthellae cannot photosynthesise and corals lose their food source. (2) Nutrient runoff: excess fertilizer causes algal blooms that suffocate corals; the degraded reef leaves fish without shelter and breeding grounds, so marine populations decline.',
          principle: 'Land-use change affects marine ecosystems through runoff: sedimentation and nutrient enrichment degrade coral reefs.',
          solution:
            'Mechanism 1: cleared land loses its soil cover, and rain washes soil and sediment into rivers and the sea. The cloudy water blocks sunlight needed by zooxanthellae, so photosynthesis and food production fall and the corals are stressed. Mechanism 2: runoff also carries fertilizer nutrients that cause algal blooms, which suffocate corals. As the reef degrades, many fish species lose shelter and breeding grounds, and local marine populations decline.',
          rubric: [
            { code: 'B1', text: 'Sedimentation clouds water and blocks sunlight, reducing zooxanthellae photosynthesis and coral food supply.' },
            { code: 'B1', text: 'Nutrient runoff causes algal blooms that suffocate corals, leaving fish without breeding grounds or shelter and reducing marine populations.' }
          ]
        },
        {
          label: '20',
          marks: 3,
          prompt:
            'Describe how habitat fragmentation resulting from coastal development can affect the survival and genetic diversity of native marine species living within restricted reef patches.',
          answer:
            'Fragmentation leaves small, isolated populations with limited food, space and mates, so survival is lower; gene flow between patches is reduced, and inbreeding and genetic drift lower genetic diversity, making the species less able to adapt and more prone to local extinction.',
          principle: 'Small isolated populations lose genetic diversity through reduced gene flow, inbreeding and genetic drift.',
          solution:
            'Coastal development divides the reef into small patches. Populations in each patch are small, with limited food, space and potential mates, so survival and reproduction decline and local extinction becomes more likely. Isolation prevents individuals moving between patches, so gene flow is reduced. Within small isolated groups, inbreeding and genetic drift remove alleles, lowering genetic diversity. With less variation the species is less able to adapt to disease or environmental change, which further reduces survival.',
          rubric: [
            { code: 'B1', text: 'Small isolated populations with limited resources and mates have lower survival and higher risk of local extinction.' },
            { code: 'B1', text: 'Isolation reduces gene flow between patches.' },
            { code: 'B1', text: 'Inbreeding and genetic drift reduce genetic diversity, lowering adaptability.' }
          ]
        },
        {
          label: '21',
          marks: 1,
          prompt:
            'The Javan leopard (Panthera pardus melas) has lost significant portions of its natural habitat due to agricultural expansion and human settlement. When a species’ population becomes very small and geographically isolated, it faces a major risk of extinction due to a critical decline in genetic _______________.',
          answer: 'diversity (variation)',
          principle: 'Small isolated populations lose genetic diversity, which reduces adaptability and raises extinction risk.',
          solution:
            'A very small, isolated population has few alleles and suffers inbreeding, so genetic diversity falls. Low genetic diversity reduces its ability to adapt to disease or environmental change, increasing the risk of extinction.',
          rubric: [{ code: 'A1', text: 'Correct term: diversity (variation).' }]
        },
        {
          label: '22',
          marks: 1,
          prompt:
            'Complete the following biological structural comparison: Plant cell walls are primarily composed of cellulose, fungal cell walls are made of chitin, whereas animal cells completely lack a _______________.',
          answer: 'cell wall',
          principle: 'Animal cells have only a plasma membrane and no cell wall.',
          solution: 'Plants have cellulose walls and fungi have chitin walls, but animal cells have no cell wall at all.',
          rubric: [{ code: 'A1', text: 'Correct term: cell wall.' }]
        },
        {
          label: '23',
          marks: 1,
          prompt:
            'In modern biological taxonomy, organisms are classified into hierarchical ranks. Arrange the following three ranks in order from the broadest to the most specific: Order, Kingdom, Genus.\n\nOrder (broadest to most specific): _______________ , _______________ , _______________',
          answer: 'Kingdom, Order, Genus',
          principle: 'Taxonomic ranks run from broad to specific: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species.',
          solution:
            'In the hierarchy Kingdom is the broadest, Order is a middle rank, and Genus is more specific, so the order from broadest to most specific is Kingdom, Order, Genus.',
          rubric: [{ code: 'A1', text: 'Correct sequence: Kingdom, Order, Genus.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'Two plants are classified as Ficus benjamina and Ficus elastica. Based on binomial nomenclature rules, both organisms belong to the same _______________, which indicates a close evolutionary relationship.',
          answer: 'genus (Ficus)',
          principle: 'In binomial nomenclature, the first word of the name is the genus; species sharing a genus are closely related.',
          solution:
            'Both names begin with Ficus, which is the genus. Sharing a genus means the two species are closely related.',
          rubric: [{ code: 'A1', text: 'Correct term: genus.' }]
        },
        {
          label: '25b',
          marks: 2,
          prompt:
            'Observe the simplified dichotomous key below for identifying four marine organisms.\n\nStep 1(a): Organism has a hard outer shell – go to 2\nStep 1(b): Organism does not have a hard outer shell – go to 3\nStep 2(a): Shell consists of two matching hinged valves – Tridacna gigas\nStep 2(b): Shell is a single coiled structure – Charonia tritonis\nStep 3(a): Has eight flexible arms with suction cups – Octopus vulgaris\nStep 3(b): Has a gelatinous bell-shaped body with tentacles – Aurelia aurita\n\nBriefly explain why a dichotomous key uses paired, contrasting statements at each step to identify unknown biological specimens.',
          answer:
            'Each step offers two mutually exclusive, contrasting characteristics, so a specimen fits only one; this forces a clear choice, narrows the possibilities step by step, and leads to a single identification without ambiguity.',
          principle: 'A dichotomous key is a stepwise identification tool built on paired, mutually exclusive observable characteristics.',
          solution:
            'Every step gives two contrasting statements about observable features (for example hard shell or no hard shell). Because they are mutually exclusive, the specimen matches only one, so the user always knows which step to go to next. Each choice eliminates part of the remaining possibilities until one organism is left, which makes identification systematic, reproducible and unambiguous.',
          rubric: [
            { code: 'B1', text: 'Paired statements are contrasting and mutually exclusive, so the specimen matches only one at each step.' },
            { code: 'B1', text: 'Each choice narrows the possibilities step by step until a single organism is identified, giving a systematic, unambiguous result.' }
          ]
        },
        {
          label: '26',
          marks: 2,
          prompt:
            'Deforestation in tropical rainforests leads to habitat fragmentation, creating small “islands” of trees separated by open land. Explain two ways this structural change impacts wild animal populations trying to survive in these remnants.',
          answer:
            'For example: (1) smaller habitat area means less food, shelter and territory, so populations are small and more vulnerable to extinction; (2) isolation blocks movement and gene flow, causing inbreeding and loss of genetic diversity. Edge effects, predation and human conflict are also accepted.',
          principle: 'Habitat fragmentation reduces habitat area and connectivity, leading to small isolated populations.',
          solution:
            'Way 1: each remnant is small, so food, shelter and territory are limited; populations are small and more likely to die out locally. Way 2: open land isolates the remnants, so animals cannot migrate or find mates in other patches. Gene flow stops, inbreeding increases and genetic diversity falls, reducing adaptability. Other valid effects include edge effects (more exposure to predators, wind, heat and humans) and human-wildlife conflict.',
          rubric: [
            { code: 'B1', text: 'First valid impact explained (e.g. reduced area, food, shelter and small populations).' },
            { code: 'B1', text: 'Second distinct valid impact explained (e.g. isolation, reduced gene flow and inbreeding, or edge effects).' }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Virus',
      marks: 50,
      stem: 'Complete the blanks or answer the questions on the structure, classification and reproduction of viruses.',
      parts: [
        {
          label: '27',
          marks: 1,
          prompt: 'Viruses are unable to reproduce independently and therefore require a living __________ cell for replication.',
          answer: 'host',
          principle: 'Viruses are obligate intracellular parasites that replicate only inside host cells.',
          solution: 'A virus has no ribosomes or metabolism of its own, so it can replicate only inside a living host cell.',
          rubric: [{ code: 'A1', text: 'Correct term: host.' }]
        },
        {
          label: '28',
          marks: 1,
          prompt: 'The protein coat that surrounds and protects the viral genetic material is called the __________.',
          answer: 'capsid',
          principle: 'The capsid is the protein coat of a virus, built from capsomeres.',
          solution: 'The protein coat enclosing the viral DNA or RNA is the capsid.',
          rubric: [{ code: 'A1', text: 'Correct term: capsid.' }]
        },
        {
          label: '29',
          marks: 2,
          prompt: 'The genetic material of a virus may consist of either __________ or __________, depending on the type of virus.',
          answer: 'DNA and RNA (either order)',
          principle: 'A virus contains one kind of nucleic acid, either DNA or RNA.',
          solution: 'Any given virus has either DNA or RNA as its genome, so the two blanks are DNA and RNA.',
          rubric: [
            { code: 'A1', text: 'One correct nucleic acid (DNA or RNA).' },
            { code: 'A1', text: 'The other nucleic acid given.' }
          ]
        },
        {
          label: '30',
          marks: 1,
          prompt: 'A virus that infects bacterial cells is specifically known as a __________.',
          answer: 'bacteriophage (phage)',
          principle: 'Bacteriophages are viruses whose hosts are bacteria.',
          solution: 'Viruses that infect bacteria are called bacteriophages, or phages.',
          rubric: [{ code: 'A1', text: 'Correct term: bacteriophage.' }]
        },
        {
          label: '31',
          marks: 1,
          prompt: 'The outer membrane-like structure found in some viruses is called the viral __________.',
          answer: 'envelope',
          principle: 'Some viruses are enclosed in a lipid envelope outside the capsid.',
          solution: 'The membrane-like outer layer of enveloped viruses is the viral envelope.',
          rubric: [{ code: 'A1', text: 'Correct term: envelope.' }]
        },
        {
          label: '32',
          marks: 1,
          prompt: 'Viral surface proteins are important because they recognize and bind to specific __________ on the surface of host cells.',
          answer: 'receptors',
          principle: 'Virus attachment depends on binding between viral surface proteins and host cell receptors.',
          solution: 'Viral surface proteins attach to specific receptor molecules on the host cell surface, which starts infection and determines host specificity.',
          rubric: [{ code: 'A1', text: 'Correct term: receptors.' }]
        },
        {
          label: '33',
          marks: 1,
          prompt: 'A virus with a long, cylindrical structure is generally described as having a __________ shape.',
          answer: 'helical (also described as rod-shaped or filamentous)',
          principle: 'Viruses are grouped by capsid symmetry: helical (rod-like), polyhedral/icosahedral, or complex.',
          solution:
            'A long cylindrical capsid, in which capsomeres wind around the nucleic acid like a spiral, is called helical (rod-shaped), as in Tobacco Mosaic Virus.',
          rubric: [{ code: 'A1', text: 'Correct term: helical (rod-shaped/filamentous accepted).' }]
        },
        {
          label: '34',
          marks: 1,
          prompt: 'Viruses with an envelope obtain this membrane-like structure from the __________ cell membrane during viral release.',
          answer: 'host',
          principle: 'Enveloped viruses acquire their envelope from host membrane when they bud out of the cell.',
          solution: 'During release by budding, the virus wraps itself in a piece of the host cell membrane, which becomes its envelope.',
          rubric: [{ code: 'A1', text: 'Correct term: host.' }]
        },
        {
          label: '35',
          marks: 2,
          prompt:
            'A virus contains genetic material surrounded by a protein coat but has no cellular organelles such as ribosomes or mitochondria. Explain why this structure prevents the virus from carrying out independent reproduction.',
          answer:
            'Without ribosomes the virus cannot synthesise proteins, and without mitochondria or metabolic enzymes it cannot make ATP, so it cannot copy its genome and make new capsids by itself and must use a host cell’s machinery.',
          principle: 'Viruses are acellular obligate parasites that depend on host machinery for protein synthesis and energy.',
          solution:
            'Reproduction requires making proteins (by ribosomes) and energy (ATP from metabolism), and copying the genome. The virus has none of these organelles or metabolic enzymes, so it cannot produce new viral proteins or nucleic acid on its own. It can reproduce only by entering a host cell and using the host’s ribosomes, enzymes and energy supply.',
          rubric: [
            { code: 'B1', text: 'Lacks ribosomes, so it cannot synthesise proteins (and lacks enzymes for its own metabolism).' },
            { code: 'B1', text: 'Lacks mitochondria/metabolism for energy, so it must use the host cell’s machinery to replicate.' }
          ]
        },
        {
          label: '36',
          marks: 2,
          prompt:
            'A researcher observes a virus with a protein coat surrounding its genetic material. Explain the two main functions of the viral capsid.',
          answer:
            'The capsid (1) protects the viral genetic material from damage and enzymes, and (2) gives the virus its shape and helps it attach to and recognise host cells (and deliver its genome).',
          principle: 'The capsid is a protective and structural protein shell that also takes part in host recognition.',
          solution:
            'First, the capsid surrounds and protects the viral DNA or RNA from nucleases and environmental damage. Second, it gives the virus its characteristic shape and, in non-enveloped viruses, its proteins help the virus recognise and attach to host cell receptors so that the genome can be delivered into the cell.',
          rubric: [
            { code: 'B1', text: 'Protects the viral nucleic acid from damage or degradation.' },
            { code: 'B1', text: 'Provides shape/structure and helps attachment to or recognition of host cells.' }
          ]
        },
        {
          label: '37',
          marks: 2,
          prompt:
            'A particular virus can infect human respiratory cells but cannot infect plant cells. Explain how the structure of the virus contributes to its host specificity.',
          answer:
            'The virus’s surface proteins have a shape that fits receptors found on human respiratory cells only; plant cells lack these receptors, so the virus cannot attach to or enter them.',
          principle: 'Host specificity depends on complementary binding between viral surface proteins and host receptors.',
          solution:
            'Infection begins when proteins on the virus surface (capsid or envelope proteins) bind to receptor molecules on the host cell, like a key fitting a lock. Human respiratory cells carry receptors with a shape complementary to the viral protein, so the virus attaches and enters. Plant cells do not have these receptors (and have a cell wall), so no attachment occurs and the virus cannot infect them.',
          rubric: [
            { code: 'B1', text: 'Viral surface proteins have a specific shape that binds complementary host receptors (lock-and-key).' },
            { code: 'B1', text: 'Plant cells lack the matching receptors, so the virus cannot attach or infect.' }
          ]
        },
        {
          label: '38',
          marks: 2,
          prompt:
            'A bacteriophage is observed attaching to the surface of a bacterial cell. Explain which viral structure is responsible for recognizing and attaching to the bacterial host.',
          answer:
            'The tail fibers: their proteins bind to specific receptors on the bacterial surface, which recognises the host and attaches the phage.',
          principle: 'Bacteriophage tail fibers mediate adsorption by binding specific receptors on the bacterial surface.',
          solution:
            'A bacteriophage has a head (capsid with DNA), a tail sheath and tail fibers. The tail fibers carry proteins that are complementary to particular receptor molecules on the bacterial cell surface. They bind to these receptors, which both recognises the correct host and attaches the phage so it can inject its DNA.',
          rubric: [
            { code: 'B1', text: 'Identifies the tail fibers as the structure for recognition and attachment.' },
            { code: 'B1', text: 'Explains that they bind specific receptors on the bacterial surface (adsorption).' }
          ]
        },
        {
          label: '39',
          marks: 2,
          prompt:
            'Two viruses have similar genetic material but different shapes: one is spherical and the other is elongated and cylindrical. Explain how differences in viral structure can be used to classify viruses.',
          answer:
            'Viruses can be grouped by structural features such as capsid shape/symmetry (polyhedral or spherical versus helical rod) and the presence of an envelope, so the two viruses fall into different groups even with similar nucleic acid.',
          principle: 'Viral classification uses structure (capsid symmetry, envelope) together with the type of nucleic acid and host.',
          solution:
            'Structural characteristics are stable, observable traits of a virus. Capsid shape gives groups such as polyhedral/icosahedral (roughly spherical), helical (elongated, cylindrical) and complex forms, and the presence or absence of an envelope gives further groups. Because one virus is spherical and the other is cylindrical, they are placed in different structural groups although their genetic material is similar.',
          rubric: [
            { code: 'B1', text: 'States that structural features such as capsid shape/symmetry and envelope are used as classification criteria.' },
            { code: 'B1', text: 'Applies it: spherical (polyhedral) and cylindrical (helical) viruses are placed in different groups despite similar genetic material.' }
          ]
        },
        {
          label: '40',
          marks: 2,
          prompt:
            'A virus possesses an envelope containing proteins that project from its surface. Explain how these surface proteins contribute to the infection of a host cell.',
          answer:
            'The projecting proteins bind to specific receptors on the host cell membrane (attachment), which allows the envelope to fuse with the membrane or the virus to be taken in so that the genome enters; they also determine which cells can be infected.',
          principle: 'Spike (surface) proteins mediate attachment and entry and determine host range.',
          solution:
            'The surface proteins recognise and bind to specific receptor molecules on the host cell membrane, the attachment (adsorption) step. Binding then allows entry, by fusion of the envelope with the membrane or by uptake into the cell, delivering the viral genome inside. Since each protein fits only certain receptors, they also decide which host cells can be infected.',
          rubric: [
            { code: 'B1', text: 'Surface proteins bind specific host cell receptors (attachment).' },
            { code: 'B1', text: 'Binding enables entry (fusion or uptake) and determines which cells can be infected.' }
          ]
        },
        {
          label: '41',
          marks: 2,
          prompt:
            'A scientist compares a bacterium and a virus and finds that the bacterium contains ribosomes and can reproduce by cell division, whereas the virus lacks ribosomes. Explain why the bacterium is considered a living cellular organism while the virus depends on a host cell for replication.',
          answer:
            'A bacterium is a complete cell with a membrane, ribosomes and its own metabolism, so it makes its own proteins and energy and divides by binary fission; a virus is acellular, with no ribosomes or metabolism, so it can replicate only by using a host cell.',
          principle: 'Cells carry out metabolism and reproduction independently; viruses are acellular obligate parasites.',
          solution:
            'A bacterium is a prokaryotic cell: it has a cell membrane, cytoplasm, ribosomes and metabolic enzymes, so it can synthesise proteins, obtain energy and reproduce by binary fission without help, and is considered living. A virus is only nucleic acid in a protein coat without ribosomes or metabolism, so it cannot make proteins or energy and can replicate only by taking over a host cell’s machinery.',
          rubric: [
            { code: 'B1', text: 'Bacterium is a cell with ribosomes and metabolism, synthesises its own proteins and reproduces by binary fission.' },
            { code: 'B1', text: 'Virus is acellular and lacks ribosomes and metabolism, so it depends on a host cell for replication.' }
          ]
        },
        {
          label: '44',
          marks: 2,
          prompt:
            'A bacteriophage approaches a bacterial cell. Explain the role of the tail fibers in the infection process and why they are important for host specificity.',
          answer:
            'The tail fibers recognise and bind to specific receptors on the bacterial surface (adsorption), the first step that allows the phage to inject its DNA; because their shape fits only certain receptors, a phage infects only bacteria that have them.',
          principle: 'Tail fibers mediate adsorption, and their receptor specificity determines the phage’s host range.',
          solution:
            'Infection starts with adsorption: the tail fibers contact the bacterial surface and bind to specific receptor molecules. This attachment positions the phage so the tail can penetrate and inject the viral DNA. The tail fiber proteins are complementary only to the receptors of particular bacterial species or strains, so the phage can attach to and infect only those bacteria, which gives host specificity.',
          rubric: [
            { code: 'B1', text: 'Tail fibers recognise and bind receptors on the bacterial surface (adsorption), enabling injection of phage DNA.' },
            { code: 'B1', text: 'Fibers fit only specific receptors, so only certain bacteria are infected (host specificity).' }
          ]
        },
        {
          label: '45',
          marks: 3,
          prompt:
            'A newly discovered particle contains nucleic acid and a protein coat but cannot synthesize proteins or reproduce outside a living cell. Based on these characteristics, determine whether the particle is more likely to be a virus or a cellular organism. Explain two pieces of evidence supporting your conclusion.',
          answer:
            'It is more likely a virus. Evidence: (1) it consists only of nucleic acid and a protein coat, without a cell membrane, cytoplasm or organelles (acellular); (2) it cannot synthesise proteins or reproduce outside a living cell, so it is an obligate parasite that depends on a host.',
          principle: 'Viruses are acellular particles of nucleic acid and protein that replicate only inside host cells.',
          solution:
            'The particle is more likely a virus. First, its structure is just nucleic acid and a protein coat, which is the basic organisation of a virus; a cellular organism would also have a membrane, cytoplasm and ribosomes. Second, it cannot make proteins and cannot reproduce outside a living cell, which fits an obligate intracellular parasite, whereas cellular organisms synthesise proteins with their own ribosomes and reproduce independently.',
          rubric: [
            { code: 'B1', text: 'Concludes the particle is more likely a virus.' },
            { code: 'B1', text: 'Evidence 1: only nucleic acid and protein coat, acellular (no membrane, cytoplasm, organelles).' },
            { code: 'B1', text: 'Evidence 2: cannot synthesise proteins or reproduce outside a living cell (obligate parasite).' }
          ]
        },
        {
          label: '46a',
          marks: 2,
          prompt:
            'Two viruses have the following characteristics:\n\nGenetic material: Virus X has RNA, Virus Y has DNA.\nCapsid: present in both.\nEnvelope: present in Virus X, absent in Virus Y.\nHost: Virus X infects animal cells, Virus Y infects bacterial cells.\n\nIdentify two characteristics that can be used to distinguish Virus X from Virus Y.',
          answer: 'Any two of: type of genetic material (RNA versus DNA), envelope (present versus absent), host (animal cell versus bacterial cell).',
          principle: 'Viruses are distinguished by nucleic acid type, envelope and host range.',
          solution:
            'The capsid is present in both, so it cannot distinguish them. The characteristics that differ are: genetic material (X has RNA, Y has DNA), the envelope (X has one, Y does not), and the host (X infects animal cells, Y infects bacteria). Any two of these answer the question.',
          rubric: [
            { code: 'B1', text: 'First valid distinguishing characteristic.' },
            { code: 'B1', text: 'Second valid distinguishing characteristic.' }
          ]
        },
        {
          label: '46b',
          marks: 1,
          prompt: 'Explain how the host information can help classify these viruses.',
          answer: 'Viruses can be grouped by the hosts they infect (animal viruses, plant viruses, bacteriophages), so Virus X is an animal virus and Virus Y is a bacteriophage.',
          principle: 'Host range is a classification criterion because infection depends on host-specific receptors.',
          solution:
            'The host a virus infects is a classification criterion, since infection requires receptors found only on certain cells. Virus X infects animal cells and is grouped with animal viruses, whereas Virus Y infects bacteria and is classified as a bacteriophage.',
          rubric: [{ code: 'B1', text: 'Host type is used to group viruses: X as an animal virus, Y as a bacteriophage.' }]
        },
        {
          label: '46c',
          marks: 1,
          prompt: 'Which virus is more likely to possess surface proteins involved in recognizing animal-cell receptors?',
          answer: 'Virus X',
          principle: 'Enveloped animal viruses carry surface (spike) proteins that bind receptors on animal cells.',
          solution:
            'Virus X infects animal cells and has an envelope, whose projecting surface proteins bind animal-cell receptors. Virus Y infects bacteria and lacks an envelope, so it is not expected to carry animal-cell receptor-binding proteins.',
          rubric: [{ code: 'B1', text: 'Virus X, with reasoning (animal host and envelope with surface proteins).' }]
        },
        {
          label: '47',
          marks: 1,
          prompt:
            'The individual protein subunits that make up the protective capsid surrounding a virus’s genetic material are called __________ .',
          answer: 'capsomeres',
          principle: 'A capsid is assembled from many protein subunits called capsomeres.',
          solution: 'The repeating protein subunits that build the capsid are capsomeres.',
          rubric: [{ code: 'A1', text: 'Correct term: capsomeres.' }]
        },
        {
          label: '48',
          marks: 1,
          prompt:
            'The process where a bacteriophage’s tail fibers attach to specific receptors on the bacterial cell membrane is called __________ .',
          answer: 'adsorption (attachment)',
          principle: 'Adsorption is the first stage of the lytic cycle: attachment of the virus to receptors on the host.',
          solution: 'Attachment of the tail fibers to specific host receptors is the adsorption stage, which comes before penetration.',
          rubric: [{ code: 'A1', text: 'Correct term: adsorption (attachment).' }]
        },
        {
          label: '49',
          marks: 1,
          prompt:
            'Viral DNA or RNA that has integrated into the host bacterial chromosome during the lysogenic cycle is known as a __________ .',
          answer: 'prophage',
          principle: 'In the lysogenic cycle the phage genome integrates into the host chromosome as a prophage.',
          solution: 'Phage DNA integrated in the bacterial chromosome and copied with it during cell division is a prophage.',
          rubric: [{ code: 'A1', text: 'Correct term: prophage.' }]
        },
        {
          label: '50',
          marks: 1,
          prompt:
            'Because viruses lack their own cellular organelles, they must hijack the host cell’s _______________ to synthesize new capsid proteins.',
          answer: 'ribosomes (protein-synthesising machinery)',
          principle: 'Viral proteins are made by translation on host ribosomes.',
          solution:
            'Viruses have no ribosomes, so viral mRNA is translated on the host cell’s ribosomes (with host tRNA and amino acids) to make capsid proteins.',
          rubric: [{ code: 'A1', text: 'Correct term: ribosomes (protein-synthesis machinery).' }]
        },
        {
          label: '51',
          marks: 1,
          prompt:
            'Environmental stressors, such as exposure to UV radiation or toxic chemicals, can trigger a prophage to excise itself from the bacterial DNA and initiate the _______________ cycle.',
          answer: 'lytic',
          principle: 'Induction switches a lysogenic phage into the lytic cycle.',
          solution:
            'Stress such as UV radiation induces the prophage to leave the bacterial chromosome and begin the lytic cycle, producing new phages and lysing the cell.',
          rubric: [{ code: 'A1', text: 'Correct term: lytic.' }]
        },
        {
          label: '52',
          marks: 3,
          prompt:
            'A tobacco plant is infected with Tobacco Mosaic Virus (TMV) and displays chlorosis (yellow patches on its leaves). Explain why this viral infection leads to reduced glucose production and stunted growth in the infected plant.',
          answer:
            'TMV replicates using the host cell’s resources and damages chloroplasts, so chlorophyll falls (chlorosis) and less light is absorbed; photosynthesis and glucose production decrease, leaving less energy and carbon for growth, so the plant is stunted.',
          principle: 'Viral infection of leaf cells reduces chlorophyll and photosynthesis, limiting glucose supply for growth.',
          solution:
            'TMV infects leaf cells and uses the host’s machinery and resources to replicate, which damages the cells and their chloroplasts. The loss of chlorophyll appears as yellow patches (chlorosis), so less light is absorbed and the rate of photosynthesis falls. Less glucose is made, so less energy (from respiration) and carbon are available for growth, and the plant is stunted.',
          rubric: [
            { code: 'B1', text: 'TMV replicates in leaf cells using host resources, damaging cells and chloroplasts.' },
            { code: 'B1', text: 'Chlorosis means less chlorophyll, so less light absorbed and reduced photosynthesis and glucose production.' },
            { code: 'B1', text: 'Less glucose means less energy and material for growth, giving stunted growth.' }
          ]
        },
        {
          label: '53',
          marks: 3,
          prompt:
            'A researcher genetically modifies the spike (surface) proteins of a specific virus, altering their shape completely. Predict the effect of this modification on the virus’s ability to infect its target host cells. Justify your answer based on the mechanism of viral attachment (adsorption).',
          answer:
            'The virus would lose most or all ability to infect its target cells, because the altered spike no longer fits the host receptors, so adsorption cannot occur and the virus cannot enter or replicate.',
          principle: 'Adsorption requires a spike shape complementary to the host receptor (lock-and-key).',
          solution:
            'Adsorption, the first step of infection, depends on the spike protein having a shape complementary to a specific receptor on the host cell. A completely changed spike no longer fits the receptor, so the virus cannot attach to its target cells. Without attachment it cannot enter the cell or use the host machinery, so infection is greatly reduced or prevented. (The new shape would match the original receptor only by extremely unlikely chance.)',
          rubric: [
            { code: 'B1', text: 'Predicts greatly reduced or abolished infection of the target host cells.' },
            { code: 'B1', text: 'Adsorption needs spike shape complementary to the host receptor (lock-and-key).' },
            { code: 'B1', text: 'Without attachment the virus cannot enter or replicate in the cell.' }
          ]
        },
        {
          label: '54',
          marks: 4,
          prompt:
            'Consider two different bacteriophages in an experiment:\n• Phage A: Infects E. coli cells and causes the bacterial population to burst (lyse) within 30 minutes.\n• Phage B: Infects E. coli cells, but the bacteria continue to live, divide normally, and carry the viral genome across multiple generations.\n\nIdentify the reproductive cycle utilized by Phage A and Phage B, and explain the key difference in what happens to the host cell’s DNA in each cycle.',
          answer:
            'Phage A uses the lytic cycle; Phage B uses the lysogenic cycle. In the lytic cycle the phage takes over the host, its DNA is not integrated and the host DNA is broken down, and new phages are made until the cell lyses. In the lysogenic cycle the phage DNA integrates into the host chromosome as a prophage, the host DNA stays intact, and it is copied with the host DNA at each division.',
          principle: 'Lytic cycle: immediate virion production and lysis; lysogenic cycle: integration of viral DNA (prophage) and inheritance with host DNA.',
          solution:
            'Phage A lyses the bacteria quickly, which is the lytic cycle. Its DNA stays separate, directs the host to make phage components, the host DNA is degraded, and the cell bursts to release new phages. Phage B leaves the cells alive and passes the viral genome to descendants, which is the lysogenic cycle: the phage DNA integrates into the bacterial chromosome as a prophage, the host DNA remains intact and functional, and the prophage is replicated along with the host DNA at each division.',
          rubric: [
            { code: 'B1', text: 'Phage A uses the lytic cycle.' },
            { code: 'B1', text: 'Phage B uses the lysogenic cycle.' },
            { code: 'B1', text: 'Lytic: viral DNA directs production of new phages using the host, host DNA is degraded, and the cell lyses.' },
            { code: 'B1', text: 'Lysogenic: viral DNA integrates into the host chromosome (prophage), the host DNA stays intact and is replicated with it.' }
          ]
        },
        {
          label: '55',
          marks: 3,
          prompt:
            'An experimental antiviral drug acts specifically by preventing the assembly stage of newly synthesized viral components inside the host cell’s cytoplasm. If a host cell is already infected and treated with this drug, what will accumulate inside the cell, and will any infectious/virulent viruses be released upon cell lysis? Explain.',
          answer:
            'Unassembled viral components (viral nucleic acid and capsid proteins) will accumulate. No infectious viruses will be released, because complete virions require assembly of the genome into capsids; only non-infectious parts are released.',
          principle: 'Assembly combines newly made nucleic acid and proteins into complete virions; blocking it prevents formation of infectious particles.',
          solution:
            'The infected cell can still copy the viral genome and make capsid proteins, but the drug stops these parts being put together, so the cell fills with unassembled viral nucleic acid and capsid proteins (capsomeres). Infectious viruses are complete particles with the genome packaged in a capsid; without assembly none are formed. When the cell lyses, it releases only separate, non-infectious components, so no infectious viruses are released.',
          rubric: [
            { code: 'B1', text: 'Unassembled viral components (viral nucleic acid and capsid proteins) accumulate.' },
            { code: 'B1', text: 'No infectious/virulent viruses are released.' },
            { code: 'B1', text: 'Reason: without assembly no complete virions (genome packaged in capsid) form, so released parts are non-infectious.' }
          ]
        }
      ]
    }
  ]
};
