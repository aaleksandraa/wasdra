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
    ],    duration: "März 2024 - Mai 2024",
    year: 2024,
    shortDesc:
      "Kompletter Wohnungsumbau mit neuer Küche, neuem Bad, Einbaumöbeln, Vinyl im Wohnbereich und Keramik auf der Terrasse.",
    description: [
      "In Oberweningen wurde eine Eigentumswohnung umfassend modernisiert und auf einen zeitgemässen Wohnstandard gebracht. Nach dem Rückbau von Böden, Küche und Bad wurden die Flächen sorgfältig vorbereitet, die Wände geglättet und der gesamte Innenausbau effizient koordiniert.",
      "Realisiert wurden eine neue Küche, ein modernes Bad mit Keramik und Möbeln, passgenaue Einbaumöbel, frischer Abrieb an den Wänden sowie neue Beläge auf Terrasse und im Wohnbereich. Die Ausführung erfolgte strukturiert zwischen März und Mai 2024.",
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
    ],    duration: "Mai 2024 - Juli 2024",
    year: 2024,
    shortDesc:
      "Restaurantumbau mit neuen Trockenbauwänden, 300 m² Laminat, Podesten, Bareinrichtung und Beleuchtung.",
    description: [
      "In Wil SG wurden bestehende Gewerbeflächen neu gegliedert und für einen modernen Gastronomie- und Veranstaltungsbetrieb vorbereitet. Der Umbau verbindet funktionale Raumaufteilung mit einer robusten, repräsentativen Ausführung für den täglichen Betrieb.",
      "Zum Leistungsumfang gehörten Trockenbauwände zur Unterteilung der Flächen, rund 300 m² Laminatboden, neue Podeste, der Ausbau der Bar sowie die Montage der Beleuchtung. Der Umbau wurde von Mai bis Juli 2024 umgesetzt.",
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
    cover: image("4/Aufbau Küche Eigentumswohnung Uzwil.jpg"),
    gallery: gallery("4", [
      "Aufbau Küche Eigentumswohnung Uzwil.jpg",
      "Mietwohnung Uzwil Aug. 24.jpg",
      "Parkett Uzwil.jpg",
      "Schuhkommode Einbaumöbel Uzwil.jpg",
      "Einbauschrank Uzwil 1.jpg",
      "Einbauschrank Eigentumswohnung Uzwil.jpg",
      "Innenausbau Uzwil.jpg",
      "IMG-20230203-WA0021 (1).jpg",
      "IMG-20240828-WA0015.jpg",
      "Umbau Wohnungen Uzwil.jpg",
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
    ],    duration: "Juli 2024 - September 2024",
    year: 2024,
    shortDesc:
      "Sanierung eines Mehrfamilienhauses mit drei Wohnungen, neuen Küchen, neuen Bädern, Einbaumöbeln und Parkett.",
    description: [
      "In Uzwil SG wurde ein Mehrfamilienhaus mit drei Wohnungen umfassend saniert und technisch sowie optisch aufgewertet. Nach dem Rückbau von Böden, Küchen und Bädern wurden die Wände vorbereitet und geglättet, damit der neue Ausbau sauber umgesetzt werden konnte.",
      "Im Projektumfang enthalten waren drei neue Küchen, drei neue Bäder mit Keramik und Möbeln, neue Einbaumöbel sowie die Verlegung von Parkett. Die komplette Sanierung wurde von Juli bis September 2024 koordiniert und ausgeführt.",
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
      "Eingang Boden und Einbauschrank Baar.jpg",
      "Bad Baar.jpg",
      "Wohnung Baar Barbereich.jpg",
      "Waschmaschine Turm.jpg",
      "Verstärkung Lammelen Tragende Wand.jpg",
      "IMG-20250124-WA0010 (002).jpg",
      "IMG-20250124-WA0013.jpg",
      "Abbrucharbeiten Baar 1.jpg",
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
    ],    duration: "Oktober 2024 - November 2024",
    year: 2024,
    shortDesc:
      "Kompletter Wohnungsumbau mit neuer Küche, neuem Bad, neuen Böden, Einbauschränken und neuen Zimmertüren.",
    description: [
      "Diese 70er-Jahre-Wohnung in Baar wurde von Grund auf modernisiert und in eine helle, funktionale Wohneinheit mit klarer Materiallinie verwandelt. Zuerst wurden Küche, Bad, Wände und Böden zurückgebaut und die Flächen mit Glättungsarbeiten, Kleberestentfernung und konstruktiven Verstärkungen vorbereitet.",
      "Danach realisierten wir die neue Küche, das neue Bad, sämtliche Bodenarbeiten, Einbauschränke und neue Zimmertüren. Die Ausführung erfolgte konzentriert und terminsicher innerhalb von Oktober und November 2024.",
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
    cover: image("8/Boden und Einbauschrank Bülach.jpg"),
    gallery: gallery("8", [
      "Boden und Einbauschrank Bülach.jpg",
      "Bad Umbau Bülach.jpg",
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
    ],    duration: "Januar 2024 - Februar 2024",
    year: 2024,
    shortDesc:
      "Eigentumswohnung mit neuer Küche, neuem Bad, Einbaumöbeln und komplett erneuerten Oberflächen.",
    description: [
      "In Bülach wurde eine Eigentumswohnung vollständig modernisiert und mit einem ruhigen, hochwertigen Innenausbau neu inszeniert. Nach dem Rückbau von Böden, Küche und Bädern wurde der Ausbau auf eine klare Materiallinie und saubere Oberflächen abgestimmt.",
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
    services: ["badumbau", "bodenbelaege"],    duration: "April 2024 - Mai 2024",
    year: 2024,
    shortDesc:
      "Badumbau im Einfamilienhaus mit neuer Dusche, neuer Keramik und komplett erneuerter Sanitärzone.",
    description: [
      "In einem Einfamilienhaus in Herisau wurde das bestehende Bad vollständig zurückgebaut und als moderne Nasszelle neu aufgebaut. Ziel war eine pflegeleichte, zeitgemässe Lösung mit langlebigen Materialien und präziser Ausführung.",
      "Realisiert wurden ein neues Bad inklusive Keramikarbeiten und der komplette Aufbau der neuen Sanitärzone. Die Ausführung erfolgte effizient im April und Mai 2024.",
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
    services: ["renovationen", "kuechen", "badumbau", "bodenbelaege"],    duration: "Dezember 2024 - Februar 2025",
    year: 2025,
    shortDesc:
      "Instandstellung eines Renditeobjekts mit neuer Treppenhauskeramik, Gemeinschaftsküche und totalsanierten Gemeinschaftsbädern.",
    description: [
      "In Birmensdorf wurde ein Renditeobjekt umfassend instand gestellt und für eine nachhaltige Nutzung aufgewertet. Im Mittelpunkt standen die gemeinschaftlich genutzten Bereiche, eine robuste Materialisierung und die sichtbare Verbesserung des Bestands.",
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
    services: ["gewerbeumbauten", "trockenbau", "bodenbelaege"],    duration: "September 2024",
    year: 2024,
    shortDesc:
      "Umbau eines Kosmetikstudios mit abgehängter Decke, Spots, Keramikplatten, Tapeten und neuen Raumtrennern.",
    description: [
      "Die Räumlichkeiten eines Kosmetikstudios wurden saniert und zu einem gepflegten, einladenden Arbeitsumfeld mit klar strukturierten Behandlungszonen weiterentwickelt. Der Fokus lag auf einem ruhigen Gesamtbild, funktionalen Abläufen und hochwertigen Oberflächen.",
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
    cover: image("9/Umbau Wohnung Gockhausen Küche und Boden.jpg"),
    gallery: gallery("9", [
      "Umbau Wohnung Gockhausen Küche und Boden.jpg",
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
    ],    duration: "Dezember 2023 - Januar 2024",
    year: 2024,
    shortDesc:
      "Eigentumswohnung mit neuer Küche, neuem Bad, neuen Einbaumöbeln und komplett erneuerten Belägen.",
    description: [
      "In Gockhausen wurde eine Eigentumswohnung komplett erneuert und mit einem modernen, funktionalen Innenausbau ausgestattet. Nach dem Rückbau von Böden, Küche und Bad wurde die Wohnung in kurzer Zeit neu aufgebaut.",
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
      "Bad Wohnung Wil.jpg",
      "DSC00740.JPG",
      "DSC00745.JPG",
      "DSC00746.JPG",
      "Umbau Wohnung Wil SG.jpg",
      "Umbau Wohnung Wil Durchbruch Treppen.jpg",
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
    ],    duration: "September 2023 - Dezember 2023",
    year: 2023,
    shortDesc:
      "Zusammenführung von zwei Wohnungen zu einer Einheit mit Wand- und Deckendurchbrüchen, neuer Küche, Bad, Einbaumöbeln und Terrassenkeramik.",
    description: [
      "In Wil wurden zwei bestehende Wohnungen zu einer grosszügigen Wohneinheit zusammengeführt. Dazu gehörten umfangreiche Rückbauarbeiten an Böden, Küche und Bädern sowie mehrere strukturelle Eingriffe für eine neue, offene Raumorganisation.",
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
