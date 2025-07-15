// script.js

// 1) Define tu malla con prerrequisitos:
//    cada curso tiene ahora un campo `prereqs` con un array de códigos
const cursos = [
  // Semestre 1 (sin prerrequisitos)
  { code: 'Precálculo',                            sem: 1, col: 1, type: 'common',    name: 'Precálculo',                            prereqs: [] },
  { code: 'Introducción a Matemáticas Discretas',  sem: 1, col: 2, type: 'common',    name: 'Introducción a Matemáticas Discretas',  prereqs: [] },
  { code: 'Física I',                              sem: 1, col: 3, type: 'common',    name: 'Física I',                              prereqs: [] },
  { code: 'Herramientas Computacionales',           sem: 1, col: 4, type: 'common',    name: 'Herramientas Computacionales',           prereqs: [] },
  { code: 'Química',                               sem: 1, col: 5, type: 'common',    name: 'Química',                               prereqs: [] },
  { code: 'Introducción a la Ingeniería',          sem: 1, col: 6, type: 'common',    name: 'Introducción a la Ingeniería',          prereqs: [] },

  // Semestre 2
  { code: 'Cálculo Diferencial e Integral',        sem: 2, col: 1, type: 'common',    name: 'Cálculo Diferencial e Integral',        prereqs: ['Precálculo'] },
  { code: 'Álgebra Lineal',                        sem: 2, col: 2, type: 'common',    name: 'Álgebra Lineal',                        prereqs: ['Introducción a Matemáticas Discretas'] },
  { code: 'Física II',                             sem: 2, col: 3, type: 'common',    name: 'Física II',                             prereqs: ['Precálculo'] },
  { code: 'Programación',                          sem: 2, col: 4, type: 'common', name: 'Programación',                          prereqs: ['Herramientas Computacionales'] },
  { code: 'Introducción a las Geociencias',        sem: 2, col: 5, type: 'common',    name: 'Introducción a las Geociencias',        prereqs: ['Química'] },

  // Semestre 3
  { code: 'Cálculo Avanzado',                      sem: 3, col: 1, type: 'common',    name: 'Cálculo Avanzado',                      prereqs: ['Cálculo Diferencial e Integral']},
  { code: 'Ecuaciones Diferenciales',              sem: 3, col: 2, type: 'common',    name: 'Ecuaciones Diferenciales',              prereqs: ['Cálculo Avanzado'] },
  { code: 'Economía Industrial',                   sem: 3, col: 3, type: 'specialty', name: 'Economía Industrial',                   prereqs: [] },
  { code: 'Taller de Industrias',                  sem: 3, col: 4, type: 'specialty', name: 'Taller de Industrias',                  prereqs: [] },
  { code: 'Comunicación Oral y Escrita',           sem: 3, col: 5, type: 'common',    name: 'Comunicación Oral y Escrita',           prereqs: [] },

 // Semestre 4
  { code: 'Probabilidades y Estadística',          sem: 4, col: 1, type: 'common',    name: 'Probabilidades y Estadística' },
  { code: 'Métodos Numéricos',                     sem: 4, col: 2, type: 'common',    name: 'Métodos Numéricos' },
  { code: 'Física y Tecnología',                   sem: 4, col: 3, type: 'specialty', name: 'Física y Tecnología' },
  { code: 'Ingeniería de Procesos y Diseño de Servicios', sem: 4, col: 4, type: 'specialty', name: 'Ingeniería de Procesos y Diseño de Servicios' },
  { code: 'Introducción a la Bioingeniería',       sem: 4, col: 5, type: 'common',    name: 'Introducción a la Bioingeniería' },

  // Semestre 5
  { code: 'Minería de Datos',                      sem: 5, col: 1, type: 'common',    name: 'Minería de Datos' },
  { code: 'Ingeniería de Marketing',               sem: 5, col: 2, type: 'specialty', name: 'Ingeniería de Marketing' },
  { code: 'Optimización',                          sem: 5, col: 3, type: 'specialty', name: 'Optimización' },
  { code: 'Taller de Innovación y Emprendimiento', sem: 5, col: 4, type: 'specialty', name: 'Taller de Innovación y Emprendimiento' },
  { code: 'Ética y Responsabilidad Social en Ingeniería', sem: 5, col: 5, type: 'common',    name: 'Ética y Responsabilidad Social en Ingeniería' },

  // Semestre 6
  { code: 'Contabilidad y Finanzas',               sem: 6, col: 1, type: 'specialty', name: 'Contabilidad y Finanzas' },
  { code: 'Tecnologías de Información y Automatización', sem: 6, col: 2, type: 'specialty', name: 'Tecnologías de Información y Automatización' },
  { code: 'Simulación de Sistemas Complejos',      sem: 6, col: 3, type: 'specialty', name: 'Simulación de Sistemas Complejos' },
  { code: 'Modelo de Desarrollo Regionales',       sem: 6, col: 4, type: 'specialty', name: 'Modelo de Desarrollo Regionales' },
  { code: 'Taller de Negociación y Liderazgo',     sem: 6, col: 5, type: 'specialty', name: 'Taller de Negociación y Liderazgo' },
  { code: 'Legislación en Ingeniería y Medio Ambiente', sem: 6, col: 6, type: 'common',    name: 'Legislación en Ingeniería y Medio Ambiente' },

  // Semestre 7
  { code: 'Formulación y Evaluación de Proyectos', sem: 7, col: 1, type: 'common',    name: 'Formulación y Evaluación de Proyectos' },
  { code: 'Taller de Gestión basada en la Evidencia', sem: 7, col: 2, type: 'specialty', name: 'Taller de Gestión basada en la Evidencia' },
  { code: 'Logística, Manufactura y Servicios',    sem: 7, col: 3, type: 'specialty', name: 'Logística, Manufactura y Servicios' },
  { code: 'Proyecto Desarrollo Regional',          sem: 7, col: 4, type: 'specialty', name: 'Proyecto Desarrollo Regional' },
  { code: 'Gestión de Personas',                   sem: 7, col: 5, type: 'specialty', name: 'Gestión de Personas' },
  { code: 'Práctica Profesional',                  sem: 7, col: 6, type: 'common',    name: 'Práctica Profesional' },

  // Semestre 8
  { code: 'Estrategia y Control de Gestión',       sem: 8, col: 1, type: 'specialty', name: 'Estrategia y Control de Gestión' },
  { code: 'Globalización y Negocios Internacionales', sem: 8, col: 2, type: 'specialty', name: 'Globalización y Negocios Internacionales' },
  { code: 'Industria Inteligente',                 sem: 8, col: 3, type: 'specialty', name: 'Industria Inteligente' },
  { code: 'Planes de Negocio',                     sem: 8, col: 4, type: 'specialty', name: 'Planes de Negocio' },
  { code: 'Electivo/Minor',                        sem: 8, col: 5, type: 'specialty', name: 'Electivo/Minor' },

  // Semestre 9
  { code: 'Taller de Proyectos',                   sem: 9, col: 1, type: 'common',    name: 'Taller de Proyectos' },
  { code: 'Electivo I',                            sem: 9, col: 2, type: 'specialty', name: 'Electivo I' },
  { code: 'Electivo/Minor',                        sem: 9, col: 3, type: 'specialty', name: 'Electivo/Minor' },
  { code: 'Electivo/Minor',                        sem: 9, col: 4, type: 'specialty', name: 'Electivo/Minor' },

  // Semestre 10
  { code: 'Trabajo de Título',                     sem: 10, col: 1, type: 'common',   name: 'Trabajo de Título' },
];

