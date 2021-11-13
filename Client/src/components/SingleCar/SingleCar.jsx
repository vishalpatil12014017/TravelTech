import React, { useState } from 'react'
import { useParams } from 'react-router'
import DestinationAndDate from '../Cardata/DestinationAndDate'
import Services from '../Cardata/Services'
import Carinfo from './Carinfo';


function SingleCar({ vehicles ,id}) {
    const [params, setParams] = useState(useParams())
    
    console.log(params)
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
   
    return (
        <>
            <DestinationAndDate handleChange={handleChange} />
            <Services />
            <Carinfo vehicles={vehicles} formdata={formdata} id={params._id} />
        </>
    )
}

export default SingleCar
