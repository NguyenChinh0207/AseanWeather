import { FavoriteLocationByUserActionTypes } from "../actionTypes/FavoriteLocationByUserTypes"

export const getFavoriteLocationByUserSuccess = (payload:any) => {
    return {
        type: FavoriteLocationByUserActionTypes.GET_FAVORITE_LOCATION_BY_USER_SUCCESS,
        payload
    }
}

export const getFavoriteLocationByUserFail = (payload:any) => {
    return {
        type: FavoriteLocationByUserActionTypes.GET_FAVORITE_LOCATION_BY_USER_FAIL,
        payload
    }
}