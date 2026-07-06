"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ShieldCheck, Calendar } from "lucide-react";

const PLAYBACK_RATE = 0.6;

const credentials = [
  { icon: BadgeCheck, label: "Certificación UIAGM / IFMGA" },
  { icon: ShieldCheck, label: "Protocolos WFR" },
  { icon: Calendar, label: "18 años en terreno" },
];

export default function Hero() {
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const directionRef = useRef("forward");
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    video.playbackRate = PLAYBACK_RATE;

    if (prefersReduced) {
      // Mantener loop nativo sin fade
      video.loop = true;
      video.onloadeddata = () => setVideoOpacity(1);
      return;
    }

    const handleLoaded = () => {
      setVideoOpacity(1);
    };

    const playForward = () => {
      video.play().catch(() => {
        // Reintenta una vez si el navegador rechazó el play() (p. ej. seek en curso)
        rafRef.current = requestAnimationFrame(() => video.play().catch(() => {}));
      });
    };

    // Reproduce el video hacia atrás cuadro a cuadro (no hay playbackRate negativo nativo)
    // para que el loop sea continuo (adelante → atrás) en vez de saltar de golpe al inicio.
    // Cada paso espera a que el "seeked" anterior se resuelva antes de pedir el siguiente:
    // encadenarlos por rAF sin esperar satura la cola de seeks y el video termina trabado en pausa.
    const stepReverse = (ts) => {
      if (directionRef.current !== "backward") return;
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const t = video.currentTime - dt * PLAYBACK_RATE;
      if (t <= 0) {
        directionRef.current = "forward";
        lastTsRef.current = null;
        video.currentTime = 0;
        return;
      }
      video.currentTime = t;
    };

    const handleSeeked = () => {
      if (directionRef.current === "backward") {
        rafRef.current = requestAnimationFrame(stepReverse);
      } else {
        playForward();
      }
    };

    const handleEnded = () => {
      directionRef.current = "backward";
      lastTsRef.current = null;
      rafRef.current = requestAnimationFrame(stepReverse);
    };

    // Si algo pausa el video durante la fase de avance (throttling del navegador,
    // pestaña en segundo plano, etc.), lo retomamos para que el loop nunca quede parado.
    const handlePause = () => {
      if (directionRef.current === "forward" && !video.ended) {
        playForward();
      }
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("pause", handlePause);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
          transition: "opacity 500ms ease",
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

      {/* Overlay morado sutil del lado del título, se desvanece hacia el resto */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 100%, rgba(76,29,149,0.4) 0%, rgba(76,29,149,0.3) 40%, rgba(76,29,149,0) 60%)",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 0% 100%, rgba(76,29,149,0.4) 0%, rgba(76,29,149,0.3) 40%, rgba(76,29,149,0) 60%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 flex h-screen min-h-160 flex-col items-center justify-end sm:items-start">
        <div className="mx-auto w-full max-w-7xl px-6 pb-10 text-center md:px-10 md:pb-10 sm:text-left">

          <h1 className="mt-5 font-display text-[9vw] uppercase leading-[0.82] text-bone drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] sm:text-[9vw] md:text-[6vw]">
            Cúspide
          </h1>

          <div className="mt-6 max-w-4xl sm:mx-0 mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bone sm:whitespace-nowrap sm:text-base">
              La Patagonia exige preparación. Nosotros la garantizamos.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#metodologia"
              className="hidden rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink sm:inline-flex"
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-bone/15 pt-6 sm:justify-start">
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
