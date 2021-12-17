const sum = require('./exercicio-1');

describe('Testes do Exercicio 1 do dia-7.3', () => {
  it('Teste se a soma de 4 + 5 é esperado 9', () =>{
    expect(sum(4, 5)).toBe(9);
  })
})