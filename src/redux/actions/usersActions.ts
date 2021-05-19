import { usersTypes } from "../actionTypes/usersTypes";

export const getUsers = () => {
    return {
        type: usersTypes.GET_USERS,
    }
}

export const getUsersSuccess = (payload: any) => {
    return {
        type: usersTypes.GET_USERS_SUCCESS,
        payload
    }
}

export const getUsersFail = (payload: string) => {
    return {
        type: usersTypes.GET_USERS_FAIL,
        payload
    }
}
export const searchUsersSuccess = (payload: any) => {
    return {
        type: usersTypes.SEARCH_USERS_SUCCESS,
        payload
    }
}
export const searchUsersFail = (payload: string) => {
    return {
        type: usersTypes.SEARCH_USERS_FAIL,
        payload
    }
}