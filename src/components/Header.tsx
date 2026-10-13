"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Balloon, Menu, Phone, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm transition-colors group-hover:bg-primary-container">
            <Balloon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-on-surface transition-colors group-hover:text-primary">
              Kapadokya
            </span>
            <span className="mt-0.5 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-tertiary">
              Aktivite
            </span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active
                    ? "font-semibold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Sağ taraf */}
        <div className="flex shrink-0 items-center gap-4">
          <div className="hidden flex-col items-end text-right md:flex">
            <span className="text-[0.7rem] font-semibold text-outline">
              Hemen Danışın
            </span>
            <a
              href="tel:+905551112233"
              className="text-sm font-bold text-on-surface transition-colors hover:text-primary"
            >
              +90 555 111 22 33
            </a>
          </div>
          <Link
            href="/rezervasyon"
            className="hidden items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary-container sm:inline-flex"
          >
            Rezervasyon
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="border-t border-outline-variant/40 bg-surface xl:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-primary-fixed text-on-primary-fixed-variant"
                      : "text-on-surface hover:bg-surface-container"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex flex-col gap-2 border-t border-outline-variant/40 pt-4">
              <a
                href="tel:+905551112233"
                className="flex items-center gap-2 px-4 text-base font-semibold text-on-surface"
              >
                <Phone className="h-4 w-4 text-primary" /> +90 555 111 22 33
              </a>
              <Link
                href="/rezervasyon"
                onClick={() => setOpen(false)}
                className="mx-1 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-on-primary"
              >
                Rezervasyon
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
