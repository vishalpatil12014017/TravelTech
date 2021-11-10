import React from 'react'
import img21 from './Logos/Group1.png'
import img22 from './Logos/Group2.png'
import img23 from './Logos/Group3.png'
import img24 from './Logos/Group4.png'
function Payoptions() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                   <img className="rounded mx-auto d-block img-fluid" src={img21} alt="" />
                </div>
                <div className="col">
                     <img className="rounded mx-auto d-block img-fluid" src={img22} alt="" />
                </div>
                <div className="col">
                     <img className="rounded mx-auto d-block img-fluid" src={img23} alt="" />
                </div>
                <div className="col">
                     <img className="rounded mx-auto d-block img-fluid" src={img24} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Payoptions
