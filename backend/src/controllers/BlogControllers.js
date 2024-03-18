import { StatusCodes } from "http-status-codes";
import fs from 'fs';
const  {dirname} = import.meta;

const allBlog = JSON.parse(fs.readFileSync(`${dirname}/../Database/BlogDb.json`));
export function queryCheck(req,res,next){
    if(!req.query.page ){
        req.query.page=1;
    }
    if(!req.query.limit ){
        req.query.limit =6;
    }
    next();
}

export function blogData(req,res){
    const {page, limit } = req.query;
    const allBlogData =allBlog.slice(parseInt(limit)*(parseInt(page)-1),(parseInt(limit)*(parseInt(page)-1))+parseInt(limit))
    res.status(StatusCodes.OK).json({
        dataBlog : allBlogData,
        results : allBlogData.length,
        status: 200
    })
}