
import 'dotenv/config';
import express from 'express';
import path from 'path';
import { URL } from 'url';
import mongoose from 'mongoose';
import CustomError from './utils/CustomError.js';
import errorMiddleware from './utils/errorMiddleware.js';
import restaurantRoutes from './routes/restaurants.js'

const app = express();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL;
const __dirname = new URL('.', import.meta.url).pathname;

console.log(`\n\n\n\n\n\n\n\n\n
******************************************************************`);


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

app.use('/api/restaurants', restaurantRoutes);                            // import restaurant routes

app.get('/', (req, res) => {
  res.redirect('/restaurants');                                           // home page redirects to /restaurants bc there's no homepage
})


// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
}

// error handling
// app.all('*', (req, res, next) => {
//   next(new CustomError('Page not found', 404));                           // all routes that don't match any above with throw an error
// })
app.use(errorMiddleware)                                                  // middleware that sets statusCode and message


app.listen(PORT, () => {
  console.log(`--------------console.log\nListening at:\nhttp://localhost:${PORT}\n`);
})