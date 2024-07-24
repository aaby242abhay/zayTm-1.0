const express = require("express");
const mongoose = require("mongoose");
const rootRouter = require("./routes/index.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());        //used to parse JSON bodies         //earlier $ npm install body-parser && app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use('/api/v1', rootRouter);

app.listen(PORT, ()=>{
    mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("Connected to MongoDB Database...");
    })
    console.log(`Server is running on port ${PORT}`);
})




