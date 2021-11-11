const express = require("express")

const Vehicle = require("../models/vehicle.model")

const router = express.Router();


//post request

router.post("", async(req, res) => {

    const vehicle = await Vehicle.create(req.body)

    return res.status(201).send({vehicle})

})

//get request

router.get("", async(req, res) => {
    const vehicle = await Vehicle.find().lean().exec()

    return res.status(200).send({vehicle})
})


//patch request

router.patch("/:id", async(req, res) => {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({vehicle})
})

module.exports = router