const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 
4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
 */

const listarValores = (objeto) => {
  return Object.values(objeto);
}

console.log(listarValores(lesson1));
