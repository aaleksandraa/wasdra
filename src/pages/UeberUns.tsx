import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Compass,
  Hammer,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { services } from "@/data/services";
import renovationImg from "@/assets/service-renovation.jpg";
import apartmentImg from "@/assets/project-apartment.jpg";
import innenausbauImg from "@/assets/service-innenausbau.jpg";

const stats = [
  { value: "2017", label: "Gegründet in Wil SG" },
  { value: "100+", label: "Realisierte Projekte" },
  { value: "100%", label: "Eigene Koordination" },
  { value: "CH", label: "Tätig in der Schweiz" },
];

const values = [
  {
    icon: Compass,
    title: "Individuelle Lösungen",
    desc: "Statt Standardpaketen entwickeln wir Konzepte, die zu Ihrem Objekt und Alltag passen.",
  },
  {
    icon: MessageSquare,
    title: "Klare Kommunikation",
    desc: "Transparente Updates während des gesamten Projekts – ohne Überraschungen.",
  },
  {
    icon: Hammer,
    title: "Präzise Ausführung",
    desc: "Saubere Verarbeitung, langlebige Materialien, sichtbare Liebe zum Detail.",
  },
  {
    icon: ShieldCheck,
    title: "Termin- und Budgettreue",
    desc: "Verbindliche Termine und transparente Festpreise – schriftlich zugesichert.",
  },
];

const audience = [
  "Privatpersonen (Wohnungen und Häuser)",
  "Investoren und Eigentümer",
  "Verwaltungen",
  "Gewerbliche Auftraggeber",
];

const referenceTypes = [
  "Eigentumswohnungen und Einfamilienhäuser",
  "Mehrfamilienhäuser",
  "Gewerbeobjekte wie Restaurants und Studios",
];

