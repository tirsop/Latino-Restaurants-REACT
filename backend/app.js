console.log(`\n\n\n\n\n\n\n\n\n
******************************************************************`);

import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import CustomError from './utils/CustomError.js';



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

// error handling
app.all('*', (req, res, next) => {
  next(new CustomError('Page not found', 404));
})
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong'
  console.log(err.message);
  // res.status(statusCode).render('error', { err });
  res.status(statusCode).send(err);
})


const port = 3000;
app.listen(port, () => {
  console.log(`--------------console.log\nListening at:\nhttp://localhost:${port}\n`);
})