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

2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
 */

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
};

const contarEstudantes = (objeto, professor) => {
  let total = 0;
  let aulas = [];
  let chavesProfessor = Object.keys(objeto).filter(
    (key) => objeto[key].professor === professor
  );
  for (let key of chavesProfessor) {
    aulas.push(objeto[key].materia);
  }
  for (let index = 0; index < aulas.length; index += 1) {
    if (objeto[chavesProfessor[index]].materia === aulas[index]) {
      total += objeto[chavesProfessor[index]].numeroEstudantes;
    }
  }
  return { total, aulas };
};

const relatorioProfessor = (objeto, professor) => {
  let relatorio = {};
  relatorio = {
    professor: professor,
    aulas: contarEstudantes(objeto, professor).aulas,
    estudantes: contarEstudantes(objeto, professor).total,
  };
  return relatorio;
};

console.log(relatorioProfessor(allLessons, "Maria Clara"));
