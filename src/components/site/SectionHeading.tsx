import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: Props) => (
  <div
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <div
        className={`flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="accent-rule" />
        {eyebrow}
      </div>
    )}
    <h2
      className={`mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-5 text-base leading-relaxed sm:text-lg ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
    )}
  </div>
);
