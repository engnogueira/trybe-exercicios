const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

/* 
1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
*/

const [var0, var1]  = saudacoes 

var1(var0); // Olá
