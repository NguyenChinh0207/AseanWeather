import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import CommonModal from "../modal/CommonModal";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import { isConstructorDeclaration } from "typescript";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  var userLogin;
  useEffect(() => {
    showButton();
    axios.get(`https://vti-aca-april-team1-api.herokuapp.com/login/user`)
    .then(res => {      
      localStorage.setItem("userLogin", JSON.stringify(res.data));
      setShowUser(true);
        })
    .catch(error => console.log(error));
  }, []);


  if (localStorage.getItem("userLogin")) {
    var obj = JSON.parse(localStorage.getItem("userLogin") || '{}'); 
     console.log("user",obj)
     
  } 
 
  window.addEventListener("resize", showButton);

  const onRedirectLogin=()=>{ 
    axios.get(`https://vti-aca-april-team1-api.herokuapp.com/auth/facebook`)
    .then(res => {
      console.log("resulr: ",res.data)
        window.location.href=`${res.data}`;     
        })
    .catch(error => console.log(error));

  }

  return (
    < >
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/assets/images/logo2.png" alt="" title="logo" />
            <div>
              <span>Asean</span>
              <span>Weather</span>
            </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <Link to="/favouritees" className="nav-links" onClick={closeMobileMenu}>
                <i className="fas fa-heart heart" style={{color:"red"}}></i>
                Favourite
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
                <i className="fas fa-search"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className="nav-links"
                onClick={() => setIsShow(true)}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item d-flex wrap-user-login"  >
              <i className="fas fa-user" style={{color:"white"}}></i>
              <span style={{display:showUser?"none":"block"}}>{obj.name}</span>
            </li>
          </ul>
        </div>
      </nav>
      <CommonModal
        title="Modal Sign In"
        show={isShow}
        setIsShow={() => setIsShow(false)}
      >
        <div className="login-fb-wrap">
          {/* <a href="https://vti-aca-april-team1-api.herokuapp.com/auth/facebook"> */}
          <Button variant="primary" type="submit" className="mb-2 mt-2" onClick={onRedirectLogin}>
            <i className="fa fa-facebook fa-fw"></i>
            Login with Facebook
          </Button>
          
          <div className="mt-4 mb-2">
            <span>
              Are you Admin of Asean Weather?
              <Link to="#" onClick={() => setShowModal(true)}>
                SignIn
              </Link>
            </span>
          </div>
        </div>
      </CommonModal>

      <CommonModal
        title="SignIn Admin"
        show={showModal}
        setIsShow={() => setShowModal(false)}
      >
        <div className="row">
          <form action="">
            <div className="form-group ">
              <input
                type="email"
                className="form-control input-item  mb-4 mt-2"
                placeholder="Email..."
              />
            </div>

            <div className="form-group ">
              <input
                type="password"
                className="form-control input-item mt-4 mb-4"
                placeholder="Password..."
              />
            </div>

            <div className="form-group ">
              <button
                type="submit"
                className="btn btn-primary btn-block btn_submit mb-4 mt-4 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </CommonModal>
     
    </>
  );
};

export default Header;
