import Image from "next/image";
import { Mountain, Clock, CirclePlus, Users, ShieldCheck, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

const stats = [
  {
    icon: Mountain,
    value: "UIAGM",
    valueSize: "text-base sm:text-xl",
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
    valueSize: "text-xl sm:text-3xl",
    label: "Expediciones realizadas",
  },
  {
    icon: Clock,
    value: "18",
    valueSize: "text-xl sm:text-3xl",
    label: "Años de experiencia",
  },
  {
    icon: CirclePlus,
    value: "WFR",
    valueSize: "text-base sm:text-xl",
    label: "Wilderness First Responder",
  },
  {
    icon: Users,
    value: "1:4",
    valueSize: "text-xl sm:text-3xl",
    label: "Ratio máximo guía / cliente",
  },
  {
    icon: ShieldCheck,
    value: "Seguridad como cultura",
    valueSize: "text-sm sm:text-base",
    label: "Protocolos propios en cada salida",
  },
];

export default function Institutional() {
  return (
    <section className="border-t border-stone/15 px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.32em] text-violet-light sm:text-left">
            La institución
          </p>
          <span className="mx-auto mt-4 block h-0.5 w-12 bg-violet-light sm:mx-0" />
          <h2 className="mt-7 text-center font-display text-[1.75rem] uppercase leading-[0.95] text-ink sm:text-left sm:text-3xl md:text-4xl">
            <span className="bg-linear-to-r text-gradient-cool">Una formación.</span>
            <br />
            No una agencia.
          </h2>
          <p className="mt-4 text-center text-sm leading-relaxed text-stone sm:text-left">
            Cúspides nace de guías de montaña, no de operadores turísticos.
            Cada programa tiene la rigurosidad de una formación de rescate.
          </p>
        </Reveal>

        {/* Foto + stats */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-rows-2 sm:gap-4">

          {/* Foto — ocupa 2 filas */}
          <Reveal delay={60} className="col-span-2 sm:col-span-1 sm:row-span-2">
            <div className="relative h-full min-h-70 overflow-hidden rounded-2xl sm:min-h-0">
              <Parallax>
                <Image
                  src="/images/rock-face.png"
                  alt="Guía de Cúspides escalando una pared de roca con vista a la cordillera"
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  quality={90}
                  className="object-cover object-[18%_38%]"
                />
              </Parallax>
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
                <div className="flex h-full flex-col justify-between gap-3 rounded-xl border border-stone/10 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_6px_28px_rgba(5,205,194,0.14)] sm:gap-6 sm:rounded-2xl sm:p-6">
                  <Icon className="h-5 w-5 text-stone/40 sm:h-6 sm:w-6" strokeWidth={1.4} />
                  <div>
                    <p className={`font-display uppercase text-ink ${stat.valueSize}`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-stone sm:text-xs">
                      {stat.label}
                    </p>
                    <span className="mt-3 block h-0.5 w-5 bg-violet-light sm:mt-4 sm:w-6" />
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
