import { expect } from "chai";
import generador from "./generator/producto.js";
//import axios from "axios";
import supertest from "supertest";

const request = supertest("http://localhost:8080")

describe("Test API REST FUL", () => {
    describe("GET", () => {
        it("Deberia retornar status 200", async () => {
          //const response = await axios("http://localhost:8080/api/productos");
            const response = await request.get("/api/productos");

            expect(response.status).to.eql(200);
        });
    });

    describe("POST", () => {
        it("Debería generar un producto aleatorio", async () => {
            const productoEnviado = generador.getProductoAleatorio();

            const response = await request.post("/api/productos/").send(productoEnviado);
            expect(response.status).to.eql(200);

            const productoRecibido = response.body;
            expect(productoRecibido).to.include.keys("nombre", "precio", "stock");

            expect(productoRecibido.nombre).to.eql(productoEnviado.nombre);
            expect(productoRecibido.precio).to.eql(productoEnviado.precio);
            expect(productoRecibido.stock).to.eql(productoEnviado.stock);
        });
    });
});
