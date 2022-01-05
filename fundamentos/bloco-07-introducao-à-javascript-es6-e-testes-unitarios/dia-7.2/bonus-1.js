const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

/* 
Bônus

1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
 */

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
};

const contarEstudantesMatematica = (objeto) => {
  let total = 0;
  let keys = Object.keys(objeto);
  for (let key of keys) {
    if (objeto[key].materia === "Matemática") {
      total += objeto[key].numeroEstudantes;
    }
  }
  return total;
};

console.log(contarEstudantesMatematica(allLessons));
