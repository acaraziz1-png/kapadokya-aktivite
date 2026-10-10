"use client";

import { useMemo, useState } from "react";
import type { Tour, TourCategory } from "@/data/tours";
import TourCard from "@/components/TourCard";

type SortKey = "onerilen" | "fiyat-artan" | "fiyat-azalan" | "sure" | "puan";

const sortOptions: { id: SortKey; label: string }[] = [
  { id: "onerilen", label: "Önerilen" },
  { id: "fiyat-artan", label: "Fiyat (artan)" },
  { id: "fiyat-azalan", label: "Fiyat (azalan)" },
  { id: "puan", label: "Puana göre" },
];

const difficultyOrder: Record<string, number> = {
  "Çok Kolay": 0,
  Kolay: 1,
  Orta: 2,
  "Orta Zor": 3,
};

export default function ActivitiesBrowser({
  tours,
  categories,
}: {
  tours: Tour[];
  categories: { id: TourCategory; label: string; count: number }[];
}) {
  const [activeCategory, setActiveCategory] = useState<TourCategory | "tumu">(
    "tumu"
  );
  const [sortBy, setSortBy] = useState<SortKey>("onerilen");

  const filtered = useMemo(() => {
    const list =
      activeCategory === "tumu"
        ? [...tours]
        : tours.filter((t) => t.category === activeCategory);

    switch (sortBy) {
      case "fiyat-artan":
        list.sort((a, b) => a.price - b.price);
        break;
      case "fiyat-azalan":
        list.sort((a, b) => b.price - a.price);
        break;
      case "puan":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "sure":
        list.sort(
          (a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        );
        break;
      default:
        break;
    }
    return list;
  }, [tours, activeCategory, sortBy]);

  return (
    <section className="py-12 lg:py-16">
      <div className="container-page">
        {/* Filtre çubuğu */}
        <div className="sticky top-16 z-30 -mx-4 mb-10 bg-sand-50/95 px-4 py-3 backdrop-blur-md lg:top-20">
          <div className="flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
            <div className="flex w-full flex-wrap gap-2 lg:w-auto">
              <button
                type="button"
                onClick={() => setActiveCategory("tumu")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeCategory === "tumu"
                    ? "bg-clay-600 text-white shadow-md"
                    : "bg-white text-ink-700 ring-1 ring-sand-300 hover:bg-sand-100"
                }`}
              >
                Tümü ({tours.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    activeCategory === c.id
                      ? "bg-clay-600 text-white shadow-md"
                      : "bg-white text-ink-700 ring-1 ring-sand-300 hover:bg-sand-100"
                  }`}
                >
                  {c.label} ({c.count})
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2 text-sm text-ink-500">
              Sırala:
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="rounded-full border-0 bg-white px-4 py-2 text-sm font-semibold text-ink-700 ring-1 ring-sand-300 focus:outline-none focus:ring-2 focus:ring-clay-500"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* Tur listesi */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-ink-500">
            Bu kategoride henüz tur yok — yakında eklenecek.
          </p>
        )}
      </div>
    </section>
  );
}
