"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ShieldCheck, Mountain } from "lucide-react";

const PLAYBACK_RATE = 0.6;

const credentials = [
  { icon: BadgeCheck, line1: "Certificación", line2: "UIAGM / IFMGA" },
  { icon: ShieldCheck, line1: "Protocolos", line2: "WFR" },
  { icon: Mountain, line1: "18 años", line2: "en terreno" },
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

      {/* Overlay principal — oscurece el lado del texto, deja la imagen clara del resto */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(8,6,18,0.75) 0%, rgba(8,6,18,0.55) 25%, rgba(8,6,18,0.2) 42%, rgba(8,6,18,0) 58%)",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, rgba(8,6,18,0.75) 0%, rgba(8,6,18,0.55) 25%, rgba(8,6,18,0.2) 42%, rgba(8,6,18,0) 58%)",
        }}
      />
      {/* Franjas superior/inferior — legibilidad del nav y los credenciales */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 22%), " +
            "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 26%)",
        }}
      />
      {/* Acento violeta sutil, solo de marca */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 0% 100%, rgba(76,29,149,0.25) 0%, rgba(76,29,149,0.1) 35%, rgba(76,29,149,0) 55%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 flex h-screen min-h-160 flex-col items-center justify-center pt-22 sm:items-start">
        <div className="mx-auto w-full max-w-7xl px-6 text-center md:px-10 sm:text-left">

          <h1 className="mt-5 font-display text-[9vw] uppercase leading-[0.82] text-bone drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] sm:text-[9vw] md:text-[6vw]">
            Cúspide
          </h1>

          <div className="mt-6 max-w-4xl sm:mx-0 mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bone sm:whitespace-nowrap sm:text-base">
              La Patagonia exige preparación. <br/> Nosotros la garantizamos.
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
              className="hidden rounded-md bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink sm:inline-flex"
            >
              Ver expediciones
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-y-5 sm:justify-start">
            {credentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.line1}
                  className={`flex items-center gap-4 px-6 first:pl-0 ${i > 0 ? "border-l border-bone/20" : ""}`}
                >
                  <Icon className="h-7 w-7 shrink-0 text-violet-light" strokeWidth={1.5} />
                  <div className="text-left">
                    <p className="font-mono text-sm font-semibold uppercase leading-tight tracking-widest text-bone">
                      {item.line1}
                    </p>
                    <p className="font-mono text-xs uppercase leading-tight tracking-widest text-bone/60">
                      {item.line2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
