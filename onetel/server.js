const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const  cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8070;
//import routes
const postDelivery = require('./routes/postD');
const postProduct = require('./routes/postProduct'); 
const postRepair = require('./routes/postRepair');
const postReg = require('./routes/registration');


//app middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());



//routes middelware
app.use(postDelivery);
app.use(postProduct);
app.use(postRepair);
app.use(postReg);




app.get("/",(req,res)=>{
    res.send("upload file")
})

 
const DB_URL='mongodb+srv://SLIIT:sliit123@sliit.9pcigl8.mongodb.net/onetel?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=> console.log('DB connection error',err));


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})





