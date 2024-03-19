import express from "express"
import {blogData, queryCheck, getComments} from '../controllers/BlogControllers.js'
export const blogRouter = express.Router();

blogRouter.route('/').get(queryCheck, blogData);
blogRouter.route('/getComment').post(getComments)