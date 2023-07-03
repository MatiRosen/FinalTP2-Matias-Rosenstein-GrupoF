import { expect } from "chai";
import  generador  from "./generator/producto.js";

describe("Test del generador del producto aleatorio", () => {
    it("Debería generar un producto aleatorio con los campos nombre, precio y stock", () => {
        const producto = generador.getProductoAleatorio();
        console.log(producto);

        expect(producto).to.include.keys("nombre", "precio", "stock");
    });

    it("Debería generar un producto aleatorio", () => {
      const producto = generador.getProductoAleatorio();
      const producto2 = generador.getProductoAleatorio();
      console.log(producto);
      console.log(producto2);

      expect(producto).to.not.eql(producto2);
  });
});
