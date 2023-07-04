import { expect } from "chai";
import generador from "./generator/palabra.js";
import supertest from "supertest";
import Server from "../server.js";


describe("Test API REST FUL", () => {
    describe("GET", () => {
        it("Deberia retornar status 200", async () => {
            const server = new Server(8081, "FILE");
            const app = await server.start();
            const request = supertest(app)

            const response = await request.get("/api/palabras");
            expect(response.status).to.eql(200);

            await server.stop();
        });
    });

    describe("POST", () => {
        it("Debería generar una palabra aleatoria", async () => {
            const server = new Server(8081, "FILE");
            const app = await server.start();
            const request = supertest(app)

            const palabraEnviada = generador.getPalabraAleatoria();

            const response = await request.post("/api/palabras/").send(palabraEnviada);
            expect(response.status).to.eql(200);

            const palabraRecibida = response.body;
            expect(palabraRecibida).to.include.keys("palabra");

            expect(palabraRecibida.palabra).to.eql(palabraEnviada.palabra);

            await server.stop();
        });
    });
});
