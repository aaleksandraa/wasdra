import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Tag,
  X,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { getProjectBySlug, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!project) return <Navigate to="/referenzen" replace />;

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const usedServices = project.services
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % project.gallery.length));
  const prev = () =>
    setLightbox((i) =>
      i === null ? null : (i - 1 + project.gallery.length) % project.gallery.length
    );

  return (
    <PageShell>
      <Seo
        title={`${project.title} – ${project.location} | WASDRA.CH`}
        description={project.shortDesc}
        canonical={`https://wasdra.ch/referenzen/${project.slug}`}
        image={project.cover}
        type="article"
      />
      <PageHero
        eyebrow={`${project.type} · ${project.location}`}
        title={project.title}
        description={project.shortDesc}
        image={project.cover}
        crumbs={[
          { label: "Start", to: "/" },
          { label: "Referenzen", to: "/referenzen" },
          { label: project.title },
        ]}
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="prose prose-lg max-w-none">
              {project.description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/80">
                  {para}
                </p>
              ))}
            </div>

            <h3 className="mt-10 font-display text-2xl font-semibold">
              Highlights des Projekts
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start rounded-2xl bg-charcoal p-8 text-primary-foreground">
            <h3 className="font-display text-xl font-semibold">Eckdaten</h3>
            <dl className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-primary-foreground/50">
                    Standort
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{project.location}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-primary-foreground/50">
                    Objekttyp
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">{project.type}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-primary-foreground/50">
                    Bauzeit
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium">
                    {project.duration} · {project.year}
                  </dd>
                </div>
              </div>
            </dl>

            {usedServices.length > 0 && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="text-xs uppercase tracking-wider text-primary-foreground/50">
                  Eingesetzte Leistungen
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {usedServices.map(
                    (s) =>
                      s && (
                        <Link
                          key={s.slug}
                          to={`/leistungen/${s.slug}`}
                          className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                        >
                          {s.shortTitle}
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3">
              <Button variant="accent" size="lg" asChild>
                <Link to={contact.quotePath}>Ähnliches Projekt anfragen</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface-soft py-16 sm:py-24">
        <div className="container-wide">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Bildergalerie
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={img}
                  alt={`${project.title} – Bild ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-background py-16 sm:py-24">
          <div className="container-wide">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Weitere Referenzen
              </h2>
              <Button variant="outline" size="lg" asChild>
                <Link to="/referenzen">
                  <ArrowLeft className="h-4 w-4" /> Zurück zur Übersicht
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/referenzen/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {p.location}
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {p.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      Ansehen <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Schliessen"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-primary-foreground hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Vorheriges Bild"
            className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-primary-foreground hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={project.gallery[lightbox]}
            alt={`${project.title} – Bild ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
          />
          <button
            type="button"
            onClick={next}
            aria-label="Nächstes Bild"
            className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-primary-foreground hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-primary-foreground">
            {lightbox + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </PageShell>
  );
};

export default ProjectDetail;
