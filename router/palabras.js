import express from "express";
import Controlador from "../controller/palabras.js";

class Router {
    constructor(persistencia) {
        this.router = express.Router();
        this.controlador = new Controlador(persistencia);
    }

    start() {
        this.router.get("/", this.controlador.obtenerPalabras);
        this.router.post("/", this.controlador.guardarPalabra);
        this.router.delete("/:palabra", this.controlador.eliminarPalabra);
        this.router.get("/info", this.controlador.obtenerInfoPalabras)
        
        return this.router;
    }
}

export default Router;