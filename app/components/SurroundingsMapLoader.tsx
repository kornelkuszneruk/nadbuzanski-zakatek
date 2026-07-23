"use client";

import dynamic from "next/dynamic";

const SurroundingsMap = dynamic(() => import("./SurroundingsMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] rounded-3xl bg-forest/20 border border-cream/10 flex items-center justify-center">
      <p className="text-cream/40 text-sm">Ładowanie mapy…</p>
    </div>
  ),
});

export default function SurroundingsMapLoader() {
  return <SurroundingsMap />;
}
