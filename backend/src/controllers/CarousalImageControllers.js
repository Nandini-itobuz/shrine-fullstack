import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
const  {dirname} = import.meta;

const featuredImages = JSON.parse(fs.readFileSync(`${dirname}/../Database/CarousalImages.json`));
// console.log(allFaqData);

export function carousalsData(req,res){
    res.status(StatusCodes.OK).json({
        dataCarousals :featuredImages,
        status : 200
    })
}