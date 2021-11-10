import React from 'react'
import styled from 'styled-components'
import likee from './Logos/likeee.png'
import img10 from './Logos/UDAIPUR.png'
const Carou = styled.header`
.like{
    position:absolute;
    padding:15px
}
.card-img-top{
    position:relative
}
a{
    text-decoration:none;
    color:black;
    @media all and (max-width:1024px){
       
        font-size:13px;
    } 
    @media all and (max-width:768px){
       
       font-size:10px;
   } 
    
}
.text-end{
    text-decoration:underline;
    color:#1DBA85
}
`
function Carousel() {
    return (
        <Carou>
            <div className="container">
                {/* carousel start */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* carousel-1 */}
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col col-3 px-1 py-3">
                                    <div className="card border-0" >
                                        <img src={img10} className="card-img-top" alt="..." />
                                        <img className="like" src={likee} alt="" />
                                        <div className="card-body">
                                            <a className="card-title h4">Card title</a>
                                            <a className="card-text text-end float-end">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                               <div className="col col-3 px-1 py-3">
                                    <div className="card border-0" >
                                        <img src={img10} className="card-img-top" alt="..." />
                                        <img className="like" src={likee} alt="" />
                                        <div className="card-body">
                                            <a className="card-title h4">Card title</a>
                                            <a className="card-text text-end float-end">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                               <div className="col col-3 px-1 py-3">
                                    <div className="card border-0" >
                                        <img src={img10} className="card-img-top" alt="..." />
                                        <img className="like" src={likee} alt="" />
                                        <div className="card-body">
                                            <a className="card-title h4">Card title</a>
                                            <a className="card-text text-end float-end">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                               <div className="col col-3 px-1 py-3">
                                    <div className="card border-0" >
                                        <img src={img10} className="card-img-top" alt="..." />
                                        <img className="like" src={likee} alt="" />
                                        <div className="card-body">
                                            <a className="card-title h4">Card title</a>
                                            <a className="card-text text-end float-end">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* carousel-2 end*/}

                    </div>
                    <button className="carousel-control-next btnTT" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <button className="carousel-control-prev btnTT" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                </div>
            </div>
        </Carou >
    )
}

export default Carousel
