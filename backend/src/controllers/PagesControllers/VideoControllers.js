import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
const  {dirname} = import.meta;

const allVideoData = JSON.parse(fs.readFileSync(`${dirname}/../../Database/VideoDb.json`));

export function videoData(req,res){
    res.status(StatusCodes.OK).json({
        dataVideo : allVideoData,
        status:200
    })
}

