import ModelFile from "./palabrasFile.js";
import ModelMem from "./palabrasMem.js";

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case "MEM":
                console.log("**** Persistiendo en memoria ****");
                return new ModelMem();
            case "FILE":
                console.log("**** Persistiendo en File System ****");
                return new ModelFile();
            default:
                console.log("**** Persistiendo en Memoria (Default. Recordar configurarlo en el .env) ****");
                return new ModelMem();
        }
    }
}

export default ModelFactory;
