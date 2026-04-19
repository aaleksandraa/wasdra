import {
  Bath,
  Building2,
  ChefHat,
  Hammer,
  Layers,
  LayoutGrid,
  Ruler,
  type LucideIcon,
} from "lucide-react";

import renovationImg from "@/assets/service-renovation.jpg";
import kitchenImg from "@/assets/hero-kitchen.jpg";
import innenausbauImg from "@/assets/service-innenausbau.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import trockenbauImg from "@/assets/service-trockenbau.jpg";
import bodenImg from "@/assets/service-bodenbelaege.jpg";
import gewerbeImg from "@/assets/service-gewerbe.jpg";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  image: string;
  intro: string;
  bullets: string[];
  process: { title: string; desc: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "renovationen",
    icon: Hammer,
    title: "Renovationen & Sanierungen",
    shortTitle: "Renovationen",
    tagline: "Ihre Liegenschaft – wieder auf höchstem Niveau.",
    desc: "Komplette Umbauten von Wohnungen und Häusern – strukturiert, sauber, termingerecht.",
    image: renovationImg,
    intro:
      "Vom Teilumbau bis zur Totalsanierung übernehmen wir Planung, Koordination und Ausführung – aus einer Hand und mit transparenten Fixterminen.",
    bullets: [
      "Totalsanierungen von Wohnungen, EFH und MFH",
      "Energetische Sanierungen und Modernisierungen",
      "Koordination aller Gewerke (Elektro, Sanitär, Maler, Boden)",
      "Klare Bauzeitenpläne und Festpreis-Offerten",
      "Schlüsselübergabe inkl. Baureinigung",
    ],
    process: [
      { title: "Erstgespräch & Aufnahme", desc: "Vor-Ort-Termin, Bedarfsanalyse, fotografische Dokumentation." },
      { title: "Planung & Offerte", desc: "Detaillierte Offerte mit Materialien, Terminen und Festpreis." },
      { title: "Umsetzung", desc: "Saubere, koordinierte Bauphase mit wöchentlichem Statusupdate." },
      { title: "Abnahme & Übergabe", desc: "Mängelfreie Übergabe inkl. Garantie und Dokumentation." },
    ],
    seoTitle: "Renovationen & Sanierungen in der Schweiz | WASDRA.CH",
    seoDescription:
      "WASDRA.CH plant und realisiert komplette Renovationen und Sanierungen für Wohnungen, EFH und MFH in der Schweiz. Festpreis, klare Termine, Premium-Qualität.",
  },
  {
    slug: "kuechen",
    icon: ChefHat,
    title: "Küchen nach Mass",
    shortTitle: "Küchen",
    tagline: "Massgeschneiderte Küchen mit Schweizer Präzision.",
    desc: "Individuell geplante Küchen mit Premium-Materialien und millimetergenauer Umsetzung.",
    image: kitchenImg,
    intro:
      "Wir planen und realisieren Küchen, die perfekt zu Ihrem Alltag passen – funktional, zeitlos und präzise umgesetzt. Von der ersten Idee über die 3D-Visualisierung bis zur finalen Montage erhalten Sie bei WASDRA alles aus einer Hand.",
    bullets: [
      "Individuelle 3D-Planung und persönliche Materialberatung",
      "Fronten aus Massivholz, Lack oder Stein",
      "Hochwertige Küchengeräte (V-ZUG, Miele, Bora u.v.m.)",
      "Naturstein-, Quarz- und Keramikabdeckungen",
      "Durchdachte Lichtkonzepte und smarte Integration",
    ],
    process: [
      { title: "Beratung & Aufmass", desc: "Persönliches Gespräch vor Ort, präzises Aufmass und Definition von Stil, Materialien und Anforderungen." },
      { title: "3D-Visualisierung", desc: "Sie sehen Ihre Küche bereits vor der Umsetzung – realistisch und detailliert geplant." },
      { title: "Produktion", desc: "Fertigung in ausgewählten Schweizer Schreinereien mit höchsten Qualitätsstandards." },
      { title: "Montage", desc: "Saubere und effiziente Montage innerhalb von 2–3 Tagen, inklusive Anschluss aller Geräte." },
    ],
    seoTitle: "Küchen nach Mass in der Schweiz | WASDRA.CH",
    seoDescription:
      "Massgeschneiderte Küchen mit Schweizer Präzision: 3D-Planung, Premium-Materialien und Top-Geräte (V-ZUG, Miele, Bora). Jetzt kostenlose Beratung anfragen.",
  },
  {
    slug: "innenausbau",
    icon: Layers,
    title: "Innenausbau & Einbaumöbel",
    shortTitle: "Innenausbau",
    tagline: "Räume, die jeden Zentimeter nutzen.",
    desc: "Begehbare Schränke, Wandschränke und massgeschneiderte Möbel für jede Situation.",
    image: innenausbauImg,
    intro:
      "Ob Ankleide, TV-Wand oder Garderobe – unsere massgefertigten Einbaumöbel verwandeln Nischen und Wände in funktionalen Stauraum mit Charakter.",
    bullets: [
      "Begehbare Kleiderschränke & Ankleiden",
      "Wand- und Garderobenschränke",
      "TV- und Sideboardlösungen",
      "Home-Office-Möbel und Bibliotheken",
      "Furnier-, Lack- und Glasoberflächen",
    ],
    process: [
      { title: "Konzept", desc: "Stilrichtung, Funktion und Stauraum gemeinsam definieren." },
      { title: "Werkplanung", desc: "Detaillierte Konstruktionspläne und Materialmuster." },
      { title: "Schreinerfertigung", desc: "Produktion in Schweizer Werkstätten mit höchster Präzision." },
      { title: "Montage", desc: "Millimetergenaue Montage vor Ort, inkl. Beleuchtung und Anschluss." },
    ],
    seoTitle: "Innenausbau & Einbaumöbel in der Schweiz | WASDRA.CH",
    seoDescription:
      "Massgeschneiderte Einbaumöbel, Ankleiden, Wandschränke und Innenausbauten – designgetrieben, präzise gefertigt und perfekt eingepasst.",
  },
  {
    slug: "badumbau",
    icon: Bath,
    title: "Badumbau",
    shortTitle: "Badumbau",
    tagline: "Vom Funktionsraum zum Wohlfühl-Bad.",
    desc: "Vom kleinen Refresh bis zur kompletten Sanierung – Plattenarbeiten, Sanitär, Elektrik.",
    image: bathroomImg,
    intro:
      "Wir gestalten Bäder, die täglich Freude machen. Vom Plattenwechsel bis zur kompletten Neuinstallation – inklusive Sanitär, Heizung und Elektrik.",
    bullets: [
      "Komplettsanierung inkl. Sanitär & Elektrik",
      "Grossformatige Wand- und Bodenplatten",
      "Ebenerdige Duschen & freistehende Wannen",
      "Beleuchtungs- und Spiegelkonzepte",
      "Barrierefreie Lösungen auf Wunsch",
    ],
    process: [
      { title: "Aufnahme & Konzept", desc: "Bestandsaufnahme, Mood-Board und Materialauswahl." },
      { title: "Detailplanung", desc: "Sanitär-, Elektro- und Lichtplanung." },
      { title: "Demontage & Installation", desc: "Saubere Demontage, neue Leitungen, Plattenarbeiten." },
      { title: "Finish & Übergabe", desc: "Sanitärobjekte, Spiegel, Beleuchtung, Endreinigung." },
    ],
    seoTitle: "Badumbau & Badsanierung Schweiz | WASDRA.CH",
    seoDescription:
      "Badumbau und Badsanierung in der Schweiz: Plattenarbeiten, Sanitärinstallation, ebenerdige Duschen. Premium-Qualität zum fairen Festpreis.",
  },
  {
    slug: "trockenbau",
    icon: Ruler,
    title: "Trockenbau & Raumgestaltung",
    shortTitle: "Trockenbau",
    tagline: "Räume neu denken – schnell und sauber.",
    desc: "Trennwände, abgehängte Decken und Raumkonzepte, die Räume neu denken.",
    image: trockenbauImg,
    intro:
      "Mit Trockenbau verändern wir Grundrisse ohne grossen Eingriff in die Bausubstanz – ideal für offene Wohnkonzepte, Akustik und neue Raumzuschnitte.",
    bullets: [
      "Tragende und nicht-tragende Trennwände",
      "Abgehängte Decken mit Lichtintegration",
      "Akustik- und Schallschutzlösungen",
      "Vorwandinstallationen für Bäder & Küchen",
      "Brandschutz nach Schweizer Norm",
    ],
    process: [
      { title: "Konzept", desc: "Neuer Grundriss, Lichtplanung, Akustikbedarf." },
      { title: "Statik & Planung", desc: "Abklärung mit Statiker, Werkplanung." },
      { title: "Ausführung", desc: "Saubere und schnelle Trockenbauarbeiten." },
      { title: "Finish", desc: "Spachtelung Q3/Q4 und Übergabe an Maler/Boden." },
    ],
    seoTitle: "Trockenbau & Raumgestaltung Schweiz | WASDRA.CH",
    seoDescription:
      "Trockenbau, Trennwände, abgehängte Decken und Akustiklösungen für Wohnen und Gewerbe in der Schweiz. Sauber, schnell, präzise.",
  },
  {
    slug: "bodenbelaege",
    icon: LayoutGrid,
    title: "Bodenbeläge – Vinyl, Parkett, Keramik",
    shortTitle: "Bodenbeläge",
    tagline: "Der Boden definiert den Raum.",
    desc: "Hochwertige Bodenbeläge fachgerecht verlegt – Parkett, Vinyl, Keramik und mehr.",
    image: bodenImg,
    intro:
      "Wir beraten Sie bei der Wahl des passenden Bodens und übernehmen die fachgerechte Verlegung – inklusive Untergrundvorbereitung und Sockelleisten.",
    bullets: [
      "Massivholz- und Mehrschichtparkett",
      "Vinyl- und Designböden",
      "Keramik- und Feinsteinzeugplatten",
      "Untergrundvorbereitung & Spachtelarbeiten",
      "Sockelleisten und Übergangsprofile",
    ],
    process: [
      { title: "Beratung", desc: "Materialmuster und Beratung zur Nutzung und Optik." },
      { title: "Untergrund", desc: "Prüfung, Spachtelung und Vorbereitung." },
      { title: "Verlegung", desc: "Fachgerechte Verlegung durch erfahrene Bodenleger." },
      { title: "Finish", desc: "Sockelleisten, Reinigung, Übergabe." },
    ],
    seoTitle: "Bodenbeläge Schweiz: Parkett, Vinyl, Keramik | WASDRA.CH",
    seoDescription:
      "Hochwertige Bodenbeläge für Wohnen und Gewerbe in der Schweiz: Parkett, Vinyl, Keramik. Fachgerechte Verlegung mit Garantie.",
  },
  {
    slug: "gewerbeumbauten",
    icon: Building2,
    title: "Gewerbeumbauten",
    shortTitle: "Gewerbe",
    tagline: "Umbauten für Gastro, Retail und Office.",
    desc: "Restaurants, Studios, Büros – Umbauten für gewerbliche Räume mit klarem Zeitplan.",
    image: gewerbeImg,
    intro:
      "Gewerbeumbauten verlangen klare Termine und minimale Betriebsunterbrüche. Wir planen so, dass Ihr Geschäft schnell wieder läuft.",
    bullets: [
      "Restaurants, Cafés und Gastronomie",
      "Boutiquen, Showrooms und Retail",
      "Büros, Studios und Praxen",
      "Nachts- und Wochenendarbeit möglich",
      "Behördengänge und Bewilligungen",
    ],
    process: [
      { title: "Briefing", desc: "Geschäftsmodell, Markenführung, Zielgruppe verstehen." },
      { title: "Konzept & Planung", desc: "Grundriss, Materialien, Lichtkonzept, Bewilligungen." },
      { title: "Bauphase", desc: "Klare Etappen, minimaler Betriebsunterbruch." },
      { title: "Eröffnung", desc: "Pünktliche Übergabe zur Wiedereröffnung." },
    ],
    seoTitle: "Gewerbeumbauten Schweiz: Gastro, Retail, Office | WASDRA.CH",
    seoDescription:
      "Gewerbeumbauten in der Schweiz: Restaurants, Boutiquen, Büros und Studios – termingerecht und mit minimalem Betriebsunterbruch.",
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);
