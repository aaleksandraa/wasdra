import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const regions = [
  "Zürich (ZH)",
  "St. Gallen (SG)",
  "Thurgau (TG)",
  "Aargau (AG)",
  "Schwyz (SZ)",
  "Zug (ZG)",
  "Luzern (LU)",
  "Appenzell (AR/AI)",
];

export const Regions = () => {
  return (
    <section id="regionen" className="bg-surface-soft py-24 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Regionen"
          title="Wir sind in der ganzen Deutschschweiz für Sie da."
          description="Unsere Bauleitung koordiniert Projekte zentral – ausgeführt wird mit lokal eingespielten Teams."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {regions.map((r) => (
            <li
              key={r}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 transition-all hover:border-accent hover:shadow-soft"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
