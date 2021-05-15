import React from "react";
import NavbarWeather from "../components/navbar-weather";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Now from "../components/weather/Now";
import Hourly from "../components/weather/Hourly";
import Daily from "../components/weather/Daily";
import { connect } from 'react-redux';
import { getWeatherNowRequest, getWeatherHourlyRequest, getWeatherDailyRequest } from "../redux/effects/weatherEffects"
import { bindActionCreators } from 'redux';

interface IBoxWeather {
	propsData: any;
	getWeatherNowRequest: () => void;
  }
const BoxWeather: React.FC<IBoxWeather> = ({ propsData, getWeatherNowRequest}) => {

	if (!propsData.success) {
	  return (
		<div className="loading" >Loading ... </div>
	  );
	}
  return (
    <div className="main-container">
      <div  className="main-container-innner-wrap">
      <Router>
        <NavbarWeather propsData={propsData.weather}/>
        <Switch>
          <Route path="/now">
            <Now propsData={propsData.weather} />
          </Route>
		      <Route path="/search/now">
            <Now propsData={propsData.weather} />
          </Route>
          <Route path="/hourly" component={Hourly} />
          <Route path="/daily" component={Daily} />
        </Switch>
      </Router>
      </div>
    </div>
  );
};

const mapStateToProps = (state:any) => {
	return {
	  propsData: state.weatherReducer
	}
  }
  
  const mapDispatchToProps = (dispatch:any) => bindActionCreators(
	{
	  getWeatherNowRequest,
	  getWeatherHourlyRequest,
	  getWeatherDailyRequest,
	 
	}
	, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(BoxWeather);
