console.log(`\n\n\n\n\n\n\n\n\n
******************************************************************`);

import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';


import restaurantRoutes from './routes/restaurants.js'


const app = express(); // abbreviation of the code
const dbUrl = process.env.DB_URL;


mongoose.connect(dbUrl)
  .then(() => console.log(`--------------console.log\nDatabase connected\n`))
  .catch(err => {
    console.log(`--------------console.log\nMONGO CONNECTION ERROR:`)
    console.log(err + `\n`)
  })


app.use(express.json())                                   // need these two lines to use req.body
app.use(express.urlencoded({ extended: true }))


app.use('/restaurants', restaurantRoutes);

app.get('/', (req, res) => {
  res.redirect('/restaurants');
})


const port = 3000;
app.listen(port, () => {
  console.log(`--------------console.log\nListening at:\nhttp://localhost:${port}\n`);
})