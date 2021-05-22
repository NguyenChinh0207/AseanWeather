import axios from 'axios';
import { getUsersSuccess,getUsersFail,getTotalUsersFail,getTotalUsersSuccess } from "../actions/usersActions";

let config = {
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    }
  }

export const getUsersRequest = (page:number,size:number) => {
    return (dispatch: any) => {
        axios(`https://api-weather-asean.herokuapp.com/api/v1/users?page=${page}&pageSize=${size}&field=createDate&type=desc`,config).then((res) => {
            return dispatch(getUsersSuccess(res.data))
        }).catch(err => dispatch(getUsersFail('Something wrong !')))

    }
}

export const getTotalUsersRequest = () => {
    return (dispatch: any) => {
        axios(`https://api-weather-asean.herokuapp.com/api/v1/users/total`,config).then((res) => {
            return dispatch(getTotalUsersSuccess(res.data))
        }).catch(err => dispatch(getTotalUsersFail('Something wrong !')))

    }
}

