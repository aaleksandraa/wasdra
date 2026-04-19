import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/data/services";

export const Services = () => {
  return (
    <section id="leistungen" className="bg-background py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Leistungen"
            title={
              <>
                Alles aus einer Hand –<br />
                vom Konzept bis zur Übergabe.
              </>
            }
            description="Wir kombinieren handwerkliche Präzision mit klarer Projektführung. So entsteht ein Resultat, das im Detail überzeugt."
          />
          <Link
            to="/leistungen"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
          >
            Alle Leistungen ansehen
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/leistungen/${s.slug}`}
              className="group relative flex gap-5 bg-card p-6 transition-colors duration-300 hover:bg-surface-soft sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground sm:h-14 sm:w-14">
                <s.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors group-hover:text-accent">
                  Mehr erfahren
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
