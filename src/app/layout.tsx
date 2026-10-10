import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Kapadokya Aktivite | Balon Turu, ATV Safari & Yerli Turlar",
    template: "%s | Kapadokya Aktivite",
  },
  description:
    "Kapadokya'nın yerli aktivite acentesi: sıcak hava balonu, ATV safari, at turu, klasik araç ve Türk gecesi turları. Sürpriz maliyet yok, son dakika iptal güvencesi var.",
  keywords: [
    "kapadokya balon turu",
    "kapadokya aktiviteleri",
    "kapadokya atv safari",
    "kapadokya at turu",
    "kapadokya türk gecesi",
    "kapadokya turları",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: "Kapadokya Aktivite | Balon Turu, ATV Safari & Yerli Turlar",
    description:
      "Gün doğumunda balon, gün batımında ATV. Kapadokya'nın en samimi aktivite acentesi — sürpriz maliyet yok.",
    images: [
      {
        url: "/images/hero-balon.jpg",
        width: 1200,
        height: 630,
        alt: "Kapadokya'da gün doğumunda sıcak hava balonu uçuşu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapadokya Aktivite | Balon Turu, ATV Safari & Yerli Turlar",
    description:
      "Gün doğumunda balon, gün batımında ATV. Kapadokya'nın en samimi aktivite acentesi.",
    images: ["/images/hero-balon.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${site.domain}/#agency`,
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    telephone: `+${site.whatsappNumber}`,
    email: site.email,
    foundingDate: site.founded,
    image: `${site.domain}/images/hero-balon.jpg`,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1240",
      bestRating: "5",
    },
    sameAs: [site.mapsUrl],
  };

  return (
    <html lang="tr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusiness} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
