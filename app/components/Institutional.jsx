import Image from "next/image";
import Reveal from "./Reveal";

const sidebar = [
  { kind: "location", title: "Cordón Marconi", subtitle: "Patagonia Argentina" },
  { kind: "coords", lines: ["48° 12′ 03″ S", "72° 45′ 12″ W"] },
  { kind: "stat", value: "240+", label: "Expediciones realizadas" },
  { kind: "stat", value: "18", label: "Años de experiencia" },
  { kind: "stat", value: "WFR", label: "Wilderness First Responder" },
];

export default function Institutional() {
  return (
    <section className="grid grid-cols-1 border-t border-stone/15 lg:min-h-screen lg:grid-cols-2">
      {/* ── Texto ── */}
      <Reveal className="flex flex-col bg-bone px-6 py-20 sm:px-10 md:px-16 lg:justify-center lg:py-24 xl:px-20">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-violet">
            La institución
          </p>
          <span className="mt-3 block h-px w-6 bg-violet" />

          <h2 className="mt-6 font-display text-4xl uppercase leading-[0.92] text-ink sm:text-5xl">
            Una formación.
            <br />
            No una agencia.
          </h2>

          <p className="mt-8 max-w-md text-base leading-relaxed text-stone">
            Cúspides nace de guías de montaña, no de operadores turísticos.
            Cada programa tiene la rigurosidad de una formación de rescate —
            no de una excursión.
          </p>

          <blockquote className="mt-8 max-w-md border-l-2 border-violet pl-5">
            <p className="font-serif text-lg italic leading-relaxed text-ink">
              “Diseñamos la formación que nos hubiera gustado tener cuando
              empezamos a guiar en Patagonia.”
            </p>
            <footer className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-stone">
              <span className="text-ink">— Nicolás Cúspide</span>
              <span className="block text-stone-light">Guía UIAGM</span>
            </footer>
          </blockquote>

          <a
            href="#equipo-tecnico"
            className="mt-10 inline-flex items-center gap-3 bg-ink px-6 py-3 text-xs uppercase tracking-[0.18em] text-bone transition hover:bg-violet"
          >
            Conocé a los guías
            <span className="text-violet-light">→</span>
          </a>
        </div>

        <div className="mt-16 border-t border-stone/15 pt-6 lg:mt-auto">
          <p className="font-display text-2xl uppercase text-violet">UIAGM</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-stone-light">
            Certificación internacional IFMGA
          </p>
        </div>
      </Reveal>

      {/* ── Foto + ficha técnica ── */}
      <Reveal delay={100} className="relative min-h-[70vh] lg:min-h-0">
        <Image
          src="/images/rock-face.png"
          alt="Guía de Cúspide escalando una pared de roca con vista a la cordillera"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[18%_38%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-ink/30 to-ink/85" />
        <div className="absolute inset-0 bg-violet/10 mix-blend-multiply" />

        <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:items-end lg:px-12">
          <svg
            viewBox="0 0 48 32"
            className="h-8 w-12 text-bone"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M2 28 L16 8 L24 18 L32 4 L46 28" strokeLinejoin="round" strokeLinecap="round" />
          </svg>

          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            {sidebar.map((item, i) => (
              <div
                key={i}
                className="w-full max-w-[220px] border-t border-bone/20 pt-4 first:border-t-0 first:pt-0 lg:max-w-[200px]"
              >
                {item.kind === "location" && (
                  <>
                    <p className="font-mono text-sm uppercase tracking-[0.08em] text-bone">
                      {item.title}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-bone/45">
                      {item.subtitle}
                    </p>
                  </>
                )}
                {item.kind === "coords" && (
                  <div className="font-mono text-xs uppercase tracking-[0.08em] text-bone/45">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
                {item.kind === "stat" && (
                  <>
                    <p className="font-display text-3xl uppercase text-bone">
                      {item.value}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase leading-snug tracking-[0.08em] text-bone/45">
                      {item.label}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
