const mongoose = require("mongoose")

const placeSchema = new mongoose.Schema({

    name: {type:String, required:true},
      
    image_url:{type:String, required:true}

    },
    {

        versionKey:false,
        timestamps: true

    
        
   
    })

const Place = mongoose.model("place", placeSchema)


module.exports = Place