import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import {
  projectRegions,
  projects,
  type ProjectType,
  type Region,
} from "@/data/projects";
import { services } from "@/data/services";

const projectTypes: ProjectType[] = [
  "Wohnung",
  "Einfamilienhaus",
  "Mehrfamilienhaus",
  "Gewerbe",
];

const regions: Region[] = projectRegions;

interface FilterPillProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterPill = ({ active, onClick, children }: FilterPillProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
      active
        ? "border-accent bg-accent text-accent-foreground"
        : "border-border bg-card text-foreground/70 hover:border-accent/40 hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

const ReferenzenIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [serviceFilter, setServiceFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<ProjectType | null>(null);
  const [regionFilter, setRegionFilter] = useState<Region | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const regionParam = searchParams.get("region");

    if (!regionParam) {
      setRegionFilter(null);
      return;
    }

    const matchedRegion = regions.find((region) => region === regionParam) ?? null;
    setRegionFilter(matchedRegion);
  }, [searchParams]);

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams);

    if (regionFilter) {
      nextParams.set("region", regionFilter);
    } else {
      nextParams.delete("region");
    }

    if (searchParams.toString() !== nextParams.toString()) {
      setSearchParams(nextParams, { replace: true });
    }
  }, [regionFilter, searchParams, setSearchParams]);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      if (serviceFilter && !project.services.includes(serviceFilter)) return false;
      if (typeFilter && project.type !== typeFilter) return false;
      if (regionFilter && project.region !== regionFilter) return false;
      return true;
    });
  }, [serviceFilter, typeFilter, regionFilter]);

  const activeCount =
    (serviceFilter ? 1 : 0) + (typeFilter ? 1 : 0) + (regionFilter ? 1 : 0);
  const hasFilters = activeCount > 0;

  return (
    <PageShell>
      <Seo
        title="Referenzen – Renovation & Innenausbau Projekte | WASDRA.CH"
        description="Realisierte Projekte von WASDRA.CH: Renovationen, Küchen, Bäder und Gewerbeumbauten in der ganzen Schweiz. Filter nach Leistung, Objekttyp und Region."
        canonical="https://wasdra.ch/referenzen"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Referenzen",
          url: "https://wasdra.ch/referenzen",
        }}
      />
      <PageHero
        eyebrow="Referenzen"
        title="Realisierte Projekte aus der Schweiz."
        description="Eine Auswahl unserer Umbauten, Sanierungen und Innenausbauten. Filtern Sie nach Leistung, Objekttyp oder Region."
        image={projects[0]?.cover ?? ""}
        crumbs={[{ label: "Start", to: "/" }, { label: "Referenzen" }]}
      />

      <section className="bg-surface-soft py-8 sm:py-12 lg:py-16">
        <div className="container-wide">
          <div className="rounded-2xl bg-card shadow-soft">
            <button
              type="button"
              onClick={() => setFiltersOpen((state) => !state)}
              aria-expanded={filtersOpen}
              aria-controls="filter-panel"
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left lg:hidden"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <SlidersHorizontal className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    Filter
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {hasFilters
                      ? `${activeCount} aktiv · ${filtered.length} Projekt${filtered.length === 1 ? "" : "e"}`
                      : `${filtered.length} Projekte`}
                  </span>
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  filtersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="filter-panel"
              className={`grid gap-6 px-5 pb-5 sm:px-6 sm:pb-6 lg:grid lg:gap-6 lg:p-8 ${
                filtersOpen ? "block" : "hidden lg:grid"
              }`}
            >
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Leistung
                </div>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <FilterPill
                      key={service.slug}
                      active={serviceFilter === service.slug}
                      onClick={() =>
                        setServiceFilter(
                          serviceFilter === service.slug ? null : service.slug
                        )
                      }
                    >
                      {service.shortTitle}
                    </FilterPill>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Objekttyp
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <FilterPill
                        key={type}
                        active={typeFilter === type}
                        onClick={() =>
                          setTypeFilter(typeFilter === type ? null : type)
                        }
                      >
                        {type}
                      </FilterPill>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Region
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                      <FilterPill
                        key={region}
                        active={regionFilter === region}
                        onClick={() =>
                          setRegionFilter(regionFilter === region ? null : region)
                        }
                      >
                        {region}
                      </FilterPill>
                    ))}
                  </div>
                </div>
              </div>

              {hasFilters && (
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">
                    {filtered.length} Projekt{filtered.length === 1 ? "" : "e"}{" "}
                    gefunden
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setServiceFilter(null);
                      setTypeFilter(null);
                      setRegionFilter(null);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent"
                  >
                    <X className="h-3.5 w-3.5" /> Filter zurücksetzen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft pb-24 sm:pb-32">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-card p-12 text-center">
              <p className="text-muted-foreground">
                Keine Projekte für die gewählten Filter.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  to={`/referenzen/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-charcoal/80 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                      <MapPin className="h-3 w-3 text-accent" />
                      {project.location}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.type} · {project.year}
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.shortDesc}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-medium text-foreground">
                        {project.budget}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                        Ansehen <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default ReferenzenIndex;
