import { faker } from "@faker-js/faker/locale/es";

const getPalabraAleatoria = () => ({
    palabra: faker.lorem.word().replace(/[^a-zA-Z]/g, "")
});

export default {
    getPalabraAleatoria
};
