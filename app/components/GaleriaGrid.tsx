"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { GaleriaPhoto } from "@/lib/galeria-okolicy";

export default function GaleriaGrid({ photos }: { photos: GaleriaPhoto[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)), [photos.length]);
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null)), [photos.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setLightbox(i)}
            className="group relative rounded-2xl overflow-hidden bg-linen aspect-[4/3] hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-cream text-xs font-medium leading-tight">{photo.label}</p>
              {photo.location && (
                <p className="text-cream/60 text-[10px] mt-0.5">{photo.location}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-forest/95 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button onClick={close} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="px-16 w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full max-w-5xl" style={{ maxHeight: "80vh" }}>
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                width={1600}
                height={1000}
                className="rounded-xl object-contain w-full"
                style={{ maxHeight: "78vh" }}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-cream font-medium text-base">{photos[lightbox].label}</p>
              {photos[lightbox].location && (
                <p className="text-cream/50 text-sm mt-1">{photos[lightbox].location}</p>
              )}
              <p className="text-cream/30 text-xs mt-2">{lightbox + 1} / {photos.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
