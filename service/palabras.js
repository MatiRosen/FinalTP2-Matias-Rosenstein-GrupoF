import ModelFactory from "../model/DAO/palabrasFactory.js";
import { ValidationError, WordNotFound } from "../errores.js";
import { validar } from "../validations/palabras.js";

class Servicio {
    constructor(persistencia) {
        this.model = ModelFactory.get(persistencia);
    }

    obtenerPalabras = async () => {
        try {
            const palabras = await this.model.obtenerProductos();
            return palabras.map((p) => p.palabra).join(" ");
        } catch (error) {
            throw error;
        }
    };

    guardarPalabra = async (palabra) => {
        try {
            const res = validar(palabra);
            if (!res.result) {
                throw new ValidationError(
                    `Campo inválido: ${res.error.message}`
                );
            }

            const palabraGuardada = await this.model.guardarPalabra(palabra);
            return palabraGuardada;
        } catch (error) {
            throw error;
        }
    };

    eliminarPalabra = async (palabra) => {
        try {
            const res = validar(palabra);
            if (!res.result) {
                throw new ValidationError(
                    `Campo inválido: ${res.error.message}`
                );
            }
            const palabraEliminado = await this.model.eliminarPalabra(palabra);

            if (!palabraEliminado) {
                throw new WordNotFound(
                    `La palabra no fue encontrada. Palabra: ${palabra}`
                );
            }
            return palabraEliminado;
        } catch (error) {
            throw error;
        }
    };
}

export default Servicio;
