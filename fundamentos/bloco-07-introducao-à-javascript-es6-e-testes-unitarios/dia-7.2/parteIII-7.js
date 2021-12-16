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
7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
 */

// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const pegarChavePosicao = (objeto, posicao) => {
  const chave = Object.keys(objeto)[posicao];
  return objeto[chave];
}

console.log(pegarChavePosicao(lesson1, 0));
