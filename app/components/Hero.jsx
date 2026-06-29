import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/Hero.png"
          alt="Montañista en la cima de una aguja rocosa sobre el campo de hielo patagónico"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* Overlays — atmospheric dissolve */}
        <div className="absolute inset-0 bg-ink/42" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_130%_at_100%_50%,rgba(14,13,18,0.94)_0%,rgba(14,13,18,0.0)_68%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_100%_at_0%_50%,rgba(14,13,18,0.55)_0%,rgba(14,13,18,0.0)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_30%_at_50%_0%,rgba(14,13,18,0.5)_0%,rgba(14,13,18,0.0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_35%,rgba(115,87,255,0.16),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_60%,rgba(156,238,255,0.08),transparent_30%)]" />
        <div className="grain absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#F5F3EF]" />

        <div className="relative z-10">
          {/* Hero */}
          <div className="relative flex h-screen min-h-160 flex-col items-start justify-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet-light">
                46°S — Patagonia Argentina
              </p>

              <h1 className="mt-5 font-display text-[9vw] uppercase leading-[0.82] text-bone drop-shadow-[0_12px_45px_rgba(0,0,0,0.45)] sm:text-[9vw] md:text-[6vw]">
                Cúspide
              </h1>

              <div className="mt-6 max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bone sm:whitespace-nowrap sm:text-base">
                  La Patagonia exige{" "}
                  <span className="text-glacier">preparación.</span> Nosotros
                  la garantizamos.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-bone/82 sm:text-base">
                  Meses de entrenamiento físico, técnica certificada y
                  protocolos de rescate antes de cada expedición.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-end gap-3">
                <a
                  href="#metodologia"
                  className="border border-glacier/45 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-glacier transition hover:border-glacier hover:bg-glacier hover:text-ink"
                >
                  Conocé la metodología
                </a>

                <a
                  href="#programas"
                  className="bg-violet px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone shadow-[0_0_38px_rgba(115,87,255,0.32)] transition hover:bg-violet-light"
                >
                  Ver programas
                </a>
              </div>
            </div>

            <div className="absolute bottom-8 right-6 hidden flex-col items-end gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-glacier/70 sm:flex md:right-10">
              <span>Scroll</span>
              <span className="h-9 w-px bg-glacier/50" />
            </div>
          </div>

          {/* Manifiesto */}
          <div className="relative flex h-screen items-center px-6 pb-20 md:px-10 lg:px-16">

            <Reveal className="relative z-10 max-w-3xl">
              <h2 className="font-display text-[8vw] uppercase leading-[0.9] text-bone drop-shadow-[0_14px_45px_rgba(0,0,0,0.5)] sm:text-[6vw] md:text-[4.5vw]">
                La cumbre no
                <br />
                se compra.
              </h2>

              <span className="mt-8 block h-0.5 w-28 bg-gradient-to-r from-violet via-violet-light to-glacier" />

              <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/82">
                La Patagonia exige preparación. Nosotros la garantizamos: meses
                de entrenamiento, técnica certificada y protocolos de rescate
                antes de cada expedición.
              </p>

              <p className="mt-4 max-w-xl text-base font-semibold text-glacier">
                Si buscás una excursión cómoda, esto no es para ti.
              </p>

              <a
                href="#metodologia"
                className="group mt-10 inline-flex items-center border border-glacier/45 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:border-glacier"
              >
                <span className="px-6 py-3">Conocé el proceso</span>
                <span className="flex h-10 w-10 items-center justify-center bg-violet text-bone transition group-hover:bg-glacier group-hover:text-ink">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}