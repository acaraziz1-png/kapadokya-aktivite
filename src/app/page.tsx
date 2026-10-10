import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Balloon,
  Compass,
  HandCoins,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Sun,
  Plane,
  Users,
  BadgeCheck,
} from "lucide-react";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import { reviews } from "@/data/reviews";
import { posts } from "@/data/blog";
import TourCard from "@/components/TourCard";
import SectionHeading from "@/components/SectionHeading";
import Stars from "@/components/Stars";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "Rezervasyon nasıl yapıyorum?",
    answer:
      "En hızlısı WhatsApp: sağ alttaki butondan yaz, ortalama 10 dakikada dönüş alırsın. İstersen web sitemizdeki rezervasyon formundan da geçebilirsin; telefonla arayanlara da aynı gün dönüş yapıyoruz.",
  },
  {
    question: "Sürpriz maliyet çıkar mı?",
    answer:
      "Çıkmaz. Fiyata neyin dahil olduğunu tur sayfalarında tek tek yazıyoruz; transfer, ekipman ve sigorta dahil olduğu halde ek ücret isteyen olursa ödediğin farkın iki katını iade ediyoruz.",
  },
  {
    question: "Balon uçuşu hava yüzünden iptal olursa?",
    answer:
      "Ücretin anında iade edilir ya da tarihin ertelenir — seçim senin. Hava şartları yüzünden iptallerde kesinti yapmıyoruz; bu bizim en temel güvencemiz.",
  },
  {
    question: "Türkçe rehber var mı?",
    answer:
      "Tüm turlarımız Türkçe rehberli. Balon uçuşlarında pilot anlatımı Türkçe ve İngilizce yapılır; diğer turlarda İngilizce rehber talebine de uyuyoruz.",
  },
];

