import fs from "fs";
import { DatabaseError } from "../../errores.js";

class ModelFile {
    constructor() {
        this.nombreArchivo = "palabras.json";
    }

    async leerArchivo() {
        return await fs.promises.readFile(this.nombreArchivo, "utf-8");
    }

    async escribirArchivo(palabras) {
        await fs.promises.writeFile(
            this.nombreArchivo,
            JSON.stringify(palabras, null, "\t")
        );
    }

    obtenerPalabras = async () => {
        try {
            const palabras = JSON.parse(await this.leerArchivo());

            return palabras;
        } catch {
            throw new DatabaseError("No se pudo leer el archivo");
        }
    };

    guardarPalabra = async (palabra) => {
        let palabras = [];
        try {
            palabras = JSON.parse(await this.leerArchivo());
        } catch {}

        palabras.push(palabra);

        try {
            await this.escribirArchivo(palabras);
        } catch (error) {
            throw new DatabaseError("No se pudo escribir el archivo");
        }

        return palabra;
    };


    eliminarPalabra = async (palabra) => {
        let palabras = [];
        try {
            palabras = JSON.parse(await this.leerArchivo());
        } catch {}

        if (!palabras.find((p) => p.palabra === palabra.palabra)) {
           return null;
        }

        palabras = palabras.filter((p) => p.palabra !== palabra.palabra);

        try {
            await this.escribirArchivo(palabras);
        } catch (error) {
            throw new DatabaseError("No se pudo escribir el archivo");
        }
        
        return palabra;
    };
}

export default ModelFile;
