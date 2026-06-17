import FadeIn from "./FadeIn";
import AvailabilityCalendar from "./AvailabilityCalendar";

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
          </div>
        </FadeIn>

        {/* Availability calendar */}
        <FadeIn delay={100}>
          <AvailabilityCalendar />
        </FadeIn>
      </div>
    </section>
  );
}
