import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import renovationImg from "@/assets/service-renovation.jpg";

const LeistungenIndex = () => {
  return (
    <PageShell>
      <Seo
        title="Leistungen – Renovation, Küchen & Innenausbau | WASDRA.CH"
        description="Übersicht aller Leistungen von WASDRA.CH: Renovationen, Küchen nach Mass, Innenausbau, Badumbau, Trockenbau, Bodenbeläge und Gewerbeumbauten."
        canonical="https://wasdra.ch/leistungen"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `https://wasdra.ch/leistungen/${s.slug}`,
          })),
        }}
      />
      <PageHero
        eyebrow="Unsere Leistungen"
        title="Sieben Disziplinen – ein Anspruch."
        description="Von der Totalsanierung bis zur massgeschneiderten Küche: WASDRA übernimmt Planung, Koordination und Ausführung – alles aus einer Hand."
        image={renovationImg}
        crumbs={[{ label: "Start", to: "/" }, { label: "Leistungen" }]}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/leistungen/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-charcoal/80 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                    <s.icon className="h-3.5 w-3.5 text-accent" />
                    {s.shortTitle}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-7">
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.intro}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    Details ansehen
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-charcoal p-10 text-center">
            <h3 className="font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
              Ihr Projekt verdient eine ehrliche Einschätzung.
            </h3>
            <p className="max-w-xl text-primary-foreground/70">
              Wir besichtigen Ihre Räumlichkeiten, beraten Sie unverbindlich und
              erstellen eine transparente Offerte.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/#kontakt">Offerte anfragen</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default LeistungenIndex;
