import Image from "next/image";
import Reveal from "./Reveal";

const team = [
  {
    name: "Martín Aguirre",
    initials: "MA",
    cert: "UIAGM / IFMGA",
    years: "16 años",
    specialty: "Rescate en grietas",
  },
  {
    name: "Lucía Beltrán",
    initials: "LB",
    cert: "Wilderness First Responder",
    years: "11 años",
    specialty: "Medicina de montaña",
  },
  {
    name: "Tomás Ferreyra",
    initials: "TF",
    cert: "UIAGM / IFMGA",
    years: "14 años",
    specialty: "Escalada en hielo",
  },
  {
    name: "Ana Reyes",
    initials: "AR",
    cert: "AMGA Alpine Guide",
    years: "9 años",
    specialty: "Logística de expedición",
  },
];

export default function Team() {
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
      </div>

      <Reveal>
        <div className="relative mt-16 h-64 w-full overflow-hidden sm:h-80">
          <Image
            src="/images/rope-team.jpg"
            alt="Dos guías de Cúspide trabajando en cordada sobre una cumbre"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/30" />
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="-mt-px grid grid-cols-1 gap-px border border-stone/15 bg-stone/15 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 70}>
              <div className="h-full bg-bone p-8">
                <div className="flex h-14 w-14 items-center justify-center bg-violet/10 font-mono text-sm text-violet">
                  {member.initials}
                </div>
                <p className="mt-6 font-display text-lg uppercase text-ink">
                  {member.name}
                </p>
                <dl className="mt-4 space-y-2 font-mono text-xs text-stone-light">
                  <div className="flex justify-between gap-2">
                    <dt>Cert.</dt>
                    <dd className="text-right text-stone">{member.cert}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Exp.</dt>
                    <dd className="text-stone">{member.years}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Esp.</dt>
                    <dd className="text-right text-stone">
                      {member.specialty}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
