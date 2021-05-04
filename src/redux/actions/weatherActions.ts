import { WeatherActionTypes } from "../actionTypes/weatherTypes"

export const getWeatherNowSuccess = (payload:any) => {
    return {
        type: WeatherActionTypes.GET_WEATHER_NOW_SUCCESS,
        payload
    }
}

export const getWeatherNowFail = (payload:any) => {
    return {
        type: WeatherActionTypes.GET_WEATHER_NOW_FAIL,
        payload
    }
}

export const getWeatherHourlySuccess = (payload:any) => {
    return {
        type: WeatherActionTypes.GET_WEATHER_HOURLY_SUCCESS,
        payload
    }
}

export const getWeatherHourlyFail = (payload:any) => {
    return {
        type: WeatherActionTypes.GET_WEATHER_HOURLY_FAIL,
        payload
    }
}

export const getWeatherDailySuccess = (payload:any) => {
    return {
        type: WeatherActionTypes.GET_WEATHER_DAILY_SUCCESS,
        payload
    }
}

export const getWeatherDailyFail = (payload:any) => {
    return {
        type: WeatherActionTypes.GET_WEATHER_DAILY_FAIL,
        payload
    }
}