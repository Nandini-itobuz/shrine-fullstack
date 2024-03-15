import express from "express";
import {memberData, articleData, eventData,subscribes} from "../controllers/home-controllers.js"
export const homeRouter  = express.Router();

homeRouter.route('/member').get(memberData);
homeRouter.route('/article').get(articleData);
homeRouter.route('/events').get(eventData);
homeRouter.route('/subscribe').post(subscribes)

