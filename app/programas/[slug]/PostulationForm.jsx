"use client";

import { useState } from "react";

export default function PostulationForm({ programName }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    experiencia: "",
    motivacion: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 py-8">
        <span className="block h-px w-12 bg-linear-to-r from-violet to-glacier" />
        <p className="font-display text-2xl uppercase text-bone">
          Postulación recibida
        </p>
        <p className="max-w-sm font-mono text-sm leading-relaxed text-bone/65">
          Revisaremos tu información y nos pondremos en contacto en los próximos
          5 días hábiles. Si fuiste seleccionado para continuar el proceso,
          recibirás un correo con las instrucciones para la entrevista.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-light">
          {programName}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border-b border-bone/20 bg-transparent py-3 font-mono text-sm text-bone placeholder:text-bone/30 outline-none focus:border-violet transition-colors";
  const labelClass =
    "font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Teléfono (opcional)</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+54 11 0000 0000"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Nivel de experiencia actual</label>
          <select
            name="experiencia"
            required
            value={form.experiencia}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Seleccioná tu nivel
            </option>
            <option value="sin-experiencia">Sin experiencia técnica</option>
            <option value="pd">PD — Peu Difficile</option>
            <option value="ad">AD — Assez Difficile</option>
            <option value="d">D — Difficile</option>
            <option value="d-plus">D+ — Très Difficile</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Contanos brevemente tu historial y motivación
        </label>
        <textarea
          name="motivacion"
          required
          rows={4}
          value={form.motivacion}
          onChange={handleChange}
          placeholder="Describí tu experiencia en montaña, expediciones previas y por qué querés hacer este programa."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-4 bg-violet px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-violet-light"
        >
          Enviar postulación
          <span className="transition group-hover:translate-x-1">→</span>
        </button>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/35">
          No es una compra. Evaluamos cada postulación individualmente antes de
          confirmar el ingreso al programa.
        </p>
      </div>
    </form>
  );
}
