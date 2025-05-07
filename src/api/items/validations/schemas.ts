import Joi from "joi";

export const itemQuerySchema = Joi.object({
  name: Joi.string().optional(),
});

export const itemIdSchema = Joi.object({
  id: Joi.number().integer().required(),
});

export const createItemSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
});

export const updateItemSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number().min(0),
});

export const itemCreateSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": 'Field "name" is required',
    "any.required": 'Field "name" is required',
  }),

  price: Joi.number().min(1).required().messages({
    "number.base": 'Field "price" must be a number',
    "number.min": 'Field "price" cannot be negative',
    "any.required": 'Field "price" is required',
  }),
});

export const itemUpdateSchema = Joi.object({
  name: Joi.string().optional(),
  price: Joi.number().min(1).optional().messages({
    "number.base": 'Field "price" must be a number',
    "number.min": 'Field "price" cannot be negative',
  }),
}).min(1); // Se necesita al menos un campo es requerido para actualizar
