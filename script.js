// 1) Define tu malla: cada curso con código, semestre (1–10), columna (1–6) y tipo
const cursos = [
  { code: 'Precálculo',          sem: 1, col: 1, type: 'common', name: 'Precálculo' },
  { code: 'Intro Mat. Discretas',sem: 1, col: 2, type: 'common', name: 'Introducción a Matemáticas Discretas' },
  { code: 'Física I',           sem: 1, col: 3, type: 'common', name: 'Física I' },
  // ... sigue para cada ramo, ajustando sem y col según el diagrama
  // Por ejemplo:
  { code: 'Álgebra Lineal',     sem: 2, col: 2, type: 'common', name: 'Álgebra Lineal' },
  { code: 'Programación',       sem: 2, col: 4, type: 'specialty', name: 'Programación' },
  // ... etc.
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
