import type { Metadata } from "next";
import { tours, categoryLabels, type TourCategory } from "@/data/tours";
import ActivitiesBrowser from "@/components/ActivitiesBrowser";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kapadokya Aktiviteleri | Balon, ATV, At Turu ve Dahası",
  description:
    "Kapadokya'da yapılacak en iyi aktiviteler: sıcak hava balonu, ATV safari, at turu, klasik araç turu ve Türk gecesi. Fiyatlar, süreler ve rezervasyon tek sayfada.",
  alternates: { canonical: "/aktiviteler" },
  openGraph: {
    title: "Kapadokya Aktiviteleri | Balon, ATV, At Turu ve Dahası",
    description:
      "Kapadokya'da yapılacak en iyi aktiviteler tek sayfada: balon turu, ATV safari, at turu ve daha fazlası.",
    images: ["/images/balon-genis.jpg"],
  },
};

export default function ActivitiesPage() {
  const categoryCount: Record<TourCategory, number> = {
    hava: tours.filter((t) => t.category === "hava").length,
    macera: tours.filter((t) => t.category === "macera").length,
    kultur: tours.filter((t) => t.category === "kultur").length,
  };

  const collectionListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kapadokya Aktiviteleri",
    description:
      "Kapadokya'da yapılacak aktiviteler: balon turu, ATV safari, at turu, klasik araç ve Türk gecesi.",
    url: `${site.domain}/aktiviteler`,
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tours.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.domain}/aktiviteler/${t.slug}`,
      name: t.title,
    })),
  };

  return (
    <>
      <JsonLd data={collectionListSchema} />
      <JsonLd data={itemListSchema} />

      {/* Sayfa başlığı */}
      <section className="relative overflow-hidden bg-night-950 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url(/images/peri-bacalari-pano.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 to-night-950/85" />
        <div className="container-page relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-300">
            Aktiviteler
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Kapadokya&apos;da yapılacak en iyi{" "}
            {tours.length} aktivite
          </h1>
          <div className="divider-ember mt-5" />
          <p className="mt-5 max-w-2xl text-lg text-sand-100/85">
            Hepsi transfer ve ekipman dahil, Türkçe rehberli ve iptal
            güvenceli. Kategorilere göre süz, aradığını bul.
          </p>
        </div>
      </section>

      <ActivitiesBrowser
        tours={tours}
        categories={Object.entries(categoryLabels).map(([id, label]) => ({
          id: id as TourCategory,
          label,
          count: categoryCount[id as TourCategory],
        }))}
      />
    </>
  );
}
