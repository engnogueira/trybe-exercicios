function encode(palavra) {
  let resultado = '';
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let codigo = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  for (let i = 0; i < palavra.length; i += 1) {
    if (vogais.includes(palavra[i])) {
      let chave = codigo[palavra[i]];
      resultado += chave;
    } else {
      resultado += palavra[i];
    }
  }
  return {resultado, encode};
}

function decode(vrapala) {
  let resultado = '';
  let digitos = ['1', '2', '3', '4', '5'];
  let codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let i = 0; i < vrapala.length; i += 1) {
    if (digitos.includes(vrapala[i])) {
      let chave = codigo[vrapala[i]];
      resultado += chave;
    } else {
      resultado += vrapala[i];
    }
  }
  return resultado;
}
  
module.exports = encode;
module.exports = decode;
