/**
 * Paket Soal Terstruktur: Chemistry Grade 10 – Periodicity & Periodic Trends (Essay)
 * Sumber: CAMBRIDGE_CHEMISTRY_GRADE_10_ESSAY.pdf (Duta e-dukasi).
 * Bahasa dipertahankan dalam Bahasa Inggris sesuai dokumen sumber.
 */
export default {
  id: 'kim10-cambridge-essay',
  slug: 'cambridge-chemistry-grade-10-essay',
  subject: 'kimia',
  grade: 10,
  track: 'cambridge-style',
  topic: 'Periodicity & Periodic Trends (Essay Assessment)',
  relatedChapterIds: [],
  lang: 'en',
  title: 'Chemistry Grade 10 – Periodicity & Periodic Trends (Essay)',
  totalMarks: 45,
  instructions:
    'Read each question carefully. Provide a comprehensive response using proper chemical principles, referencing atomic structure, effective nuclear charge, and orbital arrangements where applicable.',
  constants: [],
  source: {
    org: 'Duta e-dukasi',
    file: 'CAMBRIDGE_CHEMISTRY_GRADE_10_ESSAY.pdf',
    driveFolder: '1-l6x2B19j9xQ0d1',
    license: 'CC BY 4.0'
  },
  status: 'published',
  accessTier: 'free',
  questions: [
    {
      no: 1,
      title: 'Historical Development',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Compare Dimitri Mendeleev\'s approach to organizing the periodic table with that of Julius Lothar Meyer. What specific predictive feature made Mendeleev\'s system a groundbreaking advancement in chemistry?',
          answer:
            'Lothar Meyer organized elements primarily by physical properties (atomic volume vs. atomic mass), whereas Mendeleev prioritized similarities in chemical properties. Mendeleev\'s groundbreaking advancement was leaving gaps in his table and accurately predicting the existence and exact properties of undiscovered elements ($9$ out of $18$ missing elements at the time).',
          principle:
            'Early periodic tables organized elements by recurring properties as a function of atomic mass; Mendeleev prioritized chemical reactivity and left systematic gaps for unknown elements.',
          solution:
            'While Julius Lothar Meyer primarily organized his periodic table based on physical properties—such as plotting atomic volume against atomic mass—Dimitri Mendeleev heavily prioritized similarities in chemical properties and valence behavior.\n\nMendeleev\'s groundbreaking advancement was deliberately leaving gaps where no known element fit the recurring chemical pattern and predicting the existence and exact physical and chemical properties of those undiscovered elements (successfully predicting $9$ out of $18$ missing elements at the time).',
          rubric: [
            {
              code: 'B1',
              text: 'Contrasts Meyer\'s focus on physical properties (atomic volume vs. atomic mass) with Mendeleev\'s focus on chemical properties'
            },
            {
              code: 'M1',
              text: 'Identifies that Mendeleev deliberately left gaps in his table for undiscovered elements'
            },
            {
              code: 'A1',
              text: 'States that Mendeleev predicted the existence and exact properties of missing elements ($9$ out of $18$)'
            }
          ]
        }
      ]
    },
    {
      no: 2,
      title: 'Döbereiner\'s Triads',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'According to Johann Wolfgang Döbereiner\'s hypothesis of triads, elements with similar physical properties can be grouped in threes. If the first element, Calcium ($\\text{Ca}$), has an atomic mass of $40$, and the third element, Barium ($\\text{Ba}$), has an atomic mass of $137$, demonstrate how to calculate the predicted atomic mass of the middle element, Strontium ($\\text{Sr}$).',
          answer: 'The predicted atomic mass of Strontium ($\\text{Sr}$) is $88.5$.',
          answerNumeric: [{ name: 'Sr_atomic_mass', value: 88.5, unit: 'u' }],
          principle:
            'In Döbereiner\'s triads, three chemically similar elements have atomic masses such that the middle element\'s atomic mass is approximately the arithmetic mean of the first and third elements.',
          solution:
            'Döbereiner proposed that the middle element of a triad has an atomic mass roughly equal to the average of the first and third elements:\n$$\\text{Predicted atomic mass of Sr} = \\frac{40 + 137}{2} = \\frac{177}{2} = 88.5$$\nThus, the predicted atomic mass for Strontium ($\\text{Sr}$) is $88.5$.',
          rubric: [
            {
              code: 'B1',
              text: 'States Döbereiner\'s triad rule that the middle element\'s atomic mass approximates the mean of the first and third elements'
            },
            {
              code: 'M1',
              text: 'Sets up the arithmetic mean correctly as $\\frac{40 + 137}{2}$'
            },
            {
              code: 'A1',
              text: 'Correctly evaluates the predicted atomic mass of Strontium as $88.5$'
            }
          ]
        }
      ]
    },
    {
      no: 3,
      title: 'Effective Nuclear Charge',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Define Effective Nuclear Charge ($Z_{\\text{eff}}$). Calculate the $Z_{\\text{eff}}$ for an atom with the electron configuration $1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^5$, and explicitly explain how the inner electron shells influence this numerical value.',
          answer:
            '$Z_{\\text{eff}} = +7$. Effective Nuclear Charge is the net positive force from the nucleus pulling on the outermost valence electrons; the $10$ inner-shell electrons in shells $1$ and $2$ shield $10$ protons of the $+17$ nuclear charge.',
          answerNumeric: [{ name: 'Z_eff', value: 7, unit: '' }],
          principle:
            'Effective nuclear charge is approximately the total nuclear charge $Z$ minus the shielding (screening) constant $S$ from inner core electrons: $Z_{\\text{eff}} \\approx Z - S$.',
          solution:
            'Effective Nuclear Charge ($Z_{\\text{eff}}$) is the net positive force from the nucleus pulling on the outermost valence electrons.\n\nFor the electron configuration $1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^5$, the atom has $17$ total electrons (and $Z = 17$ protons). The inner completed shells (shell $1$: $1s^2$, and shell $2$: $2s^2\\ 2p^6$) contain $2 + 8 = 10$ core electrons that shield the $7$ valence electrons in shell $3$ ($3s^2\\ 3p^5$).\n$$Z_{\\text{eff}} = Z - S = 17 - 10 = +7$$\nBecause the full inner shells shield $10$ protons, a net charge of $+7$ pulls on the outermost valence electrons.',
          rubric: [
            {
              code: 'B1',
              text: 'Defines Effective Nuclear Charge ($Z_{\\text{eff}}$) as the net positive nuclear pull experienced by the outermost valence electrons'
            },
            {
              code: 'M1',
              text: 'Identifies $10$ core electrons in completed inner shells $1$ and $2$ shielding the nuclear charge ($Z = 17$)'
            },
            {
              code: 'A1',
              text: 'Calculates $Z_{\\text{eff}} = +7$ and links the value to the shielding effect of the $10$ inner-shell electrons'
            }
          ]
        }
      ]
    },
    {
      no: 4,
      title: 'Atomic Radius Trend',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Explain the overarching role of Effective Nuclear Charge ($Z_{\\text{eff}}$) in dictating why the atomic radius consistently decreases as one moves from left to right across a period.',
          answer:
            'Across a period from left to right, proton number and $Z_{\\text{eff}}$ increase while added electrons enter the same valence shell without increasing inner-shell shielding, pulling the electron cloud closer to the nucleus and shrinking atomic radius.',
          principle:
            'Across a period, electrons are added to the same principal energy level while nuclear charge increases, so core shielding remains nearly constant and $Z_{\\text{eff}}$ increases.',
          solution:
            'As you move from left to right across a period, the atomic number (number of protons) increases, thereby increasing the Effective Nuclear Charge ($Z_{\\text{eff}}$). Because new electrons are added to the same principal energy level (valence shell), they do not increase inner-shell shielding. This stronger net electrostatic pull from the nucleus draws the electron cloud closer to the center, consistently decreasing the atomic radius.',
          rubric: [
            {
              code: 'B1',
              text: 'Notes that atomic number (protons) increases across a period while new electrons enter the same energy level'
            },
            {
              code: 'M1',
              text: 'Explains that inner-shell shielding does not increase significantly, causing $Z_{\\text{eff}}$ to rise'
            },
            {
              code: 'A1',
              text: 'Concludes that the stronger net nuclear attraction pulls the electron cloud inward, decreasing atomic radius'
            }
          ]
        }
      ]
    },
    {
      no: 5,
      title: 'Anomalies in Atomic Radius',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'The $d$-block elements in Period 6 exhibit an atomic radius that is remarkably similar to the $d$-block elements in Period 5, rather than being significantly larger as typically expected when descending a group. Identify and explain the subatomic phenomenon responsible for this exception.',
          answer:
            'Lanthanide contraction, caused by the poor shielding effect of the $4f$ subshell electrons, which leaves the outer $5d$ and $6s$ electrons exposed to a higher effective nuclear charge and pulls them inward.',
          principle:
            'Electrons in diffuse $f$ orbitals screen nuclear charge poorly ($s > p > d > f$), resulting in the lanthanide contraction across Period 6 transition metals.',
          solution:
            'This anomaly is caused by the **Lanthanide contraction**, which stems from the poor shielding effect of the $4f$ subshell. Prior to the Period 6 $d$-block elements, $14$ electrons fill the $4f$ orbitals. Because $4f$ electrons are spatially diffuse and shield nuclear charge very poorly, they do not effectively screen the outermost $5d$ and $6s$ electrons from the large increase in nuclear charge. This produces a higher-than-usual effective nuclear attraction that pulls the outer electrons inward, offsetting the expected shell expansion from Period 5 to Period 6.',
          rubric: [
            {
              code: 'B1',
              text: 'Identifies the phenomenon as the Lanthanide contraction'
            },
            {
              code: 'M1',
              text: 'Explains that filling the $4f$ subshell provides poor shielding of the increased nuclear charge'
            },
            {
              code: 'A1',
              text: 'Concludes that stronger-than-expected attraction pulls the outer $5d$/$6s$ electrons inward, keeping Period 6 radii close to Period 5'
            }
          ]
        }
      ]
    },
    {
      no: 6,
      title: 'Ionization Energy Deviation (Group IIA vs IIIA)',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Despite the general periodic trend of increasing ionization energy from left to right, Aluminum ($577\\ \\text{kJ/mol}$) has a significantly lower first ionization energy than Magnesium ($738\\ \\text{kJ/mol}$). Justify this deviation by analyzing their respective electron orbital configurations and shielding effects.',
          answer:
            'Magnesium has a filled $3s^2$ subshell, whereas Aluminum\'s outermost electron occupies a higher-energy $3p^1$ orbital ($3s^2\\ 3p^1$) that is additionally shielded by the filled $3s^2$ pair, making it easier to remove.',
          principle:
            'Within the same principal shell, a $p$ orbital lies higher in energy and experiences greater screening by the filled $s$ subshell ($ns^2$) than an electron within the $ns^2$ subshell itself.',
          solution:
            'Magnesium has a completely filled, stable $3s$ orbital ($1s^2\\ 2s^2\\ 2p^6\\ 3s^2$). Aluminum\'s outermost electron enters the higher-energy $3p$ orbital ($1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^1$). The transition from an $s$ subshell to a $p$ subshell introduces extra shielding from the full $3s^2$ orbital and places the $3p^1$ electron further from the nucleus at higher energy. Consequently, less energy is required to remove the single $3p$ electron in Aluminum ($577\\ \\text{kJ/mol}$) than to remove an electron from the stable $3s^2$ pair in Magnesium ($738\\ \\text{kJ/mol}$).',
          rubric: [
            {
              code: 'B1',
              text: 'States the valence configurations: Magnesium ($3s^2$) vs. Aluminum ($3s^2\\ 3p^1$)'
            },
            {
              code: 'M1',
              text: 'Explains that Aluminum\'s $3p$ electron is higher in energy and receives extra shielding from the filled $3s^2$ orbital'
            },
            {
              code: 'A1',
              text: 'Concludes that less energy is needed to remove Aluminum\'s single $3p$ electron than to disrupt Magnesium\'s stable $3s^2$ pair'
            }
          ]
        }
      ]
    },
    {
      no: 7,
      title: 'Ionization Energy Deviation (Group VA vs VIA)',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Nitrogen (Group VA) possesses a higher first ionization energy than Oxygen (Group VIA), even though Oxygen is located further to the right in the same period. Explain the electron repulsion mechanism causing this anomaly.',
          answer:
            'Nitrogen has a half-filled $p^3$ configuration with unpaired electrons, while Oxygen has a $p^4$ configuration with one paired set of electrons in a $p$ orbital; same-orbital electron-electron repulsion makes Oxygen\'s paired electron easier to remove.',
          principle:
            'Pairing two electrons in the same $p$ orbital introduces inter-electronic repulsion that lowers the ionization energy relative to a half-filled $p^3$ configuration.',
          solution:
            'Group VA elements such as Nitrogen have a stable, half-filled $p$ subshell configuration ($2p^3$), where each of the three $p$ orbitals holds a single unpaired electron. Group VIA elements such as Oxygen have four $p$ electrons ($2p^4$), forcing one orbital to hold a pair of electrons. This pairing causes significant same-orbital electron-electron repulsion, making it easier (requiring less energy) to remove the paired electron in Oxygen than to remove an electron from the stable, half-filled $p^3$ subshell of Nitrogen.',
          rubric: [
            {
              code: 'B1',
              text: 'Contrasts Nitrogen\'s half-filled $p^3$ configuration with Oxygen\'s $p^4$ configuration'
            },
            {
              code: 'M1',
              text: 'Identifies that Oxygen has two electrons paired in the same $p$ orbital, creating significant electron-electron repulsion'
            },
            {
              code: 'A1',
              text: 'Explains that this repulsion lowers the energy needed to remove Oxygen\'s paired electron relative to Nitrogen'
            }
          ]
        }
      ]
    },
    {
      no: 8,
      title: 'Electron Affinity Basics',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Define the concept of electron affinity. Based on the concept of effective nuclear charge and atomic shielding, explain why electron affinity generally becomes less negative (decreases in magnitude) as you travel from top to bottom within a single group.',
          answer:
            'Electron affinity is the energy released when a neutral gaseous atom gains an electron to form a negative ion. Down a group, added electron shells increase atomic radius and inner-shell shielding, weakening the effective nuclear pull on an incoming electron and making the electron affinity less negative.',
          principle:
            'Greater distance from the nucleus and increased core-electron shielding down a group reduce the electrostatic attraction for an added electron.',
          solution:
            'Electron affinity is the amount of energy released (or energy change) when a neutral gaseous atom gains an electron to form a negative ion (anion).\n\nAs you travel from top to bottom within a group, new principal electron shells are added, increasing both the atomic radius (distance from the nucleus) and inner-shell shielding. This weakens the effective nuclear pull experienced by an incoming electron, making the atom less eager to attract it and resulting in a less negative electron affinity.',
          rubric: [
            {
              code: 'B1',
              text: 'Defines electron affinity as the energy change/released when a neutral gaseous atom gains an electron to form an anion'
            },
            {
              code: 'M1',
              text: 'Notes that descending a group adds new shells, increasing atomic distance and inner-shell shielding'
            },
            {
              code: 'A1',
              text: 'Concludes that weaker effective nuclear attraction on an incoming electron produces a less negative electron affinity'
            }
          ]
        }
      ]
    },
    {
      no: 9,
      title: 'Halogen Electron Affinity Inversion',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Fluorine is located directly above Chlorine in Group VIIA. According to standard vertical periodic trends, Fluorine should have a more negative electron affinity. However, Chlorine actually exhibits a higher (more negative) electron affinity. Discuss the subatomic spatial dynamics that cause this inversion.',
          answer:
            'Fluorine\'s valence electrons occupy a very small, compact $2p$ orbital, so adding an extra electron causes intense electron-electron repulsion. Chlorine\'s larger $3p$ orbital provides greater spatial volume, reducing repulsion and making electron addition more favorable.',
          principle:
            'High electron density in the compact $n = 2$ shell creates strong inter-electronic repulsion when an extra electron is added, partially offsetting the stronger nuclear attraction.',
          solution:
            'Fluorine holds its valence electrons in the very small, compact $2p$ subshell. When an extra electron enters this cramped spatial region, it experiences intense electron-electron repulsion from the existing valence electrons, resisting the addition.\n\nChlorine, located in Period 3, places its valence electrons in the much larger $3p$ subshell. This larger orbital volume significantly lowers electron-electron repulsion, allowing Chlorine to accept an extra electron more favorably and release more energy (a more negative electron affinity) than Fluorine.',
          rubric: [
            {
              code: 'B1',
              text: 'Identifies that Fluorine\'s valence electrons reside in a compact $2p$ orbital while Chlorine\'s reside in a larger $3p$ orbital'
            },
            {
              code: 'M1',
              text: 'Explains that Fluorine\'s cramped $2p$ space produces strong electron-electron repulsion against an incoming electron'
            },
            {
              code: 'A1',
              text: 'Concludes that Chlorine\'s larger $3p$ volume lowers repulsion, giving Chlorine a more negative electron affinity'
            }
          ]
        }
      ]
    },
    {
      no: 10,
      title: 'Positive Electron Affinities',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Elements in Group IIA (Alkaline Earth Metals) and Group VIIIA (Noble Gases) uniquely possess positive electron affinity values. Elaborate on why these specific elements effectively repulse the addition of an electron, rather than releasing energy upon gaining one.',
          answer:
            'Group IIA ($xs^2$) and Group VIIIA ($xs^2\\ xp^6$) have completely filled, highly stable valence subshells/shells; an added electron must enter a new, higher-energy orbital ($p$ or next principal shell), creating repulsion and requiring energy input (positive EA).',
          principle:
            'Adding an electron to an atom with a closed subshell or closed octet forces occupancy of a higher-energy, poorly shielded orbital, making electron gain endothermic.',
          solution:
            'Both Group IIA and Group VIIIA elements already possess completely filled, highly stable valence electron configurations: Group IIA has a filled $s$ subshell ($xs^2$), while Group VIIIA has a filled valence octet ($xs^2\\ xp^6$).\n\nBecause these configurations are exceptionally stable, an incoming electron cannot enter the existing filled subshell and is forced into a completely new, higher-energy orbital (the $p$ orbital for Group IIA, or the next principal energy shell for Group VIIIA). This creates net repulsion and instability, meaning energy must be supplied to the system (positive electron affinity) rather than released.',
          rubric: [
            {
              code: 'B1',
              text: 'Identifies the filled, stable valence configurations of Group IIA ($xs^2$) and Group VIIIA ($xs^2\\ xp^6$)'
            },
            {
              code: 'M1',
              text: 'Explains that an added electron is forced into a completely new, higher-energy orbital'
            },
            {
              code: 'A1',
              text: 'Concludes that this produces repulsion/endothermic addition, requiring energy input (positive electron affinity)'
            }
          ]
        }
      ]
    },
    {
      no: 11,
      title: 'Applying Electronegativity Trends',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Based purely on their positions in the periodic table and the rules of periodicity, arrange the following elements in order of strictly increasing electronegativity: Magnesium ($\\text{Mg}$), Chlorine ($\\text{Cl}$), Sodium ($\\text{Na}$), and Aluminum ($\\text{Al}$). Provide a brief theoretical justification for your sequence.',
          answer:
            '$\\text{Na} < \\text{Mg} < \\text{Al} < \\text{Cl}$. All four lie in Period 3; moving left to right increases atomic number and $Z_{\\text{eff}}$ without adding inner shielding shells, strengthening attraction for shared electrons.',
          principle:
            'Electronegativity increases from left to right across a period because rising $Z_{\\text{eff}}$ and shrinking atomic radius allow the nucleus to attract bonding electrons more strongly.',
          solution:
            'Order of strictly increasing electronegativity:\n$$\\text{Na} < \\text{Mg} < \\text{Al} < \\text{Cl}$$\n**Justification:** Sodium ($\\text{Na}$), Magnesium ($\\text{Mg}$), Aluminum ($\\text{Al}$), and Chlorine ($\\text{Cl}$) all belong to Period 3. Electronegativity—the tendency of an atom to attract shared electrons in a chemical bond—increases from left to right across a period. As atomic number increases across Period 3, Effective Nuclear Charge ($Z_{\\text{eff}}$) increases without adding new inner shielding shells, pulling shared bonding electrons more strongly toward the nucleus.',
          rubric: [
            {
              code: 'B1',
              text: 'Correctly orders the elements as $\\text{Na} < \\text{Mg} < \\text{Al} < \\text{Cl}$'
            },
            {
              code: 'M1',
              text: 'Recognizes that all four elements are in Period 3 and $Z_{\\text{eff}}$ increases left-to-right without extra core shielding'
            },
            {
              code: 'A1',
              text: 'Links rising $Z_{\\text{eff}}$ across the period to stronger attraction for shared bonding electrons (higher electronegativity)'
            }
          ]
        }
      ]
    },
    {
      no: 12,
      title: 'Noble Gas Exceptions',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Noble gases (Group VIIIA) are generally excluded from electronegativity charts and trends. Explain why this exclusion is standard practice, and state one rare compound mentioned in your text that serves as an exception to this rule.',
          answer:
            'Noble gases have full, stable valence octets and rarely attract shared electrons or form chemical bonds, so electronegativity is generally undefined/excluded for them. A rare exception mentioned is Xenon difluoride ($\\text{XeF}_2$).',
          principle:
            'Electronegativity measures an atom\'s ability to attract shared electrons in a covalent bond; closed-shell noble gases are largely chemically inert, with rare heavy-element fluorides/oxides as exceptions.',
          solution:
            'Noble gases (Group VIIIA) naturally possess a completely filled, highly stable valence shell (an octet, or $1s^2$ duet for Helium). Consequently, they have little tendency to attract shared electrons to achieve stability and rarely form chemical bonds, which is why they are routinely excluded from standard electronegativity charts.\n\nHowever, rare exceptions exist among the heavier noble gases when reacting with highly electronegative elements—specifically Xenon difluoride ($\\text{XeF}_2$).',
          rubric: [
            {
              code: 'B1',
              text: 'Explains that noble gases possess full, stable valence shells (octets)'
            },
            {
              code: 'M1',
              text: 'States that they do not need to attract shared electrons and rarely form chemical bonds, leading to exclusion from charts'
            },
            {
              code: 'A1',
              text: 'Correctly names Xenon difluoride ($\\text{XeF}_2$) as the rare exception compound'
            }
          ]
        }
      ]
    },
    {
      no: 13,
      title: 'The Modern Periodic Table',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'In the context of the Modern Periodic Table\'s development, how did the discovery of the atomic number by Rutherford and its application to periodicity by Moseley resolve the inconsistencies found in Mendeleev’s original mass-based arrangement?',
          answer:
            'Ordering by atomic number (proton count) rather than atomic weight fixed element pair inversions where chemical properties conflicted with mass order, and cleanly accommodated rare-earth and radioactive elements.',
          principle:
            'Periodic chemical behavior is governed by nuclear charge (atomic number $Z$) and resulting electron configuration, rather than atomic mass.',
          solution:
            'Mendeleev originally arranged elements by increasing atomic weight, which occasionally forced elements with mismatched chemical properties out of order (since isotopic abundance can make a lower-$Z$ element heavier than a higher-$Z$ neighbor). Rutherford\'s characterization of nuclear charge and Moseley\'s use of atomic number (number of protons) provided the true fundamental basis for periodicity. Ordering by atomic number naturally resolved all mass-based reversals and systematically accommodated newly discovered rare-earth and radioactive elements.',
          rubric: [
            {
              code: 'B1',
              text: 'Identifies that Mendeleev\'s mass-based ordering caused element placement discrepancies relative to chemical properties'
            },
            {
              code: 'M1',
              text: 'States that atomic number (number of protons) provides the fundamental physical basis for periodic order'
            },
            {
              code: 'A1',
              text: 'Explains that ordering by atomic number resolved mass inversions and accommodated rare-earth and radioactive elements'
            }
          ]
        }
      ]
    },
    {
      no: 14,
      title: 'Relating Periodic Trends',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'How does the change in atomic radius directly influence the trend of ionization energy as an observer moves from the top to the bottom of a specific group? Explain the interconnected physics of these two properties.',
          answer:
            'Moving down a group adds principal electron shells, increasing atomic radius. Greater distance from the nucleus plus increased inner-shell shielding weakens electrostatic attraction on valence electrons, causing ionization energy to decrease.',
          principle:
            'Electrostatic attraction between the nucleus and valence electrons weakens rapidly with increasing radial distance and core shielding, lowering the energy needed for electron removal.',
          solution:
            'As an observer moves from top to bottom down a group, successive principal energy levels (shells) are added, directly increasing the atomic radius. This larger radius places the outermost valence electrons much farther from the positively charged nucleus. Combined with greater inner-shell shielding, the increased distance substantially weakens the nuclear electrostatic pull on the valence electrons, making them far easier to remove—and therefore causing first ionization energy to decrease down the group.',
          rubric: [
            {
              code: 'B1',
              text: 'States that atomic radius increases down a group due to added principal energy shells'
            },
            {
              code: 'M1',
              text: 'Explains that greater distance and increased inner-shell shielding reduce the nuclear pull on outermost valence electrons'
            },
            {
              code: 'A1',
              text: 'Concludes that valence electrons become easier to remove, so ionization energy decreases down a group'
            }
          ]
        }
      ]
    },
    {
      no: 15,
      title: 'd-block Irregularities',
      marks: 3,
      stem: '',
      figures: [],
      parts: [
        {
          label: 'a',
          marks: 3,
          prompt:
            'Across various periodic properties—such as atomic radius, ionization energy, and electronegativity—the $d$-block elements frequently display irregular or dampened trends compared to the $s$ and $p$ blocks. Explain the fundamental structural reason for these irregularities in transition metals.',
          answer:
            'In $d$-block elements, added electrons fill an inner $(n-1)d$ subshell while the outer $ns$ shell is already occupied; these inner $d$ electrons shield the outer $ns$ electrons from the rising nuclear charge, dampening periodic changes.',
          principle:
            'Because transition metals add electrons to inner $(n-1)d$ orbitals rather than the outermost $ns$ valence shell, added nuclear charge is partially offset by increased inner shielding.',
          solution:
            'Unlike $s$- and $p$-block elements that add electrons to their outermost principal shell, $d$-block transition metals fill inner $(n-1)d$ subshells while the outermost $ns$ shell is already occupied (e.g., filling $3d$ orbitals while $4s$ electrons occupy the outer shell). Because these added $d$ electrons reside inside the outer valence shell, they contribute substantial inner-shell and same-shell shielding against the growing nuclear charge. As a result, the effective nuclear charge felt by the outer electrons changes much more gradually, dampening and creating irregularities in trends like atomic radius, ionization energy, and electronegativity.',
          rubric: [
            {
              code: 'B1',
              text: 'Identifies that $d$-block elements add electrons to inner $(n-1)d$ subshells while the outermost $ns$ shell is already occupied (e.g., $3d$ inside $4s$)'
            },
            {
              code: 'M1',
              text: 'Explains that these inner $d$ electrons increase inner-shell and same-shell shielding of the outer valence electrons'
            },
            {
              code: 'A1',
              text: 'Concludes that this shielding offsets the rising nuclear charge, causing dampened or irregular periodic trends'
            }
          ]
        }
      ]
    }
  ]
};
