import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const features = [
  {
    title: "Protocolos profesionales",
    detail: "Estándares internacionales en cada decisión.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM9 12l2 2 4-4"
      />
    ),
  },
  {
    title: "Experiencia real",
    detail: "Formación basada en entornos reales.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 19 L9 8 L13 14 L16 9 L21 19 Z"
      />
    ),
  },
  {
    title: "Seguridad integral",
    detail: "Prevención y respuesta en todo momento.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
      </>
    ),
  },
  {
    title: "Equipo certificado",
    detail: "Guías UIAGM con formación continua.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 11a3 3 0 100-6 3 3 0 000 6zm0 2c-3 0-6 1.5-6 4v2h8v-2c0-1-.3-1.9-.8-2.6M17 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm.5 6.2c2 .4 3.5 1.7 3.5 3.8v2h-5"
      />
    ),
  },
];

export default function FinalCTA() {
  return (
    <section className="relative flex h-[80vh] min-h-130 flex-col overflow-hidden border-t border-stone/15 text-bone">
      <Image
        src="/images/fitzroy-approach.jpg"
        alt="Montañista acercándose al macizo del Fitz Roy con mochila roja"
        fill
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Reveal className="flex flex-col items-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-bone/25" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="h-7 w-7 text-violet-light"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 19 L9 8 L13 14 L16 9 L21 19 Z"
              />
            </svg>
            <span className="h-px w-12 bg-bone/25" />
          </div>

          <h2 className="mt-5 max-w-2xl font-display text-2xl uppercase leading-[0.95] sm:text-3xl md:text-4xl">
            <span className="block whitespace-nowrap">¿Estás dispuesto</span>
            <span className="block">a prepararte?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-base leading-relaxed text-bone/75 sm:text-lg">
            La postulación es el primer protocolo. Evaluamos tu aptitud antes
            de confirmar tu lugar en cualquier programa.
          </p>

          <span className="mt-5 block h-px w-10 bg-violet/50" />

          <Link
            href="/postulacion"
            className="group mt-5 inline-flex items-center gap-4 border border-violet-light/50 px-8 py-4 text-xs uppercase tracking-[0.18em] text-bone transition hover:border-violet-light hover:bg-violet-light/10"
          >
            Postulate a un programa
            <span className="text-violet-light transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      <div className="relative z-10 px-6 pb-6 md:px-10 md:pb-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-bone/15 lg:grid-cols-4">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex flex-col items-center gap-2 px-3 text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="h-6 w-6 text-violet-light"
                >
                  {item.icon}
                </svg>
                <p className="font-mono text-[11px] uppercase leading-snug tracking-widest text-bone">
                  {item.title}
                </p>
                <p className="text-xs leading-relaxed text-bone/55">
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
