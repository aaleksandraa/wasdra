import { Link } from "react-router-dom";
import logo from "@/assets/logo-wasdra.png";
import { contact } from "@/data/contact";

export const Footer = () => {
  return (
    <footer className="bg-charcoal-soft border-t border-white/5 py-14 text-primary-foreground/70">
      <div className="container-wide grid gap-10 text-center md:grid-cols-4 md:text-left">
        <div className="md:col-span-2">
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="WASDRA.CH"
              className="h-9 w-auto"
              width={160}
              height={40}
            />
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed md:mx-0">
            Renovationen, Küchen nach Mass und Innenausbau für Wohnungen,
            Häuser und Gewerbeflächen in der Schweiz.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Leistungen
          </h4>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:block md:space-y-2">
            <li>
              <Link to="/leistungen/renovationen" className="hover:text-accent">
                Renovationen
              </Link>
            </li>
            <li>
              <Link to="/leistungen/kuechen" className="hover:text-accent">
                Küchen nach Mass
              </Link>
            </li>
            <li>
              <Link to="/leistungen/innenausbau" className="hover:text-accent">
                Innenausbau
              </Link>
            </li>
            <li>
              <Link to="/leistungen/badumbau" className="hover:text-accent">
                Badumbau
              </Link>
            </li>
            <li>
              <Link to="/leistungen/gewerbeumbauten" className="hover:text-accent">
                Gewerbeumbauten
              </Link>
            </li>
            <li>
              <Link to="/referenzen" className="hover:text-accent">
                Referenzen
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Kontakt
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="font-medium text-primary-foreground">{contact.companyName}</li>
            <li>{contact.street}</li>
            <li>
              {contact.postalCode} {contact.city}
            </li>
            <li>
              <a href={contact.phoneHref} className="hover:text-accent">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="break-all hover:text-accent">
                {contact.email}
              </a>
            </li>
            <li>
              <Link to={contact.contactPath} className="hover:text-accent">
                Zur Kontaktseite
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center text-xs text-primary-foreground/50 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} WASDRA.CH - Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="#" className="hover:text-accent">
            Impressum
          </a>
          <a href="#" className="hover:text-accent">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
};
