"use client";

import { useEffect, useRef } from "react";
import { BadgeCheck, ShieldCheck, Calendar } from "lucide-react";

const credentials = [
  { icon: BadgeCheck, label: "Certificación UIAGM / IFMGA" },
  { icon: ShieldCheck, label: "Protocolos WFR" },
  { icon: Calendar, label: "18 años en terreno" },
];

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink">
      <video
        ref={videoRef}
        src="/Hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/Hero.png"
        className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
      />

      {/* Overlays — atmospheric dissolve */}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_130%_at_100%_50%,rgba(14,13,18,0.65)_0%,rgba(14,13,18,0.0)_68%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_100%_at_0%_50%,rgba(14,13,18,0.50)_0%,rgba(14,13,18,0.0)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_30%_at_50%_0%,rgba(14,13,18,0.5)_0%,rgba(14,13,18,0.0)_100%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_35%,rgba(131,77,251,0.20),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_60%,rgba(240,225,0,0.07),transparent_30%)]" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 flex h-screen min-h-160 flex-col items-start justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:px-10 md:pb-16">

          <h1 className="mt-5 font-display text-[9vw] uppercase leading-[0.82] text-bone drop-shadow-[0_12px_45px_rgba(0,0,0,0.45)] sm:text-[9vw] md:text-[6vw]">
            Cúspide
          </h1>

          <div className="mt-6 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bone sm:whitespace-nowrap sm:text-base">
              La Patagonia exige{" "}
              <span className="text-glacier">preparación.</span> Nosotros
              la garantizamos.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-start gap-3">
            <a
              href="#metodologia"
              className="border border-glacier/45 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-glacier transition hover:border-glacier hover:bg-glacier hover:text-ink"
            >
              Conocé la metodología
            </a>

            <a
              href="#programas"
              className="bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-violet-light"
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
                  <Icon className="h-4 w-4 text-glacier" strokeWidth={1.6} />
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
