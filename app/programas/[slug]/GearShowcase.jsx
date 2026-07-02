"use client";

import { useState } from "react";
import Image from "next/image";

const GEAR = [
  {
    id: "capas",
    label: "Sistema de capas",
    x: 58,
    y: 33,
    zoom: 320,
    description:
      "Base térmica de lana merino, capa intermedia aislante y shell exterior impermeable con costuras selladas. Las tres capas son obligatorias — las condiciones en el glaciar cambian en minutos.",
  },
  {
    id: "crampones",
    label: "Crampones 12 puntas",
    x: 67,
    y: 95,
    zoom: 420,
    description:
      "Compatibles con bota de doble capa rígida. Obligatorios desde el momento en que pisás el hielo. Provistos por Cúspide, ajustados individualmente antes de la expedición.",
  },
  {
    id: "piolet",
    label: "Piolet técnico",
    x: 76,
    y: 74,
    zoom: 360,
    description:
      "Para autorrescate en pendiente glaciaria. Su uso correcto forma parte de la capacitación previa — no se accede al glaciar sin haberlo practicado en terreno.",
  },
  {
    id: "botas",
    label: "Botas de doble capa",
    x: 47,
    y: 88,
    zoom: 360,
    description:
      "Rígidas, compatibles con crampones de 12 puntas. Temperatura de trabajo hasta -25°C. Deben ser aprobadas por el guía antes de confirmar el cupo.",
  },
  {
    id: "gafas",
    label: "Gafas glaciares",
    x: 59,
    y: 14,
    zoom: 420,
    description:
      "Filtro UV400 mínimo. En superficie de hielo, la reflexión solar puede causar ceguera temporal. No se admiten lentes de sol convencionales.",
  },
  {
    id: "arnes",
    label: "Arnés y cuerda",
    x: 56,
    y: 58,
    zoom: 340,
    description:
      "Para progresión en cordada y zonas de grietas. Provistos y verificados por Cúspide. El nudo de encordamiento es evaluado antes de cada salida.",
  },
];

export default function GearShowcase() {
  const [active, setActive] = useState(null);
  const activeItem = GEAR.find((g) => g.id === active) || null;

  const setHover = (id) => setActive(id);
  const clearHover = (id) => setActive((curr) => (curr === id ? null : curr));
  const toggle = (id) => setActive((curr) => (curr === id ? null : id));

  return (
    <section className="border-t border-stone/15 bg-bone px-6 py-14 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Left: título, texto y lista interactiva — oculto en mobile, solo queda la foto */}
        <div className="hidden text-center sm:block sm:text-left">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-dark">
            Equipo técnico
          </p>
          <span className="mx-auto mt-3 block h-0.5 w-10 bg-violet sm:mx-0" />
          <h2 className="mt-6 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            Lo que llevás{" "}
            <span className="text-gradient-cool">puesto no es opcional.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone sm:mx-0">
            Pasá el cursor o tocá cada ítem para ver el detalle del equipo
            técnico que se usa en esta expedición.
          </p>

          <div className="mt-8 border-t border-stone/10">
            {GEAR.map((g) => {
              const isActive = active === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onMouseEnter={() => setHover(g.id)}
                  onMouseLeave={() => clearHover(g.id)}
                  onClick={() => toggle(g.id)}
                  className="flex w-full items-center justify-between gap-4 border-b border-stone/10 py-4 text-left transition"
                >
                  <span
                    className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive ? "text-violet-dark" : "text-ink"
                    }`}
                  >
                    {g.label}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition-transform ${
                      isActive ? "scale-150 bg-violet" : "bg-stone/30"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: imagen con puntos interactivos */}
        <div className="relative">
          <div
            className="relative mx-auto max-w-md overflow-hidden rounded-2xl bg-ink lg:mx-0"
            style={{ aspectRatio: "3 / 4" }}
          >
            <Image
              src="/detail/ropa01.png"
              alt="Guía equipado para travesía de hielo"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
              priority={false}
            />

            {/* Líneas guía — igual que en el gráfico de ascenso, siempre hacia el borde izquierdo */}
            <svg
              viewBox="0 0 100 133.33"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              {GEAR.map((g) => {
                if (g.id !== active) return null;
                const y = (g.y / 100) * 133.33;
                return (
                  <line
                    key={g.id}
                    x1={g.x}
                    y1={y}
                    x2={0}
                    y2={y}
                    stroke="rgba(247,248,252,0.8)"
                    strokeWidth="0.35"
                  />
                );
              })}
            </svg>

            {/* Pines — punto igual al del gráfico de ascenso, con halo pulsante */}
            <div className="pointer-events-none absolute inset-0">
              {GEAR.map((g) => {
                const isActive = active === g.id;
                return (
                  <button
                    key={g.id}
                    type="button"
                    aria-label={g.label}
                    onMouseEnter={() => setHover(g.id)}
                    onMouseLeave={() => clearHover(g.id)}
                    onClick={() => toggle(g.id)}
                    className="pointer-events-auto absolute z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                    style={{ left: `${g.x}%`, top: `${g.y}%` }}
                  >
                    {!isActive && (
                      <span className="pulse-halo absolute h-4 w-4 rounded-full border border-dashed border-violet" />
                    )}
                    <span
                      className={`relative h-2.5 w-2.5 rounded-full border transition-all ${
                        isActive
                          ? "scale-125 border-bone bg-violet"
                          : "border-bone/70 bg-violet-light"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Tarjeta flotante — siempre sobre la foto, pegada al costado izquierdo */}
            {activeItem && (
              <div
                className="pointer-events-none absolute z-20 left-2 w-56 -translate-y-1/2"
                style={{ top: `${activeItem.y}%` }}
              >
                <div className="overflow-hidden rounded-lg border border-bone/15 bg-bone/95 shadow-xl backdrop-blur-sm">
                  <div className="h-20 w-full overflow-hidden bg-ink">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "url(/detail/ropa01.png)",
                        backgroundSize: `${activeItem.zoom}% auto`,
                        backgroundPosition: `${activeItem.x}% ${activeItem.y}%`,
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-violet-dark">
                      {activeItem.label}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-stone">
                      {activeItem.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-stone-light lg:hidden">
            Tocá los puntos del equipo
          </p>
        </div>
      </div>
    </section>
  );
}
