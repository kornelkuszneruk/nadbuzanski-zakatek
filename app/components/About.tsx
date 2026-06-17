import Image from "next/image";
import FadeIn from "./FadeIn";

const highlights = [
  {
    emoji: "🪵",
    title: "Domek z bala",
    body: "Tradycyjna architektura drewniana otoczona ciszą i zielenią",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Do 7 osób",
    body: "Przestronny obiekt idealny dla rodziny lub grupy przyjaciół",
  },
  {
    emoji: "🎣",
    title: "Staw wędkarski",
    body: "Prywatny staw wędkarski dostępny tylko dla gości",
  },
  {
    emoji: "🌊",
    title: "Rzeka Bug",
    body: "Malownicza rzeka Bug w bezpośrednim sąsiedztwie obiektu",
  },
];

export default function About() {
  return (
    <section id="o-obiekcie" className="py-24 md:py-36 bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
                O obiekcie
              </span>
              <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 mb-6 leading-tight">
                Twoje schronienie
                <br />
                <em className="italic text-sage">pośród natury</em>
              </h2>
              <p className="text-forest/60 text-lg leading-relaxed mb-5">
                Nadbużański Zakątek to domek z bala położony w Woli Uhruskiej,
                w sercu Polesia Lubelskiego. Prywatne otoczenie, dwa stawy i
                bliskość Bugu tworzą wyjątkowe warunki do prawdziwego wypoczynku.
              </p>
              <p className="text-forest/60 text-lg leading-relaxed mb-10">
                Obiekt mieści do 7 osób i oferuje wszystko, czego potrzeba: duży
                taras z grillem gazowym, hamaki, leżaki, a także wędzarnię. Karpie
                koi w przydomowym stawie zachwycają małych i dużych gości.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <FadeIn key={h.title} delay={i * 80}>
                  <div className="p-5 rounded-2xl bg-cream border border-linen hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                    <span className="text-2xl mb-3 block">{h.emoji}</span>
                    <p className="font-medium text-forest text-sm mb-1">{h.title}</p>
                    <p className="text-forest/50 text-xs leading-relaxed">{h.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Photo */}
          <FadeIn delay={150}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl shadow-forest/20">
                <Image
                  src="/about.jpg"
                  alt="Domek Nadbużański Zakątek od zewnątrz"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest/40 to-transparent" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-8 -left-6 rounded-2xl bg-cream p-5 shadow-xl border border-linen">
                <p className="font-serif text-4xl font-bold text-forest leading-none mb-1">2</p>
                <p className="text-forest/50 text-xs leading-snug">
                  prywatne stawy<br />z karpiem koi
                </p>
              </div>

              {/* Badge */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-sage flex items-center justify-center shadow-lg shadow-sage/30">
                <span className="text-cream text-[10px] font-bold uppercase tracking-wide text-center leading-tight px-2">
                  Nad<br />Bugiem
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
