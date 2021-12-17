/*
2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

// Exemplo:

const longestWord = (frase) => {
  let frases = frase.split(' ');
  frases.sort((a, b) => a.length - b.length);
  return frases.pop();
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

