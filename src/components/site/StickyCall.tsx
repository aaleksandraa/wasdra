import { Phone } from "lucide-react";
import { contact } from "@/data/contact";

export const StickyCall = () => (
  <a
    href={contact.phoneHref}
    aria-label="Jetzt anrufen"
    className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow-orange transition-transform hover:scale-105 lg:hidden"
  >
    <Phone className="h-6 w-6" />
  </a>
);
