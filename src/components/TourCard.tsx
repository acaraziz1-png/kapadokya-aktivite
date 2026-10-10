import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import type { Tour } from "@/data/tours";
import { formatPrice } from "@/lib/utils";
import Stars from "@/components/Stars";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/aktiviteler/${tour.slug}`}
      className="card-zoom group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-clay-200/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={`${tour.title} – Kapadokya aktivite turu`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {tour.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-night-900/85 px-3 py-1.5 text-xs font-semibold text-ember-200 backdrop-blur-sm">
            {tour.badge}
          </span>
        )}
        <span className="absolute bottom-4 right-4 rounded-2xl bg-white/95 px-3.5 py-2 shadow-md backdrop-blur">
          <span className="block text-[0.65rem] font-medium uppercase tracking-wide text-ink-500">
            {tour.priceUnit}
          </span>
          <span className="block font-display text-lg font-bold leading-none text-clay-700">
            {formatPrice(tour.price)} ₺
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-clay-500">
          {tour.categoryLabel}
        </span>
        <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-ink-900 transition-colors group-hover:text-clay-700">
          {tour.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-500">
          {tour.summary}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-ink-500">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-clay-500" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-clay-500" />
            {tour.groupSize}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-sand-200 pt-4">
          <div className="flex items-center gap-1.5">
            <Stars rating={tour.rating} size={3.5} />
            <span className="text-xs font-semibold text-ink-700">
              {tour.rating.toString().replace(".", ",")}
            </span>
            <span className="text-xs text-ink-300">({tour.reviewCount})</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-clay-600 transition-all group-hover:gap-2">
            İncele
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
