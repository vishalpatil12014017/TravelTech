import { useState } from "react";
import "./signup.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

function Signup() {
   const responseGoogle = (response) => {
     console.log(response);
    };
    
    const responseFacebook = (response) => {
      console.log(response);
    };
  return (
    <div className="mainDiv">
      <div className="join">JOIN US</div>
      <div className="exp">Explore the freedom</div>
      <div className="ip">
        <span>+91</span>
        <input className="phone" placeholder="Enter your phone number "  />
      </div>
      <div className="line"></div>
      <div className="ot">
        <div className="otp">GET OTP</div>
      </div>
      <div className="or">
        <div>or</div>
      </div>
      <div className="text">
        <GoogleLogin
          clientId="154743955779-puie7227q9rv09vk3ncbuorg2uq9rteu.apps.googleusercontent.com"
          buttonText="Sign up with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div className="textcp">
        <FacebookLogin
          appId="481770656419917"
          autoLoad={true}
          fields="name,email,picture"
          /*onClick={componentClicked}*/
          callback={responseFacebook}
        />
      </div>
      <div className="delete">
        <button className="deleteImg" />
      </div>
    </div>
  );
};

export { Signup };
