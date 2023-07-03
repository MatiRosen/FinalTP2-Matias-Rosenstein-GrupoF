import { faker } from "@faker-js/faker/locale/es";

const getProductoAleatorio = () => ({
    nombre: faker.commerce.product(),
    precio: faker.number.float({ min: 0, max: 10000, precision: 0.01 }),
    stock: faker.number.int({ min: 0, max: 999 }),
});

export default {
    getProductoAleatorio
};
