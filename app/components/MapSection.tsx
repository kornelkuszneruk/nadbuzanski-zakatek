import FadeIn from "./FadeIn";

export default function MapSection() {
  return (
    <section id="mapa" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Dojazd
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Jak do nas <em className="italic text-sage">dotrzeć</em>
            </h2>
            <p className="text-forest/50 text-lg mt-4">
              Uhrusk 78B, 22-230 Uhrusk · przy rzece Bug
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-forest/10 border border-linen">
            <iframe
              title="Mapa — Nadbużański Zakątek, Uhrusk 78B"
              src="https://maps.google.com/maps?q=Nadbużański+Zakątek&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="block w-full"
              style={{ border: 0 }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8 grid sm:grid-cols-3 gap-5 text-center">
            {[
              { from: "Warszawa", time: "~2 h 30 min", km: "~230 km" },
              { from: "Lublin", time: "~1 h 30 min", km: "~130 km" },
              { from: "Zamość", time: "~50 min", km: "~60 km" },
            ].map((r) => (
              <div
                key={r.from}
                className="rounded-2xl bg-sand border border-linen p-5"
              >
                <p className="text-sage text-xs font-bold tracking-wide uppercase mb-1">
                  z {r.from}
                </p>
                <p className="font-serif text-forest text-2xl font-semibold mb-0.5">
                  {r.time}
                </p>
                <p className="text-forest/40 text-sm">{r.km}</p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
