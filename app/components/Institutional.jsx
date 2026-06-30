import Image from "next/image";
import { Mountain, Clock, CirclePlus, Users, ShieldCheck, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  {
    icon: Mountain,
    variant: "dark",
    value: "UIAGM",
    valueSize: "text-xl",
    label: (
      <>
        Certificación internacional{" "}
        <span className="text-glacier">IFMGA</span>
      </>
    ),
  },
  {
    icon: Mountain,
    variant: "blue",
    value: "240+",
    valueSize: "text-3xl",
    label: "Expediciones realizadas",
  },
  {
    icon: Clock,
    variant: "light",
    value: "18",
    valueSize: "text-3xl",
    label: "Años de experiencia",
  },
  {
    icon: CirclePlus,
    variant: "light",
    value: "WFR",
    valueSize: "text-xl",
    label: "Wilderness First Responder",
  },
  {
    icon: Users,
    variant: "purple",
    value: "1:4",
    valueSize: "text-3xl",
    label: "Ratio máximo guía / cliente",
  },
  {
    icon: ShieldCheck,
    variant: "light",
    value: "Seguridad como cultura",
    valueSize: "text-base",
    label: "Protocolos propios en cada salida",
  },
];

const variantClasses = {
  dark: "bg-ink text-bone",
  blue: "bg-gradient-to-br from-violet to-[#18102b] text-bone",
  purple: "bg-gradient-to-br from-violet-light to-violet text-bone",
  light: "border border-stone/15 bg-white text-ink",
};

const iconVariantClasses = {
  dark: "text-glacier",
  blue: "text-bone",
  purple: "text-bone",
  light: "text-violet",
};

export default function Institutional() {
  return (
    <section className="border-t border-stone/15 bg-bone px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-violet">
            La institución
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl md:text-5xl">
            Una formación.
            <br />
            <span className="bg-gradient-to-r text-gradient-purple">
              No una agencia.
            </span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-stone">
            Cúspide nace de guías de montaña, no de operadores turísticos.
            Cada programa tiene la rigurosidad de una formación de rescate.
          </p>
        </Reveal>

        {/* Foto + stats */}
        <Reveal delay={80}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-[1.5fr_1fr_1fr_1fr] sm:grid-rows-2">
            <div className="relative col-span-1 row-span-2 min-h-[280px] overflow-hidden sm:min-h-0">
              <Image
                src="/images/rock-face.png"
                alt="Guía de Cúspide escalando una pared de roca con vista a la cordillera"
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover object-[18%_38%]"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute right-6 top-6 text-right">
                <p className="flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/75">
                  <MapPin className="h-3.5 w-3.5 text-bone/75" strokeWidth={1.6} />
                  Cordón Marconi
                </p>
                <p className="mt-1 font-display text-xl uppercase text-bone">
                  Patagonia Argentina
                </p>
                <span className="ml-auto mt-3 block h-px w-32 bg-bone/30" />
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-glacier">
                  48°12′03″S / 72°45′12″W
                </p>
              </div>
            </div>

            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className={`flex flex-col justify-between gap-6 rounded-2xl p-6 ${variantClasses[stat.variant]}`}
                >
                  <Icon className={`h-6 w-6 ${iconVariantClasses[stat.variant]}`} strokeWidth={1.4} />
                  <div>
                    <p className={`font-display uppercase ${stat.valueSize}`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed opacity-70">
                      {stat.label}
                    </p>
                    <span className="mt-4 block h-0.5 w-6 bg-violet" />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="#equipo-tecnico"
            className="group mt-10 inline-flex items-center gap-4 bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-violet"
          >
            Conocé a los guías
            <span className="text-glacier/60 transition group-hover:text-glacier">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
