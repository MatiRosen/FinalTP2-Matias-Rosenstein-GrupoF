import express from "express";
import RouterPalabras from "./router/palabras.js";

class Server {
    constructor(port, persistencia) {
        this.app = express();
        this.port = port;
        this.persistencia = persistencia;
    }

    async start() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static("public"));

        this.app.use("/api/palabras", new RouterPalabras(this.persistencia).start());

        const PORT = this.port;
        this.server = this.app.listen(PORT, () =>
            console.log(
                `Servidor HTTP express escuchando en http://localhost:${PORT}`
            )
        );

        this.server.on("error", (error) =>
            console.log(`Error en servidor: ${error.message}`)
        );

        return this.app;
    }

    async stop() {
        this.server.close(() => console.log("Servidor cerrado"));
    }
}

export default Server;
