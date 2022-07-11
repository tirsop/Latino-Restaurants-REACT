import Restaurant from '../models/restaurant.js';
import fetch from "node-fetch";
import jwt from 'jsonwebtoken';

const mapBoxToken = process.env.MAPBOX_TOKEN;

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

const restaurants = {
  index: async (req, res) => {
    const restaurants = await Restaurant.find({});
    // res.render('restaurants/index', { restaurants });
    res.status(200).json({ restaurants })
  },
  newRestaurant: (req, res) => {
    // res.render('restaurants/new');
    res.send('new bro')
  },
  createRestaurant: async (req, res) => {
    const restaurant = new Restaurant(req.body.restaurant);
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${req.body.restaurant.location}.json?bbox=139.390154,35.236550,140.045214,35.902352&limit=1&access_token=${mapBoxToken}`);
    const data = await response.json();
    // if (!data.features[0]) {
    //   req.flash('error', 'Cannot locate the restaurant. Please, introduce a different address 🤕');
    //   return res.redirect('restaurants/new');
    // }
    restaurant.geometry = data.features[0].geometry;
    await restaurant.save();
    res.status(201).json({
      restaurant,
      token: generateToken(restaurant.id)
    })
    // req.flash('success', 'Thank you! The restaurant was added 😌');
    // res.redirect(`/restaurants`);
  }
}

export default restaurants;