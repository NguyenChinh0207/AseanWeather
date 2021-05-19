import React, { useState, useEffect } from "react";
import "./searchbg.scss";
import "../../App.scss";
import {
  getWeatherSearchRequest,
  getWeatherNowRequest,
} from "../../redux/effects/weatherEffects";
import FavouriteLocation from "../favourite-location";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
// import { isBuffer } from "node:util";
import {useCookies}  from "react-cookie"
import { Agent } from "node:http";

interface ISearch {
  propsData: any;
  getWeatherSearchRequest: (searchKey: string) => void;
  getWeatherNowRequest: (city?: string) => void;
}

const SearchComponent: React.FC<ISearch> = ({
  getWeatherNowRequest,
}) => {
  //Khai báo state để sử dụng
  const [cityMatch, setCityMatch] = useState([]);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [listCities, setlistCities] = useState([]);
  const [countVisitor, setCountVisitor]=useState(0);
  const [cookies, setCookie] = useCookies(['ipAddress']);

  //Config api tìm kiếm
  const url = "https://api-weather-asean.herokuapp.com/api/v1/cities";
  const config = {
    url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  }

  const getTotalView = ()=>{
    // if(!localStorage.getItem("ipAddress"))
    // {
    //   axios
    //     .get(
    //       `https://api-weather-asean.herokuapp.com/api/v1/ip`
    //     ).then((res)=>{
    //       localStorage.setItem("ipAddress",res.data.data.ip)
    //       // console.log(res.data.data.ip);
    //       // console.log(res.data.data.count);
      //     localStorage.setItem("count",res.data.data.count);
      //   })
      // }
        setCookie('ipAddress', "1" ,{maxAge : 9000});
        if(!cookies.ipAddress)
        {
          axios.get(
              `https://api-weather-asean.herokuapp.com/api/v1/ip`
            ).then((res)=>{
              // localStorage.setItem("ipAddress",res.data.data.ip)
              // console.log(res.data.data.ip);
              // console.log(res.data.data.count);
              localStorage.setItem("count",res.data.data.count);
              setCookie('ipAddress', res.data.data.ip ,{maxAge : 900});
              
            })
          }
  }
  //Load api tìm kiếm địa phương
  useEffect(() => {
    const loadCities = async () => {
      const response = await axios(config);
      setlistCities(response.data);
    };
    getTotalView(); 
    loadCities();
  }, [])

  //Match input with list city
  const handleSearch = (text: string) => {
    if (!text) {
      setCityMatch([]);
      setShow(false);
    } else {
      setShow(true);
      let matches = listCities.filter((city: any) => {
        const regex = new RegExp(`${text}`, "gi");
        return city.name.match(regex);
      });
      setCityMatch(matches);
    }
    setText(text);
  };
  
  //Click item filter
  const onCityHandler = (item: any) => {
    setText(item.name);
    getWeatherNowRequest(item.lable);
    setCityMatch([]);
  };

  //click button search


  return (
    <div className="hero-container">

      {/* Giao diện của trang search */}
      <video src="/assets/videos/video-1.mp4" autoPlay loop muted />
      <h3>Asean Weather</h3>
      <h5>Today , What is the weather like in your place ? </h5>

      {/* Thanh search */}
      <div className="hero-btns">
        <div className="d-flex ">
          <input
            type="text"
            className="form-control input_search"
            placeholder="&#xF002; Search Location..."
            onChange={(e) => handleSearch(e.target.value)}
            value={text}
            onBlur={() => {
              setTimeout(() => {
                setCityMatch([]);
                setShow(false);
              }, 200);
            }}
          />
          <Link to={`/now/${text}`} >
            <button className="btn-search" style={{ backgroundColor: show ? "white" : "#1e90ff" }}>
              <i className="fas fa-search icon-search" style={{ color: show ? "#747d8c" : "#dcdde1" }}></i>
            </button>
          </Link>
        </div>
        <div
          className="suggest-wrap"
          style={{ display: show ? "block" : "none" }}
        >
          {
            cityMatch.length == 0 && (<div className="suggest">Không tìm thấy kết quả nào .</div>)
          }
          {cityMatch &&
            cityMatch.map((item: any, index: any) => (
              <Link to={`/now/${item.lable}`} key={index}>
                <div
                  className="suggest"
                  onClick={() => onCityHandler(item)}
                >
                  <i className="fas fa-search search-item-icon"></i>
                  {item.name}
                </div>
              </Link>
            ))}
        </div>
        <br />

        {/* Hiển thị 3 địa phương đầu trong danh sách yêu thích */}
        <FavouriteLocation />
      </div>

      {/* view số người xem trang web từ trước tới giờ */}
      <div className="view-fixed-panel">
        <i className="fas fa-eye"></i>
        <span>{localStorage.getItem("count")}</span>              
      </div>
    </div>

  );
};

const mapStateToProps = (state: any) => {
  return {
    propsData: state.weatherReducer,
  };
};
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getWeatherSearchRequest,
      getWeatherNowRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
