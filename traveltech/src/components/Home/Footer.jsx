
import styled from "styled-components";
import main from './Logos/main.png'
import cir from './Logos/cir.png'
import faceboot from './Logos/faceboot.png'
import instagram from './Logos/instagram.png'
import twitter from './Logos/twitter.png'
import poper from './Logos/poper.png'

const Toolbar = styled.header`
padding:20px;
background-color: #F56753;
font-family:Noto Serif;
color: #FFFFFF;
.grid{
    display:grid;
    grid-template-columns:10% 40% 20% 30%;
}
img{
    background-color:#F56753;
}
.img{
    margin-left:10%;
    /* padding:10px */
}
.card-text{
    //styleName: Body 1;
font-family: Noto Serif;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.562rem;
letter-spacing: 0.01em;
text-align: left;

}
.card-ti{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 0px;
    margin-top: 0px;
}
.car{
    margin-top:35px
}
.form-control {
    width:16.93rem;
    color:#FFFFFF;
    height:2.5rem;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    background-color:#F56753;
    font-size:16px;
    margin-top:5px;
    margin-bottom:30px;
    
    
@media all and (max-width:1060px){
    width: 12rem;
   
}
}
.btn{
height:2.5rem ;
width: 7.31rem;
left: 28.81rem;
top: 36rem;
border-radius: 5px;
padding: 0.5rem 1rem 0.5rem 1rem;
background-color:#262626;
margin-left:1rem;
color:white;
@media all and (max-width:1060px){
    width: 5.5rem;
    margin-left:0px
}

}
.gridnew{
    display:grid;
    grid-template-columns:30% 70%;
    font-family: Noto Serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
/* identical to box height, or 156% */

letter-spacing: 0.01em;
}
.d-flex{
    margin-top:40px
}
.logo{
    display:grid;
    grid-template-columns:60% 40%;
    margin-top:20px
}
.logo1{
    display:grid;
    grid-template-columns:25% 25% 25% 25%;
}

`

function Footer() {
    return (
        <>
            <Toolbar>
                <div className="fluid-container" >
                    <div className="img">
                        <img src={cir} className="p-2" alt="..." />
                        <img src={main} className="p-2" alt="..." />
                    </div>

                    <div className="grid ">
                        <div>

                        </div>
                        <div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <p className="card-text">We provide campervan rental in destinations across India through a seamless and personalized online experience.</p>
                                    <p className="card-ti mb-0 car">Subscribe to our newsletter</p>

                                    <p className="card-text">Subscribe to receive occasional updates on top Campervan rental deals, special offers and insightful updates!</p>
                                </div>
                                <form className="d-flex">
                                    <input className="form-control" type="search" placeholder="Enter  your e-mail" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <p className="card-ti">Navigation</p>
                            <div className="gridnew">
                                <div>
                                    <p>Home</p>
                                    <p>About us</p>
                                    <p>Services</p>
                                    <p>Contact us</p>
                                </div>
                                <div>
                                    <p>Privacy Policy</p>
                                    <p>Term & Conditions</p>
                                    <p>Refund & Cancellation policy</p>
                                    <p>FAQs</p>
                                </div>
                            </div>
                            <div className="logo">
                                <div className="logo1">
                                    <div> <img src={faceboot} alt="" /></div>
                                    <div> <img src={instagram} alt="" /></div>
                                    <div> <img src={poper} alt="" /></div>
                                    <div><img src={twitter} alt="" /></div>
                                </div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                </div>
            </Toolbar>
        </>
    )
}

export default Footer
