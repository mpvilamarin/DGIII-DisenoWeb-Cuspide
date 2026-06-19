import Image from "next/image";
import Reveal from "./Reveal";

const protocols = [
  {
    title: "Ratio guía / cliente",
    detail: "Máximo 1:4 en todas las expediciones técnicas.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 11a3 3 0 100-6 3 3 0 000 6zm0 2c-3 0-6 1.5-6 4v2h12v-2c0-2.5-3-4-6-4zm9-6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2c-1 0-2 .3-2.8.8M21 19v-1.5c0-1.8-1.8-3-3.8-3.4"
      />
    ),
  },
  {
    title: "Evacuación y comunicación",
    detail: "Plan de evacuación y comunicación satelital permanente.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2v4M5 9l2 2M19 9l-2 2M3 15h4l2 6h6l2-6h4M9 15a3 3 0 116 0"
      />
    ),
  },
  {
    title: "Monitoreo meteorológico",
    detail: "Seguimiento continuo de condiciones de clima y terreno.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18a4 4 0 110-8 5 5 0 019.6 1.5A3.5 3.5 0 0117.5 18H7zM12 21v-2M8 21v-1M16 21v-1"
      />
    ),
  },
  {
    title: "Protocolo médico",
    detail: "Kit de primeros auxilios y guía con formación médica en zona agreste.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM12 9v6M9 12h6"
      />
    ),
  },
  {
    title: "Seguro de rescate",
    detail: "Cobertura obligatoria de rescate y evacuación para todo participante.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM9 12l2 2 4-4"
      />
    ),
  },
  {
    title: "Briefing de riesgo",
    detail: "Reunión obligatoria previa a cada expedición sobre los riesgos específicos del terreno y el protocolo de actuación.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.72 3h16.92a2 2 0 0 0 1.72-3L13.7 3.86a2 2 0 0 0-3.4 0Z"
      />
    ),
  },
];

export default function SafetyProtocols() {
  return (
    <section id="protocolos" className="border-t border-stone/15 bg-bone pt-20 md:pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-0">
          <p className="text-xs uppercase tracking-[0.2em] text-violet">
            Protocolos de seguridad
          </p>
          <span className="mt-3 block h-px w-6 bg-violet" />
          <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-ink sm:text-5xl">
            Cada decisión
            <br />
            tiene un protocolo.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
            En montaña, la improvisación no es una opción. Cada decisión
            está respaldada por protocolos y experiencia real en terreno.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative h-64 sm:h-80 lg:h-auto lg:-ml-16">
          <Image
            src="/images/ice-couloir.jpg"
            alt="Montañista escalando un canalón helado entre paredes de roca"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[40%_center]"
          />
          <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-bone from-12% to-45% to-transparent" />
          <div className="absolute inset-0 bg-ink/15" />

          <div className="absolute bottom-6 right-6 text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bone">
              Cerro Torre, Patagonia
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-bone/60">
              Campo de Hielo Continental
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-px border border-stone/15 bg-stone/15 sm:grid-cols-2 lg:grid-cols-3">
          {protocols.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex h-full flex-col gap-4 bg-bone p-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="h-8 w-8 text-violet"
                >
                  {item.icon}
                </svg>
                <p className="font-mono text-xs uppercase tracking-widest text-ink">
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-stone">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
