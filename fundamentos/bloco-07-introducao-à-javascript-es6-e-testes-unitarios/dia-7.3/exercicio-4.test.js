const {encode, decode} = require("./exercicio-4");

describe("encodes relativo as funções encode e decode do projeto Playground Functions", () => {
  it("encode se encode e decode são funções", () => {
    expect(encode && decode).toBeInstanceOf(Function);
  });
  it("encode para encode se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it("encode para encode se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    expect(decode('12345')).toBe('aeiou');
  });
});
