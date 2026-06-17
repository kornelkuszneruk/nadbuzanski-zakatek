import FadeIn from "./FadeIn";
import PhotoGrid from "./PhotoGrid";
import type { Photo } from "./PhotoGrid";

const interior: Photo[] = [
  { src: "/gallery/IMG_9860.jpg", alt: "Salon z schodami na antresolę", label: "Salon", rowSpan: true },
  { src: "/gallery/IMG_9858_SnapseedCopy.jpg", alt: "Salon z lampą i kwiatami", label: "Wypoczynek" },
  { src: "/gallery/IMG_9879.jpg", alt: "Salon z drzwiami na taras", label: "Wyjście na taras" },
  { src: "/gallery/IMG_9862.jpg", alt: "W pełni wyposażona kuchnia", label: "Kuchnia" },
  { src: "/gallery/IMG_9863.jpg", alt: "Kuchnia – aneks kuchenny", label: "Kuchnia" },
  { src: "/gallery/IMG_9870.jpg", alt: "Widok na schody i salon", label: "Widok piętra" },
  { src: "/gallery/IMG_9849.jpg", alt: "Nowoczesna łazienka", label: "Łazienka" },
  { src: "/gallery/IMG_9851.jpg", alt: "Łazienka z prysznicem", label: "Łazienka" },
  { src: "/gallery/IMG_9866.jpg", alt: "Sofa z kwiatami w salonie", label: "Salon – sofa" },
  { src: "/gallery/IMG_9865.jpg", alt: "Stół jadalny z kwiatami", label: "Jadalnia" },
  { src: "/gallery/IMG_9836.jpg", alt: "Przytulna antresola z fotelem i lampą", label: "Antresola", rowSpan: true },
  { src: "/gallery/IMG_9835.jpg", alt: "Sypialnia na antresoli", label: "Sypialnia" },
  { src: "/gallery/IMG_9824.jpg", alt: "Sypialnia z podwójnym łóżkiem", label: "Sypialnia" },
  { src: "/gallery/IMG_9840.jpg", alt: "Sypialnia z oknem na ogród", label: "Sypialnia" },
  { src: "/gallery/IMG_9817.jpg", alt: "Sypialnia jednoosobowa na antresoli", label: "Sypialnia" },
  { src: "/gallery/IMG_9873.jpg", alt: "Schody na antresolę", label: "Schody" },
  { src: "/gallery/IMG_9874.jpg", alt: "Widok antresoli z góry", label: "Antresola – widok" },
  { src: "/gallery/IMG_9814.jpg", alt: "Antresola z widokiem na salon", label: "Antresola" },
];

const exterior: Photo[] = [
  { src: "/gallery/IMG_9961.jpg", alt: "Drewniany domek od zewnątrz", label: "Domek" },
  { src: "/gallery/IMG_9951.jpg", alt: "Taras z fotelami ogrodowymi", label: "Taras" },
  { src: "/gallery/IMG_9989.jpg", alt: "Taras z parasolem i bujną zielenią", label: "Taras letni" },
  { src: "/gallery/IMG_9993.jpg", alt: "Hamaki i leżaki w ogrodzie", label: "Strefa relaksu" },
  { src: "/gallery/IMG_9996.jpg", alt: "Hamaki wśród zieleni", label: "Hamaki" },
  { src: "/gallery/IMG_9978.jpg", alt: "Grill gazowy na tarasie", label: "Grill gazowy" },
  { src: "/gallery/IMG_9882.jpg", alt: "Ogród z kwiatami i meblami", label: "Ogród" },
  { src: "/gallery/IMG_9954.jpg", alt: "Widok z tarasu na ogród z hamakami", label: "Widok z tarasu" },
  { src: "/gallery/IMG_0129.jpg", alt: "Ogród ze stołem i parasolem", label: "Ogród – relaks" },
  { src: "/gallery/IMG_0127.jpg", alt: "Drewniana wędzarnia", label: "Wędzarnia" },
  { src: "/gallery/IMG_0092.jpg", alt: "Staw wędkarski z pomostem i lasem", label: "Staw wędkarski" },
  { src: "/gallery/IMG_0042.jpg", alt: "Staw wędkarski o zachodzie słońca", label: "Wędkarstwo" },
  { src: "/gallery/IMG_0069.jpg", alt: "Panorama stawu z liliami wodnymi", label: "Panorama stawu" },
  { src: "/gallery/IMG_0102.jpg", alt: "Staw z malowniczą wysepką", label: "Staw z wysepką" },
  { src: "/gallery/IMG_0111.jpg", alt: "Lilie wodne na stawie koi", label: "Lilie wodne" },
  { src: "/gallery/IMG_0218.jpg", alt: "Karpie koi pośród lilii wodnych", label: "Karpie koi" },
  { src: "/gallery/IMG_0006.jpg", alt: "Hamak między drzewami w ogrodzie", label: "Hamak" },
];

const night: Photo[] = [
  { src: "/noc/IMG_0035.jpg", alt: "Domek nocą pod gwiazdami", label: "Pod gwiazdami" },
  { src: "/noc/IMG_0024.jpg", alt: "Domek nocą od zewnątrz", label: "Domek nocą" },
  { src: "/noc/IMG_0031.jpg", alt: "Ogród nocą z hamakami i lampkami", label: "Ogród nocą" },
  { src: "/noc/IMG_0015.jpg", alt: "Taras nocą z lampkami", label: "Taras nocą" },
];

const winter: Photo[] = [
  { src: "/zima/IMG_6788.jpg", alt: "Domek zimą nocą wśród ośnieżonych drzew", label: "Zimowy wieczór" },
  { src: "/zima/IMG_6803.jpg", alt: "Domek pokryty śniegiem nocą", label: "Domek w śniegu" },
  { src: "/zima/IMG_6807.jpg", alt: "Domek zimą z oświetleniem", label: "Zimowa noc" },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mt-10 mb-5">
      <span className="text-forest font-medium text-sm tracking-wide">{label}</span>
      <div className="flex-1 h-px bg-linen" />
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
              Kliknij dowolne zdjęcie, aby zobaczyć je w pełnym formacie
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <SectionLabel label="Wnętrze" />
          <PhotoGrid photos={interior} />
        </FadeIn>

        <FadeIn delay={100}>
          <SectionLabel label="Działka i otoczenie" />
          <PhotoGrid photos={exterior} />
        </FadeIn>

        <FadeIn delay={120}>
          <SectionLabel label="Domek nocą" />
          <PhotoGrid photos={night} />
        </FadeIn>

        <FadeIn delay={140}>
          <SectionLabel label="Zimowa pora" />
          <PhotoGrid photos={winter} />
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
