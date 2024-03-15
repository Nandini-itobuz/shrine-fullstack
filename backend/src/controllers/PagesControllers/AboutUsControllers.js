import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
const  {dirname} = import.meta;

const allAboutUsData = JSON.parse(fs.readFileSync(`${dirname}/../../Database/AboutUsDb.json`));
console.log(allAboutUsData);

export function aboutUsData(req,res){
    res.status(StatusCodes.OK).json({
        dataAboutUs :allAboutUsData,
        status : 200
    })
}