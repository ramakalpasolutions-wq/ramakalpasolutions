import Image from "next/image";
import logoDark from "../../../public/brand/ramakalpa-logo-dark.png";
import logoLight from "../../../public/brand/ramakalpa-logo-light.png";

/**
 * Ramakalpa Solutions logo. "light" tone = dark logo for cream backgrounds,
 * "dark" tone = light logo for the night background.
 * Source files: /public/brand/ (generated from the original logo artwork).
 */
export function Logo({ tone = "light", className = "h-12 w-auto md:h-14" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Image
      src={tone === "dark" ? logoLight : logoDark}
      alt="Ramakalpa Solutions"
      className={className}
      sizes="(min-width: 768px) 130px, 115px"
      loading={tone === "light" ? "eager" : "lazy"}
    />
  );
}
