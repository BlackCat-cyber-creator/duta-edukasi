/**
 * Paket Soal: IMSO 18th — Science Theory I (International Mathematics and Science Olympiad, Primary, 2021)
 * Sumber: IMSO 18th Science Theory 1.pdf (30 soal lengkap: 27 pilihan ganda dan 3 isian singkat).
 * Bahasa dipertahankan sesuai naskah sumber (Inggris). Seluruh diagram, grafik, dan bagan asli
 * dimuat sebagai gambar terpotong rapi di public/papers/imso-18-science-theory-1/.
 */
export default {
  id: 'imso-18-science-theory-1',
  slug: 'imso-18-science-theory-1',
  subject: 'olimpiade-sains',
  grade: 6,
  track: 'olimpiade-sd',
  accessTier: 'free',
  topic: 'IMSO 18th Science Theory I: biology, physics, chemistry, earth & space science (Primary)',
  relatedChapterIds: [
    'ipa4-bab2-gaya-di-sekitar-kita',
    'ipa5-bab1-cahaya-dan-sifatnya',
    'ipa5-bab3-listrik-dan-magnet-sederhana',
    'ipa5-bab4-ekosistem-dan-siklus-air'
  ],
  lang: 'en',
  langDisplay: 'EN',
  competition: 'IMSO',
  title: 'IMSO 18th \u2014 Science Theory I',
  totalMarks: 30,
  instructions:
    'Attempt all 30 questions (time allowed: 60 minutes). Section A contains 27 multiple-choice questions (1 mark each) and Section B contains 3 short-answer questions (1 mark each), for a total of 30 marks. Diagrams are not drawn to scale and are intended as aids only.',
  source: {
    org: 'IMSO',
    file: 'IMSO 18th Science Theory 1.pdf',
    license: 'Hak cipta pada penyelenggara; dimuat sebagai bahan latihan dan pembahasan edukatif'
  },
  status: 'published',
  questions: [
    {
      no: 1,
      title: 'Section A: Multiple Choice',
      marks: 27,
      stem: 'Choose the one correct answer for each question (27 questions, 1 mark each).',
      parts: [
        {
          label: '1',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-1.webp',
              alt: 'Four speed-versus-time graphs labeled A, B, C, and D showing different curve shapes',
              caption: 'Speed vs. time graphs A, B, C, and D for a falling feather.'
            }
          ],
          prompt:
            'Which of the following speed vs time graph best represents the motion of a feather dropping vertically through air?\n\nA. Graph A\nB. Graph B\nC. Graph C\nD. Graph D',
          answer: 'C. Graph C',
          principle:
            'As a falling object speeds up in air, upward air resistance grows until it balances downward weight, causing acceleration to decrease to zero and speed to level off at terminal velocity.',
          solution:
            'When a feather is released from rest ($v = 0$), air resistance is initially zero, so gravity accelerates it downward at the maximum initial rate (steep initial slope).\nAs speed increases, upward air drag increases and opposes gravity, reducing the net downward force and hence reducing the acceleration (the slope of the speed–time graph becomes gentler).\nEventually air resistance equals the weight of the feather, net force becomes zero, and the feather falls at a constant terminal speed (horizontal plateau).\nOnly Graph C starts at zero speed, rises with decreasing slope, and levels off.',
          rubric: [{ code: 'A1', text: 'Selects option C (Graph C).' }]
        },
        {
          label: '2',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-2.webp',
              alt: 'Four circuit cards labeled A, B, C, and D with clips numbered 1 to 4 and connecting wires',
              caption: 'Circuit card wiring layouts A, B, C, and D.'
            }
          ],
          prompt:
            'A circuit card is tested with a circuit tester. The pairs of clips that can cause the bulb in the circuit tester to light up are listed below:\n\n- $1$ and $3$\n- $1$ and $4$\n- $3$ and $4$\n\nWhich of the following can the circuit card be?\n\nA. Card A\nB. Card B\nC. Card C\nD. Card D',
          answer: 'C. Card C',
          principle:
            'A tester bulb lights whenever a closed conducting path exists between the two tested clips; any pair chosen from the same connected set of clips forms a closed circuit.',
          solution:
            'The bulb lights for every pair among clips $\\{1, 3, 4\\}$, meaning clips $1$, $3$, and $4$ must all be electrically connected to one another while clip $2$ is isolated:\n- Card A connects $1$–$2$–$3$ (clip $4$ is isolated, so $1$ and $4$ will not light).\n- Card B connects $1$–$3$ and $2$–$4$ separately ($1$ and $4$ will not light).\n- Card C connects $1$ to $3$ and $1$ to $4$ (leaving $2$ isolated), so $1$–$3$, $1$–$4$, and $3$–$4$ (via $1$) all form closed paths.\n- Card D connects $1$–$2$ and $1$–$4$ (clip $3$ is isolated, so $1$ and $3$ will not light).\nTherefore, only Card C matches the test results.',
          rubric: [{ code: 'A1', text: 'Selects option C (Card C).' }]
        },
        {
          label: '3',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-3.webp',
              alt: 'Four oscilloscope waveform traces labeled A, B, C, and D on equal grid backgrounds',
              caption: 'Oscilloscope traces A, B, C, and D capturing sound waves.'
            }
          ],
          prompt:
            'The diagrams show traces on an oscilloscope when a microphone is attached to it to capture the sound. Which diagram shows the loudest sound and highest pitch?\n\nA. Trace A\nB. Trace B\nC. Trace C\nD. Trace D',
          answer: 'C. Trace C',
          principle:
            'Loudness corresponds to wave amplitude (vertical height from equilibrium to crest), and pitch corresponds to frequency (number of complete wave cycles in a fixed horizontal time span).',
          solution:
            'Compare amplitude and frequency across the four equal grids:\n- Amplitude (loudness): Traces C and D reach the tallest vertical peak-to-trough height ($6$ grid divisions, amplitude $3$ divisions), whereas A spans $4$ divisions and B spans $2$ divisions. Thus C and D represent the loudest sounds.\n- Frequency (pitch): Across the same horizontal time window, Trace C completes $4.5$ full cycles while Trace D completes only $2.5$ cycles. More cycles in the same time means higher frequency and higher pitch.\nHence Trace C shows both the loudest sound and the highest pitch.',
          rubric: [{ code: 'A1', text: 'Selects option C (Trace C).' }]
        },
        {
          label: '4',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-4.webp',
              alt: 'Illustration of an astronaut on the lunar surface with a hammer and a feather',
              caption: 'Free fall experiment on the Moon with a hammer and a feather.'
            }
          ],
          prompt:
            'In 1971, astronaut David Scott conducted a free fall experiment on the surface of the moon. In his experiment he dropped the hammer and the feather at the same time.\n\nWhich row describes the acceleration and the velocity of the hammer and the feather when dropped on the moon?\n\n| | acceleration | velocity |\n| :--- | :--- | :--- |\n| A | constant | constant |\n| B | constant | increasing |\n| C | increasing | constant |\n| D | increasing | increasing |\n\nA. Row A\nB. Row B\nC. Row C\nD. Row D',
          answer: 'B. Row B',
          principle:
            'In the Moon’s vacuum, there is no air resistance, so all falling objects experience constant gravitational acceleration ($g_{\\text{Moon}} \\approx 1.62\\text{ m/s}^2$) and steadily increasing downward velocity.',
          solution:
            'Because the Moon has virtually no atmosphere, no air drag acts on either the hammer or the feather.\nBoth objects accelerate downward under the Moon’s uniform gravitational field at a constant acceleration ($g_{\\text{Moon}} \\approx 1.62\\text{ m/s}^2$).\nUnder constant downward acceleration from rest, their downward velocity increases linearly with time ($v = g_{\\text{Moon}} t$). Thus acceleration is constant and velocity is increasing (row B).',
          rubric: [{ code: 'A1', text: 'Selects option B (constant acceleration, increasing velocity).' }]
        },
        {
          label: '5',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-5.webp',
              alt: 'Single grey iron block labeled A next to two identical stacked iron blocks labeled B',
              caption: 'Single iron block A and two stacked identical blocks B.'
            }
          ],
          prompt:
            'The diagram shows blocks of iron. All blocks are of the same size.\n\nCompared to block A, the pile of blocks in B has\n\nA. the same volume but twice the density.\nB. has the same density but twice the mass and volume.\nC. has the same mass and volume but twice the density.\nD. twice the mass, volume, and density.',
          answer: 'B. has the same density but twice the mass and volume.',
          principle:
            'Mass and volume are extensive properties that double when two identical blocks are combined, whereas density ($\\rho = m/V$) is an intensive property of the material and remains unchanged.',
          solution:
            'Let block A have mass $m$ and volume $V$. Its density is $\\rho = \\frac{m}{V}$.\nPile B consists of $2$ identical iron blocks, so its total mass is $2m$ and its total volume is $2V$ (twice the mass and twice the volume of A).\nIts density is\n$$\\rho_B = \\frac{2m}{2V} = \\frac{m}{V} = \\rho,$$\nwhich is identical to that of block A because both are made of iron.',
          rubric: [{ code: 'A1', text: 'Selects option B.' }]
        },
        {
          label: '6',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-6.webp',
              alt: 'Pascal communicating vases of four different shapes filled to the same water level with points A, B, C, and D at the base',
              caption: 'Four objects A, B, C, and D submerged at equal depth in Pascal’s vases.'
            }
          ],
          prompt:
            'The diagram below shows Pascal\u2019s vases filled with water. Four objects are submerged in the same depth in each vase. Which object experiences the greatest water pressure?\n\nA. A only\nB. A and B only\nC. B, C, and D only\nD. All objects experience the same amount of pressure.',
          answer: 'D. All objects experience the same amount of pressure.',
          principle:
            'Hydrostatic pressure at depth $h$ in a stationary liquid of density $\\rho$ is $P = \\rho g h$, which depends only on vertical depth and not on the shape or width of the container.',
          solution:
            'All four connected tubes contain the same liquid (water) with free surfaces at the same horizontal level, and objects A, B, C, and D lie at the same vertical depth $h$ below that surface.\nBy the hydrostatic pressure formula $P = \\rho g h$, water pressure depends only on fluid density $\\rho$, gravitational acceleration $g$, and depth $h$—not on the vessel’s cross-sectional shape or volume of water above. Therefore, all four objects experience the exact same water pressure.',
          rubric: [{ code: 'A1', text: 'Selects option D.' }]
        },
        {
          label: '7',
          marks: 1,
          prompt:
            'Five bars of the same size are each placed with one end in boiling water.\nThe times taken for the temperature of the other end to increase by $4^{\\circ}\\text{C}$ are measured.\n\n| material of bar | time for $4^{\\circ}\\text{C}$ rise (seconds) |\n| :--- | :---: |\n| aluminum | 10 |\n| copper | 5 |\n| cork | 800 |\n| Styrofoam | 1200 |\n| Iron | 8 |\n\nTo make a large metal tank with the least heat loss, which materials should be used for the walls of the tank and its insulation?\n\n| | tank | insulation |\n| :--- | :--- | :--- |\n| A | aluminum | cork |\n| B | aluminum | Styrofoam |\n| C | copper | cork |\n| D | iron | Styrofoam |\n\nA. Row A\nB. Row B\nC. Row C\nD. Row D',
          answer: 'B. Row B',
          principle:
            'A longer time for the same $4^{\\circ}\\text{C}$ temperature rise indicates slower heat conduction (lower thermal conductivity), which minimizes heat loss.',
          solution:
            'To minimize heat loss from the tank, both the metal wall material and the insulating material should conduct heat as slowly as possible (i.e. take the longest time for the $4^{\\circ}\\text{C}$ rise):\n- Among the three metals, aluminum takes $10\\text{ s}$ ($0.4^{\\circ}\\text{C/s}$), iron takes $8\\text{ s}$ ($0.5^{\\circ}\\text{C/s}$), and copper takes $5\\text{ s}$ ($0.8^{\\circ}\\text{C/s}$). Thus **aluminum** conducts heat the slowest among the metals.\n- Among the insulators, **Styrofoam** takes $1200\\text{ s}$ compared with $800\\text{ s}$ for cork, making Styrofoam the better thermal insulator.\nHence aluminum for the tank and Styrofoam for the insulation (row B) gives the least heat loss.',
          rubric: [{ code: 'A1', text: 'Selects option B (aluminum tank, Styrofoam insulation).' }]
        },
        {
          label: '8',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-8.webp',
              alt: 'A circular metal washer next to a cylindrical metal rod of the same material',
              caption: 'Metal washer and metal rod made of the same material.'
            }
          ],
          prompt:
            'The image below shows a metal washer and a metal rod made of the same material. It was found out the hole of the washer is a little smaller for the rod to fit in.\n\nWhat should you do to fit the metal rod to the hole of the metal washer?\n\nA. Heat the washer then place it over the rod.\nB. Cool the washer and then place it over the rod.\nC. Cool the washer and heat the rod and then immediately push them together.\nD. Cool the washer and the rod to the same temperature and then push them together.',
          answer: 'A. Heat the washer then place it over the rod.',
          principle:
            'Thermal expansion is uniform in all directions: heating a solid object with a hole expands the inner diameter of the hole just as if the hole were filled with the same material.',
          solution:
            'When the metal washer is heated, every linear dimension of the washer—including the circumference and diameter of its central hole—increases proportionally ($\\Delta D = \\alpha D \\Delta T > 0$).\nEnlarging the hole while leaving the rod at room temperature allows the rod to slide through.\nBy contrast, cooling the washer shrinks the hole (B), heating the rod expands the rod (C), and cooling both identically shrinks both by the same fraction so the hole stays smaller than the rod (D).',
          rubric: [{ code: 'A1', text: 'Selects option A.' }]
        },
        {
          label: '9',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-9.webp',
              alt: 'Ray-optics diagram showing an upright arrow object in front of a convex mirror with focal point F and center of curvature C behind the mirror',
              caption: 'Object placed in front of a convex mirror.'
            }
          ],
          prompt:
            'The diagram below shows an object placed in front of a convex mirror.\n\nWhich of the following is true about the image of the object as seen in the mirror?\n\nA. The image is inverted and larger.\nB. The image is upright and smaller.\nC. The image is inverted and virtual.\nD. The image is upright and larger.',
          answer: 'B. The image is upright and smaller.',
          principle:
            'A convex (diverging) mirror always reflects incident rays outward so that their backward extensions intersect behind the mirror, forming a virtual, upright, and diminished image.',
          solution:
            'For any real object placed in front of a convex mirror:\n- Reflected rays diverge, so they never meet in front of the mirror; extending them backward behind the mirror produces a **virtual** image located between the mirror surface and focal point $F$.\n- Because the principal-axis ray and focal-directed ray intersect above the principal axis on the virtual side, the image is always **upright** and **smaller** (diminished) than the object.',
          rubric: [{ code: 'A1', text: 'Selects option B.' }]
        },
        {
          label: '10',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-10.webp',
              alt: 'Circle with center O and diameter AB showing radius r on each side',
              caption: 'Circular path of radius r from point A to diametrically opposite point B.'
            }
          ],
          prompt:
            'A particle is moving from point A to point B in a circular path of radius $r$.\n\nThe displacement after half a circle would be\n\nA. zero\nB. $\\pi r$\nC. $2r$\nD. $2\\pi r$',
          answer: 'C. $2r$',
          principle:
            'Displacement is the shortest straight-line vector from initial position to final position, whereas distance is the length of the path actually traveled.',
          solution:
            'After completing half a circle from point $A$ to the diametrically opposite point $B$:\n- The path length (distance traveled along the semicircle) is $\\pi r$.\n- The displacement is the straight-line segment connecting $A$ to $B$ through the center $O$, which equals the diameter $r + r = 2r$.',
          rubric: [{ code: 'A1', text: 'Selects option C ($2r$).' }]
        },
        {
          label: '11',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-11.webp',
              alt: 'Simple circuit schematic with a battery, an open switch, and a buzzer with positive and negative terminals',
              caption: 'Schematic diagram of a battery, switch, and buzzer circuit.'
            }
          ],
          prompt:
            'The schematic diagram shown below is composed of a battery, a switch, and a buzzer.\n\nIn electricity, two concepts are used to describe the flow of current; the conventional current and electron flow. Based on the electron flow notation, which sentence best describes how current flows through a simple circuit when the switch is closed?\n\nA. Current flows from both the negative and positive sides of the battery to the buzzer.\nB. Current flows from the negative side of the battery to the buzzer to the positive side of the battery.\nC. Current flows from the positive side of the battery to the negative side of the battery to the buzzer.\nD. Current flows from the positive side of the battery to the buzzer to the negative side of the battery.',
          answer: 'B. Current flows from the negative side of the battery to the buzzer to the positive side of the battery.',
          principle:
            'In electron flow notation, negatively charged electrons leave the negative terminal of the battery, travel through the external load, and return to the positive terminal.',
          solution:
            'When the switch closes the circuit:\n- Under **conventional current** (option D), current is treated as flowing from the positive terminal through the buzzer to the negative terminal.\n- Under **electron flow** notation (requested here), electrons are repelled from the negative terminal, pass through the buzzer (and closed switch), and are attracted to the positive terminal of the battery.\nThus option B correctly describes electron flow.',
          rubric: [{ code: 'A1', text: 'Selects option B.' }]
        },
        {
          label: '12',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-12.webp',
              alt: 'Two coastal photographs of Tanah Lot Temple taken on the same day at 7:25 AM with exposed rocky shore and at 1:35 PM surrounded by higher ocean water',
              caption: 'Coastal water levels at Tanah Lot Temple at 7:25 AM and 1:35 PM.'
            }
          ],
          prompt:
            'The Tanah Lot Temple in Bali, Indonesia holds a huge religious and cultural significance to its Hindu residents and is known to be a popular tourist site in the area. The pictures below show the same coastal location at two different times during the same day.\n\nWhich statement best explains the cause for the higher water level at 1:35 P.M.?\n\nA. The Moon rotates on its axis at the same rate that it revolves around Earth.\nB. The Moon exerts a gravitational pull on a rotating Earth.\nC. Earth\u2019s rotation causes a deflection of surface ocean currents.\nD. Earth\u2019s tilted axis causes different amounts of insolation throughout the day.',
          answer: 'B. The Moon exerts a gravitational pull on a rotating Earth.',
          principle:
            'Daily ocean tides (alternating low and high tides roughly every 6 hours) result from the Moon’s gravitational pull creating tidal bulges as Earth rotates beneath them.',
          solution:
            'At 7:25 AM the shoreline is exposed (low tide), whereas about $6\\text{ hours}$ and $10\\text{ minutes}$ later at 1:35 PM the sea level has risen (high tide).\nOcean tides are driven primarily by the Moon’s gravitational attraction pulling Earth’s oceans into tidal bulges while Earth rotates on its axis, carrying coastal locations into and out of high and low tides twice per day (roughly $6\\text{ hours}$ between low and high tide).',
          rubric: [{ code: 'A1', text: 'Selects option B.' }]
        },
        {
          label: '13',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-13.webp',
              alt: 'Satellite photograph of a large spiraling tropical cyclone over ocean waters near a coastline',
              caption: 'Satellite view of a rotating cyclone.'
            }
          ],
          prompt:
            'A Cyclone is a large air mass that rotates around a center. The appearance of a Cyclone is the result of the Coriolis Effect. The picture below shows a location being affected by a Cyclone.\n\nWhich of the following statements best explains the Coriolis Effect?\n\nA. The difference in speed of the Earth\u2019s rotation at different points.\nB. The air currents of different points of the Earth.\nC. Earth\u2019s tilted axis causes different wind speeds in the Northern and Southern hemispheres.\nD. Earth rotates at the same speed at the Equator and Poles.',
          answer: 'A. The difference in speed of the Earth\u2019s rotation at different points.',
          principle:
            'Because Earth is a rotating sphere, linear eastward speed varies with latitude (fastest at the Equator, zero at the Poles), deflecting winds moving across latitudes.',
          solution:
            'Every point on Earth completes one rotation in $24\\text{ hours}$, but points near the Equator travel a much larger circumference than points near the Poles, so their eastward linear speed ($v = \\omega R \\cos\\phi$) is much greater.\nWhen large air masses move north or south across latitudes toward a low-pressure center, this difference in Earth’s rotational speed causes the air path to deflect relative to Earth’s surface (to the right in the Northern Hemisphere and to the left in the Southern Hemisphere), producing the spiral rotation of a cyclone.',
          rubric: [{ code: 'A1', text: 'Selects option A.' }]
        },
        {
          label: '14',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-14.webp',
              alt: 'Line graph of average global air temperature changes from 1880 to 2015 showing labeled volcanic eruptions Krakatau, Santa Maria, Agung, El Chichon, and Pinatubo',
              caption: 'Average global air temperature changes since the late 1800s with major volcanic eruptions marked.'
            }
          ],
          prompt:
            'The graph shows the average global air temperature changes that have occurred since the late 1800s. Five volcanoes that experienced major eruptions during this time period are indicated.\n\n- **Statement A:** In the years immediately after each volcanic eruption occurred, average global air temperatures decreased because volcanic gases and dust blocked the sky.\n- **Statement B:** Volcanic eruptions have generally increased in strength since the late 1800s.\n\nWhich of the following can be said of Statement A and Statement B?\n\nA. Statement A is true, Statement B is false.\nB. Statement A is false, Statement B is true.\nC. Both statements are true.\nD. Neither statements are true.',
          answer: 'A. Statement A is true, Statement B is false.',
          principle:
            'Stratospheric volcanic dust and sulfate aerosols reflect incoming sunlight, causing short-term global cooling dips after major eruptions, while the graph displays temperature trends rather than eruption strength.',
          solution:
            '- **Statement A is true:** Directly beneath each marked eruption (Krakatau, Santa Mar\u00eda, Agung, El Chich\u00f3n, and Pinatubo), the temperature curve shows a clear temporary downward dip because volcanic ash and sulfate gases reflect solar radiation.\n- **Statement B is false:** The vertical axis plots *Air Temperature Change ($^{\\circ}\\text{C}$)*, not eruption strength. The upward baseline reflects long-term global warming rather than progressively stronger volcanic eruptions.',
          rubric: [{ code: 'A1', text: 'Selects option A.' }]
        },
        {
          label: '15',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-15.webp',
              alt: 'Map of Indonesia highlighting Sumatra with three geological rock outcrop columns for Padang, Bengkulu, and Bandar Lampung labeled layers A, B, and C from top to bottom',
              caption: 'Location map and three stratigraphic rock outcrops from Sumatra.'
            }
          ],
          prompt:
            'Geologists study the relative age of rock layers by studying exposed rocks (commonly called outcrops) and available fossils records in different locations. The cross sections below represent three outcrops (exposed rocks) taken from three different geological sites in Sumatra, namely, Padang, Bengkulu, and Bandar Lampung.\n\nWhen the rock layers in the three outcrops are correlated, the oldest and youngest layer is the:\n\n**A**\n\n| Oldest | Youngest |\n| :--- | :--- |\n| Layer B of Lampung Outcrop | Layer A of Bengkulu Outcrop |\n\n**B**\n\n| Oldest | Youngest |\n| :--- | :--- |\n| Layer C of Bengkulu Outcrop | Layer A of Bandar Lampung Outcrop |\n\n**C**\n\n| Oldest | Youngest |\n| :--- | :--- |\n| Layer B of Bandar Lampung Outcrop | Layer C of Padang Outcrop |\n\n**D**\n\n| Oldest | Youngest |\n| :--- | :--- |\n| Layer B of Bengkulu Outcrop | Layer A of Padang Outcrop |\n\nA. Table A\nB. Table B\nC. Table C\nD. Table D',
          answer: 'B. Table B',
          principle:
            'By the Principle of Superposition, lower undisturbed rock layers are older than upper layers; matching identical rock types and index fossils links the three columns into one chronological sequence.',
          solution:
            'Correlating identical rock patterns (lithologies) and fossils across the three outcrops from bottom (oldest) to top (youngest):\n1. **Bengkulu Layer A** (dashed shale with fan-shaped crinoid fossil) matches **Padang Layer C**, placing Bengkulu Layers C and B *below* Padang Layer C.\n2. **Padang Layer B** (brick-patterned limestone) matches **Bandar Lampung Layer C**, and **Padang Layer A** (dotted sandstone with spiral ammonite fossil) matches **Bandar Lampung Layer B**.\n3. **Bandar Lampung Layer A** (conglomerate with pebbles) rests directly on top of Bandar Lampung Layer B, above all layers in Padang and Bengkulu.\n\nCombining the sequence from oldest to youngest gives: Bengkulu C $\\rightarrow$ Bengkulu B $\\rightarrow$ Bengkulu A (Padang C) $\\rightarrow$ Padang B (Bandar Lampung C) $\\rightarrow$ Padang A (Bandar Lampung B) $\\rightarrow$ Bandar Lampung A.\nThus the oldest layer is **Layer C of Bengkulu Outcrop** and the youngest layer is **Layer A of Bandar Lampung Outcrop** (Table B).',
          rubric: [{ code: 'A1', text: 'Selects option B (Table B).' }]
        },
        {
          label: '16',
          marks: 1,
          prompt:
            'Consider the following reaction.\n\n| Reaction | Reactant W (gram) | Reactant X (gram) | Product Y (gram) | Product Z (gram) | EZ compound (gram) | EX compound (gram) | Time elapsed to produce the product (minutes) |\n| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n| 1 | 5 | 5 | 8 | 2 | - | - | 15 |\n| 2 | 5 | 5 | 8 | 2 | 0.5 | - | 8 |\n| 3 | 5 | 5 | 8 | 2 | - | 0.5 | 33 |\n\nThe reaction rate in the three reactions differ in the time required to produce the same product due to the addition of compounds EZ and EX. Based on your analysis, what could be the identity of compound EZ and EX?\n\nA. EZ-inhibitor; EX-catalyst\nB. EX-inhibitor; EZ-catalyst\nC. EZ-indicator; EX-isolator\nD. EX-indicator; EZ-isolator',
          answer: 'B. EX-inhibitor; EZ-catalyst',
          principle:
            'A catalyst speeds up a chemical reaction (shorter reaction time for the same yield), whereas an inhibitor slows down a reaction (longer reaction time).',
          solution:
            'All three trials use $5\\text{ g}$ of W and $5\\text{ g}$ of X to form the same $8\\text{ g}$ of Y and $2\\text{ g}$ of Z:\n- Reaction 1 (control, no additive) takes $15\\text{ minutes}$.\n- Reaction 2 (with $0.5\\text{ g}$ of EZ) finishes in $8\\text{ minutes}$ (faster by a factor of $15/8 = 1.875$), so **EZ is a catalyst**.\n- Reaction 3 (with $0.5\\text{ g}$ of EX) takes $33\\text{ minutes}$ (slower, $33 > 15$), so **EX is an inhibitor**.\nTherefore, EX is an inhibitor and EZ is a catalyst (option B).',
          rubric: [{ code: 'A1', text: 'Selects option B.' }]
        },
        {
          label: '17',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-17.webp',
              alt: 'Paper chromatography apparatus showing a strip of paper suspended in a beaker of water with an initial black ink spot separating into colored spots',
              caption: 'Paper chromatography setup before and after separation of black ink.'
            }
          ],
          prompt:
            'For this item, refer to the set-up below.\n\nIn a simple paper chromatography experiment, the black ink in the image separates into its individual elements (i.e. yellow, pink, blue, violet, green). The correct statement that explains the dispersion of the mixture is:\n\nA. The dyes that make up the ink have different solubilities so that different dispersion speeds occur causing the colors of the ink to separate\nB. The paper in the chromatography helps dissolve each part of the color that makes up the ink so that there are different colored spots\nC. There are differences in the solubility of each of the substances that make up the ink, but the color of the main element of the ink is only one, namely yellow\nD. All of the above',
          answer:
            'A. The dyes that make up the ink have different solubilities so that different dispersion speeds occur causing the colors of the ink to separate',
          principle:
            'Paper chromatography separates dissolved mixtures because components differ in their solubility in the moving solvent (water) and attraction to the stationary paper, giving each dye a distinct travel speed.',
          solution:
            'As water rises up the chromatography paper by capillary action, it dissolves the mixture of dyes in the black ink spot.\nDyes that are more soluble in water (and adhere less strongly to the paper fibers) travel faster and farther up the strip, whereas less soluble dyes travel more slowly and remain lower.\nOption B is incorrect because water—not the paper—is the solvent that dissolves the dyes, and option C is incorrect because black ink is a mixture of multiple distinct component dyes rather than mainly yellow. Hence option A is correct.',
          rubric: [{ code: 'A1', text: 'Selects option A.' }]
        },
        {
          label: '18',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-18.webp',
              alt: 'Horizontal metal rod with four wax drops W, X, Y, and Z and four positions E, F, G, and H marked by arrows underneath',
              caption: 'Metal rod with wax drops W, X, Y, Z and candidate heating points E, F, G, H.'
            }
          ],
          prompt:
            'A metal rod has four similar drops of wax labeled W, X, Y, and Z attached to it.\n\nThe metal rod was heated by the flame placed below it. The drops of wax melted in this order:\n\n**First to melt:** $\\text{Z} \\rightarrow \\text{Y} \\rightarrow \\text{X} \\rightarrow \\text{W}$ **(Last to melt)**\n\nAt which part of the metal rod, E, F, G, and H was the flame placed?\n\nA. E\nB. F\nC. G\nD. H',
          answer: 'D. H',
          principle:
            'Heat conducts outward along a metal rod from the heat source, so wax drops closer to the flame reach their melting temperature earlier than drops farther away.',
          solution:
            'Since the melting order from first to last is $\\text{Z} \\rightarrow \\text{Y} \\rightarrow \\text{X} \\rightarrow \\text{W}$, the distance of each wax drop from the flame must satisfy\n$$d_Z < d_Y < d_X < d_W.$$\nChecking the four positions along the rod:\n- At **H** (to the right of G and closest to Z), Z is nearest, followed by Y, then X, and W is farthest away, matching $\\text{Z} \\rightarrow \\text{Y} \\rightarrow \\text{X} \\rightarrow \\text{W}$.\n- At G, Y is closer than Z; at F, X and Y are closest; at E, W is closest.\nTherefore, the flame was placed at **H** (option D).',
          rubric: [{ code: 'A1', text: 'Selects option D (H).' }]
        },
        {
          label: '19',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-19.webp',
              alt: 'Cross-section of human head and nasal cavity showing lavender flower source S and neural structures P, Q, and R',
              caption: 'Diagram of the human olfactory pathway detecting odor from lavender.'
            }
          ],
          prompt:
            'Lavender is known to relieve anxiety, stress and fatigue by lowering the sympathetic nervous system activation. The diagram below shows how the human nervous system detected the odor from lavender flowers.\n\nWhich of the following statements are TRUE regarding the diagram labelled above?\n1. \u2018R\u2019 detects and transmit odorant information to the central nervous system\n2. \u2018Q\u2019 receives information about odors detected by \u2018P\u2019\n3. Aromatic compounds are trapped by mucus lining in the \u2018Q\u2019\n4. \u2018S\u2019 is the source releases aromatic compounds\n\nA. 1 and 2 only\nB. 1 and 4 only\nC. 2 and 3 only\nD. 3 and 4 only',
          answer: 'B. 1 and 4 only',
          principle:
            'Odorants released by a source dissolve in the nasal mucus, stimulate olfactory receptors in the nasal roof, and send impulses via the olfactory bulb to the brain.',
          solution:
            'Identify each labeled structure:\n- **S:** lavender flowers, the source releasing volatile aromatic odorant compounds (**statement 4 is true**).\n- **R:** olfactory receptor neurons in the roof of the nasal cavity, which detect odorants and transmit nerve signals toward the central nervous system (**statement 1 is true**).\n- **Q:** olfactory bulb, which receives signals *from* receptors **R** and relays them to the brain **P** (so statement 2 is false). Odorants are trapped in the mucus of the nasal cavity / olfactory epithelium **R**, not inside the cranial olfactory bulb **Q** (so statement 3 is false).\nThus only statements 1 and 4 are true (option B).',
          rubric: [{ code: 'A1', text: 'Selects option B (1 and 4 only).' }]
        },
        {
          label: '20',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-20.webp',
              alt: 'Line graph of mass versus days for seedling and seed leaves, seed anatomy diagram, and illustrations of bean germination from Day 1 to Day 8',
              caption: 'Mass changes of seedling and seed leaves during bean germination over 8 days.'
            }
          ],
          prompt:
            'Eight bean seeds were planted under suitable conditions and were allowed to grow. At the end of each day, one seedling is removed, dried, and then weighed to find the masses of its seed leaves and seedling separately. The findings are recorded in the graph below.\n\nBased on the graph, which one of the following is TRUE?\n\nA. Both their masses changed at the same rate.\nB. The mass of the seedling was similar to the mass of the seed leaves\nC. The mass of the seed leaves was always greater than the mass of the seedling\nD. The mass of the seed leaves decreased as the mass of the seedling increased',
          answer: 'D. The mass of the seed leaves decreased as the mass of the seedling increased',
          principle:
            'Before true green leaves develop, a germinating seedling consumes stored nutrients from its seed leaves (cotyledons), causing seed-leaf dry mass to drop while seedling dry mass rises.',
          solution:
            'From the graph over Days $1$ to $8$:\n- The dashed curve (**Seed leaves**) slopes continuously downward from Day $1$ to Day $8$, showing decreasing mass.\n- The solid curve (**Seedling**) slopes continuously upward from Day $1$ to Day $8$, showing increasing mass.\n- Option A is false because their slopes differ in sign and magnitude; Option B is false because the two curves are equal only at their intersection around Day $5.5$; Option C is false because after Day $6$ the seedling mass exceeds the seed-leaf mass.\nHence **D** is true.',
          rubric: [{ code: 'A1', text: 'Selects option D.' }]
        },
        {
          label: '21',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-21.webp',
              alt: 'Four pie charts labeled A, B, C, and D showing different proportions of Fats, Carbohydrates, and protein',
              caption: 'Four daily diet compositions A, B, C, and D showing shares of fats, carbohydrates, and protein.'
            }
          ],
          prompt:
            'Fats are food substances that play an essential role in your body. Although your body is capable of producing some types of fats, essential fatty acids such as Omega-3 can only be obtained from food. Fats are completely digested in the small intestine with the help of the enzyme lipase and the bile stored in the gallbladder.\n\nWhen a person has his gallbladder removed from his body, what could be the best suggestion on his daily diet for fats?\n\nA. Diet A\nB. Diet B\nC. Diet C\nD. Diet D',
          answer: 'C. Diet C',
          principle:
            'Without a gallbladder to store concentrated bile, large fat loads cannot be emulsified efficiently, so fat intake should be kept low—but not zero, because essential fatty acids must still come from food.',
          solution:
            'Evaluate each diet chart:\n- **Diet A** ($\\approx 67\\%$ fats) is far too high in fat and would overwhelm digestion without stored concentrated bile.\n- **Diet D** ($0\\%$ fats) completely removes fats, which is unsuitable because essential fatty acids such as Omega-3 cannot be synthesized by the body and must be obtained from food.\n- Comparing **Diet B** ($\\approx 23\\%$ fats, $37\\%$ carbohydrates, $40\\%$ protein) and **Diet C** ($\\approx 13\\%$ fats, $52\\%$ carbohydrates, $35\\%$ protein), **Diet C** restricts fat to a small, manageable share while keeping carbohydrates as the primary energy source.\nTherefore, **Diet C** is the best recommendation.',
          rubric: [{ code: 'A1', text: 'Selects option C (Diet C).' }]
        },
        {
          label: '22',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-22.webp',
              alt: 'Illustration of a lake held back by a dam feeding a winding river downstream past a valley farm',
              caption: 'Valley farm downstream of the Jatiluhur dam.'
            }
          ],
          prompt:
            'The following illustration depicts a farm built in a valley near the Jatiluhur dam. The presence of a dam can have both positive and negative effects on farming in the valley. Which of the following statements are a negative effect of the dam on farming?\n1) It slows down the river so it does not overflow and ruin the crops.\n2) Water is good for crops.\n3) The ground will be more fertile because of the large supply of water.\n4) If the dam breaks it could flood the valley and the crops.\n5) It slows down the river too much and the farm will not have enough water\n\nA. 1) and 2)\nB. 2) and 4)\nC. 3) and 5)\nD. 4) and 5)',
          answer: 'D. 4) and 5)',
          principle:
            'Flood prevention, crop irrigation, and moisture supply are benefits of a dam, whereas dam failure flooding and excessive downstream water restriction are harmful effects.',
          solution:
            'Classify each statement:\n- Statements 1, 2, and 3 describe **positive** effects (flood control, water supply for crops, and improved moisture/fertility).\n- Statement 4 (catastrophic flooding if the dam breaks) and Statement 5 (insufficient downstream water if flow is slowed too much) describe **negative** effects on valley farming.\nThus **4) and 5)** (option D) is correct.',
          rubric: [{ code: 'A1', text: 'Selects option D (4 and 5).' }]
        },
        {
          label: '23',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-23.webp',
              alt: 'Phylogenetic tree diagram showing evolutionary branching of five fish species and an outgroup',
              caption: 'Phylogenetic tree of five killifish species and an outgroup.'
            }
          ],
          prompt:
            'A phylogenetic tree is a diagram that depicts the lines of evolutionary descent of different species, organisms, or genes from a common ancestor. It is a useful tool for understanding biological diversity and for providing insights on events that occurred during evolution as well as the ancestral origin of a certain species. The diagram below shows the phylogenetic tree of different species of fish.\n\nWhich organisms or species are most closely related to each other?\n\nA. *Campellolebias brucei* and *Cynopoecilus nigrovittatus*\nB. *Cynopoecilus fulgens* and *Cynopoecilus notabilis*\nC. *Cynopoecilus melanotaenia* and *Cynopoecilus fulgens*\nD. *Campellolebias brucei* and *Cynopoecilus melanotaenia*',
          answer: 'C. *Cynopoecilus melanotaenia* and *Cynopoecilus fulgens*',
          principle:
            'Two species on a phylogenetic tree are most closely related when they share the most recent common ancestor (the rightmost branching node connecting them directly as sister taxa).',
          solution:
            'Tracing the branching nodes from left (oldest ancestor) to right (most recent divergences):\n- *Campellolebias brucei* splits off earliest near the base of the ingroup.\n- *Cynopoecilus notabilis* branches next, followed by *Cynopoecilus nigrovittatus*.\n- At the terminal sister node on the far right, ***Cynopoecilus fulgens*** and ***Cynopoecilus melanotaenia*** diverge from their most recent common ancestor.\nTherefore, *Cynopoecilus melanotaenia* and *Cynopoecilus fulgens* (option C) are the most closely related pair.',
          rubric: [{ code: 'A1', text: 'Selects option C.' }]
        },
        {
          label: '24',
          marks: 1,
          prompt:
            'In the science practicum class, the teacher explains the project to students. Each group of students is instructed to sample organisms with different characteristics in various habitats. Based on information from the teacher, one group of students needs to collect a particular organism with the characteristics as shown below.\n\n- It is sensitive to light\n- It feeds on dead matter\n- It uses gills for the exchange of gases\n\nThe teacher gives guidance about four habitats with some abiotic characteristics for them. The table below shows the characteristics of four different habitats, L, M, N and O.\n\n| Characteristics of habitat | L | M | N | O |\n| :--- | :---: | :---: | :---: | :---: |\n| Temperature | Fluctuates widely | Fluctuates widely | Some changes | Little or no change |\n| Moisture content | Dry | Damp | Very wet | Damp |\n| Light condition | Bright | Bright | Dark | Dark |\n| Ventilation | Airy | Stale | Airy | Stale |\n\nBased on all the information, which one of the habitats should the group of students collect their particular organism?\n\nA. L\nB. M\nC. N\nD. O',
          answer: 'C. N',
          principle:
            'Matching an organism’s adaptations to abiotic factors requires a dark habitat for light sensitivity, very wet conditions for gill function, and good aeration to supply oxygen.',
          solution:
            'Match each organism trait to the habitat table:\n- **Sensitive to light:** eliminates bright habitats **L** and **M**, leaving dark habitats **N** and **O**.\n- **Uses gills for gas exchange:** gills require water or very high moisture to keep respiratory surfaces moist and functioning, plus adequate oxygen supply. Habitat **N** is **Very wet** and **Airy** (well-oxygenated), whereas **O** is merely damp and stale (oxygen-poor).\nThus the students should sample in habitat **N** (option C).',
          rubric: [{ code: 'A1', text: 'Selects option C (N).' }]
        },
        {
          label: '25',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-25.webp',
              alt: 'Flow diagram showing coconut water converted by eukaryotic cells in process P to alcohol, then by prokaryotic cells in process Q to acetic acid, followed by sterilization',
              caption: 'Two-stage fermentation process from coconut water to vinegar.'
            }
          ],
          prompt:
            'Vinegar is a product that can be made from ingredients that contain sugar such as coconut water. The conversion of sugar into vinegar can be done by fermentation as shown in the following figure.\n\nWhich of the following statement(s) are/is TRUE?\n1) One of the fermentation products at P is carbon dioxide\n2) The cell type in process P does not have a true nucleus.\n3) Fermentation in Q is carried out by *Acetobacter* bacteria\n4) The formation of acetic acid from alcohol does not require oxygen\n\nA. 1 and 3 only\nB. 2 and 4 only\nC. 1, 2, and 4 only\nD. 1, 3, and 4 only',
          answer: 'A. 1 and 3 only',
          principle:
            'Alcoholic fermentation (stage P) uses eukaryotic yeast to turn sugar into ethanol and carbon dioxide, while acetic fermentation (stage Q) uses aerobic *Acetobacter* bacteria to oxidize ethanol into acetic acid.',
          solution:
            'Check each statement:\n1. **True:** Stage **P** is alcoholic fermentation of sugars into ethanol and carbon dioxide ($\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$).\n2. **False:** The figure labels stage **P** as *Eukaryotic cells* (yeast), which possess a true membrane-bound nucleus.\n3. **True:** Stage **Q** converts alcohol into acetic acid using prokaryotic acetic acid bacteria (*Acetobacter*).\n4. **False:** Oxidizing ethanol to acetic acid ($\\text{C}_2\\text{H}_5\\text{OH} + \\text{O}_2 \\rightarrow \\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O}$) is an aerobic process that requires oxygen.\nTherefore, statements **1 and 3 only** (option A) are true.',
          rubric: [{ code: 'A1', text: 'Selects option A (1 and 3 only).' }]
        },
        {
          label: '26',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-26a.webp',
              alt: 'River flow diagram showing factories P, Q, R, and S along the banks and water sampling points 1, 2, 3, and 4 moving downstream',
              caption: 'Locations of factories P, Q, R, S and sampling points 1–4 along the river.'
            },
            {
              src: '/papers/imso-18-science-theory-1/fig-26b.webp',
              alt: 'Line graph plotting relative amounts of dissolved oxygen, green algae, nitrate, and bacteria across sampling points 1 to 4 downstream',
              caption: 'Water quality measurements across sampling points 1 to 4.'
            }
          ],
          prompt:
            'Several factories (P, Q, R and S) were built on the banks of the river.\n\nNala took water samples at points 1, 2, 3, and 4 to determine the condition of the water in the river. She tested for the following water content: number of green algae and bacteria, and amount of dissolved oxygen and nitrate. The data taken by Nala is illustrated in the following graph.\n\nThe correct statements about the data above are:\n1) Factory P is the one that dumps the sewage into the river.\n2) Oxygen is needed by bacteria to decompose waste.\n3) The amount of nitrate affects the increase in green algae.\n4) Biochemical oxygen demand (BOD) will increase at point 2.\n\nA. 1 and 3 only\nB. 1, 2, and 3 only\nC. 2, 3, and 4 only\nD. 1, 2, 3, 4',
          answer: 'C. 2, 3, and 4 only',
          principle:
            'Organic sewage stimulates bacterial decomposition that consumes dissolved oxygen (raising BOD) and releases nitrates that promote downstream algal growth (eutrophication).',
          solution:
            'Analyze the river flow and graph:\n1. **False:** At point $1$ (downstream of Factory P and before Factory Q), dissolved oxygen is high while bacteria and nitrate remain at low baseline levels. The sharp spike in bacteria and drop in dissolved oxygen occur between points $1$ and $2$, right at **Factory Q**, not Factory P.\n2. **True:** As bacteria multiply sharply near point $2$ to decompose the sewage, dissolved oxygen plunges because bacteria consume oxygen during aerobic decomposition.\n3. **True:** Downstream of point $2$, nitrate rises and is followed closely by a surge in green algae (algal bloom fueled by nitrates).\n4. **True:** Because heavy organic sewage and bacterial respiration peak around point $2$, biochemical oxygen demand (BOD) increases sharply at point $2$.\nThus statements **2, 3, and 4 only** (option C) are correct.',
          rubric: [{ code: 'A1', text: 'Selects option C (2, 3, and 4 only).' }]
        },
        {
          label: '27',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-27.webp',
              alt: 'Line graph showing population numbers of red squirrel, gray squirrel, and coyote over 20 years',
              caption: 'Annual population counts of red squirrels, gray squirrels, and coyotes over 20 years.'
            }
          ],
          prompt:
            'A scientist counts the number of squirrels and coyotes in an area annually. There was only one type of squirrel from year 1 to year 7, but by year 7 a new species of squirrel was introduced and its population had increased significantly. The graph below shows the population of squirrels and coyotes in the area.\n\nBased on the graph, which of the following statement(s) is/are TRUE?\n1. Gray squirrels are species invasive in that area\n2. Coyote is predator for red squirrels and gray squirrels\n3. There is a competition between red squirrels and gray squirrels\n\nA. 2 only\nB. 1 and 3 only\nC. 2 and 3 only\nD. 1, 2, and 3',
          answer: 'B. 1 and 3 only',
          principle:
            'An introduced species that spreads rapidly while displacing a native species sharing the same niche indicates invasive competition, whereas a predator population typically tracks abundant prey.',
          solution:
            'Evaluate each statement from the 20-year graph:\n1. **True:** Gray squirrels were absent from years $1$ to $7$, introduced at year $7$, and rapidly expanded from $0$ to $\\approx 180$ while native red squirrels crashed toward $0$—hallmark behavior of an invasive species.\n2. **False:** If coyotes preyed effectively on both red and gray squirrels, the coyote population would increase when total squirrel numbers surged after year $10$; instead, the coyote count stays low and nearly flat/declining ($\\approx 10$–$40$) throughout.\n3. **True:** As the gray squirrel population rises steeply from year $7$ to year $20$, the red squirrel population declines correspondingly from $\\approx 125$ to $0$, showing interspecific competition.\nHence **1 and 3 only** (option B) is true.',
          rubric: [{ code: 'A1', text: 'Selects option B (1 and 3 only).' }]
        }
      ]
    },
    {
      no: 2,
      title: 'Section B: Short Answer',
      marks: 3,
      stem: 'Write the short answer for each question (3 questions, 1 mark each).',
      parts: [
        {
          label: '28',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-28.webp',
              alt: 'Beaker divided into four compartments I, II, III, and IV by semi-permeable membranes containing different substrate and enzyme or bile mixtures',
              caption: 'Four-compartment experimental setup separated by semi-permeable membranes.'
            }
          ],
          prompt:
            'The diagram below shows an experimental setup.\n\nThe four compartments containing different contents are separated by a semi-permeable membrane. In which compartment(s) would you expect to find the simple food substances after chemical digestion?',
          answer: 'Compartments I, II, III, and IV (all four compartments)',
          principle:
            'Enzymes are substrate-specific, so chemical digestion happens only where an enzyme matches its substrate; the resulting small soluble molecules then diffuse across semi-permeable membranes into all compartments.',
          solution:
            'Check the contents of each compartment:\n- **Compartment I (Starch mixed with proteases):** Protease only digests proteins, not starch, so no chemical digestion occurs here.\n- **Compartment II (Proteins mixed with lipase):** Lipase only digests fats, not proteins, so no chemical digestion occurs here.\n- **Compartment III (Fats mixed with bile):** Bile physically emulsifies fats into smaller droplets; it is not an enzyme and does not chemically digest fats into fatty acids and glycerol.\n- **Compartment IV (Proteins with protease):** Protease chemically digests proteins into small, soluble amino acids (simple food substances).\n\nBecause all four compartments are separated by **semi-permeable membranes**, the small amino acid molecules formed in compartment IV diffuse through the membranes into compartments III, II, and I until distributed throughout **compartments I, II, III, and IV**.',
          rubric: [{ code: 'A1', text: 'States compartments I, II, III, and IV (all four compartments).' }]
        },
        {
          label: '29',
          marks: 1,
          figures: [
            {
              src: '/papers/imso-18-science-theory-1/fig-29.webp',
              alt: 'Classification flowchart sorting seed and fruit traits into six plants labeled U, V, W, X, Y, and Z',
              caption: 'Dichotomous flowchart of seed and fruit characteristics for plants U–Z.'
            }
          ],
          prompt:
            'The flowchart below shows the characteristics of seed and/or fruits in six different plants (U, V, W, X, Y, and Z). It is helpful to identify the dispersal methods of plants.\n\nBased on the flowchart, which of the following young plants is the most likely to grow near its parent plant?',
          answer: 'X',
          principle:
            'Seeds dispersed by explosive splitting of dry pods scatter only a short distance, so seedlings grow clustered close to the parent plant, whereas wind-, water-, and animal-dispersed seeds travel farther.',
          solution:
            'Identify the dispersal method of each plant in the flowchart:\n- **U** (fibrous husk): dispersed by **water** (travels long distances).\n- **V** (wing-like structure): dispersed by **wind** (travels far).\n- **W** (stiff hair): hooks onto fur and is dispersed by **animals**.\n- **X** (hard and dry outer covering, pod-like): dispersed by **splitting / explosive action**, which drops seeds close around the parent plant.\n- **Y** (juicy, fleshy fruit; small indigestible seed): eaten by animals and passed out in droppings far away.\n- **Z** (juicy, fleshy fruit; big inedible seed): carried away and discarded by animals.\n\nBecause splitting pods scatter seeds only a short distance, young plant **X** is most likely to grow near its parent plant.',
          rubric: [{ code: 'A1', text: 'Identifies plant X.' }]
        },
        {
          label: '30',
          marks: 1,
          prompt:
            'An animal cell and a plant cell are both placed in distilled water. The length of each cell is measured at every $30$-minute interval. The results of the investigation are shown in the table below.\n\n| Time (min) | | 0 | 30 | 60 | 90 | 120 |\n| :--- | :--- | :---: | :---: | :---: | :---: | :---: |\n| **Percentage increase in the length** | **Animal Cell** | $0$ | $+1\\%$ | $+3\\%$ | - | - |\n| | **Plant Cell** | $0$ | $+1\\%$ | $+2\\%$ | $+2\\%$ | $+2\\%$ |\n\nAfter $60$ minutes, there are no measurements for the animal cell while the measurement of the plant cell remains constant until $120$ minutes. Which cell structure is responsible for the different results shown in animal and plant cells after $60$ minutes?',
          answer: 'Cell wall',
          principle:
            'In distilled water (a hypotonic medium), water enters cells by osmosis; a plant cell’s rigid cell wall prevents bursting by limiting expansion, whereas an animal cell lacks a cell wall and lyses.',
          solution:
            'Distilled water has a higher water potential than the cytoplasm inside both cells, so water enters both cells by osmosis:\n- The **animal cell** swells ($+1\\%$ at $30\\text{ min}$, $+3\\%$ at $60\\text{ min}$) and then bursts (lyses) after $60$ minutes because it has only a flexible cell membrane, leaving no cell to measure at $90$ and $120$ minutes.\n- The **plant cell** swells slightly ($+1\\%$, $+2\\%$) and stops expanding at $+2\\%$ because its rigid **cell wall** exerts inward wall pressure that resists further water entry and prevents bursting.\nThus the **cell wall** is responsible for the different results.',
          rubric: [{ code: 'A1', text: 'Identifies the cell wall.' }]
        }
      ]
    }
  ]
};
