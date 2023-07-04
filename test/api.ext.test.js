import { expect } from "chai";
import generador from "./generator/palabra.js";
import supertest from "supertest";

const request = supertest("http://localhost:8080");

describe("Test API REST FUL", () => {
    describe("GET", () => {
        it("Deberia retornar status 200", async () => {
            const response = await request.get("/api/palabras");

            expect(response.status).to.eql(200);
        });
    });

    describe("POST", () => {
        it("Deberia retornar status 422", async () => {
            const palabraEnviada = "Hola como estas";

            const response = await request
                .post("/api/palabras/")
                .send(palabraEnviada);
            expect(response.status).to.eql(422);
        });
    });

    describe("DELETE", () => {
        it("Deberia retornar status 422", async () => {
            const palabraEnviada = "Esta palabra no es valida!";

            const response = await request
                .delete("/api/palabras/" + palabraEnviada)
            expect(response.status).to.eql(422);
        });
    });

    describe("POST", () => {
        it("Debería generar una palabra aleatoria", async () => {
            const palabraEnviada = generador.getPalabraAleatoria();

            const response = await request
                .post("/api/palabras/")
                .send(palabraEnviada);
            expect(response.status).to.eql(200);

            const palabraRecibida = response.body;
            expect(palabraRecibida).to.include.keys("palabra");

            expect(palabraRecibida.palabra).to.eql(palabraEnviada.palabra);
        });
    });
});
