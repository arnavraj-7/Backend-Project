import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_API_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const upload= async (filePath)=>{
   try{
    const uploadResult = await cloudinary.uploader
    .upload(
        filePath,{
            resource_type: "auto", // Automatically detect the resource type
        }
    )
    fs.unlinkSync(filePath); // Delete the file from the local filesystem
    return uploadResult;
}

    catch(error){
        console.log(error);
        return null
    };
   
}