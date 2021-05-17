import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const LoginAdmin = () => {
	
	return (		
		<>
			 <section className="login-block">
                <div className="container-admin container">
                    <div className="row">
                    <div className="col-md-4 login-sec">
                        <h2 className="text-center">Login Now</h2>
                        <div className="login-form-admin">
                            <div className="form-group-admin ">
                                <label htmlFor="exampleInputEmail1" id="">Username:</label>
                                <input id="userName" type="text"
                                    className="form-control-admin" placeholder="email..."/>
                            </div>
                            <div className="form-group-admin">
                                <label htmlFor="exampleInputPassword1" id="">Password:</label>
                                <input id="passWord" type="password"
                                    className="form-control-admin" placeholder="password..."/>                                
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox"
                                        className="form-check-input"/>
                                    <small>Remember Me</small>
                                </label>
                                <Link to="#">
                                <button
                                     type="submit"  className="btn btn-login-admin float-right" >Submit
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="copy-text">Created with <i className="fa
                                fa-heart"></i> by <a href="#">AseanWeather</a>
                        </div>
                    </div>
                        <div className="col-md-8 banner-sec">
                        <div id="carouselExampleIndicators" className="carousel
                            slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators"
                                    data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators"
                                    data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators"
                                    data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid"
                                        src="/assets/images/banner-login.jpg"
                                        alt="First slide"/>
                                    <div className="carousel-caption d-none
                                        d-md-block">
                                        <div className="banner-text">
                                            <h2>Login Admin</h2>
                                            <p>Xin chào, Chào mừng bạn trở lại!</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </section>

		</>	
	);
}

export default LoginAdmin;