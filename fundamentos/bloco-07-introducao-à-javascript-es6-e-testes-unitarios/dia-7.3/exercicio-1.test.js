const sum = require('./exercicio-1');

describe('Testes do Exercicio 1 do dia-7.3', () => {
  it('Teste se a soma de 4 + 5 é esperado 9', () =>{
    expect(sum(4, 5)).toBe(9);
  })
  it('Teste se a soma de 0 + 0 é esperado 0', () =>{
    expect(sum(0, 0)).toBe(0);
  })
})