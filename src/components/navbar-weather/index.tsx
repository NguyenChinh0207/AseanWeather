import  { useState } from "react";
import { NavLink } from "react-router-dom";
import {EmailShareButton, FacebookShareButton,FacebookIcon, EmailIcon} from "react-share"

import "./navbar.scss";

const NavbarWeather = ({ propsData }: any) => {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  console.log('object', propsData)
  }

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
            <button  onClick={handleClick}><i className="fas fa-heart heart" style={{color: click?"#a4b0be":"red"}} title="Thêm vào yêu thích"></i></button>
             <EmailShareButton url={'https://aseanweather.herokuapp.com/now'}  className="shareEmail p-2" title="Chia sẻ qua email" >
                <EmailIcon size={32} round={true} />
             </EmailShareButton>
             <FacebookShareButton url={'https://aseanweather.herokuapp.com/now'} quote={' AseanWeather'} className="share" title="Chia sẻ lên Facebook">
                 <FacebookIcon  size={32} round={true}/>
            </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export default NavbarWeather;
