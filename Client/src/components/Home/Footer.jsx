import styled from "styled-components";
import main from './Logos/main.png'
import cir from './Logos/cir.png'
import faceboot from './Logos/faceboot.png'
import instagram from './Logos/instagram.png'
import twitter from './Logos/twitter.png'
import poper from './Logos/poper.png'

const Toolbar = styled.header`
background-color: #F56753;
.card{
    background-color: #F56753;
    border:none   
}
input{
    background-color: #F56753; 
}
@media all and (max-width:1000px){
        .none{
          display:none
        }
}
@media all and (max-width:1200px){
        .cen{
          display:none
        }
}

`

function Footer() {
    return (
        <>
            <Toolbar>
                <div className="fluid-container p-4 " >
                    <div className="row">
                        <div className="col col-1 none remov"></div>
                        <div className="col col-4 p-3 pb-0">
                            <img className="figure-img img-fluid rounded" src={cir} className="p-2" alt="" />
                            <img className="figure-img img-fluid rounded" src={main} className="p-2" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-1 none">

                        </div>
                        <div className="col col-5 p-3 col-sm col-12">
                            <div className="card" >
                                <div className="card-body pt-0" >
                                    <p className="card-text text-white mb-4 pb-4">We provide campervan rental in destinations across India through a seamless and personalized online experience.</p>
                                    <h5 className="card-title mt-4 mb-3 mt-4">Subscribe to our newsletter</h5>
                                    <p className="card-text text-white mb-5">Subscribe to receive occasional updates on top Campervan rental deals, special offers and insightful updates!</p>
                                    <form className="d-flex mt-5"style={{maxWidth:"500px"}}>
                                        <input className="form-control  border border-white" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn bg-dark text-white ml-2" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col col-2 cen"></div>
                        <div className="col col-4  none">
                            <h5 className="card-title">Navigation</h5>
                            <div className="row mt-0">
                                <div className="col">
                                    <p className="card-text text-white">Home</p>
                                    <p className="card-text text-white">About us</p>
                                    <p className="card-text text-white">Services</p>
                                    <p className="card-text text-white">Contact us</p>
                                </div>
                                <div className="col">
                                    <p className="card-text text-white">Privacy Policy</p>
                                    <p className="card-text text-white">Term & Conditions</p>
                                    <p className="card-text text-white">Refund & Cancellation policy</p>
                                    <p className="card-text text-white">FAQs</p>
                                </div>
                            </div>
                            <div className="row mt-4 ">
                                <div className="col col-2 col-12  g-2 col-sm-2 col-xxl-2"> <img src={faceboot} alt="" /></div>
                                <div className="col col-2 col-12  g-2 col-sm-2 col-xxl-2"> <img src={instagram} alt="" /></div>
                                <div className="col col-2 col-12  g-2 col-sm-2 col-xxl-2"> <img src={poper} alt="" /></div>
                                <div className="col col-2 col-12  g-2 col-sm-2 col-xxl-2"><img src={twitter} alt="" /></div>
                                <div className="col col-2 col-12  g-2 col-sm-2 col-xxl-2"></div>
                                <div className="col col-2 col-12  g-2 col-sm-2 col-xxl-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </>
    )
}

export default Footer
