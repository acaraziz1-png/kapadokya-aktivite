import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HandCoins,
  Headphones,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sun,
  Users,
} from "lucide-react";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import { reviews } from "@/data/reviews";
import { posts } from "@/data/blog";
import TourCard from "@/components/TourCard";
import Stars from "@/components/Stars";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import QuickSearchBar from "@/components/QuickSearchBar";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "Rüzgârdan dolayı balon uçamazsa param ne zaman iade edilir?",
    answer:
      "Hava şartları yüzünden uçuş iptal olursa ücretin anında iade edilir ya da tarihin ertesi güne kaydırılır — seçim senin. İadede kesinti yapmıyoruz; bu bizim en temel güvencemiz.",
  },
  {
    question: "Otelimizden transfer fiyata dahil mi?",
    answer:
      "Evet. Göreme, Uçhisar, Ürgüp, Avanos, Çavuşin ve Ortahisar bölgelerindeki otellerden gidiş-dönüş transfer çoğu turumuzun fiyatına dahildir. Tur sayfasında tek tek yazıyoruz.",
  },
  {
    question: "Çocuklar için yaş sınırı var mı?",
    answer:
      "Balon uçuşlarına sivil havacılık kuralları gereği 6 yaş altı alınmıyor. ATV'de sürücü için 18 yaş şartı var; at turu ve atölyelerde tüm yaşlar aile refakatinde katılabiliyor.",
  },
  {
    question: "Rezervasyon için ne kadar önceden yazmalıyım?",
    answer:
      "Özellikle Nisan–Haziran ve Eylül–Kasım'da balon kontenjanları 2–3 hafta önceden dolabiliyor. Tarihin netleştiği gün yazman yeterli; iptal opsiyonuyla yerini ayırtabilirsin.",
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: site.domain,
      },
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

  const trustBadges = [
    { icon: ShieldCheck, label: "%100 İptal Garantisi" },
    { icon: BadgeCheck, label: "TÜRSAB Üyesi Güvencesi" },
    { icon: Headphones, label: "7/24 Yerel Destek" },
  ];

  const seasonalTips = [
    {
      tag: "Işık & Fotoğraf",
      tagColor: "bg-secondary-fixed text-on-secondary-fixed",
      time: "05:40 - 06:30",
      title: "Güllüdere Balon İzleme Noktası",
      text: "Aşk Vadisi'nin en yoğun olduğu sabah saatlerinde Güllüdere boğazı, balonların peri bacalarının arasından alçaldığı en sakin fotoğraf rotasıdır.",
      meta: "Göreme'ye 6 km",
    },
    {
      tag: "Gizli Kültür",
      tagColor: "bg-tertiary-fixed text-on-tertiary-fixed",
      time: "10:00 - 16:00",
      title: "Kızılçukur'daki Haçlı Kilise",
      text: "Kaya içine oyulmuş 9. yüzyıl fresklerine ev sahipliği yapan kiliseye yalnızca dar patika yürüyüşüyle ulaşılır; kafa lambanı yanına al.",
      meta: "Orta Seviye Yürüyüş",
    },
    {
      tag: "Gün Batımı & Dinlence",
      tagColor: "bg-primary-fixed text-on-primary-fixed-variant",
      time: "Gün Batımı",
      title: "Uçhisar Seyir Terası",
      text: "Kalenin kalabalık balkonuna çıkmak yerine bağ evlerinin çevresindeki tüf setler, Erciyes'in kızıla bürünüşünü izlemek için mükemmel.",
      meta: "Yerel Şarap Eşliğinde",
    },
  ];

  const whyUs = [
    {
      icon: HandCoins,
      bg: "bg-primary-fixed text-primary",
      title: "Aracısız Yerel Fiyatlar",
      text: "Turlarımızı doğrudan işletmecilerle planlıyoruz. Gizli komisyon ya da ara acente maliyeti olmadan gerçek vadeli fiyatlarla geziyorsun.",
    },
    {
      icon: ShieldCheck,
      bg: "bg-secondary-fixed text-secondary",
      title: "Hava Koşulu & Anında İade",
      text: "Balon uçuşu hava nedeniyle iptal olursa sorgusuz %100 tam iade ya da ertesi güne öncelikli aktarım — kural bu, istisna yok.",
    },
    {
      icon: BadgeCheck,
      bg: "bg-tertiary-fixed text-tertiary",
      title: "Bölgede Doğan Rehberler",
      text: "Ezber metinler yerine; tüf kayaların jeolojisini, vadi köylerinin sözlü tarihini bilen kokartlı bölge rehberleri.",
    },
    {
      icon: Users,
      bg: "bg-surface-container-highest text-on-surface",
      title: "Butik Grup Boyutları",
      text: "Otobüs dolusu kalabalık yok. Küçük, samimi ve doğaya minimum ayak izi bırakan kafilelerle dingin bir Kapadokya.",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ============ 1. HERO + HIZLI ARAMA ============ */}
      <section className="relative w-full overflow-hidden bg-surface pb-16 pt-32 lg:pb-24 lg:pt-40">
        {/* Atmosferik ışık lekeleri */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-secondary-fixed-dim/30 blur-3xl" />
          <div className="absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-primary-fixed/25 blur-3xl" />
        </div>

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Metin */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="inline-flex w-fit items-center gap-2.5 rounded-full bg-surface-container-high px-3.5 py-1.5 shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Yerel · Doğrulanmış Kapadokya Kürasyonu
                </span>
              </div>

              <h1 className="font-display text-4xl leading-tight tracking-tight text-on-surface lg:text-6xl lg:leading-[1.15]">
                Masal Diyarında{" "}
                <span className="italic text-primary">Gerçek Anlar</span>{" "}
                Biriktirin
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                Göreme&apos;nin gün doğumundan Avanos çömlek tezgâhlarına,
                Kapadokya&apos;nın en seçkin yerel deneyimleri — sürpriz
                maliyet yok, güvence tam.
              </p>

              {/* Güven rozetleri */}
              <div className="flex flex-wrap items-center gap-4 pt-2 lg:gap-6">
                {trustBadges.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 rounded-lg bg-surface-container-low px-3.5 py-2 shadow-sm"
                  >
                    <b.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-on-surface">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Görsel mozaik */}
            <div className="relative lg:col-span-5">
              <div className="relative h-[380px] w-full overflow-hidden rounded-2xl bg-surface-container shadow-xl lg:h-[460px]">
                <Image
                  src="/images/hero-balon.jpg"
                  alt="Kapadokya vadisinde gün doğumunda balonlar"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent" />
                {/* Canlı uçuş bilgisi */}
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl bg-surface/90 p-4 shadow-md backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
                      <Sun className="h-[22px] w-[22px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-outline">
                        Yarın Sabah Uçuş Şartları
                      </span>
                      <span className="flex items-center gap-1.5 text-sm font-bold text-on-surface">
                        İdeal Rüzgâr{" "}
                        <span className="h-2 w-2 rounded-full bg-tertiary" />
                      </span>
                    </div>
                  </div>
                  <span className="rounded bg-tertiary-fixed px-2.5 py-1 text-xs font-bold text-on-tertiary-fixed">
                    Uçuş Onaylı
                  </span>
                </div>
              </div>

              {/* Asimetrik etiket */}
              <div className="absolute -left-6 -top-4 hidden -rotate-2 items-center gap-2.5 rounded-xl bg-surface-container-highest px-4 py-2.5 shadow-lg sm:flex">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-on-surface">
                  Kayıtlı & Sigortalı Yerel İşletme
                </span>
              </div>
            </div>
          </div>

          {/* Hızlı arama çubuğu */}
          <div className="mt-12 rounded-2xl bg-surface-container-lowest p-4 shadow-xl lg:p-6">
            <QuickSearchBar />
          </div>
        </div>
      </section>

      {/* ============ 2. ÖNE ÇIKAN DENEYİMLER ============ */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Kapadokya Aktivite Seçkisi
                </span>
              </div>
              <h2 className="font-display text-3xl text-on-surface lg:text-4xl">
                Öne Çıkan Seçilmiş Deneyimler
              </h2>
              <p className="max-w-xl text-sm text-on-surface-variant">
                Tüm turlarımız resmi rehberlik ve güvenli ekipman
                sertifikalarına sahip, aracısız yerel operatörlerle
                gerçekleştirilir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/aktiviteler"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-on-primary"
            >
              Tüm Deneyimler
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 3. NEDEN BİZ ============ */}
      <section className="w-full bg-surface py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Doğrudan & Saygılı Turizm
                </span>
              </div>
              <h2 className="font-display text-3xl text-on-surface lg:text-4xl">
                Neden Binlerce Gezgin{" "}
                <span className="italic text-primary">
                  Kapadokya Aktivite
                </span>
                &apos;i Seçiyor?
              </h2>
              <p className="text-base leading-relaxed text-on-surface-variant">
                Büyük anonim platformlar gibi komisyonculuk yapmıyoruz.
                Vadinin yerlisi işletmeciler, ata mesleği zanaatkârlar ve
                bölgeyi avucunun içi gibi bilen rehberlerle doğrudan
                masadasın.
              </p>
              <div className="flex items-center gap-6 rounded-2xl bg-surface-container-low p-6 shadow-sm">
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                  <svg
                    className="h-full w-full -rotate-90"
                    viewBox="0 0 36 36"
                    aria-hidden="true"
                  >
                    <path
                      className="text-surface-container-highest"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />
                    <path
                      className="text-primary"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="99, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <span className="absolute font-display text-xl font-bold text-on-surface">
                    {site.stats.rating}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-on-surface">
                    Misafir Memnuniyeti
                  </span>
                  <span className="text-sm text-outline">
                    {site.stats.guests} yerli misafirin teyitli değerlendirmesi
                    — ortalama {site.stats.rating} puan.
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 rounded-2xl bg-surface-container-low p-6 shadow-sm transition-colors hover:bg-surface-container"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                  >
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. SEZONLUK TAVSİYELER ============ */}
      <section className="w-full bg-surface-container py-16 lg:py-24">
        <div className="container-page">
          <div className="flex max-w-2xl flex-col gap-3 pb-12">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Editoryal Saha Notları
              </span>
            </div>
            <h2 className="font-display text-3xl text-on-surface lg:text-4xl">
              Kapadokya&apos;da Bu Ay: Bilmen Gerekenler
            </h2>
            <p className="text-sm text-on-surface-variant">
              Yerel rehberlerimizin vadilerden derlediği güncel ışık saatleri,
              gizli geçitler ve turist akınından uzak mola noktaları.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {seasonalTips.map((tip) => (
              <div
                key={tip.title}
                className="flex flex-col justify-between gap-6 rounded-2xl bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded px-3 py-1 text-xs font-bold ${tip.tagColor}`}
                    >
                      {tip.tag}
                    </span>
                    <span className="text-xs text-outline">{tip.time}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-on-surface">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">{tip.text}</p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="flex items-center gap-1 text-xs font-semibold text-tertiary">
                    <ArrowRight className="h-4 w-4" /> {tip.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. REHBERDEN ============ */}
      <section className="w-full bg-surface py-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 pb-12 sm:flex-row sm:items-end">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Kapadokya Rehberi
                </span>
              </div>
              <h2 className="font-display text-3xl text-on-surface lg:text-4xl">
                Bilmen Gerekenleri Yazdık
              </h2>
            </div>
            <Link
              href="/kapadokya-rehberi"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-on-primary"
            >
              Tüm Yazılar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/kapadokya-rehberi/${post.slug}`}
                className="card-zoom group flex h-full flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm ring-1 ring-outline-variant/30 transition-all hover:-translate-y-1 hover:shadow-xl"
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
                  <span className="text-xs font-bold uppercase tracking-wider text-tertiary">
                    {post.tag}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-on-surface group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-on-surface-variant">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. YORUMLAR ============ */}
      <section className="w-full bg-surface-container py-20">
        <div className="container-page">
          <div className="flex max-w-2xl flex-col gap-3 pb-12">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Misafir Deneyimleri
              </span>
            </div>
            <h2 className="font-display text-3xl text-on-surface lg:text-4xl">
              Gerçek Yolculuk Hikâyeleri
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {firstReviews.map((r) => (
              <figure
                key={r.name}
                className="flex h-full flex-col rounded-2xl bg-surface-container-lowest p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-fixed text-xs font-bold text-on-primary-fixed-variant">
                      {r.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-on-surface">
                        {r.name}
                      </span>
                      <span className="text-xs text-outline">
                        {r.city} · {r.date}
                      </span>
                    </div>
                  </div>
                  <Stars rating={r.rating} size={3.5} />
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-on-surface-variant">
                  <Quote className="mb-1 inline h-4 w-4 text-tertiary" />{" "}
                  {r.text}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-1.5 text-xs text-tertiary">
                  <BadgeCheck className="h-4 w-4" /> Doğrulanmış Misafir ·{" "}
                  {r.activity}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. WHATSAPP DANIŞMA + SSS ============ */}
      <section className="w-full bg-surface py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* WhatsApp paneli */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-surface-container-high p-8 shadow-md lg:col-span-5">
              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tertiary text-on-tertiary shadow-sm">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-tertiary">
                    Canlı & Yerel Danışma
                  </span>
                  <h3 className="font-display text-2xl text-on-surface">
                    Kapadokya Planını Birlikte Yapalım
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Hangi mevsimde ne giyilir? Balon için hangi gün en uygun?
                    Otel transferleri nereden yapılır? Sahadaki ekibimiz
                    yanıtlamaya hazır.
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-highest text-xs font-bold text-on-surface ring-2 ring-surface">
                      EY
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-fixed text-xs font-bold text-on-secondary-fixed ring-2 ring-surface">
                      MK
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-fixed text-xs font-bold text-on-primary-fixed-variant ring-2 ring-surface">
                      ZA
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-on-surface">
                      <span className="h-2 w-2 rounded-full bg-tertiary" />{" "}
                      Şu an çevrimiçi
                    </span>
                    <span className="text-xs text-outline">
                      Ortalama yanıt süresi: ~10 dk
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-3 pt-8">
                <a
                  href={waLink(
                    "Merhaba, Kapadokya deneyimleriyle ilgili bilgi almak istiyorum."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-tertiary px-6 py-3.5 text-sm font-semibold text-on-tertiary shadow-md transition-all hover:bg-tertiary-container hover:shadow-lg"
                >
                  <MessageCircle className="h-[22px] w-[22px]" />
                  WhatsApp&apos;tan Hemen Yazın
                </a>
                <p className="text-center text-xs text-outline">
                  Haftanın her günü 07:00 – 23:00 arası doğrudan yerel uzman
                  desteği.
                </p>
              </div>
            </div>

            {/* SSS */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Şeffaf Bilgilendirme
                </span>
                <h3 className="font-display text-2xl text-on-surface">
                  Sıkça Sorulan Sorular
                </h3>
              </div>
              <FaqAccordion items={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. SON CTA ============ */}
      <section className="w-full bg-primary py-20">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight text-on-primary sm:text-4xl">
            Kapadokya rüyalarını bir WhatsApp mesajıyla gerçeğe çevir
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-fixed-dim">
            Tarih ve kişi sayısını yaz; en uygun programı 10 dakikada senin
            için çıkaralım.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={waLink(
                "Merhaba! Kapadokya için tarih ve kişi sayısı planlıyorum, uygun turları öğrenebilir miyim?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-surface px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 text-tertiary" />
              WhatsApp&apos;tan Yaz
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-on-primary ring-2 ring-on-primary/60 transition-all hover:bg-on-primary/10"
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
