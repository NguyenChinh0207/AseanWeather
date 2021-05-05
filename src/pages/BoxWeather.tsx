import React, { useState, useEffect } from "react";
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

	useEffect(() => {
		getWeatherNowRequest();
	  }, [])
	
	  console.log("propsData", propsData);
	
	  if (!propsData.success) {
		return (
		  <div>Lading ... </div>
		);
	  }
  return (
    <>
      <Router>
        <NavbarWeather />
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
    </>
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
