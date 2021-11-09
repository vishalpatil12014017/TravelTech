import React from 'react'
import styled from 'styled-components'
import image from './Logos/2.png'
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
 
    background: #FFD027;
border-radius: 24px;
border:none;
color:black
}
`
function Community() {
    return (
        <>
            <ToolCard>
                <div className="container p-4">
                    <h1 className="my-4"><span className="underline">J</span>oin community</h1>
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={image} className="img-fluid rounded-start mb-4" alt="..." />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body pt-0">

                                    <p className="card-text fs-6">India first campervan travel community where you can connected to different people all over the world and can find a campanion while you along for the trip. This travel community helps to talk and open ourself to thing which we like to do, can give little joy in travelling.</p>
                                    <div className="d-grid gap-2 col-5 mx-auto mt-5">
                                        <button className="btn btn-primary mt-3 " type="button">join community</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ToolCard>


        </>
    )
}

export default Community
