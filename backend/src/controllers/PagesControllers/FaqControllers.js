import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
const  {dirname} = import.meta;

const allFaqData = JSON.parse(fs.readFileSync(`${dirname}/../../Database/FaqDb.json`));
// console.log(allFaqData);

export function faqData(req,res){
    res.status(StatusCodes.OK).json({
        dataFaqs :allFaqData,
        status : 200
    })
}