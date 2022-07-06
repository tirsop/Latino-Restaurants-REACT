import { restaurantSchema } from './schemas.js';           // JOI schema used to validate new restaurants in the server side
import CustomError from './utils/CustomError.js';         // to throw an error with custome statusCode and msg


// Function that validates new/updated items in the server side. Uses JOI schema and imports "schemas.js" file
const validateRestaurant = (req, res, next) => {
  const { error } = restaurantSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join('.');
    throw new CustomError(msg, 400);
  } else {
    next();
  }
}

export { validateRestaurant };