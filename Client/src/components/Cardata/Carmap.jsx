import React from 'react'
import styled from 'styled-components'
const Map = styled.header`
.card{
    background-color:#F4F4F4;
}
span{
    font-size:2.7vw;
    margin-top:1.3%;
    color:#BE2E15;
    font-family:Noto Serif;
}
small{
    font-family:Noto Serif;
    color:#012681;
}
.card-img-top{
    max-width:34%;
    height:35px;
    @media all and (max-width:524px){
        height:25px;
   } 
}
.res{
    font-size:0.8vw;
    text-align:center
}
h5{
    font-size:4.0vw; 
}
.des{
    font-size:1.3vw;
    font-family:Noto Serif
}
.carousel-item img{
 max-height:430px
}
`
function Carmap({ vehicles }) {
    console.log(vehicles, "vi")
    return (
        <Map>
            <div className="container px-0 py-3">
                {
                    vehicles.map((e) => (
                        <div key={e._id} className="card p-4 mt-5 border-0">
                            <div className="row g-0">
                                <div className="col-xl-4">
                                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                        <div key={e._id} className="carousel-inner">
                                            <div key={e._id} className="carousel-item active " data-bs-interval="10000">
                                                <img src={e.image_main_url} className="d-block w-100 " alt="..."  />
                                            </div>
                                            <div className="carousel-item " data-bs-interval="2000">
                                                <img src={e.image1_url} className="" alt="..." />
                                            </div>
                                            <div className="carousel-item ">
                                                <img src={e.image2_url} className=" " alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="card-body ps-4">
                                        <h5 className=" mb-3">{e.vehicle_name}<span className="float-end">{e.vehicle_rate}</span></h5>
                                        <small className="fs-5">Vehicle description</small>
                                        <p className="card-text my-5 des">{e.vehicle_description}</p>
                                        <div className="row mt-5 px-1">
                                            <div className="col px-1">
                                                <div className="card border-0" >
                                                    <img src={e.passenger_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.no_of_passengers}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col px-1">
                                                <div className="card border-0" >
                                                    <img src={e.beds_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.no_of_beds}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col px-1">
                                                <div className="card border-0" >
                                                    <img src={e.shower_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.shower_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col px-1">
                                                <div className="card border-0" >
                                                    <img src={e.heating_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.heating_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col px-1">
                                                <div className="card border-0" >
                                                    <img src={e.gear_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.gear_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col px-1">
                                                <div className="card border-0" >
                                                    <img src={e.length_logo} className="card-img-top rounded mx-auto d-block" alt="..." />
                                                    <div className="card-body px-0">
                                                        <p className="card-text res">{e.length}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-success float-end px-4">continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </Map>
    )
}

export default Carmap
