import Joi from 'joi';

export const createBookSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    publishDate: Joi.date().required(),
    price: Joi.number().required(),
})



