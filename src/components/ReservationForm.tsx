"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function ReservationForm({
  tours,
}: {
  tours: { slug: string; title: string }[];
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text = [
      `Merhaba! Rezervasyon talebim var.`,
      ``,
      `👤 Ad: ${d.get("ad")}`,
      `📞 Telefon: ${d.get("telefon")}`,
      `🎈 Tur: ${d.get("tur")}`,
      `📅 Tarih: ${d.get("tarih")}`,
      `👥 Kişi: ${d.get("kisi")}`,
      d.get("otel") ? `🏨 Otel/Bölge: ${d.get("otel")}` : "",
      d.get("not") ? `📝 Not: ${d.get("not")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-200">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
          Talebin hazır! WhatsApp&apos;a aktardık.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          WhatsApp penceresini açıp <strong>Gönder</strong>&apos;e basman
          yeterli. Ortalama 10 dakika içinde uygunluk ve fiyat bilgisi
          gelecek.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-ink-700 ring-1 ring-sand-300 hover:bg-sand-100"
        >
          Yeni rezervasyon
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border-0 bg-sand-100 px-4 py-3 text-sm text-ink-900 ring-1 ring-sand-300 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-clay-500";
  const labelCls = "mb-1.5 block text-sm font-semibold text-ink-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sand-200 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="r-ad" className={labelCls}>
            Ad Soyad *
          </label>
          <input id="r-ad" name="ad" type="text" required placeholder="Adın" className={inputCls} />
        </div>
        <div>
          <label htmlFor="r-tel" className={labelCls}>
            Telefon *
          </label>
          <input
            id="r-tel"
            name="telefon"
            type="tel"
            required
            placeholder="05.. ... .. .."
            className={inputCls}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="r-tur" className={labelCls}>
          Hangi tur? *
        </label>
        <select id="r-tur" name="tur" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Tur seç...
          </option>
          {tours.map((t) => (
            <option key={t.slug} value={t.title}>
              {t.title}
            </option>
          ))}
          <option value="Karışık program / emin değilim">
            Karışık program / emin değilim
          </option>
        </select>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="r-tarih" className={labelCls}>
            Tarih *
          </label>
          <input id="r-tarih" name="tarih" type="date" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="r-kisi" className={labelCls}>
            Kişi sayısı *
          </label>
          <input
            id="r-kisi"
            name="kisi"
            type="number"
            min={1}
            max={40}
            required
            placeholder="2"
            className={inputCls}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="r-otel" className={labelCls}>
          Otel / Bölge (transfer için)
        </label>
        <input
          id="r-otel"
          name="otel"
          type="text"
          placeholder="Örn. Göreme, Cave Otel"
          className={inputCls}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="r-not" className={labelCls}>
          Not (opsiyonel)
        </label>
        <textarea
          id="r-not"
          name="not"
          rows={3}
          placeholder="Özel istekler, doğum günü, evlilik teklifi..."
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-clay-600 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-clay-700"
      >
        <CalendarCheck className="h-5 w-5" />
        Rezervasyon Talebi Gönder
      </button>
      <p className="mt-3 text-center text-xs text-ink-300">
        Talep, WhatsApp üzerinden bize ulaşır. Kesin rezervasyon, uygunluk
        onayından sonra olur.
      </p>
    </form>
  );
}
