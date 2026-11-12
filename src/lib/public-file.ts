import fs from "node:fs";
import path from "node:path";

/** True if a file exists under /public (checked at build time). Lets the site fall back to text until a logo is added. */
export function publicFileExists(src: string | undefined): src is string {
  if (!src) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}
