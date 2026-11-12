import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

export type RelatedLink = { href: string; label: string; note?: string };

/** A column of internal links, used to connect services, local pages and blog posts. */
export function RelatedLinks({ title, links }: { title: string; links: RelatedLink[] }) {
  if (links.length === 0) return null;
  return (
    <div>
      <h3 className="font-sans text-sm font-semibold tracking-wider text-plum uppercase">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group flex items-start gap-2 font-semibold text-ink hover:text-violet-700">
              <ArrowRightIcon size={18} className="mt-1 shrink-0 text-violet" />
              <span>
                <span className="underline-offset-4 group-hover:underline">{l.label}</span>
                {l.note && <span className="block text-sm font-normal text-plum">{l.note}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
