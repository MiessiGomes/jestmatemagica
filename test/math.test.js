import Matemagica from "../matemagica";

describe("Matemagica", () => {
  let matemagica;

  beforeEach(() => {
    matemagica = new Matemagica();
  });

  describe("adicao", () => {
    it("deve retornar a soma de dois números", () => {
      expect(matemagica.adicao(2, 3)).toBe(5);
    });
  });

  describe("subtracao", () => {
    it("deve retornar a diferença entre dois números", () => {
      expect(matemagica.subtracao(5, 2)).toBe(3);
    });
  });

  describe("divisao", () => {
    it("deve retornar o quociente da divisão entre dois números", () => {
      expect(matemagica.divisao(10, 2)).toBe(5);
    });

    it("deve lançar um erro ao dividir por zero", () => {
      expect(() => matemagica.divisao(10, 0)).toThrowError(
        "Divisão por zero não é permitida."
      );
    });
  });

  describe("multiplicacao", () => {
    it("deve retornar o produto de dois números", () => {
      expect(matemagica.multiplicacao(2, 3)).toBe(6);
    });
  });
});