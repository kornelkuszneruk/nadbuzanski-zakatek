"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Czy można łowić ryby?",
    a: "Tak — na terenie posesji znajduje się duży staw wędkarski dostępny wyłącznie dla gości obiektu. Wędkowanie jest możliwe za dodatkową opłatą, którą ustalamy indywidualnie. Sprzęt wędkarski należy zabrać ze sobą.",
  },
  {
    q: "Czy obiekt jest na wyłączność?",
    a: "Tak, cała posesja — domek, stawy, taras, ogród i wszystkie atrakcje — jest oddana wyłącznie do dyspozycji gości podczas pobytu. Nie ma innych turystów ani sąsiednich obiektów.",
  },
  {
    q: "Czy można przyjechać z dziećmi?",
    a: "Oczywiście! Nadbużański Zakątek to idealne miejsce dla rodzin z dziećmi. Na terenie posesji znajdują się huśtawka, hamaki, stawy z karpiami koi do karmienia oraz ogromna, ogrodzona działka, po której dzieci mogą swobodnie biegać.",
  },
  {
    q: "Czy akceptujecie zwierzęta?",
    a: "W przydomowym stawie pływają kolorowe karpie koi, które można obserwować i karmić. Niestety ze względu na dobro innych gości, w tym alergików, nie zezwalamy na przywożenie własnych zwierząt domowych.",
  },
  {
    q: "Jak daleko jest do Jeziora Białego?",
    a: "Jezioro Białe w Okunince — słynące z krystalicznie czystej wody i piaszczystych plaż — znajduje się około 20 minut jazdy samochodem. To doskonałe miejsce na jednodniową wycieczkę.",
  },
  {
    q: "Czy jest internet Wi-Fi?",
    a: "Tak, w domku dostępny jest bezprzewodowy internet Wi-Fi bez dodatkowych opłat.",
  },
  {
    q: "Czy można palić papierosy?",
    a: "Nie — na terenie całej posesji obowiązuje bezwzględny zakaz palenia papierosów, zarówno wewnątrz domku, jak i na zewnątrz. Dziękujemy za zrozumienie.",
  },
  {
    q: "Czy można rozpalić ognisko?",
    a: "Tak — na terenie posesji znajduje się wyznaczone palenisko oraz miejsce na ognisko. Wieczory przy ogniu pod gwiazdami to jeden z ulubionych momentów naszych gości.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36 bg-sand">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              FAQ
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Często zadawane <em className="italic text-sage">pytania</em>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="rounded-2xl border border-linen bg-cream overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-medium text-forest text-base">{faq.q}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-linen flex items-center justify-center text-sage transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-forest/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="text-center text-forest/40 text-sm mt-10">
            Masz inne pytanie?{" "}
            <a href="#kontakt" className="text-sage hover:text-fern transition-colors">
              Napisz do nas
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
