"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const team = [
  {
    name: "Martín Aguirre",
    initials: "MA",
    cert: "UIAGM / IFMGA",
    years: "16 años",
    specialty: "Rescate en grietas",
    image: "/images/fitzroy-approach.jpg",
  },
  {
    name: "Lucía Beltrán",
    initials: "LB",
    cert: "Wilderness First Responder",
    years: "11 años",
    specialty: "Medicina de montaña",
    image: "/images/ridge-walk.jpg",
  },
  {
    name: "Tomás Ferreyra",
    initials: "TF",
    cert: "UIAGM / IFMGA",
    years: "14 años",
    specialty: "Escalada en hielo",
    image: "/images/ice-couloir.jpg",
  },
  {
    name: "Ana Reyes",
    initials: "AR",
    cert: "AMGA Alpine Guide",
    years: "9 años",
    specialty: "Logística de expedición",
    image: "/images/pinnacle-back.jpg",
  },
];

export default function Team() {
  const [active, setActive] = useState(0);

  return (
    <section id="equipo-tecnico" className="border-t border-stone/15 bg-bone py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-violet">
            Equipo técnico
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl uppercase text-ink sm:text-4xl">
            Instructores, no anfitriones
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex h-[68vh] min-h-120 gap-2">
            {team.map((member, i) => (
              <div
                key={member.name}
                onMouseEnter={() => setActive(i)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  active === i ? "flex-[4]" : "flex-[1]"
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className={`object-cover transition-all duration-500 ${
                    active === i ? "scale-100 grayscale-0" : "scale-105 grayscale"
                  }`}
                />

                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    active === i
                      ? "bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
                      : "bg-ink/60"
                  }`}
                />

                {/* Collapsed: iniciales verticales */}
                <div
                  className={`absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-300 ${
                    active === i ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50 [writing-mode:vertical-rl] rotate-180">
                    {member.initials}
                  </span>
                </div>

                {/* Expanded: nombre + datos */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ${
                    active === i
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-light">
                    {String(i + 1).padStart(2, "0")} — {member.specialty}
                  </p>
                  <p className="mt-2 font-display text-2xl uppercase leading-none text-bone">
                    {member.name}
                  </p>
                  <div className="mt-4 space-y-2 border-t border-bone/20 pt-4">
                    <div className="flex justify-between gap-4 font-mono text-[10px] uppercase tracking-widest">
                      <span className="text-bone/40">Cert.</span>
                      <span className="text-right text-bone/85">{member.cert}</span>
                    </div>
                    <div className="flex justify-between gap-4 font-mono text-[10px] uppercase tracking-widest">
                      <span className="text-bone/40">Exp.</span>
                      <span className="text-bone/85">{member.years}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
