import Image from "next/image";
import FadeIn from "./FadeIn";

const photos = [
  {
    src: "/gallery/IMG_9874.jpg",
    alt: "Wnętrze — antresola z drewnianymi schodami",
    label: "Wnętrze — antresola",
    span: "row-span-2",
  },
  {
    src: "/gallery/IMG_9951.jpg",
    alt: "Taras z meblami ogrodowymi",
    label: "Taras wypoczynkowy",
    span: "",
  },
  {
    src: "/gallery/IMG_9993.jpg",
    alt: "Hamaki i leżaki w ogrodzie",
    label: "Strefa relaksu",
    span: "",
  },
  {
    src: "/gallery/IMG_0092.jpg",
    alt: "Staw z pomostem i lasem sosnowym",
    label: "Staw wędkarski",
    span: "",
  },
  {
    src: "/gallery/IMG_9858_SnapseedCopy.jpg",
    alt: "Salon z kanapą i lampą",
    label: "Przytulny salon",
    span: "row-span-2",
  },
  {
    src: "/gallery/IMG_0042.jpg",
    alt: "Staw wędkarski z błękitnym niebem",
    label: "Wędkarstwo",
    span: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-36 bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Galeria
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Poczuj <em className="italic text-sage">atmosferę</em>
            </h2>
            <p className="text-forest/50 text-lg mt-4 max-w-lg mx-auto">
              Drewno, zieleń i woda — to esencja Nadbużańskiego Zakątka
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div
            className="grid grid-cols-3 gap-4"
            style={{ gridAutoRows: "220px" }}
          >
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/45 transition-all duration-400 flex items-end p-5">
                  <span className="text-cream font-medium text-sm tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="text-center mt-10">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-sage hover:text-fern font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Zainspirowany? Zarezerwuj pobyt
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
