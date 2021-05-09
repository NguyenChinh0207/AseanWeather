import axios from 'axios';
import { searchWeatherSuccess,searchWeatherFail, getWeatherHourlyFail, getWeatherHourlySuccess, getWeatherNowFail, getWeatherNowSuccess,getWeatherDailySuccess,getWeatherDailyFail} from '../actions/weatherActions';


export const getWeatherNowRequest = (city="hanoi") => {
    return (dispatch:any) => {
        axios(`http://api.weatherapi.com/v1/forecast.json?q=${city}&key=4f6a241a8e1f444ba34214319211804&aqi=yes&days=1`).then((res) => {
            console.log("res nowrequest",res);
            return dispatch(getWeatherNowSuccess(res.data))
        }).catch(err => dispatch(getWeatherNowFail('Something wrong !')))
    }
}

export const getWeatherHourlyRequest = (city="hanoi") => {
    return (dispatch:any) => {
        axios(`https://api.weatherapi.com/v1/forecast.json?key=4f6a241a8e1f444ba34214319211804&q=${city}&days=1`).then((res) => {
            console.log("res getWeatherHourlyRequest",res);
            return dispatch(getWeatherHourlySuccess(res.data.forecast.forecastday[0].hour))
        }).catch(err => dispatch(getWeatherHourlyFail('Something wrong !')))
    }
}

export const getWeatherDailyRequest = (city="hanoi") => {
    return (dispatch:any) => {
        axios(`https://api.weatherapi.com/v1/forecast.json?key=4f6a241a8e1f444ba34214319211804&q=${city}&days=3`).then((res) => {
            console.log("res getWeatherDailyRequest",res);
            return dispatch(getWeatherDailySuccess(res.data.forecast.forecastday))
        }).catch(err => dispatch(getWeatherDailyFail('Something wrong !')))
    }
}


export const getWeatherSearchRequest = (searchKey:string) => {
    return (dispatch: any) => { 
      
        axios(`https://vti-aca-april-team1-api.herokuapp.com/api/v1/cities?search=${searchKey}`).then((res) => {
            console.log("res",res);
            return dispatch(searchWeatherSuccess(res.data))
        }).catch(err => dispatch(searchWeatherFail('Something wrong !')))

    }
}