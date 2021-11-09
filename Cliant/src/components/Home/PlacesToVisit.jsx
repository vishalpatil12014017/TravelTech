import React from 'react'
import styled from 'styled-components'

function PlacesToVisit() {
    const Places=styled.header`
     .underline{
         text-decoration:underline;
     }   
    `
    return (
        <>
        <Places>
            <div className="container">
            <h1 className="my-4"><span className="underline">B</span>est places to visit</h1>
            <div className="row">
                <div className="col"></div>
            </div>
            </div>
        </Places>
            
        </>
    )
}

export default PlacesToVisit
