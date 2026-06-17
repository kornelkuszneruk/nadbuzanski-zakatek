"use client";

import { useState, useEffect } from "react";
import type { BookedRange } from "../api/availability/route";

const MONTH_NAMES = [
  "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
];
const DAY_NAMES = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];

function dateKey(d: Date) {
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
}

function buildBookedSet(booked: BookedRange[]): Set<string> {
  const set = new Set<string>();
  for (const { start, end } of booked) {
    const s = new Date(
      parseInt(start.slice(0, 4)),
      parseInt(start.slice(4, 6)) - 1,
      parseInt(start.slice(6, 8))
    );
    const e = new Date(
      parseInt(end.slice(0, 4)),
      parseInt(end.slice(4, 6)) - 1,
      parseInt(end.slice(6, 8))
    );
    const cur = new Date(s);
    while (cur < e) {
      set.add(dateKey(cur));
      cur.setDate(cur.getDate() + 1);
    }
  }
  return set;
}

function MonthGrid({
  year,
  month,
  bookedSet,
  todayKey,
}: {
  year: number;
  month: number;
  bookedSet: Set<string>;
  todayKey: string;
}) {
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Monday-first offset
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      <p className="text-center font-serif text-forest text-base font-semibold mb-3">
        {MONTH_NAMES[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-px mb-1">
        {DAY_NAMES.map((d) => (
          <div key={d} className="text-center text-forest/35 text-[10px] font-semibold py-1 uppercase tracking-wide">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} className="aspect-square" />;

          const date = new Date(year, month, day);
          const key = dateKey(date);
          const isPast = key < todayKey;
          const isToday = key === todayKey;
          const isOccupied = !isPast && bookedSet.has(key);

          return (
            <div
              key={day}
              className={[
                "aspect-square flex items-center justify-center rounded-md text-xs transition-colors",
                isPast
                  ? "text-forest/20"
                  : isOccupied
                  ? "bg-forest text-cream/60"
                  : "text-forest hover:bg-sage/10",
                isToday ? "ring-1 ring-sage ring-offset-1" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar() {
  const [booked, setBooked] = useState<BookedRange[]>([]);
  const [configured, setConfigured] = useState(true);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch("/api/availability")
      .then((r) => r.json())
      .then((data) => {
        setBooked(data.booked ?? []);
        setConfigured(data.configured ?? false);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const now = new Date();
  const todayKey = dateKey(now);
  const bookedSet = buildBookedSet(booked);

  const months = [0, 1, 2].map((i) => {
    const d = new Date(now.getFullYear(), now.getMonth() + offset + i, 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  return (
    <div className="mt-10 rounded-3xl bg-cream p-6 md:p-8 shadow-2xl shadow-forest/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setOffset((o) => Math.max(0, o - 1))}
          disabled={offset === 0}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-linen text-forest/50 hover:text-forest hover:border-sage/40 disabled:opacity-25 disabled:cursor-not-allowed transition-all text-sm"
          aria-label="Poprzedni miesiąc"
        >
          ‹
        </button>

        <div className="flex items-center gap-5 text-xs text-forest/50">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-forest inline-block" />
            Zajęte
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded border border-sage/40 inline-block" />
            Wolne
          </span>
        </div>

        <button
          onClick={() => setOffset((o) => o + 1)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-linen text-forest/50 hover:text-forest hover:border-sage/40 transition-all text-sm"
          aria-label="Następny miesiąc"
        >
          ›
        </button>
      </div>

      {/* Calendar grid */}
      {loading ? (
        <div className="py-12 text-center text-forest/30 text-sm">
          Ładowanie kalendarza…
        </div>
      ) : !configured ? (
        <div className="py-10 text-center text-forest/40 text-sm leading-relaxed">
          Kalendarz dostępności wymaga podłączenia iCal z Booking.com.<br />
          <span className="text-xs mt-1 block">Dodaj <code className="bg-linen px-1 rounded">BOOKING_ICAL_URL</code> do pliku <code className="bg-linen px-1 rounded">.env.local</code></span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {months.map(({ year, month }) => (
            <MonthGrid
              key={`${year}-${month}`}
              year={year}
              month={month}
              bookedSet={bookedSet}
              todayKey={todayKey}
            />
          ))}
        </div>
      )}

      <p className="text-center text-forest/30 text-xs mt-6">
        Aktualność danych: synchronizacja z Booking.com co 15 minut
      </p>
    </div>
  );
}
