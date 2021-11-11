import React from 'react'
import img1 from '../Cardata//Logos/Vector1.png'
import img2 from '../Cardata/Logos/Vector2.png'
import styled from 'styled-components'
const Map = styled.header`
.card{
    background-color:#F4F4F4;
}
.span{
    font-size:2.0vw;
    margin-top:1.3%;
    color:#BE2E15;
    font-family:Noto Serif;
    text-align:center;
}
small{
    font-family:Noto Serif;
    color:#012681;
}
.card-img-top{
    max-width:34%;
    height:35px;
    @media all and (max-width:524px){
        height:25px;
   } 
}
.res{
    font-size:0.8vw;
    text-align:center;
    color:#BE2E15;
}
h5{
    font-size:3.2vw; 
}
.des{
    font-size:1.3vw;
    font-family:Noto Serif;
    @media all and (max-width:1024px){
        font-size:2.2vw;
   } 
}
.carousel-item img{
 max-height:430px
}
.img{
   
   width:100%;
    max-height:420px
}
.fluid{
    max-height:200px
}
.bor{
    border:3px dotted red
}
.sec{
    padding-left:40%
}
label{
    font-size:0.9vw;
    color:#F56753;
}
.redcheck{
    font-size:1.3vw;
    color:#F56753;
}

.sec1{
    padding-left:33%
}
.sec2{
    padding-left:31%
}
.sec3{
    padding-left:27%
}
.bottomborder{
   border-bottom:3px dotted #F56753;
}
input{
    background-color:#F4F4F4;
    border:1px solid #1DBA85;
    max-width:100px
}
.gree{
    color:#1DBA85;
}
p{
    font-size:1.2vw;
    @media all and (max-width:1024px){
        font-size:2.2vw;
   } 
}
.form-check-label{
    color:black;
    font-size:1.2vw;
    @media all and (max-width:1024px){
        font-size:2.2vw;
   } 
}
.btnn{
    background-color:#1DBA85;
    border-radius:10px
   
}
`
function Carinfo({ vehicles, formdata }) {
    console.log(formdata, "new")
    var date1, date2;
    date1 = new Date(formdata.StartingDate);
    date2 = new Date(formdata.EndingDate);
    var time_difference = date2.getTime() - date1.getTime();
    var days_difference = time_difference / (1000 * 60 * 60 * 24);
    return (
        <Map>
            <div className="container px-0 py-3">
                {
                    vehicles.map((e) => (
                        <div key={e._id} className="card p-4 border-0">
                            <div className="row pt-2">
                                <div className="col-8">
                                    <img src={e.image_main_url} className="img" alt="" />
                                </div>
                                <div className="col-4">
                                    <div className="row ">
                                        <img src={e.image1_url} className="fluid" alt="" />
                                    </div>
                                    <div className="row pt-3">
                                        <img src={e.image2_url} className="fluid" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="row g-0">

                                <div className="col-xl-8">
                                    <div className="card-body ps-4 p-4">
                                        <h5 className="mb-4">{e.vehicle_name}</h5>
                                        <small className="fs-5 pb-4">Vehicle description</small>
                                        <p className="card-text my-5 des mt-2">{e.vehicle_description}</p>
                                        <small className="fs-5">Aminities</small>
                                        <div className="row mt-5 px-1">
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.passenger_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.no_of_passengers}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.beds_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.no_of_beds}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.shower_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.shower_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.heating_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.heating_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.gear_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.gear_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.length_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.length}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.stove_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.stove_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.water_tank_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.water_tank_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.refrigirator_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.refrigirator_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.kitchen_sink_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.kitchen_sink_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.kitchen_kit_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.kitchen_kit_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.assistance_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.assistance_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.smoking_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.smoking_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 px-1 pt-1">
                                                <div className="card border-0" >
                                                    <img src={e.festival_friendly_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.festival_friendly_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 p-4">
                                    <div className="bor">
                                        <h1 className="span py-2 bottomborder">{e.vehicle_rate}</h1>
                                        <div className="card border-0 p-0 pt-4" >
                                            <div className="row g-0">
                                                <div className="col-1 p-0 p-2">
                                                    <img src={img1} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-11 p-0">
                                                    <div className="card-body p-0  ">
                                                        <label for="basic-url" className="form-label mb-0 ps-3">FROM</label>
                                                        <label for="basic-url" className="form-label sec mb-0">TO</label>
                                                        <div className="input-group">
                                                            <p className="ps-2">{formdata.StartingPoing}</p><p className="float-end sec1">{formdata.EndingPoing}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 p-0 pt-0  " >
                                            <div className="row g-0">
                                                <div className="col-1 p-0 p-2 pb-0 bottomborder">
                                                    <img src={img2} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-11 pb-3 bottomborder">
                                                    <div className="card-body p-0  ">
                                                        <label for="basic-url" className="form-label mb-0 ps-3">START DATE</label>
                                                        <label for="basic-url" className="form-label sec2 mb-0">END DATE</label>
                                                        <div className="input-group">
                                                            <p className="ps-3">{formdata.StartingDate}</p><p className="float-end sec3">{formdata.EndingDate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row p-4">
                                            <p>
                                                ₹{e.price} X {isNaN(days_difference) ? 0 : days_difference} Nights
                                                <span className="float-end">₹ {e.price * (isNaN(days_difference) ? 0 : days_difference)}</span></p>
                                            <p>Coupon Code <span className="float-end"><input type="text" placeholder="Enter code" /></span></p>
                                            <p>
                                                Total Savings
                                                <span className="float-end">₹ {e.price * (isNaN(days_difference) ? 0 : days_difference)}</span></p>
                                            <p>
                                                Security Deposit
                                                <span className="float-end">₹ 5000</span></p>
                                            <p className="pb-5 bottomborder">
                                                Total Payable Amount
                                                <span className="float-end gree">₹ {e.price * (isNaN(days_difference) ? 0 : days_difference) + 5000}</span></p>
                                            <div className="form-check pt-3">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    20% Payment of ₹ {e.price * (isNaN(days_difference) ? 0 : days_difference)} + 5000
                                                </label>
                                            </div>
                                            <div className="form-check  pb-4 bottomborder">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    Full Payment
                                                </label>
                                            </div>
                                            <div className="form-check py-2">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className=" redcheck" for="flexCheckDefault">
                                                I agree with terms & conditions
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3"></div>
                                <div className="col-6 d-grid gap-2">
                                    <button className="btn btnn p-2 " type="button">Book now</button>
                                </div>
                                <div className="col-3"></div>
                            </div>

                        </div>


                    ))
                }
            </div>
        </Map >
    )
}

export default Carinfo
