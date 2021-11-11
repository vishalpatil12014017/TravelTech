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
function DestinationAndDate() {
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
                                            <select class="form-select border-0" aria-label="Default select example">
                                                <option selected>Where to start</option>
                                                <option value="1">PUNE</option>
                                                <option value="2">Bangalore</option>
                                                <option value="3">Delhi</option>
                                                <option value="4">Gurgaon</option>
                                                <option value="5">Mumbai</option>
                                                <option value="6">Kolkata</option>
                                                <option value="7">Hyderabad</option>
                                                <option value="8">Ahmedabad</option>
                                                <option value="9">Chennai</option>
                                            </select>
                                            <select class="form-select border-0" aria-label="Default select example">
                                                <option selected>Where to end</option>
                                                <option value="1">PUNE</option>
                                                <option value="2">Bangalore</option>
                                                <option value="3">Delhi</option>
                                                <option value="4">Gurgaon</option>
                                                <option value="5">Mumbai</option>
                                                <option value="6">Kolkata</option>
                                                <option value="7">Hyderabad</option>
                                                <option value="8">Ahmedabad</option>
                                                <option value="9">Chennai</option>
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
                                            <input type="date" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to start" />
                                            <input type="date" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to end" />
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
