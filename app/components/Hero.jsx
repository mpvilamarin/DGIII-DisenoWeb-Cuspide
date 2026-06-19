import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="/images/Hero.png"
        alt="Montañista en la cima de una aguja rocosa sobre el campo de hielo patagónico"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-bone md:h-48" />

      <div className="relative z-10">
        {/* ── Hero ── */}
        <div className="relative flex h-screen min-h-160 flex-col items-start justify-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-light">
              46°S — Patagonia Argentina
            </p>
            <h1 className="mt-4 font-display text-[19vw] uppercase leading-[0.82] text-bone sm:text-[13vw] md:text-[9vw]">
              Cúspide
            </h1>
            <div className="mt-6 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-md">
                <p className="text-base font-medium leading-snug text-bone sm:text-lg">
                  La Patagonia exige preparación. Nosotros la garantizamos.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-bone/75 sm:text-base">
                  Meses de entrenamiento físico, técnica certificada y
                  protocolos de rescate antes de cada expedición.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#metodologia"
                  className="border border-bone/50 px-6 py-3 text-xs uppercase tracking-[0.18em] text-bone transition hover:border-bone hover:bg-bone hover:text-ink"
                >
                  Conocé la metodología
                </a>
                <a
                  href="#programas"
                  className="bg-violet px-6 py-3 text-xs uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink"
                >
                  Ver programas
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-6 hidden flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/50 sm:flex md:right-10">
            <span>Scroll</span>
            <span className="h-8 w-px bg-bone/40" />
          </div>
        </div>

        {/* ── Manifiesto ── */}
        <div className="relative flex min-h-[70vh] items-center justify-center px-6 pt-28 pb-36 md:min-h-[75vh] md:px-10 md:pt-32 md:pb-52">
          <Reveal className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <h2 className="font-display text-5xl uppercase leading-[0.95] text-bone sm:text-6xl md:text-7xl">
              La cumbre no
              <br />
              se compra.
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-bone/75 sm:text-lg">
              La Patagonia exige preparación. Nosotros la garantizamos: meses
              de entrenamiento, técnica certificada y protocolos de rescate antes
              de cada expedición.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-bone sm:text-lg">
              Si buscás una excursión cómoda, esto no es para ti.
            </p>

            <a
              href="#metodologia"
              className="group mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-bone"
            >
              <span className="border-b border-bone/40 pb-1 transition group-hover:border-bone">
                Conocé el proceso
              </span>
              <span className="flex h-9 w-9 items-center justify-center bg-violet text-bone transition group-hover:bg-bone group-hover:text-ink">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
