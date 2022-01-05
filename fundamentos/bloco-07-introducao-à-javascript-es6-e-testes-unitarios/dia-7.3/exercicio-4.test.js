const {encode, decode} = require("./exercicio-4");

describe("Testes relativos as funções encode e decode do projeto Playground Functions", () => {
  it("Teste se encode e decode são funções", () => {
    expect(encode && decode).toBeInstanceOf(Function);
  });
  it("Teste para encode se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it("Teste para decode se os números 1, 2, 3, 4 e 5 convertidos em, a, e ,i ,o e u respectivamente", () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it("Teste se as demais letras/números não são convertidos para cada caso", () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
  });
  it("Teste se as demais letras/números não são convertidos para cada caso", () => {
    expect(decode('67890')).toBe('67890');
  });
  it("Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada de parâmetro", () => {
    expect(encode('aeiou').length).toBe('12345'.length);
  });
  it("Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada de parâmetro", () => {
    expect(decode('12345').length).toBe('aeiou'.length);
  });
});
