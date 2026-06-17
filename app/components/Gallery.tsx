import Image from "next/image";
import FadeIn from "./FadeIn";

const interior = [
  // Row 1-2: Salon (row-span-2 anchor)
  { src: "/gallery/IMG_9860.jpg", alt: "Salon z schodami na antresolę", label: "Salon", span: "row-span-2" },
  { src: "/gallery/IMG_9858_SnapseedCopy.jpg", alt: "Salon z lampą i kwiatami", label: "Wypoczynek", span: "" },
  { src: "/gallery/IMG_9879.jpg", alt: "Salon z drzwiami na taras", label: "Wyjście na taras", span: "" },
  // Row 2 cont:
  { src: "/gallery/IMG_9862.jpg", alt: "W pełni wyposażona kuchnia", label: "Kuchnia", span: "" },
  { src: "/gallery/IMG_9863.jpg", alt: "Kuchnia – aneks kuchenny", label: "Kuchnia", span: "" },
  // Row 3:
  { src: "/gallery/IMG_9870.jpg", alt: "Widok na schody i salon", label: "Widok piętra", span: "col-span-2" },
  { src: "/gallery/IMG_9849.jpg", alt: "Nowoczesna łazienka", label: "Łazienka", span: "" },
  // Row 4:
  { src: "/gallery/IMG_9851.jpg", alt: "Łazienka z prysznicem", label: "Łazienka", span: "" },
  { src: "/gallery/IMG_9866.jpg", alt: "Sofa z kwiatami w salonie", label: "Salon – sofa", span: "" },
  { src: "/gallery/IMG_9865.jpg", alt: "Stół jadalny z kwiatami", label: "Jadalnia", span: "" },
  // Row 5-6: Antresola (row-span-2 anchor)
  { src: "/gallery/IMG_9836.jpg", alt: "Przytulna antresola z fotelem i lampą", label: "Antresola", span: "row-span-2" },
  { src: "/gallery/IMG_9835.jpg", alt: "Sypialnia na antresoli", label: "Sypialnia", span: "" },
  { src: "/gallery/IMG_9824.jpg", alt: "Sypialnia z podwójnym łóżkiem", label: "Sypialnia", span: "" },
  // Row 6 cont:
  { src: "/gallery/IMG_9840.jpg", alt: "Sypialnia z oknem na ogród", label: "Sypialnia", span: "" },
  { src: "/gallery/IMG_9873.jpg", alt: "Schody na antresolę", label: "Schody", span: "" },
  // Row 7:
  { src: "/gallery/IMG_9874.jpg", alt: "Widok antresoli z góry", label: "Antresola – widok", span: "col-span-2" },
  { src: "/gallery/IMG_9814.jpg", alt: "Antresola z widokiem na salon", label: "Antresola", span: "" },
];

const exterior = [
  // Row 1-2: Domek (row-span-2 anchor)
  { src: "/gallery/IMG_9961.jpg", alt: "Drewniany domek od zewnątrz", label: "Domek", span: "row-span-2" },
  { src: "/gallery/IMG_9951.jpg", alt: "Taras z fotelami ogrodowymi", label: "Taras", span: "" },
  { src: "/gallery/IMG_9989.jpg", alt: "Taras z parasolem i bujną zielenią", label: "Taras letni", span: "" },
  // Row 2 cont:
  { src: "/gallery/IMG_9993.jpg", alt: "Hamaki i leżaki w ogrodzie", label: "Strefa relaksu", span: "" },
  { src: "/gallery/IMG_9996.jpg", alt: "Hamaki wśród zieleni", label: "Hamaki", span: "" },
  // Row 3:
  { src: "/gallery/IMG_9978.jpg", alt: "Grill gazowy na tarasie", label: "Grill gazowy", span: "col-span-2" },
  { src: "/gallery/IMG_9882.jpg", alt: "Ogród z kwiatami i meblami", label: "Ogród", span: "" },
  // Row 4:
  { src: "/gallery/IMG_9954.jpg", alt: "Widok z tarasu na ogród z hamakami", label: "Widok z tarasu", span: "" },
  { src: "/gallery/IMG_0129.jpg", alt: "Ogród ze stołem i parasolem", label: "Ogród – relaks", span: "" },
  { src: "/gallery/IMG_0127.jpg", alt: "Drewniana wędzarnia", label: "Wędzarnia", span: "" },
  // Row 5-6: Staw wędkarski (row-span-2 anchor)
  { src: "/gallery/IMG_0092.jpg", alt: "Staw wędkarski z pomostem i lasem", label: "Staw wędkarski", span: "row-span-2" },
  { src: "/gallery/IMG_0042.jpg", alt: "Staw wędkarski o zachodzie słońca", label: "Wędkarstwo", span: "" },
  { src: "/gallery/IMG_0069.jpg", alt: "Panorama stawu z liliami wodnymi", label: "Panorama stawu", span: "" },
  // Row 6 cont:
  { src: "/gallery/IMG_0102.jpg", alt: "Staw z malowniczą wysepką", label: "Staw z wysepką", span: "" },
  { src: "/gallery/IMG_0111.jpg", alt: "Lilie wodne na stawie koi", label: "Lilie wodne", span: "" },
  // Row 7:
  { src: "/gallery/IMG_0218.jpg", alt: "Karpie koi pośród lilii wodnych", label: "Karpie koi", span: "col-span-2" },
  { src: "/gallery/IMG_0006.jpg", alt: "Hamak między drzewami w ogrodzie", label: "Hamak", span: "" },
];

function PhotoGrid({ photos }: { photos: typeof interior }) {
  return (
    <div className="grid grid-cols-3 gap-4" style={{ gridAutoRows: "220px" }}>
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
          <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/45 transition-all duration-400 flex items-end p-5">
            <span className="text-cream font-medium text-sm tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {photo.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

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

        {/* Interior */}
        <FadeIn delay={80}>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-forest font-medium text-sm tracking-wide">Wnętrze</span>
            <div className="flex-1 h-px bg-linen" />
          </div>
          <PhotoGrid photos={interior} />
        </FadeIn>

        {/* Exterior */}
        <FadeIn delay={100}>
          <div className="flex items-center gap-4 mt-10 mb-5">
            <span className="text-forest font-medium text-sm tracking-wide">Działka i otoczenie</span>
            <div className="flex-1 h-px bg-linen" />
          </div>
          <PhotoGrid photos={exterior} />
        </FadeIn>

        <FadeIn delay={150}>
          <div className="text-center mt-12">
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
