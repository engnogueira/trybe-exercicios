/* 
Parte II
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

1- Crie uma função que receba um número e retorne seu fatorial.

- Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator ..
 */


function fatorial(num) {
  //   console.log(num);
  return num <= 1 ? 1 : num * fatorial(num - 1);
}

// fatorial = num => num <= 1 ? 1 : num * fatorial(num - 1);

function tempo(fatorial, num, iteracao) {
  let tempoTotal = 0;
  let tempoInicial = new Date().getTime();
  for (let i = 0; i <= iteracao; i += 1) {
    fatorial(num);
  }
  let tempoFinal = new Date().getTime();
  tempoTotal = tempoFinal - tempoInicial;
  let tempoSegundos = Math.round(tempoTotal / 1000);
  return `Tempo total: ${tempoSegundos} segundos`;
}
console.log(tempo(fatorial, 25, 100000000));
