import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, User, ArrowRight, MessageCircle } from "lucide-react";
import { getPostBySlug, posts, getTourForPost } from "@/data/blog";
import { site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { formatDateTr } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/kapadokya-rehberi/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [post.cover],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const tour = getTourForPost(post);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${site.domain}${post.cover}`,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${site.domain}/#agency` },
    mainEntityOfPage: `${site.domain}/kapadokya-rehberi/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kapadokya Rehberi",
        item: `${site.domain}/kapadokya-rehberi`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${site.domain}/kapadokya-rehberi/${post.slug}`,
      },
    ],
  };

  const faqSchema = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Başlık bölümü */}
      <section className="relative overflow-hidden bg-night-950 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 to-night-950/85" />
        <div className="container-page relative z-10 max-w-3xl">
          <nav aria-label="Sayfa yolu" className="mb-4 text-sm text-sand-200/80">
            <Link href="/" className="hover:text-white">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <Link href="/kapadokya-rehberi" className="hover:text-white">
              Kapadokya Rehberi
            </Link>
          </nav>
          <span className="rounded-full bg-ember-500/90 px-3.5 py-1.5 text-xs font-bold text-white">
            {post.tag}
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-sand-200/90">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDateTr(post.date)}
              {post.updatedAt && ` (güncellendi: ${formatDateTr(post.updatedAt)})`}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" /> {post.readingMinutes} dk okuma
            </span>
          </div>
        </div>
      </section>

      {/* Makale gövdesi */}
      <article className="py-12 lg:py-16">
        <div className="container-page max-w-3xl">
          <p className="text-lg font-medium leading-relaxed text-ink-700 sm:text-xl">
            {post.description}
          </p>

          <div className="mt-8 space-y-9">
            {post.content.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="font-display text-2xl font-semibold text-ink-900">
                    {section.heading}
                  </h2>
                )}
                <div
                  className={`space-y-4 text-base leading-relaxed text-ink-700 ${
                    section.heading ? "mt-4" : ""
                  }`}
                >
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* SSS */}
          {post.faq && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Sık Sorulan Sorular
              </h2>
              <div className="divider-ember mt-3" />
              <div className="mt-6">
                <FaqAccordion items={post.faq} />
              </div>
            </div>
          )}

          {/* İlgili tur CTA */}
          {tour && (
            <div className="mt-12 rounded-3xl bg-clay-50 p-7 ring-1 ring-clay-200">
              <p className="text-xs font-bold uppercase tracking-wider text-clay-600">
                Rehberdeki tur
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink-900">
                {tour.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {tour.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/aktiviteler/${tour.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-clay-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-clay-700"
                >
                  Turu İncele
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={waLink(waTourMsg(tour.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-700 ring-1 ring-sand-300 transition-all hover:bg-sand-100"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp&apos;tan Sor
                </a>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* İlgili yazılar */}
      <section className="bg-sand-100 py-14">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            Bunları da oku
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/kapadokya-rehberi/${p.slug}`}
                className="card-zoom group flex overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-200 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-2/5 shrink-0">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-clay-500">
                    {p.tag}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-ink-900 group-hover:text-clay-700">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function waTourMsg(title: string) {
  return `Merhaba! "${title}" rehber yazısını okudum, ilgili tur hakkında bilgi almak istiyorum.`;
}
