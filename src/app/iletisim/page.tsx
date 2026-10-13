import type { Metadata } from "next";
import Image from "next/image";
import {
  Bolt,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Store,
  Verified,
} from "lucide-react";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "İletişim | Göreme ofisimiz, telefon ve WhatsApp",
  description:
    "Kapadokya Aktivite iletişim: Göreme Müze Caddesi ofis adresi, telefon, WhatsApp ve rezervasyon formu. Ortalama 10 dakikada dönüş.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Kapadokya Aktivite",
    description:
      "Göreme ofisimiz, telefon, WhatsApp ve form — istediğin kanaldan ulaş, hızlı dönelim.",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim",
    url: `${site.domain}/iletisim`,
    mainEntity: { "@id": `${site.domain}/#agency` },
  };

  const contactCards = [
    {
      icon: Store,
      iconHover: "group-hover:bg-primary group-hover:text-on-primary",
      kicker: "Göreme Merkez",
      title: "Bölge Ofisi",
      body: `${site.address.street}, ${site.address.district} / ${site.address.city}`,
      footer: (
        <span className="flex items-center gap-1 text-xs font-semibold text-tertiary">
          <span className="h-2 w-2 rounded-full bg-tertiary" /> Açık ·{" "}
          {site.hours[0].time}
        </span>
      ),
      href: site.mapsUrl,
      external: true,
    },
    {
      icon: PhoneCall,
      iconHover: "group-hover:bg-secondary group-hover:text-on-secondary",
      kicker: "Haftanın 7 Günü",
      title: "Çağrı Merkezi",
      body: site.phoneDisplay,
      bodyClass: "font-display text-2xl text-primary",
      footer: (
        <span className="text-xs text-tertiary">Ücretsiz Çağrı</span>
      ),
      href: site.phoneHref,
      external: false,
    },
    {
      icon: MessageCircle,
      iconHover: "group-hover:bg-tertiary group-hover:text-on-tertiary",
      kicker: "Anlık Bildirim",
      title: "WhatsApp Hattı",
      body: site.phoneDisplay,
      bodyClass: "text-lg font-bold text-on-surface",
      footer: (
        <span className="flex items-center gap-1 text-xs font-semibold text-primary">
          Ort. 10 dk dönüş <Bolt className="h-4 w-4 text-tertiary" />
        </span>
      ),
      href: waLink("Merhaba! Kapadokya turları hakkında bilgi almak istiyorum."),
      external: true,
    },
    {
      icon: Mail,
      iconHover: "group-hover:bg-primary-container group-hover:text-on-primary-container",
      kicker: "Yazılı Talep",
      title: "E-posta İletişim",
      body: site.email,
      bodyClass: "text-sm font-semibold text-primary",
      footer: <span className="text-xs text-outline">Grup & Acente Masası</span>,
      href: `mailto:${site.email}`,
      external: false,
    },
  ];

  return (
    <>
      <JsonLd data={contactSchema} />

      {/* Üst bant */}
      <section className="relative w-full overflow-hidden bg-surface-container-low px-6 pb-14 pt-32 lg:px-12 lg:pt-40">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary-fixed/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-tertiary-fixed/30 blur-2xl" />
        <div className="container-page relative z-10">
          <div className="flex flex-col justify-between gap-8 pb-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1.5 text-tertiary">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {site.address.district} Karargâhı · Doğrudan İletişim
                </span>
              </div>
              <h1 className="mb-4 font-display text-4xl tracking-tight text-on-surface sm:text-5xl">
                Bizimle İletişime Geçin
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                Kapadokya planını birlikte yapalım; tüf vadilerinde doğup
                büyüyen yerel ekibimiz bir telefon uzağında.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 self-start rounded-xl bg-surface p-4 shadow-sm sm:flex-row sm:items-center lg:self-auto">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-fixed">
                <Verified className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-on-surface">
                    Kayıtlı & Sigortalı İşletme
                  </span>
                </div>
                <p className="text-sm text-outline">
                  T.C. Kültür ve Turizm Bakanlığı denetiminde
                </p>
              </div>
            </div>
          </div>

          {/* Hızlı iletişim kartları */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col justify-between rounded-xl bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-primary transition-colors ${c.iconHover}`}
                  >
                    <c.icon className="h-[22px] w-[22px]" />
                  </div>
                  <span className="mb-1 block text-xs uppercase tracking-widest text-outline">
                    {c.kicker}
                  </span>
                  <h3 className="mb-2 font-display text-xl text-on-surface">
                    {c.title}
                  </h3>
                  <p className={`leading-relaxed text-on-surface-variant ${c.bodyClass ?? "text-sm"}`}>
                    {c.body}
                  </p>
                </div>
                <div className="-mx-6 -mb-6 mt-4 flex items-center justify-between rounded-b-xl bg-surface-container-low px-6 py-3 pt-4">
                  {c.footer}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* İki sütun: form + ofis */}
      <section className="w-full py-16">
        <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm ring-1 ring-outline-variant/30 lg:col-span-7 lg:p-10">
            <ContactForm />
          </div>

          {/* Ofis ziyareti */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div
              id="konum"
              className="relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-surface-container-lowest p-7 shadow-sm ring-1 ring-outline-variant/30"
            >
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded bg-secondary-fixed px-2.5 py-1 text-xs font-semibold text-on-secondary-fixed-variant">
                  <Clock className="h-4 w-4" /> Kapımız Her Zaman Açık
                </div>
                <h3 className="mb-2 font-display text-2xl text-on-surface">
                  Çay Eşliğinde Rota Planlayalım
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {site.address.district} merkezdeki ofisimize uğra; sıcak bir
                  çay ikramımız eşliğinde vadileri harita üzerinden nokta nokta
                  konuşalım.
                </p>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-48 w-full items-end overflow-hidden rounded-xl shadow-inner"
              >
                <Image
                  src="/images/goreme-giris.jpg"
                  alt={`${site.address.district} ofis çevresi`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                <span className="relative z-10 flex w-full items-center justify-between p-4 text-on-primary">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-secondary-fixed" />
                    <span>
                      <span className="block text-xs font-bold leading-none">
                        Kapadokya Aktivite Ofisi
                      </span>
                      <span className="text-xs text-secondary-fixed">
                        {site.address.street}
                      </span>
                    </span>
                  </span>
                  <span className="rounded-lg bg-surface px-3 py-1.5 text-xs text-on-surface shadow-sm transition-colors hover:bg-secondary-fixed">
                    Yol Tarifi Al
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-3 rounded-xl bg-surface-container-low p-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-on-surface-variant">
                  {site.address.district} Otogarı&apos;na yürüme mesafesindeyiz.
                  Araçla gelen misafirlerimiz için ofis önünde park imkânı
                  mevcut.
                </p>
              </div>
            </div>

            {/* Çalışma saatleri */}
            <div className="rounded-2xl bg-surface-container-low p-7 shadow-sm ring-1 ring-outline-variant/30">
              <h3 className="flex items-center gap-2 font-display text-xl text-on-surface">
                <Clock className="h-5 w-5 text-primary" /> Çalışma Saatleri
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-on-surface-variant">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="font-semibold text-on-surface">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-outline">
                Sezon yoğunluğunda WhatsApp mesajlarına gece geç saatlere kadar
                dönüş yapıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alt güven bandı */}
      <section className="w-full bg-surface-container px-6 py-12 lg:px-12">
        <div className="container-page flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm">
              <Phone className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-display text-xl text-on-surface">
                Kapadokya&apos;da Yabancı Değilsin
              </h4>
              <p className="text-sm text-on-surface-variant">
                Nevşehir ve Göreme&apos;de 7/24 sahada olan rehber ve şoför
                ekibimizle tatilin boyunca yanındayız.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={waLink("Merhaba! Bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-surface-container-lowest px-5 py-2.5 text-sm font-semibold text-on-surface shadow-sm transition-colors hover:bg-surface-bright"
            >
              <MessageCircle className="h-5 w-5 text-tertiary" />
              WhatsApp&apos;tan Yazın
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition-colors hover:bg-primary-container"
            >
              <Phone className="h-5 w-5" />
              {site.phoneDisplay}&apos;yi Arayın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
