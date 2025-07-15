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

  // ...añade el resto de semestres ajustando prereqs según tu diagrama...
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
