import React from 'react'
import styled from 'styled-components'
import img1 from './Logos/Vector1.png'
import img2 from './Logos/Vector2.png'
const Date = styled.header`
.container{
    max-width:1100px
}
.col{
  border:  solid #F56753;
  border-radius:8px
 
}
.form-select:focus{
    outline:none ;
    border:none
   
}
.input-group{
    margin-bottom:5px
}
.sec{
    padding-left:40%
}
label{
    font-size:12px;
    color:#F56753;
}
.sec1{
    padding-left:33%
}
`
function DestinationAndDate({ handleChange }) {
    return (
        <Date>
            <div className="container py-5">
                <div className="row mx-5">
                    <div className="col mx-3 border-4 ps-1" >
                        <div className="card border-0 p-0" >
                            <div className="row g-0">
                                <div className="col-1 p-0 p-2">
                                    <img src={img1} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-11 p-0">
                                    <div className="card-body p-0  ">
                                        <label for="basic-url" className="form-label mb-0 ps-3">FROM</label>
                                        <label for="basic-url" className="form-label sec mb-0">TO</label>
                                        <div className="input-group">
                                            {/* <input type="className=" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to start" /> */}
                                            <select class="form-select border-0" aria-label="Default select example" onChange={handleChange} name="StartingPoing">
                                                <option selected>Where to start</option>
                                                <option value="PUNE">PUNE</option>
                                                <option value="Bangalore">Bangalore</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Gurgaon">Gurgaon</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Kolkata">Kolkata</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                                <option value="Ahmedabad">Ahmedabad</option>
                                                <option value="Chennai">Chennai</option>
                                            </select>
                                            <select class="form-select border-0" aria-label="Default select example" onChange={handleChange} name="EndingPoing">
                                                <option selected>Where to end</option>
                                                <option value="PUNE">PUNE</option>
                                                <option value="Bangalore">Bangalore</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Gurgaon">Gurgaon</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Kolkata">Kolkata</option>
                                                <option value="Hyderabad">Hyderabad</option>
                                                <option value="Ahmedabad">Ahmedabad</option>
                                                <option value="Chennai">Chennai</option>
                                            </select>
                                            {/* <input type="className=" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to end" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mx-3 border-4 ps-1" >
                        <div className="card border-0 p-0" >
                            <div className="row g-0">
                                <div className="col-1 p-0 p-2">
                                    <img src={img2} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-11 p-0">
                                    <div className="card-body p-0  ">
                                        <label for="basic-url" className="form-label mb-0 ps-3">START DATE</label>
                                        <label for="basic-url" className="form-label sec sec1 mb-0">END DATE</label>
                                        <div className="input-group">
                                            <input type="date" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to start" onChange={handleChange} name="StartingDate" />
                                            <input type="date" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to end" onChange={handleChange} name="EndingDate" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Date>
    )
}

export default DestinationAndDate
