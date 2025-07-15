// 1) Define tu malla con prerrequisitos
const cursos = [
  // Semestre 1
  { code: 'Precálculo',                           sem:1, col:1, type:'common',    name:'Precálculo',                           prereqs:[] },
  { code: 'Introducción a Matemáticas Discretas', sem:1, col:2, type:'common',    name:'Introducción a Matemáticas Discretas', prereqs:[] },
  { code: 'Física I',                             sem:1, col:3, type:'common',    name:'Física I',                             prereqs:[] },
  { code: 'Herramientas Computacionales',          sem:1, col:4, type:'common',    name:'Herramientas Computacionales',         prereqs:[] },
  { code: 'Química',                              sem:1, col:5, type:'common',    name:'Química',                              prereqs:[] },
  { code: 'Introducción a la Ingeniería',         sem:1, col:6, type:'common',    name:'Introducción a la Ingeniería',         prereqs:[] },

  // Semestre 2
  { code: 'Cálculo Diferencial e Integral',       sem:2, col:1, type:'common',    name:'Cálculo Diferencial e Integral',       prereqs:['Precálculo'] },
  { code: 'Álgebra Lineal',                       sem:2, col:2, type:'common',    name:'Álgebra Lineal',                       prereqs:['Introducción a Matemáticas Discretas'] },
  { code: 'Física II',                            sem:2, col:3, type:'common',    name:'Física II',                            prereqs:['Precálculo','Física I'] },
  { code: 'Programación',                         sem:2, col:4, type:'specialty', name:'Programación',                         prereqs:['Herramientas Computacionales'] },
  { code: 'Introducción a las Geociencias',       sem:2, col:5, type:'common',    name:'Introducción a las Geociencias',       prereqs:['Química'] },
  { code: 'Inglés 1',                             sem:2, col:6, type:'common',    name:'Inglés 1',                             prereqs:[] },

  // ...el resto de semestres igual, con prereqs en array
];

// 2) Estado interno
const selected = new Set();
const container = document.getElementById('malla-container');

// 3) Cabeceras de semestre
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
      // desbloquea sólo si todos los prereqs están en selected
      if (c.prereqs.every(pre => selected.has(pre))) {
        el.classList.remove('locked');
        el.classList.add(c.type);
      }
    }
  });
}

// 5) Renderizar todos los cursos, con .locked o con su color si no tiene prereqs
cursos.forEach(c => {
  const div = document.createElement('div');
  div.classList.add('course');
  div.textContent = c.code;
  div.dataset.code   = c.code;
  div.dataset.nombre = c.name;
  div.dataset.sem    = c.sem;

  div.style.gridColumnStart = c.sem;
  div.style.gridRowStart    = c.col + 1;

  if (c.prereqs.length)
    div.classList.add('locked');
  else
    div.classList.add(c.type);

  container.appendChild(div);
});

// 6) Click → si desbloqueado toggle completed + actualizar unlock/lock hijos
container.addEventListener('click', e => {
  const t = e.target;
  if (!t.classList.contains('course') || t.classList.contains('locked')) return;

  const code = t.dataset.code;
  const done = t.classList.toggle('completed');
  if (done) {
    selected.add(code);
  } else {
    selected.delete(code);
    // re-lock hijos
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
  unlockCourses();
});
