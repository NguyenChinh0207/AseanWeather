import React, { useState, useEffect } from "react";
import "./searchbg.scss";
import "../../App.scss";
import apiWeather from '../../data/api-weather/apiWeather';
import FavouriteLocation from '../favourite-location';

const SearchComponent = () => {
  const [query, setquery] = useState("");
  const [weather, setweather] = useState({});
  const [text,setText]=useState('');
    const search = async (e:any) => {
      if (e.key === "Enter") {
        const data = await apiWeather(query);
        setweather(data);
        setquery("");
      }
    };
   
  return (
    <div className="hero-container">   
        <video src="/assets/videos/video-1.mp4" autoPlay loop muted />     
        <h3 >Asean Weather</h3>
        <h5>Today , What is the weather like in your place ? </h5>
        <div className="hero-btns">
          <input
          type="text"
          className="form-control input_search"
          placeholder="Search Location..."        
          value={query}
          onChange={(e) => setquery(e.target.value)}
          onKeyPress={search}
        />
        <br/>
        <FavouriteLocation/>
      
        </div>
      </div>
   
  );
};

export default SearchComponent;
