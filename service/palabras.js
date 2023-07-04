import ModelFactory from "../model/DAO/palabrasFactory.js";
import { ValidationError, WordNotFound } from "../errores.js";
import { validar } from "../validations/palabras.js";

class Servicio {
    constructor(persistencia) {
        this.model = ModelFactory.get(persistencia);
    }

    obtenerPalabras = async () => {
        try {
            const palabras = await this.model.obtenerPalabras();

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
            // Para poder validar la palabra antes de eliminarla, la voy a convertir en un objeto
            palabra = { palabra };
            const res = validar(palabra);
            if (!res.result) {
                throw new ValidationError(
                    `Campo inválido: ${res.error.message}`
                );
            }
            const palabraEliminada = await this.model.eliminarPalabra(palabra);

            if (!palabraEliminada) {
                throw new WordNotFound(
                    `La palabra no fue encontrada.`
                );
            }
            return palabraEliminada;
        } catch (error) {
            throw error;
        }
    };

    obtenerInfoPalabras = async () => {
        try {
            const palabras = await this.model.obtenerPalabras();
            
            const info = palabras.reduce((acc, p) => {
                acc[p.palabra] = acc[p.palabra] ? acc[p.palabra] + 1 : 1;
                return acc;
            }, {});


            return info;
        } catch (error) {
            throw error;
        }
    }
}

export default Servicio;
