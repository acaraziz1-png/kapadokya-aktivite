import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Galeri | Kapadokya'nın en güzel kareleri",
  description:
    "Balonlar, vadiler, peri bacaları, sema töreni ve Türk gecesi — Kapadokya Aktivite misafirlerinden ve rotalarımızdan fotoğraflar.",
  alternates: { canonical: "/galeri" },
  openGraph: {
    title: "Galeri | Kapadokya Aktivite",
    description: "Kapadokya'nın en güzel kareleri tek sayfada.",
  },
};

const galleryItems = [
  { src: "/images/hero-balon.jpg", alt: "Gün doğumunda Kapadokya üzerinde sıcak hava balonu uçuşu", tall: true },
  { src: "/images/love-valley.jpg", alt: "Aşk Vadisi'nde peri bacaları ve yürüyüş parkuru" },
  { src: "/images/atv-safari.jpg", alt: "ATV safari konvoyu kumlu patikada ilerliyor" },
  { src: "/images/goreme-muze.jpg", alt: "Göreme Açık Hava Müzesi kaya kiliseleri", tall: true },
  { src: "/images/red-valley.jpg", alt: "Kızıl Vadi'de gün batımının kızıllığı" },
  { src: "/images/sema.jpg", alt: "Mevlevi semazenlerin Sema töreni gösterimi" },
  { src: "/images/turk-gecesi.jpg", alt: "Anadolu halk oyunları ekibi halay gösterisi", tall: true },
  { src: "/images/at-turu.jpg", alt: "Kapadokya vadilerinde at gezisi" },
  { src: "/images/klasik-arac.jpg", alt: "Göl ve dağ manzarası önünde klasik araç" },
  { src: "/images/peri-bacalari-pano.jpg", alt: "Peri bacaları panoramik görünüm" },
  { src: "/images/cave-terrace.jpg", alt: "Mağara otel terasından vadi manzarası" },
  { src: "/images/balon-genis.jpg", alt: "Şafakta vadilerde yüzlerce balon uçuşa hazır" },
  { src: "/images/avanos-comlek.jpg", alt: "Avanos'ta çömlek atölyesinde el yapımı seramik" },
  { src: "/images/kahvalti.jpg", alt: "Zengin Türk kahvaltısı sofrası", tall: true },
  { src: "/images/hamam.jpg", alt: "Tarihi Türk hamamı kubbe ve mermer detayları" },
  { src: "/images/red-valley-2.jpg", alt: "Gülü Vadi'de gün batımı yürüyüş rotası" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night-950 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <Image
          src="/images/balon-3.jpg"
          alt="Kapadokya vadilerinde balonlar"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 to-night-950/85" />
        <div className="container-page relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-300">
            Galeri
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Kapadokya&apos;ya göz kırpan kareler
          </h1>
          <div className="divider-ember mt-5" />
          <p className="mt-5 max-w-2xl text-lg text-sand-100/85">
            Rotalarımızdan ve misafirlerimizin deneyimlerinden — hepsi burada
            yaşanmış, hepsi seni bekliyor.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {galleryItems.map((g) => (
              <figure
                key={g.src}
                className="group relative overflow-hidden rounded-2xl break-inside-avoid shadow-sm ring-1 ring-sand-200"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={800}
                  height={g.tall ? 1000 : 600}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <SectionHeading
              title="Sen de buraya eklenecek kareleri yaşamaya var mısın?"
              description="Turlarımızdan birini seç, fotoğrafların gerçeğe dönüşsün."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/aktiviteler"
                className="rounded-full bg-clay-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-clay-700"
              >
                Aktiviteleri Keşfet
              </Link>
              <a
                href={waLink("Merhaba! Galeriye baktım, turlar hakkında bilgi alabilir miyim?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-ink-700 ring-1 ring-sand-300 transition-all hover:bg-sand-100"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
