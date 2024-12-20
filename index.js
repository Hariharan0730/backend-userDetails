const express = require('express')
const mongoose = require('mongoose')
const userRoutes=require("./routes/userRoutes")
require("dotenv").config()
const cors = require("cors")
const app = express()

app.use(cors())
mongoose.connect(process.env.mongo_server)
.then(() => console.log("connected to DB"))
.catch((err) => console.log(err))
app.use(express.json())
app.use('/user', userRoutes)
app.listen(process.env.port, (error) =>{
    if(!error){
        console.log("connected with server!, port :",process.env.port);
    }
    else{
        console.log("Error :",error);
        
    }
})