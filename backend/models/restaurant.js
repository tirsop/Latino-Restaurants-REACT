import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true  // not need to require bc there's client-side validations with bootstrap and server-side validations
  },
  location: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  url: {
    type: String,
    // required: true
  },
  image: {
    type: String
  },
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