"use client";

import { useState } from "react";
import Image from "next/image";
import { Mountain, RefreshCw, ShieldCheck, Users, Plus } from "lucide-react";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

const stages = [
  {
    num: "01",
    title: "Formación inicial",
    short: "Bases técnicas, seguridad y liderazgo en montaña.",
    image: "/images/escuela01.png",
    imagePosition: "center 10%",
    features: [
      { icon: Mountain, label: "Técnica de base" },
      { icon: ShieldCheck, label: "Primeros auxilios" },
      { icon: Users, label: "Liderazgo en grupo" },
    ],
  },
  {
    num: "02",
    title: "Prácticas en terreno",
    short: "Progresión en hielo, roca y mixto con supervisión directa de guías UIAGM certificados.",
    image: "/images/escuela002.png",
    imagePosition: "center 20%",
    features: [
      { icon: Mountain, label: "Terreno real" },
      { icon: RefreshCw, label: "Evaluación continua" },
      { icon: ShieldCheck, label: "Estándares UIAGM" },
    ],
  },
  {
    num: "03",
    title: "Evaluación UIAGM",
    short: "Exámenes técnicos y de liderazgo según estándares internacionales.",
    image: "/images/escuela03.png",
    imagePosition: "center 5%",
    features: [
      { icon: Mountain, label: "Examen técnico" },
      { icon: ShieldCheck, label: "Estándar IFMGA" },
      { icon: Users, label: "Evaluación de liderazgo" },
    ],
  },
  {
    num: "04",
    title: "Salida laboral",
    short: "Guías formados para liderar expediciones en todo el mundo.",
    image: "/images/escuela004.png",
    imagePosition: "center 20%",
    features: [
      { icon: Mountain, label: "Expediciones reales" },
      { icon: Users, label: "Acompañamiento" },
      { icon: ShieldCheck, label: "Equipo Cúspides" },
    ],
  },
];

export default function GuideSchool() {
  const [active, setActive] = useState(null);

  return (
    <section id="escuela-de-guias" className="flex min-h-screen flex-col justify-center bg-bone py-10 text-bone md:py-12">
      {/* Header */}
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 pb-6 md:px-10 lg:px-16">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet-light">
            Escuela de Guías — 2027
          </p>

          <span className="mt-4 block h-0.5 w-12 bg-violet-light" />

          <h2 className="mt-7 font-display text-[1.75rem] uppercase leading-[0.95] text-ink sm:text-3xl md:text-4xl">
            <span className="bg-linear-to-r text-gradient-cool">
              Formación de guías con
            </span>
            <br />
            criterio y experiencia.
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-stone">
            Formación profesional basada en estándares internacionales, diseñada para preparar a la próxima generación de guías.
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <Reveal delay={80}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">
          {stages.map((stage, i) => {
            const [titleFirst, ...titleRest] = stage.title.split(" ");
            const titleSecond = titleRest.join(" ");
            const isActive = active === i;

            return (
              <div
                key={stage.num}
                onClick={() => setActive(isActive ? null : i)}
                className={`group relative flex h-72 flex-col overflow-hidden rounded-2xl transition-all duration-400 hover:z-10 hover:ring-2 hover:ring-violet hover:shadow-[0_20px_60px_rgba(124,58,237,0.35)] sm:h-88 lg:h-105 lg:hover:-translate-y-2 lg:hover:scale-[1.02] ${isActive ? "z-10 ring-2 ring-violet shadow-[0_20px_60px_rgba(124,58,237,0.35)] lg:-translate-y-2 lg:scale-[1.02]" : "ring-1 ring-ink/10"}`}
              >
                {/* Imagen */}
                <Parallax strength={0.06}>
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    quality={90}
                    style={{ objectPosition: stage.imagePosition || "center" }}
                    className={`object-cover transition-all duration-500 group-hover:scale-105 group-hover:saturate-100 ${isActive ? "scale-105 saturate-100" : "saturate-[0.55]"}`}
                  />
                </Parallax>

                {/* Overlay — solo detrás del texto, no tapa el resto de la imagen */}
                <div className={`absolute inset-0 bg-linear-to-t to-transparent transition-all duration-400 group-hover:from-ink/97 group-hover:via-ink/55 group-hover:via-55% group-hover:to-85% ${isActive ? "from-ink/97 via-ink/55 via-55% to-85%" : "from-ink/95 from-10% via-ink/25 via-45% to-70%"}`} />

                {/* Número */}
                <div className="relative z-10 p-5">
                  <p className="font-display text-2xl leading-none text-bone/85 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-3xl">
                    {stage.num}
                  </p>
                </div>

                {/* Contenido inferior */}
                <div className="relative z-10 mt-auto p-5">
                  <h3 className="font-display text-[1.4rem] uppercase leading-[0.95] text-bone drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-2xl">
                    {titleFirst}
                    {titleSecond && (
                      <>
                        <br />
                        {titleSecond}
                      </>
                    )}
                  </h3>

                  {/* Colapsado */}
                  <div className={`transition-all duration-300 group-hover:pointer-events-none group-hover:absolute group-hover:-translate-y-2 group-hover:opacity-0 ${isActive ? "pointer-events-none absolute -translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}>
                    <p className="mt-2 text-sm leading-snug text-bone/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">{stage.short}</p>
                    <span className={`mt-4 flex h-8 w-8 items-center justify-center rounded-full border transition group-hover:border-violet-light group-hover:text-violet-light ${isActive ? "border-violet-light text-violet-light" : "border-bone/40 text-bone/85"}`}>
                      <Plus className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* Expandido */}
                  <div className={`transition-all duration-300 group-hover:pointer-events-auto group-hover:static group-hover:translate-y-0 group-hover:opacity-100 ${isActive ? "pointer-events-auto static translate-y-0 opacity-100" : "pointer-events-none absolute translate-y-2 opacity-0"}`}>
                    <span className="mt-3 block h-px w-8 bg-violet-light" />
                    <div className="mt-5 space-y-2.5">
                      {stage.features.map((feature) => (
                        <div
                          key={feature.label}
                          className="flex items-center gap-2.5 text-sm text-bone/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                        >
                          <feature.icon className="h-4 w-4 text-violet-light" strokeWidth={1.8} />
                          {feature.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Línea final */}
      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-center gap-5 px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-violet-light" strokeWidth={1.8} />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
            Formación seria. Montaña real. Decisiones reales.
          </p>
        </div>
      </div>
    </section>
  );
}
