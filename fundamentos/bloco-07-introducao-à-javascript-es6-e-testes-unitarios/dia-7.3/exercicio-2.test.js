const myRemove = require('./exercicio-2');

describe('Testes relativos a função myRemove(arr, item) que retorna uma cópia do array enviado sem o item passado como parâmetro se ele existir', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
})