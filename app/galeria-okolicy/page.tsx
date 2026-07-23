import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import GaleriaGrid from "@/app/components/GaleriaGrid";
import { galeriaOkolicy } from "@/lib/galeria-okolicy";

export const metadata = {
  title: "Galeria Okolicy — Nadbużański Zakątek",
  description: "Zdjęcia z okolic Woli Uhruskiej — rzeka Bug, jeziora, lasy i atrakcje Polesia Lubelskiego.",
};

export default function GaleriaOkolicyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-sand">
        {/* Hero */}
        <div className="relative pt-36 pb-20 px-6 text-center overflow-hidden min-h-[340px] flex flex-col items-center justify-center">
          <Image
            src="/galeria-okolicy/bug-meandry-z-drona.jpg"
            alt="Meandry Bugu z drona"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/35 to-forest/65" />
          <div className="relative z-10">
            <span className="text-meadow text-xs font-bold tracking-[0.3em] uppercase">Galeria</span>
            <h1 className="font-serif text-cream text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Okolica <em className="italic text-meadow">w obiektywie</em>
            </h1>
            <p className="text-cream/70 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
              Rzeka Bug, jeziora, lasy i atrakcje Polesia Lubelskiego
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l-4 4m-4-4h18" />
                </svg>
                Blog
              </Link>
              <span className="text-cream/30">·</span>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors duration-200"
              >
                Strona główna
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <p className="text-forest/40 text-sm">
              {galeriaOkolicy.length} {galeriaOkolicy.length === 1 ? "zdjęcie" : "zdjęć"}
            </p>
          </div>
          <GaleriaGrid photos={galeriaOkolicy} />
        </div>
      </main>
      <Footer />
    </>
  );
}
