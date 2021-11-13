import React from 'react'
import DestinationAndDate from './DestinationAndDate'
import Services from './Services'
import Carmap from './Carmap'
function CarData({vehicles}) {
    console.log(vehicles,"v")
    return (
        <div>
             {/* <DestinationAndDate/> */}
             <Services className="pt-5"/>
             <Carmap vehicles={vehicles}/>
        </div>
    )
}

export default CarData
