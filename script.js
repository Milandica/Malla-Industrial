:root {
  /* Paleta Periwinkle */
  --p1: #9A9CEA;
  --p2: #A2B9EE;
  --p3: #A2DCEE;
  --p4: #ADEEE2;

  /* Asignación a tipos */
  --plan-comun: var(--p1);
  --especialidad: var(--p3);

  --grid-gap: 8px;
}

* { box-sizing: border-box; }

body {
  margin: 20px;
  font-family: "Segoe UI", sans-serif;
  background: #f7f9fc;
}

h1 {
  text-align: center;
  margin-bottom: 16px;
}

/* Container en grid: 10 filas (semestres) y 6 columnas (aprox) */
#malla-container {
  display: grid;
  grid-template-rows: repeat(10, minmax(50px, auto));
  grid-template-columns: repeat(6, 1fr);
  gap: var(--grid-gap);
}

/* Cada curso */
.course {
  padding: 6px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s ease;
}
.course:hover {
  transform: scale(1.05);
}

/* Tipos */
.course.common {
  background-color: var(--plan-comun);
}
.course.specialty {
  background-color: var(--especialidad);
}

/* Modal */
.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal.hidden { display: none; }

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  width: 300px;
  position: relative;
}

.close {
  position: absolute;
  top: 6px; right: 10px;
  font-size: 1.2rem;
  cursor: pointer;
}

