import React, { useState,useEffect } from "react";
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

interface ISearch {
  propsData: any;
  getWeatherSearchRequest: (searchKey: string) => void;
  getWeatherNowRequest: (city?: string) => void;
}

const SearchComponent: React.FC<ISearch> = ({
  propsData,
  getWeatherSearchRequest,
  getWeatherNowRequest,
}) => {
  const [cityMatch, setCityMatch] = useState([]);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [listCities, setlistCities] = useState([]);
  const url = "https://vti-aca-april-team1-api.herokuapp.com/api/v1/cities";
  const config = {
    url,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type'
      }
  }
  useEffect(() => {
    const loadCities = async () => {
      const response = await axios(config);
      setlistCities(response.data);
      // console.log(response)
    };
    loadCities();
    
},[])

  const handleSearch = (text: string) => {
    // e.preventDefault()
    // if (!text) {
    //   setCityMatch([]);
    //   setShow(false);
    // } else {
    //   setShow(true);
    //   getWeatherSearchRequest(text.trim());
    //   setCityMatch(propsData.location);
    // }
    // setText(text);
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
  const onCityHandler = (item: any) => {
    setText(item.name);
    getWeatherNowRequest(item.lable);
    setCityMatch([]);
  };
  const searchClick=()=>{
    console.log("text",text);
    getWeatherNowRequest(text);
  };

  return (
    <div className="hero-container">
      <video src="/assets/videos/video-1.mp4" autoPlay loop muted />
      <h3>Asean Weather</h3>
      <h5>Today , What is the weather like in your place ? </h5>
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
           <Link to="/now">
            <button className="btn-search" onClick={searchClick}>
              <i className="fas fa-search icon-search"></i>
            </button> 
           </Link>
          
        </div>
        <br />

        {/* <FavouriteLocation /> */}

        <div
          className="suggest-wrap"
          style={{ display: show ? "block" : "none" }}
        >
          {/* {listCities.map((item: any, index: any) => {
            return (
              <Link to="/now" key={index}>
                <div className="suggest" onClick={() => onCityHandler(item)}>
                  {item.name}, {item.country.name}
                </div>
              </Link>
            );
          })} */}
          {cityMatch &&
            cityMatch.map((item: any, index: any) => (
              <Link to="/now" key={index}>
              <div
                className="suggest"
                onClick={() => onCityHandler(item)}
              >
                {item.name}
              </div>
              </Link>
            ))}
        </div>
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
