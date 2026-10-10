import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Balloon,
  BadgeCheck,
  CalendarCheck,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
  X,
  Ban,
} from "lucide-react";
import { getTourBySlug, tours } from "@/data/tours";
import { site } from "@/data/site";
import TourCard from "@/components/TourCard";
import FaqAccordion from "@/components/FaqAccordion";
import Stars from "@/components/Stars";
import JsonLd from "@/components/JsonLd";
import { waLink, waTourMessage } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tur bulunamadı" };

  return {
    title: `${tour.title} – ${formatPrice(tour.price)} ₺`,
    description: tour.summary,
    alternates: { canonical: `/aktiviteler/${tour.slug}` },
    openGraph: {
      title: `${tour.title} | Kapadokya Aktivite`,
      description: tour.summary,
      images: [tour.heroImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description: tour.summary,
      images: [tour.heroImage],
    },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);
  const wa = waLink(waTourMessage(tour.title));

  const touristTrip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    url: `${site.domain}/aktiviteler/${tour.slug}`,
    image: `${site.domain}${tour.heroImage}`,
    touristType: "Yerli turistler",
    provider: { "@id": `${site.domain}/#agency` },
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      url: `${site.domain}/rezervasyon`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating.toString().replace(".", ","),
      reviewCount: tour.reviewCount.toString(),
      bestRating: "5",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: site.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aktiviteler",
        item: `${site.domain}/aktiviteler`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tour.title,
        item: `${site.domain}/aktiviteler/${tour.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tour.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd data={touristTrip} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Üst hero: görsel + rezervasyon kartı */}
      <section className="relative bg-night-950">
        <div className="relative h-[52svh] min-h-[380px] w-full">
          <Image
            src={tour.heroImage}
            alt={`${tour.title} – Kapadokya`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 via-night-950/25 to-night-950/90" />

          <div className="container-page absolute inset-x-0 bottom-0 z-10 pb-8">
            <nav aria-label="Sayfa yolu" className="mb-4 text-sm text-sand-200/80">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <Link href="/aktiviteler" className="hover:text-white">Aktiviteler</Link>
              <span className="mx-2">/</span>
              <span className="text-ember-300">{tour.shortTitle}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-ember-200 ring-1 ring-white/20 backdrop-blur-sm">
                {tour.categoryLabel}
              </span>
              {tour.badge && (
                <span className="rounded-full bg-ember-500 px-3.5 py-1.5 text-xs font-semibold text-white">
                  {tour.badge}
                </span>
              )}
            </div>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {tour.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-sand-100/90">
              <span className="flex items-center gap-1.5">
                <Stars rating={tour.rating} size={4} />
                <strong className="text-white">
                  {tour.rating.toString().replace(".", ",")}
                </strong>{" "}
                ({tour.reviewCount} yorum)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-ember-300" /> {tour.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-ember-300" /> {tour.groupSize}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gövde */}
      <section className="py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* Sol kolon */}
          <div>
            {/* Galeri */}
            <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
              {tour.gallery.map((img, i) => (
                <div
                  key={img}
                  className="relative aspect-[4/3] w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[45%] lg:w-[340px]"
                >
                  <Image
                    src={img}
                    alt={`${tour.title} fotoğraf ${i + 1} – Kapadokya aktivite`}
                    fill
                    sizes="(max-width: 640px) 85vw, 340px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Öne çıkanlar */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 rounded-2xl bg-clay-50 p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" />
                  <span className="text-sm font-medium text-ink-700">{h}</span>
                </div>
              ))}
            </div>

            {/* Açıklama */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Tur Hakkında
              </h2>
              <div className="divider-ember mt-3" />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-700">
                {tour.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Program */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Tur Programı
              </h2>
              <div className="divider-ember mt-3" />
              <ol className="mt-6 space-y-0 border-l-2 border-sand-300 pl-6">
                {tour.itinerary.map((stop, i) => (
                  <li key={i} className="relative pb-8 last:pb-0">
                    <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-clay-600 ring-4 ring-sand-50">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <div className="text-xs font-bold uppercase tracking-wider text-clay-500">
                      {stop.time}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
                      {stop.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">
                      {stop.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Dahil / Hariç */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 ring-1 ring-sand-200">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900">
                  <BadgeCheck className="h-5 w-5 text-emerald-600" />
                  Fiata Dahil
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 ring-1 ring-sand-200">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900">
                  <Ban className="h-5 w-5 text-clay-500" />
                  Dahil Değil
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {tour.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-500">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SSS */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                Sık Sorulan Sorular
              </h2>
              <div className="divider-ember mt-3" />
              <div className="mt-6">
                <FaqAccordion items={tour.faq} />
              </div>
            </div>
          </div>

          {/* Sağ kolon: rezervasyon kartı (sticky) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-sand-200">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-sm text-ink-500">{tour.priceUnit}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-clay-700">
                      {formatPrice(tour.price)} ₺
                    </span>
                    {tour.oldPrice && (
                      <span className="text-lg text-ink-300 line-through">
                        {formatPrice(tour.oldPrice)} ₺
                      </span>
                    )}
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  Ücretsiz iptal*
                </span>
              </div>

              <div className="mt-5 space-y-2.5 border-y border-sand-200 py-4 text-sm text-ink-700">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-clay-500" /> {tour.duration}
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="h-4 w-4 text-clay-500" /> {tour.groupSize}
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-clay-500" />
                  Otel transferi{" "}
                  {tour.pickupIncluded ? "dahil" : "hariç"}
                </div>
                <div className="flex items-center gap-2.5">
                  <Balloon className="h-4 w-4 text-clay-500" />
                  {tour.languages.join(" · ")}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp&apos;tan Rezervasyon
                </a>
                <Link
                  href="/rezervasyon"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-clay-600 px-6 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-clay-700"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Formla Rezervasyon
                </Link>
                <a
                  href={site.phoneHref}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 ring-1 ring-sand-300 transition-all hover:bg-sand-100"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              <div className="mt-5 space-y-2 text-xs text-ink-500">
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  48 saat öncesine kadar koşulsuz iptal
                </p>
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Hava iptalinde anında iade
                </p>
                <p className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Şimdi ayır, sonra öde
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Benzer turlar */}
      <section className="bg-sand-100 py-16 lg:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
              Bunlar da hoşuna gidebilir
            </h2>
            <Link
              href="/aktiviteler"
              className="hidden items-center gap-1.5 text-sm font-semibold text-clay-600 hover:gap-2.5 sm:flex"
            >
              <ArrowLeft className="h-4 w-4" />
              Tüm aktiviteler
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Alt CTA */}
      <section className="bg-night-950 py-14">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              {tour.shortTitle} için yerini bugün ayırt
            </h2>
            <p className="mt-2 text-sand-300">
              Sezon takvimleri hızla doluyor — WhatsApp&apos;tan yaz, 10 dakikada dönüş.
            </p>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Hemen Sor
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
