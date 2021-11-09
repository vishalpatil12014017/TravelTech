const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    image_main_url: {type: String, required: true},
    image1_url: {type: String, required: true},
    image2_url: {type: String, required: true},
    vehicle_name: {type: String, required: true},
    vehicle_description: {type: String, required: true},
    vehicle_rate: {type: String, required: true},
    stars: {type:String, required:false},
    passenger_logo: {type: String,  required: false},
    no_of_passengers: {type:String,  required: false},
    beds_logo:  {type:String,  required: false},
    no_of_beds:  {type:String,  required: false},
    shower_logo:  {type:String,  required: false},
    shower_description:  {type:String,  required: false},
    heating_logo:  {type:String,  required: false},
    heating_description:  {type:String,  required: false},
    gear_logo:  {type:String,  required: false},
    gear_description:  {type:String,  required: false},
    length_logo:  {type:String,  required: false},
    length:  {type:String,  required: false},
    stove_logo:  {type:String,  required: false},
    stove_description:  {type:String,  required: false},
    water_tank_logo:  {type:String,  required: false},
    water_tank_description:  {type:String,  required: false},
    refrigirator_logo:  {type:String,  required: false},
    refrigirator_description:  {type:String,  required: false},
    kitchen_sink_logo:  {type:String,  required: false},
    kitchen_sink_description: {type:String,  required: false},
    kitchen_kit_logo:  {type:String,  required: false},
    kitchen_kit_description:  {type:String,  required: false},
    assistance_logo:  {type:String,  required: false},
    assistance_description:  {type:String,  required: false},
    smoking_logo:  {type:String,  required: false},
    smoking_description:  {type:String,  required: false},
    festival_friendly_logo:  {type:String,  required: false},
    festival_friendly_description:  {type:String,  required: false},
    pet_allowed:  {type:String,  required: false},
    pet_allowed_description:  {type:String,  required: false},

},
{
    versionKey:false,
    timestamps:true



})

const Vehicle = mongoose.model("vehicle", vehicleSchema)

module.exports = Vehicle



