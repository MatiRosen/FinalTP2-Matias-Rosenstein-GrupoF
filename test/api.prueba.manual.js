import axios from "axios";

const pruebaDeServidorConAxios = async () => {

  const url = "https://aeropuerto.deno.dev/verif?num=123";
    try {
        const response = await axios(url);
        const { status, data:body } = response;

        console.log("Status: " + status);
        console.log("Body: " + JSON.stringify(body, null, 2));
    } catch (error) {
        console.log("Error: " + error.message);
    }
};

pruebaDeServidorConAxios();
