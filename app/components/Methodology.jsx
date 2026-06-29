"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const steps = [
  {
    period: "Mes 1",
    duration: "2 semanas",
    title: "Evaluación física y de antecedentes",
    body: "Test de aptitud física y revisión de antecedentes médicos y de montaña. Entrevista con guías certificados antes de aceptar la postulación.",
    image: "/images/team-smiling.jpg",
  },
  {
    period: "Mes 1—4",
    duration: "3 meses",
    title: "Plan de entrenamiento físico personalizado",
    body: "Programa de resistencia, fuerza y carga progresiva diseñado según tu evaluación inicial. Seguimiento mensual obligatorio.",
    image: "/images/ridge-walk.jpg",
  },
  {
    period: "Mes 3—5",
    duration: "4 días",
    title: "Capacitación técnica: cuerdas, crampones, autorrescate",
    body: "Clínica presencial de técnica de cuerdas, uso de crampones y protocolos de autorrescate en terreno glaciario.",
    image: "/images/rope-team.jpg",
  },
  {
    period: "Mes 5",
    duration: "1 semana",
    title: "Revisión y prueba de equipo",
    body: "Revisión individual de equipamiento técnico y prueba en condiciones simuladas antes de confirmar la expedición.",
    image: "/images/rock-face.png",
  },
  {
    period: "Mes 6",
    duration: "2 días",
    title: "Briefing final y evaluación de aptitud",
    body: "Evaluación de aptitud física y mental. El equipo de guías determina si continuás. No hay excepciones.",
    image: "/images/pinnacle-back.jpg",
  },
  {
    period: "Expedición",
    duration: "12—16 días",
    title: "Ascenso en cordada con guías certificados",
    body: "Ascenso en cordada, gestión de riesgo y campamento en zona glaciaria. El objetivo real de los seis meses anteriores.",
    image: "/images/ice-couloir.jpg",
  },
  {
    period: "Posterior",
    duration: "1 día",
    title: "Debrief y evaluación de cierre",
    body: "Análisis posterior a la expedición con tu guía a cargo. Aprendizajes, observaciones técnicas, marcas y próximos pasos en tu formación.",
    image: "/images/fitzroy-approach.jpg",
  },
];

export default function Methodology() {
  const [active, setActive] = useState(0);
  const stageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.idx));
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    stageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodologia" className="border-t border-stone/15 bg-bone">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagen sticky */}
        <div className="relative hidden md:block">
          <div className="sticky top-0 h-screen overflow-hidden bg-ink">
            <div className="relative h-full w-full">
              {steps.map((step, i) => (
                <Image
                  key={step.image}
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="50vw"
                  className={`object-cover transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Difuminado real hacia el fondo claro */}
            <div className="absolute inset-y-0 right-0 w-[42%] bg-gradient-to-r from-transparent via-bone/70 to-bone" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(245,243,239,0.78),transparent_34%)]" />
            <div className="absolute inset-0 bg-violet/10 mix-blend-multiply" />

            <div className="absolute bottom-10 left-8 z-10 max-w-72 border-l-2 border-violet bg-ink/88 px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet-light">
                {String(active + 1).padStart(2, "0")} / {steps[active].period}
              </p>
              <p className="mt-2 font-mono text-sm leading-snug text-bone">
                {steps[active].title}
              </p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="px-6 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32 lg:pl-16 lg:pr-14">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
              Metodología de preparación
            </p>

            <span className="mt-4 block h-px w-8 bg-violet" />

            <h2 className="mt-7 max-w-3xl font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Un{" "}
              <span className="bg-gradient-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
                sistema,
              </span>{" "}
              no un tour
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
              Cada etapa tiene un propósito técnico medible. No se avanza hasta
              estar listo. No hay atajos — hay criterio.
            </p>
          </Reveal>

          <ol className="mt-14 space-y-0">
            {steps.map((step, i) => {
              const isActive = active === i;

              return (
                <li
                  key={step.period}
                  data-idx={i}
                  ref={(el) => (stageRefs.current[i] = el)}
                  className={`relative grid grid-cols-[4rem_1fr] gap-x-5 border-t border-stone/15 py-8 transition-all duration-300 first:border-t-0 sm:grid-cols-[5rem_1fr_6rem] ${
                    isActive
                      ? "border-l-2 border-l-violet bg-violet/5 px-5 shadow-[0_18px_50px_rgba(8,16,31,0.06)]"
                      : "px-0"
                  }`}
                >
                  <span
                    className={`font-display text-4xl leading-none transition-colors ${
                      isActive ? "text-violet/22" : "text-stone/12"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p className="font-mono text-xs font-semibold uppercase leading-snug tracking-[0.16em] text-ink">
                      {step.title}
                    </p>

                    <p className="mt-3 max-w-md font-mono text-xs leading-relaxed text-stone-light">
                      {step.body}
                    </p>

                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-violet sm:hidden">
                      {step.period} · {step.duration}
                    </p>
                  </div>

                  <span
                    className={`hidden whitespace-nowrap pt-1 text-right font-mono text-xs uppercase tracking-[0.18em] sm:block ${
                      isActive ? "text-violet" : "text-violet/70"
                    }`}
                  >
                    {step.duration}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}