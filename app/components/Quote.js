import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="bg-bone py-16 md:py-20">
      <Reveal className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <span className="mx-auto block h-px w-10 bg-violet" />
        <p className="text-balance mt-6 font-display text-xl uppercase leading-snug text-ink sm:text-2xl md:text-3xl">
          No te llevamos a la montaña.
          <br />
          <span className="text-violet">Te preparamos para merecerla.</span>
        </p>
      </Reveal>
    </section>
  );
}
