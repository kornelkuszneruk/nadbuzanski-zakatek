"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#o-obiekcie", label: "O obiekcie" },
  { href: "#atrakcje", label: "Atrakcje" },
  { href: "#galeria", label: "Galeria" },
  { href: "#cennik", label: "Cennik" },
  { href: "#rezerwacje", label: "Kalendarz" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const text = scrolled ? "text-forest" : "text-cream";
  const hover = "hover:text-sage transition-colors duration-200";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-sand/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-24 md:h-28">
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0 -ml-4">
          <Image
            src="/logo.png"
            alt="Nadbużański Zakątek"
            width={92}
            height={92}
            className="rounded-full"
          />
          <span
            className={`font-serif text-sm md:text-base font-semibold tracking-wide leading-tight transition-colors duration-300 hidden sm:block ${text}`}
          >
            Nadbużański Zakątek
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm tracking-wide ${text} ${hover}`}>
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-2 rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-cream tracking-wide transition-all duration-300 hover:bg-fern hover:shadow-lg hover:shadow-sage/25"
          >
            Rezerwuj
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className={`md:hidden p-1 transition-colors duration-300 ${text}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-sand/98 backdrop-blur-lg border-t border-linen transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-forest/80 hover:text-sage py-2 text-base tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-cream text-center"
          >
            Rezerwuj teraz
          </a>
        </div>
      </div>
    </header>
  );
}
