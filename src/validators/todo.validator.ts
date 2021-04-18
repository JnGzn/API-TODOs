import joi from "joi";

// define esquema todo Get
export const schemaTodoGet = joi.object().keys({
    id: joi.number().required()
})

// define esquema todo Post
export const schemaTodoPost = joi.object().keys({
    userId: joi.number().required(),
    title: joi.string().required(),
    completed: joi.boolean().default(false)
})

// define esquema todo Put
export const schemaTodoPut = joi.object().keys({
    id: joi.number().required(),
    userId: joi.number().required(),
    title: joi.string().required(),
    completed: joi.boolean().required()
})

// define esquema todo Delete
export const schemaTodoDelete = joi.object().keys({
    id: joi.number().required()
})
