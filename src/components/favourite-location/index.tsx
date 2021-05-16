import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Location.scss";
import {
  getWeatherNowRequest,
  getWeatherHourlyRequest,
  getWeatherDailyRequest,
} from "../../redux/effects/weatherEffects";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

interface IFavourite {
  propsData: any;
  getWeatherNowRequest: (city:any) => void;
}

const FavouriteLocation: React.FC<IFavourite> = ({
  propsData,
  getWeatherNowRequest,
}) => {

  // useEffect(() => {
  //   getWeatherNowRequest("Ha noi");
  // }, []);

  if (!propsData.success) {
    return <div>Loading ... </div>;
  }
  return (
    <div className="d-flex favourite-wrap">
      {/* <div className="favourite-item">
        <Link to="/now/Ha Noi">
          <div className="recent-location-item featured-location">
            <span className="recent-location-name">
              {propsData.weather.location.name},{" "}
              {propsData.weather.location.country}
            </span>
            <img
              className="weather-icon recent-location-icon"
              width="20px"
              height="20px"
              data-eager=""
              src={propsData.weather.current.condition.icon}
            />
            <span className="recent-location-temp">
              {propsData.weather.current.temp_c}° C
            </span>
          </div>
        </Link>
      </div>
      <div className="favourite-item">
        <Link to="/now/Ha Noi">
          <div className="recent-location-item featured-location">
            <span className="recent-location-name">
              {propsData.weather.location.name},{" "}
              {propsData.weather.location.country}
            </span>
            <img
              className="weather-icon recent-location-icon"
              width="20px"
              height="20px"
              data-eager=""
              src={propsData.weather.current.condition.icon}
            />
            <span className="recent-location-temp">
              {propsData.weather.current.temp_c}° C
            </span>
          </div>
        </Link>
      </div> */}
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
      getWeatherNowRequest,
      getWeatherHourlyRequest,
      getWeatherDailyRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteLocation);
