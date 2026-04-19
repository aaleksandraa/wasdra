import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCta = () => {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_50%,hsl(var(--accent)/0.18),transparent_70%)]"
        aria-hidden
      />
      <div className="container-wide relative grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="accent-rule" />
            Kontakt & Offerte
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            Planen Sie eine Renovation<br />
            oder einen Umbau?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
            Erzählen Sie uns von Ihrem Projekt. Sie erhalten innert 24 Stunden
            eine erste Rückmeldung – unverbindlich und kostenlos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="accent" size="xl" asChild>
              <a href="#offerte">
                Offerte anfragen <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="dark-outline" size="xl" asChild>
              <a href="tel:+41000000000">
                <Phone className="h-5 w-5" /> Jetzt anrufen
              </a>
            </Button>
          </div>
        </div>

        <form
          id="offerte"
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-8"
        >
          <h3 className="font-display text-xl font-semibold text-primary-foreground">
            Kurze Projektanfrage
          </h3>
          <p className="mt-1 text-sm text-primary-foreground/60">
            Wir melden uns innert 24 Stunden.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="grid gap-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                Name
              </label>
              <input
                type="text"
                required
                className="h-11 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Max Muster"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                E-Mail oder Telefon
              </label>
              <input
                type="text"
                required
                className="h-11 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="max@beispiel.ch"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                Projektbeschreibung
              </label>
              <textarea
                rows={4}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Kurz: Objekt, Ort, gewünschte Arbeiten…"
              />
            </div>
            <Button type="submit" variant="accent" size="lg" className="mt-2">
              Anfrage senden <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="text-xs text-primary-foreground/50">
              Mit dem Absenden stimmen Sie der Bearbeitung Ihrer Anfrage zu.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
