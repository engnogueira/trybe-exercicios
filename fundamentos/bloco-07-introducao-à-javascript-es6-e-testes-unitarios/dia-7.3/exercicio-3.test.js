const myFizzBuzz = require("./exercicio-3");

describe("Teste da função myFizzBuzz(num)", () => {
  it('Verificar se a função retorna "fizzbuzz" se o número de entrada fore divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it('Verificar se a função retorna "fizz" se o número de entrada fore divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe("fizz");
  });
  it('Verificar se a função retorna "fizz" se o número de entrada fore divisível por 5', () => {
    expect(myFizzBuzz(20)).toBe("buzz");
  });
  it('Verificar se a função retorna "num" se o número de entrada não for divisível por 3 e 5', () => {
    expect(myFizzBuzz(28)).toBe(28);
  });
});
