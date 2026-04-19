import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import heroImg from "@/assets/hero-kitchen.jpg";

const trust = [
  "Seit 2017",
  "Küchen nach Mass",
  "Renovationen & Umbauten",
  "EFH · MFH · Wohnungen · Gewerbe",
];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-charcoal"
    >
      <img
        src={heroImg}
        alt="Premium Küche nach Mass — WASDRA.CH"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,hsl(var(--accent)/0.18),transparent_70%)]"
        aria-hidden
      />

      <div className="container-wide relative z-10 pt-32 pb-20 sm:pt-36">
        <div className="max-w-3xl">
          <div className="fade-in-up flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="accent-rule" />
            Renovation · Innenausbau · Schweiz
          </div>

          <h1 className="fade-in-up mt-6 font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl lg:text-7xl">
            Renovationen, Küchen und{" "}
            <span className="text-accent">Innenausbau</span> nach Mass.
          </h1>

          <p className="fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 sm:text-xl">
            WASDRA realisiert hochwertige Umbauten und Sanierungen für
            Wohnungen, Häuser und Gewerbeflächen in der Schweiz – präzise
            geplant und sauber umgesetzt.
          </p>

          <div className="fade-in-up mt-10 flex flex-wrap items-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to={contact.quotePath}>
                Projekt anfragen
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="dark-outline" size="xl" asChild>
              <a href="#referenzen">Referenzen ansehen</a>
            </Button>
          </div>

          <ul className="fade-in-up mt-14 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm text-primary-foreground/70 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#leistungen"
        aria-label="Nach unten scrollen"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-primary-foreground/60 transition-colors hover:text-accent md:flex"
      >
        Mehr entdecken <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};
