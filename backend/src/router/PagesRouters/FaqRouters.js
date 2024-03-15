import express from "express";
import {faqData} from '../../controllers/PagesControllers/FaqControllers.js';
export const faqRouter  = express.Router();

faqRouter.route('/').get(faqData);