import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, User } from "lucide-react";
import { posts } from "@/data/blog";
import { site } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { formatDateTr } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kapadokya Gezi Rehberi | Fiyatlar, Rotalar, İpuçları",
  description:
    "Kapadokya seyahati için yerel rehber: balon turu fiyatları 2026, ATV turunda ne giyilir, 3 günlük rota önerileri ve Türk gecesi rehberi.",
  alternates: { canonical: "/kapadokya-rehberi" },
  openGraph: {
    title: "Kapadokya Gezi Rehberi",
    description:
      "Balon fiyatları, rota önerileri ve yerel ipuçları — yerli gözüyle Kapadokya rehberi.",
    images: ["/images/goreme-muze.jpg"],
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Kapadokya Rehberi",
    url: `${site.domain}/kapadokya-rehberi`,
    publisher: { "@id": `${site.domain}/#agency` },
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      <section className="relative overflow-hidden bg-night-950 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/images/red-valley.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 to-night-950/85" />
        <div className="container-page relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-300">
            Kapadokya Rehberi
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Yerli gözüyle Kapadokya gezi rehberi
          </h1>
          <div className="divider-ember mt-5" />
          <p className="mt-5 max-w-2xl text-lg text-sand-100/85">
            Fiyat güncelleri, rota planları, giyinme ipuçları — turları
            düzenleyen ekibin kaleminden.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          {/* Öne çıkan yazı */}
          <Link
            href={`/kapadokya-rehberi/${featured.slug}`}
            className="card-zoom group grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-200 transition-all hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={featured.cover}
                alt={featured.coverAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-ember-500 px-3 py-1.5 text-xs font-bold text-white">
                Öne Çıkan
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 lg:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-clay-500">
                {featured.tag}
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-snug text-ink-900 group-hover:text-clay-700 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-300">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> {featured.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {formatDateTr(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" /> {featured.readingMinutes} dk okuma
                </span>
              </div>
            </div>
          </Link>

          {/* Diğer yazılar */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/kapadokya-rehberi/${post.slug}`}
                className="card-zoom group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-200 transition-all hover:-translate-y-1.5 hover:shadow-xl sm:flex-row"
              >
                <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5 shrink-0">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-clay-500">
                    {post.tag}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink-900 group-hover:text-clay-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-500">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-3 text-xs text-ink-300">
                    {formatDateTr(post.date)} · {post.readingMinutes} dk okuma
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Alt CTA */}
      <section className="bg-night-950 py-16">
        <div className="container-page text-center">
          <SectionHeading
            dark
            title="Rehberi okudun, sırada deneyim var"
            description="Turlarımız hakkında merak ettiklerini sor; yerel ekibin önerileriyle planını netleştir."
          />
          <Link
            href="/aktiviteler"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember-500 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-ember-600"
          >
            Aktiviteleri Keşfet
          </Link>
        </div>
      </section>
    </>
  );
}
