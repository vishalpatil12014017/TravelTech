import React from 'react'
import styled from 'styled-components'
import image from './Logos/3.png'

const SliderBar = styled.header`
.card{
    background-color:#F56753;
}
img{
    opacity:0.6;
}
.carousel-item>iframe{
    margin:auto;
    width:100%;
     height:315px;
     border-radius:25px;
     @media all and (max-width:1480px){
       height:220px
}
@media all and (max-width:1280px){
       height:220px
}
@media all and (max-width:900px){
    height:120px
}
@media all and (max-width:800px){
    height:120px
}
@media all and (max-width:500px){
    height:40px
}
}
h1{
    //styleName: Heading 1;
    padding:15px;
    padding-left:20PX;
    max-width:43%;
font-family: Poppins;
font-size: 75px;
font-style: normal;
font-weight: 700;
letter-spacing: -0.015em;
text-align: left;
@media all and (max-width:1280px){
       font-size:55PX
}
@media all and (max-width:1280px){
       font-size:40PX
}
@media all and (max-width:900px){
    font-size:30PX
}
@media all and (max-width:800px){
    font-size:20PX
}
@media all and (max-width:400px){
    font-size:15PX
}
}
.row{
    margin-top:15%;
    @media all and (max-width:1480px){
        margin-top:12%;
} @media all and (max-width:1380px){
    margin-top:8%;
}
@media all and (max-width:900px){
    margin-top:6%;
}
   
}
.carouselExampleInterval{
    opacity: 1;
}

`
function Slider() {
    return (
        <>
            <SliderBar>
                <div className="fluid-container">
                    <div className="card text-white"  >

                        <img src={image} className="card-img" alt="car" />


                        <div className="card-img-overlay" >
                            <h1 className="card-ti" >checkout our vanlife experience in india</h1>

                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-6">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="4000">
                                                <iframe className="" src="https://www.youtube.com/embed/1LFEHUMbL_Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                            </div>
                                            <div className="carousel-item" data-bs-interval="4000">
                                                <iframe src="https://www.youtube.com/embed/ypcpFtagQYQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                            <div className="carousel-item">
                                                <iframe src="https://www.youtube.com/embed/4jzbJx4p1-g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
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
                    </div>
                </div>
            </SliderBar>

        </>
    )
}

export default Slider
