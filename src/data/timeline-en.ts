import type { TimelineEntry } from '../types/timeline';

export const timelineEntriesEN: TimelineEntry[] = [
  {
    id: 'birth-1961',
    year: '1961',
    title: 'Birth in Potsdam',
    category: 'personal',
    image: '/images/IMG_5979.jpeg',
    imageCaption: 'Potsdam Stadtschloss - birthplace region',
    imagePosition: 'center 40%',
    content: `<p>Thomas Schmidt was born in February 1961 in Potsdam, East Germany (DDR). He would later train as a professional cook after completing his school education.</p>
    <p>Growing up in the DDR would shape his early life experiences and political consciousness.</p>`,
  },
  {
    id: 'bausoldat-1985',
    year: '1985-1986',
    title: 'Conscientious Objector — Bausoldat',
    category: 'personal',
    image: '/images/nva_bausoldaten.JPG',
    imageCaption: 'NVA construction work - Bausoldaten era',
    imagePosition: 'center center',
    content: `<p>Schmidt served in the East German National People's Army (NVA) as a <strong>"Bausoldat"</strong> (construction soldier), <strong>refusing to carry weapons</strong> — a significant act of conscience in the DDR.</p>
    <p>Bausoldaten were construction workers who served as an alternative to armed military service. This early decision demonstrated Schmidt's commitment to his principles, foreshadowing his future political career built on social democratic values.</p>`,
  },
  {
    id: 'city-council-1990',
    year: '1990',
    title: 'Joins Teltow City Council',
    category: 'politics',
    image: '/images/german_reunification.jpg',
    imageCaption: 'German Reunification at Reichstag, October 1990',
    imagePosition: 'center center',
    content: `<p>Following German reunification (Die Wende), Schmidt became a member of the Teltow <strong>Stadtverordnetenversammlung</strong> (City Council).</p>
    <p>Population of Teltow at this time: approximately <strong>16,000</strong> residents.</p>`,
    link: { url: 'https://www.teltow.de', text: 'Teltow Official Website' },
  },
  {
    id: 'ahlen-1991',
    year: '1991',
    title: 'First International Partnership — Ahlen',
    category: 'international',
    image: '/images/ahlen_rathaus.jpg',
    imageCaption: 'Ahlen Old Town Hall, Westphalia',
    imagePosition: 'center center',
    content: `<p>Teltow establishes its first post-reunification twin city partnership with <strong>Ahlen, Germany</strong> (Westphalia).</p>
    <p>This partnership continues to this day and laid the foundation for the "Teltow ohne Grenzen" (Teltow Without Borders) association.</p>`,
    link: { url: 'https://www.teltow.de/teltow/die-stadt/staedtepartnerschaften.html', text: 'City Partnerships' },
  },
  {
    id: 'county-council-1994',
    year: '1994-2002',
    title: 'County Council Years',
    category: 'politics',
    content: `<p>Elected to the <strong>Kreistag</strong> (County Council) of Landkreis Potsdam-Mittelmark.</p>
    <p>Served as <strong>Chairman of the Youth Welfare Committee</strong> (Jugendhilfeausschuss), building expertise in social policy and administration that would prove invaluable in his mayoral career.</p>`,
  },
  {
    id: 'gonfreville-1999',
    year: '1999',
    title: 'French Partnership — Gonfreville l\'Orcher',
    category: 'international',
    image: '/images/gonfreville_manoir.jpeg',
    imageCaption: 'Manoir de Bévilliers, Gonfreville l\'Orcher',
    imagePosition: 'center center',
    content: `<p>Official partnership treaty signed with <strong>Gonfreville l'Orcher</strong>, Normandy, France.</p>
    <p>Contact between the cities had existed since 1964, making this formalization a celebration of decades of Franco-German friendship at the local level.</p>`,
  },
  {
    id: 'election-2001',
    year: 'November 2001',
    title: 'First Election Victory',
    category: 'election',
    image: '/images/teltow_election_2001.jpeg',
    imageCaption: 'Teltow Marktplatz and St. Andreas Church',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> November 11, 2001</p>
    <p>Won a <strong>narrow runoff election</strong> against independent candidate Petra Nicksch-Kasdorf.</p>
    <ul>
      <li><strong>Result:</strong> 51% to 49%</li>
      <li>Succeeded Siegfried Kluge, the first mayor after reunification</li>
      <li>Campaign slogan: "SCHMIDT - Einander für Teltow" (Schmidt - Together for Teltow)</li>
    </ul>`,
    link: { url: 'https://nat.museum-digital.de/object/1349108', text: 'Election Archive' },
  },
  {
    id: 'first-term-2002',
    year: '2002',
    title: 'Begins First Term as Mayor',
    category: 'politics',
    content: `<p>Officially began first 8-year term as Bürgermeister.</p>
    <p>Founded <strong>"Teltow ohne Grenzen e.V."</strong> (Teltow Without Borders Association) to foster international relations and strengthen existing partnerships.</p>
    <p>Population at start of term: ~18,000</p>`,
  },
  {
    id: 's-bahn-2005',
    year: 'February 2005',
    title: 'S-Bahn Arrives — Historic Milestone',
    category: 'infrastructure',
    image: '/images/s_bahn_teltow.jpg',
    imageCaption: 'S-Bahn at Teltow Stadt station',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> February 24, 2005</p>
    <p><strong>Historic milestone:</strong> Teltow reconnected to Berlin's S-Bahn network after <strong>43 years, 6 months, and 11 days</strong>.</p>
    <ul>
      <li>New S26 line from Teltow Stadt to Berlin (Potsdamer Platz in 25 minutes)</li>
      <li>Over <strong>20,000 visitors</strong> attended the three-day opening celebration</li>
      <li>Schmidt actively campaigned for this infrastructure investment</li>
    </ul>
    <p><strong>Result:</strong> Daily passengers grew from 3,200 (2008) to 7,000+ (2012). Population growth accelerated dramatically.</p>`,
    quote: {
      text: 'Die S26 stärkt den Wohn- und Wirtschaftsstandort erheblich. Wir rechnen mit weiteren Gewerbeansiedlungen und einer Zunahme der Bevölkerung.',
      translation: 'The S26 significantly strengthens the residential and economic location. We expect further business settlements and population growth.',
    },
    link: { url: 'https://sbahn.berlin/das-unternehmen/presse/pressemitteilungen-pressearchiv/pressemitteilungen/neue-s-bahn-verbindung-zwischen-berlin-und-teltow-eroeffnet/', text: 'S-Bahn Berlin Press Release' },
  },
  {
    id: 'zagan-2006',
    year: '2006',
    title: 'Polish Partnership — Żagań',
    category: 'international',
    image: '/images/zagan_palace.jpg',
    imageCaption: 'Żagań Palace, Poland',
    imagePosition: 'center center',
    content: `<p>Twin city partnership established with <strong>Żagań, Poland</strong>.</p>
    <p>This partnership would later become crucial in the trilateral Ukraine support effort, demonstrating the long-term value of international cooperation.</p>`,
  },
  {
    id: 'insek-2008',
    year: '2008',
    title: 'Integrated City Development Concept (INSEK)',
    category: 'politics',
    content: `<p>Comprehensive urban development plan approved, setting the course for Teltow's managed growth.</p>
    <ul>
      <li>Defined: Altstadt (Old Town) revitalization</li>
      <li>Commercial zones in northwest</li>
      <li>Science/health corridor in northeast</li>
      <li>Marina project first included in planning documents</li>
    </ul>`,
  },
  {
    id: 'reelection-2009',
    year: 'September 2009',
    title: 'Re-elected with Clear Majority',
    category: 'election',
    image: '/images/election_2009.jpeg',
    imageCaption: 'Brandenburg state flag',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> September 27, 2009</p>
    <p>Won re-election in the <strong>first round</strong> with <strong>53.15%</strong> of the vote.</p>
    <p>This decisive victory validated his first-term performance and the success of the S-Bahn connection. Defeated CDU candidate Serena Meier-Zeh and others.</p>`,
  },
  {
    id: 'transport-2010',
    year: '2010-2011',
    title: 'Transportation Network Integration',
    category: 'infrastructure',
    content: `<p><strong>December 2010:</strong> Improved bus network integration with S-Bahn through TKS (Teltow-Kleinmachnow-Stahnsdorf) regional transit coordination.</p>
    <p><strong>July 2011:</strong> S-Bahn frequency increased to 10-minute intervals, further boosting connectivity and ridership.</p>`,
  },
  {
    id: 'marina-groundbreaking-2014',
    year: '2014',
    title: 'Marina Teltow Groundbreaking',
    category: 'infrastructure',
    image: '/images/marina_teltow.jpg',
    imageCaption: 'Teltow Canal at Kleinmachnow Lock',
    imagePosition: 'center center',
    content: `<p>Schmidt's flagship project begins: creating a city harbor on the Teltowkanal.</p>
    <ul>
      <li><strong>First Spatenstich (Groundbreaking):</strong> 2014</li>
      <li>Vision: reconnect Teltow to its waterway heritage, create recreation space</li>
      <li>Initial budget: ~5 million euros</li>
    </ul>`,
    quote: {
      text: 'Endlich ist die Stadt Teltow vom Wasser aus erlebbar.',
      translation: 'Finally, Teltow can be experienced from the water.',
    },
    link: { url: 'https://www.marina-teltow.de/', text: 'Marina Teltow Official' },
  },
  {
    id: '750-years-2015',
    year: 'October 2015',
    title: '750 Years of Teltow — City Celebration',
    category: 'achievement',
    image: '/images/teltow_750_celebration.png',
    imageCaption: 'St. Andreas Church, Teltow Old Town',
    imagePosition: 'center 30%',
    content: `<p><strong>October 2-4, 2015:</strong> Major city festival celebrating 750th anniversary, combined with 25 years of German Unity celebrations.</p>
    <ul>
      <li>Three-day festival with concerts (Karat, Michelle, Pankow, Gil Ofarim, Thomas Godoj)</li>
      <li>Schmidt opened festivities with traditional Fassanstich (barrel tapping)</li>
      <li>Special birthday cake ceremony</li>
      <li>Travel Bugs geocaching celebration</li>
      <li>Aljona Voynova sand animation of Teltow's history</li>
    </ul>
    <p><strong>Population milestone:</strong> 25,000 residents</p>`,
  },
  {
    id: 's-bahn-anniversary-2015',
    year: 'May 2015',
    title: '10 Years of S-Bahn — Zugtaufe',
    category: 'achievement',
    content: `<p><strong>Date:</strong> May 23, 2015 (Pfingstsamstag)</p>
    <ul>
      <li>S-Bahn train ceremonially named "Teltow" with Rübchenschnaps</li>
      <li>Brandenburg Infrastructure Minister Kathrin Schneider and S-Bahn CEO Peter Buchner participated</li>
      <li>10-meter Rübchen (turnip) sculpture unveiled at Ahlener Platz</li>
      <li>Passenger numbers had more than doubled since 2005</li>
    </ul>`,
    link: { url: 'https://sbahn.berlin/das-unternehmen/presse/pressemitteilungen-pressearchiv/pressemitteilungen/erfolgreiche-bilanz-zehn-jahre-s-bahn-nach-teltow/', text: 'S-Bahn Berlin 10-Year Anniversary' },
  },
  {
    id: 'fastest-growing-2015',
    year: '2015',
    title: "Germany's Fastest-Growing City",
    category: 'achievement',
    content: `<p>Federal Institute for Building, Urban and Spatial Research study named Teltow <strong>Germany's fastest-growing medium-sized city</strong>.</p>
    <ul>
      <li><strong>14.8% population growth</strong> — highest in Germany among medium-sized cities</li>
      <li>Techno Terrain Teltow: 200+ companies, 7,000+ employees</li>
      <li>Over 12 million euros in annual municipal revenue</li>
    </ul>`,
    quote: {
      text: 'Man müsse schon aufpassen, dass die städtische Infrastruktur mit dem schnellen Einwohnerwachstum mithält.',
      translation: 'We must ensure municipal infrastructure keeps pace with rapid population growth.',
    },
    link: { url: 'https://mobil.berliner-kurier.de/berlin/brandenburg/am-schnellsten-wachsende-stadt-in-deutschland-das-wunder-von-teltow-22779980', text: 'Berliner Kurier Article' },
  },
  {
    id: 'grace-hopper-planning-2017',
    year: '2017',
    title: 'Grace-Hopper-Gesamtschule Planning',
    category: 'education',
    image: '/images/grace_hopper_school.jpg',
    imageCaption: 'Commodore Grace Hopper, computing pioneer',
    imagePosition: 'center 15%',
    content: `<p>Schmidt worked with Landrat Wolfgang Blasig to plan a new comprehensive school — the county's largest investment project.</p>
    <ul>
      <li>42 million euro project</li>
      <li>Negotiated location and interim solutions</li>
      <li>Mühlendorf-Oberschule designated as temporary location</li>
      <li>Named after computing pioneer Grace Hopper</li>
    </ul>`,
  },
  {
    id: 'third-term-2017',
    year: 'October 2017',
    title: 'Re-elected for Third Term',
    category: 'election',
    content: `<p><strong>First Round (September 24, 2017):</strong> 47.1% — did not achieve absolute majority</p>
    <p><strong>Runoff (October 15, 2017):</strong> Defeated Andreas Wolf (Bürger für Bürger)</p>
    <ul>
      <li><strong>Final Result:</strong> 60.8% to 39.2%</li>
      <li>16 years in office confirmed</li>
      <li>Key issues: Marina costs, infrastructure development</li>
    </ul>`,
    quote: {
      text: 'Die soziale Infrastruktur muss mit unserer Bevölkerung mitwachsen.',
      translation: 'Social infrastructure must grow with our population.',
    },
    link: { url: 'https://www.tagesspiegel.de/potsdam/potsdam-mittelmark/thomas-schmidt-gewinnt-die-stichwahl-7121017.html', text: 'Tagesspiegel Election Report' },
  },
  {
    id: 'rudong-2018',
    year: 'September 2018',
    title: 'China Partnership — Rudong',
    category: 'international',
    image: '/images/Rudong_china.jpg',
    imageCaption: 'Nantong region, Jiangsu Province, China',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> September 18, 2018</p>
    <p>Fourth and newest partner city: <strong>Rudong County, Jiangsu Province, China</strong>.</p>
    <ul>
      <li>Population: ~1 million (200 km north of Shanghai)</li>
      <li>Schmidt traveled to China to sign the partnership agreement</li>
      <li>Focus on economic and cultural exchange</li>
    </ul>`,
  },
  {
    id: 'marina-opening-2019',
    year: 'May 2019',
    title: 'Marina Teltow Grand Opening',
    category: 'infrastructure',
    image: '/images/marina_teltow.jpg',
    imageCaption: 'Teltow Canal harbor district',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> May 12, 2019 (Sunday)</p>
    <p>After 5 years of construction, thousands of visitors attended opening festivities.</p>
    <ul>
      <li>39 boat moorings operational</li>
      <li>Brandenburg Infrastructure Minister Kathrin Schneider, Landrat Wolfgang Blasig in attendance</li>
      <li>Schmidt arrived by Feuerwehr boat (original historic barge broke down!)</li>
      <li><strong>Total project cost:</strong> ~15 million euros</li>
    </ul>
    <p><strong>Challenges overcome:</strong> Soil contamination from former concrete works, multiple legal disputes, budget increases from original 5 million.</p>`,
    quote: {
      text: 'Es liegt eine schwere Zeit hinter uns... Das Projekt Marina am blauen Band der Region wird einen absoluten touristischen Zugewinn für die Stadt Teltow bedeuten.',
      translation: 'Difficult times are behind us... The Marina project will mean an absolute tourist gain for Teltow.',
    },
    link: { url: 'https://www.tagesspiegel.de/potsdam/potsdam-mittelmark/teltows-hafen-ist-endlich-eroffnet-8520925.html', text: 'Tagesspiegel Marina Opening' },
  },
  {
    id: 'birthday-60-2021',
    year: 'February 2021',
    title: 'Schmidt Turns 60',
    category: 'personal',
    content: `<p>Three fire departments made ceremonial visit to honor his 60th birthday and 20 years as mayor.</p>
    <p><strong>Additional Role:</strong> Member of the Federal and State Board of ASB (Arbeiter-Samariter-Bund / Workers' Samaritan Federation).</p>`,
    link: { url: 'https://www.asb-lv-bbg.de/news/lieber-thomas-schmidt-alles-gute-zum-60-geburtstag', text: 'ASB Birthday Greeting' },
  },
  {
    id: 'seelab-2022',
    year: 'September 2022',
    title: 'SEE:LAB Innovation Center Opens',
    category: 'infrastructure',
    content: `<p><strong>Date:</strong> September 29, 2022</p>
    <p>SEE:LAB (Science, Engineering, Entrepreneurship Lab) opens in Teltow-Seehof.</p>
    <ul>
      <li>2,000 m² of office and laboratory space</li>
      <li>Focus: biomaterials, biochemistry, medical technology, soft robotics</li>
      <li>Adjacent to Helmholtz-Zentrum Hereon (Institute for Active Polymers)</li>
      <li>Supported high-tech startup ecosystem</li>
    </ul>`,
    link: { url: 'https://mehr-zukunft.info/investieren/technologie-und-gruenderzentren/', text: 'SEE:LAB Information' },
  },
  {
    id: 'ukraine-partnership-2023',
    year: 'January 2023',
    title: 'Trilateral Partnership with Ukraine',
    category: 'international',
    image: '/images/Khotyn_ukraine.jpg',
    imageCaption: 'Khotyn Fortress, Ukraine',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> January 26, 2023 (signed at Żagań Castle)</p>
    <p>Historic <strong>trilateral cities partnership</strong>: Teltow (Germany) - Żagań (Poland) - Khotyn (Ukraine) — the first such German-Polish-Ukrainian partnership.</p>
    <ul>
      <li>German Chancellor Olaf Scholz sent video greeting</li>
      <li>Khotyn: 20,000 inhabitants, hosting 8,000 internal refugees</li>
      <li>Located 80 km from Moldova/Romania border</li>
    </ul>`,
    link: { url: 'https://www.teltow.de/teltow/die-stadt/staedtepartnerschaften.html', text: 'Partnership Information' },
  },
  {
    id: 'bus-donation-2023',
    year: 'February 2023',
    title: 'Bus Donation to Khotyn, Ukraine',
    category: 'international',
    image: '/images/ukraine_donations.jpg',
    imageCaption: 'Supporting Ukraine',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> February 3, 2023</p>
    <p>Mercedes-Benz bus donated to Ukrainian partner city for school transportation.</p>
    <ul>
      <li>Used Regiobus vehicle</li>
      <li>30,000 euros in federal funding ("Engagement Global")</li>
      <li>Khotyn Mayor Andriy Dranchuk personally collected the bus</li>
      <li>Previously: generator and heating equipment donated</li>
    </ul>`,
    quote: {
      text: 'Das war wirklich nicht einfach, aber am Ende zählt, dass wir unserer Partnerstadt schnell und konkret helfen konnten.',
      translation: "It wasn't easy, but what counts is that we could help our partner city quickly and concretely.",
    },
    link: { url: 'https://www.regiobus-pm.de/news/artikel/linienbus-geht-an-die-ukrainische-stadt-khotyn/', text: 'Bus Donation Report' },
  },
  {
    id: 'brandenburg-zeigt-haltung-2023',
    year: 'March 2023',
    title: 'Brandenburg zeigt Haltung',
    category: 'politics',
    content: `<p>Teltow joined state initiative <strong>"Brandenburg Shows Stance"</strong> (against extremism).</p>
    <p>Schmidt introduced the motion on March 20, 2023, which was approved by the Stadtverordnetenversammlung (City Council).</p>`,
  },
  {
    id: 'grace-hopper-opens-2023',
    year: 'October 2023',
    title: 'Grace-Hopper-Gesamtschule Opens',
    category: 'education',
    content: `<p><strong>Date:</strong> October 6, 2023</p>
    <p>The county's largest investment project finally opens its doors.</p>
    <ul>
      <li><strong>Cost:</strong> 42 million euros</li>
      <li>12,000 m² of modern educational facilities</li>
      <li>Star-shaped building design</li>
      <li>Delegation from Khotyn, Ukraine attended opening</li>
      <li>Schmidt participated in ribbon-cutting with Landrat Marko Köhler</li>
    </ul>`,
    link: { url: 'https://www.stadtblatt-online.de/bildung/eroeffnung-der-grace-hopper-gesamtschule-in-teltow/', text: 'School Opening Report' },
  },
  {
    id: 'civic-engagement-2024',
    year: '2024',
    title: 'Civic Engagement & Youth Initiatives',
    category: 'politics',
    content: `<p><strong>January 22, 2024:</strong> "Frag doch mal den Bürgermeister" (Ask the Mayor) event with 40 children and youth at Jugendhaus Schiffer.</p>
    <p>Discussed: ice rink, free student tickets, anime convention, school renovations.</p>
    <p>Teltow was <strong>selected for Hertie Foundation's "Jugend entscheidet" program</strong> (1 of 10 cities from 100 applicants).</p>
    <p><strong>Bürgerhaushalt 2024 Projects:</strong></p>
    <ul>
      <li>Calisthenics training park in Teltower Park (opened September 3, 2024)</li>
      <li>Playground "Seegurke" ship baptized (April 13, 2024)</li>
    </ul>`,
  },
  {
    id: 'school-expansion-2024',
    year: 'September 2024',
    title: 'Ernst-von-Stubenrauch School Expansion',
    category: 'education',
    content: `<p><strong>Date:</strong> September 2, 2024</p>
    <p>New school building branch opened (former Bruno-H.-Bürgel-Schule) at Potsdamer Straße 51 location.</p>
    <ul>
      <li>152 students in 8 classes (4 fifth grade, 4 sixth grade)</li>
      <li>State-of-the-art technical equipment</li>
    </ul>`,
  },
  {
    id: 'climate-cooperation-2025',
    year: 'February 2025',
    title: 'Climate Cooperation Agreement',
    category: 'infrastructure',
    content: `<p><strong>Date:</strong> February 11, 2025</p>
    <p>Schmidt signed interkommunale Wärmeplanung (joint municipal heating plan) cooperation agreement with mayors of Kleinmachnow (Michael Grubert) and Stahnsdorf (Bernd Albers).</p>
    <p>Focus on sustainable energy transition for the TKS region.</p>`,
  },
  {
    id: 'ukraine-support-2025',
    year: 'May 2025',
    title: 'Continued Ukraine Support',
    category: 'international',
    content: `<p><strong>Date:</strong> May 13, 2025</p>
    <p>Schmidt personally handed over equipment to Mayor Andriy Dranchuk:</p>
    <ul>
      <li>Doppelkabine (cab) as tow vehicle</li>
      <li>Transport trailer</li>
      <li>Scissor lift (9-meter working height)</li>
      <li>Battery-powered tools</li>
    </ul>
    <p><strong>Total value:</strong> approximately 55,000 euros</p>`,
  },
  {
    id: 'kita-kaeferland-2025',
    year: 'September 2025',
    title: 'Kita Käferland Opens',
    category: 'education',
    content: `<p><strong>Date:</strong> September 12, 2025</p>
    <p>New integration kindergarten in Anne-Frank-Weg — one of Schmidt's final major projects.</p>
    <ul>
      <li>Replaced old facility closed 2019 due to contamination</li>
      <li>96 places (30 more than predecessor)</li>
      <li>1,412 m² modern low-energy building</li>
      <li>Photovoltaic, ground collectors, green roof</li>
      <li><strong>Cost:</strong> 8 million euros</li>
    </ul>`,
    quote: {
      text: 'Es ist gut angelegtes Geld. Wir haben einen modernen Ort für die kommenden Generationen geschaffen.',
      translation: "It's money well invested. We've created a modern place for future generations.",
    },
  },
  {
    id: 'buergerhaushalt-2025',
    year: 'September 2025',
    title: 'Final Bürgerhaushalt Announcement',
    category: 'politics',
    content: `<p><strong>Date:</strong> September 12, 2025</p>
    <p>Schmidt presented winning participatory budgeting projects at "Irischer Abend" event.</p>
    <ul>
      <li>1,427 residents participated, 3,978 votes cast</li>
      <li>Top projects: Defibrillator for Ruhlsdorf sports field, tree planting for heat protection, mountain bike trail</li>
    </ul>`,
  },
  {
    id: 'retirement-announced-2025',
    year: 'September 2025',
    title: 'End of an Era — Retirement Announced',
    category: 'election',
    content: `<p>After 24 years and 3 terms, Thomas Schmidt announced he would not seek re-election.</p>
    <ul>
      <li><strong>Election date:</strong> September 28, 2025</li>
      <li>Two candidates to succeed: André Freymuth (CDU), Claudia Eller-Funke (SPD)</li>
      <li>Schmidt's legacy: transforming a 16,000-person town into a thriving 29,000-resident city</li>
    </ul>
    <p>SPD candidate Claudia Eller-Funke promised to continue Schmidt's "successful path."</p>`,
    link: { url: 'https://www.tagesspiegel.de/potsdam/brandenburg/neuer-burgermeister-nach-24-jahren-spd-und-cdu-kampfen-um-teltow--ohne-die-afd-14367197.html', text: 'Tagesspiegel Farewell Article' },
  },
  {
    id: 'succession-2026',
    year: 'January 2026',
    title: 'Succession — End of Term',
    category: 'politics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Teltow3_Am_Marktplatz_und_Kirche_St_Andreas.JPG',
    imageCaption: 'Teltow - a new chapter begins',
    imagePosition: 'center center',
    content: `<p><strong>Date:</strong> January 23, 2026</p>
    <p>André Freymuth (CDU) was elected as successor in the September 2025 election.</p>
    <p>Schmidt officially hands over office after 24 years of service, leaving behind a transformed city with:</p>
    <ul>
      <li>Nearly doubled population</li>
      <li>World-class transit connections</li>
      <li>Five international partner cities</li>
      <li>Modern educational infrastructure</li>
      <li>Thriving economic development</li>
    </ul>`,
  },
];
