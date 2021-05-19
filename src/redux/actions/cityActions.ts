import { CityActionTypes } from "../actionTypes/cityTypes"

export const getCitySuccess = (payload:any) => {
    return {
        type: CityActionTypes.GET_CITY_SUCCESS,
        payload
    }
}

export const getCityFail = (payload:any) => {
    return {
        type: CityActionTypes.GET_CITY_FAIL,
        payload
    }
}