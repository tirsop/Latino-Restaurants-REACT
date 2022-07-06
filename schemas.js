import Joi from 'joi';                                 // to server side validation for mongoose

const restaurantSchema = Joi.object({
  restaurant: Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string(),
    country: Joi.string().required(),
    url: Joi.string().required(),
  }).required()
})


export { restaurantSchema };