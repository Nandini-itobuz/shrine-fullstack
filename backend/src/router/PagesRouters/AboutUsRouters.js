import express from "express";
import {aboutUsData} from '../../controllers/PagesControllers/AboutUsControllers.js';
export const aboutUsRouter  = express.Router();

aboutUsRouter.route('/').get(aboutUsData);