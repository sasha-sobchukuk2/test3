const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const greetingRouter  = require("./routes/GreetingRoute")

const corsMiddleware = require('./middleware/cors.middleWare')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(corsMiddleware)

app.use("/",greetingRouter)

const start = async ()=>{
    try{
        await mongoose.connect(config.get("dbUrl"))
        app.listen(PORT, ()=>{
            console.log('server started', PORT)
        })
    }
    catch (e){
        console.log(e)
    }
}
start()
