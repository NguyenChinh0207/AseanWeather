import axios from 'axios';
import { getWeatherHourlyFail, getWeatherHourlySuccess, getWeatherNowFail, getWeatherNowSuccess,getWeatherDailySuccess,getWeatherDailyFail } from '../actions/weatherActions';


export const getWeatherNowRequest = () => {
    return (dispatch:any) => {
        axios("http://api.weatherapi.com/v1/current.json?q=hanoi&key=4f6a241a8e1f444ba34214319211804&aqi=no").then((res) => {
            console.log("res",res);
            return dispatch(getWeatherNowSuccess(res.data))
        }).catch(err => dispatch(getWeatherNowFail('Something wrong !')))
    }
}

export const getWeatherHourlyRequest = () => {
    return (dispatch:any) => {
        axios("https://api.weatherapi.com/v1/forecast.json?key=4f6a241a8e1f444ba34214319211804&q=Hanoi&days=1").then((res) => {
            console.log("res",res);
            return dispatch(getWeatherHourlySuccess(res.data))
        }).catch(err => dispatch(getWeatherHourlyFail('Something wrong !')))
    }
}

export const getWeatherDailyRequest = () => {
    return (dispatch:any) => {
        axios("https://api.weatherapi.com/v1/forecast.json?key=4f6a241a8e1f444ba34214319211804&q=Hanoi&days=3").then((res) => {
            console.log("res",res);
            return dispatch(getWeatherDailySuccess(res.data))
        }).catch(err => dispatch(getWeatherDailyFail('Something wrong !')))
    }
}