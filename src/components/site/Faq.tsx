import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Wie läuft ein Renovationsprojekt bei WASDRA ab?",
    a: "Nach dem ersten Gespräch besichtigen wir das Objekt, erfassen die Anforderungen und erstellen eine verbindliche Offerte. Nach Auftragserteilung folgen Detailplanung, Materialauswahl, Ausführung und die saubere Übergabe – mit einem festen Ansprechpartner über den ganzen Prozess.",
  },
  {
    q: "Übernehmen Sie auch nur Teilarbeiten, z. B. nur die Küche oder das Bad?",
    a: "Ja. Wir realisieren sowohl Komplettrenovationen als auch einzelne Gewerke wie Küche, Bad, Bodenbeläge oder Einbaumöbel.",
  },
  {
    q: "Wie lange dauert eine durchschnittliche Wohnungsrenovation?",
    a: "Eine 3.5- bis 4.5-Zimmer-Wohnung benötigt je nach Umfang in der Regel 6 bis 12 Wochen. Verbindliche Termine erhalten Sie mit der Offerte.",
  },
  {
    q: "Mit welchen Kosten muss ich bei einer Renovation rechnen?",
    a: "Die Kosten hängen stark von Umfang und Materialien ab. Im Erstgespräch geben wir eine grobe Bandbreite an, die in der Detailofferte präzisiert wird – transparent und ohne versteckte Posten.",
  },
  {
    q: "Arbeiten Sie auch für Liegenschaftsverwaltungen und Investoren?",
    a: "Ja. Wir betreuen regelmässig MFH-Sanierungen, Mieterwechsel-Renovationen sowie Gewerbeumbauten und liefern entsprechende Dokumentation.",
  },
  {
    q: "In welchen Regionen sind Sie aktiv?",
    a: "WASDRA ist primär in der Deutschschweiz tätig – Schwerpunkt ZH, SG, TG, ZG, AG. Andere Regionen auf Anfrage.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Häufige Fragen"
          align="center"
          title="Antworten, die Bauherren am häufigsten brauchen."
          description="Sie haben eine Frage, die hier nicht beantwortet wird? Schreiben Sie uns – wir antworten innert 24 Stunden."
        />

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold tracking-tight hover:no-underline data-[state=open]:text-accent">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
};
