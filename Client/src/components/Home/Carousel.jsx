import React from 'react'
import styled from 'styled-components'
import likee from './Logos/likeee.png'
import vector from './Logos/Vector.png'
import { useState } from 'react'
const Carou = styled.header`
.like{
    position:absolute;
    padding:15px
}
.card-img-top{
    position:relative
}
.card-body{
    @media all and (max-width:768px){
       
       font-size:8px;
       padding-left:0px;
       padding-right:0px;
       
   } 
   @media all and (max-width:524px){
       
       font-size:6px;
       padding-left:0px;
       padding-right:0px;
   } 
}
a{
    text-decoration:none;
    color:black;
    @media all and (max-width:1024px){
       
        font-size:13px;
    } 
    @media all and (max-width:768px){
       
       font-size:8px;
       padding-left:0px;
       padding-right:0px
   } 
   @media all and (max-width:768px){
       
       font-size:6px;
       padding-left:0px;
       padding-right:0px
   } 
    
}
.card-text{
    @media all and (max-width:768px){
       padding-top:0px;
       
   } 
   @media all and (max-width:524px){
       padding-top:0px;
   } 

}
.card-text:hover{
    cursor: pointer;
}
.text-end{
    text-decoration:underline;
    color:#1DBA85;
    
}

`
function Carousel({vehicles}) {
    const [data,setData]=useState([])
    const [id,setId]=useState([])
    const handlecolor=(id)=>{
        const updated=vehicles.filter((e)=>{
            if(e._id===id){
                e.likeStatus=!e.likeStatus
            }
            return e;
        })
        setData(updated)
    }
  
    return (
        <Carou>
            <div className="container">
                {/* carousel start */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* carousel-1 */}
                        <div className="carousel-item active">
                            <div className="row">
                                {
                                    vehicles.map((e) => (
                                        <div key={e._id} className="col col-3 px-1 py-3">
                                            <div className="card border-0" >
                                                <img src={e.image_main_url} className="card-img-top" alt="..." />
                                                <img className="like img-fluid" src={e.likeStatus ? vector:likee} alt="" onClick={()=>{
                                                    handlecolor(e._id)
                                                }} />

                                                <div className="card-body">
                                                    <a className="card-title h4">{e.vehicle_name}</a>
                                                    <a className="card-text text-end float-end">READ MORE</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* carousel-2 end*/}

                    </div>
                    <button className="carousel-control-next btnTT" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <button className="carousel-control-prev btnTT " style={{maxWidth:"20px"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                </div>
            </div>
        </Carou >
    )
}

export default Carousel
