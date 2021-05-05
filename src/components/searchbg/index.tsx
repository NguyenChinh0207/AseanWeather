import React, { useState, useEffect } from "react";
import axios from "axios";
import "./searchbg.scss";
import "../../App.scss";
import { getWeatherSearchRequest } from "../../redux/effects/weatherEffects";
import FavouriteLocation from "../favourite-location";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface ISearch {
  propsData: any;
  getWeatherSearchRequest: (searchKey: string) => void;
}

const SearchComponent: React.FC<ISearch> = ({
  propsData,
  getWeatherSearchRequest,
}) => {
  const [cityMatch, setCityMatch] = useState([]);
  const [text, setText] = useState("");
  const [show,setShow]=useState(false);

  const handleSearch = (text: string) => {
    // e.preventDefault()
    if (!text) {
      setCityMatch([]);
      setShow(false);
    } else {
      setShow(true);
      getWeatherSearchRequest(text.trim());
      setCityMatch(propsData.location);
    }
    setText(text);
  };
  const onCityHandler = (item: any) => {
    setText(item.name);
    console.log("item",item)
    setCityMatch([]);
  };

  return (
    <div className="hero-container">
      <video src="/assets/videos/video-1.mp4" autoPlay loop muted />
      <h3>Asean Weather</h3>
      <h5>Today , What is the weather like in your place ? </h5>
      <div className="hero-btns">
        <input
          type="text"
          className="form-control input_search"
          placeholder="&#xF002; Search Location..."
          onChange={(e) => handleSearch(e.target.value)}
          value={text}
          
          onBlur={() => {
            setTimeout(() => {
              setCityMatch([]);
              setShow(false)
            }, 200);
          }}
        />

        <br />

        <FavouriteLocation />
        
        <div className="suggest-wrap" style={{display: show ? 'block' : 'none'}}>
          {propsData.location.map((item: any, index: any) => {
            return (
              <Link to="/search/now" key={index}>
                <div                
                  className="suggest"
                  onClick={() => onCityHandler(item)}
                >
                  {item.name}
                </div>
              </Link>
            );
          })}
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
