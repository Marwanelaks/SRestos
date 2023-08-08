const cloudinary = require("cloudinary");

cloudinary.config({
   cloud_name: "dgojq8ovj",
   api_key: "592326234396123" ,
   api_secret: "mme5yoxTMPQJ8xLtuZq1-IF-wFs"
});

const Uploadimgs = async(imgpath) =>{
  try{
   const data = await cloudinary.uploader.upload(imgpath,{
      resource_type: 'auto',
   });
   return data;
  }catch (err){
   return err;
  }
}
const Deleteimgs = async(imgId) =>{
   try{
    const destroy = await cloudinary.uploader.destroy(imgId);
    return destroy;
   }catch (err){
    return err;
   }
 }

 module.exports = {Uploadimgs,Deleteimgs}