export default function HomePage() {
  const featured = tours.slice(0, 4);
  const firstReviews = reviews.slice(0, 6);
  const latestPosts = posts.slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.domain },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const weatherStrip = [
    { icon: Sun, label: "Gün doğumu (balon uçuşu)", value: "06:45" },
    { icon: Plane, label: "Nevşehir Havalimanı", value: "40 dk" },
    { icon: MapPin, label: "Göreme'de şu an", value: "18° · Açık" },
  ];

  const whyUs = [
    {
      icon: Compass,
      title: "Yerel rehberlik",
      text: "Ekip tamamen Kapadokya'lı. Rotayı rüzgâra ve ışığa göre ayarlıyor; kalabalığa takılmadan peri bacalarının en iyi noktalarını gösteriyor.",
    },
    {
      icon: HandCoins,
      title: "Sürpriz maliyet yok",
      text: "Fiyat, tur sayfasında yazan şeydir. Transfer, ekipman, sigorta dahildir. Tur günü 'bunun ücreti ayrıydı' diye bir cümle duymazsın.",
    },
    {
      icon: ShieldCheck,
      title: "İptal/erteleme güvencesi",
      text: "Planın değişirse 48 saat öncesine kadar koşulsuz iptal. Hava şartından iptalde ücret aynı gün iade — kural bu, istisna yok.",
    },
    {
      icon: Users,
      title: "Küçük grup ruhu",
      text: "Kalabalık otobüs turları değil; küçük gruplarla kişisel ilgi. Rehberin adını öğrenir, veda ederken sarılırsın.",
    },
    {
      icon: MessageCircle,
      title: "10 dakikada dönüş",
      text: "WhatsApp'a yaz, ortalama 10 dakikada cevap al. Rezervasyon, değişiklik, soru — hepsi tek numaradan, hızlı ve net.",
    },
    {
      icon: BadgeCheck,
      title: "TÜRSAB üyesi acente",
      text: "Kayıtlı ve sigortalı turizm işletmesi. Tüm turlar zorunlu seyahat sigortası kapsamında; garanti bize, keyif sana.",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-night-950">
        <Image
          src="/images/hero-balon.jpg"
          alt="Kapadokya'da gün doğumunda peri bacaları üzerinde süzülen sıcak hava balonları"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 via-night-950/30 to-night-950/85" />

        <div className="container-page relative z-10 pb-16 pt-28 sm:pt-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-ember-100 ring-1 ring-white/20 backdrop-blur-sm">
              <Balloon className="h-4 w-4 animate-balloon" />
              {site.stats.guests} yerli misafir · {site.stats.rating} puan
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Kapadokya&apos;nın büyüsüne{" "}
              <span className="text-ember-300">balonla dokun</span>, ATV&apos;nin
              tozunda gün batımı yaşa
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-100/90 sm:text-xl">
              Yerel rehberler eşliğinde, sürpriz maliyetsiz, tam güvenceli
              aktiviteler. 8 yıldır Göreme&apos;den; balondan Türk gecesine
              hepsi tek çatı altında.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/aktiviteler"
                className="group inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-ember-700/30 transition-all hover:-translate-y-0.5 hover:bg-ember-600"
              >
                Aktiviteleri Keşfet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={waLink(
                  "Merhaba! Kapadokya turları hakkında bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp&apos;tan Sor
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-sand-100/85">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-ember-300" />
                İptal/erteleme güvencesi
              </span>
              <span className="flex items-center gap-2">
                <HandCoins className="h-4 w-4 text-ember-300" />
                Sürpriz maliyet yok
              </span>
              <span className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-ember-300" />
                Yerel Türkçe rehber
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HAVA & UÇUŞ ŞERİDİ ================= */}
      <section className="border-b border-sand-200 bg-white">
        <div className="container-page flex flex-col items-center justify-center gap-4 py-4 text-sm sm:flex-row sm:gap-10">
          {weatherStrip.map((item) => (
            <span key={item.label} className="flex items-center gap-2 text-ink-500">
              <item.icon className="h-4 w-4 text-clay-500" />
              <span className="font-medium text-ink-700">{item.label}:</span>
              {item.value}
            </span>
          ))}
        </div>
      </section>

      {/* ================= ÖNE ÇIKAN TURLAR ================= */}
      <section className="py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            kicker="Popüler Aktiviteler"
            title="Misafirlerimizin en sevdiği turlar"
            description="Balondan maceraya, kültürden romantizme — hepsi transfer ve ekipman dahil, sürpriz maliyetsiz."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/aktiviteler"
              className="inline-flex items-center gap-2 rounded-full border-2 border-clay-600 px-7 py-3 font-semibold text-clay-700 transition-all hover:bg-clay-600 hover:text-white"
            >
              Tüm Aktiviteler
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NEDEN BİZ ================= */}
      <section className="bg-night-950 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            kicker="Neden Kapadokya Aktivite?"
            title="Tatilin keyfini çıkaracağın, pazarlık derdi olmayan bir gün"
            dark
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/[0.08]"
              >
                <item.icon className="h-8 w-8 text-ember-300" />
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= YORUMLAR ================= */}
      <section className="bg-sand-100 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            kicker="Misafir Yorumları"
            title="Google, Trustpilot ve Tripadvisor'da 4,9 puan"
            description="Gerçek misafirlerimizin gerçek deneyimleri — hepsi doğrulanmış değerlendirmelerdir."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {firstReviews.map((r) => (
              <figure
                key={r.name}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sand-200"
              >
                <Quote className="h-7 w-7 text-ember-300" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-sand-200 pt-4">
                  <div>
                    <div className="font-semibold text-ink-900">{r.name}</div>
                    <div className="text-xs text-ink-500">
                      {r.city} · {r.activity}
                    </div>
                  </div>
                  <div className="text-right">
                    <Stars rating={r.rating} size={3.5} />
                    <div className="mt-1 text-[0.7rem] font-medium text-ink-300">
                      {r.platform} · {r.date}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REHBERDEN ================= */}
      <section className="py-20 lg:py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              kicker="Kapadokya Rehberi"
              title="Bilmen gerekenleri yazdık"
            />
            <Link
              href="/kapadokya-rehberi"
              className="inline-flex items-center gap-2 rounded-full border-2 border-clay-600 px-6 py-2.5 text-sm font-semibold text-clay-700 transition-all hover:bg-clay-600 hover:text-white"
            >
              Tüm Yazılar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/kapadokya-rehberi/${post.slug}`}
                className="card-zoom group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-sand-200 transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SSS ================= */}
      <section className="bg-sand-100 py-20 lg:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            kicker="Merak Edilenler"
            title="Sık sorulan sorular"
            description="Cevabını bulamadıysan WhatsApp'tan yaz — 10 dakikada dönelim."
          />
          <div className="mt-10">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* ================= SON CTA ================= */}
      <section className="relative overflow-hidden bg-clay-700 py-20 lg:py-24">
        <Image
          src="/images/balon-6.jpg"
          alt="Şafakta Kapadokya vadileri üzerinde balonlar"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="container-page relative z-10 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Kapadokya rüyalarını bir WhatsApp mesajıyla gerçeğe çevir
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-clay-50/90">
            Tarih ve kişi sayısını yaz; en uygun programı 10 dakikada senin için
            çıkaralım.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={waLink(
                "Merhaba! Kapadokya için tarih ve kişi sayısı planlıyorum, uygun turları öğrenebilir miyim?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-clay-700 shadow-xl transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              WhatsApp&apos;tan Yaz
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-8 py-4 text-base font-semibold text-white ring-2 ring-white/60 transition-all hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
