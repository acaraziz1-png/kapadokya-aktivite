"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CalendarDays, Compass, Search, Users } from "lucide-react";
import { tours } from "@/data/tours";

/** Stitch anasayfadaki "Akıllı Hızlı Arama" çubuğu — seçilen tura götürür. */
export default function QuickSearchBar() {
  const router = useRouter();
  const [slug, setSlug] = useState("");

  return (
    <form
      className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 lg:grid-cols-4"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(slug ? `/aktiviteler/${slug}` : "/aktiviteler");
      }}
    >
      {/* Deneyim türü */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="qs-tur"
          className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant"
        >
          <Compass className="h-4 w-4 text-primary" /> Deneyim Türü
        </label>
        <div className="relative">
          <select
            id="qs-tur"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="h-12 w-full cursor-pointer appearance-none rounded-lg bg-surface-container-low pl-3.5 pr-8 text-sm text-on-surface focus:bg-surface-container focus:outline-none"
          >
            <option value="">Tüm deneyimler</option>
            {tours.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.shortTitle}
              </option>
            ))}
          </select>
          <Search className="pointer-events-none absolute right-3 top-3.5 h-5 w-5 text-outline" />
        </div>
      </div>

      {/* Tarih */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="qs-tarih"
          className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant"
        >
          <CalendarDays className="h-4 w-4 text-primary" /> Tarih Aralığı
        </label>
        <input
          id="qs-tarih"
          type="date"
          className="h-12 w-full rounded-lg bg-surface-container-low px-3.5 text-sm text-on-surface focus:bg-surface-container focus:outline-none"
        />
      </div>

      {/* Katılımcı */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="qs-kisi"
          className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant"
        >
          <Users className="h-4 w-4 text-primary" /> Katılımcı Sayısı
        </label>
        <select
          id="qs-kisi"
          className="h-12 w-full cursor-pointer rounded-lg bg-surface-container-low px-3.5 text-sm text-on-surface focus:bg-surface-container focus:outline-none"
        >
          <option>2 Yetişkin</option>
          <option>1 Yetişkin</option>
          <option>2 Yetişkin, 1 Çocuk</option>
          <option>Grup (4+ Kişi)</option>
        </select>
      </div>

      {/* CTA */}
      <button
        type="submit"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-on-primary shadow-md transition-all hover:shadow-lg hover:bg-primary-container"
      >
        <Search className="h-5 w-5" />
        Müsaitlik Sorgula
      </button>
    </form>
  );
}
