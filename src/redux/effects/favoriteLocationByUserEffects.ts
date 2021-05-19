import axios from 'axios';
import { getRequest} from "../../data/api"
import {getFavoriteLocationByUserFail,getFavoriteLocationByUserSuccess } from '../actions/favoriteLocationByUserActions';

export const getFavoriteLocationByUserRequest = (id: String) => {
    return (dispatch:any) => {
        // getRequest(`/favoriteCities/userId/${id}`).then((res) => {
            axios(`http://localhost:8080/api/v1/favoriteCities/userId/${id}`).then((res) => {
            return dispatch(getFavoriteLocationByUserSuccess(res.data))
        }).catch(err => dispatch(getFavoriteLocationByUserFail('Something wrong !')))
    }
}