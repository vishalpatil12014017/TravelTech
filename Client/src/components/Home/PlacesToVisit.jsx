import React from 'react'
import styled from 'styled-components'

function PlacesToVisit() {
    const Places = styled.header`
     .underline{
         text-decoration:underline;
     }
     .display-4{
         font-weight:600

     }
     a{
         text-decoration:none;
         color:black
     }   
    `
    return (
        <>
            <Places>
                <div className="container">
                    <h1 className="my-4 display-4"><span className="underline">B</span>est places to visit</h1>
                    <div className="row">
                    <div className="col px-1 py-3">
                            <div className="card border-0" >
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a  className="card-link fs-4">Card title</a>
                                    <a  className="card-link text-end float-end">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Places>

        </>
    )
}

export default PlacesToVisit
