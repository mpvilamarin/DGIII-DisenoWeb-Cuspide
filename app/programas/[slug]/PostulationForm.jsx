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
      <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet/10 text-violet-dark">
          ✓
        </span>
        <p className="mt-5 font-display text-2xl uppercase text-ink">
          ¡Listo!
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone">
          Te contactamos en menos de 5 días hábiles sobre tu postulación a{" "}
          <span className="text-violet-dark">{programName}</span>.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-stone/15 bg-stone/5 px-4 py-3 text-sm text-ink placeholder:text-stone-light outline-none transition focus:border-violet focus:bg-white focus:ring-2 focus:ring-violet/15";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="nombre"
          required
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre completo"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          className={inputClass}
        />
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Teléfono (opcional)"
          className={inputClass}
        />
        <select
          name="experiencia"
          required
          value={form.experiencia}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer appearance-none ${form.experiencia ? "" : "text-stone-light"}`}
        >
          <option value="" disabled>
            Nivel de experiencia
          </option>
          <option value="sin-experiencia">Sin experiencia técnica</option>
          <option value="pd">PD — Peu Difficile</option>
          <option value="ad">AD — Assez Difficile</option>
          <option value="d">D — Difficile</option>
          <option value="d-plus">D+ — Très Difficile</option>
        </select>
      </div>

      <textarea
        name="motivacion"
        required
        rows={3}
        value={form.motivacion}
        onChange={handleChange}
        placeholder="Contanos tu experiencia y por qué querés hacer este programa"
        className={`${inputClass} mt-4 resize-none`}
      />

      <button
        type="submit"
        className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-violet py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-violet-dark sm:w-auto sm:px-8"
      >
        Enviar postulación
        <span className="transition group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