const UeberUns = () => {
  return (
    <PageShell>
      <Seo
        title="Über uns – Renovationen, Küchen & Innenausbau | WASDRA.CH"
        description="WASDRA.CH ist Ihr Partner für Renovationen, Küchen nach Mass und Innenausbau. Seit 2017 realisieren wir Umbauten für Wohnungen, Häuser und Gewerbe in der Schweiz."
        canonical="https://wasdra.ch/ueber-uns"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Über uns – WASDRA.CH",
          url: "https://wasdra.ch/ueber-uns",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "WASDRA.CH",
            foundingDate: "2017",
            areaServed: "Schweiz",
            description:
              "Renovationen, Küchen nach Mass und Innenausbau für Wohnungen, EFH, MFH und Gewerbe.",
          },
        }}
      />
      <PageHero
        eyebrow="Über uns"
        title="Ihr Partner für Renovationen, Küchen und Innenausbau nach Mass."
        description="WASDRA.CH steht für hochwertige Umbauten, durchdachte Lösungen und saubere Ausführung. Seit unserer Gründung im Jahr 2017 begleiten wir Privat- und Geschäftskunden – zuverlässig, präzise und mit klarem Fokus auf Qualität."
        image={renovationImg}
        crumbs={[{ label: "Start", to: "/" }, { label: "Über uns" }]}
      />

      {/* Stats strip */}
      <section className="border-b border-border bg-background">
        <div className="container-wide grid grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-8 text-center">
              <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wer wir sind */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={apartmentImg}
                alt="WASDRA.CH realisiert Renovationen in der ganzen Schweiz"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-accent p-6 text-accent-foreground shadow-glow-orange sm:block sm:-right-8">
              <div className="font-display text-3xl font-bold leading-none">
                Wil SG
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider">
                Gegründet 2017
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Wer wir sind
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Ein Schweizer Partner für Bauherren, die mehr erwarten.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              WASDRA.CH wurde in Wil SG gegründet und hat sich in den letzten
              Jahren als kompetenter Partner für Renovationen, Küchen nach Mass
              und Innenausbau etabliert.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Wir arbeiten für Eigentümer von Wohnungen und Einfamilienhäusern,
              für Investoren und Verwaltungen sowie für gewerbliche Kunden.
              Unser Leistungsspektrum reicht von kleineren Umbauten bis hin zu
              kompletten Sanierungen von Wohnungen, Häusern und
              Mehrfamilienobjekten.
            </p>
          </div>
        </div>
      </section>

      {/* Was wir machen */}
      <section className="bg-surface-soft py-20 sm:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Was wir machen
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Funktionale, ästhetische und langlebige Lösungen.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wir übernehmen sowohl Teilprojekte als auch komplette Umbauten aus
              einer Hand.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/leistungen/${s.slug}`}
                className="group flex gap-4 bg-card p-6 transition-colors hover:bg-background"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Arbeitsweise */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Unsere Arbeitsweise
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Persönlich, sauber geplant, präzise umgesetzt.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Jedes Projekt ist einzigartig. Deshalb legen wir grossen Wert auf
              persönliche Beratung und eine saubere Planung. Unser Ziel ist es,
              Projekte effizient umzusetzen und gleichzeitig höchste Qualität
              zu gewährleisten.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={innenausbauImg}
                alt="Detailansicht eines Innenausbau-Projekts von WASDRA"
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erfahrung & Qualität */}
      <section className="bg-charcoal py-20 sm:py-28 text-primary-foreground">
        <div className="container-wide grid gap-14 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Erfahrung und Projekte
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Seit 2017 in der ganzen Schweiz im Einsatz.
            </h2>
            <p className="mt-6 text-primary-foreground/75">
              Wir haben zahlreiche Projekte realisiert – von kleineren
              Renovationen bis hin zu umfangreichen Umbauten mit Budgets von
              mehreren zehntausend bis über hunderttausend Schweizer Franken.
            </p>
            <ul className="mt-6 space-y-3">
              {referenceTypes.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Briefcase className="mt-0.5 h-5 w-5 text-accent" />
                  <span className="text-sm text-primary-foreground/85">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="accent" size="lg" asChild>
                <Link to="/referenzen">
                  Referenzen ansehen <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Qualität und Anspruch
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Saubere Arbeit. Langlebige Lösungen. Zufriedene Kunden.
            </h2>
            <p className="mt-6 text-primary-foreground/75">
              Materialwahl, Verarbeitung und Details spielen eine entscheidende
              Rolle. Wir achten darauf, dass jedes Projekt nicht nur optisch
              überzeugt, sondern auch funktional und nachhaltig ist.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Award, label: "Premium-Materialien" },
                { icon: ShieldCheck, label: "Schriftliche Garantie" },
                { icon: Users, label: "Festes Handwerker-Netzwerk" },
                { icon: CheckCircle2, label: "Mängelfreie Übergabe" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Für wen wir arbeiten */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Für wen wir arbeiten
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Privat oder Gewerbe – wir passen uns an.
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Egal ob einzelne Räume oder komplette Objekte – wir passen unsere
              Leistungen an die jeweiligen Anforderungen an.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((a) => (
              <div
                key={a}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <p className="mt-4 font-display text-base font-semibold leading-snug">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface-soft pb-24 sm:pb-32">
        <div className="container-wide">
          <div className="overflow-hidden rounded-3xl bg-charcoal p-10 sm:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
                  <span className="accent-rule" /> Bereit für Ihr Projekt?
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                  Planen Sie eine Renovation oder einen Umbau?
                </h2>
                <p className="mt-5 text-base text-primary-foreground/75 sm:text-lg">
                  Kontaktieren Sie uns – wir beraten Sie persönlich und
                  unverbindlich und unterstützen Sie bei der Umsetzung Ihres
                  Projekts.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="accent" size="xl" asChild>
                  <Link to={contact.quotePath}>
                    Jetzt Projekt anfragen <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="dark-outline" size="xl" asChild>
                  <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default UeberUns;
