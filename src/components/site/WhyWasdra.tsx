import { Award, Briefcase, Clock, Compass, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const points = [
  {
    icon: Compass,
    title: "Individuelle Lösungen",
    desc: "Jedes Projekt wird massgeschneidert – kein Standardpaket.",
  },
  {
    icon: Award,
    title: "Hohe Qualität",
    desc: "Saubere Verarbeitung, Premium-Materialien, klare Übergabe.",
  },
  {
    icon: Clock,
    title: "Erfahrung seit 2017",
    desc: "Über 100 realisierte Projekte in der ganzen Schweiz.",
  },
  {
    icon: Users,
    title: "Privat & Gewerbe",
    desc: "Wohnungen, EFH, MFH und gewerbliche Umbauten.",
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässige Umsetzung",
    desc: "Verbindliche Termine und transparente Kommunikation.",
  },
  {
    icon: Briefcase,
    title: "Alles aus einer Hand",
    desc: "Planung, Koordination, Ausführung – ein Ansprechpartner.",
  },
];

export const WhyWasdra = () => {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,hsl(var(--accent)/0.12),transparent_70%)]"
        aria-hidden
      />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Warum WASDRA"
          align="center"
          light
          title={
            <>
              Sechs Gründe, weshalb Bauherren<br />
              uns langfristig vertrauen.
            </>
          }
          description="Wir liefern, was wir versprechen – mit Schweizer Präzision und einem Auge für das Detail."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.04] sm:p-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-primary-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
