const encode = require("./exercicio-4.js");
const decode = require("./exercicio-4.js");

describe("Testes relativo as funções encode e decode do projeto Playground Functions", () => {
  it("Teste se encode e decode são funções", () => {
    expect(encode && decode).toBeInstanceOf(Function);
  });
});
