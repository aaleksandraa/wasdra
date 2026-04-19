import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { projectRegions } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";

export const Regions = () => {
  return (
    <section id="regionen" className="bg-surface-soft py-24 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Projekte nach Region"
          title="Referenzen in Ihrer Region ansehen."
          description="Wählen Sie eine Region und öffnen Sie direkt die passenden Projekte und Referenzen."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {projectRegions.map((region) => (
            <li key={region}>
              <Link
                to={`/referenzen?region=${encodeURIComponent(region)}`}
                className="group flex h-full items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 transition-all hover:border-accent hover:shadow-soft"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{region}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
