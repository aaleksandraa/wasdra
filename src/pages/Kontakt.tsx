import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import renovationImg from "@/assets/service-renovation.jpg";

const contactHighlights = [
  {
    icon: Phone,
    title: "Telefon",
    content: contact.phoneDisplay,
    href: contact.phoneHref,
    contentClassName: "break-words",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: contact.email,
    href: contact.emailHref,
    contentClassName: "break-all",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: contact.fullAddress,
    contentClassName: "break-words",
  },
];

const steps = [
  "Projekt kurz beschreiben: Objekt, Ort und gewünschte Arbeiten",
  "Fotos, Pläne oder Referenzen per E-Mail mitsenden, wenn vorhanden",
  "Wir melden uns zeitnah mit einer ersten Einschätzung oder einem Termin",
];

const Kontakt = () => {
  return (
    <PageShell>
      <Seo
        title="Kontakt – WASDRA.CH"
        description="Kontaktieren Sie WASDRA.CH in Wil SG für Renovationen, Innenausbau und Küchen nach Mass. Telefon, E-Mail und Adresse auf einen Blick."
        canonical="https://wasdra.ch/kontakt"
        image={renovationImg}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt – WASDRA.CH",
          url: "https://wasdra.ch/kontakt",
          mainEntity: {
            "@type": "LocalBusiness",
            name: contact.companyName,
            telephone: "+41 79 776 91 34",
            email: contact.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: contact.street,
              postalCode: contact.postalCode,
              addressLocality: "Wil",
              addressRegion: "SG",
              addressCountry: "CH",
            },
          },
        }}
      />
      <PageHero
        eyebrow="Kontakt"
        title="Direkter Kontakt für Ihr Renovations- oder Umbauprojekt."
        description="Sie erreichen WASDRA.CH schnell und unkompliziert per Telefon, E-Mail oder direkt an unserer Adresse in Wil SG."
        image={renovationImg}
        crumbs={[{ label: "Start", to: "/" }, { label: "Kontakt" }]}
      />

      <section className="overflow-x-hidden bg-background py-20 sm:py-28">
        <div className="container-wide grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> WASDRA.CH
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Alle Kontaktdaten auf einen Blick.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ob erste Idee, konkrete Offertanfrage oder laufendes Projekt: wir
              sind für Sie erreichbar und begleiten Sie persönlich.
            </p>

            <div className="mt-10 grid gap-4">
              {contactHighlights.map(({ icon: Icon, title, content, href, contentClassName }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {title}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className={`mt-1 inline-block max-w-full text-lg font-semibold text-foreground transition-colors hover:text-accent ${contentClassName}`}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className={`mt-1 max-w-full text-lg font-semibold text-foreground ${contentClassName}`}>
                          {content}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-charcoal p-6 text-primary-foreground shadow-elevated sm:p-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Schnell erreichbar
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Kontakt für Offerten und Terminvereinbarungen.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Für eine erste Einschätzung reicht oft schon ein kurzer Anruf oder
              eine E-Mail mit den wichtigsten Eckdaten Ihres Projekts.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm font-semibold text-primary-foreground">
                    Reaktionszeit
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
                    Wir melden uns in der Regel zeitnah mit einer ersten
                    Rückmeldung oder einem Besichtigungstermin.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button
                variant="accent"
                size="xl"
                className="h-auto w-full min-w-0 whitespace-normal px-5 py-4 text-center sm:h-14 sm:px-9 sm:whitespace-nowrap"
                asChild
              >
                <a href={contact.phoneHref}>
                  <span className="min-w-0">{contact.phoneDisplay}</span>
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="dark-outline"
                size="xl"
                className="h-auto w-full min-w-0 whitespace-normal break-all px-5 py-4 text-center sm:h-14 sm:px-9 sm:whitespace-nowrap sm:break-normal"
                asChild
              >
                <a href={contact.emailHref}>
                  <span className="min-w-0 break-all">{contact.email}</span>
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-primary-foreground/75">
              <div className="font-semibold text-primary-foreground">
                {contact.companyName}
              </div>
              <div className="mt-2">{contact.street}</div>
              <div>{contact.postalCode} {contact.city}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="offerte" className="overflow-x-hidden bg-surface-soft py-20 sm:py-28">
        <div className="container-wide grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="accent-rule" /> Offerte anfragen
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              So starten wir Ihr Projekt sauber und effizient.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Damit wir Ihr Vorhaben schnell einschätzen können, helfen uns ein
              paar kurze Angaben vorab. Den Rest klären wir persönlich mit
              Ihnen.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
            <ol className="grid gap-4">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-lg font-bold text-accent">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-relaxed text-foreground/80">
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="lg" asChild>
                <a href={contact.emailHref}>
                  Per E-Mail senden <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/referenzen">
                  Referenzen ansehen <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Kontakt;
