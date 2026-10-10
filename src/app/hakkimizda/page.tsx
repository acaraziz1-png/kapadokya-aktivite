import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Compass,
  HandCoins,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { site } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Hakkımızda | Göreme merkezli yerel acente",
  description:
    "Kapadokya Aktivite, 2018'den beri Göreme merkezli çalışan, yerli turistlere sürpriz maliyetsiz ve güvenceli aktivite turları düzenleyen TÜRSAB üyesi yerel acentedır.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Kapadokya Aktivite",
    description:
      "2018'den beri Göreme'den: yerli rehberlik, sürpriz maliyet yok, iptal güvencesi.",
    images: ["/images/cave-terrace.jpg"],
  },
};

const values = [
  {
    icon: HeartHandshake,
    title: "Samimiyet",
    text: "Misafirimiz değil, kapadokyalı dostumuz olursun. Tur bittikten sonra da arayıp soruyorsun; kapımız herkese açık.",
  },
  {
    icon: ShieldCheck,
    title: "Güven",
    text: "TÜRSAB kayıtlı, sigortalı, ruhsatlı. Söylediğimiz her şeyin arkasındayız; iade sözümüz söz our.",
  },
  {
    icon: Compass,
    title: "Yerellik",
    text: "Ekip Kapadokya'lı; hangi vadide güneş nereye batıyor, hangi sabah balon uçuyor — kan damarlarımızda.",
  },
  {
    icon: HandCoins,
    title: "Şeffaflık",
    text: "Fiyat nettir, gizli ücret yoktur. Dahil olanı ve olmayanı tur sayfasında açık açık yazarız.",
  },
];

const team = [
  {
    initials: "AE",
    name: "Ahmet (Rehber)",
    role: "Kurucu & Baş Rehber",
    bio: "Göreme doğumlu, 15 yıldır vadi vadi geziyor. Balon rotalarını rüzgârdan önce o bilir.",
  },
  {
    initials: "SD",
    name: "Sema (Operasyon)",
    role: "Rezervasyon Şefi",
    bio: "WhatsApp'a yazdığın an cevap veren kişi. Takvimler onun kafasında, programlar onun elinden çıkar.",
  },
  {
    initials: "MK",
    name: "Mehmet (Sürüş)",
    role: "ATV & Safari Ekibi",
    bio: "Vadi patikalarını avucunun içi gibi bilir. İlk kez sürüşte bile misafiri rahat ettirir.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Hakkımızda",
    url: `${site.domain}/hakkimizda`,
    mainEntity: { "@id": `${site.domain}/#agency` },
  };

  return (
    <>
      <JsonLd data={aboutSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-night-950 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <Image
          src="/images/cave-terrace.jpg"
          alt="Kapadokya'da mağara otel terası ve vadi manzarası"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 to-night-950/85" />
        <div className="container-page relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-300">
            Hakkımızda
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Kapadokya&apos;lı bir ekibiz — burayı biz evimiz gibi biliriz
          </h1>
          <div className="divider-ember mt-5" />
          <p className="mt-5 max-w-2xl text-lg text-sand-100/85">
            {site.founded} yılından beri Göreme&apos;den çalışıyoruz. Amacımız
            basit: Kapadokya&apos;yı ilk günkü heyecanla, sürpriz maliyet olmadan,
            güvende hissederek yaşatmak.
          </p>
        </div>
      </section>

      {/* Hikaye + rakamlar */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink-900">
              Hikâyemiz peri bacalarının arasında başladı
            </h2>
            <div className="divider-ember mt-4" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-700">
              <p>
                Kapadokya Aktivite, Göreme&apos;de doğup büyüyen birkaç rehberin
                &quot;misafirlerimize bizim bildiğimiz Kapadokya&apos;yı
                gösterelim&quot; fikriyle {site.founded}&apos;de kuruldu. O gün
                bugündür turumuz büyüdü ama ruhumuz aynı kaldı: küçük gruplar,
                samimi anlatım, net fiyat.
              </p>
              <p>
                Bugüne kadar {site.stats.guests} yerli misafirimizi balonla
                uçurduk, ATV ile toza buladık, Türk gecesinde halayını
                oynattık. Google, Trustpilot ve Tripadvisor&apos;da{" "}
                {site.stats.rating} puan, {site.stats.reviewCount}&apos;den fazla
                değerlendirme — hepsi bu işin hakkını vererek yaptığımızın
                kanıtı.
              </p>
              <p>
                Ofisimiz Göreme&apos;de, Müze Caddesi&apos;nde. Yolun düşerse çay
                içmeye bekleriz; rota önerileri bizden, çay bizden.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: site.stats.guests, label: "Mutlu misafir" },
              { value: site.stats.rating, label: "Ortalama puan" },
              { value: site.stats.reviewCount, label: "Değerlendirme" },
              { value: `${site.stats.years} yıl`, label: "Sektörde tecrübe" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-sand-200"
              >
                <div className="font-display text-3xl font-bold text-clay-700 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-ink-500">{s.label}</div>
              </div>
            ))}
            <div className="col-span-2 rounded-3xl bg-night-950 p-6 text-center">
              <BadgeCheck className="mx-auto h-8 w-8 text-ember-300" />
              <p className="mt-2 text-sm font-medium text-sand-200">
                TÜRSAB üyesi acente · Tüm turlar seyahat sigortalı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="bg-sand-100 py-14 lg:py-20">
        <div className="container-page">
          <SectionHeading
            kicker="Değerlerimiz"
            title="Bizi biz yapan dört ilke"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sand-200"
              >
                <v.icon className="h-8 w-8 text-clay-600" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="py-14 lg:py-20">
        <div className="container-page">
          <SectionHeading
            kicker="Ekip"
            title="Seni vadilerde karşılayacak isimler"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-sand-200"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-clay-600 font-display text-xl font-bold text-white">
                  {m.initials}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                  {m.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-clay-500">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-night-950 py-16">
        <div className="container-page flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Tanışmanın en kolay yolu: bir mesaj at
            </h2>
            <p className="mt-2 text-sand-300">
              Planını konuşalım, rota önerelim — hiçbir yükümlülük yok.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink("Merhaba! Hakkınızı okudum, turlarınız hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/30 transition-all hover:bg-white/20"
            >
              İletişim Sayfası
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
