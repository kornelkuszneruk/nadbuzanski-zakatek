"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export type Photo = { src: string; alt: string; label: string; rowSpan?: boolean };

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    [photos.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null)),
    [photos.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        style={{ gridAutoRows: "185px" }}
      >
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={`group relative overflow-hidden rounded-xl cursor-zoom-in${photo.rowSpan ? " row-span-2" : ""}`}
            onClick={() => setLightbox(i)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-all duration-300 flex items-end p-3">
              <span className="text-cream text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 leading-snug">
                {photo.label}
              </span>
            </div>
            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-colors z-10"
            aria-label="Poprzednie"
          >
            ‹
          </button>

          <div
            className="px-16 md:px-24 max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "85vh",
                display: "block",
                margin: "0 auto",
              }}
              className="rounded-xl shadow-2xl"
            />
            <p className="text-white/50 text-xs mt-4 tracking-wide">
              {photos[lightbox].label} &nbsp;·&nbsp; {lightbox + 1} / {photos.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-colors z-10"
            aria-label="Następne"
          >
            ›
          </button>

          <button
            onClick={close}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg transition-colors"
            aria-label="Zamknij"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
