import { WeatherActionTypes } from "../actionTypes/weatherTypes"


interface IAction {
    type: string;
    payload?: any;
}

const initalState  = {
    success: false,
    loading: false,
    loaded: false,
    error: '',
    data: {},
    weather: [] 
}

export const weatherReducer = (state = initalState, action:IAction) => {
    switch(action.type){
        case WeatherActionTypes.GET_WEATHER_NOW_SUCCESS: {
            return {
                ...state,
                success: true,
                weather: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_NOW_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_HOURLY_SUCCESS: {
            return {
                ...state,
                success: true,
                weather: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_HOURLY_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_DAILY_SUCCESS: {
            return {
                ...state,
                success: true,
                weather: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_DAILY_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        case WeatherActionTypes.SEARCH_WEATHER_SUCCESS: {
            return {
                ...state,
                success: true,
                weather: action.payload
            }
        }
        case WeatherActionTypes.SEARCH_WEATHER_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}