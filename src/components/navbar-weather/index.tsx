import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const NavbarWeather = ({ propsData }: any) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="container">
      <div id="btn-wrap">
        <NavLink to="/now" activeClassName="active">
          <button type="button" id="btn" className="btn-navbar ">
            NOW
          </button>
        </NavLink>
        <NavLink to="/hourly" activeClassName="active">
          <button type="button" id="btn" className="btn-navbar">
            HOURLY
          </button>
        </NavLink>
        <NavLink to="/daily" activeClassName="active">
          <button type="button" id="btn" className="btn-navbar">
            DAILY
          </button>
        </NavLink>
      </div>
      <div className="location-wrap d-flex">
        <div className="location-title-wrap">          
            <span className="location-title">{propsData.location.name}, {propsData.location.country}</span>
        </div>
        <div className="favourite-wrap">
            <button  onClick={handleClick}><i className="fas fa-heart heart" style={{color: click?"red":"#a4b0be"}} title="Thêm vào yêu thích"></i></button>
            <button><i className="fab fa-facebook facebook" title="Chia sẻ lên Facebook"></i></button>
        </div>
      </div>
    </div>
  );
};

export default NavbarWeather;
