import FadeIn from "./FadeIn";

const attractions = [
  {
    emoji: "🚲",
    title: "Green Velo",
    desc: "Jeden z najpiękniejszych szlaków rowerowych w Polsce — przebiega przez okoliczne lasy i łąki Polesia Lubelskiego.",
  },
  {
    emoji: "🌊",
    title: "Dolina Bugu",
    desc: "Dzika, nieuregulowana rzeka Bug z malowniczymi przełomami, łąkami i bogatą fauną — prawdziwy rezerwat natury.",
  },
  {
    emoji: "🏖️",
    title: "Jezioro Białe w Okunince",
    desc: "Krystalicznie czyste jezioro z piaszczystymi plażami i infrastrukturą turystyczną — idealne na jednodniową wycieczkę.",
  },
  {
    emoji: "🌿",
    title: "Sobiborski Park Krajobrazowy",
    desc: "Rozległe tereny leśne i torfowiskowe z rzadkimi gatunkami roślin i zwierząt, idealne na spacery i obserwację przyrody.",
  },
  {
    emoji: "🐢",
    title: "Rezerwat Żółwiowych Błot",
    desc: "Unikalny rezerwat przyrody chroniący żółwia błotnego — jedno z nielicznych takich miejsc w Polsce.",
  },
  {
    emoji: "🛶",
    title: "Spływy kajakowe Bugiem",
    desc: "Wielogodzinne spływy malowniczym Bugiem — spokojny nurt, dzikie brzegi i niezapomniane widoki.",
  },
];

export default function Surroundings() {
  return (
    <section className="py-24 md:py-36 bg-pine">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-meadow text-xs font-bold tracking-[0.3em] uppercase">
              Odkryj okolicę
            </span>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Atrakcje <em className="italic text-meadow">w okolicy</em>
            </h2>
            <p className="text-cream/50 text-lg mt-4 max-w-xl mx-auto">
              Nadbużański Zakątek to doskonała baza wypadowa — przyroda, aktywny wypoczynek i historia regionu w zasięgu ręki
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {attractions.map((a, i) => (
            <FadeIn key={a.title} delay={i * 60}>
              <div className="flex gap-4 p-6 rounded-2xl bg-forest/40 border border-cream/10 hover:bg-forest/60 hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-2xl flex-shrink-0 mt-0.5">{a.emoji}</span>
                <div>
                  <h3 className="text-cream font-medium text-base mb-1.5">{a.title}</h3>
                  <p className="text-cream/55 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "📍 Bug – 3 min",
              "📍 Green Velo – 5 min",
              "📍 Jezioro Białe – 20 min",
              "📍 Włodawa – 15 min",
              "📍 Sobibór – 20 min",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cream/20 bg-cream/8 px-4 py-2 text-cream/70 text-sm backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
