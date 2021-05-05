import { WeatherActionTypes } from "../actionTypes/weatherTypes"


interface IAction {
    type: string;
    payload?: any;
}

interface IState {
    success: boolean;
    loading: boolean;
    loaded: boolean;
    error: string;
    data: any;
    weather: any[],
    location:[]
}

const initalState:IState = {
    success: false,
    loading: false,
    loaded: false,
    error: '',
    data: {},
    weather: [] ,
    location:[]
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
                location: action.payload
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