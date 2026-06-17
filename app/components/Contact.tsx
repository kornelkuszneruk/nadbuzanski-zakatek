"use client";

import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";

const contactInfo = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
    label: "Adres",
    value: "Uhrusk 78B, 22-230 Uhrusk",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
    label: "Telefon",
    value: "+48 515 243 511",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
    label: "E-mail",
    value: "kontakt@nadbuzan skiozakatek.pl",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    label: "Zameldowanie / wymeldowanie",
    value: "od 15:00 / do 11:00",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section id="kontakt" className="py-24 md:py-36 bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sage text-xs font-bold tracking-[0.3em] uppercase">
              Kontakt
            </span>
            <h2 className="font-serif text-forest text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Zaplanuj <em className="italic text-sage">pobyt</em>
            </h2>
            <p className="text-forest/50 text-lg mt-4 max-w-md mx-auto">
              Napisz do nas — odpiszemy w ciągu 24 godzin
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cream border border-linen flex items-center justify-center">
                      <svg
                        className="w-4.5 h-4.5 text-sage"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        {info.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-forest/40 tracking-wide uppercase mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-forest text-sm font-medium leading-snug">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-cream border border-linen">
                <p className="text-sage text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Sezon
                </p>
                <p className="font-serif text-forest text-xl font-semibold">
                  Maj – Październik
                </p>
                <p className="text-forest/50 text-sm mt-1">
                  W sezonie zimowym możliwy pobyt po uzgodnieniu
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={150}>
              {sent ? (
                <div className="rounded-3xl bg-cream border border-linen p-12 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                    <svg
                      className="w-8 h-8 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-forest text-2xl font-semibold mb-2">
                    Dziękujemy!
                  </h3>
                  <p className="text-forest/55 leading-relaxed">
                    Twoje zapytanie zostało wysłane. Odezwiemy się wkrótce.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl bg-cream border border-linen p-8 md:p-10 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-forest/50 tracking-wide uppercase mb-2">
                        Imię i nazwisko
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Jan Kowalski"
                        className="w-full rounded-xl border border-linen bg-sand px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-forest/50 tracking-wide uppercase mb-2">
                        E-mail
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jan@example.com"
                        className="w-full rounded-xl border border-linen bg-sand px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-forest/50 tracking-wide uppercase mb-2">
                        Przyjazd
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full rounded-xl border border-linen bg-sand px-4 py-3 text-sm text-forest focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-forest/50 tracking-wide uppercase mb-2">
                        Wyjazd
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full rounded-xl border border-linen bg-sand px-4 py-3 text-sm text-forest focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-forest/50 tracking-wide uppercase mb-2">
                      Liczba osób
                    </label>
                    <select
                      className="w-full rounded-xl border border-linen bg-sand px-4 py-3 text-sm text-forest focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-forest/50 tracking-wide uppercase mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Pytania, specjalne życzenia, uwagi..."
                      className="w-full rounded-xl border border-linen bg-sand px-4 py-3 text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-forest text-cream py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-pine hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Wysyłanie..." : "Wyślij zapytanie"}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
