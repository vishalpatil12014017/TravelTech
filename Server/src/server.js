const express = require("express")
const connect = require("./config/db")

const app = express()

const port = 2244;

app.use(express.json())

app.listen(port, async () => {

    await connect();

    console.log(`listening to ${port}`)
    
})