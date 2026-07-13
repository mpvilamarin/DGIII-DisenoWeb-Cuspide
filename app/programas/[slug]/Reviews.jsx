"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../../components/Reveal";

// Referencia única para el pico de la burbuja y el avatar: el padding del
// bloque de avatar y el centro del pico se calculan a partir de estas mismas
// constantes, así nunca se desalinean si cambia el tamaño del avatar.
const AVATAR_SIZE = 40; // h-10 w-10
const AVATAR_OFFSET = 36; // padding-left del bloque de avatar y posición del pico — ambos alineados a la izquierda
const TAIL_LEFT = AVATAR_OFFSET;

const REVIEWS = [
  {
    name: "Martina Ríos",
    time: "hace 1 semana",
    rating: 5,
    text: "La preparación previa fue increíblemente detallada. Llegué al glaciar sabiendo exactamente qué esperar y con el equipo justo. Los guías inspiran una confianza total.",
    photo: "/detail/martina-rios.jpg",
  },
  {
    name: "Diego Salas",
    time: "hace 10 días",
    rating: 5,
    text: "Ya hice dos expediciones con Cúspides y ambas superaron mis expectativas. El ratio guía/cliente se nota en cada decisión que toman en el terreno.",
    photo: "/detail/diego-salas.jpg",
  },
  {
    name: "Julieta Corvo",
    time: "hace 3 semanas",
    rating: 4,
    text: "Experiencia exigente pero muy bien acompañada. El proceso de postulación filtra en serio, así que llegás sabiendo que el grupo está a la altura.",
    photo: "/detail/julieta corvo.jpg",
  },
  {
    name: "Fede Almada",
    time: "hace 1 mes",
    rating: 5,
    text: "El nivel de detalle en los protocolos de seguridad me hizo sentir tranquilo incluso en el tramo más técnico. Volvería a elegirlos sin dudar.",
    photo: "/detail/fede-almada.jpg",
  },
];

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-teal text-teal" : "fill-stone/15 text-stone/15"}`}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    // Desplaza exactamente el ancho de una tarjeta (+ separación), no un valor fijo,
    // así siempre avanza una tarjeta prolija en vez de un corte a mitad de camino.
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 20 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="border-t border-stone/15 bg-bone px-6 py-14 md:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Reseñas de{" "}
              <span className="text-gradient-cool">quienes ya subieron.</span>
            </h2>
            <div className="mt-5 flex items-center justify-center gap-2.5 lg:justify-start">
              <span className="font-display text-lg text-ink">4.9/5</span>
              <StarRow rating={5} />
              <span className="text-stone-light">·</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone">
                Basado en 184 reseñas
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-12">
          <Reveal delay={60}>
            <div className="text-center lg:text-left">
              <span className="font-display text-6xl leading-none text-violet/15">
                &ldquo;
              </span>
              <p className="mt-1 font-display text-lg uppercase leading-tight text-ink">
                Lo que dicen nuestros excursionistas
              </p>
              <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
                <button
                  type="button"
                  onClick={() => scroll(-1)}
                  aria-label="Reseña anterior"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/20 text-stone transition hover:border-violet hover:text-violet-dark"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
                </button>
                <span className="h-px w-10 bg-stone/20" />
                <button
                  type="button"
                  onClick={() => scroll(1)}
                  aria-label="Siguiente reseña"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/20 text-stone transition hover:border-violet hover:text-violet-dark"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scrollbar-none px-1 py-2 lg:max-w-160 xl:max-w-215"
            >
              {REVIEWS.map((r) => (
                <div key={r.name} className="w-72 shrink-0 snap-start pb-2">
                  {/* Burbuja */}
                  <div className="relative rounded-2xl border border-stone/10 bg-white p-6 shadow-sm">
                    <p className="min-h-24 text-sm leading-relaxed text-stone">
                      {r.text}
                    </p>

                    <div className="mt-4">
                      <StarRow rating={r.rating} />
                    </div>

                    {/* Pico — centrado con el avatar vía TAIL_LEFT (deriva de AVATAR_OFFSET + AVATAR_SIZE) */}
                    <span
                      className="absolute -bottom-2.25 h-4.5 w-4.5 rotate-45 rounded-xs border-r border-b border-stone/10 bg-white"
                      style={{ left: TAIL_LEFT }}
                    />
                  </div>

                  {/* Avatar */}
                  <div
                    className="relative mt-5 flex items-center gap-3"
                    style={{ paddingLeft: AVATAR_OFFSET }}
                  >
                    <div
                      className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-bone"
                      style={{ height: AVATAR_SIZE, width: AVATAR_SIZE }}
                    >
                      <Image
                        src={r.photo}
                        alt={r.name}
                        fill
                        sizes={`${AVATAR_SIZE}px`}
                        quality={90}
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold leading-none text-ink">
                        {r.name}
                      </p>

                      <p className="mt-1 text-xs text-stone-light">
                        {r.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
