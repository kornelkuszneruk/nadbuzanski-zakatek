import FadeIn from "./FadeIn";

export default function Booking() {
  return (
    <section id="rezerwacje" className="py-24 md:py-36 bg-forest">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-meadow/80 text-xs font-bold tracking-[0.3em] uppercase">
              Rezerwacje
            </span>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-semibold mt-4 mb-6 leading-tight">
              Zarezerwuj swój <em className="italic text-meadow">pobyt</em>
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-10">
              Sprawdź dostępne terminy i zarezerwuj domek online — szybko,
              bezpiecznie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.booking.com/hotel/pl/nadbuzanski-zakatek.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#003580] text-white px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#00224f] hover:shadow-2xl hover:shadow-[#003580]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 2.4C2.2 2.4 1 3.6 1 5v14c0 1.4 1.2 2.6 2.6 2.6h16.8c1.4 0 2.6-1.2 2.6-2.6V5c0-1.4-1.2-2.6-2.6-2.6H3.6zm1.2 4.8h5.4c1.8 0 3 1.2 3 3s-1.2 3-3 3H6v3H4.8V7.2zM6 8.4v3.6h4.2c1 0 1.8-.8 1.8-1.8S11.2 8.4 10.2 8.4H6zm7.2 0h1.2v7.2h-1.2V8.4zm3 0h3.6v1.2h-3.6v1.8h3v1.2h-3v3h-1.2V8.4z" />
                </svg>
                Zarezerwuj na Booking.com
              </a>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 text-cream/85 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-cream/10 hover:border-cream/55"
              >
                Napisz do nas bezpośrednio
              </a>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-cream/40 text-xs tracking-wide">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Bezpieczna płatność online
              </span>
              <span className="hidden sm:block h-3 w-px bg-cream/20" />
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Dostępność w czasie rzeczywistym
              </span>
              <span className="hidden sm:block h-3 w-px bg-cream/20" />
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Rezerwacja telefoniczna też możliwa
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
