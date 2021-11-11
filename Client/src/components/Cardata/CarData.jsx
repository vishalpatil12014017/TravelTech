import React from 'react'
import DestinationAndDate from './DestinationAndDate'
import Services from './Services'
import Carmap from './Carmap'
import Navbar from '../Home/Navbar'
function CarData({vehicles}) {
    console.log(vehicles,"v")
    return (
        <div>
            <Navbar/>
             <DestinationAndDate/>
             <Services/>
             <Carmap vehicles={vehicles}/>
        </div>
    )
}

export default CarData
