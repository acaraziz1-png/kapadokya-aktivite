import Link from "next/link";
import { Balloon, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-night-950 py-24">
      <div className="container-page relative z-10 text-center">
        <Balloon className="animate-balloon mx-auto h-14 w-14 text-ember-300" />
        <p className="mt-6 font-display text-7xl font-bold text-white sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
          Bu vadi yolu bir yere çıkmıyor
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sand-300">
          Aradığın sayfa taşınmış ya da hiç var olmamış olabilir. Balonlar
          beklerken seni ana sayfaya bırakalım.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-ember-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </section>
  );
}
