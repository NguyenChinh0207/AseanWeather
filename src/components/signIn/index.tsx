import React, { useState, useEffect } from "react";
import "./signin.scss";
import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <>
      <div className="bg_login"></div>
      <div className="bg_text">
        <p className="title_login">Sign In</p>
        <button type="button" className="btn btn-primary btn_login">
        <i className="fa fa-facebook fa-fw"></i>
          Login with Facebook
        </button>
        <div className="mb-4 mt-4">
          <span className="text">
            Are you Admin of Asean Weather? <Link className="red" to="/sign-in-admin">Login</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
