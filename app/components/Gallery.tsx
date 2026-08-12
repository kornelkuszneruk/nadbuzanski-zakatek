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
  { src: "/gallery/IMG_1610.jpg", alt: "Gry planszowe w domku", label: "Gry planszowe" },
  { src: "/gallery/IMG_1641.jpg", alt: "PlayStation 5 i głośnik JBL", label: "PS5 & JBL" },
];

const exterior: Photo[] = [
  { src: "/gallery/IMG_1411.jpg", alt: "Domek z tarasem i parasolem", label: "Taras" },
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
  { src: "/galeria-okolicy/domek-taras-sloneczny-lato.jpg", alt: "Domek od tarasu w słoneczny letni dzień", label: "Taras latem" },
  { src: "/galeria-okolicy/domek-trzciny-lato.jpg", alt: "Domek widziany przez trzciny latem", label: "Przez trzciny" },
  { src: "/gallery/IMG_0092.jpg", alt: "Staw wędkarski z pomostem i lasem", label: "Staw wędkarski" },
  { src: "/gallery/IMG_0042.jpg", alt: "Staw wędkarski o zachodzie słońca", label: "Wędkarstwo" },
  { src: "/gallery/IMG_0069.jpg", alt: "Panorama stawu z liliami wodnymi", label: "Panorama stawu" },
  { src: "/gallery/IMG_0102.jpg", alt: "Staw z malowniczą wysepką", label: "Staw z wysepką" },
  { src: "/gallery/IMG_0111.jpg", alt: "Lilie wodne na stawie koi", label: "Lilie wodne" },
  { src: "/gallery/IMG_0218.jpg", alt: "Karpie koi pośród lilii wodnych", label: "Karpie koi" },
  { src: "/gallery/IMG_0006.jpg", alt: "Hamak między drzewami w ogrodzie", label: "Hamak" },
  { src: "/gallery/IMG_1574.jpg", alt: "Staw o świcie z mgłą i wędką", label: "Poranek nad stawem" },
  { src: "/rowery/IMG_1621.jpg", alt: "Rowery dostępne dla gości", label: "Rowery" },
];

const aerial: Photo[] = [
  { src: "/galeria-okolicy/domek-dron-taras-ogrod.jpg", alt: "Domek z drona — taras z parasolem i ogród", label: "Domek z drona", rowSpan: true },
  { src: "/galeria-okolicy/domek-dron-taras-lato.jpg", alt: "Domek z drona — taras z parasolem latem", label: "Taras z drona" },
  { src: "/galeria-okolicy/domek-dron-ogrod-lato.jpg", alt: "Domek z drona — ogród latem", label: "Ogród z drona" },
  { src: "/galeria-okolicy/domek-dron-staw-lato.jpg", alt: "Domek z drona — staw z liliami latem", label: "Staw z drona" },
  { src: "/galeria-okolicy/posesja-dron-staw-lato.jpg", alt: "Posesja z drona — domek i staw latem", label: "Posesja latem" },
  { src: "/galeria-okolicy/posesja-dron-stawy-lato2.jpg", alt: "Posesja z drona — domek wśród stawów", label: "Domek i stawy" },
  { src: "/galeria-okolicy/posesja-dron-pola-lato.jpg", alt: "Posesja z drona — panorama z polami", label: "Panorama" },
  { src: "/galeria-okolicy/stawy-dron-sierpien.jpg", alt: "Stawy rybne z drona latem", label: "Stawy z drona" },
  { src: "/galeria-okolicy/ogrod-dron-atrakcje.jpg", alt: "Ogród z drona — huśtawka, leżaki, kajaki", label: "Atrakcje ogrodu" },
  { src: "/galeria-okolicy/posesja-stawy-dron-lato.jpg", alt: "Posesja z drona — stawy i pola latem", label: "Stawy i pola" },
  { src: "/galeria-okolicy/wyspa-basen-dron.jpg", alt: "Wyspa ze stawu z basenem z drona", label: "Wyspa z basenem" },
  { src: "/galeria-okolicy/posesja-dron-sierpien-pola.jpg", alt: "Posesja z drona — sierpień", label: "Sierpień z drona" },
];

