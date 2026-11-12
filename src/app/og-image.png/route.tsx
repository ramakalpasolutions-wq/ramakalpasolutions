import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

// Site-wide Open Graph / Twitter image, generated with next/og at build time.
export function GET() {
  return ogImage({ eyebrow: "Websites · Apps · Digital Marketing", title: "We Build Digital Futures That Scale." });
}
