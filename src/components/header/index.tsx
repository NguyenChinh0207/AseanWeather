import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import CommonModal from "../modal/CommonModal";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { isConstructorDeclaration } from "typescript";
import FacebookLogin from "react-facebook-login";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showUser, setShowUser] = useState(false);
  // const [user, setUser] = useState("");

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

  let userLogin;
  if(localStorage.getItem("userName")){
    userLogin= localStorage.getItem("userName");
  }
  else{
    userLogin="";
  }

  useEffect(() => {
    if(localStorage.getItem("userName")){
      setShowSignIn(false);
      setShowUser(true);
    }
    
});

  const responseFacebook = (response: any) => {
    // localStorage.setItem("userName", response.name);
    let params: any = {
      token: response.accessToken,
    };
    if(!localStorage.getItem("userName")){
      axios
        .post(
          `https://vti-aca-april-team1-api.herokuapp.com/auth/facebook`,
          params
        )
        .then((res) => {
          localStorage.setItem("userName", res.data.data.data.name);
          // setUser(res.data.data.data.name);
          // setShowUser(true);
          setShowSignIn(false);
          setIsShow(false);
          alert(
            "xin chào, " + res.data.data.data.name + "\nChúc bạn xem thông tin thời tiết vui vẻ!"
          );
        })
        .catch((error) => console.log(error));
    }
    
  };

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
              <Link
                to="/favouritees"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-heart heart" style={{ color: "red" }}></i>
                Favourite
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-search"></i>
              </Link>
            </li>

            <li className="nav-item" style={{display:showSignIn?"block":"none"}}>
              <Link
                to="#"
                className="nav-links"
                onClick={() => setIsShow(true)}               
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item d-flex wrap-user-login" >
                <div style={{display:showUser?"block":"none"}}>
                <i title="UserName" className="fas fa-user" style={{ color: "white" }}></i>
                <span id="userName">{userLogin}</span>
                </div>
            </li>
          </ul>
        </div>
      </nav>
      <CommonModal
        title="Modal Sign In"
        size="md"
        show={isShow}
        setIsShow={() => setIsShow(false)}
      >
        <div className="login-fb-wrap">
          {/* <a href="https://vti-aca-april-team1-api.herokuapp.com/auth/facebook"> */}
          <div className="mt-4 mb-4">
            <span>
              Bằng cách nhấp vào <b>Login</b>, bạn đồng ý cho <b>Facebook</b> chia sẻ thông tin đăng nhập với chúng tôi:         
            </span>
          </div>
          <FacebookLogin
            appId="369670134345835"
            autoLoad={false}
            fields="email,public_profile"
            callback={responseFacebook}
            cssClass="my-facebook-button-class-blue"
            icon="fa-facebook"
          
          />
        </div>
      </CommonModal>

      {/* <CommonModal
        title="SignIn Admin"
        show={showModal}
        size="lg"
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
      </CommonModal> */}
    </>
  );
};

export default Header;
