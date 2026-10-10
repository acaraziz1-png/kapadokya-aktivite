import type { Metadata } from "next";
import credits from "@/image-credits.json";

export const metadata: Metadata = {
  title: "Görsel Künyeleri | Lisans ve atıf bilgileri",
  description:
    "Sitede kullanılan fotoğrafların Wikimedia Commons kaynakları, yazarları ve CC lisansları.",
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
          Görsel Künyeleri
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-700">
          Bu sitede kullanılan fotoğraflar{" "}
          <a
            href="https://commons.wikimedia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-clay-700 underline"
          >
            Wikimedia Commons
          </a>{" "}
          üzerinden Creative Commons / serbest lisanslarla alınmıştır.
          Lisanslar, çalışmanın paylaşılmasına ve atıf yapılarak kullanılmasına
          izin verir. Aşağıda her görselin kaynağı, yazarı ve lisansı yer
          alır.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-sand-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-sand-100 text-xs uppercase tracking-wider text-ink-500">
              <tr>
                <th className="px-4 py-3">Dosya</th>
                <th className="px-4 py-3">Yazar</th>
                <th className="px-4 py-3">Lisans</th>
                <th className="px-4 py-3">Kaynak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-200 bg-white">
              {credits.map(
                (c: {
                  file: string;
                  author: string;
                  license: string;
                  sourceUrl: string;
                }) => (
                  <tr key={c.file}>
                    <td className="px-4 py-3 font-medium text-ink-900">
                      {c.file}
                    </td>
                    <td className="max-w-[220px] px-4 py-3 text-ink-500">
                      {c.author.length > 60
                        ? `${c.author.slice(0, 57)}...`
                        : c.author}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="rounded-full bg-clay-50 px-2.5 py-1 text-xs font-semibold text-clay-700">
                        {c.license}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={c.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-clay-600 underline hover:text-clay-800"
                      >
                        Commons
                      </a>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
