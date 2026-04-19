import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  crumbs?: Crumb[];
}

export const PageHero = ({ eyebrow, title, description, image, crumbs }: Props) => {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-28 pb-20 sm:pt-36 sm:pb-28">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,hsl(var(--accent)/0.18),transparent_70%)]"
        aria-hidden
      />
      <div className="container-wide relative">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Brotkrumen"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-primary-foreground/60"
          >
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-primary-foreground/40" />
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="accent-rule" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
