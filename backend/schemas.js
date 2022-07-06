import Joi from 'joi';                          // JOI schema used to validate new restaurants in the server side

const restaurantSchema = Joi.object({
  restaurant: Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string(),                        // todo: allow user to upload a local picture
    country: Joi.string().required(),           // todo: has to be a dropdown
    url: Joi.string().required(),
  }).required()
})


export { restaurantSchema };