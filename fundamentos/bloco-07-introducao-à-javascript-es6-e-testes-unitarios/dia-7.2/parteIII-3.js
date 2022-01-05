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
3 - Crie uma função para mostrar o tamanho de um objeto.
 */

const tamanhoObjeto = (objeto) => {
  const tamanho = Object.keys(objeto).length;
  return tamanho;
}

console.log(tamanhoObjeto(lesson3));
