import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: String,
  nameLowerCase: String,
  location: String,
  country: String,
  url: String,
  image: String,
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
})

export default mongoose.model('Restaurant', RestaurantSchema); 