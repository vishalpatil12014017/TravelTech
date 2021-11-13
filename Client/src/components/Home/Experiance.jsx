import React, { useState } from 'react'
import img1 from "./Logos/imgHome.jpg";
import img2 from '../Cardata/Logos/Vector1.png'
import img3 from '../Cardata/Logos/Vector2.png'
import styled from 'styled-components';
import 'reactjs-popup/dist/index.css';
import { Signup } from '../Signup/SignUp';
const Exper = styled.header`
.card{
background-color:#F56753;

}
img{
opacity:0.5
}

.d-grid>button{
background-color:#1DBA85

}
.col-12{
border:  solid #F56753;
border-radius:8px
}
.fw-bold{
max-width: 50%;
margin:auto;
margin-top:4%;
@media all and (max-width:1200px){
    max-width: 70%;
    font-size:45px;
}   
@media all and (max-width:1025px){
    max-width: 80%;
    font-size:25px;
}   
@media all and (max-width:512px){
    max-width: 95%;
    font-size:17px;
    margin-top:1%;
}  
@media all and (max-width:320px){
    font-size:16px;
  margin-top:1%;
  max-width: 100%;
} 
}
p{
max-width: 70%;
margin:auto;
margin-top:3%;
@media all and (max-width:1024px){
    max-width: 80%;
    font-size:10px;
}
@media all and (max-width:768px){
    max-width: 90%;
    font-size:10px;
}
@media all and (max-width:768px){
    max-width: 95%;
    font-size:7px;
}
@media all and (max-width:320px){
    font-size:5px;
  margin-top:1%;
  max-width: 100%;
}
}

.d-md-block{
margin-top:3%;
@media all and (max-width:512px){
  margin-top:1%;
}
}
.yellow{
background-color:#FFD027;
border-radius:20px;
padding-left:40px;
padding-right:40px;
@media all and (max-width:768px){
    font-size:8px;
    padding:5px;
    max-width: 100px;
} 



}
.modal-title{
font-size:3.03vw;
color:#F56753
}

.green{
background-color:#1DBA85;
border-radius:20px;
padding-left:30px;
padding-right:30px;
@media all and (max-width:768px){
    font-size:8px;
    padding:5px;
    max-width: 100px;
} 


}
.input-group{
max-height:10px
}
label{
color:#F56753

}
button:hover{
background-color:#000000
}

`
function Experiance({handleChange}) {
   
    return (
        <>
        <Exper>
            <div className="container pb-4">

                <div className="card text-white"  >
                    <img src={img1} className="card-img" alt="car" />
                    <div className="card-img-overlay" >
                        <h1 className="display-3 text-center fw-bold">Enjoy the experience of travelling</h1>
                        <p className="text-black">At Aazady India, we have RVs for everyone. RV rental is simple, safe, and secure with Aazady India. Whether you’re a seasoned road warrior looking for a Class A, or just starting out behind the wheel of a Class B or Class C, we have an RV rental for you. Not ready to drive a rig? You can always tow a travel trailer, a fifth-wheel, or even a folding trailer. And if you don’t feel like driving, you can always have an RV delivered to your destination. It’s your adventure, the choice is yours.</p>
                        <div className="d-md-block text-center">
                            <button className="btn btn-primary mx-1  yellow border-0" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Signup
                            </button>
                            <div className="modal fade" id="staticBackdrop" >
                                <div className="modal-dialog">
                                    <div className="modal-content p-3 py-0">
                                        <div className="modal-header border-0 p-0">
                                            <h5 className="modal-title py-0" id="staticBackdropLabel">Book Now</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div> <small className="text-black float-start">your Aazady campervan</small></div>
                                        <div className="row p-3 g-2">
                                            <div className="col-12 ">
                                                <div className="row px-3 pb-3">
                                                    <div className="col-1 p-0 p-2">
                                                        <img src={img2} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-11 p-0">
                                                        <div className="card-body p-0  ">
                                                            <label for="basic-url" className="form-label mb-0 ps-1 float-start">FROM</label>
                                                            <label for="basic-url" className="form-label sec mb-0">TO</label>
                                                            <div className="input-group">
                                                                {/* <input type="className=" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to start" /> */}
                                                                <select className="form-select border-0" aria-label="Default select example" name="StartingPoing" onChange={handleChange}>
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
                                                                <select className="form-select border-0" aria-label="Default select example" name="EndingPoing" onChange={handleChange}>
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
                                            <div className="col-12 ">
                                                <div className="row px-3 pb-3">
                                                    <div className="col-1 p-0 p-2">
                                                        <img src={img3} className="img-fluid rounded-start pb-2" alt="..." />
                                                    </div>
                                                    <div className="col-11 p-0">
                                                        <div className="card-body p-0  ">
                                                            <label for="basic-url" className="form-label mb-0 ps-1 float-start">FROM</label>
                                                            <label for="basic-url" className="form-label sec mb-0">TO</label>
                                                            <div className="input-group">
                                                                <input type="date" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to start" name="StartingDate" onChange={handleChange}/>
                                                                <input type="date" className="form-control border-0" id="basic-url" aria-describedby="basic-addon3" placeholder="Where to end" name="EndingDate" onChange={handleChange}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3"></div>

                                            <div className="col-6 d-grid gap-2 pb-3">
                                                <button className="btn btn-primary" type="button">Search</button>
                                            </div>

                                            <div className="col-3"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary mx-1  green border-0"data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book Now</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </Exper>
         <Signup></Signup>
         </>
    )
}

export default Experiance
