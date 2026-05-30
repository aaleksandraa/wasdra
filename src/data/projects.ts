export type ProjectType =
  | "Wohnung"
  | "Einfamilienhaus"
  | "Mehrfamilienhaus"
  | "Gewerbe";

export type Region =
  | "ZÃ¼rich"
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
    cover: image("7/KÃ¼che 1.jpg"),
    gallery: gallery("7", [
      "KÃ¼che 1.jpg",
      "Bad.jpg",
      "Balkon Keramik.jpg",
      "IMG-20220611-WA0065(1) a.jpg",
      "IMG-20240828-WA0020 (002).jpg",
      "LÃ¶Ã¼ftung und Heizung Bad.jpg",
    ]),
    location: "Oberweningen, ZH",
    region: "ZÃ¼rich",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    duration: "MÃ¤rz 2024 - Mai 2024",
    year: 2024,
    shortDesc:
      "Kompletter Wohnungsumbau mit neuer KÃ¼che, neuem Bad, EinbaumÃ¶beln, Vinyl im Wohnbereich und Keramik auf der Terrasse.",
    description: [
      "FÃ¼r Herrn Dalibor Kovacevic durften wir eine Eigentumswohnung in Oberweningen vollstÃ¤ndig erneuern. Nach dem RÃ¼ckbau von BÃ¶den, KÃ¼che und Bad wurden die FlÃ¤chen vorbereitet, WÃ¤nde geglÃ¤ttet und der gesamte Ausbau neu koordiniert.",
      "Im Anschluss realisierten wir die neue KÃ¼che, ein modernes Bad mit Keramik und MÃ¶beln, neue EinbaumÃ¶bel, frischen Abrieb an den WÃ¤nden sowie neue BelÃ¤ge auf Terrasse und im Wohnbereich. Die komplette AusfÃ¼hrung erfolgte zwischen MÃ¤rz und Mai 2024.",
    ],
    highlights: [
      "Neue KÃ¼che geliefert und montiert",
      "Badumbau mit Keramik und BadmÃ¶beln",
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
    duration: "Mai 2024 - Juli 2024",
    year: 2024,
    shortDesc:
      "Restaurantumbau mit neuen TrockenbauwÃ¤nden, 300 mÂ² Laminat, Podesten, Bareinrichtung und Beleuchtung.",
    description: [
      "FÃ¼r das Polaris beziehungsweise das serbische Kulturzentrum in Wil SG haben wir die RÃ¤umlichkeiten neu gegliedert und fÃ¼r den kÃ¼nftigen Gastronomie- und Veranstaltungsbetrieb vorbereitet.",
      "Zum Auftrag gehÃ¶rten TrockenbauwÃ¤nde zur Unterteilung der FlÃ¤chen, rund 300 mÂ² Laminatboden, neue Podeste, der Ausbau der Bar sowie die Montage der Beleuchtung. Der Umbau wurde von Mai bis Juli 2024 umgesetzt.",
    ],
    highlights: [
      "Trockenbau zur Zonierung der RÃ¤ume",
      "300 mÂ² Laminatboden verlegt",
      "Podeste und Bareinrichtung erstellt",
      "Beleuchtung vollstÃ¤ndig montiert",
    ],
  },
  {
    slug: "sanierung-mfh-uzwil",
    title: "Sanierung MFH mit 3 Wohnungen in Uzwil",
    cover: image("4/Aufbau KÃ¼che Eigentums Wohnung Fam. Mikich.jpg"),
    gallery: gallery("4", [
      "Aufbau KÃ¼che Eigentums Wohnung Fam. Mikich.jpg",
      "Mietwohnung Uzwil Aug. 24.jpg",
      "Mikich BÃ¶den.jpg",
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
    duration: "Juli 2024 - September 2024",
    year: 2024,
    shortDesc:
      "Sanierung eines Mehrfamilienhauses mit drei Wohnungen, neuen KÃ¼chen, neuen BÃ¤dern, EinbaumÃ¶beln und Parkett.",
    description: [
      "In Uzwil SG sanierten wir fÃ¼r Herrn Sascha Mikich drei Wohnungen innerhalb eines Mehrfamilienhauses. Nach dem RÃ¼ckbau von BÃ¶den, KÃ¼chen und BÃ¤dern wurden die WÃ¤nde vorbereitet und geglÃ¤ttet, damit der neue Ausbau sauber umgesetzt werden konnte.",
      "Im Projektumfang enthalten waren drei neue KÃ¼chen, drei neue BÃ¤der mit Keramik und MÃ¶beln, neue EinbaumÃ¶bel sowie die Verlegung von Parkett. Die komplette Sanierung lief von Juli bis September 2024.",
    ],
    highlights: [
      "3 neue KÃ¼chen geliefert und montiert",
      "3 BÃ¤der mit Keramik und MÃ¶beln",
      "EinbaumÃ¶bel fÃ¼r mehrere Wohnungen",
      "Parkett in den Wohnbereichen verlegt",
    ],
  },
  {
    slug: "totalumbau-70er-jahre-wohnung-baar",
    title: "Totalumbau 70er-Jahre-Wohnung in Baar",
    cover: image("2/Eigentumswohnung Zug KÃ¼che 2.jpg"),
    gallery: gallery("2", [
      "Eigentumswohnung Zug KÃ¼che 2.jpg",
      "Eigentumswohnung Zug Bad 2.jpg",
      "Cvetanovic Eingang Boden und Einbauschrank.jpg",
      "Bad Cvetanovic.jpg",
      "Umbau Whg. Cvetanovic Bar .jpg",
      "Waschmaschine Turm.jpg",
      "VerstÃ¤rkung Lammelen Tragende Wand.jpg",
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
    duration: "Oktober 2024 - November 2024",
    year: 2024,
    shortDesc:
      "Kompletter Wohnungsumbau mit neuer KÃ¼che, neuem Bad, neuen BÃ¶den, EinbauschrÃ¤nken und neuen ZimmertÃ¼ren.",
    description: [
      "Diese 70er-Jahre-Wohnung in Baar wurde fÃ¼r die Familie Cvetanovic von Grund auf modernisiert. Zuerst wurden KÃ¼che, Bad, WÃ¤nde und BÃ¶den zurÃ¼ckgebaut und die FlÃ¤chen mit GlÃ¤ttungsarbeiten, Kleberestentfernung und konstruktiven VerstÃ¤rkungen vorbereitet.",
      "Danach realisierten wir die neue KÃ¼che, das neue Bad, alle Bodenarbeiten, EinbauschrÃ¤nke und neue ZimmertÃ¼ren. Die AusfÃ¼hrung erfolgte konzentriert innerhalb von Oktober und November 2024.",
    ],
    highlights: [
      "Neue KÃ¼che und neues Bad realisiert",
      "Neue BÃ¶den in der ganzen Wohnung",
      "EinbauschrÃ¤nke und neue ZimmertÃ¼ren",
      "Vorbereitungsarbeiten inklusive LamellenverstÃ¤rkung",
    ],
  },
  {
    slug: "totale-renovation-eigentumswohnung-buelach",
    title: "Totale Renovation Eigentumswohnung in BÃ¼lach",
    cover: image("8/Boden und Einbauschrank Dodos .jpg"),
    gallery: gallery("8", [
      "Boden und Einbauschrank Dodos .jpg",
      "Bad Umbau Dodos Daniel.jpg",
      "FB_IMG_1682929001625 (1).jpg",
    ]),
    location: "BÃ¼lach, ZH",
    region: "ZÃ¼rich",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    duration: "Januar 2024 - Februar 2024",
    year: 2024,
    shortDesc:
      "Eigentumswohnung mit neuer KÃ¼che, neuem Bad, EinbaumÃ¶beln und komplett erneuerten OberflÃ¤chen.",
    description: [
      "FÃ¼r Herrn Daniel Dodos modernisierten wir eine Eigentumswohnung in BÃ¼lach vollstÃ¤ndig. Nach dem RÃ¼ckbau von BÃ¶den, KÃ¼che und BÃ¤dern wurde der Innenausbau neu aufgebaut und auf eine klare, ruhige Materiallinie abgestimmt.",
      "Zum Leistungsumfang gehÃ¶rten die Lieferung und Montage der neuen KÃ¼che, ein neues Bad mit Keramik und MÃ¶beln, neue EinbaumÃ¶bel sowie die Erneuerung der OberflÃ¤chen. Das Projekt wurde zwischen Januar und Februar 2024 umgesetzt.",
    ],
    highlights: [
      "Neue KÃ¼che geliefert und montiert",
      "Badumbau mit Keramik und BadmÃ¶beln",
      "Massgefertigte EinbaumÃ¶bel",
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
    duration: "April 2024 - Mai 2024",
    year: 2024,
    shortDesc:
      "Badumbau im Einfamilienhaus mit neuer Dusche, neuer Keramik und komplett erneuerter SanitÃ¤rzone.",
    description: [
      "Im Einfamilienhaus von Herrn Mustafa Yilmaz in Herisau wurde das bestehende Bad vollstÃ¤ndig zurÃ¼ckgebaut und neu aufgebaut. Ziel war eine saubere, zeitgemÃ¤sse LÃ¶sung mit langlebigen Materialien.",
      "Realisiert wurden ein neues Bad inklusive Keramikarbeiten und der komplette Aufbau der neuen Nasszelle. Die AusfÃ¼hrung erfolgte im April und Mai 2024.",
    ],
    highlights: [
      "Altes Bad komplett rÃ¼ckgebaut",
      "Neue Keramik in der ganzen Nasszelle",
      "Neue Dusche und SanitÃ¤rzone",
      "Umsetzung in kurzer Bauzeit",
    ],
  },
  {
    slug: "umbau-renditeobjekt-birmensdorf",
    title: "Umbau Renditeobjekt in Birmensdorf",
    cover: image("1/IMG-20250318-WA0256.jpg"),
    gallery: gallery("1", [
      "IMG-20250318-WA0256.jpg",
      "Bad 01. OG Keramik, SanitÃ¤r und Armaturen.jpg",
      "Bad DG.jpg",
      "Umbau neue Keramik Treppenhaus.jpg",
      "Aussenansicht Birmensdorf.jpg",
    ]),
    location: "Birmensdorf, ZH",
    region: "ZÃ¼rich",
    type: "Mehrfamilienhaus",
    services: ["renovationen", "kuechen", "badumbau", "bodenbelaege"],
    duration: "Dezember 2024 - Februar 2025",
    year: 2025,
    shortDesc:
      "Instandstellung eines Renditeobjekts mit neuer Treppenhauskeramik, GemeinschaftskÃ¼che und totalsanierten GemeinschaftsbÃ¤dern.",
    description: [
      "In Birmensdorf haben wir ein Renditeobjekt umfassend instand gestellt. Im Mittelpunkt standen die gemeinschaftlich genutzten Bereiche sowie die allgemeine Aufwertung des Bestands.",
      "Zum Auftrag gehÃ¶rten neue Keramik und Ã¼berarbeitete WÃ¤nde im Treppenhaus, eine neue KÃ¼che im Gemeinschaftsraum, die Totalsanierung der GemeinschaftsbÃ¤der inklusive Keramik sowie weitere allgemeine Instandstellungsarbeiten am Objekt. Die AusfÃ¼hrung lief von Dezember 2024 bis Februar 2025.",
    ],
    highlights: [
      "Neue Treppenhauskeramik und instand gesetzte WÃ¤nde",
      "Neue GemeinschaftskÃ¼che eingebaut",
      "GemeinschaftsbÃ¤der komplett saniert",
      "Allgemeine Aufwertung des Objekts",
    ],
  },
  {
    slug: "sanierung-kosmetikstudio",
    title: "Sanierung Kosmetikstudio",
    cover: image("3/Fitpoint Tapetten und SchiebetÃ¼r .jpg"),
    gallery: gallery("3", [
      "Fitpoint Tapetten und SchiebetÃ¼r .jpg",
      "Decke und Spotlampen Einbau.jpg",
      "Fitpoint Boden 1.jpg",
      "Abbruch Fitpoint1.jpg",
      "Abbruch Fitpoint 2.jpg",
    ]),
    location: "Schweiz",
    region: "Schweiz",
    type: "Gewerbe",
    services: ["gewerbeumbauten", "trockenbau", "bodenbelaege"],
    duration: "September 2024",
    year: 2024,
    shortDesc:
      "Umbau eines Kosmetikstudios mit abgehÃ¤ngter Decke, Spots, Keramikplatten, Tapeten und neuen Raumtrennern.",
    description: [
      "FÃ¼r Frau Nathalie ZehnhÃ¤user sanierten und modernisierten wir die RÃ¤umlichkeiten eines Kosmetikstudios. Ziel war ein ruhiger, gepflegter Auftritt mit klaren Zonen fÃ¼r Kundinnen und Behandlungen.",
      "Zum Auftrag gehÃ¶rten der RÃ¼ckbau alter BÃ¶den und WÃ¤nde, das Herunterlassen der Decke, der Einbau von Spotlampen, Keramikplatten, Tapeten sowie Verglasungen und Raumtrenner. Das Projekt wurde im September 2024 abgeschlossen.",
    ],
    highlights: [
      "Decke abgehÃ¤ngt und Spots eingebaut",
      "Keramikplatten und neue Tapeten",
      "Verglasung und Raumtrenner erstellt",
      "Bestehende FlÃ¤chen vollstÃ¤ndig zurÃ¼ckgebaut",
    ],
  },
  {
    slug: "totale-renovation-eigentumswohnung-gockhausen",
    title: "Totale Renovation Eigentumswohnung Gockhausen",
    cover: image("9/umbau Wohnung Szabo KÃ¼che und Boden 1.jpg"),
    gallery: gallery("9", [
      "umbau Wohnung Szabo KÃ¼che und Boden 1.jpg",
      "IMG-20220212-WA0007.jpg",
    ]),
    location: "Gockhausen, ZH",
    region: "ZÃ¼rich",
    type: "Wohnung",
    services: [
      "renovationen",
      "kuechen",
      "badumbau",
      "innenausbau",
      "bodenbelaege",
    ],
    duration: "Dezember 2023 - Januar 2024",
    year: 2024,
    shortDesc:
      "Eigentumswohnung mit neuer KÃ¼che, neuem Bad, neuen EinbaumÃ¶beln und komplett erneuerten BelÃ¤gen.",
    description: [
      "In Gockhausen realisierten wir fÃ¼r Herrn David Szabo die komplette Erneuerung einer Eigentumswohnung. Nach dem RÃ¼ckbau von BÃ¶den, KÃ¼che und Bad wurde die Wohnung in kurzer Zeit neu aufgebaut.",
      "Geliefert und montiert wurden die neue KÃ¼che, das neue Bad mit Keramik und MÃ¶beln sowie neue EinbaumÃ¶bel. Die Totalsanierung wurde zwischen Dezember 2023 und Januar 2024 ausgefÃ¼hrt.",
    ],
    highlights: [
      "Neue KÃ¼che geliefert und montiert",
      "Bad mit Keramik und MÃ¶beln erneuert",
      "Neue EinbaumÃ¶bel integriert",
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
    duration: "September 2023 - Dezember 2023",
    year: 2023,
    shortDesc:
      "ZusammenfÃ¼hrung von zwei Wohnungen zu einer Einheit mit Wand- und DeckendurchbrÃ¼chen, neuer KÃ¼che, Bad, EinbaumÃ¶beln und Terrassenkeramik.",
    description: [
      "FÃ¼r die Familie Vasiljevic durften wir in Wil zwei bestehende Wohnungen zu einer grossen Einheit zusammenbauen. Dazu gehÃ¶rten umfangreiche RÃ¼ckbauarbeiten an BÃ¶den, KÃ¼che und BÃ¤dern sowie mehrere strukturelle Eingriffe.",
      "Neu realisiert wurden eine KÃ¼che, ein Bad mit Keramik und MÃ¶beln, neue EinbaumÃ¶bel, WanddurchbrÃ¼che, der Abbruch eines Kamins, eine DeckenÃ¶ffnung fÃ¼r eine Wendeltreppe sowie neue Keramik auf den Terrassen. Die Arbeiten liefen von September bis Dezember 2023.",
    ],
    highlights: [
      "Zwei Wohnungen zu einer Einheit zusammengefÃ¼hrt",
      "WanddurchbrÃ¼che und DeckenÃ¶ffnung fÃ¼r Wendeltreppe",
      "Neue KÃ¼che und neue Badzone realisiert",
      "EinbaumÃ¶bel und Terrassenkeramik ergÃ¤nzt",
    ],
  },
];

export const projectRegions: Region[] = Array.from(
  new Set(projects.map((project) => project.region))
);

export const getProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);
