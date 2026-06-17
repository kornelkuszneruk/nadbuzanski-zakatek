import FadeIn from "./FadeIn";

const included = [
  "Pełne wyposażenie domku",
  "Prawie hektar ogrodzonej działki na wyłączność",
  "Dostęp do obu stawów (wędkowanie za dodatkową opłatą)",
  "Dostęp do owoców w sadzie",
  "Grill gazowy",
  "Hamaki i leżaki",
  "Wędzarnia",
  "Palenisko i miejsce na ognisko",
  "Głośnik JBL",
  "Telewizor",
  "Internet",
  "Bezpłatny parking",
];

export default function Pricing() {
  return (
    <section id="cennik" className="py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Cennik
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Przejrzyste <em className="italic text-sage">ceny</em>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="max-w-lg mx-auto">
            <div className="rounded-3xl bg-pine text-cream p-10 md:p-12 shadow-2xl shadow-pine/30">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-meadow text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                  Cena za noc
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-serif text-7xl font-semibold text-cream">599</span>
                  <span className="text-meadow text-lg font-medium">PLN / noc</span>
                </div>
                <p className="text-cream/50 text-sm mt-3">
                  Minimalna długość pobytu: 2 noce
                </p>
              </div>

              <div className="h-px bg-cream/10 mb-8" />

              {/* Included */}
              <ul className="space-y-3 mb-10">
                {included.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage/30 flex items-center justify-center">
                      <svg className="w-3 h-3 text-meadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-cream/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="block text-center rounded-full bg-sage py-4 text-sm font-semibold text-cream tracking-wide transition-all duration-300 hover:bg-fern hover:shadow-lg hover:shadow-sage/30"
              >
                Zarezerwuj pobyt
              </a>
            </div>

            <p className="text-center text-forest/45 text-sm mt-6 leading-relaxed">
              Przy dłuższych pobytach możliwa negocjacja ceny — napisz do nas.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
