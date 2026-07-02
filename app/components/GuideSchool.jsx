"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

const stages = [
  {
    num: "01",
    title: "Formación integral",
    duration: "8 meses",
    body: "Fundamentos técnicos, física de montaña y primeros auxilios avanzados en terreno real.",
    image: "/images/fitzroy-approach.jpg",
    height: "clamp(100px, 16vh, 200px)",
  },
  {
    num: "02",
    title: "Prácticas en terreno",
    duration: "6 salidas",
    body: "Progresión en hielo, roca y mixto con supervisión directa de guías UIAGM certificados.",
    image: "/images/rope-team.jpg",
    height: "clamp(140px, 22vh, 280px)",
  },
  {
    num: "03",
    title: "Evaluación UIAGM",
    duration: "3 semanas",
    body: "Examen internacional bajo estándar IFMGA. Protocolo sin excepciones.",
    image: "/images/ridge-walk.jpg",
    height: "clamp(180px, 28vh, 360px)",
  },
  {
    num: "04",
    title: "Salida laboral",
    duration: "Temporada completa",
    body: "Integración al equipo Cúspide con acompañamiento y asignación de expediciones reales.",
    image: "/images/summit-clouds.jpg",
    height: "clamp(220px, 34vh, 440px)",
  },
];

const maxStageHeight = stages[stages.length - 1].height;

export default function GuideSchool() {
  const [active, setActive] = useState(null);

  return (
    <section id="escuela-de-guias" className="text-bone">
      {/* Header */}
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-10 md:pt-20 lg:px-16">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet-light">
                Escuela de Guías
              </p>
              <h2 className="mt-3 font-display text-2xl uppercase leading-[0.95] text-ink sm:text-3xl">
                Formamos guías con
                <br />
                criterio y experiencia.
              </h2>
            </div>
            <a
              href="#newsletter"
              className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.16em] text-stone transition hover:text-violet-light"
            >
              Más información →
            </a>
          </div>
        </div>
      </Reveal>

      {/* Mobile: acordeón vertical — Desktop: paneles en escalera */}
      <div className="flex h-[65vh] min-h-140 flex-col gap-2 px-6 pb-10 sm:h-auto sm:min-h-0 sm:flex-row sm:items-end sm:gap-[3px] sm:pb-0 md:px-10 lg:px-16">
        {stages.map((stage, i) => {
          const isActive = active === i;
          return (
            <div
              key={stage.num}
              style={{
                "--stage-h": stage.height,
                "--max-h": maxStageHeight,
                ...(isActive ? { height: "var(--max-h)" } : {}),
              }}
              onClick={() => setActive(isActive ? null : i)}
              className={`group relative cursor-pointer overflow-hidden transition-[flex-grow,height] duration-300 ease-out sm:h-(--stage-h) sm:flex-1 sm:hover:h-(--max-h) ${
                isActive ? "flex-[3]" : "flex-1"
              }`}
            >
              {/* Imagen */}
              <Parallax strength={0.06}>
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={`object-cover transition-all duration-500 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105 ${
                    isActive ? "grayscale-0 brightness-90 scale-105" : ""
                  }`}
                />
              </Parallax>

              {/* Overlay base — siempre oscuro */}
              <div className="absolute inset-0 bg-ink/40" />
              {/* Overlay hover — gradiente fuerte para leer el texto */}
              <div
                className={`absolute inset-0 bg-linear-to-t from-ink/90 via-ink/50 to-ink/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  isActive ? "opacity-100" : ""
                }`}
              />

              {/* Número */}
              <div
                className={`absolute left-4 top-4 font-display text-2xl leading-none text-bone/35 transition-colors duration-300 group-hover:text-bone/20 sm:text-4xl ${
                  isActive ? "text-bone/20" : ""
                }`}
              >
                {stage.num}
              </div>

              {/* Línea izquierda */}
              <span
                className={`absolute left-0 top-0 h-full w-0.5 bg-violet-light opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  isActive ? "opacity-100" : ""
                }`}
              />

              {/* Título (estado normal): horizontal en mobile, vertical rotado en desktop */}
              <div
                className={`absolute inset-x-0 bottom-0 flex items-center justify-center px-4 py-3 transition-opacity duration-200 group-hover:opacity-0 sm:bottom-5 sm:py-0 ${
                  isActive ? "opacity-0" : ""
                }`}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-bone/70 sm:rotate-180 sm:text-[9px] sm:tracking-[0.18em] sm:text-bone/60 sm:[writing-mode:vertical-rl]">
                  {stage.title}
                </p>
              </div>

              {/* Contenido expandido */}
              <div
                className={`absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
                  isActive ? "translate-y-0 opacity-100" : ""
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-violet-light sm:text-[10px]">
                  {stage.duration}
                </p>
                <h3 className="mt-1.5 font-display text-xl uppercase leading-[0.95] text-bone sm:text-lg">
                  {stage.title}
                </h3>
                <span className="mt-2.5 block h-px w-7 bg-violet-light" />
                <p className="mt-2.5 font-mono text-xs leading-relaxed text-bone/60 sm:text-[10px]">
                  {stage.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Línea base — solo desktop */}
      <div className="mx-6 hidden border-t border-dashed border-violet/25 sm:block md:mx-10 lg:mx-16" />
      <div className="hidden gap-0.75 px-6 pb-10 sm:flex md:px-10 lg:px-16">
        {stages.map((stage) => (
          <div key={stage.num} className="flex-1 pt-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-bone/30">
              {stage.num}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
