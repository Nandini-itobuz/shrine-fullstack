import express from "express"
import {blogData, queryCheck} from '../controllers/BlogControllers.js'
export const blogRouter = express.Router();

blogRouter.route('/').get(queryCheck, blogData);
// blogRouter.route('/:id').get((req, res) => {
//     console.log(req.params)
// });