const night: Photo[] = [
  { src: "/noc/IMG_0035.jpg", alt: "Domek nocą pod gwiazdami", label: "Pod gwiazdami" },
  { src: "/noc/IMG_0024.jpg", alt: "Domek nocą od zewnątrz", label: "Domek nocą" },
  { src: "/noc/IMG_0031.jpg", alt: "Ogród nocą z hamakami i lampkami", label: "Ogród nocą" },
  { src: "/noc/IMG_0015.jpg", alt: "Taras nocą z lampkami", label: "Taras nocą" },
  { src: "/noc/IMG_1345.jpg", alt: "Ogród nocą z lampkami i hamakiem", label: "Ogród nocą" },
  { src: "/noc/IMG_1351.jpg", alt: "Tabliczka przy bramie nocą", label: "Wejście nocą" },
  { src: "/noc/IMG_1585.jpg", alt: "Staw wieczorem z odbiciem lampek", label: "Staw wieczorem" },
  { src: "/noc/IMG_1588.jpg", alt: "Domek nocą z lampkami nad stawem", label: "Lampki nad stawem" },
  { src: "/galeria-okolicy/domek-zmierzch-girlandy.jpg", alt: "Domek o zmierzchu z girlandami", label: "Zmierzch" },
  { src: "/galeria-okolicy/domek-dron-noc-girlandy2.jpg", alt: "Domek nocą z drona — girlandy", label: "Girlandy z drona" },
  { src: "/galeria-okolicy/domek-dron-noc-staw-zielony.jpg", alt: "Domek nocą z drona — zielone jacuzzi i staw", label: "Noc z drona" },
  { src: "/galeria-okolicy/domek-taras-noc-blisko.jpg", alt: "Taras domku nocą z bliska", label: "Taras nocą" },
  { src: "/galeria-okolicy/domek-dron-noc-szeroki.jpg", alt: "Domek nocą — szeroki widok z drona", label: "Noc nad okolicą", rowSpan: true },
  { src: "/galeria-okolicy/domek-gwiazdy-noc.jpg", alt: "Domek nocą pod rozgwieżdżonym niebem", label: "Gwiazdy" },
  { src: "/galeria-okolicy/domek-taras-gwiazdy-goscie.jpg", alt: "Goście na tarasie pod gwiazdami", label: "Wieczór z gośćmi" },
  { src: "/galeria-okolicy/droga-mleczna-sierpien.jpg", alt: "Droga Mleczna nad Nadbużańskim Zakątkiem", label: "Droga Mleczna" },
];

const pool: Photo[] = [
  { src: "/basen/IMG_1334.jpg", alt: "Basen ogrodowy", label: "Basen" },
  { src: "/basen/IMG_1487.jpg", alt: "Relaks w basenie", label: "Relaks w basenie" },
];

const jacuzzi: Photo[] = [
  { src: "/jaccuzzi/IMG_1340.jpg", alt: "Jacuzzi nocą", label: "Jacuzzi" },
  { src: "/jaccuzzi/IMG_1339.jpg", alt: "Jacuzzi w ogrodzie", label: "Jacuzzi" },
  { src: "/jaccuzzi/IMG_1174.jpg", alt: "Jacuzzi", label: "Jacuzzi" },
  { src: "/jaccuzzi/IMG_1178.jpg", alt: "Jacuzzi relaks", label: "Jacuzzi" },
  { src: "/jaccuzzi/IMG_1188.jpg", alt: "Jacuzzi wieczorem", label: "Jacuzzi" },
  { src: "/jaccuzzi/IMG_1333.jpg", alt: "Jacuzzi z bliska", label: "Jacuzzi" },
  { src: "/jaccuzzi/IMG_1336.jpg", alt: "Jacuzzi oświetlone", label: "Jacuzzi" },
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

        <FadeIn delay={105}>
          <SectionLabel label="Z lotu ptaka" />
          <PhotoGrid photos={aerial} />
        </FadeIn>

        <FadeIn delay={110}>
          <SectionLabel label="Jacuzzi" />
          <PhotoGrid photos={jacuzzi} />
        </FadeIn>

        <FadeIn delay={115}>
          <SectionLabel label="Basen" />
          <PhotoGrid photos={pool} />
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
              href="#rezerwacje"
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
