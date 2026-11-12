import type { CSSProperties } from "react";

/** Stagger index for `.reveal` and `.hero-in` children: each step adds ~80ms delay. */
export function stagger(i: number): CSSProperties {
  return { "--i": i } as CSSProperties;
}
