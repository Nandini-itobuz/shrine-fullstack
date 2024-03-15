import express from "express";
import {carousalsData} from '../controllers/CarousalImageControllers.js';
export const carousalImageRouter  = express.Router();

carousalImageRouter.route('/').get(carousalsData);