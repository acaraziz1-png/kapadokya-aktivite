export const site = {
  name: "Kapadokya Aktivite",
  legalName: "Kapadokya Aktivite Turizm ve Seyahat İşletmesi",
  tagline: "Kapadokya'nın en yerel aktivite acentesi",
  domain: "https://kapadokyaaktivite.com",
  phoneDisplay: "+90 555 111 22 33",
  phoneHref: "tel:+905551112233",
  whatsappNumber: "905551112233",
  email: "rezervasyon@kapadokyaaktivite.com",
  address: {
    street: "Müze Caddesi No:12",
    district: "Göreme",
    city: "Nevşehir",
    postalCode: "50180",
    country: "TR",
    lat: 38.6431,
    lng: 34.8286,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=G%C3%B6reme+M%C3%BCze+Caddesi+Nev%C5%9Fehir",
  hours: [
    { days: "Pazartesi – Cumartesi", time: "08:00 – 22:00" },
    { days: "Pazar", time: "08:00 – 20:00" },
  ],
  founded: "2018",
  stats: {
    guests: "12.500+",
    rating: "4,9",
    reviewCount: "1.240",
    years: "8",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/aktiviteler", label: "Aktiviteler" },
  { href: "/kapadokya-rehberi", label: "Kapadokya Rehberi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

/** Cache Components prerender'da new Date() yasak; yılı sabitliyoruz. */
export const currentYear = 2026;
