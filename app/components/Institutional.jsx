import Image from "next/image";
import { Mountain, Clock, CirclePlus, Users, ShieldCheck, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  {
    icon: Mountain,
    value: "UIAGM",
    valueSize: "text-xl",
    label: (
      <>
        Certificación internacional{" "}
        <span className="text-violet-light">IFMGA</span>
      </>
    ),
  },
  {
    icon: Mountain,
    value: "240+",
    valueSize: "text-3xl",
    label: "Expediciones realizadas",
  },
  {
    icon: Clock,
    value: "18",
    valueSize: "text-3xl",
    label: "Años de experiencia",
  },
  {
    icon: CirclePlus,
    value: "WFR",
    valueSize: "text-xl",
    label: "Wilderness First Responder",
  },
  {
    icon: Users,
    value: "1:4",
    valueSize: "text-3xl",
    label: "Ratio máximo guía / cliente",
  },
  {
    icon: ShieldCheck,
    value: "Seguridad como cultura",
    valueSize: "text-base",
    label: "Protocolos propios en cada salida",
  },
];

export default function Institutional() {
  return (
    <section className="border-t border-stone/15 px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-stone">
            La institución
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] text-violet-dark sm:text-4xl md:text-5xl">
            Una formación.
            <br />
            No una agencia.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-stone">
            Cúspide nace de guías de montaña, no de operadores turísticos.
            Cada programa tiene la rigurosidad de una formación de rescate.
          </p>
        </Reveal>

        {/* Foto + stats */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-rows-2">

          {/* Foto — ocupa 2 filas */}
          <Reveal delay={60} className="col-span-1 row-span-2">
            <div className="relative h-full min-h-70 overflow-hidden rounded-2xl sm:min-h-0">
              <Image
                src="/images/rock-face.png"
                alt="Guía de Cúspide escalando una pared de roca con vista a la cordillera"
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover object-[18%_38%]"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-ink/75 via-ink/15 to-ink/50" />

              {/* Top-right: ubicación + nombre */}
              <div className="absolute right-5 top-5 text-right">
                <p className="flex items-center justify-end gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/65">
                  <MapPin className="h-3 w-3 text-bone/65" strokeWidth={1.6} />
                  Cordón Marconi
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-bone/40">
                  48°12′03″S / 72°45′12″W
                </p>
                <p className="mt-2 font-display text-sm uppercase leading-[0.95] text-bone/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-base">
                  Patagonia
                  <br />
                  Argentina
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stat cards — animación escalonada */}
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.value} delay={100 + i * 70}>
                <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-stone/10 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_6px_28px_rgba(5,205,194,0.14)]">
                  <Icon className="h-6 w-6 text-stone/40" strokeWidth={1.4} />
                  <div>
                    <p className={`font-display uppercase text-ink ${stat.valueSize}`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-stone">
                      {stat.label}
                    </p>
                    <span className="mt-4 block h-0.5 w-6 bg-violet-light" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
