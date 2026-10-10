"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Balloon } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-sand-50/95 shadow-[0_1px_0_0_var(--color-sand-200)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight transition-colors lg:text-2xl",
            scrolled || open ? "text-ink-900" : "text-white drop-shadow-sm"
          )}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-white shadow-md">
            <Balloon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          Kapadokya<span className="-ml-1.5 text-ember-500">Aktivite</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? active
                      ? "bg-clay-100 text-clay-800"
                      : "text-ink-700 hover:bg-sand-200"
                    : active
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              scrolled ? "text-ink-700 hover:text-clay-700" : "text-white/90 hover:text-white"
            )}
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link
            href="/rezervasyon"
            className="rounded-full bg-clay-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-clay-700 hover:shadow-lg"
          >
            Rezervasyon
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            scrolled || open
              ? "bg-sand-200 text-ink-900"
              : "bg-white/15 text-white backdrop-blur"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50/100 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium",
                  pathname === link.href
                    ? "bg-clay-100 text-clay-800"
                    : "text-ink-700 hover:bg-sand-200"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-sand-200 pt-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 px-4 text-base font-semibold text-ink-700"
              >
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
              <Link
                href="/rezervasyon"
                className="mx-1 rounded-full bg-clay-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Hemen Rezervasyon
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
