import Link from "next/link";
import { getService, services, siteConfig, socialLinks, whatsappHref } from "@/config/site";
import { localPages } from "@/data/locations";
import { Logo } from "@/components/ui/Logo";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

const socialIcons = { Instagram: InstagramIcon, Facebook: FacebookIcon, LinkedIn: LinkedInIcon } as const;

const companyLinks = [
  { label: "About us", href: "/about/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export function Footer() {
  const socials = socialLinks();
  return (
    <footer className="bg-night text-mist">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-block rounded-lg">
            <Logo tone="dark" className="h-20 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed">
            Website development, app development and digital marketing from Guntur, Andhra Pradesh.
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              {socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} on ${s.label}`}
                      className="grid size-11 place-items-center rounded-xl bg-[#2d1b5a] text-cream transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-violet"
                    >
                      <Icon size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider text-cream uppercase">Services</h2>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-cream hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/" className="hover:text-cream hover:underline">
                All services
              </Link>
            </li>
          </ul>
          <h2 className="mt-8 font-sans text-sm font-semibold tracking-wider text-cream uppercase">Company</h2>
          <ul className="mt-4 space-y-3">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cream hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider text-cream uppercase">Areas we serve</h2>
          <ul className="mt-4 space-y-3">
            {localPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}/`} className="hover:text-cream hover:underline">
                  {getService(p.service)?.name} in {p.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider text-cream uppercase">Contact</h2>
          <address className="mt-4 space-y-4 not-italic">
            <p className="flex gap-3">
              <MapPinIcon size={20} className="mt-0.5 shrink-0 text-[#B7A4FF]" />
              <span>{siteConfig.address.full}</span>
            </p>
            <p>
              <a href={siteConfig.phone.href} className="flex gap-3 hover:text-cream hover:underline">
                <PhoneIcon size={20} className="shrink-0 text-[#B7A4FF]" />
                {siteConfig.phone.display}
              </a>
            </p>
            <p>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-cream hover:underline">
                <WhatsAppIcon size={20} className="shrink-0 text-[#B7A4FF]" />
                WhatsApp us
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="flex gap-3 break-all hover:text-cream hover:underline">
                <MailIcon size={20} className="shrink-0 text-[#B7A4FF]" />
                {siteConfig.email}
              </a>
            </p>
            <p className="flex gap-3">
              <ClockIcon size={20} className="shrink-0 text-[#B7A4FF]" />
              {siteConfig.hours.display}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-[#33215f]">
        <div className="container-site flex flex-col gap-3 pt-6 pb-28 text-sm md:flex-row md:items-center md:justify-between md:pb-6">
          <p>
            © {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy-policy/" className="hover:text-cream hover:underline">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="hover:text-cream hover:underline">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
