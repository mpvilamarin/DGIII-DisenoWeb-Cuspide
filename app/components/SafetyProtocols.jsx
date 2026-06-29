import Image from "next/image";
import Reveal from "./Reveal";

export default function SafetyProtocols() {
  return (
    <section
      id="protocolos"
      className="border-t border-stone/15 bg-bone pt-20 md:pt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-0">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
            Protocolos de seguridad
          </p>

          <span className="mt-4 block h-[2px] w-12 bg-gradient-to-r from-violet to-glacier" />

          <h2 className="mt-7 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            Cada decisión
            <br />
            tiene un{" "}
            <span className="bg-gradient-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
              protocolo
            </span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-relaxed text-stone">
            En montaña, la improvisación no es una opción. Cada decisión está
            respaldada por protocolos y experiencia real en terreno.
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="relative h-64 overflow-hidden sm:h-80 lg:h-[440px] lg:-ml-16"
        >
          <Image
            src="/images/ice-couloir.jpg"
            alt="Montañista escalando un canalón helado entre paredes de roca"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[45%_center]"
          />

          {/* Fusión atmosférica entre imagen y fondo */}
          <div className="absolute inset-y-0 left-0 z-10 w-[42%] bg-gradient-to-r from-bone via-bone/85 to-transparent" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_50%,rgba(243,239,231,0.9),transparent_35%)]" />

          {/* Profundidad y color */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-ink/18" />
          <div className="absolute inset-0 z-10 bg-violet/10 mix-blend-multiply" />

          <div className="absolute bottom-7 right-7 z-20 text-right">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone">
              Cerro Torre, Patagonia
            </p>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-glacier">
              Campo de Hielo Continental
            </p>

            <span className="mt-4 ml-auto block h-px w-36 bg-gradient-to-r from-transparent via-glacier to-glacier" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}