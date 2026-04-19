import { Link } from "react-router-dom";
import logo from "@/assets/logo-wasdra.png";

export const Footer = () => {
  return (
    <footer className="bg-charcoal-soft border-t border-white/5 py-14 text-primary-foreground/70">
      <div className="container-wide grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logo} alt="WASDRA.CH" className="h-9 w-auto" width={160} height={40} />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            Renovationen, Küchen nach Mass und Innenausbau für Wohnungen,
            Häuser und Gewerbeflächen in der Schweiz.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Leistungen
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/leistungen/renovationen" className="hover:text-accent">Renovationen</Link></li>
            <li><Link to="/leistungen/kuechen" className="hover:text-accent">Küchen nach Mass</Link></li>
            <li><Link to="/leistungen/innenausbau" className="hover:text-accent">Innenausbau</Link></li>
            <li><Link to="/leistungen/badumbau" className="hover:text-accent">Badumbau</Link></li>
            <li><Link to="/leistungen/gewerbeumbauten" className="hover:text-accent">Gewerbeumbauten</Link></li>
            <li><Link to="/referenzen" className="hover:text-accent">Referenzen</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Kontakt
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="tel:+41000000000" className="hover:text-accent">+41 00 000 00 00</a></li>
            <li><a href="mailto:info@wasdra.ch" className="hover:text-accent">info@wasdra.ch</a></li>
            <li>Schweiz · seit 2017</li>
          </ul>
        </div>
      </div>

      <div className="container-wide mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} WASDRA.CH – Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">Impressum</a>
          <a href="#" className="hover:text-accent">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};
