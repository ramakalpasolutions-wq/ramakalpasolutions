"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/site";

/** Desktop nav with an animated underline and the current page marked. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-7">
      {mainNav.map((item) => {
        const current = pathname === item.href || pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={`nav-link font-medium hover:text-violet-700 ${current ? "text-violet-700" : "text-ink"}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
