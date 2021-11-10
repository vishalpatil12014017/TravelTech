import React from 'react'
import styled from 'styled-components'

function PlacesToVisit({ data }) {
    const Places = styled.header`
     .underline{
         text-decoration:underline;
     }
     .display-4{
         font-weight:600

     }.card-body{
       padding-right:15px;
       padding-left:15px;
        @media all and (max-width:768px){
      
            padding-left:0px;
       padding-right:0px
  } 
       
     } 
     .name{
        font-size:25px;
        @media all and (max-width:1024px){
       
       font-size:20px;
   } 
   @media all and (max-width:768px){
      
      font-size:15px;
  } 
     }
     a{
    text-decoration:none;
    color:black;
    
    @media all and (max-width:1024px){
       
        font-size:20px;
    } 
    @media all and (max-width:768px){
       
       font-size:15px;
      
   } 
    
 }
     .text-end{
         padding-top:3px;
         color:#1DBA85
     }  
     
    `
    return (
        <>
            <Places>
                <div className="container pb-3">
                    <h1 className="my-4 display-4"><span className="underline">B</span>est places to visit</h1>
                    <div className="row">
                        {
                            data.map((e) => (
                                <div key={e._id} className="col px-1 py-3 col-6  g-3 col-lg-4 col-xl-3">
                                    <div className="card border-0" >
                                        <img src={e.image_url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <a className="card-link name">{e.name}</a>
                                            <a className="card-link text-end float-end mx-0 mr-1">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>
            </Places>

        </>
    )
}

export default PlacesToVisit
