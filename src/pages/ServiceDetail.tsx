import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/leistungen" replace />;

  const related = projects
    .filter((p) => p.services.includes(service.slug))
    .slice(0, 3);

  return (
    <PageShell>
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={`https://wasdra.ch/leistungen/${service.slug}`}
        image={service.image}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.seoDescription,
          provider: {
            "@type": "LocalBusiness",
            name: "WASDRA.CH",
            url: "https://wasdra.ch",
          },
          areaServed: "Schweiz",
        }}
      />
      <PageHero
        eyebrow={service.shortTitle}
        title={service.tagline}
        description={service.intro}
        image={service.image}
        crumbs={[
          { label: "Start", to: "/" },
          { label: "Leistungen", to: "/leistungen" },
          { label: service.shortTitle },
        ]}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Was Sie von WASDRA erwarten dürfen.
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-charcoal p-8 text-primary-foreground">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Direkter Draht
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Kostenlose Beratung für Ihr {service.shortTitle}-Projekt.
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/70">
              Wir besichtigen die Räume, beraten Sie ehrlich und liefern eine
              transparente Offerte – inklusive Festpreis und Bauzeitplan.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link to={contact.quotePath}>Offerte anfragen</Link>
              </Button>
              <Button variant="dark-outline" size="lg" asChild>
                <a href={contact.phoneHref}>
                  <Phone className="h-4 w-4" /> {contact.phoneDisplay}
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface-soft py-20 sm:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Unser Vorgehen
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              In vier klaren Etappen zum Resultat.
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl bg-card p-6 shadow-soft"
              >
                <div className="font-display text-3xl font-bold text-accent">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-background py-20 sm:py-28">
          <div className="container-wide">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
                  <span className="accent-rule" /> Referenzen
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Realisierte {service.shortTitle}-Projekte.
                </h2>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/referenzen">
                  Alle Referenzen <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/referenzen/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {p.location}
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {p.shortDesc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-charcoal py-16">
        <div className="container-wide flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
              Weitere Leistungen entdecken
            </h3>
            <p className="mt-2 text-primary-foreground/70">
              Alles aus einer Hand – von der Planung bis zur Übergabe.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/leistungen/${s.slug}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {s.shortTitle}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default ServiceDetail;
