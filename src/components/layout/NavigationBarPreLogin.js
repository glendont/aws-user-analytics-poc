import React, { Fragment, useState } from "react";
import LanguageIcon from '@material-ui/icons/Language';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import {SiFloatplane} from "react-icons/si"
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const onClick = () => {

  const nav = document.querySelector(".navbar-logo");
  const navLinks = document.querySelectorAll(".navbar-logo li");
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
        0.2}s`;
    }
  });

  // Burg Animation
  const burger = document.querySelector(".burger");
  burger.classList.toggle("toggle");

  if (nav.classList.value.includes("nav-active")) {
    const lang = document.querySelector(".nav-links-lang");
    const loyalty = document.querySelector(".nav-links-loyalty");
    const manage = document.querySelector(".nav-links-manage");
    const login = document.querySelector(".nav-links-login");
    const join = document.querySelector(".nav-links-join");

    lang.addEventListener("click", () => {
      onClick();
    });

    loyalty.addEventListener("click", () => {
      onClick();
    });

    manage.addEventListener("click", () => {
      onClick();
    });

    login.addEventListener("click", () => {
      onClick();
    });

    join.addEventListener("click", () => {
      onClick();
    });
    
  }
};



const NavigationBarPreLogin = (props) => {
  const [click, setClick] = useState(false);
  const handleClick=()=> setClick(!click);

  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li className="nav-links-homepage">
          <a to="/home" activeClassName="currentlyOn" style={{letterSpacing:"2px",fontSize:"20px", fontWeight:"bolder", textShadow:"0px 0px, 0px 0px, 10.5x 0px", opacity:"0.6"}}>
            <SiFloatplane className="nav-icon" style={{marginRight:"5px", marginBottom:"4px"}} /> 
            TravelBuddy 
          </a>{" "}
        </li>

      </ul>

      <div className="burger" onClick={onClick}>
        <div className="line1"> </div>
        <div className="line2"> </div>
        <div className="line3"> </div>
      </div>

      <Fragment>

      <ul className="navbar-logo">
      <li className="nav-links-lang">
        <LanguageIcon fontSize="small" style={{marginBottom:'2px', opacity:'0.8', marginRight:"1px"}} /> {'  '}
          <a to="/home">
            English (UK)
          </a>{" "}
        </li>
      <li className="nav-links-loyalty" >
          <a to="/home">
            Loyalty
          </a>{" "}
        </li>
        <li className="nav-links-manage" >
          <a to="/home">Manage</a>
        </li>
        <Divider orientation="vertical" className="navbar-divider" flexItem style={{height:"24px"}} /> 

<li className="nav-links-join" >
   
   <Button variant="light" size="sm" className="join-button"> <p className="join-button-text"> Join Free  </p></Button></li>

      </ul>

      </Fragment>

    </nav>
  )
}


  export default NavigationBarPreLogin;