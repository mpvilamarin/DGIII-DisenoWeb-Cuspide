import Image from "next/image";
import { ShieldCheck, Mountain, Lock, User, Compass } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    color: "violet",
    title: "Protocolos profesionales",
    detail: "Procedimientos probados en alta montaña.",
  },
  {
    icon: Mountain,
    color: "blue",
    title: "Experiencia real en terreno",
    detail: "Aprendizaje basado en situaciones reales.",
  },
  {
    icon: Lock,
    color: "glacier",
    title: "Seguridad integral",
    detail: "Gestión de riesgos antes, durante y después.",
  },
  {
    icon: User,
    color: "violet-light",
    title: "Equipo certificado UIAGM",
    detail: "Guías profesionales con estándares internacionales.",
  },
];

const colorClasses = {
  violet: "border-violet/40 text-violet",
  blue: "border-blue-400/40 text-blue-400",
  glacier: "border-glacier/40 text-glacier",
  "violet-light": "border-glacier/40 text-glacier",
};

export default function SafetyProtocols() {
  return (
    <section
      id="protocolos"
      className="diagonal-top relative -mt-10 flex h-screen flex-col overflow-hidden bg-ink pt-8 md:-mt-16 md:pt-12"
    >
      <Image
        src="/images/rock-face.png"
        alt="Guía escalando una pared de roca helada con vista a la cordillera"
        fill
        sizes="100vw"
        className="object-cover object-[32%_center]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      <div className="grain absolute inset-0" />

      {/* Compass decorativo */}
      <Compass className="absolute right-10 top-10 h-9 w-9 text-bone/25" strokeWidth={1} />

      {/* Línea vertical + label */}
      <div className="absolute bottom-24 right-10 top-24 hidden w-px bg-bone/15 lg:block">
        <span className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-bone/40" />
        <span className="absolute -left-[3px] bottom-0 h-1.5 w-1.5 rounded-full bg-bone/40" />
        <p className="absolute bottom-0 left-3 font-mono text-[10px] uppercase leading-tight tracking-[0.18em] text-bone/55">
          Enfoque
          <br />
          en seguridad
        </p>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:px-10 lg:px-16">
        <Reveal className="flex max-w-2xl flex-col items-center">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-glacier">
            Protocolos de seguridad
          </p>
          <span className="mt-3 block h-px w-28 bg-glacier/60" />

          <h2 className="mt-5 font-display text-3xl uppercase leading-[0.95] text-bone sm:text-4xl md:text-5xl">
            Cada decisión
            <br />
            tiene un
            <br />
            <span className="bg-gradient-to-r text-gradient-purple">
              protocolo.
            </span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/80 sm:text-base">
            En montaña, la improvisación no es una opción.
          </p>

          <div className="mt-5 flex items-center justify-center gap-4">
            <Mountain className="h-5 w-5 text-glacier" strokeWidth={1.6} />
            <span className="block h-px w-32 bg-bone/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-glacier" />
          </div>
        </Reveal>
      </div>

      {/* Cards */}
      <Reveal delay={150} className="relative z-10 px-6 pb-6 md:px-10 md:pb-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col justify-between gap-4 rounded-xl border border-bone/10 bg-ink/40 p-4 backdrop-blur-md"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${colorClasses[pillar.color]}`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>

                <div>
                  <p className="font-display text-base leading-snug text-bone">
                    {pillar.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-bone/60">
                    {pillar.detail}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                  </span>
                  <span className="text-sm text-bone">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
