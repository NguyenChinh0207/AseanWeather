import { usersTypes } from "../actionTypes/usersTypes"
interface IAction {
    type: string;
    payload?: any;
}

interface IState {
    success: boolean;
    loading: boolean;
    listUsers:[];
    total:number;

}

const initalState:IState = {
    success: false,
    loading: false,
    listUsers:[],
    total:0
}

export const usersReducer = (state = initalState, action:IAction) => {
    switch(action.type){
        case usersTypes.GET_USERS_SUCCESS: {
            return {
                ...state,
                success: true,
                listUsers: [...action.payload]
            }
        }
        case usersTypes.GET_USERS_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        case usersTypes.GET_TOTAL_USERS_SUCCESS: {
            return {
                ...state,
                success: true,
                total: action.payload
            }
        }
        case usersTypes.GET_TOTAL_USERS_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload.data
            }
        }
        default: {
            return state;
        }
    }
}