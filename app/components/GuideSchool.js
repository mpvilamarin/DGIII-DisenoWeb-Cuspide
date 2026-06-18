import Image from "next/image";
import Reveal from "./Reveal";

export default function GuideSchool() {
  return (
    <section
      id="escuela-de-guias"
      className="relative overflow-hidden py-28 text-bone md:py-36"
    >
      <Image
        src="/images/pinnacle-back.jpg"
        alt="Montañista de espaldas sobre un pináculo rocoso"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-violet/75" />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
      <div className="grain absolute inset-0" />

      <Reveal>
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-light">
            Próximamente · 2027
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase sm:text-4xl">
            Escuela de Guías Cúspide
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/85">
            Certificaciones internacionales en rescate en grietas y primeros
            auxilios en zonas agrestes. La misma exigencia con la que formamos
            a nuestros clientes, ahora para formar a los próximos guías.
          </p>
          <a
            href="#newsletter"
            className="mt-10 inline-block border border-bone/60 px-6 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-bone hover:text-violet"
          >
            Sumarme a la lista de espera
          </a>
        </div>
      </Reveal>
    </section>
  );
}
