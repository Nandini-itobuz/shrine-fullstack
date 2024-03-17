import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
const  {dirname} = import.meta;

const allGalleryData = JSON.parse(fs.readFileSync(`${dirname}/../../Database/GalleryDb.json`));
export function galleryData(req,res){
    res.status(StatusCodes.OK).json({
        dataGallery : allGalleryData,
        status:200
    })
}

