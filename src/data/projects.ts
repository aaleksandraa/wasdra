export type ProjectType =
  | "Wohnung"
  | "Einfamilienhaus"
  | "Mehrfamilienhaus"
  | "Gewerbe";

export type Region =
  | "Zürich"
  | "St. Gallen"
  | "Zug"
  | "Appenzell Ausserrhoden"
  | "Schweiz";

export interface Project {
  slug: string;
  title: string;
  cover: string;
  gallery: string[];
  location: string;
  region: Region;
  type: ProjectType;
  services: string[];
  budget: string;
  duration: string;
  year: number;
  shortDesc: string;
  description: string[];
  highlights: string[];
}

const projectImages = import.meta.glob(
  "../../objekti/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

const image = (path: string) => {
  const asset = projectImages[`../../objekti/${path}`];

  if (!asset) {
    throw new Error(`Project image not found: ${path}`);
  }

  return asset;
};

const gallery = (folder: string, files: string[]) =>
  files.map((file) => image(`${folder}/${file}`));

export const projects: Project[] = [
  {
    slug: "totale-renovation-eigentumswohnung-oberweningen",
    title: "Totale Renovation Eigentumswohnung Oberweningen",
    cover: image("7/Küche 1.jpg"),
    gallery: gallery("7", [
      "Küche 1.jpg",
      "Bad.jpg",
      "Balkon Keramik.jpg",
      "IMG-20220611-WA0065(1) a.jpg",
      "IMG-20240828-WA0020 (002).jpg",
      "Löüftung und Heizung Bad.jpg",
    ]),
    location: "Oberweningen, ZH",
    region: "Zürich",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    budget: "CHF 75'000",
    duration: "März 2024 - Mai 2024",
    year: 2024,
    shortDesc:
      "Kompletter Wohnungsumbau mit neuer Küche, neuem Bad, Einbaumöbeln, Vinyl im Wohnbereich und Keramik auf der Terrasse.",
    description: [
      "Für Herrn Dalibor Kovacevic durften wir eine Eigentumswohnung in Oberweningen vollständig erneuern. Nach dem Rückbau von Böden, Küche und Bad wurden die Flächen vorbereitet, Wände geglättet und der gesamte Ausbau neu koordiniert.",
      "Im Anschluss realisierten wir die neue Küche, ein modernes Bad mit Keramik und Möbeln, neue Einbaumöbel, frischen Abrieb an den Wänden sowie neue Beläge auf Terrasse und im Wohnbereich. Die komplette Ausführung erfolgte zwischen März und Mai 2024.",
    ],
    highlights: [
      "Neue Küche geliefert und montiert",
      "Badumbau mit Keramik und Badmöbeln",
      "Vinylboden im Wohnbereich",
      "Terrasse mit neuer Keramik",
    ],
  },
  {
    slug: "umbau-restaurant-polaris-wil",
    title: "Umbau Restaurant Polaris Wil",
    cover: image("5/IMG-20240907-WA0006.jpg"),
    gallery: gallery("5", [
      "IMG-20240907-WA0006.jpg",
      "IMG-20250317-WA0093 (002).jpg",
      "Bild 1.jpg",
    ]),
    location: "Wil, SG",
    region: "St. Gallen",
    type: "Gewerbe",
    services: [
      "gewerbeumbauten",
      "trockenbau",
      "bodenbelaege",
      "innenausbau",
    ],
    budget: "CHF 55'000",
    duration: "Mai 2024 - Juli 2024",
    year: 2024,
    shortDesc:
      "Restaurantumbau mit neuen Trockenbauwänden, 300 m² Laminat, Podesten, Bareinrichtung und Beleuchtung.",
    description: [
      "Für das Polaris beziehungsweise das serbische Kulturzentrum in Wil SG haben wir die Räumlichkeiten neu gegliedert und für den künftigen Gastronomie- und Veranstaltungsbetrieb vorbereitet.",
      "Zum Auftrag gehörten Trockenbauwände zur Unterteilung der Flächen, rund 300 m² Laminatboden, neue Podeste, der Ausbau der Bar sowie die Montage der Beleuchtung. Der Umbau wurde von Mai bis Juli 2024 umgesetzt.",
    ],
    highlights: [
      "Trockenbau zur Zonierung der Räume",
      "300 m² Laminatboden verlegt",
      "Podeste und Bareinrichtung erstellt",
      "Beleuchtung vollständig montiert",
    ],
  },
  {
    slug: "sanierung-mfh-uzwil",
    title: "Sanierung MFH mit 3 Wohnungen in Uzwil",
    cover: image("4/Aufbau Küche Eigentums Wohnung Fam. Mikich.jpg"),
    gallery: gallery("4", [
      "Aufbau Küche Eigentums Wohnung Fam. Mikich.jpg",
      "Mietwohnung Uzwil Aug. 24.jpg",
      "Mikich Böden.jpg",
      "Mikich Schuhkommode.jpg",
      "Mikich, Einbauschrank.jpg",
      "Einbauschrank Mikich Eigentumwohung.jpg",
      "Mikich.jpg",
      "IMG-20230203-WA0021 (1).jpg",
      "IMG-20240828-WA0015.jpg",
      "Umbau Wohnungen Mikich Uzwil .jpg",
    ]),
    location: "Uzwil, SG",
    region: "St. Gallen",
    type: "Mehrfamilienhaus",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    budget: "CHF 110'000",
    duration: "Juli 2024 - September 2024",
    year: 2024,
    shortDesc:
      "Sanierung eines Mehrfamilienhauses mit drei Wohnungen, neuen Küchen, neuen Bädern, Einbaumöbeln und Parkett.",
    description: [
      "In Uzwil SG sanierten wir für Herrn Sascha Mikich drei Wohnungen innerhalb eines Mehrfamilienhauses. Nach dem Rückbau von Böden, Küchen und Bädern wurden die Wände vorbereitet und geglättet, damit der neue Ausbau sauber umgesetzt werden konnte.",
      "Im Projektumfang enthalten waren drei neue Küchen, drei neue Bäder mit Keramik und Möbeln, neue Einbaumöbel sowie die Verlegung von Parkett. Die komplette Sanierung lief von Juli bis September 2024.",
    ],
    highlights: [
      "3 neue Küchen geliefert und montiert",
      "3 Bäder mit Keramik und Möbeln",
      "Einbaumöbel für mehrere Wohnungen",
      "Parkett in den Wohnbereichen verlegt",
    ],
  },
  {
    slug: "totalumbau-70er-jahre-wohnung-baar",
    title: "Totalumbau 70er-Jahre-Wohnung in Baar",
    cover: image("2/Eigentumswohnung Zug Küche 2.jpg"),
    gallery: gallery("2", [
      "Eigentumswohnung Zug Küche 2.jpg",
      "Eigentumswohnung Zug Bad 2.jpg",
      "Cvetanovic Eingang Boden und Einbauschrank.jpg",
      "Bad Cvetanovic.jpg",
      "Umbau Whg. Cvetanovic Bar .jpg",
      "Waschmaschine Turm.jpg",
      "Verstärkung Lammelen Tragende Wand.jpg",
      "IMG-20250124-WA0010 (002).jpg",
      "IMG-20250124-WA0013.jpg",
      "Abbruch Cvetanovic 1.jpg",
    ]),
    location: "Baar, ZG",
    region: "Zug",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    budget: "CHF 80'000",
    duration: "Oktober 2024 - November 2024",
    year: 2024,
    shortDesc:
      "Kompletter Wohnungsumbau mit neuer Küche, neuem Bad, neuen Böden, Einbauschränken und neuen Zimmertüren.",
    description: [
      "Diese 70er-Jahre-Wohnung in Baar wurde für die Familie Cvetanovic von Grund auf modernisiert. Zuerst wurden Küche, Bad, Wände und Böden zurückgebaut und die Flächen mit Glättungsarbeiten, Kleberestentfernung und konstruktiven Verstärkungen vorbereitet.",
      "Danach realisierten wir die neue Küche, das neue Bad, alle Bodenarbeiten, Einbauschränke und neue Zimmertüren. Die Ausführung erfolgte konzentriert innerhalb von Oktober und November 2024.",
    ],
    highlights: [
      "Neue Küche und neues Bad realisiert",
      "Neue Böden in der ganzen Wohnung",
      "Einbauschränke und neue Zimmertüren",
      "Vorbereitungsarbeiten inklusive Lamellenverstärkung",
    ],
  },
  {
    slug: "totale-renovation-eigentumswohnung-buelach",
    title: "Totale Renovation Eigentumswohnung in Bülach",
    cover: image("8/Boden und Einbauschrank Dodos .jpg"),
    gallery: gallery("8", [
      "Boden und Einbauschrank Dodos .jpg",
      "Bad Umbau Dodos Daniel.jpg",
      "FB_IMG_1682929001625 (1).jpg",
    ]),
    location: "Bülach, ZH",
    region: "Zürich",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    budget: "CHF 60'000",
    duration: "Januar 2024 - Februar 2024",
    year: 2024,
    shortDesc:
      "Eigentumswohnung mit neuer Küche, neuem Bad, Einbaumöbeln und komplett erneuerten Oberflächen.",
    description: [
      "Für Herrn Daniel Dodos modernisierten wir eine Eigentumswohnung in Bülach vollständig. Nach dem Rückbau von Böden, Küche und Bädern wurde der Innenausbau neu aufgebaut und auf eine klare, ruhige Materiallinie abgestimmt.",
      "Zum Leistungsumfang gehörten die Lieferung und Montage der neuen Küche, ein neues Bad mit Keramik und Möbeln, neue Einbaumöbel sowie die Erneuerung der Oberflächen. Das Projekt wurde zwischen Januar und Februar 2024 umgesetzt.",
    ],
    highlights: [
      "Neue Küche geliefert und montiert",
      "Badumbau mit Keramik und Badmöbeln",
      "Massgefertigte Einbaumöbel",
      "Komplette Auffrischung der Wohnung",
    ],
  },
  {
    slug: "badumbau-efh-herisau",
    title: "Badumbau EFH Herisau",
    cover: image("6/Badumbau ZH.jpg"),
    gallery: gallery("6", [
      "Badumbau ZH.jpg",
      "Dusche keramik.jpg",
      "IMG-20240515-WA0005.jpg",
      "IMG-20240515-WA0012.jpg",
      "IMG-20240515-WA0014.jpg",
      "IMG-20250317-WA0088.jpg",
      "IMG-20250317-WA0089.jpg",
      "IMG-20250317-WA0091.jpg",
      "IMG-20250317-WA0092.jpg",
    ]),
    location: "Herisau, AR",
    region: "Appenzell Ausserrhoden",
    type: "Einfamilienhaus",
    services: ["badumbau", "bodenbelaege"],
    budget: "CHF 25'000",
    duration: "April 2024 - Mai 2024",
    year: 2024,
    shortDesc:
      "Badumbau im Einfamilienhaus mit neuer Dusche, neuer Keramik und komplett erneuerter Sanitärzone.",
    description: [
      "Im Einfamilienhaus von Herrn Mustafa Yilmaz in Herisau wurde das bestehende Bad vollständig zurückgebaut und neu aufgebaut. Ziel war eine saubere, zeitgemässe Lösung mit langlebigen Materialien.",
      "Realisiert wurden ein neues Bad inklusive Keramikarbeiten und der komplette Aufbau der neuen Nasszelle. Die Ausführung erfolgte im April und Mai 2024.",
    ],
    highlights: [
      "Altes Bad komplett rückgebaut",
      "Neue Keramik in der ganzen Nasszelle",
      "Neue Dusche und Sanitärzone",
      "Umsetzung in kurzer Bauzeit",
    ],
  },
  {
    slug: "umbau-renditeobjekt-birmensdorf",
    title: "Umbau Renditeobjekt in Birmensdorf",
    cover: image("1/IMG-20250318-WA0256.jpg"),
    gallery: gallery("1", [
      "IMG-20250318-WA0256.jpg",
      "Bad 01. OG Keramik, Sanitär und Armaturen.jpg",
      "Bad DG.jpg",
      "Umbau neue Keramik Treppenhaus.jpg",
      "Aussenansicht Birmensdorf.jpg",
    ]),
    location: "Birmensdorf, ZH",
    region: "Zürich",
    type: "Mehrfamilienhaus",
    services: ["renovationen", "kuechen", "badumbau", "bodenbelaege"],
    budget: "CHF 120'000",
    duration: "Dezember 2024 - Februar 2025",
    year: 2025,
    shortDesc:
      "Instandstellung eines Renditeobjekts mit neuer Treppenhauskeramik, Gemeinschaftsküche und totalsanierten Gemeinschaftsbädern.",
    description: [
      "In Birmensdorf haben wir ein Renditeobjekt umfassend instand gestellt. Im Mittelpunkt standen die gemeinschaftlich genutzten Bereiche sowie die allgemeine Aufwertung des Bestands.",
      "Zum Auftrag gehörten neue Keramik und überarbeitete Wände im Treppenhaus, eine neue Küche im Gemeinschaftsraum, die Totalsanierung der Gemeinschaftsbäder inklusive Keramik sowie weitere allgemeine Instandstellungsarbeiten am Objekt. Die Ausführung lief von Dezember 2024 bis Februar 2025.",
    ],
    highlights: [
      "Neue Treppenhauskeramik und instand gesetzte Wände",
      "Neue Gemeinschaftsküche eingebaut",
      "Gemeinschaftsbäder komplett saniert",
      "Allgemeine Aufwertung des Objekts",
    ],
  },
  {
    slug: "sanierung-kosmetikstudio",
    title: "Sanierung Kosmetikstudio",
    cover: image("3/Fitpoint Tapetten und Schiebetür .jpg"),
    gallery: gallery("3", [
      "Fitpoint Tapetten und Schiebetür .jpg",
      "Decke und Spotlampen Einbau.jpg",
      "Fitpoint Boden 1.jpg",
      "Abbruch Fitpoint1.jpg",
      "Abbruch Fitpoint 2.jpg",
    ]),
    location: "Schweiz",
    region: "Schweiz",
    type: "Gewerbe",
    services: ["gewerbeumbauten", "trockenbau", "bodenbelaege"],
    budget: "CHF 15'000",
    duration: "September 2024",
    year: 2024,
    shortDesc:
      "Umbau eines Kosmetikstudios mit abgehängter Decke, Spots, Keramikplatten, Tapeten und neuen Raumtrennern.",
    description: [
      "Für Frau Nathalie Zehnhäuser sanierten und modernisierten wir die Räumlichkeiten eines Kosmetikstudios. Ziel war ein ruhiger, gepflegter Auftritt mit klaren Zonen für Kundinnen und Behandlungen.",
      "Zum Auftrag gehörten der Rückbau alter Böden und Wände, das Herunterlassen der Decke, der Einbau von Spotlampen, Keramikplatten, Tapeten sowie Verglasungen und Raumtrenner. Das Projekt wurde im September 2024 abgeschlossen.",
    ],
    highlights: [
      "Decke abgehängt und Spots eingebaut",
      "Keramikplatten und neue Tapeten",
      "Verglasung und Raumtrenner erstellt",
      "Bestehende Flächen vollständig zurückgebaut",
    ],
  },
  {
    slug: "totale-renovation-eigentumswohnung-gockhausen",
    title: "Totale Renovation Eigentumswohnung Gockhausen",
    cover: image("9/umbau Wohnung Szabo Küche und Boden 1.jpg"),
    gallery: gallery("9", [
      "umbau Wohnung Szabo Küche und Boden 1.jpg",
      "IMG-20220212-WA0007.jpg",
    ]),
    location: "Gockhausen, ZH",
    region: "Zürich",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    budget: "CHF 60'000",
    duration: "Dezember 2023 - Januar 2024",
    year: 2024,
    shortDesc:
      "Eigentumswohnung mit neuer Küche, neuem Bad, neuen Einbaumöbeln und komplett erneuerten Belägen.",
    description: [
      "In Gockhausen realisierten wir für Herrn David Szabo die komplette Erneuerung einer Eigentumswohnung. Nach dem Rückbau von Böden, Küche und Bad wurde die Wohnung in kurzer Zeit neu aufgebaut.",
      "Geliefert und montiert wurden die neue Küche, das neue Bad mit Keramik und Möbeln sowie neue Einbaumöbel. Die Totalsanierung wurde zwischen Dezember 2023 und Januar 2024 ausgeführt.",
    ],
    highlights: [
      "Neue Küche geliefert und montiert",
      "Bad mit Keramik und Möbeln erneuert",
      "Neue Einbaumöbel integriert",
      "Sanierung in kompakter Bauzeit umgesetzt",
    ],
  },
  {
    slug: "zusammenbau-zwei-wohnungen-wil",
    title: "Zusammenbau von zwei Wohnungen in Wil",
    cover: image("10/DSC00752.JPG"),
    gallery: gallery("10", [
      "DSC00752.JPG",
      "Bad Familie Vasiljevic.jpg",
      "DSC00740.JPG",
      "DSC00745.JPG",
      "DSC00746.JPG",
      "Umbau Wohnung Familie Vasiljevic, Wil SG .jpg",
      "Umbau Whg. Vasiljevic Wil, Durchbruch Treppen .jpg",
    ]),
    location: "Wil, SG",
    region: "St. Gallen",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    budget: "CHF 80'000",
    duration: "September 2023 - Dezember 2023",
    year: 2023,
    shortDesc:
      "Zusammenführung von zwei Wohnungen zu einer Einheit mit Wand- und Deckendurchbrüchen, neuer Küche, Bad, Einbaumöbeln und Terrassenkeramik.",
    description: [
      "Für die Familie Vasiljevic durften wir in Wil zwei bestehende Wohnungen zu einer grossen Einheit zusammenbauen. Dazu gehörten umfangreiche Rückbauarbeiten an Böden, Küche und Bädern sowie mehrere strukturelle Eingriffe.",
      "Neu realisiert wurden eine Küche, ein Bad mit Keramik und Möbeln, neue Einbaumöbel, Wanddurchbrüche, der Abbruch eines Kamins, eine Deckenöffnung für eine Wendeltreppe sowie neue Keramik auf den Terrassen. Die Arbeiten liefen von September bis Dezember 2023.",
    ],
    highlights: [
      "Zwei Wohnungen zu einer Einheit zusammengeführt",
      "Wanddurchbrüche und Deckenöffnung für Wendeltreppe",
      "Neue Küche und neue Badzone realisiert",
      "Einbaumöbel und Terrassenkeramik ergänzt",
    ],
  },
];

export const projectRegions: Region[] = Array.from(
  new Set(projects.map((project) => project.region))
);

export const getProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);
