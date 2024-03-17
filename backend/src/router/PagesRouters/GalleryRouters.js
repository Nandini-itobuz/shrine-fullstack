import express from 'express';
import {galleryData} from '../../controllers/PagesControllers/GalleryControllers.js';
export const galleryRouter = express.Router();

galleryRouter.route('/').get(galleryData);