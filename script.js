// 1) Define tu malla: cada curso con código, semestre (1–10), columna (1–6) y tipo
const cursos = [
  // Semestre 1
  { code: 'Precálculo',                              sem: 1, col: 1, type: 'common',    name: 'Precálculo' },
  { code: 'Introducción a Matemáticas Discretas',    sem: 1, col: 1, type: 'common',    name: 'Introducción a Matemáticas Discretas' },
  { code: 'Física I',                                sem: 1, col: 1, type: 'common',    name: 'Física I' },
  { code: 'Herramientas Computacionales',             sem: 1, col: 1, type: 'common',    name: 'Herramientas Computacionales' },
  { code: 'Química',                                 sem: 1, col: 1, type: 'common',    name: 'Química' },
  { code: 'Introducción a la Ingeniería',            sem: 1, col: 1, type: 'common',    name: 'Introducción a la Ingeniería' },

  // Semestre 2
  { code: 'Cálculo Diferencial e Integral',          sem: 2, col: 2, type: 'common',    name: 'Cálculo Diferencial e Integral' },
  { code: 'Álgebra Lineal',                          sem: 2, col: 2, type: 'common',    name: 'Álgebra Lineal' },
  { code: 'Física II',                               sem: 2, col: 2, type: 'common',    name: 'Física II' },
  { code: 'Programación',                            sem: 2, col: 2, type: 'specialty', name: 'Programación' },
  { code: 'Introducción a las Geociencias',          sem: 2, col: 2, type: 'common',    name: 'Introducción a las Geociencias' },

  // Semestre 3
  { code: 'Cálculo Avanzado',                        sem: 3, col: 3, type: 'common',    name: 'Cálculo Avanzado' },
  { code: 'Ecuaciones Diferenciales',                sem: 3, col: 3, type: 'common',    name: 'Ecuaciones Diferenciales' },
  { code: 'Economía Industrial',                     sem: 3, col: 3, type: 'specialty', name: 'Economía Industrial' },
  { code: 'Taller de Industrias',                    sem: 3, col: 3, type: 'specialty', name: 'Taller de Industrias' },
  { code: 'Comunicación Oral y Escrita',             sem: 3, col: 3, type: 'common',    name: 'Comunicación Oral y Escrita' },

  // Semestre 4
  { code: 'Probabilidades y Estadística',            sem: 4, col: 4, type: 'common',    name: 'Probabilidades y Estadística' },
  { code: 'Métodos Numéricos',                       sem: 4, col: 4, type: 'common',    name: 'Métodos Numéricos' },
  { code: 'Física y Tecnología',                     sem: 4, col: 4, type: 'specialty', name: 'Física y Tecnología' },
  { code: 'Ingeniería de Procesos y Diseño de Servicios', sem: 4, col: 4, type: 'specialty', name: 'Ingeniería de Procesos y Diseño de Servicios' },
  { code: 'Introducción a la Bioingeniería',         sem: 4, col: 4, type: 'common',    name: 'Introducción a la Bioingeniería' },

  // Semestre 5
  { code: 'Minería de Datos',                        sem: 5, col: 5, type: 'common',    name: 'Minería de Datos' },
  { code: 'Ingeniería de Marketing',                 sem: 5, col: 5, type: 'specialty', name: 'Ingeniería de Marketing' },
  { code: 'Optimización',                            sem: 5, col: 5, type: 'specialty', name: 'Optimización' },
  { code: 'Taller de Innovación y Emprendimiento',   sem: 5, col: 5, type: 'specialty', name: 'Taller de Innovación y Emprendimiento' },
  { code: 'Ética y Responsabilidad Social en Ingeniería', sem: 5, col: 5, type: 'common',    name: 'Ética y Responsabilidad Social en Ingeniería' },

  // Semestre 6
  { code: 'Contabilidad y Finanzas',                 sem: 6, col: 6, type: 'specialty', name: 'Contabilidad y Finanzas' },
  { code: 'Tecnologías de Información y Automatización', sem: 6, col: 6, type: 'specialty', name: 'Tecnologías de Información y Automatización' },
  { code: 'Simulación de Sistemas Complejos',        sem: 6, col: 6, type: 'specialty', name: 'Simulación de Sistemas Complejos' },
  { code: 'Modelo de Desarrollo Regionales',         sem: 6, col: 6, type: 'specialty', name: 'Modelo de Desarrollo Regionales' },
  { code: 'Taller de Negociación y Liderazgo',       sem: 6, col: 6, type: 'specialty', name: 'Taller de Negociación y Liderazgo' },
  { code: 'Legislación en Ingeniería y Medio Ambiente', sem: 6, col: 6, type: 'common',    name: 'Legislación en Ingeniería y Medio Ambiente' },

  // Semestre 7
  { code: 'Formulación y Evaluación de Proyectos',   sem: 7, col: 7, type: 'common',    name: 'Formulación y Evaluación de Proyectos' },
  { code: 'Taller de Gestión basada en la Evidencia', sem: 7, col: 7, type: 'specialty', name: 'Taller de Gestión basada en la Evidencia' },
  { code: 'Logística, Manufactura y Servicios',      sem: 7, col: 7, type: 'specialty', name: 'Logística, Manufactura y Servicios' },
  { code: 'Proyecto Desarrollo Regional',            sem: 7, col: 7, type: 'specialty', name: 'Proyecto Desarrollo Regional' },
  { code: 'Gestión de Personas',                     sem: 7, col: 7, type: 'specialty', name: 'Gestión de Personas' },
  { code: 'Práctica Profesional',                    sem: 7, col: 7, type: 'common',    name: 'Práctica Profesional' },

  // Semestre 8
  { code: 'Estrategia y Control de Gestión',         sem: 8, col: 8, type: 'specialty', name: 'Estrategia y Control de Gestión' },
  { code: 'Globalización y Negocios Internacionales', sem: 8, col: 8, type: 'specialty', name: 'Globalización y Negocios Internacionales' },
  { code: 'Industria Inteligente',                   sem: 8, col: 8, type: 'specialty', name: 'Industria Inteligente' },
  { code: 'Planes de Negocio',                       sem: 8, col: 8, type: 'specialty', name: 'Planes de Negocio' },
  { code: 'Electivo/Minor',                          sem: 8, col: 8, type: 'specialty', name: 'Electivo/Minor' },

  // Semestre 9
  { code: 'Taller de Proyectos',                     sem: 9, col: 9, type: 'common',    name: 'Taller de Proyectos' },
  { code: 'Electivo I',                              sem: 9, col: 9, type: 'specialty', name: 'Electivo I' },
  { code: 'Electivo/Minor',                          sem: 9, col: 9, type: 'specialty', name: 'Electivo/Minor' },
  { code: 'Electivo/Minor',                          sem: 9, col: 9, type: 'specialty', name: 'Electivo/Minor' },

  // Semestre 10
  { code: 'Trabajo de Título',                       sem: 10, col: 10, type: 'common',   name: 'Trabajo de Título' },
];

// 2) Pinta la malla
const container = document.getElementById('malla-container');
cursos.forEach(c => {
  const d = document.createElement('div');
  d.classList.add('course', c.type);
  d.textContent = c.code;
  // Grid positioning
  d.style.gridRowStart    = c.sem;
  d.style.gridColumnStart = c.col;
  // Guarda info en data-attributes
  d.dataset.nombre = c.name;
  d.dataset.sem    = c.sem;
  container.appendChild(d);
});

// 3) Modal logic
const modal      = document.getElementById('modal');
const titleEl    = document.getElementById('modal-title');
const bodyEl     = document.getElementById('modal-body');
const closeBtn   = document.getElementById('modal-close');

// Al hacer click en cualquier curso
container.addEventListener('click', e => {
  const target = e.target;
  if (!target.classList.contains('course')) return;
  titleEl.textContent = target.dataset.nombre;
  bodyEl.textContent  = `Semestre: ${target.dataset.sem}`;
  modal.classList.remove('hidden');
});

// Cerrar modal
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});
