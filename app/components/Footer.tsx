import Image from "next/image";

const navLinks = [
  { href: "#o-obiekcie", label: "O obiekcie" },
  { href: "#atrakcje", label: "Atrakcje" },
  { href: "#galeria", label: "Galeria" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Nadbużański Zakątek"
                width={160}
                height={160}
                className="rounded-full"
              />
              <span className="font-serif text-cream text-2xl font-semibold leading-tight">
                Nadbużański<br />Zakątek
              </span>
            </a>
            <p className="text-sm leading-relaxed text-cream/50 max-w-xs">
              Domek z bala dla 7 osób w Woli Uhruskiej. Dwa stawy, cisza i natura
              nad rzeką Bug.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-cream/40 mb-4">
              Nawigacja
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-cream/40 mb-4">
              Kontakt
            </p>
            <div className="space-y-3 text-sm">
              <p className="text-cream/60">Uhrusk 78B, 22-230 Uhrusk</p>
              <a
                href="tel:+48515243511"
                className="block text-cream/60 hover:text-cream transition-colors duration-200"
              >
                +48 515 243 511
              </a>
              <a
                href="mailto:nadbuzanskizakatek@gmail.com"
                className="block text-cream/60 hover:text-cream transition-colors duration-200"
              >
                nadbuzanskizakatek@gmail.com
              </a>
            </div>

            <a
              href="#kontakt"
              className="mt-6 inline-block rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-cream tracking-wide transition-all duration-300 hover:bg-fern hover:shadow-lg"
            >
              Rezerwuj pobyt
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} Nadbużański Zakątek. Wszelkie prawa zastrzeżone.</p>
          <p>Wola Uhruska · Dolina Bugu · Polska</p>
        </div>
      </div>
    </footer>
  );
}
