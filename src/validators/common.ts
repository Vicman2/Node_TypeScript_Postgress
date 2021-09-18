import Joi from 'joi'


const idSchema = Joi.object({
    id: Joi.number().integer().required()
})


export {
    idSchema
}