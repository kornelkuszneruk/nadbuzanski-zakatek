import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/hero.jpg"
        alt="Nadbużański Zakątek — domek znad stawu"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/75" />

      {/* Soft glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-meadow/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-meadow/90 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Wola Uhruska · Dolina Bugu
        </p>

        <h1
          className="font-serif font-semibold text-cream leading-[1.08] mb-6 animate-fade-up"
          style={{
            fontSize: "clamp(2.8rem, 9vw, 5.5rem)",
            animationDelay: "0.5s",
          }}
        >
          Nadbużański
          <br />
          <em className="italic text-meadow">Zakątek</em>
        </h1>

        <p
          className="text-cream/75 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Domek z&nbsp;bala dla&nbsp;7&nbsp;osób. Dwa prywatne stawy,
          cisza i&nbsp;natura nad rzeką Bug.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="#kontakt"
            className="rounded-full bg-sage text-cream px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-fern hover:shadow-2xl hover:shadow-sage/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Sprawdź dostępność
          </a>
          <a
            href="#o-obiekcie"
            className="rounded-full border border-cream/35 text-cream/90 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-cream/10 hover:border-cream/60"
          >
            Poznaj zakątek ↓
          </a>
        </div>

        {/* Feature tags */}
        <div
          className="mt-14 flex flex-wrap justify-center gap-3 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          {["Do 7 osób", "Dwa stawy", "Grill gazowy", "Hamaki & leżaki", "Wędzarnia"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-cream/20 bg-cream/8 px-4 py-1.5 text-cream/70 text-xs tracking-wide backdrop-blur-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
