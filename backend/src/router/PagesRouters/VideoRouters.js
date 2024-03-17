import express from 'express';
import {videoData} from '../../controllers/PagesControllers/VideoControllers.js';
export const videoRouter = express.Router();

videoRouter.route('/').get(videoData);