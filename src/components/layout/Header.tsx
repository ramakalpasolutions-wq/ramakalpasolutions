import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { PhoneIcon } from "@/components/ui/icons";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="header-scroll sticky top-0 z-40 border-b border-[#e8dfd2] bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4 md:h-[5.5rem]">
        <Link href="/" aria-label={`${siteConfig.name} home`} className="shrink-0 rounded-lg">
          <Logo className="h-14 w-auto md:h-16" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phone.href}
            className="hidden items-center gap-2 font-semibold text-ink hover:text-violet-700 xl:flex"
          >
            <PhoneIcon size={18} className="text-violet" />
            {siteConfig.phone.display}
          </a>
          <a
            href={siteConfig.phone.href}
            aria-label={`Call ${siteConfig.phone.display}`}
            className="grid size-11 place-items-center rounded-xl bg-lavender text-violet-700 lg:hidden"
          >
            <PhoneIcon size={20} />
          </a>
          <Link href="/contact/" className="btn btn-cta hidden !min-h-11 !px-4 sm:inline-flex xl:ml-3">
            Get free quote
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
