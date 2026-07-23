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
  { href: "/blog", label: "Blog Odkryj Okolicę" },
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

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm tracking-wide ${text} ${hover}`}>
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-1">
            <a href="https://www.instagram.com/nadbuzanski.zakatek?igsh=ejZqMzdkNnRxNWc4" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`transition-colors duration-200 hover:text-sage ${text}`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1BQWKrh7xU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`transition-colors duration-200 hover:text-sage ${text}`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
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
          <div className="flex items-center gap-4 pt-2 border-t border-linen mt-1">
            <a href="https://www.instagram.com/nadbuzanski.zakatek?igsh=ejZqMzdkNnRxNWc4" target="_blank" rel="noopener noreferrer" className="text-forest/50 hover:text-sage transition-colors flex items-center gap-2 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1BQWKrh7xU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-forest/50 hover:text-sage transition-colors flex items-center gap-2 text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
