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
    image: "/images/rock-face.jpg",
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
            const idx = Number(entry.target.dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    stageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="metodologia"
      className="border-t border-stone/15 bg-bone"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative hidden md:block">
          <div className="sticky top-0 h-screen overflow-hidden">
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
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-bone" />
            <div className="absolute inset-0 bg-violet/10 mix-blend-multiply" />

            <div className="absolute bottom-10 left-8 z-10 max-w-65 border border-violet/40 bg-ink/80 px-4 py-3 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-widest text-violet-light">
                {String(active + 1).padStart(2, "0")} / {steps[active].period}
              </p>
              <p className="mt-1 font-mono text-xs text-bone/90">
                {steps[active].title}
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 pt-28 pb-40 md:px-10 md:pt-36 md:pb-56 lg:pl-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-violet">
              Metodología de preparación
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-ink sm:text-4xl">
              Un sistema, no un tour
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
              Cada etapa tiene un propósito técnico medible. No se avanza
              hasta estar listo. No hay atajos — hay criterio.
            </p>
          </Reveal>

          <ol className="mt-12 border-y border-stone/15">
            {steps.map((step, i) => (
              <li
                key={step.period}
                data-idx={i}
                ref={(el) => (stageRefs.current[i] = el)}
                className={`relative grid grid-cols-[3rem_1fr] gap-x-5 border-t border-stone/15 py-8 transition-colors first:border-t-0 sm:grid-cols-[3.5rem_1fr_5.5rem] ${
                  active === i ? "bg-violet/5" : ""
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-px bg-violet transition-opacity ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span className="font-display text-4xl leading-none text-stone/10 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-widest text-ink">
                    {step.title}
                  </p>
                  <p className="mt-3 max-w-sm font-mono text-xs leading-relaxed text-stone-light">
                    {step.body}
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-violet sm:hidden">
                    {step.period} · {step.duration}
                  </p>
                </div>
                <span className="hidden whitespace-nowrap pt-1 text-right font-mono text-xs uppercase tracking-widest text-violet/70 sm:block">
                  {step.duration}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
