const mongoose = require("mongoose")
const { MongoClient } = require('mongodb');

const connect = () => {



     return mongoose.connect("mongodb+srv://Sagar:sagard@cluster0.r574z.mongodb.net/TravelTech?retryWrites=true&w=majority")
}

module.exports = connect;