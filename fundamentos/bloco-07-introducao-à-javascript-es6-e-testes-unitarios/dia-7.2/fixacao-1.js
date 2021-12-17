/* 
Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

 */
const dicionario = {};
const alteraObjeto = (objeto, nomeChave, valorChave) => {
  objeto[nomeChave] = valorChave;
  return objeto;
}

console.log(alteraObjeto(dicionario, 'nome', 'Gilson Nogueira'))