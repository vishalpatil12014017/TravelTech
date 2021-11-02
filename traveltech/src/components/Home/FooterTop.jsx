import React from 'react'
import image from './Logos/1.png'
import styled from 'styled-components'
const Toolbar = styled.header`
.card-img-overlay{
    background-color:#F56753;
    opacity:0.6
}
.card-img{
    max-height:522px;
    opacity:1
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
    opacity:1 !important
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
