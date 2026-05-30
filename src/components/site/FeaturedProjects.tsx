import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);

  return (
    <section id="referenzen" className="bg-surface-soft py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Referenzen"
            title={
              <>
                Ausgewählte Projekte –<br />
                realisiert in der ganzen Schweiz.
              </>
            }
            description="Eine Auswahl unserer Umbauten der letzten Jahre. Jedes Projekt steht für Qualität, Termintreue und partnerschaftliche Zusammenarbeit."
          />
          <Button variant="outline" size="lg" asChild>
            <Link to="/referenzen">
              Alle Referenzen ansehen
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to={`/referenzen/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-charcoal/80 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                  <MapPin className="h-3 w-3 text-accent" />
                  {p.location}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.type}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.shortDesc}
                </p>
                <div className="mt-auto flex items-center justify-end border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    Projekt ansehen
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
