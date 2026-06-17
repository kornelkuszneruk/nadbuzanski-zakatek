import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Dni powszednie",
    period: "pon – czw",
    price: "600",
    unit: "noc",
    desc: "Idealny na spontaniczny wyjazd lub pracę zdalną w otoczeniu natury",
    features: [
      "Pełne wyposażenie domku",
      "Dostęp do obu stawów",
      "Grill gazowy",
      "Hamaki i leżaki",
      "Bezpłatny parking",
    ],
    highlight: false,
  },
  {
    name: "Weekend",
    period: "pt – nd",
    price: "850",
    unit: "noc",
    desc: "Najpopularniejszy wybór — dwa lub trzy dni regeneracji w ciszy",
    features: [
      "Pełne wyposażenie domku",
      "Dostęp do obu stawów",
      "Grill gazowy",
      "Hamaki i leżaki",
      "Wędzarnia",
      "Bezpłatny parking",
    ],
    highlight: true,
  },
  {
    name: "Pełny tydzień",
    period: "7 dni",
    price: "4 500",
    unit: "tydzień",
    desc: "Najlepsza cena przy dłuższym pobycie — prawdziwy urlop",
    features: [
      "Wszystko z planu Weekend",
      "Sprzęt wędkarski w cenie",
      "Powitalna kosz wiklinowy",
      "Elastyczne godziny przyjazdu",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="cennik" className="py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Cennik
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Przejrzyste <em className="italic text-sage">ceny</em>
            </h2>
            <p className="text-forest/50 text-lg mt-4 max-w-xl mx-auto">
              Bez ukrytych opłat. Minimalna długość pobytu: 2 noce
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 100}>
              <div
                className={`relative flex flex-col rounded-3xl p-8 h-full transition-all duration-300 ${
                  plan.highlight
                    ? "bg-pine text-cream shadow-2xl shadow-pine/30 scale-105"
                    : "bg-sand border border-linen hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-sage px-4 py-1.5 text-cream text-xs font-bold tracking-wide uppercase shadow-md">
                      Najpopularniejszy
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className={`text-xs font-bold tracking-[0.25em] uppercase mb-1 ${
                      plan.highlight ? "text-meadow" : "text-sage"
                    }`}
                  >
                    {plan.period}
                  </p>
                  <h3
                    className={`font-serif text-xl font-semibold mb-4 ${
                      plan.highlight ? "text-cream" : "text-forest"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span
                      className={`font-serif text-5xl font-bold ${
                        plan.highlight ? "text-cream" : "text-forest"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        plan.highlight ? "text-meadow" : "text-pebble"
                      }`}
                    >
                      PLN / {plan.unit}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      plan.highlight ? "text-cream/65" : "text-forest/55"
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          plan.highlight ? "bg-sage/30" : "bg-sage/15"
                        }`}
                      >
                        <svg
                          className={`w-2.5 h-2.5 ${
                            plan.highlight ? "text-meadow" : "text-sage"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span
                        className={
                          plan.highlight ? "text-cream/80" : "text-forest/65"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`block text-center rounded-full py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    plan.highlight
                      ? "bg-sage text-cream hover:bg-fern hover:shadow-lg hover:shadow-sage/30"
                      : "bg-forest text-cream hover:bg-pine hover:shadow-md"
                  }`}
                >
                  Zarezerwuj
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <p className="text-center text-forest/40 text-sm mt-10">
            Ceny orientacyjne. Ostateczna wycena po ustaleniu terminu. Możliwe rabaty dla stałych gości.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
