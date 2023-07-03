import Joi from "joi";

export const validar = (palabra) => {
    const palabraSchema = Joi.object({
        palabra: Joi.string()
            // No puede contener espacios, caracteres especiales ni números. Pero para que si pueda tener acentos y ñ, se usa el regex, ya que si usase alphanum, no andaría
            .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)
            .min(1)
            .required()
            .messages({
                "string.base": `La palabra debe ser de tipo 'texto'`,
                "string.alphanum": `La palabra no puede contener espacios, caracteres especiales, ni números`,
                "string.empty": `La palabra no puede estar vacía`,
                "string.pattern.base": `La palabra no puede contener espacios, caracteres especiales, ni números`,
                "any.required": `La palabra es un campo requerido`
            }),
    });

    const { error } = palabraSchema.validate(palabra);

    if (error) {
        return { result: false, error };
    }

    return { result: true };
};
