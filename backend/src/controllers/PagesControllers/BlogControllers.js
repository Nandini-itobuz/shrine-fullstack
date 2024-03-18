import { StatusCodes } from "http-status-codes";
import fs from 'fs';
const  {dirname} = import.meta;

const allBlog = JSON.parse(fs.readFileSync(`${dirname}/../../Database/BlogDb.json`));
export function queryCheck(req,res,next){
    if(!req.query.page ){
        req.query.page=1;
    }
    if(!req.query.limit ){
        req.query.limit =4;
    }
    next();
}

export function blogData(req,res){
    const {page, limit } = req.query;
    const allBlogData =allBlog.slice(limit*(page-1),limit*(page-1)+limit)
    res.status(StatusCodes.OK).json({
        dataBlog : allBlogData,
        results : allBlogData.length,
        status: 200
    })
}