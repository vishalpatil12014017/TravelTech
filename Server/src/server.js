const express = require("express")
const connect = require("./config/db")

const app = express()

const port = 2244;

app.use(express.json())


//controllers

const vehicleController = require("./controllers/vehicleController")

const placeController = require("./controllers/placeController")






//
app.use("/vehicle", vehicleController)

app.use("/place", placeController )





app.listen(port, async () => {

    await connect();

    console.log(`listening to ${port}`)
    
})