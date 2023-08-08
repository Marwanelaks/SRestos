const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer")
const path = require ("path")
const User = require("./data"); 
const { Uploadimgs } = require("./Cloudinary");
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://marwanelaksiouer:OkfL1Yn3UcpDCaI4@cluster0.za5ufoz.mongodb.net/yourDatabaseName?retryWrites=true&w=majority");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({storage});

app.get("/data", async (req, res) => {
    const data = await User.find(); 
    res.json(data);
}); 
app.get("/data/:id", async (req, res) => {
   const {id} = req.params
   const data = await User.findById(id); 
   res.json(data); 
});

app.post("/newUser",(req,res)=>{
   const {id,username,pass,mail,tel} = req.body
   const addnewUser = new User({
           id : id,
           username : username,
           password : pass,
           email : mail,
           tel : tel
}); 
   addnewUser.save()
})

app.put('/restau/:Id',upload.single("RestauPic") ,async (req, res) => {
   const { id, nom } = req.body; 
   const RestauPic = req.file.filename; 
   const {Id} = req.params
   const imgpath = path.join(__dirname,`./upload/${RestauPic}`);
   const uploading = await Uploadimgs(imgpath) 
   const existingUser = await User.findById(Id);
   existingUser.restaurant.push({
      id:id,
      image: uploading.secure_url,
      name: nom
   });
   const updatedUser = await existingUser.save();
 
   res.json(updatedUser);
 });

 

 

 

app.listen(5000);








