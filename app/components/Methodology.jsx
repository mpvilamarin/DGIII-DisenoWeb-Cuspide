"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const steps = [
  {
    period: "Evaluación y admisión",
    duration: "2 semanas",
    title: "Evaluación y admisión",
    body: "Test de aptitud física, antecedentes médicos y entrevista con guías certificados. El equipo determina si tu perfil es compatible antes de aceptar la postulación.",
    image: "/images/metodo-01.png",
  },
  {
    period: "Preparación física y técnica",
    duration: "3 meses",
    title: "Preparación física y técnica",
    body: "Entrenamiento de resistencia, fuerza y técnica de montaña con seguimiento mensual. Al cierre, el equipo determina si estás en condiciones de avanzar. No hay excepciones.",
    image: "/images/metodo-02.png",
  },
  {
    period: "Expedición y cierre",
    duration: "12—16 días",
    title: "Expedición y cierre",
    body: "Ascenso en cordada, gestión de riesgo y campamento glaciario. Debrief posterior con tu guía: observaciones técnicas y próximos pasos en tu formación.",
    image: "/images/meto-03.png",
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
    <section id="metodologia" className="border-t border-stone/15 pt-8 sm:pt-20 md:pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-start">
        <div className="sticky top-[10vh] hidden h-[80vh] overflow-hidden md:block">
          <div className="relative h-full w-full">
            {steps.map((step, i) => (
              <Image
                key={step.image}
                src={step.image}
                alt={step.title}
                fill
                sizes="50vw"
                quality={90}
                className={`object-cover transition-opacity duration-700 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-violet/10 mix-blend-multiply" />

          <div className="absolute bottom-10 left-8 z-10 max-w-65 rounded-lg border border-bone/10 bg-ink/10 px-4 py-3 backdrop-blur-md">
            <p className="font-mono text-[10px] uppercase tracking-widest text-violet-light">
              {String(active + 1).padStart(2, "0")} / {steps[active].duration}
            </p>
            <p className="mt-1 font-mono text-xs text-bone/90">
              {steps[active].title}
            </p>
          </div>
        </div>

        <div className="px-6 pt-8 pb-16 sm:pt-28 md:px-10 md:pt-36 md:pb-24 lg:pl-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet-light">
              Metodología de preparación
            </p>
            <span className="mt-4 block h-0.5 w-12 bg-violet-light" />
            <h2 className="mt-7 font-display text-[1.75rem] uppercase leading-[0.95] text-ink sm:text-3xl md:text-4xl">
              <span className="bg-linear-to-r text-gradient-cool">Un sistema,</span>
              <br />
              no un tour.
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
                className={`relative grid grid-cols-[3rem_1fr] gap-x-5 border-t border-stone/15 py-4 transition-colors first:border-t-0 sm:grid-cols-[3.5rem_1fr_5.5rem] sm:py-8 ${
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
                    {step.duration}
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
