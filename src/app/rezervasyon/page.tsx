import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import ReservationForm from "@/components/ReservationForm";
import JsonLd from "@/components/JsonLd";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Rezervasyon | Yerini 1 dakikada ayırt",
  description:
    "Kapadokya aktivite rezervasyonu: turu seç, tarihi yaz, 10 dakikada onay al. Şimdi ayır, sonra öde — 48 saat öncesine kadar koşulsuz iptal.",
  alternates: { canonical: "/rezervasyon" },
  openGraph: {
    title: "Rezervasyon | Kapadokya Aktivite",
    description:
      "Şimdi ayır, sonra öde. 48 saat öncesine kadar koşulsuz iptal güvencesi.",
  },
};

export default function ReservationPage() {
  const reserveSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rezervasyon",
    url: `${site.domain}/rezervasyon`,
    about: { "@id": `${site.domain}/#agency` },
  };

  return (
    <>
      <JsonLd data={reserveSchema} />

      <section className="relative overflow-hidden bg-night-950 pb-14 pt-28 lg:pb-20 lg:pt-36">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "url(/images/balon-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/70 to-night-950/85" />
        <div className="container-page relative z-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-300">
            Rezervasyon
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Yerini ayırt, gerisini bize bırak
          </h1>
          <div className="divider-ember mt-5" />
          <p className="mt-5 max-w-2xl text-lg text-sand-100/85">
            Formu doldur; seçtiğin tur için uygunluk ve en iyi fiyatı 10 dakika
            içinde WhatsApp&apos;tan bildirelim. Ödeme hiçbir şeye bağlı değil —
            onay sonrası istediğin gibi.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-sand-100/90">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-ember-300" />
              48 saat öncesine kadar koşulsuz iptal
            </span>
            <span className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-ember-300" />
              Şimdi ayır, sonra öde
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-ember-300" />
              10 dakikada onay
            </span>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Rezervasyon formu
            </h2>
            <div className="divider-ember mt-3" />
            <div className="mt-6">
              <ReservationForm tours={tours.map((t) => ({ slug: t.slug, title: t.title }))} />
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-clay-50 p-6 ring-1 ring-clay-200">
              <h3 className="font-display text-lg font-semibold text-ink-900">
                Neden şimdi ayırmalısın?
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                <li className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  Balon kovanları sezonda haftalar öncesinden doluyor.
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  Rezervasyon ücreti almıyoruz; ödeme tur günü.
                </li>
                <li className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  Planın değişirse iptal etmek 1 mesaj.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-night-950 p-6 text-center">
              <p className="text-sm text-sand-300">
                Formu doldurmak istemiyor musun?
              </p>
              <a
                href={waLink("Merhaba! Rezervasyon yapmak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href={site.phoneHref}
                className="mt-3 block text-sm font-semibold text-ember-300 hover:underline"
              >
                veya ara: {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