// 2) Variables de estado
const selected = new Set();  // cursos completados
const container = document.getElementById('malla-container');

// 3) Crear cabeceras de semestre (fila 1)
for (let sem = 1; sem <= 10; sem++) {
  const label = document.createElement('div');
  label.classList.add('semester-label');
  label.textContent = `Sem ${sem}`;
  label.style.gridColumnStart = sem;
  container.appendChild(label);
}

// 4) Función que desbloquea cursos cuyos prerrequisitos estén todos en `selected`
function unlockCourses() {
  cursos.forEach(c => {
    const el = document.querySelector(`.course[data-code="${c.code}"]`);
    // sólo los que estaban ocultos
    if (c.prereqs.length > 0 && el.classList.contains('hidden')) {
      const ok = c.prereqs.every(pre => selected.has(pre));
      if (ok) el.classList.remove('hidden');
    }
  });
}

// 5) Renderizar todos los cursos
cursos.forEach(c => {
  const d = document.createElement('div');
  d.classList.add('course', c.type);
  d.textContent = c.code;
  // atributos para colocación y lógica
  d.dataset.nombre = c.name;
  d.dataset.sem    = c.sem;
  d.dataset.code   = c.code;
  // grid positioning (columna = semestre, fila = track + 1)
  d.style.gridColumnStart = c.sem;
  d.style.gridRowStart    = c.col + 1;

  // si tiene prerrequisitos, partir oculto
  if (c.prereqs.length > 0) {
    d.classList.add('hidden'); 
  }

  container.appendChild(d);
});

// 6) Lógica de tachado + desbloqueo
container.addEventListener('click', e => {
  const target = e.target;
  if (!target.classList.contains('course') || target.classList.contains('hidden')) return;

  // 6.1) Tachar / destachar
  const code = target.dataset.code;
  const done = target.classList.toggle('completed');
  if (done) {
    selected.add(code);
  } else {
    selected.delete(code);
    // opcional: volver a ocultar dependientes si desmarcan
    cursos.forEach(c => {
      const el = document.querySelector(`.course[data-code="${c.code}"]`);
      if (c.prereqs.includes(code)) {
        el.classList.add('hidden');
        selected.delete(c.code);
        el.classList.remove('completed');
      }
    });
  }

  // 6.2) Desbloquear nuevos cursos
  unlockCourses();
});

// 7) Modal (igual que antes)
const modal    = document.getElementById('modal');
const titleEl  = document.getElementById('modal-title');
const bodyEl   = document.getElementById('modal-body');
const closeBtn = document.getElementById('modal-close');

container.addEventListener('click', e => {
  if (!e.target.classList.contains('course') || e.target.classList.contains('hidden')) return;
  titleEl.textContent = e.target.dataset.nombre;
  bodyEl.textContent  = `Semestre: ${e.target.dataset.sem}`;
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});
