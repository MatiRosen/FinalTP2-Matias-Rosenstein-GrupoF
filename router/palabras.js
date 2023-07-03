import express from "express";
import Controlador from "../controller/palabras.js";

class Router {
    constructor(persistencia) {
        this.router = express.Router();
        this.controlador = new Controlador(persistencia);
    }

    start() {
        this.router.get("/:numero", this.controlador.obtenerPalabras);
        this.router.post("/", this.controlador.guardarPalabra);
        this.router.delete("/:palabra", this.controlador.eliminarPalabra);
        
        return this.router;
    }
}

export default Router;