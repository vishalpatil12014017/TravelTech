import React from 'react'
import img1 from "./Logos/imgHome.jpg";
import styled from 'styled-components';
function Experiance() {
    const Exper = styled.header`
    .card{
    background-color:#F56753;
   
}
img{
    opacity:0.5
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

`
    return (
        <Exper>
            <div className="container">

                <div className="card text-white"  >
                    <img src={img1} className="card-img" alt="car" />
                    <div className="card-img-overlay" >
                        <h1 className="display-3 text-center fw-bold">Enjoy the experience of travelling</h1>
                        <p className="text-black">At Aazady India, we have RVs for everyone. RV rental is simple, safe, and secure with Aazady India. Whether you’re a seasoned road warrior looking for a Class A, or just starting out behind the wheel of a Class B or Class C, we have an RV rental for you. Not ready to drive a rig? You can always tow a travel trailer, a fifth-wheel, or even a folding trailer. And if you don’t feel like driving, you can always have an RV delivered to your destination. It’s your adventure, the choice is yours.</p>
                        <div className="d-md-block text-center">
                            <button className="btn btn-primary mx-1  yellow border-0" type="button">Signup</button>
                            <button className="btn btn-primary mx-1  green border-0" type="button">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Exper>
    )
}

export default Experiance
