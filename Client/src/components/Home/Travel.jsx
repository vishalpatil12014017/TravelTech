import React from 'react'
import image from './Logos/Rec.png'
import styled from 'styled-components'
const Toolbar = styled.header`
.card{
    background-color:#F56753;
   
}
img{
    opacity:0.5
}


h1{
    color:white !important;
    font-weight:800;
    font-size: 65px;
    @media all and (max-width:1444px){
        font-size: 45px;
}
@media all and (max-width:788px){
        font-size: 30px;
}
@media all and (max-width:520px){
        font-size: 15px;
}

}

`
function Travel() {
    return (
        <Toolbar>
                <div className="container my-4">
                <div className="card text-white"  >
                    <img src={image} className="card-img" alt="car" />
                    <div className="card-img-overlay" >
                        <h1 className="card-ti" >2021 AAZADY CAMPERVAN EVENT</h1>
                    </div>
                </div>
                </div>
            </Toolbar>
    )
}

export default Travel
