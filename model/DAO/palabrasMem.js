class ModelMem {
    constructor() {
        this.palabras = [
            { palabra: "Hola" },
            { palabra: "cómo" },
            { palabra: "estás" },
        ];
    }

    obtenerPalabras = async () => {
        return await Promise.resolve(this.palabras);
    };

    guardarPalabra = async (palabra) => {
        this.palabras.push(palabra);

        return await Promise.resolve(palabra);
    };

    eliminarPalabra = async (palabra) => {
        // Si la palabra no existe, no la elimino, y devuelvo null
        if (!this.palabras.find((p) => p.palabra === palabra.palabra)) {
            return await Promise.resolve(null);
        }

        this.palabras = this.palabras.filter((p) => p.palabra !== palabra.palabra);

        return await Promise.resolve(palabra);
    };
}

export default ModelMem;
