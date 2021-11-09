// rafce
import styled from 'styled-components'
import React from "react";
import img1 from "./Logos/imgHome.jpg";
import img01 from './Logos/van.jpg'
import img21 from './Logos/Group1.png'
import img22 from './Logos/Group2.png'
import img23 from './Logos/Group3.png'
import img24 from './Logos/Group4.png'
import likee from './Logos/likeee.png'
import img10 from './Logos/UDAIPUR.png'
import img00 from './Logos/MANALI.png'
import photo from './Logos/photo.png'

const Container = styled.div`
/* .top-card{
  background-image: href='';
} */
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* position: absolute; */
width: 1181px;
height: 615px;
left: 129px;
top: 84px;

/* Sunset Orange */

background: #F56753;
mix-blend-mode: normal;
opacity: 0.6;
}
.card{
   border: transparent;
}
/* @media screen and (max-width:780px) */
@media (max-width: 780px) {
  body{font-size: 5px;}
}

@media (max-width: 780px) {
  body{font-size: 7px;}
}


h5{
  font-size: 1.4rem;
}   
.card-text {
  /* position: relative; */
  /* width: 478px; */
  /* height: auto; */
  /* left: 830px; */
  /* top: 1024px; */
  
  /* Body 1 */
  
  font-family: Noto Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  /* or 156% */
  
  letter-spacing: 0.01em;
  
  color: #000000;
  margin-top: none;
} 
.top-card{
  background-color: #F56753;
  position: relative;
}
.centeredT{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centeredT h1{
  width: 777px;
height: 170px;
left: 331px;
top: 187px;

/* Heading 1 */

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 75px;
line-height: 85px;
/* or 113% */

text-align: center;
letter-spacing: -0.015em;

/* supporting/color8 */

color: #FFFFFF;
}
.centeredT p{
  width: 761px;
height: 95px;
left: 339px;
top: 395px;

/* Body 2 */

font-family: Noto Serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
text-align: center;
letter-spacing: 0.005em;

/* supporting/color2 */

color: #262626;

}
.centered button{
  /* border: transparent !important; */
  /* margin */
}

.btnG{
  margin-left: 32%;
  width: 132px;
  height: 48px;
  left: 583px;
  top: 574px;
  
  /* Orange-Yellow */
  
  background: #FFD027;
  border-radius: 40.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  border: transparent;
}
.btny{
  width: 132px;
  height: 48px;
  left: 725px;
  top: 574px;
  
  /* Green */
  
  background: #1DBA85;
  border-radius: 40.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  border: transparent;
}
.top-card img{
  opacity:0.5
}
.btninfo{
  /* position: absolute; */
  width: 258px;
  height: 50px;
  right: 242px;
  top: 1234px;
  /* Green */
  background: #1DBA85;
  border-radius: 24px;
  filter: drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.15));
  margin-left: 25%; 
}
.card-body{
align-content: center;
}
.btnTT{
  border-radius: 40px;
  height: 18%;
  width: 4%;
  margin-top: 8%;
  background: linear-gradient(134.91deg, #FFD569 0%, #1DBA85 100%);
  opacity: 0.9;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.cd2{
   width:  80%;
   margin: auto;
   margin-left: 0% !important;
}
#cd1{
  margin-right: 0%;
}
.leftCTT{
   float: left;
   font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;

}
.rtCTT{
   float: right;
   font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      letter-spacing: -0.01em;
      text-transform: uppercase;
}
.rtCTT a{
  color: #1DBA85;
}
.like{
   /* background-color: black; */
   position: absolute;
   left: 1%;
   top: 2%;
}
.relt{
   position: relative;
   
}
.relt1{
  /* background-image:
  linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
  url('Images/MANALI.png');
  background-size: cover; */
  /* background-image: url('Images/MANALI.png'); */
  /* width: 80%;
  height: 200px;
  
  color: white; */
}
.imgDiv{
  background-color: #F56753;
   width: 100%;
   margin: auto;
  //  border: 5px solid black;
  margin-top: 4%;
  position: relative;
}
.imgDiv img{
  width: 100% !important;
  opacity: 0.5;
}
.centeredtt1{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centeredtt1 h1{
  /* position: absolute; */
width: 737px;
height: 88px;
left: 154px;
top: 1874px;

font-family: Century Gothic;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;

/* supporting/color8 */

color: #FFFFFF;
}

`

