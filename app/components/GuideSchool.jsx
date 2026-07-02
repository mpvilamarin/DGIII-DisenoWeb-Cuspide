"use client";

import Image from "next/image";
import Reveal from "./Reveal";

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

export default function GuideSchool() {
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

      {/* Paneles en escalera — mismo ancho, suben al hover */}
      <div className="flex items-end gap-[3px] px-6 pb-0 md:px-10 lg:px-16">
        {stages.map((stage, i) => (
          <div
            key={stage.num}
            style={{ height: stage.height }}
            className="group relative flex-1 cursor-pointer overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-3"
          >
            {/* Imagen */}
            <Image
              src={stage.image}
              alt={stage.title}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-all duration-500 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
            />

            {/* Overlay base — siempre oscuro */}
            <div className="absolute inset-0 bg-ink/40" />
            {/* Overlay hover — gradiente fuerte para leer el texto */}
            <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/50 to-ink/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Número */}
            <div className="absolute left-4 top-4 font-display text-4xl leading-none text-bone/35 transition-colors duration-300 group-hover:text-bone/20">
              {stage.num}
            </div>

            {/* Línea izquierda */}
            <span className="absolute left-0 top-0 h-full w-0.5 bg-violet-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Título vertical (estado normal) */}
            <div className="absolute inset-x-0 bottom-5 flex justify-center transition-opacity duration-200 group-hover:opacity-0">
              <p className="rotate-180 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-bone/60 [writing-mode:vertical-rl]">
                {stage.title}
              </p>
            </div>

            {/* Contenido expandido (hover) */}
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-light">
                {stage.duration}
              </p>
              <h3 className="mt-1.5 font-display text-lg uppercase leading-[0.95] text-bone sm:text-xl">
                {stage.title}
              </h3>
              <span className="mt-2.5 block h-px w-7 bg-violet-light" />
              <p className="mt-2.5 font-mono text-[10px] leading-relaxed text-bone/60">
                {stage.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Línea base */}
      <div className="mx-6 border-t border-dashed border-violet/25 md:mx-10 lg:mx-16" />
      <div className="flex gap-0.75 px-6 pb-10 md:px-10 lg:px-16">
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
