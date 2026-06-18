import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-stone/15 py-32 text-center text-bone md:py-44">
      <Image
        src="/images/fitzroy-approach.jpg"
        alt="Montañista acercándose al macizo del Fitz Roy con mochila roja"
        fill
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-violet/20 mix-blend-multiply" />
      <div className="grain absolute inset-0" />

      <Reveal>
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            ¿Estás dispuesto a prepararte?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-bone/80">
            La postulación es el primer protocolo. Evaluamos tu aptitud antes
            de confirmar tu lugar en cualquier programa.
          </p>
          <Link
            href="/postulacion"
            className="mt-10 inline-block bg-violet px-8 py-4 text-xs uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink"
          >
            Postulate a un programa
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