const Showinfo = () => {
  return (
    <>
    <Container>
      <div className="container">
        <div class="card top-card">
          <img src={img1} class="card-img-top" alt="..." />
          <div class="centeredT"> 
            <h1>Enjoy the experience of travelling</h1>
            <p>At Aazady India, we have RVs for everyone. RV rental is simple, safe, and secure with Aazady India. Whether you’re a seasoned road warrior looking for a Class A, or just starting out behind the wheel of a Class B or Class C, we have an RV rental for you. Not ready to drive a rig? You can always tow a travel trailer, a fifth-wheel, or even a folding trailer. And if you don’t feel like driving, you can always have an RV delivered to your destination. It’s your adventure, the choice is yours.</p>
            <button className="btnG">Signup</button> <button className="btny">Book Now</button>
  
          </div>
          
        </div>
          <br />
          <br />
        <div className="row">
          <div className="col-sm-3">
            <div className="card cd2" >
              <img
                className="card-img-top cd1"
                src={img21}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card cd2">
              <img
                className="card-img-top cd1"
                src={img22}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card cd2">
              <img
                className="card-img-top cd1"
                src={img23}
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card cd2" id='cd1'>
              <img
                className="card-img-top cd1"
                src={img24}
                alt=""
              />
            </div>
          </div>
        </div>
        <br />
        <br /> 
        {/* info */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
                <img className='card-img-top img-fluid' src={img01} alt="" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                <p className="card-text">
                Aliquip et amet magna ullamco proident sunt Lorem ipsum do consequat id quis. Dolore irure laboris occaecat deserunt aliqua non enim anim incididunt tempor ipsum veniam duis. Sunt adipisicing culpa excepteur eiusmod ad nostrud deserunt tempor voluptate. Tempor pariatur mollit sunt pariatur. Mollit cupidatat nostrud ad et magna elit excepteur dolore qui eu.
                </p>
                    <button className="btn btninfo">BOOK YOUR AAZADY</button>
                </div>
            </div>
          </div>
        </div>
        {/* info end */}
      <br />
      <br />
        {/* carousel start */}
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {/* carousel-1 */}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-3 relt1">
                    <img className="like" src={likee} alt="" />
                      <img src={img00} className="d-block w-100" alt="..."/>
                    <br />
                    <div class="footer">
                      <div className="leftCTT">
                        <span>Nomad</span>
                        <p>Stars</p>
                      </div>
                      <div className="rtCTT">
                        <a href="/" className="card-link">SEE DETAIL</a>
                      </div>
                    </div>
                </div>
                    <div className="col-3">
                    <img className="like" src={likee} alt="" />
                      <img src={img10} className="d-block w-100" alt="..."/>
                    <br />
                    <div class="footer">
                      <div className="leftCTT">
                        <span>Nomad</span>
                        <p>Stars</p>
                      </div>
                      <div className="rtCTT">
                        <a href="/" className="card-link">SEE DETAIL</a>
                      </div>
                    </div>
                    </div>
                    <div className="col-3"><img className="like" src={likee} alt="" /><img src={img00} className="d-block w-100" alt="..."/>
                    <br />
                    <div class="footer">
                      <div className="leftCTT">
                        <span>Nomad</span>
                        <p>Stars</p>
                      </div>
                      <div className="rtCTT">
                        <a href="/" className="card-link">SEE DETAIL</a>
                      </div>
                    </div>
                    </div>
                    <div className="col-3"><img className="like" src={likee} alt="" /><img src={img10} className="d-block w-100" alt="..."/>
                    <br />
                    <div class="footer">
                      <div className="leftCTT">
                        <span>Nomad</span>
                        <p>Stars</p>
                      </div>
                      <div className="rtCTT">
                        <a href="/" className="card-link">SEE DETAIL</a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                {/* carousel-1 end */}
                {/* carousel-2 */}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-3"><img className="like" src={likee} alt="" /><img src={img00} className="d-block w-100" alt="..."/></div>
                    <div className="col-3"><img className="like" src={likee} alt="" /><img src={img10} className="d-block w-100" alt="..."/></div>
                    <div className="col-3"><img className="like" src={likee} alt="" /><img src={img00} className="d-block w-100" alt="..."/></div>
                    <div className="col-3"><img className="like" src={likee} alt="" /><img src={img10} className="d-block w-100" alt="..."/></div>
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
        {/* carousel end */}


        {/* imgbottom */}
            <div className="imgDiv">
              <img src={photo} alt="" className="img-fluid"/>
              <div class="centeredtt1">
                <h1>Travel makes one modest. You see what a
                  tiny place you occupy in the world.</h1>
                </div>
            </div>

        {/* imgbottom end*/}

          
        {/* container end */}
      </div>
      </Container>
    </>
  );
};

export default Showinfo;

