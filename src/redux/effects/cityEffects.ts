import axios from 'axios';
import { getRequest} from "../../data/api"
import { getCityFail, getCitySuccess} from '../actions/cityActions';

export const getCityRequest = (id: Number) => {
    return (dispatch:any) => {
        // getRequest(`/cities/id/${id}`).then((res) => {
            axios(`http://localhost:8080/api/v1/cities/id/${id}`).then((res) => {
            return dispatch(getCitySuccess(res.data))
        }).catch(err => dispatch(getCityFail('Something wrong !')))
    }
}