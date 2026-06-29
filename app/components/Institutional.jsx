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
      {/* Texto */}
      <Reveal className="flex flex-col bg-bone px-6 py-20 sm:px-10 md:px-16 lg:justify-center lg:py-24 xl:px-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
            La institución
          </p>

          <span className="mt-4 block h-0.5 w-16 bg-gradient-to-r from-violet to-glacier" />

          <h2 className="mt-8 font-display text-3xl uppercase leading-[0.92] text-ink sm:text-4xl">
            Una{" "}
            <span className="bg-gradient-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
              formación.
            </span>
            <br />
            No una
            <br />
            agencia.
          </h2>

          <p className="mt-9 max-w-md text-base leading-relaxed text-stone">
            Cúspides nace de guías de montaña, no de operadores turísticos.
            Cada programa tiene la rigurosidad de una formación de rescate —
            no de una excursión.
          </p>

          <blockquote className="mt-10 max-w-lg border-l-2 border-violet pl-6">
            <span className="block font-display text-2xl leading-none text-violet">
              “
            </span>

            <p className="-mt-2 font-serif text-lg italic leading-relaxed text-ink">
              Diseñamos la formación que nos hubiera gustado tener cuando
              empezamos a guiar en Patagonia.
            </p>

            <footer className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-stone">
              <span className="text-ink">— Nicolás Cúspide</span>
              <span className="mt-1 block text-stone-light">Guía UIAGM</span>
            </footer>
          </blockquote>

          <a
            href="#equipo-tecnico"
            className="group mt-10 inline-flex items-center gap-4 bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-violet"
          >
            Conocé a los guías
            <span className="text-violet-light transition group-hover:text-glacier">
              →
            </span>
          </a>
        </div>

        <div className="mt-16 border-t border-stone/15 pt-7 lg:mt-auto">
          <p className="font-display text-2xl uppercase text-violet">
            UIAGM
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-stone-light">
            Certificación internacional IFMGA
          </p>
        </div>
      </Reveal>

      {/* Foto + ficha técnica */}
      <Reveal delay={100} className="relative min-h-[70vh] overflow-hidden lg:min-h-0">
        <Image
          src="/images/rock-face.png"
          alt="Guía de Cúspide escalando una pared de roca con vista a la cordillera"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[18%_38%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/18 to-ink/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_42%,rgba(156,238,255,0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(115,87,255,0.18),transparent_38%)]" />

        <div className="relative z-10 flex h-full flex-col items-end justify-center gap-8 px-6 py-16 text-right sm:px-10 lg:px-12">
          <svg
            viewBox="0 0 48 32"
            className="h-8 w-12 text-bone"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path
              d="M2 28 L16 8 L24 18 L32 4 L46 28"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex w-full max-w-[230px] flex-col gap-7">
            {sidebar.map((item, i) => (
              <div
                key={i}
                className="border-t border-glacier/25 pt-5 first:border-t-0 first:pt-0"
              >
                {item.kind === "location" && (
                  <>
                    <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-bone">
                      {item.title}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-glacier">
                      {item.subtitle}
                    </p>
                  </>
                )}

                {item.kind === "coords" && (
                  <div className="font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-bone/70">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}

                {item.kind === "stat" && (
                  <>
                    <p className="font-display text-2xl uppercase text-glacier drop-shadow-[0_0_24px_rgba(156,238,255,0.24)]">
                      {item.value}
                    </p>
                    <p className="mt-2 font-mono text-xs uppercase leading-snug tracking-[0.13em] text-bone/65">
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