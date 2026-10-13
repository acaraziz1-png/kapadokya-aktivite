"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const ad = data.get("ad") || "Merhaba";
    const tur = data.get("konu") || "genel bilgi";
    const mesaj = data.get("mesaj") || "";

    // Statik sitede form doğrudan WhatsApp'a yönlenir; isterseniz
    // Formspree/Resend vb. entegre edilebilir.
    const text = `Merhaba! Ben ${ad}. Konu: ${tur}. ${mesaj}`;
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
    setName(String(ad));
    setTopic(String(tur));
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-200">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
          Mesajın WhatsApp&apos;a hazır{name ? `, ${name}` : ""}!
        </h3>
        <p className="mt-2 text-sm text-ink-500">
          {topic
            ? `"${topic}" konusunda`
            : "Mesajın"}{" "}
          WhatsApp&apos;a aktarıldı — gönder tuşuna bastıysan 10 dakika içinde
          dönüş alacaksın.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-ink-700 ring-1 ring-sand-300 hover:bg-sand-100"
        >
          Yeni mesaj yaz
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 sm:p-4"
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="font-display text-3xl text-on-surface">
          Bize Mesaj Gönderin
        </h2>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-secondary-fixed px-3 py-1 text-xs font-semibold text-on-secondary-fixed-variant">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          En geç 15 dk yanıt
        </span>
      </div>
      <p className="-mt-6 mb-6 text-sm text-on-surface-variant">
        Aklındaki Kapadokya seyahatini kısaca özetle; güncel balon durumları,
        vadi şartları ve uygun kontenjanlarla en uygun planı çıkaralım.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="ad"
            className="mb-1.5 block text-sm font-semibold text-ink-700"
          >
            Adın *
          </label>
          <input
            id="ad"
            name="ad"
            type="text"
            required
            placeholder="Örn. Elif"
            className="w-full rounded-xl border-0 bg-sand-100 px-4 py-3 text-sm text-ink-900 ring-1 ring-sand-300 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-clay-500"
          />
        </div>
        <div>
          <label
            htmlFor="telefon"
            className="mb-1.5 block text-sm font-semibold text-ink-700"
          >
            Telefon (opsiyonel)
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            placeholder="05.. ... .. .."
            className="w-full rounded-xl border-0 bg-sand-100 px-4 py-3 text-sm text-ink-900 ring-1 ring-sand-300 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-clay-500"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="konu"
          className="mb-1.5 block text-sm font-semibold text-ink-700"
        >
          Konu *
        </label>
        <select
          id="konu"
          name="konu"
          required
          defaultValue="Balon Turu"
          className="w-full rounded-xl border-0 bg-sand-100 px-4 py-3 text-sm text-ink-900 ring-1 ring-sand-300 focus:outline-none focus:ring-2 focus:ring-clay-500"
        >
          {[
            "Balon Turu",
            "ATV Safari",
            "At Turu",
            "Klasik Araç Turu",
            "Semazen & Türk Gecesi",
            "Genel Bilgi",
            "Özel Gün / Teklif Paketi",
          ].map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label
          htmlFor="mesaj"
          className="mb-1.5 block text-sm font-semibold text-ink-700"
        >
          Mesajın *
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={4}
          placeholder="Tarih, kişi sayısı ve merak ettiğin her şeyi yaz..."
          className="w-full resize-none rounded-xl border-0 bg-sand-100 px-4 py-3 text-sm text-ink-900 ring-1 ring-sand-300 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-clay-500"
        />
      </div>

      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold text-on-primary shadow-md transition-all hover:bg-primary-container"
      >
        <Send className="h-4.5 w-4.5" />
        Gönder (WhatsApp ile)
      </button>
      <p className="mt-3 text-center text-xs text-ink-300">
        Form, mesajını WhatsApp&apos;a hazır gönderir — bilgilerin hiçbir yerde
        saklanmaz.
      </p>
    </form>
  );
}
