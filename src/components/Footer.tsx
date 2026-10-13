import Link from "next/link";
import {
  Balloon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Verified,
} from "lucide-react";
import { navLinks, site } from "@/data/site";
import { tours } from "@/data/tours";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-16 text-on-surface">
      <div className="container-page">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Marka */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary">
                <Balloon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-xl font-semibold">
                Kapadokya Aktivite
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-on-surface-variant">
              Kapadokya&apos;nın bin yıllık tüf vadilerinde, yapay
              koşturmacadan uzak, yerel rehberler ve zanaatkârlarla
              kurgulanmış dingin, saygılı ve sahici yolculuklar.
            </p>
            <div className="flex flex-col gap-1 pt-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-tertiary">
                <Verified className="h-4 w-4" /> TÜRSAB üyesi kayıtlı turizm
                işletmesi
              </span>
              <span className="text-xs text-outline">
                Tüm turlar zorunlu seyahat sigortası kapsamındadır.
              </span>
            </div>
          </div>

          {/* Popüler deneyimler */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-on-surface">
              Popüler Deneyimler
            </span>
            <nav className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
              {tours.map((t) => (
                <Link
                  key={t.slug}
                  href={`/aktiviteler/${t.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {t.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Sayfalar */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-on-surface">
              Keşfet
            </span>
            <nav className="flex flex-col gap-2.5 text-sm text-on-surface-variant">
              {navLinks
                .filter((l) => l.href !== "/")
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
            </nav>
          </div>

          {/* İletişim */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-wider text-on-surface">
              Doğrudan İletişim
            </span>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              <Phone className="h-5 w-5 text-primary" /> {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5 text-primary" /> {site.email}
            </a>
            <span className="flex items-start gap-2 text-sm text-on-surface-variant">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
              {site.address.street}, {site.address.district}/
              {site.address.city}
            </span>
            <Link
              href="/iletisim"
              className="flex items-center gap-2 text-sm font-semibold text-tertiary transition-colors hover:text-primary"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Hızlı Destek
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/40 pb-10 pt-8 text-sm text-outline sm:flex-row">
          <p>
            © {site.founded}–2026 {site.legalName}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/gorsel-kunyeleri"
              className="transition-colors hover:text-on-surface"
            >
              Görsel Künyeleri
            </Link>
            <Link
              href="/iletisim"
              className="transition-colors hover:text-on-surface"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
