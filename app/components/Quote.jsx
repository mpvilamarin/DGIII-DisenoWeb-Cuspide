import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-[#F5F3EF] px-6 py-28 text-center md:px-10 md:py-36">

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <span className="mx-auto block h-0.5 w-24 bg-linear-to-r from-violet via-violet-light to-glacier" />

        <h3 className="mt-12 font-display text-xl uppercase leading-[1.15] tracking-tight text-ink sm:text-3xl md:text-[2.75rem]">
          No te llevamos a la montaña.
          <br />
          <span className="bg-linear-to-r from-violet via-violet-light to-glacier bg-clip-text text-transparent">
            Te preparamos para
            <br />
            merecerla.
          </span>
        </h3>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.42em] text-glacier">
          Metodología Cúspide
        </p>
      </Reveal>
    </section>
  );
}
