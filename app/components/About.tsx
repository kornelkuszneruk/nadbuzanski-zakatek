import Image from "next/image";
import FadeIn from "./FadeIn";

const highlights = [
  {
    emoji: "🪵",
    title: "Drewniany domek",
    body: "Tradycyjna architektura drewniana otoczona ciszą i zielenią",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Do 7 osób",
    body: "Przestronny obiekt idealny dla rodziny lub grupy przyjaciół",
  },
  {
    emoji: "🎣",
    title: "Dwa stawy",
    body: "Staw z karpiami koi do karmienia oraz staw wędkarski dla miłośników wędkarstwa",
  },
  {
    emoji: "🌊",
    title: "Rzeka Bug",
    body: "Malownicza rzeka Bug w niedalekim sąsiedztwie obiektu",
  },
  {
    emoji: "🚲",
    title: "Green Velo",
    body: "Słynny szlak rowerowy Green Velo przebiega w pobliżu — jedna z najpiękniejszych tras w Polsce",
  },
  {
    emoji: "🔥",
    title: "Wieczory przy ognisku",
    body: "Palenisko, grill i gwiazdy nad głową.",
  },
];

export default function About() {
  return (
    <section id="o-obiekcie" className="py-24 md:py-36 bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
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
                Witaj w Nadbużańskim Zakątku – wyjątkowym miejscu położonym w sercu Polesia
                Lubelskiego, gdzie natura, cisza i tradycyjny klimat tworzą idealne warunki
                do odpoczynku. Drewniany domek usytuowany na niemal hektarowej, prywatnej
                działce pozwala oderwać się od codziennego pośpiechu i zanurzyć w świecie
                spokoju, śpiewu ptaków oraz nieskażonej przyrody.
              </p>
              <p className="text-forest/60 text-lg leading-relaxed mb-5">
                Wnętrze domku zachwyca ciepłem naturalnego drewna i starannie dobranymi
                detalami inspirowanymi folklorem regionu. Drewniane wykończenia, przytulne
                dodatki oraz boho-folkowy charakter wnętrz tworzą niepowtarzalny klimat,
                dzięki któremu od pierwszej chwili można poczuć się jak w prawdziwej
                nadbużańskiej przystani.
              </p>
              <p className="text-forest/60 text-lg leading-relaxed mb-5">
                Domek komfortowo pomieści do 7 osób. Do dyspozycji gości oddajemy
                przestronny taras z grillem gazowym, hamaki, leżaki, huśtawkę, miejsce na
                ognisko, palenisko oraz tradycyjną wędzarnię. To idealna przestrzeń do
                wspólnego biesiadowania, relaksu i celebrowania chwil spędzonych z rodziną
                lub przyjaciółmi.
              </p>
              <p className="text-forest/60 text-lg leading-relaxed mb-10">
                Na terenie posesji znajdują się dwa stawy. W jednym pływają zachwycające
                kolorami karpie koi, które można obserwować i karmić. Drugi staw
                przeznaczony jest dla miłośników wędkowania. Dodatkową atrakcją jest sad
                pełen drzew i krzewów owocowych, z którego w sezonie można zrywać świeże
                owoce prosto z gałęzi.
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
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-sage flex items-center justify-center shadow-lg shadow-sage/30">
                <span className="text-cream text-[10px] font-bold uppercase tracking-wide text-center leading-tight px-2">
                  Nad<br />Bugiem
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Additional paragraphs — full width */}
        <div className="mt-16 max-w-3xl space-y-5">
          <FadeIn delay={80}>
            <p className="text-forest/60 text-lg leading-relaxed">
              Okolica zachwyca bogactwem przyrody i daje niemal nieograniczone możliwości
              aktywnego wypoczynku. W pobliżu przebiega słynny szlak rowerowy Green Velo,
              uznawany za jedną z najpiękniejszych tras rowerowych w Polsce. Malownicze
              drogi prowadzą przez lasy, nadbużańskie łąki i urokliwe wsie, zachęcając do
              rodzinnych wycieczek rowerowych oraz odkrywania niezwykłych zakątków regionu.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-forest/60 text-lg leading-relaxed">
              Miłośnicy spacerów i grzybobrania znajdą tu prawdziwy raj. Otaczające domek
              lasy obfitują w grzyby, a jesienne wyprawy z koszykiem są jedną z największych
              atrakcji tej części Lubelszczyzny. Bliskość dzikiej doliny Bugu sprawia
              również, że często można spotkać rzadkie gatunki ptaków i podziwiać
              nieskażoną przyrodę.
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="text-forest/60 text-lg leading-relaxed">
              Niedaleko znajduje się również popularne jezioro Białe w Okunince, słynące
              z krystalicznie czystej wody, piaszczystych plaż i licznych atrakcji
              turystycznych. To doskonałe miejsce na jednodniową wycieczkę, kąpiel, sporty
              wodne lub rodzinny spacer nad brzegiem jeziora.
            </p>
          </FadeIn>
          <FadeIn delay={140}>
            <p className="text-forest/60 text-lg leading-relaxed">
              Nadbużański Zakątek to więcej niż nocleg. To miejsce, gdzie czas płynie
              wolniej, poranki pachną lasem, wieczory rozświetla blask ogniska, a każdy
              dzień pozwala na nowo odkrywać uroki natury i prawdziwego odpoczynku.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
