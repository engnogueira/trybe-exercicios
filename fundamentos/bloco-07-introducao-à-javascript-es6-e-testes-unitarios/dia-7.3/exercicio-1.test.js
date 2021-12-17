const sum = require("./exercicio-1");

describe("Testes do Exercicio 1 do dia-7.3", () => {
  it("Teste se a soma de 4 + 5 é esperado 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("Teste se a soma de 0 + 0 é esperado 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow("");
  });
  it('Teste se a mensagem de erro é:"parameters must be numbers"', () => {
    expect(() => {
      sum();
    }).toThrowError("parameters must be numbers");
  });
});
