import React, { useState } from 'react'
import styled from 'styled-components'

import ptm1 from "./Logos/ptm1.png"
import dash from "./Logos/dash.png"
import upi from "./Logos/upi.png"
import qr from "./Logos/qr.png"
import pytm2 from "./Logos/pytm2.png"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import Dbdata from '../../Utils/request'

const Cont = styled.div`
.card{
    background: #F4F4F4;
    border: transparent;
}
.a{
    text-decoration: none;
    width: 81px;
height: 27px;
left: 31px;
top: 1px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
/* identical to box height */
text-transform: uppercase;
/* Dark Pastel Red */
color: #BE2E15;
}
.lft{
    float: left;
}
.rt{
    float: right;
}
.pLt{
    float: left;
}
.pRt{
    float: right;
    top: 0%;
    margin-top: 0%;
}
.lftD{
    clear: both;
    float: left;
}
.rtD{
    clear: both;
    float: right;
}
.bold{
    width: 451px;
height: 36px;
left: 211px;
top: 226px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height */
color: #000000;
}
.sm{width: 108px;
height: 20px;
left: 211px;
top: 260px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 20px;
/* identical to box height, or 167% */
letter-spacing: 0.015em;
color: #616161;
}
.am{
    width: 116px;
height: 20px;
left: 1104px;
top: 226px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 20px;
/* identical to box height, or 167% */
letter-spacing: 0.015em;
color: #616161;
}
.pr{
    width: 79px;
height: 36px;
left: 1142px;
top: 246px;
/* font-family: Poppins; */
font-style: normal;
font-weight: 500;
font-size: 1.3vw;
line-height: 36px;
/* identical to box height */
color: #000000;
}
.b2{
    width: 272px;
height: 27px;
left: 212px;
top: 351px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 27px;
/* identical to box height */
text-transform: uppercase;
color: #616161;
}
.b3{
    width: 634px;
height: 36px;
left: 211px;
top: 391px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height */
color: #000000
}
.flex-container {
  display: flex;
}
.flex-container > div {
  background-color: #f1f1f1;
}
.flex-container > img{
    margin: 1%;
}
.rtqr{
    float: right;
    margin-top: 4%;
}
.p1{
width: 567px;
height: 36px;
left: 244px;
top: 689px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height */
color: #000000;
}
.p2{
width: 234px;
height: 20px;
left: 244px;
top: 722px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 167% */
letter-spacing: 0.015em;
color: #616161;
}
.content{
  width: 50%; 
}
.content > .num {
    margin-left: 5%;
}
.btnP{
    float: right;
}
.num{
    width: 187px;
height: 36px;
left: 276px;
top: 762px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 36px;
/* identical to box height */
color: #000000;
}
.ptm2{
    margin-left: 1% !important;
}
.pn{
    width: 130px;
height: 36px;
left: 244px;
top: 824px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 36px;
/* identical to box height */
color: #000000;
}
.p{
    width: 227px;
height: 27px;
left: 212px;
top: 597px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 27px;
/* identical to box height */
text-transform: uppercase;
color: #616161;
}
.btnP > button{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
border: transparent;
/* position: absolute; */
width: 241px;
height: 48px;
left: 979px;
top: 756px;
/* Green */
background: #1DBA85;
border-radius: 5px;
}
.btn-outline-secondary:hover{
     background-color:rgb(25,135,84)
}
`

const Payment = () => {
    const [name, setName] = useState({})
    const location = useLocation();
    const data = location.state
    console.log(data)
    console.log(name)
    
    const postdata =  () => {
        const { data } =   Dbdata.post("userorder", {
          data:data,
            name:name
        })
        .then()
    };
    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.value < 0) {
            alert("Value should be 10 digit")
        }


        const { name, value, type, checked } = e.target;
        setName({
            name: type === "checkbox" ? checked : value,
        })
    };
    const handlealert = () => {
        if (name.name.length == 10) {
            alert("Your Ride is Booked. Have a safe Journey!")
        }
        else {
            alert("Please Enter valid Number")
        }

    }
    return (
        <>
            <Cont>

                <div className="container py-5">


                    <div className="card">
                        <div className="card-body">
                            <Link to="/Home" style={{ textDecoration: "none" }}><a className="a" >← GO BACK</a></Link>
                            <hr />
                            <div className="lft">
                                <p className="pLt bold">Aazady Campervan Traveler Order Id</p>
                                <p className="lftD sm">Transaction ID: ***</p>
                            </div>

                            <div className="rt">
                                <p className="pRt am">Amount to be paid</p>
                                <p className="rtD pr me-5">₹ {data.data.flexRadioDefault1 == "on" ? (data.carData.price * data.data.day) + 5000 : ((data.carData.price * data.data.day) + 5000) * 0.8}</p>
                            </div>




                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <div className="rtqr">
                                <img src={qr} alt="" />
                            </div>
                            <p className="b2">Pay Instantly Using QR Code</p>
                            <p className="b3">Scan QR code using Paytm or your preferred UPI app</p>


                            <div className="flex-container">
                                <img src={ptm1} alt="" />
                                <img src={dash} alt="" />
                                <img src={upi} alt="" />
                            </div>
                        </div>
                    </div>

                    <br />
                    {/* card2 end */}

                    {/* card3 */}
                    <div className="card">
                        <div className="card-body">
                            <p className="p" href="/">Select an option to pay</p>
                            <hr />
                            <div className="form-check menuD">
                                <input className="form-check-input btnD" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" default checked />
                                <label className="form-check-label" for="exampleRadios1">
                                    <img className="ptm2" src={pytm2} alt="" />
                                </label>

                                <div className="content par">
                                    <br />
                                    <p className="p1">Pay easily using your saved payment methods</p>
                                    <p className="p2">Mobile number registered with Paytm</p>

                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Mobile Number" aria-label="Recipient's username" aria-describedby="button-addon2" style={{ maxWidth: "300px" }} onChange={handleChange} required />
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={
                                            handlealert
                                        }
                                        >Button</button>
                                    </div>

                                </div>

                            </div>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label pn" for="exampleRadios1">
                                    Debit card
                                </label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label pn" for="exampleRadios1">
                                    Credit card
                                </label>
                            </div>
                        </div>
                        <div className="btnP p-3 float-end pe-5">
                            <Link to="/Home"><button className="float-end px-5 btn btn-success mb-5" onclick={postdata}>PROCEED</button></Link>
                        </div>
                    </div>

                </div>
                {/* card3 end */}
                <br />
                <br />

            </Cont>
        </>
    )
}

export default Payment
