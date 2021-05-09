import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import CommonModal from "../modal/CommonModal";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { isConstructorDeclaration } from "typescript";
import FacebookLogin from "react-facebook-login";

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

  window.addEventListener("resize", showButton);

  const responseFacebook = (response: any) => {
    console.log(response);
    localStorage.setItem("userName",response.name);
    let params: any = {
      token: response.accessToken
    }
    axios.post(`https://vti-aca-april-team1-api.herokuapp.com/auth/facebook`, params)
      .then(res => {
        console.log(res.data.data.data.name);
        localStorage.setItem("userName",res.data.data.data.name);
      })
      .catch(error => console.log(error));
  }

  
return (
  <>
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
              <i className="fas fa-heart heart" style={{ color: "red" }}></i>
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
            <i className="fas fa-user" style={{ color: "white" }}></i>
            <span id="userName">{}</span>
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
        <FacebookLogin
          appId="369670134345835"
          autoLoad={true}
          fields="email,public_profile"
          callback={responseFacebook}
          cssClass="my-facebook-button-class-blue"
          icon="fa-facebook"
        />
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
