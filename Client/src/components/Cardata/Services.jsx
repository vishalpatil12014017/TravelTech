import React from 'react'
import img1 from './Logos/Group1.png'
import img2 from './Logos/Group2.png'
import img3 from './Logos/Group3.png'
import img4 from './Logos/Group4.png'
import img5 from './Logos/Group5.png'
import styled from 'styled-components'
const Service = styled.header`
.row{
    background-color:#F56753
}`
function Services() {
    return (
        <Service>
            <div className="container p-3">
                <div className="row p-4">
                    <div className="col">
                        <img className="img-fluid" src={img1} alt="" />
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={img2} alt="" />
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={img3} alt="" />
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={img4} alt="" />
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={img5} alt="" />
                    </div>
                </div>
            </div>
        </Service>
    )
}

export default Services
