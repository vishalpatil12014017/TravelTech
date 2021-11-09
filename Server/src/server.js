const express = require("express")
const connect = require("./config/db")

const app = express()

const port = 2244;

app.use(express.json())


//controllers

const vehicleController = require("./controllers/vehicleController")


//
app.use("/vehicle", vehicleController)

app.listen(port, async () => {

    await connect();

    console.log(`listening to ${port}`)
    
})