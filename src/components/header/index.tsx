import { useState, useEffect } from "react";
import "./header.scss";
import "../modal/scroll.scss";
import { Link } from "react-router-dom";
import CommonModal from "../modal/CommonModal";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import { Eye, Edit, Trash, Search } from "react-feather";
import { relative } from "node:path";
import { table } from "node:console";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFavoriteLocationByUserRequest } from '../../redux/effects/favoriteLocationByUserEffects';
import { getCityRequest } from '../../redux/effects/cityEffects';
import { getWeatherNowRequest } from '../../redux/effects/weatherEffects';
import { IFavoriteLocation } from '../models/favoriteLocation';


const initialProduct: IFavoriteLocation = {
  userId: '',
  cityId: 0,
  cityName: '',
  lable: '',
}

interface IFavoriteLocationByUserprop {
  propsData: any;
  propsDataCity: any;
  propsDataWeather: any;
  getFavoriteLocationByUserRequest: (id: String) => void;
  getCityRequest: (id: Number) => void;
  getWeatherNowRequest: (city?: string) => void;
}


const Header: React.FC<IFavoriteLocationByUserprop> = ({
  propsData,
  propsDataCity,
  propsDataWeather,
  getFavoriteLocationByUserRequest,
  getCityRequest,
  getWeatherNowRequest

}) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showUser, setShowUser] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  const [city, setCity]= useState([]);
  const [weather, setWeather]= useState([]);


  
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
  if (localStorage.getItem("userName")) {
    userLogin = localStorage.getItem("userName");
  } else {
    userLogin = "";
  }
  var listCityWeather = new Array<any>();
  useEffect(() => {
    if (sessionStorage.getItem("fbssls_369670134345835")) {
      var idfb = JSON.parse(sessionStorage.getItem('fbssls_369670134345835') || '{}');
      getFavoriteLocationByUserRequest(idfb.authResponse.userID);
      console.log('GetFC', propsData);

    }

    // console.log('fc', propsData)


    if (localStorage.getItem("userName")) {
      setShowSignIn(false);
      setShowUser(true);
    }
    else {
      setShowSignIn(true);
      setShowUser(false);
    }
  }, []);


  const responseFacebook = (response: any) => {
    // localStorage.setItem("userName", response.name);
    let params: any = {
      token: response.accessToken,
    };
    if (!localStorage.getItem("userName")) {
      axios
        .post(
          `https://vti-aca-april-team1-api.herokuapp.com/auth/facebook`,
          params
        )
        .then((res) => {
          setIsShow(false);
          localStorage.setItem("userName", res.data.data.data.name);
          // setUser(res.data.data.data.name);
          // setShowUser(true);
          setShowSignIn(false);
          alert(
            "xin chào, " +
            res.data.data.data.name +
            "\nChúc bạn xem thông tin thời tiết vui vẻ!"
          );
        })
        .catch((error) => console.log(error));
    }
  };

  const logoutClick = () => {
    localStorage.removeItem("userName");
    setShowSignIn(true);
    setShowUser(false);
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
              <Link
                to="#"
                className="nav-links"
                onClick={() => {
                  // var user1 = { "authResponse": { "accessToken": "EAA8ObXZAIBt", "userID": "1406313506389196", "expiresIn": 5097627, "signedRequest": "sKUBv1vTg3fQ", "graphDomain": "facebook", "data_access_expiration_time": 1628951187 }, "status": "connected", "expiresAt": 1621180587776 };
                  // sessionStorage.setItem('fbssls_369670134345835', JSON.stringify(user1));
                  // var idfb = JSON.parse(sessionStorage.getItem('fbssls_369670134345835') || '{}');
                  // console.log("fbssls_369670134345835: ", idfb.authResponse.userID);
                  // getUserRequest(idfb.authResponse.userID);
                  // console.log('test1:',propsData);
                  if (sessionStorage.getItem("fbssls_369670134345835")) {
                    // var idfb = JSON.parse(sessionStorage.getItem('fbssls_369670134345835') || '{}');
                    // getFavoriteLocationByUserRequest(idfb.authResponse.userID);
                    console.log('test:', propsData.favoriteLocationByUser);
                    // var listCityWeather = new Array<any>();

                    
                 
               
                    console.log('test2', propsDataWeather);
                    console.log('list',listCityWeather);
                    


                    if (propsData.success) {
                      setShowFavorite(true)
                    }

                    // setShowFavorite(true)
                  }
                  else
                    setIsShow(true);
                }
                }
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

            <li
              className="nav-item"
              style={{ display: showSignIn ? "block" : "none" }}
            >
              <Link
                to="#"
                className="nav-links"
                onClick={() => setIsShow(true)}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item d-flex wrap-user-login">
              <div style={{ display: showUser ? "block" : "none" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <i
                      title="UserName"
                      className="fas fa-user"
                      style={{ color: "white" }}
                    ></i>
                    <span id="userName">{userLogin}</span>
                  </div>
                  <div className="dropdown">
                    <Dropdown >
                      <Dropdown.Toggle style={{ backgroundColor: "#657382" }}
                        variant="secondary btn-sm"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu style={{ backgroundColor: "#73a47" }}>
                        <Dropdown.Item href="#" onClick={() => logoutClick()} >Thoát tài khoản</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
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
              Bằng cách nhấp vào <b>Login</b>, bạn đồng ý cho <b>AseanWeather</b>{" "}
              sẽ có quyền truy cập vào tên và email của bạn:
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
          <div className="mt-4 mb-4">
            <span>
              Are you Admin of Asean Weather?
              <Link
                to="#"
                style={{ color: "#fa8231" }}
                onClick={() => setShowModal(true)}
              >
                SignIn
              </Link>
            </span>
          </div>
        </div>
      </CommonModal>

      <CommonModal
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
      </CommonModal>


      <CommonModal
        title="Favorite Location"
        show={showFavorite}
        size="lg"
        setIsShow={() => setShowFavorite(false)}
      >
        <div className="col-12">
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table table-bordered">
              <tbody>
                {/* {
                  propsData.success == false && <div>Loading ... </div>
                } */}

                {
                  propsData.favoriteLocationByUser.length == 0 && (<div>Chưa có địa phương yêu thích</div>)
                }
                {
                  
                  propsData.favoriteLocationByUser.map( (item: IFavoriteLocation)=>{
                    
                   getWeatherNowRequest(item.lable);
                  
                   console.log('tuc', propsDataWeather);
                    
                  //  return (
                  //     <tr key={propsDataWeather.weather.location.name} >
                  //       <td style={{ textAlign: "left" }}>
                  //         {propsDataWeather.weather.location.name},{propsDataWeather.weather.location.country}
                  //       </td>
                  //       <td style={{ textAlign: "left" }}>
                  //         {propsDataWeather.weather.location.localtime}<br />
                  //         <img src={propsDataWeather.weather.current.condition.icon} />
                  //         {propsDataWeather.weather.current.temp_c}°
                  //         </td>
                  //       <td style={{ textAlign: "left" }}>
                  //         Cảm thấy như {propsDataWeather.weather.current.temp_c}°
                  //              </td>
                  //       <td style={{ textAlign: "left" }}>
                  //         Lượng mưa {propsDataWeather.weather.current.precip_mm}
                  //       </td>
                  //       <td style={{ textAlign: "center" }}>
                  //         <a className="btn btn-sm btn-danger" >
                  //           <Trash size={18} className="delete-favorite-location" />
                  //         </a>
                  //       </td>
                  //     </tr>
                  //   );
                  }
                  )
                
                }
              </tbody>

            </table>
          </div>
        </div>

      </CommonModal>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    propsData: state.favoriteLocationByUserReducer,
    propsDataCity: state.cityReducer,
    propsDataWeather: state.weatherReducer
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    getFavoriteLocationByUserRequest,
    getCityRequest,
    getWeatherNowRequest
  }
  , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
