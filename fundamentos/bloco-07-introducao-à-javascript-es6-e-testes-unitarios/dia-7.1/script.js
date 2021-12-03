/* 
Parte I

Agora você vai fazer alguns exercícios de fixação.

1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no    qual cada variável foi declarada. - Ok
    
Modifique a estrutura da função para que ela seja uma arrow function .
    
Modifique as concatenações para template literals . - Ok
    
Copie o código abaixo.
 */

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = ifScope + " ótimo, fui utilizada no escopo !";
    console.log(`${ifScope}`);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(`${elseScope}`);
  }
}

testingScope(false);

/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

testingScope(true); */
