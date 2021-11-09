// rafce
import React, { useState } from "react";
import logo from "./Logos/Logo.svg";
// import help from "./Images/customer.svg";
import styled from 'styled-components'


const Nav = styled.nav`
display: flex;
    justify-content: space-around;
    align-items: center;
    height: 84px;
    background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

.logo{
  margin-left: 0;
}
.nav-links{
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 75%;
}
.nav-links li{
  padding: 8px 16px;
  top: 40px;
}
.login{
  padding: 8px 16px;
  /* position: absolute; */
  width: 84px;
  height: 40px;
  right: 83px;
  top: 18px;
  
  background: #D63C0C;
  border-radius: 5px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  
  color: #FFFFFF;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  text-decoration: none;
  left: 16px;
  top: 8px;
  position: static;
  }
  .textTT{
    
    
    /* Button */
    
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    
    letter-spacing: -0.01em;
    text-transform: uppercase;
    
    color: #2F2F2F;
    
    
    /* Inside Auto Layout */
    
    /* flex: none; */
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
    text-decoration: none;
    }
    .custo{
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      
      }
      .mobile-menu-icon {
        display: none;
    
    }
    @media screen and (max-width:780px){
        .logo{
            display: flex;
            position: absolute;
            top: 15px;
            left: 35px;
        }
        /* .mobile-menu-icon {
            background-color: gray;
        
        } */
         .nav-links{
            display: none;
        }
        .nav-links-mobile{
            
            position: absolute;
            display: block;
            background-color: #D63C0C;
            left: 0;
            top: 75px;
            transition: all 0.5s ease-out;
            width: 100%;
            text-align: center;
            letter-spacing: normal;
            /* align-items: center; */
            
        }
        .textTT{
            margin-top: 2%;
            color: #2F2F2F;
            text-align: center;
            padding: 32px;
            width: 100%;
            transition: all 0.5s ease;
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.01em;
            text-transform: uppercase;
    
            color: #FFFFFF;
        }
        .login{
            border: none;
            margin-left: 43.9%;
        }
        .mobile-menu-icon{
            display: block;
            position:absolute;
            font-size: 30px;
            color: #2F2F2F;
            background-color: #D63C0C;
            border: none;
            outline: none;
            top: 15px;
            right: 25px;
        } 
    } 
`

const Navbar = () => {
  const [isMob, setIsMob] = useState(false);
  return (
    <Nav>
      <img className="logo" alt="" src={logo} />
      <ul
        className={isMob ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMob(true)}
      >
        <li>
          <a className="textTT" href="/">
            HOME
          </a>
        </li>

        <li>
          <a className="textTT" href="/">
            ABOUT US
          </a>
        </li>

        <li>
          <a className="textTT" href="/">
            COMMUNITY
          </a>
        </li>

        <li>
          <a className="textTT" href="/">
            BLOG
          </a>
        </li>

        <li>
          <a className="login" href="/">
            LOG IN
          </a>
        </li>
        {/* <li>
                <img className="custo" alt="" src={help}/>
                </li> */}
        <button className="mobile-menu-icon" onClick={() => setIsMob(!isMob)}>
          {isMob ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </ul>
    </Nav>
  );
};

export default Navbar;
