import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const features = [
  {
    title: "Asesoramiento\npersonalizado",
    detail: "Te guiamos en cada paso de tu expedición.",
    icon: (
      <>
        <circle cx="12" cy="7" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21v-1.5C5.5 16.5 8.5 15 12 15s6.5 1.5 6.5 4.5V21" />
      </>
    ),
  },
  {
    title: "Itinerarios\na medida",
    detail: "Diseñamos experiencias seguras y desafiantes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7.5 4v4.5c0 4.5-3 7.5-7.5 8.5C7.5 19 4.5 16 4.5 11.5V7L12 3zm-2.5 9.5 2 2 4-4"
      />
    ),
  },
  {
    title: "Acompañamiento\nconstante",
    detail: "Desde la planificación hasta el regreso.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5V6M12 18v2.5M3.5 12H6M18 12h2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12 9 7" />
      </>
    ),
  },
];

export default function FinalCTA() {
  return (
    <section className="py-16 pr-4 sm:pr-6 lg:pr-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-r-2xl">
          {/* Foto de fondo */}
          <Image
            src="/images/summit-clouds.jpg"
            alt="Montañista en cumbre con panorama nevado"
            fill
            sizes="100vw"
            className="object-cover object-[60%_40%]"
          />

          {/* Overlay: oscuro a izquierda, transparente a derecha */}
          <div className="absolute inset-0 bg-linear-to-r from-ink from-[30%] via-ink/80 via-[55%] to-ink/25" />
          <div className="absolute inset-0 bg-linear-to-t from-ink/40 to-transparent" />

          {/* Contenido */}
          <div className="relative z-10 flex flex-col gap-8 px-8 py-10 lg:flex-row lg:items-center lg:gap-0 lg:px-12 lg:py-12">

            {/* Izquierda: texto */}
            <div className="shrink-0 text-center lg:min-w-[280px] lg:max-w-sm lg:pr-10 lg:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-light">
                Hablemos de tu próxima expedición
              </p>
              <span className="mx-auto mt-2 block h-px w-8 bg-violet-light lg:mx-0" />
              <h2 className="mt-4 font-display text-2xl uppercase leading-[0.95] text-bone lg:text-[1.75rem]">
                ¿Listo para tu{" "}
                <span className="bg-gradient-to-r text-gradient-cool">
                  próxima cumbre?
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xs font-mono text-xs leading-relaxed text-bone/65 lg:mx-0">
                Escribinos y armemos juntos tu próxima aventura.
              </p>
            </div>

            {/* Divisor vertical */}
            <span className="hidden h-20 w-px shrink-0 bg-bone/20 lg:block" />

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-1 lg:divide-x lg:divide-bone/20 lg:gap-0">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-2 text-center lg:items-start lg:px-6 lg:text-left lg:first:pl-8"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    className="h-5 w-5 text-teal"
                  >
                    {item.icon}
                  </svg>
                  <p className="whitespace-pre-line font-mono text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-bone">
                    {item.title}
                  </p>
                  <p className="font-mono text-[10px] leading-relaxed text-bone/55">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Botón */}
            <div className="flex shrink-0 justify-center lg:justify-start lg:pl-8">
              <Link
                href="#contacto"
                className="group inline-flex items-center gap-3 bg-violet px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-bone transition hover:bg-bone hover:text-ink"
              >
                Contactanos
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
