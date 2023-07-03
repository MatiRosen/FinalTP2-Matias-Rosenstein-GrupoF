import Servicio from "../service/palabras.js";
import { WordNotFound, ValidationError } from "../errores.js";

class Controlador {
    constructor(persistencia) {
        this.servicio = new Servicio(persistencia);
    }

    obtenerPalabras = async (req, res) => {
        try {
            const palabras = await this.servicio.obtenerPalabras();

            res.json(palabras); // Por defecto el status code es 200
        } catch (error) {
            if (
                error instanceof WordNotFound ||
                error instanceof ValidationError
            ) {
                res.status(400).json({ errorMsg: error.message });
            } else {
                res.status(500).json({ errorMsg: error.message });
            }
        }
    };

    guardarPalabra = async (req, res) => {
        try {
            const palabra = req.body;
            const palabraGuardada = await this.servicio.guardarPalabra(palabra);
            res.json(palabraGuardada); // Por defecto el status code es 200
        } catch (error) {
            res.status(402).json({ errorMsg: error.message });
        }
    };

    eliminarPalabra = async (req, res) => {
        try {
            const { palabra } = req.params;
            const palabraBorrada = await this.servicio.eliminarPalabra(palabra);

            res.json(palabraBorrada); // Por defecto el status code es 200
        } catch (error) {
            if (error instanceof WordNotFound) { // Solo lo devuelve cuando no encuentra la palabra
                res.status(404).json({ errorMsg: error.message });
            } else {
                res.status(422).json({ errorMsg: error.message });
            }
        }
    };

    obtenerInfoPalabras = async (req, res) => {
        try {
            const info = await this.servicio.obtenerInfoPalabras();

            res.json(info); // Por defecto el status code es 200
        } catch (error) {
            res.status(500).json({ errorMsg: error.message });
        }
    };
}

export default Controlador;
