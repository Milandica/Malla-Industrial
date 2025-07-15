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
  { code: 'Álgebra Lineal',                        sem: 2, col: 2, type: 'common',    name: 'Álgebra Lineal',                        prereqs: [] },
  { code: 'Física II',                             sem: 2, col: 3, type: 'common',    name: 'Física II',                             prereqs: ['Precálculo'] },
  { code: 'Programación',                          sem: 2, col: 4, type: 'specialty', name: 'Programación',                          prereqs: [] },
  { code: 'Introducción a las Geociencias',        sem: 2, col: 5, type: 'common',    name: 'Introducción a las Geociencias',        prereqs: [] },

  // Semestre 3
  { code: 'Cálculo Avanzado',                      sem: 3, col: 1, type: 'common',    name: 'Cálculo Avanzado',                      prereqs: ['Cálculo Diferencial e Integral'] },
  { code: 'Ecuaciones Diferenciales',              sem: 3, col: 2, type: 'common',    name: 'Ecuaciones Diferenciales',              prereqs: ['Cálculo Avanzado'] },
  { code: 'Economía Industrial',                   sem: 3, col: 3, type: 'specialty', name: 'Economía Industrial',                   prereqs: [] },
  { code: 'Taller de Industrias',                  sem: 3, col: 4, type: 'specialty', name: 'Taller de Industrias',                  prereqs: [] },
  { code: 'Comunicación Oral y Escrita',           sem: 3, col: 5, type: 'common',    name: 'Comunicación Oral y Escrita',           prereqs: [] },

  // (y así sucesivamente para los demás, agregando en `prereqs` los códigos necesarios)
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
