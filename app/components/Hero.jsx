"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ShieldCheck, Calendar } from "lucide-react";

const FADE_MS = 500;
const FADE_LEAD = 0.80;

const credentials = [
  { icon: BadgeCheck, label: "Certificación UIAGM / IFMGA" },
  { icon: ShieldCheck, label: "Protocolos WFR" },
  { icon: Calendar, label: "18 años en terreno" },
];

export default function Hero() {
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const fadingOut = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    video.playbackRate = 0.6;

    if (prefersReduced) {
      // Mantener loop nativo sin fade
      video.loop = true;
      video.onloadeddata = () => setVideoOpacity(1);
      return;
    }

    // Fade in al cargar
    const handleLoaded = () => {
      setVideoOpacity(1);
    };

    // Fade loop: detectar cuando se acerca el fin
    const handleTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (!duration) return;

      if (!fadingOut.current && currentTime >= duration - FADE_LEAD) {
        fadingOut.current = true;
        setVideoOpacity(0);

        setTimeout(() => {
          video.currentTime = 0;
          video.play().catch(() => {});
          setVideoOpacity(1);
          fadingOut.current = false;
        }, FADE_MS);
      }
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink">
      <video
        ref={videoRef}
        src="/Hero.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/images/Hero.png"
        style={{
          transition: `opacity ${FADE_MS}ms ease`,
          opacity: videoOpacity,
        }}
        className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
      />

      {/* Overlay: degradado oscuro solo donde hay texto, centro transparente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0) 45%), " +
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 40%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 flex h-screen min-h-160 flex-col items-start justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10 md:pb-16">

          <h1 className="mt-5 font-display text-[9vw] uppercase leading-[0.82] text-bone drop-shadow-[0_12px_45px_rgba(0,0,0,0.45)] sm:text-[9vw] md:text-[6vw]">
            Cúspide
          </h1>

          <div className="mt-6 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bone sm:whitespace-nowrap sm:text-base">
              La Patagonia exige preparación. Nosotros la garantizamos.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-start gap-3">
            <a
              href="#metodologia"
              className="rounded-md border border-violet-light/45 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-light transition hover:border-violet hover:bg-violet hover:text-bone"
            >
              Conocé la metodología
            </a>

            <a
              href="#programas"
              className="rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink"
            >
              Ver programas
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-bone/15 pt-6">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/80"
                >
                  <Icon className="h-4 w-4 text-teal" strokeWidth={1.6} />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
