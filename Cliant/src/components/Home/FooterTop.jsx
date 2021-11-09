import React from 'react'
import image from './Logos/1.png'
import styled from 'styled-components'
const Toolbar = styled.header`
.card{
    background-color:#F56753;
   
}
img{
    opacity:0.5
}

.card-ti{
    max-width:550px;
    margin:3%;
    //styleName: Heading 1;
font-family: Poppins;

font-style: normal;
font-weight: 700;
letter-spacing: -0.015em;
text-align: left;


}
h1{
    color:white !important;
    font-weight:800;
    font-size: 75px;
    @media all and (max-width:1024px){
        font-size: 55px;
}
@media all and (max-width:768px){
        font-size: 45px;
}
@media all and (max-width:520px){
        font-size: 15px;
}

}

`
function FooterTop() {
    return (
        <>
            <Toolbar>
                <div className="card text-white"  >

                    <img src={image} className="card-img" alt="car" />


                    <div className="card-img-overlay" >
                        <h1 className="card-ti" >2021 AAZADY CAMPERVAN EVENT</h1>
                    </div>
                </div>
            </Toolbar>

        </>
    )
}

export default FooterTop