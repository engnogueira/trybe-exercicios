const searchEmployee = require("./bonus");

describe("Testes de implantação de uma função utilizando metodologia TDD", () => {
  it("Testa se a função searchEmployee é definida", () => {
    expect(searchEmployee).toBeDefined();
  });
  it("Testa se searchEmployee é uma função", () => {
    expect(typeof searchEmployee).toBe('function');
  });
});
