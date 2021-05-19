import axios from 'axios';
import { searchWeatherSuccess,searchWeatherFail, getWeatherHourlyFail, getWeatherHourlySuccess, getWeatherNowFail, getWeatherNowSuccess,getWeatherDailySuccess,getWeatherDailyFail, getWeatherFavoriteSuccess, getWeatherFavoriteFail} from '../actions/weatherActions';


export const getWeatherNowRequest = (city:any) => {
    return (dispatch:any) => {
        axios(`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=4f6a241a8e1f444ba34214319211804&aqi=yes&days=1&lang=vi`).then((res) => {
            return dispatch(getWeatherNowSuccess(res.data))
        }).catch(err => dispatch(getWeatherNowFail('Something wrong !')))
    }
}

export const getWeatherHourlyRequest = (city:any) => {
    return (dispatch:any) => {
        axios(`https://api.weatherapi.com/v1/forecast.json?key=4f6a241a8e1f444ba34214319211804&q=${city}&days=1&lang=vi`).then((res) => {
            return dispatch(getWeatherHourlySuccess(res.data.forecast.forecastday[0].hour))
        }).catch(err => dispatch(getWeatherHourlyFail('Something wrong !')))
    }
}

export const getWeatherDailyRequest = (city:any) => {
    return (dispatch:any) => {
        axios(`https://api.weatherapi.com/v1/forecast.json?key=4f6a241a8e1f444ba34214319211804&q=${city}&days=3&lang=vi`).then((res) => {
            return dispatch(getWeatherDailySuccess(res.data.forecast.forecastday))
        }).catch(err => dispatch(getWeatherDailyFail('Something wrong !')))
    }
}


export const getWeatherSearchRequest = (searchKey:string) => {
    return (dispatch: any) => { 
        axios(`https://vti-aca-april-team1-api.herokuapp.com/api/v1/cities?search=${searchKey}`).then((res) => {
            return dispatch(searchWeatherSuccess(res.data))
        }).catch(err => dispatch(searchWeatherFail('Something wrong !')))
    }
}

export const getWeatherFavoriteRequest = (userId:string) => {
    return (dispatch: any) => { 
        axios(`https://vti-aca-april-team1-api.herokuapp.com/api/v1/favoriteCities/userId/${userId}`).then((res) => {
            return dispatch(getWeatherFavoriteSuccess(res.data))
        }).catch(err => dispatch(getWeatherFavoriteFail('Something wrong !')))
    }
}

export const addWeatherFavoriteRequest = (data:any) => {
    return (dispatch: any) => { 
        axios.post(`https://vti-aca-april-team1-api.herokuapp.com/api/v1/favoriteCities`,data);
    }
}

export const removeWeatherFavoriteRequest = (userId:any,cityId:any) => {
    return (dispatch: any) => { 
        axios.delete(`https://vti-aca-april-team1-api.herokuapp.com/api/v1/favoriteCities/delete/idUser=${userId},idCity=${cityId}`);
    }
}