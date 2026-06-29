export const programs = [
  {
    slug: "ascenso-tecnico-fitz-roy",
    name: "Ascenso Técnico",
    subtitle: "Cerro Fitz Roy",
    location: "El Chaltén, Patagonia Argentina",
    grade: "D",
    gradeLabel: "Difficile",
    tagline: "La cumbre más disputada de Patagonia exige más que condición física.",
    image: "/images/pinnacle-back.jpg",
    altImage: "/images/fitzroy-approach.jpg",

    ficha: [
      { label: "Dificultad", value: "D — Difficile" },
      { label: "Altitud máxima", value: "3.405 m s.n.m." },
      { label: "Duración total", value: "6 meses + 12 días en terreno" },
      { label: "Días en terreno", value: "12 días" },
      { label: "Grupo máximo", value: "6 participantes" },
      { label: "Ratio guía / cliente", value: "1 : 2" },
      { label: "Experiencia previa", value: "Grado AD acreditado · 2 años de escalada en roca" },
      { label: "Temporada", value: "Enero — Marzo (verano austral)" },
    ],

    desafio: [
      "El Fitz Roy no perdona la falta de preparación. Con un índice de cumbre menor al 30%, la montaña de granito que domina el horizonte de El Chaltén es técnicamente exigente, meteorológicamente impredecible y psicológicamente extenuante.",
      "Las ventanas de buen tiempo duran entre 12 y 48 horas en Patagonia. El equipo que no está listo cuando el tiempo abre, no llega a la cumbre. Por eso el entrenamiento es de seis meses, no de tres: porque los últimos metros del Fitz Roy los hiciste en el primer mes de preparación.",
      "La ruta Supercanaleta implica terreno glaciario, escalada en roca de hasta 5c y exposición sostenida a vientos de más de 80 km/h. No es un paseo: es el cierre de un proceso de formación completo.",
    ],

    cronograma: [
      {
        period: "Mes 1",
        duration: "2 semanas",
        title: "Evaluación física y revisión de antecedentes",
        body: "Test de aptitud física y revisión de antecedentes médicos y de montaña. Entrevista con el guía a cargo antes de aceptar la postulación.",
      },
      {
        period: "Meses 1–4",
        duration: "3 meses",
        title: "Plan de entrenamiento físico personalizado",
        body: "Programa de resistencia aeróbica, fuerza y carga progresiva adaptado al perfil de la ruta. Seguimiento mensual obligatorio con el equipo.",
      },
      {
        period: "Meses 3–5",
        duration: "4 días presenciales",
        title: "Clínica técnica: cuerdas, crampones, autorrescate",
        body: "Técnica de cuerdas, crampones en terreno real, nodos de seguridad y protocolos de autorrescate en escenarios glaciarios.",
      },
      {
        period: "Mes 5",
        duration: "1 semana",
        title: "Revisión y homologación de equipamiento",
        body: "Revisión individual de cada pieza de equipo técnico. Prueba en condiciones simuladas antes de confirmar el ingreso a la expedición.",
      },
      {
        period: "Mes 6",
        duration: "2 días",
        title: "Briefing final y evaluación de aptitud",
        body: "Evaluación física y mental definitiva. El equipo de guías determina si continuás. Sin excepciones: la montaña no espera a nadie.",
      },
      {
        period: "Expedición",
        duration: "12 días",
        title: "Ascenso en cordada — Supercanaleta",
        body: "Ascenso en cordada, gestión activa de riesgo, campamento en zona glaciaria y decisiones en tiempo real según condiciones meteorológicas.",
      },
    ],

    itinerario: [
      { dia: "Día 1", titulo: "Llegada a El Chaltén", altitudM: 400, altitud: "400 m", descripcion: "Reunión de equipo, revisión final de material y aclimatación inicial al valle." },
      { dia: "Día 2", titulo: "Marcha al campamento base", altitudM: 800, altitud: "800 m", descripcion: "Trekking de 6h al campamento base Polacos. Instalación y preparación de cargas." },
      { dia: "Día 3", titulo: "Rotación de aclimatación", altitudM: 1800, altitud: "1.800 m", descripcion: "Ascenso de carga al col superior. Reconocimiento de la ruta en terreno real." },
      { dia: "Días 4–5", titulo: "Espera meteorológica activa", altitudM: 800, altitud: "800 m", descripcion: "Período de espera en base. Revisión técnica y briefing diario de parte meteorológico." },
      { dia: "Día 6", titulo: "Ventana de ascenso — Inicio", altitudM: 1200, altitud: "1.200 m", descripcion: "Partida nocturna según apertura de ventana. Escalada de los sectores iniciales." },
      { dia: "Día 7", titulo: "Supercanaleta — Sector técnico", altitudM: 2800, altitud: "2.800 m", descripcion: "Tramo de mayor exigencia técnica. Escalada en roca y mixto. Progresión en cordada." },
      { dia: "Día 8", titulo: "Cumbre — Cerro Fitz Roy", altitudM: 3405, altitud: "3.405 m", descripcion: "Según condiciones: intento de cumbre o descenso técnico asegurado si el tiempo lo requiere." },
      { dia: "Días 9–10", titulo: "Descenso y retiro", altitudM: 800, altitud: "800 m", descripcion: "Descenso por la misma ruta con carga completa. Retiro de campamento base." },
      { dia: "Días 11–12", titulo: "Buffer meteorológico y debrief", altitudM: 400, altitud: "400 m", descripcion: "Días de reserva para contingencias. Evaluación final de la expedición con el equipo." },
    ],

    equipamiento: {
      provisto: [
        "Cuerdas de escalada 60 m",
        "Material colectivo de aseguramiento (fisureros, friends)",
        "Carpa de alta montaña (2 personas)",
        "Sistema de cocina de expedición",
        "Radio satelital Iridium",
        "Botiquín avanzado de emergencia",
        "Equipo de nevería y rescate en grietas",
        "GPS de expedición",
      ],
      participante: [
        "Botas de montaña doble (crampones compatibles)",
        "Crampones de 12 puntos",
        "Piolet de escalada",
        "Arnés de escalada certificado",
        "Casco de montaña",
        "Ropa base térmica (2 juegos)",
        "Capa intermedia: polar o softshell",
        "Cortavientos y sobre pantalón impermeables",
        "Guantes de escalada + manoplas de reserva",
        "Gafas UV4 + goggles de tormenta",
        "Sleeping bag −15°C o inferior",
        "Mochila de montaña 60–70 L",
        "Mochila de asalto 25–30 L",
        "Frontal + baterías de repuesto",
      ],
    },

    protocolos: [
      {
        icon: "↓",
        titulo: "Plan de evacuación",
        descripcion: "Ruta primaria: descenso técnico por Supercanaleta hacia campamento Polacos. Ruta secundaria por Col del Fitz Roy si la primaria está comprometida. Protocolo de llamada de emergencia a SEMTUR El Chaltén activado por radio satelital.",
      },
      {
        icon: "◈",
        titulo: "Comunicación satelital",
        descripcion: "Radio Iridium activa durante toda la expedición. Check-in obligatorio con base en El Chaltén cada 24h. Puntos fijos: campamento base (17:00), col superior (antes de avanzar), cumbre o retorno (confirmación de estado).",
      },
      {
        icon: "⚑",
        titulo: "Protocolo de tormenta",
        descripcion: "Criterio de retiro: vientos superiores a 60 km/h sostenidos o precipitación durante la ventana de ascenso. Retiro inmediato antes de que el equipo quede expuesto en tramos técnicos. La decisión es del guía a cargo, no sujeta a votación.",
      },
    ],

    guias: [
      {
        nombre: "Nicolás Cúspide",
        certificacion: "UIAGM — IFMGA",
        experiencia: "12 ascensos al Fitz Roy. Rutas Supercanaleta y Franco-Argentina.",
        imagen: "/images/team-smiling.jpg",
      },
      {
        nombre: "Martín Aguirre",
        certificacion: "AAGM — Aspirante UIAGM",
        experiencia: "6 temporadas en el macizo del Fitz Roy como segundo de cordada.",
        imagen: "/images/ridge-walk.jpg",
      },
    ],

    postulacion: {
      requisitos: [
        "Haber completado un programa de grado AD o equivalente acreditado",
        "Mínimo 2 años de escalada en roca con historial documentado",
        "Evaluación médica con autorización para actividad de alta montaña",
        "Test de aptitud física aprobado por el equipo de guías",
        "Entrevista presencial o videollamada con el guía a cargo",
      ],
    },

    relacionados: ["cerro-torre-avanzado", "glaciar-perito-moreno"],
    guiaRelacionado: true,
  },

  {
    slug: "glaciar-perito-moreno",
    name: "Travesía de Hielo",
    subtitle: "Glaciar Perito Moreno",
    location: "Los Glaciares, Santa Cruz, Patagonia",
    grade: "AD",
    gradeLabel: "Assez Difficile",
    tagline: "Cuatro kilómetros de hielo vivo sobre el mayor glaciar accesible del planeta.",
    image: "/images/ice-couloir.jpg",
    altImage: "/images/rope-team.jpg",

    ficha: [
      { label: "Dificultad", value: "AD — Assez Difficile" },
      { label: "Altitud máxima", value: "1.200 m s.n.m." },
      { label: "Duración total", value: "4 meses + 6 días en terreno" },
      { label: "Días en terreno", value: "6 días" },
      { label: "Grupo máximo", value: "8 participantes" },
      { label: "Ratio guía / cliente", value: "1 : 3" },
      { label: "Experiencia previa", value: "Sin escalada técnica previa requerida" },
      { label: "Temporada", value: "Todo el año (condiciones variables)" },
    ],

    desafio: [
      "El Perito Moreno avanza cuatro metros por día. Cada grieta, serák y pasaje tiene una lógica dinámica: el glaciar se mueve mientras caminás sobre él. Entender ese movimiento, leer el terreno y mantener la cordada en tensión correcta es el trabajo del guía. Tu trabajo es estar preparado físicamente para completarlo.",
      "A diferencia de una travesía de alta montaña, el Perito Moreno no requiere experiencia técnica previa. Sí exige condición física, tolerancia a terreno irregular prolongado y capacidad de operar con crampones en rampas de hasta 40 grados.",
      "Es el punto de partida correcto para quienes quieren entrar al alpinismo desde la base correcta.",
    ],

    cronograma: [
      {
        period: "Mes 1",
        duration: "1 semana",
        title: "Evaluación y orientación inicial",
        body: "Evaluación física, revisión de objetivos y diseño del plan de preparación adaptado al perfil del participante.",
      },
      {
        period: "Meses 1–3",
        duration: "3 meses",
        title: "Acondicionamiento físico progresivo",
        body: "Trabajo aeróbico de base, caminatas con carga y adaptación al terreno montañoso. Sin técnica en esta fase.",
      },
      {
        period: "Mes 3",
        duration: "2 días",
        title: "Introducción a crampones y piolet",
        body: "Taller práctico en glaciar accesible. Técnica de marcha, equilibrio y manejo básico del piolet.",
      },
      {
        period: "Mes 4",
        duration: "1 semana",
        title: "Briefing final y revisión de equipo",
        body: "Revisión completa del equipo individual, briefing de seguridad y preparación logística para la travesía.",
      },
    ],

    itinerario: [
      { dia: "Día 1", titulo: "Llegada a El Calafate", altitudM: 200, altitud: "200 m", descripcion: "Reunión de equipo, briefing de seguridad y revisión de equipamiento individual." },
      { dia: "Día 2", titulo: "Trekking de acercamiento", altitudM: 600, altitud: "600 m", descripcion: "Marcha de aproximación al sector de ingreso al glaciar. Instalación de campamento." },
      { dia: "Días 3–4", titulo: "Travesía sobre el glaciar", altitudM: 1000, altitud: "1.000 m", descripcion: "Progresión en cordada. Crevasses, seracs y pasajes técnicos con guía permanente." },
      { dia: "Día 5", titulo: "Sector terminal y penitentes", altitudM: 800, altitud: "800 m", descripcion: "Exploración del frente glaciario y zona de penitentes." },
      { dia: "Día 6", titulo: "Descenso y debrief", altitudM: 200, altitud: "200 m", descripcion: "Retorno al punto de partida. Debrief individual con el guía asignado." },
    ],

    equipamiento: {
      provisto: [
        "Crampones de 10 puntos",
        "Cuerdas de travesía",
        "Material de aseguramiento básico",
        "Carpa de expedición",
        "Botiquín avanzado de emergencia",
        "Radio satelital",
      ],
      participante: [
        "Botas de montaña semirígidas",
        "Piolet básico",
        "Ropa técnica impermeable (chaqueta + pantalón)",
        "Prendas base de lana merino o sintético",
        "Guantes impermeables",
        "Gafas UV4",
        "Mochila 40–50 L",
        "Sleeping bag −5°C",
        "Frontal con baterías",
      ],
    },

    protocolos: [
      {
        icon: "↓",
        titulo: "Plan de evacuación",
        descripcion: "Evacuación por ruta terrestre a El Calafate en menos de 3 horas desde cualquier punto de la travesía. Contacto con SAME y Gendarmería Nacional activado por protocolo AAGM.",
      },
      {
        icon: "◈",
        titulo: "Comunicación",
        descripcion: "Check-in diario con base en El Calafate. Radio satelital disponible en todo momento. Puntos fijos de comunicación en campamento base y sector central del glaciar.",
      },
      {
        icon: "⚑",
        titulo: "Protocolo de grietas",
        descripcion: "Progresión siempre en cordada. Separación mínima de 8 metros entre participantes. Rescate en grietas practicado en simulacro el día anterior a la travesía.",
      },
    ],

    guias: [
      {
        nombre: "Sofía Barros",
        certificacion: "AAGM — Guía de Alta Montaña",
        experiencia: "40+ travesías en el Perito Moreno como guía principal.",
        imagen: "/images/team-smiling.jpg",
      },
    ],

    postulacion: {
      requisitos: [
        "Sin experiencia técnica previa requerida",
        "Condición física para caminatas de 6+ horas con carga",
        "Certificado médico básico sin patologías cardíacas",
        "Completar el formulario y entrevista de orientación",
      ],
    },

    relacionados: ["iniciacion-cordada", "ascenso-tecnico-fitz-roy"],
    guiaRelacionado: false,
  },

  {
    slug: "cerro-torre-avanzado",
    name: "Expedición Avanzada",
    subtitle: "Cerro Torre",
    location: "El Chaltén, Patagonia Argentina",
    grade: "D+",
    gradeLabel: "Très Difficile",
    tagline: "El grito de piedra. La línea donde termina la preparación y empieza el alpinismo de élite.",
    image: "/images/rock-face.png",
    altImage: "/images/ice-couloir.jpg",

    ficha: [
      { label: "Dificultad", value: "D+ — Très Difficile" },
      { label: "Altitud máxima", value: "3.128 m s.n.m." },
      { label: "Duración total", value: "9 meses + 16 días en terreno" },
      { label: "Días en terreno", value: "16 días" },
      { label: "Grupo máximo", value: "4 participantes" },
      { label: "Ratio guía / cliente", value: "1 : 1" },
      { label: "Experiencia previa", value: "Grado D acreditado · escalada 6a+ · temporada alpina previa" },
      { label: "Temporada", value: "Enero — Febrero (ventanas cortas)" },
    ],

    desafio: [
      "El Cerro Torre es considerado uno de los seis grandes problemas del alpinismo mundial. Su cumbre es técnicamente más difícil que el Fitz Roy: mezcla de granito compacto, terreno mixto y un champiñón de hielo en la cima que cambia de forma cada temporada.",
      "La ruta Ragni di Lecco implica escalada en roca hasta grado 6a en terreno expuesto, progresión en terreno glaciario crevaseado y manejo de condiciones extremas en altura. El cociente de intento/cumbre histórico es del 12%.",
      "Este es el programa más exigente de Cúspide. No se accede sin haber completado el Fitz Roy u otro D equivalente. Los nueve meses de preparación no son una formalidad: son el mínimo viable para tener opciones reales en la cumbre.",
    ],

    cronograma: [
      {
        period: "Meses 1–2",
        duration: "2 meses",
        title: "Evaluación de antecedentes y plan de temporada",
        body: "Revisión exhaustiva del historial técnico. Diseño del plan de temporada específico para el Cerro Torre con el guía principal.",
      },
      {
        period: "Meses 2–5",
        duration: "4 meses",
        title: "Entrenamiento de resistencia extrema",
        body: "Volumen alto de trabajo aeróbico, escalada en roca semanal y cargas de alta duración con exposición progresiva al frío.",
      },
      {
        period: "Meses 4–6",
        duration: "3 meses",
        title: "Técnica avanzada en roca y mixto",
        body: "Clínicas de escalada en roca (6a+), gran pared y progresión en terreno mixto con condiciones reales.",
      },
      {
        period: "Mes 7",
        duration: "5 días",
        title: "Simulacro en terreno equivalente",
        body: "Expedición de simulacro en cerro de grado similar (Cordón Marconi). Evaluación de decisiones en condiciones reales.",
      },
      {
        period: "Mes 8",
        duration: "2 semanas",
        title: "Preparación logística completa",
        body: "Revisión de equipo, permisos y plan de acceso. Revisión médica definitiva.",
      },
      {
        period: "Mes 9",
        duration: "3 días",
        title: "Briefing final — go / no-go",
        body: "Evaluación definitiva del equipo completo. Decisión go/no-go por el guía principal. Sin excepciones.",
      },
    ],

    itinerario: [
      { dia: "Días 1–2", titulo: "El Chaltén — Campamento Torres", altitudM: 900, altitud: "900 m", descripcion: "Acceso por Laguna Torre. Instalación de campamento base y aclimatación." },
      { dia: "Días 3–4", titulo: "Rotación y reconocimiento", altitudM: 1400, altitud: "1.400 m", descripcion: "Reconocimiento de la ruta Ragni. Evaluación del estado del hielo y la roca." },
      { dia: "Días 5–8", titulo: "Espera meteorológica activa", altitudM: 900, altitud: "900 m", descripcion: "Período de espera estratégico. Mantenimiento físico y revisión técnica diaria." },
      { dia: "Días 9–11", titulo: "Intento de ascenso — Ruta Ragni", altitudM: 3000, altitud: "3.000 m", descripcion: "Ascenso en cordada 1:1. Progresión en terreno mixto y glaciario hasta el champiñón de cima." },
      { dia: "Día 12", titulo: "Cumbre — Cerro Torre", altitudM: 3128, altitud: "3.128 m", descripcion: "Intento de cumbre según apertura de ventana. Descenso técnico inmediato si el tiempo cierra." },
      { dia: "Días 13–14", titulo: "Descenso y retiro", altitudM: 900, altitud: "900 m", descripcion: "Descenso técnico completo y retiro de campamento base." },
      { dia: "Días 15–16", titulo: "Buffer y debrief", altitudM: 400, altitud: "400 m", descripcion: "Días de contingencia meteorológica. Debrief extenso con el guía a cargo." },
    ],

    equipamiento: {
      provisto: [
        "Cuerdas dobles de escalada 60 m",
        "Material de gran pared (friends, fisureros, pernos)",
        "Carpa de alta montaña 4 estaciones",
        "Cocina de expedición y combustible",
        "Radio satelital y GPS",
        "Botiquín avanzado con DEA portátil",
        "Material de rescate en grietas",
      ],
      participante: [
        "Botas de montaña doble de alta gama",
        "Crampones técnicos de 12 puntos",
        "Piolet de escalada (no de marcha)",
        "Arnés de escalada de alto rendimiento",
        "Casco de montaña certificado",
        "Prendas técnicas de cuatro capas",
        "Guantes de escalada mixta + manoplas de reserva",
        "Gafas UV4 + goggles de tormenta",
        "Sleeping bag −20°C o inferior",
        "Mochila técnica 70 L",
        "Frontal de alta potencia + 2 sets de baterías",
      ],
    },

    protocolos: [
      {
        icon: "↓",
        titulo: "Plan de evacuación",
        descripcion: "Tres rutas definidas según punto de incidente: ruta Ragni baja, descenso al Col de la Esperanza, y evacuación aérea desde Laguna Torre con Gendarmería Nacional.",
      },
      {
        icon: "◈",
        titulo: "Comunicación satelital",
        descripcion: "Check-in cada 12h durante el ascenso técnico. Dos radios satelitales en el equipo. Protocolo de activación directa con SEMTUR El Chaltén y helicoportación de contingencia contratada.",
      },
      {
        icon: "⚑",
        titulo: "Protocolo de tormenta",
        descripcion: "Criterio: vientos +80 km/h sostenidos o visibilidad menor a 50 m. Retiro inmediato y obligatorio. Si la tormenta sorprende en pared: vivac en el primer punto seguro, espera máxima de 18h antes de descenso forzado.",
      },
    ],

    guias: [
      {
        nombre: "Nicolás Cúspide",
        certificacion: "UIAGM — IFMGA",
        experiencia: "4 ascensos al Cerro Torre vía Ragni. Historial en Karakorum e Himalaya.",
        imagen: "/images/team-smiling.jpg",
      },
    ],

    postulacion: {
      requisitos: [
        "Haber completado grado D equivalente (Fitz Roy u otro certificado)",
        "Escalada en roca 6a+ documentada en dos temporadas consecutivas",
        "Temporada alpina previa en zona de alta montaña",
        "Evaluación médica completa con electrocardiograma de esfuerzo",
        "Entrevista técnica presencial con Nicolás Cúspide",
        "Aprobación unánime del equipo de guías",
      ],
    },

    relacionados: ["ascenso-tecnico-fitz-roy", "glaciar-perito-moreno"],
    guiaRelacionado: true,
  },

  {
    slug: "iniciacion-cordada",
    name: "Iniciación en Cordada",
    subtitle: "Cordón Marconi",
    location: "El Chaltén, Patagonia Argentina",
    grade: "PD",
    gradeLabel: "Peu Difficile",
    tagline: "El primer paso en la montaña real. Sin atajos, sin simulaciones.",
    image: "/images/rope-team.jpg",
    altImage: "/images/ridge-walk.jpg",

    ficha: [
      { label: "Dificultad", value: "PD — Peu Difficile" },
      { label: "Altitud máxima", value: "1.800 m s.n.m." },
      { label: "Duración total", value: "3 meses + 5 días en terreno" },
      { label: "Días en terreno", value: "5 días" },
      { label: "Grupo máximo", value: "10 participantes" },
      { label: "Ratio guía / cliente", value: "1 : 4" },
      { label: "Experiencia previa", value: "Sin experiencia técnica requerida" },
      { label: "Temporada", value: "Octubre — Abril" },
    ],

    desafio: [
      "El Cordón Marconi es la puerta de entrada al alpinismo patagónico. No requiere experiencia técnica previa, pero exige preparación física seria y disposición para operar en terreno real desde el primer día.",
      "El programa está diseñado para personas que nunca han estado en una cordada pero tienen claro que quieren hacerlo bien. Aprenderás a moverte en glaciar, usar crampones y piolet, y aplicar los protocolos básicos de seguridad en montaña.",
      "Al terminar, tendrás las herramientas y el historial para postular a programas de mayor exigencia técnica.",
    ],

    cronograma: [
      {
        period: "Mes 1",
        duration: "3 semanas",
        title: "Evaluación y plan físico",
        body: "Evaluación inicial y diseño del plan de acondicionamiento. Foco en resistencia aeróbica y fuerza de piernas.",
      },
      {
        period: "Meses 1–2",
        duration: "2 meses",
        title: "Acondicionamiento progresivo",
        body: "Caminatas largas con carga, fuerza funcional y adaptación al frío. Sin equipamiento técnico en esta fase.",
      },
      {
        period: "Mes 3",
        duration: "1 día",
        title: "Taller de crampones y piolet",
        body: "Práctica en terreno simulado. Introducción a la marcha en cordada y técnica básica de piolet.",
      },
    ],

    itinerario: [
      { dia: "Día 1", titulo: "El Chaltén — Campamento base", altitudM: 600, altitud: "600 m", descripcion: "Reunión, briefing de seguridad y marcha de aproximación." },
      { dia: "Día 2", titulo: "Glaciar inferior — práctica técnica", altitudM: 1000, altitud: "1.000 m", descripcion: "Primera jornada técnica. Marcha con crampones en terreno real." },
      { dia: "Días 3–4", titulo: "Ascenso al Cordón Marconi", altitudM: 1800, altitud: "1.800 m", descripcion: "Progresión en cordada por la ruta normal. Vivac en altura." },
      { dia: "Día 5", titulo: "Descenso y debrief", altitudM: 400, altitud: "400 m", descripcion: "Descenso y retorno. Debrief individual con el guía asignado." },
    ],

    equipamiento: {
      provisto: [
        "Crampones de 10 puntos",
        "Cuerdas de travesía",
        "Material de seguridad básico",
        "Carpa de expedición",
        "Botiquín de emergencia",
      ],
      participante: [
        "Botas de montaña semirígidas",
        "Piolet básico",
        "Ropa técnica impermeable",
        "Prendas base y media capa",
        "Guantes impermeables",
        "Mochila 40–50 L",
        "Sleeping bag −5°C",
        "Frontal",
      ],
    },

    protocolos: [
      {
        icon: "↓",
        titulo: "Plan de evacuación",
        descripcion: "Ruta terrestre directa a El Chaltén en menos de 2 horas. Protocolo de comunicación con SEMTUR ante cualquier incidente.",
      },
      {
        icon: "◈",
        titulo: "Comunicación",
        descripcion: "Radio satelital en todo momento. Check-in al salir y al regresar de cada jornada. Sin zonas de silencio en la ruta.",
      },
      {
        icon: "⚑",
        titulo: "Clima adverso",
        descripcion: "Cancelación automática si el parte indica vientos superiores a 40 km/h. Criterio del guía inapelable y en beneficio del grupo.",
      },
    ],

    guias: [
      {
        nombre: "Sofía Barros",
        certificacion: "AAGM — Guía de Alta Montaña",
        experiencia: "80+ iniciaciones en Cordón Marconi. Formadora de guías en la región.",
        imagen: "/images/team-smiling.jpg",
      },
      {
        nombre: "Tomás Ferreyra",
        certificacion: "AAGM — Guía de Montaña",
        experiencia: "5 temporadas en Cordón Marconi como guía asistente y principal.",
        imagen: "/images/ridge-walk.jpg",
      },
    ],

    postulacion: {
      requisitos: [
        "Sin experiencia técnica requerida",
        "Capacidad de caminatas de 6+ horas con carga",
        "Certificado médico básico de aptitud",
        "Completar el formulario y entrevista de orientación",
      ],
    },

    relacionados: ["glaciar-perito-moreno", "ascenso-tecnico-fitz-roy"],
    guiaRelacionado: false,
  },
];

export function getProgramBySlug(slug) {
  return programs.find((p) => p.slug === slug) || null;
}
