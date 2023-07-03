import Server from "./server.js";
import config from "./config.js";

// Se que el .env no se debe subir al repositorio, pero lo dejo para que pueda probarlo. Por lo tanto, no lo agregué al .gitignore
new Server(config.PORT, config.MODO_PERSISTENCIA).start();
