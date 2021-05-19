import axios from 'axios';
import { getUsersSuccess,getUsersFail,searchUsersSuccess,searchUsersFail } from "../actions/usersActions";

export const getUsersRequest = () => {
    return (dispatch: any) => {
        axios("https://api-weather-asean.herokuapp.com/api/v1/users").then((res) => {
            return dispatch(getUsersSuccess(res.data))
        }).catch(err => dispatch(getUsersFail('Something wrong !')))

    }
}
// export const getUsersSearchRequest = (search:string) => {
//     return (dispatch: any) => {
//         const textUrl =`https://vti-aca-april-team1-api.herokuapp.com/api/v1/users?search=${search}`;
      
//     }
// }