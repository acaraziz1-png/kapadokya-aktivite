import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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

  return (
    <>
      <JsonLd data={contactSchema} />

      <section className="relative overflow-hidden bg-night-950 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/images/goreme-teras-pano.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 to-night-950/85" />
        <div className="container-page relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-300">
            İletişim
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Yaz, arayız; kapılarımız açık
          </h1>
          <div className="divider-ember mt-5" />
          <p className="mt-5 max-w-2xl text-lg text-sand-100/85">
            En hızlısı WhatsApp. Ofis saatlerinde ortalama dönüş süremiz 10
            dakika.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_420px]">
          {/* Bilgiler */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Doğrudan ulaş
            </h2>
            <div className="divider-ember mt-3" />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={waLink("Merhaba! Kapadokya turları hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-[#25D366]/10 p-6 ring-1 ring-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#25D366]/15"
              >
                <MessageCircle className="h-7 w-7 text-[#1da851]" />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  En hızlı kanal · {site.phoneDisplay}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-[#1da851]">
                  Mesaj Gönder →
                </span>
              </a>

              <a
                href={site.phoneHref}
                className="rounded-3xl bg-clay-50 p-6 ring-1 ring-clay-200 transition-all hover:-translate-y-0.5 hover:bg-clay-100"
              >
                <Phone className="h-7 w-7 text-clay-600" />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
                  Telefon
                </h3>
                <p className="mt-1 text-sm text-ink-500">{site.phoneDisplay}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-clay-700">
                  Hemen Ara →
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="rounded-3xl bg-white p-6 ring-1 ring-sand-200 transition-all hover:-translate-y-0.5"
              >
                <Mail className="h-7 w-7 text-clay-600" />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
                  E-posta
                </h3>
                <p className="mt-1 break-all text-sm text-ink-500">
                  {site.email}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-clay-700">
                  Mail Gönder →
                </span>
              </a>

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl bg-white p-6 ring-1 ring-sand-200 transition-all hover:-translate-y-0.5"
              >
                <MapPin className="h-7 w-7 text-clay-600" />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
                  Ofis Adresi
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  {site.address.street}, {site.address.district}/
                  {site.address.city}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-clay-700">
                  Haritada Aç →
                </span>
              </a>
            </div>

            <div className="mt-6 rounded-3xl bg-night-950 p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                <Clock className="h-5 w-5 text-ember-300" />
                Çalışma Saatleri
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-sand-300">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="font-semibold text-white">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-sand-300/80">
                Sezon yoğunluğunda WhatsApp mesajlarına gece geç saatlere kadar
                dönüş yapıyoruz.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Formla yaz
            </h2>
            <div className="divider-ember mt-3" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
