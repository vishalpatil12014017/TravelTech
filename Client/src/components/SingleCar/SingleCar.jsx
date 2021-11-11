import React, { useState } from 'react'
import DestinationAndDate from '../Cardata/DestinationAndDate'
import Services from '../Cardata/Services'
import Navbar from '../Home/Navbar'
import Carinfo from './Carinfo'

function SingleCar({ vehicles }) {
    const [formdata, setFormdata] = useState({
        EndingDate: "",
        EndingPoing: "",
        StartingDate: "",
        StartingPoing: "",

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value,
        })
    };
    // console.log(formdata)
    return (
        <>
            <Navbar />
            <DestinationAndDate handleChange={handleChange} />
            <Services />
            <Carinfo vehicles={vehicles} formdata={formdata} />
        </>
    )
}

export default SingleCar
