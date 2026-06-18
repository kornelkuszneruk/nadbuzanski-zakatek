import Image from "next/image";
import FadeIn from "./FadeIn";

const amenities = [
  {
    emoji: "🏞️",
    title: "Dwa stawy",
    desc: "Staw z karpiami koi do karmienia oraz staw wędkarski dla miłośników wędkarstwa",
    image: "/atrakcje/IMG_0070.jpg",
  },
  {
    emoji: "🐟",
    title: "Karpie koi",
    desc: "Kolorowe karpie koi w przydomowym stawie — atrakcja dla całej rodziny",
    image: "/atrakcje/IMG_0323_SnapseedCopy.jpg",
  },
  {
    emoji: "🎣",
    title: "Wędkarstwo",
    desc: "Zadbany staw wędkarski dostępny wyłącznie dla gości obiektu",
    image: "/atrakcje/IMG_1972.jpg",
  },
  {
    emoji: "🌿",
    title: "Duży taras",
    desc: "Przestronny taras z meblami ogrodowymi i widokiem na stawy",
    image: "/gallery/IMG_9989.jpg",
  },
  {
    emoji: "🔥",
    title: "Grill gazowy",
    desc: "Profesjonalny grill gazowy gotowy do użycia przez cały sezon",
    image: "/atrakcje/IMG_9983_SnapseedCopy.jpg",
  },
  {
    emoji: "🛌",
    title: "Hamaki",
    desc: "Hamaki rozciągnięte w zacienionym ogrodzie — idealne na drzemkę",
    image: "/gallery/IMG_9993.jpg",
  },
  {
    emoji: "☀️",
    title: "Leżaki",
    desc: "Wygodne leżaki nad stawem do kąpieli słonecznych i relaksu",
    image: "/atrakcje/IMG_0003.jpg",
  },
  {
    emoji: "🪵",
    title: "Wędzarnia",
    desc: "Tradycyjna wędzarnia do przygotowania własnych wędlin i ryb",
    image: "/atrakcje/IMG_8751.jpg",
  },
  {
    emoji: "🔥",
    title: "Palenisko",
    desc: "Własne palenisko i miejsce na ognisko — idealne na wieczory pod gwiazdami",
    image: "/atrakcje/IMG_0336_SnapseedCopy.jpg",
  },
  {
    emoji: "🪁",
    title: "Huśtawka",
    desc: "Drewniana huśtawka ogrodowa dla dzieci i dorosłych",
    image: "/atrakcje/IMG_0007.jpg",
  },
  {
    emoji: "🍎",
    title: "Owocowy sad",
    desc: "Przydomowy sad z drzewami i krzewami owocowymi — brzoskwinie, morele, czereśnie, agrest, borówki i wiele wiele innych",
    image: "/atrakcje/IMG_4825_SnapseedCopy.jpg",
  },
  {
    emoji: "🍄",
    title: "Grzybobranie",
    desc: "Okoliczne lasy obfitują w grzyby — jesienne wyprawy z koszykiem to jedna z największych atrakcji regionu",
    image: "/atrakcje/IMG_3122.jpg",
  },
  {
    emoji: "🏸",
    title: "Badminton",
    desc: "Siatka do badmintona na świeżym powietrzu — świetna zabawa dla całej rodziny",
    image: "/atrakcje/badminton.jpg",
  },
  {
    emoji: "🌲",
    title: "Cisza i natura",
    desc: "Odizolowane położenie w Dolinie Bugu gwarantuje absolutny spokój",
    image: "/atrakcje/IMG_4899.jpg",
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
              <div className="group relative rounded-2xl overflow-hidden h-52 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl cursor-default">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-forest/10" />
                <div className="relative z-10 p-5 flex flex-col justify-end h-full">
                  <span className="text-2xl mb-2 block">{a.emoji}</span>
                  <h3 className="font-medium text-cream text-base mb-1">
                    {a.title}
                  </h3>
                  <p className="text-cream/65 text-xs leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
