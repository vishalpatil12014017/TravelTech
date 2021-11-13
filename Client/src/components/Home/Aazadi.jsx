import React from 'react'
import styled from 'styled-components'
import img01 from './Logos/van.jpg'
import { Link } from 'react-router-dom'
const ToolCard = styled.header`
h1{
    font-family: Poppins;
}
.card{
    border:none
}
.underline{
    text-decoration:underline
}
.card-text{
    max-width:90%;
    font-family: Noto Serif;
}
button{
 
    background: #1DBA85;
border-radius: 24px;
border:none;
color:black;
max-width: 450px;
}
button:hover{
    background-color:#000000
}
`
function Aazadi() {
    return (
        <ToolCard>
        <div className="container p-4">
            <h1 className="my-5 mt-2"><span className="underline">A</span>azady campervan</h1>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img01} className="img-fluid rounded-start mb-4" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body pt-0">

                            <p className="card-text fs-6">Aliquip et amet magna ullamco proident sunt Lorem ipsum do consequat id quis. Dolore irure laboris occaecat deserunt aliqua non enim anim incididunt tempor ipsum veniam duis. Sunt adipisicing culpa excepteur eiusmod ad nostrud deserunt tempor voluptate. Tempor pariatur mollit sunt pariatur. Mollit cupidatat nostrud ad et magna elit excepteur dolore qui eu.</p>
                            <div className="d-grid gap-2 col-5 mx-auto mt-5">
                                <Link to="/cardata" style={{textDecoration:"none"}}>
                                <button className="btn btn-primary mt-2" type="button">BOOK YOUR AAZADY</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ToolCard>
    )
}

export default Aazadi
