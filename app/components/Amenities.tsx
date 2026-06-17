import FadeIn from "./FadeIn";

const amenities = [
  {
    emoji: "🏞️",
    title: "Dwa stawy",
    desc: "Staw z karpiem koi do karmienia oraz staw wędkarski dla miłośników wędkarstwa",
  },
  {
    emoji: "🐟",
    title: "Karpie koi",
    desc: "Kolorowe karpie koi w przydomowym stawie — atrakcja dla całej rodziny",
  },
  {
    emoji: "🎣",
    title: "Wędkarstwo",
    desc: "Zadbany staw wędkarski dostępny wyłącznie dla gości obiektu",
  },
  {
    emoji: "🌿",
    title: "Duży taras",
    desc: "Przestronny taras z meblami ogrodowymi i widokiem na stawy",
  },
  {
    emoji: "🔥",
    title: "Grill gazowy",
    desc: "Profesjonalny grill gazowy gotowy do użycia przez cały sezon",
  },
  {
    emoji: "🛌",
    title: "Hamaki",
    desc: "Hamaki rozciągnięte w zacienionym ogrodzie — idealne na drzemkę",
  },
  {
    emoji: "☀️",
    title: "Leżaki",
    desc: "Wygodne leżaki nad stawem do kąpieli słonecznych i relaksu",
  },
  {
    emoji: "🪵",
    title: "Wędzarnia",
    desc: "Tradycyjna wędzarnia do przygotowania własnych wędlin i ryb",
  },
  {
    emoji: "🔥",
    title: "Palenisko",
    desc: "Własne palenisko i miejsce na ognisko — idealne na wieczory pod gwiazdami",
  },
  {
    emoji: "🪁",
    title: "Huśtawka",
    desc: "Drewniana huśtawka ogrodowa dla dzieci i dorosłych",
  },
  {
    emoji: "🍎",
    title: "Owocowy sad",
    desc: "Przydomowy sad z drzewami owocowymi — jabłonie, gruszki i śliwy",
  },
  {
    emoji: "🌲",
    title: "Cisza i natura",
    desc: "Odizolowane położenie w Dolinie Bugu gwarantuje absolutny spokój",
  },
];

export default function Amenities() {
  return (
    <section id="atrakcje" className="py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Atrakcje
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Wszystko, czego{" "}
              <em className="italic text-sage">potrzebujesz</em>
            </h2>
            <p className="text-forest/50 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
              Nadbużański Zakątek oferuje bogactwo atrakcji dla gości w każdym wieku
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map((a, i) => (
            <FadeIn key={a.title} delay={i * 55}>
              <div className="group p-6 rounded-2xl bg-sand border border-linen hover:border-sage/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="text-3xl mb-4 block">{a.emoji}</span>
                <h3 className="font-medium text-forest text-base mb-2 group-hover:text-sage transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="text-forest/55 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
