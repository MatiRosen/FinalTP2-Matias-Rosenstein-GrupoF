import { expect } from "chai";
import  generador  from "./generator/palabra.js";

describe("Test del generador de palabra aleatoria", () => {
    it("Debería generar una palabra aleatoria, con el campo 'palabra'", () => {
        const palabra = generador.getPalabraAleatoria();
        console.log(palabra);

        expect(palabra).to.include.keys("palabra");
    });

    it("Debería generar una palabra aleatoria", () => {
      const palabra = generador.getPalabraAleatoria();
      const palabra2 = generador.getPalabraAleatoria();
      console.log(palabra);
      console.log(palabra2);

      expect(palabra).to.not.eql(palabra2);
  });
});
