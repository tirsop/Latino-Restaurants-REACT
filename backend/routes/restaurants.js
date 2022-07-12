import express from 'express';
import catchAsync from '../utils/catchAsync.js';
import restaurants from '../controllers/restaurants.js'
import { validateRestaurant } from '../middleware.js';

const router = express.Router();


router.get('/', catchAsync(restaurants.index));
// router.get('/new', restaurants.newRestaurant);
router.post('/', validateRestaurant, catchAsync(restaurants.createRestaurant));

export default router;