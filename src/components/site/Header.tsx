import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import logo from "@/assets/logo-wasdra.png";

const nav = [
  { label: "Leistungen", to: "/leistungen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Über uns", to: "/ueber-uns" },
  { label: "Regionen", to: "/#regionen" },
  { label: "FAQ", to: "/#faq" },
  { label: "Kontakt", to: contact.contactPath },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !onHome
          ? "bg-charcoal/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="WASDRA.CH Startseite">
          <img src={logo} alt="WASDRA.CH" className="h-9 w-auto sm:h-10" width={160} height={40} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90 hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            <span>{contact.phoneDisplay}</span>
          </a>
          <Button variant="accent" size="default" asChild>
            <Link to={contact.quotePath}>Offerte anfragen</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/10 fade-in">
          <nav className="container-wide flex flex-col gap-1 py-4" aria-label="Mobile Navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-primary-foreground/90 hover:bg-white/5 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 px-3 pb-2">
              <Button variant="accent" size="lg" asChild>
                <Link to={contact.quotePath} onClick={() => setOpen(false)}>
                  Offerte anfragen
                </Link>
              </Button>
              <Button variant="dark-outline" size="lg" asChild>
                <a href={contact.phoneHref}>
                  <Phone className="h-4 w-4" /> {contact.phoneDisplay}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
