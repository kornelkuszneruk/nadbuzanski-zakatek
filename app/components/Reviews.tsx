import FadeIn from "./FadeIn";

const reviews = [
  {
    text: "Przepiękne i spokojne miejsce na wypoczynek. Domek bardzo zadbany, czysty i dobrze wyposażony. Wokół cisza, lasy, stawy i bliskość Bugu, dzięki czemu można naprawdę odpocząć od codziennego zgiełku. Idealne miejsce na relaks, spacery i kontakt z naturą. Gospodarze bardzo mili i pomocni. Zdecydowanie polecam i chętnie wrócę ponownie!",
    author: "Agnieszka Pich",
    source: "Google",
  },
  {
    text: "Byłem w tym miejscu z przyjaciółmi, niesamowite magiczne miejsce piękny domek ogromny teren właściciel przecudowny człowiek o wielkim sercu. Idealne miejsce na wypoczynek bardzo polecam.",
    author: "Maciej Łęczycki",
    source: "Google",
  },
  {
    text: "Piękne miejsce, natura, cisza w komfortowych warunkach. Właściciele: młodzi, kreatywni ludzie. Bardzo mili, potrafią we wszystkim pomóc i wszystko zorganizować. Polecam każdemu. Na pewno tam wrócę.",
    author: "Dorota Pieniążek",
    source: "Google",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Opinie gości
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Co mówią nasi <em className="italic text-sage">goście?</em>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="flex flex-col bg-sand rounded-2xl p-8 border border-linen">
                <Stars />
                <blockquote className="text-forest/70 text-base leading-relaxed flex-1 mb-6">
                  „{r.text}"
                </blockquote>
                <div className="flex items-center justify-between border-t border-linen pt-4">
                  <p className="text-forest font-medium text-sm">{r.author}</p>
                  <span className="flex items-center gap-1.5 text-forest/40 text-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    {r.source}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={150}>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/search/Nadbużański+Zakątek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-forest/40 hover:text-forest/70 text-xs tracking-wide transition-colors duration-200"
            >
              Zobacz opinie na Google
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
