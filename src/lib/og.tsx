import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

// Light version of the logo, embedded so the image works at build time.
const logoSrc = `data:image/png;base64,${fs
  .readFileSync(path.join(process.cwd(), "public/brand/ramakalpa-logo-light.png"))
  .toString("base64")}`;

export const ogSize = { width: 1200, height: 630 };

/** Brand-coloured Open Graph card. Flat solid colours, no gradients. */
export function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1E0F40",
          padding: "64px 72px",
          color: "#FAF7F2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain <img> */}
          <img src={logoSrc} width={238} height={120} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#F0EAFF",
              color: "#5B3FD9",
              borderRadius: 999,
              padding: "10px 24px",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
          <div style={{ fontSize: title.length > 60 ? 58 : 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#D9D1F2" }}>
          <div>Guntur · Andhra Pradesh · ramakalpasolutions.in</div>
          <div style={{ display: "flex", background: "#F97316", color: "#1A1523", borderRadius: 14, padding: "12px 26px", fontWeight: 700 }}>
            Get a free quote
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
