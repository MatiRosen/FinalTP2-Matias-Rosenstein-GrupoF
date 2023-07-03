class ModelMem {
    constructor() {
        this.palabras = [
            { id: 1, palabra: "Hola" },
            { id: 2, nombre: "cómo" },
            { id: 3, nombre: "estás" },
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
        this.palabras = this.palabras.filter((p) => p.palabra !== palabra);

        return await Promise.resolve(palabra);
    };
}

export default ModelMem;
