const myFizzBuzz = require("./exercicio-3");

describe("Teste da função myFizzBuzz(num)", () => {
  it('Verificar se a função retorna "fizzbuzz" se o número de entrada fore divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
});
