/* 
Parte I
Agora você vai fazer alguns exercícios de fixação.

2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo.
 */

oddsAndEvens = (array) => {
  const vetorOrdenado = array.sort((a, b) => a - b);
  return vetorOrdenado;
};

console.log(
  `Os números ${oddsAndEvens([13, 3, 4, 10, 7, 2])} se encontram ordenados de forma crescente`
); // será necessário alterar essa linha 😉
