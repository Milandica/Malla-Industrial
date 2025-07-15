// script.js

// 1) Define tu malla con prerrequisitos
const cursos = [
  // Semestre 1 (sin prerrequisitos)
  { code: 'Precálculo',                           sem: 1, col: 1, type: 'common',    name: 'Precálculo',                            prereqs: [] },
  { code: 'Introducción a Matemáticas Discretas', sem: 1, col: 2, type: 'common',    name: 'Introducción a Matemáticas Discretas',  prereqs: [] },
  { code: 'Física I',                             sem: 1, col: 3, type: 'common',    name: 'Física I',                              prereqs: [] },
  { code: 'Herramientas Computacionales',          sem: 1, col: 4, type: 'common',    name: 'Herramientas Computacionales',          prereqs: [] },
  { code: 'Química',                              sem: 1, col: 5, type: 'common',    name: 'Química',                               prereqs: [] },
  { code: 'Introducción a la Ingeniería',         sem: 1, col: 6, type: 'common',    name: 'Introducción a la Ingeniería',          prereqs: [] },

  // Semestre 2
  { code: 'Cálculo Diferencial e Integral',       sem: 2, col: 1, type: 'common',    name: 'Cálculo Diferencial e Integral',        prereqs: ['Precálculo'] },
  { code: 'Álgebra Lineal',                       sem: 2, col: 2, type: 'common',    name: 'Álgebra Lineal',                        prereqs: [] },
  { code: 'Física II',                            sem: 2, col: 3, type: 'common',    name: 'Física II',                             prereqs: ['Precálculo'] },
  { code: 'Programación',                         sem: 2, col: 4, type: 'specialty', name: 'Programación',                          prereqs: [] },
  { code: 'Introducción a las Geociencias',       sem: 2, col: 5, type: 'common',    name: 'Introducción a las Geociencias',        prereqs: [] },
  { code: 'Inglés 1',                             sem: 2, col: 6, type: 'common',    name: 'Inglés 1',                              prereqs: [] },

  // Semestre 3
  { code: 'Cálculo Avanzado',                     sem: 3, col: 1, type: 'common',    name: 'Cálculo Avanzado',                      prereqs: ['Cálculo Diferencial e Integral'] },
  { code: 'Ecuaciones Diferenciales',             sem: 3, col: 2, type: 'common',    name: 'Ecuaciones Diferenciales',              prereqs: ['Cálculo Avanzado'] },
  { code: 'Economía Industrial',                  sem: 3, col: 3, type: 'specialty', name: 'Economía Industrial',                   prereqs: ['Cálculo Diferencial e Integral'] },
  { code: 'Taller de Industrias',                 sem: 3, col: 4, type: 'specialty', name: 'Taller de Industrias',                  prereqs: ['Inglés 1'] },
  { code: 'Comunicación Oral y Escrita',          sem: 3, col: 5, type: 'common',    name: 'Comunicación Oral y Escrita',           prereqs: [] },
  { code: 'Inglés 2',                             sem: 3, col: 6, type: 'common',    name: 'Inglés 2',                              prereqs: ['Inglés 1'] },

  // Semestre 4
  { code: 'Probabilidades y Estadística',          sem: 4, col: 1, type: 'common',    name: 'Probabilidades y Estadística',          prereqs: ['Cálculo Diferencial e Integral'] },
  { code: 'Métodos Numéricos',                     sem: 4, col: 2, type: 'common',    name: 'Métodos Numéricos',                     prereqs: ['Ecuaciones Diferenciales','Programación'] },
  { code: 'Física y Tecnología',                   sem: 4, col: 3, type: 'specialty', name: 'Física y Tecnología',                   prereqs: ['Física II'] },
  { code: 'Ingeniería de Procesos y Diseño de Servicios', sem: 4, col: 4, type: 'specialty', name: 'Ingeniería de Procesos y Diseño de Servicios', prereqs: ['Taller de Industrias','Programación'] },
  { code: 'Introducción a la Bioingeniería',       sem: 4, col: 5, type: 'common',    name: 'Introducción a la Bioingeniería',       prereqs: ['Física II'] },
  { code: 'Inglés 3',                              sem: 4, col: 6, type: 'common',    name: 'Inglés 3',                              prereqs: ['Inglés 2'] },

  // Semestre 5
  { code: 'Minería de Datos',                      sem: 5, col: 1, type: 'common',    name: 'Minería de Datos',                      prereqs: ['Probabilidades y Estadística','Álgebra Lineal'] },
  { code: 'Ingeniería de Marketing',               sem: 5, col: 2, type: 'specialty', name: 'Ingeniería de Marketing',               prereqs: ['Cálculo Avanzado','Probabilidades y Estadística','Economía Industrial'] },
  { code: 'Optimización',                          sem: 5, col: 3, type: 'specialty', name: 'Optimización',                          prereqs: ['Métodos Numéricos'] },
  { code: 'Taller de Innovación y Emprendimiento', sem: 5, col: 4, type: 'specialty', name: 'Taller de Innovación y Emprendimiento', prereqs: ['Taller de Industrias'] },
  { code: 'Ética y Responsabilidad Social en Ingeniería', sem: 5, col: 5, type: 'common', name: 'Ética y Responsabilidad Social en Ingeniería', prereqs: ['Comunicación Oral y Escrita','Introducción a la Ingeniería'] },
  { code: 'Inglés 4',                              sem: 5, col: 6, type: 'common',    name: 'Inglés 4',                              prereqs: ['Inglés 3'] },

  // Semestre 6
  { code: 'Contabilidad y Finanzas',               sem: 6, col: 1, type: 'specialty', name: 'Contabilidad y Finanzas',               prereqs: ['Economía Industrial','Taller de Industrias'] },
  { code: 'Tecnologías de Información y Automatización', sem: 6, col: 2, type: 'specialty', name: 'Tecnologías de Información y Automatización', prereqs: ['Ingeniería de Procesos y Diseño de Servicios','Física y Tecnología'] },
  { code: 'Simulación de Sistemas Complejos',      sem: 6, col: 3, type: 'specialty', name: 'Simulación de Sistemas Complejos',      prereqs: ['Probabilidades y Estadística','Optimización'] },
  { code: 'Modelo de Desarrollo Regionales',       sem: 6, col: 4, type: 'specialty', name: 'Modelo de Desarrollo Regionales',       prereqs: ['Economía Industrial','Taller de Innovación y Emprendimiento'] },
  { code: 'Taller de Negociación y Liderazgo',     sem: 6, col: 5, type: 'specialty', name: 'Taller de Negociación y Liderazgo',     prereqs: ['Taller de Industrias','Ética y Responsabilidad Social en Ingeniería'] },
  { code: 'Legislación en Ingeniería y Medio Ambiente', sem: 6, col: 6, type: 'common', name: 'Legislación en Ingeniería y Medio Ambiente', prereqs: ['Comunicación Oral y Escrita','Introducción a la Bioingeniería','Introducción a las Geociencias'] },
  { code: 'Inglés 5',                              sem: 6, col: 7, type: 'common',    name: 'Inglés 5',                              prereqs: ['Inglés 4'] },

  // Semestre 7
  { code: 'Formulación y Evaluación de Proyectos', sem: 7, col: 1, type: 'common',    name: 'Formulación y Evaluación de Proyectos', prereqs: ['Contabilidad y Finanzas','Ética y Responsabilidad Social en Ingeniería'] },
  { code: 'Taller de Gestión basada en la Evidencia', sem: 7, col: 2, type: 'specialty', name: 'Taller de Gestión basada en la Evidencia', prereqs: ['Probabilidades y Estadística'] },
  { code: 'Logística, Manufactura y Servicios',    sem: 7, col: 3, type: 'specialty', name: 'Logística, Manufactura y Servicios',    prereqs: ['Simulación de Sistemas Complejos'] },
  { code: 'Proyecto Desarrollo Regional',          sem: 7, col: 4, type: 'specialty', name: 'Proyecto Desarrollo Regional',          prereqs: ['Modelo de Desarrollo Regionales','Taller de Innovación y Emprendimiento'] },
  { code: 'Gestión de Personas',                   sem: 7, col: 5, type: 'specialty', name: 'Gestión de Personas',                   prereqs: ['Taller de Negociación y Liderazgo','Ética y Responsabilidad Social en Ingeniería'] },
  { code: 'Práctica Profesional',                  sem: 7, col: 6, type: 'common',    name: 'Práctica Profesional',                  prereqs: ['Ética y Responsabilidad Social en Ingeniería'] },

  // Semestre 8
  { code: 'Estrategia y Control de Gestión',       sem: 8, col: 1, type: 'specialty', name: 'Estrategia y Control de Gestión',       prereqs: ['Formulación y Evaluación de Proyectos'] },
  { code: 'Globalización y Negocios Internacionales', sem: 8, col: 2, type: 'specialty', name: 'Globalización y Negocios Internacionales', prereqs: ['Ingeniería de Marketing'] },
  { code: 'Industria Inteligente',                 sem: 8, col: 3, type: 'specialty', name: 'Industria Inteligente',                 prereqs: ['Tecnologías de Información y Automatización','Logística, Manufactura y Servicios'] },
  { code: 'Planes de Negocio',                     sem: 8, col: 4, type: 'specialty', name: 'Planes de Negocio',                     prereqs: ['Logística, Manufactura y Servicios','Formulación y Evaluación de Proyectos','Ingeniería de Marketing','Taller de Gestión basada en la Evidencia','Proyecto Desarrollo Regional','Gestión de Personas'] },
  { code: 'Electivo/Minor',                        sem: 8, col: 5, type: 'specialty', name: 'Electivo/Minor',                        prereqs: [] },

  // Semestre 9
  { code: 'Taller de Proyectos',                   sem: 9, col: 1, type: 'common',    name: 'Taller de Proyectos',                   prereqs: ['Legislación en Ingeniería y Medio Ambiente','Práctica Profesional','Planes de Negocio'] },
  { code: 'Electivo I',                            sem: 9, col: 2, type: 'specialty', name: 'Electivo I',                            prereqs: [] },
  { code: 'Electivo/Minor',                        sem: 9, col: 3, type: 'specialty', name: 'Electivo/Minor',                        prereqs: [] },
  { code: 'Electivo/Minor',                        sem: 9, col: 4, type: 'specialty', name: 'Electivo/Minor',                        prereqs: [] },

  // Semestre 10
  { code: 'Trabajo de Título',                     sem: 10, col: 1, type: 'common',   name: 'Trabajo de Título',                     prereqs: [] },
];

