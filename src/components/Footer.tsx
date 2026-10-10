import Link from "next/link";
import { Balloon, MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, site, currentYear } from "@/data/site";
import { tours } from "@/data/tours";
import { posts } from "@/data/blog";

export default function Footer() {
  const year = currentYear;
  return (
    <footer className="bg-night-950 text-sand-200">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 font-display text-xl font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-white">
              <Balloon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            Kapadokya<span className="-ml-1.5 text-ember-400">Aktivite</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand-300">
            {site.founded}&apos;den beri Kapadokya&apos;da yerli misafirlerimize
            sürpriz maliyetsiz, güvenceli aktivite turları düzenliyoruz. Yerel
            rehber, yerel fiyat, yerel samimiyet.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">
            Popüler Turlar
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {tours.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/aktiviteler/${t.slug}`}
                  className="text-sand-300 transition-colors hover:text-ember-300"
                >
                  {t.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">
            Keşfet
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks
              .filter((l) => l.href !== "/")
              .map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sand-300 transition-colors hover:text-ember-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/kapadokya-rehberi/${p.slug}`}
                  className="text-sand-300 transition-colors hover:text-ember-300"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold text-white">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
              <span>
                {site.address.street}, {site.address.district}/
                {site.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-ember-400" />
              <a href={site.phoneHref} className="hover:text-ember-300">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-ember-400" />
              <a href={`mailto:${site.email}`} className="hover:text-ember-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
              <span>
                {site.hours[0].days}: {site.hours[0].time}
                <br />
                {site.hours[1].days}: {site.hours[1].time}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-sand-300 sm:flex-row">
          <p>
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p>
            TÜRSAB üyesi acente · Görseller Wikimedia Commons CC lisanslarıyla{" "}
            <Link href="/gorsel-kunyeleri" className="underline hover:text-ember-300">
              künyeleri
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
