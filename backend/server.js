console.log(`\n\n\n\n\n\n\n\n\n
******************************************************************`);

import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import CustomError from './utils/CustomError.js';
import errorMiddleware from './utils/errorMiddleware.js';
import restaurantRoutes from './routes/restaurants.js'

const app = express();                                                    // abbreviation of the code
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl)
  .then(() => console.log(`--------------console.log\nDatabase connected\n`))
  .catch(err => {
    console.log(`--------------console.log\nMONGO CONNECTION ERROR:`)
    console.log(err + `\n`)
  })


app.use(express.json())                                                   // need these two lines to use req.body
app.use(express.urlencoded({ extended: true }))

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/restaurants', restaurantRoutes);                                // import restaurant routes

app.get('/', (req, res) => {
  res.redirect('/restaurants');                                           // home page redirects to /restaurants bc there's no homepage
})

// error handling
app.all('*', (req, res, next) => {
  next(new CustomError('Page not found', 404));                           // all routes that don't match any above with throw an error
})
app.use(errorMiddleware)                                                  // middleware that sets statusCode and message


const port = 3001;
app.listen(port, () => {
  console.log(`--------------console.log\nListening at:\nhttp://localhost:${port}\n`);
})