// 2) Estado interno
const selected = new Set();
const container = document.getElementById('malla-container');

// 3) Cabeceras de semestre (fila 1)
for (let sem = 1; sem <= 10; sem++) {
  const lbl = document.createElement('div');
  lbl.classList.add('semester-label');
  lbl.textContent = `Sem ${sem}`;
  lbl.style.gridColumnStart = sem;
  container.appendChild(lbl);
}

// 4) Función para desbloquear cursos
function unlockCourses() {
  cursos.forEach(c => {
    const el = document.querySelector(`.course[data-code="${c.code}"]`);
    if (el.classList.contains('locked')) {
      // solo desbloquea si todos los prerrequisitos están en 'selected'
      if (c.prereqs.every(pre => selected.has(pre))) {
        el.classList.remove('locked');
        el.classList.add(c.type);
      }
    }
  });
}

// 5) Renderiza todos los cursos
cursos.forEach(c => {
  const d = document.createElement('div');
  d.classList.add('course');
  d.textContent = c.code;
  d.dataset.code   = c.code;
  d.dataset.nombre = c.name;
  d.dataset.sem    = c.sem;

  d.style.gridColumnStart = c.sem;
  d.style.gridRowStart    = c.col + 1;

  if (c.prereqs.length > 0) {
    // si tiene prerrequisitos, arranca bloqueado
    d.classList.add('locked');
  } else {
    // si no, se pinta de su color inmediatamente
    d.classList.add(c.type);
  }

  container.appendChild(d);
});

// 6) Click → marcar/desmarcar + lock/unlock hijos
container.addEventListener('click', e => {
  const t = e.target;
  if (!t.classList.contains('course') || t.classList.contains('locked')) return;

  const code = t.dataset.code;
  const done = t.classList.toggle('completed');

  if (done) {
    selected.add(code);
  } else {
    // si se desmarca, también bloquea sus dependientes
    selected.delete(code);
    cursos.forEach(c => {
      if (c.prereqs.includes(code)) {
        const child = document.querySelector(`.course[data-code="${c.code}"]`);
        child.classList.remove('completed');
        child.classList.remove(c.type);
        child.classList.add('locked');
        selected.delete(c.code);
      }
    });
  }

  // finalmente, intenta desbloquear los que corresponda
  unlockCourses();
});
