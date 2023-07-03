import Joi from "joi";

export const validar = (palabra) => {
    const palabraSchema = Joi.object({
        palabra: Joi.string()
            .alphanum()
            .regex(/^[a-zA-Z]+$/) // No puede contener espacios, caracteres especiales ni números
            .min(1)
            .required()
            .messages({
                "string.base": `La palabra debe ser de tipo 'texto'`,
                "string.empty": `La palabra no puede estar vacía`,
                "string.regex": `La palabra no puede contener espacios, caracteres especiales, ni números`,
                "any.required": `La palabra es un campo requerido`,
            }),
    });

    const { error } = palabraSchema.validate(palabra);

    if (error) {
        return { result: false, error };
    }

    return { result: true };
};
