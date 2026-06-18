import FadeIn from "./FadeIn";

const tiers = [
  {
    label: "2–4 noce",
    price: "od 599 zł",
    per: "/ noc",
    highlight: false,
  },
  {
    label: "5–7 nocy",
    price: "od 549 zł",
    per: "/ noc",
    highlight: true,
    badge: "Popularny",
  },
  {
    label: "7+ nocy",
    price: "wycena",
    per: "indywidualna",
    highlight: false,
  },
];

const included = [
  "W pełni wyposażony domek",
  "Dwa ręczniki dla każdego gościa",
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
            <p className="text-forest/50 text-lg mt-4">
              Minimalna długość pobytu: 2 noce
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
            {tiers.map((t) => (
              <div
                key={t.label}
                className={`relative rounded-2xl p-7 text-center transition-all duration-300 ${
                  t.highlight
                    ? "bg-pine text-cream shadow-2xl shadow-pine/30 scale-[1.03]"
                    : "bg-sand border border-linen"
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sage px-3 py-1 text-cream text-[10px] font-bold tracking-wide uppercase">
                    {t.badge}
                  </span>
                )}
                <p className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 ${t.highlight ? "text-meadow" : "text-sage"}`}>
                  {t.label}
                </p>
                <p className={`font-serif text-3xl font-semibold mb-1 ${t.highlight ? "text-cream" : "text-forest"}`}>
                  {t.price}
                </p>
                <p className={`text-sm ${t.highlight ? "text-cream/50" : "text-forest/40"}`}>
                  {t.per}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="max-w-lg mx-auto rounded-3xl bg-pine text-cream p-10 md:p-12 shadow-2xl shadow-pine/30">
            <p className="text-meadow text-xs font-semibold tracking-[0.3em] uppercase mb-6 text-center">
              W cenie zawiera się
            </p>
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
        </FadeIn>

        <FadeIn delay={160}>
          <p className="text-center text-forest/45 text-sm mt-6 leading-relaxed">
            Przy dłuższych pobytach możliwa negocjacja ceny — napisz do nas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
