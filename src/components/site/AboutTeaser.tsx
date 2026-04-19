import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import apartment from "@/assets/project-apartment.jpg";

const stats = [
  { value: "8+", label: "Jahre Erfahrung" },
  { value: "100+", label: "Projekte realisiert" },
  { value: "100%", label: "Eigene Koordination" },
];

export const AboutTeaser = () => {
  return (
    <section id="ueber-uns" className="bg-background py-24 sm:py-32">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elevated">
            <img
              src={apartment}
              alt="Realisierte Wohnungssanierung von WASDRA.CH"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden rounded-xl bg-accent p-6 text-accent-foreground shadow-glow-orange sm:block sm:-right-8">
            <div className="font-display text-4xl font-bold leading-none">2017</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider">
              Gegründet in der Schweiz
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="accent-rule" />
            Über uns
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Ein Partner, der Bauherren versteht – nicht nur Pläne.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            WASDRA wurde 2017 gegründet und steht heute für hochwertige
            Renovationen, individuelle Küchen und massgeschneiderten Innenausbau.
            Vom ersten Beratungsgespräch bis zur Schlüsselübergabe begleiten
            wir Sie persönlich.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Wir arbeiten mit einem festen Netzwerk an erfahrenen Handwerkern
            und kontrollieren jeden Schritt – damit Qualität, Zeitplan und
            Budget zuverlässig zusammenpassen.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Button variant="default" size="lg" asChild>
              <Link to="/ueber-uns">
                Mehr über WASDRA <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
